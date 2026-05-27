import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Setup Guide — First Tank Step by Step | Fish.com',
  description: 'Everything you need to set up your first aquarium correctly. Tank size, filtration, cycling, substrate, stocking — in the order you actually do it.',
  path: '/setup',
})

const schema = buildArticleSchema({
  siteId: 'fish-com', title: 'Aquarium Setup Guide',
  description: 'Step-by-step aquarium setup for beginners.',
  url: 'https://fish.com/setup', imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z',
})

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
      hero={{ title: 'Aquarium Setup Guide — Your First Tank, Done Right', subtitle: 'Most new tanks fail because of a single mistake: adding fish before the tank is cycled. This guide walks through every step in the correct order.', category: 'Setup Guide', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '12 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }]}
      schema={schema}
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
          { label: 'Water Chemistry Guide', href: '/water' },
          { label: 'Betta Fish Care', href: '/species/betta-fish' },
        ]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-guide" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="size">Step 1 — Choose the Right Tank Size</h2>
        <p>The most common beginner mistake is starting with a small tank. Small tanks are harder to maintain, not easier — water parameters swing more dramatically, small errors have larger consequences, and you have fewer species options. Our recommendation: start with at least 20 gallons.</p>
        <ul>
          <li><strong>5 gallons</strong> — betta fish only, experienced keeper. Not recommended for beginners despite being sold as "starter" tanks.</li>
          <li><strong>10 gallons</strong> — appropriate for a small community (neon tetras, corydoras). Manageable for beginners who are willing to test water weekly.</li>
          <li><strong>20 gallons long</strong> — the beginner recommendation. Stable water parameters, good species options, forgiving of minor errors.</li>
          <li><strong>40+ gallons</strong> — easiest to maintain, widest species selection, most stable parameters. If space allows, start here.</li>
        </ul>

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

        <h2 id="test">Step 5 — Test Before You Add Fish</h2>
        <p>Your cycle is complete when: ammonia reads 0 ppm, nitrite reads 0 ppm, and nitrate is present (proof the full conversion chain is working). Perform a 25–30% water change before adding fish to bring nitrate below 20 ppm.</p>

        <h2 id="fish">Step 6 — Add Fish Gradually</h2>
        <p>Do not add all your fish at once. Add a small group first (5–6 tetras, not 20). Wait 2–3 weeks and test your water — the bacteria population needs to grow to match the bioload. If ammonia or nitrite spikes, do a 25% water change and wait. Once parameters are stable, add the next group.</p>
        <p>Quarantine all new fish for 4 weeks in a separate tank before adding to your display tank. This prevents introducing disease (especially Neon Tetra Disease, which has no cure) and is one of the most important practices in the hobby.</p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
  )
}
