import Link from 'next/link'
import type React from 'react'

function ProblemIconCloud() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10a5 5 0 0 0-9.8-1A4 4 0 1 0 8 17h10a3 3 0 0 0 0-6z" />
    </svg>
  )
}
function ProblemIconBubbles() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="15" r="3" />
      <circle cx="15" cy="10" r="2.2" />
      <circle cx="11" cy="5" r="1.4" />
    </svg>
  )
}
function ProblemIconWarning() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4l9 16H3z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  )
}
function ProblemIconLeaf() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20c0-7 6-11 6-11S13 6 7 9c-4 2-5 7-5 7s3 1 6 0" />
      <path d="M5 16l7-7" />
    </svg>
  )
}
function ProblemIconCycle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 15.5-6.2" />
      <path d="M21 12a9 9 0 0 1-15.5 6.2" />
      <path d="M18 5.8l1.7 1-1 1.8" />
      <path d="M6 18.2l-1.7-1 1-1.8" />
    </svg>
  )
}
function ProblemIconFish() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 12c0 0-3-5-9-5S3 12 3 12s3 5 6 5c3.5 0 6-2.5 6-5z" />
      <path d="M18 12l3-3" />
      <path d="M18 12l3 3" />
      <circle cx="10" cy="11" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}
export function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

const PROBLEMS: { icon: React.ReactNode; title: string; desc: string; href: string }[] = [
  { icon: <ProblemIconCloud />, title: 'Cloudy water', desc: 'White/grey haze, bacterial bloom, or green water — what caused it and what fixes it.', href: '/setup/water-chemistry-guide' },
  { icon: <ProblemIconBubbles />, title: 'Fish gasping at the surface', desc: 'Low oxygen, high ammonia, gill irritation — triage and emergency actions.', href: '/health/fish-disease-guide' },
  { icon: <ProblemIconWarning />, title: 'Ammonia / nitrite spike', desc: 'Cycle crash, overstocking, dead fish, new-tank syndrome — what the readings mean.', href: '/health/new-tank-syndrome' },
  { icon: <ProblemIconLeaf />, title: 'Algae outbreak', desc: 'Green water, brown diatoms, black beard, hair algae — identify and treat by type.', href: '/setup/planted-tank-setup' },
  { icon: <ProblemIconCycle />, title: 'New tank cycling', desc: 'Fishless cycle, fish-in cycle, the nitrogen cycle in plain English — how long, what to test.', href: '/setup/aquarium-cycling-guide' },
  { icon: <ProblemIconFish />, title: 'Stocking & compatibility', desc: 'How many fish in your tank, who fights with whom, temperament + tank-size math.', href: '/tools/stocking-calculator' },
]

const CALCULATORS = [
  { title: 'Aquarium volume', href: '/tools/aquarium-volume-calculator' },
  { title: 'Stocking calculator', href: '/tools/stocking-calculator' },
  { title: 'Heater wattage', href: '/tools/heater-wattage-calculator' },
  { title: 'Water-change calculator', href: '/tools/water-change-calculator' },
  { title: 'CO₂ calculator (planted)', href: '/tools/co2-calculator' },
  { title: 'Cycling estimator', href: '/tools/aquarium-cycling-estimator' },
]

const TRUST_CHIPS = [
  {
    label: 'Source-grounded guides',
    note: 'Published aquarist literature, not invented experts.',
    href: '/editorial-standards',
  },
  {
    label: 'Calculators, not articles only',
    note: 'Volume, stocking, heater, water change, CO₂, cycling.',
    href: '/tools',
  },
  {
    label: '37+ species profiles',
    note: 'Parameter targets before you add the next fish.',
    href: '/species',
  },
  {
    label: 'Equipment compared',
    note: 'Scored on the page — not paid placements.',
    href: '/reviews',
  },
]

export function HomeTriage() {
  return (
    <>
      <section className="bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(14,107,138,0.35) 0%, transparent 55%)' }} aria-hidden="true" />
        <div className="relative z-10 px-container-sm sm:px-container pt-12 pb-16">
          <div className="flex items-end justify-between mb-5 flex-wrap gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/health"
                className="group flex items-center gap-2.5 no-underline"
              >
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-[#3aa4cc] group-hover:text-white">Start where you are</span>
              </Link>
            </div>
            <Link
              href="/health"
              className="group flex items-center gap-2 no-underline"
            >
              <span className="font-display font-bold text-white text-sm leading-tight italic group-hover:text-[#3aa4cc]">Health guides</span>
              <IconArrowRight className="w-3.5 h-3.5 shrink-0 text-[#3aa4cc] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROBLEMS.map((p) => (
              <Link key={p.href} href={p.href} className="group block overflow-hidden rounded-xl no-underline bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200">
                <div className="p-5">
                  <div className="mb-3 text-[#3aa4cc]">{p.icon}</div>
                  <h2 className="font-display font-bold text-white text-base leading-tight italic mb-2">{p.title}</h2>
                  <p className="text-xs text-white/55 leading-relaxed mb-3">{p.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3aa4cc] group-hover:gap-2 transition-all">
                    Read the guide
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-end justify-between mb-4 flex-wrap gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/editorial-standards"
                className="group flex items-center gap-2.5 no-underline"
              >
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary group-hover:text-brand-dark">Why this site</span>
              </Link>
            </div>
            <Link
              href="/editorial-standards"
              className="group flex items-center gap-2 no-underline"
            >
              <span className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">Editorial standards</span>
              <IconArrowRight className="w-3.5 h-3.5 shrink-0 text-brand-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {TRUST_CHIPS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
              >
                <div className="p-3.5">
                  <div className="flex items-center justify-between gap-2 font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary mb-1">
                    <span>{item.label}</span>
                    <IconArrowRight className="w-3.5 h-3.5 shrink-0 text-brand-primary" />
                  </div>
                  <div className="text-xs text-brand-text-mid mt-1 leading-relaxed">
                    {item.note}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-b border-white/10 px-container-sm sm:px-container py-6">
        <div className="mb-4 flex items-end justify-between gap-4 flex-wrap">
          <div className="max-w-3xl">
            <div className="mb-2 flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/tools/aquarium-volume-calculator"
                className="group flex items-center gap-2.5 no-underline"
              >
                <span className="text-xs font-bold tracking-eyebrow uppercase text-[#3aa4cc] group-hover:text-white">Decide with math, not guesses</span>
              </Link>
            </div>
            <div className="text-sm sm:text-base text-white font-semibold">6 free aquarist calculators — volume, stocking, heater wattage, water changes, CO₂, cycling</div>
          </div>
          <Link
            href="/tools"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] no-underline hover:border-brand-primary transition-all"
          >
            <div className="px-4 py-2.5">
              <div className="flex items-center gap-2 font-display font-bold text-white text-sm leading-tight italic group-hover:text-[#3aa4cc]">
                <span>All calculators</span>
                <IconArrowRight className="w-3.5 h-3.5 shrink-0 text-[#3aa4cc] transition-transform group-hover:translate-x-0.5" />
              </div>
              <div className="text-xs text-white/55 mt-0.5">Volume, stocking, heater, CO₂, cycling.</div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CALCULATORS.map((c) => (
            <Link key={c.href} href={c.href} className="group block overflow-hidden rounded-lg no-underline bg-white/[0.05] border border-white/10 hover:border-brand-primary transition-colors duration-200">
              <div className="flex items-center justify-between gap-2 px-3 py-3">
                <span className="text-xs font-semibold text-white leading-tight group-hover:text-[#3aa4cc]">{c.title}</span>
                <IconArrowRight className="w-3.5 h-3.5 shrink-0 text-[#3aa4cc]" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
