import type { Metadata } from 'next'
import Link from 'next/link'
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
  robots: { index: false, follow: false },
}

export default function JoinProPage() {
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
        { name: 'Trainers', href: '/trainers' },
        { name: 'Apply', href: '/join/pro' },
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
        <p>
          Use the inquiry form and put “pro application” in the message, plus
          your city, website or Instagram, and any real certifications you hold.
        </p>
        <p>
          <Link href="/inquire">Send a pro application →</Link>
        </p>
      </div>
    </ArticleLayout>
  )
}
