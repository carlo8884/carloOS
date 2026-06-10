---
from: QA-subagent
to: CSRO
site: fish-com
status: complete
created: 2026-06-01
next_action: Fix P0 metadata blocker; triage P1 schema/orphan items before DNS flip
---

# Fish.com Launch-Quality Audit (COO+QA lane, read-only)

Scope: `apps/fish-com` only. No edits made. Fish is an offer-backed flagship held for
extra premium polish; this audit feeds that bar.

Bottom line: Fish.com **genuinely reads as a tank-control-center**, the calculator suite is
real and well-built, trust posture is clean. There is **one hard CI blocker** (`/calculators`
metadata) and a short list of GEO/internal-linking polish items. Not launch-ready until the
P0 clears.

---

## 1. CI gates (isolated to fish-com)

Real exit codes (verified without pipe masking):

- `link-check.mjs` → **exit 0**, fish-com: clean. Zero broken internal links.
- `trust-guard.mjs` → **exit 0**, clean (1150 TSX scanned portfolio-wide, 0 hits).
- `metadata-policy.mjs` → **exit 1 (FAIL)**. fish-com owns 1 of the 2 enforced violations.

### P0 — `[missing-title] /calculators` (CI BLOCKER)
- File: `apps/fish-com/src/app/calculators/page.tsx`
- It is a redirect-only page (`redirect('/tools')`, lines 7-9) with **no `metadata` export**.
- The redirect itself is **correct and works**: `/calculators` → `/tools` is a permanent
  server redirect (the natural URL users/AI guess; canonical hub is `/tools`). Verified by
  reading the file — `next/navigation` `redirect()` issues the 307/308.
- BUT `metadata-policy.mjs` walks every `page.tsx`, skips only `[slug]` and `/admin`
  (script lines 118-119), and flags this redirect stub as `missing-title` (lines 139-141).
  Because fish-com is `enforce: true` (script line 32), this **fails the build** (exit 1).
- This blocks the whole `verify` workflow and any other PR until green (CLAUDE.md §7
  main-broken recovery).
- Fix options (COO-lane, for a follow-up PR — NOT done here): either (a) add a minimal
  `export const metadata` to the redirect page, or (b) teach `metadata-policy.mjs` to skip
  pages whose only statement is a `redirect(...)`. Option (b) is more robust portfolio-wide
  (petfood-com `/methodology` is the other enforced failure and may be the same class).

`/calculators → /tools` redirect: **CONFIRMED present and correct.**

---

## 2. Trust-bar (QC §1)

Overall: **clean.** No fabricated DVM/vet-tech credentials, no fake author portraits, no
AI-human imagery in audited files. Byline is "Fish.com Editorial" throughout. Homepage trust
block (`page.tsx` 470-496) explicitly states "We don't use AI-generated aquarists or
biologists… don't accept payment for favorable reviews." Cycling estimator explicitly states
"No in-house bench testing is implied or claimed" (`tools/aquarium-cycling-estimator/page.tsx:215`).

### P2 — Soft "built by aquarists" framing (advisory, not a violation)
- `apps/fish-com/src/app/tools/page.tsx:87` — "Free calculators built by aquarists for the
  questions everyone Googles"
- `apps/fish-com/src/app/tools/page.tsx:128` — "Every calculator is built by people who keep tanks."
- These are NOT flagged by `trust-guard.mjs` (its patterns target first-person lab/testing
  claims like "we tested/calibrated/measured", script lines 57-61) and they are NOT fabricated
  credentials. They imply hobbyist authorship, not clinical authority. Defensible. Flagging
  only because this is a premium-polish flagship and "people who keep tanks" makes an
  unverifiable first-person-ish hands-on implication. Low risk; CSRO call whether to soften to
  "built on aquarist literature + manufacturer specs."

No fabricated scope overclaims found in calculators — each explicitly states its limits
(stocking calc: "starting point, not a hard limit"; CO2 calc: carbonate-buffer caveat;
cycling: "estimator, not measurement").

---

## 3. Calculators + problem-diagnosis flow

### All 6 calculators exist and work (read the components, math verified)
- `/tools/aquarium-volume-calculator` — real geometry per shape (rect/cube/bowfront/hex/cylinder),
  US/UK gal + liters + fill-factor + tank-weight. `Calculator.tsx` sound.
- `/tools/stocking-calculator` — surface-area + filtration + style model (explicitly rejects the
  "inch per gallon" rule), volume sanity cap, per-species example counts. Sound.
- `/tools/water-change-calculator` — correct dilution math `(c-t)/(c-s)`, multi-change logic for
  >50%, source-water guardrails (error states). Sound.
- `/tools/co2-calculator` — classic `12.839 × KH × 10^(7-pH)` with toxicity classification +
  buffer caveat. Sound.
- `/tools/heater-wattage-calculator` — 3W/gal per 10°F lift, insulation factor, 25% headroom,
  heater-step snapping, redundancy advice. Sound.
- `/tools/aquarium-cycling-estimator` — per-method baselines + temperature multiplier,
  4-phase timeline, fish-in welfare warning, cited sources. Sound.

Note: CLAUDE-style task brief listed "volume, stocking, water-change, CO2, heater, cycling" =
exactly the 6 present. The homepage page.tsx comment (line 22) references a
`/tools/equipment-recommender` that **does not exist as a route** — but it is only a comment,
not a live link, so **no dead link** (link-check confirms clean).

### Problem-diagnosis flow — exists, distributed (no standalone wizard)
There is **no dedicated interactive diagnostic route** (`find` for diagn/symptom/wizard/
troubleshoot = none). The diagnosis function is served by:
- Homepage 6 "What's happening in your tank?" problem cards (`page.tsx` 61-98, 202-223) —
  cloudy water, gasping, ammonia spike, algae, cycling, stocking → routed to the right guide/calc.
- `/health/fish-disease-guide` + the 25-entry programmatic disease catalog (`/health/[slug]`
  from `diseases.ts`).
- `/water-parameters` scenario blocks (539 lines; "Cycling crash", "Ammonia spike", "pH crash",
  "DO crash", etc.).
- **P2 opportunity** (not a blocker): a single interactive symptom→cause→fix decision tool would
  be the category-defining asset the "tank control center" promise implies. Currently the
  promise is delivered by static cards + articles, which is good but not yet a *tool*.

### First/second-screen surfacing — STRONG
Homepage signature-product placement is correct:
- Screen 1: hero "What's happening in your tank?" + 6 problem cards (problem-first).
- Screen 2: dedicated dark **Calculators banner** ("Decide with math, not guesses · 5 free
  aquarist calculators") with direct buttons to all 5 core calcs (`page.tsx` 246-269).
- Stocking calc also surfaced again at species section (393-397). Nav exposes "Calculators" →
  `/tools` (config line 681). Footer has a Calculators column (config 714-723).
This is a tank-control-center first screen, **not** a generic article library. Good.

---

## 4. Route tree — orphans / hubs / thin / dup

Full route tree read. Hubs present: `/species` (45 static), `/health` (+ 25 programmatic
disease pages via `/health/[slug]`), `/setup`, `/equipment`, `/reviews`, `/tools`, `/water`,
`/water-parameters`. `species/[slug]`, `water-parameters/[slug]`, `equipment/[slug]` are
`notFound()` stubs (intentional 404 for unknown slugs; all real content is static) — fine.

### P1 — `/data` is orphaned + over-prioritized in sitemap
- File: `apps/fish-com/src/app/data/page.tsx` ("Data Partnerships at Fish.com", B2B contact page,
  mailto data@fish.com).
- **Zero inbound internal links** (grep across `apps/fish-com/src/app` = none). Not in nav, not
  in footer, not linked from any page.
- Yet `sitemap.ts:13` lists it at **priority 0.90** (same as core hubs). A B2B contact/orphan
  page at 0.90 wastes crawl budget and dilutes the priority signal.
- Fix (COO-lane follow-up): either link it from the footer "company" area, OR drop sitemap
  priority to ~0.3, OR remove from sitemap. CSRO call on whether the page should ship at all
  for launch.

### P2 — `/water` vs `/water-parameters` topical overlap
- `/water` ("Aquarium Water Chemistry — pH, Ammonia") — heavily inbound-linked (10+ pages,
  "Water Chemistry" is the canonical phrase used everywhere).
- `/water-parameters` ("Aquarium Water Parameters — Targets, Tests, Troubleshooting") — distinct,
  scenario/troubleshooting-oriented (539 lines), but only inbound-linked from the cycling
  estimator + nav + sitemap.
- Distinct titles, distinct angle, NOT a duplicate — but two water hubs risk keyword
  cannibalization and reader confusion. Recommend CSRO decide the canonical hub and ensure
  reciprocal hub→hub linking + clearly differentiated intent (chemistry-explainer vs
  parameter-target/troubleshooting). The nav points to `/water-parameters` while most body
  links point to `/water` — that inconsistency is the real smell.

No thin pages found in the audited set (data 172 / water-parameters 539 / setup 151 lines;
all substantive). No duplicate titles within fish-com.

---

## 5. Breadcrumbs + JSON-LD coverage

### Tool pages — strong, with one gap
- All 6 calculator pages: breadcrumbs (ArticleLayout `breadcrumbs` prop) + `buildHowToSchema` +
  an inline **SoftwareApplication** JSON-LD block (verified in all 6 page.tsx: volume, cycling,
  co2, heater, stocking, water-change). FAQ pages include FAQ schema. This is excellent GEO
  posture for the signature product.

### P1 — `/tools` hub missing ItemList / collection schema
- `apps/fish-com/src/app/tools/page.tsx` ships **only breadcrumb schema** (line 68). It lists 6
  calculators but emits no `ItemList` enumerating them.
- For a flagship whose identity is "calculator suite," the hub is the page most likely to be
  cited by AI Overviews / Perplexity as "the aquarium calculator collection." An `ItemList`
  (or `CollectionPage` + `hasPart`) tying the 6 SoftwareApplications together is the missing
  citation magnet. Recommend adding (COO-lane follow-up).

Hubs (`/health`, `/species`, `/water`, etc.) carry `buildBreadcrumbSchema`. Good baseline.

---

## 6. Internal nav coherence

- Nav (config 677-684): Species, Water Parameters, Aquarium Setup, **Calculators (→/tools)**,
  Fish Health, Reviews. All targets exist. Calculators in primary nav = signature product
  surfaced. Good.
- Footer (config 685-724): Species / Setup / Reviews / Calculators columns; all hrefs resolve.
- link-check.mjs clean → no dead internal links anywhere on fish-com.
- **Coherence smell (see §4 P2):** nav "Water Parameters" → `/water-parameters`, but ~10 body
  RelatedLinks point to `/water`. Pick one canonical water hub and make linking consistent.

---

## 7. First-screen read

**Verdict: tank-control-center, not a generic aquarium article library.** Hero leads with the
diagnostic question, 6 problem cards route by symptom, and the second screen is a dedicated
calculator banner. The article library exists but sits below the product. This matches the
intended flagship identity.

---

## P0 launch-blockers
1. **`metadata-policy.mjs` fails (exit 1)** on `apps/fish-com/src/app/calculators/page.tsx`
   `[missing-title]` — redirect stub has no metadata export. Blocks CI for the whole repo.
   Fix: add metadata to the redirect page, or skip redirect-only pages in the script.

## P1 backlog
1. `/tools` hub missing `ItemList`/collection JSON-LD tying the 6 calculators together —
   biggest GEO miss for the signature product (`apps/fish-com/src/app/tools/page.tsx`).
2. `/data` orphan (zero inbound links) listed at sitemap priority 0.90
   (`apps/fish-com/src/app/data/page.tsx`, `sitemap.ts:13`) — link it, downrank it, or cut it.

## P2 backlog
1. `/water` vs `/water-parameters` two-hub overlap + inconsistent linking (nav→parameters,
   body→water). CSRO decide canonical hub; add reciprocal links + differentiate intent.
2. Consider a true interactive symptom→cause→fix diagnostic tool to fully deliver the
   "tank control center" promise (currently static cards + articles).
3. Soften "built by aquarists / people who keep tanks" copy on `/tools` if CSRO wants the
   flagship trust-language airtight (advisory; not a QC §1 violation).

Evidence: every claim above is from files read this session — `calculators/page.tsx`,
`page.tsx`, `tools/page.tsx`, all 6 `tools/*/Calculator.tsx` + `page.tsx`, `tools/_components/
CalcShell.tsx`, `health/page.tsx`, `health/[slug]/page.tsx`, `species/[slug]/page.tsx`,
`layout.tsx`, `data/page.tsx`, `sitemap.ts`, `packages/config/index.ts` (fish-com block),
`scripts/ci/metadata-policy.mjs`, `scripts/ci/trust-guard.mjs`, plus grep-verified
inbound-link and route-tree checks.
