---
from: COO
to: CSRO / IR / Monetization
status: ready
created: 2026-06-09
next_action: Activate Impact.com first (single account → ~13 insurance carriers across Vets+Dog); fix the Vets funnel-404 (it is a revenue blocker, not just UX).
lane: COO review of revenue architecture (account applications remain Monetization/Carlo per 2026-05-30 checklist)
---

# Revenue architecture review — Vets.co + Dog.com

Complements (does not duplicate) the Monetization account-application checklist
(`2026-05-30-affiliate-wiring-round-1-applications.md`). That doc covers *which
accounts Carlo applies for*. This covers **revenue density, activation ROI
order, and the code-level gaps that throttle revenue-per-visitor** — the parts
that determine how much each approved tag actually earns, and what acquirers
will scrutinize.

## 1. The architecture is built; revenue is gated on 3 activations, not code
Every commercial CTA portfolio-wide routes through `/go/[vendor]/[sku]`, which
swaps `PLACEHOLDER` → `process.env.AFF_<VENDOR>_TAG` at request time (verified:
0 affiliate leaks across 14 apps, full `/go` coverage). **Nothing in the code
blocks revenue.** Revenue switches on when these land (all Carlo/Monetization):
- **Impact.com** account + `AFF_*_TAG` env vars → unlocks the insurance carriers + Chewy
- **Amazon Associates** (`AFF_AMAZON_TAG` — boltonpets20-20 already wired) → product CTAs
- **Skimlinks** (publisher 303850X1791986, live on Dog.com layout) → catch-all outbound

## 2. Highest-ROI activation in the portfolio: Impact.com → Vets first
**Vets.co is the highest revenue-density asset in the portfolio.** It is
insurance-only, and **every Vets vendor is on the Impact network** (Trupanion,
Healthy Paws, Embrace, Lemonade, Pumpkin, ManyPets, Fetch, Spot, Pets Best,
Figo, MetLife, Wagmo) + ASPCA (direct). Pet-insurance affiliate payouts are
**$50–$100+ per converted policy** vs. Amazon's ~1–3% on a ~$30 product — a
20–50× revenue-per-conversion gap.

**Implication:** a *single* Impact.com approval lights up ~13 carriers across
**both** Vets (the whole site) **and** Dog's `/pet-insurance` funnel
simultaneously. This is the highest-leverage single action for portfolio
revenue. Sequence Impact.com **ahead of** breadth in the application list.

Revenue-density ranking of the launch candidates (commission × intent × LTV):
1. **Vets** — insurance-only, all-Impact, highest payout/conversion. Activate first.
2. **Dog** — Amazon volume + Impact insurance funnel + Chewy. Second.
3. **PetFood** — Amazon/Chewy product + insurance cross-link. Mid.
4. **Ferret / Lizard / Fish** — Amazon/Chewy niche product. Lower payout/conversion; long-tail.

## 3. Revenue-BLOCKING code gaps (elevated priority)
These already exist as routed handoffs, but their **revenue** impact is higher
than their UX framing — flagging for priority:

- **[P0 revenue] Vets funnel carrier-CTA 404** — `(funnels)/pet-insurance/breeds/[breed]/[state]/page.tsx:166,259` link `/pet-insurance/${slug}` (no route → 404). This is the **primary "recommended carrier" CTA on every breed×state funnel page** — the highest-intent insurance surface on the highest-revenue-density site. Even with Impact live, **these pages earn $0 until this is fixed.** (Monetization lane — routed; re-prioritize as revenue-blocking.)
- **[P1 revenue] Dog funnel hardcoded `dog.com` CTAs** — dead until DNS; one is the hero's primary CTA. (Monetization, routed.)
- **[P1 revenue] Ferret tools→`/ferret-starter-kit`** — the cost-calculator + readiness-quiz (highest commercial-intent surfaces) don't route to the monetized starter kit. Leaving conversion on the table. (Monetization, routed.)

## 4. Revenue-per-visitor opportunities (spec for Monetization; not blockers)
- **Result-matched CTAs**: Vets insurance estimator already does this well
  (neutral compare → live quote). Replicate the pattern on Dog calorie→food and
  age→insurance, and the Fish/Lizard calculators (currently some CTAs are static
  footers, not keyed to the computed result — e.g. Lizard UVB calc).
- **Insurance cross-link density**: Dog/Ferret/PetFood health pages correctly
  carry insurance internal links (no product CTAs — trust-correct). Ensure those
  links point at the highest-converting Vets surface (the estimator / carrier
  comparison), not just a generic hub.
- **Disclosure-above-monetized** is already clean portfolio-wide (verified) — no
  FTC risk to revenue surfaces.

## 5. Lane split (so this is actionable, not just analysis)
- **Carlo/Monetization:** apply Impact.com first; populate `AFF_*_TAG` env vars as approvals land (per the 2026-05-30 checklist).
- **Monetization (code):** fix the P0 Vets funnel-404 (revenue-blocking) + the routed P1s; add result-matched CTAs per §4.
- **COO (me):** the internal-routing pieces that point health/tool pages at the highest-converting insurance surface are COO-lane editorial linking — I can spec/execute those narrowly once the Vets funnel-404 lands (so I route to a working target).

## 6. Acquirer lens
A buyer evaluating Vets/Dog will value: (a) insurance-only Vets with a
13-carrier Impact-ready funnel = clean, high-margin, single-network revenue
story; (b) zero affiliate leakage + FTC-clean disclosures = low compliance risk;
(c) the activation being a *switch* (accounts + env vars), not a rebuild = fast
revenue ramp post-acquisition. The one blemish a technical buyer would find is
the funnel-404 — fixing it removes the only "is the funnel actually wired?"
doubt.

— COO
