import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Supplements — What Works, What\'s Overhyped | Dog.com', description: 'Evidence-graded guide to dog supplements. Fish oil, joint supplements, probiotics, and more — what the research actually shows and what\'s pure marketing.', path: '/nutrition/dog-supplements', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Supplements — What the Evidence Shows', description: 'Evidence-graded dog supplement guide: fish oil, joint supplements, probiotics.', url: 'https://dog.com/nutrition/dog-supplements', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const SUPPLEMENTS = [
  { name: 'Fish Oil (EPA/DHA Omega-3)', evidence: 'strong' as const, dose: '20–55 mg combined EPA/DHA per kg body weight daily', brands: 'Nordic Naturals, Grizzly Salmon Oil, plain fish oil capsules', summary: 'The best-evidenced supplement in veterinary medicine. Documented benefits: anti-inflammatory for arthritis, skin and coat improvement, potential cardiovascular benefit, and emerging evidence for cognitive support in senior dogs. Use marine-source fish oil (EPA and DHA), not flaxseed oil (ALA — dogs convert this inefficiently). Quality matters: look for third-party tested products for heavy metal content. Do not exceed recommended dose — fish oil is a blood thinner at high doses.' },
  { name: 'Glucosamine & Chondroitin', evidence: 'moderate' as const, dose: 'Glucosamine 22mg/kg daily; Chondroitin 15mg/kg daily', brands: 'Cosequin DS, Dasuquin, Nutramax products (NASC seal)', summary: 'Widely recommended in veterinary practice for joint support. Evidence is moderate — some studies show meaningful reduction in arthritis signs; others show minimal effect vs placebo. The clinical reality: many dogs seem to respond, and the safety profile is excellent. Worth trying for dogs with diagnosed arthritis or joint disease. Look for the NASC (National Animal Supplement Council) quality seal. Give for 4–6 weeks before evaluating effect — onset is gradual. Dasuquin (with avocado/soybean unsaponifiables) has slightly better evidence than basic glucosamine-only products.' },
  { name: 'Probiotics', evidence: 'moderate' as const, dose: 'Species-specific product per label', brands: 'Purina Fortiflora, Nutramax Proviable, Vetri-Science Probiotics', summary: 'Canine-specific probiotics have documented benefit for acute diarrhea and may support immune function. Human probiotic strains are different from canine strains and have much weaker evidence in dogs. Use veterinary-specific products (Fortiflora is the most studied). Situational usefulness is clearer than long-term daily use: after antibiotic treatment, during GI upset, in dogs with chronic GI sensitivity. Evidence for routine daily use in healthy dogs is weaker.' },
  { name: 'CBD / Cannabis Products', evidence: 'emerging' as const, dose: 'Research ongoing — no established veterinary dose', brands: 'Various — quality control highly variable', summary: 'A 2020 Colorado State University study showed CBD at 2–8mg/kg twice daily reduced seizure frequency in epileptic dogs. A 2018 Cornell study showed pain reduction in arthritic dogs. The evidence base is early but promising. Major caveats: the veterinary CBD market has minimal quality control — many products don\'t contain what the label claims. If trying CBD, use a product with a Certificate of Analysis from a third-party lab. Do not use THC-containing products — THC is toxic to dogs. Discuss with your vet before use.' },
  { name: 'Vitamin E', evidence: 'situational' as const, dose: 'Under veterinary guidance only', brands: 'Any quality human vitamin E', summary: 'Not needed for dogs on a complete and balanced commercial diet — supplementation can cause toxicity. Situational use: dogs on homemade raw diets (may be deficient) or specific skin conditions where a vet has recommended it. Do not supplement vitamin E without a specific clinical reason.' },
  { name: 'Multivitamins', evidence: 'unnecessary' as const, dose: 'N/A', brands: 'N/A', summary: 'Dogs eating a complete and balanced commercial food do not need multivitamin supplementation. The food already provides all required vitamins and minerals at appropriate levels. Adding a multivitamin risks over-supplementation — vitamin A and D toxicity from excess supplementation is documented. Save your money.' },
]

const EV_COLORS = { strong: { bg: 'rgba(42,106,58,0.05)', border: 'rgba(42,106,58,0.15)', label: '✓ Strong Evidence', color: '#2A6A3A' }, moderate: { bg: 'rgba(14,107,138,0.05)', border: 'rgba(14,107,138,0.15)', label: '~ Moderate Evidence', color: '#0E6B8A' }, emerging: { bg: 'rgba(200,149,42,0.05)', border: 'rgba(200,149,42,0.15)', label: '◎ Emerging Evidence', color: '#C8952A' }, situational: { bg: 'rgba(120,60,160,0.05)', border: 'rgba(120,60,160,0.15)', label: '△ Situational Use', color: '#7840A0' }, unnecessary: { bg: 'rgba(200,74,42,0.05)', border: 'rgba(200,74,42,0.15)', label: '✗ Not Needed for Healthy Dogs', color: '#C84A2A' } }

export default function DogSupplementsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{ title: 'Dog Supplements — What the Evidence Actually Shows', subtitle: 'The pet supplement market is largely unregulated and full of products with minimal evidence. Here\'s an honest, evidence-graded assessment of what works, what\'s overhyped, and what to skip.', category: 'Nutrition Science', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Dog Supplements', href: '/nutrition/dog-supplements' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Evidence Key</div>
          {Object.entries(EV_COLORS).map(([k, v]) => (
            <div key={k} className="flex items-center gap-2 py-1.5 border-b border-brand-border last:border-0">
              <span className="text-xs font-bold px-2 py-0.5 rounded flex-shrink-0" style={{ background: v.bg, color: v.color }}>{v.label}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related" links={[{ label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Dog Dental Care', href: '/health/dog-dental-care' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-supplements" />
      </>}
    >
      <div className="carloOS-article">
        <div style={{ background: 'rgba(200,149,42,0.06)', border: '1px solid rgba(200,149,42,0.18)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-warning)', marginBottom: '8px' }}>NASC Quality Seal</div>
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>The pet supplement industry has minimal regulatory oversight. The National Animal Supplement Council (NASC) quality seal indicates the manufacturer has undergone third-party audits, maintains adverse event reporting, and meets quality standards. It is not a guarantee of efficacy — but it is the best available quality signal. Look for it on any supplement you consider.</p>
        </div>

        {SUPPLEMENTS.map(s => {
          const ev = EV_COLORS[s.evidence]
          return (
            <div key={s.name} className="rounded-xl p-6 mb-5" style={{ background: ev.bg, border: `1px solid ${ev.border}` }}>
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <h2 className="font-display font-bold text-brand-dark text-xl m-0">{s.name}</h2>
                <span className="text-2xs font-bold px-3 py-1 rounded-pill flex-shrink-0" style={{ background: ev.bg, color: ev.color, border: `1px solid ${ev.border}` }}>{ev.label}</span>
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">{s.summary}</p>
              {s.dose !== 'N/A' && (
                <div className="text-xs mt-2">
                  <span className="font-bold text-brand-dark">Dose: </span>
                  <span className="text-brand-text-mid">{s.dose}</span>
                </div>
              )}
              {s.brands !== 'N/A' && (
                <div className="text-xs mt-1">
                  <span className="font-bold text-brand-dark">Quality options: </span>
                  <span className="text-brand-text-mid">{s.brands}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </ArticleLayout>
  )
}
