import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Best Bioactive Reptile Substrates 2025 — Desert | Lizard.com', description: 'Best bioactive substrate mixes for reptile enclosures. Josh\'s Frogs, BioDude, and DIY mixes ranked for bearded dragons, leopard geckos, and tropical species.', path: '/reviews/best-bioactive-substrates', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Best Bioactive Reptile Substrates 2025', description: "Josh's Frogs, BioDude, and DIY desert/tropical mixes for reptile bioactive setups.", url: 'https://lizard.com/reviews/best-bioactive-substrates', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const biodude = buildProductSchema({ name: 'BioDude Terra Sahara', description: 'Ready-to-use bioactive substrate mix for desert reptile species.', url: 'https://thebiodude.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const jfrogs = buildProductSchema({ name: "Josh's Frogs BioBedding Desert", description: 'Pre-mixed desert bioactive substrate with clay and organic components.', url: 'https://joshsfrogs.com', imageUrl: '', ratingValue: 9.1, reviewCount: 1 })
const allSchemas = combineSchemas(schema, biodude, jfrogs)
const PICKS = [
  { label: 'Best Desert Mix', name: "BioDude Terra Sahara", subtitle: 'Ready-to-use · Desert species · Bearded dragon proven', href: '#biodude' },
  { label: "Best Josh's Frogs", name: "Josh's Frogs BioBedding Desert", subtitle: 'Quality clay/sand blend · Well-tested', href: '#jfrogs' },
  { label: 'Best DIY Desert', name: 'DIY 60/30/10 Mix', subtitle: 'Cheapest · Customizable · Takes research', href: '#diy' },
]
export default function BestBioactiveSubstratesPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [{ name: 'Home', url: 'https://lizard.com/' }, { name: 'Equipment Reviews', url: 'https://lizard.com/reviews' }, { name: 'Best Bioactive Reptile Substrates 2025', url: 'https://lizard.com/reviews/best-bioactive-substrates' }] }))} />
      <div className="relative px-container-sm sm:px-container py-14" style={{ background: 'linear-gradient(135deg, #0D1A0D, #080C08)' }}>
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Buyer's Guide</span>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Bioactive Reptile Substrates 2025</h1>
        <p className="text-lg font-light leading-relaxed max-w-2xl" style={{ color: 'rgba(238,240,228,0.55)' }}>A bioactive setup — live substrate with a cleanup crew of isopods and springtails — creates a self-maintaining, naturalistic enclosure. The substrate is the foundation. Here are the best options by species type.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"><Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span><Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span><span className="text-brand-text-mid">Best Bioactive Substrates</span></nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">What Makes a Bioactive Substrate</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">A true bioactive substrate must: support beneficial microbial populations, retain enough moisture for the microbial layer without being waterlogged, allow burrowing behavior, and not compact to concrete over time. For desert species: drainage layer (hydroballs or gravel) under the substrate, plus a mix that stays aerated. For tropical: more organic content and moisture retention.</p>
            </div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="lizard-com" />
            <ReviewCard id="biodude" badge="Best Desert Mix" name="BioDude Terra Sahara" subtitle="Pre-bagged · Desert species proven · Contains bioactive starter organisms" score={9.3} winner
              description={<p>BioDude's Terra Sahara is the most widely used commercial bioactive substrate mix for desert reptile species — bearded dragons, uromastyx, monitors, and leopard geckos. The mix combines organic topsoil, sand, and clay in proportions that allow burrowing, retain minimal moisture appropriate for desert species, and support a cleanup crew of isopods and springtails. Some bags include starter isopod and springtail populations (check current product description — this varies). Ready to use out of the bag with the addition of a drainage layer. The BioDude also sells complete bioactive kits that include substrate, drainage material, cleanup crew, and live plants — the easiest entry point for bioactive beginners.</p>}
              specs={[{ label: 'Species', value: 'Desert: bearded dragons, geckos, monitors', highlight: 'good' }, { label: 'Pre-mixed', value: 'Yes — ready to use', highlight: 'good' }, { label: 'Cleanup crew', value: 'Some bags include starter CUC' }, { label: 'DIY vs pre-made', value: '2–3× cost of DIY mix' }]}
              pros={['Ready to use', 'Proven desert species formula', 'Good moisture profile for desert reptiles', 'Supports cleanup crew']}
              cons={['More expensive than DIY', 'Heavy shipping cost', 'Available online only']}
              price="$30–60 depending on volume"
              ctaText="Shop BioDude Terra Sahara →"
              ctaHref="/go/amazon-brand/biodude+terra+sahara+bioactive+substrate?s=reviews-best-bioactive-substrates"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="biodude-terra-sahara"
            />
            <div id="diy" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-6">
              <h2 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">DIY Desert Mix — The Budget Option</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">The standard DIY desert bioactive substrate: 60% topsoil (organic, no perlite, no fertilizers — Miracle-Gro is not acceptable, use plain topsoil), 30% children's play sand or pool filter sand, 10% clay (Calcium Bentonite clay powder or dig clay). Mix thoroughly, add drainage layer beneath, inoculate with springtails and isopods. At scale (large enclosures), this costs 3–5× less than commercial mixes.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0"><strong>Key check:</strong> verify your topsoil has no added fertilizers, pesticides, or perlite. Read the ingredients. Many bagged topsoils include additives — find a plain organic topsoil. Happy Frog potting soil is NOT appropriate (contains perlite and fertilizers). Some keepers use Zoo Med's ReptiSoil as the organic component for reliability.</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
              <h2 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Tropical Bioactive Mix (Crested Geckos, Day Geckos, Tree Frogs)</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">For tropical species requiring higher moisture retention: 50% organic topsoil (or ABG mix), 30% coconut fiber (coco coir), 20% orchid bark or sphagnum moss. This mix retains moisture significantly longer than the desert blend — appropriate for species needing 60–80% humidity. BioDude's Terra Firma or ABG (Atlanta Botanical Garden) mix are the standard commercial options for tropical bioactive.</p>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Species</div>
              {[['Bearded dragon', 'BioDude Terra Sahara or 60/30/10 DIY'], ['Leopard gecko', 'BioDude Terra Sahara or 60/30/10 DIY'], ['Ball python', '60/30/10 + more moisture retention'], ['Crested gecko', 'ABG mix or Terra Firma'], ['Day gecko/chameleon', 'ABG tropical mix'], ['Uromastyx', '60/30/10 + extra sand (arid)']].map(([s,r]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">{r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Substrate Guide', href: '/setup/substrate-guide' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }, { label: 'Crested Gecko Care', href: '/species/crested-gecko' }]} />
            <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="review-substrates" ctaText="Download Free" />
          </aside>
        </div>
      </div>
    </>
  )
}
