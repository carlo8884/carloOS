---
from: coo
to: visual
status: ready
created: 2026-06-07
next_action: "Visual Bot: action premium-polish items on Fish.com + PetFood.com per priority; coordinate on shared ArticleLayout via PR comments."
---

# COO → Visual: Premium-Visual Design Review — Fish.com + PetFood.com
**Audit date:** 2026-06-07 · **Auditor:** COO sub-agent (read-only)
**Scope:** homepages, primary hubs (/species, /health, /tools, /brands, /diets, /compare), representative article pages (ich-treatment, orijen-vs-acana), shared ArticleLayout + StockImage + Nav primitives.

---

## Summary judgment

**Fish.com:** The homepage is genuinely premium — a well-architected image-first hero, strong dark teal brand identity, section rhythm that alternates dark/surface/white bands, embedded live calculator, and real aquarium photography throughout the above-fold surface. The homepage is the strongest page on the site visually. The drop in quality is sharp once you leave it: hub pages (/species, /health, /tools) revert to a simpler dark-banner-plus-StockImage-plus-link-grid pattern with noticeably less visual investment. The species hub in particular exposes a critical gap: its 8-card photo grid renders the branded paw placeholder for 6 of 8 species thumbnails (the 2 synced ones — `fish-com:species-neon-tetra` and `fish-com:species-goldfish` — render real images; the other 6 show the gradient-paw placeholder).

**PetFood.com:** The homepage is architecturally strong and differentiates well from Fish via the moss-green palette, JetBrains Mono data-voice eyebrows, the "Consumer Reports of pet food" framing, and a scoring-dimensions table that is a genuinely distinctive design artifact. The homepage is visually coherent and legible. The brand's biggest weakness is its secondary hubs (/brands, /diets, /compare): all three are essentially identical in layout — dark banner, breadcrumb, wide StockImage, then a plain list of `<li>` card links — with no visual hierarchy differentiation between them. Additionally, `/brands/page.tsx` references `petfood-com:brands-hero` which IS synced, but `/diets`, `/feeding`, `/supplements`, `/guides`, `/myths`, and `/tools` hub pages reference unsynced keys that will render the branded paw placeholder.

Both sites are distinctly styled from each other and from the rest of the portfolio — the teal vs moss-green palette split is clear, the Fish italic-display voice vs PetFood mono-eyebrow voice is clear. Acquirer-visible differentiation passes at the brand level. The gap is in the hub-page visual tier, not the homepage.

---

## Fish.com — Prioritized Issue Table

| Surface (page) | Issue | Premium-lift recommendation | Priority |
|---|---|---|---|
| `/species` hub | **Photo grid renders paw placeholders for 6 of 8 species cards.** Keys `fish-com:species-thumb-betta`, `fish-com:species-thumb-clownfish`, `fish-com:species-thumb-goldfish`, `fish-com:species-thumb-angelfish`, `fish-com:species-thumb-discus`, `fish-com:species-thumb-guppy`, `fish-com:species-thumb-oscar` are absent from `image-manifest.json`. Only `fish-com:species-neon-tetra` and `fish-com:species-goldfish` are synced. The photo grid (`grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`) is the most visible element on this page after the hero banner. | Sync all 6 missing species thumbnail keys via `scripts/sync-images.mjs` on Carlo's machine. Suggested queries: `"betta fish portrait"`, `"clownfish anemone"`, `"goldfish aquarium"`, `"angelfish planted tank"`, `"discus fish"`, `"guppy fish aquarium"`, `"oscar cichlid"`. Alternatively, COO can add fallback handling so unsynced cards degrade gracefully without a photo slot (text-only species card matching the homepage pattern). | **P0** |
| `/tools` hub | **Hero image slot (`fish-com:tools-hero`) is unsynced** — the top of the tools hub page renders the branded paw placeholder at 16:9 immediately below the dark hero section. This is the highest-traffic utility hub. | Sync `fish-com:tools-hero`. Suggested query: `"aquarium test kit water chemistry"` or a macro shot of a planted tank with calculator/measuring instrument visual. | **P0** |
| `/health` hub | **`fish-com:category-health` IS synced** (present in manifest) — the health hub hero renders a real photo. **This is already working correctly.** No action needed on the image itself. The section is text-only card links with minimal visual variety; consider a tiered card pattern separating "essential first reads" from reference articles to add visual rhythm. | Use the existing real image well. Visual Bot: consider a two-tier card layout — a featured row (2 large cards for Nitrogen Cycle + Disease Guide with short descriptive copy) above the reference grid — to lift this hub above the plain link-list baseline. | **P1** |
| `/species` hub — hero panel | The 16:9 `fish-com:category-species` banner renders a real betta photo and looks solid, but it appears as a flat `<div>` block with no overlay text, no eyebrow, no CTA — just the raw ImageCard `variant="wide"`. It lacks the image-panel treatment the homepage uses (gradient scrim, overlaid eyebrow + CTA). | Apply the gradient-scrim-plus-overlaid-label treatment matching the homepage species panel (section `"Species library · 37+ profiles..."`) to the hub banner. This is a CSS/markup change in `apps/fish-com/src/app/species/page.tsx`. | **P1** |
| `/health` hub — hero panel | Same flat `variant="wide"` treatment as /species. `fish-com:category-health` is synced but rendered without a scrim or label overlay. | Same lift as /species — add gradient scrim + overlaid eyebrow label to the 16:9 banner. | **P1** |
| Article pages (e.g. `/health/ich-treatment`) | **ArticleLayout hero has no photography.** The shared `ArticleLayout` component supports an optional `hero.image` prop; the ich-treatment and all other fish-com article pages pass `imageUrl: ''` in `buildArticleSchema` and do not pass `hero.image`. The hero renders as a plain dark band with title + subtitle + byline — no editorial image above the fold. The buy-box CTA at article bottom uses raw inline `style={{}}` objects instead of the design system tokens. | For high-priority articles (ich-treatment, fin-rot, fish-disease-guide, new-tank-syndrome): pass a `hero.image` to `ArticleLayout` using the most relevant synced key (e.g. `fish-com:cornerstone-cycling` for disease/water articles). Visual Bot: evaluate whether `ArticleLayout` should support a `manifestKey` prop (COO lane to coordinate on `packages/ui/src/components/ArticleLayout.tsx`). The inline buy-box `style={{}}` blocks should be moved to Tailwind tokens for design-system consistency. | **P1** |
| `/glossary` hub | **`fish-com:glossary-hero` is unsynced** — renders paw placeholder. | Sync `fish-com:glossary-hero`. Suggested query: `"aquarist notebook water parameters"`. | **P2** |
| `/water-parameters` page | **`fish-com:water-parameters-hero` is unsynced** — renders paw placeholder at the top of a high-value cornerstone page. | Sync `fish-com:water-parameters-hero`. Suggested query: `"aquarium test strips pH ammonia"`. | **P2** |
| Homepage — species section | Featured-species cards are text-only by design (per page comments: species thumbnails failed to sync so zero-placeholder treatment applied). This is smart defensive design and was the correct call. However once the 6 thumb keys are synced (P0 above), the homepage species text-card section should be upgraded to an image-card grid matching the hub pattern for visual consistency. | After thumbnail key sync: upgrade the 4 homepage FEATURED_SPECIES text cards to `<StockImage>` backed cards with the relevant thumb keys. | **P2** |
| Overall — dark-mode coherence | Fish.com is not a dark-mode site — it is a site with a near-black masthead (`--brand-dark: #06121B`) and light content sections. The homepage alternates correctly (dark → surface → dark → surface → white → surface). Hub pages vary: /species and /health lead with a dark banner but transition directly to a flat `bg-brand-surface` grid with no intermediate section rhythm. The homepage's alternating-band pattern, which creates the magazine feel, does not propagate to most hub or article pages. | Apply a consistent 2–3 section rhythm to hub pages: dark hero band → [optional trust/filter strip] → main content on surface/white. The health hub already partially does this; the species hub needs the trust bar and cleaner section breaks. | **P2** |
| Nav | Nav uses `bg-brand-white/95` backdrop — works, but the fish-com dark masthead means the nav transitions from a transparent white over the hero to white-on-white on scroll. No transparent/dark-overlay treatment for the nav while the hero is in view (a common magazine pattern). | Consider a transparent/dark nav state while the hero is in viewport that transitions to white on scroll. This is a shared-primitive change requiring COO coordination on `packages/ui/src/components/Nav.tsx`. | **P2** |

---

## PetFood.com — Prioritized Issue Table

| Surface (page) | Issue | Premium-lift recommendation | Priority |
|---|---|---|---|
| `/brands` hub | **Photo grid is a plain `<ul>` of text-card `<li>` links.** The layout is: dark hero banner → breadcrumb → `petfood-com:brands-hero` (synced, real image) at 16:9 `variant="wide"` → plain list. All 7 brand evaluation cards are identical `py-5 px-6 rounded-lg border` blocks with a title + description. There is no visual hierarchy — Orijen vs Acana (the flagship comparison, highest commercial value) looks identical to Kirkland Signature. | Apply a featured-first treatment: a full-width flagship card for Orijen vs Acana (the highest-value comparison) with the `petfood-com:category-brands` photo panel, `[FLAGSHIP COMPARISON]` mono badge. Then a 2-column grid for the remaining 6 evaluations. | **P0** |
| `/diets`, `/feeding`, `/supplements`, `/guides`, `/myths`, `/tools` hubs | **Six hub pages reference unsynced image keys** that will render the branded paw placeholder at the top of the page: `petfood-com:diets-hero` (unsynced), `petfood-com:feeding-hero` (unsynced), `petfood-com:supplements-hero` (unsynced), `petfood-com:guides-hero` (unsynced), `petfood-com:myths-hero` (unsynced), `petfood-com:tools-hero` (unsynced). Only `/brands` (`petfood-com:brands-hero`) uses a synced key at the hub level. The `/diets` hub (`petfood-com:diets-hero`) is a high-intent clinical page and should be highest priority of this group. | Sync the six missing hub keys via `scripts/sync-images.mjs` on Carlo's machine. Priority order: `petfood-com:diets-hero` (clinical/therapeutic, high-intent), `petfood-com:guides-hero` (regulatory reference, citation magnet), `petfood-com:feeding-hero`, `petfood-com:tools-hero`, `petfood-com:supplements-hero`, `petfood-com:myths-hero`. Suggested queries: diets → `"prescription veterinary diet pet food clinical"`, guides → `"pet food label close-up AAFCO"`, feeding → `"dog eating from bowl measured portion"`. | **P0** |
| `/compare` hub | **`petfood-com:compare-hero` IS synced** and used on the homepage entry tile — but the `/compare` hub page itself does not use a `<StockImage>` at all. The page is a dark hero banner + breadcrumb + plain `<ul>` list. No imagery on the hub. | Add `<StockImage manifestKey="petfood-com:compare-hero" aspect="16:9" variant="wide" />` to the `/compare` hub page (mirrors the brands/diets pattern). Add a featured-comparison treatment for the top-traffic comparisons (wet vs dry, grain-free vs grain-inclusive). | **P1** |
| `/diets` hub — card layout | All 14 diet cards are the same `py-5 px-6 rounded-lg border` text-card layout with truncated descriptions (many end in `...`). No visual distinction between clinical (kidney disease, diabetic) and lifestyle (weight management, puppy/kitten) tiers. | Apply a two-tier treatment: "Prescription/clinical" tier (kidney, diabetic, cardiac, urinary, pancreatitis, liver, hyperthyroid, food-allergy) with a distinct chip badge (`[THERAPEUTIC · Rx oversight]` in mono) to signal clinical weight, separate from the lifestyle/growth diets below. This matches the brand's authority posture. | **P1** |
| `/brands/orijen-vs-acana-comparison` article | **ArticleLayout hero has no editorial photography.** The `buildArticleSchema` `imageUrl: ''` and `hero` prop carry no image. The article header is text-only. The in-article `BuyBox` and comparison table are well-executed. The brand entry tiles on the homepage are image-backed; the article itself should match. | Pass `hero.image` or add a `manifestKey` prop — the `petfood-com:category-brands` key is synced and shows a premium bag on a retail shelf, which would anchor this article visually. COO to coordinate with Visual on `ArticleLayout.tsx` prop extension. | **P1** |
| Homepage — methodology section | The 5-dimension scoring table on the homepage (`md:col-span-8`) is already a premium design artifact — the mono-label table with `[KEY]` brackets, `01–05` numbering, and the `weighted → /10` header is genuinely distinctive. This is one of the best design decisions on any site in the portfolio. The `petfood-com:category-conditions` prescription-diet panel adjacent to it is synced and real. **Call-out: this section already looks premium and should be preserved.** | No action needed. Flag for Visual Bot: do not flatten this section in a polish pass — it is a differentiating asset. | (keep) |
| Hub pages — section rhythm | All secondary hubs (/brands, /diets, /compare, /feeding, /guides) follow the same structural template: dark hero → breadcrumb → image → list → email capture. The pages are visually indistinguishable from each other mid-scroll. | Introduce one visual differentiator per hub section: a mono-label divider strip (like the homepage's `REGULATORY REFERENCES · 03` band), or a featured/cornerstone card above the list, or a data-density callout for a key stat (e.g. on /diets: "14 therapeutic diet references · Rx oversight noted"). | **P1** |
| Homepage — FoodCostCalculator section | The `FoodCostCalculator` component is embedded on the homepage and lives in `apps/petfood-com/src/components/visual/FoodCostCalculator.tsx` (Visual lane). The section heading at `text-4xl md:text-5xl` is the right scale. The calculator itself is a Visual lane component; Visual Bot should ensure the input fields, output chips, and comparison-mode layout are as polished as the surrounding section (especially on mobile). | Visual Bot: audit `FoodCostCalculator` mobile presentation. On narrow screens the side-by-side comparison mode needs overflow handling. The output should use the `.score-chip` design token (`globals.css`) for numeric results rather than plain text. | **P1** |
| Overall — dark/surface transition | The dark hero on /brands, /diets, etc. is `--brand-dark: #1A1F18` (very dark olive-black). This is correct and differentiated. However the breadcrumb immediately below it switches to `bg-brand-surface` — the transition is abrupt. | Add a thin transitional band between the dark hero and the breadcrumb: `bg-brand-dark/30` or a bottom border that steps down in darkness. One CSS token change; high visual impact on all secondary hubs. | **P2** |
| Nav | Same nav concern as Fish.com: the nav is always white (`bg-brand-white/95`), so on the dark hero sections of every page the nav visually "detaches" from the page. PetFood.com uses a near-black-olive dark, which reads premium, but the white nav sitting above it breaks the immersive feel. | Same recommendation as Fish.com: transparent/dark nav variant while hero is in viewport. Shared `packages/ui/src/components/Nav.tsx` change; coordinate via PR. | **P2** |

---

## Unsynced manifestKey inventory (consolidated — action for Carlo/image-queries.json)

### Fish.com — unsynced keys rendering paw placeholder

| Key | Used on | Suggested sync query |
|---|---|---|
| `fish-com:species-thumb-betta` | `/species` hub photo grid | `"betta fish portrait aquarium"` |
| `fish-com:species-thumb-clownfish` | `/species` hub photo grid | `"clownfish anemone reef"` |
| `fish-com:species-thumb-angelfish` | `/species` hub photo grid | `"angelfish planted freshwater aquarium"` |
| `fish-com:species-thumb-discus` | `/species` hub photo grid | `"discus fish colorful aquarium"` |
| `fish-com:species-thumb-guppy` | `/species` hub photo grid | `"guppy fish vivid aquarium"` |
| `fish-com:species-thumb-oscar` | `/species` hub photo grid | `"oscar cichlid aquarium"` |
| `fish-com:tools-hero` | `/tools` hub top banner | `"aquarium water test kit chemistry lab"` |
| `fish-com:glossary-hero` | `/glossary` hub top banner | `"aquarist notebook water parameters"` |
| `fish-com:water-parameters-hero` | `/water-parameters` hub top banner | `"aquarium test strips pH ammonia"` |

**Already synced (no action needed):** `fish-com:hero`, `fish-com:category-setup`, `fish-com:cornerstone-cycling`, `fish-com:category-species`, `fish-com:category-equipment`, `fish-com:category-reviews`, `fish-com:category-health`, `fish-com:category-saltwater`, `fish-com:category-planted`, `fish-com:category-freshwater`, `fish-com:cornerstone-species-betta`, `fish-com:species-neon-tetra`, `fish-com:species-goldfish`, `fish-com:tool-cycling-estimator`.

### PetFood.com — unsynced keys rendering paw placeholder

| Key | Used on | Suggested sync query |
|---|---|---|
| `petfood-com:diets-hero` | `/diets` hub top banner | `"prescription veterinary diet pet food"` |
| `petfood-com:feeding-hero` | `/feeding` hub top banner | `"dog eating measured bowl portion"` |
| `petfood-com:supplements-hero` | `/supplements` hub top banner | `"pet supplements vitamins nutrition"` |
| `petfood-com:guides-hero` | `/guides` hub top banner | `"pet food label reading close-up"` |
| `petfood-com:myths-hero` | `/myths` hub top banner | `"dog food ingredients skeptical"` |
| `petfood-com:tools-hero` | `/tools` hub top banner | `"food scale measuring calculator"` |

**Already synced (no action needed):** `petfood-com:hero`, `petfood-com:nutrition-hero`, `petfood-com:brands-hero`, `petfood-com:ingredients-hero`, `petfood-com:category-species`, `petfood-com:compare-hero`, `petfood-com:category-nutrition`, `petfood-com:category-life-stage`, `petfood-com:category-conditions`, `petfood-com:category-brands`, `petfood-com:category-ingredients`, `petfood-com:cornerstone-methodology`, `petfood-com:tool-food-cost`.

---

## What already looks premium — preserve, don't flatten

### Fish.com
- **Homepage hero section** — full-bleed aquarium photo (`fish-com:hero`), dark teal gradient scrim, Cormorant Garamond italic H1 at `clamp(34px, 6vw, 66px)`, dual-CTA with brand-primary primary button + frosted-glass secondary. This is the benchmark for the rest of the site.
- **Homepage "Water Safety" section** — dark band with `fish-com:cornerstone-cycling` photo in a card panel left, copy right. The asymmetric grid and the `ring-1 ring-white/10 shadow-[0_8px_40px_...]` treatment on the image card reads as editorial-quality.
- **Homepage embedded VolumeCalculator** — embedding a live interactive calculator in the Tank Planning section (rather than a link to one) is a differentiating product decision; the visual framing (`Step 1 · Size your tank` eyebrow, white card on surface background) is clean.
- **Cormorant Garamond italic display voice** — the italic treatment on all H1/H2 display text is consistent, distinctive, and appropriate for the aquarium-magazine positioning. Do not straighten or replace.
- **Problem-triage cards on homepage** — the 6 SVG-icon cards on the dark band are functional and visually consistent. The SVG icons are bespoke aquarium-relevant glyphs (not generic), which adds character.
- **Dark/surface/white band alternation on homepage** — the section rhythm is sophisticated and produces a magazine-spread feel. This pattern should extend to hub pages.

### PetFood.com
- **Methodology scoring dimensions table** — the `01–05` numbered rows, mono `[KEY]` brackets, `SCORING DIMENSIONS · 5 weighted → /10` header, green-tinted table surface — this is the most distinctive design component in the portfolio. It reads as a real analytical instrument, not a marketing page. Preserve exactly.
- **Mono eyebrow system throughout** — `font-mono text-2xs uppercase tracking-eyebrow` with `[BRACKET_LABEL]` and `CATEGORY · SUBCATEGORY` patterns run consistently through the homepage, article pages, and tool cards. This is the defining visual language of the site and differentiates it from every other site in the portfolio.
- **Hero H1 treatment** — at `clamp(36px, 6vw, 76px)`, non-italic (correctly contrasts with Fish's italic), Cormorant Garamond `font-medium` weight, with the three-CTA cluster (methodology + label + calculator) below. Clean and authoritative.
- **Reference entry tiles (4-up grid)** — `3:4` aspect image tiles with `[EYEBROW]` mono labels and the flagship Orijen vs Acana tile using `from-brand-primary-dark/90` bottom gradient are well-executed. The `flagship` variant ring treatment distinguishes the hero tile effectively.
- **FTC editorial disclosure footer block** — the mono-label `EDITORIAL DISCLOSURE` left column with the two-paragraph disclosure is typographically coherent and reads as institutional rather than boilerplate. Keep exactly as-is.

---

## Top premium-visual wins per site

### Fish.com — top 3 wins (highest impact per effort)

1. **Sync 6 species thumbnail keys** (`fish-com:species-thumb-betta`, `-clownfish`, `-angelfish`, `-discus`, `-guppy`, `-oscar`) + `fish-com:tools-hero` + `fish-com:water-parameters-hero` — eliminates paw placeholders from the 3 most-visited non-homepage pages. Single script run on Carlo's machine + commit manifest. No .tsx changes needed. Impact: species hub goes from 6 paw placeholders to a real photo grid; tools hub top banner resolves.

2. **Apply gradient-scrim + overlaid label to the 16:9 hub banners** on `/species` and `/health` — one-line overlay div pattern already used on the homepage (copy from homepage pattern into hub pages at `apps/fish-com/src/app/species/page.tsx` line 99 and `apps/fish-com/src/app/health/page.tsx` line 50). Converts flat image dumps into image-panel navigation cues matching the homepage standard.

3. **Add `hero.image` support to ArticleLayout for Fish.com** — pass `fish-com:cornerstone-cycling` or `fish-com:cornerstone-species-betta` as `hero.image` on the 3–4 highest-traffic disease/species articles. The `ArticleLayout` component already supports `hero.image` and `hero.imageAlt` props; the pages just aren't passing them. Zero new infrastructure needed; significant visual uplift on entry pages that currently show text-only dark hero.

### PetFood.com — top 3 wins (highest impact per effort)

1. **Sync 5 unsynced hub hero keys** (`petfood-com:diets-hero`, `petfood-com:feeding-hero`, `petfood-com:guides-hero`, `petfood-com:tools-hero`, `petfood-com:myths-hero`) — same effort as the Fish sync run. Eliminates paw placeholders from all secondary hub pages. The `/diets` hub is the most commercially important (clinical diet pages are high-intent affiliate surfaces) and should be prioritized first.

2. **Elevate `/brands` hub with a featured flagship card** — the Orijen vs Acana comparison is the flagship brand evaluation and the highest-value commercial page in the brands cluster. Visually it is indistinguishable from the Kirkland Signature card. A featured-first treatment (full-width card with `petfood-com:category-brands` photo panel, `[FLAGSHIP COMPARISON]` mono badge) communicates editorial hierarchy and draws users to the highest-quality content. Low code complexity; high acquirer impression.

3. **Add `[THERAPEUTIC · Rx oversight]` mono-badge tier to `/diets` hub card list** — separating the 14 diet cards into prescription/clinical tier and lifestyle tier uses the existing mono-bracket design language to add visual hierarchy with zero new component work. Signals clinical authority to the acquirer while improving user navigation.

---

## Files referenced

- `apps/fish-com/src/app/page.tsx` — homepage (premium, benchmark)
- `apps/fish-com/src/app/species/page.tsx` — placeholder grid issue (P0); hub banner overlay (P1)
- `apps/fish-com/src/app/tools/page.tsx` — tools-hero unsynced (P0)
- `apps/fish-com/src/app/health/page.tsx` — flat hub banner (P1)
- `apps/fish-com/src/app/health/ich-treatment/page.tsx` — no article hero image (P1)
- `apps/fish-com/src/app/glossary/page.tsx` — glossary-hero unsynced (P2)
- `apps/fish-com/src/app/water-parameters/page.tsx` — water-parameters-hero unsynced (P2)
- `apps/fish-com/src/app/layout.tsx` — font loading (Cormorant + Inter)
- `apps/fish-com/src/app/globals.css` — brand tokens (teal `#0E5F7E`, dark `#06121B`)
- `apps/petfood-com/src/app/page.tsx` — homepage (premium, benchmark)
- `apps/petfood-com/src/app/brands/page.tsx` — plain list hub, featured card needed (P0)
- `apps/petfood-com/src/app/diets/page.tsx` — unsynced hero + flat card list (P0)
- `apps/petfood-com/src/app/compare/page.tsx` — no imagery on hub (P1)
- `apps/petfood-com/src/app/brands/orijen-vs-acana-comparison/page.tsx` — no article hero image (P1)
- `apps/petfood-com/src/app/feeding/page.tsx` — feeding-hero unsynced (P0)
- `apps/petfood-com/src/app/supplements/page.tsx` — supplements-hero unsynced (P0)
- `apps/petfood-com/src/app/guides/page.tsx` — guides-hero unsynced (P0)
- `apps/petfood-com/src/app/myths/page.tsx` — myths-hero unsynced (P0)
- `apps/petfood-com/src/app/tools/page.tsx` — tools-hero unsynced (P0)
- `apps/petfood-com/src/components/visual/FoodCostCalculator.tsx` — mobile polish (P1, Visual lane)
- `apps/petfood-com/src/app/layout.tsx` — font loading (Cormorant + Inter + JetBrains Mono)
- `apps/petfood-com/src/app/globals.css` — brand tokens (moss `#3F5C3A`, dark `#1A1F18`), mono data system, `.score-chip` token
- `packages/ui/src/components/ArticleLayout.tsx` — hero image support available but underused across both sites
- `packages/ui/src/components/StockImage.tsx` — placeholder paw rendering on missing keys
- `packages/ui/src/components/Nav.tsx` — always-white nav (no dark-overlay variant for dark-hero pages)
- `packages/ui/src/components/ImageCard.tsx` — image rendering with `subtleCredit` support
- `packages/ui/src/data/image-manifest.json` — synced image keys reference
