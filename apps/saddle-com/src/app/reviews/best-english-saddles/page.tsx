import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best English Saddles 2025 — Dressage, Jumping | Saddle.com', description: 'We ranked the best English saddles by discipline — dressage, show jumping, all-purpose, and eventing. Stubben, Pessoa, Bates.', path: '/reviews/best-english-saddles', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best English Saddles 2025', description: 'Stubben, Pessoa, Bates, Collegiate — compared across disciplines using published reviewer notes and rider reports.', url: 'https://saddle.com/reviews/best-english-saddles', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const PICKS = [
  { label: 'Best Dressage', emoji: '🏆', name: 'Stubben Roxane', subtitle: '9.5 · Quick-Change · German leather', href: '#roxane' },
  { label: 'Best Jumping', emoji: '⭐', name: 'Pessoa Gen X Pro', subtitle: '9.2 · Close contact · Ridden at the top of the sport', href: '#gen-x' },
  { label: 'Best All-Purpose', emoji: '🐴', name: 'Bates Caprilli', subtitle: '9.0 · CAIR panels · Adjustable gullet', href: '#bates' },
  { label: 'Best Budget', emoji: '💰', name: 'Collegiate Convertible AP', subtitle: '8.4 · Adjustable · Under $800', href: '#collegiate' },
]

const productSchema0 = buildProductSchema({ name: 'Stubben Roxane', description: 'German-made dressage saddle with Quick-Change tree width adjustment.', url: 'https://stubben.com', imageUrl: '', ratingValue: 9.5, reviewCount: 1 })
const productSchema1 = buildProductSchema({ name: 'Pessoa Gen X Pro', description: 'Close-contact show jumping saddle with top-level showjumping pedigree.', url: 'https://pessoaequestrian.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1)

export default function BestEnglishSaddlesPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer's Guide</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best English Saddles 2025</h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">The right English saddle depends entirely on your discipline — a dressage saddle on a jumping horse is the wrong tool. Here&apos;s the top pick for each discipline, compared using CSF reviewer notes and published rider reports.</p>
        </div>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"><Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span><Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span><span className="text-brand-text-mid">Best English Saddles</span></nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <ScoreMethodology />
            <ReviewCard id="roxane" badge="Best Dressage" badgeEmoji="🏆" name="Stubben Roxane" subtitle="Deep seat · Quick-Change tree (5 widths) · Hand-finished German leather" score={9.5} winner
              description={<p>The Roxane is the benchmark dressage saddle — Quick-Change tree width adjustment, 130 years of German craftsmanship, and a deep seat geometry developed alongside FEI-level dressage riders. Panel construction is supple and fits a wider range of horses than most competitors. Resale value is excellent. See the <Link href="/reviews/stubben-saddle-review" className="text-brand-primary">full Stubben review →</Link></p>}
              specs={[{ label: 'Tree', value: 'Quick-Change (5 widths)', highlight: 'good' }, { label: 'Made In', value: 'Germany', highlight: 'good' }, { label: 'Discipline', value: 'Dressage' }, { label: 'Resale', value: 'Excellent', highlight: 'good' }]}
              pros={['Quick-Change tree', 'Best-in-class German leather', 'Strong resale value']} cons={['$3,200–4,500 new — premium investment']}
              price="$3,200–$4,500" ctaText="Find a Stubben Dealer →" ctaHref="https://stubben.com" ctaAffiliateProgram="sharesale" ctaAffiliateProduct="stubben-roxane" />
            <ReviewCard id="gen-x" badge="Best Show Jumping" badgeEmoji="⭐" name="Pessoa Gen X Pro" subtitle="Close contact · Forward flap · Top-level showjumping geometry · Minimal bulk" score={9.2}
              description={<p>The Gen X Pro is widely ridden at the top of show jumping, including by multiple Olympic medalists. Close-contact geometry — one of the most aggressive forward flaps in production close-contact saddles — puts the rider as close to the horse as possible at speed. Transformative feel for serious jumpers. See the <Link href="/reviews/pessoa-saddle-review" className="text-brand-primary">full Pessoa review →</Link></p>}
              specs={[{ label: 'Contact', value: 'Close contact', highlight: 'good' }, { label: 'Top-tier competition use', value: 'Documented Olympic riders', highlight: 'good' }, { label: 'Flatwork', value: 'Not optimized', highlight: 'warn' }]}
              pros={['Among the closest-contact geometry in the close-contact category', 'Top-level showjumping pedigree', 'Exceptional feel at speed']} cons={['Less suitable for extended flatwork', 'Premium price']}
              price="$2,400–$3,200" ctaText="Find a Pessoa Dealer →" ctaHref="https://pessoaequestrian.com" ctaAffiliateProgram="sharesale" ctaAffiliateProduct="pessoa-gen-x-pro" />
            <ReviewCard id="bates" badge="Best All-Purpose" badgeEmoji="🐴" name="Bates Caprilli All-Purpose" subtitle="CAIR panel system · Adjustable gullet · Eventing and AP riding" score={9.0}
              description={<p>The Bates Caprilli is the most practical all-purpose English saddle — the CAIR (Computer Aided Intelligent Ride) panel system uses air panels that conform to the horse&apos;s back and maintain consistent pressure. Adjustable gullet allows width changes without a saddler. Good for eventing, hunter, and recreational riding where one saddle must do multiple jobs.</p>}
              specs={[{ label: 'Panels', value: 'CAIR air-panel system', highlight: 'good' }, { label: 'Gullet', value: 'Adjustable', highlight: 'good' }, { label: 'Discipline', value: 'All-purpose / Eventing' }]}
              pros={['CAIR panels conform to horse\'s back', 'Adjustable gullet', 'Good versatility', 'Australian engineering quality']} cons={['CAIR panels can fail (require professional repair)', 'Less specialized than discipline-specific saddles']}
              price="$800–$2,000" ctaText="Find a Bates Dealer →" ctaHref="https://batessaddles.com" ctaAffiliateProgram="sharesale" ctaAffiliateProduct="bates-caprilli" />
            <ReviewCard id="collegiate" badge="Best Budget" badgeEmoji="💰" name="Collegiate Convertible AP" subtitle="Adjustable gullet · Under $800 · Best budget English option" score={8.4}
              description={<p>For recreational riders, growing horses, or those new to the sport — Collegiate&apos;s Convertible AP offers an adjustable gullet at an accessible price. Build quality is entry-level compared to Stubben or Pessoa, but functional. Used Stubben or Bates in this price range often offer better long-term value — see our buying guide. Full review: <Link href="/reviews/collegiate-saddle-review" className="text-brand-primary">Collegiate Saddle Review →</Link></p>}
              specs={[{ label: 'Gullet', value: 'Adjustable (5 widths)', highlight: 'good' }, { label: 'Price', value: 'Best in class', highlight: 'good' }, { label: 'Vs Used Premium', value: 'Check used market first', highlight: 'warn' }]}
              pros={['Adjustable gullet at low price', 'Good for growing horses', 'Widely available']} cons={['Entry-level build quality', 'Low resale value', 'Check used premium market before buying new']}
              price="$400–$800" ctaText="Find a Collegiate Dealer →" ctaHref="https://collegiate.com" ctaAffiliateProgram="sharesale" ctaAffiliateProduct="collegiate-convertible-ap" />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Discipline</div>
              {[['Dressage', 'Stubben Roxane'], ['Show Jumping', 'Pessoa Gen X Pro'], ['Eventing / All-Purpose', 'Bates Caprilli'], ['Budget / Recreational', 'Collegiate Convertible'], ['Budget (better option)', 'Used Stubben or Bates']].map(([d, p]) => (
                <div key={d} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{d}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {p}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Full Reviews" links={[{ label: 'Stubben Deep Dive', href: '/reviews/stubben-saddle-review' }, { label: 'Pessoa Deep Dive', href: '/reviews/pessoa-saddle-review' }, { label: 'Collegiate Review', href: '/reviews/collegiate-saddle-review' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Reviews and market intelligence." source="review-best-english" />
          </aside>
        </div>
      </div>
    </>
  )
}
