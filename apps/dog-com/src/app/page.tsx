/**
 * Dog.com Homepage — /
 * Server component. Fetches featured posts from Supabase.
 * Uses shared CarloOS components for all UI.
 */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'
import { getPosts } from '@carloOS/db'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'A Reference for Dog Owners',
  description:
    'Dog health guides for 200+ breeds, research-based health articles, honest product reviews, and expert training advice — built for dog owners who take…',
  path: '/',
  type: 'website',
  ogImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop',
})

// ── Static breed data (will move to Supabase species table) ──────────────────

const FEATURED_BREEDS = [
  {
    name: 'Golden Retriever',
    type: 'Sporting Group · Large',
    tags: ['Family', 'Trainable', 'Active'],
    href: '/breeds/golden-retriever',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Golden Retriever dog',
  },
  {
    name: 'Labrador Retriever',
    type: 'Sporting Group · Large',
    tags: ['Family', 'Gentle', 'Water'],
    href: '/breeds/labrador-retriever',
    image: 'https://images.unsplash.com/photo-1579213838058-2aeeda8d6e2d?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Labrador Retriever dog',
  },
  {
    name: 'French Bulldog',
    type: 'Non-Sporting · Small',
    tags: ['Apartment', 'Low exercise'],
    href: '/breeds/french-bulldog',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'French Bulldog dog',
  },
  {
    name: 'German Shepherd',
    type: 'Herding Group · Large',
    tags: ['Intelligent', 'Loyal', 'Active'],
    href: '/breeds/german-shepherd',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'German Shepherd dog',
  },
]

// Stats shown in the hero — same numbers render twice (desktop floating
// cards / mobile inline strip) so the data lives in one place.
const HERO_STATS = [
  { num: '30',  label: 'Breed Guides' },
  { num: '70+', label: 'Sourced Articles' },
  { num: '16',  label: 'Product Reviews' },
] as const

// ── Inline SVG icon set — single visual voice for category cards ────────────
// 1.5px stroke geometric line icons sized to a 24x24 viewBox. Kept inline so
// the page stays a server component and ships zero icon-library JS.

type IconName =
  | 'symptoms' | 'nutrition' | 'preventive' | 'senior'
  | 'breed' | 'dental' | 'weight' | 'behavior' | 'paw'

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'symptoms':
      return (
        <svg {...common}>
          <path d="M3 12h3l2-5 4 10 2-5h3" />
          <circle cx="20" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'nutrition':
      return (
        <svg {...common}>
          <path d="M3 11h18" />
          <path d="M4 11a8 8 0 0 0 16 0" />
          <path d="M2 11h20" />
          <path d="M9 7c0-1 .5-2 1.5-2.5M13 7c0-1 .5-2 1.5-2.5" />
        </svg>
      )
    case 'preventive':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'senior':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'breed':
      return (
        <svg {...common}>
          <path d="M7 3c0 4 10 4 10 10s-10 6-10 10" />
          <path d="M17 3c0 4-10 4-10 10s10 6 10 10" />
          <path d="M8.5 7h7M8.5 17h7M7.7 10.5h8.6M7.7 13.5h8.6" />
        </svg>
      )
    case 'dental':
      return (
        <svg {...common}>
          <path d="M7 3c-2 0-3 1.5-3 4 0 2 1 4 1.5 7 .4 2.5 1 6 2.5 6s1.5-3 2-5 .5-3 2-3 1.5 1 2 3 .5 5 2 5 2.1-3.5 2.5-6c.5-3 1.5-5 1.5-7 0-2.5-1-4-3-4-1.5 0-2.5 1-4 1s-2.5-1-4-1z" />
        </svg>
      )
    case 'weight':
      return (
        <svg {...common}>
          <path d="M12 4v16" />
          <path d="M4 20h16" />
          <path d="M7 9l-3 6h6l-3-6zM17 9l-3 6h6l-3-6z" />
          <path d="M5 7l14-2" />
        </svg>
      )
    case 'behavior':
      return (
        <svg {...common}>
          <path d="M9 4c-2 0-3 1.5-3 3 0 .5.1 1 .3 1.4C5 9 4 10.3 4 12c0 1.5.8 2.7 2 3.4-.1 2.3 1.6 4.1 3.5 4.1 1 0 1.8-.4 2.5-1V4.5C11.3 4.2 10.7 4 9 4z" />
          <path d="M15 4c2 0 3 1.5 3 3 0 .5-.1 1-.3 1.4C19 9 20 10.3 20 12c0 1.5-.8 2.7-2 3.4.1 2.3-1.6 4.1-3.5 4.1-1 0-1.8-.4-2.5-1V4.5c.7-.3 1.3-.5 3-.5z" />
          <path d="M12 8v8" />
        </svg>
      )
    case 'paw':
      return (
        <svg {...common} width="22" height="22">
          <ellipse cx="5.5" cy="10" rx="1.6" ry="2.2" />
          <ellipse cx="9" cy="6.5" rx="1.6" ry="2.2" />
          <ellipse cx="15" cy="6.5" rx="1.6" ry="2.2" />
          <ellipse cx="18.5" cy="10" rx="1.6" ry="2.2" />
          <path d="M8 17.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.4-1 2.5-2.4 2.5h-3.2C9 20 8 18.9 8 17.5z" />
        </svg>
      )
  }
}

const HEALTH_CATEGORIES: { icon: IconName; title: string; desc: string; href: string }[] = [
  { icon: 'symptoms',   title: 'Symptoms & Signs',   desc: 'When to worry, when to wait',    href: '/health/dog-symptoms-guide' },
  { icon: 'nutrition',  title: 'Nutrition & Diet',   desc: 'Food guides and what to avoid',  href: '/nutrition' },
  { icon: 'preventive', title: 'Preventive Care',    desc: 'Vaccines, parasites, screening', href: '/health/dog-vaccinations' },
  { icon: 'senior',     title: 'Senior Dog Care',    desc: 'What changes after age 7',       href: '/health/senior-dog-care' },
  { icon: 'breed',      title: 'Breed Conditions',   desc: 'Health risks by breed',          href: '/breeds' },
  { icon: 'dental',     title: 'Dental Health',      desc: 'The most overlooked issue',      href: '/health/dog-dental-care' },
  { icon: 'weight',     title: 'Weight & Obesity',   desc: 'Assessment and management',      href: '/nutrition/weight-management' },
  { icon: 'behavior',   title: 'Behavior & Anxiety', desc: 'Separation anxiety and fear',    href: '/health/dog-anxiety' },
]

// ─────────────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  // Fetch recent health articles from Supabase
  // Falls back gracefully if DB not yet connected
  let healthPosts: Awaited<ReturnType<typeof getPosts>> = []
  try {
    healthPosts = await getPosts('dog-com', 'article', 4)
  } catch {
    // DB not connected yet — static content shows
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-brand-dark relative overflow-hidden grid lg:grid-cols-2 lg:min-h-[88vh]">
        {/* Image — visible on every viewport. Order flipped so mobile sees
            the photograph first (editorial cover treatment), desktop reads
            text-first on the left. */}
        <div className="relative order-1 lg:order-2 aspect-[5/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full bg-brand-surface">
          <Image
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=85&auto=format&fit=crop"
            alt="Golden retriever resting in warm afternoon light"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent 35%, #1A0E08 100%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: 'linear-gradient(to right, #1A0E08 0%, rgba(26,14,8,0) 22%)' }}
            aria-hidden="true"
          />

          {/* Stats — desktop only; floating cards. Mobile gets an inline
              version below the CTAs to avoid covering the image. */}
          <div className="hidden lg:flex absolute bottom-10 right-8 z-10 flex-col gap-2.5">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/95 backdrop-blur-sm rounded-md px-5 py-3 shadow-card min-w-[180px] border-l-2 border-brand-primary"
              >
                <div className="font-display font-black text-brand-dark text-3xl leading-none tabular-display">
                  {stat.num}
                </div>
                <div className="text-2xs text-brand-text-light font-semibold uppercase tracking-eyebrow mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text column */}
        <div className="relative order-2 lg:order-1 flex flex-col justify-center px-container-sm sm:px-container py-14 lg:py-20">
          <div
            className="absolute inset-0 opacity-90 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 15% 50%, rgba(232,98,42,0.10) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5 lg:mb-6">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                A Dog Owner Reference
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black text-white tracking-tighter leading-[0.95] mb-5 lg:mb-7"
              style={{ fontSize: 'clamp(42px, 7vw, 88px)' }}
            >
              Everything<br />
              Your Dog<br />
              <em className="text-brand-primary not-italic">Deserves.</em>
            </h1>

            <p className="text-base lg:text-lg font-light text-white/65 leading-relaxed max-w-md mb-8 lg:mb-10">
              Dog.com is a research-based reference library for dog owners covering
              200+ breed profiles, vaccination schedules, training methods grounded in
              positive-reinforcement science, nutrition guidance aligned with WSAVA and
              AAFCO standards, and independent product reviews. Every article cites
              veterinary sources and is reviewed against current evidence — built for
              owners who want defensible answers about their dog&apos;s health, behavior, and care.
            </p>

            {/* CTAs — primary solid, secondary as text-arrow link to keep
                hierarchy unambiguous. */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href="/breeds"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200"
              >
                Browse Breed Guide
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/health"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
              >
                Dog Health Library
                <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            {/* Mobile stats strip — three-up inline, only renders <lg. */}
            <div className="lg:hidden flex items-center gap-6 mt-10 pt-7 border-t border-white/10">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-black text-white text-2xl leading-none tabular-display">
                    {stat.num}
                  </div>
                  <div className="text-2xs text-white/55 font-semibold uppercase tracking-eyebrow mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────── */}
      <div className="bg-brand-dark border-b border-white/5 px-container-sm sm:px-container py-3">
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2 text-white/70">
          {[
            'Research-based health content',
            '200+ breed profiles',
            'Honest product reviews',
            'No paid editorial placements',
          ].map((item, i, arr) => (
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

      {/* ── PUPPY SCHEDULE LEAD-MAGNET BANNER ──────────────────────── */}
      <Link
        href="/puppy-schedule"
        className="block bg-[#22150F] border-b border-white/5 px-container-sm sm:px-container py-4 hover:bg-[#291812] transition-colors duration-200 no-underline"
      >
        <div className="mx-auto max-w-container-wide flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4 min-w-0">
            <span className="text-brand-primary shrink-0" aria-hidden="true">
              <Icon name="paw" />
            </span>
            <div className="min-w-0">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">Free for puppy owners</div>
              <div className="text-sm sm:text-base text-white font-semibold leading-snug">
                Puppy Schedule, Weeks 8 to 16 — printable + 8-week email course
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold text-brand-primary ml-auto sm:ml-0 whitespace-nowrap">
            Get the schedule →
          </span>
        </div>
      </Link>

      {/* ── BREED DIRECTORY ────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-section">
        <div className="flex items-end justify-between mb-9">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Breed Encyclopedia
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">
              Find Your Breed
            </h2>
          </div>
          <Link href="/breeds" className="text-sm font-bold text-brand-primary no-underline hover:underline">
            All 200+ breeds →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_BREEDS.map((breed) => (
            <Link
              key={breed.name}
              href={breed.href}
              className="block bg-brand-white border border-brand-border rounded-lg overflow-hidden no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={breed.image}
                  alt={breed.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="font-display font-bold text-brand-dark text-base mb-1">
                  {breed.name}
                </div>
                <div className="text-xs text-brand-text-light mb-2.5">{breed.type}</div>
                <div className="flex gap-1.5 flex-wrap">
                  {breed.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-2xs font-semibold px-2 py-0.5 bg-brand-surface text-brand-text-mid rounded-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HEALTH ARTICLES ────────────────────────────────────────── */}
      <section className="bg-brand-white px-container sm:px-container-sm py-section">
        <div className="flex items-end justify-between mb-9">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Dog Health Library
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">
              Expert Health Guides
            </h2>
          </div>
          <Link href="/health" className="text-sm font-bold text-brand-primary no-underline hover:underline">
            All health guides →
          </Link>
        </div>

        {/* Static featured articles — will pull from Supabase once DB is seeded */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-5">
          {/* Featured */}
          <Link
            href="/health/golden-retriever-health"
            className="block border border-brand-border rounded-lg overflow-hidden no-underline hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=700&q=80&auto=format&fit=crop"
                alt="Veterinarian examining dog"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Breed Health</span>
                
              </div>
              <h3 className="font-display font-bold text-brand-dark text-xl leading-snug mb-2">
                Golden Retriever Health Guide — Cancer Risk, Hip Dysplasia & What Owners Must Know
              </h3>
              <p className="text-sm text-brand-text-light line-clamp-2">
                More than 60% of Golden Retrievers develop cancer in their lifetime. Understanding the risks can add years to your dog&apos;s life.
              </p>
            </div>
          </Link>

          {/* Secondary articles */}
          {[
            {
              href: '/health/dog-symptoms-guide',
              category: 'Emergency',
              title: '15 Dog Symptoms You Should Never Ignore',
              image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&q=80&auto=format&fit=crop',
            },
            {
              href: '/health/senior-dog-care',
              category: 'Senior Care',
              title: 'Senior Dog Care — What Changes at 7 Years',
              image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=500&q=80&auto=format&fit=crop',
            },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="block border border-brand-border rounded-lg overflow-hidden no-underline hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {article.category}
                </div>
                <h3 className="font-display font-bold text-brand-dark text-base leading-snug">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HEALTH CATEGORIES ──────────────────────────────────────── */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(232,98,42,0.3) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Health by Topic
            </span>
          </div>
          <h2 className="font-display font-bold text-white tracking-tight text-3xl mb-2">
            Find the Right Guide
          </h2>
          <p className="text-base text-white/45 max-w-lg mb-10">
            research-based content organized by condition, life stage, and body system.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {HEALTH_CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block bg-white/[0.04] border border-white/[0.08] rounded-md p-6 no-underline hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-brand-primary/85 group-hover:text-brand-primary mb-4 transition-colors">
                  <Icon name={cat.icon} />
                </div>
                <div className="font-display font-bold text-white text-base leading-snug mb-1.5">{cat.title}</div>
                <div className="text-xs text-white/55 leading-relaxed">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL POSITIONING BAND ─────────────────────────────── */}
      {/* Quiet typographic moment between the dark category band and the
          email capture. Pattern per ops/handoffs/2026-05-29-stitch-briefs-
          per-site.md §1 prompt 3. Wording is editorial-position framing,
          not a fabricated trust claim (QC-STANDARDS §1 compliant). */}
      <section className="bg-brand-surface border-y border-brand-border px-container-sm sm:px-container py-section">
        <div className="mx-auto max-w-3xl text-center">
          <span className="block w-16 h-px bg-brand-primary/60 mx-auto mb-8" aria-hidden="true" />
          <p
            className="font-display italic text-brand-text-dark leading-snug"
            style={{ fontSize: 'clamp(24px, 3.2vw, 38px)' }}
          >
            We don&apos;t sell dogs and we don&apos;t sell food.
            We explain what&apos;s worth your money.
          </p>
          <Link
            href="/editorial-standards"
            className="inline-block mt-8 text-sm font-semibold text-brand-primary no-underline border-b border-brand-primary/30 hover:border-brand-primary transition-colors"
          >
            Read our editorial standards
          </Link>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ──────────────────────────────────────────── */}
      <section className="bg-brand-primary-pale px-container sm:px-container-sm py-section">
        <EmailCapture
          variant="section"
          siteId="dog-com"
          title="Dog Health Tips, Every Week"
          subtitle="Practical guidance on dog health, breed spotlights, training tips, and honest product picks — every Tuesday morning."
          ctaText="Subscribe Free"
          source="homepage-section"
          perks={['Practical', 'Every Tuesday', 'Breed-specific advice', 'No spam']}
        />
      </section>

      {/* ── PHOTO ATTRIBUTION — Unsplash credit strip ──────────────── */}
      <aside
        className="bg-brand-dark px-container sm:px-container-sm py-6"
        aria-label="Photo credits"
      >
        <p className="text-2xs uppercase tracking-eyebrow text-white/55">
          Hero, breed, and health-article photography: contributors on{' '}
          <a
            href="https://unsplash.com"
            rel="noopener noreferrer"
            target="_blank"
            className="underline text-white/80"
          >
            Unsplash
          </a>
          . Used under the Unsplash License. Breed photos will migrate to
          Wikimedia Commons references where taxonomic accuracy matters.
        </p>
      </aside>
    </>
  )
}
