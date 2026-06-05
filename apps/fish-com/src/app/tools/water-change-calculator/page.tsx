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
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://fish.com/tools/water-change-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Water Change Calculator — Nitrate & Dilution Math | Fish.com',
  description: 'Calculate the % water change needed to lower nitrate, TDS, GH, or salinity to a safe target. Includes multi-change planning for large reductions.',
  path: '/tools/water-change-calculator',
})

const schema = buildHowToSchema({
  name: 'How to calculate an aquarium water change',
  description: 'Use the dilution equation to figure out what percentage water change you need to reach a target nitrate, TDS, or hardness level.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    { name: 'Test the parameter', text: 'Measure current nitrate, TDS, GH, or whatever parameter you\'re trying to reduce. Use a liquid test kit for accuracy.' },
    { name: 'Measure source water', text: 'Test the same parameter in your tap or RO water. Most tap water reads 0 ppm nitrate but can have meaningful TDS or GH.' },
    { name: 'Apply the dilution formula', text: 'Water change fraction = (current - target) / (current - source). Multiply by tank volume to get gallons to replace.' },
    { name: 'Cap individual changes at 50%', text: 'Single water changes larger than 50% are stressful even with matched parameters. For larger reductions, spread across 2–4 changes 24–48 hours apart.' },
    { name: 'Fix the cause for chronic problems', text: 'Recurring high nitrate means too much feeding, too much stocking, or too little filtration/plants. A water change is treatment, not cure.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Water Change Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive aquarium water change calculator. Uses the dilution equation to compute the percent water change required to bring nitrate, TDS, GH, or salinity down to a target value, with multi-change planning for large reductions.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Dilution formula: fraction = (current − target) / (current − source)',
    'Accepts non-zero source-water values (tap water with nitrate, TDS, or GH)',
    'Caps single changes at 50% and splits larger reductions across sessions',
    'Salinity reduction mode with 0.001 SG per day reef guidance',
    'Sustainable weekly-schedule guidance by tank type',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const FAQS = [
  {
    question: 'How big a water change is safe?',
    answer: 'Up to 50% in a single change is safe if you match temperature (within 2°F), dose dechlorinator, and parameters are close. Larger changes work but raise the risk of pH or osmotic shock. For very high nitrate (100+ ppm), bring it down over 3–4 changes of 30–40% each rather than one giant change.',
  },
  {
    question: 'How often should I do water changes?',
    answer: 'For most community tanks, 25% weekly maintains stable parameters. Heavily stocked tanks, planted tanks dosing fertilizers, or fry tanks may need 50% twice weekly. Lightly stocked, heavily planted, or low-tech tanks can stretch to 25% biweekly. Test nitrate — if it stays under 20 ppm, your schedule is fine.',
  },
  {
    question: 'What if my tap water already has nitrate?',
    answer: 'Tap water with measurable nitrate (some municipal water supplies hit 10–20 ppm) limits how low you can go with water changes alone. Solutions: an RO/DI unit to make pure source water, more live plants to consume nitrate biologically, or a denitrator (advanced setup). Our calculator accounts for source nitrate so the math stays honest.',
  },
  {
    question: 'Do I need to match pH and hardness when changing water?',
    answer: 'Match temperature always. Match pH/GH only if you\'re doing very large changes (>50%) or keeping sensitive species (discus, German rams, soft-water shrimp). For most community tanks doing weekly 25% changes, fish adapt to small parameter drifts. Sudden large swings cause stress; gradual matches do not.',
  },
  {
    question: 'How does the water change calculator handle salinity?',
    answer: 'For salinity reduction, the calculator gives the % of tank water to replace with freshwater (or lower-salinity water) to hit your target. Always reduce salinity gradually for saltwater fish — drop no more than 0.001 SG per day for reef tanks.',
  },
]

export default function WaterChangeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Water Change Calculator',
        subtitle: 'Find the exact % water change needed to bring nitrate, TDS, GH, or salinity down to a safe target. Includes multi-change planning for large reductions.',
        category: 'Calculators',
        categoryHref: '/tools',
        authorAvatar: '💧',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Water Change Calculator' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Tools Hub", href: "/tools", category: "Tools" }, { title: "Aquarium Volume Calculator", href: "/tools/aquarium-volume-calculator", category: "Tools" }, { title: "Nitrogen Cycle Explained", href: "/health/nitrogen-cycle-explained", category: "Fish Health" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'How dilution works', href: '#dilution' },
              { label: 'Water-change schedule', href: '#schedule' },
              { label: 'Fix chronic nitrate', href: '#chronic' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Related"
            links={[
              { label: 'Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
              { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
              { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Water-chemistry tips every Thursday."
            source="water-change-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-05-01T00:00:00Z" updatedAt="2026-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2 id="calculator">The Calculator</h2>
        <Calculator />

        <h2 id="dilution">How Dilution Works</h2>
        <p>
          Every water change is a dilution. The fraction you replace ends up at source-water concentration, the fraction you leave stays at tank concentration.
          The math is straightforward:
        </p>
        <pre className="bg-brand-surface p-4 rounded text-sm overflow-x-auto">
          fraction_to_change = (current − target) / (current − source)
        </pre>
        <p>
          If your nitrate is 60 ppm, you want 20 ppm, and your tap water has 0 ppm nitrate:{' '}
          <strong>(60 − 20) / (60 − 0) = 0.667 = 67%</strong>. That&apos;s too large for one change — better to do two 50% changes 24 hours apart.
        </p>

        <h2 id="schedule">A Sustainable Water-Change Schedule</h2>
        <ul>
          <li><strong>Standard community tank:</strong> 25% weekly. Hits nitrate, replenishes trace minerals, removes dissolved organics.</li>
          <li><strong>Heavily stocked or large fish:</strong> 30–50% weekly, sometimes 25% twice weekly.</li>
          <li><strong>Heavily planted / low-tech:</strong> 25% every 10–14 days, monitor nitrate.</li>
          <li><strong>Quarantine / hospital tank:</strong> 50% daily during active treatment; matched temperature and dechlorinated.</li>
          <li><strong>Saltwater reef:</strong> 10–15% weekly with matched-salinity replacement water. Some advanced reefers do less if running ICP testing.</li>
        </ul>

        <h2 id="chronic">If You&apos;re Always Behind on Nitrate</h2>
        <p>
          A water change is symptom relief. If you need 50% twice a week to keep nitrate under control, the root cause is one of:
        </p>
        <ul>
          <li><strong>Overfeeding.</strong> The most common cause. Cut to once a day, what fish finish in 30 seconds.</li>
          <li><strong>Overstocking.</strong> Use our <Link href="/tools/stocking-calculator">stocking calculator</Link> to check — most overstocked tanks are 2–3× over.</li>
          <li><strong>Undersized filter.</strong> Bio-media volume matters more than flow rate. Upgrade to a canister or add a second filter.</li>
          <li><strong>Few or no live plants.</strong> Even low-light plants (anubias, java fern, amazon sword) consume nitrate as fertilizer.</li>
        </ul>
        <p>
          Test before water changes, not just after — that&apos;s how you know if your routine is actually working.
          See our <Link href="/reviews/best-water-test-kits">test kit reviews</Link> for accurate liquid options.
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
