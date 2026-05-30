# Horse Racing Intelligence — Research Report & Build Status

**Prepared for:** Carlo · **Date:** 2026-05-30
**Branch:** `claude/horses-racing-intelligence-Spt0A` · **PR:** #178
**App:** `apps/horse-racing` (standalone; horses.com untouched)

---

## TL;DR

I researched the horse-racing intelligence market and **built a working MVP** of
a standalone product separate from horses.com. The wedge is an **explainable AI
rating** + a **value engine**, wrapped in a clean, fast, citable product — aimed
at the gap every incumbent leaves open (dated UX, black-box ratings, hard
paywalls that block AI search).

The market is **mature but contracting** (US handle ~$11B, down ~57% in real
terms since 2003) — which is *good* for a disruptor: incumbents are complacent,
the audience is high-value and habitual, and nobody has built an Athletic/
Bloomberg-grade product. **The opportunity isn't to grow betting; it's to own
the intelligence layer** that serious fans open every day.

**Two decisions block the next phase:** (1) a domain/brand name, and (2) a small
data-feed budget. Details in *Decisions Needed*.

---

## 1. Market research

### Size & shape
- **US handle ~$11.03B in 2025**, down 2.1% YoY and ~57% in real terms since the
  2003 peak — a *contracting* legacy market. ([TDN](https://www.thoroughbreddailynews.com/handle-purses-both-fall-in-2025/), [Past The Wire](https://pastthewire.com/the-great-contraction-a-macro-analysis-of-u-s-horse-racing/))
- **~63% of wagers are now online/ADW**, ~37% on-track — the audience has
  already moved to screens. ([market data](https://www.businessresearchinsights.com/market-reports/horse-racing-market-105129))
- **Computer-assisted wagering (CAW) is ~30%+ of handle ($3–4B/yr)** and
  resented by everyday bettors — a trust vacuum a fan-first brand can fill.
  ([Kentucky Lantern](https://kentuckylantern.com/2025/10/30/tracks-win-fans-lose-algorithm-driven-wagering-on-horse-racing-heads-for-a-reckoning/))
- Global racing market valued in the **$120–127B** range with mid-single-digit
  CAGR — most growth is international + online. ([Yahoo/Research&Markets](https://finance.yahoo.com/news/growth-trends-127-billion-horse-113200734.html))

### Who the serious fan opens today (the habit to capture)
| Player | What it is | Weakness we exploit |
|---|---|---|
| **Racing Post** (UK) | Dominant form/news; Racing Post+ / Members' Club | Hard paywall (£34.95/mo Ultimate); dated free tier; blocks AI discovery ([pricing](https://help.racingpost.com/hc/en-us/articles/360006397997-Members-Club-Ultimate-17-for-your-first-month)) |
| **Timeform** | Ratings IP (Flutter-owned) | Black-box figures; doesn't explain itself |
| **Equibase** (US) | Official US data | Utilitarian, 2010-era UX |
| **Daily Racing Form** | Paid past performances | Expensive PPs; paywalled |
| **Brisnet** | Speed/pace figures | Niche, technical, dated |
| **TwinSpires / FanDuel Racing / DK Horse / 1/ST BET** | ADW wagering + some content | Content is a funnel to the book, not independent intelligence |
| **Horse Racing Nation** | US community/data | Community-led, not a rating product |

### The five openings (where to win)
1. **UX** — nobody has built a clean, fast, *Athletic-grade* racing product.
2. **Explainability** — ratings are black boxes; transparency builds trust *and*
   AI-citability.
3. **Paywall gap** — incumbents hide everything good behind login, ceding the
   free-tier + AI-answer surface entirely.
4. **No "AI analyst"** — plenty of raw data, almost no plain-English "who wins
   and *why*" at scale.
5. **Geographic fragmentation** — UK vs US vs AU silos; one unified model + UX is
   unclaimed.

---

## 2. Competitive positioning / the wedge

**The explainable Intelligence Rating** — a transparent 0–100 grade per runner
that *shows its factor breakdown* — plus a **value engine** flagging overlays vs
the live market, in a trust-first UX, with a **generous crawlable free tier
built for AI citation**.

- Trust beats incumbents' brand-only authority because we *show our work*.
- The free tier wins the discovery + AI-answer surface they've abandoned.
- The **moat compounds**: proprietary ratings + a timestamped outcome ledger
  (predictions vs results) = data no competitor can copy.

---

## 3. Data strategy (validate, then scale)

| Phase | Source | Cost | Status |
|---|---|---|---|
| **1 — Free/curated** | Hand-built seed cards behind a provider-agnostic schema | $0 | ✅ shipped |
| **2 — Low-cost commercial** | **The Racing API** (UK/IRE/AUS/USA cards, 20+ bookmaker odds, 500k+ results, usage-tiered) or RapidAPI racing / Betfair for prices | ~low monthly, usage-scaled | ▶ needs budget sign-off |
| **3 — Enterprise** | Equibase / At The Races / Timeform licensing for sectionals/pace + deep history | $$$ | later |

The MVP already defines a `RacingDataSource` interface — **swapping to a live
feed requires zero page/component changes.** We upgrade the source, not the app.
([The Racing API](https://www.theracingapi.com/), [Racing Index review](https://www.racing-index.com/horseracing/theracingapi/))

> **Note:** The Racing API's public site blocked automated fetch (403), so exact
> tier prices need a manual check on their [RapidAPI pricing page](https://rapidapi.com/theracingapi/api/the-racing-api1/pricing).
> It's positioned as hobbyist-accessible at the low tier — validate before scaling.

---

## 4. Monetization (recurring first)

1. **Premium membership** (primary) — full ratings/pace data, alerts, model
   archive. Athletic/Bloomberg model; Stripe scaffolding exists in the portfolio.
2. **Daily Racing Intelligence newsletter** → sponsorship + free→paid funnel.
3. **Sportsbook/ADW affiliates** — TwinSpires, FanDuel Racing, DK Horse all run
   CPA/RevShare/hybrid programs. ⚠️ **Compliance gate:** US affiliate licensing
   is real (e.g. vendor minor license ~$350; revenue-share major license ~$1,200
   + background-check deposit), varies by state. Responsible-gambling messaging +
   disclosure already shipped as defaults. ([BettingUSA](https://www.bettingusa.com/affiliate/), [StatsDrone](https://statsdrone.com/best-affiliate-programs/sports-betting/))
4. **Data licensing / API** (later, highest-margin) — the ratings become a
   product other apps/media pay for.

Recurring > one-time, always.

---

## 5. SEO / GEO (built for AI search)

AI search now handles an estimated **12–18% of informational queries**; sites
with rich structured data appear in **~47% more Perplexity responses**. Our
design leans into this directly:

- **Itemised "Why this rating?"** blocks = the most *citable* racing answers on
  the web (LLMs lift structured, sourced explanations verbatim).
- **`SportsEvent` + `FAQPage` JSON-LD** shipped on racecards/methodology.
- **Recency wins** (Perplexity weights freshness) — racecards update daily.
- **Public model track record** = a unique, citable statistic nobody else
  publishes. ([Enrich Labs GEO guide](https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026), [BizAI](https://bizaigpt.com/blog/generative-engine-optimization-guide))

---

## 6. What's built (working MVP in `apps/horse-racing`)

- **Provider-agnostic domain model** — `src/data/racing/types.ts` (+ live-feed seam).
- **Explainable rating engine** — `src/data/racing/analysis.ts`: deterministic
  0–100 scores → softmax win probabilities → fair odds → value/EV edge vs market.
- **Curated seed cards** (Churchill Downs + Ascot) — `src/data/racing/meetings.ts`.
- **Race Center** (`/`) — daily AI verdicts + meetings.
- **AI racecard** (`/racecards/[id]`) — ranked field, per-runner factor
  breakdowns, `SportsEvent` schema, responsible-gambling disclosure.
- **Methodology** (`/methodology`) — full transparency + FAQ schema.
- **Track Record** (`/track-record`) — public predictions ledger (auto-scores in
  Phase 2).
- Shared `@carloOS/ui` chrome, emerald/amber theme, sitemap + robots.

**horses.com is completely untouched** (verified: zero diff vs branch base). The
only shared change is additively registering the `horse-racing` site in config.

---

## 7. Decisions needed from Carlo

1. **Domain + brand name** *(blocks launch)* — working name is "Horse Racing";
   config `siteUrl` is a `horseracing.com` placeholder. Pick the real domain and
   I'll finalize canonical/OG URLs + branding.
2. **Vercel project** *(blocks deploy/CI)* — the app needs its own project:
   Root Directory `apps/horse-racing`, `NEXT_PUBLIC_SITE_ID=horse-racing`. Until
   then it isn't built by CI and isn't deployment-verified.
3. **Data-feed budget** *(blocks Phase 2)* — approve a small monthly spend for
   The Racing API (or similar) to go from curated to live daily UK + US cards.
4. **Affiliate/compliance posture** *(blocks monetization)* — decide whether to
   pursue sportsbook/ADW affiliates now (licensing + state rules) or stay
   content-only until the audience is built.

## 8. Recommended next steps (once unblocked)

1. Create the Vercel project → get a live preview URL.
2. Wire The Racing API behind `RacingDataSource` → live daily cards + results.
3. Turn on the **outcome ledger** so the track record starts compounding ROI.
4. Launch the **Daily Racing Intelligence newsletter** (free→paid funnel).
5. Backfill **horse / trainer / jockey / track** profile templates
   (programmatic SEO at scale).

---

*Sources are linked inline. Market figures are 2025–2026 estimates from
industry/trade publications and should be re-validated before any spend.*
