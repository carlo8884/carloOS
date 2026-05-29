import type { Metadata } from 'next'
import Link from 'next/link'
import {
  notFound } from 'next/navigation'
import {
  buildMetadata,
  AffiliateDisclosure
} from '@carloOS/ui'

/**
 * Lead-magnet thank-you page template.
 *
 * Closes a gap flagged in COO PR #122: "currently lead magnets go to a
 * generic confirmation. Each should have a dedicated thank-you page
 * with affiliate recommendations."
 *
 * Each lead magnet (Mailchimp tag) maps to its thank-you content here.
 * After signup, redirect to /thanks/<magnet>.
 *
 * Architect S20 (Lead Magnet Library).
 */

interface MagnetContent {
  title: string
  subtitle: string
  downloadCta: { label: string; href: string } | null
  // Affiliate recommendations shown immediately after delivery — high
  // conversion window because the user is on the "got it!" dopamine.
  recommendations: {
    headline: string
    body: string
    cta: { label: string; vendor: import('@carloOS/ui').Vendor; sku: string }
  }[]
  nextReadingHref: string
  nextReadingLabel: string
}

const MAGNETS: Record<string, MagnetContent> = {
  'puppy-schedule': {
    title: 'Your 8-Week Puppy Schedule is on its way',
    subtitle:
      "Check your email in the next 5 minutes. We'll keep coming back with what to expect each week — and at the bottom of each email, the one or two things we'd actually buy.",
    downloadCta: {
      label: 'Get the PDF directly →',
      href: '/puppy-schedule',
    },
    recommendations: [
      {
        headline: 'A pet insurance policy before symptoms appear',
        body: 'Puppies are the cheapest time to enroll in pet insurance and the only time you can pre-empt hereditary exclusions. Lemonade Pet is our budget pick; Pumpkin is our best-overall.',
        cta: { label: 'Compare pet insurance →', vendor: 'lemonade', sku: 'home' },
      },
      {
        headline: 'A DNA test (especially for mixed-breed puppies)',
        body: 'Embark screens for 270+ hereditary conditions before symptoms manifest. Pair it with insurance enrollment for maximum coverage.',
        cta: { label: 'Shop Embark →', vendor: 'embarkvet', sku: 'home' },
      },
      {
        headline: 'A reasonable starter kit on Chewy',
        body: 'Crate, food, training treats, leash, collar — Chewy delivers same-day in most metros and routinely has the best price on starter bundles.',
        cta: { label: 'Browse puppy gear →', vendor: 'chewy', sku: 'puppy-starter-kit' },
      },
    ],
    nextReadingHref: '/health',
    nextReadingLabel: 'Common puppy health concerns by month →',
  },
  'insurance-comparison': {
    title: 'Your Pet Insurance Comparison Spreadsheet is on its way',
    subtitle:
      "Check your inbox in the next 5 minutes for the side-by-side spreadsheet covering all 9 major carriers. While you wait, here's where most owners go from here.",
    downloadCta: null,
    recommendations: [
      {
        headline: 'Take the 60-second quiz first',
        body: "Most owners don't realize their priorities (budget vs. coverage vs. flexibility) until they answer 4 questions. The quiz routes you to the carrier that fits.",
        cta: { label: 'Take the quiz →', vendor: 'lemonade', sku: 'home' },
      },
      {
        headline: 'Get a Pumpkin quote (our best-overall pick)',
        body: 'Pumpkin scored highest in our editorial review for comprehensive coverage and has no upper age limit at enrollment.',
        cta: { label: 'Get a Pumpkin quote →', vendor: 'pumpkin', sku: 'home' },
      },
      {
        headline: 'Get a Lemonade quote (budget pick)',
        body: 'Lemonade is the lowest-entry-premium credible carrier and has quote API integration for under-a-minute checkout.',
        cta: { label: 'Get a Lemonade quote →', vendor: 'lemonade', sku: 'home' },
      },
    ],
    nextReadingHref: '/pet-insurance',
    nextReadingLabel: 'See the full carrier comparison →',
  },
  'dna-test-comparison': {
    title: "Your Pet DNA Test Buyer's Guide is on its way",
    subtitle:
      "Check your inbox. While you wait — here's the 30-second version of the comparison.",
    downloadCta: null,
    recommendations: [
      {
        headline: 'For most dogs: Embark Breed + Health Identification',
        body: 'Highest marker count (230,000+), Cornell partnership, includes Relative Finder. Our top-scoring test.',
        cta: { label: 'Shop Embark →', vendor: 'embarkvet', sku: 'home' },
      },
      {
        headline: 'For budget-conscious dog owners: Wisdom Panel',
        body: 'Largest breed library (365+), largest database (5M+ dogs), budget-friendly Essential tier.',
        cta: { label: 'Shop Wisdom Panel →', vendor: 'wisdompanel', sku: 'home' },
      },
      {
        headline: 'For cats: Basepaws',
        body: 'The only credible cat DNA test option. Owned by Zoetis, unique standalone Dental Health Test.',
        cta: { label: 'Shop Basepaws →', vendor: 'basepaws', sku: 'home' },
      },
    ],
    nextReadingHref: '/dna-testing',
    nextReadingLabel: 'See all DNA test reviews →',
  },
}

export async function generateStaticParams() {
  return Object.keys(MAGNETS).map((magnet) => ({ magnet }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ magnet: string }>
}): Promise<Metadata> {
  const { magnet } = await params
  const m = MAGNETS[magnet]
  if (!m) return {}
  return buildMetadata({
    siteId: 'dog-com',
    title: `${m.title} | Dog.com`,
    description: m.subtitle,
    path: `/thanks/${magnet}`,
    type: 'website',
    noIndex: true, // thank-you pages should not index
  })
}

export default async function ThanksPage({
  params,
}: {
  params: Promise<{ magnet: string }>
}) {
  const { magnet } = await params
  const m = MAGNETS[magnet]
  if (!m) notFound()

  return (
    <>
      <AffiliateDisclosure variant="inline" siteId="dog-com" />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          ✅ Confirmed
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          {m.title}
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          {m.subtitle}
        </p>
        {m.downloadCta && (
          <div className="mt-7">
            <Link
              href={m.downloadCta.href}
              className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              {m.downloadCta.label}
            </Link>
          </div>
        )}
      </div>

      <div className="px-container sm:px-container-sm py-14 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-bold tracking-tight mb-2">
          While you're here — three things we think are worth your time
        </h2>
        <p className="text-sm text-brand-text-mid mb-8">
          These are independent picks. We earn an affiliate commission when
          you buy through these links, at no extra cost to you. We never rank
          by commission.
        </p>

        <div className="space-y-6 mb-12">
          {m.recommendations.map((r, i) => (
            <div key={i} className="border border-brand-border rounded-xl p-6">
              <h3 className="font-display text-lg font-bold mb-2">
                {r.headline}
              </h3>
              <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
                {r.body}
              </p>
              <a
              href={`/go/${r.cta.vendor}/${r.cta.sku}?s=${`thanks-${magnet}`}
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-5 py-2 rounded-lg font-semibold text-sm no-underline hover:opacity-90"
            >
              {r.cta.label}
            </a>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-6">
          <h3 className="font-display text-lg font-bold mb-3">Keep reading</h3>
          <Link
            href={m.nextReadingHref}
            className="text-brand-primary font-semibold no-underline hover:underline"
          >
            {m.nextReadingLabel}
          </Link>
        </div>
      </div>
    </>
  )
}
