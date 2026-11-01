/* F02 shared shell and local-only prototype interactions. No API calls or page generation. */
(function(){
  'use strict';
  var root=document.documentElement, body=document.body;
  var stateSelect=document.getElementById('display-state');
  var period=document.getElementById('period');
  var content=document.getElementById('snapshot-content');
  var statePanel=document.getElementById('state-panel');
  var stateTitle=document.getElementById('state-title');
  var stateCopy=document.getElementById('state-copy');
  var skeleton=document.getElementById('state-skeleton');
  var stateReset=document.getElementById('state-reset');
  var degraded=document.getElementById('degraded-banner');
  var announce=document.getElementById('announcement');
  var command=document.getElementById('command-dialog');
  var commandInput=document.getElementById('command-search');
  var preview=document.getElementById('preview-dialog');
  var previewTitle=document.getElementById('preview-title');
  var previewCount=document.getElementById('preview-count');
  var previewCopy=document.getElementById('preview-copy');
  var previewRoute=document.getElementById('preview-route');
  var previewJump=document.getElementById('preview-jump');
  var menu=document.getElementById('nav-open');
  var sidebar=document.getElementById('side-nav');
  var theme=document.getElementById('theme-toggle');
  var qs=new URLSearchParams(location.search);

  function status(message){if(announce)announce.textContent=message;}
  function themeLabel(){
    if(!theme)return;
    var isDark=root.classList.contains('dark');
    theme.setAttribute('aria-label',isDark?'Switch to light mode':'Switch to dark mode');
    theme.setAttribute('title',isDark?'Switch to light mode':'Switch to dark mode');
    theme.setAttribute('aria-pressed',String(isDark));
  }
  themeLabel();
  if(theme)theme.addEventListener('click',function(){
    root.classList.toggle('dark');
    try{localStorage.setItem('nl-theme',root.classList.contains('dark')?'dark':'light');}catch(e){}
    themeLabel();status(root.classList.contains('dark')?'Dark theme selected':'Light theme selected');
  });

  function syncDrawer(){
    if(!sidebar)return;
    var hidden=window.innerWidth<1024&&!body.classList.contains('nav-open');
    if(hidden&&sidebar.contains(document.activeElement)&&menu)menu.focus();
    sidebar.inert=hidden;
  }
  function closeNav(restore){
    body.classList.remove('nav-open');
    if(menu)menu.setAttribute('aria-expanded','false');
    syncDrawer();
    if(restore&&menu)menu.focus();
  }
  syncDrawer();
  if(menu)menu.addEventListener('click',function(){
    var open=!body.classList.contains('nav-open');
    body.classList.toggle('nav-open',open);menu.setAttribute('aria-expanded',String(open));
    syncDrawer();
    if(open){var first=sidebar.querySelector('a,button');if(first)first.focus();}
  });
  var scrim=document.getElementById('drawer-scrim');
  if(scrim)scrim.addEventListener('click',function(){closeNav(true);});
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&body.classList.contains('nav-open')){e.preventDefault();closeNav(true);}
    if(e.key==='Tab'&&body.classList.contains('nav-open')&&window.innerWidth<1024){
      var focusable=Array.from(sidebar.querySelectorAll('a[href],button:not([disabled])')).filter(function(x){return x.offsetParent!==null;});
      if(focusable.length){var first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
    }
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand();}
  });
  window.addEventListener('resize',function(){if(window.innerWidth>=1024)closeNav(false);else syncDrawer();});
  // Keep icon-only navigation understandable to mouse and keyboard users when collapsed.
  if(sidebar)sidebar.querySelectorAll('.nav-item').forEach(function(item){var label=item.querySelector('.nav-copy');if(label)item.title=label.textContent.trim();});
  var collapse=document.querySelector('[data-action="collapse"]');
  function syncCollapse(){
    if(!collapse)return;
    var collapsed=root.classList.contains('nav-collapsed');
    collapse.setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');
    collapse.setAttribute('title',collapsed?'Expand sidebar':'Collapse sidebar');
    collapse.setAttribute('aria-expanded',String(!collapsed));
    var label=collapse.querySelector('.collapse-label');if(label)label.textContent=collapsed?'Expand':'Collapse';
  }
  syncCollapse();
  if(collapse)collapse.addEventListener('click',function(){
    if(window.innerWidth<1024){closeNav(true);return;}
    var collapsed=root.classList.toggle('nav-collapsed');
    try{localStorage.setItem('nl-sidebar',collapsed?'collapsed':'expanded');}catch(e){}
    syncCollapse();status(collapsed?'Sidebar collapsed; the dashboard uses the available width.':'Sidebar expanded.');
  });

  function paintState(){
    if(!stateSelect||!period||!content||!statePanel)return;
    var choice=stateSelect.value, range=period.value;
    var alternate=range!=='30d';
    var showing=choice==='snapshot'&&!alternate;
    var showingDegraded=choice==='degraded'&&!alternate;
    content.hidden=!(showing||showingDegraded);
    degraded.hidden=!showingDegraded;
    statePanel.hidden=showing||showingDegraded;
    document.querySelectorAll('[data-action="export"]').forEach(function(b){b.disabled=!showing&&!showingDegraded;});
    if(showing||showingDegraded){status(showingDegraded?'Degraded demonstration shown; historical data only':'Historical snapshot shown');return;}
    var title='',copy='';skeleton.hidden=true;
    if(alternate){
      title='This range is not available in full';
      copy='Only the 30-day capture is complete in this offline prototype. Partial aggregates exist for other periods, but their full series and queue state are not available.';
    }else if(choice==='loading'){
      title='Loading state · demonstration';copy='A real dashboard would request the selected period. This offline prototype makes no network calls.';skeleton.hidden=false;
    }else if(choice==='empty'){
      title='No data for this view';copy='This is a simulated empty state, not a claim that the captured queues were empty. Return to the historical snapshot to review the available records.';
    }else if(choice==='error'){
      title='Dashboard unavailable';copy='This is a simulated error. Nothing was fetched and no operational status can be confirmed in this offline preview.';
    }else if(choice==='restricted'){
      title='Access required';copy='This simulated restricted state hides the snapshot. Access decisions in the real console are enforced by the backend.';
    }
    stateTitle.textContent=title;stateCopy.textContent=copy;stateReset.textContent=choice==='error'?'Retry snapshot':'Return to snapshot';
    var failed=choice==='error'&&!alternate;
    statePanel.setAttribute('role',failed?'alert':'status');statePanel.setAttribute('aria-live',failed?'assertive':'polite');statePanel.tabIndex=-1;
    if(failed)statePanel.focus({preventScroll:true});
    status(title);
  }
  if(stateSelect&&period){
    var requested=qs.get('state');
    if(['snapshot','degraded','loading','empty','error','restricted'].indexOf(requested)>=0)stateSelect.value=requested;
    stateSelect.addEventListener('change',function(){if(period.value!=='30d')period.value='30d';paintState();});
    period.addEventListener('change',function(){if(period.value!=='30d')stateSelect.value='snapshot';paintState();});
    paintState();
  }
  function resetState(){if(period)period.value='30d';if(stateSelect)stateSelect.value='snapshot';paintState();}
  if(stateReset)stateReset.addEventListener('click',resetState);
  document.querySelectorAll('[data-action="retry"]').forEach(function(el){el.addEventListener('click',resetState);});
  document.querySelectorAll('[data-action="dismiss-degraded"]').forEach(function(el){el.addEventListener('click',function(){degraded.hidden=true;status('Degraded demonstration notice dismissed');});});
  var host=document.querySelector('[data-host]'),transport=document.querySelector('[data-transport]');
  if(host)host.textContent=location.host||'local file';
  if(transport)transport.textContent=location.protocol==='https:'?'HTTPS · transport':location.protocol==='file:'?'Local file · offline':'HTTP · not encrypted';

  function openCommand(){
    closeNav(false);
    if(!command)return;
    if(preview&&preview.open)preview.close();
    if(!command.open){command.showModal();commandInput.value='';filterCommands();commandInput.focus();}
  }
  document.querySelectorAll('[data-action="search"]').forEach(function(el){el.addEventListener('click',openCommand);});
  function commandItems(){return command?Array.from(command.querySelectorAll('.command-item')).filter(function(el){return !el.hidden;}):[];}
  function filterCommands(){
    if(!commandInput)return;var value=commandInput.value.trim().toLowerCase(),visible=0;
    command.querySelectorAll('.command-item').forEach(function(item){item.hidden=!item.textContent.toLowerCase().includes(value);if(!item.hidden)visible++;});
    command.querySelectorAll('.command-group').forEach(function(group){var next=group.nextElementSibling,any=false;while(next&&!next.classList.contains('command-group')){if(next.classList.contains('command-item')&&!next.hidden)any=true;next=next.nextElementSibling;}group.hidden=!any;});
    var none=document.getElementById('command-empty');if(none)none.hidden=visible!==0;
  }
  if(commandInput){
    commandInput.addEventListener('input',filterCommands);
    commandInput.addEventListener('keydown',function(e){var items=commandItems();if(e.key==='ArrowDown'&&items.length){e.preventDefault();items[0].focus();}else if(e.key==='Enter'&&items.length){e.preventDefault();items[0].click();}});
    command.addEventListener('keydown',function(e){
      if(e.key!=='ArrowDown'&&e.key!=='ArrowUp')return;
      var items=commandItems(),i=items.indexOf(document.activeElement);if(i<0)return;
      e.preventDefault();items[(i+(e.key==='ArrowDown'?1:-1)+items.length)%items.length].focus();
    });
  }
  function goTo(id){
    if(command&&command.open)command.close();if(preview&&preview.open)preview.close();closeNav(false);
    if(content&&content.hidden)resetState();
    var el=document.getElementById(id);if(el){el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});el.setAttribute('tabindex','-1');el.focus({preventScroll:true});}
  }
  function openPreview(el){
    if(command&&command.open)command.close();closeNav(false);
    if(!preview)return;
    previewTitle.textContent=el.dataset.preview||el.dataset.route||'Prototype preview';
    previewCount.textContent=el.dataset.count||'';previewCount.hidden=!el.dataset.count;
    previewCopy.textContent=el.dataset.detail||'This destination is not implemented in the dashboard family. The control is a local prototype preview; no operational data is fetched or changed.';
    previewRoute.textContent=el.dataset.path?'Intended route: '+el.dataset.path+' · not opened in this prototype.':'No live operation was performed.';
    previewJump.hidden=!el.dataset.jump;
    previewJump.dataset.target=el.dataset.jump||'';
    if(!preview.open)preview.showModal();
  }
  if(previewJump)previewJump.addEventListener('click',function(){goTo(previewJump.dataset.target);});
  document.addEventListener('click',function(e){
    var close=e.target.closest('[data-close-dialog]');if(close){var d=close.closest('dialog');if(d)d.close();return;}
    var jump=e.target.closest('[data-go]');if(jump){goTo(jump.dataset.go);return;}
    var item=e.target.closest('[data-preview],[data-route]');if(item){openPreview(item);return;}
    if(e.target===command||e.target===preview)e.target.close();
  });
  document.querySelectorAll('[data-action="export"]').forEach(function(button){button.addEventListener('click',function(){
    var csv='Metric,Value,Snapshot UTC\nPending payments,16,2026-10-30 13:38\nAwaiting INR,260790.00,2026-10-30 13:38\nPending requests,11,2026-10-30 13:38\nOpen quotes,0,2026-10-30 13:38\nFlagged messages,0,2026-10-30 13:38\nContact new,17,2026-10-30 13:38\nAlerts,0,2026-10-30 13:38\nRevenue month INR,708160.00,2026-10-30 13:38\nTotal users,34,2026-10-30 13:38\nNew users,34,2026-10-30 13:38\nActive projects,4,2026-10-30 13:38\nCompleted projects,10,2026-10-30 13:38\nRequest volume,46,2026-10-30 13:38\n';
    var url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));var a=document.createElement('a');a.href=url;a.download='nestlancer-dashboard-summary-2026-10-30.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url);},1000);status('Historical summary CSV downloaded');
  });});
})();
