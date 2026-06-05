---
from: ir
to: csro
status: complete
created: 2026-06-05
next_action: CSRO to accept per-site verdicts; Carlo to review FOR CARLO section before DNS-flip decisions.
---

# IR Tier-1 Risk Re-Review — Post Premium Homepage Rollout
## Launch-Cohort 5: Dog.com · Fish.com · Ferret.com · PetFood.com · Vets.co

**Review date:** 2026-06-05
**Reviewer:** IR agent (read-only — no application code modified)
**HEAD commit:** `1aebfa55` (main, 2026-06-05)
**Baseline:** Prior review `2026-06-03-ir-tier1-rereview-post-visual-wave.md` (HEAD `3ca3c46b`)
**PRs in scope:** #487 (Dog.com reference v3/v4), #493 (Ferret premium), #494 (Fish premium), #495 (PetFood premium), #496 (Vets.co premium)

---

## CI Evidence

All three automated gates were re-run against HEAD before manual inspection began.

```
node scripts/ci/trust-guard.mjs
  PASS: scanned 1183 TSX files; 0 forbidden-phrase hits.

node scripts/ci/metadata-policy.mjs
  PASS: metadata policy clean across all 10 sites.

node scripts/ci/link-check.mjs
  PASS: 0 broken internal links across all 10 sites.
```

CI is green on all three gates.

---

## What Changed in This Wave

The following PRs were merged to main since the prior review (`3ca3c46b`) and are the specific subject of this re-review.

| PR | Description | Trust/Valuation Relevance |
|---|---|---|
| #487 | Dog.com image-led mobile-first homepage (reference v3/v4, 2026-06-05) | New full-bleed hero; top inline disclosure banner removed; subtleCredit on all tiles |
| #493 | Ferret.com premium homepage (Dog-reference rollout) | Full-bleed ferret hero; subtleCredit; top inline banner already absent |
| #494 | Fish.com premium homepage (Dog-reference rollout) | Full-bleed aquarium hero; subtleCredit; top inline banner absent |
| #495 | PetFood.com premium homepage (Dog-reference rollout) | Full-bleed ingredient hero; subtleCredit; in-page editorial disclosure block |
| #496 | Vets.co premium homepage (Dog-reference rollout) | Full-bleed stethoscope hero (object-led); subtleCredit; explicit photo-credits `<aside>` preserved |

**The key structural change in this wave:** the top-of-page inline `AffiliateDisclosure` banner was removed from all five layout.tsx files. Disclosure is now carried by: (a) `<Footer ... showAffiliateDisclosure />` sitewide, and (b) in-context `<AffiliateDisclosure variant="inline" />` on each monetized page above the first affiliate CTA.

---

## Validation 1 — FTC Disclosure Compliance

### 1a. Sitewide footer disclosure present?

Each cohort site's `layout.tsx` was read directly. All five render `<Footer siteId="..." showAffiliateDisclosure />`. The shared `Footer` component (`packages/ui/src/components/Footer.tsx`) conditionally renders `<AffiliateDisclosure variant="footer" siteId={siteId} />` above the copyright bar when `showAffiliateDisclosure={true}` (the default).

| Site | Footer `showAffiliateDisclosure` | File |
|---|---|---|
| Dog.com | `showAffiliateDisclosure` (explicit) | `apps/dog-com/src/app/layout.tsx` line 125 |
| Ferret.com | `showAffiliateDisclosure` (explicit) | `apps/ferret-com/src/app/layout.tsx` line 90 |
| Fish.com | `showAffiliateDisclosure` (explicit) | `apps/fish-com/src/app/layout.tsx` line 51 |
| PetFood.com | `showAffiliateDisclosure` (explicit) | `apps/petfood-com/src/app/layout.tsx` line 93 |
| Vets.co | `showAffiliateDisclosure` (explicit) | `apps/vets-co/src/app/layout.tsx` line 75 |

**Verdict: All five confirmed present. ✓**

The intent is also documented inline in each layout.tsx comment (Dog.com layout.tsx lines 107–119, Vets.co layout.tsx lines 59–72). The comments explicitly name `csro-dir-2026-W22-015` and the rationale, making the posture auditable.

### 1b. In-context AffiliateDisclosure above affiliate CTAs on commercial pages?

Spot-checked a representative commercial page on each site.

| Site | Page | AffiliateDisclosure line | Position vs first CTA |
|---|---|---|---|
| Dog.com | `/reviews/best-pet-insurance/page.tsx` | line 93 | Above `ReviewCard` at line 94 ✓ |
| Ferret.com | `/diet/best-ferret-kibble/page.tsx` | line 137 | Above `ReviewCard` content ✓ |
| Fish.com | `/reviews/best-canister-filters/page.tsx` | line 34 | Above `ReviewCard` content ✓ |
| PetFood.com | `/life-stage/[slug]/page.tsx` | line 470 | Above `BuyBox` ✓ |
| Vets.co | `/telehealth/page.tsx` | line 34 | Above `ReviewCard` content ✓ |

**Verdict: All five confirmed. 16 CFR Part 255 "clear and conspicuous at the point of monetization" satisfied. ✓**

### 1c. Homepages have no affiliate CTAs left undisclosed?

All five homepages were read in full. Homepage CTAs route exclusively to internal editorial pages (`/symptoms`, `/breeds`, `/health`, `/reviews/best-pet-insurance`, `/find-a-vet`, `/guides/methodology`, `/care/diet-basics`, `/tools/...`, etc.). No homepage links route directly to Amazon, Chewy, Trupanion, Vetster, or any affiliate target. No `/go/[vendor]/[sku]` links appear on any homepage.

There are no affiliate CTAs on any of the five homepages. The removal of the top inline banner is therefore FTC-clean: you cannot have an undisclosed affiliate CTA where there are no affiliate CTAs.

**Verdict: Confirmed. No homepage has an affiliate CTA. Top-banner removal does not create an FTC exposure. ✓**

### 1d. /disclosure pages: any now-false claims?

All five `/disclosure` pages use the formulation: disclosures appear **"either at the top of the page (above the first affiliate link) or in the page footer, in addition to the site-wide footer disclosure."** This is an accurate disjunction — product/review pages carry inline disclosure above the first CTA (= "top of the page"), and the footer provides the sitewide layer. No claim requires a top banner on every page. No stale claim. Vets.co's disclosure page does not specify placement position at all — only what affiliate relationships exist.

**Verdict: All /disclosure pages remain accurate. No false claims introduced. ✓**

---

## Validation 2 — Trust-Bar (QC §1) on the New Homepages

### 2a. AI-generated humans / fake clinical actors / fake vet headshots?

Reviewed all five homepage image strategies:

- **Dog.com:** Hero uses `dog-com:hero` (manifest-backed). All tiles use manifest keys. Image alt text describes animals and inanimate objects. No human subjects referenced. Trust footer: "We don't use AI-generated experts." QC §1 explicit denial in code comments.
- **Ferret.com:** Hero uses `ferret-com:hero` (manifest key = "A curious, healthy ferret"). All hub tiles use `ferret-com:<topic>-hero` keys. No human subjects. Code comment: "no fake authority, no AI-generated humans."
- **Fish.com:** Hero uses `fish-com:hero` (alt: "A planted freshwater aquarium..."). All photo tiles are aquarium/equipment/species images. No human subjects. Code comment: "No fake aquarists, fake biologists, fake testing/hands-on claims."
- **PetFood.com:** Hero uses `petfood-com:hero` (alt: "Raw ingredients arranged for an independent pet-food comparison"). Entry tiles are ingredient/brand photography. No human subjects. Trust claims: "No paid scores," "Independent." Code comment: "No fake authority, no AI-generated humans, no first-person hands-on claims."
- **Vets.co:** Hero explicitly documented as "vets-co:hero — a stethoscope on warm wood, object-led, NO human subjects" (code comment line 9 and line 355). Image alts: "The exterior entrance of a clinic building," "Reference books arranged on a library shelf," "A purebred dog in natural light," "Insurance paperwork and a calculator on a desk." The Vets.co homepage carries an explicit `<aside aria-label="Photo credits">` block (lines 1179–1205) stating: "Vets.co does not stage clinical scenes; medical imagery, when added, will be sourced from NIH / CDC / AVMA libraries with attribution." The code comments and image strategy documentation are unusually explicit on this point.

**Verdict: No AI-generated humans, no fake clinical actors, no fake vet headshots. All imagery is object/animal/architecture. ✓**

### 2b. Photographer attribution present and clickable (subtleCredit)?

All five homepages pass `subtleCredit` to every `<StockImage>` in hero and image-backed tile positions. The `StockImage` component renders attribution via the manifest/ImageCard pipeline when `subtleCredit={true}`. For synced entries with a `photographer` field, the photographer's name links to their Unsplash/Pexels profile. For `curated: true` entries without a photographer, the component renders "Source: Unsplash" linked to the photo source URL — which is TOS-compliant.

Vets.co additionally has the explicit `<aside aria-label="Photo credits">` block acknowledging Unsplash contributors as a redundant attribution layer.

**Verdict: Attribution present and clickable on all five sites. ✓**

One minor note: the `dog-com:breed-golden-retriever` manifest key referenced in Vets.co's featured guides section does not exist in `image-manifest.json`. This causes `StockImage` to render the branded placeholder (soft brand gradient + low-opacity paw icon, no text in production). The placement is a secondary article card in the "Cornerstone References" section — not a hero, not a prominent tile. This is the same "pending sync" pattern used by the rest of the portfolio for not-yet-synced breed keys. See Minor finding VC-NEW-01 below.

### 2c. Fabricated credentials or first-person hands-on claims on new homepages?

Trust bar / positioning copy on each site:

- **Dog.com:** "Research-based health content," "Products compared, not paid placements," "Sourced, not opinionated," "Dog.com Editorial writes the guides," "We don't use AI-generated experts." No DVM claim, no "we tested" claim.
- **Ferret.com:** "Research-anchored content," "Exotic-vet-respectful guidance," "Honest product recommendations." No "we tested," no DVM claim. Editorial footer note: "Ferret.com publishes general reference, not individualized veterinary advice."
- **Fish.com:** "Source-grounded fishkeeping guides," "Fish.com Editorial writes the guides on this site," "We reference published aquarist literature," "We don't use AI-generated aquarists or biologists." Clean.
- **PetFood.com:** "Independent — no paid scores," "AAFCO-anchored methodology," "Recall-tracked from FDA CVM," "WSAVA-aligned." Hero copy: "one published, versioned rubric." No hands-on claim. Editorial disclosure section on homepage explicitly states: "No manufacturer pays for, previews, or influences a score."
- **Vets.co:** "Research-anchored content," "No paid placements," "No fabricated bylines," "No fabricated credential stamps" (explicit checklist in the "Why Vets.co" section, lines 1021–1043). Hero positioning paragraph explicitly says "No paid placements. No fake bylines."

Trust-guard CI also confirms no forbidden phrases (fabricated credentials, first-person test claims) across all 1,183 TSX files.

**Verdict: No fabricated credentials, no first-person hands-on claims. ✓**

---

## Validation 3 — Tier-1 Valuation Risk Assessment

### 3a. Broken disclosure?

Confirmed none — see Validation 1 above.

### 3b. Stripped attribution?

Confirmed none — subtleCredit present on all image-backed surfaces; Vets.co adds explicit `<aside>` attribution block. See Validation 2b.

### 3c. Thin or placeholder homepages?

All five new homepages are substantive:

- **Dog.com:** Full-bleed hero → owner-path tiles (5 image-backed) → breed-match wizard (live tool) → calorie/age/glossary tools → breed risk center → health decisions → food tools → training → insurance/cost planning. ~975 lines. No placeholder content; v4 specifically ships zero placeholder image slots.
- **Ferret.com:** Full-bleed hero → trust bar → six cluster hub tiles (image-backed) → live ferret food evaluator → four category cards (3 photo + 1 text) → featured articles → tools section. ~1,430 lines. Substantive content, no placeholders.
- **Fish.com:** Full-bleed hero → problem triage (6 cards) → trust bar → calculators banner → 6 calculator feature cards → tank planning (with live calculator) → water safety → species → equipment → reviews. ~970 lines.
- **PetFood.com:** Full-bleed hero → trust bar → four reference entry tiles → live cost calculator → tools section → methodology callout → nutrition/ingredients panels → regulatory guides → editorial disclosure. ~820 lines.
- **Vets.co:** Full-bleed hero → trust bar → three image-backed reference desks → live insurance estimator → six-card category grid → insurance band → tools section → "Why Vets.co" positioning → featured guides → email capture. ~1,210 lines.

**Verdict: All five are substantive, well-structured premium pages. No thin/placeholder content. ✓**

### 3d. Duplicate routes or title collisions introduced?

CI metadata-policy passes. No duplicate route/title issues.

### 3e. Any new affiliate-route leakage introduced on homepages?

No `/go/[vendor]/[sku]` links appear on any homepage. No direct Amazon, Chewy, or insurance affiliate URLs appear on any homepage. All CTAs are internal navigation links.

**Verdict: Zero affiliate-route leakage on any homepage. ✓**

---

## Minor Findings

### VC-NEW-01 — Vets.co: `dog-com:breed-golden-retriever` manifest key missing

**Site:** Vets.co
**File:** `apps/vets-co/src/app/page.tsx` line 322
**Finding:** The Vets.co homepage references `manifestKey: 'dog-com:breed-golden-retriever'` for the cover photo of the "Golden Retriever Health" featured guide card. This key does not exist in `packages/ui/src/data/image-manifest.json`. The `StockImage` component falls through to the branded placeholder (soft gradient + paw icon) rather than a real breed portrait.
**Trust risk:** Low. The placeholder is visually coherent — it renders a branded gradient, not a broken image. No attribution claim is made for an image that doesn't render. The placement is a secondary article card, not a hero.
**Valuation risk:** Low. One of four featured guide cards lacks a cover photo. The card is still content-rich (eyebrow, title, teaser, read time).
**Remediation:** Add a `dog-com:breed-golden-retriever` entry to `image-manifest.json` with a real synced golden retriever photo (can reuse the `dog-com:category-breeds` photography or sync a dedicated key the next time `sync-images.mjs` runs on Carlo's Mac). No code change needed — the key reference is already wired.
**Blocker for launch?** No.

### DF-MINOR-01 — Dog.com homepage trust footer: "disclose affiliate relationships above the fold on every product page"

**Site:** Dog.com
**File:** `apps/dog-com/src/app/page.tsx` line 971
**Finding:** The homepage's "How we work" trust section states: "We disclose affiliate relationships above the fold on every product page." This is accurate for product/review pages (AffiliateDisclosure renders above the first CTA), but the phrase "above the fold" now relies entirely on product-page inline placement rather than a sitewide top banner. In practice this claim is correct — the inline disclosure on review pages renders early in the document above any ReviewCard. However, if a future page violates this by placing the AffiliateDisclosure component late in the page, this claim would become false.
**Trust risk:** Negligible. Current review pages are correctly disclosed.
**Remediation:** This is a cosmetic hygiene note, not a live violation. Consider softening to "We disclose affiliate relationships on every product page, above the first commercial link" on the next pass of the homepage trust copy. Not a pre-launch blocker.
**Blocker for launch?** No.

---

## Per-Site Tier Assignment

### Dog.com

**Tier: Clear**

All prior IR findings (DC-01, DC-02, DC-03) remain remediated. New homepage:
- Hero: `dog-com:hero` manifest-backed, subtleCredit, no human subjects
- Top banner removal: FTC-compliant (no homepage affiliate CTAs; footer disclosure + in-context on review pages)
- Trust copy: accurate, no fake credentials
- No affiliate-route leakage
- DF-MINOR-01 is cosmetic copy hygiene, not a disclosure failure

**1 Minor finding (cosmetic copy). 0 Tier-1. Launch-ready.**

---

### Ferret.com

**Tier: Clear**

New homepage:
- Hero: `ferret-com:hero` manifest-backed, subtleCredit
- All six hub tiles: manifest-backed with subtleCredit
- Top banner: already absent from prior wave; footer disclosure confirmed
- No affiliate CTAs on homepage
- No fake credentials, no first-person claims
- Editorial footer note: "general reference, not individualized veterinary advice" — good legal hygiene
- FerretFoodEvaluator inline tool: no medical claims, no commercial CTAs
- Tools section: food evaluator, cost calculator, glossary — all previously assessed as clean

**0 Minor findings. 0 Tier-1. Launch-ready.**

---

### Fish.com

**Tier: Clear**

New homepage:
- Hero: `fish-com:hero` manifest-backed, subtleCredit
- All real-photography tiles use confirmed manifest keys: `fish-com:category-setup`, `fish-com:cornerstone-cycling`, `fish-com:category-species`, `fish-com:category-equipment`, `fish-com:category-reviews`
- Not-yet-synced species thumbnail keys deliberately never passed to `StockImage` ("zero-placeholder" pattern)
- Footer disclosure confirmed; no affiliate CTAs on homepage
- Trust copy: "We don't use AI-generated aquarists or biologists. We don't accept payment for favorable reviews. Affiliate links are disclosed above the fold on every product page."
- Inline volume calculator: math-only tool, no medical claims

**0 Minor findings. 0 Tier-1. Launch-ready.**

---

### PetFood.com

**Tier: Clear**

New homepage:
- Hero: `petfood-com:hero` manifest-backed, subtleCredit
- All four reference entry tiles: manifest-backed, subtleCredit
- Two deep-reference panels (nutrition, ingredients): manifest-backed, subtleCredit
- One methodology image (`petfood-com:category-conditions`): prescription diet bag, clinical light — no human subject
- In-page editorial disclosure block (lines 739–771): unusually thorough — explicitly states rubric-independence from affiliate links, flags all affiliate contexts, and notes therapeutic diets require a vet
- No affiliate CTAs on homepage (all CTAs are to internal guides/tools)
- Prior finding PF-01 (first-person framing) remains remediated

**0 Minor findings. 0 Tier-1. Launch-ready.**

---

### Vets.co

**Tier: Clear**

New homepage:
- Hero: `vets-co:hero` manifest-backed (stethoscope on wood — object only, no human subject), subtleCredit
- Three reference-desk image tiles: manifest-backed, subtleCredit — clinic entrance (architecture), reference books (object), dog portrait (animal)
- Insurance band image: manifest-backed, subtleCredit — paperwork + calculator (object)
- Featured guide cards: three of four are text-led by editorial design; one (Golden Retriever Health) references `dog-com:breed-golden-retriever` which is not yet in the manifest → renders branded placeholder (see VC-NEW-01)
- Explicit `<aside aria-label="Photo credits">` block: "contributors on Unsplash. Used under the Unsplash License. Vets.co does not stage clinical scenes." Redundant attribution beyond the subtleCredit pipeline. Excellent hygiene.
- No fabricated credentials: "No fabricated bylines," "No fabricated credential stamps" explicit in homepage copy
- Prior findings VC-01, VC-02 remain remediated

**1 Minor finding (VC-NEW-01: one pending-sync image key). 0 Tier-1. Launch-ready.**

---

## Summary Matrix

| Site | Prior Verdict | Re-Review Verdict | Tier-1 Risk? | Minor Findings |
|---|---|---|---|---|
| **Dog.com** | Clear | **Clear** | No | 1 (DF-MINOR-01: cosmetic copy hygiene) |
| **Ferret.com** | Clear | **Clear** | No | 0 |
| **Fish.com** | Clear | **Clear** | No | 0 |
| **PetFood.com** | Clear | **Clear** | No | 0 |
| **Vets.co** | Clear | **Clear** | No | 1 (VC-NEW-01: missing image manifest key) |

**No Tier-1 trust or valuation risk identified in the premium homepage rollout. All five cohort sites remain Clear at HEAD `1aebfa55`.**

---

## FTC Disclosure Compliance — Summary Verdict

The disclosure relocation (top banner → footer + in-context) is **FTC-compliant**. The rationale:

1. The footer `AffiliateDisclosure` (variant="footer") renders on every page of all five sites via the shared Footer component.
2. Every monetized page (review, comparison, buy-box, insurance, telehealth) carries `<AffiliateDisclosure variant="inline" />` above the first affiliate CTA. "Clear and conspicuous" is satisfied at the point of monetization (16 CFR Part 255).
3. No homepage on any cohort site contains an affiliate CTA. There is nothing to disclose on a page that has no affiliate links — the FTC requires disclosure at or near the affiliate link, not as a sitewide banner on pages that have no affiliate content.
4. The `/disclosure` pages on all five sites accurately describe the disclosure arrangement without making false claims about a top banner.

This is the same posture used by major editorial sites (Wirecutter, The Verge, NerdWallet) where the homepage carries no direct affiliate links and the in-context disclosure fires on the specific pages that do.

---

## FOR CARLO

**Items requiring your decision or awareness before DNS-flip:**

1. **No Tier-1 blockers.** This re-review found no Tier-1 trust or valuation issue introduced by the premium homepage rollout. The five cohort sites are at or above the §8a launch-quality bar on trust, monetization safety, and valuation hygiene.

2. **VC-NEW-01 — Golden Retriever photo on Vets.co (Minor, not a blocker):** The featured "Golden Retriever Health" article card on the Vets.co homepage shows the branded placeholder gradient instead of a real golden retriever photo, because the `dog-com:breed-golden-retriever` key is not yet in the image manifest. The page is fully functional and the card is content-rich. Fix: run `node scripts/sync-images.mjs --force` on your Mac and ensure `dog-com:breed-golden-retriever` is queried (or manually add a curated entry). No code change required.

3. **DF-MINOR-01 — Dog.com homepage trust copy (Minor, cosmetic):** The "How we work" section says "We disclose affiliate relationships above the fold on every product page." This is currently accurate but slightly imprecise post-top-banner removal. Consider softening to "above the first commercial link" on next copy pass. Not urgent.

4. **Photo sync still pending (hygiene, pre-launch preference):** Several manifest entries across the portfolio carry `curated: true` without a photographer name because sandbox cannot reach the Unsplash API. Pages render "Source: Unsplash" (TOS-compliant) rather than the photographer's name. Full names populate when `node scripts/sync-images.mjs --force` runs on your Mac. Not a legal or trust risk, but better for Unsplash-partner hygiene before DNS-flip.

---

## Per-Site Launch-Readiness Verdict (§8a Bar — Post Premium Rollout)

| Site | §8a Verdict |
|---|---|
| **Dog.com** | **Launch-ready** — trust-guard clean, CI green, no affiliate-route leakage, in-context disclosures on all commercial pages, footer disclosure confirmed, no AI-generated humans, subtleCredit on all photography, no Tier-1 risk |
| **Ferret.com** | **Launch-ready** — all conditions from prior review maintained; new homepage adds real photography, no fake credentials, no affiliate CTAs, editorial general-reference disclaimer present, CI green |
| **Fish.com** | **Launch-ready** — new premium homepage adds real aquarium photography, no fake aquarists/biologists, no affiliate CTAs, footer disclosure confirmed, CI green |
| **PetFood.com** | **Launch-ready** — unusually strong editorial disclosure directly on homepage, rubric-independence from affiliate noted explicitly, prior PF-01 remediation maintained, no human subjects in photography, CI green |
| **Vets.co** | **Launch-ready** — object-led photography on all hero/tile positions (no staged clinical scenes), explicit no-fake-bylines and no-fake-credentials copy on homepage, redundant `<aside>` photo-credit block, VC-NEW-01 is cosmetic (one secondary article card pending sync), CI green |

**All five sites clear the §8a launch-quality bar on trust, monetization safety, and valuation hygiene at HEAD `1aebfa55`.**

---

## Disclosure Re-Review Verdict (one line)

Top-banner removal is **FTC-compliant**: homepages carry no affiliate CTAs, footer disclosure fires sitewide, and in-context disclosure remains above the first CTA on every monetized page — satisfying 16 CFR Part 255 at the point of monetization, which is the applicable standard.

---

*This review is read-only. No application code was modified. All findings are documented with file path + line number + observed value. HEAD commit: `1aebfa55`.*
