---
from: coo
to: csro
status: review
created: 2026-06-07
next_action: "CSRO: prioritize internal-linking fixes; COO to dispatch relatedLinks/hub-wiring fix agents."
---

# Internal-Link-Depth / Orphan-Page Audit — Dog.com + Ferret.com
**Audit date:** 2026-06-07  
**Scope:** `apps/dog-com/src/app/**` and `apps/ferret-com/src/app/**`  
**Method:** Static analysis — filesystem enumeration, hub card-array extraction, relatedLinks grep, inbound-link count per page, breadcrumb chain verification  
**Prior cycle:** thin-page audit  
**CI status at audit time:** trust-guard PASS · metadata-policy PASS · link-check PASS

---

## Summary findings

Both sites have **mostly healthy hub→spoke structure** — every hub indexes its spokes and most spokes carry breadcrumbs back to their hub. The problems are concentrated in five areas:

1. **Entire reviews cluster (Dog.com)** — 12 review pages have hub-breadcrumb only, no hub-first `relatedLinks`; the `/reviews` hub is unreachable via any body link from those spokes.
2. **Three high-value static breed pages (Dog.com)** — `/breeds/french-bulldog`, `/breeds/german-shepherd`, and `/breeds/golden-retriever` each have only 2 internal links total (breadcrumb only at body level, no hub-first relatedLinks).
3. **Ferret tools pages missing hub-back relatedLinks** — `/tools/cost-calculator` and `/tools/readiness-quiz` have breadcrumb-only return paths, no `relatedLinks` component.
4. **Silo between /nutrition and /health (Dog.com)** — health spokes naming nutritional interventions (diabetes, kidney disease, allergies) do not cross-link to the matching nutrition spoke, and vice-versa.
5. **`/compare`, `/which-pet`, and `/guides` (Dog.com)** — reachable only via nav/footer, no editorial body links pointing to them from any content page.

---

## A. Orphans (inbound link count 0–1, not reachable from any hub card or editorial body)

| Page / cluster | Issue | Inbound est. | Severity | Fix sketch |
|---|---|---|---|---|
| `apps/dog-com/src/app/compare/page.tsx` | `/compare` has zero inbound body links from editorial content. Reachable only through global nav. No breed spoke links to it in body copy. | Nav only (0 editorial) | High | Add `/compare` link in `/breeds/page.tsx` hub intro copy and in relatedLinks of the 6 featured static breed pages. |
| `apps/dog-com/src/app/which-pet/page.tsx` | The `/which-pet` wizard has zero inbound editorial links. The homepage embeds the component inline (not a `<Link>`), and the footer lists it under "Tools & Guides." No content page links to it. | Footer only (0 editorial) | Medium | Add link from `/breeds` hub intro ("not sure which breed?") and from `/puppy-schedule`. |
| `apps/dog-com/src/app/guides/page.tsx` | `/guides` is not linked from `/health`, `/nutrition`, or `/training` hubs. Only the homepage references the two guide spokes directly. The guides hub itself has no inbound editorial links. | Homepage spoke-links only | Medium | Add `/guides` link in `/health` hub (preventive care section) and `/nutrition` hub footer copy. |
| `apps/dog-com/src/app/data/page.tsx` | Reachable only from footer (config `footerLinks`). No editorial page links to it. | Footer only (0 editorial) | Low | Footer-only is acceptable for a data-partnership page. CSRO may consider `noindex`. |

---

## B. Hub integrity — hubs NOT fully linking their spokes

| Page / cluster | Issue | Inbound est. | Severity | Fix sketch |
|---|---|---|---|---|
| `apps/dog-com/src/app/health/page.tsx` | Hub A–Z grid lists all 38 hand-written health spokes. Featured SECTIONS do NOT surface `/nutrition/prescription-diets` or `/nutrition/elimination-diet` even though both are clinically triggered by health conditions (kidney disease → prescription diet; allergies → elimination diet). Cross-cluster gap, not a missing-spoke gap. | Hub → A-Z only | Medium | Add a cross-cluster sidebar block on `/health/page.tsx` pointing to `/nutrition/prescription-diets`, `/nutrition/elimination-diet`, and `/nutrition/senior-dog-nutrition`. |
| `apps/dog-com/src/app/breeds/page.tsx` | Hub does not surface `/breeds/[slug]/feeding` or `/breeds/[slug]/health` sub-pages in any hub card or descriptive copy. These depth-4 sub-pages are invisible from the hub. | Hub→breed only | Medium | Add a sentence in breeds hub copy: "Each breed profile includes a feeding guide and a breed-specific health sub-page." with a sample link. |
| `apps/ferret-com/src/app/ownership/page.tsx` | Hub lists 12 ownership spokes. `/first-year-schedule` (a top-level editorial page, not under `/ownership/`) is not listed in the hub card array. It is linked from the footer and homepage, but has no hub parent. | Homepage + footer only | Medium | Add a featured card for `/first-year-schedule` in the ownership hub array as "First-Year Roadmap." |

---

## C. Reciprocal-linking failures (spokes missing hub-first relatedLinks, or <3 relatedLinks)

| Page / cluster | Issue | Inbound est. | Severity | Fix sketch |
|---|---|---|---|---|
| `apps/dog-com/src/app/reviews/best-dog-beds/page.tsx` and 11 others | 12 of 16 review spokes have a sidebar `RelatedLinks` component with 3 links — but the `/reviews` hub is NOT among them. The hub is reachable only via breadcrumb. Affected: `best-dog-beds`, `best-dog-crates`, `best-dog-food-for-puppies`, `best-dog-food-senior`, `best-dog-food-sensitive-stomach`, `best-dog-food-small-breed`, `best-dog-gps-tracker`, `best-dog-harnesses`, `best-dental-chews`, `best-slow-feeder-bowls`, `best-heartworm-prevention`, `best-large-breed-dog-food`. | Breadcrumb only (0 relatedLinks to hub) | High | Add `{ label: 'All Reviews', href: '/reviews' }` as the first item in every affected review page's `RelatedLinks`. |
| `apps/dog-com/src/app/breeds/french-bulldog/page.tsx` | 2 internal links total — breadcrumb only. Sidebar has `RelatedLinks` pointing to sub-pages and `/reviews/best-pet-insurance` but NOT to hub `/breeds` first. No sibling breed links. | Breadcrumb only | High | Add `/breeds` as first relatedLink. Add 2 sibling breed links (e.g. Bulldog, Poodle). |
| `apps/dog-com/src/app/breeds/german-shepherd/page.tsx` | Same pattern. Sidebar relatedLinks present but hub-first item missing. | Breadcrumb only | High | Same fix: `/breeds` first, plus 2 sibling links. |
| `apps/dog-com/src/app/breeds/golden-retriever/page.tsx` | Same as above. | Breadcrumb only | High | Same fix. |
| `apps/ferret-com/src/app/tools/cost-calculator/page.tsx` | Has breadcrumb `/tools` and body links to `/ownership/cost-of-owning-a-ferret`, `/tools/food-evaluator`, `/diet`, `/health` — but no `relatedLinks` component. Hub-first link is not presented in a discoverable relatedLinks block. | Breadcrumb + body prose | Medium | Add `relatedLinks` block: `[{ title: 'Ferret Tools Hub', href: '/tools' }, { title: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' }, { title: 'Food Evaluator', href: '/tools/food-evaluator' }]`. |
| `apps/ferret-com/src/app/tools/readiness-quiz/page.tsx` | Same as cost-calculator: breadcrumb only, body links present but no hub-first `relatedLinks` component. | Breadcrumb only | Medium | Add `relatedLinks` block hub-first. |
| `apps/ferret-com/src/app/first-year-schedule/page.tsx` | Linked from homepage hero CTA and footer. Body links to `/care/diet-basics`, `/health/insulinoma`, `/care/cage-setup`. Missing a `relatedLinks` component with hub bridges. | Homepage + footer | Medium | Add `relatedLinks` with `/health`, `/care`, `/ownership` as hub bridges. |

---

## D. Cross-cluster bridges missing (related clusters siloed)

| Cluster pair | Issue | Severity | Fix sketch |
|---|---|---|---|
| Dog.com `/health` ↔ `/nutrition` | `/nutrition/prescription-diets` has zero links to `/health/dog-kidney-disease` or `/health/dog-diabetes` (the conditions that trigger prescription diet recommendations). `/nutrition/elimination-diet` has no link to `/health/dog-allergies` or `/health/dog-skin-allergies`. The reverse direction is also unwired. | High | Wire 3 bidirectional pairs: `prescription-diets` ↔ `dog-kidney-disease`/`dog-diabetes`; `elimination-diet` ↔ `dog-allergies`/`dog-skin-allergies`. Files: `apps/dog-com/src/app/nutrition/prescription-diets/page.tsx`, `apps/dog-com/src/app/nutrition/elimination-diet/page.tsx`, `apps/dog-com/src/app/health/dog-allergies/page.tsx`, `apps/dog-com/src/app/health/dog-skin-allergies/page.tsx`. |
| Dog.com `/training` ↔ `/health` | `/training/separation-anxiety` has no cross-link to `/health/dog-anxiety` (which covers the pharmacological/clinical dimension of the same condition). `/training/dog-aggression` also lacks a `/health/dog-anxiety` link. | Medium | Add `/health/dog-anxiety` to relatedLinks of `apps/dog-com/src/app/training/separation-anxiety/page.tsx` and `apps/dog-com/src/app/training/dog-aggression/page.tsx`. |
| Ferret.com `/diet` ↔ `/health` | `/diet/whole-prey-vs-kibble`, `/diet/best-ferret-kibble`, `/diet/protein-and-fat-requirements` all discuss high-carb diet risk and insulinoma but do NOT link to `/health/insulinoma`. The reverse path (`/health/insulinoma` → `/diet/weight-management`) IS present. | High | Add `{ title: 'Insulinoma in Ferrets', href: '/health/insulinoma' }` to relatedLinks of the 3 diet spokes. Files: `apps/ferret-com/src/app/diet/whole-prey-vs-kibble/page.tsx`, `apps/ferret-com/src/app/diet/best-ferret-kibble/page.tsx`, `apps/ferret-com/src/app/diet/protein-and-fat-requirements/page.tsx`. |
| Ferret.com `/behavior` ↔ `/care` | `/behavior/litter-box-troubleshooting` does not link to `/care/litter-training`. `/behavior/multi-ferret-introductions` does not link to `/care/introducing-a-second-ferret`. These are direct semantic pairs. | Medium | Wire bidirectionally: `apps/ferret-com/src/app/behavior/litter-box-troubleshooting/page.tsx` ↔ `apps/ferret-com/src/app/care/litter-training/page.tsx`; `apps/ferret-com/src/app/behavior/multi-ferret-introductions/page.tsx` ↔ `apps/ferret-com/src/app/care/introducing-a-second-ferret/page.tsx`. |
| Ferret.com `/colors` ↔ `/health` | `/colors/choosing-a-healthy-ferret` discusses Waardenburg syndrome in DEW ferrets and vaccination timing but links to neither `/health` hub nor any health spoke. | Medium | Add `/health` hub link and `/health/vaccinations` to relatedLinks of `apps/ferret-com/src/app/colors/choosing-a-healthy-ferret/page.tsx`. |

---

## E. Link depth (pages >3 clicks from home)

| Page | Depth estimate | Issue |
|---|---|---|
| `apps/dog-com/src/app/breeds/[slug]/feeding/page.tsx` | Home → /breeds → /breeds/[slug] → /breeds/[slug]/feeding = **4 clicks** | Sub-pages not surfaced in any hub or spoke grid. No editorial relatedLinks point to feeding sub-pages. Only reachable by navigating to a breed spoke first. |
| `apps/dog-com/src/app/breeds/[slug]/health/page.tsx` | Same = **4 clicks** | Same issue. Reachable only after landing on a breed spoke. Only the 3 static breed pages have sidebar links to their own sub-pages. |
| `apps/dog-com/src/app/compare/[slug]/page.tsx` | Home → nav(/compare) → /compare → /compare/[slug] = **3 clicks via nav** | Fragile — removing nav item would orphan the cluster. Needs editorial body inbound link from `/breeds`. |

---

## Top 8 Internal-Linking Fixes (ordered by SEO/GEO impact)

**Fix 1 — Dog.com reviews hub-first relatedLinks (HIGH priority)**  
12 review spokes are missing `/reviews` as their first relatedLink. Add `{ label: 'All Reviews', href: '/reviews' }` as the first item in every affected review page's `RelatedLinks` sidebar block.  
Files: `apps/dog-com/src/app/reviews/best-dog-beds/page.tsx`, `apps/dog-com/src/app/reviews/best-dog-crates/page.tsx`, `apps/dog-com/src/app/reviews/best-dog-food-for-puppies/page.tsx`, `apps/dog-com/src/app/reviews/best-dog-food-senior/page.tsx`, `apps/dog-com/src/app/reviews/best-dog-food-sensitive-stomach/page.tsx`, `apps/dog-com/src/app/reviews/best-dog-food-small-breed/page.tsx`, `apps/dog-com/src/app/reviews/best-dog-gps-tracker/page.tsx`, `apps/dog-com/src/app/reviews/best-dog-harnesses/page.tsx`, `apps/dog-com/src/app/reviews/best-dental-chews/page.tsx`, `apps/dog-com/src/app/reviews/best-slow-feeder-bowls/page.tsx`, `apps/dog-com/src/app/reviews/best-heartworm-prevention/page.tsx`, `apps/dog-com/src/app/reviews/best-large-breed-dog-food/page.tsx`

**Fix 2 — Dog.com health ↔ nutrition cross-cluster wiring (HIGH priority)**  
Wire 3 bidirectional pairs:  
- `apps/dog-com/src/app/nutrition/prescription-diets/page.tsx` → add `/health/dog-kidney-disease` + `/health/dog-diabetes` to relatedLinks  
- `apps/dog-com/src/app/nutrition/elimination-diet/page.tsx` → add `/health/dog-allergies` + `/health/dog-skin-allergies` to relatedLinks  
- `apps/dog-com/src/app/health/dog-allergies/page.tsx` + `apps/dog-com/src/app/health/dog-skin-allergies/page.tsx` → add `/nutrition/elimination-diet`

**Fix 3 — Ferret.com diet ↔ health insulinoma bridge (HIGH priority)**  
Three diet spokes discuss insulinoma risk without linking to the insulinoma spoke.  
Files: `apps/ferret-com/src/app/diet/whole-prey-vs-kibble/page.tsx`, `apps/ferret-com/src/app/diet/best-ferret-kibble/page.tsx`, `apps/ferret-com/src/app/diet/protein-and-fat-requirements/page.tsx`  
Add `{ title: 'Insulinoma in Ferrets', href: '/health/insulinoma' }` as first or second relatedLink on each.

**Fix 4 — Dog.com 3 featured breed pages missing hub-first relatedLinks (HIGH priority)**  
Files: `apps/dog-com/src/app/breeds/french-bulldog/page.tsx`, `apps/dog-com/src/app/breeds/german-shepherd/page.tsx`, `apps/dog-com/src/app/breeds/golden-retriever/page.tsx`  
Add `/breeds` as first relatedLink on each. Add 2 sibling breed cross-links each.

**Fix 5 — Dog.com /compare delinked from breeds content (MEDIUM priority)**  
`/compare` has zero editorial body links. Add "Compare breeds side-by-side →" in the intro paragraph of `apps/dog-com/src/app/breeds/page.tsx` and in the body of at least 4 static breed spoke pages.

**Fix 6 — Ferret.com behavior ↔ care sibling pairs (MEDIUM priority)**  
Wire two direct semantic pairs bidirectionally:  
- `apps/ferret-com/src/app/behavior/litter-box-troubleshooting/page.tsx` ↔ `apps/ferret-com/src/app/care/litter-training/page.tsx`  
- `apps/ferret-com/src/app/behavior/multi-ferret-introductions/page.tsx` ↔ `apps/ferret-com/src/app/care/introducing-a-second-ferret/page.tsx`

**Fix 7 — Ferret.com /first-year-schedule hub bridge + ownership hub card (MEDIUM priority)**  
(a) Add `relatedLinks` to `apps/ferret-com/src/app/first-year-schedule/page.tsx` with `/health`, `/care`, `/ownership` as hub bridges.  
(b) Add a featured card for `/first-year-schedule` in `apps/ferret-com/src/app/ownership/page.tsx` hub card array.

**Fix 8 — Dog.com training ↔ health anxiety bridge (MEDIUM priority)**  
`apps/dog-com/src/app/training/separation-anxiety/page.tsx` and `apps/dog-com/src/app/training/dog-aggression/page.tsx` do not cross-link to `/health/dog-anxiety`.  
Add `/health/dog-anxiety` to the relatedLinks of both training spokes.

---

## Healthy areas (no action needed)

- **Dog.com `/health` hub→spokes:** All 38 hand-written health spokes are listed in the hub A–Z grid. Comprehensive.
- **Dog.com `/training` hub→spokes:** All 17 training spokes listed in hub browse-all grid. Every spoke carries hub-first `relatedLinks`.
- **Dog.com `/nutrition` hub→spokes:** All 15 nutrition spokes listed. Most carry hub-first relatedLinks.
- **Ferret.com `/health` hub→spokes:** All 20 health spokes listed in hub card array. Complete.
- **Ferret.com `/care` hub→spokes:** All 17 live care spokes listed. `seasonal-coat-and-shedding` and `scratching-and-digging-furniture` are redirects — correctly excluded.
- **Ferret.com `/colors` hub→spokes:** All 14 listed. Hub complete.
- **Ferret.com `/diet` hub→spokes:** All 12 listed. Hub complete.
- **Ferret.com `/ownership` hub→spokes:** 12 of 12 live spokes listed. `ferret-vocabulary-for-beginners` is a redirect — correctly excluded.
- **Ferret.com `/behavior` hub→spokes:** 12 of 12 live spokes listed. `scratching-and-digging-furniture` is a redirect — correctly excluded.
- **Redirect hygiene:** 5 redirect pages across both sites all resolve to canonical URLs — no stale dead-ends.
- **Ferret.com homepage hub coverage:** All 6 cluster hubs (health, care, behavior, colors, diet, ownership) featured on homepage with image-backed tiles. Depth from home to any hub = 1 click.
- **Dog.com breeds ↔ breed-health cross-links:** All 4 breed-health pages (`/health/french-bulldog-health`, `/health/german-shepherd-health`, `/health/golden-retriever-health`, `/health/labrador-health`) have relatedLinks pointing to their matching breed profile. This direction is healthy.
- **Ferret.com health→diet bridge (one direction):** `/health/insulinoma` already links to `/diet/weight-management` in relatedLinks. Fix 3 completes the reverse direction.
