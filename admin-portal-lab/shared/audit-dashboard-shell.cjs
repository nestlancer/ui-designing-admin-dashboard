/* Optional Chrome regression audit. Install Playwright locally before running; see README-dashboard-shell.md. */
'use strict';
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const http = require('http');

const lab = path.resolve(__dirname, '..');
const families = path.join(lab, 'families');
const files = [];
for (const family of fs.readdirSync(families).filter(x => /^F(?!01)\d\d-/.test(x)).sort()) {
  for (let version = 1; version <= 5; version++) files.push(path.join(families, family, `V${version}`, 'index.html'));
}
for (const version of ['V6', 'V7']) {
  for (const file of ['index.html', `${version}-complete.html`]) files.push(path.join(families, 'F05-pipeline-user-project-hubs', version, file));
}
const screenshotArg = process.argv.indexOf('--screenshots');
const screenshots = screenshotArg >= 0 ? path.resolve(process.argv[screenshotArg + 1]) : null;
if (screenshots) fs.mkdirSync(screenshots, { recursive: true });
function check(condition, message) { if (!condition) throw new Error(message); }
(async () => {
  // Serve local files over HTTP so each isolated context has reliable localStorage.
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const target = path.resolve(lab, '.' + pathname);
    if (!target.startsWith(lab + path.sep)) { res.writeHead(403).end(); return; }
    const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.json':'application/json' };
    fs.readFile(target, (error, data) => {
      if (error) { res.writeHead(404).end(); return; }
      res.writeHead(200, { 'Content-Type': mime[path.extname(target)] || 'application/octet-stream' }).end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch({ headless: true });
  const failures = [];
  console.log(`Chrome ${browser.version()} — checking ${files.length} pages`);
  // A fresh context isolates each page's theme and other saved preferences.
  for (let i = 0; i < files.length; i += 5) {
    await Promise.all(files.slice(i, i + 5).map(async file => {
      const relative = path.relative(lab, file);
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: 'light' });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      try {
        await page.goto(new URL(relative.split(path.sep).map(encodeURIComponent).join('/'), origin).href + '?theme=light', { waitUntil: 'load' });
        // F03 intentionally opens its command dialog on entry; dismiss it to inspect the shell.
        if (relative.includes('F03-')) await page.keyboard.press('Escape');
        const shell = page.locator('#shared-dashboard-shell');
        const state = await page.evaluate(() => {
          const root = document.querySelector('#shared-dashboard-shell')?.shadowRoot;
          if (!root) return null;
          const rect = e => { const r = e.getBoundingClientRect(); return [r.x, r.y, r.width, r.height].map(Math.round); };
          const sidebar = root.querySelector('.sidebar'), topbar = root.querySelector('.topbar');
          return {
            sidebar: rect(sidebar), topbar: rect(topbar),
            sidebarColor: getComputedStyle(sidebar).backgroundColor, topbarColor: getComputedStyle(topbar).backgroundColor,
            links: [...root.querySelectorAll('nav a')].map(a => new URL(a.href).pathname),
            active: root.querySelector('nav a[aria-current=page]')?.getAttribute('href'),
            legacy: [...document.querySelectorAll('[data-legacy-dashboard-chrome]')].map(e => ({ display: getComputedStyle(e).display, inert: e.inert })),
            legacyFooters: [...document.querySelectorAll('[data-legacy-dashboard-footer]')].map(e => ({ display: getComputedStyle(e).display, inert: e.inert })),
            sharedFooter: (() => {
              const f = document.querySelector('#shared-dashboard-footer');
              if (!f) return null;
              return { text: f.textContent.replace(/\s+/g, ' ').trim(), display: getComputedStyle(f).display };
            })(),
            topmostSidebar: document.elementFromPoint(100, 80)?.id,
            topmostHeader: document.elementFromPoint(300, 25)?.id
          };
        });
        check(state, 'shared shell did not load');
        check(JSON.stringify(state.sidebar) === '[0,0,248,900]', 'desktop sidebar geometry differs');
        check(JSON.stringify(state.topbar) === '[248,0,1192,64]', 'desktop topbar geometry differs');
        check(state.sidebarColor === 'rgb(255, 255, 255)' && state.topbarColor === state.sidebarColor, 'shared stylesheet did not load');
        check(state.links.length === 24, 'navigation does not contain all 24 dashboard families');
        for (const href of state.links) check(fs.existsSync(path.join(lab, decodeURIComponent(href))), 'broken navigation link: ' + href);
        const family = path.basename(path.dirname(path.dirname(file)));
        check(state.active && new URL(state.active).pathname.includes('/' + family + '/'), 'active navigation does not match this family');
        check(state.legacy.length === 2 && state.legacy.every(e => e.display === 'none' && e.inert), 'original chrome not hidden and inert');
        check(state.sharedFooter && state.sharedFooter.display !== 'none' && state.sharedFooter.text.includes('© 2026 Nestlancer · Design lab · Offline prototype'), 'shared footer missing or wrong');
        check(state.legacyFooters.every(e => e.display === 'none' && e.inert), 'original footers not hidden and inert');
        check(state.topmostSidebar === 'shared-dashboard-shell' && state.topmostHeader === 'shared-dashboard-shell', 'another element covers the shared chrome');
        if (screenshots) await page.screenshot({ path: path.join(screenshots, relative.replaceAll(path.sep, '_') + '.png'), animations: 'disabled' });
        await page.setViewportSize({ width: 390, height: 844 });
        await shell.locator('.menu').click();
        check(await shell.locator('.menu').getAttribute('aria-expanded') === 'true', 'mobile drawer did not open');
        await page.keyboard.press('Escape');
        check(await shell.locator('.menu').getAttribute('aria-expanded') === 'false', 'mobile drawer did not close');
        await shell.locator('.theme').click();
        check(await page.evaluate(() => document.documentElement.classList.contains('dark')), 'theme toggle failed');
        check(!new URL(page.url()).searchParams.has('theme'), 'theme URL override was not cleared');
        await page.reload({ waitUntil: 'load' });
        check(await page.evaluate(() => document.documentElement.classList.contains('dark')), 'theme preference did not persist: ' + JSON.stringify(await page.evaluate(() => ({cls:document.documentElement.className, theme:localStorage.getItem('nl-theme'), url:location.href}))));
        if (relative.includes('F03-')) await page.keyboard.press('Escape');
        await shell.locator('.menu').click();
        await shell.locator('nav a').filter({ hasText: 'Dashboard' }).click();
        check(page.url().includes('/F02-dashboard-command-center/'), 'dashboard navigation failed');
        check(errors.length === 0, `page errors: ${errors.join('; ')}`);
      } catch (error) { failures.push(`${relative}: ${error.message}`); }
      await context.close();
    }));
  }
  await browser.close();
  await new Promise(resolve => server.close(resolve));
  if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
  console.log(`${files.length - failures.length}/${files.length} pages passed`);
})().catch(error => { console.error(error); process.exitCode = 1; });
