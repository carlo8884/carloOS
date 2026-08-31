import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = {
  ...buildMetadata({
    siteId: 'dog-com',
    title: 'Dog trainers',
    description:
      'Claimed trainer directory on Dog.com. The list starts empty on purpose. Profiles are submitted by the trainer. Dog.com does not certify or employ them.',
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
        title: 'Find a dog trainer',
        subtitle:
          'A claimed directory, not a certification board. Nobody is listed until they apply and we accept the page. Dog.com does not book sessions or take a cut yet.',
        category: 'Directory',
        publishedAt: 'August 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Trainers', href: '/trainers' },
      ]}
    >
      <div className="carloOS-article">
        <p>
          This list is empty on purpose. Invented names, star ratings, and
          “featured trainers” would cheapen the domain. When a trainer has a
          page here, it will be a page they asked for.
        </p>

        <h2>If you need a trainer now</h2>
        <p>
          Dog training is unregulated in the United States. Anyone can hang a
          sign. Use the guides below before you pay anyone — listed here or not.
        </p>
        <ul>
          <li>
            <Link href="/training/trainer-credentials">Trainer credentials explained</Link>
            {' — '}CPDT-KA, CBCC-KA, CAAB, DACVB, and what each is actually for.
          </li>
          <li>
            <Link href="/training/training-red-flags">Training red flags</Link>
            {' — '}dominance talk, shock as a first tool, guarantees, flooding.
          </li>
          <li>
            <Link href="/training/positive-reinforcement">Positive reinforcement</Link>
            {' — '}what force-free work looks like in a session.
          </li>
          <li>
            <Link href="/training">Training library</Link>
            {' — '}house training, leash work, reactivity, separation anxiety.
          </li>
        </ul>

        <h2>If you train dogs for a living</h2>
        <p>
          Apply for a claimed page. Approval is manual. There is no fee and no
          ranking auction. A page is a public profile on dog.com, not a booking
          or payment product.
        </p>
        <p>
          <Link href="/join/pro">Apply for a trainer page →</Link>
        </p>

        <h2>Get a note when claimed pages exist</h2>
        <p>
          This list will not be filled with invented names. Leave an email for
          one note when a trainer in your area has an accepted page — not a
          ranking, not a booking tool.
        </p>
        <div className="not-prose max-w-md my-6">
          <EmailCapture
            variant="section"
            siteId="dog-com"
            title="When claimed trainers have a page"
            subtitle="One email when an accepted trainer page exists. No invented names, ratings, or featured spots."
            source="trainers-under-hero"
            ctaText="Email me when trainers appear"
            perks={['Claimed pages only', 'No invented directory', 'Unsubscribe anytime']}
          />
        </div>
      </div>
    </ArticleLayout>
  )
}
