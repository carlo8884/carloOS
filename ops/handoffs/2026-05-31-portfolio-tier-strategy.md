# Portfolio Tier Strategy — Build vs Sell vs Park

**Author:** Monetization Bot
**Date:** 2026-05-31
**To:** COO Bot, Visual Bot, Carlo
**Replaces:** ad-hoc per-site engineering. Every bot's work should now route through this tiering.

---

## The Strategic Pivot

Carlo's clarified goal (2026-05-31):
- **$100M business, fast** — not $1B in 5 years
- **Build-to-sell** is the actual portfolio model — build sites to ~$2-10K MRR, list on Empire Flippers / FE International, exit at 25-45x monthly revenue
- **Sequence:** Affiliate revenue (now) → fund mega-brand build (months 6-18) → strategic exit on Tier 1 (year 3-5)
- **AI-only execution.** No human engineers. Multi-AI orchestration (Claude bots + external Perplexity/OpenAI for research).

This doc replaces "every site is a startup" with **three tiers, three different strategies, three different bot priorities.**

---

## Tier 1 — Mega-Brands (HOLD + INVEST)

**Sites:** dog.com, vets.co, ferret.com

| Site | Why Tier 1 | Current MRR | 12-month target |
|---|---|---|---|
| dog.com | 36K/mo traffic, flagship, highest editorial depth | $0 (until tag activates) | $5-15K |
| vets.co | INSURANCE ONLY per policy §5, B-tier EPC, 3,020-page programmatic matrix shipped | $0 | $3-10K (insurance leads) |
| ferret.com | 11K/mo hidden gem, ZERO competition in exotic-pet niche, just monetized in D-009 | $0 | $1-4K |

**Goal:** These three become the editorial + AI-citation authorities. **Not sold.** Used to fund / be the platform for the eventual $100M pivot.

**Bot priorities:**
- **Monetization Bot (me):** drive MRR via affiliate optimization, insurance routing, lead magnets. Track conversion rate per page weekly.
- **COO Bot:** focus all editorial polish + design system + DVM bylines here. Mega-brand visual identity.
- **Visual Bot:** professional photography investment. Each Tier 1 site gets the polished magazine treatment.

---

## Tier 2 — Build-to-Sell (BUILD with EXIT IN MIND)

**Sites:** fish.com, horses.com, petfood.com, saddle.com, lizard.com

(Plus consolidation candidates: petfoods.com → petfood.com, ferrets.com → ferret.com — 301 redirect both.)

| Site | Current MRR | Sellable target | Est. sale price (25x MRR) |
|---|---|---|---|
| fish.com | $0 | $3-5K | $75K-$200K |
| petfood.com | $0 | $2-4K | $50K-$160K |
| horses.com | $0 | $1-3K (or pivoted to horse-racing affiliate if that bot's research approves) | $25K-$120K |
| saddle.com | $0 | $1-3K (high AOV compensates for low traffic) | $25K-$120K |
| lizard.com | $0 | $500-$1.5K | $12K-$60K |

**Aggregate Tier 2 exit value at maturity: $185K-$660K.**

**Bot priorities — DIFFERENT from Tier 1:**
- **Build for portability, not depth.** New owner should be able to operate these sites without inheriting the entire CarloOS bot fleet.
- **Standardized templates over custom design.** Visual Bot: stop the bespoke design work on Tier 2; deploy the shared Tier 1 design system as-is.
- **Diversified revenue sources** — buyers discount Amazon-only sites. Add direct affiliate networks, AdSense, sponsorships per site.
- **Documented operations** — every site needs a `ops/site-runbook.md` listing exactly what monthly maintenance the new owner inherits. Without this, sale price drops 30-50%.
- **12 months of revenue history** before listing. Activate Amazon tag NOW; sellable date is 12 months from activation.

**Bot priorities specifically:**
- **Monetization Bot:** ensure each Tier 2 site has Amazon + Chewy + 1 niche affiliate live. Build the operations doc.
- **COO Bot:** apply Tier 1 design system, no custom bespoke work. Editorial volume over polish.
- **Visual Bot:** stock photography is fine for Tier 2. Save the custom photography for Tier 1.

---

## Tier 3 — Park, Liquidate, or Park-with-Ads

**~54 unbuilt premium .com domains** (cats.com, parrots.com, lizardpets.com, etc.)

**Strategy options per domain:**

1. **Park with Sedo/Afternic** — listing fee zero, sells on offer. Average premium pet .com sells for $5K-$50K. Aggregate: $150K-$1.5M cash.
2. **301-redirect to Tier 1/2 sister** — captures residual type-in traffic. Free.
3. **Park with monetized landing page** (Sedo Park, Bodis) — $5-50/mo passive ads per domain. Aggregate: $250-2K/mo for ~50 domains. Marginal but free.

**Bot priorities:**
- **Monetization Bot:** create a single registrar export of all 54 domains + recommend liquidate / redirect / park-with-ads decision per domain. Carlo reviews and pulls trigger.
- **COO + Visual Bot:** NO WORK on Tier 3. Period.

**Liquidation candidate first cut (priority sell):**
- ferret*s*.com (duplicate of ferret.com)
- petfoods.com (duplicate of petfood.com)
- petfoods*-com (duplicate again)
- dogpicture.com (thin commercial intent)
- askthevet.com (UGC model — not AI-friendly)
- hardmoneyloans.com (out of pet vertical entirely)
- seniorpets.com (overlap with dog.com / cats.com editorial)
- petsupplies.com (generic, dominated by mass retailers)

Estimated liquidation value of these 8: **$50K-$300K cash.**

---

## What Each Bot Stops Doing TODAY

| Bot | STOP |
|---|---|
| Monetization (me) | Drafting more affiliate-network application docs. Building buy-boxes on Tier 3 sites. Writing handoffs nobody reads. |
| COO | Editorial polish on saddle/lizard/horses until traffic justifies. Custom design per site. |
| Visual | Custom photography on Tier 2/3 sites. Image manifest queue should be Tier 1-only. |

---

## Coordination Protocol Going Forward

1. **Every PR must declare its tier** in the description. Reviewer (Carlo) sees the tier and applies the right effort budget.
2. **No bot opens a PR on a Tier 3 site without explicit Carlo approval.**
3. **Tier 1 PRs get the "polish" pass.** Tier 2 PRs ship clean and move on.
4. **Weekly cross-bot sync via handoff docs** — Monday morning, each bot drops a 3-bullet update in `ops/handoffs/weekly-<date>.md`. Carlo reads one doc, not three.

---

## Sequencing the $100M Path

**Months 1-3:**
- All Tier 2 sites earning $500+ MRR (activate Amazon, Chewy, niche affiliates)
- Tier 1 GEO audit complete (AI-citation moat)
- Tier 3 first-cut liquidation list to Carlo (cash for re-investment)

**Months 4-9:**
- Tier 1 sites hit $3-5K MRR each (~$15K combined)
- Tier 2 sites hit $1-2K MRR each (sellable in ~12 more months)
- Begin DVM expert reviewer program (3-5 vets at $200/mo = $600-1K/mo)
- Newsletter list grows past 10K subscribers across Tier 1

**Months 10-18:**
- List first Tier 2 site on Empire Flippers ($100K-$200K exit)
- Tier 1 sites become acquisition targets ($1M+ each at this point)
- Pivot platform: Tier 1 sites form basis of "Vets.co AI" or pet insurance MGA
- Cash from Tier 2 sales + Tier 3 liquidation funds the pivot

**Months 19-36:**
- $100M valuation requires ONE of:
  - Vets.co MGA scale ($10M+ ARR × 10x multiple)
  - AI vertical assistant ($5M+ ARR × 20x multiple)
  - Strategic acquirer pays for the brand portfolio + AI assistant (NYT/Dotdash/Chewy)

**Probability of $100M outcome (revised post-clarification):**
- Original (10-site affiliate aggregator): 8%
- New (3 mega-brands + sell Tier 2 + pivot to MGA or AI): **30-40%**

---

## Open Questions for Carlo

1. **Confirm Tier assignments above.** Specifically: is horses.com Tier 1 (if racing-affiliate pivot looks strong) or Tier 2?
2. **Which Tier 3 domains can liquidate today?** I'll write the Sedo/Afternic listing copy if you say yes.
3. **DVM reviewer budget approval** — $500-1K/mo for 3 paid reviewers across Tier 1 sites?
4. **Pet insurance MGA exploration** — should I research the multi-state licensing path for Vets.co as a parallel track?
