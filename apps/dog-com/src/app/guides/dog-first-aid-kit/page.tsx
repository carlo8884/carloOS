import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  RelatedLinks, CrossPortfolioCard,
  TableOfContents,
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
  title: 'Dog First Aid Kit & Emergency Preparedness Checklist | Dog.com',
  description:
    'What to put in a dog first aid kit, the emergency numbers to save, and how to prepare for a canine medical emergency — a practical owner reference checklist.',
  path: '/guides/dog-first-aid-kit',
  category: 'Dog Health Guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog First Aid Kit and Emergency Preparedness — Owner Checklist',
  description:
    'A practical reference for assembling a canine first aid kit, saving the right emergency contacts, and being ready for a dog medical emergency.',
  url: 'https://dog.com/guides/dog-first-aid-kit',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})
const med = buildMedicalWebPageSchema({
  name: 'Dog First Aid Kit and Emergency Preparedness',
  description:
    'How to assemble a dog first aid kit and prepare for a canine emergency.',
  url: 'https://dog.com/guides/dog-first-aid-kit',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-06-11',
})
const howto = buildHowToSchema({
  name: 'How to Assemble a Dog First Aid Kit',
  description:
    'Steps for building a practical canine first aid kit and emergency information packet at home.',
  url: 'https://dog.com/guides/dog-first-aid-kit',
  totalTime: 'PT30M',
  steps: [
    { name: 'Choose a container', text: 'Use a waterproof, clearly labeled container or zip pouch kept in a known location, with a smaller duplicate kit in the car.' },
    { name: 'Add wound and bandaging supplies', text: 'Include sterile gauze pads and rolls, self-adhesive (non-stick) bandage wrap, adhesive tape, blunt-tipped scissors, tweezers, and saline wound flush.' },
    { name: 'Add tools and protection', text: 'Add a digital thermometer with lubricant, a muzzle or strip of cloth (a hurt dog may bite), disposable gloves, and a clean towel or blanket.' },
    { name: 'Add reference items and medications', text: 'Include only medications your veterinarian has specifically approved for your dog, plus a written copy of your dog\'s records, current photo, and the emergency phone numbers.' },
    { name: 'Save the emergency numbers', text: 'Program your veterinarian, the nearest 24-hour emergency hospital, and a pet poison hotline into your phone, and tape a printed copy inside the kit.' },
    { name: 'Review and refresh', text: 'Check the kit twice a year, replacing expired items and updating records, and make sure everyone in the household knows where it is.' },
  ],
})

const FAQS = [
  {
    question: 'What should be in a dog first aid kit?',
    answer:
      'A practical canine first aid kit contains wound and bandaging supplies (sterile gauze, self-adhesive non-stick bandage wrap, adhesive tape, blunt-tipped scissors, tweezers, saline flush), protective items (a muzzle or cloth strip, disposable gloves), a digital thermometer with lubricant, a clean towel or blanket, a written copy of your dog\'s medical records and a current photo, any veterinarian-approved medications for your specific dog, and a card listing your vet, the nearest 24-hour emergency hospital, and a pet poison hotline. Keep it in a known, accessible location and a duplicate in the car.',
  },
  {
    question: 'Should I give my dog human medications in an emergency?',
    answer:
      'No — not without explicit veterinary direction. Many common human medications are toxic to dogs, including ibuprofen and other NSAIDs, acetaminophen, and certain decongestants, and doses safe for people can be dangerous or fatal for dogs. The amount and even the appropriateness depend on the dog\'s weight, health, and other medications. Only include and give medications your own veterinarian has specifically approved for your dog, and call your vet or a pet poison hotline before giving anything in an emergency.',
  },
  {
    question: 'What number do I call if my dog eats something toxic?',
    answer:
      'Call your veterinarian or the nearest emergency veterinary hospital immediately, and contact a dedicated pet poison hotline such as the ASPCA Animal Poison Control Center or the Pet Poison Helpline (both are staffed 24/7; a consultation fee may apply). Have the product or packaging on hand so you can report the ingredient and amount. Do not induce vomiting unless a veterinarian or poison expert tells you to — for some substances vomiting causes more harm.',
  },
  {
    question: 'Can a first aid kit replace going to the vet?',
    answer:
      'No. First aid is what you do to stabilize a dog and keep it safe on the way to professional care — it buys time, it does not substitute for veterinary treatment. After any meaningful injury, suspected poisoning, breathing difficulty, collapse, severe bleeding, or signs of internal trouble, the goal of first aid is to get the dog to a veterinarian safely and quickly. The kit and the plan exist to make that transport calmer and faster, not to handle the emergency alone.',
  },
  {
    question: 'How do I safely handle an injured, frightened dog?',
    answer:
      'Even a gentle dog may bite when in severe pain or fear, so protect yourself first — approach calmly, and use a properly fitted muzzle or an improvised cloth muzzle if the dog is conscious and not vomiting or struggling to breathe. Move the dog as little as possible if a spinal injury or fracture is possible; for a small dog, support it on a towel, and for a large dog, use a board or blanket as a stretcher with help. Keep the dog warm and quiet, and get to veterinary care.',
  },
]

const combined = combineSchemas(schema, med, howto, buildFAQSchema({ questions: FAQS }))

export default function DogFirstAidKitPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        hero={{
          title: 'Dog First Aid Kit & Emergency Preparedness — The Owner Checklist',
          subtitle:
            'The middle of an emergency is the worst time to assemble supplies or search for a phone number. This guide is the calm-day reference: what belongs in a canine first aid kit, the contacts to save before you need them, and how to be ready to get an injured or poisoned dog to professional care quickly. First aid stabilizes and buys time — it never replaces a veterinarian.',
          category: 'Dog Health Guide',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Dog First Aid Kit', href: '/guides/dog-first-aid-kit' },
        ]}
        relatedLinks={[{ title: 'Dog Guides Hub', href: '/guides', category: 'Hub' }, { title: 'Is This a Dog Emergency?', href: '/tools/is-this-a-dog-emergency', category: 'Tools' }, { title: 'Take Vital Signs at Home', href: '/guides/how-to-take-dogs-temperature', category: 'Guides' }, { title: 'Toxic Foods for Dogs', href: '/nutrition/toxic-foods', category: 'Nutrition' }]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Prepare in Advance', href: '#why' },
                { label: 'The Core Kit', href: '#kit' },
                { label: 'Emergency Contacts to Save', href: '#contacts' },
                { label: 'Poisoning — What to Do', href: '#poison' },
                { label: 'Bleeding & Wounds', href: '#wounds' },
                { label: 'Handling an Injured Dog', href: '#handling' },
                { label: 'What First Aid Is Not', href: '#limits' },
                { label: 'Maintenance', href: '#maintenance' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Is This a Dog Emergency?', href: '/tools/is-this-a-dog-emergency' },
                { label: 'Take Vital Signs at Home', href: '/guides/how-to-take-dogs-temperature' },
                { label: 'Toxic Foods for Dogs', href: '/nutrition/toxic-foods' },
                { label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' },
                { label: 'Dog Wellness Exam', href: '/guides/dog-wellness-exam' },
              ]}
            />
            <CrossPortfolioCard currentSite="dog-com" contentType="guide" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Care Tips"
              subtitle="Evidence-based guidance every week."
              source="guide-first-aid"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Dog.com Editorial"
            publishedAt="2026-06-11T00:00:00Z"
            updatedAt="2026-06-11T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <CalloutBox variant="evidence" title="TL;DR — Be ready before you need to be">
            <p>
              <strong>Build a kit:</strong> wound and bandaging supplies, a muzzle, gloves, a thermometer, a towel, your dog&rsquo;s records and photo, and only veterinarian-approved medications.
            </p>
            <p>
              <strong>Save three numbers now:</strong> your veterinarian, the nearest 24-hour emergency hospital, and a pet poison hotline. First aid stabilizes a dog and gets it to care — it never replaces the veterinarian.
            </p>
          </CalloutBox>

          <h2 id="why">Why Prepare on a Calm Day</h2>
          <DropCap>
            Emergencies compress time and judgment. A dog that has been hit by a car, eaten something toxic, or collapsed needs decisions made in seconds, and that is precisely the moment when an owner is least able to think clearly, find supplies, or look up a phone number. Everything in this guide is designed to be done now, while nothing is wrong, so that the emergency version of you simply executes a plan instead of inventing one. The single highest-value action — saving the right phone numbers before you need them — takes five minutes and can save a life.
          </DropCap>
          <p>
            Pet first aid is endorsed by veterinary organizations including the AVMA as a way to stabilize an animal and improve outcomes on the way to professional care. The key framing throughout: first aid is the bridge to the veterinarian, not a destination. If you can tell whether a situation is an emergency at all, our <a href="/tools/is-this-a-dog-emergency" className="text-brand-primary hover:underline">emergency triage tool</a> helps, and knowing your dog&rsquo;s <a href="/guides/how-to-take-dogs-temperature" className="text-brand-primary hover:underline">normal vital signs</a> lets you describe the problem precisely over the phone.
          </p>

          <h2 id="kit">The Core First Aid Kit</h2>
          <p>
            Keep a waterproof, clearly labeled kit in a known place, with a smaller duplicate in the car. A practical core list:
          </p>
          <ul>
            <li><strong>Wound care:</strong> sterile gauze pads and rolls, self-adhesive non-stick bandage wrap, adhesive tape, blunt-tipped scissors, tweezers, sterile saline wound flush.</li>
            <li><strong>Protection:</strong> a properly fitted muzzle (or a strip of soft cloth to improvise one), disposable gloves. A hurt dog can bite even a trusted owner.</li>
            <li><strong>Assessment:</strong> a digital thermometer and water-based lubricant; a small flashlight.</li>
            <li><strong>Transport and comfort:</strong> a clean towel or blanket (also usable as a stretcher or to apply pressure), and a spare leash and collar.</li>
            <li><strong>Information:</strong> a written copy of your dog&rsquo;s medical records and vaccination history, a current photo, and a card of emergency numbers.</li>
            <li><strong>Medications:</strong> only those your veterinarian has specifically approved for your individual dog, with written dosing instructions. Do not stock human medications &ldquo;just in case.&rdquo;</li>
          </ul>

          <CalloutBox variant="warning" title="No human medications without veterinary direction">
            <p>
              Many common human drugs are toxic to dogs — including ibuprofen and other NSAIDs, acetaminophen, and some decongestants — and a dose safe for a person can be dangerous or fatal for a dog. Never include or administer human medication unless your own veterinarian has approved it for your specific dog, and call before giving anything in an emergency.
            </p>
          </CalloutBox>

          <h2 id="contacts">Emergency Contacts to Save Right Now</h2>
          <p>Program these into your phone and tape a printed copy inside the kit:</p>
          <ul>
            <li><strong>Your regular veterinarian</strong> — daytime number and hours.</li>
            <li><strong>The nearest 24-hour emergency veterinary hospital</strong> — name, address, and number. Look this up in advance; do not discover during a crisis that your clinic closes at 6 p.m.</li>
            <li><strong>A pet poison hotline</strong> — the ASPCA Animal Poison Control Center or the Pet Poison Helpline. Both operate around the clock; a consultation fee typically applies.</li>
            <li><strong>A backup person</strong> — someone who can act if you are unreachable.</li>
          </ul>

          <h2 id="poison">If Your Dog Is Poisoned</h2>
          <p>
            Suspected poisoning is one of the most common emergencies and one where doing the wrong thing makes it worse. The reliable sequence:
          </p>
          <ol className="space-y-2">
            <li><strong>1. Remove the dog</strong> from the source and prevent further exposure.</li>
            <li><strong>2. Identify what and how much</strong> if you safely can — keep the packaging or a sample.</li>
            <li><strong>3. Call immediately</strong> — your veterinarian, the emergency hospital, or a pet poison hotline. Report the substance, the amount, and your dog&rsquo;s weight.</li>
            <li><strong>4. Do not induce vomiting</strong> unless a veterinarian or poison expert specifically tells you to. For some substances (caustics, petroleum products) vomiting causes additional injury.</li>
            <li><strong>5. Follow their instructions and transport</strong> as directed.</li>
          </ol>
          <p>
            Many household items are dangerous: chocolate, xylitol (a sweetener), grapes and raisins, certain plants, human medications, rodenticides, and antifreeze among them. Our <a href="/nutrition/toxic-foods" className="text-brand-primary hover:underline">toxic foods guide</a> covers the dietary hazards in detail.
          </p>

          <h2 id="wounds">Bleeding and Wounds</h2>
          <p>
            For active bleeding, apply firm, direct pressure with a clean gauze pad or cloth and hold it — do not lift to peek, which disrupts clotting. If blood soaks through, add more material on top rather than removing the first layer. Elevating a bleeding limb can help. Severe or spurting bleeding, or bleeding that will not slow within a few minutes of pressure, is an emergency requiring immediate veterinary care. For minor scrapes, flush gently with sterile saline and protect the area, but have any wound that is deep, dirty, gaping, or near the eye assessed by a veterinarian.
          </p>

          <h2 id="handling">Safely Handling an Injured Dog</h2>
          <p>
            Pain and fear can make any dog bite, so protect yourself before you help. If the dog is conscious and breathing normally, a properly fitted or improvised cloth muzzle reduces bite risk — but never muzzle a dog that is vomiting, struggling to breathe, or has a suspected airway problem. Minimize movement if a spinal injury or fracture is possible: support a small dog on a towel, and move a large dog with a board or blanket stretcher and a second person. Keep the dog warm, calm, and as still as possible, and get to care.
          </p>

          <h2 id="limits">What First Aid Is Not</h2>
          <p>
            First aid is stabilization and safe transport. It is not surgery, not a diagnosis, and not a reason to delay professional care. After any significant injury, suspected poisoning, difficulty breathing, collapse, seizure, severe or persistent bleeding, a distended abdomen with retching (possible <a href="/health/dog-bloat-gvd" className="text-brand-primary hover:underline">bloat / GDV</a>), or any situation where you are unsure, the correct action is to contact a veterinarian and go in. The kit and the plan exist to make that journey faster and calmer.
          </p>

          <h2 id="maintenance">Keeping the Kit Ready</h2>
          <p>
            A kit you assembled years ago and forgot is only half useful. Check it twice a year — a natural pairing with your dog&rsquo;s <a href="/guides/dog-wellness-exam" className="text-brand-primary hover:underline">wellness exams</a>. Replace expired items and any approved medications, update the printed records and photo, confirm the emergency numbers are still correct, and make sure every adult in the household knows where the kit is and what the plan is. Preparedness only works if it is current and shared.
          </p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <ArticleSourcesList
            title="References"
            sources={[
              { label: 'Pet First Aid — Be Prepared', url: 'https://www.avma.org/resources-tools/pet-owners/emergencycare/pet-first-aid-tips', publisher: 'AVMA' },
              { label: 'Animal Poison Control Center', url: 'https://www.aspca.org/pet-care/animal-poison-control', publisher: 'ASPCA' },
              { label: 'Poisoning in Dogs — First Aid and Emergency Care', url: 'https://www.merckvetmanual.com/dog-owners/emergencies/poisoning-in-dogs', publisher: 'Merck Veterinary Manual' },
              { label: 'Disaster Preparedness for Pets', url: 'https://www.avma.org/resources-tools/pet-owners/emergencycare/disaster-preparedness', publisher: 'AVMA' },
            ]}
          />
        </div>
      </ArticleLayout>
    </>
  )
}
