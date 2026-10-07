import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { RelatedReads, ComparisonFoot, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, CrossPortfolioCard, FAQAccordion, PriceAsOf, ShopCtas} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'
import { crossSiteHref } from '@carloOS/config'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Flea & Tick Prevention 2026 — Bravecto, NexGard | Dog.com', description: 'Best flea and tick prevention for dogs — Bravecto, NexGard, and Simparica compared by coverage, duration, and safety profile. research-based.', path: '/reviews/best-flea-tick-prevention', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Flea & Tick Prevention for Dogs 2026', description: 'Bravecto, NexGard, and Simparica ranked by coverage and safety.', url: 'https://dog.com/reviews/best-flea-tick-prevention', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })
const bravecto = buildProductSchema({ name: 'Bravecto Chew for Dogs', description: '12-week oral flea and tick prevention — fluralaner isoxazoline class.', imageUrl: '' })
const nexgard = buildProductSchema({ name: 'NexGard Chew for Dogs', description: 'Monthly oral flea and tick prevention — afoxolaner isoxazoline class.', imageUrl: '' })
// Simparica Trio is a Quick Pick on this page but has no scored ReviewCard yet,
// so its schema carries no editorial rating (per buildProductSchema contract).
const simparica = buildProductSchema({ name: 'Simparica Trio Chew for Dogs', description: 'Monthly oral combination prevention — fleas, ticks, heartworm, and intestinal parasites in a single isoxazoline-class chew.', imageUrl: '' })
const allSchemas = combineSchemas(schema, bravecto, nexgard, simparica)
const PICKS = [
  { label: 'Best Overall', name: 'Bravecto', subtitle: '12-week duration · Fewest doses · Broad tick coverage', href: '#bravecto' },
  { label: 'Best Monthly', name: 'NexGard', subtitle: 'Monthly · Established track record · Widely available', href: '#nexgard' },
  { label: 'Best Combo', name: 'Simparica Trio', subtitle: 'Fleas, ticks, heartworm, intestinal parasites', href: '#simparica' },
]
const itemList = buildItemListSchema({
  name: "Best Flea & Tick Prevention for Dogs 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: `https://dog.com/reviews/best-flea-tick-prevention${pick.href}` })),
})
export default function FleaTickPreventionPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Flea & Tick Prevention 2026', url: 'https://dog.com/reviews/best-flea-tick-prevention' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">💊 Evidence-Based · June 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Flea & Tick Prevention 2026</h1>
        <PriceAsOf date="2026-10-05" tone="dark" />
        <p className="mb-5">
          <a href="/find-a-vet" className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline">Find a vet to discuss Bravecto</a>
        </p>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Oral isoxazoline class preventives (Bravecto, NexGard, Simparica) are widely regarded as among the most effective flea and tick prevention available — they work systemically and kill parasites on contact with the dog's blood. Prescription required.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Flea & Tick Prevention 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14 min-w-0">
          <div className="min-w-0">
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Isoxazolines and Seizure Risk</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">The <a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/fact-sheet-pet-owners-and-veterinarians-about-potential-adverse-events-associated-isoxazoline-flea" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a> has issued a warning that isoxazoline-class products (Bravecto, NexGard, Simparica, Credelio) may cause neurological adverse events including muscle tremors, ataxia, and seizures in some dogs. This is rare — but dogs with a history of seizures or neurological conditions should use these products only under close veterinary supervision. Discuss with your vet before starting any isoxazoline product.</p>
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-8">Prices on the cards are clinic ranges from a veterinary visit, not a shelf price. The buttons on the prescription cards open the vet finder.</p>
            <ReviewCard id="bravecto" badge="Best Overall" name="Bravecto Chew (Fluralaner)" subtitle="12-week duration · Covers 7 tick species · Single dose convenience" winner
              description={<p>Bravecto's 12-week duration is its defining advantage — 4 doses per year versus 12 for monthly products. Fewer doses means fewer opportunities for compliance lapses (the most common reason prevention fails). A single chew provides 3 months of protection against fleas and 7 tick species including Deer tick (Lyme disease vector), American dog tick, Brown dog tick, Black-legged tick, Gulf Coast tick, Lone Star tick, and Serrano tick. Blood levels remain therapeutic throughout the 12-week window — unlike some monthly products that have efficacy gaps in the final week. Prescription required.</p>}
              specs={[{ label: 'Duration', value: '12 weeks per dose', highlight: 'good' }, { label: 'Tick species', value: '7 — broadest coverage', highlight: 'good' }, { label: 'Class', value: 'Isoxazoline (fluralaner)' }, { label: 'Requires Rx', value: 'Yes' }]}
              pros={['12-week duration — fewest doses', 'Broadest tick species coverage', 'Consistent efficacy throughout window', 'Beef-flavored — most dogs take readily']}
              cons={['Prescription required', 'More expensive per dose (but similar annual cost)', 'Isoxazoline seizure risk in predisposed dogs']}
              price="$50–60 per 12-week dose"
              priceNote="dated 2026-10-05."
              ctaText="Find a Vet to Discuss Bravecto →"
              ctaHref="/find-a-vet"
              editorial
            />
            <ReviewCard id="nexgard" badge="Best Monthly" name="NexGard Chew (Afoxolaner)" subtitle="Monthly · 5 tick species · Widely used oral prevention"
              description={<p>NexGard is a widely used oral flea and tick prevention and has the longest post-market safety record of the isoxazoline class — first approved in 2013. Monthly dosing maintains high compliance when dogs are on a consistent schedule. Covers 5 tick species including Deer tick, American dog tick, Brown dog tick, Gulf Coast tick, and Lone Star tick. Kills fleas before they lay eggs — important for breaking the flea lifecycle in the environment. Beef-flavored chew most dogs eat readily. Prescription required; your veterinarian likely has it in stock.</p>}
              specs={[{ label: 'Duration', value: 'Monthly' }, { label: 'Tick species', value: '5' }, { label: 'Class', value: 'Isoxazoline (afoxolaner)' }, { label: 'Track record', value: 'Longest of isoxazoline class', highlight: 'good' }]}
              pros={['Longest safety track record in class', 'Widely available', 'Kills fleas before egg laying', 'Monthly predictability']}
              cons={['Monthly dosing — 12 doses/year', '5 tick species vs Bravecto\'s 7', 'Prescription required']}
              price="$20–25 per monthly dose"
              priceNote="dated 2026-10-05."
              ctaText="Find a Vet to Discuss NexGard →"
              ctaHref="/find-a-vet"
              editorial
            />
            <div className="mt-10 border border-brand-border rounded-xl p-5">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Over-the-counter options</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Bravecto, NexGard, and Simparica need a veterinarian&apos;s prescription. They are not what the link below sells. That link is an Amazon search for over-the-counter dog flea and tick products.
              </p>
              <HopDisclosure siteId="dog-com" href="/go/amazon-brand/dog+flea+and+tick?s=reviews-best-flea-tick-prevention" />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+flea+and+tick?s=reviews-best-flea-tick-prevention"
                amazonLabel="Browse over-the-counter dog flea and tick products on Amazon →"
              />
            </div>
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which preventive</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Two preventives have review cards. The prices are clinic ranges, not a shelf price. Both buttons on those cards go to the vet finder. The prescription cards do not name a retailer. The over-the-counter block above is a separate Amazon search, and it is not Bravecto, NexGard, or Simparica. Simparica Trio is in the picks strip and does not have a scored card or a printed price here.
              </p>
              <div className="overflow-x-auto max-w-full min-w-0 mb-8">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If you need</th>
                      <th className="p-3 font-bold text-brand-dark">Ask about</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Skip it when</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Fewer doses, and coverage of 7 tick species</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#bravecto" className="text-brand-primary">Bravecto Chew</a><a href="/find-a-vet" className="mt-1 block text-xs font-semibold text-brand-primary underline underline-offset-2">Find a clinic</a></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. $50–60 per 12-week dose</td>
                      <td className="p-3 text-brand-text-mid">A seizure history. The card lists isoxazoline seizure risk in predisposed dogs, and a prescription is required</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A monthly chew with the longer post-market record</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#nexgard" className="text-brand-primary">NexGard Chew</a><a href="/find-a-vet" className="mt-1 block text-xs font-semibold text-brand-primary underline underline-offset-2">Find a clinic</a></td>
                      <td className="p-3 text-brand-text-mid">Best Monthly. $20–25 per monthly dose. 5 tick species</td>
                      <td className="p-3 text-brand-text-mid">You want the 12-week dose or the extra tick species. A prescription is still required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-07" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which flea and tick preventive fits</h2>
              <FAQAccordion items={[
                {
                  question: 'Which preventive does this page pick for fewer doses?',
                  answer: 'Bravecto, marked Best Overall. The card lists a 12-week dose, 7 tick species, and a printed price of $50–60 per dose. A prescription is required, and the card lists isoxazoline seizure risk in predisposed dogs. The button goes to the vet finder, not a shop.',
                },
                {
                  question: 'Which preventive does this page pick for a monthly chew?',
                  answer: 'NexGard. The printed price is $20–25 per monthly dose. The card lists 5 tick species, against 7 on the Bravecto card, and a prescription is required.',
                },
              ]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div id="simparica" className="bg-brand-surface border border-brand-border rounded-xl p-5 scroll-mt-24">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Best compliance (fewest doses)', 'Bravecto (12-week)'], ['History of seizures', 'Discuss alternatives with vet'], ['Heartworm + flea/tick combined', 'Simparica Trio or Revolution Plus'], ['Budget-conscious', 'Generic fluralaner (Bravecto generic)'], ['Cats in household', 'Check — dog isoxazolines toxic to cats']].map(([s, r]) => (
                <div key={s} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Best Heartworm Prevention', href: '/reviews/best-heartworm-prevention' }, { label: 'Heartworm Prevention Guide', href: '/health/heartworm-prevention' }, { label: 'Dog Vaccinations', href: '/health/dog-vaccinations' }, { label: 'Best Pet Insurance', href: crossSiteHref('vets-co', '/reviews/best-pet-insurance') }]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-flea-tick-prevention" />
    </>
  )
}
