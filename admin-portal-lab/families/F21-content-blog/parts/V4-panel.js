/* F21 · V4 · Dense console — "everything on one screen".
   A: bento — dense table + side column + bottom tab strip; drawer from the right.  B: the table is the hero.
   C: operate the whole blog from one screen.  D: compact by default (density toggle, persisted).
   E: multi-select that prepares N single requests (no batch endpoint exists), preview drawer, column visibility. */
(function () {
  'use strict';
  var api = window.NL, B = window.NL_BLOCKS, E = api.esc;
  var root = document.getElementById('root');
  var sel = [], batch = null, peek = null, peekReturn = null;
  var cols = { category: true, published: true, min: true };
  try { var saved = JSON.parse(localStorage.getItem('nl-f21-v4-cols') || 'null'); if (saved) cols = saved; } catch (e) { }
  function saveCols() { try { localStorage.setItem('nl-f21-v4-cols', JSON.stringify(cols)); } catch (e) { } }
  if (api.state.tab === 'posts') api.state.tab = 'comments';
  try { var sv = JSON.parse(localStorage.getItem('nl-f21-view') || '{}'); if (!sv.density) api.state.density = 'compact'; } catch (e) { api.state.density = 'compact'; }

  function strip(state) {
    var k = api.data.kpi, c = api.counts();
    var cell = function (l, v, s) { return '<div class="cell"><div class="cell-label">' + l + '</div><div class="cell-value num">' + v + '</div><div class="cell-sub">' + s + '</div></div>'; };
    return '<div class="console-strip"><div class="strip">' + cell('posts.total', k.total, 'shot · 110 = 110 + 0 ✔') + cell('posts.published', k.published, c.changed ? 'local: ' + c.local.published + ' on page 1' : 'all 20 page-1 rows') + cell('posts.drafts', k.drafts, 'none captured') + cell('comments.pending', k.pending, c.pending ? 'DEMO queue: ' + c.pending : 'queue clear') + '</div>' +
      '<div class="console-tools"><div class="seg" role="group" aria-label="Density"><button type="button" data-density="comfortable" aria-pressed="' + (state.density !== 'compact') + '">Comfortable</button><button type="button" data-density="compact" aria-pressed="' + (state.density === 'compact') + '">Compact</button></div>' +
      '<details class="cols"><summary>' + api.icon('i-list') + 'Columns</summary><div class="cols-pop">' + ['category', 'published', 'min'].map(function (k) { return '<label><input type="checkbox" data-col="' + k + '"' + (cols[k] ? ' checked' : '') + '> ' + k + '</label>'; }).join('') + '<span class="hint">persisted · nl-f21-v4-cols</span></div></details>' +
      '<span class="badge badge-neutral">' + api.icon('i-cal') + 'period 30d</span>' + B.stateSwitch(state, api) + '</div></div>';
  }
  function selBar(state) {
    if (!sel.length) return '';
    var posts = sel.map(api.post).filter(Boolean);
    var acts = [['feature', 'Feature'], ['unfeature', 'Unfeature'], ['unpublish', 'Unpublish…'], ['archive', 'Archive…']];
    var prepared = batch ? posts.map(function (p) { return '<li>' + E(api.data.ep[batch === 'unpublish' ? 'unpublish' : batch].replace('{id}', p.id.indexOf('shot-') === 0 ? '{id}' : p.id)) + ' <span class="hint">· ' + E(p.title) + '</span></li>'; }).join('') : '';
    return '<div class="sel-bar" role="region" aria-label="Selection"><b><span class="num">' + sel.length + '</span> selected</b><span>No batch endpoint is documented — the console prepares <b>' + sel.length + ' single requests</b> and confirms each one.</span>' +
      (batch ? '<div style="flex-basis:100%"><ol>' + prepared + '</ol><div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;align-items:center"><button class="btn btn-primary btn-sm" type="button" data-batch-next>Confirm 1 of ' + sel.length + ': ' + E(acts.filter(function (a) { return a[0] === batch; })[0][1].replace('…', '')) + ' “' + E(posts[0] ? posts[0].title : '') + '”…</button><button class="btn btn-ghost btn-sm" type="button" data-batch-cancel>Stop</button></div></div>' :
        '<span class="ctx-actions">' + acts.map(function (a) { return '<button class="btn btn-secondary btn-sm" type="button" data-batch="' + a[0] + '">' + a[1] + '</button>'; }).join('') + '<button class="btn btn-ghost btn-sm" type="button" data-sel-clear>Clear</button></span>') + '</div>';
  }
  function table(state) {
    if (state.lab === 'loading') return api.skeleton(10);
    if (state.lab === 'error') return api.error('Posts', api.data.ep.list);
    var rows = state.lab === 'empty' ? [] : api.filteredPosts();
    if (!rows.length) return api.empty('No posts match your filters', 'Adjust the search text or status filters.', '<button class="btn btn-secondary btn-sm" type="button" data-clear-search>Clear search</button>', 'i-search');
    var allSel = rows.length && rows.every(function (p) { return sel.indexOf(p.id) > -1; });
    var h = '<div class="table-wrap"><table class="data-table stack console-table"><caption class="sr-only">Blog posts — page 1 of 6, 20 of 110 captured rows, selectable</caption><thead><tr><th scope="col" class="sel-cell"><input type="checkbox" data-sel-all aria-label="Select all rows on this page"' + (allSel ? ' checked' : '') + '></th><th scope="col">post</th>' + (cols.category ? '<th scope="col">category</th>' : '') + '<th scope="col">status</th>' + (cols.published ? '<th scope="col">published</th>' : '') + (cols.min ? '<th scope="col" class="num">min</th>' : '') + '<th scope="col" class="num">views</th><th scope="col" class="actions">actions</th></tr></thead><tbody>';
    rows.forEach(function (p) {
      var key = null; Object.keys(api.data.editorPosts).forEach(function (k) { if (api.data.editorPosts[k].id === p.id) key = k; });
      h += '<tr' + (peek === p.id ? ' class="is-focus"' : '') + (sel.indexOf(p.id) > -1 ? ' aria-selected="true"' : '') + '><td class="sel-cell" data-label="Select"><input type="checkbox" data-sel="' + E(p.id) + '" aria-label="Select ' + E(p.title) + '"' + (sel.indexOf(p.id) > -1 ? ' checked' : '') + '></td>' +
        '<th scope="row" data-label="Post"><button type="button" class="post-title" data-peek="' + E(p.id) + '" aria-haspopup="dialog">' + E(p.title) + '</button><span class="post-meta"><span class="post-slug">/' + E(p.slug) + '</span>' + (p.featured ? '<span class="chip">featured</span>' : '') + '</span></th>' +
        (cols.category ? '<td data-label="Category">' + E(p.category) + '</td>' : '') + '<td data-label="Status">' + api.badge(p.status) + (p.statusSource === 'DEMO' ? ' ' + api.chip('demo', 'DEMO') : '') + '</td>' + (cols.published ? '<td data-label="Published" class="mono">' + E(p.published) + '</td>' : '') + (cols.min ? '<td data-label="min" class="num">' + p.min + '</td>' : '') + '<td data-label="views" class="num">' + p.views + '</td>' +
        '<td class="actions" data-label="Actions"><span class="row-tools"><button class="btn btn-secondary btn-sm" type="button" data-open-editor="' + E(key || p.id) + '" aria-label="Edit ' + E(p.title) + '">Edit</button><span class="menu-wrap"><button class="icon-button" type="button" data-menu="post" data-id="' + E(p.id) + '" aria-haspopup="menu" aria-expanded="false" aria-label="Actions for ' + E(p.title) + '">' + api.icon('i-dots') + '</button></span></span></td></tr>';
    });
    return h + '</tbody></table></div><div style="margin-top:10px">' + B.pager(state, api, rows) + '</div>';
  }
  function side(state) {
    var D = api.data;
    return '<aside class="console-side" aria-label="Taxonomy and receipts">' +
      '<section class="panel"><div class="panel-head"><div><h2 class="panel-title">taxonomy</h2><p class="panel-sub">4 categories · 6 tags · 1 author ' + api.chip('shot', 'shot 014') + '</p></div></div><div class="panel-body"><dl class="kv"><dt>categories</dt><dd>' + D.cats.map(function (c) { return E(c.name); }).join(' · ') + '</dd><dt>tags</dt><dd>' + D.tags.join(' · ') + '</dd><dt>authors</dt><dd>Riya Kapoor</dd></dl><button class="btn btn-ghost btn-sm" type="button" data-goto-tab="taxonomy" style="margin-top:8px">Merge · revisions ↓</button></div></section>' +
      B.receiptsPanel(state, api, { title: 'receipts', sub: 'what the console prepared' }) + '</aside>';
  }
  function tabsStrip(state) {
    var c = api.counts(), defs = [['comments', 'Comments', c.comments], ['pending', 'Pending', c.pending], ['reported', 'Reported', c.reported], ['analytics', 'Analytics', null], ['taxonomy', 'Taxonomy', null]];
    return '<div class="tabs" role="tablist" aria-label="Console sections">' + defs.map(function (d) { var s = state.tab === d[0]; return '<button role="tab" type="button" id="tab-' + d[0] + '" data-tab="' + d[0] + '" aria-selected="' + s + '" aria-controls="panel" tabindex="' + (s ? 0 : -1) + '">' + d[1] + (d[2] !== null ? '<span class="count">' + d[2] + '</span>' : '') + '</button>'; }).join('') + '</div>';
  }
  function drawer(state) {
    var p = peek ? api.post(peek) : null;
    if (!p) return '<div class="drawer-overlay" hidden></div><div class="drawer" id="drawer" hidden></div>';
    var key = null; Object.keys(api.data.editorPosts).forEach(function (k) { if (api.data.editorPosts[k].id === p.id) key = k; });
    var ep = api.data.editorPosts[key];
    return '<div class="drawer-overlay" data-close-drawer></div><div class="drawer" id="drawer" role="dialog" aria-modal="false" aria-labelledby="drawer-h" tabindex="-1">' +
      '<div class="drawer-head"><div><div class="eyebrow">post preview · ' + (ep ? E(ep.source) : 'shot 009 row') + '</div><h2 id="drawer-h" style="font-size:16px;line-height:1.3">' + E(p.title) + '</h2></div><button class="icon-button" type="button" data-close-drawer aria-label="Close preview">' + api.icon('i-x') + '</button></div>' +
      '<div class="drawer-body"><dl class="kv"><dt>status</dt><dd>' + api.badge(p.status) + (p.scheduledAt ? ' <span class="hint">for ' + E(api.fmtDT(p.scheduledAt)) + '</span>' : '') + '</dd><dt>slug</dt><dd class="mono">/' + E(p.slug) + (p.slugSource === 'derived' ? ' ' + api.chip('derived', 'derived') : '') + '</dd><dt>category</dt><dd>' + E(p.category) + '</dd><dt>published</dt><dd class="mono">' + E(p.published) + '</dd><dt>featured</dt><dd>' + (p.featured ? 'yes' : 'no') + '</dd><dt>row id</dt><dd class="mono">' + (p.id.indexOf('shot-') === 0 ? 'not legible in the screenshot' : E(p.id)) + '</dd></dl>' +
      '<section><h3 style="font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted-foreground);margin-bottom:6px">performance</h3><div class="stats"><div class="stat"><div class="k">views</div><div class="v num">' + p.views + '</div></div><div class="stat"><div class="k">likes</div><div class="v num">0</div></div><div class="stat"><div class="k">read</div><div class="v num">' + p.min + ' min</div></div></div><p class="hint" style="margin-top:6px">views/read from the list row (shot 009); likes from the analytics total (0 across all posts). <span class="mono">GET /admin/blog/analytics/posts/{id}</span> documents no fields.</p></section>' +
      (ep && ep.excerpt ? '<section><h3 style="font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted-foreground);margin-bottom:6px">excerpt · DOM</h3><p>' + E(ep.excerpt) + '</p></section>' : '<p class="hint">Excerpt and body were not captured for this row — open the editor to see which fields exist.</p>') +
      '</div><div class="drawer-foot"><button class="btn btn-primary btn-sm" type="button" data-open-editor="' + E(key || p.id) + '">Edit</button><span class="menu-wrap"><button class="btn btn-secondary btn-sm" type="button" data-menu="post" data-id="' + E(p.id) + '" aria-haspopup="menu" aria-expanded="false" aria-label="Actions for ' + E(p.title) + '">' + api.icon('i-dots') + 'Actions</button></span><button class="btn btn-ghost btn-sm" type="button" data-close-drawer>Close</button></div></div>';
  }
  function console_(state) {
    return B.pageHead(state, api, { lede: 'The whole blog on one screen: a dense, selectable table beside taxonomy and receipts, the moderation and analytics tabs docked beneath.' }) + strip(state) +
      '<div class="bento"><section class="panel console-main" aria-labelledby="posts-h"><div class="panel-head"><div><h2 class="panel-title" id="posts-h">posts <span class="hint">(<span id="posts-count">' + B.capturedRows(api.filteredPosts()).length + '</span> of 20 on page 1 · 110 total)</span></h2></div></div><div class="panel-body">' + B.postsToolbar(state, api, { noView: true }) + '<div style="margin-top:10px">' + selBar(state) + '</div><div id="posts-region">' + table(state) + '</div></div></section>' + side(state) + '</div>' +
      tabsStrip(state) + '<section id="panel" role="tabpanel" aria-labelledby="tab-' + state.tab + '" tabindex="-1">' + B.panelFor(state, api, { dense: true, snippet: true, forceList: true, bars: true }) + '</section>' + drawer(state);
  }
  function editing(state) {
    return '<div class="desk-fold"><span>' + api.icon('i-grid') + '<b>console</b> folded while editing</span><button class="btn btn-ghost btn-sm" type="button" data-close-editor>← Back to console</button></div>' + B.editor(state, api, { snippet: true, h1: true }) + B.stateSwitch(state, api);
  }
  var lastReceipts = 0;
  function render(state) {
    if (state.receipts.length > lastReceipts && batch) { var r = state.receipts[0]; if (r.action === batch && sel.indexOf(r.targetId) > -1) sel = sel.filter(function (id) { return id !== r.targetId; }); if (!sel.length) batch = null; }
    lastReceipts = state.receipts.length;
    if (state.editor) peek = null;
    root.className = state.density === 'compact' ? 'density-compact' : '';
    B.swap(root, state.editor ? editing(state) : console_(state));
  }
  function closeDrawer() { if (!peek) return; peek = null; render(api.state); if (peekReturn) { var b = document.querySelector('[data-peek="' + peekReturn + '"]'); if (b) b.focus(); } }
  api.onEscape = closeDrawer;

  document.addEventListener('click', function (ev) {
    var t = ev.target, el;
    if ((el = t.closest('[data-peek]'))) { peek = el.dataset.peek; peekReturn = peek; render(api.state); var d = document.getElementById('drawer'); if (d) d.focus(); return; }
    if (t.closest('[data-close-drawer]')) { closeDrawer(); return; }
    if ((el = t.closest('[data-batch]'))) { batch = el.dataset.batch; render(api.state); var nb = document.querySelector('[data-batch-next]'); if (nb) nb.focus(); return; }
    if (t.closest('[data-batch-next]')) { if (sel.length && batch) api.confirm(batch, sel[0]); return; }
    if (t.closest('[data-batch-cancel]')) { batch = null; render(api.state); return; }
    if (t.closest('[data-sel-clear]')) { sel = []; batch = null; render(api.state); return; }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.matches('[data-sel]')) { var id = t.dataset.sel; if (t.checked) { if (sel.indexOf(id) < 0) sel.push(id); } else sel = sel.filter(function (x) { return x !== id; }); render(api.state); return; }
    if (t.matches('[data-sel-all]')) { var rows = api.filteredPosts().map(function (p) { return p.id; }); sel = t.checked ? rows.slice() : []; render(api.state); return; }
    if (t.matches('[data-col]')) { cols[t.dataset.col] = t.checked; saveCols(); render(api.state); return; }
  });
  /* the shared runtime re-draws only #posts-region on search; hand it this console table */
  api.postsBody = function (state) { return table(state); };

  api.mount(render);
})();
