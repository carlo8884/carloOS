import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, EmailCapture, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Puppy Food 2026 — Large Breed | Dog.com',
  description: 'WSAVA-compliant puppy foods ranked for 2026. Royal Canin, Purina Pro Plan, Hill\'s Science Diet compared for large breed puppies, small breeds, and all sizes.',
  path: '/reviews/best-dog-food-for-puppies',
  category: 'Nutrition Reviews',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Best Puppy Food 2026',
  description: 'WSAVA-compliant puppy formulas ranked — large breed, small breed, all sizes.',
  url: 'https://dog.com/reviews/best-dog-food-for-puppies',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-10-07T00:00:00Z',
})

const rcSchema = buildProductSchema({ name: 'Royal Canin Large Breed Puppy', description: 'WSAVA-compliant large breed puppy formula with controlled calcium for healthy bone development.', url: 'https://dog.com/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies', imageUrl: '' })
const ppSchema = buildProductSchema({ name: 'Purina Pro Plan Puppy Large Breed', description: 'AAFCO feeding trial-tested large breed puppy formula from a company with 400+ published studies.', url: 'https://dog.com/go/chewy-brand/purina+pro+plan+puppy+large+breed?s=reviews-best-dog-food-for-puppies', imageUrl: '' })
const hillsSchema = buildProductSchema({ name: 'Hill\'s Science Diet Puppy Small & Mini', description: 'veterinarian-formulated small breed puppy food, formerly labeled Puppy Small Paws, with a controlled calcium-to-phosphorus ratio.', url: 'https://dog.com/go/chewy-brand/hills+science+diet+puppy+small+paws?s=reviews-best-dog-food-for-puppies', imageUrl: '' })
const allSchemas = combineSchemas(schema, rcSchema, ppSchema, hillsSchema)

const PICKS = [
  { label: 'Best Large Breed', name: 'Royal Canin Large Breed Puppy', subtitle: 'Most researched · Controlled calcium · Breed-specific', href: '#royal-canin', pickHop: '/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies' },
  { label: 'Best Overall Value', name: 'Purina Pro Plan Puppy Large Breed', subtitle: 'AAFCO feeding trials · 400+ studies · Widely available', href: '#pro-plan' },
  { label: 'Best Small Breed', name: 'Hill\'s Science Diet Puppy Small & Mini', subtitle: 'Formerly Puppy Small Paws · veterinarian-formulated', href: '#hills-small' },
  { label: 'Best Budget', name: 'Iams Puppy Large Breed', subtitle: 'Formerly ProActive Health Smart Puppy · $30–50 per 30 lb bag', href: '#iams' },
]

const itemList = buildItemListSchema({
  name: "Best Puppy Food 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: ({ "Royal Canin Large Breed Puppy": "https://dog.com/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies", "Purina Pro Plan Puppy Large Breed": "https://dog.com/go/chewy-brand/purina+pro+plan+puppy+large+breed?s=reviews-best-dog-food-for-puppies", "Hill's Science Diet Puppy Small & Mini": "https://dog.com/go/chewy-brand/hills+science+diet+puppy+small+paws?s=reviews-best-dog-food-for-puppies", "Iams Puppy Large Breed": "https://dog.com/go/chewy-brand/iams+proactive+health+puppy+large+breed?s=reviews-best-dog-food-for-puppies" }[pick.name] ?? `https://dog.com/reviews/best-dog-food-for-puppies${pick.href}`) })),
})
export default function BestPuppyFoodPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Puppy Food 2026', url: 'https://dog.com/reviews/best-dog-food-for-puppies' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Evidence-Based · Updated 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Best Puppy Food 2026 — WSAVA-Compliant Formulas Ranked
        </h1>
        <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Royal Canin Large Breed Puppy is the top puppy food because large-breed growth needs a formula built for steady gain.</p>
        <PriceAsOf date="2026-10-07" tone="dark" />
        <div data-fold="offer">
          <PrimaryHop href='/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies' label='Check price of Royal Canin Large Breed Puppy on Amazon' />
        <HopDisclosure tone="on-dark" siteId="dog-com" href="/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies" />
        </div>
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-dog-food-for-puppies"
          checklist={[
            "Royal Canin Large Breed Puppy, marked Best Large Breed.",
            "The card says some dogs do not like the kibble shape, and the dog moves to the Royal Canin adult food at the right age.",
            "The card says it is not for large breeds.",
            "Iams Puppy Large Breed, formerly ProActive Health Smart Puppy, marked Best Budget.",
            "The card says some lines meet AAFCO by formulation rather than a feeding trial.",
          ]}
        />

        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          The most important rule in puppy nutrition: large breeds (expected adult weight 50+ lbs) must eat a large breed puppy formula. We ranked by <a href="https://wsava.org/committees/global-nutrition-committee/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA</a> compliance, <a href="https://aafco.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAFCO</a> feeding trials, and whether the manufacturer employs board-certified veterinary nutritionists.
        </p>
      </div>

      <QuickPicks items={PICKS} />

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Puppy Food 2026</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14 min-w-0">
          <div className="min-w-0">
            <div className="bg-brand-danger/5 border-l-4 border-brand-danger rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Large Breed Puppy Formula — Not Optional</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                Any puppy expected to weigh more than 50 lbs as an adult must eat a formula labeled <strong>&quot;large breed puppy&quot;</strong>. Large breed puppy formulas have controlled calcium-to-phosphorus ratios that allow appropriate skeletal development. Standard puppy formulas (higher calcium) cause large breed puppies to grow their skeletons faster than their joint structures can accommodate — directly contributing to hip dysplasia, OCD, and elbow dysplasia. This is not a preference. It is clinically meaningful.
              </p>
            </div>
            <JourneyNext
              siteId="dog-com"
              nextHref="/nutrition/puppy-nutrition"
              nextLabel="Read the large-breed puppy formula rule in full"
              nextBlurb="The callout is the bag rule — expected adult weight over 50 lb needs a large-breed puppy formula, not extra calcium. The puppy-nutrition guide is the next step: schedule, amount, and when to switch. The button below opens the same Royal Canin large-breed puppy search on Amazon."
              resourceHref="/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies"
              resourceLabel="Browse Royal Canin large-breed puppy food on Amazon →"
            />

            <HopDisclosure siteId="dog-com" href={["/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies", "/go/chewy-brand/purina+pro+plan+puppy+large+breed?s=reviews-best-dog-food-for-puppies", "/go/chewy-brand/hills+science+diet+puppy+small+paws?s=reviews-best-dog-food-for-puppies", "/go/chewy-brand/iams+proactive+health+puppy+large+breed?s=reviews-best-dog-food-for-puppies"]} />
            <ReviewCard
              id="royal-canin"
              badge="Best Large Breed"
              name="Royal Canin Large Breed Puppy"
              subtitle="Most researched puppy formula · Breed-specific lines · 600+ scientists"
              winner
              description={<div>
                <p>Royal Canin is the most research-intensive pet food manufacturer — 600+ scientists including board-certified veterinary nutritionists, continuous feeding trial programs, and breed-specific formula lines developed from morphological and metabolic research on individual breeds. The current Royal Canin Large Puppy guaranteed analysis does not print a calcium percentage. Check the label. The formula page still lists EPA and DHA among the added nutrients.</p>
                <p>Royal Canin also makes breed-specific puppy formulas (German Shepherd Puppy, Golden Retriever Puppy, Labrador Retriever Puppy) for the most common large breeds — these incorporate breed-specific nutritional and digestive considerations. If your puppy is a recognized breed with a Royal Canin specific formula, that is the top recommendation.</p>
              </div>}
              specs={[
                { label: 'WSAVA Compliant', value: 'Yes — highest tier', highlight: 'good' },
                { label: 'AAFCO', value: 'Feeding trial substantiated', highlight: 'good' },
                { label: 'Calcium', value: 'Not on the current guaranteed analysis. Check the label.' },
                { label: 'Vet Nutritionists', value: '600+ scientists on staff', highlight: 'good' },
                { label: 'Breed-Specific Lines', value: 'Available for many breeds', highlight: 'good' },
              ]}
              pros={['Most research-intensive manufacturer', 'Breed-specific formulas available', 'Check the calcium line on the current label', 'AAFCO feeding trial substantiated', 'EPA/DHA for brain development']}
              cons={['Higher price than Purina or Hill\'s', 'Some dogs do not like the kibble shape', 'Must transition to RC adult at appropriate age']}
              price="$65–90 per 30 lb bag"
              priceNote="dated 2026-10-05."
              ctaText="Shop Royal Canin large-breed puppy food on Amazon →"
              ctaHref="/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="royal+canin+large+breed+puppy"
            />

            <ReviewCard
              id="pro-plan"
              badge="Best Overall Value"
              name="Purina Pro Plan Puppy Large Breed"
              subtitle="400+ published studies · AAFCO feeding trial · DHA from salmon oil"
              description={<p>Purina Pro Plan has more published peer-reviewed nutritional research than any other pet food brand — 400+ studies — and conducts AAFCO feeding trials across their product line. The Large Breed Puppy formula uses chicken as the primary protein, DHA from salmon oil for brain and vision development, and controlled calcium/phosphorus ratios appropriate for large breed puppy development. The kibble size is larger than standard puppy food, designed for large breed jaw size. Available at Chewy, Amazon, and most pet stores — easier to find than Royal Canin breed-specific lines. Comparable quality at a slightly lower price point.</p>}
              specs={[
                { label: 'WSAVA Compliant', value: 'Yes — top tier', highlight: 'good' },
                { label: 'AAFCO', value: 'Feeding trial substantiated', highlight: 'good' },
                { label: 'Research', value: '400+ published studies', highlight: 'good' },
                { label: 'Primary Protein', value: 'Chicken' },
                { label: 'DHA Source', value: 'Salmon oil', highlight: 'good' },
              ]}
              pros={['400+ published studies', 'AAFCO feeding trial substantiated', 'Widely available', 'Good price-to-quality ratio', 'DHA from salmon oil']}
              cons={['No breed-specific lines (unlike Royal Canin)', 'Chicken as primary protein — not suitable for chicken-sensitive dogs']}
              price="$55–75 per 34 lb bag"
              priceNote="dated 2026-10-05."
              ctaText="Shop Purina Pro Plan large-breed puppy food on Amazon →"
              ctaHref="/go/chewy-brand/purina+pro+plan+puppy+large+breed?s=reviews-best-dog-food-for-puppies"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="purina+pro+plan+puppy+large+breed"
            />

            <ReviewCard
              id="hills-small"
              badge="Best Small Breed Puppy"
              name="Hill's Science Diet Puppy Small & Mini"
              subtitle="Formerly labeled Puppy Small Paws · DHA for brain · Hill's nutritionist team"
              description={<p>Hill&apos;s Science Diet is the third member of the WSAVA top-tier alongside Royal Canin and Purina Pro Plan — full-time veterinary nutritionists, AAFCO feeding trials, and strong research investment. Hill&apos;s current label is Puppy Small &amp; Mini. The same formula was sold as Puppy Small Paws, and the product page address still uses that name. It is formulated for puppies expected to weigh under 25 lbs as adults, with a small kibble size and the energy density appropriate for higher small-breed metabolic rates. For large breed puppies, use Hill&apos;s Science Diet Puppy Large Breed instead — same manufacturer quality standards, different formula.</p>}
              specs={[
                { label: 'Best For', value: 'Small breeds (adult weight under 25 lbs)' },
                { label: 'WSAVA Compliant', value: 'Yes', highlight: 'good' },
                { label: 'AAFCO', value: 'Feeding trial substantiated', highlight: 'good' },
                { label: 'Kibble Size', value: 'Small — appropriate for small breeds', highlight: 'good' },
              ]}
              pros={['Top-tier WSAVA compliance', 'AAFCO feeding trial substantiated', 'Appropriate kibble size for small breeds', 'Full-time veterinary nutritionists']}
              cons={['Premium price', 'Not for large breeds — use Hill\'s Large Breed formula instead']}
              price="$55–80 per 28.5 lb bag"
              priceNote="dated 2026-10-05."
              ctaText="Shop Hill's Science Diet Puppy Small & Mini on Amazon →"
              ctaHref="/go/chewy-brand/hills+science+diet+puppy+small+paws?s=reviews-best-dog-food-for-puppies"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="hills+science+diet+puppy+small+paws"
            />

            <ReviewCard
              id="iams"
              badge="Best Budget"
              name="Iams Puppy Large Breed"
              subtitle="Formerly ProActive Health Smart Puppy · Budget price · AAFCO meeting standard"
              description={<p>Iams meets WSAVA compliance standards — they employ qualified nutritionists and conduct AAFCO testing — at a significantly lower price than Royal Canin, Purina Pro Plan, or Hill&apos;s. For large breed puppies, the current Iams name is Puppy Large Breed. The same food was sold as ProActive Health Smart Puppy, and retailer listings still use that title. The research investment is less extensive than the top three brands, but the nutritional quality is meaningfully better than non-WSAVA-compliant alternatives. A good option for budget-constrained owners who still want WSAVA-compliant nutrition.</p>}
              specs={[
                { label: 'WSAVA Compliant', value: 'Yes', highlight: 'good' },
                { label: 'AAFCO', value: 'Meets nutrient profiles' },
                { label: 'Price', value: 'Most affordable WSAVA option', highlight: 'good' },
                { label: 'Large Breed Line', value: 'Available', highlight: 'good' },
              ]}
              pros={['Most affordable WSAVA-compliant option', 'Large breed formula available', 'Widely available', 'Adequate nutritional quality']}
              cons={['Less research investment than top 3', 'AAFCO formulation (not feeding trial) on some lines', 'Lower-quality protein sourcing than premium options']}
              price="$30–50 per 30 lb bag"
              priceNote="dated 2026-10-05."
              ctaText="Shop Iams Puppy Large Breed on Amazon →"
              ctaHref="/go/chewy-brand/iams+proactive+health+puppy+large+breed?s=reviews-best-dog-food-for-puppies"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="iams+proactive+health+puppy+large+breed"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which food</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Four puppy foods have review cards. The giant-breed name in the sidebar does not have a card or a printed price here.
              </p>
              <div className="overflow-x-auto max-w-full min-w-0 mb-8">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If the adult weight</th>
                      <th className="p-3 font-bold text-brand-dark">Buy</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Skip it when</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Expected adult weight over 50 lb, and you want the large-breed puppy formula</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#royal-canin" className="text-brand-primary">Royal Canin Large Breed Puppy</a><TableShopLink href={"/go/amazon/B0BX1D5VS4?s=reviews-best-dog-food-for-puppies"} product={"Royal Canin Large Breed Puppy"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Large Breed. $65–90 per 30 lb bag</td>
                      <td className="p-3 text-brand-text-mid">The higher bag price is the limit. The card also says some dogs do not like the kibble shape, and you switch to the adult food at the right age</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A large-breed puppy food with a feeding trial, at a lower bag price</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#pro-plan" className="text-brand-primary">Purina Pro Plan Puppy Large Breed</a><TableShopLink href={"/go/chewy-brand/purina+pro+plan+puppy+large+breed?s=reviews-best-dog-food-for-puppies"} product={"Purina Pro Plan Puppy Large Breed"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall Value. $55–75 per 34 lb bag</td>
                      <td className="p-3 text-brand-text-mid">Chicken sensitivity. The card says chicken is the primary protein, and there is no breed-specific line</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Expected adult weight under 25 lb</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#hills-small" className="text-brand-primary">Hill&apos;s Science Diet Puppy Small &amp; Mini</a><TableShopLink href={"/go/chewy-brand/hills+science+diet+puppy+small+paws?s=reviews-best-dog-food-for-puppies"} product={"Hill&apos;s Science Diet Puppy Small &amp; Mini"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Small Breed Puppy. $55–80 per 28.5 lb bag</td>
                      <td className="p-3 text-brand-text-mid">A large-breed puppy. The card says to use the Hill&apos;s large-breed formula instead</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A lower bag price that is still a large-breed puppy formula</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#iams" className="text-brand-primary">Iams Puppy Large Breed</a><TableShopLink href={"/go/chewy-brand/iams+proactive+health+puppy+large+breed?s=reviews-best-dog-food-for-puppies"} product={"Iams Puppy Large Breed"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Budget. $30–50 per 30 lb bag</td>
                      <td className="p-3 text-brand-text-mid">You want a feeding trial. The card says some lines are AAFCO formulation, not a feeding trial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-09" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which puppy food fits</h2>
              <FAQAccordion items={[
                {
                  question: 'Which puppy food does this page pick for a large-breed puppy?',
                  answer: 'Royal Canin Large Breed Puppy, marked Best Large Breed. The printed price is $65–90 per 30 lb bag. The card says some dogs do not like the kibble shape, and the dog moves to the Royal Canin adult food at the right age.',
                },
                {
                  question: 'Which puppy food does this page pick for a small-breed puppy?',
                  answer: "Hill's Science Diet Puppy Small & Mini, formerly Puppy Small Paws. The printed price is $55–80 per 28.5 lb bag. The card says it is not for large breeds.",
                },
                {
                  question: 'Which puppy food does this page pick at the lowest printed price?',
                  answer: 'Iams Puppy Large Breed, formerly ProActive Health Smart Puppy, marked Best Budget. The printed price is $30–50 per 30 lb bag. The card says some lines meet AAFCO by formulation rather than a feeding trial.',
                },
              ]} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Adult Size</div>
              {[
                { size: 'Large breed (50+ lbs adult)', pick: 'Royal Canin Large Breed Puppy' },
                { size: 'Small breed (under 25 lbs adult)', pick: 'Hill\'s Science Diet Puppy Small & Mini' },
                { size: 'Medium breed (25-50 lbs adult)', pick: 'Purina Pro Plan Puppy' },
                { size: 'Giant breed (90+ lbs adult)', pick: 'Royal Canin Giant Puppy (specific line)' },
                { size: 'Budget / any size', pick: 'Iams Puppy Large Breed' },
              ].map(item => (
                <div key={item.size} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{item.size}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {item.pick}</div>
                </div>
              ))}
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">When to Switch to Adult Food</div>
              <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
                {['Small breeds: 9–12 months', 'Medium breeds: 12 months', 'Large breeds: 12–18 months', 'Giant breeds: 18–24 months'].map(item => (
                  <li key={item} className="flex items-center gap-1.5"><span className="text-brand-primary">→</span>{item}</li>
                ))}
              </ul>
            </div>
            <RelatedLinks title="Related Guides" links={[
              { label: 'All Dog Reviews', href: '/reviews' },
              { label: 'Puppy Nutrition Guide', href: '/nutrition/puppy-nutrition' },
              { label: 'WSAVA Guidelines Explained', href: '/nutrition/wsava-explained' },
              { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' },
            ]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-dog-food-for-puppies" />
    </>
  )
}
