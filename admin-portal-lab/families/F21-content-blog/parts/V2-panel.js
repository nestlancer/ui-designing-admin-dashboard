/* F21 · V2 · Editor spine — "one post, start to finish".
   A: three columns (posts rail · writing surface · settings column), desk tabs stacked under the rail.
   B: the text field is the biggest object on screen; the desk is secondary.  C: ship one correct post.
   D: dense rail, comfortable surface.  E: segmented modes, sticky save bar, publish/schedule confirm, revision restore. */
(function () {
  'use strict';
  var api = window.NL, B = window.NL_BLOCKS, E = api.esc;
  var root = document.getElementById('root');
  var railQ = '';

  function railList(state) {
    var q = railQ.trim().toLowerCase(), cur = state.editor ? state.editor.id : null;
    var rows = state.posts.filter(function (p) { return p.status !== 'DELETED' && (!q || p.title.toLowerCase().indexOf(q) > -1); });
    if (!rows.length) return '<li class="rail-empty">No captured title contains “' + E(railQ) + '”.</li>';
    return rows.map(function (p) {
      var key = null; Object.keys(api.data.editorPosts).forEach(function (k) { if (api.data.editorPosts[k].id === p.id) key = k; });
      return '<li><button type="button" class="rail-item" data-open-editor="' + E(key || p.id) + '" data-mode="split"' + (cur === p.id ? ' aria-current="true"' : '') + '><span class="ri-title">' + E(p.title) + '</span><span class="ri-meta"><span class="dot ' + p.status.toLowerCase() + '" aria-hidden="true"></span>' + E(p.status.charAt(0) + p.status.slice(1).toLowerCase()) + ' · <span class="num">' + p.views + '</span> views' + (key ? ' · <span class="chip dom" title="full fields captured from the live edit page">' + (api.data.editorPosts[key].source.indexOf('DOM') === 0 ? 'DOM' : 'shot') + '</span>' : '') + '</span></button></li>';
    }).join('');
  }
  function rail(state) {
    var tabs = [['posts', 'Posts'], ['comments', 'Comments'], ['pending', 'Pending'], ['reported', 'Reported'], ['analytics', 'Analytics'], ['taxonomy', 'Taxonomy']], c = api.counts();
    var cnt = { comments: c.comments, pending: c.pending, reported: c.reported };
    return '<aside class="rail" aria-label="Posts rail">' +
      '<div class="rail-head"><h2>Posts <span class="hint">· page 1 · 20 of 110</span></h2><button class="btn btn-primary btn-sm" type="button" data-new-post>' + api.icon('i-doc') + 'New</button></div>' +
      '<label class="search rail-search"><span class="sr-only">Filter the 20 captured titles</span>' + api.icon('i-search') + '<input class="input" type="search" placeholder="Filter titles…" value="' + E(railQ) + '" data-rail-q autocomplete="off"></label>' +
      '<ul class="rail-list" id="rail-list">' + railList(state) + '</ul>' +
      '<div class="rail-forms"><div class="eyebrow">DOM edit forms (5)</div>' + Object.keys(api.data.editorPosts).filter(function (k) { return api.data.editorPosts[k].captured; }).map(function (k) { var ep = api.data.editorPosts[k]; return '<button type="button" class="rail-item" data-open-editor="' + E(k) + '" data-mode="split"' + (state.editor && state.editor.id === ep.id ? ' aria-current="true"' : '') + '><span class="ri-title">' + E(ep.title) + '</span><span class="ri-meta">' + E(ep.source) + ' · ' + ep.words + ' w · <span class="chip dom">DOM</span></span></button>'; }).join('') + '</div>' +
      '<div class="rail-desk"><div class="eyebrow">Desk</div><div class="tabs vertical" role="tablist" aria-label="Blog sections" aria-orientation="vertical">' + tabs.map(function (t) {
        var sel = !state.editor && state.tab === t[0];
        return '<button role="tab" type="button" id="tab-' + t[0] + '" data-tab="' + t[0] + '" aria-selected="' + sel + '" aria-controls="panel" tabindex="' + (sel ? 0 : -1) + '">' + t[1] + (cnt[t[0]] !== undefined ? '<span class="count">' + cnt[t[0]] + '</span>' : '') + '</button>';
      }).join('') + '</div></div>' + B.stateSwitch(state, api) + '</aside>';
  }
  function surface(state) {
    var e = state.editor;
    if (!e) {
      return '<section class="surface" id="panel" role="tabpanel" aria-labelledby="tab-' + state.tab + '" tabindex="-1">' + B.pageHead(state, api, { lede: 'The writing surface is empty until a post is chosen from the rail. The desk sections below are the captured tabs.' }) + B.panelFor(state, api, { snippet: true, forceList: true, noView: true }) + '</section>';
    }
    var grid;
    if (e.mode === 'write') grid = B.editorFields(state, api);
    else if (e.mode === 'split') grid = '<div class="editor-grid split">' + B.editorFields(state, api) + B.editorPreview(state, api) + '</div>';
    else grid = B.editorPreview(state, api);
    return '<section class="surface editor" id="editor" aria-label="' + (e.isNew ? 'New post editor' : 'Post editor') + '" tabindex="-1">' + B.editorHead(state, api, { h1: true }) + B.editorModeBar(state, api) + grid + B.saveBar(state, api) +
      (e.key === 'deploy' ? '<p class="hint">Loaded from screenshots 067/068 (Split and Preview views of this post). The screenshot shows 383 words · 2 min · excerpt 0 chars · meta 80/160; the body text itself is not legible in a screenshot, so the Content field starts empty and the preview says so — nothing is invented.</p>' : '') + '</section>';
  }
  function column(state) {
    var e = state.editor;
    if (!e) return '<aside class="column" aria-label="Desk summary">' + B.hero(state, api) + B.strip(state, api) + B.receiptsPanel(state, api) + '</aside>';
    return '<aside class="column" aria-label="Post settings">' + B.editorActions(state, api) + B.editorSettings(state, api) + B.editorSEO(state, api, { snippet: true }) + B.editorStats(state, api) +
      '<section class="panel" aria-labelledby="rv-h"><div class="panel-head"><div><h2 class="panel-title" id="rv-h">Revisions</h2><p class="panel-sub">Roll back to a previously saved content state.</p></div></div><div class="panel-body">' + (e.id && api.post(e.id) ? B.revisionsList(state, api, e.id) : '<p class="hint">Revisions exist only for saved posts (<span class="mono">GET /admin/posts/{id}/revisions</span>).</p>') + '</div></section>' +
      B.receiptsPanel(state, api, { title: 'Receipts', sub: 'Every confirmed action on this desk.' }) + '</aside>';
  }
  function render(state) {
    B.swap(root, '<div class="spine' + (state.editor ? ' has-editor' : '') + '">' + rail(state) + surface(state) + column(state) + '</div>');
  }

  /* rail filter is local to V2 — it never touches the desk filters */
  document.addEventListener('input', function (ev) {
    if (ev.target.matches && ev.target.matches('[data-rail-q]')) { railQ = ev.target.value; var l = document.getElementById('rail-list'); if (l) l.innerHTML = railList(api.state); }
    if (ev.target.matches && ev.target.matches('[data-field="body"]')) { var w = document.getElementById('stat-words'); if (w) { w.classList.remove('pulse'); void w.offsetWidth; w.classList.add('pulse'); } }
  });
  /* vertical tablist: ↑/↓ move like ←/→ */
  document.addEventListener('keydown', function (ev) {
    var tl = ev.target.closest && ev.target.closest('.tabs.vertical');
    if (!tl || (ev.key !== 'ArrowDown' && ev.key !== 'ArrowUp')) return;
    var items = Array.prototype.slice.call(tl.querySelectorAll('[role="tab"]')), i = items.indexOf(document.activeElement);
    if (i < 0) return; ev.preventDefault();
    var j = (i + (ev.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; items[j].focus(); items[j].click();
  });

  api.openEditor('deploy', 'split', true); /* the spine starts on the captured Split-view post, quietly (no focus steal on load) */
  api.mount(render);
})();
