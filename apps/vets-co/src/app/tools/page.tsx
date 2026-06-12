import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vets.co Tools — Pet Insurance Coverage Finder & Estimator | Vets.co',
  description: 'Free veterinary-finance tools: a pet insurance coverage finder that filters carriers by priorities, plus a reimbursement estimator for any carrier quote.',
  path: '/tools',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Tools', url: 'https://vets.co/tools' },
  ],
})


const TOOLS = [
  {
    href: '/tools/pet-insurance-worth-it-calculator',
    title: 'Is Pet Insurance Worth It? Calculator',
    desc: 'A breakeven calculator: enter a quote and an expected-cost scenario to see the eligible vet-cost level at which a policy pays for itself — with honest framing on insurance as catastrophic-cost protection, not guaranteed savings.',
    tag: 'Finance',
  },
  {
    href: '/tools/insurance-finder',
    title: 'Pet Insurance Coverage Finder',
    desc: 'Filter carriers by the coverage features you care about — exam fees, full dental, wellness, unlimited limits, 100% reimbursement — and compare options that may fit your priorities. No quotes, no rankings.',
    tag: 'Finance',
  },
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
      <SchemaScript schema={breadcrumbSchema} />
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
            Free reference tools: a pet-insurance coverage finder that filters carriers by your priorities, a reimbursement estimator that models any carrier quote, plus the printable emergency triage card and the veterinary directory.
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Tools</span>
      </nav>
      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="vets-co:tools-hero" aspect="16:9" variant="wide" priority />
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-2xl font-bold text-brand-text-dark mb-4">What&apos;s in the toolkit</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            A focused set of references, each built to answer a question the Vets.co editorial team kept hearing from owners: <em>is pet insurance even worth it for my pet</em>, <em>which carriers fit what I care about</em>, <em>did this insurance policy actually pay what I expected</em>, <em>is this an ER right now or a same-day appointment</em>, and <em>where do I find a specialist for this condition</em>. The tools are deliberately narrow — each does one thing and gets it right rather than wrapping a dozen marginal calculators.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            They&apos;re free, do not require a sign-up, and do not collect or sell personal data. The insurance estimator is a pure-browser calculation — your quote inputs never leave the page.
          </p>
        </div>

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

      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-text-dark mb-4">How each tool is built</h2>
          <div className="space-y-5 text-base text-brand-text-mid leading-relaxed">
            <p>
              <strong>The &ldquo;is pet insurance worth it?&rdquo; calculator</strong> answers the decision question before the carrier question. It turns a quote — premium, deductible, reimbursement %, annual cap — into a single breakeven number: the eligible vet-cost level at which the policy reimburses exactly what it costs. It is honest about the result most owners find counterintuitive: in a typical year a policy does not pay for itself, because insurance is catastrophic-cost protection, not guaranteed savings. It never tells you to buy; it shows the math and points to the neutral comparison.
            </p>
            <p>
              <strong>The coverage finder</strong> is a filter-and-group tool, not a ranking wizard. Each coverage priority — exam fees covered, full dental, a wellness add-on, an unlimited annual-limit option, alternative or behavioral coverage, prescription food, a 100&#37; reimbursement option — maps to a published policy attribute in our carrier registry. Select the features you care about and the finder narrows the list to the carriers that publish them, grouped by how many of your priorities each one covers. It never scores carriers, picks a winner, or quotes a price; absent fields are simply omitted. It pairs with the reimbursement estimator: the finder answers <em>which carriers</em>, the estimator answers <em>what a policy would reimburse</em>.
            </p>
            <p>
              <strong>The reimbursement estimator</strong> models the four levers that every consumer pet-insurance contract uses: the monthly premium, the annual deductible, the reimbursement percentage applied after the deductible is met, and the annual payout cap. For a given expected claim total, it computes the annual reimbursement, the total cost (premium minus reimbursement), and the net benefit vs. paying out of pocket. The math is the standard claims-side accounting — no carrier marketing, no &ldquo;estimated savings&rdquo; that double-counts. If the inputs match what your carrier actually wrote on the quote, the output matches what they will actually pay.
            </p>
            <p>
              <strong>The emergency triage card</strong> is built from the AAHA / VECCS published triage references — owner-side signs that warrant an immediate ER visit, a same-day appointment with your primary vet, or watchful waiting. It is printable so it can live on the fridge. It is not a substitute for calling your veterinarian when something is wrong; it is a decision-support reference for the case where an owner has to make the first move at 11pm.
            </p>
            <p>
              <strong>The find-a-vet directory</strong> indexes practices by state and city with specialty filters. Profile pages link to the practice&apos;s own website rather than wrapping it — Vets.co does not gate the relationship, charge for premium listings, or sell leads to practices. Coverage is partial and being built out; if your veterinarian is not yet listed, the directory will fall through to the AAHA/AVMA national directories on the same page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-text-dark mb-4">What&apos;s not here (and why)</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            We deliberately do not ship a &ldquo;pet symptom checker&rdquo; or anything that would simulate a triage diagnosis from an owner&apos;s description. The clinical evidence on consumer-facing symptom checkers — both human and veterinary — is that they push more emergency referrals than the underlying disease prevalence warrants, and miss the cases where the owner&apos;s judgement of severity differs from the symptom description. We instead point owners at the emergency triage card and at named specialists.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            We also do not ship breed-specific health calculators or genetic-risk estimators. Those exist as breed-specific reference content under <Link href="/breeds" className="text-brand-primary no-underline hover:underline">/breeds</Link> and condition-specific content under <Link href="/health" className="text-brand-primary no-underline hover:underline">/health</Link>, with citations to the published breed-prevalence data. A calculator would imply a precision the underlying data does not support.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
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
  </>
  )
}
