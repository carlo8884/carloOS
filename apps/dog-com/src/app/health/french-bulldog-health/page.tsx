import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Brachycephalic Airway Syndrome', url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/brachycephalic-airway-syndrome-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Brachycephalic Breeds and BOAS — Health Resources', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/brachycephalic-syndrome', publisher: 'AVMA' },
  { label: 'ACVS: Brachycephalic Syndrome (BAS)', url: 'https://www.acvs.org/small-animal/brachycephalic-syndrome', publisher: 'ACVS' },
  { label: 'Roedler FS et al. How strongly does conformity affect the respiratory phenotype? Correlations between brachycephaly and BOAS in French Bulldogs. PLoS ONE. 2013;8(3):e63551.', publisher: 'PLoS ONE' },
]


export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'French Bulldog Health Guide — BOAS, IVDD | Dog.com',
  description: 'French Bulldogs are one of the most medically complex breeds. Complete guide to BOAS surgery, IVDD spine disease, heat danger, skin fold infections.',
  path: '/health/french-bulldog-health',
  type: 'article',
})

const FAQS = [
  { question: 'What is BOAS in French Bulldogs?', answer: 'Brachycephalic Obstructive Airway Syndrome — the umbrella term for the airway abnormalities created by extreme flat-faced breeding: stenotic nares (narrow nostrils), an elongated soft palate partially blocking the airway, a hypoplastic (abnormally narrow) trachea, and everted laryngeal saccules. Together these restrict airflow at multiple levels. Many Frenchies with significant BOAS look "normal" to owners who have never seen the breed without it — which is why every French Bulldog should have a formal BOAS assessment by a veterinarian, not just a casual listen.' },
  { question: 'Does my French Bulldog need BOAS surgery?', answer: 'That depends on the BOAS grade your veterinarian assigns. Surgery (widening the nares, shortening the soft palate, removing everted saccules) significantly improves quality of life for Grade 2–3 affected dogs, and pursuing it early matters — secondary airway changes worsen outcomes over time. Signs that warrant assessment: noisy breathing at rest, snoring, exercise intolerance, frequent overheating, and sleep apnea. Blue-tinged gums during exertion are an emergency.' },
  { question: 'Why do French Bulldogs overheat so easily?', answer: 'Their compromised airway severely limits panting — the primary cooling mechanism in dogs — so heatstroke can develop in a Frenchie at temperatures that are comfortable for humans. The rules on this page: never leave a Frenchie in a car, limit outdoor activity in warm weather, keep summer walks before 8am or after 8pm, and always ensure access to a cool environment. Heatstroke is fatal if not treated immediately.' },
  { question: 'Are French Bulldogs prone to back problems?', answer: 'Yes — Frenchies are chondrodystrophic, so their spinal discs degenerate early and herniate at much higher rates than other breeds (IVDD). Prevention: ramps or steps instead of jumping on and off furniture, lean body weight, and avoiding impact activities. Sudden-onset severe neurological signs — hindlimb weakness, a wobbly gait, inability to walk, or loss of bladder/bowel control — are a surgical emergency; recovery prognosis is significantly better when surgery happens within 24 hours.' },
  { question: 'How do I choose a healthier French Bulldog puppy?', answer: 'Look for open, wide nostrils (actual visible holes, not pinched slits — nare width is the most visible indicator of airway health), BOAS assessment documentation on the breeding stock, OFA health testing (hips, patella, cardiac, and BOAS minimum), and a breeder who asks you questions about your living situation and commitment. Avoid the "extreme" look — maximally flat face, deeply furrowed skin, very small nostrils — which is associated with the worst health outcomes.' },
]

const schema = combineSchemas(
  buildArticleSchema({
  siteId: 'dog-com',
  title: 'French Bulldog Health Guide',
  description: 'BOAS, IVDD, heat danger, skin folds — complete French Bulldog health guide.',
  url: 'https://dog.com/health/french-bulldog-health',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
}), buildMedicalWebPageSchema({
  name: 'French Bulldog Health Guide',
  description: 'BOAS, IVDD, heat danger, skin folds — complete French Bulldog health guide.',
  url: 'https://dog.com/health/french-bulldog-health',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
  medicalAudience: 'Caregiver',
}), buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }),
)

export default function FrenchBulldogHealthPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="health"
      hero={{
        title: 'French Bulldog Health Guide',
        subtitle: 'French Bulldogs are among the most popular dogs in the world — and among the most medically complex. Their anatomy creates near-inevitable health challenges every owner must understand before purchase and throughout the dog\'s life.',
        category: 'Breed Health Guide',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2025',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: 'French Bulldog Health', href: '/health/french-bulldog-health' },
      ]}
      relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Intervertebral Disc Disease', href: '/health/intervertebral-disc-disease', category: 'Dog Health' }, { title: 'Dog Luxating Patella', href: '/health/dog-luxating-patella', category: 'Dog Health' }, { title: 'Spay or Neuter Guide', href: '/health/spay-neuter-guide', category: 'Dog Health' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'BOAS — Breathing', href: '#boas' },
          { label: 'Heat Danger', href: '#heat' },
          { label: 'IVDD — Spine', href: '#ivdd' },
          { label: 'Skin Fold Infections', href: '#skin' },
          { label: 'Eye Conditions', href: '#eyes' },
          { label: 'Financial Reality', href: '#cost' },
          { label: 'Choosing a Healthier Frenchie', href: '#choosing' },
          { label: 'FAQ', href: '#faq' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
          { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
          { label: 'Find a Specialist', href: '/find-a-vet' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com"
          title="Free Dog Health Tips"
          subtitle="Practical guidance every Tuesday."
          source="health-french-bulldog" />
      </>}
    >
      <div className="carloOS-article">
        <p>French Bulldogs have become one of the most registered breeds globally — a reflection of their genuine charm as companion dogs. They are adaptable, affectionate, low-exercise, and endlessly entertaining. They are also a breed whose extreme anatomy creates near-inevitable health problems that every owner must understand, budget for, and actively manage throughout the dog&apos;s life.</p>

        <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.15)', borderRadius: '10px', padding: '18px 22px', margin: '24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>Before You Buy</div>
          <p style={{ fontSize: '15px', color: '#4A2E18', margin: 0, lineHeight: 1.65 }}>French Bulldogs cannot be naturally bred or born without human intervention. Many cannot breathe normally at rest. The average Frenchie owner spends significantly more on veterinary care than owners of most other breeds. <strong>Pet insurance enrolled at purchase is essential, not optional</strong> — and must be selected carefully for BOAS and spinal coverage.</p>
        </div>

        <h2 id="boas">Brachycephalic Obstructive Airway Syndrome (BOAS)</h2>
        <BreedHealthCard
          name="BOAS — Airway Obstruction"
          riskLevel="very-high"
          description="BOAS is the umbrella term for anatomical abnormalities caused by extreme flat-faced breeding: stenotic nares (narrow nostrils restricting airflow), elongated soft palate (tissue partially blocking the airway), hypoplastic trachea (abnormally narrow windpipe), and everted laryngeal saccules (tissue pulled into the airway by chronic negative pressure). Together these restrict airflow at multiple levels. Many Frenchies with significant BOAS appear 'normal' to owners who have never seen a breed without it."
          signs={['Noisy breathing at rest', 'Snoring', 'Exercise intolerance', 'Frequent overheating', 'Blue-tinged gums during exertion (emergency)', 'Sleep apnea']}
          management="BOAS surgery (nares widening, soft palate shortening, saccule removal) significantly improves quality of life for Grade 2–3 affected dogs. Pursue early — secondary airway changes worsen outcomes over time. BOAS grading by a veterinarian guides intervention timing. All Frenchies should have a formal BOAS assessment, not just a casual listen."
          guideHref="/find-a-vet"
          guideLabel="Find a surgical specialist →"
        />

        <h2 id="heat">Heat Danger — A Specific Emergency Risk</h2>
        <div style={{ background: 'rgba(200,74,42,0.06)', border: '1px solid rgba(200,74,42,0.2)', borderRadius: '10px', padding: '18px 22px', margin: '24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>⚠️ Emergency Risk</div>
          <p style={{ fontSize: '15px', color: '#4A2E18', margin: 0, lineHeight: 1.65 }}>Frenchies cannot cool themselves efficiently — their compromised airway severely limits panting, the primary cooling mechanism in dogs. Heatstroke can develop in French Bulldogs at temperatures that are comfortable for humans. <strong>Never leave a Frenchie in a car. Limit outdoor activity in warm weather. Always ensure cool environment access.</strong> Summer walks should happen before 8am or after 8pm. Heatstroke is fatal if not treated immediately.</p>
        </div>

        <h2 id="ivdd">IVDD — Spinal Disc Disease</h2>
        <BreedHealthCard
          name="Intervertebral Disc Disease (IVDD)"
          riskLevel="very-high"
          description="French Bulldogs are chondrodystrophic — their cartilage develops abnormally, affecting their limb proportions and their spinal discs. Chondrodystrophic dogs develop disc disease at much higher rates than other breeds. Disc herniation occurs when degenerated discs rupture and put pressure on the spinal cord, ranging from pain alone to complete paralysis. Onset can be sudden and severe."
          signs={['Back pain (arching, reluctance to move)', 'Sudden yelping', 'Weakness in hindlimbs', 'Wobbly or drunken gait', 'Inability to walk', 'Loss of bladder/bowel control (emergency)']}
          management="Use ramps or steps instead of jumping on/off furniture and beds. Maintain lean body weight. Avoid impact activities. Sudden-onset severe neurological signs are a surgical emergency — prognosis for recovery is significantly better when surgery is performed within 24 hours. Mild cases may respond to cage rest and anti-inflammatory medication."
        />

        <h2 id="skin">Skin Fold Infections</h2>
        <BreedHealthCard
          name="Skin Fold Dermatitis"
          riskLevel="very-high"
          description="The facial folds, tail pocket, and body folds of French Bulldogs trap moisture, bacteria, and yeast — creating chronic skin fold infections. These require regular cleaning and prompt veterinary treatment when infected. This is non-negotiable daily maintenance in Frenchies."
          signs={['Redness in skin folds', 'Odor', 'Brown discharge', 'The dog rubbing face on surfaces', 'Tail area redness or odor']}
          management="Daily cleaning of all folds with a gentle wipe (unscented baby wipes or specialized fold wipes). Dry thoroughly after cleaning — moisture is the enemy. When infected: veterinary prescription antifungal/antibacterial treatment. Severe or recurring fold infections may require surgical correction of the folds."
        />

        <h2 id="eyes">Eye Conditions</h2>
        <BreedHealthCard
          name="Eye Injuries & Conditions"
          riskLevel="high"
          description="Frenchies' prominent, relatively exposed eyes are prone to corneal scratches and ulcers, dry eye (keratoconjunctivitis sicca), and cherry eye (prolapse of the third eyelid gland). Their shallow eye sockets mean even minor trauma causes injury. Eye injuries are time-sensitive — hours matter for vision preservation."
          signs={['Squinting or pawing at eye', 'Discharge (clear or colored)', 'Redness', 'Visible pink tissue at eye corner (cherry eye)', 'Cloudiness or opacity']}
          management="Same-day veterinary evaluation for any eye concern. Do not put anything in the eye and prevent pawing (use e-collar if needed). Cherry eye typically requires surgical correction. Dry eye requires lifelong cyclosporine or tacrolimus drops."
        />

        <h2 id="cost">The Financial Reality</h2>
        <p>French Bulldogs are among the most expensive breeds to maintain medically. Realistic lifetime costs for a Frenchie with typical health challenges include: BOAS surgery ($1,500–5,000 if needed), IVDD treatment ($5,000–8,000+ for surgery if severe), ongoing skin fold management, regular ear and eye care, and higher-than-average routine vet costs from breed-related presentations.</p>
        <p>Pet insurance is not optional for Frenchie owners. Enroll at the earliest possible age before any conditions develop. Compare policies specifically for BOAS coverage and spinal disease coverage — some plans exclude these as hereditary conditions. Trupanion and Embrace are the policies most commonly recommended by vets who treat Frenchies regularly.</p>

        <h2 id="choosing">Choosing a Healthier French Bulldog</h2>
        <p>Health-focused breeders are actively selecting for wider nostrils, longer relative muzzle length, and better airway conformation — and the dogs they produce breathe measurably better and live healthier lives. What to look for:</p>
        <ul>
          <li><strong>Open, wide nostrils</strong> — you should see actual open holes, not pinched slits. The width of the nares is the most visible indicator of airway health.</li>
          <li><strong>BOAS assessment documentation</strong> on breeding stock — ask for it. Reputable breeders do this.</li>
          <li><strong>OFA health testing</strong> — hips, patella, cardiac, and BOAS minimum</li>
          <li><strong>The breeder asks you questions</strong> — a breeder who cares about their dogs wants to know your living situation, experience, and commitment</li>
          <li><strong>Avoid the &quot;extreme&quot; Frenchie look</strong> — maximally flat face, deeply furrowed skin, very small nostrils. These features are associated with the worst health outcomes.</li>
        </ul>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
