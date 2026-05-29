import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'The Puppy Socialization Window — 3 to 14 Weeks Explained | Dog.com', description: 'The socialization window closes at 14 weeks. What happens before then shapes the dog\'s emotional responses for life.', path: '/training/socialization-window', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'The Puppy Socialization Window', description: 'The 3-14 week socialization critical period — what to expose puppies to and how.', url: 'https://dog.com/training/socialization-window', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function SocializationWindowPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'The Puppy Socialization Window', subtitle: 'Between approximately 3 and 14 weeks, puppies have a unique neurological openness to new experiences. What they encounter during this window — handled positively — becomes normal. What they miss has a higher probability of becoming a fear. This window closes and does not reopen.', category: 'Dog Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Socialization Window', href: '/training/socialization-window' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Socialization Checklist</div>
          {['100+ people of varied ages/appearances', 'Children (multiple ages)', 'Men with beards, hats, uniforms', 'Other dogs (vaccinated, calm)', 'Cats and other animals', 'Urban environments — traffic, crowds', 'Veterinary office visits', 'Car rides', 'Grooming handling', 'Stairs, surfaces, slippery floors', 'Umbrellas, skateboards, bicycles', 'Loud sounds at low volume', 'Being alone briefly'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2 items-start">
              <span className="text-brand-primary mt-0.5 flex-shrink-0">□</span>{s}
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Free printable schedule + 8-week course', href: '/puppy-schedule' }, { label: 'Puppy Schedule', href: '/training/puppy-schedule' }, { label: 'Puppy Biting', href: '/training/puppy-biting' }, { label: 'Crate Training', href: '/training/crate-training' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Puppy Training Guide" subtitle="Week-by-week guide for new puppy owners." source="training-socialization" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why This Window Exists</h2>
        <p>During the socialization period (approximately 3–14 weeks, with peak sensitivity around 6–8 weeks), the puppy's amygdala — the brain structure responsible for fear responses — has a lower activation threshold for forming fear memories, but also a higher capacity for forming positive associations. Novel stimuli are processed with curiosity rather than fear, and positive experiences during this period create lasting neural pathways that support confident adult behavior. After approximately 14 weeks, the neophilia (attraction to novelty) decreases and neophobia (fear of novelty) increases. New experiences become harder to process positively.</p>
        <p>This is why the same stimulus — a garbage truck, a man in a hat, a stainless steel table at the vet — creates entirely different responses in a dog exposed positively at 8 weeks versus a dog first encountering it at 6 months. The 8-week puppy forms "this is normal." The 6-month dog forms "this is scary."</p>

        <h2>The Vaccination Dilemma</h2>
        <p>Puppies complete their vaccination series at 14–16 weeks — exactly when the socialization window is closing. Waiting until full vaccination to begin socialization means missing the window almost entirely. The solution is not to wait — it is to socialize intelligently. The American Veterinary Society of Animal Behavior (AVSAB) specifically states that behavioral risks of under-socialization exceed disease risks during this period when reasonable precautions are taken.</p>
        <p>Safe socialization before complete vaccination: puppy classes that require at least one prior vaccination and verify attendee health, socialization with vaccinated adult dogs in known households, carrying the puppy in high-traffic areas (allows exposure without ground contact), visiting veterinary offices for "happy visits" (no treatment, just treats and handling), and exposing to environments that are unlikely to have unvaccinated dog contact.</p>

        <h2>How to Socialize Correctly</h2>
        <p>Socialization is not just exposure — it is exposure paired with positive emotional responses. A puppy dragged into a frightening situation and overwhelmed is not being socialized; it is being sensitized to fear that situation. The goal is for the puppy to have positive emotional experiences with a wide range of stimuli.</p>
        <p><strong>Watch the puppy's body language:</strong> Loose body, forward curiosity, engaged sniffing = good. Tucked tail, ears back, cowering, freezing, shaking = too much. Retreat slightly and work at a distance where the puppy is curious rather than afraid.</p>
        <p><strong>Pair everything with food:</strong> High-value treats during every new exposure create positive associations through classical conditioning. The puppy learns: this novel thing = good things happen.</p>
        <p><strong>Quality over quantity:</strong> Five positive exposures are worth more than fifty overwhelming ones. Never push past the puppy's comfort threshold.</p>

        <h2>What Happens When Socialization Is Missed</h2>
        <p>Behavioural issues, including under-socialisation, are repeatedly cited among the leading reasons adult dogs are surrendered to shelters (<a href="https://aspca.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">ASPCA</a>, <a href="https://humanesociety.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">HSUS</a> shelter intake studies). Fear aggression, reactivity, noise phobia, separation anxiety, and inability to cope with novel environments are all associated with inadequate socialization during the critical period. These are not personality traits — they are behavioral outcomes of a biological window that closed without adequate experience. They can be improved with behavior modification, but they are significantly harder to address in adulthood than they would have been to prevent.</p>
        <p>If you have an adult dog with these issues: a veterinary behaviorist (DACVB) or certified applied animal behaviorist (CAAB) is the appropriate resource. Behavioral modification works — it is just slower and more effortful than prevention would have been.</p>
      </div>
    </ArticleLayout>
  )
}
