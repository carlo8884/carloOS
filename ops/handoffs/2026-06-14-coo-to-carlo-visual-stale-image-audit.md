---
from: COO
to: Carlo (sync) + Visual Bot (manifest lane)
status: audit (actionable — targeted re-sync / manifest fix)
created: 2026-06-14
next_action: Carlo runs sync-images.mjs (refreshes all) OR Visual corrects the listed manifest URLs
---

# Stale-image audit — 41 manifest keys on the old URL format

Triggered by Carlo's "some pictures are missing" (Horses homepage). Found the
root cause and the full portfolio blast radius.

## Root cause

The image manifest (`packages/ui/src/data/image-manifest.json`) has **two URL
formats** for Unsplash images:

- **Fresh / live** — written by `scripts/sync-images.mjs`:
  `…?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=…&ixlib=rb-4.1.0&q=80&w=1080`
- **Stale** — older bare format, never refreshed by the current sync:
  `…?w=1200&q=80&auto=format&fit=crop`

The stale-format URLs are the ones that go dead (Unsplash rotates/removes them).
At least one confirmed 404 in production: `photo-1469820838967` (the Horses
Health/nutrition image). With the `#764` `onError` safety net these now render a
branded gradient instead of a blank box — **designed, but not a photo**. That's
the "missing pictures" effect.

> Verification method: the image optimizer (`/_next/image`) is SSO-gated, so
> byte-level liveness can't be checked from CI. URL **format** is the reliable
> proxy — bare-format = not refreshed by the latest sync = should be re-fetched.

## Blast radius — 41 stale keys (by site)

| Site | Count | Keys |
|---|---|---|
| **ferret-com** ⚠️ launch-cohort | 21 | color-dark-eyed-white, color-cinnamon, color-champagne, color-black, color-chocolate, color-silver, color-panda, colors-overview, health-adrenal, health-insulinoma, health-dental, health-aging, care-cage-setup, care-grooming, care-nail-trim, care-diet-basics, behavior-biting, care-exercise, diet-raw-vs-kibble, health-gi-blockage, health-vaccinations |
| **horses-com** | 7 | category-health, category-nutrition, category-tack, category-ownership, tack-helmet, nutrition-forage, care-hoof |
| **fish-com** ⚠️ launch-cohort | 6 | category-species, category-setup, category-health, category-reviews, species-neon-tetra, species-goldfish |
| **lizard-com** | 3 | category-species, category-setup, category-health |
| **petfood-com** ⚠️ launch-cohort | 2 | brands-hero, ingredients-hero |
| **vets-co** ⚠️ launch-cohort | 1 | health-hero |
| **saddle-com** | 1 | hero |

**dog-com: 0** — the flagship manifest is fully on the fresh format.

## The fix

**Primary (durable, fixes all 41 at once):** Carlo runs `node scripts/sync-images.mjs`
on his Mac (network is blocked in the sandbox). It re-fetches every query and
rewrites these keys in the fresh format. This is the right fix.

**Alternative (Visual lane):** Visual replaces the stale URLs in the manifest
directly with current Unsplash URLs (manifest is Visual-owned per CLAUDE.md §5).

**COO interim mitigation (already shipped, PR #767):** repointed the 2 dead
Horses homepage category cards (Health, First-Horse-Roadmap) to live keys so the
homepage isn't gradient-blank pre-launch. This page-level reshuffle only works
where a live spare key of the right topic exists — it does NOT scale to the 41
(most need genuinely new photos), which is why the sync is the real fix.

## Priority note
ferret-com (21) and fish-com (6) are launch-cohort sites with visible stale
content imagery — worth prioritizing in the next sync before those sites are
shown to acquirers / flipped.
