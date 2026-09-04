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

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Puppy Biting & Bite Inhibition — What Works | Dog.com', description: 'Puppy biting is normal. Bite inhibition is essential. Here\'s the protocol that actually works', path: '/training/puppy-biting', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Puppy Biting & Bite Inhibition', description: 'Normal vs concerning biting, bite inhibition protocol, and what doesn\'t work.', url: 'https://dog.com/training/puppy-biting', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-04T00:00:00Z' })

// HowTo steps mirror "The Human Protocol" ordered list on this page.
const howToSchema = buildHowToSchema({
  name: 'How to Teach a Puppy Bite Inhibition',
  description: 'The two-phase bite inhibition protocol: teach soft biting first, then progressively reduce acceptable pressure, with redirection and nap management.',
  url: 'https://dog.com/training/puppy-biting',
  steps: [
    { name: 'Phase 1 — Teach soft biting', text: 'When the puppy bites at a normal play pressure, continue playing. When the puppy bites hard enough to hurt, say "ouch" calmly, withdraw your hand, and pause play for 30–60 seconds, then resume. The feedback is information, not punishment: hard bite = play ends. Repeat consistently.' },
    { name: 'Phase 2 — Reduce acceptable pressure', text: 'Once the puppy is mostly biting softly, progressively lower the threshold — respond to softer and softer pressure until the puppy has learned not to put teeth on skin at all.' },
    { name: 'Always provide alternatives', text: 'When the puppy tries to bite, redirect to an appropriate chew toy. Have toys in every room. The puppy needs to bite — give it something appropriate to bite.' },
    { name: 'Watch for overtiredness', text: 'If biting escalates to unmanageable levels and the puppy has been awake for more than 90 minutes, it is overtired — crate for a nap. Overtired puppies cannot regulate themselves.' },
  ],
})
const combinedTrainingSchema = combineSchemas(schema, howToSchema)

export default function PuppyBitingPage() {
  return (
    <>
      <SchemaScript schema={combinedTrainingSchema} />
      <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{ title: 'Puppy Biting & Bite Inhibition', subtitle: 'Puppies explore the world with their mouths. Biting during play is completely normal. The goal is not "stop all biting immediately" — it is to teach bite inhibition: a soft mouth that can distinguish between play and real bite pressure.', category: 'Puppy Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Puppy Biting', href: '/training/puppy-biting' }]}
      relatedLinks={[{ title: 'Dog Training Hub', href: '/training', category: 'Hub' }, { title: 'Puppy Schedule', href: '/training/puppy-schedule', category: 'Training' }, { title: 'Crate Training', href: '/training/crate-training', category: 'Training' }, { title: 'House Training', href: '/training/house-training', category: 'Training' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Puppy Schedule', href: '/training/puppy-schedule' }, { label: 'Crate Training', href: '/training/crate-training' }, { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' }]} />
        <RelatedLinks title="Planning Ahead for a New Puppy" links={[{ label: 'Compare Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-puppy-biting" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-04T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the nipping plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Puppy-biting protocol
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the two-phase bite-inhibition steps, redirection notes, and
            the nipping kit (puppy chew toys, teething toys, stuffable Kong,
            bitter spray) so you can run the protocol without scrolling back.
            No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Puppy-biting protocol"
            subtitle="Email the bite-inhibition protocol, redirection notes, and nipping kit. No spam."
            ctaText="Email my puppy-biting protocol"
            source="training-puppy-biting-under-hero"
          />
        </div>

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

        {/* Money path — live amazon-brand search hops (nipping / teething kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. */}
        <AffiliateDisclosure variant="inline" siteId="dog-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a nipping kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Redirection only works if an appropriate chew is within reach —
            puppy chew toys and teething toys give the mouth something legal
            to do instead of hands. A stuffable Kong occupies the same
            mouth-need during crate naps. Bitter spray is a furniture
            deterrent category, not a substitute for the two-phase protocol.
            Same teething-toy hop used on the{' '}
            <Link
              href="/tools/new-puppy-checklist"
              className="text-brand-primary no-underline hover:underline"
            >
              new-puppy checklist
            </Link>
            {' '}and the{' '}
            <Link
              href="/tools/dog-age-calculator"
              className="text-brand-primary no-underline hover:underline"
            >
              dog age calculator
            </Link>
            . Same Kong hop used on the{' '}
            <Link
              href="/training/separation-anxiety"
              className="text-brand-primary no-underline hover:underline"
            >
              separation-anxiety guide
            </Link>
            . They are not a ranked product list and they do not replace the
            ouch-and-pause protocol. Dog.com earns a commission on qualifying
            purchases at no extra cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/puppy+chew+toys?s=training-puppy-biting"
              amazonLabel="Browse puppy chew toys on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/puppy+teething+toys?s=training-puppy-biting"
              amazonLabel="Browse puppy teething toys on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/kong+classic+dog+toy+stuffable?s=training-puppy-biting"
              amazonLabel="Browse stuffable Kong toys on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/bitter+apple+spray+dog?s=training-puppy-biting"
              amazonLabel="Browse bitter sprays on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/training/puppy-schedule" className="text-brand-primary hover:underline">
              Puppy Schedule
            </Link>
            {' · '}
            <Link href="/training/crate-training" className="text-brand-primary hover:underline">
              Crate Training Guide
            </Link>
            {' · '}
            <Link href="/tools/new-puppy-checklist" className="text-brand-primary hover:underline">
              New Puppy Checklist
            </Link>
          </p>
        </div>

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
    </>
  )
}
