import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Health — Colic & Gastric Ulcers Reference | Horses.com',
  description:
    'Equine health references: colic (types, signs, emergency recognition) and gastric ulcer syndrome (EGUS) — grounded in AAEP and peer-reviewed literature.',
  path: '/health',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Health', url: 'https://horses.com/health' },
  ],
})

const HEALTH_ENTRIES = [
  {
    slug: 'colic',
    eyebrow: 'Emergencies',
    title: 'Equine Colic',
    description:
      'Spasmodic, impaction, gas, displacement, strangulation, and sand colic. Clinical signs, when to call the vet, diagnostics, medical and surgical treatment, and prevention.',
  },
  {
    slug: 'equine-ulcers',
    eyebrow: 'Gastroenterology',
    title: 'Equine Gastric Ulcers',
    description:
      'EGUS — squamous (ESGD) vs glandular (EGGD) disease, risk factors in performance horses, gastroscopy, omeprazole, and forage-first management.',
  },
]

export default function HealthHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Health Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Equine Health
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Evidence-based references on the equine health conditions owners and managers encounter
          most often, citing AAEP guidelines, peer-reviewed equine medicine, and veterinary
          clinical data.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Health</span>
      </nav>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          These pages are reference material — a supplement to, not a substitute for, qualified
          equine veterinary care. Contact your veterinarian immediately if your horse shows acute
          colic signs or rapid clinical deterioration.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0">
          {HEALTH_ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/health/${entry.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {entry.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {entry.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {entry.description}
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
          source="health-hub"
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
