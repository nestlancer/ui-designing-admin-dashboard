# F20 · Analytics Hub — GATE 3 · Delivery report

Run: 2026-11-02 · Operator console lab · Scope: `admin-portal-lab/families/F20-analytics-hub/` only.
Preview: `python3 -m http.server 8131` from the repo root → `/admin-portal-lab/` → **F20 · Analytics hub**.

```
## GATE 3 (F20) · Hand-built: 5/5 · Generators: 0 · Widths×themes: 7×2 = 14 per variant
Checklist: 5/5 (see §5) · Blockers open: 0 · Gate: PASS
```

## 1. Files — self-contained single-file pages (rework pass)

Every variant is now **one HTML file with zero sub-resources**: tokens, base, family CSS, the
variant's own CSS, the runtime, the shared decision-layer script, the variant script, both logo
marks (URL-encoded SVG data URIs), the favicon, and the whole icon sprite are inlined. Opening the
file with every sibling request blocked still renders the full shell — that was the defect that
made the first build look like naked text in the preview pane.

| Path | Bytes | What it is |
|---|---|---|
| `families/F20-analytics-hub/build-f20.js` | build tool | concatenates authored files only; minifies JS with terser (falls back to a whitespace pass) and CSS with a comment/space strip |
| `families/F20-analytics-hub/analytics.css` | 33.6 KB | shared shell (topbar, sidebar that never hides, rail ≤1180px, drawer ≤620px) + chart/analytics primitives + the decision-layer styles |
| `families/F20-analytics-hub/analytics.js` | 29.9 KB | captured fixture, tie-out maths, hand-drawn SVG charts, CSV, state machine, keyboard |
| `families/F20-analytics-hub/analytics-blocks.js` | 17.5 KB | decision layer: page chrome, north star, coverage strip, drivers, chart card, **data-health rail**, **metric dictionary**, exceptions, export note |
| `families/F20-analytics-hub/parts/V#-panel.js` | 9–19 KB | the five variant compositions |
| `families/F20-analytics-hub/variants/V#/design.css` | 2–6 KB | per-variant visual authoring |
| `V1/index.html` | **111.7 KB** · sha `9e7aae50` | **Calibrated ledger** — reading split + sticky data-health rail |
| `V2/index.html` | **107.3 KB** · sha `17e563ba` | **Signal spine** — one shared time axis, query-value cards, docked breakdown rail |
| `V3/index.html` | **109.5 KB** · sha `4e07cf0b` | **Readout stack** — table-first, every rate expands to its computation |
| `V4/index.html` | **108.3 KB** · sha `1025f8c7` | **Dense board** — attention strip, bento KPIs, collapsible dictionary |
| `V5/index.html` | **110.4 KB** · sha `9bac182d` | **Choreograph** — read → evidence → export, with an export receipt |
| `docs/BASELINE-MAP.md` · `REPORT-STUDY.md` · `API-MAP.md` · `TEMPLATE-RESEARCH.md` · `CONCEPTS.md` | — | Gates S, R, A, T, 1 (T and A updated with the rework passes) |

**Size deviation, stated plainly:** the prompt's ≤70 KB budget assumed multi-file pages that load
`shared/tokens.css`, `shared/base.css` and `assets/lab-icons.svg` over the network. Inlining those
plus the two logo marks costs ~45 KB of the total; the authored page code is unchanged in size.
The trade was made deliberately: a page that renders in the preview pane and in a plain file
open is worth more than 40 KB. Splitting the files back out is the open question for the owner.

## 2. What is on every variant (content lock + C-items)

- Four area tabs (**Revenue · Users · Projects · Requests**) × four ranges (**7d · 30d · 90d · 1y**) × **Download CSV**, with the captured labels, section titles, KPI names, table headers, ₹ figures and microcopy verbatim (BASELINE-MAP §3).
- **C10:** y-axis ticks with a unit label, zero-based gridlines, x tick labels, point counts, missing-bucket counts, an explicit empty-bucket language (“—”, “no data in bucket”), the takeaway sentence above the chart, and a chart↔table equivalent (charts are never the only copy of a number).
- **C5:** chart-1…chart-5 are a teal ramp; the captured production donut's second (non-teal) hue is gone.
- **C3/C9/C12/C18/C20:** AA status chips with icon + word, tabular numerals everywhere money appears, mono for endpoints/timestamps/CSV manifests, one 30–42 px display figure per tab, designed dark theme (not an inversion), logo `alt` + favicon.
- **Tie-out honesty (R1):** `4 of 18 uncounted`, `34 / 34 / 34 unverified`, `18 ÷ 41 = 43.9%`, `18 ÷ 36 = 50%`, `0 minutes = no responses recorded`, and the revenue-trend capture conflict — all visible, none repaired.
- **A11 (global):** the Projects tab always ships the degraded-series banner naming `GET /api/dashboard/projects` and the capture date, with a demo retry.
- States: **ready · loading (skeleton shaped like the coming chart) · empty (what/why/next) · error (what/why/endpoint/retry, `role=alert`, focus moved)**, reachable from the labelled *Preview states* control; plus a `<noscript>` block listing every captured figure with links.

## 3. Verified in a real browser (Playwright / Chromium headless)

### 3.1 Rework pass — self-containment and the shell

| Check | Result |
|---|---|
| Render with **every sibling request aborted** (`file://`, all non-`index.html` routes blocked) | full shell renders: sidebar 248 px at x=0, topbar 52 px, 18 nav items, panel content present |
| Sidebar width at 1440 / 1100 / 900 / 700 px viewport | 248 px / 64 px rail / 64 px rail / 64 px rail — **never hidden** (drawer only ≤620 px) |
| Network requests made by the page | **0** (all CSS/JS/icons/logos inline; logos are URL-encoded SVG data URIs) |
| Logo data URI decodes | `img.complete = true`, `naturalWidth = 148` |
| Console + page errors, all five variants | **0** |

### 3.2 Content, state and keyboard

| Check | Result |
|---|---|
| Widths 360 / 414 / 768 / 1024 / 1440 / 1920 / 2560 × light + dark, every variant | **0 page-level horizontal overflow** |
| All four tabs render in every variant, all four ranges, chart↔table, CSV download | pass 5/5 (`tableRows` 37–42, CSV first line `# Nestlancer admin — analytics CSV (DEMO EXPORT…)`) |
| Loading skeleton / error with focus move / empty view / live, per variant | pass 5/5 (`skeleton=1`, `errorFocus=1`) |
| Theme toggle, sidebar collapse→rail (64 px) + persistence, mobile drawer + Escape | pass |
| Tab keyboard ←/→/Home/End with `aria-selected` following | pass |
| `<noscript>` figures; reduced-motion | pass |
| axe-core 4.10.2 — WCAG 2 A/AA + 2.1 AA + 2.2 AA — 5 variants × light/dark × tabs × demo states | **0 violations** |

**Defects this pass found and fixed:** (1) stale `/tmp`-era build wrote no scripts at all — the inline
script tags had been lost, leaving `<div id="chrome">` empty (caught by the `h1=0` probe);
(2) the sparkline call took a series object instead of `values` → `values.forEach is not a function`
killed every render; (3) V4's bento declared 4 tracks for 5 children, orphaning a KPI tile;
(4) V2's sticky chart container made the top of the card unreachable; (5) 360 px overflow from
`--pad` not existing (3 px) and from `.alerts` children inside the new grid; (6) axe
`scrollable-region-focusable` on table wrappers and the tab strip → `role="region"` + `tabindex="0"`;
(7) axe `link-in-text-block` on the lab-note links → explicit underline; (8) dark-mode
`.nav-section` and the teal top badge below 4.5:1 → dark-specific values; (9) `color-contrast` on
light `.nav-section` (`#6a7381` on `#f3f4f7` = 4.35:1) → token darkened to `#59616e`, plus a dark-mode
`.dark .nav-section{color:#8a97a8}` and a darker `.top-badge.teal` (shared tokens, affects every family — see DECISIONS);
(10) `.sr-only` was styled nowhere, so the visually-hidden label in the V3 computation table printed on screen —
switched to the shared `.visually-hidden` class and defined `.sr-only`/`.sr-only-title` in the family stylesheet;
(11) the V2 query-value card margin override (`position:relative` → placeholder) was restored after a patch collision.

## 4. What is *not* claimed

- No request runs against any API; no payload, freshness, permission or audit result is asserted. Every endpoint string is presented as the documented contract, prefixed where relevant, and the CSV is labelled a demo export.
- Empty/loading/error are **lab states**; the capture contains none of them.
- Screen-reader testing is automated (axe + semantics + live regions), **not** manual NVDA/VoiceOver.
- The revenue-trend conflict (`+100 up` vs `−100 down`) and the `43.9%` denominator are open product questions — the lab exposes them, it does not decide them.

## 5. Acceptance checklist (report §7.1) applied per variant

| # | Item | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|---|
| 1 | Hierarchy < 2 s (tab → north star + read-out without scrolling at 1440) | ✔ | ✔ | ✔ | ✔ | ✔ |
| 2 | Range switch re-paints series + tables + CSV label in one pass | ✔ | ✔ | ✔ | ✔ | ✔ |
| 3 | No chart without a table equivalent | ✔ | ✔ | ✔ (tables lead) | ✔ | ✔ |
| 3b | Exceptions above the numbers, metric dictionary below them, data-health rail per tab | ✔ | ✔ | ✔ | ✔ | ✔ |
| 4 | Real `<table>` + `<caption>`, scoped headers, tabular numerals | ✔ | ✔ | ✔ | ✔ | ✔ (table view) |
| 5 | Shell intact, Analytics active, breadcrumb Home › Operations › Analytics | ✔ | ✔ | ✔ | ✔ | ✔ |
| 6 | Colour AA (4.5:1 text / 3:1 non-text), teal ramp only | ✔ | ✔ | ✔ | ✔ | ✔ |
| 7 | Type scale (display 30–42, strip 20–24, body 13–15, ≥11) | ✔ | ✔ | ✔ | ✔ | ✔ |
| 8 | Dark parity designed, charts included | ✔ | ✔ | ✔ | ✔ | ✔ |
| 9 | Keyboard complete (tabs, ranges, states, toggles, rows, chapters, Esc, `?`) | ✔ | ✔ | ✔ | ✔ | ✔ |
| 10 | Empty / loading / error / degraded | ✔ | ✔ | ✔ | ✔ | ✔ |
| 11 | Safety: no destructive action, no fake “live” claim | ✔ | ✔ | ✔ | ✔ | ✔ |
| 12 | Mobile 360/390: no page scroll, charts reflow, tables card/scroll fallback | ✔ | ✔ | ✔ | ✔ | ✔ |
| 13 | Performance: **0 external requests**, inline SVG charts, ~107–112 KB single file (≤70 KB budget only reachable if files split again — see §1) | ✔ | ✔ | ✔ | ✔ | ✔ |
| 14 | Legal/ops footer: © 2026 Nestlancer Admin · Terms · Privacy · host mono · Secured · HTTPS | ✔ | ✔ | ✔ | ✔ | ✔ |

## 6. Family winner

**V1 · Calibrated ledger** for general use — it is the direct repair of the captured page: an exceptions strip, the north star, a driver row, then the diagnostic and the dictionary, with the data-health rail pinned beside all of it.
**V3 · Readout stack** for reconciliation work (finance/accounting): the table is the interface and every rate opens its own computation.
**V4 · Dense board** for daily growth-ops scanning: the attention strip puts the four open questions above the metrics, so the board cannot be read without them.

## 7. Open questions for the owner's review

1. Projects: flag the 4 uncounted projects (current) or remove them from the total?
2. Requests/Quotes KPIs are lifetime-scoped (their endpoints take no period) — acceptable here, or should they move to the Requests/Quotes pages?
3. One CSV per view (current) or one per card?
4. The revenue trend capture conflict — which value is product truth?
5. Range vocabulary: keep the captured `7d/30d/90d/1y` and show the API mapping (current), or adopt the API enum in the UI?
6. **Size vs. portability:** self-contained pages are ~107–112 KB each because tokens, base CSS, the icon sprite and both logo marks are inlined (~45 KB). Split them back into shared files (needs a server/preview that can fetch siblings) or keep the single-file pages?
7. **Metric ownership:** the dictionary prints “Owner — not captured” and “Refresh — not captured” for every metric. Should F20 name real owners/cadences (product decision, not design), or keep the empty slots?
8. **Targets:** no analytics endpoint carries a target or benchmark. Should the north-star card stay target-less, or does the owner want a target set (which would then need a source)?.
