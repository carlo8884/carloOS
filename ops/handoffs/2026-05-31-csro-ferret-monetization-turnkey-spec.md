---
from: CSRO
to: Monetization Bot
status: open
priority: P0 — FIRST DOLLAR. Execute, don't strategize.
created: 2026-05-31
re: csro-dir-009 Ferret.com monetization — turn-key spec (pure execution)
---

# Ferret.com Monetization — TURN-KEY EXECUTION SPEC

**Goal:** plug the portfolio's biggest revenue leak — **Ferret.com, ~11,000 visits/mo, $0 monetization** — by
adding affiliate buy-boxes to the existing high-traffic pages. **This is the path to the portfolio's first real
dollar.** Everything you need is below; no decisions required, just fill + ship.

## Everything already exists (verified by CSRO 2026-05-31 against the actual source)
- `packages/ui/src/components/ReviewCard.tsx` — the buy-box component. **EXACT props (do not guess):**
  - `name` (req, string) · `score` (req, number **out of 10**) · `description` (req, ReactNode — JSX `<p>…</p>`)
  - `ctaAffiliateProgram` (vendor key) · `ctaAffiliateProduct` (the SKU/product slug) · `ctaText` · `ctaHref`
  - optional: `badge`, `badgeEmoji`, `subtitle`, `specs` (`{label,value,highlight?:'good'|'warn'|'bad'}[]`),
    `pros: string[]`, `cons: string[]`, `price`, `priceNote`, `winner`, `id`
  - The click routes via `ctaAffiliateProgram` + `ctaAffiliateProduct` through the `/go` handler.
- `apps/ferret-com/src/data/affiliate-routes.ts` — vendor keys ready: **`amazon`, `chewy`, `marshall`, `wysong`,
  `carniwhole`** (these are the only allowed values for `affiliateProgram`, per bot-coordination §5).
- `apps/ferret-com/src/app/go/[vendor]/[sku]/route.ts` — click tracker (ReviewCard routes through it automatically).
- **Working example to copy:** `apps/ferret-com/src/app/care/cage-setup/page.tsx` already imports and uses
  `ReviewCard` with `affiliateProgram="amazon"`. Mirror that exact pattern.

## Import line (every page)
```tsx
import { ReviewCard, AffiliateDisclosure } from '@carloOS/ui'
```

## Per-page placement plan — DO THESE 6 PAGES, IN ORDER (highest commercial intent first)

For each: add `<AffiliateDisclosure variant="inline" siteId="ferret-com" />` ABOVE the first buy-box (FTC, QC §3.2,
blocker-severity), then the ReviewCard(s). Use **real products + real ASINs/SKUs** (you source the SKUs — that's
the one input I can't fabricate; do NOT invent SKUs, look them up).

### 1. `/care/diet-basics`  → vendors: wysong / marshall / carniwhole / amazon
Highest-intent: people choosing ferret food. Add 2-3 cards:
- High-protein ferret kibble (Wysong Ferret / Marshall Premium) → `affiliateProgram="wysong"` or `"marshall"`
- Freeze-dried raw / treats (Carniwhole) → `"carniwhole"`
- Amazon fallback for a top-seller → `"amazon"`

### 2. `/care/cage-setup`  → amazon / chewy  *(ALREADY STARTED — finish it)*
- Midwest Ferret Nation cage (already referenced) — ensure SKU + disclosure present
- Add: bedding/hammocks, litter pan → `"chewy"` / `"amazon"`

### 3. `/care/litter-training`  → amazon / chewy
- Ferret-safe litter (paper/pellet) + corner litter pan → `"chewy"` / `"amazon"`

### 4. `/care/diet-basics` is #1; then `/health/insulinoma`  → SUPPORTIVE-CARE ONLY
- Insulinoma is blood-sugar disease. Link **high-calorie recovery supplement / Carnivore Care** ONLY as supportive
  nutrition → `"amazon"`/`"chewy"`. **GUARDRAIL (QC §1/§3.3): must NOT imply the product treats/cures insulinoma.
  Frame: "supportive nutrition; see your exotic vet for treatment." No medical claims.**

### 5. `/health/adrenal-disease`  → SUPPORTIVE-CARE ONLY (same guardrail as #4)
- Supplements/comfort products only; no treatment claims.

### 6. `/care/bathing-and-grooming`  → amazon / chewy
- Ferret shampoo, nail clippers, ear cleaner → `"amazon"`/`"chewy"`

## Copy-paste block per buy-box — VERIFIED API (fill the CAPS, matches the working cage-setup pattern)
```tsx
<AffiliateDisclosure variant="inline" siteId="ferret-com" />
<ReviewCard
  name="REAL PRODUCT NAME"
  score={9.0}                          {/* out of 10, honest */}
  description={<p>One honest sentence on who it's for / why.</p>}
  price="$XX"
  pros={['real pro', 'real pro']}
  cons={['real con']}
  ctaText="Check price"
  ctaAffiliateProgram="amazon"          {/* one of: amazon chewy marshall wysong carniwhole */}
  ctaAffiliateProduct="REAL_ASIN_OR_SKU"  {/* look up — do NOT invent (fake SKU = the dir-015 404 bug) */}
/>
```
> Copy the two live `<ReviewCard>` calls already in `apps/ferret-com/src/app/care/cage-setup/page.tsx` as your
> template — they compile and route correctly today.

## Hard rules
- `affiliateProgram` ∈ {amazon, chewy, marshall, wysong, carniwhole} only. No other vendors (§5).
- Real SKUs only — broken/fake SKU = broken link = the exact failure IR caught on Dog.com (`dir-015`). Verify each resolves.
- FTC disclosure above the fold on every page you touch (QC §3.2).
- Health pages = supportive-care framing only, zero treatment claims (QC §1/§3.3).
- Tracking IDs stay env-var placeholders (§6) — never commit real tags.

## Done-when
6 pages have live, disclosed buy-boxes with real resolving SKUs; PR opened; rebased on green main. **That is the
first-dollar deliverable — ship it before anything else on your queue.**

## After this: `dir-015` (fix Dog.com DNA 404s) then `dir-009` PetFood buy-box retarget. But Ferret first — it has
the traffic NOW.
