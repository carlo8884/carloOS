import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  ArticleLayout,
  ArticleByline,
  ArticleSourcesList,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://horses.com/tools/horse-cost-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Cost of Ownership Calculator | Horses.com',
  description:
    'Estimate the real cost of owning a horse: board, feed, farrier, vet, dental, vaccines, insurance, and startup. Free monthly + annual breakdown, 2026 US ranges.',
  path: '/tools/horse-cost-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate the cost of owning a horse',
  description:
    'Add up the recurring costs of horse ownership — boarding, feed and hay, farrier visits every six weeks, routine vet plus dental and vaccines, and optional insurance — to get a monthly and annual total, then add one-time startup costs separately.',
  url: URL,
  totalTime: 'PT5M',
  steps: [
    {
      name: 'Pick a boarding arrangement',
      text: 'Choose full board, partial/pasture board, pasture board, or self-care, and set a realistic monthly dollar figure. Boarding is usually the largest single line item and the most regionally variable, commonly $150–1,200+/mo.',
    },
    {
      name: 'Add feed and hay',
      text: 'Enter monthly supplemental feed and hay beyond what board provides. Self-care and home-kept owners should raise this to cover all forage and bedding.',
    },
    {
      name: 'Add the farrier',
      text: 'Enter a per-visit farrier cost; the calculator assumes a visit roughly every six weeks (about 8.7 visits/year). A barefoot trim runs less than full shoeing.',
    },
    {
      name: 'Add routine vet care',
      text: 'Enter an annual figure covering spring and fall wellness exams, core vaccines, and a yearly dental float. This excludes emergencies and lameness work, which you should budget for separately.',
    },
    {
      name: 'Add insurance and startup, then read the totals',
      text: 'Optionally toggle insurance (major-medical plus mortality) and one-time startup costs (tack and the pre-purchase exam). The calculator returns a monthly and annual recurring total with a per-category breakdown. Treat every figure as an estimate and build an emergency fund on top.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Cost of Ownership Calculator',
  url: URL,
  applicationCategory: 'FinanceApplication',
  applicationSubCategory: 'EquineBudgetCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free horse cost-of-ownership estimator. Inputs: boarding type and monthly cost, feed/hay, farrier per-visit cost (every ~6 weeks), routine vet/dental/vaccines (annual), optional insurance, and optional one-time startup costs. Outputs: estimated monthly and annual total with a per-category breakdown using realistic 2026 US ranges.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Editable board, feed, farrier, vet, insurance, and startup inputs',
    'Board-type presets (full / partial / pasture / self-care) with 2026 US range guidance',
    'Farrier costed on a ~6-week cycle (~8.7 visits/year)',
    'Monthly and annual totals with a per-category breakdown table',
    'Estimates framed against large regional and individual variation',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'How much does it cost to own a horse?',
    answer:
      'For most US owners, the recurring cost of keeping one horse runs roughly $300–1,000+ per month, or about $4,000–12,000+ per year, before any emergencies. Boarding is the largest and most variable line item: full board commonly runs $400–1,200+/mo near metros, while pasture board or keeping at home can be far less. On top of board, budget for feed and hay, farrier visits every ~6 weeks, routine vet care with annual dental and vaccines, and optionally insurance. One-time startup costs — tack, the pre-purchase exam, and the purchase price of the horse itself — sit outside the monthly budget. Use the calculator above with real local quotes for your own number.',
  },
  {
    question: 'What is the most expensive part of owning a horse?',
    answer:
      'For most owners, boarding is the single largest recurring expense — often half or more of the monthly budget — because it bundles facilities, feed, turnout, and labor. The next largest costs are usually feed and hay (especially for self-care or home-kept horses), the farrier on a roughly six-week cycle, and routine veterinary care. The cost that blindsides owners, though, is the unbudgeted one: a colic surgery, a serious lameness, or a long course of treatment can run into the thousands. That is why an emergency fund or insurance belongs in every honest horse budget.',
  },
  {
    question: 'How often does a horse need the farrier and what does it cost?',
    answer:
      'Most horses are trimmed or reshod about every six to eight weeks to keep the hoof balanced as it grows, which works out to roughly eight or nine visits a year. A barefoot trim is the least expensive option; a full set of shoes costs more, and corrective or specialty shoeing more again. Exact prices vary widely by region and by the farrier’s travel and skill. The calculator above lets you enter a per-visit figure and assumes a six-week cycle so the annual farrier line reflects your local rate.',
  },
  {
    question: 'Should I budget for horse insurance?',
    answer:
      'Insurance is optional and worth weighing against your savings. Major-medical and mortality cover spreads the risk of a large unexpected vet bill across a predictable monthly premium, which depends on the horse’s value, age, and use. Some owners prefer to self-insure by keeping a dedicated emergency fund instead. Either way, plan for the possibility of a four-figure vet event — the mistake is budgeting only for routine care and having no cushion when something goes wrong. The calculator includes an optional insurance line so you can compare both approaches.',
  },
  {
    question: 'How accurate is this horse cost calculator?',
    answer:
      'It is an estimate, not a quote. The seeded defaults reflect commonly published 2026 US ranges, but every figure is editable because real costs vary enormously by region, by the individual horse, and by how you keep it. Board near a major metro, shoeing versus barefoot, an older horse’s dental and joint needs, and a single emergency can each shift the total by hundreds or thousands of dollars. Use the calculator to build a realistic baseline, then replace the defaults with actual local quotes before you commit.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Tools', url: 'https://horses.com/tools' },
    { name: 'Horse Cost of Ownership Calculator', url: URL },
  ],
})

const schema = combineSchemas(howToSchema, breadcrumbSchema)

export default function HorseCostCalculatorPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Cost of Owning a Horse (Guide)', href: '/ownership/cost-of-owning-a-horse', category: 'Ownership' },
        { title: 'Boarding Options', href: '/ownership/boarding-options', category: 'Ownership' },
        { title: 'Horse Insurance', href: '/ownership/horse-insurance', category: 'Ownership' },
        { title: 'Horse Feed & Hay Calculator', href: '/tools/horse-feed-calculator', category: 'Tools' },
      ]}
      hero={{
        title: 'Horse Cost of Ownership Calculator',
        subtitle:
          'Estimate the true monthly and annual cost of keeping a horse — board, feed, farrier, vet, dental, vaccines, insurance, and one-time startup — using realistic 2026 US ranges.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Horse Cost of Ownership Calculator' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'What goes into the cost', href: '#categories' },
              { label: 'How it works', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Ownership & budgeting"
            links={[
              { label: 'Cost of Owning a Horse', href: '/ownership/cost-of-owning-a-horse' },
              { label: 'Boarding Options', href: '/ownership/boarding-options' },
              { label: 'Horse Insurance', href: '/ownership/horse-insurance' },
              { label: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
              { label: 'First Horse Roadmap', href: '/first-horse-roadmap' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Horses.com owner letter"
            subtitle="Horse-care references and tool updates."
            source="cost-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Horses.com Editorial"
          publishedAt="2026-06-11"
          updatedAt="2026-06-11"
          reviewedBy="Editorial team"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <p>
          <strong>The quick answer:</strong> for most US owners, keeping one horse costs roughly{' '}
          <strong>$300&ndash;1,000+ per month</strong>, or about{' '}
          <strong>$4,000&ndash;12,000+ per year</strong>, before emergencies. Boarding is the largest and
          most variable piece (commonly $150&ndash;1,200+/mo); on top of it you budget for feed and hay,
          a farrier every ~6 weeks, routine vet care with annual dental and vaccines, and optionally
          insurance. One-time startup &mdash; tack, the pre-purchase exam, and the horse itself &mdash;
          sits outside the monthly number. The calculator below builds your own estimate from editable
          inputs.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Choose a boarding arrangement, then adjust each line to a realistic figure for your area. The
          tool returns a monthly and annual recurring total with a per-category breakdown, plus an
          optional one-time startup estimate. Every default is editable &mdash; replace them with real
          local quotes for the most accurate result.
        </p>
        <Calculator />

        <h2 id="categories">What goes into the cost of a horse</h2>
        <p>
          A horse budget is the sum of a handful of recurring categories plus a one-time startup. Seeded
          defaults reflect commonly published 2026 US ranges; treat them as a starting point, not a quote.
        </p>
        <ul>
          <li>
            <strong>Boarding</strong> &mdash; full board commonly $400&ndash;1,200+/mo; partial/pasture
            board $150&ndash;600/mo; self-care or home keeping shifts cost to hay, bedding, land, and
            labor. Usually the biggest line item. See <Link href="/ownership/boarding-options">boarding options</Link>.
          </li>
          <li>
            <strong>Feed &amp; hay</strong> &mdash; supplemental forage and grain beyond what board
            provides. Plan a forage-first ration; the <Link href="/tools/horse-feed-calculator">feed &amp; hay calculator</Link> sets a daily target.
          </li>
          <li>
            <strong>Farrier</strong> &mdash; trimming or shoeing every ~6&ndash;8 weeks, roughly 8&ndash;9 visits a year. Barefoot trims cost less than a full set of shoes. See the <Link href="/care/farrier-schedule">farrier schedule</Link>.
          </li>
          <li>
            <strong>Routine vet, dental &amp; vaccines</strong> &mdash; spring/fall wellness exams, core
            vaccines, and an annual dental float. Excludes emergencies and lameness work, which you must
            budget for separately.
          </li>
          <li>
            <strong>Insurance (optional)</strong> &mdash; major-medical and mortality cover, priced on the
            horse&rsquo;s value, age, and use. See <Link href="/ownership/horse-insurance">horse insurance</Link>.
          </li>
          <li>
            <strong>One-time startup</strong> &mdash; tack and equipment, the <Link href="/ownership/pre-purchase-exam">pre-purchase exam</Link>, and the purchase price of the horse itself.
          </li>
        </ul>

        <h2 id="methodology">How it works &amp; limits</h2>
        <p>
          The calculator converts each input to a common timescale and sums it. Monthly figures (board,
          feed, insurance) are multiplied by twelve for the annual column; annual figures (routine vet) are
          divided by twelve for the monthly column. The farrier is costed per visit on a six-week cycle,
          which is about 8.7 visits a year, so the annual farrier line equals the per-visit cost times 8.7.
          Startup costs are shown separately and are not folded into the recurring totals.
        </p>
        <p>The estimate does <strong>not</strong>:</p>
        <ul>
          <li>Quote a specific barn, farrier, or vet &mdash; defaults are published-range starting points</li>
          <li>Include emergencies, surgery, lameness work-ups, or long-term medication</li>
          <li>Include the purchase price of the horse, which ranges from free rehomes to six figures</li>
          <li>Account for board near a major metro, show fees, training, hauling, or competition costs</li>
        </ul>
        <p>
          Use it to build a realistic baseline, then layer an emergency fund on top: a single colic surgery
          or serious lameness can exceed a year of routine costs. New owners should walk the whole budget in
          the <Link href="/ownership/cost-of-owning-a-horse">cost-of-owning-a-horse guide</Link> and the{' '}
          <Link href="/first-horse-roadmap">first-horse roadmap</Link> before committing.
        </p>

        <h2 id="sources">Sources</h2>
        <ArticleSourcesList
          sources={[
            {
              label:
                'University of Maine Cooperative Extension — The Cost of Keeping a Horse (annual budget categories and ranges).',
              url: 'https://extension.umaine.edu/publications/',
              publisher: 'UMaine Extension',
            },
            {
              label:
                'Penn State Extension — Horse Stable Management & the costs of horse ownership (board, feed, farrier, health-care budgeting).',
              url: 'https://extension.psu.edu/horses-and-horse-stables',
              publisher: 'Penn State Extension',
            },
            {
              label:
                'University of Minnesota Extension — Horse care and management (routine health, dental, and vaccination scheduling).',
              url: 'https://extension.umn.edu/horse-care-and-management',
              publisher: 'UMN Extension',
            },
            {
              label:
                'American Association of Equine Practitioners (AAEP) — Core vaccination guidelines and routine wellness recommendations.',
              url: 'https://aaep.org/resource/core-vaccination-guidelines/',
              publisher: 'AAEP',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Horses.com Editorial cites these extension-service and industry references as the basis for the
          budget categories and cost ranges. The calculator output is a planning estimate; it is not a
          quote and implies no veterinary or financial advice.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Next: set a forage target with the{' '}
          <Link href="/tools/horse-feed-calculator">horse feed &amp; hay calculator</Link>, and read the
          full <Link href="/ownership/cost-of-owning-a-horse">cost-of-owning-a-horse guide</Link> before you
          buy.
        </p>

        <CrossPortfolioCard currentSite="horses-com" contentType="tool" />
      </div>
    </ArticleLayout>
  )
}
