import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, TableOfContents, StockImage } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Setup Guide — First Tank Step by Step | Fish.com',
  description: 'Everything you need to set up your first aquarium correctly. Tank size, filtration, cycling, substrate, stocking — in the order you actually do it.',
  path: '/setup',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com', title: 'Aquarium Setup Guide',
  description: 'Step-by-step aquarium setup for beginners.',
  url: 'https://fish.com/setup', imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z',
})

const howToSchema = buildHowToSchema({
  name: 'Aquarium Setup — First Tank Step by Step',
  description:
    'How to set up a beginner freshwater aquarium correctly from tank-size selection through cycling and stocking.',
  url: 'https://fish.com/setup',
  totalTime: 'P56D', // 4-8 weeks; using the ~lower bound for ISO 8601 duration
  steps: [
    { name: 'Choose the Right Tank Size', text: 'Start with at least a 20-gallon long. Larger tanks have more stable water parameters and are more forgiving of beginner errors than 5- or 10-gallon "starter" tanks.', url: 'https://fish.com/setup#size' },
    { name: 'Acquire the Equipment You Actually Need', text: 'Non-negotiables: filter (rated 1.5–2× tank size), heater + thermometer, dechlorinator (Seachem Prime or API Stress Coat), and a liquid test kit (API Master Test Kit).', url: 'https://fish.com/setup#equipment' },
    { name: 'Set Up the Tank', text: 'Rinse substrate, add 1–3 inches, place decorations and plants for hiding spots, install filter and heater, fill with dechlorinated tap water, then run filter and heater for 24 hours to reach 78°F.', url: 'https://fish.com/setup#setup' },
    { name: 'Cycle the Tank', text: 'Add pure ammonia to 2–4 ppm and test every 2–3 days for 4–8 weeks. The cycle is complete when ammonia drops rapidly, nitrite appears then drops, and nitrate accumulates.', url: 'https://fish.com/setup#cycle' },
    { name: 'Test Before You Add Fish', text: 'Verify ammonia 0 ppm, nitrite 0 ppm, nitrate present and below 20 ppm. Do a 25–30% water change before adding fish.', url: 'https://fish.com/setup#test' },
    { name: 'Add Fish Gradually', text: 'Add fish in small groups (5–6 at a time), wait 2–3 weeks between groups, and quarantine new fish for 4 weeks in a separate tank before introducing them to the display tank.', url: 'https://fish.com/setup#fish' },
  ],
})

const schema = combineSchemas(articleSchema, howToSchema)

const FAQS = [
  { question: 'How long does aquarium cycling take?', answer: 'A fishless cycle typically takes 4–8 weeks. Using established filter media can reduce this to 1–2 weeks. A fish-in cycle takes 4–6 weeks with careful daily water testing and water changes to keep ammonia and nitrite below 0.5 ppm.', answerText: '' },
  { question: 'What size tank is best for a beginner?', answer: 'A 20-gallon long is our recommendation for a first tank. Counterintuitively, larger tanks are actually easier to maintain than smaller ones — water parameters are more stable, errors are more forgiving, and you have more species options. The 5-gallon "starter" tanks sold as beginner kits are harder to maintain, not easier.', answerText: '' },
  { question: 'Do I need live plants?', answer: 'No — but they help. Live plants consume ammonia and nitrite, compete with algae for nutrients, and provide behavioral enrichment for fish. Low-tech plants (java fern, anubias, amazon sword) are nearly indestructible and don\'t require CO2 injection or special lighting. If you\'re not ready for live plants, silk plants are a better choice than plastic ones that can tear fish fins.', answerText: '' },
  { question: 'What is a good community fish for a beginner?', answer: 'The classic beginner community: neon tetras (school of 6–10), corydoras catfish (4–6), a centerpiece fish like a single gourami, and a cleanup crew of snails. All are peaceful, easy to feed, tolerant of beginner water conditions (once cycled), and widely available. Avoid cichlids, large carnivores, and any fish labeled "aggressive" for your first tank.', answerText: '' },
]

export default function AquariumSetupPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{ title: 'Aquarium Setup Guide — Your First Tank, Done Right', subtitle: 'Most new tanks fail because of a single mistake: adding fish before the tank is cycled. This guide walks through every step in the correct order.', category: 'Setup Guide', publishedAt: 'May 2025', readTime: '12 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }]}
      schema={schema}
      relatedLinks={[{ title: "Aquarium Setup Builder", href: "/tools/aquarium-setup-builder", category: "Tools" }, { title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Species Guides", href: "/species", category: "Species" }, { title: "Aquarium Cycling Guide", href: "/setup/aquarium-cycling-guide", category: "Tank Setup" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }, { title: "Equipment Reviews", href: "/reviews", category: "Reviews" }]}
      sidebar={<>
        <TableOfContents items={[
          { label: '1. Choose Tank Size', href: '#size' },
          { label: '2. Equipment Needed', href: '#equipment' },
          { label: '3. Set Up the Tank', href: '#setup' },
          { label: '4. Cycle the Tank', href: '#cycle' },
          { label: '5. Test the Water', href: '#test' },
          { label: '6. Add Fish', href: '#fish' },
          { label: 'FAQ', href: '#faq' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
          { label: 'Water Chemistry Guide', href: '/water-parameters' },
          { label: 'Betta Fish Care', href: '/species/betta-fish' },
        ]} />
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Setup Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="aquarium-algae-control" href="/setup/aquarium-algae-control" className="text-sm text-brand-primary no-underline hover:underline">Aquarium Algae Control</Link>
        <Link key="aquarium-cycling-guide" href="/setup/aquarium-cycling-guide" className="text-sm text-brand-primary no-underline hover:underline">Aquarium Cycling Guide</Link>
        <Link key="aquascaping-guide" href="/setup/aquascaping-guide" className="text-sm text-brand-primary no-underline hover:underline">Aquascaping Guide</Link>
        <Link key="gh-kh-water-hardness" href="/setup/gh-kh-water-hardness" className="text-sm text-brand-primary no-underline hover:underline">GH and KH Water Hardness</Link>
        <Link key="low-tech-planted-tank" href="/setup/low-tech-planted-tank" className="text-sm text-brand-primary no-underline hover:underline">Low-Tech Planted Tank</Link>
        <Link key="nano-tank-setup" href="/setup/nano-tank-setup" className="text-sm text-brand-primary no-underline hover:underline">Nano Tank Setup</Link>
        <Link key="planted-tank-setup" href="/setup/planted-tank-setup" className="text-sm text-brand-primary no-underline hover:underline">Planted Tank Setup</Link>
        <Link key="pond-guide" href="/setup/pond-guide" className="text-sm text-brand-primary no-underline hover:underline">Pond Guide</Link>
        <Link key="quarantine-tank-guide" href="/setup/quarantine-tank-guide" className="text-sm text-brand-primary no-underline hover:underline">Quarantine Tank Guide</Link>
        <Link key="saltwater-tank-setup" href="/setup/saltwater-tank-setup" className="text-sm text-brand-primary no-underline hover:underline">Saltwater Tank Setup</Link>
        <Link key="water-chemistry-guide" href="/setup/water-chemistry-guide" className="text-sm text-brand-primary no-underline hover:underline">Water Chemistry Guide</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <StockImage manifestKey="fish-com:category-setup" aspect="16:9" variant="inline" caption="A healthy, fully cycled planted aquarium — the goal of a careful setup." priority />

        <h2 id="size">Step 1 — Choose the Right Tank Size</h2>
        <p>The most common beginner mistake is starting with a small tank. Small tanks are harder to maintain, not easier — water parameters swing more dramatically, small errors have larger consequences, and you have fewer species options. Our recommendation: start with at least 20 gallons.</p>
        <ul>
          <li><strong>5 gallons</strong> — betta fish only, experienced keeper. Not recommended for beginners despite being sold as "starter" tanks.</li>
          <li><strong>10 gallons</strong> — appropriate for a small community (neon tetras, corydoras). Manageable for beginners who are willing to test water weekly.</li>
          <li><strong>20 gallons long</strong> — the beginner recommendation. Stable water parameters, good species options, forgiving of minor errors.</li>
          <li><strong>40+ gallons</strong> — easiest to maintain, widest species selection, most stable parameters. If space allows, start here.</li>
        </ul>
        <p className="text-sm text-brand-text-mid">
          Sizing a specific tank? Use the <Link href="/tools/aquarium-volume-calculator" className="text-brand-primary no-underline hover:underline">aquarium volume calculator</Link> to convert dimensions to gallons, and the <Link href="/tools/stocking-calculator" className="text-brand-primary no-underline hover:underline">stocking calculator</Link> to plan how many fish a given tank supports.
        </p>

        <h2 id="equipment">Step 2 — Equipment You Actually Need</h2>
        <p><strong>Non-negotiable:</strong></p>
        <ul>
          <li><strong>Filter</strong> — a hang-on-back or canister filter rated for at least the tank size (ideally 1.5–2x). This is where beneficial bacteria live. Never skip this.</li>
          <li><strong>Heater</strong> — for tropical fish (most common aquarium fish require 76–82°F). Get one rated for your tank size + 20% buffer. A heater that fails cold is common.</li>
          <li><strong>Thermometer</strong> — digital stick thermometer ($8–15). Verify heater accuracy on day one.</li>
          <li><strong>Dechlorinator (water conditioner)</strong> — Seachem Prime or API Stress Coat. Removes chlorine and chloramine from tap water. Use at every water change.</li>
          <li><strong>Liquid test kit</strong> — API Master Test Kit ($30). Tests ammonia, nitrite, nitrate, and pH. This is how you know when your tank is cycled and when water changes are needed. Test strips are inaccurate.</li>
        </ul>
        <p><strong>Useful but not mandatory at setup:</strong> gravel vacuum, protein skimmer (saltwater only), CO2 system (planted tanks), UV sterilizer.</p>
        <p className="text-sm text-brand-text-mid">
          Need the heater wattage for your tank size and target temperature? Use the <Link href="/tools/heater-wattage-calculator" className="text-brand-primary no-underline hover:underline">heater wattage calculator</Link>.
        </p>

        <h2 id="setup">Step 3 — Set Up the Tank</h2>
        <ol style={{ marginBottom: '16px', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Rinse substrate (gravel, sand) in a bucket until water runs clear. Do not use soap.</li>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Add substrate — 1–2 inches for inert gravel, 2–3 inches if planting.</li>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Add decorations and plants (silk or live). Provide hiding spots — stressed fish hide; fish with nowhere to hide are chronically stressed.</li>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Install filter and heater per manufacturer instructions. Do not run them yet.</li>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Fill with treated tap water (add dechlorinator as you fill).</li>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Turn on filter and heater. Set heater to target temperature (typically 78°F). Allow 24 hours to reach temperature before proceeding.</li>
        </ol>

        <h2 id="cycle">Step 4 — Cycle the Tank (4–8 Weeks)</h2>
        <p>This is the step most beginners skip that causes most fish deaths. The nitrogen cycle establishes the bacterial colonies that convert toxic ammonia (fish waste) into less harmful compounds. Without it, ammonia accumulates and kills fish.</p>
        <p><strong>Fishless cycling method (recommended):</strong> Add a small amount of pure ammonia (Dr. Tim&apos;s Ammonium Chloride) to establish a food source for bacteria. Dose to 2–4 ppm ammonia. Test every 2–3 days. When ammonia drops rapidly and nitrite appears, the first bacteria have colonized. When nitrite also drops rapidly and nitrate appears, cycling is complete. Do a 50% water change and add fish.</p>
        <p><strong>Speed it up:</strong> Add a bottle of Tetra SafeStart Plus or Dr. Tim&apos;s One &amp; Only on day one. Use filter media from an established tank. Maintain temperature at 78–80°F — bacteria grow faster in warmer water.</p>
        <p className="text-sm text-brand-text-mid">
          Tracking week-by-week progress: the <Link href="/tools/aquarium-cycling-estimator" className="text-brand-primary no-underline hover:underline">aquarium cycling estimator</Link> tells you when each step of the nitrogen cycle should complete based on your starting conditions.
        </p>

        <h2 id="test">Step 5 — Test Before You Add Fish</h2>
        <p>Your cycle is complete when: ammonia reads 0 ppm, nitrite reads 0 ppm, and nitrate is present (proof the full conversion chain is working). Perform a 25–30% water change before adding fish to bring nitrate below 20 ppm.</p>

        <h2 id="fish">Step 6 — Add Fish Gradually</h2>
        <p>Do not add all your fish at once. Add a small group first (5–6 tetras, not 20). Wait 2–3 weeks and test your water — the bacteria population needs to grow to match the bioload. If ammonia or nitrite spikes, do a 25% water change and wait. Once parameters are stable, add the next group.</p>
        <p>Quarantine all new fish for 4 weeks in a separate tank before adding to your display tank. This prevents introducing disease (especially Neon Tetra Disease, which has no cure) and is one of the most important practices in the hobby.</p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
      </div>
    </ArticleLayout>
  )
}
