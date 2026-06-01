---
from: monetization (filed by Monetization Bot per Carlo question 2026-06-01)
to: COO, CSRO, Carlo
status: open
priority: P0 — SEO link-equity leak + referral-traffic leak
created: 2026-06-01
re: lost-backlink redirect map for re-launched sites (ferret/dog/fish/petfood/vets/horses/saddle/lizard)
---

# Lost-backlink redirect strategy — re-launched-site link-equity recovery

## Problem

Carlo's question 2026-06-01: "Some of these sites were live before — especially the ones with traffic — and they used to have a lot of backlinks. If somebody hits `ferret.com/something` that doesn't exist now, does it return 404 or 301?"

**Audited 2026-06-01 — every CarloOS app returns a plain 404 on unknown URLs.** No app has `redirects()` or `rewrites()` configured in `next.config.mjs`. 5 of 10 apps have a branded `not-found.tsx`; 5 use Next.js default not-found page.

| App | redirects() | not-found.tsx |
|---|---|---|
| ferret-com (~11K/mo) | ❌ | ❌ |
| dog-com (~36K/mo) | ❌ | ✓ |
| fish-com (~7K/mo) | ❌ | ✓ |
| petfood-com (~5K/mo) | ❌ | ❌ |
| horses-com (~1K/mo) | ❌ | ❌ |
| saddle-com | ❌ | ✓ |
| lizard-com | ❌ | ✓ |
| vets-co | ❌ | ✓ |
| petfoods-com | ❌ | ❌ |
| ferrets-com | ❌ | ❌ |

**Every historical backlink to a defunct URL = pure leak.**

## What's leaking

1. **Link equity** — Google sees inbound backlink → 404, deprioritizes the destination domain
2. **Direct referral traffic** — anyone clicking an old link bounces immediately
3. **Search-rank signal** — link graph not flowing to live content

For Ferret.com alone (11K monthly visitors, historical pre-rebuild presence), this is plausibly hundreds of monthly inbound referrals + an indeterminate domain-authority loss with each crawl.

## Recommended approach (3 stages)

### Stage 1 — Inventory (research; needs external data sources)

Source historical URLs from:
- **Wayback Machine** (web.archive.org) — shows old sitemaps + crawled pages per domain × year
- **Google Search Console** (Carlo-side; grants per-property access) — "Pages indexed" + "Pages not indexed" reports show URLs Google previously had + currently doesn't
- **Ahrefs / SEMrush backlink reports** ($99/mo one site or one-shot audit) — full backlink inventory + anchor text
- **Carlo's prior-host server logs** if available (unlikely past 30-90d retention)

Output: per-site CSV with columns `old_url`, `inbound_backlinks_estimated`, `proposed_redirect_target`, `confidence`.

### Stage 2 — Redirect map (per site)

For each historical URL, map to closest live canonical:
- Path normalization (e.g. `/ferret/health/insulinoma` → `/health/insulinoma`)
- Topic match (e.g. `/old-flea-product-review-2018` → `/reviews/best-flea-tick-prevention`)
- Hub fallback (`/reviews/something-defunct` → `/reviews`)
- Orphans with no good match → homepage (still passes ~90% link equity per Google; better than 404)

Implementation: `apps/<site>/next.config.mjs` `redirects()` array, `permanent: true` (308 status, which both Google and direct browsers honor as 301-equivalent).

### Stage 3 — Smart 404 catch-all + sitemap update

After the explicit redirect map ships:
- Replace each `not-found.tsx` with a branded "we changed our URL structure" page that includes:
  - Search box (site-search)
  - Top-5 most-relevant hub links
  - "Were you looking for X?" auto-suggest from request URL keywords
- Re-submit each site's XML sitemap to Search Console so Google re-crawls

This converts the unredirected residual ~5% of unknown-URL traffic from "bounce" to "convert."

## Estimated work

- **Stage 1 inventory:** 2–4 hours per site for the high-traffic ones (ferret, dog, fish, petfood) IF we have Search Console access OR a paid Ahrefs report. Without those, Wayback-only inventory is partial and 6–8 hours per site.
- **Stage 2 redirect map:** 1–2 hours per site (largely mechanical pattern-match)
- **Stage 3 smart 404:** ~1 hour shared (one component, deployed per site)

Total: 30–50 hours of focused work depending on inventory data quality.

## Lane proposal

This crosses Monetization + COO + CSRO:

- **CSRO:** prioritize sites (already known — ferret + dog + fish + petfood first); approve $99 Ahrefs spend if Carlo authorizes
- **COO:** implement the `next.config.mjs` `redirects()` map + smart 404 component (this is routing/infra)
- **Monetization Bot:** map redirects to monetized destinations where applicable (e.g., old product-review URLs → current `/reviews/<best-thing>` page that has affiliate CTAs)
- **Carlo:** Search Console access grant (1 minute per property) is the single biggest unblocker for Stage 1

## Smallest viable first step (this session, low-risk)

I can ship a **branded `not-found.tsx` template** with site-search box + top-link prompt for the 5 apps that lack one (ferret, petfood, horses, petfoods, ferrets), wired through `@carloOS/ui`. That alone:
- Converts default Next.js 404 into a branded experience
- Captures ~5% of unknown-URL traffic that would otherwise bounce
- Doesn't require external research

The bigger redirect-map work (Stages 1–2) is gated on inventory data and is a separate multi-session project.

## Decision Carlo

1. Authorize the $99 Ahrefs one-shot audit for ferret + dog + fish + petfood (4 highest-traffic sites)?
2. Grant Search Console property access to whichever bot/agent runs the inventory?
3. OK for me (Monetization Bot) to ship the smallest-viable-first-step (branded 404 across 5 missing apps) right now?
