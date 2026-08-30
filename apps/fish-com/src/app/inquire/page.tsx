import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'fish-com',
    title: 'Inquiries',
    description:
      'Acquisition and partnership inquiries for Fish.com. The site is an operating editorial property.',
    path: '/inquire',
    type: 'article',
  }),
  robots: { index: false, follow: false },
}

const inquireEmail = process.env.NEXT_PUBLIC_INQUIRE_EMAIL

export default function InquirePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Inquiries',
        subtitle:
          'Fish.com is an operating editorial site. Serious acquisition and partnership notes are welcome. There is no public asking price on this page.',
        category: 'Site',
        publishedAt: 'August 2026',
        readTime: '1 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Inquiries', href: '/inquire' },
      ]}
    >
      <div className="carloOS-article">
        <p>
          This is not a parked domain. Offers are considered. Editorial
          operations continue either way.
        </p>
        <h2>What to include</h2>
        <ul>
          <li>Name and organization</li>
          <li>Intended use of the name</li>
          <li>Offer in USD (optional)</li>
          <li>Whether you want the operating site, the name only, or both</li>
        </ul>
        {inquireEmail ? (
          <p>
            Send that to{' '}
            <a href={`mailto:${inquireEmail}?subject=Fish.com inquiry`}>
              {inquireEmail}
            </a>
            .
          </p>
        ) : (
          <p>
            An inquire inbox is not wired on this deployment yet. Use the
            registrant contact on WHOIS, or set{' '}
            <code>NEXT_PUBLIC_INQUIRE_EMAIL</code> on the Vercel project.
          </p>
        )}
      </div>
    </ArticleLayout>
  )
}
