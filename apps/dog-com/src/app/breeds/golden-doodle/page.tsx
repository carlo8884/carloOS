import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Goldendoodle Guide — F1 vs F1B, Coat Types | Dog.com', description: 'Goldendoodles: F1 (50% Golden/Poodle) vs F1B (75% Poodle) coat and shedding differences explained.', path: '/breeds/golden-doodle', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Goldendoodle Breed Guide', description: 'F1 vs F1B generations, coat types, health testing, and realistic expectations for Goldendoodles.', url: 'https://dog.com/breeds/golden-doodle', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'Are Goldendoodles hypoallergenic?', answer: 'No dog is truly hypoallergenic. Human pet allergies are primarily triggered by Can f 1, a protein in dog saliva, dander, and urine. Low-shedding dogs produce less airborne dander, which may reduce reactions in some people but does not eliminate them. Whether a specific Goldendoodle reduces an individual\'s allergic response depends on that dog\'s coat, that person\'s allergy profile, and exposure time — spending time with the specific dog before purchase is the only real test.' },
  { question: 'What is the difference between F1 and F1B Goldendoodles?', answer: 'An F1 is 50% Golden Retriever / 50% Poodle — its coat can range from a heavily shedding Golden-type coat to a curly, minimally shedding Poodle-type coat, and there is no way to predict the outcome at birth with certainty. An F1B (an F1 crossed back to a Poodle, 75% Poodle) produces curlier, lower-shedding coats in the majority of offspring, which is why it is the most common choice for allergy-conscious buyers. Multigeneration breedings offer the most consistent coat prediction.' },
  { question: 'What health problems do Goldendoodles have?', answer: '"Hybrid vigor" is largely a myth for intentional designer crosses — a Goldendoodle can inherit conditions from both parent breeds. From the Golden Retriever side: cancer at very high rates, hip dysplasia, subvalvular aortic stenosis, and progressive retinal atrophy. From the Standard Poodle side: hip dysplasia, Addison\'s disease, PRA, and sebaceous adenitis. Ask breeders for OFA and DNA-test documentation on both parents, and discuss screening for an individual dog with your veterinarian.' },
  { question: 'How often do Goldendoodles need grooming?', answer: 'Curlier F1B and multigeneration coats mat rapidly without maintenance: professional grooming every 6-8 weeks is the minimum commitment for a full-length coat, with at-home brushing every 2-3 days between appointments. A matted coat requires a complete shave-down — stressful and expensive — so the grooming commitment is ongoing for the life of the dog.' },
  { question: 'How big do Goldendoodles get?', answer: 'Goldendoodles come in three size ranges: standard (45-90 lbs), medium (25-45 lbs), and miniature (15-30 lbs, from Miniature Poodle crosses). Note that miniature Goldendoodles carry a different health profile — Miniature Poodle concerns such as patellar luxation and Legg-Calvé-Perthes disease replace or add to the Standard Poodle list.' },
]
const combinedSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQS }))

export default function GoldendoodlePage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Goldendoodle Breed Guide', subtitle: 'The Goldendoodle (Golden Retriever × Poodle) is one of the most popular "designer breeds" in the US. They combine the Golden\'s temperament with Poodle intelligence and low-shedding coat potential. The key word: potential. Goldendoodles vary significantly in coat, shedding, and health — generation matters enormously.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Goldendoodle', href: '/breeds/golden-doodle' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Poodle Guide', href: '/breeds/poodle', category: 'Breed Guide' }, { title: 'Golden Retriever Guide', href: '/breeds/golden-retriever', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }]}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Generations Explained</div>
          {[['F1', '50% Golden / 50% Poodle — most variable coat'], ['F1B', '25% Golden / 75% Poodle — least shedding'], ['F2', 'Two F1 parents — unpredictable'], ['F2B', 'F1 × F1B — moderately consistent'], ['Multigen', '3+ generations — most consistent coats']].map(([g, d]) => (
            <div key={g} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{g}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Golden Retriever', href: '/breeds/golden-retriever' }, { label: 'Dog Allergies', href: '/health/dog-skin-allergies' }, { label: 'Dog Grooming', href: '/training/basic-commands' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Poodle vs Goldendoodle', href: '/compare/poodle-vs-golden-doodle' },
          { label: 'Labradoodle vs Goldendoodle', href: '/compare/labradoodle-vs-golden-doodle' },
        ]} />
        <RelatedLinks title="Planning for Breed-Specific Costs" links={[{ label: 'Compare Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Tips" subtitle="Expert guidance weekly." source="breed-goldendoodle" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <h2>Generations — Why This Matters More Than Anything</h2>
        <p>The most common Goldendoodle misunderstanding: assuming any Goldendoodle will be low-shedding and "hypoallergenic." Goldendoodle coat outcome depends almost entirely on generation. Each dog inherits a random combination of genes from both parents — in an F1 (first generation), the range is enormous.</p>
        <p><strong>F1 (50% Golden / 50% Poodle):</strong> Coat ranges from essentially a Golden Retriever coat (straight, sheds heavily) to a curly Poodle-like coat (minimal shedding). The majority fall somewhere in between — a wavy coat that sheds moderately. There is no way to predict the coat of an F1 Goldendoodle puppy at birth with certainty.</p>
        <p><strong>F1B (25% Golden / 75% Poodle — F1 Goldendoodle × Poodle):</strong> The most common choice for allergy sufferers. The higher Poodle percentage produces curlier, lower-shedding coats in the majority of offspring — though still not guaranteed. F1B Goldendoodles typically have curlier coats that require professional grooming every 6–8 weeks.</p>
        <p><strong>Multigeneration:</strong> Goldendoodle × Goldendoodle for three or more generations, with selection for specific coat traits. Most consistent coat prediction — reputable multigen breeders can predict coat type with higher accuracy than F1 breeders.</p>

        <h2>"Hypoallergenic" — The Accurate Story</h2>
        <p>No dog is truly hypoallergenic. Pet allergies in humans are primarily triggered by Fel d 1 (cats) or Can f 1 — a protein found in dog saliva, dander, and urine. Low-shedding dogs produce less airborne dander, which may reduce allergic reactions in some people — but do not eliminate them. Whether a specific Goldendoodle reduces an individual's allergic response depends on: that dog's specific coat type, that person's specific allergy profile, and how much time is spent with the dog. There is no guarantee a Goldendoodle will not trigger allergies. Spending time with a specific dog before purchase or adoption is the only way to assess individual compatibility.</p>

        <h2>Health — What Responsible Breeders Test</h2>
        <p>"Hybrid vigor" — the idea that mixed-breed dogs are inherently healthier than purebreds — is largely a myth when applied to intentional designer breed crossings. A Goldendoodle can inherit health conditions from both parent breeds. The health concerns of Golden Retrievers (cancer at very high rates, hip dysplasia, subvalvular aortic stenosis, progressive retinal atrophy) and Standard Poodles (hip dysplasia, Addison's disease, progressive retinal atrophy, sebaceous adenitis) are not eliminated by crossbreeding.</p>
        <p>Responsible health testing requirements for Goldendoodle breeders mirror those for parent breeds. Golden Retriever parent: OFA hip and elbow clearances, OFA cardiac clearance (by cardiologist), OFA eye clearance (CAER), prcd-PRA genetic test. Poodle parent: OFA hip and elbow, OFA eye, prcd-PRA, neonatal encephalopathy (NEwS) genetic test. Ask any Goldendoodle breeder for documentation of these clearances on both parents. Breeders who cannot provide this are not doing appropriate health testing — regardless of price.</p>

        <h2>Grooming — The Ongoing Commitment</h2>
        <p>Goldendoodle coats — particularly the curlier coats of F1B and multigeneration dogs — mat rapidly without regular maintenance. Professional grooming every 6–8 weeks is the minimum commitment for a full-length coat. At-home brushing every 2–3 days prevents mat accumulation. A matted Goldendoodle coat requires a complete shave-down — a stressful and expensive procedure. The grooming commitment is real and ongoing for the life of the dog.</p>

        <h2>Size Options</h2>
        <p>Goldendoodles are available in standard (45–90 lbs), medium (25–45 lbs), and miniature (15–30 lbs — Golden × Miniature Poodle cross). Miniature Goldendoodles have a different health profile than standard — Miniature Poodle health concerns (patellar luxation, hypoglycemia, Legg-Calvé-Perthes disease) replace or add to Standard Poodle concerns. Miniature Goldendoodles are generally not a Golden × Miniature Poodle direct cross — the size difference makes natural breeding impossible. Most are produced through artificial insemination or through intermediate generations.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
    </>
  )
}
