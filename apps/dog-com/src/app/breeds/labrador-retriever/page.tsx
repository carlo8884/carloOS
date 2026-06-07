import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, StockImage, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Labrador Retriever Guide — POMC Gene, Hip Dysplasia | Dog.com', description: 'Labradors have a specific genetic mutation (POMC) causing food obsession and obesity. Hip and elbow dysplasia common. One of the most trainable breeds', path: '/breeds/labrador-retriever', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Labrador Retriever Breed Guide', description: 'POMC gene food obsession, hip dysplasia, elbow dysplasia, and exercise for Labradors.', url: 'https://dog.com/breeds/labrador-retriever', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function LabradorPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Labrador Retriever Breed Guide', subtitle: 'The most popular dog breed in the US for over 30 consecutive years. Labradors are working retrievers — bred for stamina, trainability, and a soft mouth. Their food motivation (which has a genetic basis) makes them among the most trainable dogs in existence, and among the most prone to obesity.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Labrador Retriever', href: '/breeds/labrador-retriever' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Compare Breeds', href: '/compare', category: 'Breed Guide' }, { title: 'Golden Retriever Guide', href: '/breeds/golden-retriever', category: 'Breed Guide' }, { title: 'German Shepherd Guide', href: '/breeds/german-shepherd', category: 'Breed Guide' }, { title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Nutrition' }, { title: 'Best Dog Food Reviews', href: '/reviews', category: 'Reviews' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '55–80 lbs'], ['Lifespan', '10–12 years'], ['POMC gene', 'Affects 25% — causes insatiable hunger'], ['Hip dysplasia', 'High prevalence — OFA screens essential'], ['Elbow dysplasia', 'Second most affected breed'], ['Exercise', 'High — 60–90 min vigorous daily'], ['Trainability', 'Exceptional — most obedience champions']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Labrador Health Deep-Dive" links={[{ label: 'Labrador Retriever Health Issues & Screenings', href: '/breeds/labrador-retriever/health' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Labrador Feeding Guide', href: '/breeds/labrador-retriever/feeding' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }, { label: 'Dog Arthritis', href: '/health/dog-arthritis' }, { label: 'Best Large Breed Food', href: '/reviews/best-large-breed-dog-food' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Golden Retriever vs Labrador Retriever', href: '/compare/golden-retriever-vs-labrador-retriever' },
          { label: 'Labrador Retriever vs German Shepherd', href: '/compare/labrador-retriever-vs-german-shepherd' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-lab" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <StockImage manifestKey="dog-com:breed-labrador-retriever" aspect="16:9" variant="wide" priority />

        <h2>The POMC Gene — Why Labs Are Obsessed With Food</h2>
        <DropCap>A 2016 study published in Cell Metabolism identified a specific genetic mutation in the POMC (pro-opiomelanocortin) gene that is associated with increased appetite, food-seeking behavior, and obesity in Labrador Retrievers and Flat-Coated Retrievers. Approximately 23% of pet Labradors carry at least one copy of the deletion; in assistance (guide and service) dog populations, the rate is higher — dogs with this mutation may be selected for training because their food motivation makes them exceptionally trainable.</DropCap>

        <CalloutBox variant="evidence" title="Evidence-anchored">
          Hip and elbow dysplasia screening in Labradors uses the <strong>Orthopedic Foundation for Animals (OFA)</strong> evaluation. Require OFA hip and elbow clearances on both sire and dam before purchasing — elbow radiographs are frequently overlooked despite Labradors being the second most elbow-affected breed.
        </CalloutBox>
        <p>The practical implication: a Labrador with the POMC mutation genuinely does not feel full in the way other dogs do. They are not "just food motivated" in the way all dogs are — they have a physiological drive that does not signal satiety normally. This is why Labradors are the most obesity-prone large breed: the food obsession is not behavioral, it is genetic. Measured meals, no free-feeding, and treats counted against daily caloric intake are essential management tools, not suggestions.</p>

        <BreedHealthCard name="Hip and Elbow Dysplasia" riskLevel="very-high"
          description="Labradors rank among the most commonly dysplastic large breeds for both hips and elbows. Hip dysplasia causes abnormal development of the hip socket, leading to arthritis and pain. Elbow dysplasia encompasses several developmental conditions (fragmented coronoid process, OCD, ununited anconeal process) that cause forelimb lameness from a young age. OFA clearances on both parents are a minimum baseline for responsible breeding. Elbow radiographs are often overlooked — require elbow OFA in addition to hips for any Labrador from a breeder."
          signs={['Hips: hind limb weakness, bunny-hopping gait, stiffness after rest', 'Elbows: forelimb lameness, reluctance to extend front legs, visible swelling']}
          management="Giant breed puppy nutrition during growth. Lean weight throughout life — weight management is the highest-impact modifiable factor. Fish oil from young adulthood. Joint supplementation. NSAIDs and Librela for pain. Surgical options: total hip replacement (THR), FHO, elbow surgery depending on specific pathology." />

        <h2>Exercise — The Working Dog Reality</h2>
        <p>Labradors were bred to retrieve waterfowl all day in harsh conditions — their exercise capacity is substantial. Adult Labradors need 60–90 minutes of vigorous exercise daily. A 30-minute walk is inadequate. Without sufficient exercise, Labradors develop behavioral problems: counter-surfing, destructive chewing, hyperactivity, and attention-seeking behaviors. The energy does not go away — it goes somewhere. Swimming is ideal exercise for Labradors specifically — it provides vigorous full-body exercise without the joint impact of running, which matters greatly for a breed with significant dysplasia rates.</p>
        <p><strong>Puppy exercise caveat:</strong> Before growth plates close (approximately 12–18 months), avoid forced running, long distance hiking, or repetitive jumping. Free play is appropriate; sustained forced exercise on growing plates causes growth plate injury. The guideline: 5 minutes of controlled exercise per month of age, twice daily, until 12 months — then gradually increase.</p>

        <h2>Colors and Types — English vs American Lab</h2>
        <p>Labradors come in three colors: black (most common), yellow (ranging from cream to fox red), and chocolate (the most recent color addition). Chocolate Labradors have a shorter median lifespan (10.7 years vs 12.1 years for blacks and yellows) based on published population data — likely related to smaller gene pool effects from breeding selection for the recessive chocolate coloration rather than a direct color-lifespan link.</p>
        <p>Two informal types: American (field-bred) Labradors — leaner, taller, higher energy, bred for hunting and field work. English (show-bred) Labradors — stockier, broader head, calmer temperament, heavier build. Both are Labradors and have similar health profiles, though English types may have higher obesity predisposition from their broader build. Choose based on lifestyle — an American Lab in a sedentary household is a challenging combination.</p>
      </div>
    </ArticleLayout>
  )
}
