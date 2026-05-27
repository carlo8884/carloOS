import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Labrador Retriever Health Guide — Obesity | Dog.com',
  description: 'A genetic mutation makes Labs unable to feel full. Complete guide to obesity, hip and elbow dysplasia, exercise-induced collapse, PRA.',
  path: '/health/labrador-health',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Labrador Retriever Health Guide',
  description: 'Obesity, hip dysplasia, EIC, PRA — complete Labrador Retriever health guide.',
  url: 'https://dog.com/health/labrador-health',
  imageUrl: 'https://images.unsplash.com/photo-1579213838058-2aeeda8d6e2d?w=1200&q=80&auto=format&fit=crop',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

export default function LabradorHealthPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Labrador Retriever Health Guide',
        subtitle: 'Labs have a genetic mutation that prevents normal satiety signaling — they don\'t feel full the way other dogs do. This single biological fact drives the most common health problems in America\'s most popular breed.',
        category: 'Breed Health Guide',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2025',
        readTime: '10 min',
        image: 'https://images.unsplash.com/photo-1579213838058-2aeeda8d6e2d?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Labrador Retriever',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: 'Labrador Health', href: '/health/labrador-health' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Obesity — The Core Issue', href: '#obesity' },
          { label: 'Hip & Elbow Dysplasia', href: '#joints' },
          { label: 'Exercise-Induced Collapse', href: '#eic' },
          { label: 'Progressive Retinal Atrophy', href: '#pra' },
          { label: 'Tricuspid Valve Dysplasia', href: '#tvd' },
          { label: 'Ear Infections', href: '#ears' },
          { label: 'Preventive Schedule', href: '#preventive' },
          { label: 'Choosing a Healthy Lab', href: '#choosing' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'Labrador Retriever Breed Profile', href: '/breeds/labrador-retriever' },
          { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' },
          { label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' },
          { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com"
          title="Free Dog Health Tips"
          subtitle="Practical guidance every Tuesday."
          source="health-labrador" />
      </>}
      relatedLinks={[
        { title: 'Labrador Breed Profile', href: '/breeds/labrador-retriever', category: 'Breed Guide' },
        { title: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food', category: 'Nutrition' },
        { title: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance', category: 'Insurance' },
      ]}
    >
      <div className="carloOS-article">
        <p>The Labrador Retriever has been America&apos;s most registered dog breed for over thirty consecutive years — a record earned through exceptional temperament, trainability, and adaptability. Labs are loyal, enthusiastic, and genuinely good-natured. They are also, in many ways, a breed that works against its own health: their legendary appetite is not simply enthusiasm for food. It is biology.</p>

        <h2 id="obesity">Obesity — The Central Health Challenge</h2>

        <div style={{ background: 'var(--brand-primary-pale)', borderLeft: '4px solid var(--brand-primary)', borderRadius: '0 10px 10px 0', padding: '18px 22px', margin: '24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '8px' }}>The POMC Gene Mutation</div>
          <p style={{ fontSize: '15px', color: 'var(--brand-dark)', fontWeight: 500, margin: 0, lineHeight: 1.6 }}>In 2016, researchers at the University of Cambridge identified a mutation in the POMC gene in Labrador Retrievers. This gene regulates hunger and satiety signaling in the brain. Labs with this mutation — which is extremely common in the breed — do not receive normal &quot;I am full&quot; signals after eating. They are not gluttonous. They are neurologically predisposed to feeling perpetually hungry. This is not an excuse to overfeed them. It is an explanation for why strict portion control is more critical in Labs than in almost any other breed.</p>
        </div>

        <BreedHealthCard
          name="Obesity"
          riskLevel="very-high"
          description="Obesity affects over 50% of Labrador Retrievers in the United States. The consequences are not cosmetic: obesity directly accelerates joint disease (hip and elbow dysplasia), increases cancer risk, contributes to diabetes, shortens lifespan by 2+ years, and significantly reduces quality of life. A 2002 Purina Life Span Study found that lean Labs lived 1.8 years longer than their slightly overweight littermates — the most compelling dietary longevity data in canine medicine."
          signs={['Cannot feel ribs without pressing firmly', 'No visible waist when viewed from above', 'Belly does not tuck when viewed from side', 'Reduced exercise tolerance', 'Reluctance to engage in activities they previously enjoyed']}
          management="Measure every meal — no free-feeding, ever. Treats count toward daily caloric intake (maximum 10% of calories). Use a measuring cup, not estimation. Weigh your Lab monthly. Body condition score is more useful than scale weight — aim for a score of 4–5 out of 9 where ribs are easily felt but not visible. Switch to a weight management formula if your Lab trends above ideal weight. Two measured meals daily minimum."
        />

        <h2 id="joints">Hip &amp; Elbow Dysplasia</h2>

        <BreedHealthCard
          name="Hip & Elbow Dysplasia"
          riskLevel="high"
          description="Developmental joint disorders with a strong genetic component. Hip dysplasia causes laxity and progressive arthritis in the hip joint; elbow dysplasia encompasses fragmented processes and osteochondrosis in the elbow. Both cause pain, progressive lameness, and reduced quality of life. Obesity dramatically accelerates the progression of both conditions — the most impactful non-surgical intervention for a Lab with joint disease is getting them to lean body weight."
          signs={['Difficulty rising from rest', 'Stiffness after exercise', 'Bunny-hopping gait — both hindlegs moving together', 'Forelimb lameness (elbow)', 'Reduced willingness to exercise or play', 'Muscle loss in affected limbs']}
          management="Purchase from OFA-certified breeders only — both parents should have OFA hip and elbow evaluations. Weight control. Omega-3 fatty acid supplementation (fish oil) has documented anti-inflammatory benefit. Joint supplements (glucosamine/chondroitin from reputable brands). Anti-inflammatory medication when needed. Physical rehabilitation therapy. Surgery (TPLO, total hip replacement) for severe cases."
          guideHref="/find-a-vet"
          guideLabel="Find an orthopedic specialist →"
        />

        <h2 id="eic">Exercise-Induced Collapse (EIC)</h2>

        <BreedHealthCard
          name="Exercise-Induced Collapse"
          riskLevel="high"
          description="EIC is a genetic condition unique to Labrador Retrievers (and a few closely related breeds). Affected dogs collapse after intense exercise — typically 5–20 minutes of strenuous activity — losing hindlimb coordination and muscle tone. Recovery occurs within 5–25 minutes. EIC is caused by a recessive mutation in the DNM1 gene. Dogs with two copies of the mutation (at risk) develop clinical signs; those with one copy (carrier) do not collapse but can pass the mutation to offspring."
          signs={['Collapse after strenuous activity', 'Hindlimb weakness and loss of coordination during exercise', 'Dragging or crossing of rear limbs', 'Full recovery within 30 minutes', 'Normal appearance and neurological function at rest']}
          management="No treatment exists. Management: avoid triggering levels of exercise intensity. Affected dogs can live full, active lives with modified exercise — they simply cannot engage in sustained intense activity. DNA testing identifies affected, carrier, and clear dogs. Reputable breeders test all breeding animals. If your Lab has had a collapse episode, request EIC DNA testing."
        />

        <h2 id="pra">Progressive Retinal Atrophy (PRA)</h2>

        <BreedHealthCard
          name="Progressive Retinal Atrophy (PRA)"
          riskLevel="moderate"
          description="PRA is a degenerative eye condition that causes progressive photoreceptor loss, leading to night blindness and eventually total blindness. It is genetic — the prcd-PRA mutation is testable via DNA. Reputable Lab breeders test for this mutation. There is no treatment; affected dogs adapt well to gradual vision loss in familiar environments."
          signs={['Reluctance to navigate dark environments', 'Bumping into objects in low light', 'Dilated pupils', 'Increased reflective appearance of eyes in low light', 'Progressive difficulty in bright conditions as disease advances']}
          management="No treatment available. Management focuses on environmental safety — keeping furniture arrangements consistent, using nightlights, avoiding hazards in low-light conditions. CAER eye certification and DNA testing of breeding dogs significantly reduces prevalence. If PRA is diagnosed, ophthalmologist consultation confirms severity and expected progression timeline."
        />

        <h2 id="tvd">Tricuspid Valve Dysplasia (TVD)</h2>

        <BreedHealthCard
          name="Tricuspid Valve Dysplasia"
          riskLevel="moderate"
          description="TVD is a congenital heart defect affecting the tricuspid valve on the right side of the heart. Labs have one of the higher prevalence rates of TVD among dog breeds. Severity ranges widely — mild cases cause no symptoms and a normal lifespan; severe cases cause exercise intolerance, right-sided heart failure, and significantly shortened life expectancy."
          signs={['Heart murmur detected at wellness exam (right-sided)', 'Exercise intolerance', 'Abdominal distension (ascites from right heart failure)', 'Weakness during activity']}
          management="Annual cardiac auscultation at wellness exam. Suspected murmur on the right side warrants echocardiogram by a veterinary cardiologist. Mild TVD: monitoring only. Moderate-severe: medications to manage cardiac workload and fluid accumulation. OFA cardiac certification of breeding dogs is recommended."
        />

        <h2 id="ears">Ear Infections</h2>

        <BreedHealthCard
          name="Recurrent Ear Infections"
          riskLevel="very-high"
          description="Labs' floppy ears trap moisture and reduce air circulation in the ear canal, creating ideal conditions for bacterial and yeast ear infections. Labs who swim regularly are at particularly high risk. Ear infections are among the most common reasons Labs visit the vet — and most are preventable with consistent ear hygiene."
          signs={['Head shaking', 'Scratching at ears or side of face', 'Odor from ears', 'Brown or dark discharge', 'Redness or swelling of ear canal opening', 'Sensitivity when ears are touched']}
          management="Check ears weekly. Dry ears thoroughly after every swim or bath — use a dry cotton ball or ear drying solution. Clean ears monthly with a veterinary ear cleaning solution (not cotton swabs into the canal). Treat infections promptly — untreated ear infections progress and become harder to resolve. Chronic or recurring infections warrant cytology to identify the specific organism and guide treatment."
        />

        <h2 id="preventive">Preventive Care Schedule for Labs</h2>

        <ul>
          <li><strong>Measure every meal from day one</strong> — the most impactful health habit for the breed</li>
          <li><strong>Buy from OFA-certified breeders</strong> — hips, elbows, CAER eyes, OFA cardiac, EIC DNA testing minimum</li>
          <li><strong>Annual bloodwork from age 5</strong> — catch hypothyroidism, early kidney or liver changes</li>
          <li><strong>Weekly ear checks</strong> — dry after all water exposure, clean monthly</li>
          <li><strong>Joint supplements from age 5</strong> — fish oil and glucosamine/chondroitin have documented benefit</li>
          <li><strong>Twice-yearly exams from age 8</strong></li>
          <li><strong>Body condition scoring monthly throughout life</strong> — more predictive of health outcomes than any other single metric</li>
        </ul>

        <h2 id="choosing">Choosing a Healthy Labrador</h2>

        <p>Color matters less than breeders imply. The data suggesting chocolate Labs have shorter lifespans and more health issues likely reflects historic breeding practices in chocolate lines (less health testing) rather than coat color itself. In any color, what matters is health testing of the parents.</p>

        <p>Minimum health testing for a reputable Lab breeder: OFA hip evaluation, OFA elbow evaluation, CAER eye examination (current, annual), OFA cardiac evaluation, EIC DNA test, and prcd-PRA DNA test. Request documentation for all of these — not verbal assurances. A breeder who cannot provide this documentation is not a reputable breeder regardless of how nice their website looks.</p>
      </div>
    </ArticleLayout>
  )
}
