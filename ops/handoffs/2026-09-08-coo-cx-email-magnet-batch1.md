---
from: coo
to: carlo
status: open
created: 2026-09-08
next_action: Merge-when-green if QC is green
---

# CX batch 1 — email honesty + real magnets + value-first (five sites)

Carlo queue 2026-09-08. One PR. No DNS / alias / spend.

## What landed

1. **GROK.md** — retired “priorities 1–4 satisfied / reconfirm and hold.” New queue: finish CX, prove commercial journeys, stop logging unchanged homepage shells.

2. **Email cleanup** — contradictory “Leave an email / We send them” vs “Email delivery is not live” removed on dog-com, fish-com, horses-com, vets-co, ferret-com. Empty Owner notes blocks stripped. `kitchen-kit-ban.mjs` now forbids those phrases.

3. **OnPageMagnet** — “Save a copy” only when `resourceText` (complete useful content) or `resourceHref` (link to the checklist/tool) exists. Hollow heading/promo/disclaimer exports are gone. No resource → no offer.

4. **HomeEmailCapture** — real journeys, no inbox essay:
   - Dog: puppy checklist + crate-size calculator
   - Fish: new-tank builder + stocking planner
   - Horses: first-horse roadmap + care
   - Vets: emergency triage card + when-to-go
   - Ferret: first-year schedule

5. **Value-first** — `/symptoms` removed from under-hero injection. Dog `/symptoms`: Rule #1 + ER list before the decorative image. Tools: calculator/inputs first, then optional save, then shop (puppy, crate, stocking).

## Visitor gets now

| Page | Before | After |
|---|---|---|
| Dog `/symptoms` | Promo + “we send them” + “email not live” before Rule #1 | ER guidance first; no fake inbox |
| Fish stocking | Owner notes contradiction next to the calculator | Calculator, then save of the actual planning rules, then shop |
| Dog puppy / crate | Hollow save / wrong h1 on puppy | Working builder + save of the real checklist / sizing steps |
| Five homepages | “Save a copy” of heading/perks | Links to the real tool |

## Out of scope

- No DNS / aliases / Vercel domain changes
- No ESP purchase
- Inquire / affiliate / analytics are separate verifies
- Sister brands (lizard / saddle / petfood) left alone
