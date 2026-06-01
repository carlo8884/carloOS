# Monetization Bot — Wakeup Queue

**Owner bot:** Monetization Bot · **Lane:** affiliate routes, `/go` handlers, buy-boxes, funnels, email, tracking IDs
**Last updated:** 2026-06-01 (by Monetization Bot — dir-009 + dir-019 closed)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Monetization.md and do the top queued item. Commit + push to your own branch, open a PR rebased on main. When done, update this queue file (finished/remaining/blocked/next/Carlo-needed) before ending. Stay in lane; QC §1 trust bar. Don't idle — next item if blocked. Don't ask Carlo unless queue is empty/blocked.
```

## ⏰ AMAZON 180-DAY CLOCK (NEW 2026-05-31)
Amazon Associates **APPROVED 2026-05-31**. Account closes if no **3 qualifying sales by ~2026-11-27**. Every `/go/amazon/*` link is now a LIVE earner. This makes dir-009 + dir-019 a countdown, not a backlog. Real constraint is now traffic (launch/DNS = Carlo), not wiring.

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 1 | **Ferret buy-boxes** (`dir-009`) | 🔴 P0 first-dollar | ✅ DONE | Shipped PR #253 — 6 ferret pages monetized w/ `/go/` routing, FTC disclosure above fold, supportive-care framing on health pages | — |
| 2 | **110 untracked links** (`dir-019`) | 🔴 HIGH found-money | 🟡 IN-REVIEW | PR #265 — 98 of 101 routed through `/go/`. 3 remaining (vets-co telehealth) BLOCKED on §5 policy decision. `affiliate-link-integrity.mjs`: 0 dead, 3 untracked. | merge pending |
| 3 | **PetFood buy-box retarget** (`dir-009b`) | MED | ✅ DONE | Already on main via PR #229 (`BuyBox` primitive deployed by Visual Bot's PR #231). All 3 brand pages (blue-buffalo, hills-vs-rc, orijen-vs-acana) have `/go/`-routed buy-boxes. | — |
| 4 | **vets-co telehealth (Vetster/AskVet/Chewy Connect)** | MED | 🔴 BLOCKED | 3 ReviewCards reference vendor keys outside vets-co's §5 allow-list (insurance only). Needs Carlo §5 amendment to add telehealth vendors OR remove the 3 cards. | Carlo decision |
| 5 | **Vets.co carrier realism** (`dir-007`) | MED | queued | Confirm which of the 11 insurance carriers we can self-serve enroll with (gates real payout). | — |
| 6 | **Horse-cluster Layer 2 audit** (`dir-W22-012`) | LOW | queued | Audit horses-com + saddle-com review pages for missing buy-boxes. Status as of 2026-06-01: 16/19 review/guide pages already have ReviewCards. Two horses-com guides (equine-dental-care, equine-vaccination-schedule) lack buy-boxes — dental is the only one with product fit. | — |

## Status notes
- **What's done:** dir-009 Ferret (PR #253), dir-019 untracked sweep (PR #265, awaiting merge), dir-009 PetFood retarget (already on main via #229/#231), dir-017 DNA registration (verified done), horses-com saddle-fit /go fix (PR #258).
- **What's blocked:**
  - Item #4 (vets-co telehealth) — needs Carlo §5 amendment
  - Item #6 (horse-cluster L2) — partial; only 2 guide pages remain without buy-boxes, and 1 of those has no product fit
  - Mediavine Journey (csro-dir-W22-011) — needs Carlo confirm
- **Carlo needed?**
  - §5 policy amendment for vets-co telehealth (Vetster, AskVet)
  - Mediavine Journey activation confirm
- **Next unblocked unit of work after #265 merges:** add 1-2 supportive-care ReviewCards to horses-com `/guides/equine-dental-care` (equine toothbrush kit, dental water additive — Amazon Associates LIVE earner).

## DO NOT TOUCH
- COO lane (pages/routing structure, CI), Visual lane (design), CSRO registers.
- Dog.com/Fish.com aggressive monetization (protect-asset — buy-boxes OK, no interstitials/pop-ups).
- Never commit real tracking IDs (env-var placeholders only, §6).
