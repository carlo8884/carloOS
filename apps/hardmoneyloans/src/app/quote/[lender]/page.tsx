import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AffiliateDisclosure, buildMetadata } from '@carloOS/ui'
import { LENDERS, getLender } from '@/data/lenders'
import { QuoteForm } from './QuoteForm'

export function generateStaticParams() {
  return LENDERS.map((l) => ({ lender: l.slug }))
}

export function generateMetadata({ params }: { params: { lender: string } }): Metadata {
  const l = getLender(params.lender)
  if (!l) {
    return buildMetadata({
      siteId: 'hardmoneyloans',
      title: 'Lender Not Found',
      description: 'Quote form not found.',
      path: `/quote/${params.lender}`,
      noIndex: true,
    })
  }
  return buildMetadata({
    siteId: 'hardmoneyloans',
    title: `Request a Quote from ${l.name}`,
    description: `Submit a quote request directly to ${l.name}. Loan parameters, contact details, and consent — no spam.`,
    path: `/quote/${l.slug}`,
  })
}

export default function QuotePage({ params }: { params: { lender: string } }) {
  const l = getLender(params.lender)
  if (!l) notFound()

  return (
    <>
      <AffiliateDisclosure />
      <section className="px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-2xs uppercase tracking-wider text-brand-primary font-semibold mb-2">
            Quote Request
          </div>
          <h1 className="font-display text-4xl font-black tracking-tight mb-3">
            Request a Quote from {l.name}
          </h1>
          <p className="text-brand-text-mid mb-8">
            We&apos;ll record your deal parameters and relay them directly to {l.name}&apos;s intake desk. You&apos;ll hear back from them — usually within 1 business day.
          </p>
          <QuoteForm lenderSlug={l.slug} lenderName={l.name} />
          <p className="text-2xs text-brand-text-light mt-5 leading-relaxed">
            This site does not approve loans, set rates, or guarantee outcomes. All loan terms are determined by the lender. This is not legal, tax, or financial advice.
          </p>
        </div>
      </section>
    </>
  )
}
