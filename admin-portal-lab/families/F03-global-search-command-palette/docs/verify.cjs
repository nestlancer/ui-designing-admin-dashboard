/* QA only: reads pages, exercises them, writes evidence. Never writes HTML/CSS/JS designs. */
const {chromium}=require('/home/user/node_modules/playwright');
const fs=require('fs');const path=require('path');
const base='http://127.0.0.1:8131/admin-portal-lab/families/F03-global-search-command-palette/';
const output=__dirname;const checks=[];let errors=[];
function check(ok,label){checks.push({ok:!!ok,label});if(!ok)console.log('FAIL',label);}
(async()=>{const browser=await chromium.launch();
for(let v=1;v<=5;v++){
 const context=await browser.newContext();const p=await context.newPage();p.on('pageerror',e=>errors.push('V'+v+': '+e.message));
 const network=[];p.on('request',r=>{if(!r.url().startsWith('http://127.0.0.1:8131/'))network.push(r.url())});
 await p.setViewportSize({width:1440,height:1000});await p.goto(base+'V'+v+'/index.html?theme=light');
 check(await p.locator('[role=option]').count()===34,`V${v}: 34 commands`);
 check(await p.locator('#command-search').evaluate(el=>el===document.activeElement),`V${v}: autofocus`);
 await p.keyboard.press('ArrowDown');check(await p.locator('#command-search').getAttribute('aria-activedescendant')!==null,`V${v}: active descendant`);
 await p.locator('#command-search').fill('Karthik');await p.keyboard.press('Enter');check(await p.locator('#handoff-title').textContent()==='Karthik Menon',`V${v}: user lookup`);
 await p.keyboard.press('Escape');await p.locator('#command-search').fill('UPI');await p.keyboard.press('Enter');check((await p.locator('#handoff-copy').textContent()).includes('No verified individual payment ID'),`V${v}: payment honesty`);
 await p.keyboard.press('Escape');await p.locator('#command-search').fill('no-such-result-xyz');check(await p.locator('[role=option]').count()===0,`V${v}: no results`);check(await p.locator('#command-search').getAttribute('aria-activedescendant')===null,`V${v}: no dangling descendant`);
 await p.locator('[data-reset]').click();await p.locator('#clear-recents').click();await p.locator('#recent-commands').click();check((await p.locator('#command-results').textContent()).includes('No recent commands'),`V${v}: empty recent`);await p.locator('[data-reset]').click();
 await p.locator('#command-search').fill('Awaiting verification');await p.keyboard.press('Enter');check((await p.locator('#handoff-api').textContent()).includes('PENDING_VERIFICATION'),`V${v}: approval queue`);await p.keyboard.press('Escape');await p.locator('#clear-search').click();
 await p.locator('#recent-commands').click();check(await p.locator('[role=option]').count()===1,`V${v}: recent records locally`);await p.locator('#all-commands').click();
 await p.locator('#demo-state').selectOption('loading');check(await p.locator('.skeleton-row').count()===3,`V${v}: skeleton`);await p.locator('#state-panel [data-back]').click();
 await p.locator('#demo-state').selectOption('error');check(await p.locator('#state-panel').getAttribute('role')==='alert',`V${v}: error alert`);check(await p.locator('#state-panel').evaluate(el=>el===document.activeElement),`V${v}: error focus`);await p.locator('#state-panel [data-back]').click();
 await p.locator('#shortcut-help').click();check(await p.locator('#help-panel').isVisible(),`V${v}: shortcuts`);await p.keyboard.press('Escape');
 await p.locator('#command-search').fill('Switch to');await p.keyboard.press('Enter');check(await p.locator('html').evaluate(e=>e.classList.contains('dark')),`V${v}: theme command`);await p.keyboard.press('Escape');check(await p.locator('#open-command').evaluate(e=>e===document.activeElement),`V${v}: focus restored`);
 await p.keyboard.press('Control+k');check(await p.locator('dialog').evaluate(e=>e.open),`V${v}: Ctrl+K`);await p.keyboard.press('Escape');
 await p.locator('#nav-toggle').click();check(await p.locator('html').evaluate(e=>e.classList.contains('nav-collapsed')),`V${v}: desktop collapse`);await p.reload();check(await p.locator('html').evaluate(e=>e.classList.contains('nav-collapsed')),`V${v}: persistent collapse`);await p.keyboard.press('Escape');await p.locator('#nav-toggle').click();
 for(const width of [360,375,390,414,768,1024,1440,1920,2560])for(const theme of ['light','dark']){
  await p.setViewportSize({width,height:900});await p.goto(base+'V'+v+'/index.html?theme='+theme);await p.waitForTimeout(400);
  const geo=await p.evaluate(()=>{let d=document.querySelector('dialog'),r=d.getBoundingClientRect();return{overflow:document.documentElement.scrollWidth>innerWidth,clip:r.left<0||r.right>innerWidth+1||r.top<0||r.bottom>innerHeight+1};});
  check(!geo.overflow&&!geo.clip,`V${v}: ${width}/${theme} geometry`);
  if(width===1440||width===390)await p.screenshot({path:path.join(output,`V${v}-${width}-${theme}.png`)});
 }
 // Every command resolves, including the known dead-group route repair.
 await p.setViewportSize({width:1440,height:1000});await p.goto(base+'V'+v+'/index.html');const ids=await p.locator('[role=option]').evaluateAll(a=>a.map(e=>e.dataset.command));
 for(const id of ids){await p.locator('#command-search').fill('');const row=p.locator('[data-command="'+id+'"]');await row.click();if(id==='theme')check(await p.locator('#catalogue').isVisible(),`V${v}: ${id} runs`);else{check((await p.locator('#handoff-title').textContent()).length>0,`V${v}: ${id} resolves`);await p.keyboard.press('Escape');}}
 if(v===2){await p.locator('[data-scope="People"]').click();check(await p.locator('[role=option]').count()===3,'V2: people scope');await p.locator('[data-scope="All"]').click();}
 if(v===3){await p.locator('#command-search').fill('Karthik');check((await p.locator('#preview-route').textContent()).includes('01a10a2b'),'V3: live highlight preview');await p.locator('#clear-search').click();}
 if(v===4){await p.locator('#command-search').fill('payments');check((await p.locator('[role=option]').first().textContent()).includes('Payments'),'V4: ranked result');}
 await p.keyboard.press('Escape');await p.setViewportSize({width:390,height:844});await p.locator('#nav-toggle').click();check(await p.locator('#side-nav').evaluate(e=>!e.inert),'V'+v+': mobile drawer');await p.keyboard.press('Escape');check(await p.locator('#nav-toggle').evaluate(e=>e===document.activeElement),'V'+v+': drawer focus return');
 await p.emulateMedia({reducedMotion:'reduce'});await p.locator('#open-command').click();check(await p.locator('dialog').evaluate(e=>getComputedStyle(e).animationName==='none'),'V'+v+': reduced motion');
 check(network.length===0,'V'+v+': zero external requests');await context.close();
 const nj=await browser.newContext({javaScriptEnabled:false});const np=await nj.newPage();await np.goto(base+'V'+v+'/index.html');check(await np.locator('noscript .no-js').isVisible(),'V'+v+': no-JS fallback');await nj.close();
}
check(errors.length===0,'Zero JS runtime errors');await browser.close();const report={checks:checks.length,passed:checks.filter(c=>c.ok).length,failed:checks.filter(c=>!c.ok),runtimeErrors:errors};fs.writeFileSync(path.join(output,'QA-RESULTS.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));})();
