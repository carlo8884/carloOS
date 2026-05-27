# BACKLOG

Single prioritized queue of deferred work. Replaces ad-hoc lists
scattered across PR descriptions and STATUS.md.

**Last updated:** 2026-05-27

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

### Inline-breadcrumb migration (37 pages)
37 review pages use inline `<nav>` breadcrumbs without `BreadcrumbList`
JSON-LD schema. Migrate to the shared `<Breadcrumb>` component so all
review pages emit proper schema for SERP rich results.
- Mechanical change, low risk.
- Deploy-heavy (37 file diffs across all 5 sites) — defer until
  Vercel rate-limit window resets OR Pro upgrade.

### Missing category-index pages (3 pages)
- `apps/lizard-com/src/app/health/page.tsx` — closes 5 lizard `/health/*` orphans
- `apps/saddle-com/src/app/guides/page.tsx` — closes 6 saddle `/guides/*` orphans
- `apps/vets-co/src/app/breeds/page.tsx` — improves vets-co breed-health UX
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

### Visual / brand polish (PR #5)
Blocked on A4 visual direction proposal. Deadline set: 2026-05-29
(end of this week). If A4 delivers, scope a tight PR. If not, defer
indefinitely.

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

### PetFood.com / Ferret.com / Horses.com positioning
Strategy work. Requires confirmation Carlo owns the domains + a
positioning brief per domain. Pull forward when Dog.com hits Week-1
metrics.

### Vets.co disposition
Currently in priority list but no specific direction. Options when
revisited: standalone site / sister of Dog.com / trust hub for the
whole portfolio.

### Monetization wiring (Stripe webhook, real Mailchimp segmentation)
`/api/checkout` scaffold exists; `STRIPE_WEBHOOK_SECRET` not yet
referenced. Mailchimp basic flow lands in P0; advanced segmentation
post-launch.

### Deal / partnership outreach
Top 10 strategic-partner shortlist was drafted in an earlier
orchestrator cycle: Chewy, Trupanion, Embrace, Healthy Paws, Rover,
AKC, Banfield, BarkBox, Wagmo, VIN. No outreach until Dog.com has
Week-1 data to anchor the pitch.

### Investor / $100M narrative
Premature until revenue + traffic + email list size are real numbers.
Revisit at 90-day post-launch milestone.

---

## P4 — Infrastructure, low priority

### Sitemap regeneration as pre-commit hook (Stabilizer Phase 2)
Currently `scripts/regenerate-sitemaps.mjs` runs manually. Adding
husky + a pre-commit hook would ensure sitemap matches filesystem
on every commit.

### Orphan-count baseline warn (Stabilizer Phase 2)
CI warning (not failure) if PR introduces a new orphan page.

### DASHBOARD.md staleness
Still claims 106 pages (actual: 327). Quick refresh; lower priority
than STATUS.md and README which are already current.

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

- **PR #4 (governance docs) merging** — superseded by PR #8
  (docs consolidation). Recommendation: close PR #4 without
  merging once PR #8 lands.
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
