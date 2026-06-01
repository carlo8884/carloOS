import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Senior Dog Care — What Changes After 7 | Dog.com',
  description: 'The senior years can be the best years with your dog — if you know what\'s changing physically, what to monitor, and how to adapt care.',
  path: '/health/senior-dog-care',
  type: 'article',
})

const schema = combineSchemas(
  buildArticleSchema({
  siteId: 'dog-com',
  title: 'Senior Dog Care Guide',
  description: 'What changes after 7 and how to adapt care for maximum quality of life.',
  url: 'https://dog.com/health/senior-dog-care',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
}), buildMedicalWebPageSchema({
  name: 'Senior Dog Care Guide',
  description: 'What changes after 7 and how to adapt care for maximum quality of life.',
  url: 'https://dog.com/health/senior-dog-care',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
  medicalAudience: 'Caregiver',
}),
)

const FAQ_ITEMS = [
  {
    question: 'When is a dog considered senior?',
    answer: 'It varies by size. Small breeds (under 20 lbs): senior at 10–12 years. Medium breeds (20–50 lbs): senior at 8–10 years. Large breeds (50–90 lbs): senior at 7–8 years. Giant breeds (90+ lbs): senior at 5–6 years. Large and giant breeds age faster — a 7-year-old Great Dane is physiologically older than a 7-year-old Maltese.',
    answerText: 'Varies by size. Small breeds: senior at 10-12 years. Medium: 8-10 years. Large: 7-8 years. Giant breeds: 5-6 years.',
  },
  {
    question: 'How often should a senior dog see the vet?',
    answer: 'Every 6 months. Senior dogs change faster than annual monitoring captures. Twice-yearly exams allow earlier detection of kidney disease, cancer, dental disease, arthritis, and cognitive changes — when intervention is most effective. Blood pressure monitoring, which is not typically done at every visit in younger dogs, becomes more important in seniors.',
    answerText: 'Every 6 months. Senior dogs change faster than annual monitoring captures — twice-yearly allows earlier detection of kidney disease, cancer, and cognitive changes.',
  },
  {
    question: 'My senior dog is sleeping much more. Is this normal?',
    answer: 'Increased sleep is normal in senior dogs — their rest requirements genuinely increase with age. However, a sudden significant increase in sleep combined with other changes (decreased appetite, weight loss, difficulty rising) warrants veterinary evaluation. Differentiating normal aging from early disease is exactly what the twice-yearly senior exam is for.',
    answerText: 'Increased sleep is normal in seniors. A sudden dramatic increase combined with other changes (appetite loss, weight loss, difficulty rising) warrants veterinary evaluation.',
  },
  {
    question: 'Should I switch my dog to senior dog food?',
    answer: 'Most adult dogs don\'t need a dramatic switch, but adjustments make sense. Senior dogs have slower metabolisms — the same portions that maintained ideal weight at 4 will cause gradual weight gain at 9. Switch to a senior formula (lower calorie density, often higher protein to maintain muscle mass) or reduce portions of your current food by 10–15% and monitor body condition monthly. Dogs with diagnosed kidney disease should be on a prescription kidney diet — discuss with your vet.',
    answerText: 'Yes, generally. Senior dogs have slower metabolisms. Switch to senior formula or reduce portions and monitor body condition monthly. Kidney disease requires prescription diet.',
  },
  {
    question: 'What is Canine Cognitive Dysfunction and how do I recognize it?',
    answer: 'Canine Cognitive Dysfunction (CCD) is the dog equivalent of dementia, affecting approximately 28% of dogs aged 11–12 and over 68% of dogs aged 15–16. Signs (remember with the acronym DISHA): Disorientation (getting lost in familiar spaces, staring at walls), altered Interactions with family (less interested, sometimes more clingy), Sleep-wake cycle changes (awake at night, sleeping during day), House soiling accidents, reduced Activity. Prescription medication (selegiline/Anipryl) and specialized diets (Hill\'s b/d, Purina ProPlan NC) have documented benefit when started early.',
    answerText: 'CCD affects 28% of dogs age 11-12, 68% at 15-16. Signs (DISHA): Disorientation, changed Interactions, Sleep disruption, House soiling, reduced Activity. Treatable with medication and specialized diets.',
  },
]

export default function SeniorDogCarePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Senior Dog Care Guide',
        subtitle: 'The senior years can be some of the best years with your dog — if you know what\'s changing physically, what to watch for, and how to adapt care and expectations for maximum quality of life.',
        category: 'Senior Health Guide',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2025',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: 'Senior Dog Care', href: '/health/senior-dog-care' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'When Is a Dog Senior?', href: '#when' },
          { label: 'Metabolism & Weight', href: '#metabolism' },
          { label: 'Joint Health', href: '#joints' },
          { label: 'Kidney Function', href: '#kidneys' },
          { label: 'Cognitive Changes (CCD)', href: '#cognitive' },
          { label: 'Vision & Hearing', href: '#senses' },
          { label: 'Senior Vet Schedule', href: '#schedule' },
          { label: 'Exercise Adaptation', href: '#exercise' },
          { label: 'Nutrition', href: '#nutrition' },
          { label: 'FAQ', href: '#faq' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
          { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' },
          { label: 'Dog Dental Care', href: '/health/dog-dental-care' },
          { label: 'Find a Specialist', href: '/find-a-vet' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com"
          title="Free Dog Health Tips"
          subtitle="Practical guidance every Tuesday."
          source="health-senior-dog" />
      </>}
    >
      <div className="carloOS-article">

        <h2 id="when">When Is a Dog Senior?</h2>
        <p>The answer depends on size. Small breeds (under 20 lbs) age slowly — a 10-year-old Chihuahua is early senior. Giant breeds age rapidly — a 6-year-old Great Dane is already entering senior territory. Large breeds like Golden Retrievers and German Shepherds are considered senior at 7–8 years. This matters because it determines when to shift to twice-yearly vet exams, when to begin cancer screening, and when to start senior nutritional adjustments.</p>

        <h2 id="metabolism">Metabolism Slows — Weight Becomes a Management Task</h2>
        <p>Senior dogs burn fewer calories at rest than they did at their peak. The food portions that maintained ideal weight at age 4 will cause gradual weight gain by age 9 if not adjusted. This is biological, not behavioral — their metabolic rate genuinely decreases.</p>
        <p>Obesity in senior dogs is particularly damaging because it compounds every other age-related condition: it accelerates joint disease, increases cardiac load, worsens diabetes risk, and reduces mobility. Weigh your dog monthly in the senior years and adjust food accordingly. A reduction of 10–15% in portion size is often appropriate as dogs enter their senior phase even if body condition appears unchanged.</p>

        <h2 id="joints">Joint Health — Arthritis Is More Common Than Most Owners Realize</h2>
        <p>Arthritis affects the majority of dogs over 8 years. Because dogs mask pain instinctively — an evolutionary survival mechanism — arthritis is typically more advanced than owners recognize when it is finally diagnosed. The dog that has been moving &quot;a bit slower&quot; for six months may have significant joint disease.</p>
        <p>Signs of arthritis in senior dogs: slower to rise from rest, reluctance to use stairs, reduced interest in walks or play, stiffness after exercise (improving after 10–15 minutes of movement), changes in sleeping position (avoiding positions previously comfortable), reduced grooming of hard-to-reach areas. If you observe any of these changes, a veterinary evaluation is warranted — there are effective management options.</p>
        <p>Management: maintain lean body weight (the single most impactful intervention), omega-3 fatty acid supplementation (EPA/DHA fish oil — documented anti-inflammatory benefit at appropriate doses), joint supplements (glucosamine/chondroitin — look for NASC quality seal), NSAIDs when needed (prescription veterinary NSAIDs are safer than human equivalents — never give ibuprofen or naproxen), physical rehabilitation therapy (underwater treadmill is ideal — full cardiovascular benefit with zero joint impact).</p>

        <h2 id="kidneys">Kidney Function Declines</h2>
        <p>Chronic kidney disease (CKD) is one of the most common conditions in senior dogs. The kidney has significant reserve capacity — clinical signs of CKD typically do not appear until 75% of kidney function is lost. By the time a dog is drinking more water, urinating more, losing weight, and vomiting from kidney disease, the disease is advanced.</p>
        <p>This is why annual bloodwork matters from age 6. Blood urea nitrogen (BUN), creatinine, and SDMA (a more sensitive early marker) catch CKD before clinical signs develop — when dietary management, phosphorus restriction, and medications can meaningfully slow progression.</p>

        <h2 id="cognitive">Canine Cognitive Dysfunction (CCD)</h2>
        <p>CCD is the canine equivalent of Alzheimer&apos;s disease. It affects approximately 28% of dogs aged 11–12 and over 68% of dogs aged 15–16 (Salvin et al., Vet J 2010) — far more common than most owners realize. The reason it goes undiagnosed is that the early signs are subtle and easy to attribute to &quot;just getting old.&quot;</p>
        <p>Signs: getting disoriented in familiar spaces (found staring at a corner, can&apos;t find the food bowl), altered interaction with family (less engaged or more clingy than usual), nighttime waking and pacing (circadian rhythm disruption), housetraining accidents without apparent physical cause, reduced activity and responsiveness to cues they previously responded to.</p>
        <p>CCD is not reversible but is treatable. Prescription selegiline (Anipryl) has documented benefit for some dogs when started early. Specialized diets — Hill&apos;s Prescription Diet b/d and Purina Pro Plan Bright Mind — contain antioxidants and medium-chain triglycerides shown to support cognitive function. S-adenosylmethionine (SAMe) and apoaequorin (Neutricks) are supplements with some supporting evidence. Starting these at the first signs rather than waiting until advanced disease shows the best response.</p>

        <h2 id="senses">Vision &amp; Hearing Changes</h2>
        <p><strong>Nuclear sclerosis</strong> — the bluish haziness in the lens visible in many dogs from middle age — is normal aging and does not significantly affect vision. <strong>Cataracts</strong> (dense white opacity) do impair vision and are surgically correctable by a veterinary ophthalmologist when indicated.</p>
        <p>Hearing loss in senior dogs is common and irreversible — it is neurological deterioration, not mechanical. The practical response: begin teaching hand signals alongside voice commands in middle age (before hearing loss becomes apparent), so the transition is seamless. Dogs with significant hearing loss adapt well when owners adjust their communication approach.</p>

        <h2 id="schedule">Senior Veterinary Care Schedule</h2>
        <ul>
          <li><strong>Every 6 months: full physical examination</strong> — senior dogs change faster than annual monitoring captures</li>
          <li><strong>Every 6 months: blood pressure measurement</strong> — hypertension is common in senior dogs, particularly those with kidney disease or hypothyroidism</li>
          <li><strong>Annually: full bloodwork + urinalysis</strong> — kidney function, liver enzymes, thyroid, blood glucose, complete blood count, SDMA</li>
          <li><strong>Annually: dental assessment</strong> — periodontal disease causes pain that senior dogs hide; annual professional cleaning under anesthesia when indicated</li>
          <li><strong>Monthly: body weight and body condition scoring</strong> — unintentional weight loss is often the first sign of internal disease in senior dogs</li>
          <li><strong>Breed-specific from age 7</strong>: abdominal ultrasound for hemangiosarcoma-prone breeds (Golden Retrievers, German Shepherds), echocardiogram for cardiac-prone breeds</li>
        </ul>

        <h2 id="exercise">Adapting Exercise</h2>
        <p>Senior dogs need regular, appropriate exercise — not less exercise, but different exercise. Shorter walks more frequently rather than long demanding hikes. Swimming is ideal for arthritic senior dogs: full cardiovascular and muscular benefit with zero joint impact. Avoid high-impact activities (jumping, sustained running on hard surfaces) that stress aging joints.</p>
        <p>Watch for signals that your dog has reached their limit: lagging behind, panting excessively, stopping and refusing to continue. Senior dogs often want to please and will push past what their joints can actually handle — it is the owner&apos;s responsibility to recognize when to stop.</p>

        <h2 id="nutrition">Senior Nutrition</h2>
        <ul>
          <li><strong>Senior formula food</strong> — lower calorie density, typically higher protein to preserve muscle mass, adjusted phosphorus to support kidney health. Look for <a href="https://aafco.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAFCO</a> feeding trial labeling.</li>
          <li><strong>Fish oil (EPA/DHA)</strong> — documented anti-inflammatory benefit for joints and potential cognitive benefit. Discuss appropriate dosing with your vet.</li>
          <li><strong>Joint supplements</strong> — glucosamine and chondroitin sulfate; look for <a href="https://nasc.cc" rel="noopener" target="_blank" className="text-brand-primary hover:underline">NASC</a> quality seal on the label</li>
          <li><strong>Prescription kidney diet</strong> if CKD is diagnosed — reduced phosphorus formulas (Hill&apos;s k/d, Royal Canin Renal Support) slow disease progression</li>
          <li><strong>Cognitive function diets</strong> — Hill&apos;s b/d or Purina Pro Plan Bright Mind if CCD is present or concerning</li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQ_ITEMS} allowMultiple />
      </div>
    </ArticleLayout>
  )
}
