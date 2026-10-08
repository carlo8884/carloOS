import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  TableOfContents,
  RelatedLinks,
  ArticleByline,
  ArticleSourcesList,
  ShopCtas,
  JourneyNext,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://fish.com/tools/substrate-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Substrate Calculator — Gravel & Sand Weight | Fish.com',
  description:
    'How much gravel or sand do you need? Enter tank length, width, and depth to get substrate volume in liters plus weight in lbs and kg, with a buy-10%-extra rule.',
  path: '/tools/substrate-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to calculate how much aquarium substrate you need',
  description:
    'Measure the tank footprint and the substrate depth you want, multiply length × width × depth to get volume, then multiply by the substrate density to estimate weight in pounds or kilograms.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    { name: 'Measure the footprint', text: 'Measure the inside length and width (front to back) of the tank in inches or centimeters.' },
    { name: 'Choose a depth', text: 'Pick a substrate depth. Francis-Floyd, Riggs, and Yanong (UF/IFAS VM144, August 2003) place gravel two to three inches deep on an undergravel filter plate, and five inches when live plants are used. Enter the depth you actually want.' },
    { name: 'Calculate volume', text: 'Multiply length × width × depth in the same units to get the substrate volume, then convert to liters (1 liter = 1000 cubic centimeters).' },
    { name: 'Convert volume to weight', text: 'Multiply volume by a working density so bag weights can be compared: gravel 1.6 g/cm³, sand 1.5 g/cm³, aqua soil 0.8 g/cm³. Those are planning figures, not a lab measurement — use the weight printed on the bag. Buy about 10% extra to allow for settling and sloping.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aquarium Substrate Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive aquarium substrate calculator. Inputs: tank length, width, and desired substrate depth in inches or centimeters, plus gravel, sand, or aqua soil. Output: volume in liters and weight in pounds and kilograms, including a 10% buying buffer.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Inputs in inches or centimeters',
    'Gravel, sand, and aqua soil using working densities for planning, not a lab measurement',
    'Outputs volume in liters and weight in pounds and kilograms',
    'Adds a 10% buying buffer for settling and slope',
    'Depth guidance from UF/IFAS VM144: two to three inches of gravel on an undergravel plate, five inches when live plants are used',
  ],
  publisher: { '@type': 'Organization', name: 'Fish.com Editorial', url: 'https://fish.com' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aquarium Substrate Calculator',
  description:
    'How to estimate how much gravel, sand, or aqua soil an aquarium needs — the length × width × depth volume formula, working densities for planning, a worked example, and a buy-10%-extra rule.',
  url: URL,
  datePublished: '2026-06-11T00:00:00Z',
  dateModified: '2026-09-03T00:00:00Z',
  author: { '@type': 'Organization', name: 'Fish.com Editorial' },
  publisher: { '@type': 'Organization', name: 'Fish.com', url: 'https://fish.com' },
  mainEntityOfPage: URL,
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fish.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://fish.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Substrate Calculator', item: URL },
  ],
}

const FAQS = [
  {
    question: 'How much substrate do I need for a 20 gallon tank?',
    answer:
      'A standard 20-gallon long tank has a roughly 30 × 12 inch footprint. If you enter a 2-inch depth, the volume is about 11.8 liters. At this calculator’s working density of 1.6 g/cm³ that is roughly 42 pounds (19 kg) of gravel, or about 46 pounds (21 kg) with a 10% buying buffer. Those densities are planning figures, not a lab measurement — use the weight printed on the bag.',
  },
  {
    question: 'How deep should aquarium substrate be?',
    answer:
      'Francis-Floyd, Riggs, and Yanong (UF/IFAS VM144, August 2003) say gravel over an undergravel filter plate should be two to three inches deep, and five inches when live plants are used. That figure is for a filter bed, not a rule for every modern tank. Deeper beds are harder to vacuum, so enter the depth the plants actually need.',
  },
  {
    question: 'How much does aquarium gravel weigh per liter?',
    answer:
      'This calculator uses a working density so bag weights can be compared: gravel 1.6 g/cm³, sand 1.5 g/cm³, aqua soil 0.8 g/cm³. Those are planning figures, not a lab measurement. Use the weight printed on the bag.',
  },
  {
    question: 'Is sand or gravel heavier for an aquarium?',
    answer:
      'This calculator treats poured gravel as 1.6 g/cm³ and sand as 1.5 g/cm³ so the same depth can be compared. Those are planning figures, not a lab measurement. Sand can compact and gravel is easier to vacuum; use the weight printed on the bag when you buy.',
  },
  {
    question: 'Why should I buy 10% more substrate than the calculator says?',
    answer:
      'Bagged substrate settles and never pours to a perfectly level surface, you usually want a gentle slope toward the back, and some volume is lost rinsing out dust and fines. A 10% buffer covers all of that and means you are not one bag short on setup day. Leftover substrate is useful for future rescapes.',
  },
]

export default function SubstrateCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Substrate Calculator',
        subtitle:
          'How much gravel, sand, or aqua soil do you need? Enter your tank footprint and depth to get substrate volume in liters plus weight in pounds and kilograms.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Substrate Calculator' },
      ]}
      schema={howToSchema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Tools' },
        { title: 'Aquarium Volume Calculator', href: '/tools/aquarium-volume-calculator', category: 'Tools' },
        { title: 'Stocking Calculator', href: '/tools/stocking-calculator', category: 'Tools' },
        { title: 'Heater Wattage Calculator', href: '/tools/heater-wattage-calculator', category: 'Tools' },
        { title: 'Water Change Calculator', href: '/tools/water-change-calculator', category: 'Tools' },
        { title: 'Aquarium Setup Builder', href: '/tools/aquarium-setup-builder', category: 'Tools' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'The formula', href: '#formula' },
              { label: 'Worked example', href: '#example' },
              { label: 'How much depth', href: '#depth' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Plan your setup"
            links={[
              { label: 'Aquarium Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Heater Wattage', href: '/tools/heater-wattage-calculator' },
              { label: 'Water Change Calculator', href: '/tools/water-change-calculator' },
              { label: 'Aquarium Setup Builder', href: '/tools/aquarium-setup-builder' },
              { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <ArticleByline
          siteName="Fish.com Editorial"
          publishedAt="2026-06-11T00:00:00Z"
          updatedAt="2026-09-03T00:00:00Z"
          reviewedBy="Editorial team"
        />

        <h2 id="calculator">The Calculator</h2>
        <Calculator />
        <JourneyNext
          siteId="fish-com"
          nextHref="/tools/aquarium-setup-builder"
          nextLabel="Build the rest of the first-tank kit"
          nextBlurb="Bag weight is the bed, not the whole setup. Use the setup builder next so filter, heater, and substrate land in one kit before fill-day. The hop below is the same aquarium-gravel search already on this page."
          resourceHref="/go/amazon-brand/aquarium+gravel?s=tools-substrate-calculator"
          resourceLabel="Browse aquarium gravel on Amazon →"
        />

        <HopDisclosure siteId="fish-com" href={["/go/amazon-brand/aquarium+gravel?s=tools-substrate-calculator", "/go/amazon-brand/aquarium+sand?s=tools-substrate-calculator", "/go/amazon-brand/aquarium+aqua+soil+planted+substrate?s=tools-substrate-calculator", "/go/amazon-brand/aquarium+substrate+vacuum?s=tools-substrate-calculator"]} />
        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop substrate
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            Use the weight above to pick bag sizes. Inert gravel or sand suits most community tanks;
            aqua soil is the planted-tank bed. A substrate vacuum keeps the bed clean after fill-day.
            Same Amazon hops used on the{' '}
            <Link href="/setup/planted-tank-setup" className="text-brand-primary no-underline hover:underline">
              planted tank setup
            </Link>{' '}
            guide.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+gravel?s=tools-substrate-calculator"
              amazonLabel="Browse aquarium gravel on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sand?s=tools-substrate-calculator"
              amazonLabel="Browse aquarium sand on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+aqua+soil+planted+substrate?s=tools-substrate-calculator"
              amazonLabel="Browse planted aqua soil substrate on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+substrate+vacuum?s=tools-substrate-calculator"
              amazonLabel="Browse substrate vacuums on Amazon →"
            />
          </div>
        </div>

        <h2 id="formula">The Formula</h2>
        <p>
          Substrate is a simple box of material sitting on the tank floor, so the volume is just the footprint times the
          depth:
        </p>
        <p>
          <strong>Volume = length × width × depth</strong> &nbsp;(all in the same units)
        </p>
        <p>
          <strong>Weight = volume × density.</strong> This calculator multiplies volume by a working density (gravel 1.6, sand 1.5,
          aqua soil 0.8 g/cm³) so bag weights can be compared. Those are planning figures, not a lab measurement — use the
          weight printed on the bag. Convert volume to liters (1 liter = 1000 cm³) to
          compare against bag sizes, then add about 10% so settling and slope don&apos;t leave you short.
        </p>

        <h2 id="example">Worked Example</h2>
        <p>
          Say you have a 20-gallon long tank with a 30 × 12 inch footprint and you want 2 inches of gravel:
        </p>
        <ul>
          <li><strong>Volume:</strong> 30 in × 12 in × 2 in = 720 in³ = 11,799 cm³ ≈ 11.8 liters.</li>
          <li><strong>Weight:</strong> 11,799 cm³ × 1.6 g/cm³ = 18,878 g ≈ 18.9 kg ≈ 41.6 lb.</li>
          <li><strong>Buy 10% extra:</strong> ≈ 20.8 kg (45.8 lb), about 13 liters.</li>
        </ul>
        <p>
          So you would buy roughly <strong>46 pounds (21 kg)</strong> of gravel at this calculator&apos;s working density.
          The same footprint in sand (working density 1.5 g/cm³) comes out a touch lighter; in aqua soil (working density
          0.8 g/cm³) it is roughly half the weight. Those densities are planning figures — the figure printed on the bag
          is the one to trust.
        </p>

        <h2 id="depth">How Much Depth Do You Need?</h2>
        <p>
          Depth, not just footprint, drives how much you buy — so it is worth getting right.
        </p>
        <p>
          Francis-Floyd, Riggs, and Yanong (University of Florida IFAS VM144, August 2003) place gravel on an
          undergravel filter plate at two to three inches, and recommend five inches when live plants are used.
          That guidance is for a filter bed. A tank without an undergravel plate can use a shallower layer that is
          easier to vacuum. Enter the depth you want; this page does not treat 1–2 inches or 2.5–3 inches as a
          published rule.
        </p>
        <p>
          Once you know your substrate volume, size everything else around the same tank:{' '}
          <Link href="/tools/aquarium-volume-calculator">calculate water volume</Link> for dosing, the{' '}
          <Link href="/tools/stocking-calculator">stocking calculator</Link> for a slim-inch bioload ceiling
          on the net volume — not a species headcount, the <Link href="/tools/heater-wattage-calculator">heater wattage calculator</Link> for the
          same gallons, and the <Link href="/tools/water-change-calculator">water change calculator</Link> for
          the weekly siphon. Building the whole kit? Start with the{' '}
          <Link href="/tools/aquarium-setup-builder">aquarium setup builder</Link>.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <ArticleSourcesList
          title="Sources"
          sources={[
            {
              label: 'Francis-Floyd, Riggs, and Yanong — Aquarium Setup and Maintenance (UF/IFAS VM144, August 2003): gravel two to three inches on an undergravel plate, five inches when live plants are used',
              publisher: 'University of Florida IFAS, hosted by Texas A&M AgriLife Extension',
              url: 'https://extension.rwfm.tamu.edu/wp-content/uploads/sites/8/2013/10/Aquarium-Setup-and-Maintenance.pdf',
            },
          ]}
        />

      </div>
    </ArticleLayout>
  )
}
