import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Sulcata Tortoise Care Guide — 100+ lbs, Outdoor Living & Rehoming Crisis | Lizard.com', description: 'Sulcata tortoises grow to 100-200 lbs. The cute hatchling becomes a 30-inch animal that digs under fences and eats landscaping. Most end up rehomed. What you need to know.', path: '/species/sulcata-tortoise', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Sulcata Tortoise Care Guide', description: 'Adult size reality, outdoor enclosure requirements, and long-term commitment for Centrochelys sulcata.', url: 'https://lizard.com/species/sulcata-tortoise', imageUrl: '', authorName: 'Lizard.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function SulcataTortoisePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Sulcata Tortoise Care Guide', subtitle: "Centrochelys sulcata — the African spurred tortoise is the third largest tortoise species in the world and the most frequently surrendered reptile to rescues in the US. Hatchlings are 2-3 inches. Adults are 18-30 inches and 100-200 lbs. The gap between 'cute baby tortoise' and '150-lb animal demolishing my yard' is the story of most sulcata acquisitions.", category: 'Species Guide — Advanced Only', authorName: 'Lizard.com Expert Team', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Sulcata Tortoise', href: '/species/sulcata-tortoise' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Size Timeline</div>
          {[['Hatchling', '2–3 inches · Fits in your palm'], ['1 year', '4–5 inches'], ['3 years', '8–10 inches'], ['5 years', '12–15 inches'], ['10 years', '18–24 inches · 50–80 lbs'], ['Adult (20+ yrs)', '24–30 inches · 100–200 lbs']].map(([age, size]) => (
            <div key={age} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{age}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '60%' }}>{size}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Russian Tortoise', href: '/species/russian-tortoise' }, { label: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease' }, { label: 'Dehydration Guide', href: '/health/dehydration-reptiles' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-sulcata" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Rehoming Crisis — Why It Happens</h2>
        <p>Sulcata tortoises are the most surrendered reptile to rescue organizations in the US. The trajectory is predictable: a hatchling is purchased cheaply (they breed prolifically and hatchlings are inexpensive), kept indoors in a tank for 1-3 years while it grows manageable, then moved outdoors as it outgrows indoor housing, then surrendered at 5-15 years old when it is 20+ inches, destroying fencing, digging through landscaping, and consuming $50-100 of produce weekly. Rescue organizations are overwhelmed — many refuse new sulcata surrenders.</p>
        <p>This is not an exaggeration intended to discourage — it is the documented pattern for the majority of sulcata acquisitions that don't go to prepared, experienced keepers with appropriate long-term facilities. Anyone considering a sulcata should look at photographs of 10-year-old and 20-year-old sulcatas, visit a rescue that has adult sulcatas, and honestly assess whether they have the land, infrastructure, and commitment for that animal for the next 70+ years.</p>

        <h2>Adult Enclosure Requirements</h2>
        <p>Adult sulcatas cannot be kept indoors — they require outdoor living in appropriate climates (USDA hardiness zones 9-11 minimum; zones 7-8 with heated night shelter). Minimum enclosure for a single adult: 100+ square feet with 6-foot+ perimeter walls that extend 18-24 inches underground (sulcatas dig and will tunnel under any barrier that doesn't extend deep enough). Walls must be solid — chain-link is insufficient, they push through it. Concrete block, stone, or heavy wood is appropriate.</p>
        <p>They dig burrows that can extend 10-30 feet underground and 3-6 feet deep — this is not occasional behavior, it is how they thermoregulate in their native Sahel and savannah environments. Any infrastructure in their enclosure (plumbing, irrigation, utility lines) must be protected or relocated. They will also eat virtually all plants in their enclosure — landscaping is destroyed.</p>

        <h2>Diet</h2>
        <p>Sulcatas are native to semi-arid savannah and eat primarily grasses and fibrous weeds — their digestive system is adapted for high-fiber, low-moisture, low-protein food. In captivity: Bermuda grass, orchard grass hay, and dry native grasses as the staple diet. Occasional leafy greens (collards, dandelion, turnip greens). No fruit, no vegetables with high water content, no protein. A large adult sulcata may consume 2-4 lbs of grass hay daily.</p>

        <h2>Who Sulcatas Are Appropriate For</h2>
        <p>Sulcatas are appropriate for: people who own or have permanent access to a minimum half-acre of appropriate outdoor land in a warm climate, have resources to build appropriate substantial fencing, can provide lifelong care or have a credible long-term plan for the animal's future, and have experience with large reptiles or are connecting with experienced mentors. They make genuinely spectacular animals for the right keeper — their longevity, impressive size, and the relationship that develops with a well-cared-for sulcata over decades are extraordinary. But the barriers to providing appropriate care are real and high.</p>
        <p>For people who want a tortoise but cannot meet sulcata requirements: Russian tortoises are the recommended alternative — manageable size, similar personality, cold-tolerant, and appropriate for a much wider range of living situations.</p>
      </div>
    </ArticleLayout>
  )
}
