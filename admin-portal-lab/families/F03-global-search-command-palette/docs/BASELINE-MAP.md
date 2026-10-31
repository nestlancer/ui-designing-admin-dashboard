# F03 Baseline Map — Global Search / ⌘K Palette

## GATE S (F03)

```
## GATE S (F03) · Shots: 1/1 · HTML: 1/1 · Actions audited: 26 captured / 6 missing jumps / 0 dead · Content frozen: YES · Gate: PASS
```

## Sources opened

| Source | Path | Status |
|---|---|---|
| Screenshot | `Nestlancer-admin-screenshots/admin/072-global-search-admin-dialog.webp` | Opened (converted PNG for inspection) |
| HTML | `nestlancer-admin-pages-html/03-dashboard-global-search-dialog.html` | Opened |
| Audit | `audit-metadata.json` → `03-dashboard-global-search-dialog.html` | Opened |
| Map | `nestlancer-admin-pages-html/README.md` row 3 | Opened |

**Screenshot gap note:** F03 has exactly 1 shot; HTML is the action inventory authority when text is clearer. Captures agree on groups, labels, placeholder, and footer hints.

## Capture facts

| Field | Frozen value |
|---|---|
| Host route | `/dashboard` (palette overlay) |
| Dialog | `role="dialog"` · `aria-modal="true"` · labelled “Command menu” |
| Trigger (F02 shell) | `Search pages… ⌘K` |
| Input placeholder | `Search or jump to…` |
| Input aria | Command search |
| Footer hints | `↑↓ navigate · ↵ select · esc close` |
| Dialogs count | 1 |
| Failed requests | 0 |
| Console | 1 CSP inline-style warning (capture artifact; not a palette feature) |

## Completeness audit — captured actions (26)

### Operations (15)

| # | Label | Target route (capture / nav parity) | Dead? |
|---|---|---|---|
| 1 | Dashboard | `/dashboard` | No |
| 2 | Pipelines | `/pipeline` | No |
| 3 | Pipeline · User hub | `/pipeline/users` | No |
| 4 | Pipeline · Project hub | `/pipeline/projects` | No |
| 5 | Inquiries | `/contact` | No |
| 6 | Requests | `/requests` | No |
| 7 | Quotes | `/quotes` | No |
| 8 | Projects | `/projects` | No |
| 9 | Users | `/users` | No |
| 10 | Payments | `/payments` | No |
| 11 | Settlement accounts | `/payments/accounts` | No |
| 12 | Company legal identity | `/company-legal` | No |
| 13 | Messages | `/messages` | No |
| 14 | Moderation | `/moderation` | No |
| 15 | Analytics | `/analytics` | No |

### Content (3)

| # | Label | Target | Dead? |
|---|---|---|---|
| 16 | Blog | `/content` (posts) | No |
| 17 | Portfolio | `/portfolio` | No |
| 18 | Media Library | `/media` | No |

### System (3)

| # | Label | Target | Dead? |
|---|---|---|---|
| 19 | System Config | `/system` | No |
| 20 | Webhooks | `/integrations` (webhooks) | No |
| 21 | Audit Logs | `/audit` (audit logs) | No |

### Quick actions (5)

| # | Label | Target / behaviour | Dead? |
|---|---|---|---|
| 22 | Create blog post | `/content/posts/new` (C11 unify) | No — route family exists |
| 23 | New portfolio item | `/portfolio/new` | No |
| 24 | Message client | `/messages/new` (direct) | No |
| 25 | New group chat | `/messages/new-group` (capture had 404 risk — keep label; honesty in DECISIONS) | Route fragile — keep label, demo-label if broken |
| 26 | Switch to dark mode | Local theme toggle (F02 C18) | No — local UI |

**Dead actions:** **0** among captured page jumps (all map to known console routes).

## Missing jumps (report §5.2 completeness — ADD for F03)

Captured palette is **page-complete** but **entity/queue incomplete**. Gate-A-backed additions for all 5 variants:

| Missing jump | Why | Gate-A basis | Lab target |
|---|---|---|---|
| Jump to pending requests queue | Operator question: queues without mouse | `GET /api/v1/admin/requests` + `/requests` | Action: “Requests · pending” |
| Jump to new contact inquiries | Contact triage | `GET /api/v1/admin/contact` + `/contact` | Action: “Inquiries · new” |
| Jump to awaiting verification payments | Money ops | `GET /api/v1/admin/payments` + `/payments?view=verification` | Action: “Payments · awaiting verification” |
| Jump to payment disputes | Approval path | `GET /api/v1/admin/payments/disputes` + `/payments/disputes` | Action: “Payments · disputes” |
| Find user by name/email | Jump-to-user | `GET /api/v1/admin/users/search` + `/users` | Result group “People” with demo frozen users |
| Open request/payment by ID | Mono ID jump (C9) | `GET /api/v1/admin/requests/{id}` · `GET /api/v1/admin/payments/{id}` | Demo rows with captured-style mono IDs |

**Gateway note:** `gateway.openapi.json` has **no global search fan-out path**. Palette filtering is client-side over a frozen catalog + optional user-search mapping; never invent a gateway search API.

## Content lock

- Keep all 26 captured labels and four group names: Operations · Content · System · Quick actions.
- Keep placeholder and footer hint wording.
- Keep “Command menu” dialog title anatomy.
- Do not invent SSO, AI ask, or undocumented pages.
- Cookie banner remains absent (C15 via F02 shell frame).

## Shell frame for presentation

Minimal F02-language frame (sidebar stub + 52px header with ⌘K trigger) so the open palette has authentic context. F03 owns the open dialog; F02 owns the shell system.
