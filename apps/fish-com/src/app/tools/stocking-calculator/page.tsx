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

const URL = 'https://fish.com/tools/stocking-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Stocking Calculator — How Many Fish Can I Keep? | Fish.com',
  description: 'Modern aquarium stocking calculator using surface area, filtration, and aquascape style — not the broken inch-per-gallon rule. Freshwater and saltwater.',
  path: '/tools/stocking-calculator',
})

const schema = buildHowToSchema({
  name: 'How to figure out how many fish can fit in an aquarium',
  description: 'Use tank volume, surface area, filtration capacity, and species behavior to estimate honest stocking limits rather than the outdated inch-per-gallon rule.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    { name: 'Find net water volume', text: 'Calculate the real water volume of your tank (not the box label) using length × width × height and a 90% fill factor.' },
    { name: 'Measure surface area', text: 'Multiply tank length by width (front-to-back). Surface area drives oxygen exchange and is the real ceiling on fish stocking.' },
    { name: 'Account for filtration', text: 'Filter flow and bio-media volume can raise capacity 30–60% over a barely-rated filter. Oversize on purpose for stocking flexibility.' },
    { name: 'Adjust for aquascape', text: 'Heavily planted tanks support more stocking; territorial cichlids and reef tanks support significantly less per gallon.' },
    { name: 'Stock to 60–80%', text: 'Use the calculator output as a ceiling and stock to 60–80% of it. This gives parameter stability, room to grow, and forgiveness when something goes wrong.' },
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
    'Free interactive aquarium stocking calculator that estimates how many fish a tank can house using net water volume, surface area, filtration capacity, and aquascape style — a modern replacement for the outdated inch-per-gallon rule.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Surface-area-based stocking model (oxygen exchange) rather than inch-per-gallon',
    'Adjusts for filtration class (HOB, canister, sump) and aquascape style',
    'Separate freshwater and saltwater modes',
    'Outputs slim-inch equivalents with body-mass conversion factors',
    'Recommends a 60–80% target band for parameter stability',
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
    answer: 'No. The inch-per-gallon rule was published in beginner aquarium books in the 1970s and has been disproven for decades. It ignores body mass (a 6-inch goldfish has 30× the bioload of six 1-inch tetras), surface area (where gas exchange happens), schooling needs, swimming style, and temperament. Modern stocking uses surface area, filtration, and species behavior.',
  },
  {
    question: 'Why does tank surface area matter more than volume?',
    answer: 'Oxygen enters the tank at the air-water boundary. Two tanks with the same gallons but different shapes — a 20-gallon long (30 × 12) and a 20-gallon high (24 × 12) — have very different stocking ceilings because the long tank has 25% more surface area. Tall, narrow tanks are oxygen-poor and bad for active fish.',
  },
  {
    question: 'How does filtration change stocking capacity?',
    answer: 'Filters do two things that matter for stocking: physical waste removal (mechanical) and ammonia/nitrite conversion (biological). A filter rated barely for your tank handles a sparse stocking. An oversized filter — or a canister + HOB combo — adds 30–60% capacity by giving you redundancy and a larger bacterial colony. Sumps roughly double effective capacity.',
  },
  {
    question: 'Should I stock to 100% of what the calculator says?',
    answer: 'No. Stock to 60–80%. Parameter stability is the #1 predictor of fish survival. Fully stocked tanks are less forgiving — a missed water change, a filter failure, or a sick fish can cascade quickly. Headroom is insurance. Plan for adult sizes, not the small juveniles you buy.',
  },
  {
    question: 'Why is saltwater stocking so much lower?',
    answer: 'Saltwater holds about 20% less dissolved oxygen than freshwater at the same temperature, reef fish have higher metabolic demands, and corals add their own bioload while being intolerant of nutrient swings. A 75-gallon freshwater community might house 60+ inches of fish; a 75-gallon reef typically tops out at 25–30 inches of mixed reef fish.',
  },
]

export default function StockingCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Stocking Calculator',
        subtitle: 'How many fish can your tank actually hold? Modern surface-area model adjusted for filtration and aquascape style — not the broken inch-per-gallon rule.',
        category: 'Calculators',
        categoryHref: '/tools',
        authorAvatar: '🐠',
        publishedAt: 'May 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Stocking Calculator' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Tools Hub", href: "/tools", category: "Tools" }, { title: "Aquarium Volume Calculator", href: "/tools/aquarium-volume-calculator", category: "Tools" }, { title: "Species Hub", href: "/species", category: "Species" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Why not inch-per-gallon?', href: '#inch-rule' },
              { label: 'Reading the result', href: '#reading' },
              { label: 'Stocking by tank size', href: '#by-size' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Plan your tank"
            links={[
              { label: 'Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Aquarium Setup Guide', href: '/setup' },
              { label: 'Cycling Guide', href: '/setup/aquarium-cycling-guide' },
              { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' },
              { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' },
              { label: 'All Species Profiles', href: '/species' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Stocking tips, species spotlights, every Thursday."
            source="stocking-calculator"
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

        <h2 id="reading">Reading the Result</h2>
        <p>
          Our calculator outputs <strong>slim inches</strong> — equivalent inches of a thin community fish like a tetra or rasbora. To convert to other species:
        </p>
        <ul>
          <li><strong>Goldfish, oscars, large cichlids:</strong> count 3× their length in slim inches (a 6-inch oscar = 18 slim inches).</li>
          <li><strong>Plecos, catfish:</strong> count 1.5× their length.</li>
          <li><strong>Standard community fish (tetras, rasboras, livebearers):</strong> 1× length.</li>
          <li><strong>Shrimp, snails:</strong> negligible bioload — don&apos;t count them.</li>
        </ul>
        <p>
          And remember: the calculator gives a <strong>ceiling</strong>. Stock to 60–80% for parameter stability, room to grow, and survivability during equipment failures.
        </p>

        <h2 id="by-size">Realistic Stocking by Tank Size</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Tank Size</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Realistic Community Stocking</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">10 gal</td><td className="py-2">1 betta + 5 ember tetras + cleanup snails, or 8–10 small schooling fish</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">20 gal long</td><td className="py-2">10–12 small tetras + 4 corydoras + centerpiece (gourami or honey gourami)</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">40 gal breeder</td><td className="py-2">15 cardinal tetras + 8 harlequin rasboras + 6 corydoras + small centerpiece + cleanup crew</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">75 gal</td><td className="py-2">2 angelfish + large schools (20+ tetras, 10+ rasboras) + 8 corydoras + bristlenose pleco</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">125 gal</td><td className="py-2">Large schools, multiple centerpieces, or 4–6 medium SA cichlids (severums, geophagus)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          For specific species pairings, see our <Link href="/species/betta-fish-tank-mates">betta tank mates</Link> guide,{' '}
          <Link href="/species/neon-tetra">neon tetra</Link> profile, and <Link href="/species/angelfish">angelfish</Link> profile.
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
