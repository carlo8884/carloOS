import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: '14 Signs Your Dog Is in Pain — Subtle | Vets.co', description: 'Dogs hide pain well. 14 signs — from obvious limping to subtle changes in posture, appetite, and behavior — that indicate a dog is experiencing pain.', path: '/health/pain-signs-dogs', type: 'article' })
const SOURCES = [
  { label: 'WSAVA: Pain Management Guidelines', url: 'https://wsava.org/global-guidelines/global-pain-council-guidelines/', publisher: 'WSAVA' },
  { label: 'AAHA: Pain Management Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/pain-management/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Signs of Pain in Animals', url: 'https://www.merckvetmanual.com/pharmacology/analgesia/pain-assessment-and-treatment-in-animals', publisher: 'Merck Vet Manual' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Signs Your Dog Is in Pain', description: '14 pain indicators in dogs — subtle and obvious signs of chronic and acute pain.', url: 'https://vets.co/health/pain-signs-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Signs Your Dog Is in Pain', description: 'Subtle and obvious pain indicators in dogs.', url: 'https://vets.co/health/pain-signs-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const SIGNS = [
  { sign: 'Changes in posture', detail: 'A hunched back, tucked abdomen, or a stance with weight shifted away from one limb indicates pain. Dogs with abdominal pain adopt a "praying position" (front down, rear elevated). Hunched posture in a dog that normally stands upright is significant. An egg-crate foam dog kennel pad is how a dog that left the couch or bed for the floor gets a surface you can watch — hunched, tucked, or weight-shifted — without guessing from carpet pile. It is not an orthopedic dog bed, not a self-warming mat, and not a crate-training pad. It does not treat pain and it is not a diagnosis of abdominal disease.' },
  { sign: 'Facial expression changes', detail: 'Research has validated the "Dog Grimace Scale" — dogs in pain show: narrowed eyes or partially closed eyes, tense orbital area, rounded or drawn back ears, raised cheeks, and a tense muzzle. These subtle facial changes are observable before vocalization or behavioral changes occur. A printable grimace poster is a weak household tool; the observation that matters is the change from this dog\'s baseline face, not a shopped chart. Household gear on this page does not hop a grimace printable, an NSAID, or a pain medication.' },
  { sign: 'Reluctance to be touched in specific areas', detail: 'A dog that flinches, moves away, growls, or snaps when a specific body area is touched is communicating pain at that location. Never interpret this as "bad behavior" without first ruling out pain — a dog that has never growled before that suddenly growls when touched somewhere is almost certainly in pain there. Mapping a flinch is an observation for the veterinarian, not a reason to hop a grooming glove, a first-aid kit, or a pain medication.' },
  { sign: 'Changes in activity level', detail: 'Reluctance to exercise, play, or climb stairs that was previously easy; stopping more frequently on walks; a dog that always greeted you at the door now not rising — all represent activity changes that warrant investigation for pain. Carpeted wooden pet steps are how a dog that stopped using the stairs to the bed can still get up without a jump, so the reluctance is visible as stairs-versus-floor instead of a vague "slowing down." They are not foam dog stairs, not a dog ramp, and not a rear-support harness. They do not treat arthritis. A wide-platform veterinary floor scale is how "not rising" and a quieter week get a number — weigh on the same platform, same time of day. It is not a digital pet scale, not an analog bathroom scale, and not a hanging luggage scale. A falling number is a reason to call the veterinarian, not a diet hop and not a diagnosis.' },
  { sign: 'Altered gait or movement', detail: 'Limping is obvious. Subtle gait changes — short-striding on one limb, head bobbing (horses and dogs both head-bob when a forelimb is painful — the head rises when the painful limb bears weight), asymmetric movement — are harder to catch but meaningful. Watch the gait on a flat, familiar surface after the dog rises. A rear-support harness, a belly-support harness, an assisted-walking sling, and a wheelchair already live on other pages; this page does not hop them. Gait change is an observation, not a treatment decision.' },
  { sign: 'Changes in sleeping position or location', detail: 'A dog that changes where it sleeps — avoiding stairs to the bed, sleeping on the floor instead of furniture — may be avoiding movement that hurts. Changes in preferred sleeping positions can indicate which body areas are uncomfortable to lie on. An egg-crate foam dog kennel pad on that new floor spot is how you see whether the dog can settle, which side they avoid, and whether they still refuse the bed stairs. Carpeted wooden pet steps next to the bed are how the "avoiding stairs to the bed" observation stays specific. Neither item is an orthopedic dog bed, a dog ramp, or a pain treatment.' },
  { sign: 'Reduced appetite', detail: 'Pain suppresses appetite. A dog that is eating less without a clear dietary explanation warrants evaluation. Oral or dental pain specifically causes reluctance to chew, preference for wet food, or dropping food while eating. A wide-platform veterinary floor scale is how a quieter bowl becomes a weekly weight instead of a guessed "maybe thinner." It does not diagnose dental disease, it does not hop a dental chew, and it does not replace the veterinarian who examines the mouth.' },
  { sign: 'Excessive licking of a body area', detail: 'Dogs instinctively lick painful areas. Repeated licking of a paw, joint, or body area — especially if the area appears normal — indicates pain at that location. Hot spots frequently originate from licking that started as pain behavior before becoming self-perpetuating. Recovery cones, lick mats, and joint-support treats already live on other pages. This page does not hop them.' },
  { sign: 'Vocalization', detail: 'Whimpering, yelping when touched or moved, groaning when lying down or rising. Many stoic dogs vocalize only in significant acute pain — chronic pain may produce minimal vocalization even when substantial.' },
  { sign: 'Aggression or personality change', detail: 'New-onset aggression, particularly when a specific body area is approached or touched, is pain behavior in a significant proportion of dogs brought to veterinary behaviorists. Rule out pain before attributing unexplained aggression to behavioral causes. Calming chews and behavior supplements stay off this page — they are not pain-assessment gear.' },
  { sign: 'Restlessness or inability to settle', detail: 'A dog that cannot find a comfortable position, repeatedly lies down and rises, or paces — particularly at night — may be experiencing pain that prevents sustained rest. An egg-crate foam dog kennel pad is how that lie-down-and-up cycle gets a consistent floor surface instead of a rotating pile of blankets. It does not sedate the dog, it does not hop a calming chew, and it is not a substitute for the veterinarian who evaluates night pacing.' },
  { sign: 'Shallow or labored breathing', detail: 'Chest or abdominal pain causes shallow breathing (expanding the chest or abdomen hurts). Panting at rest without heat or exercise — particularly in a stoic dog — is a pain indicator worth investigating. Analog wall clocks with a second hand already live on the canine-influenza page; this page does not hop them. A change in resting effort is a reason to call, not a shopped clock.' },
  { sign: 'Squinting or pawing at the face', detail: 'Eye pain — corneal ulcer, glaucoma, uveitis — causes squinting, rubbing at the eye or face, and discharge. Any squinting eye in a dog warrants same-day veterinary evaluation. Eye wipes and recovery collars stay on other pages. This page does not hop them.' },
  { sign: 'Changes in elimination habits', detail: 'Reluctance to posture for urination or defecation — crouching low, not fully assuming the normal position — can indicate perineal, lower back, or joint pain. New house soiling in a previously reliable dog may reflect pain when moving to eliminate location. Belly bands, dog diapers, and pee pads already live on other pages. This page does not hop them.' },
]
export default function PainSignsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Signs Your Dog Is in Pain', subtitle: 'Dogs evolved to hide pain — displaying weakness to a predator or within a pack was dangerous. This evolutionary legacy means dogs in significant chronic pain often show subtle, easily missed signs rather than obvious distress. Recognizing pain early means treatment begins earlier and the dog suffers less.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Pain Signs', href: '/health/pain-signs-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Pain Management in Dogs', href: '/health/pain-management-dogs', category: 'Veterinary Guide' },
          { title: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs', category: 'Veterinary Guide' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">The Dog Grimace Scale</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-2">Research-validated facial pain assessment:</p>
            {['Narrowed, squinted eyes', 'Tense orbital area', 'Rounded or drawn back ears', 'Raised or tense cheeks', 'Tense muzzle'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-brand-primary">→</span>{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Pain Management in Dogs', href: '/health/pain-management-dogs' }, { label: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-pain-signs" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog pain-signs observation checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog pain-signs observation checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the household observation notes that
              match the 14 signs on this page — an
              egg-crate foam dog kennel pad so a dog
              that left the bed for the floor has a
              surface you can watch for hunched posture,
              a tucked abdomen, and night restlessness,
              carpeted wooden pet steps so reluctance to
              climb stairs to the bed stays a specific
              observation, and a wide-platform
              veterinary floor scale so quieter activity
              and a smaller appetite get a weekly
              weight. Educational checklist, not a
              diagnosis, not an NSAID hop, and not a
              substitute for the veterinarian who
              evaluates pain. Orthopedic dog beds, dog
              ramps, foam dog stairs, rear-support
              harnesses, digital pet scales, grimace
              printables, and Rx stay on other pages.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog pain-signs observation checklist"
              subtitle="Email the foam-pad, pet-steps, and floor-scale notes. No spam."
              ctaText="Email my dog pain-signs observation checklist"
              source="health-pain-signs-dogs-under-hero"
            />
          </div>

          <p className="text-base text-brand-text-mid leading-relaxed mb-8">A stoic dog in chronic pain may show none of the classic &quot;pain&quot; behaviors — no whimpering, no limping, no obvious distress. They adapt. They stop doing things that hurt, move differently, interact less. The change from baseline is what matters. Know your dog&apos;s normal. Household observation gear — an egg-crate foam dog kennel pad, carpeted wooden pet steps, a wide-platform veterinary floor scale — is how posture, stair reluctance, restlessness, and weight change stay visible. It does not treat pain, it does not hop an NSAID, and it is not a reason to delay a veterinary exam.</p>
          {SIGNS.map((item, i) => (
            <div key={item.sign} className="flex gap-4 mb-5 p-5 rounded-xl border border-brand-border bg-brand-surface">
              <span className="font-display font-black text-brand-primary text-2xl flex-shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-base m-0 mb-2 leading-snug">{item.sign}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{item.detail}</p>
              </div>
            </div>
          ))}

          <h2 id="kit">14-sign pain-observation kit</h2>
          <p>
            Everyday household monitoring and comfort
            supplies that match the 14 pain signs on
            this page — an egg-crate foam dog kennel
            pad so a dog that changed sleeping location
            or cannot settle has a floor surface you
            can watch for hunched posture and a tucked
            abdomen, carpeted wooden pet steps so
            reluctance to climb stairs to the bed is a
            specific observation instead of a vague
            slowdown, and a wide-platform veterinary
            floor scale so quieter activity and a
            reduced appetite get a weekly weight.
            These are educational observation tools,
            not treatments. They do not treat pain,
            they do not replace a veterinarian, and
            they are not a ranked product list.
            Orthopedic dog beds, dog ramps, raised
            bowls, traction rugs, foam dog stairs,
            rear-support harnesses, belly-support
            harnesses, assisted-walking slings,
            digital pet scales, analog bathroom
            scales, hanging luggage scales, grimace
            printables, first-aid kits, calming
            chews, lick mats, and joint-support
            treats already live on other pages. This
            page does not hop NSAID, opioid,
            gabapentin, vaccine, or other Rx ASINs.
            This page does not claim hands-on
            testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (egg-crate foam dog kennel pad /
              carpeted wooden pet steps /
              wide-platform veterinary floor scale).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1074
              wire+basket+dog+muzzle /
              quilted+disposable+underpads /
              handheld+aa+led+flashlight, #1073
              double+door+wire+dog+crate /
              pet+safe+kennel+disinfectant+spray /
              analog+wall+clock+with+second+hand, #1072
              tick+removal+hook /
              fine+tooth+flea+comb /
              laminated+tick+identification+card, #1071
              letter+size+expanding+file+organizer /
              sterile+urine+specimen+cup /
              12+hour+mechanical+kitchen+timer,
              orthopedic+dog+bed, dog+ramp,
              foam+dog+stairs,
              dog+rear+support+harness,
              digital+pet+scale,
              analog+bathroom+scale,
              pet+first+aid+kit, led+medical+penlight,
              soft+dog+muzzle, dog+recovery+crate,
              calming+dog+chews, lick+mat+dog,
              joint+support+dog+treats.
              NSAID, opioid, gabapentin, vaccine, and
              Rx ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the 14-sign pain-observation kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page posture, stair-reluctance,
              restlessness, and weight-change copy —
              an egg-crate foam dog kennel pad,
              carpeted wooden pet steps, and a
              wide-platform veterinary floor scale.
              Everyday household monitoring / comfort
              gear only. They are not a ranked product
              list, they are not an NSAID or pain-med
              hop, they are not a #1074 muzzle /
              underpad / flashlight hop, they are not
              a #1073 crate / kennel-spray /
              second-hand-clock hop, they are not an
              orthopedic-bed / ramp / foam-stairs /
              rear-harness / digital-pet-scale hop,
              and they do not replace a veterinarian.
              Vets.co earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/egg+crate+foam+dog+kennel+pad?s=health-pain-signs-dogs"
                amazonLabel="Browse egg-crate foam dog kennel pads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/carpeted+wooden+pet+steps?s=health-pain-signs-dogs"
                amazonLabel="Browse carpeted wooden pet steps on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/wide+platform+veterinary+floor+scale?s=health-pain-signs-dogs"
                amazonLabel="Browse wide-platform veterinary floor scales on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
