---
from: CSRO
to: COO (execute — infra lane), Carlo (account-level toggles)
status: open
priority: HIGH (cost leak, compounding)
created: 2026-05-31
---

# CSRO → COO + Carlo — Vercel build-cost reduction

**Trigger:** Carlo's Vercel bill (2026-05-31, screenshot): **$42.11 on-demand with 27 days left in cycle**.
Breakdown: **Build CPU Minutes = $59.75 (~95% of all cost)**; everything else (functions, transfer, ISR, images)
is literally pennies. So this is a **build-frequency × build-breadth** problem, nothing else.

Carlo's posture: spending to make money is fine — but this is waste, not investment. Build minutes don't earn;
they're pure overhead climbing fast. Fix it.

## Root cause `[FACT — verified in repo]`

- **15 apps all depend on `packages/ui` + `packages/config`.** Any change to a shared package correctly invalidates
  **all 15 app builds** (turbo's dependency graph is right; the cost is structural).
- The bots touch `packages/config` (SiteId/theme/cross-portfolio) and `packages/ui` constantly → many shared-package
  changes → many 15× build fan-outs.
- `turbo-ignore` IS installed on all 15 `vercel.json` (verified) — so single-app changes are already scoped. The
  cost is the **shared-package fan-out** + **preview deploys on every push**.

## Fix plan — biggest levers first

### 1. Turbo Remote Caching — almost certainly the single biggest win `[COO + Carlo]`
If remote caching isn't on, **every Vercel build is cold** — even unchanged apps rebuild from scratch. With remote
caching, an app whose inputs didn't change **restores from cache in seconds instead of burning build CPU**.
- **Carlo (account):** confirm Turbo Remote Cache is enabled for the Vercel team (it's free on Vercel; Settings →
  link the repo's turbo to the team cache).
- **COO:** ensure `turbo.json` + CI pass the cache token so builds actually hit the cache (`TURBO_TOKEN`/`TURBO_TEAM`).
- Expected impact: large. Cold 15× builds → mostly cache restores.

### 2. Turn OFF preview deployments (or scope them) `[Carlo, dashboard]`
CLAUDE.md §7 already warns: "Vercel preview deploys are expensive at scale — 10-app builds per PR." Right now every
PR push can fan out preview builds across apps.
- **Carlo (per-project setting):** disable **Preview** deployments on the projects we're not actively QA-ing, OR
  set them to only deploy the affected app. Production deploys stay on. (Local `turbo build` is the authoritative
  gate per STATUS.md; previews are nice-to-have, not required.)
- Expected impact: large — kills the per-PR build fan-out.

### 3. Don't trigger builds on docs/ops-only changes `[COO]`
CSRO + bots commit a LOT of `ops/**` and `*.md` (strategy docs). Those must **never** trigger an app build.
- **COO:** verify `turbo-ignore` skips ops/docs commits; if any project rebuilds on an `ops/` change, tighten the
  `ignoreCommand` (e.g. `npx turbo-ignore <app> --fallback=HEAD^` scoped to app paths).
- Expected impact: medium — removes a whole class of needless builds (this very session generated ~15 doc commits).

### 4. Batch shared-package changes `[CSRO/COO process]`
Each `packages/config` or `packages/ui` commit = 15 builds. Bots should **batch** shared-package edits into fewer
commits rather than many small ones, and prefer per-app changes when possible.
- **Process rule:** when touching shared packages, group changes; avoid drip-commits that each trigger 15× fan-out.

### 5. Spend cap / alerts `[Carlo]`
The screenshot shows "Spend Management: Alerts only." Set a **hard spend cap** (or a lower alert) so a runaway
build loop can't silently rack up hundreds. Carlo: pick a monthly ceiling you're comfortable with.

## Sequencing

1. **Carlo (5 min, dashboard):** confirm Turbo Remote Cache on; disable/scope preview deploys; set a spend cap.
   These three are the bulk of the win and only Carlo can toggle them.
2. **COO (infra lane):** verify cache token wired in CI; tighten turbo-ignore for ops/docs; document the
   batch-shared-changes rule.
3. **CSRO/all bots:** batch shared-package edits.

## Lane note

`vercel.json`, `turbo.json`, `.github/workflows/*` = **COO/infra lane** (`bot-coordination.md §2`). CSRO does not
edit them — this is a directive. Anti-cost-explosion is a permanent guardrail (`bot-coordination.md §9–10`).

## What I need from Carlo (the account-only levers)

- Confirm Turbo Remote Caching is enabled for the team.
- Disable or scope Preview deployments.
- Set a Vercel spend cap.

These three are ~5 minutes and likely cut the build-minute line by the large majority. Everything else is COO cleanup.

## Account context (Carlo-provided 2026-05-31)

- **Vercel team name: "Carlo Tabibi's projects"** — COO: use this to verify in the build logs whether Turbo Remote
  Cache is being **hit** (look for "cache hit, replaying..." / "Remote caching enabled" vs cold "cache miss,
  executing..." on unchanged apps). If builds are cold, wiring `TURBO_TOKEN`/`TURBO_TEAM` for this team is the fix.
- Carlo is not highly technical — give him click-by-click steps for any dashboard action; don't assume Vercel UI familiarity.
- **Billing state (2026-05-31 screenshot):** Pro Plan. Cycle May 27–Jun 27. Included credit $20 (spent). On-demand
  $40.63. Upcoming invoice ~$60.63 (incl. seat + add-ons). **On-Demand Budget = $200, at $46.68 (23%),
  Notifications ON, but `Pause Projects: OFF`.**
  - **So a budget cap EXISTS — the runaway-to-thousands risk is already contained.** The $200 ceiling just doesn't
    auto-stop (Pause off = alerts only). Lowering the cap is optional; the trajectory (≈$40–60/mo, ~95% build
    minutes) is the real target, not the ceiling.
  - **Decision for Carlo (logged, his call):** leave `Pause Projects: Off` (recommended — turning it ON would halt
    *production* deploys too when the cap hits, risking live sites going stale) and instead **lower the budget to
    ~$75–100** so notifications fire earlier as an early-warning, while the COO build-minute fixes do the actual
    cost reduction. Hard-pause is the wrong tool for a portfolio with live traffic.
