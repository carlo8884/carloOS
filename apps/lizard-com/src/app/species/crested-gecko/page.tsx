import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Crested Gecko Care Guide — No Heat Lamp, MRP Diet | Lizard.com', description: 'Crested geckos need no heat lamp (room temperature is fine) and thrive on meal replacement powder diet. Floppy tail syndrome from improper perching.', path: '/species/crested-gecko', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Crested Gecko Care Guide', description: 'MRP diet, floppy tail prevention, and care for Correlophus ciliatus crested geckos.', url: 'https://lizard.com/species/crested-gecko', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function CrestedGeckoPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Crested Gecko Care Guide', subtitle: 'Correlophus ciliatus — the crested gecko was rediscovered in 1994 after being presumed extinct. It rapidly became one of the most popular gecko species in captivity. Hardy, available in a stunning range of morph colors, manageable in size, and uniquely suited to room temperature keeping without specialized heating — the crested gecko is genuinely one of the best entry-level reptiles available.', category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Crested Gecko', href: '/species/crested-gecko' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Adult size', '8 inches including tail'], ['Temperature', '72–78°F — room temp fine, no lamp needed'], ['Enclosure', '12×12×18" (adults) — tall arboreal'], ['Diet', 'MRP (Pangea, Repashy) + occasional insects'], ['UVB', 'Not required — beneficial but optional'], ['Handling', 'Good with regular gentle sessions'], ['Lifespan', '15–20 years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Leopard Gecko', href: '/species/leopard-gecko' }, { label: 'Day Gecko', href: '/species/day-gecko' }, { label: 'Dysecdysis Guide', href: '/health/dysecdysis' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-crested-gecko" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <h2>No Heat Lamp Required — The Key Advantage</h2>
        <DropCap>Crested geckos are native to New Caledonia's cool highland forests — not the tropical lowlands most people imagine. Their optimal temperature range (72–78°F) matches the room temperature of most North American homes for most of the year. A basking lamp is not required and is in fact contraindicated — temperatures above 82°F cause heat stress, and sustained temperatures above 85°F are lethal. This makes crested geckos uniquely low-infrastructure among reptiles: no thermostat, no basking bulb, no temperature gradient management. A ceramic heat emitter on a thermostat may be needed in cooler homes during winter to maintain the floor at 68°F+ — but often even this is unnecessary.</DropCap>
        <p>What crested geckos do need: a night temperature drop. In the wild, temperatures drop 10-15°F at night in highland forests. In captivity, a natural room temperature cycle with cooler nights and warmer days is ideal. A room that reaches 76°F during the day and cools to 68-70°F at night is perfect.</p>

        <h2>MRP Diet — The Revolution in Crested Gecko Feeding</h2>
        <p>Meal Replacement Powders (MRP) — specifically Pangea Fruit Mix and Repashy Crested Gecko Diet — have transformed crested gecko keeping. Mixed with water to a thick paste, these complete diets provide all macro and micronutrients required for long-term health, including calcium, vitamins, and proteins. Many crested geckos thrive for their entire lives on MRP diet alone, with supplemental live insects as enrichment rather than necessity.</p>
        <p>Pangea Fruit Mix Complete is the most widely recommended — it has the most favorable reviews from breeders with multi-year feeding studies showing excellent growth, breeding success, and longevity. Repashy Crested Gecko Diet is the original formulation and also produces excellent results. Offer fresh MRP every other day — remove uneaten portions within 24-48 hours. Supplement with live insects (dubia roaches, crickets) 2-4 times monthly for behavioral enrichment and to encourage natural hunting behavior.</p>

        <h2>Morphs — Color and Pattern Diversity</h2>
        <p>Crested gecko morphs have developed significantly since the species' popularity exploded in the 2000s. Major pattern categories: tiger (banded pattern), pinstripe (raised dorsal scales forming a line — most visually distinctive), harlequin (high contrast pattern on sides), dalmatian (dark spots on light base), and flame (light dorsal over dark sides). Base colors range from cream and yellow through orange, red, olive, and near-black. Bicolor, tricolor, and extreme pattern combinations command premium prices from dedicated breeders. Unlike ball python morphs, crested gecko morph genetics are less formally mapped — color and pattern combinations are described phenotypically rather than by known gene combinations in most cases.</p>

        <CalloutBox variant="warning" title="85°F is the lethal threshold">
          Crested geckos cannot survive sustained temperatures above 85°F. If your home reaches summer highs above this in the gecko&apos;s room, plan ahead: a thermometer with high-temp alerts, AC capacity, or a cooler room are not optional. Heat is the single most common cause of preventable death in captive cresties.
        </CalloutBox>

        <h2>Floppy Tail Syndrome — Prevention</h2>
        <p>Floppy tail syndrome occurs when a crested gecko sleeps repeatedly inverted (upside down on the enclosure glass) with its tail falling over its back. The sustained inverted posture with the tail's weight pulling against the hip joint causes the tail to permanently deviate — "floppy tail." This is a management issue: ensure the enclosure has adequate cork bark and branches positioned at angles that allow the gecko to sleep right-side up. Geckos sleep pressed against cork bark in vertical positions — the more appropriate sleeping surfaces available, the less time they spend inverted on glass. Mild floppy tail is cosmetic; severe cases can involve skeletal deformity.</p>

        <h2>Tail Autotomy — No Regrowth in Cresties</h2>
        <p>Crested geckos can drop their tails as a predator defense — tail autotomy. Unlike many gecko species, crested geckos do not regenerate their tails after dropping them. A tailless crested gecko (called a "frogbutt") is permanent. This does not affect health, longevity, or quality of life — tailless crested geckos live full, normal lives. However, it does affect value if the animal is to be sold. Avoid situations that stress the gecko into tail drop: rough handling, being grabbed by the tail, loud noises, and encounters with aggressive tankmates (crested geckos should be housed individually except during supervised breeding).</p>
      </div>
    </ArticleLayout>
  )
}
