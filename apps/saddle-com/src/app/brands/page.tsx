import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture, Breadcrumb } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Brand Directory — Every Major Maker, Compared | Saddle.com',
  description: 'Every major saddle brand profiled — Stubben, Pessoa, Bates, Wintec, Devoucoux, County, Circle Y, Billy Cook. Origin, signature models, price ranges, and who each brand suits.',
  path: '/brands',
})

interface Brand {
  slug: string
  name: string
  country: string
  founded: string
  positioning: string
  signature: string
  priceRange: string
  bestFor: string
  reviewHref?: string
}

const PREMIUM_GERMAN: Brand[] = [
  { slug: 'stubben', name: 'Stubben', country: 'Germany', founded: '1894', positioning: 'Heritage-grade German dressage and AP saddles. The Quick-Change tree system is the brand\'s defining technical advantage.', signature: 'Roxane (dressage), Portos (jumping), Aramis (AP)', priceRange: '$2,500–$5,000', bestFor: 'Serious dressage riders, riders sharing one saddle across horses of different widths', reviewHref: '/reviews/stubben-saddle-review' },
  { slug: 'passier', name: 'Passier', country: 'Germany', founded: '1867', positioning: 'The oldest continuously operating saddle maker in Germany. Famous for leather quality and longevity — a Passier from the 1970s is still a usable saddle.', signature: 'Grand Gilbert (dressage), Optimum (jumping)', priceRange: '$2,000–$4,500', bestFor: 'Riders prioritizing leather quality and 30-year-life-cycle saddles' },
  { slug: 'kieffer', name: 'Kieffer', country: 'Germany', founded: '1969', positioning: 'Mid-tier German maker bridging Stubben quality and more accessible pricing. Strong in eventing.', signature: 'Wien (dressage), Munchen (jumping)', priceRange: '$1,800–$3,500', bestFor: 'Eventers and riders wanting German engineering without Stubben pricing' },
]

const FRENCH_BESPOKE: Brand[] = [
  { slug: 'devoucoux', name: 'Devoucoux', country: 'France', founded: '1986', positioning: 'Artisanal French jumping and dressage saddles. Custom-fit programs are central to the brand — most saddles are built to spec.', signature: 'Biarritz (jumping), Makila (dressage)', priceRange: '$4,000–$7,000+', bestFor: 'Professional and amateur top-level competitors prioritizing custom fit' },
  { slug: 'cwd', name: 'CWD', country: 'France', founded: '1998', positioning: 'Bespoke jumping saddles favored at the upper levels of show jumping. Personalized program with custom tree, panels, and leather options.', signature: '2Gs, Hadrien, Mademoiselle (jumping)', priceRange: '$3,500–$7,000+', bestFor: 'Show jumpers competing 1.20m and above' },
  { slug: 'antares', name: 'Antares', country: 'France', founded: '1998', positioning: 'French bespoke jumping and dressage saddles with a particularly strong reputation for close-contact feel and forward seat geometry.', signature: 'Original Jumping, Atelier dressage', priceRange: '$4,000–$6,500+', bestFor: 'Close-contact riders wanting a fully custom French saddle' },
  { slug: 'voltaire', name: 'Voltaire Design', country: 'France', founded: '2010', positioning: 'Newer French bespoke brand with rapid adoption among American hunter-jumper professionals. Heavy emphasis on custom fit and modern flap geometry.', signature: 'Palm Beach, Adelaide (jumping)', priceRange: '$3,500–$6,000+', bestFor: 'US hunter-jumper riders seeking French custom feel with shorter lead times' },
]

const ENGLISH_PRACTICAL: Brand[] = [
  { slug: 'pessoa', name: 'Pessoa', country: 'Brazil / USA', founded: '1980', positioning: 'The default close-contact jumping saddle of an entire generation. The Gen X Pro alone has won more Olympic-level show jumping medals than any other production saddle.', signature: 'Gen X Pro, Legacy, Optimum', priceRange: '$2,000–$3,500', bestFor: 'Serious show jumpers wanting minimal bulk and proven competition pedigree', reviewHref: '/reviews/pessoa-saddle-review' },
  { slug: 'bates', name: 'Bates', country: 'Australia', founded: '1934', positioning: 'CAIR air-panel system and adjustable EASY-CHANGE gullets make Bates the most practical saddle for changing horses. Wide model range covers AP, jumping, dressage, and eventing.', signature: 'Caprilli (AP), Innova (dressage), Elevation (jumping)', priceRange: '$800–$2,400', bestFor: 'Multi-discipline riders, growing horses, riders not wanting to re-flock annually', reviewHref: '/brands/bates' },
  { slug: 'wintec', name: 'Wintec', country: 'Australia', founded: '1996', positioning: 'Synthetic-tree, washable saddles built on the same CAIR/EASY-CHANGE platform as Bates. The category-defining synthetic brand — light, weatherproof, affordable, and serious about fit.', signature: 'Wintec 500, Pro Endurance, Wide All-Purpose, Pro Dressage', priceRange: '$500–$1,400', bestFor: 'Endurance riders, trail riders, wet-climate riders, beginners, and serious budget-conscious buyers', reviewHref: '/brands/wintec' },
  { slug: 'collegiate', name: 'Collegiate', country: 'UK', founded: '1992', positioning: 'Best-in-class budget English saddle. Adjustable gullet plate at a price point where no other brand offers one.', signature: 'Convertible AP, Diploma (jumping)', priceRange: '$400–$1,000', bestFor: 'Recreational riders, first saddles, growing horses on a tight budget', reviewHref: '/reviews/collegiate-saddle-review' },
  { slug: 'thorowgood', name: 'Thorowgood', country: 'UK', founded: '1983', positioning: 'Synthetic-and-Drilex specialist. Same parent group as Kent & Masters, with a strong reputation in fitting hard-to-fit horses and a notably wide tree range.', signature: 'T8 Dressage, T8 Compact, T4 Cob', priceRange: '$800–$1,600', bestFor: 'Cobs, wide-backed horses, and riders wanting adjustability without a custom programme' },
  { slug: 'county', name: 'County', country: 'USA', founded: '1969', positioning: 'American-made with a Vermont workshop. The custom-fit program is the heart of the brand — many County saddles are built or modified to a specific horse.', signature: 'Perfection (AP), Innovation (dressage), Conquest (jumping)', priceRange: '$3,000–$5,500', bestFor: 'Hard-to-fit horses and riders wanting an American-made custom alternative to French bespoke' },
  { slug: 'albion', name: 'Albion', country: 'UK', founded: '1985', positioning: 'UK-made with a strong reputation in classical dressage. The Platinum and Genesis lines are favored at the higher levels of dressage in the British system.', signature: 'Platinum, Genesis, K2 (jumping)', priceRange: '$2,500–$4,500', bestFor: 'Classical dressage riders, BD and FEI-level competitors' },
  { slug: 'black-country', name: 'Black Country', country: 'UK', founded: '1985', positioning: 'Walsall-made bench-built saddles. Smaller workshop, lower volume, very strong custom-fit reputation in the UK and increasingly the US.', signature: 'Eloquence (dressage), Quantum (jumping), Vinici (working hunter)', priceRange: '$2,500–$4,000', bestFor: 'Riders wanting hand-built English construction at a more accessible price than premium French' },
]

const WESTERN: Brand[] = [
  { slug: 'circle-y', name: 'Circle Y', country: 'USA (Texas)', founded: '1960', positioning: 'The most-recognized name in trail and pleasure western saddles. Flex-tree models are an industry reference for trail comfort.', signature: 'Flex2, Julie Goodnight, Topeka Trail', priceRange: '$1,200–$3,000', bestFor: 'Trail riders, endurance, pleasure western, and riders wanting flex-tree comfort' },
  { slug: 'billy-cook', name: 'Billy Cook', country: 'USA (Oklahoma & Texas)', founded: '1960s', positioning: 'Two parallel workshops (Oklahoma and Sulphur) produce some of the best-known cutting, roping, and ranch saddles in the US. Distinct lines from each shop.', signature: 'Wide Ranch, Trail, Roping, Cutting', priceRange: '$1,500–$3,500', bestFor: 'Ranch work, roping, cutting, and traditional Western disciplines' },
  { slug: 'tucker', name: 'Tucker', country: 'USA', founded: '1992', positioning: 'Trail-saddle specialist. Gel-cush seats and ergonomic stirrup placement are the brand\'s identity — built specifically for long-distance trail comfort.', signature: 'River Plantation, Cheyenne Frontier, Equitation Endurance', priceRange: '$2,000–$3,500', bestFor: 'Long-distance trail and endurance riders prioritizing rider comfort' },
  { slug: 'martin', name: 'Martin Saddlery', country: 'USA (Texas)', founded: '1990', positioning: 'Performance-grade Western saddles. Strong following in barrel racing and team roping at the professional level.', signature: 'BTR (barrel), Crown C (roping), Stingray', priceRange: '$2,500–$5,500', bestFor: 'Competitive barrel racers, ropers, and performance Western disciplines' },
  { slug: 'hr-saddlery', name: 'HR Saddlery', country: 'USA', founded: '1985', positioning: 'High-end show and reining saddles. Heavily tooled show saddles built to order.', signature: 'Show, Reiner, Pleasure', priceRange: '$3,500–$8,000+', bestFor: 'Show, reining, and pleasure exhibitors at AQHA and breed-show level' },
]

const SECTIONS = [
  { id: 'premium-german', title: 'Premium German', sub: 'Heritage, leather quality, multi-decade lifespans', brands: PREMIUM_GERMAN, accent: '🏛️' },
  { id: 'french-bespoke', title: 'French Bespoke', sub: 'Custom-built jumping and dressage saddles', brands: FRENCH_BESPOKE, accent: '🇫🇷' },
  { id: 'english-practical', title: 'English & Practical', sub: 'Adjustable, multi-discipline, accessible', brands: ENGLISH_PRACTICAL, accent: '🐎' },
  { id: 'western', title: 'Western', sub: 'Trail, ranch, performance, and show', brands: WESTERN, accent: '🤠' },
]

export default function BrandsDirectoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }}
          aria-hidden="true" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 20% 30%, rgba(160,120,64,0.15) 0%, transparent 55%)' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">The Saddle Brand Directory</span>
          </div>
          <h1 className="font-display font-black text-white tracking-tighter leading-none mb-6"
            style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}>
            Every Saddle Brand<br/>
            <em className="not-italic text-brand-primary">That Matters.</em>
          </h1>
          <p className="text-lg font-light text-white/60 leading-relaxed max-w-2xl mb-8">
            Twenty makers across four categories — German heritage, French bespoke, English practical, and Western. Each profile covers origin, signature models, price range, and the rider the brand actually suits.
          </p>
          <div className="flex gap-8 pt-6 border-t border-white/10 text-white/40 text-xs">
            <div><span className="text-white font-bold text-xl block font-display">{PREMIUM_GERMAN.length + FRENCH_BESPOKE.length + ENGLISH_PRACTICAL.length + WESTERN.length}</span>Brands Profiled</div>
            <div><span className="text-white font-bold text-xl block font-display">4</span>Categories</div>
            <div><span className="text-white font-bold text-xl block font-display">$400–$8K</span>Price Span</div>
          </div>
        </div>
      </section>

      <Breadcrumb siteId="saddle-com" items={[{ name: 'Home', href: '/' }, { name: 'Saddle Brands' }]} />

      {/* JUMP NAV */}
      <nav className="bg-brand-surface border-b border-brand-border px-container sm:px-container-sm py-4 flex flex-wrap gap-x-6 gap-y-2 text-2xs font-bold tracking-eyebrow uppercase">
        {SECTIONS.map(s => (
          <a key={s.id} href={`#${s.id}`} className="text-brand-text-mid hover:text-brand-primary no-underline transition-colors">{s.accent} {s.title}</a>
        ))}
      </nav>

      {/* INTRO */}
      <section className="bg-brand-white px-container sm:px-container-sm py-12">
        <div className="max-w-3xl">
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            A serious saddle purchase is a $1,500–$7,000 decision that lasts ten to thirty years and directly affects your horse&apos;s back. Brand matters — not for status, but because a brand encodes a manufacturing tradition: tree geometry, leather sourcing, panel construction, fit philosophy, and the depth of the dealer and fitting network behind it.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            This directory is organized by category rather than ranked, because the right brand depends entirely on what you do, what you ride, and what your horse needs. A Devoucoux is wrong for a trail rider; a Tucker is wrong for a Grand Prix dressage horse. Find your category, then dig in.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      {SECTIONS.map((section, sIdx) => (
        <section
          key={section.id}
          id={section.id}
          className={sIdx % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-white'}
        >
          <div className="px-container sm:px-container-sm py-section">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-3xl">{section.accent}</span>
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-0.5 bg-brand-primary" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Category {sIdx + 1}</span>
              </div>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl md:text-4xl mb-2">{section.title}</h2>
            <p className="text-base text-brand-text-light mb-10 max-w-2xl">{section.sub}</p>

            <div className="grid md:grid-cols-2 gap-5">
              {section.brands.map((b) => (
                <article
                  key={b.slug}
                  className="bg-brand-white border border-brand-border rounded-xl p-6 hover:border-brand-primary hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-brand-border">
                    <div>
                      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">{b.country} · Est. {b.founded}</div>
                      <h3 className="font-display font-bold text-brand-dark text-2xl leading-none">{b.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xs text-brand-text-light uppercase tracking-eyebrow">Price</div>
                      <div className="text-sm font-bold text-brand-primary">{b.priceRange}</div>
                    </div>
                  </div>

                  <p className="text-sm text-brand-text-mid leading-relaxed mb-5">{b.positioning}</p>

                  <dl className="text-xs space-y-2.5 mb-5">
                    <div className="flex gap-3">
                      <dt className="text-brand-text-light uppercase tracking-eyebrow font-bold shrink-0 w-20">Signature</dt>
                      <dd className="text-brand-text-mid">{b.signature}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-brand-text-light uppercase tracking-eyebrow font-bold shrink-0 w-20">Best for</dt>
                      <dd className="text-brand-text-mid">{b.bestFor}</dd>
                    </div>
                  </dl>

                  {b.reviewHref ? (
                    <Link href={b.reviewHref} className="inline-flex items-center text-xs font-bold text-brand-primary no-underline hover:underline">
                      Read full {b.name} review →
                    </Link>
                  ) : (
                    <span className="text-2xs text-brand-text-light italic">Full review coming</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* HOW TO CHOOSE */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">How to choose</span>
          </div>
          <h2 className="font-display font-bold text-white tracking-tight text-3xl mb-10">Brand isn&apos;t the first question.</h2>

          <ol className="space-y-6 text-white/70">
            {[
              ['Fit your horse first.', 'A perfect-brand saddle that doesn\'t fit your horse is worse than a generic one that does. Identify your horse\'s wither shape, back length, and topline before brand-shopping. See our saddle fit guide.'],
              ['Match the discipline.', 'A dressage saddle on a jumping horse — even a perfect Stubben — is the wrong tool. Pick the discipline, then narrow the brand list.'],
              ['Set the budget realistically.', 'Premium brands ($3K+) on the used market often beat new mid-tier ($1K–$2K) for build quality and resale. A used Stubben at $1,500 typically out-builds a new Collegiate at $700.'],
              ['Check the dealer and fitter network.', 'A French bespoke saddle 800 miles from the nearest dealer or fitter is a liability. Match the brand to your local fitting access.'],
              ['Consider resale.', 'Stubben, Bates, Pessoa, and County hold value. Lesser-known and lower-tier brands lose 60%+ of value in year one. If you\'re uncertain about staying in the sport, buy a brand with strong resale.'],
            ].map(([title, body], i) => (
              <li key={i} className="flex gap-5">
                <div className="shrink-0 font-display font-black text-brand-primary text-3xl leading-none">{i + 1}.</div>
                <div>
                  <div className="font-display font-bold text-white text-lg mb-1">{title}</div>
                  <p className="text-sm leading-relaxed m-0">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-section">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-6 pb-3 border-b border-brand-border">Related Guides</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { title: 'Saddle Fit Guide', desc: 'The 4-point check for horse and rider', href: '/guides/saddle-fit-guide' },
            { title: 'Best English Saddles 2025', desc: 'Top picks by discipline', href: '/reviews/best-english-saddles' },
            { title: 'Best Dressage Saddles 2025', desc: 'Dedicated dressage buyer\'s guide', href: '/reviews/best-dressage-saddles' },
            { title: 'Best Western Saddles 2025', desc: 'Trail, ranch, performance, show', href: '/reviews/best-western-saddles' },
            { title: 'Buying a Used Saddle', desc: 'Inspection checklist for the resale market', href: '/guides/used-saddle-buying-guide' },
            { title: 'Stubben vs Pessoa', desc: 'Head-to-head: dressage vs jumping flagships', href: '/guides/stubben-vs-pessoa' },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200">
              <div className="font-display font-bold text-brand-dark text-sm mb-1.5">{l.title}</div>
              <div className="text-xs text-brand-text-light">{l.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* EMAIL */}
      <section className="bg-brand-primary-pale px-container sm:px-container-sm py-section">
        <EmailCapture
          variant="section"
          siteId="saddle-com"
          title="Free Saddle Brand Buyer's Intelligence"
          subtitle="New brand reviews, used-market pricing data, and discipline-specific recommendations — every other week."
          ctaText="Get Free Guide"
          source="brands-directory"
          perks={['📋 20+ brands tracked', '💰 Used market intelligence', '🏇 All disciplines', '🚫 No spam, ever']}
        />
      </section>
    </>
  )
}
