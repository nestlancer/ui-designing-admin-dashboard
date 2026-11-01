/* Hand-authored F03 interaction controller. Renders only filtered command rows, never page layouts/files. Offline only. */
(function(){'use strict';
const $=id=>document.getElementById(id), root=document.documentElement;
const dlg=$('command-dialog'),input=$('command-search'),list=$('command-results'),catalog=$('catalogue'),handoff=$('handoff'),help=$('help-panel'),state=$('state-panel'),live=$('announcement');
const variant=document.body.dataset.variant;
const icons={grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',layers:'<path d="m3 7 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',money:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',inbox:'<path d="m3 11 3-7h12l3 7v9H3v-9Zm0 0h5l2 4h4l2-4h5"/>',file:'<path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8M8 16h6"/>',message:'<path d="M21 15a3 3 0 0 1-3 3H9l-6 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9Z"/>',shield:'<path d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7l8-4Zm-3 9 2 2 4-4"/>',chart:'<path d="M4 3v18h17M8 16v-5M13 16V7M18 16v-9"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="9" cy="18" r="2"/>',moon:'<path d="M21 13A9 9 0 0 1 11 3a8 8 0 1 0 10 10Z"/>',bell:'<path d="M5 17h14l-2-4V8a5 5 0 0 0-10 0v5l-2 4ZM10 21h4"/>',link:'<path d="m10 14 4-4M8 16l-2 2a4 4 0 0 1-6-6l4-4M16 8l2-2a4 4 0 0 1 6 6l-4 4"/>'};
function svg(name){return '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">'+(icons[name]||icons.file)+'</svg>';}
// label, group, domain, route, API, icon, optional fixture/detail
const commands=[
['dashboard','Dashboard','Operations','Pages','/dashboard','GET /api/dashboard/overview','grid'],
['pipeline','Pipelines','Operations','Pages','/pipeline','GET /api/dashboard/overview','layers'],
['hub-users','Pipeline · User hub','Operations','People','/pipeline/users','GET /api/v1/admin/users','user'],
['hub-projects','Pipeline · Project hub','Operations','Pages','/pipeline/projects','GET /api/v1/admin/projects','layers'],
['contact','Inquiries','Operations','Queues','/contact','GET /api/v1/admin/contact','inbox'],
['requests','Requests','Operations','Queues','/requests','GET /api/v1/admin/requests','file'],
['quotes','Quotes','Operations','Queues','/quotes','GET /api/v1/admin/quotes','file'],
['projects','Projects','Operations','Pages','/projects','GET /api/v1/admin/projects','layers'],
['users','Users','Operations','People','/users','GET /api/v1/admin/users','user'],
['payments','Payments','Operations','Money','/payments','GET /api/v1/admin/payments','money'],
['accounts','Settlement accounts','Operations','Money','/payments/accounts','GET /api/v1/admin/payments/accounts','money'],
['legal','Company legal identity','Operations','Money','/payments/company-legal','GET /api/v1/admin/payments/company-legal','shield'],
['messages','Messages','Operations','Pages','/messages','GET /api/v1/admin/messages/conversations','message'],
['moderation','Moderation','Operations','Queues','/moderation','GET /api/v1/admin/messages/flagged','shield'],
['analytics','Analytics','Operations','Pages','/analytics','GET /api/dashboard/revenue','chart'],
['blog','Blog','Content','Pages','/content','GET /api/v1/admin/posts','file'],
['portfolio','Portfolio','Content','Pages','/portfolio','GET /api/v1/admin/portfolio','layers'],
['media','Media Library','Content','Pages','/media','GET /api/v1/admin/media','grid'],
['system','System Config','System','Pages','/system','GET /api/system/config','settings'],
['webhooks','Webhooks','System','Pages','/integrations','GET /api/webhooks','link'],
['audit','Audit Logs','System','Pages','/audit','GET /api/audit','file'],
['new-blog','Create blog post','Quick actions','Actions','/content/posts/new','POST /api/v1/admin/posts','file'],
['new-portfolio','New portfolio item','Quick actions','Actions','/portfolio/new','POST /api/v1/admin/portfolio','layers'],
['new-message','Message client','Quick actions','Actions','/messages/new-direct','POST /api/v1/messages/threads/direct','message'],
['new-group','New group chat','Quick actions','Actions','Local group-creation preview','POST /api/v1/messages/threads/group','message'],
['theme','Switch to dark mode','Quick actions','Actions','Local appearance preference','No API required','moon'],
['notifications','Notifications','Operations','Queues','/notifications','GET /api/v1/notifications','bell'],
['pending','Pending requests','Queues','Queues','/requests?status=inbox','GET /api/v1/admin/requests?status=inbox','inbox'],
['open-quotes','Open quotes','Queues','Queues','/quotes?status=inbox','GET /api/v1/admin/quotes?status=inbox','file'],
['new-inquiries','New inquiries','Queues','Queues','/contact?status=NEW','GET /api/v1/admin/contact?status=NEW','inbox'],
['verification','Awaiting verification','Queues','Queues','/payments?view=verification','GET /api/v1/admin/payments?status=PENDING_VERIFICATION','shield'],
['disputes','Disputes','Queues','Money','/payments/disputes','GET /api/v1/admin/payments/disputes','money'],
['karthik','Karthik Menon','Users','People','/users/01a10a2b-1039-77dd-90c9-2793dd606216','GET /api/v1/admin/users/01a10a2b-1039-77dd-90c9-2793dd606216','user','Historical fixture · karthik.menon@nestlancer.com · USER / ACTIVE · from capture 156.'],
['upi-payment','UPI Switch Integration Layer','Payments','Money','/payments/projects/01a10a2e-2015-72f9-8347-645cab96c44e','GET /api/v1/admin/payments?projectId=01a10a2e-2015-72f9-8347-645cab96c44e','money','Historical payment context · Karthik Menon · ₹36,000.00. No verified individual payment ID; this is a project-payment handoff, not a live payment detail.']
].map(a=>({id:a[0],label:a[1],group:a[2],domain:a[3],route:a[4],api:a[5],icon:a[6],detail:a[7]||''}));
let scope='All',recentOnly=false,active=0,visible=[],returnTo=$('open-command'),mode='catalogue',history=[];
try{const h=JSON.parse(localStorage.getItem('nl-f03-recents')||'[]');history=Array.isArray(h)?h.filter(x=>commands.some(c=>c.id===x)).slice(0,6):[];}catch(e){}
function announce(t){live.textContent=t;}
function escape(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function themeSync(){const dark=root.classList.contains('dark');commands.find(c=>c.id==='theme').label=dark?'Switch to light mode':'Switch to dark mode';const t=$('theme-toggle');t.setAttribute('aria-pressed',String(dark));t.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');}
function toggleTheme(){root.classList.toggle('dark');try{localStorage.setItem('nl-theme',root.classList.contains('dark')?'dark':'light');}catch(e){}themeSync();render();announce('Appearance changed locally.');}
function setMode(next){mode=next;catalog.hidden=next!=='catalogue';handoff.hidden=next!=='handoff';help.hidden=next!=='help';state.hidden=next!=='state';input.setAttribute('aria-expanded',String(next==='catalogue'));if(next!=='catalogue')input.removeAttribute('aria-activedescendant');}
function labelKind(c){return c.detail?'Snapshot':c.domain==='Actions'?'Action':c.group==='Queues'?'Queue':'Page';}
function render(){
 const q=input.value.toLocaleLowerCase().trim();let items=commands.filter(c=>(scope==='All'||c.domain===scope)&&(!recentOnly||history.includes(c.id))&&q.split(/\s+/).every(t=>(c.label+' '+c.route+' '+c.detail+' '+c.domain+' '+c.group).toLowerCase().includes(t)));
 if(recentOnly)items.sort((a,b)=>history.indexOf(a.id)-history.indexOf(b.id));
 if(variant==='V2'&&!q&&!recentOnly)items.sort((a,b)=>Number(b.group==='Queues')-Number(a.group==='Queues'));
 if(variant==='V4'&&q)items.sort((a,b)=>Number(b.label.toLowerCase().startsWith(q))-Number(a.label.toLowerCase().startsWith(q)));
 visible=items;active=Math.max(0,Math.min(active,items.length-1));list.replaceChildren();
 if(!items.length){input.removeAttribute('aria-activedescendant');const p=document.createElement('div');p.className='state-panel';p.innerHTML='<div class="state-symbol">'+svg('inbox')+'</div><h3>'+(recentOnly&&!q?'Your next jump starts here':'No results found')+'</h3><p>'+(recentOnly&&!q?'No recent commands on this browser yet. Open a destination and it will appear here.':'Try a page, queue, name or reference. Search covers the local catalogue and two historical fixtures, not live data.')+'</p><button class="btn btn-secondary" type="button" data-reset>Show all commands</button>';list.append(p);$('result-count').textContent='0 results';announce('No results. '+(scope==='All'?'':'Scope: '+scope));preview(null);return;}
 const groups=[];items.forEach(c=>{if(!groups.includes(c.group))groups.push(c.group);});
 const ordered=variant==='V4'||recentOnly?items:groups.flatMap(g=>items.filter(c=>c.group===g));visible=ordered;
 let group='';ordered.forEach((c,i)=>{if(variant!=='V4'&&!recentOnly&&group!==c.group){group=c.group;const h=document.createElement('div');h.className='group-label';h.textContent=group;h.setAttribute('role','presentation');list.append(h);}const b=document.createElement('button');b.type='button';b.className='result';b.id='cmd-'+c.id;b.setAttribute('role','option');b.setAttribute('tabindex','-1');b.setAttribute('aria-selected',String(i===active));b.dataset.command=c.id;b.innerHTML='<span class="result-icon">'+svg(c.icon)+'</span><span class="result-copy"><span class="result-title">'+escape(c.label)+'</span><span class="result-hint">'+escape(variant==='V4'?c.group+' · '+c.route:c.route)+'</span></span><span class="result-kind">'+labelKind(c)+'</span><span class="result-enter" aria-hidden="true">↵</span>';list.append(b);});
 $('result-count').textContent=visible.length+' results';select(active,false);announce(visible.length+' results'+(scope==='All'?'':', '+scope));
}
function select(n,scroll){if(!visible.length)return;active=(n+visible.length)%visible.length;list.querySelectorAll('[role=option]').forEach((b,i)=>b.setAttribute('aria-selected',String(i===active)));const c=visible[active],row=$('cmd-'+c.id);input.setAttribute('aria-activedescendant',row.id);if(scroll)row.scrollIntoView({block:'nearest',behavior:'instant'});preview(c);}
function preview(c){const p=$('inline-preview');if(!p)return;if(!c){$('preview-title').textContent='No destination selected';$('preview-route').textContent='';$('preview-api').textContent='';$('preview-copy').textContent='Broaden your search to see a destination here.';$('preview-open').disabled=true;return;}$('preview-open').disabled=false;$('preview-title').textContent=c.label;$('preview-route').textContent=c.route;$('preview-api').textContent=c.api;$('preview-copy').textContent=c.detail||'Inspect the destination, then select to open its local handoff. Nothing is submitted.';const mark=$('preview-icon');if(mark)mark.innerHTML=svg(c.icon);if(variant==='V3'&&!matchMedia('(prefers-reduced-motion: reduce)').matches)p.animate([{opacity:.5,transform:'translateY(3px)'},{opacity:1,transform:'translateY(0)'}],{duration:130});}
function run(c){if(!c)return;if(c.id==='theme'){toggleTheme();input.focus();return;}history=[c.id,...history.filter(id=>id!==c.id)].slice(0,6);try{localStorage.setItem('nl-f03-recents',JSON.stringify(history));}catch(e){}setMode('handoff');$('handoff-title').textContent=c.label;$('handoff-route').textContent=c.route;$('handoff-api').textContent=c.api;$('handoff-copy').textContent=c.detail||(c.id==='new-group'?'Demo-only creation preview. The captured /messages/new/group route returned 404. The group endpoint exists, but this lab does not create chats.':c.domain==='Actions'?'Demo-only creation entry. A production form would continue here. No post, portfolio item or message has been created.':'Local destination preview. This family builds search, not the destination page. No production navigation or API request has occurred.');$('open-dashboard').hidden=c.id!=='dashboard';$('handoff-heading').focus();if(variant==='V5'&&!matchMedia('(prefers-reduced-motion: reduce)').matches)handoff.animate([{opacity:0,transform:'translateX(18px)'},{opacity:1,transform:'translateX(0)'}],{duration:230});announce(c.label+' local preview opened.');}
function back(){setMode('catalogue');$('demo-state').value='ready';input.setAttribute('aria-busy','false');active=0;render();input.focus();}
function reset(){scope='All';recentOnly=false;input.value='';active=0;document.querySelectorAll('[data-scope]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scope==='All')));$('recent-commands').setAttribute('aria-pressed','false');$('all-commands').setAttribute('aria-pressed','true');back();}
function open(trigger){if(dlg.open)return;closeNav(false);returnTo=trigger||$('open-command');dlg.showModal();$('demo-state').value='ready';setMode('catalogue');render();input.focus();input.select();}
function close(){if(!dlg.open)return;dlg.close();input.setAttribute('aria-expanded','false');returnTo.focus();}
function showState(value){if(value==='ready'){back();return;}setMode('state');state.replaceChildren();state.className='state-panel';state.removeAttribute('role');state.removeAttribute('tabindex');input.setAttribute('aria-busy',String(value==='loading'));if(value==='loading'){state.innerHTML='<p>Loading local catalogue… <span class="mono">Demo state</span></p><div class="skeleton-row"></div><div class="skeleton-row"></div><div class="skeleton-row"></div><button class="btn btn-secondary" data-back>Restore catalogue</button>';announce('Simulated loading state. Restore catalogue to continue.');}else{state.classList.add('error-panel');state.setAttribute('role','alert');state.setAttribute('tabindex','-1');state.innerHTML='<h3>Command catalogue unavailable</h3><p>Simulated failure. Your work is unchanged. Retry restores the local catalogue; no network connection is checked.</p><button class="btn btn-secondary" data-back>Retry local catalogue</button>';state.focus();}}
function closeNav(restore){document.body.classList.remove('nav-open');$('nav-toggle').setAttribute('aria-expanded',String(innerWidth>=1024&&!root.classList.contains('nav-collapsed')));if(innerWidth<1024)$('side-nav').inert=true;if(restore)$('nav-toggle').focus();}
function syncNav(){const mobile=innerWidth<1024;$('side-nav').inert=mobile&&!document.body.classList.contains('nav-open');$('nav-toggle').setAttribute('aria-label',mobile?'Open navigation':root.classList.contains('nav-collapsed')?'Expand sidebar':'Collapse sidebar');$('nav-toggle').setAttribute('aria-expanded',String(mobile?document.body.classList.contains('nav-open'):!root.classList.contains('nav-collapsed')));}
$('nav-toggle').addEventListener('click',()=>{if(innerWidth<1024){document.body.classList.toggle('nav-open');syncNav();if(document.body.classList.contains('nav-open'))$('nav-close').focus();}else{root.classList.toggle('nav-collapsed');try{localStorage.setItem('nl-sidebar',root.classList.contains('nav-collapsed')?'collapsed':'expanded');}catch(e){}syncNav();}});
$('nav-close').addEventListener('click',()=>closeNav(true));$('nav-shade').addEventListener('click',()=>closeNav(true));window.addEventListener('resize',syncNav);
$('theme-toggle').addEventListener('click',toggleTheme);
document.querySelectorAll('[data-open-command]').forEach(b=>b.addEventListener('click',()=>open(b)));
$('close-command').addEventListener('click',close);dlg.addEventListener('cancel',e=>{e.preventDefault();if(mode!=='catalogue')back();else close();});
input.addEventListener('input',()=>{active=0;setMode('catalogue');input.setAttribute('aria-busy','false');$('demo-state').value='ready';render();});
input.addEventListener('keydown',e=>{if(mode!=='catalogue')return;if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();select(active+(e.key==='ArrowDown'?1:-1),true);}if(e.key==='Home'&&e.ctrlKey){e.preventDefault();select(0,true);}if(e.key==='End'&&e.ctrlKey){e.preventDefault();select(visible.length-1,true);}if(e.key==='Enter'){e.preventDefault();run(visible[active]);}});
list.addEventListener('click',e=>{const b=e.target.closest('[data-command]');if(b)run(commands.find(c=>c.id===b.dataset.command));});
list.addEventListener('pointermove',e=>{const b=e.target.closest('[data-command]');if(b){const n=visible.findIndex(c=>c.id===b.dataset.command);if(n!==active)select(n,false);}});
$('clear-search').addEventListener('click',()=>{input.value='';active=0;back();});
$('all-commands').addEventListener('click',()=>{recentOnly=false;$('all-commands').setAttribute('aria-pressed','true');$('recent-commands').setAttribute('aria-pressed','false');back();});
$('recent-commands').addEventListener('click',()=>{recentOnly=true;$('all-commands').setAttribute('aria-pressed','false');$('recent-commands').setAttribute('aria-pressed','true');back();});
document.querySelectorAll('[data-scope]').forEach(b=>b.addEventListener('click',()=>{scope=b.dataset.scope;active=0;document.querySelectorAll('[data-scope]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));back();}));
$('demo-state').addEventListener('change',e=>showState(e.target.value));$('shortcut-help').addEventListener('click',()=>{setMode('help');$('help-back').focus();});
$('clear-recents').addEventListener('click',()=>{history=[];try{localStorage.removeItem('nl-f03-recents');}catch(e){}back();announce('Recent commands cleared.');});
dlg.addEventListener('click',e=>{if(e.target.closest('[data-back]')){input.setAttribute('aria-busy','false');back();}if(e.target.closest('[data-reset]'))reset();});
if($('preview-open'))$('preview-open').addEventListener('click',()=>run(visible[active]));
document.querySelectorAll('[data-nav-command]').forEach(b=>b.addEventListener('click',()=>{open($('nav-toggle'));run(commands.find(c=>c.id===b.dataset.navCommand));}));
document.querySelectorAll('[data-legal]').forEach(b=>b.addEventListener('click',()=>{open(b);setMode('handoff');$('handoff-title').textContent=b.dataset.legal;$('handoff-route').textContent='Production policy not bundled';$('handoff-api').textContent='No API request';$('handoff-copy').textContent='Local notice: this offline prototype does not include the production legal document or certify its security. The Secured · HTTPS text describes the intended production host, not the local server.';$('open-dashboard').hidden=true;$('handoff-heading').focus();}));
document.addEventListener('keydown',e=>{
 if(dlg.open&&e.key==='Escape'){e.preventDefault();e.stopPropagation();if(mode!=='catalogue')back();else close();return;}
 if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(dlg.open)close();else open(document.activeElement);return;}
 if(document.body.classList.contains('nav-open')&&!dlg.open){if(e.key==='Escape'){e.preventDefault();closeNav(true);}if(e.key==='Tab'){const f=[...$('side-nav').querySelectorAll('button,a[href]')].filter(x=>x.offsetParent!==null);if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===f.at(-1)){e.preventDefault();f[0].focus();}}return;}
 const typing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
 if(e.key==='/'&&!typing){e.preventDefault();if(!dlg.open)open(document.activeElement);else input.focus();}
 if(e.key==='?'&&!typing&&dlg.open){e.preventDefault();setMode('help');$('help-back').focus();}
 if(dlg.open&&e.key==='Tab'){const f=[...dlg.querySelectorAll('input,button,a[href],select')].filter(x=>x.tabIndex>=0&&!x.disabled&&x.getClientRects().length);if(!f.length)return;if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===f.at(-1)){e.preventDefault();f[0].focus();}}
});
if(location.protocol==='https:')$('transport-note').textContent='Preview transport · HTTPS';else $('transport-note').textContent='Local prototype · not a security certification';
document.querySelectorAll('.side-item').forEach(el=>{const text=el.querySelector('.nav-copy');if(!text)return;const name=text.textContent.trim().replace(/\s+/g,' ');if(el.matches('a,button')){el.setAttribute('aria-label',name);el.setAttribute('title',name);}const mark=el.querySelector('[aria-hidden]');if(mark){const id=el.dataset.navCommand||'dashboard';const c=commands.find(x=>x.id===id);mark.innerHTML=svg(c?c.icon:'grid');}});
themeSync();syncNav();if(new URLSearchParams(location.search).get('palette')!=='closed')open($('open-command'));
})();
