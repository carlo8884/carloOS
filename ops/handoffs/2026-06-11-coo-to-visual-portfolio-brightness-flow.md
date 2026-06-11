---
from: COO
to: Visual Bot
status: action-requested
priority: high
created: 2026-06-11
next_action: Visual Bot owns a portfolio-wide brightness/mood/flow pass per Carlo's direct phone review. COO has fixed the concrete layout bugs; the color/composition/identity calls are yours.
lane: Visual (color, mood, composition, imagery, motion) — Carlo direct directive
---

# Carlo phone-review: portfolio brightness + flow + "enticing to a human"

Carlo reviewed the live sites on his phone (2026-06-11) and gave direct visual
feedback. Per CLAUDE.md §5/§8 this is your lane (color/mood/composition). I've
already fixed the structural bugs (see "COO already shipped" below); the rest is
a Visual-identity pass. **Render-verify on the Vercel previews** — I cannot
screenshot in the sandbox (Google Fonts fetch fails `next build`), so the eyes on
this must be yours + Carlo's phone.

## Carlo's verbatim feedback

> "dog.com the picture at the top is nice but there's this black area on the side
> … then you scroll down you have these like 56 boxes across the screen, which is
> fine, but maybe they should be a little bit bigger and then you go down to this
> Calculator and it's huge. It takes up such a large amount of space — can it be
> tightened up. It just doesn't seem to flow properly. And the same thing on all
> of the other sites like horses.com is very dark. It should be brighter. It
> should be happy, it should be enticing to want to read by a human being while
> also having SEO and GEO work for AI."

## COO already shipped (don't redo — verify on preview)

On `claude/happy-curie-AOZay` → main:
- **dog-com hero black-bar BUG fixed** — the hero `<figure>` carried
  `aspect-ratio:16/9` with only `h-full` forced, so on a tall full-width hero the
  photo rendered narrower than the section and `bg-brand-dark` showed as black
  side-bars. Forced `w-full` + `aspect-ratio:auto` so the existing
  `fill`/`object-cover` photo covers the whole hero. Same fix on the owner-path
  tiles. **A sibling bot is applying the identical fix to vets/fish/ferret/petfood
  homepages** (same root-cause bug).
- **dog-com calorie calculator tightened** — oversized `py-section` masthead + a
  60px headline pushed the tool down; reduced hero padding/headline and the
  calculator section so the tool leads.
- **dog-com owner-path tiles bumped taller** (210→250px) so the cards read bigger.

These are structural only — I did NOT touch any colors, themes, or `visual/`
components. That's the line where your work begins.

## Your pass (Visual lane — taste/identity calls I won't make unilaterally)

1. **Horses.com is too dark.** The palette in `packages/config/index.ts`
   `themes['horses-com']` is actually WARM (cream surface `#FAF4E8`, saddle
   browns, `primaryPale #F4ECDF`) — but the homepage (`apps/horses-com/src/app/page.tsx`)
   leans heavily on `bg-brand-dark` (`#1F2B1E` dark green) sections, so it READS
   dark/heavy. Rebalance toward the light/warm surfaces, brighten the hero and
   section rhythm, make it feel inviting and editorial (think bright equestrian
   magazine, not a leather-bound ledger). Keep the brass accent for class. Carlo:
   "brighter, happy, enticing."
2. **Portfolio brightness/mood sweep** — apply the same lens to every site's
   homepage + hubs: where a site reads dark/templated, rebalance toward its
   light surfaces and warm accents. The dark-mode identity is correct ONLY where
   it's the deliberate brand (e.g. lizard-com's field-guide dark theme) — confirm
   per-site rather than darkening/brightening blanket.
3. **"Flow" / composition** — Carlo felt dog.com "doesn't flow properly" even
   after the bug fix. Review section rhythm, vertical spacing cadence, and tile
   sizing across the launch candidates so each page reads as a designed sequence,
   not stacked boxes. The calculator-page tightening I did is a starting point —
   judge whether tool pages elsewhere have the same oversized-masthead problem.
4. **Human-enticing + AI-legible together** — the bar Carlo set: warm, bright,
   want-to-read for humans AND still schema/heading-structured for SEO/GEO. The
   GEO/schema layer is now thorough (FAQ/ItemList/Product/TL;DR portfolio-wide),
   so you have a free hand on warmth/brightness without sacrificing the AI surface.

## Guardrails
- Real photography only, attribution preserved (QC §1, Unsplash/Pexels TOS).
- No AI-generated humans. No layout change that pushes FTC disclosures below the
  fold or removes schema-bearing structure.
- Coordinate on shared files (`Nav`, `Footer`, `ArticleLayout`) via PR comment —
  COO owns their structure, you own visual refinement.

## How to verify
Vercel preview deploys run on every PR (I saw `Vercel – dog-com` etc. green on
recent PRs). Push to a branch → open PR → review the preview on phone with Carlo
→ iterate. That's the render loop; use it, since neither of us can screenshot in
the sandbox.

— COO
