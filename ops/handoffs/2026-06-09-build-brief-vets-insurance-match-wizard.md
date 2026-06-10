# BUILD BRIEF — Vets.co breed×state insurance match-wizard

> **Status:** ready for a fresh, full-context build. Do NOT start in a strained context.
> **Lane:** COO (content/tool/data) + existing Monetization `/go` patterns. No spend/DNS/secrets.
> **Author:** COO · **Created:** 2026-06-09 · **Branch at brief time:** `claude/happy-curie-AOZay`

---

## 1. Objective
Upgrade Vets.co's insurance surface from a passive *reimbursement estimator* into an interactive **match-wizard**: the user enters their pet + priorities, and the tool returns a **shortlist of insurance carriers to compare** (filtered to ones actually available in their state and matching their stated coverage needs), each with a neutral comparison path and an approved `/go` carrier link. Goal: higher engagement, a citation-worthy decision tool, and the highest-LTV monetization surface on the portfolio's highest revenue-density site — **without** making ranking, price, or advice claims.

## 2. User flow
1. User lands on `/tools/insurance-match` (new) — or the wizard is embedded on the existing `/insurance` hub.
2. Step 1: pet type (dog / cat) → breed (typeahead from data; "mixed / not sure" allowed).
3. Step 2: US state (dropdown).
4. Step 3: priorities (multi-select / sliders): lower monthly premium vs lower out-of-pocket; coverage emphases (hereditary/congenital, orthopedic, dental, exam fees, unlimited annual limit); pet age band.
5. Click "Show options that may fit."
6. Output: a **shortlist (3–6) of carriers to compare**, each as a card with the relevant attributes from data, a neutral "Compare on published terms" link, and a `/go/<carrier>` CTA. Plus a persistent disclosure + "not personalized advice" note.
7. User can adjust inputs (live re-filter) and open the full comparison or a carrier link.

## 3. Inputs
- `petType`: 'dog' | 'cat'
- `breed`: string slug from breed data (or 'mixed' / 'unknown')
- `state`: US state (2-letter or name)
- `priority`: 'lower-premium' | 'lower-out-of-pocket' | 'balanced'
- `coverageEmphasis`: subset of ['hereditary','orthopedic','dental','exam-fees','unlimited-limit']
- `ageBand`: 'puppy-kitten' | 'adult' | 'senior'

All inputs are optional except state (state gates availability). Sensible defaults: balanced / no emphasis / adult.

## 4. Output states
- **Results (happy path):** 3–6 carrier cards, ordered by *fit to stated priorities* (see §7 — framed as "options that may fit," never "ranked best"). Each card: carrier name, state-availability note, relevant coverage attributes (waiting periods, hereditary coverage, reimbursement/deductible/limit *options*), a one-line "why this may fit your priorities" derived strictly from data, neutral compare link, `/go` CTA.
- **Few/one match:** if filters are strict, show the matches + "broaden your priorities to see more options" (do NOT pad with non-matching carriers).
- **No state coverage match:** if no carrier in data serves the state, show "carriers serving {state}" fallback = all `states:'all-50'` carriers + a note; never show an empty dead-end.
- **Pre-input / loading:** the form with helper copy; no fabricated preview results.
- **Breed = mixed/unknown:** skip breed-specific weighting, use general profile; do not invent breed risk.

## 5. Data needed (ALL already in repo — use only this; invent nothing)
- `apps/vets-co/src/data/insurance-carriers.ts` → `CARRIERS: CarrierProfile[]`. Fields: `slug, name, reimbursementOptions[], deductibleOptions[], annualLimitOptions[], waitingPeriods{accident,illness,orthopedic}, coversHereditary, states('all-50'|'most'|'limited'), strengths[], weaknesses[]`.
- `apps/vets-co/src/data/insurance-by-breed.ts` + `insurance-breeds-all.ts` + `insurance-by-cat-breed.ts` → breed list + any breed-specific coverage notes.
- `apps/vets-co/src/data/insurance-by-state.ts` → state availability / regulatory context.
- **If a needed field is absent in data, omit it from the UI — do NOT synthesize it.** No invented premiums, payouts, or rankings.

## 6. Existing files / components / routes to reuse
- **Pattern to mirror:** `apps/vets-co/src/components/visual/InsuranceReimbursementEstimator.tsx` — client component (`'use client'`, `useState`/`useMemo`, pure `compute()` helper, results panel). Build the wizard as a sibling client component (e.g. `InsuranceMatchWizard.tsx`) following the same structure + styling tokens.
- **Estimator page** `apps/vets-co/src/app/tools/insurance-reimbursement-estimator/page.tsx` — copy its page scaffold (ArticleLayout/SchemaScript/metadata/disclosure placement/next-step CTA ordering) for the new `/tools/insurance-match/page.tsx`.
- **Disclosure:** `AffiliateDisclosure` (inline variant), placed ABOVE the carrier CTAs (as the estimator does).
- **Monetization:** `/go/[vendor]/[sku]/route.ts` + `apps/vets-co/src/data/affiliate-routes.ts` (carrier vendors: trupanion, healthy-paws, embrace, lemonade, pumpkin, manypets, fetch, spot, pets-best, aspca, figo, metlife, wagmo). CTA href pattern: `/go/<carrier-slug>/<campaign-sku>`.
- **Neutral comparison target:** `/reviews/best-pet-insurance` and/or `/insurance` (real, working routes).
- **Schema:** `SoftwareApplication` + `HowTo` (mirror estimator) via `SchemaScript`; keep exactly one BreadcrumbList (via ArticleLayout `breadcrumbs` prop — do NOT add an in-body breadcrumb `<script>`; see the dedup sweep).
- **Cross-link:** the broken funnel path `/pet-insurance/${slug}` is a 404 — **do NOT route to it**; carrier CTAs go via `/go`.

## 7. Trust / claim guardrails (NON-NEGOTIABLE — QC §1)
- **No ranking claims unless data supports them.** The shortlist is "options that may fit your priorities," ordered by a transparent, data-derived fit score — labeled as such, never "best/top/#1/ranked."
- **No "best / cheapest / fastest" anywhere.** No "our top pick."
- **No fake payout / premium / savings claims.** Only attributes present in `CARRIERS` data. No dollar figures the data doesn't contain. Premiums require a live carrier quote — say so.
- **Not personalized financial advice.** Prominent line: "This tool compares published policy options; it is not personalized insurance or financial advice. Confirm details and pricing directly with the carrier." 
- **Use "compare options" / "may fit" / "coverage considerations"** language throughout.
- **Disclosure-safe:** `AffiliateDisclosure` above every carrier CTA cluster.
- **"Why this may fit" copy** must be a literal restatement of data attributes (e.g. "Offers an unlimited annual-limit option; covers hereditary conditions; available in {state}") — not an editorial judgment.
- trust-guard.mjs must stay green (it now catches first-person clinical + superlative-adjacent patterns).

## 8. Monetization path
- Primary CTA on each card: **neutral** — "Compare on published terms" → `/reviews/best-pet-insurance` (works today, no account needed).
- Secondary CTA: **carrier** — `/go/<carrier-slug>/<sku>` (approved `/go` pattern; tag swaps from env at request time; redirect works even if tag unset).
- **If a carrier has no `/go` route or its tag is pending:** still show the carrier in the compare shortlist (internal value), but render the carrier CTA as the neutral compare link and add a small "direct carrier link pending" note — do NOT hardcode a raw carrier URL. Mark such carriers in a short handoff line to Monetization.
- Revenue context: Vets carriers are all Impact-network; activation is Impact.com + env vars (Carlo). The wizard must earn the moment tags go live — no rebuild needed.

## 9. What NOT to do
- Do NOT invent premiums, payouts, savings %, or carrier rankings.
- Do NOT claim "best/cheapest/fastest/top pick" or imply personalized advice.
- Do NOT route any CTA to `/pet-insurance/${slug}` (404) or any raw carrier URL.
- Do NOT add an in-body breadcrumb `<script>` (causes duplicate BreadcrumbList).
- Do NOT use AI-generated human imagery or fake reviewer credentials.
- Do NOT pad the shortlist with non-matching carriers to hit a count.
- Do NOT gate the tool behind email capture (engagement-first; capture optional).
- Do NOT build a net-new carriers dataset — use the existing data files only.

## 10. Done-when
- `/tools/insurance-match` renders; wizard takes inputs, filters by state + coverage, returns a 3–6 carrier shortlist with data-backed attributes and the two-tier CTA, fully client-side (no server round-trip).
- All copy passes the §7 guardrails (no superlatives, no invented numbers, advice disclaimer present, disclosure above CTAs).
- Exactly one BreadcrumbList; SoftwareApplication/HowTo schema present; metadata title+description set.
- Linked from `/insurance` hub and `/tools` (so it's not orphaned).
- All three CI gates green; `tsc --noEmit` clean for the new files (ignore pre-existing OgTemplate/next-resolution env noise).

## 11. Test / verification plan
1. **Compute/filter correctness:** unit-spot-check — pick 3 (state, priority, emphasis) combos by hand against `CARRIERS` data; confirm the shortlist = the carriers that actually match (state availability + coversHereditary etc.), and ordering reflects the stated priority transparently.
2. **No-overclaim scan:** grep the new component for best|cheapest|fastest|#1|guaranteed|top pick → 0; confirm every dollar/number shown traces to a data field.
3. **CTA routing:** every carrier CTA href = `/go/<slug>/...` with `<slug>` present in `affiliate-routes.ts`; neutral CTA = real internal route; no `/pet-insurance/${slug}`; no raw carrier domains.
4. **Disclosure + advice note** present above CTAs and visible in the results state.
5. **Schema:** exactly one BreadcrumbList; SoftwareApplication/HowTo validate.
6. **Edge states:** strict-filter (few matches), no-state-match fallback, mixed/unknown breed — all render gracefully, no empty dead-ends, no invented data.
7. **Gates:** `node scripts/ci/{trust-guard,metadata-policy,link-check}.mjs` green; mobile (≤375px) — wizard + cards stack, no overflow.
8. **Orphan check:** `/tools/insurance-match` linked from `/insurance` + `/tools`.

## 12. Open questions
- **Q1 (data sufficiency):** does `insurance-by-breed.ts` carry enough per-breed coverage signal to weight the shortlist by breed, or should breed only influence copy ("breeds prone to X — confirm hereditary/orthopedic coverage")? → Inspect the data first; if thin, use breed for *coverage-emphasis hints*, not scoring. Default to the safe path.
- **Q2 (placement):** standalone `/tools/insurance-match` page, OR replace/augment the existing estimator? → Recommend a NEW page that links to the estimator (keep both: match = "which carriers," estimator = "what reimbursement math"); they're complementary.
- **Q3 (carrier `/go` coverage):** confirm every carrier in `CARRIERS` has a matching `/go` route in `affiliate-routes.ts`; list any gaps for Monetization (carrier shown in compare, CTA pending).
- These are answerable in-build by reading data; none require Carlo/spend/DNS. If Q2 turns into a strategy fork, surface to CSRO before building.

---
**Recommended FIRST task for the fresh context:** read `apps/vets-co/src/data/insurance-carriers.ts` in full (the `CarrierProfile` shape + all carrier records) and `insurance-by-breed.ts`/`insurance-by-state.ts`, then resolve Q1/Q3 from the data — that determines the filter/score design before any component code is written.
