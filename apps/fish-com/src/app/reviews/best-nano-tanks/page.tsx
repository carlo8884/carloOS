import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Best Nano Aquariums 2025 — 5 to 20 Gallon Tanks Ranked | Fish.com', description: 'Best nano aquariums for beginners and planted tank enthusiasts. Fluval Spec, Aqueon Minibow, and Innovative Marine compared for betta, shrimp.', path: '/reviews/best-nano-tanks', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Best Nano Aquariums 2025', description: 'Fluval Spec, Aqueon Minibow, and Innovative Marine ranked for nano setups.', url: 'https://fish.com/reviews/best-nano-tanks', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const fluvalSchema = buildProductSchema({ name: 'Fluval Spec V 5-Gallon', description: 'Rimless nano aquarium with integrated filtration and LED lighting for betta and shrimp.', url: 'https://fluvalaquatics.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const aqueonSchema = buildProductSchema({ name: 'Aqueon 20-Gallon Long Aquarium Kit', description: 'Complete 20-gallon long starter kit — the ideal nano community tank.', url: 'https://aqueon.com', imageUrl: '', ratingValue: 9.0, reviewCount: 1 })
const allSchemas = combineSchemas(schema, fluvalSchema, aqueonSchema)
const PICKS = [
  { label: 'Best 5 Gallon', emoji: '🏆', name: 'Fluval Spec V', subtitle: 'Rimless · Planted-ready · Betta/shrimp', href: '#fluval-spec' },
  { label: 'Best 10 Gallon', emoji: '⭐', name: 'Aqueon 10 Standard', subtitle: 'Most versatile · Widely available · Add-your-own equipment', href: '#aqueon-10' },
  { label: 'Best 20 Gallon', emoji: '🐠', name: 'Aqueon 20 Long', subtitle: 'Best community starter · Long footprint · Affordable', href: '#aqueon-20' },
  { label: 'Best Nano Reef', emoji: '🪸', name: 'Innovative Marine Nuvo 10', subtitle: 'AIO saltwater · Hidden filtration · Reef-ready', href: '#IM-nuvo' },
]
export default function BestNanoTanksPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">🌊 Buyer's Guide</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Nano Aquariums 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Nano tanks (5–20 gallons) are ideal for betta fish, shrimp colonies, planted tanks, and small community setups. Bigger is more forgiving — but these small tanks are manageable and rewarding when set up correctly.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Nano Tanks</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bigger Is More Forgiving</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Smaller tanks are less stable — ammonia spikes faster, temperature swings are larger, and mistakes have less margin. A 10-gallon is significantly easier to maintain than a 5-gallon. A 20-gallon long is the ideal beginner tank size. If budget allows, go bigger.</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="fluval-spec" badge="Best 5 Gallon" badgeEmoji="🏆" name="Fluval Spec V 5-Gallon" subtitle="Rimless rimless AIO · Honeycomb filter cover · Low-profile LED" score={9.2} winner
              description={<p>The Fluval Spec V is the standard recommendation for a betta tank or shrimp tank at 5 gallons. The integrated filtration is hidden behind a honeycomb baffle, the LED is plant-capable (adequate for low-light plants like Java fern, Anubias, mosses), and the rimless design looks clean on a desk or shelf. The flow from the filter should be baffled (rubber band a filter sponge over the outlet) to reduce current for betta fish. Comes complete — just add fish, substrate, and cycle the tank.</p>}
              specs={[{ label: 'Volume', value: '5 gallons' }, { label: 'Design', value: 'Rimless, all-in-one' }, { label: 'Filter', value: 'Integrated — 3-stage' }, { label: 'Light', value: 'LED — low-light plant capable', highlight: 'good' }, { label: 'Best for', value: 'Betta, shrimp, planted' }]}
              pros={['Complete kit — nothing to add', 'Rimless looks premium', 'Plant-capable LED', 'Baffled filtration zone']}
              cons={['5 gallons is minimum — less stable than 10+', 'Flow needs baffling for betta', 'Tight space for aquascaping']}
              price="$75–95"
              ctaText="Shop Fluval Spec V →"
              ctaHref="/go/amazon-brand/fluval+spec+v+5+gallon?s=reviews-best-nano-tanks"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="fluval-spec-v"
            />
            <ReviewCard id="aqueon-10" badge="Best 10 Gallon" badgeEmoji="⭐" name="Aqueon 10-Gallon Standard Aquarium" subtitle="Bare tank · Add your own equipment · Most versatile nano size" score={9.0}
              description={<p>The bare 10-gallon glass aquarium is the most versatile and cost-effective nano tank — pair it with your choice of filter (sponge filter for shrimp, HOB for community fish), heater, and light for a customizable setup. The 10-gallon long footprint (20"×10"×12") gives enough horizontal space for a small community (5 neon tetras + 3 corydoras, or a betta + tankmates). Available everywhere, easily replaced if broken, and cheap enough that damage is not a crisis.</p>}
              specs={[{ label: 'Volume', value: '10 gallons' }, { label: 'Type', value: 'Bare tank — add your equipment' }, { label: 'Footprint', value: '20" × 10" × 12"' }, { label: 'Best for', value: 'First fish tank, betta, small community' }]}
              pros={['Affordable', 'Versatile — any equipment combination', 'Widely available', 'Easier to maintain than 5-gallon']}
              cons={['No equipment included', 'Requires separate filter, heater, light purchases']}
              price="$20–30"
              ctaText="Shop Aqueon 10 Gallon →"
              ctaHref="/go/chewy-brand/aqueon+10+gallon+aquarium?s=reviews-best-nano-tanks"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="aqueon-10-gallon"
            />
            <ReviewCard id="aqueon-20" badge="Best Overall Nano" badgeEmoji="🐠" name="Aqueon 20-Gallon Long" subtitle="Best beginner community tank size · Long footprint · Widely available" score={9.4}
              description={<p>The 20-gallon long (30"×12"×12") is the best starter aquarium size — large enough for a proper community (8 neon tetras, 6 Corydoras, a centerpiece fish), stable enough to forgive beginner water quality mistakes, and affordable enough to equip completely without breaking the budget. The long footprint provides territorial separation that tall tanks do not. If someone asks what tank they should buy as their first, the answer is almost always the 20-gallon long.</p>}
              specs={[{ label: 'Volume', value: '20 gallons' }, { label: 'Footprint', value: '30" × 12" × 12" (long)' }, { label: 'Best for', value: 'First community tank, planted tank' }, { label: 'Stability', value: 'Most forgiving nano size', highlight: 'good' }]}
              pros={['Most forgiving beginner size', 'Community-capable', 'Long footprint excellent for planted', 'Affordable']}
              cons={['No equipment included', 'Requires 20-gallon-rated filter, heater, light']}
              price="$30–50"
              ctaText="Shop 20-Gallon Long →"
              ctaHref="/go/chewy-brand/aqueon+20+gallon+long+aquarium?s=reviews-best-nano-tanks"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="aqueon-20-long"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Fish Type</div>
              {[['Betta only', '5–10 gal (Fluval Spec V)'], ['Betta + tankmates', '10–20 gal'], ['Shrimp colony', '5–10 gal planted'], ['Small community', '20 gal long'], ['Nano reef (saltwater)', 'Innovative Marine 10'], ['Planted no fish', '5+ gal (any shape)']].map(([t,r]) => (
                <div key={t} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">{r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Betta Fish Care', href: '/species/betta-fish' }, { label: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }, { label: 'Best Filters', href: '/reviews/best-aquarium-filters' }]} />
            <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Equipment picks every Thursday." source="review-nano-tanks" />
          </aside>
        </div>
      </div>
    </>
  )
}
