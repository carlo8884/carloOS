import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema, buildMetadata, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'About | Horses.com',
  description:
    'What Horses.com is, how tack and supplement picks are made, how the site earns affiliate commissions, and how to report an error.',
  path: '/about',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'About', url: 'https://horses.com/about' },
  ],
})

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-brand-text-light flex gap-2 mb-8">
          <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
          <span>›</span>
          <span className="text-brand-text-mid">About</span>
        </nav>
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-8">About Horses.com</h1>
        <div className="carloOS-article">
          <p>
            Horses.com is a reference for horse owners. The pages cover care, tack, blankets, supplements, and insurance types. The editorial team writes them. Horses.com is not a veterinary practice, and a licensed veterinarian does not sign the pages. There is no named author and no hands-on trial behind a ranking.
          </p>
          <h2>How pages are researched</h2>
          <p>
            Health pages cite the primary sources used for that page. Prices on money pages carry the date they were checked. Affiliate links are disclosed on the page and on the disclosure. There is no veterinarian reviewer. Pages are researched from cited veterinary sources and are not a substitute for a veterinarian.
          </p>
          <h2>How picks are made</h2>
          <p>
            Product tables use the published spec, the price band, and the horse or rider limit already printed on each card. The method is on{' '}
            <Link href="/how-we-pick" className="text-brand-primary hover:underline">How we pick</Link>.
          </p>
          <h2>How Horses.com earns money</h2>
          <p>
            Horses.com earns a commission when a reader follows a tracked affiliate link. The commission does not decide which row is listed first. The editorial and affiliate policy is on{' '}
            <Link href="/editorial-standards" className="text-brand-primary hover:underline">editorial standards</Link>, and the partner list is on the{' '}
            <Link href="/disclosure" className="text-brand-primary hover:underline">disclosure</Link>.
          </p>
          <h2>Report an error</h2>
          <p>
            Email <a href="mailto:editorial@horses.com">editorial@horses.com</a> with the page address and the sentence that looks wrong. A source for the correction helps. That address is the same one printed on the disclosure page.
          </p>
        </div>
      </div>
    </>
  )
}
