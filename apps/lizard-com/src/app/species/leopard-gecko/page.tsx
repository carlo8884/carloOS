import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Leopard Gecko Care Guide — Warm Hide, Diet & Shedding | Lizard.com', description: 'Complete leopard gecko care. Why they need a warm hide (not a basking spot), belly heat, diet of dubia and crickets, and how to prevent stuck shed on toes.', path: '/species/leopard-gecko', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Leopard Gecko Care Guide', description: 'Warm hide setup, diet, supplementation, and shedding for leopard geckos.', url: 'https://lizard.com/species/leopard-gecko', imageUrl: '', authorName: 'Lizard.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function LeopardGeckoPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{ title: 'Leopard Gecko Care Guide', subtitle: 'Eublepharis macularius — the most forgiving gecko and a genuine beginner reptile. But "beginner" doesn\'t mean low-maintenance: warm hides, correct belly heat, and moist hides for shedding are non-negotiable.', category: 'Species Guide', authorName: 'Lizard.com Expert Team', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Leopard Gecko', href: '/species/leopard-gecko' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Eublepharis macularius'], ['Difficulty', 'Beginner'], ['Min enclosure', '3x1.5x1.5 feet (20 gal equiv.)'], ['Activity', 'Nocturnal (crepuscular)'], ['UVB', 'Optional but beneficial'], ['Warm hide floor', '88–92°F (belly heat)'], ['Cool side', '72–78°F ambient'], ['Adult size', '7–10 inches'], ['Lifespan', '15–20+ years'], ['Diet', 'Insectivore — dubia, crickets']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Humidity Guide', href: '/setup/humidity-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-leopard-gecko" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Warm Hide — The Most Critical Setup Element</h2>
        <p>Leopard geckos are nocturnal ground-dwellers from semi-arid Pakistan and Afghanistan. Unlike bearded dragons (diurnal basking species), leopard geckos do not bask under a heat lamp — they thermoregulate via belly contact with warm substrate, primarily inside hides. The warm hide is where they spend most of the day and where digestion happens.</p>
        <p><strong>Warm hide floor temperature: 88–92°F.</strong> This is measured at the floor surface inside the hide — not the air temperature. Heat source: a heat mat (UTH) under one-third of the enclosure connected to a thermostat probe placed inside the warm hide, or a Arcadia Deep Heat Projector positioned overhead. The DHP is preferred because it produces IRA radiation that penetrates tissue like natural ground heat; UTH is acceptable with a properly calibrated thermostat.</p>
        <p><strong>Never operate a heat mat without a thermostat.</strong> Unthermostated heat mats have caused fire and burned geckos to death — this is documented and not rare. Connect every heat mat to a pulse proportional thermostat with the probe inside the warm hide.</p>

        <h2>Enclosure Setup — Three Hides Required</h2>
        <p>Leopard geckos need three hides:</p>
        <ol>
          <li><strong>Warm hide:</strong> Over the heat mat, on the warm end. This is where the gecko spends the day and digests food. Small and enclosed — geckos feel secure in tight spaces.</li>
          <li><strong>Cool hide:</strong> On the cool end. Escape from heat when thermoregulation demands it.</li>
          <li><strong>Moist hide:</strong> Damp sphagnum moss inside a hide — essential for shedding. Without a moist hide, stuck shed accumulates on toes (causing circulation loss and toe loss) and on eye caps. Place on the warm side to accelerate shedding when the gecko uses it.</li>
        </ol>
        <p>Minimum enclosure: 20-gallon long equivalent (30"L × 12"W × 12"H). This provides adequate space for the three-hide temperature gradient. Larger is better — 3x1.5x1.5 feet is ideal for an adult.</p>

        <h2>Temperatures</h2>
        <ul>
          <li><strong>Warm hide floor (belly heat):</strong> 88–92°F — the most critical measurement</li>
          <li><strong>Warm side ambient:</strong> 80–85°F</li>
          <li><strong>Cool side ambient:</strong> 72–78°F</li>
          <li><strong>Night:</strong> Can drop to 65–68°F — natural for the species</li>
        </ul>
        <p>A digital thermometer in the warm hide and a separate one on the cool side gives you the data you need. Analog dials are inaccurate — see our thermometer guide.</p>

        <h2>UVB — Optional But Beneficial</h2>
        <p>Leopard geckos are crepuscular and nocturnal — they receive minimal UV exposure in the wild. UVB is therefore optional. Current keeper best practice leans toward providing low-level UVB (Arcadia 6% or Arcadia Forest 6% at 40+ cm distance — producing UVI of approximately 0.5–1.0) because research shows improved immune function, natural color, and behavioral enrichment. It is not required but is currently recommended by most experienced keepers.</p>
        <p>If provided, connect to a light timer: 12 hours on in summer, 10 hours in winter.</p>

        <h2>Diet</h2>
        <p>Leopard geckos are insectivores — they do not eat plant matter. Every feeding is insects.</p>
        <ul>
          <li><strong>Best feeders:</strong> Dubia roaches (best nutritional profile), crickets (widely available), BSFL/phoenix worms (high calcium — reduces supplement need)</li>
          <li><strong>Acceptable:</strong> Superworms (use sparingly — high fat), waxworms (treat only — very high fat, addictive, geckos will reject other feeders if fed too many)</li>
          <li><strong>Avoid:</strong> Fireflies (toxic), wild-caught insects (pesticide and parasite risk), mealworms as a primary feeder (high fat, chitin-heavy, low nutrition)</li>
          <li><strong>Prey size:</strong> No wider than the space between the gecko's eyes</li>
          <li><strong>Frequency:</strong> Juveniles: daily. Adults: every 2–3 days. Adults tend to become obese if fed daily.</li>
        </ul>

        <h2>Supplementation</h2>
        <ul>
          <li><strong>Every feeding:</strong> Calcium without D3 (calcium carbonate) — lightly dust insects</li>
          <li><strong>2x per week:</strong> Calcium with D3 (if no UVB) or 2x per month (if UVB provided)</li>
          <li><strong>1x per week:</strong> Multivitamin (Repashy Calcium Plus or equivalent)</li>
        </ul>
        <p>A calcium dish can be left in the enclosure at all times — leopard geckos self-regulate calcium intake from a dish when available. Some keepers use this as a supplement to dusting rather than a replacement for it.</p>

        <h2>Shedding</h2>
        <p>Leopard geckos shed every 4–6 weeks (more frequently as juveniles). Signs of impending shed: skin becomes dull, whitish, or opaque. Ensure the moist hide has fresh, damp sphagnum moss before each shed.</p>
        <p><strong>Stuck shed is the most common serious husbandry problem.</strong> Retained shed on toes (digital constriction) cuts off circulation and causes toe loss within days. If you see white, papery shed on toes after a shed: soak the gecko in 1 inch of lukewarm water for 20 minutes and gently roll the stuck shed with a damp cotton swab. If shed remains after soaking, veterinary intervention. Check toes after every shed — every single time.</p>

        <h2>Common Health Issues</h2>
        <ul>
          <li><strong>Stuck shed:</strong> Prevent with moist hide, monitor after every shed</li>
          <li><strong>Cryptosporidiosis (crypto):</strong> Chronic weight loss despite eating normally, regurgitation, wasting — incurable. Separate immediately from other reptiles (highly contagious). Veterinary management can improve quality of life temporarily.</li>
          <li><strong>Tail drop:</strong> Autotomy (tail dropping) is a stress/threat response — normal, tail regrows but looks different. Reduce handling if this occurs.</li>
          <li><strong>MBD:</strong> Soft jaw, tremors, difficulty walking — inadequate calcium or D3. Correct supplementation and add low-level UVB.</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
