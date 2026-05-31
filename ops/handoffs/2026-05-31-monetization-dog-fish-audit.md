---
from: monetization
to: csro, coo, carlo
status: done
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-fleet-activation.md
next_action: "Carlo decides on EleVet CBD vendor; COO softens one trust-bar phrase on dog.com pet-insurance review; nothing blocks revenue."
---

# Monetization Bot — Dog.com + Fish.com affiliate-surface audit

Per fleet-activation queue item #4 (Tier-1 protect-asset posture, no risky changes). Audit-only run; no code changes shipped from this audit aside from one in-lane infrastructure note below.

## Headline

Both sites are **net clean.** Three findings worth Carlo / COO attention; none block revenue.

| Severity | Site | Finding |
|---|---|---|
| HIGH (policy) | dog.com | EleVet (CBD vendor) ReviewCard on `/reviews/best-joint-supplements` without Carlo approval per `bot-coordination.md §5` |
| MEDIUM (trust bar) | dog.com | "of any insurer **we reviewed**" first-person review claim on `/reviews/best-pet-insurance` per QC §1.2 |
| LOW (opportunity) | fish.com | Content uses only `amazon` + `chewy` of 7 wired vendors — MarineDepot / PetCo / PetSmart / Bulk Reef Supply / LiveAquaria are registered but unused |

## What I checked

- 161 page.tsx in dog.com, 84 in fish.com.
- 39 dog.com pages and 14 fish.com pages render `ReviewCard` / `AffiliateDisclosure` / `/go/` (24% and 17% of total surface).
- All monetized pages reference `AffiliateDisclosure` or `/disclosure` (FTC compliance: PASS).
- `trust-guard.mjs` CI: PASS (0 forbidden-phrase hits across 740 TSX files).
- `link-check.mjs` CI: PASS (0 broken internal links across all 5 sites).
- Vendors used in dog.com `ctaAffiliateProgram`: amazon, chewy, ellevet, embrace, figo, healthy-paws, trupanion.
- Vendors used in fish.com `ctaAffiliateProgram`: amazon, chewy.

## Finding 1 — HIGH (policy) — EleVet CBD on dog.com

**Where:** `apps/dog-com/src/app/reviews/best-joint-supplements/page.tsx:167-169`
```tsx
ctaHref="https://www.ellevetsciences.com"
ctaAffiliateProgram="ellevet"
ctaAffiliateProduct="ellevet-cbd"
```

**Problem:** EleVet is a CBD / hemp supplement company. Per `bot-coordination.md §5`:

> Any **CBD / supplement company** (FDA risk + editorial position) — requires Carlo's prior approval

EleVet is not in dog-com's allow-list. It is also **not registered** in `apps/dog-com/src/data/affiliate-routes.ts` — so the `/go/[vendor]/[sku]` handler would 404 it. The CTA bypasses the registry entirely and links direct to the manufacturer homepage. Result: the placement looks monetized but earns nothing AND is off-policy.

**Recommendation (Carlo decides):**
- **Approve + wire:** Carlo signs off on EleVet; register `ellevet` in `affiliate-routes.ts` with a real ShareASale/Impact template + tracking; the CTA gets routed through `/go`. CBD + senior-pet joint supplement is a real category.
- **Remove:** I drop the EleVet ReviewCard and replace with an Amazon/Chewy-allowlisted glucosamine + omega supplement pick that doesn't trigger the CBD policy. Safer for asset value.

No silent action taken — this is a Tier-1 page; protect-asset posture says flag, don't unilaterally edit.

## Finding 2 — MEDIUM (trust bar) — "we reviewed" copy on dog.com

**Where:** `apps/dog-com/src/app/reviews/best-pet-insurance/page.tsx` — Healthy Paws description:

> "Healthy Paws has the best claims processing speed of any insurer we reviewed..."

**Problem:** QC §1.2 prohibits first-person hands-on claims ("we tested," "we calibrated," "in our lab"). "we reviewed" is in the same family — it implies first-person editorial review with retained evidence. The page is a comparison aggregator drawing on public data; no first-person review actually happened.

**Recommendation:** soften to one of:
- "of any insurer in this comparison"
- "in our comparison of major US pet insurers"
- "across the carriers compared on this page"

Editorial-copy fix; COO lane (`apps/<site>/src/app/**/page.tsx` is COO per `bot-coordination.md §2`). Flagging for COO's next sweep.

`trust-guard.mjs` doesn't currently catch the bare "we reviewed" pattern; might be worth a guard-rule addition. I leave that to COO + IR Bot.

## Finding 3 — LOW (opportunity) — fish.com vendor under-utilization

**Where:** all fish.com ReviewCards.

**Observation:** the fish.com `affiliate-routes.ts` registry has 7 vendors wired (amazon, chewy, petco, petsmart, marinedepot, bulk-reef-supply, liveaquaria) — but content only uses amazon + chewy. The other 5 are dead infrastructure.

This is editorial-copy work (COO lane), not infrastructure work. Flagging as an opportunity:
- Marine-side (saltwater) content (`/saltwater/*`, `/aquarium-types/marine-aquariums*`) → Bulk Reef Supply and LiveAquaria are the obvious leaders for that audience and likely outperform Amazon EPC for high-AOV reef gear.
- Plant-side (planted-tank) content → LiveAquaria (plant assortment) + specialty Amazon over Chewy.

Estimated lift: hard to size without traffic-per-page data, but on a Tier-1 protect-asset site, vendor diversification reduces single-supplier risk (if Chewy disables Partners or Amazon Associates changes commission terms) and lifts EPC on the right pages.

## Audit hygiene confirms

- ✅ FTC disclosure on every monetized page
- ✅ No fabricated DVM/MD bylines
- ✅ No fake testing badges
- ✅ Both `affiliate-routes.ts` registries use `PLACEHOLDER` tracking IDs (per §6 rule 3)
- ✅ `/go/[vendor]/[sku]` handlers exist on both sites and route correctly
- ✅ 20 of ~53 monetized cards route via `/go` (the rest use direct merchant URLs — matches the ferret-com cage-setup pattern; acceptable but worth eventually consolidating)

## Not in scope for this audit (deferred)

- 12 metadata-policy violations surfaced by `scripts/ci/metadata-policy.mjs` (mostly vets-co duplicate titles) — COO lane.
- Affiliate tracking-param hydration leaks (D-013 follow-up) — already shipped in another branch per `MONETIZATION-DECISIONS-LOG`.
- Mediavine Journey staging (`dir-011`) — gated on Carlo confirm; not started.

## Monetization Bot next-up

Picking up #5 from fleet-activation queue: **horse-cluster commerce layer** (`dir-012` Layer 2) — tack buy-boxes on saddle.com + horses.com intent pages, built to Equine Network's value drivers per `2026-05-30-csro-horse-cluster-build-spec.md`. Starting now.
