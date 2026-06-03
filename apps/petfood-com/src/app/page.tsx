/**
 * PetFood.com — homepage.
 *
 * Establishes positioning ("Consumer Reports of pet food"), routes to the
 * five cornerstone references, captures email against the label-decoder
 * lead magnet, and reinforces the independence claim in the masthead and
 * FTC disclosure.
 *
 * Voice: skeptical, evidence-based, technical, transparent, comparative.
 *
 * Visual strategy (per COO photo-sourcing playbook, ops/handoffs/
 * 2026-05-29-photo-sourcing-playbook.md):
 * - Brand mood is "clean, food-magazine, evaluative not promotional"
 *   (Bon Appétit restaurant-review aesthetic).
 * - PHOTOS BANNED: smiling-pet-with-bowl cliché, brand marketing scenes,
 *   manufacturer hero shots (those go on /brands/* pages with attribution,
 *   NOT on evaluative comparison pages — editorial separation is the
 *   moat).
 * - PHOTOS WANTED: ingredient-forward (raw protein/grain/vegetable
 *   close-ups, white/wood backgrounds), lab/scientific-transparency
 *   imagery. Sources: Unsplash for ingredient close-ups (verify each ID
 *   before commit), Wikimedia Commons for rarer ingredients (Quinoa,
 *   Kelp, Cranberry), manufacturer-supplied for brand pages only.
 * - NONE of those source-appropriate IDs exist yet in the verified
 *   CarloOS Unsplash catalog. Rather than add reused dog/horse photos
 *   that would actively undermine the brand brief, the homepage stays
 *   CSS-only until Carlo's next photo-sourcing pass populates the
 *   ingredient library. Same posture as Vets.co before its illustration
 *   sprint lands.
 * - Score chips and ingredient/dimension labels continue to render in
 *   JetBrains Mono per brand brief — data-vis IS the visual.
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
  title: 'The independent reference for pet food.',
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

// ── Featured references ────────────────────────────────────────────────────
// The four cornerstone pages exposed on the homepage grid. First card is the
// flagship brand-vs-brand comparison; the rest route into the methodology
// and ingredient references.

interface ReferenceCard {
  kind: 'comparison' | 'ingredient' | 'guide'
  eyebrow: string
  title: string
  description: string
  href: string
  meta: string
}

const FEATURED: ReferenceCard[] = [
  {
    kind: 'comparison',
    eyebrow: 'BRAND_VS_BRAND',
    title: 'Orijen vs Acana',
    description:
      'Two product lines from one manufacturer (Champion Petfoods). PetFood.com compares animal-ingredient inclusion, AAFCO posture, recall record, and price per kcal — recipe panels in monospace, no marketing copy.',
    href: '/brands/orijen-vs-acana-comparison',
    meta: 'Comparison · same rubric · cited',
  },
  {
    kind: 'ingredient',
    eyebrow: 'INGREDIENT_RISK',
    title: 'Grain-Free and DCM — The FDA Record',
    description:
      'What the 2018–2022 FDA CVM investigation actually said about grain-free, legume-heavy diets and dilated cardiomyopathy. Association, not causation. An independent summary of the data and the open questions.',
    href: '/ingredients/grain-free-dcm-risk',
    meta: 'Ingredient reference · FDA-sourced',
  },
  {
    kind: 'guide',
    eyebrow: 'REGULATORY',
    title: 'AAFCO Completeness Explained',
    description:
      'The difference between "formulated to meet" and "feeding trials confirm." Which statement appears on which bag, why it matters, and how it weights into the PetFood.com score.',
    href: '/guides/aafco-completeness-explained',
    meta: 'Methodology reference',
  },
  {
    kind: 'guide',
    eyebrow: 'CONSUMER',
    title: 'Reading a Pet Food Label',
    description:
      'The five label panels — product name rules, guaranteed analysis, ingredient list, AAFCO statement, feeding directions. Eight emails decode the bag in your kitchen.',
    href: '/guides/reading-pet-food-labels',
    meta: 'Cornerstone guide · 14-min read',
  },
  {
    kind: 'guide',
    eyebrow: 'LIFE_STAGE',
    title: 'Pet Food by Life Stage',
    description:
      'Seven deep-dives against AAFCO 2025 Chapter 6 nutrient profiles — puppy, kitten, adult dog, adult cat, senior dog, senior cat, and large-breed puppy. The senior gap, the large-breed calcium ceiling, and what each label statement commits the manufacturer to.',
    href: '/life-stage',
    meta: 'Reference hub · 7 pages',
  },
]

const TRUST_CLAIMS: Array<{ glyph: string; text: string }> = [
  { glyph: '✓', text: 'Independent — no paid scores' },
  { glyph: '✓', text: 'AAFCO-anchored methodology' },
  { glyph: '✓', text: 'Recall-tracked from FDA CVM' },
  { glyph: '✓', text: 'WSAVA-aligned' },
]

export default function HomePage() {
  const year = new Date().getFullYear()

  return (
    <>
      <SchemaScript schema={homeSchema} />
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="max-w-content-wide">
            <p className="font-mono text-2xs uppercase tracking-eyebrow text-brand-primary-dark mb-5">
              PETFOOD.COM · INDEPENDENT REFERENCE · EST. 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-brand-text-dark leading-none mb-6">
              PetFood.com
            </h1>
            <p className="font-display text-2xl md:text-3xl text-brand-primary-dark italic leading-snug mb-7 max-w-content">
              The independent reference for pet food.
            </p>
            <p className="text-lg text-brand-text-mid max-w-content leading-relaxed mb-10">
              Not a store, not a brand mouthpiece — PetFood.com scores commercial pet foods on
              AAFCO completeness, ingredient sourcing, manufacturing standards, recall
              history, and feeding-outcome literature. The rubric is published, versioned,
              and re-run whenever it changes. Where Dog Food Advisor is advertorial-heavy
              and Chewy and Petco exist to move inventory, PetFood.com exists to answer one
              question with citations: <em>is this food good, and compared to what?</em>
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides/methodology"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-primary text-brand-white text-sm font-semibold rounded hover:bg-brand-primary-dark transition-colors"
              >
                The scoring methodology
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/guides/reading-pet-food-labels"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-white text-brand-text-dark text-sm font-semibold rounded border border-brand-border hover:border-brand-primary transition-colors"
              >
                Read the label
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/tools/food-cost-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-white text-brand-text-dark text-sm font-semibold rounded border border-brand-border hover:border-brand-primary transition-colors"
              >
                Cost calculator
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO PHOTO — ingredient-forward, manifest-managed ─────────── */}
      <div className="bg-brand-surface">
        <div className="max-w-container mx-auto px-6 md:px-10 pb-16">
          <StockImage manifestKey="petfood-com:hero" priority aspect="16:9" variant="wide" />
        </div>
      </div>

      {/* ── TRUST BAR (dark masthead) ─────────────────────────────────── */}
      <section className="bg-brand-dark text-brand-white py-6">
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

      {/* ── METHODOLOGY CALLOUT ───────────────────────────────────────── */}
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
                          <span className="font-mono text-2xs text-brand-text-light">
                            [{dim.key}]
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

      {/* ── DIVIDER LABEL ─────────────────────────────────────────────── */}
      <section className="bg-brand-white border-t border-brand-border">
        <div className="max-w-container mx-auto px-6 md:px-10 py-5 flex items-center justify-between flex-wrap gap-3">
          <p className="font-mono text-2xs uppercase tracking-wider text-brand-text-light">
            FEATURED REFERENCES · 05
          </p>
          <p className="font-mono text-2xs uppercase tracking-wider text-brand-text-light">
            BRANDS · INGREDIENTS · REGULATION · LABELS
          </p>
        </div>
      </section>

      {/* ── FEATURED COMPARISON / REFERENCE GRID ──────────────────────── */}
      <section className="bg-brand-white pt-12 pb-24">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED.map((card, i) => (
              <FeaturedCard key={card.href} card={card} isFlagship={i === 0} />
            ))}
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

// ── FeaturedCard ──────────────────────────────────────────────────────────
// Reference-grid card. The flagship card spans both columns on desktop and
// uses a slightly heavier eyebrow treatment to differentiate "brand-vs-brand"
// from the methodology and ingredient cards.

function FeaturedCard({
  card,
  isFlagship,
}: {
  card: ReferenceCard
  isFlagship?: boolean
}) {
  return (
    <Link
      href={card.href}
      className={[
        'group block bg-brand-white border border-brand-border rounded-lg p-7 md:p-8',
        'transition-all duration-200 hover:border-brand-primary hover:shadow-card',
        isFlagship ? 'md:col-span-2 md:p-10' : '',
      ].join(' ')}
    >
      <div className="flex items-center justify-between mb-5">
        <span
          className={[
            'font-mono text-2xs uppercase tracking-wider font-semibold',
            isFlagship ? 'text-brand-primary-dark' : 'text-brand-text-light',
          ].join(' ')}
        >
          [{card.eyebrow}]
        </span>
        <span className="font-mono text-2xs text-brand-text-light">
          {card.meta}
        </span>
      </div>
      <h3
        className={[
          'font-display tracking-tight text-brand-text-dark mb-4 leading-tight',
          isFlagship ? 'text-4xl md:text-5xl font-medium' : 'text-2xl md:text-3xl font-medium',
        ].join(' ')}
      >
        {card.title}
      </h3>
      <p
        className={[
          'text-brand-text-mid leading-relaxed mb-6',
          isFlagship ? 'text-base md:text-lg max-w-content' : 'text-sm md:text-base',
        ].join(' ')}
      >
        {card.description}
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
