import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Poecilia wingei — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/poecilia-wingei/", publisher: "Seriously Fish" },
  { label: "Poecilia wingei — FishBase species record", url: "https://www.fishbase.se/summary/Poecilia-wingei.html", publisher: "FishBase" },
  { label: "Poeser, F.N. et al. Description of Poecilia (Acanthophacelus) wingei n. sp. Contributions to Zoology, 2005.", publisher: "Contributions to Zoology" },
  { label: "Endler, J.A. Natural Selection on Color Patterns in Poecilia reticulata. Evolution, 34(1), 76–91, 1980.", publisher: "Evolution" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: "Endler's Livebearer Care Guide — The Nano Guppy | Fish.com", description: "Endler's livebearers are tiny, dazzling, prolific guppy relatives ideal for nano tanks. Easy to keep, easy to breed, and they hybridize freely with guppies.", path: '/species/endlers-livebearer', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: "Endler's Livebearer Care Guide", description: "Care, hybridization, and breeding for Poecilia wingei, the Endler's livebearer.", url: 'https://fish.com/species/endlers-livebearer', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function EndlersLivebearerPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: "Endler's Livebearer Care Guide", subtitle: "Poecilia wingei — the Endler's livebearer is a diminutive cousin of the guppy, prized for the neon-bright metallic patches of orange, green, and black that males display in a body barely an inch long. Hardy, peaceful, and astonishingly prolific, Endlers are one of the best fish for a planted nano aquarium and a favorite of livebearer enthusiasts worldwide.", category: 'Species Guide', authorName: 'Fish.com Editorial' publishedAt: 'June 2026', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: "Endler's Livebearer", href: '/species/endlers-livebearer' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Guppy", href: "/species/guppy", category: "Species Guide" }, { title: "Molly Fish", href: "/species/molly-fish", category: "Species Guide" }, { title: "Platy Fish", href: "/species/platy-fish", category: "Species Guide" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Poecilia wingei'], ['Adult size', '1 inch (males smaller)'], ['Temperature', '72–80°F'], ['pH', '7.0–8.0 (harder water)'], ['Tank size', '10 gallons'], ['Reproduction', 'Livebearer — very prolific'], ['Lifespan', '2–3 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Guppy', href: '/species/guppy' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Nano Tank Setup', href: '/setup/nano-tank-setup' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-endlers-livebearer" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>A Nano Powerhouse</h2>
        <DropCap>The Endler's livebearer packs more color into a one-inch body than almost any other freshwater fish. Originally found in the Laguna de Patos region of Venezuela, the species was nearly lost in the wild and survives largely through aquarium populations and dedicated hobbyist breeders. Its small size, peaceful nature, and hardiness make it ideal for nano and planted tanks where a full-sized guppy would feel cramped. Males are the showpieces, flashing metallic patches and performing constant courtship displays; females are larger, plainer, and silvery. Because they are so small and active, even a 10-gallon tank can support a lively colony.</DropCap>
        <p>Endlers thrive in the same harder, slightly alkaline water that suits guppies and other livebearers — a pH of 7.0 to 8.0 with moderate hardness. Soft, acidic blackwater conditions are not ideal for them. They are otherwise undemanding as long as the tank is cycled and nitrate is kept in check.</p>

        <h2>The Hybridization Question</h2>
        <p>The most important thing to understand about Endlers is that they interbreed freely with common guppies (Poecilia reticulata), to which they are very closely related. Housed together, the two will produce fertile hybrids, and over a few generations a pure Endler line is permanently lost. Keepers who want to maintain pure-strain Endlers — designated "N-class" for wild-type lineages — must keep them entirely separate from guppies. Many fish sold as Endlers in chain stores are in fact guppy hybrids ("K-class"). This is a matter of preserving a conservation-sensitive species, not merely aesthetics.</p>

        <CalloutBox variant="warning" title="Do not mix with guppies">
          Endlers and guppies hybridize readily and irreversibly. To keep a pure Endler line, never house them with common guppies — even a single accidental cross contaminates the strain.
        </CalloutBox>

        <h2>Prolific Breeding</h2>
        <p>Like all livebearers, Endlers give birth to free-swimming fry rather than laying eggs, and they breed relentlessly. A single female can produce a brood every three to four weeks. In a densely planted tank with floating cover, enough fry survive predation to sustain a self-replenishing colony with no intervention at all. This abundance is a feature for hobbyists who enjoy watching a population thrive, but it does require either a plan for the surplus or a males-only tank to prevent runaway numbers.</p>

        <h2>Tankmates and Setup</h2>
        <p>Endlers are perfectly peaceful and pair well with other small, calm species: pygmy corydoras, otocinclus, small rasboras, and dwarf shrimp such as cherry shrimp. Avoid anything large enough to view a one-inch fish as a snack. A heavily planted tank with fine-leaved and floating plants offers fry cover and shows off the males' colors against a green backdrop. Feed small, frequent meals of quality flake, micro-pellets, and frozen baby brine shrimp.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Endler&apos;s Livebearer — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse nano tanks, sponge filters, heaters, live plants, and food sized for Endler&apos;s livebearer care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/endlers%20livebearer%20nano%20tank%20setup?s=species-endlers-livebearer" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Endler&apos;s Setup on Amazon →</a>
            <a href="/go/chewy-brand/endlers%20livebearer%20nano%20tank%20setup?s=species-endlers-livebearer" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
