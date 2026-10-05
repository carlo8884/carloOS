import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, SchemaScript, combineSchemas, ShopCtas, DirectoryPlacesCta, HubSearch, HubJumpNav } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { HubMasthead } from '../../components/HubMasthead'

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Reviews', url: 'https://fish.com/reviews' },
  ],
})

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Best Aquarium Equipment Reviews 2026 — Ranked & Compared | Fish.com',
  description: 'Aquarium equipment reviews with honest editorial criteria. Filters, heaters, lighting, nano tanks, fertilizers, and water test kits — ranked with real data.',
  path: '/reviews',
})

const REVIEW_GROUPS = [
  { id: 'fish-reviews-filters', label: 'Filters', intro: 'Hang-on-back and canister reviews, and the comparisons that use those cards.' },
  { id: 'fish-reviews-heat', label: 'Heat', intro: 'Heater reviews, including the cold-room sizing page.' },
  { id: 'fish-reviews-lighting', label: 'Lighting', intro: 'Lighting reviews, the planted-light comparison, and the reef versus fish-only comparison.' },
  { id: 'fish-reviews-water', label: 'Water tests', intro: 'Liquid test kits and the reef-kit comparison.' },
  { id: 'fish-reviews-tanks', label: 'Tanks', intro: 'The nano tank review and the 5-gallon kit versus 20-gallon long comparison.' },
  { id: 'fish-reviews-planted', label: 'Planted tanks', intro: 'Fertilizer reviews and the all-in-one comparison.' },
  { id: 'fish-reviews-season', label: 'Season', intro: 'November and December gifts taken from price bands already on the equipment cards.' },
]

const REVIEWS = [
  {
    title: 'Best Aquarium Filters 2026',
    desc: 'HOB, canister, and sponge filters ranked by flow rate, media volume, and noise — for tanks from 10 to 125 gallons.',
    href: '/reviews/best-aquarium-filters',
    group: 'fish-reviews-filters',
    badge: 'Most Important',
  },
  {
    title: 'Best Canister Filters 2026',
    desc: 'Fluval, Eheim, and SunSun compared on bio-media volume, flow rate, and seal reliability.',
    href: '/reviews/best-canister-filters',
    group: 'fish-reviews-filters',
    badge: 'Filtration',
  },
  {
    title: 'Best Aquarium Heaters 2026',
    desc: 'Eheim Jager, Fluval E-series, and Aqueon Pro compared on published temperature accuracy and failure safety.',
    href: '/reviews/best-aquarium-heaters',
    group: 'fish-reviews-heat',
    badge: 'Essential',
  },
  {
    title: 'Best Aquarium Lighting 2026',
    desc: 'Full-spectrum, planted-tank, and reef-capable lights compared on PAR output and spectrum quality.',
    href: '/reviews/best-aquarium-lighting',
    group: 'fish-reviews-lighting',
    badge: 'Lighting',
  },
  {
    title: 'Best Water Test Kits 2026',
    desc: 'API Master Test Kit vs test strips — why liquid reagent tests are generally the more reliable option, with top picks.',
    href: '/reviews/best-water-test-kits',
    group: 'fish-reviews-water',
    badge: 'Water Quality',
  },
  {
    title: 'Best Nano Tanks 2026',
    desc: 'All-in-one nano aquariums for shrimp, bettas, and small communities — compared on filtration quality and light output.',
    href: '/reviews/best-nano-tanks',
    group: 'fish-reviews-tanks',
    badge: 'Small Tanks',
  },
  {
    title: 'Best Planted-Tank Fertilizers 2026',
    desc: 'Macro, micro, and all-in-one fertilizers ranked by nutrient completeness and value. With dosing guidance.',
    href: '/reviews/best-planted-tank-fertilizers',
    group: 'fish-reviews-planted',
    badge: 'Planted Tanks',
  },
  {
    title: 'HOB vs Canister: AquaClear or Fluval',
    desc: 'The hang-on-back versus the canister, using the AquaClear 70 and the Fluval 307 on the filter review.',
    href: '/reviews/hob-vs-canister-guide',
    group: 'fish-reviews-filters',
    badge: 'Filtration',
  },
  {
    title: 'Eheim Jager vs Cobalt Neo-Therm',
    desc: 'Glass heater you can recalibrate, or a flat shatterproof heater for a display tank.',
    href: '/reviews/eheim-vs-cobalt-heater-guide',
    group: 'fish-reviews-heat',
    badge: 'Essential',
  },
  {
    title: 'Fluval 307 vs Eheim Classic',
    desc: 'AquaStop and a quieter canister, or the Classic the canister review credits with a longer service life.',
    href: '/reviews/fluval-307-vs-eheim-guide',
    group: 'fish-reviews-filters',
    badge: 'Filtration',
  },
  {
    title: 'Easy Green vs Seachem Flourish',
    desc: 'One weekly all-in-one dose, or trace elements from a fish store. Doses are already on the fertilizer review.',
    href: '/reviews/easy-green-vs-flourish-guide',
    group: 'fish-reviews-planted',
    badge: 'Planted Tanks',
  },
  {
    title: 'Best Heater for a Display Tank',
    desc: 'Flat shatterproof heater versus glass versus an inline heater, from the heater review.',
    href: '/reviews/best-display-tank-heater-guide',
    group: 'fish-reviews-heat',
    badge: 'Essential',
  },
  {
    title: 'Hygger 957 vs Fluval Plant 3.0',
    desc: 'Budget planted PAR versus the higher published PAR and app control on the lighting review.',
    href: '/reviews/hygger-vs-fluval-light-guide',
    group: 'fish-reviews-lighting',
    badge: 'Lighting',
  },
  {
    title: 'Kessil A360X vs Nicrew',
    desc: 'Reef PAR and shimmer, or a fish-only display light. Scores are the ones on the lighting review.',
    href: '/reviews/kessil-vs-nicrew-guide',
    group: 'fish-reviews-lighting',
    badge: 'Lighting',
  },
  {
    title: 'Fluval Spec vs 20-Gallon Long',
    desc: 'A 5-gallon all-in-one, or the bare beginner tank. Scores are the ones on the nano review.',
    href: '/reviews/fluval-spec-vs-aqueon-20-guide',
    group: 'fish-reviews-tanks',
    badge: 'Tanks',
  },
  {
    title: 'API Master Kit vs Salifert',
    desc: 'Freshwater pH, ammonia, nitrite, and nitrate, or reef alkalinity, calcium, and magnesium.',
    href: '/reviews/api-vs-salifert-guide',
    group: 'fish-reviews-water',
    badge: 'Water Quality',
  },
  {
    title: 'Heater Size for a Cold Room',
    desc: 'The wattage calculator’s winter case, including the 25 percent headroom. The hop is the Eheim Jager.',
    href: '/reviews/winter-heater-sizing-guide',
    group: 'fish-reviews-heat',
    badge: 'Season',
  },
  {
    title: 'Winter Light Hours for a Planted Tank',
    desc: 'Shorter days do not change the 6 to 8 hour photoperiod. The hop is the light timer.',
    href: '/reviews/winter-photoperiod-guide',
    group: 'fish-reviews-lighting',
    badge: 'Season',
  },
  {
    title: 'November and December Aquarium Gifts',
    desc: 'Filters, heaters, lights, a test kit, and a nano tank, grouped by the price bands already on those cards.',
    href: '/reviews/november-december-gift-guide',
    group: 'fish-reviews-season',
    badge: 'Season',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fish.com Aquarium Gear Reviews',
  numberOfItems: REVIEWS.length,
  itemListElement: REVIEWS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.title,
    url: `https://fish.com${r.href}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function FishReviewsPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      {/* HERO — premium image-first masthead (HubMasthead) */}
      <HubMasthead
        manifestKey="fish-com:category-reviews"
        alt="A well-maintained planted display aquarium"
        eyebrow="Equipment Reviews"
        title="Aquarium Equipment Reviews 2026"
        subtitle="Filters, heaters, lighting, and testing gear — ranked against published performance specs and stated criteria, not box claims."
        primaryCta={{ href: '/reviews/best-aquarium-filters', label: 'See the best filters' }}
        secondaryCta={{ href: '/tools/stocking-calculator', label: 'Size your tank first' }}
      />

      {/* REVIEWS GRID */}
      <div id="fish-reviews-list">
      <div className="px-container-sm sm:px-container py-12">
        <div className="max-w-content-wide mx-auto">
          <HubSearch listId="fish-reviews-list" total={REVIEWS.length} noun="reviews" />
          <HubJumpNav groups={REVIEW_GROUPS} />
        </div>
        <div className="max-w-content-wide mx-auto">
          {REVIEW_GROUPS.map((group) => (
            <section key={group.id} id={group.id} data-hub-group className="mb-10 scroll-mt-24">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-2">{group.label}</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4 max-w-2xl">{group.intro}</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {REVIEWS.filter((r) => r.group === group.id).map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    data-hub-item
                    data-title={r.title}
                    data-topic={`${r.badge} ${group.label} ${r.desc}`}
                    className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {r.badge && (
                      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.badge}</div>
                    )}
                    <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
                    <div className="text-xs text-brand-text-light leading-relaxed">{r.desc}</div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* AFFILIATE DISCLOSURE */}
        <div className="mt-10 text-center">
          <p className="text-sm text-brand-text-light mb-2">
            Affiliate disclosure: Fish.com earns commissions on purchases made through our links. Rankings are editorially
            independent — affiliate relationships have no influence on scores or placement.
          </p>
          <Link href="/editorial-standards" className="text-xs font-semibold text-brand-primary no-underline hover:underline">
            Read our editorial standards →
          </Link>
        </div>
      </div>

      {/* BROWSE ALL */}
      <section data-hub-group className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Reviews</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
          {REVIEWS.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              data-hub-item
              data-hub-count="off"
              data-title={r.title}
              data-topic={`${r.badge} ${r.desc}`}
              className="text-sm text-brand-primary no-underline hover:underline"
            >
              {r.title.replace(' 2026', '')}
            </Link>
          ))}
        </div>
      </section>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Related supplies
        </h2>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="fish-com" />
        </div>

        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop related supplies
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links open a search for a product this page discusses. They are not a ranked product list and they do not replace veterinary care.</p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/eheim+aquarium+heater?s=reviews-hub"
              amazonLabel="Browse Eheim aquarium heaters on Amazon →"
            />
          </div>
        </div>
      </section>

      <DirectoryPlacesCta listings={listings} noun="licensed aquarium professionals" />
    </>
  </>
  )
}
