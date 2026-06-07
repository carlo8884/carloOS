/**
 * Dog.com Breeds Index — /breeds
 * Server component. Lists all breeds from Supabase species table.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, StockImage } from '@carloOS/ui'
import { createServerClient } from '@carloOS/db'
import { Breeds, groupBreedsByAKCGroup } from '../../data/breeds'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Breed Guide — 200+ Breeds Profiled',
  description: 'Complete breed profiles for 200+ dog breeds. Temperament scores, health conditions, exercise needs, grooming requirements.',
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

const schema = combineSchemas(breadcrumbSchema, breedListSchema)

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

// Size filters for UI
const SIZE_FILTERS = ['All', 'Small', 'Medium', 'Large', 'Giant']
const GROUP_FILTERS = ['All Groups', 'Sporting', 'Hound', 'Working', 'Terrier', 'Toy', 'Non-Sporting', 'Herding']

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
      <section className="relative bg-brand-dark">
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
        <div className="relative z-10 flex flex-col justify-end min-h-[52vh] sm:min-h-[58vh] lg:min-h-[64vh] px-container-sm sm:px-container pt-16 pb-10 sm:pb-12">
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
            Research-based profiles for 200+ breeds — temperament, health conditions, exercise needs, and everything you need before choosing a dog.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Breed Guide</span>
      </nav>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-brand-text-light">
            {breeds.length} breeds profiled
          </p>
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
                    isn't synced yet, StockImage falls back to its branded paw
                    placeholder — no emoji, no dashed/grey box. */}
                <div className={`overflow-hidden bg-brand-surface ${FILL_IMAGE} [&_figure>div]:!rounded-none`}>
                  <StockImage
                    manifestKey={manifestKey ?? `dog-com:breed-${breed.slug}`}
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
            <div className="text-sm font-display font-bold text-brand-dark mb-1">200+ breeds</div>
            <div className="text-xs text-brand-text-mid mb-2">More profiles added weekly</div>
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
</>
  </>
  )
}
