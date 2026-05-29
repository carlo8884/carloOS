import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, CalloutBox, FAQAccordion } from '@carloOS/ui'
import { AffiliateDisclosure, AffiliateLink } from '../../components'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'Senior Pet Insurance — Trupanion, Pets Best, Embrace, Spot, Pumpkin',
  description:
    'Pet insurance options that still cover senior dogs and cats. Pre-existing conditions aren’t covered — the best time to insure your senior pet is right now.',
  path: '/insurance',
})

interface InsurerCard {
  vendor: 'trupanion' | 'petsbest' | 'embrace' | 'spot' | 'pumpkin'
  brand: string
  positioning: string
  bestFor: string
  notesForSeniors: string
}

const INSURERS: InsurerCard[] = [
  {
    vendor: 'trupanion',
    brand: 'Trupanion',
    positioning: 'Direct vet pay, no per-incident caps',
    bestFor:
      'Owners who want vet-paid-direct rather than reimbursement, and who value an unlimited annual benefit.',
    notesForSeniors:
      'Underwriting is per-condition (each new condition has its own deductible), which can be advantageous for senior pets with multiple unrelated diagnoses.',
  },
  {
    vendor: 'petsbest',
    brand: 'Pets Best',
    positioning: 'Customizable deductibles, well-known senior coverage',
    bestFor:
      'Owners who want to dial deductible and reimbursement levels to fit their budget.',
    notesForSeniors:
      'No upper age limit on accident & illness enrollment — important for owners adopting senior pets.',
  },
  {
    vendor: 'embrace',
    brand: 'Embrace',
    positioning: 'Diminishing deductible, dental illness coverage',
    bestFor:
      'Senior pets where dental disease is likely to drive future claims.',
    notesForSeniors:
      'Wellness rewards add an HSA-style budget for predictable senior-pet care like bloodwork.',
  },
  {
    vendor: 'spot',
    brand: 'Spot',
    positioning: 'Broad accident & illness, behavioral coverage',
    bestFor:
      'Senior pets with anxiety, cognitive decline, or behavioral comorbidities.',
    notesForSeniors:
      'No upper age limits on enrollment; coverage includes prescription medications and rehab.',
  },
  {
    vendor: 'pumpkin',
    brand: 'Pumpkin',
    positioning: 'Comprehensive accident & illness with vet wellness add-on',
    bestFor:
      'Owners who want a single annual deductible and 90% reimbursement.',
    notesForSeniors:
      'Coverage includes hereditary and congenital conditions, which often show up later in life.',
  },
]

const FAQS = [
  {
    question: 'Will pet insurance cover my pet’s existing condition?',
    answer:
      'No. Every U.S. pet-insurance provider excludes pre-existing conditions — anything diagnosed or symptomatic before the policy’s waiting period ends. This is the single most important reason owners are urged to insure pets while they are still healthy.',
  },
  {
    question: 'Is it too late to insure a senior dog or cat?',
    answer:
      'It depends on the insurer. Many providers, including Pets Best, Spot, and Pumpkin, have no maximum enrollment age. Coverage will exclude any existing condition, but new diagnoses going forward can still be covered. The premium will be meaningfully higher than insuring a young pet, but a single emergency visit can recoup years of premium.',
  },
  {
    question: 'What does pet insurance not cover for senior pets?',
    answer:
      'Pre-existing conditions, routine wellness (unless you add a wellness rider), grooming, breeding, and elective procedures. Some policies have separate riders for dental illness, behavioral therapy, and alternative care — read each policy carefully and ask the insurer in writing about the conditions your senior pet currently has.',
  },
  {
    question: 'How do reimbursement and direct vet pay differ?',
    answer:
      'Most insurers reimburse you after you pay the vet. Trupanion offers direct vet pay at participating practices, which can ease cash-flow concerns for expensive senior-pet workups. Direct pay availability varies by hospital — confirm before you assume it applies.',
  },
  {
    question: 'Should I get pet insurance or save the equivalent in a vet fund?',
    answer:
      'Either can work; both have trade-offs. A self-funded vet account avoids monthly premiums but caps your protection at whatever you’ve saved. Insurance smooths the cost of a $4,000–$10,000 emergency or chronic-illness workup. For senior pets specifically, the probability of a major claim within the policy’s lifetime is high, which is why insurers price senior premiums accordingly.',
  },
]

export default function InsurancePage() {
  return (
    <div className="px-container sm:px-container-sm py-12 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-6">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Pet Insurance</span>
      </nav>

      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
        Senior Pet Insurance
      </div>
      <h1 className="font-display font-semibold text-brand-dark text-4xl sm:text-5xl tracking-tight mb-4 leading-tight">
        Pet insurance for senior dogs and cats
      </h1>
      <p className="text-lg text-brand-text-mid leading-relaxed max-w-3xl mb-6">
        Five providers below cover senior pets at enrollment. The one shared
        rule across the industry: pre-existing conditions are not covered. The
        best time to insure your senior pet is right now, before the next
        annual exam adds a note to the medical record.
      </p>

      <AffiliateDisclosure variant="banner" />

      <CalloutBox variant="warning" title="The senior pet insurance window closes fast">
        Once a condition appears in your pet&apos;s medical record — even a
        passing note about a heart murmur, an early kidney value, or a
        screening note about arthritis — that condition becomes pre-existing
        for every insurer in the United States. Owners who insure today, while
        their pet is symptom-free, get the broadest possible coverage going
        forward.
      </CalloutBox>

      <section className="grid md:grid-cols-2 gap-5 mt-10">
        {INSURERS.map((ins) => (
          <div
            key={ins.vendor}
            className="bg-brand-white border border-brand-border rounded-lg p-6"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              {ins.positioning}
            </div>
            <h2 className="font-display font-semibold text-brand-dark text-2xl mb-3">
              {ins.brand}
            </h2>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              <strong>Best for:</strong> {ins.bestFor}
            </p>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
              <strong>For seniors:</strong> {ins.notesForSeniors}
            </p>
            <AffiliateLink
              vendor={ins.vendor}
              source="insurance-comparison"
              variant="button"
            >
              Get a {ins.brand} senior pet quote →
            </AffiliateLink>
            <p className="text-2xs text-brand-text-light mt-2">
              Affiliate link · we may earn a commission
            </p>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="font-display font-semibold text-brand-dark text-2xl mb-5">
          Frequently asked questions
        </h2>
        <FAQAccordion items={FAQS} />
      </section>
    </div>
  )
}
