import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Vomiting & Diarrhea in Pets — When to Worry | Vets.co", description: "Vomiting and diarrhea are common in dogs and cats and usually mild, but some cases are serious. Learn the warning signs that mean it is time to call the vet.", path: '/health/vomiting-diarrhea-pets', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Vomiting in Dogs', url: 'https://www.merckvetmanual.com/digestive-system/gastrointestinal-disorders-of-dogs/vomiting-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Vomiting and Diarrhea in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/vomiting-and-diarrhea', publisher: 'AVMA' },
  { label: 'AAHA: Nutritional Assessment Guidelines', url: 'https://www.aaha.org/aaha-guidelines/nutritional-assessment/', publisher: 'AAHA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Vomiting and Diarrhea in Pets', description: 'Common causes of vomiting and diarrhea and the warning signs that warrant veterinary care.', url: 'https://vets.co/health/vomiting-diarrhea-pets', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Vomiting and Diarrhea in Pets', description: 'Causes and warning signs of vomiting and diarrhea in dogs and cats.', url: 'https://vets.co/health/vomiting-diarrhea-pets', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "When should vomiting or diarrhea prompt a vet visit?", answer: "Seek veterinary care if vomiting or diarrhea is frequent or persistent, contains blood, or is accompanied by lethargy, loss of appetite, a painful or swollen abdomen, repeated unproductive retching, signs of dehydration, or known ingestion of a toxin or foreign object. Very young, very old, or chronically ill pets, and small breeds prone to rapid dehydration, warrant a lower threshold for care. A single episode in an otherwise bright, active pet that is still eating and drinking can often be monitored briefly, but worsening or additional signs change that." },
  { question: "What can I do at home for mild cases?", answer: "For a single mild episode in an otherwise healthy adult pet that remains bright and hydrated, supportive home care under veterinary guidance may be appropriate: ensuring access to water to prevent dehydration and, if advised by your veterinarian, a short period of a bland, easily digestible diet before gradually returning to normal food. Avoid giving human medications, which can be toxic. If signs persist beyond a day, worsen, or are joined by other symptoms, stop home care and contact your veterinarian." },
  { question: "Why is dehydration the main concern?", answer: "Both vomiting and diarrhea cause fluid and electrolyte loss, and pets — especially small, young, old, or already-ill ones — can become dehydrated quickly. Dehydration compounds the original problem and can become dangerous on its own. Signs include lethargy, dry or tacky gums, sunken eyes, and loss of skin elasticity. Because dehydration can escalate faster than the underlying cause, persistent vomiting or diarrhea, or any signs of dehydration, are key reasons to seek prompt veterinary care, where fluids can be given safely." },
]
export default function VomitingDiarrheaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Vomiting and Diarrhea in Pets', subtitle: 'Vomiting and diarrhea are among the most common reasons pets see the veterinarian. Most episodes are mild and self-limiting, but some signal a serious problem — and the rapid dehydration they cause can become dangerous. Knowing which signs warrant watchful waiting and which require prompt care helps you respond appropriately for your dog or cat.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Vomiting & Diarrhea', href: '/health/vomiting-diarrhea-pets' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs', category: 'Veterinary Guide' },
          { title: 'Pancreatitis in Dogs', href: '/health/pancreatitis-in-dogs', category: 'Veterinary Guide' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Call the Vet If</div>
            {[['Blood present', 'In vomit or stool'], ['Lethargic', 'Or not eating'], ['Painful belly', 'Or swollen abdomen'], ['Persistent', 'Beyond a day, or worsening']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs' }, { label: 'Pancreatitis in Dogs', href: '/health/pancreatitis-in-dogs' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-vomiting-diarrhea" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Blood, pain, or lethargy means call now">
            Vomiting or diarrhea containing blood, a painful or distended abdomen, repeated unproductive retching, profound lethargy, or refusal to eat or drink are not signs to watch — they warrant prompt veterinary care. So does any suspected ingestion of a toxin or foreign object.
          </CalloutBox>

          <h2>Common and Usually Mild Causes</h2>
          <p>Many episodes of vomiting and diarrhea stem from minor, self-limiting causes: dietary indiscretion (eating something unusual or too rich), an abrupt diet change, mild stress, or a transient infection. In an otherwise bright, active pet that continues to eat, drink, and behave normally, a single mild episode often resolves on its own. The key is that the pet is otherwise well and the signs are isolated and not worsening.</p>

          <h2>Serious Causes to Keep in Mind</h2>
          <p>Vomiting and diarrhea can also be the first sign of serious conditions: foreign-body obstruction, pancreatitis, infectious diseases such as parvovirus in puppies, toxin ingestion, organ disease, and in cats conditions like inflammatory bowel disease or hyperthyroidism. Because the same outward signs can mean a mild upset or a life-threatening problem, the surrounding context — the pet's energy, appetite, hydration, and any blood or pain — is what distinguishes them.</p>

          <h2>The Central Risk: Dehydration</h2>
          <p>Whatever the cause, vomiting and diarrhea drain fluids and electrolytes, and pets can dehydrate quickly — especially the very young, very old, small, or already-ill. Dehydration worsens the situation and can become dangerous independently of the original problem. Watching for lethargy, dry or tacky gums, sunken eyes, and reduced skin elasticity helps you recognize it early. Because dehydration can escalate fast, persistent signs are a strong reason to seek care, where fluids can be given safely.</p>

          <h2>When to Watch and When to Act</h2>
          <p>A single mild episode in a well pet that is still eating, drinking, and active can often be monitored briefly. Seek prompt care if signs are frequent or persistent, contain blood, or come with lethargy, appetite loss, abdominal pain, unproductive retching, or signs of dehydration — or if a toxin or foreign object may have been swallowed. Young, old, small, or chronically ill pets warrant a lower threshold for veterinary attention because they decline faster.</p>

          <h2>Supportive Care and Diagnosis</h2>
          <p>For mild cases, your veterinarian may advise ensuring water access and, if appropriate, a short course of a bland, easily digestible diet before returning to normal food. Avoid human medications, which can be toxic to pets. When veterinary care is needed, the team evaluates hydration and may run diagnostics — bloodwork, imaging, or fecal testing — to find the cause and rule out obstruction or systemic disease, then provides fluids, anti-nausea medication, and any condition-specific treatment, with all medications and dosing determined by your veterinarian.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
