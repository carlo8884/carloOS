import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, AffiliateDisclosure, BuyBox, CrossPortfolioCard, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Temperature Setup Guide — Gradients | Lizard.com', description: 'How to create a proper thermal gradient, select the right heat sources, use thermostats, and measure temperatures accurately for reptiles.', path: '/setup/temperature-guide', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'lizard-com', title: 'Reptile Temperature Setup Guide', description: 'Thermal gradients, heat sources, thermostats, and accurate measurement.', url: 'https://lizard.com/setup/temperature-guide', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-15T00:00:00Z' })

const SPECIES_TEMPS = [
  { species: 'Bearded dragon', basking: '100–110°F', cool: '75–80°F', night: '65–75°F acceptable', heat: 'Basking bulb + DHP/CHE overnight' },
  { species: 'Leopard gecko', basking: 'Warm hide floor 88–92°F (belly heat)', cool: '72–78°F', night: 'No basking spot required', heat: 'Overhead warm hide; belly heat secondary' },
  { species: 'Ball python', basking: 'Warm hide 88–92°F', cool: '76–80°F', night: 'Ambient ~80–82°F', heat: 'DHP/CHE on thermostat' },
  { species: 'Crested gecko', basking: 'None — ambient 72–78°F', cool: 'Same; max 80°F', night: 'Avoid spikes; heat is the risk', heat: 'Usually none; ambient room heat' },
  { species: 'Blue-tongue skink (Northern)', basking: '105–115°F', cool: '75–80°F', night: 'Drop acceptable', heat: 'Basking bulb + overnight ambient' },
  { species: 'Corn snake', basking: 'Warm end 80–85°F', cool: '70–75°F', night: 'Drop acceptable', heat: 'DHP/CHE; warm hide at 80°F' },
]

const FAQS = [
  { question: 'What is the minimum temperature difference a reptile enclosure needs?', answer: 'For most species the difference between the hottest basking surface and the coolest retreat should be at least 15–20°F. A uniform temperature — even the correct one — denies the animal the ability to thermoregulate, because the warm basking zone and the cool retreat serve different physiological functions. A bearded dragon, for example, needs a 100–110°F basking spot at one end and a 75–80°F cool end at the other; both zones are required.' },
  { question: 'Do I really need a thermostat on every heat source?', answer: 'Yes. Every heat source — basking bulb, ceramic heat emitter, deep heat projector, or heat mat — must be connected to the correct thermostat. An unthermostated heater can overshoot enclosure temperatures and kill an animal within hours. Match the thermostat type to the heat source: a dimming thermostat for light-emitting basking bulbs, and a pulse proportional thermostat for non-light sources such as CHEs, DHPs, and radiant heat panels. A simple on/off thermostat is only appropriate for incandescent basking bulbs and produces large temperature swings on other equipment.' },
  { question: 'Why is an under-tank heater (UTH) discouraged for most reptiles?', answer: 'An under-tank heater warms the substrate surface rather than the ambient air, so it does not create the through-the-air thermal gradient that most species rely on, and it can cause dangerous contact burns if its thermostat fails. For most setups a deep heat projector or ceramic heat emitter is the better choice. A UTH may still be appropriate only for specific nocturnal species that need localized belly heat.' },
  { question: 'What is the most common temperature measurement mistake?', answer: 'Measuring the air temperature above the basking surface instead of the surface itself — this can understate the true basking temperature by 10–20°F. Use an infrared temperature gun pointed at the exact surface the animal contacts to read basking temperature, and a probe thermometer placed in the cool zone to read ambient air. Avoid analog dial gauges, which have documented variance of roughly ±8–12°F.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const schema = combineSchemas(articleSchema, faqSchema)

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
      hero={{ title: 'Reptile Temperature Setup Guide', subtitle: 'Reptiles are ectotherms — they regulate body temperature by moving between warm and cool areas. Providing a proper thermal gradient is not optional; it is fundamental to every metabolic process the animal depends on.', category: 'Enclosure Setup', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '10 min' }}
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
        <TableOfContents items={[{ label: 'Quick Answer', href: '#tldr' }, { label: 'Thermal Gradient Principle', href: '#gradient' }, { label: 'Heat Sources Compared', href: '#heat-sources' }, { label: 'Thermostats', href: '#thermostats' }, { label: 'Measuring Correctly', href: '#measuring' }, { label: 'By Species', href: '#by-species' }, { label: 'FAQ', href: '#faq' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Best Thermometers', href: '/reviews/best-thermometers-hygrometers' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="setup-temperature" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="care" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <AffiliateDisclosure variant="inline" siteId="lizard-com" />

        <div id="tldr" style={{ background: 'rgba(122,181,42,0.08)', border: '1px solid rgba(122,181,42,0.18)', borderRadius: '12px', padding: '20px 22px', margin: '8px 0 28px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '10px' }}>Quick Answer</div>
          <p style={{ margin: '0 0 12px', color: 'rgba(238,240,228,0.85)', fontSize: '15px', lineHeight: 1.6 }}>
            A reptile enclosure needs a <strong>thermal gradient</strong> — a warm basking zone at one end and a cooler retreat at the other — so the animal can move between them to regulate its own body temperature. Aim for at least a <strong>15–20°F difference</strong> between the hottest basking surface and the coolest retreat. Heat the basking spot with a focused source (a basking bulb for diurnal species), provide non-light overnight heat with a <strong>deep heat projector or ceramic heat emitter</strong>, and connect <strong>every</strong> heat source to the correct thermostat. Measure the basking <em>surface</em> with an infrared gun and the cool-end <em>air</em> with a probe thermometer.
          </p>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'rgba(238,240,228,0.72)', fontSize: '13px', lineHeight: 1.7 }}>
            <li>Gradient first: a uniform temperature, even the correct one, prevents thermoregulation.</li>
            <li>Thermostat type follows the heat source: dimming for basking bulbs, pulse proportional for CHE/DHP/RHP.</li>
            <li>Skip under-tank heaters for most species — they warm substrate, not air, and risk contact burns.</li>
            <li>See exact targets in the <a href="#by-species">by-species table</a> below.</li>
          </ul>
        </div>

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
        <p>These are starting targets for common species. Always cross-check against a current species care sheet, because requirements vary by subspecies, age, and locality. Note the pattern: high-desert baskers (bearded dragon, Northern blue-tongue skink) need a hot, focused basking surface, while nocturnal and forest species (leopard gecko, crested gecko) need warm hides or modest ambient warmth instead of a bright basking spot.</p>

        <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '24px 0', border: '1px solid rgba(255,255,255,0.07)', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: 'rgba(122,181,42,0.12)' }}>
                {['Species', 'Basking / Warm Zone', 'Cool Side', 'Overnight', 'Typical Heat Setup'].map(h => (
                  <th key={h} style={{ padding: '11px 14px', textAlign: 'left', color: 'var(--brand-primary)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(122,181,42,0.15)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SPECIES_TEMPS.map((row, i) => (
                <tr key={row.species} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ padding: '10px 14px', color: 'var(--brand-primary)', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.species}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.85)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.basking}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.65)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.cool}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.65)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.night}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.65)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.heat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>For full husbandry context on any of these species, see the <a href="/species/bearded-dragon">bearded dragon</a>, <a href="/species/leopard-gecko">leopard gecko</a>, and <a href="/species/crested-gecko">crested gecko</a> care guides. To pin down a basking wattage and bulb distance for your specific enclosure, use the <a href="/tools/basking-temperature-calculator">basking temperature calculator</a>.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
  )
}
