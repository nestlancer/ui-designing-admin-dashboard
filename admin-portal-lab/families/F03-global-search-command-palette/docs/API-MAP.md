# F03 · API map / Gate A

Read published path inventories and relevant operations for gateway, users, requests, quotes, payments, admin; extended mapping to contact, notifications, messaging, projects, blog, portfolio and media for complete route coverage. Gateway has health/docs only: **no global search endpoint**. Search is local over captured commands + two explicitly historical fixtures, not live fan-out.

| Actions | Captured/intended UI route | Published integration reference |
|---|---|---|
| Dashboard | /dashboard | GET /api/dashboard/overview |
| Pipelines | /pipeline | GET /api/dashboard/overview (aggregate composition, not dedicated pipeline API) |
| Pipeline · User hub | /pipeline/users | GET /api/v1/admin/users; GET /api/v1/admin/users/{userId} |
| Pipeline · Project hub | /pipeline/projects | GET /api/v1/admin/projects (historically down; no current health claim) |
| Inquiries; New inquiries | /contact; /contact?status=NEW | GET /api/v1/admin/contact — status NEW/READ/RESPONDED/ARCHIVED/SPAM |
| Notifications (missing primary jump) | /notifications | GET /api/v1/notifications |
| Requests; Pending requests | /requests; /requests?status=inbox | GET /api/v1/admin/requests — status=inbox supported; page/limit/userId |
| Quotes; Open quotes | /quotes; /quotes?status=inbox | GET /api/v1/admin/quotes — status=inbox; sortBy/sortOrder required by spec, values unspecified |
| Projects | /projects | GET /api/v1/admin/projects |
| Users; Karthik Menon | /users; /users/01a10a2b-1039-77dd-90c9-2793dd606216 | GET /api/v1/admin/users/search?q=…; GET /api/v1/admin/users/{userId} |
| Payments; Awaiting verification | /payments; /payments?view=verification | GET /api/v1/admin/payments; status=PENDING_VERIFICATION |
| Disputes | /payments/disputes | GET /api/v1/admin/payments/disputes |
| UPI Switch Integration Layer payment context | /payments/projects/01a10a2e-2015-72f9-8347-645cab96c44e | GET /api/v1/admin/payments?projectId=…; GET /api/v1/admin/payments/{id} exists, but no verified individual ID used |
| Settlement accounts | /payments/accounts | GET /api/v1/admin/payments/accounts |
| Company legal identity | /payments/company-legal | GET /api/v1/admin/payments/company-legal |
| Messages | /messages | GET /api/v1/admin/messages/conversations |
| Moderation | /moderation | GET /api/v1/admin/messages/flagged |
| Analytics | /analytics | GET /api/dashboard/revenue, /api/dashboard/users, /api/dashboard/projects |
| Blog; Create blog post | /content; /content/posts/new | GET /api/v1/admin/posts; POST /api/v1/admin/posts (mapping only; no submit) |
| Portfolio; New portfolio item | /portfolio; /portfolio/new | GET /api/v1/admin/portfolio; POST /api/v1/admin/portfolio (mapping only) |
| Media Library | /media | GET /api/v1/admin/media |
| System Config | /system | GET /api/system/config |
| Webhooks | /integrations | GET /api/webhooks |
| Audit Logs | /audit | GET /api/audit |
| Message client | /messages/new-direct | POST /api/v1/messages/threads/direct (no submit) |
| New group chat | local group-creation handoff, NOT captured 404 | POST /api/v1/messages/threads/group; route intentionally not guessed |
| Switch to dark mode / Switch to light mode | local theme state | No backend required |

## Fields, enums, errors and honesty
Users search requires q, optional page/limit. Requests accepts status inbox/all and userId. Quotes accepts status inbox/all, sortBy/sortOrder strings (no assumed enum). Payments status enum: CREATED, PENDING, PROCESSING, PENDING_VERIFICATION, COMPLETED, FAILED, REFUNDED, DISPUTED, CANCELLED, NOT_DUE; projectId/clientId and pagination supported. Most GET success DTOs use `status=success`, `data` as an open object and `metadata`; don't invent entity result schemas or undocumented error codes. Designed network failure is labelled simulation, not a claimed API response. Empty recent-history and no-result states are local facts. Skeleton is a simulated catalogue-loading state; retry restores local catalogue, not network connectivity.

All 34 actions work locally: theme toggles, Dashboard can open existing F02, remaining actions open a named route/record/creation handoff with integration reference and back-to-search. No mutations and zero API/network calls. Legal/help buttons are labelled local notices, not fake production links. See DECISIONS.

**Gate A: PASS · core specs 6/6 + 7 supporting specs · 34/34 actions mapped or demo-disclosed · no invented fan-out.**
