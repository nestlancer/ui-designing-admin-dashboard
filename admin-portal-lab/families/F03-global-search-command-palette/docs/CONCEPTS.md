# F03 Concepts — Global Search / ⌘K Palette

## GATE 1 (F03)

```
## GATE 1 (F03) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS · C 5/5: YES · Completeness 5/5: YES · P2-P3 N/A · Gate: PASS
```

## Shared frozen contract

All variants: placeholder `Search or jump to…`; footer `↑↓ navigate · ↵ select · esc close`; groups Operations/Content/System/Quick actions plus Gate-A completeness groups (Queues / People / Money records as needed); zero dead actions; teal tokens; dark + 375px sheet; focus trap; `aria-activedescendant`; theme via `?theme=`.

### Table 1

| Variant | Keeps | Fixes (C#) | Adds | Axes | Signature | API |
|---|---|---|---|---|---|---|
| V1 Ground Truth | 26 labels + hints | C3 C5 C9 C12 C18 C20 | Completeness jumps | A centered dialog · B catalog-first · D calm | Open → recents + full groups; ↑↓↵ | Route jumps + users/search map |
| V2 Grouped Command | Same labels | same | same | A hub columns · C hub-led · D denser | Hub chips filter group families | same |
| V3 Preview Pane | Same | same | same | A 2-pane · C preview narrative · E crossfade | Active row drives right preview | same |
| V4 Minimal Instant | Same | same | same | A single list · B type-first · D airy minimal | Instant filter, almost no chrome | same |
| V5 Motion Sequence | Same | same | same | A staged rail · C chapter groups · E stagger | Group sections choreograph in | same |

### Table 2 — distinctness

| | A | B | C | D | E |
|---|---|---|---|---|---|
| V1 | centered modal | catalog | static groups | calm | basic highlight |
| V2 | hub strip + list | hubs | hub-led | dense | chip filter |
| V3 | split preview | selected detail | preview narrative | calm | preview crossfade |
| V4 | edge sheet/list | query | flat list | minimal | none/opacity |
| V5 | rail + stage | current group | stepper chapters | calm | stagger |

No two share the same A+C pair.

### Table 3 — coverage

C3/C5/C9/C12/C18/C20 in 5/5. Completeness audit additions in 5/5. No P1 queue ADD.

---

## V1 — Ground Truth Complete

- **Layout:** F02-language frame; centered dialog matching capture.
- **Signature:** Completeness rows inserted under new Queues/People groups without renaming captured items.
- **Sketch:**
  ```
  [shell frame]
  [==== Command menu ====]
  [Search or jump to…]
  [Recent …]
  [Operations …]
  [Queues (added) …]
  [People (added) …]
  [Content · System · Quick actions]
  [↑↓ · ↵ · esc]
  ```

## V2 — Grouped Command Hubs

- **Layout:** Horizontal hub chips (Queues / People / Money / Pages / Actions); list shows only active hub’s items (+ search across all when typing).
- **Signature:** Hub keyboard `[` `]` or chips; preview line under input shows active hub count.
- **Sketch:**
  ```
  [palette]
  [input]
  [Queues|People|Money|Pages|Actions]
  [filtered list for hub]
  [footer]
  ```

## V3 — Preview Pane

- **Layout:** Left results / right detail (route, endpoint, badge, why-jump).
- **Signature:** Arrow moves selection; preview crossfades metadata; mobile stacks preview below.
- **Sketch:**
  ```
  [input spanning]
  [results | preview: route · API · note]
  [footer]
  ```

## V4 — Minimal Instant

- **Layout:** Top-anchored sheet, single ungrouped ranked list when typing; empty shows compact recents only.
- **Signature:** Type-to-filter with match highlight; almost no section chrome.
- **Sketch:**
  ```
  [input]
  [flat ranked rows]
  [footer micro]
  ```

## V5 — Motion Sequence

- **Layout:** Left chapter rail (Operations→…→Actions); main list for chapter; reduced-motion disables stagger.
- **Signature:** Opening staggers group opacity; selecting chapter updates rail + list with short crossfade.
- **Sketch:**
  ```
  [rail chapters | list]
  [footer]
  ```
