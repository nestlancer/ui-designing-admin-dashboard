#!/usr/bin/env python3
"""Fix remaining @imports and audit every lab HTML for external resource deps."""
from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path

LAB = Path(__file__).resolve().parent.parent
_TOKENS_PATH = LAB / "tooling" / "shell-sources" / "tokens.css"
if not _TOKENS_PATH.is_file():
    _TOKENS_PATH = LAB / "shared" / "tokens.css"
TOKENS = _TOKENS_PATH.read_text(encoding="utf-8")
IMPORT_RE = re.compile(r"""@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;""", re.I)


def fix_imports() -> list[str]:
    fixed = []
    for p in sorted(LAB.rglob("*.html")):
        if "node_modules" in p.parts:
            continue
        text = p.read_text(encoding="utf-8")
        if not IMPORT_RE.search(text):
            continue

        def repl(m: re.Match) -> str:
            href = m.group(1)
            if "tokens.css" in href:
                return f"\n/* inlined @import {href} */\n{TOKENS}\n"
            target = (p.parent / href).resolve()
            if target.is_file():
                return f"\n/* inlined @import {href} */\n{target.read_text(encoding='utf-8')}\n"
            print(f"UNRESOLVED {p.relative_to(LAB)}: {href}", file=sys.stderr)
            return m.group(0)

        new = IMPORT_RE.sub(repl, text)
        if new != text:
            p.write_text(new, encoding="utf-8")
            fixed.append(str(p.relative_to(LAB)))
    return fixed


def expects_shell(rel: str) -> bool:
    if rel == "index.html":
        return False
    if "/F01-" in rel:
        return False
    if rel.endswith("F24-system-config/index.html") or "source-view.html" in rel:
        return False
    # dashboard variants under F02-F25 including V6/V7 complete
    if re.search(r"F(?!01)\d\d-[^/]+/V\d+/", rel):
        return True
    return False


def audit() -> dict:
    files = sorted(p for p in LAB.rglob("*.html") if "node_modules" not in p.parts)
    report = {
        "total": len(files),
        "issues": {},
        "shell_missing": [],
        "shell_ok": [],
        "no_shell": [],
        "sprite_external": [],
    }

    for p in files:
        rel = str(p.relative_to(LAB))
        t = p.read_text(encoding="utf-8")
        issues = []

        for m in re.finditer(r"""<link\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>""", t, re.I):
            href = m.group(1)
            tag = m.group(0)
            if href.startswith("data:"):
                continue
            if href.startswith(("http://", "https://")):
                # remote navigation/docs links are OK; stylesheet/icon are not
                if re.search(r"""rel\s*=\s*["'](?:stylesheet|icon|shortcut icon)["']""", tag, re.I):
                    issues.append(("remote-resource-link", href))
                continue
            if re.search(r"""rel\s*=\s*["']stylesheet["']""", tag, re.I):
                issues.append(("stylesheet", href))
            elif re.search(r"""rel\s*=\s*["'](?:icon|shortcut icon)["']""", tag, re.I):
                issues.append(("icon", href))

        for m in re.finditer(r"""<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["']""", t, re.I):
            src = m.group(1)
            if src.startswith(("data:", "blob:")):
                continue
            if src.startswith(("http://", "https://")):
                issues.append(("remote-script", src))
            else:
                issues.append(("script", src))

        for m in re.finditer(r"""<(?:img|iframe|source|embed)\b[^>]*\bsrc\s*=\s*["']([^"']+)["']""", t, re.I):
            src = m.group(1)
            if src.startswith(("data:", "blob:", "http://", "https://")):
                continue
            if src.startswith("#") or not src:
                continue
            issues.append(("media", src))

        for m in re.finditer(r"""(?:xlink:)?href\s*=\s*["']([^"']*\.svg[^"']*)["']""", t, re.I):
            href = m.group(1)
            if href.startswith(("data:", "#")):
                continue
            issues.append(("svg-ref", href))
            if "lab-icons.svg#" in href:
                report["sprite_external"].append(rel)

        for m in IMPORT_RE.finditer(t):
            issues.append(("css-import", m.group(1)))

        for m in re.finditer(r"""url\(\s*["']?((?:\.\./|shared/|assets/)[^"')]+)""", t):
            issues.append(("css-url", m.group(1)))

        for m in re.finditer(r"""fetch\s*\(\s*["'`]([^"'`]+)["'`]""", t):
            u = m.group(1)
            if not u.startswith(("http://", "https://", "data:")):
                issues.append(("fetch", u))

        if issues:
            report["issues"][rel] = issues

        has_shell = "shared-dashboard-shell" in t and "shellCss" in t
        # also accept older/alternate embedding markers
        if not has_shell:
            has_shell = "shared-dashboard-shell" in t and ":host" in t and "shared-chrome-ready" in t

        if expects_shell(rel):
            if has_shell:
                report["shell_ok"].append(rel)
            else:
                report["shell_missing"].append(rel)
        else:
            report["no_shell"].append(rel)

    return report


def main() -> int:
    fixed = fix_imports()
    print(f"Fixed @import in {len(fixed)} files:")
    for f in fixed:
        print(f"  {f}")

    report = audit()
    print(f"\nTotal HTML: {report['total']}")
    print(f"Files with issues: {len(report['issues'])}")
    print(f"Shell ok: {len(report['shell_ok'])}  missing: {len(report['shell_missing'])}  no-shell pages: {len(report['no_shell'])}")
    print(f"External sprite refs: {len(report['sprite_external'])}")

    if report["shell_missing"]:
        print("\nMISSING SHELL:")
        for r in report["shell_missing"]:
            print(f"  {r}")

    if report["issues"]:
        print("\nREMAINING ISSUES:")
        for rel, items in sorted(report["issues"].items()):
            print(f"\n{rel}")
            for kind, ref in items:
                print(f"  [{kind}] {ref[:140]}")
    else:
        print("\nNo external resource dependencies found in any HTML file.")

    return 1 if report["issues"] or report["shell_missing"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
