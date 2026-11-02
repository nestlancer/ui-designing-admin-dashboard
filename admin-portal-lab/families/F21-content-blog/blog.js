/* F21 · Content · Blog + Editor — shared runtime.
   Every value in FIXTURE is a captured value (Gate S) or is prefixed DEMO. Nothing is repaired.
   This file owns: fixture + tie-out, formatting, the confirm → receipt → undo engine (C17 by analogy),
   overflow menus, editor derivations, lab state switch and the shell behaviours.
   Variant composition is NOT here: each V#/index.html supplies NL_VARIANT.render(state, api). */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ fixture */
  var CAPTURED = '2026-10-30';
  var CATS = [
    { id: '01a10a1d-4f78-771a-9d9a-86843067dbba', name: 'Business' },
    { id: '01a10a1d-4fd6-76ec-af10-9991222706ff', name: 'Case Studies' },
    { id: '01a10a1d-4f2e-7069-b105-bc8f481d5fc1', name: 'Design' },
    { id: '01a10a1d-4ee5-771a-939d-cf7e3bf79496', name: 'Technology' }
  ];
  var TAGS = ['JavaScript', 'NestJS', 'Next.js', 'Node.js', 'React', 'TypeScript'];
  var AUTHORS = [{ name: 'Riya Kapoor' }];
  var PUB = 'Oct 5, 2026';

  /* page-1 rows of /content exactly as screenshot 009 lists them (title · category · min · views · featured) */
  var ROWS = [
    ['Cutting Deploy Time from 45 Minutes to Five', 'Case Studies', 2, 4, true],
    ['Kubernetes Migration Cost Analysis', 'Case Studies', 3, 1, true],
    ['Reliable Notification Workers at Scale', 'Case Studies', 3, 1, true],
    ['Netflix: Seven Years from Monolith to Microservices', 'Case Studies', 3, 1, true],
    ['Empty State UX Patterns That Guide Users', 'Design', 1, 1, true],
    ['WCAG 2.2 Accessibility Compliance Guide', 'Design', 1, 1, true],
    ['Market Research for Freelance Niches', 'Business', 1, 1, true],
    ['Building Lean AI-Native Startup Teams', 'Business', 1, 1, true],
    ['SaaS Metrics Every Founder Must Track', 'Business', 1, 1, true],
    ['Secrets Management with Infisical and Vault Patterns', 'Technology', 1, 1, true],
    ['Hardening Docker Compose for Production-Like Dev', 'Technology', 1, 1, true],
    ['Kubernetes Cost Optimization in 2026', 'Technology', 2, 0, true],
    ['Building Production-Ready Microservices with NestJS', 'Case Studies', 2, 0, true, 'nestjs-microservices-production-guide'],
    ['AI-First Development Workflows in 2026', 'Technology', 2, 0, true],
    ['Scaling a Freelance Marketplace Architecture', 'Case Studies', 3, 1, false],
    ['GDPR Compliance Platform Rebuild', 'Case Studies', 2, 1, false],
    ['Migrating from WebSockets to SSE', 'Case Studies', 2, 2, false],
    ['Elasticsearch Migration for Search Features', 'Case Studies', 2, 1, false],
    ['API Versioning Without Breaking Mobile Clients', 'Case Studies', 2, 1, false],
    ['Multi-Region Deployment Case Study', 'Case Studies', 2, 1, false]
  ];
  function slugify(s) { return String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
  var POSTS = ROWS.map(function (r, i) {
    return {
      id: 'shot-p' + (i + 1), /* row ids are not legible in the screenshot → lab key, printed as such */
      title: r[0], category: r[1], min: r[2], views: r[3], featured: r[4],
      slug: r[5] || slugify(r[0]), slugSource: r[5] ? 'shot' : 'derived',
      status: 'PUBLISHED', published: PUB, source: 'shot'
    };
  });

  /* editor captures (DOM) — the only posts with full field values. Text fields come verbatim from
     docs/fixtures/captured-editor-posts.json, which the build inlines as window.NL_CAPTURED (no retyping).
     React controlled selects do not serialise: category is known only where a preview chip or list row shows it. */
  var CAP = window.NL_CAPTURED || {};
  function capPost(key, id, source, category) {
    var c = CAP[id] || {};
    return { id: id, source: source, title: c.title || '', excerpt: c.excerpt || '', slug: c.slug || '', tags: c.tags || '', category: category || '', status: 'PUBLISHED',
      metaTitle: c.metaTitle || '', metaDescription: c.metaDescription || '', words: +(c.words || 0), read: c.estRead || '', body: c.body || '', captured: !!c.title };
  }
  var EDITOR_POSTS = {
    'agentic': capPost('agentic', '01a10a1e-e219-73d9-855c-cf690f3b2b25', 'DOM 172–175', 'Technology'),
    'plg': capPost('plg', '01a10a21-b705-70d0-992f-e96647543650', 'DOM 109', ''),
    'retainer': capPost('retainer', '01a10a23-b389-716c-a2eb-e5479eb081d6', 'DOM 110', ''),
    'emptystate': capPost('emptystate', '01a10a25-e1d8-71c0-911a-16db76a5980c', 'DOM 111', 'Design'),
    'designops': capPost('designops', '01a10a27-429b-76dd-9069-d255e0ece571', 'DOM 112', ''),
    /* shot-only editor posts: stats visible, body text not captured */
    'netflix': { id: 'shot-p4', source: 'shot 069', title: 'Netflix: Seven Years from Monolith to Microservices', excerpt: '', slug: 'netflix-seven-years-from-monolith-to-microservices', tags: '', category: 'Case Studies', status: 'PUBLISHED', metaTitle: '', metaDescription: '', words: 411, read: '3 min', metaCount: 97, body: '' },
    'deploy': { id: 'shot-p1', source: 'shot 068/067', title: 'Cutting Deploy Time from 45 Minutes to Five', excerpt: '', slug: 'cutting-deploy-time-from-45-minutes-to-five', tags: 'NestJS, Node.js', category: 'Case Studies', status: 'PUBLISHED', metaTitle: '', metaDescription: '', words: 383, read: '2 min', metaCount: 80, body: '' }
  };

  var COMMENTS = [
    { id: 'shot-c1', author: 'Arjun Mehta', at: 'Oct 6, 2026 9:36 AM', status: 'APPROVED', post: 'GDPR Compliance Platform Rebuild', postKey: 'shot-p16', text: 'AUDIT-SEED comment: the consent-ledger section was exactly what our compliance lead asked for — bookmarking the rebuild checklist.' },
    { id: 'shot-c2', author: 'Arjun Mehta', at: 'Oct 6, 2026 9:36 AM', status: 'APPROVED', post: 'Scaling a Freelance Marketplace Architecture', postKey: 'shot-p15', text: 'AUDIT-SEED comment: would love a follow-up on how the matching service handled the read/write split under load.' },
    { id: 'shot-c3', author: 'Arjun Mehta', at: 'Oct 6, 2026 9:35 AM', status: 'APPROVED', post: 'Cutting Deploy Time from 45 Minutes to Five', postKey: 'shot-p1', text: 'AUDIT-SEED comment: the cache-layering diagram made the five-minute target believable. Which runner size did you settle on?' },
    { id: 'shot-c4', author: 'Arjun Mehta', at: 'Oct 6, 2026 9:35 AM', status: 'APPROVED', post: 'Cutting Deploy Time from 45 Minutes to Five', postKey: 'shot-p1', text: 'AUDIT-SEED comment: sharing this with the platform team — the rollback section alone is worth the read.' }
  ];

  var ANALYTICS = {
    period: 'Last 30 days', periodKey: '30d', views: 107, likes: 0, topLimit: 10,
    top: [
      ['Cutting Deploy Time from 45 Minutes to Five', 4, true], ['Migrating from WebSockets to SSE', 2, true],
      ['Building an Incident Response Culture', 2, false], ['Prisma Read/Write Replica Patterns', 2, false],
      ['Product-Led Growth Playbook for 2026', 2, false], ['Networking Strategies for Remote Founders', 1, false],
      ['Design Ops for Growing Product Teams', 1, false], ['Agentic CI/CD with GitHub Actions', 1, false],
      ['CDN Migration to Cloudflare: Lessons Learned', 1, false], ['Market Research for Freelance Niches', 1, true]
    ].map(function (r) { return { title: r[0], views: r[1], likes: 0, published: PUB, state: 'Published', onPage1: r[2] }; })
  };

  var KPI = { total: 110, published: 110, drafts: 0, pending: 0, pages: 6, perPage: 20 };

  var EP = {
    list: 'GET /api/v1/admin/posts', create: 'POST /api/v1/admin/posts', detail: 'GET /api/v1/admin/posts/{id}',
    update: 'PATCH /api/v1/admin/posts/{id}', publish: 'POST /api/v1/admin/posts/{id}/publish', unpublish: 'POST /api/v1/admin/posts/{id}/unpublish',
    schedule: 'POST /api/v1/admin/posts/{id}/schedule', feature: 'POST /api/v1/admin/posts/{id}/feature', unfeature: 'POST /api/v1/admin/posts/{id}/unfeature',
    archive: 'POST /api/v1/admin/posts/{id}/archive', remove: 'DELETE /api/v1/admin/posts/{id}',
    revisions: 'GET /api/v1/admin/posts/{id}/revisions', restore: 'POST /api/v1/admin/posts/{id}/revisions/{revisionId}/restore',
    comments: 'GET /api/v1/admin/comments', pending: 'GET /api/v1/admin/comments/pending?page&limit', reported: 'GET /api/v1/admin/comments/reported?page&limit',
    approve: 'POST /api/v1/admin/comments/{id}/approve', reject: 'POST /api/v1/admin/comments/{id}/reject', spam: 'POST /api/v1/admin/comments/{id}/spam', cdelete: 'DELETE /api/v1/admin/comments/{id}',
    categories: 'GET /api/v1/admin/blog/categories', catCreate: 'POST /api/v1/admin/blog/categories', tags: 'GET /api/v1/admin/blog/tags', tagCreate: 'POST /api/v1/admin/blog/tags', merge: 'POST /api/v1/admin/blog/tags/merge',
    authors: 'GET /api/v1/admin/blog/authors', analytics: 'GET /api/v1/admin/blog/analytics', top: 'GET /api/v1/admin/blog/analytics/top-posts?period&limit', engagement: 'GET /api/v1/admin/blog/analytics/engagement?from&to', postAnalytics: 'GET /api/v1/admin/blog/analytics/{id}'
  };
  var SPEC = {
    publish: 'Immediately transition a post status to PUBLISHED and record the timestamp.',
    unpublish: 'Transition a published or scheduled post back to DRAFT status.',
    schedule: 'Define the future date and time for automated post publication. Body: { scheduledAt } — format and time zone not documented.',
    feature: 'Mark a post as a featured piece of content for site-wide promotion.',
    unfeature: 'Remove the featured status flag from a blog post.',
    archive: 'Permanently archive a post, removing it from active management queues.',
    remove: 'Perform a soft-deletion of the blog post, archival only.',
    restore: 'Roll back a post to a previously saved content state.',
    approve: 'Explicitly approve a comment for public visibility.',
    reject: 'Explicitly reject an inappropriate or non-compliant comment. (No reason body is documented.)',
    spam: 'Classify a comment as spam and apply system-wide filtering if necessary.',
    cdelete: 'Permanently remove a comment from the database.',
    merge: 'Consolidate multiple tags into one and update all associated blog posts. Body: { fromTagId, toTagId }.',
    create: 'Initialize a new blog post entry. Status defaults to DRAFT upon creation.',
    update: 'Apply partial updates to post content, taxonomy, or configuration. UpdatePostDto has no documented properties.'
  };
  var DEMO_REVISIONS = [
    { id: 'DEMO-rev-3', at: '2026-10-05 09:12', note: 'current content (publish day)' },
    { id: 'DEMO-rev-2', at: '2026-10-04 18:40', note: 'meta description edited' },
    { id: 'DEMO-rev-1', at: '2026-10-03 11:05', note: 'first draft' }
  ];

  /* ---------------------------------------------------------- tie-out (R1) */
  var T = {};
  T.kpiTies = KPI.total === KPI.published + KPI.drafts;                         /* 110 = 110 + 0 */
  T.pagesTie = Math.ceil(KPI.total / KPI.perPage) === KPI.pages;                /* 6 */
  T.topSum = ANALYTICS.top.reduce(function (s, r) { return s + r.views; }, 0);   /* 17 */
  T.outsideTop = ANALYTICS.views - T.topSum;                                     /* 90 */
  T.outsidePct = Math.round(T.outsideTop / ANALYTICS.views * 1000) / 10;         /* 84.1 */
  T.page1Views = POSTS.reduce(function (s, p) { return s + p.views; }, 0);       /* 21 */
  T.notOnPage1 = ANALYTICS.top.filter(function (r) { return !r.onPage1; }).length; /* 7 */
  T.featured = POSTS.filter(function (p) { return p.featured; }).length;         /* 14 */
  T.estRead = function (w) { return Math.max(1, Math.ceil(w / 200)); };
  T.estReadHolds = [411, 383, 230, 188, 144, 136, 127].map(T.estRead).join(',') === '3,2,2,1,1,1,1';

  /* ------------------------------------------------------------ helpers */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function icon(name, cls) { return '<svg class="ic ' + (cls || '') + '" aria-hidden="true" focusable="false"><use href="#' + name + '"></use></svg>'; }
  function chip(kind, text, title) { return '<span class="chip ' + kind + '"' + (title ? ' title="' + esc(title) + '"' : '') + '>' + esc(text) + '</span>'; }
  function words(s) { var m = String(s || '').trim().match(/\S+/g); return m ? m.length : 0; }
  function nowLocalInput(offsetDays) {
    var d = new Date(); d.setDate(d.getDate() + (offsetDays || 1)); d.setHours(9, 0, 0, 0);
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + 'T' + p(d.getHours()) + ':' + p(d.getMinutes());
  }
  function fmtDT(v) {
    if (!v) return '—';
    var d = new Date(v); if (isNaN(d)) return v;
    return d.toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' });
  }
  function tz() { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'browser local'; } catch (e) { return 'browser local'; } }
  function stamp() { var d = new Date(); return d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', second: '2-digit' }); }
  function statusBadge(status) {
    var map = { PUBLISHED: ['success', 'i-check'], DRAFT: ['neutral', 'i-doc'], SCHEDULED: ['info', 'i-clock'], ARCHIVED: ['warning', 'i-archive'], DELETED: ['error', 'i-trash'],
      APPROVED: ['success', 'i-check'], PENDING: ['warning', 'i-clock'], REJECTED: ['neutral', 'i-x'], SPAM: ['error', 'i-alert'], REPORTED: ['error', 'i-alert'] };
    var m = map[status] || ['neutral', 'i-doc'];
    return '<span class="badge badge-' + m[0] + '">' + icon(m[1]) + esc(status) + '</span>';
  }
  function provenance(opts) {
    /* opts: {label, endpoint, source, fields?, notes:[], calc?} */
    var h = '<details class="prov' + (opts.right ? ' right' : '') + '"><summary>' + icon('i-eye') + esc(opts.label || 'Where from') + '</summary><div class="prov-panel">';
    h += '<dl>';
    if (opts.endpoint) h += '<dt>Endpoint</dt><dd><span class="mono">DEMO ' + esc(opts.endpoint) + '</span> — documented contract, not called by this page</dd>';
    if (opts.source) h += '<dt>Source</dt><dd>' + esc(opts.source) + '</dd>';
    if (opts.fields !== false) h += '<dt>Fields</dt><dd>field names not documented in Swagger (<span class="mono">additionalProperties: true</span>)</dd>';
    if (opts.calc) h += '<dt>Computed</dt><dd>' + opts.calc + '</dd>';
    h += '<dt>Captured</dt><dd>' + CAPTURED + ' · admin.nestlancer.com</dd></dl>';
    if (opts.notes && opts.notes.length) h += '<ul>' + opts.notes.map(function (n) { return '<li>' + n + '</li>'; }).join('') + '</ul>';
    h += '</div></details>';
    return h;
  }
  function notice(kind, title, body, actions, dismissible, extra) {
    var ic = { info: 'i-alert', warning: 'i-alert', error: 'i-alert', success: 'i-check' }[kind] || 'i-alert';
    return '<div class="notice notice-' + kind + '"' + (extra || '') + '>' + icon(ic) + '<div class="notice-body"><strong>' + title + '</strong>' + (body ? '<span>' + body + '</span>' : '') +
      (actions ? '<div class="notice-actions">' + actions + '</div>' : '') + '</div>' + (dismissible ? '<button class="close" type="button" data-dismiss aria-label="Dismiss notice">' + icon('i-x') + '</button>' : '') + '</div>';
  }
  function emptyState(title, why, next, iconName) {
    return '<div class="empty-state" role="status">' + icon(iconName || 'i-check') + '<h3>' + esc(title) + '</h3><p>' + esc(why) + '</p>' + (next ? '<div class="next">' + next + '</div>' : '') + '</div>';
  }
  function skeleton(rows) {
    var h = '<div class="skeleton" role="status" aria-label="Loading captured content"><span class="sk w-40"></span><span class="sk w-80"></span>';
    for (var i = 0; i < (rows || 6); i++) h += '<span class="sk row"></span>';
    return h + '</div>';
  }
  function errorState(what, endpoint) {
    return '<div class="notice notice-error" role="alert" tabindex="-1" data-alert>' + icon('i-alert') + '<div class="notice-body"><strong>' + esc(what) + ' could not be loaded</strong><span>The console received no data from <span class="mono">' + esc(endpoint) + '</span>. Nothing on this page was changed. (Lab: simulated error state — no request was made.)</span><div class="notice-actions"><button class="btn" type="button" data-retry>' + icon('i-arrow') + 'Retry</button><a class="btn" href="../../F07-notifications-center/V1/index.html">Check platform notices</a></div></div></div>';
  }

  /* tiny, safe Markdown renderer for the captured body (headings, lists, fenced code, bold/em/code) */
  function md(src) {
    if (!src || !String(src).trim()) return '<p class="a-empty">Nothing written yet — the preview renders your Markdown as you type.</p>';
    var lines = String(src).replace(/\r/g, '').split('\n'), out = [], i = 0, para = [], list = null;
    function inline(t) {
      t = esc(t);
      t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
      t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      t = t.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
      t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 (<span class="mono">$2</span>)');
      return t;
    }
    function flushP() { if (para.length) { out.push('<p>' + inline(para.join(' ')) + '</p>'); para = []; } }
    function flushL() { if (list) { out.push('<' + list.tag + '>' + list.items.map(function (x) { return '<li>' + inline(x) + '</li>'; }).join('') + '</' + list.tag + '>'); list = null; } }
    while (i < lines.length) {
      var l = lines[i];
      if (/^```/.test(l)) {
        flushP(); flushL(); var code = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; }
        out.push('<pre tabindex="0" aria-label="Code block"><code>' + esc(code.join('\n')) + '</code></pre>'); i++; continue;
      }
      var h = l.match(/^(#{1,3})\s+(.*)$/);
      if (h) { flushP(); flushL(); var lv = Math.min(3, h[1].length + 1); out.push('<h' + lv + '>' + inline(h[2]) + '</h' + lv + '>'); i++; continue; }
      var ul = l.match(/^\s*[-*]\s+(.*)$/), ol = l.match(/^\s*\d+[.)]\s+(.*)$/);
      if (ul || ol) { flushP(); var tag = ul ? 'ul' : 'ol'; if (!list || list.tag !== tag) { flushL(); list = { tag: tag, items: [] }; } list.items.push((ul || ol)[1]); i++; continue; }
      if (/^>\s?/.test(l)) { flushP(); flushL(); out.push('<blockquote>' + inline(l.replace(/^>\s?/, '')) + '</blockquote>'); i++; continue; }
      if (!l.trim()) { flushP(); flushL(); i++; continue; }
      flushL(); para.push(l.trim()); i++;
    }
    flushP(); flushL();
    return out.join('');
  }

  /* ------------------------------------------------------------ state */
  var state = {
    tab: 'posts', view: 'list', q: '', status: 'all', cq: '', cstatus: 'all', density: 'comfortable', lab: 'live',
    editor: null, /* {key, mode, device, fields:{}, dirty, isNew} */
    selectedComment: null, revisionPost: '', mergeFrom: '', mergeTo: '',
    posts: POSTS.map(function (p) { return Object.assign({}, p); }),
    comments: COMMENTS.map(function (c) { return Object.assign({}, c); }),
    pendingDemo: [], reportedDemo: [], receipts: [], step: 0
  };
  var listeners = [];
  function emit() { listeners.forEach(function (fn) { fn(state); }); }
  function announce(msg) { var live = document.getElementById('live'); if (!live) return; live.textContent = ''; setTimeout(function () { live.textContent = msg; }, 20); }
  function persist() { try { localStorage.setItem('nl-f21-view', JSON.stringify({ tab: state.tab, view: state.view, density: state.density })); } catch (e) { } }
  function set(patch, quiet) { Object.keys(patch).forEach(function (k) { state[k] = patch[k]; }); persist(); emit(); if (!quiet) announce('View updated.'); }
  function post(id) { for (var i = 0; i < state.posts.length; i++) if (state.posts[i].id === id) return state.posts[i]; return null; }
  function comment(id) {
    var all = state.comments.concat(state.pendingDemo, state.reportedDemo);
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i]; return null;
  }
  function filteredPosts() {
    var q = state.q.trim().toLowerCase();
    return state.posts.filter(function (p) {
      if (p.status === 'DELETED') return false;
      if (state.status !== 'all' && p.status !== state.status.toUpperCase()) return false;
      if (q && p.title.toLowerCase().indexOf(q) < 0 && p.slug.indexOf(q) < 0) return false;
      return true;
    });
  }
  function filteredComments() {
    var q = state.cq.trim().toLowerCase();
    return state.comments.filter(function (c) {
      if (c.status === 'DELETED') return false;
      if (state.cstatus !== 'all' && c.status !== state.cstatus.toUpperCase()) return false;
      if (q && (c.text + ' ' + c.post + ' ' + c.author).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
  }
  function counts() {
    var live = state.posts.filter(function (p) { return p.status !== 'DELETED'; });
    var c = function (s) { return live.filter(function (p) { return p.status === s; }).length; };
    var local = { published: c('PUBLISHED'), draft: c('DRAFT'), scheduled: c('SCHEDULED'), archived: c('ARCHIVED') };
    var pend = state.pendingDemo.filter(function (x) { return x.status === 'PENDING'; }).length;
    var rep = state.reportedDemo.filter(function (x) { return x.status === 'REPORTED'; }).length;
    return { captured: KPI, local: local, pending: pend, reported: rep, comments: state.comments.filter(function (x) { return x.status !== 'DELETED'; }).length, changed: local.published !== 20 || local.draft || local.scheduled || local.archived };
  }

  /* ---------------------------------------------- editor (fields + derivations) */
  function openEditor(key, mode, quiet) {
    var src = key === 'new' ? null : EDITOR_POSTS[key] || null;
    if (key !== 'new' && !src) { var p = post(key); if (p) src = { id: p.id, source: 'shot 009 (list row)', title: p.title, excerpt: '', slug: p.slug, tags: '', category: p.category, status: p.status, metaTitle: '', metaDescription: '', words: 0, read: '1 min', body: '' }; }
    state.editor = {
      key: key, isNew: key === 'new', mode: mode || 'write', device: 'desktop', dirty: false, source: src ? src.source : 'empty form (DOM 192)',
      id: src ? src.id : null, status: src ? src.status : 'DRAFT', capturedWords: src ? src.words : 0, capturedRead: src ? src.read : '',
      fields: { title: src ? src.title : '', excerpt: src ? src.excerpt : '', body: src ? src.body : '', category: src ? src.category : 'Business', slug: src ? src.slug : '', tags: src ? src.tags : '', metaTitle: src ? src.metaTitle : '', metaDescription: src ? src.metaDescription : '' },
      bodyCaptured: !!(src && src.body)
    };
    state.tab = 'posts';
    emit();
    if (quiet) return;
    announce(key === 'new' ? 'New post editor opened.' : 'Editor opened: ' + state.editor.fields.title);
    setTimeout(function () { var el = document.getElementById('editor'); if (el) { el.scrollIntoView({ block: 'start' }); var f = el.querySelector('[data-field="title"]'); if (f) f.focus({ preventScroll: true }); } }, 30);
  }
  function closeEditor() { state.editor = null; emit(); announce('Back to blog desk.'); }
  function derived() {
    var e = state.editor; if (!e) return null;
    var w = words(e.fields.body);
    return { words: w, read: T.estRead(w) + ' min', excerptLen: e.fields.excerpt.length, metaLen: e.fields.metaDescription.length, slug: e.fields.slug || slugify(e.fields.title) || 'auto-generated-from-title', slugAuto: !e.fields.slug };
  }
  function patchEditorDOM() {
    var d = derived(); if (!d) return;
    var e = state.editor;
    var q = function (id) { return document.getElementById(id); };
    if (q('stat-words')) q('stat-words').textContent = d.words;
    if (q('stat-read')) q('stat-read').textContent = d.read;
    if (q('stat-excerpt')) q('stat-excerpt').textContent = d.excerptLen + ' chars';
    if (q('meta-count')) { q('meta-count').textContent = d.metaLen + ' / 160 characters'; q('meta-count').classList.toggle('over', d.metaLen > 160); }
    if (q('slug-auto')) q('slug-auto').textContent = d.slugAuto ? 'auto: /' + d.slug : '/' + d.slug;
    if (q('preview-article')) q('preview-article').innerHTML = articleHTML(e, d);
    if (q('snippet')) q('snippet').innerHTML = snippetHTML(e, d);
    var save = q('save-primary'); if (save) { save.disabled = !e.fields.title.trim(); }
    var dirty = q('dirty'); if (dirty) { dirty.classList.toggle('clean', !e.dirty); dirty.querySelector('span').textContent = e.dirty ? 'Unsaved changes · nothing is sent by this lab' : (e.isNew ? 'Not created yet' : 'No local changes'); }
    var ps = q('preview-status'); if (ps) ps.textContent = 'Preview updated ' + stamp();
  }
  function articleHTML(e, d) {
    var f = e.fields, tags = f.tags.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
    return '<span class="a-back">← Back to articles</span><span class="a-cat">' + esc(f.category || 'category not captured') + '</span>' +
      '<h2 class="a-title">' + (f.title ? esc(f.title) : '<span class="a-empty">Untitled post</span>') + '</h2>' +
      '<div class="a-meta">Nestlancer · ' + esc(d.read) + ' read' + (e.status === 'PUBLISHED' && !e.isNew ? ' · published ' + PUB : ' · unsaved draft') + '</div>' +
      (tags.length ? '<div class="a-tags">' + tags.map(function (t) { return '<span>#' + esc(t) + '</span>'; }).join('') + '</div>' : '') +
      (f.excerpt ? '<p class="a-excerpt hint" style="font-size:14px;margin-bottom:14px">' + esc(f.excerpt) + '</p>' : '') +
      '<div class="a-body">' + (e.bodyCaptured || e.dirty || e.isNew ? md(f.body) : '<p class="a-empty">Body text was not captured for this post (only its title, category, tags and writing stats are in the screenshot). Type in Content to preview — nothing is saved.</p>') + '</div>';
  }
  function snippetHTML(e, d) {
    var f = e.fields;
    return '<div class="s-url">nestlancer.com › blog › ' + esc(d.slug) + '</div><div class="s-title">' + esc(f.metaTitle || f.title || 'Meta title appears here') + '</div><div class="s-desc">' + esc((f.metaDescription || f.excerpt || 'Meta description appears here.').slice(0, 160)) + (f.metaDescription.length > 160 ? '…' : '') + '</div>';
  }

  /* ----------------------------------------------- confirm → receipt → undo */
  var UNDO_MS = 10000;
  var ACTIONS = {
    publish: { label: 'Publish', ep: 'publish', from: null, to: 'PUBLISHED', kind: 'post', danger: false, undo: 'unpublish' },
    unpublish: { label: 'Unpublish', ep: 'unpublish', to: 'DRAFT', kind: 'post', danger: true, undo: 'inverse' },
    schedule: { label: 'Schedule', ep: 'schedule', to: 'SCHEDULED', kind: 'post', danger: false, undo: 'unpublish', needsWhen: true },
    feature: { label: 'Feature', ep: 'feature', kind: 'post', danger: false, undo: 'unfeature', flag: true },
    unfeature: { label: 'Unfeature', ep: 'unfeature', kind: 'post', danger: false, undo: 'feature', flag: false },
    archive: { label: 'Archive', ep: 'archive', to: 'ARCHIVED', kind: 'post', danger: true, undo: 'local' },
    remove: { label: 'Delete', ep: 'remove', to: 'DELETED', kind: 'post', danger: true, undo: 'local' },
    approve: { label: 'Approve', ep: 'approve', to: 'APPROVED', kind: 'comment', danger: false, undo: 'inverse' },
    reject: { label: 'Reject', ep: 'reject', to: 'REJECTED', kind: 'comment', danger: true, undo: 'inverse' },
    spam: { label: 'Mark as spam', ep: 'spam', to: 'SPAM', kind: 'comment', danger: true, undo: 'inverse' },
    cdelete: { label: 'Delete comment', ep: 'cdelete', to: 'DELETED', kind: 'comment', danger: true, undo: 'local', permanent: true },
    restore: { label: 'Restore revision', ep: 'restore', kind: 'revision', danger: true, undo: 'local' },
    merge: { label: 'Merge tags', ep: 'merge', kind: 'tags', danger: true, undo: 'local' },
    save: { label: 'Save changes', ep: 'update', kind: 'editor', danger: false, undo: 'none' },
    create: { label: 'Create post', ep: 'create', kind: 'editor', danger: false, undo: 'none' },
    addCategory: { label: 'Add category', ep: 'catCreate', kind: 'taxo', danger: false, undo: 'none' },
    addTag: { label: 'Add tag', ep: 'tagCreate', kind: 'taxo', danger: false, undo: 'none' }
  };
  var pending = null; /* {action, targetId, extra} */

  function confirmDialog() { return document.getElementById('confirm'); }
  function openConfirm(actionKey, targetId, extra) {
    var a = ACTIONS[actionKey]; if (!a) return;
    extra = extra || {};
    pending = { action: actionKey, targetId: targetId, extra: extra };
    var dlg = confirmDialog(); if (!dlg) return;
    var title = '', body = '', confirmLabel = a.label, danger = a.danger;
    var epText = EP[a.ep] || '';
    if (a.kind === 'post') {
      var p = post(targetId); if (!p) return;
      epText = epText.replace('{id}', p.id.indexOf('shot-') === 0 ? '{id — not legible in screenshot}' : p.id);
      title = a.label + ' “' + p.title + '”?';
      body += '<dl class="recap">';
      if (a.to) body += '<dt>Status</dt><dd><span class="transition">' + statusBadge(p.status) + icon('i-arrow') + statusBadge(a.to) + '</span></dd>';
      if (a.flag !== undefined) body += '<dt>Featured</dt><dd>' + (p.featured ? 'yes' : 'no') + ' → ' + (a.flag ? 'yes' : 'no') + '</dd>';
      body += '<dt>Post</dt><dd><span class="mono">/' + esc(p.slug) + '</span> · ' + esc(p.category) + ' · ' + esc(p.min) + ' min · ' + esc(p.views) + ' views</dd>';
      if (a.needsWhen) {
        body += '<dt>Publish at</dt><dd><input class="input" type="datetime-local" id="when" value="' + (extra.when || nowLocalInput(1)) + '" min="' + nowLocalInput(0) + '" aria-describedby="when-help"><span class="hint" id="when-help" style="display:block;margin-top:4px">Time zone shown: ' + esc(tz()) + '. The API documents only <span class="mono">scheduledAt</span> (string) — no format or zone — so the receipt prints the ISO string that would be sent.</span></dd>';
      }
      body += '<dt>Endpoint</dt><dd><span class="mono">DEMO ' + esc(epText) + '</span></dd></dl>';
      body += '<p class="quote"><b>Swagger says:</b> ' + esc(SPEC[a.ep]) + '</p>';
      if (actionKey === 'remove') body += '<p class="quote"><b>Documented ambiguity:</b> the spec calls <span class="mono">DELETE</span> a “soft-deletion, archival only” and <span class="mono">/archive</span> “permanently archive”. Their names and descriptions are inverted; this lab does not guess which is reversible in production.</p>';
      if (actionKey === 'archive') body += '<p class="quote"><b>No unarchive endpoint is documented.</b> The 10-second undo below is local to this preview.</p>';
      if (actionKey === 'unpublish' && p.status === 'SCHEDULED') body += '<p class="quote">This is the documented way to cancel a schedule: a scheduled post returns to DRAFT.</p>';
      if (actionKey === 'publish') body += '<p class="quote"><b>Pre-publish recap:</b> title ' + (p.title ? '✔' : '✗ missing') + ' · slug ✔ · category ' + esc(p.category) + ' · excerpt/meta lengths not captured for this row. Two steps, as every CMS benchmark requires (research refs 5, 6).</p>';
    } else if (a.kind === 'comment') {
      var c = comment(targetId); if (!c) return;
      epText = epText.replace('{id}', '{id — not legible in screenshot}');
      title = a.label + ' this comment?';
      body += '<div class="context"><div class="ctx-post"><div class="k">On post</div><div>' + esc(c.post) + '</div></div><div class="ctx-comment">“' + esc(c.text) + '”</div><div class="comment-author"><b>' + esc(c.author) + '</b> · ' + esc(c.at) + ' · ' + statusBadge(c.status) + (c.demo ? ' ' + chip('demo', 'DEMO · captured text, synthetic status') : '') + '</div></div>';
      body += '<dl class="recap"><dt>Status</dt><dd><span class="transition">' + statusBadge(c.status) + icon('i-arrow') + statusBadge(a.to) + '</span></dd><dt>Endpoint</dt><dd><span class="mono">DEMO ' + esc(epText) + '</span></dd></dl>';
      body += '<p class="quote"><b>Swagger says:</b> ' + esc(SPEC[a.ep]) + '</p>';
      if (a.permanent) body += '<p class="quote"><b>Permanent in production.</b> The undo window after this confirm is local to the preview; after 10 seconds nothing could restore the comment.</p>';
      if (actionKey === 'reject') body += '<p class="quote">No reason field is drawn because <span class="mono">/reject</span> accepts no body — unlike moderation tools that require one (research ref 13).</p>';
    } else if (a.kind === 'revision') {
      var rv = extra.rev, rp = extra.postTitle || 'the selected post';
      title = 'Restore revision ' + rv.id + '?';
      body += '<dl class="recap"><dt>Post</dt><dd>' + esc(rp) + '</dd><dt>Revision</dt><dd><span class="mono">' + esc(rv.id) + '</span> · ' + esc(rv.at) + ' · ' + esc(rv.note) + ' ' + chip('demo', 'DEMO row') + '</dd><dt>Endpoint</dt><dd><span class="mono">DEMO ' + esc(EP.restore) + '</span></dd></dl>';
      body += '<p class="quote"><b>Swagger says:</b> ' + esc(SPEC.restore) + ' Restoring replaces the current content; save afterwards (research ref 14). No revision was captured — the rows are DEMO placeholders.</p>';
    } else if (a.kind === 'tags') {
      title = 'Merge “' + extra.from + '” into “' + extra.to + '”?';
      body += '<dl class="recap"><dt>Source</dt><dd>' + esc(extra.from) + ' <span class="mono">fromTagId</span></dd><dt>Destination</dt><dd>' + esc(extra.to) + ' <span class="mono">toTagId</span></dd><dt>Endpoint</dt><dd><span class="mono">DEMO ' + esc(EP.merge) + '</span></dd></dl>';
      body += '<p class="quote"><b>Swagger says:</b> ' + esc(SPEC.merge) + ' The number of affected posts is not returned by any documented field, so it is not promised here.</p>';
    } else if (a.kind === 'editor') {
      var e = state.editor, d = derived(); if (!e) return;
      title = (actionKey === 'create' ? 'Create “' : 'Save changes to “') + (e.fields.title || 'Untitled') + '”?';
      body += '<dl class="recap"><dt>Status</dt><dd>' + (actionKey === 'create' ? statusBadge('DRAFT') + ' <span class="hint">documented default on create</span>' : statusBadge(e.status) + ' <span class="hint">unchanged — publish is a separate action</span>') + '</dd>' +
        '<dt>Slug</dt><dd><span class="mono">/' + esc(d.slug) + '</span>' + (d.slugAuto ? ' <span class="hint">auto-generated from title (documented)</span>' : '') + '</dd>' +
        '<dt>Category</dt><dd>' + esc(e.fields.category) + '</dd><dt>Tags</dt><dd>' + esc(e.fields.tags || '—') + '</dd>' +
        '<dt>Lengths</dt><dd>title ' + e.fields.title.length + '/200 · excerpt ' + e.fields.excerpt.length + '/500 · content ' + e.fields.body.length + '/100000 · meta ' + d.metaLen + '/160</dd>' +
        '<dt>Endpoint</dt><dd><span class="mono">DEMO ' + esc(actionKey === 'create' ? EP.create : EP.update.replace('{id}', e.id || '{id}')) + '</span></dd></dl>';
      body += '<p class="quote"><b>Swagger says:</b> ' + esc(SPEC[a.ep]) + '</p>';
      if (actionKey === 'create' && (!e.fields.excerpt.trim() || !e.fields.body.trim())) body += '<p class="quote notice-warning" style="border-left-color:var(--status-warning-border)"><b>CreatePostDto requires excerpt and content.</b> ' + (!e.fields.excerpt.trim() ? 'Excerpt is empty. ' : '') + (!e.fields.body.trim() ? 'Content is empty. ' : '') + 'The console capture only disables Create until a title exists; the API would reject this body.</p>';
    } else if (a.kind === 'taxo') {
      title = a.label + ' “' + extra.name + '”?';
      body += '<dl class="recap"><dt>Name</dt><dd>' + esc(extra.name) + ' (' + extra.name.length + '/' + (actionKey === 'addTag' ? 50 : 100) + ')</dd><dt>Slug</dt><dd><span class="mono">' + esc(slugify(extra.name)) + '</span> <span class="hint">auto-generated if omitted (documented)</span></dd><dt>Endpoint</dt><dd><span class="mono">DEMO ' + esc(EP[a.ep]) + '</span></dd></dl>';
    }
    dlg.querySelector('#confirm-title').textContent = title;
    dlg.querySelector('#confirm-body').innerHTML = body;
    var ok = dlg.querySelector('#confirm-ok');
    ok.textContent = confirmLabel;
    ok.className = 'btn ' + (danger ? 'btn-danger' : 'btn-primary');
    dlg.querySelector('#confirm-note').textContent = 'Static lab: confirming updates this preview and writes a receipt. No request is sent.';
    dlg.showModal();
  }
  function applyPending() {
    if (!pending) return;
    var a = ACTIONS[pending.action], id = pending.targetId, extra = pending.extra, snap = null, label = '', detail = '', undoable = a.undo !== 'none';
    var ep = EP[a.ep] || '';
    if (a.kind === 'post') {
      var p = post(id); if (!p) return;
      snap = Object.assign({}, p);
      var whenEl = document.getElementById('when'), when = whenEl ? whenEl.value : '';
      if (a.needsWhen) {
        if (!when || new Date(when) <= new Date()) { var w = document.getElementById('when'); if (w) { w.setAttribute('aria-invalid', 'true'); w.focus(); } announce('Choose a future date and time.'); return; }
        p.scheduledAt = new Date(when).toISOString();
      }
      if (a.to) { p.status = a.to; p.statusSource = 'DEMO'; }
      if (a.flag !== undefined) p.featured = a.flag;
      if (pending.action === 'publish') { p.published = 'now (local)'; p.scheduledAt = null; }
      if (pending.action === 'unpublish') p.scheduledAt = null;
      label = a.label + ' · ' + p.title;
      detail = 'DEMO ' + ep.replace('{id}', '{id}') + (a.needsWhen ? ' · body { "scheduledAt": "' + p.scheduledAt + '" }' : '') + ' · ' + (a.to ? 'now ' + a.to + ' (local preview)' : 'featured: ' + (p.featured ? 'yes' : 'no'));
    } else if (a.kind === 'comment') {
      var c = comment(id); if (!c) return;
      snap = Object.assign({}, c); c.status = a.to; c.statusSource = 'DEMO';
      label = a.label + ' · comment by ' + c.author;
      detail = 'DEMO ' + ep + ' · now ' + a.to + ' (local preview)' + (a.permanent ? ' · permanent in production after the window' : '');
    } else if (a.kind === 'revision') {
      label = 'Restore ' + extra.rev.id + ' · ' + (extra.postTitle || ''); detail = 'DEMO ' + EP.restore + ' · content would be replaced; save afterwards';
    } else if (a.kind === 'tags') {
      label = 'Merge tags · ' + extra.from + ' → ' + extra.to; detail = 'DEMO ' + EP.merge + ' · { fromTagId, toTagId } · affected-post count not documented';
      state.mergedDemo = (state.mergedDemo || []).concat([extra.from]); state.mergeFrom = ''; state.mergeTo = '';
    } else if (a.kind === 'editor') {
      var e = state.editor; e.dirty = false; if (pending.action === 'create') { e.isNew = false; e.status = 'DRAFT'; e.id = 'DEMO-new-post'; }
      label = (pending.action === 'create' ? 'Create post' : 'Save changes') + ' · ' + (e.fields.title || 'Untitled');
      detail = 'DEMO ' + (pending.action === 'create' ? EP.create : EP.update) + ' · ' + (pending.action === 'create' ? 'status DRAFT (documented default)' : 'body fields not documented in Swagger') + ' · nothing was sent';
      undoable = false;
    } else if (a.kind === 'taxo') {
      label = a.label + ' · ' + extra.name; detail = 'DEMO ' + EP[a.ep] + ' · { name: "' + extra.name + '" } · slug auto-generated'; undoable = false;
      if (pending.action === 'addTag') state.addedTags = (state.addedTags || []).concat([extra.name]); else state.addedCats = (state.addedCats || []).concat([extra.name]);
    }
    var receipt = { id: 'r' + Date.now(), t: stamp(), label: label, detail: detail, action: pending.action, targetId: id, snap: snap, undone: false, undoable: undoable, local: a.undo === 'local' };
    state.receipts.unshift(receipt);
    var dlg = confirmDialog(); if (dlg && dlg.open) dlg.close();
    pending = null;
    emit();
    toast(receipt);
    announce(label + '. ' + (undoable ? 'Undo available for ten seconds.' : 'Receipt written.'));
  }
  function undo(receiptId) {
    var r = null; for (var i = 0; i < state.receipts.length; i++) if (state.receipts[i].id === receiptId) r = state.receipts[i];
    if (!r || r.undone || !r.undoable) return;
    var a = ACTIONS[r.action];
    if (a.kind === 'post' && r.snap) { var p = post(r.targetId); if (p) Object.keys(r.snap).forEach(function (k) { p[k] = r.snap[k]; }); }
    if (a.kind === 'comment' && r.snap) { var c = comment(r.targetId); if (c) Object.keys(r.snap).forEach(function (k) { c[k] = r.snap[k]; }); }
    if (a.kind === 'tags') { state.mergedDemo = (state.mergedDemo || []).filter(function (x) { return x !== r.label.split('· ')[1].split(' →')[0]; }); }
    r.undone = true;
    state.receipts.unshift({ id: 'u' + Date.now(), t: stamp(), label: 'Undo · ' + r.label, detail: a.undo === 'inverse' || a.undo === 'local' ? 'local restore (preview state only)' : 'DEMO ' + EP[a.undo] + ' would be the inverse call', undoable: false, undone: false });
    emit(); announce('Undone: ' + r.label);
  }

  /* toasts */
  function toastsEl() { var t = document.getElementById('toasts'); if (!t) { t = document.createElement('div'); t.id = 'toasts'; t.className = 'toasts'; document.body.appendChild(t); } return t; }
  function toast(r) {
    var host = toastsEl(), el = document.createElement('div');
    el.className = 'toast enter' + (r.undoable ? ' is-undoable' : ''); el.setAttribute('role', 'status'); el.dataset.receipt = r.id;
    el.innerHTML = icon('i-check') + '<div><div class="t-title">' + esc(r.label) + '</div><div class="t-sub"><span class="mono">' + esc(r.detail) + '</span></div></div>' +
      '<div class="t-actions">' + (r.undoable ? '<button class="btn btn-sm btn-secondary undo" type="button" data-undo="' + r.id + '">Undo <span class="num" data-count>10</span>s<span class="bar" aria-hidden="true"></span></button>' : '') + '<button class="btn btn-sm btn-ghost" type="button" data-close-toast aria-label="Dismiss receipt">' + icon('i-x') + '</button></div>';
    host.appendChild(el);
    requestAnimationFrame(function () { el.classList.remove('enter'); });
    var left = 10, cnt = el.querySelector('[data-count]');
    var iv = setInterval(function () { left--; if (cnt) cnt.textContent = left; if (left <= 0) { clearInterval(iv); var u = el.querySelector('[data-undo]'); if (u) { u.outerHTML = '<span class="hint">Window closed · nothing was sent (static lab)</span>'; } setTimeout(function () { el.remove(); }, 4000); } }, 1000);
    el._iv = iv;
    if (!r.undoable) setTimeout(function () { el.remove(); }, 7000);
  }

  /* overflow menus */
  var openMenu = null;
  function closeMenu(focusTrigger) { if (!openMenu) return; var m = openMenu; openMenu = null; m.menu.hidden = true; m.trigger.setAttribute('aria-expanded', 'false'); if (focusTrigger) m.trigger.focus(); }
  function postMenuItems(p) {
    var items = [];
    items.push({ a: 'edit', l: 'Edit', i: 'i-doc' });
    if (p.status === 'PUBLISHED') items.push({ a: 'view', l: 'View live', i: 'i-share' });
    if (p.status === 'DRAFT' || p.status === 'SCHEDULED' || p.status === 'ARCHIVED') items.push({ a: 'publish', l: p.status === 'SCHEDULED' ? 'Publish now…' : 'Publish…', i: 'i-check' });
    if (p.status === 'DRAFT') items.push({ a: 'schedule', l: 'Schedule…', i: 'i-cal', spec: true });
    items.push({ a: p.featured ? 'unfeature' : 'feature', l: p.featured ? 'Unfeature' : 'Feature', i: 'i-spark' });
    items.push({ sep: true });
    if (p.status === 'PUBLISHED' || p.status === 'SCHEDULED') items.push({ a: 'unpublish', l: p.status === 'SCHEDULED' ? 'Cancel schedule (→ Draft)…' : 'Unpublish…', i: 'i-eye', d: true });
    if (p.status !== 'ARCHIVED') items.push({ a: 'archive', l: 'Archive…', i: 'i-archive', d: true });
    items.push({ a: 'remove', l: 'Delete…', i: 'i-trash', d: true });
    return items;
  }
  function commentMenuItems(c) {
    var items = [];
    if (c.status !== 'APPROVED') items.push({ a: 'approve', l: 'Approve…', i: 'i-check' });
    if (c.status !== 'REJECTED') items.push({ a: 'reject', l: 'Reject…', i: 'i-x', d: c.status === 'APPROVED' });
    if (c.status !== 'SPAM') items.push({ a: 'spam', l: 'Mark as spam…', i: 'i-alert', d: true });
    items.push({ sep: true });
    items.push({ a: 'cdelete', l: 'Delete…', i: 'i-trash', d: true });
    return items;
  }
  function renderMenu(trigger) {
    var kind = trigger.dataset.menu, id = trigger.dataset.id, target = kind === 'post' ? post(id) : comment(id);
    if (!target) return;
    var items = kind === 'post' ? postMenuItems(target) : commentMenuItems(target);
    var menu = trigger.parentNode.querySelector('.menu');
    if (!menu) { menu = document.createElement('div'); menu.className = 'menu'; menu.setAttribute('role', 'menu'); trigger.parentNode.appendChild(menu); }
    menu.setAttribute('aria-label', 'Actions for ' + (kind === 'post' ? target.title : 'comment by ' + target.author));
    menu.innerHTML = '<div class="menu-label">' + (kind === 'post' ? esc(target.title) : 'Comment · ' + esc(target.author)) + '</div>' + items.map(function (it) {
      if (it.sep) return '<div role="separator"></div>';
      return '<button type="button" role="menuitem" class="' + (it.d ? 'danger' : '') + '" data-act="' + it.a + '" data-kind="' + kind + '" data-id="' + esc(id) + '">' + icon(it.i) + esc(it.l) + (it.spec ? '<span class="spec-tag">spec</span>' : '') + '</button>';
    }).join('');
    menu.hidden = false; trigger.setAttribute('aria-expanded', 'true');
    openMenu = { menu: menu, trigger: trigger };
    var first = menu.querySelector('[role="menuitem"]'); if (first) first.focus();
  }
  function act(action, kind, id) {
    if (action === 'edit') { var key = null; Object.keys(EDITOR_POSTS).forEach(function (k) { if (EDITOR_POSTS[k].id === id) key = k; }); openEditor(key || id); return; }
    if (action === 'view') { var p = post(id); announce('Live post link: https://nestlancer.com/blog/' + (p ? p.slug : '') + ' — not opened by the lab.'); toast({ id: 'v' + Date.now(), label: 'View live · ' + (p ? p.title : ''), detail: 'https://nestlancer.com/blog/' + (p ? p.slug : '') + ' · public route, host not captured in the console DOM · not opened', undoable: false }); return; }
    openConfirm(action, id);
  }

  /* lab states */
  function setLab(s) {
    state.lab = s;
    if (s === 'demo') {
      if (!state.pendingDemo.length) {
        state.pendingDemo = [Object.assign({}, COMMENTS[0], { id: 'DEMO-pending-1', status: 'PENDING', demo: true }), Object.assign({}, COMMENTS[1], { id: 'DEMO-pending-2', status: 'PENDING', demo: true })];
        state.reportedDemo = [Object.assign({}, COMMENTS[2], { id: 'DEMO-reported-1', status: 'REPORTED', demo: true, reportedBy: 'not documented', reason: 'not documented' })];
      }
    } else { state.pendingDemo = []; state.reportedDemo = []; }
    emit(); announce('Preview state: ' + s);
  }

  /* --------------------------------------------------------- mount / events */
  function mount(render) {
    listeners.push(render);
    try { var saved = JSON.parse(localStorage.getItem('nl-f21-view') || '{}'); if (saved.tab) state.tab = saved.tab; if (saved.view) state.view = saved.view; if (saved.density) state.density = saved.density; } catch (e) { }

    document.addEventListener('click', function (e) {
      var t = e.target;
      if (openMenu && !openMenu.menu.contains(t) && !openMenu.trigger.contains(t)) closeMenu(false);
      var el;
      if ((el = t.closest('[role="tab"][data-tab]'))) { state.editor = null; set({ tab: el.dataset.tab }); return; }
      if ((el = t.closest('[data-goto-tab]'))) { state.editor = null; set({ tab: el.dataset.gotoTab }); return; }
      if ((el = t.closest('[data-view]'))) { set({ view: el.dataset.view }); return; }
      if ((el = t.closest('[data-density]'))) { set({ density: el.dataset.density }); return; }
      if ((el = t.closest('[data-state]'))) { setLab(el.dataset.state); return; }
      if (t.closest('[data-retry]')) { setLab('live'); return; }
      if ((el = t.closest('[data-menu]'))) { if (openMenu && openMenu.trigger === el) closeMenu(true); else { closeMenu(false); renderMenu(el); } return; }
      if ((el = t.closest('[data-act]'))) { var a = el.dataset.act, k = el.dataset.kind, id = el.dataset.id; closeMenu(false); act(a, k, id); return; }
      if ((el = t.closest('[data-open-editor]'))) { openEditor(el.dataset.openEditor, el.dataset.mode); return; }
      if (t.closest('[data-new-post]')) { openEditor('new'); return; }
      if (t.closest('[data-close-editor]')) { closeEditor(); return; }
      if ((el = t.closest('[data-mode]'))) { if (state.editor) { state.editor.mode = el.dataset.mode; emit(); announce('Editor view: ' + el.dataset.mode); } return; }
      if ((el = t.closest('[data-device]'))) { if (state.editor) { state.editor.device = el.dataset.device; emit(); } return; }
      if (t.closest('[data-save]')) { if (state.editor && state.editor.fields.title.trim()) openConfirm(state.editor.isNew ? 'create' : 'save'); return; }
      if ((el = t.closest('[data-editor-action]'))) { if (state.editor && state.editor.id) { var pid = state.editor.id, pp = post(pid); if (!pp) { pp = Object.assign({}, state.posts[0], { id: pid, title: state.editor.fields.title, slug: state.editor.fields.slug || slugify(state.editor.fields.title), category: state.editor.fields.category, status: state.editor.status, source: 'DOM' }); state.posts.push(pp); } openConfirm(el.dataset.editorAction, pid); } return; }
      if ((el = t.closest('[data-undo]'))) { undo(el.dataset.undo); var tt = el.closest('.toast'); if (tt) { clearInterval(tt._iv); tt.remove(); } return; }
      if ((el = t.closest('[data-close-toast]'))) { var tt2 = el.closest('.toast'); if (tt2) { clearInterval(tt2._iv); tt2.remove(); } return; }
      if ((el = t.closest('[data-dismiss]'))) { var n = el.closest('.notice'); if (n) { n.remove(); announce('Notice dismissed.'); } return; }
      if ((el = t.closest('[data-select-comment]'))) { state.selectedComment = el.dataset.selectComment; emit(); return; }
      if ((el = t.closest('[data-restore]'))) { var rev = DEMO_REVISIONS[+el.dataset.restore]; var rp = post(state.revisionPost); openConfirm('restore', null, { rev: rev, postTitle: rp ? rp.title : '' }); return; }
      if (t.closest('[data-merge]')) { if (state.mergeFrom && state.mergeTo && state.mergeFrom !== state.mergeTo) openConfirm('merge', null, { from: state.mergeFrom, to: state.mergeTo }); return; }
      if ((el = t.closest('[data-add]'))) { var inp = document.getElementById(el.dataset.add === 'addTag' ? 'new-tag' : 'new-category'); if (inp && inp.value.trim()) { openConfirm(el.dataset.add, null, { name: inp.value.trim() }); } else if (inp) { inp.setAttribute('aria-invalid', 'true'); inp.focus(); } return; }
      if (t.closest('[data-confirm-cancel]')) { var dlg = confirmDialog(); if (dlg) dlg.close(); pending = null; return; }
      if (t.closest('#confirm-ok')) { applyPending(); return; }
      if ((el = t.closest('[data-step]'))) { set({ step: +el.dataset.step }); return; }
      if (t.closest('[data-clear-search]')) { state.q = ''; state.status = 'all'; var qi = document.querySelector('[data-q]'); if (qi) qi.value = ''; var si = document.querySelector('[data-status]'); if (si) si.value = 'all'; set({ q: '' }); return; }
      if ((el = t.closest('[data-page]'))) { announce('Only page 1 of 6 was captured; pages 2–6 are not available in this lab.'); return; }
    });

    document.addEventListener('input', function (e) {
      var t = e.target, el;
      if (t.matches('[data-q]')) { state.q = t.value; var box = document.getElementById('posts-region'); if (box) { box.innerHTML = api.postsBody ? api.postsBody(state) : (window.NL_BLOCKS ? NL_BLOCKS.postsBody(state, api) : ''); } var cnt = document.getElementById('posts-count'); if (cnt) cnt.textContent = filteredPosts().filter(function (p) { return String(p.id).indexOf('DEMO') !== 0; }).length; return; }
      if (t.matches('[data-cq]')) { state.cq = t.value; var cbox = document.getElementById('comments-region'); if (cbox) cbox.innerHTML = NL_BLOCKS.commentsBody(state, api); return; }
      if ((el = t.closest('[data-field]')) && state.editor) { state.editor.fields[el.dataset.field] = el.value; state.editor.dirty = true; patchEditorDOM(); return; }
      if (t.matches('#new-tag, #new-category')) t.removeAttribute('aria-invalid');
    });
    document.addEventListener('change', function (e) {
      var t = e.target;
      if (t.matches('[data-status]')) { set({ status: t.value }); return; }
      if (t.matches('[data-cstatus]')) { set({ cstatus: t.value }); return; }
      if (t.matches('[data-revision-post]')) { set({ revisionPost: t.value }, true); return; }
      if (t.matches('[data-merge-from]')) { state.mergeFrom = t.value; emit(); return; }
      if (t.matches('[data-merge-to]')) { state.mergeTo = t.value; emit(); return; }
      if (t.matches('[data-field="category"]') && state.editor) { state.editor.fields.category = t.value; state.editor.dirty = true; patchEditorDOM(); return; }
      if (t.matches('[data-editor-status]') && state.editor) { announce('Status is changed through Publish, Schedule, Unpublish or Archive — each has its own confirm. The select mirrors the captured control.'); t.value = state.editor.status; return; }
    });
    document.addEventListener('keydown', function (e) {
      var tabs = e.target.closest && e.target.closest('[role="tablist"]');
      if (tabs && ['ArrowRight', 'ArrowLeft', 'Home', 'End'].indexOf(e.key) > -1) {
        var items = Array.prototype.slice.call(tabs.querySelectorAll('[role="tab"]')), i = items.indexOf(document.activeElement);
        if (i > -1) { e.preventDefault(); var j = e.key === 'Home' ? 0 : e.key === 'End' ? items.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length; items[j].focus(); items[j].click(); }
        return;
      }
      if (openMenu) {
        var mi = Array.prototype.slice.call(openMenu.menu.querySelectorAll('[role="menuitem"]')), ix = mi.indexOf(document.activeElement);
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); var nx = e.key === 'ArrowDown' ? (ix + 1) % mi.length : (ix - 1 + mi.length) % mi.length; mi[nx].focus(); return; }
        if (e.key === 'Escape' || e.key === 'Tab') { closeMenu(e.key === 'Escape'); return; }
        if (e.key === 'Home') { e.preventDefault(); mi[0].focus(); return; }
        if (e.key === 'End') { e.preventDefault(); mi[mi.length - 1].focus(); return; }
      }
      if (e.key === 'Escape') { closeNav(); var dr = document.getElementById('drawer'); if (dr && !dr.hidden && api.onEscape) api.onEscape(); }
      if (e.key === '?' && !/input|textarea|select/i.test(document.activeElement.tagName)) { var dlg = document.getElementById('shortcuts'); if (dlg && !dlg.open) { e.preventDefault(); dlg.showModal(); } }
      if (api.onKey && !/input|textarea|select/i.test(document.activeElement.tagName) && !(confirmDialog() && confirmDialog().open)) api.onKey(e);
    });

    /* confirm dialog focus management */
    var cd = confirmDialog();
    if (cd) { cd.addEventListener('close', function () { pending = null; }); cd.addEventListener('cancel', function () { pending = null; }); }

    /* theme */
    var themeBtn = document.getElementById('theme');
    function paintTheme() {
      var dark = document.documentElement.classList.contains('dark');
      if (themeBtn) { themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false'); themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode'); themeBtn.innerHTML = icon(dark ? 'i-spark' : 'i-moon'); }
    }
    if (themeBtn) themeBtn.addEventListener('click', function () { var dark = document.documentElement.classList.toggle('dark'); try { localStorage.setItem('nl-theme', dark ? 'dark' : 'light'); } catch (e) { } paintTheme(); announce(dark ? 'Dark theme on' : 'Light theme on'); });
    paintTheme();

    /* sidebar collapse + drawer */
    var app = document.querySelector('.app'), collapse = document.getElementById('collapse'), menu = document.getElementById('menu'), overlay = document.getElementById('nav-overlay');
    try { if (app && localStorage.getItem('nl-nav') === 'collapsed') { app.classList.add('collapsed'); if (collapse) { collapse.setAttribute('aria-expanded', 'false'); collapse.setAttribute('aria-label', 'Expand sidebar'); collapse.querySelector('.collapse-text').textContent = 'Expand'; } } } catch (e) { }
    if (collapse) collapse.addEventListener('click', function () {
      var c = app.classList.toggle('collapsed');
      collapse.setAttribute('aria-expanded', c ? 'false' : 'true'); collapse.setAttribute('aria-label', c ? 'Expand sidebar' : 'Collapse sidebar'); collapse.querySelector('.collapse-text').textContent = c ? 'Expand' : 'Collapse';
      try { localStorage.setItem('nl-nav', c ? 'collapsed' : 'expanded'); } catch (e) { }
      announce(c ? 'Sidebar collapsed to icon rail' : 'Sidebar expanded');
    });
    function closeNav() { if (!app || !app.classList.contains('nav-open')) return; app.classList.remove('nav-open'); if (menu) { menu.setAttribute('aria-expanded', 'false'); menu.focus(); } }
    if (menu) menu.addEventListener('click', function () { var open = app.classList.toggle('nav-open'); menu.setAttribute('aria-expanded', open ? 'true' : 'false'); if (open) { var f = app.querySelector('.sidebar .nav'); if (f) f.focus(); } });
    if (overlay) overlay.addEventListener('click', closeNav);
    api.closeNav = closeNav;

    emit();
    /* error state focus */
    listeners.push(function () { if (state.lab === 'error') { var al = document.querySelector('[data-alert]'); if (al && document.activeElement !== al) al.focus(); } });
  }

  /* ---------------------------------------------------------- public API */
  var api = {
    data: { cats: CATS, tags: TAGS, authors: AUTHORS, kpi: KPI, analytics: ANALYTICS, editorPosts: EDITOR_POSTS, revisions: DEMO_REVISIONS, ep: EP, spec: SPEC, captured: CAPTURED, pub: PUB },
    tie: T, state: state, esc: esc, icon: icon, chip: chip, badge: statusBadge, prov: provenance, notice: notice, empty: emptyState, skeleton: skeleton, error: errorState,
    md: md, words: words, slugify: slugify, fmtDT: fmtDT, tz: tz, derived: derived, counts: counts, filteredPosts: filteredPosts, filteredComments: filteredComments,
    post: post, comment: comment, openEditor: openEditor, closeEditor: closeEditor, confirm: openConfirm, undo: undo, set: set, announce: announce, mount: mount, setLab: setLab,
    postMenuItems: postMenuItems, commentMenuItems: commentMenuItems, nowLocalInput: nowLocalInput, articleHTML: articleHTML, snippetHTML: snippetHTML, act: act, closeMenu: closeMenu,
    onKey: null, onEscape: null, postsBody: null
  };
  window.NL = api;
})();
