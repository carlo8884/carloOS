import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { InsuranceReimbursementEstimator } from '../../../components/visual/InsuranceReimbursementEstimator'

const URL = 'https://vets.co/tools/insurance-reimbursement-estimator'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Insurance Reimbursement Estimator | Vets.co',
  description: 'Free pet insurance reimbursement estimator. Enter premium, deductible, reimbursement %, annual cap, and expected claims to see net annual benefit.',
  path: '/tools/insurance-reimbursement-estimator',
})

const schema = buildHowToSchema({
  name: 'How to estimate pet insurance reimbursement',
  description:
    'Calculate annual pet insurance reimbursement from the carrier quote (monthly premium, annual deductible, reimbursement percentage, annual cap) and your expected covered claims.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Get a carrier quote',
      text: 'Run a quote for the specific pet (age, breed, ZIP) from one or more carriers. Note monthly premium, annual deductible, reimbursement %, and annual cap.',
    },
    {
      name: 'Estimate expected covered claims',
      text: 'Project covered illness and accident claims for the year. Routine wellness is usually excluded or paid via a separate wellness add-on; exclude it here.',
    },
    {
      name: 'Apply the deductible',
      text: 'Reimbursement applies only to claims above the annual deductible. Claims below the deductible are paid in full by the owner.',
    },
    {
      name: 'Apply the reimbursement percentage',
      text: 'Multiply the amount above the deductible by the reimbursement percentage (typically 70 / 80 / 90%) to get the reimbursable amount.',
    },
    {
      name: 'Apply the annual cap',
      text: 'If the policy has an annual reimbursement cap, the final reimbursement is the lesser of the reimbursable amount and the remaining cap.',
    },
    {
      name: 'Compare to no insurance',
      text: 'Total annual cost with insurance = premium + out-of-pocket bills. Net benefit = (out-of-pocket without insurance) − (total cost with insurance).',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pet Insurance Reimbursement Estimator',
  url: URL,
  applicationCategory: 'FinanceApplication',
  applicationSubCategory: 'InsuranceCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free pet insurance reimbursement estimator. Inputs: monthly premium, annual deductible, reimbursement percentage, annual reimbursement cap, expected annual covered claims. Outputs: annual premium, reimbursed amount, out-of-pocket on bills, total annual cost with insurance, net benefit vs. paying out-of-pocket.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Configurable monthly premium, deductible, reimbursement %, and annual cap',
    'Models any carrier with a standard annual-deductible structure',
    'Flags annual-cap binding when reimbursement would have been higher uncapped',
    'Returns net annual benefit vs. paying out-of-pocket',
    'Explicit "verify against the carrier Sample Policy" trust framing',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const FAQS = [
  {
    question: 'Does this estimator pick a carrier for me?',
    answer:
      'No. The estimator takes any carrier quote you provide and runs the standard reimbursement math. For carrier rankings, see our Best Pet Insurance review. Always verify the math against the carrier\'s Sample Policy and Schedule of Benefits before purchasing.',
  },
  {
    question: 'What about per-condition deductibles (e.g. Trupanion)?',
    answer:
      'This estimator uses the standard annual-deductible model used by most carriers (Lemonade, Embrace, ASPCA, Healthy Paws, Pumpkin, Pets Best, Spot, ManyPets, etc.). A per-condition deductible behaves differently: you pay the deductible once per medical condition, then reimbursement is unlimited for that condition for life. This is more favorable for chronic / lifelong conditions and less favorable for acute one-time claims. Use this estimator as a baseline; consult Trupanion\'s sample policy for their specific math.',
  },
  {
    question: 'Are wellness visits covered?',
    answer:
      'Routine wellness (annual exam, vaccines, dental cleaning, parasite prevention) is excluded from most standard accident-and-illness policies. Some carriers sell a separate Wellness Rider for an additional premium. Exclude wellness from the "expected covered claims" input unless you are pricing a policy with a wellness rider.',
  },
  {
    question: 'What is a pre-existing condition?',
    answer:
      'A condition the pet showed signs of, was diagnosed with, or was treated for before the policy effective date (or during the waiting period). All major carriers exclude pre-existing conditions from coverage permanently. Some carriers (e.g. ManyPets) cover certain curable pre-existing conditions after a 12-18-month symptom-free window. Verify each carrier\'s definition in their Sample Policy.',
  },
  {
    question: 'What expected annual claims number should I use?',
    answer:
      'For a typical mid-life healthy dog or cat with no chronic conditions, $0-$1,000 in covered claims per year is common. For a senior pet, a young pet still in the high-injury age band, or a breed prone to expensive conditions (hip dysplasia, dilated cardiomyopathy, brachycephalic syndrome, certain cancers), $2,000-$8,000 per year is realistic. The decision to insure is largely about catastrophic protection — a $10,000-$15,000 surgery or chronic-condition course is the scenario insurance is best at.',
  },
  {
    question: 'Why does the calculator sometimes show a negative net benefit?',
    answer:
      'Because pet insurance, like all insurance, has a negative expected value at the average claim level — that\'s how carriers stay solvent. Insurance pays off for owners whose pet has higher-than-average claims. The decision is closer to "do I want to convert a low-probability catastrophic bill into a predictable monthly cost?" than "will I save money on average?" The estimator makes that math explicit.',
  },
]

export default function InsuranceReimbursementEstimatorPage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Pet Insurance Reimbursement Estimator',
        subtitle:
          'Enter a carrier quote and your expected claims. Returns reimbursed amount, total annual cost with insurance, and net benefit vs. paying out-of-pocket.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Insurance Reimbursement Estimator' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The estimator', href: '#estimator' },
              { label: 'Next step', href: '#next-step' },
              { label: 'Reading the numbers', href: '#reading' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Insurance references"
            links={[
              { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
              { label: 'Is Pet Insurance Worth It?', href: '/tools/pet-insurance-worth-it-calculator' },
              { label: 'Pet Insurance Hub', href: '/pet-insurance' },
              { label: 'Find a Vet', href: '/find-a-vet' },
              { label: 'Emergency Triage Card', href: '/emergency-triage-card' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="vets-co"
            title="Vets.co reference letter"
            subtitle="Veterinary references for pet owners."
            source="insurance-estimator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <h2 id="estimator">The estimator</h2>
        <p>
          Enter the carrier&apos;s quote and your projected covered claims. The calculator returns the reimbursement, the out-of-pocket portion of bills, the total annual cost of having insurance, and the net benefit (or net cost) vs. paying out-of-pocket for everything.
        </p>
        <InsuranceReimbursementEstimator />

        {/* Result-based next step. Sits directly below the live estimate so it
            reads as "you have a number — here's how to pressure-test it," not
            as a standalone affiliate box. Trust-first: the primary path is the
            neutral, no-carrier-picked comparison (no disclosure needed); the
            optional quote path is an affiliate /go link, disclosed subtly and
            framed as "run a live quote," never "buy the best." */}
        <div id="next-step" className="mt-6 rounded-lg border border-brand-border bg-brand-surface p-5 sm:p-6">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary-dark mb-2">Next step</p>
          <p className="text-sm font-semibold text-brand-text-dark mb-1">
            You have an estimate — now check it against real policies.
          </p>
          <p className="text-xs text-brand-text-mid mb-4">
            The figures above use the standard reimbursement formula. Reimbursement %, deductible tiers, annual caps, and excluded conditions vary by carrier, so verify your estimate against each carrier&apos;s published terms before deciding.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              href="/reviews/best-pet-insurance"
              className="inline-block shrink-0 px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors text-center"
            >
              Compare plans on published terms →
            </Link>
            <Link
              href="/go/lemonade/estimator?s=insurance-reimbursement-estimator"
              className="inline-block shrink-0 px-5 py-2.5 border border-brand-border text-brand-text-dark text-sm font-semibold rounded hover:border-brand-primary transition-colors text-center"
              rel="sponsored nofollow"
            >
              Run a live quote
            </Link>
          </div>
          <p className="mt-3 text-2xs text-brand-text-mid leading-relaxed">
            Our comparison ranks carriers on published coverage terms — we never accept payment for favorable placement. &ldquo;Run a live quote&rdquo; is an affiliate link; we may earn a commission at no extra cost to you.{' '}
            <Link href="/disclosure" className="font-semibold text-brand-primary hover:underline no-underline">
              Disclosure →
            </Link>
          </p>
        </div>

        <h2 id="reading">How to read the numbers</h2>
        <ul>
          <li><strong>Annual premium</strong> — what you pay the carrier regardless of claims. Goes up at renewal as the pet ages.</li>
          <li><strong>Reimbursed this year</strong> — what the carrier pays back. Limited by deductible, reimbursement %, and annual cap.</li>
          <li><strong>Out-of-pocket on vet bills</strong> — the portion of bills not reimbursed. Includes the deductible, the non-reimbursed percentage, and any amount above the annual cap.</li>
          <li><strong>Total annual cost with insurance</strong> — premium + out-of-pocket bills. The true all-in number to compare against no insurance.</li>
          <li><strong>Net benefit</strong> — money saved (positive) or extra paid (negative) by having insurance at this claim level.</li>
        </ul>
        <p>
          Move the &quot;expected covered claims&quot; slider to see where the policy breaks even and where it starts paying off. Most policies break even somewhere between $1,500 and $4,000 in annual claims, depending on the deductible and reimbursement %.
        </p>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The estimator uses the standard annual-deductible / fixed-percentage reimbursement structure used by most US pet insurance carriers. Formula:
        </p>
        <ul>
          <li><strong>annual premium</strong> = monthly premium × 12</li>
          <li><strong>reimbursable</strong> = max(0, claims − annual deductible) × reimbursement %</li>
          <li><strong>reimbursed</strong> = min(reimbursable, annual cap)</li>
          <li><strong>out-of-pocket on bills</strong> = claims − reimbursed</li>
          <li><strong>total annual cost</strong> = annual premium + out-of-pocket on bills</li>
          <li><strong>net benefit</strong> = claims − total annual cost</li>
        </ul>
        <p>The estimator does <strong>not</strong> model:</p>
        <ul>
          <li>Per-condition deductibles (Trupanion-style) — see FAQ for guidance</li>
          <li>Pre-existing condition exclusions — the carrier will exclude these regardless of premium</li>
          <li>Hereditary / congenital exclusions specific to a breed or carrier</li>
          <li>Bilateral exclusion (a claim on one side excludes the other side from coverage)</li>
          <li>Coinsurance variations within a policy term</li>
          <li>State-specific regulatory differences (filed rate vs. quoted rate)</li>
          <li>Premium increases at renewal (most carriers raise premiums 10-30% per year as the pet ages)</li>
        </ul>
        <p>
          Use the estimator as a first-pass financial sanity check. Verify against the carrier&apos;s Sample Policy, Schedule of Benefits, and Exclusions before purchasing.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>NAIC (National Association of Insurance Commissioners) Pet Insurance Model Act and annual pet-insurance market reports.</li>
          <li>NAPHIA (North American Pet Health Insurance Association) State of the Industry report — annual aggregate premium and reimbursement data.</li>
          <li>Carrier-published Sample Policies and Schedules of Benefits referenced under <Link href="/reviews/best-pet-insurance">Best Pet Insurance</Link> and <Link href="/pet-insurance">Pet Insurance hub</Link>.</li>
          <li>State Departments of Insurance (DOI) filings — carrier-specific filed rates by state, where public.</li>
        </ul>
        <p className="text-sm text-brand-text-mid">
          Vets.co Editorial cites these as the published basis for the standard pet-insurance reimbursement math implemented by the estimator. No carrier ranking or endorsement is implied by the estimator itself.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          For carrier rankings and clinical perspective, see <Link href="/reviews/best-pet-insurance">Best Pet Insurance</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
