# Monetization Bot — Wakeup Queue

**Owner bot:** Monetization Bot · **Lane:** affiliate routes, `/go` handlers, buy-boxes, funnels, email, tracking IDs
**Last updated:** 2026-06-01 (Monetization Bot — dir-009 + dir-019 closed; equine-dental buy-boxes shipped)

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
| 2 | **110 untracked links** (`dir-019`) | 🔴 HIGH found-money | 🟡 IN-REVIEW — PR #265 (clean, awaiting merge) | 98 of 101 routed; 3 remaining (vets-co/telehealth) blocked on §5 | merge pending |
| 3 | **PetFood buy-box retarget** (`dir-009`) | MED | ✅ DONE — already on main (PR #229 + #231 `BuyBox` primitive) | — | — |
| 4 | **Horse-cluster Layer 2 — equine-dental-care** (`dir-W22-012`) | MED | 🟡 IN-REVIEW — PR #266 (open) | 2 supportive-care ReviewCards added to horses-com `/guides/equine-dental-care` (dental hygiene kit + chlorhexidine rinse); `/go/amazon-brand/` routed; supportive-care framing per QC §3.3 | merge pending |
| 5 | **vets-co telehealth (Vetster/AskVet/Chewy Connect)** | MED | 🔴 BLOCKED | 3 ReviewCards on `/telehealth/page.tsx` reference vendor keys outside vets-co's §5 allow-list (insurance only). Needs Carlo §5 amendment to add telehealth, OR remove the 3 cards. | Carlo decision |
| 6 | **Vets.co carrier realism** (`dir-007`) | MED | queued | Confirm which of the 11 insurance carriers we can self-serve enroll with (gates real payout). Research task. | — |
| 7 | **Mediavine Journey application** (`dir-W22-011`) | MED | 🔴 BLOCKED | Sites at ≥1K sessions qualify (dog 36K, ferret 11K, fish 7K, petfood 5K, horses ~1K). Need Carlo confirm before applying. | Carlo confirm |

## Status notes
- **What's done:** dir-009 Ferret (PR #253), dir-009 PetFood retarget (on main), dir-017 DNA registration (verified), horses-com saddle-fit (PR #258), dir-019 untracked sweep (PR #265 open), horse-cluster dental buy-boxes (PR #266 open).
- **What's blocked:**
  - Item #5 (vets-co telehealth) — Carlo §5 amendment
  - Item #7 (Mediavine) — Carlo confirm
- **Carlo needed?**
  - §5 policy amendment for vets-co telehealth (Vetster, AskVet)
  - Mediavine Journey activation confirm
- **Next unblocked unit of work:** Horse-cluster Layer 2 audit complete (18/19 review/guide pages have buy-boxes; only `/guides/equine-vaccination-schedule` remains — vaccination has no direct product fit, so leaving as-is). Suggested next: Horse-cluster Layer 1 (audience capture — EmailCapture + lead magnets) is COO+Monetization shared; see `2026-05-30-csro-horse-cluster-build-spec.md` Layer 1.

## DO NOT TOUCH
- COO lane (pages/routing structure, CI), Visual lane (design), CSRO registers.
- Dog.com/Fish.com aggressive monetization (protect-asset — buy-boxes OK, no interstitials/pop-ups).
- Never commit real tracking IDs (env-var placeholders only, §6).
