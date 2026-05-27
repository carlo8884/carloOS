import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dog Harnesses 2025 — Front-Clip, Back-Clip | Dog.com', description: 'Best dog harnesses ranked by type: front-clip for pullers, back-clip for calm walkers, and escape-proof for determined dogs.', path: '/reviews/best-dog-harnesses', category: 'Equipment Reviews', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dog Harnesses 2025', description: 'Front-clip, back-clip, and escape-proof harnesses ranked.', url: 'https://dog.com/reviews/best-dog-harnesses', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const easyWalkSchema = buildProductSchema({ name: 'PetSafe Easy Walk Harness', description: 'Front-clip harness that redirects pullers without pain. Best no-pull harness.', url: 'https://petsafe.net', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const ruffwearSchema = buildProductSchema({ name: 'Ruffwear Front Range Harness', description: 'Premium two-clip hiking and outdoor harness with padded chest piece.', url: 'https://ruffwear.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, easyWalkSchema, ruffwearSchema)

const PICKS = [
  { label: 'Best No-Pull', emoji: '🏆', name: 'PetSafe Easy Walk', subtitle: 'Front-clip · Redirects pulling · No pain', href: '#easy-walk' },
  { label: 'Best Outdoor', emoji: '🥾', name: 'Ruffwear Front Range', subtitle: 'Two-clip · Padded · Hiking-rated', href: '#ruffwear' },
  { label: 'Best Escape-Proof', emoji: '🔒', name: 'Julius-K9 IDC Powerharness', subtitle: 'Heavy-duty · Escape-resistant · Velcro patches', href: '#julius' },
  { label: 'Best for Puppies', emoji: '🐾', name: 'PetSafe Sure-Fit', subtitle: 'Adjustable · Grows with puppy', href: '#puppy' },
]

export default function BestDogHarnessesPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🐕 Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dog Harnesses 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">The right harness depends on why you need it — pulling management, outdoor activity, or escape prevention. These are three fundamentally different tools.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Dog Harnesses</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Front-Clip vs Back-Clip</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Front-clip harnesses attach the leash at the dog's chest — when the dog pulls forward, the leash redirects them to the side, interrupting the pulling motion without pain. Back-clip harnesses attach at the back — they allow full forward movement and are appropriate for dogs that already walk well on leash. For pullers: front-clip only.</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="easy-walk" badge="Best No-Pull" badgeEmoji="🏆" name="PetSafe Easy Walk Harness" subtitle="Front-clip · Martingale loop · Immediate pulling reduction" score={9.3} winner
              description={<p>The Easy Walk is the most widely recommended front-clip harness by trainers and veterinary behaviorists. The martingale loop at the chest creates gentle pressure when the dog pulls — the directional correction redirects forward momentum to the side without pain, choke, or discomfort. Effectiveness is immediate in most dogs — pulling behavior reduces significantly within the first walk. Not suitable for dogs with existing shoulder or elbow issues (front-clip pressure can aggravate). Available at all pet stores, easily adjustable, machine washable.</p>}
              specs={[{ label: 'Clip position', value: 'Front-clip (chest)', highlight: 'good' }, { label: 'Mechanism', value: 'Martingale redirection', highlight: 'good' }, { label: 'Best for', value: 'Pullers, reactive walkers' }, { label: 'Price', value: 'Under $30', highlight: 'good' }]}
              pros={['Immediate pulling reduction', 'Affordable', 'Widely available', 'Trainer and behaviorist recommended', 'No pain mechanism']}
              cons={['Not for dogs with shoulder issues', 'Can rotate on small barrel-chested breeds', 'Needs correct fit to work']}
              price="$20–30"
              ctaText="Shop PetSafe Easy Walk →"
              ctaHref="https://www.chewy.com/s?query=petsafe+easy+walk+harness"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="petsafe-easy-walk"
            />
            <ReviewCard id="ruffwear" badge="Best Outdoor" badgeEmoji="🥾" name="Ruffwear Front Range Harness" subtitle="Two-clip (front + back) · Padded chest and belly · Reflective · Hiking-rated" score={9.2}
              description={<p>Ruffwear builds outdoor gear for dogs and the Front Range is their flagship harness — padded chest piece, aluminum V-ring at the back for normal walking, and a leash attachment loop at the front for pulling management. The padding is meaningful for long hiking days. Reflective trim for low-light visibility. Two leash attachment points allow switching between pulling management (front) and general walking (back). Built to last — Ruffwear gear is well-constructed with quality hardware. More expensive than the PetSafe Easy Walk but significantly more durable for active outdoor use.</p>}
              specs={[{ label: 'Clips', value: 'Front + back (two-clip)', highlight: 'good' }, { label: 'Padding', value: 'Padded chest and belly', highlight: 'good' }, { label: 'Durability', value: 'Outdoor/hiking rated', highlight: 'good' }, { label: 'Reflective', value: 'Yes' }]}
              pros={['Two-clip versatility', 'Padded for long wear', 'Excellent build quality', 'Reflective trim', 'Best outdoor harness tested']}
              cons={['Expensive ($40-55)', 'Overkill for casual walkers', 'Bulkier than minimalist options']}
              price="$40–55"
              ctaText="Shop Ruffwear Front Range →"
              ctaHref="https://www.chewy.com/s?query=ruffwear+front+range+harness"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="ruffwear-front-range"
            />
            <ReviewCard id="julius" badge="Best Escape-Proof" badgeEmoji="🔒" name="Julius-K9 IDC Powerharness" subtitle="Heavy-duty stitching · Multiple adjustment points · Velcro ID patches" score={9.0}
              description={<p>For dogs that back out of or destroy harnesses — the Julius-K9 IDC Powerharness is the industry standard for escape prevention and durability. Used by working dogs internationally. The chest and back straps are wide and padded, multiple adjustment points allow precise fit, and the hardware is rated for the forces a large dog can generate. The Velcro side patches accept custom ID patches. Not a no-pull harness (back clip only) — its value is durability and escape resistance, not pulling management. For escape-prone dogs used alongside leash training.</p>}
              specs={[{ label: 'Escape resistance', value: 'Highest tested', highlight: 'good' }, { label: 'Construction', value: 'Heavy-duty, working-dog rated', highlight: 'good' }, { label: 'ID patches', value: 'Velcro — customizable' }, { label: 'Clip position', value: 'Back-clip only' }]}
              pros={['Best escape resistance available', 'Working-dog durability', 'Multiple adjustment points', 'ID patch capability', 'Handle on back']}
              cons={['Back-clip only — not for pullers', 'Heavy and bulky for small dogs', 'More expensive than casual alternatives']}
              price="$40–70"
              ctaText="Shop Julius-K9 →"
              ctaHref="https://www.amazon.com/s?k=julius+k9+idc+powerharness"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="julius-k9-idc"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Pulls on leash', 'PetSafe Easy Walk (front-clip)'], ['Outdoor/hiking', 'Ruffwear Front Range'], ['Escapes harnesses', 'Julius-K9 IDC'], ['Reactive dog', 'PetSafe Easy Walk + training'], ['General walking', 'Any back-clip fits']].map(([s, p]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {p}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Leash Reactivity', href: '/training/leash-reactivity' }, { label: 'Best Dog Crates', href: '/reviews/best-dog-crates' }, { label: 'Training Red Flags', href: '/training/training-red-flags' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Tips" subtitle="Practical guidance weekly." source="review-harnesses" />
          </aside>
        </div>
      </div>
    </>
  )
}
