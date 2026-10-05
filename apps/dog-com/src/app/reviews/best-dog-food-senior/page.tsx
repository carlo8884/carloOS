import type { Metadata } from 'next'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Senior Dog Food 2026 — Top Formulas Compared | Dog.com', description: 'Best dog foods for senior dogs 7+. Purina Pro Plan Bright Mind, Hill\'s Science Diet Senior.', path: '/reviews/best-dog-food-senior', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Senior Dog Food 2026', description: 'Senior dog foods ranked by WSAVA compliance and veterinary recommendation.', url: 'https://dog.com/reviews/best-dog-food-senior', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const ppSchema = buildProductSchema({ name: 'Purina Pro Plan Bright Mind Adult 7+', description: 'Enhanced botanical oils formula with clinical trial data for cognitive support in aging dogs.', url: 'https://purina.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const hillsSchema = buildProductSchema({ name: "Hill's Science Diet Adult 7+ Senior", description: 'veterinarian-formulated senior formula with antioxidant blend and easy-to-digest proteins.', url: 'https://hillspet.com', imageUrl: '', ratingValue: 9.1, reviewCount: 1 })
const allSchemas = combineSchemas(schema, ppSchema, hillsSchema)
const PICKS = [
  { label: 'Best Overall', name: 'Purina Pro Plan Bright Mind 7+', subtitle: 'Clinical trial data · Cognitive support · WSAVA', href: '#bright-mind' },
  { label: "Best Hill's", name: "Hill's Science Diet Senior 7+", subtitle: 'Antioxidant blend · veterinarian-formulated · Widely available', href: '#hills' },
  { label: 'Best Royal Canin', name: 'Royal Canin Aging Care', subtitle: 'Research-backed · Small/medium/large versions', href: '#royal-canin' },
]
const itemList = buildItemListSchema({
  name: "Best Senior Dog Food 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: `https://dog.com/reviews/best-dog-food-senior${pick.href}` })),
})
export default function BestSeniorDogFoodPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Senior Dog Food 2026', url: 'https://dog.com/reviews/best-dog-food-senior' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Evidence-Based · Updated 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Senior Dog Food 2026</h1>
        <PriceAsOf date="2026-10-04" tone="dark" />
        <PrimaryHop href='/go/chewy-brand/purina+pro+plan+bright+mind+senior?s=reviews-best-dog-food-senior' label='Check price of Purina Pro Plan Bright Mind Adult 7+ on Chewy' />
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Dogs are considered senior at 7+ years for most breeds (5-6 for giant breeds). Their nutritional needs shift — but "senior dog food" as a category is largely unregulated. <a href="https://wsava.org/committees/global-nutrition-committee/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA</a>-compliant formulas from research-backed manufacturers are the appropriate filter.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Senior Dog Food 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Senior Food ≠ Low Protein</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Older advice recommended reducing protein in senior dogs. Current consensus is the opposite: aging dogs often need more protein per kg body weight to maintain muscle mass (sarcopenia prevention). Protein restriction is only appropriate with documented kidney disease. Choose senior foods with protein levels at or above adult maintenance levels.</p>
            </div>
            <JourneyNext
              siteId="dog-com"
              nextHref="/nutrition/senior-dog-nutrition"
              nextLabel="Read the protein rule before you pick a senior bag"
              nextBlurb="The callout is the protein rule — aging dogs need more protein per kilogram unless kidney disease is documented. Senior-nutrition is the next step: when to switch, and what the senior label actually changes. The hop below is the same Purina Bright Mind search already on this page."
              resourceHref="/go/chewy-brand/purina+pro+plan+bright+mind+senior?s=reviews-best-dog-food-senior"
              resourceLabel="Browse Purina Pro Plan Bright Mind senior food →"
            />
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard id="bright-mind" badge="Best Overall" name="Purina Pro Plan Bright Mind Adult 7+" subtitle="Enhanced botanical oils · Cognitive clinical trial · WSAVA top tier" score={9.4} winner
              description={<p>Purina Pro Plan Bright Mind is among the few senior dog foods with published clinical trial data specifically addressing cognitive benefits in aging dogs. The formula contains enhanced botanical oils (including medium-chain triglycerides from coconut oil) intended to provide alternative fuel for aging neurons. In a blinded clinical trial, dogs fed Bright Mind reportedly showed improved performance on cognitive assessments compared to control dogs after 30 days. For owners seeing cognitive changes in aging dogs — disorientation, altered sleep patterns, loss of housetraining — this is among the more evidence-supported dietary options. WSAVA-compliant with full veterinary nutritionist oversight and feeding trial data.</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Clinical evidence', value: 'Cognitive trial — published data', highlight: 'good' }, { label: 'Key ingredient', value: 'Enhanced botanical oils / MCT' }, { label: 'Protein', value: 'Adequate — not reduced' }]}
              pros={['Among the few senior foods with published cognitive trial data', 'Top WSAVA compliance', 'High protein — supports muscle maintenance', 'Available in large breed version']}
              cons={['Not appropriate as sole management for significant CDS — consult vet', 'Chicken-based — not for chicken-allergic dogs']}
              price="$55–75 / 30 lb"
              ctaText="Shop Purina Pro Plan Bright Mind →"
              ctaHref="/go/chewy-brand/purina+pro+plan+bright+mind+senior?s=reviews-best-dog-food-senior"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="purina+pro+plan+bright+mind+senior"
            />
            <ReviewCard id="hills" badge="Best Hill's" name="Hill's Science Diet Adult 7+ Senior" subtitle="Antioxidant complex · Omega-6 for skin/coat · Easy digestion" score={9.1}
              description={<p>Hill's Science Diet 7+ is a solid WSAVA-compliant senior formula with a focus on antioxidant support for immune function in aging dogs. The antioxidant complex (vitamin E, vitamin C, beta-carotene) addresses the increased oxidative stress that accompanies aging. Easy-to-digest proteins and controlled caloric density help maintain weight in less-active seniors. Available in chicken and ocean fish formulations. The 7+ formula is distinct from the 11+ (for very senior dogs) and from prescription senior formulas like k/d (kidney) — choose based on the dog's health status and veterinary guidance.</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Antioxidants', value: 'Vit E, C, beta-carotene complex', highlight: 'good' }, { label: 'Digestibility', value: 'Easy-digest proteins' }, { label: 'Available', value: 'Widely — every pet store' }]}
              pros={['WSAVA compliant', 'Antioxidant blend for immune support', 'Easy digestion', 'Widely available', 'Multiple proteins available']}
              cons={['Less cognitive-specific than Bright Mind', 'No published cognitive clinical trial']}
              price="$55–70 / 30 lb"
              ctaText="Shop Hill's Science Diet Senior →"
              ctaHref="/go/chewy-brand/hills+science+diet+senior+7?s=reviews-best-dog-food-senior"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="hills+science+diet+senior+7"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which food</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Only the two foods with review cards are in this table. Royal Canin Aging Care is named in the picks strip and does not have a card or a printed price here. Scores are this page&apos;s editorial scores, not customer star ratings.
              </p>
              <div className="overflow-x-auto max-w-full mb-8">
                <table className="w-full text-xs border-collapse min-w-[36rem]">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If you need</th>
                      <th className="p-3 font-bold text-brand-dark">Buy</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Skip it when</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Cognitive changes in a dog 7 or older</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#bright-mind" className="text-brand-primary">Purina Pro Plan Bright Mind Adult 7+</a><TableShopLink href={"/go/chewy-brand/purina+pro+plan+bright+mind+senior?s=reviews-best-dog-food-senior"} product={"Purina Pro Plan Bright Mind Adult 7+"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. Score 9.4. Published cognitive trial. $55–75 / 30 lb</td>
                      <td className="p-3 text-brand-text-mid">Chicken allergy, or significant cognitive dysfunction that needs a vet. The card says chicken-based, and it is not sole management for significant CDS</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Antioxidant support and easy digestion for a less-active senior</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#hills" className="text-brand-primary">Hill&apos;s Science Diet Adult 7+</a><TableShopLink href={"/go/chewy-brand/hills+science+diet+senior+7?s=reviews-best-dog-food-senior"} product={"Hill&apos;s Science Diet Adult 7+"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Hill&apos;s. Score 9.1. Vitamin E, C, and beta-carotene. $55–70 / 30 lb</td>
                      <td className="p-3 text-brand-text-mid">You want the cognitive trial. The card says this formula has no published cognitive clinical trial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-05" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which senior food fits which dog</h2>
              <FAQAccordion items={[
                {
                  question: 'Which senior food does this page pick for cognitive changes?',
                  answer: 'Purina Pro Plan Bright Mind Adult 7+, scored 9.4 and marked Best Overall. The card cites a published cognitive trial and a printed price of $55–75 for 30 lb. It is chicken-based, and the card says it is not sole management for significant cognitive dysfunction.',
                },
                {
                  question: 'Which senior food does this page pick for antioxidant support?',
                  answer: "Hill's Science Diet Adult 7+, scored 9.1. The card lists vitamin E, vitamin C, and beta-carotene, easy-digest proteins, and a printed price of $55–70 for 30 lb. It does not have a published cognitive trial.",
                },
                {
                  question: 'Does this page print a price for Royal Canin Aging Care?',
                  answer: 'No. The picks strip names Royal Canin Aging Care. Only Bright Mind and Hill\'s Science Diet Adult 7+ have review cards and printed prices.',
                },
              ]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">When to Switch</div>
              <p className="text-xs text-brand-text-mid leading-relaxed mb-2">No fixed rule — switch based on the individual dog's needs, not age alone.</p>
              {[['Dog gaining weight', 'Switch to calorie-controlled senior or WM formula'], ['Dog losing muscle', 'Higher protein senior, consider joint supp'], ['Cognitive changes', 'Pro Plan Bright Mind specifically'], ['Kidney disease diagnosed', 'Prescription renal diet — vet required'], ['Joint disease', "Hill's j/d or Royal Canin joint support"]].map(([t, r]) => (
                <div key={t} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'Senior Dog Nutrition', href: '/nutrition/senior-dog-nutrition' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-dog-food-senior" />
    </>
  )
}
