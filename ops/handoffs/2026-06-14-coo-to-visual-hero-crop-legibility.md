---
from: COO
to: Visual Bot
status: action-requested
created: 2026-06-14
re: full-bleed hero photos crop the subject / compete with text (owner-reported on Horses; systemic across homepages)
source: 2026-06-14 responsive review (3 sub-agents, COO-verified) + Carlo direct feedback
---

# Visual directive — hero photo cropping + text legibility (needs in-browser tuning)

Carlo (2026-06-14) on Horses: **"the way the pictures block text and you can't see
the subject"** + "review the sites based on small / medium / larger computer screens."

COO already shipped the parts that don't need a browser (PR #760):
- Article line-length cap on wide screens (ArticleLayout sidebar `max-w-6xl`).
- Horses homepage **category + featured-guide cards**: fixed-height → aspect-ratio
  containers, so those cards no longer crop the horse to a band.

**This handoff is the part that genuinely needs your eyes in a browser** — I am
deliberately NOT guessing pixel values blind, because the crop is screen- AND
photo-dependent and a blind change regresses it.

## The systemic issue: full-bleed `object-cover` heroes

Every homepage hero is a photo filling a tall `min-h-[~62–78vh]` section via
`object-cover` (through `FILL_IMAGE` → the `aspect` prop is overridden, container
height controls). Consequences, by breakpoint:

- **Wide / large desktop:** the section is *wider* than the photo's 16:9 → the
  photo is cropped top & bottom → the subject (horse + rider) loses its head/legs
  → "can't see the subject."
- **Small screens:** the stacked H1 + tagline + subtitle + CTAs grow tall and rise
  *above* the bottom gradient onto the bright part of the photo → low contrast →
  "blocks text."

## Files (heroes to tune)
- `apps/horses-com/src/app/page.tsx` — hero `~line 339` (`min-h-[62vh] sm:68vh lg:74vh`)
- `apps/dog-com/src/app/page.tsx` — hero `~line 289`
- `apps/vets-co/src/app/page.tsx` — hero `~line 356`
- `apps/fish-com/src/app/page.tsx` — hero `~line 318`
- `apps/ferret-com/src/app/page.tsx` — hero `~line 232`
- `apps/fish-com/src/components/HubMasthead.tsx` + `apps/petfoods-com/src/components/BrandMasthead.tsx` — same pattern on hub mastheads
- Shared: `packages/ui/src/components/ImageCard.tsx` (the `<Image fill object-cover>`) — if you add an `objectPosition` prop here, every hero can bias the crop to the subject. **Tag COO before changing ImageCard's API** (shared structure).

## Recommended levers (your call, verify in browser at 390 / 768 / 1440 / 2560px)
1. **`objectPosition`** bias (e.g. `center 35%`) so the subject stays in frame when the top/bottom is cropped — the highest-leverage fix. Needs an `objectPosition` passthrough on ImageCard/StockImage (coordinate with COO).
2. **Cap hero height** on ultra-wide (`max-h-[…]`) so a wide photo isn't cropped to a thin band on 4K.
3. **Strengthen the bottom scrim** for legibility over bright photos (the Dog hero comment already notes "unreadable over the bright kitchen shot") — raise the mid-gradient opacity.
4. Where a hero photo simply doesn't suit full-bleed, consider the **photo-beside-text** split (the category-card pattern Carlo already approved: photo + text on a solid surface, always legible).

## Division of labour
- **Visual:** tune the heroes in-browser across breakpoints (object-position, height caps, scrim) — this is composition + needs rendering.
- **COO:** if you want an `objectPosition` prop added to ImageCard/StockImage (structural), I'll do it on request and you set the values.
