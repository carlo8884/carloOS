import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

const SITE_URL = 'https://vets.co'
const PAGE_PATH = '/data'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const MAILTO = 'data@vets.co'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Data Partnerships at Vets.co',
  description:
    'Vets.co vet-directory and pet insurance comparison datasets for researchers, journalists, and commercial partners. Contact data@vets.co.',
  path: PAGE_PATH,
})

const schema = combineSchemas(
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Data Partnerships at Vets.co',
    description:
      'Editorially-curated veterinary directory and pet insurance comparison datasets at Vets.co — partnerships for researchers, journalists, and commercial teams.',
    url: PAGE_URL,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Vets.co',
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
        Data partnerships at Vets.co
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
          Vets.co maintains editorially-curated datasets covering veterinary
          practices, board-certified specialties, and pet insurance plan
          comparisons. The datasets are assembled and updated by the Vets.co
          editorial team from publicly available regulatory filings, plan
          documentation, and veterinary specialty board listings.
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
          example, policy reporting on pet insurance, academic analysis of
          access to veterinary care, or referenced integrations.
        </p>

        <h2>Data assets</h2>
        <ul>
          <li>
            <strong>Vet directory (when populated)</strong> — practice
            listings with specialty, location, and verified-status flags.
            Sourced from state veterinary board public registries and the
            American Veterinary Medical Association directory.
          </li>
          <li>
            <strong>Pet insurance comparison matrix</strong> — plan-by-plan
            attributes for the major U.S. pet insurance carriers, including
            coverage tiers, exclusions, waiting periods, deductible
            structures, and chronic-condition handling.
          </li>
          <li>
            <strong>Specialty taxonomy</strong> — the controlled vocabulary
            mapping board-certified veterinary specialties to the conditions
            and procedures Vets.co covers editorially.
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
            We don&apos;t accept payment in exchange for inclusion in the
            directory or for favorable placement in the insurance
            comparison matrix.
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
