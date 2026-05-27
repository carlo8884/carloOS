/**
 * Fish.com Homepage — /
 * Premium aquarium resource. Ocean editorial aesthetic.
 * Server component — pulls featured content from Supabase once seeded.
 */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'An Aquarium Reference',
  description: 'Species guides, tank setup, water chemistry, fish health, and honest equipment reviews — built for serious fishkeepers.',
  path: '/',
})

const FEATURED_SPECIES = [
  { name: 'Betta Fish',  type: 'Freshwater · Labyrinth', tags: ['Beginner', 'Solo', 'Colorful'],          href: '/species/betta-fish', image: 'https://images.unsplash.com/photo-1583377993497-f2f1b2b13c54?w=600&q=85&auto=format&fit=crop', imageAlt: 'Betta fish' },
  { name: 'Neon Tetra',  type: 'Freshwater · Characin',  tags: ['Community', 'Schooling', 'Hardy'],       href: '/species/neon-tetra', image: 'https://images.unsplash.com/photo-1520302630591-fd1cb63aa58e?w=600&q=85&auto=format&fit=crop', imageAlt: 'Neon tetra fish' },
  { name: 'Clownfish',   type: 'Saltwater · Reef',        tags: ['Reef Safe', 'Hardy', 'Iconic'],          href: '/species/clownfish',  image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&q=85&auto=format&fit=crop', imageAlt: 'Clownfish in anemone' },
  { name: 'Goldfish',    type: 'Freshwater · Cyprinid',   tags: ['Beginner', 'Coldwater', 'Long-lived'],   href: '/species/goldfish',   image: 'https://images.unsplash.com/photo-1524704654690-b56af7d6b9f1?w=600&q=85&auto=format&fit=crop', imageAlt: 'Goldfish' },
]

// ── Inline SVG icon set — aquarium-line voice ──────────────────────────────
// 1.5px stroke, 24x24 viewBox, currentColor.

type AquaIcon =
  | 'calculator' | 'chemistry' | 'fish' | 'tank' | 'plants' | 'reef' | 'health' | 'equipment'

function Icon({ name }: { name: AquaIcon }) {
  const common = {
    width: 28, height: 28, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: 1.5,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'calculator': // calculator with keypad
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <rect x="7" y="6" width="10" height="3" rx="0.5" />
          <circle cx="8" cy="13" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="12" cy="13" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="16" cy="13" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="8" cy="17" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="16" cy="17" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'chemistry':  // flask
      return (
        <svg {...common}>
          <path d="M10 3v6L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />
          <path d="M9 3h6" />
          <path d="M8 14h8" />
        </svg>
      )
    case 'fish':       // simple fish silhouette
      return (
        <svg {...common}>
          <path d="M3 12c2-4 6-6 10-6 3 0 5 1 7 3l-3 3 3 3c-2 2-4 3-7 3-4 0-8-2-10-6z" />
          <circle cx="15" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
          <path d="M3 12c-1 0-1.5-1-1.5-2M3 12c-1 0-1.5 1-1.5 2" />
        </svg>
      )
    case 'tank':       // aquarium tank with water line
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="15" rx="1" />
          <path d="M3 9c3 1 6-1 9 0s6 1 9 0" />
          <path d="M9 14c-1 0-1.5-.5-1.5-1.2 0-.8.7-1.3 1.5-1.3 1 0 2 .5 2 1.3 0 .7-1 1.2-2 1.2z" />
        </svg>
      )
    case 'plants':     // aquarium plants
      return (
        <svg {...common}>
          <path d="M7 20c0-5 1-8 3-12" />
          <path d="M12 20c0-7 1-10 2-15" />
          <path d="M17 20c0-4 1-7 2-10" />
          <path d="M3 20h18" />
        </svg>
      )
    case 'reef':       // coral / waves
      return (
        <svg {...common}>
          <path d="M3 18c2-3 4-3 6 0M9 18c2-3 4-3 6 0M15 18c2-3 4-3 6 0" />
          <path d="M6 18v-5M12 18v-7M18 18v-5" />
          <circle cx="6" cy="12" r="1.3" />
          <circle cx="12" cy="10" r="1.3" />
          <circle cx="18" cy="12" r="1.3" />
        </svg>
      )
    case 'health':     // medical cross in droplet
      return (
        <svg {...common}>
          <path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z" />
          <path d="M12 11v6M9 14h6" />
        </svg>
      )
    case 'equipment':  // gear/cog
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7L5.6 5.6" />
        </svg>
      )
  }
}

// Categories — ordering and entries from main (Calculators surfaced first
// per the /tools launch — PR #13). Icon mapping uses the inline SVG set
// above; text strings unchanged.
const GUIDE_CATEGORIES: { icon: AquaIcon; title: string; desc: string; href: string }[] = [
  { icon: 'calculator', title: 'Calculators',       desc: 'Volume, stocking, heater, CO2',   href: '/tools' },
  { icon: 'fish',       title: 'Species Guides',    desc: '200+ fish profiles',              href: '/species' },
  { icon: 'tank',       title: 'Tank Setup',        desc: 'Size, filtration, substrate',     href: '/setup' },
  { icon: 'plants',     title: 'Planted Tanks',     desc: 'Live plants, CO2, lighting',      href: '/setup/planted-tank-setup' },
  { icon: 'reef',       title: 'Reef & Saltwater',  desc: 'Marine systems and corals',       href: '/setup/saltwater-tank-setup' },
  { icon: 'health',     title: 'Fish Health',       desc: 'Disease ID and treatment',        href: '/health' },
  { icon: 'chemistry',  title: 'Water Chemistry',   desc: 'pH, ammonia, nitrites, cycling',  href: '/water' },
  { icon: 'equipment',  title: 'Equipment Reviews', desc: 'Filters, lights, heaters',        href: '/reviews' },
]

const HERO_STATS = [
  { num: '200+',   label: 'Species Profiles' },
  { num: 'Expert', label: 'Reviewed Content' },
  { num: '50+',    label: 'Equipment Reviews' },
] as const

export default function FishHomePage() {
  return (
    <>
      {/* HERO — mobile-first stack (image above text), side-by-side on lg+ */}
      <section className="bg-brand-dark overflow-hidden grid lg:grid-cols-[1fr_1.1fr] lg:min-h-[92vh]">
        {/* Image */}
        <div className="relative order-1 lg:order-2 aspect-[5/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=1400&q=85&auto=format&fit=crop"
            alt="Tropical aquarium with colorful fish"
            fill className="object-cover object-center" priority sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent 35%, #050E14 100%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: 'linear-gradient(to right, #050E14 0%, rgba(5,14,20,0.3) 18%, transparent 48%)' }}
            aria-hidden="true"
          />
        </div>

        {/* Text */}
        <div className="relative order-2 lg:order-1 flex flex-col justify-center px-container-sm sm:px-container py-14 lg:py-20">
          <div
            className="absolute inset-0 opacity-90 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 15% 60%, rgba(14,107,138,0.18) 0%, transparent 50%),
                radial-gradient(ellipse at 85% 30%, rgba(14,107,138,0.08) 0%, transparent 40%)
              `,
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2.5 mb-6 lg:mb-8">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                The Complete Aquarium Resource
              </span>
            </div>

            <h1
              className="font-display text-white leading-[1.0] tracking-tighter mb-5 lg:mb-6"
              style={{ fontSize: 'clamp(42px, 7vw, 90px)', fontWeight: 400, fontStyle: 'italic' }}
            >
              Fishkeeping,<br />
              <span className="not-italic font-bold">Done Right.</span>
            </h1>

            <p className="text-base lg:text-lg font-light text-white/65 leading-relaxed max-w-md mb-8 lg:mb-10">
              Species guides for 200+ fish, water chemistry explained, honest equipment reviews,
              and fish health content written with aquarists who know what they&apos;re talking about.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/species"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
                Browse Species<span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link href="/setup"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors">
                Tank Setup Guide
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

      {/* TRUST BAR — slim dark band, vertical separators */}
      <div className="bg-brand-dark border-b border-white/5 px-container-sm sm:px-container py-3">
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2 text-white/70">
          {['Research-based content', '200+ species profiles', 'Honest equipment reviews', 'No paid editorial placements'].map((item, i, arr) => (
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

      {/* FEATURED SPECIES */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Species Library</span>
              </div>
              <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl sm:text-4xl">Popular Species</h2>
            </div>
            <Link href="/species" className="text-sm font-semibold text-brand-primary no-underline hover:text-brand-primary-dark transition-colors">
              All 200+ species →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_SPECIES.map((species) => (
              <Link
                key={species.name}
                href={species.href}
                className="group block bg-brand-white border border-brand-border rounded-md overflow-hidden no-underline hover:border-brand-primary/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-carloOS"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                  <Image
                    src={species.image} alt={species.imageAlt} fill
                    className="object-cover transition-transform duration-500 ease-carloOS group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display font-semibold text-brand-dark text-lg mb-1 leading-snug">{species.name}</div>
                  <div className="text-xs text-brand-text-light mb-3">{species.type}</div>
                  <div className="flex gap-1.5 flex-wrap">
                    {species.tags.map((tag) => (
                      <span key={tag} className="text-2xs font-semibold px-2 py-0.5 bg-brand-surface text-brand-text-mid rounded-pill border border-brand-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDE CATEGORIES — dark band, 7 SVG line icons */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse at 75% 40%, rgba(14,107,138,0.14) 0%, transparent 55%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-container-wide">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Complete Library</span>
          </div>
          <h2 className="font-display font-bold text-white tracking-tight text-3xl sm:text-4xl mb-3">Everything You Need</h2>
          <p className="text-base text-white/65 max-w-lg mb-10 leading-relaxed">
            Reference content across every aspect of fishkeeping.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GUIDE_CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block bg-white/[0.04] border border-white/[0.08] rounded-md p-6 no-underline hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-brand-primary/85 group-hover:text-brand-primary mb-4 transition-colors">
                  <Icon name={cat.icon} />
                </div>
                <div className="font-display font-semibold text-white text-base mb-1.5 leading-snug">{cat.title}</div>
                <div className="text-xs text-white/55 leading-relaxed">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="bg-brand-primary-pale px-container-sm sm:px-container py-section">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Species spotlights, water chemistry tips, equipment picks, and fishkeeping advice — every Thursday."
          ctaText="Subscribe Free"
          source="homepage-section"
          perks={['Species spotlights', 'Water chemistry tips', 'Equipment picks', 'No spam']}
        />
      </section>
    </>
  )
}
