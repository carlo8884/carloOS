import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Dwarf Puffer Care Guide — The Pea Puffer | Fish.com', description: "Dwarf pea puffers are inch-long freshwater puffers with huge personalities. They need live or frozen snails to wear down their teeth and dislike most tankmates.", path: '/species/dwarf-puffer', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Dwarf Puffer Care Guide', description: 'Diet, teeth, temperament, and care for Carinotetraodon travancoricus, the pea puffer.', url: 'https://fish.com/species/dwarf-puffer', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function DwarfPufferPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Dwarf Puffer Care Guide', subtitle: "Carinotetraodon travancoricus — the dwarf, pygmy, or pea puffer is the smallest pufferfish in the world at barely an inch long, and unlike most of its relatives it lives entirely in fresh water. What it lacks in size it makes up for in personality: it hunts with eerie intelligence, follows its keeper around the glass, and demands a specialized snail-based diet.", category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐡', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Dwarf Puffer', href: '/species/dwarf-puffer' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Puffer Fish", href: "/species/puffer-fish", category: "Species Guide" }, { title: "Mystery Snail", href: "/species/mystery-snail", category: "Species Guide" }, { title: "Nano Tank Setup", href: "/setup/nano-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Carinotetraodon travancoricus'], ['Adult size', '1–1.4 inches'], ['Temperature', '74–82°F'], ['pH', '7.0–7.8'], ['Tank size', '5 gal single, 10+ for group'], ['Diet', 'Carnivore — snails, frozen meaty foods'], ['Lifespan', '4–5 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Puffer Fish Overview', href: '/species/puffer-fish' }, { label: 'Mystery Snail', href: '/species/mystery-snail' }, { label: 'Nano Tank Setup', href: '/setup/nano-tank-setup' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-dwarf-puffer" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>A Tiny Predator With a Big Personality</h2>
        <DropCap>The dwarf puffer is a true freshwater pufferfish — a distinction worth emphasizing, because the great majority of "puffers" in the trade are brackish or marine species frequently sold to beginners by mistake. Native to the rivers and lakes of Kerala in southwestern India, the pea puffer spends its whole life in fresh water and needs no salt. Despite measuring barely an inch, it is an active, curious, surprisingly intelligent micro-predator that stalks prey with binocular vision, swivels its eyes independently, and quickly learns to recognize the person who feeds it. These traits make it one of the most engaging nano fish in the hobby, but they come bundled with two non-negotiable care requirements: a specialized diet and careful management of its aggression.</DropCap>

        <h2>The Snail Requirement</h2>
        <p>Like all puffers, the pea puffer has a beak formed from fused teeth that grow continuously throughout its life. In the wild it wears these teeth down by crushing snails and other hard-shelled invertebrates. In the aquarium, a diet of soft foods alone allows the beak to overgrow until the fish can no longer eat — a slow, fatal problem. The solution is a steady supply of small live snails (ramshorn, bladder, and pond snails are commonly cultured as feeders) to grind the teeth naturally. Many keepers maintain a separate snail-breeding tank or jar specifically to supply their puffers. The rest of the diet is meaty frozen and live foods: bloodworms, blackworms, daphnia, and brine shrimp. Pea puffers almost universally refuse flakes and pellets.</p>

        <CalloutBox variant="warning" title="Snails are not optional">
          Dwarf puffers must crush hard-shelled snails to wear down their continuously growing beak. A diet of only soft frozen foods leads to beak overgrowth and eventual starvation. Keep a feeder-snail culture running.
        </CalloutBox>

        <h2>Temperament — Plan the Tank Around It</h2>
        <p>Pea puffers are territorial and prone to nipping. They are notorious fin-nippers and will harass slow or long-finned tankmates, and they may also fight among themselves. There are two reliable approaches: keep a single puffer in a heavily planted five-gallon tank, or keep a small group in a larger, densely planted tank with broken sightlines and a female-skewed ratio (roughly two or three females per male) to disperse aggression. Mixing them with most other fish is risky; many experienced keepers run species-only puffer tanks. Fast-moving dither fish such as small rasboras are sometimes tolerated in a large, well-decorated tank, but there are no guarantees.</p>

        <h2>Tank Setup and Water Quality</h2>
        <p>A dense forest of plants is essential — it breaks up territories, provides hunting cover, and reduces stress. Pea puffers are sensitive to poor water quality and the high-protein diet they require produces a heavy bioload, so robust filtration, modest stocking, and frequent water changes are critical. Telling sex apart is possible in mature fish: males develop a dark belly stripe and wrinkle-like lines behind the eyes, while females are rounder and more heavily spotted. Their intelligence, hunting behavior, and color-shifting moods reward keepers willing to meet their demanding needs.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Dwarf Puffer — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse nano tanks, gentle filters, heaters, live plants, and snail-culture supplies sized for dwarf puffer care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/dwarf%20puffer%20nano%20tank%20setup?s=species-dwarf-puffer" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Dwarf Puffer Setup on Amazon →</a>
            <a href="/go/chewy-brand/dwarf%20puffer%20nano%20tank%20setup?s=species-dwarf-puffer" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
