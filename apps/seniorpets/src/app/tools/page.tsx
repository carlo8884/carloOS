import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'Senior Pet Tools — Wellness Check-in Checklist | SeniorPetPharmacy',
  description: 'Free senior-pet wellness tools. Senior change-sign checklist routes you to the right wellness visit timing — sourced from published vet references.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/senior-wellness-checkin',
    title: 'Senior Pet Wellness Check-in',
    desc: 'Check the senior change signs your pet is showing in the last 1-3 months. The count routes to the right vet wellness visit timing — schedule now, next visit, monitor, or routine.',
    tag: 'Wellness',
  },
]

export default function ToolsHub() {
  return (
    <>
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(124, 111, 89, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Wellness Tools</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Catch senior changes <span className="italic font-normal">early.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free senior-pet wellness tools. Owner-side checklists sourced from published veterinary senior-care references. Catch the changes that matter while there&apos;s still time to act.
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
        <AffiliateDisclosure variant="inline" siteId="seniorpets" />
      </section>
    </>
  )
}
