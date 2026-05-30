import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, Breadcrumb } from '@carloOS/ui'
import { buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'
import { ACCESSORY_CATEGORIES } from '@/data/accessories'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Accessories — 6 Buyer Guides | Saddle.com',
  description:
    'Saddle accessory buyer guides — stirrups, saddle pads, girths, bridles, reins, breastplates and cruppers. Types, fit, price ranges, top brands.',
  path: '/accessories',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://saddle.com/' },
    { name: 'Accessories', url: 'https://saddle.com/accessories' },
  ],
})

export default function AccessoriesHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
            Saddle Accessory Reference
          </span>
          <h1
            className="font-display font-black text-white tracking-tighter mb-3"
            style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}
          >
            Saddle Accessories — 6 Buyer Guides
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            Stirrups, saddle pads, girths, bridles, reins, breastplates and cruppers — the six accessory categories
            that come up most often after a saddle purchase. Each guide covers what the accessory is, how to choose,
            price tiers, top brands, and common mistakes. Sourced from the Society of Master Saddlers (UK), Master
            Saddlers Association (US), and the USEF Rule Book.
          </p>
        </div>
      </div>

      <Breadcrumb
        siteId="saddle-com"
        items={[{ name: 'Home', href: '/' }, { name: 'Accessories' }]}
      />

      <div className="px-container-sm sm:px-container py-12">
        <div className="bg-brand-primary-pale border border-brand-border rounded-xl p-5 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Free Lead Magnet
          </div>
          <div className="font-display font-bold text-brand-dark text-lg mb-2">
            Get the free 12-Point Saddle Fit Checklist
          </div>
          <p className="text-sm text-brand-text-mid mb-3 max-w-2xl">
            A printable 12-point checklist for try-on appointments and routine fit checks — covers wither clearance,
            panel contact, gullet clearance, balance, and the rider-side checks. Sourced from cited references; not a
            substitute for a qualified fitter.
          </p>
          <Link
            href="/saddle-fit-checklist"
            className="inline-block bg-brand-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:bg-brand-primary-dark transition-colors"
          >
            Get the free checklist →
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">All Six Accessory Categories</h2>
          <p className="text-sm text-brand-text-mid mb-5 max-w-2xl">
            Each buyer guide covers types and use cases (table), how to choose, common mistakes, price ranges, top
            brands, and FAQs. Cited against Society of Master Saddlers and Master Saddlers Association references —
            not a substitute for a qualified fitter on the horse.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ACCESSORY_CATEGORIES.map((a) => (
              <Link
                key={a.slug}
                href={`/accessories/${a.slug}`}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl leading-none" aria-hidden="true">
                    {a.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                      Accessory · Buyer Guide
                    </div>
                    <div className="font-display font-bold text-brand-dark text-lg mb-1.5">{a.categoryName}</div>
                    <div className="text-xs text-brand-text-light mb-2">{a.tagline}</div>
                    <div className="text-2xs text-brand-primary font-bold">Read the buyer guide →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">Related References</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: 'All Saddle Brands',
                href: '/brands',
                desc: '10-brand reference — Stübben, Pessoa, Bates, Wintec, County, Custom, Antares, Billy Cook, Circle Y, Reinsman.',
              },
              {
                title: 'Saddle Fit by Discipline',
                href: '/fit',
                desc: 'Discipline-specific fit reference — dressage, hunter/jumper, eventing, western, endurance, close-contact.',
              },
              {
                title: 'Saddle Reviews',
                href: '/reviews',
                desc: 'Best-of round-ups and individual brand reviews across English and Western.',
              },
              {
                title: 'General Saddle Fit Guide',
                href: '/guides/saddle-fit-guide',
                desc: 'The cross-discipline 4-point check — wither, panel, gullet, balance.',
              },
              {
                title: 'Used Saddle Buying Guide',
                href: '/guides/used-saddle-buying-guide',
                desc: 'Pre-purchase inspection checklist for used saddles.',
              },
              {
                title: 'Saddle.com Editorial Standards',
                href: '/editorial-standards',
                desc: 'How we source, cite, and update our buyer guides — and what we will not claim.',
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors"
              >
                <div className="font-display font-bold text-brand-dark text-sm mb-1">{l.title}</div>
                <div className="text-xs text-brand-text-light">{l.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture
          variant="section"
          siteId="saddle-com"
          title="Free Saddle Buyer's Guide"
          subtitle="Brand-by-brand reviews and saddle accessory buyer guides every other week."
          source="accessories-hub"
          ctaText="Get Free Guide"
          perks={['📋 Accessory buying tiers', '💰 Price ranges by category', '🐎 Top-brand shortlists']}
        />
      </div>
    </>
  )
}
