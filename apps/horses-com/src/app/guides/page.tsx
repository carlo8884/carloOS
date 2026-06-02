import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Guides — Saddle Fit, Dental Care & Vaccinations | Horses.com',
  description:
    'Three equine owner guides: saddle fit basics, dental care, and AAEP core and risk-based vaccination schedules — cited from primary veterinary sources.',
  path: '/guides',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Guides', url: 'https://horses.com/guides' },
  ],
})

const GUIDES = [
  {
    slug: 'saddle-fit-basics',
    eyebrow: 'Equipment',
    title: 'Saddle Fit Basics',
    description:
      'A 12-point framework for assessing saddle fit on the horse — tree width, panel contact, channel clearance, balance, and the ridden check.',
  },
  {
    slug: 'equine-dental-care',
    eyebrow: 'Preventive care',
    title: 'Equine Dental Care',
    description:
      'Floating, wolf teeth, EOTRH, annual exam timing, and what to expect from a dental exam under sedation.',
  },
  {
    slug: 'equine-vaccination-schedule',
    eyebrow: 'Preventive care',
    title: 'Vaccination Schedule',
    description:
      'AAEP core vaccines (EWT, rabies, WNV, EEV/WEV) and risk-based vaccines (flu, rhino, strangles, Potomac fever) — timing, boosters, and geographic considerations.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Equine Owner Guides',
  numberOfItems: GUIDES.length,
  itemListElement: GUIDES.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: g.title,
    url: `https://horses.com/guides/${g.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function GuidesHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Owner Guides
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Equine Guides
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Practical owner guides on saddle fitting, preventive dental care, and vaccination
          schedules — each citing AAEP guidelines, veterinary clinical literature, and
          Society of Master Saddlers criteria.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="horses-com:category-guides" aspect="16:9" variant="wide" priority />
      </div>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {g.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {g.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {g.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Email Capture */}
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
          source="guides-hub"
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
