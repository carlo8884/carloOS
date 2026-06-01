import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Bioactive Drainage Layer Guide — False Bottoms | Lizard.com", description: "How to build a drainage layer (false bottom) in a bioactive reptile enclosure, what materials to use, when you need one, and how to avoid a swamp.", path: "/setup/drainage-layer-bioactive", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Bioactive Drainage Layer Guide", description: "Building a drainage layer or false bottom for a bioactive reptile vivarium, materials, substrate barriers, and when one is needed.", url: "https://lizard.com/setup/drainage-layer-bioactive", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SetupDrainageLayerBioactivePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Bioactive Drainage Layer Guide", subtitle: "In a humid bioactive enclosure, excess water has to go somewhere other than the substrate, or the soil turns into an anaerobic swamp that kills plants, drowns the cleanup crew, and breeds harmful bacteria. A drainage layer (sometimes called a false bottom) creates a reservoir beneath the substrate to hold that water. This guide covers how to build one and when you actually need it.", category: "Enclosure Setup", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Setup", href: "/setup" }, { name: "Drainage Layer Guide", href: "/setup/drainage-layer-bioactive" }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Key Points"}</div>
          {[["Purpose", "Hold excess water below soil"], ["Needed for", "Humid/misted bioactive setups"], ["Often skip for", "Arid species"], ["Layers", "Drainage > barrier > substrate"], ["Materials", "LECA, lava rock, or matrix"], ["Barrier", "Mesh / fiberglass screen"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Bioactive Setup", href: "/setup/bioactive-setup" }, { label: "Substrate Guide", href: "/setup/substrate-guide" }, { label: "Cleanup Crew Guide", href: "/setup/cleanup-crew-isopods-springtails" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-setup-drainage-layer-bioactive"} ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"A bioactive enclosure is a self-cleaning miniature ecosystem: live plants, a moisture-retaining substrate, and a cleanup crew of invertebrates that break down waste. For humid and frequently misted setups, the system depends on water moving down out of the root zone rather than pooling in it. A drainage layer is the reservoir at the bottom that captures that runoff, keeping the substrate moist but never waterlogged. Without it, repeated misting saturates the soil from the bottom up, suffocating plant roots and beneficial microbes."}</p>
          <h2>{"When You Actually Need a Drainage Layer"}</h2>

          <h2>{"Layer Structure, Bottom to Top"}</h2>
          <ol>
            <li>{"Waterproof base: ensure the enclosure floor is sealed (glass is fine; bare wood must be waterproofed) so trapped water cannot rot the enclosure"}</li>
            <li>{"Drainage layer: 1 to 3 inches of lightweight, porous, non-compacting material that holds water in air gaps below the substrate"}</li>
            <li>{"Substrate barrier: a layer of fiberglass window screen or mesh laid over the drainage media to stop substrate from washing down and clogging the reservoir"}</li>
            <li>{"Bioactive substrate: the soil mix where plants root and the cleanup crew lives, several inches deep"}</li>
          </ol>
          <h2>{"Drainage Media Options"}</h2>
          <ul>
            <li>{"LECA (lightweight expanded clay aggregate / hydroton): the most popular choice, very light, reusable, and holds plenty of air space"}</li>
            <li>{"Lava rock: heavier but inexpensive and effective, with lots of surface area"}</li>
            <li>{"Commercial matrix products (such as bioactive matrix panels): convenient and consistent but pricier"}</li>
            <li>{"Avoid pea gravel as a sole layer: it is heavy and holds less air space than LECA for the same volume"}</li>
          </ul>
          <h2>{"Managing the Water Reservoir"}</h2>
          <p>{"The reservoir is not meant to overflow into the substrate. Mist and water so the soil stays appropriately moist while excess collects below the barrier; the substrate should wick a little moisture back up, but the water table should stay in the drainage layer. In tall enclosures, many keepers install a length of rigid tubing down into the drainage layer so they can monitor the water level and siphon out excess periodically, preventing the reservoir from rising into the root zone."}</p>
          <h2>{"Avoiding the Swamp Problem"}</h2>
          <ul>
            <li>{"Do not over-mist; let the substrate surface dry slightly between mistings to avoid constant saturation"}</li>
            <li>{"Check the reservoir level and siphon out standing water before it reaches the barrier"}</li>
            <li>{"Ensure live plants and the cleanup crew are matched to the moisture level so they help process water and waste"}</li>
            <li>{"Provide ventilation so the surface is not permanently wet, which invites mold and respiratory pathogens"}</li>
            <li>{"For species that need a drier surface, taper substrate moisture toward the top while the drainage layer manages the bottom"}</li>
          </ul>
          <p>{"A correctly built drainage layer makes a humid bioactive enclosure largely self-sustaining; a missing or mismanaged one is the most common reason new bioactive builds turn into stagnant, foul-smelling swamps."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Reptiles Magazine and bioactive-husbandry references on vivarium construction."}</li>
            <li>{"Arcadia Reptile bio-active guidance materials."}</li>
            <li>{"Horticultural references on drainage media (LECA) and substrate aeration."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
