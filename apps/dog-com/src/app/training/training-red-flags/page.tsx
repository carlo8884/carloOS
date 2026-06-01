import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Training Red Flags — Dominance Theory | Dog.com', description: 'What the behavioral science says about dominance theory, shock collars, prong collars, and alpha rolling — and what the alternatives actually accomplish.', path: '/training/training-red-flags', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Training Red Flags', description: 'Dominance theory, shock collars, and prong collars — what the science says.', url: 'https://dog.com/training/training-red-flags', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const RED_FLAGS = [
  { flag: 'Dominance Theory / "Pack Leader" Training', detail: 'Dominance theory applied to dog training derives from 1970s wolf pack research on captive, unrelated wolves — which has since been thoroughly discredited even by its original author (David Mech publicly rejected it). Wild wolf packs are family units, not dominance hierarchies. Dogs are not attempting to "dominate" their owners. The behaviors labeled as "dominance" (pulling on leash, jumping up, counter-surfing) are trained behaviors maintained by reinforcement — they are solved by removing the reinforcement and teaching incompatible behaviors, not by establishing "pack hierarchy."' },
  { flag: 'Shock Collars (E-Collars) as Primary Training Tool', detail: 'E-collar use is associated with significantly higher rates of aggression, fear, and stress behaviors in peer-reviewed research compared to reward-based training — including a 2021 study in Frontiers in Veterinary Science. The AVSAB, ASPCA, and British Veterinary Association have all published statements recommending against aversive training methods. The argument that "professional trainers use them therefore they are fine" ignores that the research measures outcomes regardless of who is using them.' },
  { flag: 'Prong Collars', detail: 'Prong collars (pinch collars) cause pain and pressure on the neck to suppress behavior. The suppression is real but the mechanism is aversive. Research consistently shows higher stress and anxiety in dogs trained with aversive tools. Dogs trained with prong collars for leash pulling often develop higher reactivity — they associate the pain of the collar with whatever they were looking at when it fired, which is frequently other dogs. Front-clip harnesses (PetSafe Easy Walk, Ruffwear Front Range) reduce pulling without this mechanism.' },
  { flag: 'Alpha Rolling / Physical Dominance', detail: 'Rolling a dog onto their back and pinning them (alpha roll) is consistently associated with defensive aggression in the research literature — multiple documented cases of severe bites resulting from trainers applying this technique. It does not teach anything useful, it frightens the dog, and it damages trust. Ian Dunbar, Patricia McConnell, and every major veterinary behaviorist organization have documented this.' },
  { flag: '"No Reward" Markers / Punishment for Slow Responses', detail: 'Some trainers use a "no reward" marker (NRM) — a word like "wrong" or "ah-ah" — to inform the dog that the reward is not coming. Research shows NRMs reduce the dog\'s willingness to offer behaviors (trial-and-error learning) and increase stress. The same information ("that was not correct") is more effectively communicated by simply not delivering the reward and setting up the behavior opportunity again.' },
  { flag: 'Flooding', detail: 'Flooding is the forced prolonged exposure to a fear stimulus without the ability to escape — the theory being that the animal will "get over it." In practice, flooding reliably produces learned helplessness (a severe stress response in which the animal stops all behavioral responses) and more entrenched fear. It is the opposite of systematic desensitization, which works by keeping exposure below the fear threshold and building positive associations gradually.' },
]

export default function TrainingRedFlagsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{ title: 'Dog Training Red Flags', subtitle: 'Dog training is unregulated — anyone can call themselves a trainer and use any method they choose. These are the approaches that behavioral science has consistently found harmful, and what the alternatives accomplish.', category: 'Finding a Trainer', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Red Flags', href: '/training/training-red-flags' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Trainer Credentials', href: '/training/trainer-credentials' }, { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' }, { label: 'Leash Reactivity', href: '/training/leash-reactivity' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-red-flags" />
      </>}
    >
      <div className="carloOS-article">
        <p>The AVSAB (American Veterinary Society of Animal Behavior) position statement on punishment summarizes the scientific consensus: &quot;The AVSAB recommends that veterinarians not refer clients to trainers or behavior consultants who routinely use punishment (including choke chains, prong collars, shock collars, alpha rolls, dominance downs, and other aversive methods).&quot; This is not a fringe position — it is the consensus of the professional veterinary behavior community.</p>
        {RED_FLAGS.map((r, i) => (
          <div key={r.flag} style={{ background: i % 2 === 0 ? 'rgba(200,74,42,0.04)' : 'var(--brand-surface)', border: '1px solid rgba(200,74,42,0.12)', borderRadius: '10px', padding: '20px', marginBottom: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-dark)', marginTop: 0, marginBottom: '10px' }}>⚠️ {r.flag}</h2>
            <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', lineHeight: 1.75, margin: 0 }}>{r.detail}</p>
          </div>
        ))}
        <h2>What to Look For Instead</h2>
        <p>Trainers with CPDT-KA, CPDT-KSA, CBCC-KA, or CAAB credentials who explicitly use force-free methods. Ask directly: &quot;What tools do you use? What do you do when a dog doesn&apos;t respond?&quot; A trainer using positive reinforcement has direct and complete answers to these questions. See our full <a href="/training/trainer-credentials">trainer credentials guide →</a></p>
      </div>
    </ArticleLayout>
  )
}
