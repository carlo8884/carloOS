import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Calcium & D3 Supplementation for Reptiles | Lizard.com", description: "Supplementing reptiles with calcium, vitamin D3, and multivitamins: calcium with vs without D3, the UVB link, and avoiding over-supplementation.", path: "/health/calcium-d3-supplementation", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Calcium and D3 Supplementation for Reptiles", description: "How to use calcium, vitamin D3, and multivitamin supplements for reptiles, and how supplementation interacts with UVB.", url: "https://lizard.com/health/calcium-d3-supplementation", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthCalciumD3SupplementationPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Calcium and D3 Supplementation for Reptiles", subtitle: "Supplementation, dusting feeders or food with calcium, vitamin D3, and multivitamins, is essential for most captive reptiles because their diets and lighting rarely match the wild. Getting it right prevents metabolic bone disease, the most common nutritional disease in captivity, while getting it wrong in either direction (too little or too much) causes its own problems. This guide explains the products and the logic behind a sensible schedule.", category: "Feeding", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Calcium & D3 Supplementation", href: "/health/calcium-d3-supplementation" }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Key Points"}</div>
          {[["Calcium", "Builds bone, prevents MBD"], ["D3", "Lets the body use calcium"], ["UVB link", "UVB lets reptiles make D3"], ["With-D3 vs no-D3", "Depends on UVB provision"], ["Multivitamin", "Periodic, balanced micronutrients"], ["Risk", "Both deficiency and excess"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Metabolic Bone Disease", href: "/health/metabolic-bone-disease" }, { label: "Hypocalcemia", href: "/health/hypocalcemia" }, { label: "UVB Lighting Guide", href: "/setup/uvb-lighting-guide" }, { label: "Gut-Loading Feeders", href: "/health/gut-loading-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-calcium-d3-supplementation"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Captive reptile diets and lighting rarely replicate the wild, so most kept species need supplemental calcium and, depending on their lighting, vitamin D3, plus periodic multivitamins. Calcium is the building block of bone and is consumed in countless body processes; vitamin D3 is the hormone-like vitamin that allows the body to absorb and use calcium; and a multivitamin fills in the other micronutrients a captive diet may lack. The single most common preventable disease in captive reptiles, metabolic bone disease, is fundamentally a failure of this calcium-and-D3 system."}</p>
          <h2>{"Calcium With D3 Versus Without D3"}</h2>

          <ul>
            <li>{"Calcium without D3: routine calcium source for animals with good UVB; can be used frequently"}</li>
            <li>{"Calcium with D3: provides dietary vitamin D3 for animals with little or no UVB; used on a measured schedule, not unlimited"}</li>
            <li>{"Multivitamin: a balanced micronutrient supplement used periodically (commonly about once weekly for many insectivores), supplying vitamin A and other nutrients"}</li>
          </ul>
          <h2>{"How Supplementation Interacts With UVB"}</h2>
          <p>{"UVB is the natural pathway for vitamin D3 production and is required or strongly recommended for many diurnal basking species; for them, proper UVB plus plain calcium is the backbone of bone health, with D3 supplementation kept modest. For nocturnal or crepuscular species kept without UVB, dietary D3 takes over that role. Either way, calcium without the means to use it (D3 from UVB or diet) does not prevent metabolic bone disease, which is why the two are always considered as a pair. See our UVB lighting guide for the lighting side of this equation."}</p>
          <h2>{"Building a Sensible Schedule"}</h2>
          <ul>
            <li>{"Identify whether your species needs UVB and whether you are providing it, then choose calcium with or without D3 accordingly"}</li>
            <li>{"Dust feeders or food with calcium at a frequency appropriate to the species and life stage; fast-growing juveniles need calcium more often than adults"}</li>
            <li>{"Use a multivitamin periodically (often about weekly) for micronutrients, not at every feeding"}</li>
            <li>{"Gut-load feeders as well, so the underlying meal is nutritious before dusting"}</li>
            <li>{"A free-choice calcium dish (plain calcium, no D3) suits some species and lets them self-regulate intake"}</li>
          </ul>
          <h2>{"Over-Supplementation Is Real"}</h2>

          <h2>{"Signs the Balance Is Wrong"}</h2>
          <ul>
            <li>{"Deficiency: soft or deformed jaw and limbs, tremors, difficulty moving, and the other signs of metabolic bone disease and hypocalcemia"}</li>
            <li>{"Excess D3: potential soft-tissue mineralization (a veterinary diagnosis)"}</li>
            <li>{"Excess vitamin A: skin and mucous-membrane problems from over-dosed multivitamins"}</li>
            <li>{"When growth, bone, or movement looks abnormal, have a reptile vet evaluate calcium and D3 status"}</li>
          </ul>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), nutrition and metabolic-bone-disease chapters."}</li>
            <li>{"Baines, F. M., et al., UV index and vitamin D3 synthesis in reptiles."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
