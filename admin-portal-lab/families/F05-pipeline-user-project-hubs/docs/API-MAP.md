# F05 · Gate A · scoped hub contract map

Read the eight required service contracts users/projects/progress/requests/quotes/payments/messaging/admin; all17 specs already inventoried during the immediately preceding F04 research, retained in [complete inventory](../../F04-pipelines-stage-hub/docs/revision-2/SWAGGER-INVENTORY.md). 560 service-local path entries /648 operations /218 schemas, not deduplicated deployed routes. F05 targeted extraction: CONTRACT-EXTRACT.txt. No current API requests or mutations performed.

## Operator requirements locked before online design research

Select one client/project, maintain identity and provenance across sections, see whole-story context, identify source gaps/conflicts, inspect a record and continue to its owner family. Both hubs in every page; real local search/tab/deep-link/navigation/recovery; independent sections full/empty/loading/error/degraded, coverage strip, no loss of usable sibling data; noJS readable source references; keyboard/mobile/dark parity. No unsupported bulk, signatures, account mutations or payment execution.

## UI → read contracts

| Surface | Documented operation / query | Fields / scope / caveats |
|---|---|---|
| User selector | GET /api/v1/admin/users/search?q=…&page=1&limit=20 | q required. Search local captured references only in lab; real deployment must authorized-search |
| User identity | GET /api/v1/admin/users/{userId} | USER/ADMIN, ACTIVE/SUSPENDED/DELETED/PENDING_DELETION; profile not a full pipeline aggregator |
| Requests | GET /api/v1/admin/requests?userId={userId}&status=all | Include draft via all; default excludes drafts. Request states draft/submitted/underReview/quoted/accepted/rejected/convertedToProject/changesRequested |
| Request drill | GET /api/v1/admin/requests/{id} | canonical UI /requests/{id}; no global assign or quote mutation on hub |
| Quotes | GET /api/v1/admin/quotes?userId={userId}&status=all&sortBy=createdAt&sortOrder=desc | BOTH sort parameters required in spec; names allowed as strings, runtime accepted field set still integration validation |
| Quote drill/origin | GET /api/v1/admin/quotes/{id} | /quotes/{id}; quote acceptance initiates project creation, not an admin hub action |
| User projects | GET /api/v1/admin/projects?clientId={userId} | clientId documented; userId alias also documented; historical source fails, not an empty list |
| Project selector | GET /api/v1/admin/projects?search=…&page=1&limit=25 | search by title/client; screenshot says title or id, direct-ID lookup GET below; do not promise server fuzzy UUID search |
| Project identity / milestones | GET /api/v1/admin/projects/{id} | screenshot shows milestones embedded; success data open object does NOT prove typed response fields. No invented GET /admin/projects/{id}/milestones |
| User payments | GET /api/v1/admin/payments?clientId={userId}&page=1&limit=20 | **clientId**, not an invented userId parameter |
| Project payments | GET /api/v1/admin/payments?projectId={projectId}&page=1&limit=20 | project scoped, payment amount paise; status ≠ delivery approval ≠ settlement |
| Scheduled payment milestones | GET /api/v1/admin/payments/milestones?projectId={projectId} | projectId required; monetary schedule not automatically same as delivery milestones |
| Payment drill | GET /api/v1/admin/payments/{id} | /payments/{id} is declared future canonical destination, local handoff only; F13 owns actual depth |
| Messages | GET /api/v1/admin/messages/project/{projectId}; GET /api/v1/admin/messages/conversations | Admin project-scoped read exists; global messages has NO documented selected-client filter. Current-user /messages/threads must not masquerade as selected-client threads. Arjun0 in screenshot is a historical observation; client-scoped integration remains a gap |
| Trust & account | GET /api/v1/admin/users/{userId}/sessions; GET /api/v1/admin/users/{userId}/activity?page=1&limit=50 | Six captured active sessions / LOGIN events are not a current risk score or admin-action audit. Revoke/export/impersonate remain F16 |
| Deliverables | GET /api/v1/admin/projects/{projectId}/deliverables | Approved captured file title; no signed download URL invented, no actual file access |
| Timeline | GET /api/v1/admin/progress/projects/{projectId}/timeline | Hub timeline0 conflicts with separate F12 delivery updates; keep sources separate, no fake merged chronology |
| Progress evidence | GET /api/v1/admin/progress/projects/{projectId}?page=1&limit=20 | Dated F12 example updates are reference evidence only |
| State history | GET /api/v1/admin/projects/{id}/status-history | Separate from payment timeline and login activity |

No dedicated /pipeline/users/{id} or cross-service 360 endpoint is documented. This is frontend composition. Open-object success envelopes limit exact field guarantees. Service auth/tenant scope, routing, filtering, pagination and deployment need verification. All read contract text is inert. Mini-health strip reports **reference coverage**, not inferred runtime service health.

## Source/units / unsafe capability exclusions

Khandesh project payment rows: raw amounts3000000/2250000/2250000 are paise → ₹30,000.00/₹22,500.00/₹22,500.00; raw integer and source retained in inspector. No platform balance, revenue, conversion or SLA metric. Milestone approval/payment completion are distinct. Client-facing contract signature is not admin authority. Manual payment in screenshot093 completes immediately and belongs to payment workflow, not a hub click. Removed Payments milestone creation and conflicting Projects/Progress POST milestone schemas are NOT offered here. Global account actions need proper reasons/safeguards/audit; not duplicated in F05.

## Local/demo-only affordances (no endpoint execution)

Hub tabs/entity selector/section anchors/search/filter/sort/pagination act on the loaded captured reference subset. URL params encode hub/userId/projectId/section, browser Back/Forward restores context. Unknown/untranscribed IDs never become fake UUID routes. Snapshot state controls, retries and permission-denied previews are local simulations. Dialogs show record/source/canonical handoff/read contract and optionally copy reference with honest clipboard fallback. Terms/Privacy are local disclosure notices, not invented legal documents. F04 links and supplied docs/spec paths are actual files. No financial/security mutation or audit success is claimed.

**Gate A PASS —8/8 required specs targeted;23 read capabilities mapped; all CTA classes documented local/read-only.**
