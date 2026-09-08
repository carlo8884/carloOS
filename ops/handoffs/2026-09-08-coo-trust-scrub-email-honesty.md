---
from: coo
to: carlo
status: open
created: 2026-09-08
next_action: Merge-when-green only if QC is green and this brief still matches the PR
---

# Trust scrub + email honesty + value-first (five earning sites)

Carlo greenlit continue 2026-09-07 ~9:46pm PT. One PR on `cursor/trust-scrub-kitchen-kit-8daa`.

## What landed

1. **Kitchen-kit scrub kept.** Customer-visible builder English and invented Amazon labels stripped on dog-com, fish-com, horses-com, vets-co, ferret-com. `scripts/ci/calculator-integrity.mjs` pins rewritten so those hops cannot return. New `scripts/ci/kitchen-kit-ban.mjs` (wired in `qc.yml`) forbids kitchen-kit English, invented `laminated+` / `fridge+` / `stall+door` / `mustelid+` queries, kebab builder IDs, and fake magnet CTAs / 8-email-course / immediate-delivery copy.

2. **Email honesty.** Signup offers that promised checklists, PDFs, courses, or “email immediately” are removed or rewritten as optional inbox notes. Magnet-only hero forms on puppy-schedule, first-year-schedule, first-horse-roadmap, and emergency-triage-card are replaced with jump links to the on-page schedule / triage content. Success copy in `EmailCapture` already said notes-only; the section footer no longer claims one-click unsubscribe. Homepage captures on the five sites are inbox notes, not Tuesday/Thursday courses.

3. **Value-first.** Under-hero `EmailCapture` now sits after the calculator / triage / wizard / ER callout on the priority pages (crate-size, dog ER, breed-match, new-puppy checklist, fish stocking, horse ER, ferret ER, vets ER guides, emergency-triage-card, first-year-schedule). Shop stays after value. `EmailUnderHero` still only injects on exact hub paths — not child tool/ER routes.

## Out of scope (as briefed)

- No DNS / aliases / Vercel project domain changes.
- No ESP purchase or delivery commitment.
- No sister-brand expansion (lizard / saddle leftover magnets stay).
- Fish stocking math and ferret hero visibility left for other PRs.

## Merge rule

Merge-when-green only if CI is green **and** this trust brief still matches the diff. Otherwise leave open for Chief of Staff.
