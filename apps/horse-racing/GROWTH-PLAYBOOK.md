# Horse Racing Intelligence — Free & Cheap Traffic Playbook

**Goal:** get to first 10k monthly visitors without paid ads, then compound.
**Constraint:** minimal founder time; automation-first.

This is the acquisition plan. It's ordered by **effort-to-payoff** — do the top
items first. Most cost $0; a few cost <$50/mo.

---

## The core idea

We don't compete with Racing Post on brand or DRF on data depth. We win the
surfaces they've abandoned:

1. **AI search (GEO)** — they paywall their best content, so LLMs can't cite it.
   Ours is free, structured, and sourced → we become the citation.
2. **Long-tail SEO** — "what is going in horse racing", "how to read a racecard",
   "[horse] form" — thousands of low-competition, recurring queries.
3. **Communities** — racing Reddit/Discord/forums reward genuinely useful,
   non-spammy tools and explainers.

---

## Channel 1 — Programmatic + long-tail SEO (highest ceiling, $0)

**Already built:** glossary, horse/trainer/jockey/track databases, racecards —
each a durable, indexable URL. As the live feed scales (Phase 2), these go from
~30 pages to thousands automatically.

**Do next:**
- [ ] Submit `sitemap.xml` to Google Search Console + Bing Webmaster Tools
      (free; this is the single most important launch-day task).
- [ ] Target **question keywords** the incumbents ignore. Each glossary term
      already maps to a "what is X" query. Expand to "how to" guides:
      *how to read a racecard, how to bet each-way, what is value betting,
      how horse racing odds work, decimal vs fractional odds*.
- [ ] Build **"[race] tips & analysis" pages** for marquee events months ahead
      (Kentucky Derby, Grand National, Royal Ascot, Breeders' Cup, Melbourne
      Cup). These have enormous, predictable seasonal search spikes — publish
      early so they're indexed and aged before the spike.
- [ ] Internal linking is already dense (every profile cross-links). Keep it.

**Why it works:** low domain authority can still rank for long-tail + fresh
daily content. Racecards update daily = constant re-crawl signal.

## Channel 2 — GEO / AI search (highest leverage, $0)

AI search is ~12–18% of informational queries and rewards exactly what we do.

- [ ] Keep all ratings **free and crawlable** — never gate the explanation.
- [ ] `SportsEvent`, `FAQPage`, `DefinedTerm` schema already shipped. Add
      `Dataset` schema to the track-record page once ROI is live (uniquely
      citable stat).
- [ ] Publish **original data** nobody else has: the public model track record,
      "value of the day", strike-rate tables. LLMs and journalists cite
      original data, not opinions.
- [ ] Make sure `robots.txt` allows `GPTBot`, `PerplexityBot`, `ClaudeBot`,
      `Google-Extended` (currently `allow: /` — good; keep AI bots allowed).
- [ ] Keep content **fresh-dated** (Perplexity weights recency) — daily cards
      handle this automatically.

## Channel 3 — Newsletter / owned audience (compounding, ~$0)

The newsletter is the flywheel: free→paid funnel + a channel we own (no
algorithm risk).

- [ ] Ship the **Daily Racing Intelligence brief**: top 3 rated runners + the
      value play of the day, auto-generated from the model. EmailCapture is
      already wired; flip `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true` once an ESP
      (Mailchimp/Resend/Beehiiv free tier) is connected.
- [ ] Lead magnet: "The 5-Factor Racecard Checklist" (a one-pager of the
      methodology). Gate it behind email.
- [ ] Auto-generation keeps founder time ~zero; review-and-send is 5 min/day.

## Channel 4 — Communities & content seeding ($0, some time)

Racing fans gather in findable places. Be useful, not spammy.

- [ ] **Reddit:** r/horseracing, r/horseracingtips, r/sportsbook. Share genuine
      analysis (the *reasoning*, not just a link). Link only when it adds value.
- [ ] **Discord/forums:** racing Discords, At The Races / Timeform forums.
- [ ] **X/Twitter racing community:** post the daily AI verdict + value play as
      a card image (auto-generated via the existing `/api/og` pattern). Tag
      results the next day → builds the public track record in public.
- [ ] **Quora/StackExchange-style:** answer "how do I read X" questions with the
      glossary as a reference.

**Rule:** every post must stand alone as useful even if nobody clicks. That's
what keeps you un-banned and builds reputation.

## Channel 5 — Programmatic social proof ($0, automated)

- [ ] Daily auto-posted "AI verdict" card (OG-image generator) to X + Reddit.
- [ ] Next-day "how did we do" results post → transparency = shareable.
- [ ] Weekly strike-rate/ROI recap once results are live → the kind of
      original-data post that gets reshared and cited.

## Channel 6 — Strategic partnerships (cheap, higher effort)

- [ ] **Affiliate cross-promotion** with non-competing racing content (podcasts,
      smaller tipster newsletters) — swap mentions.
- [ ] **Embeddable widget:** a free "AI rating" widget other racing blogs can
      embed → backlinks + brand reach (build after the feed is live).

---

## Launch-day checklist (when the Vercel project + domain exist)

1. [ ] Point domain, deploy, confirm `sitemap.xml` + `robots.txt` resolve.
2. [ ] Google Search Console + Bing Webmaster Tools: verify + submit sitemap.
3. [ ] Set up GA4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) — free analytics.
4. [ ] Connect an ESP + enable EmailCapture.
5. [ ] Seed 3–5 communities with a genuinely useful post.
6. [ ] Schedule the first daily auto-post.
7. [ ] Publish 2–3 evergreen "how to" guides for immediate long-tail capture.

## What I (the build agent) can keep doing autonomously

- Expand the glossary and "how to" guide library (each = more indexed pages).
- Build the marquee-event analysis page template.
- Build the OG-image / auto-post generator.
- Wire the `RacingDataSource` to a live feed the moment a key is provided.
- Generate the daily-brief content pipeline.

## What needs Carlo (can't be done by the agent)

- Pick the domain + create the Vercel project.
- Approve/connect a data-feed API key (budget).
- Connect an ESP account (Mailchimp/Resend/Beehiiv).
- Create the social accounts (X, Reddit) the auto-poster will use.
- Any affiliate/gambling-compliance sign-off.
