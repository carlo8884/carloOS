import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Prescription vs OTC Pet Diets — What Differs | PetFood.com',
  description:
    'Why therapeutic diets require veterinary authorization, how they are formulated differently, cost and access trade-offs, and when each fits.',
  path: '/compare/prescription-vs-otc-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Prescription vs OTC Pet Diets — What Differs | PetFood.com',
  description:
    'Why therapeutic diets require veterinary authorization, how they are formulated and tested differently, the cost and access trade-offs, and when each is appropriate.',
  url: 'https://petfood.com/compare/prescription-vs-otc-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

// Content-aware FAQ derived from the sections below. Rx policy §1.5: this page
// stays strictly non-commercial — informational answers only, no product
// pushes, no purchase links.
const FAQ = [
  {
    question: 'Why do prescription pet diets require veterinary authorization?',
    answer:
      'Therapeutic diets are not drugs, and the prescription is not a legal controlled-substance requirement. Manufacturers restrict them to veterinary channels because their correct use depends on diagnosis and monitoring — a therapeutic diet used without the matching diagnosis can cause harm, and used correctly it requires follow-up such as bloodwork. The restriction is clinical, not merely commercial.',
  },
  {
    question: 'Are prescription diets just marketing?',
    answer:
      'No. Therapeutic diets are formulated to specific nutrient targets that often fall outside the normal range for maintenance foods — sharply restricted phosphorus for kidney disease, very low fat for pancreatitis, hydrolyzed protein for allergy. Many are supported by published feeding studies in the target disease, which condition-themed over-the-counter foods typically are not.',
  },
  {
    question: 'Can an over-the-counter food substitute for a prescription diet?',
    answer:
      'Usually not. OTC foods, including those marketed for sensitive skin or weight, are formulated to ordinary AAFCO maintenance profiles and do not hit therapeutic targets. For a genuine therapeutic need, the OTC food is generally not equivalent; the trade-offs are best discussed with the treating veterinarian.',
  },
  {
    question: 'Is a prescription diet good for a healthy pet?',
    answer:
      'No — for a healthy animal a therapeutic diet is unnecessary and potentially harmful. A phosphorus-restricted renal diet, for example, is not suitable for a healthy growing animal. The decision is driven by diagnosis: match the diet to the documented need.',
  },
]

const pageSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQ }))

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "Nutrient Requirements of Dogs and Cats",
      url: "https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats",
      publisher: "National Research Council, National Academies Press, 2006",
    },
    {
      label: "WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods",
      url: "https://wsava.org/committees/global-nutrition-committee/",
      publisher: "World Small Animal Veterinary Association Global Nutrition Committee",
    },
]

export default function PrescriptionVsOtcDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Prescription vs Over-the-Counter Diets',
        subtitle:
          'Prescription (therapeutic) diets occupy a distinct regulatory and clinical space from over-the-counter foods, and the difference is more than marketing. They are formulated to specific therapeutic targets, often validated in the target disease, and require veterinary authorization for sound reasons. This page explains what differs, why the gatekeeping exists, and the trade-offs.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Prescription vs Over-the-Counter Diets', href: '/compare/prescription-vs-otc-diets' },
      ]}
      relatedLinks={[
        { title: 'Compare Hub', href: '/compare' },
        { title: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
        { title: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
        { title: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      schema={pageSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Prescription Means Here', href: '#whatmeans' },
              { label: 'Formulation Differences', href: '#formulation' },
              { label: 'Why Veterinary Authorization', href: '#authorization' },
              { label: 'Evidence and Testing', href: '#evidence' },
              { label: 'Cost and Access', href: '#cost' },
              { label: 'Choosing Between Them', href: '#choosing' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Condition-Specific Diets', href: '/conditions' },
              { label: 'Kidney Disease — Renal Diets', href: '/conditions/kidney-disease-renal-diets' },
              { label: 'Food Allergies and Intolerances', href: '/conditions/food-allergies-and-intolerances' },
              { label: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
              { label: 'Scoring Methodology', href: '/guides/methodology' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="prescription-vs-otc-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:compare-prescription-vs-otc-diets" fallbackKey="petfood-com:compare-hero" priority aspect="16:9" variant="wide" caption="Prescription versus over-the-counter diets — what the prescription requirement does and does not mean." />
        <p>Therapeutic diets, commonly called prescription diets, are foods formulated to manage specific diagnosed conditions and sold only with veterinary authorization. Despite the name, they are not drugs and the prescription is not a legal controlled-substance requirement; rather, manufacturers restrict them to veterinary channels because their correct use depends on diagnosis and monitoring. Over-the-counter wellness and even condition-themed foods are formulated to ordinary maintenance standards. See <a href="/diets">Condition-Specific Diets</a>.</p>

        <div style={{ margin: '24px 0', padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--brand-border)', borderLeft: '4px solid var(--brand-primary)', background: 'var(--brand-surface)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand-primary-dark)', marginBottom: '8px' }}>Bottom Line</div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--brand-text-mid)' }}>
            The decision is driven by diagnosis, not marketing. Prescription (therapeutic) diets are not drugs — they are restricted to veterinary channels because their correct use depends on a diagnosis and monitoring, and some can harm an animal that does not have the target condition. For a diagnosed condition with a diet validated in that disease, the prescription diet used under veterinary direction is usually the right choice; for a healthy animal, an OTC complete-and-balanced diet is appropriate and a therapeutic diet is unnecessary. This is not medical advice.
          </p>
        </div>

        <h2 id="whatmeans">What Prescription Means Here</h2>
        <p>A prescription diet is authorized by a veterinarian for a patient with a diagnosed condition. The veterinary-channel restriction exists because these diets can be inappropriate or harmful for animals that do not have the target condition — a phosphorus-restricted renal diet, for example, is not suitable for a healthy growing animal. The authorization ties the diet to a diagnosis and to follow-up monitoring.</p>
        <h2 id="formulation">Formulation Differences</h2>
        <p>Therapeutic diets are formulated to specific nutrient targets that often fall outside the normal range for maintenance foods — sharply restricted phosphorus and moderated protein for kidney disease, very low fat for pancreatitis, hydrolyzed protein for allergy, controlled mineral and pH targets for urinary stones. OTC foods, including those marketed for sensitive skin or weight, are formulated to ordinary AAFCO maintenance profiles and do not hit these therapeutic targets. See <a href="/diets/kidney-disease-diets">Kidney Disease Diets</a>.</p>
        <h2 id="authorization">Why Veterinary Authorization</h2>
        <p>The gatekeeping protects animals: a therapeutic diet used without the matching diagnosis can cause harm (feeding a low-protein renal diet to a healthy puppy), and a therapeutic diet used correctly requires monitoring (bloodwork to track kidney values, glucose curves for diabetes). It also protects the integrity of diagnostic diet trials — an elimination diet only works if the veterinarian controls the protocol. The restriction is clinical, not merely commercial. See <a href="/diets/food-allergy-and-elimination-diets">Food Allergy and Elimination Diets</a>.</p>
        <h2 id="evidence">Evidence and Testing</h2>
        <p>Many therapeutic diets are supported by published feeding studies in the target disease — renal diets, for instance, have controlled-trial evidence for extending survival in CKD. This disease-specific evidence is a meaningful advantage over condition-themed OTC foods, whose claims are typically not validated in the disease. Feeding-trial substantiation and disease-specific research strengthen the case for the veterinary product where one is indicated.</p>
        <h2 id="cost">Cost and Access</h2>
        <p>Therapeutic diets generally cost more than OTC foods and require a veterinary relationship to obtain, which can be a barrier. Some owners seek OTC substitutes to save money, but for a genuine therapeutic need, the OTC food usually does not meet the same targets and is not equivalent. The cost is best weighed against the clinical benefit and the cost of poorly managed disease. See the <a href="/tools/food-cost-calculator">Food Cost Calculator</a>.</p>
        <h2 id="choosing">Choosing Between Them</h2>
        <p>For a diagnosed condition with a therapeutic diet validated in that disease, the prescription diet is usually the right choice, used under veterinary direction. For a healthy animal, an OTC complete-and-balanced diet is appropriate and a therapeutic diet is unnecessary and potentially harmful. The decision is driven by diagnosis: match the diet to the documented need, not to the marketing. See <a href="/guides/methodology">Scoring Methodology</a>.</p>

        <h2 id="faq">Common Questions</h2>
        {FAQ.map((f) => (
          <div key={f.question}>
            <p><strong>{f.question}</strong></p>
            <p>{f.answer}</p>
          </div>
        ))}

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
