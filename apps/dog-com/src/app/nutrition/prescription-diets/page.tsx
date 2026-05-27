import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Prescription Dog Food Explained — Kidney, Liver, Urinary & More | Dog.com', description: 'When prescription diet food matters and what each type does. Kidney disease, liver disease, urinary health, weight management, allergies, and joint support diets explained.', path: '/nutrition/prescription-diets', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Prescription Dog Food Explained', description: 'Kidney, liver, urinary, and weight management prescription diets explained.', url: 'https://dog.com/nutrition/prescription-diets', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const DIETS = [
  { name: 'Kidney Disease (Renal)', condition: 'Chronic Kidney Disease (CKD)', brands: "Hill's k/d, Royal Canin Renal Support, Purina NF Kidney Function", how: 'Reduced phosphorus (slows disease progression by reducing kidney workload). Reduced protein quantity but high quality. Controlled sodium. Increased water intake. Omega-3 fatty acids (anti-inflammatory for kidneys). Alkalinizing to reduce metabolic acidosis.', when: 'CKD stages 2–4. Earlier dietary intervention may slow progression. This is the most evidence-backed dietary intervention in canine medicine — renal diets demonstrably slow CKD progression in clinical studies.' },
  { name: 'Liver Disease (Hepatic)', condition: 'Hepatic disease, liver failure, portosystemic shunts', brands: "Hill's l/d, Royal Canin Hepatic", how: 'Reduced total protein (reduces ammonia production in dogs with compromised ammonia metabolism). High-quality, highly digestible protein. High carbohydrate for energy. Zinc supplementation. Reduced copper for copper storage disease breeds.', when: 'Active hepatic disease with elevated ammonia or documented liver failure. Copper storage disease in predisposed breeds (Bedlington Terriers, Dobermans, Labrador Retrievers).' },
  { name: 'Urinary Health', condition: 'Urinary crystals and stones (struvite, oxalate)', brands: "Hill's c/d, Royal Canin Urinary SO, Purina Pro Plan UR", how: 'Different crystal types require different dietary approaches. Struvite: dissolution formula acidifies urine, reduces magnesium/phosphorus. Oxalate: alkalinizes urine, reduces oxalate precursors. Both: increase urine dilution (lower stone concentration). Do not use urinary diets without identifying the crystal type — wrong diet for crystal type makes things worse.', when: 'Documented urinary crystals or stones on urinalysis/imaging. Crystal type identification is essential before dietary selection.' },
  { name: 'Weight Management', condition: 'Obesity, weight loss', brands: "Hill's Metabolic, Royal Canin Satiety Support, Purina OM", how: 'High fiber (satiety on fewer calories). High protein (preserves muscle mass during caloric restriction). Lower caloric density. Clinical studies show greater weight loss than restricted feeding of maintenance food.', when: 'Dogs that are failing to lose weight on restricted portions of regular food, dogs with moderate-to-severe obesity, dogs with mobility limitations that make caloric exercise supplementation difficult.' },
  { name: 'Hydrolyzed Protein / Novel Protein', condition: 'Food allergies, inflammatory bowel disease (IBD)', brands: "Hill's z/d (hydrolyzed), Royal Canin HP (hydrolyzed), Hill's d/d (novel protein)", how: 'Hydrolyzed: proteins broken into tiny fragments too small for the immune system to recognize as allergens. Novel protein: uses a protein source the dog has never been exposed to (duck, venison, rabbit). Both require strict dietary trial — no other food, treats, or flavored medications for 8–12 weeks minimum.', when: '8–12 week elimination diet trial is the gold standard for food allergy diagnosis. True food allergies are less common than skin and environmental allergies but do occur.' },
  { name: 'Joint Support', condition: 'Osteoarthritis, joint disease', brands: "Hill's j/d, Purina JM", how: 'Very high omega-3 fatty acid content (EPA/DHA) — documented anti-inflammatory benefit. Higher than achievable with typical fish oil supplementation of regular food. Contains glucosamine and chondroitin.', when: 'Moderate-to-severe osteoarthritis where dietary anti-inflammatory contribution is desired alongside NSAID therapy or as a primary approach in mild cases.' },
  { name: 'Gastrointestinal', condition: 'Chronic GI disease, pancreatitis, IBD', brands: "Hill's i/d, Royal Canin GI Low Fat, Purina EN", how: 'Highly digestible, low-fat (pancreatitis), reduced fiber or adjusted fiber composition. Prebiotic fiber sources. Designed to minimize digestive workload.', when: 'Chronic GI disease not resolving with dietary modification of regular food, documented pancreatitis (low-fat), or IBD requiring dietary management alongside medication.' },
]

export default function PrescriptionDietsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{ title: 'Prescription Dog Food Explained', subtitle: 'Prescription diets are not premium marketing — they are clinically formulated foods for specific medical conditions, with meaningful research behind them. Here\'s when each type matters.', category: 'Nutrition Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Prescription Diets', href: '/nutrition/prescription-diets' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={DIETS.map(d => ({ label: d.name, href: `#${d.name.toLowerCase().replace(/[\s\/&,()]/g, '-').replace(/-+/g, '-')}` }))} />
        <RelatedLinks title="Related" links={[{ label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' }, { label: 'Dog Supplements', href: '/nutrition/dog-supplements' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-prescription" />
      </>}
    >
      <div className="carloOS-article">
        <div style={{ background: 'var(--brand-primary-pale)', borderLeft: '4px solid var(--brand-primary)', borderRadius: '0 10px 10px 0', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '8px' }}>Important</div>
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>Prescription diets require veterinary authorization because using the wrong diet for the wrong condition can be harmful. Do not use a renal diet for a dog without kidney disease, or a urinary diet without knowing the crystal type. These foods are tools for specific diagnoses, not general upgrades.</p>
        </div>

        {DIETS.map((diet, i) => (
          <div key={diet.name} style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-dark)', marginTop: 0, marginBottom: '6px' }}>{diet.name}</h2>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--brand-primary)', letterSpacing: '0.08em', marginBottom: '16px' }}>{diet.condition}</div>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-text-light)', marginBottom: '6px' }}>How It Works</div>
                <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', lineHeight: 1.7, margin: 0 }}>{diet.how}</p>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-text-light)', marginBottom: '6px' }}>When to Use It</div>
                <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', lineHeight: 1.7, margin: 0 }}>{diet.when}</p>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-text-light)', marginBottom: '6px' }}>Options</div>
                <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0 }}>{diet.brands}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ArticleLayout>
  )
}
