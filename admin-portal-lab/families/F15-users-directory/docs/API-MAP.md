# F15 API Map — Users Directory

## GATE A (F15)
```
## GATE A (F15) · Specs: 2/2 · Endpoints: 8 · Demo-only: 6 · Gate: PASS
```

**Specs:** `users.openapi.json` (directory + admin slice) · cross-ref dashboard/admin aggregates where KPIs may originate.

### Directory read path (production)
| UI surface | Method | Path | Notes |
|---|---|---|---|
| User list (paginated) | GET | `/api/v1/admin/users` | Query: `page`, `limit`, `status`, `role` |
| Search | GET | `/api/v1/admin/users/search` | Query: `q`, `page`, `limit` |
| Security aggregates | GET | `/api/v1/admin/users/security-stats` | KPI / freshness candidate (lab freezes capture KPIs) |
| Bulk actions | POST | `/api/v1/admin/users/bulk` | Maps to A1 tag/verify/export/suspend batch (lab confirm-gated demo) |
| Row detail | GET | `/api/v1/admin/users/{userId}` | F16 scope; directory View → deep link only |
| Status change | PATCH | `/api/v1/admin/users/{userId}/status` | Suspend gated in lab |
| Role change | PATCH | `/api/v1/admin/users/{userId}/role` | Not primary on directory |
| Per-user export | GET | `/api/v1/admin/users/{userId}/export` | Bulk export maps conceptually |

### Add new user — Gate A honesty
| UI | Spec reality | Lab behaviour |
|---|---|---|
| Add new user button (capture) | **No POST** on `/api/v1/admin/users` in `users.openapi.json` | Honesty dialog: accounts from **client registration**; operators cannot create here; no invented success toast |

### Demo-only (static lab — no network)
- Bulk tag / verify / export / suspend confirm
- Search/filter/pagination (local dataset)
- Keyboard triage shortcuts
- View → `#f16` gallery announce
- KPI freshness badge (local as-of from capture metadata)

### Admin aggregates (secondary)
Dashboard strip may call admin/dashboard user counts; F15 **does not** re-fetch — freezes capture 34s and flags C16 stale smell.

### F16 boundary
Profile, pipeline tabs, impersonation, suspend/ban/delete dialogs → **F16** (`users.openapi.json` profile + safety paths).
