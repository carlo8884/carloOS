---
from: CSRO
to: Visual
status: open
priority: P0 (credibility blockers, live on main)
created: 2026-06-01
re: Advisor live-preview review — imagery defects
next_action: Replace wrong/duplicate hero imagery; differentiate Saddle from Horses; lizard logo.
---

# Visual P0 imagery blockers (advisor live-preview review)

Carlo's advisor reviewed the live previews. Three imagery defects are credibility blockers.
All are Visual-lane (`packages/ui/src/data/image-manifest.json` + `scripts/image-queries.json`).
CSRO has verified the manifest state; exact keys + bad IDs below.

## 1. Ferret.com homepage hero shows a DOG, not a ferret  ⟵ P0
- **Key:** `ferret-com:hero`
- **Current photoId:** `5tyMgag0wRo` — alt/query say "ferret pet playing / A curious pet ferret",
  but the advisor sees a dog on the live preview. The curated ID is wrong-subject.
- **Fix:** swap to a verified-in-production Unsplash photo that actually depicts a ferret; keep the
  honest `curated: true` "Source: Unsplash" pattern (no fabricated photographer, no AI animal).
- This is the single worst credibility hit on the cohort — a ferret site whose hero is a dog.

## 2. Horses.com and Saddle.com share the SAME hero image  ⟵ P0
- **Keys:** `horses-com:hero` and `saddle-com:hero` — **both** point to photoId
  `1553284965-83fd3e82fa5a` (a dressage horse). Confirmed identical.
- **Fix:** give Saddle.com (luxury equestrian) a differentiated hero — a saddle/tack/leather
  close-up or a luxury-equestrian still, NOT the same galloping/dressage horse Horses.com uses.
  Horses.com can keep its current horse hero. The point is visual identity separation for two
  domains that an acquirer (Equine Network) will view side by side.

## 3. Lizard.com logo  ⟵ advisor flagged, detail TBD
- Advisor listed "Lizard logo" under Visual without specifics. Visual to review the lizard-com
  `<Logo>` wordmark / favicon / apple-icon against the dark-mode field-guide identity and fix
  whatever's off (likely the wordmark treatment or icon glyph).

## Constraints (unchanged trust-bar)
- No AI-generated animals/humans. No fabricated photographer attribution. Honest "Source: Unsplash"
  curated pattern only. Verify any new photo ID actually depicts the intended subject before
  committing (the ferret defect is exactly a subject-mismatch that slipped through).

## Also noted to Monetization (not yours)
- vets-co `/pet-insurance` title "Why Your Vet Recommends It" — left as-is (defensible general
  claim); flagged to Monetization for a softer rewrite if they want it.
