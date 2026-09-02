import type { Metadata } from 'next'
import { directoryClaimPrefill } from '@carloOS/config'
import { buildMetadata, ArticleLayout, InquireForm, EmailCapture } from '@carloOS/ui'
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
            defaultCity={prefill.city}
            defaultMessage={prefill.message}
          />
        </div>

        <h2>Owners: get a note when claimed pages exist</h2>
        <p>
          The form above is for clinics applying for a page. One email when
          accepted pages exist — no invented directory.
        </p>
        <div className="not-prose max-w-md my-6">
          <EmailCapture
            variant="section"
            siteId="vets-co"
            title="When claimed clinics have a page"
            subtitle="Owners only. One email when an accepted clinic page exists. Use the application form if you run a clinic."
            source="join-pro-under-hero"
            ctaText="Email me when listings appear"
          />
        </div>
      </div>
    </ArticleLayout>
  )
}
