import type { Metadata } from 'next'
import Link from 'next/link'
import { RelatedReads, ComparisonFoot, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { crossSiteHref } from '@carloOS/config'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dental Chews for Dogs 2026 — VOHC Accepted Picks | Dog.com', description: 'Best dog dental chews with the VOHC seal — Greenies, Virbac CET, and Whimzees ranked for plaque reduction, ingredient quality, and calorie count.', path: '/reviews/best-dental-chews', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dental Chews for Dogs 2026', description: 'VOHC-accepted dental chews ranked for dogs.', url: 'https://dog.com/reviews/best-dental-chews', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const greeniesSchema = buildProductSchema({ name: 'Greenies Original Dental Chews', description: 'VOHC-accepted dental chew — commonly recommended by veterinarians.', url: 'https://greenies.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, greeniesSchema)
const PICKS = [
  { label: 'Best Overall', name: 'Greenies Original', subtitle: 'VOHC seal · Vet recommended · All sizes', href: '#greenies' },
  { label: 'Best Natural', name: 'Whimzees', subtitle: 'Plant-based · VOHC accepted · Longer chew time', href: '#whimzees' },
  { label: 'Best Enzymatic', name: 'Virbac CET Enzymatic', subtitle: 'Dual enzyme system · Vet brand · Rawhide-based', href: '#virbac' },
]
export default function BestDentalChewsPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dental Chews for Dogs 2026', url: 'https://dog.com/reviews/best-dental-chews' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🦷 Evidence-Based · Updated 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dental Chews for Dogs 2026</h1>
        <PriceAsOf date="2026-10-04" tone="dark" />
        <PrimaryHop href='/go/chewy-brand/greenies+dental+chews+dogs?s=reviews-best-dental-chews' label='Check price of Greenies dental chews on Chewy' />
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Only chews with the VOHC (Veterinary Oral Health Council) seal have clinical evidence for plaque and tartar reduction. Look for the VOHC seal — not just "dental" marketing claims.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Dental Chews for Dogs 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The VOHC Standard</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">The Veterinary Oral Health Council awards its seal to products that demonstrate plaque or tartar reduction in controlled clinical studies. This is the correct filter for dental products — not ingredient claims, not packaging promises. The full VOHC-accepted product list is at vohc.org. Dental chews supplement toothbrushing — they do not replace it, and they do not substitute for professional cleaning.</p>
            </div>
            <JourneyNext
              siteId="dog-com"
              nextHref="/tools/dog-calorie-calculator"
              nextLabel="Subtract the chew calories before you add a daily Greenie"
              nextBlurb="The callout is the VOHC filter — seal first, then count the 25–90 kcal on the bag so the chew does not become a hidden meal. The calorie calculator is the next step: daily energy, then subtract one chew. The hop below is the same Greenies search already on this page."
              resourceHref="/go/chewy-brand/greenies+dental+chews+dogs?s=reviews-best-dental-chews"
              resourceLabel="Browse Greenies dental chews →"
            />
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard id="greenies" badge="Best Overall" name="Greenies Original Dental Chews" subtitle="VOHC accepted · Commonly recommended · All sizes from teenie to large" score={9.2} winner
              description={<p>Greenies are a commonly recommended dog dental chew in veterinary practice and have earned VOHC acceptance for plaque and tartar reduction. The texture is designed to be abrasive enough to mechanically scrub the tooth surface while being soft enough to bend rather than shatter — which is important for dental safety (very hard chews like antlers, bones, and nylon chews cause tooth fractures). Give one chew daily for best effect. Available in sizes from teenie (5–15 lb dogs) through large (50–100 lb dogs). Count the calories — each Greenie is 25–90 calories depending on size, which must be accounted for in daily intake for weight management.</p>}
              specs={[{ label: 'VOHC accepted', value: 'Yes — plaque AND tartar', highlight: 'good' }, { label: 'Sizes', value: 'Teenie through Large', highlight: 'good' }, { label: 'Texture', value: 'Pliable — tooth fracture safe', highlight: 'good' }, { label: 'Calories', value: '25–90 per chew (size dependent)' }]}
              pros={['VOHC accepted (plaque + tartar)', 'Often used by vets', 'Pliable — tooth-safe', 'Full size range', 'Dogs love the taste']}
              cons={['Must count calories', 'Some dogs wolf them down too fast for dental benefit', 'Not ideal for dogs with wheat sensitivity (contains wheat)']}
              price="$25–35 / 27-count"
              ctaText="Check price of Greenies dental chews on Chewy"
              ctaHref="/go/chewy-brand/greenies+dental+chews+dogs?s=reviews-best-dental-chews"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="greenies+dental+chews+dogs"
            />
            <ReviewCard id="whimzees" badge="Best Natural / Plant-Based" name="Whimzees Natural Dental Chews" subtitle="Plant-based · VOHC accepted · Longer chew time than Greenies" score={9.0}
              description={<p>Whimzees are made from plant-based ingredients — potato starch, glycerin, and cellulose — with no artificial colors, preservatives, or animal products. VOHC accepted for plaque reduction. The texture is slightly firmer than Greenies but still pliable and tooth-safe. Many owners report their dogs spend longer chewing Whimzees than Greenies — more time chewing means more tooth surface contact and more mechanical plaque removal. Good choice for dogs with animal protein sensitivities or owners preferring plant-based options. Available in several fun shapes (toothbrush, hedgehog, crocodile) that all achieve similar dental effect.</p>}
              specs={[{ label: 'VOHC accepted', value: 'Yes — plaque reduction', highlight: 'good' }, { label: 'Ingredients', value: 'Plant-based — no artificial additives', highlight: 'good' }, { label: 'Chew time', value: 'Longer than Greenies', highlight: 'good' }, { label: 'Best for', value: 'Dogs with protein sensitivities' }]}
              pros={['Plant-based — no animal protein', 'VOHC accepted', 'Longer chew duration', 'No artificial additives']}
              cons={['VOHC for plaque only (not tartar)', 'Higher calorie density than Greenies per chew']}
              price="$20–30 / 14-count"
              ctaText="Shop Whimzees →"
              ctaHref="/go/chewy-brand/whimzees+dental+chews+dogs?s=reviews-best-dental-chews"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="whimzees+dental+chews+dogs"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which chew</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Both chews already have VOHC notes, a price, and a limit on the cards. This table only lines those up. Scores are this page&apos;s editorial scores, not customer star ratings. Neither replaces toothbrushing.
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
                      <td className="p-3 text-brand-text-mid">A daily chew with VOHC acceptance for plaque and tartar</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#greenies" className="text-brand-primary">Greenies Original</a></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. Pliable. Teenie through large. $25–35 / 27-count. 25–90 calories by size</td>
                      <td className="p-3 text-brand-text-mid">Wheat sensitivity. The card says they contain wheat. Count the calories, and a dog that swallows them gets less dental contact</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A plant-based chew, or a longer chew than Greenies</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#whimzees" className="text-brand-primary">Whimzees</a></td>
                      <td className="p-3 text-brand-text-mid">Best Natural / Plant-Based. VOHC for plaque. $20–30 / 14-count</td>
                      <td className="p-3 text-brand-text-mid">You need a tartar claim. The card says VOHC is for plaque only, and calories per chew are higher than Greenies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-04" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which chew fits which dog</h2>
              <FAQAccordion items={[
                {
                  question: 'Which chew does this page pick for a VOHC plaque and tartar claim?',
                  answer: 'Greenies Original, scored 9.2 and marked Best Overall. The card lists a pliable texture, sizes from teenie through large, a printed price of $25–35 for a 27-count, and 25–90 calories by size. It contains wheat. A dog that swallows the chew gets less dental contact.',
                },
                {
                  question: 'Which chew does this page pick when you want a plant-based chew?',
                  answer: 'Whimzees, scored 9.0 and marked Best Natural / Plant-Based. The card says VOHC acceptance is for plaque, not tartar, the printed price is $20–30 for a 14-count, and calories per chew are higher than Greenies.',
                },
                {
                  question: 'Do these chews replace toothbrushing?',
                  answer: 'No. The table on this page says neither chew replaces toothbrushing. The sidebar lists daily toothbrushing with CET paste ahead of VOHC chews.',
                },
              ]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Dental Health Hierarchy</div>
              {[['Most effective', 'Daily toothbrushing with CET paste'], ['2nd — professional cleaning', 'Annual under anesthesia'], ['3rd — VOHC dental chews', 'Daily (Greenies, Whimzees)'], ['4th — VOHC water additives', 'Moderate evidence'], ['Not effective', 'Bones, antlers, non-VOHC chews']].map(([rank, detail]) => (
                <div key={rank} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{rank}</div>
                  <div className="text-xs font-bold text-brand-dark">{detail}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'Dog Dental Care', href: '/health/dog-dental-care' }, { label: 'Best Pet Insurance', href: crossSiteHref('vets-co', '/reviews/best-pet-insurance') }]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-dental-chews" />
    </>
  )
}
