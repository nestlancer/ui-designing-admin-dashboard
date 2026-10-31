# F19 API Map — Messaging + Blog + Media

## GATE A (F19)
```
## GATE A (F19) · Specs: 3/3 · Endpoints: 12 · Demo-only: all writes · Gate: PASS
```

| UI surface | Method | Path | Notes |
|---|---|---|---|
| Active queue list | GET | `/api/v1/admin/messages/flagged` | Filters: userId, projectId, page, limit |
| Moderation history | GET | `/api/v1/admin/messages/moderation-history` | `action` filter |
| Dismiss | POST | `/api/v1/admin/messages/flagged/{id}/dismiss` | Clears flag, keeps message |
| Escalate | POST | `/api/v1/admin/messages/flagged/{id}/escalate` | Senior review + blur in chat |
| Remove | DELETE | `/api/v1/admin/messages/flagged/{id}` | Moderation notice in thread |
| Restore | POST | `/api/v1/admin/messages/flagged/{id}/restore` | From history; optional content edit |
| User flag (ingress) | POST | `/api/v1/admin/messages/{id}/flag` | Creates queue row |
| Reported blog comments | GET | `/api/v1/admin/blog/comments/reported` | `blog.openapi.json` — parallel moderation lane |
| Quarantine list | GET | `/api/v1/admin/media/quarantine` | Linked from flagged attachments |
| Release quarantine | POST | `/api/v1/admin/media/quarantine/{id}/release` | F23 |
| Purge quarantine | DELETE | `/api/v1/admin/media/quarantine/{id}` | F23 |

**Lab:** static HTML — actions show confirm + receipt only; no bearer calls.

**Cross-family:** Media quarantine UI → F23 · Dashboard moderation card → F02 drill.
