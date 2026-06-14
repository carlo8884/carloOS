import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

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
  { label: 'Best Wire', name: 'MidWest iCrate', subtitle: 'Best overall wire crate · Divider included', href: '#midwest' },
  { label: 'Best Heavy Duty', name: 'Impact Dog Crate', subtitle: 'Escape-proof aluminum · Lifetime warranty', href: '#impact' },
  { label: 'Best Airline', name: 'Petmate Sky Kennel', subtitle: 'IATA compliant · Vet recommended', href: '#petmate' },
  { label: 'Best Furniture', name: 'Frisco Furniture Style', subtitle: 'Doubles as end table', href: '#frisco' },
]

const productSchema0 = buildProductSchema({ name: 'MidWest Homes iCrate', description: 'Wire dog crate with divider panel, fold-flat, double door.', url: 'https://midwesthomes4pets.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const productSchema1 = buildProductSchema({ name: 'Impact Dog Crate', description: 'Aircraft-grade aluminum escape-proof dog crate with lifetime warranty.', url: 'https://impactdogcrates.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1)

export default function BestDogCratesPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dog Crates 2026', url: 'https://dog.com/reviews/best-dog-crates' } ] }))} />

      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Editor Pick · Updated 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
          Best Dog Crates 2026 — Wire, Plastic, Heavy Duty & Furniture Style Ranked
        </h1>
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
        <span className="text-brand-text-mid font-medium">Best Dog Crates</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Sizing — the Most Common Mistake</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                The crate should be large enough for your dog to stand up, turn around, and lie down fully stretched — no larger. A crate that is too large allows a puppy to use one end as a bathroom. Use a divider panel (included with most wire crates) and expand as the puppy grows.
              </p>
            </div>

            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard
              id="midwest"
              badge="Best Wire Crate"
              name="MidWest Homes iCrate"
              subtitle="Divider panel included · Fold-flat · Double door · Best value wire"
              score={9.3}
              winner
              description={
                <p>The MidWest iCrate is the default recommendation for house training, travel, and general crating — for good reason. It ships with a divider panel (essential for puppies — use the divider and expand as the puppy grows), folds flat for storage or travel, has both front and side doors, and comes in sizes from 18" to 54". At under $60 for most sizes, the value-to-quality ratio is hard to beat among wire crates. Not escape-proof for determined dogs — step up to Impact for that use case.</p>
              }
              specs={[
                { label: 'Type', value: 'Wire, fold-flat' },
                { label: 'Divider Panel', value: 'Included', highlight: 'good' },
                { label: 'Doors', value: 'Front + side double door', highlight: 'good' },
                { label: 'Escape Resistance', value: 'Standard — not for escape artists', highlight: 'warn' },
                { label: 'Sizes', value: '18" to 54"', highlight: 'good' },
                { label: 'Price', value: 'Under $60 most sizes', highlight: 'good' },
              ]}
              pros={['Divider included — grows with puppy', 'Fold-flat for easy storage', 'Double door access', 'Best price-to-quality in wire category', 'Easy to clean']}
              cons={['Not escape-proof for determined dogs', 'Wire can feel industrial in living space']}
              price="$40–80"
              priceNote="By size"
              ctaText="Shop MidWest iCrate →"
              ctaHref="/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="midwest+icrate+dog+crate"
            />

            <ReviewCard
              id="impact"
              badge="Best Heavy Duty — Escape Artists"
              name="Impact High Anxiety Dog Crate"
              subtitle="Aircraft-grade aluminum · Escape-proof · Lifetime warranty"
              score={9.4}
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
              ctaText="Shop Impact Crates →"
              ctaHref="/go/amazon-brand/impact+high+anxiety+dog+crate?s=reviews-best-dog-crates"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="impact+high+anxiety+dog+crate"
            />

            <ReviewCard
              id="petmate"
              badge="Best Airline Crate"
              name="Petmate Sky Kennel"
              subtitle="IATA compliant · Live Animal ventilation · Most airlines accept"
              score={9.0}
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
              priceNote="By size"
              ctaText="Shop Petmate Sky Kennel →"
              ctaHref="/go/amazon-brand/petmate+sky+kennel?s=reviews-best-dog-crates"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="petmate+sky+kennel"
            />

            <ReviewCard
              id="frisco"
              badge="Best Furniture Style"
              name="Frisco Furniture Style Dog Crate"
              subtitle="Doubles as end table · Wooden exterior · Calm dogs only"
              score={8.3}
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
              ctaText="Shop Frisco Furniture Crates →"
              ctaHref="/go/chewy-brand/frisco+furniture+style+dog+crate?s=reviews-best-dog-crates"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="frisco+furniture+style+dog+crate"
            />
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
              { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
            ]} />
            <EmailCapture variant="sidebar" siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Practical guidance every Tuesday."
              source="review-dog-crates" />
          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
    </>
  )
}
