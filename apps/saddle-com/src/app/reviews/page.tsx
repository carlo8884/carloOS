import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Saddle Reviews 2025 — Compared & Ranked | Saddle.com', description: 'Saddle reviews drawing on CSF reviewer notes and published rider reports. English, western.', path: '/reviews' })

const REVIEWS = [
  { title: 'Best English Saddles 2025', desc: 'Stubben, Pessoa, Bates, Collegiate — dressage, jumping, AP ranked', href: '/reviews/best-english-saddles', badge: '🏆 Full Review' },
  { title: 'Stubben Saddle Review 2025', desc: 'Roxane, Portos, Aramis — complete lineup reviewed', href: '/reviews/stubben-saddle-review' },
  { title: 'Pessoa Saddle Review 2025', desc: 'Gen X Pro, Legacy, Optimum ranked', href: '/reviews/pessoa-saddle-review' },
  { title: 'Collegiate Saddle Review 2025', desc: 'Best budget English saddles reviewed', href: '/reviews/collegiate-saddle-review' },
]

export default function SaddleReviewsPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <h1 className="font-display font-black text-white tracking-tighter mb-3" style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>Saddle Reviews 2025</h1>
          <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">CSF reviewer notes and Society of Master Saddlers reference material. Honest editorial criteria — we rank what actually fits and performs.</p>
        </div>
      </div>
      <div className="px-container-sm sm:px-container py-12">
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
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="saddle-com" title="Free Saddle Buyer's Guide" subtitle="Reviews and market intelligence every other week." source="reviews-hub" ctaText="Get Free Guide" perks={['📋 CSF-informed', '💰 Market pricing']} />
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Reviews</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="best-english-saddles" href="/reviews/best-english-saddles" className="text-sm text-brand-primary no-underline hover:underline">Best English Saddles</Link>
        <Link key="best-horse-blankets" href="/reviews/best-horse-blankets" className="text-sm text-brand-primary no-underline hover:underline">Best Horse Blankets</Link>
        <Link key="best-riding-boots" href="/reviews/best-riding-boots" className="text-sm text-brand-primary no-underline hover:underline">Best Riding Boots</Link>
        <Link key="best-riding-gloves" href="/reviews/best-riding-gloves" className="text-sm text-brand-primary no-underline hover:underline">Best Riding Gloves</Link>
        <Link key="best-riding-helmets" href="/reviews/best-riding-helmets" className="text-sm text-brand-primary no-underline hover:underline">Best Riding Helmets</Link>
        <Link key="best-saddle-pads" href="/reviews/best-saddle-pads" className="text-sm text-brand-primary no-underline hover:underline">Best Saddle Pads</Link>
        <Link key="best-stirrup-irons" href="/reviews/best-stirrup-irons" className="text-sm text-brand-primary no-underline hover:underline">Best Stirrup Irons</Link>
        <Link key="best-western-saddles" href="/reviews/best-western-saddles" className="text-sm text-brand-primary no-underline hover:underline">Best Western Saddles</Link>
        <Link key="collegiate-saddle-review" href="/reviews/collegiate-saddle-review" className="text-sm text-brand-primary no-underline hover:underline">Collegiate Saddle Review</Link>
        <Link key="pessoa-saddle-review" href="/reviews/pessoa-saddle-review" className="text-sm text-brand-primary no-underline hover:underline">Pessoa Saddle Review</Link>
        <Link key="stubben-saddle-review" href="/reviews/stubben-saddle-review" className="text-sm text-brand-primary no-underline hover:underline">Stubben Saddle Review</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>
  )
}
