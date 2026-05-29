/**
 * /find-vet — directory placeholder.
 * In production this routes to vets.co directory; for now we render an
 * interim page with a clear "search by ZIP" prompt and curated partners.
 */

import type { Metadata } from 'next'
import { buildMetadata, AffiliateLink, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'Find a Vet Near You',
  description:
    'Find an emergency vet, telehealth consult, or local clinic. Trusted partners and a directory powered by Vets.co.',
  path: '/find-vet',
  type: 'website',
})

export default function FindVetPage() {
  return (
    <>
      <AffiliateDisclosure variant="banner" />

      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-text-dark mb-3">
          Find a vet near you
        </h1>
        <p className="text-base text-brand-text-mid mb-8">
          For life-threatening emergencies, call your nearest ER vet directly. For everything else, these options will get your pet seen fast.
        </p>

        <h2 className="text-lg font-semibold text-brand-text-dark mb-3">
          Talk to a vet right now (telehealth)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <AffiliateLink
            program="vetster"
            href="https://vetster.com/?ref=askthevet"
            subId="askthevet:find-vet-telehealth"
            variant="card"
            badge="Video consult"
          >
            <span className="block text-base font-semibold text-brand-text-dark">
              Vetster
            </span>
            <span className="block text-sm text-brand-text-mid mt-1">
              Often same-day. Pay-per-visit.
            </span>
          </AffiliateLink>
          <AffiliateLink
            program="dutch"
            href="https://dutch.com/?ref=askthevet"
            subId="askthevet:find-vet-telehealth"
            variant="card"
            badge="Membership"
          >
            <span className="block text-base font-semibold text-brand-text-dark">
              Dutch
            </span>
            <span className="block text-sm text-brand-text-mid mt-1">
              Unlimited vet visits, prescriptions included.
            </span>
          </AffiliateLink>
        </div>

        <h2 className="text-lg font-semibold text-brand-text-dark mb-3">
          Find a local clinic
        </h2>
        <p className="text-sm text-brand-text-mid mb-4">
          We&apos;re bringing our full clinic directory to AskTheVet. In the meantime, the Vets.co directory has 30,000+ verified US clinics.
        </p>
        <AffiliateLink
          program="directory"
          href="https://vets.co/find-a-vet"
          subId="askthevet:find-vet-directory"
          variant="card"
        >
          <span className="block text-base font-semibold text-brand-text-dark">
            Search vets by ZIP code →
          </span>
          <span className="block text-sm text-brand-text-mid mt-1">
            Verified clinics, hours, and emergency availability.
          </span>
        </AffiliateLink>
      </article>
    </>
  )
}
