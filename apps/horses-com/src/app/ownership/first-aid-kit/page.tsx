import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine First-Aid Kit — What to Stock and Knowing Your Vitals",
  description:
    "Reference guide to the equine first-aid kit: essential supplies, knowing your horse’s normal vitals, when to call the vet, and basic emergency readiness.",
  path: '/ownership/first-aid-kit',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine First-Aid Kit — What to Stock and Knowing Your Vitals",
  description:
    "Reference guide to the equine first-aid kit: essential supplies, knowing your horse’s normal vitals, when to call the vet, and basic emergency readiness.",
  url: 'https://horses.com/ownership/first-aid-kit',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What should be in a horse first-aid kit?",
    answer:
      "Essentials include a thermometer and a watch for vitals, wound-cleaning supplies (clean water or saline, gentle antiseptic, gauze), dressings and bandaging (non-stick dressings, padding, conforming and cohesive bandages, tape), scissors, tweezers, gloves, a clean towel, a flashlight, and your vet's number with key records. Keep a smaller version for travel and trail.",
    answerText:
      "A thermometer and watch, wound-cleaning supplies, dressings and bandaging materials, scissors, tweezers, gloves, a towel, a flashlight, and your vet's number and records. Keep a travel kit too.",
  },
  {
    question: "What are a horse's normal vital signs?",
    answer:
      "Textbook resting ranges for an adult horse are roughly a temperature of 37.5 to 38.5 degrees Celsius (about 99 to 101 Fahrenheit), a heart rate of 28 to 44 beats per minute, and 8 to 16 breaths per minute, with gut sounds in all four quadrants and pink, moist gums refilling in under about two seconds. Learn your own horse's baseline, since individuals vary.",
    answerText:
      "Roughly: temperature 37.5 to 38.5 C (99 to 101 F), heart rate 28 to 44 bpm, breathing 8 to 16 per minute, gut sounds in all quadrants, and pink moist gums. Learn your own horse's baseline.",
  },
  {
    question: "When should I call the vet rather than treat a horse myself?",
    answer:
      "Call the vet for heavy or unstoppable bleeding, severe or non-weight-bearing lameness or a suspected fracture, signs of colic, deep wounds or wounds near a joint or needing stitches, difficulty breathing, choke, eye injuries, or a high temperature and markedly abnormal vitals. First aid is to stabilize and protect until the vet arrives, not to replace veterinary care.",
    answerText:
      "For heavy bleeding, severe lameness or fractures, colic, deep or joint-area wounds, breathing trouble, choke, eye injuries, or abnormal vitals. First aid stabilizes until the vet arrives; it does not replace them.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function FirstAidKitPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Equine First-Aid Kit",
          subtitle:
            "Horses have a genius for injuring themselves at the worst possible moment, and the difference between a minor incident and a crisis is often whether the owner is prepared. A well-stocked first-aid kit, a knowledge of the horse's normal vital signs, and a clear sense of when to call the vet are basic readiness every owner should have. First aid does not replace veterinary care -- it buys time and limits harm until the vet arrives. This is reference material to inform preparedness, not a substitute for veterinary advice.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "First-Aid Kit", href: '/ownership/first-aid-kit' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Be Prepared", href: "#why" },
            { label: "Essential Supplies", href: "#supplies" },
            { label: "Know Your Vitals", href: "#vitals" },
            { label: "When to Call the Vet", href: "#when" },
            { label: "Kit Management", href: "#management" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Choosing a Vet", href: "/ownership/choosing-a-vet" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Boots and Wraps", href: "/tack/boots-and-wraps" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-first-aid"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="why">Why Be Prepared</h2>
          <p>Injuries and sudden illness happen, often outside business hours and far from help. Being prepared -- with supplies on hand, the skills to do basic first aid, and the knowledge to recognize an emergency -- lets an owner stabilize a situation, control bleeding, protect a wound, and gather the information the vet needs, rather than scrambling in a panic. Preparedness is itself a form of horse care, and the time to assemble a kit and learn the basics is long before they are needed.</p>

          <h2 id="supplies">Essential Supplies</h2>
          <ul>
            <li><strong>A thermometer</strong> for taking the horse’s temperature, plus a watch for counting heart and breathing rates.</li>
            <li><strong>Wound-cleaning supplies</strong> -- clean water, saline, a gentle antiseptic, and clean gauze or swabs.</li>
            <li><strong>Dressings and bandaging</strong> -- non-stick wound dressings, padding (such as cotton or padding rolls), conforming and cohesive bandages, and adhesive tape.</li>
            <li><strong>Scissors and tweezers</strong> and a clean container, plus disposable gloves.</li>
            <li><strong>A clean towel</strong> and a small flashlight or headlamp.</li>
            <li><strong>Your vet’s number and key records</strong> kept with the kit, along with any directions your vet has given for that horse.</li>
          </ul>

          <h2 id="vitals">Know Your Vitals</h2>
          <p>Knowing a horse&apos;s normal vital signs transforms a phone call to the vet from guesswork into useful triage. The textbook resting ranges for an adult horse are roughly: temperature around 37.5 to 38.5 degrees Celsius (about 99 to 101 degrees Fahrenheit); heart rate around 28 to 44 beats per minute; and breathing around 8 to 16 breaths per minute, with gut sounds present in all four quadrants and pink, moist gums with a capillary refill under about two seconds. Learn your own horse&apos;s normal baseline, since individuals vary, and practice taking the vitals when the horse is healthy so you can do it calmly in an emergency.</p>

          <h2 id="when">When to Call the Vet</h2>
          <ul>
            <li>Heavy or spurting bleeding that will not stop with pressure.</li>
            <li>Severe or non-weight-bearing lameness, or a suspected fracture.</li>
            <li>Signs of colic -- pawing, rolling, looking at the flank, no manure.</li>
            <li>A deep wound, a wound near a joint, or one that may need stitching (best within hours).</li>
            <li>Difficulty breathing, choke, eye injuries, or any rapid deterioration.</li>
            <li>A high temperature, off feed, or markedly abnormal vital signs.</li>
          </ul>

          <h2 id="management">Kit Management</h2>
          <p>A first-aid kit only helps if it is stocked, accessible, and current. Keep it in a clean, clearly marked, easily reached container in the barn, and keep a second smaller kit for travel and trail. Check it regularly, replacing used and out-of-date items, and keep your veterinarian&apos;s emergency number with it. Just as important as the supplies is knowing how to use them and what is beyond first aid: the goal is to stabilize and protect until professional help arrives, not to play vet. Ask your veterinarian to show you the basics for your horse.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “First Aid and Emergency Preparedness” owner resources. aaep.org.</li>
            <li>British Horse Society. Equine first-aid guidance.</li>
            <li>Veterinary texts on equine first aid and normal vital parameters, current editions.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
