import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

const SITE_URL = 'https://fish.com'
const PAGE_PATH = '/data'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const MAILTO = 'data@fish.com'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Data Partnerships at Fish.com',
  description:
    'Fish.com aquarium stocking compatibility matrix and species water-parameter reference for researchers and partners. Contact data@fish.com.',
  path: PAGE_PATH,
})

const schema = combineSchemas(
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Data Partnerships at Fish.com',
    description:
      'Editorially-curated aquarium stocking compatibility matrix and water-parameter datasets at Fish.com — partnerships for researchers, journalists, and commercial teams.',
    url: PAGE_URL,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Fish.com',
      url: SITE_URL,
    },
  },
  buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Data Partnerships', url: PAGE_URL },
    ],
  }),
)

export default function DataPartnershipsPage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <SchemaScript schema={schema} />

      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Data Partnerships</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">
        Data partnerships at Fish.com
      </h1>
      <p className="text-sm text-brand-text-light mb-10">
        Contact:{' '}
        <a
          href={`mailto:${MAILTO}`}
          className="text-brand-primary hover:underline no-underline"
        >
          {MAILTO}
        </a>
      </p>

      <div className="carloOS-article">
        <p>
          Fish.com maintains editorially-curated datasets covering freshwater
          and saltwater aquarium species, water-parameter targets, and
          species-to-species compatibility. The datasets are assembled and
          updated by the Fish.com editorial team from publicly available
          ichthyology references, aquarium hobbyist literature, and
          consensus husbandry guidance.
        </p>
        <p>
          If you are a journalist, researcher, university group, or
          commercial partner interested in working with this data, please
          email{' '}
          <a
            href={`mailto:${MAILTO}`}
            className="text-brand-primary hover:underline no-underline"
          >
            {MAILTO}
          </a>{' '}
          with a short description of what you are building and the scope of
          data you need. We aim to reply within five business days.
        </p>
        <p>
          We prefer partnerships that produce a publicly cited result —
          attributed reporting, academic study, or referenced integration —
          and are open to commercial licensing where attribution makes sense.
        </p>

        <h2>Data assets</h2>
        <ul>
          <li>
            <strong>Aquarium stocking compatibility matrix</strong> — pairwise
            compatibility records across the species Fish.com covers, with
            notes on temperament, size mismatch, and water-parameter overlap.
          </li>
          <li>
            <strong>Water-parameter targets per species</strong> — recommended
            temperature, pH, hardness (GH/KH), and salinity ranges for each
            species, cross-referenced with our cycling and water-chemistry
            guides.
          </li>
          <li>
            <strong>Calculator inputs and assumptions</strong> — the formula
            assumptions behind the tank-volume, stocking, heater-wattage,
            water-change, and CO2 calculators, including the published
            references they draw on.
          </li>
        </ul>

        <h2>What we won&apos;t do</h2>
        <ul>
          <li>
            We don&apos;t sell tracking data, page-view logs, or any data
            derived from individual readers.
          </li>
          <li>
            We don&apos;t license our content for AI training without a
            written agreement that covers attribution and scope.
          </li>
          <li>
            We don&apos;t provide live API access at this stage — data
            handoffs are scoped, snapshot-based deliveries.
          </li>
          <li>
            We don&apos;t accept payment in exchange for editorial
            placement, calculator weighting, or favorable compatibility
            scoring.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          Email{' '}
          <a
            href={`mailto:${MAILTO}`}
            className="text-brand-primary hover:underline no-underline"
          >
            {MAILTO}
          </a>
          . There is no form on this page on purpose — mailto keeps the
          surface area small and routes directly to the editorial team.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link
          href="/editorial-standards"
          className="text-brand-primary hover:underline"
        >
          Editorial Standards
        </Link>
        <Link
          href="/disclosure"
          className="text-brand-primary hover:underline"
        >
          Affiliate Disclosure
        </Link>
      </div>
    </div>
  )
}
