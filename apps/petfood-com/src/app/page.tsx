/**
 * PetFood.com — homepage (image-led premium rebuild, 2026-06-05).
 *
 * Rolls out the APPROVED Dog.com image-led, mobile-first homepage pattern
 * (PR #487, ratified to main) onto PetFood.com WITHOUT diluting the brand. The
 * brief: a real ingredient photo is the FIRST + dominant element after the nav
 * on EVERY breakpoint — a full-bleed hero (~60vh mobile / ~76vh desktop) with
 * the H1 + one primary CTA overlaid on a dark gradient scrim — instead of the
 * old text-first masthead that pushed the hero photo below the fold on a phone.
 *
 * Brand fidelity (PetFood.com = "Consumer Reports of pet food"):
 *   - Moss-green (#3F5C3A brand-primary) on warm white. No new colors.
 *   - Cormorant Garamond display, Inter body, JetBrains Mono for data.
 *   - Mono UPPERCASE eyebrows + score-chip / dimension-label system preserved.
 *   - Voice stays skeptical, evaluative, citation-anchored. No marketing fluff.
 *
 * Image strategy (QC §1 + Unsplash/Pexels TOS):
 *   - All imagery comes from the committed manifest via <StockImage>. No
 *     hardcoded stock-CDN URLs (trust-guard blocks them).
 *   - Every rendered image uses a REAL, synced petfood-com manifest key
 *     (verified in packages/ui/src/data/image-manifest.json) — no placeholder
 *     slots ship. Real keys used:
 *       petfood-com:hero                 -> raw ingredients (full-bleed hero)
 *       petfood-com:category-brands      -> premium bag on a retail shelf
 *       petfood-com:category-ingredients -> single-ingredient sources
 *       petfood-com:compare-hero         -> contrasting ingredients flat-lay
 *       petfood-com:category-species     -> raw protein cuts
 *       petfood-com:category-conditions  -> prescription veterinary diet bag
 *       petfood-com:nutrition-hero       -> grains / legumes / seeds
 *   - Each text-over-image surface carries subtleCredit so attribution stays
 *     present + clickable but unobtrusive (QC §1 / TOS), plus a gradient scrim
 *     so copy stays legible.
 *
 * Trust posture (QC §1):
 *   - "Independent reference," "no paid scores," "AAFCO-anchored" only. No fake
 *     authority, no AI-generated humans, no first-person hands-on claims.
 *   - Top-of-page inline disclosure intentionally absent from layout.tsx (the
 *     first emotional impression is ingredient photography, not a compliance
 *     notice); FTC posture preserved via the footer disclosure one-liner
 *     (<Footer ... showAffiliateDisclosure />) + the in-context editorial
 *     disclosure section below + per-page disclosures on monetized surfaces.
 *
 * Reused routes (all verified to exist on origin/main):
 *   /guides/methodology, /guides/reading-pet-food-labels,
 *     /guides/aafco-completeness-explained
 *   /tools, /tools/food-cost-calculator, /tools/portion-calculator
 *   /brands, /brands/orijen-vs-acana-comparison
 *   /ingredients, /ingredients/grain-free-dcm-risk
 *   /nutrition, /species, /life-stage, /conditions, /compare, /glossary
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'
import { SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'
// Live cost calculator embedded on the homepage — the scoring/compare product
// is something you DO on the first screen, not a link (premium gate 3).
import { FoodCostCalculator } from '../components/visual/FoodCostCalculator'

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'petfood-com', name: 'PetFood.com', url: 'https://petfood.com' }),
  buildWebSiteSchema({ siteId: 'petfood-com', name: 'PetFood.com', url: 'https://petfood.com' }),
)

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Brand Reviews & Comparisons — Independent | PetFood.com',
  description:
    'Independent ingredient-and-brand reference for cat and dog food. AAFCO-anchored methodology, recall-tracked, WSAVA-aligned. No paid scores.',
  path: '/',
  type: 'website',
})

// ── Methodology dimensions ────────────────────────────────────────────────
// The five scoring axes published in /guides/methodology. Labels render in
// mono to signal "this is rubric data, not marketing copy."

const DIMENSIONS: Array<{
  key: string
  label: string
  detail: string
}> = [
  {
    key: 'AAFCO_COMPLETENESS',
    label: 'AAFCO completeness',
    detail:
      'Nutritional adequacy statement, weighted by feeding-trial vs formulation-only certification.',
  },
  {
    key: 'INGREDIENT_SOURCING',
    label: 'Ingredient sourcing',
    detail:
      'Disclosure of protein source, country of origin, supplier-audit posture.',
  },
  {
    key: 'MANUFACTURING',
    label: 'Manufacturing standards',
    detail:
      'GFSI-benchmarked certification, audit transparency, recall response posture.',
  },
  {
    key: 'RECALL_HISTORY',
    label: 'Recall history',
    detail:
      'Ten-year FDA CVM record for the manufacturer, severity- and cause-weighted.',
  },
  {
    key: 'FEEDING_OUTCOMES',
    label: 'Feeding-outcome literature',
    detail:
      'Peer-reviewed evidence on the formula or product family — where it exists.',
  },
]

// ── Reference-entry tiles (image-backed) ───────────────────────────────────
// The cornerstone references, surfaced as image-backed entry tiles backed by
// REAL synced ingredient/brand photography. Each routes to existing content and
// carries a mono eyebrow + scrim so the label stays legible on any photo.

const ENTRY_TILES: Array<{
  eyebrow: string
  title: string
  desc: string
  href: string
  manifestKey: string
  imageAlt: string
  flagship?: boolean
}> = [
  {
    eyebrow: 'Brand vs Brand',
    title: 'Orijen vs Acana',
    desc: 'Two lines, one manufacturer. Same rubric, recipe panels in mono.',
    href: '/brands/orijen-vs-acana-comparison',
    manifestKey: 'petfood-com:category-brands',
    imageAlt: 'Premium pet food bags on a retail shelf',
    flagship: true,
  },
  {
    eyebrow: 'Ingredient Risk',
    title: 'Grain-Free & DCM',
    desc: 'What the FDA CVM record actually says. Association, not causation.',
    href: '/ingredients/grain-free-dcm-risk',
    manifestKey: 'petfood-com:category-ingredients',
    imageAlt: 'Single-ingredient protein and vegetable sources',
  },
  {
    eyebrow: 'COMPARE',
    title: 'Brand Comparisons',
    desc: 'Head-to-head evaluations on one binding rubric, fully cited.',
    href: '/compare',
    manifestKey: 'petfood-com:compare-hero',
    imageAlt: 'Contrasting ingredients arranged for comparison',
  },
  {
    eyebrow: 'SPECIES',
    title: 'Cat vs Dog Nutrition',
    desc: 'Obligate carnivore vs omnivore — what the label has to commit to.',
    href: '/species',
    manifestKey: 'petfood-com:category-species',
    imageAlt: 'Raw protein cuts arranged on a board',
  },
]

const TRUST_CLAIMS: Array<{ glyph: string; text: string }> = [
  { glyph: '✓', text: 'Independent — no paid scores' },
  { glyph: '✓', text: 'AAFCO-anchored methodology' },
  { glyph: '✓', text: 'Recall-tracked from FDA CVM' },
  { glyph: '✓', text: 'WSAVA-aligned' },
]

// Strip StockImage's outer margins (it renders my-8 on both the <figure> and
// the pending-sync placeholder <div>) so a photo fills a tile edge-to-edge.
const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'
const FILL_TILE = `${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto] [&_figure>div]:h-full`

export default function HomePage() {
  const year = new Date().getFullYear()

  return (
    <>
      <SchemaScript schema={homeSchema} />

      {/* ── HERO: full-bleed IMAGE-FIRST masthead ───────────────────────────
          Image-led, mobile-first per the ratified Dog.com pattern. A REAL
          ingredient photo (petfood-com:hero, raw ingredients) is the first +
          dominant element after the nav on every breakpoint, with the H1 + one
          primary CTA overlaid on a dark gradient scrim so copy stays legible.
          The hero photo carries subtleCredit (attribution present + clickable,
          QC §1 / Unsplash TOS). */}
      <section className="relative bg-brand-dark">
        {/* Full-bleed hero photo — fills this absolute, full-height wrapper. */}
        <div className={`absolute inset-0 ${FILL_TILE}`}>
          <StockImage
            manifestKey="petfood-com:hero"
            alt="Raw ingredients arranged for an independent pet-food comparison"
            aspect="16:9"
            variant="inline"
            priority
            subtleCredit
          />
        </div>

        {/* Dark gradient scrim — bottom-up so the overlaid copy stays legible. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30"
        />
        {/* Moss wash for depth (brand-primary, no new color). */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 25% 80%, rgba(63,92,58,0.55) 0%, transparent 60%)',
          }}
        />

        {/* Overlaid copy + primary action — pinned to the bottom of the photo. */}
        <div className="relative z-10 flex flex-col justify-end min-h-[60vh] sm:min-h-[68vh] lg:min-h-[76vh] px-6 md:px-10 pt-20 pb-9 sm:pb-12 max-w-container mx-auto w-full">
          <p className="font-mono text-2xs uppercase tracking-eyebrow text-brand-primary-light mb-4">
            PETFOOD.COM · INDEPENDENT REFERENCE · EST. 2026
          </p>
          <h1
            className="font-display font-medium text-white tracking-tight leading-[1.02] mb-4 max-w-content-wide"
            style={{
              fontSize: 'clamp(36px, 6vw, 76px)',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            The independent reference for pet food.
          </h1>
          <p
            className="text-base sm:text-lg font-light text-white/85 leading-relaxed max-w-content mb-7"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
          >
            Not a store, not a brand mouthpiece. PetFood.com scores commercial
            foods on AAFCO completeness, ingredient sourcing, manufacturing,
            recall history, and feeding-outcome literature &mdash; one published,
            versioned rubric, answering one question with citations:{' '}
            <em>is this food good, and compared to what?</em>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guides/methodology"
              className="inline-flex items-center gap-2 bg-brand-primary text-brand-white font-semibold text-sm px-6 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200 shadow-[0_6px_24px_rgba(63,92,58,0.45)]"
            >
              The scoring methodology
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/guides/reading-pet-food-labels"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-sm px-6 py-3.5 rounded no-underline hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
            >
              Read the label
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/tools/food-cost-calculator"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-sm px-6 py-3.5 rounded no-underline hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
            >
              Cost calculator
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (dark masthead) ─────────────────────────────────── */}
      <section className="bg-brand-dark text-brand-white py-6 border-t border-white/10">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 items-center justify-center md:justify-between font-mono text-xs text-white/85">
            {TRUST_CLAIMS.map((claim) => (
              <li key={claim.text} className="flex items-center gap-2">
                <span className="text-brand-primary-light text-base leading-none" aria-hidden>
                  {claim.glyph}
                </span>
                <span className="uppercase tracking-wider">{claim.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── REFERENCE ENTRY TILES — image-backed cornerstone routes ────────
          Image-backed entry points to the cornerstone references, each backed
          by REAL synced ingredient/brand photography with a bottom-up scrim so
          the mono eyebrow + title stay legible. Mirrors the Dog.com owner-path
          tile band, re-skinned to PetFood tokens. subtleCredit on every tile. */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 70% 30%, rgba(63,92,58,0.4) 0%, transparent 55%)',
          }}
        />
        <div className="relative z-10 max-w-container mx-auto px-6 md:px-10 pt-12 pb-16">
          <p className="font-mono text-2xs uppercase tracking-eyebrow text-brand-primary-light mb-5">
            START HERE · CORNERSTONE REFERENCES
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {ENTRY_TILES.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className={[
                  'group relative block rounded-xl overflow-hidden no-underline transition-all duration-200 ring-1',
                  tile.flagship
                    ? 'ring-brand-primary/60 hover:ring-brand-primary'
                    : 'ring-white/10 hover:ring-white/30',
                ].join(' ')}
              >
                {/* Background image fills the tile. */}
                <div className={`absolute inset-0 ${FILL_TILE}`}>
                  <StockImage
                    manifestKey={tile.manifestKey}
                    alt={tile.imageAlt}
                    aspect="3:4"
                    variant="inline"
                    subtleCredit
                  />
                </div>
                {/* Bottom-up scrim — keeps the label legible over any photo. */}
                <div
                  aria-hidden="true"
                  className={[
                    'absolute inset-0 bg-gradient-to-t to-transparent',
                    tile.flagship
                      ? 'from-brand-primary-dark/90 via-black/45'
                      : 'from-black/85 via-black/30',
                  ].join(' ')}
                />
                {/* Label content. */}
                <div className="relative z-10 flex flex-col justify-end min-h-[190px] sm:min-h-[220px] p-4">
                  <p className="font-mono text-2xs uppercase tracking-wider text-brand-primary-light font-semibold mb-1.5">
                    [{tile.eyebrow}]
                  </p>
                  <h2 className="font-display font-semibold text-white text-lg sm:text-xl leading-tight mb-1.5">
                    {tile.title}
                  </h2>
                  <p className="hidden sm:block text-xs text-white/70 leading-relaxed mb-2">
                    {tile.desc}
                  </p>
                  <span className="inline-flex items-center font-mono text-2xs uppercase tracking-wider text-white group-hover:gap-1 transition-all">
                    Open reference&nbsp;&rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE TOOL — compare two foods' real cost (premium gate 3) ──── */}
      <section className="bg-brand-white py-16 border-b border-brand-border">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <p className="font-mono text-2xs uppercase tracking-eyebrow text-brand-primary-dark mb-3">
            TRY IT · COST CALCULATOR
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-brand-text-dark leading-tight mb-3">
            What does that food actually cost per day?
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-8 max-w-2xl">
            Bag price is not cost. Enter two foods and their feeding amounts to compare the
            real cost per day, month, and year — the same calculator the buyer&apos;s guide uses.
          </p>
          <FoodCostCalculator />
        </div>
      </section>

      {/* ── TOOLS & CALCULATORS ──────────────────────────────────────── */}
      {/*
       * Three polished tool cards + a /tools hub link.
       * Dog.com "Tools & Calculators" pattern adapted to PetFood.com tokens:
       *   - dark bg (brand-dark) matches the trust bar above for visual weight
       *   - mono eyebrow labels ("Calculator / Finance", etc.) per brand brief
       *   - card hover: border-brand-primary, matching FeaturedCard pattern
       * No images -- data-vis IS the visual (per brand brief, SS Visual strategy).
       * Additive only; existing FoodCostCalculator embed above is preserved.
       */}
      <section className="bg-brand-dark py-20 border-t border-white/10">
        <div className="max-w-container mx-auto px-6 md:px-10">

          {/* section header */}
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="font-mono text-2xs uppercase tracking-eyebrow text-brand-primary-light mb-3">
                TOOLS &amp; CALCULATORS
              </p>
              <h2
                className="font-display font-bold text-white tracking-tight leading-tight"
                style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}
              >
                Get a number, not just advice.
              </h2>
              <p className="text-base text-white/55 mt-3 max-w-2xl leading-relaxed">
                Interactive tools built on published veterinary nutrition references -- enter your
                inputs and get a precise, sourced answer for your pet right now.
              </p>
            </div>
            <Link
              href="/tools"
              className="font-mono text-xs uppercase tracking-wider text-brand-primary-light hover:text-brand-primary transition-colors whitespace-nowrap self-end"
            >
              All tools &#x2192;
            </Link>
          </div>

          {/* three tool cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 1 -- Food Cost Calculator */}
            <Link
              href="/tools/food-cost-calculator"
              className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.09] hover:border-brand-primary transition-all duration-200"
            >
              <p className="font-mono text-2xs uppercase tracking-wider text-brand-primary-light font-semibold mb-4">
                Calculator &middot; Finance
              </p>
              <h3 className="font-display font-bold text-white text-xl leading-tight mb-3">
                Pet Food Cost Calculator
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                Enter cups-per-day, bag size, and bag price. Returns cost per day, month, and year
                with per-cup unit cost. Side-by-side mode compares two foods on equal terms.
              </p>
              <div className="font-mono text-xs text-brand-primary-light/70 mb-5 space-y-1">
                <div>Input: cups/day &middot; bag size &middot; price</div>
                <div>Output: $/day &middot; $/month &middot; $/year &middot; $/cup</div>
              </div>
              <span className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-brand-primary-light group-hover:text-brand-primary transition-colors">
                Open calculator &#x2192;
              </span>
            </Link>

            {/* Card 2 -- Portion & Calorie Calculator */}
            <Link
              href="/tools/portion-calculator"
              className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.09] hover:border-brand-primary transition-all duration-200"
            >
              <p className="font-mono text-2xs uppercase tracking-wider text-brand-primary-light font-semibold mb-4">
                Calculator &middot; Nutrition
              </p>
              <h3 className="font-display font-bold text-white text-xl leading-tight mb-3">
                Portion &amp; Calorie Calculator
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                Daily caloric needs for dogs and cats via standard RER/MER equations
                (WSAVA/AAHA-style). Enter weight and life stage; get kcal/day and optional
                cups/day from the food label.
              </p>
              <div className="font-mono text-xs text-brand-primary-light/70 mb-5 space-y-1">
                <div>Input: weight &middot; species &middot; life stage</div>
                <div>Output: RER &middot; MER kcal/day &middot; cups/day</div>
              </div>
              <span className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-brand-primary-light group-hover:text-brand-primary transition-colors">
                Open calculator &#x2192;
              </span>
            </Link>

            {/* Card 3 -- Glossary */}
            <Link
              href="/glossary"
              className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.09] hover:border-brand-primary transition-all duration-200"
            >
              <p className="font-mono text-2xs uppercase tracking-wider text-brand-primary-light font-semibold mb-4">
                Reference &middot; Label Decoder
              </p>
              <h3 className="font-display font-bold text-white text-xl leading-tight mb-3">
                Pet Food Glossary
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                Plain-English definitions for label and nutrition terms -- AAFCO, guaranteed
                analysis, dry-matter basis, meat meal vs by-product, feeding trials, and more --
                each with sourced context.
              </p>
              <div className="font-mono text-xs text-brand-primary-light/70 mb-5 space-y-1">
                <div>Covers: label regulation &middot; life stage &middot; ingredients</div>
                <div>Format: alphabetised by category</div>
              </div>
              <span className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-brand-primary-light group-hover:text-brand-primary transition-colors">
                Browse glossary &#x2192;
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ── METHODOLOGY CALLOUT — now image-anchored ──────────────────────
          The five scoring dimensions, paired with a REAL prescription-diet
          image so the section reads as a magazine spread rather than a bare
          table. Image carries subtleCredit + scrim. */}
      <section className="bg-brand-surface py-20">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className="font-mono text-2xs uppercase tracking-eyebrow text-brand-primary-dark mb-3">
                METHODOLOGY · v1.0
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-brand-text-dark leading-tight mb-5">
                The scoring dimensions
              </h2>
              <p className="text-base text-brand-text-mid leading-relaxed mb-6">
                Every brand and formula reviewed on this site runs through the same five
                dimensions. The rubric is binding: any score that contradicts what is
                published on the methodology page is a defect worth reporting.
              </p>
              {/* Real prescription-diet image — anchors the methodology, no human subject. */}
              <Link
                href="/conditions"
                className={`group relative block rounded-lg overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200 mb-6 min-h-[180px] ${FILL_TILE}`}
              >
                <div className={`absolute inset-0 ${FILL_TILE}`}>
                  <StockImage
                    manifestKey="petfood-com:category-conditions"
                    alt="A prescription veterinary diet bag photographed in clinical light"
                    aspect="4:3"
                    variant="inline"
                    subtleCredit
                  />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="relative z-10 flex flex-col justify-end h-full min-h-[180px] p-5">
                  <p className="font-mono text-2xs uppercase tracking-wider text-brand-primary-light font-semibold mb-1.5">
                    [Therapeutic]
                  </p>
                  <div className="font-display font-semibold text-white text-lg leading-tight">
                    Prescription &amp; condition-specific diets
                  </div>
                </div>
              </Link>
              <Link
                href="/guides/methodology"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-primary-dark hover:text-brand-primary transition-colors"
              >
                Read the full rubric
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="md:col-span-8">
              <div className="bg-brand-white border border-brand-border rounded-lg overflow-hidden">
                <div className="bg-brand-primary-pale border-b border-brand-border px-6 py-3 flex items-center justify-between">
                  <span className="font-mono text-2xs uppercase tracking-wider text-brand-primary-dark font-semibold">
                    SCORING DIMENSIONS · 5
                  </span>
                  <span className="font-mono text-2xs text-brand-text-light">
                    weighted → /10
                  </span>
                </div>
                <ol className="divide-y divide-brand-border">
                  {DIMENSIONS.map((dim, i) => (
                    <li
                      key={dim.key}
                      className="px-6 py-5 grid grid-cols-[auto_1fr] gap-4 items-start"
                    >
                      <span className="font-mono text-xs font-semibold text-brand-text-light tabular-nums mt-0.5">
                        0{i + 1}
                      </span>
                      <div>
                        <div className="flex items-baseline gap-3 flex-wrap mb-1.5">
                          <span className="font-mono text-sm font-semibold text-brand-text-dark uppercase tracking-wider">
                            {dim.label}
                          </span>
                        </div>
                        <p className="text-sm text-brand-text-mid leading-relaxed">
                          {dim.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUTRITION & INGREDIENTS — image-led editorial band ─────────────
          Two image-backed deep-reference panels (nutrition + ingredients),
          backed by REAL synced photography, with a scrim + mono eyebrow. */}
      <section className="bg-brand-white py-20 border-t border-brand-border">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="font-mono text-2xs uppercase tracking-eyebrow text-brand-primary-dark mb-3">
                NUTRITION &amp; INGREDIENTS
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-brand-text-dark leading-tight">
                What is actually in the bag?
              </h2>
              <p className="text-base text-brand-text-mid mt-3 max-w-2xl leading-relaxed">
                Macronutrient profiles, single-ingredient references, and the guaranteed-analysis
                math — on a dry-matter basis, the way the label does not show you.
              </p>
            </div>
            <Link
              href="/nutrition"
              className="font-mono text-xs uppercase tracking-wider text-brand-primary-dark hover:text-brand-primary transition-colors whitespace-nowrap self-end"
            >
              All nutrition &#x2192;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Nutrition panel */}
            <Link
              href="/nutrition"
              className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary hover:shadow-card transition-all duration-200 min-h-[260px] ${FILL_TILE}`}
            >
              <div className={`absolute inset-0 ${FILL_TILE}`}>
                <StockImage
                  manifestKey="petfood-com:nutrition-hero"
                  alt="Bowls of grains, legumes, and seeds on a neutral background"
                  aspect="4:3"
                  variant="inline"
                  subtleCredit
                />
              </div>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full min-h-[260px] p-6">
                <p className="font-mono text-2xs uppercase tracking-wider text-brand-primary-light font-semibold mb-1.5">
                  [Macronutrients]
                </p>
                <div className="font-display font-semibold text-white text-2xl leading-tight mb-1.5">
                  Nutrition reference
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Protein, fat, carbohydrate, and fiber — what the guaranteed analysis commits to,
                  and what it leaves out.
                </p>
              </div>
            </Link>

            {/* Ingredients panel */}
            <Link
              href="/ingredients"
              className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary hover:shadow-card transition-all duration-200 min-h-[260px] ${FILL_TILE}`}
            >
              <div className={`absolute inset-0 ${FILL_TILE}`}>
                <StockImage
                  manifestKey="petfood-com:category-ingredients"
                  alt="Single-ingredient protein and vegetable sources"
                  aspect="4:3"
                  variant="inline"
                  subtleCredit
                />
              </div>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full min-h-[260px] p-6">
                <p className="font-mono text-2xs uppercase tracking-wider text-brand-primary-light font-semibold mb-1.5">
                  [Ingredient Risk]
                </p>
                <div className="font-display font-semibold text-white text-2xl leading-tight mb-1.5">
                  Ingredient reference
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Protein sources, legumes and the DCM record, preservatives, ingredient-splitting —
                  the evidence, not the marketing.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIVIDER LABEL ─────────────────────────────────────────────── */}
      <section className="bg-brand-surface border-t border-brand-border">
        <div className="max-w-container mx-auto px-6 md:px-10 py-5 flex items-center justify-between flex-wrap gap-3">
          <p className="font-mono text-2xs uppercase tracking-wider text-brand-text-light">
            REGULATORY REFERENCES · 03
          </p>
          <p className="font-mono text-2xs uppercase tracking-wider text-brand-text-light">
            AAFCO · LABELS · LIFE STAGE
          </p>
        </div>
      </section>

      {/* ── REGULATORY GUIDE GRID (text cards — data-vis density) ─────────
          The methodology / label / life-stage cornerstones as premium text
          cards. No image slots here — the regulatory references read as
          reference data, and the section above carries the photography. */}
      <section className="bg-brand-surface pb-24 pt-12">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            <GuideCard
              eyebrow="REGULATORY"
              title="AAFCO Completeness Explained"
              desc='"Formulated to meet" vs "feeding trials confirm" — which statement appears on which bag, why it matters, and how it weights into the score.'
              href="/guides/aafco-completeness-explained"
              meta="Methodology reference"
            />
            <GuideCard
              eyebrow="CONSUMER"
              title="Reading a Pet Food Label"
              desc="The five label panels — product-name rules, guaranteed analysis, ingredient list, AAFCO statement, feeding directions. Decode the bag in your kitchen."
              href="/guides/reading-pet-food-labels"
              meta="Cornerstone guide · 14-min read"
            />
            <GuideCard
              eyebrow="LIFE STAGE"
              title="Pet Food by Life Stage"
              desc="Seven deep-dives against AAFCO 2025 Chapter 6 nutrient profiles — puppy, kitten, adult, senior, and large-breed puppy, and what each label commits to."
              href="/life-stage"
              meta="Reference hub · 7 pages"
            />
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ─────────────────────────────────────────────── */}
      {process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED === 'true' && (
      <section className="bg-brand-surface py-20 border-t border-brand-border">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="max-w-content mx-auto">
            <EmailCapture
              variant="section"
              siteId="petfood-com"
              source="homepage"
              title="The Label Decoder"
              subtitle="Eight-email reference series that walks through the five panels on a commercial pet food bag — product-name rules, guaranteed analysis on a dry-matter basis, AAFCO statements, feeding directions, and what each one is silent about. One email per panel. Sent on a fixed cadence. No upsells."
              ctaText="Send me the series"
              perks={[
                '✓ One bag, eight emails',
                '✓ Dry-matter math worked out',
                '✓ Unsubscribe anytime',
              ]}
            />
          </div>
        </div>
      </section>
      )}

      {/* ── FTC / EDITORIAL DISCLOSURE ────────────────────────────────── */}
      <section className="bg-brand-white border-t border-brand-border py-10">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="max-w-content-wide mx-auto">
            <div className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-6 items-start">
              <p className="font-mono text-2xs uppercase tracking-wider text-brand-primary-dark font-semibold whitespace-nowrap">
                EDITORIAL DISCLOSURE
              </p>
              <div className="space-y-3 text-xs text-brand-text-mid leading-relaxed">
                <p>
                  PetFood.com is an independent reference. Scores are produced solely by
                  the published rubric applied to publicly available product data —
                  ingredient panels, AAFCO nutritional-adequacy statements, and
                  manufacturer disclosures. No manufacturer pays for, previews, or
                  influences a score, and we do not accept payment or product in exchange
                  for a favorable rating.
                </p>
                <p>
                  Where retailer affiliate links appear (e.g., Chewy, Amazon), they are
                  flagged on the page and earn a commission on purchases. Affiliate
                  relationships have no input into scoring — the rubric is identical
                  whether or not an affiliate link is present. This site is reference
                  material; therapeutic diets, allergies, and breed-specific risks
                  require a veterinarian.
                </p>
                <p className="font-mono text-2xs uppercase tracking-wider text-brand-text-light pt-1">
                  © {year} PETFOOD.COM · METHODOLOGY v1.0 · LAST REVIEWED MAY 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ── GuideCard ───────────────────────────────────────────────────────────────
// Regulatory-reference text card. Mono eyebrow + meta line keep the data-vis
// signal; hover border matches the FeaturedCard pattern.

function GuideCard({
  eyebrow,
  title,
  desc,
  href,
  meta,
}: {
  eyebrow: string
  title: string
  desc: string
  href: string
  meta: string
}) {
  return (
    <Link
      href={href}
      className="group block bg-brand-white border border-brand-border rounded-lg p-7 transition-all duration-200 hover:border-brand-primary hover:shadow-card no-underline"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-2xs uppercase tracking-wider font-semibold text-brand-text-light">
          [{eyebrow}]
        </span>
        <span className="font-mono text-2xs text-brand-text-light">{meta}</span>
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-brand-text-dark mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-sm md:text-base text-brand-text-mid leading-relaxed mb-6">
        {desc}
      </p>
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-primary-dark group-hover:text-brand-primary transition-colors">
        Open reference
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  )
}
