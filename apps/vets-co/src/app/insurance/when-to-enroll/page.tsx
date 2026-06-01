import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "When to Enroll Your Pet in Insurance | Vets.co", description: "The best time to get pet insurance is when your pet is young and healthy. Learn why enrolling early matters, and how to think about insuring senior pets.", path: '/insurance/when-to-enroll', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'When to Enroll Your Pet in Insurance', description: 'Why early enrollment matters and how to approach insuring puppies, kittens, adults, and senior pets.', url: 'https://vets.co/insurance/when-to-enroll', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "What is the best age to get pet insurance?", answer: "The best time is as young as possible — typically once a puppy or kitten can be enrolled, often around 6 to 8 weeks depending on the insurer. Young pets have no pre-existing conditions to exclude, qualify for the lowest premiums, and lock in coverage before any hereditary or chronic conditions appear. Enrolling early does not mean you will claim early; it means that when a condition eventually develops, it will be covered rather than excluded as pre-existing." },
  { question: "Is it worth insuring an older pet?", answer: "It can be, though the calculus changes. Senior pets cost more to insure and are more likely to have pre-existing conditions that get excluded, but they are also far more likely to need expensive care, and many insurers still offer coverage with no upper age limit for new enrollment. For a senior pet with a relatively clean record, insurance can still protect against new, unrelated conditions. Compare carriers that accept older pets, and read carefully how pre-existing conditions are handled." },
  { question: "Should I wait until my pet is sick to buy insurance?", answer: "No — this is the most common and costly mistake. Once a pet shows signs of a condition, that condition becomes pre-existing and will be excluded permanently, which is exactly when coverage would have mattered most. Insurance only works when purchased before problems arise, because it pools the risk of future unknown events. Buying after symptoms appear leaves you paying premiums for a policy that excludes your pet's main health issue." },
]
export default function WhenToEnrollPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'When to Enroll Your Pet', subtitle: 'There is a clear answer to when you should buy pet insurance: as early as possible, while your pet is young and healthy. Because pre-existing conditions are permanently excluded and premiums rise with age, the day you enroll largely determines the lifetime value of your coverage. Here is how to think about timing at every life stage.', category: 'Insurance Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'When to Enroll', href: '/insurance/when-to-enroll' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Enrollment by Life Stage</div>
            {[['Puppy / kitten', 'Ideal — lowest cost, no exclusions'], ['Young adult', 'Still strong, enroll before issues'], ['Mature adult', 'Good if record is clean'], ['Senior', 'Possible, more exclusions and cost']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Pre-Existing Conditions', href: '/insurance/pre-existing-conditions' }, { label: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works' }, { label: 'Breed-Specific Risk', href: '/insurance/breed-specific-risk' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Insurance Decision Guide" subtitle="Our plain-English checklist." source="insurance-when-enroll" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Enroll before you need it, not when you need it">
            Insurance is a bet against future unknowns. The moment a condition becomes known, it can no longer be insured. The practical rule is simple: enroll while your pet is healthy, even if that feels premature, because that is the only window in which full coverage is available.
          </CalloutBox>

          <h2>Why Earlier Is Almost Always Better</h2>
          <p>Two forces make early enrollment advantageous. First, pre-existing conditions are excluded permanently, so the longer you wait, the more conditions can accumulate and be locked out. Second, premiums are lowest for young pets and rise with age as claim likelihood increases. Enrolling a healthy puppy or kitten captures the lowest premium and the broadest possible coverage, and it means that when an expensive condition eventually appears — as it often does later in life — it will be covered rather than excluded.</p>

          <h2>Puppies and Kittens</h2>
          <p>Most insurers allow enrollment from around six to eight weeks of age. This is the ideal moment: the pet has no medical history to exclude, premiums are at their lowest, and waiting periods will pass long before most conditions arise. New owners sometimes hesitate because a young pet seems unlikely to need care, but that is precisely the point — coverage purchased during health is what pays out during later illness.</p>

          <h2>Adult Pets</h2>
          <p>Enrolling an adult pet is still worthwhile, especially if the medical record is clean. The earlier within adulthood you act, the fewer conditions will have appeared. An owner adopting a young adult dog or cat should enroll promptly, before the routine wear of life produces the first documented symptom that could become an exclusion. The same early-bird logic applies; it is simply later in the timeline.</p>

          <h2>Senior Pets</h2>
          <p>Insuring a senior pet is more nuanced. Premiums are higher, and seniors are more likely to carry pre-existing conditions that will be excluded. However, seniors are also the most likely to need costly care, and many insurers accept new enrollments with no upper age limit. For a senior with a relatively clean history, a policy can still protect against new, unrelated illnesses. The key is to compare carriers that welcome older pets and to read carefully how they define and exclude pre-existing conditions.</p>

          <h2>Adopted and Rescue Pets</h2>
          <p>For adopted pets with unknown histories, enroll as soon as possible after adoption and after an initial veterinary exam. Establishing coverage early limits the window in which undocumented conditions might later be deemed pre-existing. Schedule the enrollment around the new-pet exam so you understand your pet's baseline health and can choose appropriate coverage from the start.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
