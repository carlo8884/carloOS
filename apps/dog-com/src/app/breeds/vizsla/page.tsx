import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Vizsla Breed Guide — Velcro Dog, Epilepsy | Dog.com', description: 'Vizslas are the "velcro dog" — they attach themselves to their people and cannot be left alone for long. High exercise needs, epilepsy predisposition.', path: '/breeds/vizsla', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Vizsla Breed Guide', description: 'Separation anxiety, epilepsy, exercise requirements, and care for Vizslas.', url: 'https://dog.com/breeds/vizsla', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function VizslaPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Vizsla Breed Guide', subtitle: 'The Hungarian pointing dog — lean, golden-rust, and deeply attached to their people. Vizslas are called the "velcro dog" by their owners because they are physically attached to their person from the moment they wake up to the moment they sleep. This is not metaphorical — they follow from room to room, sleep pressed against their person, and are genuinely distressed by extended separation.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Vizsla', href: '/breeds/vizsla' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '44–60 lbs'], ['Lifespan', '12–15 years'], ['Exercise', 'High — 1.5-2 hrs vigorous daily'], ['Alone time', 'Difficult — prone to separation anxiety'], ['Trainability', 'High — sensitive to corrections'], ['Epilepsy', 'Elevated prevalence in breed'], ['Coat', 'Short, minimal grooming']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Anxiety', href: '/health/dog-anxiety' }, { label: 'Separation Anxiety', href: '/training/separation-anxiety' }, { label: 'Dog Seizures', href: '/health/dog-seizures' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'German Shorthaired Pointer vs Vizsla', href: '/compare/german-shorthaired-pointer-vs-vizsla' },
          { label: 'Vizsla vs Weimaraner', href: '/compare/vizsla-vs-weimaraner' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-vizsla" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Velcro Dog — What It Actually Means</h2>
        <p>Vizsla owners use "velcro dog" affectionately, but prospective owners should understand what it means practically. Vizslas were bred for close human partnership in the field — hunting together with a human partner over long days. Their social attachment reflects generations of selection for close working partnership. A Vizsla left alone for 8 hours while their owner works is not a dog that settles quietly — it is a dog experiencing genuine distress that may manifest as destructive behavior, excessive vocalization, and anxiety-related health problems over time.</p>
        <p>This is not a dealbreaker for working owners — it requires planning. A dog walker at midday, doggy daycare, a second dog for companionship, work-from-home arrangements, or a compatible lifestyle where the dog can accompany their person manages the Vizsla's social needs adequately. What doesn't work: leaving a Vizsla alone for full workdays without enrichment or social contact. The breed's need for human proximity is a fundamental characteristic that cannot be trained away.</p>

        <BreedHealthCard name="Epilepsy" riskLevel="high"
          description="Vizslas have an elevated prevalence of idiopathic epilepsy (seizures without an identifiable structural cause) compared to most breeds. Onset is typically between 1–5 years. Many affected Vizslas are well-controlled on anti-epileptic medication (phenobarbital, potassium bromide, zonisamide, levetiracetam) and live full, normal lives. The diagnosis is managed, not cured."
          signs={['Tonic-clonic seizures — involuntary muscle contractions', 'Focal seizures — repetitive movements, facial twitching', 'Post-ictal period — confusion, disorientation after seizure', 'Cluster seizures — multiple in a short period (emergency)']}
          management="Veterinary evaluation after any seizure. Anti-epileptic medication when indicated (typically when seizures are more than once monthly, cluster seizures, or generalized tonic-clonic). Regular bloodwork monitoring medication levels and organ function. Emergency plan for cluster seizures (diazepam rectal or intranasal)." />

        <h2>Exercise — The Working Dog Requirement</h2>
        <p>Vizslas are working gun dogs bred for hours of activity in the field. They need 1.5–2 hours of vigorous exercise daily — running, fetch, hiking, or structured dog sports. They excel at agility, canicross, dock diving, and field work. A well-exercised Vizsla is calm and affectionate indoors; an under-exercised Vizsla is hyperactive, destructive, and anxious. Off-leash exercise is the most efficient — a Vizsla running freely for 30 minutes is better exercised than the same dog walking on leash for 90 minutes. Reliable recall and a securely fenced area are prerequisites for off-leash Vizsla exercise.</p>

        <h2>Training Sensitivity</h2>
        <p>Vizslas are highly trainable — eager to please, quick to learn, and strongly motivated by positive reinforcement. They are also sensitive to harsh corrections in a way that setback-prone breeds like terriers are not. A Vizsla that is corrected harshly or repeatedly will shut down emotionally and lose the confidence that makes them excellent working and competition dogs. Positive reinforcement methods — clicker training, reward-based obedience — produce the best outcomes. The breed responds particularly well to training that mirrors partnership rather than authority: teaching the dog what you want rather than correcting what you don't.</p>
      </div>
    </ArticleLayout>
  )
}
