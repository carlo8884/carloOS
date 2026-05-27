import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Harlequin Rasbora Care Guide — Best Community Schooler | Fish.com', description: 'Harlequin rasboras are the benchmark community schooling fish — copper-orange with a black triangular patch, peaceful, hardy, and spectacular in groups of 15+.', path: '/species/harlequin-rasbora', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Harlequin Rasbora Care Guide', description: 'School size, planted tank setup, and community compatibility for Trigonostigma heteromorpha.', url: 'https://fish.com/species/harlequin-rasbora', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function HarlequinPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Harlequin Rasbora', subtitle: 'Trigonostigma heteromorpha — the harlequin rasbora is the gold standard for community tank schooling fish. Peaceful, hardy, adaptable, and visually striking when kept in groups of 15+: the copper-orange body with the distinctive black triangular patch catches light from every angle as the school moves together.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Harlequin Rasbora', href: '/species/harlequin-rasbora' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Trigonostigma heteromorpha'], ['Adult size', '1.75 inches'], ['Temperature', '73–82°F'], ['pH', '5.5–7.5 (prefers soft acidic)'], ['Group', '10 min — 15+ for best display'], ['Compatibility', 'Peaceful with all community fish'], ['Lifespan', '5–8 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Ember Tetra', href: '/species/ember-tetra' }, { label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-harlequin" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Harlequins Are the Benchmark Community Schooler</h2>
        <p>Among the dozens of small schooling fish available to aquarists, harlequin rasboras consistently rank as one of the most recommended because they combine everything a community tank needs: genuine peacefulness (no fin-nipping, no aggression toward any other species), hardiness across a range of water conditions (adaptable from soft acidic Southeast Asian parameters to standard community tap water), a substantial lifespan (5–8 years versus the 2–3 years of many nano species), and the visual impact of their distinctive black triangle against a warm copper-orange body that becomes more vivid as the school grows.</p>
        <p>A single harlequin rasbora is unremarkable. Eight harlequin rasboras are pleasant. Twenty harlequin rasboras moving as a cohesive school through a planted midground is one of the most satisfying things in the freshwater hobby — the school rotates and banks together, each fish's patch catching the light differently as they turn.</p>

        <h2>Water and Care</h2>
        <p>Harlequins come from the slow, tea-colored, soft, acidic waters of Malaysia, Thailand, Singapore, and Sumatra — blackwater environments with pH 5.5–6.5, GH under 5, heavy tannin staining. In captivity they adapt to a much wider range (pH up to 7.5, GH up to 15) and thrive in standard community parameters. Color intensifies in slightly soft, slightly acidic water with tannins (Indian almond leaves, botanicals, or driftwood) — the orange deepens and the black triangle becomes more distinct. Temperature 73–82°F — they tolerate the same range as most tropical community fish.</p>

        <h2>Tankmates</h2>
        <p>Universally compatible. They do not fin-nip (unlike tiger barbs or some serpae tetras), they do not bother corydoras, shrimp, or snails, and they are fast enough to avoid being eaten by larger fish in the typical community tank. Ideal companions: Corydoras of any species (same soft-water preferences), cherry and neocardinia shrimp (harlequins ignore adult shrimp and most shrimplets), otocinclus, any peaceful dwarf cichlid (apistogramma, German blue ram), betta fish (harlequins are fast and peaceful — one of the more betta-compatible schoolers), and other rasbora species.</p>

        <h2>Breeding</h2>
        <p>Harlequin rasboras are egg-scatterers with a distinctive behavior: eggs are deposited on the underside of broad leaves (Echinodorus, Anubias) rather than scattered randomly. The male and female perform a looping, upside-down spawning embrace beneath a selected leaf, depositing adhesive eggs that stick to the leaf's underside. Breeding requires soft, very acidic water (pH 5.5–6.0, GH under 4) and is difficult to trigger in harder water. Eggs hatch in 24-48 hours; parents may eat eggs if left in the breeding tank. Fry are very small and require infusoria before graduating to baby brine shrimp.</p>
      </div>
    </ArticleLayout>
  )
}
