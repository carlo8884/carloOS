import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Abscesses and Infectious Disease", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Bacterial Diseases of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/bacterial-diseases-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Journal of Herpetological Medicine and Surgery — Aural abscess and infectious disease case reports", publisher: "ARAV / Allen Press", url: "https://meridian.allenpress.com/jhms" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Abscesses in Reptiles — Caseous Pus & Treatment | Lizard.com", description: "Reptile abscesses form firm, cheese-like pus that the body cannot drain on its own. Why they need surgical removal, common causes, and prevention.", path: "/health/abscess-treatment", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Abscesses in Reptiles", description: "Why reptile abscesses are solid (caseous), how they form, why they need surgical removal, and prevention.", url: "https://lizard.com/health/abscess-treatment", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthAbscessTreatmentPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Abscesses in Reptiles", subtitle: "Abscesses in reptiles look and behave differently from those in mammals. Because reptile immune systems produce thick, cheese-like (caseous) pus rather than the liquid pus mammals form, a reptile abscess becomes a firm, walled-off lump that the body cannot reabsorb or drain on its own. That is why most reptile abscesses require surgical removal by a veterinarian rather than simple lancing.", category: "Health — Common", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Reptile Abscesses", href: "/health/abscess-treatment" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
        { title: 'Respiratory Infection', href: '/health/respiratory-infection', category: 'Health' },
        { title: 'Stomatitis (Mouth Rot)', href: '/health/stomatitis', category: 'Health' },
        { title: 'Parasites Guide', href: '/health/parasites-guide', category: 'Health' },
        { title: 'Salmonella Prevention', href: '/health/salmonella-prevention', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"At a Glance"}</div>
          {[["Pus type", "Caseous (solid, cheese-like)"], ["Appearance", "Firm lump or swelling"], ["Self-heal?", "No — body cannot drain it"], ["Treatment", "Surgical removal"], ["Common causes", "Wounds, bites, husbandry"], ["Special case", "Aural (ear) abscesses in turtles"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Stomatitis (Mouth Rot)", href: "/health/stomatitis" }, { label: "Thermal Burns", href: "/health/thermal-burns" }, { label: "Sick Reptile Signs", href: "/health/sick-reptile-signs" }, { label: "Enclosure Setup", href: "/setup" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-abscess-treatment"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"An abscess is a localized pocket of infection. In mammals, the immune system produces liquid pus that can be drained, and the cavity then heals. Reptiles produce a fundamentally different, semi-solid caseous (cheese-like) pus, so a reptile abscess becomes a firm, encapsulated mass. The body walls it off but cannot break it down or expel it, which means the infection persists and often slowly enlarges until it is physically removed. Understanding this difference explains why a reptile lump should never simply be squeezed or lanced like a mammalian boil."}</p>
          <h2>{"How Abscesses Form"}</h2>
          <ul>
            <li>{"Bite wounds from cagemates or feeder prey (a strong reason to feed frozen/thawed and avoid risky cohabitation)"}</li>
            <li>{"Skin injuries, burns, or abrasions that become contaminated, including thermal burns from unguarded heat sources"}</li>
            <li>{"Poor husbandry: dirty enclosures, incorrect temperatures that impair immune function, and chronic stress"}</li>
            <li>{"Internal abscesses secondary to systemic infection"}</li>
            <li>{"Aural (ear) abscesses in turtles and tortoises, classically linked to vitamin A deficiency and poor water quality"}</li>
          </ul>
          <h2>{"Recognizing an Abscess"}</h2>
          <p>{"Most external abscesses present as a firm, often well-defined swelling or lump under the skin, which may be visible anywhere on the body, on the limbs, jaw, or, in chelonians, the side of the head near the ear. The lump is usually firm rather than soft and fluid-filled. Depending on location and size, there may be associated lethargy, reduced appetite, or difficulty using a limb. Any new firm swelling on a reptile warrants veterinary evaluation rather than home treatment."}</p>
          <h2>{"Treatment"}</h2>

          <p>{"Aural abscesses in turtles and tortoises are a recognized special case, often managed by surgically opening and cleaning the ear canal and correcting the underlying vitamin A deficiency and water-quality problems."}</p>
          <h2>{"Prevention"}</h2>
          <ol>
            <li>{"Maintain clean enclosures and correct temperatures so the immune system functions normally"}</li>
            <li>{"Feed frozen/thawed prey to eliminate prey-bite wounds, and avoid cohabitation that leads to fighting"}</li>
            <li>{"Guard all heat sources to prevent thermal burns that can become infected"}</li>
            <li>{"Provide appropriate vitamin A through a correct diet, especially for chelonians, to prevent aural abscesses"}</li>
            <li>{"Inspect animals regularly and address wounds, burns, or swellings early with a reptile veterinarian"}</li>
          </ol>
          <p>{"Caught early and removed surgically, most reptile abscesses resolve well; left alone in the hope they will drain or heal, they persist and can seed deeper infection."}</p>
          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
