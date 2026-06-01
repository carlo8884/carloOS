# COO — Wakeup Queue

**Owner:** COO · **Lane:** content pages, build orchestration, CI/workflows, routing, STATUS/DASHBOARD/BACKLOG
**Last updated:** 2026-06-01 evening (by COO — Carlo's polish-pivot directive received; queue rewritten to cohort-5 polish passes)

## RESTART PROMPT
```
Pull latest origin/main. Read ops/bot-queue/COO.md, do the top queued item, commit+push to your own branch, open a PR rebased on main. Keep main green (run scripts/ci/*.mjs before pushing). Update this file before stopping. Don't idle; don't ask Carlo unless empty/blocked.
```

## 🎯 MODE SHIFT (Carlo 2026-06-01): content-expansion → LAUNCH-QUALITY POLISH
Stop building breadth. Make the **cohort-5 sites launch-quality** (criteria: `ops/csro/launch-quality-criteria.md`).
**Cohort-5: Dog.com, Fish.com, Ferret.com, PetFood.com, Vets.co.** Your job = QA + structure on these:
broken-link/orphan-page/missing-hub/weak-metadata/missing-breadcrumb/missing-schema/thin-page/
duplicate-route/duplicate-title sweep → fix; improve internal linking across new clusters; ensure clean
homepage→hub→spoke; fix metadata-policy failures; run trust-guard + metadata-policy + link-check before
every push. Make each site feel COHERENT, not just large. One branch+PR per site. Do NOT push DNS/launch.

## Queue (polish-mode priority order — Carlo 2026-06-01 pivot)

Cohort-5 = **Dog.com · Fish.com · Ferret.com · PetFood.com · Vets.co**.
Each polish item is per-site. One branch+PR per site so review stays scoped.

| # | Directive | Priority | Status | Next action |
|---|---|---|---|---|
| 1 | **Dog.com polish pass** | 🔴 P0 | queued | Audit: broken-link + orphan + thin-page + duplicate-title + missing-schema + missing-breadcrumb. Verify homepage → hub → spoke. CSRO/IR sign-off before declaring complete. |
| 2 | **Fish.com polish pass** | 🔴 P0 | queued | Same checklist. Tools/calculators must all run with sane defaults. |
| 3 | **Ferret.com polish pass** | 🔴 P0 | queued | Same checklist. **Coordinate with Monetization** — they're mid-pass on buy-boxes; do not touch `data/affiliate-routes.ts` or `care/**`, `behavior/**`, `health/**` buy-box pages while their PR is in flight. |
| 4 | **PetFood.com polish pass** | 🔴 P0 | queued | Same checklist. Brand-eval pages + ingredient refs must have consistent depth (no thin entries). |
| 5 | **Vets.co polish pass** | 🔴 P0 | queued | Same checklist. The 2,912 breed×state programmatic pages stay noindex (PR #269); confirm hub + 56 breed + 52 state pages are launch-quality and indexable. |
| 6 | **Portfolio thin/duplicate-page audit** | HIGH | queued | Build `scripts/ci/thin-page-audit.mjs` (word count, h2 count, unique-byte ratio); fail above per-site thresholds. List candidates for beef-up vs. archive vs. consolidate. |
| 7 | **Cross-site duplicate-title audit** | HIGH | queued | Extend `metadata-policy.mjs` (already gates length + intra-site dupes) to flag near-duplicate titles across sites that aren't intentional cross-portfolio references. |
| 8 | **Hub → spoke link symmetry audit** | MED | queued | Every section hub (`/health`, `/breeds`, `/reviews`): every child page must link back to the hub AND to ≥1 sibling. PR #305 covered a sample; generalize. |
| 9 | **Tools/calculators acceptance pass** | MED | queued | Per `/tools/*` on cohort-5: verify the calculator computes a non-degenerate output, copy is professional, tie-back link exists. PR #305 wired 7; finish the rest. |
| 10 | **Stale `.next`/`.turbo` cleanup + decommissioned-app audit** | LOW | queued | Petsupplies stub dirs cleared in PR #304; verify hardmoneyloans similarly clean. CI note so no decommissioned app re-shows in a sitemap or nav. |

### Closed (pre-pivot launch-prep — all merged 2026-06-01)
| Old # | Item | Closing PR |
|---|---|---|
| 5 | turbo-ignore portfolio coverage | #268, #290 |
| 6 | internal-linking graph (first wave) | #278, #293, #296, #301, #305 |
| 7 | sitemap + robots hygiene | #274, #303 |
| 8 | JSON-LD / schema coverage | #276, #280, #283, #284, #287, #289, #294, #295 |
| 9 | breadcrumb coverage (auto via ArticleLayout) | #276 |
| 10 | 404 / broken-route sweep | #303 |
| 11 | STATUS/DASHBOARD/BACKLOG refresh | #292, #306 |
| 12 | petsupplies disposition | #304 |
| 13 | tool-page hub interlinking (first wave) | #305 |

### Carlo-blocked — DEFERRED in polish mode (do not push, do not nudge)
- `dir-006` Efty per-tier URLs · `dir-008` footer component
- `dir-010` Free-tier vet-directory pilot
- Consolidation redirects (PetFoods→PetFood, Ferrets→Ferret) — sequenced behind Monetization `dir-009`
- DNS / GA4 / Mailchimp / email forwarding / Vercel scaffold bootstrap — deferred per 2026-06-01 directive (CLAUDE.md §8a). Do NOT escalate to Carlo on these until cohort-5 passes the launch-quality bar.
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
