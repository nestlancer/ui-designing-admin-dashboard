# F17 Baseline Map — Messages Home + Inbox + New

## GATE S (F17)
```
## GATE S (F17) · Shots: 4/4 · HTML: 5/5 · Counts reconciled: YES · Content frozen: YES · Gate: PASS
```

### Home (`85-messages-index.html` · shot 022)
- **Lede:** Review inbox health, then open the messaging panel to triage and reply.
- **CTAs:** Message client · New group · Open messaging panel · Open conversations
- **KPIs:** Active inbox **18** · Unread messages **21** (reconciled F02 bell) · **11 threads waiting** under unread messages · Unread threads **11** · Needs triage **11** · Open conversations **18**
- **Recent (frozen):** Logistics ops (Group) · Sandeep Chopra (Direct) · Payments ops (Group) · Karthik Menon · Pooja Kulkarni · Suresh Iyer · Neha Gupta · Amit Verma — snippets + **25 days ago**

### Inbox (`168-messages-inbox.html` · shot 023)
- **Lede:** Triage the queue, open a thread, and reply without leaving the workspace.
- **Queue:** 18 conversations · 10 waiting for response
- **Filters:** All · Unread · Direct · Project · Group · Inbox · Active · Archived
- **Sort:** Latest · **Unread first** · **Longest wait**
- **Threads:** same home set + Divya Sharma · Rajan Kumar · Kavya Reddy · Vikram Shah · Priya Nair · Ananya Iyer · Rahul Desai · Agency partner coordination (Group) · Samira Patel · Arjun Mehta
- **Snapshot panel:** Open 18 · Unread 20 (HTML) — lab displays **21** at KPI level to match F02; flagged not invented (**0** via F02)
- **Ages:** **25d** / **25 days ago**

### New direct (`166` · shot 024 ✓)
- **Lede:** Start or resume a direct conversation with a client. Existing threads are reopened automatically.
- **Fields:** Client · Cancel · Open conversation · Back to messages

### New group (`167` live 404 · shot 025 intended)
- Live route **`/messages/new/group`** → Page not found (evidence). Lab ships intended create-group UI per shot 025 + **C11** grammar **`/messages/new-group`** with honesty banner.

### Deep-links (C11)
- Thread → `../../../index.html#f18`
- Flagged review → `../../../index.html#f19` (count **0**, F02)
