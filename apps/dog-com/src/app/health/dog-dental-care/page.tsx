import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Dental Care — 80% of Dogs Have Gum Disease by Age 3 | Dog.com',
  description: 'Periodontal disease is the most common health problem in dogs and the most preventable. VOHC-approved products, the correct brushing technique, and when to schedule professional cleaning.',
  path: '/health/dog-dental-care',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Dental Care Guide',
  description: '80% of dogs have gum disease by age 3. Complete guide to prevention and professional care.',
  url: 'https://dog.com/health/dog-dental-care',
  imageUrl: '',
  authorName: 'Dr. Lisa Tran, DVM, DAVDC',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

export default function DogDentalCarePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Dog Dental Care Guide',
        subtitle: '80% of dogs show signs of periodontal disease by age 3. Most owners discover their dog has severe dental disease only under anesthesia for cleaning. Here\'s how to stay ahead of it.',
        category: 'Preventive Health',
        authorName: 'Dr. Lisa Tran, DVM, DAVDC',
        authorCredentials: 'Veterinary Dentist · 12 years practice',
        authorAvatar: '👩‍⚕️',
        publishedAt: 'May 2025',
        readTime: '9 min',
        dvmReviewed: true,
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: 'Dog Dental Care', href: '/health/dog-dental-care' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Why Dental Disease Matters', href: '#why' },
          { label: 'Signs of Dental Disease', href: '#signs' },
          { label: 'Daily Brushing', href: '#brushing' },
          { label: 'VOHC-Approved Products', href: '#vohc' },
          { label: 'Professional Cleanings', href: '#professional' },
          { label: 'Anesthesia-Free Cleaning', href: '#anesthesia-free' },
          { label: 'Breed Risk', href: '#breeds' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Senior Dog Care', href: '/health/senior-dog-care' },
          { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
          { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com"
          title="Free Dog Health Tips"
          subtitle="DVM-written guidance every Tuesday."
          source="health-dental" />
      </>}
    >
      <div className="carloOS-article">

        <h2 id="why">Why Dental Disease Matters Beyond the Mouth</h2>

        <p>Periodontal disease is the most common health condition in dogs — not cancer, not arthritis, not allergies. By age 3, 80% of dogs show signs of it. The statistic that often gets owners&apos; attention: dogs are evolutionarily programmed to hide pain. A dog with stage 3 periodontal disease — significant bone loss, mobile teeth, infection — may continue eating, playing, and apparently thriving. This is not resilience. It is concealment of significant, chronic pain.</p>

        <p>Beyond pain, the connection between dental disease and systemic health is well documented in both dogs and humans. Oral bacteria enter the bloodstream through inflamed, vascularized gum tissue. Over years, bacterial deposits accumulate in the kidneys, heart valves, and liver. The association between periodontal disease and cardiac and kidney disease in dogs is an active area of veterinary research — the mechanism is not yet fully established, but the association is consistent.</p>

        <p>Periodontal disease is also largely preventable. That is the point of this guide.</p>

        <h2 id="signs">Signs of Dental Disease</h2>

        <ul>
          <li><strong>Bad breath</strong> — persistent bad breath beyond normal &quot;dog breath&quot; indicates significant bacterial load. Halitosis is not normal.</li>
          <li><strong>Yellow or brown tartar buildup</strong> — visible calculus on teeth, particularly the upper molars and canine teeth</li>
          <li><strong>Red, swollen, or bleeding gums</strong> — gingivitis, the earliest and most reversible stage of periodontal disease</li>
          <li><strong>Receding gums</strong> — gum tissue pulling away from tooth roots, indicating bone loss</li>
          <li><strong>Dropping food or chewing only on one side</strong> — a pain avoidance behavior</li>
          <li><strong>Pawing at face or mouth</strong></li>
          <li><strong>Reluctance to chew hard toys they previously enjoyed</strong></li>
          <li><strong>Facial swelling</strong> — tooth root abscess, requires urgent veterinary care</li>
          <li><strong>Loose or missing teeth</strong> — advanced disease</li>
        </ul>

        <h2 id="brushing">Daily Brushing — The Gold Standard</h2>

        <p>Daily toothbrushing is the single most effective home dental care measure available. Not weekly. Not every few days. Daily — because plaque calcifies into tartar within 24–48 hours, and tartar cannot be removed by brushing (it requires professional scaling). Daily brushing prevents plaque from mineralizing.</p>

        <p><strong>What to use:</strong> A soft-bristled dog toothbrush or finger brush. Veterinary-formulated toothpaste in a flavor your dog accepts — poultry, beef, vanilla mint. Never human toothpaste: it contains fluoride and xylitol, both toxic to dogs.</p>

        <p><strong>Technique:</strong> Focus on the outer surfaces of the upper molars and canine teeth — the areas with the highest plaque accumulation and the highest tartar progression risk. You do not need to brush the inner surfaces (the tongue does adequate maintenance there). Use circular or elliptical motions at a 45-degree angle to the gum line to disrupt bacteria at the gingival margin — where periodontal disease begins.</p>

        <p><strong>Building acceptance:</strong> Begin at puppy age. Start with finger touching of the gums without a brush. Introduce flavored toothpaste on your finger. Graduate to a finger brush. Graduate to a toothbrush. Take weeks if needed — patience in introduction dramatically improves lifetime compliance. Dogs that have never been brushed as adults can be trained, but it requires more consistent positive reinforcement work.</p>

        <h2 id="vohc">VOHC-Approved Products</h2>

        <p>The Veterinary Oral Health Council (VOHC) seal is the benchmark for dental products — it indicates the product has demonstrated efficacy in clinical trials meeting VOHC standards. The seal is not easily obtained and not paid for — a product either meets the evidence threshold or it does not.</p>

        <p>VOHC-approved products (partial list, as of 2025):</p>
        <ul>
          <li><strong>Dental chews:</strong> Greenies Dental Treats, OraVet Dental Hygiene Chews, Purina DentaLife Daily Oral Care Chews, Virbac C.E.T. Enzymatic Chews</li>
          <li><strong>Dental diets:</strong> Hill&apos;s Prescription Diet t/d, Royal Canin Dental, Purina Pro Plan Veterinary Diets DH</li>
          <li><strong>Water additives:</strong> Healthy Mouth (TropiClean), Virbac C.E.T. AquaDent</li>
          <li><strong>Toothpastes:</strong> Virbac C.E.T. Enzymatic Toothpaste (poultry and other flavors)</li>
        </ul>

        <p><strong>What to avoid:</strong> Raw bones, antlers, cow hooves, and nylon bones that are too hard — the &quot;2-second thumbnail test&quot; from veterinary dentists: if you press your thumbnail into the material and it leaves no mark within 2 seconds, the material is too hard and will fracture teeth. Tooth fractures are one of the most common preventable dental injuries in dogs and almost always require extraction or root canal.</p>

        <p><strong>The hierarchy:</strong> Brushing &gt; VOHC dental diet &gt; VOHC dental chews &gt; VOHC water additive. Each rung adds incremental benefit. None below brushing substitutes for brushing.</p>

        <h2 id="professional">Professional Dental Cleanings</h2>

        <p>Home care slows dental disease progression but does not eliminate the need for professional cleaning. A professional dental prophylaxis under general anesthesia allows what home care cannot: full-mouth dental radiographs (most dental disease is below the gum line and completely invisible without imaging), probing of each tooth for pocket depth, subgingival scaling (cleaning below the gum line — the clinically critical area), and extraction of unsalvageable teeth with appropriate nerve blocks.</p>

        <p><strong>Frequency:</strong> Once yearly for most dogs. Small breeds — Yorkshire Terriers, Chihuahuas, Dachshunds, Maltese, Cavalier King Charles Spaniels — are disproportionately affected by dental disease due to tooth crowding in smaller jaws and may need cleaning every 6 months from middle age. Your veterinarian will recommend frequency based on your dog&apos;s specific disease progression.</p>

        <p><strong>Pre-anesthetic bloodwork:</strong> Standard practice before dental cleanings in dogs over 7 years. Identifies kidney, liver, or other concerns that would modify anesthetic protocol. The risk of properly conducted veterinary anesthesia in a healthy dog is very low — far lower than the risk of untreated dental infection.</p>

        <h2 id="anesthesia-free">Anesthesia-Free Dental Cleaning — Why Veterinary Dentists Oppose It</h2>

        <p>Anesthesia-free dental cleaning (AFDC), offered by groomers and some veterinary practices, removes visible tartar from the crown surface. It does not: allow dental radiographs, probe gingival pockets, clean subgingival tartar (below the gum line — the clinically meaningful area), or treat root surfaces. The result is a dog with whiter-looking teeth and the appearance of dental health — while actual subgingival disease progresses untreated.</p>

        <p>The American Veterinary Dental College (AVDC) explicitly states that AFDC &quot;does not address periodontal disease and may cause harm to the gingival tissues.&quot; It is not a substitute for professional prophylaxis. It may create a false sense of dental health that delays proper care.</p>

        <h2 id="breeds">Breeds at Highest Risk</h2>

        <p>Small breeds are disproportionately affected due to jaw size relative to tooth size — crowded teeth accumulate plaque faster and allow less effective mechanical cleaning through chewing. Highest-risk breeds: Yorkshire Terrier, Maltese, Chihuahua, Dachshund, Pomeranian, Cavalier King Charles Spaniel, Shih Tzu. These breeds benefit from beginning brushing at 8 weeks, VOHC dental diets, and more frequent professional cleaning schedules than larger breeds.</p>

        <p>Brachycephalic breeds (French Bulldogs, Pugs, Boston Terriers) have significantly crowded teeth due to shortened facial structure, increasing risk. Their teeth may be angled or rotated abnormally, creating plaque traps that are difficult to address with brushing alone.</p>
      </div>
    </ArticleLayout>
  )
}
