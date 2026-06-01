import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Tools — Food Evaluator | Ferret.com',
  description: 'Free ferret-keeping calculators: paste the guaranteed analysis from any kibble and the evaluator scores it against published ferret nutrient targets.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/food-evaluator',
    title: 'Ferret Food Evaluator',
    desc: 'Score any kibble against published ferret nutrient targets (protein, fat, fiber, ash, first ingredient). Returns "appropriate / marginal / avoid" verdict with per-nutrient notes.',
    tag: 'Nutrition',
  },
]

export default function ToolsHub() {
  return (
    <>
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(110, 80, 50, 0.5) 0%, transparent 60%)' }}
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
            Ferret husbandry math, <span className="italic font-normal">at the bag.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free, source-cited ferret-keeping tools. Paste the guaranteed analysis from any food into the evaluator and get a clear verdict on whether it meets published ferret nutrient targets.
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
            siteId="ferret-com"
            variant="inline"
            title="Ferret.com keeper letter"
            subtitle="Ferret care references and tool updates. No spam."
            source="tools-hub"
          />
        </div>
      </section>
    </>
  )
}
