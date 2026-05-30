# BACKLOG

Single prioritized queue of deferred work. Replaces ad-hoc lists
scattered across PR descriptions and STATUS.md.

**Last updated:** 2026-05-30 (EOD)

**Rules:**
- Anything in this file is deferred by design — listed here means
  "not blocking launch, will revisit after."
- New items append. Priority can move; do not silently delete items
  without recording why.
- When an item ships, remove from this file and add to STATUS.md
  release log.

---

## P0 — Soft-launch operational (Carlo-only, ~75 min total)

Documented in detail in [`LAUNCH-DAY.md`](./LAUNCH-DAY.md). Items
listed here for queue visibility.

| Step | Status |
|---|---|
| Mailchimp audience for dog-com | Pending Carlo |
| GA4 property for dog.com | Pending Carlo |
| Search Console verification + sitemap submission | Pending Carlo |
| Vercel env vars (`NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED`, `MAILCHIMP_*`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`) | Pending Carlo |
| DNS cutover dog.com → Vercel | Pending Carlo |
| Post-cutover smoke test | Pending Carlo |

---

## P1 — Engineering, post-launch (no rush)

### Vercel project bootstrap for 5 new app scaffolds (Carlo-only)
askthevet, seniorpets, dogpicture, petsupplies, hardmoneyloans — scaffolds shipped via PR #138 but no Vercel projects yet. `scripts/vercel-bootstrap.sh` needs `SITES` array extended to include these 5. Defer until each app has content beyond the placeholder homepage.

(The previous 5: horses-com · petfood-com · petfoods-com · ferret-com · ferrets-com — bootstrap completed earlier this week. Confirmed by `vercel-set-env.sh` succeeding on those project names 2026-05-30.)

### Visual Bot work in flight (Visual Bot lane)
Multiple `visual-bot/*` PRs in queue: per-site favicons (PR #164), OG image generation across 8 sites (PR #163), ScaffoldHomeShell for new apps (PR #161), Dog.com magazine polish (PR #156), Horses.com discipline-callout chip row (PR #159). All safe to merge once CI clears. Coordinated via `ops/handoffs/visual-*.md`.

### Mailchimp / MailerLite / Beehiiv decision (Carlo)
7 lead-magnet welcome sequences (~35 emails) written and saved at `apps/<site>/src/content/email-sequences/*`. **Deferred per Carlo's 2026-05-30 cost decision** — no point paying for an ESP pre-traffic. Revisit once any site hits 100+ daily signups. MailerLite recommended (free tier includes automations, unlike Mailchimp).

### `/ask` MVP — Phase 1 on Dog.com only
Anthropic API key exists, `/ask` spec is in PR #67 brief. COO has `apps/dog-com/src/lib/ask-safety.ts` scaffolded mid-build (paused per Carlo's "test on one site" directive). Resume when Carlo confirms traffic on Dog.com.

### Photo sourcing follow-up
Real Unsplash photography shipped for homepage heroes + key feature
slots on 8 sites. Per-site photo sourcing playbook is in
`ops/handoffs/2026-05-29-photo-sourcing-playbook.md`. Sandbox cannot
verify final image render at scale — needs browser-driven Unsplash
work to cover remaining article pages (breed profiles, disease pages).

### AI care assistant `/ask` route — MVP (Phase 1)
Per the #67 brief. Phase 1 is `/ask` route on dog-com that takes a
question and returns a cited answer pulled from the existing health +
breed + nutrition content. Stripe paywall layered later (see P3).

### Per-city Ferrets.com directory expansion
`/find-a-vet/[state]` programmatic SEO is live (52 states). Next layer
is `/find-a-vet/[state]/[city]` — pulls from the top-N metro per state
(~250-400 city pages). Same template pattern as the state directory.

### Per-SKU PetFoods.com catalog
`/brands/[slug]` programmatic SEO is live (38 brands). Next layer is
per-SKU pages within each brand (Hill's Science Diet Adult, Royal
Canin German Shepherd, etc). Estimated 200-400 SKU pages from a
single template + structured data file.

### Inline-breadcrumb migration (37 pages)
37 review pages use inline `<nav>` breadcrumbs without `BreadcrumbList`
JSON-LD schema. Migrate to the shared `<Breadcrumb>` component so all
review pages emit proper schema for SERP rich results. Mechanical
change, low risk. Cost reduced post-turbo-ignore landing.

### Missing category-index pages (2 pages)
- `apps/lizard-com/src/app/health/page.tsx` — closes 5 lizard `/health/*` orphans
- `apps/saddle-com/src/app/guides/page.tsx` — closes 6 saddle `/guides/*` orphans
(vets-co `/breeds/page.tsx` now exists.)
Pattern exists in dog-com `/training/page.tsx`, `/health/page.tsx` —
follow that.

### vets-co `/specialists/*` explainer pages (8 pages)
Currently homepage `SPECIALIST_TYPES` cards all route to
`/find-a-vet`. Eight real explainer pages would give each card a
unique destination + indexable content.
- neurology, orthopedics, cardiology, oncology, ophthalmology,
  dentistry, internal medicine, emergency-critical-care

### saddle-com `/western/{discipline}` deep-dives (5 pages)
Cards on `/western` anchor into `/reviews/best-western-saddles#...`.
Real per-discipline pages would unlock topical depth: barrel-racing,
roping, trail, reining, ranch.

### fish-com `/breeding` section
Card was removed from homepage in PR #4. If breeding content is on
roadmap, this is the slot.

---

## P2 — Polish, post-Dog.com 7-day metrics

### Custom fonts via `next/font/google`
Currently fonts load via Google Fonts CSS link. Migrate to
`next/font/google` for self-hosting and CLS reduction.

### Per-site favicons (`icon.tsx`)
Each site uses the default Next icon. Add per-site `app/icon.tsx`
generators (palette already in `packages/config`).

### `/api/og` load-test + cache strategy
Every page's OG image goes through `/api/og` dynamically. Untested at
scale. Two-step:
1. Add aggressive edge cache headers
2. Consider pre-generating per-page OGs at build time and falling
   back to dynamic only for category indexes

### Score-disclosure refinement
`<ScoreMethodology />` is shipped on 41 score-bearing pages. Could
add a one-line "How we score" link in each ReviewCard's score chip
for in-card discoverability.

---

## P3 — Strategy, post-traction

Strategy direction for the new sites is now confirmed in repo —
revenue/affiliate playbook, Stripe membership spec, sponsorship sales
kit, acquirer pitch framework, per-site Stitch + photo briefs all live
in `ops/handoffs/`. P3 below is execution against those briefs once
Dog.com has Week-1 metrics.

### Monetization architect (CANONICAL — 2026-05-29)

**[`MONETIZATION-ARCHITECT.md`](./MONETIZATION-ARCHITECT.md)** is the
system of record for monetization. Supersedes earlier playbooks on
"what to build next" questions and filters all plays through Carlo's
no-calls / automation / leverage / repeatability preferences.

The architect doc defines:
- 6 shared infrastructure primitives (P1-P6) built once, reused everywhere
- 25 monetization systems (S1-S25) in the user's 13-field spec format
- A deployment matrix mapping every domain (full 64-domain portfolio)
  to its primary + supporting systems
- A 12-week deployment sequence prioritized for a no-outbound-sales
  operator
- A continuously-updated affiliate program watch list (~100 programs)
- A research queue (S26-S34+) for systems still being evaluated

Companion handoff to the COO orchestrator (reply to PR #122) lives at
[`ops/handoffs/2026-05-29-architect-to-coo-bot.md`](./ops/handoffs/2026-05-29-architect-to-coo-bot.md)
— 6 directives + 4 new-bot specs.

### Monetization playbooks V1 + V2 (CONTEXT — 2026-05-28)

Earlier strategic analysis, kept for context:
- [`MONETIZATION-PLAYBOOK.md`](./MONETIZATION-PLAYBOOK.md) — V1, 10
  domains, 7-mode frame, top-12 plays, three $1B paths
- [`MONETIZATION-PLAYBOOK-V2.md`](./MONETIZATION-PLAYBOOK-V2.md) — V2,
  full 64-domain portfolio, "Pet Health Trinity" $1B path
- [`QUICK-WINS.md`](./QUICK-WINS.md) — 6 fast-revenue plays shipping
  in 30-90 days
- [`90-DAY-MONETIZATION-PLAN.md`](./90-DAY-MONETIZATION-PLAN.md) —
  operational sequencing with 4 decision gates

All four docs remain valid as strategic context but should be filtered
through the Architect doc's no-calls preference before any work begins.

### PetFood.com / Ferret.com / Horses.com positioning
Strategy work. Requires confirmation Carlo owns the domains + a
positioning brief per domain. Pull forward when Dog.com hits Week-1
metrics. **Per playbook V2 §5.7-5.9 and Architect §3:** petfood.com
primary play is a "find the right food" recommendation engine + DTC
affiliate aggregation; horses.com primary is equine insurance affiliate
+ supplies comparison (marketplace classifieds demoted under no-calls
filter); ferret.com defer or lease per Architect S10.

### Vets.co disposition (RESOLVED — direction set by Architect)
Per Architect §3 and §7: **vets.co = the highest-value B2B asset in the
portfolio.** Pivoted under no-calls filter from "full B2B SaaS suite
with sales motion" to **S30 (free self-serve scribe demo) + S7
(directory engine) + S22 (CE affiliate)** — same destination, no
outbound sales required.

### Monetization wiring (Stripe webhook live, Mailchimp segmentation)
Stripe membership spec is written (`ops/handoffs/2026-05-29-stripe-
membership-spec.md`). `/api/checkout` scaffold exists; `STRIPE_WEBHOOK_
SECRET` not yet referenced. Mailchimp basic flow lands in P0; advanced
segmentation post-launch. **Per Architect S14:** premium membership
scaffolding can be wired now, but do NOT sell until each site crosses
5-10k email subs.

### Pet insurance comparison hub (Architect S6)
Lowest-cost monetization move in the portfolio. Phase 1: affiliate hub
on dog.com + vets-co + askthevet.com with 9 carriers. Phase 2: quote
APIs (Lemonade, Pumpkin, ManyPets) — 2-3× higher conversion than
clickout. **MGA upgrade demoted under no-calls filter** (requires
carrier conversations).

### Sponsorship sales motion (DEMOTED — no-calls)
Pitch deck framework + sales kit was drafted in
`ops/handoffs/2026-05-29-sponsorship-sales-kit.md`. **Per Architect §4
and §7:** outbound sponsorship sales is removed from scope; replaced
with **programmatic equivalents:**
- Newsletter sponsorships → S12 (Paved.com / Beehiiv Ad Network /
  Swapstack — self-serve marketplaces)
- Sponsored content → S16 (Acceleration Partners / Sovrn Editorial /
  Skimlinks Editorial)
- Display sponsorships → S4 (Mediavine / Raptive / Ezoic)

### Acquirer pitch (portfolio)
Framework in `ops/handoffs/2026-05-29-acquirer-pitch-framework.md`.
Premature until revenue + traffic + email list size are real numbers.
Revisit at 90-day milestone. **Per playbook V2 §4 and Architect:** the
"Pet Health Trinity" (AskTheVet.com B2C + Vets.co B2B + SeniorPetPharmacy
DTC) is the strongest exit narrative.

### Deal / partnership outreach (DEMOTED — no-calls)
Top 10 strategic-partner shortlist: Chewy, Trupanion, Embrace, Healthy
Paws, Rover, AKC, Banfield, BarkBox, Wagmo, VIN. **Per Architect §4
and §7:** direct outreach to strategics removed from scope; replaced by
affiliate program enrollment (self-serve) and S16 programmatic
sponsored content. M&A conversations deferred until acquirer-pitch
gate clears (90-day milestone).

### Investor / $100M narrative
Premature until revenue + traffic + email list size are real numbers.
Revisit at 90-day post-launch milestone. Investor Bot deferred until
combined portfolio MRR crosses $30-50k.

---

## P4 — Infrastructure, low priority

### Sitemap regeneration as pre-commit hook (Stabilizer Phase 2)
Currently `scripts/regenerate-sitemaps.mjs` runs manually. Adding
husky + a pre-commit hook would ensure sitemap matches filesystem
on every commit. (Programmatic SEO pages on horses-com, vets-co,
ferrets-com, petfoods-com are not yet in their sitemap.ts files —
addressed by regeneration.)

### Dashboard.mjs — extend to 10 sites
`scripts/dashboard.mjs` hardcodes the 5 original sites. Extend to
include horses, petfood, petfoods, ferret, ferrets. Auto-detect
programmatic-route contributions from `src/data/*.ts` to remove the
manual route-count math from DASHBOARD.md.

### Orphan-count baseline warn (Stabilizer Phase 2)
CI warning (not failure) if PR introduces a new orphan page.

### Real corrections inbox setup
Legal pages reference `privacy@<domain>` and `legal@<domain>`. Need
real mailboxes wired before launch (LAUNCH-DAY.md mentions; not
strictly blocking).

### Editorial Standards verification process
Currently a static page on each site. Long-term: a structured
update-log on each editorial-standards page recording corrections
and updates with dates.

---

## P5 — Will-not-do (recorded for context)

These were considered and explicitly declined or descoped:

- **PR #4 (governance docs) merging** — superseded by docs
  consolidation. Closed without merge.
- **PRs #19–#30** — superseded by the 2026-05-28 → 2026-05-29
  merge wave. Close not merge.
- **Three-pod parallelism** (activating Fish Pod + Saddle Pod
  before Dog.com is live) — held per "operational simplicity"
  principle; revisit after Dog.com hits 7-day metrics.
- **Adding new bots / agents to the roster** — current 2-lane
  (Build + Audit + Carlo) model is sufficient at current scale.

---

## How to use this file

- Items here are NOT for immediate execution.
- Carlo (or Orchestrator in autonomous mode) selects from P1–P3 when
  capacity exists.
- Adding an item: append with priority tier, brief description,
  and a one-line reason for deferral.
- Removing an item: link to the merged PR in the commit message that
  removes it.
