import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, Breadcrumb } from '@carloOS/ui'
import { buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'
import { SADDLE_BRANDS } from '@/data/saddle-brands'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Brands — Compared & Reviewed | Saddle.com',
  description:
    'Saddle brand reference — Stübben, Pessoa, Bates, Wintec, County, Custom, Antares, Billy Cook, Circle Y, Reinsman. Models, fit, price, warranty.',
  path: '/brands',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://saddle.com/' },
    { name: 'Brands', url: 'https://saddle.com/brands' },
  ],
})

const ENGLISH = SADDLE_BRANDS.filter((b) => b.discipline.startsWith('English'))
const WESTERN = SADDLE_BRANDS.filter((b) => b.discipline === 'Western')

function priceTier(lo: number) {
  if (lo >= 4500) return 'Premium / bespoke'
  if (lo >= 2000) return 'Mid-to-upper'
  return 'Entry-to-mid'
}

export default function BrandsHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">Brand Reference</span>
          <h1
            className="font-display font-black text-white tracking-tighter mb-3"
            style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}
          >
            Saddle Brands — 10 Brands Compared
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            English and Western saddle brand reference. Founded year, headquarters, signature models, fit profile,
            warranty, and who each brand actually suits — drawing on manufacturer disclosures and the Society of Master
            Saddlers directory.
          </p>
        </div>
      </div>

      <Breadcrumb
        siteId="saddle-com"
        items={[{ name: 'Home', href: '/' }, { name: 'Brands' }]}
      />

      <div className="px-container sm:px-container-sm py-12">
        <section className="mb-12">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">English Saddle Brands</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ENGLISH.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                  {b.headquartersCountry.split('(')[0].trim()} · est. {b.foundedYear}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-1.5">{b.name}</div>
                <div className="text-xs text-brand-text-light mb-2">{b.tagline}</div>
                <div className="text-2xs text-brand-text-light">
                  <strong>Price:</strong> ${b.priceRangeUsd[0].toLocaleString()}–${b.priceRangeUsd[1].toLocaleString()} ({priceTier(b.priceRangeUsd[0])})
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">Western Saddle Brands</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {WESTERN.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                  {b.headquartersCountry.split('(')[0].trim()} · est. {b.foundedYear}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-1.5">{b.name}</div>
                <div className="text-xs text-brand-text-light mb-2">{b.tagline}</div>
                <div className="text-2xs text-brand-text-light">
                  <strong>Price:</strong> ${b.priceRangeUsd[0].toLocaleString()}–${b.priceRangeUsd[1].toLocaleString()} ({priceTier(b.priceRangeUsd[0])})
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture
          variant="section"
          siteId="saddle-com"
          title="Free Saddle Brand Buyer's Guide"
          subtitle="Brand-by-brand reviews and market intelligence every other week."
          source="brands-hub"
          ctaText="Get Free Guide"
          perks={['📋 Brand comparison', '💰 Market pricing']}
        />
      </div>
    </>
  )
}
