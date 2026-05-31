import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vets.co Tools — Pet Insurance Reimbursement Estimator | Vets.co',
  description: 'Free veterinary-finance tools. Pet insurance reimbursement estimator (premium / deductible / reimbursement % / cap) for any carrier you can quote.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/insurance-reimbursement-estimator',
    title: 'Pet Insurance Reimbursement Estimator',
    desc: 'Enter the carrier quote (monthly premium, deductible, reimbursement %, annual cap) and your expected claims. Returns annual reimbursement, total cost with insurance, and net benefit vs. paying out-of-pocket.',
    tag: 'Finance',
  },
  {
    href: '/emergency-triage-card',
    title: 'Emergency Triage Card',
    desc: 'Printable owner-side reference card: signs that warrant an ER visit vs. next-day appointment vs. monitor at home.',
    tag: 'Reference',
  },
  {
    href: '/find-a-vet',
    title: 'Find a Vet Directory',
    desc: 'State-by-state directory of veterinary practices, with specialty filters and clinic profiles.',
    tag: 'Directory',
  },
]

export default function ToolsHub() {
  return (
    <>
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(60, 110, 160, 0.55) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Tools &amp; References</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Veterinary-side tools, <span className="italic font-normal">for owners.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free reference tools: a pet-insurance reimbursement estimator that models any carrier quote, plus the printable emergency triage card and the veterinary directory.
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
            siteId="vets-co"
            variant="inline"
            title="Vets.co reference letter"
            subtitle="Veterinary references for pet owners. No spam."
            source="tools-hub"
          />
        </div>
      </section>
    </>
  )
}
