import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Goldendoodle Guide — F1 vs F1B, Coat Types | Dog.com', description: 'Goldendoodles: F1 (50% Golden/Poodle) vs F1B (75% Poodle) coat and shedding differences explained.', path: '/breeds/golden-doodle', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Goldendoodle Breed Guide', description: 'F1 vs F1B generations, coat types, health testing, and realistic expectations for Goldendoodles.', url: 'https://dog.com/breeds/golden-doodle', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function GoldendoodlePage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Goldendoodle Breed Guide', subtitle: 'The Goldendoodle (Golden Retriever × Poodle) is one of the most popular "designer breeds" in the US. They combine the Golden\'s temperament with Poodle intelligence and low-shedding coat potential. The key word: potential. Goldendoodles vary significantly in coat, shedding, and health — generation matters enormously.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Goldendoodle', href: '/breeds/golden-doodle' }]}
      schema={schema}
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
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Tips" subtitle="Expert guidance weekly." source="breed-goldendoodle" />
      </>}
    >
      <div className="carloOS-article">
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
      </div>
    </ArticleLayout>
  )
}
