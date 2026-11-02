# F17 · Messaging API map

Reviewed `backend-api-swagger/README.md` and all 47 paths in `messaging.openapi.json`. Swagger documents service-local capabilities; it does not prove deployed routing, permissions, lookup data, health or success. No backend requests are made by these offline pages.

| UI surface | Method + operation | Contract / field notes | Prototype state |
|---|---|---|---|
| Inbox thread list | `GET /api/v1/messages/threads` · `ChatThreadsController_list` | `page`, `limit`; list direct and group threads for current user | Historical captured rows; loading skeleton, empty/no-match and explicit error state |
| Home/admin conversation list | `GET /api/v1/admin/messages/conversations` · `MessagesAdminController_getAdminConversations` | Response envelope is generic `data` object; fields not enumerated in this spec excerpt | Overview figures remain screenshot/HTML snapshots, not inferred from API |
| Direct start/resume | `POST /api/v1/messages/threads/direct` · `ChatThreadsController_direct` | `DirectThreadDto.peerUserId` (admin must supply client UUID); “open or resume” semantics | Validates local name selection but no captured UUID / server call; preview-only state |
| Group creation | `POST /api/v1/messages/threads/group` · `ChatThreadsController_group` | `GroupThreadDto`: optional `title`, required `clientUserIds` array with ≥2 client USER IDs | Requires two local selected names; names are not IDs. No success is asserted; shows ready-to-submit contract preview and route correction |
| Read details | `GET /api/v1/messages/threads/{threadId}` · `ChatThreadsController_getThread` | “with members” | Local screenshot-backed group fixture; IDs not exposed in screenshot, so no invented URI ID |
| Read members | `GET /api/v1/messages/threads/{threadId}/members` · `ChatThreadsController_listMembers` | Group members | Riya / Karthik / Ananya only for screenshot-backed group. No mutations |
| Read messages | `GET /api/v1/messages/threads/{threadId}/messages` · `ChatThreadsController_listMessages` | `projectId`, `replyToId`, `search`, `page` (min 1, default 1), `limit` (default 50) | Historical stream; loading, empty and error states represented locally |
| Message search | `GET /api/v1/messages/search` · `MessagesController_search` | `q`, `page` | Local text search on captured rows; no server search implied |
| Unread total | `GET /api/v1/messages/unread-count` · `MessagesController_getUnreadCount` | generic envelope | Captured totals used only in labelled views; not live |
| Group- or thread-level compose | `POST /api/v1/messages/threads/{threadId}/messages` · `ChatThreadsController_send` | `CreateMessageDto`: exactly one of `projectId`/`threadId`, `content` ≤5000, optional `replyToId`, `mediaId`, `type` enum TEXT/FILE/SYSTEM/NOTIFICATION (default TEXT) | Character validation + preview receipt; no send, file upload or server receipt |
| Mark thread read | `POST /api/v1/messages/threads/{threadId}/read` · `ChatThreadsController_markRead` | Thread-level read | Local preview only; no unread total mutation |
| Alternate message read | `POST /api/v1/messages/{id}/read` · `MessagesController_markAsRead` | Message-level read | Not wired to production |
| Project messages | `GET /api/v1/messages/projects/{projectId}` and `/project/{projectId}` alias | Project-specific; not the direct/group front door | No project link/data inventing in this family |

## Not provided as a confirmed F17 feature

No endpoint-backed assignment, bulk action, snooze, saved views, mute toggle, typing/presence, collision detection, SLA, internal-note mode, canned responses or channel-unification is evidenced for F17. These are not implemented merely because online products support them. The screenshot offers “New group” but the captured UI route 404s: the local route fixes navigation grammar, while the API capability remains a documented but unexecuted create operation.

## Gate A

`Spec 1/1 · paths inventoried 47 · mapped surfaces 12 · demo-only submit controls disclosed 5 · live requests 0 · Gate: PASS.`
