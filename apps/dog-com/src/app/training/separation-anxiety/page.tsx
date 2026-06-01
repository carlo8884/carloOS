import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Separation Anxiety — True SA vs Boredom | Dog.com',
  description: 'Most dogs with "separation anxiety" actually have boredom, under-stimulation, or a habit problem — not true separation anxiety.',
  path: '/training/separation-anxiety',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Separation Anxiety',
  description: 'True separation anxiety vs boredom — and what actually works for each.',
  url: 'https://dog.com/training/separation-anxiety',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const howToSchema = buildHowToSchema({
  name: 'How to Treat Separation Anxiety in Dogs',
  description: 'The graduated departure protocol for dogs with separation anxiety — systematic desensitization to owner absence.',
  url: 'https://dog.com/training/separation-anxiety',
  totalTime: 'P3M',
  steps: [
    { name: 'Install a camera', text: 'Set up a camera to observe the dog in your absence. You cannot reliably treat what you cannot observe. Document current anxiety threshold — how long before anxiety behavior begins.' },
    { name: 'Establish a pre-departure routine', text: 'Create a calm pre-departure ritual: give a food-stuffed frozen Kong, leave without prolonged goodbyes, use the same process every time. The Kong should last as long as the planned absence.' },
    { name: 'Start below threshold', text: "Begin with absences of 1-2 minutes — shorter than the dog's current anxiety threshold. Return before anxiety begins. Gradually extend duration only as the dog stays calm." },
    { name: 'Build duration slowly', text: 'Add 1-2 minutes per session over days or weeks. If anxiety behavior appears, reduce to the last successful duration and progress more slowly. Never skip ahead.' },
    { name: 'Maintain gains', text: 'Once reliable at longer durations, vary absence times to prevent anticipatory anxiety. Continue providing frozen Kongs or long-lasting chews for all departures long-term.' },
  ],
})
const combinedTrainingSchema = combineSchemas(schema, howToSchema)

export default function SeparationAnxietyPage() {
  return (
    <>
      <SchemaScript schema={combinedTrainingSchema} />
      <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{
        title: 'Dog Separation Anxiety — What Actually Works',
        subtitle: 'Most dogs labeled with "separation anxiety" are bored, under-exercised, or have a habit of destructive behavior when unsupervised — not clinically anxious. Distinguishing these is the first step to the correct protocol.',
        category: 'Behavior Problems',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐕',
        publishedAt: 'May 2025',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Training', href: '/training' },
        { name: 'Separation Anxiety', href: '/training/separation-anxiety' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'SA vs Boredom — How to Tell', href: '#distinguish' },
          { label: 'Signs of True SA', href: '#signs' },
          { label: 'Protocol for Boredom/Habit', href: '#boredom' },
          { label: 'Protocol for True SA', href: '#true-sa' },
          { label: 'Medication', href: '#medication' },
          { label: 'When to Get Professional Help', href: '#professional' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Crate Training Guide', href: '/training/crate-training' },
          { label: 'Puppy Schedule', href: '/training/puppy-schedule' },
          { label: 'Training Hub', href: '/training' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-sep-anxiety" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="distinguish">True Separation Anxiety vs Boredom — How to Tell</h2>
        <p>This distinction matters enormously because the protocols are completely different. Applying the boredom protocol to a dog with true SA makes things worse; applying the SA protocol to a bored dog is unnecessary and slow.</p>
        <p><strong>The best diagnostic tool: a camera.</strong> Set up a phone or security camera to record your dog for 30 minutes after you leave. What you see tells you everything.</p>
        <ul>
          <li><strong>Boredom/habit:</strong> Dog settles after you leave. May sleep, sniff around, eventually investigate something interesting. Destruction, chewing, or counter-surfing happens at some point during the absence but not immediately after departure. Barking is intermittent rather than continuous. Dog is excited but not distressed when you return.</li>
          <li><strong>True separation anxiety:</strong> Dog shows immediate distress upon your departure or as departure cues begin (you pick up keys, put on shoes). Panting, pacing, whining, howling from the first minutes of being alone. May destroy exit points (doors, windows). May injure themselves in escape attempts. Shows physiological signs of anxiety: dilated pupils, excessive drooling, inability to settle. Some dogs will not eat food or use enrichment toys when alone — appetite suppression during anxiety is common.</li>
        </ul>

        <h2 id="signs">Signs of True Separation Anxiety</h2>
        <ul>
          <li>Distress begins immediately when departure cues appear — not after being left</li>
          <li>Continuous vocalization from departure (neighbors complain within minutes)</li>
          <li>Destruction focused on exit points (doors, windows, door frames)</li>
          <li>Self-injury from escape attempts</li>
          <li>Elimination in the house despite being housetrained and taken outside immediately before departure</li>
          <li>Will not eat food or use toys when alone</li>
          <li>Extreme shadowing behavior (cannot be in a different room from owner)</li>
          <li>Deterioration of physical condition (weight loss, excessive shedding) in severe cases</li>
        </ul>

        <h2 id="boredom">Protocol for Boredom/Habit</h2>
        <p>If your camera shows a dog that settles after you leave but has destruction or nuisance behavior during the absence, this is a management and enrichment problem — not anxiety.</p>
        <ul>
          <li><strong>Increase physical exercise</strong> before departures — a tired dog is a calmer dog. A 30–45 minute walk before leaving changes what the rest of the day looks like.</li>
          <li><strong>Provide enrichment</strong> that lasts: stuffed frozen Kongs (fill with food, freeze overnight), snuffle mats, long-lasting chews (bully sticks, tendons). These replace the dog&apos;s decision to find their own entertainment.</li>
          <li><strong>Crate when unsupervised</strong> — removes access to everything the dog can destroy and creates a predictable management structure while the dog builds a calm unsupervised habit.</li>
          <li><strong>Rotate enrichment</strong> — novelty matters. The same Kong every day becomes less interesting. Rotate chews, food types, and enrichment toys.</li>
          <li><strong>Gradually increase unsupervised freedom</strong> as the habit of calm behavior is established — start with one low-risk room, expand over weeks as reliability increases.</li>
        </ul>

        <h2 id="true-sa">Protocol for True Separation Anxiety</h2>
        <p>True SA is treated with a systematic desensitization protocol called sub-threshold training — the core of which is never leaving the dog at a level that triggers anxiety while building tolerance in very small increments.</p>
        <ol>
          <li><strong>Establish the threshold:</strong> How long can the dog be alone without showing any anxiety? This might be 30 seconds. This is your starting point.</li>
          <li><strong>Begin absences just below threshold:</strong> Leave for 25 seconds. Return before anxiety begins. Return must be calm — no excited greeting. The dog learns that your absence reliably predicts your return.</li>
          <li><strong>Extremely gradual progression:</strong> Add seconds or minutes over days and weeks. The progression feels unbearably slow — this is normal. Rushing above threshold and triggering anxiety sets progress back significantly.</li>
          <li><strong>Departure cue desensitization:</strong> If departure cues trigger anxiety (keys, shoes, coat), practice these cues dozens of times daily without leaving. Put shoes on and sit back down. Pick up keys and put them back. The cues lose their predictive value.</li>
          <li><strong>Never go above threshold while training.</strong> If you must leave for longer than the dog can handle, arrange daycare, a dog sitter, or take the dog with you during the training period. Flooding the dog with a longer absence undoes progress.</li>
        </ol>
        <p>This protocol is slow, demanding, and genuinely difficult for owners who need to go to work. The realistic timescale for meaningful improvement in moderate SA is weeks to months of consistent training. Many owners need a certified separation anxiety trainer (CSAT) — see below.</p>

        <h2 id="medication">Medication — When and What</h2>
        <p>Veterinary behavior medication is appropriate for moderate to severe separation anxiety — not as a substitute for behavior modification, but as a tool that reduces baseline anxiety enough for training to be effective. The most commonly prescribed:</p>
        <ul>
          <li><strong>Fluoxetine (Prozac, Reconcile):</strong> <a href="https://www.fda.gov/animal-veterinary" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a>-approved for canine separation anxiety. Takes 4–6 weeks for full effect. Used as a daily medication alongside behavior modification.</li>
          <li><strong>Clomipramine (Clomicalm):</strong> Also FDA-approved for canine SA. Similar mechanism. Some dogs respond better to one than the other.</li>
          <li><strong>Trazodone:</strong> Situational use for specific high-anxiety events; also used as adjunct to daily medication for particularly difficult situations.</li>
        </ul>
        <p>Discuss with your veterinarian or a veterinary behaviorist. Medication is a tool that enables training — it does not train the dog independently.</p>

        <h2 id="professional">When to Get Professional Help</h2>
        <p>Seek professional help for separation anxiety when: the dog is injuring themselves, destruction is severe or a safety risk, the dog cannot be left alone at all, you have been unable to make progress with self-directed protocols, or the condition is affecting your and your dog&apos;s quality of life significantly.</p>
        <p>Look for a Certified Separation Anxiety Trainer (CSAT) — these trainers specialize specifically in SA and are familiar with sub-threshold protocols. A general positive reinforcement trainer may not have the specific SA expertise needed. For veterinary medication, a veterinary behaviorist (DACVB) has the deepest expertise in both behavior and medication management for complex cases.</p>
      </div>
    </ArticleLayout>
    </>
  )
}
