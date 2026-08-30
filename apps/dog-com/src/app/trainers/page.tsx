import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'dog-com',
    title: 'Dog trainers',
    description:
      'Claimed trainer directory on Dog.com. Profiles are submitted by the trainer. Dog.com does not certify or employ them.',
    path: '/trainers',
    type: 'website',
  }),
  robots: { index: false, follow: false },
}

export default function TrainersIndexPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Trainers',
        subtitle:
          'A claimed directory, not a certification board. Trainers apply and own their page. Dog.com does not book sessions or take a cut yet.',
        category: 'Directory',
        publishedAt: 'August 2026',
        readTime: '1 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Trainers', href: '/trainers' },
      ]}
    >
      <div className="carloOS-article">
        <p>
          This list starts empty on purpose. We will not invent names, reviews,
          or credentials to look busy.
        </p>
        <p>
          If you train dogs professionally and want a page on dog.com, apply.
          Approval is manual.
        </p>
        <p>
          <Link href="/join/pro">Apply for a trainer page →</Link>
        </p>
      </div>
    </ArticleLayout>
  )
}
