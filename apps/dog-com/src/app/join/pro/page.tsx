import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'dog-com',
    title: 'Apply for a pro page',
    description:
      'Trainers and breeders can apply for a claimed profile on Dog.com. Not a marketplace booking tool yet.',
    path: '/join/pro',
    type: 'article',
  }),
  robots: { index: true, follow: true },
}

const inquireEmail = process.env.NEXT_PUBLIC_INQUIRE_EMAIL

export default function JoinProPage() {
  const subject = encodeURIComponent('Dog.com pro profile application')
  const body = encodeURIComponent(
    [
      'Name:',
      'Business name:',
      'City / service area:',
      'Trainer or breeder:',
      'Website or Instagram:',
      'Certifications (if any — do not invent):',
      'Short description:',
    ].join('\n'),
  )

  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Apply for a pro page',
        subtitle:
          'Claimed profile only. We do not verify you as a veterinarian or insurer. We do not process bookings or payments in this version.',
        category: 'Directory',
        publishedAt: 'August 2026',
        readTime: '2 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Join', href: '/join/pro' },
      ]}
    >
      <div className="carloOS-article">
        <h2>What you get</h2>
        <ul>
          <li>A page on dog.com you can point clients to</li>
          <li>Your service area and a contact path</li>
          <li>The ability to update copy when we add accounts</li>
        </ul>
        <h2>What you do not get yet</h2>
        <ul>
          <li>Payments through Dog.com</li>
          <li>A “verified by Dog.com” badge</li>
          <li>Guaranteed ranking in search</li>
        </ul>
        {inquireEmail ? (
          <p>
            <a href={`mailto:${inquireEmail}?subject=${subject}&body=${body}`}<
              Email your application
            </a>
          </p>
        ) : (
          <p>
            Applications open as soon as an inbox is wired on this deployment
            (<code>NEXT_PUBLIC_INQUIRE_EMAIL</code>). Until then, use the
            registrant contact on the domain WHOIS record and put “pro
            application” in the subject.
          </p>
        )}
      </div>
    </ArticleLayout>
  )
}
