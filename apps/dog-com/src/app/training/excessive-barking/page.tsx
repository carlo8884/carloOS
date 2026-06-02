import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Excessive Barking in Dogs — Types, Causes | Dog.com', description: 'Excessive barking has six distinct types with different causes and different solutions. Identifying the type is the first step — then the correct protocol.', path: '/training/excessive-barking', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Excessive Barking in Dogs', description: 'Types of barking, causes, and evidence-based solutions for each.', url: 'https://dog.com/training/excessive-barking', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const TYPES = [
  { type: 'Alert / Territorial Barking', cause: 'Stranger, animal, or vehicle approaching the territory. The dog is performing its function.', solution: 'Management: block visual access to triggers (window film on lower panes, keep dog away from front windows). Training: "thank you" interruption — acknowledge the bark ("thank you"), then redirect to a mat or settle behavior. Do not punish the bark; you lose the early warning function and the dog\'s trust.' },
  { type: 'Boredom / Frustration Barking', cause: 'Under-stimulated dog with too much unsupervised time and energy. This is a management and enrichment problem.', solution: 'Increase physical exercise before periods alone. Provide enrichment (frozen Kongs, snuffle mats, long-lasting chews). This type is solved by changing the dog\'s daily situation, not by training the barking directly.' },
  { type: 'Attention-Seeking Barking', cause: 'The dog has learned that barking produces attention — owner looks at the dog, talks to the dog, or gets up. Even negative attention (scolding) is reinforcing.', solution: 'Extinction: completely ignore barking (any acknowledgment reinforces it). Reward silence. This gets worse before it gets better (extinction burst — the dog tries harder before giving up). Be consistent or the intermittent reinforcement of sometimes responding creates a much more persistent barker.' },
  { type: 'Separation-Related Barking', cause: 'Dog is distressed when alone — barks, howls, or whines continuously in the owner\'s absence.', solution: 'This is a form of separation anxiety — address the anxiety, not the bark. See the separation anxiety guide. Camera assessment is essential to confirm this is the cause.' },
  { type: 'Fear / Anxiety Barking', cause: 'Dog is frightened and barking as a distance-increasing behavior. Often directed at specific triggers.', solution: 'Counter-conditioning and desensitization — the same protocol as for leash reactivity. The barking is a symptom; the fear is the problem. Managing the environment to prevent exposure during training is essential.' },
  { type: 'Play / Excitement Barking', cause: 'During or in anticipation of play, walks, feeding — highly aroused dog vocalizing.', solution: 'Do not begin play or feeding until the dog is quiet. Wait for 3 seconds of silence, then proceed. This teaches that quiet produces the desired activity. Gradually extend the duration of quiet required before the activity begins.' },
]

export default function ExcessiveBarkingPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{ title: 'Excessive Barking — Types, Causes & What Works', subtitle: 'Barking is not a monolithic behavior with one solution. There are six distinct types of excessive barking, each with a different cause and a different appropriate response. Treating them the same way is why most barking interventions fail.', category: 'Behavior Problems', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Excessive Barking', href: '/training/excessive-barking' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Separation Anxiety', href: '/training/separation-anxiety' }, { label: 'Leash Reactivity', href: '/training/leash-reactivity' }, { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-barking" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Diagnose Before You Treat</h2>
        <p>The first step is identifying which type of barking you are dealing with — not guessing. Set up a camera and record your dog when the barking occurs. Watch the footage. Is the barking triggered by something external (alert barking)? Does it happen when the dog is alone (separation anxiety)? Is it during play (excitement)? Does it happen when the dog sees a specific trigger (fear)? The footage tells you what type you have.</p>
        {TYPES.map((t, i) => (
          <div key={t.type} style={{ background: i % 2 === 0 ? 'var(--brand-surface)' : 'rgba(232,98,42,0.03)', border: '1px solid var(--brand-border)', borderRadius: '10px', padding: '20px', marginBottom: '14px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--brand-dark)', marginTop: 0, marginBottom: '8px' }}>{t.type}</h2>
            <div style={{ display: 'grid', gap: '8px', fontSize: '14px' }}>
              <div><strong style={{ color: 'var(--brand-dark)' }}>Cause:</strong> <span style={{ color: 'var(--brand-text-mid)' }}>{t.cause}</span></div>
              <div><strong style={{ color: 'var(--brand-dark)' }}>Solution:</strong> <span style={{ color: 'var(--brand-text-mid)' }}>{t.solution}</span></div>
            </div>
          </div>
        ))}
        <h2>What Doesn&apos;t Work (Across All Types)</h2>
        <ul>
          <li><strong>Anti-bark collars (shock, citronella, ultrasonic):</strong> Suppress barking through aversion without addressing the underlying cause. Fear barking treated with a shock collar produces a dog that is more frightened and cannot communicate distress. Alert barking suppressed by pain produces a dog that eventually bites without warning. The bark was the warning.</li>
          <li><strong>Inconsistent response:</strong> Sometimes ignoring attention-seeking bark, sometimes responding — creates the most persistent barking of any training outcome (intermittent reinforcement).</li>
          <li><strong>Punishment after the fact:</strong> Scolding a dog for barking that happened while you were away teaches the dog nothing useful and damages trust.</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
