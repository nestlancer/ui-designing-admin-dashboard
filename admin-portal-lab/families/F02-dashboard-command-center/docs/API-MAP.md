# F02 API Map — Dashboard · Command Center

## Specs and envelope

Read: `admin.openapi.json`, `health.openapi.json`, `notifications.openapi.json`, and `messaging.openapi.json` (**4/4**), after the Swagger README. The admin spec contains 56 paths; only the F02 dashboard/admin-health surfaces below are in scope. Notification/messaging specs are used for bell counts, not to build their full centers.

All mapped success responses use `ApiSuccessEnvelopeDto`: `status: success`, a generic `data` object with `additionalProperties: true`, and metadata (`timestamp`, `requestId`, `version`, optional `path`). **The specs do not define dashboard KPI, chart, digest, table, or per-component field shapes.** The templates therefore render captured values, not invented response-field mappings or live claims.

## Admin dashboard and service endpoints — 10

| Surface | Method/path | Parameters / response use | Static-template behaviour |
|---|---|---|---|
| KPI/queue overview | `GET /api/dashboard/overview` | Optional `period`: TODAY/WEEK/MONTH/QUARTER/YEAR; 200 generic data | Frozen captured KPI/strip values; no request |
| Revenue KPI + trajectory | `GET /api/dashboard/revenue` | Optional same `period`, plus `from`, `to` date strings; 200 generic data | Local captured range switch; exact captions preserved |
| User KPIs | `GET /api/dashboard/users` | Optional `period`; 200 generic data | Freeze 34/34 and flag suspect data; no correction |
| User analytics alias | `GET /api/dashboard/analytics/users` | Alias of `/dashboard/users`; optional `period` | Documented only; not called twice |
| Project KPIs/mix | `GET /api/dashboard/projects` | Optional `period`; 200 generic data | Frozen Active 4/Completed 10 and 4/3/10 mix |
| Project analytics alias | `GET /api/dashboard/analytics/projects` | Alias of `/dashboard/projects`; optional `period` | Documented only; no duplicate request |
| Ops performance | `GET /api/dashboard/performance` | 200 generic data; description covers health, response times, resource usage | No invented latency/CPU figures; health tiles start “Not probed” |
| Operator activity | `GET /api/dashboard/activity` | **Required** query `limit` (string); historical admin/system activities | Digest mapping only; no captured activity entries, so “Not captured” |
| System alerts | `GET /api/dashboard/alerts` | 200 generic data | Freeze Alerts 0; no invented alert rows |
| Admin service health | `GET /api/health` | 200 generic success envelope | Overall health mapping; no runtime probe |

### Range mapping

| UI | Admin `period` | Optional revenue dates from the capture |
|---|---|---|
| 7 days | `WEEK` | 2026-10-24 → 2026-10-30 |
| 30 days | `MONTH` | 2026-10-01 → 2026-10-30 |
| 90 days | `QUARTER` | 2026-08-02 → 2026-10-30 |
| 1 year | `YEAR` | 2025-10-31 → 2026-10-30 |

Tabs perform an in-page switch between captured datasets. They do not pretend to have fetched new data. Request volume remains its captured independent last-30-days series.

## Health-service endpoints — 7

| Surface | Method/path | Documented states | Static-template behaviour |
|---|---|---|---|
| Overall System healthy/degraded | `GET /api/v1/health` | 200 envelope; **503** when one or more critical components fail; 503 body undocumented | Captured “System healthy” default; explicitly simulated degraded preview |
| Detailed diagnostics | `GET /api/v1/health/detailed` | 200 generic data | Mapping for detailed status; no fake diagnostics |
| Service-area grid | `GET /api/v1/health/microservices` | 200 generic data | Per-area status mapping; default “Not probed” |
| Database tile | `GET /api/v1/health/database` | 200 generic data | Unknown until an explicitly labelled preview |
| Cache tile | `GET /api/v1/health/cache` | 200 generic data | Unknown until preview |
| Queue tile | `GET /api/v1/health/queue` | 200 generic data | Unknown until preview |
| Storage tile | `GET /api/v1/health/storage` | 200 generic data | Unknown until preview |

The health mini-grid can show Database/Cache/Queue/Storage (and overall Admin where space allows) without claiming that the captured overall badge proves each component. A preview control may alternate simulated healthy/degraded values, always labelled **Preview only**. No health endpoint is called.

## Bell-count endpoints — 3

| Surface | Method/path | Use |
|---|---|---|
| Notifications bell | `GET /api/v1/notifications/unread-count` | Total unacknowledged notifications; captured accessible value 188, visual 99+ |
| Messages bell (chosen) | `GET /api/v1/conversations/unread-count` | Cumulative unread conversations/messages; captured 21 |
| Messages count alias | `GET /api/v1/messages/unread-count` | Same documented unread-count purpose; alias recorded, not called additionally |

Notification/message buttons open local captured-count popovers. They do not mark anything read, fetch notification records, or mutate counts. Full centers belong to their own families.

## Surface-to-data honesty

- **Recent requests/payments:** the captures provide row values; the generic dashboard schemas do not prove a particular nested field name. Render the frozen rows and local fragment/detail previews, not a fabricated API contract.
- **Oldest ages:** report C2 supplies only **Oldest 6d** for Pending requests. Non-zero payment/contact queues display **Age not captured**. Zero queues display **No queued items**, not an invented age.
- **A9 digest:** `/dashboard/activity` is the future source for My actions today. No activity entries or yesterday snapshot were captured, so My actions and Queue delta display **Not captured**. The handover note can still use current frozen queue/₹ figures.
- **A13 health:** overall captured health does not justify per-component “healthy” claims. Tiles begin unknown/not probed.
- **Errors/loading/empty:** admin dashboard error bodies are undocumented; health 503 has no documented schema. UI copy is therefore generic and does not quote imaginary response fields.
- **Deep links:** queue/filter/detail behaviour is local preview navigation. It never claims that a record was changed or a backend route responded.

## Demo-only groups — 6

1. **Captured range/state playback:** 7/30/90/365-day data and chart loading/empty/error fixtures; no fetch.
2. **Filtered queue and record-detail previews:** strip drill-downs, table deep links, and local copy feedback; no queue mutation.
3. **Digest/handover placeholders:** unavailable activity/delta fields plus frozen current queue figures; no fabricated operator actions.
4. **Health/degraded simulation:** overall and per-area healthy/degraded previews; no probe or retry request.
5. **Shell popovers and lightweight ⌘K filter/navigation:** local captured counts/items; F03 owns full palette depth.
6. **Operator/sign-out preview:** local menu/profile-context/sign-out notice; no session or token operation.

Pure UI controls (theme, sidebar collapse, mobile drawer, tabs, disclosure, focus management) need no endpoint and are not counted as backend demos.

## Prohibited inventions

No live latency, CPU/memory, service response, request ID, operator activity count, yesterday delta, queue age beyond Oldest 6d, extra alert, new user/payment/request record, token, session, unread mutation, or successful retry is asserted. All templates remain static and make zero API requests.
