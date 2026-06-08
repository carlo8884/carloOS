import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture } from '@carloOS/ui'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horses.com Reviews — Supplements, Blankets, Tack | Horses.com',
  description:
    'Independent equine product reviews — joint supplements, winter blankets, and gear that performs. Citation-anchored against AAEP and breed-club references.',
  path: '/reviews',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Reviews', url: 'https://horses.com/reviews' },
  ],
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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horses.com Equine Gear & Supplement Reviews',
  numberOfItems: REVIEWS.length,
  itemListElement: REVIEWS.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.title, url: `https://horses.com/reviews/${x.slug}` })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function HorsesReviewsPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <PremiumMasthead
        manifestKey="horses-com:category-reviews"
        eyebrow="Reference Reviews"
        title="Horses.com Reviews"
        subtitle="Editorial reviews of the gear and supplements equestrians actually buy, ranked using published veterinary evidence and rider reports — never paid placement."
      />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Reviews</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12 max-w-3xl">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-4 leading-tight">How these reviews are decided</h2>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          The equine gear market runs on confident marketing and very little published data. A blanket is sold on a hero photo; a supplement is sold on a label claim that no peer-reviewed study supports. Our reviews exist to put a layer of evidence between that marketing and your tack-room budget. Every ranking on this hub is built the same way: we start from the published veterinary and breed-club literature, define what &ldquo;good&rdquo; actually means for the category, and only then weigh the products against it. There is no paid placement, and a product cannot buy its way up the list.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          The two anchors here sit at opposite ends of the buying problem. The <Link href="/reviews/best-equine-supplements" className="text-brand-primary underline">equine supplements review</Link> tackles a category where claims routinely outrun the evidence, ranking joint, hoof, and gastric products against what the equine literature genuinely shows rather than what the tub promises. The <Link href="/reviews/best-winter-horse-blankets" className="text-brand-primary underline">winter blanket review</Link> is the opposite case &mdash; a category where the right answer is measurable, decided by denier, fill weight, and fit for clipped horses in hard climates.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          A review is a starting point, not the whole story. When a verdict turns on the science behind an ingredient, the deeper reference lives in the <Link href="/supplements" className="text-brand-primary underline">supplements library</Link>; when it turns on fit and function, the <Link href="/tack" className="text-brand-primary underline">tack section</Link> carries the how-to-fit detail. Use this hub to narrow the field, then follow the links to understand the why before you buy.
        </p>
      </div>

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
