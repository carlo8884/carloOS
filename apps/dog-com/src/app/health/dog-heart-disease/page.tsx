import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Heart Disease in Dogs — Murmurs, CHF Signs & Pimobendan | Dog.com', description: 'Heart disease in dogs: MMVD (mitral valve disease), DCM, murmur grading, when to start pimobendan (Vetmedin), and managing congestive heart failure. research-based.', path: '/health/dog-heart-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Heart Disease in Dogs', description: 'Mitral valve disease, DCM, murmur grading, and CHF management in dogs.', url: 'https://dog.com/health/dog-heart-disease', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Heart Disease in Dogs', description: 'MMVD, DCM, murmur grading, and congestive heart failure management.', url: 'https://dog.com/health/dog-heart-disease', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function DogHeartDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Heart Disease in Dogs', subtitle: 'Heart disease is the leading cause of death in dogs over 10 years. Approximately 10% of dogs seen in veterinary practice have some form of cardiac disease. Most cases are managed, not cured — but excellent management extends comfortable, good-quality life for years.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '11 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Heart Disease', href: '/health/dog-heart-disease' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'MMVD — Most Common', href: '#mmvd' }, { label: 'DCM', href: '#dcm' }, { label: 'Murmur Grades', href: '#murmurs' }, { label: 'Pimobendan (EPIC trial)', href: '#pimobendan' }, { label: 'CHF Signs', href: '#chf' }, { label: 'Managing CHF', href: '#management' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Cavalier King Charles', href: '/breeds/cavalier-king-charles' }, { label: 'Boxer Breed', href: '/breeds/boxer' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-heart-disease" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="mmvd">Myxomatous Mitral Valve Disease (MMVD)</h2>
          <p>MMVD is the most common form of heart disease in dogs — accounting for approximately 75% of all canine cardiac cases. The mitral valve, which separates the left atrium from the left ventricle, degenerates over time. The leaflets thicken, become nodular, and no longer close properly, allowing blood to flow backward (regurgitation) from the left ventricle into the left atrium with each heartbeat. The heart compensates by enlarging; eventually compensation fails and congestive heart failure (CHF) develops.</p>
          <p>MMVD is strongly breed-associated: Cavalier King Charles Spaniels (affects nearly 100% by age 10 — see our dedicated Cavalier guide), Dachshunds, Miniature Poodles, Shih Tzus, Yorkshire Terriers, Maltese, Cocker Spaniels, and Chihuahuas are most affected. In CKCSs the disease onset is earlier and more severe — a direct consequence of historical breeding practices that have since been addressed by the MVD Breeding Protocol.</p>

          <h2 id="dcm">Dilated Cardiomyopathy (DCM)</h2>
          <p>DCM is a disease of the heart muscle itself — the heart muscle weakens, the heart dilates (enlarges), and pumping efficiency decreases. Accounts for approximately 10% of canine cardiac cases. Strongly breed-associated: Doberman Pinschers (most commonly affected — up to 58% develop DCM by age 7), Boxers (where it presents as ARVC — see Boxer guide), Great Danes, Irish Wolfhounds, Newfoundlands, Portuguese Water Dogs, and Scottish Deerhounds.</p>
          <p>DCM in Dobermans is particularly insidious — it frequently causes sudden cardiac death from ventricular fibrillation before any clinical signs are apparent. Annual echocardiograms and 24-hour Holter monitoring from age 3 are recommended for Dobermans. A DNA test for one mutation associated with DCM in Dobermans is available but does not identify all affected dogs.</p>
          <p><strong>Grain-free diet and DCM:</strong> The FDA investigated a potential association between grain-free diets (particularly those high in legumes — peas, lentils, chickpeas) and DCM in dogs not typically predisposed to the condition. The mechanism is not fully established and the investigation is ongoing, but the WSAVA recommends avoiding diets with legumes as primary ingredients in dogs without a specific dietary necessity. WSAVA-compliant manufacturers (Purina, Hill's, Royal Canin) use traditional grain ingredients.</p>

          <h2 id="murmurs">Murmur Grading — What the Numbers Mean</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs border-collapse">
              <thead><tr className="border-b border-brand-border"><th className="text-left py-2 pr-4 font-bold text-brand-text-light">Grade</th><th className="text-left py-2 font-bold text-brand-text-light">Description</th></tr></thead>
              <tbody>
                {[
                  ['I/VI', 'Barely audible — heard only in a quiet room with careful auscultation. Very soft.'],
                  ['II/VI', 'Soft but consistently audible. No palpable thrill. Most early MMVD murmurs.'],
                  ['III/VI', 'Moderate intensity, easily audible. No thrill.'],
                  ['IV/VI', 'Loud. Palpable thrill present — you can feel vibration on the chest wall.'],
                  ['V/VI', 'Very loud. Thrill present. Audible with stethoscope barely touching the chest.'],
                  ['VI/VI', 'Loudest possible. Audible without stethoscope. Rare.'],
                ].map(([g, d]) => (
                  <tr key={g} className="border-b border-brand-border">
                    <td className="py-2.5 pr-4 font-mono font-bold text-brand-primary align-top whitespace-nowrap">{g}</td>
                    <td className="py-2.5 text-brand-text-mid">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Murmur grade does not linearly correlate with disease severity — a Grade IV murmur does not necessarily indicate more severe disease than a Grade III. Echocardiography (cardiac ultrasound) is the gold standard for assessing actual cardiac enlargement, valve regurgitation severity, and ventricular function. When a murmur is detected, a cardiology referral for echocardiography provides the information needed to guide treatment decisions.</p>

          <h2 id="pimobendan">Pimobendan (Vetmedin) — The EPIC Trial</h2>
          <p>Pimobendan (brand name Vetmedin) is a positive inotrope and vasodilator that improves cardiac output and reduces the workload on the failing heart. The landmark EPIC trial (2016) demonstrated that starting pimobendan in dogs with MMVD showing cardiac enlargement (but not yet in CHF) delayed the onset of CHF by an average of 15 months compared to placebo. This is a significant finding — nearly 15 additional months before the dog enters the more difficult-to-manage CHF stage.</p>
          <p>Current ACVIM guidelines: start pimobendan when echocardiography confirms cardiac enlargement beyond specific threshold measurements (left atrium to aorta ratio ≥1.6 on echo), regardless of clinical signs. A dog with a heart murmur and cardiac enlargement but no symptoms of CHF benefits from starting pimobendan now. This requires echocardiography to determine — a murmur alone is insufficient to make the decision. Ask your veterinarian about cardiology referral for echo when a significant murmur is detected.</p>

          <h2 id="chf">Signs of Congestive Heart Failure</h2>
          <p>CHF occurs when the heart can no longer compensate and fluid begins to accumulate — in the lungs (left-sided CHF, most common in MMVD) or in the abdomen (right-sided CHF, more common in DCM and pericardial effusion).</p>
          <p><strong>Left-sided CHF signs:</strong> Cough (particularly at night or at rest — not to be confused with kennel cough, which is a different cough pattern), increased resting respiratory rate (count breaths per minute while the dog is sleeping — over 30 breaths/minute at rest is abnormal and a sign to call your cardiologist), exercise intolerance, lethargy, and in acute decompensation — respiratory distress requiring emergency treatment.</p>
          <p><strong>Right-sided CHF signs:</strong> Abdominal distension (ascites — fluid in the abdomen), decreased appetite, weight loss, and potentially pleural effusion (fluid around the lungs).</p>
          <p>Teaching owners to count their dog's resting respiratory rate (RRR) is one of the most effective monitoring tools for dogs in CHF — an increase in RRR from the dog's normal baseline (usually established on pimobendan) is an early warning sign of decompensation before visible distress develops. Many cardiologists ask owners to log weekly RRR measurements.</p>

          <h2 id="management">Managing CHF</h2>
          <p>CHF management is multimodal — medications work in concert. Standard protocol for left-sided CHF from MMVD:</p>
          <ul>
            <li><strong>Pimobendan (Vetmedin):</strong> Already started in the pre-CHF stage for most dogs. Continues through CHF.</li>
            <li><strong>Furosemide (Lasix):</strong> Loop diuretic — removes excess fluid from the lungs. Dosage adjusted to the minimum effective dose (too much causes dehydration and kidney stress). BID to TID dosing for most CHF dogs.</li>
            <li><strong>ACE inhibitor (enalapril or benazepril):</strong> Reduces cardiac workload and slows disease progression. Standard in CHF management.</li>
            <li><strong>Spironolactone:</strong> Potassium-sparing diuretic with cardiac protective effects. Often added to furosemide in CHF management.</li>
            <li><strong>Dietary sodium restriction:</strong> Reduces fluid retention — cardiac-specific diets (Hill's h/d, Royal Canin Cardiac) provide appropriate sodium levels.</li>
          </ul>
          <p>Advanced or refractory CHF may also include: torsemide (more potent diuretic), sildenafil (for pulmonary hypertension), digoxin (for rate control in atrial fibrillation), and in some cases thoracocentesis (draining pleural fluid) or abdominocentesis (draining ascites). A veterinary cardiologist is the appropriate specialist to guide CHF management — these medication combinations and their adjustments require cardiac expertise.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
