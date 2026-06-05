import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, AffiliateDisclosure, BuyBox } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Temperature Setup Guide — Gradients | Lizard.com', description: 'How to create a proper thermal gradient, select the right heat sources, use thermostats, and measure temperatures accurately for reptiles.', path: '/setup/temperature-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Reptile Temperature Setup Guide', description: 'Thermal gradients, heat sources, thermostats, and accurate measurement.', url: 'https://lizard.com/setup/temperature-guide', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const HEAT_SOURCES = [
  { name: 'Basking Bulb (incandescent)', best: 'Diurnal species (bearded dragons, blue-tongue skinks)', pros: 'Creates directional heat spot; combined with UVB for daytime setup; mimics solar radiation pattern', cons: 'Produces light — cannot use overnight; burns out regularly', notes: 'Wattage selected by distance to achieve target basking temperature; use a dimmer thermostat' },
  { name: 'Ceramic Heat Emitter (CHE)', best: 'Overnight ambient heat; supplemental heat without light', pros: 'No light — does not disrupt photoperiod; long-lasting (6–12 months)', cons: 'Does not create focused basking spot — ambient only', notes: 'Connect to pulse proportional thermostat for accurate ambient control' },
  { name: 'Deep Heat Projector (DHP)', best: 'All tropical and subtropical species; best overnight heat source', pros: 'Produces infra-red C — penetrates tissue like solar radiation; superior to CHE for thermoregulation benefit; no light', cons: 'More expensive than CHE', notes: 'Arcadia DHP is the most widely recommended example; connects to pulse proportional thermostat' },
  { name: 'Radiant Heat Panel (RHP)', best: 'Large enclosures; arboreal species', pros: 'Mounted inside roof; heats from above (natural direction); covers large area', cons: 'Expensive; installation required; not suitable for small enclosures', notes: 'Reptile Basics RHPs for large PVC enclosures' },
  { name: 'Under-Tank Heater (UTH)', best: 'None for most species — largely obsolete', pros: 'Inexpensive', cons: 'Heats substrate surface, not ambient air — does not create a thermal gradient; causes dangerous burns if thermostat fails; not suitable for substrate-dwelling species', notes: 'Use DHP or CHE instead; UTH may only be appropriate for nocturnal species requiring belly heat specifically' },
]

const THERMOSTATS = [
  { type: 'On/Off', best: 'Incandescent basking bulbs — NOT accurate for other heat sources', notes: 'Cycles on at min temp, off at max. Large temperature swings. Damages CHEs (thermal cycling reduces lifespan).' },
  { type: 'Pulse Proportional', best: 'CHE, DHP, RHP', notes: 'Sends pulsed power to maintain set temperature with minimal swing. Correct for all non-light-emitting heat sources.' },
  { type: 'Dimming (Dimmer)', best: 'Basking bulbs, halogen spots', notes: 'Dims the bulb to maintain temperature rather than cycling. More natural basking behavior; extends bulb life.' },
]

export default function TemperatureGuidePage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{ title: 'Reptile Temperature Setup Guide', subtitle: 'Reptiles are ectotherms — they regulate body temperature by moving between warm and cool areas. Providing a proper thermal gradient is not optional; it is fundamental to every metabolic process the animal depends on.', category: 'Enclosure Setup', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Temperature Guide', href: '/setup/temperature-guide' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Setup Hub', href: '/setup', category: 'Hub' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
        { title: 'Lighting Guide', href: '/setup/lighting-guide', category: 'Setup' },
        { title: 'Thermal Burns', href: '/health/thermal-burns', category: 'Health' },
        { title: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease', category: 'Health' },
      ]}
      sidebar={<>
        <TableOfContents items={[{ label: 'Thermal Gradient Principle', href: '#gradient' }, { label: 'Heat Sources Compared', href: '#heat-sources' }, { label: 'Thermostats', href: '#thermostats' }, { label: 'Measuring Correctly', href: '#measuring' }, { label: 'By Species', href: '#by-species' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Best Thermometers', href: '/reviews/best-thermometers-hygrometers' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="setup-temperature" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <AffiliateDisclosure variant="inline" siteId="lizard-com" />

        <h2 id="gradient">The Thermal Gradient Principle</h2>
        <DropCap>A thermal gradient is a continuous range of temperatures across the length of the enclosure — from a warm basking zone at one end to a cooler retreat at the other. The animal self-regulates body temperature by choosing where to position itself. This behavioral thermoregulation is the mechanism through which reptiles control digestion, immune function, reproduction, and virtually every metabolic process.</DropCap>
        <p>An enclosure with uniform temperature — even the correct temperature — denies the animal the ability to thermoregulate. The basking zone and the cool end serve different physiological functions; both are required.</p>
        <p><strong>Minimum gradient requirements:</strong> The temperature difference between the hottest basking surface and the coolest retreat should be at least 15–20°F for most species. A bearded dragon needs a 110°F basking spot and a 75–80°F cool end. Both zones are essential.</p>

        <h2 id="heat-sources">Heat Sources Compared</h2>
        {HEAT_SOURCES.map(h => (
          <div key={h.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px', marginBottom: '12px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--brand-white)', margin: '0 0 6px 0' }}>{h.name}</h3>
            <div style={{ fontSize: '12px', color: 'var(--brand-primary)', marginBottom: '10px' }}>Best for: {h.best}</div>
            <div style={{ display: 'grid', gap: '6px', fontSize: '13px' }}>
              <div style={{ color: 'rgba(238,240,228,0.7)' }}><strong style={{ color: 'var(--brand-white)' }}>Pros:</strong> {h.pros}</div>
              <div style={{ color: 'rgba(238,240,228,0.7)' }}><strong style={{ color: 'var(--brand-white)' }}>Cons:</strong> {h.cons}</div>
              <div style={{ color: 'rgba(238,240,228,0.55)', fontSize: '12px' }}>Note: {h.notes}</div>
            </div>
          </div>
        ))}

        <h2 id="thermostats">Thermostats — Required for All Heat Sources</h2>
        <p>Every heat source must be connected to a thermostat. An unthermostated heat source can overheat an enclosure and kill an animal within hours. Three types:</p>
        {THERMOSTATS.map(t => (
          <div key={t.type} style={{ borderLeft: '3px solid var(--brand-primary)', paddingLeft: '16px', marginBottom: '14px' }}>
            <div style={{ fontWeight: 700, color: 'var(--brand-white)', marginBottom: '4px' }}>{t.type} Thermostat</div>
            <div style={{ fontSize: '12px', color: 'var(--brand-primary)', marginBottom: '4px' }}>Best for: {t.best}</div>
            <div style={{ fontSize: '13px', color: 'rgba(238,240,228,0.7)' }}>{t.notes}</div>
          </div>
        ))}

        <CalloutBox variant="warning" title="Unthermostated heat = dead reptile">
          Every heat source — basking bulb, CHE, DHP, heat mat — must be connected to the correct thermostat. An unthermostated heater can overshoot enclosure temperatures and kill an animal within hours. The thermostat is not an optional accessory; it is part of the heater.
        </CalloutBox>

        <BuyBox
          label="Heat sources and thermostats"
          disclosure="We earn a commission when you purchase through these links, at no extra cost to you. We never rank by commission."
          brands={[
            {
              name: 'Arcadia Deep Heat Projector',
              vendors: [
                { vendor: 'amazon', href: '/go/amazon-brand/arcadia+deep+heat+projector?s=setup-temperature-guide' },
              ],
            },
            {
              name: 'Arcadia Pro T-Stat (Pulse Proportional)',
              vendors: [
                { vendor: 'amazon', href: '/go/amazon-brand/arcadia+pro+t-stat+thermostat?s=setup-temperature-guide' },
              ],
            },
            {
              name: 'Inkbird ITC-306A Dimmer Thermostat',
              vendors: [
                { vendor: 'amazon', href: '/go/amazon-brand/inkbird+itc-306a+dimmer+thermostat?s=setup-temperature-guide' },
              ],
            },
          ]}
        />

        <h2 id="measuring">Measuring Temperatures Correctly</h2>
        <p>The most critical measurement is basking surface temperature — measured with a temperature gun (infrared) pointed at the exact basking surface the animal contacts. Ambient air temperature is measured with a probe thermometer (Govee H5053) in the cool zone. Both measurements matter; both require accurate instruments.</p>
        <p><strong>Common measurement errors:</strong></p>
        <ul>
          <li>Measuring air temperature above a basking surface instead of surface temperature — can understate by 10–20°F</li>
          <li>Using analog dial gauges — documented ±8–12°F variance; see our <a href="/reviews/best-thermometers-hygrometers">thermometer guide →</a></li>
          <li>Placing the probe thermometer in the warm zone — measure ambient in the cool zone</li>
          <li>Not measuring at different heights — temperature varies vertically, particularly in tall arboreal enclosures</li>
        </ul>

        <h2 id="by-species">Temperature Requirements by Species</h2>
        <ul>
          <li><strong>Bearded dragon:</strong> Basking spot 100–110°F; cool side 75–80°F; ambient night 65–75°F acceptable</li>
          <li><strong>Leopard gecko:</strong> Warm hide floor 88–92°F (belly heat); cool side 72–78°F; no basking spot required</li>
          <li><strong>Ball python:</strong> Warm hide 88–92°F; cool side 76–80°F; ambient 80–82°F</li>
          <li><strong>Crested gecko:</strong> Ambient 72–78°F; max 80°F — heat is a primary concern; avoid temperature spikes</li>
          <li><strong>Blue-tongue skink (Northern):</strong> Basking spot 105–115°F; cool side 75–80°F</li>
          <li><strong>Corn snake:</strong> Warm end 80–85°F; cool end 70–75°F; hide on warm side 80°F</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
