import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Substrate Guide — Bioactive, Loose Particle | Lizard.com', description: 'Reptile substrate guide — bioactive soil mixes, loose particle substrates, tile, and paper. Impaction risk explained. Best substrate by species.', path: '/setup/substrate-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Reptile Substrate Guide', description: 'Bioactive, loose particle, tile, and paper substrates — impaction risk and best choices by species.', url: 'https://lizard.com/setup/substrate-guide', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function SubstrateGuidePage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{ title: 'Reptile Substrate Guide', subtitle: 'Substrate choice affects humidity, thermoregulation, psychological wellbeing, and — critically — impaction risk. The range of options spans from bioactive living soil to bare tile.', category: 'Enclosure Setup', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Substrate Guide', href: '/setup/substrate-guide' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Humidity Guide', href: '/setup/humidity-guide' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="setup-substrate" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Impaction — The Primary Safety Concern</h2>
        <p>Impaction occurs when a reptile ingests substrate that cannot be passed through the digestive system. It is a life-threatening emergency requiring veterinary intervention and is often fatal. The risk is highest when:</p>
        <ul>
          <li>Loose particle substrate is used with animals that eat substrate while feeding (terrestrial feeders that tongue-flick and pick up prey from the ground)</li>
          <li>Particle size is too fine (fine sand, calcium sand — designed for mammals, not reptiles)</li>
          <li>The animal is already compromised (cold temperatures impair digestion and increase impaction risk from any particle)</li>
          <li>Feeding live prey on loose substrate (prey items trigger feeding response, substrate gets ingested incidentally)</li>
        </ul>
        <p>Mitigation strategies: feed in a separate feeding container, use larger-particle substrate (3–4mm+ for species at risk), maintain correct temperatures at all times (cold animals cannot digest), and choose bioactive or non-particle substrates for the highest-risk species.</p>

        <h2>Substrate Types</h2>

        <h3>Bioactive Soil Mix</h3>
        <p>A bioactive substrate uses a living microfauna community — primarily springtails and isopods — to break down waste biologically. The result is a self-maintaining substrate that eliminates spot cleaning, naturally regulates humidity, supports beneficial bacteria, and provides environmental enrichment through naturalistic digging and exploration behavior.</p>
        <p><strong>Composition for desert/arid species:</strong> 60% topsoil (no fertilizer/additives), 30% sand (coarse play sand, not reptile sand), 10% organic matter (coconut fiber or peat). Depth: minimum 4 inches for burrowing species.</p>
        <p><strong>Composition for humid/tropical species:</strong> 60% coconut fiber, 30% topsoil, 10% peat or leaf litter. Supports higher moisture retention and humidity.</p>
        <p><strong>Microfauna:</strong> Temperate springtails (Folsomia candida) and tropical isopods (Porcellio scaber) form the cleanup crew. Purchased from reptile or bioactive suppliers. They establish colonies within weeks and begin processing waste. Feed the microfauna with dried leaf litter (magnolia, oak) and occasional mushroom pieces.</p>
        <p><strong>Bioactive is appropriate for:</strong> bearded dragons, blue-tongue skinks, ball pythons, corn snakes, crested geckos, and virtually all terrestrial or semi-terrestrial species.</p>

        <h3>Loose Particle Substrates</h3>
        <p>Non-bioactive loose particle substrates mimic natural ground textures but require spot-cleaning and full replacement every 3–6 months:</p>
        <ul>
          <li><strong>Coarse reptile sand (3–4mm grain):</strong> Acceptable for desert species (uromastyx, sand boa) where natural behavior involves sand interaction. Not fine reptile sand — the fine grain is a significant impaction risk. Feed in a dish or separate enclosure.</li>
          <li><strong>Coconut fiber (coco coir):</strong> Good moisture retention, naturalistic texture, easy to spot-clean. Good for: tropical species, ball pythons, corn snakes. Relatively low impaction risk due to fibrous texture that passes more easily.</li>
          <li><strong>Orchid bark:</strong> Chunky organic material; good for humid arboreal species (crested geckos, chameleons). Low impaction risk due to particle size.</li>
          <li><strong>Sphagnum moss:</strong> Excellent moisture retention for high-humidity species and moist hides. Not practical as a primary substrate for large enclosures due to cost.</li>
        </ul>

        <h3>Tile</h3>
        <p>Slate tile, ceramic tile, or linoleum tile on the enclosure floor. Zero impaction risk, easy to disinfect, helps wear down nails naturally, holds heat well. Disadvantages: no burrowing, humidity management requires other methods, less enriching than naturalistic substrate. Appropriate for: species with higher impaction risk (young bearded dragons) or keepers who want maximum hygiene and easy cleaning.</p>

        <h3>Paper and Paper Products</h3>
        <p>Newspaper, paper towels, or reptile carpet. Appropriate for: quarantine enclosures (allows easy monitoring of waste and parasites), hospital tanks, newly acquired animals where monitoring is priority. Not for long-term setups — no enrichment value, humidity management difficult, no naturalistic behavior support.</p>

        <h2>Never Use</h2>
        <ul>
          <li><strong>Cedar or pine shavings:</strong> Phenols are toxic to reptiles</li>
          <li><strong>Calcium sand (vitamin-fortified sand):</strong> Very fine grain, marketed to reptile owners, documented impaction risk — worse than regular sand because the calcium encourages ingestion</li>
          <li><strong>Walnut shell:</strong> Sharp edges, documented impaction and injury</li>
          <li><strong>Any substrate treated with pesticides, fertilizers, or additives</strong></li>
          <li><strong>Potting soil with perlite, vermiculite, or fertilizer:</strong> Perlite and vermiculite are impaction risks; fertilizers are toxic</li>
        </ul>

        <h2>Quick Reference by Species</h2>
        <ul>
          <li><strong>Bearded dragon:</strong> Bioactive soil mix (best) or tile (safer during first year); never fine sand</li>
          <li><strong>Leopard gecko:</strong> Paper towel (juveniles), tile, or coconut fiber (adult); never sand</li>
          <li><strong>Ball python:</strong> Bioactive or coconut fiber at 4+ inch depth for burrowing; excellent moisture retention</li>
          <li><strong>Crested gecko:</strong> Bioactive tropical mix, coconut fiber, or orchid bark</li>
          <li><strong>Corn snake:</strong> Bioactive, coconut fiber, or aspen shavings (the only safe wood shaving for reptiles)</li>
          <li><strong>Blue-tongue skink:</strong> Bioactive soil mix at 4–6 inch depth for digging; coconut fiber acceptable</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
