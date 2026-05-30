# Horses.com — Racing Intelligence Strategy

> Operating thesis: Horses.com is not a horse website. It is a horse **racing
> intelligence company**. The website is the first interface. Build the
> Bloomberg of horse racing — the intelligence layer of the global racing
> industry.

This document is the founder-level plan for the racing-intelligence pivot. It
runs the mandated build phases (research → competitive analysis → business plan
→ monetization → SEO/GEO → architecture → data → MVP) and records decisions so
work can continue autonomously with minimal involvement from Carlo.

> **Note on the existing site.** Horses.com already ships ~30 vet-reviewed
> care/ownership pages (breeds, disciplines, health, reviews). Those are real
> SEO equity and affiliate revenue — we do **not** rip them out. The racing
> intelligence layer is added as the new flagship (`/racing`), the care content
> becomes a supporting authority/audience funnel, and racing takes the homepage
> hero and primary nav slot. Pivot by addition, not demolition.

---

## Phase 1 — Research (market map)

**Who serious racing fans open every day today** (the habit we must capture):

- **Form / data incumbents:** Racing Post (UK, dominant, paywalled Members'
  Club), Timeform (ratings/IP, owned by Flutter), Equibase (US official data,
  utilitarian), Daily Racing Form / DRF (US past performances, paid PPs),
  Brisnet (US speed/pace figs), At The Races & Sky Sports Racing (UK media),
  Punters.com.au & Racenet (AU), TwinSpires/TVG-FanDuel Racing & Xpressbet (US
  ADW wagering + content).
- **Adjacent models worth stealing from:** The Athletic (subscription sports
  media, voice + depth), Bloomberg Terminal (paid pro intelligence + alerts),
  PFF / Opta (proprietary grades as the moat), Pikkit / OddsJam (line-shopping &
  value/EV surfacing), Substack (creator newsletters), DraftKings/FanDuel
  (slick UX, affiliate funnels).

**Where incumbents are weak (our opening):**

1. **UX is dated and dense.** Equibase, DRF, even Racing Post free tier feel
   like 2010. Nobody has built a clean, fast, Athletic-grade racing product.
2. **Ratings are black boxes.** Timeform/speed figs don't *explain themselves*.
   Trust + AI-search citability both reward transparent, itemized reasoning.
3. **Hard paywalls block discovery.** Racing Post/DRF hide everything good
   behind login, leaving a huge free-tier / AI-answer gap to own.
4. **No "AI analyst" exists.** Plenty of raw data; almost no plain-English
   "here's who wins and *why*" at scale. This is our wedge.
5. **Fragmented by geography.** UK vs US vs AU silos. A unified global
   intelligence layer with one model and one UX is unclaimed.

## Phase 2 — Competitive positioning

| | Racing Post / DRF | Timeform / Brisnet | OddsJam-style | **Horses.com** |
|---|---|---|---|---|
| Core | Form + news, paywall | Ratings IP | Odds/EV | **Explainable AI ratings + value** |
| UX | Dated | Utilitarian | Modern | **Athletic/Bloomberg-grade** |
| Trust | Brand | Brand | Data | **Shows its work (every factor itemized)** |
| AI search | Blocked by paywall | Minimal | Minimal | **Built for GEO / AI citation** |
| Moat | Licensed data + brand | Proprietary figs | Odds feeds | **Proprietary ratings + outcome track record + audience** |

**Wedge:** the *explainable* Horses.com Intelligence Rating — a transparent
0–100 grade per runner that shows its factor breakdown, plus a value engine that
flags overlays vs the live market. Free tier feeds discovery + AI answers;
premium tier sells depth, alerts, and the daily brief.

## Phase 3 — Business plan (sequence)

- **Now (shipped this phase):** Race Center MVP on curated data to validate the
  product, model, and UX. Real, deterministic rating engine — not a stub.
- **0–3 mo:** Wire a live data feed (Phase-2 data below), cover daily UK + US
  cards, launch the Daily Racing Intelligence newsletter, start the
  outcome-tracking ledger (every pick logged → public ROI/strike-rate = the
  trust asset and the marketing engine).
- **3–9 mo:** Full horse / trainer / jockey / track databases (programmatic SEO
  at scale), premium membership, mobile-web alerts.
- **9–18 mo:** API / data-licensing product, syndication, enterprise feeds.

**KPIs (not page count):** DAU & D7/D30 return rate, newsletter subscribers,
paid conversion, model strike-rate/ROI, organic + AI-referral traffic.

## Phase 4 — Monetization (recurring first)

1. **Premium membership** (primary): full ratings/pace/sectional data,
   unlimited cards, alerts, model archive. Stripe is already scaffolded
   (`/api/checkout`, `/api/webhooks/stripe`).
2. **Daily Racing Intelligence newsletter** → sponsorship + free→paid funnel.
3. **Sportsbook/ADW affiliates** (TwinSpires, FanDuel Racing, etc.) on cards —
   reuse the existing `/go/[vendor]/[sku]` affiliate redirector. *Compliance:
   responsible-gambling messaging + clear disclosure on every page (shipped).*
4. **Data licensing / API** (later, highest-margin): the ratings become a
   product other apps/media pay for.

## Phase 5 — SEO & GEO strategy

- **Recurring-demand templates (programmatic, high value):** racecards, results,
  and horse/trainer/jockey/track profiles — each a durable, updatable URL that
  earns links and re-crawls. Avoid AI filler; every page carries proprietary
  ratings + structured reasoning.
- **GEO / AI-search:** the itemized "Why this rating?" blocks make our pages the
  most *citable* racing answers on the web. Add `SportsEvent` / structured data,
  keep a generous free tier visible to crawlers, publish the public model
  track-record (uniquely citable stat).
- **Authority hooks:** the existing care/ownership content cross-links into
  racing for topical breadth and a second audience funnel.

## Phase 6 — Site architecture

```
/racing                         Race Center hub (today's verdicts + meetings)   ✅ shipped
/racing/racecards/[id]          AI racecard: ranked field + factor breakdown     ✅ shipped
/racing/results/[date]          Results center                                   ▶ Phase 2
/racing/horses/[slug]           Horse profile + career form + rating history     ▶ Phase 2/3
/racing/trainers/[slug]         Trainer form (strike-rate, ROI, course/going)    ▶ Phase 3
/racing/jockeys/[slug]          Jockey form                                      ▶ Phase 3
/racing/tracks/[slug]           Track bias, draw stats, going records            ▶ Phase 3
```

## Phase 7 — Data architecture (3 phases, validate then scale)

- **Phase 1 — Free / curated (now):** hand-curated, realistically-structured
  seed cards (`src/data/racing/meetings.ts`) behind a provider-agnostic schema
  (`types.ts`). Proves the product with zero data cost.
- **Phase 2 — Low-cost commercial:** implement the `RacingDataSource` interface
  against an affordable feed (e.g. The Racing API / RapidAPI racing endpoints /
  Betfair for prices). Pages render live cards with **no component changes** —
  the seam is already built.
- **Phase 3 — Enterprise:** official feeds (Equibase, At The Races, Timeform
  licensing) for sectionals/pace + full historical depth to power databases and
  the licensing product. Never assume expensive data is needed before
  validation — the architecture lets us upgrade the source, not the app.

**Moat:** proprietary ratings + the timestamped outcome ledger (model
predictions vs results) compound into data no competitor can copy.

## Phase 8 — Design system

Trust, speed, clarity, intelligence, authority — Bloomberg/Athletic, not a
neon sportsbook. Reuse the shared `@carloOS/ui` kit (Nav, Footer, Breadcrumb,
EmailCapture, `buildMetadata`). Emerald = model/authority, amber = value/edge,
stone = neutral ground.

## Phase 9 — MVP (shipped in this branch)

- Provider-agnostic domain model: `src/data/racing/types.ts`
- **Explainable rating engine** (real, deterministic, value/EV vs market):
  `src/data/racing/analysis.ts`
- Curated seed cards (Churchill Downs + Ascot): `src/data/racing/meetings.ts`
- Race Center hub: `src/app/racing/page.tsx`
- AI racecard with per-runner factor breakdown: `src/app/racing/racecards/[id]/page.tsx`
- Homepage hero banner + nav promotion; sitemap coverage; responsible-gambling
  disclosure on every card.

## Phase 10 — Growth (next)

Live feed → daily newsletter → public model track-record → programmatic
databases → premium membership → mobile alerts → API/licensing. Optimize for
returning users, subscribers, and the proprietary outcome ledger — the assets
that make Horses.com a $10M+/$25M+ strategic acquisition, not just a website.

---

## Escalations for Carlo (per the escalation rule)

These are the only decisions outside autonomous scope:

- **Data spend:** choosing & paying for a live racing feed (Phase 2). Needs a
  budget call before wiring `RacingDataSource` to a paid provider.
- **Legal/compliance:** gambling-adjacent content varies by jurisdiction;
  affiliate relationships with sportsbooks/ADWs need sign-off. (Responsible-
  gambling + disclosure are already shipped as defaults.)
- **Brand pivot confirmation:** making racing the homepage hero is a strategic
  repositioning of the Horses.com brand — flagged here for explicit sign-off.
