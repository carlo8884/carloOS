# Launch-Quality Criteria + Polish-Mode Operating Model

**Set by Carlo 2026-06-01 (phase shift). Updated 2026-06-07 to reflect QA punch-lists (#564, #566) and trust-fix PRs (#565, #567).**
Mode: **content-expansion → launch-quality polish.**
Launch/DNS is NOT the next objective. It is downstream of a site clearing every criterion below
+ IR + advisor. **CSRO does not push DNS/launch as the top item.**

> Source documents (2026-06-07): `ops/handoffs/2026-06-07-launch-readiness-qa-dog-vets.md` (PR #564) and
> `ops/handoffs/2026-06-07-launch-readiness-qa-fish-petfood-ferret.md` (PR #566).
> These contain per-site must-fix punch-lists and current verdict for all 5 polish sites.

## "Launch-quality" = ALL of these, per site
- [ ] `trust-guard` passes (QC §1)
- [ ] `metadata-policy` passes (titles ≤70, desc ≤160, no dupes)
- [ ] `link-check` passes (0 broken internal links)
- [ ] No obvious thin/duplicate pages (substance, not just count)
- [ ] Clear homepage → hub → spoke structure (coherent, not just large)
- [ ] Real visual polish (identity + heroes + in-page imagery; not templated/generic)
- [ ] No affiliate leakage (every commercial CTA through `/go`, registered vendors)
- [ ] Disclosures in place above monetized surfaces
- [ ] Top commercial pages monetized safely (§1.5.b — no clinical/medicated buy-boxes)
- [ ] Selected tools/calculators working
- [ ] CSRO/IR see no Tier-1 trust or valuation risk
→ then advisor final check → then (and only then) launch is even discussed.

## First polish cohort (the 5 to bring to launch-quality FIRST)
Chosen for: already at 100+ content, highest traffic/intent, strongest brand/exit value.
1. **Dog.com** (156pg) — flagship, mass-market, most traffic
2. **Fish.com** (101pg, strict CI) — aquarium-magazine, strong vertical
3. **Ferret.com** (109pg, verified 2026-06-07) — real ~11K/mo traffic, monetization furthest along
4. **PetFood.com** (103pg, strict CI) — nutrition reference, high commercial intent
5. **Vets.co** (100pg, strict CI) — clinical-authority + insurance funnel

(Lizard at 102 is a near-launch reserve. Horses/Saddle/PetFoods/Ferrets finishing content → later cohort, NOT polished yet.)

## Mode rules
- **Page-building is PAUSED** except to fill a specific strategic gap CSRO names. The in-flight
  horses/saddle/petfoods/ferrets agents finish (they were below baseline 100) — no NEW build dispatch.
- All polish work targets the cohort-5 first.
- Readiness measured by quality/monetization/trust/visuals/linking/tool-usefulness — NOT page count.

## Bot focus (polish mode)
**COO** — QA + structure on cohort-5: broken-link/orphan/missing-hub/weak-metadata/missing-breadcrumb/
missing-schema/thin-page/duplicate-route sweep; improve internal linking; clean homepage→hub→spoke;
fix metadata-policy failures; run all CI checks; make each site feel coherent.

**Monetization** — fix affiliate leakage BEFORE any new monetization: route all commercial CTAs
through `/go`; finish Ferret; fix Horses/Saddle direct CTAs; clinical/medicated buy-box sweep
(§1.5.b); disclosures above monetized surfaces; prioritize high-intent/traffic pages.

**Visual** — Tier-1 + near-launch polish: curate real photography; ensure pages don't look
templated/generic; improve homepage/hubs/calculators/high-value pages. Order: Dog → Fish →
Ferret → PetFood → Vets.

## Per-site polish scorecard (top 7 launch candidates)
Legend: ✅ pass · 🟡 partial · ⬜ not started

**Scorecard last updated: 2026-06-07** (reconciled against origin/main @ dd16e9a1, PR #567).
QA source: `ops/handoffs/2026-06-07-launch-readiness-qa-dog-vets.md` and
`ops/handoffs/2026-06-07-launch-readiness-qa-fish-petfood-ferret.md`.

| Site | trust | meta | links | no-thin | structure | visual | no-leak | disclosures | commercial-monet | tools | IR/advisor |
|---|---|---|---|---|---|---|---|---|---|---|---|
| dog-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⬜ |
| fish-com | ✅ | ✅ | ✅ | 🟡 (~14 lite species + 1 over-claim) | ✅ | 🟡 (3 missing hub heroes) | ✅ | ✅ | ✅ | ✅ | ⬜ |
| ferret-com | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 (11 missing hero/article images) | ✅ | ✅ | ✅ | ✅ | ⬜ |
| petfood-com | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 (5 missing hub heroes) | ✅ | ✅ | ✅ | ✅ | ⬜ |
| vets-co | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⬜ |
| horses-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⬜ |
| lizard-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⬜ |

**Status 2026-06-07 (launch-readiness QA complete on all 5 polish sites + QA must-fix trust repairs merged):**

Key changes since 2026-06-01 polish-wave completion (PRs #353–#360):

- **Premium visual rollout complete (all 5 polish sites):** Dog reference v2 (#487), Ferret (#493),
  Fish (#494), PetFood (#495), Vets (#496), Dog hub polish (#526), Ferret real-photography slots (#524).
  Real photography with full attribution; hardcoded Unsplash URLs replaced with manifest-backed
  `StockImage` component (#475, #481). CI trust-guard now forbids hardcoded Unsplash/Pexels CDN URLs (#482).
  **Image handling note:** the June-01 "Source: Unsplash" pattern is superseded — all images now use
  `StockImage` + `manifestKey` references resolved at build time via `packages/ui/src/data/image-manifest.json`
  (populated by `scripts/sync-images.mjs`). Any remaining "Source: Unsplash" stub is a placeholder pending
  the next `sync-images.mjs` run.

- **AggregateRating schema fix (PR #565):** `buildProductSchema` was emitting `AggregateRating{reviewCount:1}`
  for editorial-score products — Google/AI surfaces may penalize a single-review aggregate. Fixed: editorial
  scores now emitted as `Review`/`Rating`, not `AggregateRating`. Shared-component fix clears all review
  pages portfolio-wide.

- **Trust/claim hygiene (PR #567):** Unsourced stats and over-claiming metadata softened across
  Dog/Vets/Fish/Ferret (QA must-fix from punch-lists #564/#566).

- **Conversion-density + internal linking:** conditions→compare→brands funnel (#555), Fish setup→reviews
  bridges (#554), Ferret starter-kit funnel + insulinoma bridges (#553), Dog conversion-density (#552),
  Vets ItemList/Product schema + insurance hub funnel wiring (#551), Dog cross-cluster internal-link
  bridges (#561), accessibility fixes (#538), CWV/perf fixes (#543).

- **Accessibility (a11y):** skip-links, focus rings, ARIA attributes, list semantics, tap targets on
  Dog/Ferret + shared primitives (PR #538). A11y handoff to Visual for contrast/CWV items (#544).

**Remaining open gates (blocks DNS on affected sites):**

| Gate | Site(s) affected | Owner | Fix |
|---|---|---|---|
| 19 unsynced manifest images (paw-glyph placeholders on hub/article heroes) | Fish (3), PetFood (5), Ferret (11) | Visual | Run `scripts/sync-images.mjs` to populate missing manifest keys; verify `image-manifest.json` contains `fish-com:tools-hero`, `fish-com:water-parameters-hero`, `fish-com:glossary-hero`, `petfood-com:feeding-hero`, `petfood-com:guides-hero`, `petfood-com:myths-hero`, `petfood-com:supplements-hero`, `petfood-com:tools-hero`, and 11 Ferret keys listed in QA doc |
| ~14 lite species pages + 1 metadata over-claim on Fish | Fish | COO | Expand `celestial-pearl-danio` body to match "Complete care guide" title OR downgrade title/desc; optionally depth-floor remaining ~13 lite species |
| Claim-hygiene sweep (QA soft-items, claim sourcing on insurance review) | Dog, Vets | COO | Verify any remaining unsourced stat on Dog `/reviews/best-pet-insurance` after #567 |
| IR/advisor final review | All 5 | Carlo / advisor | Human step — by design last |

**Bottom line:** Dog and Vets are GO (minor cleanup in progress). Fish is NEAR-READY (blocked: one
metadata over-claim + 3 placeholder hub heroes). PetFood and Ferret are READY pending imagery
(Visual lane only). No Tier-1 trust or valuation risk on any site as of 2026-06-07 QA.

CSRO refreshes this after each merge wave. A site is launch-quality only when its row is all ✅/n-a.
