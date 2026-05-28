import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Dog Eye Conditions — KCS, Glaucoma, Cherry Eye | Vets.co',
  description: 'Dog eye conditions: KCS, corneal ulcer, conjunctivitis, glaucoma, cataracts, cherry eye, PRA, entropion. Red flags, urgency, and treatment per condition.',
  path: '/health/dog-eye-conditions',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Eye Conditions in Dogs',
  description: 'KCS, corneal ulcer, conjunctivitis, glaucoma, cataracts, cherry eye, PRA, entropion/ectropion, and lens luxation in dogs.',
  url: 'https://vets.co/health/dog-eye-conditions',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Eye Conditions in Dogs',
  description: 'Common and emergency canine eye conditions — identification, urgency, diagnosis, and treatment.',
  url: 'https://vets.co/health/dog-eye-conditions',
  authorName: 'Vets.co Editorial',
  lastReviewed: '2025-05-01',
})

const combined = combineSchemas(schema, med)

const FAQS = [
  {
    question: "Is it ever okay to put human eye drops in my dog's eye?",
    answer:
      "No, not without veterinary direction. Many human OTC eye drops contain vasoconstrictors (tetrahydrozoline / naphazoline — the active ingredients in Visine and similar redness-relieving drops) that can cause significant problems in dogs, including systemic absorption effects. Lubricating artificial tears without active ingredients are sometimes used in dogs under veterinary guidance for mild dryness, but the choice of preservative matters — some preservatives are corneal irritants with repeated use. Any dog with red or irritated eyes warrants a veterinary exam to rule out corneal ulceration, glaucoma, or KCS before any drops are used. Steroid-containing drops are particularly dangerous to use empirically: a steroid drop placed in an eye with an undiagnosed corneal ulcer will cause the ulcer to deepen rapidly and can lead to perforation.",
  },
  {
    question: 'When does an eye problem need a same-day visit?',
    answer:
      'Same-day: sudden cloudiness or bluish tint to the cornea (possible glaucoma or corneal edema), the eye visibly bulging from the socket (proptosis or buphthalmos), sudden vision loss or the dog walking into things, intense pain (squinting, pawing, refusing to open the eye), any chemical exposure, any trauma to the eye, sudden onset of a red/blue/painful eye, or hyphema (blood in the front of the eye). These are urgent — delaying past a few hours risks permanent vision loss. Less urgent but should be seen within 1–2 days: mild discharge, mild redness, mild squinting that resolves on its own. A dog rubbing one eye intermittently with watery discharge can usually wait for a normal appointment; a dog squinting hard and refusing to open the eye cannot.',
  },
  {
    question: 'My dog has a thick yellow-green discharge — is that an infection?',
    answer:
      "Thick mucoid discharge in dogs is most commonly a sign of keratoconjunctivitis sicca (dry eye / KCS) rather than infection. Bacterial conjunctivitis does occur, but it is far less common than KCS as a cause of chronic mucoid discharge. The body produces mucus to compensate for inadequate tear production, and that mucus is what owners see. A Schirmer tear test in the exam takes 60 seconds and distinguishes the two — measuring how much tear film the eye is producing. Empirical antibiotic eye drops without diagnosing the underlying problem often produces temporary improvement (the antibiotic carrier is lubricating) followed by recurrence, while the actual disease progresses.",
  },
  {
    question: 'My dog was diagnosed with PRA. Will my dog be okay?',
    answer:
      "Yes. Dogs adapt remarkably well to progressive blindness — far better than most people expect. Vision loss from PRA happens gradually over months to years, which gives the dog time to map the home by smell, sound, and proprioception. Keys to a smooth adjustment: keep furniture placement consistent, use scent markers on edges and key locations, do not move the dog to unfamiliar environments without guidance, keep one room minimally rearranged as a safe base, and use verbal cues consistently. Blind dogs play, do tricks, walk on familiar trails, and live full lives. The grief is largely the owner's — not the dog's.",
  },
  {
    question: 'How much does cataract surgery cost, and is it worth it?',
    answer:
      'Phacoemulsification cataract surgery in dogs is performed by a board-certified veterinary ophthalmologist (ACVO diplomate) and typically costs $3,500–$5,500 per eye in the US, with significant regional variation. Pre-surgical workup includes electroretinography (to confirm the retina still functions) and bloodwork. The procedure itself is similar to human cataract surgery — the cataract is fragmented with ultrasound and removed, then an artificial intraocular lens is placed. Published success rates for appropriate candidates are around 90% for restoring functional vision in the short term, with lower long-term success due to post-surgical complications (uveitis, glaucoma, retinal detachment). For diabetic cataracts in an otherwise healthy dog, surgery within months of cataract development gives the best outcomes — delayed surgery on mature cataracts has worse prognosis.',
  },
  {
    question: 'My dog squints in bright sunlight — is that normal?',
    answer:
      'Some squinting in bright sunlight is normal — dogs do not have the same pupillary control humans do and bright direct sun is uncomfortable for many. What is not normal: persistent squinting indoors, squinting in normal indoor light, asymmetric squinting (one eye squinting more than the other), or squinting paired with discharge, redness, or visible third eyelid. Any of those warrants an exam. Blepharospasm (forced squinting) is one of the most reliable signs of corneal pain in dogs — the dog cannot tell you the eye hurts, but the squint will.',
  },
]

export default function DogEyeConditionsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="vets-co"
        hero={{
          title: 'Eye Conditions in Dogs',
          subtitle:
            'Canine eye conditions range from minor irritations to sight-threatening emergencies requiring same-day treatment. This guide covers the most common conditions — KCS (dry eye), corneal ulcers, conjunctivitis, glaucoma, cataracts, cherry eye, progressive retinal atrophy, entropion and ectropion, and lens luxation — with breed predispositions, urgency, diagnostic approach, and treatment for each. The red-flag section at the end is the most important — knowing which signs cannot wait until tomorrow is the difference between saving vision and losing it.',
          category: 'Veterinary Guide',
          authorName: 'Vets.co Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2025',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Health', href: '/health' },
          { name: 'Eye Conditions', href: '/health/dog-eye-conditions' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-danger/8 border border-brand-danger/30 rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency — Same Day</div>
              {[
                'Sudden cloudiness or bluish tint (glaucoma)',
                'Eye bulging from the socket',
                'Sudden vision loss or disorientation',
                'Intense squinting + discharge + pain',
                'Trauma to the eye or chemical exposure',
                'Blood visible inside the eye (hyphema)',
              ].map((s) => (
                <div key={s} className="py-1 text-xs text-brand-text-mid border-b border-brand-danger/15 last:border-0 flex gap-2">
                  <span className="text-brand-danger font-bold">→</span>
                  {s}
                </div>
              ))}
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Tests Your Vet May Run</div>
              {[
                ['Schirmer tear test', 'Measures tear production (KCS)'],
                ['Fluorescein stain', 'Detects corneal ulcers'],
                ['Tonometry', 'Measures eye pressure (glaucoma)'],
                ['Slit-lamp exam', 'Cornea, lens, anterior chamber'],
                ['Fundic exam', 'Retina, optic nerve'],
              ].map(([s, d]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-xs font-bold text-brand-dark">{s}</div>
                  <div className="text-2xs text-brand-text-light">{d}</div>
                </div>
              ))}
            </div>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Emergency Signs', href: '/health/emergency-signs' },
                { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
                { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
                { label: 'Find a Specialist', href: '/find-a-vet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical guidance weekly."
              source="health-eye-conditions"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2>Keratoconjunctivitis Sicca (KCS / Dry Eye)</h2>
          <p><strong>Definition.</strong> KCS is inadequate tear production causing dry, inflamed corneal and conjunctival surfaces. The most common cause in dogs is immune-mediated destruction of the lacrimal glands. KCS is one of the most common chronic ocular conditions in dogs and frequently goes undiagnosed for months because the thick mucoid discharge is mistaken for an &quot;infection&quot; that owners treat empirically.</p>
          <p><strong>Breed predispositions.</strong> The American College of Veterinary Ophthalmologists (ACVO) Genetics Committee lists Cocker Spaniels, English Bulldogs, West Highland White Terriers, Lhasa Apsos, Shih Tzus, Pugs, Cavalier King Charles Spaniels, and Yorkshire Terriers among predisposed breeds. Brachycephalic breeds are over-represented because incomplete blink and exposed corneal surface compound any baseline tear deficiency.</p>
          <p><strong>Symptoms.</strong> Thick mucoid yellow-green discharge that returns within hours of cleaning, red conjunctiva, dull non-glossy corneal surface, intermittent squinting, and in chronic cases corneal pigmentation and scarring that impairs vision.</p>
          <p><strong>Urgency.</strong> Not an emergency, but should be evaluated within days — chronic untreated KCS causes permanent corneal scarring.</p>
          <p><strong>Diagnosis.</strong> Schirmer tear test — a paper strip placed in the lower eyelid for 60 seconds. Normal tear production is &gt;15 mm/min; KCS is &lt;10 mm/min, severe KCS &lt;5 mm/min.</p>
          <p><strong>Treatment.</strong> Topical cyclosporine 0.2% or 1% (compounded) — an immunosuppressant that restores tear production in most dogs within 4–8 weeks of twice-daily application. Tacrolimus is an alternative for cyclosporine non-responders. Lifelong daily treatment is required. Artificial tear supplementation during the initial induction phase keeps the surface lubricated while the lacrimal glands recover. Topical antibiotics are added only if there is concurrent bacterial infection, not as monotherapy.</p>
          <p><strong>Prognosis.</strong> Good when caught early. Cyclosporine restores normal tear production in roughly 80% of cases, partial improvement in many of the rest. Cases caught after permanent corneal pigmentation has developed will have residual visual impairment.</p>

          <h2>Corneal Ulcer</h2>
          <p><strong>Definition.</strong> A defect in the corneal epithelium (or deeper into the stroma) that exposes underlying tissue. Causes include trauma (foreign body, scratch from another dog, plant material), KCS-related dryness, foreign material trapped under the third eyelid, and inadequate eyelid closure in brachycephalic dogs.</p>
          <p><strong>Breed predispositions.</strong> Pugs, Bulldogs, Boston Terriers, Boxers, Pekingese, and Shih Tzus — any breed with prominent globes and incomplete blink. Boxers specifically are predisposed to a chronic non-healing form called indolent ulcer (spontaneous chronic corneal epithelial defect, or SCCED).</p>
          <p><strong>Symptoms.</strong> Squinting, tearing, light sensitivity, redness, and visible cloudiness or a divot on the corneal surface in advanced cases. Pain is usually significant — the cornea is one of the most densely innervated tissues in the body.</p>
          <p><strong>Urgency.</strong> Same-day if the dog is squinting, pawing at the eye, or you can see a visible defect. A superficial ulcer can deepen to a descemetocele (one layer from perforation) within 24–48 hours if infected or if treated with steroids.</p>
          <p><strong>Diagnosis.</strong> Fluorescein stain — orange dye that adheres to denuded corneal stroma and fluoresces green under blue light, outlining the ulcer precisely.</p>
          <p><strong>Treatment.</strong> Topical broad-spectrum antibiotic (typically a fluoroquinolone or triple antibiotic), topical atropine for ciliary spasm pain relief, oral analgesia, and an Elizabethan collar at all times until healed. Re-check in 5–7 days with repeat fluorescein staining. Indolent ulcers require debridement and sometimes diamond burr or grid keratotomy. Deep ulcers and descemetoceles require surgical intervention (conjunctival graft) at a specialist.</p>
          <p><strong>Never use:</strong> any steroid-containing eye drop on an undiagnosed red eye — steroids on a corneal ulcer cause rapid deepening and potential perforation.</p>

          <h2>Conjunctivitis</h2>
          <p><strong>Definition.</strong> Inflammation of the conjunctiva (the mucous membrane covering the inside of the eyelids and the sclera). Causes: allergic (most common in dogs), bacterial, viral (less common in dogs than cats), parasitic, secondary to KCS, secondary to entropion or ectropion, foreign body, or part of systemic disease.</p>
          <p><strong>Symptoms.</strong> Red conjunctiva, watery to mucopurulent discharge, mild squinting, no significant vision loss. Allergic conjunctivitis is often bilateral and seasonal; foreign body is usually unilateral with sudden onset.</p>
          <p><strong>Urgency.</strong> 1–2 days unless paired with significant pain, vision loss, or corneal involvement.</p>
          <p><strong>Diagnosis.</strong> Exam, fluorescein stain (to rule out concurrent ulcer), Schirmer test (to rule out KCS).</p>
          <p><strong>Treatment.</strong> Depends on cause — allergic conjunctivitis responds to topical mast-cell stabilizers and short-course topical steroid only after corneal ulcer is ruled out; bacterial conjunctivitis responds to topical antibiotic; foreign body requires removal. Empirical treatment without working out the underlying cause often produces recurrence.</p>

          <h2>Glaucoma — The Emergency</h2>
          <p><strong>Definition.</strong> Elevated intraocular pressure (IOP) that damages the optic nerve and retina. One of the most painful conditions in veterinary medicine and one of the most time-sensitive. Permanent vision loss can occur within hours of acute IOP elevation.</p>
          <p><strong>Breed predispositions.</strong> Per ACVO, primary glaucoma is hereditary in Cocker Spaniels, Basset Hounds, Chow Chows, Siberian Huskies, Akitas, Shar-Peis, and Nordic breeds. Secondary glaucoma can occur in any breed following uveitis, lens luxation, or intraocular tumor.</p>
          <p><strong>Symptoms.</strong> Cloudy or bluish cornea (corneal edema from pressure), enlarged globe (buphthalmos in chronic cases), red sclera, dilated unresponsive pupil, blepharospasm and pawing at the eye, and apparent depression or lethargy from the severe pain. Dogs hide pain — significant blepharospasm and reluctance to be touched near the eye are the most reliable signs.</p>
          <p><strong>Urgency.</strong> Same day, ideally within hours. Vision loss with sustained IOP &gt;40 mmHg is permanent in many cases within 8–24 hours.</p>
          <p><strong>Diagnosis.</strong> Tonometry — measures IOP. Normal: 10–25 mmHg. Glaucoma: typically &gt;25 mmHg and often &gt;40 at presentation.</p>
          <p><strong>Treatment.</strong> Emergency IOP reduction with topical prostaglandin analogues (latanoprost), topical carbonic anhydrase inhibitors (dorzolamide), and in severe cases IV mannitol. Ongoing medical management with combination topical drops. End-stage blind painful eyes are best managed with enucleation (surgical removal) or evisceration with intrascleral prosthesis to eliminate ongoing pain. The contralateral eye in primary glaucoma is at high risk — prophylactic topical therapy is standard.</p>
          <p><strong>Prognosis for vision.</strong> Guarded once significant IOP elevation has occurred. Long-term vision retention is the exception, not the rule, particularly in primary hereditary glaucoma.</p>

          <h2>Cataracts</h2>
          <p><strong>Definition.</strong> Opacity of the crystalline lens — white or blue-white cloudiness within the pupil. Distinguish from nuclear sclerosis (normal age-related lens haziness in dogs over 7 — bilateral, appears bluish-gray, does not significantly impair vision).</p>
          <p><strong>Breed predispositions.</strong> Hereditary cataracts in Cocker Spaniels, Boston Terriers, Miniature Schnauzers, Bichon Frises, Standard Poodles, Labrador Retrievers, Golden Retrievers, Siberian Huskies, and others. ACVO maintains breed-specific genetic eye-disease databases and DNA tests are available for many breeds.</p>
          <p><strong>Causes.</strong> Hereditary (most common); diabetic (dogs with diabetes mellitus develop cataracts very rapidly — often within weeks of diagnosis due to glucose accumulation in the lens — most diabetic dogs eventually develop cataracts); inflammatory (secondary to uveitis); traumatic; toxic; congenital.</p>
          <p><strong>Symptoms.</strong> Visible cloudiness in the pupil, progressive vision impairment as the cataract matures, bumping into things in low light first, then in normal light.</p>
          <p><strong>Urgency.</strong> Not same-day unless paired with painful uveitis. Diabetic dogs with new cataracts should see an ophthalmologist within weeks — early surgery has the best outcomes.</p>
          <p><strong>Diagnosis.</strong> Direct exam, slit-lamp. Electroretinography (ERG) confirms retinal function before surgery is offered.</p>
          <p><strong>Treatment.</strong> Phacoemulsification cataract surgery by a board-certified ACVO ophthalmologist with intraocular lens placement. Not all cataracts require surgery — early non-visual-impairing cataracts are monitored. Lifelong topical anti-inflammatory drops are typically required even with successful surgery to control lens-induced uveitis.</p>
          <p><strong>Prognosis.</strong> Excellent for short-term functional vision in appropriate candidates; long-term outcomes depend on post-surgical complication management (uveitis, glaucoma, retinal detachment).</p>

          <h2>Cherry Eye (Prolapsed Nictitans Gland)</h2>
          <p><strong>Definition.</strong> Prolapse of the gland of the third eyelid — appears as a red, round, cherry-like mass in the inner corner of the eye. The third eyelid contains a tear gland that contributes roughly 30–40% of the tear film, which is why historical surgical removal of the gland is no longer acceptable practice — it predisposed the dog to lifelong KCS.</p>
          <p><strong>Breed predispositions.</strong> Bulldogs, French Bulldogs, Boston Terriers, Pugs, Beagles, Cocker Spaniels, Lhasa Apsos, Shih Tzus, Mastiffs, and Neapolitan Mastiffs.</p>
          <p><strong>Symptoms.</strong> A visible red mass in the inner corner of one or both eyes; mild irritation; sometimes increased tearing. Not painful acutely, but chronic exposure causes inflammation and the gland becomes more difficult to reposition with time.</p>
          <p><strong>Urgency.</strong> Within days to weeks. Not an emergency but should not be left untreated.</p>
          <p><strong>Treatment.</strong> Surgical repositioning (Morgan pocket technique or anchor technique) — never excision. Published success rates for repositioning are roughly 90%; some dogs require a second procedure. Bilateral disease is common even when initial prolapse is unilateral, so the other eye should be monitored.</p>

          <h2>Progressive Retinal Atrophy (PRA)</h2>
          <p><strong>Definition.</strong> Inherited degeneration of the retinal photoreceptors — rods (responsible for low-light vision) deteriorate first, then cones (day vision), progressing to total blindness over months to years. Not painful. No effective medical treatment exists.</p>
          <p><strong>Breed predispositions.</strong> Per ACVO, prevalence is highest in Cocker Spaniels, Miniature/Toy Poodles, Labrador Retrievers, Portuguese Water Dogs, Irish Setters, Tibetan Terriers, Australian Cattle Dogs, and many others. Breed-specific DNA tests are available for most known PRA mutations — testing breeding dogs prevents production of affected offspring.</p>
          <p><strong>Symptoms.</strong> Progressive night blindness — bumping into things in dim light, reluctance to navigate stairs at dusk, fear in darkened rooms — followed over months to years by daytime vision loss.</p>
          <p><strong>Urgency.</strong> Not urgent. Diagnosis is for prognosis and management, not treatment.</p>
          <p><strong>Diagnosis.</strong> Fundic exam shows characteristic tapetal hyperreflectivity and retinal vascular attenuation; electroretinography is diagnostic.</p>
          <p><strong>Treatment.</strong> No medical treatment. Management: keep furniture placement consistent, use scent markers, avoid unfamiliar environments without guidance, use verbal cues consistently. Dogs adapt very well to progressive blindness when given time and a stable home.</p>

          <h2>Entropion and Ectropion</h2>
          <p><strong>Entropion</strong> is inversion of the eyelid margin, causing the eyelashes and haired skin to rub against the cornea. Common in Shar-Peis, Chow Chows, Rottweilers, Bulldogs, Saint Bernards, Mastiffs. Symptoms: chronic squinting, tearing, secondary corneal ulcers, and chronic corneal pigmentation. Treatment: surgical correction (Hotz-Celsus procedure) — temporary tacking sutures in puppies under 6 months, definitive surgery once skull conformation has matured.</p>
          <p><strong>Ectropion</strong> is eversion of the eyelid margin — the lower lid sags away from the globe, exposing the conjunctiva. Common in Bloodhounds, Saint Bernards, Bassets, Mastiffs, Cocker Spaniels. Symptoms: chronic conjunctival inflammation, recurrent infection, debris accumulation. Treatment: medical management of secondary inflammation; surgical correction for severe cases.</p>

          <h2>Lens Luxation</h2>
          <p><strong>Definition.</strong> Displacement of the lens from its normal position. Anterior luxation (lens moves into the front chamber) is a vision emergency — it obstructs aqueous outflow and causes secondary glaucoma rapidly. Posterior luxation (lens moves into the vitreous) is less acutely dangerous but still warrants ophthalmologic evaluation.</p>
          <p><strong>Breed predispositions.</strong> Primary lens luxation is hereditary in Jack Russell Terriers, Tibetan Terriers, Miniature Bull Terriers, Lancashire Heelers, Border Collies, and several other terrier breeds — caused by ADAMTS17 gene mutation in many of these breeds, for which DNA testing is available.</p>
          <p><strong>Symptoms.</strong> Sudden squinting and apparent pain; cloudy or distorted appearance to the eye; aphakic crescent (a visible crescent of the iris where the lens used to be) in posterior luxation; visible lens in the front chamber in anterior luxation.</p>
          <p><strong>Urgency.</strong> Same-day for anterior luxation — IOP can climb quickly and vision can be lost within hours.</p>
          <p><strong>Treatment.</strong> Anterior lens luxation: surgical removal (intracapsular lens extraction) by a veterinary ophthalmologist. Posterior luxation: monitor for IOP elevation and progressive complications; surgery may still be indicated.</p>

          <h2>Red Flags — Same-Day Vet Visit</h2>
          <p>Any of these warrants going in the same day, even if it means an emergency hospital after hours. Vision loss from glaucoma, anterior lens luxation, and deep corneal ulcer with perforation is measured in hours, not days.</p>
          <ul>
            <li><strong>Squinting + discharge + apparent pain.</strong> Possible corneal ulcer with secondary infection or developing glaucoma. Dog refusing to open the eye, pawing at it, or holding the head down.</li>
            <li><strong>Sudden vision loss.</strong> Bumping into objects, disoriented, refusing stairs. Differential: retinal detachment, SARDS (sudden acquired retinal degeneration syndrome), glaucoma, optic neuritis.</li>
            <li><strong>Bulging eye (proptosis or buphthalmos).</strong> Trauma-related globe displacement is an emergency requiring immediate referral. Chronic buphthalmos is end-stage glaucoma.</li>
            <li><strong>Blue or cloudy cornea.</strong> Corneal edema from glaucoma, severe uveitis, or endothelial dystrophy.</li>
            <li><strong>Intense pain.</strong> Forced squinting (blepharospasm), reluctance to be touched near the head, hiding, refusing food. Dogs hide pain — when the eye pain is bad enough that the dog is clearly distressed, it is severe.</li>
            <li><strong>Blood in the eye.</strong> Hyphema (blood in the front chamber) suggests trauma, coagulopathy, severe uveitis, or intraocular tumor.</li>
            <li><strong>Chemical or trauma exposure.</strong> Any chemical exposure — rinse with copious water or sterile saline and go to the ER immediately.</li>
          </ul>

          <h2>Daily Eye-Care Basics</h2>
          <p><strong>When to wipe.</strong> Daily gentle cleaning of normal tear staining around the inner corners with a soft cloth dampened with warm water or a vet-recommended eye-cleaning solution. Brachycephalic breeds and breeds with prominent tear staining (Maltese, Shih Tzu, Bichon) benefit from daily attention to prevent staining and dermatitis around the eyes.</p>
          <p><strong>When NOT to use OTC drops.</strong> Do not use human redness-relief drops (Visine and similar) — the vasoconstrictors are not safe for dogs and mask underlying disease. Do not use leftover steroid drops from a previous condition — a steroid drop on a corneal ulcer can perforate the eye. Do not use leftover antibiotic drops for a new red eye without re-examination.</p>
          <p><strong>What to never put in a dog&apos;s eye.</strong> Hydrogen peroxide, baby shampoo, witch hazel, soap, essential oils, breast milk, or any &quot;home remedy&quot; circulating online. The cornea is not skin — irritants that are mild on skin are damaging on cornea.</p>
          <p><strong>Plain lubricating tears.</strong> Preservative-free artificial tears are generally safe for occasional use as a rinse after dust exposure or for minor irritation, but a dog with persistent irritation needs an exam, not more drops.</p>
          <p><strong>Grooming and the eyes.</strong> Trim facial hair carefully around the eyes — hair rubbing the cornea is a common cause of chronic irritation in long-coated breeds. Use rounded-tip scissors and have the dog restrained. Be especially careful with bath products — even &quot;tearless&quot; shampoos are corneal irritants.</p>
          <p><strong>Routine vet exams include the eyes.</strong> Annual wellness visits (semiannual for seniors) include ophthalmic exam. ACVO holds an annual May ophthalmology screening event for service dogs and breeding dogs at participating ophthalmology practices nationwide — a free baseline screen for at-risk populations.</p>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
