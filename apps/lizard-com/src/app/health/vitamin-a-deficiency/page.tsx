import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleSourcesList, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Nutritional Diseases: Hypovitaminosis A", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Nutritional Diseases of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/nutritional-diseases-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Donoghue S. — Nutrition of Captive Reptiles", publisher: "Veterinary Clinics of North America: Exotic Animal Practice", url: "https://www.vetexotic.theclinics.com" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Vitamin A Deficiency in Reptiles — Hypovitaminosis A | Lizard.com', description: 'Vitamin A deficiency (hypovitaminosis A) causes swollen eyes, retained shed, and respiratory symptoms in reptiles. Treatment: retinol supplementation', path: '/health/vitamin-a-deficiency', type: 'article' })
const schema = combineSchemas(buildArticleSchema({ siteId: 'lizard-com', title: 'Vitamin A Deficiency in Reptiles', description: 'Signs, treatment, and prevention of hypovitaminosis A in reptiles.', url: 'https://lizard.com/health/vitamin-a-deficiency', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' }), buildMedicalWebPageSchema({ name: 'Vitamin A Deficiency in Reptiles', description: 'Signs, treatment, and prevention of hypovitaminosis A in reptiles.', url: 'https://lizard.com/health/vitamin-a-deficiency', authorName: 'Lizard.com Editorial', lastReviewed: '2025-05-01', medicalAudience: 'Caregiver' }))
export default function VitAPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Vitamin A Deficiency in Reptiles', subtitle: 'Hypovitaminosis A (vitamin A deficiency) causes skin and epithelial tissue dysfunction in reptiles — swollen eyelids, poor skin quality, retained shed, respiratory symptoms, and in severe cases, immune failure. It is exclusively a husbandry problem: inadequate dietary vitamin A or insufficient vitamin A in feeder insects.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health' }, { name: 'Vitamin A Deficiency', href: '/health/vitamin-a-deficiency' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease', category: 'Health' },
        { title: 'Calcium & D3 Supplementation', href: '/health/calcium-d3-supplementation', category: 'Health' },
        { title: 'Gut-Loading Guide', href: '/health/gut-loading-guide', category: 'Health' },
        { title: 'Dysecdysis (Retained Shed)', href: '/health/dysecdysis', category: 'Health' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Signs</div>
          {['Swollen eyelids — classic presenting sign', 'Fluid-filled eye swelling (periorbital edema)', 'Poor or incomplete shedding (dysecdysis)', 'Respiratory symptoms — mucus, wheezing', 'Skin quality deterioration', 'Secondary bacterial/fungal infections', 'Weakness and lethargy in advanced cases'].map(s => (
            <div key={s} style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px', color: 'rgba(238,240,228,0.6)' }}>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease' }, { label: 'Dysecdysis Guide', href: '/health/dysecdysis' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-vita" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>What Vitamin A Does — Why Deficiency Shows in Eyes and Skin</h2>
        <p>Vitamin A (retinol) is essential for maintaining epithelial tissue — the cells lining the skin, eyes, respiratory tract, and GI tract. It regulates cell differentiation: without adequate vitamin A, epithelial cells fail to differentiate and function correctly, leading to accumulation of keratinized cells and fluid, breakdown of barrier function, and increased susceptibility to infection. The eyes are particularly sensitive because the conjunctival epithelium and tear duct epithelium are heavily vitamin A dependent — vitamin A deficiency classically presents as swollen, puffy eyelids (periorbital edema from fluid accumulation in failed epithelium) even before other signs are apparent.</p>
        <p>Amphibians are particularly sensitive to vitamin A deficiency — many short-tongue syndrome cases in dart frogs are vitamin A related — but reptiles across all taxa (tortoises, lizards, snakes) can develop hypovitaminosis A from inadequate dietary sources.</p>

        <h2>Dietary Sources and Why Deficiency Develops</h2>
        <p>True vitamin A (retinol) is found in animal tissues — liver, eggs, prey items. Beta-carotene (plant pigment in orange and yellow vegetables) is a precursor that many reptile species can convert to vitamin A, but not all do so efficiently. Box turtles, most tortoises, and omnivorous lizards can use beta-carotene conversion; strictly insectivorous species and snakes rely more heavily on preformed retinol from prey.</p>
        <p>Deficiency develops when: feeder insects are not gut-loaded with vitamin A-rich foods, multivitamin supplementation is insufficient or has expired, the diet consists primarily of items low in vitamin A (mealworms are notoriously poor in vitamin A — not a good primary feeder), or the animal is feeding poorly for any reason and not getting adequate intake of whatever vitamin-containing foods are offered. Gut-loading feeder insects with vitamin A-rich items (sweet potato, carrots, bell pepper, leafy greens) before feeding to the reptile is the most reliable prevention.</p>

        <h2>The Overdose Risk — Hypervitaminosis A</h2>
        <p>Vitamin A is fat-soluble and accumulates — unlike water-soluble vitamins, excess cannot be readily excreted. Hypervitaminosis A (vitamin A overdose) causes skin peeling and sloughing, internal bleeding, neurological signs, and death. This is why vitamin A supplementation in reptiles must be done carefully and under veterinary guidance: injectable vitamin A (used for severe deficiency) has a narrow therapeutic window. Home treatment of suspected vitamin A deficiency with injectable vitamin A concentrates is dangerous — leave this to veterinarians.</p>
        <p>Beta-carotene supplementation is significantly safer than retinol supplementation — the body converts only as much as needed and excess is not toxic. Products containing beta-carotene rather than preformed vitamin A as the vitamin A source (Repashy SuperVite, some Zoo Med reptile multivitamins) carry lower overdose risk than those containing retinol palmitate or retinyl acetate. Read supplement labels and understand what form of vitamin A they contain.</p>

        <h2>Treatment</h2>
        <p>Veterinary evaluation is required for any reptile showing the swollen-eye presentation — this sign can also indicate bacterial infection of the eye area, abscess, or other conditions requiring different treatment. A reptile veterinarian can determine whether vitamin A deficiency is the primary cause and administer appropriate treatment: oral or injectable vitamin A at therapeutic doses, treatment of any secondary infections, and supportive care (eye flushing for accumulated debris, assisted feeding if anorectic). Correct husbandry simultaneously — treating the deficiency without correcting the diet that caused it results in recurrence.</p>
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <p style={{ fontSize: '13px', color: '#8a96ad', fontStyle: 'italic', margin: '0 0 8px', lineHeight: 1.55 }}>These products support husbandry correction and do not treat disease. Work with a reptile veterinarian for diagnosis and treatment.</p>
        <div style={{ background: '#1a1f2b', border: '1px solid #2d3548', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#8a96ad', marginBottom: '8px' }}>Reptile Multivitamin Supplements</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: '#8a96ad', lineHeight: 1.55 }}>Reptile multivitamins (Repashy Herptivite, Rep-Cal Herptivite) supply pre-formed vitamin A. Dose per husbandry schedule + vet direction. This is husbandry equipment, not a substitute for veterinary care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/reptile%20multivitamin%20herptivite%20vitamin%20a?s=health-vitamin-a-deficiency" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/reptile%20multivitamin%20herptivite%20vitamin%20a?s=health-vitamin-a-deficiency" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#7bc25c', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
