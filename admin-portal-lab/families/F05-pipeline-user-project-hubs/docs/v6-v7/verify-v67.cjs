const {chromium}=require('/home/user/node_modules/playwright');
const fs=require('fs'),path=require('path');
const OUT=__dirname,BASE='http://localhost:8131/admin-portal-lab/families/F05-pipeline-user-project-hubs';
const data=JSON.parse(fs.readFileSync(path.join(OUT,'../../evidence-v67.json')));
const results={started:new Date().toISOString(),checks:0,axeScans:0,violations:[],runtimeErrors:[],externalRequests:[],configs:[],screenshots:[]};
function ok(value,message){results.checks++;if(!value)throw Error(message)}
(async()=>{const b=await chromium.launch({headless:true});
try{fs.mkdirSync(path.join(OUT,'qa'),{recursive:true});
for(const v of [6,7])for(const width of [390,768,1440,2560])for(const theme of ['light','dark']){
 const c=await b.newContext({viewport:{width,height:1000},hasTouch:width===390,reducedMotion:width===768?'reduce':'no-preference'}),p=await c.newPage();
 p.on('pageerror',e=>results.runtimeErrors.push({v,width,theme,error:e.message}));
 p.on('request',r=>{if(!r.url().startsWith('http://localhost:8131/')&&!r.url().startsWith('data:'))results.externalRequests.push(r.url())});
 await p.goto(`${BASE}/V${v}/index.html?theme=${theme}`);await p.addScriptTag({path:'/home/user/node_modules/axe-core/axe.min.js'});
 for(const hub of ['user','project']){
  await p.locator(`[data-hub="${hub}"]`).click();
  let secs=hub==='user'?['requests','quotes','projects','payments','messages','trust']:['milestones','payments','origin','timeline'];
  let counts=hub==='user'?[15,14,5,11,0,6]:[7,3,4,7];
  for(let j=0;j<secs.length;j++){
   let sec=secs[j];await p.locator(`#section-nav [data-section="${sec}"]`).click();
   let host=v===6?p.locator('#active-section'):p.locator(`#${hub}-chapters [data-chapter-body="${sec}"]`);
   ok(await host.isVisible(),`V${v}/${width}/${theme}/${hub}/${sec} host visible`);
   ok(await host.locator('tbody tr').count()===Math.min(5,counts[j]),'Exact five-row captured paging '+sec);
   ok((await p.locator('#identity').innerText()).includes(hub==='user'?'Arjun Mehta':'Khandesh Spice'),'Scoped identity');
   ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No document horizontal overflow '+width+'/'+sec);
   ok(await p.evaluate(()=>{let ids=[...document.querySelectorAll('[id]')].map(x=>x.id);return ids.length===new Set(ids).size}),'No duplicate IDs');
   ok(await p.evaluate(theme=>document.documentElement.classList.contains('dark')===(theme==='dark'),theme),'Correct theme');
   const a=await p.evaluate(async()=>{let r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}});return r.violations.map(x=>({id:x.id,impact:x.impact,nodes:x.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});results.axeScans++;if(a.length)results.violations.push({v,width,theme,hub,sec,violations:a});ok(a.length===0,'Axe violations '+JSON.stringify(a));
   if((width===390||width===1440)&&j===0){let file=`qa/V${v}-${hub}-${theme}-${width}.png`;await p.evaluate(()=>window.scrollTo(0,0));await p.screenshot({path:path.join(OUT,file),fullPage:true});results.screenshots.push(file)}
   results.configs.push({v,width,theme,hub,section:sec,rows:counts[j]});
  }
 }
 await c.close();console.log('PASS',v,width,theme);
}
ok(results.runtimeErrors.length===0,'No runtime errors');ok(results.externalRequests.length===0,'No external requests');
results.status='PASS';
}catch(e){results.status='FAIL';results.failure=e.stack;console.error(e)}finally{results.finished=new Date().toISOString();fs.writeFileSync(path.join(OUT,'QA-MATRIX.json'),JSON.stringify(results,null,2));await b.close();console.log(JSON.stringify({status:results.status,checks:results.checks,axeScans:results.axeScans,configs:results.configs.length,violations:results.violations.length}));if(results.status!=='PASS')process.exitCode=1}
})();