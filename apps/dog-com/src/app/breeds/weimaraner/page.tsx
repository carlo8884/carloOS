import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Weimaraner Breed Guide — Gray Ghost, Bloat Risk | Dog.com', description: 'Weimaraners are the "Gray Ghost" — haunting silver-gray, intense, and demanding. GDV/bloat risk high, prey drive extreme, and they bond deeply with one person.', path: '/breeds/weimaraner', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Weimaraner Breed Guide', description: 'GDV risk, prey drive, separation anxiety, and care for Weimaraners.', url: 'https://dog.com/breeds/weimaraner', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  {
    question: 'Are Weimaraners good with cats?',
    answer: 'Cats and other small animals are at genuine risk from an unsupervised adult Weimaraner — the breed was developed to hunt furred and feathered game and its prey drive is intense and deeply embedded. Some Weimaraners raised with cats from puppyhood develop coexistence; others do not, regardless of socialization effort. Households with cats or small animals should assess individual temperament honestly rather than assuming training will manage it.',
  },
  {
    question: 'How much exercise does a Weimaraner need?',
    answer: 'A minimum of 2+ hours of vigorous exercise daily — running, hiking, swimming, retrieving, or structured dog sports like agility, field trials, and tracking. Mental stimulation (nose work, obedience training, problem-solving tasks) is equally important. A sedentary Weimaraner in an unstimulating environment becomes destructive and anxious because its needs are not being met.',
  },
  {
    question: 'What health problems do Weimaraners have?',
    answer: 'The primary documented concern is gastric dilatation-volvulus (GDV/bloat) — Weimaraners are a deep-chested breed with significant predisposition. Prophylactic gastropexy at the time of spay/neuter prevents the rapidly fatal stomach rotation; discuss it with your veterinarian before the procedure is scheduled, and know the location of your nearest 24-hour emergency vet.',
  },
  {
    question: 'Can Weimaraners be left alone?',
    answer: 'Extended separation is genuinely difficult for this breed. Weimaraners form particularly intense bonds — often attaching most strongly to one person — and strong separation anxiety is a documented breed tendency. Plan around the attachment (companionship, daycare, schedule adjustments) rather than trying to train it away.',
  },
  {
    question: 'Can a Weimaraner be trusted off leash?',
    answer: 'Prey drive challenges off-leash reliability — a Weimaraner that locks onto a deer, rabbit, or squirrel may not respond to recall until the prey has escaped. Off-leash exercise belongs in securely fenced areas or controlled environments, particularly in wildlife-dense settings.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })
const combinedSchema = combineSchemas(schema, faqSchema)
export default function WeimaranerPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Weimaraner Breed Guide', subtitle: 'The Gray Ghost — the Weimaraner\'s silver-gray coat, pale amber or blue-gray eyes, and intense, aristocratic bearing make them immediately distinctive. Bred as all-purpose hunting dogs by German nobility, they combine exceptional prey drive, high intelligence, deep loyalty, and significant intensity in a package that is deeply rewarding for owners who can match them.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Weimaraner', href: '/breeds/weimaraner' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Vizsla Guide', href: '/breeds/vizsla', category: 'Breed Guide' }, { title: 'Irish Setter Guide', href: '/breeds/irish-setter', category: 'Breed Guide' }, { title: 'Separation Anxiety', href: '/training/separation-anxiety', category: 'Training' }]}
      schema={combinedSchema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '55–90 lbs'], ['Lifespan', '10–13 years'], ['GDV risk', 'High — deep-chested breed'], ['Prey drive', 'Very high — cats at risk'], ['Exercise', 'High — 2+ hours vigorous daily'], ['Alone time', 'Difficult — strong separation anxiety'], ['Trainability', 'High but independent']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' }, { label: 'Dog Anxiety', href: '/health/dog-anxiety' }, { label: 'Off-Leash Training', href: '/training/off-leash-training' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Vizsla vs Weimaraner', href: '/compare/vizsla-vs-weimaraner' },
        ]} />
        <RelatedLinks title="Planning for Breed-Specific Costs" links={[{ label: 'Compare Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-weimaraner" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <BreedHealthCard name="Gastric Dilatation-Volvulus (GDV / Bloat)" riskLevel="high"
          description="Weimaraners are a deep-chested breed with significant GDV predisposition. Prophylactic gastropexy at spay/neuter is recommended — it prevents the stomach rotation that makes GDV rapidly fatal while not affecting the dog's normal function. Discuss with your veterinarian before the spay/neuter procedure."
          signs={['Unproductive retching', 'Distended, taut abdomen', 'Restlessness to sudden collapse', 'Excessive drooling', 'Pale gums']}
          management="Prophylactic gastropexy at spay/neuter. Know the nearest 24-hour emergency vet. This is a surgical emergency — minutes matter." />

        <h2>Prey Drive — The Critical Consideration</h2>
        <p>Weimaraners were bred to hunt furred and feathered game — their prey drive is intense and deeply embedded. Small animals in the household — cats, rabbits, guinea pigs, small dogs — are at genuine risk from an unsupervised adult Weimaraner following prey drive. Some Weimaraners raised with cats from puppyhood develop coexistence; others do not, regardless of socialization effort. Prospective owners with cats or small animals should understand this risk honestly and assess individual Weimaraner temperament before acquisition rather than assuming training will manage it.</p>
        <p>Off-leash recalls in open environments are similarly challenged by prey drive — a Weimaraner that locks onto a deer, rabbit, or squirrel in the field may not respond to recall until the prey has escaped. Off-leash exercise should be in securely fenced areas or under conditions where the environment can be controlled. The same drive that makes them exceptional hunting dogs makes them unreliable off-leash in wildlife-dense environments.</p>

        <h2>The One-Person Bond</h2>
        <p>Weimaraners form particularly intense bonds — often attaching most strongly to one person in a household. This person becomes the center of the Weimaraner's world. The dog's welfare is intertwined with the presence of this person in a way that makes extended separation (business travel, long workdays) genuinely difficult for the dog. This is the same characteristic that makes them extraordinarily loyal companions — the same depth of attachment that makes them the velcro dog of the sporting group. Plan around this characteristic rather than trying to train it away.</p>

        <h2>Exercise and Mental Stimulation</h2>
        <p>2+ hours of vigorous exercise daily is the minimum. Running, hiking, swimming, retrieving, or structured dog sports (agility, field trials, tracking) all channel their considerable energy and intelligence productively. Mental stimulation is equally important — nose work, obedience training, and problem-solving tasks satisfy the working dog's need for purposeful activity. A Weimaraner that is both physically and mentally worked is a genuinely wonderful companion. A sedentary Weimaraner in an unstimulating environment is a destructive, anxious, difficult dog — not because of a character flaw, but because their needs are not being met.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema={false}
          allowMultiple
        />
      </div>
    </ArticleLayout>
  )
}
