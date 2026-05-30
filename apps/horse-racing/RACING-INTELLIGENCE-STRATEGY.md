# Horse Racing Intelligence — Strategy (standalone app)

> Operating thesis: build the **Bloomberg of horse racing** — an explainable,
> AI-driven racing intelligence product. Standalone from horses.com (which stays
> a horse care/ownership reference). Working name: **Horse Racing** (`apps/horse-racing`);
> real brand + domain TBD.

This is the founder-level plan, running the mandated phases (research →
competitive analysis → business → monetization → SEO/GEO → architecture → data →
MVP → growth).

## Phase 1 — Research (market map)

**Form/data incumbents:** Racing Post (UK, paywalled), Timeform (ratings IP,
Flutter-owned), Equibase (US official data, utilitarian), Daily Racing Form
(paid PPs), Brisnet (speed/pace figs), At The Races / Sky Sports Racing,
Punters.com.au & Racenet (AU), TwinSpires/TVG-FanDuel Racing & Xpressbet (ADW +
content), Horse Racing Nation (US community/data).

**Live-data providers (validated 2026):** The Racing API
(theracingapi.com — UK/IRE/AUS/USA cards, odds, 500k+ results, usage-tiered),
Goalserve, Podium; plus RapidAPI racing endpoints and free UK/IRE scrapers for
prototyping.

**Adjacent models to borrow from:** The Athletic (subscription depth), Bloomberg
Terminal (paid pro intelligence + alerts), PFF/Opta (proprietary grades as the
moat), OddsJam/Pikkit (value/EV surfacing), Substack (creator newsletters).

**Openings (where incumbents are weak):** dated/dense UX; black-box ratings that
don't explain themselves; hard paywalls that block discovery + AI answers; no
true "AI analyst" at scale; geographic fragmentation (UK vs US vs AU silos).

## Phase 2 — Positioning / wedge

The **explainable Intelligence Rating** — a transparent 0–100 grade per runner
that shows its factor breakdown — plus a **value engine** that flags overlays vs
the live market, in an Athletic/Bloomberg-grade UX, with a generous crawlable
free tier built for AI citation. Moat = proprietary ratings + a timestamped
outcome ledger (predictions vs results) that compounds into uncopyable data.

## Phase 3 — Business plan (sequence)

- **Now (shipped):** Race Center MVP on curated data validating product, model,
  and UX. Real, deterministic rating engine — not a stub.
- **0–3 mo:** Wire a live feed (Phase-2 data), cover daily UK + US cards, launch
  the Daily Racing Intelligence newsletter, start the public outcome ledger
  (logged picks → public ROI/strike-rate = trust asset + marketing engine).
- **3–9 mo:** Full horse/trainer/jockey/track databases (programmatic SEO),
  premium membership, mobile-web alerts.
- **9–18 mo:** API / data-licensing, syndication, enterprise feeds.

**KPIs:** DAU & D7/D30 return rate, subscribers, paid conversion, model
strike-rate/ROI, organic + AI-referral traffic.

## Phase 4 — Monetization (recurring first)

1. **Premium membership** (primary) — full ratings/pace/sectional data, alerts,
   model archive. (Stripe scaffolding can be ported from the shared apps.)
2. **Daily Racing Intelligence newsletter** → sponsorship + free→paid funnel.
3. **Sportsbook/ADW affiliates** on cards — with responsible-gambling messaging
   + disclosure on every page (compliance-gated).
4. **Data licensing / API** (later, highest-margin).

## Phase 5 — SEO & GEO

Recurring-demand programmatic templates (racecards, results, horse/trainer/
jockey/track profiles), each carrying proprietary ratings + structured
reasoning. The itemised "Why this rating?" blocks make pages the most *citable*
racing answers on the web. Add `SportsEvent` structured data; keep a generous
free tier visible to crawlers; publish the public model track-record.

## Phase 6 — Architecture (this app)

```
/                       Race Center hub (today's verdicts + meetings)   ✅ shipped
/racecards/[id]         AI racecard: ranked field + factor breakdown     ✅ shipped
/results/[date]         Results center                                   ▶ Phase 2
/horses/[slug]          Horse profile + career form + rating history     ▶ Phase 2/3
/trainers/[slug]        Trainer form (strike-rate, ROI, course/going)    ▶ Phase 3
/jockeys/[slug]         Jockey form                                      ▶ Phase 3
/tracks/[slug]          Track bias, draw stats, going records            ▶ Phase 3
```

## Phase 7 — Data (3 phases, validate then scale)

- **Phase 1 — Free/curated (now):** hand-curated, realistically-structured seed
  cards (`src/data/racing/meetings.ts`) behind a provider-agnostic schema
  (`types.ts`). Zero data cost.
- **Phase 2 — Low-cost commercial:** implement the `RacingDataSource` interface
  against an affordable feed (The Racing API / RapidAPI / Betfair for prices).
  Pages render live cards with **no component changes** — the seam is built.
- **Phase 3 — Enterprise:** official feeds (Equibase, At The Races, Timeform
  licensing) for sectionals/pace + historical depth to power databases and the
  licensing product.

## Phase 8 — Design system

Trust, speed, clarity, intelligence, authority. Reuses the shared `@carloOS/ui`
kit (Nav, Footer, Breadcrumb, EmailCapture, `buildMetadata`). Emerald =
model/authority, amber = value/edge. (Currently inherits a warm placeholder
palette; restyle to a Bloomberg/emerald aesthetic is a fast follow.)

## Phase 9 — MVP (shipped in this app)

- Provider-agnostic domain model: `src/data/racing/types.ts`
- Explainable rating engine (deterministic, value/EV vs market):
  `src/data/racing/analysis.ts`
- Curated seed cards (Churchill Downs + Ascot): `src/data/racing/meetings.ts`
- Race Center hub: `src/app/page.tsx`
- AI racecard with per-runner factor breakdown: `src/app/racecards/[id]/page.tsx`
- Sitemap + robots; responsible-gambling disclosure on every card.

## Phase 10 — Growth (next)

Live feed → daily newsletter → public model track-record → programmatic
databases → premium membership → mobile alerts → API/licensing.

---

## Escalations for Carlo

- **Domain + brand name:** working name is "Horse Racing" / `apps/horse-racing`;
  pick the real domain so canonical/OG URLs (config `siteUrl`, currently a
  placeholder) and the Vercel project can be finalised.
- **Vercel project:** this app needs its own Vercel project (Root Directory
  `apps/horse-racing`, `NEXT_PUBLIC_SITE_ID=horse-racing`).
- **Data spend:** choosing/paying for a live racing feed (Phase 2).
- **Legal/compliance:** sportsbook/ADW affiliate sign-off; gambling-content
  jurisdiction review (responsible-gambling + disclosure shipped as defaults).
