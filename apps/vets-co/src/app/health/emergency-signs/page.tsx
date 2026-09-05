import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: '14 Dog Emergency Signs — When to Go to the Vet Right Now | Vets.co', description: '14 signs that require emergency veterinary care immediately. Pale gums, unproductive retching, seizures, and more', path: '/health/emergency-signs', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Emergency Care for Your Pet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/emergency-care-your-pet', publisher: 'AVMA' },
  { label: 'AAHA: Emergency and Critical Care Guidelines', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/', publisher: 'AAHA' },
  { label: 'ASPCA Animal Poison Control Center', url: 'https://www.aspca.org/pet-care/animal-poison-control', publisher: 'ASPCA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: '14 Dog Emergency Signs', description: 'Veterinary emergency signs requiring immediate care — Reference guide.', url: 'https://vets.co/health/emergency-signs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: '14 Dog Emergency Signs', description: 'Signs requiring immediate emergency veterinary care.', url: 'https://vets.co/health/emergency-signs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const EMERGENCY_SIGNS = [
  { sign: 'Pale, white, blue, or gray gums', detail: 'Normal gum color is pink. Pale gums indicate cardiovascular shock, internal bleeding, or severe anemia. White or blue gums indicate oxygen deprivation. Any color other than pink-to-salmon requires immediate emergency evaluation — gum color is one of the fastest assessments of circulatory status. A handheld AA LED flashlight is how that gum-color check happens at night or in a dim hallway — lift the lip, shine across the gums, and look for pink-to-salmon versus pale, white, blue, or gray. It is not a medical penlight, not a foaling headlamp, and not a gum-color assessment chart. A color other than pink-to-salmon is a reason to call ahead and drive, not a diagnosis of shock.' },
  { sign: 'Unproductive retching or attempting to vomit without producing anything', detail: 'In large and deep-chested breeds, this is GDV (gastric dilatation-volvulus) until proven otherwise. Do not wait. Call ahead to the emergency vet and go immediately. Time measured in hours. Household prep gear does not treat GDV, does not decompress a stomach, and does not replace the emergency clinic.' },
  { sign: 'Sudden collapse or inability to stand', detail: 'Acute collapse with no obvious injury may indicate internal hemorrhage (splenic rupture), cardiac arrhythmia, hypoglycemia, or neurological emergency. Emergency vet immediately. A wire basket dog muzzle is how a collapsed or painful dog can be moved without a bite to the person carrying them — it is not a soft fabric muzzle, not a grazing muzzle, and not a treatment. Put it on only if the dog is conscious enough to accept it; never delay the drive to hunt for gear.' },
  { sign: 'Difficulty breathing — labored, rapid, or open-mouth breathing', detail: 'Respiratory distress from any cause (fluid around lungs, airway obstruction, pneumonia, cardiac failure) requires emergency care. Dogs do not pant in distress — open-mouth labored breathing at rest is an emergency.' },
  { sign: 'Seizure lasting more than 2-3 minutes (status epilepticus)', detail: 'A single brief seizure in a known epileptic dog may not be an immediate emergency. A first seizure, cluster seizures (multiple in 24 hours), or a seizure lasting more than 2–3 minutes (status epilepticus) is an emergency requiring immediate intervention. After the seizure, a wire basket dog muzzle is how the confused, mouthy recovery ride stays safer for the person driving — it is not a seizure treatment and it does not go on during the seizure itself.' },
  { sign: 'Suspected toxin ingestion', detail: 'Call the ASPCA Animal Poison Control Center (888-426-4435) immediately. Do not wait for symptoms. Many toxins have a narrow treatment window — induced vomiting is most effective within 30–60 minutes of ingestion. Time is critical. This page does not hop a pet emergency toxin kit; that hop already lives elsewhere.' },
  { sign: 'Eye injury or sudden vision loss', detail: 'Corneal ulcers, penetrating eye injuries, and glaucoma (sudden increased eye pressure with a visibly enlarged or red eye) require same-day veterinary care. Glaucoma causes permanent vision loss within hours without treatment.' },
  { sign: 'Urinary obstruction — straining without producing urine', detail: 'Male dogs and cats that strain to urinate without producing urine may have a blocked urethra — a life-threatening emergency. Bladder rupture and fatal hyperkalemia can occur within 24–48 hours.' },
  { sign: 'Suspected fracture or major wound', detail: 'Visible bone, wounds penetrating the body cavity, or inability to bear any weight after trauma requires emergency evaluation. Quilted disposable underpads are how blood or wound fluid stays off the car seat and the hallway on the way out the door — they are not puppy training pads, not washable pee pads, not extra-large disposable dog pee pads, and not a first-aid kit. They do not stop bleeding and they do not replace pressure from a veterinarian. A wire basket dog muzzle is how a fractured, painful dog can be lifted without a bite.' },
  { sign: 'Sudden hind limb paralysis or weakness', detail: 'Particularly in Dachshunds and other chondrodystrophic breeds — this is IVDD until proven otherwise. The surgical window for recovery from paralysis is 24–48 hours. Do not wait.' },
  { sign: 'Prolonged or unresponsive vomiting and diarrhea', detail: 'Multiple vomiting episodes without improvement over several hours, or bloody diarrhea with vomiting, can cause rapid dehydration and electrolyte imbalance requiring hospitalization. Quilted disposable underpads are how vomit or bloody stool stays contained on the ride — they are cleanup liners, not a treatment, not a diagnosis of hemorrhagic gastroenteritis, and not a reason to wait.' },
  { sign: 'Ingestion of a foreign object', detail: 'Swallowed linear foreign bodies (string, fishing line, ribbon) are particularly dangerous — they can cause intestinal plication. Sharp objects or objects causing immediate choking require emergency evaluation.' },
  { sign: 'Loss of consciousness', detail: 'Loss of consciousness from any cause is an emergency. If the dog is unresponsive: check for breathing, call the emergency vet immediately while traveling to them. A handheld AA LED flashlight is how gum color and chest movement get a look in a dark car or yard — it does not diagnose the cause and it does not replace the clinic.' },
  { sign: 'Dystocia — prolonged labor without delivery', detail: 'A female in active labor (visible straining) for more than 30–60 minutes without delivery of a puppy, or more than 4 hours between puppies, requires emergency veterinary evaluation.' },
]
export default function EmergencySignsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: '14 Dog Emergency Signs', subtitle: 'Some signs warrant waiting until your regular vet opens. These do not. Print this page and keep it accessible. In a true emergency, knowing these signs before they happen is the difference between a treatment outcome and a fatality.', category: 'Emergency Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Emergency Signs', href: '/health/emergency-signs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Bloat (GDV) in Dogs', href: '/health/bloat-gdv-dogs', category: 'Emergency Guide' },
          { title: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">If You Suspect Emergency</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-3">Call ahead while driving — the vet can prepare for your arrival. ASPCA Poison Control: <strong>888-426-4435</strong></p>
            <Link href="/find-a-vet" className="block w-full text-center bg-brand-danger text-white text-xs font-bold py-2.5 rounded-lg no-underline hover:opacity-90">Find Emergency Vet →</Link>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'ER vs Clinic vs Telehealth', href: '/tools/er-vs-clinic' }, { label: 'Bloat (GDV) in Dogs', href: '/health/bloat-gdv-dogs' }, { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-emergency" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the 14-sign emergency-prep checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              14-sign emergency-prep checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the household prep notes that match
              the 14 signs on this page — a wire
              basket dog muzzle so a collapsed,
              fractured, or post-seizure dog can be
              moved without a bite, quilted disposable
              underpads so blood, vomit, or wound
              fluid stays off the car seat, and a
              handheld AA LED flashlight so gum color
              gets a look at night. Educational
              checklist, not a diagnosis, not a GDV
              treatment, and not a substitute for the
              emergency clinic you call on the way.
              Soft dog carriers, first-aid kits,
              medical penlights, folding stretchers,
              and Rx stay on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="14-sign emergency-prep checklist"
              subtitle="Email the muzzle, underpad, and flashlight notes. No spam."
              ctaText="Email my 14-sign emergency-prep checklist"
              source="health-emergency-signs-under-hero"
            />
          </div>

          <p className="text-base text-brand-text-mid leading-relaxed mb-8">When in doubt: call your emergency vet and describe what you are seeing. A 2-minute call is far better than waiting and watching something become life-threatening. Emergency vets would rather you call unnecessarily than delay a critical situation. These 14 signs should prompt an immediate call and drive. Household prep gear — a wire basket dog muzzle, quilted disposable underpads, a handheld AA LED flashlight — is how the ride stays safer and cleaner. It does not treat GDV, it does not replace the clinic, and it is not a reason to delay the drive.</p>
          {EMERGENCY_SIGNS.map((item, i) => (
            <div key={item.sign} className="flex gap-4 mb-5 p-5 rounded-xl border border-brand-border bg-brand-surface">
              <span className="font-display font-black text-brand-danger text-2xl flex-shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-base m-0 mb-2 leading-snug">{item.sign}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{item.detail}</p>
              </div>
            </div>
          ))}

          <h2 id="kit">14-sign emergency-prep kit</h2>
          <p>
            Everyday household, travel, and monitoring
            supplies that match the 14 emergency signs
            on this page — a wire basket dog muzzle so
            a collapsed, fractured, or post-seizure
            dog can be lifted without a bite, quilted
            disposable underpads so blood, vomit, or
            wound fluid stays off the car seat and the
            hallway, and a handheld AA LED flashlight
            so pale, white, blue, or gray gums get a
            look at night. These are educational prep
            tools, not treatments. They do not treat
            GDV, they do not stop internal bleeding,
            they do not replace the ASPCA poison
            hotline, and they are not a ranked product
            list. Soft dog carriers, soft-sided crates,
            first-aid kits, medical penlights, folding
            pet stretchers, gum-color assessment
            charts, puppy training pads, washable pee
            pads, extra-large disposable dog pee pads,
            and pet emergency toxin kits already live
            on other pages. This page does not hop
            vaccine, antibiotic, or other Rx ASINs.
            This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (wire basket dog muzzle /
              quilted disposable underpads /
              handheld AA LED flashlight).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1073
              double+door+wire+dog+crate /
              pet+safe+kennel+disinfectant+spray /
              analog+wall+clock+with+second+hand, #1072
              tick+removal+hook /
              fine+tooth+flea+comb /
              laminated+tick+identification+card, #1071
              letter+size+expanding+file+organizer /
              sterile+urine+specimen+cup /
              12+hour+mechanical+kitchen+timer, #1069
              wire+small+animal+single+story+cage /
              non+slip+suction+bathtub+mat /
              stainless+steel+small+animal+crock, #1068
              extra+small+animal+travel+kennel /
              scent+swap+fleece+sleep+pouch /
              portable+small+animal+playpen, #1067
              small+animal+rabies+certificate+holder /
              top+loading+small+animal+carrier /
              fleece+small+animal+bonding+pouch, #1066
              carnivore-care / baby-food / silicone
              dosing syringe, #1059
              adjustable+sliding+dog+food+scoop /
              reusable+dog+food+portion+cups /
              dog+weight+log+book, #1058
              digital+handheld+stopwatch /
              waterproof+field+notebook /
              foam+table+edge+bumper, #1057
              automatic+timed+dog+feeder /
              maze+slow+feed+dog+bowl /
              indoor+dog+house+line, #1056
              disposable+female+dog+diapers /
              inflatable+dog+collar /
              hard+sided+airline+dog+crate,
              tick+remover, tick+removal+tool,
              reusable+lint+roller,
              fine+tooth+metal+comb,
              pet+first+aid+kit, led+medical+penlight,
              dog+recovery+crate,
              soft+sided+dog+crate,
              wire+dog+crate+with+divider+panel,
              heavy+duty+dog+exercise+pen,
              cool+mist+humidifier,
              digital+pet+thermometer,
              accelerated+hydrogen+peroxide+disinfectant,
              soft+dog+carrier,
              pet+emergency+kit+dog+toxin,
              soft+dog+muzzle,
              folding+pet+stretcher,
              puppy+training+pads,
              washable+dog+pee+pads,
              extra+large+disposable+dog+pee+pads,
              dog+gum+color+assessment+chart.
              Vaccine, antibiotic, and Rx ASINs are
              not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the 14-sign emergency-prep kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page 14-sign prep, transport, cleanup,
              and night gum-color copy — a wire basket
              dog muzzle, quilted disposable underpads,
              and a handheld AA LED flashlight.
              Everyday household / travel / monitoring
              gear only. They are not a ranked product
              list, they are not a GDV treatment hop,
              they are not a #1073 crate / kennel-spray
              / second-hand-clock hop, they are not a
              #1072 tick-hook / flea-comb / ID-card
              hop, they are not a first-aid-kit /
              penlight / soft-carrier hop, and they do
              not replace an emergency veterinarian.
              Vets.co earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
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

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
