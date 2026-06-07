# Horses.com Vertical — Task Queue & Loop Ledger

**Owner:** Horses.com vertical specialist · **Created:** 2026-06-07 · **Type:** durable execution loop
**Mandate (Carlo 2026-06-07):** keep building on a loop; maintain ~1000 known tasks; regenerate when low.
**Quality guardrail (Carlo, prior):** premium/acquirer-grade, NOT a thin content farm. Build clusters *deeply*;
never flood thin pages. Every page trust-safe (QC §1) + CI-green + harvest-ready for horses.com.

## How the loop works
1. Pull latest main + check CSRO directives/PR for new dispatch (operating rhythm #1/#2).
2. Take the top **non-blocked, in-lane, value-adding** task from the Active Cycle.
3. Build it properly (data + pages + schema + internal links + sitemap), trust-safe, CI-green.
4. Commit + push; note done in the Cycle Log.
5. Refill the cycle from the backlog when <5 remain. Regenerate 1000 when the reservoir runs low.
6. Lane: build in `apps/horse-racing` (my app, no merge-wave collision); harvest into horses.com on CSRO dispatch.

## Cursor
- **Current cycle:** C1 — Racing vertical depth (Pillar B), trust-safe educational clusters.
- **Last completed:** (see Cycle Log)

---

## Active Cycle C1 — Racing vertical depth (highest-value, zero wagering risk)
- [x] T1 Race Types cluster — hub + 7 explainers (maiden/claiming/allowance/optional-claiming/stakes/graded/handicap) ✅ 2026-06-07
- [x] T2 Major Races cluster — hub + Triple Crown / Derby / Preakness / Belmont / Breeders' Cup ✅ 2026-06-07
- [ ] T3 Training & Safety cluster — how racehorses are trained / track safety / the backstretch workforce
- [ ] T4 Racehorse Care cluster — daily care / nutrition / soundness / turnout (non-medical)
- [ ] T5 Racing History cluster — origins / iconic horses (opinion-framed) / milestone races
- [ ] T6 Beginner explainers — glossary expansion + "how to watch" + "reading the program"
- [ ] T7 Bloodstock depth — stallions/stud basics / sales calendar explainer (no live data)
- [ ] T8 Ownership depth — tax basics / partnerships vs syndicates deep-dive / aftercare obligations

## Backlog reservoir (graduates into cycles; ~1000-item plan)
Full prioritized idea reservoir: `ops/handoffs/horses-idea-backlog.md`.
Cluster families queued (each expands to many scoped pages on graduation):
- Pillar A: Health & Conditions, Nutrition & Supplements, Care & Ownership 101, Breeds depth, Disciplines
- Pillar B: Race Types, Major Races, Bloodstock, Training & Safety, Racehorse Care, Racing History, Aftercare/OTTB, Beginner on-ramps
- Tools/engagement: cost calculators, BCS tool, no-prize predict game, newsletter
> Note: Pillar A health/nutrition clusters are horses.com-domain content — I scope them; **build only on CSRO
> dispatch** to avoid colliding with COO's launch-wave on `apps/horses-com`. Pillar B racing depth builds in my
> own app now.

## Cycle Log
- 2026-06-07: ledger created; C1 opened.
- 2026-06-07: T1 Race Types shipped (hub + 7), CI-green, pushed.
- 2026-06-07: T2 Major Races shipped (hub + 5), CI-green, pushed.
