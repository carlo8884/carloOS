import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, CrossPortfolioCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Training Guide — Positive Reinforcement | Dog.com',
  description: 'Science-based dog training guides. Positive reinforcement principles, puppy socialization windows, common behavior problems.',
  path: '/training',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Training', url: 'https://dog.com/training' },
  ],
})

// ─────────────────────────────────────────────
// The four learning quadrants of operant conditioning.
// Standard behavioral-science framework (Skinner). "Positive"/"negative"
// here mean adding/removing a stimulus — not "good"/"bad". Used to explain
// why reward-based methods are the modern professional default.
// ─────────────────────────────────────────────
const QUADRANTS = [
  {
    quadrant: 'Positive reinforcement',
    mechanism: 'Add something the dog wants',
    example: 'Dog sits → gets a treat',
    effect: 'Behavior becomes more likely',
    welfare: 'Lowest risk; professional default',
  },
  {
    quadrant: 'Negative reinforcement',
    mechanism: 'Remove something the dog dislikes',
    example: 'Leash pressure stops when the dog yields',
    effect: 'Behavior becomes more likely',
    welfare: 'Relies on an aversive being present first',
  },
  {
    quadrant: 'Positive punishment',
    mechanism: 'Add something the dog dislikes',
    example: 'Leash correction or shock after a behavior',
    effect: 'Behavior becomes less likely',
    welfare: 'Associated with fear and aggression fallout',
  },
  {
    quadrant: 'Negative punishment',
    mechanism: 'Remove something the dog wants',
    example: 'Jumping → attention is withdrawn',
    effect: 'Behavior becomes less likely',
    welfare: 'Low risk when paired with a reinforced alternative',
  },
]

const FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: 'What is the best method for training a dog?',
    answer:
      'The modern professional consensus favors positive reinforcement — rewarding the behavior you want so the dog chooses to repeat it. Leading veterinary-behavior and training organizations (including the American Veterinary Society of Animal Behavior and the Certification Council for Professional Dog Trainers) recommend reward-based, least-intrusive methods over punishment-based approaches such as prong, choke, or electronic collars, which are associated with a higher risk of fear and aggression. Reward-based training is the foundation of every guide on this hub.',
  },
  {
    question: 'When should I start training my puppy?',
    answer:
      'Training and socialization begin the day a puppy comes home — typically around 8 weeks — not at 6 months. The critical socialization window runs roughly from 3 to 16 weeks, when positive exposure to people, dogs, surfaces, and sounds shapes lifelong temperament. You can teach simple cues like sit and name recognition immediately using short, reward-based sessions. See the socialization-window guide and the week-by-week puppy schedule below for a structured plan.',
  },
  {
    question: 'Do dogs need a "pack leader" or dominance to behave?',
    answer:
      'No. The dominance and "pack leader" model is based on outdated wolf studies that have since been retracted by the researcher who popularized them. Domestic dogs are not trying to take over the household, and confrontational methods built on dominance theory are linked to increased fear and aggression. Behavior problems are far better explained by reinforcement history, unmet needs, fear, and lack of training than by a struggle for status. The red-flags guide on this hub covers which methods and claims to avoid.',
  },
  {
    question: 'When should a behavior problem be handled by a professional rather than a guide?',
    answer:
      'Aggression (toward people or other dogs), severe separation anxiety, and intense fear or reactivity benefit from a certified behavior professional rather than a general trainer or a self-guided plan — and some cases warrant a veterinary behaviorist, because pain or an underlying medical condition can drive sudden behavior change. If a behavior is dangerous, escalating, or appeared abruptly, rule out a medical cause with your veterinarian first, then work with a credentialed professional. The trainer-credentials guide explains what qualifications such as CPDT-KA, CBCC-KA, and CAAB actually mean.',
  },
]


const SECTIONS = [
  {
    category: 'Fundamentals',
    items: [
      { title: 'Positive Reinforcement — How It Works', desc: 'Why reward-based training outperforms punishment: the science', href: '/training/positive-reinforcement' },
      { title: 'The Critical Socialization Window', desc: '8–16 weeks — what it is, why it matters, what to do', href: '/training/dog-socialization-window', badge: '⏰ Time-sensitive' },
      { title: 'Basic Commands Every Dog Should Know', desc: 'Sit, down, stay, come, leave it — in that order, with why', href: '/training/basic-commands' },
      { title: 'Marker Training & Clicker Training', desc: 'How to use a marker word or clicker effectively', href: '/training/marker-training' },
    ],
  },
  {
    category: 'Puppy Training',
    items: [
      { title: 'Puppy Schedule — Week by Week', desc: 'Sleep, feeding, training, socialization from 8 weeks', href: '/training/puppy-schedule', badge: '🐶 New Puppy' },
      { title: 'Crate Training Guide', desc: 'Making the crate a good experience, not a punishment', href: '/training/crate-training' },
      { title: 'House Training Guide', desc: 'The schedule method, accident protocol, common mistakes', href: '/training/house-training' },
      { title: 'Puppy Biting — Bite Inhibition', desc: 'What\'s normal, what to do, what doesn\'t work', href: '/training/puppy-biting' },
    ],
  },
  {
    category: 'Behavior Problems',
    items: [
      { title: 'Separation Anxiety', desc: 'True separation anxiety vs. boredom — and what actually works', href: '/training/separation-anxiety' },
      { title: 'Leash Reactivity', desc: 'Why dogs react and how to systematically reduce it', href: '/training/leash-reactivity' },
      { title: 'Resource Guarding', desc: 'Management, prevention, and when to get professional help', href: '/training/resource-guarding' },
      { title: 'Excessive Barking', desc: 'Types of barking and evidence-based solutions for each', href: '/training/excessive-barking' },
    ],
  },
  {
    category: 'Finding a Trainer',
    items: [
      { title: 'Dog Trainer Credentials — What They Mean', desc: 'CPDT-KA, CBCC-KA, CAAB — how to evaluate qualifications', href: '/training/trainer-credentials' },
      { title: 'Red Flags in Dog Training', desc: 'Dominance theory, prong collars, e-collars — what science says', href: '/training/training-red-flags' },
    ],
  },
]

const ALL_TRAINING_ITEMS = SECTIONS.flatMap((s) => s.items)
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog Training Guides',
  numberOfItems: ALL_TRAINING_ITEMS.length,
  itemListElement: ALL_TRAINING_ITEMS.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.title,
    url: `https://dog.com${item.href}`,
  })),
}

const faqSchema = buildFAQSchema({ questions: FAQ_ITEMS })

const trainingSchema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

export default function TrainingHubPage() {
  return (
    <>
      <SchemaScript schema={trainingSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Dog Training</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Dog Training Guide
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed mb-2">
          Reward-based training guides grounded in the modern behavioral-science consensus — from puppy basics to complex behavior problems.
        </p>
        <p className="text-xs text-white/40 max-w-2xl">
          By Dog.com Editorial — sourced from cited references. Guidance aligns with reward-based, least-intrusive standards from the American Veterinary Society of Animal Behavior (AVSAB), the Certification Council for Professional Dog Trainers (CCPDT), and peer-reviewed applied-behavior literature.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Training</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8 max-w-container-wide mx-auto">
        <StockImage manifestKey="dog-com:category-training" aspect="16:9" variant="wide" priority />
      </div>

      {/* TL;DR — extractable direct-answer block (GEO citation magnet) */}
      <div className="px-container-sm sm:px-container pt-10 max-w-container-wide mx-auto">
        <div className="rounded-xl p-6 bg-brand-primary-pale border border-brand-border max-w-3xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            The short version
          </div>
          <p className="text-base text-brand-dark leading-relaxed m-0 mb-3">
            <strong>The most effective, lowest-risk way to train a dog is positive reinforcement</strong> — rewarding the behavior you want so the dog chooses to repeat it. Start training and{' '}
            <Link href="/training/dog-socialization-window" className="text-brand-primary font-semibold no-underline hover:underline">socialization</Link>{' '}
            the day a puppy comes home (around 8 weeks), not at 6 months. Teach cues in order — name, sit, down, stay, come, leave it — in short, frequent sessions.
          </p>
          <p className="text-base text-brand-dark leading-relaxed m-0">
            Avoid dominance- and punishment-based methods (prong, choke, and shock collars), which the major veterinary-behavior bodies advise against because they raise the risk of fear and aggression. Reserve a{' '}
            <Link href="/training/trainer-credentials" className="text-brand-primary font-semibold no-underline hover:underline">certified professional</Link>{' '}
            for aggression, severe separation anxiety, and fear-based reactivity — and rule out a medical cause with your vet when behavior changes suddenly.
          </p>
        </div>
      </div>

      {/* Reference table — the four learning quadrants */}
      <div className="px-container-sm sm:px-container pt-10 max-w-container-wide mx-auto">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Reference</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">
          How dogs learn: the four quadrants
        </h2>
        <p className="text-sm text-brand-text-mid mb-5 max-w-2xl">
          Every training method maps onto one of four quadrants of operant conditioning. Here, <em>positive</em> and <em>negative</em> mean adding or removing a stimulus — not good or bad. Modern reward-based training works mainly in the top and bottom rows below.
        </p>
        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-brand-surface">
                <th className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">Quadrant</th>
                <th className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">What it does</th>
                <th className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">Example</th>
                <th className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">Effect on behavior</th>
                <th className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">Welfare note</th>
              </tr>
            </thead>
            <tbody>
              {QUADRANTS.map((q) => (
                <tr key={q.quadrant} className="even:bg-brand-surface/40">
                  <td className="p-3 border-b border-brand-border font-semibold text-brand-dark align-top">{q.quadrant}</td>
                  <td className="p-3 border-b border-brand-border text-brand-text-mid align-top">{q.mechanism}</td>
                  <td className="p-3 border-b border-brand-border text-brand-text-mid align-top">{q.example}</td>
                  <td className="p-3 border-b border-brand-border text-brand-text-mid align-top">{q.effect}</td>
                  <td className="p-3 border-b border-brand-border text-brand-text-mid align-top">{q.welfare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-brand-text-light mt-3 max-w-2xl">
          Reward-based programs lean on positive reinforcement and negative punishment (withdrawing a reward), which carry the lowest welfare risk. See{' '}
          <Link href="/training/positive-reinforcement" className="text-brand-primary font-semibold no-underline hover:underline">how positive reinforcement works</Link>{' '}
          and{' '}
          <Link href="/training/training-red-flags" className="text-brand-primary font-semibold no-underline hover:underline">methods to avoid</Link>{' '}
          for the detail behind this table.
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-14 max-w-container-wide mx-auto">
        {SECTIONS.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-5 pb-3 border-b border-brand-border">
              {section.category}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
                >
                  {item.badge && (
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{item.badge}</div>
                  )}
                  <div className="font-display font-bold text-brand-dark text-base mb-1.5 leading-tight">{item.title}</div>
                  <div className="text-xs text-brand-text-light leading-relaxed">{item.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Trainer finder CTA */}
        <div className="bg-brand-dark rounded-xl p-8 text-center mt-8">
          <h3 className="font-display font-bold text-white text-2xl mb-3">When to Get Professional Help</h3>
          <p className="text-base text-white/55 max-w-lg mx-auto mb-6">
            Aggression, severe separation anxiety, and fear-based reactivity benefit significantly from working with a certified behavior professional — not just a general trainer.
          </p>
          <Link href="/find-a-vet"
            className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors">
            Find a Veterinary Behaviorist →
          </Link>
        </div>

        {/* Related references — cross-links into the broader graph */}
        <section className="mt-12 border-t border-brand-border pt-10">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">
            Related references
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            <Link href="/training/puppy-schedule" className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">New puppy</div>
              <div className="font-display font-semibold text-brand-dark text-sm">Puppy schedule — week by week</div>
            </Link>
            <Link href="/health" className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">Health library</div>
              <div className="font-display font-semibold text-brand-dark text-sm">When behavior change is medical — health guides</div>
            </Link>
            <Link href="/symptoms" className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-1.5">Symptom triage</div>
              <div className="font-display font-semibold text-brand-dark text-sm">Sudden behavior change? Triage by urgency</div>
            </Link>
            <Link href="/breeds" className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">Breed traits</div>
              <div className="font-display font-semibold text-brand-dark text-sm">Breed encyclopedia — temperament & drives</div>
            </Link>
          </div>
        </section>

        {/* FAQ — static, server-rendered for crawler visibility. Matches faqSchema above. */}
        <section className="mt-12 border-t border-brand-border pt-10">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-5">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-brand-border rounded-lg bg-brand-white p-5">
                <h3 className="font-display font-semibold text-brand-dark text-base m-0 mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Training Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="basic-commands" href="/training/basic-commands" className="text-sm text-brand-primary no-underline hover:underline">Basic Commands</Link>
        <Link key="crate-training" href="/training/crate-training" className="text-sm text-brand-primary no-underline hover:underline">Crate Training</Link>
        <Link key="dog-aggression" href="/training/dog-aggression" className="text-sm text-brand-primary no-underline hover:underline">Dog Aggression</Link>
        <Link key="excessive-barking" href="/training/excessive-barking" className="text-sm text-brand-primary no-underline hover:underline">Excessive Barking</Link>
        <Link key="house-training" href="/training/house-training" className="text-sm text-brand-primary no-underline hover:underline">House Training</Link>
        <Link key="leash-reactivity" href="/training/leash-reactivity" className="text-sm text-brand-primary no-underline hover:underline">Leash Reactivity</Link>
        <Link key="loose-leash-walking" href="/training/loose-leash-walking" className="text-sm text-brand-primary no-underline hover:underline">Loose Leash Walking</Link>
        <Link key="marker-training" href="/training/marker-training" className="text-sm text-brand-primary no-underline hover:underline">Marker Training</Link>
        <Link key="off-leash-training" href="/training/off-leash-training" className="text-sm text-brand-primary no-underline hover:underline">Off Leash Training</Link>
        <Link key="positive-reinforcement" href="/training/positive-reinforcement" className="text-sm text-brand-primary no-underline hover:underline">Positive Reinforcement</Link>
        <Link key="puppy-biting" href="/training/puppy-biting" className="text-sm text-brand-primary no-underline hover:underline">Puppy Biting</Link>
        <Link key="puppy-schedule" href="/training/puppy-schedule" className="text-sm text-brand-primary no-underline hover:underline">Puppy Schedule</Link>
        <Link key="resource-guarding" href="/training/resource-guarding" className="text-sm text-brand-primary no-underline hover:underline">Resource Guarding</Link>
        <Link key="separation-anxiety" href="/training/separation-anxiety" className="text-sm text-brand-primary no-underline hover:underline">Separation Anxiety</Link>
        <Link key="socialization-window" href="/training/dog-socialization-window" className="text-sm text-brand-primary no-underline hover:underline">Socialization Window</Link>
        <Link key="trainer-credentials" href="/training/trainer-credentials" className="text-sm text-brand-primary no-underline hover:underline">Trainer Credentials</Link>
        <Link key="training-red-flags" href="/training/training-red-flags" className="text-sm text-brand-primary no-underline hover:underline">Training Red Flags</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
      <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="footer" />
    </>
  </>
  )
}
