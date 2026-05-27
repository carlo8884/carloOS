import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Guppy Care Guide — Strains, Breeding & "Guppy Disease" | Fish.com', description: 'Guppies breed constantly and are remarkably hardy — but cheap store guppies often carry disease. Fancy guppy strains, selective breeding basics.', path: '/species/guppy', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Guppy Care Guide', description: 'Strains, breeding, disease prevention, and care for fancy guppies.', url: 'https://fish.com/species/guppy', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function GuppyPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Guppy Care Guide', subtitle: 'Poecilia reticulata — the most common aquarium fish in the world, and one of the most misunderstood. Guppies have an undeserved reputation as simple, expendable beginner fish. Quality fancy guppies from reputable breeders are genuinely beautiful, complex, and engaging to keep and breed. Pet store guppies are a different situation.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Guppy', href: '/species/guppy' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Poecilia reticulata'], ['Male adult size', '1.5 inches'], ['Female adult size', '2.5 inches'], ['Temperature', '72–82°F — adaptable'], ['Breeding', 'Livebearer — fry born free-swimming'], ['Gestation', '28 days at 76°F'], ['Lifespan', '2–3 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Platy Fish', href: '/species/guppy' }, { label: 'Endler\'s Livebearer', href: '/species/guppy' }, { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-guppy" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Pet Store Guppy Problem</h2>
        <p>Pet store guppies — mass-produced in fish farms with high stocking densities, variable water quality, and mixed strains — frequently carry disease, particularly the complex of conditions called "guppy disease": Columnaris (bacterial), Epistylis (protozoan), and various other pathogens that circulate in crowded farm conditions. These fish often appear healthy in the store and crash within days to weeks of entering a home aquarium. This is the source of guppies' undeserved reputation as "fragile."</p>
        <p>The solution: purchase guppies from dedicated breeders rather than big-box pet stores. Breeder-quality guppies from established hobbyist breeders are significantly more vigorous, healthier, and longer-lived — they come from line-bred strains maintained in better conditions with selective pressure for health and quality. The Guppy Breeders Guild and IFGA (International Fancy Guppy Association) maintain breeder directories.</p>

        <h2>Fancy Guppy Strains</h2>
        <p>Selective breeding over decades has produced guppy strains with dramatically different tail forms, fin shapes, and color patterns recognized by the IFGA. Major tail types: delta (large, triangular — the most common fancy type), fan tail, veil tail (long flowing), sword tail (single extension — upper, lower, or double), and lyre tail (matching extensions top and bottom). Pattern categories: solid color (moscow blue, moscow green), multi-color, snakeskin (cobweb-like scale pattern), grass (tiny spots throughout tail), half-black (rear half dark), and metal/neon (iridescent).</p>
        <p>Breeding a fancy strain requires understanding basic genetics — the X-linked color genes, the autosomal pattern genes, and how they interact. The IFGA show standard scores fish on tail form, color consistency, body shape, and dorsal development — working toward the standard within a strain is the hobby within the hobby for guppy breeders.</p>

        <h2>Breeding — Managing the Inevitable</h2>
        <p>Guppies breed constantly in appropriate conditions. A female guppy can store sperm from a single mating and produce multiple broods over several months — a single female introduced to a tank can produce fry without a male present. Gestation is approximately 28 days at 76°F; a female near term shows a large, square belly and a darkened gravid spot (the embryos visible through the abdominal wall) near the vent.</p>
        <p>Fry management: newborn guppies are immediately free-swimming and capable of eating fine foods. Adults and other fish will eat fry given the opportunity. In a heavily planted tank, enough fry survive in vegetation to maintain a colony without intervention. For breeding projects: a separate breeding tank or breeding box allows fry isolation. Feed fry micro worms, baby brine shrimp, and crushed flake from day 1. Fry reach adult size at 3 months.</p>

        <h2>Sex Ratio and Tank Dynamics</h2>
        <p>Male guppies harass females relentlessly — constant pursuit for mating is their natural behavior and stresses females significantly in confined environments. Recommended ratio: 2–3 females per male, which distributes the males' attention. A male-only tank produces the most visual display with no female stress. Females-only tanks are calm and can be kept if breeding is not desired (females from a mixed tank may continue producing fry from stored sperm for several months). A single male with multiple females in a planted tank with ample cover produces the most natural behavior pattern.</p>
      </div>
    </ArticleLayout>
  )
}
