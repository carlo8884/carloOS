import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, StockImage } from '@carloOS/ui'

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

const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

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

        <div className="not-prose my-6">
          <Link
            href="/training/trainer-credentials"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all max-w-md"
          >
            <div className={`relative h-16 w-24 shrink-0 overflow-hidden bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="dog-com:category-training" alt="A dog in a training session" aspect="4:3" subtleCredit />
            </div>
            <div className="pr-3 py-2">
              <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">Read credentials first</div>
              <p className="text-xs text-brand-text-mid mt-0.5">CPDT-KA, CBCC-KA, CAAB — no listings yet.</p>
            </div>
          </Link>
        </div>

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

        <h2>How a trainer page gets listed</h2>
        <p>
          This list will not be filled with invented names. A page appears only
          after a public source URL and license or credential is accepted — not a
          ranking, not a booking tool.
        </p>
      </div>
    </ArticleLayout>
  )
}
