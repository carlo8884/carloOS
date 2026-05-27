import type { Metadata } from 'next'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Collegiate Saddle Review 2025 — Best Budget English Saddles | Saddle.com',
  description: 'Collegiate Convertible AP, Diploma, and Apprentice reviewed.',
  path: '/reviews/collegiate-saddle-review',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Collegiate Saddle Review 2025',
  description: 'Collegiate Convertible, Diploma, and Apprentice compared using CSF reviewer notes and published rider reports.',
  url: 'https://saddle.com/reviews/collegiate-saddle-review',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const PICKS = [
  { label: 'Best Collegiate', emoji: '🏆', name: 'Collegiate Convertible AP', subtitle: '8.4 · Adjustable gullet · Best value', href: '#convertible' },
  { label: 'Best for Jumping', emoji: '⭐', name: 'Collegiate Diploma', subtitle: '8.1 · Forward flap · CC geometry', href: '#diploma' },
  { label: 'Best Entry', emoji: '💰', name: 'Collegiate Apprentice', subtitle: '7.8 · Most affordable', href: '#apprentice' },
]

export default function CollegiateReviewPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Brand Review</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
            Collegiate Saddle Review 2025 — Best Budget English Saddles
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            Collegiate makes the most accessible English saddles in the market. A certified fitter reviews the Convertible AP, Diploma, and Apprentice — what you actually get at this price point.
          </p>
        </div>
      </div>

      <QuickPicks items={PICKS} />

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The Honest Context</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Collegiate saddles are the right choice for: recreational riders with modest budgets, a teenager&apos;s first saddle, horses that are still growing and will need a different saddle in 12–18 months, or riders who are not yet sure they will stay in the sport. For serious competition or long-term investment, look at used premium brand saddles (Stubben, Pessoa, Bates) in the same price range — they offer significantly better quality for comparable money on the used market.</p>
            </div>

            <ScoreMethodology />
            <ReviewCard
              id="convertible"
              badge="Best Collegiate — Most Value"
              badgeEmoji="🏆"
              name="Collegiate Convertible AP"
              subtitle="Adjustable gullet (5 widths) · CAIR panel option · Best Collegiate value"
              score={8.4}
              winner
              description={<div>
                <p>The Convertible AP is the flagship Collegiate and the most practical of their line. The adjustable gullet system (5 widths from narrow to wide, changed with a hex key included with the saddle) allows accommodation of different horse shapes without reflocking or a saddler visit — a meaningful practical advantage for the price range.</p>
                <p>Available in a synthetic/leather combination or full synthetic. The full synthetic version is particularly practical: machine washable numnah-facing surface, highly durable, no leather conditioning required. Fit outcomes are acceptable for horses with standard toplines; horses with unusual back shapes (very flat, very round, significant asymmetry) are harder to accommodate without professional panel adjustment.</p>
              </div>}
              specs={[
                { label: 'Gullet', value: '5-width adjustable', highlight: 'good' },
                { label: 'Material', value: 'Synthetic or synthetic/leather' },
                { label: 'Panel', value: 'Foam or CAIR option' },
                { label: 'Discipline', value: 'All-purpose' },
                { label: 'Price', value: 'Best value at this level', highlight: 'good' },
                { label: 'Used Resale', value: 'Low — but purchase price reflects this' },
              ]}
              pros={['Adjustable gullet — no saddler needed for minor width changes', 'Easy to clean synthetic option', 'Widely available and well-supported', 'Good for growing horses', 'Budget-friendly purchase price']}
              cons={['Leather quality significantly below premium brands', 'Limited resale value', 'Not for serious competition or horses with complex fitting needs']}
              price="$400–800"
              priceNote="Synthetic vs leather/synthetic"
              ctaText="Find a Collegiate Dealer →"
              ctaHref="https://www.collegiate.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="collegiate-convertible-ap"
            />

            <ReviewCard
              id="diploma"
              badge="Best for Jumping"
              badgeEmoji="⭐"
              name="Collegiate Diploma"
              subtitle="Forward-cut flap · Close contact oriented · Budget jumping"
              score={8.1}
              description={<p>The Diploma is Collegiate&apos;s jumping-oriented option — a more forward flap angle than the Convertible AP, designed for two-point position and jumping work. At this price point, it is a functional entry into close-contact jumping without the investment of a Pessoa or Stubben Portos. Build quality limitations are the same as all Collegiate saddles: the leather is entry-level and requires more conditioning, and the panel construction is less supple than premium alternatives. For pony club riders, beginner jumpers, or casual hunter/jumpers, the Diploma performs its job adequately.</p>}
              specs={[
                { label: 'Discipline', value: 'Jumping / Hunter' },
                { label: 'Flap', value: 'Forward-cut' },
                { label: 'Price', value: 'Budget' },
                { label: 'Vs Convertible AP', value: 'Better for jumping, less versatile' },
              ]}
              pros={['Forward-cut geometry for jumping', 'Accessible price', 'Good for learning jumping position']}
              cons={['Less versatile than AP for flatwork', 'Entry-level build quality', 'Not for serious competition']}
              price="$350–700"
              ctaText="Find a Collegiate Dealer →"
              ctaHref="https://www.collegiate.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="collegiate-diploma"
            />

            <ReviewCard
              id="apprentice"
              badge="Most Affordable Entry"
              badgeEmoji="💰"
              name="Collegiate Apprentice"
              subtitle="Lowest price entry · All-purpose · Basic fit"
              score={7.8}
              description={<p>The Apprentice is the most affordable English saddle from a recognizable brand — the correct choice when budget is the primary constraint. Build quality is the most basic of the Collegiate range: fixed tree with no adjustability, simpler panel construction, more entry-level leather. For a child&apos;s first saddle, a hack around the yard, or a temporary saddle while a better option is being sought, the Apprentice is functional. It is not a long-term or competition saddle, and it will not hold resale value.</p>}
              specs={[
                { label: 'Price', value: 'Most affordable', highlight: 'good' },
                { label: 'Tree', value: 'Fixed — no adjustability', highlight: 'warn' },
                { label: 'Best For', value: "Children's first saddle, casual riding" },
              ]}
              pros={['Lowest entry price from a known brand', 'Adequate for casual riding and beginners', 'Widely available']}
              cons={['Fixed tree — no width adjustability', 'Most basic build quality in range', 'Minimal resale value']}
              price="$200–450"
              ctaText="Find a Collegiate Dealer →"
              ctaHref="https://www.collegiate.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="collegiate-apprentice"
            />

            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mt-4">
              <h3 className="font-display font-bold text-brand-dark text-lg mb-3">Should You Buy New Collegiate or Used Premium?</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">At Collegiate&apos;s price range ($400–800 new), the used market for premium brands opens up significantly. A used Stubben or Bates in the $500–900 range offers significantly better leather quality, better panel construction, and stronger resale value than a new Collegiate. Before buying new Collegiate, check the used market — see our <a href="/guides/used-saddle-buying-guide" className="text-brand-primary">Used Saddle Buying Guide</a> for the inspection checklist.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">The exception: if the horse is still growing and will need a different saddle within 12–18 months, a new budget saddle (or a very cheap used one) may be more practical than investing in a quality used saddle that will no longer fit.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Collegiate vs Used Premium</div>
              <p className="text-xs text-brand-text-mid leading-relaxed">At $400–800, used Stubben and Bates are available. Premium used often beats new budget at this price point. Check used market before buying new Collegiate.</p>
              <a href="/guides/used-saddle-buying-guide" className="block mt-2 text-xs font-bold text-brand-primary no-underline hover:underline">Used saddle checklist →</a>
            </div>
            <RelatedLinks title="Related Reviews" links={[
              { label: 'Best English Saddles 2025', href: '/reviews/best-english-saddles' },
              { label: 'Stubben Saddle Review', href: '/reviews/stubben-saddle-review' },
              { label: 'Pessoa Saddle Review', href: '/reviews/pessoa-saddle-review' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Reviews and market intelligence." source="review-collegiate" />
          </aside>
        </div>
      </div>
    </>
  )
}
