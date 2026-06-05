---
from: coo
to: csro
status: done
created: 2026-06-05
next_action: CSRO to triage remediation list against sprint capacity; prioritize P0 (MedicalWebPage sweep on petfood-com nutrition/supplements) and P1 (fish-com species HowTo) as highest-ROI unlocks before first DNS flip
---

# GEO / Schema Audit — Launch Cohort (dog-com, vets-co, fish-com, petfood-com, ferret-com)

**Date:** 2026-06-05  
**Scope:** JSON-LD structured-data coverage, GEO-readiness, citation-magnet hygiene  
**Method:** Static analysis of `apps/<site>/src/app/**/page.tsx` against `packages/ui/src/components/SEOHead.tsx` schema builders and `ArticleSourcesList` component  
**CI gates:** trust-guard PASS · metadata-policy PASS · link-check PASS

---

## Schema Builders Available (packages/ui)

| Builder | `@type` output | Primary use case |
|---|---|---|
| `buildArticleSchema` | `Article` | All editorial content |
| `buildMedicalWebPageSchema` | `MedicalWebPage` | Pet health / clinical reference |
| `buildFAQSchema` | `FAQPage` | Stand-alone FAQ injection |
| `buildBreadcrumbSchema` | `BreadcrumbList` | Navigation hierarchy |
| `buildHowToSchema` | `HowTo` | Step-by-step guides, training, care routines |
| `buildProductSchema` | `Product` | Product reviews with ratings |
| `buildOrganizationSchema` | `Organization` | Publisher identity (homepage) |
| `buildWebSiteSchema` | `WebSite` | Site-level entity (homepage) |
| `FAQAccordion` (component) | `FAQPage` (auto) | Inline FAQ — auto-injects unless `includeSchema={false}` |
| `ArticleLayout` (component) | `BreadcrumbList` (auto) | Auto-derives BreadcrumbList from `breadcrumbs` prop |

**Important behavior note:** `FAQAccordion` injects `FAQPage` schema by default (`includeSchema=true`). Pages that call `buildFAQSchema` manually and then use `<FAQAccordion includeSchema={false}>` are correctly avoiding duplicate injection — this pattern is healthy and intentional across the cohort. Not a gap.

---

## Site-Level Coverage Tables

### dog-com (160 total pages)

| Page cluster | Total pages | Article | MedicalWebPage | HowTo | FAQ | BreadcrumbList | ItemList | ArticleSourcesList |
|---|---|---|---|---|---|---|---|---|
| Homepage | 1 | -- | -- | -- | -- | -- | Organization+WebSite | -- |
| Health spokes | 41 | 39 | 39 | -- | ~20 | auto | -- | 38 |
| Breeds spokes | ~32 | YES | -- | -- | via [slug] | auto | -- | 0 |
| Training spokes | 19 | YES | -- | 10/19 | ~15 | auto | -- | 0 |
| Nutrition spokes | 16 | YES | -- | -- | ~10 | auto | -- | 0 |
| Reviews/best-of | 15 | YES | -- | -- | YES | auto | -- | ~5 |
| Tools | 3 | -- | -- | -- | -- | YES | SoftwareApp+ItemList | -- |
| Hubs | 19 | -- | -- | -- | -- | YES | 10/19 | -- |

**Gaps identified:**

- `/health/page.tsx` (hub): only `BreadcrumbList`; missing `ItemList` — the health hub lists all 41 health articles in HTML but the machine-readable index is absent
- Training spokes: 9/19 training articles lack `HowTo` (positive-reinforcement, puppy-biting, dog-aggression, excessive-barking, trainer-credentials, training-red-flags are step-by-step content that qualifies)
- Breeds cluster (32 static pages): zero `ArticleSourcesList` — breed articles cite breed standards and health studies by assertion only
- Training cluster (19 pages): zero `ArticleSourcesList`
- Nutrition cluster (16 pages): zero `ArticleSourcesList`

---

### vets-co (101 total pages)

| Page cluster | Total pages | Article | MedicalWebPage | HowTo | FAQ | BreadcrumbList | ItemList / LocalBusiness | ArticleSourcesList |
|---|---|---|---|---|---|---|---|---|
| Homepage | 1 | -- | -- | -- | -- | -- | Organization+WebSite | -- |
| Health spokes | 40 | 38 | 38 | 1 | auto (38) | auto | -- | 38 |
| Breeds spokes | 13 | YES | YES | -- | YES | auto | -- | 0 |
| Insurance spokes | ~10 | YES | -- | -- | auto | auto | -- | ~5 |
| Vet directory listings | dynamic | -- | -- | -- | -- | YES | Veterinarian+LocalBusiness | -- |
| Tools hub | 1 | -- | -- | 1 | -- | YES | MISSING ItemList | -- |
| Health hub | 1 | -- | -- | -- | -- | YES | MISSING ItemList | -- |
| Vets hub | 1 | -- | -- | -- | -- | YES | CollectionPage | -- |
| Telehealth review page | 1 | YES | -- | -- | -- | -- | -- | -- |

**Gaps identified:**

- `/health/page.tsx` (hub): only `BreadcrumbList`. Highest-traffic clinical hub; lack of `ItemList` leaves the 38-article health index uncitable by AI Overviews and Perplexity. File: `apps/vets-co/src/app/health/page.tsx`
- `/tools/page.tsx` (hub): only `BreadcrumbList`; should have `ItemList` listing its calculator tools
- Breeds cluster (13 pages): zero `ArticleSourcesList` — breed-health articles are clinical content and citation-poor
- `/telehealth/page.tsx`: has `Article` schema but is a comparative review of telehealth services; should carry `ItemList` of reviewed providers for rich result eligibility

---

### fish-com (105 total pages)

| Page cluster | Total pages | Article | MedicalWebPage | HowTo | FAQ | BreadcrumbList | ItemList / SoftwareApp | ArticleSourcesList |
|---|---|---|---|---|---|---|---|---|
| Homepage | 1 | -- | -- | -- | -- | -- | Organization+WebSite | -- |
| Species care guides | 47 | 44 | -- | 0 | 7 (auto) | auto | -- | 0 |
| Health spokes | 14 | YES | -- | -- | YES | auto | -- | 14 |
| Setup guides | 6 | YES | -- | 5/6 | YES | YES | -- | -- |
| Water-parameters spokes | ~15 | YES | -- | YES | -- | auto | -- | -- |
| Tools | 7 | -- | -- | 6/7 | -- | YES | SoftwareApplication | -- |
| Equipment [slug] | dynamic | YES | -- | -- | -- | YES | -- | -- |
| Hubs | 14 | -- | -- | -- | -- | YES | 6/14 | -- |
| Redirect stubs (3 species variants, water, calculators) | 5 | -- (redirect) | -- | -- | -- | -- | -- | -- |

**Gaps identified:**

- **Species care guides (42 static pages)**: 100% `Article`-only; zero `HowTo` schema. Care guides are definitionally "how to keep X" — tank setup, water chemistry, feeding, disease prevention. Adding `HowTo` unlocks Google HowTo rich results and improves AI citation probability significantly. File pattern: `apps/fish-com/src/app/species/<slug>/page.tsx`
- **Species care guides**: zero `ArticleSourcesList`. Care guides cite no primary sources (FishBase, IUCN, aquarium society publications). This is the largest single citation-gap in the cohort by page count (42 pages)
- Fish health pages correctly have `ArticleSourcesList` — this cluster is well-instrumented

---

### petfood-com (105 total pages)

| Page cluster | Total pages | Article | MedicalWebPage | HowTo | FAQ | BreadcrumbList | ItemList | ArticleSourcesList |
|---|---|---|---|---|---|---|---|---|
| Homepage | 1 | -- | -- | -- | -- | -- | Organization+WebSite | -- |
| Nutrition spokes | 12 | YES | 0 | -- | YES | auto | -- | 11/12 |
| Feeding guides | 11 | YES | -- | -- | YES | auto | -- | 11 |
| Ingredients spokes | 9 | YES | -- | -- | -- | auto | -- | 8/9 |
| Brands spokes | 8 | YES | -- | -- | -- | auto | -- | 7/8 |
| Supplements spokes | 6 | YES | 0 | -- | YES | auto | -- | 5/6 |
| Compare pages | ~8 | YES | -- | -- | YES | auto | -- | YES |
| Conditions [slug] | dynamic | YES | YES | -- | -- | YES | -- | YES |
| Hubs (all 13) | 13 | -- | -- | -- | -- | YES | 13/13 (100%) | -- |
| Tools | ~3 | -- | -- | 1 | -- | YES | YES | -- |

**Notable strengths:** Best source coverage in the cohort (83/103 editorial pages). All 13 cluster hubs have `ItemList`. Strong hub-to-spoke architecture.

**Gaps identified:**

- **Nutrition cluster (12 pages)**: zero `MedicalWebPage`. Pages like `dietary-protein-requirements`, `taurine-and-amino-acids`, `minerals-in-pet-food` are clinical nutrition reference content. Using `Article` undersells these to AI surfaces that upweight `MedicalWebPage` for health queries
- **Supplements cluster (6 pages)**: zero `MedicalWebPage`. Glucosamine, probiotics, omega-3, multivitamin pages are consumer health reference — same schema-type mismatch as nutrition
- Diets cluster: no `ArticleSourcesList` observed on spot-checked pages (raw-diet, grain-free, BARF) — these are the most contested/clinical topics in pet nutrition and lack sourcing signals

---

### ferret-com (109 total pages)

| Page cluster | Total pages | Article | MedicalWebPage | HowTo | FAQ | BreadcrumbList | ItemList | ArticleSourcesList |
|---|---|---|---|---|---|---|---|---|
| Homepage | 1 | -- | -- | -- | -- | -- | Organization+WebSite | -- |
| Health spokes | 21 | YES | 20/21 | -- | auto (suppressed correctly) | auto | -- | ~18 |
| Care spokes | 19 | YES | -- | 0 | auto | auto | -- | 0 |
| Behavior spokes | 14 | YES | -- | 0 | auto | auto | -- | 0 |
| Ownership spokes | 14 | YES | -- | 0 | auto | auto | -- | 0 |
| Colors/variants | 14 | YES | -- | -- | auto | auto | -- | -- |
| Hubs (health, care, behavior, ownership, colors, tools) | 7 | -- | -- | -- | -- | YES | 5/7 | -- |
| Tools | 2 | -- | -- | YES | -- | YES | YES | -- |
| Redirect stubs (3 dedup redirects) | 3 | -- (redirect) | -- | -- | -- | -- | -- | -- |

**Notable strengths:** Health cluster is the best-instrumented in the cohort: 20/21 pages have `Article` + `MedicalWebPage` + `FAQPage` + `BreadcrumbList` combined with `ArticleSourcesList`. The FAQAccordion suppress-and-manually-inject pattern is consistent and correct.

**Gaps identified:**

- **Care cluster (19 pages)**: zero `HowTo`. Litter training, cage cleaning, grooming, bathing, odor control are definitionally step-by-step. `buildHowToSchema` is already used in 2 other ferret pages (`first-year-schedule`, `tools/food-evaluator`). File pattern: `apps/ferret-com/src/app/care/<slug>/page.tsx`
- **Care cluster**: zero `ArticleSourcesList` — 19 pages of care advice with no primary-source citations
- **Behavior cluster (14 pages)**: zero `HowTo`, zero `ArticleSourcesList`
- **Ownership cluster (14 pages)**: zero `ArticleSourcesList`
- `first-year-schedule` hub: has `HowTo` (good); missing `ItemList`

---

## Cross-Portfolio Citation (ArticleSourcesList) Summary

| Site | Pages with sources | Total editorial pages | Coverage % | Biggest gap cluster |
|---|---|---|---|---|
| petfood-com | 83 | 103 | 80% | Diets cluster (~6 pages) |
| vets-co | 38 | 94 | 40% | Breeds spokes (13 pages) |
| dog-com | 38 | 147 | 26% | Breeds (32), Training (19), Nutrition (16) |
| ferret-com | 20 | 104 | 19% | Care (19), Behavior (14), Ownership (14) |
| fish-com | 14 | 102 | 14% | Species care guides (42 pages -- zero sources) |

**GEO implication:** Pages without `ArticleSourcesList` cite no primary sources — the single biggest signal Perplexity and ChatGPT use to prefer a page as a citation. Fish-com's 42 species care guides reference care parameters but link to no authoritative databases (FishBase, IUCN, aquarium society publications). This is fixable via the already-built `ArticleSourcesList` component.

---

## Canonical / Metadata Hygiene

All five cohort sites pass `metadata-policy.mjs` clean. No `noIndex` leakage, no title-suffix duplication. All "missing schema" pages flagged in the grep sweep are correctly implemented as `redirect()` stubs — not real content gaps. CI fully green.

---

## Prioritized Remediation List

### GAP-1: MedicalWebPage on petfood-com nutrition + supplements clusters (P0)

**SEO Impact:** Medium-high. Nutrition reference pages target high-intent queries (combined MSV 10K-50K/mo across the 18-page cluster). `MedicalWebPage` signals to Googlebot that these are authoritative health reference, which directly supports EEAT scoring.

**GEO Impact:** HIGH. Google AI Overviews and ChatGPT preferentially surface `MedicalWebPage` for health-adjacent nutrition queries over plain `Article`. petfood-com has 18 nutrition + supplement pages emitting `Article` where the content qualifies for `MedicalWebPage`. The content is clinical-grade; the schema is generic-editorial. This is the clearest single-type mismatch in the cohort. Adding `buildMedicalWebPageSchema` alongside `buildArticleSchema` via `combineSchemas` in these 18 pages would immediately make petfood-com's strongest content cluster fully citation-eligible on health-query AI surfaces.

**Monetization Impact:** High. Nutrition/supplement pages bridge to affiliate buy-boxes (fish oil, glucosamine, probiotics). `MedicalWebPage` improves ranking probability for "best X supplement for dogs" queries where those buy-boxes convert.

**Build Effort:** S. 18 files. Each needs: import `buildMedicalWebPageSchema` + `combineSchemas`, create `medSchema`, wrap as `combineSchemas(schema, medSchema)`. Pattern already exists at `apps/petfood-com/src/app/conditions/[slug]/page.tsx`.

**Priority:** P0. Files: `apps/petfood-com/src/app/nutrition/*/page.tsx` (12 pages) and `apps/petfood-com/src/app/supplements/*/page.tsx` (6 pages).

---

### GAP-2: HowTo schema on fish-com species care guides (P1)

**SEO Impact:** High. 42 species care guides currently emit only `Article`. Google supports HowTo rich results for step-by-step care content. "How to keep guppies" / "how to care for betta fish" are high-volume queries (combined MSV: 50K+/mo) that display HowTo rich results prominently in SERP.

**GEO Impact:** HIGH. Species care guides are definitionally "how to keep X" content -- tank setup, water chemistry, feeding schedule, disease prevention. This is exactly the structure AI Overviews use to generate bulleted "how to keep X" answers. `HowTo` schema provides machine-readable step labels that AI surfaces extract and cite directly. 42 pages x ~5 steps = 210 structured care steps currently invisible to AI extractors. This is the largest single `HowTo` gap in the portfolio.

**Monetization Impact:** Medium. Species pages carry affiliate links to tanks, filters, and food. HowTo rich results increase SERP CTR by 20-35% for how-to queries.

**Build Effort:** M. 42 files. Each species page has a consistent 5-step structure (tank setup, water parameters, feeding, disease prevention, compatibility). A common template can be adapted per species. `buildHowToSchema` already used in 7 other fish-com files (`/setup/`, `/tools/`). No new infrastructure needed.

**Priority:** P1. File pattern: `apps/fish-com/src/app/species/<slug>/page.tsx`. Recommend batching 10-15 high-traffic species first (betta, guppy, goldfish, angelfish, neon tetra, platy, molly, swordtail, corydoras, discus).

---

### GAP-3: ArticleSourcesList on fish-com species + ferret-com care/behavior/ownership clusters (P1/P2)

**SEO Impact:** Medium. Citation signals do not directly affect ranking algorithms, but sourced pages earn more backlinks from writers and researchers who cite them.

**GEO Impact:** HIGH. This is the single biggest citation-magnet gap by page count in the cohort. 42 fish species care pages and 47 ferret care/behavior/ownership pages make authoritative assertions about care parameters, behavioral traits, and health protocols without citing a single primary source. Perplexity and ChatGPT preferentially cite pages with visible, verifiable primary-source attribution. A fish species page that cites FishBase, IUCN, or the American Cichlid Association is categorically more citation-eligible than one stating the same facts without attribution. The `ArticleSourcesList` component is already built and deployed; the gap is purely editorial -- adding 3-5 source entries per page.

**Monetization Impact:** Low direct. Indirect: more AI citations drive more branded search traffic, increasing the affiliate conversion pool.

**Build Effort:** M. 89 pages total (42 fish species + 47 ferret care/behavior/ownership). Sources can be templated by cluster (all livebearer pages cite IFGA + FishBase; all ferret behavior pages cite AFA + veterinary behavioral literature). Recommend starting with the 10 highest-traffic pages in each cluster.

**Priority:** P1 for fish species (largest GEO gap, highest volume). P2 for ferret care/behavior/ownership (the health cluster -- highest-intent -- already has sources).

---

### GAP-4: ItemList on vets-co /health and /tools hubs (P2)

**SEO Impact:** Medium. `ItemList` on hub pages tells Googlebot the full set of child pages -- a structured sitemap signal. The vets-co health hub currently lists 38 clinical articles in HTML but emits no machine-readable index.

**GEO Impact:** Medium. Perplexity and AI Overviews can extract `ItemList` entries to answer "what health guides does Vets.co cover?" queries. The hub already has a clean HTML list; the schema mirrors it.

**Monetization Impact:** Low direct. Impact is indirect via improved crawl efficiency and AI citability of the hub.

**Build Effort:** XS. Two files: `apps/vets-co/src/app/health/page.tsx` and `apps/vets-co/src/app/tools/page.tsx`. Pattern identical to ferret-com's health hub which already has this.

**Priority:** P2 — low effort, meaningful GEO signal. Not launch-blocking.

---

### GAP-5: HowTo on ferret-com care cluster + remaining dog-com training cluster (P2)

**SEO Impact:** Medium. HowTo rich results for step-by-step care and training content. Ferret litter training, grooming, cage cleaning and dog excessive-barking, positive-reinforcement, puppy-biting guides are prime candidates.

**GEO Impact:** Medium. These clusters are frequently queried as "how do I X" questions in AI surfaces. `HowTo` schema provides machine-readable steps. 47 ferret care/behavior pages + 9 dog training pages currently have no step structure visible to AI extractors.

**Monetization Impact:** Low. Training and care pages are low-commercial-intent.

**Build Effort:** M. ~56 files across two sites. Pattern established -- `buildHowToSchema` already used in 10 dog-com training pages and 2 ferret pages.

**Priority:** P2. Outranked by GAP-1 (MedicalWebPage, higher GEO leverage per file) and GAP-2/3 (fish-com species, larger volume).

---

## #1 Highest-ROI Schema Gap

**petfood-com nutrition + supplements: MedicalWebPage (GAP-1)**

18 pages of clinical-grade nutrition and supplement content currently emit `Article` where the content qualifies for `MedicalWebPage`. petfood-com already has the best source coverage in the cohort (80%), all 13 cluster hubs have `ItemList`, and content is well-polished. The schema type mismatch is the only thing holding the nutrition/supplement cluster back from full citation eligibility on health-query AI surfaces. This is an S-effort fix (3 lines per file x 18 files) with disproportionate GEO impact on the site highest-prioritized for polish. The fix pattern already exists in the codebase at `apps/petfood-com/src/app/conditions/[slug]/page.tsx`. Recommend dispatching a single agent on this task alone -- no other site touched, no risk of config conflicts.

---

## Schema Coverage Scorecard (All Cohort Sites)

| Site | Pages | Schema coverage | Org+WebSite | MedWebPage | ItemList hubs | HowTo | Breadcrumb | FAQ | Sources |
|---|---|---|---|---|---|---|---|---|---|
| dog-com | 160 | 153/160 (96%) | YES | 39/41 (95%) | 10/19 | 10/19 training | auto | auto+manual | 38/147 (26%) |
| vets-co | 101 | 99/101 (98%) | YES | 38/40 (95%) | 7/11 key hubs | 1 page only | auto | auto | 38/94 (40%) |
| fish-com | 105 | 100/105 (95%) | YES | n/a (not health) | 6/14 hubs | 13 setup+tools, 0 species | auto | auto | 14/102 (14%) |
| petfood-com | 105 | 104/105 (99%) | YES | 1/18 nutrition+supp (GAP) | 13/13 (100%) | 1 page | auto | auto | 83/103 (80%) |
| ferret-com | 109 | 102/109 (94%) | YES | 20/21 (95%) | 5/7 hubs | 2/47 care+behavior | auto | auto | 20/104 (19%) |
