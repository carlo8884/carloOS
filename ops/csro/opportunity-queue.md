# CarloOS Opportunity Queue (CSRO-owned)

**Owner:** CSRO. **Created:** 2026-06-01.
Single strategic backlog across all domains + bots. The fleet pulls from here so it never idles —
but volume is never confused with strategy.

## Governing rules (Carlo, 2026-06-01)
1. Keep only the **top 20–50 items ACTIVE** at any time (the "Active Set" below).
2. Refresh / deepen the **Reserve** whenever real useful items drop below ~500 of capacity.
3. Every item carries: **site · lane · priority · value thesis · done-when · category**
   (category ∈ launch-quality | revenue | traffic | trust | visual | strategic).
4. **No filler.** If an item doesn't raise asset value, traffic, revenue, trust, or launch quality,
   it does not belong. The "1000" is a *capacity target the queue grows toward via real
   opportunities* — it is never padded to hit a number.
5. **Current phase: premium launch quality > page expansion.**
6. Content-expansion items may sit in the Reserve but stay **parked** unless CSRO promotes them.
7. Bots receive **small ranked batches**, never the whole queue.
8. Stale items are pruned/merged/downgraded weekly.
9. If anything conflicts with the **Premium Domain Launch Bar**, the bar wins.
10. Only the **Active Set top** is reported to Carlo; he never reads the full queue.

---

## 2026-06-02 — STATE REFRESH (supersedes the 2026-06-01 Active Set below)

**Advisor decisions D1–D7 all executed/merged** (#392–#395 + docs). **Premium gate 3 (a live tool
on the homepage) is now SHIPPED on all 8 priority sites** (#389–#392, #396). COO-lane launch-quality
floor (trust, sitemaps, orphans, canonical-collisions, nav) cleared cohort-wide.

**The premium gap is now narrow and singular:** gates 1/5/6 — **distinct hero imagery + identity**.
This is **Visual-executed** under D5 (spec: `ops/csro/premium-first-screen-standard.md`) + D3
(stock-now via `scripts/sync-images.mjs` on Carlo's Mac; commission later; **no spend w/o approval**).
CSRO/COO cannot source photography in-sandbox.

### 2026-06-02 (cont.) — post-cohort COO lanes (Carlo "do all of the above")
- ✅ **Cohort COO launch-polish complete** on all 8 priority sites (#414–#422).
- ✅ **Cohort expansion to the 2 non-priority sites** (#425): ItemList on 6 ferrets/petfoods cluster hubs;
  5 hubs correctly skipped (anchor-only / external / inline / no-href).
- ▶ **Reciprocal internal-linking lane OPENED** (charter pillar = internal-link strength). Wave 1 shipped:
  Dog breed profiles → `/compare` comparison pages (#426, template + 25 static, 5 zero-pair skipped).
  *Remaining candidates (COO P2, ongoing): fish species ↔ tank-mates, petfood compare ↔ spokes, cross-cluster
  hub↔spoke reciprocity. Pull as clean gaps are confirmed — not manufactured.*
- ▶ **PROMOTED Reserve → Active: Horses `/racing` flagship (D1, #178).** D1 unblocked it. **Scope note:** the
  homepage first-screen entry is **Visual-gated** (D5); the `/racing` vertical content/structure is a larger
  COO/strategic build (L/XL) — confirm data + approach before building. Top strategic item for Carlo.
- ✅ **Cross-portfolio internal-link graph COMPLETE** (cross-site moat). ferret-com wired (#429, was the only
  site at zero); fish-com:species + vets-co:medication wired (#430, configured-but-unrendered keys); and the
  *dark* cards (horses care/gear/health/nutrition/training, petfood:brand, saddle:guide — placed but rendering
  null on unconfigured keys) activated via curated recommendation data (#431). All placed cards now render.
- ✅ **Codex review triaged** (2026-06-02): MED find-a-vet "near you" overstatement FIXED (#428, dog-com is a
  by-discipline directory guide, not a geolocation finder). Codex LOW/MED #2 (ferret comfort-supply monetization
  on adrenal/aging clinical pages) is correctly-framed/non-blocking → **IR sign-off item** folded into the
  Monetization buy-box sweep (#424 brief). Codex LOW #3 was its own local workspace (n/a).
- ✅ **Orphan-page audit: ZERO orphans portfolio-wide** (2026-06-02, slug-presence sweep incl. src/data across
  all 10 sites). The lizard `best-thermostats` fix (#420) was the last one.
- ⏸ Still blocked: Visual heroes/ogImage (N1–N3), Monetization disclosures/buy-box (N4–N6) — briefs in #424.
  `re-gate-on-output`: CSRO re-checks against the 7-gate / §8a bar the moment a Visual/Mon PR lands.
- ✅ **Deep launch-quality re-audit (2026-06-02, evening) — 4 dimensions swept, 1 real gap fixed:**
  - **Tools/calculators (§8a "actually working"):** all 12 cohort calculators QA'd for compute correctness
    (6 fish + horses BCS / lizard UVB / petfood food-cost / vets insurance / ferret food-eval / saddle tree-size).
    Formulas verified (volume constants, inverse-square UVB, KH/pH CO2, dilution, Henneke avg, reimbursement
    math); all wired into tool pages + homepages. **Zero defects — no changes manufactured.**
  - **Thin/duplicate:** clean — smallest files are intentional redirect stubs / `[slug]` generators; short
    line-counts are dense single-line-paragraph articles, not thin.
  - **Indexing hygiene:** all 10 sites have `robots.ts`+`sitemap.ts`; AI crawlers explicitly allowed, `/go/`
    disallowed, `/racing` in sitemap, zero redirect-stub leakage.
  - **Hub→spoke completeness:** found + FIXED (#440) 3 lizard species (gargoyle/savannah-monitor/mossy-leaf-tail)
    absent from the `/species` SPECIES array (so absent from grid + ItemList JSON-LD) and dog `dog-treats-guide`
    missing from `/nutrition`. `mossy-leaf-tail-gecko` was a true orphan the prior slug-sweep missed.
  - **Data-aware orphan re-sweep (incl. src/data sources):** now genuinely **ZERO orphans cohort-wide** post-#440.

> **Terminal state for unblocked COO/CSRO launch-polish (2026-06-02):** structural launch-quality is exhausted
> across the portfolio — schema (ItemList/Breadcrumb/FAQ/DefinedTerm), zero orphans, dedup, reciprocal linking,
> and the full cross-portfolio graph are all done + CI-green. The only forward paths are **Visual** (blocked: no
> in-sandbox photography), **Monetization** (other lane), and **Horses `/racing`** (major-strategy fork → Carlo).

### Active now (ranked)
| # | Site | Lane | Pri | Category | Done-when |
|---|---|---|---|---|---|
| N1 | priority 8 | Visual | P0 | visual | Apply D5 standard + D3 stock heroes; distinct per site (D4: Horses≠Saddle); Ferret real-ferret hero; CSRO re-checks 7 gates |
| N2 | Horses | Visual | P1 | visual/strategic | Build hybrid (D1): authority homepage hero + a prominent `/racing` flagship entry on the first screen |
| N3 | all | Visual | P1 | visual | Make each embedded homepage tool read as the hero *product* (composition/framing), not a dropped-in widget |
| N4 | Vets | Monetization | P1 | trust | `/telehealth` inline FTC disclosure above the 3 `/go` CTAs |
| N5 | Ferret | Monetization | P1 | revenue/trust | Finish Ferret monetization + clinical buy-box sweep; disclosures above monetized surfaces |
| N6 | Vets/funnels | Monetization | P2 | trust | Soften vendor superlatives ("most comprehensive") on telehealth + pet-insurance |
| N7 | ferrets-com, petfoods-com | COO | P2 | launch-quality | Structural sweep (orphans/canonical) on the 2 non-priority sites not yet audited |

> N1–N3 are Visual-gated (need photography). N4–N6 are Monetization. **N7 is the next unblocked
> COO item** (structural sweep of the 2 un-audited sites) — promote when COO bandwidth frees.

### Completed wave log (2026-06-01 → 06-02)
#364–#388 trust/sitemap/orphan/canonical floor · #389–#392,#396 homepage live-tool embeds (gate 3, all 8)
· #393 saddle D6 · #394 D5 standard + decisions · #395 lizard D7.
**GEO schema wave (06-02):** #401 hub ItemList (11 hubs) · #402 FAQPage where missing · #404 BreadcrumbList
on 15 hub/tool/schedule pages · #405 petfoods DefinedTerm + brand BreadcrumbList · #406 ferrets
/directory/rescues 404-link gating (51 dead anchors → non-clickable coming-soon).
**Per-cohort COO launch-polish sweep (06-02, cohort order Ferret→PetFood→Vets→Fish→Saddle→Lizard→Horses→Dog):**
#414 Ferret glossary/vocabulary dedup · #415 PetFood remaining-hub ItemList · #416 Vets insurance/reviews
ItemList + review breadcrumb · #417/#418 Fish /reviews ItemList + 7 review breadcrumbs · #419 Saddle /reviews
ItemList · #420 Lizard de-orphan best-thermostats + reviews/builds ItemList + breadcrumbs · #421 Horses
4-hub ItemList + 3 breadcrumbs · #422 Dog /reviews + /health ItemList + 16 review + 3 breed breadcrumbs.
**(#410 closed: FAQPage "gap" was a false positive — FAQAccordion auto-emits; #411 corrected the inventory.)**
**Cross-portfolio + hub-graph wave (06-02 PM):** #429–#439 CrossPortfolioCard expansion (~280 spokes + all
configured keys, full cross-site graph) · #440 hub→spoke fix (3 lizard species into `/species` SPECIES array +
ItemList; dog `dog-treats-guide` into `/nutrition`; closed the last orphan).

### ✅ COO-lane cohort launch-polish COMPLETE (all 8 priority sites)
Per-site COO audits done end-to-end: breadcrumbs, hub ItemList, FAQ/Definition schema, orphans, duplicate
consolidation, sitemap-priority hygiene — all clean cohort-wide. **No unblocked COO launch-polish items remain
on the priority 8.** The remaining launch-gating work is **Visual** (N1–N3: premium heroes/ogImage/first-screen)
and **Monetization** (N4–N6: disclosures + buy-box). N7 (ferrets/petfoods structural) was already clean.

**Net:** COO-lane GEO schema coverage (ItemList/FAQ/Breadcrumb/DefinedTerm) now broad cohort-wide; the
ferrets-com structural papercut from N7 is cleared. Remaining N7 scope (petfoods-com structural) was
already clean per the #N7 audit. **The remaining launch-gating work is Visual (N1–N3 heroes) +
Monetization (N4–N6).**

---

## ACTIVE SET — top items (ranked) · 2026-06-01 *(historical — superseded by the 2026-06-02 refresh above)*

> Gating reality: per the premium-preview audit
> (`ops/handoffs/2026-06-01-visual-to-csro-premium-preview-audit.md`), **all 8 priority sites FAIL
> the premium bar** until Visual ships + applies the premium first-screen standard. Item A1 unblocks
> the most value.

| # | Site | Lane | Pri | Category | Value thesis | Done-when |
|---|---|---|---|---|---|---|
| A1 | All priority 8 | Visual | P0 | visual / launch-quality | The ONE premium first-screen standard (grid, hero system, homepage-tool pattern, type/color/motion). Unblocks every site's gates 1/3/5/6. | Standard doc + reference design approved by CSRO against the 7 gates |
| A2 | Horses | CSRO/Carlo | P0 | strategic | Positioning decision (general equine authority vs `/racing` flagship) gates Horses + Saddle hero design. | Carlo confirms direction; CSRO records it in the bar |
| A3 | Dog | CSRO/Carlo | P1 | strategic | "Symptom checker" promise resolves to static `/symptoms`. Decide: interactive triage build vs reframe copy. | Decision recorded; routed to COO (reframe) or product (build) |
| A4 | Saddle | Visual | P1 | visual | Saddle shares hero art with Horses (`photo-1553284965…`). Distinct luxury tack hero restores gate 5. | Saddle hero is a unique image; manifest no longer shares with Horses |
| A5 | Ferret | Visual | P1 | visual / launch-quality | Real ferret hero + owner-intent first screen (fix wrong-species defect). Brief shipped #372. | Visual applies #372; CSRO re-checks against bar |
| A6 | Vets | COO | P1 | launch-quality / traffic | Signature hubs (`/tools`,`/data`,`/medications`,`/symptoms`,`/diagnostics`,`/emergency-triage-card`) orphaned from nav/footer — site reads as loose collection, not a product. | Hubs in nav/footer + hub→spoke links; link-check green |
| A7 | Vets | COO | P1 | trust / launch-quality | `vets/[state]/[city]/[slug]` metadata `path` drops the city segment → self-canonical points at a non-existent URL. | path includes city.slug; matches route + JSON-LD |
| A8 | Vets | Monetization | P1 | trust | `/telehealth` has 3 `/go` CTAs with no inline FTC disclosure above the buy surface (§8a). | `AffiliateDisclosure` above the CTAs |
| A9 | Ferret | Monetization | P1 | revenue / trust | Finish Ferret monetization + clinical buy-box sweep; disclosures above every monetized surface (§8a). | All commercial CTAs via `/go`; disclosures above; CSRO sign-off |
| A10 | Dog | Visual+COO | P1 | launch-quality | Embed breed-selector/symptom entry as a homepage product surface (gate 3), not nav links. | Interactive entry on first/second screen (after A1) |
| A11 | PetFood | Visual | P1 | launch-quality | Make compare-two-foods / scoring engine the hero surface (gate 3); ingredient hero photography (gate 1). | Tool embedded on first screen + real ingredient hero (after A1) |
| A12 | Fish | Visual | P1 | launch-quality | Embed volume/stocking/water-change calculators as the hero ("tank control center"), aquascape hero. | Calculators embedded on first screen + aquascape hero (after A1) |
| A13 | Vets | Monetization | P2 | trust | Soften vendor superlatives ("most comprehensive") on `/telehealth` + `(funnels)/pet-insurance` — neutrality on a clinical-authority site. | Attributed/qualified phrasing |
| A14 | Lizard | Visual | P2 | visual | Dark habitat hero + distinctive reptile motif (theme already distinct — leverage it). | Real reptile/habitat hero applied |
| A15 | Vets | COO | P2 | traffic | Down-weight orphan sitemap priorities (`/data`,`/emergency-triage-card` @0.90) once A6 links land. | priorities re-weighted post-linking |

**Batch dispatch now:** Visual → A1 (then A4/A5); CSRO/Carlo → A2/A3 decisions;
Monetization → A8/A9. Hold A10–A12 until A1 lands. A13–A15 are P2 fillers behind the above.

**✅ Completed (COO) since creation:** A6 + A7 (Vets nav wiring + profile canonical, #385).
Plus the cross-cohort orphan-hub/canonical sweep (#386/#387) and all sitemap coverage (#382/#383).
Remaining Active Set is now Visual-gated (A1/A4/A5/A10–A12), Carlo-decision (A2/A3), or
Monetization (A8/A9/A13).

---

## RESERVE — real opportunities, parked (promoted only by CSRO)

**Parked — premium-phase gate (do not start; not launch-blocking):**
- Content-expansion clusters on priority sites (per rule 5/6 — parked until CSRO names a gap).
- Lizard enclosure-size calculator build (Carlo: revisit after first cohort passes the visual bar).
- Horses `/racing` intelligence build (#178) — pending A2 positioning decision.

**Deferred — launch-infra (Carlo §8a: not launch-imminent):**
- DNS cutover (Network Solutions), GA4 properties, Mailchimp/email activation, Stripe membership.
  *Do not nudge Carlo on these until the first 3–5 sites pass the premium bar.*

**Strategic — new assets (parked):**
- `askthevet` / `seniorpets` / `dogpicture` scaffolds → Vercel projects + first cluster (post-cohort).
- `/ask` AI assistant MVP on Dog.com (Anthropic key exists; not built).

**Revenue (Monetization lane, post-trust-sweep):**
- Affiliate-account expansion beyond Skimlinks+Amazon (Chewy/SmartPak/Dover/ImpactRadius) once a
  launch site flips. Mediavine/Raptive gated by pageview thresholds.

**Structural — parked for content judgment (audit-surfaced 2026-06-02):**
- **saddle-com `/english` + `/western`** — title-twins of `/reviews/best-english-saddles` /
  `/reviews/best-western-saddles` (same titles, SERP self-competition). Redirect-to-review vs
  retitle+rel-canonical is a content/SEO call. COO once promoted.
- **lizard-com `/husbandry`** — full duplicate-cluster of the nav-wired `/setup` (8 overlapping
  topics) but `/husbandry/brumation-guide` + `/husbandry/shedding-guide` are unique. Redirect spokes
  to `/setup` (preserving the 2 unique) vs keep+wire — needs a content owner's call. COO once promoted.

**Infra / quality (COO, low-priority, real):**
- Per-site sitemap override coverage is now complete (all 10 generator-faithful, #382/#383) — monitor
  on future page adds; no action unless drift reappears.
- Cross-cohort orphan-hub + canonical-collision sweep: **COMPLETE** — Dog (#380), Vets (#385),
  Fish (#387), Horses/Lizard/Saddle nav (#386); PetFood + Ferret were clean. Re-run only on new pages.

> Reserve grows by **real** opportunities surfaced from audits (per-site launch-quality, IR,
> Monetization, Visual). It is never padded to a count. Weekly: prune merged/stale, promote the next
> ranked batch into the Active Set.

---

## Reporting protocol
- To Carlo: only the **Active Set top** + decisions he owns (currently A2 Horses positioning, A3 Dog
  symptom-checker). Never the full queue.
- To bots: ranked batches only (see "Batch dispatch now").
- Cadence: refresh Active Set after each merge wave; refresh Reserve weekly or when it thins.
