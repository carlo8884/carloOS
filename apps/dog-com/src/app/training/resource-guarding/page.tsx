import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Resource Guarding in Dogs — Trade Game & Safety Protocol | Dog.com', description: 'Resource guarding is normal dog behavior. How to manage it safely, teach the trade game, and when to involve a professional. Never punish resource guarding.', path: '/training/resource-guarding', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Resource Guarding in Dogs', description: 'The trade game, safety protocol, and management for canine resource guarding.', url: 'https://dog.com/training/resource-guarding', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Teach the Trade Game for Resource Guarding', description: 'Step-by-step protocol to teach a dog to voluntarily give up items using positive reinforcement.', url: 'https://dog.com/training/resource-guarding', totalTime: 'P8W', steps: [
  { name: 'Never approach and take', text: 'Before training begins, stop all approach-and-take interactions. Every time you approach a guarding dog and take the item by force, you confirm that guarding works and teach the dog to guard more intensely next time.' },
  { name: 'Build positive associations with your approach', text: 'Start without a guarded item. Approach the dog, drop a high-value treat on the floor, and walk away. Repeat 20+ times. The dog learns: human approaching = good things happen.' },
  { name: 'Introduce the trade cue', text: 'With a medium-value item, approach and offer a high-value treat while saying "trade." When the dog takes the treat and releases the item, pick it up, praise, and immediately return it or offer another item. The dog learns: trading does not mean permanent loss.' },
  { name: 'Practice with increasing value items', text: 'Gradually practice trades with higher-value items. Always trade up — what you offer must be better than what you take. Never trade down; it poisons the cue.' },
  { name: 'Management for safety', text: 'In households with children, manage the environment so resource-guarding situations cannot occur during training. Baby gates, separate feeding areas, and supervision prevent incidents while the dog learns.' },
]})
const combined = combineSchemas(schema, howTo)
export default function ResourceGuardingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Resource Guarding in Dogs', subtitle: 'Resource guarding — growling, snapping, or biting when someone approaches food, toys, or resting spots — is a normal canine behavior. It becomes a problem when it creates safety risks. The solution is not punishment: it is teaching the dog that giving things up results in better things.', category: 'Dog Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Resource Guarding', href: '/training/resource-guarding' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Never Do This</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {['Punish growling (removes warning signals)', 'Reach in and take items by force', 'Alpha rolls or dominance responses', 'Approach a guarding dog from above'].map(s => (
                <li key={s} className="flex gap-2"><span className="text-brand-danger font-bold">✗</span>{s}</li>
              ))}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Positive Reinforcement', href: '/training/positive-reinforcement' }, { label: 'Trainer Credentials', href: '/training/trainer-credentials' }, { label: 'Puppy Biting', href: '/training/puppy-biting' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Training Tips" subtitle="Science-based guidance weekly." source="training-resource-guarding" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Resource Guarding Exists</h2>
          <p>In evolutionary terms, an animal that does not defend valuable resources loses them to competitors. Guarding food, high-value chews, and resting spots is adaptive behavior that helped dogs' ancestors survive. The fact that a domestic dog guards a marrow bone from a human is not aggression, dominance, or disrespect — it is a normal behavioral tendency applied in the wrong context. Understanding this matters because the intervention must change the dog's emotional state around approach, not suppress the behavior through punishment.</p>
          <p><strong>Punishment makes resource guarding worse.</strong> Punishing a growl removes the warning signal without addressing the underlying emotion — the dog that stops growling before biting is more dangerous than the dog that growls first. Punishing the behavior without changing the emotional trigger creates a dog that bites without warning.</p>

          <h2>Assessing Severity</h2>
          <p>Resource guarding exists on a spectrum. Mild: dog stiffens, eats faster, or moves away when approached. Moderate: dog freezes, growls, or shows teeth. Severe: dog snaps or bites without significant escalation, guards multiple contexts (food, toys, furniture, locations, people), or has bitten with contact. Mild-to-moderate guarding is addressable through the trade protocol below. Severe guarding — particularly with children in the household, or biting history — warrants working directly with a certified applied animal behaviorist (CAAB) or veterinary behaviorist (DACVB).</p>

          <h2>The Trade Game Protocol</h2>
          <p>The trade game systematically builds a positive association with giving things up. The core principle: trading always means getting something better in return, and the original item is usually returned. The dog learns that human approach during possession means good things — not loss.</p>
          <ol>
            <li><strong>Stop approach-and-take interactions immediately.</strong> Every successful resource guard (dog growls → human backs off or takes by force) rehearses and reinforces guarding behavior.</li>
            <li><strong>Build positive approach associations first</strong> — before any item is involved. Approach → drop a treat → walk away. Twenty repetitions minimum before introducing items.</li>
            <li><strong>Practice trades with low-value items.</strong> Offer a high-value treat while saying "trade." Dog takes the treat → dog releases the item → immediately return it. This last step is critical: returning the item teaches that trading does not mean permanent loss.</li>
            <li><strong>Gradually increase item value</strong> over weeks. Always trade up — what you offer must exceed what you take in value.</li>
            <li><strong>Generalize to other people.</strong> All household members and frequent visitors practice the trade game to ensure the behavior generalizes.</li>
          </ol>

          <h2>Management During Training</h2>
          <p>Training takes weeks. During that period, prevent guarding situations from occurring — particularly with children who cannot be expected to execute a trade protocol correctly. Feed the dog in a separate room. Pick up high-value chews when guests arrive. Use baby gates to separate guarding contexts. Management is not a substitute for training, but it prevents practice of the guarding behavior during the training period.</p>

          <h2>When to Get Professional Help</h2>
          <p>Consult a veterinary behaviorist (DACVB) or certified applied animal behaviorist (CAAB) if: the dog has bitten with contact, guarding has escalated despite consistent training, there are children in the household and the guarding is not resolving, or you are not confident managing the situation safely during training. Medication (typically SSRIs or other anxiolytics) is sometimes used alongside behavior modification for severe cases — only a veterinary behaviorist can appropriately evaluate and prescribe.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
