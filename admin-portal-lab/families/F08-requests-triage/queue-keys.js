/* Request queue shortcuts and accessible contextual detail drawer; local-only. */
(()=>{
  const search=document.querySelector('#search'),live=document.querySelector('#live');
  if(!search)return;
  let opener=null;
  const reviewButtons=()=>[...document.querySelectorAll('.review')];
  const closeDrawer=()=>{
    const drawer=document.querySelector('#detail');
    if(!drawer)return;
    drawer.classList.remove('open');
    drawer.removeAttribute('role');
    drawer.removeAttribute('aria-label');
    reviewButtons().forEach(button=>button.setAttribute('aria-expanded','false'));
    if(opener?.isConnected)opener.focus();else search.focus();
  };
  const decorateDrawer=()=>{
    const drawer=document.querySelector('#detail'),actions=drawer?.querySelector('.row-actions');
    if(!drawer||!actions)return;
    drawer.setAttribute('role','region');
    drawer.setAttribute('aria-label','Request details and review');
    drawer.setAttribute('tabindex','-1');
    if(!drawer.querySelector('.drawer-head')){
      const header=document.createElement('div');
      header.className='drawer-head';
      const title=document.createElement('strong');
      title.textContent='Request details';
      const close=document.createElement('button');
      close.type='button';close.textContent='Close';close.setAttribute('aria-label','Close request details');
      close.addEventListener('click',closeDrawer);
      header.append(title,close);drawer.prepend(header);
    }
    if(!actions.querySelector('[data-next-request]')){
      const next=document.createElement('button');
      next.className='button';next.type='button';next.dataset.nextRequest='';next.textContent='Next request →';
      next.addEventListener('click',()=>{
        live.textContent='Local preview only: no edits were saved. Opening the next illustrated request.';
        const buttons=reviewButtons(),index=buttons.indexOf(opener);
        (buttons[index+1]||buttons[0])?.click();
      });
      actions.append(next);
    }
    requestAnimationFrame(()=>drawer.focus({preventScroll:true}));
  };
  document.addEventListener('click',event=>{
    const button=event.target.closest('.review');
    if(!button)return;
    opener=button;button.setAttribute('aria-expanded','true');
    setTimeout(decorateDrawer,0);
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&document.querySelector('#detail.open')){event.preventDefault();closeDrawer();return;}
    if(event.altKey||event.ctrlKey||event.metaKey||/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName))return;
    const buttons=reviewButtons(),index=buttons.indexOf(document.activeElement);
    if(event.key==='/'){event.preventDefault();search.focus();}
    else if(event.key==='x'&&index>=0){event.preventDefault();const checkbox=document.querySelectorAll('.pick')[index];if(checkbox){checkbox.checked=!checkbox.checked;checkbox.dispatchEvent(new Event('change',{bubbles:true}));}}
    else if(event.key==='e'&&index>=0){event.preventDefault();buttons[index].click();}
    else if(event.key==='?'&&!event.repeat){event.preventDefault();live.textContent='Queue shortcuts: / search · j/k move · x select · e open review · Escape close details. Local preview only.';}
  });
  const capacityTop=document.querySelector('.cap-top'),capacityLabel=document.createElement('label');
  capacityLabel.className='hint';capacityLabel.innerHTML='CAPACITY STATE ';
  const capacitySelect=document.createElement('select');capacitySelect.setAttribute('aria-label','Preview capacity status');
  capacitySelect.innerHTML='<option value="good">Within capacity</option><option value="warn">Warning threshold</option><option value="limit">At configured limit</option>';
  capacityLabel.append(capacitySelect);capacityTop?.append(capacityLabel);
  capacitySelect.addEventListener('change',()=>{const badge=capacityTop.querySelector('.pill');badge.className='pill '+(capacitySelect.value==='good'?'good':capacitySelect.value==='warn'?'warn':'neutral');badge.textContent=capacitySelect.value==='good'?'● Within capacity':capacitySelect.value==='warn'?'▲ Warning threshold reached':'■ At configured limit';});
  const toolbar=document.querySelector('.toolbar'),stateLabel=document.createElement('label');
  stateLabel.className='hint';stateLabel.textContent='STATE ';
  const state=document.createElement('select');state.setAttribute('aria-label','Preview loading, empty, or error state');
  state.innerHTML='<option value="ready">Ready</option><option value="empty">Empty</option><option value="loading">Loading skeleton</option><option value="error">Error</option>';
  stateLabel.append(state);toolbar?.append(stateLabel);
  const tbody=document.querySelector('#rows'),wrap=document.querySelector('.table-wrap');let statePanel=null;
  state.addEventListener('change',()=>{
    statePanel?.remove();statePanel=null;tbody.style.display='';wrap.style.display='';
    if(state.value==='ready'){search.dispatchEvent(new Event('input'));return;}
    tbody.style.display='none';statePanel=document.createElement('div');statePanel.className='state-preview';
    statePanel.setAttribute('role',state.value==='error'?'alert':'status');statePanel.style.cssText='padding:22px 16px;border-top:1px solid var(--border);color:var(--muted-foreground)';
    statePanel.innerHTML=state.value==='empty'?'<b>No requests match this view.</b><p>Clear filters or select another saved view.</p>':state.value==='error'?'<b>Request data unavailable in this preview.</b><p>No service connection was attempted. Retry is illustrative.</p><button class="button">Retry local sample</button>':'<b>Loading requests…</b><div aria-hidden="true" style="height:10px;margin-top:12px;background:var(--muted);border-radius:5px"></div><div aria-hidden="true" style="height:10px;margin-top:8px;width:70%;background:var(--muted);border-radius:5px"></div>';
    wrap.after(statePanel);statePanel.querySelector('button')?.addEventListener('click',()=>{state.value='ready';state.dispatchEvent(new Event('change'));});
  });
})();