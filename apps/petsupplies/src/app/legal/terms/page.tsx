import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'Terms of Use',
  description: 'PetSupplies.com terms of use — limits, disclaimers, and acceptable-use policy.',
  path: '/legal/terms',
})

export default function TermsPage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Terms of Use</span>
      </nav>
      <h1 className="font-display font-black text-brand-dark text-4xl tracking-tight mb-3">
        Terms of Use
      </h1>
      <p className="text-base text-brand-text-light mb-10">Last updated: 2026</p>
      <div className="carloOS-article">
        <h2>Editorial Disclaimer</h2>
        <p>
          PetSupplies.com publishes editorial product comparisons. Rankings and recommendations
          reflect the editorial judgment of our team based on the criteria described in our{' '}
          <Link href="/editorial-standards" className="text-brand-primary underline">
            Editorial Standards
          </Link>
          . They are not medical or veterinary advice. Specific medical decisions about your pet
          should be made in consultation with a licensed veterinarian.
        </p>
        <h2>Limit of Liability</h2>
        <p>
          To the maximum extent permitted by law, PetSupplies.com and its operators are not
          liable for any direct, indirect, incidental, special, or consequential damages arising
          from the use of this site or any third-party retailer linked from this site.
        </p>
        <h2>Trademarks</h2>
        <p>
          Brand names and trademarks mentioned on PetSupplies.com are the property of their
          respective owners. Mention of a brand or product does not constitute endorsement by
          that brand of PetSupplies.com.
        </p>
        <h2>Affiliate Relationships</h2>
        <p>
          See our{' '}
          <Link href="/legal/affiliate-disclosure" className="text-brand-primary underline">
            Affiliate Disclosure
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
