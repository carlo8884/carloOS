import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, CrossPortfolioCard, DirectoryPlacesCta } from '@carloOS/ui'
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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-3xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horses reviews-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horses reviews-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-horse-barn-reviews-buyer-guide-chart,
            stall-door-reviews-comparison-card, and
            equine-reviews-reference-handbook notes that
            match the reviews-section-map,
            per-category-comparison-log, and
            AAEP-and-editorial-criteria copy on this
            hub — a laminated horse barn reviews
            buyer-guide chart so the section map
            (supplements vs winter blankets) is posted
            at the barn (not a tools-hub calculator
            chart, not a forage-first chart), a horse
            stall-door reviews comparison card so each
            category&apos;s editorial criteria and
            shortlist is labeled on the stall door
            (not a measurement card, not a ration
            card), and an equine reviews reference
            handbook so the AAEP / breed-club /
            editorial-criteria grounding is a physical
            barn book (not a calculator handbook, not
            a nutrition handbook). Educational barn
            checklist, not a ranked product list, not
            a Platinum / KER / Equithrive hop, and
            not a substitute for a veterinarian. No
            spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horses reviews-hub checklist"
            subtitle="Email the reviews-buyer-guide-chart, stall-door comparison-card, and reviews-handbook notes. No spam."
            ctaText="Email my horses reviews-hub checklist"
            source="reviews-hub-under-hero"
          />
        </div>
      </section>

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

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-3xl">
          Reviews-hub barn kit
        </h2>
        <p className="max-w-3xl text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          reviews-section-map, per-category-comparison-log,
          and AAEP-and-editorial-criteria copy on this
          hub — a laminated horse barn reviews
          buyer-guide chart so the supplements /
          blankets map is posted at the barn, a horse
          stall-door reviews comparison card so each
          category&apos;s editorial criteria and
          shortlist is labeled on the stall door, and
          an equine reviews reference handbook so the
          AAEP / breed-club / editorial-criteria
          grounding is a physical barn book. These are
          educational barn searches, not a ranked
          product list, not a substitute for a
          veterinarian, not a tools-hub
          calculator-tools hop, and not a child
          Platinum / KER / Equithrive / Standlee hop
          (those live on the child reviews). This page
          does not hop medications or vaccines. This
          page does not claim hands-on testing.
        </p>

        <div className="max-w-3xl mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn reviews buyer-guide
            chart / horse stall-door reviews comparison
            card / equine reviews reference handbook).
            Educational barn searches only; no Rx /
            vaccine / supplement-SKU hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools-hub
            laminated+horse+barn+calculator+tools+chart /
            horse+stall+door+measurement+card /
            equine+calculator+reference+handbook
            and child platinum+performance /
            kentucky+equine+research hops.
            Directory import left untouched. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-3xl">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the reviews-hub barn kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page reviews-section-map,
            per-category-comparison-log, and
            AAEP-and-editorial-criteria copy — a
            laminated horse barn reviews buyer-guide
            chart, a horse stall-door reviews
            comparison card, and an equine reviews
            reference handbook. Educational barn
            searches only. They are not a ranked
            product list, they are not a tools-hub
            calculator-tools hop, they are not a
            Platinum / KER / Equithrive hop, and they
            do not replace a veterinarian. Horses.com
            earns a commission on qualifying purchases
            at no extra cost to you. Empty Chewy
            buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+reviews+buyer+guide+chart?s=reviews-hub"
              amazonLabel="Browse laminated horse barn reviews buyer-guide charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+reviews+comparison+card?s=reviews-hub"
              amazonLabel="Browse horse stall-door reviews comparison cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+reviews+reference+handbook?s=reviews-hub"
              amazonLabel="Browse equine reviews reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <DirectoryPlacesCta listings={listings} noun="licensed equine professionals" />
      <CrossPortfolioCard currentSite="horses-com" contentType="gear" variant="footer" />
    </>
  )
}
