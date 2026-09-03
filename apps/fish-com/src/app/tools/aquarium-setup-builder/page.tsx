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

const URL = 'https://fish.com/tools/aquarium-setup-builder'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Setup Builder — What You Need to Start a Tank | Fish.com',
  description:
    'What do you need to start a fish tank? Enter tank size and setup type for a sized starter-kit checklist: filter, heater, light, test kit, and more.',
  path: '/tools/aquarium-setup-builder',
})

const howToSchema = buildHowToSchema({
  name: 'How to set up your first aquarium',
  description:
    'Build a sized equipment checklist for a new aquarium from tank size and setup type, then cycle the tank before adding fish.',
  url: URL,
  totalTime: 'PT5M',
  steps: [
    { name: 'Choose tank size and type', text: 'Pick the biggest tank you have room and budget for — larger water volumes are more stable and forgiving — and the setup type (community, planted, betta, goldfish, or nano).' },
    { name: 'Size the core equipment', text: 'Filter rated at roughly four times the tank volume per hour; a heater of about five watts per gallon for tropical setups (none for coldwater goldfish); lighting and substrate to match the setup type.' },
    { name: 'Add the essentials owners forget', text: 'A liquid test kit and a water conditioner are non-negotiable — you cannot see the ammonia and chlorine they manage.' },
    { name: 'Cycle before stocking', text: 'Run the filter for several weeks until it processes ammonia and nitrite to zero, then add fish slowly. This is the step that prevents most early fish loss.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Setup Builder',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free aquarium setup builder. Enter tank size and setup type to generate a complete, sized starter-kit checklist — filter turnover, heater wattage, lighting, substrate, test kit, water conditioner, and plants — each with why it matters and a link to the relevant review or setup guide.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Inputs: tank size (gallons) and setup type (community, planted, betta, goldfish, nano)',
    'Filter sized to ~4× turnover per hour',
    'Heater wattage at ~5 W/gallon (omitted for coldwater)',
    'Setup-type-aware lighting, substrate, and plant guidance',
    'Flags the essentials new aquarists skip: test kit, conditioner, and cycling',
  ],
  publisher: { '@type': 'Organization', name: 'Fish.com Editorial', url: 'https://fish.com' },
}

const FAQS = [
  {
    question: 'What do I need to start a fish tank?',
    answer:
      'The core kit is: the tank itself, a filter rated at roughly four times the tank volume per hour, a heater (about five watts per gallon for tropical fish — none for coldwater goldfish), a light, substrate, a liquid test kit, and a water conditioner. Before any fish go in, you cycle the filter for several weeks so it can process ammonia and nitrite. The builder above sizes each of these to your tank.',
  },
  {
    question: 'What size filter do I need for my aquarium?',
    answer:
      'A common rule of thumb is at least four times the tank volume in flow per hour — so a 20-gallon tank wants a filter rated around 80+ GPH. More flow is generally fine (within reason for the fish), and on tanks of about 40 gallons and up a canister filter is often the better choice. The filter is where the beneficial bacteria live, so it is the single most important piece of equipment.',
  },
  {
    question: 'What wattage heater does my tank need?',
    answer:
      'Roughly five watts per gallon holds a stable tropical temperature in a normal room, so a 20-gallon tank wants about a 100-watt heater. Cold rooms or large tanks benefit from two smaller heaters for redundancy. Coldwater fish such as common goldfish do not need a heater at all. Our heater wattage calculator works the exact figure from your room and target temperatures.',
  },
  {
    question: 'Do I really need a test kit?',
    answer:
      'Yes — it is the most valuable early purchase. Ammonia and nitrite are invisible and are what kill fish in a new tank, so a liquid master kit (ammonia, nitrite, nitrate, pH) is how you track the nitrogen cycle and catch trouble before fish suffer. Liquid kits are more accurate than strips.',
  },
  {
    question: 'How much does a beginner aquarium setup cost?',
    answer:
      'It varies widely with tank size and equipment quality, but the equipment generally costs more than the tank itself — the filter, heater, light, and test kit add up. Buying a slightly larger, better-filtered tank up front is usually cheaper than upgrading later, and a more stable tank is easier to keep alive.',
  },
]

export default function AquariumSetupBuilderPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Setup Builder',
        subtitle:
          'What do you actually need to start a fish tank? Enter your tank size and setup type and get a complete, sized starter-kit checklist — filter, heater, light, substrate, test kit, and more — with why each matters and where to learn or buy.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Aquarium Setup Builder' },
      ]}
      schema={howToSchema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Tools' },
        { title: 'Aquarium Setup Guide', href: '/setup', category: 'Setup' },
        { title: 'Heater Wattage Calculator', href: '/tools/heater-wattage-calculator', category: 'Tools' },
        { title: 'Substrate Calculator', href: '/tools/substrate-calculator', category: 'Tools' },
        { title: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters', category: 'Reviews' },
        { title: 'Best Water Test Kits', href: '/reviews/best-water-test-kits', category: 'Reviews' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The builder', href: '#builder' },
              { label: 'The order to do it in', href: '#order' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Equipment & setup"
            links={[
              { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' },
              { label: 'Best Aquarium Heaters', href: '/reviews/best-aquarium-heaters' },
              { label: 'Substrate Calculator', href: '/tools/substrate-calculator' },
              { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
              { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' },
              { label: 'Aquarium Setup Guide', href: '/setup' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Equipment picks and fishkeeping tips every Thursday."
            source="aquarium-setup-builder"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-14T00:00:00Z" updatedAt="2026-06-14T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="builder">The builder</h2>
        <p>
          Enter your tank size and what kind of setup you want. The builder returns a sized checklist
          of everything you need — and flags the two things new aquarists most often skip (a test kit
          and cycling the tank), which is what causes most early fish loss. The numbers are rules of
          thumb to get you in the right ballpark; the linked guides and reviews go deeper.
        </p>
        <Calculator />

        <h2 id="order">The order to do it in</h2>
        <p>
          Buy and assemble in this order: tank and stand first, then filter, heater, and light; add
          substrate and décor (size the bags with the{' '}
          <Link href="/tools/substrate-calculator">substrate calculator</Link>); fill and dechlorinate;
          and only then begin the nitrogen cycle. The
          single biggest beginner mistake is adding fish on day one — a tank needs several weeks for
          its filter to grow the bacteria that make fish waste safe. Our{' '}
          <a href="/setup/aquarium-cycling-guide">cycling guide</a> and{' '}
          <a href="/health/new-tank-syndrome">new-tank-syndrome</a> explainer cover that step, and the{' '}
          <a href="/tools/stocking-calculator">stocking calculator</a> tells you how many fish your
          finished tank can hold.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
