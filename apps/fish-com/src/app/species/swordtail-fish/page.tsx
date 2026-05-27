import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Swordtail Fish Care Guide — Colors, Sex Reversal & Aggression | Fish.com', description: 'Swordtails are larger livebearers with dramatic color varieties. Females can spontaneously sex reverse to male. Males are aggressive toward each other — one male per tank.', path: '/species/swordtail-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Swordtail Fish Care Guide', description: 'Color varieties, sex reversal, male aggression, and care for Xiphophorus helleri swordtails.', url: 'https://fish.com/species/swordtail-fish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function SwordtailPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Swordtail Fish Care Guide', subtitle: 'Xiphophorus helleri — named for the elongated lower tail fin lobe that forms the distinctive "sword" in males. Larger and more robust than platies and guppies, with a wider range of color varieties and a fascinating biology: females can spontaneously reverse sex and become functional males under specific social conditions.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Swordtail', href: '/species/swordtail-fish' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Xiphophorus helleri'], ['Adult size', '4–5 inches (males with sword)'], ['Temperature', '65–82°F — adaptable'], ['pH', '7.0–8.3'], ['Males per tank', 'One — males fight severely'], ['Breeding', 'Livebearer — every 4–6 weeks'], ['Lifespan', '3–5 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Platy Fish', href: '/species/platy-fish' }, { label: 'Guppy Care', href: '/species/guppy' }, { label: 'Molly Fish', href: '/species/molly-fish' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-swordtail" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Color Varieties</h2>
        <p>Wild swordtails are green with a red or brown lateral stripe — attractive but modest compared to the developed aquarium varieties. Selective breeding has produced: red swordtail (solid vivid red with the classic sword), neon swordtail (bright orange-red with intense neon coloration), pineapple swordtail (yellow-orange body with dark-edged scales producing a pineapple pattern), Wiesbaden red (dark red with black trim), tuxedo swordtail (contrasting dark and light pattern), and lyretail varieties where both the upper and lower tail lobes are elongated symmetrically. The hi-fin swordtail has dramatically extended dorsal fins in addition to the sword — the most visually elaborate aquarium variety but requiring careful tankmate selection to protect the fins.</p>

        <h2>Sex Reversal — Fascinating Biology</h2>
        <p>Swordtails are one of a small number of fish species where females can spontaneously reverse sex and become functional males — developing a gonopodium (the male reproductive organ replacing the anal fin), beginning to develop a sword, and becoming capable of fertilizing eggs. This occurs most commonly when a group of females is kept without a male — the dominant female may reverse to male. It can also occur in mixed groups for reasons not fully understood. The reversed male is genetically female (XX) but functionally male and can produce viable offspring. This is a natural biological phenomenon — not a disease, not a sign of stress, and not reversible.</p>

        <h2>Male Aggression — One Per Tank</h2>
        <p>Unlike platies and guppies where multiple males can sometimes coexist in adequately sized tanks, male swordtails are genuinely dangerous to each other. Two males in the same tank will fight persistently, with the dominant male pursuing the subordinate relentlessly until it is injured, stressed, and eventually killed. This is not occasional fin-nipping — it is sustained, escalating aggression. Keep one male per tank. Multiple females with a single male provides the most natural and stable social dynamic. If excess males are produced through breeding, they need separate housing or rehoming.</p>

        <h2>Tank Requirements</h2>
        <p>Swordtails are active, open-water swimmers that need more horizontal swimming space than platies or guppies — a 30-gallon minimum for a group, 20 gallons for a single male with two or three females. They appreciate plants and cover but also need open areas to swim. Their temperature range (65–82°F) overlaps with both tropical and cooler community fish, making them versatile in community setups. Compatible with most peaceful community fish — corydoras, tetras, rasboras, peaceful dwarf cichlids. Avoid nippy fish (tiger barbs, serpae tetras) that target the sword and fin extensions.</p>

        <h2>Platy Hybrids</h2>
        <p>Swordtails and platies hybridize freely in captivity — they share enough genetic proximity that cross-breeding produces fertile offspring. Most aquarium swordtails and platies have some historical hybridization in their ancestry. Keeping swordtails and platies together produces hybrid offspring with intermediate appearance in subsequent generations — not a problem for community keeping but worth noting for anyone trying to maintain distinct lines or breed true to variety.</p>
      </div>
    </ArticleLayout>
  )
}
