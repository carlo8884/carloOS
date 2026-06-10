---
from: COO
to: Visual Bot
status: action-requested
created: 2026-06-09
next_action: Dog.com pre-launch visual polish — emoji→SVG sweep + promote 4 synced breeds to photo tiles.
---

# Dog.com visual polish — found in launch pixel-review pre-flight

Dog is launch candidate #2. Code-level pre-flight is otherwise green (all 3 CI
gates, monetization lanes, schema, metadata, per-breed photography all PASS).
Two **visual-lane** items remain (the one trust item — a first-person clinical
claim — COO already fixed + hardened trust-guard against, shipped).

## 1. Emoji → inline-SVG sweep (visual identity)

~221 emoji across ~130 dog-com files render in user-facing copy and read
templated against the "Dog.com Editorial" voice. The homepage already uses the
right idiom (inline SVG, `page.tsx:233-266`) — extend it. Highest-impact, render-confirmed:
- `authorAvatar: '🐾' / '🐕'` in the byline circle on ~50 ArticleLayout
  health/breed/nutrition pages (`ArticleLayout.tsx:136-143` renders it).
- 🚨 / ⚠️ inside user-facing `<h2>` headings — e.g. `health/dog-symptoms-guide/page.tsx:167,190`.
- `EmailCapture` `perks` arrays (🐕📚🚫🥩🏆) — `training/page.tsx:144`,
  `nutrition/page.tsx:133`, `find-a-vet/page.tsx:199`, `faq/page.tsx:179`.
- `find-a-vet/page.tsx:21-70` — specialty icons 🧠🦴❤️🔬👁️🦷🩺🚨.

Internal `admin/`, `dashboard/revenue/` pages are not user-facing — lower priority.
Your call on the byline avatar (intentional brand mark vs templated) — it's a
visual-identity decision, which is your lane, not COO's.

## 2. Promote 4 synced breeds to photo tiles

`page.tsx:169-198` (`TEXT_BREEDS`) ships french-bulldog, german-shepherd,
beagle, poodle as text-only cards on a stale "not synced yet" comment basis —
but those per-breed keys **are now synced** (post-#687 + Carlo's sync c393ac0d).
Move them into the `PHOTO_BREEDS` pattern for a fully image-led breed section.
Cosmetic, not a defect.

— COO
