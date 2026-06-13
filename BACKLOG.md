# BACKLOG

Single prioritized queue of deferred work + COO ready-task queue under the 6-bot fleet's autonomous operation.

**Last updated:** 2026-06-01 evening (Carlo polish-pivot — P-NOW rewritten for cohort-5 polish; P0 launch-ops marked DEFERRED)

**Rules:**
- Items here are deferred by design — "not blocking, will revisit after."
- New items append; priority can move. Do not silently delete items without recording why.
- When an item ships, remove from this file. Material milestones go to `STATUS.md` release log.
- **COO autonomous queue (P-NOW) is at the top** so COO knows what to ship next when an in-flight task completes.

---

## P-NOW — COO polish-mode ready queue (Carlo 2026-06-01 pivot)

Cohort-5 = **Dog.com · Fish.com · Ferret.com · PetFood.com · Vets.co**. Each polish item runs as one branch+PR so review stays scoped. Stop building new clusters.

| Status | Task | Effort | Why |
|---|---|---|---|
| ⏳ Next | Dog.com polish pass — broken-link + orphan + thin-page + duplicate-title + missing-schema + missing-breadcrumb audit | M | Tier-1 acquisition target ($2.3M offer); cohort-5 anchor |
| ⏳ Next | Fish.com polish pass — same checklist + tools/calculators acceptance pass | M | Tier-1 acquisition target ($1.45M offer); cohort-5 anchor |
| ⏳ Next | Ferret.com polish pass — same checklist; **avoid Monetization touch points** (`data/affiliate-routes.ts`, `care/*`, `behavior/*`, `health/*` buy-box pages) | M | 11K/mo traffic, first-dollar candidate; cohort-5 |
| ⏳ Next | PetFood.com polish pass — same checklist + brand-eval / ingredient depth consistency | M | Polish-cohort site; strong topical authority candidate |
| ⏳ Next | Vets.co polish pass — same checklist; 2,912 breed×state pages stay noindex; hub + breed + state pages launch-quality | M | Polish-cohort site; insurance funnel is the monetization anchor |
| ⏳ Then | Portfolio thin/duplicate-page audit script (`scripts/ci/thin-page-audit.mjs`) | S | Catches the "broad-but-shallow" risk pre-launch |
| ⏳ Then | Cross-site duplicate-title audit extension to `metadata-policy.mjs` | XS | Same |
| ⏳ Then | Hub → spoke link symmetry audit generalized from PR #305 | S | Compounding internal-link strength |
| 🔶 Partial | Tools/calculators acceptance pass on the rest of `/tools/*` (PR #305 wired 7) | S | Confirms tools "actually work" per launch-quality bar. **Cohort-5 math-verified (2026-06-13):** Dog (chocolate-tox, calorie RER/MER, ideal-weight BCS, age, gestation, puppy-weight), Fish (volume, heater, water-change, pond, substrate, stocking, **CO2**), Vets (reimbursement-estimator, worth-it breakeven), PetFood (portion, food-cost) — all sound EXCEPT one bug **fixed**: Fish CO2 used the meq/L coefficient 12.839 against a dKH input → ~4.3× overestimate (4 dKH/6.8 pH read 81 ppm "Dangerous" vs. correct ~19 ppm "Healthy"); corrected to the standard `3 × dKH × 10^(7−pH)`. Remaining: Horses/Lizard/Saddle calculators. |

When this drops below 5 items, COO files a CSRO handoff asking which polish gap to slot in next — not new content.

---

## P0 — Launch ops (Carlo-only, ~75 min total) — DEFERRED

Per Carlo's 2026-06-01 directive these items DO NOT enter the queue until cohort-5 sites pass the launch-quality bar (CLAUDE.md §8a). Do not push, do not nudge. Listed only for traceability.

| Step | Time | Polish-mode status |
|---|---|---|
| DNS cutover for the chosen launch sites (Network Solutions) | ~30 min | DEFERRED — depends on which sites CSRO names launch-ready |
| Rotate Vercel token (exposed in chat) | ~2 min | Keep — security hygiene whenever convenient |
| Apply to Chewy Partners | ~5 min | DEFERRED |
| Apply to ImpactRadius | ~15 min | DEFERRED |
| GA4 property + per-launch-site streams + `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ~15 min | DEFERRED to launch-day |
| Mailchimp / MailerLite / Beehiiv decision | ~30 min | DEFERRED (cost-deferred per Carlo) |
| Email forwarding `editor@<domain>.com` | ~20 min | DEFERRED to launch-day |
| Rotate Anthropic API key after `/ask` MVP validation | ~2 min | Keep — security |
| CSRO bot session spawn + paste `ops/csro/CSRO-PROMPT.md` | ~3 min | Already up — re-spawn if degraded |
| IR Bot Codex session spawn + paste `ops/csro/IR-BOT-PROMPT.md` | ~3 min | Already up |
| Vercel bootstrap for 3 active scaffolds (askthevet, seniorpets, dogpicture) | ~10 min | DEFERRED — scaffolds aren't in the polish cohort |

---

## P1 — Engineering, post-launch

### Tier 1 authority hubs (in flight)
- Dog.com `/conditions` hub (agent dispatched 2026-05-31)
- Fish.com `/water-parameters` hub + 8 deep-dives (agent dispatched 2026-05-31)

### Vets.co Tier 1 promotion preparation
Each criterion in `ops/csro/CSRO.md §8` requires concrete artifacts. COO can ship the supporting infrastructure:
- Vet directory data ingestion plan (decision brief landed at `ops/handoffs/2026-05-30-vet-directory-data-source-decision.md`)
- Self-serve revenue path: insurance lead-gen funnels (Monetization Bot lane), vet directory premium listing infrastructure (admin UI)
- Trust/compliance: FTC + state board disclosure surfaces (refinement on the existing scaffold)
- Demand evidence tracking — GA4 / Plausible referral attribution post-DNS

### Photo sourcing follow-up
Real Unsplash photography shipped for homepage heroes + key feature slots on 8 sites. Per-site photo sourcing playbook is in `ops/handoffs/2026-05-29-photo-sourcing-playbook.md`. Remaining: article pages (breed profiles, disease pages) — Visual Bot lane.

### AI care assistant `/ask` MVP — Phase 1 on Dog.com only
Anthropic API key exists, `/ask` spec is in PR #67 brief. COO has `apps/dog-com/src/lib/ask-safety.ts` scaffolded mid-build (paused per Carlo's "test on one site" directive). Resume when Carlo confirms traffic on Dog.com.

### Per-city Ferrets.com directory expansion
`/find-a-vet/[state]` live (52 states). Next: `/find-a-vet/[state]/[city]` (~250-400 city pages). Same template pattern.

### Per-SKU PetFoods.com catalog
`/brands/[slug]` live (38 brands). Next: per-SKU within each brand. ~200-400 SKU pages.

### Inline-breadcrumb migration (37 pages)
37 review pages use inline `<nav>` breadcrumbs without `BreadcrumbList` JSON-LD schema. Migrate to shared `<Breadcrumb>` component. Mechanical, low risk.

### Missing category-index pages
- `apps/lizard-com/src/app/health/page.tsx` — closes 5 lizard `/health/*` orphans
- `apps/saddle-com/src/app/guides/page.tsx` — closes 6 saddle `/guides/*` orphans

### vets-co `/specialists/*` explainer pages (8 pages)
Homepage `SPECIALIST_TYPES` cards currently all route to `/find-a-vet`. Eight real explainer pages would give each card a unique destination + indexable content (neurology, orthopedics, cardiology, oncology, ophthalmology, dentistry, internal medicine, emergency-critical-care). Supports Vets.co Tier 1 promotion criteria.

### saddle-com `/western/{discipline}` deep-dives (5 pages)
Barrel-racing, roping, trail, reining, ranch.

### fish-com `/breeding` section
Card was removed from homepage in PR #4. If breeding content is on roadmap, this is the slot.

---

## P2 — Polish, post-Dog.com 7-day metrics

### Custom fonts via `next/font/google`
Migrate from CSS link to `next/font/google` for self-hosting + CLS reduction.

### `/api/og` load-test + cache strategy
Untested at scale. Aggressive edge cache headers + consider pre-generating per-page OGs at build time.

### Score-disclosure refinement
`<ScoreMethodology />` shipped on 41 score-bearing pages. Add one-line "How we score" link in each ReviewCard's score chip.

### FDA Pet Food Recall Tracker (`petfood.com/recalls`)
Daily-cron sync from FDA JSON feed. SEO: huge (recall info spikes search). GEO: huge (AI surfaces won't guess on recalls — cite our tracker). Build: M. Priority P2.

### Pet name generators
Programmatic. "dog names" alone is 250K/mo. Fish/lizard/ferret variants 10-30K/mo each. Build: S. SEO: HUGE per dev-hour.

### Cross-species calorie/diet calculator
Formula-based; no backend. SEO M, GEO HIGH (calculators are citation gold), Monetization HIGH (calc result → food affiliate). Build: S.

### Wikipedia citation strategy
Get cited as source on Wikipedia pages (canonical reference for hereditary breed conditions, water parameter targets, etc.). SEO HUGE (Wikipedia backlinks), GEO HUGE (training data).

### Reddit/Quora answer syndication
Manual at first. Playbook landed at `ops/handoffs/2026-05-30-reddit-syndication-tracker.md` (PR #190). Tracker CSV at `ops/data/reddit-syndication-log.csv`.

---

## P3 — Strategy, post-traction

Strategy direction is now governed by the **6-bot fleet** with CSRO as the strategy/research router. P3 items here are deferred to CSRO's day-to-day prioritization once activated.

### Monetization architect docs (CONTEXT — for CSRO's reading)
- `MONETIZATION-ARCHITECT.md` — system of record for monetization
- `MONETIZATION-PLAYBOOK.md` / `MONETIZATION-PLAYBOOK-V2.md` — strategic context
- `QUICK-WINS.md` — fast-revenue plays
- `90-DAY-MONETIZATION-PLAN.md` — operational sequencing with decision gates
- `ops/handoffs/2026-05-30-monetization-activation-roadmap.md` — current activation roadmap

### Pet insurance comparison hub (Architect S6)
Lowest-cost monetization move in the portfolio. Phase 1: affiliate hub on dog.com + vets-co with 9 carriers. Phase 2: quote APIs (Lemonade, Pumpkin, ManyPets).

### Stripe membership wiring
Stripe spec at `ops/handoffs/2026-05-29-stripe-membership-spec.md`. Per Architect S14: scaffolding now, do NOT sell until each site crosses 5-10k email subs.

### Acquirer pitch (portfolio)
Framework at `ops/handoffs/2026-05-29-acquirer-pitch-framework.md`. Per playbook V2 §4 + Architect: "Pet Health Trinity" (AskTheVet B2C + Vets.co B2B + SeniorPetPharmacy DTC) is the strongest exit narrative. Revisit at 90-day milestone.

---

## P4 — Infrastructure, low priority

### Sitemap regeneration as pre-commit hook
Currently `scripts/regenerate-sitemaps.mjs` runs manually. Pre-commit hook would ensure sitemap matches filesystem on every commit. Programmatic SEO pages may be sitemap-stale.

### Dashboard.mjs — extend to all sites
Currently hardcoded to 5 original sites. Extend to all production sites + auto-detect programmatic-route contributions.

### Orphan-count baseline warn
CI warning (not failure) if PR introduces a new orphan page.

### Real corrections inbox setup
Legal pages reference `privacy@<domain>` and `legal@<domain>`. Wire real mailboxes before launch.

### Editorial Standards verification process
Structured update-log on each editorial-standards page recording corrections + dates.

---

## P5 — Will-not-do (recorded for context)

These were considered and explicitly declined or descoped:

- **hardmoneyloans.com** — Carlo confirmed sunset 2026-05-30
- **PRs #19-#30** — superseded by mega-wave; closed
- **Three-pod parallelism** — held per "operational simplicity"; now superseded by 6-bot fleet
- **Adding bots beyond the 6-bot fleet** — current model is the canonical structure; CSRO recommends new specialists when needed; Carlo approves
- **High-volume sales calls / per-deal selling under $1K** — Carlo's stated constraint
- **Calendar-driven weekly/monthly reports** (per Carlo 2026-05-30) — replaced by daily briefs + live registers that update continuously

---

## How to use this file

- COO works **P-NOW** autonomously; never idles below 5 ready tasks
- Carlo (or CSRO via directive) can re-prioritize anything
- Adding an item: append with priority tier, brief description, one-line reason for deferral
- Removing an item: link to the merged PR in the commit message
