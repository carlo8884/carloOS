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
  { brand: 'Stubben',    model: 'Roxane',           discipline: 'Dressage',    score: '9.5', badge: 'Best Dressage', href: '/reviews/stubben-saddle-review',    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=85&auto=format&fit=crop' },
  { brand: 'Pessoa',     model: 'Gen X Pro',        discipline: 'Jumping',     score: '9.2', badge: 'Best Jumping',  href: '/reviews/pessoa-saddle-review',     image: 'https://images.unsplash.com/photo-1474546652694-a33dd8161d66?w=800&q=85&auto=format&fit=crop' },
  { brand: 'Collegiate', model: 'Convertible AP',   discipline: 'All-Purpose', score: '8.7', badge: 'Best Value',    href: '/reviews/collegiate-saddle-review', image: 'https://images.unsplash.com/photo-1469820838967-83c1450cf56a?w=800&q=85&auto=format&fit=crop' },
]

// ── Inline SVG icon set — equestrian-line voice ────────────────────────────

type GuideIcon = 'fit' | 'seat' | 'used' | 'leather' | 'english' | 'western'

function Icon({ name }: { name: GuideIcon }) {
  const common = {
    width: 28, height: 28, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: 1.5,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'fit':       // ruler + brackets (fit calipers)
      return (
        <svg {...common}>
          <path d="M3 8h18v8H3z" />
          <path d="M7 8v2M11 8v3M15 8v2M19 8v3M7 14v2M11 13v3M15 14v2M19 13v3" />
        </svg>
      )
    case 'seat':      // measuring tape
      return (
        <svg {...common}>
          <path d="M3 6h13a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H7a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h13" />
          <path d="M16 10v4M12 10v4M8 10v4" />
        </svg>
      )
    case 'used':      // tag with check
      return (
        <svg {...common}>
          <path d="M3 12V4h8l10 10-8 8L3 12z" />
          <circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
          <path d="M11 14l2 2 4-4" />
        </svg>
      )
    case 'leather':   // soap-bar/conditioner bottle
      return (
        <svg {...common}>
          <path d="M9 3h6v3l1 2v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8l1-2V3z" />
          <path d="M10 6h4" />
          <path d="M10 12h4M10 15h4" />
        </svg>
      )
    case 'english':   // english saddle silhouette (abstract)
      return (
        <svg {...common}>
          <path d="M3 14c0-3 3-5 9-5s9 2 9 5c0 1-1 2-2 2h-2l-2 2H8l-2-2H4c-1 0-1-1-1-2z" />
          <path d="M9 9V6h6v3" />
          <path d="M12 14v2" />
        </svg>
      )
    case 'western':   // western horn/saddle silhouette
      return (
        <svg {...common}>
          <path d="M3 15c0-3 3-5 9-5s9 2 9 5c0 1-1 2-2 2h-2l-2 2H8l-2-2H4c-1 0-1-1-1-2z" />
          <path d="M12 10V4M10 6c0-1 1-2 2-2s2 1 2 2v4" />
        </svg>
      )
  }
}

const GUIDE_CATEGORIES: { icon: GuideIcon; title: string; desc: string; href: string }[] = [
  { icon: 'fit',     title: 'Saddle Fit Guide',  desc: 'For horse and rider',           href: '/guides/saddle-fit-guide' },
  { icon: 'seat',    title: 'Seat Size Guide',   desc: 'Find your correct size',        href: '/guides/seat-size-guide' },
  { icon: 'used',    title: 'Buying Used',       desc: 'What to check before you buy',  href: '/guides/used-saddle-buying-guide' },
  { icon: 'leather', title: 'Leather Care',      desc: 'Cleaning, conditioning, storage', href: '/guides/leather-care-guide' },
  { icon: 'english', title: 'English Saddles',   desc: 'Dressage, jumping, AP ranked',  href: '/english' },
  { icon: 'western', title: 'Western Saddles',   desc: 'Roping, barrel, trail ranked',  href: '/western' },
]

const HERO_STATS = [
  { num: '30+', label: 'Brands Profiled' },
  { num: 'All', label: 'Disciplines' },
  { num: 'SMS', label: 'Referenced' },
] as const

export default function SaddleHomePage() {
  return (
    <>
      {/* HERO — image-left on desktop, image-above-text on mobile */}
      <section className="bg-brand-dark overflow-hidden grid lg:grid-cols-[1.1fr_1fr] lg:min-h-[88vh]">
        {/* Image */}
        <div className="relative order-1 lg:order-1 aspect-[5/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full">
          <Image
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=85&auto=format&fit=crop"
            alt="Premium leather saddle"
            fill className="object-cover object-center" priority sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent 35%, #1A1208 100%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: 'linear-gradient(to left, #1A1208 0%, rgba(26,18,8,0) 22%)' }}
            aria-hidden="true"
          />
        </div>

        {/* Text */}
        <div className="relative order-2 lg:order-2 flex flex-col justify-center px-container-sm sm:px-container py-14 lg:py-20">
          <div
            className="absolute inset-0 opacity-90 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(160,120,64,0.16) 0%, transparent 55%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2.5 mb-5 lg:mb-7">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Saddles, Compared</span>
            </div>
            <h1
              className="font-display font-black text-white leading-[0.95] tracking-tighter mb-5 lg:mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Saddles,<br />
              <em className="not-italic text-brand-primary">Seriously.</em>
            </h1>
            <p className="text-base lg:text-lg font-light text-white/65 leading-relaxed max-w-md mb-8 lg:mb-10">
              Saddle reviews drawing on CSF reviewer notes and published rider reports. Buying guides referenced against Society of Master Saddlers material. The resource serious equestrians can rely on before spending $2,000–$5,000 on a saddle.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/english"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
                English Saddle Reviews<span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link href="/guides/saddle-fit-guide"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors">
                Saddle Fit Guide
                <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
            <div className="flex gap-8 mt-10 lg:mt-12 pt-7 lg:pt-8 border-t border-white/10">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-xl lg:text-2xl font-bold text-white tabular-display">{stat.num}</div>
                  <div className="text-2xs text-white/55 font-semibold uppercase tracking-eyebrow mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-brand-dark border-b border-white/5 px-container-sm sm:px-container py-3">
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2 text-white/70">
          {['CSF-informed reviews', 'SMS-referenced guides', 'No paid brand placements', 'Used-saddle market guidance'].map((item, i, arr) => (
            <span
              key={item}
              className="flex items-center text-2xs font-semibold uppercase tracking-eyebrow whitespace-nowrap"
            >
              {item}
              {i < arr.length - 1 && (
                <span aria-hidden="true" className="hidden sm:inline mx-5 h-3 w-px bg-white/15" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURED REVIEWS */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Top Picks 2025</span>
              </div>
              <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl sm:text-4xl">Saddle Reviews</h2>
            </div>
            <Link href="/reviews" className="text-sm font-semibold text-brand-primary no-underline hover:text-brand-primary-dark transition-colors">
              All reviews →
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {FEATURED_REVIEWS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group block bg-brand-white border border-brand-border rounded-md overflow-hidden no-underline hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 ease-carloOS"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                  <Image
                    src={r.image} alt={`${r.brand} ${r.model}`} fill
                    className="object-cover transition-transform duration-500 ease-carloOS group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-2xs font-bold tracking-eyebrow uppercase text-white/85">{r.badge}</span>
                    <span className="font-display text-3xl font-black text-white tabular-display leading-none">{r.score}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.discipline}</div>
                  <div className="font-display font-bold text-brand-dark text-xl leading-tight">{r.brand}</div>
                  <div className="font-display text-brand-text-mid text-base leading-snug">{r.model}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDE CATEGORIES — dark band, 6 SVG line icons */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-container-wide">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Expert Resources</span>
          </div>
          <h2 className="font-display font-bold text-white tracking-tight text-3xl sm:text-4xl mb-3">Buying &amp; Care Guides</h2>
          <p className="text-base text-white/65 max-w-lg mb-10 leading-relaxed">
            Guides built on CSF reviewer notes and Society of Master Saddlers reference material — the guides serious riders actually use.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDE_CATEGORIES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group block bg-white/[0.04] border border-white/[0.08] rounded-md p-6 no-underline hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-brand-primary/85 group-hover:text-brand-primary mb-4 transition-colors">
                  <Icon name={g.icon} />
                </div>
                <div className="font-display font-bold text-white text-base mb-1.5 leading-snug">{g.title}</div>
                <div className="text-xs text-white/55 leading-relaxed">{g.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="bg-brand-primary-pale px-container-sm sm:px-container py-section">
        <EmailCapture
          variant="section"
          siteId="saddle-com"
          title="Free Saddle Buyer's Guide"
          subtitle="New reviews, buying guides, and saddle market intelligence — every other week."
          ctaText="Get Free Guide"
          source="homepage-section"
          perks={['CSF-informed', 'All disciplines', 'Used market tips', 'No spam']}
        />
      </section>
    </>
  )
}
