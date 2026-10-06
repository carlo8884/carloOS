import type { Metadata } from 'next'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, ExperimentPrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'
import { crossSiteHref } from '@carloOS/config'


export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Dog Crates 2026 — Wire, Plastic | Dog.com',
  description: 'Wire, plastic airline-approved, heavy-duty, and furniture-style crates compared on durability, escape resistance, ventilation, and ease of assembly.',
  path: '/reviews/best-dog-crates',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Best Dog Crates 2026',
  description: 'Dog crates compared on durability, escape resistance, and ease of use using published specs and stated criteria.',
  url: 'https://dog.com/reviews/best-dog-crates',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-06-07T00:00:00Z',
})

const PICKS = [
  { label: 'Best Wire', name: 'MidWest iCrate', subtitle: 'Best overall wire crate · Divider included', href: '#midwest', pickHop: '/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates' },
  { label: 'Best Heavy Duty', name: 'Impact Dog Crate', subtitle: 'Escape-proof aluminum · Lifetime warranty', href: '#impact' },
  { label: 'Best Airline', name: 'Petmate Sky Kennel', subtitle: 'IATA compliant · Vet recommended', href: '#petmate' },
  { label: 'Best Furniture', name: 'Frisco Furniture Style', subtitle: 'Doubles as end table', href: '#frisco' },
]

const productSchema0 = buildProductSchema({ name: 'MidWest Homes iCrate', description: 'Wire dog crate with divider panel, fold-flat, double door.', url: 'https://midwesthomes4pets.com', imageUrl: '' })
const productSchema1 = buildProductSchema({ name: 'Impact Dog Crate', description: 'Aircraft-grade aluminum escape-proof dog crate with lifetime warranty.', url: 'https://impactdogcrates.com', imageUrl: '' })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1)

const itemList = buildItemListSchema({
  name: "Best Dog Crates 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: `https://dog.com/reviews/best-dog-crates${pick.href}` })),
})
export default function BestDogCratesPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dog Crates 2026', url: 'https://dog.com/reviews/best-dog-crates' } ] }))} />

      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Editor Pick · Updated 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
          Best Dog Crates 2026 — Wire, Plastic, Heavy Duty & Furniture Style Ranked
        </h1>
        <PriceAsOf date="2026-10-04" tone="dark" />
        <ExperimentPrimaryHop
          href="/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates"
          experiment="crate_hop_label"
          control="Check price of the MidWest iCrate on Amazon"
          variant="View the MidWest iCrate price on Amazon"
        />
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          The right crate depends on your dog&apos;s size, temperament, and how you&apos;re using it. A crate for house training is different from one for a separation anxiety escape artist or airline travel.
        </p>
      </div>

      <QuickPicks items={PICKS} title="Jump to Your Pick" />

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium" aria-current="page">Best Dog Crates 2026</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-14 min-w-0">
          <div className="min-w-0">
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Sizing — the Most Common Mistake</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                The crate should be large enough for your dog to stand up, turn around, and lie down fully stretched — no larger. A crate that is too large allows a puppy to use one end as a bathroom. Use a divider panel (included with most wire crates) and expand as the puppy grows.
              </p>
            </div>
            <JourneyNext
              siteId="dog-com"
              nextHref="/tools/dog-crate-size-calculator"
              nextLabel="Size the crate before you pick a model"
              nextBlurb="The callout is the sizing rule — stand, turn, lie down, no extra floor a puppy can potty on. Use the crate-size calculator next, then come back for the divider wire crate. The link below searches Amazon for the MidWest iCrate, the same search as on this page."
              resourceHref="/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates"
              resourceLabel="Browse MidWest iCrate dog crates on Amazon →"
            />

            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard
              id="midwest"
              badge="Best Wire Crate"
              name="MidWest Homes iCrate"
              subtitle="Divider panel included · Fold-flat · Double door · Best value wire"
              winner
              description={
                <p>The MidWest iCrate is the default recommendation for house training, travel, and general crating — for good reason. It ships with a divider panel (essential for puppies — use the divider and expand as the puppy grows), folds flat for storage or travel, has both front and side doors, and comes in sizes from 18" to 54". The printed price is $40–80. The value-to-quality ratio is hard to beat among wire crates. Not escape-proof for determined dogs — step up to Impact for that use case.</p>
              }
              specs={[
                { label: 'Type', value: 'Wire, fold-flat' },
                { label: 'Divider Panel', value: 'Included', highlight: 'good' },
                { label: 'Doors', value: 'Front + side double door', highlight: 'good' },
                { label: 'Escape Resistance', value: 'Standard — not for escape artists', highlight: 'warn' },
                { label: 'Sizes', value: '18" to 54"', highlight: 'good' },
                { label: 'Price', value: '$40–80', highlight: 'good' },
              ]}
              pros={['Divider included — grows with puppy', 'Fold-flat for easy storage', 'Double door access', 'Best price-to-quality in wire category', 'Easy to clean']}
              cons={['Not escape-proof for determined dogs', 'Wire can feel industrial in living space']}
              price="$40–80"
              priceNote="By size dated 2026-10-04."
              ctaText="Check price of the MidWest iCrate on Amazon"
              ctaHref="/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="midwest+icrate+dog+crate"
            />

            <ReviewCard
              id="impact"
              badge="Best Heavy Duty — Escape Artists"
              name="Impact High Anxiety Dog Crate"
              subtitle="Aircraft-grade aluminum · Escape-proof · Lifetime warranty"
              description={
                <p>For dogs with severe separation anxiety or Houdini-level escape skills, the Impact crate is the best answer. Aircraft-grade aluminum construction, welded joints, reinforced latches — dogs that have destroyed wire crates, plastic crates, and standard heavy-duty options stay contained. Impact backs this with a lifetime warranty. The investment ($300–500) is significant, but it&apos;s frequently the last crate an escape-artist dog owner ever buys. Also used by professional trainers, law enforcement K9 units, and sport dog competitors.</p>
              }
              specs={[
                { label: 'Material', value: 'Aircraft-grade aluminum', highlight: 'good' },
                { label: 'Escape Resistance', value: 'Maximum', highlight: 'good' },
                { label: 'Warranty', value: 'Lifetime', highlight: 'good' },
                { label: 'Weight', value: 'Heavy (30–70+ lbs)', highlight: 'warn' },
                { label: 'Price', value: 'Premium ($300–500)', highlight: 'warn' },
              ]}
              pros={['Genuinely escape-proof', 'Aircraft-grade aluminum construction', 'Lifetime warranty', 'Preferred by professional trainers and K9 handlers']}
              cons={['Significant weight — not portable', 'Premium price point', 'Overkill for calm dogs']}
              price="$300–500"
              priceNote="dated 2026-10-04."
              ctaText="Shop Impact high-anxiety crates on Amazon →"
              ctaHref="/go/amazon-brand/impact+high+anxiety+dog+crate?s=reviews-best-dog-crates"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="impact+high+anxiety+dog+crate"
            />

            <ReviewCard
              id="petmate"
              badge="Best Airline Crate"
              name="Petmate Sky Kennel"
              subtitle="IATA compliant · Live Animal ventilation · Most airlines accept"
              description={
                <p>For air travel with a dog in cargo, the Petmate Sky Kennel is a widely accepted airline-approved crate. It meets IATA (International Air Transport Association) Live Animals Regulations, has the required 360° ventilation, and includes the required food and water dishes that attach inside the door. Check your specific airline&apos;s requirements before travel — most follow IATA standards but some have additional requirements. Comes with &quot;Live Animal&quot; stickers and assembly hardware required by most carriers.</p>
              }
              specs={[
                { label: 'IATA Compliant', value: 'Yes', highlight: 'good' },
                { label: 'Ventilation', value: '360° as required', highlight: 'good' },
                { label: 'Airline Acceptance', value: 'Most major carriers' },
                { label: 'Food/Water Dishes', value: 'Included', highlight: 'good' },
                { label: 'Material', value: 'Hard plastic' },
              ]}
              pros={['IATA compliant', 'Accepted by most major airlines', 'Includes required dishes and hardware', 'Secure fastening system', 'Good ventilation']}
              cons={['Confirm with specific airline before travel', 'Heavier than soft-sided carriers', 'Not for cabin use (in-cabin requires soft-sided)']}
              price="$40–120"
              priceNote="By size dated 2026-10-04."
              ctaText="Shop Petmate Sky Kennel on Amazon →"
              ctaHref="/go/amazon-brand/petmate+sky+kennel?s=reviews-best-dog-crates"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="petmate+sky+kennel"
            />

            <ReviewCard
              id="frisco"
              badge="Best Furniture Style"
              name="Frisco Furniture Style Dog Crate"
              subtitle="Doubles as end table · Wooden exterior · Calm dogs only"
              description={
                <p>Furniture-style crates blend into living spaces in a way wire crates never will — the Frisco model has a wooden exterior that functions as a side table or TV stand. The trade-off is ventilation (less than wire) and structural strength (not for dogs who chew or push against crate walls). Best suited for calm, crate-trained dogs in homes where aesthetics matter. Not appropriate for puppies, escape artists, or dogs with separation anxiety. A dog that&apos;s content in their crate and not actively trying to escape will be fine — any other situation calls for wire or heavy duty.</p>
              }
              specs={[
                { label: 'Aesthetic', value: 'Furniture quality', highlight: 'good' },
                { label: 'Doubles As', value: 'End table', highlight: 'good' },
                { label: 'Chew Resistance', value: 'Low — wood exterior', highlight: 'warn' },
                { label: 'Ventilation', value: 'Less than wire', highlight: 'warn' },
                { label: 'Best For', value: 'Calm, crate-trained dogs only', highlight: 'warn' },
              ]}
              pros={['Integrates into living space aesthetically', 'Functions as furniture', 'Good for calm adult dogs']}
              cons={['Not chew-resistant', 'Less ventilation than wire', 'Not for escape artists or puppies', 'Harder to clean']}
              price="$80–160"
              priceNote="dated 2026-10-04."
              ctaText="Shop Frisco Furniture Crates on Amazon →"
              ctaHref="/go/chewy-brand/frisco+furniture+style+dog+crate?s=reviews-best-dog-crates"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="frisco+furniture+style+dog+crate"
            />

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which crate</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                The four cards above already name the job, the price band, and the limit. This table only lines those facts up. 
              </p>
              <div className="overflow-x-auto max-w-full min-w-0 mb-8">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">Job</th>
                      <th className="p-3 font-bold text-brand-dark">Buy</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Skip it when</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">House-training a puppy, or a calm adult who needs a fold-flat wire crate</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#midwest" className="text-brand-primary">MidWest iCrate</a><TableShopLink href={"/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates"} product={"MidWest iCrate"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Wire Crate. Divider included. $40–80</td>
                      <td className="p-3 text-brand-text-mid">The dog destroys wire crates</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Escape artist or severe separation anxiety</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#impact" className="text-brand-primary">Impact High Anxiety</a><TableShopLink href={"/go/amazon-brand/impact+high+anxiety+dog+crate?s=reviews-best-dog-crates"} product={"Impact High Anxiety"} /></td>
                      <td className="p-3 text-brand-text-mid">Aircraft-grade aluminum. Lifetime warranty. $300–500</td>
                      <td className="p-3 text-brand-text-mid">The dog is calm — the card calls this overkill, and the crate is heavy</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Airline cargo</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#petmate" className="text-brand-primary">Petmate Sky Kennel</a><TableShopLink href={"/go/amazon-brand/petmate+sky+kennel?s=reviews-best-dog-crates"} product={"Petmate Sky Kennel"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Airline Crate. IATA compliant. $40–120 by size</td>
                      <td className="p-3 text-brand-text-mid">In-cabin travel, or an escape artist. Confirm the airline before you buy</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A crate-trained adult, and the crate has to look like furniture</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#frisco" className="text-brand-primary">Frisco Furniture Style</a><TableShopLink href={"/go/chewy-brand/frisco+furniture+style+dog+crate?s=reviews-best-dog-crates"} product={"Frisco Furniture Style"} /></td>
                      <td className="p-3 text-brand-text-mid">Doubles as an end table. $80–160</td>
                      <td className="p-3 text-brand-text-mid">Puppies, chewers, or anxious dogs. Wood is not chew-resistant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-06" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which crate fits which job</h2>
              <FAQAccordion items={[
                {
                  question: 'Which crate does this page pick for house-training a puppy?',
                  answer: 'The MidWest iCrate, because it includes a divider. Size the crate to the adult dog and close the divider down while the puppy is small.',
                },
                {
                  question: 'Which crate does this page pick for airline cargo?',
                  answer: 'The Petmate Sky Kennel. The card calls it IATA compliant. It is not the pick for an escape artist.',
                },
                {
                  question: 'Which crate does this page pick for an escape artist?',
                  answer: 'The Impact aluminum crate. The furniture-style Frisco crate is the living-room pick and is not described as chew-resistant.',
                },
              ]} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[
                { situation: 'House training a puppy', pick: 'MidWest iCrate (with divider)' },
                { situation: 'Escape artist / anxiety', pick: 'Impact Aluminum' },
                { situation: 'Airline travel (cargo)', pick: 'Petmate Sky Kennel' },
                { situation: 'Living room aesthetics', pick: 'Frisco Furniture Style' },
                { situation: 'Best value overall', pick: 'MidWest iCrate' },
              ].map(item => (
                <div key={item.situation} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-xs text-brand-text-light mb-0.5">{item.situation}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {item.pick}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related" links={[
              { label: 'All Dog Reviews', href: '/reviews' },
              { label: 'Best Dog Beds', href: '/reviews/best-dog-beds' },
              { label: 'Crate Training Guide', href: '/training' },
              { label: 'Best Pet Insurance', href: crossSiteHref('vets-co', '/reviews/best-pet-insurance') },
            ]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-dog-crates" />
    </>
  )
}
