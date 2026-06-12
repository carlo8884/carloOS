/**
 * /vets — Vet directory hub.
 *
 * Top of the city × specialty taxonomy. Renders:
 *   - USA map placeholder (geographic browse)
 *   - All 50 states + DC list (linked to state hubs)
 *   - Top US cities list (linked to city hubs)
 *   - <FindAVetNearYou> hero entry (IP-geo deep-link)
 *
 * SCAFFOLD ONLY: vet listings are sample placeholders until Carlo approves a
 * verified data source. See ops/handoffs/2026-05-30-vet-directory-data-source-decision.md.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { STATES, CITIES, SPECIALTIES, VETS } from '../../data/vet-directory'
import { FindAVetNearYou } from '../../components/FindAVetNearYou'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vet Directory — Find a Veterinarian by State & City | Vets.co',
  description:
    'Browse veterinarians by state, city, and specialty. General practice, emergency, surgery, cardiology, and board-certified specialty care.',
  path: '/vets',
  type: 'website',
  noIndex: true, // placeholder/sample directory — not indexed until a verified data source lands (IR P1-1)
})

export default function VetDirectoryHubPage() {
  const url = 'https://vets.co/vets'

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Vet Directory', url },
    ],
  })

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vet Directory — Find a Veterinarian by State & City',
    description:
      'Programmatic veterinary directory organized by state, city, and specialty across the United States.',
    url,
    isPartOf: { '@type': 'WebSite', name: 'Vets.co', url: 'https://vets.co' },
    author: { '@type': 'Organization', name: 'Vets.co Editorial' },
  }

  const schema = combineSchemas(breadcrumbSchema, collectionPageSchema)

  const topCities = CITIES.slice(0, 12)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Vet Directory</span>
      </nav>

      {/* Sample-data banner — visible on every page in this directory */}
      <div className="bg-brand-primary/10 border-b border-brand-primary/30 px-container-sm sm:px-container py-3">
        <p className="text-xs text-brand-dark m-0 leading-relaxed max-w-5xl">
          <span className="font-bold">Sample listings — directory under construction.</span> The
          individual vet profiles below are placeholders used to validate layout and schema. Real
          listings will populate after Carlo selects a verified data source (state veterinary medical
          boards, AAHA, AVMA, or another sourced provider). See our{' '}
          <Link href="/editorial-standards" className="text-brand-primary font-bold no-underline hover:underline">
            editorial standards
          </Link>{' '}
          for sourcing status.
        </p>
      </div>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">
          Veterinary Directory
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}
        >
          Find a Veterinarian Near You
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          Browse by state, city, and specialty. General practice, 24-hour emergency, board-certified
          surgery, cardiology, oncology, dermatology, ophthalmology, and dentistry — across all 50
          states.
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-12 max-w-5xl">
        {/* Find-a-vet near you entry */}
        <section className="mb-12">
          <FindAVetNearYou variant="hero" />
        </section>

        {/* USA map placeholder */}
        <section className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-3 mt-0"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            Browse by Region
          </h2>
          <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
            We cover all 50 states plus the District of Columbia. Choose your state from the list
            below to find local clinics, emergency hospitals, and specialists near you.
          </p>
        </section>

        {/* All states */}
        <section className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-2 mt-0"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            All States
          </h2>
          <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
            50 states plus the District of Columbia. State hubs list cities with sample directory
            listings and link to the long-form &ldquo;Find a Vet in [State]&rdquo; guides under{' '}
            <Link href="/find-a-vet" className="text-brand-primary font-bold no-underline hover:underline">
              /find-a-vet
            </Link>
            .
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {STATES.map((s) => (
              <Link
                key={s.slug}
                href={`/vets/${s.slug}`}
                className="bg-brand-surface border border-brand-border rounded-lg px-3 py-2 text-sm text-brand-dark no-underline hover:border-brand-primary hover:text-brand-primary flex justify-between items-center gap-2"
              >
                <span>{s.name}</span>
                {s.vetCount > 0 && (
                  <span className="text-2xs font-mono text-brand-primary">{s.vetCount}</span>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Top cities */}
        <section className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-2 mt-0"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            Top US Cities
          </h2>
          <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
            The largest US metros where general practice, emergency, and board-certified specialty
            care is most concentrated.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {topCities.map((c) => {
              const state = STATES.find((s) => s.code === c.state)
              if (!state) return null
              return (
                <Link
                  key={`${state.slug}-${c.slug}`}
                  href={`/vets/${state.slug}/${c.slug}`}
                  className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary block"
                >
                  <div className="font-bold text-brand-dark text-base mb-0.5">
                    {c.city}, {c.state}
                  </div>
                  <div className="text-xs text-brand-text-light">
                    {c.vetCount > 0
                      ? `${c.vetCount} sample listing${c.vetCount === 1 ? '' : 's'}`
                      : 'Directory pending'}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Specialties */}
        <section className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-2 mt-0"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            Browse by Specialty
          </h2>
          <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
            Eight specialty taxonomy filters that surface on each city hub. For long-form guides on
            when to see each specialty, see{' '}
            <Link href="/specialists" className="text-brand-primary font-bold no-underline hover:underline">
              /specialists
            </Link>
            .
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {SPECIALTIES.map((sp) => (
              <div key={sp.slug} className="bg-brand-surface border border-brand-border rounded-xl p-4">
                <div className="font-bold text-brand-dark text-sm mb-1">{sp.name}</div>
                <p className="text-xs text-brand-text-mid m-0 leading-relaxed">{sp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage stats */}
        <section className="mb-12">
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
              Directory Coverage (Scaffold)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="font-display font-black text-brand-dark text-2xl leading-none">
                  {STATES.length}
                </div>
                <div className="text-xs text-brand-text-mid">States + DC</div>
              </div>
              <div>
                <div className="font-display font-black text-brand-dark text-2xl leading-none">
                  {CITIES.length}
                </div>
                <div className="text-xs text-brand-text-mid">Top metros</div>
              </div>
              <div>
                <div className="font-display font-black text-brand-dark text-2xl leading-none">
                  {SPECIALTIES.length}
                </div>
                <div className="text-xs text-brand-text-mid">Specialties</div>
              </div>
              <div>
                <div className="font-display font-black text-brand-dark text-2xl leading-none">
                  {VETS.length}
                </div>
                <div className="text-xs text-brand-text-mid">Sample listings</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Cross-link footer */}
      <div className="px-container-sm sm:px-container py-8 border-t border-brand-border bg-brand-surface">
        <div className="max-w-5xl text-sm text-brand-text-mid leading-relaxed">
          Looking for a specific specialty?{' '}
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
