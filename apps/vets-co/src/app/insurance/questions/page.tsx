import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { HubMasthead } from '../../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Insurance Questions, Answered | Vets.co',
  description: 'Plain-English answers to the most-asked pet insurance questions: vaccines, pre-existing conditions, cost, worth-it, claims, timing, multi-pet, and dental.',
  path: '/insurance/questions',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Insurance', url: 'https://vets.co/insurance' },
    { name: 'Questions', url: 'https://vets.co/insurance/questions' },
  ],
})

const QUESTIONS = [
  { q: 'Does pet insurance cover vaccines?', href: '/insurance/questions/does-pet-insurance-cover-vaccines', summary: 'Core accident-and-illness policies exclude vaccines; only an optional wellness add-on reimburses routine care.', tag: 'Coverage' },
  { q: 'Does pet insurance cover pre-existing conditions?', href: '/insurance/questions/does-pet-insurance-cover-pre-existing-conditions', summary: 'No insurer covers pre-existing conditions, though some re-cover curable ones after a symptom-free window.', tag: 'Coverage' },
  { q: 'How much does pet insurance cost?', href: '/insurance/questions/how-much-does-pet-insurance-cost', summary: 'Typical dog policies run roughly $30–$70/month and cats $15–$40, driven by species, breed, age, and the deductible you choose.', tag: 'Cost' },
  { q: 'Is pet insurance worth it?', href: '/insurance/questions/is-pet-insurance-worth-it', summary: 'It is catastrophic-cost protection, not average savings. We frame both sides and point you to the breakeven math.', tag: 'Decision' },
  { q: 'How does the claims process work?', href: '/insurance/questions/how-does-the-claims-process-work', summary: 'Almost always reimbursement-based: you pay the vet, submit the invoice, and the insurer pays back your share after the deductible.', tag: 'How it works' },
  { q: 'When should I get pet insurance?', href: '/insurance/questions/when-should-i-get-pet-insurance', summary: 'As early as the insurer allows — enrolling a young, healthy pet locks in coverage before exclusions and lower premiums.', tag: 'Timing' },
  { q: 'Are there multi-pet discounts?', href: '/insurance/questions/multi-pet-discounts', summary: 'Most insurers offer a modest 5–10% multi-pet discount; coverage terms matter far more than the saving.', tag: 'Cost' },
  { q: 'Does pet insurance cover dental?', href: '/insurance/questions/does-pet-insurance-cover-dental', summary: 'Most policies cover dental disease and injuries but exclude routine cleanings; many require annual dental exams to keep claims eligible.', tag: 'Coverage' },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Insurance Questions Answered',
  numberOfItems: QUESTIONS.length,
  itemListElement: QUESTIONS.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.q,
    url: `https://vets.co${item.href}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function InsuranceQuestionsHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
        <HubMasthead
          eyebrow="Pet Insurance Q&A"
          title="Pet Insurance Questions, Answered"
          intro="Straight, jargon-free answers to the questions owners actually ask before buying pet insurance — vaccines, pre-existing conditions, cost, whether it is worth it, claims, timing, multi-pet, and dental. Editorial only; we do not sell insurance."
          manifestKey="vets-co:insurance-hero"
          fallbackKey="vets-co:hero"
          imageAlt="A pet owner reviewing insurance paperwork at a desk"
          primaryCta={{ href: '/tools/pet-insurance-worth-it-calculator', label: 'Is it worth it? Run the calculator' }}
          secondaryCta={{ href: '/insurance', label: 'Start with the basics' }}
        />
        <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
          <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
          <Link href="/insurance" className="hover:text-brand-primary no-underline">Insurance</Link><span>›</span>
          <span className="text-brand-text-mid">Questions</span>
        </nav>

        <div className="px-container-sm sm:px-container pt-14 pb-2">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-4 leading-tight">What this hub covers</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-4">
              A small set of recurring questions dominates how owners research pet insurance, and most of them have a clear, evidence-based answer once the industry&apos;s language is stripped away. Each page below opens with a direct, extractable answer, then explains the reasoning so you can apply it to your own pet rather than memorize a rule. These are deliberately editorial: Vets.co does not sell insurance, take enrollment commissions, or rank carriers for payment, so the answers are about understanding the product, not steering you toward one.
            </p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-4">
              Where the right answer depends on arithmetic &mdash; cost, whether a policy is worth it, how a wellness rider pencils out &mdash; we point you to the tools that do the math on your numbers instead of offering a blanket verdict. The <Link href="/tools/pet-insurance-worth-it-calculator" className="text-brand-primary font-medium hover:underline">&ldquo;is pet insurance worth it?&rdquo; calculator</Link> turns a quote into a breakeven cost level, and the <Link href="/tools/insurance-finder" className="text-brand-primary font-medium hover:underline">coverage finder</Link> narrows carriers by the features you care about.
            </p>
            <p className="text-base text-brand-text-mid leading-relaxed">
              Every answer is written and maintained by the Vets.co editorial team and grounded in cited references &mdash; NAIC consumer guidance, NAPHIA industry data, the CFPB, and the carriers&apos; own sample policy documents. For a structured walk through how coverage works from the ground up, see the <Link href="/insurance" className="text-brand-primary font-medium hover:underline">pet insurance education hub</Link>, and to compare carriers head-to-head, see the <Link href="/reviews/best-pet-insurance" className="text-brand-primary font-medium hover:underline">best pet insurance comparison</Link>.
            </p>
          </div>
        </div>

        <div className="px-container-sm sm:px-container pb-14 pt-8">
          <h2 className="font-display text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-border">The 8 most-asked questions</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {QUESTIONS.map((item) => (
              <Link key={item.href} href={item.href} className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary transition-colors">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{item.tag}</div>
                <div className="font-display font-bold text-brand-dark text-sm mb-2 leading-snug">{item.q}</div>
                <p className="text-xs text-brand-text-light m-0 leading-relaxed">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
          <EmailCapture variant="section" siteId="vets-co" title="Pet Insurance Decision Guide" subtitle="Get our plain-English insurance checklist by email." source="insurance-questions-hub" ctaText="Send Me the Guide" perks={['No jargon', 'One email', 'Vet perspective']} />
        </div>
      </>
    </>
  )
}
