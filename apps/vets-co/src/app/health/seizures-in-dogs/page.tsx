import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Seizures in Dogs — What to Do, Causes, Epilepsy | Vets.co", description: "A seizure is frightening but rarely an immediate emergency unless prolonged. Learn what to do during a seizure, common causes, and how epilepsy is managed.", path: '/health/seizures-in-dogs', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Seizures and Epilepsy in Dogs', url: 'https://www.merckvetmanual.com/nervous-system/seizure-disorders/seizure-disorders-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Epilepsy in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/epilepsy-pets', publisher: 'AVMA' },
  { label: 'International Veterinary Epilepsy Task Force: Consensus Statements', url: 'https://bmcvetres.biomedcentral.com/articles/supplements/volume-11-supplement-1', publisher: 'BMC Veterinary Research' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Seizures in Dogs', description: 'What to do during a seizure, common causes, and management of canine epilepsy.', url: 'https://vets.co/health/seizures-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Seizures in Dogs', description: 'What to do during a seizure, causes, and management of epilepsy.', url: 'https://vets.co/health/seizures-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "What should I do while my dog is having a seizure?", answer: "Stay calm and keep your dog safe rather than trying to stop the seizure. Do not put your hands near the mouth — dogs do not swallow their tongues, and you risk being bitten unintentionally. Clear the area of hard or sharp objects, cushion the head if possible, dim lights and reduce noise, and note the time the seizure starts. Most seizures last under two minutes. Time it, and if it lasts longer than about five minutes or they cluster, treat it as an emergency and seek care immediately." },
  { question: "When is a seizure an emergency?", answer: "A single brief seizure in a dog that recovers is frightening but usually not an immediate emergency, though it always warrants a veterinary evaluation. It becomes an emergency when a seizure lasts more than about five minutes (status epilepticus), when multiple seizures occur close together without full recovery between them (cluster seizures), or when the dog does not return to normal afterward. Prolonged seizures can cause dangerous overheating and brain injury, so these situations require immediate emergency veterinary care." },
  { question: "Is epilepsy in dogs treatable?", answer: "Yes — epilepsy is usually well managed, not cured. When seizures are frequent or severe enough to warrant treatment, veterinarians prescribe anti-seizure medication, with the specific drug and dose determined and adjusted by your veterinarian based on response and monitoring bloodwork. The goal is to reduce the frequency and severity of seizures to an acceptable level rather than to eliminate them entirely, and many epileptic dogs live full, happy lives. Consistency in giving medication and keeping a seizure diary greatly aid management." },
]
export default function SeizuresPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Seizures in Dogs', subtitle: 'A seizure is one of the most frightening things an owner can witness, but knowing what to do — and what not to do — makes a real difference. Most single seizures are brief and not immediately life-threatening, though all warrant veterinary evaluation. Understanding the causes, the danger signs, and how epilepsy is managed helps you respond calmly and protect your dog.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Seizures', href: '/health/seizures-in-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
          { title: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">During a Seizure</div>
            {[['Stay calm', 'Keep your dog safe'], ['Hands away', 'From the mouth'], ['Clear hazards', 'Cushion the head'], ['Time it', 'Note start and length']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-seizures" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog seizure observation-kit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog seizure observation-kit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the first-minutes notes — a
              digital handheld stopwatch so start and
              length are timed instead of guessed, a
              waterproof field notebook so dates,
              durations, and possible triggers stay in
              one seizure diary, and a foam table-edge
              bumper so hard or sharp furniture is
              padded before the next event. Educational
              checklist, not a diagnosis, not an
              anticonvulsant list, and not a substitute
              for emergency care if a seizure lasts
              longer than about five minutes or they
              cluster. Soft throw blankets, crate
              bumper pads, interlocking foam floor
              tiles, first-aid kits, thermometers, and
              kitchen timers stay on other pages. No
              spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog seizure observation-kit checklist"
              subtitle="Email the stopwatch, field-notebook, and table-edge-bumper notes. No spam."
              ctaText="Email my dog seizure observation-kit checklist"
              source="health-seizures-in-dogs-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-05T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="A seizure over five minutes is an emergency">
            A seizure lasting more than about five minutes, or repeated seizures without full recovery in between, is a medical emergency. Prolonged seizure activity can cause dangerous overheating and brain injury. Go to an emergency hospital immediately. For a single brief seizure, schedule prompt veterinary evaluation rather than treating it as an immediate emergency.
          </CalloutBox>

          <h2>What a Seizure Is</h2>
          <p>A seizure is a sudden, abnormal burst of electrical activity in the brain. It can range from a generalized event with loss of consciousness, collapse, paddling limbs, and sometimes drooling or loss of bladder control, to subtler focal events such as facial twitching or unusual behavior. Many dogs show a brief pre-seizure phase of restlessness or clinginess, and a post-seizure recovery phase of disorientation, pacing, or temporary blindness that can last minutes to hours.</p>

          <h2>What to Do During a Seizure</h2>
          <p>Your job is to keep your dog safe, not to stop the seizure. Stay calm. Keep your hands away from the mouth — dogs cannot swallow their tongues, and you may be bitten unintentionally during the involuntary movements. Clear away hard or sharp objects, gently cushion the head if you can do so safely, dim the lights and reduce noise, and note the time the seizure begins. Speaking softly can be soothing during recovery. Above all, time the event, since duration determines whether it is an emergency.</p>
          <p>Household observation tools can sit alongside that first-minutes copy after a veterinarian has seen the dog. A digital handheld stopwatch is how start and length get timed instead of guessed under stress — it is not a one-minute kitchen timer and not a phone you may drop while clearing hazards. A foam table-edge bumper pads the hard or sharp furniture the dog can hit during paddling so you are not moving a coffee table mid-event. These are household tools, not treatments. They do not stop a seizure, they do not replace a veterinarian, and they do not change the go-now emergency if the event lasts longer than about five minutes or they cluster. Ask your veterinarian which of these, if any, belong in this dog&rsquo;s kit.</p>

          <h2>Common Causes</h2>
          <p>Seizures have many possible causes. In young to middle-aged dogs, idiopathic epilepsy — recurrent seizures with no identifiable structural cause — is common. Other causes include metabolic problems (low blood sugar, liver disease, organ dysfunction), toxins, infections, head trauma, and, particularly in older dogs, brain tumors or other structural disease. Because the cause shapes treatment and prognosis, a veterinary workup after a first seizure is important even when the dog seems to recover fully.</p>

          <h2>Diagnosis</h2>
          <p>After a seizure, the veterinarian gathers a detailed history — ideally including a video of the event — and performs a physical and neurological exam. Bloodwork screens for metabolic and toxic causes. Depending on the dog's age and findings, advanced imaging such as MRI and analysis of spinal fluid may be recommended to look for structural brain disease, especially in older dogs or those with abnormal neurological exams. The diagnostic picture guides whether and how to treat.</p>

          <h2>Managing Epilepsy</h2>
          <p>When seizures are frequent or severe enough to warrant treatment, the aim is control rather than cure. Anti-seizure medication, with the specific drug and dose determined and monitored by your veterinarian, reduces the frequency and severity of seizures to an acceptable level. Owners help by giving medication consistently, keeping a seizure diary of dates, durations, and possible triggers, and reporting changes. Many dogs with well-managed epilepsy enjoy a normal quality of life. Sudden discontinuation of seizure medication can be dangerous, so changes are always made under veterinary guidance.</p>
          <p>A waterproof field notebook is how that seizure diary stays in one place — dates, stopwatch durations, and possible triggers — so the next clinic visit has a written log instead of a remembered guess. It is not a medical-records binder, not a vaccination record book, and not a resting-respiratory-rate notebook. It does not replace bloodwork, it does not replace medication, and it is not a ranked product. Ask your veterinarian what to record.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <h2 id="kit">Seizure observation kit</h2>
          <p>
            Everyday physical supplies that match the
            first-minutes and diary copy on this page —
            a digital handheld stopwatch so start and
            length are timed, a waterproof field
            notebook so the seizure diary of dates,
            durations, and possible triggers stays
            writable after a messy event, and a foam
            table-edge bumper so hard or sharp
            furniture is padded before the next
            seizure. These are household tools, not
            treatments. They do not treat epilepsy,
            they do not replace a veterinarian or
            anti-seizure medication, and they are not
            a ranked product list. Soft throw
            blankets, crate bumper pads, interlocking
            foam floor tiles, one-minute kitchen
            timers, resting-respiratory-rate
            notebooks, pet medical-records binders,
            vaccination record books, first-aid kits,
            emergency-contact cards, folding
            stretchers, LED penlights, and
            medical-alert collar tags already live on
            other pages. This page does not hop
            medications. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (digital handheld stopwatch / waterproof
              field notebook / foam table-edge bumper).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1028 soft+throw+blanket /
              dog+crate+bumper+pads /
              interlocking+foam+floor+tiles, #1057
              automatic+timed+dog+feeder /
              maze+slow+feed+dog+bowl /
              indoor+dog+house+line, #1056
              disposable+female+dog+diapers /
              inflatable+dog+collar /
              hard+sided+airline+dog+crate, #1047
              resting+respiratory+rate+notebook /
              one+minute+kitchen+timer /
              step+in+padded+dog+harness, #1046
              pet+medical+records+binder, #1045
              led+medical+penlight /
              pet+emergency+contact+card /
              folding+pet+stretcher, #1044
              pet+vaccination+record+book, and #1053
              dog+medical+alert+collar+tag hops. Rx
              ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog seizure observation kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page first-minutes and diary copy — a
              digital handheld stopwatch, a waterproof
              field notebook, and a foam table-edge
              bumper. Everyday physical supplies only.
              They are not a ranked product list, they
              are not an anticonvulsant or medication
              hop, they are not the #1028 throw-blanket
              / crate-bumper / foam-tile hops, they are
              not the #1057 timed-feeder / maze-bowl /
              house-line hops, they are not the #1047
              respiratory-notebook / kitchen-timer /
              harness hops, they are not first-aid-kit,
              thermometer, penlight, stretcher, or
              medical-alert-tag hops, and they do not
              replace a veterinarian. Vets.co earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+handheld+stopwatch?s=health-seizures-in-dogs"
                amazonLabel="Browse digital handheld stopwatches on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/waterproof+field+notebook?s=health-seizures-in-dogs"
                amazonLabel="Browse waterproof field notebooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/foam+table+edge+bumper?s=health-seizures-in-dogs"
                amazonLabel="Browse foam table-edge bumpers on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
