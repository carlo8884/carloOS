import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Tying-Up in Horses — Exertional Rhabdomyolysis, Causes, Management",
  description:
    "Reference guide to equine tying-up (exertional rhabdomyolysis): sporadic vs chronic forms (PSSM, RER), signs, why it is urgent, and dietary management.",
  path: '/health/tying-up',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Tying-Up in Horses — Exertional Rhabdomyolysis, Causes, Management",
  description:
    "Equine tying-up (exertional rhabdomyolysis): sporadic and chronic forms including PSSM and RER, signs, urgency, and dietary management.",
  url: 'https://horses.com/health/tying-up',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Tying-Up (Exertional Rhabdomyolysis)",
  description:
    "Equine tying-up (exertional rhabdomyolysis): sporadic and chronic forms including PSSM and RER, signs, urgency, and dietary management.",
  url: 'https://horses.com/health/tying-up',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: "Should I walk a horse that is tying up?",
    answer:
      "No. Forcing a horse to move during an acute tying-up episode worsens the muscle damage. Stop exercise, keep the horse still, warm, and calm, and call your veterinarian. Movement is only resumed gently once the episode is under control and on veterinary advice.",
    answerText:
      "No -- forcing movement worsens muscle damage. Stop exercise, keep the horse still and calm, and call your vet. Resume movement only gently and on veterinary advice.",
  },
  {
    question: "What diet helps a horse that ties up?",
    answer:
      "Chronic tying-up forms such as PSSM and RER are managed with a low-starch, low-sugar, high-fat diet, where energy comes from fat and fiber rather than grain, combined with consistent daily exercise and turnout. The exact ration should be built with your veterinarian based on the underlying cause.",
    answerText:
      "A low-starch, low-sugar, high-fat diet with energy from fat and fiber, plus consistent exercise and turnout. Build the exact ration with your vet based on the cause.",
  },
  {
    question: "Why does tying-up turn the urine dark?",
    answer:
      "Severely damaged muscle releases myoglobin, a muscle protein, into the bloodstream; it is filtered into the urine and turns it dark reddish-brown. This is a warning sign of significant muscle breakdown and a risk to the kidneys, making prompt veterinary treatment and fluids especially important.",
    answerText:
      "Damaged muscle releases myoglobin into the blood, which colors the urine dark reddish-brown -- a sign of serious muscle breakdown and kidney risk needing prompt veterinary care.",
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function TyingUpPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Tying-Up in Horses",
          subtitle:
            "Tying-up -- formally exertional rhabdomyolysis -- is painful muscle damage that occurs in association with exercise, leaving a horse stiff, sweating, and reluctant to move, sometimes with dark urine. It ranges from a one-off sporadic episode to chronic, recurrent forms with specific genetic and metabolic causes such as PSSM and RER. Severe episodes are a genuine emergency, and the chronic forms are managed largely through diet and exercise. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Tying-Up", href: '/health/tying-up' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Tying-Up", href: "#what" },
            { label: "Sporadic vs Chronic", href: "#types" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Why It Is Urgent", href: "#emergency" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Management", href: "#management" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">During an Acute Episode</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Stop exercise immediately, do not force the horse to walk, keep it warm and calm, and call your veterinarian. Severe tying-up can damage the kidneys through muscle-protein release and needs prompt treatment.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "American Quarter Horse", href: "/breeds/quarter-horse" },
              { label: "Feeding the Performance Horse", href: "/nutrition/feeding-the-performance-horse" },
              { label: "Salt and Electrolytes", href: "/nutrition/salt-and-electrolytes" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-tying-up"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is Tying-Up</h2>
          <p>Tying-up is the breakdown of skeletal muscle (rhabdomyolysis) in connection with exercise. Damaged muscle cells release their contents -- including the enzyme creatine kinase and the protein myoglobin -- into the bloodstream. The horse experiences cramping, stiffness, and pain, classically over the large muscles of the hindquarters and back. In severe episodes, myoglobin can overload and injure the kidneys, turning the urine dark.</p>

          <h2 id="types">Sporadic vs Chronic</h2>
          <h3>Sporadic tying-up</h3>
          <p>A one-off or occasional episode usually tied to a specific trigger: exercise beyond the horse&apos;s fitness, a day off followed by a hard workout on full feed, electrolyte depletion, dietary imbalance, or exhaustion. Once the trigger is corrected, these horses typically do not recur.</p>
          <h3>Chronic tying-up</h3>
          <p>Recurrent tying-up with an underlying cause. Polysaccharide storage myopathy (PSSM types 1 and 2) involves abnormal glycogen handling in muscle and is common in Quarter Horses, drafts, and warmbloods; it is managed with a low-starch, high-fat diet and consistent exercise. Recurrent exertional rhabdomyolysis (RER), seen especially in fit, nervous Thoroughbreds and Standardbreds, is linked to abnormal calcium regulation in muscle and is managed with diet, routine, and stress reduction.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Stiffness, a short and reluctant stride, and unwillingness to move, often appearing shortly after exercise begins.</li>
            <li>Hard, painful, cramping muscles over the hindquarters and back.</li>
            <li>Profuse sweating, an elevated heart and respiratory rate, and signs of pain.</li>
            <li>Dark, reddish-brown urine in severe episodes (from myoglobin).</li>
            <li>In mild chronic cases, poor performance and a tendency to stop or refuse rather than overt cramping.</li>
          </ul>

          <h2 id="emergency">Why It Is Urgent</h2>
          <p>A severe episode is an emergency. Forcing a tying-up horse to keep moving worsens muscle damage, and the myoglobin released by damaged muscle can injure the kidneys, especially if the horse is dehydrated. Prompt veterinary care -- rest, fluids to protect the kidneys, pain relief, and monitoring of muscle enzymes -- limits the damage. Never trailer or work a horse through an acute episode.</p>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>A veterinarian confirms tying-up by measuring muscle enzymes (creatine kinase and AST) in the blood, which rise markedly with muscle damage. For recurrent cases, the workup may include an exercise challenge test, muscle biopsy, and genetic testing for PSSM type 1 (the GYS1 mutation) to distinguish the underlying cause, which directs the long-term plan.</p>

          <h2 id="management">Management</h2>
          <ul>
            <li><strong>Match diet to the cause.</strong> PSSM and RER horses do best on a low-starch, low-sugar, high-fat ration with energy from fat and fiber rather than grain.</li>
            <li><strong>Keep exercise consistent.</strong> Daily turnout and a regular work program without sudden days off on full feed are central to preventing recurrence.</li>
            <li><strong>Maintain hydration and electrolytes</strong> around hard work and in hot weather.</li>
            <li><strong>Reduce stress</strong> in nervous RER-type horses with routine and calm handling.</li>
            <li><strong>Warm up and cool down gradually</strong> and build fitness progressively rather than in big jumps.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Valberg SJ. “Exertional Rhabdomyolysis in the Horse.” Veterinary Clinics of North America: Equine Practice and related reviews.</li>
            <li>MacLeay JM, et al. “Recurrent Exertional Rhabdomyolysis in Thoroughbred Racehorses.” American Journal of Veterinary Research.</li>
            <li>McCue ME, Valberg SJ, et al. “Glycogen Synthase (GYS1) Mutation and PSSM.” Genomics, 2008; 91(5):458–466.</li>
            <li>American Association of Equine Practitioners. “Tying-Up / Exertional Rhabdomyolysis” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
