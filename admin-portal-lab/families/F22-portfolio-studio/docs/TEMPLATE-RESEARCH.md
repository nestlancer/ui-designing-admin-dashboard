# F22 public research · 3 November 2026

Performed after capture/report/API lock. Query: enterprise CMS collection content manager preview publish reorder items Webflow Sanity Contentful Shopify Polaris index table. Primary references opened below; patterns constrain composition, not product features. No third-party brand assets, colours or content are copied.

| Reference inspected | Useful operator pattern | F22 application |
|---|---|---|
| https://www.sanity.io/docs/studio/structure-tool | List → document panes; source includes default/custom structure screenshots | V4 compact navigation and separate inspector; retain item context |
| https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing | Draft preview distinguished from live content | V2 showcase-stage preview; never claim our local preview is production rendering |
| https://developers.webflow.com/data/docs/working-with-the-cms/manage-collections-and-items | Collection inventory vs staged/live publishing | V1 workset-first, explicit publication confirmation; do not import site-wide deployment |
| https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines | Toolbar hierarchy, consistent rows, progressive disclosure; anatomy images inspected in page content | V3 ledger: one primary edit plus overflow; status text and stable rank |
| https://atlassian.design/components/dynamic-table/examples | Reordering is separate from sorting; examples show More actions | V3 order numbers and disabled boundary moves; no silent filtered reordering |
| https://design-system.service.gov.uk/components/summary-list/ | Check answers as semantic key/value facts | Preview + impact summary before every public/destructive change |
| https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ | Modal initial focus, containment, Escape and caller restoration | Native named dialog; focus title, close control, restored workset context |
| https://www.w3.org/WAI/ARIA/apg/patterns/listbox/ | Roving options; explicit warning against interactive controls inside listbox options | Use real ordered list of articles + roving title buttons, not invalid nested listbox buttons |

Failures excluded from the eight-reference count: Webflow Help article returned not-found; two Contentful help URLs returned “Oh schnitzel”; Shopify Polaris fetch HTTP 500; Adobe Spectrum table not found. These are not presented as inspected product designs. The accessible primary docs provide sufficient curation/table/preview patterns; no paywalled enterprise UI was claimed to have been used live.

Gate T: PASS · 8 usable opened references, with 5 unavailable attempts recorded. Eight are pattern references, not eight live portfolio consoles. This is an explicit scoped research interpretation: two specialist CMS references plus operations/component/accessibility references give more defensible composition evidence than eight generic dashboard galleries.
