import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Nitrogenous Waste and the Nitrogen Cycle in Aquariums — UF/IFAS Extension FA-16.", url: "https://edis.ifas.ufl.edu/publication/FA016", publisher: "UF/IFAS Extension" },
  { label: "Timmons, M.B. and Ebeling, J.M. Recirculating Aquaculture, 3rd ed. Ithaca Publishing, 2013.", publisher: "Ithaca Publishing" },
  { label: "Francis-Floyd, R. Ammonia Toxicosis in Fish — UF/IFAS Extension FA-36.", url: "https://edis.ifas.ufl.edu/publication/FA036", publisher: "UF/IFAS Extension" },
  { label: "Russo, R.C. and Thurston, R.V. Toxicity of ammonia, nitrite, and nitrate to fishes. Aquaculture and Water Quality, 1991.", publisher: "World Aquaculture Society" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'The Nitrogen Cycle Explained — Why New Tanks Fail | Fish.com', description: 'The nitrogen cycle is why most new aquariums fail. Complete guide: what it is, how to cycle a tank before adding fish, fishless cycling protocol.', path: '/health/nitrogen-cycle-explained', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'The Nitrogen Cycle Explained', description: 'What it is, how to cycle a tank, and how to know when cycling is complete.', url: 'https://fish.com/health/nitrogen-cycle-explained', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function NitrogenCyclePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{ title: 'The Nitrogen Cycle Explained', subtitle: '"New tank syndrome" kills more fish than disease. It is entirely preventable — if you understand what the nitrogen cycle is and why cycling a tank before adding fish is not optional.', category: 'Fishkeeping Fundamentals', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "New Tank Syndrome", href: "/health/new-tank-syndrome", category: "Fish Health" }, { title: "Aquarium Cycling Guide", href: "/setup/aquarium-cycling-guide", category: "Tank Setup" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <TableOfContents items={[{ label: 'What the Cycle Is', href: '#what' }, { label: 'The Three Stages', href: '#stages' }, { label: 'Fishless Cycling Protocol', href: '#cycling' }, { label: 'How Long It Takes', href: '#duration' }, { label: 'How to Know It\'s Done', href: '#done' }, { label: 'Mini-Cycles', href: '#mini-cycles' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Water Chemistry Guide', href: '/water-parameters' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="nitrogen-cycle" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2 id="what">What the Nitrogen Cycle Is</h2>
        <p>Fish produce ammonia — through their gills, waste, and urine — continuously. Ammonia is acutely toxic: fish exposed to ammonia develop gill damage, immune suppression, neurological harm, and death at concentrations as low as 0.25 ppm over time, and 2+ ppm causes rapid mortality.</p>
        <p>The nitrogen cycle is the biological process by which ammonia is converted — first to nitrite (also toxic), then to nitrate (far less toxic at moderate levels) — by two groups of beneficial bacteria that colonize filter media and substrate. Without these bacteria, ammonia accumulates and kills fish. With them, a tank becomes self-regulating.</p>
        <p>The process: <strong>Fish waste → Ammonia (NH₃) → Nitrite (NO₂⁻) → Nitrate (NO₃⁻)</strong></p>
        <p>Nitrobacter and Nitrospira bacteria handle the second conversion. Nitrosomonas handle the first. These bacteria are not present in tap water — they must be grown in your tank. This growth takes 4–8 weeks. During this time, the tank is unsafe for fish.</p>

        <h2 id="stages">The Three Stages</h2>
        <ol>
          <li><strong>Ammonia spike (week 1–2):</strong> Ammonia rises. No nitrite yet — bacteria haven't established. This is the most dangerous phase for fish.</li>
          <li><strong>Nitrite spike (week 2–4):</strong> Ammonia drops as Nitrosomonas establish and begin converting it. Nitrite rises sharply. Both ammonia and nitrite are now present — still highly toxic.</li>
          <li><strong>Nitrate appears, ammonia and nitrite fall to 0 (week 4–8):</strong> Nitrobacter/Nitrospira establish and begin converting nitrite to nitrate. Both ammonia and nitrite fall to 0 ppm. Nitrate rises. Cycling is complete.</li>
        </ol>
        <p>The tank is safe for fish only when ammonia reads 0, nitrite reads 0, and nitrate is rising — this means all three populations have established and the cycle is self-sustaining.</p>

        <h2 id="cycling">Fishless Cycling Protocol</h2>
        <p>Fishless cycling grows the bacterial colonies without exposing fish to toxic water. The recommended method:</p>
        <ol>
          <li><strong>Set up the tank completely:</strong> Fill with dechlorinated water, run filter, set temperature. Seachem Prime removes chlorine/chloramine without harming beneficial bacteria.</li>
          <li><strong>Add an ammonia source:</strong> Pure ammonia (unscented — check label for no additives, no surfactants) dosed to reach 2–4 ppm. Or use fish food (add a small amount every 2 days — it decomposes and releases ammonia). Dr. Tims Ammonium Chloride is a clean, reliable source.</li>
          <li><strong>Add beneficial bacteria:</strong> Seachem Stability, Dr. Tim&apos;s One & Only, or Fritz Zyme 7 — these contain live Nitrospira and Nitrosomonas and accelerate cycling from 4–8 weeks to 2–4 weeks. Not strictly required (bacteria colonize naturally) but meaningfully faster.</li>
          <li><strong>Test every 2–3 days:</strong> API Master Test Kit for ammonia, nitrite, nitrate. Log readings.</li>
          <li><strong>Re-dose ammonia:</strong> When ammonia drops to 0–0.5 ppm, add more to keep bacteria fed. Starving the bacteria mid-cycle slows the process significantly.</li>
          <li><strong>Wait for the 0-0-positive reading:</strong> When ammonia and nitrite both read 0 within 24 hours of adding 2 ppm ammonia, the cycle is complete.</li>
        </ol>

        <h2 id="duration">How Long It Takes</h2>
        <ul>
          <li><strong>Without bacterial supplement:</strong> 4–8 weeks typical. Warm water (78–82°F) speeds colonization.</li>
          <li><strong>With bacterial supplement (Seachem Stability, Fritz Zyme 7):</strong> 2–4 weeks typical.</li>
          <li><strong>With seeded media from an established tank:</strong> 1–2 weeks. The fastest method — get filter media, substrate, or decorations from a cycled tank and transfer to yours. The bacteria transfer with the media.</li>
        </ul>

        <h2 id="done">How to Know Cycling Is Complete</h2>
        <p>The definitive test: add ammonia to 2 ppm on day 1. Test again at 24 hours. If both ammonia AND nitrite read 0, and nitrate has risen — the cycle is complete. The bacteria are present in sufficient numbers to process the ammonia load within 24 hours.</p>
        <p>Do not add fish based on ammonia reading 0 alone — wait for the 24-hour confirmation test. One 0 reading could be a temporary dip rather than established colony population.</p>

        <h2 id="mini-cycles">Mini-Cycles — What Disrupts an Established Cycle</h2>
        <p>Bacterial colonies live primarily in filter media. Things that kill them and cause a mini-cycle:</p>
        <ul>
          <li><strong>Rinsing filter media in tap water:</strong> Chlorine kills beneficial bacteria. Always rinse filter media in old tank water removed during a water change — never tap water.</li>
          <li><strong>Replacing all filter media at once:</strong> Replace only one third of filter media at a time, on a rotating schedule. This preserves colony while removing debris.</li>
          <li><strong>Antibiotics in the main tank:</strong> Kill beneficial bacteria along with pathogenic bacteria. Treat sick fish in a hospital tank.</li>
          <li><strong>Extended power outage:</strong> Bacteria need oxygenated water flow to survive. A filter off for more than 4–6 hours can crash the colony — test ammonia when power returns.</li>
          <li><strong>Adding too many fish too quickly:</strong> The ammonia produced by a large new population overwhelms the existing colony. Add fish gradually — 20–25% of intended stocking at a time, 2 weeks apart.</li>
        </ul>
        <ArticleSourcesList sources={SOURCES} />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: '#f7fbfd', border: '1px solid #d4e5ee', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4a6573', marginBottom: '8px' }}>Cycling Test Kits</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: '#4a6573', lineHeight: 1.55 }}>Cycling monitoring requires daily ammonia/nitrite/nitrate testing. API Master Kit is the standard; Salifert + Seachem alternatives for higher-precision needs. This is husbandry equipment, not a substitute for veterinary care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/api%20freshwater%20master%20test%20kit%20ammonia%20nitrite%20nitrate?s=health-nitrogen-cycle-explained" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/api%20freshwater%20master%20test%20kit%20ammonia%20nitrite%20nitrate?s=health-nitrogen-cycle-explained" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#1e90ff', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
