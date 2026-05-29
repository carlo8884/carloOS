import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata } from '@carloOS/ui'
import { LENDERS } from '@/data/lenders'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Request a Hard Money Loan Quote',
  description: 'Submit a quote request to a top hard money lender. We route your information directly to the lender you select.',
  path: '/quote',
})

export default function QuoteIndex() {
  return (
    <>
      <AffiliateDisclosure />
      <section className="px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-black tracking-tight mb-3">
            Request a Quote
          </h1>
          <p className="text-brand-text-mid mb-8">
            Pick the lender you want a quote from. We&apos;ll capture your loan parameters and relay them directly to the lender&apos;s intake desk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {LENDERS.map((l) => (
              <Link
                key={l.slug}
                href={`/quote/${l.slug}`}
                className="bg-brand-white border border-brand-border rounded p-4 no-underline hover:bg-brand-surface transition-colors"
              >
                <div className="font-display font-bold text-brand-text-dark">{l.name}</div>
                <div className="text-2xs uppercase tracking-wider text-brand-text-light mt-0.5">
                  Editorial Score {l.editorialScore.toFixed(1)}/10
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
