import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Affiliate Disclosure | Dog.com',
  description: 'Dog.com affiliate disclosure — how we earn commissions and how it affects (and doesn\'t affect) our editorial recommendations.',
  path: '/legal/affiliate-disclosure',
})

export default function AffiliateDisclosurePage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Affiliate Disclosure</span>
      </nav>
      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">Affiliate Disclosure</h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: May 2025</p>
      <div className="carloOS-article">
        <h2>FTC Required Statement</h2>
        <p>Dog.com participates in affiliate programs including Amazon Associates, Chewy, Trupanion, Healthy Paws, and others. When you click a product link on this site and make a qualifying purchase, we may earn a commission at no additional cost to you. This relationship is disclosed in compliance with the U.S. Federal Trade Commission&apos;s 16 CFR Part 255 guidance on endorsements and testimonials.</p>

        <h2>How It Works</h2>
        <ul>
          <li>Some product links on Dog.com are affiliate links. You can identify them by the disclosure label on or near the link (typically &quot;Affiliate link&quot;, an affiliate-link icon, or a section-level disclosure at the top of the page).</li>
          <li>If you click an affiliate link and complete a purchase within the affiliate program&apos;s tracking window (typically 24 hours for Amazon, longer for some retailers), we earn a small percentage of the sale.</li>
          <li>You pay the same price you would pay if you went to the retailer directly. There is no markup, premium, or surcharge added by the affiliate relationship.</li>
        </ul>

        <h2>Our Editorial Independence Policy</h2>
        <p>Affiliate commissions do not influence which products we rank or recommend. Specifically:</p>
        <ul>
          <li><strong>Rankings are made first, affiliate links added second.</strong> We decide what to include and how to rank it based on the editorial criteria described in our <Link href="/editorial-standards">Editorial Standards</Link>. Affiliate links are added afterward to whichever products pass that filter.</li>
          <li><strong>Commission rates do not affect recommendations.</strong> We do not steer readers toward higher-commission products. Where two products are comparable, we recommend the one that better fits the use case described, regardless of payout.</li>
          <li><strong>We include products that pay no commission.</strong> When the best product for a given use case has no affiliate program, we still include and recommend it.</li>
          <li><strong>We disclose every affiliate relationship.</strong> Every page that contains affiliate links carries a disclosure.</li>
        </ul>

        <h2>Programs We Participate In</h2>
        <p>Dog.com is a participant in the following affiliate programs: Amazon Associates, Chewy, Trupanion, Healthy Paws, and others. We may add or remove programs over time and will update this page accordingly. Adding a new affiliate program never retroactively changes existing rankings.</p>

        <h2>Questions</h2>
        <p>If you spot a missing disclosure, an outdated affiliate link, or anything that looks like editorial bias toward a specific product or brand, please email legal@dog.com.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
        <Link href="/editorial-standards" className="text-brand-primary hover:underline">Editorial Standards</Link>
      </div>
    </div>
  )
}
