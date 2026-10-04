import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema, buildMetadata, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'How We Pick | Vets.co',
  description:
    'Vets.co comparison tables use published policy terms, quote paths, and visit prices already on each card. We do not add a hands-on test.',
  path: '/how-we-pick',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'How we pick', url: 'https://vets.co/how-we-pick' },
  ],
})

export default function HowWePickPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-brand-text-light flex gap-2 mb-8">
          <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
          <span>›</span>
          <span className="text-brand-text-mid">How we pick</span>
        </nav>
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">How we pick</h1>
        <p className="text-sm text-brand-text-light mb-10">
          Last updated <time dateTime="2026-10-04">October 4, 2026</time>
        </p>
        <div className="carloOS-article">
          <p>
            Vets.co insurance tables line up the contract terms, reimbursement model, and quote path already written on each carrier card. They do not add a premium, a payout statistic, or a star rating that the card does not already show. The telehealth table uses the visit model and price band already on those cards.
          </p>
          <p>
            The editorial team writes the cards. Vets.co is not a veterinary practice, and a licensed veterinarian does not sign these rankings. There is no hands-on trial and no clinical test behind an editor score.
          </p>
          <p>
            Affiliate links are added after the card is written. A commission does not decide which row wins. See the{' '}
            <Link href="/disclosure" className="text-brand-primary hover:underline">disclosure</Link>.
          </p>
        </div>
      </div>
    </>
  )
}
