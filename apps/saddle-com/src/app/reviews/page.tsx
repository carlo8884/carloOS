import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Saddle Reviews 2025 — Compared & Ranked | Saddle.com', description: 'Saddle reviews drawing on CSF reviewer notes and published rider reports. English, western, and discipline-specific saddles ranked with honest editorial criteria.', path: '/reviews' })

const REVIEWS = [
  { title: 'Best English Saddles 2025', desc: 'Stubben, Pessoa, Bates, Collegiate — dressage, jumping, AP ranked', href: '/reviews/best-english-saddles', badge: '🏆 Full Review' },
  { title: 'Stubben Saddle Review 2025', desc: 'Roxane, Portos, Aramis — complete lineup reviewed', href: '/reviews/stubben-saddle-review' },
  { title: 'Pessoa Saddle Review 2025', desc: 'Gen X Pro, Legacy, Optimum ranked', href: '/reviews/pessoa-saddle-review' },
  { title: 'Collegiate Saddle Review 2025', desc: 'Best budget English saddles reviewed', href: '/reviews/collegiate-saddle-review' },
]

export default function SaddleReviewsPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <h1 className="font-display font-black text-white tracking-tighter mb-3" style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>Saddle Reviews 2025</h1>
          <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">CSF reviewer notes and Society of Master Saddlers reference material. Honest editorial criteria — we rank what actually fits and performs.</p>
        </div>
      </div>
      <div className="px-container sm:px-container-sm py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {REVIEWS.map(r => (
            <Link key={r.href} href={r.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all">
              {(r as any).badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{(r as any).badge}</div>}
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
              <div className="text-xs text-brand-text-light">{r.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture variant="section" siteId="saddle-com" title="Free Saddle Buyer's Guide" subtitle="Reviews and market intelligence every other week." source="reviews-hub" ctaText="Get Free Guide" perks={['📋 CSF-informed', '💰 Market pricing']} />
      </div>
    </>
  )
}
