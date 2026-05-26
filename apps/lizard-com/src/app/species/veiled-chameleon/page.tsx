import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Veiled Chameleon Care Guide — Screen Cages, Drip Systems & Stress | Lizard.com', description: 'Veiled chameleons are not beginner lizards. Screen cages mandatory, drip watering required, and they stress fatally with excessive handling. But healthy ones are spectacular.', path: '/species/veiled-chameleon', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Veiled Chameleon Care Guide', description: 'Screen cage requirements, hydration, diet, and stress management for Chamaeleo calyptratus veiled chameleons.', url: 'https://lizard.com/species/veiled-chameleon', imageUrl: '', authorName: 'Lizard.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function VeiledChameleonPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Veiled Chameleon Care Guide', subtitle: 'Chamaeleo calyptratus — the most commonly kept chameleon in the hobby, and the most commonly killed by inadequate husbandry. Veiled chameleons are sensitive to stress, dependent on specific environmental conditions, and require daily management attention. They reward experienced keepers who meet their needs with one of the most visually captivating reptiles in existence.', category: 'Species Guide — Experienced', authorName: 'Lizard.com Expert Team', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Veiled Chameleon', href: '/species/veiled-chameleon' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Adult male size', '18–24 inches'], ['Adult female size', '10–14 inches'], ['Enclosure', 'Screen cage 24×24×48" minimum'], ['Basking surface', '85–95°F'], ['Ambient', '72–80°F'], ['Humidity', '50–70% — fluctuation is fine'], ['Watering', 'Drip system or misting 2–3×/day'], ['Lifespan', 'Males 6–8 yrs · Females 4–6 yrs']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Panther Chameleon', href: '/species/panther-chameleon' }, { label: 'Day Gecko', href: '/species/day-gecko' }, { label: 'Egg Binding', href: '/health/egg-binding' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-veiled-chameleon" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Screen Cages — The Non-Negotiable</h2>
        <p>Veiled chameleons require screen enclosures — not glass, not plastic tubs, not hybrid enclosures with glass sides and screen tops. Chameleons need maximum airflow throughout the entire enclosure at all times. The warm, stagnant air that accumulates in glass or plastic enclosures causes upper respiratory infections rapidly in chameleons. The screen cage allows air movement that prevents this while still allowing appropriate temperature gradients and humidity fluctuation.</p>
        <p>Minimum dimensions: 24×24×48 inches for adult males. Females are smaller and can be maintained in a 24×24×36 at minimum. Taller is always better — chameleons are arboreal and feel most secure at height. The cage must be densely planted with live plants (pothos is the standard — cheap, fast-growing, non-toxic to chameleons, and tolerant of the humidity cycles) and structured with branches at multiple heights to allow full use of vertical space.</p>

        <h2>Hydration — Drip System or Daily Misting</h2>
        <p>Chameleons drink from water droplets on leaves — they do not recognize standing water and will not drink from a water dish. Dehydration is common and often fatal if not caught early (deeply sunken eyes are the classic sign — by this point significant dehydration has occurred). Hydration options: an automated misting system (Mist King is the industry standard) programmed for 2–3 sessions daily of 2–3 minutes each, or a manual dripper (Zoo Med Big Dripper or DIY bucket-and-tubing setup) that runs for several hours and deposits water droplets throughout the cage.</p>
        <p>The misting schedule serves dual purpose: hydration and humidity cycling. Chameleons from Yemen's highland environments have evolved for periods of high humidity (misting) followed by full drying. A cage that stays continuously wet develops respiratory problems; a cage that cycles wet-then-dry provides the conditions that support respiratory health. Run the misting system, allow the cage to dry fully between sessions, repeat.</p>

        <h2>Stress — The Leading Cause of Death</h2>
        <p>Chameleons are profoundly affected by chronic stress in ways that most reptiles are not. Chronic stress produces immunosuppression, anorexia, and a progressive decline that is difficult to reverse once established. The most common chronic stressors in captivity: seeing their own reflection (cover three sides of the cage with opaque material — the chameleon seeing itself triggers constant territorial stress), being housed where they see other animals or other chameleons (even through glass), handling more than 2–3 times weekly, and enclosures with insufficient cover (a chameleon that cannot hide feels perpetually exposed).</p>
        <p>Color reading: a stressed veiled chameleon is dark — dark brown, dark green, or near-black. A relaxed, comfortable veiled chameleon displays bright greens and yellows with vivid turquoise, white, and orange accents on the sides. Daily color observation is the most reliable health indicator. A chameleon that has been dark for multiple days consecutively without an obvious stressor (shed, handling) requires husbandry assessment.</p>

        <h2>Diet and Feeding</h2>
        <p>Veiled chameleons are omnivorous — primarily insectivorous with significant plant matter in the diet compared to other chameleon species. Primary feeders: dubia roaches, hornworms, silkworms, and crickets (gut-loaded and dusted). Plant matter: most veiled chameleons will eat the pothos and other plants in their enclosure — this is normal and acceptable, not a problem to prevent. Supplement with kale, collard greens, or dandelion if they are consuming plant matter readily.</p>
        <p>Supplementation is critical: Arcadia EarthPro-A calcium supplement at every feeding, ReptiVite or Arcadia EarthPro RevitaliseD3 twice monthly. Veiled chameleons are prone to metabolic bone disease and hypovitaminosis A without consistent supplementation. Calcium without D3 is used when adequate UVB is provided; calcium with D3 is used as backup insurance or on cloudy days when UVB output is reduced.</p>

        <h2>Female Veiled Chameleons and Egg Production</h2>
        <p>Female veiled chameleons produce infertile egg clutches even without male contact — a metabolic drain that shortens their lifespan (4–6 years versus 6–8 for males). A laying bin (a deep container of moist substrate — at least 12 inches deep — placed in the enclosure) must be available at all times for females. A female that cannot find an appropriate laying site will become egg-bound. Laying typically occurs at night; a female that is digging in the corner of the cage or pacing the floor is nesting and needs the laying bin immediately accessible.</p>
      </div>
    </ArticleLayout>
  )
}
