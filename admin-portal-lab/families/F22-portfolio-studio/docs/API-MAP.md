# F22 API map · documented, not called

The spec contains 30 path keys and 36 operations. The original brief’s Gate A “20 paths” is stale. No servers are configured. Every action in this lab is a local simulation; no auth token, request, permission lookup or audit persistence.

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/v1/portfolio` | List published portfolio items |
| GET | `/api/v1/portfolio/featured` | Get featured portfolio items |
| GET | `/api/v1/portfolio/categories` | Get all categories |
| GET | `/api/v1/portfolio/tags` | Get all unique tags |
| GET | `/api/v1/portfolio/search` | Search portfolio items |
| GET | `/api/v1/portfolio/health` | Service health check |
| GET | `/api/v1/portfolio/timeline` | Portfolio project timeline |
| GET | `/api/v1/portfolio/{idOrSlug}` | Get portfolio item details |
| POST | `/api/v1/portfolio/{idOrSlug}/view` | Record portfolio item view |
| POST | `/api/v1/portfolio/{idOrSlug}/like` | Toggle like on portfolio item |
| GET | `/api/v1/admin/portfolio/categories` | List all categories |
| POST | `/api/v1/admin/portfolio/categories` | Create category |
| PATCH | `/api/v1/admin/portfolio/categories/{id}` | Update category |
| DELETE | `/api/v1/admin/portfolio/categories/{id}` | Delete category |
| GET | `/api/v1/admin/portfolio` | List all portfolio items |
| POST | `/api/v1/admin/portfolio` | Create portfolio item |
| POST | `/api/v1/admin/portfolio/reorder` | Reorder portfolio items |
| POST | `/api/v1/admin/portfolio/bulk-update` | Bulk update portfolio items |
| GET | `/api/v1/admin/portfolio/analytics` | Get global analytics |
| GET | `/api/v1/admin/portfolio/analytics/{id}` | Get item analytics |
| GET | `/api/v1/admin/portfolio/{id}` | Get portfolio item |
| PATCH | `/api/v1/admin/portfolio/{id}` | Update portfolio item |
| DELETE | `/api/v1/admin/portfolio/{id}` | Delete portfolio item |
| POST | `/api/v1/admin/portfolio/{id}/publish` | Publish item |
| POST | `/api/v1/admin/portfolio/{id}/unpublish` | Unpublish item |
| POST | `/api/v1/admin/portfolio/{id}/archive` | Archive item |
| POST | `/api/v1/admin/portfolio/{id}/toggle-featured` | Toggle featured status |
| PATCH | `/api/v1/admin/portfolio/{id}/privacy` | Update privacy settings |
| POST | `/api/v1/admin/portfolio/{id}/duplicate` | Duplicate item |
| GET | `/api/v1/admin/portfolio/{id}/media` | List portfolio preview media |
| POST | `/api/v1/admin/portfolio/{id}/media` | Add media assets |
| POST | `/api/v1/admin/portfolio/{id}/media/upload` | Upload portfolio preview media |
| DELETE | `/api/v1/admin/portfolio/{id}/media/{mediaId}` | Remove media asset |
| POST | `/api/v1/admin/portfolio/{id}/media/{mediaId}/thumbnail` | Set portfolio thumbnail image |
| POST | `/api/v1/admin/portfolio/{id}/media/{mediaId}/featured-video` | Set featured showcase video |
| PATCH | `/api/v1/admin/portfolio/{id}/media/reorder` | Reorder media assets |

## Surface mapping
List/admin GET; categories GET/POST/DELETE; search is local over the eight captured items (not a server-query claim). Reorder POST sends items[{id,order}]; the demo previews the complete order before applying. Edit PATCH/create POST use Create/UpdatePortfolioItemDto. Publish/unpublish/toggle-featured/delete map to the matching admin routes above. Global analytics and per-item analytics have separate routes; the anonymous captured zero state is not a named-item response. **Revision-2 correction:** the portfolio media-upload operation declares required string query parameters `title`, `setAsThumbnail`, `setAsFeaturedVideo` but **no requestBody**. Its upload encoding/body cannot be confirmed from this spec. The related general media service's multipart contract is separate, not a proven portfolio adapter. Remove/unlink and thumbnail routes are documented; the local file picker only stages a name, never uploads. Unlinking a portfolio attachment is not global media force-deletion.

Create requires title (max 200), shortDescription (500), fullDescription (50000), contentFormat MARKDOWN/HTML. Slug lowercase/digits/hyphens; do not transmit literal slash-delimited Swagger regex syntax. Client name/industry 100, website 200; quote 1000, author/role 100; SEO title 100, description 200. Category name 100. Bulk operations exist (PUBLISH/ARCHIVE/DELETE/FEATURE/UNFEATURE) but were uncaptured and are not introduced. Archive/privacy/duplicate/featured-video are likewise outside the frozen UI.

Category deletion offers reassignToId in the API but captured mappings and IDs are absent. Prototype confirmation discloses impact unknown; it must not assert there are zero affected items. Unknown category/featured/format/rating remain unset; HealthTech screenshot values are explicitly sourced. No server undo route exists: C17 is local preview-only rollback.

Gate A: PASS · 1/1 family spec · 30 paths / 36 operations · UI calls: zero.