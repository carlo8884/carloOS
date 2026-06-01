import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horses.com Reviews — Supplements, Blankets, Tack | Horses.com',
  description:
    'Independent equine product reviews — joint supplements, winter blankets, and the gear that actually performs. Citation-anchored against AAEP and breed-club references.',
  path: '/reviews',
})

const REVIEWS = [
  {
    slug: 'best-equine-supplements',
    title: 'Best Equine Supplements 2025',
    description:
      'Joint, hoof, and gastric supplements ranked against the published equine veterinary evidence.',
  },
  {
    slug: 'best-winter-horse-blankets',
    title: 'Best Winter Horse Blankets 2025',
    description:
      'Turnout and stable blankets compared for denier, fill weight, and fit — for clipped horses and harsh climates.',
  },
]

export default function HorsesReviewsPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Reference Reviews
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Horses.com Reviews
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Editorial reviews of the gear and supplements equestrians actually buy, ranked using
          published veterinary evidence and rider reports — never paid placement.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Reviews</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0">
          {REVIEWS.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/reviews/${r.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {r.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {r.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a breed, condition, or piece of gear. Citation-anchored."
          ctaText="Subscribe"
          source="reviews-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
