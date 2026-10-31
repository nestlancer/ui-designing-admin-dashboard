# F07 Baseline Map — Notifications Center + Ops

## GATE S (F07)
```
## GATE S (F07) · Shots: 6/6 · HTML: 7/7 · Tabs frozen: 14 · Focus stops counted: YES (129 buttons / 152 stops baseline) · Gate: PASS
```

### Routes / states
| Snapshot | Route | Shot |
|---|---|---|
| 52 index | `/notifications` | 029 |
| 53 my-notifications | filters All/Unread/Quotes/Payments/Messages/Projects/Requests/Account | 029 |
| 54 send | `?tab=send` | 034 |
| 55 broadcast | `?tab=broadcast` | 030 |
| 56 segment | `?tab=segment` | 033 |
| 57 delivery | `?tab=delivery` | 031 |
| 58 platform log | `?tab=log` | 032 |

### Frozen content
- H1 Notifications · lede: Read your notifications, send platform messages, and audit the delivery log.
- KPIs: Total Count **580** · Unread Count **535**
- Ops tabs: My notifications · Send · Broadcast · Segment · Delivery report · Platform log
- Inbox filters (8): All · Unread · Quotes · Payments · Messages · Projects · Requests · Account (+ Mark all read)
- Sample inbox: Your data export is ready · Revenue export is ready · New contact inquiry · New request submitted · Quote accepted
- Send: Search by name or email… · title ph "e.g. Quote ready for review" · Send notification
- Broadcast: "Broadcast to all users" · title ph "e.g. Scheduled maintenance tonight" · **confirm-gated**
- Segment: Send to clients only · segment select
- Delivery: Recent notification picker · Load report · Full notification UUID
- Platform log: Audience/Type/Read/Sort filters · Page 1 of 24 · 580 total · columns Title/Message/Recipient/Sent/Read
