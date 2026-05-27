import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Anemia in Dogs — Causes, Pale Gums & Treatment | Dog.com', description: 'Anemia (low red blood cells) causes pale gums, lethargy, and exercise intolerance. Regenerative vs non-regenerative anemia have very different causes and prognoses. Reference guide.', path: '/health/anemia-in-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Anemia in Dogs', description: 'Regenerative vs non-regenerative anemia — causes, diagnosis, and treatment in dogs.', url: 'https://dog.com/health/anemia-in-dogs', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Anemia in Dogs', description: 'Causes, diagnostic approach, and treatment for canine anemia.', url: 'https://dog.com/health/anemia-in-dogs', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogAnemiaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Anemia in Dogs', subtitle: 'Anemia — an abnormally low red blood cell count or hemoglobin concentration — causes the tissues to receive insufficient oxygen. The clinical signs reflect this: pale gums, lethargy, exercise intolerance, and in severe cases, rapid breathing at rest. Anemia is always secondary to an underlying cause, and the cause determines the treatment.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Anemia', href: '/health/anemia-in-dogs' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs of Anemia</div>
            {['Pale, white, or gray gums', 'Extreme lethargy', 'Exercise intolerance — tires immediately', 'Rapid heart rate', 'Rapid breathing at rest', 'Weakness or collapse', 'Reduced appetite'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/dog-symptoms-guide' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-anemia" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Regenerative vs Non-Regenerative — The Critical Distinction</h2>
          <p>The first determination in any anemia workup: is the bone marrow responding? The CBC's reticulocyte count measures immature red blood cells released by the bone marrow — a high reticulocyte count (regenerative anemia) means the bone marrow is working and the problem is loss or destruction of red cells. A low reticulocyte count (non-regenerative anemia) means the bone marrow is not producing adequate red cells — a significantly more serious finding suggesting bone marrow disease, chronic disease, or production failure.</p>
          <p><strong>Regenerative anemia causes:</strong> Blood loss (external hemorrhage, GI bleeding, tumor bleeding) and hemolytic anemia (destruction of red blood cells). The bone marrow is normal and trying to compensate. In most cases, treatment of the underlying cause resolves the anemia over time as the bone marrow replenishes the red cell supply.</p>
          <p><strong>Non-regenerative anemia causes:</strong> Chronic disease (anemia of chronic inflammation — the most common cause in senior dogs), kidney failure (kidneys produce erythropoietin which stimulates red cell production — failing kidneys produce insufficient erythropoietin), bone marrow disease (aplastic anemia, bone marrow infiltration by cancer), iron deficiency (chronic slow blood loss depletes iron stores), and toxin exposure.</p>

          <h2>Immune-Mediated Hemolytic Anemia (IMHA)</h2>
          <p>IMHA is the most common hemolytic anemia in dogs — the immune system produces antibodies that attack and destroy the dog's own red blood cells. It can be primary (idiopathic — no identifiable trigger) or secondary (triggered by a drug, vaccine, infection, or cancer). American Cocker Spaniels, Springer Spaniels, Old English Sheepdogs, and poodles are predisposed. IMHA is a medical emergency — red blood cell destruction can be rapid and life-threatening. Pale gums, yellow (icteric) color to the gums and whites of the eyes (from bilirubin released by destroyed RBCs), and extreme lethargy in a previously healthy dog warrants emergency evaluation.</p>
          <p>Diagnosis: CBC showing severe anemia, spherocytes (abnormal round RBCs on blood smear), positive Coombs test (detects antibody on RBC surface), elevated bilirubin. Treatment: immunosuppressive doses of prednisolone, often combined with azathioprine or mycophenolate. Blood transfusion when PCV falls below critical levels. Hospitalization for severe cases. Prognosis: 60–80% survival with appropriate treatment, but recurrence is common — some dogs require long-term immunosuppression.</p>

          <h2>GI Bleeding as a Cause</h2>
          <p>Gastrointestinal bleeding — from ulcers, tumors, parasites (hookworms in puppies), or ingested foreign objects — produces regenerative anemia that is often not immediately obvious. The blood is digested in the GI tract and produces black, tarry stools (melena — a key clinical sign of upper GI bleeding). A dog with unexplained anemia should have a fecal examination (hookworms) and abdominal imaging (GI tumors, foreign body). NSAIDs cause GI ulceration — any dog on chronic NSAIDs with anemia warrants GI investigation.</p>

          <h2>Anemia of Chronic Kidney Disease</h2>
          <p>Chronic kidney disease produces anemia through multiple mechanisms — primarily reduced erythropoietin production by failing kidneys, which is required to stimulate bone marrow red cell production. This anemia is non-regenerative and mild-to-moderate in early CKD, worsening as kidney disease progresses. Management: erythropoietin analogues (darbepoetin alpha — Aranesp — is the current standard) stimulate the bone marrow to produce red cells despite inadequate renal erythropoietin. Iron supplementation as needed. The anemia is managed in parallel with CKD management, not separately.</p>

          <h2>Blood Transfusion</h2>
          <p>Transfusion is indicated when PCV (packed cell volume, a measure of red cell percentage) falls below approximately 15–18% in dogs without active compensation, or when clinical signs (collapse, extreme lethargy, respiratory distress at rest) indicate that the anemia is compromising vital organ function regardless of the specific PCV. Canine blood transfusion uses whole blood or packed red blood cells from typed donors. Most specialty and emergency hospitals maintain blood banks. DEA 1.1 is the most important blood type antigen — typing before first transfusion prevents significant transfusion reactions.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
