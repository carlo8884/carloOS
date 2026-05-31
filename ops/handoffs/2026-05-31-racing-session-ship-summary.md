---
from: Racing Bot
to: Carlo, CSRO
status: session-summary
created: 2026-05-31
re: Autonomous build session — racing brand income surfaces + thesis (ship log)
---

# Racing Bot — session ship summary

Autonomous research-mode session. Built out the racing brand as a **casual→committed
conversion engine** with license-free, data-free income surfaces, while validating the
core thesis. All on branch `claude/horses-racing-intelligence-Spt0A` (PR #178), every
commit CI-green (tsc + trust-guard + link-check + metadata-policy).

## Strategy / research (handoffs)
- **Thesis brief** — Horses.com as racing-intelligence platform vs editorial vs hybrid.
  Verdict: phased hybrid; betting market declining; value + trust-safe layers are
  ownership/bloodstock/explainable-ratings/data; most accretive to Equine Network.
- **No-license income plan** — ranked racing-adjacent income needing no data feed + no
  gambling license; "easy licensing" = avoid registered marks.
- **Engagement & conversion research** — the **Derby conversion gap** (~16M viewers, 52%
  female, poor year-round conversion) is the strategic wedge; **prize games DE-prioritized**
  (2025: 6 states banned sweepstakes gaming — no-prize skill only); confirmed the ratings
  app stays parked (no free commercial-use PP data).

## Shipped surfaces (all trust-safe, all monetization Carlo-gated)
| Surface | Routes | Income model | License/data |
|---|---|---|---|
| Ownership hub | `/ownership` +3 topics +`/playbook` | syndicate referral + paid guide | none / none |
| **Cost calculator** | `/ownership/cost-calculator` | tool → ownership funnel | none / none |
| Experiences/travel | `/experiences` +3 | experience/travel affiliate | none / none |
| Equestrian gear | `/gear` +3 buyer's guides | retail affiliate | easy / none |
| Newsletter "The Form" | `/newsletter` +2 samples | list → (later) paid tier | none / none |
| **Predict the Finish** | `/predict` | engagement → list | none* / none |
| **Your First Derby** | `/first-derby` | conversion on-ramp → list | none / none |
| Bloodstock | `/bloodstock` +3 | audience → ownership funnel | none / none |

\*no-prize skill game only; prizes gated on counsel.

Net: **8 new clusters/tools, ~20 new pages**, all interlinked into the hub and feeding one
funnel: casual interest → engagement (game/Derby) → education (guides/bloodstock) →
ownership/experiences/gear (revenue) → newsletter (retention).

## Parked / gated (need Carlo)
- `apps/horse-racing` explainable-ratings MVP — gated on brand/domain + data-feed budget + legal read.
- Carlo-gated vendors to turn seams into revenue: ownership/syndicate referral, equine
  insurance, equestrian retail affiliate, experience/travel affiliate, checkout vendor for the Playbook.
- Track B (Shopify merch previews) — parked per Carlo; service was erroring anyway.
- Prize/sweepstakes games — default NO until counsel.

## Open decisions (none block further building)
1. Confirm brand identity (hybrid recommended) + casual→committed positioning lean.
2. Approve any Carlo-gated vendor to start earning.
3. Ratings-app un-park (brand/domain + data budget + legal).

## Still autonomous
Continuing to maximize value per Carlo's directive. Next candidates: seasonal Derby
sub-pages (party kit/recipes/fashion as trust-safe content), bloodstock deepening,
a syndicate-directory framework, and ownership FAQ schema expansion.
