# F13 API Map — Payments Money-Ops

## GATE A (F13)
```
## GATE A (F13) · Specs: 3/3 (payments · projects links · users payees) · Endpoints: 38 admin money-ops mapped · Demo-only: 6 · Gate: PASS
```

### UI → endpoint map

| UI surface | Method + path | Key fields / enums | States |
|---|---|---|---|
| KPI strip | `GET /api/v1/admin/payments/stats` · `…/summary` | totalCollected, outstanding, pendingMilestones, projectCount | loading / settled / error |
| By-project table | `GET /api/v1/admin/payments` · `GET /api/v1/payments/projects/{projectId}` | budget, paid, balance, installment progress, status | skeleton / empty / rows |
| Manage project billing | projects payment context | projectId | outage-aware (A11 if projects fail) |
| All transactions | `GET /api/v1/admin/payments` · `GET /api/v1/admin/payments/{id}/transactions` | amount, status (CREATED/PENDING/COMPLETED/Paid/Payment due/Not requested), client, project | paginated |
| Verify (gateway) | `POST /api/v1/admin/payments/{id}/verify` | reason optional/required per policy | confirm · success · error |
| Approve transfer (manual) | `POST /api/v1/admin/payments/{id}/approve-transfer` | proof review | confirm + reason |
| Reject transfer | `POST /api/v1/admin/payments/{id}/reject-transfer` | reason required | confirm + reason |
| Refund | `POST /api/v1/admin/payments/{id}/refund` | amount, reason | confirm · destructive |
| Cancel | `POST /api/v1/admin/payments/{id}/cancel` | reason | confirm |
| Payment detail | `GET /api/v1/admin/payments/{id}` | amount, method, paidAt, milestone, client, project | Paid / Payment due |
| Timeline | `GET /api/v1/admin/payments/{id}/timeline` | event type, timestamp | empty / events |
| Receipt / invoice | `GET …/{id}/receipt` · `…/invoice` · `…/documents/versions` | NL-INV-* · NL-RCPT-* | download demo |
| Disputes list | `GET /api/v1/admin/payments/disputes` | open/resolved | empty captured |
| Dispute respond/resolve | `POST …/disputes/{id}/respond` · `…/resolve` | body, reason | confirm |
| Reconciliation list | `GET /api/v1/admin/payments/reconciliation` | id, externalId, amount, currency, status, externalStatus | date range |
| Reconcile action | `POST /api/v1/admin/payments/reconcile` · `…/projects/{projectId}/reconcile-state` | range | confirm demo |
| Revenue export | `GET /api/v1/admin/payments/revenue/export` · `…/report` | CSV/PDF | A7 demo |
| Settlement accounts / legal | `GET/POST …/accounts` · `…/company-legal` | — | **F14** |
| Manual payment | `POST /api/v1/admin/payments/manual` · `…/{id}/manual-payment` | amount | project context |
| Milestone payment ops | `GET/POST …/milestones/{id}/…` | request-payment, release, mark-complete | project detail |

### Demo-only CTAs (static lab — listed in DECISIONS)
1. Verify / Reject / Refund confirm dialogs — no network; emit receipt toast copy
2. Bulk verify/reject/export — local selection only
3. Statement/CSV export — downloads nothing; announces A7 demo
4. Settlement accounts / Company legal — gallery deep-links to F14 when present, else labelled
5. Manage → opens in-page project billing preview (projects API may be degraded)
6. Lab “demo verification fixtures” toggle — not a production control

### Error / loading contract
- Skeleton for KPI + tables (never spinner-only)
- Verify failures show what/why/retry
- Empty verification/disputes keep captured copy
- Projects Manage may show A11 degraded if projects origin fails
