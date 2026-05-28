---
from: strategy
to: carlo
status: pending
created: 2026-05-29
blockers:
next_action: "Carlo reviews tier structure, approves Dog.com Phase-1 launch trigger, then Build implements the Stripe product objects + webhook handler when the launch trigger fires."
---

# Stripe Membership Specification — CarloOS Portfolio

## TL;DR

- **Don't launch memberships yet.** STATUS.md correctly defers monetization wiring (Phase 10) until Dog.com produces a first-revenue signal. This doc is the spec, not the trigger.
- **Launch trigger for Dog.com Phase-1:** 30 days post-DNS-cutover *and* 1,000+ email subscribers on `dog-com` Mailchimp audience *and* ≥3 unsolicited "I'd pay for X" signals (email replies, comments). Whichever of (date / list size) is later, plus the qualitative signal.
- **Recommended tier structure (all 10 sites):** Free / Plus ($4-7/mo) / Pro ($12-19/mo), with 17% annual discount (10 months for 12). Free always remains the dominant tier; Plus is the workhorse; Pro is for power users and signals willingness-to-pay ceiling.
- **Projected portfolio ARR potential (Year 1, conservative):** $60K-$140K ARR if Dog.com + PetFood.com + Vets.co launch memberships in Q3-Q4 2026 with 0.7-1.2% paid conversion off email lists in the 3K-12K range. Path to $10K MRR portfolio-wide is realistic within 12 months of first membership going live — *not* within 12 months of "today."
- **Implementation order:** Dog.com (Phase 1, validates loop) → PetFood.com (Phase 2, premium editorial fit) → Vets.co (Phase 2, triage + insurance natural upsell) → others as warranted by traffic & signal.
- **What this doc is not:** It is not a green light. It is the specification Carlo and Build use *when* the trigger fires, so we are not re-deciding tier structure at the moment we're trying to capture revenue.

> All dollar figures in this document are recommendations for a portfolio in pre-launch / early-launch state. They are based on competitor benchmarks and industry conversion norms. Verify against the market the week before launch — pricing pages move.

---

## 1. Why we are writing this now (and not building it now)

CarloOS already has the `/api/checkout` scaffold in every app. It returns 503 with `"Memberships not yet available"`. `STRIPE_WEBHOOK_SECRET` is referenced in environment but not configured. The reason to write the spec *before* the launch trigger is so that:

1. When Dog.com hits the trigger, Carlo is not making tier-structure decisions under revenue pressure.
2. Build can implement against a frozen spec in a single PR (Stripe products + webhook + Supabase schema + customer-portal config), not a series of slow back-and-forths.
3. Sister sites inherit a uniform mental model — same tier names, same billing cadence, same upgrade flow — which is critical when the same user is plausibly a Dog.com + Vets.co + PetFood.com reader.

The spec is uniform across the portfolio. What differs is *what unlocks* at each tier per site (Section 3).

---

## 2. Stripe product structure

### 2.1 Object model

One Stripe **Product** per site. Per-site Product has two paid **Prices** plus a "Free" tier that is *not* a Stripe object (Free users are simply not in Stripe at all — they are Mailchimp subscribers).

```
Stripe Product:  "Dog.com Plus & Pro"
  ├── Price: dog_com_plus_monthly   $4/mo
  ├── Price: dog_com_plus_annual    $40/yr  (= $3.33/mo equivalent)
  ├── Price: dog_com_pro_monthly    $15/mo
  └── Price: dog_com_pro_annual     $150/yr (= $12.50/mo equivalent)
```

This is the cleanest Stripe convention for a tiered SaaS: one Product, multiple Prices, *not* one Product per tier. Stripe's customer portal, reporting, and upgrade/downgrade flows all assume this shape.

### 2.2 Tier definitions (portfolio-uniform)

| Tier | Price band | Who it's for | Annual discount |
|---|---|---|---|
| **Free** | $0 | Default reader. Reads articles, downloads top-of-funnel lead magnets, gets the newsletter. | n/a |
| **Plus** | $4-7/mo | Engaged reader. Wants ad-free, save-features, a few site-specific perks. The "show your support + small upgrade" tier. | 17% (10× monthly = annual) |
| **Pro** | $12-19/mo | Power user / owner-operator. Wants directories, deep-dive PDFs, priority Q&A, alerts. | 17% (10× monthly = annual) |

The 17% annual discount is industry-standard ("2 months free"). It is a churn-reduction mechanism more than a revenue mechanism — annual subscribers churn at roughly 1/3 the rate of monthly subscribers.

### 2.3 Recommended prices, per site

Prices are the same across sites where the audience overlap is high (pet-owners are price-sensitive) and slightly higher on professional-skew sites (Saddle.com, Vets.co's professional pack if/when added).

| Site | Plus mo | Plus yr | Pro mo | Pro yr | Rationale |
|---|---|---|---|---|---|
| dog-com | $4 | $40 | $15 | $150 | Anchor. Mass-market pet owner. Plus is impulse-buyable; Pro is for new-puppy parents and breeders. |
| fish-com | $5 | $50 | $15 | $150 | Reefers spend more per hobby; willingness-to-pay above dog norm. |
| horses-com | $7 | $70 | $19 | $190 | Equestrian disposable income materially higher. Pro is genuinely Pro. |
| saddle-com | $5 | $50 | $15 | $150 | Niche but engaged. Fitter directory has real-world dollar value. |
| petfood-com | $5 | $50 | $15 | $150 | Editorial brand. Plus is "no ads + scoring rubric"; Pro is per-SKU deep dives. |
| petfoods-com | $4 | $40 | $12 | $120 | Catalog/database role per STATUS — recall priority is the hook. Slightly cheaper to drive list growth. |
| lizard-com | $5 | $50 | $15 | $150 | UVB-meter buyer's-club value alone justifies Plus. |
| vets-co | $5 | $50 | $19 | $190 | Pro is priced higher because the unlock (triage priority once AI assistant ships) is genuinely time-saving. |
| ferret-com | $4 | $40 | $12 | $120 | Smaller audience; lower price floor preserves conversion. |
| ferrets-com | $4 | $40 | $12 | $120 | Same. Directory fast-track Pro tier targets rescues/breeders, who will pay. |

> Verify against current market: at minimum, check Rover, AllAboutBirds (Cornell Lab), Bark Magazine paid, and any competitor's pricing page. If a direct competitor has dropped below $4/mo for the same proposition, lower Plus to $3 — preserving the price ladder matters more than the absolute number.

### 2.4 Annual billing discount math

Monthly × 12 = full price. Annual = monthly × 10. Example: Dog.com Plus monthly $4 × 12 = $48; annual $40. Savings displayed in checkout: "$8/yr" *and* "2 months free."

Stripe handles the proration math on upgrades (Plus monthly → Pro annual) natively. Build does not need custom logic for proration.

### 2.5 Customer portal configuration

Stripe's hosted customer portal (`billing.stripe.com`) handles:

- Update payment method
- Cancel subscription (with a one-question survey configured: "why are you canceling?" — five options + open text)
- Switch monthly ↔ annual
- Upgrade Plus → Pro / downgrade Pro → Plus (proration on)
- Download invoices
- Update billing email / address

**What to enable in the portal config:**

- Cancel subscription: ON. Effective date: end of current period (not immediate). This matters — it reduces refund requests because users keep what they paid for.
- Pause subscription: OFF for v1. Pausing is a retention feature for later; it complicates accounting and isn't worth the support load at launch volume.
- Switch plans: ON, restricted to the same site's plans only.
- Update tax IDs: ON.
- Cancellation reason survey: ON, with five fixed reasons:
  1. Too expensive
  2. Didn't use it enough
  3. Found a better alternative
  4. Technical issues
  5. Other (text box)

The cancellation reason data is more valuable than the cancellation prevention itself, especially in the first six months.

**Customer Portal URL:** every "Manage subscription" link in every CarloOS app should resolve through `POST /api/billing-portal` (a new route to add when Build implements), which calls `stripe.billingPortal.sessions.create({ customer, return_url })` server-side. Never link directly to a hardcoded portal URL — Stripe requires server-side session creation.

---

## 3. Per-site differentiation

What each Plus and Pro tier unlocks. This is the heart of the spec — if the unlocks aren't worth the money, no price strategy can save it.

> Editorial integrity rule: paid tiers never gate the *trustworthy core* of the site. The triage card, the scoring rubric methodology, the basic species care guides — all of that stays free, always. Memberships unlock *depth, tools, and convenience*, not safety information.

### 3.1 Dog.com

- **Free:** All care content, breed pages, basic puppy schedule lead magnet, newsletter, the 8-email puppy-onboarding sequence.
- **Plus ($4/mo):**
  - Ad-free reading experience (zero affiliate banners; inline affiliate-disclosed links remain)
  - Save articles + breed pages + checklists to a personal library
  - Weekly puppy-stage check-in email (personalized to the puppy's age based on a one-time intake form)
  - Printable training-log PDFs (week-by-week)
- **Pro ($15/mo):**
  - **Live Q&A with a vet** — one monthly group session, plus async question submission. Vet-network hire required before Pro launch.
  - Weekly check-ins from a credentialed trainer (group, not 1:1, via the same async form)
  - Early access to new lead magnets (puppy-schedule v2, senior-dog wellness, etc.)
  - Bulk export of the saved library

### 3.2 Fish.com

- **Free:** Species care guides, basic compatibility checks, tank-cycling primer, water-test interpretation explainer.
- **Plus ($5/mo):**
  - Water parameter logging tool (per-tank, with trend graphs)
  - Ad-free reading
  - Species compatibility checker (advanced — multi-species + tank-size aware)
  - Save guides + custom tank profiles
- **Pro ($15/mo):**
  - Per-tank disease/algae diagnostic tool (input photos + parameters, get a triage)
  - Live monthly Q&A with a reefing specialist
  - Bulk Reef Supply / Marine Depot discount code aggregation (when partnership exists; not sold as the lead value prop)

### 3.3 Horses.com

- **Free:** Care guides, breed pages, basic cost-of-ownership calculator, glossary.
- **Plus ($7/mo):**
  - Board / farrier / lessons price database (crowd-sourced, regional)
  - Ad-free reading
  - Save and compare boarding facilities
- **Pro ($19/mo):**
  - **Barn-tour-evaluation app** — a structured checklist (electrical, fencing, drainage, hay storage, footing, ventilation, etc.) that produces a printable PDF after a visit
  - Pre-purchase exam question pack (vet-reviewed)
  - Hauling-day pre-flight checklist
  - Monthly group Q&A with an equine vet

### 3.4 Saddle.com

- **Free:** Fitting basics, brand overviews, used-saddle buying primer.
- **Plus ($5/mo):**
  - Saddle-fitter directory (independent fitters only — no brand-paid placements)
  - Saved searches in the used-saddle market
  - Ad-free reading
- **Pro ($15/mo):**
  - Used-saddle alert subscriptions (specific brand + tree + seat-size combinations across major marketplaces — eBay, Tack Trunk, Facebook Marketplace via public-page scraping where ToS allows)
  - Pre-purchase saddle-fit photo review (async, by a credentialed fitter, one per month included)

### 3.5 PetFood.com

- **Free:** Top-line scores, methodology overview, brand pages with summary scores, recall log.
- **Plus ($5/mo):**
  - **Full ingredient-scoring rubric** (the methodology + the per-ingredient weighting)
  - Ad-free reading
  - Save brands to a watchlist with recall alerts on the watchlist
- **Pro ($15/mo):**
  - **Per-SKU deep-dive PDFs** (every reviewed SKU, with the full nutritional analysis, sourcing notes, manufacturing-facility lookup, and a side-by-side comparator)
  - Ingredient flagging service: paste an ingredient list, get a score and a flagged-ingredients report
  - Brand-of-the-month deep dive (one editorial deep-dive per month, members-only first, free 60 days later)

### 3.6 PetFoods.com

- **Free:** Brand directory, basic recall log, transparency-report excerpts.
- **Plus ($4/mo):**
  - Recall-alert priority lane (email + SMS within 1 hr of FDA publication vs free tier next-day)
  - Per-brand transparency report excerpts → full reports
  - Ad-free reading
- **Pro ($12/mo):**
  - Full per-brand transparency reports (manufacturing facility, ownership chain, recall history, regulatory action log)
  - Multi-pet recall watchlist (configure for each pet's foods independently)
  - Industry-news weekly digest (curated; no syndication)

### 3.7 Lizard.com

- **Free:** Species care guides, UVB primer, basic heating/lighting equipment guides.
- **Plus ($5/mo):**
  - **UVB-meter buyer's club** — group-purchase discount on Solarmeter 6.5 (or current standard) when the club hits N members. Independent — we negotiate, no manufacturer kickback. Disclose every detail.
  - Species-specific advanced guides (breeding, brumation, ailment diagnostics)
  - Ad-free reading
- **Pro ($15/mo):**
  - Enclosure-build PDF library (10+ DIY plans, vet- and keeper-reviewed)
  - Live monthly Q&A with an exotics specialist
  - Vet directory (exotics-specialist DVMs, geographically searchable)

### 3.8 Vets.co

- **Free:** Triage cards (the trustworthy core — always free), care primers, glossary, the "is this an emergency?" decision tree.
- **Plus ($5/mo):**
  - Ad-free reading
  - Save vet directory entries
  - Exclusive health-condition deep-dives (the long-form pieces that don't fit on the free tier)
- **Pro ($19/mo):**
  - **Emergency triage Q&A priority lane** — once the AI triage assistant ships, Pro members' questions get routed to a higher-priority queue with a target 15-minute response (free tier is best-effort).
  - **Downloadable triage card pack** — laminated-ready PDFs covering 30+ scenarios, formatted for fridge / phone-wallet
  - Pet-insurance comparison tool with member-exclusive filters (independent — we do not get paid to recommend)

### 3.9 Ferret.com

- **Free:** Care guides, diet primers, behavior content.
- **Plus ($4/mo):**
  - **Insulinoma watch** — symptom-log tracking app (track water intake, energy levels, episodes, weight) with trend visualization
  - Adrenal disease symptom-log (parallel)
  - Ad-free reading
- **Pro ($12/mo):**
  - **Exotic-vet network referrals** — geographic search for ferret-experienced DVMs (independently vetted, no brand pay)
  - Monthly group Q&A with an exotics specialist
  - Senior-ferret wellness PDFs

### 3.10 Ferrets.com

- **Free:** Public directory (rescues, breeders, exotic vets), basic submission form, news feed.
- **Plus ($4/mo):**
  - Saved searches on the directory
  - Ad-free reading
  - Newsletter (curated rescue / event / advocacy)
- **Pro ($12/mo):**
  - **Directory submission fast-track** — for rescues and breeders. Skip the 30-day editorial queue; submission goes live within 48 hr (still subject to editorial review for accuracy + ethics, but at higher priority).
  - Featured-listing rotation (one per month, sponsored-disclosure-styled — even though it's the directory's own org, we mark it clearly)
  - Quarterly state-of-the-rescue-network report

---

## 4. Implementation order

### Phase 1: Dog.com (Week 2-4 post-launch)

- **Trigger:** 30+ days live + 1,000+ email subscribers + qualitative WTP signal.
- **Why first:** Dog.com is the biggest expected audience and the simplest tier promise. If we cannot make membership work on Dog.com, the rest of the portfolio's membership case weakens.
- **What ships:** Stripe Products + Prices, `/api/checkout` POST handler (real, not 503), `/api/billing-portal`, webhook handler at `/api/webhooks/stripe`, Supabase `customers` table (see Section 5), customer-portal config, pricing page at `/membership`, "Upgrade" CTAs in EmailCapture component (post-subscribe) and in the puppy-schedule lead-magnet completion flow.
- **What does NOT ship in Phase 1:** Vet Q&A live sessions. The Pro tier promises this; we promise it as "starts within 30 days of Pro launch." Vet contract has to be in place first.

### Phase 2: PetFood.com + Vets.co (Month 2-3)

- **Trigger:** Dog.com membership reaches 50 paid subscribers OR 8 weeks elapsed, whichever first.
- **Why these two:** PetFood.com's editorial brand fits the premium-tier model (people pay for trusted independent ratings — Wirecutter, Consumer Reports). Vets.co's triage-priority tier ties naturally to the insurance-comparison content, which produces high-intent affiliate traffic — the same audience converts both ways.
- **What ships:** Same engineering work as Phase 1, replicated. The Stripe Products and Prices are net new; the webhook + Supabase + portal code is shared from Phase 1.

### Phase 3: Horses.com + Saddle.com (Month 4-6)

- **Trigger:** Equestrian content build-out reaches parity with Dog.com (currently 40 pages on Saddle, would need ~120-150 to support).
- **Why:** The equestrian price database is the most differentiated unlock in the portfolio. It is also the most labor-intensive to seed. Membership doesn't ship before the database has at least 200 boarding entries, 100 farrier entries.

### Phase 4: Lizard.com + Fish.com (Month 6-9)

- **Trigger:** UVB-meter buyer's club logistics solved on Lizard side; water-parameter logging tool built on Fish side.
- These tiers depend on bespoke tooling, not just content. Engineering effort per tier is higher; only launch when the tool is genuinely better than free alternatives.

### Phase 5: Ferret + Ferrets + PetFoods (Month 9-12)

- **Trigger:** Each site has reached a 1,000+ email-subscriber threshold.
- These are the smallest expected lists. Membership comes last and contributes least to portfolio ARR but reinforces brand loyalty in narrow communities.

---

## 5. Stripe webhook + Supabase customer model

### 5.1 Supabase `customers` table schema

```sql
create table customers (
  id                    uuid primary key default gen_random_uuid(),
  email                 text not null unique,
  stripe_customer_id    text unique,                   -- null until first checkout
  created_at            timestamptz default now(),
  updated_at            timestamptz default now(),
  -- Mailchimp linkage
  mailchimp_subscriber_hash text,                      -- md5(lowercase(email))
  -- Cross-site presence (one row per email; sites array tracks which sites this customer has subscriptions on)
  active_sites          text[] default '{}',           -- e.g., ['dog-com', 'vets-co']
  -- Lifecycle
  lifecycle_stage       text default 'free',           -- 'free' | 'plus' | 'pro' | 'cancelled' | 'past_due'
  last_seen_at          timestamptz
);

create table subscriptions (
  id                          uuid primary key default gen_random_uuid(),
  customer_id                 uuid not null references customers(id) on delete cascade,
  site                        text not null,           -- 'dog-com', 'vets-co', etc.
  stripe_subscription_id      text not null unique,
  stripe_price_id             text not null,
  tier                        text not null,           -- 'plus' | 'pro'
  status                      text not null,           -- 'active'|'trialing'|'past_due'|'canceled'|'unpaid'
  current_period_start        timestamptz,
  current_period_end          timestamptz,
  cancel_at_period_end        boolean default false,
  canceled_at                 timestamptz,
  cancellation_reason         text,                    -- from portal cancellation survey
  card_brand                  text,                    -- 'visa', 'mastercard', etc.
  card_last4                  text,                    -- '4242'
  card_exp_month              int,
  card_exp_year               int,
  created_at                  timestamptz default now(),
  updated_at                  timestamptz default now()
);

create index subscriptions_customer_idx on subscriptions(customer_id);
create index subscriptions_site_status_idx on subscriptions(site, status);
create index customers_email_idx on customers(email);
```

**Row-level security:** customers can read their own row only. Site-level reads (lifecycle queries for personalization) go through a service-role key on the server, never client-side.

### 5.2 Stripe webhook events to handle

`/api/webhooks/stripe` (one per app, but identical logic; or one shared shopper-facing endpoint with site inferred from the price ID). Minimum events:

| Event | Action |
|---|---|
| `checkout.session.completed` | Upsert `customers` row by email; create `subscriptions` row; tag in Mailchimp with `paid:plus` or `paid:pro` and site. |
| `customer.subscription.updated` | Update tier (if price changed via upgrade), status, `current_period_end`, `cancel_at_period_end`. Re-tag Mailchimp if tier changed. |
| `customer.subscription.deleted` | Set `subscriptions.status = 'canceled'`, set `customers.lifecycle_stage` based on remaining active subs, remove paid tags in Mailchimp. |
| `invoice.payment_failed` | Set status to `past_due`. Trigger Mailchimp "update your card" email (separate automation). |
| `invoice.payment_succeeded` | Set status to `active`, update card details from invoice. |
| `customer.subscription.trial_will_end` | (If trials offered later) — trigger pre-conversion email. |

**Idempotency:** every webhook write goes through a unique constraint on `stripe_event_id` in a `webhook_events` audit table. Stripe retries; the handler must be idempotent.

**Signing:** `STRIPE_WEBHOOK_SECRET` must be set in each Vercel project's env (this is the missing piece STATUS.md flags). The webhook handler verifies `stripe-signature` header against the secret. Unsigned requests return 400.

### 5.3 Gating logic (server-side)

Premium content is gated server-side, not client-side, in middleware or per-route. Pseudo-code:

```ts
async function userTierFor(email: string, site: string): 'free' | 'plus' | 'pro' {
  const sub = await supabase
    .from('subscriptions')
    .select('tier, status')
    .eq('customer_id', /* lookup by email */)
    .eq('site', site)
    .in('status', ['active', 'trialing', 'past_due']) // past_due still gets access for the grace period
    .order('created_at', { ascending: false })
    .limit(1)
    .single();
  return sub?.tier ?? 'free';
}
```

Past-due users keep access during Stripe's default 3-week dunning window. This is intentional — pulling access on day one of a failed card creates more refund requests than it prevents.

---

## 6. Revenue projection

### 6.1 Assumptions (conservative)

- 1.0% paid conversion off email list (industry benchmark for content-led membership: 0.5%-2.5%; we anchor at 1%).
- Of paid: 70% Plus, 30% Pro.
- Of paid: 60% monthly, 40% annual.
- Monthly churn 6% (industry benchmark for content membership: 5-8%).
- Annual subscribers churn at 2% monthly equivalent.

### 6.2 Per-site projection at year-1 maturity

Assumes each site reaches a stable email-list size 12 months after its launch trigger. List sizes are estimates against current page counts and benchmark email-capture rates of ~1.5% of monthly uniques.

| Site | Est. email list (Y1 end) | Paid subs (1%) | Avg ARPU/mo (blend) | MRR | ARR |
|---|---|---|---|---|---|
| dog-com | 12,000 | 120 | $7.20 | $864 | $10,368 |
| petfood-com | 6,000 | 60 | $7.50 | $450 | $5,400 |
| vets-co | 5,000 | 50 | $9.10 | $455 | $5,460 |
| horses-com | 3,000 | 30 | $10.30 | $309 | $3,708 |
| saddle-com | 2,000 | 20 | $7.50 | $150 | $1,800 |
| fish-com | 4,000 | 40 | $7.50 | $300 | $3,600 |
| lizard-com | 2,500 | 25 | $7.50 | $187 | $2,244 |
| ferret-com | 1,500 | 15 | $6.00 | $90 | $1,080 |
| ferrets-com | 1,200 | 12 | $6.00 | $72 | $864 |
| petfoods-com | 2,000 | 20 | $6.00 | $120 | $1,440 |
| **Portfolio** | **39,200** | **392** | — | **$2,997** | **~$35,964** |

**Note:** this is the conservative scenario — 1% conversion, average ARPU. If conversion lands at 1.5% (still well within benchmark range) and ARPU lands higher because Pro skews higher than 30%, portfolio ARR roughly doubles to $70K-$80K.

### 6.3 Path to $10K MRR portfolio-wide

$10K MRR ≈ 1,300 paid subscribers at $7.50 blended ARPU. Realistic timeline:

- **Months 0-3 of membership:** Dog.com only. Target 100 paid (~$720/mo). Validates the loop.
- **Months 3-6:** PetFood + Vets.co live. Target 280 paid portfolio-wide (~$2,100/mo).
- **Months 6-9:** Horses + Saddle live. Target 500 paid (~$3,700/mo).
- **Months 9-12:** Fish + Lizard + Ferret(s) + PetFoods. Target 900-1,100 paid (~$7,000-$8,500/mo).
- **Months 12-15:** Optimization on the funnels of the first three sites pushes conversion from 1% → 1.3%. Target $10K MRR.

This is the realistic schedule. $10K MRR within 15 months of Dog.com membership launch — which is itself 4-12 weeks from today depending on the launch trigger.

---

## 7. Risks

### 7.1 Cannibalization of affiliate revenue

If Plus is ad-free, every Plus subscriber removes themselves from the affiliate-link revenue stream. At today's traffic, affiliate revenue is roughly $0; at year-1 maturity, affiliate revenue on Dog.com could plausibly be $1-3K/mo. If Plus draws the most engaged readers (the ones most likely to click affiliate links anyway), the per-user-cannibalization math may favor membership over affiliate. **Decision rule:** if a user's expected affiliate revenue exceeds $4/mo (Plus price), Plus is *worse* than ad-supported for that user, and we should price-raise Plus or reduce its scope. Re-evaluate this every quarter.

### 7.2 Churn

5-7% monthly is typical for content membership. Annual subs cut effective churn to ~2% equivalent — which is why annual pricing is *not* primarily a revenue lever, it's a churn lever. If monthly churn exceeds 8%, the membership is fundamentally not working and we pause new acquisitions until we understand why (cancellation-reason data; see Section 2.5).

### 7.3 Customer support load

Stripe's customer portal handles ~80% of support cases automatically (cancel, update card, change plan, get invoice). The remaining 20% — refunds, billing disputes, dunning escalations — falls to Carlo. **Refund policy:** prorated refund on cancellation request within 7 days of payment, no refund after. Document on the pricing page; one click in Stripe to process. Anticipated load at 100 paid subs: ~2 refund requests per month.

### 7.4 Pricing too low or too narrow

If Plus is priced too low ($2) or too narrow (ad-free only), users perceive low value and convert at sub-1% rates. If Plus is priced too high relative to unlocks, users churn within 60 days of buying. The $4-7 Plus band is the empirical sweet spot for content-led pet/hobby media. Resist the urge to start at $2.99 — it's not a Netflix-style scale play, and it leaves money on the table without buying additional volume.

### 7.5 Editorial integrity

Pro-tier unlocks must never include "softer scoring" or "earlier access to good news about a brand." The scoring rubric is methodology-driven and the score is the same for every reader regardless of payment status. *What* members get earlier (the deep-dive PDF, the brand-of-the-month essay) is fine; *which conclusion they get* must be identical to the free reader.

### 7.6 Shared-customer cross-site complexity

A single user might be Dog.com Plus + Vets.co Pro. The schema in Section 5 supports this — one `customers` row by email, multiple `subscriptions` rows. But the UX needs to handle the "Manage my memberships" page that shows both. Build this for v1 even if 95% of users only have one site; the small initial cost prevents a painful migration when cross-site memberships scale to a meaningful share.

---

## 8. Open questions for Carlo

1. **Refund policy** — 7-day prorated, no refund after? Or 30-day no-questions-asked? The latter has marketing value ("risk-free") but raises support load.
2. **Free trial offer** — 7-day or 14-day trial on Plus? Adds conversion friction (card required) but Stripe handles it cleanly. Recommendation: **no free trial at v1**; revisit after the first 90 days of data.
3. **Student / educator pricing** — Vets.co Pro for vet-school students at half price? Future move, but worth deciding before pricing pages are public so we don't communicate "$19 for everyone" then walk it back.
4. **Family / multi-site bundle** — "Portfolio Plus" at $9/mo grants Plus on every site? Probably yes, but only after at least 3 sites have memberships live. Otherwise it's a confusing single-site purchase masquerading as a bundle.
5. **Charitable angle** — "1% of membership revenue donated to species-specific rescue" for Ferret/Lizard/Horses? Strong brand signal in those communities; small enough that it doesn't dent margins. Disclosure: must be a real audited donation, not marketing copy.

---

## 9. Definition of done (for this spec)

- Carlo reads this doc and approves or revises the Section 2.3 prices.
- Carlo answers the five questions in Section 8.
- Once approved, this spec is the input to a single Build PR that implements Phase 1 (Dog.com) end-to-end against the spec. Build does not re-litigate the tier structure inside that PR.

## 10. Definition of done (for the launch trigger)

- Dog.com has been live for ≥30 days.
- `dog-com` Mailchimp audience has ≥1,000 confirmed subscribers.
- ≥3 unsolicited "I would pay for X" signals captured (reply tracker, comments, social).
- Carlo gives explicit go.

Then — and only then — Build executes the PR.
