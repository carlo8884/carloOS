import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Spay & Neuter — Benefits, Timing | Vets.co', description: 'Spay and neuter benefits, optimal timing, and why the answer is more nuanced for large breeds. Pyometra prevention, cancer risk reduction.', path: '/health/spay-neuter-benefits', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Spay & Neuter Guide', description: 'Benefits, timing, and breed-specific considerations for spay and neuter in dogs.', url: 'https://vets.co/health/spay-neuter-benefits', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Spay & Neuter Guide for Dogs', description: 'Benefits, timing, and evidence for spay and neuter decisions.', url: 'https://vets.co/health/spay-neuter-benefits', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'Does neutering cause obesity in dogs?', answer: 'Neutering reduces resting metabolic rate by approximately 20-30%. Dogs on the same diet after neutering will gain weight unless portion is reduced. Neutering causes weight gain only if food intake is not adjusted — the surgery itself does not cause obesity. Reduce food by 20-25% after spay/neuter and monitor body condition monthly.' },
  { question: 'Does early spay/neuter stunt growth?', answer: 'Early spay/neuter removes the sex hormones that signal growth plate closure. The growth plates remain open longer, resulting in slightly taller dogs with longer limbs. This is generally not clinically significant in small breeds. For large breeds, earlier plate closure may have orthopedic benefits — which is one reason many orthopedic specialists recommend waiting until 12-18 months for large breeds.' },
  { question: 'Can I spay my dog while she is in heat?', answer: 'Spaying during estrus (heat) is more technically complex due to increased blood supply to the reproductive tract but is performed routinely. Most surgeons prefer to wait 8-12 weeks after the end of the heat cycle when possible. Emergency situations (pyometra, unwanted pregnancy) may require surgery regardless of cycle status.' },
]
const SOURCES = [
  { label: 'AVMA: Spaying and Neutering Your Pet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/spaying-and-neutering', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Reproductive Physiology of Dogs', url: 'https://www.merckvetmanual.com/reproductive-system/reproductive-diseases-of-the-female-dog-and-cat/reproductive-physiology-of-the-dog', publisher: 'Merck Vet Manual' },
  { label: 'Hart BL et al. Front Vet Sci 2020 — Neutering and Health Outcomes', url: 'https://www.frontiersin.org/articles/10.3389/fvets.2020.00388/full', publisher: 'Frontiers in Veterinary Science' },
]
export default function SpayNeuterPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Spay & Neuter — Benefits, Timing & Breed Considerations', subtitle: 'Spay and neuter are the most performed elective veterinary surgeries. The benefits for population control and individual health are well-established. The optimal timing — particularly for large breeds — has become more nuanced as newer research emerges on orthopedic and cancer outcomes.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Spay & Neuter', href: '/health/spay-neuter-benefits' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Weight Management', href: '/health/weight-management', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Key Benefits</div>
            {['Eliminates pyometra risk (females)', 'Eliminates testicular cancer (males)', 'Dramatically reduces mammary tumor risk', 'Reduces prostate disease risk', 'Eliminates unwanted pregnancy', 'May reduce roaming/marking behavior'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-green-600">✓</span>{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-spay-neuter" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Benefits of Spaying (Females)</h2>
          <p><strong>Pyometra prevention:</strong> Pyometra — life-threatening uterine infection — affects approximately 25% of intact female dogs by age 10. It requires emergency surgery in most cases and carries significant mortality risk in older or ill dogs. Spaying eliminates this risk entirely.</p>
          <p><strong>Mammary tumor reduction:</strong> Spaying before the first heat is associated with very low subsequent mammary tumor risk in early observational work (Schneider et al., J Natl Cancer Inst 1969); later systematic reviews (Beauvais et al., J Small Anim Pract 2012) describe the evidence as weaker than the often-quoted ~99.5% figure but still consistent with meaningful risk reduction. After the third heat, the protective effect diminishes significantly. Mammary tumors are the most common tumors in intact female dogs, and approximately 50% are malignant. Early spay is the most effective prevention.</p>
          <p><strong>Eliminates estrus:</strong> Intact females cycle approximately every 6 months — attracting male dogs, vaginal bleeding, and behavioral changes. Spaying eliminates this entirely.</p>

          <h2>Benefits of Neutering (Males)</h2>
          <p><strong>Testicular cancer prevention:</strong> Neutering eliminates testicular cancer risk — testicular tumors are the second most common tumor in intact male dogs. Neutering before tumors develop removes the tissue at risk.</p>
          <p><strong>Prostate disease reduction:</strong> Benign prostatic hyperplasia (BPH) affects nearly all intact male dogs as they age — causing straining to defecate or urinate and discomfort. Neutering prevents BPH entirely and causes regression of existing BPH. Prostatic cancer risk, however, may be slightly increased by neutering (though prostatic cancer is rare in dogs overall).</p>
          <p><strong>Behavioral effects:</strong> Neutering reduces testosterone-driven behaviors: roaming (seeking females), marking (urine marking in the house), and inter-male aggression. Effects are most pronounced if neutered before these behaviors become strongly established habits. Aggression that is fear-based or dominance-related is not reliably improved by neutering.</p>

          <h2>Timing — The Evolving Evidence</h2>
          <p><strong>Small breeds:</strong> Traditional timing (6 months) remains appropriate. Sex hormone effects on orthopedic development and cancer risk are less significant in small breeds, and early spay/neuter's benefits (pyometra, mammary tumor prevention) are realized earlier.</p>
          <p><strong>Large and giant breeds (over 45 lbs):</strong> Research — particularly UC Davis studies on Golden Retrievers, Labrador Retrievers, and German Shepherds — has found associations between early neuter and increased incidence of certain joint disorders (hip dysplasia, cranial cruciate ligament disease) and some cancers (hemangiosarcoma, mast cell tumors, lymphoma) in these breeds. The hypothesis: sex hormones contribute to musculoskeletal development and immune regulation in ways that are more significant in large breeds.</p>
          <p>Current guidance for large breeds from many internal medicine and orthopedic specialists: consider waiting until 12–18 months for males (or considering alternatives such as vasectomy that preserve sex hormones while preventing reproduction); for females, the pyometra and mammary cancer risk reduction from early spay must be weighed against the orthopedic/cancer risk data. This is an evolving area — discuss with your veterinarian and consider a consultation with a board-certified internist or orthopedist for large breed dogs.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
