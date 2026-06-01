import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'Terms of Use | PetFoods.com',
  description: 'PetFoods.com terms of use — site usage, intellectual property, disclaimers, and liability limits.',
  path: '/legal/terms',
})

export default function TermsOfUsePage() {
  const lastUpdated = 'June 2026'
  return (
    <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Terms of Use</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">Terms of Use</h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: {lastUpdated}</p>

      <div className="carloOS-article">
      <p>By using PetFoods.com, you agree to these terms. PetFoods.com is published by Bolton Properties, LLC. The terms apply to all visitors and authenticated users.</p>

      <h2>Use of the Site</h2>
      <p>You may use PetFoods.com for personal, non-commercial reference. Bulk scraping, automated download of substantially all of the site, and republication without attribution are not permitted.</p>

      <h2>Editorial Content Is Not Professional Advice</h2>
      <p>PetFoods.com publishes reference and educational content. It is not a substitute for professional veterinary, medical, legal, or financial advice. Decisions about an individual animal should be made with a qualified veterinarian who can examine the specific case.</p>

      <h2>Affiliate Links</h2>
      <p>Many pages on PetFoods.com include affiliate links. We earn a commission on qualifying purchases made through these links. The commission does not influence our editorial rankings, which are documented in our <Link href="/editorial-standards" className="text-brand-primary no-underline hover:underline">editorial standards</Link>.</p>

      <h2>Intellectual Property</h2>
      <p>All editorial text, photography by PetFoods.com, layouts, and source code are the property of Bolton Properties, LLC, except where third-party rights are credited (e.g., Unsplash and Pexels photographer attribution, which remains with the photographer).</p>

      <h2>Disclaimer and Limits of Liability</h2>
      <p>PetFoods.com content is provided “as is” without warranty. To the maximum extent permitted by law, Bolton Properties, LLC is not liable for any indirect, incidental, or consequential damages arising from your use of the site.</p>

      <h2>Changes to These Terms</h2>
      <p>We may revise these terms periodically. Material changes will be reflected in the “Last updated” date below.</p>
</div>
    </div>
  )
}
