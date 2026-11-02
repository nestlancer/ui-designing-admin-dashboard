/* F21 build — inlines the shared shell, tokens, CSS, runtime, blocks and each variant's own panel script
   into a single self-contained page so a sandboxed file preview (no sibling fetches) still renders the full
   top navbar + sidebar. Run: node build-f21.js   ·   NOT a design generator: the shell, runtime, blocks and
   each variant's panel script are hand-authored files that this only concatenates. The one substitution it
   performs is inlining docs/fixtures/captured-editor-posts.json (the five DOM edit forms, bodies included)
   as window.NL_CAPTURED so the runtime never retypes a captured string. */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const LAB = path.resolve(ROOT, '..', '..');
const read = (p) => fs.readFileSync(p, 'utf8');
const strip = (css) => css.replace(/@import[^;]+;/g, '');

const tokens = strip(read(path.join(LAB, 'shared', 'tokens.css')));
const base = strip(read(path.join(LAB, 'shared', 'base.css')));
const fam = read(path.join(ROOT, 'blog.css'));
const captured = JSON.parse(read(path.join(ROOT, 'docs', 'fixtures', 'captured-editor-posts.json')));
const CAPTURED_JS = 'window.NL_CAPTURED=' + JSON.stringify(captured) + ';';
const runtime = read(path.join(ROOT, 'blog.js'));
const blocks = read(path.join(ROOT, 'blog-blocks.js'));

/* logo + icon sprite inlined as data URIs so no asset request is needed */
const logoLight = read(path.join(LAB, 'assets', 'logo-mark-light.svg'));
const logoDark = read(path.join(LAB, 'assets', 'logo-mark-dark.svg'));
const favicon = read(path.join(LAB, 'assets', 'favicon.svg'));
const sprite = read(path.join(LAB, 'assets', 'lab-icons.svg'));
const encodeSvg = (svg) => encodeURIComponent(svg.replace(/<!--[\s\S]*?-->/g, '').replace(/>\s+</g, '><').trim());
const LOGO_LIGHT = 'data:image/svg+xml,' + encodeSvg(logoLight);
const LOGO_DARK = 'data:image/svg+xml,' + encodeSvg(logoDark);
const FAVICON = 'data:image/svg+xml,' + encodeSvg(favicon);

/* real minification: terser when installed (dev-only; output is committed). Fallback is deliberately
   conservative — it only trims indentation and drops whole-line comments, so regex literals and string
   contents can never be mis-tokenised. */
let terser = null;
try { terser = require('terser'); } catch (e) { try { terser = require('/tmp/node_modules/terser'); } catch (e2) { terser = null; } }
function JS(src) {
  if (terser && terser.minify_sync) {
    try { const r = terser.minify_sync(src, { compress: true, mangle: true, format: { comments: false } }); if (r && r.code) return r.code; } catch (e) { console.warn('terser failed, falling back:', e.message); }
  }
  return src.split('\n').map((l) => l.trim()).filter((l) => l && !/^\/\/|^\/\*.*\*\/$/.test(l)).join('\n');
}
function CSS(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{};:,>])\s*/g, '$1').replace(/;}/g, '}').trim();
}

/* sprite → symbol table (runtime icon() uses <use href="#id">) */
const symbols = {};
const symRe = /<symbol[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g;
let m;
while ((m = symRe.exec(sprite))) symbols[m[1]] = m[2];
const SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">' +
  Object.keys(symbols).map((id) => sprite.match(new RegExp('<symbol[^>]*id="' + id + '"[\\s\\S]*?</symbol>'))[0]).join('') + '</svg>';

const NAV = [
  { group: 'Operations', items: [
    { label: 'Dashboard', icon: 'i-grid', slug: 'F02-dashboard-command-center' },
    { label: 'Pipelines', icon: 'i-compass', slug: 'F04-pipelines-stage-hub' },
    { label: 'Inquiries', icon: 'i-doc', slug: 'F06-contact-inquiries', badge: '14' },
    { label: 'Notifications', icon: 'i-bell', slug: 'F07-notifications-center', badge: '99+', hot: true },
    { label: 'Requests', icon: 'i-list', slug: 'F08-requests-triage', badge: '11' },
    { label: 'Quotes', icon: 'i-card', slug: 'F09-quotes-list' },
    { label: 'Projects', icon: 'i-folder', slug: 'F11-projects-list' },
    { label: 'Payments', icon: 'i-bank', slug: 'F13-payments-money-ops' },
    { label: 'Users', icon: 'i-user', slug: 'F15-users-directory' },
    { label: 'Messages', icon: 'i-chat', slug: 'F17-messages-home', badge: '21' },
    { label: 'Moderation', icon: 'i-shield', slug: 'F19-moderation-queue' },
    { label: 'Analytics', icon: 'i-up', slug: 'F20-analytics-hub' }
  ]},
  { group: 'Content', items: [
    { label: 'Blog', icon: 'i-doc', slug: 'F21-content-blog', active: true },
    { label: 'Portfolio', icon: 'i-folder', slug: 'F22-portfolio-studio', gallery: true },
    { label: 'Media Library', icon: 'i-archive', slug: 'F23-media-library', gallery: true }
  ]},
  { group: 'System', items: [
    { label: 'System Config', icon: 'i-gear', slug: 'F24-system-config', gallery: true },
    { label: 'Webhooks', icon: 'i-share', slug: 'F25-integrations-audit', gallery: true },
    { label: 'Audit Logs', icon: 'i-lock', slug: 'F25-integrations-audit', gallery: true }
  ]}
];
function hrefFor(item) {
  if (item.active) return '#main';
  if (item.gallery) return '../../../index.html#' + item.slug.slice(0, 3).toLowerCase();
  return '../../' + item.slug + '/V1/index.html';
}

function shortcutsDialog(extraRows) {
  const rows = [['?', 'Open this help'], ['Esc', 'Close menu, dialog or drawer'], ['Tab / Shift+Tab', 'Move between controls'], ['← → Home End', 'Move between tabs (roving focus)'], ['↑ ↓ Home End', 'Move inside an open row menu'], ['Enter / Space', 'Activate the focused control']].concat(extraRows || []);
  return `<dialog id="shortcuts" aria-labelledby="shortcuts-h">
  <div class="dialog-head"><h2 id="shortcuts-h">Keyboard shortcuts</h2><form method="dialog"><button class="icon-button" aria-label="Close shortcuts"><svg class="ic" aria-hidden="true"><use href="#i-x"></use></svg></button></form></div>
  <div class="dialog-body"><table class="data-table"><caption class="sr-only">Keyboard shortcuts</caption><thead><tr><th scope="col">Keys</th><th scope="col">Action</th></tr></thead><tbody>${rows.map((r) => `<tr><td><span class="kbd">${r[0]}</span></td><td>${r[1]}</td></tr>`).join('')}</tbody></table><p class="hint">Static lab: no shortcut sends a request. Confirmed actions write a receipt and offer a 10-second local undo.</p></div>
  <div class="dialog-foot"><form method="dialog"><button class="btn btn-secondary">Close</button></form></div>
</dialog>`;
}
const confirmDialog = `<dialog id="confirm" class="confirm" aria-labelledby="confirm-title" aria-describedby="confirm-body">
  <div class="dialog-head"><h2 id="confirm-title">Confirm</h2><button class="icon-button" type="button" data-confirm-cancel aria-label="Cancel and close"><svg class="ic" aria-hidden="true"><use href="#i-x"></use></svg></button></div>
  <div class="dialog-body" id="confirm-body"></div>
  <div class="dialog-foot"><span class="hint" id="confirm-note" style="flex:1 1 240px;align-self:center"></span><button class="btn btn-secondary" type="button" data-confirm-cancel>Cancel</button><button class="btn btn-primary" type="button" id="confirm-ok">Confirm</button></div>
</dialog>`;

const NOSCRIPT = `<noscript>
  <section class="nojs" aria-label="Captured blog figures (no script)">
    <h2>Blog — captured figures</h2>
    <p class="hint">JavaScript is off, so the interactive desk and editor are unavailable. These are the captured values from 2026-10-30 (admin.nestlancer.com/content).</p>
    <div class="nojs-grid">
      <article><h3>Posts</h3><dl><dt>Total posts</dt><dd>110 (= 110 published + 0 drafts)</dd><dt>Published / Drafts</dt><dd>110 / 0 — Scheduled and Archived are not counted by the product</dd><dt>List</dt><dd>Showing 1–20 of 110 · 20 per page · page 1 of 6 · every row Published Oct 5, 2026 · 14 featured</dd><dt>Row 13 slug (only legible one)</dt><dd>/nestjs-microservices-production-guide</dd></dl></article>
      <article><h3>Comments</h3><dl><dt>All comments</dt><dd>4 rows captured, all Approved, by Arjun Mehta, Oct 6, 2026 9:35–9:36 AM · total not shown by the product</dd><dt>Pending review</dt><dd>0 — "The moderation queue is clear."</dd><dt>Reported comments</dt><dd>0 — "No comments are currently reported."</dd></dl></article>
      <article><h3>Analytics (Last 30 days)</h3><dl><dt>Total views / Total likes</dt><dd>107 / 0</dd><dt>Top content (limit 10)</dt><dd>Cutting Deploy Time 4 · WebSockets→SSE 2 · Incident Response Culture 2 · Prisma Replica Patterns 2 · Product-Led Growth 2 · Networking Strategies 1 · Design Ops 1 · Agentic CI/CD 1 · CDN Migration 1 · Market Research 1 — sum 17 of 107 (90 views outside the list)</dd></dl></article>
      <article><h3>Taxonomy · Editor</h3><dl><dt>Categories 4</dt><dd>Business · Case Studies · Design · Technology</dd><dt>Tags 6</dt><dd>JavaScript · NestJS · Next.js · Node.js · React · TypeScript</dd><dt>Authors</dt><dd>1</dd><dt>Editor (DOM 172–175)</dt><dd>Agentic CI/CD with GitHub Actions · Technology · tags NestJS, Node.js · 230 words · 2 min · meta 105/160 · slug /agentic-ci-cd-with-github-actions</dd><dt>Editor (shot 067/068)</dt><dd>Cutting Deploy Time from 45 Minutes to Five · 383 words · 2 min · meta 80/160</dd></dl></article>
    </div>
  </section>
</noscript>`;

function shell({ title, desc, prev, next, variantLabel, JSR, JSB, JSP, shortcutsExtra, labNote }) {
  const nav = NAV.map((g) => `    <nav class="nav-group" aria-label="${g.group}">
      <div class="nav-section">${g.group}</div>
${g.items.map((i) => `      <a class="nav${i.active ? ' active" aria-current="page' : ''}" href="${hrefFor(i)}"><svg class="ic" aria-hidden="true"><use href="#${i.icon}"></use></svg><span class="nav-label">${i.label}</span>${i.badge ? `<span class="nav-badge${i.hot ? ' hot' : ''}">${i.badge}</span>` : ''}</a>`).join('\n')}
    </nav>`).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="icon" href="${FAVICON}" type="image/svg+xml">
<script>(function(){try{var q=new URLSearchParams(location.search).get('theme');var t=q||localStorage.getItem('nl-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();</script>
<style>
${CSS(tokens)}
${CSS(base)}
${CSS(fam)}
${CSS(read(path.join(ROOT, 'variants', variantLabel, 'design.css')))}
</style>
</head>
<body>
<a class="skip-link" href="#main">Skip to blog content</a>
<div id="live" class="visually-hidden" aria-live="polite" role="status"></div>
<div class="app">
  <aside class="sidebar" id="sidebar" aria-label="Operator console navigation">
    <div class="brand">
      <img class="logo-for-light" src="${LOGO_LIGHT}" alt="Nestlancer logo" width="26" height="27">
      <img class="logo-for-dark" src="${LOGO_DARK}" alt="Nestlancer logo" width="26" height="27">
      <span class="brand-text"><span class="brand-name">Nestlancer</span><span class="brand-sub">Operator Console</span></span>
    </div>
${nav}
    <div class="sidebar-account"><span class="account-avatar" aria-hidden="true">A</span><span class="account-meta"><strong>admin@nestlancer.com</strong><span>Administrator</span></span></div>
    <a class="signout" href="../../F01-auth-login/V1/index.html"><svg class="ic" aria-hidden="true"><use href="#i-arrow"></use></svg><span>Sign out</span></a>
  </aside>
  <div class="nav-overlay" id="nav-overlay"></div>
  <div class="workspace">
    <header class="topbar">
      <div class="top-start">
        <button class="icon-button menu-mobile" id="menu" aria-label="Open navigation menu" aria-expanded="false" aria-controls="sidebar"><svg class="ic" aria-hidden="true"><use href="#i-menu"></use></svg></button>
        <button class="icon-button collapse-desktop" id="collapse" aria-label="Collapse sidebar" aria-expanded="true" aria-controls="sidebar"><svg class="ic" aria-hidden="true"><use href="#i-list"></use></svg><span class="collapse-text">Collapse</span></button>
        <nav class="crumb" aria-label="Breadcrumb"><span>Home</span><span class="crumb-sep" aria-hidden="true">›</span><span class="crumb-mid">Content</span><span class="crumb-sep crumb-mid" aria-hidden="true">›</span><b>Blog</b></nav>
      </div>
      <div class="top-end">
        <a class="global-search" href="../../F03-global-search-command-palette/V1/index.html" aria-label="Search pages — command palette"><svg class="ic" aria-hidden="true"><use href="#i-search"></use></svg><span class="gs-text">Search pages…</span><kbd class="kbd">⌘K</kbd></a>
        <span class="top-divider hide-sm" aria-hidden="true"></span>
        <a class="icon-button hide-sm" href="../../F07-notifications-center/V1/index.html" aria-label="Notifications, 99+ unread"><svg class="ic" aria-hidden="true"><use href="#i-bell"></use></svg><span class="top-badge">99+</span></a>
        <a class="icon-button hide-sm" href="../../F17-messages-home/V1/index.html" aria-label="Messages, 21 unread"><svg class="ic" aria-hidden="true"><use href="#i-chat"></use></svg><span class="top-badge teal">21</span></a>
        <a class="icon-button hide-md" href="../../F19-moderation-queue/V1/index.html" aria-label="Moderation queue"><svg class="ic" aria-hidden="true"><use href="#i-shield"></use></svg></a>
        <button class="icon-button" id="theme" aria-pressed="false" aria-label="Switch to dark mode"></button>
        <span class="top-divider" aria-hidden="true"></span>
        <a class="operator" href="../../F16-user-details-safety/V1/index.html" aria-label="Operator account: Riya Kapoor"><span class="operator-mark" aria-hidden="true">RK</span><span class="operator-name">Riya Kapoor</span><svg class="ic" aria-hidden="true"><use href="#i-down"></use></svg></a>
      </div>
    </header>

    <main class="content" id="main">
      <div id="root"></div>
      <section class="local-section" id="terms" tabindex="-1" aria-labelledby="terms-h"><h2 id="terms-h">Terms — local prototype</h2><p>This page is a static design prototype inside the admin-portal lab. It sends no requests, stores nothing beyond your theme, sidebar and view preferences in this browser, and every number on it is a captured value or is labelled DEMO.</p><p><a href="#main">Back to the page</a></p></section>
      <section class="local-section" id="privacy" tabindex="-1" aria-labelledby="privacy-h"><h2 id="privacy-h">Privacy — local prototype</h2><p>No analytics, cookies or external resources are loaded. Local storage keys used: <span class="mono">nl-theme</span>, <span class="mono">nl-nav</span>, <span class="mono">nl-f21-view</span>${variantLabel === 'V4' ? ', <span class="mono">nl-f21-v4-cols</span>' : ''}.</p><p><a href="#main">Back to the page</a></p></section>
      <p class="lab-note">
        Static lab · captured 2026-10-30 from <span class="mono">/content</span>, <span class="mono">/content/posts/{id}/edit</span> and <span class="mono">/content/posts/new</span> · endpoints shown are documented contracts, not requests made by this page · ${labNote || ''}
        <a href="../docs/BASELINE-MAP.md">baseline + tie-out</a> · <a href="../docs/API-MAP.md">API map</a> · <a href="../docs/REPORT-STUDY.md">report study</a> · <a href="../docs/TEMPLATE-RESEARCH.md">research</a> · <a href="../docs/CONCEPTS.md">concepts</a> · <a href="../../../index.html#f21-content-blog">back to gallery</a> · ${prev} · ${next}
      </p>
    </main>
    <footer class="footer"><span>© 2026 Nestlancer · <a href="#terms">Terms</a> · <a href="#privacy">Privacy</a></span><span class="trust"><span class="host">admin.nestlancer.com</span> · Secured · HTTPS</span></footer>
  </div>
</div>
${confirmDialog}
${shortcutsDialog(shortcutsExtra)}
${NOSCRIPT}
${SPRITE}
<script>${CAPTURED_JS}</script>
<script>${JSR}</script>
<script>${JSB}</script>
<script>${JSP}</script>
</body>
</html>`;
}

const VARIANTS = [
  { dir: 'V1', title: 'Blog · Ground-truth desk · Nestlancer Admin', desc: 'F21 V1 — the captured blog desk in its captured order, with every destructive action moved behind a confirm, a receipt and a 10-second undo.',
    prev: '<a href="../V1/index.html" aria-current="page">V1 · Ground-truth desk</a>', next: '<a href="../V2/index.html">next: V2 · Editor spine ›</a>', labNote: 'editor loads the DOM-canonical post (snapshots 172–175) ·' },
  { dir: 'V2', title: 'Blog · Editor spine · Nestlancer Admin', desc: 'F21 V2 — one post, start to finish: posts rail, writing surface with Write/Split/Preview, settings column with SEO snippet and revisions.',
    prev: '<a href="../V1/index.html">‹ prev: V1 · Ground-truth desk</a>', next: '<a href="../V3/index.html">next: V3 · Review desk ›</a>', labNote: 'editor starts on the Split-view screenshot post (067/068) ·' },
  { dir: 'V3', title: 'Blog · Review desk · Nestlancer Admin', desc: 'F21 V3 — clear the discussion first: pending, reported and all comments in lanes beside a context pane with keyboard triage.',
    prev: '<a href="../V2/index.html">‹ prev: V2 · Editor spine</a>', next: '<a href="../V4/index.html">next: V4 · Dense console ›</a>', labNote: 'j/k · a/r/s · z triage keys are declared craft, not captured behaviour ·',
    shortcutsExtra: [['j / k', 'Next / previous comment in the lanes'], ['a / r / s', 'Approve / Reject / Spam the selected comment (confirms first)'], ['z', 'Undo the last undoable action']] },
  { dir: 'V4', title: 'Blog · Dense console · Nestlancer Admin', desc: 'F21 V4 — everything on one screen: a dense selectable table, taxonomy and receipts beside it, moderation and analytics docked beneath, a preview drawer.',
    prev: '<a href="../V3/index.html">‹ prev: V3 · Review desk</a>', next: '<a href="../V5/index.html">next: V5 · Publish choreography ›</a>', labNote: 'multi-select prepares N single requests — no batch endpoint is documented ·' },
  { dir: 'V5', title: 'Blog · Publish choreography · Nestlancer Admin', desc: 'F21 V5 — a guarded publish, step by step: draft, review, schedule, publish, each confirmed action a stamped receipt with a visible undo window.',
    prev: '<a href="../V4/index.html">‹ prev: V4 · Dense console</a>', next: '<a href="../V1/index.html">round again: V1 · Ground-truth desk ↺</a>', labNote: 'the staged post is a DEMO draft copy of the DOM-canonical capture ·' }
];

const JSR = JS(runtime), JSB = JS(blocks);
for (const v of VARIANTS) {
  const JSP = JS(read(path.join(ROOT, 'parts', v.dir + '-panel.js')));
  const out = shell({ title: v.title, desc: v.desc, prev: v.prev, next: v.next, variantLabel: v.dir, JSR, JSB, JSP, shortcutsExtra: v.shortcutsExtra, labNote: v.labNote });
  fs.mkdirSync(path.join(ROOT, v.dir), { recursive: true });
  fs.writeFileSync(path.join(ROOT, v.dir, 'index.html'), out);
  console.log(v.dir, 'built', (out.length / 1024).toFixed(1) + ' KB', terser ? '(terser)' : '(fallback)');
}
