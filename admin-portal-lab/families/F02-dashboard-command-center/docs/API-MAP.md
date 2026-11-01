# F02 · API map — Gate A

Read all path inventories and relevant operations in `admin.openapi.json` (56 paths), `health.openapi.json` (17), `notifications.openapi.json` (29), `messaging.openapi.json` (47), and the Swagger README. The prototype makes **zero network/API requests**. These are integration mappings, not claims that APIs are live. Many responses describe `status`, `data`, `metadata`, with `data` an **open object**; concrete KPI field names and many error enums are therefore **not specified** and must not be invented. Authentication is bearer where indicated.

| UI surface | Method/path as published | Parameters / verified shape | States / caveats |
|---|---|---|---|
| Overview + attention counts | GET `/api/dashboard/overview` | optional `period`: TODAY/WEEK/MONTH/QUARTER/YEAR; success envelope, open `data` | loading skeleton, historical snapshot, unavailable/error; exact metric fields unspecified |
| Revenue + range | GET `/api/dashboard/revenue` | optional same `period`, `from`, `to`; success envelope, open `data` | sparse/no-series/error; exact series schema unspecified |
| Users | GET `/api/dashboard/users` / `/api/dashboard/analytics/users` | period enum above; open `data` | 34/34 in capture is suspect, not a proven delta |
| Project mix | GET `/api/dashboard/projects` / `/api/dashboard/analytics/projects` | period enum; open `data` | projects production outage is historical report evidence; no live status verified |
| System / health | GET `/api/v1/health`, `/api/v1/health/detailed`, `/api/v1/health/{database,cache,queue,storage,microservices,workers}` | health root specifies 200 and 503; open `data` | captured aggregate healthy ≠ live checks; per-area check is not available in offline prototype |
| Performance | GET `/api/dashboard/performance` | open `data` | unavailable in snapshot |
| Recent activity / digest | GET `/api/dashboard/activity?limit=…`; GET `/api/audit` | activity `limit` required string; audit supports `userId`, `action`, `from`, `to`, pagination | no verified operator-specific count or queue-delta field; disclose unavailable |
| Alerts | GET `/api/dashboard/alerts` | success envelope | captured 0; stale snapshot |
| Notification bell | GET `/api/v1/notifications/unread-count` | success envelope | capture showed 188, displayed 99+; historical only |
| Message bell | GET `/api/v1/messages/unread-count` or `/api/v1/conversations/unread-count` | success envelope | captured 21; later capture 20 |
| Flagged messages | GET `/api/v1/admin/messages/flagged` | optional userId, projectId, page, limit | captured 0; not a live fetch |
| Search / palette | Captured UI navigation, not a confirmed fan-out endpoint | local filter over captured routes only | F03 owns full search; no claims about live entity search |
| Requests, quotes, payments, contact and other nav | Captured application routes, e.g. `/requests?status=inbox`, `/quotes`, `/payments?status=pending`, `/contact` | exact routes from captured anchors | destination families are not built here; open a clearly labelled local preview with intended route instead of broken links |

## Demo-only actions / states
Palette filtering, route/queue previews, header menus and bells, profile, collapse/mobile navigation, theme persistence, range selectors, gallery and variant links, status-state switcher, retry, skeleton/empty/error/degraded controls, chart illustration, and digest / health placeholders are **client-side prototype affordances**, never production calls or mutations. Row drill-downs display the captured row and intended route only; they do not claim that the full detail page is implemented. Legal buttons explain that the production destination is not part of the offline preview. Do not label a generated insight as a real operator action.

**Gate A: PASS** — 4/4 specs studied, 16+ relevant read endpoints mapped; unspecified schemas and all demo behaviour are explicitly identified.
