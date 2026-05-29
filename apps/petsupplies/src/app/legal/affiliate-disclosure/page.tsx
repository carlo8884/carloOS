import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'Affiliate Disclosure',
  description: 'PetSupplies.com affiliate disclosure — full FTC compliance details and editorial independence policy.',
  path: '/legal/affiliate-disclosure',
})

export default function AffiliateDisclosurePage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/legal/terms" className="hover:text-brand-primary no-underline">Legal</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Affiliate Disclosure</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-4xl tracking-tight mb-3">
        Affiliate Disclosure
      </h1>
      <p className="text-base text-brand-text-light mb-10">Last updated: 2026</p>

      <div className="carloOS-article">
        <h2>FTC Disclosure</h2>
        <p>
          PetSupplies.com participates in affiliate marketing programs designed to provide a means
          for sites to earn advertising fees by advertising and linking to retailer websites. We
          may earn a commission from qualifying purchases when you click an affiliate link on this
          site and make a purchase. This is at no additional cost to you.
        </p>

        <h2>Active Affiliate Programs</h2>
        <p>The retailers and programs we currently participate in include:</p>
        <ul>
          <li>Amazon Associates Program</li>
          <li>Chewy Affiliate Program (via Impact)</li>
          <li>ShareASale-affiliated retailers (specialty pet brands)</li>
        </ul>

        <h2>Our Editorial Independence Policy</h2>
        <p>
          We do not let commission rates determine which products we recommend. Our rankings are
          decided by the editorial team before affiliate links are added. Products with no
          affiliate relationship are included in our comparisons when they are the right
          recommendation. For the complete methodology, see{' '}
          <Link href="/editorial-standards" className="text-brand-primary underline">
            Editorial Standards
          </Link>
          .
        </p>

        <h2>How to Spot Affiliate Links</h2>
        <p>
          Affiliate links on PetSupplies.com are marked in two ways. First, every page that
          contains affiliate links displays a clear FTC disclosure banner at the top of the page.
          Second, every affiliate CTA includes <code>rel=&quot;nofollow sponsored&quot;</code> attributes
          at the HTML level, in compliance with FTC and Google guidelines.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about our affiliate relationships, our editorial standards, or
          any specific product recommendation, contact us. We are committed to transparency.
        </p>
      </div>
    </div>
  )
}
