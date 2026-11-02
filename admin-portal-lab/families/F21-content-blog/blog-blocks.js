/* F21 · Content · Blog + Editor — shared block renderers.
   Each block returns HTML for one captured surface; variants compose them in different orders,
   hierarchies and densities (parts/V#-panel.js). Labels, columns, placeholders and tips are the
   frozen Gate S strings. */
(function () {
  'use strict';
  var B = {};
  var E = function (s) { return NL.esc(s); };

  /* ---------------------------------------------------------------- head */
  B.pageHead = function (state, api, opts) {
    opts = opts || {};
    return '<header class="page-head">' +
      '<div><div class="eyebrow">' + (opts.eyebrow || 'Content operations') + '</div><h1>' + (opts.title || 'Blog') + '</h1>' +
      '<p class="lede">' + (opts.lede || 'Publish stories, moderate reader discussion, and manage content performance and taxonomy.') + '</p>' +
      (opts.noRoute ? '' : '<span class="route">/content · captured ' + api.data.captured + ' · ' + api.chip('shot', 'populated values from screenshot 009') + ' ' + api.chip('dom', 'labels from 18 snapshots') + '</span>') + '</div>' +
      '<div class="page-actions">' + (opts.extraActions || '') +
      '<a class="btn btn-secondary" href="../../../index.html#f21-content-blog" title="Public blog host is not captured in the console DOM — this link returns to the lab gallery">' + api.icon('i-share') + 'View live blog</a>' +
      '<button class="btn btn-primary" type="button" data-new-post>' + api.icon('i-doc') + 'New post</button>' +
      '<span class="route" style="flex-basis:100%;text-align:right">New post → <b>/content/posts/new</b> (C11 · <span title="/content/new is a live 404 in the capture">/content/new is a 404</span>)</span></div></header>';
  };

  /* ---------------------------------------------------------------- hero + strip */
  B.hero = function (state, api, opts) {
    var c = api.counts(), k = api.data.kpi;
    opts = opts || {};
    var changed = c.changed ? ' <span class="hint">· local preview changes: ' + c.local.published + ' published · ' + c.local.draft + ' draft · ' + c.local.scheduled + ' scheduled · ' + c.local.archived + ' archived (page-1 rows only)</span>' : '';
    return '<section class="hero" aria-labelledby="hero-l">' + (opts.art || '') +
      '<div class="hero-label" id="hero-l">Editorial situation ' + api.chip('shot', 'shot') + api.prov({ label: 'How this is read', endpoint: api.data.ep.list, source: 'KPI cards in screenshot 009; DOM 101 shows “—” for all four', notes: ['Total posts 110 = Published 110 + Drafts 0 — ties.', 'The strip has no Scheduled or Archived cell although the filter offers both: two states uncounted.', 'Pending comments 0 agrees with the empty Pending tab.', 'Every captured post was published on Oct 5, 2026 — a seeded corpus, not a cadence.'] }) + '</div>' +
      '<div class="hero-value num">' + k.published + '<small>published of ' + k.total + ' posts</small></div>' +
      '<p class="hero-verdict"><b>Nothing is waiting on an editor.</b> 0 drafts · 0 pending comments · 0 reported comments · 4 approved comments on 3 posts' + changed + '</p></section>';
  };
  B.strip = function (state, api) {
    var k = api.data.kpi;
    function cell(label, value, sub, extra) { return '<div class="cell"><div class="cell-label">' + label + '</div><div class="cell-value num">' + value + '</div><div class="cell-sub">' + sub + '</div>' + (extra || '') + '</div>'; }
    return '<section class="strip" aria-label="Captured KPI cards">' +
      cell('Total posts', k.total, 'Across all publishing states') +
      cell('Published', k.published, 'Visible on the public blog') +
      cell('Drafts', k.drafts, 'Still in editorial workflow') +
      cell('Pending comments', k.pending, 'Queue is clear') +
      cell('Scheduled · Archived ' + api.chip('derived', 'not in strip'), '—', 'Filter offers both states; the KPI strip never counted them') + '</section>';
  };

  /* ---------------------------------------------------------------- tabs */
  B.tabs = function (state, api, opts) {
    var c = api.counts();
    var defs = [['posts', 'Posts', null], ['comments', 'Comments', c.comments], ['pending', 'Pending', c.pending], ['reported', 'Reported', c.reported], ['analytics', 'Analytics', null], ['taxonomy', 'Taxonomy', null]];
    return '<div class="tabs" role="tablist" aria-label="Blog sections"' + (opts && opts.id ? ' id="' + opts.id + '"' : '') + '>' + defs.map(function (d) {
      var sel = state.tab === d[0] && !state.editor;
      return '<button role="tab" type="button" id="tab-' + d[0] + '" aria-selected="' + sel + '" aria-controls="panel" tabindex="' + (sel ? 0 : -1) + '" data-tab="' + d[0] + '">' + d[1] + (d[2] !== null && d[2] !== undefined ? '<span class="count">' + d[2] + '</span>' : '') + '</button>';
    }).join('') + '</div>';
  };

  /* ---------------------------------------------------------------- posts */
  B.postsToolbar = function (state, api, opts) {
    opts = opts || {};
    var sel = function (v, l) { return '<option value="' + v + '"' + (state.status === v ? ' selected' : '') + '>' + l + '</option>'; };
    return '<div class="toolbar" role="search" aria-label="Filter posts">' +
      '<label class="search"><span class="sr-only">Search posts by title</span>' + api.icon('i-search') + '<input class="input" type="search" placeholder="Search posts by title…" value="' + E(state.q) + '" data-q autocomplete="off"></label>' +
      '<label><span class="sr-only">Status</span><select class="select" data-status aria-label="Status filter">' + sel('all', 'All statuses') + sel('published', 'Published') + sel('draft', 'Draft') + sel('scheduled', 'Scheduled') + sel('archived', 'Archived') + '</select></label>' +
      (opts.noView ? '' : '<div class="seg" role="group" aria-label="Layout"><button type="button" data-view="list" aria-pressed="' + (state.view === 'list') + '" aria-label="List view">' + api.icon('i-list') + '</button><button type="button" data-view="grid" aria-pressed="' + (state.view === 'grid') + '" aria-label="Card view (captured in screenshot 071)">' + api.icon('i-grid') + '</button></div>') +
      '<span class="grow"></span>' +
      api.prov({ label: 'Where from', endpoint: api.data.ep.list, source: 'rows: screenshot 009 (list) and 071 (cards); columns + filter values: DOM 101/102', notes: ['GET /admin/posts documents no query parameters — search, status filter and paging are undocumented contracts (chip on the pager).', 'Slugs other than row 13 are not legible in the shot; they are derived from the title and marked derived.', 'Row IDs are not visible in the shot; menus print {id — not legible}.'], right: true }) + '</div>';
  };
  function rowTools(api, p, dense) {
    var editKey = null; Object.keys(api.data.editorPosts).forEach(function (k) { if (api.data.editorPosts[k].id === p.id || api.data.editorPosts[k].title === p.title) editKey = k; });
    return '<span class="row-tools"><button class="btn btn-secondary btn-sm" type="button" data-open-editor="' + E(editKey || p.id) + '" aria-label="Edit ' + E(p.title) + '">' + (dense ? api.icon('i-doc') : api.icon('i-doc') + 'Edit') + '</button>' +
      '<span class="menu-wrap"><button class="icon-button" type="button" data-menu="post" data-id="' + E(p.id) + '" aria-haspopup="menu" aria-expanded="false" aria-label="Actions for ' + E(p.title) + '">' + api.icon('i-dots') + '</button></span></span>';
  }
  B.postRow = function (state, api, p, dense) {
    var statusChip = p.statusSource === 'DEMO' ? ' ' + api.chip('demo', 'DEMO') : '';
    return '<tr data-row="' + E(p.id) + '">' +
      '<th scope="row" class="post-cell" data-label="Post"><span><button class="post-title" type="button" data-open-editor="' + E(p.id) + '">' + E(p.title) + '</button><span class="post-meta"><span class="post-slug">/' + E(p.slug) + '</span>' + (p.slugSource === 'derived' ? api.chip('derived', 'derived', 'slug derived from the title — not legible in the screenshot') : '') + (p.status === 'PUBLISHED' ? '<span class="live-link">' + api.icon('i-share') + 'live</span>' : '') + '</span></span></th>' +
      '<td data-label="Category">' + E(p.category) + '</td>' +
      '<td data-label="Status">' + api.badge(p.status) + statusChip + (p.status === 'SCHEDULED' && p.scheduledAt ? '<span class="row-note hint" style="display:block;margin-top:2px">for ' + E(api.fmtDT(p.scheduledAt)) + '</span>' : '') + '</td>' +
      '<td data-label="Published" class="num">' + E(p.published) + '</td>' +
      '<td data-label="Stats"><span class="stat-pair num">' + p.min + ' min <span class="sep">·</span> ' + p.views + ' views</span>' + (p.featured ? ' <span class="chip">featured</span>' : '') + '</td>' +
      '<td class="actions" data-label="Actions">' + rowTools(api, p, dense) + '</td></tr>';
  };
  B.postsTable = function (state, api, rows, opts) {
    opts = opts || {};
    if (!rows.length) return api.empty('No posts match your filters', state.status !== 'all' && state.status !== 'published' && !state.q ? 'No ' + state.status + ' post exists in the captured page — every one of the 110 captured posts is Published. A ' + state.status + ' row appears here only after a local preview action.' : 'Adjust the search text or status filters.', '<button class="btn btn-secondary btn-sm" type="button" data-clear-search>Clear search</button>', 'i-search');
    return '<div class="table-wrap"><table class="data-table stack' + (opts.dense ? ' dense' : '') + '"><caption class="sr-only">Blog posts — page 1 of 6, 20 of 110 captured rows</caption><thead><tr><th scope="col">Post</th><th scope="col">Category</th><th scope="col">Status</th><th scope="col">Published</th><th scope="col">Stats</th><th scope="col" class="actions">Actions</th></tr></thead><tbody>' +
      rows.map(function (p) { return B.postRow(state, api, p, opts.dense); }).join('') + '</tbody></table></div>';
  };
  B.postsCards = function (state, api, rows) {
    if (!rows.length) return B.postsTable(state, api, rows);
    return '<div class="cards">' + rows.map(function (p) {
      return '<article class="card-post" aria-label="' + E(p.title) + '">' + (p.featured ? '<span class="featured">Featured</span>' : '<span class="featured" style="color:var(--muted-foreground)">Not featured</span>') +
        '<h3>' + E(p.title) + '</h3><div class="post-meta"><span class="post-slug">/' + E(p.slug) + '</span>' + (p.slugSource === 'derived' ? api.chip('derived', 'derived') : '') + '</div>' +
        '<div class="provenance">' + api.badge(p.status) + '<span class="hint">' + E(p.category) + ' · ' + E(p.published) + '</span></div>' +
        '<div class="card-foot"><span class="stat-pair num hint">' + p.min + ' min <span class="sep">·</span> ' + p.views + ' views</span>' + rowTools(api, p, false) + '</div></article>';
    }).join('') + '</div>';
  };
  B.capturedRows = function (rows) { return rows.filter(function (p) { return String(p.id).indexOf('DEMO') !== 0; }); };
  B.pager = function (state, api, rows) {
    var k = api.data.kpi, shown = typeof rows === 'number' ? rows : B.capturedRows(rows).length, demo = typeof rows === 'number' ? 0 : rows.length - shown;
    return '<div class="pager"><span>Showing <b class="num">1–' + shown + '</b> of <b class="num">' + k.total + '</b>' + (demo ? ' <span class="chip demo">+ ' + demo + ' DEMO row' + (demo > 1 ? 's' : '') + ' (local)</span>' : '') + ' · ' + k.perPage + ' per page · Page 1 of ' + k.pages + ' ' + api.chip('shot', 'shot') + ' ' + api.chip('derived', '⌈110 ÷ 20⌉ = 6', 'pagination ties out') + ' <span class="chip" title="GET /admin/posts documents no page/limit parameters">paging params undocumented</span></span>' +
      '<span class="pages" role="group" aria-label="Pages (only page 1 was captured)"><button type="button" aria-current="page">1</button>' + [2, 3, 4, 5, 6].map(function (n) { return '<button type="button" data-page="' + n + '" aria-label="Page ' + n + ' — not captured" title="Only page 1 was captured">' + n + '</button>'; }).join('') + '</span></div>';
  };
  B.postsBody = function (state, api, opts) {
    opts = opts || {};
    if (state.lab === 'loading') return api.skeleton(8);
    if (state.lab === 'error') return api.error('Posts', api.data.ep.list);
    var rows = state.lab === 'empty' ? [] : api.filteredPosts();
    var body = (state.view === 'grid' && !opts.forceList) ? B.postsCards(state, api, rows) : B.postsTable(state, api, rows, opts);
    return body + (rows.length ? '<div style="margin-top:12px">' + B.pager(state, api, rows) + '</div>' : '');
  };
  B.capturedForms = function (state, api) {
    var keys = Object.keys(api.data.editorPosts).filter(function (k) { return api.data.editorPosts[k].captured; });
    if (!keys.length) return '';
    return '<div class="captured-forms"><span class="cf-label">' + api.icon('i-doc') + 'Edit forms captured from the DOM (' + keys.length + ') ' + api.chip('dom', 'DOM', 'snapshots 172–175 and 109–112: full field values and Markdown bodies') + '</span>' + keys.map(function (k) {
      var ep = api.data.editorPosts[k], onPage = state.posts.some(function (p) { return p.id === ep.id || p.title === ep.title; });
      return '<button class="btn btn-secondary btn-sm" type="button" data-open-editor="' + E(k) + '" title="' + E(ep.source) + (onPage ? '' : ' · not on captured page 1') + '">' + E(ep.title) + (onPage ? '' : ' <span class="hint">· p?</span>') + '</button>';
    }).join('') + '<span class="hint">“p?” = not on captured page 1 — these forms are reachable only from here or from Analytics.</span></div>';
  };
  B.postsPanel = function (state, api, opts) {
    opts = opts || {};
    return '<section class="panel" aria-labelledby="posts-h"><div class="panel-head"><div><h2 class="panel-title" id="posts-h">' + (opts.title || 'Posts') + ' <span class="hint">(<span id="posts-count">' + B.capturedRows(api.filteredPosts()).length + '</span> on captured page 1)</span></h2><p class="panel-sub">' + (opts.sub || 'Edit inline; everything else — including every destructive action — lives in the row menu and asks for confirmation.') + '</p></div></div>' +
      '<div class="panel-body">' + B.postsToolbar(state, api, opts) + '<div id="posts-region" style="margin-top:12px">' + B.postsBody(state, api, opts) + '</div>' + B.capturedForms(state, api) + '</div>' +
      '<div class="panel-foot"><span>Captured row actions were Edit · View live · Unpublish · Unfeature/Feature · Archive · Delete — <b>120 buttons per page, 20 one-click Deletes</b>. Here: one Edit + one menu per row, confirm → receipt → 10 s undo.</span><span class="mono">DEMO ' + api.data.ep.list + '</span></div></section>';
  };

  /* ---------------------------------------------------------------- comments */
  B.commentsToolbar = function (state, api) {
    var sel = function (v, l) { return '<option value="' + v + '"' + (state.cstatus === v ? ' selected' : '') + '>' + l + '</option>'; };
    return '<div class="toolbar" role="search" aria-label="Filter comments"><label class="search"><span class="sr-only">Search comment, post, or reader</span>' + api.icon('i-search') + '<input class="input" type="search" placeholder="Search comment, post, or reader…" value="' + E(state.cq) + '" data-cq autocomplete="off"></label>' +
      '<label><span class="sr-only">Status</span><select class="select" data-cstatus aria-label="Comment status filter">' + sel('all', 'All statuses') + sel('pending', 'Pending') + sel('approved', 'Approved') + sel('rejected', 'Rejected') + sel('spam', 'Spam') + '</select></label><span class="grow"></span>' +
      api.prov({ label: 'Where from', endpoint: api.data.ep.comments, source: '4 rows: screenshot 011; columns + filter: DOM 103', notes: ['No total and no pagination are rendered by the product — 4 rows cannot be tied to a count.', 'Comment bodies are AUDIT-SEED demo text; author Arjun Mehta; Oct 6, 2026 9:35–9:36 AM.', 'Approve / Reject / Spam accept no body — no reason field exists to draw.'], right: true }) + '</div>';
  };
  B.commentRow = function (state, api, c, opts) {
    opts = opts || {};
    var tools = '<span class="row-tools">' + (c.status !== 'APPROVED' ? '<button class="btn btn-secondary btn-sm" type="button" data-act="approve" data-kind="comment" data-id="' + E(c.id) + '">' + api.icon('i-check') + 'Approve</button>' : '<button class="btn btn-secondary btn-sm" type="button" data-act="reject" data-kind="comment" data-id="' + E(c.id) + '">' + api.icon('i-x') + 'Reject</button>') +
      '<span class="menu-wrap"><button class="icon-button" type="button" data-menu="comment" data-id="' + E(c.id) + '" aria-haspopup="menu" aria-expanded="false" aria-label="Actions for comment by ' + E(c.author) + '">' + api.icon('i-dots') + '</button></span></span>';
    return '<tr data-row="' + E(c.id) + '"' + (opts.focus === c.id ? ' class="is-focus"' : '') + '>' +
      '<td data-label="Comment"><div class="comment-body">' + E(c.text) + '</div><div class="comment-author"><b>' + E(c.author) + '</b> · <span class="mono">' + E(c.at) + '</span>' + (c.demo ? api.chip('demo', 'DEMO status') : '') + '</div></td>' +
      '<td data-label="Post"><button class="btn btn-ghost btn-sm" type="button" data-open-editor="' + E(c.postKey) + '" style="white-space:normal;text-align:left;padding:0;min-height:0;justify-content:flex-start">' + E(c.post) + '</button></td>' +
      '<td data-label="Status">' + api.badge(c.status) + (c.statusSource === 'DEMO' ? ' ' + api.chip('demo', 'DEMO') : '') + '</td>' +
      '<td class="actions" data-label="Actions">' + tools + '</td></tr>';
  };
  B.commentsBody = function (state, api, opts) {
    if (state.lab === 'loading') return api.skeleton(4);
    if (state.lab === 'error') return api.error('Comments', api.data.ep.comments);
    var rows = state.lab === 'empty' ? [] : api.filteredComments();
    if (!rows.length) return api.empty('No comments match', state.cq || state.cstatus !== 'all' ? 'Adjust the search text or status filter — the capture holds 4 approved comments.' : 'The product rendered no comment rows in this state.', '', 'i-chat');
    return '<div class="table-wrap"><table class="data-table stack"><caption class="sr-only">All comments — 4 captured rows</caption><thead><tr><th scope="col">Comment</th><th scope="col">Post</th><th scope="col">Status</th><th scope="col" class="actions">Actions</th></tr></thead><tbody>' + rows.map(function (c) { return B.commentRow(state, api, c, opts); }).join('') + '</tbody></table></div>' +
      '<div class="pager" style="margin-top:12px"><span><b class="num">' + rows.length + '</b> rows captured · total not shown by the product ' + api.chip('shot', 'shot') + '</span></div>';
  };
  B.commentsPanel = function (state, api, opts) {
    return '<section class="panel" aria-labelledby="comments-h"><div class="panel-head"><div><h2 class="panel-title" id="comments-h">All comments</h2><p class="panel-sub">Review reader discussion across every published post.</p></div></div><div class="panel-body">' + B.commentsToolbar(state, api) + '<div id="comments-region" style="margin-top:12px">' + B.commentsBody(state, api, opts) + '</div></div>' +
      '<div class="panel-foot"><span>Captured actions Reject · Spam · Delete (red). Here: one visible decision + menu; Delete is last, separated, and warns it is permanent.</span><span class="mono">DEMO ' + api.data.ep.comments + '</span></div></section>';
  };

  /* ---------------------------------------------------------------- pending / reported */
  function queuePanel(state, api, kind) {
    var isP = kind === 'pending';
    var rows = isP ? state.pendingDemo.filter(function (x) { return x.status === 'PENDING'; }) : state.reportedDemo.filter(function (x) { return x.status === 'REPORTED'; });
    var head = isP ? ['Pending review', 'Approve legitimate contributions before they appear publicly.', api.data.ep.pending] : ['Reported comments', 'Investigate comments flagged by readers and take action.', api.data.ep.reported];
    var body;
    if (state.lab === 'loading') body = api.skeleton(3);
    else if (state.lab === 'error') body = api.error(head[0], head[2]);
    else if (!rows.length) body = api.empty(isP ? 'Moderation queue clear' : 'No reported comments', (isP ? 'The moderation queue is clear.' : 'No comments are currently reported.') + ' Why: the captured count is 0 (' + api.data.captured + ') and no local preview item has been added.', '<button class="btn btn-secondary btn-sm" type="button" data-goto-tab="comments">Review all comments</button><button class="btn btn-ghost btn-sm" type="button" data-state="demo">Load DEMO queue</button>', 'i-check');
    else body = '<div class="table-wrap"><table class="data-table stack"><caption class="sr-only">' + head[0] + ' — DEMO rows</caption><thead><tr><th scope="col">Comment</th><th scope="col">Post</th><th scope="col">Status</th><th scope="col" class="actions">Actions</th></tr></thead><tbody>' + rows.map(function (c) { return B.commentRow(state, api, c); }).join('') + '</tbody></table></div>' +
      (isP ? '' : '<p class="hint" style="margin-top:8px">Reporter and reason are not documented by <span class="mono">GET /admin/comments/reported</span> (additionalProperties: true) and were never captured — none are shown.</p>');
    return '<section class="panel" aria-labelledby="' + kind + '-h"><div class="panel-head"><div><h2 class="panel-title" id="' + kind + '-h">' + head[0] + '</h2><p class="panel-sub">' + head[1] + '</p></div>' + api.prov({ label: 'Where from', endpoint: head[2], source: 'empty state: screenshot 01' + (isP ? '2' : '3') + ' + DOM 10' + (isP ? '4' : '5'), notes: ['page and limit are required query parameters (type string).', rows.length ? 'DEMO rows reuse captured comment text with a synthetic status — never a product claim.' : 'Captured count: 0.'], right: true }) + '</div><div class="panel-body">' + body + '</div></section>';
  }
  B.pendingPanel = function (s, a) { return queuePanel(s, a, 'pending'); };
  B.reportedPanel = function (s, a) { return queuePanel(s, a, 'reported'); };

  /* ---------------------------------------------------------------- analytics */
  B.analyticsPanel = function (state, api, opts) {
    opts = opts || {};
    var A = api.data.analytics, T = api.tie;
    if (state.lab === 'loading') return '<section class="panel"><div class="panel-body">' + api.skeleton(6) + '</div></section>';
    if (state.lab === 'error') return '<section class="panel"><div class="panel-body">' + api.error('Content performance', api.data.ep.analytics) + '</div></section>';
    var max = A.top[0].views;
    var kpis = '<div class="strip" style="margin-bottom:14px"><div class="cell"><div class="cell-label">Total views ' + api.chip('shot', 'shot') + '</div><div class="cell-value num">' + A.views + '</div><div class="cell-sub">Period: 30d · <span class="mono">period</span> param undocumented on <span class="mono">/analytics</span></div></div>' +
      '<div class="cell"><div class="cell-label">Total likes ' + api.chip('shot', 'shot') + '</div><div class="cell-value num">' + A.likes + '</div><div class="cell-sub">Period: 30d · every row below shows 0 — ties</div></div>' +
      '<div class="cell"><div class="cell-label">Rows in top list ' + api.chip('derived', 'relabelled') + '</div><div class="cell-value num">' + A.topLimit + '</div><div class="cell-sub">Captured label “Top-performing posts 10” — the value is the request <span class="mono">limit</span>, not a measurement</div></div></div>';
    var table = '<div class="table-wrap"><table class="data-table stack"><caption class="sr-only">Top content — 10 captured rows</caption><thead><tr><th scope="col">Top content</th><th scope="col" class="num">Views</th><th scope="col" class="num">Likes</th><th scope="col">Published</th><th scope="col">State</th></tr></thead><tbody>' +
      A.top.map(function (r) {
        var formKey = null; Object.keys(api.data.editorPosts).forEach(function (k) { if (api.data.editorPosts[k].captured && api.data.editorPosts[k].title === r.title) formKey = k; });
        return '<tr><th scope="row" data-label="Post"><span>' + E(r.title) + (r.onPage1 ? '' : ' ' + api.chip('derived', 'not on captured page 1', 'cannot be cross-checked against the posts list')) + (formKey ? ' <button class="btn btn-ghost btn-sm" type="button" data-open-editor="' + formKey + '" aria-label="Edit ' + E(r.title) + ' (captured edit form)">' + api.icon('i-doc') + 'Edit</button>' : '') + '</span></th><td class="num" data-label="Views"><span class="num">' + r.views + '</span>' + (opts.bars === false ? '' : ' <span class="bars" style="display:inline-block;width:' + Math.round(r.views / max * 60) + 'px;height:8px;background:var(--primary);border-radius:4px;vertical-align:middle;margin-left:6px" aria-hidden="true"></span>') + '</td><td class="num" data-label="Likes">' + r.likes + '</td><td data-label="Published">' + E(r.published) + '</td><td data-label="State">' + api.badge('PUBLISHED') + '</td></tr>';
      }).join('') + '</tbody><tfoot><tr><th scope="row">Top 10 total</th><td class="num">' + T.topSum + '</td><td class="num">0</td><td colspan="2" class="hint">' + T.outsideTop + ' of ' + A.views + ' views (' + T.outsidePct + '%) sit on posts not listed</td></tr></tfoot></table></div>';
    return '<section class="panel" aria-labelledby="an-h"><div class="panel-head"><div><h2 class="panel-title" id="an-h">Content performance</h2><p class="panel-sub">Engagement for posts published during the selected period.</p></div><div class="panel-tools"><span class="badge badge-neutral">' + api.icon('i-cal') + 'Last 30 days</span><span class="hint">only period captured</span>' +
      api.prov({ label: 'How these are computed', endpoint: api.data.ep.top, source: 'screenshot 010 (DOM 106 is empty)', calc: 'top-10 sum = 4+2+2+2+2+1+1+1+1+1 = <b>17</b>; 107 − 17 = <b>90</b> views outside the list (84.1%); page-1 list views sum to 21', notes: ['Total views/likes come from <span class="mono">GET /admin/blog/analytics</span>, which documents no period parameter; the top list requires period + limit.', 'Three rows also appear on the captured posts page with identical view counts (Cutting Deploy Time 4 · WebSockets→SSE 2 · Market Research 1).', 'Seven rows are not on captured page 1 and cannot be cross-checked.'], right: true }) + '</div></div><div class="panel-body">' + kpis + table + '</div>' +
      '<div class="panel-foot"><span>No chart is the only copy of a number — the bars repeat the Views column.</span><span class="mono">DEMO ' + api.data.ep.analytics + '</span></div></section>';
  };

  /* ---------------------------------------------------------------- taxonomy */
  B.taxonomyPanel = function (state, api, opts) {
    opts = opts || {};
    var D = api.data, merged = state.mergedDemo || [], tags = D.tags.filter(function (t) { return merged.indexOf(t) < 0; }).concat(state.addedTags || []), cats = D.cats.map(function (c) { return c.name; }).concat(state.addedCats || []);
    if (state.lab === 'loading') return '<section class="panel"><div class="panel-body">' + api.skeleton(5) + '</div></section>';
    if (state.lab === 'error') return '<section class="panel"><div class="panel-body">' + api.error('Taxonomy', D.ep.categories) + '</div></section>';
    var catList = '<ul class="taxo-list">' + D.cats.map(function (c) { return '<li><span>' + E(c.name) + '</span><span class="mono" title="category id from the editor select (DOM)">' + E(c.id.slice(0, 13)) + '…</span></li>'; }).join('') + (state.addedCats || []).map(function (n) { return '<li><span>' + E(n) + ' ' + api.chip('demo', 'DEMO · prepared') + '</span></li>'; }).join('') + '</ul>' +
      '<div class="add-row"><div class="field"><label for="new-category">New category</label><input class="input" id="new-category" maxlength="100" placeholder="New category"></div><button class="btn btn-secondary" type="button" data-add="addCategory">Add</button></div><p class="hint" style="margin-top:6px"><span class="mono">POST /admin/blog/categories</span> · name ≤ 100 · slug auto</p>';
    var tagList = '<ul class="taxo-list">' + tags.map(function (t) { return '<li><span>' + E(t) + ((state.addedTags || []).indexOf(t) > -1 ? ' ' + api.chip('demo', 'DEMO · prepared') : '') + '</span><span class="mono">tag id not captured</span></li>'; }).join('') + merged.map(function (t) { return '<li><span style="text-decoration:line-through;color:var(--muted-foreground)">' + E(t) + '</span>' + api.chip('demo', 'merged (local)') + '</li>'; }).join('') + '</ul>' +
      '<div class="add-row"><div class="field"><label for="new-tag">New tag</label><input class="input" id="new-tag" maxlength="50" placeholder="New tag"></div><button class="btn btn-secondary" type="button" data-add="addTag">Add</button></div><p class="hint" style="margin-top:6px"><span class="mono">POST /admin/blog/tags</span> · name ≤ 50 · slug ≤ 80</p>';
    var opt = function (v, cur) { return '<option value="' + E(v) + '"' + (cur === v ? ' selected' : '') + '>' + E(v) + '</option>'; };
    var canMerge = state.mergeFrom && state.mergeTo && state.mergeFrom !== state.mergeTo;
    var merge = '<div class="two-col"><div class="field"><label for="merge-from">Source</label><select class="select" id="merge-from" data-merge-from><option value="">Select tag</option>' + tags.map(function (t) { return opt(t, state.mergeFrom); }).join('') + '</select></div><div class="field"><label for="merge-to">Destination</label><select class="select" id="merge-to" data-merge-to><option value="">Select tag</option>' + tags.map(function (t) { return opt(t, state.mergeTo); }).join('') + '</select></div></div>' +
      '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:10px"><button class="btn btn-primary" type="button" data-merge ' + (canMerge ? '' : 'disabled') + '>Merge tags</button><span class="hint">' + (canMerge ? 'Confirms before preparing <span class="mono">{ fromTagId, toTagId }</span>.' : state.mergeFrom && state.mergeFrom === state.mergeTo ? 'Source and destination must differ.' : 'Disabled until both tags are chosen (captured state).') + '</span></div>';
    var posts = state.posts.filter(function (p) { return p.status !== 'DELETED'; });
    var rev = '<div class="field"><label for="rev-post">Post</label><select class="select" id="rev-post" data-revision-post><option value="">Select a post</option>' + posts.map(function (p) { return '<option value="' + E(p.id) + '"' + (state.revisionPost === p.id ? ' selected' : '') + '>' + E(p.title) + '</option>'; }).join('') + '</select></div>' +
      (state.revisionPost ? '<ul class="revisions" style="margin-top:10px">' + D.revisions.map(function (r, i) { return '<li><span class="r-meta"><span>' + E(r.note) + ' ' + api.chip('demo', 'DEMO') + '</span><span class="mono">' + E(r.id) + ' · ' + E(r.at) + '</span></span><button class="btn btn-secondary btn-sm" type="button" data-restore="' + i + '"' + (i === 0 ? ' disabled title="current content"' : '') + '>Restore…</button></li>'; }).join('') + '</ul><p class="hint" style="margin-top:8px">No revision was captured; <span class="mono">GET /admin/posts/{id}/revisions</span> documents no fields. Rows are DEMO placeholders so the restore flow can be reviewed.</p>' : '<p class="hint" style="margin-top:8px">Select a post to list its revisions (<span class="mono">GET /admin/posts/{id}/revisions</span>).</p>');
    function card(title, sub, body, ep) { return '<section class="panel"><div class="panel-head"><div><h3 class="panel-title">' + title + '</h3><p class="panel-sub">' + sub + '</p></div></div><div class="panel-body">' + body + '</div>' + (ep ? '<div class="panel-foot"><span class="mono">DEMO ' + ep + '</span></div>' : '') + '</section>'; }
    return '<div class="section-head"><div><h2>Taxonomy &amp; governance</h2><p>Manage discoverability, consolidate duplicate tags, and recover post revisions.</p></div>' + api.prov({ label: 'Where from', endpoint: D.ep.categories, source: 'screenshot 014 (DOM 107 shows 0 / 0 / 0)', notes: ['Counts 4 · 6 · 1 equal the listed items — tie.', 'Category IDs come from the editor select (DOM); tag IDs were never captured.'], right: true }) + '</div>' +
      '<div class="' + (opts.layout || 'three-col') + '" style="margin-top:12px">' + card('Categories', '4 publishing groups', catList, D.ep.categories) + card('Tags', '6 discovery labels', tagList, D.ep.tags) + card('Authors', '1 publishing accounts', '<ul class="taxo-list"><li><span>Riya Kapoor</span><span class="hint">author · operator account</span></li></ul>', D.ep.authors) + '</div>' +
      '<div class="two-col" style="margin-top:16px">' + card('Merge duplicate tags', 'Consolidate two labels into one; all associated posts move.', merge, D.ep.merge) + card('Revision recovery', 'Roll a post back to a previously saved content state.', rev, D.ep.revisions) + '</div>';
  };

  /* ---------------------------------------------------------------- editor */
  B.editorFields = function (state, api) {
    var e = state.editor, f = e.fields, d = api.derived();
    var help = function (name) { return '<button class="help-btn" type="button" aria-label="Help for ' + name + '" title="Help for ' + name + ' — tooltip text was not captured">?</button>'; };
    return '<section class="panel" aria-labelledby="pc-h"><div class="panel-head"><div><h2 class="panel-title" id="pc-h">Post content</h2></div></div><div class="panel-body form-stack">' +
      '<div class="field"><label for="f-title">Title <span class="req" aria-hidden="true">*</span>' + help('Title') + '</label><input class="input" id="f-title" data-field="title" required maxlength="200" placeholder="e.g. How we cut checkout drop-off" value="' + E(f.title) + '" aria-describedby="f-title-h"><div class="help" id="f-title-h"><span>Required · ≤ 200 characters (CreatePostDto)</span></div></div>' +
      '<div class="field"><label for="f-excerpt">Excerpt' + help('Excerpt') + '</label><textarea class="textarea" id="f-excerpt" data-field="excerpt" maxlength="500" rows="2" placeholder="1–2 sentences for cards and SEO" style="min-height:64px">' + E(f.excerpt) + '</textarea><div class="help"><span>Required by the API (≤ 500) — optional in the captured form</span></div></div>' +
      '<div class="field"><label for="f-body">Content (Markdown)' + help('Content') + '</label><textarea class="textarea code body" id="f-body" data-field="body" maxlength="100000" placeholder="Write your post in Markdown…" spellcheck="false">' + E(f.body) + '</textarea><div class="help"><span>' + (e.bodyCaptured ? 'Body captured from DOM 173 (1 612 characters)' : e.isNew ? 'Nothing is saved by this lab' : 'Body text was not captured for this post') + '</span><span>contentFormat: MARKDOWN (default)</span></div></div></div></section>';
  };
  B.editorSettings = function (state, api) {
    var e = state.editor, f = e.fields, d = api.derived();
    return '<section class="panel" aria-labelledby="st-h"><div class="panel-head"><div><h2 class="panel-title" id="st-h">Settings</h2></div></div><div class="panel-body form-stack">' +
      '<div class="field"><label for="f-category">Category <span class="req" aria-hidden="true">*</span></label><select class="select" id="f-category" data-field="category" aria-describedby="f-category-h">' + (f.category ? '' : '<option value="" selected>— not captured for this post —</option>') + api.data.cats.map(function (c) { return '<option value="' + E(c.name) + '"' + (f.category === c.name ? ' selected' : '') + '>' + E(c.name) + '</option>'; }).join('') + '</select><div class="help" id="f-category-h"><span>' + (f.category ? (e.isNew ? 'Default: Business (captured)' : 'From the ' + (e.source.indexOf('DOM') === 0 ? 'preview chip' : 'list row')) : 'The React select did not serialise its value in the DOM snapshot and this post is not on captured page 1.') + '</span><span class="mono">categoryId</span></div></div>' +
      '<div class="field"><label for="f-slug">Slug <button class="help-btn" type="button" aria-label="Help for Slug" title="tooltip text not captured">?</button></label><input class="input mono" id="f-slug" data-field="slug" placeholder="auto-generated-from-title" value="' + E(f.slug) + '"><div class="help"><span id="slug-auto">' + (d.slugAuto ? 'auto: /' + E(d.slug) : '/' + E(d.slug)) + '</span><span>/content/posts/{id}/edit</span></div></div>' +
      '<div class="field"><label for="f-tags">Tags (comma-separated) <button class="help-btn" type="button" aria-label="Help for Tags" title="tooltip text not captured">?</button></label><input class="input" id="f-tags" data-field="tags" placeholder="design, nextjs, tips" value="' + E(f.tags) + '"><div class="help"><span>Known tags: ' + api.data.tags.join(', ') + '</span></div></div>' +
      (e.isNew ? '' : '<div class="field"><label for="f-status">Status <button class="help-btn" type="button" aria-label="Help for Status" title="tooltip text not captured">?</button></label><select class="select" id="f-status" data-editor-status aria-describedby="f-status-h">' + ['DRAFT', 'PUBLISHED', 'ARCHIVED'].map(function (s) { return '<option' + (e.status === s ? ' selected' : '') + '>' + s + '</option>'; }).join('') + (e.status === 'SCHEDULED' ? '<option selected>SCHEDULED (DEMO — not in the captured select)</option>' : '') + '</select><div class="help" id="f-status-h"><span>Captured options: DRAFT · PUBLISHED · ARCHIVED — no SCHEDULED. Transitions happen through the confirmed actions below, never by saving this select.</span></div></div>') +
      '</div></section>';
  };
  B.editorSEO = function (state, api, opts) {
    var e = state.editor, f = e.fields, d = api.derived();
    return '<section class="panel" aria-labelledby="seo-h"><div class="panel-head"><div><h2 class="panel-title" id="seo-h">SEO &amp; discovery</h2></div></div><div class="panel-body form-stack">' +
      '<div class="field"><label for="f-mt">Meta title</label><input class="input" id="f-mt" data-field="metaTitle" placeholder="SEO title for search results" value="' + E(f.metaTitle) + '"></div>' +
      '<div class="field"><label for="f-md">Meta description</label><textarea class="textarea" id="f-md" data-field="metaDescription" rows="3" placeholder="155 characters that sell the click in Google" style="min-height:76px" aria-describedby="meta-count">' + E(f.metaDescription) + '</textarea><div class="help"><span id="meta-count" aria-live="polite">' + d.metaLen + ' / 160 characters</span>' + (e.capturedWords && api.data.editorPosts[e.key] && api.data.editorPosts[e.key].metaCount ? '<span>' + api.chip('shot', 'shot: ' + api.data.editorPosts[e.key].metaCount + ' / 160') + '</span>' : '') + '</div></div>' +
      (opts && opts.snippet ? '<div class="field"><span class="label">Search snippet ' + api.chip('derived', 'derived from the fields above') + '</span><div class="snippet" id="snippet">' + api.snippetHTML(e, d) + '</div></div>' : '') + '</div></section>';
  };
  B.editorStats = function (state, api) {
    var e = state.editor, d = api.derived();
    return '<section class="panel" aria-labelledby="ws-h"><div class="panel-head"><div><h2 class="panel-title" id="ws-h">Writing stats</h2></div>' + api.prov({ label: 'Computed', fields: false, source: e.source, calc: 'Words = whitespace tokens of Content · Est. read = ⌈words ÷ 200⌉ min (holds on all 7 captured posts) · Excerpt length = characters', notes: e.capturedWords ? ['Captured for this post: ' + e.capturedWords + ' words · ' + e.capturedRead + (e.bodyCaptured ? ' — the live count below recomputes from the captured body.' : ' — body text not captured, so the live count starts at 0.')] : ['New post: counters start at 0 (DOM 192).'], right: true }) + '</div><div class="panel-body">' +
      '<div class="stats"><div class="stat"><div class="k">Words</div><div class="v num" id="stat-words">' + d.words + '</div></div><div class="stat"><div class="k">Est. read</div><div class="v num" id="stat-read">' + d.read + '</div></div><div class="stat"><div class="k">Excerpt length</div><div class="v num" id="stat-excerpt">' + d.excerptLen + ' chars</div></div></div>' +
      '<p class="tip">Lead with a clear promise in the title. Keep excerpts under 200 characters for cards and social previews.</p></div></section>';
  };
  B.editorPreview = function (state, api) {
    var e = state.editor, d = api.derived();
    return '<section class="preview" aria-labelledby="pv-h"><div class="preview-bar"><div class="truth"><h2 id="pv-h" style="font-size:13px">Instant preview</h2><span>— ' + (e.isNew ? 'Unsaved draft · not public' : e.dirty ? 'Unsaved changes · not public' : 'Unsaved draft · not public') + '</span><span class="badge badge-neutral">Responsive</span></div>' +
      '<div class="panel-tools"><span class="hint" id="preview-status" aria-live="polite">Preview renders from unsaved fields</span><div class="seg" role="group" aria-label="Preview width"><button type="button" data-device="desktop" aria-pressed="' + (e.device === 'desktop') + '" aria-label="Desktop preview width">' + api.icon('i-grid') + '</button><button type="button" data-device="mobile" aria-pressed="' + (e.device === 'mobile') + '" aria-label="Mobile preview width">' + api.icon('i-card') + '</button></div></div></div>' +
      '<div class="preview-stage"><article class="article' + (e.device === 'mobile' ? ' mobile' : '') + '" id="preview-article" aria-label="Rendered preview">' + api.articleHTML(e, d) + '</article></div></section>';
  };
  B.editorActions = function (state, api, opts) {
    var e = state.editor; opts = opts || {};
    if (e.isNew) return '';
    var p = api.post(e.id), st = p ? p.status : e.status;
    var b = [];
    if (st === 'DRAFT' || st === 'ARCHIVED') b.push('<button class="btn btn-primary btn-sm" type="button" data-editor-action="publish">' + api.icon('i-check') + 'Publish…</button>');
    if (st === 'DRAFT') b.push('<button class="btn btn-secondary btn-sm" type="button" data-editor-action="schedule">' + api.icon('i-cal') + 'Schedule… <span class="chip spec">spec</span></button>');
    if (st === 'SCHEDULED') b.push('<button class="btn btn-primary btn-sm" type="button" data-editor-action="publish">Publish now…</button>', '<button class="btn btn-secondary btn-sm" type="button" data-editor-action="unpublish">Cancel schedule…</button>');
    if (st === 'PUBLISHED') b.push('<button class="btn btn-secondary btn-sm" type="button" data-editor-action="unpublish">' + api.icon('i-eye') + 'Unpublish…</button>');
    if (st !== 'ARCHIVED') b.push('<button class="btn btn-ghost btn-sm" type="button" data-editor-action="archive">' + api.icon('i-archive') + 'Archive…</button>');
    return '<section class="panel" aria-labelledby="pa-h"><div class="panel-head"><div><h2 class="panel-title" id="pa-h">Publishing</h2><p class="panel-sub">Current: ' + api.badge(st) + (p && p.scheduledAt ? ' <span class="hint">for ' + E(api.fmtDT(p.scheduledAt)) + '</span>' : '') + '</p></div></div><div class="panel-body"><div class="decision">' + b.join('') + '</div><p class="hint" style="margin-top:8px">Each action opens a confirm with the documented transition and endpoint, writes a receipt and offers a 10-second local undo. Save never changes status.</p></div></section>';
  };
  B.editorHead = function (state, api, opts) {
    var e = state.editor; opts = opts || {};
    return '<div class="editor-head"><div><button class="back btn btn-ghost btn-sm" type="button" data-close-editor style="padding-left:0">← Back to blog</button>' +
      '<div class="eyebrow" style="margin-top:6px">Blog</div><' + (opts.h1 ? 'h1' : 'h2') + ' style="font-size:clamp(20px,2vw,26px);letter-spacing:-.02em">' + (e.isNew ? 'New post' : 'Edit post') + '</' + (opts.h1 ? 'h1' : 'h2') + '><p class="lede">' + (e.isNew ? 'Start with a strong title and excerpt — readers discover you through both.' : 'Refine the story, tune SEO, and publish when it reads well.') + '</p>' +
      '<span class="route">' + (e.isNew ? '/content/posts/new' : '/content/posts/' + (e.id && String(e.id).indexOf('shot-') !== 0 ? E(e.id) : '{id — not legible in screenshot}') + '/edit') + ' · loaded from ' + E(e.source) + (e.isNew ? '' : ' · ' + api.chip(e.source.indexOf('DOM') === 0 ? 'dom' : 'shot', e.source.indexOf('DOM') === 0 ? 'DOM' : 'shot')) + '</span></div>' +
      '<div class="page-actions">' + (e.isNew ? '' : '<span class="btn btn-secondary" role="text" title="https://nestlancer.com/blog/' + E(api.derived().slug) + ' — public route; not opened by the lab">' + api.icon('i-share') + 'Open live post ↗</span>') + '<button class="btn btn-primary" type="button" data-save id="save-primary"' + (e.fields.title.trim() ? '' : ' disabled') + '>' + (e.isNew ? 'Create post' : 'Save changes') + '</button></div></div>';
  };
  B.editorModeBar = function (state, api) {
    var e = state.editor;
    var m = function (k, l) { return '<button type="button" data-mode="' + k + '" aria-pressed="' + (e.mode === k) + '">' + l + '</button>'; };
    return '<div class="editor-mode"><span class="label"><b>Editor view</b> — Preview updates instantly from unsaved fields.</span><div class="seg" role="group" aria-label="Editor view">' + m('write', 'Write') + m('split', 'Split') + m('preview', 'Preview') + '</div></div>';
  };
  B.saveBar = function (state, api) {
    var e = state.editor;
    return '<div class="save-bar"><span class="dirty' + (e.dirty ? '' : ' clean') + '" id="dirty"><span class="dot" aria-hidden="true"></span><span>' + (e.dirty ? 'Unsaved changes · nothing is sent by this lab' : (e.isNew ? 'Not created yet' : 'No local changes')) + '</span></span><span style="display:flex;gap:8px"><button class="btn btn-secondary" type="button" data-close-editor>Cancel</button><button class="btn btn-primary" type="button" data-save' + (e.fields.title.trim() ? '' : ' disabled') + '>' + (e.isNew ? 'Create post' : 'Save changes') + '</button></span></div>';
  };
  /* complete editor as captured: write = form + side column; split = form | preview + 3-up row; preview = preview + 3-up row */
  B.editor = function (state, api, opts) {
    opts = opts || {};
    var e = state.editor, mode = e.mode;
    var side = B.editorSettings(state, api) + B.editorSEO(state, api, opts) + B.editorStats(state, api) + (opts.noActions ? '' : B.editorActions(state, api));
    var grid;
    if (mode === 'write') grid = '<div class="editor-grid">' + B.editorFields(state, api) + '<div class="editor-side">' + side + '</div></div>';
    else if (mode === 'split') grid = '<div class="editor-grid split">' + B.editorFields(state, api) + B.editorPreview(state, api) + '</div><div class="editor-side row3">' + side + '</div>';
    else grid = '<div class="editor-grid preview-only">' + B.editorPreview(state, api) + '</div><div class="editor-side row3">' + side + '</div>';
    return '<section class="editor" id="editor" aria-label="' + (e.isNew ? 'New post editor' : 'Post editor') + '" tabindex="-1">' + B.editorHead(state, api, opts) + B.editorModeBar(state, api) + grid + B.saveBar(state, api) + '</section>';
  };

  /* ---------------------------------------------------------------- lab chrome */
  B.stateSwitch = function (state, api) {
    var b = function (k, l) { return '<button type="button" data-state="' + k + '" aria-pressed="' + (state.lab === k) + '">' + l + '</button>'; };
    return '<details class="lab-states"><summary>' + api.icon('i-eye') + 'Preview states</summary><div class="states-pop"><div class="seg" role="group" aria-label="Demo state" data-states>' + b('live', 'Captured') + b('loading', 'Loading') + b('empty', 'Empty') + b('error', 'Error') + b('demo', 'DEMO queue') + '</div><p class="hint">Static lab: switches the rendered state only. “DEMO queue” re-labels two captured comments as Pending and one as Reported so the review flow can be exercised — never a product claim.</p>' +
      '<h3 style="font-size:12px;margin-top:4px">Receipts (' + state.receipts.length + ')</h3>' + (state.receipts.length ? '<ul class="receipt-log">' + state.receipts.slice(0, 12).map(function (r) { return '<li' + (r.undone ? ' style="opacity:.6"' : '') + '><span><b>' + E(r.t) + '</b> · ' + E(r.label) + (r.undone ? ' · undone' : '') + '</span><span class="mono">' + E(r.detail) + '</span></li>'; }).join('') + '</ul>' : '<p class="hint">No local action yet. Every confirmed action writes a line here.</p>') + '</div></details>';
  };
  B.receiptsPanel = function (state, api, opts) {
    opts = opts || {};
    return '<section class="panel" aria-labelledby="rc-h"><div class="panel-head"><div><h2 class="panel-title" id="rc-h">' + (opts.title || 'Receipts') + ' <span class="hint">(' + state.receipts.length + ')</span></h2><p class="panel-sub">' + (opts.sub || 'Every confirmed action — what would be called, what changed locally, whether it was undone.') + '</p></div></div><div class="panel-body">' +
      (state.receipts.length ? '<ul class="receipt-log" style="max-height:none">' + state.receipts.map(function (r) { return '<li' + (r.undone ? ' style="opacity:.6"' : '') + '><span><b class="mono">' + E(r.t) + '</b> · ' + E(r.label) + (r.undone ? ' · <b>undone</b>' : '') + '</span><span class="mono">' + E(r.detail) + '</span></li>'; }).join('') + '</ul>' : '<p class="hint">No local action yet. Receipts appear after the first confirmed action.</p>') + '</div></section>';
  };
  B.panelFor = function (state, api, opts) {
    switch (state.tab) {
      case 'comments': return B.commentsPanel(state, api, opts);
      case 'pending': return B.pendingPanel(state, api);
      case 'reported': return B.reportedPanel(state, api);
      case 'analytics': return B.analyticsPanel(state, api, opts);
      case 'taxonomy': return B.taxonomyPanel(state, api, opts);
      default: return B.postsPanel(state, api, opts);
    }
  };

  /* focus-preserving innerHTML swap: remembers the active control by id or by its data-* identity */
  B.focusKey = function () {
    var a = document.activeElement; if (!a || a === document.body) return null;
    if (a.id) return '#' + a.id;
    var attrs = ['data-tab', 'data-view', 'data-mode', 'data-device', 'data-state', 'data-density', 'data-step', 'data-select-comment', 'data-open-editor', 'data-peek', 'data-stage', 'data-lane', 'data-q', 'data-cq', 'data-status', 'data-cstatus', 'data-merge-from', 'data-merge-to', 'data-revision-post', 'data-sel', 'data-sel-all', 'data-editor-action', 'data-act', 'data-new-post', 'data-close-editor', 'data-save', 'data-goto-tab', 'data-add', 'data-merge', 'data-page', 'data-field'];
    for (var i = 0; i < attrs.length; i++) if (a.hasAttribute(attrs[i])) { var v = a.getAttribute(attrs[i]); return '[' + attrs[i] + (v ? '="' + v.replace(/"/g, '\\"') + '"' : '') + ']' + (a.hasAttribute('data-id') ? '[data-id="' + a.getAttribute('data-id') + '"]' : ''); }
    return null;
  };
  B.swap = function (root, html) {
    var key = B.focusKey(), sel = key, scrollY = window.scrollY;
    root.innerHTML = html;
    if (sel) { try { var el = root.querySelector(sel) || document.querySelector(sel); if (el && el.focus) el.focus({ preventScroll: true }); } catch (e) { } }
    window.scrollTo(0, scrollY);
  };
  /* standalone revisions list (V2 right column + taxonomy card) */
  B.revisionsList = function (state, api, postId) {
    var p = api.post(postId);
    if (!p) return '<p class="hint">Select a post to list its revisions (<span class="mono">GET /admin/posts/{id}/revisions</span>).</p>';
    return '<ul class="revisions">' + api.data.revisions.map(function (r, i) { return '<li><span class="r-meta"><span>' + E(r.note) + ' ' + api.chip('demo', 'DEMO') + '</span><span class="mono">' + E(r.id) + ' · ' + E(r.at) + '</span></span><button class="btn btn-secondary btn-sm" type="button" data-restore="' + i + '"' + (i === 0 ? ' disabled title="current content"' : '') + '>Restore…</button></li>'; }).join('') + '</ul><p class="hint" style="margin-top:8px">No revision was captured; <span class="mono">GET /admin/posts/{id}/revisions</span> documents no fields. Rows are DEMO placeholders so the restore flow can be reviewed; restoring replaces the current content — save afterwards.</p>';
  };
  B.shortcutsRows = function (extra) {
    var rows = [['?', 'Open this help'], ['Esc', 'Close menu, dialog or drawer'], ['Tab / Shift+Tab', 'Move between controls'], ['← → Home End', 'Move between tabs (roving focus)'], ['↑ ↓ Home End', 'Move inside an open row menu'], ['Enter / Space', 'Activate the focused control']].concat(extra || []);
    return '<table class="data-table"><caption class="sr-only">Keyboard shortcuts</caption><thead><tr><th scope="col">Keys</th><th scope="col">Action</th></tr></thead><tbody>' + rows.map(function (r) { return '<tr><td><span class="kbd">' + E(r[0]) + '</span></td><td>' + E(r[1]) + '</td></tr>'; }).join('') + '</tbody></table>';
  };

  window.NL_BLOCKS = B;
})();
