import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Eye Conditions in Dogs — Cherry Eye, Cataracts | Vets.co', description: 'Common dog eye conditions: cherry eye (corrected surgically, not removed), cataracts, glaucoma (emergency), and PRA (genetic).', path: '/health/dog-eye-conditions', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Eye Conditions in Dogs', description: 'Cherry eye, cataracts, glaucoma, and PRA — identification and treatment urgency.', url: 'https://vets.co/health/dog-eye-conditions', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Eye Conditions in Dogs', description: 'Cherry eye, cataracts, glaucoma, and progressive retinal atrophy in dogs.', url: 'https://vets.co/health/dog-eye-conditions', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
const SOURCES = [
  { label: 'ACVO: Eye Conditions in Dogs', url: 'https://www.acvo.org/public-resources', publisher: 'American College of Veterinary Ophthalmologists' },
  { label: 'Merck Veterinary Manual: Eye Diseases of Dogs', url: 'https://www.merckvetmanual.com/eye-and-ear/eye-diseases-of-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Eye Care for Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/eye-care-pets', publisher: 'AVMA' },
]
export default function DogEyeConditionsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Eye Conditions in Dogs', subtitle: 'The eye conditions most commonly seen in dogs range from minor irritations to sight-threatening emergencies requiring same-day treatment. Knowing which situation you are looking at — and which ones cannot wait — is the essential skill for any dog owner.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
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
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Red-flag list — same-day vet visit">
            Any sudden change in eye appearance — cloudy or bluish tint, a visibly enlarged globe, squinting and reluctance to open the eye, sudden bumping into furniture, eye trauma, or chemical exposure — needs same-day evaluation. Glaucoma can cause permanent vision loss within hours; corneal lacerations and lens luxations are surgical emergencies.
          </CalloutBox>

          <h2>Cherry Eye (Prolapsed Nictitans Gland)</h2>
          <DropCap>Cherry eye — the prolapse of the gland of the third eyelid — appears as a red, round, cherry-like mass in the inner corner of the eye. It looks alarming but is not painful acutely. It is most common in brachycephalic breeds (Bulldogs, Pugs, Boston Terriers, Beagles, Cocker Spaniels). The third eyelid (nictitating membrane) contains a tear gland that contributes approximately 30-40% of the tear film. If this gland is surgically removed (an older, now discouraged treatment), the dog is at increased risk for keratoconjunctivitis sicca (KCS / dry eye) for the rest of its life.</DropCap>
          <p>Current standard treatment: surgical repositioning (tacking the gland back into its normal position) rather than removal. Success rate approximately 90% — some dogs require a second procedure. Prompt treatment is preferable — a chronically prolapsed gland becomes inflamed and more difficult to reposition successfully. Any dog with cherry eye should see a veterinarian within a few days of appearance; ophthalmology referral provides the best surgical outcomes.</p>

          <h2>Cataracts</h2>
          <p>A cataract is opacity of the crystalline lens — appearing as a white or blue-white cloudiness within the pupil (the dark central part of the eye, not the iris). It must be distinguished from nuclear sclerosis — a normal age-related change where the lens appears hazy in older dogs but does not significantly impair vision. Nuclear sclerosis is bilateral, affects the lens nucleus centrally, and appears more grayish-blue than white.</p>
          <p>Cataracts have multiple causes: genetic (hereditary cataracts — DNA test available in many predisposed breeds), diabetic (dogs with diabetes mellitus develop cataracts rapidly — often within weeks of diagnosis due to glucose accumulation in the lens), inflammatory (uveitis), and traumatic. Diabetic cataracts are the most common acquired cataracts in dogs and progress very quickly. Treatment: phacoemulsification (cataract surgery) performed by a veterinary ophthalmologist. Outcomes are excellent in appropriate candidates — most dogs regain functional vision. Not all cataracts require surgery — early, non-visual-impairing cataracts are monitored, not treated.</p>

          <h2>Glaucoma — The Emergency</h2>
          <p>Glaucoma is elevated intraocular pressure (IOP) that damages the optic nerve and retina. It is one of the most painful conditions in veterinary medicine and causes permanent vision loss within hours if not treated. The dog may not show obvious pain signs — dogs hide pain well — but the eye will appear: cloudy or bluish (corneal edema from pressure), enlarged (buphthalmos — the globe physically enlarges from chronic pressure), and the pupil may be dilated and unresponsive to light.</p>
          <p>Glaucoma in dogs is often secondary to another condition (uveitis, lens luxation, intraocular tumors) or primary/hereditary (particularly common in Cocker Spaniels, Basset Hounds, Chow Chows, Siberian Huskies, and Nordic breeds). Any dog with a sudden change in eye appearance — clouding, enlargement, or apparent pain (squinting, reluctance to open the eye) — requires same-day evaluation. Treatment: emergency pressure reduction with mannitol IV, topical carbonic anhydrase inhibitors, prostaglandin analogues. Even with prompt treatment, the prognosis for vision is guarded once significant IOP elevation has occurred.</p>

          <h2>Progressive Retinal Atrophy (PRA)</h2>
          <p>PRA is a hereditary degeneration of the photoreceptors in the retina — rods first (night vision), then cones (day vision), progressing to total blindness over months to years. It is not painful. There is no treatment. Many breeds have DNA tests available for specific PRA mutations — testing breeding dogs eliminates production of affected offspring.</p>
          <p>Signs: progressive night blindness (the dog bumps into things in low light, is reluctant to navigate in the dark, shows fear in dimly lit environments) that gradually worsens to daytime vision loss. Dogs adapt remarkably well to progressive vision loss — familiar environments remain navigable even with significant visual impairment. Keep furniture placement consistent, use scent markers on key items, and avoid moving the dog to unfamiliar environments without guidance. Blind dogs can live full, happy lives.</p>

          <h2>Keratoconjunctivitis Sicca (KCS / Dry Eye)</h2>
          <p>KCS is inadequate tear production causing dry, inflamed corneal and conjunctival surfaces. Signs: thick, mucoid, yellow-green discharge (the body produces mucus as a substitute for tears), red conjunctiva, dull corneal surface, and in chronic cases, corneal pigmentation and scarring that impairs vision. Most commonly caused by immune-mediated destruction of the lacrimal glands — treated with topical cyclosporine or tacrolimus (immunosuppressants that restore tear production in most dogs within 4-8 weeks of daily application). Lifelong treatment is required. Brachycephalic breeds and Cocker Spaniels are predisposed.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
