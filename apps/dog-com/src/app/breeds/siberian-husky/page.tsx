import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Siberian Husky Guide — Exercise, Escape Prevention | Dog.com', description: 'Siberian Huskies are escape artists with very high exercise needs.', path: '/breeds/siberian-husky', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Siberian Husky Breed Guide', description: 'Exercise requirements, escape prevention, eye conditions, and zinc deficiency in Siberian Huskies.', url: 'https://dog.com/breeds/siberian-husky', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function SiberianHuskyPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Siberian Husky Breed Guide', subtitle: 'Working sled dogs bred for endurance in arctic conditions — Huskies are beautiful, energetic, and frequently misunderstood as family pets. They are not low-maintenance dogs. They require extraordinary exercise, secure containment, and owners who understand that a Husky running loose is a Husky in danger.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Siberian Husky', href: '/breeds/siberian-husky' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '35–60 lbs'], ['Lifespan', '12–14 years'], ['Exercise need', 'Extreme — 2+ hours vigorous daily'], ['Prey drive', 'High — off-leash unreliable'], ['Escape ability', 'Expert — 6ft+ fence required'], ['Shedding', 'Extreme — two heavy blow coats yearly'], ['Heat tolerance', 'Poor — northern breed']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Socialization Window', href: '/training/socialization-window' }, { label: 'Dog Anxiety', href: '/health/dog-anxiety' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-husky" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Exercise — What "High Energy" Actually Means</h2>
        <p>Siberian Huskies were bred to run 100+ miles per day in freezing temperatures pulling sleds. "High energy dog" undersells this significantly. A Husky needs minimum 2 hours of vigorous exercise daily — not a leisurely walk, but running, hiking at pace, bikejoring, canicross, skijoring (their original purpose), or dog sports. In hot climates this exercise must happen in early morning or evening to prevent heat stroke — Huskies are not adapted to warm weather and overheat quickly in temperatures above 70°F during vigorous activity.</p>
        <p>A Husky that does not receive adequate exercise is a destructive Husky. Huskies denied outlets howl (loudly, at length, in ways that distress neighbors), chew (furniture, trim, doors), dig (extensively — yards and sometimes floors), and escape. These are not behavioral failures — they are the predictable result of an animal with extreme exercise needs being kept sedentary.</p>

        <h2>Escape — The Containment Problem</h2>
        <p>Siberian Huskies are virtuoso escape artists. They climb standard 4-foot fences, dig under fences if given time, push through gates, and find gaps that seem impossibly small. A Husky that escapes is a Husky that runs — and a running Husky does not come back when called. Their recall off-leash is unreliable even in well-trained dogs. They have been bred for endurance running as an independent pursuit — the impulse to run is deeply embedded.</p>
        <p>Containment requirements: 6-foot minimum fence with a coyote roller or overhang to prevent climbing, concrete footer or buried hardware cloth to prevent digging under, self-closing and self-latching gates checked at every exit. Off-leash exercise should only occur in a securely fenced area. A Husky loose in a neighborhood or near a road is in serious danger — their running instinct overrides any traffic awareness.</p>

        <BreedHealthCard name="Hereditary Eye Conditions" riskLevel="high"
          description="Huskies are predisposed to multiple hereditary eye conditions at higher rates than most breeds. Hereditary cataracts: opacity of the lens causing progressive vision loss — DNA test available. Progressive retinal atrophy (PRA): degeneration of photoreceptors causing progressive blindness — DNA test (prcd-PRA) available. Corneal dystrophy: crystalline deposits in the corneal stroma — cosmetic in most cases but can affect vision in severe cases. Uveodermatologic syndrome (Vogt-Koyanagi-Harada-like disease): immune-mediated destruction of melanocytes affecting the eyes and skin — rare but serious, causes uveitis and potential blindness."
          signs={['Cloudiness in the lens (cataracts)', 'Night blindness progressing to full blindness (PRA)', 'Glittery or crystalline deposits on corneal surface (dystrophy)', 'Red, painful eyes with light sensitivity (uveitis)']}
          management="Annual CAER (formerly CERF) eye examination by a boarded ophthalmologist (DACVO). DNA testing for prcd-PRA and hereditary cataracts on breeding dogs. Any signs of eye pain or sudden vision changes: same-day ophthalmology evaluation." />

        <BreedHealthCard name="Zinc-Responsive Dermatosis" riskLevel="moderate"
          description="Siberian Huskies and Alaskan Malamutes are predisposed to a syndrome where the skin cannot adequately absorb or utilize dietary zinc — despite adequate zinc in the diet. The condition causes crusting, scaling, and hair loss around the face (muzzle, around the eyes, ear tips), elbows, and footpads. It is not a dietary zinc deficiency in the traditional sense — it is a malabsorption syndrome. Supplementation with elemental zinc resolves the skin signs but must be continued lifelong."
          signs={['Crusty, scaly skin around the muzzle and eyes', 'Thick crusting on footpads', 'Hair loss at affected areas', 'Secondary skin infections at affected sites']}
          management="Diagnosis by skin biopsy. Treatment: zinc supplementation (zinc methionine or zinc sulfate) — response usually visible within weeks. Lifelong supplementation required. Secondary skin infections treated with antibiotics." />

        <h2>The "Independent" Temperament</h2>
        <p>Huskies were bred to make decisions independently during long-distance sled runs — waiting for human input was not adaptive in that context. This independence makes them more challenging to train than breeds bred for close human partnership (Border Collies, German Shepherds). Huskies learn commands readily but choose when to comply based on whether they find it worth their while. This is not stubbornness — it is a selection consequence. Training Huskies requires high-value rewards, short sessions, and patience. They are not the right breed for someone who expects the responsiveness of a Golden Retriever.</p>

        <h2>Shedding</h2>
        <p>Huskies have a double coat that sheds moderately year-round and dramatically twice yearly ("blowing coat" in spring and fall — when the undercoat releases in dense clumps over 2–4 weeks). During blow coat season, daily brushing is required to manage the volume. A FURminator or similar undercoat removal tool used weekly manages year-round shedding. Huskies should not be shaved — the double coat provides insulation in both cold and hot weather. A shaved Husky loses its temperature regulation mechanism and may actually overheat more easily than an intact-coated dog.</p>
      </div>
    </ArticleLayout>
  )
}
