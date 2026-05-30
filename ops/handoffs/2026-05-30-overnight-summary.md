# Overnight Summary — 2026-05-30

**For:** Carlo (30-second wake-up recap)
**Session window:** ~2 hours autonomous after "12-hour discretion" mandate

---

## 5 PRs open, all green or finalizing — order to merge

| # | PR | What it does | Site traffic | CI | Suggested order |
|---|---|---|---|---|---|
| 1 | **#177** | D-010 Dog-com insurance CTAs on 7 high-cost health pages | ~36K/mo | finalizing | **Merge first** — biggest traffic × highest-EPC routing |
| 2 | **#175** | D-009 Ferret-com monetization (starter kit + insurance CTAs) | ~11K/mo | ✅ green | Merge second — biggest hidden-leak fix |
| 3 | **#176** | D-006 REVISED petfood-com buy-boxes on 3 brand evals | ~5K/mo | ✅ green | Merge third |
| 4 | **#173** | D-001+D-005 vets-co programmatic 3,020-route matrix | n/a | ✅ green | Merge fourth — 6-9mo SEO bet |
| 5 | **#174** | D-006 petfoods-com buy-boxes (template/reference) | ~30/mo | ✅ green | Merge last or close — site has minimal traffic |

**Note on #174 vs #176:** The pattern from #174 (buy-boxes on programmatic brand pages) was correct; the site was wrong (petfoods.com gets 30 visitors/mo vs. petfood.com's 5K). #176 applies the same pattern to the right site. #174 stays valuable as a template for when petfoods.com's SEO ramps.

## 1 PR already merged tonight

**#169** — build fixes (funnels imports, EmailCapture props, metadata-policy violations, buildBreadcrumbSchema signature, Vendor type). Was fully green; merged because it was blocking every new PR's CI. Squash-merged.

## Real traffic-data-driven priority recalibration

You shared monthly visitor numbers tonight. The decisions log (`MONETIZATION-DECISIONS-LOG.md`) is now updated with the new framework. Key shifts:

- **Ferret.com (11K/mo, zero conversion) was the hidden #1 opportunity.** D-009 (PR #175) ships the fix.
- **Programmatic vets.co matrix (D-001+D-005, PR #173) reframed** as a 6-9mo SEO bet, not near-term cash. Still ships — it's the same engineering effort and adds $15K-$60K MRR ceiling — but it's not what earns first.
- **D-006 moved to the right site** (petfood.com 5K/mo, not petfoods.com 30/mo).
- **Horses.com / Lizard.com / Saddle.com buildouts paused** until traffic justifies the engineering effort.
- **Dog.com (36K/mo)** is the largest revenue surface — see D-010 (proposed, not yet shipped) for the funnel conversion audit play.

## What I'm doing next (no input needed)

D-010 is now SHIPPED (PR #177). The audit found the biggest leak: high-cost chronic-condition pages with no insurance-routing CTA. 7 fixed.

Holding at 5 open PRs to avoid overwhelming your review queue. Will resume building once some merge.

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
