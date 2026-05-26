import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Bioactive Vivarium Setup Guide — Substrate, CUC & Plant Selection | Lizard.com', description: 'Bioactive vivariums use a living substrate, plants, and a cleanup crew (springtails + isopods) to self-maintain. Setup guide for tropical and desert bioactive enclosures.', path: '/setup/bioactive-setup', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Bioactive Vivarium Setup Guide', description: 'Substrate mix, cleanup crew, plant selection, and setup for tropical and desert bioactive reptile vivariums.', url: 'https://lizard.com/setup/bioactive-setup', imageUrl: '', authorName: 'Lizard.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BioactiveSetupPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Bioactive Vivarium Setup Guide', subtitle: 'A bioactive vivarium uses a living substrate ecosystem — beneficial microorganisms, plants, and a cleanup crew of invertebrates — to break down waste, maintain substrate structure, and create a self-sustaining micro-habitat. Done correctly, bioactive setups require less frequent substrate changes, provide environmental enrichment, and look spectacular.', category: 'Setup Guide', authorName: 'Lizard.com Expert Team', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Bioactive Setup', href: '/setup/bioactive-setup' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Cleanup Crew (CUC)</div>
          {[['Tropical springtails', 'Folsomia candida — primary detritivore · Thrive in moist conditions'], ['Temperate springtails', 'Orchesella — more robust · Wider humidity range'], ['Dwarf white isopods', 'Trichorhina tomentosa — harmless · Good for reptile tanks'], ['Porcellio scaber', 'Larger isopod · Better for drier conditions'], ['Armadillidium sp.', 'Pill bugs — excellent burrowers · Drier setups']].map(([n, d]) => (
            <div key={n} style={{ padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <div style={{ color: 'var(--brand-white)', fontWeight: 600, fontSize: '11px' }}>{n}</div>
              <div style={{ color: 'rgba(238,240,228,0.45)', fontSize: '11px' }}>{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Substrate Guide', href: '/setup/substrate-guide' }, { label: 'Crested Gecko Care', href: '/species/crested-gecko' }, { label: 'Day Gecko Care', href: '/species/day-gecko' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="setup-bioactive" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>How Bioactive Systems Work</h2>
        <p>A bioactive vivarium functions like a miniature ecosystem: the reptile produces waste (feces, shed skin, uneaten food), the cleanup crew (CUC) — springtails and isopods — consume and break down the waste, beneficial soil microorganisms continue the decomposition into nutrients, and plants uptake those nutrients while roots stabilize the substrate structure. This closed-loop waste processing is why a functioning bioactive setup can go months without substrate changes.</p>
        <p>The key word: functioning. A bioactive setup that does not have an established CUC, sufficient substrate depth for microbial activity, or appropriate moisture conditions does not self-process waste — it is just a decorated tank. The biological system takes time to establish (typically 2-4 months after setup for the CUC to reach working population density) and requires appropriate conditions to maintain. Bioactive is not "set it and forget it" — it is a different kind of ongoing management compared to traditional spot-cleaning setups.</p>

        <h2>Tropical vs Desert Bioactive</h2>
        <p><strong>Tropical bioactive</strong> (crested geckos, day geckos, chameleons, dart frogs) is the more established and easier to maintain of the two types. Consistently moist substrate supports a thriving springtail and isopod population. Tropical plants grow readily, root systems stabilize substrate, and the system establishes quickly. The Josh's Frogs ABG (Atlanta Botanical Garden) substrate mix — or commercial equivalent — is the standard: orchid bark, long-fiber sphagnum moss, coco fiber, charcoal, and organic topsoil in a layered or mixed system.</p>
        <p><strong>Desert bioactive</strong> (bearded dragons, uromastyx, leopard geckos) is more challenging because the dry conditions that reptiles require are also conditions where springtails struggle. Solutions: maintain a "dry desert" surface while providing moisture deeper in the substrate through occasional deep watering, use desert-adapted CUC species (certain Porcellio isopods, buffalo beetles), and accept a slower decomposition rate than tropical setups. The substrate mix for desert bioactive: 60-70% organic topsoil, 30-40% coarse sand, with no peat (holds too much moisture).</p>

        <h2>Drainage Layer</h2>
        <p>The drainage layer prevents waterlogging of the substrate in tropical setups — essential for plant health and preventing anaerobic conditions that kill the CUC. Build the drainage layer before the substrate: 2-3 inches of lava rock, hydroballs/LECA (lightweight expanded clay aggregate), or coarse gravel at the tank's base. A mesh or screen layer (window screen, plastic mesh) separates the drainage layer from the substrate above, preventing mixing. The drainage layer holds excess water below the root zone while keeping the substrate moist but not saturated.</p>

        <h2>Plant Selection</h2>
        <p><strong>Tropical vivarium:</strong> Pothos (Epipremnum aureum) is the universal standard — grows aggressively, roots quickly, tolerates shade, and is non-toxic. Bromeliads hold water in their cups (natural water sources for arboreal species). Ficus benjamina and F. pumila (creeping fig) for climbing surface coverage. Sansevieria for structural interest. Ferns (Boston, bird's nest) for ground cover. Avoid plants with sharp edges or toxic species.</p>
        <p><strong>Desert vivarium:</strong> Succulents and cacti can be used but need protection from active digging species. Haworthia and Gasteria are robust and low-light tolerant. Tillandsia (air plants) add texture without needing substrate rooting. Most plants in desert bioactive setups need to be in protected areas or elevated out of the reptile's digging zone to survive.</p>

        <h2>Establishing the System Before Adding the Reptile</h2>
        <p>Build the bioactive setup and allow it to run without the reptile for 4–8 weeks. This establishment period: allows plants to root, the CUC to colonize the substrate and establish breeding populations, and the microbial community to develop. Adding the reptile immediately after building the setup disrupts the establishment phase and typically results in the CUC being wiped out by the waste load before populations are sufficient to handle it. A patient establishment period produces a dramatically better long-term outcome.</p>
      </div>
    </ArticleLayout>
  )
}
