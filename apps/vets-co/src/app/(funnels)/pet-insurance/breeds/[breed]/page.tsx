import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure,
  EmailCapture,
} from '@carloOS/ui'
import {
  ALL_INSURANCE_BREEDS,
  findBreedBySlug,
} from '../../../../../data/insurance-breeds-all'
import { CARRIERS } from '../../../../../data/insurance-carriers'
import { States } from '../../../../../data/states'

interface PageParams {
  params: Promise<{ breed: string }>
}

export async function generateStaticParams() {
  return ALL_INSURANCE_BREEDS.map((b) => ({ breed: b.slug }))
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { breed } = await params
  const b = findBreedBySlug(breed)
  if (!b) return {}
  return buildMetadata({
    siteId: 'vets-co',
    title: `${b.breedName} Pet Insurance — Best Carriers by State | Vets.co`,
    description: `Best pet insurance for ${b.breedName}s. Breed-specific carrier picks, hereditary conditions, sample premiums, state-by-state index.`,
    path: `/pet-insurance/breeds/${breed}`,
    type: 'article',
  })
}

export default async function BreedInsuranceHub({ params }: PageParams) {
  const { breed } = await params
  const b = findBreedBySlug(breed)
  if (!b) notFound()

  const recommended = CARRIERS.find((c) => c.slug === b.recommendedCarrier)

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'vets-co',
      title: `${b.breedName} Pet Insurance — Best Carriers`,
      description: `Breed-specific pet insurance for ${b.breedName}s, including risk profile, recommended carrier, and a state-by-state index.`,
      url: `https://vets.co/pet-insurance/breeds/${breed}`,
      imageUrl: '',
      authorName: 'Vets.co Editorial',
      publishedAt: '2026-05-30T00:00:00Z',
      modifiedAt: '2026-05-30T00:00:00Z',
    }),
    buildBreadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://vets.co/' },
        { name: 'Pet Insurance', url: 'https://vets.co/pet-insurance' },
        { name: `${b.breedName}`, url: `https://vets.co/pet-insurance/breeds/${breed}` },
      ],
    }),
  )

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <SchemaScript schema={schema} />

      <nav
        aria-label="Breadcrumb"
        className="text-sm text-brand-text-light mb-4"
      >
        <Link href="/" className="hover:text-brand-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/pet-insurance" className="hover:text-brand-primary">
          Pet Insurance
        </Link>
        <span className="mx-2">/</span>
        <span>{b.breedName}</span>
      </nav>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
        Best Pet Insurance for {b.breedName}s
      </h1>
      <p className="text-lg text-brand-text-mid mb-6 leading-relaxed">
        {b.breedName}s carry {b.keyConditions.length} hereditary conditions
        worth screening with the right insurance carrier. Below: our top pick,
        the conditions that matter, and a state-by-state breakdown.
      </p>

      <AffiliateDisclosure variant="inline" siteId="vets-co" />

      {/* ─── Top pick ─────────────────────────────────────────────────────── */}
      {recommended && (
        <section className="mt-10 border-l-4 border-brand-primary bg-brand-bg p-6 rounded-r-lg">
          <div className="text-xs uppercase tracking-wide text-brand-text-light mb-1">
            Top pick for {b.breedName}s
          </div>
          <div className="font-display text-2xl font-bold mb-2">
            {recommended.name}
          </div>
          <p className="text-brand-text-mid leading-relaxed mb-4">
            {b.recommendedReason}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/pet-insurance/${recommended.slug}`}
              className="inline-block px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors"
            >
              See {recommended.name} details →
            </Link>
            <Link
              href="/pet-insurance"
              className="inline-block px-5 py-2.5 border border-brand-border bg-brand-white text-sm font-bold rounded hover:border-brand-primary transition-colors"
            >
              Compare all carriers →
            </Link>
          </div>
        </section>
      )}

      {/* ─── Hereditary conditions ────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold mb-4">
          {b.breedName} Hereditary Conditions
        </h2>
        <p className="text-brand-text-mid leading-relaxed mb-4">
          The conditions below are why breed-specific insurance recommendations
          matter. The right carrier for {b.breedName}s is the one whose policy
          spec matches this risk profile.
        </p>
        <ul className="space-y-2">
          {b.keyConditions.map((c, i) => (
            <li
              key={i}
              className="text-brand-text-mid leading-relaxed pl-4 border-l-2 border-brand-border"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="text-sm text-brand-text-light leading-relaxed mt-4">
          Lifespan: {b.lifespan[0]}–{b.lifespan[1]} years. Size category:{' '}
          {b.sizeCategory}.
        </p>
      </section>

      {/* ─── State-by-state index ─────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-3">
          {b.breedName} Insurance by State
        </h2>
        <p className="text-brand-text-mid leading-relaxed mb-5">
          Premiums and consumer protections vary by state. Pick your state for
          a {s_name(b.breedName)} insurance breakdown specific to where you
          live:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {States.map((s) => (
            <Link
              key={s.slug}
              href={`/pet-insurance/breeds/${b.slug}/${s.slug}`}
              className="text-sm px-3 py-2 border border-brand-border rounded hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Lead magnet ──────────────────────────────────────────────────── */}
      <section className="mt-12">
        <EmailCapture
          variant="section"
          siteId="vets-co"
          source={`insurance-breed-${breed}`}
          title="Free: Pet Insurance Comparison Spreadsheet"
          subtitle="9 major carriers side-by-side — premiums, deductibles, waiting periods."
          ctaText="Email me the spreadsheet"
        />
      </section>
    </article>
  )
}

// Small helper so the JSX above reads cleanly — possessive form of breed name
function s_name(breedName: string): string {
  return breedName.endsWith('s') ? `${breedName}'` : `${breedName}'s`
}
