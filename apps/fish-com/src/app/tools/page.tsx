import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, DirectoryPlacesCta } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Calculators — Volume, Stocking, Heater, CO2 | Fish.com',
  description: 'Free aquarium calculators: tank volume, stocking, heater wattage, water-change math, and planted-tank CO2 dosing. Built by aquarists.',
  path: '/tools',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Tools', url: 'https://fish.com/tools' },
  ],
})


const TOOLS = [
  {
    href: '/tools/aquarium-cycling-estimator',
    title: 'Aquarium Cycling Time Estimator',
    desc: 'How long will a new tank take to cycle? Pick method (fishless ammonia / bottled bacteria / used media / fish-in) and temperature, get a phase-by-phase timeline.',
    tag: 'New tank setup',
  },
  {
    href: '/tools/aquarium-volume-calculator',
    title: 'Aquarium Volume Calculator',
    desc: 'Convert tank dimensions (L × W × H) to US gallons, UK gallons, and liters. Supports rectangular, bow-front, and cylindrical tanks.',
    tag: 'Most popular',
  },
  {
    href: '/tools/substrate-calculator',
    title: 'Aquarium Substrate Calculator',
    desc: 'How much gravel, sand, or aqua soil do you need? Enter tank length, width, and depth to get substrate volume in liters and weight in lbs and kg, plus a buy-10%-extra rule.',
    tag: 'New tank setup',
  },
  {
    href: '/tools/pond-volume-calculator',
    title: 'Pond Volume Calculator',
    desc: 'Koi or garden pond volume in gallons and liters. Rectangular, circular, and oval shapes, with an ~85% factor for irregular ponds.',
    tag: 'Ponds',
  },
  {
    href: '/tools/stocking-calculator',
    title: 'Stocking Calculator',
    desc: 'How many fish can your tank hold? Filtration-adjusted estimate using surface area and bioload, not the broken "inch per gallon" rule.',
    tag: 'Beginner essential',
  },
  {
    href: '/tools/tank-mate-compatibility-checker',
    title: 'Tank Mate Compatibility Checker',
    desc: 'Pick two or more freshwater fish and get a Compatible / Caution / Not-recommended verdict per pair, with the reason — temperament, temperature, fin-nipping, and size.',
    tag: 'Stocking',
  },
  {
    href: '/tools/heater-wattage-calculator',
    title: 'Heater Wattage Calculator',
    desc: 'Pick the right heater size for your tank, room temperature, and target water temperature. Includes redundancy recommendation.',
    tag: 'Equipment',
  },
  {
    href: '/tools/filter-gph-calculator',
    title: 'Filter GPH Calculator',
    desc: 'How much filter flow does your tank need? Enter gallons and tank style for a GPH turnover range — community, goldfish, cichlid, or reef — then buy one size up from the box rating.',
    tag: 'Equipment',
  },
  {
    href: '/tools/fish-disease-symptom-checker',
    title: 'Fish Disease Symptom Checker',
    desc: 'Why is your fish sick? Tick the signs you see to find the conditions that match — ich, velvet, fin rot, dropsy and more — each linked to a treatment guide. Starts with water-quality testing.',
    tag: 'Health',
  },
  {
    href: '/tools/aquarium-setup-builder',
    title: 'Aquarium Setup Builder',
    desc: 'What do you need to start a fish tank? Enter tank size and setup type for a complete, sized starter-kit checklist — filter, heater, light, substrate, test kit — with why each matters.',
    tag: 'Beginner',
  },
  {
    href: '/tools/water-change-calculator',
    title: 'Water Change Calculator',
    desc: 'How many gallons to siphon? Tank size, fill %, and change % in — volume to remove plus a weekly schedule tip by bioload.',
    tag: 'Maintenance',
  },
  {
    href: '/tools/co2-calculator',
    title: 'CO2 Calculator (dosing + KH/pH)',
    desc: 'Size planted-tank CO2 from tank gallons, plant density, and pressurized vs liquid carbon — bubble rate, diffuser size, drop-checker range, plus KH/pH to ppm.',
    tag: 'Planted tanks',
  },
]

// ItemList enumerating the calculator suite — the GEO citation magnet for the
// flagship tools hub (AI answer engines surface the individual SoftwareApplications).
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fish.com aquarium calculators',
  itemListElement: TOOLS.map((tool, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: tool.title,
      description: tool.desc,
      url: `https://fish.com${tool.href}`,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  })),
}

export default function ToolsHub() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={itemListSchema} />
      <>
      {/* HERO — premium image-first masthead (HubMasthead) */}
      <HubMasthead
        manifestKey="fish-com:tools-hero"
        alt="A planted freshwater aquarium with healthy aquascaping"
        eyebrow="Calculators & Tools"
        title="Aquarium math, done for you."
        subtitle="Free calculators for the questions everyone Googles: how many gallons is my tank, how many fish can I stock, what wattage heater do I need, and how much CO2 is in my planted tank. Mobile-friendly, no signup."
        primaryCta={{ href: '/tools/stocking-calculator', label: 'Check your stocking' }}
        secondaryCta={{ href: '/tools/aquarium-volume-calculator', label: 'Calculate tank volume' }}
      />

      {/* TOOLS GRID */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block bg-brand-white border border-brand-border rounded-lg p-6 no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xs font-bold tracking-wider uppercase text-brand-primary bg-brand-primary-pale px-2 py-1 rounded-pill">
                  {tool.tag}
                </span>
              </div>
              <div className="font-display font-semibold text-brand-dark text-xl mb-2">{tool.title}</div>
              <div className="text-sm text-brand-text-mid leading-relaxed">{tool.desc}</div>
              <div className="text-sm font-semibold text-brand-primary mt-4">Open calculator →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="bg-brand-white px-container-sm sm:px-container py-section border-t border-brand-border">
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl mb-4">Why our calculators are different</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            Most aquarium calculators on the web are decade-old Flash-era pages with broken math, the wrong unit conversions, or — worst — the
            old &quot;inch per gallon&quot; rule that has misled new aquarists for thirty years.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            Our tools use modern stocking science (surface area + filtration + bioload), give honest confidence ranges instead of false precision,
            and link to the underlying species data and equipment reviews so you can actually act on the answer.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            Every calculator is built by people who keep tanks. If you spot a bad answer,{' '}
            <Link href="/editorial-standards" className="text-brand-primary font-semibold">tell us</Link> — we fix it.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mt-3">
            New to the terms these tools use? The <Link href="/glossary" className="text-brand-primary font-semibold">aquarium glossary</Link> defines
            the nitrogen cycle, pH, GH/KH, bioload, and the rest in plain English.
          </p>
        </div>
      </section>
      <DirectoryPlacesCta listings={listings} noun="licensed aquarium professionals" />

    </>
  </>
  )
}
