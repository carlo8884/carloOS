import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Calculators & Tools — Body Condition Score | Horses.com',
  description: 'Free horse-keeping calculators: Henneke body condition score (BCS) with feeding guidance per score, plus husbandry references for owners.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/body-condition-score',
    title: 'Body Condition Score (Henneke)',
    desc: 'Score six body areas (neck, withers, shoulder, ribs, loin, tailhead) to compute the standard 1-9 Henneke BCS. Returns condition narrative and feeding guidance per score range.',
    tag: 'Husbandry',
  },
]

export default function ToolsHub() {
  return (
    <>
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(60, 100, 70, 0.5) 0%, transparent 60%)' }}
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
            Horse husbandry math, <span className="italic font-normal">at the rail.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free, source-cited horse-keeping calculators. Body condition scoring on the standard Henneke scale, with feeding guidance and underlying-condition flags for owners.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-lg border border-brand-border bg-brand-bg p-6 transition hover:border-brand-primary"
            >
              <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">{tool.tag}</div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-brand-text group-hover:text-brand-primary">{tool.title}</h2>
              <p className="text-sm leading-relaxed text-brand-text-muted">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-bg px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="horses-com"
            variant="inline"
            title="Horses.com owner letter"
            subtitle="Horse-care references and tool updates. No spam."
            source="tools-hub"
          />
        </div>
      </section>
    </>
  )
}
