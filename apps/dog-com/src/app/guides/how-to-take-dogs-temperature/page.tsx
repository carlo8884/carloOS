import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  RelatedLinks, CrossPortfolioCard,
  TableOfContents,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: "How to Take a Dog's Temperature & Vital Signs at Home | Dog.com",
  description:
    "How to check your dog's temperature, heart rate, breathing, gum color and hydration at home — normal reference ranges and when to call your vet.",
  path: '/guides/how-to-take-dogs-temperature',
  category: 'Dog Health Guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: "How to Take a Dog's Temperature and Vital Signs at Home",
  description:
    "Owner's reference for checking a dog's temperature, pulse, respiratory rate, mucous membrane color, capillary refill time and hydration, with normal ranges.",
  url: 'https://dog.com/guides/how-to-take-dogs-temperature',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
})
const med = buildMedicalWebPageSchema({
  name: "How to Take a Dog's Temperature and Vital Signs at Home",
  description:
    "Practical guide to home assessment of canine temperature, heart rate, respiratory rate, gum color, capillary refill, and hydration.",
  url: 'https://dog.com/guides/how-to-take-dogs-temperature',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-06-11',
})
const howto = buildHowToSchema({
  name: "How to Take a Dog's Rectal Temperature at Home",
  description:
    "Steps for safely measuring a dog's body temperature with a digital thermometer at home.",
  url: 'https://dog.com/guides/how-to-take-dogs-temperature',
  totalTime: 'PT5M',
  steps: [
    { name: 'Prepare the thermometer', text: 'Use a digital rectal thermometer (ideally a dedicated pet thermometer). Turn it on and coat the tip with a water-based lubricant such as petroleum jelly or KY jelly.' },
    { name: 'Position your dog', text: 'Have a helper steady the dog standing or lying on its side. Lift the tail gently to expose the anus.' },
    { name: 'Insert the thermometer', text: 'Insert the lubricated tip about 1 inch (2.5 cm) into the rectum for a medium dog — less for a small dog, slightly more for a large dog. Hold it gently in place; do not force against resistance.' },
    { name: 'Wait for the reading', text: 'Keep the thermometer still until the digital unit beeps, usually 10 to 60 seconds depending on the model.' },
    { name: 'Read and clean', text: 'Remove the thermometer, read the temperature, and clean it with isopropyl alcohol wipes. Record the number with the date and time so you can track trends.' },
  ],
})

const FAQS = [
  {
    question: "What is a normal temperature for a dog?",
    answer:
      "A healthy dog's normal body temperature is approximately 99.5 to 102.5 °F (37.5 to 39.2 °C), measured rectally. This is higher than a human's normal temperature, so a dog that feels warm to the touch is not necessarily febrile. A reading of 103 °F or higher is considered a fever; a reading of 104.5 °F or higher, or below 99 °F, warrants prompt veterinary contact. A temperature at or above 106 °F is a medical emergency (heatstroke range).",
  },
  {
    question: "Can I use an ear thermometer instead of a rectal one?",
    answer:
      "Rectal measurement with a digital thermometer remains the most reliable home method and the reference standard in veterinary practice. Pet-specific digital ear (tympanic) thermometers exist and are less stressful, but they require correct placement deep in the curved ear canal and tend to be less consistent. Standard human forehead and in-ear thermometers are not validated for dogs. If you use an ear thermometer, treat borderline readings with caution and confirm rectally or with your veterinarian.",
  },
  {
    question: "How do I count my dog's heart rate at home?",
    answer:
      "Place your hand or fingers over the left side of the chest just behind the front leg, where the elbow meets the body, or feel the femoral pulse on the inside of the thigh. Count the beats for 15 seconds and multiply by four. Resting heart rate is roughly 60 to 100 beats per minute for large dogs, 100 to 140 for small dogs, and up to 180 or more for puppies. Count when the dog is calm and at rest — excitement and panting raise the rate.",
  },
  {
    question: "What do pale or blue gums mean in a dog?",
    answer:
      "Healthy gums are bubblegum pink and moist. Pale or white gums can indicate anemia, blood loss, or shock and need urgent veterinary evaluation. Blue or grey gums (cyanosis) indicate inadequate oxygen and are an emergency. Bright red gums can occur with heatstroke or some toxicities, and yellow gums suggest jaundice. Brick-red or muddy gums also warrant prompt attention. Some dogs naturally have pigmented (black-spotted) gums — check a consistently pink area.",
  },
  {
    question: "When should I call the vet about my dog's vitals?",
    answer:
      "Contact your veterinarian promptly for a temperature at or above 104.5 °F or below 99 °F, gums that are pale, blue, yellow, or brick red, a capillary refill time longer than 2 seconds, persistent rapid or labored breathing at rest, a heart rate well outside the normal range for your dog's size, or skin that stays tented when you check hydration. A temperature at or above 106 °F, collapse, or blue gums are emergencies — go to an emergency clinic immediately.",
  },
]

const combined = combineSchemas(schema, med, howto, buildFAQSchema({ questions: FAQS }))

export default function HowToTakeDogsTemperaturePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        hero={{
          title: "How to Take a Dog's Temperature & Vital Signs at Home",
          subtitle:
            "Knowing your dog's baseline vital signs — temperature, pulse, breathing rate, gum color, and hydration — turns a vague \"something is off\" into specific information your veterinarian can act on. This guide walks through each measurement, the normal reference ranges, and the thresholds that mean call now. None of it replaces a veterinary exam; it makes the call you place a better one.",
          category: 'Dog Health Guide',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'June 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: "How to Take a Dog's Temperature", href: '/guides/how-to-take-dogs-temperature' },
        ]}
        relatedLinks={[{ title: 'Dog Guides Hub', href: '/guides', category: 'Hub' }, { title: 'Is This a Dog Emergency?', href: '/tools/is-this-a-dog-emergency', category: 'Tools' }, { title: 'Body Condition Score', href: '/guides/dog-body-condition-score', category: 'Guides' }, { title: 'Dog Bloat (GDV)', href: '/health/dog-bloat-gvd', category: 'Health' }]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why a Baseline Matters', href: '#baseline' },
                { label: 'Normal Vital Sign Ranges', href: '#ranges' },
                { label: 'Taking the Temperature', href: '#temperature' },
                { label: 'Heart Rate & Pulse', href: '#pulse' },
                { label: 'Respiratory Rate', href: '#respiration' },
                { label: 'Gums, CRT & Hydration', href: '#gums' },
                { label: 'When to Call the Vet', href: '#whentocall' },
                { label: 'Building a Home Kit', href: '#kit' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Is This a Dog Emergency?', href: '/tools/is-this-a-dog-emergency' },
                { label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' },
                { label: 'Dog Vomiting', href: '/health/dog-vomiting' },
                { label: 'Senior Dog Care', href: '/health/senior-dog-care' },
                { label: 'Body Condition Score', href: '/guides/dog-body-condition-score' },
              ]}
            />
            <CrossPortfolioCard currentSite="dog-com" contentType="guide" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Evidence-based guidance every week."
              source="guide-vitals"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Dog.com Editorial"
            publishedAt="2026-06-11T00:00:00Z"
            updatedAt="2026-09-05T00:00:00Z"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the home-vitals kit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Home-vitals kit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-check notes — a digital rectal
              thermometer dedicated to the dog, a water-based
              lubricant (petroleum jelly works) for the tip, plus
              isopropyl alcohol wipes to clean it after each
              reading — so a baseline is ready before something
              is off. Educational checklist, not a diagnosis and
              not a first-aid wound kit. Gauze, Vetrap, saline
              flush, muzzles, and carriers stay on the
              first-aid-kit guide. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Home-vitals kit checklist"
              subtitle="Email the rectal-thermometer, lubricant, and alcohol-wipe notes. No spam."
              ctaText="Email my home-vitals kit checklist"
              source="guides-how-to-take-dogs-temperature-under-hero"
            />
          </div>

          <CalloutBox variant="evidence" title="TL;DR — The numbers to know">
            <p>
              <strong>Temperature:</strong> 99.5–102.5 °F normal (rectal). 104.5 °F+ or under 99 °F: call your vet. 106 °F+: emergency.
            </p>
            <p>
              <strong>Heart rate:</strong> ~60–100 bpm large dogs, 100–140 small dogs, up to 180+ puppies. <strong>Breathing at rest:</strong> ~10–35 breaths/min. <strong>Gums:</strong> pink and moist, capillary refill under 2 seconds.
            </p>
            <p>
              These ranges are general references. Establish your own dog&rsquo;s resting baseline while healthy, and contact your veterinarian for anything outside range or any sudden change.
            </p>
          </CalloutBox>

          <h2 id="baseline">Why a Resting Baseline Matters</h2>
          <DropCap>
            The single most useful thing you can do is learn your dog&rsquo;s normal vital signs while the dog is healthy and calm. &ldquo;Normal&rdquo; ranges in textbooks are wide because dogs vary enormously by size, breed, age, and fitness; a conditioned working dog and a sedentary toy breed sit at opposite ends of every range. When you already know that your dog rests at 70 beats per minute and 100.8 °F, a reading of 110 beats per minute and 103.5 °F means something. Without a baseline, the same numbers are just data points inside a broad reference band.
          </DropCap>
          <p>
            Record a few resting measurements over a normal week — temperature, heart rate, breathing rate, and a look at gum color — and write them down. This baseline becomes the comparison point that lets you, and your veterinarian, judge whether a future reading is genuinely abnormal. It is also one of the most concrete pieces of information you can give over the phone when you are deciding whether a problem can wait for a regular appointment or needs an emergency visit. Our <a href="/tools/is-this-a-dog-emergency" className="text-brand-primary hover:underline">emergency triage tool</a> walks through that decision.
          </p>

          <CalloutBox variant="warning" title="This guide does not diagnose">
            <p>
              Vital signs are screening information, not a diagnosis. They tell you whether to be concerned and how urgently — they do not tell you what is wrong or how to treat it. Any abnormal reading, or any normal reading paired with a dog that is clearly unwell, is a reason to contact your veterinarian rather than to manage the problem at home.
            </p>
          </CalloutBox>

          <h2 id="ranges">Normal Canine Vital Sign Reference Ranges</h2>
          <p>
            The ranges below are widely cited general references for healthy adult dogs at rest (consistent with the Merck Veterinary Manual and standard small-animal practice). Puppies run faster heart and breathing rates; large and giant breeds tend toward the low end of the heart-rate range.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-border text-left">
                  <th className="py-2 pr-4 font-bold text-brand-dark">Vital sign</th>
                  <th className="py-2 pr-4 font-bold text-brand-dark">Normal range (resting adult)</th>
                  <th className="py-2 font-bold text-brand-dark">Call the vet if</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-medium">Temperature</td>
                  <td className="py-2 pr-4">99.5–102.5 °F (37.5–39.2 °C)</td>
                  <td className="py-2">≥104.5 °F or &lt;99 °F (≥106 °F = emergency)</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-medium">Heart rate</td>
                  <td className="py-2 pr-4">60–140 bpm (size-dependent)</td>
                  <td className="py-2">Sustained rate well outside your dog&rsquo;s baseline</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-medium">Respiratory rate</td>
                  <td className="py-2 pr-4">10–35 breaths/min at rest</td>
                  <td className="py-2">Labored or &gt;40/min at rest, or sleeping rate &gt;30</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-medium">Gum color</td>
                  <td className="py-2 pr-4">Bubblegum pink, moist</td>
                  <td className="py-2">Pale, white, blue, yellow, or brick red</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Capillary refill time</td>
                  <td className="py-2 pr-4">Under 2 seconds</td>
                  <td className="py-2">Longer than 2 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="temperature">Taking the Temperature</h2>
          <p>
            Rectal temperature with a digital rectal thermometer is the home reference standard. Do not rely on a warm nose, warm ears, or how the dog feels to your hand — those are not reliable indicators of body temperature.
          </p>
          <ol className="space-y-2">
            <li><strong>1. Prepare.</strong> Use a digital rectal thermometer, ideally a dedicated pet one. Switch it on and coat the tip with a water-based lubricant (petroleum jelly works).</li>
            <li><strong>2. Steady the dog.</strong> A second person to keep the dog calm and still makes this far easier. Lift the tail.</li>
            <li><strong>3. Insert gently.</strong> Slide the tip in about 1 inch for a medium dog (less for small, slightly more for large). Never force it against resistance.</li>
            <li><strong>4. Wait for the beep.</strong> Hold it still until the unit signals, typically 10–60 seconds.</li>
            <li><strong>5. Read, clean, record.</strong> Remove, read, clean with isopropyl alcohol wipes, and log the number with the date and time.</li>
          </ol>
          <CalloutBox variant="tip" title="If your dog won't tolerate it">
            <p>
              Some dogs will not allow a rectal temperature without distress, and a fight is not worth it. A pet ear thermometer used correctly is an acceptable fallback, and if you suspect a problem, a veterinary technician can take an accurate reading quickly. Never use a mercury thermometer (breakage risk) and never use a thermometer rectally without lubrication.
            </p>
          </CalloutBox>

          <h2 id="pulse">Heart Rate and Pulse</h2>
          <p>
            There are two easy access points. The <strong>heartbeat</strong> can be felt by placing a flat hand over the left side of the chest, just behind the point of the elbow when the front leg is down. The <strong>femoral pulse</strong> is felt on the inside of the thigh, near where the leg meets the body, where the femoral artery runs close to the surface. Count beats for 15 seconds and multiply by four.
          </p>
          <p>
            Resting heart rate is size-dependent: roughly <strong>60–100 bpm</strong> in large dogs, <strong>100–140 bpm</strong> in small dogs, and faster still — up to 180 or more — in puppies. A normal dog&rsquo;s heart rate also rises and falls slightly with breathing (sinus arrhythmia), which is normal. What matters is a sustained rate well outside your dog&rsquo;s own resting baseline, measured when the dog is calm — not immediately after exercise, excitement, or panting.
          </p>

          <h2 id="respiration">Respiratory Rate</h2>
          <p>
            Count breaths by watching the chest rise and fall — one rise plus one fall is a single breath. Count for 30 seconds and double it, or 15 seconds and multiply by four. A resting, non-panting dog typically breathes <strong>10–35 times per minute</strong>.
          </p>
          <p>
            The most useful version of this measurement is the <strong>sleeping respiratory rate</strong>: breaths per minute counted while the dog is asleep and not dreaming. A sleeping rate consistently above 30 breaths per minute is an early warning sign that cardiologists ask owners of dogs with heart disease to track at home, because it can indicate fluid building up in the lungs before any other sign appears. Panting does not count as respiratory rate; a panting dog is thermoregulating, not necessarily in respiratory distress — but open-mouth breathing in a cat-like posture, blue gums, or labored effort at rest are emergencies.
          </p>

          <h2 id="gums">Gums, Capillary Refill, and Hydration</h2>
          <p>
            <strong>Gum (mucous membrane) color.</strong> Lift the lip and look at the gums above the teeth. Healthy gums are bubblegum pink and moist. Pale or white suggests anemia, blood loss, or shock; blue or grey signals poor oxygenation (an emergency); yellow suggests jaundice; brick red can occur with heatstroke or some toxins. Some dogs have naturally pigmented gums, so find a consistently pink patch to check.
          </p>
          <p>
            <strong>Capillary refill time (CRT).</strong> Press a fingertip firmly on the gum until it blanches white, then release and count how long the pink returns. Under 2 seconds is normal. A prolonged refill suggests poor perfusion (dehydration, shock, or circulatory compromise) and warrants urgent attention.
          </p>
          <p>
            <strong>Hydration (skin turgor).</strong> Gently lift the skin over the shoulder blades into a tent and release. In a well-hydrated dog it snaps back instantly. Skin that returns slowly or stays tented suggests dehydration. This test is less reliable in very thin, obese, or older dogs (skin elasticity changes with age and body condition), so read it alongside gum moisture and overall condition. Persistent dehydration — especially with vomiting or <a href="/health/dog-diarrhea" className="text-brand-primary hover:underline">diarrhea</a> — needs veterinary care.
          </p>

          <h2 id="whentocall">When to Call the Vet — and When to Go Now</h2>
          <p>Treat the following as reasons to contact your veterinarian the same day:</p>
          <ul>
            <li>Temperature at or above 104.5 °F, or below 99 °F</li>
            <li>Heart rate sustained well outside your dog&rsquo;s normal resting baseline</li>
            <li>Resting respiratory rate above 40/min, sleeping rate consistently above 30/min, or any labored breathing</li>
            <li>Capillary refill longer than 2 seconds, or skin that stays tented</li>
          </ul>
          <p>Treat the following as emergencies — go to an emergency clinic immediately:</p>
          <ul>
            <li>Temperature at or above 106 °F (heatstroke range)</li>
            <li>Blue, grey, or very pale white gums</li>
            <li>Collapse, unresponsiveness, or severe difficulty breathing</li>
            <li>A distended, hard abdomen with unproductive retching (possible <a href="/health/dog-bloat-gvd" className="text-brand-primary hover:underline">bloat / GDV</a> — a true emergency)</li>
          </ul>

          <h2 id="kit">Building a Simple Home Vitals Kit</h2>
          <p>
            A small kit kept where you can reach it makes home checks routine rather than improvised. A practical set: a digital rectal thermometer (dedicated to the dog), a water-based lubricant (petroleum jelly works) for the tip, isopropyl alcohol wipes to clean the probe after each reading, a phone with a stopwatch and a notes file for your baseline numbers, and your veterinarian&rsquo;s daytime number plus the nearest 24-hour emergency clinic&rsquo;s address and number saved in advance. Those three physical supplies are vitals tools. They are not a first-aid wound kit — gauze, Vetrap cohesive bandage, saline wound flush, a soft muzzle, and a soft carrier already live on the <a href="/guides/dog-first-aid-kit" className="text-brand-primary hover:underline">dog first-aid kit</a> guide, and the generic digital pet thermometer hop stays there too. This page does not hop medications. Knowing where the emergency clinic is <em>before</em> you need it removes a frightening delay from a real emergency. If you have not chosen a regular veterinarian yet, our <a href="/guides/dog-wellness-exam" className="text-brand-primary hover:underline">wellness exam guide</a> covers how to find one and what to expect.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops (home-vitals kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page digital-rectal-thermometer / petroleum-jelly lubricant /
              isopropyl-alcohol-wipes copy, not the first-aid-kit wound hops
              or the generic digital+pet+thermometer key already pinned there. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-vitals kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              home-check copy — a digital rectal thermometer, a
              water-based lubricant (petroleum jelly), and
              isopropyl alcohol wipes. Everyday physical vitals
              tools only. They are not a ranked product list,
              they are not a first-aid wound kit, they are not
              the generic digital pet thermometer hop already on
              the first-aid-kit guide, and they do not replace a
              veterinarian. Dog.com earns a commission on
              qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+rectal+thermometer+pet?s=guides-how-to-take-dogs-temperature"
                amazonLabel="Browse digital rectal thermometers for pets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/water+based+lubricant+petroleum+jelly?s=guides-how-to-take-dogs-temperature"
                amazonLabel="Browse water-based lubricant / petroleum jelly on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/isopropyl+alcohol+wipes?s=guides-how-to-take-dogs-temperature"
                amazonLabel="Browse isopropyl alcohol wipes on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <ArticleSourcesList
            title="References"
            sources={[
              { label: 'Routine Health Care of Dogs — Physical Examination and Vital Signs', url: 'https://www.merckvetmanual.com/dog-owners/routine-care-and-breeding-of-dogs/routine-health-care-of-dogs', publisher: 'Merck Veterinary Manual' },
              { label: 'Pet First Aid — Knowing Your Pet’s Normal Vital Signs', url: 'https://www.avma.org/resources-tools/pet-owners/emergencycare', publisher: 'AVMA' },
              { label: 'Fever and Heatstroke in Dogs', url: 'https://www.merckvetmanual.com/dog-owners', publisher: 'Merck Veterinary Manual' },
              { label: 'AAHA Canine Life Stage Guidelines — preventive care and physical assessment', url: 'https://www.aaha.org/aaha-guidelines/', publisher: 'AAHA' },
            ]}
          />
        </div>
      </ArticleLayout>
    </>
  )
}
