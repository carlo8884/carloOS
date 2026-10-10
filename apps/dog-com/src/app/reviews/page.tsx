import { HopDisclosure } from '../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, ShopCtas, StockImage, CrossPortfolioCard, DirectoryPlacesCta, HubSearch, HubJumpNav } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { crossSiteHref } from '@carloOS/config'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Product Reviews 2026 — Ranked & Compared | Dog.com', description: 'Dog product reviews with honest editorial criteria. Pet insurance, dog food, flea prevention, beds, crates — ranked with honest editorial criteria.', path: '/reviews' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Reviews', url: 'https://dog.com/reviews' },
  ],
})

const REVIEW_GROUPS = [
  { id: 'dog-reviews-food', label: 'Food', intro: 'Dry food, life-stage foods, the slow feeder bowl, and the fresh-versus-kibble page.' },
  { id: 'dog-reviews-prevention', label: 'Prevention', intro: 'Flea, tick, and heartworm pages.' },
  { id: 'dog-reviews-housing', label: 'Housing', intro: 'Crate reviews and the crate comparisons.' },
  { id: 'dog-reviews-walking', label: 'Walking', intro: 'Harness reviews and the clip comparisons.' },
  { id: 'dog-reviews-comfort', label: 'Comfort', intro: 'Bed reviews and the orthopedic comparison.' },
  { id: 'dog-reviews-dental', label: 'Dental', intro: 'Dental chew pages. They do not replace brushing.' },
  { id: 'dog-reviews-joints', label: 'Joints', intro: 'Joint supplement pages and the Cosequin comparison.' },
  { id: 'dog-reviews-tracking', label: 'Tracking', intro: 'The GPS tracker review and the Fi versus Tractive comparison.' },
  { id: 'dog-reviews-season', label: 'Season', intro: 'Holiday feeding pages that point at guides already on the site.' },
  { id: 'dog-reviews-insurance', label: 'Insurance', intro: 'The insurance comparison is on Vets.co.' },
]

const REVIEWS = [
  { title: 'Best Pet Insurance 2026', desc: 'Trupanion, Healthy Paws, Embrace ranked by published coverage terms and exclusions', href: crossSiteHref('vets-co', '/reviews/best-pet-insurance'), badge: 'Most Important', group: 'dog-reviews-insurance' },
  { title: 'Best Dry Dog Food 2026', desc: 'Royal Canin, Purina Pro Plan, Hill\'s ranked by WSAVA compliance', href: '/reviews/best-dry-dog-food', badge: 'Nutrition', group: 'dog-reviews-food' },
  { title: 'Best Flea & Tick Prevention 2026', desc: 'Simparica Trio, Bravecto, NexGard — efficacy and safety compared', href: '/reviews/best-flea-tick-prevention', badge: 'Prevention', group: 'dog-reviews-prevention' },
  { title: 'Best Dog Beds 2026', desc: 'Orthopedic, elevated, and washable beds compared on foam quality, clinical data, and durability', href: '/reviews/best-dog-beds', badge: 'Comfort', group: 'dog-reviews-comfort' },
  { title: 'Best Dog Crates 2026', desc: 'Wire, heavy duty, airline-approved, and furniture style ranked', href: '/reviews/best-dog-crates', badge: 'Housing', group: 'dog-reviews-housing' },
  { title: 'Best Dog Food for Sensitive Stomach 2026', desc: 'Purina Pro Plan Sensitive, Hill\'s Sensitive Stomach, Royal Canin Digestive Care ranked', href: '/reviews/best-dog-food-sensitive-stomach', group: 'dog-reviews-food' },
  { title: 'Best Puppy Food 2026', desc: 'WSAVA-compliant puppy foods ranked for large breed, small breed, and all sizes', href: '/reviews/best-dog-food-for-puppies', group: 'dog-reviews-food' },
  { title: 'Best Slow Feeder Bowls for Dogs 2026', desc: 'Anti-bloat slow feeder bowls ranked for large breed and deep-chested dogs', href: '/reviews/best-slow-feeder-bowls', group: 'dog-reviews-food' },
  { title: 'Best Dental Chews for Dogs 2026', desc: 'VOHC-accepted dental chews — Greenies, Virbac CET, Whimzees ranked', href: '/reviews/best-dental-chews', group: 'dog-reviews-dental' },
  { title: 'Best Joint Supplements for Dogs 2026', desc: 'Cosequin, Dasuquin, and other glucosamine/chondroitin supplements ranked', href: '/reviews/best-joint-supplements', group: 'dog-reviews-joints' },
  { title: 'Best Dog GPS Trackers 2026', desc: 'Fi Series 3+ is the current collar. Tractive is the budget pick. Whistle shut down on August 31, 2025.', href: '/reviews/best-dog-gps-tracker', group: 'dog-reviews-tracking' },
  { title: 'Best Large Breed Dog Food 2026', desc: 'WSAVA-compliant foods for 50+ lb dogs — Royal Canin, Purina Pro Plan ranked', href: '/reviews/best-large-breed-dog-food', group: 'dog-reviews-food' },
  { title: 'Best Senior Dog Food 2026', desc: 'Purina Pro Plan Bright Mind, Hill\'s Science Diet Senior compared', href: '/reviews/best-dog-food-senior', group: 'dog-reviews-food' },
  { title: 'Best Dog Harnesses 2026', desc: 'Front-clip, back-clip, and escape-proof harnesses ranked by type', href: '/reviews/best-dog-harnesses', group: 'dog-reviews-walking' },
  { title: 'Best Dog Food for Small Breeds 2026', desc: 'WSAVA-compliant small breed foods — Royal Canin, Purina Pro Plan, Hill\'s ranked', href: '/reviews/best-dog-food-small-breed', group: 'dog-reviews-food' },
  { title: 'Best Heartworm Prevention for Dogs 2026', desc: 'Heartgard Plus, Interceptor Plus, Simparica Trio compared for heartworm prevention', href: '/reviews/best-heartworm-prevention', group: 'dog-reviews-prevention' },
  { title: 'Is Fresh Dog Food Worth It? Fresh vs Kibble', desc: 'A calibrated buyer\'s guide to fresh and gently-cooked food vs kibble and raw — cost, nutrition, safety, and how to judge a brand', href: '/reviews/fresh-dog-food-worth-it', badge: '🆕 New', group: 'dog-reviews-food' },
  { title: 'Best Puppy Crate for House-Training', desc: 'The wire crate with a divider, and the crates that are the wrong puppy purchase', href: '/reviews/best-puppy-crate-guide', badge: 'Housing', group: 'dog-reviews-housing' },
  { title: 'Easy Walk vs Front Range by Clip', desc: 'Front-clip Easy Walk, two-clip Front Range, or back-clip Julius-K9', href: '/reviews/front-clip-vs-back-clip-guide', badge: 'Walking', group: 'dog-reviews-walking' },
  { title: 'Big Barker vs Casper', desc: '7-inch orthopedic foam for a large arthritic dog, or a machine-washable cover', href: '/reviews/big-barker-vs-casper-guide', badge: 'Comfort', group: 'dog-reviews-comfort' },
  { title: 'Greenies vs Whimzees', desc: 'VOHC plaque and tartar, or a plant-based chew. Neither replaces brushing', href: '/reviews/greenies-vs-whimzees-guide', badge: 'Dental', group: 'dog-reviews-dental' },
  { title: 'MidWest iCrate vs Impact', desc: 'Divider wire for house training, or aluminum when the dog already defeats wire', href: '/reviews/icrate-vs-impact-guide', badge: 'Housing', group: 'dog-reviews-housing' },
  { title: 'Royal Canin vs Pro Plan', desc: 'Both meet the WSAVA bar on the dry-food review. Royal Canin is the research pick; Pro Plan is the lower bag price', href: '/reviews/royal-canin-vs-pro-plan-guide', badge: 'Nutrition', group: 'dog-reviews-food' },
  { title: 'Cosequin vs Dasuquin', desc: 'Glucosamine and chondroitin, or the same base plus ASU. Scores are the ones on the joint review', href: '/reviews/cosequin-vs-dasuquin-guide', badge: 'Joints', group: 'dog-reviews-joints' },
  { title: 'Fi Series 3 vs Tractive', desc: 'Three-month battery and escape alerts, or the lowest printed monthly fee. Scores are the ones on the GPS review', href: '/reviews/fi-vs-tractive-guide', badge: 'Tracking', group: 'dog-reviews-tracking' },
  { title: 'Outward Hound vs Northmate', desc: 'A maze slow bowl, or a flat grass feeder that cannot tip. Scores are the ones on the slow-feeder review', href: '/reviews/outward-hound-vs-northmate-guide', badge: 'Nutrition', group: 'dog-reviews-food' },
  { title: 'Holiday Scraps and a Locking Trash Can', desc: 'The pancreatitis page already names turkey skin and ham fat. The button below is the locking can on that page', href: '/reviews/holiday-scraps-trash-can-guide', badge: 'Season', group: 'dog-reviews-season' },
  { title: 'Holiday Chocolate and the Toxicity Calculator', desc: 'Any ingestion is a call. The button below is the first-aid kit the calculator page already links', href: '/reviews/holiday-chocolate-calculator-guide', badge: 'Season', group: 'dog-reviews-season' },
  { title: 'November and December Dog Gifts', desc: 'Chews, bowls, harnesses, a crate, a bed, and a tracker, grouped by the price bands already on those cards', href: '/reviews/november-december-gift-guide', badge: 'Season', group: 'dog-reviews-season' },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog.com Product & Service Reviews',
  numberOfItems: REVIEWS.length,
  itemListElement: REVIEWS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.title,
    url: r.href.startsWith('http') ? r.href : `https://dog.com${r.href}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function DogReviewsPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Product Reviews</span></div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Dog Product Reviews 2026</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Editorially assessed reviews with honest criteria — we rank what actually works, not what has the best marketing budget.</p>
      </div>
      <div className="px-container-sm sm:px-container pt-8">
        <div className="max-w-content-wide mx-auto">
          <StockImage manifestKey="dog-com:category-reviews" aspect="16:9" variant="wide" priority />
        </div>
      </div>

      <div id="dog-reviews-list">
      <div className="px-container-sm sm:px-container py-12">
        <div className="max-w-content-wide mx-auto">
          <HubSearch listId="dog-reviews-list" total={REVIEWS.length} noun="reviews" />
          <HubJumpNav groups={REVIEW_GROUPS} />
        </div>
        <div className="max-w-content-wide mx-auto">
          {REVIEW_GROUPS.map((group) => (
            <section key={group.id} id={group.id} data-hub-group className="mb-10 scroll-mt-24">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-2">{group.label}</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4 max-w-2xl">{group.intro}</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {REVIEWS.filter((r) => r.group === group.id).map((r) => (
                  <Link key={r.href} href={r.href} data-hub-item data-title={r.title} data-topic={`${r.badge ?? ''} ${group.label} ${r.desc}`} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200">
                    {r.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.badge}</div>}
                    <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
                    <div className="text-xs text-brand-text-light leading-relaxed">{r.desc}</div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-brand-text-light mb-2">Rankings are editorially independent.</p>
          <Link href="/editorial-standards" className="text-xs font-semibold text-brand-primary no-underline hover:underline">Read our editorial standards →</Link>
        </div>
      </div>
      {/* agent1-browse-all-start */}
      <section data-hub-group className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Reviews</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="best-dental-chews" href="/reviews/best-dental-chews" data-hub-item data-hub-count="off" data-title="Best Dental Chews" data-topic="Dental Best Dental Chews for Dogs" className="text-sm text-brand-primary no-underline hover:underline">Best Dental Chews</Link>
        <Link key="best-dog-beds" href="/reviews/best-dog-beds" data-hub-item data-hub-count="off" data-title="Best Dog Beds" data-topic="Comfort Best Dog Beds" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Beds</Link>
        <Link key="best-dog-crates" href="/reviews/best-dog-crates" data-hub-item data-hub-count="off" data-title="Best Dog Crates" data-topic="Housing Best Dog Crates" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Crates</Link>
        <Link key="best-dog-food-for-puppies" href="/reviews/best-dog-food-for-puppies" data-hub-item data-hub-count="off" data-title="Best Dog Food For Puppies" data-topic="Best Puppy Food" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Food For Puppies</Link>
        <Link key="best-dog-food-senior" href="/reviews/best-dog-food-senior" data-hub-item data-hub-count="off" data-title="Best Dog Food Senior" data-topic="Best Senior Dog Food" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Food Senior</Link>
        <Link key="best-dog-food-sensitive-stomach" href="/reviews/best-dog-food-sensitive-stomach" data-hub-item data-hub-count="off" data-title="Best Dog Food Sensitive Stomach" data-topic="Best Dog Food for Sensitive Stomach" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Food Sensitive Stomach</Link>
        <Link key="best-dog-food-small-breed" href="/reviews/best-dog-food-small-breed" data-hub-item data-hub-count="off" data-title="Best Dog Food Small Breed" data-topic="Best Dog Food for Small Breeds" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Food Small Breed</Link>
        <Link key="best-dog-gps-tracker" href="/reviews/best-dog-gps-tracker" data-hub-item data-hub-count="off" data-title="Best Dog Gps Tracker" data-topic="Best Dog GPS Trackers" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Gps Tracker</Link>
        <Link key="best-dog-harnesses" href="/reviews/best-dog-harnesses" data-hub-item data-hub-count="off" data-title="Best Dog Harnesses" data-topic="Walking Best Dog Harnesses" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Harnesses</Link>
        <Link key="best-dry-dog-food" href="/reviews/best-dry-dog-food" data-hub-item data-hub-count="off" data-title="Best Dry Dog Food" data-topic="Nutrition Best Dry Dog Food" className="text-sm text-brand-primary no-underline hover:underline">Best Dry Dog Food</Link>
        <Link key="best-flea-tick-prevention" href="/reviews/best-flea-tick-prevention" data-hub-item data-hub-count="off" data-title="Best Flea Tick Prevention" data-topic="Prevention Best Flea and Tick Prevention" className="text-sm text-brand-primary no-underline hover:underline">Best Flea Tick Prevention</Link>
        <Link key="best-heartworm-prevention" href="/reviews/best-heartworm-prevention" data-hub-item data-hub-count="off" data-title="Best Heartworm Prevention" data-topic="Best Heartworm Prevention for Dogs" className="text-sm text-brand-primary no-underline hover:underline">Best Heartworm Prevention</Link>
        <Link key="best-joint-supplements" href="/reviews/best-joint-supplements" data-hub-item data-hub-count="off" data-title="Best Joint Supplements" data-topic="Best Joint Supplements for Dogs" className="text-sm text-brand-primary no-underline hover:underline">Best Joint Supplements</Link>
        <Link key="best-large-breed-dog-food" href="/reviews/best-large-breed-dog-food" data-hub-item data-hub-count="off" data-title="Best Large Breed Dog Food" data-topic="Best Large Breed Dog Food" className="text-sm text-brand-primary no-underline hover:underline">Best Large Breed Dog Food</Link>
        <Link key="best-pet-insurance" href={crossSiteHref('vets-co', '/reviews/best-pet-insurance')} data-hub-item data-hub-count="off" data-title="Best Pet Insurance" data-topic="Most Important Best Pet Insurance" className="text-sm text-brand-primary no-underline hover:underline">Best Pet Insurance</Link>
        <Link key="best-slow-feeder-bowls" href="/reviews/best-slow-feeder-bowls" data-hub-item data-hub-count="off" data-title="Best Slow Feeder Bowls" data-topic="Best Slow Feeder Bowls for Dogs" className="text-sm text-brand-primary no-underline hover:underline">Best Slow Feeder Bowls</Link>
        <Link key="fresh-dog-food-worth-it" href="/reviews/fresh-dog-food-worth-it" data-hub-item data-hub-count="off" data-title="Fresh Dog Food Worth It" data-topic="Is Fresh Dog Food Worth It" className="text-sm text-brand-primary no-underline hover:underline">Fresh Dog Food Worth It</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">Related supplies</h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">Amazon search links open a search for a product this page discusses. They are not a ranked product list and they do not replace veterinary care.</p>

        <div className="max-w-content-wide mt-6">
          <HopDisclosure siteId="dog-com" href="/go/amazon-brand/royal+canin+dog+food?s=reviews-hub" />
        </div>

        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop related supplies
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links open a search for a product this page discusses. They are not a ranked product list and they do not replace veterinary care.</p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/royal+canin+dog+food?s=reviews-hub"
              amazonLabel="Browse Royal Canin dog food on Amazon →"
            />
          </div>
        </div>
      </section>

      <DirectoryPlacesCta listings={listings} noun="licensed dog professionals" />
      <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="footer" />
</>
  </>
  )
}
