import type { Metadata } from 'next'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, Breadcrumb, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Pessoa Saddle Review 2025 — Gen X Pro, Legacy | Saddle.com',
  description: 'Complete Pessoa saddle review. Gen X Pro, Legacy, and Optimum compared using CSF reviewer notes and rider reports',
  path: '/reviews/pessoa-saddle-review',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Pessoa Saddle Review 2025',
  description: 'Pessoa Gen X Pro, Legacy, and Optimum compared using CSF reviewer notes and published rider reports.',
  url: 'https://saddle.com/reviews/pessoa-saddle-review',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const PICKS = [
  { label: 'Best Jumping', emoji: '🏆', name: 'Pessoa Gen X Pro', subtitle: '9.2 · Most close-contact geometry', href: '#gen-x' },
  { label: 'Best Versatile', emoji: '⭐', name: 'Pessoa Legacy', subtitle: '9.0 · CC jump + flatwork', href: '#legacy' },
  { label: 'Best Entry Level', emoji: '💰', name: 'Pessoa Optimum', subtitle: '8.6 · Best value Pessoa', href: '#optimum' },
]

export default function PessoaReviewPage() {
  return (
    <AffiliateDisclosure variant="banner">
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Brand Review</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
            Pessoa Saddle Review 2025 — Gen X Pro, Legacy & Optimum
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            Pessoa saddles are ridden by more Olympic show jumping medalists than any other brand. Three models compared using CSF reviewer notes and published rider reports — close contact geometry, feel, and fit.
          </p>
        </div>
      </div>

      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="saddle-com" items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }, { name: "Pessoa Saddle" }]} />

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The Pessoa Philosophy</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Pessoa builds saddles for one primary purpose: to put the rider as close to the horse as possible in a jumping position. Minimal bulk, forward flap, close contact. The result is exceptional feel of distance and precision at speed. If you primarily school flatwork or dressage, the Stubben Roxane is a better choice. If your primary discipline is show jumping and you want to feel every stride, Pessoa is the answer.</p>
            </div>

            <ScoreMethodology />
            <ReviewCard
              id="gen-x"
              badge="Best Show Jumping"
              badgeEmoji="🏆"
              name="Pessoa Gen X Pro"
              subtitle="Close contact · Forward flap · Top-level showjumping geometry"
              score={9.2}
              winner
              description={<div>
                <p>The Gen X Pro is the saddle that put Pessoa on the Olympic podium — ridden by multiple medalists across multiple Olympic cycles. The close-contact geometry is the most aggressive in production close-contact saddles: the forward flap angle places the rider&apos;s knee further forward than any competitor, and the minimal bulk between thigh and horse creates a feel of immediacy that serious jumping riders describe as transformative.</p>
                <p>This is not a subtle difference. In a Gen X Pro, you feel the horse&apos;s impulsion and engagement through your thigh in a way that is muted in bulkier alternatives. For riders competing at any level from amateur to grand prix, the feedback quality is genuinely better. The tradeoff: this geometry is specifically optimized for jumping position. Extended flatwork sessions are less comfortable than in saddles with a more neutral flap angle.</p>
              </div>}
              specs={[
                { label: 'Contact', value: 'Close contact', highlight: 'good' },
                { label: 'Flap', value: 'Forward-cut (most aggressive)', highlight: 'good' },
                { label: 'Olympic Credentials', value: 'Documented Olympic riders', highlight: 'good' },
                { label: 'Made In', value: 'Brazil' },
                { label: 'Flatwork Use', value: 'Possible but not optimized', highlight: 'warn' },
                { label: 'Resale', value: 'Strong in jumping market' },
              ]}
              pros={['Among the closest-contact geometry in the close-contact category', 'Top-level showjumping pedigree', 'Exceptional feel at speed', 'Strong resale in jumping market', 'Multiple fit options (narrow to wide tree)']}
              cons={['Less suitable for extended flatwork/dressage', 'Brazilian leather needs more conditioning than German', 'Premium price for a single-discipline saddle']}
              price="$2,400–$3,200"
              priceNote="Used: $900–$1,800"
              ctaText="Find a Pessoa Dealer →"
              ctaHref="https://pessoaequestrian.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="pessoa-gen-x-pro"
            />

            <ReviewCard
              id="legacy"
              badge="Best All-Round Jumping"
              badgeEmoji="⭐"
              name="Pessoa Legacy"
              subtitle="Close contact · Slightly more versatile flap · Better for flatwork"
              score={9.0}
              description={<p>The Legacy is the Gen X Pro with a marginally less aggressive flap angle — still firmly in close-contact territory, but usable for flatwork without the restriction that makes extended schooling in the Gen X Pro uncomfortable. For event riders who want Pessoa close-contact feel across all three phases, or for riders who school significantly more flatwork than they jump, the Legacy is the correct choice within the Pessoa range. Performance over fences is nearly identical to the Gen X Pro in published reviews and reseller fitter notes; the difference is in daily schooling comfort.</p>}
              specs={[
                { label: 'Contact', value: 'Close contact', highlight: 'good' },
                { label: 'Flap', value: 'Forward-cut (slightly less aggressive)' },
                { label: 'Versatility', value: 'Jumping + flatwork', highlight: 'good' },
                { label: 'Vs Gen X Pro', value: 'More flatwork-friendly' },
              ]}
              pros={['Close-contact jumping geometry', 'More versatile than Gen X Pro', 'Good for event riders', 'Slightly lighter weight than Gen X']}
              cons={['Less precise close-contact than Gen X Pro at speed', 'Not a dressage saddle']}
              price="$2,200–$3,000"
              priceNote="Used: $800–$1,600"
              ctaText="Find a Pessoa Dealer →"
              ctaHref="https://pessoaequestrian.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="pessoa-legacy"
            />

            <ReviewCard
              id="optimum"
              badge="Best Entry Level Pessoa"
              badgeEmoji="💰"
              name="Pessoa Optimum"
              subtitle="Best value Pessoa · Good CC geometry · Lower price entry"
              score={8.6}
              description={<p>The Optimum is the correct starting point for riders who want the Pessoa close-contact experience at a lower price. Build quality is noticeably less refined than the Gen X Pro or Legacy — the leather requires more conditioning, and the panel construction is less supple out of the box. The geometry remains distinctly Pessoa: forward flap, close contact, good feel at speed. For amateur riders competing at lower levels or those who want to try the Pessoa philosophy before committing to a flagship model, the Optimum is a reasonable entry point. Used Optimum saddles in good condition are particularly good value.</p>}
              specs={[
                { label: 'Contact', value: 'Close contact' },
                { label: 'Price', value: 'Lower than flagship', highlight: 'good' },
                { label: 'Build Quality', value: 'Entry-level (vs flagship)' },
                { label: 'Geometry', value: 'Pessoa forward-cut' },
              ]}
              pros={['Pessoa geometry at lower price', 'Good entry to the brand', 'Usable for jumping and some flatwork']}
              cons={['Significantly less refined than Gen X or Legacy', 'Leather needs more conditioning', 'Less panel quality']}
              price="$1,200–$1,800"
              priceNote="Used: $500–$900"
              ctaText="Find a Pessoa Dealer →"
              ctaHref="https://pessoaequestrian.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="pessoa-optimum"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Pessoa Quick Reference</div>
              {[['Gen X Pro', 'Max close contact', '9.2'], ['Legacy', 'CC + flatwork', '9.0'], ['Optimum', 'Entry level', '8.6']].map(([m, d, s]) => (
                <div key={m} className="py-2 border-b border-brand-border last:border-0 flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold text-brand-dark">{m}</div>
                    <div className="text-2xs text-brand-text-light">{d}</div>
                  </div>
                  <div className="text-sm font-bold text-brand-primary">{s}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Reviews" links={[
              { label: 'Best English Saddles 2025', href: '/reviews/best-english-saddles' },
              { label: 'Stubben Saddle Review', href: '/reviews/stubben-saddle-review' },
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Reviews and market intelligence." source="review-pessoa" />
          </aside>
        </div>
      </div>
    </AffiliateDisclosure>
  )
}
