# CarloOS Status

Single source of truth for the operating state of the portfolio.
Replaces the previous five governance docs (`OPERATIONS`, `ROADMAP`,
`AGENTS`, `RELEASES`, `QC-STANDARDS`). Trust standards still live in
their own file: see [`QC-STANDARDS.md`](./QC-STANDARDS.md).

**Last updated:** 2026-05-30 (end-of-day — 3-bot operating model, Skimlinks + Amazon wired, ~810 pages, awaiting DNS)

---

## 1. Current Phase

**Phase 4 — Dog.com launch-ready for Friday cutover.**

Dog.com remains the soft-launch target — all content + visual + lead-magnet
work is shipped; only Carlo-only operational steps (Mailchimp, GA4, DNS)
remain. See §4.

All eight active sites (dog · fish · lizard · saddle · vets · horses ·
petfood · ferret) are now magazine-polished in production with the
editorial component library (PullQuote / DropCap / ImageCard / CalloutBox /
SourceCitation / ArticleByline) applied across 48+ page applications.
Real Unsplash photography is live on homepage heroes + key feature slots
on all 8 active sites.

Five new sites have been scaffolded in-repo (horses-com, petfood-com,
petfoods-com, ferret-com, ferrets-com) with cornerstone content + lead
magnets + visual polish. Vercel projects still need bootstrap for the
five new sites (Carlo-only via `scripts/vercel-bootstrap.sh`).

Programmatic SEO is live across the portfolio: ~50 dog breeds, ~28 dog
diseases, ~51 horse breeds, 52-state vets directory, 52-state ferrets
directory, 38 petfoods brand pages.

## 2. Active PRs (2026-05-30 EOD verified)

`origin/main` HEAD: `a54a15b` (PR #162 — vercel-set-env.sh). 130+ PRs merged 2026-05-28 → 2026-05-30.

**Currently open and triaged** (verified via GitHub MCP):

| Category | PRs |
|---|---|
| **Close — stale/superseded** | #60, #61, #63, #65, #144, #151 (in main as `58dc92f`), #153 (in main as `8731777`), #155 (in main as `34ec395`+`a54a15b`), #160 (in main as `eed2b7b`) |
| **Merge if CI green (reference docs)** | #62, #64, #66 |
| **Keep open (active reference)** | #67 (`/ask` MVP brief — still actionable) |
| **Safe to merge — content PRs blocked only by metadata-policy** | #145, #148, #149, #150, #152 (all clear after PR #167 lands) |
| **Safe to merge — Visual Bot work** | #156, #159, #161, #163, #164, #165 |
| **Safe to merge — COO docs** | #158, #166 (CLAUDE.md), #167 (metadata fix) |

## 3. Lanes (current 3-bot + Codex model)

Lane policy is `ops/policies/bot-coordination.md`. Summary:

| Lane | Who | Mandate | Touches |
|---|---|---|---|
| **COO** | Claude Code session (this) | Content/infra/PR triage/agent orchestration | Editorial pages, `packages/ui/*` (non-visual), `packages/config/index.ts`, `scripts/ci/*`, STATUS/BACKLOG/DASHBOARD |
| **Monetization Bot** | Separate Claude Code session | Revenue/affiliate/funnels/email | `apps/<site>/src/data/affiliate-routes.ts`, `apps/<site>/src/app/(funnels)/*`, `apps/<site>/src/content/email-sequences/*`, `apps/<site>/src/app/go/[vendor]/[sku]/route.ts` |
| **Visual Bot** | Separate Claude Code session | Visual identity/photography/composition/motion | `apps/<site>/src/app/page.tsx` heroes, `apps/<site>/src/components/visual/*`, `packages/ui/src/components/visual/*` (new), `apps/<site>/src/app/globals.css`, `scripts/sync-images.mjs`, `scripts/image-queries.json`, `packages/ui/src/data/image-manifest.json` |
| **Codex** | External, prompted per-task | Read-only triage, plain-English status synthesis, narrow QC fixes only on request | PR review comments, `codex/`-prefixed branches |
| **Carlo** | Direct chat | Spending, DNS, vendor approvals, key rotation, lane policy amendments | Final authority |

Coordination law: lane violations cause CI outages. Use `ops/handoffs/` for cross-lane communication.

**Recent lane-crossing events** (informational, not blame):
- 2026-05-29: Monetization Bot's funnel infrastructure (PR #133) shipped with unclosed template literals → main broken → COO fixed forward via PR #147. Per policy §8 (first-merge-wins), Mon-lane fix-forward by COO is permitted to unblock main.
- 2026-05-30: COO modified `scripts/sync-images.mjs` (Visual Bot lane) — preceded the Visual Bot existing. Not a violation in retrospect.

## 4. Soft-Launch Blockers (Carlo-only)

All remaining launch work is operational, not engineering.

| # | Item | Time | Priority |
|---|---|---|---|
| 1 | DNS pointing (10 production domains → Vercel) at Network Solutions | ~30 min | **P1 — blocks launch** |
| 2 | Rotate Vercel token `vcp_2C7...` (exposed in chat) at https://vercel.com/account/tokens | ~2 min | P2 — security hygiene |
| 3 | Apply to **Chewy Partners** at chewy.com/partners | ~5 min | P2 — free revenue stream |
| 4 | Apply to **ImpactRadius** at impact.com | ~15 min | P2 — biggest LTV unlock (pet-insurance roster) |
| 5 | GA4 property + 10 data streams + set `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var | ~15 min | P2 — analytics blackout post-launch otherwise |
| 6 | Mailchimp / MailerLite / Beehiiv decision (Carlo deferred per cost) | ~30 min | P3 — can defer until traffic exists |
| 7 | Email forwarding `editor@<domain>.com` at Network Solutions (10 domains) | ~20 min | P3 — needed when email infra activates |
| 8 | Rotate Anthropic API key `sk-ant-...` after `/ask` MVP validation | ~2 min | P3 — security hygiene |

**Already done (verified):**
- ✅ Amazon Associates tag `boltonpets20-20` wired across all 10 production projects via `scripts/vercel-set-env.sh`
- ✅ Skimlinks publisher `303850X1791986` live on dog.com (PR #143)
- ✅ Vercel projects bootstrapped for 10 production sites
- ✅ Anthropic API key created (Carlo holds; not in repo)
- ✅ Impact.com site-verification meta tag installed (PR #147)

## 5. Active Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Vercel preview deploys hitting free-tier rate limit (24h reset window) | Medium (operational) | Either wait for reset OR upgrade to Vercel Pro. Local `turbo build` is the authoritative gate; Vercel previews are nice-to-have for QA. |
| Carlo bottleneck on launch ops | Medium | All ~55 min worth of work, batchable in one block |
| A4 visual direction outstanding | Low (deferred) | Launch does not wait. PR #5 scheduled if/when A4 delivers. |
| `/api/og` route load-untested | Low | First-week traffic minimal; harden post-launch |
| Single-key-person dependency (Carlo + Claude) | High (long-term) | Stabilizer CI checks + SOPs erode this over weeks |

## 6. Roadmap Snapshot

| Phase | State | Notes |
|---|---|---|
| 1 — Core build & deployment foundation | ✅ shipped | `2d3030a` → `9709150` |
| 2 — Trust cleanup & stabilization | ✅ shipped | `4c27988` (PR #2) |
| 2a — Trust-badge sweep | ✅ shipped | `caead17` (PR #5) |
| 3 — SEO & infrastructure stabilization | ✅ shipped | `ccf079d` (PR #4 / GitHub #6) |
| 4 — Dog.com launch readiness | ✅ shipped (engineering side) | `12e12fc` + `9065110`. Operational ops (Mailchimp/GA4/DNS) pending Carlo. |
| 4a — Dog.com live | 🟡 pending Carlo ops | Friday cutover target. See §4 |
| 5 — Visual / UX pass | ✅ shipped | Magazine polish + editorial component library applied to all 8 active sites; real Unsplash photography live. |
| 6 — Fish.com / Saddle.com / Lizard.com / Vets.co build-out | ✅ shipped (content side) | All four sites have cornerstone + lead magnets + visual polish. Still gated on Dog.com 7-day metrics for marketing push. |
| 7 — Programmatic SEO across portfolio | ✅ shipped | ~280+ programmatic pages: dog breeds + diseases, horse breeds, vets-by-state, ferrets-by-state, petfoods brands. |
| 8 — Shared CI checks (link-check, metadata, trust-guard) | ✅ shipped | `scripts/ci/{link-check,metadata-policy,trust-guard}.mjs` all live. |
| 9 — PetFood / Ferret / Horses positioning | ✅ shipped (scaffold + content) | 5 new sites scaffolded with content + magnets. Vercel project bootstrap pending Carlo. |
| 10 — Cross-portfolio integration | ✅ shipped | `CrossPortfolioCard` component live; citation linking across ~49 pages; Vercel turbo-ignore (60-85% build cost reduction). |
| 11 — Lead magnet portfolio | ✅ shipped | 6 lead magnets across portfolio (dog, fish, vets, saddle, lizard, horses, petfood, ferret) + 8-email sequences. |
| 12 — COO research docs | ✅ shipped | Revenue / Stripe membership / sponsorship / acquirer pitch / brand briefs / photo strategy / Stitch briefs / lead-magnets / GEO audit / AI assistant brief. See `ops/handoffs/`. |
| 13 — Monetization wiring (Stripe webhook live) | ⬜ deferred | Spec written (`ops/handoffs/2026-05-29-stripe-membership-spec.md`); implementation post first revenue signal. |
| 14 — AI care assistant `/ask` MVP | ⬜ briefed | Phase 1 per #67 brief; next P1 build. |

## 7. Release Log

Append-only. Source of truth is git log; this is the human index.

| Commit | Date | What |
|---|---|---|
| `9065110` | 2026-05-27 | PR #9 — Dog.com launch blockers cleared (hero stats, HEALTH_CATEGORIES, fake-authority H1s, EmailCapture gating). 4 files. |
| `12e12fc` | 2026-05-27 | PR #7 — Dog.com puppy-schedule lead magnet + 8-email sequence + homepage banner. 14 files. |
| `ccf079d` | 2026-05-27 | PR #4 — SEO & Infrastructure Stabilization (6 commits, 300 files) |
| `caead17` | 2026-05-27 | PR #5 — Trust-badge cleanup (21 files, +25/-25) |
| `4c27988` | 2026-05-26 | PR #2 — Trust cleanup & stabilization (8 batches, ~480 files) |
| `9709150` | 2026-05-26 | CarloOS V2 — build fixes, stubs, 37 new content pages |
| `2d3030a` | 2026-05-25 | Initial monorepo — 5 apps, shared packages, Turborepo + Supabase |

## 8. Page Counts (current)

| Site | Routable pages | Status |
|---|---|---|
| dog-com | 194 | Launch-ready (137 static + 29 prog breeds + 28 prog diseases) |
| fish-com | 80 | Magazine-polished; cornerstone complete |
| vets-co | 97 | 45 static + 52-state vet directory (programmatic) |
| horses-com | 64 | 13 static + 51-breed programmatic |
| ferrets-com | 57 | 5 static + 52-state vet directory (programmatic); needs Vercel bootstrap |
| lizard-com | 56 | Magazine-polished; cornerstone complete |
| petfoods-com | 44 | 6 static + 38 brand programmatic pages; needs Vercel bootstrap |
| saddle-com | 43 | Magazine-polished; cornerstone complete |
| petfood-com | 11 | Scaffold + 10 cornerstones + lead magnet; needs Vercel bootstrap |
| ferret-com | 10 | Scaffold + 8 cornerstones + lead magnet; needs Vercel bootstrap |
| **Total** | **~810** | Across 10 sites (was 656 → +155 from morning merge wave; will tick up as #132 + #135 + lizard husbandry land) |

## 8a. 2026-05-29 Morning Merge Wave (after Carlo's "merge, build, improve. Go." directive)

18 PRs merged before noon Pacific, adding ~155 new programmatic SEO pages + FTC affiliate compliance infrastructure + portfolio-wide cross-linking. New `main` HEAD is `19fedaa`.

### Content templates merged

| PR | Site | Surface | Count |
|---|---|---|---|
| #108 | vets-co | `/medications/[slug]` | 12 FDA/Plumb's-anchored medication pages |
| #110 | lizard-com | `/health/[slug]` | 15 reptile condition pages (ARAV-cited) |
| #111 | horses-com | `/disciplines/[slug]/equipment` | 6 discipline equipment buyer guides |
| #112 | saddle-com | `/brands/[slug]` | 10 saddle brand reviews (Stübben/Pessoa/Bates/+7) |
| #114 | petfoods-com | `/brands/[slug]` (long-form) | 10 WSAVA-scored brand reviews |
| #115 | dog-com | `/breeds/[slug]/feeding` | 8 breed-specific feeding deep-dives |
| #116 | petfood-com | `/life-stage/[slug]` | 7 AAFCO life-stage deep-dives |
| #119 | vets-co | `/specialists/[slug]` | 8 board-certified specialty deep-dives |
| #120 | fish-com | `/equipment/[slug]` | 6 equipment-category buyer guides |
| #121 | ferrets-com | `/states/[slug]` | 51 per-state legality + adoption directory |
| #123 | ferret-com | `/care/*`, `/health/*` | 6 new cornerstones (vaccinations, lymphoma, +4) |

### Infrastructure merged

| PR | What |
|---|---|
| #122 | Monetization-bot strategic handoff (`ops/handoffs/2026-05-29-monetization-update-for-bot.md`) |
| #124 | AffiliateDisclosure component + 10 site disclosure pages + 10 `/go/[vendor]/[sku]` redirects + per-site vendor allow-lists |
| #126 | Bot coordination policy (`ops/policies/bot-coordination.md`) — lanes, governance, vendor allow-lists, trust-bar guardrails |
| #127 | Monday launch checklist (`ops/handoffs/2026-05-29-monday-launch-checklist.md`) — Carlo's DNS/Mailchimp/GA4 punch list |
| #128 | `getCrossPortfolioRecommendations` helper + 29 (site × content-type) recommendation entries — unblocks CrossPortfolioCard portfolio-wide |
| #129 | `link-check.mjs` fix — handles `[slug]` anywhere in path (not just trailing) |
| #130 | ArticleLayout `schema` prop accepts combined-schema arrays |

### Open PRs queued

- #132 — dog-com `/breeds/[slug]/health` (8 OFA/CHIC breed health deep-dives) — CI cycling
- #135 — saddle-com `/fit/[slug]` (6 discipline-specific saddle fit guides + hub) — CI cycling
- Monetization bot's 11 in-flight branches (affiliate-link-portfolio-rollout, askthevet-mvp, seniorpets-mvp, dogpicture-mvp, petsupplies-mvp, email-sequences-7-magnets, etc.) — PRs not yet open

### Agents running in background

- Lizard.com /husbandry/[slug] — 8 husbandry topics (UVB, basking, humidity, etc.)

## 8b. Recently Shipped This Week (2026-05-28 → 2026-05-29)

Highlights from the ~100-PR merge wave:

- **5 new sites scaffolded** with content + lead magnets + visual polish:
  horses-com, petfood-com, petfoods-com, ferret-com, ferrets-com.
- **Magazine visual polish** rolled out across all 8 active sites
  (per-site palettes, Playfair / Cormorant / JetBrains Mono typography).
- **Editorial component library** shipped (`PullQuote`, `DropCap`,
  `ImageCard`, `CalloutBox`, `SourceCitation`, `ArticleByline`) — applied
  across 48+ page applications portfolio-wide.
- **Real Unsplash photography** on 8 site homepages + key feature slots
  (replaces placeholder gradients).
- **~280+ programmatic SEO pages** across dog (breeds + diseases),
  horses (breeds), vets-co (states), ferrets-com (states), petfoods-com
  (brands) — all from single-template + structured data files.
- **6 lead magnets + 8-email sequences** added: aquarium cycling (fish),
  emergency triage card (vets), saddle fit checklist (saddle), first-year
  care (lizard), first-horse roadmap (horses), reading-pet-food-labels
  (petfood), first-year-schedule (ferret).
- **30+ new cornerstone content pages** across the portfolio.
- **CrossPortfolioCard** — sister-site recommendations component live
  on 5 sites.
- **Citation linking** — inline authority citations across ~49 pages.
- **Vercel turbo-ignore** on all 10 projects → 60-85% build cost
  reduction.
- **Lockfile sync** + supporting engineering fixes.
- **COO research docs** in `ops/handoffs/`: revenue/affiliate playbook,
  Stripe membership spec, sponsorship sales kit, acquirer pitch deck
  framework, per-site Stitch design briefs, per-site photo sourcing
  playbook, Vercel cost-reduction memo.

## 9. Operating Principles

- "Launchable and improving" beats "internally perfect but not live."
- Trust integrity is non-negotiable. See QC-STANDARDS.md §1.
- No new bots, no new governance docs, no new audit loops without a launch-velocity justification.
- Every domain becomes one of: media / lead-gen / affiliate / marketplace / data / licensing / acquisition target. Defined per domain when that domain activates, not in advance.

## 10. Update Protocol

Any PR that materially changes the operating state updates this file
in the same PR. No separate docs-only PRs except this consolidation.
Bump `Last updated:` at the top.

The "Active PRs" table is the live queue. The "Release Log" is the
post-merge record. The "Soft-Launch Blockers" section drops items as
Carlo completes them.

## 11. Operational Notes

### EmailCapture gating (post-PR-#9)

The shared `EmailCapture` component (`packages/ui/src/components/
EmailCapture.tsx`) returns `null` unless `NEXT_PUBLIC_EMAIL_CAPTURE_
ENABLED=true` is set in the deploy environment. This is intentional:
prevents form submissions hitting a 503 from `/api/subscribe` when no
ESP is wired.

Affects **all five sites uniformly** (shared component). When Carlo
flips the env var on for a given site's Vercel project, that site's
forms reappear and post to the live `/api/subscribe`, which routes to
Mailchimp.

**To enable Dog.com email capture:**
1. Vercel project `dog-com` → Settings → Environment Variables
2. Add `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true` (Production scope)
3. Add `MAILCHIMP_API_KEY=<key from Mailchimp Account → Extras → API Keys>`
4. Add `MAILCHIMP_AUDIENCE_ID=<audience ID from Mailchimp Audience → Settings>`
5. Trigger a redeploy

Until enabled, the puppy-schedule lead-magnet landing page renders but
its capture forms are invisible (the banner still routes to it; the
page content still shows; only the form disappears).

### Vercel rate limits

Free-tier Vercel limits how many Preview deployments can run per
window. PR #9 hit this limit at merge time (5/5 previews failed with
"Deployment rate limited — retry in 24 hours") — **the code was fine**,
the local `turbo build` was green, and the merge proceeded based on
local verification. Production deploys are unaffected.

If launch cadence requires more reliable previews, upgrading the
Vercel project to Pro removes the cap. Otherwise, free-tier previews
recover automatically within 24h.

### Mailchimp wiring is Carlo-only

`/api/subscribe` exists and routes correctly. Mailchimp account
creation, audience setup, API key generation, and Vercel env var
configuration all happen in Carlo's accounts — not delegable. The
8-email puppy autoresponder sequence is staged in
`apps/dog-com/src/content/email-sequences/puppy-onboarding/` as
Mailchimp-paste-ready markdown.
