# F20 · Analytics Hub — GATE A · API map (Swagger)

Specs read: `backend-api-swagger/admin.openapi.json` (analytics + dashboard series) · `backend-api-swagger/health.openapi.json` (uptime/perf panels) · cross-checked: `requests.openapi.json`, `quotes.openapi.json`, `payments.openapi.json`, `gateway.openapi.json`.
Read the whole `README.md` (17 specs / 560 paths) first.

```
## GATE A (F20) · Specs: 2/2 (+4 cross-checked) · Endpoints mapped: 10 · Demo-only CTAs: 3 · Gate: PASS
```

## 1. What the specs actually promise (and what they don't)

All analytics responses are `ApiSuccessEnvelopeDto` → `data: { additionalProperties: true }`. **No field-level schema exists** for any analytics series. That is a load-bearing fact: the lab may render fields only where a captured UI proves them, and every other field must be labelled *not documented*.

| # | Method + path | Summary in spec | Params | F20 surface | Confidence |
|---|---|---|---|---|---|
| 1 | `GET /api/dashboard/revenue` | Get revenue analytics | `period` ∈ TODAY/WEEK/MONTH/QUARTER/YEAR · `from` · `to` (custom) | Revenue tab: hero total, revenue over time, revenue by category, CSV | Series shape **not documented** — field names unverified |
| 2 | `GET /api/dashboard/users` | Get user metrics | `period` | Users tab: total/active/new/by-role, user activity bar, role breakdown | counters likely, series unverified |
| 3 | `GET /api/dashboard/projects` | Get project metrics | `period` | Projects tab: total/active/completed/on-hold, status donut, status breakdown, avg completion, on-time rate | **endpoint family degraded in production (report Finding #1)** |
| 4 | `GET /api/dashboard/analytics/projects` | Alias of `/dashboard/projects` | `period` | same as #3 (alias — render once, never both) | alias documented |
| 5 | `GET /api/dashboard/analytics/users` | Alias of `/dashboard/users` | `period` | same as #2 | alias documented |
| 6 | `GET /api/dashboard/overview` | Overview metrics | `period` | **not used** — belongs to F02; F20 must not duplicate the dashboard | out of scope |
| 7 | `GET /api/dashboard/performance` | System performance | — | optional infra strip (uptime/latency) | series undocumented |
| 8 | `GET /api/dashboard/activity` | Recent activity | `limit` | *not used* in F20 (no captured activity panel) | out of scope |
| 9 | `GET /api/v1/health/system` | System metrics | — | "series health" facts for the degraded banner (uptime, memory) | documented endpoint, undocumented payload |
| 10 | `GET /api/v1/health/detailed` | Detailed diagnostics | — | degraded banner detail ("which dependency is down") | as above |
| + | `GET /api/v1/admin/requests/stats` | Overall request statistics | — | Requests-tab KPIs (46 / 43.9% / 0 min / 13) | **no period param** → KPIs are *lifetime*, the range control cannot honestly move them (see §3) |
| + | `GET /api/v1/admin/quotes/stats` | Overall quote statistics | — | Quote conversion card (36 / ₹9,68,950 / 50%) | lifetime, same caveat |
| + | `GET /api/v1/admin/payments/stats` | Payment statistics | — | cross-check of revenue totals | lifetime |

## 2. UI element → endpoint matrix

| UI element (frozen label) | Endpoint | Params | Loading | Empty | Error | Sparse |
|---|---|---|---|---|---|---|
| Area tabs ×4 | none (client state; "tabs are deep-linkable views" per master §10) | — | — | — | — | — |
| Range 7d/30d/90d/1y | `period` (mapped: 7d→WEEK? **no** — see §3) | `period` | skeleton | "no data in range" | retry | "only N points" |
| Revenue: Completed payments (total) | #1 | period | skeleton bar | `₹0.00` + "no completed payments in range" | inline error + retry | — |
| Revenue: Period trend | #1 | period | skeleton | "no comparison period" | inline error | delta needs previous period — **not documented** → mark *derived* |
| Revenue over time | #1 | period | chart skeleton | empty grid + reason | chart error + retry | point count + missing buckets |
| Revenue by category | #1 | period | 3 skeleton rows | empty table teaches next step | table error | totals row ties to hero (T1) |
| Users: 4 counters | #2 | period | skeleton | zeros with explanation | inline error | T8 flag (34/34/34 unverified) |
| User activity | #2 | period | chart skeleton | "no new users in range" + role mix fallback (captured copy) | chart error | 1 bar of N buckets → labelled |
| Role breakdown | #2 | period | skeleton rows | empty | error | — |
| Projects: 4 counters | #3/#4 | period | skeleton | zeros | **degraded banner (A11)** | — |
| Project statuses donut | #3/#4 | period | skeleton | empty | degraded state replaces chart | T7 reconciliation note |
| Status breakdown | #3/#4 | period | skeleton rows | empty | degraded | — |
| Requests: 4 KPIs | admin/requests/stats | — (no period) | skeleton | zeros | inline error | lifetime badge |
| Request volume | `requests` list? **not documented** as a series endpoint | — | skeleton | "no requests in range" | error | 2 bars of 30 buckets → labelled |
| By status / By category | admin/requests/stats | — | skeleton | empty | error | tie-out totals |
| Quote conversion | admin/quotes/stats | — | skeleton | "no quotes yet" | error | acceptance rate basis shown |
| Download CSV (per view) | client-side serialisation of the loaded view | — | — | disabled + reason when view is empty | — | CSV manifest states row count + range + generated-at |
| Advanced filters | **no endpoint** | — | — | — | — | **omitted** (prompt lists them as a primary; Gate A forbids inventing a filter contract) |

## 3. The parameter trap (important, documented)

Captured range values are `7d / 30d / 90d / 1y`; the documented enum is `TODAY / WEEK / MONTH / QUARTER / YEAR`. They are **not the same vocabulary** and the capture proves the ranges had no visible effect (four identical states). Therefore:

- The UI keeps the captured `7d/30d/90d/1y` labels (content lock).
- Each range is mapped to the nearest documented period and the mapping is **shown in the UI** (a mono "endpoint" line + a *period mapping* disclosure), so an operator never assumes a range did something it didn't.
- Requests/quotes KPIs carry a **lifetime** chip because their endpoints take no period.

## 4. Demo-only CTAs / affordances (listed for `DECISIONS.md`)

1. **Download CSV** → builds a CSV string in-page from the rendered view and triggers a download; labelled *demo export* (no server request). Honest manifest: view, range, rows, generated-at.
2. **Retry** on error/degraded states → re-renders the captured fixture (no request runs); the UI says "demo retry".
3. **Range switch** → recomputes rendered buckets from the captured series only; never claims a request was made. The "last request" line reflects the **documented endpoint a real build would call**, prefixed `DEMO`.

**No** live calls, no auth, no mutation, no fake audit result. Every endpoint string in the UI is presented as *the documented contract*, in mono, with a "not deployed in this static lab" note.

## 5. Conflicts / gaps to surface (not resolve)

| Gap | Handling in UI |
|---|---|
| Analytics payloads are `additionalProperties:true` | "Field names not documented in Swagger" note in the data-provenance disclosure |
| Projects endpoints exist in spec but 500 in production | degraded banner names the endpoint + the capture date, offers demo retry |
| No time-series endpoint for request volume / revenue buckets | chart footnote: buckets rendered from captured points; count shown |
| No export endpoint | CSV is client-side, labelled demo |
| No filter contract | no filter UI |

---

## 6. Full-Swagger sweep (rework pass) — 17 specs, not just `admin` + `health`

The first pass only read the `admin` and `health` specs. This pass walked every
`backend-api-swagger/*.openapi.json` file and filtered for analytics-shaped operations
(`stat|analytic|metric|dashboard|summary|report|export|csv|count|insight|trend|usage|quota`):
**88 operations** matched. The set below is what F20 must either use, name, or explicitly
decline — nothing is used silently.

### 6.1 Used by F20 (rendered or cited in the UI)

| Operation | Params | Where it appears |
| --- | --- | --- |
| `GET /api/dashboard/revenue` | `period` enum `TODAY/WEEK/MONTH/QUARTER/YEAR`, plus `from`, `to` | revenue north star, trend chart, driver row |
| `GET /api/dashboard/users` | `period` | users tab, all counters |
| `GET /api/dashboard/analytics/users` | `period` | cited as the documented alias in the health rail |
| `GET /api/dashboard/projects` | `period` | projects tab (degraded in production — stated in UI) |
| `GET /api/dashboard/analytics/projects` | `period` | cited as the alias of the failing route |
| `GET /api/v1/admin/payments/revenue/report` | `from`, `to`, **`groupBy`** | revenue-by-category table (the grouping is documented, not assumed) |
| `GET /api/v1/admin/payments/revenue/export` | `from`, `to`, **`format`** | export note: the one tab with a real documented CSV route |
| `GET /api/v1/admin/requests/stats` | — (lifetime) | requests tab counters, conversion basis |
| `GET /api/v1/admin/quotes/stats` | — (lifetime) | quote conversion block |

### 6.2 Documented but not captured — named in the health rail as “not captured”

`GET /api/v1/admin/requests/capacity/dashboard` · `GET /api/v1/admin/projects/stats` ·
`GET /api/v1/admin/users/logs/security-stats` · `GET /api/audit/stats`

### 6.3 Out of scope for F20 (owned by other families or another surface)

`GET /api/v1/admin/media/analytics|storage-usage|storage-stats|stats` (media library) ·
`GET /api/v1/admin/messages/{stats,analytics}`, `/notifications/admin/…stats|delivery-report`
(inbox / notifications families) · `/blog/admin/blog/analytics*`, `/portfolio/admin/portfolio/analytics*`
(content families) · `GET /api/webhooks/{id}/stats` (webhooks config) · `GET /api/dashboard/{overview,performance,activity,alerts}`
(overview dashboard, F-family owner) · `GET /api/reports`, `POST /api/reports`, `GET /api/reports/{id}/download`
(async report generation — a write path F20 deliberately does not offer).

### 6.4 Export boundary after the sweep

Revenue has a documented CSV contract (`…/revenue/export?format=csv`). Every other tab still
exports **client-side** from the rendered view, and the export note on the page says exactly that,
including the manifest fields (view, range, endpoint, captured timestamp, row count).

### 6.5 What the sweep did not find

- **No target / benchmark / threshold field** on any analytics operation → the north-star card
  renders a “no target is set in the capture” line rather than inventing one.
- **No metric-owner or refresh-cadence field** → the metric dictionary prints “not captured”.
- **No comparison-series parameter** beyond `from`/`to` → the period trend is reported as a
  conflict, never as a trend line.
- **No `groupBy` on any operation except payments revenue** → only that one table claims grouping.
