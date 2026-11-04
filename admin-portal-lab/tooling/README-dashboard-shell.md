# Admin portal lab — self-contained HTML

Every `.html` file under `admin-portal-lab/` is independently reviewable via `file://` with no sibling CSS/JS, no local server, and no network. CSS, client scripts, fixtures, logos, icons and (for dashboard families) the shared shell are embedded in each document.

## Editing

**Edit the HTML files directly.** Family-level `.css` / `.js` sources and the F20/F21 concatenators were removed after migration so they cannot reintroduce runtime file dependencies.

Shell/token **authoring copies** used only by migration/audit helpers live in `tooling/shell-sources/`:

| File | Role |
|------|------|
| `tokens.css` | Design tokens |
| `base.css` | Reset + primitives |
| `dashboard-layout.css` | Layout adaption + shared footer |
| `dashboard-shell.css` | Shadow-DOM chrome styles |
| `dashboard-shell.js` | Chrome behavior (input for re-embedding) |

These are **not** loaded by the HTML at runtime. If you change them, re-embed into affected pages with `tooling/make-html-independent.py` (or paste equivalent code into each document).

F01 login, the gallery `index.html`, and F24 review/source sheets intentionally omit the dashboard shell.

## Audits

```bash
# No external stylesheet/script/asset deps in any HTML file
python3 tooling/audit-and-fix-independent.py

# file:// offline smoke (optional Playwright)
npm install --no-save --no-package-lock playwright
npx playwright install chromium
node tooling/validate-offline-html.cjs          # all pages
node tooling/validate-offline-html.cjs --isolate --sample

# Shared chrome geometry / drawer / theme
node tooling/audit-dashboard-shell.cjs
```
