import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, InquireForm } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'dog-com',
    title: 'Contact',
    description: 'Acquisition, partnership, and press notes for Dog.com.',
    path: '/inquire',
    type: 'article',
  }),
  robots: { index: false, follow: false },
}

export default function InquirePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Contact',
        subtitle: 'Acquisition, partnership, or press. There is no public asking price.',
        category: 'Site',
        publishedAt: 'August 2026',
        readTime: '1 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Contact', href: '/inquire' },
      ]}
    >
      <div className="carloOS-article">
        <p>Use the form. A person reads it.</p>
        <InquireForm siteName="Dog.com" />
      </div>
    </ArticleLayout>
  )
}
