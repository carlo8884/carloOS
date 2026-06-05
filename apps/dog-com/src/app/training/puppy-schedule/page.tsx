import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Puppy Schedule — Sleep, Feeding & Training Week by Week | Dog.com', description: 'Complete puppy schedule from 8 weeks. Sleep requirements, feeding times, potty schedule, training windows, and socialization checklist — week by week.', path: '/training/puppy-schedule', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Puppy Schedule — Week by Week', description: 'Complete puppy schedule: sleep, feeding, training, and socialization.', url: 'https://dog.com/training/puppy-schedule', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const SAMPLE_SCHEDULE = [
  { time: '6:30am', activity: 'Wake up → Immediately outside for potty' },
  { time: '7:00am', activity: 'Breakfast (measure, do not free-feed)' },
  { time: '7:15am', activity: 'Outside immediately after eating' },
  { time: '7:30am', activity: 'Play and explore time' },
  { time: '8:30am', activity: 'Crate for nap (1–2 hours)' },
  { time: '10:00am', activity: 'Outside for potty → Short 5 min training session (sit, name recall)' },
  { time: '10:30am', activity: 'Supervised play or socialization' },
  { time: '12:00pm', activity: 'Lunch → Outside immediately after' },
  { time: '12:30pm', activity: 'Crate for nap' },
  { time: '2:00pm', activity: 'Outside → Play and enrichment' },
  { time: '3:30pm', activity: 'Crate for nap' },
  { time: '5:00pm', activity: 'Outside → Training session' },
  { time: '5:30pm', activity: 'Dinner → Outside immediately after' },
  { time: '7:00pm', activity: 'Calm evening time — gentle play, handling practice' },
  { time: '9:00pm', activity: 'Last outside → Crate for night' },
  { time: '1:00am', activity: 'Puppy 8-10 weeks: night potty break. 12+ weeks: may sleep through' },
]

const howToSchema = buildHowToSchema({
  name: 'How to Create a Puppy Schedule',
  description: 'The daily routine for puppies 8-16 weeks — feeding, potty, sleep, and training windows.',
  url: 'https://dog.com/training/puppy-schedule',
  totalTime: 'P7D',
  steps: [
    { name: 'Set a fixed wake time', text: 'Wake at the same time daily. Immediately take the puppy outside to the potty spot before anything else. Praise and reward outdoor elimination. Consistency creates reliable morning potty habits.' },
    { name: 'Schedule three meals', text: 'Feed at consistent times — 7am, 12pm, 5pm as an example. Take outside within 15-20 minutes of every meal. Scheduled meals create predictable elimination windows; free-feeding makes house training harder.' },
    { name: 'Plan nap times', text: 'Puppies 8-12 weeks need 16-18 hours of sleep daily in 1-2 hour naps. Use the crate for all naps. A rested puppy is manageable; an overtired puppy bites and cannot learn. Take outside immediately when they wake from naps.' },
    { name: 'Schedule short training sessions', text: '3-5 minute training sessions, 3-5 times daily, aligned with meals (train before feeding, use kibble as rewards). Sessions after naps when the puppy is alert. Never train an overtired puppy.' },
    { name: 'Set a bedtime routine', text: 'Final potty trip at the latest possible hour. Crate in or near the bedroom for the first weeks. Young puppies 8-10 weeks typically need one middle-of-night potty trip — set an alarm rather than waiting to be woken by crying.' },
  ],
})
const combinedTrainingSchema = combineSchemas(schema, howToSchema)

export default function PuppySchedulePage() {
  return (
    <>
      <SchemaScript schema={combinedTrainingSchema} />
      <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{ title: 'Puppy Schedule — Week by Week Guide', subtitle: 'A structured schedule is the single most effective puppy training tool. It sets the puppy up for success by making accidents nearly impossible and building reliable habits from day one.', category: 'Puppy Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Puppy Schedule', href: '/training/puppy-schedule' }]}
      relatedLinks={[{ title: 'Dog Training Hub', href: '/training', category: 'Hub' }, { title: 'Crate Training', href: '/training/crate-training', category: 'Training' }, { title: 'House Training', href: '/training/house-training', category: 'Training' }, { title: 'Puppy Nutrition', href: '/nutrition/puppy-nutrition', category: 'Nutrition' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'Why Schedule Matters', href: '#why' }, { label: 'Sleep Requirements', href: '#sleep' }, { label: 'Sample Daily Schedule', href: '#schedule' }, { label: 'The Socialization Window', href: '#socialization' }, { label: 'Week-by-Week Milestones', href: '#milestones' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Free printable schedule + 8-week course', href: '/puppy-schedule' }, { label: 'Crate Training Guide', href: '/training/crate-training' }, { label: 'House Training Guide', href: '/training/house-training' }, { label: 'Puppy Nutrition', href: '/nutrition/puppy-nutrition' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-puppy-schedule" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2 id="why">Why a Schedule Is Your Best Training Tool</h2>
        <p>A consistent schedule accomplishes what training alone cannot: it makes accidents nearly impossible by creating predictable patterns of eating, eliminating, playing, and sleeping. A puppy on a schedule eliminates at predictable times — you can be there to reward outdoor elimination before indoor accidents become a habit. A puppy without a schedule eliminates unpredictably — owners miss opportunities to reinforce correct behavior and the habit of going outside develops more slowly.</p>
        <p>The schedule is also about managing energy. Puppies need substantial sleep — 16–18 hours per day for young puppies. A puppy that is not getting enough sleep becomes overtired, which manifests as biting, zoomies, and inability to focus. Scheduled naps prevent the overtired state that makes puppies appear to have behavior problems they wouldn&apos;t have if well-rested.</p>

        <h2 id="sleep">Sleep Requirements by Age</h2>
        <ul>
          <li><strong>8–12 weeks:</strong> 18–20 hours daily. Puppies this age are awake in 30–90 minute windows, then need sleep again.</li>
          <li><strong>3–6 months:</strong> 16–18 hours daily. Awake windows extend to 1.5–3 hours.</li>
          <li><strong>6–12 months:</strong> 14–16 hours daily. Nap schedule begins to shift toward adult patterns.</li>
          <li><strong>Adult dogs:</strong> 12–14 hours daily.</li>
        </ul>
        <p>If your puppy is biting hard, having zoomies, crying, or appears unable to settle — check the clock. If they have been awake for more than 90 minutes, the overtired state is likely the cause. Put them in their crate for a nap before attempting to address the behavior.</p>

        <h2 id="schedule">Sample Daily Schedule (8–12 weeks)</h2>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--brand-border)', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead><tr style={{ background: 'var(--brand-dark)' }}><th style={{ padding: '11px 15px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Time</th><th style={{ padding: '11px 15px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Activity</th></tr></thead>
            <tbody>{SAMPLE_SCHEDULE.map((row, i) => (
              <tr key={row.time} style={{ background: i % 2 === 0 ? 'white' : 'var(--brand-surface)' }}>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', fontWeight: 700, color: 'var(--brand-primary)', whiteSpace: 'nowrap' }}>{row.time}</td>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)' }}>{row.activity}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', fontStyle: 'italic' }}>Adjust timing to your actual schedule. The pattern matters more than exact times.</p>

        <h2 id="socialization">The Critical Socialization Window — 8 to 16 Weeks</h2>
        <p>Between 8 and 16 weeks, puppies have a developmental window during which novel experiences are processed with minimal fear response. Positive exposure to people, dogs, environments, sounds, and handling during this window creates an adult dog with broad confidence. The window closes around 16 weeks — it does not disappear, but the brain&apos;s plasticity for accepting novel stimuli as normal decreases significantly.</p>
        <p><strong>Socialization checklist — expose positively to:</strong></p>
        <ul>
          <li>People of different ages, sizes, appearances (hats, beards, glasses, umbrellas), and genders</li>
          <li>Children interacting appropriately (supervised)</li>
          <li>Other vaccinated, friendly adult dogs</li>
          <li>Various surfaces: grass, gravel, grates, hardwood, carpet, stairs</li>
          <li>Urban sounds: traffic, construction, bikes, skateboarding</li>
          <li>Handling: ears, paws, mouth, nail touching (pair with treats)</li>
          <li>Veterinary procedures: standing on a scale, being lifted, having equipment approached</li>
          <li>Car rides</li>
          <li>Being left alone for increasing periods</li>
        </ul>
        <p><strong>Before full vaccination:</strong> Avoid dog parks, pet stores, and areas with unknown dog traffic. Carry puppies in high-risk areas. Puppy classes with vaccinated puppies are safe and excellent for socialization — the socialization benefit outweighs the (low) disease risk at a well-run puppy class.</p>

        <h2 id="milestones">Week-by-Week Training Milestones</h2>
        <ul>
          <li><strong>Weeks 8–10:</strong> Name response, sit, crate introduction, potty schedule establishment, handling practice</li>
          <li><strong>Weeks 10–12:</strong> Down, stay (2–3 seconds), loose-leash introduction, ongoing socialization priority</li>
          <li><strong>Weeks 12–16:</strong> Come recall, leave it, longer stays, beginning to generalize behaviors to new locations</li>
          <li><strong>Months 4–6:</strong> All basic commands reliable in low-distraction environments. Begin proofing in higher-distraction locations.</li>
          <li><strong>Months 6–12:</strong> Adolescence — previously reliable behaviors may become inconsistent. Maintain training, increase engagement, do not stop working. This phase passes.</li>
        </ul>
      </div>
    </ArticleLayout>
    </>
  )
}
