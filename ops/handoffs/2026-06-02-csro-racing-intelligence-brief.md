---
from: CSRO
to: Carlo (decision), COO (execution-if-go), Monetization (revenue model review)
status: decision-requested
created: 2026-06-02
decision_ref: D12
next_action: Carlo go/no-go on the licensed-data product; CSRO/COO proceed on the $0 lightweight tier without further approval
spend_required: none for the recommended tier; the licensed-data tier requires recurring spend approval
---

# D12 — Horses.com "Racing Intelligence" data-product brief (analysis only, no build)

**Scope of this document:** decision analysis for whether to extend the shipped `/racing`
editorial MVP into a *data product*. No build, no vendor contact, no data access, no spend has
been initiated. This is the option-(b) brief Carlo requested before any go/no-go.

**What already exists (option-a, shipped):** `/racing` editorial hub + 6 spokes (flat,
harness, quarter-horse, race types/classes, OTTB aftercare, training/conditioning), no betting,
no odds, no fabricated stats, cited to Jockey Club / USTA / AQHA / TAA / AAEP / HISA.

---

## 1. Available data sources (US-centric, the relevant market)

| Source | Coverage | Access posture |
|---|---|---|
| **Equibase** | Official US Thoroughbred entries, results, charts, past performances. Owned by The Jockey Club + TRA. | **Proprietary, licensed, paid.** The canonical feed. Bulk/commercial use requires a data-licensing agreement. Aggressively enforced. |
| **Daily Racing Form (DRF)** | Past performances, Beyer figures, analysis. | **Proprietary, paid commercial product.** Beyer Speed Figures are trademarked/licensed. |
| **The Jockey Club / Equineline** | Registration, pedigree, ownership, sales. | **Proprietary, licensed.** |
| **USTA** | Standardbred (harness) racing + registry. | **Proprietary; member/licensed access.** |
| **AQHA** | Quarter Horse racing + registry. | **Proprietary; licensed.** |
| **HISA** | Federal safety/integrity rulings, some safety data. | **Partly public** (rulings, regulations); usable with attribution. |
| **Track operators / racing commissions** | Entries, results, stewards' rulings published per-track/per-state. | **Publicly published facts**; compilations may carry database protection. |
| **ADW platforms (TVG/FanDuel Racing, TwinSpires, AmWager)** | Live odds, wagering. | **Gambling data** — off-limits under our editorial/trust stance and state-by-state legal overlay. |
| **Free/community** (pedigreequery, Wikipedia, official Triple Crown/Breeders' Cup results, stakes calendars) | Pedigree basics, marquee results, schedules. | **Low-friction**; facts are usable with care; community data is unverified. |

**Takeaway:** every *authoritative, deep* feed (Equibase, DRF, USTA, Equineline) is proprietary
and paid. The free tier is shallow (marquee results, schedules, public rulings, basic pedigree).

## 2. Licensing / compliance friction

- **Database/compilation rights + TOS:** individual facts ("who won the 2025 Derby") are not
  copyrightable, but the *compiled databases* and presentations (Equibase charts, DRF PPs, Beyer
  figures) are protected and license-gated. Scraping them violates TOS and risks copyright/contract
  claims. This is the central friction.
- **Trademarks:** "Beyer Speed Figures," "Equibase," track/race names in commercial context need care.
- **Gambling overlay:** any odds/wagering/handicapping-for-bets feature triggers state-by-state
  gambling-affiliate law, age-gating, and responsible-gambling obligations — and directly conflicts
  with the trust-bar and Carlo's "no relationship-heavy / no gambling" posture. **Out of scope.**
- **Racing partnerships/syndication lead-gen** is **securities-adjacent** (fractional ownership =
  potential securities regulation). Do not build lead-gen into syndications without counsel.

## 3. Can the data be used commercially?

- **Yes**, for: public-domain *facts* (marquee results, stakes calendars, Triple Crown / Breeders'
  Cup history), public HISA rulings/regulations, and **original** editorial/data we compile ourselves
  (class-system explainers, OTTB aftercare directory, glossary, pedigree-basics education).
- **No**, for: republishing or building atop Equibase/DRF/USTA/Equineline feeds **without a paid
  license**. A commercially-safe deep product *must* be built on licensed data — which means
  recurring cost and a contract — or it isn't defensible.

## 4. Rough build size (T-shirt)

| Tier | What it is | Effort | Recurring cost |
|---|---|---|---|
| **A — Lightweight Racing Intelligence** (recommended) | Public/original-data tools + reference: Triple Crown & Breeders' Cup history hubs, stakes/graded-race calendar, race-class & conditions explainer, claiming-system explainer, OTTB aftercare *directory*, pedigree-basics, jockey/trainer/owner role guides, glossary. All `/racing` subdir. | **M** | **$0 data** |
| **B — Licensed programmatic product** | Daily entries/results/PPs across tracks, normalized DB, ingestion pipeline, daily refresh, structured data, search. | **XL** | **High & recurring** (data license + infra + maintenance) |
| **C — Pedigree/stallion database** | Searchable pedigree/produce records. | **L–XL** | License-gated for authoritative data |

## 5. Monetization paths (honest read)

- **The large racing revenue pool is wagering** — which we will not touch (trust-bar + legal).
- **Non-gambling racing monetization is thin:** equine product affiliate (tack, supplements — overlaps
  existing Saddle/Horses affiliate), books/courses, OTTB adoption (non-commercial), bloodstock/insurance
  lead-gen (regulated/securities-adjacent → counsel required).
- **Display ads** only post-Mediavine/Raptive threshold (gated by traffic).
- **Subscription/premium tools** are only credible on **licensed** data (Tier B) — i.e. you pay to play.

**Conclusion:** Tier A monetizes weakly on its own but **compounds horses.com's topical authority**
(SEO/GEO) and feeds existing equine affiliate surfaces. Tier B's only strong monetization is the one
we've ruled out (wagering).

## 6. Likely buyer / acquirer interest

- Racing data is a **mature niche with entrenched incumbents** (Equibase, DRF, NYRA Bets, FanDuel
  Racing, TVG). A standalone editorial racing brand has **modest** independent acquisition value.
- A licensed-data product would be **competing with the incumbents using their own licensed data** —
  low differentiation, high cost, low strategic exit upside.
- For the **horses.com** asset overall, racing adds welcome *topical breadth* (an equestrian authority
  should cover racing), but the **data-product specifically has low acquisition ROI** vs. its capex/risk
  relative to the rest of the portfolio. Acquirers buy horses.com for broad equestrian authority +
  traffic + brand, not a me-too racing data feed.

## 7. URL architecture

| Option | Verdict |
|---|---|
| **`/racing` (subdirectory)** | **Recommended.** Keeps link equity on horses.com, simplest, best authority transfer, fits Tier A. |
| `racing.horses.com` (subdomain) | Only if Tier B becomes a distinct app with separate stack/auth/infra. Splits some SEO equity. Not justified for editorial/lightweight. |
| Separate domain | Only if intended as an independently sellable asset — forfeits horses.com equity. Not recommended. |

## CarloOS 5-field scorecard

**Tier A — Lightweight Racing Intelligence (the recommendation):**
- **SEO Impact:** Medium-high. Marquee-event + class/claiming explainers + OTTB directory are
  evergreen, searchable, and complete horses.com's equestrian cluster. Freshness via annual
  Triple Crown / Breeders' Cup / stakes-calendar updates.
- **GEO Impact:** High. Class systems, claiming rules, race-type definitions, OTTB aftercare are
  exactly the structured, primary-source-citable explainers AI Overviews/Perplexity pull. Strong
  citation-magnet potential; no incumbent owns the *educational* layer well.
- **Monetization Impact:** Low-direct (equine affiliate spillover, future display), but high
  *authority/traffic* value that lifts the whole domain.
- **Build Effort:** **M** — `/racing` subdir, original + public-fact content + simple calendar/directory
  components reusing existing UI primitives. $0 data cost.
- **Priority Level:** **P2** (this month), pulled only when it doesn't displace the launch cohort's
  Visual/Monetization critical path.

**Tier B — Licensed programmatic product:**
- SEO: high *if* executed, but commodity. GEO: low (data feeds aren't citation magnets). Monetization:
  strong only via wagering (ruled out). Build: **XL** + recurring license cost. Priority: **P3 / hold.**

## Go / No-Go recommendation

- **GO — Tier A**, inside `/racing`, **at $0 data cost, no Carlo approval required** (no spend, no
  vendor, no data access). Build as a P2 content-system when it doesn't compete with the launch cohort.
- **NO-GO (hold) — Tier B/C licensed data product.** Revisit **only if all three** are true:
  (1) a licensed-data partnership is offered on clearly favorable terms, (2) Carlo approves the
  recurring spend, and (3) a non-gambling monetization model clears the trust-bar and the 5-field bar.
- **Architecture:** stay on the `/racing` **subdirectory**.

**Single decision for Carlo:** confirm "Tier A go / Tier B hold," or redirect. No spend is requested.
