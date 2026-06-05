import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Bioactive Cleanup Crew — Isopods & Springtails | Lizard.com", description: "How isopods and springtails keep a bioactive reptile enclosure clean, which species to use, how to seed and feed them, and when a cleanup crew fails.", path: "/setup/cleanup-crew-isopods-springtails", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Bioactive Cleanup Crew Guide", description: "Choosing, seeding, and maintaining isopods and springtails as a cleanup crew in a bioactive reptile enclosure.", url: "https://lizard.com/setup/cleanup-crew-isopods-springtails", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SetupCleanupCrewIsopodsSpringtailsPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Bioactive Cleanup Crew Guide", subtitle: "The cleanup crew is the living engine of a bioactive enclosure: detritivorous invertebrates that consume waste, shed skin, uneaten food, and mold, turning them into harmless byproducts and keeping the substrate healthy. The two workhorses are isopods and springtails. Done right, they make an enclosure nearly self-cleaning; done wrong, the crew dies off and waste accumulates.", category: "Enclosure Setup", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Setup", href: "/setup" }, { name: "Cleanup Crew Guide", href: "/setup/cleanup-crew-isopods-springtails" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Setup Hub', href: '/setup', category: 'Hub' },
        { title: 'Bioactive Setup Guide', href: '/setup/bioactive-setup', category: 'Setup' },
        { title: 'Drainage Layer Guide', href: '/setup/drainage-layer-bioactive', category: 'Setup' },
        { title: 'Substrate Guide', href: '/setup/substrate-guide', category: 'Setup' },
        { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Key Points"}</div>
          {[["Role", "Consume waste, mold, shed"], ["Core members", "Isopods + springtails"], ["Isopods eat", "Waste, leaf litter, decay"], ["Springtails eat", "Mold and microscopic debris"], ["Seed before", "Adding the reptile"], ["Need", "Leaf litter + moist microhabitat"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Bioactive Setup", href: "/setup/bioactive-setup" }, { label: "Drainage Layer Guide", href: "/setup/drainage-layer-bioactive" }, { label: "Substrate Guide", href: "/setup/substrate-guide" }, { label: "Mourning Gecko Care", href: "/species/mourning-gecko" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-setup-cleanup-crew-isopods-springtails"} ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"A bioactive enclosure works because waste does not just sit there; a community of detritivores breaks it down continuously. Isopods (terrestrial crustaceans, also called woodlice, pillbugs, or rollie-pollies) handle the larger organic debris, while springtails (tiny hexapods) graze on mold and microscopic decay. Together with beneficial soil microbes, they form the cleanup crew that processes reptile feces, shed skin, dead plant matter, and uneaten food into a stable, low-odor substrate that supports plant growth."}</p>
          <h2>{"What Each Member Does"}</h2>
          <ul>
            <li>{"Isopods: consume reptile waste, decaying leaf litter, and shed skin, and help aerate the substrate; some species also provide an occasional protein snack for small insectivores"}</li>
            <li>{"Springtails: bloom rapidly in moist conditions and graze mold and fungal growth, which is critical for keeping a humid enclosure from going moldy"}</li>
            <li>{"Beneficial microbes: the bacterial and fungal background that the invertebrates support and that completes waste breakdown"}</li>
            <li>{"The crew does not replace spot-cleaning for large waste in a lightly planted setup, but it dramatically reduces maintenance in a mature bioactive enclosure"}</li>
          </ul>
          <h2>{"Choosing Isopod and Springtail Species"}</h2>
          <p>{"Match the cleanup crew to the enclosure’s moisture level and the size of the reptile."}</p>
          <ul>
            <li>{"Common starter isopods include dwarf white (Trichorhina tomentosa) for humid setups and dwarf purple/grey species; larger ornamental isopods (Porcellio, Armadillidium) suit bigger enclosures and tolerate a range of conditions"}</li>
            <li>{"Dwarf white isopods and tropical springtails thrive in high humidity and are ideal for tropical bioactive setups"}</li>
            <li>{"For arid bioactive enclosures, choose isopod species tolerant of drier conditions and keep a moist microhabitat (a damp corner or hide) for them"}</li>
            <li>{"Tropical springtails (Collembola) are the near-universal mold-control choice and are added to almost every bioactive build"}</li>
          </ul>
          <h2>{"Seeding the Crew"}</h2>
          <ol>
            <li>{"Build the substrate and let the enclosure stabilize, ideally with a drainage layer for humid setups"}</li>
            <li>{"Add a generous layer of dried leaf litter (oak, magnolia) and some decaying wood, which is the crew’s food and shelter base"}</li>
            <li>{"Seed springtails first and let them establish, then add isopods"}</li>
            <li>{"Allow the cleanup crew to populate and the planting to root for several weeks before introducing the reptile, so the colony is large enough to keep up with waste"}</li>
            <li>{"Maintain appropriate moisture; both groups need a humid microhabitat even in drier enclosures"}</li>
          </ol>
          <h2>{"Feeding and Maintaining the Crew"}</h2>
          <p>{"A cleanup crew cannot live on reptile waste alone, especially before the animal is added or in a lightly used enclosure. Supplement with leaf litter, decaying wood, and small amounts of supplemental food (such as fish flakes, dried leaves, or specialized isopod foods); calcium sources like cuttlebone help isopods. Keep the substrate appropriately moist, since both isopods and springtails dehydrate quickly in dry conditions. A thriving crew is visible as small invertebrates moving through the leaf litter, especially at night."}</p>
          <h2>{"When the Cleanup Crew Fails"}</h2>
          <ul>
            <li>{"Substrate too dry: the crew dies off or goes dormant and waste accumulates; add a moist microhabitat"}</li>
            <li>{"Substrate waterlogged: anaerobic, foul soil drowns the crew; fix drainage and ventilation"}</li>
            <li>{"No leaf litter or food base: the colony starves before the reptile produces enough waste to sustain it"}</li>
            <li>{"Overpowering waste load: a large reptile in a small enclosure can outproduce a small crew; size the enclosure and crew accordingly and continue spot-cleaning large waste"}</li>
            <li>{"Pesticide contamination: feeder insects or plants treated with pesticides can wipe out the crew, so source clean inputs"}</li>
          </ul>
          <p>{"A well-established cleanup crew is the difference between a bioactive enclosure that maintains itself and one that becomes a smelly, mold-prone problem."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Reptiles Magazine and bioactive-husbandry references."}</li>
            <li>{"Arcadia Reptile bio-active guidance materials."}</li>
            <li>{"Entomological references on Isopoda and Collembola in vivarium ecosystems."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
