import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Great Pyrenees Guide — Livestock Guardian Instincts | Dog.com', description: 'Great Pyrenees were bred to work alone guarding livestock.', path: '/breeds/great-pyrenees', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Great Pyrenees Breed Guide', description: 'Livestock guardian instincts, GDV risk, hip dysplasia, and containment for Great Pyrenees.', url: 'https://dog.com/breeds/great-pyrenees', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function GreatPyreneesPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Great Pyrenees Breed Guide', subtitle: 'Majestic, gentle, and deeply independent — Great Pyrenees were bred for thousands of years to guard livestock in remote mountain terrain without human supervision. The traits that made them exceptional livestock guardian dogs (LGDs) — independence, territorial behavior, nighttime activity, loud barking — are the same traits that make them challenging household pets without appropriate management.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Great Pyrenees', href: '/breeds/great-pyrenees' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '85–115 lbs (females smaller)'], ['Lifespan', '10–12 years'], ['GDV risk', 'High — deep-chested, large breed'], ['Containment', '6+ foot fence — strong climbers'], ['Barking', 'Nocturnal barking is breed trait'], ['Independence', 'Very high — not off-leash reliable'], ['Temperament', 'Gentle, calm, devoted to family']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' }, { label: 'Great Dane Guide', href: '/breeds/great-dane' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-great-pyrenees" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Understanding the Livestock Guardian Dog</h2>
        <p>The Great Pyrenees was not bred as a companion, an obedience competitor, or a dog that looks to humans for direction. For thousands of years, these dogs lived with flocks in the Pyrenean mountains, patrolling territory, deterring predators, and making independent decisions — entirely on their own, often without a human nearby for days. They were selected for self-sufficiency, noise (to warn away predators), territorial behavior, and the judgment to act without instruction.</p>
        <p>This heritage is still fully present in the breed. A Great Pyrenees that is barking at 2am is not being disobedient — it heard something and is doing its job. A Great Pyrenees that escapes the yard is not being defiant — it is patrolling what it perceives as its territory. A Great Pyrenees that does not respond to recall with a squirrel in sight is not failing its training — it has evolved to make independent decisions. Understanding this context does not eliminate the management challenges, but it reframes them from "behavioral problems" to "breed characteristics requiring appropriate management."</p>

        <BreedHealthCard name="Gastric Dilatation-Volvulus (GDV / Bloat)" riskLevel="high"
          description="Great Pyrenees are a deep-chested giant breed with significant GDV predisposition. Prophylactic gastropexy — surgically tacking the stomach to the abdominal wall to prevent rotation — is strongly recommended at the time of spay/neuter for all Great Pyrenees. The procedure adds minimal time to the surgery and eliminates the most life-threatening acute risk in the breed. GDV mortality without immediate emergency surgery is near 100% — with prompt surgery, 70–80% survival."
          signs={['Unproductive retching — attempting to vomit without producing anything', 'Distended, drum-like abdomen', 'Restlessness progressing to sudden collapse', 'Excessive drooling', 'Pale gums']}
          management="Prophylactic gastropexy at spay/neuter — the most important preventive decision. Emergency surgery if GDV occurs. Know the location of the nearest 24-hour emergency vet before it is ever needed." />

        <BreedHealthCard name="Hip and Elbow Dysplasia" riskLevel="high"
          description="Great Pyrenees have elevated rates of hip and elbow dysplasia — compounded by their significant body weight. OFA clearances on both parents are the minimum appropriate health testing for responsible breeders. Lean body weight throughout life is the most critical management intervention."
          signs={['Stiffness after rest, improving with movement', 'Hind limb weakness or bunny-hopping gait', 'Reduced activity or reluctance to exercise', 'Elbow swelling or forelimb lameness']}
          management="OFA clearances on breeding dogs. Lean weight maintained throughout life. Fish oil from young adulthood. Joint supplementation. NSAIDs when symptomatic. Surgical options for significant disease." />

        <h2>Containment — Non-Negotiable</h2>
        <p>A Great Pyrenees cannot be reliably contained by a standard fence. They are large enough to climb 4-foot fences, strong enough to push through inadequately secured gates, and motivated enough (by their territorial patrolling instinct) to find any weakness. Minimum containment: 6-foot solid fence with a coyote roller or inward overhang to prevent climbing, self-closing and self-latching gates checked regularly, and concrete or buried hardware cloth at the base to prevent digging under. Electric fencing alone is generally not sufficient — Pyrs have dense coats that reduce sensation and high pain tolerance that can allow them to push through low-intensity shocks.</p>
        <p>A Great Pyrenees that escapes regularly and cannot be contained should not be in a suburban or urban environment — they are working dogs that do best on acreage with appropriate containment or as actual livestock guardians doing the job they were bred for.</p>

        <h2>Barking — Managing a Trait, Not a Behavior Problem</h2>
        <p>Great Pyrenees bark. They were selected for generations on the basis of their willingness to bark to deter predators and alert handlers. They are particularly active at night, when their ancestral predator activity peaked. Nighttime barking is not a training failure — it is a breed characteristic. Management approaches: bring the dog inside at night (most effective — removes the trigger of outdoor sounds and respects neighbors), white noise machines, anti-bark devices as a last resort, and ensuring adequate exercise to reduce overall arousal level. Training "quiet" commands provides some management tool, but will not prevent the breed-typical urge to bark.</p>
        <p>Prospective Great Pyrenees owners in suburban neighborhoods with close neighbors should carefully consider whether the breed's barking tendency is compatible with their living situation before acquisition.</p>
      </div>
    </ArticleLayout>
  )
}
