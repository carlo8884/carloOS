---
from: COO
to: Monetization Bot (primary), Visual Bot (one item)
status: action-requested
created: 2026-06-14
source: 2026-06-14 portfolio premium-review pass (3 sub-agents, COO-verified)
---

# Premium-review flags — cross-lane (Monetization + Visual)

A premium-quality review ran across the 6 priority sites. COO fixed the in-lane
items (PR #757: Lizard breadcrumb schema, Dog puffery, Vets placeholder button).
**Trust came back clean portfolio-wide** (no fabricated credentials, disclosures
present). These remaining items are **verified real but in your lanes** —
flagging, not fixing.

## Monetization Bot

### M1 — Ferret starter-kit ships unverified SKUs with live affiliate links (priority)
- **Files:** `apps/ferret-com/src/app/(funnels)/ferret-starter-kit/page.tsx`
  (renders `/go/${vendor}/${sku}` "Check Price →" for every item) +
  `apps/ferret-com/src/data/starter-kit.ts` (**9 items flagged
  `needsSkuVerification: true`**, e.g. lines ~73, 90, 115, 124, 141, 150, 159,
  184, 193; header comment notes "exact SKU needs editorial review before launch").
- **Issue:** the data carries an editorial-hold flag, but the page renders the
  affiliate button regardless — so 9 un-verified SKUs are monetized in a public
  funnel. The flag is currently dead code. Editorial-integrity gap (not a QC §1
  trust violation, but it undercuts the "verified before monetized" standard).
- **Suggested fix (your call):** either (a) complete SKU verification and clear
  the flags, or (b) gate the CTA — `item.needsSkuVerification ? <span>Verifying</span> : <a href="/go/…">Check Price</a>` — or filter flagged items out until cleared. This is a `(funnels)` page = your lane; COO did not touch it.

### M2 — `/go` redirect leaves `PLACEHOLDER` in the URL when an env var is unset
- **File:** `apps/petfood-com/src/app/go/[vendor]/[sku]/route.ts` (+ the
  `affiliate-routes.ts` `PLACEHOLDER` tokens; same pattern exists on other sites).
- **Issue:** the handler substitutes `process.env.AFF_*_TAG` into the URL; if the
  var is unset, the literal `PLACEHOLDER` string can remain in the destination →
  a broken affiliate landing. Mostly moot today (tags unset until Carlo activates),
  but worth hardening before launch.
- **Suggested fix:** if the tag doesn't resolve, fall back to the clean
  (untracked) vendor URL or a safe internal page rather than redirecting with
  `PLACEHOLDER` in it. Lane: `/go` route = Monetization.

## Visual Bot

### V1 — PetFood homepage reviews-hero on a fallback image key
- **File:** `apps/petfood-com/src/app/page.tsx:~143` — `// TODO(visual): dedicated
  petfood-com:reviews-hero key; using category-brands until then.`
- **Issue:** the reviews tile on the homepage (a high-trust surface) uses a
  fallback image key. Renders fine (graceful), but isn't the intended dedicated
  image. Low priority; folds into the broader article-spoke imagery work
  (`2026-06-14-coo-to-visual-article-spoke-images.md`).

## Not issues (verified, logged so they don't get re-raised)
- "Duplicate fallback titles" on Vets diagnostics / vet-directory → those routes
  `notFound()` for invalid slugs and the directory is `noIndex: true`. No indexed dup.
- "Titles > 60 chars" → 60 is the QC §2.1 *soft* target; the **hard limit is 70**,
  enforced by `metadata-policy.mjs` and green.
- Vets sample vet profiles → correctly `noIndex` + "Sample listing" banner +
  555-fiction data. Working as designed.
