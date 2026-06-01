# Monetization Bot — Wakeup Queue

**Owner bot:** Monetization Bot · **Lane:** affiliate routes, `/go` handlers, buy-boxes, funnels, email, tracking IDs
**Last updated:** 2026-05-31 (by CSRO)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Monetization.md and do the top queued item. Commit + push to your own branch, open a PR rebased on main. When done, update this queue file (finished/remaining/blocked/next/Carlo-needed) before ending. Stay in lane; QC §1 trust bar. Don't idle — next item if blocked. Don't ask Carlo unless queue is empty/blocked.
```

## ⏰ AMAZON 180-DAY CLOCK (NEW 2026-05-31)
Amazon Associates **APPROVED 2026-05-31**. Account closes if no **3 qualifying sales by ~2026-11-27**. Every `/go/amazon/*` link is now a LIVE earner. This makes dir-009 + dir-019 a countdown, not a backlog. Real constraint is now traffic (launch/DNS = Carlo), not wiring.

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 0 | **🚧 PR #265 + #266 fix-backs** (IR #1 + #3) | 🔴 P0 BLOCKS MERGE | queued | Two CSRO-verified blocks before #265/#266 merge. Brief: `ops/handoffs/2026-06-01-csro-to-monetization-pr265-266-fixbacks.md`. **(A)** DELETE the chlorhexidine ReviewCard+CTA on `apps/horses-com/src/app/guides/equine-dental-care/page.tsx` (QC §1.5.b — no monetized clinical products; keep the brush card). **(B)** add `horses-com` to AMAZON_BRAND+CHEWY_BRAND in `scripts/set-affiliate-tag.sh` (brand clicks untagged). Verify affiliate-link-integrity + trust-guard. | this session |
| 1 | **Ferret buy-boxes** (`dir-009`) | 🔴 P0 first-dollar | queued | Execute `ops/handoffs/2026-05-31-csro-ferret-monetization-turnkey-spec.md` exactly. **ctaHref="/go/<vendor>/<sku>" is mandatory** (no bare URLs). Real SKUs. Disclosure above fold. The earlier ferret PR had wrong keys (chewy-brand) — see fix-back `2026-05-31-csro-ferret-pr-fixback.md`. Amazon tag now LIVE → these earn on day 1. | this session |
| 2 | **110 untracked links** (`dir-019`) | 🔴 HIGH found-money | queued | Route 110 bare chewy/amazon ctaHrefs through `/go`. Brief: `2026-05-31-csro-to-monetization-untracked-links-leak.md`. dog-com first (42). Amazon links now LIVE — every bare URL = lost qualifying sale toward the 3-sale rule. Verify: `node scripts/ci/affiliate-link-integrity.mjs` → 0 untracked. | this week |
| 3 | **Ferret brand-route tags** (`dir-022`, IR #4) | 🔴 HIGH silent-leak | queued | ferret-com uses `/go/amazon-brand/` + `/go/chewy-brand/` but `scripts/set-affiliate-tag.sh` lists ferret-com under AMAZON/CHEWY parent tags, NOT under AMAZON_BRAND/CHEWY_BRAND (only fish/lizard/saddle/petfood/petfoods/vets). So brand-search clicks fall back to PLACEHOLDER = untagged. Fix: add `ferret-com` to AMAZON_BRAND + CHEWY_BRAND in set-affiliate-tag.sh, OR normalize ferret brand routes to parent amazon/chewy. Verify the env-var name each `/go` route expects. | this session |
| 4 | **Horses/Saddle 51 direct CTAs** (`dir-019` cont., IR #7) | 🔴 HIGH found-money | queued | 51 direct vendor CTAs bypass `/go` on horses-com + saddle-com. Includes vendor slug mismatches (e.g. `schneiders` vs registered `schneider`) and unregistered vendors. Replace with registered `/go/<vendor>/<sku>`; resolve slug mismatches. Verify: `node scripts/ci/affiliate-link-integrity.mjs` → 0 untracked on both. | this week |
| 5 | **PetFood buy-box retarget** (`dir-009`) | MED | queued | Buy-boxes on petfood.com (5K/mo). | — |
| 6 | **Vets.co carrier realism** (`dir-007`) | MED | queued | Confirm which of the 11 insurance carriers we can self-serve enroll with (gates real payout). | — |

## Status notes
- **What's done:** dir-015 #2/#3/#4 merged (vets routes, Dog disclosure, env-var). dir-015 #1 + dir-017 = VOID (vendors were already registered — IR caught it).
- **What's blocked:** nothing — all 6 items are unblocked, build on your own branch (main is green).
- **Carlo needed?** No — execute the queue.
- **IR findings folded in 2026-06-01:** #4 → item 3 (ferret brand tags untagged), #7 → item 4 (Horses/Saddle 51 CTAs). Both VERIFIED by CSRO against the repo before filing.

## DO NOT TOUCH
- COO lane (pages/routing structure, CI), Visual lane (design), CSRO registers.
- Dog.com/Fish.com aggressive monetization (protect-asset — buy-boxes OK, no interstitials/pop-ups).
- Never commit real tracking IDs (env-var placeholders only, §6).
