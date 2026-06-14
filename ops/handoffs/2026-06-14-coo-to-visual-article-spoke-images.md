---
from: COO
to: Visual Bot
status: action-requested
created: 2026-06-14
parent: 2026-06-13-coo-to-visual-portfolio-polish.md
re: article-spoke imagery (owner asked about adding more pictures to sub-pages)
---

# Visual directive — article-spoke imagery (the sub-page gap)

Carlo asked about adding more pictures to sub-pages. Audit finding, verified by COO:
**hubs and species pages are already imaged** (the manifest has ~3,389 entries and
species/hub pages render `StockImage`/`HubMasthead`). The real gap is **deeper
article spokes**, which currently render **zero imagery**. Those spokes don't have
manifest entries yet, so this is a **sourcing** task (Visual lane) — not a
component-placement task. COO will place the slots once the keys exist, or pair
with you on it.

## Guardrails (the same trap as last time)
- **Differentiated, relevant photography — not repeated generic stock.** Repetition
  is what reads "cheap content site." One strong, specific image beats five stock fillers.
- **QC §1 hard lines:** no AI-generated humans/vets/clinical scenes; keep Unsplash/
  Pexels attribution.
- Sequencing: the **flagship hero/identity work (directive #740) comes first**;
  these spokes are the second wave.

## Prioritised image-light spokes (verified zero-image, high value)

| Site | Spoke set | Why it's worth imaging |
|---|---|---|
| **Lizard.com** (lowest coverage ~33%) | `/species/*` non-flagship species, `/husbandry/*`, `/health/*`, `/reviews/*` | Species + husbandry are high-intent and almost entirely text-only off the few imaged pages. |
| **Dog.com** | `/training/*` (basic-commands, leash-reactivity, separation-anxiety, etc.), `/conditions` hub, `/health/<breed>-health/*`, `/reviews/best-dog-food-*` | Training + breed-health spokes are text-only; reviews benefit from product/lifestyle imagery. |
| **Vets.co** | `/insurance/*` education (how-pet-insurance-works, deductibles-reimbursement, pre-existing-conditions, etc.), `/insurance/questions/*` | 7 education + 8 Q&A pages, all zero-image; even one calm, on-brand image per page lifts perceived quality on money pages. |
| **Fish.com** | `/reviews/*` spokes, `/water-parameters/*` | Reviews + chemistry spokes are text-only (species already imaged). |
| **PetFood.com** | `/feeding/*` spokes, `/compare/*`, `/reviews/best-*` individual review pages | Hubs imaged; spokes/comparison tables text-only. |
| **Ferret.com** | `/diet/*` spokes, `/health/*` condition pages, `/reviews/*` | Hubs use HubHero; condition + diet spokes text-only. |

## Division of labour
- **Visual:** source + add manifest entries for the prioritised spokes above
  (start Lizard + Dog, the lowest-coverage / highest-traffic).
- **COO:** once keys exist (or with a `fallbackKey`), place the `StockImage`/hero
  slots into the article templates — happy to pair so we don't create orphaned
  "pending sync" placeholders.
- Tag COO on any change to `ArticleLayout` hero structure (shared lane).

## What COO will NOT do
Bulk-insert image slots ahead of sourcing (creates "Image pending sync"
placeholders that read as unfinished). This needs your sourcing first.
