/**
 * Dog.com Breeds Index — /breeds
 * Server component. Lists all breeds from Supabase species table.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, CrossPortfolioCard, FAQAccordion } from '@carloOS/ui'
import { createServerClient } from '@carloOS/db'
import { Breeds, groupBreedsByAKCGroup, groupBreedsBySize, type SizeCategory } from '../../data/breeds'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Breed Guide — 50+ Breeds Profiled',
  description: 'Breed profiles for 50+ dog breeds. Temperament, health conditions, exercise needs, grooming requirements.',
  path: '/breeds',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Breeds', url: 'https://dog.com/breeds' },
  ],
})

// ItemList of every profiled breed — gives AI Overviews / Perplexity a
// structured, citable index of the breed cluster (GEO authority signal).
const breedListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog Breeds Profiled at Dog.com',
  numberOfItems: Breeds.length,
  itemListElement: Breeds.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    url: `https://dog.com/breeds/${b.slug}`,
  })),
}

// FAQ — grounded ONLY in facts present on this page (the breed data table,
// the AKC-group browse list, and the cross-linked hubs). No fabricated
// prevalence or numbers. Editorial voice; defers diagnostics to a vet.
// Rendered statically below AND emitted as FAQPage schema (combined into the
// server-rendered schema script so crawlers + AI surfaces see it without JS).
const FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: 'How do I choose the right dog breed?',
    answer:
      'Start with the constraints that are hardest to change: your living space, how many hours of vigorous exercise you can give daily, whether anyone in the home is sensitive to shedding, and whether this is your first dog. Then narrow by size and energy — a Very High energy herding or sporting breed (Border Collie, Australian Shepherd, Belgian Malinois) needs a job and daily work, while a Low energy companion (Bulldog, Basset Hound, Mastiff) is far more forgiving of a quiet household. Use the at-a-glance table below to compare size, lifespan, energy, and shedding side by side, or answer seven questions in the breed-match wizard for a shortlist.',
  },
  {
    question: 'What are the best dog breeds for first-time owners?',
    answer:
      'Several breeds in our profiles are flagged as first-time-owner-friendly — meaning forgiving temperament and a manageable training curve — including the Golden Retriever, Labrador Retriever, Cavalier King Charles Spaniel, Bichon Frise, Boston Terrier, and Havanese, among others. Breeds we do NOT flag as beginner-friendly are typically high-drive working or guardian breeds (German Shepherd, Belgian Malinois, Cane Corso, Siberian Husky) that demand experienced, consistent handling. First-time-owner suitability is a temperament-and-effort signal, not a guarantee — every individual dog varies.',
  },
  {
    question: 'Which dog breeds shed the least?',
    answer:
      'Breeds profiled here with a Low shedding rating include the Poodle, Yorkshire Terrier, Shih Tzu, Maltese, Bichon Frise, Havanese, Vizsla, Weimaraner, and Portuguese Water Dog. Note that low-shedding is not the same as hypoallergenic: doodle crossbreeds (Goldendoodle, Labradoodle, Cockapoo, Maltipoo) are widely marketed as hypoallergenic, but that claim is not validated — coat type varies generation to generation, and no dog is truly allergen-free.',
  },
  {
    question: 'How are these breed profiles sourced?',
    answer:
      'Each profile combines AKC breed-standard data (size, group, origin, temperament) with health guidance from OFA prevalence statistics, breed-parent-club priority panels, and veterinary references such as VCA and the Merck Veterinary Manual. Health conditions are listed as breed predispositions, not certainties, and we do not publish invented prevalence numbers. For any diagnosis, screening schedule, or treatment decision, consult your veterinarian — these pages are an editorial reference, not medical advice.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQ_ITEMS })

const schema = combineSchemas(breadcrumbSchema, breedListSchema, faqSchema)

// Column order for the at-a-glance comparison table. Size order is the natural
// Toy → Giant progression so the reference reads top-down by build.
const SIZE_ORDER: SizeCategory[] = ['Toy', 'Small', 'Medium', 'Large', 'Giant']

// ─── Inline SVG icons (replace emoji; match homepage idiom) ──────────────────

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function IconAlert({ className }: { className?: string }) {
  return (
    <svg className={className} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    </svg>
  )
}

// Strip StockImage's outer margins so it fills a tile/masthead edge-to-edge.
const FILL_IMAGE = "[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0"

// Health-condition slugs render as readable names (varies per breed instead of
// a flat "{n} known conditions" count). Known veterinary acronyms stay
// upper-cased; everything else is title-cased.
const CONDITION_ACRONYMS = new Set(['boas', 'ivdd', 'pra', 'dm', 'acl', 'dcm', 'pda'])
function formatCondition(slug: string): string {
  return slug
    .split('-')
    .map((w) => (CONDITION_ACRONYMS.has(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
}

const BREED_MANIFEST_KEYS: Record<string, string> = {
  'golden-retriever': 'dog-com:breed-golden-retriever',
  'labrador-retriever': 'dog-com:breed-labrador-retriever',
  'french-bulldog': 'dog-com:breed-french-bulldog',
  'german-shepherd': 'dog-com:breed-german-shepherd',
  'beagle': 'dog-com:breed-beagle',
  'poodle': 'dog-com:breed-poodle',
}

export default async function BreedsPage() {
  let breeds: Array<{
    slug: string
    common_name: string
    care_data: Record<string, unknown>
    health_conditions: string[]
  }> = []

  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('species')
      .select('slug, common_name, care_data, health_conditions')
      .eq('site_id', 'dog-com')
      .eq('category', 'dog-breed')
      .eq('active', true)
      .order('common_name')
    breeds = (data ?? []) as typeof breeds
  } catch {
    // DB not connected — show static breeds
    breeds = [
      { slug: 'golden-retriever', common_name: 'Golden Retriever', care_data: { size: 'large', exercise_level: 'high' }, health_conditions: ['cancer', 'hip-dysplasia'] },
      { slug: 'labrador-retriever', common_name: 'Labrador Retriever', care_data: { size: 'large', exercise_level: 'high' }, health_conditions: ['obesity', 'hip-dysplasia'] },
      { slug: 'french-bulldog', common_name: 'French Bulldog', care_data: { size: 'small', exercise_level: 'low' }, health_conditions: ['boas', 'ivdd'] },
      { slug: 'german-shepherd', common_name: 'German Shepherd', care_data: { size: 'large', exercise_level: 'very-high' }, health_conditions: ['degenerative-myelopathy', 'hip-dysplasia'] },
      { slug: 'beagle', common_name: 'Beagle', care_data: { size: 'medium', exercise_level: 'moderate' }, health_conditions: ['obesity', 'ear-infections'] },
      { slug: 'poodle', common_name: 'Poodle', care_data: { size: 'varies', exercise_level: 'high' }, health_conditions: ['hip-dysplasia', 'epilepsy'] },
    ]
  }

  return (
    <>
      <SchemaScript schema={schema} />
      <>
      {/* Hero — image-first masthead (mirrors homepage). The hub hero photo is
          pulled INTO the dark header: the H1 + intro overlay the photo on a
          bottom-up gradient scrim instead of sitting in an orphaned band below.
          Reuses the existing dog-com:category-breeds key (no new manifest
          entries). subtleCredit keeps photographer attribution present (QC §1). */}
      <section className="relative bg-brand-dark min-h-[60vh] sm:min-h-[62vh] lg:min-h-[68vh]">
        <div
          className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure]:!w-full [&_figure>div]:h-full [&_figure>div]:!w-full [&_figure>div]:!aspect-auto [&_figure>div]:!rounded-none [&>div]:h-full`}
        >
          <StockImage
            manifestKey="dog-com:category-breeds"
            alt="Dog breed portrait"
            aspect="16:9"
            variant="inline"
            priority
            subtleCredit
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-brand-dark/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 25% 75%, rgba(232,98,42,0.35) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 flex flex-col justify-end min-h-[60vh] sm:min-h-[62vh] lg:min-h-[68vh] px-container-sm sm:px-container pt-16 pb-10 sm:pb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Breed Encyclopedia</span>
          </div>
          <h1
            className="font-display font-black text-white tracking-tighter leading-[1.03] mb-4 max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
          >
            Dog Breed Guide
          </h1>
          <p
            className="text-lg font-light text-white/85 max-w-xl leading-relaxed"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
          >
            Research-based profiles for 50+ breeds — temperament, health conditions, exercise needs, and everything you need before choosing a dog.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Breed Guide</span>
      </nav>

      {/* Breed-match wizard — prominent on-brand entry CTA. Surfaces the
          /breeds/match decision wizard at the top of the hub (previously
          reachable only via direct URL). Mirrors the hub's card idiom:
          brand accent, paw glyph, IconArrowRight, hover lift. */}
      <div className="px-container-sm sm:px-container pt-10">
        <Link
          href="/breeds/match"
          className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 overflow-hidden rounded-xl bg-brand-dark text-white p-6 sm:p-7 no-underline hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 85% 50%, rgba(232,98,42,0.45) 0%, transparent 60%)',
            }}
          />
          <span className="relative flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-brand-primary/20 text-brand-primary" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="26" height="26" fill="currentColor">
              <ellipse cx="20" cy="22" rx="6.2" ry="8" />
              <ellipse cx="44" cy="22" rx="6.2" ry="8" />
              <ellipse cx="11" cy="36" rx="5.4" ry="6.8" />
              <ellipse cx="53" cy="36" rx="5.4" ry="6.8" />
              <path d="M32 33c-7.2 0-13 5-13 11.5 0 4.6 3.7 7.5 8.4 7.5 2.4 0 3.4-1 4.6-1s2.2 1 4.6 1c4.7 0 8.4-2.9 8.4-7.5C45 38 39.2 33 32 33z" />
            </svg>
          </span>
          <div className="relative flex-1">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">Decision wizard</div>
            <div className="font-display font-bold text-lg sm:text-xl leading-tight mb-1">
              Find your match — breed-match wizard
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-xl">
              Answer 7 quick questions about your home and lifestyle and get your top 3 breed matches, with honest trade-offs. No email required.
            </p>
          </div>
          <span className="relative inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:gap-2.5 transition-all whitespace-nowrap">
            Start the wizard
            <IconArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        {/* Direct-answer / TL;DR block — extractable summary for AI surfaces
            (AI Overviews, ChatGPT, Perplexity, Claude) and a fast on-page
            orientation for readers. Every claim here is grounded in the breed
            data rendered below; no fabricated figures. */}
        <section
          aria-label="How to choose a dog breed — summary"
          className="rounded-xl border border-brand-border bg-brand-primary-pale p-6 sm:p-7 mb-10 max-w-3xl"
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            The short answer
          </div>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-3 leading-snug">
            How to choose a dog breed
          </h2>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
            Match the breed to the constraints that are hardest to change first:
            your living space, the hours of vigorous exercise you can give each
            day, anyone&rsquo;s sensitivity to shedding, and whether this is your
            first dog. A <strong className="text-brand-dark">Very High</strong>{' '}
            energy herding or sporting breed needs daily work and a job;{' '}
            a <strong className="text-brand-dark">Low</strong> energy companion
            breed is far more forgiving of a quiet home. Use the{' '}
            <Link href="#at-a-glance" className="text-brand-primary font-semibold no-underline hover:underline">
              at-a-glance comparison table
            </Link>{' '}
            to weigh size, lifespan, energy, and shedding side by side.
          </p>
          <ul className="text-sm text-brand-text-mid leading-relaxed list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong className="text-brand-dark">First dog?</strong> Favor
              breeds flagged first-time-owner-friendly (forgiving temperament,
              manageable training curve) over high-drive working or guardian
              breeds.
            </li>
            <li>
              <strong className="text-brand-dark">Shedding-sensitive home?</strong>{' '}
              Look for a Low shedding rating — but treat &ldquo;hypoallergenic&rdquo;
              doodle claims as marketing, not validated fact.
            </li>
            <li>
              <strong className="text-brand-dark">Every profile</strong> lists
              breed-associated health predispositions sourced from AKC, OFA, and
              breed-club guidance — review them before you commit.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/breeds/match" className="font-bold text-brand-primary no-underline hover:underline flex items-center gap-1">
              Take the breed-match wizard
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-brand-text-light" aria-hidden="true">·</span>
            <Link href="/compare" className="font-bold text-brand-primary no-underline hover:underline flex items-center gap-1">
              Compare breeds side by side
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-brand-text-light">
            {breeds.length} breeds profiled
          </p>
          <Link href="/compare" className="text-sm font-bold text-brand-primary no-underline hover:underline flex items-center gap-1">
            Compare breeds side-by-side
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Breed grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {breeds.map((breed) => {
            const careData = breed.care_data
            const manifestKey = BREED_MANIFEST_KEYS[breed.slug]

            return (
              <Link
                key={breed.slug}
                href={`/breeds/${breed.slug}`}
                className="block bg-brand-white border border-brand-border rounded-lg overflow-hidden no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
              >
                {/* Always render StockImage. For breeds whose per-breed key
                    isn't synced yet, fall back to the real breeds-category photo
                    (not the branded paw placeholder) so every tile shows a dog. */}
                <div className={`overflow-hidden bg-brand-surface ${FILL_IMAGE} [&_figure>div]:!rounded-none`}>
                  <StockImage
                    manifestKey={manifestKey ?? `dog-com:breed-${breed.slug}`}
                    fallbackKey="dog-com:category-breeds"
                    alt={breed.common_name}
                    aspect="4:3"
                  />
                </div>
                <div className="p-4">
                  <div className="font-display font-bold text-brand-dark text-base mb-1 leading-tight">
                    {breed.common_name}
                  </div>
                  <div className="text-xs text-brand-text-light capitalize mb-2.5">
                    {String(careData.size ?? '')} · {String(careData.exercise_level ?? '')} exercise
                  </div>
                  {breed.health_conditions?.length > 0 && (
                    <div className="flex items-center gap-1 text-2xs text-brand-text-light font-medium" title={`${breed.health_conditions.length} breed-associated health conditions profiled`}>
                      <IconAlert className="shrink-0 text-brand-primary" />
                      <span className="truncate">
                        {breed.health_conditions.slice(0, 2).map(formatCondition).join(' · ')}
                        {breed.health_conditions.length > 2 ? ` +${breed.health_conditions.length - 2}` : ''}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            )
          })}

          {/* More breeds — premium branded card (no dashed box, no emoji).
              Anchors to the full A–Z list below so it's a real navigation
              affordance, not a dead placeholder tile. */}
          <Link
            href="#all-breeds"
            className="group flex flex-col items-center justify-center text-center rounded-lg bg-brand-primary-pale border border-brand-border p-6 no-underline hover:border-brand-primary transition-colors duration-200"
            style={{ aspectRatio: '4 / 5' }}
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary mb-3" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="26" height="26" fill="currentColor">
                <ellipse cx="20" cy="22" rx="6.2" ry="8" />
                <ellipse cx="44" cy="22" rx="6.2" ry="8" />
                <ellipse cx="11" cy="36" rx="5.4" ry="6.8" />
                <ellipse cx="53" cy="36" rx="5.4" ry="6.8" />
                <path d="M32 33c-7.2 0-13 5-13 11.5 0 4.6 3.7 7.5 8.4 7.5 2.4 0 3.4-1 4.6-1s2.2 1 4.6 1c4.7 0 8.4-2.9 8.4-7.5C45 38 39.2 33 32 33z" />
              </svg>
            </span>
            <div className="text-sm font-display font-bold text-brand-dark mb-1">50+ breeds</div>
            <div className="text-xs text-brand-text-mid mb-2">Growing profile library</div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary group-hover:gap-2 transition-all">
              Browse all
              <IconArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
      {/* agent1-browse-all-start */}
      <section id="all-breeds" className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-2">All Dog Breeds</h2>
        <p className="text-sm text-brand-text-light mb-6">
          {Breeds.length} breed profiles, grouped by AKC group. Profiles
          combine AKC breed-standard data with OFA prevalence and breed-club
          health guidance.
        </p>
        {(() => {
          const grouped = groupBreedsByAKCGroup()
          const groupOrder = [
            'Sporting',
            'Hound',
            'Working',
            'Terrier',
            'Toy',
            'Non-Sporting',
            'Herding',
            'Crossbreed',
          ] as const
          return (
            <div className="space-y-8">
              {groupOrder.map((groupName) => {
                const groupBreeds = grouped[groupName]
                if (!groupBreeds || groupBreeds.length === 0) return null
                return (
                  <div key={groupName}>
                    <h3 className="font-display font-bold text-brand-dark text-base mb-3 border-b border-brand-border pb-1">
                      {groupName} Group
                      <span className="text-xs font-normal text-brand-text-light ml-2">
                        ({groupBreeds.length})
                      </span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
                      {groupBreeds.map((b) => (
                        <Link
                          key={b.slug}
                          href={`/breeds/${b.slug}`}
                          className="text-sm text-brand-primary no-underline hover:underline"
                        >
                          {b.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })()}
      </section>
      {/* agent1-browse-all-end */}

      {/* At-a-glance comparison table — data-driven reference grid built from
          the same breed source-of-truth as the cards above. Citation-magnet
          structure for AI surfaces: a single scannable table of size, weight,
          lifespan, energy, shedding, and first-time-owner suitability. No
          fabricated values — every cell is a field already in the breed data. */}
      <section
        id="at-a-glance"
        className="border-t border-brand-border px-container-sm sm:px-container py-12 scroll-mt-20"
      >
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Reference table
          </span>
        </div>
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">
          Dog breeds at a glance
        </h2>
        <p className="text-sm text-brand-text-mid mb-6 max-w-2xl">
          Every profiled breed, grouped by size category, with the four traits
          owners weigh most before choosing. Energy and shedding are from AKC
          breed-standard guidance; lifespan ranges reflect breed-typical figures.
          Tap any breed for the full profile, including health predispositions.
        </p>
        <div className="overflow-x-auto -mx-container-sm sm:mx-0">
          <table className="w-full text-sm border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b-2 border-brand-border text-left">
                <th className="py-2 pr-4 font-display font-bold text-brand-dark">Breed</th>
                <th className="py-2 px-3 font-display font-bold text-brand-dark">Size</th>
                <th className="py-2 px-3 font-display font-bold text-brand-dark">Weight (lb)</th>
                <th className="py-2 px-3 font-display font-bold text-brand-dark">Lifespan (yr)</th>
                <th className="py-2 px-3 font-display font-bold text-brand-dark">Energy</th>
                <th className="py-2 px-3 font-display font-bold text-brand-dark">Shedding</th>
                <th className="py-2 pl-3 font-display font-bold text-brand-dark">First dog?</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const bySize = groupBreedsBySize()
                return SIZE_ORDER.flatMap((size) => {
                  const group = bySize[size]
                  if (!group || group.length === 0) return []
                  const rows = [...group].sort((a, b) => a.name.localeCompare(b.name))
                  return [
                    <tr key={`hdr-${size}`} className="bg-brand-surface">
                      <td
                        colSpan={7}
                        className="py-1.5 px-3 text-2xs font-bold tracking-eyebrow uppercase text-brand-text-mid"
                      >
                        {size} · {rows.length} breed{rows.length === 1 ? '' : 's'}
                      </td>
                    </tr>,
                    ...rows.map((b) => (
                      <tr
                        key={b.slug}
                        className="border-b border-brand-border hover:bg-brand-primary-pale/40 transition-colors"
                      >
                        <td className="py-2 pr-4">
                          <Link
                            href={`/breeds/${b.slug}`}
                            className="font-semibold text-brand-primary no-underline hover:underline"
                          >
                            {b.name}
                          </Link>
                        </td>
                        <td className="py-2 px-3 text-brand-text-mid">{b.sizeCategory}</td>
                        <td className="py-2 px-3 text-brand-text-mid whitespace-nowrap">
                          {b.weightRangeLb[0]}–{b.weightRangeLb[1]}
                        </td>
                        <td className="py-2 px-3 text-brand-text-mid whitespace-nowrap">
                          {b.lifespanYears[0]}–{b.lifespanYears[1]}
                        </td>
                        <td className="py-2 px-3 text-brand-text-mid">{b.energyLevel}</td>
                        <td className="py-2 px-3 text-brand-text-mid">
                          {b.sheddingLevel === 'Hypoallergenic claim — not validated'
                            ? 'Low (claim unverified)'
                            : b.sheddingLevel}
                        </td>
                        <td className="py-2 pl-3 text-brand-text-mid">
                          {b.firstTimeOwnerFriendly ? 'Yes' : 'Experienced'}
                        </td>
                      </tr>
                    )),
                  ]
                })
              })()}
            </tbody>
          </table>
        </div>
        <p className="text-2xs text-brand-text-light mt-3 max-w-2xl">
          &ldquo;First dog?&rdquo; reflects breed-typical temperament and training
          demand, not a guarantee — every individual dog varies. Health
          predispositions and screening guidance are on each breed&rsquo;s profile.
        </p>
      </section>

      {/* FAQ — static, server-rendered for crawler visibility. Answers are
          grounded only in on-page facts (the table + browse list + cross-links).
          FAQPage schema is emitted in the combined server schema above, so the
          accordion passes includeSchema={false} to avoid duplicate JSON-LD. */}
      <section className="border-t border-brand-border px-container-sm sm:px-container py-12">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">
          Frequently asked questions
        </h2>
        <p className="text-sm text-brand-text-mid mb-6 max-w-2xl">
          Choosing a breed, narrowed to the questions owners ask most.
        </p>
        <div className="max-w-3xl">
          <FAQAccordion items={FAQ_ITEMS} includeSchema={false} defaultOpenIndex={0} />
        </div>

        {/* Cross-links back into the cluster graph — keep internal-link equity
            flowing between the breed hub and the health / triage hubs. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mt-8">
          <Link
            href="/health"
            className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
              Health library
            </div>
            <div className="font-display font-semibold text-brand-dark text-sm">
              Dog Health Library — condition references
            </div>
          </Link>
          <Link
            href="/symptoms"
            className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-1.5">
              Symptom triage
            </div>
            <div className="font-display font-semibold text-brand-dark text-sm">
              Dog Symptoms A–Z — triage by urgency
            </div>
          </Link>
          <Link
            href="/conditions"
            className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
              Conditions
            </div>
            <div className="font-display font-semibold text-brand-dark text-sm">
              Dog Conditions — reference by body system
            </div>
          </Link>
          <Link
            href="/breeds/match"
            className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
              Decision wizard
            </div>
            <div className="font-display font-semibold text-brand-dark text-sm">
              Breed-match wizard — your top 3 in 7 questions
            </div>
          </Link>
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="footer" />
</>
  </>
  )
}
