(() => {
  const path = location.pathname;
  if (/F01-auth-login/.test(path)) return;
  if (document.querySelector('.shell > .sidebar')) return;

  const variant = path.match(/\/(V\d+)\//)?.[1] || 'V1';
  const family = path.match(/families\/([^/]+)/)?.[1] || '';
  const href = (slug) => `../../${slug}/${variant}/index.html`;

  const FAMILY_NAV = {
    'F02-dashboard-command-center': 'dashboard',
    'F03-global-search-command-palette': 'dashboard',
    'F04-pipelines-stage-hub': 'pipelines',
    'F05-pipeline-user-project-hubs': 'pipelines',
    'F06-contact-inquiries': 'contact',
    'F07-notifications-center': 'notifications',
    'F08-requests-triage': 'requests',
    'F09-quotes-list': 'quotes',
    'F10-quote-details-builder': 'quotes',
    'F11-projects-list': 'projects',
    'F12-project-details-delivery': 'projects',
    'F13-payments-money-ops': 'payments',
    'F14-settlement-legal': 'payments',
    'F15-users-directory': 'users',
    'F16-user-details-safety': 'users',
    'F17-messages-home': 'messages',
    'F18-messages-thread': 'messages',
    'F19-moderation-queue': 'moderation',
    'F20-analytics-hub': 'analytics',
    'F21-content-blog': 'blog',
    'F22-portfolio-studio': 'portfolio',
    'F23-media-library': 'media',
    'F24-system-config': 'system',
    'F25-integrations-audit': 'audit',
  };
  const active = FAMILY_NAV[family] || '';

  const NAV = [
    { title: 'Operations', items: [
      { id: 'dashboard', slug: 'F02-dashboard-command-center', label: 'Dashboard' },
      { id: 'requests', slug: 'F08-requests-triage', label: 'Requests', badge: '11' },
      { id: 'quotes', slug: 'F09-quotes-list', label: 'Quotes' },
      { id: 'payments', slug: 'F13-payments-money-ops', label: 'Payments', badge: '16' },
      { id: 'pipelines', slug: 'F04-pipelines-stage-hub', label: 'Pipelines' },
      { id: 'projects', slug: 'F11-projects-list', label: 'Projects' },
      { id: 'analytics', slug: 'F20-analytics-hub', label: 'Analytics' },
    ]},
    { title: 'People & comms', items: [
      { id: 'contact', slug: 'F06-contact-inquiries', label: 'Inquiries', badge: '17' },
      { id: 'users', slug: 'F15-users-directory', label: 'Users' },
      { id: 'messages', slug: 'F17-messages-home', label: 'Messages', badge: '21' },
      { id: 'notifications', slug: 'F07-notifications-center', label: 'Notifications', badge: '99+' },
      { id: 'moderation', slug: 'F19-moderation-queue', label: 'Moderation' },
    ]},
    { title: 'Content', items: [
      { id: 'blog', slug: 'F21-content-blog', label: 'Blog' },
      { id: 'portfolio', slug: 'F22-portfolio-studio', label: 'Portfolio' },
      { id: 'media', slug: 'F23-media-library', label: 'Media' },
    ]},
    { title: 'System', items: [
      { id: 'system', slug: 'F24-system-config', label: 'System config' },
      { id: 'audit', slug: 'F25-integrations-audit', label: 'Integrations & audit' },
    ]},
  ];

  const logo = '<svg viewBox="0 0 40 40" role="img" aria-hidden="true"><path d="M20 2 35 10.5v19L20 38 5 29.5v-19Z" fill="#0c7963"/><path d="M12 28V12l16 16V12" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function buildSidebar() {
    const aside = document.createElement('aside');
    aside.className = 'nl-sidebar';
    aside.id = 'nl-console-sidebar';
    aside.setAttribute('aria-label', 'Console sidebar');
    let navHtml = `<a class="nl-sidebar-brand" href="${href('F02-dashboard-command-center')}">${logo}<span><strong>Nestlancer</strong><span>OPERATOR CONSOLE</span></span></a><div class="nl-sidebar-scroll"><nav aria-label="Console">`;
    NAV.forEach((g) => {
      navHtml += `<div class="nl-nav-group"><span class="nl-nav-group-title">${g.title}</span>`;
      g.items.forEach((it) => {
        const cur = it.id === active ? ' aria-current="page"' : '';
        const badge = it.badge ? `<span class="nl-nav-badge">${it.badge}</span>` : '';
        navHtml += `<a class="nl-nav-link" href="${href(it.slug)}"${cur}>${it.label}${badge}</a>`;
      });
      navHtml += '</div>';
    });
    navHtml += '</nav></div><div class="nl-sidebar-foot">Static lab · demo navigation</div>';
    aside.innerHTML = navHtml;
    return aside;
  }

  let backdrop = document.querySelector('.nl-drawer-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('button');
    backdrop.type = 'button';
    backdrop.className = 'nl-drawer-backdrop';
    backdrop.hidden = true;
    backdrop.setAttribute('aria-label', 'Close navigation menu');
    document.body.appendChild(backdrop);
  }

  function setDrawer(open) {
    document.body.classList.toggle('nl-drawer-open', open);
    backdrop.hidden = !open;
    const btn = document.querySelector('.nl-menu-btn');
    if (btn) {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    }
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }

  backdrop.addEventListener('click', () => setDrawer(false));

  function ensureMenuButton(top) {
    if (!top || top.querySelector('.nl-menu-btn, .mobile-menu')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'icon-button nl-menu-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'nl-console-sidebar');
    btn.setAttribute('aria-label', 'Open navigation menu');
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    btn.addEventListener('click', () => setDrawer(!document.body.classList.contains('nl-drawer-open')));
    top.insertBefore(btn, top.firstChild);
  }

  const legacySide = document.querySelector('aside.side, .app > .side, .shell > .side');
  if (legacySide) {
    document.body.classList.add('nl-console-enhanced');
    legacySide.id = legacySide.id || 'nl-console-sidebar';
    const top = document.querySelector('header.top, .top');
    ensureMenuButton(top);
    legacySide.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => { if (innerWidth < 1024) setDrawer(false); });
    });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });
    return;
  }

  if (document.querySelector('.nl-sidebar')) return;

  const shell = document.createElement('div');
  shell.className = 'nl-shell';
  const mainCol = document.createElement('div');
  mainCol.className = 'nl-shell-main';

  const skip = document.querySelector('.skip-link');
  const nodes = [...document.body.childNodes];
  nodes.forEach((node) => {
    if (node === skip) return;
    if (node.nodeType === 1 && node.matches('script, .nl-drawer-backdrop')) return;
    mainCol.appendChild(node);
  });

  shell.append(buildSidebar(), mainCol);
  if (skip && skip.nextSibling) document.body.insertBefore(shell, skip.nextSibling);
  else document.body.insertBefore(shell, document.body.firstChild);

  ensureMenuButton(mainCol.querySelector('header.top, .top'));
  shell.querySelectorAll('.nl-nav-link').forEach((a) => {
    a.addEventListener('click', () => { if (innerWidth < 1024) setDrawer(false); });
  });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });
})();
