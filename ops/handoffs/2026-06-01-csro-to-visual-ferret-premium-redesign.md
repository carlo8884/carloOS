---
from: CSRO
to: Visual
status: open — SUPERSEDES earlier draft (Carlo full spec 2026-06-01)
priority: P0 (Ferret.com fails premium bar; full visual/homepage reset)
created: 2026-06-01
re: Ferret.com — full visual + homepage reset
---

# Ferret.com — full visual/homepage reset (Carlo spec)

Carlo 2026-06-01: Ferret.com needs a **full visual/homepage reset**. It does not pass. Do NOT call
Ferret.com launch-ready until this is done.

**Reference examples** (NOT premium, but more user-friendly than current Ferret.com because they show
real ferrets immediately and speak to first-time owners): Texas Avian "first-time ferret owner"
article · Oxbow "All About Ferrets" · AVMA "selecting a pet ferret".

**Direction:** Ferret.com should feel like **the best modern ferret-owner guide on the internet**.

**Visual bar (acceptance test):** a visitor lands and instantly thinks — *"This is clearly about
ferrets, it feels trustworthy, and it's easier to use than the vet blogs ranking above it."*

## Homepage requirements
1. **Large, high-quality REAL ferret hero above the fold.**
2. **Remove any dog/wrong-species imagery immediately.** (Carlo still sees a wrong hero — verify
   `ferret-com:hero` in `packages/ui/src/data/image-manifest.json` AND what actually renders.)
3. **No prominent "Photo: [name] via Unsplash" text in the homepage hero.** Keep attribution
   (Unsplash/Pexels TOS + QC §1 — never strip) but make it subtle: image credits / footer / editorial
   standards. (Lives in the shared image/hero component — Visual lane.)
6. **First screen organized around OWNER INTENT**, six paths:
   - New ferret owner → `/ownership` (or `/first-year-schedule`)
   - Diet & food → `/diet`
   - Cage / setup → `/care/cage-setup` (or `/care`)
   - Health warning signs → `/health`
   - Behavior / nipping → `/behavior/biting-and-nipping` (or `/behavior`)
   - **Find an exotic vet → ⚠️ NO ROUTE EXISTS** (see "Open decision" below — do not wire until resolved)
7. **Add real ferret imagery to key pages** (health/care/diet/behavior hubs), not just homepage.
8. **Warmer + more useful.** Less textbook, less generic SEO; a practical owner journey.

## Already DONE by COO (merged #369) — do not redo
- #4 "Sister site / coming soon" Ferrets.com promo **removed** from homepage.
- #5 Long source-base/medical paragraph **removed** from homepage; relocated to `/editorial-standards`
  ("Sources We Cite"); homepage now has a short trust line linking there.

## Monetization (briefed separately)
- #9 Affiliate disclosure: keep legally compliant, redesign to feel like a professional publisher.
  `ops/handoffs/2026-06-01-csro-to-monetization-ferret-disclosure-polish.md`.

## Open decision for Carlo (gates the 6th owner-intent path)
**"Find an exotic vet" has no Ferret.com page.** Options: (a) COO writes a short editorial
"Finding an Exotic-Pet Vet" page (net-new content during freeze — needs your slot); (b) cross-link to
**Vets.co** once its directory is live (today it's sample/placeholder — not ready); (c) drop the path
for launch. CSRO recommendation: (a) a short editorial page is the most owner-useful and on-brand;
confirm and COO will build it.

## Gate
Ferret NOT launch-ready until Visual ships 1,2,3,6,7,8 + Monetization #9 + the vet-path decision, then
CSRO re-runs the 7-gate premium bar + IR.
