import type { Metadata } from 'next'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'HardMoneyLoans.com — Compare top hard money lenders for real estate investors',
  description: 'HardMoneyLoans.com — independent comparisons of hard money lenders for real estate investors. Rates, terms, and reviews.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <div className="max-w-content mx-auto px-container py-20">
        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
          HardMoneyLoans.com
        </p>
        <h1 className="font-display font-black text-brand-dark mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05 }}>
          Compare top hard money lenders for real estate investors
        </h1>
        <p className="text-lg text-brand-text-mid leading-relaxed max-w-2xl mb-10">
          HardMoneyLoans.com — independent comparisons of hard money lenders for real estate investors. Rates, terms, and reviews.
        </p>
        <AffiliateDisclosure variant="inline" siteId="hardmoneyloans" />
      </div>
    </main>
  )
}
