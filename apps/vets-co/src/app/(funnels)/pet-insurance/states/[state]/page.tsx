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
import { INSURANCE_BREEDS } from '../../../../../data/insurance-by-breed'
import { States } from '../../../../../data/states'
import { getStateInsuranceContext } from '../../../../../data/insurance-by-state'

interface PageParams {
  params: Promise<{ state: string }>
}

export async function generateStaticParams() {
  return States.map((s) => ({ state: s.slug }))
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { state } = await params
  const s = States.find((x) => x.slug === state)
  if (!s) return {}
  return buildMetadata({
    siteId: 'vets-co',
    title: `Pet Insurance in ${s.name} — Best Carriers by Breed | Vets.co`,
    description: `Best pet insurance in ${s.name}. State regulatory context, premium expectations, and breed-by-breed carrier recommendations.`,
    path: `/pet-insurance/states/${state}`,
    type: 'article',
  })
}

export default async function StateInsuranceHub({ params }: PageParams) {
  const { state } = await params
  const s = States.find((x) => x.slug === state)
  if (!s) notFound()

  const ctx = getStateInsuranceContext(s.slug)

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'vets-co',
      title: `Pet Insurance in ${s.name} — Best Carriers by Breed`,
      description: `Pet insurance market context for ${s.name} with breed-by-breed carrier recommendations and state regulatory notes.`,
      url: `https://vets.co/pet-insurance/states/${state}`,
      imageUrl: '',
      authorName: 'Vets.co Editorial',
      publishedAt: '2026-05-30T00:00:00Z',
      modifiedAt: '2026-05-30T00:00:00Z',
    }),
    buildBreadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://vets.co/' },
        { name: 'Pet Insurance', url: 'https://vets.co/pet-insurance' },
        { name: s.name, url: `https://vets.co/pet-insurance/states/${state}` },
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
        <span>{s.name}</span>
      </nav>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
        Pet Insurance in {s.name}
      </h1>
      <p className="text-lg text-brand-text-mid mb-6 leading-relaxed">
        Below: how {s.name} regulates pet insurance, what to expect on your
        premium, and breed-by-breed carrier recommendations specific to{' '}
        {s.name} owners.
      </p>

      <AffiliateDisclosure variant="banner" />

      {/* ─── Market context ───────────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold mb-4">
          The {s.name} Pet Insurance Market
        </h2>
        <p className="text-brand-text-mid leading-relaxed mb-3">
          {ctx.rateContext}
        </p>
        <p className="text-brand-text-mid leading-relaxed mb-3">
          <strong>Consumer note:</strong> {ctx.consumerProtectionNote}
        </p>
        <div className="bg-brand-bg rounded-lg p-4 text-sm text-brand-text-mid">
          <strong>Regulator:</strong> {ctx.regulatorName}.{' '}
          <strong>Carrier availability:</strong>{' '}
          {ctx.carrierAvailability === 'all-major'
            ? 'all major carriers operate in this state'
            : ctx.carrierAvailability === 'most-major'
              ? 'most major carriers operate in this state'
              : 'limited — confirm directly with each carrier'}
          .
        </div>
      </section>

      {/* ─── Breed index ──────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-3">
          Breed-Specific Recommendations for {s.name} Owners
        </h2>
        <p className="text-brand-text-mid leading-relaxed mb-5">
          Different breeds carry different hereditary risk profiles. The right
          carrier for your dog depends on its breed first, then state-specific
          factors second. Pick your breed for a {s.name}-specific breakdown:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {INSURANCE_BREEDS.map((b) => (
            <Link
              key={b.slug}
              href={`/pet-insurance/breeds/${b.slug}/${s.slug}`}
              className="text-sm px-3 py-2 border border-brand-border rounded hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              {b.breedName}
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Carrier overview cross-link ──────────────────────────────────── */}
      <section className="mt-12 bg-brand-bg rounded-lg p-6">
        <h2 className="font-display text-xl font-bold mb-3">
          Or Compare All Carriers Side-by-Side
        </h2>
        <p className="text-brand-text-mid mb-4">
          If you know which carriers you&apos;re considering and want to compare
          their full coverage specs rather than breed-by-breed:
        </p>
        <Link
          href="/pet-insurance"
          className="inline-block px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors"
        >
          See the carrier comparison →
        </Link>
      </section>

      {/* ─── Lead magnet ──────────────────────────────────────────────────── */}
      <section className="mt-12">
        <EmailCapture
          variant="section"
          siteId="vets-co"
          source={`insurance-state-${state}`}
          title="Free: Pet Insurance Comparison Spreadsheet"
          subtitle="9 major carriers side-by-side — premiums, deductibles, waiting periods."
          ctaText="Email me the spreadsheet"
        />
      </section>
    </article>
  )
}
