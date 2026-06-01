# COO — Wakeup Queue

**Owner:** COO · **Lane:** content pages, build orchestration, CI/workflows, routing, STATUS/DASHBOARD/BACKLOG
**Last updated:** 2026-06-01 (by COO — dir-014 closeout merged #268; dir-007 IR F6 noindex-gate shipped)

## RESTART PROMPT
```
Pull latest origin/main. Read ops/bot-queue/COO.md, do the top queued item, commit+push to your own branch, open a PR rebased on main. Keep main green (run scripts/ci/*.mjs before pushing). Update this file before stopping. Don't idle; don't ask Carlo unless empty/blocked.
```

## Queue (priority order)
| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 1 | **Vets.co insurance launch-readiness** (`dir-007`) | HIGH | in_progress | Trust audit + ops portions closed (#230, #239). IR F6 noindex-gate on the 2,912 breed×state pages shipped 2026-06-01. Remaining: carrier-stack realism (Monetization 1.1) + Track-2 directory data source (Carlo). | — |
| 2 | **Efty footer component** (`dir-008`) | MED | blocked | Build closed (#226). Carlo provides per-tier Efty URLs (`dir-006`) → COO wires per-tier in <5 min. | — |
| 3 | **Free-tier vet-directory prep** (`dir-010`) | MED | blocked | Research closed (#224). Go/no-go on 10-state pilot → Carlo. | — |
| 4 | **Consolidation redirects** | MED | blocked | PetFoods→PetFood, Ferrets→Ferret. Sequencing-blocked behind Monetization `dir-009` per CSRO redirect-map ("monetize → migrate → 301"). | — |

## Status
- **Done this session (2026-06-01):**
  - `dir-014` code-side closeout merged — #268. CI `TURBO_TOKEN`/`TURBO_TEAM`
    wired; `vercel-ignore.sh` patterns broadened; Carlo dashboard checklist
    filed at `ops/handoffs/2026-06-01-coo-to-carlo-vercel-cost-dashboard-steps.md`
  - `dir-007` IR F6 noindex-gate on the 2,912 breed×state cross-product
    pages (`(funnels)/pet-insurance/breeds/[breed]/[state]/page.tsx`).
    Hub + breed-only + state-only pages stay indexed.
- **Done prior sessions:**
  - `dir-018` funnel-tree dedup (un-red main) — #251
  - `dir-020` Bot Wakeup Queue v1 adoption — #264
  - IR-Guard CI integration review/merge — #260
  - DisplayAds primitive + 5-site wire-up (`dir-011` COO portion) — #256
  - Sitemap route-group fix (Visual handoff) — #252
  - Trust-bar edits (saddle leather guide + dog insurance review) — #254
  - CSRO feedback handoff (large merge wave) — #244
  - Editorial metadata-policy normalization — folded into #251
  - Drained merge queue: #229, #246, #249, #258, #259, #261 (CSRO/Visual/Mon all green) merged
- **Owner-blocked PRs (other bots' lanes, manual rebase needed):**
  - Monetization: #181, #250, #255
  - Visual: #161, #185, #211, #236
  - GEO (Mon): #193, #194
  - Racing: #178 (draft)
- **Blocked on Carlo:** Efty per-tier URLs (`dir-006`), vet-dir paid expansion (`dir-010`), launch ops (~80 min DNS/email/GA4).
- **Carlo needed?** Only for the Carlo-blocked items above — everything else is unblocked.

## DO NOT TOUCH
Monetization lane (`affiliate-routes.ts`, `/go/[vendor]/[sku]`, `(funnels)/*`, buy-boxes, email sequences), Visual lane (`packages/ui/src/components/visual/*`, image manifest), CSRO registers, secrets.
**Dog.com/Fish.com:** Tier-1 protect-asset — no risky cutover; verify non-regressive before any change.
