import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema, buildMetadata, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'How We Pick | Fish.com',
  description:
    'Fish.com comparison tables use the published specs, price bands, and owner limits already printed on each equipment card. We do not add a hands-on test.',
  path: '/how-we-pick',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'How we pick', url: 'https://fish.com/how-we-pick' },
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
            Fish.com comparison tables line up facts that are already on the equipment cards: the published spec, the price band printed on the card, and the tank or keeper limit the card names. Filter, heater, light, tank, fertilizer, and test-kit tables do not add a flow rate, a wattage, a price, or a score that the card does not already show.
          </p>
          <p>
            The editorial team writes the cards. There is no hands-on trial and no lab test behind an editor score.
          </p>
          <p>
            Affiliate links are added after the card is written. A commission does not decide which row wins. The independence rules are on the{' '}
            <Link href="/editorial-standards" className="text-brand-primary hover:underline">editorial standards</Link> page.
          </p>
        </div>
      </div>
    </>
  )
}
