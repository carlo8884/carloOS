import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Best Aquarium Equipment Reviews 2025 — Ranked & Compared | Fish.com',
  description: 'Aquarium equipment reviews with honest editorial criteria. Filters, heaters, lighting, nano tanks, fertilizers, and water test kits — ranked with real data.',
  path: '/reviews',
})

const REVIEWS = [
  {
    title: 'Best Aquarium Filters 2025',
    desc: 'HOB, canister, and sponge filters ranked by flow rate, media volume, and noise — for tanks from 10 to 125 gallons.',
    href: '/reviews/best-aquarium-filters',
    badge: '🏆 Most Important',
  },
  {
    title: 'Best Canister Filters 2025',
    desc: 'Fluval, Eheim, and SunSun compared on bio-media volume, flow rate, and seal reliability.',
    href: '/reviews/best-canister-filters',
    badge: '⚙️ Filtration',
  },
  {
    title: 'Best Aquarium Heaters 2025',
    desc: 'Eheim Jager, Fluval E-series, and Aqueon Pro tested for temperature accuracy and failure safety.',
    href: '/reviews/best-aquarium-heaters',
    badge: '🔥 Essential',
  },
  {
    title: 'Best Aquarium Lighting 2025',
    desc: 'Full-spectrum, planted-tank, and reef-capable lights compared on PAR output and spectrum quality.',
    href: '/reviews/best-aquarium-lighting',
    badge: '💡 Lighting',
  },
  {
    title: 'Best Water Test Kits 2025',
    desc: 'API Master Test Kit vs test strips — why liquid tests are the only reliable option, with top picks.',
    href: '/reviews/best-water-test-kits',
    badge: '🧪 Water Quality',
  },
  {
    title: 'Best Nano Tanks 2025',
    desc: 'All-in-one nano aquariums for shrimp, bettas, and small communities — compared on filtration quality and light output.',
    href: '/reviews/best-nano-tanks',
    badge: '🐠 Small Tanks',
  },
  {
    title: 'Best Planted-Tank Fertilizers 2025',
    desc: 'Macro, micro, and all-in-one fertilizers ranked by nutrient completeness and value. With dosing guidance.',
    href: '/reviews/best-planted-tank-fertilizers',
    badge: '🌿 Planted Tanks',
  },
]

export default function FishReviewsPage() {
  return (
    <>
      {/* HERO */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Equipment Reviews</span>
        </div>
        <h1
          className="font-display font-bold text-white tracking-tight leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}
        >
          Aquarium Equipment Reviews 2025
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Filters, heaters, lighting, and testing gear — ranked by aquarists using real performance data, not box claims.
        </p>
      </div>

      {/* REVIEWS GRID */}
      <div className="px-container sm:px-container-sm py-12">
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

      {/* EMAIL */}
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Equipment picks, species spotlights, and fishkeeping tips every Thursday."
          source="reviews-hub"
          ctaText="Subscribe Free"
          perks={['⚙️ Editor equipment picks', '🐠 Species guides', '🧪 Water chemistry tips', '🚫 No spam']}
        />
      </div>

      {/* BROWSE ALL */}
      <section className="border-t border-brand-border bg-brand-surface px-container sm:px-container-sm py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Reviews</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
          {REVIEWS.map((r) => (
            <Link key={r.href} href={r.href} className="text-sm text-brand-primary no-underline hover:underline">
              {r.title.replace(' 2025', '')}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
