import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Shiba Inu Breed Guide — Dramatic Personality | Dog.com', description: 'Shiba Inus are independent, fastidious, and intensely prey-driven. They are not Labradors in a different body. The Shiba scream, escape artistry.', path: '/breeds/shiba-inu', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Shiba Inu Breed Guide', description: 'Temperament, prey drive, escape behavior, and care for Shiba Inus.', url: 'https://dog.com/breeds/shiba-inu', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function ShibaInuPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Shiba Inu Breed Guide', subtitle: 'The Shiba Inu is a Japanese hunting breed — small (17-23 lbs), compact, foxy-faced, and independent in a way that surprises owners who expected a small, friendly dog. Shibas are not Labradors in a different body. They are a primitive breed that has been shaped by thousands of years as an independent hunting dog, and their personality reflects that heritage in ways that delight experienced owners and frustrate unprepared ones.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Shiba Inu', href: '/breeds/shiba-inu' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Akita Guide', href: '/breeds/akita', category: 'Breed Guide' }, { title: 'Siberian Husky Guide', href: '/breeds/siberian-husky', category: 'Breed Guide' }, { title: 'Leash Reactivity', href: '/training/leash-reactivity', category: 'Training' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '17–23 lbs'], ['Lifespan', '12–16 years'], ['Temperament', 'Independent, fastidious, bold'], ['Prey drive', 'Very high — leash always'], ['Escape tendency', 'High — secure fencing essential'], ['With other dogs', 'Variable — can be same-sex aggressive'], ['Trainability', 'Intelligent but chooses compliance']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Aggression', href: '/training/dog-aggression' }, { label: 'Off-Leash Training', href: '/training/off-leash-training' }, { label: 'Resource Guarding', href: '/training/resource-guarding' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-shiba" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Shiba Personality — What It Actually Means</h2>
        <p>Shiba Inus are described as cat-like, and the comparison is accurate: they are clean, self-grooming, fastidious dogs that dislike being dirty or wet. They are independent and do not seek validation the way retrievers or herding breeds do — they observe their owners with cool assessment rather than eager attention. They form deep bonds with their family but show it differently than more demonstratively affectionate breeds — through proximity, attention, and occasional dramatic affection rather than continuous tail-wagging enthusiasm.</p>
        <p>This independence manifests in training: Shibas are intelligent — they understand what you're asking. They may simply decide the reward is not sufficient motivation at this moment. Positive reinforcement with high-value rewards and short, engaging sessions work far better than extended drilling. Harsh corrections produce a dog that shuts down or redirects, not increased compliance. Early socialization and training establishes the patterns that make a Shiba manageable — starting at 8-12 weeks and being consistent through adolescence.</p>

        <h2>The Shiba Scream</h2>
        <p>The Shiba Scream is a high-pitched, dramatic vocalization that Shibas produce in specific situations: when being bathed, when being restrained for nail trims or veterinary procedures, and occasionally when they are displeased with a situation. It sounds alarming to the uninitiated — as though the dog is being mortally injured. It is not. It is the Shiba's dramatic protest against indignity. Knowing this exists before experiencing it in a veterinary waiting room reduces the stress significantly. Experienced veterinary staff who have worked with Shibas are unfazed; new technicians sometimes genuinely believe something has gone wrong.</p>

        <h2>Prey Drive and the Leash Requirement</h2>
        <p>Shibas have strong prey drive — they were bred to flush small game. They will pursue squirrels, birds, cats, and small dogs off leash if given the opportunity, and their recall under prey drive is unreliable at best and absent at worst. The leash requirement for Shibas is not a training failure that can be fixed — it is a breed characteristic. Even a highly trained Shiba that has excellent recall in controlled conditions can lock onto prey stimulus and be gone. Fully fenced yards with secure 6-foot fencing (Shibas are athletic and motivated climbers) and leash-only trail and street use are the appropriate management for this instinct, not a recall training challenge to solve.</p>

        <h2>Dog Aggression — The Risk</h2>
        <p>Shibas can be same-sex aggressive, particularly males. A male Shiba that was socialized well as a puppy and has had positive dog experiences may coexist peacefully with other male dogs. A male Shiba with limited socialization history or genetics toward dog aggression can be intensely reactive to other male dogs. This is not universal — many Shibas are excellent with other dogs — but it is a documented breed tendency that requires honest assessment when introducing to multi-dog households. Female-female aggression is also possible. Opposite-sex pairs generally have the best outcomes.</p>

        <h2>Health and Grooming</h2>
        <p>Shibas are a generally healthy primitive breed with fewer genetic diseases than many selectively bred dogs. The primary health concerns: hip dysplasia (OFA clearances on parents recommended), progressive retinal atrophy (DNA test available), and glaucoma (CAER exam). Median lifespan of 12-16 years is excellent for a purebred dog. Their double coat is dense and sheds heavily twice yearly (the "coat blow" — massive, impressive shedding for 2-3 weeks). Regular brushing during coat blows with a slicker brush and undercoat rake significantly reduces the hair distributed through the house. Between coat blows, they are low-maintenance groomers — their fastidious nature keeps them clean.</p>
      </div>
    </ArticleLayout>
  )
}
