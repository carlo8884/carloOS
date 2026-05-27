import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Off-Leash Dog Training — Recall Foundation & Safety Protocol | Dog.com', description: 'How to train reliable off-leash recall. The long line method, proofing against distractions, and which breeds are safest off-leash. Never trust off-leash until the recall is bombproof.', path: '/training/off-leash-training', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Off-Leash Dog Training', description: 'Recall foundation, long line protocol, and proofing for off-leash reliability.', url: 'https://dog.com/training/off-leash-training', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Train a Reliable Off-Leash Recall', description: 'Step-by-step protocol for building a bombproof recall before going off-leash.', url: 'https://dog.com/training/off-leash-training', totalTime: 'P90D', steps: [
  { name: 'Build the recall cue to mean jackpot', text: 'Every time you say the recall word ("come" or a distinct word like "here"), the dog gets your absolute best reward — high-value treats, massive praise, a game. The recall cue must predict the best thing that has ever happened to the dog. Never use the recall cue for anything unpleasant (bath, nail trim, end of dog park).' },
  { name: 'Practice in zero-distraction environments', text: 'In your living room, in a fenced yard with no other dogs. Call the dog when they are already moving toward you. Always reward. Build 100+ successful repetitions before adding any distraction.' },
  { name: 'Add the long line', text: 'A 20-30 foot light long line attached to a harness (not collar) allows you to let the dog move freely while maintaining safety. Practice recall on long line in increasingly distracting environments. If the dog does not come, gently reel in the line — never chase.' },
  { name: 'Proof against distractions', text: 'Systematically add distractions: other dogs at distance, interesting smells, other people. Always reward heavily. A recall that works at home but not near squirrels is not yet proofed. Add each distraction at low intensity, build reliability, then increase intensity.' },
  { name: 'Never punish a dog that comes to you', text: 'This rule is absolute. Even if the dog took 5 minutes to come, even if you are furious — when they arrive, reward and praise. Punishing a dog for coming teaches them not to come next time. The recall must always be positive.' },
  { name: 'Test in a controlled off-leash environment first', text: 'A securely fenced dog park with few dogs is the first true off-leash test. Practice recall 5-10 times per session, always rewarding. Only graduate to open environments when recall is 95%+ reliable in the controlled environment.' },
]})
const combined = combineSchemas(schema, howTo)
export default function OffLeashTrainingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Off-Leash Dog Training', subtitle: 'A reliable off-leash recall is one of the most valuable skills a dog can have — and one of the most commonly undertrained. Most dogs come when called in the kitchen. Few come reliably when there is a squirrel, another dog, or a smell. The difference is proofing — systematically practicing recall against increasing distractions until reliability is high but never absolute.', category: 'Dog Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Off-Leash Training', href: '/training/off-leash-training' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Never Trust Off-Leash Until...</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {['Recall works 95%+ in high-distraction environments', 'Recall has been proofed near other dogs', 'Recall works when running toward something exciting', 'You have practiced 500+ repetitions', 'The environment is free of roads or other dangers'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger font-bold">→</span>{s}</li>)}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Marker Training', href: '/training/marker-training' }, { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' }, { label: 'Basic Commands', href: '/training/basic-commands' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Training Tips" subtitle="Science-based guidance weekly." source="training-off-leash" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Most Recalls Fail</h2>
          <p>The most common recall failure: the dog has been trained to come in low-distraction environments, then is expected to perform in high-distraction environments without being trained there. A dog that comes reliably in the backyard but ignores you at the dog park is not a disobedient dog — it is a dog that has not been trained to come at the dog park.</p>
          <p>The second most common failure: the recall has been poisoned — the dog has learned that coming when called sometimes means something unpleasant (bath, end of fun, nail trimming). The recall loses its positive value and the dog's motivation to respond decreases. This is why the absolute rule of recall training is: never call your dog to you for anything they perceive as unpleasant, and never punish a dog for coming to you, regardless of how long it took.</p>

          <h2>The Long Line — The Training Tool</h2>
          <p>A 20–30 foot long line on a back-clip harness is the tool that bridges leash training and off-leash reliability. It allows the dog the experience of moving freely while maintaining a safety backup. When practicing recall on a long line: let the dog move to the end of the line, call once, and if they don't respond immediately, walk toward them while gathering the line hand-over-hand (no jerking) until they turn and come in. Then reward heavily. The dog learns that the recall cue has a consequence — they come to you — but the consequence is always positive.</p>
          <p>Use the long line in every new environment before trying off-leash. A new park, a new trail, a new dog-friendly space — long line first, build reliability in that specific environment, then consider off-leash. The long line phase in each new location takes minutes to hours, not days. It is the investment that prevents the dog from disappearing when you finally drop the leash.</p>

          <h2>Breed Reality — Not All Dogs Can Be Off-Leash</h2>
          <p>Honest assessment: some breeds have predatory drive, high independence, or low owner-orientation that makes reliable off-leash recall difficult or impossible in open environments regardless of training quality. Huskies, malamutes, most Nordic breeds — bred to run and largely indifferent to human commands when pursuing their own agenda. Greyhounds and sighthounds — sight triggers a chase impulse that overrides trained behavior. Most terriers — high prey drive and independence create significant recall challenges. This does not mean these dogs cannot have a recall at all — it means their off-leash exercise should be in securely fenced environments where the recall is a safety communication tool rather than the primary containment strategy.</p>
          <p>Breeds that tend toward off-leash reliability: Golden Retrievers, Labrador Retrievers, Border Collies (with extensive training), German Shepherds, Australian Shepherds, Poodles. These breeds' people-orientation and trainability makes the recall more achievable — but even these breeds are not reliably off-leash without significant training investment.</p>

          <h2>Maintaining Recall Over Time</h2>
          <p>Recall reliability degrades without maintenance. A dog trained to a reliable recall at 6 months should be practicing recall with rewards throughout their life — not because they will "forget" the cue, but because maintaining the high value of the recall cue requires ongoing reinforcement. Practice recall multiple times per walk. Reward generously every 3rd–5th repetition to maintain the expectation that recall sometimes produces a jackpot. Keep the recall a game the dog actively wants to play.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
