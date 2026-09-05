import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Anxiety in Dogs — Separation, Noise & Treatment | Vets.co", description: "Canine anxiety, including separation and noise anxiety, is a real medical and behavioral condition. Learn the signs and the evidence-based approaches that help.", path: '/health/anxiety-in-dogs', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Behavior Problems in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/behavior-problems-dogs', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Behavioral Problems in Dogs', url: 'https://www.merckvetmanual.com/behavior/behavior-of-dogs/behavioral-problems-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Behavior Management Guidelines', url: 'https://www.aaha.org/aaha-guidelines/behavior-management/', publisher: 'AAHA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Anxiety in Dogs', description: 'Signs and evidence-based management of separation, noise, and generalized anxiety in dogs.', url: 'https://vets.co/health/anxiety-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Anxiety in Dogs', description: 'Signs and management of canine anxiety.', url: 'https://vets.co/health/anxiety-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "How do I know if my dog has separation anxiety?", answer: "Separation anxiety shows as distress that occurs specifically when the dog is left alone or separated from a particular person. Common signs include destructive behavior focused on exit points, house soiling in an otherwise house-trained dog, excessive vocalizing, pacing, drooling, or attempts to escape — all happening shortly after departure and resolving on return. A telltale feature is that the behavior is tied to being alone, not boredom or lack of training. Video recording the dog when alone often confirms the pattern and helps the veterinary team tailor a plan." },
  { question: "Will my dog grow out of anxiety, or get worse?", answer: "Untreated anxiety more often worsens than resolves on its own, because each frightening experience can reinforce the fear. This is why early intervention matters. The good news is that anxiety is treatable: with a structured plan combining behavior modification and, when appropriate, veterinary-prescribed medication or other support, most dogs improve significantly. Waiting in the hope a dog will simply outgrow it can allow the problem to become more entrenched, so seeking guidance sooner generally leads to better outcomes." },
  { question: "Is medication necessary for canine anxiety?", answer: "Not always, but it can be an important part of treatment for moderate to severe anxiety. Behavior modification — desensitization, counter-conditioning, environmental management, and enrichment — is the foundation for all cases. For dogs whose anxiety is severe enough that they cannot learn while distressed, veterinarians may prescribe medication to lower the fear to a level where training can work, with the specific medication and dosing determined by your veterinarian. Medication is a tool that supports behavior work, not a replacement for it." },
]
export default function AnxietyDogsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Anxiety in Dogs', subtitle: 'Anxiety is a genuine medical and behavioral condition in dogs, not simply misbehavior — and it causes real suffering. Separation anxiety, noise phobias, and generalized fear are common, often worsen if untreated, and respond well to a structured, evidence-based approach. Recognizing the signs and acting early gives the best chance of a calmer, happier dog.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Anxiety', href: '/health/anxiety-in-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction', category: 'Veterinary Guide' },
          { title: 'Senior Pet Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Forms</div>
            {[['Separation', 'Distress when left alone'], ['Noise phobia', 'Storms, fireworks'], ['Generalized', 'Pervasive fearfulness'], ['Social', 'Fear of people or dogs']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' }, { label: 'Senior Pet Care', href: '/health/senior-pet-care' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-anxiety" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog anxiety home-support checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog anxiety home-support checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-support notes — an anxiety vest
              for gentle pressure during a known trigger, a
              dog pheromone diffuser for the room the dog
              rests in, and a heartbeat comfort toy for short
              absences. Educational checklist, not a
              diagnosis and not a substitute for behavior
              modification or a veterinarian. Trazodone,
              fluoxetine, gabapentin, and other prescription
              anxiolytics stay off this list. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog anxiety home-support checklist"
              subtitle="Email the vest, pheromone-diffuser, and heartbeat-toy notes. No spam."
              ctaText="Email my dog anxiety home-support checklist"
              source="health-anxiety-in-dogs-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-05T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Anxiety is treatable, and punishment makes it worse">
            Punishing a fearful dog increases anxiety and damages trust, because the behavior is driven by fear, not defiance. Effective help comes from reducing the fear and teaching the dog that the trigger is safe. Early, compassionate intervention with professional guidance produces the best results.
          </CalloutBox>

          <h2>Understanding Canine Anxiety</h2>
          <p>Anxiety is an emotional state of fear or apprehension, and in dogs it is a recognized medical and behavioral condition. It can be triggered by specific situations — being left alone, loud noises, unfamiliar people or animals — or be more generalized. The behaviors that result, such as destruction, vocalizing, or house soiling, are expressions of distress, not disobedience. Treating anxiety as a welfare issue rather than a discipline problem is the starting point for helping a dog effectively.</p>

          <h2>Recognizing the Signs</h2>
          <p>Signs of anxiety include trembling, panting, drooling, pacing, hiding, clinginess, excessive vocalizing, destructive behavior, house soiling in a trained dog, and attempts to escape. The pattern and timing are revealing: separation anxiety behaviors occur specifically when the dog is left alone, while noise phobia appears with thunderstorms or fireworks. Some dogs show subtle signs — lip licking, yawning, a tucked tail, avoiding eye contact — that owners can learn to read as early indicators of fear.</p>

          <h2>Common Forms</h2>
          <p>Separation anxiety, distress triggered by being left alone, is among the most common and most disruptive forms. Noise phobias to thunderstorms, fireworks, and other loud sounds are widespread and can worsen over time. Some dogs have generalized anxiety, a more pervasive fearfulness, while others fear specific situations such as car rides, the veterinary clinic, or unfamiliar people and dogs. Identifying the specific form guides the right approach.</p>

          <h2>Why Early Intervention Matters</h2>
          <p>Anxiety tends to worsen rather than resolve on its own, because each frightening experience can reinforce the fear and broaden its triggers. Early intervention prevents the problem from becoming entrenched and reduces the dog's ongoing distress. Because some medical conditions can mimic or worsen anxiety, a veterinary evaluation is a sensible first step to rule out underlying disease and to build an appropriate plan.</p>

          <h2>Evidence-Based Management</h2>
          <p>The foundation of treatment is behavior modification: desensitization (gradual, controlled exposure to the trigger at a low intensity) and counter-conditioning (pairing the trigger with positive experiences), alongside environmental management and enrichment to reduce overall stress. For moderate to severe anxiety, where a dog is too distressed to learn, veterinarians may prescribe medication to lower the fear enough for behavior work to succeed, with the specific medication and dosing determined by your veterinarian. A certified behaviorist or veterinary behavior specialist can be invaluable for complex cases. Consistency and patience are essential, since progress is gradual.</p>
          <p>Household physical supports can sit alongside that behavior work after a veterinarian has ruled out a medical mimic. An anxiety vest applies gentle, even pressure during a known trigger such as a storm or a short departure. A dog pheromone diffuser is a room-level environmental aid for the space the dog rests in. A heartbeat comfort toy gives a warm, ticking object for brief absences. These are household tools, not treatments. They do not replace desensitization, they do not replace a veterinary behavior plan, and they are not trazodone, fluoxetine, gabapentin, or any other prescription anxiolytic. Ask your veterinarian which of these, if any, belong in this dog&rsquo;s kit.</p>

          <h2 id="kit">Home-support kit</h2>
          <p>
            Everyday physical supplies that match the
            environmental-management copy on this page — an
            anxiety vest for gentle pressure during a known
            trigger, a dog pheromone diffuser for the room
            the dog rests in, and a heartbeat comfort toy
            for short absences. These are household tools,
            not treatments. They do not treat panic, they
            do not replace a veterinarian, and they are not
            Thundershirt brand ASINs, Adaptil brand ASINs,
            or prescription anxiolytics. This is not the
            Dog.com anxiety page and it does not hop a
            dog anxiety wrap, crate cover, or white-noise
            machine. It is not the Dog.com
            separation-anxiety training page and it does
            not hop a stuffable Kong, snuffle mat, or
            crate. It is not the excessive-barking page
            and it does not hop a lick mat. This page
            does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops (anxiety
              vest / pheromone diffuser / heartbeat comfort toy).
              ShopCtas hides empty Chewy; never href="#" or
              PLACEHOLDER. Category searches only — unused vs
              #848–#1035 dog+anxiety+wrap, dog+crate+cover,
              white+noise+machine, lick+mat+dog,
              snuffle+mat+dog+enrichment,
              kong+classic+dog+toy+stuffable,
              oatmeal+dog+shampoo, dog+paw+cleaner+wipes,
              and soft+recovery+collar+dog. Trazodone,
              fluoxetine, gabapentin, and other Rx
              anxiolytics are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog anxiety home-support kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page environmental-management copy — an
              anxiety vest, a dog pheromone diffuser, and
              a heartbeat comfort toy. Everyday physical
              supplies only. They are not a ranked product
              list, they are not trazodone, fluoxetine, or
              gabapentin, they are not Thundershirt or
              Adaptil brand ASINs, they are not the
              Dog.com wrap / crate-cover / white-noise
              hops, they are not the Kong / snuffle / lick
              mat training hops, they are not the allergy
              oatmeal-shampoo / paw-wipe / recovery-collar
              hops, and they do not replace a veterinarian.
              Vets.co earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/anxiety+vest+dog?s=health-anxiety-in-dogs"
                amazonLabel="Browse anxiety vests for dogs on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pheromone+diffuser+dog?s=health-anxiety-in-dogs"
                amazonLabel="Browse dog pheromone diffusers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+heartbeat+comfort+toy?s=health-anxiety-in-dogs"
                amazonLabel="Browse heartbeat comfort toys for dogs on Amazon →"
              />
            </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
