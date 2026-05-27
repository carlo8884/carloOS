import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Puppy Biting & Bite Inhibition — What Works & What Doesn\'t | Dog.com', description: 'Puppy biting is normal. Bite inhibition is essential. Here\'s the protocol that actually works — and why "no pain no gain" and alpha rolls make it worse, not better.', path: '/training/puppy-biting', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Puppy Biting & Bite Inhibition', description: 'Normal vs concerning biting, bite inhibition protocol, and what doesn\'t work.', url: 'https://dog.com/training/puppy-biting', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function PuppyBitingPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{ title: 'Puppy Biting & Bite Inhibition', subtitle: 'Puppies explore the world with their mouths. Biting during play is completely normal. The goal is not "stop all biting immediately" — it is to teach bite inhibition: a soft mouth that can distinguish between play and real bite pressure.', category: 'Puppy Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Puppy Biting', href: '/training/puppy-biting' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Puppy Schedule', href: '/training/puppy-schedule' }, { label: 'Crate Training', href: '/training/crate-training' }, { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-puppy-biting" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Bite Inhibition — Why It Matters More Than Stopping Biting</h2>
        <p>Bite inhibition is a dog&apos;s learned ability to control the pressure of its bite. A dog with good bite inhibition that bites during excitement will cause bruising, not puncture wounds. A dog without bite inhibition that bites will cause serious injury. Bite inhibition is learned during puppyhood through play — primarily with other puppies and with humans who teach it correctly. It cannot be effectively taught to adult dogs.</p>
        <p>This is why the goal is not to immediately stop all biting — it is to first teach the puppy to bite softly (inhibition), then progressively teach the puppy not to put teeth on skin at all. Skipping the inhibition phase and going straight to suppression produces a dog that has simply been punished into not biting until something changes — and then bites hard, without inhibition, because it was never taught otherwise.</p>

        <h2>How Puppies Learn Bite Inhibition Naturally</h2>
        <p>In a litter, puppies play-bite constantly. When a puppy bites too hard, the bitten puppy yelps and stops playing — the biter loses its playmate. This feedback, repeated hundreds of times, teaches puppies to control bite pressure. By 8 weeks, most puppies from healthy litters have already begun learning inhibition through this natural feedback loop.</p>

        <h2>The Human Protocol</h2>
        <ol>
          <li><strong>Phase 1 — Teach soft biting:</strong> When the puppy bites at a normal play pressure: continue playing. When the puppy bites hard enough to hurt: say &quot;ouch&quot; calmly, withdraw your hand, and pause play for 30–60 seconds. Resume. The feedback is: hard bite = play ends. This is not a correction or punishment — it is information. Repeat consistently.</li>
          <li><strong>Phase 2 — Reduce acceptable pressure:</strong> Once the puppy is mostly biting softly, progressively lower the threshold — respond to softer and softer pressure until the puppy has learned not to put teeth on skin at all.</li>
          <li><strong>Always provide alternatives:</strong> When the puppy tries to bite, redirect to an appropriate chew toy. Have toys in every room. The puppy needs to bite — give it something appropriate to bite.</li>
          <li><strong>Overtired puppies bite harder:</strong> If your puppy&apos;s biting escalates to unmanageable levels, check the clock. If they&apos;ve been awake for more than 90 minutes, they&apos;re overtired — crate for a nap. Overtired puppies cannot regulate themselves.</li>
        </ol>

        <h2>What Doesn&apos;t Work</h2>
        <ul>
          <li><strong>Yelling or physical punishment:</strong> Escalates arousal, which increases biting. Damages trust. Does not teach inhibition.</li>
          <li><strong>Alpha rolling (pinning the puppy):</strong> Escalates fear and defensive responses, which can escalate to biting harder out of self-protection. Associated with aggression in research.</li>
          <li><strong>Holding the mouth closed:</strong> Does not teach inhibition. Damages trust. Provokes escape behavior.</li>
          <li><strong>Time-outs in excessive duration:</strong> A 30–60 second pause makes the connection between biting and loss of playmate. A 10-minute time-out is disconnected from the behavior and teaches nothing.</li>
        </ul>

        <h2>When Biting Is a Concern</h2>
        <p>Normal puppy biting: during play, with playful body language, redirects to toys, responds to feedback. Concerning biting: growling or snapping when touched (food, sleep, or pain-related), lunging at faces, biting that escalates despite consistent feedback over weeks, or biting with stiff body language and no play signals. Concerning patterns warrant professional evaluation — ideally a veterinary behaviorist to rule out pain-related causes before behavioral intervention.</p>
      </div>
    </ArticleLayout>
  )
}
