import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Free Puppy Schedule — Weeks 8 to 16 | Dog.com',
  description: 'The critical-socialization-window puppy schedule. Free printable + 8-week email course covering sleep, feeding, training, vaccinations, and milestones.',
  path: '/puppy-schedule',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Free Puppy Schedule — Weeks 8 to 16',
  description: 'Printable week-by-week puppy schedule plus an 8-week email course covering the critical socialization window.',
  url: 'https://dog.com/puppy-schedule',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-05-27T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'What exactly do I get when I sign up?',
    answer: 'A printable one-page week-by-week schedule covering puppy weeks 8 to 16 (feeding, sleep, training milestones, socialization goals, and the vaccination window), plus an 8-week email course — one email per week, each timed to where your puppy is in development.',
  },
  {
    question: 'Why weeks 8 to 16?',
    answer: 'Weeks 8 to 16 are the critical socialization window — a biologically-bounded period when a puppy’s brain is uniquely receptive to learning that novel experiences are safe. Under-socialization during this window is repeatedly cited among the leading causes of behavioural problems in adult dogs (ASPCA, HSUS shelter intake studies). After ~16 weeks the window narrows sharply.',
  },
  {
    question: 'Is this just one PDF, or is there more?',
    answer: 'One printable schedule you can put on the fridge, plus eight emails over eight weeks. Each email covers what to focus on that specific week. The email course is free.',
  },
  {
    question: 'I already have a puppy older than 16 weeks — is this still useful?',
    answer: 'The schedule itself is most useful in the 8–16 week window. After 16 weeks, the structured schedule still works for adolescents (and is in fact recommended) but the socialization emphasis shifts to maintenance rather than acquisition. The deeper content lives in our <a href="/training/dog-socialization-window">Critical Socialization Window</a> guide.',
  },
  {
    question: 'How often will you email me?',
    answer: 'Weekly during the 8-email course, then a maximum of one email per week thereafter (often less). Unsubscribe is one click in every email. We do not sell or rent your address.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })
const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Puppy Schedule', url: 'https://dog.com/puppy-schedule' },
  ],
})
const allSchemas = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

const WEEKLY_PREVIEW = [
  { week: '8', focus: 'Settle in', milestones: 'Crate intro · Name recognition · Outdoor potty schedule · First vet visit' },
  { week: '9', focus: 'Socialization #1', milestones: 'Handling practice · Sounds desensitization · Meet 3–5 new people (safely) · DAPP-1 due' },
  { week: '10', focus: 'Foundation', milestones: 'Sit · Hand feeding · Brief alone-time · Body handling for vet care' },
  { week: '11', focus: 'Confidence', milestones: 'New surfaces · Car rides · Sounds (vacuum, doorbell) · Bite-inhibition feedback' },
  { week: '12', focus: 'Socialization #2', milestones: 'Puppy class (vaccinated environment) · Meet calm adult dogs · DAPP-2 due' },
  { week: '13', focus: 'Recall + Stay', milestones: 'Begin name + come · 2-second stays · Loose-leash introduction in quiet places' },
  { week: '14', focus: 'World exposure', milestones: 'Quiet city walks · Different floor surfaces · Brief separations · Vet-clinic visits for treats only' },
  { week: '15', focus: 'Manners', milestones: 'Sit before doors · Crate as nap default · Solid recall in safe environments · DAPP-3 due' },
  { week: '16', focus: 'Window closing', milestones: 'Final novel exposures · Adolescent prep (regression normal at 6–18 months) · Rabies due' },
]

export default function PuppySchedulePage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      {/* HERO with above-the-fold capture */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Free Download · Puppy Owners</span>
            </div>
            <h1 className="font-display font-black text-white tracking-tighter leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 66px)' }}>
              Free Puppy Schedule.<br />
              <span className="text-brand-primary">Weeks 8 to 16.</span>
            </h1>
            <p className="text-lg font-light text-white/65 leading-relaxed max-w-xl mb-8">
              The first 16 weeks are your puppy&apos;s critical socialization window — the
              one period when their brain is wired to learn that the world is safe. Get
              a printable week-by-week schedule covering sleep, feeding, vaccinations,
              and structured socialization, plus an 8-email course timed to each developmental
              stage. Grounded in AVSAB and current behavioral science. Free, no upsells,
              one-click unsubscribe.
            </p>
            <ul className="text-sm text-white/70 space-y-2 mb-10 max-w-md">
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>One-page printable schedule (sleep, feeding, training, vaccination windows)</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>8 emails over 8 weeks — one per developmental stage</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Grounded in current behavioural science. No fluff, no upsells.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Free. One-click unsubscribe in every email.</span></li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="bg-white rounded-xl p-7 shadow-card-hover">
              <div className="mb-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Step 1 of 1</div>
                <div className="font-display font-bold text-brand-dark text-xl leading-tight">
                  Get the puppy schedule + 8-week email course
                </div>
              </div>
              <EmailCapture
                variant="inline"
                siteId="dog-com"
                title=""
                ctaText="Send me the schedule →"
                placeholder="your@email.com"
                source="puppy-schedule-landing-hero"
              />
              <p className="text-2xs text-brand-text-light mt-4 leading-relaxed">
                We&apos;ll email the schedule immediately and start the 8-week course on Monday.
                See our <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEK-BY-WEEK PREVIEW (free, visible to non-subscribers) */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">What&apos;s in the schedule</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Week 8 → Week 16, in one printable page
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            Below is the focus and milestones for each week. The printable version (sent by email)
            adds sleep totals, feeding amounts by weight, the vaccination calendar in one column,
            and a body-handling checklist that helps vet visits go smoothly.
          </p>

          <div className="bg-white border border-brand-border rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-primary-pale">
                <tr>
                  <th className="text-left p-4 font-display font-bold text-brand-dark w-24">Week</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark w-48">Focus</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">Key milestones</th>
                </tr>
              </thead>
              <tbody>
                {WEEKLY_PREVIEW.map((w) => (
                  <tr key={w.week} className="border-t border-brand-border">
                    <td className="p-4 font-display font-bold text-brand-primary text-lg">{w.week}</td>
                    <td className="p-4 text-brand-dark font-semibold">{w.focus}</td>
                    <td className="p-4 text-brand-text-mid leading-relaxed">{w.milestones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-brand-text-light mt-5">
            Vaccination dates above are typical AAHA puppy schedule reference points; your vet sets
            the actual schedule based on your puppy&apos;s history and local risk.
          </p>
        </div>
      </section>

      {/* SECOND CAPTURE */}
      <section className="bg-brand-primary-pale border-y border-brand-border px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Get the printable schedule + the email course
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-7 max-w-xl mx-auto">
            One signup. Schedule in your inbox immediately. Eight emails over eight weeks, then
            roughly weekly. Unsubscribe any time.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title=""
              ctaText="Send me the schedule →"
              source="puppy-schedule-landing-midpage"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-8">
            How this works
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-12 pt-8 border-t border-brand-border text-sm text-brand-text-mid">
            <p className="mb-2">More puppy training reference:</p>
            <ul className="space-y-1.5">
              <li><Link href="/training/puppy-schedule" className="text-brand-primary hover:underline">Full puppy-schedule article (deep dive)</Link></li>
              <li><Link href="/training/dog-socialization-window" className="text-brand-primary hover:underline">The critical socialization window</Link></li>
              <li><Link href="/training/puppy-biting" className="text-brand-primary hover:underline">Puppy biting and bite inhibition</Link></li>
              <li><Link href="/training/house-training" className="text-brand-primary hover:underline">House training: the schedule method</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
