import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Calculators & Tools — Tree Size, Fit, Brand Match | Saddle.com',
  description: 'Free saddle calculators: starting tree-size estimator from horse conformation, plus the printable 12-point saddle-fit checklist for try-on appointments.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/tree-size-estimator',
    title: 'Tree Size Estimator',
    desc: 'Starting English / Western tree-size estimate from horse type, withers profile, and back length. Estimator only — a qualified saddler must verify on the horse.',
    tag: 'Fit',
  },
  {
    href: '/saddle-fit-checklist',
    title: '12-Point Saddle Fit Checklist',
    desc: 'Printable 12-point reference for try-on appointments and routine fit checks. Pairs with the tree-size estimator.',
    tag: 'Checklist',
  },
]

export default function ToolsHub() {
  return (
    <>
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(140, 100, 60, 0.6) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Calculators &amp; Tools</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Saddle math, <span className="italic font-normal">before the fitter visit.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free saddle-buying tools. Tree-size estimates by horse type, plus the printable 12-point fit checklist. Designed to make a fitter visit faster — not to replace one.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-lg border border-brand-border bg-brand-surface p-6 transition hover:border-brand-primary"
            >
              <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">{tool.tag}</div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-brand-text-dark group-hover:text-brand-primary">{tool.title}</h2>
              <p className="text-sm leading-relaxed text-brand-text-mid">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="saddle-com"
            variant="inline"
            title="Saddle.com fit letter"
            subtitle="Saddle-fit reference deep-dives. No spam."
            source="tools-hub"
          />
        </div>
      </section>
    </>
  )
}
