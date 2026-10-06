import type { Metadata } from 'next'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dog Food for Small Breeds 2026 — WSAVA Picks | Dog.com', description: 'Best dog foods for small breeds — Royal Canin Small Adult, Purina Pro Plan Small & Toy, and Hill\'s Science Diet Small Paws ranked.', path: '/reviews/best-dog-food-small-breed', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dog Food for Small Breeds 2026', description: 'WSAVA-compliant small breed dog foods ranked.', url: 'https://dog.com/reviews/best-dog-food-small-breed', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const rcSchema = buildProductSchema({ name: 'Royal Canin Small Adult', description: 'Tailored nutrition for small breed dogs — kibble sized for small mouths, dental support formula.', url: 'https://royalcanin.com', imageUrl: '' })
const ppSchema = buildProductSchema({ name: 'Purina Pro Plan Small & Toy Breed Adult', description: 'High-protein small breed formula with live probiotics and WSAVA compliance.', url: 'https://purina.com', imageUrl: '' })
const allSchemas = combineSchemas(schema, rcSchema, ppSchema)

const PICKS = [
  { label: 'Best Overall', name: 'Royal Canin Small Adult', subtitle: 'Kibble-size designed · Dental formula · WSAVA top tier', href: '#royal-canin' },
  { label: 'Best High-Protein', name: 'Purina Pro Plan Small & Toy', subtitle: 'High protein · Live probiotics · Widely recommended', href: '#purina' },
  { label: "Best Hill's", name: "Hill's Science Diet Small Paws", subtitle: 'Antioxidant blend · Easy digestion · Widely available', href: '#hills' },
]

const itemList = buildItemListSchema({
  name: "Best Dog Food for Small Breeds 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: `https://dog.com/reviews/best-dog-food-small-breed${pick.href}` })),
})
export default function BestSmallBreedFoodPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dog Food for Small Breeds 2026', url: 'https://dog.com/reviews/best-dog-food-small-breed' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🥩 Evidence-Based · Updated 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dog Food for Small Breeds 2026</h1>
        <PriceAsOf date="2026-10-05" tone="dark" />
        <PrimaryHop href='/go/chewy-brand/royal+canin+small+adult?s=reviews-best-dog-food-small-breed' label='Check price of Royal Canin Small Adult on Amazon' />
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Small breeds have different nutritional needs — higher calorie density per pound, kibble sized for small mouths, and formulas that support dental health (small dogs are disproportionately prone to dental disease). All picks below meet WSAVA nutritional guidelines.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Dog Food for Small Breeds 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14 min-w-0">
          <div className="min-w-0">
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Why Small Breed Formulas Matter</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Small dogs have faster metabolisms and higher calorie requirements per pound of body weight than large breeds. A 10-lb Yorkshre Terrier needs more calories per kg than a 70-lb Labrador. Small breed formulas provide higher calorie density and are sized for small mouths — large-breed kibble is too big for many small dogs to chew comfortably, contributing to dental disease by bypassing the mechanical cleaning action of chewing.</p>
            </div>
            <JourneyNext
              siteId="dog-com"
              nextHref="/tools/dog-calorie-calculator"
              nextLabel="Size the daily calories before you pick the small-breed bag"
              nextBlurb="The callout is the density rule — a 10-lb toy breed needs more kcal per kilogram than a Labrador, in a kibble that actually fits the mouth. The calorie calculator is the next step: daily energy, then a small-mouth bag. The hop below is the same Royal Canin Small Adult search already on this page."
              resourceHref="/go/chewy-brand/royal+canin+small+adult?s=reviews-best-dog-food-small-breed"
              resourceLabel="Browse Royal Canin Small Adult dog food on Amazon →"
            />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard id="royal-canin" badge="Best Overall" name="Royal Canin Small Adult" subtitle="Kibble-size engineered · Dental health formula · WSAVA top tier" winner
              description={<p>Royal Canin's small breed line is purpose-built in a way that competitors don't fully replicate — the kibble shape, size, and texture are engineered specifically for small-mouth dental health. The Small Adult formula (for dogs 9–22 lbs) has a specific kibble architecture that encourages the dog to chew rather than gulp, increasing the mechanical dental cleaning effect. Royal Canin is one of the three WSAVA-recommended manufacturers with full veterinary nutritionist oversight, multiple feeding trial protocols, and published nutritional research. The Small Adult provides appropriate caloric density for small breed metabolisms without excess fat. Widely recommended by veterinary dentists specifically for dental health support.</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Kibble design', value: 'Small mouth optimized — dental benefit', highlight: 'good' }, { label: 'Size range', value: 'Dogs 9–22 lbs (Small Adult)' }, { label: 'Caloric density', value: 'Appropriate for small breed metabolism' }]}
              pros={['Kibble engineered for small-mouth dental health', 'WSAVA top-tier compliance', 'Veterinary dentist-recommended for dental support', 'Multiple formulas for different small breed needs']}
              cons={['More expensive than standard adult formulas', 'Chicken-based — not for chicken-allergic dogs', 'Grain-inclusive (positive from WSAVA standpoint)']}
              price="$45–65 / 14-17 lb"
              ctaText="Shop Royal Canin Small Adult on Amazon →"
              ctaHref="/go/chewy-brand/royal+canin+small+adult?s=reviews-best-dog-food-small-breed"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="royal+canin+small+adult"
            />
            <ReviewCard id="purina" badge="Best High-Protein" name="Purina Pro Plan Small & Toy Breed Adult" subtitle="30% protein · Live probiotics · Commonly veterinarian-recommended brand"
              description={<p>Purina Pro Plan is among the commonly veterinarian-recommended dog food brands — a reflection of both its WSAVA compliance and its extensive research backing. The Small & Toy Breed Adult formula provides 30% protein (higher than most small breed formulas) to support the lean muscle mass that small breeds need to maintain healthy metabolism. Includes live probiotics (Bacillus coagulans) for digestive health — one of the few dog foods with a clinically studied probiotic strain at an effective inclusion rate. Available in chicken and beef formulas. The "salmon & rice" variant is appropriate for dogs with chicken sensitivity.</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Protein', value: '30% — high for a small breed formula', highlight: 'good' }, { label: 'Probiotic', value: 'Live B. coagulans — clinically studied', highlight: 'good' }, { label: 'Formulas', value: 'Chicken, beef, salmon variants' }]}
              pros={['30% protein — supports lean muscle', 'Live clinically-studied probiotic', 'Commonly recommended by veterinarians', 'Multiple protein options']}
              cons={['Less dental-specific than Royal Canin', 'Not breed-specific (Small & Toy is a size category, not breed-targeted)']}
              price="$35–55 / 16 lb"
              ctaText="Shop Purina Pro Plan Small & Toy on Amazon →"
              ctaHref="/go/chewy-brand/purina+pro+plan+small+toy+breed?s=reviews-best-dog-food-small-breed"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="purina+pro+plan+small+toy+breed"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which food</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Two foods have review cards. Other names in the sidebar do not have cards or printed prices here.
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
                      <td className="p-3 text-brand-text-mid">A small-breed adult food, including dental support</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#royal-canin" className="text-brand-primary">Royal Canin Small Adult</a><TableShopLink href={"/go/chewy-brand/royal+canin+small+adult?s=reviews-best-dog-food-small-breed"} product={"Royal Canin Small Adult"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. $45–65 / 14–17 lb</td>
                      <td className="p-3 text-brand-text-mid">Chicken allergy. The card says it is chicken-based, and it costs more than a standard adult formula</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Higher protein for an active small or toy dog</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#purina" className="text-brand-primary">Purina Pro Plan Small &amp; Toy Breed Adult</a><TableShopLink href={"/go/chewy-brand/purina+pro+plan+small+toy+breed?s=reviews-best-dog-food-small-breed"} product={"Purina Pro Plan Small &amp; Toy Breed Adult"} /></td>
                      <td className="p-3 text-brand-text-mid">Best High-Protein. 30% protein. $35–55 / 16 lb</td>
                      <td className="p-3 text-brand-text-mid">You want the dental-specific formula. The card says this one is less dental-specific than Royal Canin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-06" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which small-breed food fits</h2>
              <FAQAccordion items={[
                {
                  question: 'Which small-breed food does this page pick overall?',
                  answer: 'Royal Canin Small Adult, marked Best Overall. The printed price is $45–65 for 14–17 lb. The card says it is chicken-based and more expensive than a standard adult formula.',
                },
                {
                  question: 'Which small-breed food does this page pick for higher protein?',
                  answer: 'Purina Pro Plan Small & Toy Breed Adult, marked Best High-Protein. The card lists 30% protein and a printed price of $35–55 for 16 lb. It is less dental-specific than Royal Canin.',
                },
              ]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Small Breed Concern</div>
              {[['Dental disease priority', 'Royal Canin Small Adult'], ['High protein / active dog', 'Purina Pro Plan S&T'], ['Skin and coat issues', 'Royal Canin Skin Care Small'], ['Weight management', 'Royal Canin Light or Hill\'s Perfect Weight Small'], ['Sensitive stomach', 'Purina Pro Plan Sensitive Skin/Stomach'], ['Senior (7+)', 'Purina Pro Plan Bright Mind 7+'], ['Toy breed (under 10 lbs)', 'Royal Canin X-Small Adult']].map(([t, r]) => (
                <div key={t} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'Best Dental Chews', href: '/reviews/best-dental-chews' }, { label: 'Reading Food Labels', href: '/nutrition/reading-food-labels' }, { label: 'Yorkshire Terrier', href: '/breeds/yorkshire-terrier' }]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-dog-food-small-breed" />
    </>
  )
}
