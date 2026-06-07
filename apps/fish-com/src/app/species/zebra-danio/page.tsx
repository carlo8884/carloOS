import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Danio rerio — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/danio-rerio/", publisher: "Seriously Fish" },
  { label: "Danio rerio (Zebrafish) — NCBI Gene Expression Omnibus / ZFIN model organism", url: "https://www.fishbase.se/summary/Danio-rerio.html", publisher: "FishBase" },
  { label: "Spence, R. et al. The behaviour and ecology of the zebrafish, Danio rerio. Biological Reviews, 2008.", publisher: "Biological Reviews" },
  { label: "Engeszer, R.E. et al. Timing and Location of Zebrafish (Danio rerio) Spawning. Copeia, 2007.", publisher: "Copeia" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Zebra Danio Care Guide — The Hardy Cycling Fish | Fish.com', description: "Zebra danios are among the hardiest beginner fish — fast, active schoolers that tolerate a wide range. School of 6+, cooler water, secure lid.", path: '/species/zebra-danio', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Zebra Danio Care Guide', description: 'School size, temperament, tank requirements, and breeding for Danio rerio.', url: 'https://fish.com/species/zebra-danio', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function ZebraDanioPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Zebra Danio Care Guide', subtitle: "Danio rerio — the zebra danio is one of the toughest, most active fish in the freshwater hobby. Its horizontal blue-and-gold stripes, relentless energy, and tolerance of imperfect water quality have made it both a beginner staple and the most studied fish in biomedical research. A school of these fish turns the upper third of a tank into constant motion.", category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Zebra Danio', href: '/species/zebra-danio' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "White Cloud Mountain Minnow", href: "/species/white-cloud-mountain-minnow", category: "Species Guide" }, { title: "Cherry Barb", href: "/species/cherry-barb", category: "Species Guide" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Danio rerio'], ['Adult size', '2 inches'], ['Temperature', '64–77°F (cooler tolerant)'], ['pH', '6.5–7.5'], ['School size', '6 minimum, 8-10+ better'], ['Tank size', '10 gallons minimum, 20 long ideal'], ['Lifespan', '3–5 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'White Cloud Mountain Minnow', href: '/species/white-cloud-mountain-minnow' }, { label: 'Cherry Barb', href: '/species/cherry-barb' }, { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-zebra-danio" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>The Toughest Beginner Fish — Within Reason</h2>
        <DropCap>The zebra danio earned its reputation for hardiness honestly. It tolerates a wide temperature band, adapts to most municipal water chemistry, and resists the stress-related disease that kills more delicate species. This is why it became the textbook recommendation for new aquarists and the standard model organism in genetics labs worldwide. But hardiness is frequently mistaken for invincibility. The widespread (and now discouraged) practice of using danios to "fishlessly" cycle a tank subjected these fish to lethal ammonia and nitrite — surviving such abuse is not the same as thriving. A danio kept properly in a cycled, appropriately sized school is a far more attractive and active animal than one that merely survived a cycle.</DropCap>
        <p>Stable conditions still matter: 0 ammonia, 0 nitrite, nitrate below 20 ppm, and a temperature that stays within the range rather than swinging. The danio simply has a wider margin for error than a cardinal tetra or discus, making it forgiving of the inevitable mistakes of a first tank.</p>

        <h2>School Size and Behavior</h2>
        <p>Zebra danios are active schoolers that must be kept in groups of at least six, with eight to ten producing better behavior. Kept singly or in pairs, they become stressed and frequently turn into relentless fin-nippers — much of the danio "aggression" reported by keepers stems from understocked groups. In a proper school, intra-group chasing replaces harassment of tankmates, and the fish display the coordinated darting movement that makes them so engaging to watch.</p>
        <p>They occupy the top and middle of the water column and are exceptional jumpers. A tight-fitting lid is non-negotiable — danios are among the most common fish to be found dried on the floor. Their constant motion makes them unsuitable tankmates for slow, long-finned fish such as bettas or fancy goldfish, whose fins they may nip and whose food they will outcompete.</p>

        <CalloutBox variant="warning" title="Danios are accomplished jumpers">
          A secure, tight-fitting lid is essential. Zebra danios spend most of their time near the surface and will leap through any open gap — including filter cutouts and feeding holes left uncovered.
        </CalloutBox>

        <h2>Temperature — Cooler Than You Think</h2>
        <p>One of the most useful facts about zebra danios is that they prefer cooler water than most tropical community fish. They thrive between 64 and 77°F and can be kept successfully in an unheated room-temperature tank in many climates, alongside other temperate species such as white cloud mountain minnows. This makes them an excellent choice for keepers who want a low-equipment community without committing to a goldfish setup. Avoid keeping them at the high end of the tropical range long-term, as sustained warm temperatures shorten their lifespan.</p>

        <h2>Breeding — The Lab Fish</h2>
        <p>Zebra danios are egg-scatterers and among the easiest egg-layers to breed. A well-conditioned group will spawn readily at first light, scattering non-adhesive eggs that fall to the bottom. Because the adults eagerly eat their own eggs, breeders use a layer of marbles or a mesh on the tank floor so eggs fall out of reach. Eggs hatch in two to three days; fry require infusoria or commercial liquid fry food until large enough for baby brine shrimp. Their transparent embryos and rapid development are exactly why Danio rerio became a cornerstone of developmental biology research.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Zebra Danio — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, secure lids, and food sized for zebra danio care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/zebra%20danio%20tank%20setup?s=species-zebra-danio" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Zebra Danio Setup on Amazon →</a>
            <a href="/go/chewy-brand/zebra%20danio%20tank%20setup?s=species-zebra-danio" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        <ArticleSourcesList sources={SOURCES} />
        </div>
      </div>
    </ArticleLayout>
  )
}
