import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

const SITE_URL = 'https://horses.com'
const PAGE_PATH = '/data'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const MAILTO = 'data@horses.com'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Data Partnerships at Horses.com',
  description:
    'Horses.com horse breed dataset and discipline reference for researchers, journalists, and commercial partners. Contact data@horses.com.',
  path: PAGE_PATH,
})

const schema = combineSchemas(
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Data Partnerships at Horses.com',
    description:
      'Editorially-curated horse breed and discipline datasets at Horses.com — partnerships for researchers, journalists, and commercial teams.',
    url: PAGE_URL,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Horses.com',
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
        Data partnerships at Horses.com
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
          Horses.com maintains editorially-curated datasets covering horse
          breeds, riding disciplines, and discipline-specific equipment. The
          datasets are assembled and updated by the Horses.com editorial
          team from publicly available breed registries, discipline
          governing-body references, and equestrian literature.
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
            <strong>Horse breed dataset</strong> — structured records for
            each breed covering origin, typical conformation, height ranges,
            common uses, and discipline fit, recently expanded as part of
            the Horses.com breed-page rollout.
          </li>
          <li>
            <strong>Discipline equipment reference</strong> — required and
            optional equipment for dressage, hunter-jumper, eventing,
            western, trail, and endurance, sourced from discipline
            governing-body documentation.
          </li>
          <li>
            <strong>Breed-to-discipline mapping</strong> — controlled
            vocabulary linking breeds to the disciplines they are
            commonly used for, with notes on conformation-driven fit.
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
            placement or favorable treatment in the breed or discipline
            datasets.
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
        <Link href="/" className="text-brand-primary hover:underline">
          Home
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
