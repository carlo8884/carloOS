/**
 * Dog.com — Pet insurance hub.
 *
 * Top of the insurance funnel. Routes visitors either to:
 *   - the buyer's guide (/reviews/best-pet-insurance) for comparison shoppers
 *   - the per-breed pages (/pet-insurance/breeds/[breed]) for breed-aware shoppers
 *
 * Architect S6 — monetization.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AffiliateDisclosure,
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  EmailCapture,
  SchemaScript,
} from '@carloOS/ui'
import { INSURANCE_BREEDS } from '../../data/insurance-by-breed'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Pet Insurance Hub — Breed-Specific Guides | Dog.com',
  description:
    'Pick the right pet insurance carrier for your dog. 30 breed-specific guides, 9 carriers compared on the policy specs that actually matter — deductible type, orthopedic wait, dental coverage.',
  path: '/pet-insurance',
  type: 'website',
})

const FEATURED_BREEDS = [
  'golden-retriever',
  'french-bulldog',
  'labrador-retriever',
  'german-shepherd',
  'dachshund',
  'cavalier-king-charles-spaniel',
  'yorkshire-terrier',
  'great-dane',
]

export default function PetInsuranceHubPage() {
  const featured = FEATURED_BREEDS.map((slug) =>
    INSURANCE_BREEDS.find((b) => b.slug === slug),
  ).filter((b): b is (typeof INSURANCE_BREEDS)[number] => Boolean(b))

  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: 'Pet Insurance Hub — Breed-Specific Guides',
    description:
      '30 breed-specific pet insurance guides plus carrier comparison.',
    url: 'https://dog.com/pet-insurance',
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Pet Insurance', url: 'https://dog.com/pet-insurance' },
    ],
  })
  const combined = combineSchemas(articleSchema, breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={combined} />

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Pet Insurance</span>
      </nav>

      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          Buyer's Guide Hub
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4.4vw, 50px)' }}
        >
          Pet Insurance
        </h1>
        <p className="text-base sm:text-lg font-light text-white/65 max-w-2xl leading-relaxed">
          The right carrier depends almost entirely on your dog's breed. A
          Golden needs unlimited cancer coverage; a Lab needs the shortest
          possible orthopedic waiting period; a Yorkie needs dental-disease
          coverage most carriers exclude. Start with the breed-specific guide
          for your dog — or compare all 9 carriers head-to-head.
        </p>
      </div>

      <div className="px-container sm:px-container-sm py-12">
        <AffiliateDisclosure variant="banner" category="pet insurance" />

        {/* By Breed section */}
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-3">
            <h2 className="font-display text-2xl font-bold text-brand-dark m-0">
              Pet Insurance by Breed
            </h2>
            <span className="text-xs text-brand-text-light">
              30 breeds covered
            </span>
          </div>
          <p className="text-sm text-brand-text-mid max-w-3xl mb-6">
            Each breed page recommends the specific carrier whose policy spec
            best matches that breed's hereditary risk profile — and explains
            why. Featured breeds below; the full list is at the bottom.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {featured.map((b) => (
              <Link
                key={b.slug}
                href={`/pet-insurance/breeds/${b.slug}`}
                className="block border border-brand-border rounded-xl p-5 bg-white no-underline hover:border-brand-primary hover:shadow-sm transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
                  {b.sizeCategory} · {b.lifespan[0]}–{b.lifespan[1]} yr
                </div>
                <div className="font-display text-base font-bold text-brand-dark mb-1">
                  {b.breedName}
                </div>
                <div className="text-xs text-brand-text-light">
                  Top pick: {b.breedName === b.breedName ? '' : ''}
                  <span className="text-brand-text-mid font-semibold">
                    {b.recommendedCarrier.replace(/-/g, ' ')}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-brand-border">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
              All 30 breeds
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-brand-text-mid list-none p-0 m-0">
              {INSURANCE_BREEDS.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/pet-insurance/breeds/${b.slug}`}
                    className="text-brand-text-mid hover:text-brand-primary no-underline"
                  >
                    {b.breedName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Compare carriers */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
            Compare All Carriers
          </h2>
          <p className="text-sm text-brand-text-mid max-w-3xl mb-4">
            If you want to comparison-shop independent of breed, our full
            buyer's guide ranks 9 carriers on payout rates, exclusions, and
            real claims experience.
          </p>
          <Link
            href="/reviews/best-pet-insurance"
            className="inline-block bg-brand-primary text-white font-semibold px-6 py-3 rounded-md no-underline hover:bg-brand-primary-dark"
          >
            Read the Best Pet Insurance buyer's guide →
          </Link>
        </section>

        <EmailCapture
          variant="section"
          siteId="dog-com"
          title="Free: Pet Insurance Comparison Spreadsheet"
          subtitle="9 carriers compared on the specs that actually matter."
          source="dog-com:insurance-comparison"
        />
      </div>
    </>
  )
}
