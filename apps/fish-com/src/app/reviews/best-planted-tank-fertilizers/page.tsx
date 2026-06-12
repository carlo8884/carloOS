import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildItemListSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Best Planted Tank Fertilizers 2026 — Seachem Flourish | Fish.com', description: 'Best aquarium fertilizers for planted tanks. Seachem Flourish, Easy Green, and NilocG ranked for low-tech, high-tech, and CO2 injected planted aquariums.', path: '/reviews/best-planted-tank-fertilizers', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Best Planted Tank Fertilizers 2026', description: 'Seachem Flourish, Easy Green, and NilocG ranked for planted aquariums.', url: 'https://fish.com/reviews/best-planted-tank-fertilizers', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const easyGreen = buildProductSchema({ name: 'Easy Green All-in-One Fertilizer', description: 'All-in-one liquid fertilizer for planted aquariums with simple weekly dosing.', url: 'https://aquariumcoop.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const flourish = buildProductSchema({ name: 'Seachem Flourish Comprehensive', description: 'Comprehensive trace element supplement for planted aquariums.', url: 'https://seachem.com', imageUrl: '', ratingValue: 9.1, reviewCount: 1 })
const allSchemas = combineSchemas(schema, easyGreen, flourish)

const PICKS = [
  { label: 'Best Overall', name: 'Easy Green (Aquarium Co-Op)', subtitle: 'All-in-one · Simple dosing · Works for most setups', href: '#easy-green' },
  { label: 'Best Trace Elements', name: 'Seachem Flourish', subtitle: 'Comprehensive micronutrients · Widely available', href: '#flourish' },
  { label: 'Best for High-Tech', name: 'NilocG Thrive', subtitle: 'High-dose · CO2 setups · Serious planted tanks', href: '#nilocg' },
  { label: 'Best Root Tabs', name: 'Aquarium Co-Op Easy Root Tabs', subtitle: 'Heavy root feeders · Substrate nutrients', href: '#root-tabs' },
]

// GEO: ItemList of the ranked picks. Names + URLs come only from this page's
// PICKS. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Best Planted Tank Fertilizers 2026',
  items: PICKS.map((p) => ({ name: p.name, url: `https://fish.com/reviews/best-planted-tank-fertilizers${p.href}` })),
})

export default function BestPlantedFertilizersPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [{ name: 'Home', url: 'https://fish.com/' }, { name: 'Reviews', url: 'https://fish.com/reviews' }, { name: 'Best Planted Tank Fertilizers 2026', url: 'https://fish.com/reviews/best-planted-tank-fertilizers' }] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Buyer's Guide</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Planted Tank Fertilizers 2026</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Plants need more than light and CO2. Macro and micronutrients drive growth, color, and health. The right fertilizer depends on your setup — low-tech, high-tech, and heavy root feeders all have different needs.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Planted Tank Fertilizers</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bottom Line</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">For most low-to-medium-tech planted tanks the all-in-one <strong>Easy Green</strong> (Aquarium Co-Op) is our overall pick — simple dosing that covers macros and micros. For comprehensive trace elements, <strong>Seachem Flourish</strong>; for high-tech CO2-injected tanks, the high-dose <strong>NilocG Thrive</strong>. Heavy root feeders also benefit from <strong>Aquarium Co-Op Easy Root Tabs</strong> in the substrate.</p>
            </div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Macro vs Micro Nutrients</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Macros (NPK — nitrogen, phosphorus, potassium) drive bulk growth. Micros (iron, manganese, zinc, boron, etc.) drive color, health, and enzyme function. Most all-in-one fertilizers cover both. High-tech CO2 setups often need additional macro dosing as plants consume nutrients faster. Low-tech tanks with fish waste often have adequate macros — micros are what's missing.</p>
            </div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="fish-com" />
            <ReviewCard id="easy-green" badge="Best Overall" name="Easy Green All-in-One Fertilizer" subtitle="Aquarium Co-Op · Simple weekly dosing · Covers most planted tanks" score={9.4} winner
              description={<p>Easy Green from Aquarium Co-Op has become the most recommended all-in-one fertilizer in the planted tank hobby — for good reason. One pump per 10 gallons weekly covers most planted tanks from low-tech to medium-tech. Contains NPK macros plus a comprehensive micronutrient blend. The dosing simplicity eliminates the multiple-bottle approach of traditional fertilizer regimens (Seachem Flourish + Flourish Excel + Potassium separately). If you want a one-product solution that works for Java fern, Anubias, crypts, stem plants, and most common aquarium plants: Easy Green. Available exclusively from Aquarium Co-Op online.</p>}
              specs={[{ label: 'Type', value: 'All-in-one liquid', highlight: 'good' }, { label: 'Dosing', value: '1 pump / 10 gallons / week' }, { label: 'Covers', value: 'Macros + micros', highlight: 'good' }, { label: 'Best for', value: 'Low to medium-tech planted tanks' }]}
              pros={['Simplest dosing regimen available', 'Covers macros and micros in one product', 'Designed by experienced planted tank hobbyists', 'Works for 90% of planted setups']}
              cons={['Online only (Aquarium Co-Op)', 'High-tech CO2 setups may need supplemental macros', 'Not available in local fish stores']}
              price="$15–25"
              ctaText="Shop Easy Green →"
              ctaHref="/go/amazon-brand/aquarium+co-op+easy+green+fertilizer?s=reviews-best-planted-tank-fertilizers"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="easy-green-fertilizer"
            />
            <ReviewCard id="flourish" badge="Best Trace Elements" name="Seachem Flourish Comprehensive" subtitle="Widest availability · Micronutrient focus · Every fish store carries it" score={9.1}
              description={<p>Seachem Flourish Comprehensive is the most widely available planted tank supplement — found at virtually every fish store and online retailer. It is primarily a micronutrient supplement (trace elements, vitamins, amino acids) rather than a comprehensive macro + micro product. For low-tech planted tanks with adequate fish waste (providing nitrogen and phosphorus), Flourish Comprehensive fills the micronutrient gap effectively. For tanks lacking macros, you'll need to pair it with Seachem Flourish Nitrogen, Flourish Phosphorus, and Flourish Potassium — which gets complex. Easy Green is simpler for most hobbyists; Seachem's value is universal availability when you need something today.</p>}
              specs={[{ label: 'Type', value: 'Micronutrient supplement' }, { label: 'Macros included', value: 'Minimal — supplement separately', highlight: 'warn' }, { label: 'Availability', value: 'Universal — every fish store', highlight: 'good' }, { label: 'Dosing', value: '5ml per 250L (66 gal) twice weekly' }]}
              pros={['Universally available', 'Comprehensive micronutrient profile', 'Long track record', 'Works well for low-tech with good fish load']}
              cons={['Does not cover macros adequately alone', 'Multi-bottle system needed for full NPK coverage', 'Twice-weekly dosing']}
              price="$10–20"
              ctaText="Shop Seachem Flourish →"
              ctaHref="/go/amazon-brand/seachem+flourish+comprehensive?s=reviews-best-planted-tank-fertilizers"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="seachem-flourish"
            />
            <ReviewCard id="nilocg" badge="Best for High-Tech" name="NilocG Thrive All-in-One" subtitle="High-dose formula · CO2 injected tanks · Serious planted aquascaping" score={9.2}
              description={<p>NilocG Thrive is formulated for high-tech CO2-injected planted tanks where rapid plant growth depletes nutrients faster than typical dosing can replace. Higher NPK concentrations than Easy Green or Flourish, with a comprehensive micro blend. The higher potency means fewer bottle changes and more cost-effective dosing at higher volumes. For the hobbyist running pressurized CO2, high lighting, and fast-growing stem plants and carpets — Thrive is the appropriate tool. For low-tech tanks, the higher dose creates algae risk from excess nutrients.</p>}
              specs={[{ label: 'Type', value: 'All-in-one high-dose', highlight: 'good' }, { label: 'Best for', value: 'CO2-injected high-tech tanks', highlight: 'good' }, { label: 'Risk', value: 'Algae if overdosed in low-tech', highlight: 'warn' }, { label: 'Value', value: 'Most cost-effective at high doses' }]}
              pros={['Higher concentration — better for high-tech', 'Cost-effective per dose at volume', 'Comprehensive macro + micro coverage', 'Popular in serious aquascaping community']}
              cons={['Overkill for low-tech / easy planted tanks', 'Algae risk if overdosed', 'Online ordering typically required']}
              price="$12–22"
              ctaText="Shop NilocG Thrive →"
              ctaHref="/go/amazon-brand/nilocg+thrive+fertilizer?s=reviews-best-planted-tank-fertilizers"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="nilocg-thrive"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Setup Type</div>
              {[['Low-tech, no CO2', 'Easy Green weekly'], ['Low-tech, heavy fish load', 'Seachem Flourish (macros from fish waste)'], ['Medium-tech', 'Easy Green weekly'], ['High-tech, CO2 injected', 'NilocG Thrive'], ['Heavy root feeders (swords, crypts)', 'Add Easy Root Tabs']].map(([t,r]) => (
                <div key={t} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Best Aquarium Lighting', href: '/reviews/best-aquarium-lighting' }, { label: 'Tank Setup Guide', href: '/setup' }, { label: 'Water Chemistry', href: '/water-parameters' }]} />
            <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Planted tank tips every Thursday." source="review-fertilizers" />
          </aside>
        </div>
      </div>
    </>
  )
}
