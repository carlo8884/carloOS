/**
 * /vets/[state]/[city] — City hub.
 *
 * Lists all sample vets in a given city. Renders:
 *   - All-vets grid (sorted by specialty grouping)
 *   - Emergency vets section (filter for specialty='emergency')
 *   - Specialty filter chips (anchor-link UX; no client-side filtering for now)
 *   - Cross-link footer to specialty long-form guides
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
  getCityInState,
  getVetsInCity,
} from '../../../../data/vet-directory'

interface PageProps {
  params: { state: string; city: string }
}

export function generateStaticParams() {
  // Only pre-render cities that exist in mock data.
  return CITIES.map((c) => {
    const state = STATES.find((s) => s.code === c.state)
    if (!state) return null
    return { state: state.slug, city: c.slug }
  }).filter(Boolean) as { state: string; city: string }[]
}

export function generateMetadata({ params }: PageProps): Metadata {
  const state = getStateBySlug(params.state)
  const city = state ? getCityInState(params.state, params.city) : undefined
  if (!state || !city) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Vet Directory | Vets.co',
      description: 'Browse veterinarians by state, city, and specialty.',
      path: '/vets',
      type: 'website',
    })
  }
  return buildMetadata({
    siteId: 'vets-co',
    title: `Vets in ${city.city}, ${state.code} — Directory | Vets.co`,
    description: `Find a veterinarian in ${city.city}, ${state.name}. General practice, 24-hour emergency, and board-certified specialty care — directory listings and how to choose.`,
    path: `/vets/${state.slug}/${city.slug}`,
    type: 'website',
  })
}

export default function CityHubPage({ params }: PageProps) {
  const state = getStateBySlug(params.state)
  const city = state ? getCityInState(params.state, params.city) : undefined
  if (!state || !city) notFound()

  const vets = getVetsInCity(state.code, city.slug)
  const emergencyVets = vets.filter((v) => v.specialties.includes('emergency'))
  const presentSpecialties = new Set<string>()
  for (const v of vets) for (const sp of v.specialties) presentSpecialties.add(sp)

  const url = `https://vets.co/vets/${state.slug}/${city.slug}`
  const heading = `Vets in ${city.city}, ${state.code}`

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Vet Directory', url: 'https://vets.co/vets' },
      { name: state.name, url: `https://vets.co/vets/${state.slug}` },
      { name: city.city, url },
    ],
  })

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Veterinarians in ${city.city}, ${state.code}`,
    numberOfItems: vets.length,
    itemListElement: vets.map((v, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: v.practiceName,
      url: `${url}/${v.slug}`,
    })),
  }

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Vets in ${city.city}, ${state.code} — Directory`,
    description: `Vet directory for ${city.city}, ${state.name}.`,
    url,
    isPartOf: { '@type': 'WebSite', name: 'Vets.co', url: 'https://vets.co' },
    author: { '@type': 'Organization', name: 'Vets.co Editorial' },
  }

  const schema = combineSchemas(breadcrumbSchema, itemListSchema, collectionPageSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/vets" className="hover:text-brand-primary no-underline">Vet Directory</Link>
        <span>›</span>
        <Link href={`/vets/${state.slug}`} className="hover:text-brand-primary no-underline">{state.name}</Link>
        <span>›</span>
        <span className="text-brand-text-mid">{city.city}</span>
      </nav>

      {/* Sample-data banner */}
      <div className="bg-brand-primary/10 border-b border-brand-primary/30 px-container sm:px-container-sm py-3">
        <p className="text-xs text-brand-dark m-0 leading-relaxed max-w-5xl">
          <span className="font-bold">Sample listings — directory under construction.</span>{' '}
          Individual vet profiles below are placeholders pending Carlo&apos;s selection of a verified
          data source (state vet boards, AAHA, AVMA, or another sourced provider).
        </p>
      </div>

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Veterinary Directory · {state.code}
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
        >
          {heading}
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          {vets.length > 0
            ? `${vets.length} sample listing${vets.length === 1 ? '' : 's'} across ${presentSpecialties.size} specialt${presentSpecialties.size === 1 ? 'y' : 'ies'} in ${city.city}.`
            : `Directory coverage for ${city.city} is pending. Check back after our data source decision.`}
        </p>
      </div>

      <div className="px-container sm:px-container-sm py-12 max-w-5xl">
        {/* Specialty filter chips */}
        {presentSpecialties.size > 0 && (
          <section className="mb-10">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
              Filter by Specialty
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#all-vets"
                className="bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full no-underline hover:opacity-90"
              >
                All ({vets.length})
              </Link>
              {SPECIALTIES.filter((sp) => presentSpecialties.has(sp.slug)).map((sp) => {
                const count = vets.filter((v) => v.specialties.includes(sp.slug)).length
                return (
                  <a
                    key={sp.slug}
                    href={`#specialty-${sp.slug}`}
                    className="bg-white border border-brand-border text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full no-underline hover:border-brand-primary"
                  >
                    {sp.name} ({count})
                  </a>
                )
              })}
            </div>
          </section>
        )}

        {/* Emergency vets — surfaced first if present */}
        {emergencyVets.length > 0 && (
          <section id="specialty-emergency" className="mb-12">
            <div className="bg-brand-danger/5 border border-brand-danger/30 rounded-2xl p-6">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-3">
                Emergency Vets ({emergencyVets.length})
              </div>
              <h2
                className="font-display font-black text-brand-dark mb-3 mt-0"
                style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
              >
                24-Hour Emergency Care in {city.city}
              </h2>
              <p className="text-sm text-brand-text-mid mb-4 max-w-2xl leading-relaxed">
                For acute illness or injury outside regular hours. Call ahead if you can — staff can
                advise on first aid and prepare for arrival.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {emergencyVets.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/vets/${state.slug}/${city.slug}/${v.slug}`}
                    className="bg-white border border-brand-border rounded-xl p-4 no-underline hover:border-brand-danger block"
                  >
                    <div className="font-bold text-brand-dark text-sm mb-1">{v.practiceName}</div>
                    <div className="text-2xs text-brand-text-mid mb-2">{v.address}</div>
                    <div className="text-2xs font-mono text-brand-danger">{v.hours}</div>
                  </Link>
                ))}
              </div>
              <p className="text-2xs text-brand-text-light italic mt-4 mb-0">
                ASPCA Animal Poison Control:{' '}
                <a href="tel:8884264435" className="font-bold text-brand-dark hover:underline">
                  888-426-4435
                </a>{' '}
                (24/7, $75 fee).
              </p>
            </div>
          </section>
        )}

        {/* All vets */}
        <section id="all-vets" className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-2 mt-0"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            All Vets in {city.city}
          </h2>
          <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
            {vets.length > 0
              ? `Sample directory entries for ${city.city}, ${state.code}.`
              : `Listings will populate after Carlo selects a verified data source. See our long-form guide to vet care in ${state.name} for sourced editorial in the meantime.`}
          </p>
          {vets.length > 0 ? (
            <div className="space-y-4">
              {vets.map((v) => (
                <Link
                  key={v.slug}
                  id={v.specialties[0] ? `specialty-${v.specialties[0]}` : undefined}
                  href={`/vets/${state.slug}/${city.slug}/${v.slug}`}
                  className="bg-brand-surface border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary block"
                >
                  <div className="font-bold text-brand-dark text-lg mb-1">{v.practiceName}</div>
                  <div className="text-xs text-brand-text-mid mb-2">{v.address}</div>
                  <div className="text-xs text-brand-text-light mb-3">{v.hours}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {v.specialties.map((s) => {
                      const sp = SPECIALTIES.find((x) => x.slug === s)
                      return sp ? (
                        <span
                          key={s}
                          className={`text-2xs font-bold rounded-full px-2 py-0.5 border ${
                            s === 'emergency'
                              ? 'bg-brand-danger/10 text-brand-danger border-brand-danger/30'
                              : 'bg-brand-bg text-brand-text-mid border-brand-border'
                          }`}
                        >
                          {sp.name}
                        </span>
                      ) : null
                    })}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <Link
              href={`/find-a-vet/${state.slug}`}
              className="bg-brand-surface border border-brand-border rounded-xl p-5 block no-underline hover:border-brand-primary"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                Long-form guide
              </div>
              <div className="font-bold text-brand-dark text-base mb-1">
                How to choose a vet in {state.name}
              </div>
              <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
                Sourced editorial on what to look for, including emergency hospital availability.
              </p>
            </Link>
          )}
        </section>

        {/* Back link */}
        <div className="mt-10 pt-8 border-t border-brand-border">
          <Link
            href={`/vets/${state.slug}`}
            className="text-brand-primary text-sm font-bold no-underline hover:underline"
          >
            ← Back to {state.name}
          </Link>
        </div>
      </div>

      {/* Cross-link footer */}
      <div className="px-container sm:px-container-sm py-8 border-t border-brand-border bg-brand-surface">
        <div className="max-w-5xl text-sm text-brand-text-mid leading-relaxed">
          Looking for a specific specialty in {city.city}?{' '}
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
