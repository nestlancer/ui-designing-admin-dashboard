# F02 Concepts — Dashboard · Command Center

## Shared frozen contract

All five use the 228px/56px sidebar, 52px header, breadcrumb, ⌘K, bells 99+/21, moderation shield, Riya Kapoor operator menu, theme control, mobile drawer, and footer. All preserve the Gate-S values, range captions, tables, mix/moderation content, and teal tokens.

Every variant includes: one blocked-work/₹ hero; six drill-down cells with sourced/honest age badges; six compact KPIs; labelled Revenue and Request-volume charts; Recent requests/payments; Project mix; Moderation queues; Riya digest with unavailable activity/delta labelled; healthy/degraded slot; Database/Cache/Queue/Storage health grid; loading/empty/error/degraded previews; working local queue/detail previews and lightweight ⌘K.

## V1 — Ground Truth Command (dense / definitive shell)

- **A · Layout:** classic 228px sidebar + 52px header; hero above compact six-cell attention strip; two-column chart/project-mix row; recent tables; digest/health in the lower rail.
- **B · Visual hierarchy:** the 16 blocked payments and ₹2,60,790.00 awaiting lead; H1 and period controls remain secondary.
- **C · Info architecture:** captured Operations/Content/System order, upgraded with Work hub grouping and badges; queue preview opens as a right-side drawer so dashboard context remains.
- **D · Density:** calm expert density, 12–14px body, comfortable 16px card padding.
- **E · Motion/material:** flat 6px cards, short drawer fade/slide, reduced-motion instant.
- **Signature interaction:** every attention cell opens a filtered queue drawer with oldest-age honesty; keyboard focus is trapped and restored.
- **State model:** global captured ranges; local chart loading/empty/error; healthy/degraded preview; no-JS readable dashboard and anchor fallback.
- **Sketch:**
  ```text
  [228 sidebar][52 header: crumb · ⌘K · bells · Riya · theme]
  [Command center                         range]
  [16 blocked payments | ₹2,60,790 awaiting | Review payments]
  [Requests 11][Quotes 0][Pay 16][Flagged 0][Contact 17][Alerts 0]
  [KPI compact strip · six values]
  [Revenue labelled chart       ][Project mix]
  [Recent requests             ][Recent payments]
  [Request volume chart        ][Moderation]
  [Riya handover               ][Ops-health grid]
                              └─ filtered queue drawer →
  ```

## V2 — Verdict-First Briefing (minimal / narrative-led)

- **A · Layout:** same functional shell, but the content is a narrow briefing column with a large verdict hero; attention cells read as a two-by-three action grid; supporting analytics are stacked in reading order.
- **B · Visual hierarchy:** a single sentence—“16 payments are blocked on operators”—and one Review payments action dominate; ₹ awaiting is the second beat, not a card wall.
- **C · Info architecture:** Shift brief → Action queues → Money/request evidence → Recent work → Handover/health. Content is grouped in native `<details>` sections on small screens, never hiding the hero or queue actions.
- **D · Density:** airy minimal, generous 24–32px section gaps, fewer simultaneous panels.
- **E · Motion/material:** border-led editorial surfaces, soft notice emphasis, no chart animation; drawer becomes a bottom sheet on mobile.
- **Signature interaction:** “Start shift brief” moves focus through the three non-empty action queues in sequence while preserving a visible “3 of 3” progress label (queue groups, not fabricated item counts).
- **State model:** same captured ranges and previews; hero zero-blocked preview replaces the lead sentence with an honest clear-state message.
- **Sketch:**
  ```text
  [shell]
  [COMMAND CENTER / SHIFT BRIEF]
  ┌──────────────────────────────────────────┐
  │ 16 payments are blocked on operators.    │
  │ ₹2,60,790.00 awaiting · [Review payments]│
  └──────────────────────────────────────────┘
  [Start shift brief · 3 action queues]
  [Requests 11 + age] [Pending pay 16 + age]
  [Contact 17 + age]  [Quotes/Flagged/Alerts zero]
  [Compact KPI line]
  [Revenue evidence] [Request-volume evidence]
  [Recent requests → payments → mix/moderation]
  [Riya handover] [Health]
  ```

## V3 — Queue Spine (queue-led / inline triage)

- **A · Layout:** after a slim verdict band, the Needs-attention cells become a persistent vertical queue spine on the left of the content; the selected queue's preview and oldest-age badge occupy the adjacent workspace. Analytics/recent activity follow below.
- **B · Visual hierarchy:** selected queue and its next action outrank charts; the ₹ hero remains a compact sticky verdict band.
- **C · Info architecture:** Queue spine → Queue workspace → Evidence (KPIs/charts) → Records (tables/mix/moderation) → Handover/health. Shell navigation uses collapsible hub groups.
- **D · Density:** medium-dense, queue rows 52–60px, data workspace 16px.
- **E · Motion/material:** selected spine row uses a 2px teal marker; workspace crossfades 150ms; mobile spine becomes horizontal scroll-free wrapping segments.
- **Signature interaction:** clicking or arrowing through queue cells updates the inline workspace and `aria-selected`; zero queues show a purposeful clear state and remain selectable.
- **State model:** captured range and surface previews; selected queue persists only for the page session, not as fake saved preferences.
- **Sketch:**
  ```text
  [shell]
  [16 blocked · ₹2,60,790 awaiting · Review]
  [QUEUE SPINE      | SELECTED QUEUE WORKSPACE]
  [● Requests 11    | Pending requests · Oldest 6d]
  [○ Quotes 0       | filtered request rows / clear]
  [● Pay 16         | [Open full queue preview]]
  [○ Flagged 0      |]
  [● Contact 17     |]
  [○ Alerts 0       |]
  [KPI strip]
  [Revenue + Request charts]
  [Recent requests + payments]
  [Mix + Moderation + Riya + Health]
  ```

## V4 — Signal Health Board (health-led / dense-narrative)

- **A · Layout:** top verdict hero, then a three-column operations board: Service-health grid / Active work queues / Riya handover. Charts form a labelled pipeline beneath; tables and mix/moderation occupy the evidence row.
- **B · Visual hierarchy:** overall health and blocked money share the first screen; component tiles remain secondary and unknown until previewed.
- **C · Info architecture:** Status → Incidents/queues → Deploy/evidence analog (revenue/request charts) → Records → Handover. The shell's moderation shield links directly to the health/incidents region.
- **D · Density:** dense monitoring board, compact 12px labels and small status rows without tiny touch targets.
- **E · Motion/material:** status cells use text/icon/border, no pulsing dots; degraded banner slides 150ms and is instant under reduced motion.
- **Signature interaction:** Run health preview changes overall and four component tiles from “Not probed” to explicitly simulated results; degraded selection reveals the related queue/incident link and Retry preview.
- **State model:** healthy/degraded, component unknown/simulated, chart loading/empty/error, and queue zero states all visible without network claims.
- **Sketch:**
  ```text
  [shell]
  [System healthy (captured)] [16 blocked · ₹ awaiting]
  [SERVICE STATUS  | ACTIVE WORK       | RIYA HANDOVER]
  [Database —      | Requests 11 · 6d  | Actions: not captured]
  [Cache —         | Pay 16 · age n/a  | Delta: not captured]
  [Queue —         | Contact 17        | Current handover facts]
  [Storage —       | Zero queues clear |]
  [Run health preview]
  [Revenue (INR) pipeline][Request volume pipeline]
  [Recent requests/payments][Mix + moderation]
  ```

## V5 — Motion Shift Console (dense / motion-led)

- **A · Layout:** compact multi-metric command surface with a wide hero and 2×3 attention matrix; lower content uses a tabbed Evidence/Records/Handover workspace while all primary content remains available in a linear no-JS flow.
- **B · Visual hierarchy:** ₹ and queue counts use 32–40px display type; charts and tables are deliberately subordinate to the live-looking—but explicitly captured—shift matrix.
- **C · Info architecture:** Command matrix → Evidence tabs (Charts / Records / Handover & health) → footer. Deep links and a View-all disclosure expose every section; tabs use proper keyboard semantics.
- **D · Density:** most compact variant, 12px labels, 8–12px card gaps, single-line KPI cells that wrap cleanly.
- **E · Motion/material:** signature range/count crossfade and workspace tab transition (160–220ms), transform-only drawer; all motion removed under reduced preference.
- **Signature interaction:** range changes animate only the changed KPI/chart region while announcing the exact new caption; queue cells update a small inline preview without losing tab or focus position.
- **State model:** captured range/empty/loading/error/degraded; no animated number fabrication or live timer.
- **Sketch:**
  ```text
  [shell]
  [COMMAND / 16 blocked / ₹2,60,790] [range]
  [Requests 11][Quotes 0][Pay 16]
  [Flagged 0  ][Contact17][Alerts 0]
  [six-KPI microstrip]
  [Evidence | Records | Handover & health] ← real tabs
  [Revenue + Request charts]
  [or Recent tables + mix/moderation]
  [or Riya digest + health grid]
  [All-sections disclosure / no-JS linear content]
  ```

## Difference check

| Variant | A or C difference | Additional axes changed | Coverage archetype |
|---|---|---|---|
| V1 | Classic dashboard + right drawer | B action-first, D calm dense | Dense ground-truth |
| V2 | Narrow narrative briefing + stacked evidence | B verdict sentence, D airy, E border-led | Minimal narrative-led |
| V3 | Queue spine + inline selected workspace | C queue-first IA, B selected queue, E marker/crossfade | Queue-led |
| V4 | Three-column health/work/handover board | C status-first IA, B health+money, E degraded transition | Health/dense narrative |
| V5 | Command matrix + keyboard Evidence tabs | C tabbed IA, D compact, E range/workspace motion | Dense motion-led |

Each variant differs from V1 and the others on at least three of A/B/C/D/E, always including A or C. All C1/C2/C6/C10/C3/C5/C9/C12/C15/C18/C20 are planned 5/5; A9/A11/A13 are planned 5/5; no P1 ADD belongs to F02.
