import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferrets With Kids — Are Ferrets Good Family Pets? | Ferret.com',
  description:
    'Are ferrets good with children? Supervision, age-appropriate handling, nip training, hygiene, and an honest look at which households suit a ferret and which do not.',
  path: '/ownership/ferrets-with-kids',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferrets With Kids',
  description:
    'A reference on keeping ferrets in households with children, covering supervision, handling, nip training, and hygiene.',
  url: 'https://ferret.com/ownership/ferrets-with-kids',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferrets With Kids',
  description:
    'Reference on keeping domestic ferrets in households with children.',
  url: 'https://ferret.com/ownership/ferrets-with-kids',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function FerretsWithKidsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferrets With Kids',
          subtitle:
            'Ferrets can be wonderful family animals — playful, curious, and endlessly entertaining — but they are not a "starter pet" you hand to a small child and walk away from. They are quick, they nip when frightened or untrained, and they require an adult ultimately in charge. This page is an honest look at which households suit a ferret and how to set children and ferret up to do well together.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Ferrets With Kids', href: '/ownership/ferrets-with-kids' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Are Ferrets Good Family Pets?', href: '#family' },
                { label: 'Age-Appropriate Handling', href: '#age' },
                { label: 'Nipping & Bite Training', href: '#nipping' },
                { label: 'Supervision Rules', href: '#supervision' },
                { label: 'Hygiene', href: '#hygiene' },
                { label: 'Adult Responsibility', href: '#responsibility' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Ferrets & Other Pets', href: '/ownership/ferrets-and-other-pets' },
                { label: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-ferrets-with-kids"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="family">Are Ferrets Good Family Pets?</h2>
          <p>
            For the right family, yes. Ferrets are intelligent, social, and genuinely playful, and many children find them captivating. But they suit a particular kind of household: one with an engaged adult who takes ultimate responsibility, older or well-supervised children, and a willingness to invest in training and an exotic-mammal veterinarian over a 6–10 year life. A ferret is a poor match for a home expecting a low-effort, child-managed pet — they need daily out-of-cage time, careful handling, and a level of supervision that a hamster or fish does not.
          </p>

          <h2 id="age">Age-Appropriate Handling</h2>
          <p>
            The younger the child, the more caution is required. Toddlers and very young children lack the motor control and impulse restraint to handle a ferret safely — they may grab, squeeze, or drop, and a frightened ferret may nip in response, creating a bad experience for both. Older children, roughly school-age and up, can often learn gentle, confident handling with instruction and supervision. Teach support of the whole body, calm movements, and reading when a ferret wants to be put down. Handling should always be a learned, supervised skill, not an assumption.
          </p>

          <h2 id="nipping">Nipping & Bite Training</h2>
          <p>
            Ferrets explore with their mouths and, especially as unsocialized kits, may nip. With consistent, gentle bite-inhibition training most ferrets learn to be soft-mouthed, but the process takes patience and an adult's steady hand — it is not something to delegate entirely to a child. Because a ferret may nip when startled or handled roughly, the combination of an untrained ferret and an unsupervised young child is exactly the scenario to avoid. The behavior side of this is covered in <a href="/behavior/training-and-bonding">training and bonding</a>.
          </p>

          <h2 id="supervision">Supervision Rules</h2>
          <p>
            The non-negotiable rule is supervision proportional to the child's age and the ferret's training. Young children and ferrets should never be left together unsupervised. Even with older children, an adult should be present and attentive during interaction, ready to step in if either party becomes overwhelmed. Establish clear household rules: where and how the ferret is handled, that the ferret's cage and resting areas are respected, and that a ferret that retreats is left alone. A predictable, calm environment is good for the ferret and safer for the child.
          </p>

          <h2 id="hygiene">Hygiene</h2>
          <p>
            Standard pet-hygiene practices apply: hand-washing after handling the ferret, its cage, or its litter, and keeping the ferret away from food-preparation surfaces. This matters more in homes with very young children, and especially so for households that feed raw, where pathogen exposure is a real consideration (see the <a href="/diet/raw-feeding-guide">raw feeding guide</a>). Teaching children to wash up after playing with the ferret is a simple, effective habit.
          </p>

          <h2 id="responsibility">Adult Responsibility</h2>
          <p>
            The honest bottom line: a ferret is an adult's responsibility, even in a family that gets one "for the kids." An adult must own the feeding, the cleaning, the training, the veterinary care, and the supervision — children can and should participate, but the ultimate accountability cannot rest on a child. Families that go in understanding this tend to do wonderfully with ferrets; families expecting a self-managing children's pet tend to struggle. Decide with that reality in view (see <a href="/ownership/cost-of-owning-a-ferret">cost of owning a ferret</a> for the financial side of the commitment).
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Ferret temperament, nipping behavior, bite-inhibition training, and zoonotic-hygiene considerations are covered in Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and in American Ferret Association owner guidance. Child-and-pet supervision guidance reflects standard companion-animal and public-health references. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not individualized advice. Supervise all interactions between children and ferrets, and consult a veterinarian or qualified behavior professional with specific concerns.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
