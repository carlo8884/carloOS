---
from: IR
to: CSRO / Carlo
status: DRAFT -- awaiting CSRO review
created: 2026-06-03
next_action: CSRO to triage findings and assign fix owners; Carlo to review before DNS-flip
---

# IR Tier-1 Trust/Valuation Risk Review
## Launch-Cohort 5 -- Dog.com, Fish.com, Ferret.com, PetFood.com, Vets.co

**Base commit:** `b72ff4950653f3f7e28935bc86d2a073a7e581af` (main, 2026-06-03)
**Review date:** 2026-06-03
**Reviewer:** IR agent (read-only -- no application code modified)

---

## CI Evidence

All three automated gates were run against the base commit before manual inspection began.

```
node scripts/ci/trust-guard.mjs
  PASS: scanned 1180 TSX files; 0 forbidden-phrase hits.

node scripts/ci/metadata-policy.mjs
  PASS: metadata policy clean across all 10 sites.

node scripts/ci/link-check.mjs
  PASS: 0 broken internal links across all 10 sites.
```

CI is green. Manual inspection below covers patterns the automated scripts do not catch: supplement dose notation, prescription drug frequency framing, unsubstantiated superlatives, sample-data disclosure adequacy, and clinical buy-box completeness.

---

## Per-Site Review

---

### 1. Ferret.com (`apps/ferret-com`)

**Verdict: Clear**

#### Trust-bar (QC SS1)
- No fake DVM or vet-credential bylines. All bylines use "Ferret.com Editorial" or "Editorial team". No "Reviewed by Dr. X" language anywhere in the site.
- No "Tested . {Month}" or "Expert Tested" eyebrow badge language. Product selection copy on all diet pages explicitly self-disclaims: "Documented-spec selection, not a hands-on test" -- an unusually strong trust posture that exceeds portfolio baseline.
- No "vet-reviewed species profiles" or similar unearned authority claims on the homepage or hub pages.
- Homepage trust-bar: "Research-anchored content / Exotic-vet-respectful guidance / Honest product recommendations / No marketplace listings here" -- all defensible.
- Homepage footer note explicitly states: "Ferret.com publishes general reference, not individualized veterinary advice."

#### Disclosures
- `/disclosure` page exists at `apps/ferret-com/src/app/disclosure/page.tsx`. FTC language present ("if you click one and buy something, we may earn a commission at no cost to you").
- `showAffiliateDisclosure` prop set in `apps/ferret-com/src/app/layout.tsx` -- Footer renders disclosure sitewide.
- `/editorial-standards` page exists and explicitly states: "We do not accept gifts of products in exchange for favorable coverage."

#### Monetization safety
- All affiliate CTAs route via `/go/` pattern (e.g. `/go/wysong/epigen-90`, `/go/chewy-brand/...`). No direct external affiliate link leakage found.
- Buy-boxes appear only on diet pages (kibble, raw prey, water bowls, food toppers, supplements). None on health pages. None on medicated or prescription-adjacent products.
- `AffiliateDisclosure` component imported and rendered on all monetized diet pages.

#### Claims
- No unsupported superlatives found.
- Medical content frames treatment as veterinarian-directed (health hub intro: "These reference pages do not replace veterinary consultation"). Condition pages contain no mg/kg dose ranges for prescription drugs.

#### Thin/orphan/broken
- CI link-check green. Health hub lists 20 condition slugs; spot-checked, all linked correctly. No orphan pages identified. No duplicate titles.

#### Schema/indexing
- `robots.ts` and `sitemap.ts` present. Organization + WebSite schema on homepage. BreadcrumbList on hub pages. ItemList schema on health hub.

**No findings. Site is clean.**

---

### 2. PetFood.com (`apps/petfood-com`)

**Verdict: Minor**

#### Trust-bar (QC SS1)
- No fake DVM bylines, no "Reviewed by Dr. X" language. No "Tested" badge language.
- Homepage trust posture is explicitly evaluative: "Consumer Reports of pet food" framing supported by methodology page at `/guides/methodology`.
- Editorial byline on review pages: "PetFood.com Editorial".

#### Disclosures
- `/disclosure` page exists at `apps/petfood-com/src/app/disclosure/page.tsx`.
- `showAffiliateDisclosure` prop set in `apps/petfood-com/src/app/layout.tsx`.
- `/editorial-standards` page exists with no-paid-placement language.

#### Monetization safety
- Affiliate buy-boxes on supplements and food-comparison pages use `/go/` routes correctly.
- Therapeutic/condition-specific diet pages (`/diets/kidney-disease-diets`, `/diets/diabetic-diets`, `/diets/cardiac-and-low-sodium-diets`, and the full diets cluster) have NO ReviewCards and NO affiliate CTAs -- they are informational only. Correct per QC SS1.5.b.
- Life-stage pages and supplement pages with ReviewCards cover non-prescription, non-clinical products -- within SS1.5.a exemption.

#### Claims -- Minor finding

**Finding PF-01 (Medium, Verified):**
`apps/petfood-com/src/app/page.tsx` line 117:
> "We compare animal-ingredient inclusion, AAFCO posture, recall record, and price per kcal"

This first-person "We compare" phrasing implies the editorial team conducted the comparison in-house. The underlying comparison page (`/brands/orijen-vs-acana-comparison`) is based on published label data, not in-house lab testing. This is a minor claim-framing issue -- the first-person phrasing reads closer to a hands-on test claim than the portfolio-standard "documented-spec comparison, not a hands-on test" posture used on every ferret-com review.

#### Thin/orphan/broken
- CI clean. Conditions, feeding, diets, supplements, and compare hubs all present.

#### Schema/indexing
- `robots.ts` and `sitemap.ts` present. Article schema, FAQPage, and BreadcrumbList present per PRs #280, #295, #276.

**One minor finding (PF-01). Does not block launch. Recommend softening the "We compare" phrasing to third-person to match the portfolio-wide documented-spec posture.**

---

### 3. Vets.co (`apps/vets-co`)

**Verdict: Minor**

#### Trust-bar (QC SS1)
- All bylines use "Vets.co Editorial" with `reviewedBy="Editorial team"`. No fake DVM bylines.
- Disclosure page explicitly states: "content produced by a generalist editorial team -- and not under fabricated DVM, DACVIM, or other specialist credentials."
- Specialist pages (`/specialists/[slug]`) contain a source comment confirming: "No DVM or DACV* fake credential strings."
- Vet directory: ALL vet listings are obviously-fictional placeholders ("Sample Veterinary Clinic of Manhattan", "100 Example Avenue", "(555) 010-0101"). All directory pages carry `noIndex: true`. Correct risk management.
- Medications `[slug]/page.tsx` template explicitly refuses to publish drug dosing: "Vets.co does not publish dosing because it is unsafe to generalize." Correct per QC SS1.5.

#### Findings

**Finding VC-01 (Medium, Verified):**
`apps/vets-co/src/app/health/cognitive-dysfunction/page.tsx` line 44:
> "Melatonin: For dogs with disrupted sleep-wake cycles -- 1-3mg 30 minutes before the desired sleep time."

Melatonin is a non-prescription supplement. QC SS1.5.a exempts "nutritional/supplement intake guidance for non-prescription items (e.g. omega-3 EPA/DHA, glucosamine)." Melatonin is likely within this exemption but is not named in the examples. The page notes "verify appropriate dose with your veterinarian." Flag for COO to confirm melatonin falls within SS1.5.a; if not, the mg range should be removed.

**Finding VC-02 (Medium, Verified):**
`apps/vets-co/src/app/health/cognitive-dysfunction/page.tsx` line 42:
> "Anipryl (selegiline): [...] Oral tablet once daily in the morning."

Anipryl is an FDA-approved prescription drug. This line describes an administration frequency for a prescription drug. No mg/kg range is given. QC SS1.5 prohibits dose patterns including "PO/IV q12h"; "once daily in the morning" is an equivalent plain-English frequency descriptor. The framing is educational and directs readers to their vet, but the frequency detail for a prescription drug is borderline. Recommend removing the specific frequency and replacing with direction to the prescribing veterinarian.

#### Disclosures
- `/disclosure` page scopes monetization correctly: "pet insurance and veterinary telehealth referrals only -- no retail product affiliate links, no sponsored editorial, no paid reviews."
- `showAffiliateDisclosure` set in layout.

#### Monetization safety
- Insurance and telehealth pages have ReviewCards -- appropriate commercial context for these categories.
- No affiliate buy-boxes on health, medication, or diagnostic pages. Zero `/go/` routes confirmed in `apps/vets-co/src/app/health/`.

#### Schema/indexing
- `robots.ts`, `sitemap.ts` present. Breed x state insurance matrix carries `noIndex` gate per PR #269. MedicalWebPage schema on health pages. BreadcrumbList from ArticleLayout.

**Two medium findings (VC-01, VC-02). Neither is a Tier-1 trust risk. COO should confirm melatonin exemption and optionally soften Anipryl frequency framing. Not a launch blocker.**

---

### 4. Fish.com (`apps/fish-com`)

**Verdict: Clear**

#### Trust-bar (QC SS1)
- No fake credentials, no "Reviewed by" expert claims. Bylines use "Fish.com Editorial".
- Homepage source comment confirms trust posture was audited and cleaned: "Removed 'Expert'-style review claims; replaced with 'Practical Aquarium Guides'." The live version on main reflects this.
- No first-person hands-on testing claims found anywhere in the site.
- No consumer-facing medication dose guidance for fish health treatments.

#### Disclosures
- `/disclosure` page exists at `apps/fish-com/src/app/disclosure/page.tsx`.
- `showAffiliateDisclosure` prop set in `apps/fish-com/src/app/layout.tsx`.
- `/editorial-standards` page exists.

#### Monetization safety
- Equipment and review pages use `/go/` affiliate routes. Spot-checked: best-aquarium-heaters, best-aquarium-filters, best-aquarium-lighting -- all route via `/go/`.
- Fish medication categories mentioned in health pages as informational references only, without purchase CTAs.

#### Claims
- "most recommended all-in-one fertilizer in the hobby" on best-planted-tank-fertilizers is colloquial hobby-community language, not an invented statistical claim. Not a trust-bar risk.

#### Thin/orphan/broken
- CI clean. Species hub has 30+ species pages, all linked. Setup, water, equipment, health, tools hubs all present.

#### Schema/indexing
- `robots.ts`, `sitemap.ts` present. HowTo schema on `/setup` (PR #289). Product schema on heaters and lighting pages (PR #287). JSON-LD on all 5 calculators (PR #180).

**No findings. Site is clean.**

---

### 5. Dog.com (`apps/dog-com`)

**Verdict: Minor**

#### Trust-bar (QC SS1)
- All bylines use "Dog.com Editorial" with `reviewedBy="Editorial team"`. No fake DVM claims anywhere.
- Conditions hub source comment: "No fabricated DVM credentials, no first-person hands-on claims."
- Editorial standards page: "We don't claim hands-on testing we haven't done."
- Dual-disclosure layout: AffiliateDisclosure rendered inline above the fold AND in the Footer -- the strongest disclosure posture in the portfolio.

#### Findings

**Finding DC-01 (Medium, Verified):**
`apps/dog-com/src/app/health/dog-heart-disease/page.tsx` line 77:
> "Furosemide (Lasix): Loop diuretic -- removes excess fluid from the lungs. Dosage adjusted to the minimum effective dose (too much causes dehydration and kidney stress). BID to TID dosing for most CHF dogs."

"BID to TID" are prescription-frequency abbreviations (twice daily / three times daily). QC SS1.5 prohibits dose-range patterns including "PO/IV q12h"; "BID to TID" is equivalent clinical shorthand. No mg/kg range is given, but the frequency descriptor for a prescription diuretic is borderline under the policy and reads as clinical-protocol language to an acquirer reviewer. Recommend softening.

**Finding DC-02 (Medium, Verified):**
`apps/dog-com/src/app/health/dog-kidney-disease/page.tsx` line 66:
> "Target blood pressure under 140 mmHg systolic; treat with amlodipine when persistently elevated. UPC over 0.5 warrants treatment with benazepril or enalapril -- ACE inhibitors reduce intraglomerular pressure and slow protein loss and progression."

These statements name specific prescription drugs with specific lab-value thresholds as triggers for treatment selection. No mg/kg dose is given, but the framing ("UPC over 0.5 warrants treatment with benazepril or enalapril") implies the reader can use the lab value to select the drug class. This is the most clinical-decision-support-looking passage in the portfolio and is the highest-priority fix. Recommend removing the drug names from the lab-value-trigger framing.

**Finding DC-03 (Low, Verified):**
`apps/dog-com/src/app/reviews/best-dry-dog-food/page.tsx` lines 180 and 186:
> "is the most prescribed therapeutic nutrition in veterinary medicine"
> Spec chip value: "Most prescribed brand"

Per QC SS1.4, "most prescribed" requires an inline source citation or should be softened. The claim is directionally accurate but unsourced. Low reputational risk; add a source pointer or soften to "among the most widely prescribed brands."

**Finding DC-04 (Low, Verified -- within exemption):**
- `apps/dog-com/src/app/health/dog-arthritis/page.tsx` line 57: "Dose: 20-55mg/kg combined EPA+DHA daily"
- `apps/dog-com/src/app/nutrition/senior-dog-nutrition/page.tsx` line 52: "20-55mg/kg combined EPA+DHA daily"
- `apps/dog-com/src/app/health/dog-allergies/page.tsx` line 112: "dosed at 50 to 100 mg combined EPA+DHA per kg"

All three are omega-3 EPA/DHA supplement dose guidance with citations (Roush et al., JAVMA 2010). QC SS1.5.a explicitly exempts "nutritional/supplement intake guidance for non-prescription items (e.g. omega-3 EPA/DHA, glucosamine)." These are compliant. Noted for awareness only.

#### Monetization safety
- Prescription flea/tick page (`best-flea-tick-prevention`): all CTAs route to `/find-a-vet`, not to an affiliate purchase link. Correct posture for prescription products.
- Prescription heartworm prevention page (`best-heartworm-prevention`): all CTAs route to `/find-a-vet`. Correct.
- No affiliate CTAs anywhere in `apps/dog-com/src/app/health/`.
- Non-prescription review pages (food, beds, harnesses, crates, slow feeders, GPS trackers, joint supplements, dental chews) all use `/go/` routes as expected.

#### Disclosures
- `/disclosure`, `/editorial-standards`, `/legal/privacy-policy`, `/legal/terms`, `/legal/affiliate-disclosure` all present.

#### Thin/orphan/broken
- CI clean. Breeds, conditions, training, health, symptoms, compare, which-pet, nutrition hubs all present and linked.

#### Schema/indexing
- `robots.ts`, `sitemap.ts` present. MedicalWebPage on 40/40 health pages (PR #284). BreadcrumbList from ArticleLayout. Duplicate title check clean.

**Two medium findings (DC-01, DC-02) and two low findings (DC-03, DC-04 within exemption). No Tier-1 trust risk. The medium findings involve prescription drug framing that borders on clinical decision-support; both should be softened before high-stakes acquirer diligence.**

---

## Summary Matrix

| Site | Verdict | Tier-1 Risk? | Findings |
|---|---|---|---|
| **Ferret.com** | Clear | No | 0 |
| **Fish.com** | Clear | No | 0 |
| **PetFood.com** | Minor | No | 1 medium (PF-01) |
| **Vets.co** | Minor | No | 2 medium (VC-01, VC-02) |
| **Dog.com** | Minor | No | 2 medium (DC-01, DC-02), 2 low (DC-03, DC-04) |

**No site has a Tier-1 trust or valuation risk at base commit `b72ff495`. All findings are Medium or Low severity.**

---

## Go / Hold Recommendations

Per QC SS7: No-Go if any Blocker open; Conditional Go if Mediums are open with triaged owners and follow-up PRs.

| Site | Recommendation | Rationale |
|---|---|---|
| **Ferret.com** | **Go** | Zero findings. CI green. Trust posture is the portfolio standout. |
| **Fish.com** | **Go** | Zero findings. CI green. |
| **PetFood.com** | **Conditional Go** | One medium (PF-01). One-line homepage fix. Assign to COO. |
| **Vets.co** | **Conditional Go** | Two medium findings. Neither is a Tier-1 risk. COO confirms melatonin exemption and softens Anipryl frequency framing. Placeholder vet directory correctly noindexed. |
| **Dog.com** | **Conditional Go** | Two medium findings (DC-01, DC-02) involve prescription drug framing that borders on clinical decision-support. Both are targeted sentence-level fixes. Assign to COO before any acquirer diligence. |

---

## What Must Be Fixed Before Launch

### P1 -- Fix before DNS-flip

**DC-01** `apps/dog-com/src/app/health/dog-heart-disease/page.tsx` line 77
Replace: "BID to TID dosing for most CHF dogs."
With: "dosed per your cardiologist's prescription, typically multiple times daily."

**DC-02** `apps/dog-com/src/app/health/dog-kidney-disease/page.tsx` line 66
Replace: "Target blood pressure under 140 mmHg systolic; treat with amlodipine when persistently elevated. UPC over 0.5 warrants treatment with benazepril or enalapril -- ACE inhibitors reduce intraglomerular pressure and slow protein loss and progression."
With: "Target blood pressure and urinary protein are monitored at each recheck; your veterinarian determines whether blood pressure medication or an ACE inhibitor is indicated based on the full bloodwork and blood pressure picture."

### P2 -- Fix before acquirer diligence (pre-letter-of-intent)

**VC-02** `apps/vets-co/src/app/health/cognitive-dysfunction/page.tsx` line 42
Replace: "Oral tablet once daily in the morning."
With: "An oral prescription medication given on a consistent schedule -- your veterinarian determines the appropriate dose and timing."

**PF-01** `apps/petfood-com/src/app/page.tsx` line 117
Replace: "We compare animal-ingredient inclusion..."
With: "This reference compares animal-ingredient inclusion..." (or equivalent third-person framing)

### P3 -- Backlog (low risk)

**DC-03** `apps/dog-com/src/app/reviews/best-dry-dog-food/page.tsx` lines 180/186
Add a source pointer for "most prescribed therapeutic nutrition" or soften to "among the most widely prescribed brands."

**VC-01** Confirm with Carlo that melatonin supplement dosing (1-3mg) falls within the SS1.5.a exemption. If it does not, remove the specific mg range from `apps/vets-co/src/app/health/cognitive-dysfunction/page.tsx` line 44.

---

*This review is read-only. No application code was modified. All findings are Verified per QC SS6 (file path + line + observed value + expected value documented above). Base commit: `b72ff4950653f3f7e28935bc86d2a073a7e581af`.*
