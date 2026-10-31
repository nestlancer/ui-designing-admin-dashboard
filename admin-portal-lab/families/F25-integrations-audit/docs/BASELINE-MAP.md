# F25 Baseline Map — Integrations + Audit

| Capture | Route | Screenshot | Lab state |
|---|---|---|---|
| `130-integrations-index.html` | `/integrations` | `016-integrations.webp` | Webhooks hub — health, prefs, event catalog, 0 endpoints |
| `180-integrations-index-state-add-webhook.html` | `/integrations` (add) | `017-integrations-add-webhook.webp` | New webhook form |
| `131-audit-index.html` | `/audit` | `065-audit-logs-overview.webp` | Security overview + 4 logical sections |
| `193-audit-row-click.html` | `/audit` (detail) | — | Row detail drawer |

## Frozen copy (Gate S)
- **Webhooks H1:** Webhooks · Lede: Outgoing webhook health, supported event catalog, and registered endpoints.
- **Health:** GET `/admin/webhooks/health` · Delivery ok · Service `webhooks-admin` · Loaded from API (read-only)
- **Prefs:** Retry failed deliveries · Require signing secret (HMAC)
- **Events:** GET `/admin/webhooks/events` · **12** events · read-only
- **Endpoints:** GET `/admin/webhooks` · **0** endpoints · + Add webhook · Status All · Clear · empty copy
- **Audit H1:** Audit Logs · Lede: Authentication logs, system audit (including impersonation), security aggregates, and sessions.
- **Security KPIs:** Total 34 · Active 34 · Suspended 0 · 2FA 0 · Failed logins 24h 0 · Active sessions 4
- **Sections (C4 — one DOM table each + card fallback):**
  1. System audit — GET `/admin/audit` · 50 entries · Action All/LOGIN + Clear
  2. Auth audit — GET `/admin/logs` · 50 entries · same filter grammar
  3. User admin — IMPERSONATION_* filters + Clear
  4. Impersonation sessions — Status All/Active/Ended + Clear

## Honesty
- Lab shows ~15 representative rows per section (not 132 DOM rows); pagination labels **Showing 1–20 of N** (C19).
- Demo webhook endpoint + delivery log labelled — not live registrations (A12).
- API keys lifecycle demo-labelled where swagger thin (Gate A).

```
## GATE S (F25) · Shots: 3/3 · HTML: 4/4 · Explorer frozen: YES · Gate: PASS
```
