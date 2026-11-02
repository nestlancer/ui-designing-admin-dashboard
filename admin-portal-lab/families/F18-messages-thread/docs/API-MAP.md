# F18 · Messaging thread API map

Reviewed `backend-api-swagger/README.md` plus all 47 `messaging.openapi.json` paths. Each operation documents a possible API contract only; it is not evidence of production health, authorization or completed mutations. Lab is offline and sends no requests.

| Thread UI | Method + path · operation | Contract detail | Offline handling |
|---|---|---|---|
| Thread detail / member context | `GET /api/v1/messages/threads/{threadId}` · `ChatThreadsController_getThread` | Detail with members | Screenshot fixture only; group ID not shown, do not fake it |
| Participants | `GET /api/v1/messages/threads/{threadId}/members` · `ChatThreadsController_listMembers` | Member list | Exact screenshot names/roles; truncated emails remain truncated |
| Messages | `GET /api/v1/messages/threads/{threadId}/messages` · `ChatThreadsController_listMessages` | Optional `projectId`, `replyToId`, `search`; page min 1/default 1; limit default 50 | Captured stream; local empty, skeleton and error panels |
| Search messages | `GET /api/v1/messages/search` · `MessagesController_search` | `q`, `page` | Local search only on visible captured message text |
| Send | `POST /api/v1/messages/threads/{threadId}/messages` · `ChatThreadsController_send` | `CreateMessageDto`: exactly one of projectId/threadId; content max 5000; optional replyToId/mediaId; enum type TEXT/FILE/SYSTEM/NOTIFICATION, default TEXT | Text limit enforced. “Preview only” receipt; no POST and no delivered/read status |
| Edit | `PATCH /api/v1/messages/{id}` · `MessagesController_editMessage` | `UpdateMessageDto.content` required, max 5000 | Local text edit/Cancel preview only; message IDs unavailable for screenshot group |
| Delete | `DELETE /api/v1/messages/{id}` · `MessagesController_deleteMessage` | Message ID path | Confirm dialog says this is not executed; do not call it |
| Mark message read | `POST /api/v1/messages/{id}/read` · `MessagesController_markAsRead` | Message ID path | Local state preview only |
| Mark thread read | `POST /api/v1/messages/threads/{threadId}/read` · `ChatThreadsController_markRead` | Marks all thread messages | Local preview only; no global count changes |
| Flag message | `POST /api/v1/messages/{id}/flag` · `MessagesController_flagMessage` | Message ID path; moderation owns follow-up | Flag preview only; route to local F19 queue |
| Message replies | `GET/POST /api/v1/messages/{messageId}/thread` · `MessagesController_getThread` / `replyToThread`; also `/{id}/threads` message-thread operations | Message thread history/reply; CreateMessageDto | Captured reply composer; no extra threaded-reply capability assumed beyond shown state |
| Project attachments | `GET /api/v1/messages/project/{projectId}/attachments` · `MessagesController_listAttachments` | Requires project ID | No project/file context in group capture; attachment control says no captured media ID |
| Add/remove group members | `POST /api/v1/messages/threads/{threadId}/members` and `DELETE .../{memberUserId}` | Add body requires `clientUserIds`; remove client member ID | Not exposed as an active mutation; screenshot only shows panel/remove affordance and no server confirmation |

## Exclusions

No internal-note endpoint is established by the screenshots or this chat schema. Do not add private comments, reactions, read receipts, typing/presence, delivery guarantees, collision warning, assignment, snooze, AI summaries, or omnichannel history. Unknown permission state remains unknown. Every action uses a local preview and is visibly marked as not sent/not applied.

## Gate A

`Spec 1/1 · all 47 paths inventoried · 13 thread surfaces mapped · live calls 0 · mutation claims 0 · Gate: PASS.`
