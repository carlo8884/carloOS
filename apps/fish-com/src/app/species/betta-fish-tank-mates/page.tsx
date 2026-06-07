import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Betta splendens — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/betta-splendens/", publisher: "Seriously Fish" },
  { label: "Betta splendens — FishBase species record", url: "https://www.fishbase.se/summary/Betta-splendens.html", publisher: "FishBase" },
  { label: "Jaroensutasinee, M. & Jaroensutasinee, K. Bubble nest habitat characteristics of wild Siamese fighting fish. Journal of Fish Biology, 2001.", publisher: "Journal of Fish Biology" },
  { label: "Simpson, M.J.A. The Display of the Siamese Fighting Fish, Betta splendens. Animal Behaviour Monographs, 1968.", publisher: "Animal Behaviour Monographs" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Betta Fish Tank Mates — What Can Live with a Betta? | Fish.com', description: 'Can bettas live with other fish? The answer depends on the individual betta. Compatible tankmates, fish to always avoid.', path: '/species/betta-fish-tank-mates', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Betta Fish Tank Mates', description: 'Compatible and incompatible tankmates for betta fish — a practical guide.', url: 'https://fish.com/species/betta-fish-tank-mates', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BettaTankMatesPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Betta Fish Tank Mates', subtitle: 'The question "what can I put with my betta?" depends entirely on the individual fish. Some bettas are highly tolerant; others will attack anything that moves. No compatibility list is universal — every betta is an individual. This guide covers the safest options and explains how to test compatibility.', category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Betta Fish", href: "/species/betta-fish", category: "Species Guide" }, { title: "Corydoras", href: "/species/corydoras", category: "Species Guide" }, { title: "Otocinclus", href: "/species/otocinclus", category: "Species Guide" }]}
      sidebar={<>
        <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Never Put With Bettas</div>
          <ul className="text-xs text-brand-text-mid space-y-1 m-0 p-0 list-none">
            {['Other male bettas', 'Female bettas (outside breeding setup)', 'Fin-nipping fish (tiger barbs, serpae tetras)', 'Fish with flowing fins (fancy guppies)', 'Goldfish (temp incompatible)', 'Aggressive cichlids'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger">✗</span>{s}</li>)}
          </ul>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Betta Fish Care', href: '/species/betta-fish' }, { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' }, { label: 'Corydoras Care', href: '/species/corydoras' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="species-betta-mates" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-betta-fish-tank-mates" aspect="16:9" variant="inline" caption="A betta fish community in a home aquarium." priority />
        <h2>Individual Variation — The Most Important Factor</h2>
        <p>Betta aggression varies enormously between individual fish. Some bettas live peacefully with a full community tank including other colorful fish. Others will attack, fin-nip, or kill fish that are typically considered "safe" companions. No compatibility guide can predict how a specific betta will behave — the individual fish's temperament is the determining factor. Always have a backup plan (a separate tank or divider) when introducing new tankmates to a betta.</p>

        <h2>Generally Compatible Species (With Caveats)</h2>
        <p><strong>Corydoras catfish:</strong> Bottom-dwelling, armored, and completely non-threatening to bettas. Most bettas completely ignore Corydoras. Keep in groups of 6+ for Cory wellbeing. Require sand substrate. One of the most reliably compatible choices.</p>
        <p><strong>Otocinclus catfish:</strong> Tiny algae-eaters (1.5 inches) that cling to glass and plants. Fast, non-threatening, and ignored by most bettas. Require established algae growth and gentle water — do not put in a newly set up tank. Keep in groups of 4-6.</p>
        <p><strong>Snails (Nerite, Mystery snails):</strong> Most bettas ignore snails. Some bettas pick at snail antenna — watch for this. Nerite snails do not reproduce in fresh water (no snail explosion). Mystery snails are larger and easier to see bettas interacting with. A good low-maintenance community addition.</p>
        <p><strong>African dwarf frogs:</strong> Fully aquatic frogs that share betta water parameters. Most bettas ignore them. Some bettas bite frog limbs — observe carefully. Frogs are slow feeders — ensure they receive food (feed separately or after betta is satiated).</p>
        <p><strong>Ghost shrimp:</strong> Many bettas eat ghost shrimp — they are often sold as feeder shrimp specifically for this purpose. Some bettas ignore them. Dense planting provides hiding spots that improve survival odds. Use as a test case before investing in more expensive cherry shrimp.</p>
        <p><strong>Small tetras (Ember tetras, Harlequin Rasboras, small Endler's livebearers):</strong> Fast-moving fish that do not have flowing fins and are not obviously "betta-like" in silhouette. Many bettas coexist with these. A 20-gallon minimum provides enough territory. Never put with slow or fancy-finned tetras or livebearers.</p>

        <h2>How to Introduce New Tank Mates</h2>
        <ol>
          <li><strong>Tank size matters:</strong> 10-gallon minimum for any community with a betta — the betta needs territory and the tankmates need escape routes. 20-gallon is significantly more reliable.</li>
          <li><strong>Add the betta last:</strong> Establish the community first, then add the betta. He is less likely to become territorial about fish already present than about fish introduced into "his" established territory.</li>
          <li><strong>Dense planting:</strong> Heavy planting (or floating plants) provides visual barriers and hiding spots that allow tankmates to escape betta attention. A heavily planted tank dramatically reduces aggression incidents.</li>
          <li><strong>Observe for 72 hours:</strong> Bettas may ignore new additions initially and attack later. Observe twice daily for the first three days. If you see consistent fin-nipping, chasing, or injury — remove the target fish immediately.</li>
          <li><strong>Have a plan:</strong> Always have a separate tank, bowl, or divider ready before introducing tankmates. If it doesn't work, you need somewhere to put one of the fish quickly.</li>
        </ol>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Betta Fish Tank Mates — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for betta fish tank mates care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/betta%20fish%20tank%20mates%20tank%20setup?s=species-betta-fish-tank-mates" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Betta Fish Tank Mates Setup on Amazon →</a>
            <a href="/go/chewy-brand/betta%20fish%20tank%20mates%20tank%20setup?s=species-betta-fish-tank-mates" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
