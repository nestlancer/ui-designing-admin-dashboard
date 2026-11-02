# F20 · Analytics Hub — GATE 1 · Concepts (printed before code)

All five variants share one token file (`shared/tokens.css`, teal only) and one content lock (BASELINE-MAP §3). Differences come only from geometry, hierarchy, narrative, density and interaction.

```
## GATE 1 (F20) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS · C 6/6: YES · P1 A: n/a (none scoped) · P2-P3: A11 global 5/5 · Gate: PASS
```

---

## F20 · Analytics hub · V1 "Calibrated ledger"

- **Keeps (Gate S):** H1 "Analytics hub" + lede · tabs Revenue/Users/Projects/Requests · ranges 7d/30d/90d/1y · Download CSV · every captured KPI label, table header, ₹ figure and microcopy.
- **Fixes/Adds:** C10 (axes, units, points, sparse) · C3 · C5 (blue slice → teal) · C9 · C12 · C18 · C20 · A11 global (degraded Projects series).
- **Axes:** A single-column ledger (1 hero + strip + chart + table per section) · B verdict-first · C static sections, range-led · D airy-minimal · E chart↔table toggle + provenance popover.
- **Layout sketch**
  ```
  ┌ page head: eyebrow · H1 · lede ─────────────── [7d 30d 90d 1y] [CSV] ┐
  │ [ Revenue | Users | Projects | Requests ]                            │
  │ ╭ hero: ₹7,08,160.00 ─────────────── +100 up (basis: 30 points) ╮   │
  │ ╰ INR · completed payments · provenance ⌄ ────────────────────────╯   │
  │ ┌ Revenue over time ───────────────── [Show table] ┐ y ₹ ticks       │
  │ │  chart (flat line + 1 spike, labelled)           │ gridlines       │
  │ └ 30 points · 29 empty · latest ₹0.00 ────────────┘                 │
  │ ┌ Revenue by category (table, totals row = hero) ┐                  │
  └ footer © 2026 Nestlancer Admin ────────────────────────────────────┘
  ```
- **Signature interaction:** the **calibration gutter** — every chart prints its point count and empty-bucket count on the axis baseline, and hovering/focusing a bar reveals "how is this calculated".
- **Triage story:** an operator opens Analytics to sanity-check one number; V1 answers "where did it come from, how complete is it, what changed" in one screen without touching a filter.
- **API basis:** `GET /api/dashboard/revenue|users|projects` (+ aliases), `GET /api/v1/admin/{requests,quotes,payments}/stats`, `GET /api/v1/health/system`.
- **Template refs (Gate T):** #1 analytical order, #2 takeaway sentence + zero-baseline bars, #5/#6 provenance, #10 chart↔table.
- **Shell:** full-width canvas, collapsible sidebar, breadcrumb, ⌘K, theme. Dark: designed, chart surfaces use card tint not invert.
- **Risk:** 375px — hero + strip must stack without pushing the chart below 3 screens; tabular figures need `overflow-wrap` in the CSV manifest.

## F20 · Analytics hub · V2 "Signal spine"

- **Keeps:** identical frozen content — tabs, ranges, CSV, all figures.
- **Fixes/Adds:** C10 (shared aligned axis) · C5 · C12 (query-value tiles with timeseries backgrounds) · C3 · C9 · C18 · C20 · A11.
- **Axes:** A chart-spine (one continuous shared-x-axis column of metric cards; tables docked in a right rail) · B verdict-first per card · C drill-down/scroll-linked spine · D dense-ops · E scroll-spy + shared crosshair.
- **Layout sketch**
  ```
  ┌ head ───────────────────────────── [ranges][CSV] ┐
  │ tabs                                            │
  │ ┌ spine (2fr) ──────────────┐ ┌ rail (1fr) ────┐ │
  │ │ ╭ KPI + tiny bars ╮       │ │ By status      │ │
  │ │ ╰─────────────────╯       │ │ …table         │ │
  │ │ ╭ chart A ─────────╮      │ │ By category    │ │
  │ │ ╰──────────────────╯      │ │ …table         │ │
  │ │ ╭ chart B ─────────╮      │ │ Quote conv.    │ │
  │ │ ╰──────────────────╯      │ │ (mono ledger)  │ │
  │ └ shared x-axis 09-11 … 10-10┘ └────────────────┘ │
  └──────────────────────────────────────────────────┘
  ```
- **Signature interaction:** one **shared time axis** across the tab's cards — moving the crosshair walks the same date in every panel and announces it in a live region.
- **Triage story:** reading a *trend*, not a number: the operator compares revenue vs request volume on the same dates in one vertical sweep.
- **API basis:** same as V1; each card states the endpoint it would call.
- **Template refs:** #3 (aligned x-axes, query value + timeseries background, symmetric halves), #13 (legend to top <768), #4 (no-data grey state replaced by teal-dim).
- **Shell:** full-width; rail collapses under spine at <1100px; on 375 the spine becomes stacked cards with legend on top.
- **Risk:** crosshair keyboard support (arrow keys) — must not trap focus; spine cards must not fake "live" updates.

## F20 · Analytics hub · V3 "Readout stack"

- **Keeps:** all frozen content, tables first this time.
- **Fixes/Adds:** C10 · C5 · C9 (mono readout) · C12 (one large display figure kept as the section verdict) · C3 · C18 · C20 · A11.
- **Axes:** A table-first (data tables own the page; charts become small multiples inside the table's first column) · B money/verdict-first via one display number · C table → chart → footnote reading order · D ledger/print density · E expandable rows + per-row sparkline toggle.
- **Layout sketch**
  ```
  ├ Display verdict: 46 requests · 43.9% converted ───────────────┤
  │ BY STATUS            COUNT  SHARE  ▁▂▃ spark                   │
  │ Draft                   5   10.9%  ▁                           │
  │ Submitted              11   23.9%  ▂▂                          │
  │ … (rows expand → "how calculated" + endpoint)                  │
  │ TOTAL                  46  100%                                │
  │ [Show charts] → small multiples strip                          │
  ```
- **Signature interaction:** **row expansion as provenance** — each row opens its own computation + endpoint + capture note inline (no modal).
- **Triage story:** reconciliation work — an accountant/operator checks totals against parts, exports, and leaves. Fastest path to "does this add up?".
- **API basis:** stats endpoints; series only where captured.
- **Template refs:** #7 (Stripe table-first, right-aligned tabular numerals), #6 (aggregation documented), #11 (table caption/scope/aria-sort), #14 (table scrolls inside itself at 375).
- **Shell:** full-width, but the readout column maxes at ~1100px for legibility (content column, not page canvas).
- **Risk:** dense tables at 375 → card fallback with `data-label` cells; sparkline must be `aria-hidden` with the number beside it.

## F20 · Analytics hub · V4 "Dense board"

- **Keeps:** all frozen content; adds nothing.
- **Fixes/Adds:** C10 · C5 · C9 · C12 · C3 · C18 · C20 · A11 · compact toggle inside the page (presentation only, `aria-pressed`).
- **Axes:** A bento grid (2×2 metric tiles + 2×1 charts + full-width table) · B action-first (exceptions surfaced: unverified counters, reconciliation gap, degraded tab) · C board-led with an "attention" strip · D compact console · E density toggle + inline tabs per tile.
- **Layout sketch**
  ```
  ┌ attention strip: ⚠ 4 of 18 projects uncounted · ⚠ 34/34/34 unverified · ⛔ projects API ┐
  │ ┌total₹──┐ ┌trend──┐ ┌points─┐ ┌status─┐                                          │
  │ ┌ chart: revenue ───────────────┐ ┌ breakdown table ──┐                            │
  │ ┌ full-width table / conversion ledger ──────────────────┐                          │
  ```
- **Signature interaction:** **attention-first board** — anything unverified or degraded is hoisted above the metrics, so the board cannot be trusted blindly.
- **Triage story:** a growth-ops operator scans the board in 20 seconds, notes the two red flags, exports, and moves on; optionally compacts rows for a 1080p screen.
- **API basis:** all 10 mapped endpoints; degraded tile bound to `/api/dashboard/projects`.
- **Template refs:** #3 (symmetry + group discipline), #13 (tight rows, sticky headers), #1 (max 7 primary metrics), #12 (short announcements).
- **Shell:** full-width mandatory (bento needs it); sidebar collapse changes tile count per row.
- **Risk:** bento at 375 must become a single column in a fixed order (attention → hero → charts → tables), never a 2-col squeeze.

## F20 · Analytics hub · V5 "Choreograph"

- **Keeps:** all frozen content — the same numbers, animated honestly.
- **Fixes/Adds:** C10 · C5 · C9 · C12 · C3 · C18 · C20 · A11.
- **Axes:** A split stage (charts stage left, verdict + receipt rail right) · B narrative-first ("what changed in this range") · C chapter/stepper-led: range → read → evidence → export · D airy editorial · E motion signature: range crossfade + stroke-draw + count-up, all `prefers-reduced-motion`-safe.
- **Layout sketch**
  ```
  ┌ step rail: 1 Range — 2 Read — 3 Evidence — 4 Export ┐
  │ stage (charts, one at a time, crossfade) │ receipt    │
  │  ✎ hand-drawn annotation on the spike    │ ✓ 30 pts   │
  │  ▁▂▃ stroke-draw on range change         │ ⛔ 1 degraded│
  │  count-up on hero (never through false)  │ [CSV]      │
  ```
- **Signature interaction:** **range-change choreography** — old series fades, new series draws, hero counts up, and a polite live region says "Range 90d · 90 buckets · 1 with value". Nothing animates a number the data doesn't support.
- **Triage story:** explaining a number to someone else — the page walks range → reading → evidence → export in that order, and the receipt is exportable.
- **API basis:** same mapped endpoints; the receipt lists them in mono.
- **Template refs:** #2 (takeaway sentence), #5 (computation card as receipt), #10 (chart/table switch), #4 (explicit absence states inside the animation).
- **Shell:** full-width stage + right receipt rail; 375 → stage then receipt stacked, motion reduced to a 150ms opacity.
- **Risk:** animation is the easiest place to lie — every animation must end on a real fixture value; no infinite loops; one `stroke-dashoffset` element max.

---

## Difference test (multi-axis; colour is not an axis)

| Variant | A layout | B hierarchy | C narrative | D density | E interaction | Distinct from V1 on |
|---|---|---|---|---|---|---|
| V1 Calibrated ledger | single-column ledger | verdict-first | static sections, range-led | airy | toggle + provenance popover | — |
| V2 Signal spine | chart spine + right rail | per-card verdict | scroll-linked spine | dense-ops | scroll-spy + shared crosshair | A, C, E, D |
| V3 Readout stack | table-first | money-first | table → chart → footnote | ledger/print | expandable rows | A, C, D, E |
| V4 Dense board | bento grid | action-first (exceptions) | board-led + attention strip | compact | density toggle + tiles | A, B, C, D, E |
| V5 Choreograph | split stage + rail | narrative-first | chapter/stepper | airy-editorial | motion signature | A, B, C, E |

No pair shares the same A+C. Coverage: ≥1 minimal (V1) · ≥1 dense (V4) · ≥1 chart-led (V2) · ≥1 table-led (V3) · ≥1 motion-led (V5).

## Coverage table

| Item | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|
| C3 | ✔ | ✔ | ✔ | ✔ | ✔ |
| C5 (incl. chart ramp) | ✔ | ✔ | ✔ | ✔ | ✔ |
| C9 | ✔ | ✔ | ✔ | ✔ | ✔ |
| C10 | ✔ | ✔ | ✔ | ✔ | ✔ |
| C12 | ✔ | ✔ | ✔ | ✔ | ✔ |
| C18 | ✔ | ✔ | ✔ | ✔ | ✔ |
| C20 | ✔ | ✔ | ✔ | ✔ | ✔ |
| Google-free CSV per view | ✔ | ✔ | ✔ | ✔ | ✔ |
| Range discipline 7/30/90/1y | ✔ | ✔ | ✔ | ✔ | ✔ |
| A11 (global) degraded series | ✔ | ✔ | ✔ | ✔ | ✔ |
| Tabs ×4 + all states | ✔ | ✔ | ✔ | ✔ | ✔ |
