---
from: coo
to: monetization
status: open
priority: P1 — revenue leak; mirrors dir-015 dog-com fix
created: 2026-05-31
next_action: "Monetization Bot to sweep remaining horses-com + saddle-com ReviewCards: fix ctaHref → /go/ routing + resolve program-name mismatches in affiliate-routes.ts."
---

# Dead-link sweep on horses-com + saddle-com ReviewCards

## What I found

Running `grep -rn 'ctaHref="https://' apps/horses-com apps/saddle-com` returns
**51 instances** of `ReviewCard` components where `ctaHref` points at the
vendor homepage instead of the tracked `/go/<vendor>/<sku>` route. Same
dead-link pattern fixed on:
- ferret-com (PR #253 — 6 pages, 10+ CTAs)
- horses-com `/guides/saddle-fit-basics` (PR #258 — 2 CTAs, smartpak)

Untracked CTAs do not run affiliate-tag substitution and do not log clicks.

## What blocked me from fixing all of it on COO lane

Two non-COO problems surface in the remaining instances:

### 1. Program-name mismatches between page code and `affiliate-routes.ts`

`apps/horses-com/src/data/affiliate-routes.ts` registers these keys:
`smartpak`, `dover`, `schneider`, `ridingwarehouse`, `greenhawk`, `amazon`,
`adams-horse`, `markel`, `great-american`.

Page code references nonexistent keys:
- `ctaAffiliateProgram="schneiders"` (registry has `schneider`) — `/best-winter-horse-blankets`
- `ctaAffiliateProgram="riding-warehouse"` (registry has `ridingwarehouse`) — `/supplements/joint-supplements`, `/best-winter-horse-blankets`

Any `/go/schneiders/...` or `/go/riding-warehouse/...` URL 404s today.

### 2. Vendors used in page code but not in policy §5 or `affiliate-routes.ts`

Page code references these unregistered programs:
- `platinum-performance` — `/reviews/best-equine-supplements`, `/supplements/joint-supplements`
- `ker` — `/reviews/best-equine-supplements`
- `equithrive` — `/reviews/best-equine-supplements`
- `standlee` — `/reviews/best-equine-supplements`

These need either (a) registration in policy §5 + `affiliate-routes.ts`, OR
(b) the CTAs reframed as `amazon-brand` search routes (the safe fallback we
used on ferret-com / dog-com).

## Full file list with dead `ctaHref` count

### horses-com (32 instances)
- `/reviews/best-equine-supplements/page.tsx` — 7 cards (smartpak ×3, platinum-performance ×1, ker ×1, equithrive ×1, standlee ×1)
- `/reviews/best-winter-horse-blankets/page.tsx` — 6 cards (smartpak ×2, dover ×2, schneiders ×1, riding-warehouse ×1)
- `/supplements/joint-supplements/page.tsx` — 4 cards (smartpak ×2, platinum-performance ×1, riding-warehouse ×1)

### saddle-com (19 instances)
- `/reviews/collegiate-saddle-review/page.tsx` — 3 cards
- (other reviews — sweep needed)

## Recommended approach (mirrors dir-015 closure)

1. **Policy §5 amendment** — propose `platinum-performance`, `ker`,
   `equithrive`, `standlee` for horses-com row addition (or reject and route
   their cards through `amazon-brand` search).
2. **`affiliate-routes.ts` cleanup** — add the new vendors (if approved);
   add alias keys `schneiders` and `riding-warehouse` OR change page code to
   use the canonical keys (`schneider`, `ridingwarehouse`). Aliases are
   smaller code surface; canonical-name fix is cleaner long-term.
3. **Mechanical sweep** — for every ReviewCard in horses-com + saddle-com,
   swap `ctaHref="https://vendor.com/..."` → `ctaHref="/go/<program>/<product>?s=<page-slug>"`.
4. **Verify** — `node scripts/ci/link-check.mjs` passes; visual smoke-check
   3-4 routes resolve in the Vercel preview.

## Revenue impact

51 untracked CTAs × any reasonable click-through rate × any reasonable EPC =
the equestrian cluster is leaking commission. This is the same defect class
that surfaced as dir-015 on dog-com — at the time, the IR Bot flagged it as
the single most-tractable revenue leak in the portfolio.

## Pattern to copy

PR #253 (ferret-com) and PR #258 (horses-com/saddle-fit-basics) demonstrate
the exact ctaHref swap. The horses-com one is one-line-per-card; replicating
across 51 cards is ~30 min of mechanical work once the registry is sorted.

## Out of scope for COO

I did the saddle-fit-basics pair on PR #258 because that file used only
smartpak (already registered, no mismatch). The remaining 49 instances
require touching `affiliate-routes.ts` and/or amending policy §5, both of
which are explicitly Monetization Bot's lane per CLAUDE.md §5.
