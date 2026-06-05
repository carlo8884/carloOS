import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Nutritional Secondary Hyperparathyroidism", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Metabolic Bone Diseases in Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/metabolic-bone-diseases-in-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Baines F.M. — UV-tool: evidence-based UVB recommendations for reptiles in captivity", publisher: "Journal of Zoo and Aquarium Research", url: "https://jzar.org/jzar/article/view/150" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Metabolic Bone Disease in Reptiles — Causes, Signs | Lizard.com', description: 'MBD is the most common nutritional disease in captive reptiles. Caused by calcium deficiency or UVB deprivation. Rubber jaw, tremors.', path: '/health/metabolic-bone-disease', type: 'article' })
const schema = combineSchemas(buildArticleSchema({ siteId: 'lizard-com', title: 'Metabolic Bone Disease in Reptiles', description: 'Causes, signs, and prevention of nutritional secondary hyperparathyroidism (MBD) in reptiles.', url: 'https://lizard.com/health/metabolic-bone-disease', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' }), buildMedicalWebPageSchema({ name: 'Metabolic Bone Disease in Reptiles', description: 'Causes, signs, and prevention of nutritional secondary hyperparathyroidism (MBD) in reptiles.', url: 'https://lizard.com/health/metabolic-bone-disease', authorName: 'Lizard.com Editorial', lastReviewed: '2025-05-01', medicalAudience: 'Caregiver' }))
export default function MBDPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Metabolic Bone Disease (MBD)', subtitle: 'Nutritional secondary hyperparathyroidism — the formal name for MBD — is the most common nutritional disease in captive reptiles and one of the most preventable. It is entirely a husbandry failure: inadequate UVB, inadequate calcium supplementation, or an imbalanced calcium-to-phosphorus ratio in the diet. Every MBD case represents a solvable husbandry problem.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health/sick-reptile-signs' }, { name: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
        { title: 'Calcium & D3 Supplementation', href: '/health/calcium-d3-supplementation', category: 'Health' },
        { title: 'Gut-Loading Guide', href: '/health/gut-loading-guide', category: 'Health' },
        { title: 'Vitamin A Deficiency', href: '/health/vitamin-a-deficiency', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Signs (Progressive)</div>
          {['Lethargy, weakness', 'Limbs trembling at rest', 'Difficulty walking — wobbly gait', '"Rubber jaw" — lower jaw bends', 'Pathological fractures (spontaneous)', 'Spinal deformities, kinking', 'Advanced: unable to lift body'].map(s => (
            <div key={s} style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px', color: 'rgba(238,240,228,0.6)' }}>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Vitamin A Deficiency', href: '/health/vitamin-a-deficiency' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-mbd" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <CalloutBox variant="warning" title="Early warning signs — act now">
          Lethargy, fine tremors when at rest, weakness lifting the body off the substrate, a softer-than-normal jaw, and a wobbly gait are the earliest red flags. By the time pathological fractures or visible spinal kinking appear, demineralization is severe. Audit UVB output (Solarmeter 6.5), calcium dusting frequency, and gut-loading immediately — and get a reptile-experienced vet involved.
        </CalloutBox>

        <h2>The Calcium-Vitamin D3-Phosphorus Triangle</h2>
        <p>MBD is fundamentally a calcium metabolism problem, but understanding it requires understanding the triangle of three interacting factors:</p>
        <p><strong>Calcium:</strong> Reptiles require dietary calcium (primarily through supplementation of feeder insects or plant food dusted with calcium carbonate powder) to build and maintain bone mineral density. Without adequate calcium intake, the parathyroid glands release parathyroid hormone (PTH) to mobilize calcium from bone — causing bone demineralization and the characteristic softening (rubber jaw, pathological fractures).</p>
        <p><strong>Vitamin D3:</strong> Dietary calcium is only absorbed from the gut in the presence of adequate vitamin D3. Diurnal reptiles (active in daylight) synthesize vitamin D3 from UVB radiation — without UVB or dietary D3 supplementation, calcium cannot be absorbed regardless of how much is ingested. This is why UVB is not optional for diurnal species: it is the primary D3 source.</p>
        <p><strong>Phosphorus:</strong> Feeder insects are naturally high in phosphorus and low in calcium — an inverted ratio compared to what reptiles require. The calcium-to-phosphorus ratio should be approximately 2:1 (calcium:phosphorus). Straight, unsupplemented insects have a ratio closer to 1:3. Gut-loading insects with calcium-rich foods and dusting with calcium powder corrects this inversion.</p>

        <h2>Causes — What's Wrong in the Setup</h2>
        <p><strong>Insufficient UVB:</strong> The most common cause in diurnal lizards. Signs: MBD developing despite calcium supplementation — the calcium is being offered but cannot be absorbed without D3. Diagnosis by process of elimination: if calcium supplementation is adequate and MBD is developing, UVB is the likely missing factor. Assess UVB with a <a href="https://solarmeter.com" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Solarmeter 6.5R</a> — confirm actual UVI at the basking position, not just the presence of a UVB bulb.</p>
        <p><strong>Insufficient calcium supplementation:</strong> Feeder insects not dusted at adequate frequency, calcium powder not reaching food (poor adhesion, dusting too far in advance), or inadequate gut-loading of insects with calcium-rich foods. Protocol: calcium carbonate powder (without D3 for diurnal UVB-supplemented reptiles) at every feeding for juveniles, every other feeding for adults.</p>
        <p><strong>High oxalate or phytate content in plant food (herbivores):</strong> Spinach, chard, and beet greens are high in oxalates that bind calcium and prevent absorption. These foods should not be the primary diet for herbivorous reptiles — dark leafy greens (collard, mustard, dandelion) with lower oxalate content are preferable.</p>
        <p><strong>Renal disease:</strong> Kidneys activate vitamin D3 to its functional form. Advanced kidney disease in senior reptiles can cause MBD despite adequate UVB and calcium — a different pathway requiring veterinary management.</p>

        <h2>Diagnosis and Staging</h2>
        <p>A reptile veterinarian diagnoses MBD through: physical examination (jaw flexibility, limb deformity, spinal changes), radiographs (decreased bone density, cortical thinning, pathological fractures, deformities visible on X-ray), and bloodwork (calcium, phosphorus, albumin — ionized calcium is the most clinically relevant measure but requires specialized equipment). Bloodwork in MBD can be paradoxically normal in early stages — the body maintains blood calcium by mobilizing bone, giving normal blood values while bones demineralize.</p>

        <h2>Treatment</h2>
        <p>Mild MBD caught early: correct the husbandry deficits (adequate UVB, increase calcium supplementation frequency) and allow the reptile to remineralize over weeks to months. Juveniles recover faster than adults. Calcium carbonate given orally (mixed into food or dissolved and given by dropper) at therapeutic doses during recovery accelerates remineralization.</p>
        <p>Moderate MBD with tremors or muscle weakness: veterinary evaluation for injectable calcium (calcium gluconate) for acute supplementation, subcutaneous fluids for hydration, and a detailed husbandry review. Pain management if fractures are present.</p>
        <p>Severe MBD with pathological fractures or severe deformities: guarded prognosis. Fractures in demineralized bone heal poorly. Long-term nutritional support, physical therapy to prevent contracture, and quality of life assessment. Some severely affected reptiles do not recover to functional mobility.</p>

        <h2>Prevention Protocol</h2>
        <p>For diurnal lizards on an insect diet: Arcadia T5 12% (desert species) or 6% (forest species) UVB tube, replaced every 12 months (output degrades before appearance fails). Calcium carbonate (no D3) dusted on all feeder insects at every feeding for juveniles, every other feeding for adults. Calcium with D3 once weekly for adult indoor animals (backup D3 source). Multivitamin dusting 2× weekly. Feeder insects gut-loaded with calcium-rich foods (collard greens, endive, escarole, commercial gut-load) for minimum 24 hours before feeding.</p>
        <div style={{ background: '#1a1f2b', border: '1px solid #2d3548', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#8a96ad', marginBottom: '8px' }}>Calcium + UVB Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: '#8a96ad', lineHeight: 1.55 }}>MBD prevention is calcium-with-correct-UVB. Browse calcium supplements (Repashy Calcium Plus, Rep-Cal) and UVB bulbs (Arcadia, Zoo Med). This is husbandry equipment, not a substitute for veterinary care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/reptile%20calcium%20powder%20uvb%20bulb%20arcadia?s=health-metabolic-bone-disease" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/reptile%20calcium%20powder%20uvb%20bulb%20arcadia?s=health-metabolic-bone-disease" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#7bc25c', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
