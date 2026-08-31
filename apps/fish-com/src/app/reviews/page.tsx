import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript, combineSchemas, DirectoryPlacesCta } from '@carloOS/ui'
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

const REVIEWS = [
  {
    title: 'Best Aquarium Filters 2026',
    desc: 'HOB, canister, and sponge filters ranked by flow rate, media volume, and noise — for tanks from 10 to 125 gallons.',
    href: '/reviews/best-aquarium-filters',
    badge: 'Most Important',
  },
  {
    title: 'Best Canister Filters 2026',
    desc: 'Fluval, Eheim, and SunSun compared on bio-media volume, flow rate, and seal reliability.',
    href: '/reviews/best-canister-filters',
    badge: 'Filtration',
  },
  {
    title: 'Best Aquarium Heaters 2026',
    desc: 'Eheim Jager, Fluval E-series, and Aqueon Pro compared on published temperature accuracy and failure safety.',
    href: '/reviews/best-aquarium-heaters',
    badge: 'Essential',
  },
  {
    title: 'Best Aquarium Lighting 2026',
    desc: 'Full-spectrum, planted-tank, and reef-capable lights compared on PAR output and spectrum quality.',
    href: '/reviews/best-aquarium-lighting',
    badge: 'Lighting',
  },
  {
    title: 'Best Water Test Kits 2026',
    desc: 'API Master Test Kit vs test strips — why liquid reagent tests are generally the more reliable option, with top picks.',
    href: '/reviews/best-water-test-kits',
    badge: 'Water Quality',
  },
  {
    title: 'Best Nano Tanks 2026',
    desc: 'All-in-one nano aquariums for shrimp, bettas, and small communities — compared on filtration quality and light output.',
    href: '/reviews/best-nano-tanks',
    badge: 'Small Tanks',
  },
  {
    title: 'Best Planted-Tank Fertilizers 2026',
    desc: 'Macro, micro, and all-in-one fertilizers ranked by nutrient completeness and value. With dosing guidance.',
    href: '/reviews/best-planted-tank-fertilizers',
    badge: 'Planted Tanks',
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

      <div className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-8">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Equipment picks, species spotlights, and fishkeeping tips every Thursday."
          source="reviews-under-hero"
          ctaText="Subscribe Free"
          perks={['Editor equipment picks', 'Species guides', 'Water chemistry tips', 'No spam']}
        />
      </div>

      {/* REVIEWS GRID */}
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {REVIEWS.map((r) => (
            <Link
              key={r.href}
              href={r.href}
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
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Reviews</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
          {REVIEWS.map((r) => (
            <Link key={r.href} href={r.href} className="text-sm text-brand-primary no-underline hover:underline">
              {r.title.replace(' 2026', '')}
            </Link>
          ))}
        </div>
      </section>
      <DirectoryPlacesCta listings={listings} noun="licensed aquarium professionals" />
    </>
  </>
  )
}
