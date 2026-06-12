import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildItemListSchema, buildFAQSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Best Aquarium Water Test Kits 2026 — API Master Kit | Fish.com', description: 'Best aquarium water test kits ranked. API Master Test Kit for accuracy and value. Salifert individual tests for reef tanks. Digital meters for pH and TDS.', path: '/reviews/best-water-test-kits', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Best Aquarium Water Test Kits 2026', description: 'API Master Test Kit, Salifert, and digital meters ranked for aquarium water testing.', url: 'https://fish.com/reviews/best-water-test-kits', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const apiSchema = buildProductSchema({ name: 'API Freshwater Master Test Kit', description: '800 tests for pH, ammonia, nitrite, nitrate — the standard hobbyist kit.', url: 'https://apifishcare.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const allSchemas = combineSchemas(schema, apiSchema)
const PICKS = [
  { label: 'Best Overall', name: 'API Freshwater Master Kit', subtitle: '800 tests · Ammonia+nitrite+nitrate+pH · Best value', href: '#api' },
  { label: 'Best Reef', name: 'Salifert Individual Tests', subtitle: 'Reef-grade accuracy · Alk, Ca, Mg, nitrate', href: '#salifert' },
  { label: 'Best Digital', name: 'Apogee or Bluelab Meters', subtitle: 'pH/TDS digital meters — no reagents', href: '#digital' },
]
// GEO: ItemList of the ranked picks. Names + URLs come only from this page's
// PICKS. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Best Aquarium Water Test Kits 2026',
  items: PICKS.map((p) => ({ name: p.name, url: `https://fish.com/reviews/best-water-test-kits${p.href}` })),
})
// FAQ content derived from this page's testing guidance only.
const FAQS = [
  { question: 'Which water parameters should I test in my aquarium?', answer: 'For freshwater tanks, the four that matter most for fish health are pH, ammonia, nitrite, and nitrate — all covered by the API Freshwater Master Test Kit. Shrimp keepers should add GH/KH and a TDS meter. Reef tanks require testing beyond the freshwater basics: alkalinity (dKH), calcium, magnesium, phosphate, and precision nitrate, where Salifert individual tests are the reef-grade standard.' },
  { question: 'How often should I test my aquarium water?', answer: 'Test at least weekly, always after adding new fish, and during any disease outbreak or behavior change. Ammonia and nitrite are invisible and lethal — you cannot manage water quality you do not measure. Reef keepers can supplement at-home testing with laboratory ICP analysis (ATI, Triton) once or twice a year for a 30+ element baseline.' },
  { question: 'Are test strips accurate enough?', answer: 'Liquid reagent tests are significantly more accurate than dip-strip tests — do not rely on strips for critical parameters like ammonia. Color matching on liquid kits can be tricky in some lighting, but the API kit’s ammonia, nitrite, and nitrate tests are reliable and consistent, and 800 tests works out to roughly two years of weekly testing on a single tank.' },
  { question: 'Do I need a digital meter instead of a reagent kit?', answer: 'Only for specific cases. Digital pH meters (Bluelab, Milwaukee) are more precise than reagent tests for pH-critical setups — CO2-injected planted tanks, discus, and shrimp — but require calibration with buffer solutions every 1–2 weeks. No accurate hobbyist-priced digital meter exists for ammonia or nitrite, so a reagent kit remains essential. Inexpensive TDS meters are useful for RO/DI verification and water change consistency, not as a replacement for parameter testing.' },
]
const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answer })) })
export default function BestWaterTestKitsPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, faqSchema, buildBreadcrumbSchema({ items: [{ name: 'Home', url: 'https://fish.com/' }, { name: 'Reviews', url: 'https://fish.com/reviews' }, { name: 'Best Aquarium Water Test Kits 2026', url: 'https://fish.com/reviews/best-water-test-kits' }] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Buyer's Guide</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Aquarium Water Test Kits 2026</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">You cannot manage water quality you do not measure. Ammonia and nitrite are invisible and lethal. Test at least weekly, always after adding new fish, and during any disease or behavior change.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Water Test Kits</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bottom Line</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">For most freshwater keepers the <strong>API Freshwater Master Kit</strong> is our overall pick — liquid reagents (more accurate than strips), around 800 tests, covering pH, ammonia, nitrite, and nitrate. Reef keepers should add <strong>Salifert</strong> individual tests for reef-grade alkalinity, calcium, and magnesium accuracy. For reagent-free convenience, <strong>Apogee or Bluelab</strong> digital pH/TDS meters.</p>
            </div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="fish-com" />
            <ReviewCard id="api" badge="Best Overall" name="API Freshwater Master Test Kit" subtitle="800 tests · pH, ammonia, nitrite, nitrate · Most used kit in the hobby" score={9.3} winner
              description={<p>The API Freshwater Master Test Kit is the standard hobbyist water testing solution — used by more aquarists than any other kit. It covers the four parameters that matter most for fish health: pH, ammonia (NH3/NH4+), nitrite (NO2-), and nitrate (NO3-). 800 total tests provides approximately 2+ years of weekly testing for a single tank. Liquid reagent tests are significantly more accurate than dip-strip tests — do not use dip strips for critical parameters like ammonia. Color comparison can be challenging in some lighting conditions, but the ammonia, nitrite, and nitrate tests are reliable and consistent. Essential for every freshwater hobbyist.</p>}
              specs={[{ label: 'Tests', value: '800 total', highlight: 'good' }, { label: 'Parameters', value: 'pH, ammonia, nitrite, nitrate', highlight: 'good' }, { label: 'Format', value: 'Liquid reagent — more accurate than strips', highlight: 'good' }, { label: 'Tank type', value: 'Freshwater' }]}
              pros={['800 tests — 2+ years supply', 'Most accurate affordable kit', 'Covers all 4 critical parameters', 'Industry standard — widely referenced']}
              cons={['Color matching can be tricky in certain lighting', 'Separate saltwater kit needed for marine tanks', 'No hardness (GH/KH) test included']}
              price="$28–35"
              ctaText="Shop API Master Test Kit →"
              ctaHref="/go/amazon-brand/api+freshwater+master+test+kit?s=reviews-best-water-test-kits"
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

            <h2 className="font-display font-bold text-brand-dark text-xl mt-10 mb-4">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
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
            <RelatedLinks title="Related Guides" links={[{ label: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Water Chemistry', href: '/water-parameters' }]} />
            <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="review-test-kits" />
          </aside>
        </div>
      </div>
    </>
  )
}
