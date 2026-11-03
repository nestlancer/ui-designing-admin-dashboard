# F24 · System Config — verified API map

Run: 3 November 2026. This revision replaces a preliminary map that incorrectly treated inferred response fields as Swagger schemas. The JSON files, not a conventional admin-console implementation, are authoritative.

## Coverage and boundaries

- Read `admin.openapi.json`: 56 path keys / 63 operations. F24 uses `/api/health` and the 17 `/api/system*` path keys (20 system operations + health). All operations and component DTOs in this slice were inspected.
- Read `gateway.openapi.json`: 22 path keys / 23 operations; 19 health paths / 20 operations, plus three docs-spec routes. Health routes have success envelopes with **open `data` objects**. No typed status/dependency/server schema or status enum is declared.
- Extended the study to `notifications.openapi.json`: 29 path keys, especially two template paths / four operations and both template DTOs. This is essential for screenshot 107; notification templates are NOT email templates with `channel=notification`.
- `health.openapi.json` (17 paths) cross-checked against the gateway. All other Swagger inventories were reviewed for ownership; no unrelated operations are added to F24.
- `servers: []`. Service-local `/api/system/...` paths must not be rewritten as confirmed gateway paths. A documented operation does not prove deployment, permission, current health or that a mutation succeeds.
- Admin system/template operations declare `security: [{bearer: []}]`. Admin health and gateway health operations do not declare operation-level bearer. This prototype never probes any production endpoint.
- Responses use `ApiSuccessEnvelopeDto`, open `data`, and `ResponseMetadataDto`. Field names inferred from screenshots are **UI observations**, not a documented list response schema. No typed error responses are declared for the system slice; validation/error/permission UI is a local design state.

## Exact surface → contract mapping

| Surface | Method and exact path | Declared inputs, DTO constraints | UI and local-only states |
|---|---|---|---|
| Service card | `GET /api/health` | No parameters; open data | Captured Healthy / admin; never a live probe |
| Gateway / diagnostics | `GET /api/v1/health`, `GET /api/v1/health/detailed`, `GET /api/v1/health/debug` | No body; open data. Debug delegates to health service | Collapsed → skeleton → captured JSON; Copy; simulated error + retry. Captured timestamp is not current freshness |
| Supporting health | `GET /api/v1/health/ready`, `/live`, `/dependencies`, `/services/{name}`, HEAD + GET `/ping`, GET `/database`, `/cache`, `/queue`, `/storage`, `/microservices`, `/external`, `/workers`, `/websocket`, `/system`, `/features`, `/registry` | Only service name path parameter is declared | Contract reference only; do not invent a per-service live matrix, CPU chart, latency or SLO |
| Config list | `GET /api/system/config` | No query parameters. Open data | 14 captured keys; 12 raw JSON keys + 2 managed under Operations. Search is local, not a Swagger `q` parameter |
| Config update | `PATCH /api/system/config` | `UpdateSystemConfigDto`: required **`key` string + `value`**; optional `description` max500. `value` schema is object/additionalProperties, but prose says string/number/boolean/object | Per-key edit → parse JSON → confirm diff/reason → local receipt. NOT an arbitrary key/value map or a batch save. No invented nested field ranges. Array-valued request.categories conflicts with schema; do not resolve it silently |
| Flags list | `GET /api/system/features` | No query parameters; open data | 12 screenshot labels, five On. No captured technical flag IDs. Display names are not asserted to be path IDs |
| Flag change | `PATCH /api/system/features/{flag}` | `ToggleFeatureDto`: required `enabled` boolean; optional `description` max500 and `rolloutPercentage` number0–100 | Confirm EVERY toggle before updating local state; audit reason local. Rollout UI not shown because no captured rollout values. `5/12` is enabled/total, never 42% traffic rollout. Maintenance flag and Operations maintenance relationship is not specified: do not silently sync them |
| Jobs list | `GET /api/system/jobs` | `status` query enum **PENDING/RUNNING/COMPLETED/FAILED**, `queue` string; no page/limit/sort parameters | Search/status filter/order local. Twelve COMPLETED captured rows. Timestamp retained as display string, timezone unknown. No QUEUED enum |
| Retry job | `POST /api/system/jobs/{id}/retry` | No body. Summary: **Retry failed job** | Completed-row Retry retained but disabled with why. Optional explicitly **DEMO** FAILED job exercises confirm → local PENDING receipt; no real queue ID is fabricated |
| Cancel job | `DELETE /api/system/jobs/{id}` | No body. Summary: stop scheduled/running work | Completed-row Cancel disabled. Optional DEMO PENDING/RUNNING job exercises guarded cancellation. No cancellation response enum is declared; local removal is not a server CANCELLED status |
| Email list | `GET /api/system/email-templates` | No query parameters. Open data | Ten captured names/IDs/subjects, local grouping/search/order. No channel/q/page/limit query is documented |
| Email create/upsert | `POST /api/system/email-templates` | `CreateEmailTemplateDto`: name(max100), subject, body required; variables object and description(max500) optional | Capability documented, not added to the current UI; no invented template-create route |
| Email get/update | `GET /api/system/email-templates/{id}`; `PATCH /api/system/email-templates/{id}` | Update DTO fields: optional `subject` string and `body` string (Handlebars supported) | Full body only recoverable for verification. Other nine subjects editable; body explicitly unavailable and omitted from partial local update unless operator intentionally authors a new local draft |
| Email preview | `GET /api/system/email-templates/{id}/preview`; `POST /api/system/email-templates/preview` | POST description: body **`{templateId}` or `{id}`**; **no requestBody schema**. Does not document a draft `{subject,body,variables}` render contract | Sandbox local preview distinctly labelled. Allowlisted captured `userName` → John Doe, link inert. Draft render is NOT claimed server parity. No network/images/scripts/navigation inside preview |
| Email test | `POST /api/system/email-templates/{id}/test` | Live dispatch described, but **no requestBody declared**. Recipient field appears in shot106; `{to}` is NOT a verified DTO | Validate recipient then confirm. Receipt says **Test request prepared locally — no email sent**. Production recipient-body contract remains an integration question |
| Notification list/create | `GET` / `POST /api/v1/admin/notifications/templates` | GET no queries. Create DTO name(max120)+eventType required; titleTemplate(max200), messageTemplate, channels, priority LOW/NORMAL/HIGH/URGENT, isActive optional | Only `account-deleted-user` body/name/event/title/channels recoverable. 51 other identities unavailable; no false 52-row fixture |
| Notification update/delete | `PATCH` / `DELETE /api/v1/admin/notifications/templates/{id}` | Update DTO fields optional: name, eventType, titleTemplate, messageTemplate, channels, priority, isActive. No GET-by-ID path and no preview endpoint | Local editor follows shot107. Channels schema object/additionalProperties, prose also allows array `["IN_APP"]`; captured array accepted with conflict disclosed. ID not captured; local name is NOT a UUID. Delete not introduced just because spec allows it |
| Full cache clear | `POST /api/system/cache/clear` | **Required** JSON `ClearCacheDto`: optional `keyPattern` string; empty = full flush | Confirm + reason + typed CLEAR; prepare `{}` locally. No “undo Redis” or cache-restored claim |
| Exact key clear | `POST /api/system/cache/clear/{key}` | Exact key path; no body | Validate nonempty; URL-encode exact key in contract preview. Confirm + reason; no wildcard UI added |
| System logs | `GET /api/system/logs`, `GET /api/system/logs/download` | Queries level enum **error/warn/info/debug**, service, from, to. **No `format=csv` query** | Screenshot says CSV. Local download contains clearly labelled DEMO request metadata only; no fabricated production log rows. Archive/CSV content format integration unresolved |
| Announcement | `POST /api/system/announcements` | `SendAnnouncementDto`: required **title(max200), message(max1000), type(INFO/WARNING/CRITICAL)**; optional **dismissable** boolean (exact spelling), scheduledFor/expiresAt strings | Capture's Severity label maps to type. Confirm audience + reason; prepared receipt only. Scheduling not added without captured need. Never `{body,severity,dismissible}` |
| Maintenance | `POST /api/system/maintenance` | `ToggleMaintenanceDto`: enabled boolean required; message(max500), estimatedEnd(max64, ISO8601 or datetime-local) optional | Captured disabled baseline. Form stage → impact confirmation (revokes non-admin sessions) → local applied preview, not real client access. Public portfolio/blog readable is capture copy, not inferred backend guarantee |
| Audit | `GET /api/audit`, `GET /api/audit/logs` alias | page, limit1–100(default20), pageSize alias, sort, userId, **resourceType**, action, from,to | Reference only, F25 owns audit. **No `resource=system` query** and no assertion every system mutation writes actor/target/reason. Local change ledger starts EMPTY, actor labelled Preview operator, time labelled local session, reason not sent as an undocumented DTO field |

## Corrections and intentional limits

1. No GET/PATCH response item shape is typed for configs/flags/jobs/email/notification lists. Screenshot names and values are not Swagger field guarantees.
2. No job ID format, feature flag IDs, config ownership linkage, mutation undo endpoint, client-draft preview DTO, or test-recipient DTO is documented.
3. A15 in report means **per-operator action permissions** (P3), not audit visibility alone. Prototype permission selector is a local Can edit / Read only demonstration, never an ACL fetched from server. Actual enforcement is an integration requirement.
4. Config sections whose textarea continues below the captured viewport remain **partial fragments**, not invented valid JSON. Operator may start a separate empty local draft; fragments never become silently repaired production payloads.
5. 62 templates are a captured total, **11 identities recoverable (10 email + one notification)**, 51 identities unavailable. Search/preview/edit covers recovered records, missing records are explicitly grouped. Full-data closure is BLOCKED by source availability, not “62/62 passed”.
6. Webhooks form belongs to **F25**. F24's original “ops + webhooks form” requirement is a scope error; this run removes it, provides a gallery boundary link only, and does not execute F25.

## Local demo affordances

Navigation/theme/sidebar/palette; local list search/order/pagination; prototype ready/empty/loading/error controls; read-only permission simulation; per-key draft validation/diff; confirm/reason; local receipts/ledger/10-second Undo for reversible in-memory edits; DEMO failed/running jobs; captured diagnostics Copy; sandbox draft render; test-request preparation; demo log-request CSV. No fetch, XHR, WebSocket, beacon, production credential or mutation request exists in the family runtime.

```
GATE A · F24
Core specs 2/2 + notification-template extension + health cross-check read
Admin slice 18 paths / 21 operations; gateway health 19 paths / 20 operations; notification templates 2 paths / 4 operations
CTA mapping verified; untyped responses and request-body gaps explicit
PASS for prototype contract mapping; production integration is not verified
```
