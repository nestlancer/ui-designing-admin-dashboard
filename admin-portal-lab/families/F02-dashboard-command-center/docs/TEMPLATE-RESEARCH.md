# F02 Template Research — Operations Dashboards

## Gate/order attestation

Research began **after Gates S, R, and A passed**. Two web searches were used, followed by direct page fetches. Nine distinct dashboard references were reviewed. No generator, template source, component package, colour scheme, or demo dataset is imported into the lab.

## References — 9

### 1. Signal — Infrastructure Overview

- URLs: [live dashboard](https://signal-devops.dashboardpack.com/dashboard), [template details](https://dashboardpack.com/theme-details/signal-dashboard/)
- Observed: Request Volume with hour/value ticks; Service Status broken into Healthy/Degraded/Down; Deployment Pipeline; Key Metrics; Active Incidents; command palette; mono commit IDs and relative timestamps; responsive collapsible shell and density options documented.
- **Borrow:** per-area health next to the work requiring attention; operational IDs/timestamps; status as text plus count; health → incident → queue narrative. This directly informs V4.
- **Reject:** neon-green palette, terminal styling everywhere, fabricated uptime/latency/server counts, and any implication that F02 has live probes.

### 2. Shadcn Admin

- URL: [shadcn-admin.netlify.app](https://shadcn-admin.netlify.app/)
- Observed: grouped sidebar, Dashboard/Overview/Analytics/Reports/Notifications tabs, four compact KPI cards, large chart beside Recent Sales, command-palette dialog.
- **Borrow:** calm shell proportions, chart/record split, compact command entry, accessible owned-components philosophy. Informs V1's definitive shell.
- **Reject:** four equal KPI heroes, generic sales metrics, external avatar runtime assets, and duplicating its component code.

### 3. Tabler

- URL: [preview.tabler.io](https://preview.tabler.io/)
- Observed: welcome/status summary, compact stat/progress cards, Last 7/30/3-month ranges, development activity, tables, tasks/invoices, responsive open-source shell.
- **Borrow:** small supporting-stat grammar, range control placement, activity/table pairing, visible next-step links. Informs V1/V5 compact strips.
- **Reject:** card wallpaper, long social activity feed, dead `href="#"` actions, and unrelated sales/invoice content.

### 4. Tremor

- URL: [tremor.so](https://www.tremor.so/)
- Observed: accessible dashboard/chart primitives; explicit date ranges and filters; Tracker, Bar Lists, Data Bars and micro-visualizations; “show the data” restraint; status tables.
- **Borrow:** chart axes/units before decoration, sparse bars/points, health tracker grammar, keyboard-operable filters. Informs C10 and V4/V5.
- **Reject:** importing React/Recharts/Radix or any CDN, decorative chart gradients, and demo values. F02 uses hand-written inline SVG.

### 5. TailAdmin

- URL: [demo.tailadmin.com](https://demo.tailadmin.com/)
- Observed: two lead metrics, Monthly Sales/Target split, compact recent-orders table with Filter/See all and explicit status labels.
- **Borrow:** one lead analytical surface with a supporting record table; concise status/filter grammar. Informs V2's hero/support balance.
- **Reject:** ecommerce target rings, maps, product imagery, and unrelated monthly-target content.

### 6. Ant Design Pro — Analysis

- URL: [preview.pro.ant.design/dashboard/analysis](https://preview.pro.ant.design/dashboard/analysis)
- Observed: compact metric row, 今日/本周/本月/本年 range tabs, chart beside ranked list, search table, category share.
- **Borrow:** range tabs close to the data they change; ranked queue/list counterpoint to a chart; compact enterprise density. Informs V3/V5.
- **Reject:** repeated unexplained percentages, dense KPI equivalence, untranslated demo content, and remote assets.

### 7. Mazer

- URL: [zuramai.github.io/mazer/demo](https://zuramai.github.io/mazer/demo/)
- Observed: profile-stat summary, large visit chart with download actions, regional breakdown, latest comments/messages, visitors-profile share.
- **Borrow:** secondary digest/activity rail beside a primary operational surface; clear chart/table grouping. Informs V2/V4 digest placement.
- **Reject:** social-profile dashboard framing, remote avatar dependencies, donut-for-everything, and export controls not required by F02.

### 8. AdminLTE 3

- URL: [adminlte.io/themes/v3/index.html](https://adminlte.io/themes/v3/index.html)
- Observed: four small info boxes with More info drill links, sales chart, Direct Chat, To Do List, breadcrumb and compact shell.
- **Borrow:** every summary has a More-info destination; direct action is more valuable than another statistic. Supports C2 drill-down discipline.
- **Reject:** equal-weight info boxes, crowded unrelated widgets, placeholder links, and legacy visual treatment.

### 9. Flowbite Admin Dashboard

- URL: [flowbite-admin-dashboard.vercel.app](https://flowbite-admin-dashboard.vercel.app/)
- Observed: lead sales amount with previous-period comparison, Yesterday/Today/7/30/90-day ranges, tabbed statistics, transaction table with filters/status/reference numbers.
- **Borrow:** explicit range/comparison captions, transaction reference grammar, table filter/status relationship. Informs V3/V5 table and range treatment.
- **Reject:** promotional insights, smart-chat widgets, marketing cards, dead placeholder actions, and copied sales data.

## Synthesis by F02 requirement

| Requirement | Research translation |
|---|---|
| C1 hero + compact strip | TailAdmin/Ant Pro lead/support balance, but with blocked operator work and ₹ awaiting—not revenue vanity. |
| C2 drill-downs | AdminLTE More-info discipline applied to every strip cell; Signal incident-to-service relationship. |
| C6 shell badges/hubs | Shadcn grouped navigation + captured queue counts; avoid Tabler's oversized consumer-style summary. |
| C10 charts | Tremor units/filters + Ant Pro range placement + separated sparse columns; never Signal-like live claims. |
| A9 digest | Mazer/Tabler secondary activity rail, reduced to Riya's handover facts and explicit unavailable fields. |
| A11/A13 health | Signal Service Status + Active Incidents relationship, with unknown/not-probed defaults and simulated labels. |
| Dense variant | Ant Pro/Signal information density without sacrificing labels or focus. |
| Minimal/verdict variant | TailAdmin/Tremor restraint: one decision, one lead action, restrained secondary metrics. |

## Not imported

No React, Next.js, Bootstrap, Tailwind, Radix, Recharts, Tremor, icon package, font, image, colour preset, HTML fragment, or template source is brought into F02. Only layout ideas and interaction principles are carried into five manually authored teal variants.
