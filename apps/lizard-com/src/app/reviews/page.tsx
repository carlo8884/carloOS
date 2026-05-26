import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Equipment Reviews 2025 — Tested & Ranked | Lizard.com', description: 'Reptile equipment reviews tested by experienced keepers. UVB bulbs, terrariums, thermostats, thermometers — ranked with real data.', path: '/reviews' })

const REVIEWS = [
  { title: 'Best UVB Bulbs 2025', desc: 'Solarmeter 6.5 tested — Arcadia vs Zoo Med ranked', href: '/reviews/best-uvb-bulbs', badge: '☀️ Most Important' },
  { title: 'Best Reptile Terrariums 2025', desc: 'Zen Habitats, Animal Plastics, Exo Terra — PVC vs glass tested', href: '/reviews/best-reptile-terrariums', badge: '🏠 Setup' },
  { title: 'Best Thermometers 2025', desc: 'Govee, Inkbird tested for accuracy — calibration data included', href: '/reviews/best-thermometers-hygrometers' },
  { title: 'Best Reptile Substrates 2025', desc: 'Bio-active mixes, loose particle, tile — tested by species', href: '/reviews/best-reptile-substrates' },
]

export default function LizardReviewsPage() {
  return (
    <>
      <div className="relative z-10 px-container sm:px-container-sm py-14" style={{ background: 'linear-gradient(135deg, #0D1A0D, #080C08)' }}>
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Equipment Reviews</span></div>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-3" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>Reptile Equipment Reviews</h1>
        <p className="text-lg font-light leading-relaxed max-w-xl" style={{ color: 'rgba(238,240,228,0.55)' }}>Tested by experienced keepers with real data — not marketing copy.</p>
      </div>
      <div className="relative z-10 px-container sm:px-container-sm py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content mx-auto">
          {REVIEWS.map(r => (
            <Link key={r.href} href={r.href} className="block rounded-xl p-6 no-underline hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {r.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.badge}</div>}
              <div className="font-display font-bold text-brand-white text-base mb-1.5">{r.title}</div>
              <div className="text-xs" style={{ color: 'rgba(238,240,228,0.45)' }}>{r.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="relative z-10 px-container sm:px-container-sm py-10" style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.1)' }}>
        <EmailCapture variant="inline" siteId="lizard-com" ctaText="Subscribe Free" source="reviews-index" />
      </div>
    </>
  )
}
