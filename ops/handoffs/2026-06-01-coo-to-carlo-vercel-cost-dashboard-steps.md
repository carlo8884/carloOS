---
from: COO
to: Carlo
status: open
priority: HIGH (cost — ~$60/mo build-minute trend per CSRO 2026-05-31)
created: 2026-06-01
next_action: Carlo runs the 3 dashboard steps below (~5 min total)
related: ops/handoffs/2026-05-31-csro-vercel-cost-reduction.md, csro-dir-014
---

# COO → Carlo — Vercel build-cost: 5-minute dashboard checklist (dir-014)

The CSRO build-cost diagnosis (`ops/handoffs/2026-05-31-csro-vercel-cost-reduction.md`)
lists three levers only you can pull from the Vercel dashboard. COO has closed every
code-side lever (turbo-ignore, vercel-ignore.sh ops/docs short-circuit, CI Turbo
Remote-Cache wiring). These three are the rest of the savings.

Open Vercel at: https://vercel.com/dashboard — make sure team **"Carlo Tabibi's projects"**
is selected (top-left team switcher).

## Step 1 — Enable Turbo Remote Cache (biggest win, ~5 min)

Goal: stop cold-rebuilding 15 apps on every commit. With Remote Cache, an unchanged
app restores from cache in seconds instead of burning build CPU.

1. Top-right → click your avatar → **Settings**
2. Left sidebar → **Tokens** → **Create Token**
   - Name: `turbo-remote-cache-ci`
   - Scope: **Full Account** (team-level)
   - Expiration: **No expiration** (or 1 year if you prefer)
3. Copy the token. It starts with `vercel_…`.
4. Open the GitHub repo settings:
   https://github.com/carlo8884/carloos/settings/secrets/actions
5. **New repository secret**:
   - Name: `TURBO_TOKEN`
   - Value: paste the Vercel token from step 3
6. Switch to **Variables** tab → **New repository variable**:
   - Name: `TURBO_TEAM`
   - Value: your Vercel team slug. Find it at https://vercel.com/dashboard
     — it's the part after `vercel.com/` in your team URL (looks like
     `carlo-tabibis-projects` or similar). NOT the display name.

Once both are set, the next CI run will start sharing the Turbo cache with Vercel.
CI build minutes drop. Vercel-side: it already auto-links Remote Cache for projects
deployed from the same team, so no action needed on individual projects.

## Step 2 — Scope preview deployments per project (~3 min × 14 projects, OR bulk-disable)

CSRO documented that preview deploys on every PR push fan out across all 14 production
projects — that's the second-largest cost line.

**Recommended (cheapest):** disable previews on the 5 lowest-traffic apps and keep
them on the 9 active ones (Dog.com, Vets.co, Fish.com, Saddle.com, Lizard.com,
Horses.com, PetFood.com, PetFoods.com, Ferret.com). For each project:

1. https://vercel.com/dashboard → click project → **Settings** → **Git**
2. Scroll to **Preview Deployments**. Toggle **Deploy Previews** **OFF**.
3. Production deploys (from `main`) stay on — only PR/branch previews are off.

**Apps to keep previews ON** (active QA): dog-com, vets-co, fish-com, saddle-com,
lizard-com, horses-com, petfood-com, petfoods-com, ferret-com.

**Apps to turn previews OFF** (low edit volume right now): ferrets-com, askthevet,
seniorpets, dogpicture, hardmoneyloans.

Note: when a preview is needed for a paused project, push a deploy manually with
`vercel --prod=false` or temporarily re-enable.

## Step 3 — Lower the on-demand budget alert (~1 min)

CSRO doc recommended lowering the $200 cap to ~$75–100 so notifications fire as an
early-warning before the COO build-minute fixes have settled.

1. Vercel → **Settings** (team-level) → **Billing** → **Spend Management**
2. Set **On-Demand Budget** to `100` (USD)
3. Keep **Notifications: ON**, **Pause Projects: OFF** (CSRO recommendation —
   pausing halts production deploys, which we don't want when live)

## What I (COO) already did in this PR

| Lever | Status | Where |
|---|---|---|
| `turbo-ignore` on all 14 apps | DONE (PR #219 + earlier) | `apps/*/vercel.json` |
| Docs/ops-only short-circuit | DONE (this PR — broader patterns) | `scripts/vercel-ignore.sh` |
| CI Turbo Remote-Cache env wiring | DONE (this PR) | `.github/workflows/ci.yml` |
| Carlo dashboard checklist | DONE (this file) | here |

## Expected combined impact

Per CSRO diagnosis: build CPU minutes are ~95% of Vercel cost (~$60/mo trend).
- Step 1 (Remote Cache) alone typically cuts unchanged-app builds from ~minutes to
  ~seconds — biggest single lever.
- Step 2 (preview scoping) removes the per-PR fan-out, currently the second cost line.
- Step 3 is a guardrail, not a savings lever.

Reasonable target after all three: **>50% reduction in build minutes** within one
billing cycle.

## What I need back from you

Just confirmation that you ran the 3 steps. Then I'll close `dir-014` in the queue
and mark the cost trend in the next STATUS.md refresh.

🤖 COO — dir-014 closeout. Per CLAUDE.md §11 autonomous mode, executed code-side
levers without interrupting; this file is the only Carlo touch needed.
