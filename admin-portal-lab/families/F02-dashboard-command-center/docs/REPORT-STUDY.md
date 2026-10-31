# F02 Report Study — Dashboard · Command Center

## Evidence read

- Full Markdown report: `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` — **read**; Markdown remains authoritative.
- Workbook: `reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx` — **10/10 sheets iterated**: Executive Findings, Design Tokens, Page Inventory, Benchmark Patterns, CHANGE list, ADD list, KEEP list, Roadmap, Acceptance checklist, Sources.
- Relevant rows were reconciled with Gate S. Where the report's older example says 7 quotes/Contact 14 and the latest HTML says 0/17, the HTML value wins for the default display; the report's design instruction still applies.

## Executive findings that govern F02

| Finding | Report evidence quoted | F02 response |
|---|---|---|
| 1 · Projects outage | “Every request to `GET /api/v1/admin/projects*` … dies at network level”; “`/projects` is stuck at *‘Loading…’*” | A11/A13 require an honest degraded banner, retry, and per-area status rather than a permanent loader. |
| 3 · Session instability | “`/api/auth/refresh` returned **409 and 503** mid-crawl”; operators bounced to sign-in | Session/degraded messaging must preserve context and avoid claiming recovery until it happens. F01 owns sign-in depth. |
| 4 · Brand/token leaks | “The admin console is teal + Inter”; “`--article-accent` and `--tw-ring-color` leak Tailwind blue” | C5: use only the locked teal token file; no blue chart series or token leaks. |
| 5 · Badge contrast | “Success + info badges fail WCAG AA (2.59:1 and 3.63:1 vs white)” | C3: shared AA-safe status text/surfaces plus text/icon, never colour alone. |
| 6 · Queues not workable | “Header shows **99+ notifications / 21 messages**”; queues lack triage ergonomics | Freeze bell counts; make every attention cell a real keyboard drill-down. Deeper bulk triage belongs to queue families. |
| 7 · KPI noise | “‘Needs attention’ is verdict-first done right — but the 6 KPI cards … all say an identical ‘↑ new’” | C1: one blocked-work/₹-at-risk hero; compact secondary KPIs with captured range deltas. |
| 9 · Dead dark mode | “Dark mode exists in CSS but never engaged”; two attempts produced “0 token diffs” | C18: working `.dark`, `?theme=`, persistence, and desktop/mobile dark QA in all five. |
| 10 · Compressed, ID-hostile type | “H1 is 24/30px bold; there is no mono face” | C9/C12: mono full IDs/refs/timestamps and 32–40px operational hero/count display. |
| 12 · Duplicated responsive tables | “Responsive tables are implemented by duplication”; screen-reader triple-announce risk | Use one semantic table per dataset with CSS card fallback, not duplicate mobile/desktop DOM. |
| 13 · Sparse-chart failure | “Revenue + request-volume charts collapse to a single spike with ‘30 points · latest ₹0.00’” | C10: labelled axes, separated columns/points, exact captions, and explicit sparse/no-data explanations. |
| 14 · Badge-less navigation | “17 sidebar items, zero nav badges” | C6: hub-grouped navigation with Requests 11, Verification/Pay 16, Contact 17, Messages 21, Notifications 188/99+. |

### Related data-quality evidence

- Workbook Page Inventory A9: `/users` has **“34/34/34 suspect”**.
- C16: “Verify counting (**34/34/34 + 0 suspended** smells like test data or a bug).”
- F02 does not own the Users counting fix. It freezes Total users 34/New users 34 and adds a visible captured-data caution instead of silently repairing or inventing a third value.

## Business weight and acceptance intent

- Report §4.2: **Dashboard command — “First 30 seconds of every shift”**; UI verdict **“Strip is great, KPIs are noise”**; required outcome **“1 hero + strip drill-downs + labelled charts.”**
- Roadmap P3: **“1 hero + drill-down strip + labelled charts + sparse states + ops-health grid”** so **“First 30s directs the shift.”**
- Acceptance checklist: **“Operator can name the single most important queue + ₹ at risk in < 2 s.”**
- Benchmark rules retained: one dominant thing; density follows expertise; status is not colour alone; failed/aged items are work queues; empty states are features; money typography matters.

## CHANGE items — 11/11

| ID | Report requirement quoted | F02 design contract |
|---|---|---|
| C1 | “Restructure KPIs: **1 hero + compact strip**”; hero example “7 quotes + 16 payments blocked on operators” + ₹ at risk | One hero combines blocked operator work and **₹2,60,790.00 awaiting**. Latest capture changes the quote part to 0; it does not restore the older 7. Six KPI values become a compact secondary strip. |
| C2 | “Make every Needs-attention cell a drill-down”; “Click Pending requests 11 → filtered queue; add age badges (**oldest 6d**)” | All six cells, including zero cells, open filtered in-page queue views. Requests may use sourced **Oldest 6d**. Other cells say **Oldest not supplied** unless API evidence provides an age. |
| C3 | “Fix success/info badge contrast”; keep dot + text | Shared status tokens, AA text, and icon/text labels in both themes. |
| C5 | “Rename + purge token leaks”; document admin-teal/client-blue split | Import exact shared teal tokens; no second hue, blue chart, or remote theme. |
| C6 | “Add nav badges + collapse to hub groups”; Content popover | Group Operations/Work/Content/System or equivalent hubs; preserve all 17 destinations and add captured counts. Contact uses latest 17, not older 14. |
| C9 | “Mono + full IDs on hover”; click-to-copy keeps working | Mono IDs, audit refs, amounts/timestamps; full value in `title`/accessible text. Any copy control gives a local success/failure announcement. |
| C10 | “Label charts + sparse-data states”; “no data in range” + “only N points” | Revenue (INR)/time and Requests/day axes; exact point captions; no connected spike-of-doom; loading/empty/error previews. |
| C12 | “Keep 12–14px density; add 32–40px display for ₹ amounts + queue counts” | Compact ops body copy with a 32–40px hero amount/count and a 32–40px desktop page H1. |
| C15 | “Remove the cookie banner for operators” | No cookie/consent UI in any F02 variant. |
| C18 | “Repair dark mode or remove the toggle” | Repair it; real dark tokens and verified toggle in 5/5. |
| C20 | “Logo alt text” | Local Nestlancer logo with explicit accessible alt/name; no empty-alt dark counterpart. |

## ADD items — 3/3

| ID | Priority | Report requirement quoted | Honest F02 interpretation |
|---|---|---|---|
| A9 | P2 | “Operator activity + handover digest (**my actions today, queue delta since yesterday**)”; “data already logged” | Include Riya's handover surface in at least 3/5 (target 5/5). Do not fabricate activity counts/deltas: use API-backed values if supplied, otherwise explicitly label them unavailable in the static capture. |
| A11 | P2 | “System-status/degraded banner (**Project data unavailable — retrying**)”; “The outage showed a bare loader; reassure instead” | Healthy/degraded preview slot in at least 3/5 (target 5/5), with Retry and context-preserving copy. No live-health claim without a response. |
| A13 | P3 | “Ops-health mini-grid (**per-area status at a glance**)” | Signal-style per-area grid in at least 3/5 (target 5/5), tied to documented health/performance fields or labelled preview states. |

No P1 ADD is assigned to F02. The P1 changes C1/C2/etc. still apply to all five as listed in the family prompt.

## KEEP items — all F02-relevant rows

- **“Needs-attention strip”** — verdict-first, live, counted; extend it, never replace it.
- **“⌘K command palette + keyboard hints”** — preserve the trigger and hints; F03 owns deeper palette behaviour.
- **“Microcopy honesty”** — keep graceful, direct, non-claiming language in sparse/error/degraded states.
- **“Teal + Inter + 6px radii ops identity”** — preserve the shared system-font Inter stack and locked 6px medium radius; do not merge with client blue.
- **“Razorpay trust strips / settlement transparency”** — retain the awaiting/pending settlement figures: **16 pending · ₹2,60,790.00** and **INR · ₹2,60,790.00 awaiting**.

## Report-to-design decision

The first screen must answer: **What is blocked, how much money is awaiting, and where do I click next?** KPI wallpaper, identical trend glyphs, decorative health dots, dead strip cells, and chart spikes without scale are rejected. Data that was not captured remains explicitly unavailable rather than becoming plausible-looking demo telemetry.
