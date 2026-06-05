import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Play Aggression — Rough Play vs. Real Fighting | Ferret.com',
  description:
    'Telling normal rough ferret play from real aggression: the weasel war dance, neck-biting, dominance dragging, and how to calm an over-aroused ferret.',
  path: '/behavior/play-aggression',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Play Aggression',
  description:
    'Distinguishing normal rough ferret play — the war dance, neck-biting, and dominance dragging — from genuine aggression, and how to manage an over-aroused ferret.',
  url: 'https://ferret.com/behavior/play-aggression',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
    { name: 'Play Aggression', url: 'https://ferret.com/behavior/play-aggression' },
  ],
})

const FAQS = [
  {
    question: 'My two ferrets look like they are fighting — should I break it up?',
    answer:
      "Usually not. Ferret play is loud and physical: neck-grabbing, dragging, rolling, and noisy posturing are all normal social behaviour. As long as both ferrets keep coming back for more, no one is screaming continuously, and no blood is drawn, it is play, not a fight. Intervene only for sustained one-sided attacks, continuous distress screaming, drawn blood, or a ferret that is clearly trying to escape and can't.",
  },
  {
    question: 'What is the weasel war dance?',
    answer:
      "The 'war dance' is the frenzied, sideways, open-mouthed hopping ferrets do when they are wildly excited — often accompanied by dooking and a puffed tail. Despite the warlike name, it is the opposite of aggression: it is a pure expression of play and joy. A war-dancing ferret is inviting you or another ferret to romp.",
  },
  {
    question: 'My ferret gets too rough during play with me — how do I calm it down?',
    answer:
      "Over-arousal makes ferrets nippier and rougher than they intend. Take short breaks before the energy peaks, end sessions on a calm note, and redirect grabbing onto a toy or tunnel rather than your hand. If a ferret is too wound up to play gently, a brief time-out lets the arousal settle. Consistent bite-inhibition work (see our biting guide) carries straight over into rough play.",
  },
  {
    question: 'When is aggression a medical problem rather than play?',
    answer:
      "When it is new. A ferret that suddenly becomes aggressive — toward you or a long-time cage-mate it always got along with — is often in pain or hormonally unwell. Adrenal disease, dental pain, and arthritis all lower social tolerance. New aggression in an established, previously-peaceful ferret is a vet question first and a behaviour question second.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function FerretPlayAggressionPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Play Aggression — Rough Play or Real Fight?',
          subtitle:
            "Ferret play looks alarmingly like combat. They grab each other by the neck, drag one another across the floor, tumble, hiss, and thump — and then do it all again, delightedly, for an hour. Learning to read the line between exuberant rough play and genuine aggression is one of the most useful skills a ferret owner can have.",
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'Play Aggression', href: '/behavior/play-aggression' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Play That Looks Like War', href: '#play' },
                { label: 'The Weasel War Dance', href: '#wardance' },
                { label: 'Real Aggression — The Signs', href: '#real' },
                { label: 'When to Step In', href: '#intervene' },
                { label: 'Managing Over-Arousal', href: '#arousal' },
                { label: 'When It Is Medical', href: '#medical' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Biting & Nipping', href: '/behavior/biting-and-nipping' },
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Stress Signs', href: '/behavior/stress-signs' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-play-aggression"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Behavior Hub', href: '/behavior' },
          { title: 'Biting & Nipping', href: '/behavior/biting-and-nipping' },
          { title: 'Training & Bonding', href: '/behavior/training-and-bonding' },
          { title: 'Stress Signs', href: '/behavior/stress-signs' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            The first time you watch two bonded ferrets play, you may be
            convinced you are witnessing a fight to the death. One grabs the
            other by the scruff, drags it backward across the room, flips it,
            and pins it — while both make a racket. Then the &quot;victim&quot;
            springs up and does exactly the same thing back. This is normal,
            healthy ferret play, and understanding it spares a lot of
            unnecessary panic.
          </DropCap>

          <h2 id="play">Why Ferret Play Looks Like War</h2>
          <p>
            Ferrets are predators that play the way they would hunt and wrestle
            in the wild. Their play vocabulary is built from the same moves their
            polecat ancestors used: grabbing prey by the neck, dragging,
            pinning, and rolling. So normal play includes:
          </p>
          <ul>
            <li>
              <strong>Neck and scruff grabbing.</strong> A core play move, not an
              attack. Ferrets have tough, loose neck skin built to take it.
            </li>
            <li>
              <strong>Dragging and pinning.</strong> Dominance play. One ferret
              hauls the other around or holds it down briefly, then lets go.
            </li>
            <li>
              <strong>Rolling and tumbling.</strong> Bodies loose and bouncy,
              switching roles constantly.
            </li>
            <li>
              <strong>Noise.</strong> Hissing, chittering, and dooking are the
              soundtrack of play. Loud does not mean dangerous.
            </li>
          </ul>

          <h2 id="wardance">The Weasel War Dance</h2>
          <p>
            The unmistakable sign that a ferret is in play mode is the
            &quot;weasel war dance&quot;: a frenzied, sideways, open-mouthed
            bouncing, often with an arched back, a puffed bottle-brush tail, and
            a stream of happy dooks. The name is theatrical; the meaning is pure
            joy. A war-dancing ferret is the furthest thing from an aggressive
            one — it is having the time of its life and inviting everyone to
            join in.
          </p>

          <h2 id="real">Real Aggression — How It Differs</h2>
          <p>
            Genuine aggression has a different texture. The tells are consistency,
            one-sidedness, and distress:
          </p>
          <ul>
            <li>
              <strong>One ferret can&apos;t escape and keeps trying.</strong>{' '}
              Play involves role-swapping; a true victim wants out and is denied
              it.
            </li>
            <li>
              <strong>Continuous distress screaming</strong> (not the odd play
              shriek) that does not resolve.
            </li>
            <li>
              <strong>Drawn blood, or biting that holds and grinds</strong>{' '}
              rather than grab-and-release.
            </li>
            <li>
              <strong>Relentless, one-directional attacks</strong> with no
              breaks and no reciprocation.
            </li>
            <li>
              <strong>A ferret that hides, refuses food near the other, or
              shows lasting fear</strong> — see our{' '}
              <a href="/behavior/stress-signs">stress signs guide</a>.
            </li>
          </ul>

          <h2 id="intervene">When to Step In</h2>
          <CalloutBox variant="tip" title="The simple rule">
            <p>
              If both ferrets keep voluntarily re-engaging, nobody is bleeding,
              and the screaming is occasional rather than continuous, leave them
              to it — interrupting healthy play teaches nothing useful and
              deprives them of important social exercise. Step in for sustained,
              one-sided attacks, drawn blood, continuous distress, or a ferret
              that is genuinely trapped.
            </p>
          </CalloutBox>
          <p>
            When you do need to intervene, calm separation beats punishment. A
            brief, gentle scruff to interrupt an escalating dispute, then a few
            minutes apart, resets the situation — never use it as discipline.
            Our <a href="/behavior/training-and-bonding">training and bonding
            guide</a> covers correct scruffing and the full ferret-introduction
            protocol for pairs that are still working out their dynamic.
          </p>

          <h2 id="arousal">Managing Over-Arousal</h2>
          <p>
            Both ferret-to-ferret and ferret-to-human play can tip from fun into
            too-rough when a ferret gets over-aroused — the equivalent of a kid
            who keeps playing past the point of being able to play nicely. To
            keep play in the green zone:
          </p>
          <ul>
            <li>
              <strong>Break before the peak.</strong> Short, frequent sessions
              beat one long session that ends in a meltdown.
            </li>
            <li>
              <strong>Redirect grabbing onto toys.</strong> A tunnel, a wrestling
              glove, or a crinkle toy gives the grab-and-tug drive a legal target
              instead of your hand.
            </li>
            <li>
              <strong>End on a calm note.</strong> Wind down with gentle handling
              so the session does not end at maximum chaos.
            </li>
            <li>
              <strong>Reinforce bite inhibition.</strong> The work in our{' '}
              <a href="/behavior/biting-and-nipping">biting and nipping guide</a>{' '}
              carries directly into rough play.
            </li>
          </ul>

          <h2 id="medical">When Aggression Is Actually Medical</h2>
          <p>
            A long-peaceful ferret that turns aggressive toward people or a
            trusted cage-mate is sending a health signal more often than a
            behaviour one. Adrenal disease, dental pain, arthritis, and other
            painful conditions all erode social tolerance. New, out-of-character
            aggression — especially in an older ferret or an established pair
            that always got along — is a reason to see an exotic-mammal vet
            before assuming it is a training matter.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret behaviour, social dynamics, and disease chapters.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              behaviour and welfare.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing guidance on ferret
              play and social behaviour.
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB) — positions
              favoring positive-reinforcement methods over punishment.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General behaviour information about ferrets, not individualized
            veterinary or behavioural advice. New or escalating aggression in a
            previously peaceful ferret frequently has a medical cause and
            warrants an exotic-pet vet visit.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
