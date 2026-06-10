---
from: design-bot
to: csro
status: done
created: 2026-06-05
next_action: >
  CSRO: gate Dog.com + Ferret.com against the launch-quality bar using the
  rubric scores below. Slot the P0 items into the polish queue (all are in-repo,
  $0 spend). Three items need Visual Bot sign-off (emoji-to-SVG icon swaps);
  one needs a Carlo-side `node scripts/sync-images.mjs` run to retire the last
  emoji/placeholder image fallbacks. No item requires >$0 spend except the
  optional commissioned-photography idea flagged Carlo-gated.
---

# Premium Visual / Design Review — Dog.com + Ferret.com

**Review date:** 2026-06-05
**Reviewer:** design-bot (read-only; no app code changed)
**Scope:** homepages, hubs (/breeds, /health, /care, /training, /diet, etc.),
a sample of spoke pages, tools/calculators, and the shared UI primitives
(StockImage, ImageCard, ArticleLayout, Nav, Footer, EmailCapture).
**North star:** the ratified Dog.com homepage (`apps/dog-com/src/app/page.tsx`,
v3/v4 image-first mobile hero, `subtleCredit`, zero rendered placeholders).
**Rubric:** inherited from PR #474 / `ops/handoffs/2026-06-03-visual-premium-design-review.md`,
re-scored fresh against the eight launch-quality axes below.

---

## Executive summary

Both homepages have been rebuilt to the image-first reference and are now
genuinely premium above the fold. The gap to "category-defining destination"
is no longer the homepage — it is **the interior** (hubs and spokes), where the
template feel and emoji decoration still live. Dog.com's homepage is the
portfolio's best surface; its hubs are its weakest, because they still lean on
emoji category icons, emoji-prefixed section labels, and emoji/dashed-box image
fallbacks that read as scaffold, not as an acquisition-grade asset. Ferret.com
is the inverse: its interior cards are cleaner and more disciplined (no emoji,
amber-rule accent), but its hubs orphan the hero image below the dark header and
its homepage hero relies on not-yet-synced keys gated to text cards.

| Axis (1-5) | Dog.com | Ferret.com |
|---|---|---|
| 1. Above-the-fold emotional impact / hero | **5** — full-bleed real-photo hero, overlaid H1 + single CTA, brand-orange scrim; best in portfolio | **4** — same image-first pattern, italic Playfair tagline is on-brand; amber-on-dark is strong but the hero photo pool is thinner |
| 2. Visual richness vs. template feel | **3** — homepage is photo-rich, but `/breeds` + `/health` hubs use emoji icons + emoji/dashed-box image fallbacks = template tell | **4** — interior cards are clean and consistent; hub hero image orphaned below header is the main richness miss |
| 3. Hierarchy & typography | **4** — Playfair Black + DM Sans, clamp() scale, tight tracking; `font-feature-settings` still absent in globals.css | **4** — Playfair + Source Sans 3, italic subhead is the right magazine voice; same feature-settings gap |
| 4. Hub→spoke wayfinding clarity | **4** — owner-path tiles + decision sections + ItemList schema are excellent; emoji section headers cheapen it | **4** — six-hub grid + cornerstone reading is clear; hub blurbs are strong; needs a visible breadcrumb-style "you are here" on hubs |
| 5. Mobile 375px experience | **4** — hero is explicitly mobile-first (62vh), 2-col owner tiles; calorie/wizard embeds still unverified at 375px | **3** — `auto-fit minmax(280px)` grids reflow fine, but the live tool embeds (food evaluator, cost calc) are unaudited at 375px |
| 6. Trust / credibility cues | **5** — sourced-not-expert copy, "How we work" block, editorial-standards + disclosure links, no fake authority | **5** — exotic-vet-respectful framing, citation-anchored, editorial-standards link, clean trust bar |
| 7. Monetization surfacing without compromising trust | **4** — product guides framed "compared, not ad-ranked"; insurance cost section is a strong high-intent surface | **3** — tools are surfaced well but commercial intent (gear/diet affiliate) is soft on the homepage; Monetization owns the wiring |
| 8. Distinctiveness vs. generic content site | **3** — warm-orange decision-hub identity is good, but section structure mirrors Fish.com and interiors fall back to generic card+emoji | **4** — chocolate-amber + Playfair + indie-magazine voice is genuinely ownable end to end |
| **Weighted overall** | **≈4.0** | **≈3.8** |

**Strongest single surface in the portfolio:** Dog.com homepage.
**Most urgent gap:** Dog.com interior emoji + image-fallback debt (axis 2/8).
**Highest-leverage single fix:** retire every emoji icon and emoji/dashed-box
image fallback on both sites' hubs — it is the difference between "premium" and
"clearly a content template" to an acquirer doing a 30-second skim.

---

## Per-site detail

### Dog.com

**What is already acquisition-grade**
- `apps/dog-com/src/app/page.tsx` — the full-bleed image-first hero, owner-path
  photo tiles, alternating dark/surface section rhythm, inline `WhichPetWizard`,
  and the "How we work" trust block. This is the reference. Nothing to change.
- Zero hardcoded Unsplash URLs on the homepage; all imagery flows through
  `<StockImage>` with `subtleCredit` (QC §1 clean). The prior review's Issue 2
  (hardcoded URLs in `FEATURED_BREEDS`) is **resolved** — the homepage now uses
  `PHOTO_BREEDS`/`TEXT_BREEDS` and only renders real synced keys.
- Tools are real: `dog-calorie-calculator` ships full FAQ + schema + RER math.

**What still reads as template**
- `apps/dog-com/src/app/breeds/page.tsx` — the breed grid renders an emoji
  fallback (`🐕`, aspect-ratio 4:3) for every breed without a manifest key, and
  a dashed-border "🐾 200+ breeds / More profiles added weekly" tile. A breed
  encyclopedia where most cards are a grey box with a dog emoji is the single
  most template-feeling surface on the flagship.
- `apps/dog-com/src/app/health/page.tsx` — emoji section headers
  (`🚨 Emergency`, `🐕 Breed Health Guides`, `🦷 Preventive Care`,
  `💊 Treatments`), an emoji `CATEGORY_ICONS` map (🦠❤️🦴🧠👁️🫁…), and emoji
  EmailCapture perks (`✓ Research-based`, `📬 Weekly`, `🐾 Breed-specific`). The
  homepage already replaced emoji with inline SVG; the hubs did not get the memo.
- `globals.css` still lacks the `font-feature-settings` rule on headings, so
  Playfair Display Black's ligatures/old-style figures are off.
- The lower-half homepage is excellent, but the **hub heroes** (`/breeds`,
  `/health`) render the `<StockImage>` in a separate band *below* the dark
  header — the same orphaned-image pattern, just relocated to interior pages.

### Ferret.com

**What is already acquisition-grade**
- `apps/ferret-com/src/app/page.tsx` — image-first hero faithfully adapted to
  the chocolate-amber brand, italic Playfair tagline, six image-backed hub
  tiles, inline `FerretFoodEvaluator`, and a disciplined no-emoji tool section
  using inline SVG (beaker/coin/book). This is the cleaner of the two interiors.
- `apps/ferret-com/src/app/health/page.tsx` — 21 condition cards with an
  amber top-rule accent, eyebrow + title + description, no emoji. This is what
  Dog.com's health hub should look like. Strong cluster authority + ItemList
  schema.

**What still reads as template / holds it back**
- The hub hero image is orphaned: dark header → breadcrumb → `<StockImage>`
  band → cards. Pulling the hero photo into the dark masthead as a right-column
  element (the homepage-hero treatment) would give hubs the same "magazine
  cover" moment the homepage now has.
- Homepage hero/category richness is gated by sync state: `tools-hero`,
  `first-year-hero`, `find-vet-hero`, `glossary-hero` are not synced, so the
  First-Year Schedule pillar and several tiles are text-only. The page is
  *correctly* avoiding placeholders — but the fix is a Carlo-side sync, after
  which those cards should be promoted back to photo tiles.
- `globals.css` lacks `font-feature-settings`; Playfair italic discretionary
  ligatures (the brand's best type moment) are off.
- The article byline uses an emoji avatar (`authorAvatar: '🦦'` in
  `care/diet-basics`) — harmless but slightly undercuts the editorial-authority
  positioning on a clinical-leaning page.

---

## Prioritized recommendations (CarloOS 5-field format)

### P0 — do before either site is called launch-quality

#### P0-1 · Retire emoji icons + emoji/dashed image fallbacks on Dog.com hubs
Replace the emoji `CATEGORY_ICONS` map and emoji section-header prefixes in
`apps/dog-com/src/app/health/page.tsx`, the emoji EmailCapture perks there, and
the `🐕`/`🐾` image + dashed-box fallbacks in
`apps/dog-com/src/app/breeds/page.tsx`. Use the inline-SVG icon pattern already
proven on the homepage (`IconCalorie`/`IconAge`/`IconArrowRight`) and, for
breed cards with no synced photo, the premium **text-card** treatment the
homepage uses for `TEXT_BREEDS` (no image slot) instead of an emoji box.
- **SEO Impact:** Neutral-to-positive — cleaner cards reduce layout-shift and
  let breed/condition titles carry the visual weight; no ranking risk.
- **GEO Impact:** Positive — emoji in `<h2>`/`<h3>` text degrades the clean,
  extractable heading structure AI surfaces prefer to cite; removing it
  sharpens the ItemList + heading hierarchy.
- **Monetization Impact:** Indirect — hubs are the funnel into monetized review
  spokes; a premium hub raises perceived authority and CTR into `/reviews`.
- **Build Effort:** S (two files, icon-component reuse already in-repo).
- **Priority:** P0. This is the biggest template-tell on the flagship.
- **Needs:** Visual Bot sign-off on the SVG icon set for category rows.

#### P0-2 · Add `font-feature-settings` to both sites' globals.css
Add `font-feature-settings: 'kern' 1, 'liga' 1, 'dlig' 1;` to the
`h1,h2,h3,h4,h5,h6,.font-display` rule in
`apps/dog-com/src/app/globals.css` and `apps/ferret-com/src/app/globals.css`.
- **SEO Impact:** None (rendering-only).
- **GEO Impact:** None.
- **Monetization Impact:** None.
- **Build Effort:** XS (one CSS rule per site).
- **Priority:** P0 — free typographic polish on the two display serifs that
  define each brand; ships in the same pass as P0-1.

#### P0-3 · Pull hub hero photos into the dark masthead (both sites)
On `/breeds` + `/health` (Dog) and the six hub pages (Ferret), move the
`<StockImage>` from its separate band into the dark header as a right-column
element (`grid lg:grid-cols-[3fr_2fr]`, photo stacks below text on mobile).
Mirrors the homepage treatment; uses existing manifest keys, no new photos.
- **SEO Impact:** Neutral.
- **GEO Impact:** Neutral.
- **Monetization Impact:** Indirect — stronger hub first-screen lifts dwell +
  scroll into monetized spokes.
- **Build Effort:** S per hub (~15-line layout change), M in aggregate.
- **Priority:** P0 — removes the last systemic orphaned-image pattern; makes
  interiors feel as composed as the homepages.

### P1 — this week, after P0

#### P1-1 · Verify the live tool embeds at 375px
`WhichPetWizard` + `dog-calorie-calculator`/`dog-age-calculator` (Dog) and
`FerretFoodEvaluator` + `cost-calculator`/`readiness-quiz` (Ferret) are the
highest-risk mobile breakpoints (input rows + result tables). Audit at 375px
on Carlo's Mac (DevTools) and constrain any horizontal-scroll tables.
- **SEO Impact:** Positive (mobile UX is a ranking signal; CWV/INP).
- **GEO Impact:** Neutral.
- **Monetization Impact:** Positive — tools are the top engagement/lead surface;
  a broken mobile tool kills the highest-intent interaction.
- **Build Effort:** S-M (audit + targeted CSS).
- **Priority:** P1. Carlo-side audit; code fixes preparable in-repo first.

#### P1-2 · Promote Ferret text-card tiles to photos after a sync run
Once `node scripts/sync-images.mjs` populates `ferret-com:tools-hero`,
`first-year-hero`, `find-vet-hero`, `glossary-hero`, promote the First-Year
Schedule pillar and the affected homepage/hub tiles from text cards back to
image-backed tiles (with `subtleCredit`). Same for Dog's per-breed keys
(`golden`, `french-bulldog`, `german-shepherd`, `beagle`, `poodle`) so the
breed grid becomes fully photographic.
- **SEO Impact:** Neutral.
- **GEO Impact:** Neutral.
- **Monetization Impact:** Indirect (richer = higher perceived value).
- **Build Effort:** S (flip text cards to `<StockImage>` once keys exist).
- **Priority:** P1. **Needs Carlo:** the sync run requires Unsplash/Pexels API
  access blocked in this sandbox (CLAUDE.md §7) — $0, just runs on his Mac.

#### P1-3 · Replace the emoji article-byline avatar on Ferret
Swap `authorAvatar: '🦦'` (e.g. `care/diet-basics`, and any sibling spokes) for
the inline-SVG monogram/mark treatment used elsewhere, or drop the avatar in
favor of the "Ferret.com Editorial" text byline.
- **SEO Impact:** None.
- **GEO Impact:** Slight positive (cleaner authorship signal).
- **Monetization Impact:** None.
- **Build Effort:** XS-S (grep `authorAvatar:` across `ferret-com`).
- **Priority:** P1.

### P2 — this month / nice-to-have

#### P2-1 · Differentiate Dog.com's section structure from Fish.com
The dark-hero → tiles → trust-bar → tool → content-grid rhythm is near-identical
to Fish.com. Introduce one Dog-specific signature module (e.g. a "by life stage"
horizontal selector, or a breed-risk spotlight band) so the flagship reads as
its own brand, not a shared template instance.
- **SEO Impact:** Neutral-positive (new internal-link surface if it links).
- **GEO Impact:** Neutral.
- **Monetization Impact:** Positive if the module routes to high-intent spokes.
- **Build Effort:** M (one new homepage module + data).
- **Priority:** P2.

#### P2-2 · Add a visible "you are here" breadcrumb treatment on Ferret hubs
Dog hubs render a styled breadcrumb band; Ferret hubs have a thin text
breadcrumb. Bring Ferret hub breadcrumbs up to the same visual weight for
wayfinding parity.
- **SEO Impact:** Positive (BreadcrumbList already in schema; visual parity
  reinforces it).
- **GEO Impact:** Slight positive.
- **Monetization Impact:** None.
- **Build Effort:** XS-S.
- **Priority:** P2.

#### P2-3 (Carlo-gated, >$0) · Commission original breed/ferret photography
The single biggest remaining differentiator for an acquirer is *original*
primary-source imagery (which AI surfaces also preferentially cite). Stock
photography is launch-adequate; a small commissioned set for the flagship breed
hub + Ferret hero pool would be category-defining.
- **SEO Impact:** Positive (unique images, image-search surface, freshness).
- **GEO Impact:** High (original primary-source media is a citation magnet).
- **Monetization Impact:** Indirect (valuation/differentiation).
- **Build Effort:** L (shoot + edit + manifest integration).
- **Priority:** P3 backlog. **Carlo-gated — requires spend; do not action
  without approval (CLAUDE.md §9).**

---

## Trust-bar note (QC §1)

Every recommendation here is structural/visual and trust-safe: no fake
DVM/credentials, no AI-generated humans, no stripping of photographer
attribution. The emoji-to-SVG swaps and text-card treatments *preserve* the
`subtleCredit` attribution path. The Carlo-gated photography idea (P2-3) must
use only real, licensed, credited photography of real animals — never
AI-generated.

## Gates (docs-only change)

`trust-guard.mjs` clean (1184 TSX scanned, 0 hits) ·
`metadata-policy.mjs` clean (10 sites) ·
`link-check.mjs` clean (0 broken internal links).

---

*Review produced by design-bot, 2026-06-05. Read-only. Files examined: both
homepages, `breeds/`, `health/`, `training/`, `care/diet-basics`, the dog
calorie calculator, `StockImage.tsx`, and route listings for both apps. No app
code was edited.*
