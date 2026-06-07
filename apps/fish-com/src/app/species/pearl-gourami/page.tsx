import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Trichopodus leerii — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/trichopodus-leerii/", publisher: "Seriously Fish" },
  { label: "Trichopodus leerii — FishBase species record", url: "https://www.fishbase.se/summary/Trichopodus-leerii.html", publisher: "FishBase" },
  { label: "Riehl, R. & Baensch, H.A. Aquarium Atlas Vol 1. Baensch, 1991.", publisher: "Baensch" },
  { label: "Kottelat, M. et al. Freshwater Fishes of Western Indonesia. Periplus, 1993.", publisher: "Periplus" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Pearl Gourami Care Guide — The Peaceful Centerpiece | Fish.com', description: "Pearl gouramis are among the most peaceful and beautiful gouramis — a labyrinth fish with pearlescent spotting. Needs surface access, calm tankmates.", path: '/species/pearl-gourami', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Pearl Gourami Care Guide', description: 'Temperament, tank size, labyrinth breathing, and care for Trichopodus leerii.', url: 'https://fish.com/species/pearl-gourami', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function PearlGouramiPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Pearl Gourami Care Guide', subtitle: "Trichopodus leerii — the pearl gourami is widely regarded as the most beautiful and peaceful of the commonly available gouramis. A lattice of pearlescent spots over a soft brown body, a dark lateral line, and threadlike pelvic fins make it an ideal centerpiece for a calm community aquarium. Breeding males develop a striking orange-red breast.", category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Pearl Gourami', href: '/species/pearl-gourami' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Dwarf Gourami", href: "/species/dwarf-gourami", category: "Species Guide" }, { title: "Sparkling Gourami", href: "/species/sparkling-gourami", category: "Species Guide" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Trichopodus leerii'], ['Adult size', '4–5 inches'], ['Temperature', '77–82°F'], ['pH', '6.0–7.5 (soft preferred)'], ['Tank size', '30 gallons minimum'], ['Temperament', 'Peaceful, somewhat shy'], ['Lifespan', '4–5 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dwarf Gourami', href: '/species/dwarf-gourami' }, { label: 'Sparkling Gourami', href: '/species/sparkling-gourami' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-pearl-gourami" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-pearl-gourami" aspect="16:9" variant="inline" caption="A pearl gourami in a home aquarium." priority />

        <h2>A Labyrinth Fish — Surface Access Is Mandatory</h2>
        <DropCap>Like its relatives the betta and dwarf gourami, the pearl gourami is an anabantoid — it possesses a labyrinth organ that allows it to breathe atmospheric air directly from the surface. This adaptation evolved in the warm, oxygen-poor, slow-moving waters of Southeast Asia, and it has a direct husbandry consequence: pearl gouramis must always have unobstructed access to the water surface. A tank packed to the rim with floating plants, or a tightly sealed lid with warm trapped air far colder than the water, can both cause problems. The air the fish gulps should be warm and humid, which is why a covered tank with a small air gap is ideal — chilled room air gulped at the surface can damage the labyrinth organ.</DropCap>
        <p>This air-breathing ability makes the species tolerant of lower dissolved oxygen, but it does not excuse poor water quality. Maintain 0 ammonia, 0 nitrite, and nitrate under 20 ppm. Pearl gouramis appreciate gentle filtration; strong currents stress them and flatten the planted, dimly lit biotope they prefer.</p>

        <h2>Temperament and Tankmates</h2>
        <p>The pearl gourami is genuinely peaceful — a notable contrast to the often-aggressive dwarf and three-spot gouramis. It is also somewhat timid, especially when newly introduced, and will hide among plants until it settles. House it with calm community fish: tetras, rasboras, corydoras, and peaceful livebearers all make excellent companions. Avoid fin-nippers such as tiger barbs and overly active species such as large danios, which stress this slow, deliberate swimmer.</p>
        <p>Keep one male with two or more females to distribute any breeding-season chasing, or keep a single specimen as a peaceful centerpiece. Two males in a smaller tank may squabble, though pearl gourami aggression is mild compared to other labyrinth fish.</p>

        <CalloutBox variant="info" title="Identifying males">
          Males develop a vivid orange-to-red coloration across the throat and breast, and their dorsal fin grows longer and more pointed. Females remain rounder-bodied with a plainer dorsal. Coloration intensifies dramatically during the breeding season.
        </CalloutBox>

        <h2>Tank Setup</h2>
        <p>Pearl gouramis show their best color in a planted tank with subdued lighting, a dark substrate, and tannin-stained water that mimics their blackwater origins. Driftwood and Indian almond leaves both lower pH gently and produce the soft, acidic, tea-colored water in which the pearlescent spotting glows. Provide some floating plants for shade and security, but leave open surface area for breathing. A 30-gallon tank is the practical minimum for a single adult; a group needs 40 gallons or more.</p>

        <h2>Bubble-Nest Breeding</h2>
        <p>Like bettas, pearl gouramis are bubble-nest builders. A conditioned male constructs a large floating nest, often anchored among floating plants, then entices the female beneath it. After a wrapping embrace the eggs float up into the nest, where the male tends them aggressively. The female should be removed after spawning. Fry hatch in two to three days and are tiny, requiring infusoria before they can take baby brine shrimp. Maintaining warm, humid air above the nest is critical, as the developing fry form their labyrinth organs in the first weeks of life.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Pearl Gourami — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, gentle filters, heaters, live plants, and food sized for pearl gourami care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/pearl%20gourami%20tank%20setup?s=species-pearl-gourami" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Pearl Gourami Setup on Amazon →</a>
            <a href="/go/chewy-brand/pearl%20gourami%20tank%20setup?s=species-pearl-gourami" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
