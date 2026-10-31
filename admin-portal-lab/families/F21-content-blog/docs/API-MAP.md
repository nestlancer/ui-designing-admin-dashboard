# F21 API Map — blog.openapi.json

## GATE A (F21)
```
## GATE A (F21) · Specs: 1/1 · Endpoints: 69 · Demo-only: publish/schedule/moderation writes · Gate: PASS
```

| UI surface | Admin / public spec |
|---|---|
| Posts list / filters | GET `/api/v1/admin/posts` |
| Post CRUD | GET/PATCH `/api/v1/admin/posts/{id}` |
| **Publish** | POST `/api/v1/admin/posts/{id}/publish` |
| **Schedule** | POST `/api/v1/admin/posts/{id}/schedule` |
| Unpublish / archive | POST `…/unpublish` · `…/archive` |
| Export / import | `/api/v1/admin/posts/export` · `import` |
| All comments | GET `/api/v1/admin/comments` |
| Pending queue | GET `/api/v1/admin/comments/pending` |
| Reported queue | GET `/api/v1/admin/comments/reported` |
| Approve / reject / spam | POST `…/{id}/approve` · `reject` · `spam` |
| Reply / pin | POST `…/reply` · `pin` · `unpin` |
| Analytics hub | GET `/api/v1/admin/blog/analytics` |
| Engagement / top posts | `…/engagement` · `…/top-posts` |
| Categories / tags | `/api/v1/admin/blog/categories` · `tags` · `tags/merge` |
| Authors | `/api/v1/admin/blog/authors` |
| Public read (View live blog) | GET `/api/v1/posts` · `/api/v1/posts/{slug}` |

Lab variants: static confirm + receipt only — no live writes.
