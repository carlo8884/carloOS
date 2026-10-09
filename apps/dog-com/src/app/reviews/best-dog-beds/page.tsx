import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, PrimaryHop, EmailCapture, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dog Beds 2026 — Orthopedic, Washable | Dog.com', description: 'Best dog beds ranked. Big Barker for large breed orthopedic support, Casper for medium breeds, and Furhaven for budget value. Machine washable options included.', path: '/reviews/best-dog-beds', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dog Beds 2026', description: 'Orthopedic, washable, and crate dog beds ranked.', url: 'https://dog.com/reviews/best-dog-beds', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-09T00:00:00Z' })
const bigBarkerSchema = buildProductSchema({ name: 'Big Barker 7" Orthopedic Dog Bed', description: 'Therapeutic memory foam bed for large and giant breeds — clinically shown to reduce joint pain.', url: 'https://dog.com/go/amazon/B009G9Y59S?s=reviews-best-dog-beds', imageUrl: '' })
const casperSchema = buildProductSchema({ name: 'Casper Dog Bed', description: 'Premium foam dog bed with removable washable cover for medium to large breeds.', url: 'https://dog.com/go/chewy-brand/casper+dog+bed?s=reviews-best-dog-beds', imageUrl: '' })
// Furhaven and the Best Friends bolster are Quick Picks on this page but have
// no scored ReviewCards yet, so their schemas carry no editorial rating
// (per buildProductSchema contract).
const furhavenSchema = buildProductSchema({ name: 'Furhaven Orthopedic Dog Bed', description: 'Budget orthopedic foam dog bed available in multiple sizes.', imageUrl: '' })
const bestFriendsSchema = buildProductSchema({ name: 'Best Friends by Sheri OrthoComfort Bolster Bed', description: 'Donut-shape bolster dog bed with washable design, suited to dogs that prefer to curl up.', imageUrl: '' })
const allSchemas = combineSchemas(schema, bigBarkerSchema, casperSchema, furhavenSchema, bestFriendsSchema)
const PICKS = [
  { label: 'Best Orthopedic', name: 'Big Barker 7" Orthopedic', subtitle: 'Clinical data · Large/giant breeds · 10-year warranty', href: '#big-barker', pickHop: '/go/amazon/B009G9Y59S?s=reviews-best-dog-beds' },
  { label: 'Best Premium', name: 'Casper Dog Bed', subtitle: 'Washable cover · Durable foam · All sizes', href: '#casper' },
  { label: 'Best Budget', name: 'Furhaven Orthopedic', subtitle: 'Multiple sizes · Affordable · Decent foam', href: '#by-dog-type' },
  { label: 'Best Bolster', name: 'Best Friends by Sheri OrthoComfort', subtitle: 'Donut shape · Anxiety reduction · Washable', href: '#by-dog-type' },
]
const itemList = buildItemListSchema({
  name: "Best Dog Beds 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: ({ 'Big Barker 7" Orthopedic': 'https://dog.com/go/amazon/B009G9Y59S?s=reviews-best-dog-beds', 'Casper Dog Bed': 'https://dog.com/go/chewy-brand/casper+dog+bed?s=reviews-best-dog-beds' }[pick.name] ?? `https://dog.com/reviews/best-dog-beds${pick.href}`) })),
})
export default function BestDogBedsPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dog Beds 2026', url: 'https://dog.com/reviews/best-dog-beds' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dog Beds 2026</h1>
        <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">The Big Barker orthopedic bed is the top bed because a published study measured sleep in large dogs with arthritis.</p>
        <PriceAsOf date="2026-10-09" tone="dark" />
        <div data-fold="offer">
          <PrimaryHop href='/go/amazon/B009G9Y59S?s=reviews-best-dog-beds' label='Check price of the Big Barker 7-inch orthopedic bed on Amazon' />
        <HopDisclosure tone="on-dark" siteId="dog-com" href="/go/amazon/B009G9Y59S?s=reviews-best-dog-beds" />
        </div>
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-dog-beds"
          checklist={[
            "The Big Barker 7-inch Orthopedic bed, marked Best Orthopedic.",
            "The Amazon button opens the Large khaki 7-inch mattress. The listing was $249.95 and in stock on 2026-10-09.",
            "That page has Large, Extra Large, and Giant, plus a color selector. Large is listed for about 50–70 lb.",
            "The listing says the cover is machine washable.",
            "Casper is the everyday foam pick. The card lists $139–249 and a machine-washable cover.",
            "Furhaven and the Best Friends bolster are named in the picks strip and do not have a scored card or a reviewed price.",
            "The table only lines up the two beds that have cards.",
            "For large breeds and seniors with joint disease, the bed quality directly affects pain levels and mobility.",
          ]}
        />
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Dogs sleep 12–14 hours a day. For large breeds and seniors with joint disease, the bed quality directly affects pain levels and mobility. Orthopedic foam is not a luxury for these dogs — it is a health investment.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Dog Beds 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14 min-w-0">
          <div className="min-w-0">
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Orthopedic vs Everyday — Then Size the Sleep Space</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Large and giant dogs with arthritis need 7-inch orthopedic foam. Medium and large dogs without severe joint disease do fine with everyday foam. Budget foam is the everyday pick when cost is the constraint. A crate pad that is too small bunches; one that is too large leaves extra floor a puppy can potty on. Size the crate first — stand, turn, lie down, no extra floor — then pick the bed that fits that footprint.</p>
            </div>
            <JourneyNext
              siteId="dog-com"
              nextHref="/tools/dog-crate-size-calculator"
              nextLabel="Size the crate before you pick the foam"
              nextBlurb="The callout is the foam rule — 7-inch orthopedic for arthritic large and giant dogs, everyday foam otherwise. The crate-size calculator is the next step so the bed actually fits the stand-turn-lie footprint. The hop below opens the Big Barker Large 7-inch mattress, the same product page as the button on this page."
              resourceHref="/go/amazon/B009G9Y59S?s=reviews-best-dog-beds"
              resourceLabel="Check price of the Big Barker 7-inch orthopedic bed on Amazon"
            />
            <HopDisclosure siteId="dog-com" href={["/go/amazon/B009G9Y59S?s=reviews-best-dog-beds", "/go/chewy-brand/casper+dog+bed?s=reviews-best-dog-beds"]} />
            <ReviewCard id="big-barker" badge="Best Orthopedic" name='Big Barker 7" Orthopedic Dog Bed' subtitle="Clinical trial data · 7-inch American foam · 10-year no-flatten warranty" winner
              description={<p>Big Barker is among the few dog beds with published clinical research behind it. A 2018 manufacturer-funded study in the American Journal of Veterinary Research reported that large dogs with arthritis sleeping on Big Barker beds showed reductions in pain, stiffness, and lameness compared to dogs sleeping on standard beds. The 7-inch foam is American-manufactured and comes with a 10-year warranty against flattening. The button opens the Large khaki listing: Barker Beds Large Orthopedic Dog Bed, 7-inch memory foam, 48 × 30 × 7 inches, brand Big Barker, sold by Big Barker. That listing was $249.95 and in stock on 2026-10-09. Large is listed for about 50–70 lb. The same page has a size selector for Extra Large and Giant and a color selector. The listing says the cover is machine washable. Once the foam is unrolled, the listing says the bed is non-refundable.</p>}
              specs={[{ label: 'Foam depth', value: '7 inches', highlight: 'good' }, { label: 'Large size on the listing', value: '48 × 30 × 7 in, about 50–70 lb', highlight: 'good' }, { label: 'Warranty', value: '10-year no-flatten, per the listing', highlight: 'good' }, { label: 'Cover', value: 'Machine washable, per the listing' }]}
              pros={['Among the few beds with a published arthritis trial', '10-year no-flatten warranty on the listing', 'Size selector for Large, Extra Large, and Giant', 'Listing says the cover is machine washable']}
              cons={['Large is listed for about 50–70 lb; a heavier dog needs Extra Large or Giant on the same page', 'Other sizes and colors can differ from the $249.95 Large khaki price', 'The listing says the bed is non-refundable once the foam is unrolled']}
              price="$249.95"
              priceNote="Large khaki on Amazon, in stock, dated 2026-10-09."
              ctaText="Check price of the Big Barker 7-inch orthopedic bed on Amazon"
              ctaHref="/go/amazon/B009G9Y59S?s=reviews-best-dog-beds"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="B009G9Y59S"
            />
            <ReviewCard id="casper" badge="Best Premium" name="Casper Dog Bed" subtitle="Removable machine-washable cover · Durable foam · Memory foam top layer"
              description={<p>Casper translated their human mattress expertise into a well-engineered dog bed. The removable zippered cover is fully machine-washable — a practical necessity for most dogs. The foam construction layers memory foam over a supportive base, providing pressure relief and joint support without the premium cost of Big Barker. Casper’s product page lists small for dogs up to 30 lbs, medium up to 60 lbs, and large up to 90 lbs. The foam quality is notably better than most beds in this price range — it does not flatten within the first few months of use. Good choice for medium to large breeds without severe arthritis who need a quality bed at a more accessible price.</p>}
              specs={[{ label: 'Cover', value: 'Removable, machine washable', highlight: 'good' }, { label: 'Foam', value: 'Memory foam over support base' }, { label: 'Sizes', value: 'Small through large' }, { label: 'Best for', value: 'Medium/large breeds, everyday use' }]}
              pros={['Machine washable cover', 'Good foam quality for price', 'Multiple size options', 'Reputable brand with warranty']}
              cons={['Less therapeutic than Big Barker for severe arthritis', 'Cover zippers can be chewed by destructive dogs']}
              price="$139–249"
              priceNote="regular price on casper.com, dated 2026-10-07."
              ctaText="Shop Casper Dog Bed on Amazon →"
              ctaHref="/go/chewy-brand/casper+dog+bed?s=reviews-best-dog-beds"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="casper+dog+bed"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which bed</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Only the two beds with review cards are in this table. The price and the limit are the ones on those cards.
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
                      <td className="p-3 text-brand-text-mid">A large or giant dog with arthritis, and you want the bed with a published trial</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#big-barker" className="text-brand-primary">Big Barker 7&quot; Orthopedic</a><TableShopLink href={"/go/amazon/B009G9Y59S?s=reviews-best-dog-beds"} product={"Big Barker 7&quot; Orthopedic"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Orthopedic. 7-inch foam. 10-year no-flatten warranty. Large khaki $249.95, dated 2026-10-09</td>
                      <td className="p-3 text-brand-text-mid">The dog does not have the joint disease the 7-inch foam is for. A dog heavier than about 70 lb needs Extra Large or Giant on the same page, not the Large listing the button opens first</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Everyday foam for a medium or large dog without severe arthritis</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#casper" className="text-brand-primary">Casper Dog Bed</a><TableShopLink href={"/go/chewy-brand/casper+dog+bed?s=reviews-best-dog-beds"} product={"Casper Dog Bed"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Premium. Machine-washable cover. Memory foam over a support base. $139–249 regular, dated 2026-10-07</td>
                      <td className="p-3 text-brand-text-mid">Severe arthritis, where the card says Big Barker is the more therapeutic pick. Zippers can be chewed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-09" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which bed fits which dog</h2>
              <FAQAccordion items={[
                {
                  question: 'Which bed does this page pick for a large dog with arthritis?',
                  answer: 'The Big Barker 7-inch Orthopedic bed, marked Best Orthopedic. The card lists a published trial and a 10-year no-flatten warranty. The Amazon button opens the Large khaki 7-inch mattress, $249.95 and in stock on 2026-10-09, listed for about 50–70 lb. Extra Large and Giant are on that page’s size selector. The listing says the cover is machine washable.',
                },
                {
                  question: 'Which bed does this page pick for everyday use?',
                  answer: 'The Casper Dog Bed, the everyday foam pick, for a medium or large dog without severe arthritis. The card lists a machine-washable cover, memory foam over a support base, and a regular price of $139–249 on casper.com, dated 2026-10-07. Small is for dogs up to 30 lbs, medium up to 60 lbs, and large up to 90 lbs. It is not the more therapeutic pick for severe arthritis, and zippers can be chewed.',
                },
                {
                  question: 'Why are Furhaven and the Best Friends bolster not in the table?',
                  answer: 'They are named in the picks strip and the sidebar, and this page does not give them a scored review card or a reviewed price. The table only lines up the two beds that have cards.',
                },
              ]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div id="by-dog-type" className="bg-brand-surface border border-brand-border rounded-xl p-5 scroll-mt-24">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Dog Type</div>
              {[['Arthritic large breed', 'Big Barker — clinical evidence'], ['Large breed everyday', 'Casper or Big Barker'], ['Small/medium everyday', 'Casper or Furhaven'], ['Anxious dog', 'Bolster/donut style (Best Friends Sheri)'], ['Destructive chewer', 'Molly Mutt cover + insert (replaceable)'], ['Budget', 'Furhaven Orthopedic (no reviewed price on this page)']].map(([t, r]) => (
                <div key={t} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-dog-beds" />
    </>
  )
}
