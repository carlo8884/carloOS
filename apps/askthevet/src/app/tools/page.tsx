import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'AskTheVet — Symptom Triage Tools | AskTheVet.com',
  description: 'Free pet symptom triage tools sourced from published veterinary emergency guidance. Educational decision aids — not a diagnosis.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/symptom-triage',
    title: 'When to Call the Vet — Symptom Triage Checklist',
    desc: 'Check the warning signs your pet is showing. Returns an emergency/urgent/today/monitor verdict sourced from published vet emergency guidance.',
    tag: 'Decision aid',
  },
]

export default function ToolsHub() {
  return (
    <>
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(37, 99, 235, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Triage Tools</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            When in doubt, <span className="italic font-normal">call the vet.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free owner triage tools, sourced from published veterinary emergency guidance. Educational decision aids — not a substitute for a veterinary examination. When unsure, call your vet.
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
        <AffiliateDisclosure variant="inline" siteId="askthevet" />
      </section>
    </>
  )
}
