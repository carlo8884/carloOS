---
from: COO
to: Carlo (+ advisor)
status: action-required
created: 2026-06-13
supersedes_priority_order_of: 2026-06-11-coo-to-carlo-affiliate-activation-turnkey.md
next_action: Carlo works the prioritized gate list below (top-down). Everything here is Carlo-only (accounts / secrets / spend / DNS). No code from Carlo.
---

# Carlo action checklist — revenue & launch gates (operating-lead consolidation)

Single prioritized list of the **Carlo-only gates** that unlock revenue and launch.
Ordered to the 2026-06-13 site priority: **Vets → Dog → Ferret → PetFood → Lizard → Fish**.
The exhaustive per-vendor env-var inventory lives in
`2026-06-11-coo-to-carlo-affiliate-activation-turnkey.md`; this is the
do-this-next layer on top of it.

## State of the code (verified today, 2026-06-13)

Two independent read-only audits ran today:

- **Affiliate/monetization map (all 10 sites):** 186 `/go` tracked routes, **zero
  untracked leaks** (100% of commercial CTAs route through `/go`). Every route is
  safe-failing: an unset `AFF_*_TAG` still redirects, just earns $0 until set.
- **Vets.co launch-readiness:** **P0 = none.** Revenue funnel clean end-to-end,
  QC §1 trust-compliant, breadcrumbs/schema/SEO good, breed×state pages correctly
  noindex behind the IR F6 gate.
- **FTC disclosure:** verified **clean portfolio-wide** — sitewide footer disclosure
  + inline disclosures on monetized surfaces. (Both audits' "missing disclosure
  component" flags were false positives: the pages carry inline disclosure *text*,
  `DisclosureBanner`, or rendered components the name-grep missed. No edits made.)

**Conclusion: the code is launch/revenue-ready in the COO lane. Revenue is gated
only on the Carlo-only items below.** Treat every status as UNVERIFIED until you
confirm it in Vercel / the vendor dashboards.

---

## TIER 1 — turns on revenue (do first)

| # | Gate | Where | Why / which site it unlocks | Priority | Costs $? |
|---|---|---|---|---|---|
| 1 | **Apply: Impact.com** (pet-insurance + telehealth aggregator) | impact.com signup | Carries the **Vets.co** insurance funnel + Dog/PetFood insurance CTAs. Single biggest revenue unlock for the #1 site. | P0 | Free to apply |
| 2 | **Apply: Amazon Associates** → set `AFF_AMAZON_TAG` **and** `AFF_AMAZON_BRAND_TAG` | Vercel env (all product sites) | The `-brand` var carries the **majority** of product CTAs on Dog/PetFood/Ferret/Lizard/Fish. Set BOTH or those CTAs earn $0 (Gap E1). | P0 | Free to apply |
| 3 | **Apply: Chewy partners** → on approval set `AFF_CHEWY_TAG` + `AFF_CHEWY_BRAND_TAG` | Vercel env | Pet-product CTAs on Dog/PetFood/Ferret/Fish. | P1 | Free to apply |
| 4 | **Un-pause Supabase** | Supabase dashboard | Restores any DB-backed surfaces (email capture / `/ask` groundwork). Confirm whether paused. | P1 | Check tier |

> The individual insurance-carrier vars (`AFF_TRUPANION_TAG`, `AFF_LEMONADE_TAG`,
> `AFF_HEALTHY_PAWS_TAG`, `AFF_EMBRACE_TAG`, `AFF_PUMPKIN_TAG`, `AFF_MANYPETS_TAG`,
> `AFF_FETCH_TAG`, `AFF_SPOT_TAG`, `AFF_PETS_BEST_TAG`, `AFF_FIGO_TAG`,
> `AFF_METLIFE_TAG`, `AFF_WAGMO_TAG`, `AFF_ASPCA_TAG`) mostly resolve **through
> Impact.com** once #1 is approved — set them from the Impact dashboard links. Full
> list per site in the turnkey doc.

## TIER 2 — per-site revenue depth (after Tier 1)

| Site (priority) | What unlocks its revenue | Carlo action |
|---|---|---|
| **Vets.co (1)** | Insurance lead/affiliate via Impact + direct carriers; telehealth (Vetster/AskVet) | Impact approval → set carrier tags. No product retail (policy). |
| **Dog.com (2)** | Amazon product + insurance (Impact) + DNA (Embark/Wisdom) + food (Ollie/Farmer's Dog) | Amazon tags; Impact; apply Embark/Wisdom/fresh-food programs → set `AFF_EMBARK_TAG` etc. |
| **Ferret.com (3)** | Amazon + Chewy + Marshall/Wysong; starter-kit path already wired | Amazon/Chewy tags; apply Marshall/Wysong → `AFF_MARSHALL_TAG`/`AFF_WYSONG_TAG`. |
| **PetFood.com (4)** | Chewy + Amazon + fresh-food (Ollie/Spot&Tango/Farmer's Dog); retailers only, no paid placements | Chewy/Amazon tags; fresh-food programs. |
| **Lizard.com (5)** | Amazon + reptile specialists (BigAppleHerp/Josh's Frogs/ReptileSupply) | Amazon tag; apply specialists → `AFF_BIGAPPLEHERP_TAG` etc. |
| **Fish.com (6)** | Amazon + Petco/PetSmart/MarineDepot/BulkReefSupply/LiveAquaria | Amazon tag; apply specialists. |

## TIER 3 — launch (deferred until you say "launch")

| Gate | Note |
|---|---|
| **DNS cutover** (Network Solutions) | Deferred per your rule — I will NOT push DNS until you explicitly say launch AND revenue path + trust + pixel review + measurement plan are confirmed for that site. Vets first, then Dog. |
| **GA4 + measurement** (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) | Set at launch-day per site so first traffic is measured. |
| **Email vendor** (Mailchimp/MailerLite/Beehiiv) | Sequences written, inactive. Decision deferred (cost). |

---

## What I'm doing on my side (no Carlo needed)

- Building/​polishing toward launch-quality on the priority sites (tools, revenue
  paths, trust, UX, internal links, GEO) — operating-lead mode, scoped PRs.
- Maintaining this inventory as routes/vendors change.
- I will **not**: create accounts, invent affiliate IDs, enter secrets, spend, or
  push DNS — those stay with you.

## Open question for you (only if it changes my sequencing)

- Confirm which of Tier 1 (#1–#4) are already done, so I don't re-flag them. If
  unknown, I'll assume not-done and keep them surfaced.
