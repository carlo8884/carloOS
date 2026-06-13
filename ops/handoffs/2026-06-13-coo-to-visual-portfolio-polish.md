---
from: COO
to: Visual Bot
status: action-requested
created: 2026-06-13
priority_sites: [vets-co, dog-com, ferret-com, petfood-com, lizard-com, fish-com]
next_action: Visual Bot executes the imagery/identity/composition items below; COO takes the layout/width/disclosure-placement items in parallel.
---

# Visual polish directive — Carlo's flagged issues (2026-06-13)

Carlo's 2026-06-13 directive names the worst-looking issues to fix for the
"$1B, acquirer-grade" bar. This routes the **imagery / identity / composition**
work to Visual Bot. The **layout / width / spacing / disclosure-placement /
emoji-residue** items are COO-lane and I'm taking those in parallel (noted
below so we don't collide).

Work the **priority site order**: Vets → Dog → Ferret → PetFood → Lizard → Fish.

## Visual Bot lane (you own these)

| # | Issue | Where | What "good" looks like |
|---|---|---|---|
| V1 | **Repetitive / templated imagery** | **Fish.com, PetFood.com** especially | Per-page differentiated photography; no obvious reuse of the same hero across many pages. Each hub/money page should feel individually shot, not stamped. |
| V2 | **"Cheap content site" feel** | Portfolio-wide, worst on money/hub pages | Editorial-grade photography + composition so pages read like a premium magazine, not an SEO farm. This is the single biggest acquirer-perception lever. |
| V3 | **Dog.com reference-page look** | Dog reference/breed/health layouts | Dog is the **exit-value flagship** — its reference pages must look the most premium. Hero treatment, imagery, and figure composition need a deliberate pass. |
| V4 | **Poor mobile first-screen** | Homepages + hubs, all priority sites | The first mobile viewport should land on a strong, on-brand image + headline, not a wall of text or an awkward crop. Audit each priority-site homepage at 390px. |
| V5 | **Image differentiation across the network** | Dog/Fish/PetFood share a stack-photo feel | Distinct visual identity per vertical so the 10 sites don't read as one template with different logos. |

For each: photography sourcing must stay within trust rules — **no AI-generated
humans, no fake clinical scenes, preserve Unsplash/Pexels attribution** (QC §1).

## COO lane (I'm taking these — listed so you don't double-work)

| # | Issue | My plan |
|---|---|---|
| C1 | **Pages too wide / sprawling** | Audit non-`ArticleLayout` pages (homepages, hubs, custom) for missing `max-w-*` inner containers; constrain reading width. |
| C2 | **Ugly / overbearing disclosures** | Review `AffiliateDisclosure` placement/density on money pages — keep it compliant but visually quiet (it's currently compliant everywhere, but some placements are heavy). |
| C3 | **Emoji / template residue** | Grep + remove stray emoji in editorial/UI text (Dog already clean; sweeping the other priority sites). |
| C4 | **Template-residue copy** | Hunt placeholder-feeling copy / repeated boilerplate blocks. |

## Coordination

- Structural changes to `ArticleLayout` / `Nav` / `Footer`: coordinate via PR
  comment before either of us edits (shared-lane per CLAUDE.md §5).
- I'll file specific page-level Visual tickets as my layout audit surfaces them.
- Tag me (COO) on any Visual PR that changes page structure, not just imagery.

## Why this matters (acquisition lever)

Carlo's top lever is **acquisition-readiness**, and "looks like a premium asset"
is a first-impression valuation input. Vets/Dog must look buyable first; the
rest follow. Page-count and SEO are already strong — visual coherence is the
gap that most cheapens the portfolio to an acquirer's eye right now.
