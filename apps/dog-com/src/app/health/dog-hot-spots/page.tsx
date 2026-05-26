import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Hot Spots in Dogs (Pyotraumatic Dermatitis) — Causes, Shaving & Treatment | Dog.com', description: 'Hot spots are acute moist dermatitis — a rapidly spreading bacterial skin infection triggered by self-trauma. How to treat, why shaving the area matters, and what causes them to recur.', path: '/health/dog-hot-spots', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Hot Spots in Dogs', description: 'Causes, shaving protocol, and treatment for canine pyotraumatic dermatitis (hot spots).', url: 'https://dog.com/health/dog-hot-spots', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Hot Spots in Dogs', description: 'Pyotraumatic dermatitis — causes and treatment.', url: 'https://dog.com/health/dog-hot-spots', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function DogHotSpotsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Hot Spots in Dogs', subtitle: 'A hot spot appears suddenly — a wet, red, raw, painful lesion that can grow from dime-sized to palm-sized within hours. Formally called pyotraumatic dermatitis or acute moist dermatitis, hot spots develop when a dog scratches, licks, or bites a specific area intensely enough to break the skin, allowing surface bacteria to establish a localized infection.', category: 'Dog Health', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '8 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Hot Spots', href: '/health/dog-hot-spots' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">High-Risk Breeds</div>
            {['Golden Retriever', 'Labrador Retriever', 'German Shepherd', 'Rottweiler', 'Saint Bernard', 'Newfoundland'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
            <div className="text-2xs text-brand-text-light mt-2">Thick-coated breeds trap moisture — highest risk</div>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Skin Allergies', href: '/health/dog-skin-allergies' }, { label: 'Dog Ear Infections', href: '/health/dog-ear-infections' }, { label: 'Best Flea & Tick', href: '/reviews/best-flea-tick-prevention' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="health-hot-spots" />
        </>}
      >
        <div className="carloOS-article">
          <h2>What Triggers Hot Spots</h2>
          <p>Hot spots are secondary to an underlying trigger that initiates self-trauma. The most common triggers: <strong>allergies</strong> (environmental atopy, food allergy, or flea allergy creating an itch that the dog traumatizes), <strong>flea infestation</strong> (flea allergy dermatitis — a single flea bite on an allergic dog can initiate scratching intense enough to create a hot spot at the site of the bite, typically over the lower back and base of tail), <strong>ear infections</strong> (dogs scratch at painful ears and traumatize the skin around the ear base — the most common hot spot location), <strong>coat matting</strong> (matted fur traps moisture against the skin), and <strong>boredom or anxiety</strong> (some dogs lick compulsively, creating hot spots in the absence of any external trigger).</p>
          <p>Hot spots are most common in summer — heat and humidity create a favorable environment for bacterial proliferation. Thick-coated breeds (Golden Retrievers, Labs, German Shepherds, Newfoundlands) that trap moisture in their undercoat are highest risk.</p>

          <h2>Treatment — Shaving First</h2>
          <p>The most important first step is shaving the hair over and surrounding the hot spot — an area significantly larger than the visible lesion. Hot spots spread rapidly under the hair, and the hair holds moisture against the wound while preventing topical medications from reaching the skin. Without shaving, topical treatment is largely ineffective and the lesion continues spreading.</p>
          <p>The full extent of the hot spot is often much larger than initially visible — shaving frequently reveals that what appeared to be a small lesion has already spread under the surrounding hair. This is not a failure of previous treatment; it is the natural rapid spread of acute moist dermatitis.</p>
          <p><strong>After shaving:</strong> Clean the area gently with chlorhexidine 2% solution or dilute betadine. Allow to dry completely. Apply a drying spray or medicated topical — veterinary products containing hydrocortisone plus antimicrobials (Vetericyn, Genesis spray, Malacetic spray). The goal is to dry the wound, control bacterial growth, and reduce inflammation simultaneously.</p>
          <p><strong>E-collar (cone) or alternative:</strong> The dog must not be able to access the hot spot to lick, scratch, or bite it. Without preventing access, the lesion will not heal regardless of treatment. An e-collar is the most reliable method. Soft cone alternatives are adequate for some dogs but not for determined self-traumatizers.</p>

          <h2>Veterinary Treatment</h2>
          <p>Moderate to severe hot spots — or hot spots not improving within 48 hours of home treatment — require veterinary care. Veterinary treatment includes: clipping and cleaning under sedation if necessary (painful hot spots may require sedation for adequate preparation), injectable or oral corticosteroids to rapidly reduce inflammation and itching, systemic antibiotics if the infection has spread beyond the superficial skin (signs: warmth, swelling, spreading redness beyond the wound, fever), and identification of the underlying trigger.</p>
          <p>Cytopoint or Apoquel may be used to address underlying allergy-driven itching that is fueling hot spot development. If the trigger is not addressed, hot spots will recur.</p>

          <h2>Preventing Recurrence</h2>
          <p>Hot spots that recur despite appropriate treatment indicate an unaddressed underlying trigger. The most common unaddressed triggers: year-round flea prevention not being used consistently (flea allergy in a warm climate requires year-round prevention), environmental or food allergy not being managed, and ear infections not being fully cleared (dogs with chronic ear infections repeatedly scratch at the ear base and develop hot spots there). Addressing the trigger — allergy workup, strict flea prevention, ear disease management — prevents recurrence.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
