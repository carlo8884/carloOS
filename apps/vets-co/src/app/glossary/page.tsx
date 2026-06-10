import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Health & Insurance Glossary — Terms Defined | Vets.co',
  description:
    'Plain-language definitions of pet-insurance and veterinary terms: premium, deductible, reimbursement, pre-existing condition, DVM, referral, triage, and more.',
  path: '/glossary',
})

interface Term {
  term: string
  def: string
}
interface Group {
  category: string
  terms: Term[]
}

const GLOSSARY: Group[] = [
  {
    category: 'Pet Insurance',
    terms: [
      { term: 'Premium', def: 'The recurring amount (usually monthly) you pay to keep a policy active. It is set from the pet’s species, breed, age, and your location, and typically rises as the pet ages.' },
      { term: 'Deductible', def: 'The amount you pay out of pocket before reimbursement begins. An annual deductible resets each policy year; a per-condition deductible is paid once per distinct condition for the life of that condition.' },
      { term: 'Reimbursement rate', def: 'The percentage of the eligible bill the insurer pays back after the deductible is met — commonly 70%, 80%, or 90%. You pay the remaining share (coinsurance).' },
      { term: 'Annual limit (cap)', def: 'The maximum the policy will reimburse in a policy year. Limits below the cost of a serious illness or surgery can be binding; some policies are unlimited.' },
      { term: 'Exclusion', def: 'Anything the policy will not cover — stated in the contract. Common exclusions include pre-existing conditions, cosmetic procedures, and (without an add-on) routine wellness care.' },
      { term: 'Pre-existing condition', def: 'A condition that showed signs or was diagnosed before coverage began (or during a waiting period). Most policies exclude these, which is why enrolling while a pet is young and healthy matters.' },
      { term: 'Waiting period', def: 'The interval after enrollment before coverage takes effect. Conditions arising during the waiting period are typically treated as pre-existing.' },
      { term: 'Wellness / preventive plan', def: 'An optional add-on (or separate plan) that reimburses routine care — exams, vaccines, dental cleaning — which standard accident-and-illness insurance excludes.' },
      { term: 'Benefit schedule', def: 'A reimbursement model that pays a fixed amount per condition or procedure from a set table, rather than a percentage of the actual bill. Can pay less than actual-cost reimbursement for expensive care.' },
      { term: 'Bilateral exclusion', def: 'A clause treating a condition affecting a paired body part (e.g., both knees’ cruciate ligaments) as pre-existing on the second side if the first occurred before or during the waiting period.' },
      { term: 'Claim', def: 'A request for reimbursement submitted with the itemized invoice and records after you have paid the vet. Most pet insurance is reimbursement-based, not pay-at-the-vet.' },
    ],
  },
  {
    category: 'At the Vet',
    terms: [
      { term: 'DVM / VMD', def: 'Doctor of Veterinary Medicine (DVM) and Veterinariae Medicinae Doctoris (VMD) — the degrees of a licensed veterinarian. VMD is granted by one school (Penn); DVM by the others. They are equivalent.' },
      { term: 'Board-certified specialist', def: 'A veterinarian who completed a residency and passed board exams in a specialty, earning Diplomate status in a college such as the ACVIM, ACVS, or ACVO. Often written as DACVIM, DACVS, etc.' },
      { term: 'Referral', def: 'When your primary-care veterinarian sends you and your pet’s records to a specialist or specialty hospital for advanced diagnostics or treatment.' },
      { term: 'Triage', def: 'The rapid sorting of patients by urgency so the most critical are seen first. In an emergency, staff assess your pet on arrival regardless of appointment order.' },
      { term: 'Telehealth / telemedicine', def: 'Veterinary guidance delivered remotely. Scope varies by state law and usually requires an existing veterinarian-client-patient relationship to diagnose or prescribe.' },
      { term: 'VCPR', def: 'The veterinarian-client-patient relationship — the legal basis (established by examining the animal) generally required before a vet can diagnose or prescribe.' },
      { term: 'Wellness exam', def: 'A routine check-up of an outwardly healthy pet to catch problems early and keep vaccines and parasite prevention current.' },
    ],
  },
  {
    category: 'Clinical Shorthand',
    terms: [
      { term: 'Acute vs chronic', def: '“Acute” means sudden and short-lived; “chronic” means long-standing or persistent. The distinction shapes both work-up and prognosis.' },
      { term: 'Idiopathic', def: 'Of unknown cause. An idiopathic diagnosis means the pattern is recognized but no specific underlying cause was found.' },
      { term: 'Differential diagnosis', def: 'The list of conditions that could explain the signs, which testing then narrows down. Often shortened to “differentials.”' },
      { term: 'Prognosis', def: 'The expected course and likely outcome of a condition — described as good, guarded, or poor based on the diagnosis and response to treatment.' },
      { term: 'Prophylaxis', def: 'Treatment given to prevent disease rather than treat it — for example, a dental prophylaxis (cleaning) or preventive antibiotics in defined situations.' },
      { term: 'Palliative care', def: 'Care aimed at comfort and quality of life rather than cure, used when a condition cannot be resolved.' },
      { term: 'NPO', def: 'From the Latin for “nothing by mouth” — the instruction to withhold food (and sometimes water), commonly before anesthesia or certain procedures.' },
      { term: 'CBC / chemistry panel', def: 'Common blood tests: a complete blood count (CBC) evaluates red and white cells and platelets; a chemistry panel assesses organ function and electrolytes.' },
      { term: 'Contraindication', def: 'A reason a treatment should not be used in a given patient because it would likely cause harm.' },
      { term: 'Off-label use', def: 'Use of a drug in a species, dose, or condition outside its official labeling — common and legal in veterinary medicine under professional judgment.' },
    ],
  },
]

const ALL_TERMS = GLOSSARY.flatMap((g) => g.terms)

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Vets.co', url: 'https://vets.co/' },
    { name: 'Glossary', url: 'https://vets.co/glossary' },
  ],
})

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Pet Health & Insurance Glossary',
  description: 'Plain-language definitions of pet-insurance and veterinary terms.',
  url: 'https://vets.co/glossary',
  hasDefinedTerm: ALL_TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://vets.co/glossary',
  })),
}

const schema = combineSchemas(breadcrumbSchema, definedTermSetSchema)

export default function VetsGlossaryPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Reference</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Pet Health &amp; Insurance Glossary
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The terms that come up when you are choosing pet insurance or sitting in an exam room —
          defined in plain English, so the policy fine print and the discharge notes make sense.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Vets.co</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Glossary</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12 max-w-3xl">
        <p className="text-sm text-brand-text-light mb-10">
          {ALL_TERMS.length} terms across pet insurance, the vet visit, and clinical shorthand. To apply the
          insurance terms, try the <Link href="/tools/insurance-reimbursement-estimator" className="text-brand-primary hover:underline">insurance reimbursement estimator</Link>,
          and the <Link href="/insurance" className="text-brand-primary hover:underline">pet insurance</Link> reference goes deeper on each concept.
        </p>

        {GLOSSARY.map((group) => (
          <section key={group.category} className="mb-10">
            <h2 className="font-display font-bold text-brand-dark text-xl mb-4 pb-2 border-b border-brand-border">
              {group.category}
            </h2>
            <dl className="space-y-4">
              {group.terms.map((t) => (
                <div key={t.term} className="border-l-2 border-brand-primary/30 pl-4">
                  <dt className="font-display font-bold text-brand-dark text-base">{t.term}</dt>
                  <dd className="text-sm text-brand-text-mid leading-relaxed mt-0.5 ml-0">{t.def}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section"
          siteId="vets-co"
          title="Free Pet Health Tips"
          subtitle="Plain-English veterinary and insurance guidance. No spam."
          source="glossary"
          ctaText="Subscribe Free"
        />
      </div>
    </>
  )
}
