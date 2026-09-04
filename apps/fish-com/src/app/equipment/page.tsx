import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  AffiliateDisclosure,
  ShopCtas,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
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
        secondaryCta={{ href: '/tools/filter-gph-calculator', label: 'Size your filter' }}
      />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Equipment</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the equipment list
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Aquarium equipment checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the first-tank gear list — hang-on-back or canister filter,
            heater, digital thermometer, API Master Test Kit, and dechlorinator
            (Seachem Prime) — so you can shop the six buyer-guide categories
            without scrolling back. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Aquarium equipment checklist"
            subtitle="Email filter, heater, thermometer, test kit, and dechlorinator. No spam."
            ctaText="Email my aquarium equipment checklist"
            source="equipment-hub-under-hero"
          />
        </div>
      </div>

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

        {/* Money path — live amazon-brand search hops (equipment kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="mt-6 p-5 border border-brand-border rounded-xl bg-brand-surface max-w-content-wide mx-auto">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop aquarium equipment
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            A hang-on-back or canister filter is where the cycle lives. Pair it
            with a heater rated for the tank, a separate digital thermometer to
            verify the dial, Seachem Prime (or another dechlorinator) at every
            fill, the API Master Test Kit so you can see ammonia/nitrite/nitrate,
            and a gravel vacuum for water changes. Same HOB hop used on the{' '}
            <Link
              href="/tools/stocking-calculator"
              className="text-brand-primary no-underline hover:underline"
            >
              stocking calculator
            </Link>
            {' '}and the{' '}
            <Link
              href="/tools/filter-gph-calculator"
              className="text-brand-primary no-underline hover:underline"
            >
              filter GPH calculator
            </Link>
            . Same heater hop used on the{' '}
            <Link
              href="/tools/heater-wattage-calculator"
              className="text-brand-primary no-underline hover:underline"
            >
              heater wattage calculator
            </Link>
            . Same Prime and gravel-vacuum hops used on the{' '}
            <Link
              href="/tools/water-change-calculator"
              className="text-brand-primary no-underline hover:underline"
            >
              water-change calculator
            </Link>
            . Same test-kit hop used on the{' '}
            <Link
              href="/reviews/best-water-test-kits"
              className="text-brand-primary no-underline hover:underline"
            >
              water-test kit review
            </Link>
            . They are not a ranked product list — ranked picks live on{' '}
            <Link href="/reviews" className="text-brand-primary no-underline hover:underline">
              equipment reviews
            </Link>
            . Fish.com earns a commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/aquaclear+70+filter?s=equipment-hub"
              amazonLabel="Browse hang-on-back filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/fluval+307+canister+filter?s=equipment-hub"
              amazonLabel="Browse canister filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/eheim+jager+heater?s=equipment-hub"
              amazonLabel="Browse aquarium heaters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+digital+thermometer?s=equipment-hub"
              amazonLabel="Browse digital aquarium thermometers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/seachem+prime+water+conditioner?s=equipment-hub"
              amazonLabel="Browse dechlorinator / Seachem Prime on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=equipment-hub"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+gravel+vacuum+siphon?s=equipment-hub"
              amazonLabel="Browse gravel vacuums on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/setup" className="text-brand-primary hover:underline">
              Aquarium Setup Guide
            </Link>
            {' · '}
            <Link href="/tools/filter-gph-calculator" className="text-brand-primary hover:underline">
              Filter GPH Calculator
            </Link>
            {' · '}
            <Link href="/tools/heater-wattage-calculator" className="text-brand-primary hover:underline">
              Heater Wattage Calculator
            </Link>
          </p>
        </div>
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
    </>
  </>
  )
}
