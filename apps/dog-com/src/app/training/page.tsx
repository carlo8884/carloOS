import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Training Guide — Positive Reinforcement | Dog.com',
  description: 'Science-based dog training guides. Positive reinforcement principles, puppy socialization windows, common behavior problems.',
  path: '/training',
})

const SECTIONS = [
  {
    category: 'Fundamentals',
    items: [
      { title: 'Positive Reinforcement — How It Works', desc: 'Why reward-based training outperforms punishment: the science', href: '/training/positive-reinforcement' },
      { title: 'The Critical Socialization Window', desc: '8–16 weeks — what it is, why it matters, what to do', href: '/training/socialization-window', badge: '⏰ Time-sensitive' },
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

export default function TrainingHubPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Dog Training</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Dog Training Guide
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Science-based training guides written with behavior professionals. Positive reinforcement methods that actually work — from puppy basics to complex behavior problems.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Training</span>
      </nav>

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
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section" siteId="dog-com"
          title="Free Dog Training Tips"
          subtitle="Science-based training guidance and behavior Q&A — every Tuesday."
          source="training-hub" ctaText="Subscribe Free"
          perks={['🐕 Positive methods only', '📚 Science-based', '🚫 No spam']}
        />
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
        <Link key="socialization-window" href="/training/socialization-window" className="text-sm text-brand-primary no-underline hover:underline">Socialization Window</Link>
        <Link key="trainer-credentials" href="/training/trainer-credentials" className="text-sm text-brand-primary no-underline hover:underline">Trainer Credentials</Link>
        <Link key="training-red-flags" href="/training/training-red-flags" className="text-sm text-brand-primary no-underline hover:underline">Training Red Flags</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
    </>
  )
}
