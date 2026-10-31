# F02 Baseline Map — Dashboard · Command Center

## Source inventory

- Screenshots read: `015-dashboard.webp`, `051-profile.webp`, `072-global-search-admin-dialog.webp` (**3/3**).
- Timestamped HTML read: `02` through `11` (ten files), `132`, `133`, and `191` (**13/13**).
- Metadata read: the corresponding 13 records in `audit-metadata.json`; all are `/dashboard`. Capture 03 is `ctrl+k`; 04–11 are range states; 132 is `theme-toggle`; 133 is `mobile-375`; 191 is `theme-menu-dark`.
- Baseline title/H1: **`Command center · Admin`** / **`Command center`**.
- The cookie notice exists in the DOM and is removed under C15. Capture 02 records one inline-style CSP console error; it is not reproduced.

## Capture precedence and conflicts

The screenshots and the later timestamped HTML do not show the same mutable business data. The visual shell comes from the screenshots and computed/captured CSS. **Default mutable values come from `02-dashboard-index.html` (`2026-10-30T13:38:15Z`) because it is the latest structured baseline capture.** Later state files are used for their named interaction evidence, not blended into the default.

| Evidence | Screenshot/prompt-era state | Latest HTML 02 state | Frozen default decision |
|---|---|---|---|
| Open quotes | 7 | 0 | **0**; zero remains a functional drill-down |
| Revenue delta at 30d | `↑ new` | `↓ -100%` | **`↓ -100%`**; other ranges keep their own captured deltas |
| Chart window | Sep 11–Oct 10 | Oct 1–Oct 30, 2026 | **Oct 1–Oct 30** |
| Recent requests | Submitted/Converted and older IDs | Four Expired Quote rows below | **HTML rows** |
| Message bell | 21 | 21 in 02; 20 in later 191 | **21** for baseline 02; 191 proves only theme-menu behaviour |
| Contact badge guidance | 14 in C6 narrative | Contact new 17 | **17** wherever the same captured queue count is shown |

Total users 34 and New users 34 remain frozen and visibly flagged as suspect captured data, not “corrected.” The third 34 in report finding S5 is recorded during Gate R.

## Measured definitive shell

| Shell element | Measured/captured value | Lab contract |
|---|---|---|
| Desktop sidebar | `--sidebar-width: 228px` | 228px, fixed left at 1024px+ |
| Collapsed rail | `--sidebar-rail-width: 56px` | 56px; accessible icon buttons with names |
| Header | `--header-height: 52px` | 52px sticky/flex header |
| Sidebar surface | `--ge-sidebar-bg: #f3f4f7` light | Use locked token equivalents; dark parity required |
| Active item | primary text + primary/0.10 background | Teal active background plus `aria-current` and visible marker |
| Breakpoints | Tailwind 640/768/1024/1280/1536; sidebar `hidden lg:flex` | Mobile drawer below 1024px; core lab QA at 360/375/390/768/1024/1440 |
| Content padding | 16px mobile, 24px `sm`, 32px `lg`; 24/32px vertical | Retain compact ops density with fluid gutters |
| Main | `#main-content`, `tabindex=-1`, independent vertical scroll | Keep skip link and visible focus |
| Footer | compact bordered `© 2026 Nestlancer Admin` | Preserve in every variant |

Header order: mobile menu / desktop collapse → Home › Operations › Dashboard breadcrumb → Search pages… `⌘K` → notifications → messages → moderation shield → RK Riya Kapoor operator menu → theme. Mobile uses icon search and drawer controls rather than squeezing the full desktop search field.

## Navigation and header content freeze

### Captured routes

- Operations: Dashboard `/dashboard`; Pipelines `/pipeline`; Inquiries `/contact`; Notifications `/notifications`; Requests `/requests`; Quotes `/quotes`; Projects `/projects`; Payments `/payments`; Users `/users`; Messages `/messages`; Moderation `/moderation`; Analytics `/analytics`.
- Content: Blog `/content`; Portfolio `/portfolio`; Media Library `/media`.
- System: System Config `/system`; Webhooks `/integrations`; Audit Logs `/audit`.
- Breadcrumb: Home › Operations › Dashboard. Header actions: Pipelines, Analytics, Inbox `/requests?status=inbox`.
- C6 adds hub grouping and badges; the baseline itself has no nav badges. Requests 11, pending verification/pay 16, Contact 17, Messages 21, and Notifications 188/99+ are the frozen count sources.

### Bells/operator

- Notifications: visible **99+**, accessible name **188 unread notifications**.
- Messages: visible **21**, accessible name **21 unread messages**.
- Moderation shield: opens captured empty message “No flagged messages right now” / “Open moderation queue.”
- Operator: **RK · Riya Kapoor**, accessible account-menu name. Sidebar identity: **admin@nestlancer.com · Administrator**; Sign out.
- Profile screenshot 051 confirms **Operator profile**, Riya Kapoor, admin@nestlancer.com, enterprise/audited copy, and 2FA **Not enabled**. F02 keeps this as operator-menu context; it does not build another family's profile page.

## Needs-attention and KPI content freeze

### Strip

`Needs attention · Live · System healthy`

| Cell | Count | Captured target |
|---|---:|---|
| Pending requests | 11 | `/requests?status=inbox` |
| Open quotes | 0 | `/quotes` |
| Pending pay | 16 | `/payments?status=pending` |
| Flagged msgs | 0 | `/moderation` |
| Contact new | 17 | `/contact` |
| Alerts | 0 | `/system` |

Every cell becomes a keyboard-accessible filtered-queue drill-down under C2, including zero cells. Oldest-age badges must be honest; no age is invented where the captures do not supply one.

### Default 30d KPIs

- Revenue (month): **₹7,08,160.00**; **INR · ₹2,60,790.00 awaiting**; **↓ -100%**.
- Total users: **34 · ↑ new**.
- New users: **34 · This window · ↑ new**.
- Active projects: **4 · ↑ new**.
- Completed projects: **10 · ↑ new**.
- Pending requests: **11 · ↑ new**.
- Period line: **Period metrics · Oct 1, 2026, 12:00 AM — Oct 30, 2026, 1:38 PM · 30d window**.

The identical trend treatment is noise, so C1/C10 changes hierarchy and chart explanations without changing values.

## Range-state freeze (04–11)

The first tablist follows the Needs-attention/period metrics and the second follows Revenue trajectory. Both show the same selected range in the captures. Request volume remains explicitly last-30-days in every capture; it is not assigned invented 7/90/365-day data.

| Range | Period start (all end Oct 30, 2026, 1:38 PM) | Revenue | Revenue caption | KPI delta treatment |
|---|---|---:|---|---|
| 7 days | Oct 24, 2026, 12:00 AM · 7d | ₹0.00 | **7 points · latest ₹0.00** | Revenue/Total/New/Active/Completed/Pending `→ —`; New users 0 |
| 30 days | Oct 1, 2026, 12:00 AM · 30d | ₹7,08,160.00 | **30 points · latest ₹0.00** | Default values above |
| 90 days | Aug 2, 2026, 12:00 AM · 90d | ₹7,08,160.00 | **3 points · latest ₹7,08,160.00** | New users 34; all cards `↑ new` |
| 1 year | Oct 31, 2025, 12:00 AM · 365d | ₹7,08,160.00 | **13 points · latest ₹7,08,160.00** | New users 34; all cards `↑ new` |

Captured SVG geometry supports truthful sparse representations:

- 7d: seven daily zero points (Oct 24–30).
- 30d: 30 daily points; one ₹7,08,160.00 column on Oct 5, other days zero. Replace the misleading connected spike with labelled columns/points.
- 90d: three monthly points (`26-08`, `26-09`, `26-10`), only October non-zero.
- 1y: 13 monthly points (`25-10` through `26-10`), only October 2026 non-zero.
- Revenue axes must name **Revenue (INR)** and the day/month time unit. Keep exact captions and add “only N points” or “no revenue recorded in range” as appropriate.

## Request-volume chart freeze

- Heading: **Request volume over time**; subtitle **Inbound briefs · last 30 days · live**; badge **46 total**.
- Caption: **30 points · latest 0**.
- Captured geometry is consistent with **36 requests on Oct 5 + 10 on Oct 6 = 46 total**, all other daily points zero. Use separated columns/points, not a dramatic area spike.
- Axes must name **Requests** and **Day (Oct 2026)**. The latest day is zero and remains visible.

## Project mix and moderation freeze

- Project mix · Lifecycle share: **In Progress 4 · 24%**, **Pending Payment 3 · 18%**, **Completed 10 · 59%**. The rounded percentages remain as captured; colour is never the only label.
- Moderation queues · Flagged + contact inbox: **Flagged messages 0**, **New contact mail 17**, **Pending settlements 16**, **Message center →**.

## Recent-table freeze

### Recent requests — “Newest inbound work” — 5 columns

| Request | Customer | Subject | Status | Date |
|---|---|---|---|---|
| 01a10f84-31f1-75a6-aeb1-cbe61a191581 | Arjun Mehta | AUDIT-P24-20261005-6y6fa-sent Request | Expired Quote | Oct 6, 2026, 4:41 AM |
| 01a10f82-1ddb-75cc-ba1b-93609e9e7dc4 | Arjun Mehta | AUDIT-P24-20261005-6v89t-sent Request | Expired Quote | Oct 6, 2026, 4:39 AM |
| 01a10f7f-7698-71f1-8c99-709e45f72b67 | Arjun Mehta | AUDIT-P23-20261005-6rdsf Request to Quote Builder | Expired Quote | Oct 6, 2026, 4:36 AM |
| 01a10b3a-07a6-7274-8c9c-1f6ef658920e | Arjun Mehta | AUDIT-P24-20261005-03ipf-sent Request | Expired Quote | Oct 5, 2026, 8:41 AM |

### Recent payments — “16 pending · ₹2,60,790.00” — 4 columns

| Client | Project | Amount | Paid |
|---|---|---|---:|
| Sandeep Chopra | GPS Fleet Tracking Portal | ₹21,600.00 | Oct 5, 2026, 3:49 AM |
| Karthik Menon | UPI Switch Integration Layer | ₹36,000.00 | Oct 5, 2026, 3:49 AM |
| Pooja Kulkarni | Multi-Branch Clinic Booking | ₹19,500.00 | Oct 5, 2026, 3:49 AM |
| Pooja Kulkarni | Multi-Branch Clinic Booking | ₹26,000.00 | Oct 5, 2026, 3:49 AM |
| Pooja Kulkarni | Multi-Branch Clinic Booking | ₹19,500.00 | Oct 5, 2026, 3:49 AM |

Both cards retain View all navigation. Request IDs, audit references, amounts, and timestamps use the shared mono class and full accessible/title values.

## ⌘K trigger-context freeze

Capture 03 contains a `Command menu` dialog with input **Search or jump to…**, groups Operations/Content/System/Quick actions, keyboard footer **↑↓ navigate · ↵ select · esc close**, and Close dialog. Items include Dashboard, Pipelines, Pipeline User/Project hubs, Inquiries, Requests, Quotes, Projects, Users, Payments, Settlement accounts, Company legal identity, Messages, Moderation, Analytics, Blog, Portfolio, Media Library, System Config, Webhooks, Audit Logs, Create blog post, New portfolio item, Message client, New group chat, and Switch to dark mode.

F02 implements a functional shell trigger, focus management, Escape close, and honest lightweight navigation/filter preview. **F03 owns the deep command-palette design.**

## Dark/mobile evidence

- 132 (`theme-toggle`) and 191 (`theme-menu-dark`) still have empty `htmlClasses` and light CSS variables: the captured dark attempt is dead. F02 must provide real `.dark` parity, `?theme=` boot, persistence, and correct control names.
- 191 retains the light logo and a theme-menu capture path; no dark proof is inferred.
- 133 is `via=mobile-375` with the same DOM and a hidden `lg:flex` sidebar. The mobile menu control and icon search are present. F02 must provide a working drawer, 375px proof, no horizontal page overflow, and table/card fallbacks.
- Two captured logo images include one empty alt; C20 fixes accessible logo naming with local artwork.

## Frozen vs design freedom

**Frozen:** shell measurements and controls; all values/copy/tables/ranges above; operator identity; bell counts; footer; route meaning; captured empty moderation message; sparse-data honesty.  
**Design freedom:** hero hierarchy, queue grouping, chart geometry, card composition, navigation grouping, digest/handover placement, health-grid layout, density, responsive ordering, motion, and state-preview presentation. No extra business figures, user records, queue ages, online claims, or unsupported endpoints may be invented.
