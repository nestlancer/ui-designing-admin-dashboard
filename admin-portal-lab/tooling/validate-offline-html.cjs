#!/usr/bin/env node
/** Open every lab HTML via file:// with network blocked; report console/page errors and failed requests. */
'use strict';
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { pathToFileURL } = require('url');

const lab = path.resolve(__dirname, '..');
const htmlFiles = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith('.html')) htmlFiles.push(p);
  }
}
walk(lab);
htmlFiles.sort();

const isolate = process.argv.includes('--isolate');
const sampleOnly = process.argv.includes('--sample');
const samples = [
  'index.html',
  'families/F01-auth-login/V1/index.html',
  'families/F02-dashboard-command-center/V1/index.html',
  'families/F03-global-search-command-palette/V1/index.html',
  'families/F05-pipeline-user-project-hubs/V6/index.html',
  'families/F05-pipeline-user-project-hubs/V6/V6-complete.html',
  'families/F06-contact-inquiries/V2/index.html',
  'families/F11-projects-list/V1/index.html',
  'families/F20-analytics-hub/V1/index.html',
  'families/F21-content-blog/V1/index.html',
  'families/F23-media-library/V1/index.html',
  'families/F24-system-config/index.html',
  'families/F24-system-config/source-view.html',
  'families/F24-system-config/V1/index.html',
  'families/F25-integrations-audit/V1/index.html',
];

const targets = sampleOnly
  ? samples.map((r) => path.join(lab, r))
  : htmlFiles;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const failures = [];
  const notes = [];
  console.log(`Validating ${targets.length} HTML files via file:// (network blocked)${isolate ? ' [isolated copies]' : ''}`);

  for (const file of targets) {
    const rel = path.relative(lab, file);
    let openPath = file;
    let tmpDir = null;
    if (isolate) {
      tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'lab-html-'));
      openPath = path.join(tmpDir, path.basename(file));
      fs.copyFileSync(file, openPath);
    }
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      colorScheme: 'light',
      offline: false, // file:// + route abort is more reliable than offline flag alone
    });
    await context.route('**/*', (route) => {
      const url = route.request().url();
      if (url.startsWith('file:')) return route.continue();
      if (url.startsWith('blob:') || url.startsWith('data:')) return route.continue();
      return route.abort();
    });
    const page = await context.newPage();
    const pageErrors = [];
    const consoleErrors = [];
    const failed = [];
    page.on('pageerror', (e) => pageErrors.push(String(e.message || e)));
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('requestfailed', (req) => {
      const u = req.url();
      if (u.startsWith('file:') || u.startsWith('data:') || u.startsWith('blob:')) {
        failed.push(u);
      }
    });
    try {
      await page.goto(pathToFileURL(openPath).href + (rel.includes('F0') || rel.includes('families') ? '?theme=light' : ''), {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });
      if (rel.includes('F03-')) await page.keyboard.press('Escape').catch(() => {});
      await page.waitForTimeout(250);

      const expectsShell = /F(?!01)\d\d-[^/]+\/V\d+\//.test(rel) && !rel.includes('source-view');
      if (expectsShell) {
        const shell = await page.evaluate(() => {
          const host = document.querySelector('#shared-dashboard-shell');
          const root = host && host.shadowRoot;
          return {
            ready: document.documentElement.classList.contains('shared-chrome-ready'),
            hasHost: !!host,
            hasSidebar: !!(root && root.querySelector('.sidebar')),
            hasTopbar: !!(root && root.querySelector('.topbar')),
            footer: !!document.querySelector('#shared-dashboard-footer'),
            styleCount: root ? root.querySelectorAll('style').length : 0,
          };
        });
        if (!shell.ready || !shell.hasSidebar || !shell.hasTopbar || !shell.footer || shell.styleCount < 1) {
          failures.push({ rel, kind: 'shell', detail: shell });
        }
      }

      // Ignore benign file:// quirks; flag real failures
      const realFailed = failed.filter((u) => !u.includes('favicon'));
      if (pageErrors.length || realFailed.length) {
        failures.push({ rel, kind: 'runtime', pageErrors, consoleErrors: consoleErrors.slice(0, 5), failed: realFailed.slice(0, 10) });
      }
    } catch (e) {
      failures.push({ rel, kind: 'goto', detail: String(e.message || e) });
    } finally {
      await context.close();
      if (tmpDir) fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  }

  await browser.close();
  console.log(`\nFailures: ${failures.length}/${targets.length}`);
  for (const f of failures.slice(0, 40)) {
    console.log(JSON.stringify(f));
  }
  if (failures.length > 40) console.log(`... +${failures.length - 40} more`);
  process.exit(failures.length ? 1 : 0);
})().catch((e) => {
  console.error(e);
  process.exit(2);
});
