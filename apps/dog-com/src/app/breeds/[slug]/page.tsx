/**
 * Dog.com — Programmatic breed-profile template.
 *
 * One template, ~25 breed pages. Pulls structured data from
 * src/data/breeds.ts and renders a consistent, breed-specific page
 * (~700-900 words; not thin/templated junk).
 *
 * generateStaticParams EXCLUDES any slug that already has a hand-written
 * static folder under /app/breeds/. Static routes take precedence — but
 * Next.js will throw a duplicate-segment build error if both a static
 * folder and the dynamic [slug] register the same slug, so we filter
 * proactively via EXISTING_STATIC_BREED_SLUGS.
 *
 * Renders:
 *   - Breadcrumb + hero
 *   - TL;DR
 *   - At-a-glance table
 *   - Breed-specific health concerns (linked to /health/* pages)
 *   - OFA-recommended genetic test panel
 *   - Origin + purpose
 *   - Temperament + training
 *   - Daily exercise + space needs
 *   - "Is this breed right for you?"
 *   - Cross-portfolio Find-a-Vet CTA (vets.co link)
 *   - FAQ with FAQPage JSON-LD
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
  CrossPortfolioCard,
  SchemaScript,
  EmailCapture,
  RelatedLinks,
  StockImage,
  AffiliateDisclosure,
} from '@carloOS/ui'
import {
  Breeds,
  EXISTING_STATIC_BREED_SLUGS,
  getBreedBySlug,
  getBreedInsuranceProfile,
  type Breed,
} from '../../../data/breeds'
import {
  BREED_COMPARISON_PAIRS,
  pairSlug,
} from '../../../data/breed-comparisons'

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
      siteId: 'dog-com',
      title: 'Breed Not Found',
      description: 'This breed profile does not exist.',
      path: `/breeds/${slug}`,
    })
  }

  // Title ≤ 70 chars including site suffix " | Dog.com" (10 chars).
  // 60-char target leaves headroom — keep core title ≤ 56 chars.
  const title = `${breed.name} — Health, Temperament & Care | Dog.com`
  // Description ≤ 160 chars.
  const sizeStr = breed.sizeCategory.toLowerCase()
  const lifespanStr = `${breed.lifespanYears[0]}-${breed.lifespanYears[1]} yr`
  const description =
    `${breed.name} breed guide: ${sizeStr} ${breed.group.toLowerCase()} breed, ` +
    `${lifespanStr} lifespan, ${breed.energyLevel.toLowerCase()} energy. ` +
    `Health, temperament, training & care.`

  return buildMetadata({
    siteId: 'dog-com',
    title,
    description: description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/breeds/${breed.slug}`,
    type: 'article',
  })
}

function formatRange(range: [number, number], unit: string): string {
  if (range[0] === range[1]) return `${range[0]} ${unit}`
  return `${range[0]}–${range[1]} ${unit}`
}

function yesNo(b: boolean): string {
  return b ? 'Yes' : 'With care'
}

/**
 * Per-breed "Recommended Reviews" link list — drives traffic from the breed
 * page to the monetized /reviews/* hubs. Size-derived (food choice maps to
 * sizeCategory) + universal essentials. Internal links only — no inline
 * buy-boxes (breed pages stay clinical per protect-asset policy; monetization
 * lives on the /reviews/* destinations).
 */
function buildRecommendedReviewsForBreed(
  breed: Breed,
): Array<{ label: string; href: string }> {
  const links: Array<{ label: string; href: string }> = []

  // Size-derived food review
  switch (breed.sizeCategory) {
    case 'Toy':
    case 'Small':
      links.push({
        label: 'Best Food for Small Breeds',
        href: '/reviews/best-dog-food-small-breed',
      })
      break
    case 'Large':
    case 'Giant':
      links.push({
        label: 'Best Food for Large Breeds',
        href: '/reviews/best-large-breed-dog-food',
      })
      break
    default:
      links.push({
        label: 'Best Dry Dog Food',
        href: '/reviews/best-dry-dog-food',
      })
  }

  // Universal essentials (crates sized to the breed via the destination page)
  links.push({ label: 'Best Dog Beds', href: '/reviews/best-dog-beds' })
  links.push({ label: 'Best Dog Crates', href: '/reviews/best-dog-crates' })

  // Health-need-derived (cheap pattern match against documented concerns)
  const concerns = breed.healthConcerns.join(' ').toLowerCase()
  if (/hip|elbow|joint|arthritis|cruciate|patella|dysplasia/.test(concerns)) {
    links.push({
      label: 'Best Joint Supplements',
      href: '/reviews/best-joint-supplements',
    })
  }
  if (/anxiety|fear|separation|noise/.test(concerns)) {
    links.push({ label: 'Best Dog Harnesses', href: '/reviews/best-dog-harnesses' })
  }

  return links.slice(0, 5)
}

/**
 * One breed-appropriate gear recommendation. `href` always routes a commercial
 * click through an EXISTING /go/<vendor>/<sku> handler (amazon-brand / chewy-brand
 * search SKUs — no invented vendors or ASINs) OR to an internal /reviews money
 * page when no honest single product applies. The `s=` source param tags the
 * click origin for Monetization-Bot attribution (mirrors /reviews/* CTA pattern).
 *
 * Editorial voice only — no star ratings, no review counts, no "we tested."
 * Categories are derived from the breed's own structured data (size → food/crate
 * sizing, grooming level → grooming tool, energy → activity gear) so each pick is
 * genuinely breed-appropriate rather than generic filler.
 */
interface GearPick {
  /** Short category label, e.g. "Food" */
  category: string
  /** Concrete, honest recommendation headline */
  title: string
  /** One-line editorial rationale tied to this breed */
  rationale: string
  /** Commercial /go route OR internal /reviews link */
  href: string
  /** CTA verb — "Shop" for /go, "Compare picks" for /reviews */
  cta: string
}

function enc(q: string): string {
  return encodeURIComponent(q)
}

function buildGearForBreed(breed: Breed): GearPick[] {
  const src = `breed-${breed.slug}`
  const picks: GearPick[] = []
  const small = breed.sizeCategory === 'Toy' || breed.sizeCategory === 'Small'
  const large = breed.sizeCategory === 'Large' || breed.sizeCategory === 'Giant'

  // ── Food — sized to the breed. Internal /reviews money page (editorial
  //    comparison) rather than a single fabricated product. ──
  picks.push({
    category: 'Food',
    title: small
      ? 'Small-breed formula'
      : large
        ? 'Large-breed formula'
        : 'Complete dry food',
    rationale: small
      ? `Small-breed kibble is sized for smaller mouths and calorie-dense for faster metabolisms — a fit for the ${breed.name}.`
      : large
        ? `Large-breed formulas control growth rate and support joints — important for a ${breed.sizeCategory.toLowerCase()} breed like the ${breed.name}.`
        : `A complete, life-stage-appropriate diet is the foundation of ${breed.name} health.`,
    href: small
      ? '/reviews/best-dog-food-small-breed'
      : large
        ? '/reviews/best-large-breed-dog-food'
        : '/reviews/best-dry-dog-food',
    cta: 'Compare picks',
  })

  // ── Crate — sized to the breed. Commercial /go (amazon search SKU). ──
  picks.push({
    category: 'Crate',
    title: small
      ? 'Right-sized wire crate'
      : large
        ? 'Heavy-duty / XL crate'
        : 'Wire crate with divider',
    rationale: `Pick a crate your ${breed.name} can stand, turn, and lie down in — no larger. ${
      large
        ? 'Larger breeds need a sturdier frame and a bigger footprint.'
        : 'A divider panel lets a puppy crate grow with the dog.'
    }`,
    href: `/go/amazon-brand/${enc(
      large ? 'extra large heavy duty dog crate' : `${breed.sizeCategory.toLowerCase()} dog crate divider`,
    )}?s=${src}`,
    cta: 'Shop crates',
  })

  // ── Bed — sized to the breed. Commercial /go. ──
  picks.push({
    category: 'Bed',
    title: large ? 'Orthopedic bed (large)' : 'Cushioned bed',
    rationale: large
      ? `Orthopedic foam supports the joints of heavier breeds like the ${breed.name} and helps prevent pressure sores.`
      : `A washable, right-sized bed gives the ${breed.name} a defined rest space.`,
    href: `/go/chewy-brand/${enc(
      large ? 'orthopedic large dog bed' : `${breed.sizeCategory.toLowerCase()} dog bed washable`,
    )}?s=${src}`,
    cta: 'Shop beds',
  })

  // ── Grooming — derived from grooming level. ──
  if (breed.groomingLevel === 'High' || breed.groomingLevel === 'Moderate') {
    picks.push({
      category: 'Grooming',
      title:
        breed.groomingLevel === 'High'
          ? 'Slicker brush + de-shedding tool'
          : 'Slicker brush',
      rationale:
        breed.groomingLevel === 'High'
          ? `${breed.name}s are ${breed.groomingLevel.toLowerCase()}-maintenance — regular brushing between professional grooms prevents matting.`
          : `Weekly brushing keeps a ${breed.name}'s coat healthy and cuts loose hair around the home.`,
      href: `/go/amazon-brand/${enc('slicker brush dog grooming')}?s=${src}`,
      cta: 'Shop grooming',
    })
  } else {
    // Low-grooming breeds still shed — a rubber curry / bath brush is honest.
    picks.push({
      category: 'Grooming',
      title: 'Rubber curry brush',
      rationale: `Even low-maintenance ${breed.name}s shed — a rubber curry brush lifts loose hair during a quick weekly once-over.`,
      href: `/go/amazon-brand/${enc('rubber curry dog brush short coat')}?s=${src}`,
      cta: 'Shop grooming',
    })
  }

  // ── Activity / training — derived from energy. ──
  if (breed.energyLevel === 'Very High' || breed.energyLevel === 'High') {
    picks.push({
      category: 'Activity',
      title: 'Durable chew + puzzle toys',
      rationale: `High-drive ${breed.name}s need a mental and physical outlet — tough chew and food-puzzle toys curb boredom-driven behavior.`,
      href: `/go/chewy-brand/${enc('durable dog puzzle toy')}?s=${src}`,
      cta: 'Shop toys',
    })
  } else {
    picks.push({
      category: 'Walking',
      title: 'No-pull harness',
      rationale: `A well-fitted ${breed.sizeCategory.toLowerCase()} harness makes daily walks more comfortable for the ${breed.name} than a collar alone.`,
      href: '/reviews/best-dog-harnesses',
      cta: 'Compare picks',
    })
  }

  // ── Joint support — only when the breed's documented concerns warrant it.
  //    Internal /reviews page (supplements, not prescription meds). ──
  const concerns = breed.healthConcerns.join(' ').toLowerCase()
  if (/hip|elbow|joint|arthritis|cruciate|patella|dysplasia/.test(concerns)) {
    picks.push({
      category: 'Joint support',
      title: 'Joint supplements',
      rationale: `The ${breed.name}'s documented joint risks make a vet-guided joint supplement worth discussing — compare options before buying.`,
      href: '/reviews/best-joint-supplements',
      cta: 'Compare picks',
    })
  }

  return picks
}

/**
 * Cross-link a health condition to the closest existing /health/ guide.
 * Returns href if the breed's commonHealthCrossLinks contains a matching URL,
 * otherwise undefined.
 */
function pickHealthLink(condition: string, links: string[]): string | undefined {
  const lc = condition.toLowerCase()
  for (const link of links) {
    const linkSlug = link.replace('/health/', '').replace(/-/g, ' ')
    // Loose match — substring either way.
    if (lc.includes(linkSlug) || linkSlug.includes(lc.split(' ')[0])) return link
  }
  // Fallback heuristics for common conditions.
  if (lc.includes('hip') || lc.includes('elbow') || lc.includes('arthritis'))
    return links.find((l) => l.includes('arthritis'))
  if (lc.includes('bloat') || lc.includes('gdv'))
    return links.find((l) => l.includes('bloat'))
  if (lc.includes('cancer') || lc.includes('sarcoma') || lc.includes('lymphoma'))
    return links.find((l) => l.includes('cancer'))
  if (lc.includes('skin') || lc.includes('dermatitis') || lc.includes('atopic'))
    return links.find((l) => l.includes('skin') || l.includes('allergies'))
  if (lc.includes('ear')) return links.find((l) => l.includes('ear'))
  if (lc.includes('heart') || lc.includes('cardiomyopathy') || lc.includes('mitral') || lc.includes('aortic'))
    return links.find((l) => l.includes('heart'))
  if (lc.includes('seizure') || lc.includes('epilepsy'))
    return links.find((l) => l.includes('seizure'))
  if (lc.includes('disc') || lc.includes('ivdd') || lc.includes('hemivertebrae'))
    return links.find((l) => l.includes('disc'))
  if (lc.includes('patella')) return links.find((l) => l.includes('patella'))
  if (lc.includes('thyroid'))
    return links.find((l) => l.includes('thyroid'))
  if (lc.includes('obesity')) return links.find((l) => l.includes('obesity'))
  if (lc.includes('shunt') || lc.includes('liver'))
    return links.find((l) => l.includes('liver'))
  if (lc.includes('cherry')) return links.find((l) => l.includes('cherry'))
  if (lc.includes('addison')) return links.find((l) => l.includes('addisons'))
  if (lc.includes('cushing')) return links.find((l) => l.includes('cushing'))
  if (lc.includes('pancrea')) return links.find((l) => l.includes('pancrea'))
  if (lc.includes('mega')) return links.find((l) => l.includes('mega'))
  if (lc.includes('dental') || lc.includes('teeth'))
    return links.find((l) => l.includes('dental'))
  if (lc.includes('anemia') || lc.includes('hemolytic'))
    return links.find((l) => l.includes('anemia'))
  if (lc.includes('mange')) return links.find((l) => l.includes('mange'))
  return undefined
}

function buildFAQs(breed: Breed): Array<{ question: string; answer: string }> {
  const sizeWord = breed.sizeCategory.toLowerCase()
  const energyWord = breed.energyLevel.toLowerCase()
  const groupWord = breed.group.toLowerCase()
  const lifespanStr = `${breed.lifespanYears[0]}-${breed.lifespanYears[1]} years`
  const weightStr = `${breed.weightRangeLb[0]}-${breed.weightRangeLb[1]} lb`

  const faqs: Array<{ question: string; answer: string }> = [
    {
      question: `How big does a ${breed.name} get?`,
      answer:
        `Adult ${breed.name}s typically weigh ${weightStr} and stand ${formatRange(breed.heightRangeIn, 'inches')} at the shoulder. ` +
        `They are classified as a ${sizeWord}-size ${groupWord} breed by the AKC.`,
    },
    {
      question: `How long do ${breed.name}s live?`,
      answer:
        `${breed.name} life expectancy is typically ${lifespanStr}, based on AKC breed standard data. ` +
        `Lifespan varies with genetics, weight management, dental care, and timely treatment of the breed-specific conditions listed on this page.`,
    },
    {
      question: `Are ${breed.name}s good for first-time dog owners?`,
      answer: breed.firstTimeOwnerFriendly
        ? `Yes — the ${breed.name} is generally suitable for first-time owners who can meet its exercise and grooming requirements. ${breed.trainabilityNotes}`
        : `Not typically. The ${breed.name} requires an owner who can commit to ${energyWord} daily exercise, structured training, and breed-specific socialization. ${breed.trainabilityNotes} Consider working with an experienced trainer or choosing a more forgiving breed if this is your first dog.`,
    },
    {
      question: `What health problems do ${breed.name}s have?`,
      answer:
        `The most documented breed-specific health concerns for ${breed.name}s include: ${breed.healthConcerns.slice(0, 4).join('; ')}. ` +
        `Buying from a breeder who tests parents per the OFA / breed-club CHIC panel reduces (but does not eliminate) these risks.`,
    },
  ]

  return faqs
}

/**
 * Presentational "Recommended gear" block. Editorial voice only — no ratings,
 * no review counts. The first instance on the page passes `withDisclosure` so
 * the FTC AffiliateDisclosure sits ABOVE the first commercial CTA (QC §1).
 * `/go` links open the click-tracker; /reviews links are internal money pages.
 */
function GearBlock({
  breedName,
  picks,
  withDisclosure = false,
  heading,
}: {
  breedName: string
  picks: GearPick[]
  withDisclosure?: boolean
  heading: string
}) {
  if (picks.length === 0) return null
  return (
    <section className="not-prose my-10">
      <h2 className="font-display font-black text-brand-dark tracking-tight text-2xl mb-1">
        {heading}
      </h2>
      <p className="text-sm text-brand-text-light mb-4">
        Breed-appropriate picks for the {breedName}, chosen from our editorial
        reviews. Some links are affiliate links.
      </p>
      {withDisclosure && <AffiliateDisclosure variant="inline" siteId="dog-com" />}
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {picks.map((p) => (
          <div
            key={p.category}
            className="flex flex-col border border-brand-border rounded-xl p-5 bg-white"
          >
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
              {p.category}
            </span>
            <span className="font-display font-bold text-brand-dark text-base mb-1.5">
              {p.title}
            </span>
            <p className="text-sm text-brand-text-mid leading-relaxed flex-1 mb-4">
              {p.rationale}
            </p>
            <Link
              href={p.href}
              className="inline-block self-start bg-brand-primary text-white text-sm font-semibold px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              {p.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default async function BreedTemplatePage({ params }: PageProps) {
  const { slug } = await params
  const breed = getBreedBySlug(slug)
  if (!breed) notFound()

  // Safety net: if this slug somehow has a static folder, render nothing here.
  // (Next.js routing should never deliver us this case, but defense in depth.)
  if (EXISTING_STATIC_BREED_SLUGS.has(breed.slug)) notFound()

  const faqs = buildFAQs(breed)
  const gear = buildGearForBreed(breed)

  // Build reciprocal comparison links for this breed.
  const comparisonLinks = BREED_COMPARISON_PAIRS
    .filter((p) => p.breedASlug === breed.slug || p.breedBSlug === breed.slug)
    .map((p) => {
      const otherSlug = p.breedASlug === breed.slug ? p.breedBSlug : p.breedASlug
      const otherBreed = Breeds.find((b) => b.slug === otherSlug)
      if (!otherBreed) return null
      return {
        href: `/compare/${pairSlug(p)}`,
        label: `${breed.name} vs ${otherBreed.name}`,
      }
    })
    .filter((l): l is { href: string; label: string } => l !== null)

  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: `${breed.name} — Breed Guide`,
    description:
      `Comprehensive ${breed.name} breed profile: temperament, health concerns, exercise needs, ` +
      `and care guidance based on AKC and OFA breed data.`,
    url: `https://dog.com/breeds/${breed.slug}`,
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Breeds', url: 'https://dog.com/breeds' },
      { name: breed.name, url: `https://dog.com/breeds/${breed.slug}` },
    ],
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  // Pre-resolve cross-links for each health concern.
  const conditionEntries = breed.healthConcerns.map((c) => ({
    text: c,
    href: pickHealthLink(c, breed.commonHealthCrossLinks),
  }))

  // At-a-glance rows.
  const atGlance: Array<[string, string]> = [
    ['Group', breed.group],
    ['Size', breed.sizeCategory],
    ['Weight', formatRange(breed.weightRangeLb, 'lb')],
    ['Height', formatRange(breed.heightRangeIn, 'in')],
    ['Lifespan', `${formatRange(breed.lifespanYears, 'years')}`],
    ['Energy level', breed.energyLevel],
    ['Shedding', breed.sheddingLevel],
    ['Grooming', breed.groomingLevel],
    ['Trainability', breed.trainabilityNotes.split(';')[0]],
    ['Good with kids', yesNo(breed.goodWithKids)],
    ['Good with other dogs', yesNo(breed.goodWithOtherDogs)],
    ['First-time owner friendly', yesNo(breed.firstTimeOwnerFriendly)],
  ]

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/breeds" className="hover:text-brand-primary no-underline">Breeds</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">{breed.name}</span>
      </nav>

      {/* Hero — image + dark overlay, mirrors breeds hub pattern */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 [&>figure]:my-0 [&_figure]:h-full [&_figure>div]:h-full [&_figure>div]:!rounded-none [&>div]:h-full">
          <StockImage
            manifestKey={`dog-com:breed-${breed.slug}`}
            fallbackKey="dog-com:hero"
            alt={breed.name}
            aspect="16:9"
            variant="inline"
            priority
            subtleCredit
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30"
        />
        <div className="relative z-10 flex flex-col justify-end min-h-[40vh] sm:min-h-[48vh] px-container-sm sm:px-container pt-14 pb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/20 text-brand-primary">
              {breed.group} Group
            </span>
            <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-white/10 text-white/70">
              {breed.sizeCategory} size
            </span>
            <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-white/10 text-white/70">
              {breed.energyLevel} energy
            </span>
          </div>
          <h1
            className="font-display font-black text-white tracking-tighter leading-none mb-3"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', textShadow: '0 2px 18px rgba(0,0,0,0.5)' }}
          >
            {breed.name}
          </h1>
          <p className="text-base font-light text-white/70 leading-relaxed max-w-2xl" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
            From {breed.originCountry}, originally {breed.originPurpose.charAt(0).toLowerCase() + breed.originPurpose.slice(1)}{' '}
            Adults typically weigh {formatRange(breed.weightRangeLb, 'lb')} with a lifespan of {formatRange(breed.lifespanYears, 'years')}.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="carloOS-article min-w-0">
            {/* TL;DR */}
            <section className="bg-brand-surface border-l-4 border-brand-primary rounded-r-lg p-5 mb-8 not-prose">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                TL;DR
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0">
                The <strong>{breed.name}</strong> is a {breed.sizeCategory.toLowerCase()}-size{' '}
                {breed.group.toLowerCase()} breed from {breed.originCountry}, weighing{' '}
                {formatRange(breed.weightRangeLb, 'lb')} and living{' '}
                {formatRange(breed.lifespanYears, 'years')}. Energy level is{' '}
                <strong>{breed.energyLevel.toLowerCase()}</strong>; grooming is{' '}
                <strong>{breed.groomingLevel.toLowerCase()}</strong>; shedding is{' '}
                <strong>{breed.sheddingLevel.toLowerCase()}</strong>. {breed.trainabilityNotes}{' '}
                Most documented breed-specific health concerns: {breed.healthConcerns.slice(0, 3).map((c) => c.split('(')[0].trim().toLowerCase()).join(', ')}.
              </p>
            </section>

            {/* At a glance table */}
            <h2>At a Glance</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-brand-border text-sm">
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

            {/* Recommended gear — top placement (first commercial surface;
                carries the FTC disclosure above its CTAs). */}
            <GearBlock
              breedName={breed.name}
              picks={gear}
              withDisclosure
              heading={`Recommended Gear for the ${breed.name}`}
            />

            {/* Origin + purpose */}
            <h2>Origin and Purpose</h2>
            <p>
              The {breed.name} originated in {breed.originCountry}. {breed.originPurpose}{' '}
              That working history still shapes the modern breed: temperament, energy
              level, and physical structure are all artifacts of what the breed was
              selected to do — and a {breed.name} that has no outlet for that drive is
              the most common source of behavioral problems reported by new owners.
            </p>

            {/* Inline mid-article image. Falls back to the branded category
                image until a per-breed photo is synced (Visual Bot). */}
            <div className="not-prose my-8">
              <StockImage
                manifestKey={`dog-com:breed-${breed.slug}-2`}
                fallbackKey="dog-com:category-breeds"
                alt={`${breed.name} — temperament and training`}
                aspect="16:9"
                variant="inline"
                caption={`The ${breed.name}'s temperament reflects its ${breed.group.toLowerCase()}-group working history.`}
              />
            </div>

            {/* Temperament + training */}
            <h2>Temperament and Training</h2>
            <p>
              Breed-typical temperament traits include:{' '}
              <strong>{breed.temperamentTraits.join(', ').toLowerCase()}</strong>. As with
              any breed, individuals vary; these are tendencies, not guarantees. Early
              socialization (the 3–14 week window) and consistent positive-reinforcement
              training shape the adult dog far more than breed alone.
            </p>
            <p>
              <strong>Training notes — </strong>
              {breed.trainabilityNotes} If you have not raised a similar
              type of dog before, plan to work with a credentialed trainer (CPDT-KA,
              KPA-CTP, or IAABC) from puppyhood, not after problems develop.
            </p>

            {/* Daily exercise + space needs */}
            <h2>Daily Exercise and Space Needs</h2>
            <p>
              {breed.energyLevel === 'Very High'
                ? `${breed.name}s need at least 90 minutes of vigorous exercise daily — purposeful work like fetch, structured walks, swimming, or a dog sport (agility, scent work, herding trials, dock diving). A leashed walk alone is not enough. Without sufficient outlet, this breed develops anxiety, destructive behavior, or compulsive habits.`
                : breed.energyLevel === 'High'
                  ? `${breed.name}s need 60–90 minutes of meaningful exercise daily, ideally split between physical activity and mental work (training games, food puzzles, scent work). Apartment living is feasible for the smaller representatives of this breed but requires consistent off-property outings.`
                  : breed.energyLevel === 'Moderate'
                    ? `${breed.name}s do well on 30–60 minutes of daily exercise — a brisk walk plus active playtime is typically sufficient. They adapt to apartments or smaller homes when given regular outings.`
                    : `${breed.name}s have modest exercise needs — 20–30 minutes of daily walking, plus opportunities to sniff and engage their environment. They are well-suited to apartments and to lower-mobility owners, though weight management requires careful portion control.`}
            </p>

            {/* Health concerns */}
            <h2>Health Concerns</h2>
            <p>
              The {breed.name} has well-documented breed-specific health risks. The list
              below is sourced from AKC breed-club priority panels, OFA prevalence data,
              and the published veterinary literature. Buying from a breeder who tests
              parents on the OFA / CHIC panel and discloses results materially lowers
              (but does not eliminate) the risk for offspring.
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

            {/* OFA genetic test panel */}
            {breed.knownGeneticTests && breed.knownGeneticTests.length > 0 && (
              <>
                <h2>Recommended OFA Genetic Test Panel</h2>
                <p>
                  When evaluating a {breed.name} breeder, ask for documented results on
                  the following tests — these align with the OFA Canine Health
                  Information Center (CHIC) recommendations for this breed:
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
                  Verify all clearances at <a href="https://ofa.org" target="_blank" rel="noopener noreferrer">ofa.org</a> using
                  the dog&apos;s registered name — pedigree paperwork from a breeder is not a substitute for the searchable OFA record.
                </p>
              </>
            )}

            {/* Is this breed right for you */}
            <h2>Is the {breed.name} Right for You?</h2>
            <p>
              The {breed.name}{' '}
              {breed.firstTimeOwnerFriendly
                ? 'is generally workable for a first-time dog owner who has done their research and can meet the breed\'s daily exercise and grooming needs.'
                : 'is not recommended as a first dog. The breed requires an owner who has previously raised, trained, and managed a similar type of dog, or is committed to working with a credentialed trainer from week one.'}{' '}
              Honest questions to ask before bringing one home:
            </p>
            <ul>
              <li>Can you commit to {breed.energyLevel.toLowerCase()} exercise every day, including bad weather?</li>
              <li>
                Are you prepared for{' '}
                <strong>{breed.groomingLevel.toLowerCase()}</strong> grooming demands —{' '}
                {breed.groomingLevel === 'High'
                  ? 'professional grooming every 4–6 weeks plus weekly brushing'
                  : breed.groomingLevel === 'Moderate'
                    ? 'a weekly brushing and the occasional professional appointment'
                    : 'occasional brushing and an annual bath'}
                ?
              </li>
              <li>
                Can you budget for the breed-specific health risks listed above? Pet
                insurance is meaningful here, especially for genetic conditions identified before symptoms start.
              </li>
              <li>
                Do the temperament traits (
                <em>{breed.temperamentTraits.join(', ').toLowerCase()}</em>) match the dog
                you actually want to live with?
              </li>
            </ul>

            {/* Find a vet — cross-portfolio */}
            <h2>Find a Vet</h2>
            <p>
              Once you bring a {breed.name} home, line up a vet who is familiar with the
              breed&apos;s priorities — particularly the genetic conditions and screening
              tests above. Search our cross-portfolio directory:
            </p>
            <p>
              <a
                href="https://vets.co/find-a-vet"
                className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find a vet on Vets.co →
              </a>
              <a
                href="https://vets.co/telehealth"
                className="inline-block ml-3 text-sm font-semibold text-brand-primary no-underline hover:underline"
              >
                Non-emergency? Talk to a vet tonight →
              </a>
            </p>

            {/* Recommended gear — bottom placement (reinforces commercial
                surface after the reader has read the full profile). Disclosure
                already shown above the first block earlier on the page. */}
            <GearBlock
              breedName={breed.name}
              picks={gear}
              heading={`Gear & Essentials for ${breed.name} Owners`}
            />

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
                ['Group', breed.group],
                ['Size', breed.sizeCategory],
                ['Weight', formatRange(breed.weightRangeLb, 'lb')],
                ['Lifespan', formatRange(breed.lifespanYears, 'yr')],
                ['Energy', breed.energyLevel],
                ['Shedding', breed.sheddingLevel.startsWith('Hypoallergenic')
                  ? 'Low (claim — not verified)'
                  : breed.sheddingLevel],
                ['Grooming', breed.groomingLevel],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0"
                >
                  <span className="text-brand-text-light">{k}</span>
                  <span className="font-bold text-brand-dark text-right max-w-[55%]">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            {breed.commonHealthCrossLinks.length > 0 && (
              <RelatedLinks
                title="Related Health Guides"
                links={breed.commonHealthCrossLinks.slice(0, 5).map((href) => ({
                  label: href
                    .replace('/health/', '')
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase()),
                  href,
                }))}
              />
            )}

            {getBreedInsuranceProfile(breed.slug) && (
              <RelatedLinks
                title="Insurance for This Breed"
                links={[
                  {
                    label: `Is pet insurance worth it for a ${breed.name}?`,
                    href: `/breeds/${breed.slug}/insurance`,
                  },
                  { label: 'Pet insurance by breed', href: '/breeds/insurance' },
                ]}
              />
            )}

            <RelatedLinks
              title="Recommended Reviews"
              links={buildRecommendedReviewsForBreed(breed)}
            />

            {comparisonLinks.length > 0 && (
              <RelatedLinks
                title="Breed Comparisons"
                links={comparisonLinks}
              />
            )}

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
              source={`breed-${breed.slug}`}
            />
          </aside>
        </div>
      </div>
    </>
  )
}
