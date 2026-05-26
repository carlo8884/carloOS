import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Care, Science-First',
  description: 'Science-based reptile care guides. Species profiles, UVB setup, enclosures, feeding, and health — written by experienced keepers.',
  path: '/',
})

const FEATURED_SPECIES = [
  { name: 'Bearded Dragon', type: 'Pogona vitticeps', level: 'Beginner', href: '/species/bearded-dragon', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&q=80&auto=format&fit=crop', imageAlt: 'Bearded dragon' },
  { name: 'Leopard Gecko', type: 'Eublepharis macularius', level: 'Beginner', href: '/species/leopard-gecko', image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=400&q=80&auto=format&fit=crop', imageAlt: 'Leopard gecko' },
  { name: 'Ball Python', type: 'Python regius', level: 'Beginner', href: '/species/ball-python', image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=400&q=80&auto=format&fit=crop', imageAlt: 'Ball python' },
  { name: 'Blue-Tongue Skink', type: 'Tiliqua spp.', level: 'Intermediate', href: '/species/blue-tongue-skink', image: 'https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?w=400&q=80&auto=format&fit=crop', imageAlt: 'Blue-tongue skink' },
  { name: 'Crested Gecko', type: 'Correlophus ciliatus', level: 'Beginner', href: '/species/crested-gecko', image: 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=400&q=80&auto=format&fit=crop', imageAlt: 'Crested gecko' },
  { name: 'Corn Snake', type: 'Pantherophis guttatus', level: 'Beginner', href: '/species/corn-snake', image: 'https://images.unsplash.com/photo-1567612529009-afe25813a308?w=400&q=80&auto=format&fit=crop', imageAlt: 'Corn snake' },
]

const CONTENT_CATEGORIES = [
  { icon: '🦎', title: 'Species Guides', desc: 'Complete care for 50+ species', href: '/species' },
  { icon: '☀️', title: 'UVB Lighting', desc: 'Ferguson zones, T5 HO specs, meter testing', href: '/setup/uvb-lighting-guide' },
  { icon: '🌡️', title: 'Temperatures', desc: 'Gradient setup by species', href: '/setup' },
  { icon: '🍽️', title: 'Feeding Guide', desc: 'Prey size, frequency, gut-loading', href: '/health/reptile-feeding-guide' },
  { icon: '🏥', title: 'Reptile Health', desc: 'Sick reptile signs and treatment', href: '/health' },
  { icon: '⚙️', title: 'Equipment', desc: 'Enclosures, thermostats, tested gear', href: '/reviews' },
]

const LEVEL_COLOR: Record<string, string> = {
  Beginner: 'text-brand-success bg-green-500/10 border-green-500/20',
  Intermediate: 'text-brand-warning bg-amber-500/10 border-amber-500/20',
  Advanced: 'text-brand-danger bg-red-500/10 border-red-500/20',
}

export default function LizardHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] grid lg:grid-cols-2 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1A0D 0%, #080C08 100%)' }}>
        {/* Content */}
        <div className="flex flex-col justify-center px-container sm:px-container-sm py-20 relative z-10">
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: 'radial-gradient(ellipse at 15% 60%, rgba(122,181,42,0.25) 0%, transparent 55%)' }}
            aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Science-Based Reptile Care</span>
            </div>
            <h1 className="font-display font-bold text-brand-white leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}>
              Reptile Care.<br />
              <span className="text-brand-primary">Done Right.</span>
            </h1>
            <p className="text-lg font-light leading-relaxed max-w-md mb-10"
              style={{ color: 'rgba(238,240,228,0.55)' }}>
              Care guides grounded in current research. UVB lighting explained with actual measurements. Feeding guides with prey size charts. Species profiles with vet-reviewed health sections.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/species"
                className="inline-flex items-center bg-brand-primary text-brand-dark font-bold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
                Browse Species →
              </Link>
              <Link href="/setup/uvb-lighting-guide"
                className="inline-flex items-center border text-brand-white font-medium text-sm px-7 py-3.5 rounded no-underline hover:text-brand-primary-light transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                UVB Lighting Guide
              </Link>
            </div>
            <div className="flex gap-8 mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[['50+', 'Species Guides'], ['Vet', 'Reviewed Health'], ['Meter', 'Tested UVB Data']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-xl font-bold text-brand-white">{n}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(238,240,228,0.35)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image grid */}
        <div className="relative hidden lg:grid grid-cols-2 grid-rows-2 gap-2 p-2">
          {FEATURED_SPECIES.slice(0, 4).map((s, i) => (
            <div key={s.name} className="relative overflow-hidden rounded-lg" style={{ opacity: 0.85 }}>
              <Image src={s.image} alt={s.imageAlt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <div className="font-display font-bold text-white text-sm">{s.name}</div>
                <div className="text-2xs italic" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SPECIES */}
      <section className="relative z-10 px-container sm:px-container-sm py-section" style={{ background: '#0D1A0D', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-end justify-between mb-9">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Species Library</span>
            </div>
            <h2 className="font-display font-bold text-brand-white tracking-tight text-3xl">Popular Species</h2>
          </div>
          <Link href="/species" className="text-sm font-semibold text-brand-primary no-underline hover:underline">All 50+ species →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {FEATURED_SPECIES.map((s) => (
            <Link key={s.name} href={s.href}
              className="block rounded-lg overflow-hidden no-underline group"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="relative h-36 overflow-hidden">
                <Image src={s.image} alt={s.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 16vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-3">
                <div className="font-display font-bold text-brand-white text-sm mb-0.5 leading-tight">{s.name}</div>
                <div className="text-2xs italic mb-2" style={{ color: 'rgba(238,240,228,0.4)' }}>{s.type}</div>
                <span className={`text-2xs font-bold px-2 py-0.5 rounded-pill border ${LEVEL_COLOR[s.level]}`}>{s.level}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTENT CATEGORIES */}
      <section className="relative z-10 px-container sm:px-container-sm py-section" style={{ background: '#080C08', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Resource Library</span>
        </div>
        <h2 className="font-display font-bold text-brand-white tracking-tight text-3xl mb-2">Everything You Need</h2>
        <p className="text-base max-w-lg mb-10" style={{ color: 'rgba(238,240,228,0.4)' }}>
          Science-grounded guides covering every aspect of reptile husbandry.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTENT_CATEGORIES.map((c) => (
            <Link key={c.href} href={c.href}
              className="block rounded-lg p-6 no-underline transition-all duration-200 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(122,181,42,0.07)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(122,181,42,0.2)' }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)' }}>
              <span className="text-2xl mb-3 block">{c.icon}</span>
              <div className="font-display font-bold text-brand-white text-sm mb-1.5">{c.title}</div>
              <div className="text-xs" style={{ color: 'rgba(238,240,228,0.4)' }}>{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* EMAIL */}
      <section className="relative z-10 px-container sm:px-container-sm py-section" style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.1)' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display font-bold text-brand-white text-3xl tracking-tight mb-3">Free Reptile Care Newsletter</h2>
          <p className="text-base mb-7" style={{ color: 'rgba(238,240,228,0.45)' }}>
            Species spotlights, UVB research updates, and keeper tips — every other week.
          </p>
          <EmailCapture variant="inline" siteId="lizard-com" ctaText="Subscribe Free" source="homepage" />
          <p className="text-xs mt-3" style={{ color: 'rgba(238,240,228,0.25)' }}>🔒 No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
