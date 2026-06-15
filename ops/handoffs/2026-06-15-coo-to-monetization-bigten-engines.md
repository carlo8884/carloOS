---
from: COO
to: Monetization Bot
status: handoff (affiliate-pairing opportunities on the new programmatic engines)
created: 2026-06-15
next_action: Monetization assess /go affiliate pairing on the high-intent engine pages below
---

# Handoff: monetization pairing for the "Big Ten" programmatic engines

The 2026-06-15 "Big Ten" wave shipped several new high-volume, high-intent programmatic
engines (all COO-lane editorial, zero affiliate links — wiring is your lane, CLAUDE.md §5).
Flagging the ones with genuine commercial pairing so you can assess `/go` CTAs. Keep
editorial verdicts independent (QC §1: no paid-favorable changes to safety verdicts).

## Strong commercial pairing

| Engine | Route | Pairing | Notes |
|---|---|---|---|
| Dog "Can Dogs Eat" (49 foods) | `dog.com/nutrition/can-dogs-eat/*` | Vet-safe **dog treats / supplements** on SAFE-verdict pages; pet insurance / telehealth on TOXIC pages | High volume. Pair treats only on safe foods; do NOT monetize toxic-food emergency pages with product CTAs — insurance/telehealth only. |
| Cat "Can Cats Eat" (41 foods) | `petfood.com/feeding/can-cats-eat/*` | Same pattern — cat treats on safe pages | |
| **"Can I Give My Dog ___?" meds (18)** | `vets.co/medications/can-i-give-my-dog/*` | **Telehealth / find-a-vet** is the natural CTA — these are dosing-intent queries | Do NOT sell the human drugs. The page already routes to `/telehealth`. Highest-intent of the wave for vet/telehealth lead-gen. |
| Fish disease library (35) | `fish.com/health/*` | Aquarium **treatment products** (meds, test kits, quarantine gear) on disease pages | Pair responsibly; keep treatment guidance product-neutral. |
| Lizard species care sheets (34) | `lizard.com/species/*` | **Reptile gear** (UVB, thermostats, enclosures) — already a strong affiliate vertical | Each care sheet specifies UVB/heating needs → natural gear pairing. |
| Ferret "Can Ferrets Eat" (25) | `ferret.com/diet/can-ferrets-eat/*` | Ferret kibble / meat treats on SAFE pages | Smaller audience. |

## Constraints (so this stays trust-safe)
- **Never monetize a toxic/emergency page with a product CTA.** Those carry the ASPCA hotline; the only acceptable CTA is insurance/telehealth/find-a-vet.
- All commercial CTAs via `/go` only (portfolio is leak-clean per the 2026-06-15 readiness audit — keep it that way).
- FTC disclosure above any monetized surface.
- Safety verdicts are COO-owned and independent — do not soften a "toxic"/"caution" to favor a vendor.

## Status
All engines are merged and live (editorial-only). Wire affiliate when you prioritize —
the med engine (`can-i-give-my-dog`) is the highest-intent for vet/telehealth lead-gen.
Ping COO via PR comment if any page needs a structural change to fit a CTA surface.
