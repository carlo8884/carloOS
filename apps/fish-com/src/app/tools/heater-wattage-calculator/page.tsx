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

const URL = 'https://fish.com/tools/heater-wattage-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Heater Wattage Calculator — Size Your Tank Heater | Fish.com',
  description: 'Calculate the right wattage aquarium heater for your tank size, room temperature, and target temperature. Includes redundancy and controller recommendations.',
  path: '/tools/heater-wattage-calculator',
})

const schema = buildHowToSchema({
  name: 'How to size an aquarium heater',
  description: 'Use tank volume, the difference between room temperature and target water temperature, and a safety margin to pick the right wattage aquarium heater.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    { name: 'Find the temperature delta', text: 'Subtract the coldest typical room temperature from your target tank temperature.' },
    { name: 'Apply 3 W per gallon per 10°F', text: 'Multiply tank gallons × 3 × (delta / 10) to get a baseline heater wattage requirement.' },
    { name: 'Add 25% headroom', text: 'Heaters age and lose efficiency. Cold snaps push beyond typical room lows. Adding 25% prevents undershoot during winter.' },
    { name: 'Split into two heaters for large tanks', text: 'On tanks 40 gallons and up, two smaller heaters are safer than one large one. They fail safer and give redundancy.' },
    { name: 'Use a controller', text: 'For tanks over 75 gallons or with sensitive species, a dedicated controller (Inkbird, Ranco) prevents stuck-heater disasters.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Heater Wattage Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive aquarium heater wattage calculator. Sizes the correct wattage based on tank volume, the temperature delta between room and target water temperature, a 25% headroom factor, and a recommended split into dual heaters for redundancy.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Inputs: tank gallons, target temperature, coldest typical room temperature',
    'Baseline rule of 3 W per gallon per 10°F lift with cold-room scaling',
    'Built-in 25% headroom for heater aging and cold snaps',
    'Dual-heater split recommendation for tanks 40 gallons and up',
    'External-controller guidance for sensitive species and large systems',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const FAQS = [
  {
    question: 'What wattage heater do I need for a 20-gallon tank?',
    answer: 'For a 20-gallon tropical tank with a 10°F lift (room 68°F → 78°F target), about 60W of heating. The standard pick is a 75W or 100W heater. If your room drops to 60°F in winter, step up to 150W.',
  },
  {
    question: 'Should I get one big heater or two smaller ones?',
    answer: 'On tanks 40 gallons or larger, run two smaller heaters in parallel rather than one big one. If one fails stuck-on, the smaller wattage can\'t cook the tank before you notice; if one fails off, the other maintains baseline temperature while you replace it. Standard pet store wisdom is the opposite — it\'s wrong.',
  },
  {
    question: 'Are wattage rules different for cold rooms?',
    answer: 'Yes. The 3-watt-per-gallon rule assumes ~10°F lift. If your room runs cold (60–65°F in winter) and you keep tropical fish at 80°F, you need 5–7 watts per gallon. Our calculator scales for this automatically — just enter the actual coldest room temperature you see in winter, not the average.',
  },
  {
    question: 'Do I need a heater for a goldfish tank?',
    answer: 'Usually no. Common, comet, and shubunkin goldfish are cold-water fish and thrive at room temperature (60–75°F). Fancy goldfish (orandas, ranchus, telescopes) prefer slightly warmer water and a small heater set to 72°F is a reasonable safety net for cold snaps.',
  },
  {
    question: 'What temperature should I keep tropical fish at?',
    answer: '76–80°F (24–27°C) is the standard tropical range. Specific exceptions: discus 84–86°F, German blue rams 80–82°F, white cloud minnows below 72°F. Most tetras, rasboras, livebearers, and gouramis do fine anywhere in 76–80°F.',
  },
]

export default function HeaterWattageCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Heater Wattage Calculator',
        subtitle: 'Size your aquarium heater correctly based on tank volume, room temperature, and target temperature. With redundancy guidance for large tanks.',
        category: 'Calculators',
        categoryHref: '/tools',
        authorAvatar: '🔥',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Heater Wattage Calculator' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Tools Hub", href: "/tools", category: "Tools" }, { title: "Aquarium Volume Calculator", href: "/tools/aquarium-volume-calculator", category: "Tools" }, { title: "Water Change Calculator", href: "/tools/water-change-calculator", category: "Tools" }, { title: "Best Aquarium Heaters", href: "/reviews/best-aquarium-heaters", category: "Reviews" }]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Quick reference chart', href: '#chart' },
              { label: 'Why two heaters?', href: '#two-heaters' },
              { label: 'Controllers & safety', href: '#controllers' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Equipment"
            links={[
              { label: 'Best Aquarium Heaters', href: '/reviews/best-aquarium-heaters' },
              { label: 'Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Saltwater Tank Setup', href: '/setup/saltwater-tank-setup' },
              { label: 'Aquarium Setup Guide', href: '/setup' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Equipment picks and fishkeeping tips every Thursday."
            source="heater-calculator"
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

        <h2 id="chart">Quick Reference — Wattage by Tank Size</h2>
        <p>Assuming a ~10°F lift (68°F room → 78°F tank) for a standard tropical setup with a glass lid:</p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Tank Size</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Single Heater</th>
                <th className="text-left py-2 font-semibold text-brand-dark">Dual Heater (recommended ≥40 gal)</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">5–10 gal</td><td className="py-2 pr-4">50W</td><td className="py-2">—</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">20 gal</td><td className="py-2 pr-4">100W</td><td className="py-2">—</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">29 gal</td><td className="py-2 pr-4">150W</td><td className="py-2">2 × 75W</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">40 gal</td><td className="py-2 pr-4">200W</td><td className="py-2">2 × 100W</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">55 gal</td><td className="py-2 pr-4">250W</td><td className="py-2">2 × 150W</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">75 gal</td><td className="py-2 pr-4">300W</td><td className="py-2">2 × 150W</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">125 gal</td><td className="py-2 pr-4">500W</td><td className="py-2">2 × 250W</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">180+ gal</td><td className="py-2 pr-4">800W</td><td className="py-2">2 × 400W + controller</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="two-heaters">Why Two Heaters Is Safer</h2>
        <p>
          The two failure modes of an aquarium heater are catastrophic in opposite directions:
        </p>
        <ul>
          <li><strong>Stuck on</strong> — thermostat fails closed, heater runs continuously, water hits 90°F+, fish die in hours. With a single 300W heater on a 75-gallon tank, this happens fast. With two 150W heaters, the smaller wattage gives you time to notice.</li>
          <li><strong>Failed off</strong> — heater stops heating. A single heater means the tank cools to room temperature. With two heaters, the other keeps the tank within 2–4°F of target.</li>
        </ul>
        <p>The cost difference is marginal. The safety upside is enormous. For any tank you actually care about, run two.</p>

        <h2 id="controllers">External Controllers</h2>
        <p>
          For tanks over 75 gallons, sensitive species (discus, German rams, reef tanks), or breeding setups, add an external temperature controller.
          The Inkbird ITC-308 (~$35) plugs into the wall and the heater plugs into it. It overrides the heater&apos;s built-in thermostat using a more accurate
          probe and shuts off power if temperature exceeds a safety cutoff. This prevents the stuck-on failure mode entirely.
        </p>
        <p>
          For specific heater model recommendations, see our <Link href="/reviews/best-aquarium-heaters">aquarium heater reviews</Link>.
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
