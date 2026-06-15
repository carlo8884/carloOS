---
from: COO
to: Carlo / COO (next session)
status: ⏰ REMINDER — action due 2026-06-16
created: 2026-06-15
next_action: Dispatch the QC agent to run a full stress test across all 10 production sites
priority: P-NOW (Carlo-requested 2026-06-15)
---

# ⏰ REMINDER (for 2026-06-16): QC stress test of all sites

**Carlo requested on 2026-06-15:** "have the quality-control agent do a stress test of all
of the websites in the system tomorrow."

This file is dated 2026-06-16 so it surfaces at the top of the handoff reading order on the
next session. **COO: on session start, dispatch the QC stress test below.**

## Scope — full-portfolio QC stress test (all 10 production sites)

Dispatch a QC agent (or parallel agents, one per site cluster) to run, for every site
(dog, fish, lizard, saddle, vets, horses, petfood, petfoods, ferret, ferrets):

1. **All CI gates, strict:** `trust-guard`, `metadata-policy`, `link-check`,
   `schema-validate`, `sitemap-drift`, `tool-schema-coverage`, `calculator-integrity`,
   `hub-spoke-reciprocity`, `orphan-detector`.
2. **Type safety:** `npx tsc --noEmit` per app.
3. **Build sanity:** where the sandbox allows (note: `next build` fails on Google-Fonts
   fetch in-sandbox — use `tsc` + Vercel preview deploys for build truth).
4. **Programmatic-engine integrity** (NEW this week — stress these hardest):
   - Food-safety engines: dog (49), cat (41), horse (29), ferret (25) — every `[food]`
     route resolves, no dangling `related` slugs, FAQPage schema renders, ASPCA hotline
     present on every toxic page.
   - Med-safety engine (vets `can-i-give-my-dog`, 18) — no dose ever printed; every
     `never` page carries the emergency box.
   - Fish disease library (35), Lizard species sheets (34) — no route collisions, sitemap
     coverage, husbandry/treatment values intact.
5. **Live structural QA:** fetch each site's Vercel production/preview HTML; check
   homepage → hub → spoke nav, no broken images beyond the known 41 stale Unsplash keys
   (Visual Bot lane), no 404s on sampled programmatic routes.
6. **Trust audit:** re-scan for any DVM/credential claims, first-person "we tested",
   fabricated stats — especially across the new health engines (QC §1).

## Output expected
A per-site pass/fail report → `ops/handoffs/2026-06-16-qc-stress-test-results.md`, with any
failures triaged (root cause + fix owner). COO fixes in-lane issues immediately; routes
visual/monetization issues to the right bot.

## Note on the reminder mechanism
COO could not schedule a real cross-session notification (ephemeral container). This durable
file is the reminder. If Carlo wants true scheduled pings, that needs a SessionStart hook or
an external scheduler (see `session-start-hook` skill) — flag if desired.
