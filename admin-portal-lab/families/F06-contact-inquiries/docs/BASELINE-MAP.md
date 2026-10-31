# F06 Baseline Map — Contact · Inquiries Triage

## GATE S (F06)

```
## GATE S (F06) · Shots: 2/2 · HTML: 7/7 · Reply live-gap noted: YES · Content frozen: YES · Gate: PASS
```

## Sources

| Source | Status |
|---|---|
| `007-contact.webp` | Opened |
| `008-contact-reply.webp` | Opened (reply live-gap — automation never captured route change; screenshot + DOM reply controls are baseline) |
| `51-contact-index.html` + chip states `136–141` | Opened |
| audit-metadata | 46 buttons · 0 tables · rows-as-buttons · Reply/Send/Spam/Archive/Delete present in DOM |

## Frozen copy

| Field | Value |
|---|---|
| H1 | Inquiries |
| Lede | Public-site contact inbox — triage, reply, and archive like a support desk. |
| Refresh | Refresh |
| Search | Search name, email, ticket… |
| Chips | All 20 · New 14 · Read 5 · Responded 1 · Spam 0 · Archived 0 |
| KPI strip | Inbox 20 · New 14 · Open 19 · Responded 1 |
| Row anatomy | Avatar initials · name · timestamp · email (mono) · tag (GENERAL/OTHER) · subject snippet |
| Reply controls | Reply · Send reply · Update status · Mark spam · Archive · Delete |
| Composer ph | Write a clear reply. This is emailed to … |
| Spam reality | `u2@spam.test` / `u1@spam.test` / `t@spam.test` “hello world…” pollute New |

## Reply gap

Row clicks produced no capturable navigation in crawl (C14). Lab must open reply view from every row using screenshot 008 + in-DOM reply controls.
