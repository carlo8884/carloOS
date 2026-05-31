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
  EmailCapture,
  RelatedLinks,
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
 * Racing-cluster cross-links — rendered in the sidebar only for breeds with a
 * genuine racing/competition connection, linking into the /racing module.
 * Keeps the internal-link graph honest: no racing link on breeds that don't race.
 */
const RACING_BREED_LINKS: Record<string, Array<{ label: string; href: string }>> = {
  thoroughbred: [
    { label: 'The American Triple Crown', href: '/racing/triple-crown' },
    { label: 'Bloodstock & Breeding Basics', href: '/racing/bloodstock-and-breeding' },
    { label: 'How Thoroughbred Racing Works', href: '/racing/how-horse-racing-works' },
  ],
  standardbred: [
    { label: 'How Racing Works', href: '/racing/how-horse-racing-works' },
    { label: 'Owning a Racehorse', href: '/racing/racehorse-ownership' },
  ],
  arabian: [
    { label: 'How Racing Works', href: '/racing/how-horse-racing-works' },
    { label: 'Bloodstock & Breeding Basics', href: '/racing/bloodstock-and-breeding' },
  ],
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
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/breeds" className="hover:text-brand-primary no-underline">Breeds</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">{breed.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-12">
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
      <div className="px-container sm:px-container-sm py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="carloOS-article min-w-0">
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

            {RACING_BREED_LINKS[breed.slug] && (
              <RelatedLinks
                title="Racing & Heritage"
                links={RACING_BREED_LINKS[breed.slug]}
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
