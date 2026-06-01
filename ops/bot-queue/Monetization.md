# Monetization Bot — Wakeup Queue

**Owner bot:** Monetization Bot · **Lane:** affiliate routes, `/go` handlers, buy-boxes, funnels, email, tracking IDs
**Last updated:** 2026-06-01 (Monetization Bot — fix-back round)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Monetization.md and do the top queued item. Commit + push to your own branch, open a PR rebased on main. When done, update this queue file (finished/remaining/blocked/next/Carlo-needed) before ending. Stay in lane; QC §1 trust bar. Don't idle — next item if blocked. Don't ask Carlo unless queue is empty/blocked.
```

## ⏰ AMAZON 180-DAY CLOCK (NEW 2026-05-31)
Amazon Associates **APPROVED 2026-05-31**. Account closes if no **3 qualifying sales by ~2026-11-27**. Every `/go/amazon/*` link is now a LIVE earner.

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 1 | **Ferret buy-boxes** (`dir-009`) | 🔴 P0 first-dollar | ✅ DONE — PR #253 merged | — | — |
| 2 | **110 untracked links** (`dir-019`) | 🔴 HIGH found-money | 🟡 IN-REVIEW — PR #265 | 98 of 101 routed; horses-com added to AMAZON_BRAND/CHEWY_BRAND sweep (fix-back round). 3 remaining untracked are vets-co/telehealth (item #8). | merge pending |
| 3 | **Ferret brand-route tags** (`dir-022`, IR #4) | 🔴 HIGH silent-leak | 🟡 IN-REVIEW — PR #267 | `set-affiliate-tag.sh` — ferret-com + horses-com added to AMAZON_BRAND/CHEWY_BRAND; vets-co removed (PR #241 dropped its brand routes). | merge pending |
| 4 | **Horses/Saddle 51 direct CTAs** (`dir-019` cont., IR #7) | 🔴 HIGH found-money | 🟡 IN-REVIEW — PR #267 | 51 ctaHref values converted to `/go/<vendor>/<sku>`; slug mismatches (`schneiders`→`schneider`, `riding-warehouse`→`ridingwarehouse`) fixed. | merge pending |
| 5 | **PetFood buy-box retarget** (`dir-009`) | MED | ✅ DONE — on main (PR #229 + #231 `BuyBox` primitive) | — | — |
| 6 | **Vets.co carrier realism** (`dir-007`) | MED | ✅ DONE — research handoff `2026-05-31-monetization-vets-co-carrier-realism.md` | All 13 carriers self-serve enrollable via Impact (24h gateway, 3-7d per carrier) + ASPCA direct. | — |
| 7 | **Horse-cluster L2 — equine-dental** | MED | 🟡 IN-REVIEW — PR #266 | 1 supportive-care ReviewCard (dental hygiene brush kit). Chlorhexidine card removed in fix-back round per QC §1.5 (Rx-territory product not appropriate for consumer affiliate CTA). | merge pending |
| 8 | **vets-co telehealth ReviewCards** | MED | 🔴 BLOCKED | Vetster + AskVet + Chewy Connect cards on `/telehealth/page.tsx` reference vendor keys outside vets-co's §5 allow-list (insurance only). Needs Carlo §5 amendment OR remove the 3 cards. | Carlo decision |
| 9 | **Mediavine Journey application** (`dir-W22-011`) | MED | 🔴 BLOCKED | Sites at ≥1K sessions qualify. Needs Carlo confirm. | Carlo confirm |
| 10 | **Welcome email sequences (saddle-buyer, horse-owner)** | LOW | 🔴 BLOCKED | `2026-05-31-monetization-email-sequence-gap.md` Path A recommended. Needs CSRO decision. | CSRO decision |

## Status notes
- **Done this session:**
  - dir-009 Ferret (PR #253)
  - dir-009 PetFood (on main #229/#231)
  - dir-017 DNA registration
  - horses-com saddle-fit /go (PR #258)
  - dir-007 vets-co carrier realism (handoff)
- **In-flight (awaiting merge):**
  - PR #265 — dir-019 + horses-com env-var sweep
  - PR #266 — horse-cluster L2 (chlorhexidine card removed in fix-back)
  - PR #267 — dir-022 (ferret brand-tag) + dir-019 cont. (51 horses/saddle CTAs) + horses-com env-var
- **Fix-back round (2026-06-01):**
  - PR #266: removed chlorhexidine ReviewCard per QC §1.5 (Rx-territory)
  - PR #265: added horses-com to AMAZON_BRAND/CHEWY_BRAND sweep
  - PR #267: synced horses-com into env-var sweep (so PR #265 + #267 converge on same final state)
- **What's blocked:** items 8, 9, 10 (Carlo / CSRO decisions).

## DO NOT TOUCH
- COO lane (pages/routing structure, CI), Visual lane (design), CSRO registers.
- Dog.com/Fish.com aggressive monetization (protect-asset — buy-boxes OK, no interstitials/pop-ups).
- Never commit real tracking IDs (env-var placeholders only, §6).
- QC §1.5.a — no consumer-facing medication dose ranges. Rx-territory products not appropriate for consumer affiliate CTAs.
