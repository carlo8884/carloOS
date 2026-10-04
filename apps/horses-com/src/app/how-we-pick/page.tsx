import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema, buildMetadata, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'How We Pick | Horses.com',
  description:
    'Horses.com comparison tables use published product facts, card prices, and cover types already described on the page. We do not add a hands-on test.',
  path: '/how-we-pick',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'How we pick', url: 'https://horses.com/how-we-pick' },
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
            Horses.com product tables line up facts that are already on the cards: the published spec, the price band printed on the card, and the horse or rider limit the card names. Blanket, supplement, saddle-pad, and halter tables do not add a measurement or a price the card does not already show.
          </p>
          <p>
            The horse-insurance table compares cover types the page already describes. It does not publish a premium, a payout percentage, or a carrier score.
          </p>
          <p>
            The editorial team writes the pages. Horses.com is not a veterinary practice, and a licensed veterinarian does not sign these rankings. There is no hands-on trial and no lab test behind an editor score. Affiliate links are added after the card is written. The independence rules are on the{' '}
            <Link href="/editorial-standards" className="text-brand-primary hover:underline">editorial standards</Link> page.
          </p>
        </div>
      </div>
    </>
  )
}
