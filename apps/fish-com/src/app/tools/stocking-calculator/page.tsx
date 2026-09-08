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
import StockingShop from './StockingShop'
import { StockingWaterProvider } from './StockingWaterContext'
import { EXAMPLE_FOOTPRINTS, estimateStocking, formatSlimBand } from './model'

const URL = 'https://fish.com/tools/stocking-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Stocking Calculator — Rough Bioload Estimate | Fish.com',
  description:
    'Rough aquarium stocking estimate from surface area, volume, and filtration — a slim-inch bioload ceiling, not a species count. Freshwater and saltwater.',
  path: '/tools/stocking-calculator',
})

const schema = buildHowToSchema({
  name: 'How to sketch a rough aquarium stocking ceiling',
  description:
    'Use tank volume, surface area, and filtration to sketch a slim-inch bioload ceiling. This is a planning estimate, not a species-by-species stocking list.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    { name: 'Find net water volume', text: 'Calculate the real water volume of your tank (not the box label) using length × width × height and a 90% fill factor.' },
    { name: 'Measure surface area', text: 'Multiply tank length by width (front-to-back). Surface area drives oxygen exchange and is one bound on this planning estimate.' },
    { name: 'Account for filtration', text: 'Filter flow and bio-media volume can raise the planning ceiling versus a barely-rated filter. Oversize on purpose for headroom.' },
    { name: 'Adjust for aquascape', text: 'Heavily planted tanks support a higher planning ceiling; territorial cichlids and reef tanks support less per gallon.' },
    { name: 'Treat the number as a ceiling', text: 'Use the slim-inch output as a rough bioload ceiling and plan around 60–80% of it. It is not a species headcount.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Stocking Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive planner that sketches a slim-inch bioload ceiling from net water volume, surface area, filtration, and aquascape style. It is a rough estimate, not a species count.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Slim-inch / bioload ceiling from surface area vs volume — not inch-per-gallon',
    'Adjusts for filtration class and aquascape style',
    'Separate freshwater and saltwater modes',
    'Labels the result as a rough planning estimate, not species advice',
    'Shows a 60–80% planning band for parameter stability',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const FAQS = [
  {
    question: 'Is the "1 inch of fish per gallon" rule accurate?',
    answer: 'No. The inch-per-gallon rule was published in beginner aquarium books in the 1970s and oversimplifies stocking. It ignores body mass (a 6-inch goldfish has far more bioload than six 1-inch tetras), surface area (where gas exchange happens), schooling needs, swimming style, and temperament. This tool uses a slim-inch / surface-area ceiling as a rough planning estimate — it still cannot replace species-specific care.',
  },
  {
    question: 'Why does tank surface area matter more than volume?',
    answer: 'Oxygen enters the tank at the air-water boundary. Two tanks with the same gallons but different shapes — a 20-gallon long (30 × 12) and a 20-gallon high (24 × 12) — have very different stocking ceilings because the long tank has 25% more surface area. Tall, narrow tanks are oxygen-poor and bad for active fish.',
  },
  {
    question: 'How does filtration change stocking capacity?',
    answer: 'Filters do two things that matter for stocking: physical waste removal (mechanical) and ammonia/nitrite conversion (biological). A filter rated barely for your tank handles a light load. An oversized filter — or a canister + HOB combo — can raise this tool’s planning ceiling by giving you redundancy and more bio-media. That is still a planning adjustment, not a license to add a specific species count.',
  },
  {
    question: 'Should I stock to 100% of what the calculator says?',
    answer: 'No. Treat the slim-inch number as a ceiling and plan around 60–80% of it. The tool does not output a species list. Fully loaded tanks are less forgiving — a missed water change, a filter failure, or a sick fish can cascade quickly. Headroom is insurance. Choose species from adult-size care guides, not from this estimate.',
  },
  {
    question: 'Why is saltwater stocking so much lower?',
    answer:
      'This tool uses a tighter saltwater ceiling on purpose: about 24 sq in of surface per slim inch (vs 12 in freshwater) and a 0.6 slim-in/gal volume cap (vs 1.1). Those factors are planning heuristics — marine tanks typically run leaner because saltwater holds less dissolved oxygen, many reef fish have higher metabolic demand, and corals add nutrient sensitivity. On a standard 75-gallon 48×18 footprint with a rated filter, the same function returns a freshwater-community ceiling of 72 slim inches (43–58 in the 60–80% band) and a saltwater-community ceiling of 36 (22–29). A reef-style factor (×0.55) drops that marine ceiling to about 20 slim inches (12–16). Those are this model’s numbers for that footprint, not a species list and not a published marine-stocking standard.',
  },
]

export default function StockingCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Stocking Calculator',
        subtitle: 'A rough slim-inch / bioload ceiling from tank volume, surface area, filtration, and aquascape style — not a species count, and not the inch-per-gallon rule.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Stocking Calculator' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Tools Hub", href: "/tools", category: "Tools" }, { title: "Aquarium Volume Calculator", href: "/tools/aquarium-volume-calculator", category: "Tools" }, { title: "Substrate Calculator", href: "/tools/substrate-calculator", category: "Tools" }, { title: "Species Hub", href: "/species", category: "Species" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Shop a stocking kit', href: '#shop' },
              { label: 'Why not inch-per-gallon?', href: '#inch-rule' },
              { label: 'How the model works', href: '#model' },
              { label: 'Reading the result', href: '#reading' },
              { label: 'Planning bands by tank size', href: '#by-size' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Plan your tank"
            links={[
              { label: 'Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Substrate Calculator', href: '/tools/substrate-calculator' },
              { label: 'Filter GPH Calculator', href: '/tools/filter-gph-calculator' },
              { label: 'Water Change Calculator', href: '/tools/water-change-calculator' },
              { label: 'Aquarium Setup Guide', href: '/setup' },
              { label: 'Cycling Guide', href: '/setup/aquarium-cycling-guide' },
              { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' },
              { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' },
              { label: 'All Species Profiles', href: '/species' },
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
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-05-01T00:00:00Z" updatedAt="2026-09-08T00:00:00Z" reviewedBy="Editorial team" />


        <StockingWaterProvider>
          <h2 id="calculator">The Calculator</h2>
          <Calculator />
          <div className="mb-8">
            <EmailCapture
              variant="inline"
              siteId="fish-com"
              title="Save the stocking rules"
              subtitle="Planning ceiling, 60–80% headroom, and why inch-per-gallon fails."
              source="tools-stocking-calculator-under-hero"
              resourceText={`Aquarium stocking — planning rules

• Ignore "1 inch of fish per gallon." It ignores body mass, surface area, and temperament.
• This tool sketches a slim-inch / bioload ceiling from net volume, surface area, filtration, and aquascape — not a species count.
• Plan around 60–80% of the ceiling. Headroom is insurance.
• Saltwater uses a tighter ceiling (24 sq in per slim inch and 0.6 slim-in/gal vs freshwater 12 / 1.1). Reef style multiplies that by 0.55.
• Choose species from adult-size care guides, not from this estimate.

Use the calculator on this page for the estimate.
`}
              resourceLabel="Save the planning rules"
            />
          </div>

          {/* Money path — hops follow the calculator water-type selection.
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
          <StockingShop />
        </StockingWaterProvider>

        <h2 id="inch-rule">Why &quot;1 Inch Per Gallon&quot; Is Wrong</h2>
        <p>
          You&apos;ll still see the inch-per-gallon rule everywhere. It&apos;s wrong, and following it kills fish. The rule treats a 1-inch
          neon tetra and a 1-inch chunk of goldfish as equivalent stocking — but a 6-inch goldfish produces roughly <strong>30 times</strong> the
          ammonia of six 1-inch tetras. Body mass scales by length cubed, not linearly.
        </p>
        <p>The rule also ignores:</p>
        <ul>
          <li><strong>Surface area</strong> — where oxygen actually enters the tank.</li>
          <li><strong>Schooling needs</strong> — a single neon tetra is more stressed than a school of 10, even though &quot;1 inch&quot; says otherwise.</li>
          <li><strong>Territory</strong> — most cichlids claim 200+ sq inches each, regardless of body length.</li>
          <li><strong>Swimming style</strong> — active swimmers (danios, barbs) need 2–3× the space of slow fish (gouramis, bettas).</li>
        </ul>

        <h2 id="model">How the Model Works</h2>
        <p>
          The calculator and the table below call the same function. The number is a <strong>slim-inch bioload ceiling</strong> for a thin community body type (tetra / rasbora shape). It is not a published stocking standard, not a lab calibration, and not a species model — this repo does not carry adult-size, schooling, or mass-conversion data that would be required to output a headcount.
        </p>
        <p>Each result is the tighter of two bounds, then scaled by filtration and aquascape:</p>
        <ul>
          <li>
            <strong>Surface bound</strong> — length × width, then 12 sq in of surface per slim-community inch in freshwater, or 24 sq in per slim inch in saltwater. The 2× saltwater factor is a planning tightening (lower dissolved oxygen + typically leaner marine stocking), not a measured O₂ table.
          </li>
          <li>
            <strong>Volume bound</strong> — 1.1 slim inches per US gallon in freshwater, 0.6 in saltwater. This is a sanity cap so a wide, shallow footprint cannot invent unlimited capacity.
          </li>
          <li>
            <strong>Filtration factor</strong> — underrated 0.75, manufacturer-rated 1.0, oversized 1.3, heavy (sump / dual canister) 1.6. These are ordinal multipliers, not measured bio-media capacity.
          </li>
          <li>
            <strong>Style factor</strong> — community 1.0, heavily planted 1.15, territorial cichlid 0.7, reef 0.55. Planted and reef options are limited to the matching water type so a saltwater selection cannot keep a freshwater planted multiplier.
          </li>
          <li>
            <strong>60–80% planning band</strong> — editorial conservatism on top of the ceiling, not a measured stability threshold. The default 40-gallon breeder (36 × 18, freshwater community, rated filter) is bound by volume at 44 slim inches, with a 26–35 planning band.
          </li>
        </ul>
        <p>
          Because the coefficients are heuristics, a disclaimer does not make a species list valid. The tool therefore does not convert slim inches into “how many angels / tetras / tangs.” Species pairing lives on care guides and the tank-mate checker.
        </p>

        <h2 id="reading">Reading the Result</h2>
        <p>
          Volume and surface area set two bounds; the tool reports the tighter one, then the 60–80% planning band. What the model does <em>not</em> decide:
        </p>
        <ul>
          <li><strong>Schooling minimums</strong> — many tetras and rasboras need a group of 6+ even when the inch math would &quot;fit&quot; fewer.</li>
          <li><strong>Territory and adult size</strong> — angelfish, cichlids, and many marine fish need far more space than a length-to-inches split implies.</li>
          <li><strong>Heavy-bodied fish</strong> — goldfish, oscars, and similar fish consume this ceiling much faster than slim community fish. The model does not convert length into mass.</li>
          <li><strong>Compatibility</strong> — temperament, water chemistry, and tank height live on species pages and the tank-mate checker, not in this number.</li>
        </ul>
        <p>
          Treat the result as a <strong>ceiling</strong>. Plan around 60–80% of it so parameters stay stable when something goes wrong. Confirm the load with a water test as you add fish.
        </p>

        <h2 id="by-size">Planning Bands by Tank Size</h2>
        <p>
          The table applies the same function used by the calculator — rated filter, standard community style — to typical US glass footprints. It is not a species mix and not a guarantee that every 10-gallon or 75-gallon tank has these exact dimensions.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Typical footprint</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Freshwater community (slim in)</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Saltwater community (slim in)</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              {EXAMPLE_FOOTPRINTS.map((tank) => {
                const fresh = estimateStocking({
                  gal: tank.gal,
                  lengthIn: tank.lengthIn,
                  widthIn: tank.widthIn,
                  waterType: 'fresh',
                  filtration: 'rated',
                  style: 'community',
                })
                const salt = estimateStocking({
                  gal: tank.gal,
                  lengthIn: tank.lengthIn,
                  widthIn: tank.widthIn,
                  waterType: 'salt',
                  filtration: 'rated',
                  style: 'community',
                })
                return (
                  <tr key={tank.id} className="border-b border-brand-border/50">
                    <td className="py-2 pr-4">
                      {tank.label}
                      <span className="block text-2xs text-brand-text-light">{tank.footprint}</span>
                    </td>
                    <td className="py-2 pr-4">{fresh ? formatSlimBand(fresh) : '—'}</td>
                    <td className="py-2">{salt ? formatSlimBand(salt) : '—'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p>
          Reef style multiplies the saltwater result by 0.55 (same function, different style factor). For species pairing — not headcounts from this table — use the{' '}
          <Link href="/tools/tank-mate-compatibility-checker">tank mate compatibility checker</Link> and the{' '}
          <Link href="/species">species hub</Link>.
        </p>
        <p>
          Once you know your stocking ceiling, filtration becomes the lever. Oversizing your filter is the single cheapest way to raise it.
          Size the flow first with the <Link href="/tools/filter-gph-calculator">filter GPH calculator</Link>, then
          plan the weekly siphon with the <Link href="/tools/water-change-calculator">water change calculator</Link>.
          Bottom-dwellers (corydoras, loaches) need a sand or fine-gravel bed — size the bags with the{' '}
          <Link href="/tools/substrate-calculator">substrate calculator</Link>.
          See our <Link href="/reviews/best-aquarium-filters">aquarium filter reviews</Link> and{' '}
          <Link href="/reviews/best-canister-filters">canister filter reviews</Link> for picks by tank size.
          If your result is under 20 gallons, see our <Link href="/reviews/best-nano-tanks">nano tank reviews</Link> for
          purpose-built setups that handle the tight stocking ceiling more reliably than standard tanks.
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
