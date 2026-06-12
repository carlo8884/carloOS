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
import { InsuranceCoverageFinder } from '../../../components/visual/InsuranceCoverageFinder'

const URL = 'https://vets.co/tools/insurance-finder'
const REVIEWS_HREF = '/reviews/best-pet-insurance'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Insurance Coverage Finder — Compare Options That May Fit',
  description:
    'Filter pet insurance carriers by coverage priorities (exam fees, dental, wellness, unlimited limits) and compare published options. No quotes, scores, ranking.',
  path: '/tools/insurance-finder',
})

const schema = buildHowToSchema({
  name: 'How to find pet insurance options that may fit your priorities',
  description:
    'Use published carrier policy options to narrow a shortlist of pet insurance carriers to compare, based on pet type, breed, state, and the coverage features you care about.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Choose pet type',
      text: 'Select dog or cat. This sets the breed list and the editorial breed coverage note, if you choose a breed.',
    },
    {
      name: 'Optionally pick a breed and state',
      text: 'A breed surfaces our editorial coverage consideration for that breed first. A state filters out carriers that report limited availability there.',
    },
    {
      name: 'Select coverage priorities',
      text: 'Pick the features that matter — exam fees covered, full dental, a wellness add-on, an unlimited annual-limit option, alternative or behavioral coverage, prescription food, or a 100% reimbursement option.',
    },
    {
      name: 'Review the options that may fit',
      text: 'The tool shows carriers whose published policy options match your priorities, with the matched features as chips and the key coverage facts on each card.',
    },
    {
      name: 'Compare on published terms, then confirm with the carrier',
      text: 'Open the neutral comparison to see all carriers side by side, then confirm pricing, eligibility, and exclusions directly with any carrier before purchasing.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pet Insurance Coverage Finder',
  url: URL,
  applicationCategory: 'FinanceApplication',
  applicationSubCategory: 'InsuranceComparison',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Filter pet insurance carriers by published coverage options (exam fees, full dental, wellness add-on, unlimited annual limit, alternative therapy, behavioral coverage, prescription food, 100% reimbursement) and by state availability. Returns a grouped shortlist of carriers to compare — not a quote, score, or ranking.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Filter carriers by published coverage features (boolean/enum, no invented numbers)',
    'State-availability gate using editorially-verified state context',
    'Optional breed pin surfaces the editorial breed coverage consideration first',
    'Groups carriers by how many of your priorities they cover — never ranked "best"',
    'Neutral "compare on published terms" path plus disclosed carrier links',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const FAQS = [
  {
    question: 'Does this tool tell me the best pet insurance carrier?',
    answer:
      'No. It is a filter-and-group tool, not a ranking. It shows the carriers whose published policy options match the coverage priorities you select, grouped by how many of those priorities each one covers. It never assigns a fit score, picks a winner, or quotes a price. For an editorial side-by-side of every carrier, use the comparison link on each card.',
  },
  {
    question: 'Where do the coverage facts come from?',
    answer:
      'Every fact shown — reimbursement options, deductible options, annual limits, dental coverage, exam-fee coverage, and waiting periods — is recorded from each carrier\'s published policy options by the Vets.co editorial team. Nothing is invented. The tool does not generate premiums or savings figures; those require a live quote from the carrier for your specific pet and state.',
  },
  {
    question: 'Why does picking a state sometimes hide carriers?',
    answer:
      'Pet insurance is regulated state by state, and some carriers report limited availability in certain states. When a state has limited availability, the tool surfaces only carriers licensed across all states and shows a caveat. This is a conservative filter — always confirm availability directly with the carrier, because availability changes.',
  },
  {
    question: 'What does selecting a breed do?',
    answer:
      'Selecting a breed surfaces the Vets.co editorial coverage consideration for that breed first — a plain-English note about which published policy features tend to matter for that breed\'s risk profile. It is a coverage consideration, not a ranking or a guarantee, and you can ignore it. Leaving breed on "Not sure / mixed" simply skips the breed note.',
  },
  {
    question: 'Is this financial advice?',
    answer:
      'No. This tool compares published policy options; it is not personalized insurance or financial advice. Confirm details and pricing directly with the carrier, and read each carrier\'s Sample Policy, Schedule of Benefits, and exclusions before purchasing.',
  },
]

export default function InsuranceFinderPage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Pet Insurance Coverage Finder',
        subtitle:
          'Filter carriers by the coverage features you care about and compare options that may fit your priorities. No quotes, no scores, no rankings — just published policy options, grouped.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Insurance Coverage Finder' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The finder', href: '#finder' },
              { label: 'How it works', href: '#how' },
              { label: 'What it does not do', href: '#limits' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Insurance references"
            links={[
              { label: 'Best Pet Insurance', href: REVIEWS_HREF },
              { label: 'Is Pet Insurance Worth It?', href: '/tools/pet-insurance-worth-it-calculator' },
              { label: 'Reimbursement Estimator', href: '/tools/insurance-reimbursement-estimator' },
              { label: 'Pet Insurance Education', href: '/insurance' },
              { label: 'Find a Vet', href: '/find-a-vet' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="vets-co"
            title="Vets.co reference letter"
            subtitle="Veterinary references for pet owners."
            source="insurance-finder"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <h2 id="finder">The finder</h2>
        <p>
          Pick your pet type and the coverage features that matter to you. The finder filters the major carriers
          to the ones whose published policy options include those features, then groups them by how many of your
          priorities each one covers. It is a way to narrow the field to a shortlist worth comparing &mdash; not a
          ranking, a score, or a quote.
        </p>
        <InsuranceCoverageFinder reviewsHref={REVIEWS_HREF} campaignSku="insurance-finder" />

        <h2 id="how">How it works</h2>
        <p>
          Each priority maps to a published coverage attribute in our carrier registry. &ldquo;Exam fees
          covered&rdquo; keeps carriers whose policies include exam fees; &ldquo;full dental coverage&rdquo; keeps
          carriers whose dental benefit covers dental disease, not only dental accidents; &ldquo;unlimited annual
          payout option&rdquo; keeps carriers that publish an unlimited annual-limit tier; and so on. Selecting
          more priorities narrows the set. If no carrier matches every priority, the finder relaxes to the closest
          matches rather than showing an empty result, and says so.
        </p>
        <p>
          Choosing a state applies a conservative availability filter: where a state reports limited carrier
          availability, the finder shows only carriers licensed across all states and flags the caveat. Choosing a
          breed surfaces our editorial coverage consideration for that breed first. None of this changes a
          carrier&apos;s underlying facts &mdash; it only changes the order and which note appears.
        </p>

        <h2 id="limits">What it does not do</h2>
        <ul>
          <li>It does not quote a premium. Premiums depend on your pet&apos;s age, breed, and ZIP, and require a live carrier quote.</li>
          <li>It does not score or rank carriers. The order reflects how many of your selected priorities each carrier covers &mdash; a grouping, not a quality judgment.</li>
          <li>It does not invent coverage. Only attributes a carrier publishes are shown; absent fields are omitted.</li>
          <li>It is not personalized insurance or financial advice. Confirm details and pricing directly with the carrier.</li>
        </ul>
        <p>
          For the dollars-and-cents side &mdash; what a given policy would actually reimburse &mdash; use the{' '}
          <Link href="/tools/insurance-reimbursement-estimator">reimbursement estimator</Link>. For the full
          editorial comparison of every carrier, see <Link href={REVIEWS_HREF}>Best Pet Insurance</Link>.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Carrier-published policy options, Sample Policies, and Schedules of Benefits, recorded by the Vets.co editorial team.</li>
          <li>NAIC (National Association of Insurance Commissioners) Pet Insurance Model Act and market reports for state-availability context.</li>
          <li>State Departments of Insurance consumer guides for state-specific availability and disclosure rules.</li>
          <li>Editorial breed coverage considerations cross-referenced under <Link href="/insurance">Pet Insurance Education</Link>.</li>
        </ul>
        <p className="text-sm text-brand-text-mid">
          No carrier ranking or endorsement is implied by the finder. We never accept payment for favorable
          placement; see <Link href="/disclosure">our disclosure</Link>.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Looking for the reimbursement math instead? See the{' '}
          <Link href="/tools/insurance-reimbursement-estimator">Pet Insurance Reimbursement Estimator</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
