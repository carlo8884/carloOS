import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Res. 2015;11:210.', publisher: 'BMC Vet Research / ICADA' },
  { label: 'AVMA: Atopic Dermatitis and Skin Allergies in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'American College of Veterinary Dermatology (ACVD): Atopic Dermatitis and Allergy Management', url: 'https://www.acvd.org', publisher: 'ACVD' },
  { label: 'Gonzales AJ et al. Oclacitinib (APOQUEL) is a novel Janus kinase inhibitor with activity against cytokines involved in allergy. J Vet Pharmacol Ther. 2014;37(4):317-324.', publisher: 'JVPT' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Skin Allergies — Environmental, Food | Dog.com', description: 'Dog skin allergies: environmental (atopy), food allergy, and flea allergy dermatitis. How to distinguish them, the correct diagnostic approach.', path: '/health/dog-skin-allergies', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Skin Allergies', description: 'Environmental, food, and flea allergy in dogs — diagnosis and treatment.', url: 'https://dog.com/health/dog-skin-allergies', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dog Skin Allergies', description: 'Environmental atopy, food allergy, and flea allergy dermatitis in dogs.', url: 'https://dog.com/health/dog-skin-allergies', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

const FAQS = [
  { question: 'Are blood allergy tests accurate for dogs?', answer: 'Serum allergy tests (blood tests for environmental allergens like IgE titers) have limited accuracy for diagnosing the specific allergens causing a dog\'s symptoms. They are most useful for guiding allergen-specific immunotherapy formulation once atopy is diagnosed by history and clinical signs — not for diagnosing whether a dog has allergies in the first place. For food allergies, blood tests have even lower accuracy and are not recommended for diagnosis; a dietary elimination trial is the only reliable method.' },
  { question: 'Can I use Benadryl for my dog\'s allergies?', answer: 'Diphenhydramine (Benadryl) has limited efficacy for canine atopic dermatitis — dogs\' histamine receptors differ from humans\', and itching in canine atopy is not primarily histamine-mediated. It may reduce acute itching slightly and has a sedative effect, but it is not a primary treatment for allergic skin disease. Apoquel and Cytopoint are significantly more effective.' },
  { question: 'What breeds are most prone to allergies?', answer: 'The most commonly affected breeds: West Highland White Terriers, Scottish Terriers, Golden Retrievers, Labrador Retrievers, Bulldogs, French Bulldogs, Boxers, Cocker Spaniels, German Shepherds, and Shih Tzus. Breed predisposition strongly suggests a genetic basis for atopic dermatitis, which is well-supported by research.' },
]

export default function DogSkinAllergiesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Skin Allergies', subtitle: 'Allergic skin disease is the most common dermatological condition in dogs and one of the most common reasons for veterinary visits. Three types account for most cases: environmental allergy (atopy), food allergy, and flea allergy dermatitis. They overlap, coexist, and require different management approaches.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '12 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Skin Allergies', href: '/health/dog-skin-allergies' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Allergies', href: '/health/dog-allergies', category: 'Dog Health' }, { title: 'Dog Hot Spots', href: '/health/dog-hot-spots', category: 'Dog Health' }, { title: 'Dog Ear Infections', href: '/health/dog-ear-infections', category: 'Dog Health' }, { title: 'Elimination Diet Protocol', href: '/nutrition/elimination-diet', category: 'Nutrition' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'The Three Types', href: '#types' }, { label: 'Atopy (Environmental)', href: '#atopy' }, { label: 'Food Allergy', href: '#food' }, { label: 'Flea Allergy', href: '#flea' }, { label: 'Apoquel & Cytopoint', href: '#medications' }, { label: 'Immunotherapy', href: '#immunotherapy' }]} />
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">High-Risk Breeds</div>
            {['West Highland White Terrier', 'French Bulldog', 'Golden Retriever', 'Labrador Retriever', 'Bulldog', 'Boxer', 'Cocker Spaniel', 'German Shepherd'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Elimination Diet Protocol', href: '/nutrition/elimination-diet' }, { label: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' }, { label: 'Dog Ear Infections', href: '/health/dog-ear-infections' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-skin-allergies" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="types">The Three Types — How They Differ</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { type: 'Environmental (Atopy)', trigger: 'Pollens, dust mites, molds, dander', pattern: 'Seasonal or year-round. Feet, face, armpits, groin.', prevalence: 'Most common — ~10% of dogs' },
              { type: 'Food Allergy', trigger: 'Protein in the diet (beef, chicken, dairy most common)', pattern: 'Year-round. Non-seasonal. Face, ears, feet, rear end.', prevalence: 'Second most common' },
              { type: 'Flea Allergy Dermatitis', trigger: 'Flea saliva — one bite can trigger weeks of itching', pattern: 'Rear end, base of tail, inner thighs.', prevalence: 'Most common in warm climates' },
            ].map(t => (
              <div key={t.type} className="bg-brand-surface border border-brand-border rounded-lg p-4">
                <div className="font-bold text-brand-dark text-sm mb-2">{t.type}</div>
                <div className="text-2xs text-brand-text-light mb-1">Trigger: {t.trigger}</div>
                <div className="text-2xs text-brand-text-light mb-1">Pattern: {t.pattern}</div>
                <div className="text-2xs text-brand-primary">{t.prevalence}</div>
              </div>
            ))}
          </div>

          <h2 id="atopy">Atopic Dermatitis (Environmental Allergy)</h2>
          <p>Canine atopic dermatitis (cAD) is a genetic predisposition to develop IgE-mediated responses to environmental allergens — pollens (grass, tree, weed), house dust mites (Dermatophagoides species), storage mites, molds, and animal dander. The skin barrier in atopic dogs is structurally compromised — allergens penetrate more easily, and the immune response triggers inflammation and itching.</p>
          <p>The characteristic presentation: itching involving the face (rubbing face on carpet), feet (licking paws until brown-stained from saliva), armpits, groin, and ears. Recurrent ear infections in a young-to-middle-aged dog are a classic atopy presentation. May be seasonal (pollens) or year-round (dust mites). Typically begins between 1–3 years of age.</p>
          <p>Diagnosis: primarily by history and clinical signs, supported by ruling out food allergy (dietary elimination trial) and flea allergy (strict flea control). Intradermal skin testing or serum allergy testing identifies specific allergens for immunotherapy but does not diagnose atopy itself.</p>

          <h2 id="food">Food Allergy</h2>
          <p>True food allergy (IgE-mediated hypersensitivity to a dietary protein) causes non-seasonal itching that does not respond to corticosteroids as well as atopy typically does. The most common dietary allergens in dogs: beef, dairy products, chicken, wheat, egg, lamb, and soy — in that approximate order of frequency. These are the most common because they are the most commonly consumed proteins, not because they are inherently more allergenic.</p>
          <p>Key distinguishing feature: non-seasonal. A dog that itches year-round without seasonal variation is more likely to have a food component. Ear and perianal (around the rear end) involvement is common in food allergy. Concurrent GI signs (soft stool, intermittent diarrhea) occur in a subset of food-allergic dogs — an important clue.</p>
          <p>Diagnosis requires an 8–12 week strict dietary elimination trial — the only reliable method. See the full elimination diet guide for protocol details. Blood tests for food allergies are not validated and should not be used for diagnosis.</p>

          <h2 id="flea">Flea Allergy Dermatitis</h2>
          <p>Flea allergy dermatitis (FAD) is hypersensitivity to proteins in flea saliva. A single flea bite can trigger 2–3 weeks of intense itching in an allergic dog — the absence of visible fleas on the dog does not rule out FAD. The characteristic distribution: severe itching and hair loss over the lower back, base of tail, inner thighs, and abdomen. Presence of flea dirt (black specks that turn reddish-brown when wet) on the dog or in the environment confirms flea exposure.</p>
          <p>Treatment and prevention are the same: strict, year-round flea prevention on all pets in the household. Oral isoxazoline products (Bravecto, NexGard, Simparica) are the most effective. The environment must also be treated — flea eggs and larvae in carpet and furniture account for 95% of the flea population. One flea on one dog in a year-round warm climate means dozens more in the environment.</p>

          <h2 id="medications">Apoquel and Cytopoint</h2>
          <p><strong>Apoquel (oclacitinib):</strong> A JAK (Janus kinase) inhibitor that blocks specific cytokine pathways involved in allergic itch. Prescription oral tablet taken once to twice daily. Effective within 4 hours. Controls itch in approximately 67% of dogs with atopic dermatitis. Long-term safety profile is well-established. Side effects: mild — occasional GI upset, slightly increased susceptibility to infection. Contraindicated in dogs under 12 months or with serious infections, neoplasia, or immune-mediated disease.</p>
          <p><strong>Cytopoint (lokivetmab):</strong> A monoclonal antibody that specifically targets and neutralizes canine IL-31, the primary cytokine driving allergic itch in dogs. Monthly subcutaneous injection given by a veterinarian. Highly targeted mechanism — fewer systemic effects than Apoquel. Works within 24 hours and lasts 4–8 weeks in most dogs. Excellent safety profile — safe for dogs with liver, kidney, or immune conditions that may not tolerate Apoquel.</p>
          <p>Many dogs with moderate to severe atopy benefit from both medications together or from rotating between them. A veterinary dermatologist (<a href="https://acvd.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">DACVD</a>) should be involved in complex or refractory atopic dermatitis — they provide allergen-specific immunotherapy and management approaches beyond what general practitioners typically offer.</p>

          <h2 id="immunotherapy">Allergen-Specific Immunotherapy</h2>
          <p>Allergen-specific immunotherapy (ASIT) — allergy shots or sublingual drops — is the only treatment that modifies the underlying immune response rather than just controlling symptoms. Based on intradermal or serum allergy testing identifying specific allergens, a custom immunotherapy solution is formulated and administered as subcutaneous injections (weekly initially, then monthly) or sublingual drops (daily). Response rate: 50–75% good to excellent response, with improvement building over 6–12 months. Requires long-term (often lifelong) commitment. Best outcome when started in young dogs early in the disease course.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
