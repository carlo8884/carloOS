import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, ArticleByline, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Crate Training Guide — How to Make the Crate a Good Place | Dog.com', description: 'Step-by-step crate training guide. Introduction protocol, how long is too long, night training, and how to use the crate without it feeling like punishment.', path: '/training/crate-training', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Crate Training Guide', description: 'Introduction protocol, duration limits, and night training for crates.', url: 'https://dog.com/training/crate-training', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const howToSchema = buildHowToSchema({
  name: 'How to Crate Train a Dog',
  description: 'Step-by-step crate training protocol using positive reinforcement — from introduction to overnight success.',
  url: 'https://dog.com/training/crate-training',
  totalTime: 'P2W',
  steps: [
    { name: 'Choose the right crate size', text: 'Select a crate large enough for the dog to stand, turn around, and lie stretched — no larger. Use a divider panel for puppies.' },
    { name: 'Day 1-2: Open door exploration', text: 'Place crate in family area with door open. Toss treats near and inside. Let the dog investigate at their own pace. Do not push them in.' },
    { name: 'Day 3-4: Feed meals inside', text: 'Begin feeding meals inside the crate with the door open. Continue tossing treats in. Praise calm behavior near the crate.' },
    { name: 'Day 5-7: Close door during meals', text: 'Feed meals inside with the door closed while eating. Open immediately when done. Dog should be comfortable eating with door closed.' },
    { name: 'Week 2: Short durations', text: 'Begin closing the door for 5-10 minutes after meals when the dog is calm and full. Stay nearby. Gradually extend duration.' },
    { name: 'Week 3+: Build to longer durations', text: 'Begin leaving the room while the dog is in the crate. Build to leaving the house for short periods. Never exceed age-appropriate duration limits.' },
  ],
})
const combinedSchema = combineSchemas(schema, howToSchema)

export default function CrateTrainingPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{ title: 'Crate Training Guide', subtitle: 'A crate is a management tool and a den — not a punishment. Dogs that learn the crate is a safe, predictable space are calmer, housetrained faster, and have a reliable retreat throughout their lives.', category: 'Puppy Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Crate Training', href: '/training/crate-training' }]}
      relatedLinks={[{ title: 'Dog Training Hub', href: '/training', category: 'Hub' }, { title: 'House Training', href: '/training/house-training', category: 'Training' }, { title: 'Puppy Schedule', href: '/training/puppy-schedule', category: 'Training' }, { title: 'Best Dog Crates', href: '/reviews/best-dog-crates', category: 'Reviews' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'Why Crate Train', href: '#why' }, { label: 'Right Crate Size', href: '#size' }, { label: 'Introduction Protocol', href: '#intro' }, { label: 'Duration Guidelines', href: '#duration' }, { label: 'Night Training', href: '#night' }, { label: 'Common Problems', href: '#problems' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'House Training Guide', href: '/training/house-training' }, { label: 'Best Dog Crates 2026', href: '/reviews/best-dog-crates' }, { label: 'Puppy Schedule', href: '/training/puppy-schedule' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-crate" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2 id="why">Why Crate Training Is Worth It</h2>
        <p>A crate serves multiple functions: it prevents destructive behavior and accidents when unsupervised, provides a den-like retreat that most dogs come to value, makes traveling and vet visits less stressful (a dog comfortable in a crate is dramatically calmer in any confined space), and is an essential housetraining tool (dogs typically avoid soiling their sleeping area).</p>
        <p>The crate should never be used as punishment. Sending a dog to their crate in anger changes the association from safe space to negative consequence. Instead, the crate should always be associated with good things — meals fed in the crate, high-value treats, rest after exercise.</p>

        <h2 id="size">Correct Crate Size</h2>
        <p>The crate should be large enough for the dog to stand, turn around, and lie fully stretched — no larger. A crate that is too large allows a puppy to eliminate in one end and sleep in the other, eliminating the housetraining benefit. Use a divider panel (included with most wire crates) to section off a puppy-appropriate portion of an adult-sized crate and expand as the puppy grows. See our <a href="/reviews/best-dog-crates">crate recommendations →</a></p>

        <AffiliateDisclosure variant="inline" siteId="dog-com" />

        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">Buyer&apos;s Guide</div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Not sure which crate to buy? A wire crate with a divider panel is the right starting point for most puppies. For escape artists, step up to a heavy-duty aluminum option.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/go/amazon-brand/midwest+icrate+dog+crate+with+divider?s=training-crate" rel="sponsored nofollow noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-primary-dark transition-colors no-underline">
              Shop Wire Crates on Amazon →
            </a>
            <a href="/go/chewy-brand/dog+crate+with+divider?s=training-crate" rel="sponsored nofollow noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 px-4 py-2.5 border border-brand-primary text-brand-primary text-sm font-semibold rounded-lg hover:bg-brand-primary-pale transition-colors no-underline">
              Shop on Chewy →
            </a>
          </div>
          <p className="text-2xs text-brand-text-light mt-3">See our full <a href="/reviews/best-dog-crates" className="text-brand-primary hover:underline no-underline">Best Dog Crates 2026</a> guide for side-by-side comparisons.</p>
        </div>

        <h2 id="intro">Introduction Protocol</h2>
        <p>Rushing crate introduction creates anxiety. A slow, positive introduction builds a dog that chooses to go in the crate voluntarily.</p>
        <ol>
          <li><strong>Day 1–2:</strong> Place the crate in a family area with the door open. Toss treats near and inside. Let the dog investigate at their own pace. Do not push them in.</li>
          <li><strong>Day 3–4:</strong> Begin feeding meals inside the crate (bowl as far in as comfortable). Continue tossing treats in. Praise calm behavior near the crate.</li>
          <li><strong>Day 5–7:</strong> Feed meals inside with the door closed while eating. Open immediately when done. The dog should be comfortable eating with door closed before any duration training begins.</li>
          <li><strong>Week 2:</strong> Begin closing the door for 5–10 minutes after meals when the dog is calm and full. Stay nearby. Gradually extend duration in very small increments over days.</li>
          <li><strong>Week 3+:</strong> Begin leaving the room while the dog is in the crate. Build to leaving the house for short periods. Never leave a puppy crated longer than they can physically hold their bladder.</li>
        </ol>

        <h2 id="duration">Duration Guidelines — How Long Is Too Long</h2>
        <ul>
          <li><strong>8–10 weeks:</strong> Maximum 1–2 hours during the day (plus overnight with a middle-of-night break)</li>
          <li><strong>10–12 weeks:</strong> Maximum 2–3 hours</li>
          <li><strong>3 months:</strong> Maximum 3 hours</li>
          <li><strong>4 months:</strong> Maximum 4 hours</li>
          <li><strong>5+ months:</strong> Up to 5 hours maximum — no dog should be crated longer than 8 hours regularly</li>
        </ul>
        <p>The general rule: a puppy can hold their bladder approximately one hour per month of age, plus one hour (a 3-month puppy can hold for approximately 4 hours). Exceeding this creates accidents, which are not the puppy&apos;s fault and should not be corrected.</p>

        <h2 id="night">Night Crate Training</h2>
        <p>Place the crate in or adjacent to the bedroom for the first few weeks — the sound and smell of your breathing helps puppies settle. Puppies that are isolated in a room far from owners are much more likely to whine persistently.</p>
        <p>Young puppies (under 12 weeks) need a middle-of-night potty break — typically around 1–2am. Set an alarm rather than waiting for whining. If you wait for the puppy to cry, you are training them that crying produces a result. If you take them out before they cry, they learn that sleeping quietly results in regular potty opportunities.</p>
        <p>When the puppy whines in the crate at night, wait 2–3 minutes. If they settle, do not go in — you have just reinforced settling. If they do not settle after 2–3 minutes, it is probably a potty need — take them out calmly and quietly, without play or interaction, then return to crate immediately after.</p>

        <h2 id="problems">Common Problems and Solutions</h2>
        <p><strong>Puppy cries immediately when crated:</strong> Introduction was too fast. Go back to basics — open door, meals in crate, short durations with you present and visible before extending.</p>
        <p><strong>Puppy is fine in crate when you&apos;re home but panics when you leave:</strong> This is early separation anxiety — a distinct issue from normal crate distress. See our <a href="/training/separation-anxiety">separation anxiety guide →</a></p>
        <p><strong>Puppy soils in the crate:</strong> Crate is too large (use divider), duration is too long for age, or puppy has a medical issue causing inability to hold bladder. Check all three.</p>
        <p><strong>Adult dog that was never crate trained:</strong> The introduction protocol works for adult dogs — go slowly, pair with high-value food, never force. Some adult dogs with previous negative associations need months rather than weeks.</p>
      </div>
    </ArticleLayout>
    </>
  )
}
