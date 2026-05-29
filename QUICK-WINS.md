# Quick Wins — 6 Plays That Ship Revenue in 30-90 Days

**Companion to [`MONETIZATION-PLAYBOOK-V2.md`](./MONETIZATION-PLAYBOOK-V2.md).**
**Time horizon: 2026-05-28 → 2026-08-28.**

These are the 6 plays from the expanded portfolio that can ship to
revenue in **30-90 days**. Ordered by speed-to-first-dollar.

> **Premise:** Every one of these is built on top of the existing
> CarloOS infrastructure (Next.js 14, Supabase, Stripe scaffold, Mailchimp,
> Vercel). They reuse `packages/ui` components, `packages/db` schema, and
> the existing `apps/*` Vercel project pattern. No new infra.

---

## Quick Win #1 — AskTheVet.com (AI vet symptom checker)

**Domain:** `askthevet.com`
**Build time:** 2 weeks
**Time to first revenue:** Week 3
**Realistic 90-day MRR:** $3-15k

### What it is

A web app where pet owners type a free-text question about their pet's
symptoms. AI returns a triage recommendation (home care / non-urgent vet
/ urgent ER) plus three monetization routes:

1. **Pet insurance lead-gen** if uninsured: link to Trupanion / Lemonade
   / Pumpkin / ManyPets. **$40-80 per converted policy.**
2. **Telehealth lead-gen** if non-urgent: white-label Vetster booking.
   **$5-30 per booking.**
3. **Product affiliate** if home care: Chewy / Amazon link. **4-7%
   commission, $5-15 AOV-blended.**

Premium tier ($9/mo) removes ads, saves history, adds "ask a real vet
within 24h" via Vetster handoff.

### Why this ships fast

- OpenAI Responses or Realtime API → single prompt → JSON-structured
  triage output.
- Supabase Auth + `profiles` schema already exists.
- Stripe scaffold + `memberships` table already exists.
- No clinical workflow, no PII handling beyond email, no HIPAA scope.
- Legal posture is "consumer information" (same as WebMD). One-line
  disclaimer at the bottom of every response.

### Build checklist

```
Week 1
├── New app: apps/askthevet at /apps/askthevet (copy apps/dog-com scaffold)
├── Homepage with single text input + species selector
├── /api/triage route: OpenAI call with structured output schema
├── Supabase table: triage_queries (question, response, monetization_route, attributed_revenue)
└── Affiliate routing: 3 insurance carriers + Vetster + Chewy/Amazon

Week 2
├── Triage history page (logged-in users)
├── Premium tier ($9/mo) Stripe product + membership gating
├── Mailchimp audience + welcome email
├── 5 sample "ask the vet" landing pages (SEO-optimized) per species
└── DNS cutover + GA4 + Search Console verify
```

### Revenue model

| Source | Per-event | 90-day volume target | Revenue target |
|---|---|---|---|
| Pet insurance affiliate | $40-80 | 100-300 | $4k-24k |
| Vetster telehealth referral | $5-30 | 200-800 | $1k-24k |
| Product affiliate (Chewy/Amazon) | $5-15 blended | 500-2,000 | $2.5k-30k |
| Premium subscription ($9/mo) | $9 MRR | 50-300 | $450-2,700 MRR |

**90-day MRR target: $3-15k** (will grow with SEO ramp).

### Why this is the #1 quick win

- Highest-CTR domain in the entire portfolio (clear value prop in the URL).
- Direct path to PetCoach-style exit ($150k MAU was enough for Petco acq.).
- Cross-promotes every other portfolio property (insurance, telehealth, vets.co).

---

## Quick Win #2 — DogStaff.com (Vet & pet professional job board)

**Domain:** `dogstaff.com` (the existing portfolio gives us a perfect
domain for a play that originally would have lived on vets.co)
**Build time:** 3 weeks
**Time to first revenue:** Week 4 (first paid posting)
**Realistic 90-day MRR:** $2-10k

### What it is

Job board for vets, vet techs, groomers, walkers, sitters, trainers,
daycare staff. **Premium listings $300-2,000 per posting** depending on
role; free listings for general staff to seed supply.

### Build checklist

```
Week 1
├── New app: apps/dogstaff
├── Supabase tables: jobs, employers, applications
├── Job posting form (employer-facing)
├── Job board listing + search/filter UI
└── Application form (apply with email + resume upload to Supabase Storage)

Week 2
├── Scrape ~500 public vet jobs from Indeed/AAHA Career Center to seed
│   supply (CRITICAL: only list source URL, do NOT replicate content;
│   redirect "apply" to original source for seed listings)
├── Stripe checkout for premium listings ($300 / $500 / $2k tiers)
├── Featured employer page ($2k-5k annual)
└── Email digest to candidates ("new jobs in your area")

Week 3
├── Outbound to 50 vet clinics — "list your first DVM posting free; pay
│   only if you hire"
├── DVM-friendly UX (mobile-first, applications < 90 seconds)
└── DNS + GA4 + Search Console
```

### Revenue model

| Tier | Price | 90-day target |
|---|---|---|
| Free general staff posting | $0 | 200-500 listings (supply) |
| Vet tech posting | $300 | 5-15 listings = $1.5k-4.5k |
| DVM posting | $500-2k | 3-10 listings = $1.5k-20k |
| Featured employer (annual) | $2k-5k | 1-3 sign-ups = $2k-15k |

**Why this works on a 30-day horizon:** vet hiring is broken. Clinics
post jobs and get no qualified applicants. A clean, mobile-first board
with vet-specific filters wins the first 5-10 paid clinics on outbound
alone.

**Cross-leverage with vets.co:** every listing shows the "Posted on the
Vets.co Network" badge. Builds vets.co B2B brand presence ahead of the
B2B SaaS launch.

---

## Quick Win #3 — SaddleShop.com + HorseSupplies.com (Equestrian affiliate aggregator)

**Domains:** `saddleshop.com`, `horsesupplies.com`
**Build time:** 3 weeks
**Time to first revenue:** Week 4-5
**Realistic 90-day MRR:** $1-5k (SEO lag is the bottleneck)

### What it is

Affiliate aggregator for equestrian gear. Combines:
- SmartPak Equine (5% commission)
- Dover Saddlery (6% commission)
- Riding Warehouse (3-7%)
- Horse.com Affiliate Program (3-8%)
- Amazon / Chewy for crossover items

Each product category gets a structured comparison page. saddle.com
provides the content authority; saddleshop.com captures commerce intent.

### Build checklist

```
Week 1
├── New app: apps/saddleshop (or feature on saddle.com if simpler)
├── 30 category pages (English saddles, Western saddles, bits, bridles,
│   pads, boots, helmets, grooming, supplements, deworming, etc.)
├── For each: 5-10 products with structured scoring
└── Outbound affiliate links via cloaked URLs (Pretty Links style)

Week 2
├── Apply to SmartPak, Dover Saddlery, Riding Warehouse affiliate programs
├── Schema.org Product + Review markup on every product page
├── Cross-link to saddle.com content (authoritative trust signal)
└── Email capture: "Best equestrian deals weekly" newsletter

Week 3
├── horsesupplies.com — same architecture, broader category coverage
│   (feed, supplements, fencing, trailers via wormer.com / barnsupplies)
├── Cross-link from horses.com (when content goes live)
└── DNS + GA4 + Search Console
```

### Revenue model

- AOV: $80-300 (equestrian gear is expensive)
- Blended commission: 5-7%
- Per-conversion: $4-21
- 90-day conversions target: 200-800 → **$1-5k**

### Why this is included despite lower 90-day MRR

- saddle.com is already built (42 pages of content).
- Equestrian buyers research extensively before buying — a comparison
  hub captures buying-cycle intent.
- Scales linearly with SEO. By month 6-12, this is a $10-30k MRR play.
- saddleshop.com + horsesupplies.com makes the equine vertical
  monetizable **before** the marketplace (horses.com classifieds) is
  built.

---

## Quick Win #4 — SeniorPetPharmacy.com (Senior pet Rx content + affiliate)

**Domains:** `seniorpetpharmacy.com`, `seniorpetmeds.com`,
`seniorpetproducts.com`, `seniorpetplace.com`, `seniorcats.com`
**Build time:** 4 weeks
**Time to first revenue:** Week 5-6
**Realistic 90-day MRR:** $2-15k

### What it is

Content authority for senior pet conditions, monetized via:

1. **Chewy Pharmacy affiliate** for Rx medications (4% commission on
   $100+ AOV = $4 per conversion, but high frequency)
2. **Amazon / Chewy affiliate** for OTC supplements (joint, cognitive,
   probiotics)
3. **Pet insurance lead gen** (senior pets convert 3× normal rates)
4. **Premium membership** ($14.99/mo "Senior Pet Plus" with telehealth +
   discount Rx)

### Build checklist

```
Week 1
├── New app: apps/seniorpets (covers all 5 senior domains via routing)
├── 30 condition pages (osteoarthritis, kidney disease, diabetes,
│   cognitive decline, heart disease, dental disease, hyperthyroidism,
│   senior obesity, vision loss, etc.)
└── For each: overview, treatment, recommended Rx (Chewy affiliate),
    recommended OTC (Amazon affiliate), insurance carrier rec, vet
    consultation routing (AskTheVet.com)

Week 2
├── 15 senior-cat-specific pages on seniorcats.com (unique angle — no
│   senior-cat brand exists)
├── Email capture: "Senior Pet Care Monthly" newsletter
└── DVM byline + vets.co reviewer attribution

Week 3
├── Schema markup (MedicalCondition + Drug + Article)
├── Build Stripe scaffold for $14.99/mo "Senior Pet Plus" — DO NOT
│   launch yet (gate behind email list size threshold)
└── Cross-link from dog.com health pages

Week 4
├── Apply to additional senior-pet-specific affiliate programs
│   (PetWellbeing, NuVet, Dr. Bach Pets, etc. — many at 15-25% commission)
├── Outreach to senior pet content creators for cross-promotion
└── DNS + GA4 + Search Console
```

### Revenue model

| Source | Per-event | 90-day target | Revenue target |
|---|---|---|---|
| Chewy Pharmacy affiliate | $4 (4% on $100 AOV) | 200-1,000 | $800-4k |
| Amazon supplements affiliate | $3-10 | 500-2,000 | $1.5k-20k |
| Pet insurance lead gen (3× rate) | $40-80 | 50-200 | $2k-16k |
| Senior-specialty affiliate (15-25%) | $15-50 | 100-400 | $1.5k-20k |

**90-day MRR target: $2-15k.** This grows fastest because senior pet
content has lower SERP competition and very high commercial intent.

### Why this is strategic

This is the foundation of **Pillar #3 of the Pet Health Trinity** (V2
§4). The 30 content pages built in 30 days become the content moat for
a $50-200M dispensing business in 2027-2028.

---

## Quick Win #5 — DogPicture.com (AI pet portraits)

**Domain:** `dogpicture.com`
**Build time:** 4 weeks
**Time to first revenue:** Week 5 (digital downloads, no fulfillment lag)
**Realistic 90-day MRR:** $5-30k

### What it is

The sharpened version of Carlo's original T-shirt idea. Upload a photo
of your dog → AI generates a stylized portrait → buy as:
- Digital download ($5-15) — **instant revenue, 95% margin**
- Canvas print, mug, blanket, T-shirt via Printify ($25-100) — **40-60%
  margin, dropship via Printify/Gelato API**

### Build checklist

```
Week 1
├── New app: apps/dogpicture
├── Upload form + image preview
├── OpenAI gpt-image-1 or Stable Diffusion API + 8-12 style presets
│   ("Renaissance painting," "Watercolor," "Studio Ghibli style," etc.)
└── Stripe Checkout for digital downloads

Week 2
├── Printify or Gelato API integration for physical products
├── Product catalog: canvas, mug, blanket, T-shirt, framed print
├── Order webhook → Printify fulfillment → Stripe payout
└── Order tracking page

Week 3
├── Bundle pricing (digital + canvas = $35 bundle)
├── Gift mode (recipient surprise email)
├── Referral codes ($10 off both sides)
└── SEO pages: "AI dog portraits," "custom dog gifts," etc.

Week 4
├── Cross-link from dog.com + luxurypuppy.com + luxurydog.com
├── Mailchimp tag: "purchased portrait" → upsell physical product 30
│   days later
└── DNS + GA4 + Search Console
```

### Revenue model

| Product | Price | Cost | Margin | 90-day target |
|---|---|---|---|---|
| Digital portrait | $9 | $0.15 (API) | $8.85 | 500-2,000 = $4.5k-18k |
| Canvas print | $59 | $25 (Printify) | $34 | 50-200 = $1.7k-6.8k |
| Mug / T-shirt / blanket | $25-45 | $12-20 | $13-25 | 100-400 = $1.3k-10k |

**90-day MRR target: $5-30k.** Highest cash margin of any quick win.

### Why this answers Carlo's T-shirt thesis

Carlo originally considered "pictures-on-T-shirts" as a play. **The
better version is "AI portraits + multi-product POD."** The digital
upsell is the unlock — 95% margin on the AI-generated image, then 40%
margin on the physical product. Same operational complexity, 3-5×
revenue per customer.

This is **not the $1B play.** It's the $1-3M/yr cashflow play that funds
the bigger ones.

---

## Quick Win #6 — PetSupplies.com (Comparison engine MVP)

**Domains:** `petsupplies.com` (+ defensive: `pet-supplies.com`,
`petsuppliess.com`)
**Build time:** 6 weeks
**Time to first revenue:** Week 7-8 (SEO indexation lag)
**Realistic 90-day MRR:** $1-8k (will compound)

### What it is

The NerdWallet-style comparison engine for pet products. Each
category/subcategory has a structured page comparing 5-10 products with
scoring criteria, then routing to Chewy / Petco / Amazon / brand-direct
via affiliate.

This is the **single largest monetization upgrade** in the portfolio
(V2 §3.1) — but it's #6 in this list because the SEO ramp takes 60-180
days.

### Build checklist

```
Week 1
├── New app: apps/petsupplies
├── Category structure: 30 top-level categories × 5-10 subcategories
│   = 200-300 landing pages planned
├── Build the Product comparison component (reuse packages/ui/ReviewCard)
└── Supabase: products_v2 table (price, category, retailer URLs,
    structured specs)

Week 2-3
├── Populate top 30 priority categories (food, beds, toys, leashes,
│   crates, harnesses, bowls, training tools, dog gates, dental, joint
│   supplements, etc.) with 5-10 products each
├── Structured scoring (price, materials, durability, warranty,
│   customer reviews, expert rating from packages/ui ReviewCard)
└── Schema.org Product + Review markup

Week 4
├── Apply to Chewy, Petco, Amazon Associates, FurHaven (10%),
│   Innovet (20-40%), Ollie ($60 flat), all niche brand programs
├── Outbound affiliate routing via cloaked URLs with attribution
└── Email capture for "weekly deals" newsletter

Week 5
├── Cross-link from dog.com / fish.com / lizard.com article-side
│   affiliate placements (every "best X for dogs" article links to
│   petsupplies.com's category page)
├── Build "buyer's guide" content per category (longer-form, ranks for
│   informational queries)
└── Search Console + sitemap submission

Week 6
├── Personalization layer (basic): pet profile (species, age, breed)
│   → filtered/ranked recommendations
└── DNS + GA4
```

### Revenue model

| Source | Per-conversion | 90-day conversions | Revenue |
|---|---|---|---|
| Chewy (4%) | $4-8 | 100-500 | $400-4k |
| Amazon (4-8%) | $2-15 | 300-2,000 | $600-30k |
| Specialty brands (10-40%) | $8-50 | 50-300 | $400-15k |
| FurHaven (10%) | $5-15 | 30-150 | $150-2.3k |

**90-day MRR target: $1-8k (SEO ramp). Year-1 MRR target: $50-200k.**

### Why this is included despite slowest first-90-day revenue

This is **the compounding play**. Every other affiliate placement across
the portfolio flows through petsupplies.com. The first 90 days are
indexation and content population. Months 3-12 are when revenue
compounds.

---

## Combined 90-day outcome

| Play | 90-day MRR (low) | 90-day MRR (high) |
|---|---|---|
| 1. AskTheVet.com | $3,000 | $15,000 |
| 2. DogStaff.com | $2,000 | $10,000 |
| 3. SaddleShop.com + HorseSupplies.com | $1,000 | $5,000 |
| 4. SeniorPetPharmacy.com | $2,000 | $15,000 |
| 5. DogPicture.com | $5,000 | $30,000 |
| 6. PetSupplies.com | $1,000 | $8,000 |
| **Combined** | **$14,000 MRR** | **$83,000 MRR** |

**$168k-$996k ARR run-rate by Day 90.**

That's not $1B revenue. **It's the runway** that funds the Pet Health
Trinity buildout and prevents needing to raise capital before the
strategic plays mature.

---

## What gets pushed out

These 6 quick wins compete for engineering attention with the existing
plan. Things to defer:

- **Original V1 horses.com classifieds buildout** — push to 2027; let
  horsesupplies.com affiliate carry the equine vertical revenue first.
- **Original V1 fish.com Tank Manager SaaS** — push to 2027; let
  fishsupplies.com affiliate + existing fish.com content carry the
  aquarium revenue.
- **Original V1 reptile breeder marketplace** — push to 2027.
- **petfood.com recommendation engine** — push to month 7+ unless tied
  into petsupplies.com directly.

**Things NOT to defer:**
- Carlo's 80 minutes of Dog.com soft-launch operational work (still
  Priority 0, see STATUS.md §4).
- The vets.co AI scribe spike (V1 90-day plan Day 30-60).
- The pet insurance comparison hub on dog.com (V1 Play #1).

The order of operations is:

1. **Days 0-7:** Carlo's ops (Dog.com launch blockers).
2. **Days 7-21:** AskTheVet.com MVP (Quick Win #1) — fastest cashflow.
3. **Days 14-35:** DogStaff.com MVP (Quick Win #2) — fastest B2B revenue.
4. **Days 21-49:** Vets.co AI scribe spike (V1 90-day plan) +
   SeniorPetPharmacy.com content build (Quick Win #4).
5. **Days 28-49:** DogPicture.com (Quick Win #5) — pure cashflow.
6. **Days 35-63:** SaddleShop.com + HorseSupplies.com (Quick Win #3) +
   Pet insurance hub on dog.com (V1 §6.1).
7. **Days 42-90:** PetSupplies.com (Quick Win #6) — the compounder.

---

## Off-vertical decisions

These don't fit the pet portfolio but are real cash decisions:

- **hardmoneyloans.com** — decide by Day 30 whether to build (estimated
  $20-100k/mo passive at maturity) or lease.
- **moneylenders.com, transactionalfunding.com** — list for lease/sale
  on MediaOptions / Brannans by Day 60. Estimated $50-200k/yr passive.
- **employeerecognition.com, employeetraining.com** — same: list for
  lease/sale.
- **weedforum.com** — list for sale; estimated $10-50k one-time.

See [`MONETIZATION-PLAYBOOK-V2.md`](./MONETIZATION-PLAYBOOK-V2.md) §6
for the full off-vertical strategy.

---

_See [`MONETIZATION-PLAYBOOK-V2.md`](./MONETIZATION-PLAYBOOK-V2.md) for
the strategic context, and [`MONETIZATION-PLAYBOOK.md`](./MONETIZATION-PLAYBOOK.md)
for the original 10-domain analysis._
