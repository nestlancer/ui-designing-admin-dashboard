# F02 · Dashboard command center — delivery report

## Gate record
- **Gate S PASS:** 3/3 screenshots, 13/13 HTML captures and audit metadata studied; shell measured and historical content frozen. See `BASELINE-MAP.md`.
- **Gate R PASS:** full Markdown report + all 10 workbook sheets; 11/11 targeted CHANGE items, 3/3 targeted ADDs and KEEP requirements mapped in `REPORT-STUDY.md`.
- **Gate A PASS:** 4/4 relevant Swagger files examined, 16+ relevant read endpoints mapped, unspecified fields and demo-only actions explicitly identified in `API-MAP.md`.
- **Gate T PASS:** after S/R/A, 4 web queries and 10 opened references; patterns and rejections mapped to all five concepts in `TEMPLATE-RESEARCH.md`.
- **Gate 1 PASS:** 5 concept cards, 5 sketches, difference matrix and requirement coverage in `CONCEPTS.md` before the build.
- **Gate 2a PASS:** V1 pilot completed and tested before the remaining variants; `PILOT-REVIEW.md` documents the pilot and later cross-family refinements.
- **Gate 2b PASS:** V2–V5 manually redesigned one at a time; gallery, manifest and decisions merged without overwriting F01 or the shared tokens/assets. No design-generation script was used.
- **Gate 3 PASS (prototype):** 5/5 hand-built variants; 50 viewport/theme configurations; 5/5 applied prototype checklists; 0 known blocker findings. This is not production acceptance or accessibility certification.

```text
## GATE S (F02) · Shots: 3/3 · HTML: 13/13 · Shell measured: YES · Content frozen: YES · Gate: PASS
## GATE R (F02) · MD: YES · XLSX: 10/10 · C: 11/11 · A: 3/3 · KEEP: YES · Gate: PASS
## GATE A (F02) · Specs: 4/4 · Endpoints: 16+ · Demo-only: documented · Gate: PASS
## GATE T (F02) · Queries: 4 · Refs: 10/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS
## GATE 1 (F02) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS · C 5/5: YES · P1 5/5: N/A · P2–P3 ≥3/5: YES · Gate: PASS
## GATE 2a (F02) · V1 pilot: PASS · 5 widths × 2 themes · Keyboard and states: PASS
## GATE 2b (F02) · Hand-built: 5/5 · Gallery/manifest/decisions merged: YES · Gate: PASS
## GATE 3 (F02) · Hand-built: 5/5 · Generators: 0 · Widths×themes: 50 · Checklist: 5/5 · Blockers: 0 · Gate: PASS
```

## Deliverables and local preview
- Gallery: `admin-portal-lab/index.html`, now containing the existing F01 section and a new F02 section.
- Variants: `families/F02-dashboard-command-center/V1/index.html` through `V5/index.html`.
- Shared F02 shell/behaviours: `families/F02-dashboard-command-center/dashboard.css` and `dashboard.js` (not a variant generator).
- Research, concepts, pilot and this report: `families/F02-dashboard-command-center/docs/`.
- Merge-only records: `admin-portal-lab/manifest.json` and `DECISIONS.md`.

From the repository root run:
```sh
python3 -m http.server 8131 --bind 0.0.0.0
```
Then open `/admin-portal-lab/` on that server. In Arena, use the running **Dashboard design lab** preview, whose server root is already `admin-portal-lab/`. No CDN, font service, chart library or production API is needed.

## Variant review
| Variant | Composition / signature | Self-critique | Final browser result |
|---|---|---|---|
| V1 **Northstar** | Money-first decision panel, six-cell strip, balanced chart and table regions | Clearest all-purpose overview, but the complete capture takes vertical space. | 10 width/theme renders; queue, search, states, mobile drawer, row preview and export passed. |
| V2 **The Brief** | Ruled editorial verdict with a marginal note rail and expandable handover note | Best for a considered read, though the narrative pushes detailed records farther down. | 10 renders; common interactions and the disclosure were exercised. |
| V3 **Queue Spine** | Vertical queue rail beside metrics, ↑/↓ navigation and Enter preview | Strongest triage orientation; supporting panels can leave some whitespace beneath the short rail. | 10 renders; arrow-key queue loop and common interactions passed. |
| V4 **Signal Board** | Bento financial tile + six health cells; explicit simulated state buttons and a reduced-motion-safe entrance | Makes status uncertainty prominent, but cannot substitute for actual service telemetry. | 10 renders; degraded/error shortcuts and common interactions passed. |
| V5 **Shift Ledger** | Compact strips and paired records before charts; inline row detail with focus return | Efficient for record review; the denser table is less editorial and the row preview is read-only. | 10 renders; inline detail, focus return and common interactions passed. |

**Recommended family winner: V1 Northstar.** It communicates the 16 pending payments and awaiting amount fastest while retaining the queue, analytics and recent records in a familiar shell. Keep V3 as the stronger candidate if the next review prioritises rapid triage rather than a general overview.

## Owner revision · full-width canvas and collapsible sidebar

**Scope:** Following the owner’s review, all five F02 pages now fill the available viewport beside the sidebar rather than using a centered 1440px page cap. The main canvas runs to the viewport edge with responsive internal gutters; individual text blocks remain readable. The locked shared tokens and F01 pages were not changed. The master prompt, all 25 family briefs and the prompt-pack README now carry this requirement, with an explicit standalone F01 sign-in exception.

- **Desktop shell:** At widths ≥1024px the header contains a keyboard-operable Collapse/Expand control. The expanded sidebar is 232px, the icon-only rail is 64px, and the main canvas automatically fills the remainder. The control exposes its name, `aria-controls` and current `aria-expanded` state; icon-only navigation retains accessible names and hover labels. The `nl-sidebar` preference is saved locally and restored before paint when browser storage is available.
- **Mobile shell:** Below 1024px, the canvas is full width and the sidebar remains a separate off-canvas drawer with full navigation labels. A closed drawer is removed from keyboard/assistive-technology navigation; opening it moves and confines focus, and Escape closes it and restores focus to the menu button. A saved desktop collapse preference does not collapse the mobile drawer.
- **Post-revision Chromium QA:** **3,724 assertions** across **70** variant/viewport/theme configurations (five variants × 360/390/768/1024/1440/1920/2560 × light/dark), with **175 measured geometry states** including expanded, collapsed, reload, cross-family and no-JS cases. Confirmed the canvas right edge at the viewport edge and the appropriate 232px/64px/0px content offset; no page overflow, topbar overlap, failed resources or browser errors were found. Tested **10 reload cases**, preference continuity across V1–V5, keyboard collapse/expand, **30** mobile drawer configurations, breakpoint transitions and coarse-pointer controls.
- **Post-revision regression/accessibility:** Ten light/dark interaction smoke runs covered collapsed navigation, search, preview dialogs, error/retry, degraded/dismiss and CSV. **60 automated axe-core WCAG-tagged scans** covered 390px closed/open mobile drawer and 1440/2560px expanded/collapsed desktop states in both themes for every variant; zero violations were reported. Wide collapsed and mobile dark screenshots were visually inspected. The checks do not constitute a full accessibility certification, and Firefox, Safari and physical devices were not tested.

## Initial-delivery verification (before owner revision)
- Chromium headless, locally served, at **360 / 390 / 768 / 1024 / 1440px × light/dark × five variants = 50 renders**. Checked page/body width, visible controls for horizontal clipping, image loading, duplicate IDs, 52px header, query themes, page errors and failed/non-local requests. No issues remained.
- Captured 390px and 1440px viewport screenshots in both themes for all five variants; visually inspected all five desktop and mobile directions, dark desktop layouts, and the full-column request/payment table treatment. Responsive rows use one semantic table per dataset, not duplicated mobile tables.
- Automated axe-core WCAG 2 A/AA and 2.1 A/AA-tagged scans at 390 and 1440, both themes, for all five (**20 default-state scans**), plus preview-dialog, error and degraded states at 1440 in both themes (**30 additional scans**): **zero reported violations** in the final 50 scans. Earlier active-navigation and dark primary-button contrast findings were fixed and re-scanned. Automated scans cannot establish full conformance.
- **552 browser assertions** across the final suite: all six queue previews, Pipelines/Analytics/Inbox shortcuts, ⌘/Ctrl-K filtering and keyboard selection, header previews, range suppression, loading/empty/error/restricted/degraded states, alert focus, dismiss/retry, theme persistence, sidebar collapse/accessibility name, CSV download, desktop and touch drawer, no-JS content/gallery, reduced motion and variant-specific interactions. No final page errors or failed local requests.
- Source comparison checked the original table headings and every cell of four request rows and five payment rows against capture 02 (ignoring formatting punctuation). Each F02 HTML file is 33–36 KB, below the 70 KB limit; local references resolve and all five gallery paths return HTTP 200. JSON manifest parses. No `href="#"`, remote HTML/CSS/JS assets, or generated variants in F02.

## Honest limits / findings
- **Historical only:** the frozen dashboard is 30 Oct 2026, 13:38 UTC. The older screenshot shows 7 open quotes, whereas this later capture shows 0. They are not combined. The dashboard's 17 new contacts is not asserted to equal the different contact-page snapshot.
- **Missing data:** queue ages/owners, daily chart series, actual operator handover/deltas and current per-service health were not verified. The design says unavailable/not checked rather than inventing values. Only the complete 30-day dashboard is displayed; selecting a different range explains that the other captures contain only partial aggregates.
- **Prototype-only:** route, queue, profile, legal and row controls show local previews; unbuilt family destinations are not live. No live refresh, production authorization, API requests, payments or mutations were tested. CSV is a summary, not an export of all table records.
- **Review limits:** Chromium was used; Firefox, Safari, physical devices and assistive-technology users were not tested. Axe scans and keyboard checks are not an independent accessibility audit. No real-world performance/FCP or security guarantee is claimed; the footer reports the actual transport context.
- **Severity:** no known blocker or major prototype defects remained in the checks above. Minor trade-offs are the long mobile scroll, the lack of a full dataset for alternate periods, and demo-only destinations pending the other families.
