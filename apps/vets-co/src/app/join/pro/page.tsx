import type { Metadata } from 'next'
import Link from 'next/link'
import { directoryClaimPrefill } from '@carloOS/config'
import { vetsInquireCaptureEnabled } from '@carloOS/config/capture-flags'
import { buildMetadata, ArticleLayout, InquireForm} from '@carloOS/ui'
import listings from '../../../data/directory-listings.json'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'vets-co',
    title: 'Apply for a clinic page',
    description:
      'Clinics can apply for a claimed profile on Vets.co. Approval is manual.',
    path: '/join/pro',
    type: 'article',
  }),
  robots: { index: false, follow: false },
}

export default function JoinProPage({
  searchParams,
}: {
  searchParams: { listing?: string }
}) {
  const prefill = directoryClaimPrefill(listings, searchParams.listing)
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Apply for a clinic page',
        subtitle:
          'Claimed profile only. We do not certify you, book your calendar, or process payments. Approval is manual.',
        category: 'Directory',
        publishedAt: 'September 2026',
        readTime: '2 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Directory', href: '/directory' },
        { name: 'Apply', href: '/join/pro' },
      ]}
    >
      <div className="carloOS-article">
        <h2>Application</h2>
        <div className="not-prose max-w-md my-6">
          <InquireForm
            siteName="Vets.co"
            intent="pro-application"
            variant="page"
            open={vetsInquireCaptureEnabled()}
            defaultCity={prefill.city}
            defaultMessage={prefill.message}
            defaultListing={prefill.listing}
          />
        </div>

        <h2>Looking for care</h2>
        <p>
          Clinic applications stay on this page only when the inbox is connected.
          Owners looking for care should use{' '}
          <Link href="/find-a-vet">the directory</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
