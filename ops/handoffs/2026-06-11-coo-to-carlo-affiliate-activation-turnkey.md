---
from: COO
to: Carlo
status: action-required
created: 2026-06-11
next_action: Carlo activates affiliate accounts + sets Vercel env vars in the ranked order below. No code changes required from Carlo.
---

# Affiliate activation — turnkey checklist (6 launch candidates)

Read-only inventory of every `/go/<vendor>` route + placeholder-tag audit across
vets-co, dog-com, ferret-com, petfood-com, lizard-com, fish-com (verified against
`main` @ `ef5f02e4`). Everything below is **Carlo-gated** (account signup + Vercel
env vars). The code is already shipped and safe-failing: an unset env var means the
click still redirects, just with no tracking tag (earns $0 until set).

Extends `2026-05-30-affiliate-wiring-round-1-applications.md` (network/timeline
layer) — this is the per-site **env-var execution layer**.

---

## ⚠️ CRITICAL — read first (Gap E1)

The `/go` handler derives the env-var name from the vendor key (uppercased,
hyphens→underscores). So **`amazon-brand` → `AFF_AMAZON_BRAND_TAG`** and
**`chewy-brand` → `AFF_CHEWY_BRAND_TAG`** are *separate env vars* from
`AFF_AMAZON_TAG` / `AFF_CHEWY_TAG`.

The `-brand` routes carry the **vast majority of live product CTAs**:

| Site | `amazon-brand` CTAs | `chewy-brand` CTAs |
|---|---|---|
| fish-com | 75 | 58 |
| lizard-com | 68 | 42 |
| dog-com | 25 | 15 |
| petfood-com | 15 | 12 |
| ferret-com | 9 | 7 |

**If you set only `AFF_AMAZON_TAG` / `AFF_CHEWY_TAG` and forget the `_BRAND_`
variants, nearly every product CTA on those sites earns $0.** Set BOTH the base and
`_BRAND_` var to the *same* Amazon tag / Chewy ID value on every product site. This
is a wiring gap, not a code bug.

---

## Ranked activation order (highest revenue-unlock-per-account first)

Each line is ONE account; set the env vars in the Vercel project for each site.

### 1. Amazon Associates — broadest live-CTA coverage, auto-approval
Set on **dog-com, ferret-com, petfood-com, lizard-com, fish-com** (NOT vets-co):
- `AFF_AMAZON_TAG` = your Amazon tag
- `AFF_AMAZON_BRAND_TAG` = **same** Amazon tag value (see Gap E1)

### 2. Impact.com — insurance $ + Chewy on all product sites
ONE account; each program is a separate in-dashboard approval. Full per-site env
list in the **Impact.com plan** section below. This is the ~13-carrier insurance
unlock that makes Vets.co and the Dog insurance paths earn.

### 3. ShareASale — long-tail specialty / pharmacy
- **lizard-com:** `AFF_BIGAPPLEHERP_TAG`, `AFF_JOSHSFROGS_TAG`, `AFF_REPTILESUPPLY_TAG`
- **fish-com:** `AFF_BULK_REEF_SUPPLY_TAG`, `AFF_LIVEAQUARIA_TAG`, `AFF_MARINEDEPOT_TAG`
- **ferret-com:** `AFF_MARSHALL_TAG` (+ direct `AFF_WYSONG_TAG`, `AFF_CARNIWHOLE_TAG`)
- **dog-com:** `AFF_FURHAVEN_TAG`, `AFF_HEPPER_TAG`, `AFF_MUTTROPOLIS_TAG`, `AFF_PETWELLBEING_TAG`, `AFF_NUVET_TAG`, `AFF_ALLIVET_TAG`, `AFF_PETMEDS_TAG`, `AFF_VETRXDIRECT_TAG`, `AFF_ENTIRELYPETS_TAG`, `AFF_PET_MEDS_1800_TAG`, `AFF_SPIRITDOG_TAG`

### 4. CJ Affiliate — fish retailers + dog DNA
- **fish-com:** `AFF_PETCO_TAG`, `AFF_PETSMART_TAG`
- **dog-com:** `AFF_WISDOM_PANEL_TAG`

### 5. Skimlinks — catch-all, cheap to wire
- **dog-com + petfood-com:** `AFF_FARMERS_DOG_TAG` (global `AFF_SKIMLINKS_TAG`
  already live on the Dog.com layout per CLAUDE.md §12)

Direct-relationship vendors (ASPCA, Scratchpay, Cherry, Wysong, Carniwhole,
ReptileSupply) and ClickBank (doggy-dan, brain-training) are applied for
individually — not gated on a network.

---

## Impact.com activation plan — env vars that go live per program approval

ONE Impact account; each program approves separately in-dashboard. Set per site as
each clears:

**vets-co** (insurance + telehealth — the ~13-vendor unlock):
`AFF_TRUPANION_TAG`, `AFF_HEALTHY_PAWS_TAG`, `AFF_EMBRACE_TAG`, `AFF_LEMONADE_TAG`,
`AFF_PUMPKIN_TAG`, `AFF_MANYPETS_TAG`, `AFF_FETCH_TAG`, `AFF_SPOT_TAG`,
`AFF_PETS_BEST_TAG`, `AFF_FIGO_TAG`, `AFF_METLIFE_TAG`, `AFF_WAGMO_TAG`,
`AFF_VETSTER_TAG`, `AFF_ASKVET_TAG`, `AFF_CHEWY_TAG` (Chewy Connect telehealth),
`AFF_IMPACT_TAG`. (ASPCA = direct, not Impact.)

**dog-com:**
`AFF_CHEWY_TAG`, `AFF_CHEWY_BRAND_TAG`, `AFF_CHEWY_PHARMACY_TAG`,
`AFF_TRUPANION_TAG`, `AFF_HEALTHY_PAWS_TAG`, `AFF_LEMONADE_TAG`, `AFF_PUMPKIN_TAG`,
`AFF_MANYPETS_TAG`, `AFF_EMBRACE_TAG`, `AFF_SPOT_TAG`, `AFF_FETCH_TAG`,
`AFF_PETS_BEST_TAG`, `AFF_FIGO_TAG`, `AFF_METLIFE_TAG`, `AFF_WAGMO_TAG`,
`AFF_EMBARK_TAG`, `AFF_VETSTER_TAG`, `AFF_PAWP_TAG`, `AFF_DUTCH_TAG`,
`AFF_AIRVET_TAG`, `AFF_OLLIE_TAG`, `AFF_SPOT_TANGO_TAG`, `AFF_CARECREDIT_TAG`,
`AFF_IMPACT_TAG`.

**petfood-com:**
`AFF_CHEWY_TAG`, `AFF_CHEWY_BRAND_TAG`, `AFF_TRUPANION_TAG`, `AFF_HEALTHY_PAWS_TAG`,
`AFF_LEMONADE_TAG`, `AFF_OLLIE_TAG`, `AFF_SPOT_TANGO_TAG`.

**ferret-com / lizard-com / fish-com:** `AFF_CHEWY_TAG`, `AFF_CHEWY_BRAND_TAG`.

---

## Other audit findings

- **No broken/unmonetizable CTAs.** Every `/go/<vendor>` reference across all 6
  sites resolves to a registered route. vets-co correctly 404s product vendors by
  design (policy §5 — insurance-only).
- **Declared-but-unused routes** (wired, no CTA yet — Monetization-lane content
  opportunities, NOT activation blockers): dog-com has the largest backlog
  (pharmacy, specialty, training, telehealth, financing); lizard/fish/petfood
  similar. Don't apply for those networks first unless CTAs are being added.
- **vendor-key vs data-slug consistency: OK** (dog-com DNA tests use exact route
  keys). **Aggregator routes** (`impact`, `awin`) substitute correctly
  (`.split().join()` replaces all PLACEHOLDER occurrences).

---

## Bottom line for Carlo

Do these two things and the portfolio starts earning:
1. **Amazon Associates** → set `AFF_AMAZON_TAG` **and** `AFF_AMAZON_BRAND_TAG` on
   the 5 product sites. Unblocks the largest CTA volume immediately.
2. **Impact.com** → unblocks all insurance revenue (Vets.co + Dog insurance paths)
   + Chewy across every product site.

Everything else is incremental long-tail. No code changes needed — purely account
signup + Vercel env vars.
