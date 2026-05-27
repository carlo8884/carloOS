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
import Recommender from './Recommender'

const URL = 'https://fish.com/tools/equipment-recommender'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Equipment Recommender — Tell Us Your Tank, Get the Right Gear | Fish.com',
  description: 'Personalized aquarium equipment recommendations by tank size, water type, and style. Filter, heater, lighting, and test-kit picks linked to full review pages.',
  path: '/tools/equipment-recommender',
})

const schema = buildHowToSchema({
  name: 'How to choose the right aquarium equipment for your tank',
  description: 'Use tank volume, water type, and aquascape style to pick the right filter, heater, lighting, and water testing equipment without overspending or under-equipping.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    { name: 'Match filter to bioload', text: 'Use a HOB on tanks under 30 gal, a canister from 30–75 gal, and a sump or dual canisters above 75 gal. Always oversize by 1.5×.' },
    { name: 'Size heaters for redundancy', text: 'On tanks 40 gal and up, run two smaller heaters rather than one big one. Coldwater tanks (goldfish) usually need no heater at all.' },
    { name: 'Pick lighting by livestock', text: 'Generic LEDs are fine for fish-only tanks, planted-tank LEDs are required for live plants, and reef-capable LEDs are required for corals.' },
    { name: 'Choose a real test kit', text: 'Test strips are inaccurate. Use the API Master liquid kit for freshwater or Salifert / Red Sea for saltwater. Testing is the cheapest insurance in the hobby.' },
    { name: 'Add specialty gear only when needed', text: 'Planted tanks need fertilizers. Saltwater needs a refractometer. Most tanks do NOT need UV sterilizers, CO2, or wave makers — buy them only when you have a specific reason.' },
  ],
})

const FAQS = [
  {
    question: 'Why oversize the filter by 1.5×?',
    answer: 'Manufacturer flow ratings assume a brand-new filter with clean media on day one. Real flow drops 30–50% as media clogs between cleanings. Oversizing by 1.5× gives you headroom so flow stays adequate even at the end of a maintenance cycle, and gives extra bio-media volume for the bacterial colony to support a heavier stocking.',
  },
  {
    question: 'Do I really need two heaters?',
    answer: 'On tanks 40 gallons and larger, yes. The two failure modes of an aquarium heater are catastrophic in opposite directions: stuck-on cooks the tank, failed-off chills it. Two smaller heaters means a single failure can\'t do either — the surviving heater keeps temperature in a safe band while you replace the dead one.',
  },
  {
    question: 'What is the cheapest equipment I should NOT skimp on?',
    answer: 'The liquid test kit. An API Master Test Kit costs about $30 and tells you ammonia, nitrite, nitrate, and pH. Test strips cost $15 and lie to you. Most beginner fish deaths trace back to an undetected ammonia or nitrite spike — and you can\'t catch that without a real test kit.',
  },
  {
    question: 'Can I run a planted tank without CO2?',
    answer: 'Yes. Low-tech planted tanks with java fern, anubias, amazon sword, cryptocoryne, and most stems do beautifully on a planted-tank LED and weekly all-in-one fertilizer dosing. CO2 injection is only required for high-light, demanding species like dwarf hairgrass carpet or red plants.',
  },
  {
    question: 'How does this recommender differ from the gear advice on review pages?',
    answer: 'The reviews rank individual products head-to-head — best filter, best heater, etc. This recommender does the upstream step: which category of product is right for your specific tank in the first place. Use the recommender to narrow scope, then click through to the review for the actual product pick.',
  },
]

export default function EquipmentRecommenderPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Equipment Recommender',
        subtitle: 'Tell us your tank size, water type, and style — we\'ll tell you which filter, heater, lighting, and test kit you actually need (and link to the full reviews).',
        category: 'Tools',
        categoryHref: '/reviews',
        authorAvatar: '🧭',
        publishedAt: 'May 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Equipment Recommender' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The recommender', href: '#recommender' },
              { label: 'How we decide', href: '#methodology' },
              { label: 'When to upgrade', href: '#upgrade' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Full equipment reviews"
            links={[
              { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' },
              { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' },
              { label: 'Best Aquarium Heaters', href: '/reviews/best-aquarium-heaters' },
              { label: 'Best Aquarium Lighting', href: '/reviews/best-aquarium-lighting' },
              { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
              { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' },
              { label: 'Best Planted-Tank Fertilizers', href: '/reviews/best-planted-tank-fertilizers' },
            ]}
          />
          <RelatedLinks
            title="Planning your tank?"
            links={[
              { label: 'Aquarium Setup Guide', href: '/setup' },
              { label: 'Cycling Guide', href: '/setup/aquarium-cycling-guide' },
              { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' },
              { label: 'Saltwater Tank Setup', href: '/setup/saltwater-tank-setup' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Equipment picks and fishkeeping tips every Thursday."
            source="equipment-recommender"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <h2 id="recommender">The Recommender</h2>
        <Recommender />

        <h2 id="methodology">How We Decide</h2>
        <p>
          The recommender doesn&apos;t pick individual products — that&apos;s what the{' '}
          <Link href="/reviews">full review pages</Link> do. It picks the <strong>category</strong> of product that&apos;s right
          for your tank, then sends you to the right review. The logic is a small set of rules built from a decade of aquarist
          consensus, not a magic algorithm:
        </p>
        <ul>
          <li><strong>Filter type</strong> scales with tank size and bioload. HOB up to ~30 gal, canister 30–75 gal, sump or dual canisters above 75 gal. Reef tanks get a sump regardless of size.</li>
          <li><strong>Heater wattage</strong> follows roughly 3 W/gal for a 10°F lift. Tanks 40 gal and up get two smaller heaters instead of one large one for safety.</li>
          <li><strong>Lighting</strong> is driven entirely by livestock: fish-only tanks accept any LED, planted tanks need real PAR, reef tanks need controllable spectrum.</li>
          <li><strong>Testing</strong> is non-negotiable. Freshwater gets the API Master Kit; saltwater adds calcium, alkalinity, and magnesium kits from Salifert or Red Sea.</li>
          <li><strong>Specialty gear</strong> (fertilizers, refractometers, AIO tanks) is only suggested when the inputs make it relevant — we don&apos;t pad the list with things you don&apos;t need.</li>
        </ul>

        <h2 id="upgrade">When To Upgrade Equipment</h2>
        <p>
          Most aquarists over-buy at setup, then under-upgrade later. The recommender errs toward the upgrade you&apos;ll actually
          need 6–12 months in, not the bare minimum to start. A few signals that say <em>upgrade now</em>:
        </p>
        <ul>
          <li><strong>Filter:</strong> nitrate creeping past 40 ppm despite weekly water changes, or visibly slow flow within a week of cleaning media.</li>
          <li><strong>Heater:</strong> any temperature drop below target overnight (heater is undersized for the room) or any single-heater failure history.</li>
          <li><strong>Lighting:</strong> plants thinning, leggy, or pale; coral colors fading. Both signal insufficient PAR.</li>
          <li><strong>Test kit:</strong> if you&apos;re still on test strips, replace with a liquid kit before your next water change. Strips can read &quot;safe&quot; while ammonia is actually at lethal levels.</li>
        </ul>

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
