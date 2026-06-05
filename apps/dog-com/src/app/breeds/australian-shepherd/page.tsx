import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Australian Shepherd Guide — MDR1 Gene, Herding Drive | Dog.com', description: 'Australian Shepherds have the MDR1 mutation (drug sensitivity) in 50% of the breed. High exercise needs, herding instincts.', path: '/breeds/australian-shepherd', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Australian Shepherd Breed Guide', description: 'MDR1 drug sensitivity, exercise requirements, and health for Australian Shepherds.', url: 'https://dog.com/breeds/australian-shepherd', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function AustralianShepherdPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Australian Shepherd Breed Guide', subtitle: 'Working herding dogs bred for intelligence, endurance, and problem-solving ability. In a family home with inadequate exercise and mental stimulation, these traits produce a dog that herds children, destroys furniture, and creates challenges. In an active home that channels the breed\'s capabilities appropriately, Aussies are extraordinary companions.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Australian Shepherd', href: '/breeds/australian-shepherd' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Border Collie Guide', href: '/breeds/border-collie', category: 'Breed Guide' }, { title: 'German Shepherd Guide', href: '/breeds/german-shepherd', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }, { title: 'Basic Dog Commands', href: '/training/basic-commands', category: 'Training' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '40–65 lbs'], ['Lifespan', '12–15 years'], ['MDR1 mutation', '50% of breed — drug sensitivity'], ['Exercise need', 'High — 2+ hours vigorous daily'], ['Mental stimulation', 'Essential — not optional'], ['Herding instinct', 'Strong — may herd children/pets']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Socialization Window', href: '/training/dog-socialization-window' }, { label: 'Dog Anxiety', href: '/health/dog-anxiety' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Siberian Husky vs Australian Shepherd', href: '/compare/siberian-husky-vs-australian-shepherd' },
          { label: 'Border Collie vs Australian Shepherd', href: '/compare/border-collie-vs-australian-shepherd' },
          { label: 'Australian Shepherd vs Australian Cattle Dog', href: '/compare/australian-shepherd-vs-australian-cattle-dog' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-aussie" />
      </>}
    >
      <div className="carloOS-article">
        <BreedHealthCard name="MDR1 Gene Mutation (Drug Sensitivity)" riskLevel="high"
          description="The MDR1 (ABCB1) gene mutation affects approximately 50% of Australian Shepherds and causes sensitivity to multiple drugs that are safe in dogs without the mutation. The MDR1 protein (P-glycoprotein) normally pumps drugs out of the brain — dogs with two mutant copies of the gene lack this protective mechanism, allowing normal doses of certain drugs to accumulate to toxic levels in the brain. The classic example: ivermectin at the low doses used for routine heartworm prevention is safe in all dogs; at the higher doses used in some parasite treatments, MDR1-affected dogs suffer neurological toxicity and death. This affects dozens of drugs including loperamide (Imodium), certain anesthetic agents, and some chemotherapy drugs."
          signs={['Drug-specific: ataxia, blindness, seizures, coma after exposure to affected drugs', 'Signs appear within hours of drug administration']}
          management="DNA test (Washington State University College of Veterinary Medicine or commercial labs) costs ~$70 and provides lifelong information. All Aussies should be tested before any medication that carries MDR1 concern. The vet must know the MDR1 status before prescribing. A complete list of MDR1-affected drugs is maintained at vcpl.vetmed.wsu.edu." />

        <h2>Exercise — The Non-Negotiable</h2>
        <p>Australian Shepherds were bred to work 10-hour days herding livestock in mountain terrain. Their exercise requirements reflect this heritage. A 30-minute walk twice daily is insufficient — Aussies need 1.5–2+ hours of vigorous activity daily, ideally including running, fetch, agility, disc work, or structured training that combines physical and mental effort. The good news: Aussies are capable of almost any dog sport and excel at many. Frisbee/disc, agility, flyball, herding trials, dock diving, and obedience competition are all activities that match the breed's capability level.</p>

        <h2>Mental Stimulation</h2>
        <p>Physical exercise alone is not sufficient for Aussies — they need mental work. A tired Aussie from physical exercise will not rest if mentally understimulated; a mentally worked Aussie may rest contentedly after moderate physical exercise. Mental stimulation: formal obedience training (Aussies excel — teach everything), trick training, puzzle feeders and snuffle mats, nose work and scent games, herding classes (access to sheep is possible in many areas even for non-working dogs).</p>

        <h2>The Herding Instinct</h2>
        <p>Herding instinct expresses in the household in predictable ways: circling, nipping at heels, "eye" (intense staring), chasing, and barking at moving targets — children, cats, joggers passing windows, cars. This is not aggression — it is a deeply ingrained behavioral pattern. It can be managed with: early socialization to the triggers, "off" or "enough" cues trained reliably, structured play that provides an outlet, and supervision with young children (heeled children are a herding breed's natural prey response). It cannot be fully eliminated by training but can be significantly managed.</p>

        <h2>Health Beyond MDR1</h2>
        <p>Epilepsy is more common in Australian Shepherds than most breeds — onset typically at 1–3 years. Collie Eye Anomaly (CEA) is a hereditary eye condition affecting the choroid — DNA test available. Multiple Ocular Anomalies (MOA/CEA) — most Australian Shepherd breeders test breeding stock. Hip dysplasia at moderate prevalence — OFA clearances on breeding dogs are appropriate. Hereditary cataracts — OFA CAER eye exam on breeding dogs. Nasal solar dermatitis ("Collie nose") in merle and heavily white-factored dogs.</p>
      </div>
    </ArticleLayout>
  )
}
