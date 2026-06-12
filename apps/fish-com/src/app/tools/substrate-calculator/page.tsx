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
  ArticleSourcesList,
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
    { name: 'Choose a depth', text: 'Pick a substrate depth. 1–2 inches (2.5–5 cm) suits most tanks; 2.5–3 inches is better for rooted or planted tanks.' },
    { name: 'Calculate volume', text: 'Multiply length × width × depth in the same units to get the substrate volume, then convert to liters (1 liter = 1000 cubic centimeters).' },
    { name: 'Convert volume to weight', text: 'Multiply volume by the substrate density: gravel ≈ 1.6 g/cm³, sand ≈ 1.5 g/cm³, aqua soil ≈ 0.8 g/cm³. Buy about 10% extra to allow for settling and sloping.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Substrate Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive aquarium substrate calculator. Enter tank length, width, and desired substrate depth in inches or centimeters and choose gravel, sand, or aqua soil to estimate the volume in liters and the weight in pounds and kilograms, including a 10% buying buffer.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Inputs in inches or centimeters',
    'Gravel, sand, and aqua soil with realistic poured densities',
    'Outputs volume in liters and weight in pounds and kilograms',
    'Adds a 10% buying buffer for settling and slope',
    'Depth guidance: 1–2 in typical, 2.5–3 in for planted tanks',
  ],
  publisher: { '@type': 'Organization', name: 'Fish.com Editorial', url: 'https://fish.com' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aquarium Substrate Calculator',
  description:
    'How to estimate how much gravel, sand, or aqua soil an aquarium needs — the length × width × depth volume formula, realistic substrate densities, a worked example, and a buy-10%-extra rule.',
  url: URL,
  datePublished: '2026-06-11T00:00:00Z',
  dateModified: '2026-06-11T00:00:00Z',
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
      'A standard 20-gallon long tank has a roughly 30 × 12 inch footprint. At a typical 2-inch depth of gravel that is about 11.8 liters of substrate, or roughly 42 pounds (19 kg). Buy about 10% extra — call it 46 pounds (21 kg) — to allow for settling and an uneven slope. Sand of the same volume weighs slightly less; light aqua soil weighs roughly half as much.',
  },
  {
    question: 'How deep should aquarium substrate be?',
    answer:
      'For most freshwater community tanks, 1–2 inches (2.5–5 cm) is enough and is easier to keep clean. Planted tanks usually want 2.5–3 inches (6–7.5 cm) so root systems and root tabs have somewhere to sit. Very deep beds can trap waste and gas, so go deeper only where plants need it.',
  },
  {
    question: 'How much does aquarium gravel weigh per liter?',
    answer:
      'Poured aquarium gravel has a bulk density of roughly 1.5–1.7 g/cm³, so one liter weighs about 1.5–1.7 kg (3.3–3.7 lb). Sand is similar at about 1.5 kg per liter. Aqua soil, which is a light baked clay, is much lighter at roughly 0.7–0.9 kg per liter. These are estimates — always check the weight printed on the bag.',
  },
  {
    question: 'Is sand or gravel heavier for an aquarium?',
    answer:
      'By volume they are close. Poured aquarium gravel is about 1.6 g/cm³ and aquarium sand about 1.5 g/cm³, so gravel is marginally heavier for the same depth. The bigger practical difference is behavior, not weight: sand compacts and can trap gas, while gravel lets water flow through it more freely.',
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
        { title: 'Pond Volume Calculator', href: '/tools/pond-volume-calculator', category: 'Tools' },
        { title: 'Stocking Calculator', href: '/tools/stocking-calculator', category: 'Tools' },
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
              { label: 'Pond Volume Calculator', href: '/tools/pond-volume-calculator' },
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Aquarium Setup Guide', href: '/setup' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="New calculators and species tools every Thursday."
            source="substrate-calculator"
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
          updatedAt="2026-06-11T00:00:00Z"
          reviewedBy="Editorial team"
        />

        <h2 id="formula">The Formula</h2>
        <p>
          Substrate is a simple box of material sitting on the tank floor, so the volume is just the footprint times the
          depth:
        </p>
        <p>
          <strong>Volume = length × width × depth</strong> &nbsp;(all in the same units)
        </p>
        <p>
          <strong>Weight = volume × density.</strong> Use realistic poured densities: gravel ≈ 1.6 g/cm³, sand ≈ 1.5
          g/cm³, and aqua soil — a light baked clay — ≈ 0.8 g/cm³. Convert volume to liters (1 liter = 1000 cm³) to
          compare against bag sizes, then add about 10% so settling and slope don&apos;t leave you short.
        </p>

        <h2 id="calculator">The Calculator</h2>
        <Calculator />

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
          So you would buy roughly <strong>46 pounds (21 kg)</strong> of gravel. The same footprint in sand (≈ 1.5
          g/cm³) comes out a touch lighter; in aqua soil (≈ 0.8 g/cm³) it is roughly half the weight. These are
          estimates from typical densities — the figure printed on the bag is the one to trust.
        </p>

        <h2 id="depth">How Much Depth Do You Need?</h2>
        <p>
          Depth, not just footprint, drives how much you buy — so it is worth getting right.
        </p>
        <ul>
          <li><strong>1–2 inches (2.5–5 cm)</strong> — fine for most community tanks; easy to keep clean and vacuum.</li>
          <li><strong>2.5–3 inches (6–7.5 cm)</strong> — better for planted tanks so root systems and root tabs have a home.</li>
          <li><strong>Deeper beds</strong> — only where plants genuinely need it; deep substrate can trap waste and gas pockets.</li>
        </ul>
        <p>
          Once you know your substrate volume, size everything else around the same tank:{' '}
          <Link href="/tools/aquarium-volume-calculator">calculate water volume</Link> for dosing and stocking, or use
          the <Link href="/tools/pond-volume-calculator">pond volume calculator</Link> if you are scaping outdoors.
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
              label: 'Choosing and preparing aquarium substrate',
              publisher: 'The Spruce Pets',
              url: 'https://www.thesprucepets.com/aquarium-substrate-1378763',
            },
            {
              label: 'Aquarium gravel and sand: depth and selection',
              publisher: 'The Spruce Pets',
              url: 'https://www.thesprucepets.com/freshwater-aquarium-substrate-1381911',
            },
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
