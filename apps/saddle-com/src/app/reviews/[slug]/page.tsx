import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { getPost } from '@carloOS/db'

interface ReviewPageProps { params: { slug: string } }

const REVIEWS: Record<string, {
  title: string; subtitle: string; picks: React.ComponentProps<typeof QuickPicks>['items']
  cards: React.ComponentProps<typeof ReviewCard>[]
}> = {
  'best-english-saddles': {
    title: 'Best English Saddles 2025 — Dressage, Jumping & All-Purpose Ranked',
    subtitle: 'We tested 12 saddles across disciplines. Certified fitters rated tree fit, leather quality, rider position, and value. Here\'s what\'s actually worth the money.',
    picks: [
      { label: 'Best Dressage', emoji: '🏆', name: 'Stubben Roxane', subtitle: '9.5 · German made', href: '#roxane' },
      { label: 'Best Jumping', emoji: '🥇', name: 'Pessoa Gen X Pro', subtitle: '9.2 · Olympic proven', href: '#pessoa' },
      { label: 'Best AP', emoji: '⭐', name: 'Bates Caprilli', subtitle: '8.9 · CAIR panels', href: '#bates' },
      { label: 'Best Value', emoji: '💰', name: 'Collegiate Conv.', subtitle: '8.4 · Under $1,200', href: '#collegiate' },
    ],
    cards: [
      {
        id: 'roxane', badge: 'Best Dressage', badgeEmoji: '🏆', name: 'Stubben Roxane', winner: true,
        subtitle: 'German-made dressage saddle · Quick-Change adjustable tree · Flagship model',
        score: 9.5,
        description: 'The Roxane is the definitive German dressage saddle. Quick-Change tree width adjustability, exceptional hand-finished leather, and a deep seat geometry that places riders correctly without locking position. Holds resale value better than almost any competitor. The investment is real at $3,200–4,500 — the quality justifies it for serious dressage riders.',
        specs: [
          { label: 'Tree', value: 'Quick-Change adjustable', highlight: 'good' },
          { label: 'Leather', value: 'German-tanned', highlight: 'good' },
          { label: 'Made In', value: 'Germany', highlight: 'good' },
          { label: 'Flap', value: 'Straight cut' },
          { label: 'Resale Value', value: 'Excellent', highlight: 'good' },
          { label: 'Seat Sizes', value: '16.5"–18"' },
        ],
        pros: ['Adjustable tree extends useful life', 'Best-in-class German leather', 'Outstanding resale value', '130 years of refinement'],
        cons: ['$3,200–4,500 entry point', 'Deep seat not for every rider'],
        price: '$3,200–$4,500', priceNote: 'Used: $1,200–2,200',
        ctaText: 'Check Current Price →', ctaHref: '#', ctaAffiliateProgram: 'sharesale', ctaAffiliateProduct: 'stubben-roxane',
      },
      {
        id: 'pessoa', badge: 'Best Jumping', badgeEmoji: '🥇', name: 'Pessoa Gen X Pro',
        subtitle: 'Show jumping · Close contact · Forward flap',
        score: 9.2,
        description: 'Pessoa saddles are ridden by more Olympic show jumping medalists than any other brand — for a reason. The Gen X Pro\'s forward flap angle and minimal bulk places the rider\'s leg closer to the horse than almost any competitor. The result is cleaner feel of distance and improved precision at speed. Best for serious jumping riders; less suited to flatwork.',
        specs: [
          { label: 'Discipline', value: 'Show Jumping', highlight: 'good' },
          { label: 'Contact', value: 'Close contact', highlight: 'good' },
          { label: 'Flap', value: 'Forward cut' },
          { label: 'Seat Sizes', value: '16.5"–18"' },
          { label: 'Flatwork', value: 'Not ideal', highlight: 'warn' },
        ],
        pros: ['Best close-contact geometry at price', 'Olympic-proven design', 'Strong resale in jumping market'],
        cons: ['Not suited for dressage or flatwork', 'Brazilian leather needs more conditioning'],
        price: '$2,400–$3,200', priceNote: 'Used: $900–1,600',
        ctaText: 'Check Current Price →', ctaHref: '#', ctaAffiliateProgram: 'sharesale', ctaAffiliateProduct: 'pessoa-gen-x',
      },
      {
        id: 'bates', badge: 'Best All-Purpose', badgeEmoji: '⭐', name: 'Bates Caprilli',
        subtitle: 'All-purpose · CAIR panel system · Adjustable gullet',
        score: 8.9,
        description: 'The Caprilli is the best all-purpose saddle we tested for riders who train across disciplines. The CAIR (Computer Aided Inflatable Rubber) panel system conforms to a wide range of horse backs without reflocking — practical for horses whose toplines change seasonally. Adjustable gullet system covers narrow to wide without a saddler visit. Not as refined as German leather options but genuinely practical.',
        specs: [
          { label: 'Panel System', value: 'CAIR inflatable', highlight: 'good' },
          { label: 'Gullet', value: 'Adjustable (5 widths)', highlight: 'good' },
          { label: 'Discipline', value: 'All-purpose' },
          { label: 'Price', value: 'Mid-range' },
        ],
        pros: ['CAIR panels fit wide range of backs', '5-width adjustable gullet', 'Works for jumping and flatwork', 'Lower maintenance than leather alternatives'],
        cons: ['Synthetic feel — not leather quality', 'Panel system not universally loved by fitters'],
        price: '$1,100–$1,600', priceNote: 'Best AP value in test',
        ctaText: 'Check Current Price →', ctaHref: '#', ctaAffiliateProgram: 'sharesale', ctaAffiliateProduct: 'bates-caprilli',
      },
      {
        id: 'collegiate', badge: 'Best Value', badgeEmoji: '💰', name: 'Collegiate Convertible AP',
        subtitle: 'Budget all-purpose · Adjustable gullet · Entry-level quality',
        score: 8.4,
        description: 'The Collegiate Convertible is the correct answer for recreational riders who don\'t need German leather or professional-grade construction. Adjustable gullet, decent panel quality, and a workable all-purpose position — all under $1,200. For serious competitive riders, Stubben or Pessoa is worth the investment. For trail riding, occasional lessons, or a teenager\'s first saddle, the Collegiate is the right call.',
        specs: [
          { label: 'Price Point', value: 'Under $1,200', highlight: 'good' },
          { label: 'Gullet', value: 'Adjustable', highlight: 'good' },
          { label: 'Discipline', value: 'All-purpose' },
          { label: 'Build Quality', value: 'Entry-level' },
        ],
        pros: ['Under $1,200 new', 'Adjustable gullet', 'Good entry-level option', 'Widely available'],
        cons: ['Not for serious competition', 'Leather quality far below premium brands'],
        price: '$700–$1,100',
        ctaText: 'Check Current Price →', ctaHref: '#', ctaAffiliateProgram: 'sharesale', ctaAffiliateProduct: 'collegiate-ap',
      },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(REVIEWS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const r = REVIEWS[params.slug]
  if (!r) return {}
  return buildMetadata({ siteId: 'saddle-com', title: r.title, description: r.subtitle, path: `/reviews/${params.slug}`, type: 'article' })
}

export default async function SaddleReviewPage({ params }: ReviewPageProps) {
  const review = REVIEWS[params.slug]
  if (!review) {
    let post; try { post = await getPost('saddle-com', params.slug) } catch { /* */ }
    if (!post) notFound()
    return <div className="px-container py-14 max-w-content mx-auto"><div className="carloOS-article" dangerouslySetInnerHTML={{ __html: post.body_html ?? '' }} /></div>
  }

  const schema = buildArticleSchema({
    siteId: 'saddle-com', title: review.title, description: review.subtitle,
    url: `https://saddle.com/reviews/${params.slug}`, imageUrl: '',
    authorName: 'Saddle.com Expert Team', publishedAt: new Date().toISOString(), modifiedAt: new Date().toISOString(),
  })

  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-5 block">🏆 CSF Tested · Master Saddler Reviewed · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>{review.title}</h1>
        <p className="text-base font-light text-white/50 max-w-2xl leading-relaxed">{review.subtitle}</p>
      </div>
      <QuickPicks items={review.picks} />
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>{review.cards.map(c => <ReviewCard key={c.id} {...c} />)}</div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <TableOfContents items={review.picks.map(p => ({ label: p.name, href: p.href }))} />
            <RelatedLinks title="Buying Guides" links={[
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
              { label: 'Seat Size Guide', href: '/guides/seat-size-guide' },
              { label: 'Buying a Used Saddle', href: '/guides/used-saddle-buying-guide' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source={`review-${params.slug}`} />
          </aside>
        </div>
      </div>
    </>
  )
}
