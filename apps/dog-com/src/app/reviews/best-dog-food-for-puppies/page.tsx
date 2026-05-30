import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Puppy Food 2025 — Large Breed | Dog.com',
  description: 'WSAVA-compliant puppy foods ranked for 2025. Royal Canin, Purina Pro Plan, Hill\'s Science Diet compared for large breed puppies, small breeds, and all sizes.',
  path: '/reviews/best-dog-food-for-puppies',
  category: 'Nutrition Reviews',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Best Puppy Food 2025',
  description: 'WSAVA-compliant puppy formulas ranked — large breed, small breed, all sizes.',
  url: 'https://dog.com/reviews/best-dog-food-for-puppies',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const rcSchema = buildProductSchema({ name: 'Royal Canin Large Breed Puppy', description: 'WSAVA-compliant large breed puppy formula with controlled calcium for healthy bone development.', url: 'https://royalcanin.com', imageUrl: '', ratingValue: 9.5, reviewCount: 1 })
const ppSchema = buildProductSchema({ name: 'Purina Pro Plan Puppy Large Breed', description: 'AAFCO feeding trial-tested large breed puppy formula from a company with 400+ published studies.', url: 'https://purina.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const hillsSchema = buildProductSchema({ name: 'Hill\'s Science Diet Puppy Large Breed', description: 'veterinarian-formulated large breed puppy food with controlled calcium-to-phosphorus ratio.', url: 'https://hillspet.com', imageUrl: '', ratingValue: 9.1, reviewCount: 1 })
const allSchemas = combineSchemas(schema, rcSchema, ppSchema, hillsSchema)

const PICKS = [
  { label: 'Best Large Breed', emoji: '🏆', name: 'Royal Canin Large Breed Puppy', subtitle: 'Most researched · Controlled calcium · Breed-specific', href: '#royal-canin' },
  { label: 'Best Overall Value', emoji: '⭐', name: 'Purina Pro Plan Puppy Large Breed', subtitle: 'AAFCO feeding trials · 400+ studies · Widely available', href: '#pro-plan' },
  { label: 'Best Small Breed', emoji: '🐾', name: 'Hill\'s Science Diet Small Paws', subtitle: 'Small breed puppy · veterinarian-formulated', href: '#hills-small' },
  { label: 'Best Budget', emoji: '💰', name: 'Iams ProActive Health Puppy', subtitle: 'WSAVA-compliant · Under $40/bag', href: '#iams' },
]

export default function BestPuppyFoodPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🥩 Evidence-Based · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Best Puppy Food 2025 — WSAVA-Compliant Formulas Ranked
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          The most important rule in puppy nutrition: large breeds (expected adult weight 50+ lbs) must eat a large breed puppy formula. We ranked by <a href="https://wsava.org/committees/global-nutrition-committee/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA</a> compliance, <a href="https://aafco.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAFCO</a> feeding trials, and whether the manufacturer employs board-certified veterinary nutritionists.
        </p>
      </div>

      <QuickPicks items={PICKS} />

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Puppy Food</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-danger/5 border-l-4 border-brand-danger rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Large Breed Puppy Formula — Not Optional</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                Any puppy expected to weigh more than 50 lbs as an adult must eat a formula labeled <strong>&quot;large breed puppy&quot;</strong>. Large breed puppy formulas have controlled calcium-to-phosphorus ratios that allow appropriate skeletal development. Standard puppy formulas (higher calcium) cause large breed puppies to grow their skeletons faster than their joint structures can accommodate — directly contributing to hip dysplasia, OCD, and elbow dysplasia. This is not a preference. It is clinically meaningful.
              </p>
            </div>

            <ScoreMethodology />
            <ReviewCard
              id="royal-canin"
              badge="Best Large Breed"
              badgeEmoji="🏆"
              name="Royal Canin Large Breed Puppy"
              subtitle="Most researched puppy formula · Breed-specific lines · 600+ scientists"
              score={9.5}
              winner
              description={<div>
                <p>Royal Canin is the most research-intensive pet food manufacturer — 600+ scientists including board-certified veterinary nutritionists, continuous feeding trial programs, and breed-specific formula lines developed from morphological and metabolic research on individual breeds. The Large Breed Puppy formula has a precisely controlled calcium level (1.0–1.3% DM) within the safe range for large breed skeletal development, EPA and DHA for brain and vision development, and an antioxidant complex supporting immune development.</p>
                <p>Royal Canin also makes breed-specific puppy formulas (German Shepherd Puppy, Golden Retriever Puppy, Labrador Retriever Puppy) for the most common large breeds — these incorporate breed-specific nutritional and digestive considerations. If your puppy is a recognized breed with a Royal Canin specific formula, that is the top recommendation.</p>
              </div>}
              specs={[
                { label: 'WSAVA Compliant', value: 'Yes — highest tier', highlight: 'good' },
                { label: 'AAFCO', value: 'Feeding trial substantiated', highlight: 'good' },
                { label: 'Calcium (DM)', value: '1.0–1.3% (large breed safe range)', highlight: 'good' },
                { label: 'Vet Nutritionists', value: '600+ scientists on staff', highlight: 'good' },
                { label: 'Breed-Specific Lines', value: 'Available for many breeds', highlight: 'good' },
              ]}
              pros={['Most research-intensive manufacturer', 'Breed-specific formulas available', 'Controlled calcium for safe large breed development', 'AAFCO feeding trial substantiated', 'EPA/DHA for brain development']}
              cons={['Higher price than Purina or Hill\'s', 'Some dogs do not like the kibble shape', 'Must transition to RC adult at appropriate age']}
              price="$65–90 per 30 lb bag"
              ctaText="Shop Royal Canin →"
              ctaHref="/go/amazon-brand/royal+canin+large+breed+puppy?s=review-best-dog-food-for-puppies"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="royal-canin-large-puppy"
            />

            <ReviewCard
              id="pro-plan"
              badge="Best Overall Value"
              badgeEmoji="⭐"
              name="Purina Pro Plan Puppy Large Breed"
              subtitle="400+ published studies · AAFCO feeding trial · DHA from salmon oil"
              score={9.3}
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
              ctaText="Shop Purina Pro Plan →"
              ctaHref="/go/chewy-brand/s?query=purina+pro+plan+puppy+large+breed?s=review-best-dog-food-for-puppies"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="purina-pro-plan-puppy-large"
            />

            <ReviewCard
              id="hills-small"
              badge="Best Small Breed Puppy"
              badgeEmoji="🐾"
              name="Hill's Science Diet Puppy Small Paws"
              subtitle="Small breed puppy formula · DHA for brain · Hill's nutritionist team"
              score={9.1}
              description={<p>Hill&apos;s Science Diet is the third member of the WSAVA top-tier alongside Royal Canin and Purina Pro Plan — full-time veterinary nutritionists, AAFCO feeding trials, and strong research investment. Small Paws is formulated for puppies expected to weigh under 25 lbs as adults, with a small kibble size and the energy density appropriate for higher small-breed metabolic rates. For large breed puppies, use Hill&apos;s Science Diet Puppy Large Breed instead — same manufacturer quality standards, different formula.</p>}
              specs={[
                { label: 'Best For', value: 'Small breeds (adult weight under 25 lbs)' },
                { label: 'WSAVA Compliant', value: 'Yes', highlight: 'good' },
                { label: 'AAFCO', value: 'Feeding trial substantiated', highlight: 'good' },
                { label: 'Kibble Size', value: 'Small — appropriate for small breeds', highlight: 'good' },
              ]}
              pros={['Top-tier WSAVA compliance', 'AAFCO feeding trial substantiated', 'Appropriate kibble size for small breeds', 'Full-time veterinary nutritionists']}
              cons={['Premium price', 'Not for large breeds — use Hill\'s Large Breed formula instead']}
              price="$55–80 per 28.5 lb bag"
              ctaText="Shop Hill's Science Diet →"
              ctaHref="/go/chewy-brand/s?query=hills+science+diet+puppy+small+paws?s=review-best-dog-food-for-puppies"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="hills-puppy-small-paws"
            />

            <ReviewCard
              id="iams"
              badge="Best Budget"
              badgeEmoji="💰"
              name="Iams ProActive Health Smart Puppy"
              subtitle="WSAVA-compliant · Budget price · AAFCO meeting standard"
              score={8.7}
              description={<p>Iams meets WSAVA compliance standards — they employ qualified nutritionists and conduct AAFCO testing — at a significantly lower price than Royal Canin, Purina Pro Plan, or Hill&apos;s. For large breed puppies, use Iams ProActive Health Smart Puppy Large Breed specifically. The research investment is less extensive than the top three brands, but the nutritional quality is meaningfully better than non-WSAVA-compliant alternatives. A good option for budget-constrained owners who still want WSAVA-compliant nutrition.</p>}
              specs={[
                { label: 'WSAVA Compliant', value: 'Yes', highlight: 'good' },
                { label: 'AAFCO', value: 'Meets nutrient profiles' },
                { label: 'Price', value: 'Most affordable WSAVA option', highlight: 'good' },
                { label: 'Large Breed Line', value: 'Available', highlight: 'good' },
              ]}
              pros={['Most affordable WSAVA-compliant option', 'Large breed formula available', 'Widely available', 'Adequate nutritional quality']}
              cons={['Less research investment than top 3', 'AAFCO formulation (not feeding trial) on some lines', 'Lower-quality protein sourcing than premium options']}
              price="$30–50 per 30 lb bag"
              ctaText="Shop Iams →"
              ctaHref="/go/chewy-brand/s?query=iams+proactive+health+puppy+large+breed?s=review-best-dog-food-for-puppies"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="iams-puppy-large-breed"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Adult Size</div>
              {[
                { size: 'Large breed (50+ lbs adult)', pick: 'Royal Canin Large Breed Puppy' },
                { size: 'Small breed (under 25 lbs adult)', pick: 'Hill\'s Science Diet Small Paws' },
                { size: 'Medium breed (25-50 lbs adult)', pick: 'Purina Pro Plan Puppy' },
                { size: 'Giant breed (90+ lbs adult)', pick: 'Royal Canin Giant Puppy (specific line)' },
                { size: 'Budget / any size', pick: 'Iams ProActive Health Large or regular' },
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
              { label: 'Puppy Nutrition Guide', href: '/nutrition/puppy-nutrition' },
              { label: 'WSAVA Guidelines Explained', href: '/nutrition/wsava-explained' },
              { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' },
            ]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="review-puppy-food" />
          </aside>
        </div>
      </div>
    </>
  )
}
