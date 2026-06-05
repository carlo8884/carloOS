import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks , AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Planted Aquarium Setup Guide — Substrate, Lighting | Fish.com', description: 'How to set up a planted freshwater aquarium. Substrate selection, lighting intensity for plant growth, CO2 injection, fertilization.', path: '/setup/planted-tank-setup', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Planted Aquarium Setup Guide', description: 'Substrate, lighting, CO2, and fertilization for planted freshwater aquariums.', url: 'https://fish.com/setup/planted-tank-setup', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Set Up a Planted Aquarium', description: 'Step-by-step guide to setting up a planted freshwater aquarium.', url: 'https://fish.com/setup/planted-tank-setup', totalTime: 'P7D', steps: [
  { name: 'Choose your approach: low-tech or high-tech', text: 'Low-tech: no CO2 injection, easy plants (Java fern, Anubias, crypts, hornwort). High-tech: pressurized CO2, high light, advanced fertilization, fast-growing stem plants and carpeting species. Start low-tech — it is easier to maintain and still beautiful.' },
  { name: 'Select substrate', text: 'For low-tech: plain gravel or sand works for most easy plants. For high-tech or root-feeding plants: a nutrient-rich planted substrate (ADA Aqua Soil, Fluval Stratum, CaribSea Eco-Complete) provides iron and minerals roots need.' },
  { name: 'Install filtration and lighting', text: 'Filter for 5-10x turnover (lower for heavily planted — plants need CO2 retention). Light intensity matched to plant choice: 15-30 PAR at substrate for low-light plants, 50-80+ PAR for carpeting plants and stem plants. Photoperiod: 8 hours maximum to start.' },
  { name: 'Plant and fill', text: 'Plant foreground, midground, and background species before filling. Use tweezers for small plants. Fill slowly to avoid disturbing planting. Leave hardscape (rocks, driftwood) as your structure.' },
  { name: 'Begin fertilization', text: 'Start fertilizing from day one for a high-tech setup. For low-tech, wait until plants show nutrient deficiency signs (yellowing, holes in leaves). Use Easy Green (Aquarium Co-Op) for low-tech; Estimative Index dosing or EI for high-tech.' },
  { name: 'Cycle and add fish', text: 'Planted tanks cycle faster than bare tanks due to plant nutrient uptake. Test water — when ammonia and nitrite both read 0, the cycle is established. Add fish gradually over several weeks.' },
]})
const combined = combineSchemas(schema, howTo)
export default function PlantedTankSetupPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="fish-com"
        hero={{ title: 'Planted Aquarium Setup Guide', subtitle: 'A well-planted aquarium is one of the most beautiful objects you can put in a room — and planted tanks are healthier environments for fish. Plants consume nitrate, compete with algae for nutrients, and provide shelter and natural behavior cues. This guide covers both low-tech (easy) and high-tech (advanced) approaches.', category: 'Tank Setup', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '12 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]}
        relatedLinks={[{ title: 'Tank Setup Hub', href: '/setup', category: 'Tank Setup' }, { title: 'Low-Tech Planted Tank', href: '/setup/low-tech-planted-tank', category: 'Tank Setup' }, { title: 'Aquascaping Guide', href: '/setup/aquascaping-guide', category: 'Tank Setup' }, { title: 'Aquarium Algae Control', href: '/setup/aquarium-algae-control', category: 'Tank Setup' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Low-Tech Starter Plants</div>
            {[['Java Fern', 'Low light · Attaches to hardscape · Bulletproof'], ['Anubias', 'Extremely slow-growing · Very easy'], ['Cryptocoryne', 'Carpet/foreground · Melts then recovers'], ['Hornwort', 'Fast-growing · Great for cycling'], ['Java Moss', 'Cover/carpet · Any light level'], ['Amazon Sword', 'Large background · Easy']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Best Fertilizers', href: '/reviews/best-planted-tank-fertilizers' }, { label: 'Best Aquarium Lighting', href: '/reviews/best-aquarium-lighting' }, { label: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }]} />
          <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Planted tank tips every Thursday." source="setup-planted" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
          <h2>Low-Tech vs High-Tech — Choose Before You Buy Anything</h2>
          <p><strong>Low-tech planted tank:</strong> No CO2 injection. Easy plants only (Java fern, Anubias, Cryptocoryne, mosses, hornwort). Standard lighting (moderate PAR). All-in-one liquid fertilizer once weekly. Lower maintenance. Still beautiful — most of the famous Dutch aquascapes and natural-style tanks use low-tech or medium-tech approaches. Appropriate for beginners and most hobbyists.</p>
          <p><strong>High-tech planted tank:</strong> Pressurized CO2 injection (CO2 is the primary limiting factor for plant growth). High-intensity lighting (80+ PAR at substrate). Advanced fertilization. Grows carpeting species (Hemianthus callitrichoides, Eleocharis, Glossostigma), demanding stem plants, and delicate foreground plants. Requires more daily monitoring (CO2 levels, fertilizer adjustments, algae management). Significantly more equipment investment ($200–500+ for CO2 system). Appropriate for experienced hobbyists willing to invest time and money.</p>

          <h2>Substrate</h2>
          <p><strong>Low-tech:</strong> Most easy plants are epiphytes (Java fern, Anubias) that attach to hardscape rather than rooting in substrate — substrate type is less critical. Fine gravel, sand, or a basic planted substrate all work. Avoid large coarse gravel for plants you want to root.</p>
          <p><strong>High-tech / root-feeding plants:</strong> ADA Aqua Soil Amazonia is the benchmark — highly nutritious, perfect buffering for soft acidic water, excellent plant growth. Expensive (~$30–50/9L bag) and softens water significantly (pH 6.0–6.5). Fluval Stratum and CaribSea Eco-Complete are more affordable alternatives with good results.</p>

          <h2>Lighting — PAR Is What Matters</h2>
          <p>PAR (Photosynthetically Active Radiation) measures the light intensity actually usable by plants. Wattage is meaningless — LED efficiency varies enormously. A PAR meter (or referencing community-tested data at the Planted Tank forums) gives the real number at the substrate level.</p>
          <p>Target PAR: 15–30 at substrate for low-light plants (Java fern, Anubias, most Cryptocoryne). 30–50 for medium-light plants (most stem plants, many crypts). 50–100+ for high-light species (carpeting plants, demanding stems). Exceeding PAR without CO2 supplementation causes algae — the single most common planted tank mistake. More light without more CO2 = algae, not better plant growth.</p>
          <p>Top lighting recommendations: Fluval Plant 3.0 and Kessil A160/A360 for high-tech. Finnex Stingray and NICREW for low-tech. Run 8 hours maximum — start at 6 hours if algae develops.</p>

          <h2>CO2 Injection</h2>
          <p>Pressurized CO2 systems: a pressurized CO2 tank → regulator with solenoid (turns off at night when plants aren't using it) → diffuser in the aquarium. Target: 20–30 ppm CO2 in the water column during the photoperiod. Indicator: a drop checker fluid that turns green at the correct CO2 level (yellow = too much, blue = too little).</p>
          <p>CO2-alternative: liquid carbon supplements (Seachem Flourish Excel, Easy Carbon) provide some additional available carbon but do not replace CO2 injection for demanding plants. Useful for low-tech enhancement or algae spot treatment (direct application kills BBA — black brush algae).</p>

          <h2>Algae — The Planted Tank's Primary Challenge</h2>
          <p>Algae and plants compete for the same resources. Healthy, fast-growing plants outcompete algae. The recipe for algae is: too much light, not enough CO2/nutrients, or unstable dosing that leaves nutrients available for algae while plants are not growing efficiently. Most algae problems in planted tanks are lighting problems — reduce photoperiod to 6 hours and see if algae slows before adjusting fertilizer.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Planted Tank Setup — Where to Shop</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse the gear referenced in this guide on Amazon or Chewy. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/planted%20aquarium%20setup%20co2?s=setup-planted-tank-setup" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/planted%20aquarium%20setup%20co2?s=setup-planted-tank-setup" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}
