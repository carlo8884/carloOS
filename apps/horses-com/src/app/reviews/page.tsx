import { HopDisclosure } from '../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, ShopCtas, CrossPortfolioCard, DirectoryPlacesCta, PriceAsOf, HubSearch, HubJumpNav, LastUpdated } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
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

const REVIEW_GROUPS = [
  { id: 'horses-reviews-supplements', label: 'Supplements', intro: 'Joint, hoof, and gastric supplement pages, plus the comparisons that use those cards.' },
  { id: 'horses-reviews-blankets', label: 'Blankets and winter', intro: 'Turnout and stable blanket pages, fill-weight notes, and the winter water page.' },
  { id: 'horses-reviews-tack', label: 'Tack', intro: 'The saddle-pad comparison, plus halter and boot comparisons from the tack pages. None of them fix saddle fit.' },
  { id: 'horses-reviews-season', label: 'Season', intro: 'November and December gifts taken from price bands already on the halter, boot, and blanket cards.' },
]

const REVIEWS = [
  {
    slug: 'best-equine-supplements',
    group: 'horses-reviews-supplements',
    title: 'Best Equine Supplements 2026',
    description:
      'Joint, hoof, and gastric supplements ranked against the published equine veterinary evidence.',
  },
  {
    slug: 'best-winter-horse-blankets',
    group: 'horses-reviews-blankets',
    title: 'Best Winter Horse Blankets 2026',
    description:
      'Turnout and stable blankets compared for denier, fill weight, and fit — for clipped horses and harsh climates.',
  },
  {
    slug: 'rambo-vs-rhino-guide',
    group: 'horses-reviews-blankets',
    title: 'Rambo vs Rhino, Same Brand',
    description:
      'Horseware Rambo Original versus Rhino Plus on denier, fill, and the prices already in the blanket review.',
  },
  {
    slug: 'weatherbeeta-vs-amigo-guide',
    group: 'horses-reviews-blankets',
    title: 'Weatherbeeta vs Amigo',
    description:
      'A wither-relief mid-tier turnout, or Horseware’s value blanket. Denier and prices are already on those cards.',
  },
  {
    slug: 'rambo-vs-schneiders-guide',
    group: 'horses-reviews-blankets',
    title: 'Rambo vs Schneiders Heavy Winter',
    description:
      'Horseware’s premium mid-weight turnout, or Schneiders’ heavy fill for a northern winter. Denier and prices are already on the blanket review.',
  },
  {
    slug: 'cosequin-vs-equithrive-guide',
    group: 'horses-reviews-supplements',
    title: 'Cosequin vs Equithrive for Joints',
    description:
      'ASU with glucosamine, or a resveratrol pellet the supplement review treats as a complement. Monthly prices are already on that review.',
  },
  {
    slug: 'ker-eo3-vs-equithrive-guide',
    group: 'horses-reviews-supplements',
    title: 'KER EO-3 vs Equithrive Omega-3',
    description:
      'Marine omega-3 liquid, or a resveratrol pellet. Monthly prices are the ones on the supplement review.',
  },
  {
    slug: 'best-blanket-for-clipped-horse-guide',
    group: 'horses-reviews-blankets',
    title: 'Best Blanket for a Clipped Horse',
    description:
      'The heavy-winter turnout the blanket review names for a clipped horse in a northern climate, and when it is too much blanket.',
  },
  {
    slug: 'cosequin-vs-platinum-guide',
    group: 'horses-reviews-supplements',
    title: 'Cosequin ASU Plus vs Platinum CJ',
    description:
      'The ASU formula at $60–95 per 30 days, or the comprehensive tub at $130–180. Neither replaces joint injections.',
  },
  {
    slug: 'quilted-vs-sheepskin-pad-guide',
    group: 'horses-reviews-tack',
    title: 'Quilted Pad vs Sheepskin Half Pad',
    description:
      'A washable everyday English pad, or a sheepskin half pad for friction. Neither fixes saddle fit.',
  },
  {
    slug: 'nylon-vs-breakaway-halter-guide',
    group: 'horses-reviews-tack',
    title: 'Nylon Halter vs Breakaway',
    description:
      'An everyday nylon halter for in-hand work, or a leather-crown breakaway when a horse is left haltered in turnout.',
  },
  {
    slug: 'brushing-boots-vs-bell-boots-guide',
    group: 'horses-reviews-tack',
    title: 'Brushing Boots vs Bell Boots',
    description:
      'Interference protection for the cannon, or overreach protection for the heel. Neither supports a tendon.',
  },
  {
    slug: 'blanket-weight-by-temperature-guide',
    group: 'horses-reviews-blankets',
    title: 'Blanket Weight by Temperature',
    description:
      'The fill bands already on the winter blanket review, and the Rambo button for the medium band.',
  },
  {
    slug: 'winter-water-unfrozen-guide',
    group: 'horses-reviews-blankets',
    title: 'Keep Horse Water Unfrozen',
    description:
      'Icy water and dry hay are the winter colic pattern already published. The button below is the heated bucket.',
  },
  {
    slug: 'november-december-gift-guide',
    group: 'horses-reviews-season',
    title: 'November and December Horse Gifts',
    description:
      'Leads, halters, boots, and turnout blankets, grouped by the price bands already on those cards.',
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
      <div className="px-container-sm sm:px-container pt-6">
        <PriceAsOf date="2026-10-04" />
        <LastUpdated date="2026-10-09" />
      </div>

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

      <div id="horses-reviews-list" className="px-container-sm sm:px-container py-12">
        <HubSearch listId="horses-reviews-list" total={REVIEWS.length} noun="reviews" />
        <HubJumpNav groups={REVIEW_GROUPS} />
        {REVIEW_GROUPS.map((group) => (
          <section key={group.id} id={group.id} data-hub-group className="mb-10 scroll-mt-24">
            <h2 className="font-display font-bold text-brand-dark text-xl mb-2">{group.label}</h2>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4 max-w-2xl">{group.intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0">
              {REVIEWS.filter((r) => r.group === group.id).map((r) => (
                <li key={r.slug} data-hub-item data-title={r.title} data-topic={`${group.label} ${r.description}`}>
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
          </section>
        ))}
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-3xl">
          Related supplies
        </h2>

        <div className="max-w-3xl mt-6">
          <HopDisclosure siteId="horses-com" href="/go/amazon-brand/horse+blanket?s=reviews-hub" />
        </div>

        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-3xl">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop related supplies
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links open a search for a product this page discusses. They are not a ranked product list and they do not replace veterinary care.</p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+blanket?s=reviews-hub"
              amazonLabel="Browse horse blankets on Amazon →"
            />
          </div>
        </div>
      </section>

      <DirectoryPlacesCta listings={listings} noun="licensed equine professionals" />
      <CrossPortfolioCard currentSite="horses-com" contentType="gear" variant="footer" />
    </>
  )
}
