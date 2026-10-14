import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, FAQAccordion, CalloutBox, ArticleLayout, CrossPortfolioCard, PrimaryHop, RelatedLinks, ShopCtas, LastUpdated } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: '14 Dog Emergency Signs — When to Go to the Vet Right Now | Vets.co', description: '14 signs that require emergency veterinary care immediately. Pale gums, unproductive retching, seizures, and more', path: '/health/emergency-signs', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: When to See a Veterinarian', url: 'https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian', publisher: 'Merck Veterinary Manual' },
  { label: 'AVMA: First aid tips for pet owners', url: 'https://www.avma.org/resources/pet-owners/emergencycare/13-animal-emergencies-require-immediate-veterinary-consultation-andor-care', publisher: 'AVMA' },
  { label: 'AVMA: Emergency Care for Your Pet', url: 'https://www.avma.org/resources-tools/pet-owners/emergency-care', publisher: 'AVMA' },
  { label: 'ASPCA Animal Poison Control Center', url: 'https://www.aspca.org/pet-care/aspca-poison-control', publisher: 'ASPCA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: '14 Dog Emergency Signs', description: 'Veterinary emergency signs requiring immediate care — Reference guide.', url: 'https://vets.co/health/emergency-signs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-13T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: '14 Dog Emergency Signs', description: 'Signs requiring immediate emergency veterinary care.', url: 'https://vets.co/health/emergency-signs', authorName: 'Vets.co Editorial', lastReviewed: '2026-10-13' })
const combined = combineSchemas(schema, med)
const FAQS = [
  {
    "question": "When should my dog see a vet within 24 hours instead of right away?",
    "answer": "The Merck Veterinary Manual lists signs that need a vet within 24 hours rather than immediately, including vomiting or diarrhea lasting more than 24 hours, continuous sneezing or coughing, drinking much more water than usual, a sudden change in behavior, lameness lasting more than 24 hours, and loss of appetite with no other signs of illness."
  },
  {
    "question": "When is a seizure an emergency?",
    "answer": "The AVMA says to take your pet to a veterinarian immediately after two or more seizures in 24 hours, a seizure lasting longer than 5 minutes, or seizure activity that doesn't stop. During a seizure, keep your hands away from the mouth and time it."
  },
  {
    "question": "What are the signs of internal bleeding in a dog?",
    "answer": "Per the AVMA, signs include bleeding from the nose, mouth, or rectum, coughing up blood, bloody urine, pale gums, collapse, and a weak, rapid pulse. Keep your pet warm and quiet and go to the nearest veterinary hospital."
  },
  {
    "question": "Who do I call if my pet ate something poisonous?",
    "answer": "The AVMA advises calling your veterinarian, an emergency veterinary clinic, the ASPCA Animal Poison Control Center (888-426-4435), or the Pet Poison Helpline (855-764-7661) immediately; a consultation fee may apply. Bring the product packaging if you can."
  }
]
const EMERGENCY_SIGNS = [
  { sign: 'Pale, white, blue, or gray gums', detail: 'Normal gum color is pink. Pale gums indicate cardiovascular shock, internal bleeding, or severe anemia. White or blue gums indicate oxygen deprivation. Any color other than pink-to-salmon requires immediate emergency evaluation — gum color is one of the fastest assessments of circulatory status. A handheld AA LED flashlight is how that gum-color check happens at night or in a dim hallway — lift the lip, shine across the gums, and look for pink-to-salmon versus pale, white, blue, or gray. It is not a medical penlight, not a foaling headlamp, and not a gum-color assessment chart. A color other than pink-to-salmon is a reason to call ahead and drive, not a diagnosis of shock.' },
  { sign: 'Unproductive retching or attempting to vomit without producing anything', detail: 'In large and deep-chested breeds, this is GDV (gastric dilatation-volvulus) until proven otherwise. Do not wait. Call ahead to the emergency vet and go immediately. Time measured in hours. Household prep gear does not treat GDV, does not decompress a stomach, and does not replace the emergency clinic.' },
  { sign: 'Sudden collapse or inability to stand', detail: 'Acute collapse with no obvious injury may indicate internal hemorrhage (splenic rupture), cardiac arrhythmia, hypoglycemia, or neurological emergency. Emergency vet immediately. A wire basket dog muzzle is how a collapsed or painful dog can be moved without a bite to the person carrying them — it is not a soft fabric muzzle, not a grazing muzzle, and not a treatment. Put it on only if the dog is conscious enough to accept it; never delay the drive to hunt for gear.' },
  { sign: 'Difficulty breathing — labored, rapid, or open-mouth breathing', detail: 'Respiratory distress from any cause (fluid around lungs, airway obstruction, pneumonia, cardiac failure) requires emergency care. Merck lists difficulty breathing or shallow breathing as a reason to see a vet immediately.' },
  { sign: 'Any seizure', detail: 'The Merck Veterinary Manual lists seizures as a reason to see a vet immediately. Time the seizure and keep your hands away from the mouth. Once it stops, keep your dog warm and quiet and call your vet or emergency hospital. The AVMA says to go to a vet immediately after two or more seizures in 24 hours, a seizure longer than 5 minutes, or seizure activity that does not stop. After the seizure, a wire basket dog muzzle is how the confused, mouthy recovery ride stays safer for the person driving — it is not a seizure treatment and it does not go on during the seizure itself.' },
  { sign: 'Suspected toxin ingestion', detail: 'Call the ASPCA Animal Poison Control Center (888-426-4435) immediately. Do not wait for symptoms. Have the product packaging and the amount and time of exposure ready. Do not induce vomiting unless your vet or poison control tells you to (AVMA). Call the poison hotline rather than waiting on a home kit.' },
  { sign: 'Eye injury or sudden vision loss', detail: 'The AVMA says eye injuries are painful and can quickly worsen into a threat to sight, so seek veterinary care immediately and stop your dog rubbing the eye. Merck lists cloudy eyes, squinting or inability to see as signs to have checked within 24 hours, or sooner if there was an injury.' },
  { sign: 'Urinary obstruction — straining without producing urine', detail: 'Male dogs and cats that strain to urinate without producing urine may have a blocked urethra — a life-threatening emergency. Merck lists straining but failing to urinate or defecate as a reason to see a vet immediately.' },
  { sign: 'Suspected fracture or major wound', detail: 'Visible bone, wounds penetrating the body cavity, or inability to bear any weight after trauma requires emergency evaluation. Quilted disposable underpads are how blood or wound fluid stays off the car seat and the hallway on the way out the door — they are not puppy training pads, not washable pee pads, not extra-large disposable dog pee pads, and not a first-aid kit. They do not stop bleeding and they do not replace pressure from a veterinarian. A wire basket dog muzzle is how a fractured, painful dog can be lifted without a bite.' },
  { sign: 'Sudden hind limb paralysis or weakness', detail: 'Particularly in Dachshunds and other chondrodystrophic breeds — this is IVDD until proven otherwise. Merck lists staggering or other problems walking as a reason to see a vet immediately. Do not wait.' },
  { sign: 'Prolonged or unresponsive vomiting and diarrhea', detail: 'Multiple vomiting episodes without improvement over several hours, or bloody diarrhea with vomiting, can cause rapid dehydration and electrolyte imbalance requiring hospitalization. Quilted disposable underpads are how vomit or bloody stool stays contained on the ride — they are cleanup liners, not a treatment, not a diagnosis of hemorrhagic gastroenteritis, and not a reason to wait.' },
  { sign: 'Ingestion of a foreign object', detail: 'Swallowed linear foreign bodies (string, fishing line, ribbon) are particularly dangerous — they can cause intestinal plication. Sharp objects or objects causing immediate choking require emergency evaluation.' },
  { sign: 'Loss of consciousness', detail: 'Loss of consciousness from any cause is an emergency. If the dog is unresponsive: check for breathing, call the emergency vet immediately while traveling to them. A handheld AA LED flashlight is how gum color and chest movement get a look in a dark car or yard — it does not diagnose the cause and it does not replace the clinic.' },
  { sign: 'Dystocia — prolonged labor without delivery', detail: 'Strong straining in labor without delivering a puppy, or a long pause between puppies, needs a call to your vet right away. Ask your vet ahead of the due date what time limits they want you to use.' },
]
export default function EmergencySignsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: '14 Dog Emergency Signs', subtitle: 'Some signs warrant waiting until your regular vet opens. These do not. Print this page and keep it accessible. In a true emergency, knowing these signs before they happen is the difference between a treatment outcome and a fatality.', category: 'Emergency Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '8 min',}}
        heroHop={<>
          <PrimaryHop href="/go/amazon-brand/handheld+aa+led+flashlight?s=health-emergency-signs" label="Search Amazon for a handheld AA LED flashlight" />
          <HopDisclosure tone="on-dark" siteId="vets-co" href="/go/amazon-brand/handheld+aa+led+flashlight?s=health-emergency-signs" />
        </>}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Emergency Signs', href: '/health/emergency-signs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Bloat (GDV) in Dogs', href: '/health/bloat-gdv-dogs', category: 'Emergency Guide' },
          { title: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
          { title: 'Pet First Aid Kit', href: '/guides/pet-first-aid-kit' },
        ]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">If You Suspect Emergency</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-3">Call ahead while driving — the vet can prepare for your arrival. ASPCA Poison Control: <strong>888-426-4435</strong></p>
            <Link href="/find-a-vet" className="block w-full text-center bg-brand-danger text-white text-xs font-bold py-2.5 rounded-lg no-underline hover:opacity-90">Find Emergency Vet →</Link>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'ER vs Clinic vs Telehealth', href: '/tools/er-vs-clinic' }, { label: 'Bloat (GDV) in Dogs', href: '/health/bloat-gdv-dogs' }, { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' }, { label: 'Emergency Vet Costs', href: '/guides/emergency-vet-costs' }, { label: 'How to Afford Vet Care', href: '/guides/how-to-afford-vet-care' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Pet First Aid Kit', href: '/guides/pet-first-aid-kit' }]} />

                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <LastUpdated date="2026-10-13" />

          <CalloutBox variant="info" title="Short answer">
            <p>Get to a vet immediately for difficulty or shallow breathing, choking, pale, white, or bluish gums, a weak pulse, heavy bleeding, seizures, staggering, extreme lethargy, straining without passing urine or stool, bloody or uncontrollable diarrhea, black stools, severe pain, broken bones, or not eating or drinking for 24 hours. If you think your pet swallowed something toxic, call your vet, an emergency clinic, or a poison control line right away. Source: <a href="https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian">Merck Veterinary Manual</a>.</p>
          </CalloutBox>

          <p className="text-base text-brand-text-mid leading-relaxed mb-8">This page is not a veterinarian. If your dog may be in danger, contact a vet. When in doubt: call your emergency vet and describe what you are seeing. A 2-minute call is far better than waiting and watching something become life-threatening. Emergency vets would rather you call unnecessarily than delay a critical situation. These 14 signs should prompt an immediate call and drive. Household prep gear — a wire basket dog muzzle, quilted disposable underpads, a handheld AA LED flashlight — is how the ride stays safer and cleaner. It does not treat GDV, it does not replace the clinic, and it is not a reason to delay the drive.</p>
          {EMERGENCY_SIGNS.map((item, i) => (
            <div key={item.sign} className="flex gap-4 mb-5 p-5 rounded-xl border border-brand-border bg-brand-surface">
              <span className="font-display font-black text-brand-danger text-2xl flex-shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-base m-0 mb-2 leading-snug">{item.sign}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{item.detail}</p>
              </div>
            </div>
          ))}

          <h2 id="kit">Supplies named on this page</h2>
          <p>A wire basket dog muzzle lets you move a collapsed, fractured, or post-seizure dog with less risk of a bite. Quilted disposable underpads keep blood, vomit, or wound fluid off the car seat. A handheld AA LED flashlight is how you check gum color at night. These are prep tools, not treatments. They do not treat bloat, they do not stop bleeding, and they do not replace the ASPCA poison hotline or a veterinarian.</p>

          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/wire+basket+dog+muzzle?s=health-emergency-signs", "/go/amazon-brand/quilted+disposable+underpads?s=health-emergency-signs", "/go/amazon-brand/handheld+aa+led+flashlight?s=health-emergency-signs"]} />

          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>

            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/wire+basket+dog+muzzle?s=health-emergency-signs"
                amazonLabel="Browse wire basket dog muzzles on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/quilted+disposable+underpads?s=health-emergency-signs"
                amazonLabel="Browse quilted disposable underpads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/handheld+aa+led+flashlight?s=health-emergency-signs"
                amazonLabel="Browse handheld AA LED flashlights on Amazon →"
              />
          </div>
          </div>

          <p>These 14 signs are a reason to drive, not a reason to price the visit first. After the pet is stable, the <a href="/guides/emergency-vet-costs">emergency vet costs</a> guide explains why that bill runs higher than a daytime appointment, and <a href="/guides/how-to-afford-vet-care">how to afford vet care</a> covers payment options.</p>
          <h2 id="faq">Frequently asked questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
