# F23 API Map — media service

## GATE A (F23)
```
## GATE A (F23) · Specs: 1/1 · Endpoints: 50 · Demo-only: bulk tag/move · Gate: PASS
```

| UI surface | Spec path |
|---|---|
| List / filter library | GET `/api/v1/admin/media` |
| User-scoped list | GET `/api/v1/media` |
| Quarantine queue | GET `/api/v1/admin/media/quarantine` |
| Release / reprocess / delete quarantined | POST/PATCH/DELETE quarantine item routes |
| Storage analytics | GET `/api/v1/admin/media/analytics` |
| Stats alias | GET `/api/v1/admin/media/stats` |
| Upload request | POST `/api/v1/media/upload/request` |
| Upload confirm | POST `/api/v1/media/upload/confirm` |
| Direct upload | POST `/api/v1/media/upload/direct` |
| Asset detail | GET `/api/v1/media/{id}` |
| Update metadata | PATCH `/api/v1/admin/media/{id}` |
| Share link | POST `/api/v1/media/{id}/share` (demo-labelled) |
| Shared list | GET `/api/v1/media/shared` |
| Cleanup / maintenance | POST `/api/v1/admin/media/cleanup` |
| Folders / context filters | query: `contextType`, `visibility`, `uploaderId`, `fileType`, `status` |

Bulk tag/move in lab are demo-only (no single bulk path in capture); delete always preview + confirm in UI.
