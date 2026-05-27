import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, Breadcrumb} from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Stubben Saddle Review 2025 — Roxane, Portos | Saddle.com',
  description: 'Complete Stubben saddle review.',
  path: '/reviews/stubben-saddle-review',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Stubben Saddle Review 2025',
  description: 'Stubben Roxane, Portos, and Aramis compared using CSF reviewer notes and published rider reports.',
  url: 'https://saddle.com/reviews/stubben-saddle-review',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const PICKS = [
  { label: 'Best Dressage', emoji: '🏆', name: 'Stubben Roxane', subtitle: '9.5 · Best all-round dressage', href: '#roxane' },
  { label: 'Best Jumping', emoji: '⭐', name: 'Stubben Portos', subtitle: '9.1 · Forward-cut jumping', href: '#portos' },
  { label: 'Best All-Purpose', emoji: '🐴', name: 'Stubben Aramis', subtitle: '8.8 · Versatile eventing/AP', href: '#aramis' },
]

export default function StubbenReviewPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">CSF Reviewer Notes · SMS Reference · May 2025</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
            Stubben Saddle Review 2025 — Roxane, Portos & Aramis
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            Stubben has been making saddles in Germany since 1894. We reviewed their three flagship models — the Quick-Change tree system, leather quality, and who each model suits.
          </p>
          <div className="mt-4 text-xs text-white/30">Saddle.com Editorial · Updated May 2025</div>
        </div>
      </div>

      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="saddle-com" items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }, { name: "Stubben Saddle" }]} />

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The Stubben Advantage</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                Stubben&apos;s primary competitive advantage is the Quick-Change tree system — available on most models including the Roxane. Width adjustment (5 widths, narrow to extra-wide) is performed in seconds without tools. For horses whose toplines change seasonally, or riders who share a saddle between horses of different widths, this is genuinely valuable. It also extends the saddle&apos;s useful life significantly compared to fixed-tree alternatives.
              </p>
            </div>

            <ScoreMethodology />
            <ReviewCard
              id="roxane"
              badge="Best Dressage — Top Pick"
              badgeEmoji="🏆"
              name="Stubben Roxane"
              subtitle="Flagship dressage saddle · Quick-Change tree · Deep seat · German leather"
              score={9.5}
              winner
              description={<div>
                <p>The Roxane is Stubben&apos;s flagship dressage saddle and the benchmark by which other dressage saddles are measured. Quick-Change tree width adjustment, hand-finished German leather that wears exceptionally well, and a deep seat geometry developed over decades of feedback from FEI-level dressage riders.</p>
                <p>The panel construction is notably supple and conforms well to a range of back types. We have seen Roxanes fitting horses that other saddle brands struggled with. The leather develops a beautiful patina over years of care — a well-maintained 10-year-old Roxane often looks better than a new competitor saddle. Resale value is consistently strong, making the initial investment more reasonable amortized over the saddle&apos;s life.</p>
              </div>}
              specs={[
                { label: 'Tree', value: 'Quick-Change (5 widths)', highlight: 'good' },
                { label: 'Leather', value: 'Hand-finished German', highlight: 'good' },
                { label: 'Made In', value: 'Germany', highlight: 'good' },
                { label: 'Discipline', value: 'Dressage' },
                { label: 'Seat', value: 'Deep (dressage geometry)' },
                { label: 'Resale', value: 'Excellent', highlight: 'good' },
              ]}
              pros={['Quick-Change tree — adjusts in seconds', 'Best-in-class German leather', 'Excellent resale value', 'Panel fits wide range of horses', 'Available new and used market', 'CSF-documented excellent fit outcomes']}
              cons={['$3,200–4,500 new — significant investment', 'Deep seat not suitable for all riders/disciplines', 'Used market requires careful inspection (see buying guide)']}
              price="$3,200–$4,500 new"
              priceNote="Used: $1,200–$2,400"
              ctaText="Find a Stubben Dealer →"
              ctaHref="https://www.stubben.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="stubben-roxane"
            />

            <ReviewCard
              id="portos"
              badge="Best Jumping"
              badgeEmoji="⭐"
              name="Stubben Portos"
              subtitle="Show jumping · Forward-cut flap · Quick-Change tree"
              score={9.1}
              description={<p>The Portos is Stubben&apos;s jumping flagship — more forward-cut than the Roxane, designed for the two-point position and the demands of show jumping at any level. Same Quick-Change tree system as the Roxane. The forward flap geometry places the rider&apos;s knee at the correct angle for two-point work while maintaining enough flap surface for security. Where Pessoa is the choice for riders wanting minimal bulk, the Portos offers more structure and security — better for riders who prioritize stability over close contact.</p>}
              specs={[
                { label: 'Tree', value: 'Quick-Change', highlight: 'good' },
                { label: 'Flap', value: 'Forward-cut', highlight: 'good' },
                { label: 'Discipline', value: 'Show Jumping' },
                { label: 'Made In', value: 'Germany', highlight: 'good' },
                { label: 'Vs Pessoa', value: 'More structure, less close-contact' },
              ]}
              pros={['German quality at jumping orientation', 'Quick-Change tree', 'Good security and stability', 'Strong resale value']}
              cons={['More bulk than Pessoa Gen X for close-contact riders', 'Premium price']}
              price="$2,800–$4,200 new"
              priceNote="Used: $1,000–$2,000"
              ctaText="Find a Stubben Dealer →"
              ctaHref="https://www.stubben.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="stubben-portos"
            />

            <ReviewCard
              id="aramis"
              badge="Best All-Purpose"
              badgeEmoji="🐴"
              name="Stubben Aramis"
              subtitle="All-purpose · Eventing · Versatile flap geometry"
              score={8.8}
              description={<p>The Aramis is Stubben&apos;s answer for the rider who schools dressage but also wants to jump, event, or compete in hunter classes without owning two saddles. The flap geometry sits between the Roxane (straight) and Portos (forward) — allowing a functional two-point for jumping while maintaining enough seat for quality flatwork. It is not the best at either discipline — dedicated dressage or jumping saddles do each job better — but for the recreational rider or lower-level eventer who cannot justify two saddles, the Aramis is a well-built German option.</p>}
              specs={[
                { label: 'Tree', value: 'Quick-Change', highlight: 'good' },
                { label: 'Flap', value: 'Semi-forward (versatile)' },
                { label: 'Discipline', value: 'All-Purpose / Eventing' },
                { label: 'Made In', value: 'Germany', highlight: 'good' },
              ]}
              pros={['Versatile — flatwork and jumping', 'Quick-Change tree', 'German quality', 'Good resale value']}
              cons={['Not optimal for serious competition in either discipline', 'Premium price for an all-purpose saddle']}
              price="$2,400–$3,800 new"
              priceNote="Used: $900–$1,800"
              ctaText="Find a Stubben Dealer →"
              ctaHref="https://www.stubben.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="stubben-aramis"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Stubben Quick Reference</div>
              {[['Roxane', 'Deep dressage seat', '9.5'], ['Portos', 'Forward jumping', '9.1'], ['Aramis', 'Versatile AP', '8.8']].map(([m, d, s]) => (
                <div key={m} className="py-2 border-b border-brand-border last:border-0 flex justify-between">
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
              { label: 'Pessoa Saddle Review', href: '/reviews/pessoa-saddle-review' },
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="review-stubben" />
          </aside>
        </div>
      </div>
    </>
  )
}
