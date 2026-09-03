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
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://fish.com/tools/water-change-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Water Change Calculator',
  description:
    'How much water should you change? Enter tank gallons or liters, fill %, and change % for gallons to remove — plus weekly schedule tips by bioload.',
  path: '/tools/water-change-calculator',
})

const schema = buildHowToSchema({
  name: 'How to calculate an aquarium water change',
  description:
    'Multiply filled tank volume by the change percentage to get gallons or liters to remove and replace, then match temperature and dose dechlorinator.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Find filled volume',
      text: 'Start with labeled tank gallons (or liters). If the tank is not full, multiply by current fill percent. Decor and substrate reduce net volume — when in doubt, use the volume calculator.',
    },
    {
      name: 'Pick a change percent',
      text: 'A standard community tank is 25% weekly. Heavy bioload (goldfish, large cichlids) is 30–50% weekly. Reef tanks usually do 10–15% with matched-salinity water. Cap a single change at 50%.',
    },
    {
      name: 'Multiply filled volume by the percent',
      text: 'Gallons to remove = filled gallons × (change % ÷ 100). A 40-gallon tank at 100% fill and 25% change is 10 gallons to siphon and replace.',
    },
    {
      name: 'Match temperature and condition the new water',
      text: 'New water should be within 2°F of the tank. Dose dechlorinator for any tap water before it touches the tank. Vacuum gravel while you siphon so waste leaves with the old water.',
    },
    {
      name: 'Adjust frequency from bioload, not a calendar alone',
      text: 'If nitrate climbs between weekly changes, increase volume or frequency — not both at once. Light planted tanks can stretch to 25% every 10–14 days if tests stay stable. This is maintenance math, not veterinary advice.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aquarium Water Change Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive aquarium water change calculator. Inputs: tank gallons or liters, current fill percent, desired change percent, and an optional bioload note. Output: gallons and liters to remove and replace, plus educational weekly-schedule guidance.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Gallons or liters to remove = filled volume × change percent',
    'US gallon / liter unit toggle',
    'Fill-percent adjustment for tanks that are not full',
    'Bioload schedule tips: planted, community, heavy, reef',
    'Optional nitrate/TDS/GH/salinity dilution mode for target-parameter planning',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const FAQS = [
  {
    question: 'How much water should I change in my aquarium?',
    answer:
      'For most community freshwater tanks, 25% weekly is the usual maintenance band. Multiply tank gallons by 0.25 to get gallons to remove (a 40-gallon tank → 10 gallons). Heavily stocked or messy-fish tanks often need 30–50% weekly. Reef tanks typically do 10–15% with matched-salinity water. Cap a single change at 50% unless parameters are closely matched.',
  },
  {
    question: 'How often should I do water changes?',
    answer:
      'Weekly is the default for a stocked community tank. Light, heavily planted tanks can stretch to 25% every 10–14 days if nitrate stays under about 20 ppm. Goldfish, large cichlids, fry tanks, and overfed tanks need more often — sometimes 25% twice a week. Test before you stretch the schedule. This is husbandry guidance, not veterinary advice.',
  },
  {
    question: 'Do I need to match temperature and dechlorinate?',
    answer:
      'Yes. New water should be within about 2°F of the tank. Dose a dechlorinator (Seachem Prime, API Stress Coat) for any tap water before it goes in — chlorine and chloramine harm fish and the filter bacteria. For most weekly 25% changes you do not need to chase pH or GH unless you keep sensitive species or you are doing a very large change.',
  },
  {
    question: 'When should I change more water, or change more often?',
    answer:
      'Increase volume or frequency — not both at once — when the tank is overstocked, overfed, lightly planted, or holding messy fish (goldfish, large cichlids). Also step up after a missed week, or when nitrate climbs between changes. Check stocking with the stocking calculator and filter flow with the filter GPH calculator before assuming the schedule is the only lever.',
  },
  {
    question: 'How do I use the calculator if I want to lower nitrate to a target?',
    answer:
      'Switch to the nitrate / parameter-target mode. Water-change fraction = (current − target) / (current − source). If tap water already has nitrate, a change alone cannot go below that source level. For large reductions, the tool splits the work into 50% changes spread over days.',
  },
]

export default function WaterChangeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Water Change Calculator',
        subtitle:
          'How much water should you siphon? Tank size, fill %, and change % in — gallons and liters to remove out, plus a weekly schedule tip by bioload.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'September 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Water Change Calculator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Tools' },
        { title: 'Stocking Calculator', href: '/tools/stocking-calculator', category: 'Tools' },
        { title: 'Filter GPH Calculator', href: '/tools/filter-gph-calculator', category: 'Tools' },
        { title: 'Heater Wattage Calculator', href: '/tools/heater-wattage-calculator', category: 'Tools' },
        { title: 'Substrate Calculator', href: '/tools/substrate-calculator', category: 'Tools' },
        { title: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained', category: 'Fish Health' },
        { title: 'Best Water Test Kits', href: '/reviews/best-water-test-kits', category: 'Reviews' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'How the volume math works', href: '#volume-math' },
              { label: 'When to change more often', href: '#more-often' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Related"
            links={[
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Filter GPH Calculator', href: '/tools/filter-gph-calculator' },
              { label: 'Heater Wattage', href: '/tools/heater-wattage-calculator' },
              { label: 'Substrate Calculator', href: '/tools/substrate-calculator' },
              { label: 'Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
              { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
              { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
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
          publishedAt="2026-05-01T00:00:00Z"
          updatedAt="2026-09-03T00:00:00Z"
          reviewedBy="Editorial team"
        />
        <h2 id="calculator">The Calculator</h2>
        <Calculator />

        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop water-change gear
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            A hose-to-sink changer (Python-style) or a gravel-vacuum siphon makes the weekly change
            faster; a liquid kit tells you whether the schedule is actually working. Same Amazon hops
            used on the{' '}
            <Link href="/reviews/best-water-test-kits" className="text-brand-primary no-underline hover:underline">
              water-test kit review
            </Link>
            . Fish.com earns a commission on qualifying purchases at no extra cost to you.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/python+water+changer?s=tools-water-change-calculator"
              amazonLabel="Shop Python water changer on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+gravel+vacuum+siphon?s=tools-water-change-calculator"
              amazonLabel="Shop gravel vacuums on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=tools-water-change-calculator"
              amazonLabel="Shop API Master Test Kit on Amazon →"
            />
          </div>
        </div>

        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the math
          </p>
          <h3 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Water-change schedule notes
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Send the change math — weekly percent and gallons for your tank type. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Water-change schedule notes"
            subtitle="Send the change math — weekly percent and gallons for your tank type. No spam."
            source="tools-water-change-calculator"
          />
        </div>

        <h2 id="volume-math">How the volume math works</h2>
        <p>
          A water change is a percentage of the water that is actually in the tank, not the box
          label. Filled volume = tank size × (fill % ÷ 100). Gallons to remove = filled volume ×
          (change % ÷ 100). A 40-gallon tank filled to the rim at 25% is <strong>10 gallons</strong>{' '}
          out and 10 gallons back in.
        </p>
        <p>
          If you need net volume from length × width × height first, use the{' '}
          <Link href="/tools/aquarium-volume-calculator">aquarium volume calculator</Link>. If the
          tank is chronically dirty between weekly changes, the lever is usually stocking or
          filtration — check the{' '}
          <Link href="/tools/stocking-calculator">stocking calculator</Link> and the{' '}
          <Link href="/tools/filter-gph-calculator">filter GPH calculator</Link> before you double
          the change percent.
        </p>

        <h2 id="more-often">When to change more often</h2>
        <p>These are husbandry flags, not disease diagnoses:</p>
        <ul>
          <li>
            <strong>Heavy bioload.</strong> Goldfish, large cichlids, and overstocked community tanks
            produce more waste than a 25% weekly change can export. Step to 30–50% weekly or 25%
            twice weekly.
          </li>
          <li>
            <strong>Overfeeding.</strong> The most common reason nitrate climbs. Cut to what fish
            finish in 30 seconds, then keep the same change schedule for two weeks before changing
            it again.
          </li>
          <li>
            <strong>Few or no live plants.</strong> Plants consume nitrate. A bare-bottom or
            plastic-plant tank usually needs the community schedule, not the planted stretch.
          </li>
          <li>
            <strong>After a missed week.</strong> Do a normal 25–30% change, then resume the weekly
            cadence. Do not “catch up” with a single 70% change.
          </li>
        </ul>
        <p>
          Match temperature, dose dechlorinator, and vacuum the gravel while you siphon. If you are
          still choosing a bed, the <Link href="/tools/substrate-calculator">substrate calculator</Link>{' '}
          converts footprint × depth into bag weight. For why
          nitrate is the parameter most people track, see the{' '}
          <Link href="/health/nitrogen-cycle-explained">nitrogen cycle</Link> and the{' '}
          <Link href="/setup/water-chemistry-guide">water chemistry guide</Link>. Size the heater
          for the same volume with the{' '}
          <Link href="/tools/heater-wattage-calculator">heater wattage calculator</Link>.
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
