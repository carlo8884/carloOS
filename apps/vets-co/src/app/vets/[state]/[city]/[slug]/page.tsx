/**
 * /vets/[state]/[city]/[slug] — Individual vet profile.
 *
 * Renders:
 *   - Name, practice name, address, phone, hours
 *   - Specialties, accepted insurance, services
 *   - About text (generic, never invented bio of a real clinician)
 *   - "Book appointment" CTA placeholder
 *   - Veterinarian + LocalBusiness + BreadcrumbList JSON-LD
 *
 * SCAFFOLD ONLY: every profile is explicitly marked as a sample listing via
 * the visible banner. The phone number is a 555-prefix reserved-for-fiction
 * placeholder per NANP, and the address uses obviously synthetic identifiers.
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
  VETS,
  SPECIALTIES,
  getStateBySlug,
  getCityInState,
  getVetBySlug,
} from '../../../../../data/vet-directory'

interface PageProps {
  params: { state: string; city: string; slug: string }
}

export function generateStaticParams() {
  // Only pre-render the mock vet routes that actually exist.
  return VETS.map((v) => {
    const state = STATES.find((s) => s.code === v.state)
    if (!state) return null
    const city = CITIES.find((c) => c.state === v.state && c.city === v.city)
    if (!city) return null
    return { state: state.slug, city: city.slug, slug: v.slug }
  }).filter(Boolean) as { state: string; city: string; slug: string }[]
}

export function generateMetadata({ params }: PageProps): Metadata {
  const vet = getVetBySlug(params.state, params.city, params.slug)
  if (!vet) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Vet Directory | Vets.co',
      description: 'Browse veterinarians by state, city, and specialty.',
      path: '/vets',
      type: 'website',
    })
  }
  const state = getStateBySlug(params.state)!
  return buildMetadata({
    siteId: 'vets-co',
    title: `${vet.practiceName} — ${vet.city}, ${state.code} | Vets.co`,
    description: `${vet.practiceName} in ${vet.city}, ${state.name}. ${vet.specialties.length} specialt${vet.specialties.length === 1 ? 'y' : 'ies'}, accepted insurance, services, and contact info. Sample directory listing.`,
    path: `/vets/${state.slug}/${vet.slug}`,
    type: 'website',
    noIndex: true, // Sample listings must not be indexed — see disclaimer banner.
  })
}

export default function VetProfilePage({ params }: PageProps) {
  const state = getStateBySlug(params.state)
  const city = state ? getCityInState(params.state, params.city) : undefined
  const vet = getVetBySlug(params.state, params.city, params.slug)
  if (!state || !city || !vet) notFound()

  const url = `https://vets.co/vets/${state.slug}/${city.slug}/${vet.slug}`

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Vet Directory', url: 'https://vets.co/vets' },
      { name: state.name, url: `https://vets.co/vets/${state.slug}` },
      { name: city.city, url: `https://vets.co/vets/${state.slug}/${city.slug}` },
      { name: vet.practiceName, url },
    ],
  })

  // Veterinarian + LocalBusiness schema. We omit `geo` because we don't have
  // verified coordinates for sample placeholders.
  const veterinarianSchema = {
    '@context': 'https://schema.org',
    '@type': ['Veterinarian', 'LocalBusiness'],
    '@id': url,
    name: vet.practiceName,
    url,
    telephone: vet.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: vet.address,
      addressLocality: vet.city,
      addressRegion: vet.state,
      addressCountry: 'US',
    },
    openingHours: vet.hours,
    medicalSpecialty: vet.specialties.map((s) => {
      const sp = SPECIALTIES.find((x) => x.slug === s)
      return sp?.name ?? s
    }),
    availableService: vet.services.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s,
    })),
    description: vet.aboutText,
    isPartOf: { '@type': 'WebSite', name: 'Vets.co', url: 'https://vets.co' },
  }

  const schema = combineSchemas(breadcrumbSchema, veterinarianSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/vets" className="hover:text-brand-primary no-underline">Vet Directory</Link>
        <span>›</span>
        <Link href={`/vets/${state.slug}`} className="hover:text-brand-primary no-underline">{state.name}</Link>
        <span>›</span>
        <Link href={`/vets/${state.slug}/${city.slug}`} className="hover:text-brand-primary no-underline">{city.city}</Link>
        <span>›</span>
        <span className="text-brand-text-mid">{vet.practiceName}</span>
      </nav>

      {/* Sample-data banner — REQUIRED on every vet profile */}
      <div className="bg-brand-danger/10 border-b-2 border-brand-danger/40 px-container-sm sm:px-container py-4">
        <p className="text-sm text-brand-dark m-0 leading-relaxed max-w-5xl font-bold">
          Sample listing — not a real vet.
        </p>
        <p className="text-xs text-brand-text-mid m-0 mt-1 leading-relaxed max-w-5xl">
          This profile is a placeholder used to validate the directory layout and schema. The
          practice name, phone number (555 prefix, reserved-for-fiction per NANP), and address are
          synthetic. Real listings will populate after Carlo selects a verified data source. See our{' '}
          <Link href="/editorial-standards" className="text-brand-primary font-bold no-underline hover:underline">
            editorial standards
          </Link>{' '}
          for sourcing status.
        </p>
      </div>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-12">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Vet Profile · {vet.city}, {vet.state}
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-3 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 42px)' }}
        >
          {vet.practiceName}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {vet.specialties.map((s) => {
            const sp = SPECIALTIES.find((x) => x.slug === s)
            return sp ? (
              <span
                key={s}
                className={`text-2xs font-bold rounded-full px-3 py-1 ${
                  s === 'emergency' ? 'bg-brand-danger text-white' : 'bg-white/10 text-white'
                }`}
              >
                {sp.name}
              </span>
            ) : null
          })}
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-12 max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Main content */}
          <div>
            {/* About */}
            <section className="mb-10">
              <h2
                className="font-display font-black text-brand-dark mb-3 mt-0"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
              >
                About This Practice
              </h2>
              <p className="text-sm text-brand-text-mid leading-relaxed">{vet.aboutText}</p>
              <p className="text-2xs text-brand-text-light italic mt-3">
                Byline: Vets.co Editorial — sourced from cited references.
              </p>
            </section>

            {/* Services */}
            <section className="mb-10">
              <h2
                className="font-display font-black text-brand-dark mb-3 mt-0"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
              >
                Services Offered
              </h2>
              <ul className="space-y-2">
                {vet.services.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-brand-text-mid">
                    <span className="text-brand-primary font-bold flex-shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Insurance */}
            <section className="mb-10">
              <h2
                className="font-display font-black text-brand-dark mb-3 mt-0"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
              >
                Accepted Pet Insurance
              </h2>
              <p className="text-xs text-brand-text-mid mb-4 leading-relaxed">
                Most major pet insurance plans reimburse for visits to any licensed US veterinarian.
                The list below reflects insurers commonly accepted at directory listings of this
                type — confirm with the practice directly.
              </p>
              <div className="flex flex-wrap gap-2">
                {vet.acceptedInsurance.map((i) => (
                  <span
                    key={i}
                    className="text-xs font-bold text-brand-text-mid bg-brand-surface border border-brand-border rounded-full px-3 py-1"
                  >
                    {i}
                  </span>
                ))}
              </div>
              <Link
                href="/reviews/best-pet-insurance"
                className="text-brand-primary text-sm font-bold no-underline hover:underline block mt-4"
              >
                → Compare pet insurance plans
              </Link>
            </section>

            {/* Specialties (long-form context) */}
            <section className="mb-10">
              <h2
                className="font-display font-black text-brand-dark mb-3 mt-0"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
              >
                Specialties at This Practice
              </h2>
              <div className="space-y-4">
                {vet.specialties.map((s) => {
                  const sp = SPECIALTIES.find((x) => x.slug === s)
                  if (!sp) return null
                  return (
                    <div
                      key={s}
                      className="bg-brand-surface border border-brand-border rounded-xl p-5"
                    >
                      <div className="font-bold text-brand-dark text-sm mb-2">{sp.name}</div>
                      <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
                        {sp.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-4 lg:sticky lg:top-4">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Contact
              </div>
              <div className="mb-4">
                <div className="text-2xs font-bold uppercase text-brand-text-light mb-1">Address</div>
                <p className="text-sm text-brand-dark m-0 leading-relaxed">{vet.address}</p>
              </div>
              <div className="mb-4">
                <div className="text-2xs font-bold uppercase text-brand-text-light mb-1">Phone</div>
                <p className="text-sm font-mono text-brand-dark m-0">
                  {vet.phone}{' '}
                  <span className="text-2xs text-brand-text-light italic">(placeholder)</span>
                </p>
              </div>
              <div className="mb-5">
                <div className="text-2xs font-bold uppercase text-brand-text-light mb-1">Hours</div>
                <p className="text-sm text-brand-dark m-0 leading-relaxed">{vet.hours}</p>
              </div>
              <button
                type="button"
                disabled
                aria-disabled
                className="bg-brand-primary/40 text-white text-sm font-bold px-4 py-2.5 rounded-lg w-full cursor-not-allowed"
                title="Booking is not active for sample listings. Real CTA wires when verified directory data is loaded."
              >
                Book Appointment (coming soon)
              </button>
              <p className="text-2xs text-brand-text-light italic mt-2 mb-0">
                Booking activates with the verified directory data source.
              </p>
            </div>

            <Link
              href={`/vets/${state.slug}/${city.slug}`}
              className="text-brand-primary text-sm font-bold no-underline hover:underline block"
            >
              ← All vets in {city.city}
            </Link>
          </aside>
        </div>
      </div>

      {/* Cross-link footer */}
      <div className="px-container-sm sm:px-container py-8 border-t border-brand-border bg-brand-surface">
        <div className="max-w-5xl text-sm text-brand-text-mid leading-relaxed">
          {vet.specialties[0] && (() => {
            const sp = SPECIALTIES.find((x) => x.slug === vet.specialties[0])
            return sp ? (
              <>
                Looking for a {sp.name.toLowerCase()} vet elsewhere?{' '}
                <Link
                  href="/specialists"
                  className="text-brand-primary font-bold no-underline hover:underline"
                >
                  See our specialty cluster
                </Link>
                {' '}— deep-dive guides on what each board-certified specialty handles and when to
                refer.
              </>
            ) : null
          })()}
        </div>
      </div>
    </>
  )
}
