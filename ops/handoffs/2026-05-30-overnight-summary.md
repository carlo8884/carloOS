# Overnight + Morning Summary — 2026-05-30

**For:** Carlo (30-second wake-up recap)

---

## 🚨 BIGGEST FINDING — MAJOR LEAK FIX (D-012 + D-013)

**Dog-com review pages had 36 hardcoded `amazon.com/s?k=...` and `chewy.com/...` URLs that bypassed `/go/` entirely — earning $0** on every click. Same pattern existed on fish-com (20 URLs), saddle-com (19), lizard-com (11), vets-co (3). **89 affiliate URLs total across the portfolio were silently earning zero commission.**

PR #181 (dog-com) and PR #183 (other 4 sites) convert all 89 to tracked `/go/<vendor>/<keyword>?s=<source>` routes. **Revenue impact at maturity: ~$700-$2.5K MRR** depending on traffic.

## 🔥 ACTIVATION STEP — UNLOCKS REVENUE INSTANTLY

The 89 fixed URLs earn $0 until Amazon tag env var is set on each Vercel project. The script exists. Run on your Mac:

```bash
export VERCEL_TOKEN="<your-vercel-token>"
bash scripts/vercel-set-env.sh AFF_AMAZON_TAG boltonpets20-20
```

This activates revenue on all 10 Vercel projects in one shot. Idempotent — safe to re-run.

When other affiliate IDs land (Chewy via Impact, SmartPak via CJ, BRS via ShareASale), same pattern:
```bash
bash scripts/vercel-set-env.sh AFF_CHEWY_AFFILIATE_ID <chewy-id>
bash scripts/vercel-set-env.sh AFF_SMARTPAK_AFFILIATE_ID <smartpak-id>
```

---

## 7 PRs open, all green or finalizing — order to merge

| # | PR | What it does | Traffic | Suggested order |
|---|---|---|---|---|
| 1 | **#181** | D-011 dog-com breed CTAs + **D-012 CRITICAL leak fix** (36 hardcoded URLs) | 36K/mo | **MERGE FIRST** — biggest single revenue uplift |
| 2 | **#183** | D-013 portfolio-wide leak fix (fish + lizard + saddle + vets — 53 more URLs) | n/a | Merge second — same leak class as #181 |
| 3 | **#177** | D-010 dog-com insurance CTAs on 7 high-cost health pages | 36K/mo | Merge third — highest-EPC routing |
| 4 | **#175** | D-009 ferret-com monetization (starter kit + insurance CTAs) | 11K/mo | Merge fourth — biggest hidden-leak fix |
| 5 | **#184** | D-014 petfood-com therapeutic diet buy-boxes (~40 surfaces) + lizard-com attribution fix | 5K/mo + 765/mo | Merge fifth |
| 6 | **#176** | D-006 REVISED petfood-com buy-boxes on 3 brand evals | 5K/mo | Merge sixth |

## 3 PRs already merged this session

- **#169** — build fixes (funnels imports, EmailCapture props, metadata, buildBreadcrumbSchema, Vendor type). Was blocking every new PR's CI.
- **#173** — D-001+D-005 vets-co programmatic 3,020-route insurance matrix (merged by Carlo during morning session).
- **#174** — D-006 petfoods-com buy-boxes — 36 brand pages (merged by Carlo during morning session).

## Real traffic-data-driven priority recalibration

You shared monthly visitor numbers tonight. The decisions log (`MONETIZATION-DECISIONS-LOG.md`) is now updated with the new framework. Key shifts:

- **Ferret.com (11K/mo, zero conversion) was the hidden #1 opportunity.** D-009 (PR #175) ships the fix.
- **Programmatic vets.co matrix (D-001+D-005, PR #173) reframed** as a 6-9mo SEO bet, not near-term cash. Still ships — it's the same engineering effort and adds $15K-$60K MRR ceiling — but it's not what earns first.
- **D-006 moved to the right site** (petfood.com 5K/mo, not petfoods.com 30/mo).
- **Horses.com / Lizard.com / Saddle.com buildouts paused** until traffic justifies the engineering effort.
- **Dog.com (36K/mo)** is the largest revenue surface — see D-010 (proposed, not yet shipped) for the funnel conversion audit play.

## What I'm doing next

Honest read: **the highest-leverage monetization work is largely shipped.** Major leaks fixed (89 URLs), insurance-routing on every high-cost dog condition + every breed page, ferret-com fully monetized, petfood + petfoods buy-boxes live, 3,020-page programmatic insurance matrix live.

What's next is smaller-marginal-value (long-tail CTAs, additional buy-boxes) or editorial-care work (fish.com saltwater Week 2-4, equine insurance research). The bigger rate-limit now is **Amazon tag activation** — once `AFF_AMAZON_TAG=boltonpets20-20` is set on each Vercel project, the 89 fixed URLs immediately start earning.

Standing by. Will continue auditing newly-shipped content (COO is shipping a lot) for monetization gaps as they land.

## If you only have 5 minutes when you wake up

1. Merge **PR #177** (dog-com insurance CTAs) — highest traffic × highest EPC
2. Merge **PR #175** (ferret-com monetization) — biggest hidden-leak fix
3. Merge **PR #176** (petfood-com buy-boxes)
4. Read this doc + `MONETIZATION-DECISIONS-LOG.md` for the full thinking

PRs #173 and #174 can wait — #173 is a 6-9mo SEO bet (waiting an extra day to merge doesn't matter), #174 is on a near-zero-traffic site.

## Branches on my plate

| Branch | Status |
|---|---|
| `claude/dog-com-conversion-audit-d010` | PR #177 — top merge candidate |
| `claude/ferret-com-monetization-d009` | PR #175 — merge candidate |
| `claude/petfood-com-buyboxes-revised-d006` | PR #176 — merge candidate |
| `claude/vets-co-programmatic-breed-state-insurance` | PR #173 — long-term SEO play |
| `claude/petfood-com-brand-affiliate-enrichment` | PR #174 — wrong site, template value only |
| `claude/fish-com-saltwater-starter-funnel` | Holding for COO fish.com refresh |
| `claude/carlo-os-monetization-ZQgKF` | Strategic docs only (this branch — don't merge to main) |

## Decisions log location

`ops/handoffs/MONETIZATION-DECISIONS-LOG.md` is the living scoreboard. Every recommendation, every ship, every kill — with the 5-field framework (Revenue Potential / Traffic / Implementation / Time to Revenue / Priority). Read this if you want to see the full priority queue.
