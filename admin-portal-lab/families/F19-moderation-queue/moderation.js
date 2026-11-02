/* F19 revision 2 — source-reconciled local runtime.
   Default: captured empty moderation state. Optional demo uses captured message text with synthetic flags.
   No fetch/XHR, tokens, production mutation, permission check or audit write. */
(function () {
  'use strict';
  const D = window.F19Data; if (!D) return;
  const ASSETS = '../../../assets/';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icon = n => `<svg class="ic" aria-hidden="true" focusable="false"><use href="${ASSETS}lab-icons.svg#i-${n}"></use></svg>`;
  const layout = document.body.dataset.layout || 'desk';
  const ACTION_LABEL = { dismiss: 'Dismissed', escalate: 'Escalated', remove: 'Removed', restore: 'Restored' };
  const EFFECT = {
    dismiss: 'Clears the flagged state without deleting the message.',
    escalate: 'Marks the message for senior review and censors the bubble in chat so participants cannot read it.',
    remove: 'Replaces the chat bubble with a moderation notice and keeps the original text in history for restore.',
    restore: 'Restores a removed or escalated message. Optional edited content is a local preview; Swagger describes body.content but does not declare a requestBody schema.'
  };
  let cases = D.cases.map(c => ({ ...c, active: true }));
  let session = [];
  let selected = new Set(), opened = new Set();
  let currentKey = cases[0] ? cases[0].key : null;
  let tab = 'queue', source = 'source', preview = 'ready';
  let filters = { q: '', status: 'all', chat: 'all' };
  let histFilters = { q: '', action: 'all' };
  let page = 1, histPage = 1, historyOpen = null;
  let undoState = null, undoTimer = null, dialogState = null, opener = null, seq = 0;
  const PAGE_SIZE = 10;

  function announce(msg) { const l = $('#live'); if (l) { l.textContent = ''; setTimeout(() => { l.textContent = msg; }, 30); } }
  function isDemo() { return source === 'demo'; }
  function activeCases() { return isDemo() ? cases.filter(c => c.active) : []; }
  function filteredCases() {
    const q = filters.q.trim().toLowerCase();
    return activeCases().filter(c => {
      if (filters.status !== 'all' && c.status !== filters.status) return false;
      if (filters.chat !== 'all' && c.chat !== filters.chat) return false;
      if (q && ![c.content, c.sender, c.threadTitle, c.chat, c.key, c.projectId || '', c.threadId || ''].join(' ').toLowerCase().includes(q)) return false;
      return true;
    });
  }
  function pagedCases() { const l = filteredCases(); const pages = Math.max(1, Math.ceil(l.length / PAGE_SIZE)); page = Math.min(Math.max(1, page), pages); return l.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE); }
  function events() { return [...session].sort((a, b) => b.seq - a.seq); }
  function filteredEvents() {
    const q = histFilters.q.trim().toLowerCase();
    return events().filter(e => {
      if (histFilters.action !== 'all' && e.action !== histFilters.action) return false;
      if (q && ![e.content, e.sender, e.threadTitle, e.chat, e.actor, e.note || ''].join(' ').toLowerCase().includes(q)) return false;
      return true;
    });
  }
  function pagedEvents() { const l = filteredEvents(); const pages = Math.max(1, Math.ceil(l.length / PAGE_SIZE)); histPage = Math.min(Math.max(1, histPage), pages); return l.slice((histPage - 1) * PAGE_SIZE, histPage * PAGE_SIZE); }
  function latestEvent(key) { return events().find(e => e.key === key) || null; }
  function canRestore(key) { const e = latestEvent(key); return isDemo() && e && (e.action === 'Removed' || e.action === 'Escalated'); }
  function caseByKey(k) { return cases.find(c => c.key === k); }
  function allowedActions(c) { return c.status === 'Escalated' ? ['restore'] : ['dismiss', 'escalate', 'remove']; }
  function statusBadge(s) {
    const map = { Flagged: 'warning', Escalated: 'purple', Removed: 'error', Dismissed: 'neutral', Restored: 'success' };
    const ic = { Flagged: 'alert', Escalated: 'up', Removed: 'trash', Dismissed: 'check', Restored: 'archive' };
    return `<span class="badge badge-${map[s] || 'neutral'}">${icon(ic[s] || 'clock')}${esc(s)}</span>`;
  }
  function idLine(c) {
    const parts = [];
    parts.push(c.messageId ? `Message ${c.messageId}` : 'Message ID not exposed');
    if (c.threadId) parts.push(`Thread ${c.threadId}`);
    if (c.projectId) parts.push(`Project ${c.projectId}`);
    return parts.join(' · ');
  }

  function render() {
    const focusKey = captureFocus();
    renderChrome();
    if (tab === 'queue') renderQueue(); else renderHistory();
    renderSelection();
    restoreFocus(focusKey);
    updateURL();
  }
  function captureFocus() {
    const a = document.activeElement; if (!a || !a.dataset) return null;
    for (const k of ['caseOpen', 'select', 'historyOpen', 'drill']) if (a.dataset[k]) return { k, v: a.dataset[k] };
    return null;
  }
  function restoreFocus(f) {
    if (!f) return;
    const attr = { caseOpen: 'data-case-open', select: 'data-select', historyOpen: 'data-history-open', drill: 'data-drill' }[f.k];
    const el = $(`[${attr}="${CSS.escape(f.v)}"]`); if (el && el.offsetParent !== null) el.focus({ preventScroll: true });
  }
  function renderChrome() {
    $$('[data-source]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.source === source)));
    $$('[data-state]').forEach(b => { b.setAttribute('aria-pressed', String(b.dataset.state === preview)); b.disabled = !isDemo(); });
    const tq = $('#tab-queue'), th = $('#tab-history');
    if (tq) { tq.setAttribute('aria-selected', String(tab === 'queue')); tq.tabIndex = tab === 'queue' ? 0 : -1; }
    if (th) { th.setAttribute('aria-selected', String(tab === 'history')); th.tabIndex = tab === 'history' ? 0 : -1; }
    const pq = $('#panel-queue'), ph = $('#panel-history');
    if (pq) pq.hidden = tab !== 'queue'; if (ph) ph.hidden = tab !== 'history';
    const notice = $('#demo-notice'); if (notice) { notice.hidden = !isDemo(); notice.textContent = isDemo() ? D.demoNote : ''; }
    const boundary = '#scenario-boundary'; const el = $(boundary);
    if (el) el.textContent = isDemo() ? D.demoNote : 'Captured source · 30 Oct 2026 · queue 0 / history 0.';
  }
  function renderSummary() {
    const wrap = $('#summary-cards'); if (!wrap) return;
    const ac = activeCases();
    const vals = isDemo() ? [ac.length, ac.filter(c => c.status === 'Escalated').length, ac.filter(c => c.chat === 'Project').length] : [0, 0, 0];
    const demoSubs = ['Synthetic flags on captured messages', 'Blurred in chat for senior review', 'No captured project-chat transcript'];
    wrap.innerHTML = D.source.cards.map((c, i) => `<button class="summary-card" data-drill="${c.drill}" ${!isDemo() || preview !== 'ready' ? 'disabled' : ''}><span class="summary-label">${esc(c.label)}</span><strong class="summary-value">${vals[i]}</strong><span class="summary-sub">${esc(isDemo() ? demoSubs[i] : c.sub)}</span></button>`).join('');
  }
  function renderQueue() {
    renderSummary();
    const list = $('#queue-list'), detail = $('#detail'); if (!list) return;
    const filterBar = $('#queue-filter-bar'); if (filterBar) filterBar.hidden = false;
    if (!isDemo()) {
      list.innerHTML = `<div class="panel"><section class="empty-state"><h2>${esc(D.source.queueEmptyTitle)}</h2><p>${esc(D.source.queueEmptyBody)}</p></section><div class="panel-footer"><span>${esc(D.source.queueFooter)}</span></div></div>`;
      if (detail) detail.hidden = true; setQueueFooter(0); return;
    }
    if (preview === 'loading') { list.innerHTML = `<div class="panel" aria-busy="true">${[1, 2, 3].map(() => '<div class="sk-row"><i></i><i></i><i></i></div>').join('')}</div>`; if (detail) detail.hidden = true; setQueueFooter(0); return; }
    if (preview === 'error') { list.innerHTML = `<div class="panel"><section class="state-panel error-state" role="alert"><h2>Queue unavailable</h2><p>Simulated offline error. No production health check ran.</p><button class="btn btn-secondary" data-retry>Return to demo queue</button></section></div>`; if (detail) detail.hidden = true; setQueueFooter(0); return; }
    if (preview === 'empty') { list.innerHTML = `<div class="panel"><section class="empty-state"><h2>${esc(D.source.queueEmptyTitle)}</h2><p>${esc(D.source.queueEmptyBody)}</p></section><div class="panel-footer"><span>Showing 0 of 0 demo messages</span></div></div>`; if (detail) detail.hidden = true; setQueueFooter(0); return; }
    const all = filteredCases(), items = pagedCases();
    if (!all.length) { list.innerHTML = `<div class="panel"><section class="empty-state"><h2>No messages match these filters</h2><p>Adjust search, review status or chat type. Clear does not delete messages.</p><button class="btn btn-secondary" data-clear-filters>Clear</button></section></div>`; if (detail) detail.hidden = true; setQueueFooter(0); return; }
    if (!items.some(c => c.key === currentKey)) { currentKey = items[0].key; opened.add(currentKey); }
    list.innerHTML = renderList(items);
    if (detail) { detail.hidden = false; detail.innerHTML = renderDetail(caseByKey(currentKey)); }
    setQueueFooter(all.length);
  }
  function setQueueFooter(total) {
    const foot = $('#queue-footer'); if (!foot) return;
    if (!isDemo() || preview !== 'ready' || total === 0) { foot.hidden = true; return; }
    foot.hidden = false;
    const items = pagedCases();
    $('#queue-total').textContent = `Showing ${(page - 1) * PAGE_SIZE + 1}–${(page - 1) * PAGE_SIZE + items.length} of ${total} demo messages`;
    const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    $('#queue-page-info').textContent = `Page ${page} of ${pages}`;
    $('#queue-prev').disabled = page <= 1; $('#queue-next').disabled = page >= pages;
  }
  function renderList(items) {
    if (layout === 'spine') return `<div class="case-rail" role="list" aria-label="Demo moderation queue">${items.map(c => `<div role="listitem" class="case-rail-item ${c.key === currentKey ? 'selected' : ''}"><span class="rail-top"><label class="check"><input type="checkbox" data-select="${c.key}" ${c.status !== 'Flagged' ? 'disabled' : ''} ${selected.has(c.key) ? 'checked' : ''} aria-label="Select ${esc(c.key)} for bulk dismissal preview"></label><span class="mono">${esc(c.key)}</span>${statusBadge(c.status)}</span><button class="rail-open" data-case-open="${c.key}" aria-current="${c.key === currentKey ? 'true' : 'false'}"><strong>${esc(c.sender)}</strong><span class="rail-meta">${esc(c.chat)} · ${esc(c.threadTitle)}</span><span class="rail-snippet">${esc(c.content)}</span></button></div>`).join('')}</div>`;
    if (layout === 'board') {
      const lanes = ['Project', 'Direct', 'Group'];
      return `<div class="chat-board">${lanes.map(lane => { const list = items.filter(c => c.chat === lane); return `<section class="chat-lane" aria-label="${lane} chats"><header class="lane-head"><h2>${lane}</h2><span class="badge badge-neutral">${list.length}</span></header>${list.length ? list.map(c => `<article class="case-card ${c.key === currentKey ? 'selected' : ''}"><div class="card-top"><label class="check"><input type="checkbox" data-select="${c.key}" ${c.status !== 'Flagged' ? 'disabled' : ''} ${selected.has(c.key) ? 'checked' : ''} aria-label="Select ${esc(c.key)} for bulk dismissal preview"><span class="mono">${esc(c.key)}</span></label>${statusBadge(c.status)}</div><p class="card-content">${esc(c.content)}</p><dl class="card-meta"><div><dt>Sender</dt><dd>${esc(c.sender)}</dd></div><div><dt>Thread</dt><dd>${esc(c.threadTitle)}</dd></div><div><dt>Shown</dt><dd>${esc(c.timeLabel)}</dd></div></dl><button class="btn btn-secondary" data-case-open="${c.key}">${icon('eye')}Review message</button></article>`).join('') : '<p class="lane-empty">No demo messages in this chat type.</p>'}</section>`; }).join('')}</div>`;
    }
    if (layout === 'folio') return `<div class="case-strip" role="list" aria-label="Demo case filmstrip">${items.map((c, i) => `<div role="listitem" class="strip-item ${c.key === currentKey ? 'selected' : ''}"><label class="check strip-check"><input type="checkbox" data-select="${c.key}" ${c.status !== 'Flagged' ? 'disabled' : ''} ${selected.has(c.key) ? 'checked' : ''} aria-label="Select ${esc(c.key)} for bulk dismissal preview"></label><button class="strip-open" data-case-open="${c.key}" aria-current="${c.key === currentKey ? 'true' : 'false'}"><span class="strip-index">${String(i + 1).padStart(2, '0')}</span><strong>${esc(c.sender)}</strong><span>${esc(c.chat)} · ${esc(c.threadTitle)}</span>${statusBadge(c.status)}</button></div>`).join('')}</div>`;
    const dense = layout === 'ledger';
    const rows = items.map(c => {
      const sel = c.key === currentKey;
      const check = `<label class="check"><input type="checkbox" data-select="${c.key}" ${c.status !== 'Flagged' ? 'disabled' : ''} ${selected.has(c.key) ? 'checked' : ''} aria-label="Select ${esc(c.key)} for bulk dismissal preview"></label>`;
      const main = dense
        ? `<tr class="${sel ? 'selected' : ''}"><td>${check}</td><td class="mono">${esc(c.key)}</td><td><button class="link-button" data-case-open="${c.key}" aria-expanded="${sel}">${esc(c.content.slice(0, 95))}${c.content.length > 95 ? '…' : ''}</button></td><td>${esc(c.sender)}</td><td>${esc(c.chat)}</td><td>${statusBadge(c.status)}</td><td><button class="btn btn-ghost btn-sm" data-case-open="${c.key}" aria-expanded="${sel}">${sel ? 'Collapse' : 'Expand'}</button></td></tr>`
        : `<tr class="${sel ? 'selected' : ''}"><td>${check}</td><td><button class="link-button case-link" data-case-open="${c.key}"><strong>${esc(c.sender)}</strong><span>${esc(c.content.slice(0, 120))}${c.content.length > 120 ? '…' : ''}</span></button></td><td>${esc(c.chat)}<small>${esc(c.threadTitle)}</small></td><td>${esc(c.timeLabel)}</td><td>${statusBadge(c.status)}</td><td><button class="btn btn-secondary btn-sm" data-case-open="${c.key}">Review</button></td></tr>`;
      return main + (dense && sel ? `<tr class="expanded-row"><td colspan="7">${renderDetail(c, true)}</td></tr>` : '');
    }).join('');
    return `<div class="panel"><div class="table-wrap"><table class="data-table ${dense ? 'dense' : ''}"><caption class="visually-hidden">Demo moderation queue using captured message text</caption><thead><tr>${dense ? '<th scope="col"><span class="visually-hidden">Select</span></th><th scope="col">Demo key</th><th scope="col">Message</th><th scope="col">Sender</th><th scope="col">Chat</th><th scope="col">Status</th><th scope="col"><span class="visually-hidden">Expand</span></th>' : '<th scope="col"><span class="visually-hidden">Select</span></th><th scope="col">Message</th><th scope="col">Chat / thread</th><th scope="col">Captured time</th><th scope="col">Status</th><th scope="col">Review</th>'}</tr></thead><tbody>${rows}</tbody></table></div></div>`;
  }
  function renderDetail(c, inline) {
    if (!c) return '';
    const actions = allowedActions(c).map(a => `<button class="btn ${a === 'remove' ? 'btn-danger' : a === 'dismiss' ? 'btn-primary' : 'btn-secondary'}" data-action="${a}" data-id="${c.key}">${icon(a === 'remove' ? 'trash' : a === 'escalate' ? 'up' : a === 'restore' ? 'archive' : 'check')}${a === 'dismiss' ? 'Dismiss flag' : a === 'escalate' ? 'Escalate' : a === 'remove' ? 'Remove message' : 'Restore message'}</button>`).join('');
    const context = c.context ? `<div class="context-block"><h3>Captured conversation context</h3><p class="hint">${esc(c.contextNote)}</p><ol class="context-list">${c.context.map(m => `<li class="${m.reported ? 'reported' : ''}"><span class="ctx-who">${esc(m.sender)} · ${esc(m.role)} · ${esc(m.timeLabel)}${m.reported ? ' · reported in demo' : ''}</span><p>${esc(m.content)}</p></li>`).join('')}</ol></div>` : `<p class="hint">${esc(c.contextNote)}</p>`;
    return `<article class="evidence ${inline ? 'inline-evidence' : ''}" aria-label="Evidence for ${esc(c.key)}"><header class="evidence-head"><div><p class="eyebrow">${esc(c.key)} · synthetic flag</p><h2>${esc(c.threadTitle)}</h2></div>${statusBadge(c.status)}</header><blockquote class="reported-content">${esc(c.content)}</blockquote>${context}<dl class="meta-grid"><div><dt>Sender</dt><dd>${esc(c.sender)} · ${esc(c.senderRole)}</dd></div><div><dt>Chat type</dt><dd>${esc(c.chat)}</dd></div><div><dt>Message type</dt><dd>${esc(c.type)}</dd></div><div><dt>Captured time</dt><dd>${esc(c.timeLabel)}</dd></div><div><dt>Identifiers</dt><dd class="mono">${esc(idLine(c))}</dd></div><div><dt>Message source</dt><dd>${esc(c.provenance)}</dd></div></dl><div class="action-dock"><p class="hint">Guarded local preview. No request is sent. Reporter, reason and rationale fields are not defined by the moderation Swagger contract.</p><div class="action-row">${actions}</div></div></article>`;
  }
  function renderHistory() {
    const list = $('#history-list'); if (!list) return;
    if (!isDemo()) { list.innerHTML = `<div class="panel"><section class="empty-state"><p>${esc(D.source.historyEmpty)}</p></section><div class="panel-footer"><span>${esc(D.source.historyFooter)}</span></div></div>`; setHistoryFooter(0); return; }
    if (preview === 'loading') { list.innerHTML = `<div class="panel" aria-busy="true">${[1, 2].map(() => '<div class="sk-row"><i></i><i></i><i></i></div>').join('')}</div>`; setHistoryFooter(0); return; }
    if (preview === 'error') { list.innerHTML = `<div class="panel"><section class="state-panel error-state" role="alert"><h2>History unavailable</h2><p>Simulated offline error. No audit service was contacted.</p><button class="btn btn-secondary" data-retry>Return to demo history</button></section></div>`; setHistoryFooter(0); return; }
    const all = filteredEvents(), items = pagedEvents();
    if (!all.length) { list.innerHTML = `<div class="panel"><section class="empty-state"><h2>No local moderation history yet</h2><p>Actions you preview in this browser will appear here. This is not a production audit log.</p></section><div class="panel-footer"><span>0 local preview events</span></div></div>`; setHistoryFooter(0); return; }
    const rows = items.map(e => {
      const open = historyOpen === e.id;
      const eligible = canRestore(e.key) && (e.action === 'Removed' || e.action === 'Escalated');
      return `<tr><td>${statusBadge(e.action)}</td><td>${esc(e.content.slice(0, 100))}${e.content.length > 100 ? '…' : ''}<small>${esc(e.sender)} · ${esc(e.threadTitle)}</small></td><td>${esc(e.chat)}</td><td>${esc(e.actor)}</td><td class="mono">${esc(e.timeLabel)}</td><td><button class="btn btn-ghost btn-sm" data-history-open="${e.id}" aria-expanded="${open}">${open ? 'Hide' : 'Details'}</button></td></tr>${open ? `<tr class="expanded-row"><td colspan="6"><div class="history-detail"><h3>${esc(e.id)} · ${esc(e.action)}</h3><p><strong>Original content:</strong> ${esc(e.originalContent || e.content)}</p>${e.editedContent ? `<p><strong>Edited restoration text:</strong> ${esc(e.editedContent)}</p>` : ''}${e.note ? `<p><strong>Local note (not sent):</strong> ${esc(e.note)}</p>` : ''}<p class="hint">Local preview only — no request, permission check or audit write.</p>${eligible ? `<button class="btn btn-secondary" data-restore-message="${esc(e.key)}">${icon('archive')}Restore message</button>` : ''}</div></td></tr>` : ''}`;
    }).join('');
    list.innerHTML = `<div class="panel"><div class="table-wrap"><table class="data-table"><caption class="visually-hidden">Local moderation preview history</caption><thead><tr><th scope="col">Action</th><th scope="col">Message</th><th scope="col">Chat</th><th scope="col">Actor</th><th scope="col">When</th><th scope="col"><span class="visually-hidden">Details</span></th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
    setHistoryFooter(all.length);
  }
  function setHistoryFooter(total) {
    const foot = $('#history-footer'); if (!foot) return;
    if (!isDemo() || total === 0) { foot.hidden = true; return; }
    foot.hidden = false;
    const items = pagedEvents();
    $('#history-total').textContent = `Showing ${(histPage - 1) * PAGE_SIZE + 1}–${(histPage - 1) * PAGE_SIZE + items.length} of ${total} local preview events`;
    const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    $('#history-page-info').textContent = `Page ${histPage} of ${pages}`;
    $('#history-prev').disabled = histPage <= 1; $('#history-next').disabled = histPage >= pages;
  }
  function renderSelection() {
    const bar = $('#selection-bar'); if (!bar) return;
    const ids = [...selected].filter(k => { const c = caseByKey(k); return c && c.active && c.status === 'Flagged'; });
    selected = new Set(ids);
    const unopened = ids.filter(k => !opened.has(k));
    bar.hidden = !isDemo() || preview !== 'ready' || tab !== 'queue' || ids.length === 0;
    const count = $('#selection-count'); if (count) count.textContent = `${ids.length} selected`;
    const note = $('#selection-note'); if (note) note.textContent = unopened.length ? `${unopened.length} selected message${unopened.length === 1 ? '' : 's'} still need review opened.` : 'Bulk preview is dismissal only. No batch endpoint is documented.';
    const bulk = $('#bulk-dismiss'); if (bulk) bulk.disabled = ids.length === 0 || unopened.length > 0;
    $$('[data-select]').forEach(cb => { cb.checked = selected.has(cb.dataset.select); });
  }
  function syncControls() {
    const map = { 'queue-search': filters.q, 'filter-status': filters.status, 'filter-chat': filters.chat, 'history-search': histFilters.q, 'history-action': histFilters.action };
    Object.entries(map).forEach(([id, v]) => { const el = $('#' + id); if (el) el.value = v; });
  }
  function updateURL() {
    try {
      if (!/^https?:$/.test(location.protocol)) return;
      const p = new URLSearchParams(); p.set('tab', tab); p.set('source', source);
      if (isDemo() && preview !== 'ready') p.set('state', preview);
      if (filters.q) p.set('q', filters.q); if (filters.status !== 'all') p.set('status', filters.status); if (filters.chat !== 'all') p.set('chat', filters.chat);
      if (histFilters.q) p.set('hq', histFilters.q); if (histFilters.action !== 'all') p.set('haction', histFilters.action);
      history.replaceState(null, '', location.pathname + '?' + p.toString());
    } catch (e) { }
  }
  function readURL() {
    try {
      const p = new URLSearchParams(location.search);
      if (p.get('tab') === 'history') tab = 'history';
      if (p.get('source') === 'demo') source = 'demo';
      if (['ready', 'loading', 'error', 'empty'].includes(p.get('state'))) preview = p.get('state');
      filters.q = p.get('q') || ''; filters.status = ['all', 'Flagged', 'Escalated'].includes(p.get('status')) ? p.get('status') : 'all'; filters.chat = ['all', 'Project', 'Direct', 'Group'].includes(p.get('chat')) ? p.get('chat') : 'all';
      histFilters.q = p.get('hq') || ''; histFilters.action = ['all', 'Flagged', 'Escalated', 'Removed', 'Dismissed', 'Restored'].includes(p.get('haction')) ? p.get('haction') : 'all';
    } catch (e) { }
  }

  /* dialogs */
  function ensureDialogs() {
    if ($('#review-dialog')) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = `<dialog id="review-dialog" class="modal" aria-labelledby="review-title"><div class="modal-head"><h2 id="review-title">Review action</h2><button class="icon-button" data-close-dialog aria-label="Close review dialog">${icon('x')}</button></div><div id="review-body" class="modal-body"></div><div id="review-foot" class="modal-foot"></div></dialog>
    <dialog id="help-dialog" class="modal modal-sm" aria-labelledby="help-title"><div class="modal-head"><h2 id="help-title">Keyboard and preview safety</h2><button class="icon-button" data-close-dialog aria-label="Close help">${icon('x')}</button></div><div class="modal-body"><dl class="key-list"><div><dt><kbd>J</kbd> / <kbd>K</kbd></dt><dd>Move through demo cases</dd></div><div><dt><kbd>X</kbd></dt><dd>Select a flagged case for bulk dismissal preview</dd></div><div><dt><kbd>Enter</kbd></dt><dd>Open guarded review</dd></div><div><dt><kbd>/</kbd></dt><dd>Focus search</dd></div><div><dt><kbd>?</kbd></dt><dd>Open help</dd></div></dl><p class="hint">Shortcuts are ignored while typing or inside dialogs. All actions are local previews; no request, permission check or audit write occurs.</p></div><div class="modal-foot"><button class="btn btn-primary" data-close-dialog>Close</button></div></dialog>`;
    document.body.appendChild(wrap);
    $$('dialog').forEach(d => {
      d.addEventListener('click', e => { if (e.target === d) d.close(); });
      d.addEventListener('close', () => { dialogState = null; let t = opener && opener.isConnected ? opener : null; if (!t && currentKey) t = $(`[data-case-open="${CSS.escape(currentKey)}"]`); if (!t) t = $('#main'); if (t && t.focus) t.focus({ preventScroll: true }); opener = null; });
    });
  }
  function openDialog(d) { opener = document.activeElement; ensureDialogs(); d.showModal(); }
  function openReview(action, keys) {
    if (!isDemo() || preview !== 'ready') { announce('Open the workflow demo to preview actions.'); return; }
    const targets = keys.map(caseByKey).filter(Boolean); if (!targets.length) return;
    for (const c of targets) {
      if (action === 'restore') { if (!canRestore(c.key)) { announce('Only removed or escalated messages can be restored.'); return; } }
      else { if (!c.active) return; if (action && !allowedActions(c).includes(action)) { announce('That action is not available for the current state.'); return; } }
    }
    targets.forEach(c => opened.add(c.key));
    const bulk = targets.length > 1;
    dialogState = { step: 1, action: action || allowedActions(targets[0])[0], targets, bulk, note: '', ack: false, edited: targets[0].content, busy: false };
    ensureDialogs(); renderReview(); openDialog($('#review-dialog'));
  }
  function renderReview() {
    const s = dialogState; if (!s) return;
    const title = $('#review-title'), body = $('#review-body'), foot = $('#review-foot');
    title.textContent = s.step === 1 ? (s.bulk ? 'Bulk dismiss preview' : 'Review action') : 'Confirm local preview';
    if (s.step === 1) {
      const options = s.bulk ? ['dismiss'] : (s.action === 'restore' || canRestore(s.targets[0].key) ? ['restore'] : allowedActions(s.targets[0]));
      const actionField = s.bulk ? `<p><strong>Action:</strong> Dismissed</p>` : `<div class="field"><label for="review-action">Action</label><select id="review-action" class="input">${options.map(a => `<option value="${a}" ${a === s.action ? 'selected' : ''}>${ACTION_LABEL[a]}</option>`).join('')}</select></div>`;
      body.innerHTML = `<p class="modal-kicker">Local preview · no request sent</p>${actionField}<p class="notice notice-info">${icon('alert')}<span>${esc(EFFECT[s.action])}</span></p><h3>Message${s.targets.length > 1 ? 's' : ''}</h3><ul class="ref-list">${s.targets.map(c => `<li><span class="mono">${esc(c.key)}</span><p>${esc(c.content)}</p><small>${esc(c.sender)} · ${esc(c.chat)} · ${esc(c.threadTitle)} · ${esc(c.provenance)}</small></li>`).join('')}</ul>${s.targets[0].context ? `<details class="context-details" open><summary>Captured conversation context</summary><ol class="context-list">${s.targets[0].context.map(m => `<li class="${m.reported ? 'reported' : ''}"><span class="ctx-who">${esc(m.sender)} · ${esc(m.timeLabel)}</span><p>${esc(m.content)}</p></li>`).join('')}</ol></details>` : ''}<div class="field check-field"><label class="check"><input type="checkbox" id="review-ack" ${s.ack ? 'checked' : ''}><span>I have reviewed the message content${s.targets[0].context ? ' and available captured context' : ''}.</span></label></div><div class="field"><label for="review-note">Local note <span class="hint">(optional, not sent)</span></label><textarea id="review-note" class="input" rows="2" maxlength="500">${esc(s.note)}</textarea><p class="hint">Swagger does not define a moderation rationale field. This note stays in the browser preview only.</p></div>${s.action === 'restore' ? `<div class="field"><label for="restore-content">Restored text</label><textarea id="restore-content" class="input" rows="3" maxlength="5000">${esc(s.edited)}</textarea><p class="hint">Leave unchanged to restore original text. Optional body.content is described in Swagger but has no declared requestBody schema.</p></div>` : ''}<div id="review-errors" class="error-summary" role="alert" tabindex="-1" hidden></div>`;
      foot.innerHTML = `<button class="btn btn-secondary" data-close-dialog>Cancel</button><button class="btn btn-primary" id="review-next">Review confirmation</button>`;
      const act = $('#review-action'); if (act) act.addEventListener('change', () => { s.action = act.value; s.ack = $('#review-ack').checked; s.note = $('#review-note').value; if (s.action === 'restore') s.edited = s.targets[0].content; renderReview(); });
      $('#review-next').addEventListener('click', validateReview);
    } else {
      body.innerHTML = `<p class="modal-kicker">Confirmation required</p><dl class="confirm-grid"><div><dt>Action</dt><dd>${esc(ACTION_LABEL[s.action])}</dd></div><div><dt>Demo keys</dt><dd class="mono">${s.targets.map(c => esc(c.key)).join(', ')}</dd></div>${s.note ? `<div><dt>Local note (not sent)</dt><dd>${esc(s.note)}</dd></div>` : ''}${s.action === 'restore' ? `<div><dt>Restored text</dt><dd>${esc(s.edited)}</dd></div>` : ''}</dl><p class="notice notice-warning">${icon('alert')}<span>${esc(EFFECT[s.action])} This updates only the local demo.</span></p><p class="hint">No production request, permission check, notification or audit record will be created.</p>`;
      foot.innerHTML = `<button class="btn btn-secondary" id="review-back">Back</button><button class="btn btn-secondary" data-close-dialog>Cancel</button><button class="btn ${s.action === 'remove' ? 'btn-danger' : 'btn-primary'}" id="confirm-preview">Confirm preview</button>`;
      $('#review-back').addEventListener('click', () => { s.step = 1; renderReview(); });
      $('#confirm-preview').addEventListener('click', confirmReview);
    }
  }
  function validateReview() {
    const s = dialogState; if (!s || s.busy) return;
    s.ack = $('#review-ack').checked; s.note = $('#review-note').value;
    if (s.action === 'restore') s.edited = $('#restore-content').value;
    const errors = [];
    if (!s.ack) errors.push('Acknowledge that you reviewed the message content.');
    if (s.action === 'restore' && !s.edited.trim()) errors.push('Restored text cannot be empty.');
    const box = $('#review-errors');
    if (errors.length) { box.hidden = false; box.innerHTML = '<strong>Check the review details:</strong><ul>' + errors.map(e => `<li>${esc(e)}</li>`).join('') + '</ul>'; box.focus(); return; }
    box.hidden = true; s.step = 2; renderReview();
  }
  function confirmReview() {
    const s = dialogState; if (!s || s.busy) return;
    s.busy = true; $$('#review-foot button').forEach(b => b.disabled = true); $('#confirm-preview').textContent = 'Applying local preview…';
    setTimeout(() => { applyDecision(s); const d = $('#review-dialog'); if (d && d.open) d.close(); }, 200);
  }
  function applyDecision(s) {
    const batchId = 'BATCH-' + (++seq); const now = new Date(); const undoItems = [];
    s.targets.forEach((c, i) => {
      undoItems.push({ key: c.key, prevActive: c.active, prevStatus: c.status });
      if (s.action === 'dismiss') { c.active = false; c.status = 'Dismissed'; }
      else if (s.action === 'escalate') { c.status = 'Escalated'; }
      else if (s.action === 'remove') { c.active = false; c.status = 'Removed'; }
      else if (s.action === 'restore') { c.active = false; c.status = 'Restored'; }
      const edited = s.action === 'restore' && s.edited !== c.content ? s.edited : null;
      session.push({ id: 'LOCAL-' + String(seq).padStart(3, '0') + '-' + (i + 1), seq: Date.now() + i, key: c.key, action: ACTION_LABEL[s.action], content: edited || c.content, originalContent: c.content, editedContent: edited, sender: c.sender, threadTitle: c.threadTitle, chat: c.chat, actor: 'Local preview', timeLabel: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' local', note: s.note.trim(), batchId });
      selected.delete(c.key);
    });
    const undoable = s.action === 'dismiss' || s.action === 'remove';
    undoState = undoable ? { batchId, items: undoItems, expires: Date.now() + 10000 } : null;
    if (s.targets.some(c => c.key === currentKey) && s.action !== 'escalate') { const remaining = filteredCases(); currentKey = remaining.length ? remaining[0].key : null; if (currentKey) opened.add(currentKey); }
    showReceipt(s.action, s.targets.length, undoable); startUndoTimer();
    announce(`${ACTION_LABEL[s.action]} ${s.targets.length} local preview${s.targets.length === 1 ? '' : 's'} applied.`); render();
  }
  function showReceipt(action, count, undoable) {
    const r = $('#receipt'); if (!r) return; r.hidden = false;
    r.innerHTML = `<div class="receipt-card" role="status"><div><strong>Preview applied — ${esc(ACTION_LABEL[action])} ${count} message${count === 1 ? '' : 's'}</strong><p>No request sent, no permission checked, no audit record written.</p></div><div class="receipt-actions">${undoable ? `<button class="btn btn-secondary" id="undo-preview">Undo preview <span id="undo-count" class="mono">10s</span></button>` : ''}${currentKey ? `<button class="btn btn-primary" data-case-open="${currentKey}">Review next</button>` : ''}<button class="icon-button" data-dismiss-receipt aria-label="Dismiss receipt">${icon('x')}</button></div></div>`;
    const u = $('#undo-preview'); if (u) u.addEventListener('click', undoPreview);
  }
  function startUndoTimer() {
    clearInterval(undoTimer); if (!undoState) return;
    undoTimer = setInterval(() => {
      const left = Math.max(0, Math.ceil((undoState.expires - Date.now()) / 1000)); const el = $('#undo-count'); if (el) el.textContent = left + 's';
      if (left <= 0) { clearInterval(undoTimer); const u = $('#undo-preview'); if (u) u.remove(); undoState = null; }
    }, 250);
  }
  function undoPreview() {
    if (!undoState || Date.now() > undoState.expires) { announce('Undo window expired.'); return; }
    const u = undoState; u.items.forEach(it => { const c = caseByKey(it.key); if (c) { c.active = it.prevActive; c.status = it.prevStatus; } });
    session = session.filter(e => e.batchId !== u.batchId); undoState = null; clearInterval(undoTimer);
    const r = $('#receipt'); if (r) r.innerHTML = `<div class="receipt-card" role="status"><div><strong>Undo applied — local demo restored</strong><p>Only the local preview was reversed.</p></div><button class="icon-button" data-dismiss-receipt aria-label="Dismiss receipt">${icon('x')}</button></div>`;
    announce('Local preview undone.'); render();
  }

  function bind() {
    document.addEventListener('click', e => {
      const t = e.target.closest('[data-source],[data-state],[data-tab],[data-drill],[data-case-open],[data-action],[data-restore-message],[data-history-open],[data-clear-filters],[data-retry],[data-select-page],[data-clear-selection],[data-bulk],[data-help],[data-close-dialog],[data-dismiss-receipt],[data-page-prev],[data-page-next],[data-history-prev],[data-history-next],[data-signout]');
      if (!t) return;
      if (t.dataset.source) { source = t.dataset.source; preview = 'ready'; selected.clear(); page = 1; histPage = 1; const d = t.closest('details.preview-options'); if (d) d.open = false; render(); return; }
      if (t.dataset.state) { if (!isDemo()) return; preview = t.dataset.state; selected.clear(); const d = t.closest('details.preview-options'); if (d) d.open = false; render(); return; }
      if (t.dataset.tab) { tab = t.dataset.tab; render(); return; }
      if (t.dataset.drill) { if (!isDemo()) return; const k = t.dataset.drill; filters = { q: '', status: k === 'escalated' ? 'Escalated' : 'all', chat: k === 'project' ? 'Project' : 'all' }; page = 1; selected.clear(); syncControls(); render(); return; }
      if (t.dataset.caseOpen) { openCase(t.dataset.caseOpen, true); return; }
      if (t.dataset.action) { openReview(t.dataset.action, [t.dataset.id]); return; }
      if (t.dataset.restoreMessage) { restoreFromHistory(t.dataset.restoreMessage); return; }
      if (t.dataset.historyOpen) { historyOpen = historyOpen === t.dataset.historyOpen ? null : t.dataset.historyOpen; renderHistory(); return; }
      if (t.hasAttribute('data-clear-filters')) { if (tab === 'queue') filters = { q: '', status: 'all', chat: 'all' }; else histFilters = { q: '', action: 'all' }; page = 1; histPage = 1; selected.clear(); syncControls(); render(); return; }
      if (t.hasAttribute('data-retry')) { preview = 'ready'; render(); announce('Returned to the demo. No network request was made.'); return; }
      if (t.hasAttribute('data-select-page')) { pagedCases().forEach(c => { if (c.status === 'Flagged') selected.add(c.key); }); renderSelection(); return; }
      if (t.hasAttribute('data-clear-selection')) { selected.clear(); renderSelection(); return; }
      if (t.hasAttribute('data-bulk')) { openReview('dismiss', [...selected]); return; }
      if (t.hasAttribute('data-help')) { ensureDialogs(); openDialog($('#help-dialog')); return; }
      if (t.hasAttribute('data-close-dialog')) { const d = t.closest('dialog'); if (d) d.close(); return; }
      if (t.hasAttribute('data-dismiss-receipt')) { const r = $('#receipt'); if (r) r.hidden = true; return; }
      if (t.hasAttribute('data-page-prev')) { page = Math.max(1, page - 1); selected.clear(); render(); return; }
      if (t.hasAttribute('data-page-next')) { page += 1; selected.clear(); render(); return; }
      if (t.hasAttribute('data-history-prev')) { histPage = Math.max(1, histPage - 1); historyOpen = null; render(); return; }
      if (t.hasAttribute('data-history-next')) { histPage += 1; historyOpen = null; render(); return; }
      if (t.hasAttribute('data-signout')) { announce('Sign out is not available in the offline design preview.'); return; }
    });
    document.addEventListener('change', e => {
      const el = e.target;
      if (el.matches('[data-select]')) { toggleSelect(el.dataset.select); return; }
      if (el.id === 'filter-status') { filters.status = el.value; page = 1; selected.clear(); render(); }
      if (el.id === 'filter-chat') { filters.chat = el.value; page = 1; selected.clear(); render(); }
      if (el.id === 'history-action') { histFilters.action = el.value; histPage = 1; historyOpen = null; render(); }
    });
    document.addEventListener('input', e => {
      if (e.target.id === 'queue-search') { filters.q = e.target.value; page = 1; selected.clear(); render(); }
      if (e.target.id === 'history-search') { histFilters.q = e.target.value; histPage = 1; historyOpen = null; render(); }
    });
    const tablist = $('[role="tablist"]');
    if (tablist) tablist.addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault(); tab = e.key === 'Home' ? 'queue' : e.key === 'End' ? 'history' : (tab === 'queue' ? 'history' : 'queue'); render(); const b = tab === 'queue' ? $('#tab-queue') : $('#tab-history'); if (b) b.focus();
    });
    document.addEventListener('keydown', e => {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = (e.target.tagName || '').toLowerCase();
      if (['input', 'textarea', 'select'].includes(tag) || e.target.isContentEditable || $('dialog[open]')) return;
      if (e.key === '?') { e.preventDefault(); ensureDialogs(); openDialog($('#help-dialog')); return; }
      if (e.key === '/') { e.preventDefault(); const el = tab === 'queue' ? $('#queue-search') : $('#history-search'); if (el) { el.focus(); el.select(); } return; }
      if (!isDemo() || preview !== 'ready' || tab !== 'queue') return;
      const items = pagedCases(); if (!items.length) return;
      const idx = Math.max(0, items.findIndex(c => c.key === currentKey));
      if (e.key === 'j' || e.key === 'J') { e.preventDefault(); openCase(items[Math.min(items.length - 1, idx + 1)].key, true); }
      else if (e.key === 'k' || e.key === 'K') { e.preventDefault(); openCase(items[Math.max(0, idx - 1)].key, true); }
      else if (e.key === 'x' || e.key === 'X') { e.preventDefault(); toggleSelect(items[idx].key); }
      else if (e.key === 'Enter') { e.preventDefault(); openReview(null, [items[idx].key]); }
    });
  }
  function openCase(key, focus) { const c = caseByKey(key); if (!c || !c.active) return; currentKey = key; opened.add(key); render(); if (focus) { const el = $(`[data-case-open="${CSS.escape(key)}"]`); if (el) el.focus({ preventScroll: true }); } announce(`Opened ${key}.`); }
  function toggleSelect(key) { const c = caseByKey(key); if (!c || !c.active || c.status !== 'Flagged') { announce('Escalated or inactive messages cannot enter bulk dismissal preview.'); return; } if (selected.has(key)) selected.delete(key); else selected.add(key); renderSelection(); }
  function restoreFromHistory(key) {
    const e = latestEvent(key); const c = caseByKey(key); if (!e || !c || !canRestore(key)) return;
    currentKey = key; opened.add(key); openReview('restore', [key]);
  }
  function init() {
    ensureDialogs();
    if (!$('#live')) { const l = document.createElement('div'); l.id = 'live'; l.className = 'visually-hidden'; l.setAttribute('aria-live', 'polite'); document.body.appendChild(l); }
    readURL(); syncControls(); bind(); render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
