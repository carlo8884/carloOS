import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Gout in Reptiles — Causes and Prevention | Lizard.com", description: "Gout in reptiles comes from uric acid buildup, usually chronic dehydration or excess protein. Signs, why it is often irreversible, and prevention.", path: "/health/gout-prevention", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Gout in Reptiles", description: "Causes, signs, and prevention of articular and visceral gout in reptiles from dehydration and dietary factors.", url: "https://lizard.com/health/gout-prevention", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthGoutPreventionPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Gout in Reptiles", subtitle: "Gout in reptiles is the painful deposition of uric acid crystals in joints (articular gout) or around internal organs (visceral gout). It usually results from chronic dehydration or kidney dysfunction, often compounded by an inappropriately high-protein diet. Because the damage is frequently irreversible, prevention through hydration and correct diet matters far more than treatment.", category: "Health — Husbandry-Driven", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Reptile Gout", href: "/health/gout-prevention" }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"At a Glance"}</div>
          {[["Cause", "Uric acid buildup"], ["Drivers", "Dehydration, kidney disease, excess protein"], ["Articular gout", "Crystals in joints"], ["Visceral gout", "Crystals around organs"], ["Reversible?", "Often not"], ["Prevention", "Hydration + correct diet"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Dehydration in Reptiles", href: "/health/dehydration-reptiles" }, { label: "Reptile Feeding Guide", href: "/health/reptile-feeding-guide" }, { label: "Uromastyx Care", href: "/species/uromastyx" }, { label: "Sick Reptile Signs", href: "/health/sick-reptile-signs" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-gout-prevention"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Reptiles excrete most of their nitrogenous waste as uric acid (the white portion of their droppings, called urates), which requires far less water than the urea mammals produce. This water-efficient system works well when the animal is properly hydrated and its kidneys are healthy. When uric acid builds up faster than it can be excreted, it crystallizes and deposits in tissues, causing gout. The condition is most often a slow consequence of chronic husbandry problems rather than a sudden illness, which is why it is frequently advanced by the time it is recognized."}</p>
          <h2>{"Articular Versus Visceral Gout"}</h2>
          <ul>
            <li>{"Articular gout: uric acid crystals deposit in and around joints, causing swollen, painful joints, stiffness, reluctance to move, and visible firm swellings; sometimes the chalky deposits (tophi) are apparent"}</li>
            <li>{"Visceral gout: crystals deposit around internal organs such as the kidneys, heart, and liver; it is harder to detect externally, often more serious, and may only be diagnosed through advanced workup or at necropsy"}</li>
            <li>{"Both forms reflect a body burden of uric acid that the kidneys cannot clear"}</li>
          </ul>
          <h2>{"Causes"}</h2>

          <ul>
            <li>{"Chronic dehydration and inadequate water or humidity"}</li>
            <li>{"Kidney disease or damage"}</li>
            <li>{"Excess dietary protein, particularly animal protein fed to herbivores"}</li>
            <li>{"Long-term husbandry errors affecting hydration and renal health"}</li>
          </ul>
          <h2>{"Diagnosis and Treatment"}</h2>
          <p>{"A reptile veterinarian diagnoses gout through clinical signs, joint fluid or tissue sampling, bloodwork (including uric acid levels), and imaging. Treatment is challenging: established crystal deposits, especially in visceral gout, are often irreversible, and care focuses on supportive measures, aggressive rehydration, pain management, dietary correction, and protecting remaining kidney function. Because drug selection and dosing depend on the species, the form of gout, and kidney status, all medication decisions must be made by the treating exotics veterinarian."}</p>
          <h2>{"Prevention"}</h2>
          <ol>
            <li>{"Keep the animal properly hydrated with constant clean water, species-appropriate humidity, and regular soaks for species that benefit from them"}</li>
            <li>{"Feed a species-appropriate diet; do not feed high animal-protein items to herbivorous or largely herbivorous species"}</li>
            <li>{"Maintain correct temperatures so the animal can digest and metabolize normally"}</li>
            <li>{"Avoid over-supplementing and follow veterinary guidance on any medications that affect the kidneys"}</li>
            <li>{"Monitor urates: consistently dry, scant, or discolored urates can signal dehydration well before gout develops"}</li>
          </ol>
          <p>{"Because gout is so often a one-way door, the practical message is preventive: a hydrated reptile on a correct diet rarely develops it, while a chronically dry, over-proteined animal is the classic candidate."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), renal disease and gout chapters."}</li>
            <li>{"Journal of Herpetological Medicine and Surgery, gout case literature."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
