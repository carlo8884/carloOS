import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

const SITE_URL = 'https://dog.com'
const PAGE_PATH = '/data'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const MAILTO = 'data@dog.com'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Data Partnerships at Dog.com',
  description:
    'Editorially-curated breed, health, and symptom datasets at Dog.com. For researchers, journalists, universities, and commercial partners — contact data@dog.com.',
  path: PAGE_PATH,
})

const schema = combineSchemas(
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Data Partnerships at Dog.com',
    description:
      'Editorially-curated breed, health, and symptom datasets at Dog.com — partnerships for researchers, journalists, and commercial teams.',
    url: PAGE_URL,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Dog.com',
      url: SITE_URL,
    },
  },
  buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Data Partnerships', url: PAGE_URL },
    ],
  }),
  {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    name: 'Dog.com Editorial Datasets',
    url: PAGE_URL,
    description:
      'Editorially-curated datasets on dog breeds, breed health, and owner-facing symptom triage, assembled by the Dog.com editorial team from veterinary references, breed registries, and consensus clinical guidelines.',
    publisher: { '@type': 'Organization', name: 'Dog.com', url: SITE_URL },
    dataset: [
      {
        '@type': 'Dataset',
        name: 'Dog Breed Traits Dataset',
        description:
          'Structured records for each breed covering size, coat, temperament, exercise needs, and life expectancy, sourced from breed-club references and veterinary literature.',
        creator: { '@type': 'Organization', name: 'Dog.com Editorial' },
        keywords: ['dog breeds', 'breed traits', 'temperament', 'life expectancy'],
        variableMeasured: ['size', 'coat', 'temperament', 'exercise needs', 'life expectancy'],
        isAccessibleForFree: false,
        url: PAGE_URL,
      },
      {
        '@type': 'Dataset',
        name: 'Dog Breed Health Risks Dataset',
        description:
          'Common hereditary and breed-predisposed conditions per breed, with severity notes and references to underlying guidance (OFA, breed-club recommendations, peer-reviewed literature).',
        creator: { '@type': 'Organization', name: 'Dog.com Editorial' },
        keywords: ['breed health', 'hereditary conditions', 'canine genetics', 'OFA'],
        variableMeasured: ['breed-predisposed conditions', 'severity', 'source references'],
        isAccessibleForFree: false,
        url: PAGE_URL,
      },
      {
        '@type': 'Dataset',
        name: 'Dog Symptom Triage Taxonomy',
        description:
          "The controlled vocabulary powering Dog.com's symptom guides — owner-facing symptom names, severity tiers, and the conditions they map to.",
        creator: { '@type': 'Organization', name: 'Dog.com Editorial' },
        keywords: ['symptom triage', 'controlled vocabulary', 'veterinary taxonomy'],
        variableMeasured: ['symptom names', 'severity tiers', 'condition mappings'],
        isAccessibleForFree: false,
        url: PAGE_URL,
      },
    ],
  },
)

export default function DataPartnershipsPage() {
  return (
    <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
      <SchemaScript schema={schema} />

      <nav aria-label="Breadcrumb" className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Data Partnerships</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">
        Data partnerships at Dog.com
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
          Dog.com maintains editorially-curated datasets on dog breeds, breed
          health, and pet-owner symptom triage. The datasets are assembled and
          updated by the Dog.com editorial team from publicly available
          veterinary references, breed registries, and consensus clinical
          guidelines.
        </p>
        <p>
          If you are a journalist, researcher, university group, or commercial
          partner interested in working with this data — whether for
          attributed reporting, academic study, internal product research, or
          a licensed integration — please email{' '}
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
          published research, attributed journalism, or open documentation —
          and we are happy to discuss commercial licensing for product
          integrations where attribution makes sense.
        </p>

        <h2>Data assets</h2>
        <ul>
          <li>
            <strong>Breed traits dataset</strong> — structured records for
            each breed covering size, coat, temperament, exercise needs, and
            life expectancy, sourced from breed-club references and
            veterinary literature.
          </li>
          <li>
            <strong>Breed health risks dataset</strong> — common hereditary
            and breed-predisposed conditions per breed, with severity notes
            and references to underlying guidance (OFA, breed-club
            recommendations, peer-reviewed literature).
          </li>
          <li>
            <strong>Symptom triage taxonomy</strong> — the controlled
            vocabulary used to power Dog.com&apos;s symptom guides, including
            owner-facing symptom names, severity tiers, and the conditions
            they map to.
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
            placement or favorable scoring inside the datasets we maintain.
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
