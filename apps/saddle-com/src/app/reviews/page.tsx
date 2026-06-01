import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'
import {
  SADDLE_REVIEWS,
  FEATURED_SADDLE_REVIEWS,
} from '../../data/reviews'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Reviews 2025 — Compared & Ranked | Saddle.com',
  description:
    'Saddle reviews drawing on CSF reviewer notes and published rider reports. English, western.',
  path: '/reviews',
})

export default function SaddleReviewsPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <h1
            className="font-display font-black text-white tracking-tighter mb-3"
            style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}
          >
            Saddle Reviews 2025
          </h1>
          <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
            CSF reviewer notes and Society of Master Saddlers reference material.
            Honest editorial criteria — we rank what actually fits and performs.
          </p>
        </div>
      </div>
      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="saddle-com:hub-reviews" aspect="16:9" variant="wide" priority />
      </div>
      <div className="px-container-sm sm:px-container pt-12">
        <div className="max-w-content-wide mx-auto">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-4">
            How we read a saddle &mdash; and what these reviews are weighing
          </h2>
          <div className="space-y-4 text-brand-text-mid leading-relaxed">
            <p>
              A saddle is the rare piece of equipment a rider buys once and lives
              with for a decade, and the rare purchase where the wrong choice is
              felt by two bodies at once. The reviews collected on this hub exist
              to make that decision legible: not to crown a single best saddle,
              but to separate the discipline-specific tools, the price tiers, and
              the build qualities that actually move a horse comfortably under
              saddle. Each review is assembled from published manufacturer
              specifications, Society of Master Saddlers reference material, and
              aggregated rider reports &mdash; cited, not invented &mdash; so the
              ranking reflects fit and construction rather than marketing.
            </p>
            <p>
              The hub splits along the line every buyer starts from. English
              riders should begin with the{' '}
              <Link href="/reviews/best-english-saddles" className="text-brand-primary no-underline hover:underline">
                best English saddles
              </Link>{' '}
              roundup, which sorts dressage, jumping, and all-purpose trees by
              discipline before brand; western riders have a parallel guide to the{' '}
              <Link href="/reviews/best-western-saddles" className="text-brand-primary no-underline hover:underline">
                best western saddles
              </Link>
              . From there, the brand-level deep-dives &mdash; the{' '}
              <Link href="/reviews/stubben-saddle-review" className="text-brand-primary no-underline hover:underline">
                Stubben review
              </Link>{' '}
              and its peers below &mdash; carry the detail forward into tree
              systems, leather grade, panel construction, and resale value, the
              factors that decide whether a saddle holds up over years of work.
            </p>
            <p>
              A ranking is only ever a shortlist. The recurring conclusion across
              every review here is that fit by a qualified saddler outranks any
              badge on the flap: a well-fitted budget saddle will out-ride a
              premium one that bridges or rocks. Treat these pages as the way to
              narrow the field to a few candidates worth trying on the horse, then
              carry the question into the{' '}
              <Link href="/fit" className="text-brand-primary no-underline hover:underline">
                saddle-fit reference
              </Link>{' '}
              and the broader{' '}
              <Link href="/guides" className="text-brand-primary no-underline hover:underline">
                buying guides
              </Link>{' '}
              before money changes hands. The review tells you what is worth
              trying; the horse tells you what fits.
            </p>
          </div>
        </div>
      </div>
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {FEATURED_SADDLE_REVIEWS.map((r) => (
            <Link
              key={r.slug}
              href={`/reviews/${r.slug}`}
              className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
            >
              {r.featuredBadge && (
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {r.featuredBadge}
                </div>
              )}
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">
                {r.fullTitle}
              </div>
              <div className="text-xs text-brand-text-light">{r.description}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture
          variant="section"
          siteId="saddle-com"
          title="Free Saddle Buyer's Guide"
          subtitle="Reviews and market intelligence every other week."
          source="reviews-hub"
          ctaText="Get Free Guide"
          perks={['📋 CSF-informed', '💰 Market pricing']}
        />
      </div>
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
          All Reviews
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
          {SADDLE_REVIEWS.slice()
            .sort((a, b) => a.shortTitle.localeCompare(b.shortTitle))
            .map((r) => (
              <Link
                key={r.slug}
                href={`/reviews/${r.slug}`}
                className="text-sm text-brand-primary no-underline hover:underline"
              >
                {r.shortTitle}
              </Link>
            ))}
        </div>
      </section>
    </>
  )
}
