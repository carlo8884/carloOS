import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Bioactive Reptile Enclosure Setup Guide — CUC, Plants & Substrate | Lizard.com', description: 'How to build a bioactive reptile enclosure. Drainage layer, substrate mix, cleanup crew (isopods + springtails), and live plants — step by step for desert and tropical species.', path: '/setup/bioactive-setup', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Bioactive Reptile Enclosure Setup Guide', description: 'Step-by-step bioactive enclosure build for reptiles — drainage, substrate, cleanup crew, and plants.', url: 'https://lizard.com/setup/bioactive-setup', imageUrl: '', authorName: 'Lizard.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Build a Bioactive Reptile Enclosure', description: 'Step-by-step guide to building a self-maintaining bioactive reptile setup.', url: 'https://lizard.com/setup/bioactive-setup', totalTime: 'P1D', steps: [
  { name: 'Add drainage layer', text: 'Place 2-3 inches of drainage material (hydroballs, lava rock, or coarse gravel) at the bottom. This prevents the substrate from becoming waterlogged.' },
  { name: 'Add substrate separator', text: 'Place a layer of weed barrier fabric, window screen, or reptile mesh over the drainage layer. This prevents substrate from falling into the drainage layer while allowing water to pass through.' },
  { name: 'Add substrate mix', text: 'Add 4-6 inches of appropriate substrate mix — 60/30/10 topsoil/sand/clay for desert species, or ABG/tropical mix for humid species. Pack lightly; do not compress.' },
  { name: 'Plant and hardscape', text: 'Add live plants and hardscape (cork bark, branches, rocks). Plants root into the substrate and become part of the living system. Allow 2-4 weeks for plants to establish before adding the reptile.' },
  { name: 'Introduce cleanup crew', text: 'Add isopods (Porcellionides pruinosus or Armadillidium for desert; Trichorhina tomentosa for tropical) and springtails (Collembola). Start with 50-100 isopods and a culture of springtails. These will establish and multiply.' },
  { name: 'Cycle before adding the reptile', text: 'Allow the system to run for 2-4 weeks with the lights and temperatures at target levels before adding the reptile. This allows microbial populations to establish and plants to root.' },
]})
const combined = combineSchemas(schema, howTo)
export default function BioactiveSetupPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="lizard-com"
        hero={{ title: 'Bioactive Reptile Enclosure Setup Guide', subtitle: 'A bioactive enclosure is a self-sustaining micro-ecosystem — live substrate, live plants, and a cleanup crew (CUC) of isopods and springtails that process waste. Less frequent cleaning, more natural behavior, and genuinely beautiful enclosures. Here\'s how to build one.', category: 'Setup Guide', authorName: 'Lizard.com Expert Team', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '10 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Bioactive Setup', href: '/setup/bioactive-setup' }]}
        sidebar={<>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>What You Need</div>
            {['Drainage material (hydroballs/lava rock)', 'Substrate separator mesh', 'Species-appropriate substrate mix', 'Live plants', 'Isopods (species-appropriate)', 'Springtails (Collembola culture)', 'UVB and grow light', 'Automatic mister or drip (tropical)'].map(i => (
              <div key={i} style={{ display: 'flex', gap: '8px', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px', color: 'rgba(238,240,228,0.6)', alignItems: 'center' }}>
                <span style={{ color: '#4CAF50' }}>✓</span>{i}
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Best Bioactive Substrates', href: '/reviews/best-bioactive-substrates' }, { label: 'Substrate Guide', href: '/setup/substrate-guide' }, { label: 'Humidity Guide', href: '/setup/humidity-guide' }]} />
          <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="setup-bioactive" ctaText="Download Free" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Bioactive?</h2>
          <p>A functioning bioactive enclosure is self-maintaining in a way that a paper towel and tile enclosure is not. The isopods and springtails consume shed skin, feces, dead plant matter, and uneaten food — processing it into nutrients that feed the plants. The microbial community in the soil further breaks down waste. The plants absorb these nutrients and grow. In a balanced system, deep substrate cleans may only be needed annually or less — compared to the regular spot-cleaning required in inert substrate setups.</p>
          <p>For the reptile, the benefits are behavioral: natural substrate to burrow, dig, and forage; humidity buffering from the living substrate; and environmental complexity that encourages natural behaviors. Enriched environments produce more active, less stressed reptiles.</p>

          <h2>Step 1 — Drainage Layer</h2>
          <p>The drainage layer prevents the substrate from becoming anaerobic (waterlogged and oxygen-deprived), which kills beneficial microbes and produces foul odors. 2–3 inches of hydroballs (clay aggregate pellets — LECA), lava rock, or large gravel. Hydroballs are the most popular choice — lightweight, reusable, and ideal. Add a false bottom/drainage insert in larger enclosures for the best results.</p>

          <h2>Step 2 — Substrate Separator</h2>
          <p>A layer of window screen, reptile mesh, or landscape fabric between the drainage layer and substrate prevents the substrate from falling into drainage while allowing water to pass through freely. Cut to size and place directly on top of the drainage layer before adding substrate.</p>

          <h2>Step 3 — Substrate Mix</h2>
          <p><strong>Desert species</strong> (bearded dragon, leopard gecko, uromastyx): 60% organic topsoil (no fertilizers/perlite), 30% play sand, 10% bentonite clay. 4–6 inches deep — enough for burrowing. This mix retains minimal moisture (appropriate for desert species) while supporting microbial life and plant roots.</p>
          <p><strong>Tropical species</strong> (crested gecko, day gecko, chameleon): ABG mix (Atlanta Botanical Garden mix: fir bark, tree fern fiber, peat, long fiber sphagnum, charcoal) or a mix of coconut fiber, organic topsoil, and orchid bark. 3–4 inches. Retains moisture and supports tropical plant roots.</p>

          <h2>Step 4 — Plants and Hardscape</h2>
          <p><strong>Desert plants:</strong> Haworthia, Aloe (many species), Echeveria, Gasteria, Agave. Avoid succulents with sharp spines. Cork bark flats, sandblasted grapevine, and slate create natural hardscape.</p>
          <p><strong>Tropical plants:</strong> Pothos (indestructible and fast-growing), Bromeliads (naturalistic + water storage for dart frogs and smaller species), Ficus, Peperomia, Epipremnum. Avoid plants treated with pesticides — rinse and quarantine new plants before placing in a bioactive system.</p>

          <h2>Step 5 — Cleanup Crew</h2>
          <p><strong>Isopods:</strong> The primary waste processors. For desert: Porcellionides pruinosus ("powder orange" or "powder blue") — active in drier conditions. Armadillidium vulgare (pill bug) — slightly more moisture-tolerant. For tropical: Trichorhina tomentosa ("dwarf white isopod") — small enough to not disturb small reptiles, thrive in humidity. Start with 50–100 and allow the colony to establish over several weeks.</p>
          <p><strong>Springtails:</strong> Tiny (1mm) hexapods that consume mold, fungal growth, and microscopic organic matter. Essential for preventing mold in tropical setups. Temperate springtails (Folsomia candida) for any setup; tropical springtails for warm humid conditions. Establish before adding isopods in tropical builds — springtails colonize the mold layer that would otherwise grow.</p>

          <h2>Timeline and Establishment</h2>
          <p>Allow 2–4 weeks for the system to establish before adding the reptile. During this time: water plants as needed, verify temperatures and humidity are at target, and observe the CUC colony establishing. The system will look a bit raw initially — plants will settle and begin growing, and the CUC will spread through the substrate. By week 4–6, the system is biologically active and ready for the reptile.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
