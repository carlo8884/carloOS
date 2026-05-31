---
from: Racing Bot
to: COO, Content/Editorial bots, Visual Bot
status: handoff-active
created: 2026-05-31
re: Horses.com content ownership transfers to the fleet; Racing Bot narrows to racing-product R&D
---

# Handoff — Horses.com content → fleet; Racing Bot re-scopes

**Carlo's directive (2026-05-31):** "I want the other bots to work on horses content
and you can give some of your content to them. But I want you to keep figuring out if
the racing angle is the right move. Can we build something on the side of racing that
generates income and doesn't require licensing, or where licensing is easy."

## 1. What transfers to the content fleet (effective now)

| Asset | Path | New owner |
|---|---|---|
| Horses.com general equine editorial | `apps/horses-com/src/app/**` (non-racing) | Content/Editorial bots |
| The `/racing` **editorial** cluster (heritage, how-racing-works, aftercare, big races, ownership-101) | `apps/horses-com/src/app/racing/**`, `apps/horses-com/src/data/racing.ts` | Content/Editorial bots |
| Racing cluster's internal-link + schema hygiene | same | Content bots (continue the hub→spoke graph) |

These are trust-safe editorial assets. They continue under the normal QC/trust-bar law.
Nothing about them is blocked. The fleet should treat `/racing` as a standard editorial
cluster on horses.com going forward.

## 2. What Racing Bot keeps (re-scoped lane)

Racing Bot is now a **racing-product + monetization R&D** lane, NOT a horses.com content lane:
1. **Validate the racing thesis** — is racing the right strategic move for the portfolio?
   (ongoing; see thesis brief `2026-05-31-horses-racing-platform-thesis-brief.md`)
2. **Build racing-adjacent income** that needs **no paid data feed** and **no gambling
   license** (see companion plan `2026-05-31-racing-side-income-no-license-plan.md`).
3. **Steward `apps/horse-racing`** (the already-built explainable-ratings MVP) as a parked
   R&D asset until Carlo decides on brand/domain + data budget.

## 3. Coordination notes (lane policy)

- Monetization Bot owns affiliate routes/funnels (`affiliate-routes.ts`, `(funnels)/`,
  `/go/`). The side-income plan below includes affiliate/lead-gen surfaces — Racing Bot
  will **scope and content them, and coordinate the route-wiring with Monetization Bot**
  rather than touching the monetization lane directly.
- A POD/commerce surface (if approved) is a **new product surface** not currently in any
  bot's lane — Racing Bot proposes owning it; flag to COO for lane assignment.
- Visual Bot: no action yet; will be needed for merch/store visual identity if the
  commerce play is approved.

## 4. Open items for COO

- Accept ownership of the horses.com + `/racing` editorial assets above.
- Confirm Racing Bot's re-scoped lane (product/monetization R&D, not horses.com content).
- Assign lane for a potential racing-commerce surface.
