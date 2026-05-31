# BACKLOG

Single prioritized queue of deferred work + COO ready-task queue under the 6-bot fleet's autonomous operation.

**Last updated:** 2026-05-31 (fleet operational, tier policy in force, autonomy rule active)

**Rules:**
- Items here are deferred by design — "not blocking, will revisit after."
- New items append; priority can move. Do not silently delete items without recording why.
- When an item ships, remove from this file. Material milestones go to `STATUS.md` release log.
- **COO autonomous queue (P-NOW) is at the top** so COO knows what to ship next when an in-flight task completes.

---

## P-NOW — COO autonomous-mode ready queue (min 5 at all times)

Per Carlo's 2026-05-31 standing rule: COO works the queue without waiting for permission on in-lane work. Tasks below pass the Tier 1 protect-the-asset filter + lane filter + trust-bar filter.

| Status | Task | Estimated effort | Why it's queued |
|---|---|---|---|
| 🟢 In flight | Dog.com `/conditions` authority hub | S | Tier 1 authority cluster; mirrors `/symptoms` hub for diagnosed conditions |
| 🟢 In flight | Fish.com `/water-parameters` reference hub + 8 deep-dives | S-M | Tier 1 authority cluster; dense citation magnet |
| ⏳ Next | Cross-portfolio internal-linking sweep | M | Tier 2/3 pages deep-link into Tier 1 funnels (per tier architecture) |
| ⏳ Next | Sitemap freshness check + regenerate across all sites post-mega-wave | S | Many new routes added; sitemaps stale |
| ⏳ Next | `robots.txt` + AI-crawler hygiene audit | S | Explicit allow for GPTBot/ClaudeBot/PerplexityBot/Gemini/Bingbot with rate limits |
| ⏳ Next | IndexNow protocol install (Bing/Yandex instant indexing) | XS | Build once, every site benefits forever; ranks new pages faster |
| ⏳ Next | Coordination handoff to Visual/Monetization bots on the 6 conflict-blocked PRs | S | They own rebases per §8; handoff makes the ask explicit |
| ⏳ Next | Dog.com `/breeds` hub refresh — if missing, build (mirrors `/symptoms` + `/conditions` pattern) | S | Tier 1 authority structure consistency |
| ⏳ Next | Vets.co `/specialists/*` 8 explainer pages (was P1, promoted to Tier 2-promotion-path content) | M | Supports Vets.co Tier 1 promotion criteria #2 (monetization stack viability) |

When this list drops below 5, COO extends it. When CSRO files a directive that supersedes one of these, COO rebases priorities.

---

## P0 — Soft-launch operational (Carlo-only, ~75 min total)

| Step | Time | Status |
|---|---|---|
| DNS cutover for 10 production domains → Vercel (Network Solutions) | ~30 min | Pending Carlo — blocks launch |
| Rotate Vercel token (exposed in chat) | ~2 min | Pending Carlo — security hygiene |
| Apply to Chewy Partners | ~5 min | Pending Carlo — free revenue stream |
| Apply to ImpactRadius | ~15 min | Pending Carlo — biggest LTV unlock (pet-insurance) |
| GA4 property + 10 streams + set `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ~15 min | Pending Carlo — analytics blackout otherwise |
| Mailchimp / MailerLite / Beehiiv decision | ~30 min | Deferred per Carlo (cost) |
| Email forwarding `editor@<domain>.com` (10 domains) | ~20 min | Pending Carlo |
| Rotate Anthropic API key after `/ask` MVP validation | ~2 min | Pending Carlo — security hygiene |
| CSRO bot session spawn + paste `ops/csro/CSRO-PROMPT.md` | ~3 min | Pending Carlo — fleet activation |
| IR Bot Codex session spawn + paste `ops/csro/IR-BOT-PROMPT.md` | ~3 min | Pending Carlo — fleet activation |
| Vercel bootstrap for 4 of 5 new scaffolds (askthevet, seniorpets, dogpicture, petsupplies — hardmoneyloans is sunset) | ~10 min | Pending Carlo |

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
