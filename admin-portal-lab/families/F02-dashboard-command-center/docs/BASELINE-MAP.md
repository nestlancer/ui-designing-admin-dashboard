# F02 · Baseline map — Gate S

## Gate S
Screenshots opened: **3/3** (`015-dashboard.webp`, `051-profile.webp`, `072-global-search-admin-dialog.webp`). HTML captures read: **13/13** (`02`, `03`, `04`–`11`, `132`, `133`, `191`). `nestlancer-admin-pages-html/README.md` and the matching entries of `audit-metadata.json` were read. Route: `/dashboard`; profile is screenshot-only; search is an overlay. Content freeze: **yes, as a historical, offline snapshot, not live data**.

### Important reconciliation
The family brief and older `015-dashboard.webp` show **7 open quotes**, but the later canonical `02-dashboard-index.html` capture (2026-10-30 13:38 UTC) shows **0 open quotes**, and its rows and period differ. The raw DOM is the tie-breaker for this lab; **0** is used in the strip and the older 7 is not mixed into its total. The older screenshot's four request rows also differ from the later DOM. The lab uses the four full later-capture rows below. The `191` capture says 20 unread messages rather than the canonical capture's 21; freeze **21**, with snapshot provenance. Dashboard contact-new **17** and the contact page's New **14** are different snapshots/definitions; do not pretend they are interchangeable. Queue ages, digest counts, per-service health and the current system state are not in this capture; show **unavailable / not checked**, not invented values. `System healthy` was a label in the captured UI, not a live health check here.

### Frozen command center
- Title `Command center`; description `Live revenue, queues, and what needs action — refreshed every 30s.`; shortcuts Pipelines, Analytics, Inbox. In this lab visibly label it **snapshot**: nothing refreshes or calls production.
- Needs attention: Pending requests **11**, Open quotes **0**, Pending pay **16**, Flagged msgs **0**, Contact new **17**, Alerts **0**. Caption `System healthy` is captured, with as-of context.
- 30-day metrics: Revenue (month) **₹7,08,160.00**, `INR · ₹2,60,790.00 awaiting`; Total users **34**, New users **34**, Active projects **4**, Completed projects **10**, Pending requests **11**. The identical user totals are suspect per C16, not a verified growth claim.
- Revenue chart 30 points, latest **₹0.00**. Request volume **46 total**, 30 points, latest **0**. Project mix: In Progress **4 · 24%**, Pending Payment **3 · 18%**, Completed **10 · 59%** (percentages round to 101%).
- Moderation: Flagged messages **0**, New contact mail **17**, Pending settlements **16**, Message center.
- Header: notifications **99+** (`aria-label`: 188 unread), messages **21**, Riya Kapoor / RK, search, moderation, theme. Sidebar account `admin@nestlancer.com · Administrator`; footer `© 2026 Nestlancer Admin`.

### Range captures (period controls)
| Range | Date window | Revenue metric | Chart caption |
|---|---|---:|---|
| 7 days | Oct 24–30, 2026 | ₹0.00 | 7 points · latest ₹0.00 |
| 30 days | Oct 1–30, 2026 | ₹7,08,160.00 | 30 points · latest ₹0.00 |
| 90 days | Aug 2–Oct 30, 2026 | ₹7,08,160.00 | 3 points · latest ₹7,08,160.00 |
| 1 year | Oct 31 2025–Oct 30 2026 | ₹7,08,160.00 | 13 points · latest ₹7,08,160.00 |
The series itself is not reliably frozen as a reusable dataset. Do not invent a line chart. Use the captured point count/latest value and a labelled sparse/no-series state. Range changes in the prototype are local historical-state switches.

### Recent requests (`02`)
| Request ID | Customer | Subject | Status | Date |
|---|---|---|---|---|
| `01a10f84-31f1-75a6-aeb1-cbe61a191581` | Arjun Mehta | AUDIT-P24-20261005-6y6fa-sent Request | Expired Quote | Oct 6, 2026, 4:41 AM |
| `01a10f82-1ddb-75cc-ba1b-93609e9e7dc4` | Arjun Mehta | AUDIT-P24-20261005-6v89t-sent Request | Expired Quote | Oct 6, 2026, 4:39 AM |
| `01a10f7f-7698-71f1-8c99-709e45f72b67` | Arjun Mehta | AUDIT-P23-20261005-6rdsf Request to Quote Builder | Expired Quote | Oct 6, 2026, 4:36 AM |
| `01a10b3a-07a6-7274-8c9c-1f6ef658920e` | Arjun Mehta | AUDIT-P24-20261005-03ipf-sent Request | Expired Quote | Oct 5, 2026, 8:41 AM |

### Recent payments (`02`)
Sandeep Chopra · GPS Fleet Tracking Portal · **₹21,600.00**; Karthik Menon · UPI Switch Integration Layer · **₹36,000.00**; Pooja Kulkarni · Multi-Branch Clinic Booking · **₹19,500.00**, **₹26,000.00**, **₹19,500.00**; all captured `Oct 5, 2026, 3:49 AM`.

### Shell measurements and evidence
`audit-metadata.json` computed `--sidebar-width: 228px`, `--header-height: 52px`, sidebar `#f3f4f7`, active teal tint and six-pixel base radii. Original desktop sidebar uses `hidden lg:flex` (1024px breakpoint); `133` is 375×812. The existing lab token uses **232px**, a deliberate +4px consolidation, not an assertion about the live UI. The mobile table fallback was not verified in the capture; design it rather than claim otherwise. Both `132` and `191` have **zero CSS-variable changes**, confirming the dark toggle failed in the captured console.

### Dialog, routes, telemetry
`03` contains a dialog grouping Operations, Content, System and Quick actions, with ↑↓/Enter/Escape hints. Captured route links include `/requests?status=inbox`, `/quotes`, `/payments?status=pending`, `/moderation`, `/contact`, `/system`. Those are application routes, not files in this static lab; the demo must not navigate to a broken local URL. 02–11 and 132 have no failed requests and report an inline-style CSP console warning; 133 and 191 have neither. Do not generalise the report's projects outage to every service.

**Gate S: PASS** — discrepancy and unavailable fields are explicitly frozen/flagged, not fabricated.
