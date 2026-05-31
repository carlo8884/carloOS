# COO — Wakeup Queue

**Owner:** COO · **Lane:** content pages, build orchestration, CI/workflows, routing, STATUS/DASHBOARD/BACKLOG
**Last updated:** 2026-05-31 (by CSRO)

## RESTART PROMPT
```
Pull latest origin/main. Read ops/bot-queue/COO.md, do the top queued item, commit+push to your own branch, open a PR rebased on main. Keep main green (run scripts/ci/*.mjs before pushing). Update this file before stopping. Don't idle; don't ask Carlo unless empty/blocked.
```

## Queue (priority order)
| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
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
