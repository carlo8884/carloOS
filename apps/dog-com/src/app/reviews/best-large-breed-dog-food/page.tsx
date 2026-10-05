import type { Metadata } from 'next'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Large Breed Dog Food 2026 — WSAVA Picks | Dog.com', description: 'Best dog foods for large breeds. Royal Canin Large Adult, Purina Pro Plan Large Breed.', path: '/reviews/best-large-breed-dog-food', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Large Breed Dog Food 2026', description: 'WSAVA-compliant large breed dog foods ranked for joint health and appropriate growth.', url: 'https://dog.com/reviews/best-large-breed-dog-food', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const rcSchema = buildProductSchema({ name: 'Royal Canin Large Adult', description: 'Glucosamine and chondroitin joint support formula for large breed adult dogs.', url: 'https://royalcanin.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const ppSchema = buildProductSchema({ name: 'Purina Pro Plan Large Breed Adult', description: 'Real chicken and rice with EPA and glucosamine for large breed joint health.', url: 'https://purina.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, rcSchema, ppSchema)
const PICKS = [
  { label: 'Best Overall', name: 'Royal Canin Large Adult', subtitle: 'Glucosamine + chondroitin · Joint focus · WSAVA', href: '#royal-canin' },
  { label: 'Best High-Protein', name: 'Purina Pro Plan Large Breed', subtitle: 'EPA + glucosamine · Live probiotics · Widely recommended', href: '#purina' },
  { label: "Best Hill's", name: "Hill's Science Diet Large Breed", subtitle: 'Glucosamine · Natural ingredients · Antioxidant blend', href: '#hills' },
]
const itemList = buildItemListSchema({
  name: "Best Large Breed Dog Food 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: `https://dog.com/reviews/best-large-breed-dog-food${pick.href}` })),
})
export default function BestLargeBreedFoodPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Large Breed Dog Food 2026', url: 'https://dog.com/reviews/best-large-breed-dog-food' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🥩 Evidence-Based · Updated 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Large Breed Dog Food 2026</h1>
        <PriceAsOf date="2026-10-04" tone="dark" />
        <PrimaryHop href='/go/chewy-brand/royal+canin+large+adult?s=reviews-best-large-breed-dog-food' label='Check price of Royal Canin Large Adult on Chewy' />
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Large-breed adults have specific nutritional needs — controlled calorie density during growth to prevent orthopedic issues, joint support ingredients in adulthood, and appropriate protein-to-fat ratios for their slower metabolism compared to small breeds. Royal Canin Large Adult on this page is for dogs 55–100 lb, and Giant Adult is for dogs over 100 lb.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Large Breed Dog Food 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14 min-w-0">
          <div className="min-w-0">
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Puppy vs Adult — Feed the Right Formula</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Large breed puppies need large breed puppy food — not all-life-stages or small breed formulas. Large breed puppy formulas have controlled calcium and phosphorus and lower caloric density to slow growth rate, preventing the rapid growth that contributes to hip dysplasia and other developmental orthopedic diseases. Switch to an adult large-breed formula when the puppy food's feeding guide says growth is finished.</p>
            </div>
            <JourneyNext
              siteId="dog-com"
              nextHref="/nutrition/puppy-nutrition"
              nextLabel="Read the large-breed puppy formula rule before you buy adult"
              nextBlurb="The callout is the bag rule — use a large-breed puppy formula until that bag's feeding guide says to switch, then the adult bag whose card lists 55–100 lb. Puppy-nutrition is the next step: schedule, amount, and when to switch. The hop below is the same Royal Canin Large Adult search already on this page."
              resourceHref="/go/chewy-brand/royal+canin+large+adult?s=reviews-best-large-breed-dog-food"
              resourceLabel="Browse Royal Canin Large Adult dog food →"
            />
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard id="royal-canin" badge="Best Overall" name="Royal Canin Large Adult" subtitle="Glucosamine + chondroitin · Tailored kibble texture · WSAVA top tier" score={9.3} winner
              description={<p>Royal Canin Large Adult is formulated with joint health as a central priority — glucosamine (200mg/kg) and chondroitin sulfate (160mg/kg) are included at levels shown to support cartilage health in dogs predisposed to joint disease. The kibble texture is tailored for large breed biting patterns — encouraging thorough chewing rather than bolting food, which reduces bloat risk in deep-chested large breeds. EPA from fish oil provides anti-inflammatory support for joints. Royal Canin is one of three <a href="https://wsava.org/committees/global-nutrition-committee/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA</a>-recommended manufacturers with full veterinary nutritionist oversight. Available in multiple size variations — Large Adult (for dogs 55–100 lbs) and Giant Adult (for dogs over 100 lbs).</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Glucosamine', value: '200mg/kg + chondroitin', highlight: 'good' }, { label: 'EPA', value: 'Fish oil — anti-inflammatory' }, { label: 'Kibble', value: 'Tailored for large jaw mechanics' }]}
              pros={['WSAVA top-tier compliance', 'Meaningful glucosamine and chondroitin levels', 'EPA from fish oil', 'Kibble size tailored for large breeds']}
              cons={['More expensive', 'Chicken-based — not for chicken-sensitive dogs']}
              price="$60–80 / 30 lb"
              ctaText="Shop Royal Canin Large Adult →"
              ctaHref="/go/chewy-brand/royal+canin+large+adult?s=reviews-best-large-breed-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="royal+canin+large+adult"
            />
            <ReviewCard id="purina" badge="Best High-Protein" name="Purina Pro Plan Large Breed Adult" subtitle="Chicken & rice · EPA + glucosamine · Live probiotics" score={9.2}
              description={<p>Purina Pro Plan Large Breed Adult provides 26% protein (real chicken as first ingredient) and incorporates EPA from fish oil plus glucosamine for joint support. The inclusion of live probiotics (Bacillus coagulans) for digestive health is a meaningful differentiator at this price point. Purina's research investment — including BREATHE trials on respiratory health, joint studies, and cognitive research — backs a formula that balances joint support, digestive health, and overall nutrition for large breed adults. A commonly recommended formula among general practice veterinarians for large breed adults. Also available in salmon and trout variety for dogs with chicken sensitivity.</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Protein', value: '26% — real chicken first ingredient' }, { label: 'Probiotic', value: 'Live B. coagulans — clinically studied', highlight: 'good' }, { label: 'Joint support', value: 'EPA + glucosamine' }]}
              pros={['WSAVA compliant', 'Real chicken first ingredient', 'Live probiotics', 'EPA and glucosamine joint support', 'Multiple protein options']}
              cons={['Glucosamine levels not as high as Royal Canin']}
              price="$50–70 / 34 lb"
              ctaText="Shop Purina Pro Plan Large Breed →"
              ctaHref="/go/chewy-brand/purina+pro+plan+large+breed+adult?s=reviews-best-large-breed-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="purina+pro+plan+large+breed+adult"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which food</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Two foods have review cards. Prescription and giant-breed names in the sidebar do not have cards or printed prices here. Scores are this page&apos;s editorial scores, not customer star ratings.
              </p>
              <div className="overflow-x-auto max-w-full min-w-0 mb-8">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
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
                      <td className="p-3 text-brand-text-mid">A large-breed adult food, about 55–100 lb</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#royal-canin" className="text-brand-primary">Royal Canin Large Adult</a><TableShopLink href={"/go/chewy-brand/royal+canin+large+adult?s=reviews-best-large-breed-dog-food"} product={"Royal Canin Large Adult"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. Score 9.3. $60–80 / 30 lb</td>
                      <td className="p-3 text-brand-text-mid">Chicken sensitivity. The card says it is chicken-based, and it is the more expensive of the two cards</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Higher protein, with some joint support, at a lower bag price</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#purina" className="text-brand-primary">Purina Pro Plan Large Breed Adult</a><TableShopLink href={"/go/chewy-brand/purina+pro+plan+large+breed+adult?s=reviews-best-large-breed-dog-food"} product={"Purina Pro Plan Large Breed Adult"} /></td>
                      <td className="p-3 text-brand-text-mid">Best High-Protein. Score 9.2. $50–70 / 34 lb</td>
                      <td className="p-3 text-brand-text-mid">You want the higher glucosamine level. The card says glucosamine is not as high as Royal Canin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-05" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which large-breed food fits</h2>
              <FAQAccordion items={[
                {
                  question: 'Which large-breed food does this page pick overall?',
                  answer: 'Royal Canin Large Adult, scored 9.3 and marked Best Overall. The page says it is for dogs 55–100 lb. The printed price is $60–80 for 30 lb. The card says it is chicken-based.',
                },
                {
                  question: 'Which large-breed food does this page pick for higher protein?',
                  answer: 'Purina Pro Plan Large Breed Adult, scored 9.2. The printed price is $50–70 for 34 lb. The card says its glucosamine level is not as high as Royal Canin.',
                },
              ]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Large Breed Need</div>
              {[['Joint disease present', 'Royal Canin Joint Care or Hill\'s j/d Rx'], ['Overweight large breed', 'Royal Canin Satiety or Hill\'s Metabolic'], ['Hip dysplasia history', 'Royal Canin Large Adult + fish oil supplement'], ['Grain-free concern', 'Avoid — WSAVA and FDA concern for DCM'], ['Senior 7+', 'Switch to large breed senior formula'], ['Giant breed (100+ lbs)', 'Royal Canin Giant Adult']].map(([t, r]) => (
                <div key={t} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'Dog Arthritis', href: '/health/dog-arthritis' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }, { label: 'Labrador Retriever', href: '/breeds/labrador-retriever' }]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-large-breed-dog-food" />
    </>
  )
}
