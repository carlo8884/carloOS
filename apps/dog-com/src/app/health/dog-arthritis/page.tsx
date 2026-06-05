import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, PullQuote, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Arthritis in Dogs — Signs, Treatment | Dog.com', description: 'Arthritis affects 1 in 5 dogs. Signs owners miss, proven treatments (weight loss + NSAIDs + rehabilitation).', path: '/health/dog-arthritis', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Arthritis in Dogs', description: 'Signs, diagnosis, and multimodal treatment for canine osteoarthritis.', url: 'https://dog.com/health/dog-arthritis', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Arthritis in Dogs', description: 'Diagnosis and multimodal treatment for canine osteoarthritis.', url: 'https://dog.com/health/dog-arthritis', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function DogArthritisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Arthritis in Dogs', subtitle: 'Osteoarthritis affects approximately 1 in 5 adult dogs and is the most common cause of chronic pain in the species. Most arthritic dogs are not treated — owners attribute the signs to normal aging. Effective, long-term management exists and dramatically improves quality of life.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '11 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Arthritis', href: '/health/dog-arthritis' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Best Joint Supplements', href: '/reviews/best-joint-supplements', category: 'Dog Health' }, { title: 'Dog Obesity', href: '/health/dog-obesity', category: 'Dog Health' }, { title: 'Senior Dog Care', href: '/health/senior-dog-care', category: 'Dog Health' }, { title: 'Newer Treatments: Librela (bedinvetmab)', href: '/health/dog-arthritis#newer', category: 'Dog Health' }]}
        contentType="health"
        sidebar={<>
          <TableOfContents items={[{ label: 'Signs — What to Look For', href: '#signs' }, { label: 'Diagnosis', href: '#diagnosis' }, { label: 'Weight Management', href: '#weight' }, { label: 'NSAIDs', href: '#nsaids' }, { label: 'Supplements', href: '#supplements' }, { label: 'Rehabilitation', href: '#rehab' }, { label: 'Newer Treatments', href: '#newer' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Health Hub', href: '/health' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }, { label: 'Best Dog Beds', href: '/reviews/best-dog-beds' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }]} />
          <div className="bg-brand-dark rounded-lg p-5 mb-4">
            <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">Arthritis + Insurance</div>
            <h3 className="font-display text-base font-bold text-brand-white mb-2">Joint care adds up year over year</h3>
            <p className="text-xs text-white/60 mb-3 leading-relaxed">Lifelong arthritis management — joint injections, surgery, daily medication — typically totals $5,000-$15,000+. Insurance covers it if you enroll before signs appear.</p>
            <a href="/reviews/best-pet-insurance" className="inline-block text-xs font-bold text-brand-primary hover:underline">Compare pet insurance →</a>
          </div>
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-arthritis" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <DropCap>Osteoarthritis is the most common source of chronic pain in dogs — yet most affected animals go untreated because their owners attribute the signs to normal aging. Understanding the subtle early signs, and the multimodal treatments that genuinely work, can restore a dog's quality of life for years.</DropCap>

          <h2 id="signs">Signs — What Owners Miss</h2>
          <p>The obvious signs — limping, crying when touched — occur in severe cases. Most arthritic dogs show subtler changes that are frequently attributed to "just getting old": reluctance to use stairs or jump onto furniture (new, when they used to do it without hesitation), stiffness after rest that improves after a few minutes of movement (the warming-up pattern), reduced walking pace or distance tolerance, difficulty rising from lying down, muscle mass reduction over affected limbs (dogs use them less), and behavioral changes — less interactive, more irritable when touched.</p>
          <p>The diagnostic question: has something changed from the dog's normal baseline? A dog that used to spring up the stairs and now hesitates is telling you something. Age alone does not cause these changes — pain causes them.</p>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>Radiographs (X-rays) are the primary diagnostic tool — they show joint space narrowing, bone remodeling, osteophyte (bone spur) formation, and subchondral bone changes characteristic of osteoarthritis. A thorough orthopedic examination identifies which joints are affected, the degree of pain on manipulation, crepitus (grinding sensation), and muscle mass changes. Blood and urine testing screens for concurrent disease and establishes a baseline before starting NSAIDs.</p>
          <p>Advanced imaging (CT, MRI) is used for complex cases — early joint changes invisible on radiograph, surgical planning, and spinal arthritis assessment.</p>

          <h2 id="weight">Weight Management — The Most Powerful Intervention</h2>
          <p>Weight loss is the single most impactful arthritis intervention — more effective than NSAIDs alone in overweight dogs. Each pound of excess weight adds approximately 4 pounds of force per step across affected joints. In a 10-pound overweight Labrador, weight loss to ideal body condition produces pain relief equivalent to or greater than NSAID therapy in multiple clinical studies.</p>
          <p>The goal: BCS 4–5 on a 9-point scale. Ribs easily palpable with light pressure. Visible waist. Abdominal tuck. In arthritic dogs, this is a treatment target, not a cosmetic goal. Prescription weight management diets (Hill's Metabolic, Royal Canin Satiety) achieve more reliable weight loss than calorie restriction of regular food alone.</p>

          <PullQuote
            variant="inline"
            quote="Weight loss is the single most impactful arthritis intervention — more effective than NSAIDs alone in overweight dogs."
            attribution="AAHA Canine Life Stage Guidelines"
          />

          <h2 id="nsaids">NSAIDs — Prescription Required</h2>
          <p>Non-steroidal anti-inflammatory drugs are the most effective pharmaceutical treatment for osteoarthritis pain in dogs. Veterinary NSAIDs (Carprofen/Rimadyl, Meloxicam/Metacam, Grapiprant/Galliprant, Deracoxib/Deramaxx) are designed for dogs and metabolized appropriately by canine physiology.</p>

          <CalloutBox variant="warning" title="Human NSAIDs are toxic">
            Ibuprofen, naproxen, and acetaminophen (Tylenol) cause gastrointestinal ulceration and acute kidney or liver injury in dogs at doses that are safe for humans. Aspirin has a narrow safety margin. Never use a human pain reliever on a dog — call your veterinarian for the appropriate prescription instead.
          </CalloutBox>

          <p><strong>Do not give human NSAIDs to dogs.</strong> Ibuprofen and naproxen are toxic to dogs at doses that are safe for humans — they cause gastrointestinal ulceration and acute kidney injury. Aspirin has a narrow safety margin and significant GI side effects. Acetaminophen (Tylenol) is toxic to dogs. All of these are inappropriate for canine pain management.</p>
          <p>Veterinary NSAIDs require a prescription and periodic blood monitoring (liver and kidney function) when used long-term. The monitoring is not excessive caution — NSAID-associated kidney and liver effects, while uncommon, are real and detectable before they become serious. Annual bloodwork is standard for dogs on chronic NSAIDs.</p>

          <h2 id="supplements">Supplements with Evidence</h2>
          <p><strong>Omega-3 fatty acids (EPA/DHA):</strong> The strongest published evidence of any supplement (Roush et al., JAVMA 2010). Marine omega-3s (fish oil, krill oil) reduce inflammatory mediators in joint tissue. Dose: 20–55mg/kg combined EPA+DHA daily. Calculate from the actual EPA+DHA content on the label. Nordic Naturals Omega-3 Pet is a reliable formulation. Effect builds over 4–6 weeks.</p>
          <p><strong>Glucosamine + chondroitin:</strong> Dasuquin Advanced (Nutramax) has the most research support in veterinary medicine. Provides building blocks for cartilage matrix. Evidence for symptom modification is moderate — most benefit seen in early-to-moderate arthritis. Allow 4–6 weeks for evaluation.</p>
          <p><strong>Green-lipped mussel (Perna canaliculus):</strong> Contains both omega-3s and glycosaminoglycans — dual mechanism. Some evidence for pain reduction and mobility improvement. Zesty Paws and 4CYTE are established veterinary products.</p>

          <h2 id="rehab">Rehabilitation and Physical Therapy</h2>
          <p>Veterinary rehabilitation (performed by CCRT-certified therapists or veterinary physiotherapists) includes: hydrotherapy (underwater treadmill — warm water supports body weight while allowing gait), therapeutic exercises (balance boards, cavaletti poles, controlled leash exercises), manual therapy (joint mobilization, massage), laser therapy, and TENS/NMES. Rehabilitation improves muscle mass, mobility, and pain scores in arthritic dogs. It is not a luxury — it is a recognized medical modality with substantial evidence.</p>

          <h2 id="newer">Newer Treatments</h2>
          <p><strong>Librela (bedinvetmab):</strong> A monoclonal antibody targeting nerve growth factor (NGF), a key pain mediator in osteoarthritis. Monthly injection. <a href="https://www.fda.gov/animal-veterinary" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a> approved in 2023. Clinical trials showed significant improvement in pain and mobility scores with minimal side effects. A meaningful advance — particularly for dogs that cannot tolerate NSAIDs due to kidney or liver disease.</p>
          <p><strong>Adequan (polysulfated glycosaminoglycan):</strong> Injectable — administered by injection twice weekly for 4 weeks, then monthly. Inhibits cartilage-degrading enzymes and may support cartilage repair. Used as a disease-modifying treatment in early arthritis.</p>

          <ArticleSourcesList
            sources={[
              {
                label: 'AAHA Canine Life Stage Guidelines -- osteoarthritis and pain management recommendations',
                url: 'https://www.aaha.org/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats/',
                publisher: 'AAHA',
              },
              {
                label: 'Roush JK et al. -- Evaluation of the effects of dietary supplementation with fish oil omega-3 fatty acids on weight bearing in dogs with osteoarthritis',
                url: 'https://avmajournals.avma.org/doi/10.2460/javma.236.1.67',
                publisher: 'J Am Vet Med Assoc (JAVMA 2010)',
              },
              {
                label: 'FDA Animal Veterinary -- veterinary NSAID approval and safety information',
                url: 'https://www.fda.gov/animal-veterinary',
                publisher: 'U.S. Food and Drug Administration',
              },
              {
                label: 'FDA Librela (bedinvetmab) Approval -- monoclonal antibody for canine osteoarthritis pain',
                url: 'https://www.fda.gov/animal-veterinary/news-events/fda-approves-first-monoclonal-antibody-treat-pain-associated-osteoarthritis-dogs',
                publisher: 'U.S. Food and Drug Administration',
              },
            ]}
          />
        </div>
      </ArticleLayout>
    </>
  )
}
