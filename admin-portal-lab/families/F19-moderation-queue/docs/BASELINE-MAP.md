# F19 Baseline Map — Moderation Queue + History

## GATE S (F19)
```
## GATE S (F19) · Shots: 2/2 · HTML: 4/4 · Actions spec-mapped: YES · Content frozen: YES · Gate: PASS
```

### Page shell
- **H1:** Moderation
- **Lede:** Review flagged chats, escalate or remove them, and restore from history when needed.
- **Tabs:** Active queue · History (toggle, not route split)

### KPI strip (active)
| Label | Empty value | Hint (captured) |
|---|---|---|
| Queue | 0 | Nothing flagged right now |
| Escalated | 0 | Blurred in chat for senior review |
| Project chats | 0 | Count of project-thread flags |

### Active filters
- **Review status:** All · Flagged · Escalated · **Clear**
- **Chat type:** All · Project · Direct · Group · **Clear**

### Empty active queue
- **Title:** No flagged messages in the queue
- **Body:** Items appear here when a user or admin flags a message in project, direct, or group chat.
- **Footer:** Showing 0 of 0 flagged messages

### History tab
- **Action filters:** Flagged · Escalated · Removed · Dismissed · Restored · **Clear**
- **Empty title:** No moderation history yet
- **Empty count:** 0 moderation history events

### Item anatomy (when populated)
Reason · Reporter · Content preview · Chat type · Context links (project/thread/user) · Age · Media/quarantine link (F23)

### Guarded actions (spec-mapped — no one-click)
| Label | Spec |
|---|---|
| Dismiss | POST `/api/v1/admin/messages/flagged/{id}/dismiss` |
| Escalate | POST `…/escalate` |
| Remove | DELETE `/api/v1/admin/messages/flagged/{id}` |
| Restore | POST `…/restore` (history) |

Every action: **preview acknowledged · reason code · confirm** → receipt logged to history (lab copy only).

### Bulk (A1 — safe only)
Dismiss selected · Export selection (no bulk remove/escalate).

### HTML sources
`91-moderation-index.html` · `169-moderation-index-state-active-queue.html` · `170-moderation-index-state-history.html` · `12-dashboard-sub-moderation.html` (nav dupe)
