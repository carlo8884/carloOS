# 90-Day Monetization Plan

**Companion to [`MONETIZATION-PLAYBOOK.md`](./MONETIZATION-PLAYBOOK.md).**
**Time horizon: 2026-05-28 → 2026-08-28.**

The playbook describes _what_ to do over years; this doc describes _what
Carlo (and Build/Audit lanes) actually do in the next 90 days_, given
Dog.com is still in soft-launch readiness per [`STATUS.md`](./STATUS.md) §4.

---

## Principle of sequencing

> **You cannot monetize traffic you do not have.**

Every play in the playbook assumes a live, instrumented Dog.com producing
real traffic and email signups. Until that's true, monetization work is
either:

- ⚪ **Wasted** (building affiliate flows nobody sees), or
- 🔴 **Premature** (raising for an MGA without conversion data).

The first 30 days are about **finishing the launch and starting the
instrumentation clock**. The next 60 days are about **layering the
highest-EV monetization moves** on the live property.

---

## Days 0-7 — Unblock launch (Carlo-only ops)

This is what's already in [`STATUS.md`](./STATUS.md) §4. The only thing this
plan adds is sequencing rationale.

| # | Task | Owner | Effort | Why first |
|---|---|---|---|---|
| 1 | Create Mailchimp audience `dog-com`, capture API key + audience ID | Carlo | 10 min | Unblocks email capture, which is the source of all future LTV. |
| 2 | Set `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true` in Vercel for dog-com | Carlo | 5 min | EmailCapture component goes from `null` to visible on every page. |
| 3 | Create GA4 property for dog.com, set `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Carlo | 10 min | Need traffic data for every later decision. |
| 4 | Search Console verify + submit sitemap | Carlo | 10 min | SEO is the dominant top-of-funnel for all monetization. |
| 5 | DNS cutover dog.com → Vercel | Carlo | 30 min | Site goes live. |
| 6 | Post-cutover smoke test (homepage, 5 articles, email capture, search) | Carlo | 15 min | Confirms revenue surfaces work before users land. |

**~80 minutes of Carlo time. Do not start anything else until this lands.**

---

## Days 7-30 — Instrumentation + the trust hub

The launch is live. Now you make every visit measurable, and you start
the lowest-cost monetization move: **the pet insurance comparison hub on
dog.com.**

### Days 7-14 — Instrumentation

| # | Task | Owner | What it enables |
|---|---|---|---|
| 7 | Verify `/api/analytics` events firing for `page_view`, `affiliate_click`, `email_signup`, `search` | Build (Claude) | Visibility into the click → email funnel. |
| 8 | Add UTM tagging to every outbound affiliate link by program (`amazon`, `chewy`, `trupanion`, etc.) | Build | Per-program attribution. |
| 9 | Build a Supabase dashboard view: `page_views`, `email_signups`, `affiliate_clicks` by site + post + week | Build | First weekly review. |
| 10 | Add a custom `Conversion` table for "email_to_signup_to_paid_signal" — even if no paid product yet | Build | Reusable funnel infrastructure. |

### Days 14-30 — Pet insurance comparison hub (Play #1, Phase 1)

The first monetization play to execute. Affiliate only — no MGA license
required. Detailed in [`MONETIZATION-PLAYBOOK.md`](./MONETIZATION-PLAYBOOK.md) §6.1.

| # | Task | Owner | Effort |
|---|---|---|---|
| 11 | Create `/pet-insurance` hub page on dog.com — overview + comparison table | Build | 1 day |
| 12 | Create one editorial page per carrier (Trupanion, Healthy Paws, Embrace, Lemonade, Spot, Pumpkin, Figo, ManyPets, Fetch — 9 pages) | Build + Carlo content review | 3-4 days |
| 13 | Build a quiz component: species → age → ZIP → breed → ranked carrier matches | Build | 2 days |
| 14 | Sign up for each carrier's affiliate program if not already enrolled | Carlo | 30 min/each |
| 15 | DVM-reviewed disclaimer on every page (via vets.co byline) | Build | 30 min total |
| 16 | OG images + schema markup for SERP rich results | Build | 1 day |
| 17 | Email capture: "Get our pet insurance comparison spreadsheet" lead magnet for the page | Build | 4 hours |

**Expected outcome by Day 30:** ~10 high-intent pages indexed in Search
Console. Affiliate revenue immaterial in month 1 (SEO lag), but the
funnel exists and traffic data starts accumulating.

---

## Days 30-60 — vets.co trust hub + AI scribe prototype

### Days 30-45 — Wire vets.co as the trust layer for the whole portfolio

This is the **highest-leverage architectural move** in the 90 days. Every
dog.com / fish.com / saddle.com article gains a "Reviewed by vets.co
DVMs" badge that links to the reviewer's vets.co profile. This:

- Boosts E-E-A-T (Google's quality signals) across the entire portfolio.
- Builds the directory listings on vets.co that become the foundation for
  the vets.co B2B SaaS pitch (Play #2).
- Creates an exit lever: vets.co's value as a B2B asset is proportional
  to how many DVMs are publicly affiliated with it.

| # | Task | Owner | Effort |
|---|---|---|---|
| 18 | New table: `public.reviewers` — DVMs + credentials + clinic + profile | Build | 2 hours |
| 19 | New column on `posts`: `reviewer_id` FK | Build | 30 min |
| 20 | Update `ArticleLayout` to render a "Reviewed by Dr. X (vets.co)" byline | Build | 2 hours |
| 21 | Create 10-20 vets.co reviewer profile pages (real or recruited DVMs) | Carlo | 5-10 hours of outreach |
| 22 | Seed reviewer assignments on dog.com health + nutrition pages | Build | 1 day |
| 23 | "Find a Reviewer" directory page on vets.co | Build | 4 hours |

### Days 45-60 — AI veterinary scribe prototype (Play #2, MVP)

The single most fundable play in the portfolio. **You can build a credible
demo in a weekend; spend two weeks to make it shippable.**

| # | Task | Owner | Effort |
|---|---|---|---|
| 24 | New app: `apps/vets-scribe` (or feature on `apps/vets-co` under `/scribe`) | Build | 1 day |
| 25 | Browser microphone → OpenAI Realtime API streaming transcript | Build | 1-2 days |
| 26 | Prompt template: vet consult transcript → SOAP note (Subjective, Objective, Assessment, Plan) | Build | 1 day (with iteration with a DVM tester) |
| 27 | Storage: encrypted, HIPAA-aware schema in Supabase (note: full HIPAA is a heavier lift; start with strong encryption + audit trail) | Build | 1 day |
| 28 | Landing page: vets.co/scribe — value prop, demo video, waitlist signup | Build + Carlo copy | 1 day |
| 29 | Get 5 friendly clinics on the waitlist | Carlo | varies |
| 30 | Decide: open-source the prompt and charge for hosting, OR keep proprietary | Carlo | conversation |

**Expected outcome by Day 60:** a working demo. 5-20 clinics on the
waitlist. The asset that justifies the **first investor conversation**.

---

## Days 60-90 — Premium membership scaffolding + newsletter activation

Now you have:
- Live dog.com with ~30-60 days of traffic
- Pet insurance comparison hub indexed
- vets.co trust hub active across portfolio
- AI scribe demo + waitlist

This is the right point to start **layering recurring revenue** without
overcommitting.

### Days 60-75 — Premium membership scaffolding

The Stripe/Supabase scaffolding is already there per the schema. **Wire
the actual subscription product but don't sell it yet.** Goal: be ready
to ship the day you cross 50k email subs.

| # | Task | Owner | Effort |
|---|---|---|---|
| 31 | Create Stripe products: dog.com Premium ($12/mo, $99/yr) — but keep `archived` until launch | Carlo | 30 min |
| 32 | Set `STRIPE_WEBHOOK_SECRET`, wire `/api/webhooks/stripe` for subscription events | Build | 4 hours |
| 33 | Build the `/account` page — billing status, manage subscription | Build | 1 day |
| 34 | Premium-only article gating UI (locked sidebar CTA, blurred fold) | Build | 1 day |
| 35 | Mark 5-10 high-effort guides as `premium_only=true` (do NOT mark anything currently free as premium — only new content) | Build + Carlo | 1 day |
| 36 | Sign one telehealth partner (Vetster API or Pawp-style) — research only, no contract yet | Carlo | varies |

### Days 75-90 — Newsletter activation

| # | Task | Owner | Effort |
|---|---|---|---|
| 37 | Build a 4-email welcome sequence in Mailchimp for new subscribers (puppy-onboarding sequence already drafted per STATUS.md) | Carlo | 2 hours setup; sequence already drafted |
| 38 | Launch the public Dog.com Daily / Weekly newsletter (cadence decided after Day 60) | Carlo + Build | 1 day infra |
| 39 | Sponsor outreach: warm-intro to one pet brand for an inaugural sponsored placement at "introductory rate" ($1-2k for first sponsor) | Carlo | 1 week of outreach |
| 40 | Sponsored placements: add a `sponsored_placement` model to track CPM, advertiser, performance | Build | 4 hours |

---

## Decision gates — what to evaluate at Day 90

At Day 90 you'll have ~60-75 days of live Dog.com traffic. **Make these
decisions on actual data, not on the speculation in the playbook:**

### Gate A — Insurance comparison ROI
- Have you seen ≥1% conversion rate on `/pet-insurance` to affiliate
  clickout?
- Are at least 2 carriers reporting commissionable conversions?
- **If yes:** scope Phase 2 (quote API integrations, 6-12 month
  investment).
- **If no:** the SEO ramp is the bottleneck, not the play. Stay the
  course; revisit at Day 180.

### Gate B — vets.co B2B SaaS
- Does the AI scribe waitlist have ≥10 clinics?
- Has any one of them committed to a paid pilot?
- **If yes:** raise capital, hire the second engineer.
- **If no:** the productization is the bottleneck. Iterate on the demo
  for another 60 days.

### Gate C — Premium membership readiness
- Cross 25k email subscribers?
- Is content engagement (avg session > 90s, repeat visits > 15%) strong
  enough to suggest payment willingness?
- **If yes:** un-archive the Stripe product, launch with a "founders
  rate" ($79/yr) to 1,000 best subscribers.
- **If no:** keep the scaffolding warm, defer the launch 60 days.

### Gate D — Newsletter sponsorship economics
- Did the first introductory sponsor convert?
- What was the open rate and click rate on the sponsored placement?
- **If yes:** raise sponsor rates 50% for next placement, build the
  inventory page on sponsor.dog.com.
- **If no:** the subscriber count is the bottleneck. Scale to 25k before
  re-pitching.

---

## What this plan deliberately doesn't do

| Skipped | Why |
|---|---|
| MGA license filing | Premature without conversion data. ~12-18 month process; start at Day 180+ if Gate A passes. |
| horses.com, petfood.com, ferret.com builds | Per STATUS.md gating policy; staged until Dog.com hits 7-day metrics. |
| Marketplace builds (saddle.com, lizard.com, horses.com) | Two-sided marketplaces need both sides; not viable as a side-quest while Dog.com is still in launch. Q4 work. |
| Print-on-demand T-shirts | The user said they're not excited about this and it's the right instinct. POD is a $5k/yr business at this scale. Skip until 2027. |
| Dropship | The user explicitly ruled this out. Reaffirm. |
| Domain sales | The portfolio's value floor is far higher than its today-cash-value. Don't sell anything in 2026. |
| New domain acquisitions (e.g. cats.com) | $$$ to acquire; not the constraint right now. Revisit after Dog.com hits Week-1 metrics. |

---

## Status flag tracking

Add this to your weekly review:

```
Week of YYYY-MM-DD
  Gate A (insurance comparison):    [  ] not measured | [  ] not yet | [  ] passed
  Gate B (vets.co AI scribe):       [  ] not measured | [  ] not yet | [  ] passed
  Gate C (premium membership):      [  ] not measured | [  ] not yet | [  ] passed
  Gate D (newsletter sponsorship):  [  ] not measured | [  ] not yet | [  ] passed
```

When 2 of 4 gates pass at the same review, raise capital. When 3 of 4
pass, also start the MGA license filing (Gate A) and the vets.co Series
Seed conversation (Gate B). When 4 of 4 pass, you have what looks like
a credibly fundable bet that maps to the $1B paths in the main playbook.

---

_For the strategic-rationale layer, see_
_[`MONETIZATION-PLAYBOOK.md`](./MONETIZATION-PLAYBOOK.md)._
