import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, DropCap, PullQuote, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Chronic Kidney Disease in Cats — Stages, Diet, Outlook | Vets.co", description: "Chronic kidney disease is the most common serious illness in older cats. IRIS staging, renal diets, fluid therapy, and prognosis explained.", path: '/health/kidney-disease-cats', type: 'article' })
const SOURCES = [
  { label: 'IRIS (International Renal Interest Society): CKD Staging and Substaging Guidelines', url: 'https://www.iris-kidney.com/guidelines/staging.html', publisher: 'IRIS' },
  { label: 'Sparkes AH et al. ISFM Consensus Guidelines on the Diagnosis and Management of Feline CKD. J Feline Med Surg. 2016;18(3):219-239.', publisher: 'J Feline Med Surg' },
  { label: 'Merck Veterinary Manual: Chronic Kidney Disease in Cats', url: 'https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/chronic-kidney-disease-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'Brown SA et al. Beneficial effects of chronic administration of dietary omega-3 polyunsaturated fatty acids in dogs with renal insufficiency. J Lab Clin Med. 1998;131(5):447-455.', publisher: 'J Lab Clin Med' },
  { label: 'AVMA: Chronic Kidney Disease in Cats', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/kidney-disease-cats', publisher: 'AVMA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Chronic Kidney Disease in Cats', description: 'IRIS staging, diet, fluid therapy, and prognosis for feline chronic kidney disease.', url: 'https://vets.co/health/kidney-disease-cats', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Chronic Kidney Disease in Cats', description: 'Staging, renal diet, fluid therapy, and outlook for feline CKD.', url: 'https://vets.co/health/kidney-disease-cats', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "How long can a cat live with kidney disease?", answer: "Survival depends heavily on the IRIS stage at diagnosis. Cats diagnosed in stage 2 frequently live 2-3 years or longer with good management, while cats diagnosed in stage 4 often have a survival measured in months. Early detection — increasingly possible with the SDMA blood marker, which rises before traditional creatinine — combined with a renal diet, hydration support, and control of phosphorus and blood pressure, is the single biggest factor in extending both lifespan and quality of life." },
  { question: "Is a renal diet really necessary?", answer: "Therapeutic renal diets are one of the few interventions repeatedly shown to extend survival in feline CKD. They are restricted in phosphorus and contain controlled, high-quality protein, added omega-3 fatty acids, and buffering to counter acidosis. The challenge is palatability — many CKD cats are finicky. Transition slowly, offer warmed food, and try multiple textures. A cat that refuses the renal diet and stops eating is worse off than one on a less ideal diet it will actually eat, so work with your veterinarian on a realistic plan." },
  { question: "Can I give my cat fluids at home?", answer: "Yes — subcutaneous fluid administration at home is a common and effective part of managing later-stage feline CKD, and most owners learn it quickly. Your veterinarian determines the fluid type, volume, and frequency based on the cat's stage and hydration status. Home fluids reduce the dehydration and nausea that make CKD cats feel unwell, and many owners report a noticeable improvement in their cat's energy and appetite once a routine is established." },
]


export default function KidneyDiseaseCatsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Chronic Kidney Disease in Cats', subtitle: 'Chronic kidney disease (CKD) is the most common serious illness of older cats — affecting an estimated 30-40% of cats over 10 years and over half of cats over 15. It is progressive and not curable, but it is highly manageable. With early detection and consistent care, many cats live comfortably for years after diagnosis.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '', publishedAt: 'June 2026', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Kidney Disease in Cats', href: '/health/kidney-disease-cats' }]}
        relatedLinks={[
          { title: 'Health Hub', href: '/health', category: 'Hub' },
          { title: 'Senior Pet Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
          { title: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">IRIS CKD Stages</div>
            {[['Stage 1', 'Normal creatinine, other abnormalities'], ['Stage 2', 'Mild azotemia, often subtle signs'], ['Stage 3', 'Moderate azotemia, clear signs'], ['Stage 4', 'Severe, advanced disease']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Health Hub', href: '/health' }, { label: 'Senior Pet Care', href: '/health/senior-pet-care' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-ckd-cats" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-05T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Early detection changes the outcome">
            The SDMA blood marker can detect kidney decline when as little as 25% of function is lost, far earlier than creatinine, which only rises after roughly 75% is lost. Annual or twice-yearly bloodwork in cats over 7 is the most effective tool for catching CKD while management is most effective.
          </CalloutBox>

          <DropCap>The kidneys filter waste, balance fluids and electrolytes, regulate blood pressure, and support red blood cell production. In chronic kidney disease, functional kidney tissue (nephrons) is gradually lost and replaced by scar tissue. The decline is irreversible and tends to progress over months to years. Because cats compensate well, they often show no signs until a large fraction of kidney function is already gone — which is why screening older cats is so valuable.</DropCap>

          <h2>Signs to Watch For</h2>
          <p>Early CKD is quiet. The first changes owners notice are usually increased thirst and urination, as the failing kidneys can no longer concentrate urine. Larger or more frequent litter clumps and an emptier water bowl are common early clues. As disease advances, cats lose weight and muscle, eat less, develop a dull coat, may vomit, and become lethargic. Bad breath with a chemical odor, mouth ulcers, and dehydration appear in later stages. Any older cat losing weight or drinking more should be tested promptly.</p>

          <h2>Staging With IRIS</h2>
          <p>Veterinarians stage CKD using the International Renal Interest Society (IRIS) system, based primarily on blood creatinine and SDMA, then substaged by urine protein and blood pressure. Staging guides treatment and prognosis: a stage 2 cat may need only a renal diet and monitoring, while a stage 4 cat needs intensive support. Staging is repeated over time to track progression and adjust care.</p>

          <PullQuote
            variant="inline"
            quote="A stage 2 cat may need only a renal diet and monitoring, while a stage 4 cat needs intensive support. Staging is repeated over time to track progression and adjust care."
            attribution="Vets.co Editorial"
          />

          <h2>Managing the Disease</h2>
          <p>Management targets the consequences of kidney failure rather than reversing it. The core elements are a therapeutic renal diet (restricted phosphorus, controlled protein), aggressive hydration through encouraging water intake and often subcutaneous fluids, and control of phosphorus with binders when diet alone is insufficient. High blood pressure and urinary protein loss are treated with veterinarian-prescribed medications, with the specific drug and dose determined by your vet. Anemia, nausea, and potassium imbalances are addressed as they arise.</p>

          <h2>Diet Is Central</h2>
          <p>Phosphorus control through diet is one of the best-supported interventions in feline CKD and is linked to longer survival. Renal diets also reduce the protein waste the kidneys must clear and counter the acidosis that makes cats feel ill. Because appetite is fragile in CKD cats, getting them to eat the renal diet — through gradual transition, warming food, and offering different forms — is a practical priority worth real effort.</p>

          <CalloutBox variant="evidence" title="ISFM consensus: phosphorus restriction and survival">
            The International Society of Feline Medicine consensus guidelines cite dietary phosphorus restriction as one of the interventions with the most consistent evidence for slowing CKD progression and improving survival in cats with stage 2 and 3 disease. Phosphate binders are recommended when dietary restriction alone fails to achieve target serum phosphorus levels.
          </CalloutBox>

          <h2>Quality of Life and Prognosis</h2>
          <p>CKD is a marathon, not a sprint. Many cats diagnosed early live comfortably for years with diet and hydration support, with periodic rechecks to adjust treatment. The focus throughout is quality of life: a cat that is eating, hydrated, comfortable, and engaged is doing well regardless of bloodwork numbers. Honest, ongoing conversations with your veterinary team about how your cat is actually doing day to day guide both treatment intensity and, eventually, end-of-life decisions.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
