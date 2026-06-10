import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
} from '@carloOS/ui'
import CostCalculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Cost Calculator — Setup, Yearly & Lifetime | Ferret.com',
  description:
    'Estimate the real cost of owning a ferret: one-time setup, yearly costs, and a lifetime total — plus why to budget for adrenal, insulinoma, and blockage care.',
  path: '/tools/cost-calculator',
})

const FAQS = [
  {
    question: 'How much does it cost to own a ferret?',
    answer:
      'Ferret ownership has three cost layers: a one-time setup (cage, supplies, acquisition, and initial veterinary care), recurring costs (food, litter, supplies, and routine vet care), and unpredictable medical costs. Routine ownership commonly runs a few hundred dollars per year per ferret after setup, but the figure that catches owners off guard is illness care — adrenal disease, insulinoma, and gastrointestinal blockages are common in the breed and frequently cost four figures per episode. Use the calculator with your own local prices for an accurate plan.',
    answerText:
      'Three layers: one-time setup, recurring yearly costs (food, litter, routine vet), and unpredictable illness care. Routine ownership is a few hundred dollars per year per ferret; illness can run four figures.',
  },
  {
    question: 'Why should I budget extra for ferret health?',
    answer:
      'Ferrets are prone to several conditions whose treatment is not optional once they appear. Adrenal disease, insulinoma, and gastrointestinal foreign-body blockages are among the most common, and diagnosis plus treatment (hormone panels, surgery, ongoing medication) frequently runs into the thousands of dollars. Because these are common rather than rare, most exotic-pet veterinarians recommend keeping a dedicated emergency fund or carrying exotic-pet insurance rather than treating these as unlikely events.',
    answerText:
      'Adrenal disease, insulinoma, and blockages are common in ferrets and treatment is not optional — often thousands of dollars. Keep an emergency fund or carry exotic-pet insurance.',
  },
  {
    question: 'Is it cheaper to own more than one ferret?',
    answer:
      'Some one-time costs are shared — a single large multi-level cage can house a small group — but most recurring costs (food, litter, routine vet care, and any insurance) scale with the number of ferrets. The calculator reflects this by treating the cage and initial setup as a shared household cost while scaling per-ferret acquisition, initial vet, and all recurring costs by the number of ferrets you enter.',
    answerText:
      'The cage and setup are largely shared, but food, litter, vet care, and insurance scale per ferret. The calculator treats setup as shared and scales recurring costs by ferret count.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ferret.com', url: 'https://ferret.com/' },
  { name: 'Tools', url: 'https://ferret.com/tools' },
  { name: 'Cost Calculator', url: 'https://ferret.com/tools/cost-calculator' },
])

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Ferret Cost Calculator',
  description:
    'Estimate the one-time, yearly, and lifetime cost of ferret ownership, scaled by number of ferrets.',
  url: 'https://ferret.com/tools/cost-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const combinedSchema = combineSchemas(breadcrumbSchema, appSchema)

export default function CostCalculatorPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />

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
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            What a ferret actually costs.
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            A clear, editable estimate of one-time setup, yearly recurring costs, and the lifetime total —
            scaled by how many ferrets you keep. The numbers are starting points; swap in your local prices.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Ferret.com</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Cost Calculator</span>
      </nav>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <CostCalculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-lg border border-brand-border bg-brand-primary-pale/30 p-6 sm:p-7">
            <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Now that you have a number</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-brand-text-dark">
              Turn the setup line into a shopping list
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-text-mid">
              Most of the one-time figure above is the cage-and-setup category. The ferret starter
              essentials list breaks that line into the specific items a new ferret needs on day one —
              cage, bedding, litter, food and water, and a carrier — so you can buy the core well
              instead of guessing.
            </p>
            <p className="mt-3 text-2xs leading-relaxed text-brand-text-light">
              That page includes affiliate links; we may earn a commission at no extra cost to you, and
              we never accept payment for favorable placement.{' '}
              <Link href="/disclosure" className="font-medium text-brand-primary underline-offset-2 hover:underline">
                Disclosure
              </Link>.
            </p>
            <Link
              href="/ferret-starter-kit"
              className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-brand-primary-dark"
            >
              See the ferret starter essentials
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">How to use this</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The calculator separates the three things people conflate when they ask what a ferret costs: the
            money you spend once to get set up, the money you spend every year to keep a ferret well, and the
            money you should set aside for the conditions ferrets are prone to. The first two are predictable
            and are what the totals reflect. The third is not optional but is impossible to schedule, which is
            why it is called out separately rather than folded into a tidy monthly figure.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For the narrative version of these numbers — what each line item typically covers and why — see the
            in-depth <Link href="/ownership/cost-of-owning-a-ferret" className="text-brand-primary underline-offset-2 hover:underline">cost of owning a ferret</Link> guide.
            If a food cost is driving your recurring number, the <Link href="/tools/food-evaluator" className="text-brand-primary underline-offset-2 hover:underline">Ferret Food Evaluator</Link> helps
            you confirm you are paying for a food that actually meets ferret nutrient targets, and the <Link href="/diet" className="text-brand-primary underline-offset-2 hover:underline">diet</Link> reference
            explains the targets themselves. For the health costs called out above, the <Link href="/health" className="text-brand-primary underline-offset-2 hover:underline">health</Link> section
            covers the common conditions and what their management involves.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">Common questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="ferret-com"
            variant="inline"
            title="Ferret.com keeper letter"
            subtitle="Ferret care references and tool updates. No spam."
            source="tools-cost-calculator"
          />
        </div>
      </section>
    </>
  )
}
