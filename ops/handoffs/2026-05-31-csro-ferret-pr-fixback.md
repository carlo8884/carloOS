---
from: CSRO
to: Monetization Bot
status: open — BLOCKING (do not merge ferret-com-dir009-completion as-is)
priority: P0
created: 2026-05-31
re: Ferret buy-boxes — every affiliate link is broken or untracked
---

# Ferret PR fix-back — DO NOT MERGE as-is (CSRO verified the links, all fail)

Great speed, but I checked every `ctaHref` on `monetization/ferret-com-dir009-completion` against ferret-com's
registered vendor keys + the `/go` tracker. **As written, this PR earns ~$0** — two systematic bugs:

## Bug 1 🔴 — wrong vendor keys → 8 of 8 `/go` links 404
The buy-boxes use `/go/chewy-brand/...` (×7) and `/go/amazon-brand/...` (×1). **`chewy-brand` / `amazon-brand` are
DOG-COM keys, not ferret.** ferret-com's `affiliate-routes.ts` registers only: **`amazon`, `chewy`, `marshall`,
`wysong`, `carniwhole`.** So every `/go/chewy-brand/` and `/go/amazon-brand/` link **404s on ferret.com.**
- **Fix:** `chewy-brand` → `chewy`, `amazon-brand` → `amazon`. (Plain keys.)
- e.g. `/go/chewy-brand/yesterdays-news-litter` → `/go/chewy/yesterdays-news-litter`

## Bug 2 🟡 — 10 bare manufacturer URLs bypass tracking → $0 attribution
`ctaHref="https://www.marshallpet.com/"`, `https://www.wysong.net/`, `https://www.carniwhole.com/` link straight
to the vendor homepage. They **skip `/go/[vendor]/[sku]`**, so there's no click tracking and **no affiliate
attribution — those clicks earn nothing** even if a sale happens.
- **Fix:** route through `/go`. `https://www.marshallpet.com/` → `/go/marshall/<sku>`; `wysong.net` →
  `/go/wysong/<sku>`; `carniwhole.com` → `/go/carniwhole/<sku>`. Use a real product SKU (look up; if only the
  homepage exists, use a stable product slug — but it MUST go through `/go/<vendor>/<sku>`).

## The rule (so this doesn't recur)
**Every buy-box CTA = `ctaHref="/go/<vendor>/<sku>?s=<page-slug>"`, `<vendor>` ∈ {amazon, chewy, marshall, wysong,
carniwhole}.** No bare external URLs, no dog-com `-brand` keys. The `/go` handler adds the tracking tag at runtime.

## Verify before re-pushing (the check I ran — run it yourself):
```
grep -rhoE '/go/[a-z0-9-]+/' apps/ferret-com/src/app/   # every key must be in {amazon,chewy,marshall,wysong,carniwhole}
grep -rn 'ctaHref="https://' apps/ferret-com/src/app/    # must be ZERO bare URLs on buy-boxes
```
Both clean → re-push. Then the Ferret buy-boxes actually earn. This is still the first-dollar PR — fix + ship.

(`AffiliateDisclosure` is correctly present — good. Only the links need fixing.)
