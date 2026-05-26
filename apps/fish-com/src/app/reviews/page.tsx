import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Aquarium Equipment Reviews 2025 | Fish.com', description: 'Aquarium equipment reviews — filters, heaters, lighting, and water testing gear ranked for freshwater and saltwater tanks.', path: '/reviews' })

const REVIEWS = [
  { title: 'Best Aquarium Filters 2025', desc: 'Hang-on-back, canister, and sponge filters tested', href: '/reviews/best-aquarium-filters' },
  { title: 'Best Aquarium Heaters 2025', desc: 'Eheim Jager, Fluval, Aqueon tested for accuracy', href: '/reviews/best-aquarium-heaters' },
  { title: 'Best Water Test Kits', desc: 'API Master Test Kit vs test strips — why strips fail', href: '/reviews/best-water-test-kits' },
]

export default function FishReviewsPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-12">
        <h1 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>Aquarium Equipment Reviews</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Filters, heaters, lighting, and testing equipment — tested with real data.</p>
      </div>
      <div className="px-container sm:px-container-sm py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {REVIEWS.map(r => (
            <Link key={r.href} href={r.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card transition-all">
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
              <div className="text-xs text-brand-text-light">{r.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture variant="section" siteId="fish-com" title="The Weekly Tank" subtitle="Equipment picks and fishkeeping tips every Thursday." source="reviews-hub" ctaText="Subscribe Free" perks={['🐠 Species guides', '⚙️ Equipment picks']} />
      </div>
    </>
  )
}
