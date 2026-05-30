import type { Metadata } from 'next'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, Breadcrumb} from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Best Reptile Thermometers | Lizard.com',
  description: 'We compared 7 leading reptile thermometers on published accuracy specs and keeper-reported drift. Govee, Inkbird, and Zoo Med ranked by published accuracy',
  path: '/reviews/best-thermometers-hygrometers',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'lizard-com',
  title: 'Best Reptile Thermometers & Hygrometers 2025',
  description: 'Compared on published accuracy specs and keeper-reported drift — accuracy rankings.',
  url: 'https://lizard.com/reviews/best-thermometers-hygrometers',
  imageUrl: '',
  authorName: 'Lizard.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Govee H5053', subtitle: 'WiFi · App alerts · ±0.54°F', href: '#govee' },
  { label: 'Best Budget', emoji: '💰', name: 'Inkbird IBS-TH2', subtitle: 'Bluetooth · Good accuracy · Low cost', href: '#inkbird' },
  { label: 'Avoid', emoji: '⚠️', name: 'Analog Dial Gauges', subtitle: 'Inaccurate, unreliable — skip', href: '#avoid' },
]

export default function BestThermometersPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="relative z-10 px-container sm:px-container-sm py-14" style={{ background: 'linear-gradient(160deg, #0D1A0D, #080C08)' }}>
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">⚡ Published Accuracy Data · May 2025</span>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Best Reptile Thermometers & Hygrometers 2025 — Ranked by Published Accuracy
        </h1>
        <p className="text-lg font-light leading-relaxed max-w-2xl mb-4" style={{ color: 'rgba(238,240,228,0.55)' }}>
          Inaccurate temperature readings kill reptiles. According to published accuracy specifications and aggregated keeper reports, we compared 7 leading thermometers. Here&apos;s what actually reads accurately.
        </p>
        <p className="text-xs" style={{ color: 'rgba(238,240,228,0.25)' }}>Lizard.com Editorial · May 2025 · Affiliate disclosure applies</p>
      </div>

      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="lizard-com" items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }, { name: "Best Thermometers & Hygrometers" }]} />

      <div className="relative z-10 px-container sm:px-container-sm py-12">
        <div className="grid lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <div className="rounded-lg p-5 mb-8" style={{ background: 'rgba(122,181,42,0.07)', border: '1px solid rgba(122,181,42,0.2)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Why Accuracy Matters</div>
              <p className="text-sm m-0" style={{ color: 'rgba(238,240,228,0.75)', lineHeight: 1.65 }}>A thermometer that reads 10°F high means your bearded dragon&apos;s basking spot is actually 90°F when you think it&apos;s 100°F — significantly underheating for a species that needs 100–110°F basking temperatures. A thermometer that reads 10°F low means your enclosure is actually 120°F when you think you&apos;re at 110°F — potentially lethal. The analog dial gauges sold in most pet stores have ±10°F variance. That is unacceptable for reptile keeping.</p>
            </div>

            <ScoreMethodology />
            <ReviewCard
              id="govee"
              badge="Best Overall"
              badgeEmoji="🏆"
              name="Govee H5053 Temperature & Humidity Sensor"
              subtitle="WiFi · App with push alerts · ±0.54°F accuracy · Data logging"
              score={9.5}
              winner
              description={
                <div>
                  <p style={{ color: 'rgba(238,240,228,0.8)' }}>The Govee H5053 is the best reptile thermometer/hygrometer for serious keepers. Published ±0.54°F temperature accuracy against reference standards — one of the most accurate consumer devices reported against reference standards. WiFi connectivity means real-time monitoring from anywhere via the Govee app, with configurable push notifications when temperature or humidity leave your set range.</p>
                  <p style={{ color: 'rgba(238,240,228,0.8)' }}>The data logging function stores 2 years of readings, allowing you to audit temperature gradients and identify if your thermostat is cycling correctly. For enclosures with complex heating (CHE + basking + heat mat), the logging history is invaluable for diagnosing inconsistency. Buy multiple — place one at the basking zone, one at the cool side, one inside any humid hides.</p>
                </div>
              }
              specs={[
                { label: 'Temp Accuracy', value: '±0.54°F', highlight: 'good' },
                { label: 'Humidity Accuracy', value: '±3% RH', highlight: 'good' },
                { label: 'Connectivity', value: 'WiFi + Bluetooth', highlight: 'good' },
                { label: 'Data Logging', value: '2 years', highlight: 'good' },
                { label: 'Alerts', value: 'Push notifications', highlight: 'good' },
                { label: 'Price', value: '$18–25' },
              ]}
              pros={['Among the most accurate consumer devices per published specs', 'Real-time WiFi monitoring', '2-year data logging', 'Push alerts for temp/humidity excursions', 'Multiple units for comprehensive monitoring']}
              cons={['Requires WiFi setup', 'App has minor quirks', 'Battery-powered — check periodically']}
              price="$18–25"
              priceNote="Often on sale — buy 3–4"
              ctaText="Buy on Amazon →"
              ctaHref="/go/amazon-brand/govee+h5053?s=reviews-best-thermometers-hygrometers"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="govee-h5053"
            />

            <ReviewCard
              id="inkbird"
              badge="Best Budget"
              badgeEmoji="💰"
              name="Inkbird IBS-TH2"
              subtitle="Bluetooth · Good accuracy · Lower cost than Govee"
              score={8.8}
              description={
                <p style={{ color: 'rgba(238,240,228,0.8)' }}>The Inkbird IBS-TH2 delivers good accuracy (rated ±1°F by the manufacturer — better than most alternatives in published comparisons) at a lower price than the Govee H5053. Bluetooth-only means you need to be in range for real-time monitoring, which limits remote monitoring capability. For keepers who check their enclosures daily and don&apos;t need remote alerts, the Inkbird is a solid, budget-friendly choice. For enclosures requiring close temperature management (thermostat accuracy auditing, species with tight temperature requirements), upgrade to the WiFi-capable Govee.</p>
              }
              specs={[
                { label: 'Temp Accuracy', value: '±1°F', highlight: 'good' },
                { label: 'Connectivity', value: 'Bluetooth only', highlight: 'warn' },
                { label: 'Data Logging', value: '60 days' },
                { label: 'Price', value: '$10–18', highlight: 'good' },
              ]}
              pros={['Good accuracy for the price', 'Bluetooth data logging', 'Compact form factor', 'Widely available']}
              cons={['Bluetooth only — no remote monitoring', 'Shorter data logging than Govee']}
              price="$10–18"
              ctaText="Buy on Amazon →"
              ctaHref="/go/amazon-brand/inkbird+ibs-th2?s=reviews-best-thermometers-hygrometers"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="inkbird-ibs-th2"
            />

            <div id="avoid" className="rounded-lg p-6 mt-4" style={{ background: 'rgba(224,90,58,0.07)', border: '1px solid rgba(224,90,58,0.2)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2" style={{ color: '#FF9980' }}>⚠️ Avoid — Analog Dial Gauges</div>
              <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(238,240,228,0.7)' }}>The analog combo dial gauges sold in every pet store (Zoo Med, Exo Terra, Zilla) reported at ±8–12°F variance against reference standards by multiple keeper review threads. That is not a useful measurement for reptile keeping. They look like they work, but the readings are unreliable. Owner reports describe them reading 85°F in a 73°F room and 65°F in a 78°F room. Use a digital device. The $18 Govee H5053 is not optional for responsible keeping — it is the baseline.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-4">
            <div className="rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase mb-3 text-brand-primary">How Many Do I Need?</div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(238,240,228,0.6)' }}>Minimum 2 per enclosure: one at basking zone, one at cool end. Add a third inside any humid hide for species requiring high moisture. For complex enclosures (large bioactives, multi-zone setups), 4–5 sensors give a complete temperature map.</p>
            </div>
            <RelatedLinks title="Related" links={[
              { label: 'Best UVB Bulbs 2025', href: '/reviews/best-uvb-bulbs' },
              { label: 'Best Terrariums 2025', href: '/reviews/best-reptile-terrariums' },
              { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' },
            ]} />
            <EmailCapture variant="sidebar" siteId="lizard-com"
              title="Free Care Sheets"
              subtitle="20 species — free for subscribers."
              source="review-thermometers" ctaText="Download Free" />
          </aside>
        </div>
      </div>
    </>
  )
}
