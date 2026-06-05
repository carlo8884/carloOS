import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Parasitology: Ophionyssus natricis", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — External Parasites of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/external-parasites-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Journal of Herpetological Medicine and Surgery — Ophionyssus natricis literature", publisher: "ARAV / Allen Press", url: "https://meridian.allenpress.com/jhms" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Snake Mites — Identification & Eradication | Lizard.com", description: "Snake mites (Ophionyssus natricis) are a common, fast-spreading external parasite. How to spot them, why quarantine matters, and the long road to eradication.", path: "/health/snake-mite-eradication", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Snake Mites and Reptile Mites", description: "Identifying snake mites (Ophionyssus natricis), their life cycle, eradication strategy, and quarantine to prevent spread.", url: "https://lizard.com/health/snake-mite-eradication", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthSnakeMiteEradicationPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Snake Mites and Reptile Mites", subtitle: "Snake mites (Ophionyssus natricis) are tiny external parasites that feed on a reptile’s blood and spread explosively through a collection. They cause irritation, stress, anemia, and can transmit disease. Eradication is achievable but demands persistence: you must break the mite life cycle on the animal and in the entire environment, not just kill the adults you can see.", category: "Health — Common", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Snake Mites", href: "/health/snake-mite-eradication" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Parasites Guide', href: '/health/parasites-guide', category: 'Health' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
        { title: 'Corn Snake Care', href: '/species/corn-snake', category: 'Species' },
        { title: 'Reptile Buying Checklist', href: '/species/reptile-buying-checklist', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"At a Glance"}</div>
          {[["Parasite", "Ophionyssus natricis"], ["Looks like", "Tiny moving black/red dots"], ["Hotspots", "Eyes, chin, vent, between scales"], ["Spreads", "Very fast between animals"], ["Key tool", "Quarantine + full enviro treatment"], ["Beware", "Eggs survive off the host"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Reptile Parasites", href: "/health/parasites" }, { label: "Parasites Guide", href: "/health/parasites-guide" }, { label: "Enclosure Setup", href: "/setup" }, { label: "Ball Python Care", href: "/species/ball-python" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-snake-mite-eradication"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"The snake mite is the most common external parasite of captive snakes and also affects lizards. These blood-feeding arachnids are small but visible, and an infestation can build with alarming speed because a single fed female can lay many eggs, and the life cycle, from egg to larva to nymph to adult, can complete in as little as one to two weeks under warm conditions. They spread between animals on hands, equipment, and substrate, so an infestation in one enclosure quickly becomes a collection-wide problem if not contained immediately."}</p>
          <h2>{"Identifying Snake Mites"}</h2>
          <ul>
            <li>{"Tiny moving dots, typically black, dark red, or grey, seen on the animal or crawling on your hands and arms after handling"}</li>
            <li>{"Concentrations around the eyes, under the chin, around the vent, in the heat pits, and between scales where they shelter"}</li>
            <li>{"Tiny white specks (mite feces or eggs) and a dusty appearance on the snake"}</li>
            <li>{"Behavioral signs: excessive soaking in the water bowl (the snake tries to drown the mites), restlessness, rubbing against objects, dull skin, and frequent or incomplete sheds"}</li>
            <li>{"In heavy infestations, lethargy and anemia from blood loss"}</li>
          </ul>
          <h2>{"Why Eradication Is Hard"}</h2>

          <h2>{"The Eradication Strategy"}</h2>
          <ol>
            <li>{"Immediately quarantine the affected animal away from the rest of the collection and treat handling and equipment as contaminated"}</li>
            <li>{"Strip the enclosure: discard porous substrate and decor that cannot be sterilized, and thoroughly clean and disinfect everything else, including seams and the surrounding area"}</li>
            <li>{"Switch the quarantined animal to paper-towel substrate and a simple, disinfectable setup so mites have nowhere to hide and progress is visible"}</li>
            <li>{"Treat the animal and environment with a veterinarian-recommended miticide regimen; product selection and safe use vary by species and situation, so follow veterinary guidance rather than improvising"}</li>
            <li>{"Repeat treatment and cleaning on a schedule that outlasts the egg-to-adult cycle (typically several weeks) to catch each new generation"}</li>
            <li>{"Confirm eradication by inspecting the animal and a white paper-towel substrate for several mite-free weeks before relaxing quarantine"}</li>
          </ol>
          <h2>{"A Veterinary Note on Products"}</h2>
          <p>{"Many miticide products and home remedies circulate in the hobby, and some are dangerous or even fatal to certain species if misused. Because safe, effective treatment depends on the species, the animal’s size and health, and the severity of the infestation, consult a reptile-experienced veterinarian for the specific product and protocol rather than relying on a generic dose; this guide deliberately does not specify chemical doses."}</p>
          <h2>{"Prevention"}</h2>
          <ul>
            <li>{"Quarantine every new animal for an extended period and inspect for mites before introduction to the collection"}</li>
            <li>{"Wash hands and change or disinfect equipment between enclosures"}</li>
            <li>{"Inspect animals regularly, especially around the eyes, chin, and vent"}</li>
            <li>{"Source animals from clean, reputable keepers and inspect at purchase"}</li>
            <li>{"Treat any mite sighting as an emergency containment situation before it spreads"}</li>
          </ul>
          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
