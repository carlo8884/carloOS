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
  ArticleByline,
  AffiliateDisclosure,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://fish.com/tools/filter-gph-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Filter GPH Calculator',
  description:
    'How much filter flow does your tank need? Enter gallons and tank style for a GPH turnover range — community, goldfish, cichlid, or reef.',
  path: '/tools/filter-gph-calculator',
})

const schema = buildHowToSchema({
  name: 'How to size an aquarium filter by GPH',
  description:
    'Multiply tank gallons by a turnover band for the tank style to get a gallons-per-hour filter-flow range, then buy the next size up from the manufacturer rating.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Find net water volume',
      text: 'Use the labeled gallons or the volume calculator. Decor and substrate reduce net volume; when in doubt, size up.',
    },
    {
      name: 'Pick the tank style',
      text: 'Community and planted tanks typically want 4–6× turnover; goldfish 6–10×; cichlids 8–10×; reef display return plus powerheads 10–20×.',
    },
    {
      name: 'Multiply gallons by the band',
      text: 'A 20-gallon community tank at 4–6× needs about 80–120 GPH. A 75-gallon goldfish tank at 6–10× needs about 450–750 GPH.',
    },
    {
      name: 'Buy above the box rating',
      text: 'Manufacturer “rated for 55 gallons” assumes light stocking. Choose a filter whose real GPH clears your midpoint, or the next size up.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Filter GPH Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive aquarium filter flow calculator. Inputs: tank gallons and tank style. Output: recommended GPH turnover range and filter class (HOB, canister, nano, or sump).',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Turnover bands for community, planted, goldfish, cichlid, and reef tanks',
    'GPH range from gallons × min/max turnover',
    'Filter-class hint (nano sponge / HOB / canister / sump)',
    'Links to existing Amazon filter and nano-tank hops',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const FAQS = [
  {
    question: 'How many GPH does my aquarium filter need?',
    answer:
      'Multiply tank gallons by a turnover band for the style of tank. Community freshwater is usually 4–6 times the tank volume per hour (a 20-gallon tank → about 80–120 GPH). Goldfish and other messy fish need more; reef tanks need still more when you count powerheads. Buy above the manufacturer “rated for X gallons” label.',
  },
  {
    question: 'Is the inch-per-gallon rule the same as filter GPH?',
    answer:
      'No. Inch-per-gallon is a discredited stocking rule. Filter GPH is flow — how many times the filter can turn the tank volume over in an hour. Stocking still belongs on the stocking calculator, which uses surface area and bioload rather than inches per gallon.',
  },
  {
    question: 'Should I trust “rated for 55 gallons” on the box?',
    answer:
      'Treat it as optimistic. Those ratings assume light stocking and clean media. Size one step up from the label, or match the real GPH number this calculator gives you. An oversized filter is cheaper than an ammonia spike.',
  },
  {
    question: 'What filter do I need for a 10-gallon nano tank?',
    answer:
      'A 10-gallon community tank at 4–6× wants about 40–60 GPH. A sponge filter or a small hang-on-back is enough if you keep the bioload honest. Purpose-built nano kits (the same hops as the nano-tank review) often include a filter already sized for that volume.',
  },
  {
    question: 'Does more GPH let me keep more fish?',
    answer:
      'Only up to a point. Extra flow helps waste export and oxygen, which is why the stocking calculator raises capacity when filtration is oversized. It does not erase schooling needs, territory, or body mass. Use both tools: GPH for the filter, stocking for the fish.',
  },
]

export default function FilterGphCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Filter GPH Calculator',
        subtitle:
          'How much filter flow does your tank need? Gallons and tank style in, a GPH turnover range out — then buy one size up from the box rating.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'September 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Filter GPH Calculator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Tools' },
        { title: 'Stocking Calculator', href: '/tools/stocking-calculator', category: 'Tools' },
        { title: 'Heater Wattage Calculator', href: '/tools/heater-wattage-calculator', category: 'Tools' },
        { title: 'Water Change Calculator', href: '/tools/water-change-calculator', category: 'Tools' },
        { title: 'Aquarium Setup Builder', href: '/tools/aquarium-setup-builder', category: 'Tools' },
        { title: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters', category: 'Reviews' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Turnover by tank style', href: '#bands' },
              { label: 'Rated-for vs real GPH', href: '#rated' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Equipment"
            links={[
              { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' },
              { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' },
              { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' },
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Heater Wattage', href: '/tools/heater-wattage-calculator' },
              { label: 'Aquarium Setup Builder', href: '/tools/aquarium-setup-builder' },
              { label: 'Water Change Calculator', href: '/tools/water-change-calculator' },
              { label: 'Equipment Guides', href: '/equipment' },
            ]}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <ArticleByline
          siteName="Fish.com Editorial"
          publishedAt="2026-09-03T00:00:00Z"
          updatedAt="2026-09-03T00:00:00Z"
          reviewedBy="Editorial team"
        />
        <h2 id="calculator">The Calculator</h2>
        <Calculator />

        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <EmailCapture
          variant="inline"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Filter sizing, stocking, and equipment notes. No spam."
          source="tools-filter-gph-calculator"
        />

        <h2 id="bands">Turnover by tank style</h2>
        <p>
          Turnover is how many times per hour the filter can move the tank&apos;s volume. It is a
          starting band, not a law — media volume, maintenance, and the actual fish matter more than
          a single number.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Tank style</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Turnover</th>
                <th className="text-left py-2 font-semibold text-brand-dark">20 gal example</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Community / planted</td>
                <td className="py-2 pr-4">4–6×</td>
                <td className="py-2">80–120 GPH</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Goldfish / heavy bioload</td>
                <td className="py-2 pr-4">6–10×</td>
                <td className="py-2">120–200 GPH</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Cichlids</td>
                <td className="py-2 pr-4">8–10×</td>
                <td className="py-2">160–200 GPH</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Reef (return + powerheads)</td>
                <td className="py-2 pr-4">10–20×</td>
                <td className="py-2">200–400 GPH</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          After you have a GPH number, check whether the stocking still fits —{' '}
          <Link href="/tools/stocking-calculator">stocking calculator</Link> — whether the heater
          is sized for the same volume —{' '}
          <Link href="/tools/heater-wattage-calculator">heater wattage calculator</Link> — and how
          many gallons the weekly siphon should be with the{' '}
          <Link href="/tools/water-change-calculator">water change calculator</Link>. For model
          picks see{' '}
          <Link href="/reviews/best-aquarium-filters">aquarium filter reviews</Link> and{' '}
          <Link href="/reviews/best-nano-tanks">nano tank reviews</Link>. Building the rest of
          the kit? Start with the{' '}
          <Link href="/tools/aquarium-setup-builder">aquarium setup builder</Link>.
        </p>

        <h2 id="rated">Rated-for vs real GPH</h2>
        <p>
          A filter &quot;rated for 55 gallons&quot; is a marketing number. Real flow drops as the
          media loads with debris. The useful move is to read the published GPH (or the next size
          up) and compare it to the midpoint this calculator gives you. Oversizing is the cheapest
          way to raise the stocking ceiling the other tool computes.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />
      </div>
    </ArticleLayout>
  )
}
