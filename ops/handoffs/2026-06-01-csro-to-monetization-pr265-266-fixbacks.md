---
from: CSRO
to: Monetization Bot
status: open
created: 2026-06-01
priority: P0 — blocks merge of #265 + #266
re: IR findings #1 + #3 (CSRO-verified against branch code)
---

# Fix-back: PR #265 + #266 before merge

Both verified by CSRO against the actual branch code. Neither merges until fixed.

## BLOCK 1 — PR #266 chlorhexidine affiliate card (QC §1.5.b — Carlo policy)

**File:** `apps/horses-com/src/app/guides/equine-dental-care/page.tsx`

Carlo decision 2026-06-01 + new **QC-STANDARDS §1.5.b**: clinical/medicated/
prescription-adjacent products must NOT be affiliate buy-boxes.

**Do:**
1. **DELETE** the entire `<ReviewCard id="equine-oral-rinse" ...>` block
   (Chlorhexidine 0.12% Oral Rinse) — name, specs, pros/cons, `ctaHref`,
   `ctaAffiliateProgram`, `ctaAffiliateProduct`. Remove the whole card.
2. **KEEP** the `equine-toothbrush-kit` ReviewCard (physical supply — allowed),
   but **remove the phrase** "Best paired with chlorhexidine-based oral rinse on
   dentist instruction" from its description (don't cross-sell the removed item).
3. If you want to retain chlorhexidine *education*, it may appear as
   **informational prose only** in the periodontal section — framed as
   veterinarian-directed care, **no CTA, no `/go` route, no price, no buy-box.**
4. Remove the now-orphaned `/go/amazon-brand/chlorhexidine...` route from
   `apps/horses-com/src/data/affiliate-routes.ts` if it was added for this SKU
   only (verify nothing else references it).

**Allowed in buy-boxes here:** dental brush, scaler, non-medical grooming tools.
**Not allowed:** chlorhexidine, antiseptics, medicated rinses, anything where
misuse could harm the animal. See QC §1.5.b.

## BLOCK 2 — PR #265 horses-com brand-tag mapping (IR #1, silent leak)

**File:** `scripts/set-affiliate-tag.sh`

This branch adds `amazon-brand`/`chewy-brand` ROUTES used on **horses-com**
pages, and correctly added `ferret-com` to the brand mapping — but **horses-com
is missing** from the `AMAZON_BRAND` / `CHEWY_BRAND` project lists. Result:
horses-com brand-search clicks redirect but keep `PLACEHOLDER` → untagged =
$0 commission. (Note: dog-com is NOT affected — it has no brand-brand routes in
this branch, contra IR's draft; verify before touching dog-com.)

**Do:** add `horses-com` to both lines:
```
[AMAZON_BRAND]='fish-com lizard-com saddle-com petfood-com petfoods-com ferret-com horses-com'
[CHEWY_BRAND]='fish-com lizard-com saddle-com petfood-com petfoods-com ferret-com horses-com'
```
Then confirm every `/go/<vendor>-brand/` key used on horses-com + saddle-com has
a matching project in the mapping. **saddle-com** is already present — good.

## Verify before re-push (both PRs)
1. `node scripts/ci/affiliate-link-integrity.mjs` → 0 untracked, 0 dead routes
2. `node scripts/ci/trust-guard.mjs` → clean
3. `node scripts/ci/metadata-policy.mjs` → clean
4. Grep the dental page: 0 occurrences of `chlorhexidine` inside any `ctaHref`
   / `ReviewCard` / `BuyBox`.

When fixed + pushed, ping CSRO — I'll re-verify and merge per §5b.
