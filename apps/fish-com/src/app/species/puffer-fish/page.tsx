import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Puffer Fish Care Guide — Dwarf, Congo & Figure Eight | Fish.com', description: 'Puffer fish are intelligent, aggressive, and bite through everything. Dwarf puffer, Congo puffer, and figure eight compared. Hard-shelled food required to wear down teeth.', path: '/species/puffer-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Puffer Fish Care Guide', description: 'Dwarf, Congo, and figure eight puffer care — intelligence, aggression, and dietary needs.', url: 'https://fish.com/species/puffer-fish', imageUrl: '', authorName: 'Fish.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function PufferFishPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Puffer Fish Care Guide', subtitle: 'Puffer fish are the dogs of the aquarium world — they recognize their owners, beg for food, and have distinct personalities. They are also intensely aggressive toward tankmates and require hard-shelled prey to wear down their continuously growing teeth.', category: 'Species Guide — Intermediate', authorName: 'Fish.com Expert Team', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Puffer Fish', href: '/species/puffer-fish' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Species Comparison</div>
          {[['Dwarf Puffer', '1 inch · FW · Species-only', 'Easiest · 10 gal min'], ['Figure Eight', '3 inches · Brackish', 'Beginner-friendly'], ['Congo Puffer', '6 inches · FW · Benthic', 'Intermediate'], ['Fahaka Nile', '18 inches · FW', 'Expert only · 125 gal+'], ['Mbu Giant', '30 inches · FW', 'Public aquarium level']].map(([name, info, note]) => (
            <div key={name} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{name}</div>
              <div className="text-2xs text-brand-text-light">{info}</div>
              <div className="text-2xs text-brand-primary">{note}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Oscar Care', href: '/species/oscar' }, { label: 'African Cichlid', href: '/species/african-cichlid' }, { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-puffer" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Teeth — The Non-Negotiable Feeding Requirement</h2>
        <p>Puffer fish have a beak-like dental plate that grows continuously throughout their lives. In the wild, they use this beak to crush hard-shelled prey — snails, crustaceans, hard-cased invertebrates — which wears the teeth down. In captivity without hard-shelled prey, the teeth overgrow and eventually prevent the fish from eating. Overgrown teeth are the most common fatal management failure in captive puffers.</p>
        <p>Hard-shelled food sources that wear puffer teeth: live or frozen snails (ramshorn, pond snails, bladder snails), frozen clams on the half shell, frozen mussels, frozen crab legs, hard-shelled shrimp. Feed hard-shelled prey at minimum weekly — more frequently is better. Some fish stores sell "feeder snails" specifically for puffer keepers. Breeding your own snail colony in a separate tank ensures a sustainable supply.</p>

        <h2>Aggression — Almost Always a Species-Only Fish</h2>
        <p>Puffer fish bite. They bite fins, they bite tankmates, and they bite things out of curiosity. Most puffer species are best kept as species-only fish — one puffer per tank. The Dwarf Puffer (Carinotetraodon travancoricus) can sometimes be kept with fast-moving fish in a heavily planted tank, but fin-nipping incidents are common and tankmates are always at risk. Plan for a single puffer in a single species setup.</p>

        <h2>Popular Freshwater Species</h2>
        <p><strong>Dwarf Puffer (Carinotetraodon travancoricus):</strong> 1 inch. Fully freshwater. The most appropriate species for most home aquariums — 10-gallon minimum for one puffer (one per tank). Endlessly entertaining personality. Eats snails voraciously. Requires live snails as dietary staple.</p>
        <p><strong>Congo Puffer (Tetraodon miurus):</strong> 6 inches. Fully freshwater. An ambush predator that buries itself in substrate and lunges at prey. Fascinating behavioral repertoire. Requires a deep sand substrate. Eats earthworms, shrimp, and appropriately sized live prey. 30+ gallons.</p>
        <p><strong>Figure Eight Puffer (Dichotomyctere ocellatus):</strong> 3 inches. Brackish water (specific gravity 1.005–1.010). More tolerant of tankmates than most puffers. Popular and widely available. Requires brackish water that most community fish cannot tolerate — another reason for species-only keeping.</p>

        <h2>Intelligence and Enrichment</h2>
        <p>Puffer fish are genuinely intelligent — they learn feeding schedules, recognize individual owners, and can become bored in barren setups. Provide environmental enrichment: rearrange decorations periodically, feed live prey that they must hunt, add caves and complex structure. A bored puffer develops repetitive behaviors (glass surfing, pacing). Mental stimulation is a welfare requirement, not a luxury.</p>
      </div>
    </ArticleLayout>
  )
}
