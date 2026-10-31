# F07 API Map — notifications.openapi.json (29 paths)

## GATE A (F07)
```
## GATE A (F07) · Specs: 1/1 · Endpoints: 29 · Demo-only: confirm/send/broadcast (static) · Gate: PASS
```

| UI | Spec |
|---|---|
| Inbox list | GET `/api/v1/notifications` · history |
| Unread | GET `/api/v1/notifications/unread-count` |
| Mark read / all / selected | POST `…/read` · `…/read-all` · `…/read-selected` |
| Clear read | POST `…/clear-read` |
| Preferences | `/api/v1/notifications/preferences*` |
| Admin stats | GET `/api/v1/admin/notifications/stats` |
| Send | POST `/api/v1/admin/notifications/send` |
| Broadcast | POST `/api/v1/admin/notifications/broadcast` |
| Segment | POST `/api/v1/admin/notifications/segment` |
| Delivery report | GET `/api/v1/admin/notifications/delivery-report` |
| Platform log | GET `/api/v1/admin/notifications` |
| Resend | POST `/api/v1/admin/notifications/{id}/resend` |
| Templates | `/api/v1/admin/notifications/templates*` |

Demo-only: lab never fires real send/broadcast; confirm + audit copy only.
