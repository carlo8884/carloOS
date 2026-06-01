import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Otocinclus Care Guide — Acclimation, Starvation Risk | Fish.com', description: 'Otocinclus are delicate — most die within a week of purchase from starvation. They need a mature tank with established algae before purchase.', path: '/species/otocinclus', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Otocinclus Catfish Care Guide', description: 'Acclimation stress, starvation prevention, and algae requirements for Otocinclus dwarf catfish.', url: 'https://fish.com/species/otocinclus', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function OtocinclasPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Otocinclus Care Guide', subtitle: 'Otocinclus affinis and related species — the dwarf suckermouth catfish — are the most recommended small algae eaters for planted aquariums and one of the most commonly killed fish in the hobby. Most "otos" die within days to weeks of purchase, not from disease, but from starvation in tanks without enough algae to sustain them.', category: 'Species Guide — Intermediate', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Otocinclus', href: '/species/otocinclus' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Otocinclus affinis (+ several species)'], ['Adult size', '1.5–2 inches'], ['Temperature', '72–79°F'], ['pH', '6.0–7.5 — soft water preferred'], ['Group', '6+ — schooling fish, need conspecifics'], ['Min tank age', 'Mature, algae-established tank only'], ['Lifespan', '3–5 years in good conditions']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Amano Shrimp', href: '/species/amano-shrimp' }, { label: 'Corydoras Care', href: '/species/corydoras' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-otocinclus" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Death-by-Starvation Problem</h2>
        <p>Most otocinclus die because the tank they are placed in does not have enough algae to sustain them. Otos are obligate grazing herbivores — they eat continuously, scraping biofilm and algae from surfaces throughout the day. They have very limited fat reserves and a fast metabolism; a tank with insufficient algae means an oto is essentially starving over days to weeks while appearing "fine." The fish that arrives at your door grazing on store tank glass has just been removed from a tank with established algae (the store's tank) and placed into a clean, recently set up tank with minimal algae — and slowly starves.</p>
        <p>The correct approach: purchase otos for mature tanks only — aquariums that are at least 3-6 months old with visible biofilm and soft algae on glass and hardscape. Never purchase otos for new or recently deep-cleaned tanks. If a tank has been scrubbed spotless, wait for algae to re-establish before adding otos.</p>

        <h2>Acclimation — Why It Matters More Than Usual</h2>
        <p>Otocinclus are almost entirely wild-caught from South American river systems — they are not farmed commercially. Wild-caught fish have two compounding stresses: the physical trauma of collection and transport, and the parameter difference between their native water (typically very soft, acidic, warm Amazon tributaries) and typical pet store or home aquarium water. Slow drip acclimation over 1-2 hours is essential — matching temperature exactly and introducing the fish to the destination tank water gradually gives them the best chance of survival past the first week.</p>
        <p>Quarantine otos in a tank with established algae — ideally an algae-growing setup where you have encouraged soft green algae growth on the glass. Placing wild-caught, recently shipped otos into a clean quarantine tank with no algae is equivalent to placing them in a starvation chamber. If quarantine is not possible, place them directly into the established display tank after proper acclimation.</p>

        <h2>Supplemental Feeding</h2>
        <p>In tanks with limited algae, otos must be supplemented. The challenge: they are difficult to feed because they require food attached to surfaces — they cannot eat off the substrate floor efficiently. Effective supplemental foods: blanched zucchini (slice, microwave 30 seconds to soften, attach with a clip or weight to keep submerged — otos will graze on the cut surface), Repashy Soilent Green (gel food that sticks to glass and hardscape — excellent for otos), spirulina wafers pressed against the glass. Feed every other day in tanks without abundant algae. Remove uneaten food within 24 hours.</p>

        <h2>Group Size — They Need Company</h2>
        <p>Otos are schooling fish — solitary individuals are stressed and waste energy that would otherwise go toward the daily feeding required for survival. Groups of 6+ feel more secure, are more active, and have better survival rates than pairs or trios. In a 20-gallon planted tank with good algae, 6 otos is appropriate. Their small size makes them suitable for nano tanks — a group of 6 in a 10-gallon is their ideal environment if algae is sufficient. Compatible with virtually all peaceful fish and invertebrates — cherry shrimp, bettas (generally), corydoras, all small tetras.</p>
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Otocinclus Guide — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for otocinclus guide care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/otocinclus%20guide%20tank%20setup?s=species-otocinclus-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Otocinclus Guide Setup on Amazon →</a>
            <a href="/go/chewy-brand/otocinclus%20guide%20tank%20setup?s=species-otocinclus-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
