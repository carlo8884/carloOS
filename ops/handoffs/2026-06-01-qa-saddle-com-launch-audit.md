---
from: QA-subagent
to: CSRO
site: saddle-com
status: complete
created: 2026-06-01
---

# Saddle.com — Launch-Quality Audit (read-only, COO+QA lane)

Scope: `apps/saddle-com` only. Read-and-report; nothing modified. Lane-restricted (no Visual/Monetization file edits).

## Executive summary

Saddle.com is in **good launch-quality shape** structurally. All three CI gates pass for saddle-com (`link-check`, `metadata-policy`, `trust-guard` all clean). The signature tool — an interactive Tree Size Estimator — exists and is a real client component. Voice and design are genuinely luxury/Bodoni-distinct in copy.

Two notable issues hold it back from a clean launch sign-off:

1. **P0 trust-bar leak** in `/western` metadata description ("Expert tested") — a fabricated hands-on claim that CI does not catch because it lives in a metadata string, not page body.
2. **P1 distinctness defect persists** — Saddle.com's homepage hero photo is the *same Unsplash image* as Horses.com's homepage hero. The known shared-hero defect is NOT resolved.

Plus several P1/P2 internal-linking gaps: the signature tool and key hubs are under-surfaced (homepage never links to `/tools`, `/fit`, or the estimator; `/accessories` is orphaned; global nav skips the hub pages in favor of review pages).

---

## 1. CI gates (saddle-com isolated)

| Gate | saddle-com result |
|---|---|
| `node scripts/ci/link-check.mjs` | **clean** (0 broken internal links) |
| `node scripts/ci/metadata-policy.mjs` | **clean** (saddle-com listed clean; advisory issues are on horses-com/petfoods-com/ferrets-com, not saddle) |
| `node scripts/ci/trust-guard.mjs` | **clean** (0 forbidden-phrase hits across 1150 TSX) |

All green. No CI blocker. (Note: trust-guard scans page body phrases, not metadata strings — see §2 P0.)

---

## 2. Trust (QC §1)

### P0 — "Expert tested" in `/western` metadata description
`apps/saddle-com/src/app/western/page.tsx:5`
```
description: 'Western saddles ranked by discipline — ... Expert tested with price guides and brand comparisons.'
```
This is a **fabricated hands-on/testing claim** (QC §1: no first-person hands-on/testing claims). It is the page's SEO description, so it surfaces in SERPs and AI answer snippets — higher exposure than body copy. `trust-guard.mjs` does not flag it because the rule set scans rendered phrases, not `buildMetadata` description strings. The page *body* is correctly careful (no testing claims in content). **Fix: reword to "ranked by discipline" / "compared on documented specs."** Recommend Monetization/COO coordination only insofar as wording; this is COO-lane (metadata in a content page).

### Clean elsewhere
- No fabricated DVM/fitter credentials. `/editorial-standards` (line 34) and the estimator page (`tree-size-estimator/page.tsx:239`) explicitly disclaim: "No fitter or saddler credentials are claimed for the Saddle.com editorial team" and "We are not a fitting practice."
- Horses-overlap guides (`horse-first-aid-guide`, `horse-grooming-guide`, `horse-nutrition-guide`, `horse-trailer-guide`, `bridle-fit-guide`) each carry the correct "this page does not claim hands-on testing" disclaimer on their buy-box copy.
- No "every saddle"/"the only" absolute-scope claims. "30+ brands evaluated" (homepage metric strip) is bounded and defensible.
- "No paid placements" claims (homepage, guides hub) are aspirational-honest, not paid-placement language.

---

## 3. Global nav / footer (`packages/config/index.ts` saddle-com block, lines 735-788)

**Populated and healthy** — NOT near-empty like petfood-com was.

Nav (6 items, lines 748-755):
- English Saddles → `/reviews/best-english-saddles`
- Western Saddles → `/reviews/best-western-saddles`
- Guides → `/guides`
- Reviews → `/reviews`
- Fit Checklist → `/saddle-fit-checklist`
- Tools → `/tools`

Footer (3 columns, lines 756-786): **Reviews** (5 links), **Guides** (5 links), **Care & Tack** (4 links). All point to real, existing routes; link-check confirms none broken.

**P2 gap:** Nav routes the two flagship category labels ("English Saddles", "Western Saddles") to *review* pages, bypassing the richer hub pages `/english` and `/fit`. Consider pointing "English Saddles" at `/english` (or `/fit`) so the hub gets nav-level authority. Minor.

---

## 4. Signature homepage product (saddle fit-finder / tree estimator)

**The tool exists and works**, but is **not surfaced on the homepage.**

- `apps/saddle-com/src/app/tools/tree-size-estimator/page.tsx` + interactive client component `src/components/visual/TreeSizeEstimator.tsx` (`'use client'`, 5 `useState`/`useMemo`, full conformation→tree-width input model: 5 horse types × 3 wither profiles × 3 back lengths × English/Western). Rich page: HowTo + SoftwareApplication JSON-LD, gullet/bar width tables, methodology, sources (incl. peer-reviewed citations), 6-item FAQ with schema. This is a genuine category-defining asset.
- **BUT** `apps/saddle-com/src/app/page.tsx` has **zero links** to `/tools`, `/fit`, `/tools/tree-size-estimator`, or `/saddle-fit-checklist` (grep confirms: no matches). Homepage hero CTAs go only to `/guides/saddle-fit-guide` and `/reviews/best-english-saddles`. The category grid's "Saddle-Fit Checklist" card actually links to `/guides/saddle-fit-guide`, not the checklist or the estimator.

**P1:** The signature interactive workflow is buried. It is not on the first or second screen. For a buyer's-guide identity, the fit-finder should be a primary homepage CTA / embedded above the fold. Recommend a homepage hero or category-grid slot linking to `/tools/tree-size-estimator`.

---

## 5. Distinctness from Horses.com

**P1 — shared-hero defect NOT resolved.**

Saddle.com homepage hero photo: `photo-1553284965-83fd3e82fa5a` (`apps/saddle-com/src/app/page.tsx:265`).
Horses.com homepage hero photo: **same** `photo-1553284965-83fd3e82fa5a` (`apps/horses-com/src/app/page.tsx:266`).

All three of Saddle's featured-review images (`photo-1553284965...`, `photo-1474546652694...`, `photo-1469820838967...`) are also reused on Horses.com (homepage, quarter-horse breed page, joint-supplements, saddle-fit-basics). Two sites that must feel distinct currently share their single most prominent image.

Mitigating: copy/typography/identity ARE distinct — Saddle leans Bodoni-didone luxury masthead, cordovan/brass leather-wash CSS, "The Saddle Reference" positioning; Horses is editorial. So the *brand voice* is differentiated; the *photography* is not. This is a Visual-lane fix (image manifest / hero asset) — flag to Visual Bot, do NOT edit here. **P1 because a side-by-side acquirer view would see the identical hero.**

---

## 6. Route tree, orphans, hubs, thin/dup pages

Full route tree (57 `page.tsx` + dynamic `[slug]` routes): home, `/english`, `/western`, `/fit` (+`/fit/[slug]`), `/brands` (+`/brands/[slug]`), `/accessories` (+`/accessories/[slug]`), `/guides` (+18 static guides +`[slug]`), `/reviews` (+13 static reviews +`[slug]`), `/tools` (+tree-size-estimator), `/saddle-fit-checklist`, `/disclosure`, `/editorial-standards`, `/legal/{privacy,terms,affiliate-disclosure}`.

### Orphans / weak inbound linking
- **`/accessories` — effectively orphaned (P1).** Zero inbound links from any page file (only sitemap + config reference it). It is in the sitemap at priority 0.90 but no nav/footer/in-content link reaches it. Either link it (footer "Care & Tack" or nav) or it wastes crawl budget.
- **`/tools` — weak inbound (P2).** Only 1 inbound page link despite being in nav. Homepage doesn't reach it (see §4).
- **`/english` and `/western` hubs — 1 inbound page link each (P2).** Not in nav/footer (nav goes to the review pages instead). `/western` is reached from `/english`-style cross-links only.

### Thin pages
- **`/western` (P2)** — 71 lines, mostly a discipline link-grid + a 5-row brand table whose anchors all point to `/reviews/best-western-saddles#...`. Thinner than `/english` (178 lines) and `/fit`. Borderline thin/templated; acceptable as a hub but light on unique prose. Lower priority than the orphan/trust items.

### Duplicate-route / overlap risk
- No duplicate routes; no duplicate `<title>` flagged by metadata-policy.
- **Topical overlap with Horses.com (P2, monitor):** `/guides/horse-nutrition-guide`, `horse-grooming-guide`, `horse-first-aid-guide`, `horse-dentistry-guide`, `horse-trailer-guide`, `trailer-loading-guide`, `buying-first-horse`, `lunging-basics`, `horse-body-condition-scoring` are general horse-care topics that read as Horses.com territory, diluting Saddle's "tack & equipment buyer's guide" focus and risking cross-site duplicate-content canonicalization. Not broken, but off-identity for a luxury tack site. Recommend CSRO review whether these belong on Saddle at all.

---

## 7. Breadcrumbs + JSON-LD; sitemap/robots

### Breadcrumbs / schema coverage — P2
~28 of 57 `page.tsx` files reference `Breadcrumb`/`SchemaScript`/`buildBreadcrumbSchema` (~49%). Coverage is good on dynamic templates (`brands/[slug]`, `fit/[slug]`, `accessories/[slug]`), the estimator (full HowTo + SoftwareApplication + breadcrumb via ArticleLayout), and `/fit`. **Gaps:** homepage (`page.tsx`) has no JSON-LD (acceptable for home, but a WebSite/Organization schema would help GEO); `/western`, `/english`, `/tools`, `/guides` hubs lack breadcrumb/schema markup. For an AI-citation-target buyer's guide, hubs should carry BreadcrumbList + ItemList/CollectionPage schema.

### Sitemap — healthy (`apps/saddle-com/src/app/sitemap.ts`)
62 URLs, sane priorities: home 1.00, `/tools` 0.95 (correctly highest non-home — signature tool), hubs 0.90, estimator 0.85, detail pages 0.70, legal 0.20. Auto-generated by `scripts/regenerate-sitemaps.mjs`. **Note:** sitemap lists `/accessories` (0.90) and `/tools` even though they are under-linked internally (§6) — sitemap priority can't compensate for missing internal links.

### Robots — healthy (`apps/saddle-com/src/app/robots.ts`)
Delegates to shared `buildRobots('https://saddle.com')`. Standard.

---

## 8. Internal nav coherence
- No dead links (link-check clean). All nav + footer targets resolve.
- Cross-links between hubs exist (`/fit`→`/brands`/`/reviews`, `/western`→`/english`/`/guides`, `/tools`→estimator/checklist/`/fit`).
- Incoherence is one of *emphasis*, not breakage: hubs (`/english`, `/fit`, `/accessories`) under-linked while review pages get nav slots; signature tool absent from homepage.

---

## P0 launch-blockers
1. **`/western` metadata "Expert tested" fabricated-testing claim** — `apps/saddle-com/src/app/western/page.tsx:5`. QC §1 trust-bar violation in a SERP/AI-visible description. Reword (e.g., "ranked by discipline; compared on documented specs"). COO-lane, one-line fix.

## P1 backlog
2. **Shared homepage hero with Horses.com** — both use Unsplash `photo-1553284965-83fd3e82fa5a` (`saddle-com/page.tsx:265` vs `horses-com/page.tsx:266`), plus all 3 featured-review images reused. Distinctness defect for two sites that must not feel the same. **Visual-lane** — flag to Visual Bot; do not edit manifest here.
3. **Signature tool not on homepage** — homepage has zero links to `/tools` / `/tools/tree-size-estimator` / `/fit` / `/saddle-fit-checklist`. Surface the fit-finder as a primary homepage CTA / first-or-second screen. `apps/saddle-com/src/app/page.tsx`.
4. **`/accessories` orphaned** — no inbound internal links (sitemap-only). Link from footer/nav or in-content, or de-prioritize in sitemap.

## P2 backlog
5. **Hub schema/breadcrumb gaps** — add BreadcrumbList + ItemList/CollectionPage JSON-LD to `/english`, `/western`, `/tools`, `/guides`; add WebSite/Organization schema to homepage. (GEO/citation lift.)
6. **Nav points category labels to review pages, bypassing hubs** — consider routing "English Saddles" → `/english` (or `/fit`), strengthening hub authority. `packages/config/index.ts:749-750`.
7. **`/western` is thin/templated** (71 lines, link-grid + table) vs `/english` (178). Add unique prose or merge into `/fit`.
8. **Horse-care guides off-identity / Horses.com overlap** — `horse-nutrition-guide`, `horse-grooming-guide`, `horse-first-aid-guide`, `horse-dentistry-guide`, `horse-trailer-guide`, `trailer-loading-guide`, `buying-first-horse`, `lunging-basics`, `horse-body-condition-scoring` read as Horses.com territory; duplicate-content/canonical risk + dilutes luxury-tack focus. CSRO decision on scope.
9. **`/tools` / `/english` / `/western` hubs each have only ~1 inbound page link** — strengthen internal linking from reviews/guides into the hubs.

---

## Evidence (files read)
- `apps/saddle-com/src/app/page.tsx`, `tools/page.tsx`, `tools/tree-size-estimator/page.tsx`, `fit/page.tsx`, `western/page.tsx`, `sitemap.ts`, `robots.ts`
- `apps/saddle-com/src/components/visual/TreeSizeEstimator.tsx` (read-only, not modified)
- `packages/config/index.ts` (saddle-com block lines 735-788; cross-portfolio lines 1196-1209)
- `apps/horses-com/src/app/page.tsx` (hero-image comparison only)
- CI: `scripts/ci/{link-check,metadata-policy,trust-guard}.mjs` run output
- grep sweeps: inbound-link counts, trust-phrase scan, breadcrumb/schema coverage, redirect-stub check (none found)
