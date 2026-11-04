# Shared dashboard shell

`dashboard-shell.js` renders the common sidebar, topbar, and page footer for dashboard families F02–F25. `dashboard-shell.css` styles the sidebar/topbar in its shadow root, isolating them from each variant's CSS. `dashboard-layout.css` adapts the existing page layouts and styles the shared footer. F01 is intentionally independent.

Each dashboard version includes the layout stylesheet and the shell script. The sidebar and header already present in those pages are marked `data-legacy-dashboard-chrome`; they remain hidden and inert when the shared shell is active. They are retained because the original variant scripts still query or populate their controls. Variant `<footer>` elements are marked `data-legacy-dashboard-footer` at runtime and replaced by one shared footer (`#shared-dashboard-footer`). If JavaScript is disabled, the original shell and footer remain visible as a fallback. The page content and its original scripts remain separate from the shared shell.

Navigation uses local lab routes, keeping the current V1–V5 variant when changing families. F05 V6/V7 are kept when navigating to F05; other families fall back to V1 from those variants. Theme preference uses the existing `nl-theme` key. The responsive drawer supports Escape and a backdrop.

To add a dashboard version, link `../../../shared/dashboard-layout.css` at the end of its head and `../../../shared/dashboard-shell.js` at the end of its body. Mark the original sidebar and header with `data-legacy-dashboard-chrome`, their shared layout parent with `data-legacy-dashboard-layout` (unless it is the body), and the header's workspace parent with `data-dashboard-workspace`. Update the route list in `dashboard-shell.js` if a new family is added. The F20/F21 build templates include these hooks so rebuilding their variants retains the shared shell.

The family-level F24 review sheet and source viewer are not dashboard versions and retain their own layouts. F05's standalone V6/V7 complete files now depend on the shared shell assets, just like the other dashboard pages.

## Chrome regression audit

From `admin-portal-lab`, install the optional test dependency (`npm install --no-save --no-package-lock playwright` and `npx playwright install chromium`), then run `node shared/audit-dashboard-shell.cjs`. It opens F02–F25 V1–V5 plus the F05 V6/V7 pages and complete files in Chrome, checks the desktop shell and hidden legacy chrome, then exercises the mobile drawer, Escape, theme persistence and navigation. To capture a desktop screenshot for each page, add `--screenshots /path/to/output`. F03 intentionally opens its search dialog on entry; the audit dismisses it before inspecting the common shell.
