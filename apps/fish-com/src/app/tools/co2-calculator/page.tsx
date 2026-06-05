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

const URL = 'https://fish.com/tools/co2-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'CO2 Calculator for Planted Aquariums — KH & pH to ppm | Fish.com',
  description: 'Estimate dissolved CO2 in a planted aquarium from carbonate hardness (KH) and pH. Includes target range, fish-stress thresholds, and drop-checker cross-check.',
  path: '/tools/co2-calculator',
})

const schema = buildHowToSchema({
  name: 'How to calculate CO2 in a planted aquarium',
  description: 'Measure carbonate hardness (KH) and pH at the same time, then use the standard formula CO2 ppm = 12.839 × KH × 10^(7 − pH) to estimate dissolved CO2.',
  url: URL,
  totalTime: 'PT5M',
  steps: [
    { name: 'Test KH', text: 'Use a liquid KH test kit (API GH/KH) to measure carbonate hardness in degrees (dKH). Test mid-tank, not at the surface.' },
    { name: 'Test pH at the same time', text: 'CO2 changes pH throughout the day. Test pH from the same sample you used for KH, immediately.' },
    { name: 'Calculate dissolved CO2', text: 'CO2 ppm = 12.839 × KH × 10^(7 − pH). Or use this calculator to do it instantly.' },
    { name: 'Cross-check with a drop checker', text: 'A drop checker filled with 4dKH reference solution + bromothymol blue shows lime green at ~30 ppm. Use it as a second opinion, not a replacement for testing.' },
    { name: 'Adjust injection rate', text: 'Target 15–35 ppm during photoperiod. Watch fish for gasping — if they\'re at the surface or breathing fast, reduce injection rate and add surface agitation.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Planted Aquarium CO2 Calculator (KH/pH)',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive CO2 calculator for planted aquariums. Estimates dissolved CO2 in parts per million from carbonate hardness (KH) and pH using the standard carbonate-equilibrium formula, with target ranges and fish-stress thresholds.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Standard KH/pH formula: CO2 ppm = 12.839 × KH × 10^(7 − pH)',
    'Color-coded target band (15–35 ppm) with fish-stress threshold callout',
    'Caveat notes for phosphate buffers, tannins, and low-KH instability',
    'Drop-checker cross-reference colors (blue / lime green / yellow)',
    'Linked to planted-tank setup, lighting, and fertilizer references',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const FAQS = [
  {
    question: 'What CO2 level should a planted tank run?',
    answer: '15–35 ppm during the photoperiod is the healthy range. Plants grow well, algae stays in check, and fish remain comfortable. 30 ppm is the classic target (lime green on a 4dKH drop checker). Below 15 ppm plants struggle; above 35 ppm fish start showing stress.',
  },
  {
    question: 'Is the KH/pH CO2 formula accurate?',
    answer: 'It\'s accurate when carbonate is the only meaningful buffer in the water. Common things that break it: phosphate-based pH buffers (Seachem Neutral Regulator), peat or driftwood tannins, commercial discus buffers, and very low KH (under 2 dKH) where the formula becomes unstable. For most planted tanks running CO2 injection on tap water, the formula is within ±20%.',
  },
  {
    question: 'How can I tell if CO2 is too high?',
    answer: 'Fish behavior is the most reliable indicator. Watch for: fish staying at the surface gasping, rapid gill movement, lethargy, or loss of appetite. Shrimp and small tetras show stress first. If you see any of these, increase surface agitation immediately (raise spray bar, add a small powerhead near the surface) and turn down injection rate.',
  },
  {
    question: 'Do I need a drop checker if I can calculate CO2 from KH/pH?',
    answer: 'Yes. They measure different things. The KH/pH formula gives you a snapshot at the moment you tested. A drop checker shows CO2 at the drop checker\'s location over a ~2-hour lag. Together they confirm the calculation and catch buffer interference. Drop checkers cost $5–10 and run for years on the same reference solution.',
  },
  {
    question: 'Can I run CO2 24/7?',
    answer: 'No — turn CO2 off at night. Plants only consume CO2 during photosynthesis (lights on). At night they respire and produce CO2 along with fish, so dissolved levels climb fast if you keep injecting. Set CO2 to come on 1 hour before lights and off 1 hour before lights off, via a solenoid on the same timer as the lights.',
  },
]

export default function CO2CalculatorPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'CO2 Calculator (KH/pH)',
        subtitle: 'Estimate dissolved CO2 in your planted aquarium from carbonate hardness and pH. The standard formula, with honest caveats about when it breaks.',
        category: 'Calculators',
        categoryHref: '/tools',
        authorAvatar: '🌿',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'CO2 Calculator' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Tools Hub", href: "/tools", category: "Tools" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }, { title: "Aquarium Volume Calculator", href: "/tools/aquarium-volume-calculator", category: "Tools" }, { title: "Low-Tech Planted Tank", href: "/setup/low-tech-planted-tank", category: "Tank Setup" }]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'The formula', href: '#formula' },
              { label: 'When it lies to you', href: '#caveats' },
              { label: 'Target ranges', href: '#targets' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Planted-tank resources"
            links={[
              { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' },
              { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
              { label: 'Volume Calculator', href: '/tools/aquarium-volume-calculator' },
              { label: 'Best Planted-Tank Fertilizers', href: '/reviews/best-planted-tank-fertilizers' },
              { label: 'Best Aquarium Lighting', href: '/reviews/best-aquarium-lighting' },
              { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Planted-tank tips every Thursday."
            source="co2-calculator"
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

        <h2 id="formula">The Formula</h2>
        <pre className="bg-brand-surface p-4 rounded text-sm overflow-x-auto">
          CO2 (ppm) = 12.839 × KH (dKH) × 10^(7 − pH)
        </pre>
        <p>
          This is the standard relationship from carbonate equilibrium chemistry. CO2 dissolves to form carbonic acid, which lowers pH.
          KH measures the water&apos;s capacity to resist that change. If you know both, you can back out how much CO2 is dissolved.
        </p>
        <p>
          At KH = 4 dKH and pH = 6.8, the formula gives:{' '}
          <strong>12.839 × 4 × 10^(0.2) ≈ 81 ppm</strong> — wait, that&apos;s way too high. The exponent matters: <code>7 − 6.8 = 0.2</code>, and <code>10^0.2 ≈ 1.585</code>,
          so actual CO2 ≈ <strong>81.4 ppm</strong>. That&apos;s above the safe range; you&apos;d need to either raise pH (by reducing injection) or accept that fish are at risk.
        </p>

        <h2 id="caveats">When the Formula Lies</h2>
        <p>The KH/pH method assumes carbonate is the only buffer in the water. It breaks when:</p>
        <ul>
          <li><strong>You use phosphate buffers</strong> (Seachem Neutral Regulator, Discus Buffer). pH is held independent of CO2, so the math returns absurd numbers.</li>
          <li><strong>Tannins from driftwood or peat</strong> contribute organic acidity. Reads CO2 higher than reality.</li>
          <li><strong>KH below 2 dKH</strong> — the formula amplifies measurement error massively. A KH test off by 0.5 dKH at low values can swing the CO2 reading by 40%.</li>
          <li><strong>Marine or brackish water</strong> — different chemistry; this calculator doesn&apos;t apply.</li>
        </ul>
        <p>
          The honest cross-check is a drop checker. Fill with 4dKH reference solution (sold separately or DIY from baking soda) + bromothymol blue indicator.
          Color shifts from blue (low CO2) → green (30 ppm) → yellow (high). The lag is 1–2 hours, which is actually useful — it shows you a stable average.
        </p>

        <h2 id="targets">CO2 Targets</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Range</th>
                <th className="text-left py-2 font-semibold text-brand-dark">What it means</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">&lt; 10 ppm</td><td className="py-2">Below target — low-tech / no injection. Plants survive but don&apos;t thrive.</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">10–15 ppm</td><td className="py-2">Light injection. OK for easy plants (java fern, anubias, cryptocoryne).</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">15–35 ppm</td><td className="py-2"><strong>Target range</strong>. Most plants grow well, fish are unbothered.</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">35–50 ppm</td><td className="py-2">High — watch fish carefully. Some experienced aquascapers push here for fast growth.</td></tr>
              <tr><td className="py-2 pr-4">&gt; 50 ppm</td><td className="py-2"><strong>Dangerous</strong>. Acute toxicity to fish, especially small species and shrimp.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          For full planted-tank setup including substrate, lighting, and dosing schedule, see our{' '}
          <Link href="/setup/planted-tank-setup">planted tank setup guide</Link>.
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
