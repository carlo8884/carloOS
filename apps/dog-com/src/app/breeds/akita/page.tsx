import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Akita Breed Guide — Same-Sex Aggression, Loyalty | Dog.com', description: 'Akitas are fiercely loyal to their family and potentially dangerous to other dogs. Same-sex aggression is strong in the breed.', path: '/breeds/akita', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Akita Breed Guide', description: 'Same-sex aggression, loyalty, health priorities, and care for Akitas.', url: 'https://dog.com/breeds/akita', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function AkitaPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Akita Breed Guide', subtitle: "The Akita is a large Japanese spitz-type breed — national dog of Japan, subject of the famous Hachikō loyalty story, and a breed that demands experienced, committed ownership. They form intense bonds with their immediate family and can be deeply suspicious of strangers and dangerously aggressive toward other dogs of the same sex. The same loyalty that makes them extraordinary companions makes them a liability in the wrong hands.", category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Akita', href: '/breeds/akita' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Siberian Husky Guide', href: '/breeds/siberian-husky', category: 'Breed Guide' }, { title: 'Shiba Inu Guide', href: '/breeds/shiba-inu', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }, { title: 'Dog Aggression', href: '/training/dog-aggression', category: 'Training' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '70–130 lbs'], ['Lifespan', '10–13 years'], ['Dog aggression', 'High — same-sex especially dangerous'], ['Trainability', 'Intelligent but willful'], ['Exercise', 'Moderate — 45-60 min daily'], ['With children', 'Good with own family — supervision required'], ['Breed experience', 'Required — not a first dog']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Aggression', href: '/training/dog-aggression' }, { label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' }, { label: 'Dog Sebaceous Adenitis', href: '/health/dog-skin-allergies' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-akita" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>The Loyalty — What Hachikō Represents</h2>
        <p>Hachikō was a real Akita who waited for his deceased owner at a Tokyo train station for nearly 10 years after the owner's death — a story that became internationally known through the 2009 film. The story is not mythology — the behavioral documentation is real. Akitas form deep, exclusive bonds with their primary person or family that are qualitatively different from the attachment most other breeds form. They can be aloof to the point of apparent indifference with strangers while being deeply demonstrative with their family.</p>
        <p>This exclusivity is a double-edged characteristic. The depth of the Akita-owner bond is one of the most profound available in dog ownership. The same exclusivity means an Akita does not generalize positive experiences — a well-socialized Akita that accepts your visitors is not reliably accepting of strangers it encounters away from home. Management, not assumption of friendly generalization, is the correct approach.</p>

        <h2>Same-Sex Aggression — The Management Priority</h2>
        <p>Akitas are strongly same-sex aggressive — male to male and female to female. This is not a training issue that can be eliminated through socialization or behavioral modification; it is a deeply embedded breed characteristic shaped by generations of selection for dog fighting in Japan. Two male Akitas in the same household will, with high probability, eventually fight — and Akita fights cause serious injury. Two female Akitas is similarly risky. The appropriate multi-dog configuration for Akitas is opposite-sex pairs, with management even then.</p>
        <p>On leash in public: any encounter with a same-sex dog of similar or larger size requires active management. This means crossing the street, creating distance, and never assuming because an Akita was friendly last week it will be friendly this week. The dog aggression is situation-dependent, not continuously present, but when triggered it is severe. Owners who walk Akitas in urban environments with high dog density need a management plan, not an optimistic attitude.</p>

        <h2>Health Priorities</h2>
        <p><strong>Sebaceous adenitis:</strong> An immune-mediated condition affecting the sebaceous glands — more common in Akitas than most breeds. The skin becomes dry, scaly, and the coat deteriorates as the oil-producing glands are destroyed. Management involves medicated shampoos, oil treatments, and immunosuppression in severe cases. OFA sebaceous adenitis registry screening of breeding dogs reduces prevalence.</p>
        <p><strong>Uveodermatological syndrome (Vogt-Koyanagi-Harada-like disease):</strong> An immune-mediated condition affecting both eyes and skin simultaneously — depigmentation of the skin and muzzle combined with uveitis (inflammation inside the eye) that can progress to blindness. More common in Akitas and Samoyeds than other breeds. Requires aggressive immunosuppression to preserve vision.</p>
        <p><strong>Hypothyroidism:</strong> Elevated prevalence in Akitas — annual thyroid testing recommended from age 3. GDV risk as a deep-chested breed — prophylactic gastropexy at spay/neuter discussion with veterinarian is appropriate.</p>
      </div>
    </ArticleLayout>
  )
}
