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

            {breed.slug === 'pony-of-the-americas' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the pony-of-the-americas checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Pony of the Americas checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-iowa-1954-boomhower-chart,
                  horse-stall-door-leopard-complex-spot-card, and
                  equine-first-owner-pony-americas-handbook notes
                  that match the Iowa-1954 Boomhower origin,
                  leopard-complex spotting, and first-time-owner
                  copy on this page — a laminated horse Iowa-1954
                  Boomhower chart so the Shetland-Appaloosa-cross /
                  children&apos;s-show-pony notes are posted on the
                  stall door (not a Shetland-Bronze-Age hop, not a
                  Welsh-section-ABCD hop), a horse stall-door
                  leopard-complex-spot card so the LP / PATN1 /
                  spotting notes are labeled at the barn (not a
                  seaweed-heather hop, not a USDF-level hop), and
                  an equine first-owner pony-americas handbook so
                  the YES-with-caveats / ERU / CSNB grounding is a
                  physical barn book (not a first-owner-shetland-pony
                  handbook, not a double-bridle hop). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Pony of the Americas checklist"
                  subtitle="Email the Iowa-1954 Boomhower chart, leopard-complex-spot card, and first-owner handbook notes. No spam."
                  ctaText="Email my pony-of-the-americas checklist"
                  source="breed-pony-of-the-americas-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'connemara-pony' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the connemara-pony checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Connemara Pony checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-hwsd-serpinb11-chart,
                  horse-stall-door-western-ireland-rock-card, and
                  equine-first-owner-connemara-pony-handbook notes
                  that match the HWSD / SERPINB11 panel, western
                  Ireland rocky-terrain origin, and first-time-owner
                  copy on this page — a laminated horse HWSD
                  SERPINB11 chart so the Finno-2015 / hoof-wall
                  notes are posted on the stall door (not an
                  Iowa-1954-Boomhower hop, not a Shetland-Bronze-Age
                  hop), a horse stall-door western-Ireland rock
                  card so the only-native-Irish-pony / post-1923
                  notes are labeled at the barn (not a
                  leopard-complex-spot hop, not a USDF-level hop),
                  and an equine first-owner connemara-pony handbook
                  so the YES-with-caveats / HWSD grounding is a
                  physical barn book (not a first-owner-pony-americas
                  handbook, not a double-bridle hop). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Connemara Pony checklist"
                  subtitle="Email the HWSD SERPINB11 chart, western-Ireland rock card, and first-owner handbook notes. No spam."
                  ctaText="Email my connemara-pony checklist"
                  source="breed-connemara-pony-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'haflinger' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the haflinger checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Haflinger checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-folie-1874-tyrol-chart,
                  horse-stall-door-flaxen-chestnut-card, and
                  equine-first-owner-haflinger-handbook notes
                  that match the 249 Folie / 1874 South Tyrol origin,
                  chestnut-with-flaxen-mane look, and first-time-owner
                  copy on this page — a laminated horse Folie-1874
                  Tyrol chart so the mountain-pack / light-draft
                  notes are posted on the stall door (not an
                  HWSD-SERPINB11 hop, not an Iowa-1954-Boomhower
                  hop), a horse stall-door flaxen-chestnut card so
                  the traditional chestnut / flaxen-mane notes are
                  labeled at the barn (not a western-Ireland-rock
                  hop, not a USDF-level hop), and an equine
                  first-owner haflinger handbook so the
                  YES-with-caveats / easy-keeper grounding is a
                  physical barn book (not a first-owner-connemara-pony
                  handbook, not a double-bridle hop). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Haflinger checklist"
                  subtitle="Email the Folie-1874 Tyrol chart, flaxen-chestnut card, and first-owner handbook notes. No spam."
                  ctaText="Email my haflinger checklist"
                  source="breed-haflinger-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'morgan' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the morgan checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Morgan checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-justin-morgan-1789-chart,
                  horse-stall-door-vermont-cavalry-card, and
                  equine-first-owner-morgan-handbook notes
                  that match the 1789 Figure / Justin Morgan origin,
                  Vermont cavalry-and-farm history, and first-time-owner
                  copy on this page — a laminated horse Justin-Morgan
                  1789 chart so the first-American-breed / single-sire
                  notes are posted on the stall door (not a Folie-1874
                  Tyrol hop, not an HWSD-SERPINB11 hop), a horse
                  stall-door Vermont cavalry card so the harness-racing
                  / farm-horse notes are labeled at the barn (not a
                  flaxen-chestnut hop, not a USDF-level hop), and an
                  equine first-owner morgan handbook so the
                  YES-with-caveats / Frank-2010 EMS grounding is a
                  physical barn book (not a first-owner-haflinger
                  handbook, not a double-bridle hop). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Morgan checklist"
                  subtitle="Email the Justin-Morgan 1789 chart, Vermont cavalry card, and first-owner handbook notes. No spam."
                  ctaText="Email my morgan checklist"
                  source="breed-morgan-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'hackney' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the hackney checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Hackney checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-norfolk-yorkshire-trotter-chart,
                  horse-stall-door-high-action-carriage-card, and
                  equine-first-owner-hackney-handbook notes
                  that match the Norfolk/Yorkshire Trotter origin,
                  high-action carriage work, and first-time-owner
                  copy on this page — a laminated horse Norfolk
                  Yorkshire trotter chart so the 14th-century
                  Norfolk-and-Yorkshire notes are posted on the
                  stall door (not a Justin-Morgan-1789 hop, not a
                  Folie-1874 Tyrol hop), a horse stall-door
                  high-action carriage card so the harness-racing /
                  roadster notes are labeled at the barn (not a
                  Vermont-cavalry hop, not a USDF-level hop), and
                  an equine first-owner hackney handbook so the
                  NO-typically / RER grounding is a physical barn
                  book (not a first-owner-morgan handbook, not a
                  double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Hackney checklist"
                  subtitle="Email the Norfolk-Yorkshire trotter chart, high-action carriage card, and first-owner handbook notes. No spam."
                  ctaText="Email my hackney checklist"
                  source="breed-hackney-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'akhal-teke' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the akhal-teke checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Akhal-Teke checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-nfs-st14-teke-chart,
                  horse-stall-door-akhal-oasis-gold-card, and
                  equine-first-owner-akhal-teke-handbook notes
                  that match the NFS / ST14 panel, Akhal-oasis
                  golden-sheen origin, and first-time-owner copy
                  on this page — a laminated horse NFS ST14 Teke
                  chart so the Bauer-2017 / Naked-Foal notes are
                  posted on the stall door (not a Norfolk-Yorkshire
                  trotter hop, not a Justin-Morgan-1789 hop), a
                  horse stall-door Akhal-oasis gold card so the
                  Teke-tribe / metallic-golden-sheen notes are
                  labeled at the barn (not a high-action-carriage
                  hop, not a USDF-level hop), and an equine
                  first-owner akhal-teke handbook so the
                  NO-typically / desert-war-mount grounding is a
                  physical barn book (not a first-owner-hackney
                  handbook, not a double-bridle hop). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Akhal-Teke checklist"
                  subtitle="Email the NFS ST14 Teke chart, Akhal-oasis gold card, and first-owner handbook notes. No spam."
                  ctaText="Email my akhal-teke checklist"
                  source="breed-akhal-teke-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'marwari' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the marwari checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Marwari checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-rathore-marwar-ear-chart,
                  horse-stall-door-rajasthan-cavalry-card, and
                  equine-first-owner-marwari-handbook notes that
                  match the inward-turned-ear / Rathore origin,
                  Rajasthan desert-cavalry use, and first-time-owner
                  copy on this page — a laminated horse Rathore
                  Marwar ear chart so the 12th-century / inward-
                  turned-ear-tip notes are posted on the stall door
                  (not an NFS-ST14-Teke hop, not a Norfolk-Yorkshire
                  trotter hop), a horse stall-door Rajasthan cavalry
                  card so the India-Rajasthan / desert-cavalry notes
                  are labeled at the barn (not an Akhal-oasis-gold
                  hop, not a USDF-level hop), and an equine
                  first-owner marwari handbook so the NO-typically /
                  PSSM2-import / Wobbler / heat-stress grounding is
                  a physical barn book (not a first-owner-akhal-teke
                  handbook, not a double-bridle hop). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Marwari checklist"
                  subtitle="Email the Rathore Marwar ear chart, Rajasthan cavalry card, and first-owner handbook notes. No spam."
                  ctaText="Email my marwari checklist"
                  source="breed-marwari-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'cleveland-bay' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the cleveland-bay checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Cleveland Bay checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-cleveland-yorkshire-pack-chart,
                  horse-stall-door-north-yorkshire-driving-card, and
                  equine-first-owner-cleveland-bay-handbook notes that
                  match the Cleveland district / North Yorkshire pack
                  origin, Rare Breeds Survival Trust critically-
                  endangered listing, and first-time-owner copy on
                  this page — a laminated horse Cleveland Yorkshire
                  pack chart so the oldest-established-English /
                  medieval-pack / Andalusian-Barb notes are posted
                  on the stall door (not a Rathore-Marwar-ear hop,
                  not an NFS-ST14-Teke hop), a horse stall-door
                  North Yorkshire driving card so the driving /
                  hunting / critically-endangered notes are labeled
                  at the barn (not a Rajasthan-cavalry hop, not a
                  USDF-level hop), and an equine first-owner
                  cleveland-bay handbook so the NO-typically /
                  genetic-bottleneck / PSSM2 / suspensory-desmitis /
                  OCD grounding is a physical barn book (not a
                  first-owner-marwari handbook, not a double-bridle
                  hop). Educational barn checklist, not a ranked
                  tack list, not a substitute for a veterinarian.
                  Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Cleveland Bay checklist"
                  subtitle="Email the Cleveland Yorkshire pack chart, North Yorkshire driving card, and first-owner handbook notes. No spam."
                  ctaText="Email my cleveland-bay checklist"
                  source="breed-cleveland-bay-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'irish-sport-horse' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the irish-sport-horse checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Irish Sport Horse checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-irish-draught-thoroughbred-chart,
                  horse-stall-door-horse-sport-ireland-eventing-card, and
                  equine-first-owner-irish-sport-horse-handbook notes that
                  match the Horse Sport Ireland / Irish Draught × Thoroughbred
                  origin, three-decade international-eventing dominance, and
                  first-time-owner copy on this page — a laminated horse Irish
                  Draught Thoroughbred chart so the Horse-Sport-Ireland /
                  Irish-Draught-cross notes are posted on the stall door
                  (not a Cleveland-Yorkshire-pack hop, not a Rathore-Marwar-ear
                  hop), a horse stall-door Horse Sport Ireland eventing card
                  so the eventing / show-jumping / hunting notes are labeled
                  at the barn (not a North-Yorkshire-driving hop, not a
                  Rajasthan-cavalry hop), and an equine first-owner
                  irish-sport-horse handbook so the NO-typically / OCD /
                  PSSM2 / WFFS-warmblood / suspensory-desmitis / EGUS-eventer
                  grounding is a physical barn book (not a first-owner-cleveland-bay
                  handbook, not a double-bridle hop). Educational barn
                  checklist, not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Irish Sport Horse checklist"
                  subtitle="Email the Irish Draught Thoroughbred chart, Horse Sport Ireland eventing card, and first-owner handbook notes. No spam."
                  ctaText="Email my irish-sport-horse checklist"
                  source="breed-irish-sport-horse-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'anglo-arabian' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the anglo-arabian checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Anglo-Arabian checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-anglo-thoroughbred-arabian-chart,
                  horse-stall-door-french-eventing-pre-selle-card, and
                  equine-first-owner-anglo-arabian-handbook notes that
                  match the first-cross Thoroughbred × Arabian origin,
                  19th-century France / pre-Selle-Français eventing
                  standard, and first-time-owner copy on this page — a
                  laminated horse Anglo Thoroughbred Arabian chart so
                  the first-cross / Anglo-to-Anglo / Anglo-to-Arabian
                  notes are posted on the stall door (not an Irish-
                  Draught-Thoroughbred hop, not a Cleveland-Yorkshire-
                  pack hop), a horse stall-door French eventing pre-
                  Selle card so the 19th-century-France / endurance /
                  eventing notes are labeled at the barn (not a Horse-
                  Sport-Ireland-eventing hop, not a North-Yorkshire-
                  driving hop), and an equine first-owner anglo-arabian
                  handbook so the NO-typically / SCID-CA-LFS / gastric-
                  ulcers / suspensory-desmitis / PSSM2 / Wobbler
                  grounding is a physical barn book (not a first-owner-
                  irish-sport-horse handbook, not a double-bridle hop).
                  Educational barn checklist, not a ranked tack list,
                  not a substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Anglo-Arabian checklist"
                  subtitle="Email the Anglo Thoroughbred Arabian chart, French eventing pre-Selle card, and first-owner handbook notes. No spam."
                  ctaText="Email my anglo-arabian checklist"
                  source="breed-anglo-arabian-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'knabstrupper' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the knabstrupper checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Knabstrupper checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-knabstrupgaard-flaebehoppen-chart,
                  horse-stall-door-denmark-leopard-lp-card, and
                  equine-first-owner-knabstrupper-handbook notes that
                  match the 1812 Knabstrupgaard / Flaebehoppen origin,
                  Denmark leopard-complex LP spotting, and first-time-
                  owner copy on this page — a laminated horse
                  Knabstrupgaard Flaebehoppen chart so the 1812 / spotted
                  Iberian-cross / Frederiksborg notes are posted on the
                  stall door (not an Anglo-Thoroughbred-Arabian hop, not
                  an Irish-Draught-Thoroughbred hop), a horse stall-door
                  Denmark leopard LP card so the leopard-complex / circus
                  / driving notes are labeled at the barn (not a French-
                  eventing-pre-Selle hop, not a Horse-Sport-Ireland-
                  eventing hop), and an equine first-owner knabstrupper
                  handbook so the YES-typically / ERU-LP / CSNB-LP-LP /
                  PSSM2 / OCD grounding is a physical barn book (not a
                  first-owner-anglo-arabian handbook, not a double-bridle
                  hop). Educational barn checklist, not a ranked tack
                  list, not a substitute for a veterinarian. Horses.com
                  does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Knabstrupper checklist"
                  subtitle="Email the Knabstrupgaard Flaebehoppen chart, Denmark leopard LP card, and first-owner handbook notes. No spam."
                  ctaText="Email my knabstrupper checklist"
                  source="breed-knabstrupper-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'gypsy-vanner' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the gypsy-vanner checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Gypsy Vanner checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-romanichal-caravan-feather-chart,
                  horse-stall-door-gypsy-vanner-society-card, and
                  equine-first-owner-gypsy-vanner-handbook notes that
                  match the late-1800s Romanichal / Irish Traveller
                  caravan origin, 1990s Gypsy Vanner Horse Society
                  formalization, and first-time-owner copy on this
                  page — a laminated horse Romanichal caravan feather
                  chart so the colorful-feathered / family-caravan
                  notes are posted on the stall door (not a
                  Knabstrupgaard-Flaebehoppen hop, not an Anglo-
                  Thoroughbred-Arabian hop), a horse stall-door Gypsy
                  Vanner Society card so the UK-Ireland / driving /
                  trail notes are labeled at the barn (not a Denmark-
                  leopard-LP hop, not a French-eventing-pre-Selle hop),
                  and an equine first-owner gypsy-vanner handbook so
                  the YES-typically / CPL-feathering / EMS-laminitis /
                  PSSM1 / mallenders-sallenders / eyelid-SCC grounding
                  is a physical barn book (not a first-owner-knabstrupper
                  handbook, not a double-bridle hop). Educational barn
                  checklist, not a ranked tack list, not a substitute
                  for a veterinarian. Horses.com does not sell
                  insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Gypsy Vanner checklist"
                  subtitle="Email the Romanichal caravan feather chart, Gypsy Vanner Society card, and first-owner handbook notes. No spam."
                  ctaText="Email my gypsy-vanner checklist"
                  source="breed-gypsy-vanner-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'rocky-mountain-horse' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the rocky-mountain-horse checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Rocky Mountain Horse checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-old-tobe-kentucky-chart,
                  horse-stall-door-single-foot-gait-card, and
                  equine-first-owner-rocky-mountain-handbook notes that
                  match the early-1900s eastern-Kentucky / Old Tobe
                  origin, inherited four-beat single-foot gait /
                  silver-chocolate coat, and first-time-owner copy on
                  this page — a laminated horse Old Tobe Kentucky
                  chart so the foundation-stallion / eastern-Kentucky
                  notes are posted on the stall door (not a
                  Romanichal-caravan-feather hop, not a Knabstrupgaard-
                  Flaebehoppen hop), a horse stall-door single-foot
                  gait card so the four-beat / trail / endurance notes
                  are labeled at the barn (not a Gypsy-Vanner-Society
                  hop, not a Denmark-leopard-LP hop), and an equine
                  first-owner rocky-mountain handbook so the YES-
                  typically / MCOA-PMEL17 / PSSM2 / EMS / navicular
                  grounding is a physical barn book (not a first-owner-
                  gypsy-vanner handbook, not a double-bridle hop).
                  Educational barn checklist, not a ranked tack list,
                  not a substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Rocky Mountain Horse checklist"
                  subtitle="Email the Old Tobe Kentucky chart, single-foot gait card, and first-owner handbook notes. No spam."
                  ctaText="Email my rocky-mountain-horse checklist"
                  source="breed-rocky-mountain-horse-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'warmblood' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the warmblood checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Warmblood checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-european-studbook-fei-chart,
                  horse-stall-door-postwar-thoroughbred-cavalry-card, and
                  equine-first-owner-warmblood-handbook notes that match
                  the European sport-horse studbook umbrella (Hanoverian /
                  Holsteiner / KWPN / Oldenburg / Trakehner / Selle
                  Français), post-WWII Thoroughbred-refined carriage and
                  cavalry stock for FEI-discipline competition, and first-
                  time-owner copy on this page — a laminated horse
                  European studbook FEI chart so the multi-national
                  studbook / FEI-discipline notes are posted on the stall
                  door (not an Old-Tobe-Kentucky hop, not a Romanichal-
                  caravan-feather hop), a horse stall-door postwar
                  Thoroughbred cavalry card so the post-WWII / carriage-
                  cavalry / FEI notes are labeled at the barn (not a
                  single-foot-gait hop, not a Gypsy-Vanner-Society hop),
                  and an equine first-owner warmblood handbook so the NO-
                  typically / OCD / PSSM2-MIM / WFFS / lordosis /
                  suspensory / EGUS grounding is a physical barn book
                  (not a first-owner-rocky-mountain handbook, not a
                  double-bridle hop). Educational barn checklist, not a
                  ranked tack list, not a substitute for a veterinarian.
                  Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Warmblood checklist"
                  subtitle="Email the European studbook FEI chart, postwar Thoroughbred cavalry card, and first-owner handbook notes. No spam."
                  ctaText="Email my warmblood checklist"
                  source="breed-warmblood-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'quarab' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the quarab checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Quarab checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-iqha-quarab-cross-chart,
                  horse-stall-door-stock-cow-sense-endurance-card, and
                  equine-first-owner-quarab-handbook notes that match
                  the Quarter Horse (or Paint) × Arabian cross, stock-
                  horse cow sense plus Arabian endurance and
                  refinement, International Quarab Horse Association
                  registration, and first-time-owner copy on this
                  page — a laminated horse IQHA Quarab cross chart so
                  the QH-or-Paint × Arabian / IQHA notes are posted
                  on the stall door (not a European-studbook-FEI hop,
                  not an Old-Tobe-Kentucky hop), a horse stall-door
                  stock cow-sense endurance card so the endurance /
                  trail / Western cow-sense notes are labeled at the
                  barn (not a postwar-Thoroughbred-cavalry hop, not a
                  single-foot-gait hop), and an equine first-owner
                  quarab handbook so the NO-typically / SCID-CA-LFS /
                  HYPP-GBED-HERDA-PSSM1 / sunburn / Wobbler grounding
                  is a physical barn book (not a first-owner-warmblood
                  handbook, not a double-bridle hop). Educational barn
                  checklist, not a ranked tack list, not a substitute
                  for a veterinarian. Horses.com does not sell
                  insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Quarab checklist"
                  subtitle="Email the IQHA Quarab cross chart, stock cow-sense endurance card, and first-owner handbook notes. No spam."
                  ctaText="Email my quarab checklist"
                  source="breed-quarab-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'anglo-arab' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the anglo-arab checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Anglo-Arab checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-ahsa-usef-half-arabian-chart,
                  horse-stall-door-french-cavalry-remount-card, and
                  equine-first-owner-anglo-arab-handbook notes that
                  match the first-cross Thoroughbred × Arabian origin,
                  AHSA/USEF 12.5% Arabian blood / Half-Arabian
                  registration, French cavalry remount before Selle
                  Français consolidation, and first-time-owner copy
                  on this page — a laminated horse AHSA USEF Half-
                  Arabian chart so the 12.5% Arabian / AHSA-USEF
                  notes are posted on the stall door (not an IQHA-
                  Quarab-cross hop, not an Anglo-Thoroughbred-Arabian
                  hop), a horse stall-door French cavalry remount
                  card so the French-cavalry-remount / eventing /
                  endurance notes are labeled at the barn (not a
                  stock-cow-sense-endurance hop, not a French-
                  eventing-pre-Selle hop), and an equine first-owner
                  anglo-arab handbook so the NO-typically / SCID-CA-
                  LFS / gastric-ulcers / suspensory / PSSM2 / Wobbler
                  grounding is a physical barn book (not a first-
                  owner-quarab handbook, not a first-owner-anglo-
                  arabian handbook). Educational barn checklist, not
                  a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Anglo-Arab checklist"
                  subtitle="Email the AHSA USEF Half-Arabian chart, French cavalry remount card, and first-owner handbook notes. No spam."
                  ctaText="Email my anglo-arab checklist"
                  source="breed-anglo-arab-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'pintabian' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the pintabian checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Pintabian checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-pintabian-registry-tobiano-chart,
                  horse-stall-door-ninetynine-percent-arabian-card, and
                  equine-first-owner-pintabian-handbook notes that match
                  the Pintabian Horse Registry / 99% Arabian blood with
                  tobiano spotting, Pinto-stock × Arabian back-cross
                  origin, and first-time-owner copy on this page — a
                  laminated horse Pintabian Registry tobiano chart so
                  the 99% Arabian / tobiano-spotting notes are posted
                  on the stall door (not an AHSA-USEF-Half-Arabian hop,
                  not an IQHA-Quarab-cross hop), a horse stall-door
                  ninety-nine-percent Arabian card so the endurance /
                  trail / back-cross-to-Arabian notes are labeled at
                  the barn (not a French-cavalry-remount hop, not a
                  stock-cow-sense-endurance hop), and an equine first-
                  owner pintabian handbook so the NO-typically / SCID-
                  CA-LFS / LWO-frame-overo / sunburn / PSSM2 grounding
                  is a physical barn book (not a first-owner-anglo-arab
                  handbook, not a double-bridle hop). Educational barn
                  checklist, not a ranked tack list, not a substitute
                  for a veterinarian. Horses.com does not sell
                  insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Pintabian checklist"
                  subtitle="Email the Pintabian Registry tobiano chart, ninety-nine-percent Arabian card, and first-owner handbook notes. No spam."
                  ctaText="Email my pintabian checklist"
                  source="breed-pintabian-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'paint-horse' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the paint-horse checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Paint Horse checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-apha-overo-color-chart,
                  horse-stall-door-impressive-poco-bueno-card, and
                  equine-first-owner-paint-horse-handbook notes that
                  match the APHA spotted stock-horse origin outside
                  Quarter Horse color rules, Quarter Horse and
                  Thoroughbred foundation blood, and first-time-owner
                  copy on this page — a laminated horse APHA overo
                  color chart so the APHA / overo / spotted-stock
                  notes are posted on the stall door (not a Pintabian-
                  Registry-tobiano hop, not an AHSA-USEF-Half-Arabian
                  hop), a horse stall-door Impressive Poco Bueno card
                  so the Western / reining / ranch / HYPP-Impressive /
                  HERDA-Poco-Bueno notes are labeled at the barn (not
                  a ninety-nine-percent-Arabian hop, not a French-
                  cavalry-remount hop), and an equine first-owner
                  paint-horse handbook so the YES-typically / LWO /
                  HYPP / HERDA / PSSM1 / unpigmented-skin-SCC grounding
                  is a physical barn book (not a first-owner-pintabian
                  handbook, not a first-owner-quarter handbook).
                  Educational barn checklist, not a ranked tack list,
                  not a substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Paint Horse checklist"
                  subtitle="Email the APHA overo color chart, Impressive Poco Bueno card, and first-owner handbook notes. No spam."
                  ctaText="Email my paint-horse checklist"
                  source="breed-paint-horse-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'appaloosa' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the appaloosa checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Appaloosa checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-nez-perce-palouse-chart,
                  horse-stall-door-buffalo-war-horse-card, and
                  equine-first-owner-appaloosa-handbook notes that
                  match the Nez Perce Palouse spotted war-and-buffalo
                  horse origin, ApHC leopard-complex LP / ERU / CSNB
                  copy, and first-time-owner notes on this page — a
                  laminated horse Nez Perce Palouse chart so the
                  Palouse / spotted-sure-footed notes are posted on
                  the stall door (not an APHA-overo-color hop, not a
                  Pintabian-Registry-tobiano hop), a horse stall-door
                  buffalo war-horse card so the war-and-buffalo /
                  Western / trail notes are labeled at the barn (not
                  an Impressive-Poco-Bueno hop, not a Denmark-leopard-
                  LP hop), and an equine first-owner appaloosa
                  handbook so the YES-typically / ERU-LP / CSNB-LP-LP /
                  PSSM1 / unpigmented-skin-SCC grounding is a physical
                  barn book (not a first-owner-paint-horse handbook,
                  not a double-bridle hop). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Appaloosa checklist"
                  subtitle="Email the Nez Perce Palouse chart, buffalo war-horse card, and first-owner handbook notes. No spam."
                  ctaText="Email my appaloosa checklist"
                  source="breed-appaloosa-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'american-saddlebred' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the american-saddlebred checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  American Saddlebred checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-kentucky-saddle-seat-chart,
                  horse-stall-door-narragansett-pacer-card, and
                  equine-first-owner-american-saddlebred-handbook notes
                  that match the Kentucky Narragansett-Pacer / Canadian-
                  Pacer / Thoroughbred plantation and Civil War officer
                  origin, USEF saddle-seat / five-gaited / three-gaited
                  copy, and first-time-owner notes on this page — a
                  laminated horse Kentucky saddle-seat chart so the
                  USEF / saddle-seat / five-gaited notes are posted on
                  the stall door (not a Nez-Perce-Palouse hop, not an
                  APHA-overo-color hop), a horse stall-door Narragansett
                  Pacer card so the Kentucky / plantation / Civil War
                  officer notes are labeled at the barn (not a buffalo-
                  war-horse hop, not an Impressive-Poco-Bueno hop), and
                  an equine first-owner american-saddlebred handbook so
                  the NO-typically / lordosis-swayback / PSSM2 /
                  anhidrosis / stringhalt grounding is a physical barn
                  book (not a first-owner-appaloosa handbook, not a
                  double-bridle hop). Educational barn checklist, not a
                  ranked tack list, not a substitute for a veterinarian.
                  Horses.com does not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="American Saddlebred checklist"
                  subtitle="Email the Kentucky saddle-seat chart, Narragansett Pacer card, and first-owner handbook notes. No spam."
                  ctaText="Email my american-saddlebred checklist"
                  source="breed-american-saddlebred-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'hanoverian' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the hanoverian checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Hanoverian checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-celle-state-stud-chart,
                  horse-stall-door-lower-saxony-sport-card, and
                  equine-first-owner-hanoverian-handbook notes that
                  match the Celle State Stud 1735 Lower Saxony origin,
                  post-WWII Thoroughbred / Trakehner sport-discipline
                  refinement, and first-time-owner notes on this page
                  — a laminated horse Celle State Stud chart so the
                  1735 / Lower Saxony / Hanoverian studbook notes are
                  posted on the stall door (not a Kentucky-saddle-seat
                  hop, not a Nez-Perce-Palouse hop), a horse stall-door
                  Lower Saxony sport card so the dressage / show-jumping
                  / eventing notes are labeled at the barn (not a
                  Narragansett-Pacer hop, not a European-studbook-FEI
                  hop), and an equine first-owner hanoverian handbook
                  so the NO-typically / OCD / PSSM2 / RER / WFFS-PLOD1
                  / suspensory grounding is a physical barn book (not
                  a first-owner-american-saddlebred handbook, not a
                  first-owner-warmblood handbook). Educational barn
                  checklist, not a ranked tack list, not a substitute
                  for a veterinarian. Horses.com does not sell
                  insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Hanoverian checklist"
                  subtitle="Email the Celle State Stud chart, Lower Saxony sport card, and first-owner handbook notes. No spam."
                  ctaText="Email my hanoverian checklist"
                  source="breed-hanoverian-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'holsteiner' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the holsteiner checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Holsteiner checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-elbe-marsh-holstein-chart,
                  horse-stall-door-show-jumping-specialist-card, and
                  equine-first-owner-holsteiner-handbook notes that
                  match the 13th-century Elbe River marsh-horse origin,
                  post-WWII show-jumping specialist refinement, and
                  first-time-owner notes on this page — a laminated
                  horse Elbe marsh Holstein chart so the oldest-German-
                  warmblood / Elbe-marsh notes are posted on the stall
                  door (not a Celle-State-Stud hop, not a Kentucky-
                  saddle-seat hop), a horse stall-door show-jumping
                  specialist card so the jumping / eventing notes are
                  labeled at the barn (not a Lower-Saxony-sport hop,
                  not a Narragansett-Pacer hop), and an equine first-
                  owner holsteiner handbook so the NO-typically / OCD /
                  PSSM2 / WFFS / suspensory / kissing-spine grounding
                  is a physical barn book (not a first-owner-hanoverian
                  handbook, not a first-owner-warmblood handbook).
                  Educational barn checklist, not a ranked tack list,
                  not a substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Holsteiner checklist"
                  subtitle="Email the Elbe marsh Holstein chart, show-jumping specialist card, and first-owner handbook notes. No spam."
                  ctaText="Email my holsteiner checklist"
                  source="breed-holsteiner-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'dutch-warmblood' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the dutch-warmblood checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Dutch Warmblood checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-kwpn-gelderlander-chart,
                  horse-stall-door-groningen-performance-card, and
                  equine-first-owner-dutch-warmblood-handbook notes
                  that match the post-WWII KWPN Gelderlander /
                  Groningen origin, Thoroughbred / Hanoverian /
                  Holsteiner performance-tested copy, and first-time-
                  owner notes on this page — a laminated horse KWPN
                  Gelderlander chart so the KWPN / Gelderlander notes
                  are posted on the stall door (not an Elbe-marsh-
                  Holstein hop, not a Celle-State-Stud hop), a horse
                  stall-door Groningen performance card so the
                  Groningen / performance-tested / dressage / jumping
                  notes are labeled at the barn (not a show-jumping-
                  specialist hop, not a Lower-Saxony-sport hop), and
                  an equine first-owner dutch-warmblood handbook so
                  the NO-typically / OCD / PSSM2 / WFFS / lordosis /
                  suspensory grounding is a physical barn book (not a
                  first-owner-holsteiner handbook, not a first-owner-
                  hanoverian handbook). Educational barn checklist,
                  not a ranked tack list, not a substitute for a
                  veterinarian. Horses.com does not sell insurance.
                  No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Dutch Warmblood checklist"
                  subtitle="Email the KWPN Gelderlander chart, Groningen performance card, and first-owner handbook notes. No spam."
                  ctaText="Email my dutch-warmblood checklist"
                  source="breed-dutch-warmblood-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'oldenburg' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the oldenburg checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Oldenburg checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-anton-gunther-oldenburg-chart,
                  horse-stall-door-iberian-neapolitan-card, and
                  equine-first-owner-oldenburg-handbook notes that
                  match the 17th-century Count Anton Günther carriage-
                  stock origin, Iberian / Neapolitan modernization to
                  a sport-horse type, and first-time-owner notes on
                  this page — a laminated horse Anton Günther Oldenburg
                  chart so the 17th-century / Count-Anton-Günther notes
                  are posted on the stall door (not a KWPN-Gelderlander
                  hop, not an Elbe-marsh-Holstein hop), a horse stall-
                  door Iberian Neapolitan card so the Iberian /
                  Neapolitan / carriage-to-sport notes are labeled at
                  the barn (not a Groningen-performance hop, not a
                  show-jumping-specialist hop), and an equine first-
                  owner oldenburg handbook so the NO-typically / OCD /
                  PSSM2 / WFFS / lordosis / suspensory grounding is a
                  physical barn book (not a first-owner-dutch-warmblood
                  handbook, not a first-owner-holsteiner handbook).
                  Educational barn checklist, not a ranked tack list,
                  not a substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Oldenburg checklist"
                  subtitle="Email the Anton Günther Oldenburg chart, Iberian Neapolitan card, and first-owner handbook notes. No spam."
                  ctaText="Email my oldenburg checklist"
                  source="breed-oldenburg-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'trakehner' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the trakehner checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Trakehner checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-trakehnen-1732-stud-chart,
                  horse-stall-door-east-prussia-closed-book-card, and
                  equine-first-owner-trakehner-handbook notes that
                  match the 1732 Trakehnen Stud / King Frederick
                  William I cavalry-remount origin, closed book that
                  accepts only Trakehner / Thoroughbred / Arabian /
                  Anglo-Arab blood, and first-time-owner notes on this
                  page — a laminated horse Trakehnen 1732 stud chart
                  so the East Prussia / Trakehnen-Stud notes are
                  posted on the stall door (not an Anton-Günther-
                  Oldenburg hop, not a KWPN-Gelderlander hop), a horse
                  stall-door East Prussia closed-book card so the
                  closed-book / Thoroughbred-Arabian-Anglo-Arab notes
                  are labeled at the barn (not an Iberian-Neapolitan
                  hop, not a Groningen-performance hop), and an equine
                  first-owner trakehner handbook so the NO-typically /
                  OCD / PSSM2 / WFFS / lordosis / cervical-vertebral
                  malformation grounding is a physical barn book (not
                  a first-owner-oldenburg handbook, not a first-owner-
                  dutch-warmblood handbook). Educational barn
                  checklist, not a ranked tack list, not a substitute
                  for a veterinarian. Horses.com does not sell
                  insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Trakehner checklist"
                  subtitle="Email the Trakehnen 1732 stud chart, East Prussia closed-book card, and first-owner handbook notes. No spam."
                  ctaText="Email my trakehner checklist"
                  source="breed-trakehner-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'selle-francais' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the selle-francais checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Selle Français checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-anglo-norman-vendeen-chart,
                  horse-stall-door-charolais-1958-studbook-card, and
                  equine-first-owner-selle-francais-handbook notes that
                  match the 1958 French regional half-bred merge
                  (Anglo-Norman / Vendéen / Charolais), Thoroughbred /
                  Anglo-Arab show-jumping refinement, and first-time-
                  owner notes on this page — a laminated horse Anglo-
                  Norman Vendéen chart so the Anglo-Norman / Vendéen
                  notes are posted on the stall door (not a Trakehnen-
                  1732 hop, not an Anton-Günther-Oldenburg hop), a
                  horse stall-door Charolais 1958 studbook card so the
                  1958 / Charolais / show-jumping notes are labeled at
                  the barn (not an East-Prussia-closed-book hop, not a
                  French-eventing-pre-selle hop), and an equine first-
                  owner selle-francais handbook so the NO-typically /
                  OCD / PSSM2 / WFFS / suspensory / RER grounding is a
                  physical barn book (not a first-owner-trakehner
                  handbook, not a first-owner-oldenburg handbook).
                  Educational barn checklist, not a ranked tack list,
                  not a substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Selle Français checklist"
                  subtitle="Email the Anglo-Norman Vendéen chart, Charolais 1958 studbook card, and first-owner handbook notes. No spam."
                  ctaText="Email my selle-francais checklist"
                  source="breed-selle-francais-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'westphalian' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the westphalian checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Westphalian checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-warendorf-1826-stud-chart,
                  horse-stall-door-westphalia-hanoverian-tie-card, and
                  equine-first-owner-westphalian-handbook notes that
                  match the Warendorf State Stud 1826 Westphalia
                  origin, Hanoverian-studbook tie for dressage and
                  jumping, and first-time-owner notes on this page —
                  a laminated horse Warendorf 1826 stud chart so the
                  Warendorf / 1826 / Westphalia notes are posted on
                  the stall door (not an Anglo-Norman-Vendéen hop,
                  not a Celle-State-Stud hop), a horse stall-door
                  Westphalia Hanoverian-tie card so the Hanoverian-
                  studbook / dressage / jumping notes are labeled at
                  the barn (not a Charolais-1958 hop, not a Lower-
                  Saxony-sport hop), and an equine first-owner
                  westphalian handbook so the NO-typically / OCD /
                  PSSM2 / WFFS / lordosis / suspensory grounding is a
                  physical barn book (not a first-owner-selle-francais
                  handbook, not a first-owner-hanoverian handbook).
                  Educational barn checklist, not a ranked tack list,
                  not a substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Westphalian checklist"
                  subtitle="Email the Warendorf 1826 stud chart, Westphalia Hanoverian-tie card, and first-owner handbook notes. No spam."
                  ctaText="Email my westphalian checklist"
                  source="breed-westphalian-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'belgian-warmblood' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the belgian-warmblood checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Belgian Warmblood checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-bwp-1955-stud-chart,
                  horse-stall-door-bwp-draft-independent-card, and
                  equine-first-owner-belgian-warmblood-handbook notes
                  that match the 1955 BWP sport-horse studbook
                  founded independent from the Belgian Draft, Holsteiner
                  / Hanoverian / Selle Français / Thoroughbred
                  refinement for show jumping, and first-time-owner
                  notes on this page — a laminated horse BWP 1955
                  stud chart so the BWP / 1955 / Belgium notes are
                  posted on the stall door (not a Warendorf-1826 hop,
                  not a Flemish-great-horse hop), a horse stall-door
                  BWP draft-independent card so the Belgian-Draft-
                  independent / show-jumping notes are labeled at the
                  barn (not a Westphalia-Hanoverian-tie hop, not a
                  Charolais-1958 hop), and an equine first-owner
                  belgian-warmblood handbook so the NO-typically / OCD
                  / PSSM2 / WFFS / suspensory / kissing-spine
                  grounding is a physical barn book (not a
                  first-owner-westphalian handbook, not a
                  first-owner-belgian-draft handbook). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does not
                  sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Belgian Warmblood checklist"
                  subtitle="Email the BWP 1955 stud chart, BWP draft-independent card, and first-owner handbook notes. No spam."
                  ctaText="Email my belgian-warmblood checklist"
                  source="breed-belgian-warmblood-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'tennessee-walking-horse' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the tennessee-walking-horse checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Tennessee Walking Horse checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-twhbea-running-walk-chart,
                  horse-stall-door-tennessee-bluegrass-card, and
                  equine-first-owner-tennessee-walking-handbook notes
                  that match the Tennessee Bluegrass running-walk
                  origin from Narragansett Pacer / Canadian Pacer /
                  Standardbred / Thoroughbred / Morgan crosses, the
                  TWHBEA four-beat running walk, and first-time-owner
                  notes on this page — a laminated horse TWHBEA
                  running-walk chart so the TWHBEA / running-walk
                  notes are posted on the stall door (not a
                  Narragansett-pacer hop, not a BWP-1955 hop), a
                  horse stall-door Tennessee Bluegrass card so the
                  Bluegrass / trail / flat-shod notes are labeled at
                  the barn (not a Kentucky-saddle-seat hop, not a
                  BWP-draft-independent hop), and an equine
                  first-owner tennessee-walking handbook so the
                  YES-typically / soring-HPA / navicular / PSSM /
                  EMS-laminitis grounding is a physical barn book
                  (not a first-owner-american-saddlebred handbook,
                  not a first-owner-belgian-warmblood handbook).
                  Educational barn checklist, not a ranked tack list,
                  not a substitute for a veterinarian. Horses.com does
                  not sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Tennessee Walking Horse checklist"
                  subtitle="Email the TWHBEA running-walk chart, Tennessee Bluegrass card, and first-owner handbook notes. No spam."
                  ctaText="Email my tennessee-walking-horse checklist"
                  source="breed-tennessee-walking-horse-under-hero"
                />
              </div>
            ) : null}

            {breed.slug === 'missouri-fox-trotter' ? (
              <div className="mb-8">
                <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Keep the missouri-fox-trotter checklist
                </p>
                <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                  Missouri Fox Trotter checklist
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                  Email the laminated-horse-ozark-fox-trot-chart,
                  horse-stall-door-missouri-1800s-walker-card, and
                  equine-first-owner-missouri-fox-trotter-handbook
                  notes that match the Ozark Mountains 1800s fox-trot
                  origin from Morgan / Thoroughbred / Arabian /
                  Tennessee Walker crosses, the inherited diagonal
                  fox trot for rough terrain, and first-time-owner
                  notes on this page — a laminated horse Ozark fox-
                  trot chart so the Ozark / fox-trot notes are posted
                  on the stall door (not a TWHBEA-running-walk hop,
                  not a BWP-1955 hop), a horse stall-door Missouri
                  1800s-walker card so the Missouri / Tennessee-
                  Walker-cross / trail / ranch notes are labeled at
                  the barn (not a Tennessee-Bluegrass hop, not a
                  single-foot-gait hop), and an equine first-owner
                  missouri-fox-trotter handbook so the YES-typically /
                  navicular / PSSM / insulin-resistance / stringhalt
                  grounding is a physical barn book (not a
                  first-owner-tennessee-walking handbook, not a
                  first-owner-rocky-mountain handbook). Educational
                  barn checklist, not a ranked tack list, not a
                  substitute for a veterinarian. Horses.com does not
                  sell insurance. No spam.
                </p>
                <EmailCapture
                  variant="inline"
                  siteId="horses-com"
                  title="Missouri Fox Trotter checklist"
                  subtitle="Email the Ozark fox-trot chart, Missouri 1800s-walker card, and first-owner handbook notes. No spam."
                  ctaText="Email my missouri-fox-trotter checklist"
                  source="breed-missouri-fox-trotter-under-hero"
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

            {breed.slug === 'pony-of-the-americas' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the pony-of-the-americas barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Iowa-1954 Boomhower origin, leopard-complex
                  spotting, and first-time-owner copy — a laminated
                  horse Iowa-1954 Boomhower chart, a horse stall-door
                  leopard-complex-spot card, and an equine first-owner
                  pony-americas handbook. Educational barn searches
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
                    amazonHref="/go/amazon-brand/laminated+horse+iowa+1954+boomhower+chart?s=breed-pony-of-the-americas"
                    amazonLabel="Browse laminated horse Iowa-1954 Boomhower charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+leopard+complex+spot+card?s=breed-pony-of-the-americas"
                    amazonLabel="Browse horse stall-door leopard-complex-spot cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+pony+americas+handbook?s=breed-pony-of-the-americas"
                    amazonLabel="Browse equine first-owner pony-americas handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'connemara-pony' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the connemara-pony barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  HWSD / SERPINB11 panel, western-Ireland rocky-terrain
                  origin, and first-time-owner copy — a laminated
                  horse HWSD SERPINB11 chart, a horse stall-door
                  western-Ireland rock card, and an equine first-owner
                  connemara-pony handbook. Educational barn searches
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
                    amazonHref="/go/amazon-brand/laminated+horse+hwsd+serpinb11+chart?s=breed-connemara-pony"
                    amazonLabel="Browse laminated horse HWSD SERPINB11 charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+western+ireland+rock+card?s=breed-connemara-pony"
                    amazonLabel="Browse horse stall-door western-Ireland rock cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+connemara+pony+handbook?s=breed-connemara-pony"
                    amazonLabel="Browse equine first-owner connemara-pony handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'haflinger' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the haflinger barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  249 Folie / 1874 South Tyrol origin,
                  chestnut-with-flaxen-mane look, and first-time-owner
                  copy — a laminated horse Folie-1874 Tyrol chart, a
                  horse stall-door flaxen-chestnut card, and an
                  equine first-owner haflinger handbook. Educational
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
                    amazonHref="/go/amazon-brand/laminated+horse+folie+1874+tyrol+chart?s=breed-haflinger"
                    amazonLabel="Browse laminated horse Folie-1874 Tyrol charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+flaxen+chestnut+card?s=breed-haflinger"
                    amazonLabel="Browse horse stall-door flaxen-chestnut cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+haflinger+handbook?s=breed-haflinger"
                    amazonLabel="Browse equine first-owner haflinger handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'morgan' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the morgan barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  1789 Figure / Justin Morgan origin, Vermont
                  cavalry-and-farm history, and first-time-owner
                  copy — a laminated horse Justin-Morgan 1789 chart,
                  a horse stall-door Vermont cavalry card, and an
                  equine first-owner morgan handbook. Educational
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
                    amazonHref="/go/amazon-brand/laminated+horse+justin+morgan+1789+chart?s=breed-morgan"
                    amazonLabel="Browse laminated horse Justin-Morgan 1789 charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+vermont+cavalry+card?s=breed-morgan"
                    amazonLabel="Browse horse stall-door Vermont cavalry cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+morgan+handbook?s=breed-morgan"
                    amazonLabel="Browse equine first-owner morgan handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'hackney' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the hackney barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Norfolk/Yorkshire Trotter origin, high-action
                  carriage work, and first-time-owner copy — a
                  laminated horse Norfolk Yorkshire trotter chart, a
                  horse stall-door high-action carriage card, and an
                  equine first-owner hackney handbook. Educational
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
                    amazonHref="/go/amazon-brand/laminated+horse+norfolk+yorkshire+trotter+chart?s=breed-hackney"
                    amazonLabel="Browse laminated horse Norfolk Yorkshire trotter charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+high+action+carriage+card?s=breed-hackney"
                    amazonLabel="Browse horse stall-door high-action carriage cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+hackney+handbook?s=breed-hackney"
                    amazonLabel="Browse equine first-owner hackney handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'akhal-teke' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the akhal-teke barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  NFS / ST14 panel, Akhal-oasis golden-sheen origin,
                  and first-time-owner copy — a laminated horse NFS
                  ST14 Teke chart, a horse stall-door Akhal-oasis
                  gold card, and an equine first-owner akhal-teke
                  handbook. Educational barn searches only. They
                  are not a ranked tack list, they are not a
                  dressage-overview hop, they are not a first-aid-kit
                  hop, and they do not replace a veterinarian.
                  Horses.com does not sell insurance. Horses.com
                  earns a commission on qualifying purchases at no
                  extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+nfs+st14+teke+chart?s=breed-akhal-teke"
                    amazonLabel="Browse laminated horse NFS ST14 Teke charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+akhal+oasis+gold+card?s=breed-akhal-teke"
                    amazonLabel="Browse horse stall-door Akhal-oasis gold cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+akhal+teke+handbook?s=breed-akhal-teke"
                    amazonLabel="Browse equine first-owner akhal-teke handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'marwari' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the marwari barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  inward-turned-ear / Rathore origin, Rajasthan
                  desert-cavalry use, and first-time-owner copy —
                  a laminated horse Rathore Marwar ear chart, a
                  horse stall-door Rajasthan cavalry card, and an
                  equine first-owner marwari handbook. Educational
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
                    amazonHref="/go/amazon-brand/laminated+horse+rathore+marwar+ear+chart?s=breed-marwari"
                    amazonLabel="Browse laminated horse Rathore Marwar ear charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+rajasthan+cavalry+card?s=breed-marwari"
                    amazonLabel="Browse horse stall-door Rajasthan cavalry cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+marwari+handbook?s=breed-marwari"
                    amazonLabel="Browse equine first-owner marwari handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'cleveland-bay' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the cleveland-bay barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Cleveland district / North Yorkshire pack origin,
                  Rare Breeds Survival Trust critically-endangered
                  listing, and first-time-owner copy — a laminated
                  horse Cleveland Yorkshire pack chart, a horse
                  stall-door North Yorkshire driving card, and an
                  equine first-owner cleveland-bay handbook.
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
                    amazonHref="/go/amazon-brand/laminated+horse+cleveland+yorkshire+pack+chart?s=breed-cleveland-bay"
                    amazonLabel="Browse laminated horse Cleveland Yorkshire pack charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+north+yorkshire+driving+card?s=breed-cleveland-bay"
                    amazonLabel="Browse horse stall-door North Yorkshire driving cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+cleveland+bay+handbook?s=breed-cleveland-bay"
                    amazonLabel="Browse equine first-owner cleveland-bay handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'irish-sport-horse' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the irish-sport-horse barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Horse Sport Ireland / Irish Draught × Thoroughbred origin,
                  three-decade international-eventing dominance, and
                  first-time-owner copy — a laminated horse Irish Draught
                  Thoroughbred chart, a horse stall-door Horse Sport Ireland
                  eventing card, and an equine first-owner irish-sport-horse
                  handbook. Educational barn searches only. They are not a
                  ranked tack list, they are not a dressage-overview
                  hop, they are not a first-aid-kit hop, and they
                  do not replace a veterinarian. Horses.com does
                  not sell insurance. Horses.com earns a commission
                  on qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+irish+draught+thoroughbred+chart?s=breed-irish-sport-horse"
                    amazonLabel="Browse laminated horse Irish Draught Thoroughbred charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+horse+sport+ireland+eventing+card?s=breed-irish-sport-horse"
                    amazonLabel="Browse horse stall-door Horse Sport Ireland eventing cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+irish+sport+horse+handbook?s=breed-irish-sport-horse"
                    amazonLabel="Browse equine first-owner irish-sport-horse handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'anglo-arabian' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the anglo-arabian barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  first-cross Thoroughbred × Arabian origin, 19th-century
                  France / pre-Selle-Français eventing standard, and
                  first-time-owner copy — a laminated horse Anglo
                  Thoroughbred Arabian chart, a horse stall-door French
                  eventing pre-Selle card, and an equine first-owner
                  anglo-arabian handbook. Educational barn searches only.
                  They are not a ranked tack list, they are not a
                  dressage-overview hop, they are not a first-aid-kit
                  hop, and they do not replace a veterinarian.
                  Horses.com does not sell insurance. Horses.com earns
                  a commission on qualifying purchases at no extra cost
                  to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+anglo+thoroughbred+arabian+chart?s=breed-anglo-arabian"
                    amazonLabel="Browse laminated horse Anglo Thoroughbred Arabian charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+french+eventing+pre+selle+card?s=breed-anglo-arabian"
                    amazonLabel="Browse horse stall-door French eventing pre-Selle cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+anglo+arabian+handbook?s=breed-anglo-arabian"
                    amazonLabel="Browse equine first-owner anglo-arabian handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'knabstrupper' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the knabstrupper barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  1812 Knabstrupgaard / Flaebehoppen origin, Denmark
                  leopard-complex LP spotting, and first-time-owner
                  copy — a laminated horse Knabstrupgaard Flaebehoppen
                  chart, a horse stall-door Denmark leopard LP card,
                  and an equine first-owner knabstrupper handbook.
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
                    amazonHref="/go/amazon-brand/laminated+horse+knabstrupgaard+flaebehoppen+chart?s=breed-knabstrupper"
                    amazonLabel="Browse laminated horse Knabstrupgaard Flaebehoppen charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+denmark+leopard+lp+card?s=breed-knabstrupper"
                    amazonLabel="Browse horse stall-door Denmark leopard LP cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+knabstrupper+handbook?s=breed-knabstrupper"
                    amazonLabel="Browse equine first-owner knabstrupper handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'gypsy-vanner' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the gypsy-vanner barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  late-1800s Romanichal / Irish Traveller caravan
                  origin, 1990s Gypsy Vanner Horse Society
                  formalization, and first-time-owner copy — a
                  laminated horse Romanichal caravan feather chart,
                  a horse stall-door Gypsy Vanner Society card, and
                  an equine first-owner gypsy-vanner handbook.
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
                    amazonHref="/go/amazon-brand/laminated+horse+romanichal+caravan+feather+chart?s=breed-gypsy-vanner"
                    amazonLabel="Browse laminated horse Romanichal caravan feather charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+gypsy+vanner+society+card?s=breed-gypsy-vanner"
                    amazonLabel="Browse horse stall-door Gypsy Vanner Society cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+gypsy+vanner+handbook?s=breed-gypsy-vanner"
                    amazonLabel="Browse equine first-owner gypsy-vanner handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'rocky-mountain-horse' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the rocky-mountain-horse barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  early-1900s eastern-Kentucky / Old Tobe origin,
                  inherited four-beat single-foot gait / silver-
                  chocolate coat, and first-time-owner copy — a
                  laminated horse Old Tobe Kentucky chart, a horse
                  stall-door single-foot gait card, and an equine
                  first-owner rocky-mountain handbook. Educational
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
                    amazonHref="/go/amazon-brand/laminated+horse+old+tobe+kentucky+chart?s=breed-rocky-mountain-horse"
                    amazonLabel="Browse laminated horse Old Tobe Kentucky charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+single+foot+gait+card?s=breed-rocky-mountain-horse"
                    amazonLabel="Browse horse stall-door single-foot gait cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+rocky+mountain+handbook?s=breed-rocky-mountain-horse"
                    amazonLabel="Browse equine first-owner rocky-mountain handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'warmblood' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the warmblood barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  European sport-horse studbook umbrella, post-WWII
                  Thoroughbred-refined carriage and cavalry stock for
                  FEI-discipline competition, and first-time-owner
                  copy — a laminated horse European studbook FEI
                  chart, a horse stall-door postwar Thoroughbred
                  cavalry card, and an equine first-owner warmblood
                  handbook. Educational barn searches only. They are
                  not a ranked tack list, they are not a dressage-
                  overview hop, they are not a first-aid-kit hop, and
                  they do not replace a veterinarian. Horses.com does
                  not sell insurance. Horses.com earns a commission
                  on qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+european+studbook+fei+chart?s=breed-warmblood"
                    amazonLabel="Browse laminated horse European studbook FEI charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+postwar+thoroughbred+cavalry+card?s=breed-warmblood"
                    amazonLabel="Browse horse stall-door postwar Thoroughbred cavalry cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+warmblood+handbook?s=breed-warmblood"
                    amazonLabel="Browse equine first-owner warmblood handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'quarab' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the quarab barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Quarter Horse (or Paint) × Arabian cross, stock-
                  horse cow sense plus Arabian endurance and
                  refinement, International Quarab Horse Association
                  registration, and first-time-owner copy — a
                  laminated horse IQHA Quarab cross chart, a horse
                  stall-door stock cow-sense endurance card, and an
                  equine first-owner quarab handbook. Educational
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
                    amazonHref="/go/amazon-brand/laminated+horse+iqha+quarab+cross+chart?s=breed-quarab"
                    amazonLabel="Browse laminated horse IQHA Quarab cross charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+stock+cow+sense+endurance+card?s=breed-quarab"
                    amazonLabel="Browse horse stall-door stock cow-sense endurance cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+quarab+handbook?s=breed-quarab"
                    amazonLabel="Browse equine first-owner quarab handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'anglo-arab' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the anglo-arab barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  first-cross Thoroughbred × Arabian origin, AHSA/USEF
                  12.5% Arabian blood / Half-Arabian registration,
                  French cavalry remount before Selle Français
                  consolidation, and first-time-owner copy — a
                  laminated horse AHSA USEF Half-Arabian chart, a
                  horse stall-door French cavalry remount card, and
                  an equine first-owner anglo-arab handbook.
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
                    amazonHref="/go/amazon-brand/laminated+horse+ahsa+usef+half+arabian+chart?s=breed-anglo-arab"
                    amazonLabel="Browse laminated horse AHSA USEF Half-Arabian charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+french+cavalry+remount+card?s=breed-anglo-arab"
                    amazonLabel="Browse horse stall-door French cavalry remount cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+anglo+arab+handbook?s=breed-anglo-arab"
                    amazonLabel="Browse equine first-owner anglo-arab handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'pintabian' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the pintabian barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Pintabian Horse Registry / 99% Arabian blood with
                  tobiano spotting, Pinto-stock × Arabian back-cross
                  origin, and first-time-owner copy — a laminated
                  horse Pintabian Registry tobiano chart, a horse
                  stall-door ninety-nine-percent Arabian card, and
                  an equine first-owner pintabian handbook.
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
                    amazonHref="/go/amazon-brand/laminated+horse+pintabian+registry+tobiano+chart?s=breed-pintabian"
                    amazonLabel="Browse laminated horse Pintabian Registry tobiano charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+ninetynine+percent+arabian+card?s=breed-pintabian"
                    amazonLabel="Browse horse stall-door ninety-nine-percent Arabian cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+pintabian+handbook?s=breed-pintabian"
                    amazonLabel="Browse equine first-owner pintabian handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'paint-horse' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the paint-horse barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  APHA spotted stock-horse origin outside Quarter
                  Horse color rules, Quarter Horse and Thoroughbred
                  foundation blood, and first-time-owner copy — a
                  laminated horse APHA overo color chart, a horse
                  stall-door Impressive Poco Bueno card, and an
                  equine first-owner paint-horse handbook.
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
                    amazonHref="/go/amazon-brand/laminated+horse+apha+overo+color+chart?s=breed-paint-horse"
                    amazonLabel="Browse laminated horse APHA overo color charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+impressive+poco+bueno+card?s=breed-paint-horse"
                    amazonLabel="Browse horse stall-door Impressive Poco Bueno cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+paint+horse+handbook?s=breed-paint-horse"
                    amazonLabel="Browse equine first-owner paint-horse handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'appaloosa' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the appaloosa barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Nez Perce Palouse spotted war-and-buffalo horse
                  origin, ApHC leopard-complex LP / ERU / CSNB copy,
                  and first-time-owner notes — a laminated horse Nez
                  Perce Palouse chart, a horse stall-door buffalo
                  war-horse card, and an equine first-owner appaloosa
                  handbook. Educational barn searches only. They are
                  not a ranked tack list, they are not a dressage-
                  overview hop, they are not a first-aid-kit hop, and
                  they do not replace a veterinarian. Horses.com does
                  not sell insurance. Horses.com earns a commission
                  on qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+nez+perce+palouse+chart?s=breed-appaloosa"
                    amazonLabel="Browse laminated horse Nez Perce Palouse charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+buffalo+war+horse+card?s=breed-appaloosa"
                    amazonLabel="Browse horse stall-door buffalo war-horse cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+appaloosa+handbook?s=breed-appaloosa"
                    amazonLabel="Browse equine first-owner appaloosa handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'american-saddlebred' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the american-saddlebred barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Kentucky Narragansett-Pacer / Canadian-Pacer /
                  Thoroughbred plantation and Civil War officer origin,
                  USEF saddle-seat / five-gaited / three-gaited copy,
                  and first-time-owner notes — a laminated horse
                  Kentucky saddle-seat chart, a horse stall-door
                  Narragansett Pacer card, and an equine first-owner
                  american-saddlebred handbook. Educational barn
                  searches only. They are not a ranked tack list, they
                  are not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying purchases
                  at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+kentucky+saddle+seat+chart?s=breed-american-saddlebred"
                    amazonLabel="Browse laminated horse Kentucky saddle-seat charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+narragansett+pacer+card?s=breed-american-saddlebred"
                    amazonLabel="Browse horse stall-door Narragansett Pacer cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+american+saddlebred+handbook?s=breed-american-saddlebred"
                    amazonLabel="Browse equine first-owner american-saddlebred handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'hanoverian' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the hanoverian barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Celle State Stud 1735 Lower Saxony origin, post-WWII
                  Thoroughbred / Trakehner sport-discipline refinement,
                  and first-time-owner notes — a laminated horse Celle
                  State Stud chart, a horse stall-door Lower Saxony
                  sport card, and an equine first-owner hanoverian
                  handbook. Educational barn searches only. They are
                  not a ranked tack list, they are not a dressage-
                  overview hop, they are not a first-aid-kit hop, and
                  they do not replace a veterinarian. Horses.com does
                  not sell insurance. Horses.com earns a commission
                  on qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+celle+state+stud+chart?s=breed-hanoverian"
                    amazonLabel="Browse laminated horse Celle State Stud charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+lower+saxony+sport+card?s=breed-hanoverian"
                    amazonLabel="Browse horse stall-door Lower Saxony sport cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+hanoverian+handbook?s=breed-hanoverian"
                    amazonLabel="Browse equine first-owner hanoverian handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'holsteiner' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the holsteiner barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  13th-century Elbe River marsh-horse origin, post-WWII
                  show-jumping specialist refinement, and first-time-
                  owner notes — a laminated horse Elbe marsh Holstein
                  chart, a horse stall-door show-jumping specialist
                  card, and an equine first-owner holsteiner handbook.
                  Educational barn searches only. They are not a ranked
                  tack list, they are not a dressage-overview hop, they
                  are not a first-aid-kit hop, and they do not replace
                  a veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying purchases
                  at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+elbe+marsh+holstein+chart?s=breed-holsteiner"
                    amazonLabel="Browse laminated horse Elbe marsh Holstein charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+show+jumping+specialist+card?s=breed-holsteiner"
                    amazonLabel="Browse horse stall-door show-jumping specialist cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+holsteiner+handbook?s=breed-holsteiner"
                    amazonLabel="Browse equine first-owner holsteiner handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'dutch-warmblood' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the dutch-warmblood barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  post-WWII KWPN Gelderlander / Groningen origin,
                  Thoroughbred / Hanoverian / Holsteiner performance-
                  tested copy, and first-time-owner notes — a laminated
                  horse KWPN Gelderlander chart, a horse stall-door
                  Groningen performance card, and an equine first-owner
                  dutch-warmblood handbook. Educational barn searches
                  only. They are not a ranked tack list, they are not
                  a dressage-overview hop, they are not a first-aid-kit
                  hop, and they do not replace a veterinarian.
                  Horses.com does not sell insurance. Horses.com earns
                  a commission on qualifying purchases at no extra cost
                  to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+kwpn+gelderlander+chart?s=breed-dutch-warmblood"
                    amazonLabel="Browse laminated horse KWPN Gelderlander charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+groningen+performance+card?s=breed-dutch-warmblood"
                    amazonLabel="Browse horse stall-door Groningen performance cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+dutch+warmblood+handbook?s=breed-dutch-warmblood"
                    amazonLabel="Browse equine first-owner dutch-warmblood handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'oldenburg' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the oldenburg barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  17th-century Count Anton Günther carriage-stock
                  origin, Iberian / Neapolitan modernization to a
                  sport-horse type, and first-time-owner notes — a
                  laminated horse Anton Günther Oldenburg chart, a
                  horse stall-door Iberian Neapolitan card, and an
                  equine first-owner oldenburg handbook. Educational
                  barn searches only. They are not a ranked tack list,
                  they are not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying purchases
                  at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+anton+gunther+oldenburg+chart?s=breed-oldenburg"
                    amazonLabel="Browse laminated horse Anton Günther Oldenburg charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+iberian+neapolitan+card?s=breed-oldenburg"
                    amazonLabel="Browse horse stall-door Iberian Neapolitan cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+oldenburg+handbook?s=breed-oldenburg"
                    amazonLabel="Browse equine first-owner oldenburg handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'trakehner' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the trakehner barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  1732 Trakehnen Stud / King Frederick William I
                  cavalry-remount origin, closed book that accepts
                  only Trakehner / Thoroughbred / Arabian / Anglo-Arab
                  blood, and first-time-owner notes — a laminated
                  horse Trakehnen 1732 stud chart, a horse stall-door
                  East Prussia closed-book card, and an equine first-
                  owner trakehner handbook. Educational barn searches
                  only. They are not a ranked tack list, they are not
                  a dressage-overview hop, they are not a first-aid-kit
                  hop, and they do not replace a veterinarian.
                  Horses.com does not sell insurance. Horses.com earns
                  a commission on qualifying purchases at no extra cost
                  to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+trakehnen+1732+stud+chart?s=breed-trakehner"
                    amazonLabel="Browse laminated horse Trakehnen 1732 stud charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+east+prussia+closed+book+card?s=breed-trakehner"
                    amazonLabel="Browse horse stall-door East Prussia closed-book cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+trakehner+handbook?s=breed-trakehner"
                    amazonLabel="Browse equine first-owner trakehner handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'selle-francais' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the selle-francais barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  1958 French regional half-bred merge (Anglo-Norman /
                  Vendéen / Charolais), Thoroughbred / Anglo-Arab
                  show-jumping refinement, and first-time-owner notes
                  — a laminated horse Anglo-Norman Vendéen chart, a
                  horse stall-door Charolais 1958 studbook card, and
                  an equine first-owner selle-francais handbook.
                  Educational barn searches only. They are not a
                  ranked tack list, they are not a dressage-overview
                  hop, they are not a first-aid-kit hop, and they do
                  not replace a veterinarian. Horses.com does not sell
                  insurance. Horses.com earns a commission on
                  qualifying purchases at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+anglo+norman+vendeen+chart?s=breed-selle-francais"
                    amazonLabel="Browse laminated horse Anglo-Norman Vendéen charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+charolais+1958+studbook+card?s=breed-selle-francais"
                    amazonLabel="Browse horse stall-door Charolais 1958 studbook cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+selle+francais+handbook?s=breed-selle-francais"
                    amazonLabel="Browse equine first-owner selle-francais handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'westphalian' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the westphalian barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Warendorf State Stud 1826 Westphalia origin,
                  Hanoverian-studbook tie for dressage and jumping,
                  and first-time-owner notes — a laminated horse
                  Warendorf 1826 stud chart, a horse stall-door
                  Westphalia Hanoverian-tie card, and an equine
                  first-owner westphalian handbook. Educational barn
                  searches only. They are not a ranked tack list, they
                  are not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying purchases
                  at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+warendorf+1826+stud+chart?s=breed-westphalian"
                    amazonLabel="Browse laminated horse Warendorf 1826 stud charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+westphalia+hanoverian+tie+card?s=breed-westphalian"
                    amazonLabel="Browse horse stall-door Westphalia Hanoverian-tie cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+westphalian+handbook?s=breed-westphalian"
                    amazonLabel="Browse equine first-owner westphalian handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'belgian-warmblood' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the belgian-warmblood barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  1955 BWP sport-horse studbook founded independent
                  from the Belgian Draft, Holsteiner / Hanoverian /
                  Selle Français / Thoroughbred refinement for show
                  jumping, and first-time-owner notes — a laminated
                  horse BWP 1955 stud chart, a horse stall-door BWP
                  draft-independent card, and an equine first-owner
                  belgian-warmblood handbook. Educational barn
                  searches only. They are not a ranked tack list, they
                  are not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying purchases
                  at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+bwp+1955+stud+chart?s=breed-belgian-warmblood"
                    amazonLabel="Browse laminated horse BWP 1955 stud charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+bwp+draft+independent+card?s=breed-belgian-warmblood"
                    amazonLabel="Browse horse stall-door BWP draft-independent cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+belgian+warmblood+handbook?s=breed-belgian-warmblood"
                    amazonLabel="Browse equine first-owner belgian-warmblood handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'tennessee-walking-horse' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the tennessee-walking-horse barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Tennessee Bluegrass running-walk origin from
                  Narragansett Pacer / Canadian Pacer / Standardbred /
                  Thoroughbred / Morgan crosses, the TWHBEA four-beat
                  running walk, and first-time-owner notes — a
                  laminated horse TWHBEA running-walk chart, a horse
                  stall-door Tennessee Bluegrass card, and an equine
                  first-owner tennessee-walking handbook. Educational
                  barn searches only. They are not a ranked tack list,
                  they are not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying purchases
                  at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+twhbea+running+walk+chart?s=breed-tennessee-walking-horse"
                    amazonLabel="Browse laminated horse TWHBEA running-walk charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+tennessee+bluegrass+card?s=breed-tennessee-walking-horse"
                    amazonLabel="Browse horse stall-door Tennessee Bluegrass cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+tennessee+walking+handbook?s=breed-tennessee-walking-horse"
                    amazonLabel="Browse equine first-owner tennessee-walking handbooks on Amazon →"
                  />
                </div>
              </div>
            ) : null}

            {breed.slug === 'missouri-fox-trotter' ? (
              <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
                  Shop the missouri-fox-trotter barn kit
                </div>
                <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                  These Amazon category searches match the on-page
                  Ozark Mountains 1800s fox-trot origin from Morgan /
                  Thoroughbred / Arabian / Tennessee Walker crosses,
                  the inherited diagonal fox trot for rough terrain,
                  and first-time-owner notes — a laminated horse
                  Ozark fox-trot chart, a horse stall-door Missouri
                  1800s-walker card, and an equine first-owner
                  missouri-fox-trotter handbook. Educational barn
                  searches only. They are not a ranked tack list, they
                  are not a dressage-overview hop, they are not a
                  first-aid-kit hop, and they do not replace a
                  veterinarian. Horses.com does not sell insurance.
                  Horses.com earns a commission on qualifying purchases
                  at no extra cost to you.
                </p>
                <AffiliateDisclosure variant="inline" siteId="horses-com" />
                <div className="flex flex-col gap-3 mt-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/laminated+horse+ozark+fox+trot+chart?s=breed-missouri-fox-trotter"
                    amazonLabel="Browse laminated horse Ozark fox-trot charts on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/horse+stall+door+missouri+1800s+walker+card?s=breed-missouri-fox-trotter"
                    amazonLabel="Browse horse stall-door Missouri 1800s-walker cards on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/equine+first+owner+missouri+fox+trotter+handbook?s=breed-missouri-fox-trotter"
                    amazonLabel="Browse equine first-owner missouri-fox-trotter handbooks on Amazon →"
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
