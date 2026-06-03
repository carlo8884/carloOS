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
      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Breed Encyclopedia</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Dog Breed Guide
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          research-based profiles for 200+ breeds — temperament, health conditions, exercise needs, and everything you need before choosing a dog.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Breed Guide</span>
      </nav>

      {/* Hero image */}
      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="dog-com:category-breeds" aspect="16:9" variant="wide" priority />
      </div>

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
                <div className="[&>figure]:my-0 [&>figure]:rounded-none overflow-hidden bg-brand-surface">
                  {manifestKey ? (
                    <StockImage
                      manifestKey={manifestKey}
                      alt={breed.common_name}
                      aspect="4:3"
                    />
                  ) : (
                    <div className="flex items-center justify-center text-5xl" style={{ aspectRatio: '4/3' }}>🐕</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="font-display font-bold text-brand-dark text-base mb-1 leading-tight">
                    {breed.common_name}
                  </div>
                  <div className="text-xs text-brand-text-light capitalize mb-2.5">
                    {String(careData.size ?? '')} · {String(careData.exercise_level ?? '')} exercise
                  </div>
                  {breed.health_conditions?.length > 0 && (
                    <div className="text-2xs text-brand-danger font-medium">
                      ⚠ {breed.health_conditions.length} known conditions
                    </div>
                  )}
                </div>
              </Link>
            )
          })}

          {/* More breeds coming */}
          <div className="border-2 border-dashed border-brand-border rounded-lg flex items-center justify-center text-center p-6 text-brand-text-light">
            <div>
              <div className="text-3xl mb-2">🐾</div>
              <div className="text-sm font-semibold text-brand-text-mid mb-1">200+ breeds</div>
              <div className="text-xs">More profiles added weekly</div>
            </div>
          </div>
        </div>
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
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
