/* F19 shared shell behavior: theme, persistent collapse, mobile drawer. No network. */
(function () {
  'use strict';
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function init() {
    const app = document.querySelector('.app');
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('menu');
    const collapse = document.getElementById('collapse');
    const overlay = document.getElementById('nav-overlay');
    const theme = document.getElementById('theme');
    const search = document.getElementById('global-search');
    if (!app || !sidebar) return;
    const desktop = () => matchMedia('(min-width:901px)').matches;
    function setCollapsed(v) {
      app.classList.toggle('collapsed', v);
      if (collapse) {
        collapse.setAttribute('aria-expanded', String(!v));
        collapse.setAttribute('aria-label', v ? 'Expand sidebar' : 'Collapse sidebar');
        const t = collapse.querySelector('.collapse-text'); if (t) t.textContent = v ? 'Expand' : 'Collapse';
      }
      store('nl-sidebar', v ? 'collapsed' : 'expanded');
    }
    setCollapsed(store('nl-sidebar') === 'collapsed');
    if (collapse) collapse.addEventListener('click', () => setCollapsed(!app.classList.contains('collapsed')));
    let lastFocus = null;
    function openNav() {
      lastFocus = document.activeElement;
      document.body.classList.add('nav-open');
      menu.setAttribute('aria-expanded', 'true');
      sidebar.removeAttribute('aria-hidden');
      const first = sidebar.querySelector('a,button'); if (first) first.focus();
    }
    function closeNav() {
      document.body.classList.remove('nav-open');
      if (menu) menu.setAttribute('aria-expanded', 'false');
      if (!desktop()) sidebar.setAttribute('aria-hidden', 'true');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    if (menu) menu.addEventListener('click', () => document.body.classList.contains('nav-open') ? closeNav() : openNav());
    if (overlay) overlay.addEventListener('click', closeNav);
    document.addEventListener('keydown', (e) => {
      if (!document.body.classList.contains('nav-open')) return;
      if (e.key === 'Escape') { e.preventDefault(); closeNav(); return; }
      if (e.key === 'Tab') {
        const f = [...sidebar.querySelectorAll('a,button')].filter(x => !x.disabled);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    function syncMobile() {
      if (desktop()) { document.body.classList.remove('nav-open'); sidebar.removeAttribute('aria-hidden'); if (menu) menu.setAttribute('aria-expanded', 'false'); }
      else if (!document.body.classList.contains('nav-open')) sidebar.setAttribute('aria-hidden', 'true');
    }
    addEventListener('resize', syncMobile); syncMobile();
    function syncTheme() {
      const dark = document.documentElement.classList.contains('dark');
      if (theme) { theme.setAttribute('aria-pressed', String(dark)); theme.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme'); }
    }
    if (theme) theme.addEventListener('click', () => {
      const dark = document.documentElement.classList.toggle('dark');
      store('nl-theme', dark ? 'dark' : 'light'); syncTheme();
    });
    syncTheme();
    if (search) search.addEventListener('click', () => {
      const q = document.getElementById('queue-search');
      const h = document.getElementById('history-search');
      const target = (h && !h.closest('[hidden]') && h.offsetParent !== null) ? h : q;
      if (target) { target.focus(); target.select(); }
    });
    window.F19Shell = { setCollapsed, closeNav };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
