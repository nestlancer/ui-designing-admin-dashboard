# F08 concepts

Shared teal tokens; all designs keep capacity, summary, queue, bulk affordance, detail/edit and quote handoff.

1. **V1 Operating desk:** familiar full-width table; baseline familiar and stable.
2. **V2 Split triage:** queue and selected request detail side-by-side; reduces context switching.
3. **V3 Card sweep:** card-forward queue for compact scans; retains all row data and action controls.
4. **V4 Dense desk:** compressed spacing for expert operators and larger working sets.
5. **V5 Focus loop:** stronger current-row/focus treatment and reduced-motion-safe handoff cues.

Concept layouts are authored into five separate files. Density and geometry differ; token palette does not.

## Geometry sketches (not pixel-accurate)

```text
V1  [capacity + metrics] [filters / views] [full-width queue] [detail below]
V2  [capacity summary] [queue worklist 60% | request dossier 40%]
V3  [capacity + filters] [request card] [request card] [request card]
V4  [compact capacity strip][search/status][dense, short-row table]
V5  [capacity] [queue] → focused row → [review] → next item
```

## Difference check

| Variant | Geometry | Hierarchy | Triage flow | Density | Interaction |
|---|---|---|---|---|---|
| V1 | baseline table | capacity then queue | sequential | standard | local detail |
| V2 | split pane | selected record equal prominence | select/inspect | standard | persistent context |
| V3 | cards | individual request focus | sweep cases | airy | card selection |
| V4 | compact register | row throughput | fast scan | dense | compact toolbar |
| V5 | focus lane | selected row | inspect then next | standard | motion/focus cue |

The keyboard/next actions remain local and do not imply a server mutation.