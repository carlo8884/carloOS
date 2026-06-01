# COO — Wakeup Queue

**Owner:** COO · **Lane:** content pages, build orchestration, CI/workflows, routing, STATUS/DASHBOARD/BACKLOG
**Last updated:** 2026-06-01 (by COO — 9-PR SEO/GEO/build-cost sweep landed alongside dir-014 + dir-007)

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
| 5 | **Vercel cost: turbo-ignore coverage** | 🔴 HIGH | queued | UNBLOCKED. Confirm EVERY app's `vercel.json` has a working `ignoreCommand` (turbo-ignore) so unaffected apps skip builds; the 5 scaffolds too. List any app missing it; add. Biggest recurring cost lever. | — |
| 6 | **Internal-linking graph audit** | 🔴 HIGH | queued | UNBLOCKED. Per CLAUDE.md §6 (hub→cluster→spoke). For Tier-1 (Dog/Fish/Horses/Vets/PetFood): map orphan pages (no inbound internal links) + hubs missing spoke links; add reciprocal links. Run link-check after. Pure SEO/GEO value, no Carlo. | — |
| 7 | **Sitemap + robots hygiene sweep** | HIGH | queued | UNBLOCKED. Verify each site's `sitemap.ts` emits clean canonical URLs (no route-group segments — the bug fixed on some sites; check ALL), correct lastmod, and robots.txt allows AI crawlers per §6. Fix gaps. | — |
| 8 | **JSON-LD / schema coverage** | MED | queued | UNBLOCKED. Audit Tier-1 article/review/FAQ pages for Article/Review/FAQ/Breadcrumb JSON-LD (GEO citation magnet). List pages missing schema; add via existing `buildArticleSchema`/`SchemaScript` helpers. | — |
| 9 | **Breadcrumb coverage** | MED | queued | UNBLOCKED. Ensure every deep page has a `<Breadcrumb>` wired to real parents (nav + schema). List + fill gaps Tier-1 first. | — |
| 10 | **404 / broken-route sweep** | MED | queued | UNBLOCKED. Run link-check portfolio-wide; for any internal link with no target route, either create a stub hub or fix the link. Zero broken internal links is the bar. | — |
| 11 | **STATUS/DASHBOARD/BACKLOG refresh** | MED | queued | UNBLOCKED. Reconcile these docs to reality after this merge wave — page counts, what's live, active directives. Ops-only (no build). | — |
| 12 | **Scaffold disposition (petsupplies, dir-005)** | MED | queued | UNBLOCKED (decision is CSRO's, already made: out of scope). Decommission `apps/petsupplies` from CarloOS or mark clearly do-not-launch; note in STATUS. | — |
| 13 | **Tool-page hub interlinking** | LOW | queued | UNBLOCKED. Each site's `/tools` hub should link to/from its relevant content cluster (calculator ↔ the guide it supports). Strengthens the graph. | — |

## Status
- **Overnight rule (2026-06-01, CSRO):** items 1 + 5–13 are UNBLOCKED — items 2/3/4 are Carlo-blocked, SKIP them and work the unblocked ones. Work top-down through the unblocked set; one branch+PR per item or logical group; when a PR awaits CI, start the next item; never idle on "queue empty" (5–13 is >1 night). Update status column as you close each. Keep main green (run `scripts/ci/*.mjs` before every push).
- **Done this session (2026-06-01):**
  - `dir-014` code-side closeout merged — #268. CI `TURBO_TOKEN`/`TURBO_TEAM`
    wired; `vercel-ignore.sh` patterns broadened; Carlo dashboard checklist
    filed at `ops/handoffs/2026-06-01-coo-to-carlo-vercel-cost-dashboard-steps.md`
  - `dir-007` IR F6 noindex-gate on the 2,912 breed×state cross-product
    pages (`(funnels)/pet-insurance/breeds/[breed]/[state]/page.tsx`) — #269.
    Hub + breed-only + state-only pages stay indexed.
  - **SEO/GEO sweep (9 PRs, all merged):**
    - #274 sitemap regen — 6 new section-hub URLs across ferret/horses/saddle
    - #276 ArticleLayout auto-builds BreadcrumbList JSON-LD for ~300 pages
    - #278 saddle-com /reviews internal-link orphan fix (best-stirrups)
    - #280 FAQPage JSON-LD on 2 PetFood.com brand-evaluation pages
    - #283 MedicalWebPage JSON-LD on 13 lizard-com health pages
    - #284 MedicalWebPage JSON-LD on 4 dog-com health pages (40/40 coverage)
    - #287 Product JSON-LD on 3 buyer-guide top picks
    - #289 HowTo JSON-LD on fish-com /setup
    - #290 vercel-ignore regression test added to qc workflow
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
