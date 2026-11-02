# F13 API map — initial contract review

Source: bundled `backend-api-swagger/payments.openapi.json` (with project context from `projects.openapi.json`). No current service, authorization, actual response or write has been verified. All existing pages are offline and non-mutating.

| Surface | Contract |
|---|---|
| Payments list | `GET /api/v1/admin/payments`; documented status enum CREATED, PENDING, PROCESSING, PENDING_VERIFICATION, COMPLETED, FAILED, REFUNDED, DISPUTED, CANCELLED, NOT_DUE; optional `projectId`, `clientId`, `page`, `limit`, `pageSize`. |
| Summary | `GET /api/v1/admin/payments/stats`; `/summary` is described as alias. Do not equate outstanding with settled balance. |
| Reconciliation | `GET /api/v1/admin/payments/reconciliation`; `POST /api/v1/admin/payments/reconcile` is a write and not performed by prototype. |
| Disputes | `GET /api/v1/admin/payments/disputes`, detail/update and resolve/respond routes. |
| Detail and receipt | `GET /api/v1/admin/payments/{id}`, `/transactions`, `/timeline`, `/receipt`, `/invoice` and document versions. A receipt URL/transaction lineage is not supplied by historical screenshots alone. |
| Verification | `POST /api/v1/admin/payments/{id}/verify` documents no request body. Offline transfer approval uses `/approve-transfer` with optional `verificationNotes`; rejection uses `/reject-transfer`, whose DTO requires a client-visible `reason` (max 2000) and optional `allowRetry` defaulting true. Do not conflate these actions or imply a verified payment. |
| Other sensitive writes | `/refund`, `/cancel`, `/manual`, `/manual-payment`, milestone `/request-payment` and `/release`. Require authorization and explicit safety design; prototypes do not call them. |
| Export | `GET /api/v1/admin/payments/revenue/export` exists; do not infer a GST-ready ledger export or actual download beyond its documented purpose. |

Full response schema, capture reconciliation, error/auth semantics and family gate evidence remain incomplete. No current queue or balance is implied by screenshot examples.
