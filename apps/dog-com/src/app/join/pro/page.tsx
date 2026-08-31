import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, InquireForm, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'dog-com',
    title: 'Apply for a trainer page',
    description:
      'Trainers can apply for a claimed profile on Dog.com. Not a marketplace booking tool yet. Approval is manual.',
    path: '/join/pro',
    type: 'article',
  }),
  robots: { index: false, follow: false },
}

export default function JoinProPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Apply for a trainer page',
        subtitle:
          'Claimed profile only. We do not certify you, book your calendar, or process payments. Approval is manual.',
        category: 'Directory',
        publishedAt: 'August 2026',
        readTime: '2 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Trainers', href: '/trainers' },
        { name: 'Apply', href: '/join/pro' },
      ]}
    >
      <div className="carloOS-article">
        <h2>What you get</h2>
        <ul>
          <li>A page on dog.com you can point clients to</li>
          <li>Your service area and a contact path you control</li>
          <li>The ability to update copy when accounts exist</li>
        </ul>
        <h2>What you do not get yet</h2>
        <ul>
          <li>Payments through Dog.com</li>
          <li>A “verified by Dog.com” badge</li>
          <li>Guaranteed ranking in search</li>
        </ul>
        <p>
          List credentials you actually hold. Do not invent reviews. If we cannot
          tell where you work, the application sits.
        </p>

        <h2>Application</h2>
        <div className="not-prose max-w-md my-6">
          <InquireForm siteName="Dog.com" intent="pro-application" variant="page" />
        </div>

        <p>
          Owners looking for help now should start with{' '}
          <Link href="/training/trainer-credentials">credentials</Link>
          {' '}and{' '}
          <Link href="/training/training-red-flags">red flags</Link>
          {', not this form.'}
        </p>

        <h2>Owners: get a note when claimed pages exist</h2>
        <p>
          The form above is for trainers applying for a page. If you landed
          here looking for a trainer, the claimed list is empty on purpose.
          One email when accepted pages exist — no invented directory.
        </p>
        <div className="not-prose max-w-md my-6">
          <EmailCapture
            variant="section"
            siteId="dog-com"
            title="When claimed trainers have a page"
            subtitle="Owners only. One email when an accepted trainer page exists. Use the application form if you train dogs."
            source="join-pro-under-hero"
            ctaText="Email me when trainers appear"
            perks={['Not a booking tool', 'No invented trainers', 'Unsubscribe anytime']}
          />
        </div>
      </div>
    </ArticleLayout>
  )
}
