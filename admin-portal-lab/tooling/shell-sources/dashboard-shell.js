/* Shared dashboard navigation. Paths resolve from this script, including file://. */
(function () {
  'use strict';
  var script = document.currentScript;
  var root = new URL('../', script.src);
  var match = location.pathname.match(/\/(F\d\d-[^/]+)\/(V\d+)\//i);
  if (!match) return;
  var family = match[1].slice(0, 3).toUpperCase();
  var requestedVersion = match[2].toUpperCase();
  var version = /^V[1-5]$/.test(requestedVersion) ? requestedVersion : 'V1';
  var groups = [
    ['Overview', [['F02','Dashboard','F02-dashboard-command-center','▦'],['F03','Global search','F03-global-search-command-palette','⌕'],['F04','Pipelines','F04-pipelines-stage-hub','◇'],['F05','User & project hubs','F05-pipeline-user-project-hubs','◎']]],
    ['Operations', [['F06','Inquiries','F06-contact-inquiries','✉'],['F07','Notifications','F07-notifications-center','♧'],['F08','Requests','F08-requests-triage','≡'],['F09','Quotes','F09-quotes-list','▤'],['F10','Quote builder','F10-quote-details-builder','✎'],['F11','Projects','F11-projects-list','▣'],['F12','Project delivery','F12-project-details-delivery','◫'],['F13','Payments','F13-payments-money-ops','₹'],['F14','Settlement & legal','F14-settlement-legal','⚖'],['F15','Users','F15-users-directory','♙'],['F16','User details & safety','F16-user-details-safety','◉'],['F17','Messages','F17-messages-home','▧'],['F18','Message thread','F18-messages-thread','▱'],['F19','Moderation','F19-moderation-queue','⚑'],['F20','Analytics','F20-analytics-hub','▥']]],
    ['Content', [['F21','Blog','F21-content-blog','▤'],['F22','Portfolio','F22-portfolio-studio','▣'],['F23','Media library','F23-media-library','▧']]],
    ['System', [['F24','System configuration','F24-system-config','⚙'],['F25','Integrations & audit','F25-integrations-audit','⌘']]]
  ];
  function url(folder) { var targetVersion = folder.indexOf('F05-') === 0 && /^V[67]$/.test(requestedVersion) ? requestedVersion : version; return new URL('families/' + folder + '/' + targetVersion + '/index.html', root).href; }
  var current = groups.flatMap(function(g){return g[1]}).find(function(i){return i[0]===family});
  var host = document.createElement('div'); host.id='shared-dashboard-shell';
  var shadow=host.attachShadow({mode:'open'});
  var links=groups.map(function(g){return '<div class="group">'+g[0]+'</div>'+g[1].map(function(i){return '<a class="item" '+(i[0]===family?'aria-current="page" ':'')+'href="'+url(i[2])+'"><span class="ico" aria-hidden="true">'+i[3]+'</span><span>'+i[1]+'</span></a>'}).join('')}).join('');
  shadow.innerHTML='<link rel="stylesheet" href="'+new URL('dashboard-shell.css',script.src).href+'"><button class="shade" aria-label="Close navigation"></button><aside class="sidebar" id="shared-nav" aria-label="Main navigation"><a class="brand" href="'+new URL('index.html',root).href+'"><img src="'+new URL('assets/logo-mark-light.svg',root).href+'" alt=""><span><strong>Nestlancer</strong><small>Admin workspace</small></span></a><nav aria-label="Dashboard sections">'+links+'</nav><div class="foot">Design lab · Offline prototype</div></aside><header class="topbar"><button class="action menu" aria-controls="shared-nav" aria-expanded="false" aria-label="Open navigation">☰</button><div class="breadcrumb">Admin <span aria-hidden="true"> / </span> <strong>'+(current?current[1]:'Dashboard')+'</strong></div><div class="actions"><a class="action" href="'+url('F03-global-search-command-palette')+'" aria-label="Search pages">⌕ <span class="search-label">&nbsp; Search pages</span></a><a class="action" href="'+url('F07-notifications-center')+'" aria-label="Notifications">♧</a><button class="action theme" aria-label="Toggle dark mode">◐</button><a class="action badge" href="'+new URL('index.html',root).href+'">Lab gallery ↗</a><div class="avatar"><span>NA</span> Nestlancer Admin</div></div></header>';
  document.body.appendChild(host);
  var sidebar=shadow.querySelector('.sidebar'), shade=shadow.querySelector('.shade'), menu=shadow.querySelector('.menu'), theme=shadow.querySelector('.theme');
  function drawer(open){sidebar.classList.toggle('open',open);shade.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));if(!open)menu.focus()}
  menu.addEventListener('click',function(){drawer(!sidebar.classList.contains('open'))}); shade.addEventListener('click',function(){drawer(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&sidebar.classList.contains('open'))drawer(false)});
  function syncTheme(){var dark=document.documentElement.classList.contains('dark');host.toggleAttribute('dark',dark);theme.setAttribute('aria-pressed',String(dark));theme.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode')}
  theme.addEventListener('click',function(){document.documentElement.classList.toggle('dark');try{localStorage.setItem('nl-theme',document.documentElement.classList.contains('dark')?'dark':'light')}catch(e){} try{var u=new URL(location.href);if(u.searchParams.has('theme')){u.searchParams.delete('theme');history.replaceState(history.state,'',u.href)}}catch(e){} syncTheme()});
  new MutationObserver(syncTheme).observe(document.documentElement,{attributes:true,attributeFilter:['class']});syncTheme();
  document.querySelectorAll('[data-legacy-dashboard-chrome]').forEach(function(node){ node.inert = true; node.setAttribute('aria-hidden', 'true'); });
  document.querySelectorAll('footer').forEach(function(node){
    node.setAttribute('data-legacy-dashboard-footer', '');
    node.inert = true;
    node.setAttribute('aria-hidden', 'true');
  });
  var footer = document.createElement('footer');
  footer.id = 'shared-dashboard-footer';
  footer.innerHTML = '<span>© 2026 Nestlancer · Design lab · Offline prototype</span> <span>Terms · Privacy · Secured · HTTPS (preview)</span>';
  var workspace = document.querySelector('[data-dashboard-workspace]');
  var main = (workspace || document).querySelector('main');
  if (main && main.parentNode) main.parentNode.insertBefore(footer, main.nextSibling);
  else if (workspace) workspace.appendChild(footer);
  else document.body.appendChild(footer);
  document.documentElement.classList.add('shared-chrome-ready');
})();
