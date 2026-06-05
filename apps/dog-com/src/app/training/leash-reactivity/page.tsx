import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Leash Reactivity in Dogs — Why It Happens | Dog.com',
  description: 'Leash reactivity (barking, lunging at other dogs on leash) is one of the most common behavior problems.',
  path: '/training/leash-reactivity',
  category: 'Behavior Problems',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Leash Reactivity — Why It Happens and How to Reduce It',
  description: 'Counter-conditioning and desensitization protocol for leash-reactive dogs.',
  url: 'https://dog.com/training/leash-reactivity',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const howToSchema = buildHowToSchema({
  name: 'How to Treat Leash Reactivity in Dogs',
  description: 'The look at that (LAT) and counter-conditioning protocol for leash-reactive dogs.',
  url: 'https://dog.com/training/leash-reactivity',
  totalTime: 'P2M',
  steps: [
    { name: 'Identify the threshold distance', text: 'Find the distance at which the dog notices the trigger (another dog, person) but has not yet reacted — still able to take treats and look at you. This is sub-threshold. All training happens here.' },
    { name: 'Teach Look at That (LAT)', text: 'When the dog notices the trigger at sub-threshold distance, mark (yes!) and treat before any reaction. You are rewarding the act of noticing calmly. Repeat hundreds of times.' },
    { name: 'Build a conditioned emotional response', text: 'The dog should begin to look at the trigger then back at you expectantly — "trigger = food is coming." This shift in the dog\'s emotional response to the trigger is the goal of counter-conditioning.' },
    { name: 'Reduce distance gradually', text: 'As the dog reliably orients back to you at the current distance, decrease distance by 5-10 feet. Always return to a greater distance if reactivity reappears.' },
    { name: 'Manage the environment', text: 'Avoid over-threshold exposures during training. Use routes where you can see triggers at distance. Cross the street proactively. Management prevents practice of the reactive behavior.' },
  ],
})
const combinedTrainingSchema = combineSchemas(schema, howToSchema)

export default function LeashReactivityPage() {
  return (
    <>
      <SchemaScript schema={combinedTrainingSchema} />
      <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{
        title: 'Leash Reactivity — Why It Happens & How to Reduce It',
        subtitle: 'Leash reactivity (barking, lunging, or snapping at other dogs while on leash) is the most common behavior complaint from dog owners. Understanding why it happens makes the solution logical and achievable.',
        category: 'Behavior Problems',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐕',
        publishedAt: 'May 2025',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Training', href: '/training' },
        { name: 'Leash Reactivity', href: '/training/leash-reactivity' },
      ]}
      relatedLinks={[{ title: 'Dog Training Hub', href: '/training', category: 'Hub' }, { title: 'Dog Aggression', href: '/training/dog-aggression', category: 'Training' }, { title: 'Positive Reinforcement', href: '/training/positive-reinforcement', category: 'Training' }, { title: 'Trainer Credentials', href: '/training/trainer-credentials', category: 'Training' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Why Leash Reactivity Happens', href: '#why' },
          { label: 'Threshold — The Key Concept', href: '#threshold' },
          { label: 'Counter-Conditioning Protocol', href: '#cc' },
          { label: 'Management While Training', href: '#management' },
          { label: 'What Makes It Worse', href: '#worse' },
          { label: 'Realistic Timeline', href: '#timeline' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' },
          { label: 'Separation Anxiety', href: '/training/separation-anxiety' },
          { label: 'Training Hub', href: '/training' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-leash-reactivity" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2 id="why">Why Leash Reactivity Happens</h2>
        <p>Leash reactivity is almost always one of two things: frustration or fear — or a combination of both. Understanding which is driving your dog&apos;s behavior shapes the protocol.</p>
        <p><strong>Frustration-based reactivity (barrier frustration):</strong> A social dog that wants to approach and greet other dogs learns that the leash prevents this. The frustration of restrained access to a desired resource — other dogs — produces a classic frustration response: barking, lunging, spinning. These dogs are often described as &quot;great with other dogs off-leash but terrible on-leash.&quot; Their body language tends forward: weight forward, tail up and wagging, straining toward the other dog.</p>
        <p><strong>Fear-based reactivity:</strong> A dog that is uncomfortable around other dogs uses reactivity as a distance-increasing behavior — the barking and lunging makes the scary thing go away (the other dog leaves). This is negatively reinforced: the behavior that produces relief (scary thing moving away) gets stronger. These dogs often look more defensive: body low or crouched, ears back, may try to back away before going forward, hackles may be raised.</p>
        <p>Many dogs show elements of both. Identifying the primary driver helps tailor the protocol, but the core desensitization and counter-conditioning approach works for both.</p>

        <h2 id="threshold">Threshold — The Key Concept</h2>
        <p>Threshold is the distance at which a dog begins to react. At threshold: dog notices the trigger but remains able to eat food and respond to cues. Above threshold (over-threshold): dog is reacting — barking, lunging, inability to take food or respond to cues.</p>
        <p>Everything in the protocol happens below threshold. A dog that is over-threshold cannot learn — the sympathetic nervous system response (fight/flight) shuts down the learning systems in the brain. Training above threshold makes reactivity worse, not better. This is why pulling a leash-reactive dog toward the trigger &quot;to show them it&apos;s okay&quot; makes things worse — the dog is over-threshold, the experience is aversive, and the negative association with other dogs is reinforced.</p>
        <p>The practical implication: identify your dog&apos;s current threshold distance and keep all training below it. For some reactive dogs, this might be 50 feet. For others, it might be 200 feet. Start where you are.</p>

        <h2 id="cc">Counter-Conditioning and Desensitization Protocol</h2>
        <p>Counter-conditioning (CC) changes the emotional response to the trigger — from negative to positive. Desensitization (DS) reduces reactivity to the trigger by gradual, repeated exposure below threshold. Combined (CC/DS), they are the most evidence-based protocol for leash reactivity.</p>
        <ol>
          <li><strong>Find threshold distance:</strong> Walk far enough that your dog can see other dogs without reacting. This is your starting distance.</li>
          <li><strong>The protocol in practice:</strong> Dog sees another dog → immediately feed continuous high-value food. Dog looks away or other dog leaves → stop feeding. The sequence is: other dog appears = food starts. Other dog leaves = food stops. The dog is learning that other dogs predict food appearing.</li>
          <li><strong>Never ask for anything first.</strong> The food is not a reward for being calm — it is the mechanism that creates the positive association. &quot;Yes good dog, here&apos;s a treat&quot; is too slow and implies the dog was already calm. Dog sees dog → food immediately, simultaneously.</li>
          <li><strong>Gradient reduction:</strong> Over many sessions (weeks to months), gradually decrease the distance at which you begin counter-conditioning. Move closer only when the dog consistently shows a happy, food-seeking response (looking at you expecting treats when they see a dog) rather than tension or avoidance.</li>
          <li><strong>Generalize across dogs:</strong> Small dogs, large dogs, fast-moving dogs, dogs on bikes, dogs across the street. Each variation may initially produce reactivity — treat each as a separate sub-threshold training opportunity.</li>
        </ol>

        <h2 id="management">Management While Training</h2>
        <p>Management prevents the reactive behavior from being practiced (which reinforces it) while you are working on behavior change.</p>
        <ul>
          <li><strong>Walk at low-traffic times and places:</strong> Early morning, quiet streets, parks during off-peak hours. Reduce trigger exposure between training sessions.</li>
          <li><strong>Cross the street before you need to:</strong> Move away from triggers before your dog notices or before you reach threshold distance. You are not avoiding — you are managing.</li>
          <li><strong>Use a no-pull harness for control:</strong> A front-clip harness (PetSafe Easy Walk, Ruffwear Front Range) provides better physical control and reduces pulling without the aversive impact of a choke chain or prong collar.</li>
          <li><strong>Emergency U-turn:</strong> If you encounter a trigger suddenly and cannot create enough distance: turn 180°, move quickly in the opposite direction, then feed when the dog is moving with you. Avoid yelling, jerking the leash, or any aversive response — these increase arousal and worsen reactivity.</li>
          <li><strong>&quot;Look at that&quot; (LAT) cue:</strong> Once your dog can see a trigger below threshold, you can add a cue: &quot;look at that&quot; as they notice the dog, followed by marking when they look at you. This puts the orienting response on cue and is useful for warning you about incoming triggers.</li>
        </ul>

        <h2 id="worse">What Makes Leash Reactivity Worse</h2>
        <ul>
          <li><strong>Leash corrections (jerking):</strong> Creates aversive associations with seeing other dogs — the dog learns that other dogs predict bad things, which worsens fear-based reactivity specifically.</li>
          <li><strong>Flooding (forcing exposure):</strong> Holding the dog while another dog approaches until they &quot;calm down&quot; does not create habituation — it creates learned helplessness and suppressed (but not resolved) anxiety that can eventually escalate to aggression.</li>
          <li><strong>Allowing the behavior to rehearse:</strong> Every reactive episode is practice. The behavior is being reinforced by whatever outcome follows (the dog moves away, the owner retreats). Management that prevents rehearsal is an essential component of progress.</li>
          <li><strong>Punishment after reactivity:</strong> The dog is over-threshold, not making a choice. Punishment in this state damages the relationship and increases stress without addressing the underlying emotion driving the behavior.</li>
          <li><strong>Expecting too much too fast:</strong> Leash reactivity with a significant history takes months of consistent work to meaningfully reduce. Expecting week-one changes leads to abandoning the protocol before it has time to work.</li>
        </ul>

        <h2 id="timeline">Realistic Timeline and Expectations</h2>
        <p>Leash reactivity is one of the slower behavior problems to resolve because you are changing an emotional response — not just a behavior. Meaningful improvement typically takes 3–6 months of consistent CC/DS work. Full resolution of reactivity (dog can calmly pass other dogs at normal sidewalk distance) may take longer, particularly in dogs with a long history of practicing the behavior.</p>
        <p>The goal for many owners is not elimination of all reactivity but <em>management improvement</em> — the dog can walk in the neighborhood without constant threshold-crossing incidents, can pass other dogs at a manageable distance, and recovery from incidents is faster. This is a realistic and meaningful outcome that significantly improves quality of life for both dog and owner.</p>
        <p>If self-directed work is not producing progress after 8–12 weeks, consult a certified professional trainer (CPDT-KA) with documented experience in reactivity cases. A veterinary behaviorist (DACVB) is appropriate for severe cases or where medication may be indicated alongside training.</p>
      </div>
    </ArticleLayout>
    </>
  )
}
