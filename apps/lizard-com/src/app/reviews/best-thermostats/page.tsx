import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Best Reptile Thermostats 2025 — Pulse, Dimming | Lizard.com', description: 'Every heat source needs a thermostat. Pulse proportional, dimming, and on-off thermostats ranked for reptile enclosures — Herpstat, Inkbird.', path: '/reviews/best-thermostats', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Best Reptile Thermostats 2025', description: 'Pulse, dimming, and on-off reptile thermostats ranked.', url: 'https://lizard.com/reviews/best-thermostats', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const herpstatSchema = buildProductSchema({ name: 'Spyder Robotics Herpstat 1', description: 'Pulse proportional reptile thermostat — most accurate thermoregulation for heat mats and radiant heat panels.', url: 'https://spyderrobotics.com', imageUrl: '', ratingValue: 9.5, reviewCount: 1 })
const inkbirdSchema = buildProductSchema({ name: 'Inkbird ITC-306A Thermostat', description: 'Budget-friendly on-off reptile thermostat with probe — reliable for lower-wattage heat sources.', url: 'https://inkbird.com', imageUrl: '', ratingValue: 8.8, reviewCount: 1 })
const allSchemas = combineSchemas(schema, herpstatSchema, inkbirdSchema)

const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Herpstat 1', subtitle: 'Pulse proportional · Most accurate · UTH + RHP', href: '#herpstat' },
  { label: 'Best Dimming', emoji: '💡', name: 'Vivarium Electronics VE-100', subtitle: 'Dimming · For bulbs and CHE', href: '#ve100' },
  { label: 'Best Budget', emoji: '💰', name: 'Inkbird ITC-306A', subtitle: 'On/off · Reliable · Under $30', href: '#inkbird' },
]

export default function BestThermostatsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="relative z-10 px-container sm:px-container-sm py-14" style={{ background: 'linear-gradient(135deg, #0D1A0D, #080C08)' }}>
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">⚡ Safety Critical · May 2025</span>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Reptile Thermostats 2025</h1>
        <p className="text-lg font-light leading-relaxed max-w-2xl" style={{ color: 'rgba(238,240,228,0.55)' }}>Unthermostated heat mats have killed reptiles and caused fires. Every heat source in every enclosure needs a thermostat — this is not optional. Here are the best options by heat source type.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Thermostats</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="rounded-xl p-5 mb-8" style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.2)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2" style={{ color: '#C84A2A' }}>Thermostat Types — Match to Heat Source</div>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                {[['On/Off', 'Simple switching. For low-wattage heat mats. Creates temperature swings.'], ['Pulse Proportional', 'Pulses power to maintain exact temp. Best for heat mats and RHP.'], ['Dimming', 'Reduces power to bulbs. Required for incandescent, CHE, and DHP.']].map(([t, d]) => (
                  <div key={t} className="bg-white rounded-lg p-3 border border-brand-border">
                    <div className="font-bold text-brand-dark mb-1">{t}</div>
                    <div className="text-brand-text-light leading-relaxed">{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <ScoreMethodology />
            <ReviewCard id="herpstat" badge="Best Overall" badgeEmoji="🏆" name="Spyder Robotics Herpstat 1" subtitle="Pulse proportional · ±0.2°F accuracy · Heat mat + RHP compatible" score={9.5} winner
              description={<p>The Herpstat 1 is widely considered the benchmark pulse proportional reptile thermostat. Pulse proportional technology maintains temperatures within ±0.2°F by sending rapid on/off pulses to the heat source rather than switching it fully on and off — this eliminates the temperature swings of basic on/off thermostats and extends heat mat lifespan. Built in the US by Spyder Robotics with a decade of track record in the reptile keeping community. The probe is accurate, the housing is durable, and the safety record is excellent. Compatible with heat mats (UTH), radiant heat panels (RHP), and ceramic heat emitters (CHE) — not for incandescent or halogen bulbs (use dimming thermostat for these).</p>}
              specs={[{ label: 'Type', value: 'Pulse proportional', highlight: 'good' }, { label: 'Accuracy', value: '±0.2°F', highlight: 'good' }, { label: 'Compatible', value: 'UTH, RHP, CHE' }, { label: 'Made In', value: 'USA', highlight: 'good' }]}
              pros={['Best temperature accuracy available', 'Pulse tech extends heat mat life', 'US-made, reliable', 'Decade of keeper track record']}
              cons={['Not for bulbs (use dimming thermostat)', 'More expensive than budget options ($65-85)']}
              price="$65–85"
              ctaText="Shop Herpstat 1 →"
              ctaHref="/go/amazon-brand/herpstat+1+thermostat?s=reviews-best-thermostats"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="herpstat-1"
            />
            <ReviewCard id="ve100" badge="Best Dimming Thermostat" badgeEmoji="💡" name="Vivarium Electronics VE-100" subtitle="Dimming type · For incandescent, CHE, and halogen bulbs" score={9.2}
              description={<p>Dimming thermostats reduce power to the heat source rather than switching it on and off — this is required for incandescent and halogen bulbs (which should not be rapidly cycled on and off, and which create temperature spikes with on/off control). The VE-100 is the most recommended dimming thermostat in the reptile keeping community. Compatible with incandescent bulbs, ceramic heat emitters, and halogen basking bulbs. Not for heat mats (use pulse thermostat for those). Accurate probe, user-adjustable set point.</p>}
              specs={[{ label: 'Type', value: 'Dimming (PWM)', highlight: 'good' }, { label: 'Compatible', value: 'Incandescent, CHE, halogen', highlight: 'good' }, { label: 'Not for', value: 'Heat mats (use pulse)', highlight: 'warn' }]}
              pros={['Best dimming thermostat available', 'Required for bulbs', 'Accurate and reliable', 'Well-established in the community']}
              cons={['Not for heat mats', 'More expensive than basic on/off']}
              price="$70–90"
              ctaText="Shop VE-100 →"
              ctaHref="/go/amazon-brand/vivarium+electronics+VE-100?s=reviews-best-thermostats"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="ve-100"
            />
            <ReviewCard id="inkbird" badge="Best Budget" badgeEmoji="💰" name="Inkbird ITC-306A" subtitle="On/off · Under $30 · Reliable for low-wattage heat mats · Digital display" score={8.8}
              description={<p>For small setups and low-wattage heat mats (under 20W), the Inkbird ITC-306A delivers reliable on/off thermostat control at the lowest price in the category. Digital display, adjustable hysteresis (temperature swing range), and accurate probe. The on/off switching means more temperature variation than pulse thermostats — acceptable for heat mats in small setups but less ideal for larger wattage. For a beginner&apos;s first reptile setup or a secondary enclosure, the Inkbird is an appropriate budget choice. Upgrade to Herpstat as the setup grows or as temperature stability becomes more critical.</p>}
              specs={[{ label: 'Type', value: 'On/off' }, { label: 'Best for', value: 'Low-wattage heat mats under 20W' }, { label: 'Price', value: 'Under $30', highlight: 'good' }, { label: 'Display', value: 'Digital temperature readout' }]}
              pros={['Lowest price thermostat that works', 'Digital display', 'Adjustable hysteresis', 'Widely available']}
              cons={['On/off = temperature swings', 'Not ideal for high-wattage sources', 'Upgrade needed for serious setups']}
              price="$20–30"
              ctaText="Shop Inkbird →"
              ctaHref="/go/amazon-brand/inkbird+itc-306a+thermostat?s=reviews-best-thermostats"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="inkbird-itc-306a"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Which Thermostat Type?</div>
              {[['Heat mat (UTH)', 'Pulse proportional → Herpstat'], ['Radiant heat panel', 'Pulse → Herpstat'], ['Ceramic heat emitter', 'Dimming → VE-100'], ['Incandescent bulb', 'Dimming → VE-100'], ['Halogen basking', 'Dimming → VE-100'], ['Low-wattage UTH only', 'On/off → Inkbird OK']].map(([s, r]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">{r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }, { label: 'Leopard Gecko Care', href: '/species/leopard-gecko' }]} />
            <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="review-thermostats" ctaText="Download Free" />
          </aside>
        </div>
      </div>
    </>
  )
}
