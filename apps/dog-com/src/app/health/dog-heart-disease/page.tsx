import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, ArticleSourcesList, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Heart Disease in Dogs — Murmurs, CHF Signs & Pimobendan | Dog.com', description: 'Heart disease in dogs: MMVD (mitral valve disease), DCM, murmur grading, when to start pimobendan (Vetmedin), and managing congestive heart failure.', path: '/health/dog-heart-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Heart Disease in Dogs', description: 'Mitral valve disease, DCM, murmur grading, and CHF management in dogs.', url: 'https://dog.com/health/dog-heart-disease', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Heart Disease in Dogs', description: 'MMVD, DCM, murmur grading, and congestive heart failure management.', url: 'https://dog.com/health/dog-heart-disease', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'My dog has a heart murmur — how worried should I be?', answer: 'A murmur is a finding, not a diagnosis. Murmurs are graded I–VI by loudness, but grade does not linearly correlate with disease severity — a Grade IV murmur is not necessarily worse disease than a Grade III. Echocardiography (cardiac ultrasound) is the gold standard for assessing actual cardiac enlargement, regurgitation severity, and ventricular function. When a significant murmur is detected, ask your veterinarian about a cardiology referral for an echo — that is what turns the murmur into actionable information.' },
  { question: 'What are the signs of congestive heart failure in dogs?', answer: 'Left-sided CHF (the most common form, from mitral valve disease): cough, particularly at night or at rest; increased resting respiratory rate — more than 30 breaths per minute while sleeping is abnormal; exercise intolerance; and lethargy. Right-sided CHF: abdominal distension from fluid (ascites), decreased appetite, and weight loss. Acute respiratory distress is an emergency requiring immediate veterinary treatment — do not wait with a dog struggling to breathe.' },
  { question: 'What is the most common heart disease in dogs?', answer: 'Myxomatous mitral valve disease (MMVD) — approximately 75% of all canine cardiac cases. The mitral valve degenerates and leaks, the heart compensates by enlarging, and eventually congestive heart failure can develop. It is strongly breed-associated: Cavalier King Charles Spaniels (nearly 100% affected by age 10), Dachshunds, Miniature Poodles, Shih Tzus, Yorkies, Maltese, Cocker Spaniels, and Chihuahuas. Dilated cardiomyopathy (DCM) accounts for roughly another 10%, concentrated in Dobermans, Boxers, and giant breeds.' },
  { question: 'When should a dog start pimobendan (Vetmedin)?', answer: 'Per current ACVIM guidelines, pimobendan is started when echocardiography confirms cardiac enlargement beyond specific thresholds (left atrium to aorta ratio of 1.6 or greater) — even before any CHF symptoms appear. The landmark EPIC trial (2016) showed this delays the onset of CHF by an average of 15 months. A murmur alone is not enough to make the decision; the echo measurement is. This is a prescribing decision for your veterinarian or cardiologist.' },
  { question: 'How do I check my dog\'s breathing rate at home?', answer: 'Count breaths for one minute while the dog is sleeping or fully at rest — one rise and fall of the chest is one breath. Over 30 breaths per minute at rest is abnormal. For dogs diagnosed with heart disease, logging a weekly resting respiratory rate is one of the most effective home-monitoring tools: a sustained rise above the dog\'s usual baseline is an early warning of decompensation before visible distress, and a reason to call your veterinarian or cardiologist.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function DogHeartDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Heart Disease in Dogs', subtitle: 'Heart disease is the leading cause of death in dogs over 10 years. Roughly 10% of dogs seen in general practice have some form of cardiac disease (BSAVA Manual of Canine and Feline Cardiorespiratory Medicine). Most cases are managed, not cured — but excellent management extends comfortable, good-quality life for years.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '11 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Heart Disease', href: '/health/dog-heart-disease' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Kidney Disease', href: '/health/dog-kidney-disease', category: 'Dog Health' }, { title: 'Senior Dog Care', href: '/health/senior-dog-care', category: 'Dog Health' }, { title: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide', category: 'Dog Health' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'MMVD — Most Common', href: '#mmvd' }, { label: 'DCM', href: '#dcm' }, { label: 'Murmur Grades', href: '#murmurs' }, { label: 'Pimobendan (EPIC trial)', href: '#pimobendan' }, { label: 'CHF Signs', href: '#chf' }, { label: 'Managing CHF', href: '#management' }, { label: 'Home-watch kit', href: '#kit' }, { label: 'FAQ', href: '#faq' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Cavalier King Charles', href: '/breeds/cavalier-king-charles' }, { label: 'Boxer Breed', href: '/breeds/boxer' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <div className="bg-brand-dark rounded-lg p-5 mb-4">
            <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">Heart Disease + Insurance</div>
            <h3 className="font-display text-base font-bold text-brand-white mb-2">Cardiac care is a lifetime cost</h3>
            <p className="text-xs text-white/60 mb-3 leading-relaxed">Lifetime cardiac medication + cardiology specialist visits commonly exceed $8,000. Insurance covers it — but only if enrolled before diagnosis.</p>
            <a href="https://vets.co/reviews/best-pet-insurance" className="inline-block text-xs font-bold text-brand-primary hover:underline">Compare pet insurance →</a>
          </div>
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-heart-disease" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog heart-disease breathing-rate checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog heart-disease breathing-rate checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the resting-respiratory-rate, one-minute count,
              and exercise-intolerance walk notes — a resting
              respiratory rate notebook so weekly sleeping-breath
              counts stay in one log (a sustained rise above the
              dog&apos;s usual baseline is an early warning of
              decompensation), a one-minute kitchen timer so the
              count is a full minute while the dog is sleeping, and
              a step-in padded dog harness for short, controlled
              walks when exercise intolerance shows up. Educational
              checklist, not a Vetmedin product list, not a
              Hill&apos;s h/d or Royal Canin Cardiac hop, and not a
              prescription. Heart-disease workups still belong with
              a veterinarian. Medical-records binders, AM/PM weekly
              pill organizers, hanging luggage scales, penlights,
              emergency contact cards, stretchers, vaccination
              record books, seat-belt tethers, puppy mats, mosquito
              dunks, monthly pill organizers, and clinic-visit
              carriers stay on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog heart-disease breathing-rate checklist"
              subtitle="Email the RRR-notebook, one-minute-timer, and step-in-harness notes. No spam."
              ctaText="Email my dog heart-disease breathing-rate checklist"
              source="health-dog-heart-disease-under-hero"
            />
          </div>

          <h2 id="mmvd">Myxomatous Mitral Valve Disease (MMVD)</h2>
          <p>MMVD is the most common form of heart disease in dogs — accounting for approximately 75% of all canine cardiac cases. The mitral valve, which separates the left atrium from the left ventricle, degenerates over time. The leaflets thicken, become nodular, and no longer close properly, allowing blood to flow backward (regurgitation) from the left ventricle into the left atrium with each heartbeat. The heart compensates by enlarging; eventually compensation fails and congestive heart failure (CHF) develops.</p>
          <p>MMVD is strongly breed-associated: Cavalier King Charles Spaniels (affects nearly 100% by age 10 — see Lewis et al., J Vet Cardiol; Häggström et al. — see our dedicated Cavalier guide), Dachshunds, Miniature Poodles, Shih Tzus, Yorkshire Terriers, Maltese, Cocker Spaniels, and Chihuahuas are most affected. In CKCSs the disease onset is earlier and more severe — a direct consequence of historical breeding practices that have since been addressed by the MVD Breeding Protocol.</p>

          <h2 id="dcm">Dilated Cardiomyopathy (DCM)</h2>
          <p>DCM is a disease of the heart muscle itself — the heart muscle weakens, the heart dilates (enlarges), and pumping efficiency decreases. Accounts for approximately 10% of canine cardiac cases. Strongly breed-associated: Doberman Pinschers (most commonly affected — published estimates of up to ~58% by age 7; Wess et al., J Vet Intern Med), Boxers (where it presents as ARVC — see Boxer guide), Great Danes, Irish Wolfhounds, Newfoundlands, Portuguese Water Dogs, and Scottish Deerhounds.</p>
          <p>DCM in Dobermans is particularly insidious — it frequently causes sudden cardiac death from ventricular fibrillation before any clinical signs are apparent. Annual echocardiograms and 24-hour Holter monitoring from age 3 are recommended for Dobermans. A DNA test for one mutation associated with DCM in Dobermans is available but does not identify all affected dogs.</p>
          <p><strong>Grain-free diet and DCM:</strong> The <a href="https://www.fda.gov/animal-veterinary" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a> investigated a potential association between grain-free diets (particularly those high in legumes — peas, lentils, chickpeas) and DCM in dogs not typically predisposed to the condition. The mechanism is not fully established and the investigation is ongoing, but the <a href="https://wsava.org/committees/global-nutrition-committee/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA</a> recommends avoiding diets with legumes as primary ingredients in dogs without a specific dietary necessity. WSAVA-compliant manufacturers (Purina, Hill's, Royal Canin) use traditional grain ingredients.</p>

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
            <li><strong>Furosemide (Lasix):</strong> Loop diuretic — removes excess fluid from the lungs. Dosage and frequency are determined and adjusted by the prescribing veterinarian to achieve the minimum effective dose (too much causes dehydration and kidney stress).</li>
            <li><strong>ACE inhibitor (enalapril or benazepril):</strong> Reduces cardiac workload and slows disease progression. Standard in CHF management.</li>
            <li><strong>Spironolactone:</strong> Potassium-sparing diuretic with cardiac protective effects. Often added to furosemide in CHF management.</li>
            <li><strong>Dietary sodium restriction:</strong> Reduces fluid retention — cardiac-specific diets (Hill's h/d, Royal Canin Cardiac) provide appropriate sodium levels.</li>
          </ul>
          <p>Advanced or refractory CHF may also include: torsemide (more potent diuretic), sildenafil (for pulmonary hypertension), digoxin (for rate control in atrial fibrillation), and in some cases thoracocentesis (draining pleural fluid) or abdominocentesis (draining ascites). A veterinary cardiologist is the appropriate specialist to guide CHF management — these medication combinations and their adjustments require cardiac expertise.</p>

          <h2 id="kit">A Simple Heart-Disease Home-Watch Kit</h2>
          <p>
            Three everyday physical supplies match the
            resting-respiratory-rate, one-minute count, and
            exercise-intolerance walk copy above: a resting
            respiratory rate notebook so weekly sleeping-breath
            counts stay in one log — a sustained rise above the
            dog&apos;s usual baseline is an early warning of
            decompensation before visible distress — a one-minute
            kitchen timer so the count is a full minute while the
            dog is sleeping or fully at rest (one rise and fall of
            the chest is one breath; over 30 breaths per minute at
            rest is abnormal), and a step-in padded dog harness for
            short, controlled walks when exercise intolerance
            shows up, so a collar does not press a coughing chest.
            These are household log-and-walk tools, not treatments.
            They do not diagnose a murmur, they do not replace
            echocardiography, they do not start pimobendan, they
            do not replace a veterinarian-directed cardiac diet
            (Hill&apos;s h/d, Royal Canin Cardiac), they do not
            treat left-sided or right-sided CHF, and they are not
            Vetmedin, furosemide, enalapril, or spironolactone.
            Pet medical records binders, AM/PM weekly pill
            organizers, digital hanging luggage scales, LED
            medical penlights, pet emergency contact cards,
            folding pet stretchers, vaccination record books,
            seat-belt tethers, foldable waterproof puppy mats,
            mosquito dunks, a monthly pill organizer, a
            soft-sided vet-visit carrier, a gum-color assessment
            chart, recovery food, a feeding syringe, digital pet
            scales, Julius-K9 / front-clip no-pull / rear-support
            / belly-support harnesses, and high-value vet-visit
            treats already live on other pages. This page does
            not hop medications. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops
              (resting respiratory rate notebook / one-minute
              kitchen timer / step-in padded dog harness).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1046 pet medical records binder /
              AM/PM weekly pill organizer / digital hanging
              luggage scale, #1045 LED medical penlight /
              pet emergency contact card / folding pet
              stretcher, #1044 pet vaccination record book /
              dog seat-belt tether / foldable waterproof
              puppy mat, #1043 mosquito dunks / monthly pill
              organizer / soft-sided vet-visit carrier,
              #1042 gum-chart / recovery-food /
              feeding-syringe, #1041 heat-pants /
              belly-band / exercise-pen, #1030
              high-value vet-visit treats,
              digital+pet+scale / digital+puppy+scale,
              pet first-aid kits, digital pet
              thermometers, and soft+dog+carrier /
              soft+pet+carrier. Vetmedin, furosemide,
              enalapril, Hill's h/d, Royal Canin Cardiac,
              and Rx ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the heart-disease home-watch kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page resting-respiratory-rate, one-minute
              count, and exercise-intolerance walk copy — a
              resting respiratory rate notebook, a one-minute
              kitchen timer, and a step-in padded dog harness.
              Everyday physical supplies only. They are not a
              ranked product list, they are not a Vetmedin /
              Hill&apos;s h/d / Royal Canin Cardiac hop, they
              are not the #1046 binder / AM-PM pill-organizer /
              luggage-scale hops, they are not the #1045
              penlight / contact-card / stretcher hops, they
              are not the #1044 vaccine-record / seat-belt-tether
              / puppy-mat hops, they are not the #1043
              mosquito-dunk / monthly-pill-organizer /
              clinic-carrier hops, they are not the #1042
              anemia gum-chart / recovery-food / syringe hops,
              they are not digital-pet-scale or first-aid-kit
              hops, and they do not replace a veterinarian.
              Dog.com earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/resting+respiratory+rate+notebook?s=health-dog-heart-disease"
                amazonLabel="Browse resting respiratory rate notebooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/one+minute+kitchen+timer?s=health-dog-heart-disease"
                amazonLabel="Browse one-minute kitchen timers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/step+in+padded+dog+harness?s=health-dog-heart-disease"
                amazonLabel="Browse step-in padded dog harnesses on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList
            sources={[
              {
                label: 'BSAVA Manual of Canine and Feline Cardiorespiratory Medicine (2nd ed.) — cardiac disease prevalence in general practice',
                publisher: 'British Small Animal Veterinary Association',
              },
              {
                label: 'ACVIM Consensus Guidelines for the Diagnosis and Treatment of Myxomatous Mitral Valve Disease in Dogs — staging criteria and pimobendan thresholds',
                url: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.15488',
                publisher: 'J Vet Intern Med (Boswood et al., 2019)',
              },
              {
                label: 'EPIC Trial — Effect of Pimobendan in Dogs with Preclinical Myxomatous Mitral Valve Disease and Cardiomegaly',
                url: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.14586',
                publisher: 'J Vet Intern Med (Boswood et al., 2016)',
              },
              {
                label: 'Prevalence of DCM in Doberman Pinschers — longitudinal echocardiographic study',
                url: 'https://onlinelibrary.wiley.com/doi/10.1111/j.1939-1676.2010.0527.x',
                publisher: 'J Vet Intern Med (Wess et al., 2010)',
              },
              {
                label: 'WSAVA Global Nutrition Committee — grain-free diet guidance and legume-associated DCM advisory',
                url: 'https://wsava.org/committees/global-nutrition-committee/',
                publisher: 'WSAVA',
              },
              {
                label: 'FDA Investigation: Potential Dietary Causes of DCM in Dogs',
                url: 'https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy',
                publisher: 'U.S. Food and Drug Administration',
              },
            ]}
          />
        </div>
      </ArticleLayout>
    </>
  )
}
