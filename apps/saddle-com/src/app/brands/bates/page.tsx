import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, Breadcrumb } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Bates Saddle Review 2025 — Caprilli, Innova, Elevation | Saddle.com',
  description: 'Complete Bates saddle review. CAIR air-panel system, EASY-CHANGE adjustable gullet, and the Caprilli, Innova, and Elevation lines compared.',
  path: '/brands/bates',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Bates Saddle Review 2025',
  description: 'Bates Caprilli, Innova, and Elevation reviewed. CAIR air panels, EASY-CHANGE gullet system, and the case for adjustable English saddles.',
  url: 'https://saddle.com/brands/bates',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-15T00:00:00Z',
  modifiedAt: '2025-05-15T00:00:00Z',
})

const PICKS = [
  { label: 'Best All-Purpose', emoji: '🐴', name: 'Bates Caprilli', subtitle: '9.0 · CAIR panels · The flagship AP', href: '#caprilli' },
  { label: 'Best Dressage', emoji: '🎖️', name: 'Bates Innova', subtitle: '8.8 · Mono-flap dressage · Excellent value', href: '#innova' },
  { label: 'Best Jumping', emoji: '⭐', name: 'Bates Elevation', subtitle: '8.7 · Close-contact jumping · Adjustable', href: '#elevation' },
]

export default function BatesReviewPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* HERO */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">CSF Reviewer Notes · Brand Profile · May 2025</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
            Bates Saddle Review 2025 — Caprilli, Innova & Elevation
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            Bates has been making saddles in Australia since 1934. The CAIR air-panel and EASY-CHANGE gullet systems make Bates the most practical English saddle on the market — here&apos;s the complete lineup, who each model suits, and the tradeoffs of the adjustable approach.
          </p>
          <div className="mt-4 text-xs text-white/30">Saddle.com Editorial · Updated May 2025</div>
        </div>
      </div>

      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="saddle-com" items={[{ name: 'Home', href: '/' }, { name: 'Brands', href: '/brands' }, { name: 'Bates' }]} />

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>

            {/* The Bates Advantage callout */}
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The Bates Advantage</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                Two technologies define Bates. <strong>CAIR (Computer Aided Intelligent Ride)</strong> replaces traditional wool flocking with sealed air panels that conform to the horse&apos;s back and self-equalize pressure during work. <strong>EASY-CHANGE</strong> is an adjustable gullet plate — owners can swap between five widths (Narrow to Extra Wide) in five minutes without a fitter. Together they make Bates uniquely suited to multi-horse riders, growing horses, and any situation where back shape changes seasonally. The tradeoff is that CAIR panels cannot be re-flocked the traditional way — when they fail, they require factory replacement.
              </p>
            </div>

            <ScoreMethodology />

            {/* Caprilli */}
            <ReviewCard
              id="caprilli"
              badge="Best All-Purpose — Top Pick"
              badgeEmoji="🐴"
              name="Bates Caprilli"
              subtitle="All-purpose · CAIR panels · EASY-CHANGE gullet · The Bates flagship"
              score={9.0}
              winner
              description={<div>
                <p>The Caprilli is Bates&apos; flagship and the most practical all-purpose English saddle on the market. Semi-forward flap geometry works for both flatwork and lower-level jumping; the CAIR air panels self-equalize across the horse&apos;s back; the EASY-CHANGE gullet means one saddle covers narrow to extra-wide horses without re-flocking.</p>
                <p>For the rider who owns one horse and competes recreationally — or for the rider who has multiple horses and cannot justify a saddle for each — the Caprilli is the rational choice. For dedicated competition in a single discipline at higher levels, a discipline-specific saddle from Stubben (dressage) or Pessoa (jumping) will outperform it. But for the 90% of riders who event, school, hack, and occasionally show, the Caprilli is the right tool.</p>
              </div>}
              specs={[
                { label: 'Tree', value: 'EASY-CHANGE (5 widths)', highlight: 'good' },
                { label: 'Panels', value: 'CAIR air panels', highlight: 'good' },
                { label: 'Flap', value: 'Semi-forward (versatile)' },
                { label: 'Made In', value: 'Australia', highlight: 'good' },
                { label: 'Discipline', value: 'All-Purpose / Hunter / Eventing' },
                { label: 'Resale', value: 'Strong', highlight: 'good' },
              ]}
              pros={['Adjustable gullet — no re-flocking on width changes', 'CAIR panels equalize pressure dynamically', 'Works across multiple disciplines', 'Solid Australian build quality', 'Strong resale market']}
              cons={['Not optimal for high-level dressage or 1.20m+ jumping', 'CAIR panels cannot be field-repaired — factory work only', 'Air panels firmer than wool — some riders prefer wool feel']}
              price="$1,200–$2,400 new"
              priceNote="Used: $600–$1,200"
              ctaText="Find a Bates Dealer →"
              ctaHref="https://www.batessaddles.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="bates-caprilli"
            />

            {/* Innova */}
            <ReviewCard
              id="innova"
              badge="Best Dressage"
              badgeEmoji="🎖️"
              name="Bates Innova"
              subtitle="Dressage · Mono-flap construction · CAIR panels · EASY-CHANGE gullet"
              score={8.8}
              description={<p>The Innova is Bates&apos; dressage flagship and one of the most accessibly priced mono-flap dressage saddles on the market. Mono-flap construction (a single layer of leather under the leg) puts the rider closer to the horse than a traditional flap-and-sweat-flap configuration — a feature usually reserved for $4K+ German and French dressage saddles. For developing dressage riders who want close contact at a sub-$2,500 price point, the Innova is the strongest value proposition in the category. At First and Second Level it is competitive; at FEI levels, riders typically move to Stubben Roxane, Custom Saddlery, or French bespoke.</p>}
              specs={[
                { label: 'Tree', value: 'EASY-CHANGE (5 widths)', highlight: 'good' },
                { label: 'Panels', value: 'CAIR air panels', highlight: 'good' },
                { label: 'Flap', value: 'Straight-cut dressage' },
                { label: 'Construction', value: 'Mono-flap', highlight: 'good' },
                { label: 'Discipline', value: 'Dressage (training through Third Level)' },
                { label: 'Made In', value: 'Australia', highlight: 'good' },
              ]}
              pros={['Mono-flap at accessible price', 'Adjustable gullet', 'Strong value below $2,500', 'CAIR conforms to horse\'s back']}
              cons={['Not equal to top-end German or French dressage saddles at FEI levels', 'CAIR panels can feel firm to riders accustomed to wool']}
              price="$1,800–$2,400 new"
              priceNote="Used: $700–$1,400"
              ctaText="Find a Bates Dealer →"
              ctaHref="https://www.batessaddles.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="bates-innova"
            />

            {/* Elevation */}
            <ReviewCard
              id="elevation"
              badge="Best Jumping"
              badgeEmoji="⭐"
              name="Bates Elevation"
              subtitle="Show jumping · Close-contact · Forward flap · CAIR panels"
              score={8.7}
              description={<p>The Elevation is Bates&apos; close-contact jumping saddle. Forward-cut flap, deeper seat than the Caprilli, and the same CAIR/EASY-CHANGE technology. At the recreational and lower-amateur level (cross-rails through 3&apos;6&quot;), the Elevation is a practical, well-built saddle at a price the Pessoa Gen X cannot match. Above 1.10m, professional and serious amateur jumpers usually choose Pessoa, CWD, or Antares for the closer-contact geometry. But for the rider competing in local hunter shows or schooling jumpers, the Elevation gives you adjustable fit, good security, and resale value without the $3K+ entry of premium jumping brands.</p>}
              specs={[
                { label: 'Tree', value: 'EASY-CHANGE (5 widths)', highlight: 'good' },
                { label: 'Panels', value: 'CAIR air panels', highlight: 'good' },
                { label: 'Flap', value: 'Forward-cut', highlight: 'good' },
                { label: 'Discipline', value: 'Hunter / Jumper (recreational–amateur)' },
                { label: 'Vs Pessoa Gen X', value: 'Less close-contact, more accessible price' },
                { label: 'Made In', value: 'Australia', highlight: 'good' },
              ]}
              pros={['Adjustable gullet for jumping rider with multiple horses', 'Good value vs Pessoa at recreational level', 'Forward flap appropriate for two-point work', 'CAIR conforms to back during landing impact']}
              cons={['Less close-contact than Pessoa Gen X Pro at the upper levels', 'Not the choice for elite jumping competition']}
              price="$1,800–$2,800 new"
              priceNote="Used: $800–$1,500"
              ctaText="Find a Bates Dealer →"
              ctaHref="https://www.batessaddles.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="bates-elevation"
            />

            {/* CAIR explainer */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-8">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-3">CAIR vs Traditional Wool Flocking — What You Should Know</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
                The CAIR system replaces wool flocking with two sealed air pillows. The air is shared dynamically across the panel, so pressure spikes (a moment of asymmetric weight, a horse shifting under saddle) are absorbed and redistributed rather than concentrated.
              </p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
                <strong>Benefits:</strong> No annual re-flocking. Self-equalizing pressure. Consistent feel out of the box. Lower long-term maintenance cost.
              </p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
                <strong>Drawbacks:</strong> Cannot be field-repaired or adjusted. A punctured CAIR panel must be sent to a Bates-certified workshop for replacement (typically $250–$500, several weeks turnaround). Riders accustomed to the gradual conform of well-flocked wool sometimes describe CAIR as firmer or less &quot;living.&quot;
              </p>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                <strong>Used market caution:</strong> Used Bates saddles 7+ years old may have degraded CAIR panels (slow air loss). Have any used Bates inspected by a Bates-trained fitter before purchase. See our <Link href="/guides/used-saddle-buying-guide" className="text-brand-primary">used saddle buying guide</Link> for the full inspection checklist.
              </p>
            </div>

            {/* Who Bates is for */}
            <div className="bg-brand-white border border-brand-border rounded-xl p-6 mb-8">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-4">Who Bates Is For</h2>
              <ul className="text-sm text-brand-text-mid leading-relaxed space-y-2 m-0 pl-5 list-disc">
                <li><strong>Multi-horse riders</strong> — one saddle covers a thoroughbred, a warmblood, and a cob via gullet swap</li>
                <li><strong>Growing horses</strong> — adjustable gullet means the saddle grows with the horse for 3–5 years</li>
                <li><strong>Recreational and amateur competitors</strong> — strong value below $2,500 in every discipline</li>
                <li><strong>Riders who don&apos;t want re-flocking appointments</strong> — CAIR eliminates the annual fitter visit for flocking adjustment</li>
                <li><strong>First serious saddle buyers</strong> — strong resale value protects the investment if the rider&apos;s needs change</li>
              </ul>
            </div>

            <div className="bg-brand-dark text-white rounded-xl p-6 mb-8">
              <h2 className="font-display font-bold text-white text-xl mb-3">Who Should Skip Bates</h2>
              <ul className="text-sm text-white/70 leading-relaxed space-y-2 m-0 pl-5 list-disc">
                <li>FEI-level dressage competitors — choose Stubben Roxane, Custom Saddlery, or French bespoke</li>
                <li>1.20m+ show jumpers — choose Pessoa, CWD, Antares, or Voltaire</li>
                <li>Riders with strong preferences for wool flocking — the air-panel feel is meaningfully different</li>
                <li>Hard-to-fit horses needing extreme custom flocking — wool-flocked saddles from County or Black Country are better candidates</li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Bates Quick Reference</div>
              {[['Caprilli', 'All-purpose flagship', '9.0'], ['Innova', 'Dressage mono-flap', '8.8'], ['Elevation', 'Close-contact jumping', '8.7']].map(([m, d, s]) => (
                <div key={m} className="py-2 border-b border-brand-border last:border-0 flex justify-between">
                  <div>
                    <div className="text-xs font-bold text-brand-dark">{m}</div>
                    <div className="text-2xs text-brand-text-light">{d}</div>
                  </div>
                  <div className="text-sm font-bold text-brand-primary">{s}</div>
                </div>
              ))}
            </div>
            <div className="bg-brand-primary-pale border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Compare With</div>
              <div className="text-sm text-brand-text-mid">
                <p className="m-0 mb-2"><strong>Bates vs Wintec:</strong> Same parent, different leather (Bates = real, Wintec = synthetic).</p>
                <p className="m-0"><strong>Bates vs Stubben:</strong> Adjustable practicality vs German heritage and Quick-Change tree.</p>
              </div>
            </div>
            <RelatedLinks title="Related Reviews" links={[
              { label: 'Wintec Saddle Review', href: '/brands/wintec' },
              { label: 'Stubben Saddle Review', href: '/reviews/stubben-saddle-review' },
              { label: 'Best English Saddles', href: '/reviews/best-english-saddles' },
              { label: 'All Saddle Brands', href: '/brands' },
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Brand reviews and market intelligence." source="review-bates" />
          </aside>
        </div>
      </div>
    </>
  )
}
