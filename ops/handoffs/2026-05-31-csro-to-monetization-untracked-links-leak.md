---
from: CSRO
to: Monetization Bot
status: open
priority: HIGH — found money on existing traffic
created: 2026-05-31
re: csro-dir-019 — 110 buy-box links bypass /go (untracked, $0 commission)
---

# Revenue leak — 110 untracked buy-box links across the portfolio

Found by the new `scripts/ci/affiliate-link-integrity.mjs` (shipping in the IR-Guard PR). **110 ReviewCard/buy-box
CTAs link to bare retailer URLs (`https://chewy.com/...`, `https://amazon.com/...`) that bypass the `/go/[vendor]/[sku]`
tracker.** Result: **no affiliate attribution → $0 commission** on every purchase-intent click, on traffic we already have.

This is higher-leverage than any new build: it's found money on the 50K+/mo the portfolio already gets — and the
worst offender is **Dog.com review pages**, the highest-intent surface on the 36K/mo flagship.

## Counts by site

| Site | Untracked buy-box links |
|---|---|
| **dog-com** | **42** ← flagship review pages |
| saddle-com | 34 |
| horses-com | 19 |
| ferret-com | 9 |
| vets-co | 3 |
| lizard-com | 2 |
| fish-com | 1 |
| **Total** | **110** |

(Also: 42 affiliate-bearing pages flagged with no *in-page* `AffiliateDisclosure` — verify the footer covers them
per QC §3.2, or add inline. Secondary to the link fix.)

## Representative examples (dog-com)
```
apps/dog-com/src/app/reviews/best-dental-chews/page.tsx:
  ctaHref="https://www.chewy.com/s?query=greenies+dental+chews+dogs"   → should be /go/chewy/<sku>?s=best-dental-chews
apps/dog-com/src/app/reviews/best-dog-beds/page.tsx:
  ctaHref="https://www.chewy.com/s?query=big+barker+orthopedic+dog+bed" → /go/chewy/<sku>?s=best-dog-beds
apps/dog-com/src/app/reviews/best-dog-crates/page.tsx:
  ctaHref="https://www.amazon.com/s?k=midwest+icrate"                   → /go/amazon/<sku>?s=best-dog-crates
```

## The fix (Monetization lane — PR 2, separate from the guard PR)
Convert every bare retailer `ctaHref` to route through `/go`:
- `https://www.chewy.com/...`  → `ctaHref="/go/chewy/<sku>?s=<page-slug>"`
- `https://www.amazon.com/...` → `ctaHref="/go/amazon/<sku>?s=<page-slug>"`
- `<vendor>` must be a key registered in that app's `affiliate-routes.ts` (dog-com: `chewy`/`amazon` exist;
  saddle/horses use their own — check each app's routes).
- `<sku>` = a real product SKU/ASIN where possible; if the source is a search URL, a stable search-slug is OK as
  the sku segment, but it MUST go through `/go/<vendor>/<sku>` so the tag is applied at runtime.
- `<page-slug>` = the review page (for click attribution).

## Verify before pushing
```
node scripts/ci/affiliate-link-integrity.mjs           # untracked count → 0
STRICT=1 node scripts/ci/affiliate-link-integrity.mjs  # should PASS once fixed
```
Once clean, CSRO/COO can flip the guard to STRICT to prevent regressions.

## Scope note (per Carlo)
This is **PR 2 (Monetization-owned remediation)** — separate from **PR 1 (CSRO guard + report)**. Do not bundle the
110 link fixes into the guard PR. Fix per-site (dog-com first — biggest + flagship).
