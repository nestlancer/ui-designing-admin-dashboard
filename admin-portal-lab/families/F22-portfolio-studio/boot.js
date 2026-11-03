/* Theme and shell preferences shared with the existing lab. */
try{const q=new URLSearchParams(location.search).get('theme');document.documentElement.classList.toggle('dark',(q||localStorage.getItem('nl-theme')||'light')==='dark');document.documentElement.classList.toggle('collapsed',localStorage.getItem('nl-nav')==='collapsed')}catch(e){}
