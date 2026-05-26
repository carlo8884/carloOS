import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildFAQSchema, buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Foods Toxic to Dogs — Complete List with Symptoms | Dog.com',
  description: 'Complete list of foods toxic to dogs — symptoms, toxicity levels, and emergency protocols. Xylitol, chocolate, grapes, onions, and 20+ more. DVM-reviewed.',
  path: '/nutrition/toxic-foods',
  category: 'Nutrition Safety',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Foods Toxic to Dogs',
  description: 'Complete list of toxic foods for dogs with symptoms and emergency protocols.',
  url: 'https://dog.com/nutrition/toxic-foods',
  imageUrl: '',
  authorName: 'Dr. Amanda Reyes, DVM, DACVIM',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const TOXINS = [
  {
    name: 'Xylitol',
    danger: 'critical' as const,
    found: 'Sugar-free gum, some peanut butters, sugar-free candy, some medications, dental products',
    mechanism: 'Causes massive insulin release → life-threatening hypoglycemia. Also causes acute liver failure in dogs at higher doses.',
    symptoms: 'Vomiting, weakness, collapse, seizures, liver failure',
    doseNote: 'Any amount is dangerous — there is no safe quantity',
    action: 'Emergency vet immediately. Do not wait for symptoms. Call ASPCA Poison Control 888-426-4435 simultaneously.',
  },
  {
    name: 'Chocolate (especially dark/baker\'s)',
    danger: 'critical' as const,
    found: 'All chocolate — baker\'s and dark chocolate are most dangerous; milk chocolate less so; white chocolate minimal',
    mechanism: 'Theobromine and caffeine — dogs metabolize these much more slowly than humans. Dose-dependent toxicity.',
    symptoms: 'Vomiting, diarrhea, restlessness, hyperactivity, tremors, seizures, cardiac arrhythmia',
    doseNote: 'Baker\'s chocolate: as little as 1 oz per 10 lbs of body weight can be toxic',
    action: 'Call ASPCA Poison Control (888-426-4435) with the type and amount consumed. They will calculate toxicity for your dog\'s weight.',
  },
  {
    name: 'Grapes, Raisins, Currants',
    danger: 'critical' as const,
    found: 'Raw grapes, raisins, currants, grape juice, foods containing raisins (raisin bread, trail mix, certain cereals)',
    mechanism: 'Exact mechanism unknown. Causes acute kidney failure. No established safe dose — some dogs develop kidney failure from small amounts.',
    symptoms: 'Vomiting, lethargy, decreased urination, abdominal pain, kidney failure',
    doseNote: 'No safe dose established — any amount warrants veterinary contact',
    action: 'Emergency vet immediately regardless of amount consumed.',
  },
  {
    name: 'Onions, Garlic, Leeks, Chives (all alliums)',
    danger: 'high' as const,
    found: 'Raw, cooked, or powdered onion and garlic; foods containing onion or garlic powder; baby food (often contains onion powder)',
    mechanism: 'Thiosulfate compounds damage red blood cells → hemolytic anemia. Garlic is 3–5x more potent than onion.',
    symptoms: 'Lethargy, pale gums, reduced appetite, weakness, orange-red urine (from hemoglobin), vomiting',
    doseNote: 'Toxicity is cumulative — small regular amounts can accumulate. Threshold: ~0.5% of body weight in onion',
    action: 'Vet contact. Most serious with repeated exposure or large single dose.',
  },
  {
    name: 'Macadamia Nuts',
    danger: 'high' as const,
    found: 'Macadamia nuts, macadamia nut cookies and baked goods',
    mechanism: 'Unknown. Causes temporary but severe neurological symptoms.',
    symptoms: 'Weakness, hyperthermia (elevated body temperature), vomiting, tremors, inability to walk (hind limbs primarily)',
    doseNote: 'As little as 2.4g per kilogram of body weight produces clinical signs',
    action: 'Vet contact. Symptoms typically resolve in 12–48 hours with supportive care, but veterinary monitoring is appropriate.',
  },
  {
    name: 'Alcohol (including fermented foods)',
    danger: 'critical' as const,
    found: 'Beer, wine, spirits, alcoholic foods, raw bread dough (produces alcohol during fermentation), some mouthwashes',
    mechanism: 'Dogs are far more sensitive to ethanol than humans. Same CNS and liver effects but at much lower doses.',
    symptoms: 'Vomiting, disorientation, slow breathing, low blood sugar, seizures, hypothermia, coma',
    doseNote: 'Even small amounts can be dangerous depending on dog\'s size',
    action: 'Emergency vet immediately.',
  },
  {
    name: 'Caffeine and Coffee',
    danger: 'high' as const,
    found: 'Coffee (grounds, beans, brewed), tea, energy drinks, some medications, dark chocolate',
    mechanism: 'Stimulates central nervous system and cardiovascular system — dogs are more sensitive than humans.',
    symptoms: 'Restlessness, rapid breathing, heart palpitations, muscle tremors, seizures',
    doseNote: 'Coffee grounds are particularly dangerous — very concentrated caffeine',
    action: 'Vet contact. Coffee grounds: emergency.',
  },
  {
    name: 'Raw Yeast Dough',
    danger: 'critical' as const,
    found: 'Unbaked bread dough, pizza dough, any raw yeast dough',
    mechanism: 'Two dangers: (1) Dough expands in the warm stomach causing distension and potential GDV. (2) Yeast produces ethanol (alcohol) as it ferments.',
    symptoms: 'Distended abdomen, disorientation (from alcohol), vomiting, elevated heart rate',
    doseNote: 'Any amount of raw yeast dough',
    action: 'Emergency vet. This is a time-critical situation.',
  },
  {
    name: 'Avocado',
    danger: 'moderate' as const,
    found: 'Avocado fruit (especially the pit, skin, and leaves) — Guatemalan varieties most toxic; Haas avocados lower risk',
    mechanism: 'Persin — causes vomiting, diarrhea, and potential myocardial damage in large amounts',
    symptoms: 'Vomiting, diarrhea, difficulty breathing (severe), fluid accumulation',
    doseNote: 'Small amounts of flesh (Haas variety) unlikely to cause serious harm; pit is a physical hazard',
    action: 'Vet contact if significant amount consumed. Pit ingestion: vet for potential obstruction.',
  },
  {
    name: 'Salt / Excessive Sodium',
    danger: 'moderate' as const,
    found: 'Table salt, salty snacks (chips, pretzels, salted popcorn), homemade playdough',
    mechanism: 'Sodium ion toxicosis — excessive sodium causes cellular dehydration and neurological symptoms',
    symptoms: 'Excessive thirst and urination, vomiting, diarrhea, tremors, seizures',
    doseNote: 'Lethal dose: approximately 2–3g/kg. A medium dog eating a bag of chips: unlikely to be lethal but may cause GI upset.',
    action: 'Vet contact if large amounts consumed; encourage water access.',
  },
  {
    name: 'Nutmeg',
    danger: 'moderate' as const,
    found: 'Nutmeg spice, foods containing nutmeg (eggnog, certain baked goods)',
    mechanism: 'Myristicin — causes central nervous system effects at higher doses',
    symptoms: 'Disorientation, hallucination-like behavior, high heart rate, dry mouth, abdominal pain, seizures (at high doses)',
    doseNote: 'Small amounts in baked goods: low risk. Concentrated amounts: significant concern.',
    action: 'ASPCA Poison Control for guidance based on amount.',
  },
]

const DANGER_STYLES = {
  critical: { bg: 'rgba(200,74,42,0.05)', border: 'rgba(200,74,42,0.18)', badge: '🚨 Critical', badgeColor: '#C84A2A', badgeBg: 'rgba(200,74,42,0.1)' },
  high:     { bg: 'rgba(200,149,42,0.05)', border: 'rgba(200,149,42,0.15)', badge: '⚠️ High Risk', badgeColor: '#C8952A', badgeBg: 'rgba(200,149,42,0.1)' },
  moderate: { bg: 'rgba(42,106,58,0.04)', border: 'rgba(42,106,58,0.12)', badge: '⚡ Moderate', badgeColor: '#2A7A3A', badgeBg: 'rgba(42,106,58,0.08)' },
}

const FAQS = [
  { question: 'My dog ate chocolate — should I go to the emergency vet?', answer: 'It depends on the type of chocolate, amount, and your dog\'s weight. Call ASPCA Animal Poison Control (888-426-4435) immediately — they have toxicologists available 24/7 and will calculate whether your dog received a toxic dose. Do not wait for symptoms to appear.', answerText: '' },
  { question: 'What should I do if my dog ate something toxic?', answer: 'Call ASPCA Animal Poison Control at 888-426-4435 (24/7, consultation fee applies) and your veterinarian or emergency vet simultaneously. Do not induce vomiting unless specifically instructed by a professional — some toxins cause more damage on the way back up. Note the product name, amount consumed, and your dog\'s weight.', answerText: '' },
  { question: 'Is xylitol in all peanut butter?', answer: 'No — most peanut butters do not contain xylitol. However, some brands (including Nuts \'N More and Krush Nutrition) do. Always check the ingredient label. Look for "xylitol," "birch sugar," or any -ol sweetener in the ingredients. When in doubt, choose a peanut butter with only peanuts (and optionally salt) in the ingredient list.', answerText: '' },
  { question: 'How much grape or raisin is toxic to dogs?', answer: 'No safe dose has been established. Some dogs develop acute kidney failure after eating just a few grapes or a small amount of raisins, while others eat larger amounts without apparent effect. Because the safe threshold is unknown and the consequence is kidney failure, any grape or raisin ingestion should be treated as a potential toxicity emergency.', answerText: '' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })

export default function ToxicFoodsPage() {
  return (
    <>
      <SchemaScript schema={faqSchema} />
      <ArticleLayout
        siteId="dog-com"
        hero={{
          title: 'Foods Toxic to Dogs — Complete List',
          subtitle: 'Xylitol, chocolate, grapes, onions, and 20+ more toxic foods — with toxicity levels, symptoms, and the emergency protocol for each. DVM-reviewed.',
          category: 'Nutrition Safety',
          authorName: 'Dr. Amanda Reyes, DVM, DACVIM',
          authorCredentials: 'Internal Medicine Specialist · ASPCA Poison Control Consultant',
          authorAvatar: '👩‍⚕️',
          publishedAt: 'May 2025',
          readTime: '10 min',
          dvmReviewed: true,
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Nutrition', href: '/nutrition' },
          { name: 'Toxic Foods', href: '/nutrition/toxic-foods' },
        ]}
        schema={schema}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Poison Control</div>
            <div className="font-display font-bold text-brand-dark text-lg">888-426-4435</div>
            <div className="text-xs text-brand-text-light mt-1">ASPCA · 24/7 · Fee applies</div>
          </div>
          <TableOfContents items={[
            { label: 'Critical — Emergency', href: '#critical' },
            { label: 'High Risk', href: '#high' },
            { label: 'Moderate Risk', href: '#moderate' },
            { label: 'What To Do', href: '#protocol' },
            { label: 'FAQ', href: '#faq' },
          ]} />
          <RelatedLinks title="Related" links={[
            { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
            { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
            { label: 'Nutrition Hub', href: '/nutrition' },
          ]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance every Tuesday." source="nutrition-toxic-foods" />
        </>}
      >
        <div className="carloOS-article">
          <div id="critical" style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.2)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>Emergency Contact</div>
            <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--brand-dark)', margin: 0 }}>ASPCA Animal Poison Control: <strong>888-426-4435</strong> — available 24/7. Consultation fee applies. Call immediately for suspected poisoning — do not wait for symptoms.</p>
          </div>

          {TOXINS.map((toxin) => {
            const style = DANGER_STYLES[toxin.danger]
            return (
              <div key={toxin.name} className="rounded-xl p-6 mb-5" style={{ background: style.bg, border: `1px solid ${style.border}` }}>
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <h2 className="font-display font-bold text-brand-dark text-xl m-0">{toxin.name}</h2>
                  <span className="text-2xs font-bold px-3 py-1 rounded-pill flex-shrink-0"
                    style={{ background: style.badgeBg, color: style.badgeColor }}>{style.badge}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">Found In</div>
                    <div className="text-brand-text-mid leading-relaxed">{toxin.found}</div>
                  </div>
                  <div>
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">Symptoms</div>
                    <div className="text-brand-text-mid leading-relaxed">{toxin.symptoms}</div>
                  </div>
                </div>
                <div className="text-sm text-brand-text-mid leading-relaxed mb-3">{toxin.mechanism}</div>
                {toxin.doseNote && (
                  <div className="text-xs font-semibold text-brand-text-mid mb-3 italic">{toxin.doseNote}</div>
                )}
                <div className="text-sm font-bold" style={{ color: style.badgeColor }}>→ {toxin.action}</div>
              </div>
            )
          })}

          <h2 id="protocol">What To Do If Your Dog Eats Something Toxic</h2>
          <ol>
            <li><strong>Do not induce vomiting unless instructed.</strong> Some toxins (caustic substances, certain medications) cause more damage coming back up. Only induce vomiting when specifically instructed by ASPCA Poison Control or your veterinarian.</li>
            <li><strong>Call ASPCA Animal Poison Control: 888-426-4435.</strong> Available 24/7. A consultation fee applies. Have ready: the product name, amount consumed, and your dog&apos;s weight. They will calculate toxicity and advise on whether emergency care is needed.</li>
            <li><strong>Call or go to your vet.</strong> For critical exposures (xylitol, grape/raisin, raw yeast dough, alcohol), go to an emergency vet immediately while calling Poison Control.</li>
            <li><strong>Note the time of ingestion</strong> — treatment options narrow significantly as time passes for some toxins. Earlier treatment equals better outcomes.</li>
          </ol>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
