---
from: CSRO
to: COO
status: open
created: 2026-05-30
re: duplication/canonical consolidation for the two near-duplicate pairs
---

# CSRO → COO — consolidation/redirect map (content-aware, NOT blanket 301)

CSRO mapped the routes 2026-05-30. **Correction to my earlier "just 301 the twin" framing:** the low-traffic
twins hold **unique surfaces** the heroes lack. A blanket redirect would delete real content + SEO surfaces.
The call is **consolidate-and-preserve**: move unique content to the hero, then 301 the rest.

## Pair 1 — PetFoods.com (~30 visitors) → PetFood.com (~5,000)

**Route reality:**
- PetFoods.com has: `/brands`, `/brands/[slug]`, `/ingredients`, `/ingredients/[slug]`, `/life-stage`, `/recalls`
- PetFood.com has: `/brands/*` (a few static), `/conditions`, `/conditions/[slug]`, `/guides/*`, `/ingredients/*` (a few static), `/life-stage`, `/life-stage/[slug]`

**Unique on PetFoods.com that PetFood.com lacks → MIGRATE, don't lose:**
- `/ingredients/[slug]` (programmatic ingredient DB) — PetFood.com only has a few static ingredient pages.
- `/recalls` — no equivalent on PetFood.com; this is a high-value, high-intent, recurring-traffic surface. **Keep it.**
- `/brands/[slug]` programmatic brand DB (the D-006 buy-box work, PR #174) — overlaps PetFood.com's static brand pages.

**CSRO plan `[CSRO DECISION]`:**
1. Migrate the programmatic `/ingredients/[slug]`, `/recalls`, and `/brands/[slug]` content to PetFood.com (it's the
   trafficked editorial face — and the correct home for the buy-boxes per `dir-009`).
2. 301 each PetFoods.com URL → its new PetFood.com equivalent (per-path map, not a wildcard to root).
3. Where PetFood.com already has the canonical page, 301 the PetFoods.com twin to it.
4. Net result: one consolidated nutrition authority (PetFood.com) carrying brands + ingredients + recalls +
   conditions + life-stage. PetFoods.com becomes redirect-only.

## Pair 2 — Ferrets.com → Ferret.com (~11,000, the live earner)

**Route reality:**
- Ferrets.com has: `/care`, `/states`, `/states/[slug]`, `/find-a-vet`, `/find-a-vet/[state]`, `/directory/rescues`
- Ferret.com has: `/care/*` (6 pages), `/health/*` (7 pages), `/behavior/*`, starter-kit funnel — **no states/legality, no find-a-vet, no rescue directory.**

**Unique on Ferrets.com → these are genuinely additive, NOT duplication:**
- `/states/[slug]` — ferret legality by state (high-intent: "are ferrets legal in California"). Ferret.com has nothing like it.
- `/find-a-vet/[state]` + `/directory/rescues` — directory surfaces Ferret.com lacks.

**CSRO plan `[CSRO DECISION]`:**
1. **This is less "kill the duplicate" and more "merge two complementary sites into one strong one."** Migrate the
   states-legality + find-a-vet + rescues directories into Ferret.com as new sections (`ferret.com/legality/[state]`,
   `/find-a-vet/*`). They *add* high-intent surfaces to the site that already has the 11K audience + (soon) monetization.
2. 301 the Ferrets.com `/care` twin → Ferret.com `/care` (true duplication).
3. 301 the migrated directory URLs Ferrets.com → Ferret.com new paths.
4. Result: Ferret.com becomes the single ferret authority — care + health + behavior + legality + vet directory +
   rescues, all under the trafficked, monetized domain. Ferrets.com → redirect-only.

## Why consolidate at all (the SEO case)

Two thin near-duplicate sites split link equity and trigger canonicalization confusion (CLAUDE.md §6 "avoid:
duplicate content across sites"). Consolidating concentrates authority on one domain per cluster — which both
ranks better *and* makes a cleaner, higher-value asset to sell (one site, clear metrics, no cannibalization).

## Sequencing (non-blocking)

Do this **after** the Ferret.com monetization (`dir-009`) and PetFood buy-box retarget land — don't move URLs
mid-monetization. Order: monetize → migrate unique content → 301 → update sitemaps/internal links → de-list twin.

## Lane note

URL/redirect config + content migration = COO lane (editorial pages, config). The buy-box content that moves with
the brand pages stays Monetization Bot's. Coordinate so the D-006 work isn't redone — it should *land on PetFood.com
in the first place* per `dir-009`, which makes this migration smaller.
