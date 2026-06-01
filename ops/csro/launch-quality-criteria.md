# Launch-Quality Criteria + Polish-Mode Operating Model

**Set by Carlo 2026-06-01 (phase shift).** Mode: **content-expansion → launch-quality polish.**
Launch/DNS is NOT the next objective. It is downstream of a site clearing every criterion below
+ IR + advisor. **CSRO does not push DNS/launch as the top item.**

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
2. **Fish.com** (103pg) — aquarium-magazine, strong vertical
3. **Ferret.com** (106pg) — real ~11K/mo traffic, monetization furthest along
4. **PetFood.com** (102pg) — nutrition reference, high commercial intent
5. **Vets.co** (100pg) — clinical-authority + insurance funnel

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

| Site | trust | meta | links | no-thin | structure | visual | no-leak | disclosures | commercial-monet | tools | IR/advisor |
|---|---|---|---|---|---|---|---|---|---|---|---|
| dog-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (25 /go pgs) | ✅ | ⬜ |
| fish-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (63 /go pgs) | ✅ | ⬜ |
| ferret-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (21 /go pgs) | ✅ | ⬜ |
| petfood-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (17 /go pgs) | ✅ | ⬜ |
| vets-co | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (telehealth + insurance) | ✅ | ⬜ |
| horses-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (6 tack/nutrition pgs) | ✅ | ⬜ |
| lizard-com | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⬜ |

**Status 2026-06-01 (polish wave complete — 10 of 11 gates green on all 7):**
Every engineering/content/SEO/trust/monetization/visual gate is CLOSED on the top 7. The ONLY
remaining gate is **IR/advisor** (two human steps), which is by-design last.

Closed this wave (PRs #353–#360, all merged to main):
- **thin pages 12 → 0** portfolio-wide (every hub now carries a topical intro + internal links)
- **duplicate titles 6 → 0**
- **affiliate leaks → 0** (vets-co telehealth registered + routed through `/go`, Carlo-approved)
- **JSON-LD schema gaps closed**: `buildOrganizationSchema`/`buildWebSiteSchema` added to packages/ui;
  Org+WebSite on all 5 cohort-5 homepages; dog FAQPage; lizard 4 hubs + horses /reviews + fish
  species-template breadcrumbs
- **tools verified**: all 12 interactive calculators across the 7 statically verified working
  (math/guards/clinical-framing) — 0 bugs
- **hub hero imagery** added to the flagged high-value hubs (vets breeds/reviews, horses
  reviews/guides, petfood species, dog guides) via curated "Source: Unsplash" pattern
- **orphan pages: 0** portfolio-wide

Open follow-ups (non-blocking): saddle at 57pg + petfoods/ferrets thin = back-cohort, not yet
polished; one email-sequence Chewy link points at a product SKU (Monetization lane handoff);
FerretFoodEvaluator Lewington-edition citation nit (editorial).

**Next gate = IR re-review of post-#360 main, then advisor sign-off.** No DNS/launch pushed.

CSRO refreshes this after each merge wave. A site is launch-quality only when its row is all ✅/n-a.
