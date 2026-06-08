---
from: COO
to: CSRO
status: complete
created: 2026-06-08
next_action: CSRO awareness; Monetization items tracked in PR #656. No launch blockers on non-launch sites.
---

# COO non-launch QA findings (Saddle / Lizard / Horses / PetFoods / Ferrets)

Idle-safe read-only QA while awaiting launch-5 pixel review. Battery = leakage, broken CTAs, placeholders, template residue, disclosure, §1.5 clinical monetization, overclaims, mobile-risk, tool functionality, orphans, schema coverage.

## Verified CLEAN
- **Affiliate leakage:** none (all direct URLs in `affiliate-routes.ts`; page CTAs route via `/go`).
- **Broken CTAs:** none (the `href="#…"` hits are legit in-page anchors).
- **Placeholders:** none (every StockImage resolves to a synced fallback).
- **Template/emoji residue:** none (the "XXX" hits = `G-XXXXXXXXXX` GA-guard; "coming soon" = an intentional `aria-disabled` ferret directory entry).
- **Residual overclaims:** none (one "one of the best things you can do…" = benign husbandry advice).
- **Mobile-risk:** none material — tables are `w-full`/`width:100%` (responsive) or already `overflowX:auto`; no fixed widths ≥480px.
- **Tools/calculators:** all 4 (lizard enclosure + uvb, saddle tree-size, horses BCS) are real interactive client components (useState + inputs + math), no stubs.

## Routed to Monetization (PR #656)
- **§1.5 clinical-page product monetization:** 7 lizard `/health/*` condition pages + horses `/health/equine-ulcers` carry product buy buttons (CSRO decision flagged: deficiency-remedy vs injury/acute).
- **Disclosure not above monetized surface:** petfoods brand pages (`showAffiliateDisclosure={false}` + no inline); lizard species/health pages (footer-only disclosure under inline buy buttons).

## Logged COO-lane findings (NOT fixed now — proportionality / no-broad-batch rule)
1. **lizard `/husbandry` hub orphan** (minor): the hub *index* has no inbound link (children are well-linked + surfaced on `/setup`). Fix = one internal link from `/setup` or nav. Low value; deferred.
2. **Portfolio-wide breadcrumb-JSON-LD gap** (P2 GEO): most spokes have visual breadcrumbs but lack `BreadcrumbList` structured data (saddle 36/58, lizard 88/103, horses 101/151, petfoods 9/12, ferrets 9/19). Article/Product/FAQ schema otherwise well-covered. Recommend a dedicated structured-data pass when broad work is greenlit — NOT a launch blocker.

**Bottom line:** no launch blockers on the non-launch sites. Only real launch-relevant issues are the Monetization-lane clinical-monetization + disclosure gaps (#656).
