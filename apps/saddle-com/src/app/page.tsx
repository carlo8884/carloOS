import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddles & Equestrian Equipment, Compared',
  description: 'Saddle reviews, fitting guides, leather care, and brand comparisons — drawn from CSF reviewer write-ups, manufacturer specs, and published rider reports.',
  path: '/',
})

const FEATURED_REVIEWS = [
  { brand: 'Stubben', model: 'Roxane', discipline: 'Dressage', score: '9.5', badge: '🏆 Best Dressage', href: '/reviews/stubben-saddle-review', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=500&q=80&auto=format&fit=crop' },
  { brand: 'Pessoa', model: 'Gen X Pro', discipline: 'Jumping', score: '9.2', badge: '⭐ Best Jumping', href: '/reviews/pessoa-saddle-review', image: 'https://images.unsplash.com/photo-1474546652694-a33dd8161d66?w=500&q=80&auto=format&fit=crop' },
  { brand: 'Collegiate', model: 'Convertible AP', discipline: 'All-Purpose', score: '8.7', badge: '💰 Best Value', href: '/reviews/collegiate-saddle-review', image: 'https://images.unsplash.com/photo-1469820838967-83c1450cf56a?w=500&q=80&auto=format&fit=crop' },
]

const GUIDE_CATEGORIES = [
  { icon: '📐', title: 'Saddle Fit Guide', desc: 'For horse and rider', href: '/guides/saddle-fit-guide' },
  { icon: '📏', title: 'Seat Size Guide', desc: 'Find your correct size', href: '/guides/seat-size-guide' },
  { icon: '🛒', title: 'Buying Used', desc: 'What to check before you buy', href: '/guides/used-saddle-buying-guide' },
  { icon: '🧴', title: 'Leather Care', desc: 'Cleaning, conditioning, storage', href: '/guides/leather-care-guide' },
  { icon: '🐴', title: 'English Saddles', desc: 'Dressage, jumping, AP ranked', href: '/english' },
  { icon: '🤠', title: 'Western Saddles', desc: 'Roping, barrel, trail ranked', href: '/western' },
]

export default function SaddleHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[88vh] grid lg:grid-cols-[1.1fr_1fr] bg-brand-dark overflow-hidden">
        {/* Image left */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1000&q=80&auto=format&fit=crop"
            alt="Premium leather saddle"
            fill className="object-cover object-center" priority sizes="55vw"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to left, #1A1208 0%, transparent 15%), linear-gradient(to top, rgba(26,18,8,0.4) 0%, transparent 50%)' }}
            aria-hidden="true" />
        </div>

        {/* Content right */}
        <div className="flex flex-col justify-center px-container sm:px-container-sm py-20 relative z-10">
          <div className="absolute inset-0 opacity-8"
            style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(160,120,64,0.2) 0%, transparent 55%)' }}
            aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-7">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Saddles, Compared</span>
            </div>
            <h1 className="font-display font-black text-white leading-none tracking-tighter mb-5"
              style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}>
              Saddles,<br />
              <em className="not-italic text-brand-primary">Seriously.</em>
            </h1>
            <p className="text-lg font-light text-white/55 leading-relaxed max-w-md mb-10">
              Saddle reviews drawing on CSF reviewer notes and published rider reports. Buying guides referenced against Society of Master Saddlers material. The resource serious equestrians can rely on before spending $2,000–$5,000 on a saddle.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/english"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
                English Saddle Reviews →
              </Link>
              <Link href="/guides/saddle-fit-guide"
                className="inline-flex items-center border border-white/20 text-white/80 font-medium text-sm px-7 py-3.5 rounded no-underline hover:border-white/40 hover:text-white transition-colors">
                Saddle Fit Guide
              </Link>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              {[['20+', 'Brands Profiled'], ['All', 'Disciplines'], ['SMS', 'Referenced']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-xl font-bold text-white">{n}</div>
                  <div className="text-xs text-white/35 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container sm:px-container-sm py-3.5 flex flex-wrap gap-x-6 gap-y-2">
        {['✓ CSF-informed reviews', '✓ SMS-referenced guides', '✓ No paid brand placements', '✓ Used-saddle market guidance'].map(t => (
          <span key={t} className="text-xs font-semibold text-brand-primary">{t}</span>
        ))}
      </div>

      {/* FEATURED REVIEWS */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-section">
        <div className="flex items-end justify-between mb-9">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Top Picks 2025</span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">Saddle Reviews</h2>
          </div>
          <Link href="/reviews" className="text-sm font-semibold text-brand-primary no-underline hover:underline">All reviews →</Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {FEATURED_REVIEWS.map((r) => (
            <Link key={r.href} href={r.href}
              className="block bg-brand-white border border-brand-border rounded-lg overflow-hidden no-underline hover:border-brand-primary hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200">
              <div className="relative h-52">
                <Image src={r.image} alt={`${r.brand} ${r.model}`} fill className="object-cover" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-2xs font-bold tracking-eyebrow uppercase text-white/80">{r.badge}</span>
                  <span className="font-display text-2xl font-black text-white">{r.score}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.discipline}</div>
                <div className="font-display font-bold text-brand-dark text-xl">{r.brand}</div>
                <div className="font-display text-brand-text-mid text-base">{r.model}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GUIDE CATEGORIES */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }}
          aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Expert Resources</span>
          </div>
          <h2 className="font-display font-bold text-white tracking-tight text-3xl mb-2">Buying & Care Guides</h2>
          <p className="text-base text-white/40 max-w-lg mb-10">Guides built on CSF reviewer notes and Society of Master Saddlers reference material — the guides serious riders actually use.</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDE_CATEGORIES.map((g) => (
              <Link key={g.href} href={g.href}
                className="block bg-white/5 border border-white/8 rounded-lg p-6 no-underline hover:bg-brand-primary/10 hover:border-brand-primary/25 hover:-translate-y-1 transition-all duration-200">
                <span className="text-2xl mb-3 block">{g.icon}</span>
                <div className="font-display font-bold text-white text-sm mb-1.5">{g.title}</div>
                <div className="text-xs text-white/40">{g.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="bg-brand-primary-pale px-container sm:px-container-sm py-section">
        <EmailCapture
          variant="section"
          siteId="saddle-com"
          title="Free Saddle Buyer's Guide"
          subtitle="New reviews, buying guides, and saddle market intelligence — every other week."
          ctaText="Get Free Guide"
          source="homepage-section"
          perks={['📋 CSF-informed', '🏇 All disciplines', '💰 Used market tips', '🚫 No spam']}
        />
      </section>
    </>
  )
}
