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
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://fish.com/tools/pond-volume-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Pond Volume Calculator — Koi Pond Gallons & Liters | Fish.com',
  description:
    'Calculate koi or garden pond volume in gallons and liters. Rectangular, circular, and oval ponds — then size a liner, pump, and filter kit.',
  path: '/tools/pond-volume-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to calculate koi pond volume in gallons',
  description:
    'Measure the pond length, width, and average depth, calculate the surface area for the shape, multiply by depth, then multiply cubic feet by 7.48 to get US gallons.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    { name: 'Measure dimensions', text: 'Measure the pond length, width, and average depth in feet or meters. Use average depth, not the deepest point, if the bottom is contoured.' },
    { name: 'Pick the formula for the shape', text: 'Rectangular: length × width × depth. Circular: π × radius² × depth. Oval: π × (length/2) × (width/2) × depth.' },
    { name: 'Convert to gallons', text: 'Multiply the volume in cubic feet by 7.48 to get US gallons, or multiply gallons by 3.785 to get liters.' },
    { name: 'Adjust for irregular shape', text: 'For ponds with sloped sides, shelves, or an irregular outline, multiply by about 0.85 to get closer to true water volume.' },
    { name: 'Size liner, pump, and filter from the gallons', text: 'Use the gallon figure to pick an EPDM liner, a submersible pump that turns the pond over about once an hour, and a filter or skimmer kit rated at or above that volume.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pond Volume Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'PondCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive koi and garden pond volume calculator. Choose a rectangular, circular, or oval pond, enter the dimensions and average depth in feet or meters, and get the volume in US gallons and liters, with an optional ~85% factor for irregular or sloped-side ponds.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Rectangular, circular, and oval pond shapes',
    'Inputs in feet or meters',
    'Outputs US gallons and liters',
    'Optional ~85% factor for irregular or sloped-side ponds',
    'Uses average depth for contoured bottoms',
  ],
  publisher: { '@type': 'Organization', name: 'Fish.com Editorial', url: 'https://fish.com' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pond Volume Calculator',
  description:
    'How to calculate the volume of a koi or garden pond in gallons and liters — the per-shape formulas, the cubic-feet-to-gallons conversion, a worked example, and an ~85% factor for irregular ponds.',
  url: URL,
  datePublished: '2026-06-11T00:00:00Z',
  dateModified: '2026-09-03T00:00:00Z',
  author: { '@type': 'Organization', name: 'Fish.com Editorial' },
  publisher: { '@type': 'Organization', name: 'Fish.com', url: 'https://fish.com' },
  mainEntityOfPage: URL,
}

const FAQS = [
  {
    question: 'How many gallons is my koi pond?',
    answer:
      'Multiply length × width × average depth (in feet) and then by 7.48 for a rectangular pond. For example, a 10 × 8 foot pond with a 2-foot average depth is 10 × 8 × 2 × 7.48052 ≈ 1,197 US gallons (about 4,531 liters). An 8 × 6 foot pond at 2 feet is 8 × 6 × 2 × 7.48 ≈ 718 US gallons. For a circular pond use π × radius² × depth × 7.48, and for an oval use π × (length/2) × (width/2) × depth × 7.48. If the sides slope or the outline is irregular, multiply the result by about 0.85.',
  },
  {
    question: 'How do I calculate pond volume in liters?',
    answer:
      'Calculate the volume in US gallons first, then multiply by 3.785 to get liters. If you prefer to work in metric throughout, compute length × width × depth in meters to get cubic meters, then multiply by 1,000 to get liters. The calculator above does both at once when you switch the unit toggle to meters.',
  },
  {
    question: 'Should I use the deepest point or the average depth?',
    answer:
      'Use the average depth. Most koi ponds are deeper in the middle and shallower at the edges and on planting shelves. Plugging in the deepest point overestimates the volume — sometimes badly — which then leads to under-dosing treatments and over-sizing equipment. Estimate the average across the whole pond, or apply the ~85% irregular-shape factor.',
  },
  {
    question: 'Why does pond shape matter for the volume?',
    answer:
      'A circular or oval pond holds less water than a rectangle with the same length and width because the corners are cut off. A rectangle uses length × width for area, while a circle uses π × radius² and an oval uses π × (length/2) × (width/2). Using the rectangular formula on a round pond can overestimate volume by 20% or more, so pick the shape that matches your pond.',
  },
  {
    question: 'Why does knowing pond volume matter for koi?',
    answer:
      'Accurate volume is the foundation of pond keeping. It sets the correct dose for pond treatments and medications, the right flow rate for pumps and filters (a common target is turning the pond over once every 1–2 hours), liner size, and a realistic koi stocking level. An estimate that is off by 30% can mean an ineffective treatment or an undersized filter, so it is worth measuring carefully.',
  },
]

export default function PondVolumeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Pond Volume Calculator',
        subtitle:
          'Estimate your koi or garden pond volume in gallons and liters. Rectangular, circular, and oval ponds — then size a liner, pump, and filter kit.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Pond Volume Calculator' },
      ]}
      schema={howToSchema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Tools' },
        { title: 'Backyard Pond Setup Guide', href: '/setup/pond-guide', category: 'Pond Setup' },
        { title: 'Koi Care Guide', href: '/species/koi', category: 'Species' },
        { title: 'Aquarium Volume Calculator', href: '/tools/aquarium-volume-calculator', category: 'Tools' },
        { title: 'Substrate Calculator', href: '/tools/substrate-calculator', category: 'Tools' },
        { title: 'Stocking Calculator', href: '/tools/stocking-calculator', category: 'Tools' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Shop pond gear', href: '#shop' },
              { label: 'The formulas', href: '#formulas' },
              { label: 'Worked example', href: '#example' },
              { label: 'Average depth & irregular shapes', href: '#caveats' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Plan your pond"
            links={[
              { label: 'Backyard Pond Setup Guide', href: '/setup/pond-guide' },
              { label: 'Koi Care Guide', href: '/species/koi' },
              { label: 'Aquarium Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Substrate Calculator', href: '/tools/substrate-calculator' },
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'All Calculators', href: '/tools' },
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

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Pond setup checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the pond setup checklist — volume formulas, liner overlap, pump turnover, and first-fill
            conditioner — so you can size gear without re-running the calculator. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Pond setup checklist"
            subtitle="Email the pond setup checklist — volume formulas, liner, pump turnover, first-fill conditioner. No spam."
            ctaText="Email my pond setup checklist"
            source="tools-pond-volume-under-hero"
          />
        </div>

        <h2 id="calculator">The Calculator</h2>
        <p>
          Choose a rectangular, circular, or oval pond, enter length (or diameter), width, and average
          depth, and get US gallons plus liters. Use average depth, not the deepest point.
        </p>
        <Calculator />

        {/* Money path — live amazon-brand search hops (liner / pump / filter-skimmer / conditioner).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div id="shop" className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop pond gear
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            Gallons set liner size, pump GPH (about one pond volume per hour), and filter / skimmer
            rating. Condition tap water before the first fill. Same Amazon hops used with the{' '}
            <Link
              href="/setup/pond-guide"
              className="text-brand-primary no-underline hover:underline"
            >
              backyard pond setup guide
            </Link>{' '}
            and the{' '}
            <Link href="/species/koi" className="text-brand-primary no-underline hover:underline">
              koi care guide
            </Link>
            . Fish.com earns a commission on qualifying purchases at no extra cost to you.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/epdm+pond+liner?s=tools-pond-volume"
              amazonLabel="Shop pond liners on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/submersible+pond+pump?s=tools-pond-volume"
              amazonLabel="Shop submersible pond pumps on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/pond+filter+skimmer+kit?s=tools-pond-volume"
              amazonLabel="Shop pond filter / skimmer kits on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/pond+dechlorinator+water+conditioner?s=tools-pond-volume"
              amazonLabel="Shop pond dechlorinator on Amazon →"
            />
          </div>
        </div>

        <h2 id="formulas">The Formulas</h2>
        <p>
          Pond volume is the surface area of the pond multiplied by its average depth, then converted from cubic feet to
          gallons by multiplying by <strong>7.48</strong> (US gallons per cubic foot):
        </p>
        <ul>
          <li><strong>Rectangular:</strong> length × width × depth × 7.48</li>
          <li><strong>Circular:</strong> π × radius² × depth × 7.48 &nbsp;(radius = diameter ÷ 2)</li>
          <li><strong>Oval:</strong> π × (length ÷ 2) × (width ÷ 2) × depth × 7.48</li>
        </ul>
        <p>
          To get liters, multiply the gallon figure by <strong>3.785</strong>. All dimensions must be in feet for the
          7.48 factor to work; the calculator converts meters for you when you switch the toggle.
        </p>

        <h2 id="example">Worked Example</h2>
        <p>Take a rectangular koi pond that is 10 feet long, 8 feet wide, with an average depth of 2 feet:</p>
        <ul>
          <li><strong>Volume in cubic feet:</strong> 10 ft × 8 ft × 2 ft = 160 ft³.</li>
          <li><strong>US gallons:</strong> 160 ft³ × 7.48052 ≈ 1,197 gallons.</li>
          <li><strong>Liters:</strong> 1,197 × 3.785 ≈ 4,531 liters.</li>
        </ul>
        <p>
          A circular pond 10 feet across (radius 5 ft) and 2 feet deep works out to π × 5² × 2 × 7.48052 ≈ 1,175 US gallons.
          An 8 × 6 foot rectangle at 2 feet is 96 ft³ × 7.48 ≈ 718 gallons. If either pond has sloped sides or planting
          shelves, multiply by about 0.85 — so the 10 × 8 × 2 rectangle becomes roughly{' '}
          <strong>1,017 gallons</strong> of actual water. These are estimates; the more contoured the pond, the more the
          irregular-shape factor matters.
        </p>

        <h2 id="caveats">Average Depth &amp; Irregular Shapes</h2>
        <p>
          Two things trip people up when sizing a pond, and both push the estimate too high if you ignore them:
        </p>
        <ul>
          <li>
            <strong>Use average depth, not the deepest point.</strong> Koi ponds are usually deeper in the center and
            shallow at the margins. Plugging in the maximum depth overstates volume.
          </li>
          <li>
            <strong>Account for sloped sides and shelves.</strong> Liners drape into curved, sloping profiles rather than
            perfect boxes. The ~85% irregular factor is a reasonable correction for a typical contoured liner pond.
          </li>
        </ul>
        <p>
          Once you have a number, use it to size equipment and treatments conservatively. For backyard construction
          (excavation, EPDM overlap, filtration), see the{' '}
          <Link href="/setup/pond-guide">backyard pond setup guide</Link>. For indoor tanks instead, the{' '}
          <Link href="/tools/aquarium-volume-calculator">aquarium volume calculator</Link> handles glass-tank shapes, and
          the <Link href="/tools/substrate-calculator">substrate calculator</Link> estimates gravel and sand by weight.
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
              label: 'How to calculate the volume of a pond',
              publisher: 'The Spruce',
              url: 'https://www.thespruce.com/',
            },
            {
              label: 'Koi pond design, filtration, and stocking basics',
              publisher: 'The Spruce Pets',
              url: 'https://www.thesprucepets.com/',
            },
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
