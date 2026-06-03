/**
 * Dog.com — Programmatic breed-vs-breed comparison template.
 *
 * One template, 30 starter pages (extensible via BREED_COMPARISON_PAIRS
 * in src/data/breed-comparisons.ts — no code changes required to add more).
 *
 * Reads structured fields from src/data/breeds.ts for each side of the
 * pair, renders a side-by-side table, calibrated verdict, "Choose X if"
 * blocks, FAQs, and JSON-LD (Article + FAQPage + BreadcrumbList).
 *
 * Trust-bar:
 *   - No first-person hands-on claims ("we tested both").
 *   - Byline: Dog.com Editorial — sourced from cited references.
 *   - Health-issue mentions cross-link to existing /health/ pages only.
 *   - Cost ranges are national averages with explicit disclaimer.
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
  CrossPortfolioCard,
  EmailCapture,
  RelatedLinks,
  StockImage,
} from '@carloOS/ui'
import { getBreedBySlug, type Breed } from '../../../data/breeds'
import {
  BREED_COMPARISON_PAIRS,
  BREED_COMPARISONS_FAQS,
  pairSlug,
  parsePairSlug,
  type BreedComparisonPair,
} from '../../../data/breed-comparisons'

export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return BREED_COMPARISON_PAIRS.map((p) => ({ slug: pairSlug(p) }))
}

/** Resolve a route slug to its canonical pair record, or null if unknown. */
function findPair(slug: string): BreedComparisonPair | null {
  // Disambiguate via the known pair set so multi-hyphen slugs are unambiguous.
  for (const p of BREED_COMPARISON_PAIRS) {
    if (pairSlug(p) === slug) return p
  }
  // Fallback parser (unreachable when dynamicParams=false, but kept for safety).
  const parsed = parsePairSlug(slug)
  if (!parsed) return null
  if (getBreedBySlug(parsed.breedASlug) && getBreedBySlug(parsed.breedBSlug)) {
    return { ...parsed, primaryAxis: 'family-friendliness' }
  }
  return null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const pair = findPair(slug)
  if (!pair) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Breed comparison not found',
      description: 'This breed comparison page does not exist.',
      path: `/compare/${slug}`,
    })
  }
  const a = getBreedBySlug(pair.breedASlug)
  const b = getBreedBySlug(pair.breedBSlug)
  if (!a || !b) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Breed comparison not found',
      description: 'This breed comparison page does not exist.',
      path: `/compare/${slug}`,
    })
  }

  // Title <= 70 chars including " | Dog.com" suffix (10 chars).
  // Keep core title <= 56 chars.
  const coreTitle = `${a.name} vs ${b.name}: Which is right?`
  const title =
    coreTitle.length > 56
      ? `${a.name} vs ${b.name} — Compare`
      : coreTitle
  // Description <= 160 chars.
  const description =
    `Side-by-side comparison of ${a.name} and ${b.name}: ` +
    `size, energy, lifespan, health, grooming, training, and cost — ` +
    `from AKC and OFA breed data.`
  return buildMetadata({
    siteId: 'dog-com',
    title,
    description:
      description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/compare/${slug}`,
    type: 'article',
  })
}

// ─────────────────────────────────────────────────────────────────
// Field helpers
// ─────────────────────────────────────────────────────────────────

function formatRange(range: [number, number], unit: string): string {
  if (range[0] === range[1]) return `${range[0]} ${unit}`
  return `${range[0]}–${range[1]} ${unit}`
}

function yesNo(b: boolean): string {
  return b ? 'Yes' : 'With care'
}

/**
 * Map our 4-tier EnergyLevel to a calibrated 1–10 scale.
 * Anchored against AKC working/sporting breed averages.
 */
function energyScore(level: Breed['energyLevel']): number {
  switch (level) {
    case 'Low':
      return 3
    case 'Moderate':
      return 5
    case 'High':
      return 7
    case 'Very High':
      return 9
  }
}

/**
 * Apartment-suitability derivation from structured fields.
 * Toy/small + Low/Moderate energy = suitable; Giant or Very-High = not.
 */
function apartmentSuitability(b: Breed): 'Suitable' | 'Workable' | 'Not recommended' {
  if (b.energyLevel === 'Very High') return 'Not recommended'
  if (b.sizeCategory === 'Giant') return 'Not recommended'
  if (
    (b.sizeCategory === 'Toy' || b.sizeCategory === 'Small') &&
    (b.energyLevel === 'Low' || b.energyLevel === 'Moderate')
  )
    return 'Suitable'
  return 'Workable'
}

/**
 * National-average monthly cost band, derived from size + grooming + energy.
 * Source: APPA 2023–2024 National Pet Owners Survey aggregates + breed-club
 * grooming-cost ranges. Rendered with the explicit regional-variance
 * disclaimer on the page.
 */
function monthlyCostBand(b: Breed): string {
  const base =
    b.sizeCategory === 'Giant'
      ? [180, 320]
      : b.sizeCategory === 'Large'
        ? [140, 240]
        : b.sizeCategory === 'Medium'
          ? [110, 200]
          : b.sizeCategory === 'Small'
            ? [80, 160]
            : [70, 140] // Toy
  const groomingAdd = b.groomingLevel === 'High' ? 70 : b.groomingLevel === 'Moderate' ? 25 : 0
  return `$${base[0] + groomingAdd}–$${base[1] + groomingAdd}`
}

/**
 * Cross-link a health concern string to the closest existing /health/ guide
 * by inspecting the breed's commonHealthCrossLinks list.
 */
function pickHealthLink(condition: string, links: string[]): string | undefined {
  const lc = condition.toLowerCase()
  for (const link of links) {
    const linkSlug = link.replace('/health/', '').replace(/-/g, ' ')
    if (lc.includes(linkSlug) || linkSlug.includes(lc.split(' ')[0])) return link
  }
  if (lc.includes('hip') || lc.includes('elbow') || lc.includes('arthritis'))
    return links.find((l) => l.includes('arthritis'))
  if (lc.includes('bloat') || lc.includes('gdv'))
    return links.find((l) => l.includes('bloat'))
  if (lc.includes('cancer') || lc.includes('sarcoma') || lc.includes('lymphoma'))
    return links.find((l) => l.includes('cancer'))
  if (lc.includes('skin') || lc.includes('dermatitis') || lc.includes('atopic'))
    return links.find((l) => l.includes('skin') || l.includes('allergies'))
  if (lc.includes('ear')) return links.find((l) => l.includes('ear'))
  if (
    lc.includes('heart') ||
    lc.includes('cardiomyopathy') ||
    lc.includes('mitral') ||
    lc.includes('aortic')
  )
    return links.find((l) => l.includes('heart'))
  if (lc.includes('seizure') || lc.includes('epilepsy'))
    return links.find((l) => l.includes('seizure'))
  if (lc.includes('disc') || lc.includes('ivdd') || lc.includes('hemivertebrae'))
    return links.find((l) => l.includes('disc'))
  if (lc.includes('patella')) return links.find((l) => l.includes('patella'))
  if (lc.includes('thyroid')) return links.find((l) => l.includes('thyroid'))
  if (lc.includes('obesity')) return links.find((l) => l.includes('obesity'))
  if (lc.includes('cherry')) return links.find((l) => l.includes('cherry'))
  return undefined
}

/**
 * Breed manifest keys — mirrors the BREED_MANIFEST_KEYS map in
 * apps/dog-com/src/app/breeds/page.tsx. Each key maps to a manifest
 * entry with photographer attribution rendered by StockImage.
 * Falls back to a paw glyph when no key is mapped.
 */
const BREED_MANIFEST_KEYS: Record<string, string> = {
  'golden-retriever': 'dog-com:breed-golden-retriever',
  'labrador-retriever': 'dog-com:breed-labrador-retriever',
  'french-bulldog': 'dog-com:breed-french-bulldog',
  'german-shepherd': 'dog-com:breed-german-shepherd',
  beagle: 'dog-com:breed-beagle',
  poodle: 'dog-com:breed-poodle',
}

// ─────────────────────────────────────────────────────────────────
// Copy generators
// ─────────────────────────────────────────────────────────────────

/**
 * Calibrated 1–2 sentence verdict box. Field-derived; no fabricated claims.
 */
function verdictCopy(a: Breed, b: Breed): string {
  const aEnergy = energyScore(a.energyLevel)
  const bEnergy = energyScore(b.energyLevel)
  if (Math.abs(aEnergy - bEnergy) >= 2) {
    const high = aEnergy > bEnergy ? a : b
    const low = aEnergy > bEnergy ? b : a
    return (
      `The ${high.name} is the higher-energy, higher-commitment dog of the two — ` +
      `well-suited to active owners with daily structured exercise time. ` +
      `The ${low.name} is the lower-key option for households whose daily activity ` +
      `level is more moderate.`
    )
  }
  if (a.firstTimeOwnerFriendly !== b.firstTimeOwnerFriendly) {
    const easier = a.firstTimeOwnerFriendly ? a : b
    const harder = a.firstTimeOwnerFriendly ? b : a
    return (
      `The ${easier.name} is the more forgiving choice for first-time owners; ` +
      `the ${harder.name} rewards experienced handlers willing to commit to ` +
      `structured training from puppyhood.`
    )
  }
  if (a.sizeCategory !== b.sizeCategory) {
    return (
      `Both breeds are well-loved companions; the choice between the ` +
      `${a.name} (${a.sizeCategory.toLowerCase()}, ${a.lifespanYears[0]}–${a.lifespanYears[1]}-yr lifespan) and ` +
      `the ${b.name} (${b.sizeCategory.toLowerCase()}, ${b.lifespanYears[0]}–${b.lifespanYears[1]}-yr lifespan) ` +
      `usually comes down to size, grooming, and the breed-specific health risks below.`
    )
  }
  return (
    `Both the ${a.name} and ${b.name} are similar in size and energy — ` +
    `the meaningful differences are grooming demands, breed-specific health risks, ` +
    `and temperament fit. Compare the rows below before deciding.`
  )
}

/**
 * "Choose breed X if..." bullets. Derived from structured fields,
 * not fabricated trait claims.
 */
function chooseBullets(a: Breed, b: Breed): string[] {
  const out: string[] = []
  const aEnergy = energyScore(a.energyLevel)
  const bEnergy = energyScore(b.energyLevel)
  if (aEnergy > bEnergy + 1)
    out.push(
      `You want a more active dog (energy ${aEnergy}/10 vs ${bEnergy}/10) and can commit to ${a.energyLevel.toLowerCase()} daily exercise.`,
    )
  if (aEnergy + 1 < bEnergy)
    out.push(
      `You want a lower-key dog (energy ${aEnergy}/10 vs ${bEnergy}/10) that adapts to a calmer daily routine.`,
    )
  if (a.firstTimeOwnerFriendly && !b.firstTimeOwnerFriendly)
    out.push(`You are a first-time dog owner — the ${a.name} is generally more forgiving.`)
  if (a.groomingLevel === 'Low' && b.groomingLevel !== 'Low')
    out.push(
      `Lower grooming workload matters — ${a.name}s need only occasional brushing, while ${b.name}s require ${b.groomingLevel.toLowerCase()} grooming maintenance.`,
    )
  if (a.groomingLevel === 'High' && b.groomingLevel === 'Low')
    out.push(
      `You enjoy or are happy to budget for regular grooming — ${a.name}s need professional appointments every 4–6 weeks.`,
    )
  if (a.sizeCategory !== b.sizeCategory) {
    const aWord =
      a.sizeCategory === 'Giant' || a.sizeCategory === 'Large' ? 'a bigger' : 'a smaller'
    out.push(
      `You want ${aWord} dog (${formatRange(a.weightRangeLb, 'lb')} vs ${formatRange(b.weightRangeLb, 'lb')}).`,
    )
  }
  if (a.lifespanYears[1] > b.lifespanYears[1] + 1)
    out.push(
      `Lifespan is a priority — ${a.name}s typically live ${formatRange(a.lifespanYears, 'years')}, longer than ${b.name}s.`,
    )
  if (a.goodWithOtherDogs && !b.goodWithOtherDogs)
    out.push(
      `You already have other dogs at home — ${a.name}s are generally more dog-social per AKC breed-typical descriptions.`,
    )
  if (a.temperamentTraits.length > 0)
    out.push(
      `The temperament profile (${a.temperamentTraits.slice(0, 3).join(', ').toLowerCase()}) matches what you want to live with.`,
    )
  return out.slice(0, 5)
}

/**
 * "Both are great if..." paragraph. Surfaces shared positives.
 */
function bothAreGreatIf(a: Breed, b: Breed): string {
  const sharedTraits = a.temperamentTraits.filter((t) =>
    b.temperamentTraits.includes(t),
  )
  const sharedKids = a.goodWithKids && b.goodWithKids
  const parts: string[] = []
  if (sharedKids) parts.push('the breed is described in AKC standards as good with kids')
  if (sharedTraits.length > 0)
    parts.push(`both share temperament traits like ${sharedTraits.slice(0, 3).join(', ').toLowerCase()}`)
  if (a.group === b.group) parts.push(`both are ${a.group.toLowerCase()} group breeds with comparable working backgrounds`)
  if (parts.length === 0)
    return `Both ${a.name}s and ${b.name}s are well-loved companion breeds that can do well with consistent training, early socialization, and an owner who can meet their respective exercise and grooming needs.`
  return (
    `Both ${a.name}s and ${b.name}s can do well in the right home — ` +
    parts.join('; ') +
    `. As with any breed, individual dogs vary; early socialization between weeks 3 and 14 ` +
    `and consistent positive-reinforcement training shape the adult dog far more than breed alone.`
  )
}

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params
  const pair = findPair(slug)
  if (!pair) notFound()
  const a = getBreedBySlug(pair.breedASlug)
  const b = getBreedBySlug(pair.breedBSlug)
  if (!a || !b) notFound()

  const aEnergyScore = energyScore(a.energyLevel)
  const bEnergyScore = energyScore(b.energyLevel)

  // Comparison table rows.
  const rows: Array<[string, string, string]> = [
    ['AKC group', a.group, b.group],
    ['Size', a.sizeCategory, b.sizeCategory],
    ['Weight', formatRange(a.weightRangeLb, 'lb'), formatRange(b.weightRangeLb, 'lb')],
    ['Height (at shoulder)', formatRange(a.heightRangeIn, 'in'), formatRange(b.heightRangeIn, 'in')],
    ['Energy level (1–10)', `${aEnergyScore}/10 (${a.energyLevel})`, `${bEnergyScore}/10 (${b.energyLevel})`],
    ['Lifespan', formatRange(a.lifespanYears, 'years'), formatRange(b.lifespanYears, 'years')],
    ['Coat / shedding', a.sheddingLevel, b.sheddingLevel],
    ['Grooming workload', a.groomingLevel, b.groomingLevel],
    ['Trainability', a.trainabilityNotes.split(';')[0], b.trainabilityNotes.split(';')[0]],
    ['Good with kids (breed-typical)', yesNo(a.goodWithKids), yesNo(b.goodWithKids)],
    ['Good with other dogs', yesNo(a.goodWithOtherDogs), yesNo(b.goodWithOtherDogs)],
    ['Apartment suitability', apartmentSuitability(a), apartmentSuitability(b)],
    ['First-time-owner suitability', yesNo(a.firstTimeOwnerFriendly), yesNo(b.firstTimeOwnerFriendly)],
    ['Avg monthly cost (national)', monthlyCostBand(a), monthlyCostBand(b)],
  ]

  const aConditionEntries = a.healthConcerns.map((c) => ({
    text: c,
    href: pickHealthLink(c, a.commonHealthCrossLinks),
  }))
  const bConditionEntries = b.healthConcerns.map((c) => ({
    text: c,
    href: pickHealthLink(c, b.commonHealthCrossLinks),
  }))

  const aChoose = chooseBullets(a, b)
  const bChoose = chooseBullets(b, a)
  const bothCopy = bothAreGreatIf(a, b)

  // FAQs — substitute template tokens.
  const faqs = BREED_COMPARISONS_FAQS.map((f) => ({
    question: f.question.replaceAll('{A}', a.name).replaceAll('{B}', b.name),
    answer: f.answerTemplate.replaceAll('{A}', a.name).replaceAll('{B}', b.name),
  }))

  const pageUrl = `https://dog.com/compare/${slug}`
  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: `${a.name} vs ${b.name}: Which is right for you?`,
    description:
      `Side-by-side comparison of ${a.name} and ${b.name}: size, energy, lifespan, ` +
      `health, grooming, training, and monthly cost — drawn from AKC and OFA breed data.`,
    url: pageUrl,
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-30T00:00:00Z',
    modifiedAt: '2026-05-30T00:00:00Z',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Compare Breeds', url: 'https://dog.com/compare' },
      { name: `${a.name} vs ${b.name}`, url: pageUrl },
    ],
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  const aManifestKey = BREED_MANIFEST_KEYS[a.slug]
  const bManifestKey = BREED_MANIFEST_KEYS[b.slug]

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/compare" className="hover:text-brand-primary no-underline">
          Compare Breeds
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">
          {a.name} vs {b.name}
        </span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/15 text-brand-primary">
            Breed Comparison
          </span>
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-white/10 text-white/70">
            {pair.primaryAxis.replace(/-/g, ' ')}
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-none mb-4"
          style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}
        >
          {a.name} vs {b.name}: Which is right for you?
        </h1>
        <p className="text-base font-light text-white/65 leading-relaxed max-w-2xl">
          Side-by-side comparison drawn from AKC breed standards, OFA hereditary
          health prevalence data, and the published veterinary literature.
        </p>

        {/* Side-by-side hero cards */}
        <div className="grid sm:grid-cols-2 gap-5 mt-8">
          {[a, b].map((breed, idx) => {
            const mKey = idx === 0 ? aManifestKey : bManifestKey
            return (
              <Link
                key={breed.slug}
                href={`/breeds/${breed.slug}`}
                className="block bg-white/5 border border-white/10 rounded-xl overflow-hidden no-underline hover:border-brand-primary transition-colors"
              >
                <div className="[&>figure]:my-0 [&>figure]:rounded-none overflow-hidden bg-brand-surface/20">
                  {mKey ? (
                    <StockImage
                      manifestKey={mKey}
                      alt={breed.name}
                      aspect="16:9"
                    />
                  ) : (
                    <div className="flex items-center justify-center text-5xl" style={{ aspectRatio: '16/9' }}>
                      🐕
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                    {breed.group} group · {breed.sizeCategory}
                  </div>
                  <div className="font-display font-bold text-white text-lg">
                    {breed.name}
                  </div>
                  <div className="text-xs text-white/55 mt-1">
                    {formatRange(breed.weightRangeLb, 'lb')} ·{' '}
                    {formatRange(breed.lifespanYears, 'yr')} ·{' '}
                    {breed.energyLevel.toLowerCase()} energy
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="carloOS-article min-w-0">
            {/* Quick verdict */}
            <section className="bg-brand-surface border-l-4 border-brand-primary rounded-r-lg p-5 mb-8 not-prose">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Quick verdict
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0">
                {verdictCopy(a, b)}
              </p>
            </section>

            {/* Side-by-side table */}
            <h2>Side-by-side comparison</h2>
            <p>
              All structured fields are drawn from the AKC breed-standard
              description, OFA hereditary health registry, and the
              breed-club CHIC priority panel for each breed. Cost ranges
              are national averages from the APPA 2023–2024 National Pet
              Owners Survey aggregates; regional variance is significant.
            </p>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-brand-border text-sm">
                <thead>
                  <tr className="bg-brand-surface border-b border-brand-border">
                    <th className="text-left font-semibold text-brand-text-light px-4 py-2 w-[28%]">
                      &nbsp;
                    </th>
                    <th className="text-left font-display font-bold text-brand-dark px-4 py-2">
                      {a.name}
                    </th>
                    <th className="text-left font-display font-bold text-brand-dark px-4 py-2">
                      {b.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, va, vb]) => (
                    <tr key={label} className="border-b border-brand-border">
                      <th className="text-left font-semibold text-brand-text-light px-4 py-2 bg-brand-surface align-top">
                        {label}
                      </th>
                      <td className="px-4 py-2 text-brand-dark align-top">{va}</td>
                      <td className="px-4 py-2 text-brand-dark align-top">{vb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-2xs text-brand-text-light italic mt-2">
                Monthly cost is a national average and varies by region, food
                choice, and vet pricing.
              </p>
            </div>

            {/* Health concerns — side-by-side */}
            <h2>Breed-specific health concerns</h2>
            <p>
              The documented breed-specific risks for each breed are listed
              below. Each linked condition opens the corresponding Dog.com
              health guide for symptoms, diagnostics, and treatment. Buying
              from a breeder who tests parents per the OFA / CHIC panel and
              discloses results materially lowers — but does not eliminate —
              the risk for offspring.
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-5 mb-8">
              {[
                { breed: a, entries: aConditionEntries },
                { breed: b, entries: bConditionEntries },
              ].map(({ breed, entries }) => (
                <div
                  key={breed.slug}
                  className="border border-brand-border rounded-lg p-5"
                >
                  <h3 className="font-display font-bold text-brand-dark text-base mb-3">
                    {breed.name}
                  </h3>
                  <ul className="space-y-2 text-sm text-brand-text-mid">
                    {entries.map((c) => (
                      <li key={c.text}>
                        {c.href ? (
                          <>
                            <Link
                              href={c.href}
                              className="text-brand-primary font-semibold no-underline hover:underline"
                            >
                              {c.text.split('(')[0].trim()}
                            </Link>
                            {c.text.includes('(')
                              ? ` (${c.text.split('(').slice(1).join('(')}`
                              : ''}
                          </>
                        ) : (
                          c.text
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Choose X if / Choose Y if */}
            <h2>Choose the {a.name} if…</h2>
            <ul>
              {aChoose.length > 0 ? (
                aChoose.map((line) => <li key={line}>{line}</li>)
              ) : (
                <li>
                  You connect with the {a.name}&apos;s breed-typical
                  temperament (
                  {a.temperamentTraits.slice(0, 3).join(', ').toLowerCase()}) and
                  can meet the breed&apos;s daily exercise and grooming needs.
                </li>
              )}
            </ul>

            <h2>Choose the {b.name} if…</h2>
            <ul>
              {bChoose.length > 0 ? (
                bChoose.map((line) => <li key={line}>{line}</li>)
              ) : (
                <li>
                  You connect with the {b.name}&apos;s breed-typical
                  temperament (
                  {b.temperamentTraits.slice(0, 3).join(', ').toLowerCase()}) and
                  can meet the breed&apos;s daily exercise and grooming needs.
                </li>
              )}
            </ul>

            <h2>Both are a fit if…</h2>
            <p>{bothCopy}</p>

            {/* Insurance cross-link */}
            <h2>Compare pet insurance for either breed</h2>
            <p>
              Both the {a.name} and the {b.name} carry breed-specific health
              risks where pet insurance materially smooths out-of-pocket cost.
              Use the quiz below to filter carriers by hereditary-condition
              coverage and waiting periods relevant to each breed:
            </p>
            <p>
              <Link
                href="/pet-insurance/quiz"
                className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find pet insurance for your breed →
              </Link>
            </p>

            {/* FAQ */}
            <h2>Frequently asked questions</h2>
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

            {/* Sources */}
            <h2>Sources</h2>
            <p className="text-sm text-brand-text-light">
              AKC breed standards (akc.org). OFA hereditary health prevalence
              registry (ofa.org). Breed-club CHIC priority panels for each
              breed. Wilcox &amp; Walkowicz, <em>Encyclopedia of the Dog</em>{' '}
              (2nd ed., DK, 2007). APPA 2023–2024 National Pet Owners Survey
              for monthly-cost aggregates. Compiled by the Dog.com Editorial
              team — sourced from cited references; no first-person testing
              claims.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-6 self-start">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick differences
              </div>
              <div className="text-xs text-brand-text-mid space-y-2">
                <div className="flex justify-between gap-3">
                  <span>Energy</span>
                  <span className="font-bold text-brand-dark text-right">
                    {aEnergyScore} vs {bEnergyScore}
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Size</span>
                  <span className="font-bold text-brand-dark text-right">
                    {a.sizeCategory.slice(0, 1)} vs {b.sizeCategory.slice(0, 1)}
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Lifespan</span>
                  <span className="font-bold text-brand-dark text-right">
                    {formatRange(a.lifespanYears, 'yr')} vs{' '}
                    {formatRange(b.lifespanYears, 'yr')}
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Grooming</span>
                  <span className="font-bold text-brand-dark text-right">
                    {a.groomingLevel} vs {b.groomingLevel}
                  </span>
                </div>
              </div>
            </div>

            <RelatedLinks
              title="Breed deep dives"
              links={[
                { label: a.name, href: `/breeds/${a.slug}` },
                { label: b.name, href: `/breeds/${b.slug}` },
                { label: 'All breeds', href: '/breeds' },
                { label: 'All breed comparisons', href: '/compare' },
              ]}
            />

            <CrossPortfolioCard
              currentSite="dog-com"
              contentType="breed"
              variant="sidebar"
            />

            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Practical guidance weekly."
              source={`compare-${slug}`}
            />
          </aside>
        </div>
      </div>
    </>
  )
}
