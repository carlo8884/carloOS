import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Allergies — Environmental, Food | Dog.com', description: 'Dog allergies have three types: environmental (atopy), food, and flea allergy dermatitis. Each presents differently and is treated differently.', path: '/health/dog-allergies', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Allergies Guide', description: 'Environmental, food, and flea allergy dermatitis in dogs — diagnosis and management.', url: 'https://dog.com/health/dog-allergies', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const medSchema = buildMedicalWebPageSchema({ name: 'Dog Allergies Guide', description: 'Environmental, food, and flea allergies in dogs.', url: 'https://dog.com/health/dog-allergies', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, medSchema)

const FAQS = [
  { question: 'Can dogs develop allergies to food they\'ve eaten for years?', answer: 'Yes — food allergy requires repeated exposure before sensitization occurs. A dog can eat chicken for years and then develop a chicken allergy. This surprises owners who assume "new food = new allergy" but the relationship is the opposite: common proteins become common allergens because dogs are most frequently exposed to them.' },
  { question: 'What are the most common food allergens in dogs?', answer: 'By frequency: beef, dairy, chicken, wheat, lamb, soy. Note these are common proteins, not grains specifically — the grain-free movement misidentifies grains as the primary allergen when protein sources are far more commonly implicated.' },
  { question: 'Does switching to grain-free help with allergies?', answer: 'Rarely, and it introduces DCM risk. Food allergies are almost always protein-driven, not grain-driven. Switching to a grain-free formula that still uses the same protein source will not resolve a protein allergy. A hydrolyzed or novel protein elimination diet is the appropriate diagnostic approach.' },
]

export default function DogAllergiesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Allergies — Types, Diagnosis & Treatment', subtitle: 'Allergies are among the most common chronic conditions in dogs — and among the most frequently mismanaged. The three types have different causes, different presentations, and require different treatments. Getting the diagnosis right is the first step.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Allergies', href: '/health/dog-allergies' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Environmental Allergies (Atopy)', href: '#atopy' }, { label: 'Food Allergies', href: '#food' }, { label: 'Flea Allergy Dermatitis', href: '#fad' }, { label: 'Diagnosis', href: '#diagnosis' }, { label: 'FAQ', href: '#faq' }]} />
          <RelatedLinks title="Related" links={[{ label: 'Best Flea Prevention', href: '/reviews/best-flea-tick-prevention' }, { label: 'Prescription Diets', href: '/nutrition/prescription-diets' }, { label: 'Dog Supplements', href: '/nutrition/dog-supplements' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-allergies" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="atopy">Environmental Allergies (Atopy)</h2>
          <p>Environmental allergy (atopic dermatitis) is the most common allergic disease in dogs — caused by inhaled or contact allergens (pollen, dust mites, mold, grass). Unlike humans who primarily experience respiratory symptoms, dogs manifest environmental allergies almost entirely through the skin: itching, redness, and secondary skin infections from self-trauma.</p>
          <p><strong>Presentation:</strong> Itching that follows a seasonal or year-round pattern. Most commonly affects: paws (licking and chewing), armpits, groin, ears (recurrent ear infections), and face. Golden Retrievers, Labradors, West Highland White Terriers, Boxers, and French Bulldogs are among the most predisposed breeds.</p>
          <p><strong>Treatment:</strong> Apoquel (oclacitinib) is the most commonly prescribed first-line treatment — fast-acting, effective, and generally safe for long-term use. Cytopoint (lokivetmab) is a monthly injectable that blocks the itch signal directly with a duration of 4–8 weeks. Immunotherapy (allergy shots or sublingual drops) after allergy testing is the only disease-modifying treatment — it takes 6–12 months to show effect but can reduce the need for long-term medication significantly. Cyclosporine (Atopica) is effective but has a slower onset.</p>

          <h2 id="food">Food Allergies and Food Intolerance</h2>
          <p><strong>True food allergy</strong> is an immune-mediated response to a dietary protein — it triggers similar skin presentations to atopy (itching, recurrent ear infections, paw licking) and may also cause GI signs (vomiting, diarrhea, soft stool). Food intolerance produces GI signs without immune-mediated skin involvement. The distinction matters for diagnosis.</p>
          <p><strong>Diagnosis requires a strict dietary elimination trial</strong> — typically 8–12 weeks feeding a food the dog has never eaten before (novel protein: rabbit, venison, kangaroo) or a hydrolyzed protein diet (proteins broken into fragments too small to trigger an immune response). All other food sources must be eliminated: treats, flavored medications, chews, and anything else the dog puts in its mouth. If symptoms resolve on the elimination diet, a food challenge (reintroducing the original food) confirms food allergy if symptoms return.</p>
          <p>Over-the-counter "limited ingredient" diets are not appropriate for diagnostic trials — cross-contamination in manufacturing and shared protein sources make them unreliable. Use a prescription hydrolyzed diet (Royal Canin HP, Hill's z/d, Purina HA) or a properly sourced novel protein diet under veterinary guidance.</p>

          <h2 id="fad">Flea Allergy Dermatitis (FAD)</h2>
          <p>The most common allergic skin disease in dogs in flea-endemic regions. Allergic dogs react to the flea's saliva — a single flea bite triggers intense itching in a sensitized dog. The hallmark distribution is the lower back, rump, and base of tail — the areas fleas favor. Finding fleas is often difficult (allergic dogs scratch and groom so aggressively that fleas are removed), but flea dirt (flea feces — small dark specks that turn red-brown when moistened on a white paper towel) confirms exposure.</p>
          <p><strong>Treatment:</strong> Complete and continuous flea prevention on all animals in the household is required. Treating the allergic dog alone is insufficient if other household pets carry fleas. A single flea every few weeks maintains the allergic response in sensitized dogs. Oral isoxazoline products (Simparica Trio, Bravecto, NexGard) provide reliable protection.</p>

          <h2 id="diagnosis">Getting the Diagnosis Right</h2>
          <p>The three allergy types frequently coexist — a dog can have food allergy AND environmental atopy simultaneously, and both contribute to total itch load. Diagnosing and managing one while the other is active will produce incomplete results. Work with a veterinary dermatologist for complex cases; board-certified dermatologists (DACVD) are the appropriate specialists for dogs that have not responded to primary care management.</p>
          <p>Blood allergy testing for environmental allergies (serology) is less reliable than intradermal skin testing performed by a dermatologist. It is used clinically for immunotherapy formulation but should not be used as a screening test for food allergies — food allergy testing by serology is not validated.</p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
