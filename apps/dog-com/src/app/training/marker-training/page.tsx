import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Marker Training for Dogs — Clicker Training & Verbal Markers | Dog.com', description: 'Marker training uses a precise signal (click or verbal marker) to mark the exact moment correct behavior occurs. How to charge a marker and use it to train faster.', path: '/training/marker-training', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Marker Training for Dogs', description: 'Clicker training and verbal markers — how to charge a marker and use it for precision training.', url: 'https://dog.com/training/marker-training', imageUrl: '', authorName: 'Dog.com Training Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Charge a Clicker for Marker Training', description: 'Step-by-step guide to charging a clicker or verbal marker for dog training.', url: 'https://dog.com/training/marker-training', totalTime: 'PT15M', steps: [
  { name: 'Get high-value treats ready', text: 'Use small (pea-sized), high-value treats the dog works for enthusiastically — small pieces of chicken, cheese, or commercial training treats. Prepare 20-30 pieces in a treat pouch.' },
  { name: 'Click (or say your marker word) once', text: 'The dog is not doing anything in particular. Click the clicker once (or say "yes" or "mark" once — one word, one syllable, consistent). Immediately deliver a treat. The click ends, treat appears — the dog is forming the association.' },
  { name: 'Repeat 20 times in a session', text: 'Click → treat. Click → treat. Vary the time between clicks from 2 to 8 seconds. The dog should not be doing anything in particular — you are simply building the association: click = treat is coming.' },
  { name: 'Test the association', text: 'After 20+ repetitions, watch for the dog\'s ears to prick or head to turn toward you at the click sound, before the treat appears. This indicates the marker is charged — the click itself has taken on meaning.' },
  { name: 'Begin using the marker to mark behaviors', text: 'Click the exact moment the dog performs the behavior you want — the exact moment all four paws touch the sit position, the exact moment a nose touches your hand during target training. Precision matters — the click tells the dog which exact behavior earned the reward.' },
]})
const combined = combineSchemas(schema, howTo)
export default function MarkerTrainingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Marker Training for Dogs', subtitle: 'Marker training — using a clicker or verbal cue to precisely mark the moment a correct behavior occurs — is the most efficient positive reinforcement training method available. The marker bridges the gap between the behavior and the reward, telling the dog with precision: that exact thing you just did earned this treat.', category: 'Dog Training', authorName: 'Dog.com Training Team', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Marker Training', href: '/training/marker-training' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Marker Options</div>
            {[['Box clicker', 'Loudest — best for distance work'], ['Button clicker', 'Compact — easy to hold'], ['"Yes" verbal', 'No equipment needed — slightly less precise'], ['"Click" verbal', 'Can sound similar to clicker'], ['Tongue click', 'Hands-free — good for service dog work']].map(([m, d]) => (
              <div key={m} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{m}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Positive Reinforcement', href: '/training/positive-reinforcement' }, { label: 'Basic Commands', href: '/training/basic-commands' }, { label: 'Puppy Schedule', href: '/training/puppy-schedule' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Training Tips" subtitle="Science-based guidance weekly." source="training-marker" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Markers Work Better Than Delayed Reward</h2>
          <p>Dogs learn by associating their behavior with consequences — but that association is strongest when the consequence is immediate. The problem: it takes 1–3 seconds to reach into a treat pouch and deliver a reward. In 3 seconds, the dog has moved, turned, sniffed something, and is now in a completely different position than when it performed the behavior you wanted to reward. What gets reinforced is "whatever I was doing when the treat arrived" — not necessarily the specific behavior you intended.</p>
          <p>A marker (click or verbal marker like "yes") solves this by creating a precise signal that is conditioned to predict reward. The click takes 0 milliseconds. The dog hears it at the exact moment the sit is complete, the exact moment the paw lifts for a shake, the exact moment nose contacts the target stick. The subsequent treat delivery can happen over the next few seconds — the marker already told the dog which behavior earned it. This precision dramatically accelerates learning and allows training of complex, precise behaviors that would be nearly impossible to shape with lure-and-reward timing alone.</p>

          <h2>Clicker vs Verbal Marker</h2>
          <p>Both work. The clicker has one advantage: it is consistent — the same sound every time, with no variation from mood, tiredness, or distraction. Your voice saying "yes" varies in pitch, speed, and emphasis. For most everyday pet dog training, a consistent verbal marker ("yes" said the same way every time) is convenient and effective. For precision sports (agility, obedience competition, nose work) or complex behavior shaping, the clicker's consistency produces faster and more precise results.</p>
          <p>Pick one and be consistent. Do not use the verbal marker casually in other contexts — if you say "yes" frequently in conversation, it will lose its conditioning. Some trainers use a distinct word like "click" or "mark" specifically as the marker word to avoid this contamination.</p>

          <h2>The Rule — One Click, One Treat</h2>
          <p>Every click must be followed by a treat — no exceptions. If you click accidentally, still give a treat. If you click at the wrong moment, still give a treat. Breaking this rule degrades the conditioning and introduces uncertainty that slows learning. The click must reliably predict that a treat is coming, always. This is also why clicking when you don't intend to reward is something to avoid — be deliberate with the marker.</p>

          <h2>Building a Training Session</h2>
          <p>Effective marker training sessions are short and focused — 3–5 minutes, multiple times per day, rather than one 30-minute session. Dogs learn better in distributed short sessions. End each session on a successful repetition, not a failure. Keep the energy positive — training should be a game the dog wants to play. A dog that is mentally engaged in a short marker training session often shows more improvement than the same dog in a longer forced session.</p>
          <p>Session structure: choose one behavior to work on. Get 10–15 successful marked repetitions of that behavior. If the dog is struggling, make the criteria easier (break the behavior into smaller steps), not harder. End with a jackpot (handful of treats) on the last successful rep — this makes the session end on a peak that the dog remembers positively.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
