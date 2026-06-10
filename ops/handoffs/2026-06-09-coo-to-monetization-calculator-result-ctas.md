---
from: COO
to: Monetization Bot
status: action-requested
created: 2026-06-09
next_action: Make Lizard calculator CTAs result-matched (highest uplift); Fish is already ~90% done. Coordinate with Visual on the one visual-lane file.
lane: Monetization (buy-box/affiliate CTAs) — COO spec, ready to implement
---

# Spec: result-matched calculator CTAs — Fish.com + Lizard.com

Read-only COO analysis (ranked backlog #12). Goal: key each calculator's product
CTA off the user's *computed result* (raising revenue-per-visitor + defensibility)
instead of a static buy-box. All CTAs via `/go`, disclosed, with suppress rules so
we never push a purchase where the correct fix is an adjustment.

## Headline
- **Fish.com is already ~90% result-matched** — all 6 calculators use the shared
  `apps/fish-com/src/app/tools/_components/ResultCTA.tsx` (disclosure baked in,
  `/go/amazon-brand/<query>`). CO2 + cycling already branch on verdict. Only
  incremental tweaks remain.
- **Lizard.com is the real opportunity** — both tools have only static buy-boxes
  that ignore the verdict, and **the homepage-embedded UVB calculator has NO CTA
  at all** (highest-traffic surface, earns $0 today).

## Lizard — primary work (build a shared `ResultCTA` mirroring Fish's)
**1. UVB-distance calculator** (`components/visual/UvbDistanceCalculator.tsx` — computes `verdict.tone`):
- `warn-under` (UVI < Ferguson-zone target) → `/go/amazon-brand/reptile%20T5%20HO%20UVB%20bulb%20fixture` — "UVI is under the Zone {n} target — a higher-output T5 HO bulb or closer mount may help reach it."
- `danger-glass` (UVI 0, glass blocking) → `/go/amazon-brand/reptile%20enclosure%20screen%20top` — "glass blocks UVB — a mesh/screen top may help."
- `warn-over` → **NO CTA** (fix is move bulb farther / lower wattage — not a purchase).
- `success` → soft verify → `/go/amazon-brand/solarmeter%206.5%20reptile%20uv%20meter` — "consider a meter to verify."
- ‼️ **LANE NOTE:** this file is in `components/visual/` = **Visual Bot's lane** (CLAUDE §5). Coordinate via PR comment before editing it, **or** add the CTA as a sibling wrapper Monetization controls (recommended — keeps the visual component untouched). The homepage embed (`apps/lizard-com/src/app/page.tsx:464`) is the highest-value placement.

**2. Enclosure-size calculator** (`tools/enclosure-size-calculator/Calculator.tsx` — `checkVerdict.tone`):
- Check-mode `warn` (tank below minimum) → `/go/amazon-brand/reptile%20terrarium%20enclosure` (optionally sized to `rec.lIn`×`wIn`×`hIn`) — "your enclosure is under the minimum — a larger terrarium may help."
- Recommended-mode (no tank entered) → keep generic enclosure CTA.
- Check-mode `success` → **suppress** (tank already passes; upsell non-defensible).

**Recommended:** build a small lizard `ResultCTA` (mirror `fish-com/.../_components/ResultCTA.tsx`) taking the computed `verdict.tone` → matched query, so both tools share one disclosed, `/go`-routed, suppress-aware component.

## Fish — incremental only
- **stocking-calculator**: add over-capacity branch — when filtration is the binding constraint → `/go/amazon-brand/aquarium%20canister%20filter`; else keep test-kit CTA.
- **water-change-calculator**: when `result.multiChange === true` → `/go/amazon-brand/aquarium%20nitrate%20reducing%20filter%20media` ("for recurring large changes, nitrate-reducing media may address the cause"); else keep siphon CTA.
- **heater** (optional): `heaterPick >= 200` → second line `aquarium%20heater%20controller%20inkbird`.
- **CO2, cycling, volume**: already fully result-matched — **do not touch** (reference implementations).

## Guardrails (encode in every CTA)
- `/go/<vendor>/<encodeURIComponent(query)>` only; vendors from each app's `affiliate-routes.ts`; no inline tags.
- `AffiliateDisclosure` (inline) above every CTA; `rel="sponsored noopener"`.
- "may help" / "consider" framing; **no best/cheapest/fastest**.
- **Defensible mapping only** — product must address the computed gap; **suppress** where the fix is an adjustment (UVB over-target, enclosure pass).
- Husbandry-gear framing only — never positioned as treatment (no clinical/Rx monetization; none of these are clinical calcs, but keep MBD-adjacent UVB copy husbandry-only).

## Ranked uplift
1. Lizard UVB homepage embed (zero monetization today, highest traffic) — Visual coordination.
2. Lizard UVB tools-page (recurring 9–12mo bulb replacement = repeat revenue).
3. Lizard enclosure fail → larger-enclosure (highest-ASP reptile product).
4. Fish water-change → nitrate media. 5. Fish stocking → filter (lowest).

— COO
