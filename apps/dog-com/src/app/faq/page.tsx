import type { Metadata } from 'next'
import { buildMetadata, FAQAccordion, EmailCapture } from '@carloOS/ui'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Health FAQ — Common Questions Answered by DVMs',
  description: 'Answers to the most common dog health questions — symptoms, nutrition, vet visits, insurance, breed health, and preventive care. DVM-reviewed.',
  path: '/faq',
})

const FAQ_SECTIONS = [
  {
    heading: 'Symptoms & Emergencies',
    items: [
      {
        question: 'What dog symptoms require an emergency vet visit?',
        answer: 'Go immediately for: difficulty breathing or labored breathing, pale/white/blue gums, sudden collapse, distended abdomen with retching (possible bloat/GDV), seizures lasting more than 2 minutes, suspected poisoning, uncontrolled bleeding, or sudden inability to walk. When in doubt, call your emergency vet — most will advise over the phone whether you need to come in.',
        answerText: 'Go immediately for: difficulty breathing, pale or blue gums, sudden collapse, distended abdomen with retching (possible bloat), seizures over 2 minutes, suspected poisoning, or sudden inability to walk.',
      },
      {
        question: 'My dog is vomiting — when should I be worried?',
        answer: 'One episode of vomiting in an otherwise alert, normal dog: monitor for 24 hours, withhold food for a few hours, offer small amounts of water. See a vet if: vomiting more than 3 times in 24 hours, any blood in vomit (red or dark brown/coffee ground appearance), the dog is also lethargic or won\'t eat, or if a foreign object ingestion is possible. Puppies and senior dogs dehydrate faster — lower threshold for vet care.',
        answerText: 'One episode in a normal dog: monitor. See a vet if vomiting more than 3 times, any blood, also lethargic, or foreign object ingestion is possible.',
      },
      {
        question: 'What should I do if my dog ate chocolate?',
        answer: 'Call the ASPCA Animal Poison Control Center (888-426-4435) immediately — they have toxicologists available 24/7. The toxicity depends on the type of chocolate (dark > milk > white), amount consumed, and your dog\'s weight. Do not wait for symptoms. Treatment is most effective before symptoms appear. Baker\'s chocolate and dark chocolate are significantly more dangerous than milk chocolate.',
        answerText: 'Call ASPCA Poison Control at 888-426-4435 immediately. Toxicity depends on chocolate type and dog weight. Do not wait for symptoms — treatment is most effective before symptoms appear.',
      },
      {
        question: 'How do I check my dog\'s gum color and what does it mean?',
        answer: 'Lift your dog\'s lip and look at the gums above the upper teeth. Normal: bubble-gum pink and moist. Pale or white gums: shock or severe blood loss — emergency. Blue or grey gums: oxygen deprivation — emergency. Bright red gums: possible heat stroke or toxin. Yellow gums: liver disease or red blood cell destruction. Tacky or dry gums: dehydration. Practice checking regularly so you know your dog\'s normal baseline.',
        answerText: 'Normal gums are bubble-gum pink and moist. Pale/white = shock (emergency). Blue/grey = oxygen deprivation (emergency). Bright red may indicate heat stroke. Practice checking regularly.',
      },
    ],
  },
  {
    heading: 'Nutrition & Diet',
    items: [
      {
        question: 'How much should I feed my dog?',
        answer: 'There is no universal answer — caloric needs depend on weight, age, activity level, and whether your dog is spayed/neutered. Start with the feeding guidelines on your dog food packaging, then adjust based on body condition score. You should be able to feel but not see the ribs, and see a defined waist when looking down from above. Weigh your dog monthly and adjust portions if weight is changing. Most adult dogs do best with two measured meals per day — no free-feeding.',
        answerText: 'Depends on weight, age, and activity. Start with packaging guidelines, then adjust by body condition score — you should feel but not see ribs. Two measured meals daily; no free-feeding.',
      },
      {
        question: 'What foods are toxic to dogs?',
        answer: 'Toxic foods include: chocolate (especially dark/baker\'s), xylitol (in sugar-free gum, peanut butter, candy — read labels), grapes and raisins, onions and garlic (all forms), macadamia nuts, alcohol, coffee and caffeine, raw yeast dough, avocado (in large amounts), and certain artificial sweeteners. If ingestion is suspected, call ASPCA Poison Control (888-426-4435) — do not wait for symptoms.',
        answerText: 'Toxic: chocolate, xylitol (in sugar-free products), grapes/raisins, onions/garlic, macadamia nuts, alcohol, caffeine, raw yeast dough. Call 888-426-4435 if ingested.',
      },
      {
        question: 'Is grain-free dog food better?',
        answer: 'No — and there are real reasons for concern. The FDA investigated a possible link between grain-free diets (particularly those high in peas, lentils, and legumes) and dilated cardiomyopathy (DCM), a serious heart disease. The investigation is ongoing but the concern is significant enough that most veterinary cardiologists recommend avoiding grain-free diets unless your dog has a documented grain allergy (which is rare). Grains in dog food are not the problem the marketing suggests.',
        answerText: 'No. The FDA investigated a link between grain-free diets and dilated cardiomyopathy (DCM). Most veterinary cardiologists recommend avoiding grain-free diets unless a grain allergy is documented, which is rare.',
      },
    ],
  },
  {
    heading: 'Vet Visits & Preventive Care',
    items: [
      {
        question: 'How often should my dog see a vet?',
        answer: 'Puppies (0–6 months): every 3–4 weeks for vaccine series. Adult dogs (1–7 years): annually. Senior dogs (7+ years, or 5+ for large breeds): every 6 months. Senior dogs change faster than annual monitoring captures — twice-yearly exams allow earlier detection of kidney disease, cancer, dental disease, and cognitive changes when intervention is most effective.',
        answerText: 'Puppies every 3-4 weeks for vaccines. Adult dogs annually. Senior dogs (7+) every 6 months — they change faster than annual monitoring captures.',
      },
      {
        question: 'Which vaccines does my dog actually need?',
        answer: 'Core vaccines (all dogs): Rabies (legally required in most jurisdictions), DA2PP (distemper, adenovirus, parvovirus, parainfluenza — often called "distemper combo"). Non-core vaccines based on lifestyle: Bordetella (kennel cough) for dogs in boarding/dog parks, Leptospirosis for dogs with outdoor/water exposure, Lyme for dogs in tick-endemic areas. Your vet will recommend based on your dog\'s specific risk factors and local disease prevalence.',
        answerText: 'Core: Rabies (legally required) and DA2PP (distemper combo). Lifestyle-based: Bordetella, Leptospirosis, Lyme. Your vet tailors recommendations to your dog\'s risk factors.',
      },
      {
        question: 'Is pet insurance worth it?',
        answer: 'For most dogs, yes — particularly for breeds predisposed to expensive conditions (Golden Retrievers, French Bulldogs, German Shepherds, Labrador Retrievers). A single emergency surgery runs $3,000–8,000; cancer treatment can exceed $20,000. Pet insurance converts an unpredictable large expense into a predictable monthly cost. The key rule: enroll before any conditions develop, since pre-existing conditions are excluded. Trupanion and Healthy Paws are our top-rated plans.',
        answerText: 'Yes for most dogs, especially predisposed breeds. A single surgery runs $3,000-8,000; cancer can exceed $20,000. Enroll before conditions develop — pre-existing conditions are excluded.',
      },
    ],
  },
  {
    heading: 'Breed Health',
    items: [
      {
        question: 'What are the healthiest dog breeds?',
        answer: 'Mixed-breed dogs statistically have lower rates of many inherited conditions due to greater genetic diversity. Among purebreds, breeds with fewer extreme physical traits tend to be healthier: Australian Cattle Dog, Border Collie, Beagle, Shiba Inu, Basenji, and Siberian Husky have relatively fewer inherited health problems compared to brachycephalic (flat-faced) breeds or very large breeds. That said, individual dog health varies significantly based on breeding practices regardless of breed.',
        answerText: 'Mixed breeds statistically have fewer inherited conditions. Among purebreds, Australian Cattle Dog, Border Collie, Beagle, and Siberian Husky have relatively fewer health problems. Avoid extremes of conformation.',
      },
      {
        question: 'Do French Bulldogs always have breathing problems?',
        answer: 'Most French Bulldogs have some degree of brachycephalic obstructive airway syndrome (BOAS) — it\'s a structural consequence of extreme flat-faced breeding. Severity ranges from mild (noisy but functional breathing) to severe (exercise intolerance, cyanosis during exertion). Health-focused breeders are selecting for wider nostrils and longer relative muzzle length, which improves outcomes. If your Frenchie struggles with breathing at rest or overheats easily, BOAS surgery can significantly improve quality of life.',
        answerText: 'Most have some degree of BOAS. Severity varies from mild to severe. Health-focused breeders are selecting for better airway conformation. BOAS surgery significantly improves quality of life for Grade 2-3 affected dogs.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">DVM-Reviewed Answers</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
          Dog Health FAQ
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Answers to the most common dog health questions — reviewed by licensed veterinarians. Updated regularly as guidelines change.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">FAQ</span>
      </nav>

      {/* FAQ sections */}
      <div className="px-container sm:px-container-sm py-14 max-w-content-wide mx-auto">
        {FAQ_SECTIONS.map((section) => (
          <div key={section.heading} className="mb-12">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-5 pb-3 border-b border-brand-border">
              {section.heading}
            </h2>
            <FAQAccordion
              items={section.items.map(item => ({
                question: item.question,
                answer: item.answer,
                answerText: item.answerText,
              }))}
              includeSchema={false}
              allowMultiple
            />
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="mt-10 p-7 bg-brand-primary-pale border border-brand-border rounded-lg text-center">
          <h3 className="font-display font-bold text-brand-dark text-xl mb-2">Still have questions?</h3>
          <p className="text-sm text-brand-text-mid mb-5 max-w-md mx-auto">
            Browse our full health library — 50+ DVM-reviewed guides covering every major condition, breed, and life stage.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/health"
              className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors">
              Browse Health Library →
            </Link>
            <Link href="/find-a-vet"
              className="inline-flex items-center bg-brand-white border border-brand-border text-brand-dark font-semibold text-sm px-6 py-3 rounded no-underline hover:border-brand-primary transition-colors">
              Find a Specialist
            </Link>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="bg-brand-surface border-t border-brand-border px-container sm:px-container-sm py-12">
        <EmailCapture variant="section" siteId="dog-com"
          title="Weekly Dog Health Tips"
          subtitle="DVM-written answers, breed spotlights, and health alerts — every Tuesday."
          source="faq-page" ctaText="Subscribe Free"
          perks={['✓ DVM-reviewed', '📬 Every Tuesday', '🚫 No spam']}
        />
      </div>
    </>
  )
}
