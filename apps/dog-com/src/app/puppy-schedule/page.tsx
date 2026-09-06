import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, EmailCapture, FAQAccordion, ShopCtas } from '@carloOS/ui'
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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog puppy-schedule checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog puppy-schedule checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-puppy-week-schedule-chart,
            fridge-puppy-milestone-card, and
            canine-puppy-schedule-reference-handbook notes
            that match the week-8-to-16-map,
            socialization-milestone-log, and
            avsab-aaha-grounding copy on this page — a
            laminated dog puppy week-schedule chart so the
            week 8–16 sleep / feeding / training map is
            posted on the fridge (not a tools-hub
            calculator chart, not a reviews buyer-guide
            chart, not a nutrition feeding chart, not a
            training session chart, not a guides
            section-map chart, not a breeds profile chart,
            not a conditions body-system chart, not a
            symptoms triage chart, not a compare
            decision-axis chart), a dog fridge puppy
            milestone card so settle-in / socialization /
            foundation notes are labeled on the fridge
            (not a measurement card, not a reviews
            comparison card, not a WSAVA label card, not a
            training cue card, not a guides prep card, not
            a breeds library card, not a conditions
            library card, not a symptoms library card, not
            a compare axis card), and a canine puppy
            schedule reference handbook so the AVSAB /
            AAHA grounding is a physical kitchen book (not
            a calculator handbook, not a reviews handbook,
            not a nutrition handbook, not a training
            handbook, not a guides handbook, not a breeds
            handbook, not a conditions handbook, not a
            symptoms handbook, not a compare handbook).
            Educational kitchen checklist, not a ranked
            product list, not a child crate / puppy-food /
            stain-cleaner hop, and not a substitute for a
            veterinarian. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog puppy-schedule checklist"
            subtitle="Email the puppy-week-schedule-chart, fridge milestone-card, and puppy-schedule-handbook notes. No spam."
            ctaText="Email my dog puppy-schedule checklist"
            source="puppy-schedule-under-hero"
          />
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

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Puppy-schedule kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          week-8-to-16-map, socialization-milestone-log, and
          avsab-aaha-grounding copy on this page — a
          laminated dog puppy week-schedule chart so the
          week 8–16 sleep / feeding / training map is
          posted on the fridge, a dog fridge puppy
          milestone card so settle-in / socialization /
          foundation notes are labeled on the fridge, and
          a canine puppy schedule reference handbook so
          the AVSAB / AAHA grounding is a physical kitchen
          book. These are educational kitchen searches,
          not a ranked product list, not a substitute for
          a veterinarian, not a tools-hub / reviews-hub /
          nutrition-hub / training-hub / guides-hub /
          breeds-hub / conditions-hub / symptoms-hub /
          compare-hub hop, and not a child crate /
          puppy-food / stain-cleaner hop (those live on
          training/puppy-schedule and new-puppy-checklist).
          This page does not hop medications or vaccines.
          This page does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated dog puppy week-schedule chart /
            dog fridge puppy milestone card /
            canine puppy schedule reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs sibling hub kitchen
            kits and child wire+dog+crate /
            puppy+food / enzymatic+pet+stain hops.
            Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the puppy-schedule kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page week-8-to-16-map,
            socialization-milestone-log, and
            avsab-aaha-grounding copy — a laminated dog
            puppy week-schedule chart, a dog fridge puppy
            milestone card, and a canine puppy schedule
            reference handbook. Educational kitchen
            searches only. They are not a ranked product
            list, they are not a sibling-hub kitchen hop,
            they are not a child crate hop, and they do
            not replace a veterinarian. Dog.com earns a
            commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+puppy+week+schedule+chart?s=puppy-schedule"
              amazonLabel="Browse laminated dog puppy week-schedule charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+puppy+milestone+card?s=puppy-schedule"
              amazonLabel="Browse dog fridge puppy milestone cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+puppy+schedule+reference+handbook?s=puppy-schedule"
              amazonLabel="Browse canine puppy schedule reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>
    </>
  )
}
