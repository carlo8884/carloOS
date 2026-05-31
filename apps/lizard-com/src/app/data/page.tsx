import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

const SITE_URL = 'https://lizard.com'
const PAGE_PATH = '/data'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const MAILTO = 'data@lizard.com'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Data Partnerships at Lizard.com',
  description:
    'Lizard.com reptile state-legality matrix and UVB lighting reference for researchers, journalists, and commercial partners. Contact data@lizard.com.',
  path: PAGE_PATH,
})

const schema = combineSchemas(
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Data Partnerships at Lizard.com',
    description:
      'Editorially-curated reptile state-legality and UVB lighting datasets at Lizard.com — partnerships for researchers, journalists, and commercial teams.',
    url: PAGE_URL,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Lizard.com',
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
    <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
      <SchemaScript schema={schema} />

      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Data Partnerships</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">
        Data partnerships at Lizard.com
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
          Lizard.com maintains editorially-curated datasets covering reptile
          state-by-state legality, species husbandry parameters, and UVB
          lighting reference values. The datasets are assembled and updated
          by the Lizard.com editorial team from publicly available state
          regulations, Ferguson UVB zone references, and peer-reviewed
          husbandry literature.
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
          We prefer partnerships that produce a publicly cited result — for
          example, attributed policy reporting on exotic-pet regulation,
          academic study of UVB husbandry outcomes, or referenced product
          integrations.
        </p>

        <h2>Data assets</h2>
        <ul>
          <li>
            <strong>Reptile state-legality matrix (when populated)</strong> —
            state-by-state regulatory status for the species Lizard.com
            covers, with citations to the relevant state codes and permit
            programs.
          </li>
          <li>
            <strong>UVB lighting reference</strong> — Ferguson-zone targets,
            recommended bulb classes, and distance/output guidance per
            species, cross-referenced with our enclosure setup guides.
          </li>
          <li>
            <strong>Species husbandry taxonomy</strong> — controlled
            vocabulary mapping species to recommended temperature gradients,
            humidity ranges, substrate types, and enclosure-size minimums.
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
            placement, brand inclusion in the UVB reference, or favorable
            treatment in our husbandry guidance.
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
