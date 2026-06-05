import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ReviewCard, ScoreMethodology, AffiliateDisclosure, CalloutBox } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse First Aid Guide — Colic, Wounds, Lameness | Saddle.com', description: 'Every horse owner needs basic first aid knowledge. Colic assessment, wound care, lameness evaluation.', path: '/guides/horse-first-aid-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse First Aid Guide', description: 'Colic assessment, wound care, lameness evaluation, and vital signs for horse owners.', url: 'https://saddle.com/guides/horse-first-aid-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function HorseFirstAidPage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Horse First Aid Guide', subtitle: 'Basic first aid knowledge and the ability to take and interpret vital signs are essential for every horse owner. Knowing the difference between a situation you can manage at the barn and one requiring an immediate veterinary call can save your horse\'s life — and knowing your horse\'s normal baseline makes abnormalities obvious.', category: 'Horse Care Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Horse First Aid', href: '/guides/horse-first-aid-guide' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides', category: 'Hub' },
        { title: 'Horse Nutrition Guide', href: '/guides/horse-nutrition-guide', category: 'Horse Care' },
        { title: 'Horse Grooming Guide', href: '/guides/horse-grooming-guide', category: 'Horse Care' },
        { title: 'Buying Your First Horse', href: '/guides/buying-first-horse', category: 'Horse Care' },
      ]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Normal Vital Signs</div>
          {[['Temperature', '99–101.5°F (rectal)'], ['Heart rate', '28–44 beats per minute'], ['Respiratory rate', '8–16 breaths per minute'], ['Gut sounds', 'Present all four quadrants'], ['Gum color', 'Pale pink — moist'], ['CRT', 'Under 2 seconds'], ['Digital pulse', 'Barely detectable — strong = laminitis risk']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Horse Nutrition Guide', href: '/guides/horse-nutrition-guide' }, { label: 'Horse Body Condition', href: '/guides/horse-body-condition-scoring' }, { label: 'Buying First Horse', href: '/guides/buying-first-horse' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Horse Care Guides" subtitle="Expert care and equipment guides." source="guides-first-aid" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Know Your Horse's Normal — Before an Emergency</h2>
        <p>The most important first aid preparation: know your individual horse's normal vital signs before any emergency occurs. Take temperature, heart rate, respiratory rate, and gut sounds weekly for a month when the horse is healthy — this establishes a personal baseline. The published "normal" ranges are population averages; your horse's resting heart rate of 36 versus another horse's normal of 28 matters when you're trying to determine whether 42 is alarming. Record the numbers. Keep them accessible at the barn.</p>

        <h2>Colic — The Leading Cause of Death in Horses</h2>
        <p>Colic describes abdominal pain — it is a symptom, not a diagnosis. The causes range from a simple gas accumulation that resolves with walking to a surgical impaction or displacement that is fatal without intervention within hours. The challenge: mild and severe colic can look similar in the early stages. Signs: looking at or biting the flank, pawing, getting up and down repeatedly, rolling, refusing to eat, elevated heart rate, abnormal gut sounds (or absent gut sounds).</p>
        <p><strong>First response:</strong> Remove food. Take vital signs — heart rate above 60 bpm is concerning; above 80 bpm is a significant emergency. Listen to gut sounds in all four quadrants with a stethoscope (or your ear against the flank) — normal gut sounds are gurgling and intermittent; absent sounds on any quadrant are alarming. Walk the horse quietly (10-15 minutes) — walking helps move gas and may relieve mild spasmodic colic. Do not walk exhaustingly; if the horse is not improving after 15-20 minutes of walking, call the veterinarian.</p>
        <p><strong>Call the vet immediately:</strong> Heart rate above 60 bpm. Complete absence of gut sounds. Horse has been colicking for more than 30 minutes without improvement. Horse is pawing or rolling violently and cannot be kept on its feet safely. Any sign of shock (pale or blue gums, CRT over 2 seconds, extreme weakness). Do not administer banamine (flunixin meglumine) without veterinary guidance — it masks pain that helps the vet assess severity.</p>

        <h2>Wound Assessment and Care</h2>
        <p>Horses sustain wounds regularly. The critical question: does this need a veterinarian? Call the vet for: any wound near a joint (joint infections are life-threatening — even a small wound over a joint can penetrate the joint capsule and is an emergency), wounds that are deep or gaping (require suturing — the window for successful suturing closes within hours), wounds that won't stop bleeding with direct pressure, wounds involving the eye or near the eye, and wounds on the lower limb near the hoof or coronary band.</p>
        <p>First aid for wounds: stop bleeding with clean cloth and direct pressure. Once bleeding is controlled, gently clean the wound with diluted chlorhexidine solution (not hydrogen peroxide — it damages tissue). Do not bandage wounds where there may be joint involvement without veterinary assessment — a tight bandage over an unknown joint wound can trap infection. Do not apply ointments, petroleum jelly, or caustic substances before the vet has assessed the wound.</p>

        <h2>Lameness — Grading and When It's Urgent</h2>
        <p>The <a href="https://aaep.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAEP</a> (American Association of Equine Practitioners) uses a 0-5 lameness scale: 0 = no lameness; 1 = lameness barely perceptible; 2 = consistently perceptible at trot; 3 = obvious lameness at all gaits; 4 = minimal weight bearing; 5 = non-weight bearing. Grade 3+ lameness requires same-day veterinary evaluation. Sudden, severe non-weight bearing lameness in a previously sound horse is an emergency — possible causes include a fractured coffin bone, deep digital flexor tendon rupture, or severe foot abscess (most common and benign). Do not attempt to work through lameness or administer NSAIDs before the cause is determined.</p>
        <p><strong>Digital pulse:</strong> A bounding, strong digital pulse felt at the back of the pastern (normally barely detectable) indicates increased blood flow to the foot — the classic early sign of laminitis. If you feel a strong digital pulse in a horse that is "walking tenderly" or rocking back on its hind legs to relieve front foot weight, remove grain immediately and call the veterinarian — laminitis management in the first 24-48 hours significantly affects outcome.</p>

        <h2>First Aid Kit Contents</h2>
        <p>Essential items: thermometer (digital rectal), stethoscope, flashlight, bandaging supplies (combine roll, cotton sheet, stretch gauze, vet wrap, medical tape), saline solution or dilute chlorhexidine for wound cleaning, clean cloths, Telfa non-stick pads, scissors, hoof pick, hoof gauge, leg splint or emergency bandage guide, phone numbers (veterinarian, emergency equine clinic), and a bucket for water. Optional for the prepared barn: IV catheter supplies if trained, endoscope, pulse oximeter. Keep the kit dry, organized, accessible, and reviewed annually to replace expired or depleted items.</p>

        <AffiliateDisclosure variant="inline" siteId="saddle-com" />

        <CalloutBox variant="warning" title="Supportive supplies, not treatment">
          <p>
            The products below are <em>supportive</em> — vital-signs equipment and bandaging supplies that help you take readings, stabilise a wound for transport, and be prepared. They do not treat colic, lameness, laminitis, or any other clinical condition. Treatment decisions belong to an equine veterinarian. Use these alongside veterinary care, not as a substitute.
          </p>
        </CalloutBox>
        <h2 id="picks">First Aid Kit Picks</h2>
        <p>
          Two picks that anchor the &quot;know your normal&quot; and &quot;be prepared&quot; themes the article above develops: a vital-signs set (digital thermometer + stethoscope) and a pre-stocked equine first-aid kit. This is a documented-spec comparison drawing on widely-stocked products in US equestrian retail; this page does not claim hands-on testing.
        </p>
        <ScoreMethodology />
        <ReviewCard
          id="vital-signs-set"
          badge="Know Your Normal"
          badgeEmoji="🩺"
          name="Digital Rectal Thermometer + Equine Stethoscope"
          subtitle="The two tools needed to take and interpret the vital signs above"
          score={8.7}
          winner
          description={
            <p>The article&apos;s most important point is to know your individual horse&apos;s normal vital signs before any emergency — and to do that you need a thermometer and a stethoscope, used weekly when the horse is healthy. A digital rectal thermometer (fast, accurate, safer than mercury glass) and a single-head stethoscope of basic quality are the tools. Keep both in the first-aid kit; keep a notebook with the horse&apos;s baseline numbers in the same place.</p>
          }
          specs={[
            { label: 'Thermometer', value: 'Digital rectal, plastic shell', highlight: 'good' },
            { label: 'Stethoscope', value: 'Single-head, 22+ inch tubing' },
            { label: 'Use case', value: 'Weekly when healthy + every emergency' },
            { label: 'Replacement cadence', value: 'Years (with care)' },
          ]}
          pros={['The first-step diagnostic before any vet call', 'Builds the personal-baseline habit', 'Combined cost under $40']}
          cons={['Plastic thermometers crack if dropped on concrete', 'Cheap stethoscopes have shorter tubing — get 22-inch minimum for equine work']}
          price="$25–60 combined"
          ctaText="Find equine thermometer + stethoscope"
          ctaHref="/go/smartpak/equine-thermometer-stethoscope?s=guides-horse-first-aid-guide"
          ctaAffiliateProgram="smartpak"
          ctaAffiliateProduct="equine-thermometer-stethoscope"
        />
        <ReviewCard
          id="equine-first-aid-kit"
          badge="Pre-Stocked Kit"
          badgeEmoji="🧰"
          name="Pre-Stocked Equine First Aid Kit"
          subtitle="Bandaging supplies, wound-cleaning, basic instruments in one purchase"
          score={8.2}
          description={
            <p>A pre-stocked equine first-aid kit covers most of the article&apos;s essential-items list in one purchase — combine roll, cotton sheet, stretch gauze, vet wrap, medical tape, saline / chlorhexidine wash, Telfa pads, scissors, hoof pick — usually in a labelled tote. Brand choice matters less than checking what&apos;s inside; some kits skimp on bandaging supplies (the highest-use category) or include expired wound cleaner. Add or replace any item that&apos;s short. Review the kit annually and replace expired or depleted supplies.</p>
          }
          specs={[
            { label: 'Bandaging supplies', value: 'Vet wrap, combine roll, gauze', highlight: 'good' },
            { label: 'Wound cleaning', value: 'Saline / chlorhexidine', highlight: 'good' },
            { label: 'Instruments', value: 'Scissors, hoof pick' },
            { label: 'Storage', value: 'Tote / labelled kit', highlight: 'good' },
            { label: 'Annual refresh', value: 'Required — supplies expire' },
          ]}
          pros={['One purchase covers most of the essential-items list', 'Labelled storage means supplies are findable in an emergency', 'Faster than assembling piece by piece']}
          cons={['Cheap kits skimp on bandaging (the highest-use category)', 'Some kits include expired wound cleaner — check dates', 'Will not include thermometer or stethoscope — buy those separately']}
          price="$50–150"
          ctaText="Find pre-stocked equine first-aid kits"
          ctaHref="/go/smartpak/equine-first-aid-kit?s=guides-horse-first-aid-guide"
          ctaAffiliateProgram="smartpak"
          ctaAffiliateProduct="equine-first-aid-kit"
        />
      </div>
    </ArticleLayout>
  )
}
