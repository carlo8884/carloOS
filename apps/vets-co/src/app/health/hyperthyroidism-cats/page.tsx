import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Hyperthyroidism in Cats — Signs & Treatment Options | Vets.co", description: "Feline hyperthyroidism causes weight loss with a ravenous appetite in older cats. Compare radioiodine, medication, diet, and surgery treatment options.", path: '/health/hyperthyroidism-cats', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Hyperthyroidism in Cats', description: 'Signs, diagnosis, and the four treatment options for feline hyperthyroidism.', url: 'https://vets.co/health/hyperthyroidism-cats', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Hyperthyroidism in Cats', description: 'Clinical signs, diagnosis, and treatment of feline hyperthyroidism.', url: 'https://vets.co/health/hyperthyroidism-cats', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Is radioiodine treatment a cure for hyperthyroidism?", answer: "Radioiodine (I-131) therapy is considered the gold-standard treatment and is curative in the large majority of cats with a single injection. It selectively destroys overactive thyroid tissue while sparing normal tissue, requires no daily medication afterward, and avoids surgical and anesthetic risk. The trade-offs are upfront cost and a short hospital stay for radiation safety. It is the preferred option for many cats, though concurrent kidney disease can influence the decision and should be discussed with your veterinarian." },
  { question: "Why does my hyperthyroid cat eat constantly but lose weight?", answer: "Excess thyroid hormone dramatically increases the body's metabolic rate, so a hyperthyroid cat burns calories faster than it can take them in — producing the classic picture of a ravenous appetite alongside steady weight loss. Other common signs include increased thirst and urination, hyperactivity or restlessness, a poor or matted coat, increased vocalization, and sometimes vomiting or diarrhea. Because these signs overlap with other diseases of older cats, bloodwork measuring thyroid hormone (T4) confirms the diagnosis." },
  { question: "Can diet alone control hyperthyroidism?", answer: "An iodine-restricted therapeutic diet can control hyperthyroidism in some cats, but only if it is fed exclusively — no other food, treats, or outdoor hunting — which is difficult in multi-cat households and impossible for cats that go outdoors. It does not cure the disease and the long-term effects of severe iodine restriction are still debated. Diet is a reasonable option for cats that cannot undergo other treatments, but radioiodine and medication are more reliable for most cats." },
]
const SOURCES = [
  { label: 'Merck Veterinary Manual: Hyperthyroidism in Cats', url: 'https://www.merckvetmanual.com/endocrine-system/the-thyroid-gland/hyperthyroidism-in-cats', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Hyperthyroidism in Cats', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/hyperthyroidism-cats', publisher: 'AVMA' },
  { label: 'AAFP: Feline Hyperthyroidism Guidelines', url: 'https://catvets.com/guidelines/practice-guidelines/hyperthyroidism/', publisher: 'American Association of Feline Practitioners' },
]
export default function HyperthyroidismCatsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Hyperthyroidism in Cats', subtitle: 'Hyperthyroidism is the most common hormonal disease of older cats, caused almost always by a benign overgrowth of the thyroid glands that floods the body with thyroid hormone. It is very treatable — often curable — and recognizing the signs early prevents the heart and kidney damage that uncontrolled disease causes.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Hyperthyroidism in Cats', href: '/health/hyperthyroidism-cats' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Kidney Disease in Cats', href: '/health/kidney-disease-cats', category: 'Veterinary Guide' },
          { title: 'Senior Pet Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Four Treatment Options</div>
            {[['Radioiodine', 'Curative, single injection'], ['Medication', 'Daily, lifelong, reversible'], ['Diet', 'Iodine-restricted, exclusive'], ['Surgery', 'Removes thyroid tissue']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Kidney Disease in Cats', href: '/health/kidney-disease-cats' }, { label: 'Senior Pet Care', href: '/health/senior-pet-care' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-hyperthyroid" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Hyperthyroidism can mask kidney disease">
            Excess thyroid hormone increases blood flow through the kidneys, which can make kidney values look better than they truly are. When hyperthyroidism is treated, underlying kidney disease may become apparent. This is why veterinarians monitor kidney values closely before and after treatment — it changes the plan, not whether to treat.
          </CalloutBox>

          <h2>What Happens in Hyperthyroidism</h2>
          <p>In the vast majority of cases, one or both thyroid glands in the neck develop a benign nodular overgrowth that produces excess thyroid hormone. Thyroid hormone sets the body's metabolic rate, so an excess revs every system. The heart works harder, often thickening over time; metabolism races, burning through body reserves; and the nervous system becomes overstimulated. Malignant thyroid tumors are rare in cats. Left untreated, the disease damages the heart and other organs, which is why prompt treatment matters even though the underlying tumor is usually benign.</p>

          <h2>Recognizing the Signs</h2>
          <p>The hallmark is weight loss despite a strong, often voracious appetite in a cat over about 10 years old. Owners frequently describe a cat that is suddenly demanding food, drinking and urinating more, restless or hyperactive at night, and increasingly vocal. The coat may look unkempt. Some cats vomit or have loose stools. A subset shows the opposite picture — apathy and poor appetite — which can make diagnosis trickier. Any unexplained weight loss in a senior cat warrants thyroid testing.</p>

          <h2>How It Is Diagnosed</h2>
          <p>Diagnosis usually rests on a blood test showing elevated total T4 alongside consistent signs. In borderline cases, repeat testing or additional thyroid tests resolve the picture, because other illnesses can suppress T4 into the normal range. A full workup also checks the heart, blood pressure, and kidney values, since these organs are commonly affected and influence which treatment is safest.</p>

          <h2>The Four Treatment Options</h2>
          <p><strong>Radioiodine (I-131):</strong> the gold standard. A single injection destroys overactive tissue and cures most cats, with no ongoing medication. Requires a short hospital stay.</p>
          <p><strong>Anti-thyroid medication:</strong> a daily oral or transdermal medication that controls hormone production. It is reversible, inexpensive to start, and useful for stabilizing cats before radioiodine, but it must be given for life and requires monitoring bloodwork. The specific medication and dose are determined by your veterinarian.</p>
          <p><strong>Therapeutic diet:</strong> an iodine-restricted food that, fed exclusively, can normalize thyroid levels. Practical only in single-source-feeding households.</p>
          <p><strong>Surgery:</strong> surgical removal of affected thyroid tissue, effective but now less common given the availability and safety of radioiodine.</p>

          <h2>Choosing a Treatment</h2>
          <p>The best option depends on the individual cat — age, kidney function, heart status, household feeding logistics, and budget. Radioiodine offers a cure and freedom from daily medication; medication offers flexibility and a low entry cost; diet suits specific situations. Your veterinarian weighs these factors with you. Whatever the path, the goal is to bring thyroid levels into the normal range and protect the heart and kidneys from ongoing damage.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
