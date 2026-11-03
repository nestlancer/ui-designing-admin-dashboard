/* V5 progressive enhancement. Real captured numbers never count up or change.
   IO schedules finite transform/opacity entrances with rAF. One finite SVG dash draw.
   Everything is visible before this script and when reduced motion is requested. */
(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)');if(reduce.matches||!('IntersectionObserver'in window))return;
const seen=new WeakSet();let pending=[],scheduled=false;
function flush(){scheduled=false;pending.splice(0).forEach((el,i)=>{el.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:380,delay:Math.min(i*60,180),easing:'cubic-bezier(.2,.75,.3,1)',fill:'none'});});}
const io=new IntersectionObserver(entries=>{if(reduce.matches)return;entries.forEach(entry=>{if(entry.isIntersecting&&!seen.has(entry.target)){seen.add(entry.target);io.unobserve(entry.target);pending.push(entry.target);if(!scheduled){scheduled=true;requestAnimationFrame(flush);}}});},{threshold:.06});
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));
const trace=document.querySelector('.flow-trace');if(trace)trace.animate([{strokeDashoffset:60,opacity:0},{strokeDashoffset:0,opacity:1}],{duration:700,easing:'ease-out',fill:'none'});
window.addEventListener('system-tab',e=>{if(reduce.matches)return;let p=document.querySelector('[data-panel="'+e.detail.name+'"]');if(p&&!p.hidden)p.animate([{opacity:.25,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:250,easing:'ease-out'});});
window.addEventListener('system-change',()=>{if(reduce.matches)return;let el=document.querySelector('.flow-receipt');if(el)el.animate([{opacity:.45,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:300,easing:'ease-out'});});
reduce.addEventListener('change',()=>{if(reduce.matches){io.disconnect();pending=[];document.getAnimations().forEach(a=>a.cancel());}});
})();
