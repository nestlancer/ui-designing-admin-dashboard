# F17 API Map — Messaging home / inbox / compose slice

## GATE A (F17)
```
## GATE A (F17) · Specs: 1/1 · Endpoints: 9 · Demo-only: 9 · Gate: PASS
```

Spec: `backend-api-swagger/messaging.openapi.json` (thread depth = F18; flagged queue = F19).

| UI surface | Demo action | Endpoint | Notes |
|---|---|---|---|
| Home KPIs | Read stats | `GET /api/v1/admin/messages/stats` | Active conversations + unread totals |
| Inbox list | List threads | `GET /api/v1/admin/messages/conversations` | Admin-wide queue |
| Inbox list (user lens) | List threads | `GET /api/v1/conversations` | Operator inbox |
| Unread badge (21) | Unread total | `GET /api/v1/conversations/unread-count` | Reconcile with F02 bell |
| Unread badge (alt) | Unread total | `GET /api/v1/messages/unread-count` | Platform slice |
| Search | Filter inbox | `GET /api/v1/messages/search` | Full-text |
| New direct | Open/resume | `POST /api/v1/messages/threads/direct` | Body: `DirectThreadDto.peerUserId` |
| New group | Create | `POST /api/v1/messages/threads/group` | Body: `GroupThreadDto` (`title`, `clientUserIds` ≥2) |
| Flagged entry (link only) | List flagged | `GET /api/v1/admin/messages/flagged` | F19 owns UI; count **0** in capture |

All variants: **demo-only** — toast/announce, no live API calls.
