#!/usr/bin/env python3
"""Inline local CSS/JS/assets into every admin-portal-lab HTML file.

Each HTML document becomes independently reviewable via file:// with no
sibling files or network required for rendering / client-side behavior.
Navigation links to other lab pages remain relative destinations.
"""
from __future__ import annotations

import base64
import json
import mimetypes
import re
import sys
from pathlib import Path
from urllib.parse import unquote

LAB = Path(__file__).resolve().parent.parent
# Canonical shell/token sources live under tooling/ after the shared/ migration.
SHARED = LAB / "tooling" / "shell-sources"
if not SHARED.is_dir():
    SHARED = LAB / "shared"  # backward-compatible fallback
ASSETS = LAB / "assets"

MIME = {
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".css": "text/css",
    ".js": "text/javascript",
}

LINK_STYLESHEET_RE = re.compile(
    r"""<link\b(?=[^>]*\brel\s*=\s*["']stylesheet["'])[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*/?>""",
    re.I,
)
# also match when href comes before rel
LINK_STYLESHEET_RE2 = re.compile(
    r"""<link\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*\brel\s*=\s*["']stylesheet["'][^>]*/?>""",
    re.I,
)
LINK_ICON_RE = re.compile(
    r"""<link\b(?=[^>]*\brel\s*=\s*["'](?:icon|shortcut icon)["'])[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*/?>""",
    re.I,
)
LINK_ICON_RE2 = re.compile(
    r"""<link\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*\brel\s*=\s*["'](?:icon|shortcut icon)["'][^>]*/?>""",
    re.I,
)
SCRIPT_SRC_RE = re.compile(
    r"""<script\b([^>]*)\bsrc\s*=\s*["']([^"']+)["']([^>]*)>\s*</script>""",
    re.I,
)
IMG_SRC_RE = re.compile(
    r"""(<img\b[^>]*?\bsrc\s*=\s*)["']([^"']+)["']""",
    re.I,
)
USE_HREF_RE = re.compile(
    r"""(<use\b[^>]*?\b(?:xlink:)?href\s*=\s*)["']([^"']+)["']""",
    re.I,
)
CSS_IMPORT_RE = re.compile(
    r"""@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;""",
    re.I,
)
CSS_URL_RE = re.compile(
    r"""url\(\s*(["']?)([^"')]+)\1\s*\)""",
    re.I,
)
FAMILY_PATH_RE = re.compile(r"/(F\d\d-[^/]+)/(V\d+)/", re.I)


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def file_to_data_url(path: Path) -> str:
    data = path.read_bytes()
    mime = MIME.get(path.suffix.lower()) or mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    if mime == "image/svg+xml":
        # Prefer URL-encoded SVG for smaller size / readability
        text = data.decode("utf-8")
        text = re.sub(r"<!--.*?-->", "", text, flags=re.S)
        text = re.sub(r">\s+<", "><", text).strip()
        return "data:image/svg+xml," + _encode_svg(text)
    b64 = base64.b64encode(data).decode("ascii")
    return f"data:{mime};base64,{b64}"


def _encode_svg(svg: str) -> str:
    # encodeURIComponent-compatible for data URLs
    return (
        svg.replace("%", "%25")
        .replace("#", "%23")
        .replace('"', "%22")
        .replace("'", "%27")
        .replace("<", "%3C")
        .replace(">", "%3E")
        .replace("&", "%26")
        .replace("{", "%7B")
        .replace("}", "%7D")
        .replace(" ", "%20")
        .replace("\n", "")
        .replace("\r", "")
        .replace("\t", "")
    )


def resolve_rel(base_file: Path, href: str) -> Path | None:
    if not href or href.startswith(("data:", "http://", "https://", "mailto:", "tel:", "javascript:", "#", "blob:")):
        return None
    # strip query/hash for file resolution
    clean = href.split("?", 1)[0].split("#", 1)[0]
    if not clean:
        return None
    try:
        target = (base_file.parent / unquote(clean)).resolve()
    except Exception:
        return None
    return target


def escape_style(css: str) -> str:
    # Prevent premature </style> close
    return css.replace("</style", "<\\/style").replace("</STYLE", "<\\/STYLE")


def escape_script(js: str) -> str:
    # Prevent premature </script> close; keep valid JS
    return (
        js.replace("</script", "<\\/script")
        .replace("</Script", "<\\/Script")
        .replace("</SCRIPT", "<\\/SCRIPT")
    )


def load_css_with_imports(css_path: Path, seen: set[Path] | None = None) -> str:
    seen = seen or set()
    css_path = css_path.resolve()
    if css_path in seen:
        return ""
    seen.add(css_path)
    if not css_path.is_file():
        print(f"  WARN missing CSS: {css_path}", file=sys.stderr)
        return f"/* missing: {css_path.name} */"
    css = read_text(css_path)

    def repl_import(m: re.Match) -> str:
        imp = m.group(1)
        target = resolve_rel(css_path, imp)
        if target and target.is_file():
            return "\n" + load_css_with_imports(target, seen) + "\n"
        if imp.startswith(("http://", "https://")):
            return f"/* dropped remote @import {imp} — offline */\n"
        print(f"  WARN unresolved @import {imp} from {css_path}", file=sys.stderr)
        return f"/* unresolved @import {imp} */\n"

    css = CSS_IMPORT_RE.sub(repl_import, css)

    def repl_url(m: re.Match) -> str:
        quote, url = m.group(1), m.group(2).strip()
        if url.startswith(("data:", "#", "http://", "https://")):
            return m.group(0)
        target = resolve_rel(css_path, url)
        if target and target.is_file():
            data = file_to_data_url(target)
            return f"url({quote}{data}{quote})"
        return m.group(0)

    return CSS_URL_RE.sub(repl_url, css)


def lab_prefix_for(html_path: Path) -> str:
    rel = html_path.resolve().relative_to(LAB.resolve())
    depth = len(rel.parts) - 1  # directories above file
    if depth <= 0:
        return ""
    return "../" * depth


def detect_family_version(html_path: Path) -> tuple[str | None, str | None]:
    rel = "/" + str(html_path.resolve().relative_to(LAB.resolve())).replace("\\", "/")
    m = FAMILY_PATH_RE.search(rel)
    if m:
        return m.group(1), m.group(2).upper()
    # F24 family-root pages etc.
    m2 = re.search(r"/(F\d\d-[^/]+)/", rel, re.I)
    if m2:
        return m2.group(1), None
    return None, None


def build_embedded_shell_js(html_path: Path) -> str:
    original = read_text(SHARED / "dashboard-shell.js")
    shell_css = read_text(SHARED / "dashboard-shell.css")
    logo_path = ASSETS / "logo-mark-light.svg"
    logo_data = file_to_data_url(logo_path) if logo_path.is_file() else ""

    family_folder, version = detect_family_version(html_path)
    if not family_folder:
        # Should not be called for non-dashboard pages
        family_code = "F02"
        requested = "V1"
    else:
        family_code = family_folder[:3].upper()
        requested = (version or "V1").upper()

    prefix = lab_prefix_for(html_path)
    # JSON-safe literals
    css_lit = json.dumps(shell_css)
    logo_lit = json.dumps(logo_data)
    family_lit = json.dumps(family_code)
    version_lit = json.dumps(requested)
    prefix_lit = json.dumps(prefix)

    # Rewrite the shell to not depend on script.src / external CSS
    # Keep behavior identical otherwise.
    return f"""(function () {{
  'use strict';
  var family = {family_lit};
  var requestedVersion = {version_lit};
  var version = /^V[1-5]$/.test(requestedVersion) ? requestedVersion : 'V1';
  var labPrefix = {prefix_lit};
  var shellCss = {css_lit};
  var logoSrc = {logo_lit};
  var groups = [
    ['Overview', [['F02','Dashboard','F02-dashboard-command-center','▦'],['F03','Global search','F03-global-search-command-palette','⌕'],['F04','Pipelines','F04-pipelines-stage-hub','◇'],['F05','User & project hubs','F05-pipeline-user-project-hubs','◎']]],
    ['Operations', [['F06','Inquiries','F06-contact-inquiries','✉'],['F07','Notifications','F07-notifications-center','♧'],['F08','Requests','F08-requests-triage','≡'],['F09','Quotes','F09-quotes-list','▤'],['F10','Quote builder','F10-quote-details-builder','✎'],['F11','Projects','F11-projects-list','▣'],['F12','Project delivery','F12-project-details-delivery','◫'],['F13','Payments','F13-payments-money-ops','₹'],['F14','Settlement & legal','F14-settlement-legal','⚖'],['F15','Users','F15-users-directory','♙'],['F16','User details & safety','F16-user-details-safety','◉'],['F17','Messages','F17-messages-home','▧'],['F18','Message thread','F18-messages-thread','▱'],['F19','Moderation','F19-moderation-queue','⚑'],['F20','Analytics','F20-analytics-hub','▥']]],
    ['Content', [['F21','Blog','F21-content-blog','▤'],['F22','Portfolio','F22-portfolio-studio','▣'],['F23','Media library','F23-media-library','▧']]],
    ['System', [['F24','System configuration','F24-system-config','⚙'],['F25','Integrations & audit','F25-integrations-audit','⌘']]]
  ];
  function url(folder) {{
    var targetVersion = folder.indexOf('F05-') === 0 && /^V[67]$/.test(requestedVersion) ? requestedVersion : version;
    return labPrefix + 'families/' + folder + '/' + targetVersion + '/index.html';
  }}
  function galleryUrl() {{ return labPrefix + 'index.html'; }}
  var current = groups.flatMap(function(g){{return g[1]}}).find(function(i){{return i[0]===family}});
  var host = document.createElement('div'); host.id='shared-dashboard-shell';
  var shadow=host.attachShadow({{mode:'open'}});
  var links=groups.map(function(g){{return '<div class="group">'+g[0]+'</div>'+g[1].map(function(i){{return '<a class="item" '+(i[0]===family?'aria-current="page" ':'')+'href="'+url(i[2])+'"><span class="ico" aria-hidden="true">'+i[3]+'</span><span>'+i[1]+'</span></a>'}}).join('')}}).join('');
  var styleEl = document.createElement('style');
  styleEl.textContent = shellCss;
  shadow.appendChild(styleEl);
  var wrap = document.createElement('div');
  wrap.innerHTML='<button class="shade" aria-label="Close navigation"></button><aside class="sidebar" id="shared-nav" aria-label="Main navigation"><a class="brand" href="'+galleryUrl()+'"><img src="'+logoSrc+'" alt=""><span><strong>Nestlancer</strong><small>Admin workspace</small></span></a><nav aria-label="Dashboard sections">'+links+'</nav><div class="foot">Design lab · Offline prototype</div></aside><header class="topbar"><button class="action menu" aria-controls="shared-nav" aria-expanded="false" aria-label="Open navigation">☰</button><div class="breadcrumb">Admin <span aria-hidden="true"> / </span> <strong>'+(current?current[1]:'Dashboard')+'</strong></div><div class="actions"><a class="action" href="'+url('F03-global-search-command-palette')+'" aria-label="Search pages">⌕ <span class="search-label">&nbsp; Search pages</span></a><a class="action" href="'+url('F07-notifications-center')+'" aria-label="Notifications">♧</a><button class="action theme" aria-label="Toggle dark mode">◐</button><a class="action badge" href="'+galleryUrl()+'">Lab gallery ↗</a><div class="avatar"><span>NA</span> Nestlancer Admin</div></div></header>';
  while (wrap.firstChild) shadow.appendChild(wrap.firstChild);
  document.body.appendChild(host);
  var sidebar=shadow.querySelector('.sidebar'), shade=shadow.querySelector('.shade'), menu=shadow.querySelector('.menu'), theme=shadow.querySelector('.theme');
  function drawer(open){{sidebar.classList.toggle('open',open);shade.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));if(!open)menu.focus()}}
  menu.addEventListener('click',function(){{drawer(!sidebar.classList.contains('open'))}}); shade.addEventListener('click',function(){{drawer(false)}});
  document.addEventListener('keydown',function(e){{if(e.key==='Escape'&&sidebar.classList.contains('open'))drawer(false)}});
  function syncTheme(){{var dark=document.documentElement.classList.contains('dark');host.toggleAttribute('dark',dark);theme.setAttribute('aria-pressed',String(dark));theme.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode')}}
  theme.addEventListener('click',function(){{document.documentElement.classList.toggle('dark');try{{localStorage.setItem('nl-theme',document.documentElement.classList.contains('dark')?'dark':'light')}}catch(e){{}} try{{var u=new URL(location.href);if(u.searchParams.has('theme')){{u.searchParams.delete('theme');history.replaceState(history.state,'',u.href)}}}}catch(e){{}} syncTheme()}});
  new MutationObserver(syncTheme).observe(document.documentElement,{{attributes:true,attributeFilter:['class']}});syncTheme();
  document.querySelectorAll('[data-legacy-dashboard-chrome]').forEach(function(node){{ node.inert = true; node.setAttribute('aria-hidden', 'true'); }});
  document.querySelectorAll('footer').forEach(function(node){{
    node.setAttribute('data-legacy-dashboard-footer', '');
    node.inert = true;
    node.setAttribute('aria-hidden', 'true');
  }});
  var footer = document.createElement('footer');
  footer.id = 'shared-dashboard-footer';
  footer.innerHTML = '<span>© 2026 Nestlancer · Design lab · Offline prototype</span> <span>Terms · Privacy · Secured · HTTPS (preview)</span>';
  var workspace = document.querySelector('[data-dashboard-workspace]');
  var main = (workspace || document).querySelector('main');
  if (main && main.parentNode) main.parentNode.insertBefore(footer, main.nextSibling);
  else if (workspace) workspace.appendChild(footer);
  else document.body.appendChild(footer);
  document.documentElement.classList.add('shared-chrome-ready');
}})();"""


def sprite_markup() -> str:
    sprite = read_text(ASSETS / "lab-icons.svg")
    # Extract symbols into a hidden inline SVG
    symbols = re.findall(r"<symbol[\s\S]*?</symbol>", sprite)
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" '
        'style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">'
        + "".join(symbols)
        + "</svg>"
    )


def replace_stylesheets(html: str, html_path: Path) -> str:
    def handler(m: re.Match) -> str:
        href = m.group(1)
        if href.startswith("data:"):
            return m.group(0)
        target = resolve_rel(html_path, href)
        if not target or not target.is_file():
            print(f"  WARN stylesheet missing: {href} ({html_path})", file=sys.stderr)
            return f"<!-- missing stylesheet {href} -->"
        css = load_css_with_imports(target)
        return f"<style>\n/* inlined from {href} */\n{escape_style(css)}\n</style>"

    html = LINK_STYLESHEET_RE.sub(handler, html)
    html = LINK_STYLESHEET_RE2.sub(handler, html)
    return html


def replace_icons(html: str, html_path: Path) -> str:
    def handler(m: re.Match) -> str:
        href = m.group(1)
        if href.startswith("data:"):
            return m.group(0)
        target = resolve_rel(html_path, href)
        if not target or not target.is_file():
            print(f"  WARN icon missing: {href}", file=sys.stderr)
            return m.group(0)
        data = file_to_data_url(target)
        # rebuild a simple icon link
        return f'<link rel="icon" href="{data}" type="image/svg+xml">'

    html = LINK_ICON_RE.sub(handler, html)
    html = LINK_ICON_RE2.sub(handler, html)
    return html


def replace_scripts(html: str, html_path: Path) -> str:
    def handler(m: re.Match) -> str:
        before, src, after = m.group(1), m.group(2), m.group(3)
        if src.startswith(("data:", "http://", "https://", "blob:")):
            return m.group(0)
        attrs = (before + " " + after).strip()
        # Drop src; defer/async are meaningless without src for classic inline scripts
        # and would execute too early if the tag remains in <head>.
        attrs = re.sub(r"""\bsrc\s*=\s*["'][^"']*["']""", "", attrs, flags=re.I)
        attrs = re.sub(r"\b(?:defer|async)\b", "", attrs, flags=re.I)
        attrs = re.sub(r"\s+", " ", attrs).strip()
        attr_str = (" " + attrs) if attrs else ""

        if "dashboard-shell.js" in src.replace("\\", "/"):
            js = build_embedded_shell_js(html_path)
            return f"<script{attr_str}>\n{escape_script(js)}\n</script>"

        target = resolve_rel(html_path, src)
        if not target or not target.is_file():
            print(f"  WARN script missing: {src} ({html_path})", file=sys.stderr)
            return f"<!-- missing script {src} -->"
        js = read_text(target)
        return f"<script{attr_str}>\n/* inlined from {src} */\n{escape_script(js)}\n</script>"

    return SCRIPT_SRC_RE.sub(handler, html)


def replace_images(html: str, html_path: Path) -> str:
    def handler(m: re.Match) -> str:
        prefix, src = m.group(1), m.group(2)
        if src.startswith(("data:", "http://", "https://", "blob:")):
            return m.group(0)
        target = resolve_rel(html_path, src)
        if not target or not target.is_file():
            # leave as-is; may be intentional placeholder
            return m.group(0)
        data = file_to_data_url(target)
        return f'{prefix}"{data}"'

    return IMG_SRC_RE.sub(handler, html)


def replace_svg_uses(html: str, html_path: Path) -> tuple[str, bool]:
    needs_sprite = False

    def handler(m: re.Match) -> str:
        nonlocal needs_sprite
        prefix, href = m.group(1), m.group(2)
        if href.startswith("#") or href.startswith("data:"):
            return m.group(0)
        if "lab-icons.svg#" in href.replace("\\", "/"):
            frag = href.split("#", 1)[1]
            needs_sprite = True
            return f'{prefix}"#{frag}"'
        # Other local SVG fragment refs: try data URL (fragments on data URLs are unreliable)
        # Prefer sprite-style if same file pattern
        if ".svg#" in href:
            path_part, frag = href.split("#", 1)
            target = resolve_rel(html_path, path_part)
            if target and target.name == "lab-icons.svg":
                needs_sprite = True
                return f'{prefix}"#{frag}"'
        return m.group(0)

    return USE_HREF_RE.sub(handler, html), needs_sprite


def inject_sprite(html: str) -> str:
    sprite = sprite_markup()
    if re.search(r'id=["\']i-grid["\']', html):
        # already has symbols
        return html
    # Prefer start of body
    m = re.search(r"<body([^>]*)>", html, re.I)
    if m:
        i = m.end()
        return html[:i] + "\n" + sprite + "\n" + html[i:]
    return sprite + html


def process_file(html_path: Path) -> dict:
    original = read_text(html_path)
    html = original
    html = replace_stylesheets(html, html_path)
    html = replace_icons(html, html_path)
    html = replace_scripts(html, html_path)
    html = replace_images(html, html_path)
    html, needs_sprite = replace_svg_uses(html, html_path)
    if needs_sprite:
        html = inject_sprite(html)

    changed = html != original
    if changed:
        html_path.write_text(html, encoding="utf-8")
    return {
        "path": str(html_path.relative_to(LAB)),
        "changed": changed,
        "bytes": len(html.encode("utf-8")),
    }


def main(argv: list[str] | None = None) -> int:
    argv = list(sys.argv[1:] if argv is None else argv)
    only: list[Path] = []
    if "--only" in argv:
        i = argv.index("--only")
        only = [Path(a).resolve() for a in argv[i + 1 :]]
    if only:
        html_files = only
    else:
        html_files = sorted(
            p for p in LAB.rglob("*.html") if "node_modules" not in p.parts
        )
    print(f"Processing {len(html_files)} HTML files under {LAB}")
    results = []
    for p in html_files:
        rel = p.relative_to(LAB) if p.is_relative_to(LAB) else p
        print(f"→ {rel}")
        results.append(process_file(p))
    changed = sum(1 for r in results if r["changed"])
    print(f"\nDone. {changed}/{len(results)} files modified.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
