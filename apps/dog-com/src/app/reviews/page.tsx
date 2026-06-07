import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Product Reviews 2025 — Ranked & Compared | Dog.com', description: 'Dog product reviews with honest editorial criteria. Pet insurance, dog food, flea prevention, beds, crates — ranked with honest editorial criteria.', path: '/reviews' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Reviews', url: 'https://dog.com/reviews' },
  ],
})


const REVIEWS = [
  { title: 'Best Pet Insurance 2025', desc: 'Trupanion, Healthy Paws, Embrace ranked by actual payout rates', href: '/reviews/best-pet-insurance', badge: 'Most Important' },
  { title: 'Best Dry Dog Food 2025', desc: 'Royal Canin, Purina Pro Plan, Hill\'s ranked by WSAVA compliance', href: '/reviews/best-dry-dog-food', badge: 'Nutrition' },
  { title: 'Best Flea & Tick Prevention 2025', desc: 'Simparica Trio, Bravecto, NexGard — efficacy and safety compared', href: '/reviews/best-flea-tick-prevention', badge: 'Prevention' },
  { title: 'Best Dog Beds 2025', desc: 'Orthopedic, elevated, and washable beds compared on foam quality, clinical data, and durability', href: '/reviews/best-dog-beds', badge: 'Comfort' },
  { title: 'Best Dog Crates 2025', desc: 'Wire, heavy duty, airline-approved, and furniture style ranked', href: '/reviews/best-dog-crates', badge: 'Housing' },
  { title: 'Best Dog Food for Sensitive Stomach 2025', desc: 'Purina Pro Plan Sensitive, Hill\'s Sensitive Stomach, Royal Canin Digestive Care ranked', href: '/reviews/best-dog-food-sensitive-stomach' },
  { title: 'Best Puppy Food 2025', desc: 'WSAVA-compliant puppy foods ranked for large breed, small breed, and all sizes', href: '/reviews/best-dog-food-for-puppies' },
  { title: 'Best Slow Feeder Bowls for Dogs 2025', desc: 'Anti-bloat slow feeder bowls ranked for large breed and deep-chested dogs', href: '/reviews/best-slow-feeder-bowls' },
  { title: 'Best Dental Chews for Dogs 2025', desc: 'VOHC-accepted dental chews — Greenies, Virbac CET, Whimzees ranked', href: '/reviews/best-dental-chews' },
  { title: 'Best Joint Supplements for Dogs 2025', desc: 'Cosequin, Dasuquin, and other glucosamine/chondroitin supplements ranked', href: '/reviews/best-joint-supplements' },
  { title: 'Best Dog GPS Trackers 2025', desc: 'Fi Series 3, Whistle Go Explore, and Tractive ranked for accuracy and battery life', href: '/reviews/best-dog-gps-tracker' },
  { title: 'Best Large Breed Dog Food 2025', desc: 'WSAVA-compliant foods for 50+ lb dogs — Royal Canin, Purina Pro Plan ranked', href: '/reviews/best-large-breed-dog-food' },
  { title: 'Best Senior Dog Food 2025', desc: 'Purina Pro Plan Bright Mind, Hill\'s Science Diet Senior compared', href: '/reviews/best-dog-food-senior' },
  { title: 'Best Dog Harnesses 2025', desc: 'Front-clip, back-clip, and escape-proof harnesses ranked by type', href: '/reviews/best-dog-harnesses' },
  { title: 'Best Dog Food for Small Breeds 2025', desc: 'WSAVA-compliant small breed foods — Royal Canin, Purina Pro Plan, Hill\'s ranked', href: '/reviews/best-dog-food-small-breed' },
  { title: 'Best Heartworm Prevention for Dogs 2025', desc: 'Heartgard Plus, Interceptor Plus, Simparica Trio compared for heartworm prevention', href: '/reviews/best-heartworm-prevention' },
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
    url: `https://dog.com${r.href}`,
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
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Dog Product Reviews 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Editorially assessed reviews with honest criteria — we rank what actually works, not what has the best marketing budget.</p>
      </div>
      <div className="px-container-sm sm:px-container pt-8">
        <div className="max-w-content-wide mx-auto">
          <StockImage manifestKey="dog-com:category-reviews" aspect="16:9" variant="wide" priority />
        </div>
      </div>
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {REVIEWS.map(r => (
            <Link key={r.href} href={r.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200">
              {r.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.badge}</div>}
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
              <div className="text-xs text-brand-text-light leading-relaxed">{r.desc}</div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-brand-text-light mb-2">Affiliate Disclosure: We earn commissions on purchases. Rankings are editorially independent.</p>
          <Link href="/editorial-standards" className="text-xs font-semibold text-brand-primary no-underline hover:underline">Read our editorial standards →</Link>
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="dog-com" title="Free Dog Health Tips" subtitle="Product picks, health guides, and practical advice every Tuesday." source="reviews-index" ctaText="Subscribe Free" perks={['Editor picks', '⚠️ What to avoid', 'No spam']} />
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Reviews</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="best-dental-chews" href="/reviews/best-dental-chews" className="text-sm text-brand-primary no-underline hover:underline">Best Dental Chews</Link>
        <Link key="best-dog-beds" href="/reviews/best-dog-beds" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Beds</Link>
        <Link key="best-dog-crates" href="/reviews/best-dog-crates" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Crates</Link>
        <Link key="best-dog-food-for-puppies" href="/reviews/best-dog-food-for-puppies" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Food For Puppies</Link>
        <Link key="best-dog-food-senior" href="/reviews/best-dog-food-senior" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Food Senior</Link>
        <Link key="best-dog-food-sensitive-stomach" href="/reviews/best-dog-food-sensitive-stomach" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Food Sensitive Stomach</Link>
        <Link key="best-dog-food-small-breed" href="/reviews/best-dog-food-small-breed" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Food Small Breed</Link>
        <Link key="best-dog-gps-tracker" href="/reviews/best-dog-gps-tracker" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Gps Tracker</Link>
        <Link key="best-dog-harnesses" href="/reviews/best-dog-harnesses" className="text-sm text-brand-primary no-underline hover:underline">Best Dog Harnesses</Link>
        <Link key="best-dry-dog-food" href="/reviews/best-dry-dog-food" className="text-sm text-brand-primary no-underline hover:underline">Best Dry Dog Food</Link>
        <Link key="best-flea-tick-prevention" href="/reviews/best-flea-tick-prevention" className="text-sm text-brand-primary no-underline hover:underline">Best Flea Tick Prevention</Link>
        <Link key="best-heartworm-prevention" href="/reviews/best-heartworm-prevention" className="text-sm text-brand-primary no-underline hover:underline">Best Heartworm Prevention</Link>
        <Link key="best-joint-supplements" href="/reviews/best-joint-supplements" className="text-sm text-brand-primary no-underline hover:underline">Best Joint Supplements</Link>
        <Link key="best-large-breed-dog-food" href="/reviews/best-large-breed-dog-food" className="text-sm text-brand-primary no-underline hover:underline">Best Large Breed Dog Food</Link>
        <Link key="best-pet-insurance" href="/reviews/best-pet-insurance" className="text-sm text-brand-primary no-underline hover:underline">Best Pet Insurance</Link>
        <Link key="best-slow-feeder-bowls" href="/reviews/best-slow-feeder-bowls" className="text-sm text-brand-primary no-underline hover:underline">Best Slow Feeder Bowls</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>
  </>
  )
}
