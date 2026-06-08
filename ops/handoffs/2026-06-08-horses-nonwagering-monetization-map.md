---
from: horses-bot
to: monetization
status: review
created: 2026-06-08
in_reply_to: ops/handoffs/2026-06-08-horses-phase2-roadmap.md
next_action: "Monetization Bot: wire ONLY the safe revenue surfaces below via /go routes; confirm zero wagering/bookmaker affiliates anywhere on horses-com; coordinate Saddle.com tack cross-links via PR comment."
---

# Horses.com — Non-Wagering Monetization Map

**Scope:** PLANNING ONLY. Identifies SAFE revenue surfaces and maps existing + proposed clusters to them. Monetization Bot owns execution (`affiliate-routes.ts`, `/go/[vendor]/[sku]`, funnels) — Horses Bot does NOT touch those lanes.

**ABSOLUTE RULE (QC §1):** **NO wagering, betting, odds, handicapping, tipping, sportsbook, or bookmaker affiliate of any kind — anywhere on horses-com, ever.** Racing monetizes through education, gear, and cross-portfolio commerce ONLY. Any brief proposing a wagering affiliate is auto-rejected and escalated.

---

## 1. Safe revenue surfaces (the only allowed paths)

| Surface | What it is | Vendor/route pattern | Constraints |
|---|---|---|---|
| **Books & education** | Racing biographies, beginner guides, breed/discipline books, documentaries | Amazon Associates (`AFF_AMAZON_TAG=boltonpets20-20`) via `/go/[vendor]/[sku]` | Editorial framing; FTC disclosure above the buy surface (QC §3.2). |
| **Riding & horse-care gear** | Helmets, boots, grooming, first-aid, retraining gear, blankets, supplements (non-medicated) | Amazon + future equestrian programs; all via `/go` | No clinical/medicated buy-boxes (QC §1.5.b). Supplements only under §1.5.a exemptions. |
| **Saddle.com tack cross-links** | Saddles, bridles, bits, premium tack | Cross-portfolio internal link → Saddle.com (`<CrossPortfolioCard>` / `getCrossPortfolioRecommendations()`) | Cross-link, not duplicated commerce. Coordinate via PR comment so canonical/commerce ownership stays with Saddle.com. |
| **OTTB / adoption** | Off-track Thoroughbred retraining & adoption pathways | **Informational ONLY** | NO lead-gen, NO affiliate on rescue/adoption orgs. Gear *around* OTTB retraining may monetize; the adoption act does not. |
| **Ownership / bloodstock** | Buying, syndication, ownership economics | **FUTURE strategy only — not wired now** | Informational/educational today. Any future lead-gen requires CSRO + Carlo approval (it is high-value but adjacency-sensitive). |

---

## 2. Cluster → revenue-surface map

### Existing clusters (live on `main`)

| Cluster | Primary surface | Notes |
|---|---|---|
| race-types / triple-crown / breeders-cup | Books & education (Amazon) | Spectator/learner intent → guides & documentaries. Pure informational; no wagering. |
| racing-roles / the-people-of-racing | Books (biographies) | Low intent; authority-led. |
| harness / jump / quarter-horse / thoroughbred-flat racing | Books + light gear | Discipline-curious readers; cross-link to broad-equine disciplines. |
| off-track-thoroughbred-aftercare | **Gear + Saddle.com tack** | Best existing racing revenue surface. Retraining gear via `/go`; tack via cross-link. Adoption stays informational. |
| racehorse-training-and-conditioning | Gear + books | Conditioning gear (non-medical), training books. |
| history / first-derby | Books | Evergreen; low direct intent. |
| broad-equine: care / health / nutrition | Gear + supplements (non-medicated) | Health pages: NO clinical buy-boxes; supplements only per §1.5.a. |
| broad-equine: tack / equipment (disciplines) | **Saddle.com cross-links + Amazon gear** | Highest existing commercial intent. |
| broad-equine: ownership | Books today; bloodstock lead-gen = FUTURE only | See §1 ownership constraint. |

### Proposed Phase-2 clusters (from roadmap — wire only when built)

| Proposed cluster | Primary surface | Revenue strength |
|---|---|---|
| **Great Racehorses (P1)** | Books & documentaries; framed prints | Moderate volume, high brand-safety. |
| **Racing for Newcomers (P1)** | Beginner books; event-day gear (binoculars, apparel) | Top-of-funnel; converts later on OTTB/ownership. |
| **Retired Racehorse Second Careers (P2)** | **Gear + Saddle.com tack** | **Highest safe revenue cluster in racing.** |
| **Racetrack / Venue Guides (P2)** | Travel apparel, books, prints | Moderate; seasonal. |
| **Famous Trainers & Jockeys (P2)** | Books/biographies | Low. |
| **Racing Silks & Colors (P3)** | Visual/print merch | Low. |
| **The Claiming Game (P3)** | Editorial (minimal) | Authority, not revenue. |
| **International Racing (P3)** | Travel/apparel/books | Moderate seasonal; KEEP strictly non-wagering (Melbourne Cup adjacency). |
| **Thoroughbred Conformation & Gait (P3)** | Health-adjacent gear (non-medical) | Low. |

---

## 3. Monetization 5-field summary (CLAUDE.md §6)

- **SEO Impact:** Neutral-positive. Correct `/go` routing + FTC disclosure protects rankings (no leakage, no manual-action risk). Cross-linking to Saddle.com strengthens portfolio internal-link graph.
- **GEO Impact:** Positive. Brand-safe, non-wagering commerce keeps pages citable; AI surfaces won't suppress educational racing content as gambling-adjacent.
- **Monetization Impact:** Moderate but durable. OTTB/retraining + tack cross-links are the revenue core; books/education provide broad low-friction coverage; bloodstock is a high-value FUTURE option held in reserve.
- **Build Effort:** **S–M.** Mostly `/go` route wiring + `<CrossPortfolioCard>` placements (Monetization lane). No new affiliate programs required beyond Amazon + Saddle.com cross-links to start.
- **Priority:** **P2.** Wire OTTB/tack surfaces first (already-built cluster, real intent); proposed-cluster wiring follows each cluster's build.

---

## 4. Hard guardrails for Monetization Bot

1. **Zero wagering affiliates** — no sportsbook, no odds API, no handicapping tool, no tipping subscription. Full stop.
2. **No clinical/medicated buy-boxes** on horses-com health pages (QC §1.5.b).
3. **FTC disclosure above every monetized surface** (QC §3.2).
4. **Adoption/rescue stays informational** — no lead-gen or affiliate on adoption orgs.
5. **Bloodstock/ownership lead-gen is FUTURE** — needs CSRO + Carlo sign-off before any wiring.
6. **Saddle.com tack is a cross-link, not duplicated commerce** — coordinate via PR comment to keep canonical commerce on Saddle.com.
