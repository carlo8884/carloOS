import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Cancer Treatment — Chemotherapy, Surgery, Radiation | Dog.com', description: 'How cancer is treated in dogs. Chemotherapy in dogs is different from human chemo — most dogs tolerate it well. Surgery, radiation, immunotherapy.', path: '/health/dog-cancer-treatment', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Cancer Treatment', description: 'Chemotherapy, surgery, radiation, and palliative care for canine cancer.', url: 'https://dog.com/health/dog-cancer-treatment', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Cancer Treatment', description: 'Canine cancer treatment — chemotherapy, surgery, radiation, and palliative care.', url: 'https://dog.com/health/dog-cancer-treatment', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function DogCancerTreatmentPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Cancer Treatment', subtitle: 'A cancer diagnosis in a dog is devastating — and the decisions that follow are among the most difficult owners face. Understanding what each treatment modality actually involves, what it realistically achieves, and how dogs typically tolerate it provides the foundation for informed conversations with a veterinary oncologist.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '11 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Cancer Treatment', href: '/health/dog-cancer-treatment' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Chemotherapy', href: '#chemo' }, { label: 'Surgery', href: '#surgery' }, { label: 'Radiation', href: '#radiation' }, { label: 'Immunotherapy', href: '#immunotherapy' }, { label: 'Palliative Care', href: '#palliative' }, { label: 'The Oncologist Role', href: '#oncologist' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Cancer Warning Signs', href: '/health/dog-cancer-signs' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-cancer-treatment" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="chemo">Chemotherapy — Not What Most Owners Expect</h2>
          <p>The most common fear owners express about canine chemotherapy: "I don't want my dog to suffer the way people do." This fear is based on human chemotherapy experience, which is significantly more aggressive than standard veterinary chemotherapy protocols — and for a fundamental reason. Human oncology aims for cure whenever possible, accepting significant short-term suffering for long-term disease elimination. Veterinary oncology prioritizes quality of life — the goal is to keep the dog comfortable and functional for as long as possible, not to achieve cure at all costs.</p>
          <p>The practical result: approximately 75–80% of dogs receiving standard chemotherapy protocols experience no significant adverse effects. The 20–25% that do experience side effects typically have mild, transient GI effects (nausea, reduced appetite for 2–3 days) that resolve without hospitalization. Severe adverse effects requiring hospitalization occur in approximately 5% of dogs. Dogs do not lose their hair (canine hair growth cycles differ from human — the exception is double-coated breeds that may have some thinning).</p>
          <p>Chemotherapy in dogs is administered in an outpatient setting in most cases — the dog comes in, receives an IV infusion over 20–60 minutes, and goes home the same day. Most protocols involve 3–6 hour appointments every 1–4 weeks. The dog is typically able to resume normal activities between treatments.</p>
          <p><strong>Common protocols by cancer type:</strong> Lymphoma — CHOP protocol (cyclophosphamide, doxorubicin, vincristine, prednisone) achieves complete remission in 60–90% of cases, median remission duration 10–14 months. Hemangiosarcoma post-surgery — doxorubicin extends survival from 1–2 months to 4–8 months. Mast cell tumors — prednisone plus vinblastine for incompletely excised or high-grade tumors. Osteosarcoma post-amputation — carboplatin or doxorubicin protocols extend median survival from 3–5 months to 9–12 months.</p>

          <h2 id="surgery">Surgery</h2>
          <p>Surgery is curative for some cancers and provides the best local control for most solid tumors. The key concept in surgical oncology: clean margins. A tumor excised with adequate surrounding normal tissue (clean margins) has a significantly lower recurrence rate than one excised with tumor cells at the edge (dirty margins). Submitting excised tumor tissue to a pathologist who evaluates margin status is standard of care for any surgically removed mass.</p>
          <p>Surgery is the primary treatment for: mast cell tumors (excision with 2–3 cm margins for Grade 2 and 3), soft tissue sarcomas, certain splenic masses, oral tumors (may require partial jaw removal — dogs adapt remarkably well), and solitary lung tumors. For osteosarcoma — the primary bone cancer of large breeds — limb amputation provides good pain control. Approximately 90% of dogs adapt well to tripod life within 2–4 weeks. Limb-sparing surgery (replacing the diseased bone segment with a bone graft or metal implant) preserves the limb but has higher complication rates and similar survival to amputation.</p>

          <h2 id="radiation">Radiation Therapy</h2>
          <p>Radiation therapy is available at university veterinary teaching hospitals and a growing number of specialty referral centers. It is used for: tumors that cannot be fully surgically resected (nasal tumors, brain tumors, tumors adjacent to critical structures), as an adjunct to surgery for incompletely excised tumors, and for pain management in bone cancer (palliative radiation reduces osteosarcoma pain significantly, extending quality of life without cure-intent). Dogs require general anesthesia for each radiation treatment session — treatments are typically given daily Monday through Friday for 3–5 weeks for definitive-intent protocols, or in 3–4 larger fractions weekly for palliative-intent protocols.</p>

          <h2 id="immunotherapy">Immunotherapy and Targeted Therapy</h2>
          <p><strong>Palladia (toceranib phosphate):</strong> A tyrosine kinase inhibitor FDA-approved for canine mast cell tumors. Targets PDGFR, VEGFR, and c-Kit — molecular pathways active in certain mast cell tumors. Given orally every other day. Side effects: GI (vomiting, diarrhea, anorexia), muscle pain, hypertension, protein-losing nephropathy — require regular monitoring. Provides disease control in 40–60% of mast cell tumors not cured by surgery alone, and in other tumor types with relevant molecular targets.</p>
          <p><strong>VERITAS (Elias Animal Health):</strong> An emerging autologous tumor vaccine for canine osteosarcoma — uses the dog's own tumor cells to create a personalized vaccine. Early trial data is promising. Represents the direction of canine oncology toward personalized, targeted treatment.</p>
          <p><strong>Tanovea (rabacfosadine):</strong> FDA-approved for canine lymphoma — a nucleotide analog chemotherapy with a different mechanism and side effect profile than traditional CHOP chemotherapy. Used for relapsed or refractory lymphoma.</p>

          <h2 id="palliative">Palliative Care</h2>
          <p>For dogs where curative-intent treatment is declined (owner decision, financial constraints, dog's overall health making treatment risk-prohibitive) or where cancer is too advanced for cure, palliative care focuses on maximizing comfort and quality of life. This is not "giving up" — it is a valid, compassionate treatment choice that prioritizes the dog's experience over extending life at any cost.</p>
          <p>Palliative care tools: NSAIDs for pain management (particularly valuable for bone pain in osteosarcoma), gabapentin for neuropathic pain, prednisone for lymphoma (produces 1–4 months of remission without aggressive chemotherapy, maintaining appetite and activity), metronidazole for GI lymphoma symptoms, and palliative radiation (3–4 large fractions) for bone pain. Appetite stimulants (mirtazapine, maropitant) when cancer causes nausea and reduced appetite. Anti-nausea medication throughout.</p>

          <h2 id="oncologist">The Role of the Veterinary Oncologist</h2>
          <p>A board-certified veterinary oncologist (DACVIM Oncology) specializes in cancer diagnosis and treatment. Referral is appropriate whenever a cancer diagnosis is made — they provide staging workup, treatment options with realistic expected outcomes, clinical trial information, and ongoing monitoring during treatment. Many primary care veterinarians can administer straightforward chemotherapy protocols after oncologist consultation establishes the treatment plan. The oncologist is the specialist; the primary vet and owner implement the plan with ongoing oncologist oversight.</p>
          <p>Cost reality: consultation with a veterinary oncologist: $200–500. Chemotherapy per cycle: $200–1,500 depending on protocol. Radiation therapy course: $8,000–20,000. Surgery: $2,000–15,000+ depending on procedure complexity. Pet insurance purchased before diagnosis is the primary financial tool for managing these costs.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
