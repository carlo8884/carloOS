import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Find a Vet. Read the Guidelines.',
  description: 'Find veterinary specialists, understand your pet\'s health, and compare pet insurance — grounded in AVMA, AAHA, and ACVIM material.',
  path: '/',
})

// ── Inline SVG icon set — medical-line voice for specialty cards ────────────
// 1.5px stroke, 24x24 viewBox, currentColor. Server-rendered, zero JS.

type SpecialtyIcon =
  | 'neurology' | 'orthopedics' | 'cardiology' | 'oncology'
  | 'ophthalmology' | 'dentistry' | 'internal' | 'emergency'

function Icon({ name }: { name: SpecialtyIcon }) {
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
    case 'neurology':     // brain outline
      return (
        <svg {...common}>
          <path d="M9 4c-2 0-3 1.4-3 3 0 .5.1 1 .3 1.4C5 9 4 10.3 4 12c0 1.5.8 2.7 2 3.4-.1 2.3 1.6 4.1 3.5 4.1 1 0 1.8-.4 2.5-1V4.5C11.3 4.2 10.7 4 9 4z" />
          <path d="M15 4c2 0 3 1.4 3 3 0 .5-.1 1-.3 1.4C19 9 20 10.3 20 12c0 1.5-.8 2.7-2 3.4.1 2.3-1.6 4.1-3.5 4.1-1 0-1.8-.4-2.5-1V4.5c.7-.3 1.3-.5 3-.5z" />
          <path d="M12 8v8M10 11h4M10 14h4" />
        </svg>
      )
    case 'orthopedics':   // bone
      return (
        <svg {...common}>
          <path d="M7 4.5a2.2 2.2 0 0 0-2 3.2 2.2 2.2 0 0 0 .6 3.3l5.6 5.6a2.2 2.2 0 0 0 3.3.6 2.2 2.2 0 0 0 3.2-2 2.2 2.2 0 0 0 2-3.2 2.2 2.2 0 0 0-.6-3.3l-5.6-5.6a2.2 2.2 0 0 0-3.3-.6 2.2 2.2 0 0 0-3.2 2z" />
        </svg>
      )
    case 'cardiology':    // heart with pulse
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
          <path d="M5 14h2l1.5-3 2 5 1.5-2h7" />
        </svg>
      )
    case 'oncology':      // microscope
      return (
        <svg {...common}>
          <path d="M9 4l3-1 2 4-3 1z" />
          <path d="M11 8l3 6" />
          <path d="M10 16h6" />
          <path d="M7 20h12" />
          <path d="M9 16v4" />
          <circle cx="6.5" cy="14.5" r="2.5" />
        </svg>
      )
    case 'ophthalmology': // eye with iris
      return (
        <svg {...common}>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'dentistry':     // tooth
      return (
        <svg {...common}>
          <path d="M7 3c-2 0-3 1.5-3 4 0 2 1 4 1.5 7 .4 2.5 1 6 2.5 6s1.5-3 2-5 .5-3 2-3 1.5 1 2 3 .5 5 2 5 2.1-3.5 2.5-6c.5-3 1.5-5 1.5-7 0-2.5-1-4-3-4-1.5 0-2.5 1-4 1s-2.5-1-4-1z" />
        </svg>
      )
    case 'internal':      // stethoscope
      return (
        <svg {...common}>
          <path d="M6 3v6a4 4 0 0 0 8 0V3" />
          <path d="M10 13v3a4 4 0 0 0 8 0" />
          <circle cx="18" cy="9" r="2" />
          <circle cx="6" cy="3" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="14" cy="3" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'emergency':     // medical cross in circle
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      )
  }
}

const SPECIALIST_TYPES: { icon: SpecialtyIcon; title: string; desc: string; href: string }[] = [
  { icon: 'neurology',     title: 'Neurology',                desc: 'Seizures, spinal disease, paralysis', href: '/find-a-vet' },
  { icon: 'orthopedics',   title: 'Orthopedics',              desc: 'Hip dysplasia, fractures, TPLO',      href: '/find-a-vet' },
  { icon: 'cardiology',    title: 'Cardiology',               desc: 'Heart disease, murmurs, arrhythmias', href: '/find-a-vet' },
  { icon: 'oncology',      title: 'Oncology',                 desc: 'Cancer diagnosis and treatment',      href: '/find-a-vet' },
  { icon: 'ophthalmology', title: 'Ophthalmology',            desc: 'Eye disease, cataracts, PRA',         href: '/find-a-vet' },
  { icon: 'dentistry',     title: 'Dentistry',                desc: 'Periodontal disease, oral surgery',   href: '/find-a-vet' },
  { icon: 'internal',      title: 'Internal Medicine',        desc: 'Endocrine, GI, kidney disease',       href: '/find-a-vet' },
  { icon: 'emergency',     title: 'Emergency & Critical Care', desc: 'Trauma, ICU, 24-hour care',          href: '/find-a-vet' },
]

const HERO_STATS = [
  { num: '100+',      label: 'Sourced Articles' },
  { num: '8',         label: 'Specialty Types' },
  { num: 'All Breeds', label: 'Covered' },
] as const

const FEATURED_GUIDES = [
  { category: 'Emergency',     title: '15 Signs Your Pet Needs Emergency Care Right Now',         href: '/health/emergency-signs',         image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&q=85&auto=format&fit=crop' },
  { category: 'Insurance',     title: 'Best Pet Insurance 2025 — Ranked by Real Payout Rates',    href: '/reviews/best-pet-insurance',     image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=900&q=85&auto=format&fit=crop' },
  { category: 'Breed Health',  title: 'Golden Retriever Health — Cancer Risk, Hip Dysplasia & Prevention', href: '/breeds/golden-retriever-health', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=900&q=85&auto=format&fit=crop' },
]

export default function VetsHomePage() {
  return (
    <>
      {/* HERO — restructured for mobile: image-first stack on <lg,
          side-by-side on lg+. Was previously hidden lg:block. */}
      <section className="bg-brand-dark overflow-hidden grid lg:grid-cols-2 lg:min-h-[88vh]">
        {/* Image */}
        <div className="relative order-1 lg:order-2 aspect-[5/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full">
          <Image
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1400&q=85&auto=format&fit=crop"
            alt="Veterinarian examining a dog"
            fill className="object-cover object-center" priority sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent 35%, #0D2535 100%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: 'linear-gradient(to right, #0D2535 0%, rgba(13,37,53,0) 22%)' }}
            aria-hidden="true"
          />
        </div>

        {/* Text */}
        <div className="relative order-2 lg:order-1 flex flex-col justify-center px-container-sm sm:px-container py-14 lg:py-20">
          <div
            className="absolute inset-0 opacity-90 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(ellipse at 15% 60%, rgba(10,138,122,0.18) 0%, transparent 55%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2.5 mb-5 lg:mb-7">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Pet Health, Sourced</span>
            </div>
            <h1
              className="font-display font-bold text-white leading-[1.05] tracking-tight mb-5 lg:mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
            >
              Find the Right Vet.<br />
              <span className="text-brand-primary">Get Trusted Answers.</span>
            </h1>
            <p className="text-base lg:text-lg font-light text-white/65 leading-relaxed max-w-md mb-8 lg:mb-10">
              Veterinary specialists near you, research-based health guides for every breed, honest pet insurance comparisons, and telehealth options — all in one place.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/find-a-vet"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
                Find a Specialist<span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link href="/health"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors">
                Pet Health Library
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

      {/* TRUST BAR — slim dark masthead, vertical separators, no ✓ emoji */}
      <div className="bg-brand-dark border-b border-white/5 px-container-sm sm:px-container py-3">
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2 text-white/70">
          {['All content research-based', 'Specialist-focused guides', 'Honest insurance comparisons', 'No paid referrals'].map((item, i, arr) => (
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

      {/* FIND A SPECIALIST */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Specialty Care</span>
              </div>
              <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl sm:text-4xl">Find a Specialist</h2>
            </div>
            <Link href="/find-a-vet" className="text-sm font-semibold text-brand-primary no-underline hover:text-brand-primary-dark transition-colors">
              Search all specialists →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SPECIALIST_TYPES.map((s) => (
              <Link key={s.title} href={s.href}
                className="group block bg-brand-white border border-brand-border rounded-md p-5 no-underline hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 ease-carloOS">
                <div className="text-brand-primary/85 group-hover:text-brand-primary mb-4 transition-colors">
                  <Icon name={s.icon} />
                </div>
                <div className="font-display font-bold text-brand-dark text-sm mb-1.5">{s.title}</div>
                <div className="text-xs text-brand-text-light leading-relaxed">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED HEALTH GUIDES */}
      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Pet Health Library</span>
              </div>
              <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl sm:text-4xl">Expert Guides</h2>
            </div>
            <Link href="/health" className="text-sm font-semibold text-brand-primary no-underline hover:text-brand-primary-dark transition-colors">All guides →</Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {FEATURED_GUIDES.map((g) => (
              <Link key={g.href} href={g.href}
                className="group block border border-brand-border rounded-md overflow-hidden no-underline hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-primary/30 transition-all duration-300 ease-carloOS">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                  <Image
                    src={g.image} alt={g.title} fill
                    className="object-cover transition-transform duration-500 ease-carloOS group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">{g.category}</span>
                  <h3 className="font-display font-bold text-brand-dark text-base leading-snug mt-2">{g.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TELEHEALTH CALLOUT */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(10,138,122,0.12) 0%, transparent 55%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Vet Telehealth</span>
            </div>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-[1.15] mb-4">
              Talk to a Vet Online<br />Tonight, If You Need To
            </h2>
            <p className="text-base text-white/65 leading-relaxed mb-7 max-w-lg">
              Vetster, AskVet, and Chewy Connect offer licensed veterinarian consultations within minutes. We compared all three on availability, credentials, and cost.
            </p>
            <Link href="/telehealth"
              className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
              Compare Telehealth Options<span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { name: 'Vetster',       feature: 'Video + chat',         score: '9.2' },
              { name: 'AskVet',        feature: 'Unlimited monthly',    score: '8.8' },
              { name: 'Chewy Connect', feature: 'Chewy integration',    score: '8.5' },
            ].map((t) => (
              <div key={t.name} className="bg-white/[0.04] border border-white/[0.08] rounded-md p-4 text-center">
                <div className="font-display font-bold text-white text-sm sm:text-base mb-1 leading-snug">{t.name}</div>
                <div className="text-xs text-white/50 mb-3 leading-relaxed">{t.feature}</div>
                <div className="font-display text-2xl font-bold text-brand-primary tabular-display">{t.score}</div>
                <div className="text-2xs text-white/45 font-semibold uppercase tracking-eyebrow mt-1">Editor Score</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="bg-brand-primary-pale px-container-sm sm:px-container py-section">
        <EmailCapture
          variant="section"
          siteId="vets-co"
          title="Free Pet Health Newsletter"
          subtitle="research-based health alerts, breed spotlights, and veterinary news — every Tuesday."
          ctaText="Subscribe Free"
          source="homepage-section"
          perks={['Research-based', 'Weekly', 'All species', 'No spam']}
        />
      </section>
    </>
  )
}
