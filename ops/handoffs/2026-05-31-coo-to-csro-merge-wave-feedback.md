---
from: coo
to: csro
status: feedback
created: 2026-05-31
next_action: "CSRO updates open-directives register: mark dir-005/007/008/010/014/015 closed; mark Tier-1 protect-the-asset launch sign-offs received"
---

# COO → CSRO — Merge wave feedback + directive closures

Per Carlo's 2026-05-31 push ("get all PRs loaded and merged… too many jobs out there"), COO drove a large merge wave. Reporting back so the open-directives register, bot-quality ledger, and any pacing brief reflect the state on main.

## CSRO directives closed (with PR refs)

| Directive | Status | Closing PR(s) |
|---|---|---|
| `csro-dir-2026-W22-005` petsupplies scaffold decommission | ✅ closed | #221 (merged) |
| `csro-dir-2026-W22-007` Vets.co insurance go-live readiness (Tracks 1 + ops) | ✅ closed (Track 2 directory data-source still pending Carlo) | #230 (trust audit), #239 (cutover checklist) |
| `csro-dir-2026-W22-008` Efty footer component | ✅ build closed (URLs blocked on `dir-006`) | #226 |
| `csro-dir-2026-W22-010` free-tier vet directory feasibility | ✅ research closed | #224 |
| `csro-dir-2026-W22-014` Vercel build-cost reduction (COO portion) | ✅ closed | #219 (vercel-ignore.sh wrapper) |
| `csro-dir-2026-W22-015` dir-015 4 sub-fixes (Monetization Bot) | ✅ all 4 closed | #240 (DNA vendor 404s), #241 (vets-co product-route removal), #242 (Dog FTC disclosure surfacing), #243 (env-var reconcile) |
| COO queue #7 schema/internal-link hygiene backfill | ✅ closed | #227 (Tier-1 hub linking on Dog/Fish homepages + nav) |

## Tier-1 protect-the-asset launch sign-offs received (Visual Bot)

| Site | PR | Status |
|---|---|---|
| Ferret.com | #232 | ✅ launch sign-off (enables footer FTC disclosure) |
| Vets.co insurance | #233 | ✅ launch sign-off + mobile-padding regression caught |
| PetFood.com | #235 | ✅ launch sign-off GREEN |

## Major code-system PRs landed this wave

- **BuyBox primitive** (#231) — Visual lane; adopted on 3 PetFood brand pages. Supports Monetization Bot dir-009 buy-box work.
- **Audience-capture Layer 1** (#236 conflicted, #238 follow-up merged) — Visual lane; EmailCapture + lead magnets on high-intent pages. Partial dir-012 horse-cluster Layer 1 progress (PetFood index pages).
- **Monetization wave** (#229) — Monetization Bot sessions 1-3 brief + email Layer.
- **dir-015 portfolio fix** — DNA affiliate 404s + vets-co policy compliance + Dog FTC disclosure + env-var reconcile all landed.

## Conflict-blocked PRs (owner-bot rebases needed; COO has pinged each via PR comment)

| PR | Owner | Action |
|---|---|---|
| #161 | Visual | ScaffoldHomeShell on seniorpets/askthevet — likely impacted by petsupplies removal from SiteId |
| #181 | Monetization | D-011/D-012 dog breed insurance CTAs |
| #185 | Visual | CalculatorShell + Dog calorie calculator |
| #193 | Monetization | D-015 GEO foundation (conflicts likely with shared `packages/config/robots.ts`) |
| #194 | Monetization | D-016 Fish.com Tier 1 promotion |
| #211 | Visual | Lizard enclosure calc |
| #236 | Visual | Audience-capture Layer 1 (5 high-intent pages) |
| #178 | (draft) Horses Racing Bot | Racing income surfaces — still draft per Racing Bot's working state |

PR comments posted on all 7 with rebase ask + conflict-surface hint.

## Status of remaining COO queue items (per fleet-activation brief)

| COO queue item | Status | Blocker / next step |
|---|---|---|
| #1 dir-007 Vets.co insurance go-live | ✅ COO Track 1 + ops checklist closed | Track 2 (directory data source) → Carlo decision; remaining items in #239 owner-routed to Carlo / Mon Bot |
| #2 Ferret.com launch readiness | Unblocked by #232 (Visual sign-off) | Awaiting **Monetization dir-009 affiliate wiring landing** to actually go live |
| #3 Consolidation redirects (PetFoods→PetFood, Ferrets→Ferret) | Sequencing-blocked per CSRO "monetize → migrate → 301" | Monetization Bot lands dir-009 first |
| #4 dir-010 free-tier vet directory | ✅ research closed | CSRO + Carlo go/no-go on 10-state pilot |
| #5 dir-008 Efty footer | ✅ build closed | Carlo provides Efty URLs (dir-006) → COO wires per-tier |
| #6 dir-005 petsupplies | ✅ closed | n/a |
| #7 Schema/internal-link hygiene backfill | ✅ closed | Continuing as new hubs ship |
| **dir-012 horse-cluster** (added later) | Partial — Visual Bot shipped Layer 1 (#238 PetFood index pages) | Sequencing per CSRO behind dir-009 for horse-cluster proper |
| **dir-003 registrar/renewal dates** | Carlo handling per 2026-05-31 directive | n/a — COO is not blocking |

## What COO is NOT doing per Carlo's 2026-05-31 directive

- Not soliciting registrar/renewal data (Carlo will provide directly to CSRO)
- Not inventing content or busywork while queue is sequencing-blocked

## What unlocks next dispatch wave

1. **Monetization Bot lands dir-009 wiring on Ferret.com + PetFood retarget** → unblocks Ferret launch (COO queue #2) + consolidation redirects (COO queue #3) + dir-012 horse-cluster proper sequencing
2. **Carlo decision on free-tier vet directory pilot** → unblocks dir-007 Track 2 (COO has feasibility brief ready, 6-9 dev day build estimate)
3. **Carlo provides Efty URLs** (dir-006) → COO wires per-tier in <5 min (build is shipped, URLs are the only missing piece)

## CSRO suggested next actions

1. Mark `dir-005`, `dir-008` (build portion), `dir-010` (research portion), `dir-014` (COO portion), `dir-015` (all 4 sub-fixes), `dir-007` (Tracks 1 + ops portions) as **closed** in `open-directives.md`
2. Update bot-quality-ledger with this merge wave (12+ PRs, no trust-bar regressions surfaced by IR Bot per latest dissent)
3. If a daily brief is due, file it referencing this handoff so the IR Bot loop closes
4. Consider dispatching dir-016 (Horses.com racing-fork decision gate) to Racing Bot — that's their queue, not COO's

🤖 COO — feeding back to CSRO per Carlo's 2026-05-31 "feed data back via PRs" directive. No code changes in this handoff; pure status synchronization.
