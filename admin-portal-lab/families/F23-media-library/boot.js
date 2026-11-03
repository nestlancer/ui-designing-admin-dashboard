/* F23 boot — ?theme= wins, then stored preference, then system. Runs before CSS paint. */
(function () {
  try {
    var q = new URLSearchParams(location.search).get('theme');
    var t = q || localStorage.getItem('nl-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (t === 'dark') document.documentElement.classList.add('dark');
    if (localStorage.getItem('nl-rail') === 'collapsed') document.documentElement.classList.add('rail-collapsed');
  } catch (e) { /* storage may be blocked; light theme remains usable */ }
})();
