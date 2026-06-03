---
from: ir
to: csro
status: complete
created: 2026-06-03
next_action: CSRO to accept per-site verdicts and update §8a launch-readiness tracking; Carlo to review FOR CARLO section before DNS-flip decisions
---

# IR Tier-1 Risk Re-Review — Post Visual + Monetization Wave
## Launch-Cohort 5: Dog.com · Fish.com · Ferret.com · PetFood.com · Vets.co

**Review date:** 2026-06-03  
**Reviewer:** IR agent (read-only — no application code modified)  
**HEAD commit:** `3ca3c46b` (main, 2026-06-03)  
**Baseline:** Prior review at `b72ff495` (`ops/handoffs/2026-06-03-ir-tier1-risk-review.md`)  
**Commits reviewed:** PRs #458–#475 (Visual wave, Monetization sweep, IR remediations, Readiness-quiz, Unsplash attribution fix)

---

## CI Evidence

All three automated gates were re-run against HEAD before manual inspection began.

```
node scripts/ci/trust-guard.mjs
  PASS: scanned 1182 TSX files; 0 forbidden-phrase hits.

node scripts/ci/metadata-policy.mjs
  PASS: metadata policy clean across all 10 sites.

node scripts/ci/link-check.mjs
  PASS: 0 broken internal links across all 10 sites.
```

CI is green on all three gates.

---

## What Changed Since the Baseline Review

The following work has shipped since `b72ff495`. Each item is material to this re-review.

| PR | Description | Trust/Valuation Relevance |
|---|---|---|
| #458 | Dog.com: Tools & Calculators section on homepage | New tools; framing assessed below |
| #459 | Vets.co: FTC disclosure above telehealth CTAs + soften vendor superlatives | Remediates prior findings |
| #461 | Vets.co: soften Rx/supplement dosing framing (IR remediation VC-01/VC-02) | Directly remediates prior Mediums |
| #462 | Dog.com: soften Rx dosing/claim framing (IR remediation DC-01/DC-02) | Directly remediates prior Mediums |
| #463 | PetFood.com: non-first-person homepage copy (IR remediation PF-01) | Directly remediates prior Medium |
| #464 | Fish.com: Calculators & Tools feature on homepage | New tools; framing assessed below |
| #465 | PetFood.com: FTC disclosures above commercial CTAs | Disclosure sweep |
| #466 | Ferret.com: Tools & Calculators feature on homepage | New tools; framing assessed below |
| #468 | PetFood.com: Tools & Calculators feature on homepage | New tools; framing assessed below |
| #469 | Vets.co: Tools & References feature on homepage | New tools; framing assessed below |
| #470 | Fish.com: FTC disclosure sweep above commercial CTAs | Disclosure sweep across species + equipment pages |
| #471 | Ferret.com: "Is a ferret right for me?" readiness quiz | New tool; assessed below — no medical claims |
| #472 | PetFood.com: ingredient/species inspect items resolved (not gaps) | Valuation hygiene cleanup |
| #473 | Dog.com + PetFood.com + Vets.co: premium photo coverage on hubs | Photography; attribution assessed below |
| #474 | docs(visual): premium design review | Documentation only |
| #475 | fix(visual): replace uncredited hardcoded Unsplash URLs with manifest-backed StockImage | Critical TOS/attribution fix |

---

## Prior-Finding Remediation Verification

Each Medium finding from the baseline review was verified against HEAD.

### DC-01 — Dog.com heart disease, "BID to TID" Rx frequency
**Status: Remediated (Verified)**  
`apps/dog-com/src/app/health/dog-heart-disease/page.tsx` line 77 now reads:  
> "Dosage and frequency are determined and adjusted by the prescribing veterinarian to achieve the minimum effective dose..."  
The prescription frequency abbreviations ("BID to TID") are gone. Language correctly defers to prescribing vet.

### DC-02 — Dog.com kidney disease, lab-value drug-trigger framing
**Status: Remediated (Verified)**  
`apps/dog-com/src/app/health/dog-kidney-disease/page.tsx` line 66 now reads:  
> "...your veterinarian determines whether blood pressure medication or an ACE inhibitor is indicated based on the full bloodwork and blood pressure picture."  
The specific drug-selection trigger ("UPC over 0.5 warrants treatment with benazepril or enalapril") is gone. Clinical decision framing now correctly deferred to the veterinarian.

### DC-03 — Dog.com, "most prescribed" unsourced superlative
**Status: Remediated (Verified)**  
`apps/dog-com/src/app/reviews/best-dry-dog-food/page.tsx`: "most prescribed" and "Most prescribed brand" spec chip language is gone. Hill's Science Diet now described as "widely used veterinary therapeutic nutrition brand." No superlative claim.

### PF-01 — PetFood.com, "We compare" first-person framing
**Status: Remediated (Verified)**  
`apps/petfood-com/src/app/page.tsx` line 117 now reads:  
> "PetFood.com compares animal-ingredient inclusion, AAFCO posture, recall record, and price per kcal..."  
First-person hands-on claim replaced with brand-attributed third-person framing. Passes QC §1.2.

### VC-01 — Vets.co, melatonin dose range (1-3mg)
**Status: Remediated (Verified)**  
`apps/vets-co/src/app/health/cognitive-dysfunction/page.tsx` line 44 now reads:  
> "Appropriate dose and timing vary by the dog's weight and health status — ask your veterinarian before supplementing."  
Specific mg range removed. Language defers to veterinarian. CSRO confirmation of melatonin exemption is no longer needed — the page is now conservative regardless.

### VC-02 — Vets.co, Anipryl "once daily in the morning" Rx frequency
**Status: Remediated (Verified)**  
`apps/vets-co/src/app/health/cognitive-dysfunction/page.tsx` line 42 now reads:  
> "Dosing frequency and timing are determined by your veterinarian."  
The specific frequency descriptor is gone. Passes QC §1.5.a.

---

## Per-Site Re-Review (HEAD `3ca3c46b`)

---

### 1. Ferret.com (`apps/ferret-com`)

**Verdict: Clear (unchanged from baseline)**

#### Prior-session changes verified
- Homepage redesign (PR #466): CSS-only visual wave. No hardcoded Unsplash URLs introduced. All image rendering via `StockImage manifestKey="ferret-com:hero"`. Attribution-safe.
- Cost calculator (PR #466 / existing): Verified at `apps/ferret-com/src/app/tools/cost-calculator/Calculator.tsx`. Financial estimator only. No medical claims. Includes explicit "Budget for illness separately" callout and "Estimator only. Defaults are editable starting points, not quoted prices." disclaimer. Clean.
- Readiness quiz (PR #471): Verified at `apps/ferret-com/src/app/tools/readiness-quiz/Quiz.tsx`. 10-question self-assessment covering legality, time, housing, budget, vet access, commitment. No medical diagnosis language. No fabricated statistics. Output tiers are calibrated ("Significant barriers present," "Not quite yet," "Fit with preparation," "Strong fit") with explicit disclaimer: "This quiz is a self-assessment tool, not a purchase recommendation or veterinary advice." No affiliate CTAs. Clean trust posture.
- No /go/ routing leakage on tool pages.
- No new hardcoded Unsplash URLs introduced.

#### Trust-bar (QC §1): Clean
#### Prescription/medical framing: N/A (no Rx content on ferret-com)
#### New-tool trust framing: Clean — all tools explicitly labeled estimates/self-assessments; no diagnostic claims
#### Monetization safety: Clean — all affiliate CTAs route via `/go/`; disclosures rendered above commercial surfaces
#### Valuation hygiene: Clean — CI green; no orphan tools

**No findings. Site is clear.**

---

### 2. Fish.com (`apps/fish-com`)

**Verdict: Clear (upgraded from baseline)**

#### Prior-session changes verified
- FTC disclosure sweep (PR #470): Verified on species/betta-fish page and equipment/[slug] page. `AffiliateDisclosure` renders inline before commercial CTAs. All CTAs route via `/go/amazon-brand/...` and `/go/chewy-brand/...` patterns. No direct external URLs.
- Unsplash attribution (PR #475): The homepage previously used hardcoded `images.unsplash.com` URLs rendered via raw `<Image>` with no visible attribution. PR #475 converted these to `<StockImage manifestKey="...">` components, which render attribution automatically via the manifest/ImageCard pipeline. All fish species homepage thumbnails are now attribution-safe.
- Visual wave (PR #464): Calculators & Tools section added to homepage. No new trust-bar risks. Calculator links route to existing `/tools/` pages. All tool framing previously verified as estimate-only.
- No consumer-facing medication dose guidance on fish health pages.
- No fake credentials, no first-person test claims.

#### Trust-bar (QC §1): Clean
#### Prescription/medical framing: N/A (fish health pages are informational; no Rx drug guidance found)
#### New-tool trust framing: Previously verified; no changes to calculator logic in this wave
#### Monetization safety: Clean post-PR #470 sweep. Spot-check confirmed: AffiliateDisclosure above commercial CTAs; all CTAs via `/go/`
#### Valuation hygiene: CI green. Unsplash attribution remediated (PR #475). No orphan pages introduced.

**No findings. Site is clear. Attribution issue from prior wave is resolved.**

---

### 3. PetFood.com (`apps/petfood-com`)

**Verdict: Clear (upgraded from Minor)**

#### Prior-session changes verified
- PF-01 remediated (PR #463): Verified. "We compare" → "PetFood.com compares" — brand-attributed, third-person. Passes QC §1.2.
- FTC disclosure sweep (PR #465): Verified on `life-stage/[slug]/page.tsx` (line 470: `<AffiliateDisclosure variant="inline" siteId="petfood-com" />`), `brands/blue-buffalo-evaluation/page.tsx` (line 124: disclosure above BuyBox), `brands/hills-vs-royal-canin/page.tsx` (line 132: disclosure above BuyBox), `brands/orijen-vs-acana-comparison/page.tsx` (imports and renders AffiliateDisclosure). All commercial surfaces now have inline disclosure above CTAs.
- Homepage (PR #468): Tools & Calculators section added. Homepage has no ReviewCard or BuyBox — editorial/reference only. Disclosure block in homepage body correctly describes affiliate-link scope. No AffiliateDisclosure component needed on the homepage itself (no commercial CTAs present).
- Portion calculator (existing, verified): Labeled "This is an estimate, not a prescription." Includes vet-deferral language: "Confirm your pet's target weight and appropriate daily intake with your veterinarian before making feeding changes." Weight-loss/obese-prone factors carry note: "should be used only under veterinary supervision." Clean.
- Therapeutic/condition-specific diet pages: No affiliate CTAs confirmed in prior review; unchanged in this wave.

#### Trust-bar (QC §1): Clean
#### Prescription/medical framing: Clean — medicated diet pages remain informational-only with no commercial CTAs
#### New-tool trust framing: Clean — portion calculator is appropriately hedged; no diagnostic language
#### Monetization safety: Clean — FTC disclosure sweep complete; all buy-boxes preceded by inline AffiliateDisclosure; no direct external links
#### Valuation hygiene: CI green. No thin pages introduced. No duplicate routes.

**No findings. Site is clear. PF-01 remediated.**

---

### 4. Vets.co (`apps/vets-co`)

**Verdict: Clear (upgraded from Minor)**

#### Prior-session changes verified
- VC-01 and VC-02 remediated (PR #461): Both Rx/supplement framing findings fully resolved. Verified above.
- FTC disclosure + vendor superlatives (PR #459): Telehealth page verified — `AffiliateDisclosure variant="inline"` renders before ReviewCards. All CTAs route via `/go/vetster/telehealth`, `/go/askvet/telehealth`, `/go/chewy/chewy-connect`. No direct external vendor links.
- Pet insurance funnels page (PR #459 / existing): Verified at `apps/vets-co/src/app/(funnels)/pet-insurance/page.tsx`. `AffiliateDisclosure` renders at the top of the page (line 55: `<AffiliateDisclosure variant="inline" siteId="vets-co" />`). All carrier CTAs route via `/go/[vendor]/home?s=...` pattern. No direct external carrier links.
- Homepage (PR #469): Tools & References section added. Links to `/tools/insurance-reimbursement-estimator`, `/emergency-triage-card`, `/glossary`. No new trust-bar risks. No commercial CTAs on the homepage itself.
- Medications hub page (`apps/vets-co/src/app/medications/page.tsx`): New page verified. Explicitly states "Why we do not publish doses" — the policy is surfaced in the UI. Defers all prescribing decisions to the veterinarian. Educational-only. Passes QC §1.5.a with explicit on-page citation of that posture.
- Unsplash attribution (Vets.co homepage): Golden Retriever breed portrait uses hardcoded URL but has the explicit `<aside aria-label="Photo credits">` attribution block crediting Unsplash contributors. Attribution-safe; not converted by PR #475 since attribution was already present.
- Diagnostics page (`apps/vets-co/src/app/diagnostics/page.tsx`): No credential claims, no affiliate CTAs confirmed.
- Vet directory: All placeholder listings remain correctly `noIndex: true`. Not changed.

#### Trust-bar (QC §1): Clean
#### Prescription/medical framing: Clean — medications hub explicitly refuses to publish dosing; CDS page remediations verified
#### New-tool trust framing: Insurance reimbursement estimator is financial arithmetic, not medical — clean
#### Monetization safety: Clean — disclosures above all commercial CTAs; `/go/` routing on all carrier links
#### Valuation hygiene: CI green. No orphan pages. Medications hub does not carry any buy-boxes or affiliate CTAs.

**No findings. Site is clear. VC-01 and VC-02 remediated.**

---

### 5. Dog.com (`apps/dog-com`)

**Verdict: Clear (upgraded from Minor)**

#### Prior-session changes verified
- DC-01, DC-02 remediated (PR #462): Both Rx dosing findings fully resolved. Verified above.
- DC-03 remediated (PR #462): "Most prescribed" superlative removed. Verified above.
- Unsplash attribution (PR #475): Dog.com homepage breed cards previously used hardcoded `images.unsplash.com` URLs rendered via raw `<Image>` with no visible attribution. PR #475 converted all four breed portrait cards to `<StockImage manifestKey="dog-com:breed-[breed]">` components. Attribution-safe.
- Dog calorie calculator (existing, verified): Labeled "An estimate, not a prescription." Input hint: "Use your dog's target or current healthy weight, as assessed by your veterinarian." Disclaimer: "Energy needs vary widely by individual; confirm your dog's target weight and intake with your veterinarian." Clean.
- Dog age calculator (existing, verified): Labeled "An approximation. Aging varies by breed, size, and individual health." "Not a substitute for veterinary assessment." Life-stage labels explicitly noted as "Qualitative label; varies by individual." Clean.
- Homepage (PR #458): Tools & Calculators section added. No new trust-bar risks. No commercial CTAs in the tools section.
- Breeds hub, breed pages, conditions page, compare pages, symptoms page, tools hub (PR #473): Premium photo coverage on breed/hub pages. No fake credential claims on any new pages. All new photo rendering via `StockImage` with manifest-backed attribution.
- Health pages (heart disease, kidney disease) re-verified: Rx framing remediations confirmed.
- `apps/dog-com/src/app/health/golden-retriever-health/page.tsx` and `labrador-health/page.tsx`: New pages added in PR #473. No fake DVM credentials. No Rx dosing. MedicalWebPage schema author is `Organization`. Clean.

#### Trust-bar (QC §1): Clean
#### Prescription/medical framing: Clean — all prior Rx framing findings remediated; new health pages do not introduce dose ranges
#### New-tool trust framing: Clean — calorie and age calculators are appropriately hedged; no diagnostic language; vet-deferral explicit
#### Monetization safety: Clean — dual disclosure posture (inline + footer) maintained; no affiliate CTAs in health pages
#### Valuation hygiene: CI green. Unsplash attribution remediated. No orphan pages.

**No findings. Site is clear. DC-01, DC-02, DC-03 all remediated.**

---

## Summary Matrix

| Site | Prior Verdict | Re-Review Verdict | Tier-1 Risk? | Findings |
|---|---|---|---|---|
| **Ferret.com** | Clear | **Clear** | No | 0 |
| **Fish.com** | Clear | **Clear** | No | 0 (prior attribution risk resolved by PR #475) |
| **PetFood.com** | Minor | **Clear** | No | 0 (PF-01 remediated) |
| **Vets.co** | Minor | **Clear** | No | 0 (VC-01, VC-02 remediated) |
| **Dog.com** | Minor | **Clear** | No | 0 (DC-01, DC-02, DC-03 remediated; attribution fixed by PR #475) |

**All five cohort sites are Clean at HEAD `3ca3c46b`. No Tier-1 trust or valuation risk identified. All prior Medium and Low findings are remediated or superseded.**

---

## New-Tool Trust Framing Assessment

The wave introduced the following interactive tools. All were read and assessed.

| Tool | Site | Assessment |
|---|---|---|
| Dog Calorie Calculator | Dog.com | **Clean.** "An estimate, not a prescription." Vet-deferral explicit. WSAVA/AAHA-sourced factors, no fabricated values. |
| Dog Age Calculator | Dog.com | **Clean.** "An approximation." "Not a substitute for veterinary assessment." Life-stage labels marked "qualitative." |
| Ferret Cost Calculator | Ferret.com | **Clean.** Financial estimator only. Illness caveat prominent ("Budget for illness separately"). "Estimator only, not quoted prices." |
| Ferret Readiness Quiz | Ferret.com | **Clean.** Self-assessment, not diagnostic. No medical claims. Calibrated tier labels. Explicit disclaimer: "not a purchase recommendation or veterinary advice." |
| Portion & Calorie Calculator | PetFood.com | **Clean.** "An estimate, not a prescription." Vet-deferral explicit. Weight-loss/obese-prone options marked vet-supervised. |
| Insurance Reimbursement Estimator | Vets.co | **Clean.** Financial arithmetic (NAIC/NAPHIA math). No clinical framing. |

No tool implies medical diagnosis. No tool carries a commercial CTA without prior disclosure. No tool uses fabricated authority figures or invented statistics.

---

## Glossary (DefinedTermSet) Assessment

New glossaries were added at Dog.com, Fish.com, PetFood.com, Vets.co, and Ferret.com. CI metadata-policy and trust-guard both pass. No fake clinical author attributions in DefinedTermSet schema. No diagnostic claims in definition entries. Clean across all five sites.

---

## Unsplash / Photography Attribution Assessment

The prior review cycle exposed a pattern where visual wave additions used hardcoded `images.unsplash.com` URLs in raw `<Image>` components (bypassing the `StockImage` attribution pipeline). This was identified during this re-review and confirmed remediated by PR #475 before this report was finalized.

**Current state at HEAD:**
- Dog.com, Fish.com: All homepage featured breed/species cards now use `<StockImage manifestKey="...">`. Attribution renders via the manifest/ImageCard pipeline. When `sync-images.mjs` runs on Carlo's Mac, photographer names will populate. Until then, `curated: true` entries render "Source: Unsplash" linked to the photo page — compliant with Unsplash License.
- Vets.co: Has had an explicit `<aside aria-label="Photo credits">` attribution block since the initial visual wave. Attribution was already Unsplash-TOS-compliant before PR #475.
- Ferret.com, PetFood.com: No hardcoded Unsplash URLs introduced in this wave (both use `StockImage` or CSS-only treatments).
- ogImage / schema `imageUrl` fields: PR #475 also removed 12 non-rendered Unsplash references from metadata and schema `imageUrl` fields. These are not consumer-facing but were cleaned for hygiene.

**Outstanding hygiene item (Low — not a blocker):** Nine photo entries in `image-manifest.json` (for Dog.com and Fish.com breed/species thumbnails) carry `curated: true` without a `photographer` field. The `StockImage` component correctly handles this by rendering "Source: Unsplash" rather than a placeholder name. This is honest and TOS-compliant. The photographer field will be populated when `node scripts/sync-images.mjs` runs on Carlo's Mac (requires `UNSPLASH_ACCESS_KEY` env var). This is a pending Visual Bot / Carlo data-sync action, not a launch blocker.

---

## Monetization Safety Summary

FTC disclosure sweeps (PRs #459, #465, #470) covered all major commercial surfaces across the five cohort sites. Spot-checks confirm:

| Site | Disclosure Method | CTA Routing | Status |
|---|---|---|---|
| Dog.com | Dual: inline `AffiliateDisclosure` + Footer | All via `/go/` | **Clean** |
| Fish.com | Inline `AffiliateDisclosure` before ReviewCards | All via `/go/amazon-brand/` and `/go/chewy-brand/` | **Clean** |
| Ferret.com | Sitewide footer via `showAffiliateDisclosure` + inline on diet pages | All via `/go/` | **Clean** |
| PetFood.com | Inline `AffiliateDisclosure` before BuyBox on brand pages; editorial hub pages have no CTAs | All via `/go/` on brand pages | **Clean** |
| Vets.co | Inline `AffiliateDisclosure` on telehealth, insurance, and funnels pages | All via `/go/[vendor]/...` | **Clean** |

No direct-to-vendor external affiliate links found on any cohort site. All clinical/medicated product mentions remain informational-only with no purchase CTAs.

---

## FOR CARLO

**Items requiring his decision or awareness before DNS-flip:**

1. **No Tier-1 blockers.** No issue found at HEAD requires Carlo's intervention before launch decisions.

2. **Photography sync (Carlo action — not a blocker):** Nine image-manifest entries across Dog.com and Fish.com carry `curated: true` without a photographer name because sandbox cannot reach the Unsplash API. The pages render "Source: Unsplash" (TOS-compliant) rather than the photographer's name. To display full attribution, run `node scripts/sync-images.mjs --force` on your Mac with the `UNSPLASH_ACCESS_KEY` env var set. This should happen before launch for best Unsplash-partner hygiene, but it is not a legal or trust risk.

3. **Melatonin exemption (resolved — no Carlo decision needed):** Prior review asked Carlo to confirm whether melatonin supplementation guidance falls within QC §1.5.a. The Vets.co CDS page was remediated to remove specific mg dosing entirely, so the exemption question is moot.

4. **DC-04 / omega-3 dose ranges (confirmed within exemption):** Dog.com health pages carry EPA+DHA dose guidance (20-55 mg/kg) with citations. These remain present and are confirmed within the QC §1.5.a exemption for nutritional/supplement intake guidance for non-prescription items. No Carlo action needed.

---

## Per-Site Launch-Readiness Verdict (§8a Bar)

| Site | §8a Verdict |
|---|---|
| **Ferret.com** | **Launch-ready** — trust-guard clean, metadata clean, link-check clean, tools appropriately hedged, attribution safe, affiliate disclosures present, zero /go/ leakage, FTC coverage complete |
| **Fish.com** | **Launch-ready** — all prior-wave attribution risks resolved (PR #475), FTC disclosure sweep complete, CI green, tools previously clear |
| **PetFood.com** | **Launch-ready** — PF-01 remediated, FTC disclosure sweep complete, therapeutic diet pages correctly non-commercial, tools hedged, CI green |
| **Vets.co** | **Launch-ready** — VC-01 and VC-02 remediated, Anipryl and melatonin dosing framing corrected, medications hub explicitly refuses to publish dosing, disclosure above all commercial CTAs, CI green |
| **Dog.com** | **Launch-ready** — DC-01/DC-02/DC-03 all remediated, attribution fixed, calorie/age calculators appropriately hedged, dual-disclosure posture maintained, CI green. Acquirer diligence should proceed on the omega-3 dose exemption (DC-04) — it is within policy and cited, but IR notes its presence for disclosure to any due-diligence team |

**All five sites are at or above the §8a launch-quality bar on trust, monetization safety, and valuation hygiene at HEAD `3ca3c46b`.** The outstanding photography sync item is a hygiene improvement, not a barrier.

---

*This review is read-only. No application code was modified. All findings are Verified per QC §6 (file path + commit + observed value + expected value documented above). HEAD commit: `3ca3c46b16167696c122481dd1e73093e33087fc`.*
