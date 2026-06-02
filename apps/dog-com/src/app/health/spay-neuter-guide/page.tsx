import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'When to Spay or Neuter Your Dog — Timing by Breed | Dog.com', description: 'The science on spay/neuter timing has changed. Large breeds benefit from waiting until 12-24 months. Reference guide to timing, benefits, risks.', path: '/health/spay-neuter-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'When to Spay or Neuter Your Dog', description: 'Updated spay/neuter timing guidance by breed size — what the research shows.', url: 'https://dog.com/health/spay-neuter-guide', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const medSchema = buildMedicalWebPageSchema({ name: 'When to Spay or Neuter Your Dog', description: 'Spay/neuter timing by breed and size.', url: 'https://dog.com/health/spay-neuter-guide', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, medSchema)

const FAQS = [
  { question: 'Does early spay/neuter increase cancer risk?', answer: 'For certain large breeds, yes — research from UC Davis showed that Golden Retrievers neutered before 12 months had significantly higher rates of certain joint disorders and some cancers compared to those neutered later. The mechanism appears to involve sex hormones influencing the closure of bone growth plates and some immune functions. This is breed and size dependent — the effect is less clear in small breeds.' },
  { question: 'What about population control arguments for early spay/neuter?', answer: 'Population control is a genuine concern addressed through early spay/neuter programs in shelters. For owners with a personally-managed dog not at risk of unintended breeding, the timing can be made based on the individual dog\'s health interests. Both considerations are valid — the optimal timing depends on your specific situation.' },
  { question: 'What are alternatives to traditional spay/neuter?', answer: 'Ovary-sparing spay (removes uterus, leaves ovaries) preserves hormonal benefits while eliminating pregnancy and pyometra risk. Vasectomy in males preserves testosterone while eliminating reproduction. These are offered by some veterinary surgeons. Discuss with your vet if you are considering alternatives to traditional procedures.' },
]

export default function SpayNeuterGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'When to Spay or Neuter Your Dog', subtitle: 'The standard advice of spay/neuter at 6 months is being revised by research. For large and giant breeds especially, the timing has meaningful health implications. Here\'s what the current evidence shows.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Spay/Neuter Guide', href: '/health/spay-neuter-guide' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Timing by Size</div>
            {[['Small breeds (under 25 lbs)', '6 months — traditional timing appropriate'], ['Medium breeds (25-50 lbs)', '6-12 months — discuss with vet'], ['Large breeds (50-80 lbs)', '12-18 months'], ['Giant breeds (80+ lbs)', '18-24 months']].map(([k, v]) => (
              <div key={k} className="py-2.5 border-b border-brand-border last:border-0">
                <div className="text-2xs text-brand-text-light mb-0.5">{k}</div>
                <div className="text-xs font-bold text-brand-dark">{v}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Golden Retriever Health', href: '/health/golden-retriever-health' }, { label: 'Puppy Schedule', href: '/training/puppy-schedule' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-spay-neuter" />
        </>}
      >
        <div className="carloOS-article">
          <h2>The Research That Changed Recommendations</h2>
          <p>A series of studies from UC Davis (Hart et al., 2014 and subsequent follow-up research) examined the relationship between spay/neuter timing and health outcomes in Golden Retrievers, Labrador Retrievers, German Shepherds, and other breeds. The findings showed that early gonadectomy (before 12 months) in large breeds was associated with significantly higher rates of certain joint disorders (hip dysplasia, cranial cruciate ligament rupture, elbow dysplasia) and some cancers compared to dogs neutered after 12 months or left intact.</p>
          <p>The mechanism: sex hormones (estrogen, testosterone) influence the closure of bone growth plates and play roles in some immune functions. Removing them before natural closure of growth plates changes skeletal development. This effect appears most pronounced in large and giant breeds where growth periods are longer.</p>
          <p>Importantly, these findings are breed and size-specific — the UC Davis research did not find the same pattern in all breeds, and small breed dogs did not show the same associations.</p>

          <h2>Current Recommendations by Breed Size</h2>
          <p><strong>Small breeds (under 25 lbs expected adult weight):</strong> Traditional timing (around 6 months) remains appropriate. The growth plate effect is less significant at smaller sizes and shorter growth periods. The population control and uterine health benefits (eliminating pyometra risk in females) support earlier timing.</p>
          <p><strong>Medium breeds (25–50 lbs):</strong> The evidence is less clear-cut. Most veterinarians recommend 6–12 months depending on the individual dog. Discuss with your vet.</p>
          <p><strong>Large breeds (50–80 lbs):</strong> Current evidence supports waiting until 12–18 months for males and females. This allows growth plates to close normally and sex hormone influence during the critical growth period. For females: the risk of pyometra (uterine infection — life-threatening if untreated) increases with each heat cycle, which must be weighed against the benefits of delayed surgery.</p>
          <p><strong>Giant breeds (80+ lbs):</strong> 18–24 months is the current recommendation from many veterinary internal medicine and orthopedic specialists. Breeds like Great Danes, Mastiffs, Saint Bernards, and Irish Wolfhounds have extended growth periods and the highest risk of the orthopedic conditions associated with early neutering.</p>

          <h2>Benefits of Spay/Neuter (All Sizes)</h2>
          <ul>
            <li><strong>Females:</strong> Eliminates pyometra risk (20–25% of intact females develop this life-threatening infection), reduces mammary tumor risk (significant reduction if done before first heat), prevents unwanted pregnancy, eliminates ovarian and uterine disease.</li>
            <li><strong>Males:</strong> Eliminates testicular cancer, reduces benign prostatic hyperplasia risk, may reduce perianal adenoma risk, reduces roaming and some testosterone-driven behaviors.</li>
            <li><strong>Both:</strong> Population control benefit.</li>
          </ul>

          <h2>The Conversation to Have With Your Vet</h2>
          <p>Bring your dog's expected adult weight and breed. Ask specifically about breed-specific research if yours is one of the studied breeds (Golden Retriever, Labrador, German Shepherd, Vizsla, Bernese Mountain Dog — all have published timing research). Ask about the prophylactic gastropexy (surgical stomach tacking that prevents GDV) option — this can be performed simultaneously with spay/neuter in predisposed breeds and changes the cost-benefit calculation for timing.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
