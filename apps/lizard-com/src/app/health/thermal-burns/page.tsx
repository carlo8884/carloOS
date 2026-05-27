import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Thermal Burns in Reptiles — Hot Rocks | Lizard.com', description: 'Hot rocks burn reptiles before they can detect the heat. Loose heat lamp placement causes dorsal burns.', path: '/health/thermal-burns', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Thermal Burns in Reptiles', description: 'Causes, signs, and treatment of thermal burns from hot rocks and heat lamps in reptiles.', url: 'https://lizard.com/health/thermal-burns', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function ThermalBurnsPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Thermal Burns in Reptiles', subtitle: 'Thermal burns are one of the most common reptile injuries seen in veterinary practice and almost entirely preventable. The two main culprits: heated rocks (reptiles cannot detect conductive heat until burned) and loose heat lamps positioned too close or not properly secured. Burns are painful, slow to heal, and frequently become infected.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health/sick-reptile-signs' }, { name: 'Thermal Burns', href: '/health/thermal-burns' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Prevention Checklist</div>
          {['Never use electric hot rocks', 'All heat on thermostats', 'Heat lamp 12"+ from basking surface', 'Use cage clamp + secure fixture', 'Measure with infrared thermometer', 'Under-tank heaters on thermostat only'].map(s => (
            <div key={s} style={{ display: 'flex', gap: '8px', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px', color: 'rgba(238,240,228,0.6)', alignItems: 'center' }}>
              <span style={{ color: '#4CAF50' }}>✓</span>{s}
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-thermal-burns" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Hot Rocks Are Dangerous</h2>
        <p>Reptiles thermoregulate by moving between warm and cool areas — they seek radiant heat from above (like the sun) rather than conductive heat from below. Their skin is not adapted to detect conductive heat from a surface until it is already causing tissue damage. An electric hot rock may reach 120–140°F on its surface — far above safe contact temperatures — while the reptile rests on it, unaware that damage is occurring. By the time behavioral signals indicate discomfort, full-thickness burns may be present on the ventral surface.</p>
        <p><strong>Electric hot rocks should never be used.</strong> This is not a recommendation — it is a categorical safety statement. Every reptile veterinarian and organization agrees: heated rocks are inappropriate for reptile husbandry. Appropriate heat sources are overhead (basking lamps, radiant heat panels) and under-tank heaters on thermostats (for belly heat in species that require it — on a thermostat set to appropriate substrate temperature, surface temperature verified with an infrared thermometer).</p>

        <h2>Heat Lamp Burns — The Second Common Cause</h2>
        <p>Overhead basking lamps cause burns when: positioned too close to the basking surface (high-wattage bulbs generate intense heat at close range — verify basking surface temperature with an infrared thermometer, not guess), not secured properly (a lamp that falls into the enclosure causes immediate severe burns and potential fire), or when the animal climbs directly to the lamp source (screen cages with lamps on top can be climbed by geckos and some lizards who contact the hot bulb directly).</p>
        <p>Lamp safety: use a quality fixture with a spring clamp that locks securely. Verify the basking surface temperature (not air temperature) with an infrared thermometer at multiple points across the basking area. For species that climb, use a lamp guard (wire cage surrounding the bulb) to prevent direct contact. Never leave high-wattage lamps unsupervised in an enclosure with a reptile that can reach them.</p>

        <h2>Recognizing Burns</h2>
        <p>Early thermal burns: reddening or discoloration of the affected area, blistering, or areas where scales appear damaged or detached. The animal may show reluctance to use the affected area or unusual behavioral changes. Burns on the ventral surface (belly) from hot rocks may not be immediately visible — check the ventral surface regularly, particularly in animals kept with any conductive heat source.</p>
        <p>Advanced burns: open wounds with tissue loss, secondary bacterial infection (yellow-green discharge, necrotic tissue), systemic signs of infection (lethargy, anorexia). Burns covering large body areas carry significant risk of sepsis and death in reptiles.</p>

        <h2>First Aid and Veterinary Care</h2>
        <p><strong>First aid:</strong> Remove the animal from the heat source immediately. Cool the burn gently with room-temperature (not cold) water for 5–10 minutes. Do not apply butter, petroleum jelly, or any home remedy to the burn. Cover loosely with a clean damp cloth. Veterinary evaluation is required for any burn beyond superficial reddening.</p>
        <p><strong>Veterinary treatment:</strong> Debridement of necrotic tissue, topical antimicrobial (silver sulfadiazine cream is commonly used), systemic antibiotics for infected burns, and pain management. Burns in reptiles heal slowly — weeks to months depending on depth and extent. The reptile must be kept in a clean, sterile substrate during healing to prevent wound contamination. Full recovery from significant burns may require extended veterinary management.</p>
      </div>
    </ArticleLayout>
  )
}
