import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Anemia in Dogs and Cats', url: 'https://www.merckvetmanual.com/circulatory-system/anemia/anemia-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Immune-Mediated Hemolytic Anemia (IMHA) Consensus Guidelines', url: 'https://www.acvim.org', publisher: 'ACVIM' },
  { label: 'Swann JW et al. ACVIM consensus statement on the treatment of IMHA in dogs. J Vet Intern Med. 2019;33(3):1141-1172.', publisher: 'JVIM' },
  { label: 'AVMA: Blood Disorders in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Anemia in Dogs — Causes, Pale Gums & Treatment | Dog.com', description: 'Anemia (low red blood cells) causes pale gums, lethargy, and exercise intolerance.', path: '/health/anemia-in-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Anemia in Dogs', description: 'Regenerative vs non-regenerative anemia — causes, diagnosis, and treatment in dogs.', url: 'https://dog.com/health/anemia-in-dogs', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Anemia in Dogs', description: 'Causes, diagnostic approach, and treatment for canine anemia.', url: 'https://dog.com/health/anemia-in-dogs', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'What are the signs of anemia in dogs?', answer: 'The signs reflect tissues receiving insufficient oxygen: pale, white, or gray gums (the most visible sign), extreme lethargy, exercise intolerance — the dog tires immediately, rapid heart rate, rapid breathing at rest, weakness or collapse, and reduced appetite. Anemia is always secondary to an underlying cause, so any of these signs warrants veterinary evaluation to find what is driving it.' },
  { question: 'Is anemia in dogs an emergency?', answer: 'It can be. Pale or white gums with extreme lethargy in a previously healthy dog — especially with a yellow (icteric) tint to the gums or whites of the eyes — warrants emergency evaluation, because immune-mediated hemolytic anemia (IMHA) can destroy red blood cells rapidly and is a medical emergency. Collapse, respiratory distress at rest, or weakness that appears suddenly are also emergency presentations. For milder, slower-developing signs, contact your veterinarian promptly for a CBC.' },
  { question: 'What is IMHA in dogs?', answer: 'Immune-mediated hemolytic anemia — the most common hemolytic anemia in dogs — occurs when the immune system produces antibodies that attack and destroy the dog\'s own red blood cells. It can be primary (no identifiable trigger) or secondary to a drug, vaccine, infection, or cancer; American Cocker Spaniels, Springer Spaniels, Old English Sheepdogs, and poodles are predisposed. Treatment is immunosuppressive prednisolone, often with azathioprine or mycophenolate, plus transfusion when needed. Survival with appropriate treatment is 60–80%, but recurrence is common.' },
  { question: 'What causes anemia in dogs?', answer: 'The first question your veterinarian asks of the CBC is whether the bone marrow is responding (the reticulocyte count). Regenerative anemia — marrow working, cells being lost — comes from blood loss (external hemorrhage, GI bleeding from ulcers, tumors, or hookworms) or hemolysis (destruction, as in IMHA). Non-regenerative anemia — marrow not producing — comes from chronic disease (the most common cause in senior dogs), kidney failure (insufficient erythropoietin), bone marrow disease, iron deficiency from chronic slow blood loss, or toxins.' },
  { question: 'When does an anemic dog need a blood transfusion?', answer: 'Per the thresholds on this page, transfusion is indicated when the PCV (packed cell volume) falls below approximately 15–18% without active compensation, or when clinical signs — collapse, extreme lethargy, respiratory distress at rest — show the anemia is compromising vital organs regardless of the number. The decision is your veterinarian\'s; most specialty and emergency hospitals maintain blood banks, and typing for DEA 1.1 before a first transfusion prevents significant reactions.' },
]
const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))
export default function DogAnemiaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Anemia in Dogs', subtitle: 'Anemia — an abnormally low red blood cell count or hemoglobin concentration — causes the tissues to receive insufficient oxygen. The clinical signs reflect this: pale gums, lethargy, exercise intolerance, and in severe cases, rapid breathing at rest. Anemia is always secondary to an underlying cause, and the cause determines the treatment.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Anemia', href: '/health/anemia-in-dogs' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Cancer Signs', href: '/health/dog-cancer-signs', category: 'Dog Health' }, { title: 'Liver Disease', href: '/health/dog-liver-disease', category: 'Dog Health' }, { title: 'Kidney Disease', href: '/health/dog-kidney-disease', category: 'Dog Health' }, { title: 'Senior Dog Care', href: '/health/senior-dog-care', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs of Anemia</div>
            {['Pale, white, or gray gums', 'Extreme lethargy', 'Exercise intolerance — tires immediately', 'Rapid heart rate', 'Rapid breathing at rest', 'Weakness or collapse', 'Reduced appetite'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/dog-symptoms-guide' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
          <div className="bg-brand-dark rounded-lg p-5 mb-4">
            <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">Anemia + Insurance</div>
            <h3 className="font-display text-base font-bold text-brand-white mb-2">Underlying-cause workups are expensive</h3>
            <p className="text-xs text-white/60 mb-3 leading-relaxed">Anemia diagnostic workups (IMHA, hemorrhagic disease, neoplasia) commonly run $2,000-$5,000 before treatment even begins. Insurance covers diagnostics if enrolled before symptoms.</p>
            <a href="/reviews/best-pet-insurance" className="inline-block text-xs font-bold text-brand-primary hover:underline">Compare pet insurance →</a>
          </div>
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
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

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
