/* F23 · Media Library — hand-authored family runtime.
   Shared behaviour only. It never writes variant HTML/CSS files, never calls a network
   endpoint, and never claims a server result. All payload-shaped content is labelled local. */
(function () {
  'use strict';
  var F = window.NL_MEDIA;
  if (!F) { return; }
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  var root = document.documentElement;

  /* ---------------------------------------------------- console shell (shared chrome) */
  /* Offline-lab navigation: links resolve to the sibling family V1 pages, not to the
     live production routes (which do not exist in this static bundle). */
  var navGroups = [
    ['OPERATIONS', [['Dashboard','../../F02-dashboard-command-center/V1/index.html','▦'],['Pipelines','../../F04-pipelines-stage-hub/V1/index.html','⌁'],['Inquiries','../../F06-contact-inquiries/V1/index.html','✉'],['Notifications','../../F07-notifications-center/V1/index.html','◔'],['Requests','../../F08-requests-triage/V1/index.html','▤'],['Quotes','../../F09-quotes-list/V1/index.html','ƒ'],['Projects','../../F11-projects-list/V1/index.html','◫'],['Payments','../../F13-payments-money-ops/V1/index.html','₹'],['Users','../../F15-users-directory/V1/index.html','◉'],['Messages','../../F17-messages-home/V1/index.html','✆'],['Moderation','../../F19-moderation-queue/V1/index.html','⚑'],['Analytics','../../F20-analytics-hub/V1/index.html','◫']]],
    ['CONTENT', [['Blog','../../F21-content-blog/V1/index.html','✎'],['Portfolio','../../F22-portfolio-studio/V1/index.html','◈'],['Media Library','index.html','▣']]],
    ['SYSTEM', [['System Config','../../../index.html','⚙'],['Webhooks','../../../index.html','⌘'],['Audit Logs','../../../index.html','≡']]]
  ];
  function renderRail() {
    var rail = $('#rail'); if (!rail) return;
    var html = '<div class="brand"><img src="../../../assets/logo-mark-light.svg" data-logo alt="Nestlancer" width="28" height="28"><div><b>Operator Console</b><small>NESTLANCER / ADMIN</small></div></div>';
    navGroups.forEach(function (g) {
      html += '<div class="group">' + g[0] + '</div>';
      g[1].forEach(function (it) {
        html += '<a href="' + it[1] + '"' + (it[0] === 'Media Library' ? ' aria-current="page"' : '') + '><span class="ico" aria-hidden="true">' + it[2] + '</span><span class="lbl">' + it[0] + '</span></a>';
      });
    });
    html += '<div class="rail-foot">admin@nestlancer.com<br>Administrator<br>© 2026 Nestlancer Admin</div>';
    rail.innerHTML = html;
    swapLogo();
  }
  function swapLogo() {
    $$('[data-logo]').forEach(function (img) {
      img.src = '../../../assets/logo-mark-' + (root.classList.contains('dark') ? 'dark' : 'light') + '.svg';
    });
  }
  function renderTopbar() {
    var t = $('#topbar'); if (!t) return;
    t.innerHTML =
      '<button class="rail-toggle mobile-rail" data-action="mobile-rail" aria-label="Open navigation" aria-expanded="false">☰</button>' +
      '<button class="rail-toggle" data-action="rail" aria-pressed="' + String(root.classList.contains('rail-collapsed')) + '" aria-label="Collapse navigation"><span aria-hidden="true">⇤</span><span class="lbl">Collapse</span></button>' +
      '<div class="crumb"><a href="../../../index.html">Lab gallery</a><span>›</span><a href="../../F21-content-blog/V1/index.html">Content</a><span>›</span><strong>Media Library</strong></div>' +
      '<div class="spacer"></div><span class="search-hint">Search pages… ⌘K</span>' +
      '<span class="count" aria-label="21 messages">21</span>' +
      '<button class="btn sm icon" data-action="theme" aria-pressed="' + String(root.classList.contains('dark')) + '" aria-label="Toggle dark mode" title="Toggle dark mode">◐</button>' +
      '<span class="operator"><span class="avatar">RK</span><span>Riya Kapoor</span></span>';
  }
  function renderFooter() {
    var f = $('#footer'); if (!f) return;
    f.innerHTML = '<span>© 2026 Nestlancer</span><a href="#sources">Terms</a><a href="#sources">Privacy</a>' +
      '<span class="chip mono">admin.nestlancer.com</span><span class="chip">Secured · HTTPS</span>' +
      '<span class="chip">Local prototype · no production writes</span><span class="spacer" style="flex:1"></span>' +
      '<a class="mono" href="../../../index.html">← Lab gallery</a>';
  }
  function renderOverlays() {
    if ($('#backdrop')) return;
    var wrap = document.createElement('div');
    wrap.innerHTML =
      '<div class="backdrop" id="backdrop"></div>' +
      '<aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">' +
        '<div class="drawer-head"><h2 id="drawer-title">Asset details</h2><button class="btn sm" data-action="close-drawer">Close ×</button></div>' +
        '<div class="drawer-body" id="drawer-body"></div><div class="drawer-foot" id="drawer-foot"></div></aside>' +
      '<div class="dialog" id="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">' +
        '<div class="dialog-head"><h2 id="dialog-title">Dialog</h2><button class="btn sm quiet" data-action="close-dialog" aria-label="Close dialog">×</button></div>' +
        '<div class="dialog-body" id="dialog-body"></div><div class="dialog-foot" id="dialog-foot"></div></div>' +
      '<div class="toast" id="toast" role="status" aria-live="polite"><span id="toast-text"></span><button data-action="undo" id="undo-btn" hidden>Undo</button><button data-action="toast-close" aria-label="Dismiss notice">×</button></div>' +
      '<div class="bulkbar" id="bulkbar" role="region" aria-label="Bulk actions" aria-live="polite">' +
        '<span class="n" id="bulk-n">0 selected</span><span class="note">this page only · captured cards</span><span class="spacer"></span>' +
        '<button data-action="bulk-tag">Tag…</button><button data-action="bulk-move">Move…</button>' +
        '<button data-action="bulk-clear">Clear</button><button class="danger" data-action="bulk-delete">Delete (0)</button></div>';
    document.body.appendChild(wrap);
  }

  /* ---------------------------------------------------- theme + rail */
  function setTheme(dark) {
    root.classList.toggle('dark', dark);
    try { localStorage.setItem('nl-theme', dark ? 'dark' : 'light'); } catch (e) {}
    swapLogo();
    var b = $('[data-action="theme"]'); if (b) b.setAttribute('aria-pressed', String(dark));
  }
  function toggleRail() {
    root.classList.toggle('rail-collapsed');
    try { localStorage.setItem('nl-rail', root.classList.contains('rail-collapsed') ? 'collapsed' : 'open'); } catch (e) {}
    var b = $('[data-action="rail"]'); if (b) b.setAttribute('aria-pressed', String(root.classList.contains('rail-collapsed')));
  }

  /* ---------------------------------------------------- overlays + focus trap */
  var lastFocus = null, openLayer = null;
  function focusables(el) {
    return $$('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]', el)
      .filter(function (x) { return x.offsetParent !== null || x === document.activeElement; });
  }
  function openOverlay(which) {
    lastFocus = document.activeElement;
    closeOverlay(true);
    openLayer = which;
    $('#backdrop').classList.add('show');
    $(which).classList.add('open');
    var f = focusables($(which)); if (f.length) f[0].focus();
  }
  function closeOverlay(silent) {
    $('#backdrop').classList.remove('show');
    if ($('#drawer')) $('#drawer').classList.remove('open');
    if ($('#dialog')) $('#dialog').classList.remove('open');
    openLayer = null;
    if (!silent && lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (openLayer) { closeOverlay(); } if ($('#rail')) $('#rail').classList.remove('open'); return; }
    if (e.key === 'Tab' && openLayer) {
      var el = $(openLayer), f = focusables(el);
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  function dialog(title, body, foot, alertMsg) {
    $('#dialog-title').textContent = title;
    $('#dialog-body').innerHTML = (alertMsg ? '<div class="danger-copy" role="alert" tabindex="-1" style="margin-bottom:12px">' + esc(alertMsg) + '</div>' : '') + body;
    $('#dialog-foot').innerHTML = foot || '<button class="btn" data-action="close-dialog">Close</button>';
    openOverlay('#dialog');
    if (alertMsg) { var a = $('#dialog-body [role="alert"]'); if (a) a.focus(); }
  }

  /* ---------------------------------------------------- toast + C17 undo */
  var undoTimer = null, undoAction = null, undoBtn = null;
  function toast(msg, undoFn) {
    var t = $('#toast'); $('#toast-text').textContent = msg;
    undoBtn = $('#undo-btn'); clearInterval(undoTimer);
    if (undoFn) {
      undoAction = undoFn; undoBtn.hidden = false;
      var left = 10; undoBtn.textContent = 'Undo (10s)';
      undoTimer = setInterval(function () {
        left -= 1; undoBtn.textContent = 'Undo (' + left + 's)';
        if (left <= 0) { clearInterval(undoTimer); undoAction = null; undoBtn.hidden = true; hideToast(); }
      }, 1000);
    } else { undoAction = null; undoBtn.hidden = true; }
    t.classList.add('show');
  }
  function hideToast() { var t = $('#toast'); if (t) t.classList.remove('show'); }

  /* ---------------------------------------------------- tabs */
  function selectTab(name) {
    $$('[data-tab]').forEach(function (b) {
      var on = b.getAttribute('data-tab') === name;
      b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1;
    });
    $$('[data-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== name; });
    document.title = 'Media · ' + (name.charAt(0).toUpperCase() + name.slice(1)) + ' · Nestlancer';
  }

  /* ---------------------------------------------------- filters + sorting */
  function cardList() { return $('[data-asset-list]') || $('.asset-grid') || $('.asset-list'); }
  function cards() { var l = cardList(); return l ? $$('.asset', l) : []; }
  function visibleCards() { return cards().filter(function (c) { return !c.hidden; }); }
  function setNote(text, kind) {
    var n = $('[data-filter-note]'); if (!n) return;
    n.textContent = text || ''; n.className = 'state-note ' + (kind || 'empty'); n.hidden = !text;
  }
  function applyFilters() {
    var q = ($('[data-search]') && $('[data-search]').value || '').trim().toLowerCase();
    var status = $('[data-status]') ? $('[data-status]').value : 'All statuses';
    var typeBtn = $('[data-filter-group="type"][aria-pressed="true"]');
    var type = typeBtn ? typeBtn.getAttribute('data-value') : 'All types';
    var srcBtn = $('[data-filter-group="source"][aria-pressed="true"]');
    var source = srcBtn ? srcBtn.getAttribute('data-value') : 'All sources';
    var shown = 0;
    cards().forEach(function (c) {
      if (c.classList.contains('removed')) { c.hidden = true; return; }
      var ok = true, name = (c.getAttribute('data-name') || '').toLowerCase();
      var mime = (c.getAttribute('data-mime') || '').toLowerCase();
      if (q && name.indexOf(q) < 0 && mime.indexOf(q) < 0) ok = false;
      if (status !== 'All statuses' && c.getAttribute('data-status') !== status) ok = false;
      if (type !== 'All types' && c.getAttribute('data-type') !== type) ok = false;
      c.hidden = !ok; if (ok) shown++;
    });
    var count = $('[data-count]');
    if (count) count.textContent = 'Showing 1–' + shown + ' of 146 · page 1 of 7 · ' + shown + ' of 12 captured cards rendered';
    var note = '';
    if (type === 'IMAGE' || type === 'VIDEO') note = 'No captured ' + type + ' cards: "Files by type" records 118 image/jpeg files but the browse screenshots render generic placeholders, not visual previews. Filter state is preserved; no images were invented.';
    else if (status !== 'All statuses' && status !== 'READY') note = 'No captured card has status ' + status + '. All 12 transcribed cards are READY; the status select is a captured control, not a fabricated result set.';
    else if (source === 'Folders' || source === 'Uploads only') note = 'Captured "' + source + '" view is a Loading… state (' + (source === 'Folders' ? 'shot 020' : 'DOM 178') + ') with no rows. The library stays visible; the loading state is available in the state switcher.';
    else if (source !== 'All sources') note = '"' + source + '" is a captured source filter. Per-asset source/context values were not captured in the JS grid, so no per-filter rows can be asserted; all captured cards remain visible.';
    else if (q && !shown) note = 'No captured card matches "' + esc(q) + '". Search covers the 12 transcribed filenames and MIME values only.';
    setNote(note, note ? 'loading' : 'empty');
    clearSelection();
  }
  function sortCards(mode) {
    var list = cardList(); if (!list) return;
    var arr = cards();
    var sizeVal = function (s) { var n = parseFloat(s) || 0; return /KB/i.test(s) ? n * 1024 : /MB/i.test(s) ? n * 1048576 : n; };
    arr.sort(function (a, b) {
      if (mode === 'Name A–Z') return (a.getAttribute('data-name') || '').localeCompare(b.getAttribute('data-name') || '');
      if (mode === 'Largest') return sizeVal(b.getAttribute('data-size')) - sizeVal(a.getAttribute('data-size'));
      if (mode === 'Oldest') return Number(a.getAttribute('data-order')) - Number(b.getAttribute('data-order'));
      return Number(b.getAttribute('data-order')) - Number(a.getAttribute('data-order'));
    });
    arr.forEach(function (c) { list.appendChild(c); });
    toast('Sorted locally: ' + mode);
  }

  /* ---------------------------------------------------- selection + A1 bulk bar */
  var selected = {};
  function selectedCards() { return cards().filter(function (c) { return selected[c.getAttribute('data-key')]; }); }
  function updateBulk() {
    var bar = $('#bulkbar'), n = selectedCards().length;
    if (!bar) return;
    bar.classList.toggle('show', n > 0);
    $('#bulk-n').textContent = n + ' selected';
    var d = $('[data-action="bulk-delete"]'); if (d) d.textContent = 'Delete (' + n + ')';
  }
  function toggleCard(c) {
    var k = c.getAttribute('data-key'); if (!k) return;
    if (selected[k]) delete selected[k]; else selected[k] = true;
    c.classList.toggle('selected', !!selected[k]);
    c.setAttribute('aria-pressed', String(!!selected[k]));
    updateBulk();
  }
  function clearSelection() {
    selected = {};
    cards().forEach(function (c) { c.classList.remove('selected'); c.setAttribute('aria-pressed', 'false'); });
    var sp = $('[data-select-page]'); if (sp) { sp.checked = false; sp.indeterminate = false; }
    updateBulk();
  }

  /* ---------------------------------------------------- asset drawer */
  function assetByKey(k) {
    for (var i = 0; i < F.assets.length; i++) if (F.assets[i].key === k) return F.assets[i];
    return F.assets[0];
  }
  function openDrawer(k) {
    var a = assetByKey(k), d = (a.key === 'a01') ? F.detail : null;
    var name = d ? d.name : a.name;
    var html = '<div class="preview-box"><span>' + (d ? esc(d.preview) : 'No preview available') + '</span><a href="#open-file" data-action="demo-hint">Open file</a></div>' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap"><span class="status">READY</span><span class="tag">' + esc(a.visibility) + '</span><span class="tag mono">' + esc(a.size) + '</span></div>' +
      '<dl class="meta-grid">' +
        '<dt>MIME</dt><dd>' + esc(a.mime) + '</dd>' +
        '<dt>Context</dt><dd>' + (d ? esc(d.context) : 'not captured (JS grid)') + '</dd>' +
        '<dt>Media ID</dt><dd>' + (d ? esc(d.mediaId) : 'not captured') + '</dd>' +
        '<dt>Uploader</dt><dd>' + (d ? esc(d.uploader) : esc(a.uploader)) + '</dd>' +
        '<dt>Uploaded</dt><dd>' + (d ? esc(d.uploaded) : 'not captured') + '</dd>' +
        '<dt>File ACL</dt><dd>' + esc(a.visibility) + '</dd>' +
        '<dt>Source</dt><dd>' + esc(a.src) + '</dd>' +
      '</dl>';
    if (d) {
      html += '<div class="section-title">References <span class="tag warn">' + esc(d.referencesNote) + '</span></div>' +
        '<div class="warnbox">' + esc(d.referencesWarning) + '</div>';
      d.references.forEach(function (r) {
        html += '<div class="ref-row"><div><b>' + esc(r.label) + '</b><div class="r-id">' + esc(r.id) + '</div>' + (r.note ? '<div class="tight">' + esc(r.note) + '</div>' : '') + '</div><button class="btn sm" data-action="demo-hint">Open</button></div>';
      });
      html += '<div class="section-title">Share links</div><p class="tight">' + esc(d.shares) + '</p>';
    } else {
      html += '<div class="section-title">References</div><p class="tight">Reference, share-link and exact media-ID fields were captured for one asset only (073). They are not asserted for this card.</p>';
    }
    html += '<div class="section-title">Swagger contracts · field names not documented in Swagger</div>' +
      '<div class="endpoint-print">GET /api/v1/admin/media/{id}<br>GET /api/v1/admin/media/{id}/references<br>GET /api/v1/admin/media/{id}/shares<br>GET /api/v1/admin/media/{id}/download</div>' +
      '<p class="tight" style="margin-top:8px">Admin 200 responses are <span class="mono">data: object, additionalProperties: true</span>. This drawer is a local transcription, not an API response.</p>';
    $('#drawer-title').textContent = name;
    $('#drawer-body').innerHTML = html;
    $('#drawer-foot').innerHTML =
      '<button class="btn sm" data-action="asset-do" data-do="Download">Download</button>' +
      '<button class="btn sm" data-action="asset-do" data-do="Replace">Replace</button>' +
      '<button class="btn sm" data-action="asset-do" data-do="Reprocess">Reprocess</button>' +
      '<button class="btn sm" data-action="asset-do" data-do="Create link">Create link</button>' +
      '<button class="btn sm" data-action="asset-do" data-do="Edit metadata">Edit metadata</button>' +
      '<button class="btn sm danger" data-action="asset-do" data-do="Delete">Delete</button>';
    openOverlay('#drawer');
  }

  /* ---------------------------------------------------- dialogs: share / metadata / confirm */
  function shareDialog() {
    var s = F.labels.share;
    var body = '<p class="notice">' + esc(s.intro) + '</p>' +
      '<div id="form-alert"></div>' +
      '<label for="share-purpose">' + esc(s.purpose) + ' <span aria-hidden="true">*</span></label>' +
      '<input id="share-purpose" maxlength="500" placeholder="' + esc(s.placeholder) + '" aria-describedby="share-hint">' +
      '<div class="hint" id="share-hint">Required · ≤500 characters · maps to ShareMediaDto.purpose</div>' +
      '<label for="share-timeout">' + esc(s.timeout) + '</label>' +
      '<select id="share-timeout"><option>7 days — auto-revoke after expiry</option><option>1 day — auto-revoke after expiry</option><option>30 days — auto-revoke after expiry</option></select>' +
      '<div class="hint">expiresInSeconds: 604800 / 86400 / 2592000 · spec range 3600–7776000</div>' +
      '<label for="share-password">' + esc(s.password) + '</label>' +
      '<input id="share-password" type="password" placeholder="' + esc(s.passwordPlaceholder) + '" autocomplete="new-password">' +
      '<div class="endpoint-print">POST /api/v1/admin/media/{id}/share · passwordProtected + password are optional · allowedEmails exists in the DTO but appears in no capture</div>' +
      '<p class="hint">Local prototype. No link is created on a server; a submitted form produces a labelled local receipt only.</p>';
    dialog(s.title, body,
      '<button class="btn" data-action="close-dialog">' + esc(s.cancel) + '</button><button class="btn primary" data-action="share-submit">' + esc(s.submit) + '</button>');
  }
  function shareSubmit() {
    var v = ($('#share-purpose') && $('#share-purpose').value || '').trim();
    var box = $('#form-alert');
    if (!v) {
      box.innerHTML = '<div class="danger-copy" role="alert" tabindex="-1">Purpose / statement is required before a link can be prepared.</div>';
      $('#share-purpose').setAttribute('aria-invalid', 'true');
      $('#share-purpose').setAttribute('aria-describedby', 'share-hint form-alert');
      var a = box.querySelector('[role="alert"]'); if (a) a.focus();
      return;
    }
    var timeout = $('#share-timeout') ? $('#share-timeout').selectedIndex : 0;
    var secs = [604800, 86400, 2592000][timeout] || 604800;
    var pwd = ($('#share-password') && $('#share-password').value || '').length > 0;
    var receipt = '<p class="notice"><b>Local receipt — not a server response.</b> A share link would be created with purpose “' + esc(v) + '”, lifetime ' + secs + ' seconds' + (pwd ? ', password protection on' : ', no password') + '.</p>' +
      '<div class="endpoint-print">POST /api/v1/admin/media/{id}/share<br>{ purpose, expiresInSeconds: ' + secs + ', passwordProtected: ' + pwd + ' }</div>' +
      '<div class="warnbox" style="margin-top:12px">The captured drawer says “No active share links.” No link URL, token or audit result was captured, and none is invented here.</div>';
    dialog('Share link prepared locally', receipt, '<button class="btn primary" data-action="close-dialog">Done</button>');
    toast('Local link receipt prepared — no server request sent');
  }
  function metadataDialog() {
    var d = F.detail, m = F.labels.metadata;
    var body = '<p class="notice">Captured edit-metadata form (shot 076). “Display name” is a captured UI label; AdminUpdateMediaDto exposes <span class="mono">originalFilename</span> but the mapping is unverified.</p>' +
      '<label for="md-name">Filename</label><input id="md-name" value="' + esc(d.name) + '">' +
      '<label for="md-display">Display name</label><input id="md-display" value="' + esc(d.name) + '">' +
      '<label for="md-desc">Description</label><input id="md-desc" value="' + esc(d.description) + '">' +
      '<label for="md-vis">Visibility</label><select id="md-vis"><option>PRIVATE</option><option>PUBLIC</option></select>' +
      '<div class="endpoint-print">PATCH /api/v1/admin/media/{id} · AdminUpdateMediaDto: filename, description, customMetadata, visibility, originalFilename, metadataPatch</div>';
    dialog('Edit asset metadata', body,
      '<button class="btn" data-action="close-dialog">' + esc(m.cancel) + '</button><button class="btn primary" data-action="metadata-submit">' + esc(m.save) + '</button>');
  }
  function confirmDialog(cfg) {
    var body = '<p class="notice">' + esc(cfg.intro) + '</p>' +
      '<div class="endpoint-print">' + esc(cfg.endpoint) + '</div>' +
      (cfg.warning ? '<div class="warnbox" style="margin-top:12px">' + esc(cfg.warning) + '</div>' : '') +
      (cfg.reason ? '<label for="confirm-reason">Reason <span aria-hidden="true">*</span></label><textarea id="confirm-reason" placeholder="Record why this decision is safe"></textarea><div class="hint">Required locally. The spec does not document a reason field; this is a prototype safety layer.</div>' : '') +
      '<p class="hint" style="margin-top:10px">Local prototype only. No HTTP request is sent and no server permission, audit or result is claimed.</p>';
    dialog(cfg.title, body,
      '<button class="btn" data-action="close-dialog">Cancel</button><button class="btn ' + (cfg.danger ? 'danger' : 'primary') + '" data-action="confirm-yes">' + esc(cfg.button || 'Confirm') + '</button>');
    pendingConfirm = cfg;
  }
  var pendingConfirm = null;

  /* ---------------------------------------------------- destructive + undo */
  function hideSelected(restore) {
    var arr = selectedCards();
    arr.forEach(function (c) { c.hidden = true; c.classList.add('removed'); });
    var names = arr.map(function (c) { return c.getAttribute('data-name'); });
    clearSelection();
    undoAction = function () {
      arr.forEach(function (c) { c.hidden = false; c.classList.remove('removed'); });
      toast('Deletion undone locally — ' + arr.length + ' card(s) restored');
    };
    toast('Local delete of ' + arr.length + ' card(s) previewed and confirmed — undo available for 10s', undoAction);
  }

  /* ---------------------------------------------------- upload staging */
  var uploadState = { timer: null, step: 0, name: '' };
  function uploadDialog() {
    var body = '<p class="notice">No upload shot exists. The captured dropzone says “' + esc(F.labels.upload) + '” / “' + esc(F.labels.uploadNote) + '”. The steps below are a <b>local staged simulation</b> built only from documented Swagger operations; no binary file is sent and no multipart body is declared in the spec.</p>' +
      '<div class="steps" id="up-steps"><span class="step on"><b>01</b> Request</span><span class="step"><b>02</b> Progress</span><span class="step"><b>03</b> Confirm</span><span class="step"><b>04</b> Done</span></div>' +
      '<label for="up-file">Choose a local file name (read locally, never uploaded)</label><input id="up-file" type="file">' +
      '<div class="progress"><i id="up-progress"></i></div><p class="tight" id="up-status">Idle · no upload started</p>' +
      '<div class="endpoint-print">POST /api/v1/media/upload/request → POST /api/v1/media/upload/confirm<br>chunked: /media/upload/chunked/init · /{uploadId}/part · /{uploadId}/complete · /{uploadId}/status · /{uploadId}/abort</div>';
    dialog('Upload · staged local flow', body,
      '<button class="btn" data-action="upload-abort">Abort</button><button class="btn" data-action="upload-fail">Simulate failure</button><button class="btn primary" data-action="upload-start">Start staged upload</button>');
  }
  function uploadStep(n, status) {
    uploadState.step = n;
    $$('#up-steps .step').forEach(function (s, i) { s.classList.toggle('on', i === n); s.classList.toggle('done', i < n); });
    var p = $('#up-progress'); if (p) p.style.width = [0, 46, 100, 100][n] + '%';
    var st = $('#up-status'); if (st) st.textContent = status;
  }
  function uploadStart() {
    var f = $('#up-file'), name = (f && f.files && f.files[0] && f.files[0].name) || 'staged-file.zip';
    uploadState.name = name; clearInterval(uploadState.timer);
    uploadStep(0, 'Request prepared for “' + name + '” · POST /api/v1/media/upload/request (local)');
    setTimeout(function () {
      if (!$('#dialog').classList.contains('open')) return;
      uploadStep(1, 'Uploading… local progress only; no bytes leave this browser');
      var pct = 46;
      uploadState.timer = setInterval(function () {
        pct = Math.min(96, pct + 10);
        var bar = $('#up-progress'); if (bar) bar.style.width = pct + '%';
        if (pct >= 96) {
          clearInterval(uploadState.timer);
          uploadStep(2, 'Confirm staged · POST /api/v1/media/upload/confirm (local)');
          setTimeout(function () {
            if (!$('#dialog').classList.contains('open')) return;
            uploadStep(3, 'Done locally · no server receipt, no new captured asset added');
            toast('Staged upload complete locally — no production write');
          }, 750);
        }
      }, 420);
    }, 650);
  }

  /* ---------------------------------------------------- quarantine + C17 */
  function toggleQuarantineDemo() {
    $$('[data-demo-review]').forEach(function (r) { r.hidden = !r.hidden; });
    var empty = $('[data-quarantine-empty]'); if (empty) empty.hidden = !empty.hidden;
    var btn = $('[data-action="quarantine-demo"]');
    if (btn) btn.textContent = (btn.textContent.indexOf('Load') === 0 ? 'Hide' : 'Load') + ' local review demo';
    toast('Local demo review rows toggled — no captured quarantined asset exists');
  }

  /* ---------------------------------------------------- provenance */
  function sourcesDialog() {
    var html = '<p class="notice"><b>' + esc(F.captured) + '</b> · 9 screenshots · 7 DOM states · <span class="mono">media.openapi.json</span> (50 paths / 57 operations). MD report (353 lines) + 10 XLSX sheets read.</p>' +
      '<div class="section-title">Conflicts — surfaced, not repaired</div>';
    F.conflicts.forEach(function (c) {
      html += '<div class="ref-row"><div><b>' + esc(c.title) + '</b><div class="r-id">' + esc(c.a) + '<br>' + esc(c.b) + '</div><div class="tight">' + esc(c.resolution) + '</div></div></div>';
    });
    html += '<div class="section-title">Local-demo-only surfaces (' + F.demoOnly.length + ')</div><ol class="runbook">';
    F.demoOnly.forEach(function (d) { html += '<li>' + esc(d) + '</li>'; });
    html += '</ol><div class="section-title">Swagger honesty</div><p class="notice">' + esc(F.api.note) + '</p>' +
      '<div class="endpoint-print">' + Object.keys(F.api).filter(function (k) { return k !== 'note'; }).map(function (k) { return esc(F.api[k]); }).join('<br>') + '</div>';
    dialog('Source details & provenance', html, '<button class="btn primary" data-action="close-dialog">Close</button>');
  }
  function helpDialog() {
    dialog('Keyboard & honesty guide',
      '<p class="notice">Roving grid: <span class="mono">← → ↑ ↓</span> move between cards · <span class="mono">Enter</span> opens the detail drawer · <span class="mono">x</span> selects · <span class="mono">/</span> focuses search · <span class="mono">?</span> opens this guide · <span class="mono">Esc</span> closes a dialog or drawer.</p>' +
      '<p class="notice">Every action in this lab is local. The captured card grid had 0 click selectors in the DOM; this prototype makes cards clickable and labels every simulated action. No production data was changed.</p>',
      '<button class="btn primary" data-action="close-dialog">Got it</button>');
  }
  function demoHint() {
    toast('Local prototype: this captured action has no live target in the offline lab');
  }

  /* ---------------------------------------------------- state switcher */
  function setState(state) {
    var w = $('[data-workspace]') || $('#main');
    if (!w) return;
    w.classList.remove('is-loading', 'is-empty', 'is-error');
    var n = $('[data-state-note]');
    if (n) { n.hidden = state === 'ready'; n.className = 'state-note ' + (state === 'ready' ? 'empty' : state === 'error' ? 'error' : 'loading'); }
    if (state === 'loading') {
      w.classList.add('is-loading');
      if (n) n.textContent = 'Loading… — captured Folders (020) and Uploads-only (178) states render a spinner with no rows. No folder list is invented.';
    } else if (state === 'empty') {
      w.classList.add('is-empty');
      if (n) n.textContent = 'No quarantined media — exact captured empty state (021 / DOM 121).';
    } else if (state === 'error') {
      w.classList.add('is-error');
      if (n) n.textContent = 'Degraded view — 7 F23 DOM captures logged failed RSC prefetches and one CSP inline-style console error. This is a local error state, not a live API failure.';
    } else if (state === 'upload') { uploadDialog(); return; }
    else if (n) n.textContent = '';
    $$('[data-state]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-state') === state)); });
  }

  /* ---------------------------------------------------- keyboard roving grid */
  function initRoving() {
    var arr = cards();
    arr.forEach(function (c, i) { if (!c.hasAttribute('tabindex')) c.tabIndex = i === 0 ? 0 : -1; });
  }
  document.addEventListener('keydown', function (e) {
    if (openLayer) return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'select' || tag === 'textarea') {
      if (e.key === '/' && tag !== 'input') { e.preventDefault(); var s = $('[data-search]'); if (s) s.focus(); }
      return;
    }
    if (e.key === '/') { e.preventDefault(); var s2 = $('[data-search]'); if (s2) s2.focus(); return; }
    if (e.key === '?') { e.preventDefault(); helpDialog(); return; }
    var arr = visibleCards(), idx = arr.indexOf(document.activeElement);
    if (idx < 0) return;
    var next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = arr[Math.min(arr.length - 1, idx + 1)];
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = arr[Math.max(0, idx - 1)];
    if (e.key === 'Home') next = arr[0];
    if (e.key === 'End') next = arr[arr.length - 1];
    if (next) { e.preventDefault(); arr.forEach(function (c) { c.tabIndex = -1; }); next.tabIndex = 0; next.focus(); }
    if (e.key === 'x') { e.preventDefault(); toggleCard(document.activeElement); }
  });

  /* ---------------------------------------------------- delegated actions */
  document.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-action]');
    if (!t) {
      var card = ev.target.closest('.asset');
      if (card && !ev.target.closest('.pick')) { openDrawer(card.getAttribute('data-key')); }
      return;
    }
    var a = t.getAttribute('data-action');
    if (a === 'theme') { setTheme(!root.classList.contains('dark')); return; }
    if (a === 'rail') { toggleRail(); return; }
    if (a === 'mobile-rail') { var r = $('#rail'); r.classList.toggle('open'); t.setAttribute('aria-expanded', String(r.classList.contains('open'))); return; }
    if (a === 'tab') { selectTab(t.getAttribute('data-tab')); return; }
    if (a === 'goto-tab') { selectTab(t.getAttribute('data-target')); return; }
    if (a === 'state') { setState(t.getAttribute('data-state')); return; }
    if (a === 'close-dialog') { closeOverlay(); return; }
    if (a === 'close-drawer') { closeOverlay(); return; }
    if (a === 'toast-close') { hideToast(); return; }
    if (a === 'undo') { if (undoAction) { var fn = undoAction; undoAction = null; clearInterval(undoTimer); $('#undo-btn').hidden = true; fn(); } return; }
    if (a === 'sources') { sourcesDialog(); return; }
    if (a === 'help') { helpDialog(); return; }
    if (a === 'demo-hint') { ev.preventDefault(); demoHint(); return; }
    if (a === 'clear-filter') {
      $$('[data-filter-group]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-value') === 'All types' || b.getAttribute('data-value') === 'All sources')); });
      var se = $('[data-search]'); if (se) se.value = '';
      var st = $('[data-status]'); if (st) st.value = 'All statuses';
      applyFilters(); return;
    }
    if (a === 'filter') {
      var group = t.getAttribute('data-filter-group');
      $$('[data-filter-group="' + group + '"]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      t.setAttribute('aria-pressed', 'true'); applyFilters(); return;
    }
    if (a === 'view-grid' || a === 'view-list') {
      var list = cardList(); if (list) list.classList.toggle('asset-list', a === 'view-list');
      $$('[data-action="view-grid"],[data-action="view-list"]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); });
      return;
    }
    if (a === 'select-page') { /* checkbox handled by change */ return; }
    if (a === 'bulk-clear') { clearSelection(); return; }
    if (a === 'bulk-tag' || a === 'bulk-move') {
      var n = selectedCards().length, verb = a === 'bulk-tag' ? 'Tag' : 'Move';
      dialog(verb + ' · local preparation only',
        '<p class="notice"><b>' + n + ' card(s) selected.</b> The captured “Select page” checkbox exists (074 / 077), but <span class="mono">media.openapi.json</span> has no bulk tag and no bulk move endpoint. Only <span class="mono">POST /api/v1/admin/media/bulk-delete</span> (ids, force) exists.</p>' +
        '<div class="endpoint-print">' + esc(F.api.bulkDelete) + '</div>' +
        '<div class="warnbox" style="margin-top:12px">Nothing is staged for a server, and no tag or folder vocabulary was captured. This control documents the gap instead of inventing a batch operation.</div>',
        '<button class="btn primary" data-action="close-dialog">Understood</button>');
      return;
    }
    if (a === 'bulk-delete') {
      var arr = selectedCards();
      if (!arr.length) { toast('Select at least one card first'); return; }
      confirmDialog({ title:'Delete ' + arr.length + ' media item(s)?', intro:'Each of the ' + arr.length + ' selected cards will be hidden locally. The captured drawer warns that deleting a referenced file without force may fail or break content.', endpoint:'POST /api/v1/admin/media/bulk-delete { ids: […], force: false }\nDELETE /api/v1/admin/media/{id}?force={boolean}', warning:'Reference count is captured for one asset only (2 references). No server response, permission check or audit result is claimed here.', button:'Preview & confirm delete', danger:true, after:hideSelected });
      return;
    }
    if (a === 'asset-do') { assetAction(t.getAttribute('data-do')); return; }
    if (a === 'share-submit') { shareSubmit(); return; }
    if (a === 'metadata-submit') {
      var nm = $('#md-name') ? $('#md-name').value : '';
      closeOverlay();
      toast('Local metadata edit staged for “' + (nm || 'asset') + '” — no server write'); return;
    }
    if (a === 'confirm-yes') {
      var cfg = pendingConfirm; if (!cfg) { closeOverlay(); return; }
      if (cfg.reason) {
        var rv = ($('#confirm-reason') && $('#confirm-reason').value || '').trim();
        if (!rv) {
          var old = $('#dialog-body');
          if (!$('#dialog-body [role="alert"]')) {
            old.insertAdjacentHTML('afterbegin', '<div class="danger-copy" role="alert" tabindex="-1" style="margin-bottom:12px">A reason is required before this review decision can be confirmed locally.</div>');
          }
          $('#dialog-body [role="alert"]').focus(); return;
        }
      }
      pendingConfirm = null; closeOverlay();
      if (cfg.after) cfg.after();
      else toast(cfg.toast || 'Confirmed locally — no server request sent', cfg.undo || null);
      return;
    }
    if (a === 'upload') { uploadDialog(); return; }
    if (a === 'upload-start') { uploadStart(); return; }
    if (a === 'upload-abort') {
      clearInterval(uploadState.timer); uploadStep(0, 'Aborted locally · POST /api/v1/media/upload/chunked/{uploadId}/abort (no call sent)');
      toast('Staged upload aborted locally'); return;
    }
    if (a === 'upload-fail') {
      clearInterval(uploadState.timer); uploadStep(1, 'Failed locally — the spec declares no error examples; this is an honest local failure state, not a captured server error.');
      toast('Local upload failure shown — no server error was received'); return;
    }
    if (a === 'cleanup') {
      var dry = t.getAttribute('data-mode') === 'preview';
      confirmDialog({ title: dry ? 'Preview cleanup (dry run)' : 'Run cleanup?',
        intro: dry ? 'Preview unattached private media before cleanup. Dry run does not delete anything.' : 'Run cleanup removes orphaned files and temporary upload remnants. The captured UI offers this as a separate, consequential action.',
        endpoint: 'POST /api/v1/admin/media/cleanup?dryRun=' + (dry ? 'true' : 'false') + '\nGET /api/v1/admin/media/orphans',
        warning: 'Response field names are not documented in Swagger. No deletion count, orphan list or server result is asserted.',
        button: dry ? 'Preview locally' : 'Confirm run locally', danger: !dry,
        toast: dry ? 'Dry run previewed locally — nothing deleted' : 'Cleanup confirmed locally — no production call sent' });
      return;
    }
    if (a === 'quarantine-demo') { toggleQuarantineDemo(); return; }
    if (a === 'review-do') {
      var row = t.closest('[data-demo-review]'), label = (row && row.getAttribute('data-demo-name')) || 'local demo row';
      var verb = t.getAttribute('data-do');
      var endpoint = verb === 'Release' ? F.api.release : verb === 'Purge' ? F.api.purge : F.api.reprocess;
      confirmDialog({ title: verb + ' · local review decision',
        intro: 'Decision for “' + label + '”. Quarantine is created by security scanning; no endpoint lets an operator quarantine an asset. The captured default is an empty queue.',
        endpoint: endpoint, reason: true, danger: verb === 'Purge',
        warning: 'Local demo row only — no quarantined asset, scan verdict or operator identity was captured. Release/purge are spec-backed operations, but no server result is claimed.',
        button: 'Confirm ' + verb.toLowerCase(),
        toast: verb + ' confirmed locally with a recorded reason · 10s undo',
        undo: function () { toast('Review decision undone locally'); } });
      return;
    }
  });

  function assetAction(doWhat) {
    var d = F.detail;
    if (doWhat === 'Create link') { closeOverlay(); shareDialog(); return; }
    if (doWhat === 'Edit metadata') { closeOverlay(); metadataDialog(); return; }
    var map = {
      'Download': { endpoint: d.endpoints.download, intro: 'Generate a presigned download URL for this file. No binary or URL is captured in the offline lab.', warning: '' },
      'Replace': { endpoint: d.endpoints.replace, intro: 'Replace the file behind this media ID. force is a required query parameter.', warning: 'Replacing a referenced asset may break content. No replacement file was captured.' },
      'Reprocess': { endpoint: d.endpoints.reprocess, intro: 'Reprocess this media asset. The captured quarantine empty state names “release, reprocess, or delete”.', warning: '' },
      'Delete': { endpoint: d.endpoints.del, intro: 'Delete this asset. The captured drawer says “This file is linked elsewhere. Deleting without force may fail or break content.”', warning: d.referencesWarning, danger: true, toast: 'Delete confirmed locally · 10s undo', undo: function () { toast('Delete undone locally'); } }
    };
    var c = map[doWhat] || map.Download;
    closeOverlay();
    confirmDialog({ title: doWhat + ' · preview & confirm', intro: c.intro, endpoint: c.endpoint, warning: c.warning, danger: c.danger, button: 'Confirm ' + doWhat.toLowerCase() + ' locally', toast: c.toast || (doWhat + ' confirmed locally — no server request sent'), undo: c.undo || null });
  }

  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.hasAttribute && t.hasAttribute('data-search')) return;
    if (t.hasAttribute && t.hasAttribute('data-status')) { applyFilters(); return; }
    if (t.hasAttribute && t.hasAttribute('data-sort')) { sortCards(t.value); return; }
    if (t.hasAttribute && t.hasAttribute('data-select-page')) {
      var on = t.checked;
      visibleCards().forEach(function (c) {
        var k = c.getAttribute('data-key');
        if (on) selected[k] = true; else delete selected[k];
        c.classList.toggle('selected', on); c.setAttribute('aria-pressed', String(on));
      });
      updateBulk(); return;
    }
    if (t.id === 'up-file') { /* local file name only */ }
  });
  document.addEventListener('input', function (ev) { if (ev.target.hasAttribute && ev.target.hasAttribute('data-search')) applyFilters(); });
  document.addEventListener('click', function (ev) {
    if (ev.target.closest('.pick')) { ev.stopPropagation(); toggleCard(ev.target.closest('.asset')); }
  }, true);
  document.addEventListener('keydown', function (e) {
    if (openLayer) return;
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.classList.contains('asset')) {
      e.preventDefault(); openDrawer(document.activeElement.getAttribute('data-key'));
    }
  });
  $$('[data-tab]').forEach(function (b) {
    b.addEventListener('keydown', function (e) {
      var arr = $$('[data-tab]'), i = arr.indexOf(b), n = null;
      if (e.key === 'ArrowRight') n = arr[(i + 1) % arr.length];
      if (e.key === 'ArrowLeft') n = arr[(i - 1 + arr.length) % arr.length];
      if (n) { e.preventDefault(); selectTab(n.getAttribute('data-tab')); n.focus(); }
    });
  });

  /* ---------------------------------------------------- boot */
  function init() {
    renderRail(); renderTopbar(); renderFooter(); renderOverlays();
    selectTab('storage');
    initRoving();
    applyFilters();
    $$('[data-types]').forEach(function (box) {
      if (box.children.length) return;
      box.innerHTML = F.analytics.types.map(function (t) {
        var w = Math.max(3, Math.round(t.count / 118 * 100));
        return '<div class="type-row"><span class="t-mime">' + esc(t.mime) + '</span><span class="t-bar"><i style="width:' + w + '%"></i></span><span class="t-num">' + t.count + ' (' + esc(t.size) + ')</span></div>';
      }).join('');
    });
    var sp = $('[data-select-page]');
    // no-JS fallback text is in each index.html
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
