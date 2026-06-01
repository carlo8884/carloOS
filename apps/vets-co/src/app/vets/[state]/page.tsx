/**
 * /vets/[state] — State hub.
 *
 * Lists:
 *   - Cities in the state that have sample directory listings
 *   - Specialties represented in the state
 *   - Top sample vets in the state
 *   - Cross-link to long-form /find-a-vet/[state] guide
 *
 * SCAFFOLD ONLY: sample placeholder listings until verified data source lands.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import {
  STATES,
  CITIES,
  SPECIALTIES,
  getStateBySlug,
  getCitiesInState,
  getVetsInState,
} from '../../../data/vet-directory'

interface PageProps {
  params: { state: string }
}

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const state = getStateBySlug(params.state)
  if (!state) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Vet Directory by State | Vets.co',
      description: 'Browse veterinarians by state, city, and specialty.',
      path: '/vets',
      type: 'website',
    })
  }
  return buildMetadata({
    siteId: 'vets-co',
    title: `Vets in ${state.name} — Directory by City & Specialty | Vets.co`,
    description: `Find veterinarians in ${state.name}. Browse by city and specialty — general practice, emergency, surgery, cardiology, and more.`,
    path: `/vets/${state.slug}`,
    type: 'website',
  })
}

export default function StateHubPage({ params }: PageProps) {
  const state = getStateBySlug(params.state)
  if (!state) notFound()

  const cities = getCitiesInState(state.code)
  const vetsInState = getVetsInState(state.code)
  const specialtiesInState = new Set<string>()
  for (const v of vetsInState) for (const sp of v.specialties) specialtiesInState.add(sp)

  const url = `https://vets.co/vets/${state.slug}`
  const stateName = state.name

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Vet Directory', url: 'https://vets.co/vets' },
      { name: stateName, url },
    ],
  })

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Cities in ${stateName} with vet directory coverage`,
    numberOfItems: cities.length,
    itemListElement: cities.map((c, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: `${c.city}, ${state.code}`,
      url: `${url}/${c.slug}`,
    })),
  }

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Vets in ${stateName} — Directory by City & Specialty`,
    description: `Vet directory for ${stateName} organized by city and specialty.`,
    url,
    isPartOf: { '@type': 'WebSite', name: 'Vets.co', url: 'https://vets.co' },
    author: { '@type': 'Organization', name: 'Vets.co Editorial' },
  }

  const schema = combineSchemas(breadcrumbSchema, itemListSchema, collectionPageSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/vets" className="hover:text-brand-primary no-underline">Vet Directory</Link>
        <span>›</span>
        <span className="text-brand-text-mid">{stateName}</span>
      </nav>

      {/* Sample-data banner */}
      <div className="bg-brand-primary/10 border-b border-brand-primary/30 px-container-sm sm:px-container py-3">
        <p className="text-xs text-brand-dark m-0 leading-relaxed max-w-5xl">
          <span className="font-bold">Sample listings — directory under construction.</span>{' '}
          Individual vet profiles are placeholders pending Carlo&apos;s selection of a verified data
          source. For long-form, sourced guidance on vet care in {stateName}, see our{' '}
          <Link
            href={`/find-a-vet/${state.slug}`}
            className="text-brand-primary font-bold no-underline hover:underline"
          >
            /find-a-vet/{state.slug}
          </Link>{' '}
          guide.
        </p>
      </div>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Veterinary Directory · {state.code}
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
        >
          Vets in {stateName}
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          {state.code} vets organized by city and specialty — general practice, 24-hour emergency,
          and board-certified specialty care.
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-12 max-w-5xl">
        {/* Cities */}
        <section className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-2 mt-0"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            Cities in {stateName}
          </h2>
          <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
            {cities.length > 0
              ? `Major metros in ${stateName} with vet directory coverage.`
              : `Directory coverage for ${stateName} is pending. In the meantime, see our long-form guide to vet care in ${stateName} (linked above).`}
          </p>
          {cities.length > 0 && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/vets/${state.slug}/${c.slug}`}
                  className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary block"
                >
                  <div className="font-bold text-brand-dark text-base mb-0.5">
                    {c.city}, {state.code}
                  </div>
                  <div className="text-xs text-brand-text-light">
                    {c.vetCount > 0
                      ? `${c.vetCount} sample listing${c.vetCount === 1 ? '' : 's'}`
                      : 'Directory pending'}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Specialties available */}
        <section className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-2 mt-0"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            Specialties Available in {stateName}
          </h2>
          <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
            Specialty taxonomy filters represented across the sample listings in {stateName}.
          </p>
          {specialtiesInState.size > 0 ? (
            <div className="grid sm:grid-cols-2 gap-3">
              {SPECIALTIES.filter((sp) => specialtiesInState.has(sp.slug)).map((sp) => (
                <div
                  key={sp.slug}
                  className="bg-brand-surface border border-brand-border rounded-xl p-4"
                >
                  <div className="font-bold text-brand-dark text-sm mb-1">{sp.name}</div>
                  <p className="text-xs text-brand-text-mid m-0 leading-relaxed">{sp.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-brand-text-light italic">
              No specialty data available yet for {stateName}. See{' '}
              <Link href="/specialists" className="text-brand-primary font-bold no-underline hover:underline">
                /specialists
              </Link>{' '}
              for long-form specialty guides.
            </p>
          )}
        </section>

        {/* Top vets in state */}
        {vetsInState.length > 0 && (
          <section className="mb-12">
            <h2
              className="font-display font-black text-brand-dark mb-2 mt-0"
              style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
            >
              Sample Listings in {stateName}
            </h2>
            <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
              Sample directory entries for {stateName}. These are placeholder listings — not real
              practices.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {vetsInState.map((v) => {
                const city = CITIES.find((c) => c.state === v.state && c.city === v.city)
                if (!city) return null
                return (
                  <Link
                    key={v.slug}
                    href={`/vets/${state.slug}/${city.slug}/${v.slug}`}
                    className="bg-brand-surface border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary block"
                  >
                    <div className="text-2xs font-mono text-brand-primary mb-1">
                      {v.city}, {v.state}
                    </div>
                    <div className="font-bold text-brand-dark text-base mb-2">{v.practiceName}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {v.specialties.map((s) => {
                        const sp = SPECIALTIES.find((x) => x.slug === s)
                        return sp ? (
                          <span
                            key={s}
                            className="text-2xs font-bold text-brand-text-mid bg-brand-surface border border-brand-border rounded-full px-2 py-0.5"
                          >
                            {sp.name}
                          </span>
                        ) : null
                      })}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* Cross-link to long-form guide */}
        <section className="mb-12">
          <Link
            href={`/find-a-vet/${state.slug}`}
            className="bg-brand-surface border border-brand-border rounded-xl p-5 block no-underline hover:border-brand-primary"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
              Long-form guide
            </div>
            <div className="font-bold text-brand-dark text-base mb-1">
              How to choose a vet in {stateName}
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Sourced editorial on emergency hospital availability, board-certified specialty
              access, and license verification for {stateName}.
            </p>
          </Link>
        </section>

        {/* Back link */}
        <div className="mt-10 pt-8 border-t border-brand-border">
          <Link href="/vets" className="text-brand-primary text-sm font-bold no-underline hover:underline">
            ← Back to all states
          </Link>
        </div>
      </div>

      {/* Cross-link footer */}
      <div className="px-container-sm sm:px-container py-8 border-t border-brand-border bg-brand-surface">
        <div className="max-w-5xl text-sm text-brand-text-mid leading-relaxed">
          Looking for a specific specialty in {stateName}?{' '}
          <Link href="/specialists" className="text-brand-primary font-bold no-underline hover:underline">
            See our specialty cluster
          </Link>
          {' '}— deep-dive guides on cardiology, oncology, dermatology, ophthalmology, neurology,
          dentistry, internal medicine, and emergency care.
        </div>
      </div>
    </>
  )
}
