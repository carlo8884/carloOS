/**
 * Dog.com Tools Hub — /tools
 *
 * Index landing for Dog.com calculators and decision tools. Currently
 * surfaces /tools/dog-daily-calories; queued additions appear as the
 * calculator playbook expands (body-condition, vaccine-schedule by age,
 * cost-of-ownership, etc.). Each new calculator drops into the
 * TOOLS array; the layout is data-driven.
 *
 * Trust posture (QC §1): every listed tool is educational guidance,
 * not veterinary advice. Cards link straight to the calculator page;
 * the methodology + sources live on the calculator itself.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Calculators & Decision Tools',
  description:
    'Free decision tools for dog owners: daily calorie target, feeding amount, body condition. Educational guidance grounded in WSAVA / AAHA.',
  path: '/tools',
  type: 'website',
  category: 'Tools',
})

const TOOLS: {
  href: string
  eyebrow: string
  title: string
  desc: string
  status: 'live' | 'queued'
}[] = [
  {
    href: '/tools/dog-daily-calories',
    eyebrow: 'Nutrition',
    title: 'Daily calorie & feeding amount calculator',
    desc: 'WSAVA / AAHA Resting-Energy-Requirement formula adjusted by life stage and activity. Returns daily calorie target and cup count (with food kcal/cup input).',
    status: 'live',
  },
  {
    href: '/guides/dog-body-condition-score',
    eyebrow: 'Nutrition',
    title: 'Body condition score (1–9)',
    desc: 'Visual and hands-on check for healthy weight. Walks through the standard 1–9 BCS scale with reference photos.',
    status: 'live',
  },
]

export default function ToolsHubPage() {
  const live = TOOLS.filter((t) => t.status === 'live')

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-90 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 15% 50%, rgba(232,98,42,0.10) 0%, transparent 55%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-14 lg:py-20">
          <nav
            aria-label="Breadcrumb"
            className="text-2xs font-semibold tracking-eyebrow uppercase text-white/50 mb-6 flex gap-2 flex-wrap"
          >
            <Link href="/" className="no-underline text-white/50 hover:text-white transition-colors">
              Dog.com
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-brand-primary">Tools</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Free decision tools
              </span>
            </div>
            <h1
              className="font-display font-black text-white tracking-tight leading-[1.02] mb-5"
              style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
            >
              Calculators for owner decisions.
            </h1>
            <p className="text-base lg:text-lg font-light text-white/70 leading-relaxed max-w-2xl">
              Quick math for the most common decisions in dog ownership —
              how much to feed, how to score body condition, when to ask
              the vet. Each tool cites its source and stays in
              educational-guidance territory; nothing here substitutes
              for an actual veterinary visit.
            </p>
          </div>
        </div>
      </section>

      {/* ── TOOLS LIST ────────────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="mx-auto max-w-container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {live.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block bg-brand-white border border-brand-border rounded-md p-7 no-underline hover:border-brand-primary/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-carloOS"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
                  {tool.eyebrow}
                </div>
                <h2 className="font-display font-bold text-brand-text-dark text-xl leading-snug mb-3">
                  {tool.title}
                </h2>
                <p className="text-sm text-brand-text-mid leading-relaxed mb-5">
                  {tool.desc}
                </p>
                <span className="inline-flex items-center text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                  Open
                  <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-6 bg-brand-white border border-brand-border rounded-md max-w-3xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
              More tools queued
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed">
              The tool playbook is expanding. Next additions: vaccine
              schedule generator (by age + state requirements), insurance
              premium estimator, and cost-of-ownership planner by breed.
              Owner suggestions welcome — email{' '}
              <a
                href="mailto:editor@dog.com"
                className="text-brand-primary underline decoration-brand-primary/40 hover:decoration-brand-primary"
              >
                editor@dog.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
