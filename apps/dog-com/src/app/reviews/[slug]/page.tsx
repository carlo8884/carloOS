/**
 * Dog.com Review Page — /reviews/[slug]
 * Server component. Fetches post body from Supabase, renders with ReviewCard components.
 * For now, review content is imported as structured data until full CMS is live.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { SchemaScript } from '@carloOS/ui'
import { Breadcrumb } from '@carloOS/ui'
import { getPost } from '@carloOS/db'

interface ReviewPageProps {
  params: { slug: string }
}

// ── Known review pages ────────────────────────────────────────────────────────
// This registry maps slugs to structured review data.
// When CMS is live, this moves to Supabase products table.

const REVIEW_REGISTRY: Record<string, {
  title: string
  subtitle: string
  category: string
  heroLabel: string
  picks: Array<{ label: string; emoji: string; name: string; subtitle: string; href: string }>
  cards: React.ComponentProps<typeof ReviewCard>[]
  relatedLinks: Array<{ title: string; href: string; category: string }>
}> = {
  'best-pet-insurance': {
    title: 'Best Pet Insurance 2025 — 8 Plans Ranked by Real Payout Rates',
    subtitle: 'We analyzed actual claims data, policy exclusions, and reimbursement speeds. One emergency surgery can run $8,000. Here\'s what actually pays out.',
    category: 'Insurance',
    heroLabel: '🏆 Tested & Ranked · May 2025',
    picks: [
      { label: 'Best Overall', emoji: '🏆', name: 'Trupanion', subtitle: 'Direct vet payment · 90% payout', href: '#trupanion' },
      { label: 'Best Value', emoji: '💰', name: 'Healthy Paws', subtitle: 'Fastest claims · No payout cap', href: '#healthy-paws' },
      { label: 'Most Comprehensive', emoji: '📋', name: 'Embrace', subtitle: 'Wellness add-on · Broad coverage', href: '#embrace' },
      { label: 'Best Budget', emoji: '🤖', name: 'Lemonade', subtitle: 'AI claims · Lowest premiums', href: '#lemonade' },
    ],
    cards: [
      {
        id: 'trupanion',
        badge: 'Best Overall',
        badgeEmoji: '🏆',
        name: 'Trupanion',
        subtitle: 'The only insurer that pays your vet directly at checkout',
        score: 9.4,
        winner: true,
        description: 'Trupanion is the only major pet insurer with a direct payment system — when your dog needs emergency surgery, Trupanion pays the vet directly at the time of service. No claim forms, no waiting for reimbursement while carrying the debt. Their 90% reimbursement rate is one of the highest in the industry, and there are no payout limits per incident or annually.',
        specs: [
          { label: 'Reimbursement', value: '90% of actual cost', highlight: 'good' },
          { label: 'Annual Limit', value: 'Unlimited', highlight: 'good' },
          { label: 'Claims Speed', value: 'Direct pay at vet', highlight: 'good' },
          { label: 'Deductible', value: 'Per-condition' },
          { label: 'Wellness', value: 'Not included', highlight: 'warn' },
          { label: 'Waiting Period', value: '5 days illness' },
        ],
        pros: [
          'Direct vet payment — no out-of-pocket at time of service',
          '90% reimbursement — highest in the industry',
          'No annual or per-incident payout caps',
          'Per-condition deductible (better for chronic conditions)',
        ],
        cons: [
          'Premiums higher than budget alternatives',
          'No wellness/preventive coverage option',
        ],
        priceLabel: 'Monthly Premium (est.)',
        price: '$65–120/month',
        priceNote: 'Varies by breed, age, location',
        ctaText: 'Get a Quote →',
        ctaHref: 'https://trupanion.com',
        ctaAffiliateProgram: 'trupanion',
        ctaAffiliateProduct: 'pet-insurance',
      },
      {
        id: 'healthy-paws',
        badge: 'Best Value · Fastest Claims',
        badgeEmoji: '💰',
        name: 'Healthy Paws',
        subtitle: 'Highest customer satisfaction · Average 2-day claim processing',
        score: 9.1,
        description: 'Healthy Paws consistently ranks highest in customer satisfaction surveys. Claims processing averages 2 days via their mobile app. No annual or per-incident limits. Premiums are lower than Trupanion for comparable coverage.',
        specs: [
          { label: 'Reimbursement', value: '80–90% of actual cost', highlight: 'good' },
          { label: 'Annual Limit', value: 'Unlimited', highlight: 'good' },
          { label: 'Claims Speed', value: '~2 days average', highlight: 'good' },
          { label: 'Deductible', value: 'Annual' },
          { label: 'Wellness', value: 'Not included', highlight: 'warn' },
        ],
        pros: [
          'Fastest claims processing in the industry',
          'No annual or per-incident limits',
          'Lower premiums than Trupanion',
          'Mobile app claim submission',
        ],
        cons: [
          'No direct vet payment option',
          'No wellness coverage available',
        ],
        priceLabel: 'Monthly Premium (est.)',
        price: '$40–85/month',
        ctaText: 'Get a Quote →',
        ctaHref: 'https://healthypawspetinsurance.com',
        ctaAffiliateProgram: 'healthy-paws',
        ctaAffiliateProduct: 'pet-insurance',
      },
      {
        id: 'embrace',
        badge: 'Most Comprehensive',
        badgeEmoji: '📋',
        name: 'Embrace Pet Insurance',
        subtitle: 'Wellness add-on · Diminishing deductible · Customizable coverage',
        score: 8.8,
        description: 'Embrace offers the most customizable coverage — adjust reimbursement rate, annual limit, and deductible. Their wellness add-on covers routine care. Diminishing deductible reduces your annual deductible by $50 each claim-free year.',
        specs: [
          { label: 'Reimbursement', value: '70–90% (customizable)', highlight: 'good' },
          { label: 'Annual Limit', value: '$5K–unlimited' },
          { label: 'Wellness', value: 'Available add-on', highlight: 'good' },
          { label: 'Deductible', value: 'Diminishing annual' },
          { label: 'Ortho Waiting Period', value: '6 months', highlight: 'warn' },
        ],
        pros: [
          'Wellness add-on covers routine care',
          'Diminishing deductible rewards claim-free years',
          'Most customizable plan structure',
        ],
        cons: [
          '6-month orthopedic waiting period (concerns for hip-prone breeds)',
          'Complex plan options can be confusing',
        ],
        priceLabel: 'Monthly Premium (est.)',
        price: '$45–95/month + wellness add-on',
        ctaText: 'Get a Quote →',
        ctaHref: 'https://embracepetinsurance.com',
        ctaAffiliateProgram: 'embrace',
        ctaAffiliateProduct: 'pet-insurance',
      },
      {
        id: 'lemonade',
        badge: 'Best Budget Option',
        badgeEmoji: '🤖',
        name: 'Lemonade',
        subtitle: 'AI-powered claims · Lowest premiums in the market',
        score: 8.3,
        description: 'Lemonade uses AI to process many claims instantly via app. Their premiums are the lowest available. Best for younger, healthy dogs and owners who want catastrophic coverage at low monthly cost.',
        specs: [
          { label: 'Premiums', value: 'Lowest available', highlight: 'good' },
          { label: 'Claims', value: 'AI-powered (instant for simple claims)', highlight: 'good' },
          { label: 'Annual Limit', value: '$5K–100K' },
          { label: 'Coverage Depth', value: 'Good (not comprehensive)', highlight: 'warn' },
        ],
        pros: [
          'Lowest premiums in the market',
          'Instant AI claim processing',
          'Simple, app-first experience',
        ],
        cons: [
          'Coverage less deep than Trupanion or Embrace',
          'Not ideal for high-risk breeds',
        ],
        priceLabel: 'Monthly Premium (est.)',
        price: '$15–50/month',
        ctaText: 'Get a Quote →',
        ctaHref: 'https://lemonade.com/pet',
        ctaAffiliateProgram: 'lemonade',
        ctaAffiliateProduct: 'pet-insurance',
      },
    ],
    relatedLinks: [
      { title: 'Golden Retriever Health Guide', href: '/health/golden-retriever-health', category: 'Breed Health' },
      { title: 'French Bulldog Health Guide', href: '/health/french-bulldog-health', category: 'Breed Health' },
      { title: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide', category: 'Emergency' },
    ],
  },

  'best-flea-tick-prevention': {
    title: 'Best Flea & Tick Prevention 2025 — Bravecto vs NexGard vs Simparica Ranked',
    subtitle: 'Modern oral isoxazolines have largely replaced topicals. We compare efficacy, safety, duration, and cost across all major products.',
    category: 'Prevention',
    heroLabel: '🏆 Expert Reviewed · May 2025',
    picks: [
      { label: 'Best Overall', emoji: '🏆', name: 'Simparica Trio', subtitle: 'Fleas + ticks + heartworm', href: '#simparica' },
      { label: 'Longest Duration', emoji: '📅', name: 'Bravecto', subtitle: '12 weeks per dose', href: '#bravecto' },
      { label: 'Best Monthly', emoji: '⭐', name: 'NexGard', subtitle: 'Most prescribed', href: '#nexgard' },
      { label: 'Budget Pick', emoji: '💰', name: 'Frontline Plus', subtitle: 'OTC, lower cost', href: '#frontline' },
    ],
    cards: [
      {
        id: 'simparica',
        badge: 'Best Overall',
        badgeEmoji: '🏆',
        name: 'Simparica Trio',
        subtitle: 'Fleas · Ticks (5 species) · Heartworm · Roundworm · Hookworm — one monthly chew',
        score: 9.3,
        winner: true,
        description: 'Simparica Trio combines sarolaner (flea/tick) with moxidectin (heartworm) and pyrantel (intestinal parasites) in a single monthly chew. For dogs requiring heartworm prevention (which is every dog in the continental US), Simparica Trio replaces three separate products with one. Coverage includes all major tick species.',
        specs: [
          { label: 'Duration', value: '1 month' },
          { label: 'Fleas', value: '✓ Kills within 3 hrs', highlight: 'good' },
          { label: 'Tick Species', value: '5 (incl. black-legged)', highlight: 'good' },
          { label: 'Heartworm', value: '✓ Included', highlight: 'good' },
          { label: 'Prescription', value: 'Required' },
        ],
        pros: ['Replaces 3 products with 1', 'Broadest tick species coverage', 'Includes heartworm and intestinal parasites'],
        cons: ['Prescription required', 'Higher cost than single-product options'],
        price: 'From $65/3 months',
        ctaText: 'Talk to Your Vet →',
        ctaHref: '#',
        ctaAffiliateProgram: 'chewy',
        ctaAffiliateProduct: 'simparica-trio',
      },
      {
        id: 'bravecto',
        badge: 'Best Single Dose',
        badgeEmoji: '📅',
        name: 'Bravecto',
        subtitle: '12-week duration — one dose per season',
        score: 9.0,
        description: 'Bravecto\'s 12-week duration is its primary advantage — one dose covers an entire season. Eliminates the "did I give it this month?" concern. FDA-cleared for the longest duration of any oral flea/tick preventive. Excellent for dogs whose owners find monthly dosing unreliable.',
        specs: [
          { label: 'Duration', value: '12 weeks', highlight: 'good' },
          { label: 'Fleas', value: '✓', highlight: 'good' },
          { label: 'Tick Species', value: '4 species' },
          { label: 'Heartworm', value: '✗' },
          { label: 'Prescription', value: 'Required' },
        ],
        pros: ['12-week duration — 4x longer than monthly', 'One dose per season', 'Excellent palatability'],
        cons: ['No heartworm coverage', 'If reaction occurs, longer duration is a downside'],
        price: 'From $45/dose',
        ctaText: 'Talk to Your Vet →',
        ctaHref: '#',
        ctaAffiliateProgram: 'chewy',
        ctaAffiliateProduct: 'bravecto',
      },
    ],
    relatedLinks: [
      { title: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance', category: 'Insurance' },
      { title: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide', category: 'Emergency' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(REVIEW_REGISTRY).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const review = REVIEW_REGISTRY[params.slug]
  if (!review) {
    // Try DB
    try {
      const post = await getPost('dog-com', params.slug)
      if (post) return buildMetadata({
        siteId: 'dog-com',
        title: post.meta_title ?? post.title,
        description: post.meta_description ?? '',
        path: `/reviews/${params.slug}`,
        type: 'article',
      })
    } catch { /* */ }
    return {}
  }

  return buildMetadata({
    siteId: 'dog-com',
    title: review.title,
    description: review.subtitle,
    path: `/reviews/${params.slug}`,
    type: 'article',
  })
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const review = REVIEW_REGISTRY[params.slug]

  // Unknown slug — try DB
  if (!review) {
    let post
    try { post = await getPost('dog-com', params.slug) } catch { /* */ }
    if (!post) notFound()

    return (
      <div className="px-container sm:px-container-sm py-14 max-w-content mx-auto">
        <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: post.body_html ?? '' }} />
      </div>
    )
  }

  const schema = buildArticleSchema({
    siteId: 'dog-com',
    title: review.title,
    description: review.subtitle,
    url: `https://dog.com/reviews/${params.slug}`,
    imageUrl: '',
    authorName: 'Dog.com Editorial Team',
    publishedAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
  })

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            {review.heroLabel}
          </span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          {review.title}
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed mb-6">
          {review.subtitle}
        </p>
        <div className="text-xs text-white/30">
          Dog.com Editorial Team · Updated May 2025 ·{' '}
          <span className="text-white/20">Affiliate Disclosure: We earn commissions on referrals. Rankings are editorially independent.</span>
        </div>
      </div>

      {/* Quick picks */}
      <QuickPicks items={review.picks} title="Jump to Your Pick" />

      <Breadcrumb
        siteId="dog-com"
        items={[
          { name: 'Home', href: '/' },
          { name: 'Reviews', href: '/reviews' },
          { name: review.title.split('—')[0].trim(), href: `/reviews/${params.slug}` },
        ]}
      />

      {/* Review cards + sidebar */}
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-14">
          <div>
            {review.cards.map((card) => (
              <ReviewCard key={card.id} {...card} />
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks
              title="Related Guides"
              links={review.relatedLinks.map(l => ({ label: l.title, href: l.href }))}
            />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="DVM-written guidance every Tuesday."
              source={`review-${params.slug}`}
            />
          </aside>
        </div>
      </div>
    </>
  )
}
