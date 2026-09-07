import type { Metadata } from 'next'
import { AffiliateDisclosure, buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, ShopCtas, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Akita Breed Guide — Same-Sex Aggression, Loyalty | Dog.com', description: 'Akitas are fiercely loyal to their family and potentially dangerous to other dogs. Same-sex aggression is strong in the breed.', path: '/breeds/akita', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Akita Breed Guide', description: 'Same-sex aggression, loyalty, health priorities, and care for Akitas.', url: 'https://dog.com/breeds/akita', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'Are Akitas good family dogs?', answer: 'Akitas form intense, exclusive bonds with their immediate family and are generally good with their own family\'s children under supervision. They can be deeply suspicious of strangers, and a well-socialized Akita that accepts visitors at home is not reliably accepting of strangers elsewhere. The breed requires experienced, committed ownership and is not recommended as a first dog.' },
  { question: 'Are Akitas aggressive toward other dogs?', answer: 'Akitas are strongly same-sex aggressive — male to male and female to female. This is a deeply embedded breed characteristic, not a training issue that can be eliminated through socialization. The appropriate multi-dog configuration is opposite-sex pairs, with active management on leash around same-sex dogs of similar or larger size.' },
  { question: 'How much exercise does an Akita need?', answer: 'Akitas have moderate exercise needs — about 45-60 minutes daily. They are a large breed (70-130 lbs) that does not require the multi-hour vigorous exercise of working herding breeds, but they do need consistent daily activity and structured management outdoors.' },
  { question: 'What health problems do Akitas have?', answer: 'Documented breed-priority conditions include sebaceous adenitis (an immune-mediated skin condition), uveodermatological syndrome (an immune-mediated eye and skin condition that can threaten vision), and hypothyroidism, with annual thyroid testing recommended from age 3. As a deep-chested breed, Akitas also carry GDV (bloat) risk — discuss screening and prophylactic gastropexy timing with your veterinarian.' },
  { question: 'How long do Akitas live?', answer: 'Akitas typically live 10-13 years. Lifespan varies with genetics, weight management, and how early breed-associated conditions such as hypothyroidism or sebaceous adenitis are identified and managed with your veterinarian.' },
]
const combinedSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQS }))

export default function AkitaPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Akita Breed Guide', subtitle: "The Akita is a large Japanese spitz-type breed — national dog of Japan, subject of the famous Hachikō loyalty story, and a breed that demands experienced, committed ownership. They form intense bonds with their immediate family and can be deeply suspicious of strangers and dangerously aggressive toward other dogs of the same sex. The same loyalty that makes them extraordinary companions makes them a liability in the wrong hands.", category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Akita', href: '/breeds/akita' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Siberian Husky Guide', href: '/breeds/siberian-husky', category: 'Breed Guide' }, { title: 'Shiba Inu Guide', href: '/breeds/shiba-inu', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }, { title: 'Dog Aggression', href: '/training/dog-aggression', category: 'Training' }]}
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
        <RelatedLinks title="Planning for Breed-Specific Costs" links={[{ label: 'Compare Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-akita" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the akita checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Akita checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-akita-samesex-pair-chart,
            dog-fridge-akita-hachiko-10yr-card, and
            canine-first-owner-akita-handbook notes that
            match the same-sex / opposite-sex-pair floor,
            the Hachikō 10-year-wait exclusivity notes, and
            first-time-owner notes on this page — a laminated
            dog Akita same-sex pair chart so the male-male /
            female-female fight notes are posted on the
            fridge (not a Shih Tzu 6–8-week groom chart, not
            a Cavalier 50% MVD chart), a fridge Akita
            Hachikō 10-year card so the exclusive-bond /
            no-stranger-generalization notes are labeled in
            the kitchen (not a corneal-ulcer card, not a
            finger-toothbrush hop), and a first-owner Akita
            handbook so the NO-typically / experienced-owner
            / same-sex-management grounding is a physical
            kitchen book (not a first-owner Shih Tzu
            handbook). Educational kitchen checklist, not a
            ranked product list, not a substitute for a
            veterinarian. Dog.com does not sell insurance.
            No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Akita checklist"
            subtitle="Email the same-sex pair chart, Hachikō 10-year card, and first-owner handbook notes. No spam."
            ctaText="Email my akita checklist"
            source="breed-akita-under-hero"
          />
        </div>

        <p>The working story starts in the mountainous Akita region of Japan: a large spitz used historically to hunt boar, bear, and elk. That hunt / same-sex-guard history is why a household Akita still needs opposite-sex pairing and a stranger-management plan, not a crate-only afternoon. Akitas are not typically first-time-owner friendly — NO-typically — when the household cannot commit to experienced same-sex management, exclusive-bond limits, and the 45–60 minute daily walk floor.</p>

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

        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the Akita home kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the on-page
            same-sex / opposite-sex-pair floor, the Hachikō
            10-year-wait exclusivity notes, and first-time-
            owner notes — a laminated dog Akita same-sex
            pair chart, a fridge Akita Hachikō 10-year card,
            and a first-owner Akita handbook. Educational
            kitchen searches only. They are not a ranked
            product list, they are not a crate hop, they are
            not a finger-toothbrush hop, and they do not
            replace a veterinarian. Dog.com does not sell
            insurance. Dog.com earns a commission on
            qualifying purchases at no extra cost to you.
          </p>
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="flex flex-col gap-3 mt-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+akita+samesex+pair+chart?s=breed-akita"
              amazonLabel="Browse laminated dog Akita same-sex pair charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+akita+hachiko+10yr+card?s=breed-akita"
              amazonLabel="Browse fridge Akita Hachikō 10-year cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+first+owner+akita+handbook?s=breed-akita"
              amazonLabel="Browse first-owner Akita handbooks on Amazon →"
            />
          </div>
        </div>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
    </>
  )
}
