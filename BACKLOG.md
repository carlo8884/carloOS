# BACKLOG

Single prioritized queue of deferred work. Replaces ad-hoc lists
scattered across PR descriptions and STATUS.md.

**Last updated:** 2026-05-29

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

### Vercel project bootstrap for 5 new sites (Carlo-only)
horses-com · petfood-com · petfoods-com · ferret-com · ferrets-com
all have repo scaffolds, content, lead magnets, and visual polish — but
no live Vercel project. Carlo runs `scripts/vercel-bootstrap.sh` per
site (creates project, sets env vars, links to repo). Each ~5 min.

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

### Monetization wiring (Stripe webhook live, Mailchimp segmentation)
Stripe membership spec is written (`ops/handoffs/2026-05-29-stripe-
membership-spec.md`). `/api/checkout` scaffold exists; `STRIPE_WEBHOOK_
SECRET` not yet referenced. Mailchimp basic flow lands in P0; advanced
segmentation post-launch.

### Sponsorship sales motion
Pitch deck framework + sales kit in `ops/handoffs/2026-05-29-
sponsorship-sales-kit.md`. Execute against the partner shortlist once
Dog.com has Week-1 traffic to anchor pitches.

### Acquirer pitch (10-domain portfolio)
Framework in `ops/handoffs/2026-05-29-acquirer-pitch-framework.md`.
Premature until traffic + email list size + revenue are real numbers.
Revisit at 90-day milestone.

### Deal / partnership outreach
Top 10 strategic-partner shortlist: Chewy, Trupanion, Embrace, Healthy
Paws, Rover, AKC, Banfield, BarkBox, Wagmo, VIN. No outreach until
Dog.com has Week-1 data.

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
