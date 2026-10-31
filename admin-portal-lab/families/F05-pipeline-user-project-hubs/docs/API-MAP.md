# F05 API Map

## GATE A (F05)

```
## GATE A (F05) · Specs: 7/7 · Endpoints mapped · Demo-only: 4 · Gate: PASS
```

| Surface | Endpoint |
|---|---|
| User search/select | `GET /api/v1/admin/users` · `…/search` · `…/{userId}` |
| User requests/quotes/payments | admin requests/quotes/payments filtered by user |
| User messages/trust | messaging + users activity/sessions |
| Project list/select | `GET /api/v1/admin/projects*` (**down** → Network Error) |
| Project milestones/progress | projects + progress specs |
| Project payments/origin | payments + request/quote links |

Demo-only: local entity pickers, simulated retry still-degraded, section empty fixtures, navigation toasts.
