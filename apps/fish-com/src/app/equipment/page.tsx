import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript, CrossPortfolioCard } from '@carloOS/ui'
import { EquipmentCategories } from '../../data/equipment-categories'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Equipment Buyer Guides — How to Choose | Fish.com',
  description:
    'Editorial buyer guides for filters, heaters, lighting, substrates, test kits, and CO2 systems — how to choose, tradeoffs, and price ranges.',
  path: '/equipment',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Equipment', url: 'https://fish.com/equipment' },
  ],
})


const BADGES: Record<string, string> = {
  'aquarium-filters': 'Filtration',
  'aquarium-heaters': 'Temperature',
  'aquarium-lighting': 'Lighting',
  'aquarium-substrates': 'Substrate',
  'aquarium-test-kits': 'Water Quality',
  'aquarium-co2-systems': 'Planted Tank',
}

const EMOJIS: Record<string, string> = {
  'aquarium-filters': 'Filter',
  'aquarium-heaters': 'Heater',
  'aquarium-lighting': 'Light',
  'aquarium-substrates': 'Substrate',
  'aquarium-test-kits': 'Test Kit',
  'aquarium-co2-systems': 'CO2',
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Aquarium Equipment Buyer Guides',
  numberOfItems: EquipmentCategories.length,
  itemListElement: EquipmentCategories.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.categoryName,
    url: `https://fish.com/equipment/${c.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function EquipmentHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      {/* HERO — premium image-first masthead (HubMasthead) */}
      <HubMasthead
        manifestKey="fish-com:category-equipment"
        alt="Aquarium filtration and heating equipment"
        eyebrow="Equipment Buyer Guides"
        title="Aquarium Equipment — How to Choose"
        subtitle="Plain-English buyer guides for the six equipment categories that decide whether your tank survives its first six months — each one points you to ranked product picks."
        primaryCta={{ href: '/reviews', label: 'See ranked product picks' }}
        secondaryCta={{ href: '/tools/heater-wattage-calculator', label: 'Size your heater' }}
      />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Equipment</span>
      </nav>

      {/* CATEGORY GRID */}
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {EquipmentCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/equipment/${c.slug}`}
              className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                {BADGES[c.slug] ?? 'Equipment'}
              </div>
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">
                {c.categoryName} — How to Choose
              </div>
              <div className="text-xs text-brand-text-light leading-relaxed mb-3">
                {c.whatItIs}
              </div>
              <div className="text-2xs text-brand-text-mid font-semibold">
                {c.typesAndTradeoffs.length} sub-types compared · {EMOJIS[c.slug] ?? 'Gear'}
              </div>
            </Link>
          ))}
        </div>

        {/* DISCLOSURE */}
        <div className="mt-10 text-center">
          <p className="text-sm text-brand-text-light mb-2">
            These guides explain how to choose a category of equipment. For specific brand and
            model rankings, see our{' '}
            <Link href="/reviews" className="text-brand-primary no-underline hover:underline">
              equipment reviews
            </Link>
            .
          </p>
          <Link
            href="/editorial-standards"
            className="text-xs font-semibold text-brand-primary no-underline hover:underline"
          >
            Read our editorial standards →
          </Link>
        </div>
      </div>

      {/* EMAIL */}
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Equipment buyer guides, species spotlights, and fishkeeping tips every Thursday."
          source="equipment-hub"
          ctaText="Subscribe Free"
          perks={['Editor equipment picks', 'Species guides', 'Water chemistry tips', 'No spam']}
        />
      </div>

      {/* QUICK LINKS */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Equipment Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
          {EquipmentCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/equipment/${c.slug}`}
              className="text-sm text-brand-primary no-underline hover:underline"
            >
              {c.categoryName}
            </Link>
          ))}
        </div>
      </section>

      {/* Explore the CarloOS network — cross-portfolio authority */}
      <CrossPortfolioCard currentSite="fish-com" contentType="equipment" variant="footer" />
    </>
  </>
  )
}
