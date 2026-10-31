# F04 Baseline Map — Pipelines · Stage Pipeline

## GATE S (F04)

```
## GATE S (F04) · Shots: 1/1 · HTML: 12/12 stage-route captures reconciled · Cards frozen: 6 delivery + 3 trust + 7 consoles + 16 API areas · Content frozen: YES · Gate: PASS
```

## Sources

| Source | Status |
|---|---|
| `044-pipeline.webp` | Opened |
| Primary HTML `35-pipeline-index.html` | Opened (authority) |
| Dupes `31`, `32`, `36`, `40`, `44`, `47`, `48`, `152` | Opened / reconciled same stage map |
| Accordion states `153` Payments 16 · `154` Messages 6 · `155` Analytics 8 | Opened |
| `audit-metadata.json` for above | Opened |

**Tie-breaker:** HTML DOM wins when screenshot prose differs. Screenshot overview of Projects as “18” is **not** used — capture shows **Projects · No data** (aligns with projects API outage / A11).

## Frozen page copy

| Field | Value |
|---|---|
| Title | Pipeline · Admin |
| H1 | Pipelines |
| Tabs | Stage pipeline · User hub · Project hub |
| Intro | Stage pipeline for platform-wide triage. Use User hub or Project hub to drill into one client or one engagement. |
| H2s | Client delivery · Users & trust · Standalone consoles · Admin API reference |
| Client delivery blurb | End-to-end flow from first contact through paid delivery… |
| Serves | Clients requesting Nestlancer services |
| Trust blurb | Manage all client and operator accounts… |
| Consoles blurb | Independent tools — not sequential pipeline stages |
| API ref | 157 endpoints across 16 feature areas · base path `/api/v1` |

### Client delivery stages

| Stage | Count | Job line | Guidance | Jump |
|---|---|---|---|---|
| Inquiries | 23 | Website contact form leads | Qualify lead and convert to request | `/contact` |
| Requests | 46 | Scoped service requests | Triage, assign, and prepare quote | `/requests` |
| Quotes | 36 | Pricing proposals | Send quote and track acceptance | `/quotes` |
| Projects | **No data** | Active delivery work | Manage milestones and deliverables | `/projects` (degraded) |
| Payments | 48 | Milestone payments and payouts | Release funds and resolve disputes | `/payments` |
| Messages | — (no count) | Project communication | Monitor threads and system broadcasts | `/messages` |

### Users & trust

| Card | Count | Job | Guidance | Jump |
|---|---|---|---|---|
| Users | 34 | Accounts, roles, sessions | Review profile, role, and sessions | `/users` |
| Moderation | — | Flagged messages and abuse | Dismiss, escalate, or remove content | `/moderation` |
| Audit logs | — | Auth and admin action history | Investigate security events | `/audit` |

### Standalone consoles

Dashboard · Analytics · Blog · Portfolio · Media · System · Webhooks  
(with captured one-line jobs: KPIs/revenue/alerts · Deep metrics · Posts/comments · Public showcase · Files/quarantine · Config/jobs/flags · Outbound integrations)

### Admin API reference (16 areas)

Inquiries 6 · Requests 11 · Quotes 10 · Projects 20 · Payments 16 · Messages 6 · Users 21 · Moderation 6 · Audit logs 14 · Dashboard 8 · Analytics 8 · Blog 16 · Portfolio 10 · Media 19 · System 14 · Webhooks 14

## Failed requests / console

Stage route captures: no family-specific failedRequests required for the map itself; Projects card honesty reflects known `/api/v1/admin/projects*` outage (Finding #1).
