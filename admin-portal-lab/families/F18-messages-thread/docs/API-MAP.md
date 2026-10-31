# F18 API Map — Messaging (thread slice)

## GATE A (F18)
```
## GATE A (F18) · Specs: 1/1 · Endpoints: 18 · Demo-only: mark-read/send/edit/close · Gate: PASS
```

| UI surface | Method · path |
|---|---|
| Thread header / metadata | GET `/api/v1/messages/threads/{threadId}` |
| Message stream | GET `/api/v1/messages/{messageId}/thread` · GET `/api/v1/messages/{id}` |
| Mark read | POST `/api/v1/messages/{id}/read` · POST `/api/v1/messages/project/{projectId}/read` |
| Send reply | POST `/api/v1/messages/projects/{projectId}` (project thread) · thread messaging routes |
| Edit message | PATCH `/api/v1/messages/{id}` |
| Delete message | DELETE `/api/v1/messages/{id}` |
| Flag message | POST `/api/v1/messages/{id}/flag` · admin `/api/v1/admin/messages/{id}/flag` |
| Flagged queue entry | GET `/api/v1/admin/messages/flagged` → F19 |
| Attachments | POST `/api/v1/messages/project/{projectId}/attachments` |
| Search in conversation | GET `/api/v1/messages/project/{projectId}/search` · GET `/api/v1/messages/search` |
| **Members panel** | GET `/api/v1/messages/threads/{threadId}/members` |
| Add / remove member | POST `/api/v1/messages/threads/{threadId}/members` · DELETE `…/members/{memberUserId}` |
| Leave / close room | POST `/api/v1/messages/threads/{threadId}/leave` · archive/unarchive |
| Unread badge (context) | GET `/api/v1/messages/unread-count` |
| Admin moderation | GET `/api/v1/admin/messages/flagged/{id}` |

**Demo-only in lab:** no network; toast confirms mapped verbs. **No internal-note composer** — not present in `messaging.openapi.json`.
