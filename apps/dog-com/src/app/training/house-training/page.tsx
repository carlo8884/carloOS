import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  CrossPortfolioCard,
  ArticleByline,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'House Training Guide — The Schedule Method That Works | Dog.com', description: 'Complete house training guide for puppies and adult dogs. The schedule method, accident protocol, common mistakes.', path: '/training/house-training', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'House Training Guide', description: 'The schedule method, accident protocol, and realistic timeline.', url: 'https://dog.com/training/house-training', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-04T00:00:00Z' })

const howToSchema = buildHowToSchema({
  name: 'How to House Train a Dog',
  description: 'The schedule method for house training puppies and adult dogs using positive reinforcement.',
  url: 'https://dog.com/training/house-training',
  totalTime: 'P3M',
  steps: [
    { name: 'Establish a feeding schedule', text: 'Feed at consistent times. Dogs typically need to eliminate within 15-30 minutes of eating. Consistent meals create predictable elimination windows.' },
    { name: 'Take outside after every trigger', text: 'Take the dog outside immediately after: every meal, every nap, every play session, every drink of water, every period of crating.' },
    { name: 'Go to the same spot', text: 'Use the same outdoor spot each time. The scent cue from previous eliminations prompts faster response.' },
    { name: 'Mark and reward outdoor elimination', text: 'When the dog eliminates outside, mark immediately with a word (yes!) and reward with a high-value treat within 2 seconds of finishing.' },
    { name: 'Handle accidents neutrally', text: 'If you catch the dog mid-accident: calm interruption, immediately take outside. If found after the fact: clean with enzymatic cleaner and say nothing to the dog.' },
    { name: 'Expand freedom gradually', text: 'As reliability increases over weeks, expand access to more of the house one room at a time. Return to restriction if accidents recur.' },
  ],
})
const combinedSchema = combineSchemas(schema, howToSchema)

export default function HouseTrainingPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{ title: 'House Training Guide', subtitle: 'House training is not about punishing accidents — it\'s about setting the dog up to eliminate outside consistently enough that it becomes the habit. The schedule method does this faster and more reliably than any other approach.', category: 'Puppy Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'House Training', href: '/training/house-training' }]}
      relatedLinks={[{ title: 'Dog Training Hub', href: '/training', category: 'Hub' }, { title: 'Crate Training', href: '/training/crate-training', category: 'Training' }, { title: 'Puppy Schedule', href: '/training/puppy-schedule', category: 'Training' }, { title: 'Puppy Biting', href: '/training/puppy-biting', category: 'Training' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'The Core Principle', href: '#principle' }, { label: 'The Schedule Method', href: '#schedule' }, { label: 'Accident Protocol', href: '#accidents' }, { label: 'Reinforcing Outside Elimination', href: '#reinforce' }, { label: 'Common Mistakes', href: '#mistakes' }, { label: 'Realistic Timeline', href: '#timeline' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Crate Training Guide', href: '/training/crate-training' }, { label: 'Puppy Schedule', href: '/training/puppy-schedule' }, { label: 'Best Dog Crates 2026', href: '/reviews/best-dog-crates' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-house" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-04T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the schedule method
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            House-training schedule
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the schedule method, accident protocol, and house-training kit
            (enzymatic cleaner, high-value treats, crate with divider, poop bags)
            so you can run the routine without scrolling back. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="House-training schedule"
            subtitle="Email the schedule method, accident protocol, and house-training kit. No spam."
            ctaText="Email my house-training schedule"
            source="training-house-under-hero"
          />
        </div>

        <h2 id="principle">The Core Principle</h2>
        <p>House training works by making outdoor elimination the path of least resistance through consistent scheduling, and by making indoor accidents impossible (via crate or direct supervision) or unrewarding (via neutral cleanup rather than attention). Punishment does not work — a puppy that is punished for indoor accidents learns to hide their accidents, not to go outside. The goal is to reward the right behavior, not to punish the wrong one.</p>

        <h2 id="schedule">The Schedule Method</h2>
        <p>Take the puppy outside immediately after every:</p>
        <ul>
          <li>Meal</li>
          <li>Nap (immediately on waking)</li>
          <li>Play session</li>
          <li>Drinking water</li>
          <li>Any period of crating</li>
        </ul>
        <p>Additionally: every 30–60 minutes for puppies under 12 weeks, every 1–2 hours for puppies 3–4 months. Young puppies cannot communicate the need to eliminate until they are already eliminating — the schedule removes the need for communication. You take them out before they need to, and they eliminate outside.</p>
        <p>Go to the same spot each time — the scent cue from previous eliminations prompts faster response. Use a consistent cue word ("go potty," "outside," whatever you choose) when they begin to eliminate, and reward immediately after finishing.</p>

        <h2 id="accidents">Accident Protocol</h2>
        <p>If you catch the puppy in the act: a calm, neutral "ah-ah" or clap to interrupt, then immediately take outside. If they finish outside, reward. Never yell, never rub the puppy&apos;s nose in it, never physical punishment — none of these work and all of them damage the relationship and trust required for effective training.</p>
        <p>If you find the accident after the fact: clean it up quietly and completely with an enzymatic cleaner (Nature&apos;s Miracle, Simple Solution) that eliminates the scent residue — regular cleaners leave residue that dogs can smell even when humans cannot, which marks the spot as a bathroom. Do not react to the puppy. There is no teaching opportunity after the fact; the puppy does not connect your current reaction to something that happened minutes or hours ago.</p>

        {/* Money path — live amazon-brand search hops (house-training kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. */}
        <AffiliateDisclosure variant="inline" siteId="dog-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a house-training kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Enzymatic cleaner is the single most important supply — without it,
            scent markers invite repeat accidents. Pair it with high-value
            training treats, a wire crate with a divider for unsupervised time,
            and poop bags. Same cleaner / treat / crate hops used on the{' '}
            <Link
              href="/tools/new-puppy-checklist"
              className="text-brand-primary no-underline hover:underline"
            >
              new-puppy checklist
            </Link>
            {' '}and the{' '}
            <Link
              href="/training/puppy-schedule"
              className="text-brand-primary no-underline hover:underline"
            >
              puppy schedule
            </Link>
            . They are not a ranked product list and they do not replace the
            schedule method. Size the crate before you order. Dog.com earns a
            commission on qualifying purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/enzymatic+pet+stain+odor+cleaner?s=training-house"
              amazonLabel="Browse enzymatic pet cleaners on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/puppy+training+treats?s=training-house"
              amazonLabel="Browse puppy training treats on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/wire+dog+crate+with+divider+panel?s=training-house"
              amazonLabel="Browse crates on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+poop+bags?s=training-house"
              amazonLabel="Browse dog poop bags on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/training/crate-training" className="text-brand-primary hover:underline">
              Crate Training Guide
            </Link>
            {' · '}
            <Link href="/reviews/best-dog-crates" className="text-brand-primary hover:underline">
              Best Dog Crates 2026
            </Link>
          </p>
        </div>

        <h2 id="reinforce">Reinforcing Outside Elimination</h2>
        <p>Reward immediately after the puppy finishes eliminating outside — not when you go back inside, not later. The reward must be immediate (within 2–3 seconds) for the association to form correctly. Use high-value treats (not kibble) at this stage. Praise enthusiastically. Over time, the pattern of going outside, eliminating, and receiving a reward becomes automatic.</p>
        <p>Do not go back inside immediately after the puppy eliminates. If going outside reliably predicts going inside immediately, the puppy is motivated to stay outside as long as possible. Allow a couple minutes of sniffing and exploration after eliminating before going in.</p>

        <h2 id="mistakes">Common Mistakes That Slow House Training</h2>
        <ul>
          <li><strong>Too much unsupervised freedom too soon</strong> — puppies that have access to the whole house will make mistakes in corners and behind furniture. Expand freedom gradually as reliability increases.</li>
          <li><strong>Reacting emotionally to accidents</strong> — any reaction, positive or negative, can reinforce the behavior of eliminating in front of you (the puppy learns elimination gets attention). Neutral cleanup is the right response.</li>
          <li><strong>Using pee pads</strong> — pee pads teach puppies that it is acceptable to eliminate inside. This must then be untaught when transitioning to outdoor-only. Skip pee pads unless you have a specific situation that requires indoor elimination long-term.</li>
          <li><strong>Inconsistent schedule</strong> — the schedule only works if it&apos;s consistent. Varying the schedule significantly creates unpredictable elimination patterns.</li>
        </ul>

        <h2 id="timeline">Realistic Timeline</h2>
        <p>Under a consistent schedule, most puppies have dramatically fewer accidents by 12–16 weeks, are mostly reliable by 4–5 months, and fully reliable by 6–8 months. Small breeds take longer — their smaller bladders require more frequent opportunities and reliability typically comes later. Individual variation is significant. A puppy that makes faster progress is not smarter; a puppy that takes longer is not being stubborn. Both are normal.</p>
        <p>Regression after apparent success (after illness, a major schedule change, a new home or new addition to the family) is common and normal. Return to the original schedule temporarily — most dogs return to reliability quickly with schedule re-establishment.</p>
      </div>
    </ArticleLayout>
    </>
  )
}
