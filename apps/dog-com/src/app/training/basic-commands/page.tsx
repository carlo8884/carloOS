import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Basic Dog Commands — Sit, Down, Stay, Come & Leave It | Dog.com',
  description: 'Step-by-step training protocol for the 5 essential commands every dog should know. Sit, down, stay, come (recall), and leave it — in the correct teaching order.',
  path: '/training/basic-commands',
  category: 'Training Fundamentals',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Basic Dog Commands — Sit, Down, Stay, Come & Leave It',
  description: 'Step-by-step protocol for the 5 essential commands in correct teaching order.',
  url: 'https://dog.com/training/basic-commands',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const COMMANDS = [
  {
    name: 'Sit',
    why: 'The foundation behavior — easiest to teach, produces a predictable stationary position, and is incompatible with jumping. Teaching sit before any other command builds the association between offering a behavior and receiving a reward.',
    steps: [
      'Hold a treat close to your dog\'s nose',
      'Slowly move your hand up — the dog\'s head will follow the treat and their bottom will lower',
      'When the dog is in a sitting position, say "sit," deliver the treat, and praise',
      'Repeat 10–12 times then take a break',
      'After 20–30 repetitions across sessions, add the cue BEFORE the hand signal — say "sit" then lure. Eventually the verbal cue works without the hand signal.',
    ],
    common_mistakes: 'Pushing the dog\'s bottom down. This teaches nothing and breaks trust. Let the lure produce the position naturally.',
    proofing: 'Practice in different rooms, outside, with mild distractions. A sit in the kitchen does not automatically transfer to the park — dogs do not generalize well. Proof each location.',
  },
  {
    name: 'Down',
    why: 'A down position is more relaxed and sustainable than sit — useful for longer duration behaviors and as a calming signal. Teach after sit is reliable.',
    steps: [
      'Ask for sit first',
      'Hold treat at dog\'s nose, then slowly move hand straight to the floor between the dog\'s front paws',
      'The dog\'s elbows should follow to the ground. Do not pull or push.',
      'If they stop halfway: click/mark the partial movement and lure the rest. Build to the full position in small steps.',
      'When elbows hit the floor: say "down," deliver treat, praise',
    ],
    common_mistakes: 'Pushing the dog\'s shoulders down or pulling the front legs forward. Both undermine trust and are unnecessary. Patient luring produces down without force.',
    proofing: 'Down is harder than sit for many dogs — more committed and vulnerable a position. Practice extensively in low-distraction environments before adding difficulty.',
  },
  {
    name: 'Stay',
    why: 'Stay is not a separate cue from sit or down — it is duration added to a position behavior. Teach the concept of duration separately from the position. The three dimensions of stay: duration (how long), distance (how far away you are), and distraction (what\'s competing for attention). Add only one dimension at a time.',
    steps: [
      'Ask for sit',
      'Wait one second. Deliver the treat while the dog is still sitting. This is "stay" — you are reinforcing the staying, not the releasing.',
      'Gradually increase the duration: 2 seconds, 3 seconds, 5 seconds, 10 seconds — over many sessions',
      'Add a release word ("free," "okay," "release") so the dog knows when staying is over',
      'Only add distance (stepping away) after 10+ second duration is reliable',
      'Only add distraction after duration and distance are both reliable',
    ],
    common_mistakes: 'Adding duration, distance, and distraction simultaneously. Each makes stay harder. One at a time. If your dog breaks, you moved too fast — reduce duration, be closer, remove distraction.',
    proofing: 'A solid stay with you 5 feet away for 30 seconds in the yard is a different behavior than a stay on a sidewalk with joggers passing. Proof the whole combination across contexts.',
  },
  {
    name: 'Come (Recall)',
    why: 'The most important safety behavior a dog can know — and the one most inconsistently trained. A reliable off-leash recall can save a dog\'s life. It must be trained more carefully than any other cue.',
    steps: [
      'Never use recall to end something the dog likes (bath, nail trim, end of off-leash time) without compensating with a high-value treat — or your recall will predict only bad outcomes.',
      'Begin indoors. Say your recall word ("here," "come") in a happy voice. When the dog arrives, massive reward — your highest value treat.',
      'Progress to outdoors with a long line (15–30 feet of leash) before practicing off-leash',
      'Practice recalls at the park by calling, treating, and releasing the dog to play again — multiple times per visit. The dog learns that recall does not end fun.',
      'Never punish a dog for a slow recall or for anything once they arrive — ever. Even if you waited 5 minutes. The dog is reinforced for what they are doing when they arrive.',
    ],
    common_mistakes: 'Using recall to end play and going straight home. This reliably destroys recall. Dogs that recall and then get put in the car learn that recall = end of good things. Counter: recall → treat → release to play → repeat several times before leaving.',
    proofing: 'The dog that recalls perfectly in the house may not recall in a field with other dogs present. Proof is ongoing. Never rely on untrained off-leash recall near roads.',
  },
  {
    name: 'Leave It',
    why: 'Leave it teaches the dog to disengage from something on the ground or approaching — one of the most useful safety behaviors, particularly in urban environments (food on the sidewalk, dropped medication, other dogs).',
    steps: [
      'Put a low-value treat in your closed fist. Present fist to dog.',
      'Dog sniffs, licks, paws at fist. Do not open it. When the dog backs away or looks at you: click/mark, open the fist and give the treat from your other hand (not the fisted one — that becomes the "leave it" item).',
      'Once reliable with fist: place treat on floor, cover with your hand. Remove hand when dog looks away from treat. Give treat from your hand.',
      'Progress to treat on floor without covering. Say "leave it." Dog disengages: click/treat from your hand.',
      'Generalize to real-world items: food on the sidewalk, approaching other dogs, objects.',
    ],
    common_mistakes: 'Repeating "leave it" multiple times. Say it once. If the dog doesn\'t disengage, you moved too fast in the progression. Go back a step. Repeated cues teach dogs that the first cue is a suggestion.',
    proofing: 'Leave it for food on the ground is a different skill than leave it for another dog. Each generalization requires its own practice.',
  },
]

const howToSchema = buildHowToSchema({
  name: 'How to Teach a Dog Basic Commands',
  description: 'Step-by-step protocol for teaching sit, down, stay, come, and leave it using positive reinforcement.',
  url: 'https://dog.com/training/basic-commands',
  totalTime: 'P4W',
  steps: [
    { name: 'Teach sit', text: 'Hold a treat at your dog\'s nose, move hand up so head follows and bottom lowers. When seated, say "sit," give the treat. Repeat 5x per session until reliable.' },
    { name: 'Teach down', text: 'From sit, move a treat from the nose toward the floor. When elbows touch floor, say "down," give the treat. Never push the dog down — lure only.' },
    { name: 'Teach stay', text: 'Ask for sit or down. Say "stay," take one step back, return, give treat. Gradually increase distance and duration over multiple sessions before adding distractions.' },
    { name: 'Teach come', text: 'Move a few feet away, call "come" in a happy tone, crouch down and open arms. Reward generously with high-value treats — this must always be the most rewarding thing the dog does.' },
    { name: 'Teach leave it', text: 'Hold a treat in closed fist. When the dog stops pawing and backs away, say "leave it" and give a different treat from your other hand. Progress to items on the floor over multiple sessions.' },
  ],
})
const combinedTrainingSchema = combineSchemas(schema, howToSchema)

export default function BasicCommandsPage() {
  return (
    <>
      <SchemaScript schema={combinedTrainingSchema} />
      <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{
        title: 'Basic Dog Commands — The 5 Every Dog Must Know',
        subtitle: 'Sit, down, stay, come, and leave it — taught in this order, with the correct protocol. Teaching order matters: each behavior builds on the last, and stay is not a separate cue from sit.',
        category: 'Training Fundamentals',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐕',
        publishedAt: 'May 2025',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Training', href: '/training' },
        { name: 'Basic Commands', href: '/training/basic-commands' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={COMMANDS.map(c => ({ label: c.name, href: `#${c.name.toLowerCase().replace(' ', '-')}` }))} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' },
          { label: 'Marker Training', href: '/training/marker-training' },
          { label: 'Puppy Schedule', href: '/training/puppy-schedule' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-basic-commands" />
      </>}
    >
      <div className="carloOS-article">
        <div style={{ background: 'var(--brand-primary-pale)', borderLeft: '4px solid var(--brand-primary)', borderRadius: '0 10px 10px 0', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '8px' }}>Session Length</div>
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>Keep sessions short: 3–5 minutes for puppies, 5–10 minutes for adult dogs. Multiple short sessions daily produce faster results than one long session. Always end on success — finish with something the dog does well, reward generously, and stop before either of you loses focus.</p>
        </div>

        {COMMANDS.map(cmd => (
          <div key={cmd.name} id={cmd.name.toLowerCase().replace(' ', '-')} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--brand-dark)', borderBottom: '1px solid var(--brand-border)', paddingBottom: '10px', marginBottom: '14px' }}>{cmd.name}</h2>
            <p style={{ fontSize: '15px', color: 'var(--brand-text-mid)', lineHeight: 1.75, marginBottom: '14px' }}><strong style={{ color: 'var(--brand-dark)' }}>Why it matters:</strong> {cmd.why}</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '10px' }}>Teaching Protocol</h3>
            <ol style={{ paddingLeft: '22px', marginBottom: '16px' }}>
              {cmd.steps.map((step, i) => (
                <li key={i} style={{ fontSize: '14px', color: 'var(--brand-text-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{step}</li>
              ))}
            </ol>
            <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.15)', borderRadius: '8px', padding: '14px 18px', marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '6px' }}>Common Mistake</div>
              <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>{cmd.common_mistakes}</p>
            </div>
            <div style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)', borderRadius: '8px', padding: '14px 18px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-text-light)', marginBottom: '6px' }}>Proofing Notes</div>
              <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>{cmd.proofing}</p>
            </div>
          </div>
        ))}

        <h2>What Comes After These Five</h2>
        <p>Once all five commands are reliable in low-distraction environments, the next priorities are: proofing each in multiple locations and with increasing distraction levels, adding distance to stays and recalls, and teaching a name response that is reliable enough to interrupt behavior at a distance. From there: loose-leash walking, which deserves its own dedicated guide.</p>
        <p>Many behavior problems that are brought to professional trainers — leash reactivity, resource guarding, jumping — are more tractable in dogs that already have solid basic obedience. The communication foundation built in basic training makes everything else easier.</p>
      </div>
    </ArticleLayout>
    </>
  )
}
