# F17 Delivery Report — Messages Home + Inbox + New

**Result:** PASS — 5 variants with C9/C11 + C3/C5/C12/C18/C20  
**Winner:** **V2 Inbox-spine** — operators live in the queue; home KPIs stay one click away without losing triage context.

| V | Name | Signature |
|---|---|---|
| V1 | Ground Truth | Tabbed surfaces mirroring shots 022–025 |
| V2 | Inbox-spine | Two-column queue + workspace preview |
| V3 | Home-first | Entry cards + recent stack above inbox |
| V4 | Dense console | Compact list + compose drawer |
| V5 | Motion | Animated panel transitions (respects reduced motion) |

Coverage: C9/C11/C3/C5/C12/C18/C20 **5/5**  
Counts: Unread messages **21** (F02 bell) · Unread threads **11** · Active inbox **18** · Flagged **0** (link F19 only)  
Routes: `/messages` · `/messages/inbox` · `/messages/new-direct` · `/messages/new-group` (lab; live `/messages/new/group` 404)

```
## GATE 3 (F17) · Hand-built: 5/5 · Generators: 0 · Widths×themes: 5/5 · Checklist: 5/5 · Blockers: 0 · Gate: PASS
```

Preview: `admin-portal-lab/` via `:8131` · `families/F17-messages-home/V#/index.html`
