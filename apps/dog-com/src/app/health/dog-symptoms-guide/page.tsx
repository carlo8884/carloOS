import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: '15 Dog Symptoms You Should Never Ignore | Dog.com',
  description: 'A board-certified emergency vet explains 15 dog symptoms requiring immediate care — and how to tell when something can wait vs. when to go to the ER at 2am.',
  path: '/health/dog-symptoms-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: '15 Dog Symptoms You Should Never Ignore',
  description: 'Emergency vet explains which symptoms need immediate care vs. which can wait.',
  url: 'https://dog.com/health/dog-symptoms-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const SIGNS = [
  {
    num: '01', level: 'emergency' as const, title: 'Difficulty Breathing or Labored Breathing',
    body: 'Open-mouth breathing in a dog at rest, exaggerated chest/belly movement, extended neck with elbows out, or blue/grey/white gum color indicates oxygen deprivation. This is the most urgent presentation in veterinary emergency medicine — tissue death begins within minutes. Do not wait for another symptom.',
  },
  {
    num: '02', level: 'emergency' as const, title: 'Pale, White, Blue, or Grey Gums',
    body: 'Normal dog gums are bubble-gum pink and moist. Pale or white gums indicate shock or severe blood loss — often from a ruptured splenic mass (hemangiosarcoma). Blue/grey gums indicate oxygen deprivation. Check gums regularly so you know your dog\'s baseline. If you\'re seeing white or blue, go immediately.',
  },
  {
    num: '03', level: 'emergency' as const, title: 'Sudden Collapse or Inability to Stand',
    body: 'A dog that collapses, cannot support its own weight, or falls repeatedly has something seriously wrong — cardiac event, internal bleeding, neurological emergency, or extreme pain. Do not assume it will pass.',
  },
  {
    num: '04', level: 'emergency' as const, title: 'Distended Abdomen with Retching',
    body: 'A belly that is visibly bloated or hard — particularly in a large or deep-chested breed — combined with retching or restlessness is Gastric Dilatation-Volvulus (GDV/Bloat) until proven otherwise. GDV is fatal within hours without surgery. At-risk breeds: Great Danes, German Shepherds, Standard Poodles, Weimaraners, Goldens, Labs.',
  },
  {
    num: '05', level: 'emergency' as const, title: 'Seizure Lasting More Than 2 Minutes',
    body: 'First seizure ever: go to emergency immediately. A known epileptic dog with a brief seizure: call your vet. Seizure lasting more than 2 minutes (status epilepticus) or multiple seizures in 24 hours: emergency. Prolonged seizures cause brain damage.',
  },
  {
    num: '06', level: 'emergency' as const, title: 'Suspected Poisoning or Toxic Ingestion',
    body: 'Call ASPCA Animal Poison Control (888-426-4435) and your emergency vet simultaneously. Do not wait for symptoms — for many toxins (xylitol, rat poison, certain mushrooms), treatment is most effective before symptoms appear.',
  },
  {
    num: '07', level: 'emergency' as const, title: 'Uncontrolled Bleeding',
    body: 'Wounds that do not stop bleeding with 5–10 minutes of firm continuous pressure. Deep lacerations, puncture wounds from animal bites, or wounds near major vessels. Apply pressure with clean cloth, keep it there, go.',
  },
  {
    num: '08', level: 'emergency' as const, title: 'Eye Injuries or Sudden Eye Changes',
    body: 'The eye is time-sensitive. Squinting with pawing at the eye, sudden cloudiness, redness with discharge, or any trauma to the eye area requires same-day care — hours can determine whether vision is preserved. Do not put anything in the eye and prevent pawing.',
  },
  {
    num: '09', level: 'urgent' as const, title: 'Vomiting or Diarrhea with Blood',
    body: 'One episode in an otherwise normal dog: monitor. More than 3 episodes in 24 hours, any blood (red or dark brown/coffee ground appearance), or a lethargic dog not eating: vet today. Hemorrhagic gastroenteritis can cause dangerous fluid loss within hours.',
  },
  {
    num: '10', level: 'urgent' as const, title: 'Straining to Urinate or Not Urinating',
    body: 'A dog repeatedly squatting/posturing to urinate with little or no output, crying while urinating, or producing blood-tinged urine needs same-day evaluation. A complete blockage is life-threatening within 24–48 hours.',
  },
  {
    num: '11', level: 'urgent' as const, title: 'Sudden Limb Weakness or Paralysis',
    body: 'Sudden hindlimb weakness, inability to walk, or dragging of rear feet: spinal cord injury (IVDD) until proven otherwise. Prognosis for recovery is significantly better when surgery is performed within 24 hours of severe onset.',
  },
  {
    num: '12', level: 'urgent' as const, title: 'Head Tilt, Circling, or Loss of Balance',
    body: 'Sudden head tilt, circling in one direction, falling to one side, or rapid involuntary eye movement (nystagmus) indicates vestibular disease. Requires same-day evaluation to distinguish peripheral (inner ear, often self-limiting) from central (brain, more serious).',
  },
  {
    num: '13', level: 'urgent' as const, title: 'Swollen Lymph Nodes',
    body: 'Lymph nodes you can feel under the jaw, in front of the shoulders, behind the knees, and in the groin. Bilateral firm swelling in multiple locations is the most common presentation of lymphoma. Evaluate within a few days — lymphoma treated early has more options.',
  },
  {
    num: '14', level: 'urgent' as const, title: 'Complete Food Refusal with Other Changes',
    body: 'Missing one meal in an otherwise normal dog: monitor. Complete refusal for 24+ hours with lethargy, vomiting, or behavioral changes: vet within 24 hours. The refusal matters less than what accompanies it.',
  },
  {
    num: '15', level: 'urgent' as const, title: 'Unexplained Weight Loss',
    body: 'A dog losing weight without dietary changes warrants investigation. In middle-aged and senior dogs, unexplained weight loss is often the earliest sign of cancer, diabetes, kidney disease, or GI conditions. Catching these early makes a real difference in outcome.',
  },
]

const STYLES = {
  emergency: { bg: 'rgba(200,74,42,0.05)', border: 'rgba(200,74,42,0.18)', numColor: '#C84A2A', badge: '🚨 Emergency', badgeColor: '#C84A2A', badgeBg: 'rgba(200,74,42,0.1)' },
  urgent:    { bg: 'rgba(200,149,42,0.05)', border: 'rgba(200,149,42,0.15)', numColor: '#C8952A', badge: '⚠️ Urgent', badgeColor: '#C8952A', badgeBg: 'rgba(200,149,42,0.1)' },
}

const medicalSchema = buildMedicalWebPageSchema({
  name: '15 Dog Symptoms That Need Immediate Vet Care',
  description: 'Emergency symptoms in dogs — when to go to the vet immediately.',
  url: 'https://dog.com/health/dog-symptoms-guide',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
})
const combinedSchemaAll = combineSchemas(schema, medicalSchema)

export default function DogSymptomsGuidePage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      siteId="dog-com"
      hero={{
        title: '15 Dog Symptoms You Should Never Ignore',
        subtitle: 'Knowing the difference between "wait and see" and "go right now" can save your dog\'s life. A board-certified emergency and critical care veterinarian explains exactly what warrants a 2am ER visit.',
        category: 'Emergency Guide',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2025',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: 'Symptom Guide', href: '/health/dog-symptoms-guide' },
      ]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-lg p-4">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Emergency Resources</div>
          <div className="flex flex-col gap-2 text-xs font-bold text-brand-danger">
            <div>🚨 Signs 1–8: Emergency</div>
            <div className="text-brand-warning">⚠️ Signs 9–15: Urgent</div>
          </div>
          <div className="mt-3 pt-3 border-t border-brand-border">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">Poison Control</div>
            <div className="text-sm font-bold text-brand-dark">888-426-4435</div>
            <div className="text-xs text-brand-text-light">ASPCA · 24/7</div>
          </div>
        </div>
        <TableOfContents items={SIGNS.slice(0, 8).map(s => ({ label: s.title, href: `#s${s.num}` }))} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Find an Emergency Vet', href: '/find-a-vet' },
          { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
          { label: 'Senior Dog Care', href: '/health/senior-dog-care' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com"
          title="Free Dog Health Tips"
          subtitle="Practical guidance every Tuesday."
          source="health-symptoms" />
      </>}
    >
      <div className="carloOS-article">
        <p>In twenty years of emergency veterinary practice, the cases that are hardest are the ones that came in too late — not because the owner didn&apos;t care, but because they didn&apos;t know. A dog that seemed &quot;a little off&quot; yesterday. A belly that &quot;looked slightly bigger.&quot; A gum color that had been pale for hours. This guide gives you what you need to make fast, accurate decisions.</p>

        <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.2)', borderRadius: '10px', padding: '16px 20px', margin: '24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '7px' }}>Rule #1</div>
          <p style={{ fontSize: '15px', color: '#1A0E08', fontWeight: 500, margin: 0, lineHeight: 1.6 }}>When in doubt, call your emergency vet clinic. Most will advise over the phone whether you need to come in immediately. This call costs nothing and could be the most important one you make.</p>
        </div>

        <h2>🚨 Emergency — Go Immediately</h2>
        <p>These symptoms require emergency veterinary care right now. Do not wait until morning.</p>

        {SIGNS.filter(s => s.level === 'emergency').map(sign => {
          const style = STYLES[sign.level]
          return (
            <div key={sign.num} id={`s${sign.num}`}
              className="rounded-xl p-6 mb-4 flex gap-5"
              style={{ background: style.bg, border: `1px solid ${style.border}` }}>
              <div className="font-display text-4xl font-black flex-shrink-0 leading-none"
                style={{ color: style.numColor, minWidth: '48px' }}>{sign.num}</div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-display font-bold text-brand-dark text-lg m-0">{sign.title}</h3>
                  <span className="text-2xs font-bold px-2.5 py-0.5 rounded-pill flex-shrink-0"
                    style={{ background: style.badgeBg, color: style.badgeColor }}>{style.badge}</span>
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{sign.body}</p>
              </div>
            </div>
          )
        })}

        <h2>⚠️ Urgent — See a Vet Today or Tomorrow</h2>
        <p>These symptoms require veterinary attention within 24 hours — or sooner if they worsen.</p>

        {SIGNS.filter(s => s.level === 'urgent').map(sign => {
          const style = STYLES[sign.level]
          return (
            <div key={sign.num} id={`s${sign.num}`}
              className="rounded-xl p-6 mb-4 flex gap-5"
              style={{ background: style.bg, border: `1px solid ${style.border}` }}>
              <div className="font-display text-4xl font-black flex-shrink-0 leading-none"
                style={{ color: style.numColor, minWidth: '48px' }}>{sign.num}</div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-display font-bold text-brand-dark text-lg m-0">{sign.title}</h3>
                  <span className="text-2xs font-bold px-2.5 py-0.5 rounded-pill flex-shrink-0"
                    style={{ background: style.badgeBg, color: style.badgeColor }}>{style.badge}</span>
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{sign.body}</p>
              </div>
            </div>
          )
        })}

        <div style={{ background: '#C84A2A', borderRadius: '16px', padding: '32px', margin: '32px 0', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>Save This Number</div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>ASPCA Animal Poison Control: 888-426-4435</div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>Available 24/7. Consultation fee applies.</div>
          <Link href="/find-a-vet"
            style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#C84A2A', padding: '12px 24px', borderRadius: '6px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
            Find Your Nearest Emergency Vet →
          </Link>
        </div>
      </div>
    </ArticleLayout>
    </>
  )
}
