import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Enclosure Setup Guide | Lizard.com', description: 'Complete reptile enclosure setup guides — temperatures, UVB lighting, humidity, substrate, and enrichment for all major species.', path: '/setup' })

const GUIDES = [
  { title: 'UVB Lighting Guide', desc: 'Ferguson Zones, T5 HO selection, distance tables, replacement schedule', href: '/setup/uvb-lighting-guide', badge: 'Essential' },
  { title: 'Temperature Setup Guide', desc: 'Gradient creation, thermostats, measuring correctly', href: '/setup/temperature-guide' },
  { title: 'Humidity Guide', desc: 'Species requirements, misting schedules, moist hides', href: '/setup/humidity-guide' },
  { title: 'Substrate Guide', desc: 'Bio-active, loose particle, tile — what works for each species', href: '/setup/substrate-guide' },
  { title: 'Enclosure Size Guide', desc: 'Minimum footprints by species and why bigger is better', href: '/setup/terrarium-size-guide' },
  { title: 'Screen vs PVC vs Glass', desc: 'Enclosure materials compared on humidity and heat retention', href: '/setup/screen-vs-pvc-enclosure' },
  { title: 'Drainage Layer Guide', desc: 'Building a false bottom for a bioactive vivarium', href: '/setup/drainage-layer-bioactive' },
  { title: 'Cleanup Crew Guide', desc: 'Isopods and springtails for a self-cleaning bioactive setup', href: '/setup/cleanup-crew-isopods-springtails' },
  { title: 'Best Reptile Terrariums 2026', desc: 'Zen Habitats, Animal Plastics, Exo Terra compared and ranked', href: '/reviews/best-reptile-terrariums', badge: 'Compared' },
  { title: 'Best Thermometers 2026', desc: 'Govee, Inkbird, Zoo Med compared with published calibration data', href: '/reviews/best-thermometers-hygrometers', badge: 'Compared' },
  { title: 'Best UVB Bulbs 2026', desc: 'Arcadia vs Zoo Med ranked on published Solarmeter 6.5 data', href: '/reviews/best-uvb-bulbs', badge: 'Compared' },
]

export default function LizardSetupHubPage() {
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://lizard.com/' },
      { name: 'Enclosure Setup', url: 'https://lizard.com/setup' },
    ],
  })

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Reptile Enclosure Setup Guides',
    numberOfItems: GUIDES.length,
    itemListElement: GUIDES.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: g.title,
      url: `https://lizard.com${g.href}`,
    })),
  }

  const lizardSetupSchema = combineSchemas(breadcrumbSchema, itemListSchema)

  return (
    <>
      <SchemaScript schema={lizardSetupSchema} />
      <div className="relative z-10 px-container-sm sm:px-container py-16" style={{ background: 'linear-gradient(135deg, #0D1A0D, #080C08)' }}>
        <div className="flex items-center gap-2.5 mb-5"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Enclosure Setup</span></div>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}>Reptile Enclosure Setup</h1>
        <p className="text-lg font-light leading-relaxed max-w-xl" style={{ color: 'rgba(238,240,228,0.55)' }}>Complete setup guides for temperatures, UVB, humidity, and substrate — plus tested equipment recommendations.</p>
      </div>
      <div className="relative z-10 px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="lizard-com:category-setup" aspect="16:9" variant="wide" priority />
      </div>
      <div className="relative z-10 px-container-sm sm:px-container py-14">
        <div className="grid sm:grid-cols-2 gap-4 max-w-content-wide mx-auto">
          {GUIDES.map(g => (
            <Link key={g.href} href={g.href} className="block rounded-lg p-5 no-underline hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {g.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{g.badge}</div>}
              <div className="font-display font-bold text-brand-white text-base mb-1.5">{g.title}</div>
              <div className="text-xs" style={{ color: 'rgba(238,240,228,0.45)' }}>{g.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="relative z-10 px-container-sm sm:px-container pb-4">
        <div className="max-w-content-wide mx-auto">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">Seasonal &amp; cyclical care</div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/husbandry/brumation-guide" className="block rounded-lg p-5 no-underline hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="font-display font-bold text-brand-white text-base mb-1.5">Brumation Guide</div>
              <div className="text-xs" style={{ color: 'rgba(238,240,228,0.45)' }}>Safe seasonal cool-down, which species brumate, and telling brumation apart from illness</div>
            </Link>
            <Link href="/husbandry/shedding-guide" className="block rounded-lg p-5 no-underline hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="font-display font-bold text-brand-white text-base mb-1.5">Shedding Guide</div>
              <div className="text-xs" style={{ color: 'rgba(238,240,228,0.45)' }}>How ecdysis works, humidity needs, and preventing retained shed across reptile groups</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 px-container-sm sm:px-container py-12" style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.1)' }}>
        <EmailCapture variant="inline" siteId="lizard-com" ctaText="Subscribe Free" source="setup-hub" />
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Setup Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="bioactive-setup" href="/setup/bioactive-setup" className="text-sm text-brand-primary no-underline hover:underline">Bioactive Setup</Link>
        <Link key="humidity-guide" href="/setup/humidity-guide" className="text-sm text-brand-primary no-underline hover:underline">Humidity Guide</Link>
        <Link key="lighting-guide" href="/setup/lighting-guide" className="text-sm text-brand-primary no-underline hover:underline">Lighting Guide</Link>
        <Link key="substrate-guide" href="/setup/substrate-guide" className="text-sm text-brand-primary no-underline hover:underline">Substrate Guide</Link>
        <Link key="temperature-guide" href="/setup/temperature-guide" className="text-sm text-brand-primary no-underline hover:underline">Temperature Guide</Link>
        <Link key="uvb-lighting-guide" href="/setup/uvb-lighting-guide" className="text-sm text-brand-primary no-underline hover:underline">UVB Lighting Guide</Link>
        <Link key="terrarium-size-guide" href="/setup/terrarium-size-guide" className="text-sm text-brand-primary no-underline hover:underline">Enclosure Size Guide</Link>
        <Link key="screen-vs-pvc-enclosure" href="/setup/screen-vs-pvc-enclosure" className="text-sm text-brand-primary no-underline hover:underline">Screen vs PVC Enclosures</Link>
        <Link key="drainage-layer-bioactive" href="/setup/drainage-layer-bioactive" className="text-sm text-brand-primary no-underline hover:underline">Drainage Layer Guide</Link>
        <Link key="cleanup-crew-isopods-springtails" href="/setup/cleanup-crew-isopods-springtails" className="text-sm text-brand-primary no-underline hover:underline">Cleanup Crew Guide</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>
  )
}
