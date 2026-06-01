# Monetization Bot — Wakeup Queue

**Owner bot:** Monetization Bot · **Lane:** affiliate routes, `/go` handlers, buy-boxes, funnels, email, tracking IDs
**Last updated:** 2026-06-01 (Monetization Bot — §1.5.b sweep + queue close-out)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Monetization.md and do the top queued item. Commit + push to your own branch, open a PR rebased on main. When done, update this queue file (finished/remaining/blocked/next/Carlo-needed) before ending. Stay in lane; QC §1 trust bar. Don't idle — next item if blocked. Don't ask Carlo unless queue is empty/blocked.
```

## ⏰ AMAZON 180-DAY CLOCK
Amazon Associates **APPROVED 2026-05-31**. Account closes if no **3 qualifying sales by ~2026-11-27**. Every `/go/amazon/*` link is a LIVE earner.

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 0 | **🚧 PR #265 + #266 fix-backs** (IR #1 + #3) | 🔴 P0 BLOCKS MERGE | ✅ DONE | Both fix-backs pushed: #266 chlorhexidine card removed (commit fffbd29); #265 horses-com added to AMAZON_BRAND/CHEWY_BRAND (commit 45f4522). PR #267 also synced (commit 46c9fef). Verified: trust-guard PASS, affiliate-link-integrity 0 dead /go links. | — |
| 1 | **Ferret buy-boxes** (`dir-009`) | 🔴 P0 first-dollar | ✅ DONE — PR #253 merged | — | — |
| 2 | **110 untracked links** (`dir-019`) | 🔴 HIGH found-money | 🟡 IN-REVIEW — PR #265 (clean, fix-back applied) | 98 of 101 routed; horses-com env-var sweep added in fix-back round. 3 remaining = vets-co/telehealth (item 8). | merge pending |
| 3 | **Ferret brand-route tags** (`dir-022`, IR #4) | 🔴 HIGH silent-leak | 🟡 IN-REVIEW — PR #267 | `set-affiliate-tag.sh` — ferret-com + horses-com added to AMAZON_BRAND/CHEWY_BRAND; vets-co removed. | merge pending |
| 4 | **Horses/Saddle 51 direct CTAs** (`dir-019` cont., IR #7) | 🔴 HIGH found-money | 🟡 IN-REVIEW — PR #267 | 51 ctaHref values converted to `/go/<vendor>/<sku>`; slug mismatches (`schneiders`→`schneider`, `riding-warehouse`→`ridingwarehouse`) fixed. | merge pending |
| 5 | **PetFood buy-box retarget** (`dir-009`) | MED | ✅ DONE — on main (PR #229 + #231 BuyBox primitive) | — | — |
| 6 | **Vets.co carrier realism** (`dir-007`) | MED | ✅ DONE — research handoff `2026-05-31-monetization-vets-co-carrier-realism.md` | All 13 carriers self-serve enrollable via Impact (24h gateway, 3-7d per carrier) + ASPCA direct. | — |
| 7 | **Horse-cluster L2 — equine-dental** | MED | 🟡 IN-REVIEW — PR #266 (chlorhexidine card removed in fix-back) | 1 supportive-care ReviewCard (dental hygiene brush kit). | merge pending |
| 8 | **§1.5.b sweep — Rx flea/tick + CBD** (new 2026-06-01) | 🔴 HIGH QC | 🟡 IN-REVIEW — PR #273 | Proactive portfolio-wide §1.5.b audit caught 3 Rx purchase CTAs: Bravecto + NexGard (best-flea-tick-prevention) + ElleVet CBD (best-joint-supplements). All 3 converted to `/find-a-vet` (matches heartworm-prevention pattern). Also §1.5.a side-fix on CBD card (removed dose range). | merge pending |
| 9 | **vets-co telehealth ReviewCards** | MED | 🔴 BLOCKED | Vetster + AskVet + Chewy Connect cards reference vendor keys outside vets-co's §5 allow-list (insurance only). Needs Carlo §5 amendment OR remove the 3 cards. | Carlo decision |
| 10 | **Mediavine Journey application** (`dir-W22-011`) | MED | 🔴 BLOCKED | Sites at ≥1K sessions qualify. Needs Carlo confirm. | Carlo confirm |
| 11 | **Welcome email sequences (saddle-buyer, horse-owner)** | LOW | 🔴 BLOCKED | `2026-05-31-monetization-email-sequence-gap.md` Path A recommended. Needs CSRO decision. | CSRO decision |

## Status notes
- **Done this session:**
  - dir-009 Ferret (PR #253 merged)
  - dir-009 PetFood (on main #229/#231)
  - dir-017 DNA registration
  - horses-com saddle-fit /go (PR #258 merged)
  - dir-007 vets-co carrier realism (handoff)
  - PR #265 + #266 fix-backs (items 2, 3, 7)
- **In-flight (awaiting merge):**
  - PR #265 — dir-019 + horses-com env-var sweep
  - PR #266 — horse-cluster L2 (chlorhexidine removed)
  - PR #267 — dir-022 + 51 horses/saddle CTAs + horses-com env-var sync
  - PR #272 — queue update doc (superseded by this commit; close after merge)
  - PR #273 — §1.5.b sweep + this queue update
- **What's blocked:** items 9, 10, 11 (Carlo / CSRO decisions).
- **Portfolio-wide §1.5.b audit (this session):** swept all 7 monetized apps for Rx/clinical purchase CTAs. Only dog-com had violations (3 cards, all in PR #273). ferret-com, fish-com, lizard-com, saddle-com, horses-com, petfood-com, petfoods-com all clean.

## DO NOT TOUCH
- COO lane (pages/routing structure, CI), Visual lane (design), CSRO registers.
- Dog.com/Fish.com aggressive monetization (protect-asset — buy-boxes OK, no interstitials/pop-ups).
- Never commit real tracking IDs (env-var placeholders only, §6).
- QC §1.5.a — no consumer-facing medication dose ranges.
- QC §1.5.b — no affiliate buy-boxes on clinical/medicated/Rx-adjacent products.
