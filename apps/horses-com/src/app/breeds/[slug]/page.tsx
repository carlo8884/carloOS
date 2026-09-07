/**
 * Horses.com — Programmatic breed-profile template.
 *
 * One template; ~49 breed pages (50 total, minus the hand-written Quarter
 * Horse canonical). Pulls structured data from src/data/breeds.ts.
 *
 * Mirrors the dog-com programmatic pattern from PR #74 — but tuned for
 * the horse domain (shoeing schedule, paddock needs, group dynamics,
 * vet/farrier rhythms, etc.).
 *
 * generateStaticParams EXCLUDES any slug listed in EXISTING_STATIC_BREED_SLUGS
 * (currently just 'quarter-horse'). Next.js routing prioritizes static folders
 * over dynamic segments, but we exclude here to avoid duplicate-route warnings.
 *
 * Renders ~700-900 words per breed:
 *   - Breadcrumb + hero
 *   - TL;DR (~80-100 words)
 *   - At-a-glance table (tabular, mono numerals)
 *   - Origin + purpose
 *   - Temperament + disciplines
 *   - Care + management notes (horse-specific: shoeing, paddock, group)
 *   - Health concerns (linked to /health/* pages)
 *   - Recommended genetic test panel (when populated)
 *   - First-time-owner consideration (explicit YES/NO)
 *   - Find a vet / equine specialty care (cross-link to Vets.co)
 *   - Related Horses.com pages (auto-linked from knownHealthCrossLinks)
 *   - FAQ block (3-4 breed-specific Qs) with FAQPage JSON-LD
 *   - Article + FAQPage + BreadcrumbList schemas
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure,
  EmailCapture,
  RelatedLinks,
  ShopCtas,
} from '@carloOS/ui'
import {
  Breeds,
  EXISTING_STATIC_BREED_SLUGS,
  getBreedBySlug,
  type Breed,
} from '../../../data/breeds'
import { getBreedHealthBySlug } from '../../../data/breed-health'

// Force static rendering — every breed slug we generate is known at build time.
export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Breeds.filter((b) => !EXISTING_STATIC_BREED_SLUGS.has(b.slug)).map(
    (b) => ({ slug: b.slug }),
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const breed = getBreedBySlug(slug)
  if (!breed) {
    return buildMetadata({
      siteId: 'horses-com',
      title: 'Breed Not Found',
      description: 'This horse breed profile does not exist.',
      path: `/breeds/${slug}`,
    })
  }

  // Title ≤ 70 chars including suffix " | Horses.com" (13 chars).
  // Keep core title ≤ 57 chars.
  const titleCore = `${breed.name} — Breed Guide, Health, Disciplines`
  const title = titleCore.length > 57 ? `${breed.name} — Breed Guide & Disciplines` : titleCore

  // Description ≤ 160 chars.
  const typeStr = breed.type.toLowerCase()
  const energyStr = breed.energyLevel.toLowerCase()
  const lifespanStr = `${breed.lifespanYears[0]}-${breed.lifespanYears[1]} yr`
  const description =
    `${breed.name} breed guide: ${typeStr}-type horse, ${lifespanStr} lifespan, ${energyStr} energy. ` +
    `Health, temperament, disciplines, care.`

  return buildMetadata({
    siteId: 'horses-com',
    title,
    description: description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/breeds/${breed.slug}`,
    type: 'article',
  })
}

function formatHandRange(range: [number, number]): string {
  if (range[0] === range[1]) return `${range[0]} hh`
  return `${range[0]}–${range[1]} hh`
}

function formatRange(range: [number, number], unit: string): string {
  if (range[0] === range[1]) return `${range[0]} ${unit}`
  return `${range[0]}–${range[1]} ${unit}`
}

function formatPriceRange(range?: [number, number]): string {
  if (!range) return '—'
  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`
  return `${fmt(range[0])}–${fmt(range[1])}`
}

function yesNo(b: boolean): string {
  return b ? 'Yes' : 'Not typically'
}

/**
 * Cross-link a health condition to a related /health/* or /supplements/*
 * guide on Horses.com when one of the breed's knownHealthCrossLinks matches.
 * Returns href if a fit is found, otherwise undefined.
 */
function pickHealthLink(condition: string, links: string[]): string | undefined {
  const lc = condition.toLowerCase()
  for (const link of links) {
    const linkSlug = link.replace(/^\/(health|supplements|guides|reviews)\//, '').replace(/-/g, ' ')
    if (lc.includes(linkSlug) || linkSlug.includes(lc.split(' ')[0])) return link
  }
  // Heuristic fallbacks for common equine conditions.
  if (lc.includes('ulcer') || lc.includes('egus') || lc.includes('gastric'))
    return links.find((l) => l.includes('ulcer'))
  if (lc.includes('joint') || lc.includes('arthritis') || lc.includes('navicular')
    || lc.includes('ocd') || lc.includes('suspensory') || lc.includes('spavin')
    || lc.includes('desmitis') || lc.includes('pssm') || lc.includes('hyperflexion')
    || lc.includes('lameness'))
    return links.find((l) => l.includes('joint') || l.includes('supplements'))
  return undefined
}

function buildFAQs(breed: Breed): Array<{ question: string; answer: string }> {
  const lifespanStr = `${breed.lifespanYears[0]}-${breed.lifespanYears[1]} years`
  const heightStr = formatHandRange(breed.heightRangeHh)
  const weightStr = `${breed.weightRangeLb[0]}-${breed.weightRangeLb[1]} lb`
  const energyWord = breed.energyLevel.toLowerCase()

  const faqs: Array<{ question: string; answer: string }> = [
    {
      question: `How tall is a ${breed.name}?`,
      answer:
        `Adult ${breed.name}s typically stand ${heightStr} and weigh ${weightStr}. ` +
        `The breed is categorized as ${breed.sizeCategory} on most registry standards.`,
    },
    {
      question: `How long do ${breed.name}s live?`,
      answer:
        `Average ${breed.name} life expectancy is ${lifespanStr} with good management. ` +
        `Lifespan is shortened by chronic laminitis, undiagnosed PPID/Cushing\'s, and any of the breed-specific conditions documented on this page.`,
    },
    {
      question: `Is the ${breed.name} a good first horse?`,
      answer: breed.firstTimeOwnerFriendly
        ? `Generally yes — the ${breed.name} is among the more forgiving breeds for a first-time owner who has a knowledgeable trainer and a competent farrier. ` +
          `Plan for ${energyWord} daily handling and verify temperament with a vet pre-purchase exam.`
        : `Not typically. The ${breed.name} is better suited to an owner with prior experience or with daily access to a credentialed trainer. ` +
          `The breed\'s ${energyWord} energy level and discipline-specific demands tend to overwhelm new owners.`,
    },
    {
      question: `What disciplines is the ${breed.name} used for?`,
      answer:
        `${breed.name}s are commonly seen in: ${breed.disciplines.join(', ')}. ` +
        `Within the breed, bloodline and training largely determine which discipline an individual horse is suited for.`,
    },
  ]

  if (breed.knownGeneticTests && breed.knownGeneticTests.length > 0) {
    faqs.push({
      question: `What genetic tests should I run on a ${breed.name}?`,
      answer:
        `Standard genetic-test panel for the ${breed.name} includes: ${breed.knownGeneticTests.join(', ')}. ` +
        `The UC Davis Veterinary Genetics Laboratory and similar accredited labs run these as part of pre-purchase or pre-breeding work-ups.`,
    })
  }

  return faqs
}

export default async function BreedTemplatePage({ params }: PageProps) {
  const { slug } = await params
  const breed = getBreedBySlug(slug)
  if (!breed) notFound()

  // Defense in depth — never render here when a hand-written static folder exists.
  if (EXISTING_STATIC_BREED_SLUGS.has(breed.slug)) notFound()

  const faqs = buildFAQs(breed)

  const articleSchema = buildArticleSchema({
    siteId: 'horses-com',
    title: `${breed.name} — Breed Guide`,
    description:
      `Comprehensive ${breed.name} breed profile: temperament, health concerns, disciplines, ` +
      `and care guidance based on AAEP, UC Davis VGL, and breed-club data.`,
    url: `https://horses.com/breeds/${breed.slug}`,
    imageUrl: '',
    authorName: 'Horses.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://horses.com/' },
      { name: 'Breeds', url: 'https://horses.com/breeds' },
      { name: breed.name, url: `https://horses.com/breeds/${breed.slug}` },
    ],
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  // Pre-resolve cross-links for each health concern.
  const conditionEntries = breed.knownHealthConcerns.map((c) => ({
    text: c,
    href: pickHealthLink(c, breed.knownHealthCrossLinks),
  }))

  // At-a-glance rows — tabular, mono numerals where it matters.
  const atGlance: Array<[string, string]> = [
    ['Registry', breed.registry === 'multi-registry' ? 'Multi-registry' : breed.registry === 'crossbreed' ? 'Crossbreed (no single registry)' : breed.registry],
    ['Type', breed.type],
    ['Size category', breed.sizeCategory],
    ['Height', formatHandRange(breed.heightRangeHh)],
    ['Weight', formatRange(breed.weightRangeLb, 'lb')],
    ['Lifespan', formatRange(breed.lifespanYears, 'yr')],
    ['Energy level', breed.energyLevel],
    ['Primary disciplines', breed.disciplines.slice(0, 4).join(', ')],
    ['Typical purchase', formatPriceRange(breed.priceRangeUsd)],
    ['First-time-owner friendly', yesNo(breed.firstTimeOwnerFriendly)],
  ]

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/breeds" className="hover:text-brand-primary no-underline">Breeds</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">{breed.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/15 text-brand-primary">
            {breed.type}
          </span>
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-white/10 text-white/70">
            {breed.sizeCategory.split(' (')[0]}
          </span>
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-white/10 text-white/70">
            {breed.energyLevel} energy
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-none mb-3"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          {breed.name}
        </h1>
        <p className="text-base font-light text-white/65 leading-relaxed max-w-2xl">
          From {breed.originCountry}.{' '}
          Adults typically stand {formatHandRange(breed.heightRangeHh)} and weigh{' '}
          {formatRange(breed.weightRangeLb, 'lb')}, with a lifespan of{' '}
          {formatRange(breed.lifespanYears, 'years')}.
        </p>
      </div>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="carloOS-article min-w-0">
            {breed.slug === 'thoroughbred' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the thoroughbred checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Thoroughbred checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-three-foundation-sire-chart,
                  horse-stall-door-jockey-club-registry-card, and
                  equine-first-owner-thoroughbred-handbook notes that
                  match the Byerley Turk / Darley Arabian / Godolphin
                  Arabian, Jockey Club registry, and first-time-owner
                  copy on this page — a laminated horse three-
                  foundation-sire chart so the Byerley / Darley /
                  Godolphin notes are posted on the stall door (not a
                  thoroughbred-flat-surface hop, not a breeze-up-gallop
                  hop), a horse stall-door Jockey Club registry card so
                  the JC / closed-registry notes are labeled at the
                  barn (not an American-Stud-Book racing hop, not an
                  AQHA-five-panel hop), and an equine first-owner
                  thoroughbred handbook so the NO-typically / very-high-
                  energy grounding is a physical barn book (not a
                  first-owner-quarter handbook, not a Thoroughbred-
                  Makeover hop). Educational barn checklist, not a
                  ranked tack list, not a substitute for a veterinarian.
                  Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Thoroughbred checklist"
                  subtitle="Email the three-foundation-sire chart, Jockey Club registry card, and first-owner handbook notes. No spam."
                  ctaText="Email my thoroughbred checklist"
                  source="breed-thoroughbred-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'arabian' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the arabian checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Arabian checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-scid-lfs-ca-panel-chart,
                  horse-stall-door-bedouin-endurance-card, and
                  equine-first-owner-arabian-handbook notes that
                  match the SCID / LFS / CA panel, Bedouin
                  endurance-mount, and first-time-owner copy on
                  this page — a laminated horse SCID-LFS-CA panel
                  chart so the Shin / Brooks / Brault notes are
                  posted on the stall door (not an AQHA-five-panel
                  hop, not a three-foundation-sire hop), a horse
                  stall-door Bedouin endurance card so the war-
                  mount / stamina notes are labeled at the barn
                  (not a Tevis-100 hop, not a vet-gate-recovery
                  hop), and an equine first-owner arabian handbook
                  so the NO-typically / high-energy grounding is a
                  physical barn book (not a first-owner-thoroughbred
                  handbook, not an AERC limited-distance hop).
                  Educational barn checklist, not a ranked tack
                  list, not a substitute for a veterinarian.
                  Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Arabian checklist"
                  subtitle="Email the SCID-LFS-CA panel chart, Bedouin endurance card, and first-owner handbook notes. No spam."
                  ctaText="Email my arabian checklist"
                  source="breed-arabian-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'andalusian' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the andalusian checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Andalusian checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-carthusian-iberian-chart,
                  horse-stall-door-doma-vaquera-card, and
                  equine-first-owner-andalusian-handbook notes that
                  match the Carthusian / Iberian origin, Doma
                  Vaquera, and first-time-owner copy on this page —
                  a laminated horse Carthusian-Iberian chart so the
                  Pliny / 15th-century-monk notes are posted on the
                  stall door (not a training-pyramid hop, not a
                  three-foundation-sire hop), a horse stall-door
                  Doma Vaquera card so the working-equitation /
                  Spanish-royalty notes are labeled at the barn
                  (not a USDF-level hop, not a Bedouin-endurance
                  hop), and an equine first-owner andalusian
                  handbook so the NO-typically / moderate-energy
                  grounding is a physical barn book (not a
                  first-owner-arabian handbook, not a double-bridle
                  hop). Educational barn checklist, not a ranked
                  tack list, not a substitute for a veterinarian.
                  Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Andalusian checklist"
                  subtitle="Email the Carthusian-Iberian chart, Doma Vaquera card, and first-owner handbook notes. No spam."
                  ctaText="Email my andalusian checklist"
                  source="breed-andalusian-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'lusitano' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the lusitano checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Lusitano checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-1967-studbook-split-chart,
                  horse-stall-door-working-equitation-card, and
                  equine-first-owner-lusitano-handbook notes that
                  match the 1967 Andalusian-split, working
                  equitation / mounted-bullfighting, and
                  first-time-owner copy on this page — a laminated
                  horse 1967-studbook-split chart so the Portuguese
                  / Iberian / 1967 notes are posted on the stall
                  door (not a Carthusian-Iberian hop, not a
                  training-pyramid hop), a horse stall-door working
                  equitation card so the classical-dressage /
                  bullfighting notes are labeled at the barn (not
                  a Doma-Vaquera hop, not a USDF-level hop), and
                  an equine first-owner lusitano handbook so the
                  NO-typically / moderate-energy grounding is a
                  physical barn book (not a first-owner-andalusian
                  handbook, not a double-bridle hop). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Lusitano checklist"
                  subtitle="Email the 1967-studbook-split chart, working-equitation card, and first-owner handbook notes. No spam."
                  ctaText="Email my lusitano checklist"
                  source="breed-lusitano-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'lipizzaner' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the lipizzaner checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Lipizzaner checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-lipica-1580-stud-chart,
                  horse-stall-door-spanish-riding-school-card, and
                  equine-first-owner-lipizzaner-handbook notes that
                  match the Lipica 1580 stud, Spanish Riding School
                  of Vienna, and first-time-owner copy on this page —
                  a laminated horse Lipica-1580-stud chart so the
                  Archduke Charles II / six-foundation-stallion notes
                  are posted on the stall door (not a 1967-studbook-
                  split hop, not a Carthusian-Iberian hop), a horse
                  stall-door Spanish Riding School card so the
                  Vienna / classical-dressage notes are labeled at
                  the barn (not a working-equitation hop, not a
                  USDF-level hop), and an equine first-owner
                  lipizzaner handbook so the NO-typically / late-
                  maturity-age-7 grounding is a physical barn book
                  (not a first-owner-lusitano handbook, not a
                  double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Lipizzaner checklist"
                  subtitle="Email the Lipica-1580-stud chart, Spanish Riding School card, and first-owner handbook notes. No spam."
                  ctaText="Email my lipizzaner checklist"
                  source="breed-lipizzaner-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'friesian' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the friesian checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Friesian checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-b4galt7-dwarfism-panel-chart,
                  horse-stall-door-friesland-driving-card, and
                  equine-first-owner-friesian-handbook notes that
                  match the B4GALT7 dwarfism / B3GALNT2 hydrocephalus
                  panel, Friesland closed-studbook driving, and
                  first-time-owner copy on this page — a laminated
                  horse B4GALT7-dwarfism-panel chart so the Leegwater
                  2016 / Ducro 2015 genetic-test notes are posted on
                  the stall door (not a Lipica-1580-stud hop, not a
                  1967-studbook-split hop), a horse stall-door
                  Friesland driving card so the knight&apos;s-war-horse
                  / late-1800s-closed-studbook / WWII-near-extinct
                  notes are labeled at the barn (not a Spanish-
                  Riding-School hop, not a USDF-level hop), and an
                  equine first-owner friesian handbook so the
                  NO-typically / 16–20-year-lifespan grounding is a
                  physical barn book (not a first-owner-lipizzaner
                  handbook, not a double-bridle hop). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Friesian checklist"
                  subtitle="Email the B4GALT7-dwarfism-panel chart, Friesland driving card, and first-owner handbook notes. No spam."
                  ctaText="Email my friesian checklist"
                  source="breed-friesian-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'mustang' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the mustang checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Mustang checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-blm-1971-wild-act-chart,
                  horse-stall-door-blm-auction-card, and
                  equine-first-owner-mustang-handbook notes that
                  match the 1971 Wild Free-Roaming Horses and Burros
                  Act, BLM auction adoption, and first-time-owner
                  copy on this page — a laminated horse BLM-1971-
                  wild-act chart so the Spanish-conquistador-1500s /
                  Bureau of Land Management notes are posted on the
                  stall door (not a B4GALT7-dwarfism-panel hop, not
                  a Lipica-1580-stud hop), a horse stall-door BLM
                  auction card so the post-gentling trail /
                  endurance / ranch notes are labeled at the barn
                  (not a Friesland-driving hop, not a USDF-level
                  hop), and an equine first-owner mustang handbook
                  so the NO-typically / post-adoption hoof-and-
                  dental grounding is a physical barn book (not a
                  first-owner-friesian handbook, not a double-bridle
                  hop). Educational barn checklist, not a ranked
                  tack list, not a substitute for a veterinarian.
                  Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Mustang checklist"
                  subtitle="Email the BLM-1971-wild-act chart, BLM auction card, and first-owner handbook notes. No spam."
                  ctaText="Email my mustang checklist"
                  source="breed-mustang-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'belgian-draft' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the belgian-draft checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Belgian Draft checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-jeb-lamc2-panel-chart,
                  horse-stall-door-flemish-great-horse-card, and
                  equine-first-owner-belgian-draft-handbook notes
                  that match the JEB LAMC2 / Spirito 2002 panel,
                  Flemish Great Horse / logging draft, and
                  first-time-owner copy on this page — a laminated
                  horse JEB-LAMC2-panel chart so the lethal-foal /
                  PSSM1 / CPL notes are posted on the stall door
                  (not a BLM-1971-wild-act hop, not a
                  B4GALT7-dwarfism-panel hop), a horse stall-door
                  Flemish Great Horse card so the medieval-Flemish /
                  North-America-largest-draft-population notes are
                  labeled at the barn (not a BLM-auction hop, not a
                  USDF-level hop), and an equine first-owner
                  belgian-draft handbook so the YES-with-caveats /
                  low-energy grounding is a physical barn book (not
                  a first-owner-mustang handbook, not a
                  double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Belgian Draft checklist"
                  subtitle="Email the JEB-LAMC2-panel chart, Flemish Great Horse card, and first-owner handbook notes. No spam."
                  ctaText="Email my belgian-draft checklist"
                  source="breed-belgian-draft-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'percheron' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the percheron checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Percheron checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-gallipoly-1820-sire-chart,
                  horse-stall-door-perche-normandy-card, and
                  equine-first-owner-percheron-handbook notes that
                  match the Gallipoly 1820 foundation stallion,
                  Perche / Normandy carriage-draft, and
                  first-time-owner copy on this page — a laminated
                  horse Gallipoly-1820-sire chart so the Arabian-
                  blood / medieval-war-horse notes are posted on
                  the stall door (not a JEB-LAMC2-panel hop, not a
                  BLM-1971-wild-act hop), a horse stall-door Perche
                  Normandy card so the heavy-carriage / farm-draft
                  notes are labeled at the barn (not a Flemish-
                  Great-Horse hop, not a USDF-level hop), and an
                  equine first-owner percheron handbook so the
                  YES-with-caveats / low-energy / PSSM1 grounding
                  is a physical barn book (not a first-owner-
                  belgian-draft handbook, not a double-bridle hop).
                  Educational barn checklist, not a ranked tack
                  list, not a substitute for a veterinarian.
                  Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Percheron checklist"
                  subtitle="Email the Gallipoly-1820-sire chart, Perche Normandy card, and first-owner handbook notes. No spam."
                  ctaText="Email my percheron checklist"
                  source="breed-percheron-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'shire' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the shire checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Shire checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-guinness-tallest-record-chart,
                  horse-stall-door-east-midlands-dray-card, and
                  equine-first-owner-shire-handbook notes that
                  match the Guinness tallest-horse record, East
                  Midlands brewery-dray, and first-time-owner copy
                  on this page — a laminated horse
                  Guinness-tallest-record chart so the medieval
                  English Great Horse / East-Midlands notes are
                  posted on the stall door (not a Gallipoly-1820-
                  sire hop, not a JEB-LAMC2-panel hop), a horse
                  stall-door East Midlands dray card so the
                  brewery-wagon / logging / plowing notes are
                  labeled at the barn (not a Perche-Normandy hop,
                  not a USDF-level hop), and an equine first-owner
                  shire handbook so the NO-typically / CPL-feathering
                  / PSSM1 grounding is a physical barn book (not a
                  first-owner-percheron handbook, not a
                  double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Shire checklist"
                  subtitle="Email the Guinness-tallest-record chart, East Midlands dray card, and first-owner handbook notes. No spam."
                  ctaText="Email my shire checklist"
                  source="breed-shire-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'clydesdale' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the clydesdale checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Clydesdale checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-clyde-valley-lanarkshire-chart,
                  horse-stall-door-anheuser-busch-hitch-card, and
                  equine-first-owner-clydesdale-handbook notes that
                  match the Clyde Valley of Lanarkshire mid-1700s
                  origin, Anheuser-Busch hitch fame, and
                  first-time-owner copy on this page — a laminated
                  horse Clyde-Valley-Lanarkshire chart so the
                  Flemish-stallion / farm-mare / mid-1700s notes
                  are posted on the stall door (not a
                  Guinness-tallest-record hop, not a
                  Gallipoly-1820-sire hop), a horse stall-door
                  Anheuser-Busch hitch card so the high-feathering /
                  animated-gait / brewing-wagon notes are labeled
                  at the barn (not an East-Midlands-dray hop, not a
                  USDF-level hop), and an equine first-owner
                  clydesdale handbook so the NO-typically /
                  CPL-feathering / PSSM1 grounding is a physical
                  barn book (not a first-owner-shire handbook, not
                  a double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Clydesdale checklist"
                  subtitle="Email the Clyde-Valley-Lanarkshire chart, Anheuser-Busch hitch card, and first-owner handbook notes. No spam."
                  ctaText="Email my clydesdale checklist"
                  source="breed-clydesdale-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'suffolk-punch' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the suffolk-punch checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Suffolk Punch checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-crisp-ufford-1768-chart,
                  horse-stall-door-east-anglia-plow-card, and
                  equine-first-owner-suffolk-punch-handbook notes
                  that match Crisp&apos;s Horse of Ufford 1768, the
                  East Anglia clean-legged plow, and first-time-owner
                  copy on this page — a laminated horse
                  Crisp-Ufford-1768 chart so the oldest-English-draft
                  / Rare-Breeds-Survival-Trust notes are posted on
                  the stall door (not a Clyde-Valley-Lanarkshire hop,
                  not a Guinness-tallest-record hop), a horse
                  stall-door East Anglia plow card so the
                  clean-legged / critically-endangered notes are
                  labeled at the barn (not an Anheuser-Busch-hitch
                  hop, not a USDF-level hop), and an equine
                  first-owner suffolk-punch handbook so the
                  YES-with-caveats / PSSM1 / genetic-bottleneck
                  grounding is a physical barn book (not a
                  first-owner-clydesdale handbook, not a
                  double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Suffolk Punch checklist"
                  subtitle="Email the Crisp-Ufford-1768 chart, East Anglia plow card, and first-owner handbook notes. No spam."
                  ctaText="Email my suffolk-punch checklist"
                  source="breed-suffolk-punch-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'norwegian-fjord' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the norwegian-fjord checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Norwegian Fjord checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-viking-mane-dorsal-stripe-chart,
                  horse-stall-door-western-norway-pack-card, and
                  equine-first-owner-norwegian-fjord-handbook notes
                  that match the two-tone Viking mane / dorsal
                  stripe, western-Norway pack-pony origin, and
                  first-time-owner copy on this page — a laminated
                  horse Viking-mane-dorsal-stripe chart so the
                  oldest-pure-breed / dark-dorsal-stripe notes are
                  posted on the stall door (not a Crisp-Ufford-1768
                  hop, not a Clyde-Valley-Lanarkshire hop), a horse
                  stall-door western-Norway pack card so the
                  Viking-times / light-farm-draft notes are labeled
                  at the barn (not an East-Anglia-plow hop, not a
                  USDF-level hop), and an equine first-owner
                  norwegian-fjord handbook so the YES-with-caveats
                  / easy-keeper grounding is a physical barn book
                  (not a first-owner-suffolk-punch handbook, not a
                  double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Norwegian Fjord checklist"
                  subtitle="Email the Viking-mane-dorsal-stripe chart, western-Norway pack card, and first-owner handbook notes. No spam."
                  ctaText="Email my norwegian-fjord checklist"
                  source="breed-norwegian-fjord-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'welsh-pony' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the welsh-pony checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Welsh Pony checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-welsh-section-abcd-chart,
                  horse-stall-door-welsh-hills-cob-card, and
                  equine-first-owner-welsh-pony-handbook notes
                  that match the four-section A/B/C/D,
                  Welsh-hills cob origin, and first-time-owner
                  copy on this page — a laminated horse Welsh
                  section-ABCD chart so the pre-Roman / four-section
                  notes are posted on the stall door (not a
                  Viking-mane-dorsal-stripe hop, not a
                  Crisp-Ufford-1768 hop), a horse stall-door Welsh
                  hills cob card so the Welsh-Pony-and-Cob-Society /
                  lead-line-to-driving-cob notes are labeled at the
                  barn (not a western-Norway-pack hop, not a
                  USDF-level hop), and an equine first-owner
                  welsh-pony handbook so the YES-with-caveats /
                  easy-keeper grounding is a physical barn book
                  (not a first-owner-norwegian-fjord handbook, not a
                  double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Welsh Pony checklist"
                  subtitle="Email the Welsh section-ABCD chart, Welsh-hills cob card, and first-owner handbook notes. No spam."
                  ctaText="Email my welsh-pony checklist"
                  source="breed-welsh-pony-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'shetland-pony' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the shetland-pony checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Shetland Pony checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-shetland-bronze-age-chart,
                  horse-stall-door-seaweed-heather-card, and
                  equine-first-owner-shetland-pony-handbook notes
                  that match the Bronze-Age Shetland-Isles origin,
                  seaweed-and-heather diet, and first-time-owner
                  copy on this page — a laminated horse Shetland
                  Bronze-Age chart so the Scotland-isles / hardy
                  notes are posted on the stall door (not a
                  Welsh-section-ABCD hop, not a
                  Viking-mane-dorsal-stripe hop), a horse stall-door
                  seaweed-heather card so the sparse-diet /
                  extreme-easy-keeper notes are labeled at the
                  barn (not a Welsh-hills-cob hop, not a
                  USDF-level hop), and an equine first-owner
                  shetland-pony handbook so the YES-with-caveats /
                  ACAN-dwarfism grounding is a physical barn book
                  (not a first-owner-welsh-pony handbook, not a
                  double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Shetland Pony checklist"
                  subtitle="Email the Shetland Bronze-Age chart, seaweed-heather card, and first-owner handbook notes. No spam."
                  ctaText="Email my shetland-pony checklist"
                  source="breed-shetland-pony-under-hero"
                />
              </div>
            ) : null}

            {/* TL;DR */}
            <section className="bg-brand-surface border-l-4 border-brand-primary rounded-r-lg p-5 mb-8 not-prose">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                TL;DR
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0">
                The <strong>{breed.name}</strong> is a {breed.type.toLowerCase()}-type horse
                from {breed.originCountry}, standing {formatHandRange(breed.heightRangeHh)}{' '}
                and weighing {formatRange(breed.weightRangeLb, 'lb')}. Average working
                lifespan is {formatRange(breed.lifespanYears, 'years')}; energy is{' '}
                <strong>{breed.energyLevel.toLowerCase()}</strong>. Most common disciplines:{' '}
                {breed.disciplines.slice(0, 3).join(', ')}. Best known for being{' '}
                <strong>{breed.temperamentTraits.slice(0, 3).join(', ').toLowerCase()}</strong>.{' '}
                Top documented breed-specific concerns:{' '}
                {breed.knownHealthConcerns
                  .slice(0, 3)
                  .map((c) => c.split('(')[0].trim().toLowerCase())
                  .join(', ')}.
              </p>
            </section>

            {/* At a glance table */}
            <h2>At a Glance</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-brand-border text-sm tabular-nums">
                <tbody>
                  {atGlance.map(([k, v]) => (
                    <tr key={k} className="border-b border-brand-border">
                      <th className="text-left font-semibold text-brand-text-light px-4 py-2 bg-brand-surface w-[45%]">
                        {k}
                      </th>
                      <td className="px-4 py-2 text-brand-dark">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Origin + purpose */}
            <h2>Origin and Purpose</h2>
            <p>
              The {breed.name} originated in {breed.originCountry}. {breed.originPurpose}{' '}
              That working history still shapes the modern breed. Temperament, conformation,
              and gait mechanics are all artifacts of what the {breed.name} was selected
              to do, which is the single most useful filter to keep in mind when you are
              evaluating a candidate horse: a horse bred for one job often struggles when
              asked to do another, no matter how careful the training.
            </p>

            {/* Temperament + disciplines */}
            <h2>Temperament and Disciplines</h2>
            <p>
              Breed-typical temperament traits include:{' '}
              <strong>{breed.temperamentTraits.join(', ').toLowerCase()}</strong>. As with
              any breed, individual horses vary; these are tendencies, not guarantees, and
              early handling and consistent training shape the adult horse far more than
              breed alone.
            </p>
            <p>
              The disciplines the {breed.name} is most commonly seen in are{' '}
              <strong>{breed.disciplines.join(', ')}</strong>. Within the breed,
              bloodline specialization matters: a {breed.type.toLowerCase()}-bred{' '}
              {breed.name} for one discipline often handles very differently from one
              bred for another. Ask sellers and your trainer specifically what the
              prospect&apos;s lineage was selected for before committing to a purchase
              for a discipline-specific goal.
            </p>

            {/* Care + management (horse-specific) */}
            <h2>Care and Management</h2>
            <p>
              Beyond the standard horse-keeping basics, a few items matter more for the
              {' '}{breed.name} than for the average horse:
            </p>
            <ul>
              <li>
                <strong>Farrier schedule.</strong>{' '}
                {breed.type === 'Draft'
                  ? `Drafts need a farrier on a 6–8 week schedule with a farrier who has shod heavy horses. The breed\'s hoof loading is large, feathered legs trap moisture, and the standard "light-horse" trim is wrong. Budget more per visit than for a lighter horse.`
                  : breed.type === 'Gaited'
                    ? `Gaited horses are typically trimmed every 6–8 weeks; many trainers prefer the horse barefoot or in a light keg shoe to preserve the natural gait. Show-line Tennessee Walkers, Paso Finos, and others sometimes use weighted shoes — be aware of the welfare debates and federal Horse Protection Act enforcement before choosing that route.`
                    : breed.type === 'Pony'
                      ? `Easy-keeping ponies often go barefoot; a 6–8 week trim cycle and rigorous diet management are more important than shoes. The breed is prone to laminitis on rich pasture, so dry-lot turnout with grass-hay-only feeding is standard.`
                      : breed.type === 'Sport' || breed.type === 'Warmblood'
                        ? `Sport-discipline horses need a farrier every 5–7 weeks with experience in performance trimming. Specific shoeing — pads, bar shoes, or therapeutic packages — is common at the upper levels and should be coordinated with the veterinarian and trainer.`
                        : `Standard 6–8 week farrier cycle. Coordinate with your veterinarian on shoeing changes if the horse develops any soundness issues.`}
              </li>
              <li>
                <strong>Paddock and turnout.</strong>{' '}
                {breed.energyLevel === 'Very High' || breed.energyLevel === 'High'
                  ? `${breed.name}s do best with several hours of daily turnout on safe footing. Stalled-only management produces ulcers, stable vices, and behavior problems in this breed.`
                  : `${breed.name}s adapt well to mixed turnout / stall management. As with all easy keepers, dry-lot or grazing-muzzle restrictions may be needed on rich spring pasture.`}
              </li>
              <li>
                <strong>Group dynamics.</strong>{' '}
                {breed.temperamentTraits.some((t) => /\bcalm|gentle|patient\b/i.test(t))
                  ? `Generally well-tolerated by other horses in a pasture group. Standard introduction protocols apply — fence-line introductions for several days, then small groups before adding to a larger herd.`
                  : breed.temperamentTraits.some((t) => /\bspirited|bold|hot|sensitive|independent\b/i.test(t))
                    ? `Can be reactive in new herd settings; quality introductions and stable group membership matter for this breed. A change in pasture-mates frequently disrupts work for a few days.`
                    : `Group dynamics vary by individual. Standard slow-introduction protocols apply.`}
              </li>
              <li>
                <strong>Feeding.</strong> Forage-first — 1.5–2.0% of body weight per day in
                dry-matter forage is the baseline.{' '}
                {breed.type === 'Pony' || breed.energyLevel === 'Low' || breed.type === 'Draft'
                  ? `This breed is metabolically efficient ("easy keeper"); over-feeding concentrate is the most common cause of laminitis and equine metabolic syndrome in the breed.`
                  : breed.type === 'Sport' || breed.type === 'Warmblood' || breed.energyLevel === 'Very High'
                    ? `In hard work this breed often requires concentrate to maintain condition, but starch loads should be limited (≤2 g starch/kg body weight per meal — Geor 2009) to reduce gastric ulcer and PSSM2 risk.`
                    : `Standard forage plus moderate concentrate per work level is typical.`}
              </li>
              <li>
                <strong>Vaccinations and dentistry.</strong> AAEP core vaccinations (EEE/WEE,
                West Nile, rabies, tetanus) plus risk-based (strangles, EHV-1, Potomac
                horse fever) per local prevalence; twice-yearly dental exams once the horse
                passes age 15.
              </li>
            </ul>

            {/* Health concerns */}
            <h2>Health Concerns</h2>
            <p>
              The {breed.name} has well-documented breed-specific health risks. The list
              below is sourced from breed-club genetic-test panels, UC Davis Veterinary
              Genetics Laboratory documentation, AAEP guidance, and the published
              veterinary literature. Citing a real pre-purchase exam and the relevant
              genetic-test panel before buying is the single highest-value due-diligence
              step for this breed.
            </p>
            <ul>
              {conditionEntries.map((c) => (
                <li key={c.text}>
                  {c.href ? (
                    <>
                      <Link
                        href={c.href}
                        className="text-brand-primary font-semibold no-underline hover:underline"
                      >
                        {c.text.split('(')[0].trim()}
                      </Link>
                      {c.text.includes('(') ? ` (${c.text.split('(').slice(1).join('(')}` : ''}
                    </>
                  ) : (
                    c.text
                  )}
                </li>
              ))}
            </ul>

            {/* Recommended genetic test panel */}
            {breed.knownGeneticTests && breed.knownGeneticTests.length > 0 && (
              <>
                <h2>Recommended Genetic Test Panel</h2>
                <p>
                  When evaluating a {breed.name} for purchase or breeding, ask for
                  documented results on the following tests. These align with the breed
                  registry&apos;s recommended panel and with the UC Davis VGL test menu
                  for this breed:
                </p>
                <ul>
                  {breed.knownGeneticTests.map((t) => (
                    <li key={t}>
                      <code className="text-xs bg-brand-surface px-1.5 py-0.5 rounded">
                        {t}
                      </code>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-brand-text-light italic">
                  Verify results at the lab of record (UC Davis VGL — vgl.ucdavis.edu —
                  or the breed registry&apos;s accredited lab) using the horse&apos;s
                  registered name. A seller&apos;s paperwork is not a substitute for the
                  lab record.
                </p>
              </>
            )}

            {/* First-time-owner consideration */}
            <h2>First-Time Owner Consideration</h2>
            <p>
              <strong>
                Is the {breed.name} a good first horse?{' '}
                {breed.firstTimeOwnerFriendly ? 'YES, with caveats.' : 'NO, typically not.'}
              </strong>
            </p>
            <p>
              {breed.firstTimeOwnerFriendly
                ? `The ${breed.name} is generally workable for a first-time owner who has a knowledgeable trainer on retainer, a competent farrier in the area, and budget for routine veterinary care. The breed\'s ${breed.energyLevel.toLowerCase()} energy level and ${breed.temperamentTraits.slice(0, 2).join(', ').toLowerCase()} temperament forgive many first-owner mistakes — but it does not forgive under-conditioning, over-feeding, or skipping the pre-purchase exam.`
                : `The ${breed.name} is not commonly recommended as a first horse. The breed\'s ${breed.energyLevel.toLowerCase()} energy level, ${breed.temperamentTraits.slice(0, 2).join(', ').toLowerCase()} temperament, and specialized discipline demands all tend to expose gaps in handling experience. Consider taking lessons on this breed for at least a year before purchasing, or choose a more forgiving breed for your first horse.`}
            </p>
            <p>Honest questions to ask before bringing one home:</p>
            <ul>
              <li>Do you have a trainer with experience in this breed within driving distance?</li>
              <li>
                Is your farrier comfortable with{' '}
                {breed.type === 'Draft'
                  ? 'heavy-horse hoof care and feathering management'
                  : breed.type === 'Gaited'
                    ? 'gaited-horse trimming and (where used) lighter therapeutic shoeing'
                    : 'this breed\'s typical hoof angles and shoeing package'}
                ?
              </li>
              <li>
                Can you budget for the breed-specific health risks above? Equine health
                insurance (mortality, major medical, surgical) is meaningful here,
                especially for genetic conditions that can be ruled out by testing before
                purchase.
              </li>
              <li>
                Does the breed&apos;s temperament profile (
                <em>{breed.temperamentTraits.join(', ').toLowerCase()}</em>) match the
                horse you actually want to live with every day?
              </li>
            </ul>

            {breed.slug === 'thoroughbred' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the thoroughbred barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  three-foundation-sire, Jockey Club registry, and
                  first-time-owner copy — a laminated horse three-
                  foundation-sire chart, a horse stall-door Jockey
                  Club registry card, and an equine first-owner
                  thoroughbred handbook. Educational barn searches
                  only. They are not a ranked tack list, they are
                  not a thoroughbred-flat-racing hop, they are not
                  a first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying
                  purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+three+foundation+sire+chart?s=breed-thoroughbred"
                    amazonLabel="Browse laminated horse three-foundation-sire charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+jockey+club+registry+card?s=breed-thoroughbred"
                    amazonLabel="Browse horse stall-door Jockey Club registry cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+thoroughbred+handbook?s=breed-thoroughbred"
                    amazonLabel="Browse equine first-owner thoroughbred handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'arabian' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the arabian barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  SCID / LFS / CA panel, Bedouin endurance-mount,
                  and first-time-owner copy — a laminated horse
                  SCID-LFS-CA panel chart, a horse stall-door
                  Bedouin endurance card, and an equine first-owner
                  arabian handbook. Educational barn searches only.
                  They are not a ranked tack list, they are not an
                  endurance-riding hop, they are not a first-aid-kit
                  hop, and they do not replace a veterinarian.
                  Horses.com does not sell insurance. Horses.com
                  earns a commission on qualifying purchases at no
                  extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+scid+lfs+ca+panel+chart?s=breed-arabian"
                    amazonLabel="Browse laminated horse SCID-LFS-CA panel charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+bedouin+endurance+card?s=breed-arabian"
                    amazonLabel="Browse horse stall-door Bedouin endurance cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+arabian+handbook?s=breed-arabian"
                    amazonLabel="Browse equine first-owner arabian handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'andalusian' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the andalusian barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Carthusian / Iberian origin, Doma Vaquera, and
                  first-time-owner copy — a laminated horse
                  Carthusian-Iberian chart, a horse stall-door
                  Doma Vaquera card, and an equine first-owner
                  andalusian handbook. Educational barn searches
                  only. They are not a ranked tack list, they are
                  not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying
                  purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+carthusian+iberian+chart?s=breed-andalusian"
                    amazonLabel="Browse laminated horse Carthusian-Iberian charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+doma+vaquera+card?s=breed-andalusian"
                    amazonLabel="Browse horse stall-door Doma Vaquera cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+andalusian+handbook?s=breed-andalusian"
                    amazonLabel="Browse equine first-owner andalusian handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'lusitano' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the lusitano barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  1967 Andalusian-split, working equitation /
                  mounted-bullfighting, and first-time-owner copy —
                  a laminated horse 1967-studbook-split chart, a
                  horse stall-door working-equitation card, and an
                  equine first-owner lusitano handbook. Educational
                  barn searches only. They are not a ranked tack
                  list, they are not a dressage-overview hop, they
                  are not a first-aid-kit hop, and they do not
                  replace a veterinarian. Horses.com does not sell
                  insurance. Horses.com earns a commission on
                  qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+1967+studbook+split+chart?s=breed-lusitano"
                    amazonLabel="Browse laminated horse 1967-studbook-split charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+working+equitation+card?s=breed-lusitano"
                    amazonLabel="Browse horse stall-door working-equitation cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+lusitano+handbook?s=breed-lusitano"
                    amazonLabel="Browse equine first-owner lusitano handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'lipizzaner' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the lipizzaner barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Lipica 1580 stud, Spanish Riding School of Vienna,
                  and first-time-owner copy — a laminated horse
                  Lipica-1580-stud chart, a horse stall-door Spanish
                  Riding School card, and an equine first-owner
                  lipizzaner handbook. Educational barn searches
                  only. They are not a ranked tack list, they are
                  not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying
                  purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+lipica+1580+stud+chart?s=breed-lipizzaner"
                    amazonLabel="Browse laminated horse Lipica-1580-stud charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+spanish+riding+school+card?s=breed-lipizzaner"
                    amazonLabel="Browse horse stall-door Spanish Riding School cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+lipizzaner+handbook?s=breed-lipizzaner"
                    amazonLabel="Browse equine first-owner lipizzaner handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'friesian' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the friesian barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  B4GALT7 dwarfism / B3GALNT2 hydrocephalus panel,
                  Friesland closed-studbook driving, and
                  first-time-owner copy — a laminated horse
                  B4GALT7-dwarfism-panel chart, a horse stall-door
                  Friesland driving card, and an equine first-owner
                  friesian handbook. Educational barn searches
                  only. They are not a ranked tack list, they are
                  not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying
                  purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+b4galt7+dwarfism+panel+chart?s=breed-friesian"
                    amazonLabel="Browse laminated horse B4GALT7-dwarfism-panel charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+friesland+driving+card?s=breed-friesian"
                    amazonLabel="Browse horse stall-door Friesland driving cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+friesian+handbook?s=breed-friesian"
                    amazonLabel="Browse equine first-owner friesian handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'mustang' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the mustang barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  1971 Wild Free-Roaming Horses and Burros Act, BLM
                  auction adoption, and first-time-owner copy — a
                  laminated horse BLM-1971-wild-act chart, a horse
                  stall-door BLM auction card, and an equine
                  first-owner mustang handbook. Educational barn
                  searches only. They are not a ranked tack list,
                  they are not a dressage-overview hop, they are
                  not a first-aid-kit hop, and they do not replace
                  a veterinarian. Horses.com does not sell
                  insurance. Horses.com earns a commission on
                  qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+blm+1971+wild+act+chart?s=breed-mustang"
                    amazonLabel="Browse laminated horse BLM-1971-wild-act charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+blm+auction+card?s=breed-mustang"
                    amazonLabel="Browse horse stall-door BLM auction cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+mustang+handbook?s=breed-mustang"
                    amazonLabel="Browse equine first-owner mustang handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'belgian-draft' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the belgian-draft barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  JEB LAMC2 / Spirito 2002 panel, Flemish Great
                  Horse / logging draft, and first-time-owner copy
                  — a laminated horse JEB-LAMC2-panel chart, a
                  horse stall-door Flemish Great Horse card, and an
                  equine first-owner belgian-draft handbook.
                  Educational barn searches only. They are not a
                  ranked tack list, they are not a dressage-overview
                  hop, they are not a first-aid-kit hop, and they
                  do not replace a veterinarian. Horses.com does
                  not sell insurance. Horses.com earns a commission
                  on qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+jeb+lamc2+panel+chart?s=breed-belgian-draft"
                    amazonLabel="Browse laminated horse JEB-LAMC2-panel charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+flemish+great+horse+card?s=breed-belgian-draft"
                    amazonLabel="Browse horse stall-door Flemish Great Horse cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+belgian+draft+handbook?s=breed-belgian-draft"
                    amazonLabel="Browse equine first-owner belgian-draft handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'percheron' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the percheron barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Gallipoly 1820 foundation stallion, Perche /
                  Normandy carriage-draft, and first-time-owner
                  copy — a laminated horse Gallipoly-1820-sire
                  chart, a horse stall-door Perche Normandy card,
                  and an equine first-owner percheron handbook.
                  Educational barn searches only. They are not a
                  ranked tack list, they are not a dressage-overview
                  hop, they are not a first-aid-kit hop, and they
                  do not replace a veterinarian. Horses.com does
                  not sell insurance. Horses.com earns a commission
                  on qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+gallipoly+1820+sire+chart?s=breed-percheron"
                    amazonLabel="Browse laminated horse Gallipoly-1820-sire charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+perche+normandy+card?s=breed-percheron"
                    amazonLabel="Browse horse stall-door Perche Normandy cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+percheron+handbook?s=breed-percheron"
                    amazonLabel="Browse equine first-owner percheron handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'shire' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the shire barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Guinness tallest-horse record, East Midlands
                  brewery-dray, and first-time-owner copy — a
                  laminated horse Guinness-tallest-record chart, a
                  horse stall-door East Midlands dray card, and an
                  equine first-owner shire handbook. Educational
                  barn searches only. They are not a ranked tack
                  list, they are not a dressage-overview hop, they
                  are not a first-aid-kit hop, and they do not
                  replace a veterinarian. Horses.com does not sell
                  insurance. Horses.com earns a commission on
                  qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+guinness+tallest+record+chart?s=breed-shire"
                    amazonLabel="Browse laminated horse Guinness-tallest-record charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+east+midlands+dray+card?s=breed-shire"
                    amazonLabel="Browse horse stall-door East Midlands dray cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+shire+handbook?s=breed-shire"
                    amazonLabel="Browse equine first-owner shire handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'clydesdale' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the clydesdale barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Clyde Valley of Lanarkshire mid-1700s origin,
                  Anheuser-Busch hitch fame, and first-time-owner
                  copy — a laminated horse Clyde-Valley-Lanarkshire
                  chart, a horse stall-door Anheuser-Busch hitch
                  card, and an equine first-owner clydesdale
                  handbook. Educational barn searches only. They
                  are not a ranked tack list, they are not a
                  dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying
                  purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+clyde+valley+lanarkshire+chart?s=breed-clydesdale"
                    amazonLabel="Browse laminated horse Clyde-Valley-Lanarkshire charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+anheuser+busch+hitch+card?s=breed-clydesdale"
                    amazonLabel="Browse horse stall-door Anheuser-Busch hitch cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+clydesdale+handbook?s=breed-clydesdale"
                    amazonLabel="Browse equine first-owner clydesdale handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'suffolk-punch' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the suffolk-punch barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Crisp&apos;s Horse of Ufford 1768, East Anglia
                  clean-legged plow, and first-time-owner copy — a
                  laminated horse Crisp-Ufford-1768 chart, a horse
                  stall-door East Anglia plow card, and an equine
                  first-owner suffolk-punch handbook. Educational
                  barn searches only. They are not a ranked tack
                  list, they are not a dressage-overview hop, they
                  are not a first-aid-kit hop, and they do not
                  replace a veterinarian. Horses.com does not sell
                  insurance. Horses.com earns a commission on
                  qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+crisp+ufford+1768+chart?s=breed-suffolk-punch"
                    amazonLabel="Browse laminated horse Crisp-Ufford-1768 charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+east+anglia+plow+card?s=breed-suffolk-punch"
                    amazonLabel="Browse horse stall-door East Anglia plow cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+suffolk+punch+handbook?s=breed-suffolk-punch"
                    amazonLabel="Browse equine first-owner suffolk-punch handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'norwegian-fjord' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the norwegian-fjord barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  two-tone Viking mane / dorsal stripe,
                  western-Norway pack-pony origin, and
                  first-time-owner copy — a laminated horse
                  Viking-mane-dorsal-stripe chart, a horse
                  stall-door western-Norway pack card, and an
                  equine first-owner norwegian-fjord handbook.
                  Educational barn searches only. They are not a
                  ranked tack list, they are not a dressage-overview
                  hop, they are not a first-aid-kit hop, and they
                  do not replace a veterinarian. Horses.com does
                  not sell insurance. Horses.com earns a commission
                  on qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+viking+mane+dorsal+stripe+chart?s=breed-norwegian-fjord"
                    amazonLabel="Browse laminated horse Viking-mane-dorsal-stripe charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+western+norway+pack+card?s=breed-norwegian-fjord"
                    amazonLabel="Browse horse stall-door western-Norway pack cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+norwegian+fjord+handbook?s=breed-norwegian-fjord"
                    amazonLabel="Browse equine first-owner norwegian-fjord handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'welsh-pony' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the welsh-pony barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  four-section A/B/C/D, Welsh-hills cob origin, and
                  first-time-owner copy — a laminated horse Welsh
                  section-ABCD chart, a horse stall-door Welsh
                  hills cob card, and an equine first-owner
                  welsh-pony handbook. Educational barn searches
                  only. They are not a ranked tack list, they are
                  not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying
                  purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+welsh+section+abcd+chart?s=breed-welsh-pony"
                    amazonLabel="Browse laminated horse Welsh section-ABCD charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+welsh+hills+cob+card?s=breed-welsh-pony"
                    amazonLabel="Browse horse stall-door Welsh-hills cob cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+welsh+pony+handbook?s=breed-welsh-pony"
                    amazonLabel="Browse equine first-owner welsh-pony handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'shetland-pony' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the shetland-pony barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Bronze-Age Shetland-Isles origin, seaweed-and-heather
                  diet, and first-time-owner copy — a laminated
                  horse Shetland Bronze-Age chart, a horse stall-door
                  seaweed-heather card, and an equine first-owner
                  shetland-pony handbook. Educational barn searches
                  only. They are not a ranked tack list, they are
                  not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying
                  purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+shetland+bronze+age+chart?s=breed-shetland-pony"
                    amazonLabel="Browse laminated horse Shetland Bronze-Age charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+seaweed+heather+card?s=breed-shetland-pony"
                    amazonLabel="Browse horse stall-door seaweed-heather cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+shetland+pony+handbook?s=breed-shetland-pony"
                    amazonLabel="Browse equine first-owner shetland-pony handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {/* Find a vet — cross-portfolio */}
            <h2>Find a Vet or Equine Specialty Care</h2>
            <p>
              Once you bring a {breed.name} home, line up an equine veterinarian familiar
              with the breed&apos;s priorities — particularly the genetic conditions and
              screening tests above. For complex cases (Wobbler, suspensory desmitis, PSSM
              workups, dwarfism testing), an AAEP-recognized internal-medicine or surgery
              referral practice is the right next step. Search our cross-portfolio
              directory:
            </p>
            <p>
              <a
                href="https://vets.co/find-a-vet"
                className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find an equine vet on Vets.co →
              </a>
            </p>

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>
            <div className="not-prose space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-brand-border rounded-lg p-5"
                >
                  <h3 className="font-display font-bold text-brand-dark text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-6 self-start">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Stats
              </div>
              {[
                ['Type', breed.type],
                ['Size', breed.sizeCategory.split(' (')[0]],
                ['Height', formatHandRange(breed.heightRangeHh)],
                ['Weight', formatRange(breed.weightRangeLb, 'lb')],
                ['Lifespan', formatRange(breed.lifespanYears, 'yr')],
                ['Energy', breed.energyLevel],
                ['Origin', breed.originCountry],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0 gap-3"
                >
                  <span className="text-brand-text-light">{k}</span>
                  <span className="font-bold text-brand-dark text-right max-w-[60%]">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            {getBreedHealthBySlug(breed.slug) && (
              <RelatedLinks
                title={`${breed.name} Health Deep-Dive`}
                links={[
                  {
                    label: `${breed.name} Health & Genetic Screening`,
                    href: `/breeds/${breed.slug}/health`,
                  },
                ]}
              />
            )}

            {breed.knownHealthCrossLinks.length > 0 && (
              <RelatedLinks
                title="Related Horses.com Pages"
                links={breed.knownHealthCrossLinks.slice(0, 5).map((href) => ({
                  label: href
                    .replace(/^\/(health|supplements|guides|reviews)\//, '')
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase()),
                  href,
                }))}
              />
            )}

            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Practical Horse Reference"
              subtitle="Discipline-aware buyer guides and reference articles."
              source={`breed-${breed.slug}`}
            />
          </aside>
        </div>
      </div>
    </>
  )
}
