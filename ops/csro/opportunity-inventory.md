# CarloOS Opportunity Inventory (living backlog — real items only)

**Owner:** CSRO. **Refreshed:** 2026-06-02. Companion to `opportunity-queue.md` (which holds the
ranked ACTIVE set). This is the **depth reserve**: the real opportunity space the fleet draws from.
Per the governing rules it grows toward ~1000 *real* items via audits — **never padded to a number**.
Each line: `site · lane · category · value · done-when`. Categories: LQ=launch-quality, REV=revenue,
TRAF=traffic, TRUST=trust, VIS=visual, STRAT=strategic. Status: ☐ open · ▶ active · ✅ done · ⏸ parked.

> Promotion: CSRO moves items into `opportunity-queue.md` Active Set only when unblocked + top-leverage.
> Content-expansion items are ⏸ parked under the premium phase unless CSRO names a gap.

---

## Portfolio-wide systems (apply to all 10 sites)

- ☐ COO·LQ — **Hub ItemList JSON-LD coverage**: every index/hub page emits `ItemList` of its children
  (done: dog `/breeds`). Audit each site's hubs; add where missing. *Done-when: each hub has ItemList.*
- ☐ COO·LQ — **Breadcrumb JSON-LD + visible breadcrumb** on every depth≥2 page. *Done-when: 100% coverage.*
- ☐ COO·TRAF — **Reciprocal hub→spoke→hub linking** pass per cluster (no one-way dead-ends).
- ☐ COO·TRAF — **CrossPortfolioCard** present on high-traffic pages (uses `getCrossPortfolioRecommendations`).
- ☐ COO·LQ — **OG/Twitter image completeness**: every site has a real `defaultOgImage`; key pages set `ogImage`.
- ☐ COO·LQ — **robots.txt + canonical tag** consistency audit across all 10 (post-sitemap-refresh).
- ✅ COO·LQ — Sitemap generator-faithful across all 10 (#382/#383). Monitor on new pages.
- ✅ COO·LQ — Orphan-hub + canonical-collision sweep, all priority sites + 2 non-priority (clean).
- ✅ COO·LQ — Homepage live-tool product surface (gate 3) on all 8 priority sites.
- ▶ COO·SEO — **Advisory metadata length cleanup** (47 items) — in flight (horses; ferrets+petfoods).
- ☐ VIS·VIS — **Premium hero imagery** per D3 (stock now via sync on Carlo's Mac; commission later). Visual.
- ☐ VIS·VIS — Apply D5 premium first-screen standard to all 8 (gates 1/5/6). Visual.
- ☐ MON·REV — Affiliate-leak audit re-run portfolio-wide; all commercial CTAs via `/go`. Monetization.
- ☐ MON·TRUST — FTC disclosure above every monetized surface (per §8a). Monetization.
- ⏸ STRAT — DNS / GA4 / Mailchimp / Stripe activation (deferred until first 3–5 sites pass premium bar; Carlo).
- ⏸ STRAT — `/ask` AI assistant MVP on Dog.com (Anthropic key exists). Carlo/product.

## Dog.com (flagship, offer-backed)
- ✅ Trust P0 (symptom-guide authorship), tools surfaced, sitemap/ItemList/compare, dedup, wizard embed.
- ☐ COO·TRAF — `/compare/[slug]` 30 pairs: add reciprocal links from each breed profile to its comparisons.
- ☐ COO·LQ — Breed profiles: ensure `buildProductSchema`/`Breed` schema where applicable; FAQ schema on Q&A.
- ☐ VIS — Emotional real-dog hero (D3). ☐ VIS — make the wizard read as the hero product (N3).
- ⏸ STRAT — interactive symptom-triage tool (post-launch, D2 deferred).

## Fish.com
- ✅ Canonical dedup (3 species-guides + /water), equipment/water hubs wired, volume calc embedded.
- ☐ COO·LQ — Species profiles: `ItemList` on `/species`; parameter-target tables → structured data.
- ☐ VIS — Aquascape hero (D3); frame embedded calculators as "tank control center."

## Horses.com
- ▶ SEO — metadata trim (in flight). 
- ☐ STRAT/VIS — **D1 hybrid build**: prominent `/racing` flagship entry on homepage first screen. (CSRO scope + Visual)
- ☐ COO·LQ — `ItemList` on /breeds, /disciplines, /health, /nutrition, /tack hubs.
- ☐ VIS — distinct equine hero (D4: not shared with Saddle).

## Vets.co (clinical authority — strictest trust)
- ✅ Orphan hubs wired, profile canonical fixed, estimator embedded.
- ☐ MON·TRUST — telehealth inline FTC disclosure (N4). ☐ MON — soften vendor superlatives (N6).
- ⏸ COO — suppress placeholder LocalBusiness/Veterinarian JSON-LD on noindex `/vets/*` leaves (folds into
  the vet-directory data-source decision). ☐ down-weight /data,/emergency-triage-card sitemap priority.
- ☐ VIS — texture-led clinical hero (D3).

## PetFood.com
- ✅ FTC trim, cost-calculator embedded + surfaced, sitemap (P0).
- ☐ COO·LQ — `/methodology` redirect verified; ensure rubric page has structured data.
- ☐ VIS — ingredient-macro hero (no dog-with-bowl cliché).

## Saddle.com
- ✅ D6 /english+/western discipline-hub reframe; /brands+/fit wired; Stubben first-person fix.
- ☐ VIS — **distinct luxury tack hero** (D4 — currently shares art with Horses). Highest saddle item.
- ☐ COO·LQ — `/brands/[slug]` 11 brand pages: ItemList on /brands; ensure each has Product/Brand schema.

## Lizard.com
- ✅ /husbandry→/setup dedup (D7), builds/first-year-care wired, UVB calc embedded, nav.
- ☐ VIS — dark habitat hero (theme already distinct — leverage it).
- ⏸ enclosure-size calculator build (Carlo-deferred; revisit post first-cohort premium pass).

## Ferret.com (launch #1)
- ✅ trust line, /find-an-exotic-vet, food-evaluator embedded.
- ☐ VIS — **real ferret hero + owner-intent first screen** (fix wrong-species defect; brief #372). Top ferret item.
- ☐ MON·REV — finish monetization + clinical buy-box sweep (N5).

## Ferrets.com (state-legality directory — non-priority)
- ✅ Structurally clean (N7 audit). ▶ metadata trim (in flight).
- ☐ COO·LQ — `directory/rescues`: 51 state links render to a "Q3 2026 / 404-by-design" route — gate them
  behind the coming-soon state (render as non-clickable) so no live 404 anchors. *Low-priority, real papercut.*

## PetFoods.com (ingredient/brand DB — non-priority)
- ✅ Structurally clean (N7). ▶ metadata trim (in flight).
- ☐ COO·LQ — ensure ingredient/brand `[slug]` pages carry Product/Definition schema for GEO citation.

---

### How this scales toward depth honestly
New real items enter only from: per-site launch-quality audits, IR adversarial reviews, Monetization
sweeps, Visual passes, and post-launch GA4 data. The inventory is pruned/merged weekly. It is the
*menu*; `opportunity-queue.md` is the *order*; the Premium Domain Launch Bar is the *bar*.
