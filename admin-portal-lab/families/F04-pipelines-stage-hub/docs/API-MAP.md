# F04 API Map — Pipelines · Stage Pipeline

## GATE A (F04)

```
## GATE A (F04) · Specs: 7/7 · Endpoints mapped: stage counts + 16 reference areas · Demo-only: 3 · Gate: PASS
```

## Specs read

admin · requests · quotes · projects · payments · messaging · users · (+ gateway docs-specs for reference listing)

## Stage counts → endpoints

| UI card | Count source (conceptual) | Notes |
|---|---|---|
| Inquiries 23 | `GET /api/v1/admin/contact` | Frozen capture |
| Requests 46 | `GET /api/v1/admin/requests` (+ stats) | Frozen |
| Quotes 36 | `GET /api/v1/admin/quotes` (+ stats) | Frozen |
| Projects No data | `GET /api/v1/admin/projects*` | **Outage** — show degraded/error, never invent 18 |
| Payments 48 | `GET /api/v1/admin/payments` (+ stats) | Frozen |
| Messages — | messaging unread/conversations | No count in capture |
| Users 34 | `GET /api/v1/admin/users` | Frozen (suspect “new” KPIs elsewhere) |

## Jump routes (C11)

`/contact` `/requests` `/quotes` `/projects` `/payments` `/messages` `/users` `/moderation` `/audit` `/dashboard` `/analytics` `/content` `/portfolio` `/media` `/system` `/integrations`  
Tab deep-links: `/pipeline` · `/pipeline/users` · `/pipeline/projects` (F05 owns hub interiors).

## API reference

Frozen area → endpoint counts from capture. Accordion bodies may list demo path samples labelled as reference-only; gateway `GET /api/v1/docs-specs/{serviceKey}` is the conceptual feed — **lab does not fetch**.

## Demo-only

1. Opening accordion expands local frozen endpoint samples (not live OpenAPI fetch).
2. “Retry Projects count” simulates still-degraded without inventing success data.
3. Jump links announce demo navigation toast in static lab (or use in-lab anchors) — never claim live routing succeeded.
