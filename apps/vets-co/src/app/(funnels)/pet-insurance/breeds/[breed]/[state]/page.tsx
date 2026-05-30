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
} from '../../../../../../data/insurance-breeds-all'
import { CARRIERS } from '../../../../../../data/insurance-carriers'
import { States } from '../../../../../../data/states'
import { getStateInsuranceContext } from '../../../../../../data/insurance-by-state'

interface PageParams {
  params: Promise<{ breed: string; state: string }>
}

/**
 * Programmatic SEO page: (31 dog + 25 cat) breeds × 52 states = 2,912 pages.
 *
 * Each page targets buyer-stage queries like "best pet insurance for
 * golden retrievers in California". Content blends breed-specific risk
 * profile (from insurance-by-breed.ts) with state-specific regulatory
 * context (from insurance-by-state.ts). Editorial integrity per
 * QC-STANDARDS.md §1 — no fabricated numbers; directional language only.
 */

export async function generateStaticParams() {
  const out: Array<{ breed: string; state: string }> = []
  for (const breed of ALL_INSURANCE_BREEDS) {
    for (const state of States) {
      out.push({ breed: breed.slug, state: state.slug })
    }
  }
  return out
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { breed, state } = await params
  const b = findBreedBySlug(breed)
  const s = States.find((x) => x.slug === state)
  if (!b || !s) return {}
  return buildMetadata({
    siteId: 'vets-co',
    title: `${b.breedName} Pet Insurance in ${s.name} | Vets.co`,
    description: `Best pet insurance for ${b.breedName}s in ${s.name}. Breed-specific carrier picks, regulatory context, sample premiums.`,
    path: `/pet-insurance/breeds/${breed}/${state}`,
    type: 'article',
  })
}

export default async function BreedStateInsurancePage({ params }: PageParams) {
  const { breed, state } = await params
  const b = findBreedBySlug(breed)
  const s = States.find((x) => x.slug === state)
  if (!b || !s) notFound()

  const stateCtx = getStateInsuranceContext(s.slug)

  const recommendedCarrier = CARRIERS.find(
    (c) => c.slug === b.recommendedCarrier,
  )
  const altCarriers = b.alternateCarriers
    .map((slug) => CARRIERS.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  const stateRateAdjustment =
    stateCtx.rateDirection === 'above-average'
      ? 'roughly 15–25% above'
      : stateCtx.rateDirection === 'below-average'
        ? 'slightly below'
        : 'close to'

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'vets-co',
      title: `${b.breedName} Pet Insurance in ${s.name}`,
      description: `Breed-specific pet insurance recommendations for ${b.breedName}s in ${s.name}, with state regulatory context and carrier-level recommendations.`,
      url: `https://vets.co/pet-insurance/breeds/${breed}/${state}`,
      imageUrl: '',
      authorName: 'Vets.co Editorial',
      publishedAt: '2026-05-30T00:00:00Z',
      modifiedAt: '2026-05-30T00:00:00Z',
    }),
    buildBreadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://vets.co/' },
        { name: 'Pet Insurance', url: 'https://vets.co/pet-insurance' },
        {
          name: `${b.breedName} Insurance`,
          url: `https://vets.co/pet-insurance/breeds/${breed}`,
        },
        {
          name: s.name,
          url: `https://vets.co/pet-insurance/breeds/${breed}/${state}`,
        },
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
        <Link
          href={`/pet-insurance/breeds/${breed}`}
          className="hover:text-brand-primary"
        >
          {b.breedName}
        </Link>
        <span className="mx-2">/</span>
        <span>{s.name}</span>
      </nav>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
        {b.breedName} Pet Insurance in {s.name}
      </h1>
      <p className="text-lg text-brand-text-mid mb-6 leading-relaxed">
        {b.breedName}s carry {b.keyConditions.length} known hereditary
        conditions worth insuring against. Below: our carrier recommendation
        for {b.breedName}s in {s.name}, plus what {s.name}&apos;s insurance
        market means for your premium.
      </p>

      <AffiliateDisclosure variant="inline" siteId="vets-co" />

      {/* ─── Top recommendation ───────────────────────────────────────────── */}
      {recommendedCarrier && (
        <section className="mt-10 border-l-4 border-brand-primary bg-brand-bg p-6 rounded-r-lg">
          <div className="text-xs uppercase tracking-wide text-brand-text-light mb-1">
            Top pick for {b.breedName}s in {s.name}
          </div>
          <div className="font-display text-2xl font-bold mb-2">
            {recommendedCarrier.name}
          </div>
          <p className="text-brand-text-mid leading-relaxed mb-4">
            {b.recommendedReason}
          </p>
          <Link
            href={`/pet-insurance/${recommendedCarrier.slug}`}
            className="inline-block px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors"
          >
            See {recommendedCarrier.name} details →
          </Link>
        </section>
      )}

      {/* ─── Why this breed needs coverage ────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold mb-4">
          What {b.breedName}s Are Most at Risk For
        </h2>
        <p className="text-brand-text-mid leading-relaxed mb-4">
          Every breed has a different risk profile. {b.breedName}s carry these
          hereditary or breed-prevalent conditions, in rough order of insurance
          relevance:
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
          Lifespan: typical {b.lifespan[0]}–{b.lifespan[1]} years. Size
          category: {b.sizeCategory}. Chronic-condition risk:{' '}
          <strong>{b.chronicRisk}</strong>. Orthopedic risk:{' '}
          <strong>{b.orthopedicRisk}</strong>. Dental risk:{' '}
          <strong>{b.dentalRisk}</strong>.
        </p>
      </section>

      {/* ─── State-specific context ───────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold mb-4">
          What {s.name} Means for Your Premium
        </h2>
        <div className="bg-brand-bg rounded-lg p-5 mb-4">
          <div className="text-xs uppercase tracking-wide text-brand-text-light mb-1">
            Sample premium for {b.breedName}s
          </div>
          <div className="font-display text-xl font-bold mb-2">
            ~${b.sampleMonthlyPremium[0]}–${b.sampleMonthlyPremium[1]}/mo
            <span className="text-sm font-normal text-brand-text-light ml-2">
              (national reference)
            </span>
          </div>
          <p className="text-sm text-brand-text-mid">
            {s.name} premiums tend to run {stateRateAdjustment} the national
            reference for the same policy structure.
          </p>
        </div>
        <p className="text-brand-text-mid leading-relaxed mb-3">
          {stateCtx.rateContext}
        </p>
        <p className="text-brand-text-mid leading-relaxed text-sm">
          <strong>Consumer note:</strong> {stateCtx.consumerProtectionNote}
        </p>
        <p className="text-xs text-brand-text-light mt-2">
          Regulator: {stateCtx.regulatorName}. Carrier availability:{' '}
          {stateCtx.carrierAvailability === 'all-major'
            ? 'all major carriers available'
            : stateCtx.carrierAvailability === 'most-major'
              ? 'most major carriers available; confirm before purchase'
              : 'limited — confirm directly with each carrier'}
          .
        </p>
      </section>

      {/* ─── Alternates ───────────────────────────────────────────────────── */}
      {altCarriers.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold mb-4">
            Alternates Worth Considering
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {altCarriers.map((c) => (
              <div
                key={c.slug}
                className="border border-brand-border rounded-lg p-5 bg-brand-white"
              >
                <div className="font-display text-lg font-bold mb-1">
                  {c.name}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
                  {c.tagline}
                </p>
                <Link
                  href={`/pet-insurance/${c.slug}`}
                  className="text-sm font-semibold text-brand-primary hover:underline"
                >
                  See {c.name} details →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Cross-link footer ────────────────────────────────────────────── */}
      <section className="mt-12 bg-brand-bg rounded-lg p-6">
        <h2 className="font-display text-xl font-bold mb-3">
          Compare Across All {s.name} Breeds, or All States for {b.breedName}s
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href={`/pet-insurance/breeds/${breed}`}
            className="flex-1 px-5 py-3 border border-brand-border bg-brand-white rounded text-sm font-semibold hover:border-brand-primary transition-colors"
          >
            All states for {b.breedName} →
          </Link>
          <Link
            href={`/pet-insurance/states/${state}`}
            className="flex-1 px-5 py-3 border border-brand-border bg-brand-white rounded text-sm font-semibold hover:border-brand-primary transition-colors"
          >
            All breeds in {s.name} →
          </Link>
        </div>
      </section>

      {/* ─── Lead magnet ──────────────────────────────────────────────────── */}
      <section className="mt-12">
        <EmailCapture
          variant="section"
          siteId="vets-co"
          source={`insurance-breed-state-${breed}-${state}`}
          title="Free: Pet Insurance Comparison Spreadsheet"
          subtitle="9 major carriers side-by-side. Premiums, deductibles, waiting periods, coverage exceptions."
          ctaText="Email me the spreadsheet"
        />
      </section>
    </article>
  )
}
