import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  ArticleLayout,
  FAQAccordion,
  ArticleSourcesList,
  AffiliateDisclosure,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { PetInsuranceWorthItCalculator } from '../../../components/tools/PetInsuranceWorthItCalculator'

const URL = 'https://vets.co/tools/pet-insurance-worth-it-calculator'
const REVIEWS_HREF = '/reviews/best-pet-insurance'
const FINDER_HREF = '/tools/insurance-finder'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Is Pet Insurance Worth It? Free Breakeven Calculator | Vets.co',
  description:
    'Free breakeven calculator: see the eligible vet-cost level where a pet insurance policy pays for itself, and weigh premiums against expected reimbursement.',
  path: '/tools/pet-insurance-worth-it-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Is Pet Insurance Worth It? A Breakeven Calculator',
  description:
    'A breakeven calculator and honest framing for deciding whether pet insurance is worth it: it models annual premium vs. expected reimbursement and the eligible vet-cost level at which a policy pays for itself.',
  url: URL,
  imageUrl: 'https://vets.co/api/og?title=Is%20Pet%20Insurance%20Worth%20It%3F',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-06-11',
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://vets.co/' },
  { name: 'Tools', url: 'https://vets.co/tools' },
  { name: 'Is Pet Insurance Worth It?', url: URL },
])

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Is Pet Insurance Worth It? Breakeven Calculator',
  url: URL,
  applicationCategory: 'FinanceApplication',
  applicationSubCategory: 'InsuranceCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free breakeven calculator for the question "is pet insurance worth it?" Inputs: monthly premium, annual deductible, reimbursement percentage, annual payout cap, and an expected eligible-vet-cost scenario. Outputs: annual premium vs. modeled reimbursement and the breakeven eligible-cost level at which the policy pays for itself.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Models the standard annual-deductible / fixed-percentage reimbursement structure',
    'Returns a breakeven eligible-cost line: "pays for itself if costs exceed $X"',
    'Scenario presets from a healthy year to a catastrophic incident',
    'Honest risk-protection framing — never guarantees savings',
    'Pure-browser calculation; inputs never leave the page',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const SOURCES = [
  {
    label: 'State of the Industry Report — aggregate premium, claim, and policy-count data for North America',
    url: 'https://naphia.org/state-of-the-industry/',
    publisher: 'NAPHIA (North American Pet Health Insurance Association)',
  },
  {
    label: 'Pet Insurance Model Act and annual pet-insurance market reports',
    url: 'https://content.naic.org/',
    publisher: 'NAIC (National Association of Insurance Commissioners)',
  },
  {
    label: 'Consumer guidance on whether and how to buy pet insurance',
    url: 'https://www.consumerfinance.gov/',
    publisher: 'U.S. Consumer Financial Protection Bureau',
  },
  {
    label: 'Carrier-published Sample Policies and Schedules of Benefits, recorded by the editorial team',
    publisher: 'Vets.co Editorial',
  },
]

const FAQS = [
  {
    question: 'Is pet insurance worth it?',
    answer:
      'It depends on three things: your pet\'s breed and age risk profile, your cash buffer for an emergency, and your tolerance for a low-probability large bill. Mathematically, like all insurance, pet insurance has a negative expected value at the average claim level — that is how carriers stay solvent — so in a typical low-cost year a policy does not pay for itself. Its value is risk protection: it converts a rare $5,000–$15,000 emergency or chronic-condition course into a predictable monthly cost. If you could comfortably absorb a five-figure vet bill from savings, self-insuring is a defensible choice; if that bill would force a hard decision about your pet\'s care, insurance is doing exactly the job it is designed for. Use the breakeven line above to see, for a specific quote, the eligible-cost level at which the policy pays for itself.',
  },
  {
    question: 'At what age is pet insurance not worth it?',
    answer:
      'There is no single cutoff, but the economics shift with age in two ways. Premiums rise steeply for senior pets (often 10–30% per year at renewal), and any condition the pet already shows signs of is excluded as pre-existing — so enrolling a senior pet for the first time buys coverage only for new, unrelated conditions at a high premium. That can still be worth it for a breed prone to expensive late-life conditions, but the breakeven cost rises with the premium. The most favorable time to enroll is when the pet is young and healthy, locking in coverage before conditions become pre-existing. For an older pet already enrolled, dropping coverage is usually the more expensive mistake.',
  },
  {
    question: 'Does pet insurance cover pre-existing conditions?',
    answer:
      'No. Every major carrier permanently excludes pre-existing conditions — anything the pet showed signs of, was diagnosed with, or was treated for before the policy effective date or during the waiting period. A few carriers cover certain curable pre-existing conditions after a symptom-free window (commonly 12–18 months), but chronic and recurring conditions stay excluded for life. This is the single biggest reason the breakeven math can mislead: a policy with a great breakeven number is worthless for a condition your pet already has. Always read the carrier\'s definition of "pre-existing" in the Sample Policy before buying.',
  },
  {
    question: 'How does this calculator decide the breakeven point?',
    answer:
      'It finds the eligible-vet-cost level at which the policy\'s reimbursement exactly equals your annual premium. Reimbursement applies only to costs above the deductible, multiplied by the reimbursement percentage, then capped at the annual limit. So the breakeven eligible cost is: deductible + (annual premium ÷ reimbursement %). Below that level you pay more in premium than the policy returns; above it, the policy returns more than it costs. If the annual premium is larger than the annual payout cap, the premium can never be recovered within the cap, and the tool says so.',
  },
  {
    question: 'Why does the calculator usually show insurance "not paying for itself"?',
    answer:
      'Because in a typical year, that is the honest result. Insurance is priced so the average policyholder pays slightly more in premium than they receive in claims — the carrier\'s margin and the pooling of catastrophic risk both come out of that gap. The policy "pays off" in the years your pet has higher-than-average costs, which are exactly the years you most need it to. Reading a single low-cost year and concluding insurance is a bad deal is the same error as cancelling home insurance because your house did not burn down this year. The right question is not "will I save money on average?" but "do I want to convert a rare catastrophic bill into a predictable monthly cost?"',
  },
  {
    question: 'What is a realistic expected vet-cost number to enter?',
    answer:
      'Enter only eligible illness and accident costs — routine wellness is usually excluded. For a healthy mid-life dog or cat with no chronic conditions, a few hundred dollars a year is typical. A single non-routine workup (imaging, bloodwork, a treatment course) can run $1,000–$2,000. One major incident — a foreign-body surgery, a cruciate repair, a serious illness — commonly lands in the $3,000–$8,000 range, and cancer care or emergency hospitalization can exceed $10,000–$15,000. Because the catastrophic scenarios are rare but ruinous, the decision to insure is mostly about the right tail, not the average. The scenario presets above span that range.',
  },
]

export default function PetInsuranceWorthItPage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Is Pet Insurance Worth It?',
        subtitle:
          'A breakeven calculator and honest framing. See the eligible vet-cost level at which a policy pays for itself — and why, in most years, it should not.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Is Pet Insurance Worth It?' },
      ]}
      schema={[articleSchema, breadcrumbSchema]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Short answer', href: '#answer' },
              { label: 'The calculator', href: '#calculator' },
              { label: 'Next step', href: '#next-step' },
              { label: 'Worked example', href: '#example' },
              { label: 'Methodology', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Insurance references"
            links={[
              { label: 'Best Pet Insurance (comparison)', href: REVIEWS_HREF },
              { label: 'Coverage Finder', href: FINDER_HREF },
              { label: 'Reimbursement Estimator', href: '/tools/insurance-reimbursement-estimator' },
              { label: 'Pet Insurance Education', href: '/insurance' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="vets-co"
            title="Vets.co reference letter"
            subtitle="Veterinary references for pet owners."
            source="insurance-worth-it"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        {/* GEO: extractable plain-language answer near the top. Calibrated, honest,
            both-sides — not a sales pitch. Followed by a worked breakeven example. */}
        <h2 id="answer">Is pet insurance worth it? The short answer</h2>
        <p>
          <strong>It depends — mostly on your pet&apos;s risk profile and your cash buffer, not on whether you&apos;ll
          &ldquo;come out ahead&rdquo; on average.</strong> Like every kind of insurance, a pet policy is priced so the
          typical owner pays a little more in premiums than they get back in claims; that gap is how carriers stay
          solvent and pool the risk of rare, expensive events. So in most individual years a policy does <em>not</em>
          pay for itself, and that is by design. Its real value is protection against the right tail: the
          $5,000–$15,000 emergency surgery, cancer course, or chronic condition that would otherwise force a hard
          decision about your pet&apos;s care.
        </p>
        <p>
          Pet insurance is most worth it when (1) your pet is a breed or age prone to expensive conditions, (2) you
          could <em>not</em> comfortably absorb a five-figure vet bill from savings, and (3) you enroll while the pet is
          young and healthy, before conditions become pre-existing and excluded. It is least worth it when you have a
          large emergency fund you would readily spend on care, or when you try to enroll a senior pet whose likely
          future conditions are already pre-existing. The calculator below turns a specific carrier quote into a single
          <strong> breakeven number</strong> — the eligible vet-cost level at which the policy reimburses exactly what
          it costs.
        </p>

        <h2 id="calculator">The breakeven calculator</h2>
        <p>
          Enter a carrier quote and an expected eligible-cost scenario. The tool returns your annual premium, the
          modeled reimbursement at that cost level, and the breakeven line: <em>your insurance pays for itself if your
          eligible vet costs this year exceed $X</em>. Everything runs in your browser — your inputs never leave the
          page.
        </p>
        <PetInsuranceWorthItCalculator />

        {/* Result-state next step. Disclosed FTC banner ABOVE the monetized-adjacent
            links per QC §1. Links are internal review/finder pages — no /go routes,
            no carrier "buy" CTA, no superlatives. */}
        <div id="next-step" className="mt-6 rounded-lg border border-brand-border bg-brand-surface p-5 sm:p-6">
          <AffiliateDisclosure variant="inline" siteId="vets-co" className="mb-4" />
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary-dark mb-2">Next step</p>
          <p className="text-sm font-semibold text-brand-text-dark mb-1">
            You have a breakeven number — now pressure-test it against real policies.
          </p>
          <p className="text-xs text-brand-text-mid mb-4">
            Breakeven swings with the deductible, reimbursement %, annual cap, and which conditions a carrier excludes.
            Compare carriers on their published terms, then narrow to the ones whose coverage fits what you actually
            care about.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              href={REVIEWS_HREF}
              className="inline-block shrink-0 px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded hover:bg-brand-primary-light transition-colors text-center"
            >
              Compare carriers on published terms →
            </Link>
            <Link
              href={FINDER_HREF}
              className="inline-block shrink-0 px-5 py-2.5 border border-brand-border text-brand-text-dark text-sm font-semibold rounded hover:border-brand-primary transition-colors text-center"
            >
              Narrow by coverage priorities
            </Link>
          </div>
          <p className="mt-3 text-2xs text-brand-text-mid leading-relaxed">
            Our comparison ranks carriers on published coverage terms only — we never accept payment for favorable
            placement.{' '}
            <Link href="/disclosure" className="font-semibold text-brand-primary hover:underline no-underline">
              Disclosure →
            </Link>
          </p>
        </div>

        <h2 id="example">A worked breakeven example</h2>
        <p>
          Suppose a quote of <strong>$45/month</strong> ($540/year) with a <strong>$250 annual deductible</strong>,{' '}
          <strong>80% reimbursement</strong>, and a <strong>$10,000 annual cap</strong>. Reimbursement applies only to
          costs above the deductible, at 80%, so the policy pays for itself at the eligible-cost level where:
        </p>
        <ul>
          <li><strong>breakeven</strong> = deductible + (annual premium ÷ reimbursement %)</li>
          <li>= $250 + ($540 ÷ 0.80)</li>
          <li>= $250 + $675 = <strong>$925</strong></li>
        </ul>
        <p>
          So this policy pays for itself once eligible vet costs clear about <strong>$925</strong> in the year. Below
          that, you pay more in premium than you get back. Worked the other way: in a $300 healthy year the policy
          reimburses just ($300 − $250) × 80% = <strong>$40</strong> against $540 of premium — a $500 net cost, the
          expected outcome in a quiet year. In a $6,000 one-incident year it reimburses ($6,000 − $250) × 80% ={' '}
          <strong>$4,600</strong> against $540 of premium — a $4,060 net benefit. That asymmetry — small predictable cost most years, large
          payout in the bad year — is the whole point of insurance, and exactly what the breakeven line makes visible.
        </p>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The calculator uses the standard annual-deductible / fixed-percentage reimbursement structure used by most US
          pet-insurance carriers (Lemonade, Embrace, ASPCA, Healthy Paws, Pumpkin, Pets Best, Spot, ManyPets, and
          similar). The model:
        </p>
        <ul>
          <li><strong>annual premium</strong> = monthly premium × 12</li>
          <li><strong>reimbursable</strong> = max(0, eligible costs − deductible) × reimbursement %</li>
          <li><strong>reimbursed</strong> = min(reimbursable, annual cap)</li>
          <li><strong>reimbursement − premium</strong> = reimbursed − annual premium</li>
          <li><strong>breakeven eligible cost</strong> = deductible + (annual premium ÷ reimbursement %), provided the premium does not exceed the annual cap</li>
        </ul>
        <p>The model deliberately does <strong>not</strong> capture:</p>
        <ul>
          <li>Per-condition deductibles (Trupanion-style), which behave differently — pay once per condition, then unlimited for that condition</li>
          <li>Pre-existing, hereditary, congenital, or bilateral exclusions — these void coverage regardless of the breakeven math</li>
          <li>Waiting periods before coverage starts</li>
          <li>Premium increases at renewal as the pet ages (commonly 10–30%/year)</li>
          <li>The probability distribution of costs — the tool models a chosen scenario, not an expected value across all possible years</li>
          <li>State-specific regulation and filed-vs-quoted rate differences</li>
        </ul>
        <p>
          Because real value lives in the rare catastrophic year, no single-year breakeven number settles the decision
          on its own. Use the breakeven as one input, weigh it against your pet&apos;s risk profile and your cash
          buffer, and verify every figure against the carrier&apos;s Sample Policy and Schedule of Benefits before
          buying. This is a planning tool, not insurance or financial advice, and it does not guarantee savings.
        </p>
        <p className="text-sm">
          For the full claims-side accounting on a specific bill, use the{' '}
          <Link href="/tools/insurance-reimbursement-estimator">reimbursement estimator</Link>. To narrow carriers by
          the coverage features you care about, use the <Link href={FINDER_HREF}>coverage finder</Link>. For the
          clinical perspective on how policies differ, see <Link href={REVIEWS_HREF}>Best Pet Insurance</Link> and the{' '}
          <Link href="/insurance">Pet Insurance Education hub</Link>.
        </p>

        <ArticleSourcesList sources={SOURCES} />

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Ready to compare carriers? See <Link href={REVIEWS_HREF}>Best Pet Insurance</Link>, or start with the{' '}
          <Link href={FINDER_HREF}>coverage finder</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
