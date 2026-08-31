/**
 * Dog.com — Breed × pet-insurance hub.
 *
 * Hub for the breed-insurance cluster: lists every covered breed (those with
 * a breeds.ts insuranceProfile) and links to each /breeds/<slug>/insurance
 * spoke. Emits ItemList JSON-LD so AI surfaces can enumerate the set.
 *
 * Trust (QC §1): "Dog.com Editorial"; risk framing is honest (predispositions,
 * not certainties); no scaremongering. FTC disclosure sits above the
 * comparison CTA.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Breadcrumb,
  AffiliateDisclosure,
  CrossPortfolioCard,
  RelatedLinks,
  SchemaScript,
  buildMetadata,
} from '@carloOS/ui'
import {
  getBreedsWithInsuranceProfile,
  getBreedInsuranceProfile,
  type InsuranceRiskTier,
} from '../../../data/breeds'

const SITE_URL = 'https://dog.com'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Pet Insurance by Dog Breed: Cost Drivers & Guides | Dog.com',
  description:
    'Breed-by-breed pet insurance guides: each dog breed’s top hereditary cost drivers, why enrollment timing matters, and what to check before you buy.',
  path: '/breeds/insurance',
  type: 'article',
})

function riskBadge(tier: InsuranceRiskTier): { label: string; cls: string } {
  switch (tier) {
    case 'higher':
      return {
        label: 'Higher interest',
        cls: 'bg-brand-primary/15 text-brand-primary',
      }
    case 'lower':
      return { label: 'Lower interest', cls: 'bg-brand-surface text-brand-text-light' }
    default:
      return { label: 'Average interest', cls: 'bg-brand-surface text-brand-text-mid' }
  }
}

export default function BreedInsuranceHubPage() {
  const breeds = getBreedsWithInsuranceProfile()

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pet insurance guides by dog breed',
    itemListElement: breeds.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Is pet insurance worth it for a ${b.name}?`,
      url: `${SITE_URL}/breeds/${b.slug}/insurance`,
    })),
  }

  return (
    <>
      <SchemaScript schema={itemListSchema} />

      <Breadcrumb
        siteId="dog-com"
        items={[
          { name: 'Home', href: '/' },
          { name: 'Breeds', href: '/breeds' },
          { name: 'Insurance' },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container pt-12 pb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/20 text-brand-primary">
            Pet Insurance
          </span>
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-white/10 text-white/70">
            {breeds.length} breeds covered
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-none mb-3"
          style={{ fontSize: 'clamp(30px, 4.5vw, 50px)' }}
        >
          Pet Insurance by Dog Breed
        </h1>
        <p className="text-base font-light text-white/70 leading-relaxed max-w-2xl">
          Different breeds carry different hereditary risks — so the case for
          pet insurance, and what to look for in a policy, is breed-specific.
          Each guide below is anchored in that breed&apos;s documented cost
          drivers.
        </p>
      </section>

      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="carloOS-article min-w-0">
            <h2>Why breed matters for pet insurance</h2>
            <p>
              Pet insurance prices and pays out around risk. A breed with a
              well-documented predisposition to a costly hereditary condition is
              a different proposition from a low-risk mixed-breed dog — both in
              what a policy is likely to cost and in which coverage details
              matter most. Crucially, insurance never covers pre-existing
              conditions, so the value of a policy hinges on enrolling
              <em> before</em> a breed-typical sign is on the veterinary record.
            </p>
            <p>
              The guides below break each breed down by its top hereditary cost
              drivers, why enrollment timing matters for that specific breed, and
              what to check on a quote. Risk framing reflects documented
              predispositions — not a prediction that any individual dog will
              develop a condition.
            </p>

            <h2>Browse breed insurance guides</h2>
            <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
              {breeds.map((b) => {
                const profile = getBreedInsuranceProfile(b.slug)
                const badge = profile
                  ? riskBadge(profile.riskTier)
                  : { label: '', cls: '' }
                const lead = profile?.topConditions[0]
                return (
                  <Link
                    key={b.slug}
                    href={`/breeds/${b.slug}/insurance`}
                    className="flex flex-col border border-brand-border rounded-xl p-5 bg-white no-underline hover:border-brand-primary transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-display font-bold text-brand-dark text-base">
                        {b.name}
                      </span>
                      {badge.label && (
                        <span
                          className={`text-2xs font-bold tracking-eyebrow uppercase px-2 py-0.5 rounded-pill ${badge.cls}`}
                        >
                          {badge.label}
                        </span>
                      )}
                    </div>
                    {lead && (
                      <span className="text-sm text-brand-text-mid leading-relaxed">
                        Top cost driver: {lead.name.split('(')[0].trim()}{' '}
                        <span className="text-brand-text-light">
                          ({lead.typicalCostRange})
                        </span>
                      </span>
                    )}
                    <span className="text-xs font-semibold text-brand-primary mt-3">
                      Read the {b.name} guide →
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Disclosure above the comparison CTA (QC §1) */}
            <div className="not-prose my-8">
              <AffiliateDisclosure variant="inline" siteId="dog-com" />
            </div>

            <section className="not-prose my-8 border border-brand-border rounded-xl p-6 bg-brand-surface">
              <h2 className="font-display font-black text-brand-dark tracking-tight text-2xl mt-0 mb-2">
                Compare pet insurance carriers
              </h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-5">
                Once you know your breed&apos;s risk profile, compare a few real
                quotes against it. Our editorial comparison breaks the carriers
                down by hereditary coverage, limits, and waiting periods.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://vets.co/reviews/best-pet-insurance"
                  className="inline-block bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
                >
                  Compare the best pet insurance →
                </Link>
                <Link
                  href="/pet-insurance"
                  className="inline-block border border-brand-border text-brand-dark text-sm font-semibold px-5 py-2.5 rounded-md no-underline hover:border-brand-primary"
                >
                  See breed coverage guidance →
                </Link>
              </div>
            </section>

            <p className="text-sm text-brand-text-light mt-8">
              Editorial guidance from <strong>Dog.com Editorial</strong>, drawn
              from cited breed-health references. General information, not
              veterinary or financial advice.
            </p>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-6 self-start">
            <RelatedLinks
              title="Related"
              links={[
                { label: 'Best Pet Insurance Compared', href: 'https://vets.co/reviews/best-pet-insurance' },
                { label: 'All Dog Breeds', href: '/breeds' },
                { label: 'Dog Health Conditions', href: '/conditions' },
              ]}
            />
            <CrossPortfolioCard
              currentSite="dog-com"
              contentType="breed"
              variant="sidebar"
            />
          </aside>
        </div>
      </div>
    </>
  )
}
