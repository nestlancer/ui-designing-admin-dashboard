# F22 API Map — portfolio.openapi.json

## GATE A (F22)
```
## GATE A (F22) · Specs: 1/1 · Endpoints: 30 · Demo-only: publish/reorder/category writes · Gate: PASS
```

| UI surface | Admin / public spec |
|---|---|
| Public showcase read | GET `/api/v1/portfolio` |
| Admin list / create | GET/POST `/api/v1/admin/portfolio` |
| Item CRUD | GET/PATCH/DELETE `/api/v1/admin/portfolio/{id}` |
| **Reorder** | POST `/api/v1/admin/portfolio/reorder` |
| Bulk update | POST `/api/v1/admin/portfolio/bulk-update` |
| **Publish / unpublish** | POST `…/{id}/publish` · `…/unpublish` |
| Archive | POST `…/{id}/archive` |
| **Toggle featured** | POST `…/{id}/toggle-featured` |
| Privacy / duplicate | POST `…/privacy` · `…/duplicate` |
| Global analytics | GET `/api/v1/admin/portfolio/analytics` |
| Per-item analytics | GET `/api/v1/admin/portfolio/analytics/{id}` |
| Categories list/create | GET/POST `/api/v1/admin/portfolio/categories` |
| Category update/delete | PATCH/DELETE `/api/v1/admin/portfolio/categories/{id}` |
| Media attach/upload/reorder | `/api/v1/admin/portfolio/{id}/media*` |

Lab variants: static preview + confirm + toast receipt only — no live writes.
