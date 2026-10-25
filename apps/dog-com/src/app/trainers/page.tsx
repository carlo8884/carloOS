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

const GUIDE_CARDS = [
  {
    href: '/training/trainer-credentials',
    title: 'Trainer credentials explained',
    note: 'CPDT-KA, CBCC-KA, CAAB, DACVB, and what each is actually for.',
  },
  {
    href: '/training/training-red-flags',
    title: 'Training red flags',
    note: 'Dominance talk, shock as a first tool, guarantees, flooding.',
  },
  {
    href: '/training/positive-reinforcement',
    title: 'Positive reinforcement',
    note: 'What force-free work looks like in a session.',
  },
  {
    href: '/training',
    title: 'Training library',
    note: 'House training, leash work, reactivity, separation anxiety.',
  },
]

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
        <div className="not-prose my-6">
          <StockImage
            manifestKey="dog-com:category-training"
            fallbackKey="dog-com:hero"
            alt="A dog working with its handler outdoors"
            aspect="16:9"
            variant="inline"
            priority
            subtleCredit
          />
        </div>

        <div
          className="not-prose my-6 rounded-xl border-2 border-dashed border-brand-border p-6 text-center"
          aria-label="Trainer directory listings"
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Directory · 0 listed
          </div>
          <p className="font-bold text-brand-text-dark text-base mb-2">
            No trainers listed yet
          </p>
          <p className="text-brand-text-mid text-sm max-w-md mx-auto">
            This list is empty on purpose. Invented names, star ratings, and
            “featured trainers” would cheapen the domain. When a trainer has a
            page here, it will be a page they asked for.
          </p>
        </div>

        <h2>If you need a trainer now</h2>
        <p>
          Dog training is unregulated in the United States. Anyone can hang a
          sign. Use the guides below before you pay anyone — listed here or not.
        </p>
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          {GUIDE_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block rounded-xl border border-stone-200 bg-white p-5 no-underline hover:border-brand-primary transition-all"
            >
              <div className="font-display font-bold text-brand-dark text-sm leading-tight group-hover:text-brand-primary mb-1">
                {card.title}
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0">
                {card.note}
              </p>
              <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-primary">
                Read <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          ))}
        </div>

        <h2>If you train dogs for a living</h2>
        <p>
          Apply for a claimed page. Approval is manual. There is no fee and no
          ranking auction. A page is a public profile on dog.com, not a booking
          or payment product.
        </p>
        <div className="not-prose my-6 rounded-xl p-6 bg-brand-primary-pale border border-brand-border">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            For trainers
          </div>
          <p className="text-brand-text-mid text-sm mb-4">
            Free to apply. Approval is manual. No ranking auction, no booking fees.
          </p>
          <Link
            href="/join/pro"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3.5 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200"
          >
            Claim your free listing →
          </Link>
        </div>

        <h2>How a trainer page gets listed</h2>
        <ol>
          <li>The trainer applies with a service area and a public link.</li>
          <li>We check the link and any credential listed. Nothing is published before that.</li>
          <li>If accepted, a claimed profile appears here. If not, nobody is listed.</li>
        </ol>
      </div>
    </ArticleLayout>
  )
}
