/* F20 build — inlines the shared shell, tokens, CSS, runtime and each variant's own panel script
   into a single self-contained page so a sandboxed file preview (no sibling fetches) still renders
   the full top navbar + sidebar. Run: node build-f20.js   ·   NOT a design generator:
   the shell, runtime and each variant's panel script are hand-authored files that this only concatenates. */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const LAB = path.resolve(ROOT, '..', '..');
const read = (p) => fs.readFileSync(p, 'utf8');
const strip = (css) => css.replace(/@import[^;]+;/g, '');
const minifyCss = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>])\s*/g, '$1').trim();

const tokens = strip(read(path.join(LAB, 'shared', 'tokens.css')));
const base = strip(read(path.join(LAB, 'shared', 'base.css')));
const fam = read(path.join(ROOT, 'analytics.css'));
const runtime = read(path.join(ROOT, 'analytics.js'));
const blocks = read(path.join(ROOT, 'analytics-blocks.js'));

/* logo + icon sprite inlined as data URIs so no asset request is needed */
const logoLight = read(path.join(LAB, 'assets', 'logo-mark-light.svg'));
const logoDark = read(path.join(LAB, 'assets', 'logo-mark-dark.svg'));
const favicon = read(path.join(LAB, 'assets', 'favicon.svg'));
const sprite = read(path.join(LAB, 'assets', 'lab-icons.svg'));
/* URL-encoded SVG is ~25% smaller than base64 for the same file and stays a valid data URI */
const encodeSvg = (svg) => encodeURIComponent(svg.replace(/<!--[\s\S]*?-->/g, '').replace(/>\s+</g, '><').trim());
const LOGO_LIGHT = 'data:image/svg+xml,' + encodeSvg(logoLight);
const LOGO_DARK = 'data:image/svg+xml,' + encodeSvg(logoDark);

/* JS: strip block/line comments and collapse indentation, keeping newlines so ASI stays safe */

/* real minification: terser when it is installed (dev-only dependency, output is committed) */
let terser = null;
try { terser = require('terser'); } catch (e) { terser = null; }
function minifyJsHard(src) {
  if (!terser) return minifyJs(src);
  try {
    const r = terser.minify_sync ? terser.minify_sync(src) : null;
    if (r && r.code) return r.code;
  } catch (e) { /* fall through */ }
  return minifyJs(src);
}
function minifyCssHard(css) {
  return minifyCss(css)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*([{};:,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .replace(/\s+/g, ' ')
    .trim();
}

function minifyJs(src) {
  const out = [];
  let i = 0, n = src.length, str = null, tpl = 0;
  while (i < n) {
    const c = src[i], d = src[i + 1];
    if (str) {
      out.push(c);
      if (c === '\\') { out.push(src[i + 1]); i += 2; continue; }
      if (c === str) str = null;
      i++; continue;
    }
    if (c === '"' || c === "'" || c === '`') { str = c; out.push(c); i++; continue; }
    if (c === '/' && d === '*') { const e = src.indexOf('*/', i + 2); i = e < 0 ? n : e + 2; continue; }
    if (c === '/' && d === '/') { const e = src.indexOf('\n', i); i = e < 0 ? n : e; continue; }
    if (c === ' ' || c === '\t') {
      let j = i; while (j < n && (src[j] === ' ' || src[j] === '\t')) j++;
      const prev = out[out.length - 1] || '';
      const next = src[j] || '';
      if (/[$\w]/.test(prev) && /[$\w]/.test(next)) out.push(' ');
      i = j; continue;
    }
    out.push(c); i++;
  }
  return out.join('').split('\n').map((l) => l.trim()).filter(Boolean).join('\n');
}

const FAVICON = 'data:image/svg+xml,' + encodeSvg(favicon);

/* turn <use href="...lab-icons.svg#i-x"> into a lookup table of symbol bodies */
const symbols = {};
const symRe = /<symbol[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g;
let m;
while ((m = symRe.exec(sprite))) symbols[m[1]] = m[2];
const ICON_JS = 'window.NL_ICONS=' + JSON.stringify(symbols) + ';';
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
    { label: 'Analytics', icon: 'i-up', slug: 'F20-analytics-hub', active: true }
  ]},
  { group: 'Content', items: [
    { label: 'Blog', icon: 'i-doc', slug: 'F21-content-blog', gallery: true },
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
  if (item.gallery) return '../../../index.html#' + item.slug.slice(0, 3).toLowerCase();
  return '../../' + item.slug + '/V1/index.html';
}

const stateControl = `          <details class="lab-states"><summary><svg class="ic" aria-hidden="true"><use href="#i-eye"></use></svg>Preview states</summary>
            <div class="states-pop">
              <div class="seg" role="group" aria-label="Demo state" data-states>
                <button data-state="live" aria-pressed="true">Ready</button>
                <button data-state="loading" aria-pressed="false">Loading</button>
                <button data-state="empty" aria-pressed="false">Empty</button>
                <button data-state="error" aria-pressed="false">Error</button>
              </div>
              <p class="hint">Static lab: switches the rendered state only. No request runs and no number is invented — empty and error deliberately show none.</p>
            </div>
          </details>`;

let CSS = minifyCssHard;
function JS(src, tag) {   /* terser pass, whitespace fallback */

  if (terser && terser.minify) {
    try {
      const r = terser.minify_sync
        ? terser.minify_sync(src, { compress: true, mangle: true, format: { comments: false } })
        : null;
      if (r && r.code) return r.code;
    } catch (e) { console.warn('terser failed, falling back:', e.message); }
  }
  return minifyJs(src);
}
function shell({ title, desc, faviconUri, prev, next, variantLabel, JSR, JSB, JSP }) {
  const nav = NAV.map(g => `    <nav class="nav-group" aria-label="${g.group}">
      <div class="nav-section">${g.group}</div>
${g.items.map(i => `      <a class="nav${i.active ? ' active" aria-current="page' : ''}" href="${hrefFor(i)}"><svg class="ic" aria-hidden="true"><use href="#${i.icon}"></use></svg><span class="nav-label">${i.label}</span>${i.badge ? `<span class="nav-badge${i.hot ? ' hot' : ''}">${i.badge}</span>` : ''}</a>`).join('\n')}
    </nav>`).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="icon" href="${faviconUri}" type="image/svg+xml">
<script>(function(){try{var q=new URLSearchParams(location.search).get('theme');var t=q||localStorage.getItem('nl-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();</script>
<style>
${CSS(tokens)}
${CSS(base)}
${CSS(fam)}
${CSS(read(path.join(ROOT, 'variants', variantLabel, 'design.css')))}
</style>
</head>
<body>
<a class="skip-link" href="#main">Skip to analytics content</a>
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
        <nav class="crumb" aria-label="Breadcrumb"><span>Home</span><span class="crumb-sep" aria-hidden="true">›</span><span class="crumb-mid">Operations</span><span class="crumb-sep crumb-mid" aria-hidden="true">›</span><b>Analytics</b></nav>
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
      <div id="chrome"></div>
      <section id="panel" role="tabpanel" aria-labelledby="tab-revenue" tabindex="-1" class="view" aria-live="polite"></section>

      <p class="lab-note">
        Static lab · captured 2026-10-30 13:38Z from <span class="mono">/analytics</span> · endpoints shown are documented contracts, not requests made by this page ·
        <a href="../../F20-analytics-hub/docs/BASELINE-MAP.md">baseline + tie-out audit</a> · <a href="../../F20-analytics-hub/docs/API-MAP.md">API map</a> ·
        <a href="../../F20-analytics-hub/docs/TEMPLATE-RESEARCH.md">research</a> · <a href="../../../index.html">back to gallery</a> · ${prev} · ${next}
      </p>
    </main>

<noscript>
  <section class="nojs" aria-label="Captured analytics figures (no script)">
    <h2>Analytics hub — captured figures</h2>
    <p class="hint">JavaScript is off, so the interactive charts are unavailable. These are the captured values from 2026-10-30.</p>
    <div class="nojs-grid">
      <article><h3>Revenue</h3><dl>
        <dt>Completed payments (total)</dt><dd>₹7,08,160.00 INR</dd>
        <dt>Period trend</dt><dd>₹7,08,160.00 · +100 · up (screenshot) vs ₹0.00 · −100 · down (DOM) — conflicting</dd>
        <dt>Revenue over time</dt><dd>30 points · latest ₹0.00 · one completed payment</dd>
        <dt>Revenue by category</dt><dd>webDevelopment ₹6,66,100.00 · custom ₹30,060.00 · marketing ₹12,000.00 (sums to the total)</dd>
      </dl></article>
      <article><h3>Users</h3><dl>
        <dt>Total / Active / New this month</dt><dd>34 / 34 / 34 — identical triple, marked unverified (C16)</dd>
        <dt>By role</dt><dd>User: 33 · Admin: 1</dd>
        <dt>User activity</dt><dd>one bucket of 34 on 2026-10-04</dd>
      </dl></article>
      <article><h3>Projects</h3><dl>
        <dt>Total projects</dt><dd>18 (4 have no counted status)</dd>
        <dt>Counted</dt><dd>ACTIVE 4 · COMPLETED 10 · ON HOLD 0 · CANCELLED 0 = 14</dd>
        <dt>Avg. completion / On-time</dt><dd>0 days · 100% of 10 completions</dd>
        <dt>API</dt><dd>GET /api/dashboard/projects — failing in production</dd>
      </dl></article>
      <article><h3>Requests</h3><dl>
        <dt>Total requests</dt><dd>46 · conversion 43.9% (18 ÷ 41) · avg. response 0 minutes · open pipeline 13</dd>
        <dt>By status</dt><dd>Draft 5 · Submitted 11 · Converted To Project 18 · Rejected 3 · Expired Quote 7 · Under Review 2</dd>
        <dt>By category</dt><dd>webDevelopment 37 · custom 4 · mobileApp 2 · design 1 · consulting 1 · marketing 1</dd>
        <dt>Quote conversion</dt><dd>36 quotes · ₹9,68,950.00 accepted · 50% acceptance</dd>
      </dl></article>
    </div>
  </section>
</noscript>
${SPRITE}
<script>${ICON_JS}</script>
<script>${JSR}</script>
<script>${JSB}</script>
<script>${JSP}</script>
</body>
</html>`;
}

/* ---- per-variant metadata + build ---- */
const VARIANTS = [
  { dir: 'V1', title: 'Analytics · Calibrated ledger · Nestlancer Admin', desc: 'F20 V1 — the captured analytics hub with every axis labelled, every gap admitted and provenance one click away.',
    prev: '<a href="../V1/index.html" aria-current="page">V1 · Calibrated ledger</a>', next: '<a href="../V2/index.html">next: V2 · Signal spine ›</a>' },
  { dir: 'V2', title: 'Analytics · Signal spine · Nestlancer Admin', desc: 'F20 V2 — one shared time axis: query-value cards over series backgrounds, tables docked in a rail.',
    prev: '<a href="../V1/index.html">‹ prev: V1 · Calibrated ledger</a>', next: '<a href="../V3/index.html">next: V3 · Readout stack ›</a>' },
  { dir: 'V3', title: 'Analytics · Readout stack · Nestlancer Admin', desc: 'F20 V3 — tables are the interface: every rate expands into its own computation and endpoint.',
    prev: '<a href="../V2/index.html">‹ prev: V2 · Signal spine</a>', next: '<a href="../V4/index.html">next: V4 · Dense board ›</a>' },
  { dir: 'V4', title: 'Analytics · Dense board · Nestlancer Admin', desc: 'F20 V4 — compact bento board with an attention strip above the metrics.',
    prev: '<a href="../V3/index.html">‹ prev: V3 · Readout stack</a>', next: '<a href="../V5/index.html">next: V5 · Choreograph ›</a>' },
  { dir: 'V5', title: 'Analytics · Choreograph · Nestlancer Admin', desc: 'F20 V5 — range, read, evidence, export: an annotated stage with an exportable receipt.',
    prev: '<a href="../V4/index.html">‹ prev: V4 · Dense board</a>', next: '<a href="../V1/index.html">round again: V1 · Calibrated ledger ↺</a>' }
];

fs.mkdirSync(path.join(ROOT, 'variants'), { recursive: true });
for (const v of VARIANTS) {
  /* per-variant scripts are minified asynchronously */
  /* design.css is authored per variant inside variants/<V>/ ; keep V#/index.html output */
  const JSR = JS(runtime, v.dir + '-runtime');
  const JSB = JS(blocks);
  const JSP = JS(read(path.join(ROOT, 'parts', v.dir + '-panel.js')));
  const out = shell({
    title: v.title, desc: v.desc, faviconUri: FAVICON,
    prev: v.prev, next: v.next, variantLabel: v.dir, JSR, JSB, JSP
  });
  fs.writeFileSync(path.join(ROOT, v.dir, 'index.html'), out);
  console.log(v.dir, 'built', (out.length / 1024).toFixed(1) + ' KB');
}
