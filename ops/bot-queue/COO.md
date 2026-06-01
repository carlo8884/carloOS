# COO — Wakeup Queue

**Owner:** COO · **Lane:** content pages, build orchestration, CI/workflows, routing, STATUS/DASHBOARD/BACKLOG
<<<<<<< HEAD
**Last updated:** 2026-05-31 (by CSRO)
=======
**Last updated:** 2026-05-31 (by COO — adopted v1 spec, marked dir-020 + IR-Guard done)
>>>>>>> main

## RESTART PROMPT
```
Pull latest origin/main. Read ops/bot-queue/COO.md, do the top queued item, commit+push to your own branch, open a PR rebased on main. Keep main green (run scripts/ci/*.mjs before pushing). Update this file before stopping. Don't idle; don't ask Carlo unless empty/blocked.
```

## Queue (priority order)
| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
<<<<<<< HEAD
| 1 | **Build Bot Wakeup Queue** (`dir-020`) | 🔴 P1 | queued | Implement the 6 queue files per `ops/bot-queue/wakeup-queue-spec.md` (CSRO drafted the spec + 3 templates; COO completes Visual/Horses-Racing/IR + maintains). | this session |
| 2 | **IR-Guard CI integration** (PR #260) | 🔴 P1 | queued | Review/merge PR #260 (CSRO opened it; COO owns CI/workflow lane). Verify the Action runs. | this session |
| 3 | **Vets.co insurance launch-readiness** (`dir-007`) | HIGH | in_progress | Trust/diligence audit of insurance hub; **noindex-gate the 2,912 programmatic pages** (IR F6) until QA + carrier + disclosure. | — |
| 4 | **Efty footer component** (`dir-008`) | MED | queued | config-driven `eftyUrl`, tier-gated (flagships none). Wire URLs when Carlo sends them. | — |
| 5 | **Free-tier vet-directory prep** (`dir-010`) | MED | queued | OSM + free-CSV states + AAHA; $0 spend. | — |
| 6 | **Consolidation redirects** | MED | queued | PetFoods→PetFood, Ferrets→Ferret (after monetization lands). Brief: consolidation-redirect-map.md. | — |

## Status
- **Done:** dedup funnel trees (un-red main, #257 merged), sitemap extension, AI-crawler rules.
- **Blocked:** Efty footer URLs (Carlo), vet-directory paid expansion (Carlo spend decision).
- **Carlo needed?** Only for Efty URLs + vet-dir spend — everything else is unblocked.

## DO NOT TOUCH
Monetization lane (affiliate-routes, /go, buy-boxes), Visual lane (design), CSRO registers, secrets.
**Dog.com/Fish.com:** protect-asset — no risky cutover; verify non-regressive before any change.
=======
| 1 | **Vets.co insurance launch-readiness** (`dir-007`) | HIGH | in_progress | Trust audit + ops portions closed (#230, #239). Remaining: noindex-gate the 2,912 programmatic pages (IR F6) until QA + carrier + disclosure. Track-2 directory data source still pending Carlo. | — |
| 2 | **Efty footer component** (`dir-008`) | MED | blocked | Build closed (#226). Carlo provides per-tier Efty URLs (`dir-006`) → COO wires per-tier in <5 min. | — |
| 3 | **Free-tier vet-directory prep** (`dir-010`) | MED | blocked | Research closed (#224). Go/no-go on 10-state pilot → Carlo. | — |
| 4 | **Consolidation redirects** | MED | blocked | PetFoods→PetFood, Ferrets→Ferret. Sequencing-blocked behind Monetization `dir-009` per CSRO redirect-map ("monetize → migrate → 301"). | — |

## Status
- **Done this session:**
  - `dir-018` funnel-tree dedup (un-red main) — #251
  - `dir-020` Bot Wakeup Queue v1 adoption — this PR
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
>>>>>>> main
