import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Humidity Guide — Species Requirements | Lizard.com', description: 'Humidity requirements by species, how to raise and lower humidity, misting schedules, and how to set up a proper moist hide for shedding.', path: '/setup/humidity-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Reptile Humidity Guide', description: 'Species humidity requirements, misting schedules, and moist hides.', url: 'https://lizard.com/setup/humidity-guide', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const SPECIES_HUMIDITY = [
  { species: 'Bearded Dragon', range: '30–40%', notes: 'Desert species. Keep dry. Moist hide optional but beneficial during shed. High humidity causes respiratory infections.' },
  { species: 'Leopard Gecko', range: '30–40%', notes: 'Arid species. Moist hide (60–70% inside) essential for shedding — prevents stuck shed on toes and eye caps. Do not mist the enclosure.' },
  { species: 'Crested Gecko', range: '60–80%', notes: 'Humid forest species. Mist once or twice daily. Allow to dry between misting cycles to prevent respiratory infection from constant dampness.' },
  { species: 'Ball Python', range: '60–80%', notes: 'Humid savannah/forest. Increase to 80–90% during shed cycle. Moist hide available at all times.' },
  { species: 'Corn Snake', range: '40–60%', notes: 'Moderate humidity. Moist hide during shed. Room humidity often sufficient without active management.' },
  { species: 'Blue-Tongue Skink (Northern)', range: '40–60%', notes: 'Moderate. Moist hide for shedding. Northern BTS less humid than Indonesian subspecies.' },
  { species: 'Blue-Tongue Skink (Indonesian)', range: '60–80%', notes: 'Tropical forest. Higher humidity required. Regular misting.' },
  { species: 'Crested Gecko', range: '60–80%', notes: 'Humid arboreal forest. Mist once or twice daily.' },
]

export default function HumidityGuidePage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{ title: 'Reptile Humidity Guide', subtitle: 'Correct humidity is as important as correct temperature. Too low causes chronic dehydration and stuck shed. Too high causes respiratory infection. The correct range depends entirely on the species.', category: 'Enclosure Setup', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Humidity Guide', href: '/setup/humidity-guide' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Temperature Setup Guide', href: '/setup/temperature-guide' }, { label: 'Substrate Guide', href: '/setup/substrate-guide' }, { label: 'Best Thermometers & Hygrometers', href: '/reviews/best-thermometers-hygrometers' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="setup-humidity" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Humidity Matters</h2>
        <p><strong>Too low:</strong> Chronic dehydration even if a water dish is provided — reptiles absorb moisture through their environment as well as drinking. Dehydration causes: dysecdysis (stuck shed, particularly dangerous on toes and eye caps where it can cut off circulation), kidney stress, reduced immune function, and poor overall condition.</p>
        <p><strong>Too high:</strong> Respiratory infection. Bacteria and mold thrive in constantly wet environments; humid-loving species require high humidity AND ventilation — the combination of warm, stagnant humid air is what causes respiratory disease, not humidity itself. Enclosures must be designed with appropriate airflow.</p>

        <h2>Species Humidity Requirements</h2>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead><tr style={{ background: 'rgba(122,181,42,0.12)' }}>{['Species', 'Target Range', 'Notes'].map(h => <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: 'var(--brand-primary)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</th>)}</tr></thead>
            <tbody>{SPECIES_HUMIDITY.map((s, i) => (
              <tr key={s.species + i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.04)', fontWeight: 600, color: 'var(--brand-white)' }}>{s.species}</td>
                <td style={{ padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.04)', color: 'var(--brand-primary)', fontWeight: 700 }}>{s.range}</td>
                <td style={{ padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.04)', color: 'rgba(238,240,228,0.6)', fontSize: '12px' }}>{s.notes}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2>How to Raise Humidity</h2>
        <ul>
          <li><strong>Misting:</strong> Manual or automated mister. For humid species, 1–2 mistings daily depending on enclosure size and ventilation. Crucial: allow humidity to drop between cycles. Target: humidity rises after misting, then falls before the next misting. This mimics natural humidity cycles and prevents respiratory disease.</li>
          <li><strong>Bioactive substrate:</strong> A living bioactive substrate (soil mix with springtails and isopods) maintains natural humidity levels without active misting — the substrate retains moisture and releases it slowly. Excellent for humidity-requiring species.</li>
          <li><strong>Cover ventilation partially:</strong> Mesh or screen tops allow humidity to escape rapidly. Partially covering (foil, plastic, or less porous material on part of the lid) reduces evaporation. Do not seal entirely — ventilation is essential.</li>
          <li><strong>Large water dish:</strong> Evaporation from a large open water dish naturally raises ambient humidity slightly.</li>
          <li><strong>Live plants:</strong> Transpire moisture into the air. Particularly effective for arboreal humid-species enclosures.</li>
        </ul>

        <h2>How to Lower Humidity</h2>
        <ul>
          <li>Increase ventilation — the most effective tool. More airflow equals faster moisture evaporation.</li>
          <li>Reduce misting frequency or stop misting entirely</li>
          <li>Remove water dish or reduce its size</li>
          <li>Switch to a less moisture-retaining substrate</li>
          <li>Add airflow with a small fan pointed across (not into) the enclosure</li>
        </ul>

        <h2>The Moist Hide — Essential for All Species</h2>
        <p>Even desert species need a moist hide — a microhabitat within the enclosure with higher humidity than the ambient environment. This is where reptiles go during shed cycles to absorb the moisture needed to loosen the skin.</p>
        <p><strong>How to build a moist hide:</strong></p>
        <ol>
          <li>Any opaque container with a lid (tupperware, deli container)</li>
          <li>Cut an entry hole — large enough for the animal to enter fully</li>
          <li>Fill with moist sphagnum moss, coconut fiber, or paper towel (keep damp, not wet)</li>
          <li>Place on the warm end of the enclosure — heat accelerates shedding when combined with humidity</li>
          <li>Replace substrate every 1–2 weeks to prevent mold</li>
        </ol>
        <p>The moist hide should be available permanently, not just during shed — reptiles use it proactively. Signs that the moist hide is needed: opaque eyes (coming into shed), dull overall color, behavioral restlessness.</p>
      </div>
    </ArticleLayout>
  )
}
