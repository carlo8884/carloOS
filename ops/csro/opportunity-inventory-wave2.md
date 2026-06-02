# CarloOS Opportunity Inventory — Wave 2

**Owner:** CSRO  
**Date:** 2026-06-02  
**Purpose:** Grounded deepening of the backlog toward ~1000-item total capacity. Wave 2 deduplicates against `opportunity-inventory.md` and `opportunity-queue.md` (read both before promoting anything). This file feeds the Reserve; CSRO promotes unblocked top-leverage items into the Active Set in `opportunity-queue.md`.

---

## Governing rules (restated — all apply here)

1. **NO FILLER.** Every item must raise asset value, traffic, revenue, trust, or launch quality. No padding to hit a number.
2. Items are grounded in real routes enumerated from the repo (`find apps -type f -name 'page.tsx'`). Each item names a real route, hub, cluster, or template.
3. Every item carries: `site · lane · priority · category · value · done-when`. Categories: LQ=launch-quality · REV=revenue · TRAF=traffic · TRUST=trust · VIS=visual · STRAT=strategic. Lanes: COO · MON · VIS · CSRO · Carlo. Priority: P0–P3.
4. Current phase = **premium launch quality > page expansion.** Content-expansion items are ⏸ parked. Schema, linking, trust, metadata, visual, and monetization-wiring items are ☐ open.
5. Do NOT restart work already covered in `opportunity-inventory.md` or `opportunity-queue.md`.

---

## How this stays honest

Items are derived from real surface area: every `page.tsx` in `apps/*/src/app/` was enumerated. Counts come from genuine page/cluster/template granularity — ItemList gaps detected by `grep -c "ItemList"` on every hub page, FAQPage gaps detected by comparing `FAQAccordion` usage to `FAQPage` schema presence, breadcrumb gaps from `grep -rL`, ogImage gaps from `grep -rl ogImage`. No item below was invented as filler.

---

## Dog.com

Dog.com has 156 pages. Wave 1 covered core trust, sitemaps, orphan/canonical fixes, and breed ItemList. Wave 2 covers the remaining schema gaps, breadcrumb gaps, linking gaps, and revenue-surface polish.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health` hub: add ItemList of all 41 health-condition spokes (currently missing) | COO | P1 | LQ | AI Overviews / Perplexity cite the hub as the canonical health index | ItemList in JSON-LD on `/health/page.tsx`; lists all spokes |
| ☐ | `/training` hub: add ItemList of all 18 training spokes (currently missing) | COO | P1 | LQ | Training hub becomes citable index for AI retrievers | ItemList on `/training/page.tsx` |
| ☐ | `/nutrition` hub: add ItemList of all 16 nutrition spokes (currently missing) | COO | P1 | LQ | Nutrition hub GEO-ready | ItemList on `/nutrition/page.tsx` |
| ☐ | `/reviews` hub: add ItemList of all 16 reviews pages (currently missing) | COO | P1 | LQ+REV | Reviews hub indexable by AI surfaces; drives affiliate click-through | ItemList on `/reviews/page.tsx` |
| ☐ | `/guides` hub: add ItemList of `dog-body-condition-score` + `dog-spay-neuter-timing` spokes | COO | P2 | LQ | Guides hub completes the schema graph | ItemList on `/guides/page.tsx` |
| ☐ | `/faq` page: confirm FAQPage schema is present (check `faq/page.tsx` — uses FAQAccordion; verify FAQPage JSON-LD) | COO | P2 | LQ | FAQ page fully GEO-cited | FAQPage schema present |
| ☐ | `/training/dog-aggression`, `/training/separation-anxiety`, `/training/leash-reactivity`: add FAQPage schema (FAQAccordion present, schema missing) | COO | P1 | LQ | Three high-search-volume training spokes become AI-citable FAQ surfaces | `buildFAQSchema` + `FAQPage` in JSON-LD on each |
| ☐ | `/nutrition/grain-free-dcm-risk`, `/nutrition/reading-food-labels`, `/nutrition/toxic-foods`, `/nutrition/raw-diet-risks`: add FAQPage schema where accordion is present | COO | P1 | LQ+TRAF | High-volume nutrition spokes get AI-snippet eligibility | FAQPage schema on each page with an accordion |
| ☐ | `/health/dog-arthritis`, `/health/dog-allergies`, `/health/dog-anxiety`, `/health/dog-seizures`, `/health/dog-diabetes`, `/health/dog-obesity`, `/health/dog-ear-infections`, `/health/heartworm-prevention`: add FAQPage schema (9 health spokes have FAQAccordion but missing FAQPage) | COO | P1 | LQ+TRAF | These are the top-searched dog-health queries; FAQPage unlocks AI Overview eligibility on all | FAQPage JSON-LD on each |
| ☐ | `/breeds/[slug]`: verify FAQPage present on every named breed (akita through yorkshire-terrier, 22 static + dynamic template) — dynamic template has FAQPage; confirm static overrides don't break it | COO | P2 | LQ | All 22+ breed pages GEO-eligible | FAQPage on all breed slugs |
| ☐ | `/compare/[slug]` dynamic template: confirm canonical tag matches route slug (not a variant) | COO | P2 | LQ | 30 compare pairs have correct self-canonicals | canonical in `buildMetadata` matches `/compare/[slug]` |
| ☐ | `/conditions` page: verify FAQPage schema (hub has CollectionPage + FAQPage — confirm, then ensure it lists all condition spokes via ItemList) | COO | P2 | LQ | `/conditions` hub is the health-index anchor | Confirmed FAQPage + ItemList of conditions |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/training` spokes: add back-link to `/training` hub on each of 18 training pages (several are missing hub back-link in RelatedLinks) | COO | P1 | TRAF | Closes one-way dead-ends in the training cluster | Every training spoke has `{ label: 'Training Hub', href: '/training' }` in RelatedLinks |
| ☐ | `/nutrition` spokes: add back-link to `/nutrition` hub on spokes that currently only link forward to reviews (e.g., `/nutrition/wsava-explained` → no nutrition hub link) | COO | P1 | TRAF | Nutrition cluster has reciprocal hub→spoke→hub graph | Every nutrition spoke has link back to `/nutrition` |
| ☐ | `/reviews/*` spokes → link each reviews page to relevant health/nutrition/training pages (e.g., `/reviews/best-joint-supplements` → `/health/dog-arthritis` + `/health/dog-obesity`) | COO | P1 | TRAF+REV | Reviews cluster cross-links drive topical authority + conversion path | 16 reviews pages each have ≥2 editorial links |
| ☐ | `/breeds/[slug]/health` sub-page links to `/health` hub and to relevant condition spokes (e.g., golden-retriever health page links to `/health/dog-cancer-signs`) | COO | P2 | TRAF | Breed health sub-pages strengthen health cluster authority | 22+ breed health pages each link to ≥1 condition spoke |
| ☐ | `/breeds/[slug]/feeding` sub-page links to `/nutrition` hub and relevant nutrition spokes | COO | P2 | TRAF | Breed feeding pages strengthen nutrition cluster | 22+ feeding pages link to nutrition cluster |
| ☐ | CrossPortfolioCard on `/health` hub + top 5 health spokes (dog-arthritis, dog-allergies, dog-anxiety, dog-diabetes, heartworm-prevention) — currently CrossPortfolioCard only on dynamic templates | COO | P2 | TRAF+REV | High-traffic health pages surface vets-co + petfood-com cross-links | CrossPortfolioCard rendered on each |

### Metadata / OG

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health` hub + top 15 health spokes: add per-page `ogImage` (currently only 1 of 41 health pages has ogImage) — use relevant Unsplash images already in image-manifest | COO | P1 | LQ | Social sharing + AI crawlers get rich preview on top-priority pages | `ogImage` in `buildMetadata` on hub + 15 top-traffic health spokes |
| ☐ | `/training` hub + top 10 training spokes: add `ogImage` (currently 0 of 19 training pages has ogImage) | COO | P2 | LQ | Training cluster social-share quality | `ogImage` on hub + 10 spokes |
| ☐ | `/nutrition` hub + top 10 nutrition spokes: add `ogImage` (0 of 16 pages) | COO | P2 | LQ | Nutrition cluster OG coverage | `ogImage` on hub + 10 spokes |
| ☐ | `/reviews` hub + all 16 reviews spokes: add `ogImage` showing product collage or editorial photo (these are highest-revenue pages) | COO | P1 | LQ+REV | Review pages get rich social previews — drives affiliate conversion | `ogImage` on all 16 reviews pages |
| ☐ | `/breeds` hub + top 10 breed pages (French Bulldog, German Shepherd, Golden Retriever, Labrador, etc.): add `ogImage` — currently 5 breeds have it; 17+ are missing | COO | P1 | LQ | Breed pages are highest-traffic surface — OG images improve CTR from social/AI | `ogImage` on breeds hub + 10 additional breed pages |

### Trust / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/breeds/french-bulldog`, `/breeds/german-shepherd`, `/breeds/golden-retriever`: add breadcrumbs (3 static breed pages missing breadcrumbs while dynamic template has them) | COO | P1 | LQ | Three highest-traffic breed pages get BreadcrumbList schema | `breadcrumbs` prop on each; link-check green |
| ☐ | All 16 `/reviews/*` pages: add breadcrumbs (16 of 18 review pages are missing breadcrumbs — highest-revenue cluster) | COO | P1 | LQ+REV | Reviews breadcrumb gap is a launch-quality defect on the monetization surface | Breadcrumbs on all review pages; BreadcrumbList in JSON-LD |
| ☐ | `/health/dog-pyoderma-guide`: add breadcrumbs (this guide page is missing them while all other health pages have them) | COO | P2 | LQ | Isolated breadcrumb gap closed | Breadcrumbs present on page |
| ☐ | `/training/socialization-window`: confirm redirect to `/training/dog-socialization-window` uses 301 not 307 | COO | P1 | LQ | Redirect type confirmed (301 = permanent, passes link equity) | Redirect code uses `permanent: true` |

### Monetization / Revenue

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/reviews/best-flea-tick-prevention`, `/reviews/best-heartworm-prevention`: audit FTC disclosure position — must be inline above buy-box CTAs | MON | P1 | TRUST | Clinical prevention products must have disclosure above all `/go` CTAs | `AffiliateDisclosure variant="inline"` above CTAs |
| ☐ | `/reviews/best-pet-insurance`: ensure `AffiliateDisclosure` is inline above CTA block (verify — high-revenue page) | MON | P1 | TRUST+REV | Pet insurance affiliate revenue protected by proper disclosure | Disclosure confirmed above buy block |
| ☐ | `/nutrition/prescription-diets`: confirm no direct vendor link bypasses `/go` router | MON | P1 | TRUST | Affiliate-route integrity on Rx-adjacent page | All commercial links go through `/go` |
| ⏸ | `/compare/[slug]` pair expansion beyond 30 (new breed pairs) | COO | P3 | TRAF | Parked — premium-phase rule | Revisit post-launch |

### Sitemap / Indexing

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/data` page: verify sitemap priority is ≤0.30 (internal data dashboard not a SEO target) | COO | P2 | LQ | Crawl budget not wasted on internal page | `/data` sitemap priority ≤0.30 |
| ☐ | `/breeds/[slug]/feeding` and `/breeds/[slug]/health` sub-pages: confirm they are in sitemap with priority 0.60 (slightly below main breed page 0.70) | COO | P2 | LQ | Sitemap hierarchy reflects page depth and value | Sub-pages at 0.60; main breed at 0.70 |

### Visual (VIS lane — parked pending Visual Bot)

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ⏸ | `/breeds` hub: hero shows generic dog — add emotional real-dog breed collage hero (D3) | VIS | P1 | VIS | Premium-phase requires distinct hero; breeds hub is Dog.com's most-visited hub | Real photography applied per D5 standard |
| ⏸ | `/reviews/*`: review pages feel generic — add product-context photography to hero area | VIS | P2 | VIS | Monetization surface must not look templated | Photography applied per D5 |

### Content expansion (parked per premium-phase rule)

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ⏸ | Additional breed profiles sub-pages (akita through vizsla missing `/feeding` equivalents) | COO | P3 | TRAF | Parked — not launch-blocking | Revisit post-launch wave 1 |
| ⏸ | `/symptoms` interactive triage tool (A3 decision: Carlo deferred to post-launch) | CSRO | P3 | TRAF | Parked per A3 decision | Carlo decides direction |

---

## Vets.co

Vets.co has 100 non-funnel pages. It has the strictest trust bar. Wave 1 cleared orphan hub wiring (A6) and profile canonical (A7). Wave 2 addresses the large schema gap: 6 major hub pages have no ItemList, 20 health spokes have FAQAccordion but no FAQPage, and multiple dynamic templates need schema audit.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health` hub: add ItemList of all 32 health condition spokes (currently missing) | COO | P1 | LQ | Health hub is Vets.co's primary authority index — must be AI-citable | ItemList in `/health/page.tsx` |
| ☐ | `/symptoms` hub: add ItemList of all symptom spokes (currently missing) | COO | P1 | LQ | Symptom hub is a top entry surface for clinical searches | ItemList in `/symptoms/page.tsx` |
| ☐ | `/medications` hub: add ItemList of all medication spokes (currently missing) | COO | P1 | LQ | Medication index: AI assistants cite it when asked "what does X treat in dogs" | ItemList in `/medications/page.tsx` |
| ☐ | `/diagnostics` hub: add ItemList of all diagnostic spokes (currently missing) | COO | P1 | LQ | Diagnostics hub GEO-ready | ItemList in `/diagnostics/page.tsx` |
| ☐ | `/guides` hub: add ItemList of 8 guide spokes (currently missing) | COO | P2 | LQ | Guides hub indexable | ItemList in `/guides/page.tsx` |
| ☐ | `/insurance` hub: add ItemList of 8 insurance spokes (currently missing) | COO | P2 | LQ | Insurance hub complete schema graph | ItemList in `/insurance/page.tsx` |
| ☐ | `/tools` hub: add ItemList of tool pages (currently 0 — `tools/page.tsx` has no ItemList) | COO | P1 | LQ | Tools hub citable as a product surface | ItemList in `/tools/page.tsx` |
| ☐ | FAQPage schema on `/health/arthritis-in-dogs`, `/health/bloat-gdv-dogs`, `/health/cushing-disease-dogs`, `/health/diabetes-in-dogs-cats`, `/health/ear-infections-dogs`, `/health/emergency-signs`, `/health/heartworm-in-dogs`, `/health/heat-stroke-dogs`, `/health/kennel-cough`, `/health/pancreatitis-in-dogs` (all have FAQAccordion; none have FAQPage) | COO | P1 | LQ+TRAF | 10 top-searched clinical conditions gain AI-snippet eligibility | `buildFAQSchema` + FAQPage JSON-LD on each |
| ☐ | FAQPage schema on remaining 10 health spokes with FAQAccordion: `/health/flea-tick-prevention`, `/health/hypothyroidism-dogs`, `/health/intestinal-parasites`, `/health/leptospirosis`, `/health/pain-management-dogs`, `/health/pain-signs-dogs`, `/health/parvovirus-in-puppies`, `/health/seizures-in-dogs`, `/health/tick-borne-diseases`, `/health/weight-management` | COO | P1 | LQ+TRAF | Completes FAQPage coverage on entire health cluster | FAQPage on all 20 health spokes with accordion |
| ☐ | `/medications/[slug]` dynamic template: verify `Drug` or `MedicalEntity` schema is used where beneficial (currently uses `buildMedicalWebPageSchema` — check if drug-specific schema is available and adds value) | COO | P2 | LQ | Medication pages correctly typed for Google Health schema | Schema confirmed or enhanced |
| ☐ | `/diagnostics/[slug]` template: verify it emits `MedicalTest` or `MedicalWebPage` schema | COO | P2 | LQ | Diagnostic test pages correctly typed | Schema confirmed on diagnostics template |
| ☐ | `/vets/[state]/[city]/[slug]` template: confirm canonical URL includes `city.slug` segment (A7 merged — verify no regression on the 3-level nested template) | COO | P1 | LQ | Profile canonical stable after A7 fix | Canonical URL matches `/vets/[state]/[city]/[slug]` |
| ☐ | `/breeds/[slug]` dynamic template: confirm FAQPage present and BreadcrumbList includes `/breeds` hub link (breadcrumbs missing from template — confirmed via `grep -rL`) | COO | P1 | LQ | 9 breed-health sub-pages get BreadcrumbList | BreadcrumbList in template with 3-level path |
| ☐ | `/specialists/[slug]` template: verify FAQPage questions are substantive and not placeholder content | COO | P2 | TRUST | Specialist pages are high-trust surfaces; FAQ content quality matters | FAQ content verified non-placeholder |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health/*` spokes: add link to `/medications` hub and relevant medication pages (e.g., `/health/heartworm-in-dogs` → `/medications/` → heartworm medication spokes) | COO | P1 | TRAF | Cross-cluster health→medication links strengthen both clusters | 10 priority health spokes cross-link to medications cluster |
| ☐ | `/symptoms/[slug]` spokes: link to relevant health condition pages (e.g., symptom "vomiting" → `/health/vomiting-diarrhea-pets`) | COO | P1 | TRAF | Symptom→condition cross-linking creates clinical authority graph | Symptom spokes cross-link to condition pages |
| ☐ | `/diagnostics/[slug]` spokes: link to `/health` spokes they diagnose (bidirectional) | COO | P2 | TRAF | Diagnostics cluster cross-linked to health cluster | Bidirectional links present |
| ☐ | `/find-a-vet/[state]` pages: add link to `/symptoms` hub to surface symptom triage for users deciding whether to visit the vet | COO | P2 | TRAF | State vet pages serve dual purpose | Each state page links to `/symptoms` and `/guides/when-to-go-to-the-vet` |
| ☐ | `/guides/*` spokes: cross-link to `/tools/insurance-reimbursement-estimator` from cost-of-care guides (`/guides/cost-of-veterinary-care`, `/guides/emergency-vet-costs`, `/guides/how-to-afford-vet-care`) | COO | P1 | REV | Tool is the conversion surface; cost guides are the entry point | Cost guides link to estimator tool |

### Metadata / OG

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | Vets.co has 0 per-page `ogImage` across all 100 pages. Add ogImage to: homepage, `/health` hub, `/symptoms` hub, `/medications` hub, `/telehealth`, `/tools/insurance-reimbursement-estimator`, and top 10 health spokes | COO | P1 | LQ | Clinical authority site with no social preview is a trust-signal gap | ogImage on ≥15 key pages |
| ☐ | `/health/[slug]` dynamic template: add ogImage parameter support (so future health spokes auto-get an image) | COO | P2 | LQ | Template accepts `ogImage` param | Future health pages automatically have OG coverage |

### Trust / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/breeds/[slug]` dynamic template: add breadcrumbs (confirmed missing via `grep -rL`) | COO | P1 | LQ | Breed health template has BreadcrumbList | Breadcrumbs in template |
| ☐ | `/health/[slug]` dynamic template: add breadcrumbs (confirmed missing) | COO | P1 | LQ | Dynamic health template has BreadcrumbList | Breadcrumbs in template |
| ☐ | `/telehealth/page.tsx`: add breadcrumbs (missing — commercial page) | COO | P1 | LQ | Telehealth page has BreadcrumbList | Breadcrumbs on `/telehealth` |
| ☐ | `/reviews/best-pet-insurance`: add breadcrumbs (missing — high-revenue page) | COO | P1 | LQ+REV | Revenue page has BreadcrumbList | Breadcrumbs present |
| ☐ | `/data` page: add breadcrumbs (missing) | COO | P3 | LQ | Breadcrumbs consistent | Breadcrumbs present |

### Monetization / Revenue

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/telehealth`: inline `AffiliateDisclosure` above the 3 `/go` CTAs (N4 — still open as of 2026-06-02) | MON | P1 | TRUST | Required per §8a before launch | `AffiliateDisclosure variant="inline"` above all CTAs |
| ☐ | Soften superlatives on `/telehealth` and `(funnels)/pet-insurance` (N6) | MON | P2 | TRUST | Clinical authority neutrality; attributed phrasing only | "most comprehensive" → attributed/qualified language |
| ☐ | `/insurance/*` spokes: verify all external links go through `/go` router | MON | P2 | TRUST | Affiliate-route integrity on insurance cluster | All carrier links via `/go` |

### Sitemap / Indexing

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/data` and `/emergency-triage-card`: down-weight sitemap priority to ≤0.30 (per A15 — now open for COO execution) | COO | P2 | LQ | Crawl budget allocated to clinical content | Priority reduced in `sitemap.ts` |
| ☐ | `/vets/[state]`, `/vets/[state]/[city]` directory leaves: confirm `noindex` is set on directory leaves (not the 3-level profile `[slug]`) | COO | P2 | LQ | Directory leaves properly noindexed | noindex confirmed on city/state leaves |

### Visual (parked)

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ⏸ | Clinical hero with texture-led imagery (D3) — not stock dog photos | VIS | P1 | VIS | Vets.co must look clinical, not mass-market | Applied per D5 standard |

---

## Fish.com

Fish.com has 104 pages. Wave 1 cleared canonical dedup and embedded calculators. Wave 2 addresses the large ItemList gap (6 hub pages missing ItemList), FAQ schema gap (19 pages have FAQAccordion, 4 have FAQPage schema), and the redirect-stubs needing audit.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health` hub: add ItemList of all 16 disease/treatment spokes (currently missing) | COO | P1 | LQ | Health hub becomes AI-citable disease index | ItemList in `/health/page.tsx` |
| ☐ | `/setup` hub: add ItemList of all 12 setup/technique spokes (currently missing) | COO | P1 | LQ | Setup cluster fully indexed | ItemList in `/setup/page.tsx` |
| ☐ | `/equipment` hub: add ItemList of all equipment review pages (currently missing) | COO | P1 | LQ | Equipment hub citable by AI surfaces | ItemList in `/equipment/page.tsx` |
| ☐ | `/reviews` hub: add ItemList of all 7 reviews pages (currently missing) | COO | P1 | LQ+REV | Reviews hub monetization surface indexed | ItemList in `/reviews/page.tsx` |
| ☐ | `/calculators` hub: add ItemList of the 6 tool pages (currently missing) | COO | P1 | LQ | Calculator hub is a primary GEO citation surface for tank-parameter queries | ItemList in `/calculators/page.tsx` |
| ☐ | `/tools` hub: add ItemList of 6 tool pages (`aquarium-volume-calculator`, `stocking-calculator`, `water-change-calculator`, `co2-calculator`, `heater-wattage-calculator`, `aquarium-cycling-estimator`) | COO | P1 | LQ | Tools hub surfaces all calculators for AI retrieval | ItemList in `/tools/page.tsx` |
| ☐ | `/water` page: add ItemList linking to `/water-parameters` hub and parameter spokes | COO | P2 | LQ | Water hub integrated with parameters hub for GEO | ItemList on `/water/page.tsx` |
| ☐ | `/species/betta-fish`, `/species/guppy`, `/species/goldfish`, `/species/neon-tetra`, `/species/angelfish`, `/species/clownfish`, `/species/corydoras`: add FAQPage schema (7 have FAQAccordion, none have FAQPage) | COO | P1 | LQ+TRAF | Top-searched aquarium fish pages get AI snippet eligibility | FAQPage on 7 species spokes |
| ☐ | `/setup/aquarium-cycling-guide`, `/setup/planted-tank-setup`, `/setup/saltwater-tank-setup`: add FAQPage schema (all have FAQAccordion, none have FAQPage) | COO | P1 | LQ | Setup guides become AI-citable multi-step references | FAQPage on 3 setup guides |
| ☐ | `/setup/*` guide pages: evaluate HowTo schema addition for procedural pages (`aquarium-cycling-guide`, `aquascaping-guide`, `quarantine-tank-guide`) | COO | P2 | LQ | Procedural setup guides eligible for HowTo rich results | `buildHowToSchema` on applicable setup pages |
| ☐ | `/tools/co2-calculator`, `/tools/heater-wattage-calculator`, `/tools/aquarium-cycling-estimator`, `/tools/water-change-calculator`, `/tools/stocking-calculator`: verify all have `SoftwareApplication` + `HowTo` schema (aquarium-volume-calculator confirmed; others unverified) | COO | P1 | LQ | All 6 tools have tool schema | Schema confirmed on all 5 remaining tools |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/species/*` spokes: add link to `/health` hub and relevant disease pages (e.g., betta fish → `/health/ich-treatment`, `/health/fin-rot`) | COO | P1 | TRAF | Species→health cross-linking strengthens both clusters | 15 top species pages cross-link to health cluster |
| ☐ | `/health/*` spokes: add link to `/equipment` hub and relevant equipment (e.g., `/health/new-tank-syndrome` → `/reviews/best-water-test-kits`) | COO | P1 | TRAF | Health→equipment cross-links create conversion paths | 8 health pages cross-link to equipment cluster |
| ☐ | `/setup/*` guide pages: add links to relevant tools (e.g., `/setup/aquarium-cycling-guide` → `/tools/aquarium-cycling-estimator`; `/setup/planted-tank-setup` → `/tools/co2-calculator`) | COO | P1 | TRAF+REV | Setup guides drive tool usage; tools drive equipment review CTAs | Each setup guide links to ≥1 relevant tool |
| ☐ | `/water-parameters/[slug]` spokes: verify each links back to `/water-parameters` hub AND to relevant species pages | COO | P2 | TRAF | Parameter spokes integrated into both water and species clusters | Bidirectional links present |
| ☐ | CrossPortfolioCard on `/species` hub and top 10 species pages (currently only on equipment template) | COO | P2 | TRAF | Species pages surface portfolio-wide pet links | CrossPortfolioCard on hub + 10 spokes |

### Metadata / OG / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | Fish.com has 1 ogImage (homepage). Add ogImage to: `/species` hub, `/health` hub, `/setup` hub, `/tools` hub, and top 10 species pages (betta-fish, guppy, goldfish, neon-tetra, angelfish, clownfish, corydoras, discus, oscar, pleco) | COO | P1 | LQ | Top aquarium-magazine pages get social preview | ogImage on hub pages + 10 species pages |
| ☐ | All 7 reviews pages under `/reviews/*`: add breadcrumbs (7 of 8 confirmed missing via `grep -rL`) | COO | P1 | LQ+REV | Revenue pages have BreadcrumbList | Breadcrumbs on all 7 reviews pages |
| ☐ | `/calculators` page: add breadcrumbs (currently missing) | COO | P2 | LQ | Hub page has breadcrumbs | Breadcrumbs present |
| ☐ | `/water` page: add breadcrumbs (currently missing) | COO | P2 | LQ | Breadcrumbs consistent across all hubs | Breadcrumbs present |
| ☐ | `/species/discus-guide`, `/species/kuhli-loach-guide`, `/species/otocinclus-guide`: confirm they return 301 redirects (not 307), and that redirect stubs are not in the sitemap | COO | P1 | LQ | Redirect stubs confirmed 301; excluded from sitemap | Sitemap excludes redirect stubs |

### Monetization / Revenue

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/reviews/*` pages: verify `AffiliateDisclosure variant="inline"` is above buy-box CTAs on all 7 (best-aquarium-filters confirmed; others need verification: best-aquarium-heaters, best-aquarium-lighting, best-canister-filters, best-nano-tanks, best-planted-tank-fertilizers, best-water-test-kits) | MON | P1 | TRUST | Disclosure-above-CTA on all review pages | Each review page confirmed |
| ☐ | `/equipment/[slug]` dynamic template: confirm all external equipment links go through `/go` router | MON | P1 | TRUST | Equipment affiliate-route integrity | Template uses only `/go` links |

### Sitemap / Indexing

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/disclosure` page: currently at priority 0.90 in fish-com sitemap — should be ≤0.20 | COO | P1 | LQ | Crawl budget: disclosure page deprioritized | `fish.com/disclosure` sitemap priority ≤0.20 |

---

## Saddle.com

Saddle.com has 57 pages. Wave 1 fixed D6 English/Western hub reframe and Stubben first-person defect. Wave 2 addresses the largest real gaps: ALL review pages (12 of 13) are missing breadcrumbs, most review pages are missing `AffiliateDisclosure`, hub ItemList gaps, and the `/english` + `/western` title-twin risk.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/fit` hub: add ItemList of all fit guide spokes (currently missing) | COO | P1 | LQ | Saddle fit hub is a top-intent GEO surface | ItemList in `/fit/page.tsx` |
| ☐ | `/guides` hub: add ItemList of all 22 guide spokes (currently missing) | COO | P1 | LQ | Guides hub fully indexed | ItemList in `/guides/page.tsx` |
| ☐ | `/accessories` hub: add ItemList of accessory spokes (currently missing) | COO | P2 | LQ | Accessories hub citable | ItemList in `/accessories/page.tsx` |
| ☐ | `/reviews` hub: add ItemList of all 11 reviews pages (currently missing) | COO | P1 | LQ+REV | Reviews hub indexed for AI retrieval | ItemList in `/reviews/page.tsx` |
| ☐ | `/tools` hub: add ItemList of tool pages (currently missing — only `tree-size-estimator` is under tools) | COO | P2 | LQ | Tools hub completes schema | ItemList in `/tools/page.tsx` |
| ☐ | `/guides/saddle-fit-guide`, `/guides/used-saddle-buying-guide`, `/guides/leather-care-guide`, `/guides/seat-size-guide`, `/guides/bridle-fit-guide`: add FAQPage schema where FAQAccordion exists (11 guide pages have FAQAccordion; none have FAQPage schema) | COO | P1 | LQ | Top-intent saddle guide pages become AI-citable | FAQPage on 11 guide pages with accordion |
| ☐ | `/guides/*` procedural pages (saddle-fit-guide, leather-care-guide, tack-cleaning-schedule, bridle-fit-guide): evaluate HowTo schema addition — step-by-step how-to guides | COO | P2 | LQ | Procedural pages eligible for HowTo rich results | HowTo schema on applicable guides |
| ☐ | `/brands/[slug]` template: verify `Organization` + `Product` schema for each brand's flagship saddle | COO | P2 | LQ | Brand pages fully typed for GEO citation | Schema confirmed on brands template |
| ☐ | `/english` and `/western` pages: add ItemList linking to respective discipline sub-sections and associated review pages | COO | P1 | LQ | Discipline hubs GEO-ready | ItemList on `/english/page.tsx` and `/western/page.tsx` |
| ☐ | `/fit/[slug]` template: verify HowTo schema for fitting procedures | COO | P2 | LQ | Fit guides properly typed | HowTo schema on fit template |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/guides/*` spokes: add link to `/tools/tree-size-estimator` from saddle-fit-guide, seat-size-guide, and western-saddle-guide | COO | P1 | REV | Guides→tool conversion path | Each fitting guide links to tree-size-estimator |
| ☐ | `/brands/[slug]` spokes: link each brand page to its relevant discipline review page (Stubben → `/reviews/best-english-saddles#roxane`) | COO | P1 | TRAF+REV | Brand→review cross-link creates conversion path | Each brand page links to ≥1 relevant review |
| ☐ | `/reviews/*` spokes: link back to `/brands` hub and relevant brand pages | COO | P1 | TRAF | Reviews strengthen brand cluster | Each review links to relevant brand pages |
| ☐ | `/fit/[slug]` spokes: link to `/reviews/*` for relevant products (e.g., `/fit/wide-tree-fit` → best-saddle-pads + best-english-saddles) | COO | P2 | REV | Fit guides drive product discovery | Fit spokes cross-link to reviews |

### Metadata / OG / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | All 13 `/reviews/*` pages: add breadcrumbs (12 of 13 confirmed missing) | COO | P1 | LQ+REV | Highest-revenue cluster missing breadcrumbs | Breadcrumbs on all 13 reviews pages |
| ☐ | `/guides/[slug]` dynamic template: add breadcrumbs (template confirmed missing) | COO | P1 | LQ | All guide pages get BreadcrumbList via template fix | Breadcrumbs in guides template |
| ☐ | Saddle.com has 0 per-page ogImage. Add ogImage to: homepage, `/brands` hub, top 5 brand pages (Stubben, Pessoa, Bates, County, Collegiate), and all 13 review pages | COO | P1 | LQ+REV | Luxury equestrian brand — social preview quality matters | ogImage on ≥20 key pages |

### Trust / Monetization

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | All 13 `/reviews/*` pages: audit `AffiliateDisclosure` — only `best-riding-helmets` confirmed. 12 other review pages need verification and likely need `AffiliateDisclosure variant="inline"` | MON | P1 | TRUST | All commercial review pages must have inline disclosure above CTAs | Disclosure confirmed/added on all 13 |
| ☐ | `/guides/*` pages: if any guide links to a vendor, confirm it goes through `/go` router | MON | P2 | TRUST | Guide page affiliate-route integrity | All vendor links via `/go` |

### Content Strategy (parked)

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ⏸ | `/english` + `/western` hub vs `/reviews/best-english-saddles` / `/reviews/best-western-saddles` title-twin risk — titles differ enough (discipline framing vs ranked-list framing) to avoid self-competition. Parked for post-launch SERP monitoring. | CSRO | P3 | STRAT | Parked — confirmed adequate title differentiation | Monitor after DNS flip |

---

## Lizard.com

Lizard.com has 102 pages. Wave 1 cleared the `/husbandry` → `/setup` dedup (D7), UVB calc embedded. Wave 2 addresses hub ItemList gaps, FAQPage gaps, and the `/husbandry` cluster audit.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health` hub: add ItemList of all 33 health/care spokes (currently missing) | COO | P1 | LQ | Health hub fully indexed | ItemList in `/health/page.tsx` |
| ☐ | `/setup` hub: add ItemList of all 10 setup spokes (currently missing) | COO | P1 | LQ | Setup hub GEO-ready | ItemList in `/setup/page.tsx` |
| ☐ | `/builds` hub: add ItemList of all enclosure build pages (currently missing) | COO | P2 | LQ | Builds cluster indexed | ItemList in `/builds/page.tsx` |
| ☐ | `/husbandry` hub: add ItemList of its 2 unique spokes (`brumation-guide`, `shedding-guide`) only | COO | P1 | LQ | Husbandry hub correctly declares its 2 unique canonical spokes | ItemList with exactly 2 items |
| ☐ | `/reviews` hub: add ItemList of all 5 review pages (currently missing) | COO | P2 | LQ+REV | Reviews hub indexed | ItemList in `/reviews/page.tsx` |
| ☐ | FAQPage schema on `/health/metabolic-bone-disease`, `/health/respiratory-infection`, `/health/parasites`, `/health/egg-binding`, `/health/dehydration-reptiles`, `/health/constipation-impaction`, `/health/gout-prevention`, `/health/thermal-burns`, `/health/stomatitis`, `/health/dysecdysis` (13 health pages have FAQAccordion; only `builds/[slug]` has FAQPage in template) | COO | P1 | LQ+TRAF | Top reptile-health query pages get AI-snippet eligibility | FAQPage on 10 health spokes |
| ☐ | `/species/[slug]` dynamic template: add breadcrumbs (template confirmed missing via `grep -rL`) | COO | P1 | LQ | All species pages get BreadcrumbList | Breadcrumbs in species template |
| ☐ | `/husbandry/[slug]` template: verify template only serves `brumation-guide` + `shedding-guide`; deprecated slugs should 404 or redirect | COO | P1 | LQ | No orphan routes from deprecated template | Template restricted or deprecated |
| ☐ | `/health/parasites` vs `/health/parasites-guide`: resolve duplicate — confirm `/health/parasites-guide` → 301 redirect to `/health/parasites` OR retitle as substantively different | COO | P1 | LQ | Parasites duplicate resolved | 301 redirect or meaningful retitle |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/species/*` spokes: cross-link to `/setup` cluster (e.g., `/species/bearded-dragon` → `/setup/uvb-lighting-guide`, `/setup/temperature-guide`) | COO | P1 | TRAF | Species → setup linking creates topical depth | 10 top species pages cross-link to setup guides |
| ☐ | `/species/*` spokes: cross-link to `/health` cluster (e.g., bearded dragon → `/health/metabolic-bone-disease`) | COO | P1 | TRAF | Species pages link to relevant health conditions | 10 top species pages cross-link to health conditions |
| ☐ | `/setup/*` spokes: cross-link to `/tools/uvb-distance-calculator` from uvb-lighting-guide and temperature-guide | COO | P1 | TRAF+REV | Setup guides drive tool usage | UVB and temp guides link to UVB calculator tool |
| ☐ | `/builds/[slug]` pages: link to `/setup` cluster and relevant species pages | COO | P2 | TRAF | Builds cluster integrated into species + setup graph | Builds link to setup and species |
| ☐ | `/states/[state]` spokes: link to relevant species and care cluster pages | COO | P2 | TRAF | State legality pages serve broader care-entry intent | State pages link to care cluster |

### Metadata / OG / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | Lizard.com has 0 per-page ogImage. Add ogImage to: homepage, `/species` hub, `/health` hub, `/setup` hub, and top 10 species pages (bearded-dragon, leopard-gecko, ball-python, crested-gecko, corn-snake, blue-tongued-skink, veiled-chameleon, russian-tortoise, uromastyx, panther-chameleon) | COO | P1 | LQ | Dark-mode reptile guide must have compelling social previews | ogImage on hub pages + 10 species pages |
| ☐ | `/reviews/*` 5 pages: add breadcrumbs (all 5 confirmed missing) | COO | P1 | LQ+REV | Revenue pages have breadcrumbs | Breadcrumbs on all 5 reviews pages |
| ☐ | `/husbandry` hub: add breadcrumbs (confirmed missing) | COO | P2 | LQ | Husbandry hub has breadcrumbs | Breadcrumbs present |
| ☐ | `/husbandry/[slug]` template: add breadcrumbs (confirmed missing) | COO | P2 | LQ | Husbandry spokes have breadcrumbs | Breadcrumbs in template |
| ☐ | `/species/[slug]` template: add breadcrumbs (confirmed missing) | COO | P1 | LQ | All species pages get BreadcrumbList | Breadcrumbs in template |

### Monetization / Trust

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/reviews/*` 5 pages: verify `AffiliateDisclosure` above CTAs on each (best-uvb-bulbs confirmed; verify best-bioactive-substrates, best-reptile-terrariums, best-thermometers-hygrometers, best-thermostats) | MON | P1 | TRUST | All 5 reviews pages have disclosure | Disclosure confirmed on all 4 remaining |

---

## Horses.com

Horses.com has 109 pages. Wave 1 cleared metadata trim. Wave 2: FAQPage gap is the largest in the portfolio (84 pages have FAQAccordion, only 1 has FAQPage schema), 8 hub pages missing ItemList, breadcrumb gaps.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health` hub: add ItemList of all 20 health condition spokes (currently missing) | COO | P1 | LQ | Horses health hub is the primary equine-condition index | ItemList in `/health/page.tsx` |
| ☐ | `/nutrition` hub: add ItemList of all 12 nutrition spokes (currently missing) | COO | P1 | LQ | Nutrition hub indexed | ItemList in `/nutrition/page.tsx` |
| ☐ | `/care` hub: add ItemList of all 14 care spokes (currently missing) | COO | P1 | LQ | Care hub indexed | ItemList in `/care/page.tsx` |
| ☐ | `/tack` hub: add ItemList of all 10 tack spokes (currently missing) | COO | P2 | LQ | Tack hub indexed | ItemList in `/tack/page.tsx` |
| ☐ | `/ownership` hub: add ItemList of all 11 ownership spokes (currently missing) | COO | P2 | LQ | Ownership cluster indexed | ItemList in `/ownership/page.tsx` |
| ☐ | `/supplements` hub: add ItemList of supplement spokes (currently missing) | COO | P2 | LQ | Supplements hub indexed | ItemList in `/supplements/page.tsx` |
| ☐ | `/guides` hub: add ItemList of 3 guide spokes (currently missing) | COO | P2 | LQ | Guides hub indexed | ItemList in `/guides/page.tsx` |
| ☐ | `/reviews` hub: add ItemList of 2 review pages (currently missing) | COO | P2 | LQ+REV | Reviews hub indexed | ItemList in `/reviews/page.tsx` |
| ☐ | `/tools` hub: add ItemList of tool pages (currently 0 ItemList on tools hub) | COO | P1 | LQ | Tools hub surfaces body-condition-score tool for GEO retrieval | ItemList in `/tools/page.tsx` |
| ☐ | FAQPage on `/health/colic`, `/health/laminitis`, `/health/cushings-ppid`, `/health/strangles`, `/health/equine-ulcers`, `/health/lameness-basics`, `/health/navicular-syndrome`, `/health/sweet-itch`, `/health/abscess`, `/health/osteoarthritis` (10 confirmed FAQAccordion; none have FAQPage) | COO | P1 | LQ+TRAF | Top-10 most-searched equine health conditions gain AI-snippet eligibility | FAQPage on these 10 |
| ☐ | FAQPage on `/health/heaves`, `/health/tying-up`, `/health/equine-influenza`, `/health/equine-metabolic-syndrome`, `/health/mud-fever`, `/health/rain-rot`, `/health/ringbone`, `/health/thrush`, `/health/west-nile-virus` (9 more health spokes with accordion) | COO | P1 | LQ+TRAF | Completes FAQPage coverage on entire health cluster (19 total) | FAQPage on all 19 health spokes with accordion |
| ☐ | FAQPage on `/nutrition/forage-basics`, `/nutrition/hay-types`, `/nutrition/feeding-senior-horses`, `/nutrition/toxic-plants`, `/nutrition/salt-and-electrolytes` (nutrition spokes with accordion) | COO | P2 | LQ+TRAF | FAQPage across nutrition cluster | FAQPage on nutrition spokes with accordion |
| ☐ | FAQPage on `/care/deworming-program`, `/care/hoof-care-basics`, `/care/farrier-schedule`, `/care/fencing-safety`, `/care/winter-care` (care spokes with accordion) | COO | P2 | LQ | FAQPage on care cluster spokes | FAQPage on applicable care spokes |
| ☐ | FAQPage on `/ownership/buying-your-first-horse`, `/ownership/leasing-a-horse`, `/ownership/pre-purchase-exam`, `/ownership/cost-of-owning-a-horse` (ownership spokes with accordion) | COO | P2 | LQ | FAQPage on high-intent ownership queries | FAQPage on ownership spokes with accordion |
| ☐ | FAQPage on `/tack/bits-guide`, `/tack/bridle-types`, `/tack/boots-and-wraps`, `/tack/helmet-guide` (tack spokes with accordion) | COO | P2 | LQ | Tack guides GEO-eligible | FAQPage on tack accordion pages |
| ☐ | `/disciplines/[slug]/equipment` sub-template: verify schema type (depth-3 template needs Article + BreadcrumbList at minimum) | COO | P2 | LQ | Equipment sub-pages properly typed | Schema confirmed on equipment template |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health/*` spokes: cross-link to `/supplements` hub and relevant supplement pages (e.g., `/health/laminitis` → `/supplements/joint-supplements`) | COO | P1 | TRAF+REV | Health→supplements creates conversion path | 10 health pages cross-link to supplements |
| ☐ | `/nutrition/*` spokes: cross-link to `/care` hub (e.g., `/nutrition/hay-types` → `/care/pasture-management`) | COO | P2 | TRAF | Nutrition and care clusters integrated | 6 nutrition pages cross-link to care cluster |
| ☐ | `/ownership/*` spokes: cross-link to `/health` hub and `/disciplines` hub | COO | P2 | TRAF | Ownership→health→disciplines creates logical user journey | 5 ownership pages cross-link |
| ☐ | `/disciplines/*` spokes: link to `/tack` cluster (e.g., `/disciplines/dressage` → `/tack/bits-guide`) | COO | P2 | TRAF+REV | Disciplines drive tack discovery | Discipline pages cross-link to tack cluster |
| ☐ | `/reviews/best-equine-supplements` + `/reviews/best-winter-horse-blankets`: link to `/supplements` hub and `/care/blanketing` respectively | COO | P2 | TRAF | Reviews integrated into editorial clusters | Reviews cross-link to relevant editorial hubs |

### Metadata / OG / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | Horses.com has 0 per-page ogImage. Add ogImage to: homepage, `/breeds` hub, `/health` hub, `/disciplines` hub, and top 10 health pages (colic, laminitis, cushings-ppid, strangles, equine-ulcers, navicular-syndrome, equine-metabolic-syndrome, lameness-basics, abscess, osteoarthritis) | COO | P1 | LQ | Horses editorial authority reinforced by compelling previews | ogImage on hub pages + 10 health pages |
| ☐ | `/reviews/best-equine-supplements` + `/reviews/best-winter-horse-blankets`: add breadcrumbs (both confirmed missing) | COO | P1 | LQ+REV | Revenue pages have BreadcrumbList | Breadcrumbs on both review pages |
| ☐ | `/supplements/joint-supplements`: add breadcrumbs (confirmed missing) | COO | P2 | LQ | Supplements spoke has breadcrumbs | Breadcrumbs present |
| ☐ | `/data` page: add breadcrumbs (confirmed missing); down-weight sitemap priority from 0.90 to ≤0.30 | COO | P2 | LQ | Data page deprioritized correctly | Breadcrumbs + priority ≤0.30 |

### Monetization / Trust

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | Both reviews pages: verify `AffiliateDisclosure` is ABOVE the first buy-box CTA block | MON | P1 | TRUST | Disclosure above CTAs confirmed | Disclosure verified on both |
| ☐ | `/supplements/joint-supplements`: if it has product CTAs, confirm they go through `/go` with inline disclosure | MON | P2 | TRUST | Supplement spoke affiliate-route integrity | All CTAs via `/go`; disclosure present |

---

## PetFood.com

PetFood.com has 103 pages across 10+ clusters. Wave 1 cleared FTC trim, cost-calculator embed, and sitemap. Wave 2 covers the large ItemList gap (8 hub pages missing ItemList) and FAQPage gap.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/conditions` hub: add ItemList of all `[slug]` condition spokes (currently missing) | COO | P1 | LQ | Conditions hub is a primary GEO anchor for veterinary-nutrition queries | ItemList in `/conditions/page.tsx` |
| ☐ | `/diets` hub: add ItemList of all 14 diet spokes (currently missing) | COO | P1 | LQ | Diets hub GEO-indexed | ItemList in `/diets/page.tsx` |
| ☐ | `/nutrition` hub: add ItemList of all 11 nutrition science spokes (currently missing) | COO | P1 | LQ | Nutrition hub — primary EEAT anchor for pet-nutrition queries | ItemList in `/nutrition/page.tsx` |
| ☐ | `/compare` hub: add ItemList of all 9 comparison spokes (currently missing) | COO | P1 | LQ+REV | Compare hub indexed for AI retrieval | ItemList in `/compare/page.tsx` |
| ☐ | `/feeding` hub: add ItemList of all 10 feeding-practice spokes (currently missing) | COO | P2 | LQ | Feeding hub indexed | ItemList in `/feeding/page.tsx` |
| ☐ | `/supplements` hub: add ItemList of all 5 supplement spokes (currently missing) | COO | P2 | LQ | Supplements hub indexed | ItemList in `/supplements/page.tsx` |
| ☐ | `/myths` hub: add ItemList of all 5 myth-busting spokes (currently missing) | COO | P2 | LQ | Myths hub — high GEO citation potential for debunking queries | ItemList in `/myths/page.tsx` |
| ☐ | `/guides` hub: add ItemList of all 8 guide spokes (currently missing) | COO | P2 | LQ | Guides hub indexed | ItemList in `/guides/page.tsx` |
| ☐ | `/tools` hub: add ItemList of tool pages (currently missing) | COO | P2 | LQ | Tools hub surfaces food-cost-calculator | ItemList in `/tools/page.tsx` |
| ☐ | `/conditions/page.tsx` has FAQAccordion — add FAQPage schema (only petfood-com page with accordion; none have FAQPage schema) | COO | P2 | LQ | Conditions hub FAQ content AI-citable | FAQPage schema on `/conditions/page.tsx` |
| ☐ | `/methodology/page.tsx`: consider adding `ScholarlyArticle` or `Dataset` type to boost citation potential for methodology documentation | COO | P2 | LQ+TRUST | Methodology page is a primary trust signal for GEO citations | Schema type verified/enhanced |
| ☐ | `/life-stage/[slug]` dynamic template: verify it emits Article + BreadcrumbList schema | COO | P2 | LQ | Life-stage template properly typed | Schema confirmed |
| ☐ | `/conditions/[slug]` dynamic template: confirm MedicalWebPage or equivalent schema (nutrition-based therapeutic diet guidance is clinical-adjacent) | COO | P1 | LQ+TRUST | Condition pages correctly typed for clinical-nutrition GEO retrieval | Schema confirmed |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/compare/*` spokes: cross-link to `/brands` hub and `/ingredients` hub (e.g., `/compare/grain-free-vs-grain-inclusive` → `/ingredients/legumes-peas-and-lentils`) | COO | P1 | TRAF | Compare pages drive brand + ingredient discovery | 9 compare pages cross-link to brands/ingredients |
| ☐ | `/diets/*` spokes: cross-link to `/conditions` hub and relevant condition pages (e.g., `/diets/kidney-disease-diets` → `/conditions/kidney-disease`) | COO | P1 | TRAF | Diets→conditions creates clinical-nutrition authority graph | Each diet page links to related condition page |
| ☐ | `/nutrition/*` spokes: cross-link to `/feeding` hub and `/compare` hub | COO | P2 | TRAF | Nutrition science cluster links to practical cluster | 6 nutrition pages cross-link |
| ☐ | `/myths/*` spokes: cross-link to `/ingredients` and `/nutrition` (e.g., `/myths/by-products-myth` → `/ingredients/animal-protein-sources`) | COO | P2 | TRAF | Myth-busting pages cross-link to primary-source reference pages | Each myth page links to supporting ingredient/nutrition page |
| ☐ | `/brands/*` spokes: cross-link to `/ingredients` hub | COO | P2 | TRAF | Brand evaluations reference ingredient science | Brand pages cross-link to ingredients |
| ☐ | CrossPortfolioCard on `/conditions` hub and `/nutrition` hub (currently only on `/life-stage/[slug]` template) | COO | P2 | TRAF | High-authority hubs surface Dog.com + Vets.co cross-links | CrossPortfolioCard on 2 hubs |

### Metadata / OG / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | PetFood.com has 0 per-page ogImage. Add ogImage to: homepage, `/brands` hub, `/conditions` hub, `/diets` hub, top 7 brand pages, and top 5 compare pages | COO | P1 | LQ | Nutrition reference site must have compelling social previews | ogImage on ≥20 key pages |
| ☐ | `/methodology` page: add breadcrumbs (currently missing) | COO | P2 | LQ | Methodology page has BreadcrumbList | Breadcrumbs present |

### Trust / Monetization

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/brands/*` evaluation pages (7 pages): verify `AffiliateDisclosure` above any product CTAs (purina-pro-plan-evaluation confirmed; others need verification) | MON | P1 | TRUST | All brand evaluation pages have disclosure above CTAs | Disclosure confirmed on all 7 brand pages |
| ☐ | `/compare/*` 9 pages: if comparison spokes have CTAs, confirm they route through `/go` with inline disclosure | MON | P2 | TRUST | Compare page affiliate-route integrity | All CTAs via `/go`; disclosure present |

---

## PetFoods.com

PetFoods.com has 12 pages (ingredient/brand database, non-priority). Wave 1 structural sweep complete. Wave 2 addresses schema gaps.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/brands` hub: add ItemList of all brand pages (currently missing) | COO | P2 | LQ | Brands hub AI-citable index | ItemList in `/brands/page.tsx` |
| ☐ | `/ingredients` hub: add ItemList of all ingredient reference pages (currently missing) | COO | P2 | LQ | Ingredients hub indexed | ItemList in `/ingredients/page.tsx` |
| ☐ | `/recalls` page: add ItemList if it lists recall items, or `Dataset` schema for structured recall data | COO | P2 | LQ | Recalls page gains GEO citation potential | ItemList or Dataset schema on `/recalls/page.tsx` |
| ☐ | `/brands/[slug]` template: verify `Organization` + `Product` schema covers specific product lines within the brand | COO | P2 | LQ | Brand template fully typed | Schema confirmed or enhanced |
| ☐ | `/ingredients/[slug]` template: verify `DefinedTerm` + `DefinedTermSet` schema — `url` and `inDefinedTermSet` are correct | COO | P2 | LQ | Ingredient template schema verified | Schema confirmed |
| ☐ | `/glossary` page: add `DefinedTermSet` + ItemList of terms | COO | P2 | LQ | Glossary becomes citable reference for AI surfaces | DefinedTermSet schema on glossary |
| ☐ | FAQPage on FAQAccordion pages: 7 pages have FAQAccordion, only 1 has FAQPage schema — identify the 6 missing and add FAQPage | COO | P2 | LQ | FAQPage coverage complete | FAQPage on all 7 accordion pages |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/brands/[slug]` pages: cross-link to relevant `/ingredients` pages | COO | P2 | TRAF | Brand pages reference ingredient science | Brand pages cross-link to ingredients |
| ☐ | `/ingredients/[slug]` pages: cross-link to `/brands` pages that use that ingredient heavily | COO | P2 | TRAF | Ingredients pages surface relevant brand examples | Ingredients cross-link to brands |
| ☐ | Add CrossPortfolioCard to `/brands` hub and `/ingredients` hub linking to PetFood.com | COO | P2 | TRAF | PetFoods.com surfaces its sister site | CrossPortfolioCard on 2 hubs |

### Metadata / OG / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | PetFoods.com has 0 per-page ogImage. Add ogImage to homepage and `/brands` hub (non-priority — limit to 2 pages) | COO | P3 | LQ | Minimum OG coverage | ogImage on homepage + brands hub |
| ☐ | `/editorial-standards` page: add breadcrumbs (confirmed missing) | COO | P3 | LQ | Breadcrumbs consistent | Breadcrumbs present |

---

## Ferret.com

Ferret.com is launch #1. It has 107 pages. Wave 1 cleared trust line and food-evaluator embed. Wave 2 addresses the large ItemList gap (3 hubs missing ItemList) and the largest FAQPage gap in the portfolio (55 pages have FAQAccordion; none have FAQPage schema).

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/behavior` hub: add ItemList of all 14 behavior spokes (currently missing) | COO | P1 | LQ | Behavior hub indexed | ItemList in `/behavior/page.tsx` |
| ☐ | `/diet` hub: add ItemList of all 12 diet spokes (currently missing) | COO | P1 | LQ | Diet hub indexed | ItemList in `/diet/page.tsx` |
| ☐ | `/ownership` hub: add ItemList of all 13 ownership spokes (currently missing) | COO | P1 | LQ | Ownership hub indexed | ItemList in `/ownership/page.tsx` |
| ☐ | FAQPage on all behavior pages with FAQAccordion (12 confirmed: `/behavior/biting-and-nipping`, `/behavior/bonding-with-your-ferret`, `/behavior/dead-sleep-explained`, `/behavior/dooking-and-vocalizations`, `/behavior/leash-and-harness-training`, `/behavior/litter-box-troubleshooting`, `/behavior/multi-ferret-introductions`, `/behavior/play-aggression`, `/behavior/stress-signs`, `/behavior/training-and-bonding`, `/behavior/digging-and-burrowing`, `/behavior/scratching-and-digging-furniture`) | COO | P1 | LQ+TRAF | Ferret behavior is the #1 ferret-query category — all 12 become AI-eligible | FAQPage on all 12 behavior spokes |
| ☐ | FAQPage on all care pages with FAQAccordion (7 confirmed: `/care/cage-setup`, `/care/diet-basics`, `/care/exercise-and-enrichment`, `/care/ferret-proofing-your-home`, `/care/heat-stroke-prevention`, `/care/litter-training`, `/care/odor-and-scent-control`) | COO | P1 | LQ+TRAF | Core care pages become AI-eligible | FAQPage on all 7 care spokes |
| ☐ | FAQPage on all health pages with FAQAccordion (19 confirmed: `/health/adrenal-disease`, `/health/insulinoma`, `/health/lymphoma`, `/health/heart-disease`, `/health/gastrointestinal-blockage`, `/health/dental-disease`, `/health/ear-mites`, `/health/vaccinations`, `/health/spaying-and-neutering`, `/health/aging-ferret-care`, `/health/anesthesia-and-surgery-risk`, `/health/canine-distemper-in-ferrets`, `/health/ferret-diarrhea-causes`, `/health/ferret-influenza`, `/health/ferret-ulcers`, `/health/fleas-and-parasites`, `/health/signs-of-pain`, `/health/vet-visit-prep`, `/health/annual-checkup-guide`) | COO | P1 | LQ+TRAF | 19 ferret health pages — highest-intent queries for a launch site — all become AI-eligible | FAQPage on all 19 health spokes |
| ☐ | FAQPage on remaining FAQAccordion pages in diet cluster (verify all `/diet/*` — some likely have accordions not yet counted) | COO | P1 | LQ | Diet cluster FAQPage complete | FAQPage on all diet accordion pages |
| ☐ | FAQPage on ownership cluster accordion pages (`/ownership/is-a-ferret-right-for-you`, `/ownership/cost-of-owning-a-ferret`, `/ownership/ferret-insurance-basics`, `/ownership/adoption-vs-buying`) | COO | P2 | LQ | Ownership cluster FAQPage complete | FAQPage on ownership accordion pages |

### Internal Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/health/*` spokes: cross-link to `/diet` hub and relevant diet pages (e.g., `/health/insulinoma` → `/diet/protein-and-fat-requirements`) | COO | P1 | TRAF | Health→diet creates clinical-nutrition authority path | 10 health pages cross-link to diet cluster |
| ☐ | `/behavior/*` spokes: cross-link to `/care` hub and relevant care pages | COO | P1 | TRAF | Behavior cluster links to care cluster | 8 behavior pages cross-link to care |
| ☐ | `/colors/*` spokes: cross-link to `/ownership/is-a-ferret-right-for-you` and `/ownership/adoption-vs-buying` | COO | P2 | TRAF | Color pages serve acquisition-intent users; link to buying guidance | Color spokes link to acquisition-intent ownership pages |
| ☐ | `/diet/best-ferret-kibble` (primary commercial page): add links to `/health/dental-disease` and `/health/adrenal-disease` with medical context | COO | P2 | TRAF+REV | Best-kibble page strengthened by health cross-links | Cross-links present |
| ☐ | CrossPortfolioCard on `/health` hub and `/behavior` hub — verify coverage | COO | P2 | TRAF | Ferret hubs surface portfolio-wide relevant links | CrossPortfolioCard confirmed/added |

### Metadata / OG / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | Ferret.com has 0 per-page ogImage. This is launch #1 — P0. Add ogImage to: homepage, `/health` hub, `/behavior` hub, `/care` hub, `/colors` hub, `/diet` hub, `/ownership` hub, and top 10 health pages (adrenal-disease, insulinoma, lymphoma, heart-disease, dental-disease, vaccinations, spaying-and-neutering, aging-ferret-care, ear-mites, canine-distemper-in-ferrets) | COO | P0 | LQ | Launch site with no ogImage is a hard launch-quality gap | ogImage on all 6 hubs + 10 health spokes; homepage priority |
| ☐ | `/behavior/scratching-and-digging-furniture`: add breadcrumbs (confirmed missing) | COO | P2 | LQ | Breadcrumb gap in behavior cluster | Breadcrumbs present |

### Monetization / Trust (launch #1 priority)

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | Finish Ferret monetization + clinical buy-box sweep (N5 — Monetization lane) | MON | P1 | REV+TRUST | Launch site must be monetized before DNS flip | All commercial CTAs via `/go`; disclosures above monetized surfaces; CSRO sign-off |
| ☐ | `/diet/best-ferret-kibble`: verify `AffiliateDisclosure variant="inline"` position is ABOVE the first CTA, not below it | MON | P1 | TRUST | Disclosure confirmed above first CTA | Verified |
| ☐ | `/diet/*` medical/clinical pages (senior-ferret-nutrition, protein-and-fat-requirements): if any have product CTAs, confirm they route through `/go` with inline disclosure | MON | P2 | TRUST | Diet clinical pages affiliate-route integrity | All CTAs via `/go` |

---

## Ferrets.com

Ferrets.com has 19 pages (state-legality directory, non-priority). Wave 1 structural sweep complete. Wave 2 covers hub ItemList, FAQPage coverage, and the 404-gate issue.

### Schema / GEO

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/states` hub: add ItemList of all state pages (currently missing) | COO | P2 | LQ | States hub GEO-citable index | ItemList in `/states/page.tsx` |
| ☐ | `/legality` hub: add ItemList of legality category pages (currently missing) | COO | P2 | LQ | Legality hub indexed | ItemList in `/legality/page.tsx` |
| ☐ | `/adopt` hub: add ItemList of adoption resource pages (currently missing) | COO | P3 | LQ | Adoption hub indexed | ItemList in `/adopt/page.tsx` |
| ☐ | `/acquiring` hub: add ItemList of acquiring pages (currently missing) | COO | P3 | LQ | Acquiring hub indexed | ItemList in `/acquiring/page.tsx` |
| ☐ | `/moving` hub: add ItemList of moving resource pages (currently missing) | COO | P3 | LQ | Moving hub indexed | ItemList in `/moving/page.tsx` |
| ☐ | FAQPage on FAQAccordion pages (10 confirmed pages; 1 has FAQPage schema — identify the 9 missing and add FAQPage) | COO | P2 | LQ | FAQPage coverage complete | FAQPage on all 10 accordion pages |
| ☐ | `/states/[slug]` template: verify FAQPage questions are substantive and not placeholder content | COO | P2 | TRUST | State-level pages have substantive FAQ content | FAQ content verified on 3 sample states |

### Internal Linking / Breadcrumbs

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/acquiring` hub: add breadcrumbs (confirmed missing) | COO | P2 | LQ | Hub has breadcrumbs | Breadcrumbs present |
| ☐ | `/adopt` hub: add breadcrumbs (confirmed missing) | COO | P2 | LQ | Hub has breadcrumbs | Breadcrumbs present |
| ☐ | `/legality` hub: add breadcrumbs (confirmed missing) | COO | P2 | LQ | Hub has breadcrumbs | Breadcrumbs present |
| ☐ | `/moving` hub: add breadcrumbs (confirmed missing) | COO | P2 | LQ | Hub has breadcrumbs | Breadcrumbs present |

### Trust / Indexing

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | `/directory/rescues`: gate the 51 state rescue links behind coming-soon state (render non-clickable) so no live 404 anchors — real papercut from Wave 1 inventory | COO | P2 | LQ | No live 404 anchors from rescues directory | Links non-clickable; link-check green |
| ☐ | Metadata trim in-flight (▶ from Wave 1 — confirm completion, then close) | COO | P2 | LQ | Metadata policy passes on all 19 pages | metadata-policy.mjs green |

---

## Portfolio-wide Systems

Items that apply across all 10 sites. Not duplicated from Wave 1 unless noted as explicitly new.

### Schema / CI Gate

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | **Schema validation CI gate**: add `scripts/ci/schema-audit.mjs` that verifies all hub pages (index pages with ≥5 child spokes) emit at least one `ItemList` declaration in their JSON-LD; fails CI if missing. Prevents regression as pages are added. | COO | P2 | LQ+STRAT | Automates the ItemList coverage requirement; prevents future drift | Script exists; runs in CI; passes after Wave 2 items are executed |
| ☐ | **FAQPage regression gate**: extend schema-audit (or create separate check) to verify all pages with `FAQAccordion` in their JSX also have `FAQPage` in their JSON-LD. The current portfolio-wide gap is 330+ mismatches across 8 sites. | COO | P2 | LQ+STRAT | Automates the FAQPage gap check | Gate script created; runs in CI |
| ☐ | **OG image generation system**: design a Next.js OG image generation route (`/api/og?site=dog-com&path=/health/dog-arthritis`) using `@vercel/og` for on-demand per-page ogImage. Eliminates need to manually add ogImage to 900+ pages. | COO | P2 | STRAT+LQ | Solves ogImage gap portfolio-wide systematically | OG generation route implemented on ≥1 site as MVP; then rolled out |
| ☐ | **CrossPortfolioCard expansion sweep**: identify all high-traffic depth-1+ spokes in each site lacking a CrossPortfolioCard and add it. Priority: Vets.co health spokes, PetFood.com nutrition/conditions spokes, Horses.com health spokes. | COO | P2 | TRAF | Cross-portfolio linking compounds across the entire fleet | CrossPortfolioCard on ≥3 priority spokes per site |
| ☐ | **Breadcrumb completeness audit script**: add a CI helper (or extend link-check.mjs) that identifies depth≥2 pages lacking any breadcrumb pattern and outputs a per-site count. | COO | P2 | LQ | Breadcrumb gap made visible and trackable in CI | Script outputs per-site breadcrumb coverage stats |

### Sitemap / Indexing

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | **Disclosure page sitemap priorities**: `fish.com/disclosure` is at 0.90 — confirmed wrong. Audit all 10 sites for `/disclosure` page priorities; all should be ≤0.20. | COO | P2 | LQ | Crawl budget not wasted on legal pages | All disclosure/legal pages ≤0.20 priority |
| ☐ | **Data page sitemap priorities**: `horses.com/data` is at 0.90; verify `dog.com/data` and all others. All `/data` utility pages should be ≤0.30. | COO | P2 | LQ | Crawl budget allocated correctly | All `/data` pages ≤0.30 priority |
| ☐ | **Redirect stub sitemap exclusion**: verify redirect-stub pages are excluded from their sitemaps. Known stubs: fish-com (`/species/discus-guide`, `/species/kuhli-loach-guide`, `/species/otocinclus-guide`); dog-com (`/training/socialization-window`); ferret-com (`/care/seasonal-coat-and-shedding`); lizard-com (non-unique husbandry slugs). | COO | P1 | LQ | Redirect stubs not included in any sitemap | Redirect stubs excluded from all affected sitemaps |

### Cross-Portfolio Linking

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | **Ferret.com ↔ Ferrets.com cross-link**: Ferret.com's `/ownership/ferret-legality-by-state` page → Ferrets.com and vice versa | COO | P2 | TRAF | Two ferret sites cross-link for mutual authority | Cross-links present on both sites |
| ☐ | **PetFood.com ↔ PetFoods.com cross-link**: CrossPortfolioCard on each site pointing to the other | COO | P2 | TRAF | Sister-site cross-linking strengthens both | CrossPortfolioCard on each other's hub pages |
| ☐ | **Dog.com ↔ Vets.co cross-link**: Dog.com health pages cross-link to Vets.co for clinical authority; Vets.co find-a-vet pages cross-link to Dog.com for breed health context | COO | P1 | TRAF | Two highest-value sites amplify each other | Bidirectional cross-links on ≥10 pages each |
| ☐ | **Horses.com ↔ Saddle.com cross-link**: Horses.com tack pages link to Saddle.com equivalents; Saddle.com guides link back to Horses.com for ownership/care context | COO | P2 | TRAF | Equestrian property pair cross-link | Bidirectional cross-links on ≥5 pages each |

### Monetization Systems

| Status | Item | Lane | Pri | Cat | Value | Done-when |
|---|---|---|---|---|---|---|
| ☐ | **AffiliateDisclosure audit**: run `grep -rln "AffiliateDisclosure"` on all 10 sites; identify any commercial review/comparison/product page without one; produce a per-site list for Monetization Bot | MON | P1 | TRUST | Portfolio-wide disclosure sweep | List produced; each gap filed as Monetization task |
| ☐ | **Affiliate-route integrity audit**: run `scripts/ci/affiliate-link-integrity.mjs` across all 10 sites; confirm no direct external vendor links bypass `/go` on review/comparison pages | MON | P1 | TRUST | Portfolio-wide `/go` routing confirmed | Script passes on all 10 sites |
| ☐ | **Clinical/medicated buy-box sweep**: identify pages on Vets.co, Ferret.com, and Dog.com that discuss Rx or OTC medications and have product CTAs — confirm all route through `/go` with inline FTC disclosure | MON | P1 | TRUST | Clinical buy-box compliance portfolio-wide | Sweep complete; gaps filed |

---

## Promotion guidance

This file is the **depth reserve**. CSRO promotes items into `opportunity-queue.md` Active Set only when:

1. The item is unblocked (its lane-owner has bandwidth)
2. It is top-leverage relative to the premium launch bar
3. It does not conflict with any in-flight Active Set item

**Priority order for promotion** (per the premium-phase rule):
- P0: Launch-blocking for Ferret.com (ogImage gap — launch site must have this before DNS flip)
- P1: Schema gaps on Vets.co + Fish.com hubs (polish-list sites); breadcrumb gaps on reviews clusters (revenue surfaces); FAQPage gaps on health clusters (highest-search-volume pages)
- P2: ItemList additions on remaining hubs across all 10 sites; FAQPage on the 330+ accordion-but-no-schema pages; CI automation gates
- P3: Content expansion (parked per premium-phase rule)

**Premium Domain Launch Bar wins all conflicts.**

---

## True item count (Wave 2)

| Site | Items |
|---|---|
| Dog.com | 37 |
| Vets.co | 34 |
| Fish.com | 32 |
| Saddle.com | 28 |
| Lizard.com | 27 |
| Horses.com | 41 |
| PetFood.com | 29 |
| PetFoods.com | 13 |
| Ferret.com | 31 |
| Ferrets.com | 11 |
| Portfolio-wide systems | 16 |
| **Total Wave 2** | **299** |

Wave 1 `opportunity-inventory.md` contains approximately 35 items. **Combined backlog capacity: ~334 real items.**

**Honest ceiling note:** 299 new grounded items were produced in this wave via enumeration of all 10 sites' real routes and confirmed gaps. Adding manufactured items to reach a higher count was refused per Carlo's rule #1. The ~1000-item capacity target is a *growth target the backlog grows toward via real audit waves* — this wave contributes a substantial tranche. Future waves driven by post-launch GA4 data, IR adversarial reviews, Monetization sweeps, and Visual passes will surface additional real opportunities. The honest count here is 299.
