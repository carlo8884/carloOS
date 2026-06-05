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

const URL = 'https://fish.com/tools/aquarium-volume-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Volume Calculator — Gallons & Liters from L×W×H | Fish.com',
  description: 'Free aquarium volume calculator. Convert L×W×H to US gallons, UK gallons, and liters. Supports rectangular, cube, bow-front, hexagonal, and cylinder tanks.',
  path: '/tools/aquarium-volume-calculator',
})

const schema = buildHowToSchema({
  name: 'How to calculate aquarium volume in gallons',
  description: 'Measure tank length, width, and height in inches or centimeters, then use the volume formula for your tank shape to find capacity in US gallons or liters.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    { name: 'Measure dimensions', text: 'Measure the inside length, width (front to back), and height of the tank in inches or centimeters.' },
    { name: 'Pick the right formula', text: 'For rectangular and cube tanks, multiply length × width × height. For cylinder tanks use π × radius² × height. For hex tanks use 0.866 × width² × height.' },
    { name: 'Convert cubic inches to gallons', text: 'Divide cubic inches by 231 for US gallons, by 277.42 for UK gallons, or by 61.02 for liters.' },
    { name: 'Subtract for displacement', text: 'Net water volume is about 90–92% of gross volume after substrate, decor, and freeboard. Use this number for stocking and dosing.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Volume Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive aquarium volume calculator. Converts length × width × height to US gallons, UK gallons, and liters for rectangular, cube, bow-front, hexagonal, and cylinder tanks, with optional net-fill adjustment for substrate, hardscape, and freeboard.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Supports rectangular, cube, bow-front, hexagonal, and cylinder tank shapes',
    'Outputs US gallons, UK (imperial) gallons, and liters simultaneously',
    'Inputs in inches or centimeters',
    'Adjustable net-water fill factor (default 92%) for substrate and freeboard',
    'Common-size reference table from 5 to 180 US gallons',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const FAQS = [
  {
    question: 'How many gallons is a 36 × 18 × 18 inch tank?',
    answer: 'A 36 × 18 × 18 inch rectangular tank holds about 50.5 US gallons gross, or ~46–47 US gallons of net water after substrate and decor. This is a popular 50-gallon size sold by major brands.',
  },
  {
    question: 'How do I convert liters to US gallons?',
    answer: 'Divide liters by 3.785 to get US gallons. For example, 200 liters ÷ 3.785 ≈ 52.8 US gallons. For UK (imperial) gallons divide by 4.546.',
  },
  {
    question: 'Why is my net water volume less than what the tank box says?',
    answer: 'Manufacturers quote gross volume — the full geometric capacity of the tank. Real water volume is 8–15% less because of substrate displacement, decor, hardscape, and the freeboard you leave below the rim. Always use net volume for dosing medication, calculating water changes, and choosing fish stocking.',
  },
  {
    question: 'How much does a full aquarium weigh?',
    answer: 'Freshwater weighs about 8.345 pounds per US gallon, plus the weight of the tank, substrate, and rocks. A 75-gallon tank fully set up weighs roughly 850–900 pounds. Saltwater is about 3% heavier. Always confirm your floor can support the load — second-floor placement over a single joist run is a known failure pattern.',
  },
  {
    question: 'Is the "inch per gallon" rule accurate for stocking?',
    answer: 'No. The "1 inch of fish per gallon" rule is outdated and dangerous. It ignores body mass, swimming style, schooling needs, surface area, and bioload. Use our Stocking Calculator for a modern surface-area + filtration estimate instead.',
  },
]

export default function VolumeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Volume Calculator',
        subtitle: 'Convert tank dimensions to US gallons, UK gallons, and liters. Supports rectangular, bow-front, cube, hexagonal, and cylinder tanks with realistic water-fill adjustment.',
        category: 'Calculators',
        categoryHref: '/tools',
        authorAvatar: '📏',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Aquarium Volume Calculator' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Tools Hub", href: "/tools", category: "Tools" }, { title: "Heater Wattage Calculator", href: "/tools/heater-wattage-calculator", category: "Tools" }, { title: "Stocking Calculator", href: "/tools/stocking-calculator", category: "Tools" }, { title: "Water Change Calculator", href: "/tools/water-change-calculator", category: "Tools" }]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'How to measure', href: '#measure' },
              { label: 'Net vs gross volume', href: '#net-vs-gross' },
              { label: 'Common tank sizes', href: '#sizes' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Use your number for"
            links={[
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Heater Wattage Calculator', href: '/tools/heater-wattage-calculator' },
              { label: 'Water Change Calculator', href: '/tools/water-change-calculator' },
              { label: 'Aquarium Setup Guide', href: '/setup' },
              { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="New calculators and species tools every Thursday."
            source="volume-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <h2 id="calculator">The Calculator</h2>
        <Calculator />

        <h2 id="measure">How to Measure Your Tank</h2>
        <p>
          Measure the <strong>inside</strong> dimensions, not the outside of the glass. For most tanks the difference is small, but on
          rimmed tanks the rim eats 1–2 inches of usable height. The three measurements you need:
        </p>
        <ul>
          <li><strong>Length</strong> — the longest horizontal side, usually the front pane.</li>
          <li><strong>Width</strong> — front to back, the shortest horizontal side.</li>
          <li><strong>Height</strong> — from the inside floor of the tank to where the water will actually sit, not the top of the trim.</li>
        </ul>
        <p>
          For cylinders, measure the diameter and the height. For hexagonal tanks, measure flat-to-flat width (not point-to-point) and height.
        </p>

        <h2 id="net-vs-gross">Net vs Gross Volume — Why It Matters</h2>
        <p>
          Manufacturers advertise <strong>gross volume</strong>: pure geometry, no decor, water filled to the rim. Your real tank is a different number.
        </p>
        <p>
          Substrate alone usually displaces 5–8% of capacity. Hardscape (driftwood, rock) can take another 3–5%. And you never fill water to the brim
          — you leave 1–2 inches of freeboard. Net water volume — what you should use for dosing meds, calculating water changes, and stocking — is
          usually <strong>88–92% of gross</strong>. Our calculator defaults to 92%, which is realistic for a planted tank with moderate hardscape.
        </p>

        <h2 id="sizes">Common Tank Sizes (Reference)</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Common Name</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Dimensions (L×W×H, in)</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">US Gallons (gross)</th>
                <th className="text-left py-2 font-semibold text-brand-dark">Liters</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              {[
                ['5 gallon', '16 × 8 × 10', '5.5', '21'],
                ['10 gallon standard', '20 × 10 × 12', '10', '38'],
                ['20 gallon long', '30 × 12 × 12', '18.7', '71'],
                ['29 gallon', '30 × 12 × 18', '28', '106'],
                ['40 gallon breeder', '36 × 18 × 16', '45', '170'],
                ['55 gallon', '48 × 13 × 21', '57', '215'],
                ['75 gallon', '48 × 18 × 21', '78', '296'],
                ['90 gallon', '48 × 18 × 24', '90', '340'],
                ['125 gallon', '72 × 18 × 21', '118', '447'],
                ['180 gallon', '72 × 24 × 25', '187', '708'],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-brand-border/50">
                  {row.map((cell, i) => (
                    <td key={i} className="py-2 pr-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Use these as starting points — actual capacity varies by manufacturer. <Link href="/tools/stocking-calculator">Calculate stocking</Link> for any of these sizes,
          or check our <Link href="/reviews/best-aquarium-filters">filter</Link> and <Link href="/reviews/best-aquarium-heaters">heater</Link> recommendations for each tank class.
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
