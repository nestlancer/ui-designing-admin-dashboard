# F19 — Gate A API and domain map

## Sources and authority

Inspected the downloaded 15 October 2026 OpenAPI documents: `messaging` (47 paths), `blog` (69), `media` (50), plus related `admin` audit and `users` identity operations. All 17 service inventories were scanned for moderation/reporting overlap. The three primary specs are the scope authority; a documented path is not proof of deployment, authorization or current health.

Specs have no `servers` entry. Paths below are service-local documentation paths, **not verified gateway URLs**. Operations carry bearer security, but the offline lab has no token and makes no API requests.

## Chat moderation operations

| UI surface / action | Documented operation | Contract facts | UI consequence |
|---|---|---|---|
| Flag from a message | `POST /api/v1/admin/messages/{id}/flag` | ID required; no request body; generic success envelope. | F18 owns flag creation. F19 does not create production flags. |
| User flag entry | `POST /api/v1/messages/{id}/flag` | Project/direct/group message enters admin moderation. | Explains the queue population; not an extra F19 CTA. |
| Active queue | `GET /api/v1/admin/messages/flagged` | `userId`, `projectId`, `page`, `limit` are all marked required strings. Generic object response. | **Integration blocker for a real global queue:** no documented all-users/all-projects sentinel, filter semantics or row schema. Do not silently omit required parameters or invent a gateway override. |
| History | `GET /api/v1/admin/messages/moderation-history` | `page`, `limit`, `action` marked required strings; no action enum or typed history row. Description names flagged/escalated/removed/restored. | UI action vocabulary comes from capture 170 (also Dismissed). Search/sort field mapping and empty-action semantics need backend confirmation. |
| Dismiss flag | `POST /api/v1/admin/messages/flagged/{id}/dismiss` | Clears flag **without deleting message**; no body. | Individual or carefully prepared local bulk-dismiss preview. No “Approve” synonym. |
| Remove from chat | `DELETE /api/v1/admin/messages/flagged/{id}` | Replaces bubble with moderation notice; original text kept in history for restore; no body. | Guarded removal; reversible via documented restore operation, not a guaranteed ten-second server undo. |
| Escalate | `POST /api/v1/admin/messages/flagged/{id}/escalate` | Senior review; bubble censored so participants cannot read it; no body. | Explicit visibility consequence in confirmation. Escalated cases excluded from bulk dismissal. |
| Restore | `POST /api/v1/admin/messages/flagged/{id}/restore` | Description: restore removed/escalated message; optional `body.content` edits text before restore. **No requestBody schema is declared.** | Individual restore preview; original/edit comparison. Field shape/limits and gateway acceptance remain an integration question. |
| Chat context | `GET /api/v1/messages/threads/{threadId}` | Thread details with members; generic response. | Context link only when a real thread ID is available. Demo cases do not join real F18 records. |
| Chat messages | `GET /api/v1/messages/threads/{threadId}/messages` | Optional projectId/replyToId/search/page/limit; limit default 50, minimum 1, no documented maximum. | Context is paginated; never imply a whole conversation was inspected when only a snippet is available. |
| Project context | `GET /api/v1/admin/messages/project/{projectId}` | Project messages; generic response. | Future source-context integration; no production project lookup in this lab. |
| Actor context | `GET /api/v1/admin/users/{userId}` | User detail, bearer security, generic response. | Actor links require actual IDs; no identity lookup from a fictional name. |
| Related audit | `GET /api/audit/resource/{type}/{id}` | Admin-service audit path; not verified as the moderation-history store. | Keep service-local history distinct from global audit; no cross-service equivalence claimed. |

**Ten primary chat-moderation operations** are mapped above (two flag entries, queue, history, dismiss, remove, escalate, restore, thread context, thread messages); project/identity/audit operations are supporting references.

## Response, permission and conflict limits

- Moderation success responses use `ApiSuccessEnvelopeDto` with open `data: object`; there is no typed flagged-message/history DTO.
- `ResponseMetadataDto` requires timestamp/requestId/version. Its example timestamp is not a moderation event time and is never reused as data.
- No rationale, reason code, reviewer assignment, SLA, escalation target, optimistic-lock version, idempotency key or batch moderation endpoint is documented.
- No 403/404/409 moderation error bodies are specified. The prototype demonstrates generic failure/retry states without claiming exact server copy or permission behavior.
- No current operator permission is inferred from the captured administrator identity. Real actions would require server authorization and conflict handling.
- The queue's required user/project parameters conflict with the captured global empty queue. This remains unresolved; the lab does not “fix” it with an invented endpoint.

## Adjacent domains — links, not mixed queues

| Domain | Documented operations | Ownership |
|---|---|---|
| Blog comments | `GET /api/v1/admin/comments/reported`; pending/comments lists; individual `POST …/{id}/approve`, `…/reject`, `…/spam`; delete comment. | F21. Chat Dismiss/Remove/Restore must not be applied to comment IDs. |
| Media quarantine | `GET /api/v1/admin/media/quarantine`; `POST …/{id}/release`; `DELETE …/{id}?force=…`. List supports page/limit (max 100), sort, fileType, status, search and context filters. | F23. “Release” is not chat restore; permanent purge is not reversible chat removal. |

## Offline action policy

All controls prepare or simulate local state. A confirmation displays the demo reference, action semantics and a required review acknowledgement. An optional reviewer note may be kept in the local receipt, but it is not a documented API field and is never sent. Session history says “local preview,” not “audit logged.” No fetch/XHR, token, real user lookup, permission check or production mutation is used.

Bulk dismissal is a UI workset, not a batch endpoint. A future integration must use individually authorized operations and handle partial failures; this prototype does not pretend that network fan-out has succeeded. Ten-second undo only reverses local preview state. Real restore support must not be misrepresented as undo for a dismissed flag.

```
GATE A (F19)
Primary specs inspected: 3/3 · Related inventories: 17/17
Primary chat operations mapped: 10 · Supporting context operations: 3 · Adjacent domains separated: 2
Live calls made: 0 · Demo-only safeguards explicitly identified: YES
Gate: PASS — documented capability map complete; real global-feed integration explicitly unresolved
```