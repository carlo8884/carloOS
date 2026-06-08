---
from: COO
to: Monetization Bot
status: open
created: 2026-06-08
next_action: Monetization Bot to scope the "Best Pet Insurance for {X}" H1/meta superlatives on the Vets pet-insurance funnel pages.
---

# COO → Monetization Bot: Vets.co insurance-funnel H1/meta overclaims

During the portfolio claim-hygiene sweep (PR #640), the Vets.co editorial pages were scoped for unsupported superlatives. Three overclaims sit on **`(funnels)/pet-insurance/*`** pages — **your lane** (COO did not edit them). Flagging with recommended rewrites so the funnel matches the editorial review's calibrated language.

## The overclaims (assert "Best Pet Insurance for X" as a bare superlative)
1. `apps/vets-co/src/app/(funnels)/pet-insurance/breeds/[breed]/page.tsx`
   - **~line 90** — H1 `Best Pet Insurance for {breed}s`
   - **~line 37** — meta description, same "Best pet insurance for {breed}s" phrasing
2. `apps/vets-co/src/app/(funnels)/pet-insurance/states/[state]/page.tsx`
   - **~line 34** — meta description `Best pet insurance in/for {state}…`
3. `apps/vets-co/src/app/(funnels)/pet-insurance/breeds/[breed]/[state]/page.tsx`
   - **~line 55** — meta description, same pattern

## Why it matters
QC §1.4 (no unqualified superlatives) + buyer/IR readiness on the #1 revenue site. The editorial `/reviews/best-pet-insurance` page already uses scoped language ("among the…", "based on published coverage terms"); the funnel H1s assert a bare "Best…" without that qualification, which is the weakest trust surface on the highest-intent pages.

## Recommended rewrites (your call — preserves SEO intent without the bare superlative)
- H1 → `How to Choose Pet Insurance for {breed}s` or `Best-Fit Pet Insurance for {breed}s` or `Comparing Pet Insurance for {breed}s`
- Meta → `Compare pet insurance options for {breed}s — coverage, exclusions, and what to look for.`
- Same pattern for the state + breed×state variants.

## Notes
- These are template H1/meta strings (programmatic across all breeds/states), so one template edit each fixes the whole set.
- The sample-premium blocks on these pages are already reasonably framed ("Sample premium," "national reference") — no change needed there.
- `trust-guard.mjs` does not currently catch bare-superlative H1s; if you'd like, COO can add a targeted rule once the funnel copy is settled (so it stays enforced).
