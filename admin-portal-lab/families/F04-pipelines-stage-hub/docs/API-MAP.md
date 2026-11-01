> **Historical revision 1 evidence.** The owner requested a research-led functional/data refresh. Current designs, workflows and fresh validation are documented in [revision 2 delivery](revision-2/DELIVERY-REPORT.md), [research](revision-2/RESEARCH-AND-PLAN.md) and [case data](revision-2/CASE-DATA.md). Original counts/claims below describe the earlier pass, not new verification.

# F04 · API map / Gate A

Reviewed eight required path inventories/relevant operations: admin 56, requests 25, quotes 27, projects 38, payments 62, messaging 47, users 40, gateway 22. Also contact, blog, portfolio, media, webhooks for destination/reference coverage. Published specs are documentation, not proof of current availability. Zero production requests from designs.

| Surface / frozen count | Captured UI route | Actual read endpoint / parameters |
|---|---|---|
| Inquiries / 23 | /contact | GET /api/v1/admin/contact — page, limit, pageSize, sort, status NEW/READ/RESPONDED/ARCHIVED/SPAM; stats in described response |
| Requests / 46 | /requests | GET /api/v1/admin/requests/stats; list supports status inbox/all, userId, page/limit |
| Quotes / 36 | /quotes | GET /api/v1/admin/quotes/stats; list status inbox/all, userId, sortBy/sortOrder strings |
| Projects / No data | /projects | GET /api/v1/admin/projects/stats; historical network failure. Do not replace missing total with 0 or screenshot's 18 |
| Payments / 48 | /payments | GET /api/v1/admin/payments/stats; list supports projectId/clientId, pagination and status CREATED/PENDING/PROCESSING/PENDING_VERIFICATION/COMPLETED/FAILED/REFUNDED/DISPUTED/CANCELLED/NOT_DUE |
| Messages / not supplied | /messages | GET /api/v1/admin/messages/stats; no displayed total verified |
| Users / 34 | /users | GET /api/v1/admin/users; role/status + page/limit; security stats not interchangeable with total |
| Moderation / not supplied | /moderation | GET /api/v1/admin/messages/flagged; userId/projectId/page/limit |
| Audit logs / not supplied | /audit | GET /api/audit; page/limit/pageSize/sort/userId/resourceType/action/from/to; GET /api/audit/stats |
| Dashboard | /dashboard | GET /api/dashboard/overview; period TODAY/WEEK/MONTH/QUARTER/YEAR |
| Analytics | /analytics | GET /api/dashboard/revenue, /users, /projects, /performance, /activity, /alerts |
| Blog | /content | GET /api/v1/admin/posts |
| Portfolio | /portfolio | GET /api/v1/admin/portfolio |
| Media | /media | GET /api/v1/admin/media |
| System | /system | GET /api/system/config |
| Webhooks | /integrations | GET /api/webhooks |
| User hub / Project hub | /pipeline/users; /pipeline/projects | Compositions of users/projects plus related-service reads; no dedicated pipeline endpoint verified. F05 owns these pages |
| API reference/spec list | local documentation | GET /api/v1/docs-specs; /all; /{serviceKey}. Lab links bundled local JSON, not live docs fetch |

Most success envelopes have status=success, open `data` object and metadata. Exact metric-field schemas and detailed error enums are not specified: do not fabricate them. Loading/zero/error/degraded controls are explicitly local demonstrations. Zero demo does not imply historical missing Projects count = zero. Retry re-renders the local baseline and never claims connectivity recovered.

## Captured reference versus published Swagger

Keep area labels and *captured* counts, not new counts from Swagger. Captured summary says 157 while sixteen area counts sum to 199; prominently flag inconsistent inventory. /api/v1 is captured base shorthand, not universally valid (admin's /api/dashboard, /api/audit, /api/system, /api/webhooks).

Payments 16, Messages 6, Analytics 8 expanded snapshots provide thirty endpoint strings. Preserve those strings as captured inventory, labelled not runnable. Swagger uses {id} in place of :id and actual /api/v1 prefix for payment/message paths. Payments snapshot `POST /admin/payments/milestones/:id/request-payment` maps to published `POST /api/v1/admin/milestones/{id}/request-payment` (different hierarchy). Analytics snapshot `/admin/dashboard/*` maps to `/api/dashboard/*`; captured `/admin/health` maps to `/api/health`. For all sixteen areas, provide at least one explicitly verified published read-endpoint and local service spec link; the other thirteen collapsed bodies are not presented as fully captured inventories. No submit/replay/refund controls added.

## Route behavior / demo CTA inventory

Six delivery + three trust + seven standalone destinations all have working local static handoff anchors. Each handoff includes intended production UI route and integration reference. Dashboard additionally links existing F02. F05 hub links use real local preview anchors `#hub-users` / `#hub-projects`, explained as F05 not built, never guess a family file. Header search links existing F03. API references expand natively with Enter/Space and work without JS; local JSON links are real files. Theme/collapse/drawer/filter/stage-inspection/reference docking are browser-only controls, not backend features. Terms/Privacy open local honest notices. Export/mutations/AI not introduced.

**Gate A PASS · core specs 8/8 + 5 supporting · all 18 destinations mapped · 16 reference areas retain source provenance; every demo action disclosed.**
