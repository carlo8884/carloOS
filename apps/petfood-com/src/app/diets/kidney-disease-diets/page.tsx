import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'
import { ArticleMasthead } from '../../../components/ArticleMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Kidney Disease (Renal) Diets for Dogs and Cats | PetFood.com',
  description:
    'How therapeutic renal diets work — phosphorus and protein restriction, IRIS staging, omega-3 and buffering, and why they require a diagnosis.',
  path: '/diets/kidney-disease-diets',
  type: 'article',
})

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "Nutrient Requirements of Dogs and Cats",
      url: "https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats",
      publisher: "National Research Council, National Academies Press, 2006",
    },
    {
      label: "WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods",
      url: "https://wsava.org/committees/global-nutrition-committee/",
      publisher: "World Small Animal Veterinary Association Global Nutrition Committee",
    },
    {
      label: "AAHA/ACVIM Consensus Guidelines — applicable condition-specific nutrition and management",
      url: "https://www.aaha.org/veterinary-resources/guidelines/",
      publisher: "American Animal Hospital Association / American College of Veterinary Internal Medicine",
    },
]
const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Kidney Disease (Renal) Diets for Dogs and Cats | PetFood.com',
  description:
    'How therapeutic renal diets work — phosphorus and protein restriction, the IRIS staging framework, omega-3 and buffering, and why these diets require a diagnosis.',
  url: 'https://petfood.com/diets/kidney-disease-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})


export default function KidneyDiseaseDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Kidney Disease Diets for Dogs and Cats',
        subtitle:
          'Chronic kidney disease is one of the most common conditions of older cats and a frequent diagnosis in older dogs, and diet is the single intervention with the strongest evidence for extending both lifespan and quality of life. Therapeutic renal diets are not a wellness category — they are formulated tools tied to a diagnosis and a staging system. This page explains the nutrient targets, the evidence, and why they require veterinary direction.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Kidney Disease Diets for Dogs and Cats', href: '/diets/kidney-disease-diets' },
      ]}
      relatedLinks={[
        { title: 'Diets Hub', href: '/diets' },
        { title: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
        { title: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Renal Diets Do', href: '#whatdo' },
              { label: 'Phosphorus Restriction', href: '#phosphorus' },
              { label: 'Protein — Quality over Quantity', href: '#protein' },
              { label: 'IRIS Staging', href: '#iris' },
              { label: 'Other Modifications', href: '#other' },
              { label: 'Why a Diagnosis Is Required', href: '#diagnosis' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
              { label: 'Water and Hydration', href: '/nutrition/water-and-hydration' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="kidney-disease-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <ArticleMasthead
          manifestKey="petfood-com:category-conditions"
          alt="A renal therapeutic pet-food bag photographed in clinical light"
          eyebrow="Condition-Specific Diet"
          priority
        />
        <p>Chronic kidney disease (CKD) is the progressive, irreversible loss of functioning kidney tissue. As nephrons are lost, the kidney becomes less able to excrete metabolic waste, regulate phosphorus and electrolytes, concentrate urine, and produce erythropoietin. Therapeutic renal diets are designed to reduce the workload on the remaining nephrons and to control the metabolic consequences of declining function. Multiple controlled studies have shown that dogs and cats fed a renal therapeutic diet live longer and experience fewer uremic crises than those kept on a maintenance diet.</p>
        <h2 id="whatdo">What Renal Diets Do</h2>
        <p>A renal therapeutic diet differs from a maintenance diet in several coordinated ways: it restricts phosphorus, moderates and improves the quality of protein, often increases omega-3 fatty acids, adds buffering to counter metabolic acidosis, and supports caloric intake and palatability so the animal keeps eating. No single nutrient does the work alone — it is the combination, validated in feeding studies, that produces the survival benefit.</p>
        <h2 id="phosphorus">Phosphorus Restriction</h2>
        <p>Phosphorus restriction is the best-supported element of renal nutrition. As the kidney fails, phosphorus accumulates, driving secondary hyperparathyroidism and contributing to further kidney damage. Renal diets sharply lower dietary phosphorus relative to maintenance foods, and where diet alone is insufficient, phosphorus binders are added under veterinary direction. Serum phosphorus targets are tied to disease stage. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="protein">Protein — Quality over Quantity</h2>
        <p>Protein in renal diets is moderated and made highly digestible rather than simply slashed. Reducing protein lowers the nitrogenous-waste load the kidney must clear, easing uremic signs, but excessive restriction risks muscle loss, which is itself harmful — particularly in cats, whose obligate-carnivore metabolism makes severe protein restriction risky. The modern approach emphasizes high-biological-value protein at a moderated level, individualized to the patient and stage. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="iris">IRIS Staging</h2>
        <p>The International Renal Interest Society (IRIS) staging system classifies CKD into stages 1 through 4 based on creatinine and SDMA, with substaging by proteinuria and blood pressure. Dietary and medical recommendations are tied to stage: phosphorus targets tighten, and the timing of diet transition is guided by the stage at diagnosis. This staging framework is why a renal diet is a medical decision, not a shelf choice — the right diet and target depend on bloodwork the owner cannot perform.</p>
        <h2 id="other">Other Modifications</h2>
        <p>Renal diets typically add EPA and DHA omega-3 fatty acids, which have evidence for slowing progression; potassium supplementation (cats with CKD are prone to hypokalemia); alkalinizing agents to counter metabolic acidosis; B-vitamin supplementation to replace losses in dilute urine; and high moisture (canned formats) to support hydration in animals that can no longer concentrate urine. See <a href="/nutrition/water-and-hydration">Water and Hydration</a> and <a href="/supplements/fish-oil-omega-3">Fish Oil and Omega-3</a>.</p>
        <h2 id="diagnosis">Why a Diagnosis Is Required</h2>
        <p>Renal diets are therapeutic foods sold for diagnosed kidney disease. Feeding a phosphorus- and protein-restricted diet to a healthy animal that does not need it provides no benefit and can cause harm, particularly to growing animals and to cats. Diagnosis, staging, and diet selection require bloodwork, urinalysis, and ongoing monitoring by a veterinarian. This page is reference material, not a treatment plan.</p>

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
