# F13 Baseline Map — Payments Money-Ops

## GATE S (F13)
```
## GATE S (F13) · Shots: 8/8 · HTML: 17/17 (primary 74–78 + harvest 21–30 + 181/184; accounts/legal owned by F14) · Dupes reconciled: YES · Content frozen: YES · Gate: PASS
```

### Routes
| Route / state | Primary HTML | Screenshot |
|---|---|---|
| `/payments` index + KPI + By project | `74` (+21/26) | `035` |
| By project tab | `75` (+22/27) | `043` (project context; outage-blocked live) |
| All transactions | `76` (+23/28) + `184` 404 alt | `036` |
| Awaiting verification | `77` (+24/29) | `037` |
| Disputes | `78` (+25/30) + `181` | `038` |
| Reconciliation | shot+spec (tab present in DOM) | `039` |
| Payment details Paid | shot+spec | `040` |
| Payment details Payment due | shot+spec | `081` |
| Settlement accounts / company legal | `182`/`183` | **F14 owns** |

### Frozen KPI strip
- **Total collected** ₹7,08,160.00
- **Outstanding** ₹2,60,790.00
- **Pending milestones** 16
- **18 projects**

### Tabs (role=tablist model — KEEP)
By project · All transactions · Awaiting verification · Disputes · Reconciliation

### Header CTAs
Settlement accounts · Company legal identity (navigate to F14 surfaces; lab links labelled)

### Lede
“Billing operations organized by project. Open a project to manage milestones, request payments, and verify transactions.”

### By-project columns
Project · Installment progress · Total budget · Paid · Balance · Status · Manage →

Frozen sample rows (capture):
| Project | Progress | Budget | Paid | Balance | Status |
|---|---|---|---|---|---|
| API Batch Tracking Dashboard `01a10a2c-b485-…` | 100% · 3/3 · 1 deliveries | ₹62,000.00 | ₹62,000.00 | — | Fully paid |
| Artisan Marketplace Storefront `01a10a2d-30c7-…` | 100% · 3/3 · 1 deliveries | ₹55,000.00 | ₹55,000.00 | — | Fully paid |
| AUDIT-P25-20261005-73dhk Project Fixture `01a10f88-c023-…` | 0% · 0/2 · 1 deliveries | ₹1,250.00 | ₹0.00 | ₹1,250.00 | Outstanding |
| B2B Textile Export Order Portal `01a10a2c-8397-…` | 100% · 3/3 | ₹85,000.00 | ₹85,000.00 | — | Fully paid |
| Footer | 18 projects with billing | | | | |

### All transactions
Intro: “Global transaction log. For milestone pipeline actions, use By project.”
Columns: ID · Amount · Status · Client · Project · Actions (View → · Verify · Refund)
Statuses seen: Not requested · Payment due · Paid · PENDING / COMPLETED / CREATED filters
Pagination: Showing · Prev · Next

### Awaiting verification (captured empty — honest)
Copy: “Manual bank/UPI transfers waiting for operator review. Approve or reject the proof; gateway captures still use Verify.”
Empty: “No payments awaiting verification” · “Offline transfers appear here when a client submits proof.”
Search placeholder: “Search by client, project, amount…”
Pagination: No results · Prev · 1/1 · Next (disabled)

### Disputes (captured empty)
H1: Payment disputes
“Open and resolved client payment disputes awaiting operator response.”
Empty: “No open disputes” · “Disputed payments will appear here for review and response.”

### Reconciliation (shot `039`)
Date range Start/End · table “Payments in range” · columns ID · External ID · Amount · Currency · Status · External Status · amounts ₹625.00–₹48,000.00 · statuses CREATED / PENDING / COMPLETED

### Payment detail Paid (`040`)
Payment `01a10a2c…` · Paid · Refund  
Amount ₹14,400.00 · Method manual · Paid at Oct 5, 2026, 3:47 AM · Transactions 2  
Project: Razorpay Settlement Reconciliation Engine · Client: Ananya Iyer · Milestone: Deposit  
Docs: NL-INV-2026-000008 · NL-RCPT-2026-000006 · Download latest invoice/receipt  
Timeline: PAYMENT_COMPLETED · History: Payment ₹14,400 Paid + Refund ₹500 PROCESSED

### Payment detail Payment due (`081`)
Payment `01a10a2b-5ed2-73bc-8aee-d1c6262906e9` · Payment due · Verify payment  
Amount ₹30,000.00 · Method — · Paid at Oct 5, 2026, 3:46 AM · Transactions 1  
Project: Khandesh Spice D2C E-Commerce Store · Client: Arjun Mehta · Milestone: Mid-project payment  
Invoice NL-INV-2026-000001 · Timeline empty · History: Payment ₹30,000 Payment due

### IA drift note
`/payments/transactions` (`184`) → **Page not found** — canonical is tab `?view=transactions` (finding #8 / C11). Lab never promotes the 404 URL.

### Audit metadata
CSP console noise on payments captures; no failedRequests on primary tabs. Cookie Dismiss/Accept present in live capture — lab drops per C15.
