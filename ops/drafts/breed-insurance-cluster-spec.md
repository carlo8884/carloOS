# DRAFT — Breed × Insurance Programmatic Cluster (the scale lever)

> Status: production-ready spec + sample copy. NOT committed (write limit / branch held).
> The scale play toward $1B: tie the highest-traffic content (breeds) to the highest-commission
> revenue (pet insurance), at programmatic scale, WITHOUT thin content. Each page is substantive
> because it's anchored in that breed's real hereditary-risk profile → why coverage matters →
> cost factors. Demand-confirmed: breed-specific health is a top dog-owner search class; "[breed]
> insurance" is high commercial intent.

## Anti-thin-content discipline (non-negotiable — CLAUDE.md §6, QC §1)
A programmatic generator is only allowed if EACH output is genuinely substantive and distinct.
The breed risk data is the differentiator: every page carries that breed's specific conditions,
real cost ranges for those conditions, and breed-specific enrollment guidance. No two pages read
alike because no two breeds share the same risk profile. If a breed lacks real risk data, it does
NOT get a page (better 40 strong pages than 200 thin ones).

## Where it lives
- Site: **dog-com** (traffic) with the conversion routed to its `/reviews/best-pet-insurance`
  (Skimlinks/Impact), OR vets-co. Recommend dog-com (bigger breed library + the insurance review).
- Route: `apps/dog-com/src/app/breeds/[slug]/insurance/page.tsx` — a NEW spoke under each existing
  breed (reuses the breed dataset already in `src/data/breeds.ts`), so it's a natural hub→spoke
  child of the breed page, not an orphan.
- Hub: `/breeds/insurance` (or a section on `/reviews/best-pet-insurance`) listing covered breeds.

## Data model (extend existing breed data — do NOT fabricate)
Add to each breed entry (only where real data exists):
```
insuranceProfile?: {
  topConditions: { name: string; typicalCostRange: string; note: string }[] // 2-4, real
  riskTier: 'higher' | 'average' | 'lower'   // honest, sourced framing
  enrollmentNote: string                      // breed-specific (e.g. early before BOAS shows)
}
```
Pages render only when `insuranceProfile` exists. Start with the ~15-20 breeds that have clear,
well-documented hereditary cost drivers (Frenchie, Bulldog, Cavalier, Golden, Lab, GSD,
Dachshund, Boxer, Bernese, Great Dane, Rottweiler, Cocker, Shar-Pei, Pug, Doberman...).

## Page template (each ~700-900 words, distinct via the data)
1. **Extractable answer (top):** "Is pet insurance worth it for a [Breed]?" — one calibrated
   paragraph keyed to the breed's risk tier + its top condition's cost.
2. **The breed's top hereditary cost drivers** — table: condition · typical treatment cost range ·
   note. (This is the substantive, distinct core.)
3. **Why timing matters for this breed** — breed-specific (e.g., enroll a Frenchie before BOAS or
   spinal signs appear; a Cavalier before a heart murmur is noted).
4. **What to check on a quote for this breed** — bilateral exclusions for orthopedic breeds,
   etc.
5. **FAQ** (FAQAccordion → FAQPage schema): "Does pet insurance cover [breed's signature
   condition]?" / "How much is insurance for a [Breed]?" / "Is a [Breed] expensive to insure?"
6. Schema: Article + FAQPage + Breadcrumb. AffiliateDisclosure above the CTA. CTA → worth-it
   calculator + best-pet-insurance. CrossPortfolioCard (vets specialists).
7. Trust: "Dog.com Editorial"; risk framing sourced (Dog Aging Project / breed-health literature);
   NO scaremongering, NO "guaranteed"; conditions framed as predispositions, not certainties.

---

## SAMPLE PAGE 1 — French Bulldog (most popular US breed 4 yrs running)
**Top answer:** French Bulldogs are among the costlier breeds to insure because their two
signature risks — **brachycephalic obstructive airway syndrome (BOAS)** and **intervertebral disc
disease (IVDD)** — are common and expensive to treat. If you own or are getting a Frenchie,
enrolling early (before any breathing or spinal signs are on the record) is the single biggest
factor in whether coverage actually helps you.
**Top hereditary cost drivers (table):**
| Condition | Typical treatment cost | Note |
|---|---|---|
| BOAS (airway surgery — nares/soft palate) | $2,000–$6,000+ | Often needed young; pre-existing if signs predate coverage |
| IVDD (spinal disc disease) | $3,000–$8,000+ (surgery) | High recurrence; bilateral/related-site exclusions common |
| Skin-fold & ear infections | $200–$600 per episode | Chronic/recurring — wellness vs illness coverage nuance |
| Eye ulcers (corneal) | $300–$2,500 | Brachycephalic eye shape predisposes |
**Why timing matters:** BOAS and skin/eye issues frequently show young; a single vet note before
coverage can make the whole airway category a permanent exclusion. Enroll before the first
breathing complaint.
**FAQ:** Does pet insurance cover BOAS surgery? (Yes, if not pre-existing.) / Why is French
Bulldog insurance so expensive? / Is IVDD covered?

## SAMPLE PAGE 2 — Cavalier King Charles Spaniel
**Top answer:** Cavaliers are a high-priority breed for early insurance because of one
overwhelming hereditary risk: **myxomatous mitral valve disease (MVD)** — the breed is reported
to be many times more likely to develop heart disease than the average dog, often relatively
young. Coverage purchased before any heart murmur is recorded is what determines whether the
lifelong cardiac costs are covered.
**Top hereditary cost drivers (table):**
| Condition | Typical cost | Note |
|---|---|---|
| Mitral valve disease (lifelong cardiac care, meds, echos) | $300–$1,500/yr ongoing + episodes | Murmur noted before coverage = pre-existing exclusion |
| Syringomyelia / Chiari-like malformation | $2,000–$8,000+ (MRI + management) | Neurological; expensive diagnostics |
| Hip dysplasia | $1,500–$6,000 | Orthopedic; bilateral exclusion risk |
| Eye conditions (retinal, cataract) | $300–$3,000 | Hereditary screening relevant |
**Why timing matters:** MVD murmurs can appear early; the window to insure before a murmur is
documented is narrow. This is the breed where "enroll as a puppy" matters most.
**FAQ:** Does pet insurance cover heart disease in Cavaliers? / At what age should I insure a
Cavalier? / Is syringomyelia covered?

---

## Why this is the $1B-shaped move
- **Scale:** ~15-40 substantive pages now, expandable as breed data grows — a compounding,
  interlinked asset, not one-off.
- **Revenue-tied:** every page funnels to the highest-commission affiliate vertical.
- **Defensible:** anchored in real breed risk data → survives thin-content suppression and is a
  genuine AI-citation magnet (concise, breed-specific, sourced).
- **Network effect:** each page links breed guide ↔ insurance review ↔ worth-it calculator ↔ vets
  specialists — deepening the moat.

## Build order when branch frees (after Tier-1.1 Q&A hub)
1. Add `insuranceProfile` to ~15 high-risk breeds in `src/data/breeds.ts` (real data only).
2. Build the `[slug]/insurance` template once; it renders all qualifying breeds.
3. Hub at `/breeds/insurance`; link from each breed page + best-pet-insurance; sitemap.
4. Verify: trust-guard (no scaremongering/guarantees), metadata-policy, link-check, sitemap-drift.
