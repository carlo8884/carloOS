import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Reptile Constipation & Impaction — Prevention | Lizard.com", description: "Reptile constipation and impaction differ in cause and danger. How to tell them apart, the role of substrate, heat, and hydration, and when it is an emergency.", path: "/health/constipation-impaction", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Constipation and Impaction in Reptiles", description: "Distinguishing reptile constipation from true impaction, causes, prevention via husbandry, and emergency signs.", url: "https://lizard.com/health/constipation-impaction", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthConstipationImpactionPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Constipation and Impaction in Reptiles", subtitle: "Constipation (difficulty passing stool) and impaction (a physical gut blockage) are related but distinct problems, and confusing them can be dangerous. Both trace largely to keeper-controlled factors, substrate, prey size, hydration, and temperature, which is why most cases are preventable. Knowing the difference and the warning signs lets you act before a simple slow-down becomes a surgical emergency.", category: "Health — Husbandry-Driven", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Constipation & Impaction", href: "/health/constipation-impaction" }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"At a Glance"}</div>
          {[["Constipation", "Hard/slow stool passage"], ["Impaction", "Physical gut blockage"], ["Main drivers", "Substrate, prey size, heat, hydration"], ["Supportive care", "Warm soaks + correct temps"], ["Do NOT", "Give mineral oil/laxatives unprompted"], ["Emergency", "Distension + straining + anorexia"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Leopard Gecko Care", href: "/species/leopard-gecko" }, { label: "Substrate Guide", href: "/setup/substrate-guide" }, { label: "Dehydration in Reptiles", href: "/health/dehydration-reptiles" }, { label: "Cloacal Prolapse", href: "/health/prolapse-first-aid" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-constipation-impaction"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Reptiles defecate on a slower, more variable schedule than mammals, and a few days without stool is often normal depending on species, feeding frequency, and temperature. Problems arise when the gut slows or blocks: constipation is difficulty passing stool that is present but not moving well, while impaction is a true mechanical obstruction, often from ingested substrate or oversized prey, that physically blocks the tract. Impaction is the more dangerous of the two and can progress to a life-threatening obstruction requiring surgery."}</p>
          <h2>{"Constipation Versus Impaction"}</h2>
          <ul>
            <li>{"Constipation: stool is present but hard or slow to pass, often from dehydration, low temperatures, or insufficient fiber/roughage for the species; usually responds to husbandry correction and supportive care"}</li>
            <li>{"Impaction: a physical blockage, classically from ingested loose substrate (sand, walnut shell, ground coconut, calcium sand) or prey items too large to transit the gut; more serious and may need veterinary intervention"}</li>
            <li>{"Both present similarly (no stool, straining, reduced appetite), so the distinction is often made by a veterinarian using examination and radiographs"}</li>
          </ul>
          <h2>{"Causes and Risk Factors"}</h2>

          <ul>
            <li>{"Loose or inappropriate substrate ingested while feeding"}</li>
            <li>{"Oversized or indigestible prey"}</li>
            <li>{"Dehydration and low humidity for species that need it"}</li>
            <li>{"Temperatures below the species range, slowing motility"}</li>
            <li>{"Calcium deficiency and poor body condition"}</li>
          </ul>
          <h2>{"Supportive Care and What Not to Do"}</h2>
          <p>{"For a mildly constipated but otherwise alert animal, first correct the husbandry: confirm correct basking and ambient temperatures, ensure hydration, and offer a warm shallow soak (lukewarm, belly-deep, 15 to 20 minutes) once or twice daily, which often stimulates a bowel movement. Maintain correct temperatures so digestion can proceed."}</p>

          <h2>{"When It Is an Emergency"}</h2>
          <ul>
            <li>{"More than about two weeks without defecation in an animal that is still eating"}</li>
            <li>{"A visibly distended, firm, or bulging abdomen"}</li>
            <li>{"Persistent straining or unproductive bearing-down"}</li>
            <li>{"Food refusal lasting more than a week with no benign explanation"}</li>
            <li>{"Lethargy, regurgitation, or signs of a prolapse from straining"}</li>
          </ul>
          <p>{"Any of these warrants prompt veterinary assessment; radiographs distinguish constipation from impaction and determine whether conservative management or surgery is needed. Early cases caught quickly are usually managed conservatively, while a long-standing obstruction may require surgery."}</p>
          <h2>{"Prevention"}</h2>
          <ul>
            <li>{"Use solid or appropriate substrate for the species, and feed loose-substrate animals from a dish or with tongs"}</li>
            <li>{"Keep prey appropriately sized for the species"}</li>
            <li>{"Maintain correct temperatures and hydration so the gut moves normally"}</li>
            <li>{"Supplement calcium correctly to remove substrate-seeking behavior"}</li>
            <li>{"Track defecation in a care log so you notice a slow-down early"}</li>
          </ul>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), gastrointestinal chapters."}</li>
            <li>{"Journal of Herpetological Medicine and Surgery, impaction case reports."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
