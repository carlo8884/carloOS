import type { Metadata } from 'next'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Affiliate Disclosure — HardMoneyLoans.com',
  description: 'Editorial integrity policy and FTC affiliate disclosure for HardMoneyLoans.com.',
  path: '/disclosure',
  type: 'article',
})

export default function DisclosurePage() {
  return (
    <main className="min-h-screen bg-brand-white py-16">
      <div className="max-w-content mx-auto px-container">
        <h1 className="font-display font-black text-brand-dark text-4xl mb-6">
          Affiliate Disclosure
        </h1>
        <AffiliateDisclosure variant="page" siteId="hardmoneyloans" />
      </div>
    </main>
  )
}
