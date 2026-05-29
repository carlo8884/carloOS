---
from: monetization-architect
to: coo / carlo
status: pending
created: 2026-05-30
in_reply_to: "Carlo strategic decision 2026-05-30 (approved org structure + 8 modifications)"
next_action: "Carlo: confirm §D recommendation on Social Bot timing. COO: review the 30-day affiliate activation sequence in §A."
---

## Context

Carlo's strategic review (2026-05-30) approved the proposed 3-agent
structure (COO + Monetization Architect + Social Bot) with 8 modifications:

1. Social Bot — start with one master social strategy, no per-domain
   accounts, focus on Pinterest / IG / Shorts / TikTok / AI repurposing
2. **Affiliate Wiring — highest priority — start immediately**, focus on
   ~10 specified networks/programs
3. Revenue Analytics — sub-agent, wait for revenue
4. Email Writer — sub-agent
5. Domain Investment — sub-agent, research only, no autonomous spend
6. Marketplace / Subscription — defer
7. Builder Pods — retire over time
8. **Deliverables A-D requested**

This handoff provides A-D inline.

---

## A. Monetization Activation Roadmap

### Days 0-30 — Revenue infrastructure activation (NO content expansion)

Per Carlo's directive: *"Activate revenue infrastructure across the
portfolio before additional content expansion."*

| Days | Activity | Owner | Output |
|---|---|---|---|
| 1-2 | Carlo merges PR #131 (handoff), #133 (funnels + breed pages), #134 (email sequences) | Carlo | Foundation lands on main |
| 1-2 | COO opens "5 new apps scaffold" PR per `ops/handoffs/2026-05-30-monetization-app-scaffold-request.md` | COO | `packages/config` adds 5 SiteIds + themes + app shells |
| 1-3 | Carlo signs up for Skimlinks (5 min web form) | Carlo | Day-1 auto-monetization for all outbound links once env var is set |
| 1-7 | Mon spawns Affiliate Wiring sub-agent (round 1) | Mon | Applications submitted to: Amazon Associates, Impact (Chewy + insurance roster), CJ Affiliate, ShareASale, Awin (SmartPak + Dover), Rakuten (Petco) |
| 3-7 | Carlo creates GA4 properties + Search Console verifications for 10 active sites | Carlo | Analytics flowing |
| 5-10 | Mon lands per-app funnel PRs (askthevet, seniorpets, dogpicture, petsupplies, hardmoneyloans) after COO scaffolds land | Mon | 4 new app revenue surfaces + 1 off-vertical lead-gen surface |
| 7-14 | Carlo wires Mailchimp Automations (7 sequences from PR #134) | Carlo | Email-attributed revenue path active |
| 10-21 | Mon spawns Affiliate Wiring sub-agent (round 2 — direct-apply programs) | Mon | Applications to: Trupanion direct, Healthy Paws direct, Wagmo, Embark, Wisdom Panel, Vetster, Pawp, Dutch, SmartPak, Dover, Riding Warehouse, FurHaven, Innovet, Ollie, Spot & Tango, Holistapet, PrettyLitter, Hepper, Muttropolis, PetWellbeing, NuVet, Allivet, PetMeds, VetRxDirect, EntirelyPets, Marine Depot, Bulk Reef Supply |
| 14-21 | COO spawns Trust/QC sub-agent for FTC + schema audits | COO | Compliance enforced as scale ramps |
| 14-30 | Carlo populates tracking IDs in `affiliate-routes.ts` as approvals land (rolling) | Carlo + Mon | Real revenue attribution begins per program |
| 21-30 | Mon files Domain Investment brief (off-vertical leasing strategy) | Mon | Carlo decides: list 7 off-vertical domains on Sedo/Afternic/DAN? |
| 28-30 | Day-30 milestone review | Carlo + Mon + COO | Decide if Social Bot spawn is unblocked (§D recommendation below) |

**Day-30 revenue milestone: $500-3,000 MRR**

Composition:
- $200-800/mo AdSense (passive — all sites get traffic; 10-50k pageviews/mo per active site)
- $100-500/mo Skimlinks (auto-monetization long tail)
- $200-1,500/mo Amazon Associates (per Architect S5 / S1 traffic projections)
- $0-300/mo direct affiliate (insurance + DNA test slow burn; full conversions land mostly in days 30-90)

### Days 30-60 — Funnel conversion ramp

| Days | Activity | Owner | Output |
|---|---|---|---|
| 30-45 | Mon lands per-app funnel content for askthevet (symptom checker live), seniorpets (30 condition pages live), petsupplies (37 categories live) | Mon | Revenue surfaces fully populated |
| 30-45 | Mon spawns Email Writer sub-agent for new magnet sequences as content ships | Mon | Email funnels keep pace with new lead magnets |
| 30-45 | Carlo + Mon: insurance Phase 2 — Lemonade, Pumpkin, ManyPets quote API integration on `/pet-insurance` quiz results | Carlo + Mon | 2-3× conversion lift on pet insurance affiliate |
| 30-60 | Affiliate Wiring sub-agent: weekly performance audits, replace bottom-decile links | Mon | Continuous optimization |
| 45-60 | Carlo decides on Social Bot spawn (per §D recommendation) | Carlo | Social Bot either spawned now or deferred to Day 60 |
| 45-60 | Mon submits Mediavine application for dog.com (after 50k sessions/mo crosses) | Mon | RPM upgrade from $2-8 (AdSense) to $25-50 (Mediavine) |
| 50-60 | Mon lands hardmoneyloans.com funnels (if Carlo approves off-vertical) | Mon | $200-600/lead potential activates |

**Day-60 revenue milestone: $3,000-12,000 MRR**

Composition:
- $500-2,000/mo AdSense (traffic ramping)
- $300-1,500/mo Skimlinks + Amazon (compounding SEO)
- $1,000-5,000/mo pet insurance affiliate (first wave of conversions land)
- $0-1,500/mo hardmoneyloans (if approved + first 5-10 funded loans)
- $200-1,000/mo DTC pet food affiliate (The Farmer's Dog, Ollie, Spot & Tango)
- $0-1,000/mo DNA testing affiliate (Embark + Wisdom Panel)

### Days 60-90 — Compound + scale decision

| Days | Activity | Owner | Output |
|---|---|---|---|
| 60-75 | Mon spawns Revenue Analytics sub-agent (if MRR > $5k) | Mon | `/dashboard/revenue` ships, weekly insight reports |
| 60-75 | Mediavine approval lands (typical 14-day review); dog.com display revenue RPM jumps 3-5× | Mon | $2-8 RPM → $25-50 RPM |
| 60-90 | Affiliate Wiring sub-agent: apply to Mediavine, Raptive (100k pageviews threshold) for second-tier sites | Mon | Display ad RPM ladder per site |
| 70-90 | Domain Investment sub-agent files lease/sale strategy for 7 off-vertical domains (no spending authority — recommendations only) | Mon | Carlo decides which to list, on which marketplace |
| 75-90 | Strategic decision point: which marketplaces / subscriptions get approved for Day-90+ build? | Carlo | Triggers next phase |
| 80-90 | Day-90 milestone review | Carlo + Mon + COO | Decide on next 90-day plan |

**Day-90 revenue milestone: $15,000-50,000 MRR**

Composition (combined across portfolio):
- $2,000-8,000/mo display ads (Mediavine + AdSense)
- $1,000-4,000/mo Skimlinks + Amazon (compound)
- $3,000-15,000/mo pet insurance affiliate (Phase 2 quote APIs + senior insurance)
- $0-8,000/mo hardmoneyloans lead gen (state-by-state SEO ramping)
- $1,500-5,000/mo DTC pet food + senior Rx affiliate
- $500-3,000/mo DNA testing affiliate (51 breed pages indexed by then)
- $1,000-5,000/mo email-attributed (insurance, DNA, product recommendations)
- $0-5,000/mo off-vertical domain lease (one or two land in 90 days realistic)
- $0-2,000/mo AskTheVet premium membership (if launched at Day-75+ with 5k+ subs)

---

## B. Affiliate Program Master List

Organized by network → priority tier → applicable sites. Tiered as **T1**
(apply Day 1-7), **T2** (apply Day 7-21), **T3** (apply Day 21-30+).

### Networks to sign up for (one-time, ~10 min each, no calls)

| Tier | Network | Why | Programs unlocked |
|---|---|---|---|
| **T1** | **Skimlinks** | Auto-affiliate every outbound link site-wide once script tag drops | 2,500+ merchants |
| **T1** | **Amazon Associates** | Largest catalog; 24-48h approval; need 3 sales in 180d to stay active | Amazon direct |
| **T1** | **Impact.com** | Pet insurance + Chewy + Embark + DNA + much else | Chewy, Embark Vet, Lemonade Pet, Pumpkin, ManyPets, Pets Best, Spot, Fetch by The Dodo, Vetster, Marine Depot, EntirelyPets, more |
| **T1** | **CJ Affiliate (Commission Junction)** | PetMeds, Basepaws (Zoetis), smaller pet programs | PetMeds, Basepaws, niche pet brands |
| **T1** | **ShareASale** | Pet niche specialty programs | PetWellbeing, Wagmo, NuVet (some), other |
| **T2** | **Awin** | Equestrian — SmartPak + Dover + Schneider; some pet | SmartPak Equine, Dover Saddlery, Schneider Saddlery, Greenhawk |
| **T2** | **Rakuten Advertising** | Petco (no Impact), some pet brands | Petco, additional pet specialty |
| **T2** | **Pepperjam (Partnerize)** | Some pet brands; smaller volume | Various |
| **T2** | **Refersion** | Indie brands often run on this | Various pet specialty |
| **T3** | **FlexOffers** | Aggregator network; catch-all | Various; useful for the long tail |

### Programs by category (apply after network approval lands)

#### Pet retailers (T1)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Amazon Associates | Direct | 4-8% by category | All 15 sites |
| Chewy Partners | Impact | $15 first-customer + Autoship recurring | dog-com, vets-co, fish-com, lizard-com, ferret-com, petfood-com, petfoods-com, askthevet, seniorpets, petsupplies |
| Petco | Rakuten | 2-10% | dog-com, fish-com, lizard-com, ferret-com, askthevet, seniorpets, petsupplies |
| PetSmart | (varies) | Varies | dog-com, fish-com, lizard-com, petsupplies |

#### Pet insurance — dog/cat (T1 critical path)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Lemonade Pet | Impact | $40-60/policy | dog-com, vets-co, askthevet, seniorpets |
| Pumpkin Pet | Impact | $50-80/policy | dog-com, vets-co, askthevet, seniorpets |
| ManyPets | Impact | $50-80/policy | dog-com, vets-co, askthevet, seniorpets |
| Embrace | Direct or Impact | $40-60/policy | dog-com, vets-co, askthevet, seniorpets |
| Spot | Direct or Impact | $40-70/policy | dog-com, vets-co, askthevet, seniorpets |
| Fetch by The Dodo | Impact | $50-80/policy | dog-com, vets-co, seniorpets |
| Pets Best | Impact | $40-70/policy | dog-com, vets-co, seniorpets |
| Trupanion | Direct | $60-80/policy | dog-com, vets-co, askthevet, seniorpets |
| Healthy Paws | Direct | $40-60/policy | dog-com, vets-co, seniorpets |
| ASPCA Pet Health | Direct | $40-60/policy | dog-com, vets-co, seniorpets |
| Figo Pet | Direct or Impact | $50-70/policy | dog-com, vets-co |
| MetLife Pet | Direct | $40-60/policy | dog-com, vets-co |
| Wagmo (wellness) | ShareASale | $30-50/signup | dog-com, vets-co |

#### Equine insurance (T2)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Markel Equine | Direct (lead gen partnership) | $50-200/lead | horses-com, saddle-com |
| Great American Insurance Group | Direct | Negotiated | horses-com |
| Equisure | Direct | Negotiated | horses-com |
| Marshall + Sterling Equine | Direct | Negotiated | horses-com, saddle-com |
| Sentinel Risk Equine | Direct | Lead gen | horses-com |

#### Equestrian retail (T2)

| Program | Network | Commission | Sites |
|---|---|---|---|
| SmartPak Equine | Awin | 5% | saddle-com, horses-com |
| Dover Saddlery | Awin | 6% | saddle-com, horses-com |
| Riding Warehouse | Direct | 3-7% | saddle-com, horses-com |
| Schneider Saddlery | Awin | 5-8% | saddle-com, horses-com |
| Greenhawk | Direct | varies | saddle-com, horses-com |
| State Line Tack | Direct | varies | saddle-com, horses-com |
| Big Dee's Tack | Direct | varies | saddle-com, horses-com |
| Adams Horse Supply | Direct | varies | horses-com |

#### Vet telehealth — vet referral programs (T1)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Vetster | Impact | $5-30/booking | askthevet, dog-com, vets-co |
| Pawp | Direct | $5-30/booking + membership | askthevet, dog-com |
| Dutch | Direct | $5-30/booking | askthevet, dog-com |
| AirVet | Direct | $5-20/booking | askthevet, dog-com |

#### Pet DNA testing (T1)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Embark Vet | Impact | $10-25/test | dog-com (51 breed pages), askthevet, seniorpets |
| Wisdom Panel (Mars) | Impact | $8-18/test | dog-com, askthevet, seniorpets |
| Basepaws (Zoetis — cats) | CJ | $10-20/test | seniorpets (cat section), dog-com (cat callout) |

#### Pet pharmacy / Rx (T2)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Chewy Pharmacy | Impact (within Chewy) | 4% | dog-com, vets-co, askthevet, seniorpets |
| Allivet | Direct | 8-10% | seniorpets, askthevet |
| PetMeds | CJ Affiliate | 7% | dog-com, askthevet, seniorpets |
| VetRxDirect | Direct | 5-10% | askthevet, seniorpets |
| EntirelyPets | Impact | 8% | petsupplies, askthevet, seniorpets |
| 1800PetMeds | CJ | 6% | dog-com, askthevet, seniorpets |

#### Pet specialty brands (T2)

| Program | Network | Commission | Sites |
|---|---|---|---|
| FurHaven (beds) | Impact | 10% (9.26% CR) | dog-com, petsupplies |
| Innovet Pet (CBD) | Direct | 20-40% | dog-com, seniorpets |
| Ollie (fresh food) | Impact | $60/sale | dog-com, petsupplies, petfood-com |
| Spot & Tango | Direct | $45/sale | dog-com, petsupplies, petfood-com |
| The Farmer's Dog | Impact (Skimlinks fallback) | ~$30-60/sale | dog-com, petsupplies, petfood-com |
| Holistapet (CBD) | Direct | 35% | dog-com, askthevet, seniorpets |
| PrettyLitter | Direct | 15% + recurring | seniorpets, petsupplies (cat) |
| Hepper | Direct | 8-10% monthly recurring | dog-com, petsupplies |
| Muttropolis (premium dog) | Direct | 120-day cookie | dog-com (luxury tier) |
| PetWellbeing | ShareASale | 25% (senior pets) | seniorpets, dog-com (senior section), askthevet |
| NuVet Labs | Direct | 15-30% | dog-com, seniorpets |
| Zesty Paws | Amazon-only typically | via Amazon | dog-com, petsupplies |

#### Pet training courses (T2)

| Program | Network | Commission | Sites |
|---|---|---|---|
| SpiritDog Training | ClickBank / Direct | 40% | dog-com, askthevet |
| Doggy Dan (The Online Dog Trainer) | ClickBank | 50% | dog-com |
| K9 Training Institute | Direct | Varies | dog-com |
| Brain Training for Dogs | ClickBank | 75% initial + recurring | dog-com |
| BarkBox training subscription | (varies) | $18/sub | dog-com |

#### Aquarium specialty (T2)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Bulk Reef Supply | Direct | Varies | fish-com |
| Marine Depot | Impact | 5-10% | fish-com |
| LiveAquaria | Direct | 4-7% | fish-com |
| BRStv (Bulk Reef Supply video) | Direct | Varies | fish-com |

#### Reptile specialty (T2)

| Program | Network | Commission | Sites |
|---|---|---|---|
| JoshsFrogs | Direct | Varies | lizard-com |
| BigAppleHerp | Direct | Varies | lizard-com |
| ReptileSupply | Direct | Varies | lizard-com |
| Zoo Med (via Amazon) | Amazon | 4-8% | lizard-com |

#### Ferret specialty (T3)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Marshall Pet Products | Direct | Varies | ferret-com |
| Wysong | Direct | Varies | ferret-com |
| Carniwhole | Direct | Varies | ferret-com |

#### Pet financing (T2 — for vet care content)

| Program | Network | Commission | Sites |
|---|---|---|---|
| CareCredit | Direct lead gen | Negotiated | vets-co, dog-com, seniorpets |
| Scratchpay | Direct | Lead-based | vets-co, dog-com |
| Cherry (vet financing) | Direct | 10-30% per funded loan | dog-com, vets-co |
| Wagmo Pay (vet credit) | Direct | Varies | vets-co |

#### Hard money lenders (T2 — hardmoneyloans.com only)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Kiavi (LendingHome) | Direct or LendingTree | $200-600/lead, $1k-5k/funded | hardmoneyloans |
| RCN Capital | Direct | Lead-based | hardmoneyloans |
| Lima One Capital | Direct | Lead-based | hardmoneyloans |
| Anchor Loans | Direct | Lead-based | hardmoneyloans |
| Groundfloor | Direct | Lead-based | hardmoneyloans |
| CrossCountry Mortgage | Direct | Lead-based | hardmoneyloans |
| Jet Lending | Direct | Lead-based | hardmoneyloans |
| Civic Financial | Direct | Lead-based | hardmoneyloans |

#### Software / SaaS referrals (T3 — for vets-co B2B audience)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Gingr (pet pro SaaS) | Direct partner program | Varies | vets-co, dog-com (pet sitter) |
| PetDesk | Direct | Varies | vets-co |
| Time to Pet | Direct | Varies | vets-co |
| Precise Petcare | Direct | Varies | vets-co |
| Vagaro (booking) | Direct | Lead-based | vets-co, dog-com |

#### Marketplace referrals (T2)

| Program | Network | Commission | Sites |
|---|---|---|---|
| Adopt-a-Pet | Direct | $1-3/referral | dog-com, vets-co, ferret-com, ferrets-com |
| Petfinder | Not affiliate (free shelter listing) | $0 | (use editorial cross-link only) |
| Rover (pet sitting) | (limited program) | Varies | dog-com (pet sitter section) |
| AKC TailTrax / AKC Reunite | Direct | $1-10/registration | dog-com |

### Total program coverage at full activation

**~70-90 programs across 15 sites.** Realistic approval rate in 30 days:
50-60% (T1 mostly approved by day 30, T2 trickles into day 30-60, T3
by day 60-90).

---

## C. Revenue Infrastructure Checklist

Tracked by Carlo. Mon files briefs when items unblock; Affiliate Wiring
sub-agent does the integration work.

### Affiliate networks (T1 critical path — Days 0-7)

- [ ] **Skimlinks** account created + publisher ID set in Vercel env vars on all 10 active sites
- [ ] **Amazon Associates** approved (need 3 qualifying sales in 180 days to stay active — first AdSense ad revenue accelerates this)
- [ ] **Impact.com** account approved
- [ ] **CJ Affiliate** account approved
- [ ] **ShareASale** account approved
- [ ] **Awin** account approved (Days 7-21)
- [ ] **Rakuten Advertising** account approved (Days 7-21)
- [ ] Per-program direct applications submitted (T1 = 10 programs by Day 14; T2 = 30+ programs by Day 30)

### Analytics (Days 0-14)

- [ ] GA4 properties created for all 10 active sites (10 × `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- [ ] GA4 properties created for the 5 new app SiteIds after COO scaffold
- [ ] Search Console verified per site (10 + 5 = 15)
- [ ] Search Console sitemaps submitted per site
- [ ] Supabase `events` table active per `packages/db/src/schema.sql`
- [ ] Server-side click logging extended in `/go/[vendor]/[sku]/route.ts` to write to Supabase events table (currently `console.log`-only per COO PR #124)
- [ ] Per-site GA4 event configuration: `affiliate_click`, `email_signup`, `lead_form_submit`

### Tracking (Days 7-30 rolling)

- [ ] Per-vendor PLACEHOLDER → real tracking ID swap in `affiliate-routes.ts` (one site at a time, as each program approves)
- [ ] UTM parameters on all outbound `/go/<vendor>/<sku>?s=<source>` URLs (architect-canonical pattern; already in funnel pages)
- [ ] Source attribution to originating page slug (via `?s=` param)
- [ ] First-touch attribution model in Supabase (`events.user_session_id` + first `page_view`)
- [ ] Last-touch attribution model in Supabase (`events.session_id` joined with last `affiliate_click`)
- [ ] Cross-portfolio attribution (a user who first lands on fish.com → later converts via dog.com counts toward both)
- [ ] Webhook ingestion for affiliate networks that support it (Impact, CJ — others are dashboard-only)

### Email capture (Days 7-21)

- [ ] Mailchimp audiences per site (10 active sites; 5 more for new apps later)
- [ ] `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true` per site in Vercel env
- [ ] `MAILCHIMP_API_KEY` + `MAILCHIMP_AUDIENCE_ID` per site in Vercel env (server-only)
- [ ] Mailchimp Automations: 7 active sequences from PR #134 wired into Mailchimp Journeys
- [ ] Lead magnet thank-you pages live on dog.com (from PR #133: `/thanks/puppy-schedule`, `/thanks/insurance-comparison`, `/thanks/dna-test-comparison`)
- [ ] Email engagement tracking — open/click capture writes back to Supabase `events`
- [ ] Email-attributed conversions (Mailchimp click → `/go/<vendor>/<sku>` redirect carries source param)

### Attribution model (Days 21-60)

- [ ] Event schema documented: `event_type`, `site_id`, `vendor`, `sku`, `source`, `session_id`, `user_id` (optional), `attributed_revenue_cents` (filled by reverse-attribution from network reports)
- [ ] Conversion event types defined: `affiliate_click` (logged), `affiliate_conversion` (webhook from networks where supported; manual reconciliation from dashboards where not)
- [ ] Network webhook integrations: Impact (yes), CJ (yes), ShareASale (yes), Awin (yes), Rakuten (limited), Amazon (no — dashboard-only)
- [ ] Per-site revenue rollup view in Supabase (`revenue_events` materialized view)
- [ ] Multi-channel attribution: source page → email touch → affiliate conversion path tracked

### Display ads (Days 1-90 ladder)

- [ ] **AdSense** account approved (Day 1-7 application; 1-7 day review)
- [ ] **AdSense** publisher ID + slot IDs in Vercel env per site
- [ ] Track each site's pageview count weekly toward Mediavine threshold (50k sessions/mo)
- [ ] Apply for **Mediavine** when first site crosses 50k sessions/mo (typically dog.com first; Day 45-60 target)
- [ ] Apply for **Raptive** (formerly AdThrive) when first site crosses 100k pageviews/mo (Day 75-90 target)
- [ ] **Ezoic** as intermediate option for sites in 10-50k sessions/mo range

### Conversion-rate optimization (Days 30-90)

- [ ] Pet insurance Phase 2 — Lemonade / Pumpkin / ManyPets quote API integration on `/pet-insurance/quiz` (2-3× conversion lift)
- [ ] A/B test framework for CTA copy on top-traffic affiliate pages
- [ ] Heatmap / scroll tracking on top funnels (Microsoft Clarity is free) — optional
- [ ] Email split tests (subject lines, send times) via Mailchimp built-ins

### Compliance + trust (continuous)

- [ ] FTC affiliate disclosure rendering on every page with affiliate links (architecture is in place via COO PR #124)
- [ ] `/disclosure` page reviewed quarterly (Mon files brief if vendor list changes)
- [ ] Trust-bar audit per QC-STANDARDS.md §1 — Trust/QC sub-agent under COO runs on every PR
- [ ] FTC + EU/UK affiliate disclosure copy review (if international traffic warrants — defer until then)

---

## D. Final Recommendation on Social Bot Timing

### The question

Should Social Bot be created immediately, or should Monetization
Architect continue operating alone for the next 30 days and revisit
after affiliate activation?

### Recommendation

**Defer Social Bot until Day 30. Revisit at the Day-30 milestone review.**

### Why

1. **Carlo's own stated priority overrides my earlier recommendation.**
   Carlo specified: *"Activate revenue infrastructure across the portfolio
   before additional content expansion."* Social Bot is content
   expansion (different surface, but still adds production load).
   Affiliate activation is the gating revenue activator. Spawning Social
   Bot now violates the stated sequencing.

2. **Social traffic without affiliate plumbing converts at near-zero.**
   Traffic Social Bot drives to funnels in Days 1-30 lands on pages whose
   tracking IDs are mostly still PLACEHOLDER. Conversions wouldn't get
   attributed even when they happen. Better to wait until at least T1 + T2
   affiliate approvals land (Day 21-30) so social-driven traffic
   actually monetizes.

3. **Coordination cost is real and Carlo's time is the binding constraint.**
   The 30 days ahead are already heavily loaded for Carlo (Mailchimp
   Automations × 7, GA4 × 15, Skimlinks signup, ~10 affiliate network
   applications, ~40 individual program applications, tracking ID rollout,
   merge of 3+ pending PRs, COO scaffold review). Adding a third
   persistent agent that needs daily/weekly attention competes with the
   Day-1-30 work that produces revenue.

4. **Day-30 attribution data sharpens Social Bot's charter.**
   By Day 30 we'll know which funnels are converting (insurance? DNA?
   senior pet Rx? hard money?). Social Bot launched at Day 30 has a
   data-informed content strategy from the start, instead of guessing
   in Days 1-30 about which content/funnel pairing to amplify.

5. **Pinterest in particular benefits from the wait.**
   Pinterest content benefits from being repurposed from existing site
   content. By Day 30 the portfolio will have ~250 new SEO pages from
   the architect's funnel work (51 DNA breed pages, 30 insurance breed
   pages, 30 senior conditions, 22 askthevet, 49 petsupplies, 7
   thank-you, 8 hub pages, 40 fish species, etc.). Pinterest-formatted
   pins built from these pages will outperform any Day-1 content built
   from a thin foundation.

### What I'll do in the meantime

In Days 1-30 the architect spawns Affiliate Wiring as a Mon sub-agent
(immediately, per Carlo's priority) and handles all 4 items A/B/C plus
the funnel PR queue, plus files the Domain Investment brief (research
only, no spend authority).

If at Day 30 attribution data shows funnels converting well, Social Bot
spawn is the right next move. If attribution data shows weak conversion,
the priority probably shifts to funnel CRO before adding Social Bot
traffic firehose.

### Reversibility

If you want Social Bot earlier, the spawn is one chat session. The
charter from my earlier message is ready to paste. Cost of changing
this decision later is low. Cost of spawning prematurely is real
(coordination overhead + suboptimal early content strategy).

---

## Definition of done

This handoff is "done" when:

1. COO acknowledges the Day-0-30 sequence (especially the Affiliate
   Wiring sub-agent spawn signal and the new-apps scaffold PR).
2. Carlo confirms §D recommendation (defer Social Bot to Day 30) or
   overrides it.
3. Mon spawns the Affiliate Wiring sub-agent immediately and starts
   the T1 network applications.
4. Day-30 milestone review on the calendar to revisit Social Bot spawn.

---

_Filed by: Monetization Architect_
_Branch: claude/monetization-activation-roadmap_
_For: COO + Carlo_
