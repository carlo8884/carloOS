---
from: coo
to: carlo
status: review
created: 2026-06-07
next_action: "Carlo: review premium upgrade list; COO ships [COO] items, routes [Visual]/[Monetization]."
---

# Deep premium review — Ferret.com + PetFood.com (launch sites 2 & 3)

Demanding luxury-editorial pass over homepage → hub → detail → money page → tool for each
site. The question throughout: **does this feel like a $10M+ asset, or a well-built template?**

Verdict up front:
- **PetFood.com** is the stronger of the two. The homepage, brand/compare money pages, and
  the Hill's vs Royal Canin flagship read like a genuine independent reference — deep,
  cited, with a real at-a-glance table and a proper BuyBox. It is closest to launch-quality.
- **Ferret.com** has a beautiful image-led homepage and genuinely deep clinical detail pages,
  but premium consistency breaks below the homepage: an **otter emoji avatar (`🦦`) renders
  as the byline on ~88 article pages**, the **starter-kit money page is visibly cheaper than
  the rest of the site**, and the hub/detail surfaces don't carry the homepage's polish down.

Imagery notes here are about **composition/fit/cover only** — Ferret placeholder keys are
being filled in a pending branch, so "missing key" is not flagged as a defect.

Trust-guard is green (1184 TSX, 0 hits). No QC §1 violations found on either site.

---

## FERRET.COM

### Surface 1 — Homepage (`apps/ferret-com/src/app/page.tsx`)

**Premium feel: strong.** Full-bleed image-first hero, chocolate-amber palette, Playfair
display, real section rhythm (hero → trust bar → 6 image hubs → live evaluator → 4 pillars →
cornerstones → tools → email). This is genuinely magazine-grade and the best surface on the
site. Hover states exist on the text cards (`transition: all 0.22s ease`) but **the homepage
declares transitions without actually changing any property on hover** — the inline-style
cards have no `:hover` rule (inline styles can't express one), so the amber-accent cards are
visually inert on pointer. The PetFood homepage, by contrast, has real `hover:ring`,
`hover:bg`, `hover:border-brand-primary`. This is the single biggest premium gap on the
Ferret homepage.

- **[COO] P1** — Ferret homepage cards have dead hover. The `transition` declarations on the
  pillar/article/roadmap/tool `<Link>` elements (e.g. lines ~754, ~932, ~1082) never fire
  because inline style cannot hold a `:hover`. Either (a) add a small scoped CSS class
  (`.fc-card { transition: transform .2s, box-shadow .2s } .fc-card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(30,20,10,.12) }`) in the site's globals and
  attach it, or (b) convert these cards to the Tailwind `group hover:` idiom PetFood uses.
  Premium sites lift/shadow on hover; this one promises to and doesn't.
- **[COO] P2** — Hero arrow CTAs use raw `&rarr;` text glyphs in the primary buttons. Fine,
  but the rest of the portfolio is moving to inline SVG arrows; keep consistent (see emoji
  audit below).
- **[Visual] P2** — Hero scrim is heavy (`rgba(30,20,10,0.66)` at 45%). On a darker ferret
  photo the lower third can go muddy. Confirm contrast once the real hero key syncs.

**Content/trust: excellent.** Trust bar claims are honest ("No marketplace listings here"),
byline is "Ferret.com Editorial", disclosure in footer. No fake authority.

### Surface 2 — Hub (`apps/ferret-com/src/app/health/page.tsx`)

19 condition cards, ItemList schema, breadcrumb, hero image, real intro. IA is clear and the
cluster is deep. Two premium gaps:

- **[COO] P1** — Hub cards are **visually flatter than the homepage**: plain white cards,
  3px amber top-rule, no hover lift, no image. After the cinematic homepage this reads as a
  step down in production value. At minimum give them the same real hover treatment as the
  homepage fix above. Class target: the `<Link>` at line ~297 (`border: '1px solid var(--brand-border)'`).
- **[COO] P2** — The intro paragraph links to `/find-an-exotic-vet` (good), but the hub has
  **no internal links into the diet/care clusters** from the body — the only cross-cluster
  path is the global nav. A "Related: Diet & Insulinoma risk" rail would tighten the
  hub→hub graph the CLAUDE.md §6 charter wants.
- **[Visual] P2** — `health-hero` renders at `aspect 16:9 variant wide` directly under the
  dark hero band; once synced, make sure it's a clinical/animal composition, not a generic
  product shot, so the hub doesn't feel stocky.

### Surface 3 — Detail (`apps/ferret-com/src/app/health/insulinoma/page.tsx`)

**Content depth: genuinely excellent** — pathophysiology, epidemiology, diagnosis with real
glucose thresholds, a 4-step treatment ladder, an emergency crisis protocol, prognosis, and a
proper `ArticleSourcesList` (Quesenberry, Merck, AEMV, J Exotic Pet Med). This page alone
reads like a $10M asset. But:

- **[COO] P0 — the otter-emoji byline.** `authorAvatar: '🦦'` (line 72) renders via
  `ArticleLayout` as an **11×11 circular emoji avatar in the hero byline** (see
  `packages/ui/src/components/ArticleLayout.tsx` line 137-144). This is on **~88 Ferret
  article pages** (every health/care/behavior/colors/diet/ownership detail page — full list
  via `grep -rl "authorAvatar: '🦦'"`). Problems: (1) it's an **otter, not a ferret** —
  factually wrong mascot; (2) an emoji avatar is the single cheapest-looking element on an
  otherwise clinical page; (3) it undercuts EEAT — a luxury reference doesn't put a cartoon
  next to "Editorial team / reviewed." **Fix: remove `authorAvatar` from all ~88 pages**, or
  replace with a small monogram/SVG mark. This is a mechanical sweep and the highest-leverage
  single premium fix on the site. [COO] owns this.
- **[COO] P1** — The sidebar insurance card and the in-body "Insulinoma + Insurance" CTA link
  to `https://vets.co/pet-insurance` directly (lines 116-117). That is a **cross-portfolio
  commercial CTA not routed through `/go`** — flag to Monetization for the affiliate-leak
  sweep. **[Monetization] P1.**
- **[COO] P2** — `imageUrl: ''` is passed to `buildArticleSchema` (line 43). Empty image in
  Article schema is a soft GEO miss — once the insulinoma image key is stable, populate it so
  the article carries a primary image for AI Overviews/rich results.

### Surface 4 — Money page (`apps/ferret-com/src/app/(funnels)/ferret-starter-kit/page.tsx`)

This is the **weakest premium surface on Ferret.com** and the one that has to convert. The
underlying data (`src/data/starter-kit.ts`) is genuinely good — every pick justified, three
honest budget tiers, real SKUs — but the **page wrapping it looks like an unstyled draft**
next to the homepage:

- No hero image, no eyebrow, no dark masthead — just an `<h1>` on white in `max-w-4xl`.
- Budget-tier cards and product cards are plain `border + rounded-lg + bg-brand-white`, no
  hover, no amber accent, no price-chip styling. The homepage taught the visitor to expect
  image-backed, amber-accented cards; this page delivers none of it.
- The `/go` routing IS correct here (`/go/${item.vendor}/...`) — good, this is the one money
  surface doing affiliate routing right.

Upgrades:
- **[COO] P0** — Give the starter-kit page a real masthead: dark `var(--brand-dark)` band +
  eyebrow + Playfair H1 + subhead, matching the hub pattern. It's the highest-intent page on
  the site and currently the least premium.
- **[COO] P1** — Restyle the product cards to the homepage card idiom: amber top-rule or
  left-accent, real hover lift, price rendered as a chip not inline `~$290` grey text.
  Target: the `<div>` at line 115 and the budget cards at line 84.
- **[Monetization] P1** — The "Compare exotic-pet insurance" CTA (line 156) again points at
  `https://vets.co/pet-insurance` raw, not `/go`. Same leak as the insulinoma sidebar.
- **[COO] P2** — `needsSkuVerification: true` is set on ~10 of 13 picks in the data. Editorial
  must verify those SKUs before DNS — a "Check Price" button to an unverified SKU is a broken
  promise on the money page. Tracked, not a code change.

### Surface 5 — Tool (`FerretFoodEvaluator` + `apps/ferret-com/src/app/tools/page.tsx`)

**The evaluator itself is excellent** — real scoring logic, per-nutrient notes, honest 18-pt
band, sourced to Lewington/Marshall/AAFCO-proxy, with the "no AAFCO ferret profile exists"
caveat. It runs inline on the homepage (premium gate 3 satisfied) and standalone. Gaps:

- **[COO] P1 — homepage/tool-hub route mismatch.** The homepage tool cards link to
  `/tools/food-evaluator` and `/tools/cost-calculator`, and the tools hub lists a third,
  `/tools/readiness-quiz`. All three route dirs exist (`food-evaluator`, `cost-calculator`,
  `readiness-quiz`) — but the **homepage omits the readiness quiz** while the hub omits
  nothing. A first-time visitor on the homepage never sees the decision tool, the highest-
  intent top-of-funnel asset. Add a readiness-quiz card to the homepage tools section
  (`apps/ferret-com/src/app/page.tsx` ~line 1067) or swap the glossary card for it.
- **[Visual] P2** — The tool-hub hero uses `ferret-com:tools-hero priority` (page.tsx line 87).
  Composition note for when it syncs: a hand-holding-a-bag / store-aisle shot fits the
  "at the bag" H1 far better than a generic ferret portrait.
- **[COO] P2** — Evaluator result card uses raw Tailwind color classes (`emerald-200`,
  `amber-200`, `red-200`) rather than brand tokens. It works, but it's the one spot in the
  ferret UI that isn't on-palette. Low priority cosmetic.

### Ferret — emoji audit

- **`authorAvatar: '🦦'` on ~88 pages** (covered above) — the major offender. P0 sweep.
- `badgeEmoji` appears in 21 Ferret files — verify these aren't rendering decorative emoji in
  prominent callouts; convert any visible ones to the SVG idiom the homepage tool cards use.
- Homepage trust bar uses a `✓` text glyph (line 412) — acceptable, but an inline SVG check
  would match the brand's clean SVG idiom better. P2.

---

## PETFOOD.COM

### Surface 1 — Homepage (`apps/petfood-com/src/app/page.tsx`)

**Premium feel: very strong, and better-engineered than Ferret's.** Image-first hero, moss-on-
warm-white, Cormorant display + mono eyebrows + a `[DIMENSION_KEY]` data-vis idiom that
genuinely sells "Consumer Reports of pet food." Crucially, **hover states are real**
(`group hover:ring-brand-primary`, `hover:bg-white/[0.09]`, `hover:border-brand-primary`).
The methodology callout pairs a real prescription-diet photo with a 5-dimension scoring table
— that's a magazine spread, not a template. Strong as-is. Minor:

- **[COO] P2** — The hero stacks **three CTAs** (methodology / read-the-label / cost-calc).
  Three competing primaries dilutes the "one primary action" premium pattern the brief calls
  for. Demote the cost-calculator to the secondary ghost style only and keep one filled
  primary. Target: lines 243-264.
- **[Visual] P2** — Hero is `aspect 16:9` raw-ingredients flat-lay; confirm it reads as
  editorial-still-life and not stock once synced (it's already a synced key per the file
  header, so likely fine).

### Surface 2 — Hub (`apps/petfood-com/src/app/brands/page.tsx`)

Dark masthead, hero image, **three-paragraph orienting intro that actually routes the reader**
("start with Hill's vs RC if your vet recommended a therapeutic diet…"), ItemList + FAQ
schema, and a real FAQ accordion. This is a strong hub. Gaps:

- **[COO] P1** — The 7 brand cards are **plain text cards** (`border + hover:border-brand-primary`,
  line 162). They have real hover (good) but no image, no rubric-score chip, no visual
  hierarchy between the flagship (Hill's vs RC) and the rest. The homepage entry tiles have a
  `flagship` ring treatment — bring that down to the hub so the most valuable comparison
  stands out. Even a mono `[5-DIM EVALUATION]` chip per card would lift it.
- **[COO] P2** — Hub intro is excellent prose but **doesn't link laterally** to `/compare`,
  `/ingredients`, or `/conditions` from the body — the cross-cluster graph relies on nav.
  Add a "Related references" line.

### Surface 3 — Detail / flagship money page (`apps/petfood-com/src/app/brands/hills-vs-royal-canin/page.tsx`)

**This is the best single page across both sites.** 16-min read, corporate context, a real
9-row at-a-glance comparison table, manufacturing/AAFCO/vet-diet/recall sections, WSAVA
alignment, pricing, a 4-question FAQ, an honest "no winner" verdict, 8 sources, and a
**properly-built `BuyBox` routing every CTA through `/go/chewy-brand/...` and `/go/amazon-brand/...`**
with disclosure above it. This converts and it's trustworthy. Near-nothing to fix:

- **[COO] P2** — The at-a-glance table is built with **raw inline-style `<table>`** (lines
  235-296) rather than a shared component. It looks fine, but it's not reusable across the
  other 6 brand pages and won't pick up future design-token changes. Consider extracting a
  `<ComparisonTable>` into `packages/ui` so all brand/compare pages share one premium table.
  Structural, not urgent.
- **[COO] P2** — `imageUrl: ''` in the Article schema (line 57), same soft GEO miss as Ferret.
  Populate once a stable brand image exists.

### Surface 4 — Money page #2 / Compare hub (`apps/petfood-com/src/app/compare/page.tsx`)

8 food-type comparisons, ItemList schema, dark masthead, hero. The descriptions are
even-handed and substantive. One real defect:

- **[COO] P1 — truncated card descriptions.** Several compare-card descriptions are **cut off
  mid-sentence with an ellipsis** in the source data, e.g. "the evidence does not ..." (line
  44), "including those from books and websites, a..." (line 50), "...marketing claims" run-on.
  These look like accidental string truncation, and on a premium hub a sentence that ends in
  "a..." reads as broken, not styled. **Rewrite each to a clean complete sentence.** Target:
  the `COMPARE` array, lines 21-76.
- **[COO] P2** — Same as brands hub: text-only cards, no image/score chip, no lateral links.
  Apply the same flagship/chip treatment.

### Surface 5 — Tool (`apps/petfood-com/src/app/tools/portion-calculator/page.tsx` + `Calculator`)

Dark masthead, RER/MER explanation, `WebApplication` schema, 4 substantive FAQs (incl. the
feline-weight-loss hepatic-lipidosis caveat — genuinely responsible), and lateral links to the
cost calculator + feeding guides. This is a complete, trustworthy tool surface. Gaps:

- **[COO] P2** — The calculator section sits on `bg-brand-surface` with no card framing around
  `<PortionCalculator />` (line 127, `max-w-5xl` bare). The Ferret evaluator wraps its tool in
  a bordered `rounded-lg` panel which reads more "product." Frame the calculator the same way.
- **[Visual] P2** — Unlike the brands/compare hubs, the tool hubs have **no hero image** — fine
  for a data-vis brand, but confirm that's the intended differentiation and not an omission.

### PetFood — emoji audit

- Cleaner than Ferret. No `authorAvatar` emoji pattern. `badgeEmoji` appears in ~10 files
  including `❄️`/`🌬️` on the freeze-dried compare page (lines 138, 163) and brand-eval pages.
  **[COO] P2** — these decorative weather/marketing emoji are off-brand for a "skeptical,
  evaluative" reference; replace with the mono `[KEY]` chip idiom or a small SVG. Lower stakes
  than Ferret's avatar but worth a sweep before launch.

---

## TOP PREMIUM UPGRADES — FERRET.COM (ranked)

1. **[COO] P0 — Kill the `🦦` otter-emoji byline avatar across ~88 article pages.** Remove
   `authorAvatar` (or swap for an SVG/monogram). Wrong mascot + cheapest element on the site.
   Effort: **M** (mechanical sweep of ~88 files via the grep list).
2. **[COO] P0 — Rebuild the starter-kit money page masthead + card styling** to match the
   homepage/hub idiom (dark band, Playfair H1, amber-accent hover cards, price chips). Highest-
   intent page, currently least premium. Effort: **M** (one file + card styling).
3. **[COO] P1 — Fix dead hover on homepage + hub cards.** Inline `transition` declarations
   never fire; add a scoped `:hover` class (lift + shadow). Effort: **S** (globals + class
   attach on ~2 files).
4. **[Monetization] P1 — Route the two `vets.co/pet-insurance` CTAs through `/go`** (insulinoma
   sidebar + starter-kit insurance block). Affiliate-leak sweep. Effort: **S**.
5. **[COO] P1 — Surface the readiness quiz on the homepage tools section** (homepage omits the
   site's highest-intent decision tool). Effort: **XS**.
6. **[Visual] P2 — Tool-hub + health-hub hero composition** once keys sync (store-aisle / clinical
   shots, not generic portraits). Effort: **S** (Visual lane).

## TOP PREMIUM UPGRADES — PETFOOD.COM (ranked)

1. **[COO] P1 — Fix truncated compare-hub card descriptions** ending mid-sentence in "a..." /
   "does not ..." — they read as broken on a premium hub. Effort: **XS** (one data array).
2. **[COO] P1 — Add flagship-ring + a rubric-score/`[5-DIM]` chip to brands + compare hub
   cards** so the most valuable comparison stands out and the hubs stop being plain text lists.
   Effort: **S** (two hub files).
3. **[COO] P2 — Extract a shared `<ComparisonTable>` into `packages/ui`** from the inline table
   on Hill's-vs-RC so all 7 brand + 8 compare pages share one premium, token-aware table.
   Effort: **M** (new shared component + adoption).
4. **[COO] P2 — Demote the third hero CTA** to ghost-only (one filled primary). Effort: **XS**.
5. **[COO] P2 — Sweep decorative `badgeEmoji` (`❄️`/`🌬️` etc.)** to mono chips / SVG for the
   skeptical-reference voice. Effort: **S**.
6. **[COO] P2 — Frame the portion-calculator in a bordered card** + populate `imageUrl` in
   brand-page Article schema for GEO. Effort: **S**.

---

## Cross-cutting note

Both sites share the same structural pattern: **cinematic, hover-rich, image-backed homepage →
flatter, hover-poor, text-card hubs → deep, well-cited detail pages → (Ferret) a money page
that fell behind the redesign.** The detail-page content is already $10M-asset quality on both
sites. The premium gap is almost entirely in the **connective tissue** (hubs, money page, the
emoji avatar) — relatively cheap [COO]-lane fixes that would make both sites feel coherent end-
to-end rather than "great homepage, good content, templated middle." PetFood is ~1 sprint from
launch-quality; Ferret needs the P0 avatar sweep + starter-kit rebuild first.
