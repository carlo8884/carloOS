import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Care, Source-First',
  description: 'Source-first reptile care reference. Species profiles, UVB setup, enclosures, feeding, and health — grounded in published husbandry research.',
  path: '/',
})

const FEATURED_SPECIES = [
  { name: 'Bearded Dragon',  type: 'Pogona vitticeps',       level: 'Beginner',     href: '/species/bearded-dragon',  image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&q=85&auto=format&fit=crop', imageAlt: 'Bearded dragon' },
  { name: 'Leopard Gecko',   type: 'Eublepharis macularius', level: 'Beginner',     href: '/species/leopard-gecko',   image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=600&q=85&auto=format&fit=crop', imageAlt: 'Leopard gecko' },
  { name: 'Ball Python',     type: 'Python regius',          level: 'Beginner',     href: '/species/ball-python',     image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=600&q=85&auto=format&fit=crop', imageAlt: 'Ball python' },
  { name: 'Blue-Tongue Skink', type: 'Tiliqua spp.',         level: 'Intermediate', href: '/species/blue-tongue-skink', image: 'https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?w=600&q=85&auto=format&fit=crop', imageAlt: 'Blue-tongue skink' },
  { name: 'Crested Gecko',   type: 'Correlophus ciliatus',   level: 'Beginner',     href: '/species/crested-gecko',   image: 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=600&q=85&auto=format&fit=crop', imageAlt: 'Crested gecko' },
  { name: 'Corn Snake',      type: 'Pantherophis guttatus',  level: 'Beginner',     href: '/species/corn-snake',      image: 'https://images.unsplash.com/photo-1567612529009-afe25813a308?w=600&q=85&auto=format&fit=crop', imageAlt: 'Corn snake' },
]

// ── Inline SVG icon set — reptile-husbandry voice ──────────────────────────

type ResourceIcon = 'species' | 'uvb' | 'temp' | 'feeding' | 'health' | 'equipment'

function Icon({ name }: { name: ResourceIcon }) {
  const common = {
    width: 28, height: 28, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: 1.5,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'species':   // lizard silhouette abstract
      return (
        <svg {...common}>
          <path d="M3 13c0-2 2-3 4-3 1 0 2 .3 3 1l3 .5c1 0 2-.5 3-.5 3 0 5 1.5 5 4 0 .8-.4 1.5-1 2l-2 1.5-3-.5-3 1-3-1-3 .5-2-1.5c-.6-.5-1-1.2-1-2z" />
          <circle cx="19.5" cy="13" r="0.5" fill="currentColor" stroke="none" />
          <path d="M6 14l-2 3M9 16l-1 2M14 16l-1 2M17 14l2 3" />
        </svg>
      )
    case 'uvb':       // sun rays
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" />
        </svg>
      )
    case 'temp':      // thermometer
      return (
        <svg {...common}>
          <path d="M12 3a2 2 0 0 0-2 2v9a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
          <path d="M12 13V7" />
          <path d="M16 6h2M16 10h2M16 14h2" />
        </svg>
      )
    case 'feeding':   // bowl
      return (
        <svg {...common}>
          <path d="M3 11h18" />
          <path d="M4 11a8 8 0 0 0 16 0" />
          <path d="M2 11h20" />
          <path d="M9 7c0-1 .5-2 1.5-2.5M13 7c0-1 .5-2 1.5-2.5M11 8c0-1 .5-2 1.5-2.5" />
        </svg>
      )
    case 'health':    // medical cross in droplet
      return (
        <svg {...common}>
          <path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z" />
          <path d="M12 11v6M9 14h6" />
        </svg>
      )
    case 'equipment': // gear
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7L5.6 5.6" />
        </svg>
      )
  }
}

const CONTENT_CATEGORIES: { icon: ResourceIcon; title: string; desc: string; href: string }[] = [
  { icon: 'species',   title: 'Species Guides', desc: 'Complete care for 50+ species',           href: '/species' },
  { icon: 'uvb',       title: 'UVB Lighting',   desc: 'Ferguson zones, T5 HO specs, meter testing', href: '/setup/uvb-lighting-guide' },
  { icon: 'temp',      title: 'Temperatures',   desc: 'Gradient setup by species',                href: '/setup' },
  { icon: 'feeding',   title: 'Feeding Guide',  desc: 'Prey size, frequency, gut-loading',        href: '/health/reptile-feeding-guide' },
  { icon: 'health',    title: 'Reptile Health', desc: 'Sick reptile signs and treatment',         href: '/health/sick-reptile-signs' },
  { icon: 'equipment', title: 'Equipment',      desc: 'Enclosures, thermostats, tested gear',     href: '/reviews' },
]

const HERO_STATS = [
  { num: '50+',   label: 'Species Guides' },
  { num: 'Vet',   label: 'Reviewed Health' },
  { num: 'Meter', label: 'Tested UVB Data' },
] as const

const LEVEL_COLOR: Record<string, string> = {
  Beginner:     'text-brand-success bg-green-500/10 border-green-500/20',
  Intermediate: 'text-brand-warning bg-amber-500/10 border-amber-500/20',
  Advanced:     'text-brand-danger bg-red-500/10 border-red-500/20',
}

export default function LizardHomePage() {
  return (
    <>
      {/* HERO — image-grid above text on mobile, side-by-side on lg+ */}
      <section
        className="relative overflow-hidden grid lg:grid-cols-2 lg:min-h-[90vh]"
        style={{ background: 'linear-gradient(135deg, #0D1A0D 0%, #080C08 100%)' }}
      >
        {/* Species image grid — 2x2 on lg+, 2-wide single row on mobile */}
        <div className="relative order-1 lg:order-2 grid grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-2 p-2 lg:p-3 aspect-square sm:aspect-[16/9] lg:aspect-auto">
          {FEATURED_SPECIES.slice(0, 4).map((s) => (
            <div key={s.name} className="relative overflow-hidden rounded-md bg-brand-surface" style={{ opacity: 0.92 }}>
              <Image
                src={s.image} alt={s.imageAlt} fill
                className="object-cover transition-transform duration-700 ease-carloOS hover:scale-[1.05]"
                sizes="(max-width: 1024px) 50vw, 25vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-display font-bold text-white text-sm leading-tight">{s.name}</div>
                <div className="text-2xs italic mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.type}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="relative order-2 lg:order-1 flex flex-col justify-center px-container-sm sm:px-container py-14 lg:py-20">
          <div
            className="absolute inset-0 opacity-90 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(ellipse at 15% 60%, rgba(122,181,42,0.16) 0%, transparent 55%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Source-First Reptile Care</span>
            </div>
            <h1
              className="font-display font-bold text-brand-white leading-[1.05] tracking-tight mb-5 lg:mb-6"
              style={{ fontSize: 'clamp(38px, 6vw, 80px)' }}
            >
              Reptile Care.<br />
              <span className="text-brand-primary">Done Right.</span>
            </h1>
            <p
              className="text-base lg:text-lg font-light leading-relaxed max-w-md mb-8 lg:mb-10"
              style={{ color: 'rgba(238,240,228,0.7)' }}
            >
              Care guides grounded in current research. UVB lighting explained with actual measurements. Feeding guides with prey size charts. Species profiles with sourced health information.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/species"
                className="inline-flex items-center bg-brand-primary text-brand-dark font-bold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
                Browse Species<span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link href="/setup/uvb-lighting-guide"
                className="group inline-flex items-center text-sm font-semibold text-brand-white no-underline hover:text-brand-primary-light transition-colors">
                UVB Lighting Guide
                <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
            <div className="flex gap-8 mt-10 lg:mt-12 pt-7 lg:pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-xl lg:text-2xl font-bold text-brand-white tabular-display">{stat.num}</div>
                  <div className="text-2xs font-semibold uppercase tracking-eyebrow mt-1.5" style={{ color: 'rgba(238,240,228,0.6)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR — already dark; refine to slim band with vertical separators */}
      <div
        className="relative z-10 px-container-sm sm:px-container py-3"
        style={{ background: '#0A1408', borderTop: '1px solid rgba(122,181,42,0.20)' }}
      >
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2"
          style={{ color: 'rgba(238,240,228,0.75)' }}
        >
          {['Source-first husbandry', '50+ species profiles', 'Honest equipment reviews', 'No paid editorial placements'].map((item, i, arr) => (
            <span
              key={item}
              className="flex items-center text-2xs font-semibold uppercase tracking-eyebrow whitespace-nowrap"
            >
              {item}
              {i < arr.length - 1 && (
                <span aria-hidden="true" className="hidden sm:inline mx-5 h-3 w-px" style={{ background: 'rgba(122,181,42,0.25)' }} />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURED SPECIES */}
      <section
        className="relative z-10 px-container-sm sm:px-container py-section"
        style={{ background: '#0D1A0D', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Species Library</span>
              </div>
              <h2 className="font-display font-bold text-brand-white tracking-tight text-3xl sm:text-4xl">Popular Species</h2>
            </div>
            <Link href="/species" className="text-sm font-semibold text-brand-primary no-underline hover:text-brand-primary-light transition-colors">
              All 50+ species →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {FEATURED_SPECIES.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group block rounded-md overflow-hidden no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                  <Image
                    src={s.image} alt={s.imageAlt} fill
                    className="object-cover transition-transform duration-500 ease-carloOS group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
                </div>
                <div className="p-3">
                  <div className="font-display font-bold text-brand-white text-sm mb-0.5 leading-tight">{s.name}</div>
                  <div className="text-2xs italic mb-2" style={{ color: 'rgba(238,240,228,0.45)' }}>{s.type}</div>
                  <span className={`text-2xs font-bold px-2 py-0.5 rounded-pill border ${LEVEL_COLOR[s.level]}`}>{s.level}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT CATEGORIES — dark band with SVG line icons */}
      <section
        className="relative z-10 px-container-sm sm:px-container py-section"
        style={{ background: '#080C08', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Resource Library</span>
          </div>
          <h2 className="font-display font-bold text-brand-white tracking-tight text-3xl sm:text-4xl mb-3">Everything You Need</h2>
          <p
            className="text-base max-w-lg mb-10 leading-relaxed"
            style={{ color: 'rgba(238,240,228,0.65)' }}
          >
            Science-grounded guides covering every aspect of reptile husbandry.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT_CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block rounded-md p-6 no-underline transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/30"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="text-brand-primary/90 group-hover:text-brand-primary mb-4 transition-colors">
                  <Icon name={c.icon} />
                </div>
                <div className="font-display font-bold text-brand-white text-base mb-1.5 leading-snug">{c.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'rgba(238,240,228,0.55)' }}>{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section
        className="relative z-10 px-container-sm sm:px-container py-section"
        style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.12)' }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display font-bold text-brand-white text-3xl sm:text-4xl tracking-tight mb-3">Free Reptile Care Newsletter</h2>
          <p className="text-base mb-7 leading-relaxed" style={{ color: 'rgba(238,240,228,0.65)' }}>
            Species spotlights, UVB research updates, and keeper tips — every other week.
          </p>
          <EmailCapture variant="inline" siteId="lizard-com" ctaText="Subscribe Free" source="homepage" />
          <p className="text-xs mt-4" style={{ color: 'rgba(238,240,228,0.4)' }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
