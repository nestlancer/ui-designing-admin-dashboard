# F21 Baseline Map — Content · Blog + Editor

## GATE S (F21)
```
## GATE S (F21) · Shots: 11/11 · HTML: 18/18 · Modes verified: YES · Content frozen: YES · Gate: PASS
```

### Frozen hub (101 / 009)
- Eyebrow: **Content operations**
- H1: **Blog**
- Lede: Publish stories, moderate reader discussion, and manage content performance and taxonomy.
- Actions: **View live blog** · **New post**
- KPIs (live honesty): Total posts **—** · Published **—** · Drafts **—** · Pending comments **—**
- Tabs: Posts · Comments · Pending · Reported · Analytics · Taxonomy

### Posts (102 / 071)
- Search: `Search posts by title…`
- Status: All · Published · Draft · Scheduled · Archived
- Empty: **No posts match your filters**

### Comments (103 / 011)
- H2: **All comments**
- Lede: Review reader discussion across every published post.
- Status: Pending · Approved · Rejected · Spam

### Pending (104 / 012)
- H2: **Pending review**
- Lede: Approve legitimate contributions before they appear publicly.

### Reported (105 / 013)
- H2: **Reported comments**
- Lede: Investigate comments flagged by readers and take action.

### Analytics (106 / 010) · Taxonomy (107 / 014)
- Analytics: engagement + top-posts surfaces (demo-labelled in lab)
- Taxonomy h2: **Taxonomy & governance** · Add category/tag · **Merge tags**

### Editor (173–175 / 067–069 + live)
- Routes: `/content/posts/{id}/edit` · **C11:** `/content/posts/new` (192 live; **171 → 404** logged)
- Modes: **Write · Split · Preview**
- Fields: Title* · Excerpt · Markdown body · slug · tags · SEO
- Frozen edit fixture: **Agentic CI/CD with GitHub Actions**
- Excerpt: Patterns for AI agents that interpret failures, propose fixes, and escalate with human-in-the-loop gates.
- Body: human-in-the-loop architecture post (173 capture)

### Schedule (spec-only)
- `POST /api/v1/admin/posts/{id}/schedule` — confirm-gated demo in all variants
