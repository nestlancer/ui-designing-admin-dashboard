# F10 concepts

1. V1 **Quote workbench** — balanced stepper with persistent total.
2. V2 **Stepper spine** — steps lead; summary rail remains present.
3. V3 **Ledger first** — line-item register anchors pricing work.
4. V4 **Compact workbench** — reduced chrome for dense editing.
5. V5 **Review choreography** — restrained motion, reduced-motion fallback, strong review state.

All share the quote step labels and total honesty; teal tokens are unchanged. All preserve a send confirmation gate. Variants share the pilot's local data fixtures and therefore remain visual concepts, not evidence of production-specific line-item parity.

## Geometry sketches (not pixel-accurate)

```text
V1  [quote header] [Scope/Pricing/Terms stepper] [editor 2/3 | total rail]
V2  [large step spine + editor] [sticky amount / review rail]
V3  [line-item ledger wide] [persistent total rail]
V4  [tight header][compact editor][narrow total card]
V5  [step navigation] [review emphasis] [confirmed-send dialog]
```

## Difference check

| Variant | Geometry | Hierarchy | Builder flow | Density | Interaction |
|---|---|---|---|---|---|
| V1 | balanced two-column | editor + total | three-step | standard | persistent total |
| V2 | step-led | step and progress | step spine | standard | arrow navigation |
| V3 | ledger-led | amounts/items | price-first | standard | row edit/library |
| V4 | compact | dense controls | all steps nearby | dense | compact editing |
| V5 | review-led cues | decision gate | validate then confirm | standard | reduced-motion transition |

The prototype does not assert actual duplicate detection, margin values, API persistence or external delivery.