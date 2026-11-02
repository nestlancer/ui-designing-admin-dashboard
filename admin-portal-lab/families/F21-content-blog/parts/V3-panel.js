/* F21 · V3 · Review desk — "clear the discussion, then publish".
   A: two-pane master-detail (lanes 38 % · context pane).  B: queue counts first, post list demoted.
   C: moderation before publication.  D: compact lanes, roomy context.
   E: roving tabindex + keyboard triage (j k · a r s · z · ?), next-item advance, confirm + undo. */
(function () {
  'use strict';
  var api = window.NL, B = window.NL_BLOCKS, E = api.esc;
  var root = document.getElementById('root');

  function lanes(state) {
    var pend = state.pendingDemo.filter(function (x) { return x.status === 'PENDING'; });
    var rep = state.reportedDemo.filter(function (x) { return x.status === 'REPORTED'; });
    var all = state.comments.concat(state.pendingDemo.filter(function (x) { return x.status !== 'PENDING'; }), state.reportedDemo.filter(function (x) { return x.status !== 'REPORTED'; })).filter(function (x) { return x.status !== 'DELETED'; });
    return [
      { key: 'pending', title: 'Pending', items: pend, empty: 'Moderation queue clear · captured 0', ep: api.data.ep.pending },
      { key: 'reported', title: 'Reported', items: rep, empty: 'No reported comments · captured 0', ep: api.data.ep.reported },
      { key: 'all', title: 'All comments', items: all, empty: 'No comments', ep: api.data.ep.comments }
    ];
  }
  function flat(state) { var out = []; lanes(state).forEach(function (l) { l.items.forEach(function (c) { out.push(c); }); }); return out; }
  function selected(state) {
    var f = flat(state); if (!f.length) return null;
    for (var i = 0; i < f.length; i++) if (f[i].id === state.selectedComment) return f[i];
    state.selectedComment = f[0].id; return f[0];
  }
  function laneHTML(state, sel) {
    return '<div class="lanes">' + lanes(state).map(function (l) {
      var inLane = sel && l.items.some(function (c) { return c.id === sel.id; });
      return '<section class="lane" aria-labelledby="lane-' + l.key + '"><div class="lane-head"><h2 id="lane-' + l.key + '"><span class="index-tab">' + l.title + '</span><span class="count">' + l.items.length + '</span></h2><span class="mono hint">' + E(l.ep.replace('GET /api/v1/admin/', '')) + '</span></div>' +
        (l.items.length ? '<ul class="lane-list" role="listbox" aria-labelledby="lane-' + l.key + '"' + (inLane ? ' aria-activedescendant="li-' + E(sel.id) + '"' : '') + '>' + l.items.map(function (c) {
          var isSel = sel && sel.id === c.id;
          return '<li class="lane-item" role="option" id="li-' + E(c.id) + '" tabindex="' + (isSel ? 0 : -1) + '" aria-selected="' + !!isSel + '" data-select-comment="' + E(c.id) + '"><span class="li-top"><b>' + E(c.author) + '</b><span>' + E(c.at.replace('Oct 6, 2026 ', '')) + ' · ' + api.badge(c.status) + '</span></span><span class="li-text">' + E(c.text) + '</span><span class="li-top"><span>on ' + E(c.post) + '</span>' + (c.demo ? api.chip('demo', 'DEMO') : '') + '</span></li>';
        }).join('') + '</ul>' : '<p class="lane-empty">' + E(l.empty) + '</p>') + '</section>';
    }).join('') + '</div>';
  }
  function contextHTML(state, sel) {
    if (state.lab === 'loading') return api.skeleton(5);
    if (state.lab === 'error') return api.error('Comments', api.data.ep.comments);
    if (!sel) return api.empty('Nothing to review', 'All three queues are empty in this state.', '<button class="btn btn-secondary btn-sm" type="button" data-state="live">Back to captured</button>', 'i-check');
    var dec = [];
    if (sel.status !== 'APPROVED') dec.push('<button class="btn btn-primary" type="button" data-act="approve" data-kind="comment" data-id="' + E(sel.id) + '">' + api.icon('i-check') + 'Approve <span class="kbd">a</span></button>');
    if (sel.status !== 'REJECTED') dec.push('<button class="btn btn-secondary" type="button" data-act="reject" data-kind="comment" data-id="' + E(sel.id) + '">' + api.icon('i-x') + 'Reject <span class="kbd">r</span></button>');
    if (sel.status !== 'SPAM') dec.push('<button class="btn btn-secondary" type="button" data-act="spam" data-kind="comment" data-id="' + E(sel.id) + '">' + api.icon('i-alert') + 'Spam <span class="kbd">s</span></button>');
    return '<div class="context"><div class="ctx-post"><div class="k">On post</div><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;align-items:center"><b>' + E(sel.post) + '</b><button class="btn btn-ghost btn-sm" type="button" data-open-editor="' + E(sel.postKey) + '">' + api.icon('i-doc') + 'Open post</button></div></div>' +
      '<div class="ctx-comment">“' + E(sel.text) + '”</div>' +
      '<div class="comment-author"><b>' + E(sel.author) + '</b> · <span class="mono">' + E(sel.at) + '</span> · ' + api.badge(sel.status) + (sel.statusSource === 'DEMO' || sel.demo ? ' ' + api.chip('demo', sel.demo ? 'DEMO · captured text, synthetic status' : 'DEMO · local change') : ' ' + api.chip('shot', 'shot 011')) + '</div>' +
      (sel.status === 'REPORTED' ? '<p class="hint">Reporter and reason: not documented by the endpoint and never captured — none shown.</p>' : '') +
      '<div class="ctx-actions">' + dec.join('') + '<span class="menu-wrap"><button class="icon-button" type="button" data-menu="comment" data-id="' + E(sel.id) + '" aria-haspopup="menu" aria-expanded="false" aria-label="Actions for comment by ' + E(sel.author) + '">' + api.icon('i-dots') + '</button></span></div>' +
      '<div class="keys"><span><span class="kbd">j</span>/<span class="kbd">k</span> next / previous</span><span><span class="kbd">a</span> approve · <span class="kbd">r</span> reject · <span class="kbd">s</span> spam</span><span><span class="kbd">z</span> undo last</span><span><span class="kbd">?</span> help</span><span class="hint">Every decision confirms first, then the desk advances to the next item.</span></div>' +
      api.prov({ label: 'Where from', endpoint: api.data.ep.approve, source: 'comment: screenshot 011 / DOM 103 · actions: Swagger', notes: ['Approve, Reject and Spam accept no request body — no reason field is drawn.', 'Delete is permanent in production; it sits in the overflow menu only.', 'WordPress-style single-key triage (research ref 13) is declared craft, not a captured behaviour.'] }) + '</div>';
  }
  function reviewDesk(state) {
    var sel = selected(state), c = api.counts();
    return B.pageHead(state, api, { lede: 'Clear the discussion first: pending and reported comments sit beside the full thread, each decision confirms, writes a receipt and advances to the next item.' }) +
      '<section class="review" aria-label="Review desk"><div class="review-verdict"><span class="hero-label">Review verdict ' + api.chip('shot', 'shot') + '</span><p class="hero-verdict"><b>' + c.pending + ' pending · ' + c.reported + ' reported</b> · ' + c.comments + ' approved comments on 3 posts · ' + api.data.kpi.published + ' published posts · 0 drafts' + (state.lab === 'demo' ? ' · <span class="chip demo">DEMO queue loaded</span>' : '') + '</p>' + B.stateSwitch(state, api) + '</div>' +
      '<div class="review-grid"><div class="review-lanes">' + (state.lab === 'loading' ? api.skeleton(6) : laneHTML(state, sel)) + '</div><section class="panel review-context" aria-labelledby="ctx-h"><div class="panel-head"><div><h2 class="panel-title" id="ctx-h">Context</h2><p class="panel-sub">The comment, its post and the decision — nothing acts without a confirm.</p></div></div><div class="panel-body" id="context-pane">' + contextHTML(state, sel) + '</div></section></div></section>' +
      '<div class="section-head" style="margin-top:4px"><div><h2>Desk</h2><p>The captured sections, demoted below the review surface.</p></div></div>' + B.tabs(state, api) +
      '<section id="panel" role="tabpanel" aria-labelledby="tab-' + state.tab + '" tabindex="-1">' + B.panelFor(state, api, { dense: true, snippet: true, forceList: true, noView: true }) + '</section>';
  }
  function editing(state) {
    return '<div class="desk-fold"><span>' + api.icon('i-chat') + '<b>Review desk</b> folded while editing</span><button class="btn btn-ghost btn-sm" type="button" data-close-editor>← Back to review desk</button></div>' + B.editor(state, api, { snippet: true, h1: true }) + B.stateSwitch(state, api);
  }
  function render(state) { B.swap(root, state.editor ? editing(state) : reviewDesk(state)); }

  function focusSelected() { var el = document.getElementById('li-' + api.state.selectedComment); if (el) el.focus({ preventScroll: false }); }
  function move(dir) {
    var f = flat(api.state); if (!f.length) return;
    var i = -1; for (var k = 0; k < f.length; k++) if (f[k].id === api.state.selectedComment) i = k;
    var n = Math.min(f.length - 1, Math.max(0, i + dir));
    api.state.selectedComment = f[n].id; render(api.state); focusSelected(); api.announce('Selected comment ' + (n + 1) + ' of ' + f.length + ' by ' + f[n].author);
  }
  api.onKey = function (e) {
    if (api.state.editor) return;
    if (e.key === 'j') { e.preventDefault(); move(1); }
    else if (e.key === 'k') { e.preventDefault(); move(-1); }
    else if (e.key === 'a' || e.key === 'r' || e.key === 's') { var sel = selected(api.state); if (!sel) return; e.preventDefault(); api.act({ a: 'approve', r: 'reject', s: 'spam' }[e.key], 'comment', sel.id); }
    else if (e.key === 'z') { var r = null; for (var i = 0; i < api.state.receipts.length; i++) if (api.state.receipts[i].undoable && !api.state.receipts[i].undone) { r = api.state.receipts[i]; break; } if (r) { e.preventDefault(); api.undo(r.id); var t = document.querySelector('.toast[data-receipt="' + r.id + '"]'); if (t) { clearInterval(t._iv); t.remove(); } } else api.announce('Nothing to undo.'); }
    else if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('lane-item')) { e.target.click(); }
  };
  /* listbox arrows mirror j/k; Space selects */
  document.addEventListener('keydown', function (e) {
    if (!e.target.classList || !e.target.classList.contains('lane-item')) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); } else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); } else if (e.key === ' ') { e.preventDefault(); e.target.click(); }
  });
  /* after a decision, advance to the next item (A5) */
  var lastCount = null, lastLab = null;
  api.mount(function (state) {
    var n = state.receipts.length;
    if (lastLab !== state.lab && state.lab === 'demo') { var f0 = flat(state); if (f0.length) state.selectedComment = f0[0].id; }
    lastLab = state.lab;
    if (lastCount !== null && n > lastCount && state.receipts[0].action && ['approve', 'reject', 'spam', 'cdelete'].indexOf(state.receipts[0].action) > -1) {
      var f = flat(state), still = f.some(function (c) { return c.id === state.selectedComment && (c.status === 'PENDING' || c.status === 'REPORTED'); });
      if (!still) { var lanesNow = lanes(state); var next = (lanesNow[0].items[0] || lanesNow[1].items[0]); if (next) state.selectedComment = next.id; }
    }
    lastCount = n;
    render(state);
  });
})();
