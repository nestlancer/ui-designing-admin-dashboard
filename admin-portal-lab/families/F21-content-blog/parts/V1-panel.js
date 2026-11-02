/* F21 · V1 · Ground-truth desk — "the capture, corrected".
   A: captured order (head → hero/strip → tabs → table), single column.  B: hero verdict > strip > table.
   C: what the product shows today, made safe and honest.  D: comfortable.  E: overflow menus, confirm, undo, provenance. */
(function () {
  'use strict';
  var api = window.NL, B = window.NL_BLOCKS;
  var root = document.getElementById('root');

  function desk(state) {
    return B.pageHead(state, api) +
      B.hero(state, api, { art: '<div class="proof-grid" aria-hidden="true"></div>' }) +
      B.strip(state, api) +
      '<div class="desk-bar">' + B.tabs(state, api) + B.stateSwitch(state, api) + '</div>' +
      '<section id="panel" role="tabpanel" aria-labelledby="tab-' + state.tab + '" tabindex="-1">' + B.panelFor(state, api, { snippet: true }) + '</section>';
  }
  function editing(state) {
    var e = state.editor, c = api.counts();
    return '<div class="desk-fold" role="note"><span>' + api.icon('i-doc') + '<b>Blog desk</b> folded while editing · ' + api.data.kpi.published + ' published · ' + c.comments + ' comments · ' + (state.receipts.length ? state.receipts.length + ' receipt' + (state.receipts.length > 1 ? 's' : '') : 'no local action yet') + '</span><button class="btn btn-ghost btn-sm" type="button" data-close-editor>← Back to blog</button></div>' +
      B.editor(state, api, { snippet: true, h1: true }) +
      '<div class="desk-bar" style="margin-top:4px">' + B.stateSwitch(state, api) + '</div>' +
      (e.key === 'agentic' ? '<p class="hint">This post is the DOM-canonical capture (snapshots 172–175): every field above, including the 1 612-character Markdown body, was read from the live edit page. Writing stats are recomputed from that body and agree with the captured 230 words · 2 min.</p>' : '');
  }
  function render(state) {
    B.swap(root, state.editor ? editing(state) : desk(state));
  }
  api.mount(render);
})();
