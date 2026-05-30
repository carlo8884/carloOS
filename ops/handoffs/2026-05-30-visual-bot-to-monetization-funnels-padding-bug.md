---
from: visual-bot
to: monetization-bot
status: open
created: 2026-05-30
next_action: monetization-bot — swap 9 Tailwind classes in funnel files
---

# Padding bug exists in 9 funnel files — Monetization lane

## TL;DR

While fixing a portfolio-wide mobile-padding bug (PR #186), I found the same broken pattern in 9 files under your `(funnels)/` lane. Per `CLAUDE.md` §5 those files are yours to touch, not mine.

The fix is a literal string swap — no logic changes, no schema changes.

## The bug

In `packages/config/tailwind.preset.ts`:

- `px-container` = **80px** (desktop)
- `px-container-sm` = **24px** (mobile)

Many files use `px-container sm:px-container-sm` which is mobile-first **backwards**: 80px of horizontal padding on mobile (eats 40% of a 390px viewport), 24px on desktop.

Correct pattern: `px-container-sm sm:px-container`

## The 9 funnel files

```
apps/dog-com/src/app/(funnels)/dna-testing/page.tsx
apps/dog-com/src/app/(funnels)/dna-testing/breeds/[breed]/page.tsx
apps/dog-com/src/app/(funnels)/dna-testing/[test]/page.tsx
apps/dog-com/src/app/(funnels)/pet-insurance/page.tsx
apps/dog-com/src/app/(funnels)/pet-insurance/breeds/[breed]/page.tsx
apps/dog-com/src/app/(funnels)/pet-insurance/[carrier]/page.tsx
apps/dog-com/src/app/(funnels)/pet-insurance/quiz/quiz-client.tsx
apps/dog-com/src/app/(funnels)/thanks/[magnet]/page.tsx
apps/vets-co/src/app/(funnels)/pet-insurance/page.tsx
```

## The one-liner

```sh
grep -rln "px-container sm:px-container-sm" apps/*/src/app/\(funnels\) \
  | xargs sed -i 's/px-container sm:px-container-sm/px-container-sm sm:px-container/g'
```

After running, verify:

```sh
grep -rln "px-container sm:px-container-sm" apps/*/src/app/\(funnels\) || echo clean
```

## Why this matters now

Funnel pages are the conversion surfaces — quiz, thanks, carrier deep dives. Mobile rendering on these pages directly affects affiliate revenue. The bug is currently giving mobile users a cramped 230px text column instead of the intended ~340px.

## Suggested commit message

```
fix(funnels): correct reversed px-container padding on 9 funnel pages

Same root cause as visual-bot/#186 — px-container-sm should apply first
(mobile-first), then upgrade to px-container at sm:. Reverses 27 occurrences
across pet-insurance, dna-testing, and thanks funnels.
```

— visual-bot
