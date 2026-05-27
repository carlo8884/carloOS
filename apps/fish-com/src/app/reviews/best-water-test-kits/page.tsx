import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Best Aquarium Water Test Kits 2025 — API Master Kit & More | Fish.com', description: 'Best aquarium water test kits ranked. API Master Test Kit for accuracy and value. Salifert individual tests for reef tanks. Digital meters for pH and TDS.', path: '/reviews/best-water-test-kits', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Best Aquarium Water Test Kits 2025', description: 'API Master Test Kit, Salifert, and digital meters ranked for aquarium water testing.', url: 'https://fish.com/reviews/best-water-test-kits', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const apiSchema = buildProductSchema({ name: 'API Freshwater Master Test Kit', description: '800 tests for pH, ammonia, nitrite, nitrate — the standard hobbyist kit.', url: 'https://apifishcare.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const allSchemas = combineSchemas(schema, apiSchema)
const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'API Freshwater Master Kit', subtitle: '800 tests · Ammonia+nitrite+nitrate+pH · Best value', href: '#api' },
  { label: 'Best Reef', emoji: '🪸', name: 'Salifert Individual Tests', subtitle: 'Reef-grade accuracy · Alk, Ca, Mg, nitrate', href: '#salifert' },
  { label: 'Best Digital', emoji: '📱', name: 'Apogee or Bluelab Meters', subtitle: 'pH/TDS digital meters — no reagents', href: '#digital' },
]
export default function BestWaterTestKitsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">🧪 Buyer's Guide</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Aquarium Water Test Kits 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">You cannot manage water quality you do not measure. Ammonia and nitrite are invisible and lethal. Test at least weekly, always after adding new fish, and during any disease or behavior change.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Water Test Kits</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <ScoreMethodology />
            <ReviewCard id="api" badge="Best Overall" badgeEmoji="🏆" name="API Freshwater Master Test Kit" subtitle="800 tests · pH, ammonia, nitrite, nitrate · Most used kit in the hobby" score={9.3} winner
              description={<p>The API Freshwater Master Test Kit is the standard hobbyist water testing solution — used by more aquarists than any other kit. It covers the four parameters that matter most for fish health: pH, ammonia (NH3/NH4+), nitrite (NO2-), and nitrate (NO3-). 800 total tests provides approximately 2+ years of weekly testing for a single tank. Liquid reagent tests are significantly more accurate than dip-strip tests — do not use dip strips for critical parameters like ammonia. Color comparison can be challenging in some lighting conditions, but the ammonia, nitrite, and nitrate tests are reliable and consistent. Essential for every freshwater hobbyist.</p>}
              specs={[{ label: 'Tests', value: '800 total', highlight: 'good' }, { label: 'Parameters', value: 'pH, ammonia, nitrite, nitrate', highlight: 'good' }, { label: 'Format', value: 'Liquid reagent — more accurate than strips', highlight: 'good' }, { label: 'Tank type', value: 'Freshwater' }]}
              pros={['800 tests — 2+ years supply', 'Most accurate affordable kit', 'Covers all 4 critical parameters', 'Industry standard — widely referenced']}
              cons={['Color matching can be tricky in certain lighting', 'Separate saltwater kit needed for marine tanks', 'No hardness (GH/KH) test included']}
              price="$28–35"
              ctaText="Shop API Master Test Kit →"
              ctaHref="https://www.amazon.com/s?k=api+freshwater+master+test+kit"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="api-master-test-kit"
            />
            <div id="salifert" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-6">
              <h2 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Salifert Individual Tests — For Reef Tanks</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Reef aquariums require testing beyond the freshwater basics: alkalinity (dKH), calcium (Ca), magnesium (Mg), phosphate, and precision nitrate. Salifert is the gold standard for reef-grade accuracy in these parameters — used as the reference by aquaculture professionals and serious reefers. More expensive per test than API but substantially more accurate for reef-critical parameters. Buy individual Salifert tests for each parameter rather than combo kits — individual tests maintain calibration better.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">For reef tanks, also consider ICP (Inductively Coupled Plasma) water testing — laboratory analysis services (ATI, Triton) test for 30+ elements for $30–50, providing a comprehensive baseline twice yearly alongside regular at-home testing.</p>
            </div>
            <div id="digital" className="bg-brand-surface border border-brand-border rounded-xl p-6">
              <h2 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Digital Meters — When to Use Them</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Digital pH meters (Bluelab, Milwaukee) are more precise than reagent tests for pH-critical applications — planted tanks with CO2 injection, discus tanks, and shrimp tanks where precise pH control matters. Require calibration with buffer solutions every 1–2 weeks. Not a replacement for ammonia/nitrite testing — no accurate digital meter exists for these parameters at hobbyist price points.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">TDS (total dissolved solids) meters are useful for RO/DI water purity verification and monitoring overall mineral content. Not specific enough to replace individual parameter testing but useful for water change consistency monitoring. Inexpensive ($10–20) and valuable for shrimp and discus keepers.</p>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">What to Test</div>
              {[['Freshwater community', 'API Master Kit (pH, NH3, NO2, NO3)'], ['Planted with CO2', 'API + digital pH meter'], ['Shrimp tank', 'API + GH/KH kit + TDS meter'], ['Saltwater/FOWLR', 'API saltwater kit + refractometer'], ['Reef tank', 'Salifert Alk/Ca/Mg + API nitrate']].map(([t, r]) => (
                <div key={t} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Water Chemistry', href: '/water' }]} />
            <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="review-test-kits" />
          </aside>
        </div>
      </div>
    </>
  )
}
