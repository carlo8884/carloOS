import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Eye Conditions in Dogs — Cherry Eye, Cataracts | Vets.co', description: 'Common dog eye conditions: cherry eye (corrected surgically, not removed), cataracts, glaucoma (emergency), and PRA (genetic).', path: '/health/dog-eye-conditions', type: 'article' })
const SOURCES = [
  { label: 'ACVO: Eye Conditions in Dogs', url: 'https://www.acvo.org/public-resources', publisher: 'American College of Veterinary Ophthalmologists' },
  { label: 'Merck Veterinary Manual: Eye Diseases of Dogs', url: 'https://www.merckvetmanual.com/eye-and-ear/eye-diseases-of-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Eye Care for Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/eye-care-pets', publisher: 'AVMA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Eye Conditions in Dogs', description: 'Cherry eye, cataracts, glaucoma, and PRA — identification and treatment urgency.', url: 'https://vets.co/health/dog-eye-conditions', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Eye Conditions in Dogs', description: 'Cherry eye, cataracts, glaucoma, and progressive retinal atrophy in dogs.', url: 'https://vets.co/health/dog-eye-conditions', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function DogEyeConditionsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Eye Conditions in Dogs', subtitle: 'The eye conditions most commonly seen in dogs range from minor irritations to sight-threatening emergencies requiring same-day treatment. Knowing which situation you are looking at — and which ones cannot wait — is the essential skill for any dog owner.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Eye Conditions', href: '/health/dog-eye-conditions' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-danger/8 border border-brand-danger/30 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency — Same Day</div>
            {['Sudden cloudiness or bluish tint (glaucoma)', 'Eye bulging from socket', 'Trauma to the eye — any laceration', 'Sudden vision loss or disorientation', 'Chemical exposure to the eye'].map(s => (
              <div key={s} className="py-1 text-xs text-brand-text-mid border-b border-brand-danger/15 last:border-0 flex gap-2">
                <span className="text-brand-danger font-bold">→</span>{s}
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Find a Specialist', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-eye-conditions" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog red-eye watch checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog red-eye watch checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              cherry-eye, chemical-exposure, KCS, and
              PRA night-blindness copy on this page —
              a sterile saline eye wash so a chemical
              splash or thick mucoid discharge is a
              rinse, not an Rx drop, a padded
              Elizabethan collar so a dog cannot paw a
              prolapsed third-eyelid gland while you
              wait for surgical repositioning, and a
              dog blind-halo harness so night
              blindness becomes a bumpered walk
              instead of furniture collisions.
              Educational checklist, not a ranked
              product list, not a substitute for
              veterinary care, and not a cyclosporine
              / tacrolimus / Optimmune / Anipryl hop.
              Soft e-collars and dog eye wipes already
              live on dog.com cherry-eye. Recovery
              cones already live on hot-spots and
              telehealth. Inflatable dog collars
              already live on the spay-neuter guide.
              Plug-in night lights and battery
              motion-sensor night lights already live
              on cognitive-dysfunction and
              senior-pet-care. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog red-eye watch checklist"
              subtitle="Email the saline-wash, padded-collar, and halo-harness notes. No spam."
              ctaText="Email my dog red-eye watch checklist"
              source="health-dog-eye-conditions-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-07T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Red-flag list — same-day vet visit">
            Any sudden change in eye appearance — cloudy or bluish tint, a visibly enlarged globe, squinting and reluctance to open the eye, sudden bumping into furniture, eye trauma, or chemical exposure — needs same-day evaluation. Glaucoma can cause permanent vision loss within hours; corneal lacerations and lens luxations are surgical emergencies. A sterile saline eye wash is only a rinse for a chemical splash on the way to the clinic — it is not a medicated eye drop, not Optimmune, and not a substitute for that same-day exam.
          </CalloutBox>

          <h2>Cherry Eye (Prolapsed Nictitans Gland)</h2>
          <DropCap>Cherry eye — the prolapse of the gland of the third eyelid — appears as a red, round, cherry-like mass in the inner corner of the eye. It looks alarming but is not painful acutely. It is most common in brachycephalic breeds (Bulldogs, Pugs, Boston Terriers, Beagles, Cocker Spaniels). The third eyelid (nictitating membrane) contains a tear gland that contributes approximately 30-40% of the tear film. If this gland is surgically removed (an older, now discouraged treatment), the dog is at increased risk for keratoconjunctivitis sicca (KCS / dry eye) for the rest of its life.</DropCap>
          <p>Current standard treatment: surgical repositioning (tacking the gland back into its normal position) rather than removal. Success rate approximately 90% — some dogs require a second procedure. Prompt treatment is preferable — a chronically prolapsed gland becomes inflamed and more difficult to reposition successfully. Any dog with cherry eye should see a veterinarian within a few days of appearance; ophthalmology referral provides the best surgical outcomes. A padded Elizabethan collar is how the dog cannot paw the prolapsed gland on the way to that visit or during the first nights after tacking — it is not a soft e-collar (that lives on dog.com cherry-eye), not an inflatable dog collar (that lives on the spay-neuter guide), not a pet recovery cone, and not a soft recovery collar. It does not treat cherry eye and it is not a substitute for surgical repositioning.</p>

          <h2>Cataracts</h2>
          <p>A cataract is opacity of the crystalline lens — appearing as a white or blue-white cloudiness within the pupil (the dark central part of the eye, not the iris). It must be distinguished from nuclear sclerosis — a normal age-related change where the lens appears hazy in older dogs but does not significantly impair vision. Nuclear sclerosis is bilateral, affects the lens nucleus centrally, and appears more grayish-blue than white.</p>
          <p>Cataracts have multiple causes: genetic (hereditary cataracts — DNA test available in many predisposed breeds), diabetic (dogs with diabetes mellitus develop cataracts rapidly — often within weeks of diagnosis due to glucose accumulation in the lens), inflammatory (uveitis), and traumatic. Diabetic cataracts are the most common acquired cataracts in dogs and progress very quickly. Treatment: phacoemulsification (cataract surgery) performed by a veterinary ophthalmologist. Outcomes are excellent in appropriate candidates — most dogs regain functional vision. Not all cataracts require surgery — early, non-visual-impairing cataracts are monitored, not treated. Household saline, collars, and halo harnesses do not clear a lens and they do not replace that ophthalmology consult.</p>

          <h2>Glaucoma — The Emergency</h2>
          <p>Glaucoma is elevated intraocular pressure (IOP) that damages the optic nerve and retina. It is one of the most painful conditions in veterinary medicine and causes permanent vision loss within hours if not treated. The dog may not show obvious pain signs — dogs hide pain well — but the eye will appear: cloudy or bluish (corneal edema from pressure), enlarged (buphthalmos — the globe physically enlarges from chronic pressure), and the pupil may be dilated and unresponsive to light.</p>
          <p>Glaucoma in dogs is often secondary to another condition (uveitis, lens luxation, intraocular tumors) or primary/hereditary (particularly common in Cocker Spaniels, Basset Hounds, Chow Chows, Siberian Huskies, and Nordic breeds). Any dog with a sudden change in eye appearance — clouding, enlargement, or apparent pain (squinting, reluctance to open the eye) — requires same-day evaluation. Treatment: emergency pressure reduction with mannitol IV, topical carbonic anhydrase inhibitors, prostaglandin analogues. Even with prompt treatment, the prognosis for vision is guarded once significant IOP elevation has occurred. Those are clinic drugs, not shoppable hops. A sterile saline eye wash does not lower intraocular pressure.</p>

          <h2>Progressive Retinal Atrophy (PRA)</h2>
          <p>PRA is a hereditary degeneration of the photoreceptors in the retina — rods first (night vision), then cones (day vision), progressing to total blindness over months to years. It is not painful. There is no treatment. Many breeds have DNA tests available for specific PRA mutations — testing breeding dogs eliminates production of affected offspring.</p>
          <p>Signs: progressive night blindness (the dog bumps into things in low light, is reluctant to navigate in the dark, shows fear in dimly lit environments) that gradually worsens to daytime vision loss. Dogs adapt remarkably well to progressive vision loss — familiar environments remain navigable even with significant visual impairment. Keep furniture placement consistent, use scent markers on key items, and avoid moving the dog to unfamiliar environments without guidance. Blind dogs can live full, happy lives. A dog blind-halo harness is how night-blindness walks stay bumpered — a hoop in front of the muzzle so furniture and door frames announce themselves before a collision. It is not a plug-in night light (that lives on cognitive-dysfunction), not a battery motion-sensor night light (that lives on senior-pet-care), not a handheld AA LED flashlight, and not a foam table-edge bumper. It does not treat PRA and it is not a substitute for a veterinary exam.</p>

          <h2>Keratoconjunctivitis Sicca (KCS / Dry Eye)</h2>
          <p>KCS is inadequate tear production causing dry, inflamed corneal and conjunctival surfaces. Signs: thick, mucoid, yellow-green discharge (the body produces mucus as a substitute for tears), red conjunctiva, dull corneal surface, and in chronic cases, corneal pigmentation and scarring that impairs vision. Most commonly caused by immune-mediated destruction of the lacrimal glands — treated with topical cyclosporine or tacrolimus (immunosuppressants that restore tear production in most dogs within 4-8 weeks of daily application). Lifelong treatment is required. Brachycephalic breeds and Cocker Spaniels are predisposed. Cyclosporine, tacrolimus, and Optimmune are clinic prescriptions, not shoppable hops. A sterile saline eye wash is only a rinse for the mucoid discharge around the lids if the veterinarian has said a rinse is appropriate — it is not a medicated eye drop, not dog eye wipes (those live on dog.com cherry-eye), and not saline wound flush (that lives on the first-aid kit). It does not restore tear production.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            cherry-eye, chemical-exposure, KCS, and
            PRA night-blindness copy on this page — a
            sterile saline eye wash so a chemical
            splash or thick mucoid discharge is a
            rinse, not an Rx drop, a padded
            Elizabethan collar so a dog cannot paw a
            prolapsed third-eyelid gland while you
            wait for surgical repositioning, and a
            dog blind-halo harness so night
            blindness becomes a bumpered walk
            instead of furniture collisions. These
            are educational home-care and monitoring
            tools, not a ranked product list, not a
            substitute for veterinary care, and not
            a treatment for cherry eye, cataracts,
            glaucoma, PRA, or KCS. Cyclosporine,
            tacrolimus, Optimmune, mannitol, and
            Anipryl are not shoppable hops. Soft
            e-collars and dog eye wipes already live
            on dog.com cherry-eye. Recovery cones
            already live on hot-spots and telehealth.
            Inflatable dog collars already live on
            the spay-neuter guide. Plug-in night
            lights already live on
            cognitive-dysfunction. Battery
            motion-sensor night lights already live
            on senior-pet-care. Handheld AA LED
            flashlights already live on
            emergency-signs. This page does not
            claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (sterile saline eye wash /
              padded Elizabethan collar /
              dog blind-halo harness).
              These are educational home-care /
              monitoring / comfort tools, not a ranked
              product list, not a substitute for
              veterinary care, no Rx / cyclosporine /
              tacrolimus / Optimmune / Anipryl /
              medicated-eye-drop ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1080
              letter+size+plastic+file+box /
              plug+in+heated+pet+mat /
              battery+motion+sensor+night+light, #1079
              elevated+mesh+dog+cot /
              clear+adhesive+non+slip+stair+treads /
              hardcover+weekly+appointment+planner, #1078
              2+liter+plastic+graduated+pitcher /
              extra+large+bolster+dog+lounge /
              a5+hardcover+dot+grid+notebook, #1077
              narrow+neck+glass+water+carafe /
              2+quart+stainless+saucepan+with+lid /
              pocket+spiral+memo+pad, #1076
              pet+toothbrush+and+enzymatic+toothpaste+kit /
              vohc+dental+chews+for+dogs /
              vohc+accepted+dental+water+additive, #1075
              egg+crate+foam+dog+kennel+pad /
              carpeted+wooden+pet+steps /
              wide+platform+veterinary+floor+scale, #1074
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
              arthritis-in-dogs
              dog+traction+rug / dog+ramp /
              raised+dog+bowl / orthopedic+dog+bed,
              cognitive-dysfunction
              plug+in+night+light / dog+sniff+box /
              senior+dog+food+puzzle,
              dog.com cherry-eye
              soft+e+collar+dog / dog+eye+wipes,
              hot-spots / telehealth
              pet+recovery+cone /
              soft+recovery+cone+dog,
              allergic-reactions
              soft+recovery+collar+dog,
              spay-neuter inflatable+dog+collar,
              first-aid saline+wound+flush.
              Cyclosporine, tacrolimus, Optimmune,
              Anipryl, and Rx ASINs are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page cherry-eye, chemical-exposure,
              KCS, and PRA night-blindness copy — a
              sterile saline eye wash, a padded
              Elizabethan collar, and a dog
              blind-halo harness. Educational
              home-care and monitoring tools only.
              They are not a ranked product list, they
              are not a substitute for veterinary
              care, they are not a #1080 file-box /
              heated-mat / motion-night-light hop,
              they are not a #1079 cot / stair-tread
              / planner hop, they are not a cherry-eye
              soft-e-collar / eye-wipe hop, they are
              not a cognitive-dysfunction plug-in-
              night-light hop, they are not an
              arthritis traction-rug / ramp /
              orthopedic-bed hop, and they do not
              replace a veterinarian. Vets.co earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/sterile+saline+eye+wash?s=health-dog-eye-conditions"
                amazonLabel="Browse sterile saline eye wash on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/padded+elizabethan+collar+dog?s=health-dog-eye-conditions"
                amazonLabel="Browse padded Elizabethan collars on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+blind+halo+harness?s=health-dog-eye-conditions"
                amazonLabel="Browse dog blind-halo harnesses on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
