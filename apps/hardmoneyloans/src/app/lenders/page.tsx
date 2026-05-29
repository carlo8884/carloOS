import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, AffiliateLink, buildMetadata } from '@carloOS/ui'
import { LENDERS } from '@/data/lenders'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Top Hard Money Lenders — Complete Directory',
  description: `Editorial-ranked directory of ${LENDERS.length} hard money lenders for real estate investors. Loan ranges, rates, LTV caps, and state coverage.`,
  path: '/lenders',
  type: 'website',
})

export default function LendersIndexPage() {
  return (
    <>
      <AffiliateDisclosure />
      <section className="px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-container-wide">
          <h1 className="font-display text-4xl font-black tracking-tight mb-3">
            Top Hard Money Lenders
          </h1>
          <p className="text-brand-text-mid max-w-2xl mb-10">
            Editorial-ranked directory of {LENDERS.length} private lenders. Click a profile for full program details, pros/cons, and a referral link.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LENDERS.sort((a, b) => b.editorialScore - a.editorialScore).map((l) => (
              <div key={l.slug} className="bg-brand-white border border-brand-border rounded-lg p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link href={`/lenders/${l.slug}`} className="no-underline">
                      <h2 className="font-display text-xl font-bold text-brand-text-dark hover:underline">
                        {l.name}
                      </h2>
                    </Link>
                    <div className="text-2xs uppercase tracking-wider text-brand-text-light mt-0.5">
                      Editorial Score {l.editorialScore.toFixed(1)}/10 · Founded {l.founded}
                    </div>
                  </div>
                  <AffiliateLink
                    vendor={l.vendor}
                    source="lenders-directory"
                    eventLabel={`directory-${l.slug}`}
                    className="shrink-0 px-3 py-1.5 bg-brand-primary text-brand-white text-2xs font-semibold rounded no-underline"
                  >
                    Get Quote
                  </AffiliateLink>
                </div>
                <p className="text-sm text-brand-text-mid mt-3 leading-relaxed">
                  {l.positioning}
                </p>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-4 text-2xs tabular-display">
                  <dt className="text-brand-text-light">Loan range</dt>
                  <dd className="text-brand-text-dark font-medium">${(l.loanMin/1000).toFixed(0)}k–${(l.loanMax/1_000_000).toFixed(1)}M</dd>
                  <dt className="text-brand-text-light">Rate range</dt>
                  <dd className="text-brand-text-dark font-medium">{l.rateMin.toFixed(2)}%–{l.rateMax.toFixed(2)}%</dd>
                  <dt className="text-brand-text-light">Max LTV</dt>
                  <dd className="text-brand-text-dark font-medium">{l.ltvMax}%</dd>
                  <dt className="text-brand-text-light">Term</dt>
                  <dd className="text-brand-text-dark font-medium">{l.termMonthsMin}–{l.termMonthsMax} mo</dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
