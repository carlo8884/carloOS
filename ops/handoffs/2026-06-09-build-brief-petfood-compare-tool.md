# BUILD BRIEF — PetFood.com "Compare Pet Foods" decision tool

> **Feasibility (3 lines):** (1) Brand data is **NOT structured** today — the 7 `/brands/*` evals are prose-only; the only structured catalog (`condition-diets.ts`) is 100% Rx/therapeutic (monetization-prohibited). A **net-new structured `otc-brands.ts` is the load-bearing prerequisite** and the bulk of the work. (2) This is an **EXTENSION** (a cost-only `/tools/food-cost-calculator` + `/compare` + `/brands` already exist) — slot in and cross-link, don't duplicate. (3) Monetization is viable via existing `chewy-brand`/`amazon-brand` `/go`, **OTC rows only**, gated by an explicit `monetizable` flag.

> **Status:** ready for a fresh, full-context build. Requires the net-new data file BEFORE any UI.
> **Lane:** COO (content/tool/data) + existing Monetization `/go`. No spend/DNS/secrets.
> **Scope:** petfood-com ONLY. Do NOT touch vets-co/dog-com/fish/lizard, `(funnels)/*`, `affiliate-routes.ts`, the `/go` route, or `components/visual/*` (other lanes).
> **Author:** COO · **Created:** 2026-06-09

---

## 1. Objective
Add `/tools/compare-pet-foods`: user picks **2–3 OTC brands and/or diet types** → a **disclosed, data-driven side-by-side comparison table** on WSAVA-aligned criteria (AAFCO substantiation posture, manufacturing footprint, corporate owner, recall posture, formats, price band) + per-row safe OTC buy CTAs. A **transparent comparison, NOT a "best food" ranking**. Organizes the existing `/brands` + `/compare` clusters into one high-intent, citation-worthy decision surface.

- **SEO:** "X vs Y pet food" / "compare pet food" + Table/ItemList JSON-LD; compounds the existing 7-page `/brands` + 9-page `/compare` clusters.
- **GEO:** high — a disclosed criteria table grounded in primary-source fields (AAFCO posture, ownership, recalls) is a classic AI-citation magnet.
- **Monetization:** moderate, high-intent (comparison-stage). OTC rows → `/go` search SKUs; Rx + DCM-grain-free rows → no CTA.
- **Build Effort:** L (net-new `otc-brands.ts` + one client component + one page + hub links; all `/go`/disclosure plumbing exists).
- **Priority:** P2 (this month; polish-mode — extends + interlinks, no page-count expansion). Sequence after Monetization's clinical buy-box sweep so OTC/Rx flags stay consistent.

## 2. User flow
1. Land on `/tools/compare-pet-foods` (linked from `/tools`, `/brands`, `/compare`).
2. Pick 2–3 items: OTC brands (from `otc-brands.ts`) and/or diet types (from existing `/compare` slugs).
3. Render side-by-side table: one column per selection, one row per disclosed criterion.
4. OTC columns → clearly-disclosed "Search on Chewy / Amazon" CTA via `/go/<vendor>-brand/<search>`; Rx/therapeutic/grain-free-DCM columns → "Discuss with your veterinarian" note, **no buy CTA**.
5. Persistent disclosure above the table; each criterion row links to the relevant `/brands/*` or `/compare/*` deep-dive.
6. Edge states guide back to a valid selection.

## 3. Inputs
- Selection set: 2–3 chosen entities (brand IDs and/or diet-type IDs). Client state only; no PII, no network.
- Picker sources: `otc-brands.ts` + a small diet-types list derived from `/compare` slugs.
- No free-text, no health inputs. URL-shareable state (`?compare=a,b,c`) optional stretch (GEO/citation benefit).

## 4. Output states
- **Valid (2–3):** full comparison table + conditional CTAs.
- **<2 selected:** prompt to pick at least two.
- **Rx/therapeutic selected:** "veterinary therapeutic — set by your vet" banner, no CTA, links to `/conditions/*` + `/compare/prescription-vs-otc-diets`.
- **Grain-free DCM context:** FDA-CVM grain-free/DCM note, no "recommended" framing, CTA suppressed.
- **Mixed brand + diet-type:** render applicable criteria; non-applicable cells show "—"/"n/a" honestly, never a fabricated value.

## 5. Data needed (build the catalog FIRST — invent NO numbers/claims)
**Net-new `apps/petfood-com/src/data/otc-brands.ts`** — one record per OTC brand, fields populated ONLY from the existing `/brands/*` evaluation prose. **If a field is not stated in the source eval, set it null / omit it — NEVER infer or fabricate.** Proposed interface:

```ts
export interface OtcBrand {
  id: string
  name: string
  evaluationSlug: string          // links to /brands/<slug>
  corporateOwner: string | null
  aafcoPosture: 'feeding-trials' | 'formulated-to-meet' | 'mixed' | null
  manufacturing: 'owned-facilities' | 'co-manufactured' | 'mixed' | null
  recallPosture: string | null    // qualitative, sourced from eval
  formats: Array<'kibble'|'canned'|'fresh'|'freeze-dried'|'raw'>
  priceBand: 'value' | 'mid' | 'premium' | null   // descriptive, NOT a price number
  grainFreeDcmContext: boolean    // true => surface FDA-CVM note
  monetizable: boolean            // false for Rx-channel brands
  buyVendors: Array<'chewy-brand'|'amazon-brand'>
  buySearchTerm: string
  wsavaReadingNote: string        // "PetFood.com editorial reading", NOT a score
  citedSources: { name: string; url: string }[]
}
```

- **OTC brands (from `/brands`):** Blue Buffalo, Orijen, Acana, Purina Pro Plan, Taste of the Wild, Wellness, Merrick, Kirkland Signature.
- **Hill's / Royal Canin** (`/brands/hills-vs-royal-canin`) are veterinary-therapeutic channel → `monetizable: false` (include comparison-only with a vet-channel note, or exclude — see Q).
- **Diet types (from `/compare`):** wet-vs-dry, raw-vs-cooked, fresh-vs-kibble, grain-free-vs-grain-inclusive, home-cooked-vs-commercial, kibble-vs-canned-cats, freeze-dried-and-dehydrated, prescription-vs-otc, breed-specific.
- **DO NOT** pull rows from `condition-diets.ts` into a monetized comparison (it's all Rx/therapeutic).
- Every field value must be traceable to the corresponding `/brands/*` page; cite sources per record.

## 6. Files / components to reuse
- **Client-tool convention:** `apps/petfood-com/src/app/tools/portion-calculator/Calculator.tsx` (`'use client'` + `useState`/`useMemo`, no network). **Do NOT** put the new component in `components/visual/` (Visual lane; `FoodCostCalculator.tsx` lives there — leave it).
- **Tool page + schema:** `tools/food-cost-calculator/page.tsx`.
- **Hubs to link (cross-link, don't rebuild):** `tools/page.tsx`, `compare/page.tsx`, `brands/page.tsx`.
- **Monetization plumbing (reuse, don't modify):** `data/affiliate-routes.ts` (`chewy-brand`, `amazon-brand`), `/go/[vendor]/[sku]/route.ts`.
- **UI:** `@carloOS/ui` — `buildMetadata`, `buildBreadcrumbSchema`, `SchemaScript`, `AffiliateDisclosure`, `EmailCapture`, `FAQAccordion`. Exactly one BreadcrumbList (no in-body breadcrumb script).

## 7. Trust / claim guardrails (NON-NEGOTIABLE — QC §1)
- **No "best / #1 / cheapest / top-rated food" claims** — "compare on disclosed criteria" only.
- **WSAVA framing:** "PetFood.com editorial reading against WSAVA-derived criteria," explicitly NOT a certification/score/ranking. No brand "wins."
- **No fabricated nutrition numbers / AAFCO values / prices** — render only fields present in `otc-brands.ts`; empty cells "—". Unstated fields are null, never inferred.
- **No paid-placement implication** — restate the `/brands` "never paid placement" line.
- **No Rx/clinical monetization:** `monetizable:false` rows render zero buy CTAs; therapeutic columns say the diet is set by the treating vet.
- **FTC disclosure above any buy CTA / table.** Do not weaken `trust-guard.mjs`.

## 8. Monetization path (OTC-only, no Rx)
- OTC brand columns → `/go/chewy-brand/<encoded search>?s=compare-tool` and `/go/amazon-brand/<...>` (search SKU, not a specific product — matches `/brands/*` honesty).
- Tracking IDs resolve from env at request time (wired); placeholders fine in-repo.
- **Suppress CTA** when `monetizable === false` OR the comparison basis is grain-free-DCM with no safe OTC framing — default suppress on clinical ambiguity.
- Coordinate the OTC/Rx flag set with Monetization via PR comment (matches their clinical buy-box sweep).

## 9. What NOT to do
- No "best food" ranker/score/weighted recommendation.
- No duplicating `food-cost-calculator` (cost math) — compare attributes, cross-link.
- No buy CTAs on Hill's, Royal Canin, `/conditions/*` therapeutic diets, or DCM-flagged grain-free rows.
- No invented AAFCO/guaranteed-analysis/price values — only `priceBand` descriptors + sourced fields.
- No editing `affiliate-routes.ts`, `/go`, `(funnels)/*`, or `components/visual/*`.
- No new content cluster / pages beyond the one tool + its data file (§8a polish mode).
- No touching other sites.

## 10. Done-when
- `/tools/compare-pet-foods` renders; pick 2–3 → disclosed comparison table.
- `otc-brands.ts` exists, typed, every field sourced from `/brands/*` prose (unstated = null).
- OTC rows show `/go` search CTAs below `AffiliateDisclosure`; Rx/DCM rows show no CTA.
- Linked from `/tools`, `/compare`, `/brands`; breadcrumbs + Table/ItemList JSON-LD; exactly one BreadcrumbList.
- `trust-guard`, `metadata-policy`, `link-check` (strict) green; `npx tsc --noEmit` clean for new files.

## 11. Test / verification plan
- `cd apps/petfood-com && npx tsc --noEmit` (use tsc, not build, per §7).
- `trust-guard.mjs` — no "best/#1/cheapest"/fake-credential hits.
- `metadata-policy.mjs` — title/description/canonical on the new page.
- `link-check.mjs` (strict) — all `/brands/*`, `/compare/*`, `/go/*` resolve.
- Manual matrix: (a) 2 OTC brands → both CTAs; (b) brand + Rx → therapeutic column no CTA; (c) grain-free DCM → context note, no "recommended"; (d) <2 selected → prompt; (e) disclosure above CTAs.
- **Data-accuracy audit (CRITICAL):** for each `otc-brands.ts` field, confirm it is stated on the brand's `/brands/<slug>` page; flag any field not traceable to source (fabrication check).
- No row pulls from `condition-diets.ts` into a monetized CTA.

## 12. Open questions
- Diet-type rows: comparison-only (no CTA), since a diet *type* has no single SKU. (Recommend yes.)
- Hill's/Royal Canin: include comparison-only (`monetizable:false`, vet-channel note) vs exclude. (Recommend include — common query.)
- `priceBand` stated qualitatively from prose without implying a current price (no $ figures). Confirm.
- URL-shareable state in v1 (GEO benefit) vs defer. (Low effort, recommend v1.)
- Table styling: existing tool/table styling sufficient, or Visual sign-off for a restyle? Coordinate before structural restyle.

---
**Recommended FIRST task for the fresh build context:** author `apps/petfood-com/src/data/otc-brands.ts` by reading each `/brands/<slug>` eval page and extracting ONLY stated fields (unstated → null), with `citedSources` per record. This data file must land + pass a field-by-field source-traceability audit BEFORE any tool UI is written. Fabrication of any field is the single biggest risk — guard it hard.
