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

// ── Inline SVG icon set — single visual voice for category cards ────────────
// 1.5px stroke geometric line icons, sized to a 24x24 viewBox. Kept inline
// so the page stays a server component and ships zero icon-library JS.

type IconName =
  | 'symptoms' | 'nutrition' | 'preventive' | 'senior'
  | 'breed' | 'dental' | 'weight' | 'behavior'

function CategoryIcon({ name, className }: { name: IconName; className?: string }) {
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
    className,
  }
  switch (name) {
    case 'symptoms':   // pulse / heartbeat line
      return (
        <svg {...common}>
          <path d="M3 12h3l2-5 4 10 2-5h3" />
          <circle cx="20" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'nutrition':  // food bowl
      return (
        <svg {...common}>
          <path d="M3 11h18" />
          <path d="M4 11a8 8 0 0 0 16 0" />
          <path d="M2 11h20" />
          <path d="M9 7c0-1 .5-2 1.5-2.5M13 7c0-1 .5-2 1.5-2.5" />
        </svg>
      )
    case 'preventive': // shield
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'senior':     // clock / time
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'breed':      // DNA double-helix abstract
      return (
        <svg {...common}>
          <path d="M7 3c0 4 10 4 10 10s-10 6-10 10" />
          <path d="M17 3c0 4-10 4-10 10s10 6 10 10" />
          <path d="M8.5 7h7M8.5 17h7M7.7 10.5h8.6M7.7 13.5h8.6" />
        </svg>
      )
    case 'dental':     // tooth
      return (
        <svg {...common}>
          <path d="M7 3c-2 0-3 1.5-3 4 0 2 1 4 1.5 7 .4 2.5 1 6 2.5 6s1.5-3 2-5 .5-3 2-3 1.5 1 2 3 .5 5 2 5 2.1-3.5 2.5-6c.5-3 1.5-5 1.5-7 0-2.5-1-4-3-4-1.5 0-2.5 1-4 1s-2.5-1-4-1z" />
        </svg>
      )
    case 'weight':     // balance scale
      return (
        <svg {...common}>
          <path d="M12 4v16" />
          <path d="M4 20h16" />
          <path d="M7 9l-3 6h6l-3-6zM17 9l-3 6h6l-3-6z" />
          <path d="M5 7l14-2" />
        </svg>
      )
    case 'behavior':   // brain / mind abstract
      return (
        <svg {...common}>
          <path d="M9 4c-2 0-3 1.5-3 3 0 .5.1 1 .3 1.4C5 9 4 10.3 4 12c0 1.5.8 2.7 2 3.4-.1 2.3 1.6 4.1 3.5 4.1 1 0 1.8-.4 2.5-1V4.5C11.3 4.2 10.7 4 9 4z" />
          <path d="M15 4c2 0 3 1.5 3 3 0 .5-.1 1-.3 1.4C19 9 20 10.3 20 12c0 1.5-.8 2.7-2 3.4.1 2.3-1.6 4.1-3.5 4.1-1 0-1.8-.4-2.5-1V4.5c.7-.3 1.3-.5 3-.5z" />
          <path d="M12 8v8" />
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
      <section className="min-h-[90vh] grid lg:grid-cols-2 bg-brand-dark relative overflow-hidden">
        {/* Left */}
        <div className="flex flex-col justify-center px-container sm:px-container-sm py-20 relative z-10">
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(232,98,42,0.12) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                A Dog Owner Reference
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black text-white tracking-tighter leading-none mb-6"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}
            >
              Everything<br />
              Your Dog<br />
              <em className="text-brand-primary not-italic">Deserves.</em>
            </h1>

            <p className="text-lg font-light text-white/60 leading-relaxed max-w-md mb-10">
              Breed guides for 200+ breeds, research-based health articles, training that works,
              and honest product reviews — built for owners who take their dog&apos;s wellbeing seriously.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/breeds"
                className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200"
              >
                Browse Breed Guide →
              </Link>
              <Link
                href="/health"
                className="inline-flex items-center border border-white/20 text-white/80 font-medium text-sm px-7 py-3.5 rounded no-underline hover:border-white/40 hover:text-white transition-colors duration-200"
              >
                Dog Health Library
              </Link>
            </div>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=80&auto=format&fit=crop"
            alt="Happy dog enjoying outdoors"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #1A0E08 0%, transparent 15%), linear-gradient(to top, rgba(26,14,8,0.4) 0%, transparent 50%)',
            }}
            aria-hidden="true"
          />
          {/* Stats */}
          <div className="absolute bottom-10 right-8 z-10 flex flex-col gap-2.5">
            {[
              { num: '30',  label: 'Breed Guides' },
              { num: '70+', label: 'Sourced Articles' },
              { num: '16',  label: 'Product Reviews' },
            ].map((stat) => (
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
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────── */}
      <div className="bg-brand-dark border-b border-white/5 px-container sm:px-container-sm py-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-2 text-white/70">
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
        className="block bg-brand-dark border-b border-brand-border px-container sm:px-container-sm py-4 hover:bg-brand-dark/95 transition-colors duration-200 no-underline"
      >
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="text-2xl" aria-hidden="true">🐶</span>
            <div>
              <div className="text-xs font-bold tracking-eyebrow uppercase text-brand-primary mb-0.5">Free for puppy owners</div>
              <div className="text-sm sm:text-base text-white font-semibold">
                Puppy Schedule, Weeks 8 to 16 — printable + 8-week email course
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold text-brand-primary ml-auto sm:ml-0">
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
                  <CategoryIcon name={cat.icon} />
                </div>
                <div className="font-display font-bold text-white text-base leading-snug mb-1.5">{cat.title}</div>
                <div className="text-xs text-white/45 leading-relaxed">{cat.desc}</div>
              </Link>
            ))}
          </div>
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
    </>
  )
}
