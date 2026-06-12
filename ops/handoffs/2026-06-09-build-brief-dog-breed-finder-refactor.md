# BUILD BRIEF — Dog.com Breed Finder: honesty refactor + health/insurance linking

> **CRITICAL:** the Breed Finder ALREADY ships at `apps/dog-com/src/app/breeds/match/` (page + `wizard-client.tsx` + `wizard-logic.ts`, ~2026-06-07): 58 structured breeds, the 7 lifestyle inputs, hub-linked, sitemapped, schema'd, cross-linked from `/which-pet`. **Do NOT build a new tool — this is a REFACTOR of the existing one.**
> **Status:** ready for a fresh build. **Lane:** COO (tool/data/internal-linking). No spend/DNS/secrets, no product `/go`. **Scope:** dog-com ONLY.

---

## Why this exists
The live tool returns a `matchPercent` (relative-to-best-breed %) and uses "ranked / top 3 / best-fit" language — the SAME fake-score framing removed this session from the Vets Insurance Coverage Finder and the carrier `editorialNote` superlatives. Bring `/breeds/match` to the **"may fit your lifestyle — filter+group, not a fake score"** standard, and add the missing **health + insurance internal links** a discovery flow should carry.

## 1. Objective (5-field)
| Field | Assessment |
|---|---|
| SEO | Neutral-positive — keep `/breeds/match` URL; add `/health` + insurance internal links (stronger hub→tool→spoke graph); remove thin "%" UX. Protects an existing ranking asset. |
| GEO | Positive — "may fit" + transparent tiers + data-derived caveats are more citation-safe than a fabricated-looking "%". Retain WebApplication+Quiz+FAQ schema. |
| Monetization | Low-direct, high-assist — discovery tool, NO product `/go`. Add disclosed internal paths to `/reviews/best-pet-insurance` (Dog's on-site funnel) + `/health` + the existing disclosed `/reviews/best-dry-dog-food` CTA. Insurance is the LTV surface. |
| Effort | **S** — edit 3 existing files; no new routes/data/components. |
| Priority | **P2** (polish-mode §8a: honesty-bar alignment on a live tool). |

## 2. User flow (structure UNCHANGED — output reframed)
`/breeds` → "Find your match" → `/breeds/match` → answer the 7 existing questions → submit → **breeds grouped into honest fit tiers** ("May fit your lifestyle" / "Worth a closer look") with data-derived bullets + caveat + a per-card health/insurance internal-link row → open `/breeds/<slug>`.

## 3. Inputs (UNCHANGED — already correct)
`wizard-logic.ts` `QuestionKey` already = `home | timeDaily | experience | activity | household | grooming | noise`. **Do not add/remove/rename inputs** (add `sizePreference` ONLY if QA proves size is under-weighted; default: leave as-is).

## 4. Output states
- **Results:** breeds split into 2 tiers by raw-score thresholds (NOT a %): "May fit your lifestyle" (clear positive) + "Worth a closer look" (mixed — caveat prominent). Per card: name, AKC group, 2–3 `fitBullets`, one `caveat`, internal-link row (profile · health · insurance). ~3–6 breeds; do NOT pad.
- **Few results:** show genuine fits + "broaden an answer"; never pad poor fits.
- **No strong fit:** show "closer look" breeds + "no breed strongly matched every answer — here's the closest, with trade-offs." No dead-end, no forced %.
- **Pre-input:** form + the existing static persona table (keep — no-JS / AI-crawler surface).

## 5. Data needed (ALL in repo — invent nothing)
- `apps/dog-com/src/data/breeds.ts` → `Breeds: Breed[]` (58). `Breed` fields: `slug, name, group, sizeCategory, weightRangeLb, heightRangeIn, lifespanYears, energyLevel, sheddingLevel, trainabilityNotes, healthConcerns[], commonHealthCrossLinks[], originCountry, originPurpose, temperamentTraits[], goodWithKids, goodWithOtherDogs, firstTimeOwnerFriendly, groomingLevel, knownGeneticTests?`.
- **No net-new data file.** **Anti-fabrication (enforce):** every bullet/caveat derives from a real `Breed` field (per existing `buildFitBullets`/`buildCaveat`); never invent temperament/health/suitability/prevalence.

## 6. Files to edit (3 existing)
- **`breeds/match/wizard-logic.ts`** — replace `matchPercent` math (the `(score/denom)*95` line / `getBreedRecommendations`) with a **tier classifier** (`tier: 'may-fit' | 'closer-look'` from raw-score thresholds). KEEP `scoreBreed` + all `score*` functions (data-grounded, correct). Add health/insurance link helpers from `breed.commonHealthCrossLinks` + static `/reviews/best-pet-insurance`.
- **`breeds/match/wizard-client.tsx`** — render tiers instead of a ranked %-list; add the per-card internal-link row; mirror existing styling.
- **`breeds/match/page.tsx`** — remove "ranked / top 3 matches / best-fit" phrasing from hero/intro/FAQ; align to "may fit". Update WebApplication/Quiz `description` + FAQ#1 (currently describes "match percentages relative to the best-fit breed") to describe tiers.
- Read-only refs: `tools/dog-calorie-calculator/Calculator.tsx` (client convention); `ops/handoffs/2026-06-09-build-brief-vets-insurance-match-wizard.md` §7 (honesty standard).

## 7. Trust guardrails (QC §1)
- No "best breed / top breed / #1 / ranked / perfect match." Breeds **may fit a lifestyle** — never a winner.
- **Kill `matchPercent`** — a relative % reads as absolute confidence. Tiers + caveat instead.
- No fabricated temperament/health/suitability — bullets/caveats restate real fields only.
- Breed health framed responsibly: link `/health` + `commonHealthCrossLinks`; "breeds in this group are sometimes prone to X — ask about health testing," never a diagnosis/scare/invented prevalence.
- No clinical/medicated buy-box, no product `/go`. Insurance CTA = disclosed internal link only. `AffiliateDisclosure` above any monetized CTA.
- trust-guard/metadata-policy/link-check green.

## 8. Monetization (internal + insurance only — NO product /go)
Per-card link row: breed profile (`/breeds/<slug>`) · health (`/health` and/or `commonHealthCrossLinks`) · insurance (`/reviews/best-pet-insurance`). Keep the existing disclosed `/reviews/best-dry-dog-food` CTA. No `/go/<vendor>/<sku>` (discovery intent). Confirmed live routes: `/reviews/best-pet-insurance`, `/health`, `/reviews/best-dry-dog-food`, `/breeds/<slug>`.

## 9. What NOT to do
- No new breed-finder route/page/data file (extend the existing one).
- No `breed-traits.ts`. No keeping/renaming `matchPercent`. No product `/go`/buy-box/affiliate routes.
- No touching `affiliate-routes.ts`, `(funnels)/*`, or other sites.
- No invented temperament/health/prevalence; no AI-generated imagery.
- Do NOT remove the static persona table or existing schema. Do NOT change the 7-question set unless QA proves size under-weighting.

## 10. Done-when
- `/breeds/match` returns honest **fit tiers** (no %), data-derived bullets + caveat per card.
- Each card has a profile + health + insurance internal-link row, all resolving.
- All "ranked/best/top match/%" framing removed from logic, client, page, FAQ, schema description.
- `AffiliateDisclosure` above any monetized CTA.
- 3 CI gates green; `tsc --noEmit` clean for the 3 edited files. Still hub-linked/sitemapped/cross-linked.

## 11. Test plan
1. Filter correctness: 3 combos — apartment+low-time → small/low-energy upper tier; rural+active+experienced → high-energy working breeds; kids → only `goodWithKids` in upper tier.
2. No-overclaim grep on the 3 files: `best|top pick|#1|ranked|perfect|guaranteed|matchPercent|%` → 0 in user copy.
3. Anti-fabrication: spot-check 5 cards — every bullet/caveat traces to a `Breed` field.
4. Internal links resolve (`/breeds/<slug>`, `/health`, `/reviews/best-pet-insurance`); link-check green.
5. Edge states: strict filter, no-strong-fit — graceful, no dead-end, no forced %.
6. Schema/metadata retained+updated; one BreadcrumbList; title/desc in policy.
7. Gates green; mobile ≤375px tiers/cards stack.

## 12. Open questions
- Two tiers vs flat "may fit" list → default two tiers (decide in-build).
- Score thresholds → derive from the 58-breed score distribution across answer sets; target 3–6 upper-tier in common cases. No Carlo input.
- Health link granularity → prefer per-breed `commonHealthCrossLinks`, fall back to `/health`; verify targets exist (link-check).
- (CSRO awareness) slotted as polish (P2), not a new cluster — it's honesty-bar + linking on a live tool.

---
**Recommended FIRST task:** open the 3 files, confirm the current `matchPercent`/"ranked" framing, design tier thresholds against the real score distribution, then edit. Verify all 3 gates pass before AND after.
