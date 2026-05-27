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
  {
    name: 'Betta Fish',
    type: 'Freshwater · Labyrinth',
    tags: ['Beginner', 'Solo', 'Colorful'],
    href: '/species/betta-fish',
    image: 'https://images.unsplash.com/photo-1583377993497-f2f1b2b13c54?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Betta fish',
  },
  {
    name: 'Neon Tetra',
    type: 'Freshwater · Characin',
    tags: ['Community', 'Schooling', 'Hardy'],
    href: '/species/neon-tetra',
    image: 'https://images.unsplash.com/photo-1520302630591-fd1cb63aa58e?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Neon tetra fish',
  },
  {
    name: 'Clownfish',
    type: 'Saltwater · Reef',
    tags: ['Reef Safe', 'Hardy', 'Iconic'],
    href: '/species/clownfish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Clownfish in anemone',
  },
  {
    name: 'Goldfish',
    type: 'Freshwater · Cyprinid',
    tags: ['Beginner', 'Coldwater', 'Long-lived'],
    href: '/species/goldfish',
    image: 'https://images.unsplash.com/photo-1524704654690-b56af7d6b9f1?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Goldfish',
  },
]

const GUIDE_CATEGORIES = [
  { icon: '🧪', title: 'Water Chemistry', desc: 'pH, ammonia, nitrites, cycling', href: '/water' },
  { icon: '🐠', title: 'Species Guides', desc: 'Freshwater and marine profiles', href: '/species' },
  { icon: '🏠', title: 'Tank Setup', desc: 'Size, filtration, substrate', href: '/setup' },
  { icon: '🌿', title: 'Planted Tanks', desc: 'Live plants, CO2, lighting', href: '/setup/planted-tank-setup' },
  { icon: '🪸', title: 'Reef & Saltwater', desc: 'Marine systems and corals', href: '/setup/saltwater-tank-setup' },
  { icon: '🏥', title: 'Fish Health', desc: 'Disease ID and treatment', href: '/health' },
  { icon: '⚙️', title: 'Equipment Reviews', desc: 'Filters, lights, heaters', href: '/reviews' },
]

export default function FishHomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="min-h-[92vh] grid lg:grid-cols-[1fr_1.1fr] bg-brand-dark overflow-hidden">
        <div className="flex flex-col justify-center px-container sm:px-container-sm py-20 relative z-10">
          {/* Underwater texture overlay */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 15% 60%, rgba(14,107,138,0.2) 0%, transparent 50%),
                radial-gradient(ellipse at 85% 30%, rgba(14,107,138,0.08) 0%, transparent 40%)
              `,
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                The Complete Aquarium Resource
              </span>
            </div>

            <h1
              className="font-display text-white leading-none tracking-tighter mb-6"
              style={{ fontSize: 'clamp(52px, 7vw, 90px)', fontWeight: 400, fontStyle: 'italic' }}
            >
              Fishkeeping,<br />
              <span className="not-italic font-bold">Done Right.</span>
            </h1>

            <p className="text-lg font-light text-white/55 leading-relaxed max-w-md mb-10">
              Species guides for freshwater and marine fish, water chemistry explained, honest equipment reviews,
              and fish health content written with aquarists who know what they&apos;re talking about.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/species"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
                Browse Species →
              </Link>
              <Link href="/setup"
                className="inline-flex items-center border border-white/20 text-white/80 font-medium text-sm px-7 py-3.5 rounded no-underline hover:border-white/40 hover:text-white transition-colors">
                Tank Setup Guide
              </Link>
            </div>

            {/* Trust stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { num: '35+', label: 'Species Profiles' },
                { num: 'Expert', label: 'Reviewed Content' },
                { num: '30+', label: 'Equipment Reviews' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-white">{stat.num}</div>
                  <div className="text-xs text-white/35 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative hidden lg:block overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=1000&q=80&auto=format&fit=crop"
            alt="Tropical aquarium with colorful fish"
            fill
            className="object-cover object-center"
            priority
            sizes="55vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #050E14 0%, rgba(5,14,20,0.3) 20%, transparent 50%), linear-gradient(to top, rgba(5,14,20,0.5) 0%, transparent 40%)',
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────── */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container sm:px-container-sm py-3.5 flex flex-wrap gap-x-6 gap-y-2 items-center">
        {[
          '✓ Research-based content',
          '✓ 35+ species profiles',
          '✓ Honest equipment reviews',
          '✓ No paid editorial placements',
        ].map((item) => (
          <span key={item} className="text-xs font-semibold text-brand-primary">
            {item}
          </span>
        ))}
      </div>

      {/* ── FEATURED SPECIES ───────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-section">
        <div className="flex items-end justify-between mb-9">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Species Library</span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">Popular Species</h2>
          </div>
          <Link href="/species" className="text-sm font-semibold text-brand-primary no-underline hover:underline">
            Browse all species →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_SPECIES.map((species) => (
            <Link
              key={species.name}
              href={species.href}
              className="block bg-brand-white border border-brand-border rounded-lg overflow-hidden no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative h-44 overflow-hidden">
                <Image src={species.image} alt={species.imageAlt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
              </div>
              <div className="p-4">
                <div className="font-display font-semibold text-brand-dark text-base mb-1">{species.name}</div>
                <div className="text-xs text-brand-text-light mb-2.5">{species.type}</div>
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
      </section>

      {/* ── GUIDE CATEGORIES ───────────────────────────────────────── */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(14,107,138,0.4) 0%, transparent 60%)' }}
          aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Complete Library</span>
          </div>
          <h2 className="font-display font-bold text-white tracking-tight text-3xl mb-2">Everything You Need</h2>
          <p className="text-base text-white/40 max-w-lg mb-10">Reference content across every aspect of fishkeeping.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GUIDE_CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href}
                className="block bg-white/5 border border-white/8 rounded-lg p-6 text-center no-underline hover:bg-brand-primary/10 hover:border-brand-primary/25 hover:-translate-y-1 transition-all duration-200">
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <div className="font-display font-semibold text-white text-sm mb-1.5">{cat.title}</div>
                <div className="text-xs text-white/40">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ──────────────────────────────────────────── */}
      <section className="bg-brand-primary-pale px-container sm:px-container-sm py-section">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Species spotlights, water chemistry tips, equipment picks, and fishkeeping advice — every Thursday."
          ctaText="Subscribe Free"
          source="homepage-section"
          perks={['🐠 Species spotlights', '🧪 Water chemistry tips', '⚙️ Equipment picks', '🚫 No spam']}
        />
      </section>
    </>
  )
}
