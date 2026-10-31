# F03 API Map — Global Search / ⌘K Palette

## GATE A (F03)

```
## GATE A (F03) · Specs: 6/6 · Actions resolved: 32/32 · Demo-only: 4 · Gate: PASS
```

## Specs read

| Spec | Use |
|---|---|
| `gateway.openapi.json` | Confirmed **no** global search fan-out endpoint |
| `users.openapi.json` | `GET /api/v1/admin/users`, `GET /api/v1/admin/users/search`, `GET /api/v1/admin/users/{userId}` |
| `requests.openapi.json` | `GET /api/v1/admin/requests`, `GET /api/v1/admin/requests/{id}` |
| `quotes.openapi.json` | `GET /api/v1/admin/quotes`, `GET /api/v1/admin/quotes/{id}` |
| `payments.openapi.json` | `GET /api/v1/admin/payments`, verification/disputes paths, `GET /api/v1/admin/payments/{id}` |
| `admin.openapi.json` | Dashboard/system/webhooks/audit jump targets · `GET /api/audit/logs` |

Also consulted route inventory in `nestlancer-admin-pages-html/README.md` for UI destinations.

## UI action → route/endpoint

### Captured page jumps (26)

Each Operations/Content/System item resolves to a real console route (see BASELINE-MAP). Quick actions:

| Action | Route / behaviour | Endpoint basis |
|---|---|---|
| Create blog post | `/content` new-post flow | Blog admin create (blog spec) |
| New portfolio item | `/portfolio/new` | Portfolio admin create |
| Message client | `/messages` new-direct | Messaging conversations |
| New group chat | `/messages` new-group | Messaging — capture historically fragile; **demo-labelled** if destination 404 |
| Switch to dark mode | Local theme (no API) | Demo local UI |

### Completeness additions (Gate-A)

| Action | UI target | Endpoint |
|---|---|---|
| Requests · pending | `/requests` (pending filter demo) | `GET /api/v1/admin/requests` |
| Inquiries · new | `/contact` | `GET /api/v1/admin/contact` |
| Payments · awaiting verification | `/payments?view=verification` | `GET /api/v1/admin/payments` |
| Payments · disputes | `/payments/disputes` | `GET /api/v1/admin/payments/disputes` |
| People results (demo frozen users) | `/users/{id}` | `GET /api/v1/admin/users/search` + `…/{userId}` |
| Mono-ID request/payment rows | `/requests/{id}` · `/payments/{id}` | admin request/payment by id |

### Filtering behaviour

- Client-side filter over frozen catalog (no gateway search API).
- Typing “user” / email-like queries reveals **People** group fed by demo rows mapped to users search — never claims a live network hit.
- Loading state: short local debounce skeleton while filtering large groups (demo affordance).

## Demo-only CTAs (listed for DECISIONS)

1. Selecting a result shows an in-lab “Would navigate to …” toast — static lab never leaves the variant.
2. Recent items are frozen demo recents, not personalised history.
3. People/ID rows use illustrative mono IDs styled like captures — not live PII.
4. Theme toggle from palette is local DOM class flip.

## Error / empty / loading

| State | Behaviour |
|---|---|
| Empty query | Recents + full grouped catalog |
| Typing | Filtered groups; stable group order |
| No results | Explicit “No matches for …” + clear query CTA |
| Loading | Optional brief skeleton on first open of People demo (labelled) |
| Error | N/A for local catalog; if People demo “unavailable”, show honest retry stub |
