import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Ophthalmology and Integumentary Disease", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Eye Diseases of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/eye-diseases-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Journal of Herpetological Medicine and Surgery — Spectacle retention and ophthalmology references", publisher: "ARAV / Allen Press", url: "https://meridian.allenpress.com/jhms" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Retained Eye Caps in Snakes & Geckos | Lizard.com", description: "Retained eye caps (retained spectacles) are a common shedding problem in snakes and geckos. Causes, why never to peel them, and safe removal.", path: "/health/retained-eye-caps", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Retained Eye Caps (Retained Spectacles)", description: "Causes, recognition, safe management, and prevention of retained eye caps (spectacles) in snakes and geckos.", url: "https://lizard.com/health/retained-eye-caps", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthRetainedEyeCapsPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Retained Eye Caps (Retained Spectacles)", subtitle: "Snakes and many geckos have a clear protective scale, the spectacle or eye cap, covering each eye, which is normally shed with the rest of the skin. When it is retained, layers of old spectacle build up over the eye, impairing vision and risking infection. Retained eye caps are almost always a humidity problem and must never be forcibly peeled off.", category: "Health — Husbandry-Driven", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Retained Eye Caps", href: "/health/retained-eye-caps" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Dysecdysis (Retained Shed)', href: '/health/dysecdysis', category: 'Health' },
        { title: 'Shedding Guide', href: '/husbandry/shedding-guide', category: 'Husbandry' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
        { title: 'Leopard Gecko Care', href: '/species/leopard-gecko', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"At a Glance"}</div>
          {[["What it is", "Unshed clear eye scale"], ["Affects", "Snakes and many geckos"], ["Main cause", "Low humidity / dehydration"], ["Sign", "Dull, wrinkled, or cloudy eye"], ["Never", "Force-peel the cap"], ["Persistent cases", "See a reptile vet"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Dysecdysis (Shedding Problems)", href: "/health/dysecdysis" }, { label: "Shedding Guide", href: "/husbandry/shedding-guide" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }, { label: "Leopard Gecko Care", href: "/species/leopard-gecko" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-retained-eye-caps"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"The spectacle (also called the brille or eye cap) is a transparent scale fused over the eye in snakes and in many geckos that lack movable eyelids. It is part of the skin and is normally shed along with the rest of the outer layer during each ecdysis. When a shed is incomplete, the spectacle can be retained; if this happens repeatedly, successive layers accumulate over the eye, progressively clouding vision and creating a space where debris and infection can develop. It is a common and usually preventable consequence of inadequate shedding conditions."}</p>
          <h2>{"Recognizing a Retained Eye Cap"}</h2>
          <ul>
            <li>{"A dull, wrinkled, cloudy, or sunken appearance to one or both eyes after a shed, when the rest of the skin came off cleanly"}</li>
            <li>{"A visible thin film or a slightly raised disc over the eye"}</li>
            <li>{"In snakes, you may notice the rest of the shed lacked the clear eye-cap windows (look at the shed skin: each eye should leave a transparent dome)"}</li>
            <li>{"Over repeated cycles, a progressively thicker, more opaque covering and possible eye irritation or infection"}</li>
          </ul>
          <p>{"Distinguish a retained eye cap from the normal cloudy, blue-grey eye that snakes show in the pre-shed phase; that opacity clears on its own a day or two before the shed. A retained cap persists after the shed is complete."}</p>
          <h2>{"Causes"}</h2>

          <h2>{"Safe Management"}</h2>
          <ol>
            <li>{"First, correct the husbandry: raise humidity appropriately for the species, provide a humid hide, and ensure good hydration"}</li>
            <li>{"For a recently retained cap, increase humidity and give the animal an opportunity to soak; often the next shed, in proper conditions, takes the retained cap with it"}</li>
            <li>{"A gentle warm, humid soak can soften a retained cap so it lifts during the subsequent shed; do not pull at it"}</li>
            <li>{"If the cap persists over multiple sheds, builds up in layers, or the eye looks irritated, have a reptile veterinarian remove it"}</li>
          </ol>

          <h2>{"Prevention"}</h2>
          <ul>
            <li>{"Maintain species-appropriate humidity and provide a humid hide during shed cycles"}</li>
            <li>{"Keep the animal well hydrated with available water and, where appropriate, occasional soaks"}</li>
            <li>{"Provide rough surfaces (cork, branches, rock) so the animal can start its shed properly, including the head"}</li>
            <li>{"Check the shed skin each cycle to confirm both clear eye caps came off"}</li>
            <li>{"Address mites and any eye irritation promptly, since they interfere with normal shedding"}</li>
          </ul>
          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
