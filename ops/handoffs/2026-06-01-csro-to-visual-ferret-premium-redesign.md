---
from: CSRO
to: Visual
status: open
priority: P0 (Carlo: Ferret.com fails the premium launch bar — 2026-06-01)
created: 2026-06-01
re: Ferret.com premium homepage + key-page redesign (NOT launch-ready)
---

# Ferret.com — premium redesign brief (Carlo directive)

Carlo 2026-06-01: **Ferret.com does NOT pass the premium launch bar.** It still reads as a cheap
content site. Ferret is reclassified **NOT launch-ready** until Visual delivers a proper homepage +
key-page redesign. This is the first real application of the Premium Domain Launch Bar
(`ops/csro/premium-domain-launch-bar.md`).

Target feel: **the best modern ferret-owner reference on the internet** — warm but serious, practical
and visual, real-ferret-first, built by people who understand ferret owners. NOT a generic SEO site.

## Visual-lane P0s (you own)
1. **Replace the hero image with a real ferret** — Carlo still sees a dog/wrong hero. Verify
   `ferret-com:hero` in `packages/ui/src/data/image-manifest.json` actually renders a real ferret on
   the homepage; if the manifest is right but the render is wrong, fix the render. Real ferret, full stop.
2. **Redesign the homepage first screen** so it feels like a premium niche authority, not an article
   template (per the 7-gate bar: 2-second identity, product-on-homepage, distinct identity, memorable).
3. **Remove the oversized/awkward hero photo treatment** — fix the composition/scale.
4. **Image attribution placement** — do NOT show "Photo: [name] via Unsplash" prominently in the
   hero/homepage. **Keep attribution (Unsplash/Pexels TOS + QC §1 — never strip it)** but move it to a
   subtle image credit or footer-level attribution. This lives in the shared image/hero component
   (Visual lane); COO did not touch it.
8. **Add real ferret imagery to key pages**, not just the homepage (health/care/diet/behavior hubs).
9. **Stronger brand system** — warmer, specialist, niche-owner, real-ferret-first.

## COO-lane items — DONE this pass (PR on `claude/ferret-premium-coo`)
- #6 Long medical/source-base paragraph removed from the homepage footer; relocated into
  `/editorial-standards` ("Sources We Cite"). Homepage now carries a short trust line linking there.
- #7 "Sister site · coming soon" Ferrets.com promo section **removed** from the homepage (stays gone
  until Ferrets.com is live and useful).

## Shared — handed to Monetization
- #5 Affiliate disclosure: keep it (FTC), but redesign so it reads like a professional publisher, not
  boilerplate. Brief: `ops/handoffs/2026-06-01-csro-to-monetization-ferret-disclosure-polish.md`.

## Gate
Ferret is NOT launch-ready until Visual ships 1–4,8,9 and CSRO re-runs the 7-gate premium bar + IR.
