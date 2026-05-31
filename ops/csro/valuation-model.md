# CSRO Per-Domain Valuation Model

**Owner:** CSRO Bot · **Created:** 2026-05-30
**Inputs:** live traffic (Carlo, 2026-05-30) + comps (`valuation-comps.md`, `[RESEARCH]` sandbox-unverified).
**Purpose:** put dollar ranges on each in-scope domain so sell-vs-build decisions are quantified, not vibes.

> ⚠️ All figures are **planning estimates**, not appraisals. They rest on `[RESEARCH]` comps not yet
> page-verified, and on *assumed* revenue (sites aren't monetized/live yet). Treat as decision-support ranges,
> label `[EST]`. Re-run when real RPM/affiliate revenue data exists.
>
> ⚠️ **Domain "floor"/comp values in this file are NOTIONAL, not realizable** — the aftermarket is illiquid
> (Carlo's domains sat ~20 years unsold). Do not treat any domain "floor" as cash. Value is realized only by
> building traffic to manufacture a strategic buyer. See §3 (corrected).

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
| **Horses.com** | 1,000 | ~$11–15 | growth target | premium name (notional til a buyer exists) | **BUILD → strategic (Equine Network); racing angle** |
| **Lizard.com** | 765 | <$11 (below Journey 1K) | growth target | solid one-word .com | **BUILD toward traffic; name helps at exit** |
| **Saddle.com** | 214 | negligible | growth target | premium exact-match (illiquid raw) | **BUILD → known strategic (Equine Network)** — NOT sell-raw |
| **PetFoods.com** | 30 | $0 | $0 | weak (plural twin) | redirect → PetFood |
| **Vets.co** | ~0 (pre-DNS) | $0 today | **insurance affiliate = highest revenue/visitor once live** ($25–150/policy) | strong category .co | finish-to-earn; value is forward, not current |
| **AskTheVet / SeniorPetPharmacy / DogPicture** | ~0 | $0 | speculative | brandable | build-long / sell-domain (DogPicture) |

---

## §3 The load-bearing insight — CORRECTED (Carlo, 2026-05-30)

> **My earlier §3 was wrong and is retracted.** I claimed building content on premium-but-thin domains is
> "value-destructive vs. effort" because the name already holds the value. **Carlo corrected this, and he's
> right:** the domain aftermarket is **illiquid**. These domains have sat for ~20 years without selling. A
> premium-domain "floor" is **notional, not realizable** — there is no liquid bid. **Traffic + content is the
> mechanism that manufactures a buyer** for an otherwise-unsellable asset. So content is not a drag on name value;
> **content is the liquidity event.**

**Corrected model:**

- **Domain "floor" values are NOT realizable assets** — they are notional comps with no liquid market. Discount
  them heavily for illiquidity. A $200K "comp" you can't transact is worth $0 until a buyer appears.
- **The path to value = generate traffic → become attractive to a strategic acquirer → manufacture the sale.**
  This is true *especially* for the premium names, not despite them. The name raises the ceiling **once a buyer
  exists**; traffic is what summons the buyer.
- **Build-vs-sell is therefore not a tradeoff — building IS the sell strategy** for an illiquid portfolio. The
  only domains to *not* build are true dead-weight (off-thesis, no acquirer, no traffic path).

**Strategic-buyer reality (Carlo, 2026-05-30):** acquirers are often **known strategics**, not anonymous flippers.
Example: **Equine Network** would plausibly want **horses.com, saddle.com** and the broader horse cluster. Building
those into credible content/traffic assets is how you make them *want* it and start the conversation. → strategic-
acquirers map: `ops/csro/strategic-acquirers.md`.

**Consequences (reversing my prior calls):**
- **Saddle.com: NOT sell-the-domain-raw. BUILD it** — it's a lead asset for a *named* strategic (Equine Network).
  Traffic makes it sellable; raw it's been unsold for years.
- **Horses.com: BUILD** (not "domain value ≫ content"). Same strategic logic + the racing angle.
- **Lizard.com: BUILD** toward traffic; the name helps at exit but doesn't substitute for demand.
- The earlier "pause builds on Horses/Lizard/Saddle" was based on the wrong premise. Re-sequenced: these are
  **build targets aimed at strategic buyers**, prioritized by (a) traffic-growth potential and (b) whether a named
  acquirer exists. Still behind the EARN-NOW sites (Ferret/PetFood) on *immediate cash*, but they are NOT "sell raw."

Unchanged: **Ferret + PetFood** = EARN-NOW (real traffic, monetize first). **Dog/Fish** = protect-asset; their
content's job is to support the acquirer narrative + keep the audience that makes the offers real.

## §4 What would sharpen this

- Real RPM + affiliate conversion once Ferret/PetFood monetize → replace `[EST]` revenue bands with actuals.
- Off-sandbox re-verification of comps (`valuation-comps.md §5`).
- Per-domain renewal cost (`csro-dir-003`) → net the carrying cost against domain-value for the hold-vs-sell call
  on the long tail.

*Decision-support model — update as real revenue lands.*
