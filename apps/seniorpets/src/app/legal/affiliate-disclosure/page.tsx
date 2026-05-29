import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'Affiliate Disclosure | SeniorPetPharmacy',
  description:
    'SeniorPetPharmacy affiliate disclosure — how we earn commissions on Chewy Pharmacy, Amazon, and pet-insurance partner links and how it affects (and does not affect) our editorial recommendations.',
  path: '/legal/affiliate-disclosure',
})

export default function AffiliateDisclosurePage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Affiliate Disclosure</span>
      </nav>
      <h1 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-2">
        Affiliate Disclosure
      </h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: May 2026</p>
      <div className="carloOS-article">
        <h2>FTC Required Statement</h2>
        <p>
          SeniorPetPharmacy participates in affiliate programs including Chewy
          Pharmacy, Chewy, Amazon Associates, PetWellbeing, NuVet, Trupanion,
          Pets Best, Embrace, Spot, and Pumpkin. When you click a product, Rx,
          or insurance link on this site and make a qualifying purchase, we may
          earn a commission at no additional cost to you. This relationship is
          disclosed in compliance with the U.S. Federal Trade Commission&apos;s
          16 CFR Part 255 guidance on endorsements and testimonials.
        </p>

        <h2>How It Works</h2>
        <ul>
          <li>
            Affiliate links are clearly marked on every page that contains them
            (banner-level disclosure at the top of condition, medication, and
            insurance pages).
          </li>
          <li>
            If you click an affiliate link and complete a purchase within the
            program&apos;s tracking window, we earn a small percentage of the
            sale.
          </li>
          <li>
            You pay the same price you would pay if you went to the retailer
            directly. No markup, premium, or surcharge is added by the
            affiliate relationship.
          </li>
        </ul>

        <h2>Our Editorial Independence Policy</h2>
        <p>Affiliate commissions do not influence which products we recommend. Specifically:</p>
        <ul>
          <li>
            <strong>Recommendations are made first, affiliate links added
            second.</strong> Editorial choices are based on the criteria
            described in our editorial standards. Affiliate links are added
            after the recommendation is decided.
          </li>
          <li>
            <strong>Commission rates do not affect recommendations.</strong> We
            do not steer readers toward higher-commission products.
          </li>
          <li>
            <strong>We include products that pay no commission.</strong> When
            the best product for a senior pet&apos;s situation has no affiliate
            program, we still recommend it.
          </li>
        </ul>

        <h2>Programs We Participate In</h2>
        <p>
          SeniorPetPharmacy participates in: Chewy Pharmacy, Chewy, Amazon
          Associates, PetWellbeing, NuVet Labs, Trupanion, Pets Best, Embrace,
          Spot, Pumpkin. We may add or remove programs over time and update
          this page accordingly.
        </p>

        <h2>Editorial &amp; Veterinary Notice</h2>
        <p>
          Content on this site is for general informational purposes only and
          is not a substitute for an examination, diagnosis, or treatment plan
          from a licensed veterinarian. Always consult your veterinarian before
          starting or changing any medication or supplement.
        </p>

        <h2>Questions</h2>
        <p>
          If you spot a missing disclosure, an outdated link, or anything that
          looks like editorial bias toward a specific product or brand, please
          email legal@seniorpetpharmacy.com.
        </p>
      </div>
      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
      </div>
    </div>
  )
}
