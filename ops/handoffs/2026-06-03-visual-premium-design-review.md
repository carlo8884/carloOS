---
from: visual-design-review
to: csro
status: complete
created: 2026-06-03
next_action: >
  Visual Bot: execute P0 in-repo changes per site-specific lists below.
  Carlo: run `node scripts/sync-images.mjs` after adding any new image-queries.json entries
  to populate photo-gap slots identified in Section 6.
  CSRO: use rubric scores to gate launch-readiness; no site should ship with a score
  below 3 on any P0 dimension.
---

# Premium Design Review — Launch Cohort
## Ferret.com · PetFood.com · Vets.co · Fish.com · Dog.com
**Review date:** 2026-06-03  
**Reviewer:** visual-design-review agent  
**Scope:** Homepage, layout.tsx, all hub pages, representative spoke/article pages, shared UI components

---

## Executive Summary

| Site | Overall Score | First Screen | Photography | Differentiation | Typography | Spacing/Rhythm | Component Polish | Color/Theme | Mobile |
|---|---|---|---|---|---|---|---|---|---|
| **Ferret.com** | **3.3** | 3 | 4 | 4 | 4 | 3 | 3 | 3 | 3 |
| **PetFood.com** | **3.6** | 3 | 3 | 5 | 4 | 4 | 4 | 4 | 3 |
| **Vets.co** | **3.4** | 4 | 3 | 4 | 5 | 3 | 3 | 4 | 3 |
| **Fish.com** | **3.5** | 4 | 4 | 4 | 4 | 3 | 3 | 4 | 3 |
| **Dog.com** | **3.8** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 |

**Strongest site:** Dog.com — most complete, best-executed decision-hub structure, most photography coverage.  
**Highest design ceiling:** PetFood.com — mono + serif combination is genuinely distinctive; underutilized on hub/spoke pages.  
**Most urgent gap:** Mobile (every site scores 3) — the fixed-nav + container padding pattern clips content on narrow viewports and no site has been audited at 375px width from the code.  
**Total photo-slot gaps identified:** **27 new slots** across 5 sites (see Section 6).

---

## Section 1 — Premium Design Rubric

This rubric is reusable for subsequent design reviews. Score each dimension 1–5.

### Dimension Definitions

| Dimension | 1 (default/broken) | 3 (functional) | 5 (acquirer-grade) |
|---|---|---|---|
| **First-screen / hero impact** | Nav + a big heading + no visual hierarchy; looks like a template scaffold | Readable, legible; has a clear CTA; no real visual moment | Immediately communicates the brand's personality; has a hero photograph or deliberate visual treatment; CTA is impossible to miss; a non-technical person would say "that looks professional" within 3 seconds |
| **Photography coverage & animal-match** | No images at any depth; or images are wrong species entirely | Hero has a photograph; most hub pages have a slot; spoke pages are bare text walls | Every hub and top-traffic spoke has a species-appropriate image; the same 1–2 source photos are not recycled across every page; article-level StockImage slots exist and are populated |
| **Visual differentiation** | Visually identical to one or more sister sites | Distinct palette, but templated layout that reads as generic | Immediately identifiable as this specific brand; font pairing + palette + component style would not work on any other CarloOS property |
| **Typography & hierarchy** | Single font; no display/body distinction; sizing is arbitrary | Display serif for headlines, readable body; some size scale discipline | Display/body pairing is loaded and rendering; heading scale uses `clamp()` with tight tracking; body copy is line-length constrained; eyebrow treatment is consistent |
| **Spacing, rhythm & density** | Sections run into each other; arbitrary padding; text walls | Consistent section spacing; readable leading; sections are visually separated | Vertical rhythm is perceptible and consistent; whitespace is generous without feeling empty; section-level backgrounds alternate to create visual flow; no cramped passages |
| **Component polish** | Default browser link/button styles; no card system; bare `<ul>` for nav | Custom cards; styled nav; functional buttons with hover states | Cards have hover states + micro-transitions; buttons use brand colors with proper radius/padding; accordion/tables are styled; breadcrumbs are visible and styled; every interactive state is intentional |
| **Color & theme expression** | Only used on the primary CTA; rest is white/grey | Primary color appears on eyebrows, buttons, links, active nav; no secondary usage | Secondary + accent tokens are used deliberately on specific contexts (e.g. dark masthead sections, amber rules, warning badges); palette creates mood, not just brand compliance |
| **Mobile/responsive premium feel** | Layout breaks at 375px; text clips; nav is unusable | Nav works; images don't overflow; readable at 375px | Grid reflows gracefully; hero text doesn't feel tiny on mobile; CTAs are thumb-sized; tool embeds scroll horizontally only if absolutely necessary |

---

## Section 2 — Site Reviews

---

### 2.1 Ferret.com

**Brand brief:** Indie hobbyist magazine — chocolate-amber palette, Playfair Display + Source Sans 3, warm cream backgrounds. Voice: research-grounded, community-curious, not clinical.

#### Dimension Scores

| Dimension | Score | Evidence |
|---|---|---|
| First-screen / hero impact | 3 | Text-centered hero with a real ferret hero photo (manifest: `ferret-com:hero`, Steve Tsang). CTA buttons are styled. The headline ("Ferret.com") is the H1 — underwhelming as a statement of value vs. the italic tagline. Missing: a layout where the photo and the text are in compositional tension; currently photo sits below all the text, not beside it. |
| Photography coverage | 4 | Best ferret coverage in the portfolio: 20+ manifest entries with real photographer attribution. Hub pages (health, care, behavior, colors, diet, ownership) each have a `*-hero` slot. Insulinoma, adrenal-disease, dental, and aging spoke pages carry `StockImage` slots. Gap: several health spoke pages (lymphoma, vaccinations, signs-of-pain, ear-mites, ferret-influenza, spaying-and-neutering) have no image slots at all. The diet sub-pages (4 of them) are also bare text. |
| Visual differentiation | 4 | The chocolate-amber palette is genuinely distinct. The `eyebrow` + `eyebrow-rule` CSS pattern with amber rule lines is ownable. The dark `brand-dark: #1E140A` masthead sections with amber accents create a strong contrast moment. Loses a point because the hub and spoke card layouts are identical to the shared ArticleLayout/card patterns on other sites — the differentiation lives in color tokens only. |
| Typography & hierarchy | 4 | Playfair Display 900 + Source Sans 3 is a strong pairing. `clamp()` on H1 is correct. The italic subtitle treatment on the homepage is the right magazine voice. Drops a point because: (a) the category cards use `font-display` for the label but the sizing (1.5rem for hub cards vs 1.375rem for category cards) is inconsistent — one system, not two; (b) no `font-feature-settings` in globals.css (`dlig`, `kern`) that Fish.com and Vets.co use — missing micro-polish. |
| Spacing / rhythm | 3 | Sections use `clamp(64px, 8vw, 96px)` vertical padding consistently — good. The CLUSTER HUBS section and FEATURED CATEGORIES section are back-to-back with the same surface color (`brand-surface`), creating a visual run-on. The featured articles section uses `brand-surface` again. Three consecutive amber-on-cream sections with no contrast break makes the page feel longer and flatter than it is. |
| Component polish | 3 | Hub cards have a border-radius: 14px and the amber top-border accent stripe — that's an ownable touch. Featured articles use a grid layout that clips the article teaser text on mid-size screens. The Tools section (dark bg) uses emoji icons (🧪, 💰, 📖) — functional but not refined for an indie magazine positioning. No hover-state elevation or shadow transitions visible in the static markup. |
| Color & theme expression | 3 | The `brand-amber` (`#C99D5F`) is well-deployed on eyebrows and rules. The dark masthead tools section uses amber on near-black — the strongest moment on the page. However, the hub cards and category cards do not use the amber accent on hover (only `--brand-primary` on the "Browse →" link), so the color story feels incomplete mid-page. The warm cream `brand-surface: #FBF5E8` is a clear differentiator from other sites. |
| Mobile / responsive | 3 | The 6-column hub grid uses `repeat(auto-fit, minmax(240px, 1fr))` — will produce 1-column on mobile, which is correct. The hero CTAs use `flexWrap: 'wrap'` — good. The featured articles use `gridTemplateColumns: '1fr auto'` which will make the "auto" column disappear improperly on narrow viewports. No evidence of touch-target sizing audit. |

**Overall: 3.3 / 5**

#### P0 Recommendations (executable now, in-repo)

1. **Hero layout: two-column on desktop** — `apps/ferret-com/src/app/page.tsx`, hero section. Split into `grid lg:grid-cols-[1fr_1fr]`: text on left (CTA block), `StockImage` on right (aspect `4:3`, `variant="full-bleed"`). This is the single highest-impact change — it transforms the hero from a centered text block with a photo underneath into a composition. The amber surface background will wrap both columns.

2. **Featured articles: remove `gridTemplateColumns: '1fr auto'`** — `apps/ferret-com/src/app/page.tsx`, FEATURED ARTICLES section. Change to `display: 'flex', flexDirection: 'column'` with a horizontal rule between items. The `auto` column is invisible on mobile and adds nothing on desktop.

3. **Break up section monotony with one white section between the two amber-surface clusters** — In the current order: hero (surface) → trust bar (dark) → tool (surface) → hubs (surface) → categories (white) → articles (surface). Move CLUSTER HUBS to `var(--brand-white)` background and FEATURED CATEGORIES to `var(--brand-surface)`. This creates a dark → white → cream → white → dark visual rhythm.

4. **Add `font-feature-settings` to globals.css** — `apps/ferret-com/src/app/globals.css`. Add `font-feature-settings: 'kern' 1, 'liga' 1, 'dlig' 1;` to the `h1, h2, h3, h4, h5, h6, .font-display` rule. Costs nothing; the Playfair Display italic discretionary ligatures are beautiful and unused.

5. **Add image slots to diet sub-pages** — `apps/ferret-com/src/app/diet/protein-and-fat-requirements/page.tsx`, `kit-vs-adult-feeding`, `whole-prey-vs-kibble`, `weight-management`. Add `<StockImage manifestKey="ferret-com:diet-hero" aspect="16:9" variant="inline" />` at the top of each ArticleLayout body. The `ferret-com:diet-hero` key is already in the manifest.

6. **Replace emoji tool-section icons with inline SVG** — `apps/ferret-com/src/app/page.tsx`, TOOLS & CALCULATORS section. The 🧪💰📖 emoji render as system emoji at 2.25rem — they will look different on every OS and don't match the Playfair Display editorial identity. Use 28px `<svg>` with `stroke="currentColor" strokeWidth="1.4"` (the same pattern Vets.co already uses for its category icons). This is a 30-minute in-repo change.

#### P1 Recommendations (needs Visual judgment or Carlo's Mac)

7. **Health spoke pages need image slots** — 6 health spokes (lymphoma, vaccinations, signs-of-pain, ear-mites, ferret-influenza, spaying-and-neutering) have no `StockImage` calls. Add slots with keys from the photo-gap table in Section 6. Keys need adding to `image-queries.json` and syncing on Carlo's Mac.

8. **Hub page hero images need to render at the top of the hub** — `/health/page.tsx` and `/care/page.tsx` have `StockImage` slots but they render below the card grid (the dark header → then the image → then the cards). For premium feel, the hub hero should sit in a masthead band alongside the hub title, not after it. This is a 15-line layout change per hub.

---

### 2.2 PetFood.com

**Brand brief:** Consumer Reports of pet food — Cormorant Garamond (display) + Inter (body) + JetBrains Mono (data), moss-green on warm white. Voice: skeptical, evidence-based, comparative.

#### Dimension Scores

| Dimension | Score | Evidence |
|---|---|---|
| First-screen / hero impact | 3 | The hero uses Cormorant Garamond at 5xl/7xl for "PetFood.com" — which is bold but the word "PetFood.com" is not intrinsically interesting without more visual work. The `font-display font-medium tracking-tight` treatment is correct. The hero photo (`petfood-com:hero`, whole-food ingredients flat-lay) sits below the hero text in a separate `div` — same compositional miss as Ferret.com. The mono eyebrow `PETFOOD.COM · INDEPENDENT REFERENCE · EST. 2026` is distinctive and the right call for the brand. Drops a point: the secondary/tertiary CTA buttons are visually identical (white bg, same border weight) — no clear visual hierarchy between primary and secondary actions. |
| Photography coverage | 3 | Hub pages are well-covered: nutrition, diets, brands, ingredients, species, compare each have a `StockImage` slot in the manifest. The homepage hero photo exists. But: 14 hub/spoke pages have no image slots at all — including the entire `/feeding/*` sub-cluster (8 pages), `/life-stage`, `/conditions`, `/guides`, `/methodology`, `/myths`. The `feeding` cluster is one of the highest-traffic intent signals for this site. |
| Visual differentiation | 5 | Strongest differentiator in the portfolio. The three-font system (Cormorant Garamond + Inter + JetBrains Mono) combined with the `score-chip` component, `.data-mono` table cells, and the `PETFOOD.COM · INDEPENDENT REFERENCE` mono eyebrow pattern creates a visual system no other site in the portfolio — or in the competitor set — has. The `brand-primary: #3F5C3A` moss green is uncommon in pet food sites (all blue/red/orange). Highest score on this dimension. |
| Typography & hierarchy | 4 | Cormorant Garamond `font-medium` (500) for display is correct — it's a book-weight display serif, not a bold-first face. The `text-5xl md:text-7xl` scaling is generous and confident. JetBrains Mono on the trust bar is immediately legible as "data mode." Drops a point: the `font-display font-medium` body copy on the tagline renders Cormorant at small sizes — Cormorant Garamond's hairline strokes go very thin below 18px and can feel fragile on low-DPI screens. The body text should always fall back to Inter at text-base and smaller. |
| Spacing / rhythm | 4 | The layout uses Tailwind utility classes (`py-16`, `py-20`, `py-section`) consistently. The tool section, trust bar, and featured reference grid alternate backgrounds (surface → white → dark → white) — creating good rhythm. Drops a point: the `TOOLS & CALCULATORS` section and the live cost calculator embed are the same visual weight as the featured references section — no clear hierarchy between "use this tool" vs "read this reference." |
| Component polish | 4 | The `score-chip` component (mono pill, branded green border) is excellent. The featured reference cards have a `kind` discriminator (`comparison`, `ingredient`, `guide`) rendered as an all-caps mono eyebrow — this is the right treatment for a data-reference brand. The dimension table (5 rows of methodology) uses a `bg-brand-primary-pale` background with a mono label — works well. Drops a point: the brand vs. brand comparison pages use `eyebrow: 'BRAND_VS_BRAND'` — these all-caps underscored strings look like code constants, not editorial labels. |
| Color & theme expression | 4 | The dark section (`bg-brand-dark py-20`) for tools is a strong visual anchor — the near-black `#1A1F18` is more neutral/forest than the chocolate-near-black of Ferret.com. The `brand-primary-pale: #EDF1EA` is a beautiful muted green that renders well as a badge/chip background. The `brand-primary-light: #577A50` as the trust-bar text-on-dark is readable. Drops a point: the tool cards in the dark section use `hover:border-brand-primary` but no `transition-colors` on the border — the hover state fires without animation. |
| Mobile / responsive | 3 | The hero uses `max-w-content-wide` as a container — at 320px this will overflow. The three-button CTA group uses `flex flex-wrap gap-3` which is correct. The featured reference cards grid uses `grid gap-6` without explicit column control — will fall to 1 column, which is correct. Concern: the `FoodCostCalculator` tool embed is not audited in this review; interactive calculators with horizontal data tables are a common mobile breakpoint risk. |

**Overall: 3.6 / 5**

#### P0 Recommendations (executable now, in-repo)

1. **Hero layout: add ingredient photo as right-column visual** — `apps/petfood-com/src/app/page.tsx`. Current hero is pure text left-aligned in a surface-bg band. Add a `hidden md:block` right column that holds `<StockImage manifestKey="petfood-com:hero" aspect="4:3" variant="wide" />` inside a `grid md:grid-cols-[3fr_2fr]` layout. The left panel keeps all text; the right panel carries the ingredients flat-lay. This is the fastest way to make the first screen feel magazine-quality.

2. **Differentiate primary CTA from secondary CTAs** — `apps/petfood-com/src/app/page.tsx`, the three-button group. The methodology CTA should be `bg-brand-primary text-white` (already is). The two secondary CTAs should use `bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white` — a ghost button style — so there is a clear visual hierarchy of primary → secondary → tertiary action.

3. **Fix hover transition on dark tool cards** — `apps/petfood-com/src/app/page.tsx`, TOOLS section tool cards. Add `duration-200` (or inline `transition: 'border-color 0.2s ease'`) to the card style. Currently the border color jumps on hover without animation.

4. **Add image slots to `/feeding` cluster** — `apps/petfood-com/src/app/feeding/page.tsx` hub (no image slot) and representative feeding spoke pages. Add `<StockImage manifestKey="petfood-com:category-life-stage" aspect="16:9" variant="wide" />` to the hub (this key exists in the manifest). For individual spokes (`how-much-to-feed-a-dog`, `calorie-calculator-guide`), see photo-gap table in Section 6.

5. **Change brand vs brand eyebrow labels** — `apps/petfood-com/src/app/page.tsx`, FEATURED references. Change `eyebrow: 'BRAND_VS_BRAND'` to `eyebrow: 'Brand Comparison'`, `'INGREDIENT_RISK'` to `'Ingredient Risk'`, `'REGULATORY'` to `'Regulatory'`. The all-caps underscored form looks like a code constant. Small change, significant readability improvement.

6. **Add `font-feature-settings` for Cormorant Garamond** — `apps/petfood-com/src/app/globals.css`. Currently missing the `h1..h6, .font-display` rule with `font-feature-settings: 'kern' 1, 'liga' 1, 'dlig' 1`. Cormorant has distinctive old-style ligatures that are off by default.

#### P1 Recommendations

7. **Methodology page needs image** — `/methodology/page.tsx` has no image. The `petfood-com:cornerstone-methodology` key exists in `image-queries.json` but is not in the manifest yet (needs sync). This page is a primary trust signal for acquirers and should have an image.

8. **Life-stage hub needs image slot** — `/life-stage/page.tsx` has no `StockImage`. Key `petfood-com:category-life-stage` already exists in `image-queries.json` and manifest. Add the slot.

---

### 2.3 Vets.co

**Brand brief:** Clinical-authority reference — Libre Baskerville (display) + Manrope (body), deep teal on navy masthead with warm ivory paper, antique brass accent. Voice: research-anchored, owner-friendly.

#### Dimension Scores

| Dimension | Score | Evidence |
|---|---|---|
| First-screen / hero impact | 4 | Strongest hero treatment of the 5 sites. The dark navy masthead with dual radial gradients (warm brass top-right, deep teal bottom-left) and a fine vertical grain creates a genuine visual environment without photography. The SVG stethoscope mark + `eyebrow` line + branded accent rule is a polished detail. The H1 at `clamp(44px, 6.4vw, 78px)` Libre Baskerville bold is confident and clinical. The italic tagline "Find a vet. Read the guidelines." in `brand-accent-light` is the strongest tagline expression in the portfolio. Full point deducted: the hero photo (`vets-co:hero`, stethoscope on wood) sits in a *separate white section below the dark hero* — breaking the momentum of the masthead. |
| Photography coverage | 3 | Hub pages (health, insurance, guides, find-a-vet, breeds, reviews) all have `StockImage` slots and keys in the manifest. The homepage hero photo is in the manifest. The coverage drops sharply at spoke level: the 8 insurance sub-pages, symptoms hub, telehealth, medications, diagnostics, specialists pages, and the tools page all have no image slots. The image variety is also thin — `vets-co:insurance-hero` and `vets-co:category-reviews` both resolve to the same paperwork-desk photo, which reads as placeholder behavior. |
| Visual differentiation | 4 | Libre Baskerville + Manrope is the most authoritative pairing in the portfolio — it reads genuinely clinical without being cold. The deep navy `#0C1F2C` masthead is distinct from Fish.com's `#06121B` (which is bluer/darker). The brass accent `#B68830` on eyebrow rules is elegant. Drops a point: the hub page layouts are largely identical to the shared ArticleLayout pattern; the differentiation is entirely in the color tokens once you're past the homepage hero. Hub pages like `/health/page.tsx` are essentially the same card grid with different colors as Ferret.com's `/health`. |
| Typography & hierarchy | 5 | Best typography in the portfolio. Libre Baskerville at two weights plus italic gives a genuine oldstyle serif presence. `font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1` is present in `globals.css`. The `tabular-display` utility class for numeric display is correct. The Manrope body at `font-light` (300) for long-form intros is a refined choice. The heading hierarchy from H1 (`clamp(44px, 6.4vw, 78px)`) to H2 (`clamp(28px, 5vw, 50px)`) on hub pages is well-scaled. Full marks. |
| Spacing / rhythm | 3 | The homepage has a structural flow problem: dark hero → white StockImage section → dark trust bar → white categories grid → dark featured guides section → tool embed section. This is 5 alternating sections in a row, which creates visual noise rather than rhythm. The individual section padding (`py-20 lg:py-28` on hero, `py-section` on others) is not consistent. The featured guides section padding is `py-14 md:py-20`; the categories section is `py-16 md:py-20` — close but not aligned. |
| Component polish | 3 | The SVG category icons (stethoscope, book, DNA helix, monitor, shield, warning triangle) are a genuine improvement over the emoji-based icon systems on other sites. The icons share a consistent `strokeWidth: 1.4` and `viewBox: '0 0 24 24'` — on-brand. The featured guides cards use a hardcoded breed portrait image URL inline in the page data (not a `StockImage` slot) — this bypasses the manifest system and omits photographer attribution for the Golden Retriever image. The health library hub page is sparse: it's a dark header + an image + a simple link list with no cards, no descriptions, no visual weight to the content. |
| Color & theme expression | 4 | The navy + teal + brass system is fully deployed on the homepage. The `brand-primary-light: #0F8A78` on the primary CTA button against the dark hero reads well. The `brand-accent: #B68830` is used only on the hero eyebrow rule — it's a missed opportunity to reinforce this accent at section-level rules throughout the page. Drops a point: the hub pages (`/health`, `/find-a-vet`, `/guides`) don't carry the brand-dark masthead header that the homepage uses — they start with a brand-dark band but it's more compact and doesn't sustain the clinical-authority feel. |
| Mobile / responsive | 3 | The hero grid is `max-w-container-wide` — should be fine. The category icons grid uses `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — correct. The featured guides grid uses inline conditional image rendering with hardcoded `w-full h-40 object-cover` on card thumbnails — this will cause variable-height cards at mid-breakpoints. The stethoscope SVG mark in the hero is `width="44" height="44"` — will scale fine. |

**Overall: 3.4 / 5**

#### P0 Recommendations (executable now, in-repo)

1. **Merge hero photo into the dark masthead** — `apps/vets-co/src/app/page.tsx`. The `vets-co:hero` (stethoscope on warm wood) currently renders in a white section below the dark hero. Move it inside the dark `bg-brand-dark` section as a right-column image. Use `grid lg:grid-cols-[3fr_2fr]` — text left, photo right. Crop the photo with `object-cover rounded-lg` and a subtle `opacity-90` to blend with the dark bg. This eliminates the white interruption between hero and trust bar.

2. **Fix attribution on Golden Retriever featured guide card** — `apps/vets-co/src/app/page.tsx`, FEATURED_GUIDES array. The guide with `href: '/breeds/golden-retriever-health'` has `image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=900&q=80...'` as a hardcoded URL without photographer attribution. Convert to `<StockImage manifestKey="vets-co:category-breeds" />` (already in manifest, `curated: true`) OR add photographer credit inline. This is a QC §1 Unsplash TOS compliance issue — hardcoded URLs without credit violate TOS.

3. **Add insurance sub-page hero images** — The 8 insurance sub-pages (`how-pet-insurance-works`, `when-to-enroll`, etc.) have no images. Add `<StockImage manifestKey="vets-co:insurance-hero" aspect="16:9" variant="inline" />` to each one as the opening image in the article body. The key is in the manifest. This is a pure code change, no sync needed.

4. **Add telehealth page image** — `apps/vets-co/src/app/telehealth/page.tsx` has no image. Add `<StockImage manifestKey="vets-co:category-telehealth" aspect="16:9" variant="wide" />`. Key exists in `image-queries.json` but not yet in manifest — needs adding to queries.json and syncing on Carlo's Mac (see photo-gap table).

5. **Rebuild health hub page with card system** — `apps/vets-co/src/app/health/page.tsx`. The current implementation is a dark header + image + `<Link>` list. It has no card descriptions, no visual rhythm, and looks significantly thinner than the ferret or fish health hubs. Apply the same card pattern used in `ferret-com/health/page.tsx` — `HealthCard` grid with `eyebrow`, `title`, `description`. This is pure markup work.

6. **Add consistent brass-accent rule to all hub page headers** — Hub pages (`/health`, `/find-a-vet`, `/guides`, `/breeds`) have the dark masthead header but omit the brass `eyebrow-rule` span that the homepage uses. Add `<span className="w-8 h-0.5 block mb-4" style={{ background: 'var(--brand-accent)' }} />` before each hub H1. 3-line change per page, immediate visual improvement.

#### P1 Recommendations

7. **Insurance sub-pages need distinct photo coverage** — `vets-co:insurance-hero` (paperwork desk) is used for both `/insurance/page.tsx` and `/reviews/page.tsx` via `vets-co:category-reviews`. Both keys resolve to the same image. Add distinct queries for telehealth and insurance sub-topics (see photo-gap table).

8. **Medications and diagnostics hub pages need images** — High-trust signals for acquirers. See photo-gap table.

---

### 2.4 Fish.com

**Brand brief:** Aquarium magazine — Cormorant Garamond (italic display) + Inter (body), deep teal `#0E5F7E` on near-black masthead with cool off-white paper. Voice: practical aquarist, problem-solving.

#### Dimension Scores

| Dimension | Score | Evidence |
|---|---|---|
| First-screen / hero impact | 4 | The problem-first grid (6 quick-action cards: cloudy water, fish gasping, ammonia spike, algae, cycling, stocking) is the most user-centered above-the-fold design in the portfolio. The dark masthead with a radial teal gradient and the italic Cormorant H1 "What's happening in your tank?" is a strong editorial statement. The problem cards use `bg-white/[0.05] border border-white/[0.08]` — glass-morphism cards on dark background. Drops a point: emoji icons (☁️🫧⚠️🌿🔄🐟) in the problem cards are platform-dependent; the `text-3xl` size means they'll render in Apple Color Emoji on Safari/iOS and look mismatched with the editorial type. |
| Photography coverage | 4 | Strong hub coverage: hero, freshwater category, species category, health category, equipment category, setup category, reviews category all have manifest entries. Spoke pages: betta, neon tetra, goldfish have `StockImage` slots. The `fish-com:hero` key resolves to a betta photo — appropriate. Drops a point: 9 review spoke pages (`best-aquarium-heaters`, `best-aquarium-filters`, `best-aquarium-lighting`, `best-canister-filters`, `best-water-test-kits`, `best-nano-tanks`, `best-planted-tank-fertilizers`) have no image slots. These are high-commercial-intent pages that need visual polish. The species `[slug]/page.tsx` (dynamic route) also has no image slot. |
| Visual differentiation | 4 | Cormorant Garamond italic is distinctive and feels magazine-quality — "What's happening in your tank?" in italic at `clamp(36px, 5.5vw, 64px)` is a strong editorial voice. The cool `#EAF3F8` `brand-primary-pale` as the trust bar background is unusual and right. Drops a point: the calculator banner section and tool cards (same dark bg as the hero, same white-card-on-dark pattern) visually repeat the above-the-fold treatment without creating a new moment. The page feels "dark section, light section, dark section, light section" with limited variation in card treatments. |
| Typography | 4 | Cormorant Garamond italic on section H2s is correct and earned. `font-feature-settings: 'kern' 1, 'liga' 1, 'dlig' 1` is in `globals.css` for display headings. `tabular-display` utility for parameter tables is correct. Drops a point: the problem cards use `font-display font-bold text-white` for the H2 within each card — at `text-base` (16px), Cormorant Garamond bold is harder to read than Inter bold. Card-level labels should probably use Inter for legibility. |
| Spacing / rhythm | 3 | The above-the-fold section has two consecutive dark-bg bands (hero → calculator banner) before the first light moment. This compresses the top 40% of the page into a visual mass. The `py-section` token is used inconsistently (`py-section` vs `py-16` vs `pb-16`). Species page and setup page hero images render with `variant="inline"` which adds `my-8` margin — below the hub masthead, this creates an orphaned image block that floats without clear relationship to the surrounding content. |
| Component polish | 3 | The problem cards and tool cards use the same glass-morphism pattern — adequate but not varied enough to create hierarchy between a "problem triage card" (action-oriented) and a "calculator card" (reference-oriented). The featured species grid on the homepage uses inline `<Image>` tags with hardcoded Unsplash URLs in an `<ul>` — these need to move to the manifest system for proper attribution. The `DIFF_COLORS` badge system on the species hub (`bg-green-50`, `bg-amber-50`, `bg-red-50`) are hard-coded Tailwind color classes rather than CSS variable tokens — they will not respond to a future theme change. |
| Color & theme expression | 4 | The deep teal primary `#0E5F7E` on dark backgrounds reads as true aquarium depth. The `brand-accent: #5BC0DE` refraction highlight is correct for the species. The `brand-primary-pale: #EAF3F8` on the trust bar is a distinctive treatment — no other site uses a primary-pale for a full-width stripe. Drops a point: the accent (`#5BC0DE`) appears on the trust bar text `text-brand-primary-light` but not on any card borders or hover treatments — underutilized. |
| Mobile / responsive | 3 | The 6-card problem grid uses `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — correct. The calculator banner uses `flex items-center justify-between flex-wrap` — will stack at small viewports. The species featured grid is a `grid grid-cols-2 sm:grid-cols-4` which means 2 columns at mobile (each 50% wide) — acceptable for fish cards, but text inside the cards may clip at 375px. The inline species images (`h-40 object-cover`) with hardcoded URLs are not `priority` — below-fold images will lazy-load correctly but above-fold species images may cause CLS. |

**Overall: 3.5 / 5**

#### P0 Recommendations (executable now, in-repo)

1. **Replace inline species images with manifest-system StockImages** — `apps/fish-com/src/app/page.tsx`, `FEATURED_SPECIES` array, and `apps/fish-com/src/app/species/page.tsx`, `FEATURED` array. Current code has hardcoded Unsplash URLs without attribution — QC §1 TOS violation. Convert to `<StockImage manifestKey="fish-com:species-betta" />` etc. Keys for betta, neon tetra, goldfish are in the manifest. For clownfish, angelfish, discus, guppy, oscar, corydoras: add entries to `image-queries.json` (see photo-gap table) and sync on Carlo's Mac.

2. **Replace emoji problem-card icons with SVG** — `apps/fish-com/src/app/page.tsx`, PROBLEMS array. Same issue as Ferret.com tools icons. Replace ☁️🫧⚠️🌿🔄🐟 with 24px inline SVGs using `stroke="currentColor" strokeWidth="1.4"` matching the aquarium-magazine aesthetic. For the water/bubble/warning icons, simple geometric SVGs are available; for the fish icon, use a silhouette path. This is 40 lines of markup change.

3. **Add image slots to review spoke pages** — `apps/fish-com/src/app/reviews/` sub-pages (7 review pages have no images). Each review page should carry a `<StockImage manifestKey="fish-com:category-equipment" aspect="16:9" variant="inline" />` as a fallback until specific equipment photos are added. The equipment category key is in the manifest and is appropriate for filter/heater/lighting reviews.

4. **Differentiate tool-card treatment from problem-card treatment** — `apps/fish-com/src/app/page.tsx`. Both the problem cards and the calculator tool cards use `bg-white/[0.05] border border-white/[0.08]`. Tool cards should have a distinct treatment: add `border-l-2 border-l-brand-accent` (the `#5BC0DE` refraction accent) as a left border accent on tool cards specifically. This uses the underutilized accent token and visually distinguishes "navigation card" from "tool card."

5. **Fix DIFF_COLORS to use CSS variables** — `apps/fish-com/src/app/species/page.tsx`. Replace `bg-green-50 text-green-700 border-green-200` etc. with CSS-variable equivalents: `bg-brand-success/10 text-brand-success border-brand-success/30`. This aligns the difficulty badge system with the design token layer.

#### P1 Recommendations

6. **Dynamic species route needs image slot** — `apps/fish-com/src/app/species/[slug]/page.tsx` has no `StockImage`. Add a fallback slot with `manifestKey="fish-com:category-species"` that renders if no species-specific key exists.

7. **Water hub page needs image** — `apps/fish-com/src/app/water/page.tsx` has no image. See photo-gap table.

---

### 2.5 Dog.com

**Brand brief:** Mass-market owner operating system — Playfair Display + DM Sans, warm orange `#E8622A` primary on near-black dark. Voice: decision-helpful, authoritative, accessible.

#### Dimension Scores

| Dimension | Score | Evidence |
|---|---|---|
| First-screen / hero impact | 4 | The "What do you need help with for your dog today?" decision-hub frame is the best first-screen conceptually. The 5-path grid (health/urgent, breed, puppy, senior, product) creates immediate utility. The urgent path card has a distinct treatment (`bg-brand-primary/15 border border-brand-primary/40`) — correct urgency signaling. The warm orange radial gradient on the dark masthead is energetic. Drops a point: the dog hero photo (`dog-com:hero`, `curated: true`) sits in a white section below the hero, breaking the momentum exactly like Vets.co. This is the portfolio's systemic hero-photo positioning problem. |
| Photography coverage | 4 | Best coverage of the 5 sites. Homepage hero, 7 category keys (health, breeds, puppy, nutrition, training, reviews, guides) all in manifest. Breed pages (golden retriever, labrador) use inline `<Image>` with hardcoded Unsplash URLs — same attribution issue as Fish.com. The health hub and training hub have `StockImage` slots. Training spoke pages (15 pages: crate-training, puppy-biting, loose-leash-walking, etc.) all have no image slots — this is the largest unimaged content cluster on the site. |
| Visual differentiation | 4 | The warm orange primary is distinctive — it's more energetic than Ferret.com's chocolate brown. Playfair Display Black (900) with `tracking-tighter` at `clamp(36px, 5.5vw, 64px)` is bold and direct. The `brand-surface: #FBF7F4` is a warm white that differentiates from Fish.com's cool off-white. Drops a point: the page section structure (dark hero → white image → colored trust bar → dark banner → light tool → content grid) is close to identical to Fish.com's structure. Two sites in the portfolio solve "how to organize a decision-hub homepage" the same way. |
| Typography | 4 | Playfair Display Black is the dominant display mode — heavier than Ferret.com's 900 weight in visual impact. DM Sans is a clean geometric sans with good weight range. The eyebrow treatment is consistent. `font-feature-settings` is absent from `globals.css` (same gap as Ferret.com). Drops a point. |
| Spacing / rhythm | 4 | Section backgrounds alternate well: dark hero → white image → orange-pale trust bar → dark puppy banner → white tool → white/light content grids. The content grids (health decisions, food tools, training, product guides) in the lower half of the page use `py-section border-b border-brand-border` — creating a clear rhythm of decision-making categories. The trust bar uses `py-3` which is tight — fine for a small announcement strip. |
| Component polish | 4 | The breed cards use `next/image` with `fill` and `object-cover` — correct implementation. The health urgency badge system (`ER`, `Same-day`, `Schedule`, `Monitor`) uses semantic color classes. The puppy lead-magnet banner uses a yellow dog emoji + structured message — effective. The `BreedHealthCard`, `DropCap`, `CalloutBox`, `ArticleByline` components are the most complete spoke-level component set in the portfolio. Drops a point: training spoke pages have no imagery at all and no `ArticleLayout` visual enrichment. |
| Color & theme expression | 4 | The warm orange primary is fully deployed: eyebrows, CTAs, hover states, urgency cards. The `brand-primary-pale: #FEF3EE` for the trust bar strip is the right muted echo. The `brand-dark: #1A0E08` warm near-black distinguishes from Fish.com's `#06121B` blue-black. Drops a point: the lower-half content section grids have no color variation — they're all white/white-surface with border-b separators. No section uses a dark bg in the lower half, making the lower ~60% of the homepage feel uniform in tone. |
| Mobile / responsive | 3 | The 5-column owner-path grid uses `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5` — will be 1 column on mobile (too many columns at lg to compress elegantly). The puppy banner uses `flex items-center justify-between flex-wrap` — stacks correctly. The tool embed (`WhichPetWizard`) is not audited here. The `AffiliateDisclosure` above the nav (sitewide in layout.tsx) adds ~40px to the effective "above fold" height at mobile — this pushes the hero H1 below the fold on 667px-height phones. |

**Overall: 3.8 / 5**

#### P0 Recommendations (executable now, in-repo)

1. **Merge hero photo into the dark masthead (same as Vets.co P0)** — `apps/dog-com/src/app/page.tsx`. The `dog-com:hero` photo sits in a `bg-brand-white` section below the dark hero. Move into the hero's dark section as a right-column image using `hidden lg:block` + `grid lg:grid-cols-[5fr_3fr]`. At lg+, the owner-path 5-card grid should span both columns below the H1. The photo adds warmth to the dark masthead and removes the white interruption.

2. **Fix attribution on breed page inline images** — `apps/dog-com/src/app/breeds/golden-retriever/page.tsx`, `apps/dog-com/src/app/breeds/labrador-retriever/page.tsx`, and the `FEATURED_BREEDS` array in `page.tsx`. Inline `<Image>` tags with hardcoded Unsplash URLs have no photographer attribution visible to users — Unsplash TOS violation. Convert to `<StockImage manifestKey="dog-com:category-breeds" />` for the featured cards, or add new species-specific manifest keys. The golden retriever URL `1552053831-71594a27632d` is in the manifest as `dog-com:category-breeds` (`curated: true`) — reference it.

3. **Add image slots to training spoke pages** — 15 training pages have no images. The simplest fix: add `<StockImage manifestKey="dog-com:category-training" aspect="16:9" variant="inline" />` at the top of each ArticleLayout body. The `dog-com:category-training` key is in the manifest (`curated: true`). This is a 2-line addition per page, 30 minutes of work.

4. **Add `font-feature-settings` to globals.css** — `apps/dog-com/src/app/globals.css`. Same gap as Ferret.com. Add `font-feature-settings: 'kern' 1, 'liga' 1, 'dlig' 1;` to `h1, h2, h3, h4, h5, h6, .font-display`. Playfair Display Black's swash alternates are behind this flag.

5. **Add a dark/surface-bg section to the lower-half content grid** — `apps/dog-com/src/app/page.tsx`. The four decision-category sections in the lower half (Health, Food & Nutrition, Training, Products) all use white/light backgrounds. Wrap the Training section in `bg-brand-dark` with white text — same pattern as the dark tools section on Ferret.com. This breaks the monotony and creates a visual anchor in the lower half of the homepage.

#### P1 Recommendations

6. **Nutrition hub needs image** — `apps/dog-com/src/app/nutrition/page.tsx` has `StockImage manifestKey="dog-com:category-nutrition"` — already wired. Verify this page is rendering the slot correctly (no known issue, just audit).

7. **Symptoms hub is high-traffic and has no dedicated photo** — `apps/dog-com/src/app/symptoms/page.tsx` — check if it has an image slot; add one if not with a new key (see photo-gap table).

---

## Section 3 — Cross-Site Systemic Issues

These 3 issues appear on every site and should be addressed portfolio-wide, not site-by-site.

### Issue 1: Hero Photo Positioning (All 5 Sites)

**Observation:** On every site that has a hero photo, the photo is placed in a *separate section below the dark hero*, not within it. This means: dark hero section (text only) → light/white section (photo) → dark trust bar. The white photo section breaks the hero's momentum and creates a visual stutter.

**Fix pattern (applies to Dog.com, Fish.com, Vets.co, PetFood.com, Ferret.com homepages):**
- Integrate the photo into the hero section as a right-column element on lg+ screens
- Use `grid lg:grid-cols-[3fr_2fr]` or similar
- On mobile, photo goes below the text block (or is hidden entirely if above-fold space is tight)
- This change requires no new photo — it repositions existing manifest images

**Files affected:** `apps/[site]/src/app/page.tsx` for all 5 cohort sites

### Issue 2: Inline Hardcoded Unsplash URLs Without Attribution (Dog.com, Fish.com, Vets.co)

**Observation:** Three sites use `<Image src="https://images.unsplash.com/photo-XXXX..." />` directly in breed card grids, species card grids, and featured guide cards. These bypass the manifest system and render images without photographer attribution text — a direct Unsplash TOS violation.

**Affected files:**
- `apps/dog-com/src/app/breeds/golden-retriever/page.tsx` — hardcoded golden retriever URL
- `apps/dog-com/src/app/breeds/page.tsx` — `BREED_IMAGES` record with 6 hardcoded URLs
- `apps/dog-com/src/app/page.tsx` — `FEATURED_BREEDS` array with 4 hardcoded URLs
- `apps/fish-com/src/app/page.tsx` — `FEATURED_SPECIES` array with 4 hardcoded URLs
- `apps/fish-com/src/app/species/page.tsx` — `FEATURED` array with 8 hardcoded URLs
- `apps/vets-co/src/app/page.tsx` — `FEATURED_GUIDES[2].image` (golden retriever URL)

**Fix:** Move all to `<StockImage manifestKey="..." />` using existing manifest entries where they exist, or add new keys to `image-queries.json` and sync.

### Issue 3: Mobile Nav + AffiliateDisclosure Stacks (Dog.com Specifically, Risk on Others)

**Observation:** Dog.com's `layout.tsx` renders `<AffiliateDisclosure variant="inline" />` above `<main>` sitewide. On mobile, this banner adds ~40-60px above the nav spacer. Combined with the fixed `68px` nav, the effective "content starts here" line is ~110-130px from the top on mobile. The hero H1 on a 667px phone (iPhone SE 3rd gen) may start below the viewport midpoint.

**Fix:** The `AffiliateDisclosure` inline variant should be inside `<main>` at the top of each page, not in the layout wrapper — or it should be a dismissible banner with a `position: sticky` not `fixed`. This is a layout.tsx change and a disclosure placement policy decision (coordinate with Monetization Bot before touching).

---

## Section 4 — Photo-Matching Gap Table

New slots needed: add each entry to `scripts/image-queries.json`, then run `node scripts/sync-images.mjs` on Carlo's Mac to populate.

### 4.1 Ferret.com — 6 new slots needed

| Page / Hub | Proposed manifestKey | Precise search query | Orientation | Notes |
|---|---|---|---|---|
| `/health/lymphoma` | `ferret-com:health-lymphoma` | `ferret resting lymphoma cancer` | landscape | Re-use resting posture; no clinical scene |
| `/health/vaccinations` | `ferret-com:health-vaccinations` | `ferret close up portrait health` | landscape | Non-clinical; use existing Unsplash ferret portrait pool |
| `/health/signs-of-pain` | `ferret-com:health-signs-of-pain` | `ferret sleeping resting calm` | landscape | Avoid distressed-looking subjects; illustrative |
| `/health/ear-mites` | `ferret-com:health-ear-mites` | `ferret face portrait ear close` | landscape | Closest available: ferret face detail |
| `/health/ferret-influenza` | `ferret-com:health-influenza` | `ferret resting cozy blanket` | landscape | Illustrative of illness rest |
| `/health/spaying-and-neutering` | `ferret-com:health-spay-neuter` | `ferret held hands secure` | landscape | Handled gently; no clinical scene |
| `/diet/protein-and-fat-requirements` | `ferret-com:diet-protein` | `raw meat protein bowl close up` | landscape | Ingredient-forward (PetFood.com aesthetic OK here) |
| `/diet/whole-prey-vs-kibble` | `ferret-com:diet-whole-prey` | `ferret food bowl kibble` | landscape | Use existing `ferret-com:diet-hero` as fallback |

### 4.2 PetFood.com — 5 new slots needed

| Page / Hub | Proposed manifestKey | Precise search query | Orientation | Notes |
|---|---|---|---|---|
| `/feeding` (hub) | `petfood-com:feeding-hero` | `pet food bowl measuring spoon kitchen` | landscape | Ingredient-forward; no smiling pet cliché |
| `/feeding/how-much-to-feed-a-dog` | `petfood-com:feeding-dog-portion` | `dog food bowl portion measuring cup` | landscape | White background preferred |
| `/feeding/calorie-calculator-guide` | `petfood-com:feeding-calories` | `food scale nutrition label kitchen` | landscape | Technical/reference feel |
| `/life-stage` (hub) | Re-use `petfood-com:category-life-stage` | Already in queries.json; add to manifest | landscape | Just needs sync |
| `/methodology` (hub) | Re-use `petfood-com:cornerstone-methodology` | Already in queries.json; needs sync | landscape | Clipboard/scoring reference; in queries.json already |
| `/conditions` (hub) | `petfood-com:conditions-hero` | `prescription diet veterinary bag clinical` | landscape | Use `petfood-com:category-conditions` from queries.json |

### 4.3 Vets.co — 6 new slots needed

| Page / Hub | Proposed manifestKey | Precise search query | Orientation | Notes |
|---|---|---|---|---|
| `/telehealth` | `vets-co:category-telehealth` | `laptop video call pet owner dog` | landscape | Already in queries.json; needs sync on Carlo's Mac |
| `/symptoms` | `vets-co:symptoms-hero` | `dog looking unwell veterinary concern` | landscape | Owner observing dog; no clinical scene (no staged exam) |
| `/medications` | `vets-co:medications-hero` | `medication pills prescription label desk` | landscape | Object-only, no human subject |
| `/diagnostics` | `vets-co:diagnostics-hero` | `veterinary equipment stethoscope reference` | landscape | Instrument/equipment focus; no human subject |
| `/specialists` | `vets-co:specialists-hero` | `clinic referral letter paperwork desk` | landscape | Paperwork/document texture; no human subject |
| `/insurance/when-to-enroll` | Re-use `vets-co:insurance-hero` | Already in manifest | landscape | Distinct enough for this sub-page |

### 4.4 Fish.com — 6 new slots needed

| Page / Hub | Proposed manifestKey | Precise search query | Orientation | Notes |
|---|---|---|---|---|
| `/water` (hub) | `fish-com:category-water` | `aquarium water test tube ammonia` | landscape | Water chemistry theme |
| `/reviews/best-aquarium-heaters` | `fish-com:equipment-heater` | `aquarium submersible heater close-up` | landscape | Equipment focus |
| `/reviews/best-aquarium-filters` | `fish-com:equipment-filter` | `aquarium canister filter equipment` | landscape | Equipment focus |
| `/reviews/best-aquarium-lighting` | `fish-com:equipment-lighting` | `aquarium led lighting planted tank` | landscape | PAR spectrum visual |
| `/species/cherry-shrimp` | `fish-com:species-cherry-shrimp` | `cherry red shrimp aquarium plant` | landscape | Species-specific; Neocaridina davidi |
| `/species/discus` | `fish-com:species-discus` | `discus fish planted aquarium` | landscape | Species-specific; Symphysodon |

### 4.5 Dog.com — 4 new slots needed

| Page / Hub | Proposed manifestKey | Precise search query | Orientation | Notes |
|---|---|---|---|---|
| `/symptoms` (hub) | `dog-com:symptoms-hero` | `dog looking unwell concerned owner observing` | landscape | Owner + dog; no clinical staging |
| `/training/crate-training` | Re-use `dog-com:category-training` | Already in manifest (`curated: true`) | landscape | Same key used across all training spokes as default |
| `/training/puppy-schedule` | `dog-com:puppy-schedule-hero` | `young puppy sitting attentive eight weeks` | landscape | Puppy-specific; distinct from adult dog |
| `/nutrition/page.tsx` | Already wired (`dog-com:category-nutrition`) | Verify slot is rendering correctly | landscape | No new key needed; audit only |

**Total new photo slots to add to `image-queries.json`:** 27 (some reuse existing keys from manifest; 19 require new manifest entries via sync)

---

## Section 5 — Component-Level Findings

### 5.1 ArticleLayout.tsx (shared)

The `ArticleLayout` hero section uses `bg-brand-dark pt-14 pb-0` with an inline SVG texture overlay. This is adequate but the hero image slot (`hero.image`) renders as a plain `<img>` tag below the dark band — bypassing `next/image` optimization. This means: no lazy loading, no webp conversion, no size optimization. Any spoke pages using `ArticleLayout` with a `hero.image` prop (vs. a `<StockImage>` in the article body) are serving unoptimized images.

**Fix:** Replace `<img src={hero.image} ...>` in `packages/ui/src/components/ArticleLayout.tsx` at line 165 with `<Image src={hero.image} alt={hero.imageAlt ?? hero.title} fill className="object-cover" sizes="100vw" />` inside a positioned container. This is a shared-component change — affects all sites.

### 5.2 Nav.tsx (shared)

The mobile drawer uses `position: fixed top-nav left-0 right-0` which will cover content below the nav on mobile. No `max-height` or scroll is applied — if a site has > 8 nav items, the mobile menu will overflow the viewport bottom without scrolling. Currently all 5 sites have 5-7 nav items, so this is a latent issue. Add `max-h-[calc(100vh-var(--nav-height))] overflow-y-auto` to the drawer div.

### 5.3 Footer.tsx (shared)

The footer is dark (`bg-brand-dark`) with white text — correct. The `grid-cols-4` desktop layout collapses to `grid-cols-2` at `md` — good. The legal links at the bottom use `text-xs text-white/55` — legible. One gap: the legal links list includes `/editorial-standards` but this route does not exist on all sites. `vets-co` and `petfood-com` both have this route; verify fish-com, ferret-com, dog-com each have it (confirmed from file listings — all have it).

### 5.4 EmailCapture.tsx (shared)

Currently gated behind `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED !== 'true'` — renders `null` until that env var is set. This means every homepage email capture section renders empty white space (the section wrapper is there, but the form is null). Before launch, either: (a) set the env var and wire Mailchimp, or (b) show a "Coming soon" version of the capture. The blank section is visible in the layout and looks like a broken component to visitors.

---

## Section 6 — Top 3 Cross-Site Recommendations

### Recommendation 1: Integrate Hero Photos into Dark Masthead Sections (All 5 Sites)

Every cohort site has a hero photo sitting in a white section below the dark hero, creating a visual stutter. Moving the photo inside the dark section as a right-column element is a single compositional change per site that will:
- Remove one visual interruption at the top of every homepage
- Create a genuine "magazine cover" moment for the first 600px
- Require no new photography (uses existing manifest entries)

**Files:** `apps/[site]/src/app/page.tsx` × 5  
**Effort:** S per site (15 lines of layout change)  
**Visual impact:** Highest single change across the portfolio

### Recommendation 2: Migrate All Hardcoded Unsplash URLs to the Manifest System

Three sites (Dog.com, Fish.com, Vets.co) have inline `<Image src="https://images.unsplash.com/photo-XXXX" />` calls that bypass the manifest, omit photographer attribution, and violate Unsplash TOS. This is a trust-bar compliance issue (QC §1 explicitly requires preserving photographer attribution) and a valuation risk (acquirers doing due diligence will find it).

**Files:** 6 files across 3 sites (see Section 3, Issue 2)  
**Effort:** S–M (manifest entries exist for most; new entries needed for ~6 species photos)  
**Trust impact:** Highest priority compliance fix

### Recommendation 3: Audit and Fix Mobile Viewport at 375px for Tool Embeds

Every site scores 3 on mobile. The three inline tool embeds (`FerretFoodEvaluator`, `FoodCostCalculator`, `InsuranceReimbursementEstimator`, `WhichPetWizard`, `VolumeCalculator`) are the highest-risk mobile failure points — interactive calculators with input fields, tables, or multi-column layouts routinely overflow on narrow screens. Before launch, each embed should be tested at 375px viewport width. This is a Carlo's Mac task (requires browser DevTools) but the code changes can be prepared in advance.

---

## Section 7 — Premium Design Rubric (Reusable)

For ongoing design-bot reviews. Copy this table into future review documents.

| Dimension | Weight | 1 | 3 | 5 |
|---|---|---|---|---|
| First-screen / hero impact | 1.5× | No visual moment; generic template feel | Legible hero; CTA visible; photo exists | Split-column hero; photo integrates with type; typography creates personality in <3s |
| Photography coverage | 1.5× | No images on hub or spoke pages | Hero and hub hubs have images; most spokes are bare | Every hub + top-10 spokes carry species-matched images; no image recycled more than 2× across a hub cluster |
| Visual differentiation | 1× | Visually indistinguishable from another CarloOS site | Distinct palette; templated layout | Font pairing + palette + card system is uniquely this brand; would not work on any sister site |
| Typography & hierarchy | 1× | Single font; arbitrary sizing | Display/body distinction; H scale present | clamp() display headings with tight tracking; display at all 3 heading levels; feature-settings on; body line-length capped at ~70ch |
| Spacing / rhythm | 1× | Sections run together; text walls | Consistent section padding; backgrounds alternate | Perceptible vertical rhythm; generous whitespace; 3+ distinct section bg values in use; no more than 2 consecutive same-bg sections |
| Component polish | 1× | Default browser styles; no card system | Cards styled; hover states exist; nav works | Hover micro-transitions; all interactive states intentional; emoji icons replaced with SVG; breed/species/ingredient cards have consistent visual system |
| Color & theme expression | 1× | Primary color on buttons only | Primary on eyebrows, CTAs, hover, active nav | Secondary + accent tokens used for section-level accents; palette creates mood; dark sections use brand-dark (not black); accent seen in 3+ contexts |
| Mobile / responsive | 1.5× | Layout breaks at 375px | Nav works; images don't overflow; readable | Grid reflows elegantly; hero text readable on 375px; CTAs are thumb-sized; tool embeds tested; sitewide banners don't eat above-fold height |

**Scoring:** Sum of (score × weight) / sum of weights. A site scoring ≥4.0 on weighted average is launch-quality on design; below 3.5 needs at least P0 fixes before DNS flip.

---

*Review produced by visual-design-review agent, 2026-06-03. Source files read: 42 files across 5 apps + 6 shared UI components + image-manifest.json + image-queries.json. No app code was edited.*
