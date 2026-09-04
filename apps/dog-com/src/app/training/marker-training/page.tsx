import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  CrossPortfolioCard,
  ArticleByline,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Marker Training for Dogs — How to Start | Dog.com', description: 'Marker training uses a precise signal (click or verbal "yes") to mark the exact moment of correct behavior.', path: '/training/marker-training', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Marker Training for Dogs', description: 'Clicker training and verbal marker protocol for dogs.', url: 'https://dog.com/training/marker-training', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-04T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Start Marker Training Your Dog', description: 'Building a conditioned reinforcer and using it to mark behavior.', url: 'https://dog.com/training/marker-training', totalTime: 'P7D', steps: [
  { name: 'Charge the marker', text: 'Click (or say "yes") and immediately deliver a treat — repeat 20 times. No behavior required yet. The dog learns: that sound means food is coming. This creates the conditioned reinforcer — the click becomes meaningful on its own.' },
  { name: 'Mark a simple offered behavior', text: 'Wait for the dog to do something — sit, look at you, step toward you. The instant it happens, click and treat. The dog will repeat behaviors that produce clicks. This is the fundamental learning mechanism: mark → reinforce → behavior becomes more frequent.' },
  { name: 'Add the cue after the behavior is happening', text: 'Once the dog is offering the behavior reliably, add the verbal cue just before the behavior occurs — not after. "Sit" said just as the dog begins to fold into the sit position connects the word to the action. Cues come before the behavior, not during or after.' },
  { name: 'Build duration, distance, distraction', text: 'Every behavior needs to be trained in three dimensions: duration (how long), distance (how far from you), and distraction (amid competing stimuli). Add one dimension at a time — adding all three simultaneously makes the behavior fall apart.' },
]})
const combined = combineSchemas(schema, howTo)
export default function MarkerTrainingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        contentType="training"
        hero={{ title: 'Marker Training for Dogs', subtitle: 'Marker training — using a precise, consistent signal to mark the exact moment of correct behavior — is the most powerful positive reinforcement training tool available. The marker (a clicker or verbal "yes") bridges the gap between the behavior and the reward, providing information with millisecond precision that is impossible to achieve with treats alone.', category: 'Dog Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Marker Training', href: '/training/marker-training' }]}
        relatedLinks={[{ title: 'Dog Training Hub', href: '/training', category: 'Hub' }, { title: 'Positive Reinforcement', href: '/training/positive-reinforcement', category: 'Training' }, { title: 'Basic Dog Commands', href: '/training/basic-commands', category: 'Training' }, { title: 'Off-Leash Training', href: '/training/off-leash-training', category: 'Training' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Marker Options</div>
            {[['Clicker', 'Most precise — consistent sound · Requires the device be present'], ['Verbal "yes"', 'Always available · Slightly less consistent than click · Works well'], ['Verbal "good"', 'Acceptable but easily confused with praise in conversation'], ['Tongue click', 'Available without hands · Practice for consistency first']].map(([m, d]) => (
              <div key={m} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{m}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Positive Reinforcement', href: '/training/positive-reinforcement' }, { label: 'Basic Commands', href: '/training/basic-commands' }, { label: 'Off-Leash Training', href: '/training/off-leash-training' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Training Tips" subtitle="Science-based guidance weekly." source="training-marker" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-04T00:00:00Z" reviewedBy="Editorial team" />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the marker protocol
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Marker-training protocol
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the charge-the-marker steps, the 10 timing rules, and the
              marker kit (clicker, pea-sized treats, belt-clip pouch) so you
              can mark in the 1.3-second window without scrolling back. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Marker-training protocol"
              subtitle="Email the charge-the-marker steps, timing rules, and marker kit. No spam."
              ctaText="Email my marker-training protocol"
              source="training-marker-training-under-hero"
            />
          </div>

          <h2>Why Timing Is Everything</h2>
          <p>Dogs learn through contiguity — the events that occur close together in time become associated. When you say &quot;good dog&quot; 3 seconds after a correct behavior, the dog is not learning what you think — it is associating &quot;good dog&quot; with whatever it was doing 3 seconds after the behavior (probably looking at you after sitting, not the sit itself). The window for effective reinforcement is approximately 1.3 seconds in dogs — behaviors that are reinforced more than 1.3 seconds after they occur are not effectively marked.</p>
          <p>The marker solves this: a click or &quot;yes&quot; delivered in the exact moment of correct behavior bridges the time gap between the behavior and the treat. The dog hears the click while its haunches are touching the floor — not 2 seconds later while you reach for the treat. The mark is the information; the treat is the reinforcement that maintains the mark&apos;s value. This is why marker training produces faster, more precise behavior than treat-luring alone.</p>

          <h2>Clicker vs Verbal Marker</h2>
          <p>Both work. The clicker&apos;s advantage is consistency — the sound is always the same regardless of the trainer&apos;s emotional state, tone of voice, or what they are saying. A verbal &quot;yes&quot; varies slightly based on how you&apos;re feeling, how tired you are, whether you&apos;re excited. For most pet owners, a well-practiced verbal &quot;yes&quot; works excellently — it is always available, requires no equipment, and produces results indistinguishable from a clicker for general obedience. The clicker is valuable in precision sports (agility, competition obedience) where fine timing and exact behavior marking is important.</p>

          <h2>The 10 Rules of Marker Training</h2>
          <ol>
            <li><strong>The marker always predicts a treat</strong> — every click must be followed by a reward, always, without exception. If you click accidentally, give a treat anyway. Markers that sometimes predict nothing lose their predictive value.</li>
            <li><strong>Mark the moment, not the aftermath</strong> — the click captures the behavior in progress. Click when the dog&apos;s bottom touches the floor, not after it has been sitting for two seconds.</li>
            <li><strong>One click, one treat</strong> — the click ends the behavior. The dog is free to move once marked; it has &quot;earned&quot; the treat. Do not ask the dog to hold position after clicking.</li>
            <li><strong>Short sessions, high engagement</strong> — 3-5 minute training sessions are more effective than 20-minute sessions. Dogs learn in short, focused bursts. End while the dog is succeeding.</li>
            <li><strong>Rate of reinforcement matters</strong> — in early training, 8-10 reinforcements per minute is a good benchmark. If you are clicking less than this, the dog may be failing too often. Make the exercise easier.</li>
            <li><strong>Jackpots are real</strong> — occasionally delivering 3-5 treats at once (a jackpot) for an exceptional behavior creates enthusiasm and motivation. Used sparingly for genuinely outstanding performances.</li>
          </ol>

          {/* Money path — live amazon-brand search hops (marker / clicker kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — not a ranked list. */}
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
              Shop a marker-training kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              A clicker marks the exact moment of the behavior; pea-sized
              treats and a belt-clip pouch keep the reward inside the 1.3-second
              window so the click stays charged. Same clicker, treat, and pouch
              hops used on the{' '}
              <Link
                href="/training/basic-commands"
                className="text-brand-primary no-underline hover:underline"
              >
                basic-commands guide
              </Link>
              . Same treat hop used on the{' '}
              <Link
                href="/training/house-training"
                className="text-brand-primary no-underline hover:underline"
              >
                house-training guide
              </Link>
              {' '}and the{' '}
              <Link
                href="/training/puppy-schedule"
                className="text-brand-primary no-underline hover:underline"
              >
                puppy schedule
              </Link>
              . They are not a ranked product list and they do not replace
              charging the marker. Dog.com earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+training+clicker?s=training-marker-training"
                amazonLabel="Browse dog training clickers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/puppy+training+treats?s=training-marker-training"
                amazonLabel="Browse puppy training treats on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+training+treat+pouch+belt+clip?s=training-marker-training"
                amazonLabel="Browse treat pouches on Amazon →"
              />
            </div>
            <p className="text-2xs text-brand-text-light mt-3">
              See also:{' '}
              <Link href="/training/positive-reinforcement" className="text-brand-primary hover:underline">
                Positive Reinforcement
              </Link>
              {' · '}
              <Link href="/training/basic-commands" className="text-brand-primary hover:underline">
                Basic Commands
              </Link>
              {' · '}
              <Link href="/training/off-leash-training" className="text-brand-primary hover:underline">
                Off-Leash Training
              </Link>
            </p>
          </div>

          <h2>Free Shaping — The Advanced Application</h2>
          <p>Free shaping uses the marker to teach complex behaviors by reinforcing successive approximations — small steps toward the final behavior — without any physical guidance. Place a box on the floor. Click and treat every time the dog looks at it (step 1), moves toward it (step 2), puts a paw on it (step 3), stands in it (step 4). Within 5-10 minutes, using only the click and treat with zero luring, most dogs are standing in the box. This is operant conditioning at its purest — the dog is actively problem-solving to figure out what makes the click happen. Free shaping builds dogs that are active, engaged, and confident thinkers rather than passive followers of lured movements.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
