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
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://fish.com/tools/aquarium-cycling-estimator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Cycling Time Estimator — How Long Will It Take? | Fish.com',
  description: 'Estimate aquarium cycling time by method (fishless ammonia, bottled bacteria, used media, fish-in) and water temperature. Phase-by-phase timeline.',
  path: '/tools/aquarium-cycling-estimator',
})

const schema = buildHowToSchema({
  name: 'How to estimate aquarium cycling time',
  description:
    'Use the cycling method (fishless ammonia, bottled bacteria, used filter media, fish-in) and water temperature to estimate the days to complete a freshwater nitrogen cycle, with phase-by-phase milestones.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Pick a cycling method',
      text: 'Fishless ammonia is the most reliable (4-6 weeks). Bottled bacteria starter accelerates to 2-3 weeks. Used filter media from a healthy established tank cycles fastest at 1-2 weeks. Fish-in cycling is slowest and exposes fish to toxic ammonia / nitrite — not recommended.',
    },
    {
      name: 'Note tank temperature',
      text: 'Cycling bacteria are most active around 78-84°F. Cool water (below 72°F) slows the cycle noticeably; very warm water (above 90°F) also stresses the bacteria.',
    },
    {
      name: 'Read the estimated timeline',
      text: 'The estimator returns a total cycle time plus four typical stages: ammonia rise, nitrite spike, nitrate appears, cycle complete.',
    },
    {
      name: 'Verify with a test kit',
      text: 'The only ground-truth signal is a test reading 0 ppm ammonia AND 0 ppm nitrite within 24 hours of a 4 ppm ammonia dose. Estimates are starting points; real cycles can stall or accelerate by 1-3 weeks beyond the typical range.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Cycling Time Estimator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive aquarium nitrogen-cycle time estimator. Inputs: cycling method (fishless ammonia, bottled bacteria, used filter media, fish-in) and tank temperature in °F. Outputs: total cycle time in days, typical range, four-phase stage timeline, and temperature-effect explanation.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    '4 cycling methods modeled (fishless ammonia, bottled bacteria, used media, fish-in)',
    'Temperature multiplier for cool / optimal / warm water ranges',
    'Phase-by-phase milestones (ammonia rise, nitrite spike, nitrate appears, completion)',
    'Welfare note on fish-in cycling',
    'Explicit "verify with test kit" framing — estimator, not measurement',
  ],
  publisher: { '@type': 'Organization', name: 'Fish.com Editorial', url: 'https://fish.com' },
}

const FAQS = [
  {
    question: 'What is "cycling" an aquarium?',
    answer:
      'Cycling is establishing the colonies of nitrifying bacteria (Nitrosomonas and Nitrobacter / Nitrospira) on filter media that convert toxic ammonia → nitrite → much-less-toxic nitrate. Without an established cycle, fish waste accumulates as ammonia and poisons the tank. The cycle is the single most important step in setting up a new aquarium.',
  },
  {
    question: 'How do I know the cycle is finished?',
    answer:
      'The standard test: dose the tank to ~4 ppm ammonia. If both ammonia AND nitrite read 0 ppm within 24 hours, the cycle is complete. Nitrate will read 40-80 ppm — do a 50% water change to bring it under 40 ppm before adding fish. Bottled bacteria products sometimes lead to "false complete" readings; the dose-and-wait test is the only reliable signal.',
  },
  {
    question: 'Why does temperature matter so much?',
    answer:
      'Nitrifying bacteria grow most actively between 78-84°F. Below 72°F, growth slows noticeably; below 65°F it slows dramatically. Above 90°F the bacteria are stressed. For tropical setups (78°F) the cycle runs at near-optimal speed; cold-water (goldfish, coldwater natives) tanks cycle 30-80% slower.',
  },
  {
    question: 'Will live plants speed up cycling?',
    answer:
      'Heavily planted "Walstad-method" tanks can run without a traditional cycle because plants directly consume ammonia. For a typical low-plant tank, plants help slightly but do not replace the bacterial cycle. The estimator assumes a non-planted or lightly-planted setup.',
  },
  {
    question: 'My cycle stalled at the nitrite phase — what now?',
    answer:
      'Nitrite stalls are the most common cycle failure. Causes include: pH below 7 (Nitrobacter struggle in acidic water), insufficient surface area on filter media, dechlorinator that removes ammonia (e.g. Prime overdosed), or running out of ammonia source. Verify pH ≥ 7, check the filter media area, and continue dosing ammonia to 2-4 ppm whenever it reads zero. Patience usually wins.',
  },
  {
    question: 'Is fish-in cycling ever acceptable?',
    answer:
      'Only when truly unavoidable — e.g. an unplanned tank crash where fish must be moved. Even then, daily 25-50% water changes are required to keep ammonia and nitrite under 0.25 ppm; the alternative is significant gill damage and elevated mortality. The estimator includes fish-in as a modeled method but flags it as a welfare concern.',
  },
]

export default function AquariumCyclingEstimatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Cycling Time Estimator',
        subtitle:
          'How long will my new tank take to cycle? Pick a method and temperature; the estimator returns days to completion and a phase-by-phase timeline.',
        category: 'Calculators',
        categoryHref: '/tools',
        authorAvatar: '🔬',
        publishedAt: 'May 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Cycling Estimator' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Tools Hub", href: "/tools", category: "Tools" }, { title: "Aquarium Cycling Guide", href: "/setup/aquarium-cycling-guide", category: "Tank Setup" }, { title: "Aquarium Volume Calculator", href: "/tools/aquarium-volume-calculator", category: "Tools" }, { title: "Water Change Calculator", href: "/tools/water-change-calculator", category: "Tools" }]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The estimator', href: '#estimator' },
              { label: 'Method comparison', href: '#methods' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Setup &amp; water"
            links={[
              { label: 'Water Parameters', href: '/water-parameters' },
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Aquarium Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Heater Wattage Calculator', href: '/tools/heater-wattage-calculator' },
              { label: 'Water Change Calculator', href: '/tools/water-change-calculator' },
              { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Setup and water-chemistry tips every Thursday."
            source="cycling-estimator"
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
          Choose your cycling method and tank temperature. The estimator returns a total cycle time, a typical range, and a four-phase timeline (ammonia rise → nitrite spike → nitrate appears → cycle complete).
        </p>
        <Calculator />

        <h2 id="methods">Method comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Method</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Typical time</th>
                <th className="text-left py-2 font-semibold text-brand-dark">Best for</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-dark">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Fishless ammonia</td><td className="py-2 pr-4">28-42 days</td><td className="py-2">Reliable; no fish needed; well-documented</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">+ Bottled bacteria</td><td className="py-2 pr-4">14-25 days</td><td className="py-2">First-time setups with a target stocking date</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">+ Used filter media</td><td className="py-2 pr-4">7-14 days</td><td className="py-2">Fastest path; requires access to an established healthy tank</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Fish-in cycling</td><td className="py-2 pr-4">28-56 days</td><td className="py-2">Emergencies only — exposes fish to toxic ammonia / nitrite</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The estimator uses published per-method baseline timelines (drawn from keeper literature) and applies a temperature multiplier to account for cycling-bacteria growth-rate dependence on water temperature.
        </p>
        <p>
          The model does <strong>not</strong> account for:
        </p>
        <ul>
          <li>Specific filter media surface area (bio-balls vs. ceramic vs. sponge vs. matrix — different surface areas)</li>
          <li>pH below 6.8 (Nitrobacter struggle in acidic water; cycles can stall)</li>
          <li>Residual chemicals in new tanks (anti-corrosion coatings, cleaner residues)</li>
          <li>Bottled bacteria product quality (Tetra SafeStart vs. Dr Tim&apos;s vs. Stability — different efficacy)</li>
          <li>Heavily planted tanks (plants can directly consume ammonia, reducing apparent cycle time)</li>
          <li>Brackish or marine setups (different bacterial profiles)</li>
        </ul>
        <p>
          The only reliable signal that a cycle is complete is the dose-and-wait test: 4 ppm ammonia + 24 hours → 0 ppm ammonia AND 0 ppm nitrite. Use the estimator to plan; use a test kit to confirm.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Hovanec, T. A., &amp; DeLong, E. F. (1996). Comparative analysis of nitrifying bacteria associated with freshwater and marine aquaria. <em>Applied and Environmental Microbiology</em>, 62(8), 2888-2896.</li>
          <li>Hagopian, D. S., &amp; Riley, J. G. (1998). A closer look at the bacteriology of nitrification. <em>Aquacultural Engineering</em>, 18(4), 223-244.</li>
          <li>Spotte, S. (1992). <em>Captive Seawater Fishes: Science and Technology</em>. Wiley-Interscience. (Nitrogen-cycle chapters apply broadly to freshwater as well.)</li>
          <li>Tropical Fish Magazine and Practical Fishkeeping — multi-decade keeper-community consensus on fishless cycling protocols.</li>
        </ul>
        <p className="text-sm text-brand-text-light">
          Fish.com Editorial cites these as the published basis for the per-method baseline timelines and temperature multiplier used by the estimator. No in-house bench testing is implied or claimed.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Pair the estimator with our <Link href="/water-parameters">water parameters reference</Link> and <Link href="/reviews/best-water-test-kits">test kit reviews</Link>. New aquarists: this is the single most important step in your setup.
        </p>
      </div>
    </ArticleLayout>
  )
}
