---
from: monetization-affiliate-wiring-bot (sub-agent of Monetization Architect)
to: carlo
status: pending
created: 2026-05-30
blockers: none — Carlo's web-form work only, no bot dependency
next_action: "Carlo: walk T1 application checklist Days 1-7. Drop tracking IDs into Vercel env vars per Section 3 as approvals land."
lane: monetization (per ops/policies/bot-coordination.md §2)
---

# Affiliate Wiring — Round 1 Application Checklist (2026-05-30)

**Purpose.** Round 1 of the affiliate wiring effort. The repo side of the work
(URL templates, env-var-driven tracking-ID substitution, per-site approved-vendor
allow-lists) has been shipped on branch `affiliate-wiring/round-1-2026-05-30`.
**This document is the human side:** the exact web URLs Carlo must visit, in
priority order, and the env vars to populate in Vercel once each approval lands.

**No phone calls. No outbound sales.** Every program below is a self-serve web
form. If a program later turns out to require a call, skip it and move on — we
keep the strict "automation, leverage, repeatability, low maintenance, no calls"
filter from `MONETIZATION-ARCHITECT.md` final line.

**Tracking-ID hygiene.** Per `ops/policies/bot-coordination.md` §6, real
tracking IDs **never get committed in plaintext**. They live in Vercel project
environment variables; the `/go/[vendor]/[sku]` route handler now substitutes
them at runtime. The `affiliate-routes.ts` files carry the URL templates with
`PLACEHOLDER` literals — the handler swaps `PLACEHOLDER` for the matching
`AFF_<VENDOR>_TAG` env var (uppercased vendor key, hyphens → underscores).
If the env var is unset, the redirect still works; only the attribution tag
is missing. Safe failure mode.

---

## TL;DR

- Apply to the **T1 list (Section 1)** Days 1-7. These are the 5 networks that
  cover ~70% of the portfolio's revenue surface in Year 1 (Skimlinks, Amazon,
  Impact.com, CJ, ShareASale).
- Apply to the **T2 list (Section 2)** Days 7-21. These fill in the equestrian
  + UK-coverage gaps (Awin, Rakuten).
- As each approval lands, drop the tracking ID into the matching Vercel env var
  per **Section 3 (Tracking ID swap list)**. No code changes needed — the route
  handler reads from env at every request.
- The branch is open. **Do not yet open the PR** — Monetization Architect (parent
  bot) will review the branch and open it after a sanity pass.

---

## Section 1 — Tier 1 networks (Days 1-7)

These five carry the bulk of the portfolio's affiliate revenue. Apply in this
priority order. Most approvals are 24-72h auto; CJ + ShareASale require a tax
form before payout.

### 1.1 Skimlinks — Days 1-2 (highest leverage, broadest catalog)

- [ ] **Apply at:** https://skimlinks.com/signup
- **Approval timeline:** 24-72h. Auto-approval is common for sites with any
  recurring traffic and a clear vertical; rejection is rare. If declined,
  reapply with a stronger "about" page describing editorial mission.
- **What's required:** email, primary site URL (use the strongest property —
  recommend **dog.com** as the lead application; you can add the other 9 sites
  inside the dashboard after approval), brief description of editorial niche,
  tax form (W-9 US / W-8BEN international), payment method (PayPal, Payoneer,
  or bank ACH).
- **Multi-site handling:** Skimlinks treats every URL as one "publisher" by
  default. After approval, add each of the other 9 sites in
  Dashboard → Sites → Add Site. Each gets its own SubID — that SubID is the
  tracking ID we will store per site.
- **Tracking ID format:** Skimlinks issues a numeric publisher ID like
  `123456` plus an optional XID per site. Use the XID as the tag.
- **Where to find it post-approval:** Skimlinks Dashboard → Account →
  Settings → "Your Publisher ID" + per-site XID.
- **Env var pattern (per site):** `AFF_SKIMLINKS_TAG`

### 1.2 Amazon Associates — Days 1-2 (auto-approval, foundational)

- [ ] **Apply at:** https://affiliate-program.amazon.com/
- **Approval timeline:** 24-48h auto-approval, but the **180-day probation
  rule** applies: Amazon will revoke the account if it doesn't see 3 qualifying
  sales within 180 days. Drive at least 3 clicks-that-convert in the first
  90 days to lock in the long-term account.
- **What's required:** Amazon account login, list of all 10 sites (you can
  enter them all during signup — Amazon allows multiple traffic sources per
  Associate ID), tax form (W-9 / W-8BEN), payment method (direct deposit, gift
  card, or check).
- **Tracking ID per-site rule:** Amazon issues one master Associate ID like
  `username-20`. To get per-site attribution, **create one tracking ID per
  site** in: Amazon Associates Central → Account Settings → Manage Your
  Tracking IDs → Add Tracking ID.
- **Recommended IDs (matches the AFF_AMAZON_TAG env var per site):**
  `dogcom-20`, `vetsco-20`, `fishcom-20`, `lizardcom-20`, `saddlecom-20`,
  `horsescom-20`, `petfoodcom-20`, `petfoodscom-20`, `ferretcom-20`,
  `ferretscom-20`. (Final IDs may have a numeric suffix if a string is
  already taken — Amazon will offer the next available variant.)
- **Where to find it post-approval:** Associates Central → Account Settings →
  Manage Your Tracking IDs.
- **Env var pattern (per site):** `AFF_AMAZON_TAG`

### 1.3 Impact.com — Days 2-4 (Chewy, Lemonade, Pumpkin, ManyPets, Fetch — the big tent)

- [ ] **Apply at:** https://app.impact.com/secure/login/loginInner.ihtml
  - Use the "**Sign Up as a Partner**" link on the login page (not the
    marketer signup — we are the publisher / partner).
  - Direct partner-signup URL (in case the login page UI changes):
    https://app.impact.com/campaign-promo-signup/Impact.brand?execution=e1s1
- **Approval timeline:** Impact itself approves in 24h. Each individual program
  inside Impact (Chewy, Lemonade, Pumpkin, etc.) is a separate per-merchant
  approval — typically 3-7 days each. **Apply to each merchant individually**
  inside the Impact dashboard after your Impact account is live.
- **What's required:** company name (use "carloOS LLC" or Carlo's chosen legal
  entity), primary website URL (recommend dog.com), tax info, payment method
  (Impact pays via direct deposit, check, BACS, or wire), media kit (Impact
  asks for screenshots / traffic stats — provide what we have honestly; "early
  stage editorial portfolio" is fine).
- **Programs to apply for INSIDE Impact (in priority order — each requires its
  own per-merchant application click):**
  1. **Chewy Partners** — covers Chewy.com + Chewy Pharmacy. Critical for dog,
     fish, lizard, ferret, petfood, petfoods.
  2. **Lemonade Pet** — pet insurance, API available.
  3. **Pumpkin Pet Insurance** — pet insurance, API available.
  4. **ManyPets** — pet insurance, API available.
  5. **Fetch by The Dodo** — pet insurance.
  6. **Spot Pet Insurance** — pet insurance.
  7. **Embrace Pet Insurance** — pet insurance.
  8. **Trupanion** — pet insurance, highest per-policy bounty.
  9. **Healthy Paws** — pet insurance.
  10. **MetLife Pet** — pet insurance.
  11. **Figo Pet** — pet insurance.
  12. **Wagmo** — wellness plans.
  13. **Pets Best** — pet insurance.
  14. **Vetster** — telehealth referral.
  15. **Dutch** — telehealth referral.
  16. **AirVet** — telehealth referral.
  17. **Pawp** — telehealth + insurance bundle.
  18. **Ollie** — DTC fresh dog food.
  19. **The Farmer's Dog** — DTC fresh dog food.
  20. **Spot & Tango** — DTC fresh dog food.
  21. **Embark Vet** — DNA testing.
  22. **CareCredit** — pet financing.
- **Tracking ID format:** Impact issues a per-program `actionTrackerId` (numeric)
  plus a per-publisher `mediaPartnerId`. The substitution we do in the URL
  template uses a single composite tag per vendor: the value the merchant gives
  you in the program's "deep link generator." Copy that exact value into the
  matching env var.
- **Where to find it post-approval:** Impact dashboard → Brands → [merchant] →
  Tools → "Tracking" → Get tracking link. Each vendor has its own ID.
- **Env var pattern (per site, per vendor):** see Section 3 for the per-site
  list. Examples: `AFF_CHEWY_TAG`, `AFF_LEMONADE_TAG`, `AFF_TRUPANION_TAG`,
  `AFF_HEALTHY_PAWS_TAG`, etc.

### 1.4 CJ Affiliate (Commission Junction) — Days 3-5

- [ ] **Apply at:** https://www.cj.com/publisher-signup
- **Approval timeline:** 24-72h for CJ itself. Each advertiser inside CJ is a
  separate approval (often 3-10 days). CJ is stricter about minimum traffic
  than Impact — be honest in the application; CJ tolerates new sites if the
  niche is clear.
- **What's required:** legal entity name, primary website URL, niche
  description, tax form (W-9 / W-8BEN), payment method (direct deposit or
  check; minimum payout is $50 direct deposit / $100 check).
- **Programs to apply for INSIDE CJ (in priority order):**
  1. **Petco** (pet supplies generalist — important for fish + dog).
  2. **PetSmart** (covers PetSmart Training and Hotel programs too).
  3. **Wisdom Panel** (Mars Petcare — DNA testing).
  4. **Basepaws** (Zoetis — cat DNA, secondary use case).
  5. **Riding Warehouse** (equestrian — horses + saddle).
  6. **State Line Tack** (equestrian — horses + saddle).
  7. **Greenhawk** (equestrian — horses + saddle; CJ or Awin depending on
     program activation, apply both).
- **Tracking ID format:** CJ issues a numeric `PID` (publisher ID) like
  `1234567`. Per-merchant links also include an `AID` (advertiser ID). The
  `PID` is the part we treat as the tag (`AFF_PETCO_TAG`, etc.).
- **Where to find it post-approval:** CJ Dashboard → Account → "Publisher ID"
  for the PID. Per-merchant tracking links: Advertisers → [merchant] → Links →
  Get Code.
- **Env var pattern (per site, per vendor):** `AFF_PETCO_TAG`,
  `AFF_PETSMART_TAG`, `AFF_WISDOM_PANEL_TAG`, `AFF_RIDING_WAREHOUSE_TAG`,
  `AFF_STATE_LINE_TACK_TAG`.

### 1.5 ShareASale — Days 4-6

- [ ] **Apply at:** https://www.shareasale.com/info/affiliates/
- **Approval timeline:** 24-72h for ShareASale itself. Each individual merchant
  is a separate approval (typically 1-5 days; many are auto-approve).
- **What's required:** website URL, email, password, country, payment
  preference (direct deposit US, check, or wire international), tax form when
  earnings approach the $600 1099 threshold.
- **Programs to apply for INSIDE ShareASale (in priority order):**
  1. **SmartPak Equine** (equestrian — horses + saddle; the workhorse for the
     two highest-RPM sites in the portfolio).
  2. **Dover Saddlery** (equestrian).
  3. **Schneiders Saddlery** (equestrian).
  4. **Big Dee's Tack** (equestrian).
  5. **FurHaven** (dog beds — dog).
  6. **Innovet Pet** (verify the BBB rating before activating — flagged in
     §5.6 because some pet-CBD vendors are in the "Carlo's prior approval"
     bucket per policy. **Pause this application until COO/Carlo confirm.**).
  7. **Holistapet** — same caveat as Innovet (CBD-adjacent, requires Carlo's
     prior approval per `bot-coordination.md` §5.6. **Pause.**).
  8. **Hepper** (premium dog goods).
  9. **Muttropolis** (premium dog goods, 120-day cookie).
  10. **PetWellbeing** (senior pet supplements — dog, ferret).
  11. **NuVet** (supplements — dog).
  12. **SpiritDog Training** (digital training — dog).
  13. **Brain Training for Dogs** (digital training — dog).
  14. **Allivet** (pet pharmacy — dog, ferret).
  15. **PetMeds / 1800PetMeds** (pet pharmacy — dog, ferret).
  16. **VetRxDirect** (pet pharmacy).
  17. **EntirelyPets** (pet pharmacy).
  18. **Marshall Pet Products** (ferret).
  19. **Wysong** (ferret + dog).
  20. **Bulk Reef Supply** (fish).
  21. **LiveAquaria** (fish).
  22. **Josh's Frogs** (lizard / amphibian).
  23. **Big Apple Herpetological** (lizard / reptile).
  24. **Reptile Supply Co** (lizard).
- **Tracking ID format:** ShareASale issues an `afftrack` parameter that you
  set per-merchant. Each merchant link has the `userid` (your publisher ID,
  numeric) pre-baked; the `afftrack` is the per-site / per-campaign tag we
  set ourselves. We will use the merchant slug as the env-var value.
- **Where to find it post-approval:** ShareASale Dashboard → Account → Site
  Profile → "Affiliate ID" for the numeric publisher ID. Per-merchant links:
  Merchants → [merchant] → Get Links.
- **Env var pattern (per site, per vendor):** `AFF_SMARTPAK_TAG`,
  `AFF_DOVER_TAG`, `AFF_SCHNEIDER_TAG`, `AFF_FURHAVEN_TAG`,
  `AFF_BIG_DEES_TAG`, `AFF_MARSHALL_TAG`, `AFF_WYSONG_TAG`,
  `AFF_BULK_REEF_SUPPLY_TAG`, `AFF_LIVEAQUARIA_TAG`,
  `AFF_JOSHSFROGS_TAG`, `AFF_BIGAPPLEHERP_TAG`, `AFF_REPTILESUPPLY_TAG`,
  `AFF_SPIRITDOG_TAG`, `AFF_DOGGY_DAN_TAG`, `AFF_BRAIN_TRAINING_TAG`,
  `AFF_FURHAVEN_TAG`, `AFF_HEPPER_TAG`, `AFF_MUTTROPOLIS_TAG`,
  `AFF_PETWELLBEING_TAG`, `AFF_NUVET_TAG`, `AFF_OLLIE_TAG`,
  `AFF_SPOT_TANGO_TAG`, `AFF_FARMERS_DOG_TAG`, `AFF_ALLIVET_TAG`,
  `AFF_PETMEDS_TAG`, `AFF_VETRXDIRECT_TAG`, `AFF_ENTIRELYPETS_TAG`.

---

## Section 2 — Tier 2 networks (Days 7-21)

After T1 is in, these fill the equestrian + UK + alt-network coverage gaps.

### 2.1 Awin — Days 7-10

- [ ] **Apply at:** https://www.awin.com/us/publishers/sign-up
- **Approval timeline:** Awin charges a **$5 refundable deposit** on signup
  (returned with first payout). Approval itself is 1-3 days. Each merchant
  inside Awin is a separate approval.
- **What's required:** website URL, payment method, **$5 deposit** (refunded
  on first payout), tax form.
- **Programs to apply for INSIDE Awin:**
  1. **Etsy** (gift + memorial products — covers pet bereavement crossover
     for ferrets, dog, horse).
  2. **The Farmer's Dog** (if not approved via Impact).
  3. **Greenhawk** (equestrian — confirm whether their program is on Awin or
     CJ; apply on whichever is active).
  4. **Markel** (equine insurance lead gen — verify network).
  5. **Pet Pharmacy brands** (varies — supplemental coverage to ShareASale).
- **Tracking ID format:** Awin issues numeric `affid` + per-merchant `mid`.
  We use the per-merchant tracking link's full ID set as the tag value.
- **Where to find it post-approval:** Awin Dashboard → Account → "Publisher ID"
  for `affid`. Per-merchant: Toolbox → Link Builder.
- **Env var pattern (per site, per vendor):** `AFF_ETSY_TAG`,
  `AFF_MARKEL_TAG`, `AFF_GREENHAWK_TAG`.

### 2.2 Rakuten Advertising — Days 10-14

- [ ] **Apply at:** https://rakutenadvertising.com/publishers/
  - Direct application form (in case the marketing page link changes):
    https://rakutenadvertising.com/publishers/become-a-publisher/
- **Approval timeline:** 3-7 days for Rakuten itself. Stricter than Impact/CJ
  — they want a real site with content. The carloOS portfolio's ~155 published
  pages should pass.
- **What's required:** website URL, traffic stats (use Google Analytics
  estimate when available; honest "early stage editorial" is fine), tax form,
  payment method.
- **Programs to apply for INSIDE Rakuten:**
  1. **Walmart Affiliate** (generalist, covers pet supplies — fallback to
     Amazon).
  2. **Macy's / Nordstrom** (pet costume / seasonal niche — S23).
  3. **Petco** (if not approved via CJ; both networks sometimes run the same
     program — pick the higher-paying or the one that approved you first).
- **Tracking ID format:** Rakuten issues a `u1` SID parameter we can set
  per-site, alongside the publisher-level `sid`.
- **Where to find it post-approval:** Rakuten Dashboard → Account → Profile →
  Publisher ID.
- **Env var pattern (per site, per vendor):** `AFF_WALMART_TAG`,
  `AFF_MACYS_TAG`.

### 2.3 Direct programs — Days 14-21 (rolling, no calls)

These are direct-with-merchant programs (no aggregator network). Each is a
separate web-form signup.

- [ ] **CareCredit referral** (also available via Impact — prefer Impact link
  if approved): https://www.carecredit.com/providers/marketing-resources/
- [ ] **Scratchpay referral:** https://scratchpay.com/affiliate-program (form-
  based, 5-7 days). Env var: `AFF_SCRATCHPAY_TAG`.
- [ ] **Cherry pet financing:** https://withcherry.com/partners (web form).
  Env var: `AFF_CHERRY_TAG`.
- [ ] **ASPCA Pet Insurance** (Crum & Forster — direct affiliate):
  https://www.aspcapetinsurance.com/about-us/affiliate-program/. Env var:
  `AFF_ASPCA_TAG`.
- [ ] **Adams Horse Supply** (direct affiliate):
  https://www.adamshorsesupply.com/affiliates (verify URL on landing; if
  network-mediated, expect ShareASale). Env var: `AFF_ADAMS_HORSE_TAG`.
- [ ] **MarineDepot** (direct or via ShareASale): start at
  https://www.marinedepot.com/affiliate-program. Env var: already exists as
  `AFF_MARINEDEPOT_TAG`.
- [ ] **Adopt-a-Pet referral partnership** (ferrets-com directory pattern,
  not classical affiliate — apply via business@adoptapet.com web form on
  https://www.adoptapet.com/about). Ethical funnel only, no commission.
  Env var: `AFF_ADOPT_A_PET_TAG`.

---

## Section 3 — Tracking ID swap list — populate as approvals land

For each site, every affiliate-routes.ts entry that contains a `PLACEHOLDER`
string maps to one of the env vars below. **As each program is approved, set
the env var in Vercel for that site's project (production + preview scope).**
The `/go/[vendor]/[sku]` route handler reads `process.env.AFF_<VENDOR>_TAG`
at runtime and substitutes it into the URL template. No code deploy needed
to activate a new tracking ID — only an env-var update.

**Env-var naming rule.** Take the vendor key from the affiliate-routes.ts
entry, uppercase it, and replace hyphens with underscores. Prefix with `AFF_`,
suffix with `_TAG`. Examples: `amazon` → `AFF_AMAZON_TAG`, `healthy-paws` →
`AFF_HEALTHY_PAWS_TAG`, `bulk-reef-supply` → `AFF_BULK_REEF_SUPPLY_TAG`.

### Site: dog-com

Env vars to set in Vercel project `dog-com` once approved:

- `AFF_AMAZON_TAG` — from Amazon dashboard (e.g. `dogcom-20`). Referenced by
  the `amazon` route in `apps/dog-com/src/data/affiliate-routes.ts`.
- `AFF_CHEWY_TAG` — from Impact dashboard. Referenced by `chewy`.
- `AFF_TRUPANION_TAG` — from Impact. Referenced by `trupanion`.
- `AFF_HEALTHY_PAWS_TAG` — from Impact. Referenced by `healthy-paws`.
- `AFF_LEMONADE_TAG` — from Impact. Referenced by `lemonade`.
- `AFF_PUMPKIN_TAG` — from Impact. Referenced by `pumpkin`.
- `AFF_MANYPETS_TAG` — from Impact. Referenced by `manypets`.
- `AFF_EMBRACE_TAG` — from Impact. Referenced by `embrace`.
- `AFF_SPOT_TAG` — from Impact. Referenced by `spot`.
- `AFF_FETCH_TAG` — from Impact. Referenced by `fetch`.
- `AFF_PETS_BEST_TAG` — from Impact. Referenced by `pets-best`.
- `AFF_ASPCA_TAG` — direct ASPCA affiliate. Referenced by `aspca`.
- `AFF_FIGO_TAG` — from Impact. Referenced by `figo`.
- `AFF_METLIFE_TAG` — from Impact. Referenced by `metlife`.
- `AFF_WAGMO_TAG` — from Impact. Referenced by `wagmo`.
- `AFF_EMBARK_TAG` — from Impact. Referenced by `embark`.
- `AFF_WISDOM_PANEL_TAG` — from CJ. Referenced by `wisdom-panel`.
- `AFF_VETSTER_TAG` — from Impact. Referenced by `vetster`.
- `AFF_PAWP_TAG` — from Impact. Referenced by `pawp`.
- `AFF_DUTCH_TAG` — from Impact. Referenced by `dutch`.
- `AFF_AIRVET_TAG` — from Impact. Referenced by `airvet`.
- `AFF_SPIRITDOG_TAG` — from ShareASale. Referenced by `spiritdog`.
- `AFF_DOGGY_DAN_TAG` — from ClickBank or direct. Referenced by `doggy-dan`.
- `AFF_BRAIN_TRAINING_TAG` — from ClickBank. Referenced by `brain-training`.
- `AFF_FURHAVEN_TAG` — from ShareASale. Referenced by `furhaven`.
- `AFF_OLLIE_TAG` — from Impact. Referenced by `ollie`.
- `AFF_SPOT_TANGO_TAG` — from Impact. Referenced by `spot-tango`.
- `AFF_FARMERS_DOG_TAG` — from Skimlinks (or direct). Referenced by
  `farmers-dog`.
- `AFF_HEPPER_TAG` — from ShareASale. Referenced by `hepper`.
- `AFF_MUTTROPOLIS_TAG` — from ShareASale. Referenced by `muttropolis`.
- `AFF_PETWELLBEING_TAG` — from ShareASale. Referenced by `petwellbeing`.
- `AFF_NUVET_TAG` — from ShareASale. Referenced by `nuvet`.
- `AFF_CHEWY_PHARMACY_TAG` — from Impact (Chewy umbrella). Referenced by
  `chewy-pharmacy`.
- `AFF_ALLIVET_TAG` — from ShareASale. Referenced by `allivet`.
- `AFF_PETMEDS_TAG` — from ShareASale. Referenced by `petmeds`.
- `AFF_VETRXDIRECT_TAG` — from ShareASale. Referenced by `vetrxdirect`.
- `AFF_ENTIRELYPETS_TAG` — from ShareASale. Referenced by `entirelypets`.
- `AFF_1800PETMEDS_TAG` — from ShareASale. Referenced by `pet-meds-1800`.
- `AFF_CARECREDIT_TAG` — from Impact. Referenced by `carecredit`.
- `AFF_SCRATCHPAY_TAG` — direct. Referenced by `scratchpay`.
- `AFF_CHERRY_TAG` — direct. Referenced by `cherry`.

> Pre-existing entries `impact` and `awin` keep their existing env-var pattern
> (`AFF_IMPACT_TAG`, `AFF_AWIN_TAG`) for the catch-all per-network deep links.

### Site: vets-co (INSURANCE ONLY — policy §5)

Env vars to set in Vercel project `vets-co`:

- `AFF_TRUPANION_TAG` — from Impact. Referenced by `trupanion`.
- `AFF_HEALTHY_PAWS_TAG` — from Impact. Referenced by `healthy-paws`.
- `AFF_EMBRACE_TAG` — from Impact. Referenced by `embrace`.
- `AFF_LEMONADE_TAG` — from Impact. Referenced by `lemonade`.
- `AFF_PUMPKIN_TAG` — from Impact. Referenced by `pumpkin`.
- `AFF_MANYPETS_TAG` — from Impact. Referenced by `manypets`.
- `AFF_FETCH_TAG` — from Impact. Referenced by `fetch`.
- `AFF_SPOT_TAG` — from Impact. Referenced by `spot`.
- `AFF_PETS_BEST_TAG` — from Impact. Referenced by `pets-best`.
- `AFF_ASPCA_TAG` — direct. Referenced by `aspca`.
- `AFF_FIGO_TAG` — from Impact. Referenced by `figo`.
- `AFF_IMPACT_TAG` — Impact catch-all. Pre-existing.

### Site: fish-com

Env vars to set in Vercel project `fish-com`:

- `AFF_AMAZON_TAG` — Amazon (e.g. `fishcom-20`). Referenced by `amazon`.
- `AFF_CHEWY_TAG` — Impact. Referenced by `chewy`.
- `AFF_PETCO_TAG` — CJ. Referenced by `petco`.
- `AFF_PETSMART_TAG` — CJ. Referenced by `petsmart`.
- `AFF_MARINEDEPOT_TAG` — direct or ShareASale. Referenced by `marinedepot`.
- `AFF_BULK_REEF_SUPPLY_TAG` — ShareASale. Referenced by `bulk-reef-supply`.
- `AFF_LIVEAQUARIA_TAG` — ShareASale. Referenced by `liveaquaria`.

### Site: lizard-com

Env vars to set in Vercel project `lizard-com`:

- `AFF_AMAZON_TAG` — Amazon (e.g. `lizardcom-20`). Referenced by `amazon`.
- `AFF_CHEWY_TAG` — Impact. Referenced by `chewy`.
- `AFF_JOSHSFROGS_TAG` — ShareASale. Referenced by `joshsfrogs`.
- `AFF_BIGAPPLEHERP_TAG` — ShareASale. Referenced by `bigappleherp`.
- `AFF_REPTILESUPPLY_TAG` — ShareASale or direct. Referenced by `reptilesupply`.

### Site: saddle-com

Env vars to set in Vercel project `saddle-com`:

- `AFF_SMARTPAK_TAG` — ShareASale. Referenced by `smartpak`.
- `AFF_DOVER_TAG` — ShareASale. Referenced by `dover`.
- `AFF_RIDING_WAREHOUSE_TAG` — CJ. Referenced by `ridingwarehouse`.
- `AFF_SCHNEIDER_TAG` — ShareASale or direct. Referenced by `schneider`.
- `AFF_GREENHAWK_TAG` — Awin or CJ. Referenced by `greenhawk`.
- `AFF_STATE_LINE_TACK_TAG` — CJ. Referenced by `statelinetack`.
- `AFF_BIG_DEES_TAG` — ShareASale or direct. Referenced by `bigdees`.
- `AFF_AMAZON_TAG` — Amazon (e.g. `saddlecom-20`). Referenced by `amazon`.

### Site: horses-com

Env vars to set in Vercel project `horses-com`:

- `AFF_SMARTPAK_TAG` — ShareASale. Referenced by `smartpak`.
- `AFF_DOVER_TAG` — ShareASale. Referenced by `dover`.
- `AFF_SCHNEIDER_TAG` — ShareASale. Referenced by `schneider`.
- `AFF_RIDING_WAREHOUSE_TAG` — CJ. Referenced by `ridingwarehouse`.
- `AFF_GREENHAWK_TAG` — Awin or CJ. Referenced by `greenhawk`.
- `AFF_ADAMS_HORSE_TAG` — direct. Referenced by `adams-horse`.
- `AFF_AMAZON_TAG` — Amazon (e.g. `horsescom-20`). Referenced by `amazon`.
- `AFF_MARKEL_TAG` — Awin or direct insurance lead network. Referenced by
  `markel`.
- `AFF_GREAT_AMERICAN_TAG` — direct insurance lead network. Referenced by
  `great-american`.

### Site: petfood-com

Env vars to set in Vercel project `petfood-com`:

- `AFF_CHEWY_TAG` — Impact. Referenced by `chewy`.
- `AFF_AMAZON_TAG` — Amazon (e.g. `petfoodcom-20`). Referenced by `amazon`.
- `AFF_TRUPANION_TAG` — Impact (Rx-diet pathway). Referenced by `trupanion`.
- `AFF_HEALTHY_PAWS_TAG` — Impact. Referenced by `healthy-paws`.
- `AFF_LEMONADE_TAG` — Impact. Referenced by `lemonade`.
- `AFF_OLLIE_TAG` — Impact. Referenced by `ollie`.
- `AFF_SPOT_TANGO_TAG` — Impact. Referenced by `spot-tango`.
- `AFF_FARMERS_DOG_TAG` — Skimlinks. Referenced by `farmers-dog`.

### Site: petfoods-com

Env vars to set in Vercel project `petfoods-com`:

- `AFF_CHEWY_TAG` — Impact. Referenced by `chewy`.
- `AFF_AMAZON_TAG` — Amazon (e.g. `petfoodscom-20`). Referenced by `amazon`.

### Site: ferret-com

Env vars to set in Vercel project `ferret-com`:

- `AFF_AMAZON_TAG` — Amazon (e.g. `ferretcom-20`). Referenced by `amazon`.
- `AFF_CHEWY_TAG` — Impact. Referenced by `chewy`.
- `AFF_MARSHALL_TAG` — ShareASale or direct. Referenced by `marshall`.
- `AFF_WYSONG_TAG` — direct. Referenced by `wysong`.
- `AFF_CARNIWHOLE_TAG` — direct. Referenced by `carniwhole`.

### Site: ferrets-com

Env vars to set in Vercel project `ferrets-com`:

- `AFF_AMAZON_TAG` — Amazon (e.g. `ferretscom-20`). Referenced by `amazon`.
- `AFF_CHEWY_TAG` — Impact. Referenced by `chewy`.
- `AFF_MARSHALL_TAG` — ShareASale or direct. Referenced by `marshall`.
- `AFF_WYSONG_TAG` — direct. Referenced by `wysong`.
- `AFF_ADOPT_A_PET_TAG` — direct ethical funnel (Adopt-a-Pet directory).
  Referenced by `adopt-a-pet`.

---

## Section 4 — Paused / blocked items (need Carlo's prior approval)

Per `ops/policies/bot-coordination.md` §5 "Vendors requiring Carlo's prior
approval," the following are **not wired** into affiliate-routes.ts in this
round, even though MONETIZATION-ARCHITECT.md §5 lists them. They are paused
pending Carlo's go-ahead:

- **Innovet Pet** — CBD-adjacent supplement brand. FDA risk per policy §5.6.
- **Holistapet** — CBD-adjacent. Same caveat.
- **PrettyLitter** — TBD; needs BBB / brand-fit check.
- **Pet Care Supplies** — TBD; brand-fit check.
- **K9 Training Institute** — TBD; depends on whether the program is course
  affiliate (safe) or coaching-call referral (out of "no-calls" filter).
- **Karen Pryor Academy** — TBD; likely partnership, may need outreach.
- **MorphMarket** — TBD; reptile marketplace, possible affiliate.
- **Reptiles by Mack** — TBD; verify breeding-ethics fit per policy §5
  forbidden list.

When Carlo greenlights any of these, the affiliate-wiring sub-agent (or
Architect) will add them in round 2 with the appropriate route entry +
env-var documentation.

---

## Section 5 — Round-1 success criteria

This round is "complete" when:

1. All T1 networks (Section 1) are approved at the publisher level (5
   approvals: Skimlinks, Amazon, Impact, CJ, ShareASale).
2. At least **15 individual merchant programs** inside those networks are
   approved (a mix of Chewy + 4-5 insurance + SmartPak + Dover + Petco +
   Amazon-as-merchant, etc.).
3. Tracking IDs from those approvals are populated as env vars in the Vercel
   projects per Section 3.
4. The `/go/[vendor]/[sku]` route on any site, with a populated env var,
   correctly substitutes the real tracking ID into the redirect (manual smoke
   test once Carlo has the first real tag).

The follow-on round (round 2, expected ~2026-06-15) will:

- Track approval status per program (this doc will be the source of truth).
- Add round-2 vendors (the paused items above, once cleared).
- Wire conversion-event posting to GA4 and (eventually) a revenue dashboard.
- Begin per-page wiring (Affiliate Wiring sub-bot per `bot-coordination.md`
  §4 — finds product mentions in existing pages, swaps in `/go/<vendor>/<sku>`
  links).

---

## Section 6 — How the route handler treats env vars (engineer reference)

Each site's `apps/<site>/src/app/go/[vendor]/[sku]/route.ts` now resolves
tracking IDs at request time. The resolution rule:

1. Look up the vendor key (lowercased from the URL).
2. Take the matching `AffiliateRoute.template` from `affiliate-routes.ts`.
3. Replace `{sku}` with the URL-encoded SKU param.
4. Compute the env-var name: `AFF_` + uppercased vendor key with hyphens
   replaced by underscores + `_TAG`. E.g. `healthy-paws` →
   `AFF_HEALTHY_PAWS_TAG`.
5. Read `process.env[envVarName]`. If set, replace every `PLACEHOLDER`
   substring in the URL with that value. If unset, leave `PLACEHOLDER` in the
   URL — the redirect still works, attribution just lacks the tag.
6. Log the resolution result (`tagResolved: true | false`) inside the existing
   `affiliate_click` JSON event so we can monitor coverage in production.
7. 302-redirect to the resulting URL.

Failure modes:

- Vendor not registered → 404 (unchanged).
- Vendor registered but missing required SKU → 400 (unchanged).
- Env var unset → 302 with `PLACEHOLDER` left in URL. Logged for monitoring.

---

## Section 7 — Carlo's checklist (one screen)

Print this if useful. Each line is a single web-form action, no calls.

- [ ] Skimlinks signup (24-72h auto)
- [ ] Amazon Associates signup (24-48h auto; create per-site tracking IDs)
- [ ] Impact.com publisher signup (24h auto)
- [ ] Impact → apply to Chewy
- [ ] Impact → apply to Lemonade Pet
- [ ] Impact → apply to Pumpkin
- [ ] Impact → apply to ManyPets
- [ ] Impact → apply to Fetch (The Dodo)
- [ ] Impact → apply to Spot Insurance
- [ ] Impact → apply to Embrace
- [ ] Impact → apply to Trupanion
- [ ] Impact → apply to Healthy Paws
- [ ] Impact → apply to Pets Best
- [ ] Impact → apply to Figo
- [ ] Impact → apply to MetLife Pet
- [ ] Impact → apply to Wagmo
- [ ] Impact → apply to Vetster
- [ ] Impact → apply to Pawp
- [ ] Impact → apply to Dutch
- [ ] Impact → apply to AirVet
- [ ] Impact → apply to Ollie
- [ ] Impact → apply to The Farmer's Dog
- [ ] Impact → apply to Spot & Tango
- [ ] Impact → apply to Embark Vet
- [ ] Impact → apply to CareCredit
- [ ] CJ signup
- [ ] CJ → apply to Petco
- [ ] CJ → apply to PetSmart
- [ ] CJ → apply to Wisdom Panel
- [ ] CJ → apply to Riding Warehouse
- [ ] CJ → apply to State Line Tack
- [ ] ShareASale signup
- [ ] ShareASale → apply to SmartPak Equine
- [ ] ShareASale → apply to Dover Saddlery
- [ ] ShareASale → apply to Schneiders
- [ ] ShareASale → apply to Big Dee's Tack
- [ ] ShareASale → apply to FurHaven
- [ ] ShareASale → apply to Hepper
- [ ] ShareASale → apply to Muttropolis
- [ ] ShareASale → apply to PetWellbeing
- [ ] ShareASale → apply to NuVet
- [ ] ShareASale → apply to SpiritDog Training
- [ ] ShareASale → apply to Brain Training for Dogs
- [ ] ShareASale → apply to Allivet
- [ ] ShareASale → apply to PetMeds
- [ ] ShareASale → apply to VetRxDirect
- [ ] ShareASale → apply to EntirelyPets
- [ ] ShareASale → apply to Marshall Pet Products
- [ ] ShareASale → apply to Wysong
- [ ] ShareASale → apply to Bulk Reef Supply
- [ ] ShareASale → apply to LiveAquaria
- [ ] ShareASale → apply to Josh's Frogs
- [ ] ShareASale → apply to Big Apple Herpetological
- [ ] ShareASale → apply to Reptile Supply Co
- [ ] Awin signup ($5 refundable deposit)
- [ ] Awin → apply to Etsy, Greenhawk, Markel as available
- [ ] Rakuten Advertising signup
- [ ] Rakuten → apply to Walmart (fallback to Amazon)
- [ ] ASPCA Pet Insurance direct affiliate
- [ ] Scratchpay direct affiliate
- [ ] Cherry pet financing direct affiliate
- [ ] Adams Horse Supply (verify direct vs network)
- [ ] MarineDepot (verify direct vs network)
- [ ] Adopt-a-Pet referral inquiry (ethical funnel, no commission)

---

_This is round 1. Future rounds track approvals, swap PLACEHOLDER → real IDs,_
_monitor performance. Drafted by the Monetization Architect's Affiliate_
_Wiring sub-agent per `ops/policies/bot-coordination.md` §4. Sub-bot ends_
_when this PR is merged (one level of delegation, no daemon)._
