# CJ Affiliate (Commission Junction) — Publisher Application

**Author:** Monetization Bot
**Date:** 2026-05-30
**For:** Carlo (paste into CJ application form, edit only the personal fields)
**Why this network first:** CJ Affiliate is one of the three T1 networks (CJ + ShareASale + Awin). A single CJ approval gets us **Chewy, Petco, PetSmart, and Brilliant Earth** at once — covers the dog-com / vets-co / cats-com / horses-com affiliate-routes registries.

**Apply at:** https://signup.cj.com/member/signup/publisher/

---

## Form fields — copy/paste ready

### Account information

| Field | Value |
|---|---|
| First name | Carlo |
| Last name | Tabibi |
| Email | carlo@tabibi.com |
| Country | United States |
| Phone | *(your number — CJ requires it but does not call publishers; SMS verification only)* |

### Company information

| Field | Value |
|---|---|
| Company name | CarloOS Media |
| Company type | Sole Proprietor (LLC if you've formed one — check your records) |
| Tax ID / EIN | *(your EIN or SSN — required for 1099 issuance)* |
| Address | *(your business address on file)* |

### Website information

| Field | Value |
|---|---|
| Primary website URL | `https://dog.com` |
| Website name | Dog.com |
| Website description (paste below) | ⬇ |
| Website category | Pets & Animals |
| Sub-category | Pet Care / Pet Supplies |
| Monthly unique visitors | *(use the most recent honest figure — if pre-launch, write "Pre-launch, public traffic starting June 2026")* |
| Primary promotional methods | Content / Editorial; SEO; Email Newsletter |
| Languages | English |
| Target geography | United States, Canada, United Kingdom, Australia |

### Website description (paste verbatim into the description field)

```
Dog.com is the flagship of a portfolio of premium pet, animal, and veterinary
reference sites operated by CarloOS Media. Each site is a long-form editorial
reference covering health, breeds, training, nutrition, and care — written
with veterinary and species-expert input and grounded in peer-reviewed
research. The portfolio currently includes Dog.com, Cats.com, Fish.com,
Horses.com, Ferret.com, Vets.co, PetFood.com, PetSupplies.com, and more.

We publish editorial guides (breed health profiles, condition deep-dives,
buying guides, comparison reviews) and run conversion-optimized funnels
(insurance comparison, DNA-test buyers' guide, breed-specific care plans).
We monetize via affiliate partnerships with vetted retailers, never via
pop-ups or paid placements. All affiliate disclosures are visible on every
page that contains affiliate links, per FTC 16 CFR Part 255.

We have applied to Chewy, Petco, and PetSmart on CJ Affiliate because they
are the retailers our editorial readers naturally seek out for the products
we review and recommend.
```

### Promotional methods detail (if asked)

```
Primary: Long-form editorial content on each portfolio site (3000+ words per
page), ranked organically via SEO. Affiliate links are embedded contextually
within product reviews, comparison tables, and buyer's guides. All links are
clearly disclosed.

Secondary: Opt-in email newsletter sequences (single confirmed opt-in, no
purchased lists). Welcome sequence delivers a free buyer's guide PDF;
follow-up sequence shares editorial deep-dives. Affiliate links appear in
context of those guides, again with explicit disclosure.

We do NOT: run paid traffic to affiliate links, use cashback/coupon/discount
incentives, run sub-affiliate networks, or buy bidded search ads on brand
keywords of partner retailers.
```

### Compliance answers (if checkboxes appear)

- ☑ FTC affiliate disclosure on every monetized page
- ☑ COPPA — site is not directed at children under 13
- ☑ No incentivized traffic, no toolbar/browser extension, no email scraping
- ☑ No coupon-site model
- ☑ Will respect each advertiser's program terms and trademark restrictions

---

## Advertisers to apply for (after the publisher account is approved)

CJ approves you as a publisher first; then you separately request each advertiser. Within the CJ dashboard, search for and request:

| Advertiser | Why | Sites that will use it |
|---|---|---|
| **Chewy** | Largest pet retailer; covers every species we publish on | dog-com, cats-com, fish-com, ferret-com, lizardpets, parrots, petsupplies, vets-co (insurance funnel cross-link) |
| **Petco** | Generalist retailer; broad SKU coverage | dog-com, cats-com, fish-com, ferret-com, parrots, petsupplies |
| **PetSmart** | Generalist retailer; complements Petco SKU gaps | dog-com, cats-com, fish-com, petsupplies |
| **Brilliant Earth** *(if found)* | Not pet, skip |  |

For each: write 1–2 sentences in the request box about which editorial pages will feature their products. Example for Chewy: "Dog.com publishes long-form breed-specific feeding guides and health-condition reference pages. Chewy is the primary retailer our readers seek out for the products we review (food, supplements, dental care, joint supplements). We will link contextually with full FTC disclosure."

---

## After approval (what I'll do)

Once you forward me the CJ approval email + your CJ publisher ID:

1. I'll generate the per-vendor tracking links via CJ's link generator (or pull the SID/PID from the dashboard)
2. Run `scripts/set-affiliate-tag.sh CHEWY <id>`, `PETCO <id>`, `PETSMART <id>` to push to all relevant Vercel projects in one batch
3. Update `ops/handoffs/2026-05-30-affiliate-wiring-round-1-applications.md` to mark Chewy/Petco/PetSmart as ✅ live
4. Begin auditing dog-com revenue dashboard for first attributed clicks (once DNS + traffic flow)

---

## Time estimate for Carlo

- Publisher application: **8–10 min** (mostly paste)
- Advertiser requests: **2 min each × 3 = 6 min**
- Approval wait: 1–3 business days (CJ reviews manually but is generally fast for content sites)

If you want, I can draft the same paste-ready doc for ShareASale and Awin in the next session — same structure, different vendor lists.
