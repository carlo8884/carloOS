# CSRO Per-Domain Valuation Model

**Owner:** CSRO Bot · **Created:** 2026-05-30
**Inputs:** live traffic (Carlo, 2026-05-30) + comps (`valuation-comps.md`, `[RESEARCH]` sandbox-unverified).
**Purpose:** put dollar ranges on each in-scope domain so sell-vs-build decisions are quantified, not vibes.

> ⚠️ All figures are **planning estimates**, not appraisals. They rest on `[RESEARCH]` comps not yet
> page-verified, and on *assumed* revenue (sites aren't monetized/live yet). Treat as decision-support ranges,
> label `[EST]`. Re-run when real RPM/affiliate revenue data exists.

---

## §1 Method

Two value bases per domain; take the higher:

- **Content-business value** = (monthly net profit) × **24–34**. Profit is unknown pre-monetization, so I model a
  **revenue band** from traffic:
  - *Display (Mediavine Journey)* `[EST]`: visitors × ~$11–15 RPM / 1000. (Conservative; ignores affiliate.)
  - *+ Affiliate uplift*: pet content affiliate typically adds roughly the same order as display on commercial-intent
    pages; insurance pages far more. Modeled as a range, not a point.
- **Domain-name value** = scarcity/comp-based (`valuation-comps.md §3`), independent of traffic. Floor for premium
  one-word .coms even with zero traffic.

"Visitors/mo" below = Carlo's snapshot. Assume ~1 session ≈ 1 visitor for rough math.

---

## §2 Built in-scope sites — value ranges `[EST]`

| Domain | Visitors/mo | Display rev/mo `[EST]` | Content-biz value @24–34× (display-only, conservative) | Domain-name floor | Disposition |
|---|---|---|---|---|---|
| **Dog.com** | 36,000 | ~$400–540 | ~$10–18k *(display alone)* | **premium — $$$M** (Dog.com sold $500K in 2004; $2.3M offer live) | hold/protect; sale value driven by **domain scarcity + offer**, not content math |
| **Fish.com** | 7,000 | ~$80–105 | ~$2–3.5k *(display alone)* | **premium — $$M** ($1.45M offer live) | hold/protect; offer-driven |
| **Ferret.com** | 11,000 | ~$120–165 | ~$3–5.6k display; **affiliate is the real driver** (EARN-NOW) | strong one-word .com | **earn-now** → then flip on a real profit multiple |
| **PetFood.com** | 5,000 | ~$55–75 | ~$1.3–2.5k display; affiliate (high-intent nutrition) likely ≫ display | strong exact-match | earn-now |
| **Horses.com** | 1,000 | ~$11–15 | ~$0.3–0.5k display | **premium one-word .com — likely $$$K–$$M floor regardless of traffic** | hold; **domain value ≫ content value** at current traffic |
| **Lizard.com** | 765 | <$11 (below Journey 1K) | negligible | solid one-word .com | hold; domain-led |
| **Saddle.com** | 214 | negligible | negligible | **premium exact-match — strong domain floor** | **domain value ≫ any near-term content value → lean SELL-DOMAIN or slow-groom** |
| **PetFoods.com** | 30 | $0 | $0 | weak (plural twin) | redirect → PetFood |
| **Vets.co** | ~0 (pre-DNS) | $0 today | **insurance affiliate = highest revenue/visitor once live** ($25–150/policy) | strong category .co | finish-to-earn; value is forward, not current |
| **AskTheVet / SeniorPetPharmacy / DogPicture** | ~0 | $0 | speculative | brandable | build-long / sell-domain (DogPicture) |

---

## §3 The load-bearing insight `[EST]`

**For the thin-but-premium domains (Horses, Lizard, Saddle), the domain name is worth far more than the content
will be for years.** At 200–1,000 visitors/mo, display+affiliate content value is a few hundred $/mo → low-five-
figure content-business value. But the *names* are premium one-word/exact-match .coms with five-to-seven-figure
floors (cf. Bird.com $200K, Snake.com $135K, Dog.com $500K).

**→ Strategic consequence:** building content on Horses/Lizard/Saddle to chase content-business value is
**value-destructive vs. effort** at current traffic — you'd spend build cost to add a few hundred $/mo onto an
asset whose value is already in the name. **Confirms the "pause builds" call** and pushes Saddle (214 visitors,
premium name) toward **sell-the-domain** unless traffic moves on its own.

Inverse for **Ferret + PetFood**: real traffic (11K/5K) with **no premium-domain ceiling issue** → content/affiliate
value is the play, and it's unrealized. That's why they're EARN-NOW.

And **Dog/Fish**: traffic is nice but the value is the **name + standing offers** — content math (~$10–18k / $2–3.5k
content-biz value) is rounding error against $2.3M/$1.45M. The content's job there is purely to **support the
acquirer narrative**, not to be the value.

## §4 What would sharpen this

- Real RPM + affiliate conversion once Ferret/PetFood monetize → replace `[EST]` revenue bands with actuals.
- Off-sandbox re-verification of comps (`valuation-comps.md §5`).
- Per-domain renewal cost (`csro-dir-003`) → net the carrying cost against domain-value for the hold-vs-sell call
  on the long tail.

*Decision-support model — update as real revenue lands.*
