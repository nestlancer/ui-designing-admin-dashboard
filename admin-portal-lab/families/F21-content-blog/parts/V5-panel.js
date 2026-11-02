/* F21 · V5 · Publish choreography — "a guarded publish, step by step".
   A: centred stage (≤ 960 px reading column, §9.2a) over a folded desk.  B: the step panel dominates.
   C: every publish is a ceremony with a paper trail.  D: sparse.
   E: motion-led — panel transitions (transform/opacity), a progress line, a countdown ring (the one dashoffset element). */
(function () {
  'use strict';
  var api = window.NL, B = window.NL_BLOCKS, E = api.esc;
  var root = document.getElementById('root');
  var DEMO_ID = 'DEMO-draft-agentic', stageId = DEMO_ID, when = '', lastStep = 0, foldClosed = true;

  /* the rehearsal subject: a DRAFT copy of the DOM-canonical post, labelled DEMO everywhere */
  if (!api.post(DEMO_ID)) {
    var src = api.data.editorPosts.agentic;
    api.state.posts.push({ id: DEMO_ID, title: src.title + ' (DEMO draft copy)', category: src.category, min: 2, views: 0, featured: false, slug: src.slug + '-demo-copy', slugSource: 'derived', status: 'DRAFT', statusSource: 'DEMO', published: '—', source: 'DEMO copy of DOM 172–175' });
    api.data.editorPosts[DEMO_ID] = Object.assign({}, src, { id: DEMO_ID, title: src.title + ' (DEMO draft copy)', slug: src.slug + '-demo-copy', status: 'DRAFT', source: 'DEMO copy of DOM 172–175' });
  }
  var STEPS = [['Draft', 'what exists'], ['Review', 'what is checked'], ['Schedule', 'when it goes live'], ['Publish', 'the receipt']];

  function subject() { return api.post(stageId) || api.post(DEMO_ID); }
  function fields(p) { var k = null; Object.keys(api.data.editorPosts).forEach(function (x) { if (api.data.editorPosts[x].id === p.id) k = x; }); return k ? api.data.editorPosts[k] : null; }
  function checklist(p) {
    var f = fields(p), items = [];
    items.push(['Title', !!p.title, p.title.length + '/200']);
    items.push(['Slug', !!p.slug, '/' + p.slug + (p.slugSource === 'derived' ? ' (derived)' : '')]);
    items.push(['Category', !!p.category, p.category]);
    if (f) { items.push(['Excerpt', !!f.excerpt, f.excerpt ? f.excerpt.length + '/500 chars' : 'empty']); items.push(['Meta description', f.metaDescription.length > 0 && f.metaDescription.length <= 160, f.metaDescription.length + '/160']); items.push(['Tags', !!f.tags, f.tags || 'none']); items.push(['Body', !!(f.body && f.body.trim()), f.body && f.body.trim() ? api.words(f.body) + ' words · ' + api.tie.estRead(api.words(f.body)) + ' min' : 'not captured']); }
    else items.push(['Excerpt · meta · body', null, 'not captured for this row (screenshot 009 shows the list only)']);
    return items;
  }
  function stepper(step) {
    return '<div class="stepper" aria-label="Publish steps"><div class="line" aria-hidden="true"></div><div class="line-fill" aria-hidden="true" style="transform:scaleX(' + (step / 3) + ')"></div>' + STEPS.map(function (s, i) {
      return '<button type="button" class="step' + (i < step ? ' done' : '') + '" data-step="' + i + '"' + (i === step ? ' aria-current="step"' : '') + ' aria-label="Step ' + (i + 1) + ' of 4: ' + s[0] + (i < step ? ' (done)' : i === step ? ' (current)' : '') + '"><span class="n">' + (i < step ? '✓' : i + 1) + '</span><span class="t">' + s[0] + '</span><span class="hint">' + s[1] + '</span></button>';
    }).join('') + '</div>';
  }
  function stepPanel(state, p, step) {
    var f = fields(p), published = p.status === 'PUBLISHED';
    if (step === 0) {
      return '<h2>Draft — what exists</h2><p class="lede">' + (p.id === DEMO_ID ? 'A DRAFT copy of the DOM-canonical post (snapshots 172–175), so the ceremony can be rehearsed on real captured fields without touching a captured status.' : 'The staged post as captured in the list; only its list-row fields are known.') + '</p>' +
        '<dl class="recap"><dt>Title</dt><dd>' + E(p.title) + '</dd><dt>Status</dt><dd>' + api.badge(p.status) + (p.statusSource === 'DEMO' ? ' ' + api.chip('demo', 'DEMO') : ' ' + api.chip('shot', 'shot')) + '</dd><dt>Slug</dt><dd class="mono">/' + E(p.slug) + '</dd><dt>Category</dt><dd>' + E(p.category) + '</dd>' + (f ? '<dt>Excerpt</dt><dd>' + E(f.excerpt || '—') + '</dd><dt>Tags</dt><dd>' + E(f.tags || '—') + '</dd>' : '') + '<dt>Source</dt><dd>' + E(p.source || 'shot 009') + '</dd></dl>' +
        '<div class="stage-actions"><button class="btn btn-secondary" type="button" data-open-editor="' + E(p.id === DEMO_ID ? DEMO_ID : (fields(p) ? Object.keys(api.data.editorPosts).filter(function (k) { return api.data.editorPosts[k].id === p.id; })[0] : p.id)) + '">' + api.icon('i-doc') + 'Open in editor</button><button class="btn btn-primary" type="button" data-step="1">Next: Review →</button></div>';
    }
    if (step === 1) {
      var items = checklist(p), fails = items.filter(function (i) { return i[1] === false; }).length;
      return '<h2>Review — what is checked</h2><p class="lede">The pre-publish recap every CMS benchmark asks for (research refs 5, 6). Nothing here blocks the button; it tells you what the request will carry.</p>' +
        '<ul class="checklist">' + items.map(function (i) { return '<li class="' + (i[1] === null ? 'na' : i[1] ? 'ok' : 'warn') + '">' + api.icon(i[1] === null ? 'i-alert' : i[1] ? 'i-check' : 'i-alert') + '<span><b>' + E(i[0]) + '</b> <span class="hint">' + E(i[2]) + '</span></span></li>'; }).join('') + '</ul>' +
        '<p class="hint">' + (fails ? fails + ' item' + (fails > 1 ? 's' : '') + ' would publish empty.' : 'All captured fields present.') + ' Comments on this post: ' + state.comments.filter(function (c) { return c.postKey === p.id; }).length + '.</p>' +
        '<div class="stage-actions"><button class="btn btn-ghost" type="button" data-step="0">← Back</button><button class="btn btn-primary" type="button" data-step="2">Next: Schedule →</button></div>';
    }
    if (step === 2) {
      return '<h2>Schedule — when it goes live</h2><p class="lede">Two documented paths: <span class="mono">POST /admin/posts/{id}/publish</span> now, or <span class="mono">POST /admin/posts/{id}/schedule</span> with <span class="mono">{ scheduledAt }</span> — the format and time zone of that string are not documented, so the confirm prints the ISO value it would send.</p>' +
        '<div class="schedule"><label class="field"><span class="label">Publish at (optional)</span><input class="input" type="datetime-local" data-when value="' + E(when) + '" min="' + api.nowLocalInput(0) + '" aria-describedby="when-note"></label><p class="hint" id="when-note">Time zone shown: ' + E(api.tz()) + '. Leave empty to publish immediately. A past time is rejected by the confirm.</p></div>' +
        '<div class="stage-actions"><button class="btn btn-ghost" type="button" data-step="1">← Back</button><button class="btn btn-primary" type="button" data-step="3">Next: ' + (when ? 'Schedule' : 'Publish') + ' →</button></div>';
    }
    var last = state.receipts.filter(function (r) { return r.targetId === p.id; })[0];
    var action = published ? 'unpublish' : when ? 'schedule' : 'publish';
    return '<h2>Publish — the receipt</h2><p class="lede">' + (published ? 'This post is already PUBLISHED. The ceremony for a live post is <b>Unpublish</b> (documented: back to DRAFT), then these steps again.' : 'One confirmed click. The confirm shows the status transition, the endpoint and the Swagger description; the receipt below keeps the 10-second local undo visible.') + '</p>' +
        '<dl class="recap"><dt>Action</dt><dd>' + (published ? 'Unpublish → DRAFT' : when ? 'Schedule for ' + E(api.fmtDT(new Date(when).toISOString())) + ' → SCHEDULED <span class="chip spec">spec · not in the captured select</span>' : 'Publish now → PUBLISHED') + '</dd><dt>Endpoint</dt><dd class="mono">DEMO ' + E(api.data.ep[action].replace('{id}', p.id.indexOf('shot-') === 0 ? '{id}' : p.id)) + '</dd></dl>' +
        '<div class="stage-actions"><button class="btn btn-ghost" type="button" data-step="2">← Back</button><button class="btn ' + (published ? 'btn-secondary' : 'btn-primary') + '" type="button" data-stage-go="' + action + '">' + api.icon(published ? 'i-eye' : 'i-check') + (published ? 'Unpublish…' : when ? 'Schedule…' : 'Publish…') + '</button></div>' +
        (last ? '<div class="stamp' + (last.undone ? ' undone' : '') + '" role="status"><svg class="ring" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15.5" class="ring-bg"/><circle cx="18" cy="18" r="15.5" class="ring-fill" data-ring="' + E(last.id) + '"/></svg><div><div class="eyebrow">receipt · ' + E(last.t) + '</div><b>' + E(last.label) + (last.undone ? ' · undone' : '') + '</b><div class="mono hint">' + E(last.detail) + '</div></div></div>' : '');
  }
  function stage(state) {
    var p = subject(), step = Math.max(0, Math.min(3, state.step || 0));
    var cls = step > lastStep ? 'enter-right' : step < lastStep ? 'enter-left' : ''; lastStep = step;
    var options = state.posts.filter(function (x) { return x.status !== 'DELETED'; }).map(function (x) { return '<option value="' + E(x.id) + '"' + (x.id === p.id ? ' selected' : '') + '>' + E(x.title) + ' — ' + x.status + '</option>'; }).join('');
    return B.pageHead(state, api, { lede: 'A guarded publish, step by step: draft → review → schedule → publish, each step a reading column, each confirmed action a stamped receipt with a visible undo window.', noRoute: false }) +
      '<section class="stage" aria-label="Publish stage"><div class="stage-light" aria-hidden="true"></div>' +
      '<div class="stage-pick"><label class="field"><span class="label">Staged post</span><select class="select" data-stage>' + options + '</select></label><span class="hint">' + (p.id === DEMO_ID ? 'DEMO draft copy — the only non-published subject unless a local action created one.' : 'captured row · ' + p.status) + '</span>' + B.stateSwitch(state, api) + '</div>' +
      stepper(step) + '<div class="step-panel ' + cls + '" id="step-panel" tabindex="-1" aria-live="polite">' + stepPanel(state, p, step) + '</div></section>' +
      '<div class="folded" id="folded"><div class="section-head"><div><h2>Folded desk</h2><p>The six captured sections, folded beneath the stage. Open one to work in it.</p></div></div>' +
      [['posts', 'Posts', B.capturedRows(api.filteredPosts()).length + ' on page 1 · 110 total' + (api.post(DEMO_ID) ? ' · + 1 DEMO row' : '')], ['comments', 'Comments', api.counts().comments + ' captured'], ['pending', 'Pending', api.counts().pending], ['reported', 'Reported', api.counts().reported], ['analytics', 'Analytics', '107 views · 0 likes · 30d'], ['taxonomy', 'Taxonomy', '4 · 6 · 1']].map(function (t) {
        var open = state.tab === t[0] && !foldClosed;
        return '<details class="fold" data-fold="' + t[0] + '"' + (open ? ' open' : '') + '><summary>' + api.icon(open ? 'i-down' : 'i-arrow') + '<b>' + t[1] + '</b><span class="hint">' + t[2] + '</span></summary><div class="fold-body">' + (open ? B.panelFor(Object.assign({}, state, { tab: t[0] }), api, { snippet: true }) : '') + '</div></details>';
      }).join('') + '</div>';
  }
  function editing(state) {
    return '<div class="desk-fold"><span>' + api.icon('i-check') + '<b>Stage</b> folded while editing</span><button class="btn btn-ghost btn-sm" type="button" data-close-editor>← Back to the stage</button></div>' + B.editor(state, api, { snippet: true, h1: true }) + B.stateSwitch(state, api);
  }
  function render(state) {
    B.swap(root, state.editor ? editing(state) : stage(state));
    startRing();
  }
  /* countdown ring = the single stroke-dashoffset element on the page (CSS transition, 10 s) */
  function startRing() {
    var ring = document.querySelector('[data-ring]'); if (!ring) return;
    var id = ring.dataset.ring, r = null; for (var i = 0; i < api.state.receipts.length; i++) if (api.state.receipts[i].id === id) r = api.state.receipts[i];
    if (!r || !r.undoable || r.undone) { ring.style.strokeDashoffset = '97.4'; return; }
    var born = +id.slice(1), left = Math.max(0, 10000 - (Date.now() - born));
    ring.style.transition = 'none'; ring.style.strokeDashoffset = String(97.4 * (1 - left / 10000));
    requestAnimationFrame(function () { ring.style.transition = 'stroke-dashoffset ' + left + 'ms linear'; ring.style.strokeDashoffset = '97.4'; });
  }

  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.matches('[data-stage]')) { stageId = t.value; api.set({ step: 0 }, true); api.announce('Staged: ' + (api.post(stageId) || {}).title); return; }
    if (t.matches('[data-when]')) { when = t.value; return; }
  });
  document.addEventListener('input', function (ev) { if (ev.target.matches && ev.target.matches('[data-when]')) when = ev.target.value; });
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest && ev.target.closest('[data-stage-go]'); if (!el) return;
    var p = subject(), a = el.dataset.stageGo;
    if (a === 'schedule' && (!when || new Date(when) <= new Date())) { api.announce('Choose a future date and time first.'); api.set({ step: 2 }, true); var w = document.querySelector('[data-when]'); if (w) { w.setAttribute('aria-invalid', 'true'); w.focus(); } return; }
    api.confirm(a, p.id, { when: when });
  });
  document.addEventListener('toggle', function (ev) {
    var d = ev.target; if (!d.matches || !d.matches('details.fold')) return;
    if (d.open) {
      if (api.state.tab !== d.dataset.fold) { foldClosed = false; api.state.editor = null; api.set({ tab: d.dataset.fold }, true); }
      else if (foldClosed) { foldClosed = false; render(api.state); }
    } else if (api.state.tab === d.dataset.fold && !foldClosed) { foldClosed = true; }
  }, true);
  /* when a step changes, move focus to the panel so screen readers follow the choreography */
  var prevStep = null;
  api.mount(function (state) { render(state); if (prevStep !== null && prevStep !== state.step) { var sp = document.getElementById('step-panel'); if (sp) sp.focus({ preventScroll: true }); } prevStep = state.step; });
})();
