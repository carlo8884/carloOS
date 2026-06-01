# Monetization Bot — Wakeup Queue

**Owner bot:** Monetization Bot · **Lane:** affiliate routes, `/go` handlers, buy-boxes, funnels, email, tracking IDs
**Last updated:** 2026-06-01 (Monetization Bot — items 3 + 4 shipped)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Monetization.md and do the top queued item. Commit + push to your own branch, open a PR rebased on main. When done, update this queue file (finished/remaining/blocked/next/Carlo-needed) before ending. Stay in lane; QC §1 trust bar. Don't idle — next item if blocked. Don't ask Carlo unless queue is empty/blocked.
```

## ⏰ AMAZON 180-DAY CLOCK (NEW 2026-05-31)
Amazon Associates **APPROVED 2026-05-31**. Account closes if no **3 qualifying sales by ~2026-11-27**. Every `/go/amazon/*` link is now a LIVE earner. Real constraint is now traffic (launch/DNS = Carlo), not wiring.

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 1 | **Ferret buy-boxes** (`dir-009`) | 🔴 P0 first-dollar | ✅ DONE — PR #253 merged | — | — |
| 2 | **110 untracked links** (`dir-019`) | 🔴 HIGH found-money | 🟡 IN-REVIEW — PR #265 | 98 of 101 routed; 3 remaining (vets-co/telehealth) blocked on §5. Awaiting merge. | merge pending |
| 3 | **Ferret brand-route tags** (`dir-022`, IR #4) | 🔴 HIGH silent-leak | 🟡 IN-REVIEW — PR #267 | `set-affiliate-tag.sh` updated: ferret-com added to AMAZON_BRAND + CHEWY_BRAND; vets-co removed (PR #241 dropped its brand routes). | merge pending |
| 4 | **Horses/Saddle 51 direct CTAs** (`dir-019` cont., IR #7) | 🔴 HIGH found-money | 🟡 IN-REVIEW — PR #267 | All 51 bare URLs converted to `/go/<vendor>/<sku>`; slug mismatches (`schneiders`→`schneider`, `riding-warehouse`→`ridingwarehouse`) fixed; `amazon-brand`+`chewy-brand` added to horses-com routes (also in PR #265 — duplicate resolves cleanly). | merge pending |
| 5 | **PetFood buy-box retarget** (`dir-009`) | MED | ✅ DONE — on main (PR #229 + PR #231 `BuyBox` primitive) | — | — |
| 6 | **Vets.co carrier realism** (`dir-007`) | MED | ✅ DONE — research handoff filed `2026-05-31-monetization-vets-co-carrier-realism.md` | All 13 carriers self-serve enrollable; gates on Impact gateway approval (24h) + per-merchant (3-7d each). | — |
| 7 | **Horse-cluster L2 — equine-dental-care buy-boxes** | MED | 🟡 IN-REVIEW — PR #266 | 2 supportive-care ReviewCards (hygiene brush kit, chlorhexidine rinse). `/go/amazon-brand/` routed. Last horses-com guide without buy-boxes that has product fit. | merge pending |
| 8 | **vets-co telehealth ReviewCards** | MED | 🔴 BLOCKED | Vetster + AskVet + Chewy Connect cards on `/telehealth/page.tsx` reference vendor keys outside vets-co's §5 allow-list (insurance only). Needs Carlo §5 amendment OR remove the 3 cards. | Carlo decision |
| 9 | **Mediavine Journey application** (`dir-W22-011`) | MED | 🔴 BLOCKED | Sites at ≥1K sessions qualify (dog 36K, ferret 11K, fish 7K, petfood 5K, horses ~1K). Need Carlo confirm. | Carlo confirm |
| 10 | **Welcome email sequences (saddle-buyer, horse-owner)** | LOW | 🔴 BLOCKED | Handoff `2026-05-31-monetization-email-sequence-gap.md` recommends Path A (2 generic sequences). Needs CSRO decision. | CSRO decision |

## Status notes
- **What's done:**
  - dir-009 Ferret (PR #253) ✅
  - dir-009 PetFood retarget (already on main via #229/#231) ✅
  - dir-017 DNA registration (verified) ✅
  - horses-com saddle-fit /go (PR #258) ✅
  - dir-007 vets-co carrier realism research (handoff filed) ✅
- **In-flight (awaiting merge):**
  - PR #265 (dir-019 — 98 ctaHref values to /go)
  - PR #266 (horse-cluster L2 — equine-dental buy-boxes)
  - PR #267 (this PR — items 3 + 4)
- **What's blocked:**
  - vets-co telehealth (Carlo §5 amendment)
  - Mediavine Journey (Carlo confirm)
  - Welcome email sequences (CSRO decision)
- **Carlo needed?** §5 amendment for vets-co telehealth; Mediavine confirm.
- **Next unblocked unit of work after #265/#266/#267 land:** Queue is exhausted of unblocked, code-actionable Monetization work. Pending Carlo on remaining items.

## DO NOT TOUCH
- COO lane (pages/routing structure, CI), Visual lane (design), CSRO registers.
- Dog.com/Fish.com aggressive monetization (protect-asset — buy-boxes OK, no interstitials/pop-ups).
- Never commit real tracking IDs (env-var placeholders only, §6).
