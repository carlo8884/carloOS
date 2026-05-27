import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Boa Constrictor Care Guide — Size Reality, BCI vs BCC & Locality Colors | Lizard.com', description: 'Boa constrictors reach 6-10 feet — not the beginner snake they\'re sometimes sold as. Common boa (BCI) vs Colombian (BCC) differences, locality color variants, and enclosure reality.', path: '/species/boa-constrictor', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Boa Constrictor Care Guide', description: 'Size expectations, BCI vs BCC subspecies, locality colors, and adult enclosure requirements for boa constrictors.', url: 'https://lizard.com/species/boa-constrictor', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BoaPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Boa Constrictor Care Guide', subtitle: 'Boa imperator and Boa constrictor — the boa constrictors of Central and South America. Stunning, intelligent, long-lived (25+ years), and frequently the first large snake in a keeper\'s collection. The decision point is honest: a 7-foot, 20-pound animal with the husbandry requirements and feeding schedule that implies. The reward for those prepared for it is one of the most impressive reptiles in the hobby.', category: 'Species Guide — Intermediate/Advanced', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Boa Constrictor', href: '/species/boa-constrictor' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Common boa (BCI) adult', '6–9 ft, 20–30 lbs (females larger)'], ['Colombian (BCC) adult', '7–10+ ft, 30–50+ lbs'], ['Enclosure (adult)', '6×3×3 ft minimum for large females'], ['Basking surface', '88–92°F'], ['Ambient warm', '82–86°F'], ['Feeding', 'Frozen/thawed rats — adult-sized'], ['Lifespan', '25–30+ years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Ball Python', href: '/species/ball-python' }, { label: 'Corn Snake', href: '/species/corn-snake' }, { label: 'Respiratory Infection', href: '/health/respiratory-infection' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-boa" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>BCI vs BCC — Two Different Snakes</h2>
        <p><strong>Boa imperator (Common boa / Central American boa / BCI — formerly Boa constrictor imperator):</strong> The most commonly kept boa in the hobby. Central American and northern South American distribution. Adult size: most males 5–7 feet, most females 6–8 feet. Smaller, lighter, and generally more handleable than the Colombian form. Multiple locality variants with dramatically different coloration (see below).</p>
        <p><strong>Boa constrictor constrictor (Colombian boa / red-tailed boa / BCC):</strong> The larger South American subspecies. Adult females commonly reach 8–10+ feet and 30–60+ pounds. The "red tail" name comes from the vivid red or orange tail pattern more distinct in Colombian animals. BCC are truly large animals requiring substantial enclosures and significant handling experience — they are not a beginner snake regardless of temperament.</p>
        <p>Many boas sold in the hobby are BCI-BCC hybrids from mixed breeding — these can reach intermediate adult sizes unpredictably. When purchasing a boa, ask the seller for the subspecies and locality clearly — the adult size difference between a BCI and a BCC female is substantial.</p>

        <h2>Locality Color Variants</h2>
        <p>Boa imperator's wide geographic range (Mexico through northern South America, plus numerous island populations) has produced dramatic locality color variation selectively bred in captivity:</p>
        <p><strong>Hog Island boa:</strong> From the Hog Islands off Honduras — hypomelanistic with pink, orange, and salmon coloration. One of the most color-shifting boas — juveniles are dark and become dramatically lighter with age. Moderate adult size.</p>
        <p><strong>Nicaraguan boa:</strong> Darker base coloration with vivid contrasting saddle marks. Medium-large BCI form.</p>
        <p><strong>Sonoran desert boa:</strong> Sandy tan to orange coloration with bleached-out pattern — reflects desert locality adaptation.</p>
        <p><strong>Crawl Cay / Corn Island:</strong> Island populations with reduced size and distinct coloration.</p>
        <p>Morphs (selectively bred genetic mutations): albino/amel BCI and BCC, hypo, motley (reduced pattern), sunglow (amel + hypo), and others. The boa morph market is smaller than ball python morphs but the available mutations produce genuinely striking animals.</p>

        <h2>Enclosure Reality for Adults</h2>
        <p>A juvenile boa fits comfortably in a 40-gallon breeder. A 4-year-old adult female BCI does not. Planning adult enclosure requirements before acquisition: a 6×3×3 foot PVC enclosure is appropriate for most adult BCI females; a 7×3×3 foot or larger for BCC females or large BCI individuals. These enclosures do not fit through standard doorways assembled — PVC enclosures are typically assembled in the room they will occupy. The cost of a properly sized adult boa enclosure (commercial PVC, $400–1,000+) should be factored into the purchase decision.</p>
        <p>Temperature and humidity: a thermal gradient from 90°F basking surface to 78–80°F cool end, with ambient humidity 60–70% (higher during shedding — add humid hide). PVC enclosures hold humidity far better than screen-top glass tanks, which are inappropriate for boas requiring elevated humidity.</p>

        <h2>Feeding</h2>
        <p>Frozen/thawed is strongly preferred over live for the same reasons as all constrictors — live prey bites cause significant wounds in boas, particularly during the strikes-and-wraps feeding sequence. Adults feed on frozen/thawed adult rats every 10–14 days; large adults may require rabbits or multiple large rats. Prey size: slightly smaller than the widest part of the snake's body (boas are thicker than corn snakes — appropriately sized prey is larger). Boas fed too frequently become obese — every 2 weeks for adults is adequate.</p>
      </div>
    </ArticleLayout>
  )
}
