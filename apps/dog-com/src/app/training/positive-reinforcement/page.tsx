import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Positive Reinforcement Dog Training — How It Works | Dog.com',
  description: 'How positive reinforcement training works, why it outperforms punishment-based methods, how to use markers and rewards effectively, and the science behind it.',
  path: '/training/positive-reinforcement',
  category: 'Training Fundamentals',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Positive Reinforcement Dog Training — How It Works',
  description: 'The science of positive reinforcement and how to use it effectively.',
  url: 'https://dog.com/training/positive-reinforcement',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const FAQS = [
  { question: 'Will my dog only work for food? What if I run out of treats?', answer: 'This concern reflects a misunderstanding of how reinforcement works. During learning, food (primary reinforcer) teaches the behavior. Once behaviors are trained, you transition to intermittent reinforcement — rewarding unpredictably, which actually makes behaviors more resistant to extinction than continuous reinforcement. You also develop secondary reinforcers (praise, toys, play) that become rewarding because they\'ve been paired with food. A well-trained dog responds to cues without constant food, the same way you work at a job knowing payday comes eventually.', answerText: '' },
  { question: 'What about dogs that need "dominance" or a firm hand?', answer: 'Dominance theory in dog training is based on outdated wolf pack research that has been thoroughly debunked by behavioral science. Modern ethologists and veterinary behaviorists do not use dominance theory to explain dog behavior. Dogs that appear to need "dominance" typically have untreated anxiety, pain, or insufficient reinforcement history for desired behaviors. The ASPCA, AVSAB, and APDT have all issued position statements against dominance-based training methods.', answerText: '' },
  { question: 'Are punishment-based methods like shock collars and prong collars harmful?', answer: 'Yes — consistently across the research. Studies including a 2021 paper in Frontiers in Veterinary Science show that dogs trained with aversive methods show significantly higher rates of aggression, fear, and stress compared to dogs trained with reward-based methods. The American Veterinary Society of Animal Behavior (AVSAB) position statement recommends against using punishment as a primary training method. Beyond ethics, punishment-based methods are also less effective for most behaviors and damage the human-animal bond.', answerText: '' },
]

export default function PositiveReinforcementPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Positive Reinforcement Training — How It Works',
        subtitle: 'Positive reinforcement is not a soft alternative to "real" training — it is the method with the strongest scientific support, the best outcomes, and the best effect on the human-dog relationship. Here\'s how it works and how to use it.',
        category: 'Training Fundamentals',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐕',
        publishedAt: 'May 2025',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Training', href: '/training' },
        { name: 'Positive Reinforcement', href: '/training/positive-reinforcement' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'The Core Principle', href: '#principle' },
          { label: 'What Makes a Good Reinforcer', href: '#reinforcers' },
          { label: 'Timing — The Critical Variable', href: '#timing' },
          { label: 'Markers (Clicker/Word)', href: '#markers' },
          { label: 'Schedules of Reinforcement', href: '#schedules' },
          { label: 'What About Punishment?', href: '#punishment' },
          { label: 'FAQ', href: '#faq' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Puppy Schedule', href: '/training/puppy-schedule' },
          { label: 'Crate Training', href: '/training/crate-training' },
          { label: 'Leash Reactivity', href: '/training/leash-reactivity' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-positive-reinforcement" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="principle">The Core Principle</h2>
        <DropCap>Positive reinforcement is the delivery of something the learner values immediately following a behavior, which increases the probability of that behavior occurring again in the future. That is the complete definition. &quot;Positive&quot; means adding something — not that training is gentle or easy. &quot;Reinforcement&quot; means the behavior increases — if it doesn&apos;t increase, whatever you&apos;re using is not a reinforcer for that individual.</DropCap>
        <p>This mechanism works because all animals (including humans) repeat behaviors that produce good outcomes and cease behaviors that produce neutral or negative outcomes. Dog training is the application of this principle to shape specific behaviors systematically.</p>

        <h2 id="reinforcers">What Makes a Good Reinforcer</h2>
        <p>A reinforcer is defined by its effect on behavior — not by what you think the dog should value. If the treat you&apos;re using isn&apos;t increasing the behavior, it&apos;s not a reinforcer in that context. Common reinforcers ranked by typical value to most dogs:</p>
        <ul>
          <li><strong>High-value food:</strong> Real meat (chicken, beef, turkey), cheese, hot dogs, commercial high-value treats. Use for teaching new behaviors, working in high-distraction environments, reinforcing recalls.</li>
          <li><strong>Medium-value food:</strong> Kibble, standard commercial treats. Use for maintaining already-trained behaviors in low-distraction environments.</li>
          <li><strong>Play:</strong> Tug, ball, chase — highly motivating for many dogs, particularly working breeds. Can be used as a primary reinforcer with play-motivated dogs.</li>
          <li><strong>Praise and physical contact:</strong> Only reinforcing if the individual dog values it. Some dogs are highly social and praise is effective; others are relatively indifferent. Do not assume praise is reinforcing — check the effect on behavior.</li>
          <li><strong>Access to environmental rewards:</strong> Sniffing a particular spot, greeting another dog, going through a door — these are powerful reinforcers that owners often give away for free without using them as training opportunities.</li>
        </ul>
        <p><strong>Match reinforcer value to task difficulty.</strong> Teaching a new behavior in a quiet room: kibble is fine. Maintaining a reliable recall off-leash in a dog park: high-value meat. The dog&apos;s environment and competing stimuli determine the required reinforcer value.</p>

        <h2 id="timing">Timing — The Critical Variable</h2>
        <p>The reinforcer must be delivered within 2 seconds of the behavior to be associated with it. The dog&apos;s brain creates associations based on temporal proximity — if you say &quot;good dog&quot; 5 seconds after the sit, you are reinforcing whatever the dog is doing 5 seconds after the sit (probably standing, looking at the treat, or sniffing the ground). Precise timing is why skilled trainers get faster results — they reinforce the exact behavior they want, not an approximation of it.</p>
        <p>Common timing errors: waiting until the dog is in a perfect, sustained position before rewarding (correct: reward the instant the dog achieves the position, then build duration separately), rewarding after the dog breaks a stay (you are now reinforcing the breaking, not the stay), or rewarding a recall when the dog arrives at your feet but hesitates (reward the arrival, not the hesitation).</p>

        <h2 id="markers">Marker Training</h2>
        <p>A marker is a conditioned reinforcer — a sound (click from a clicker, or a word like &quot;yes&quot;) that has been paired with food until it predicts food delivery. The marker solves the timing problem: you can mark the exact moment of the behavior, then take up to 3–4 seconds to deliver the food. The click or &quot;yes&quot; bridges the gap.</p>
        <p><strong>How to charge the marker:</strong> Click (or say &quot;yes&quot;), immediately deliver a treat. Repeat 20–30 times in rapid succession. The dog does not need to do anything — this is classical conditioning, not operant. After charging, test: click once and watch whether the dog looks for the treat. If yes, the marker is charged.</p>
        <p><strong>Clicker vs verbal marker:</strong> Clickers are more precise and consistent (always the same sound) but require a hand. A verbal marker (&quot;yes,&quot; &quot;good,&quot; &quot;mark&quot;) is always available. Choose based on preference — both work.</p>

        <h2 id="schedules">Schedules of Reinforcement</h2>
        <p><strong>Continuous reinforcement (CRF):</strong> Reward every correct response. Use during initial learning of a new behavior — the most efficient way to create a new behavior pattern.</p>
        <p><strong>Intermittent reinforcement:</strong> Reward only some correct responses, unpredictably. Use once a behavior is learned. Intermittent reinforcement produces behaviors that are more persistent and resistant to extinction than continuously reinforced behaviors — the same reason slot machines are compelling. A dog that sometimes gets rewarded for sitting will sit more persistently than a dog that always gets rewarded for sitting and then stops receiving rewards.</p>
        <p>Transition: teach on continuous → generalize in new contexts on continuous → transition to intermittent once reliable in multiple contexts.</p>

        <CalloutBox variant="evidence" title="Reward-based training has the strongest support">
          The American Veterinary Society of Animal Behavior (AVSAB) position statement and a 2021 paper in <em>Frontiers in Veterinary Science</em> both conclude that dogs trained with aversive methods show higher rates of stress, fear, and aggression than dogs trained with reward-based methods. The evidence is consistent across the published literature.
        </CalloutBox>

        <h2 id="punishment">What About Punishment?</h2>
        <p>Punishment in learning theory means adding something aversive (positive punishment) or removing something desired (negative punishment) following a behavior, which reduces that behavior. Both work mechanistically. The question is whether they are the right tool.</p>
        <p>The research consistently shows that punishment-based training produces:</p>
        <ul>
          <li>Higher rates of stress and anxiety in the trained animal</li>
          <li>Higher rates of aggression — both toward the trainer and toward other dogs and people</li>
          <li>Reduced willingness to offer behaviors (learned helplessness in severe cases)</li>
          <li>Damage to the human-animal bond</li>
        </ul>
        <p>Positive reinforcement-based training does not require punishment. Every behavior problem has a reinforcement-based solution. The behaviors you don&apos;t want can be reduced through differential reinforcement of incompatible behaviors (teaching what you do want), management (preventing the behavior from occurring and being reinforced), and extinction (removing the reinforcer that maintains the unwanted behavior).</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
      </div>
    </ArticleLayout>
  )
}
