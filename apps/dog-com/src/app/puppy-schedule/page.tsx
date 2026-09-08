import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, FAQAccordion, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Free Puppy Schedule — Weeks 8 to 16 | Dog.com',
  description: 'Week-by-week puppy schedule for weeks 8–16: sleep, feeding, training, vaccinations, and socialization. On this page — no email required.',
  path: '/puppy-schedule',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Free Puppy Schedule — Weeks 8 to 16',
  description: 'Week-by-week puppy schedule covering the critical socialization window. The full table is on this page.',
  url: 'https://dog.com/puppy-schedule',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-05-27T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'Where is the schedule?',
    answer: 'On this page. The week-by-week table below covers puppy weeks 8 to 16 — feeding, sleep, training milestones, socialization goals, and the vaccination window. You can read or print it from your browser. There is no email course or PDF delivery.',
  },
  {
    question: 'Why weeks 8 to 16?',
    answer: 'Weeks 8 to 16 are the critical socialization window — a biologically-bounded period when a puppy’s brain is uniquely receptive to learning that novel experiences are safe. Under-socialization during this window is repeatedly cited among the leading causes of behavioural problems in adult dogs (ASPCA, HSUS shelter intake studies). After ~16 weeks the window narrows sharply.',
  },
  {
    question: 'Can I print this?',
    answer: 'Yes. Use your browser print dialog on this page. There is no separate PDF email and no email course until a real email service exists.',
  },
  {
    question: 'I already have a puppy older than 16 weeks — is this still useful?',
    answer: 'The schedule itself is most useful in the 8–16 week window. After 16 weeks, the structured schedule still works for adolescents (and is in fact recommended) but the socialization emphasis shifts to maintenance rather than acquisition. The deeper content lives in our <a href="/training/dog-socialization-window">Critical Socialization Window</a> guide.',
  },
  {
    question: 'Do I need to leave an email?',
    answer: 'No. The schedule is on this page. An optional inbox-notes field sits after the table if you want occasional owner notes later. That does not send a course, PDF, or confirmation email.',
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
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">On this page · Puppy Owners</span>
            </div>
            <h1 className="font-display font-black text-white tracking-tighter leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 66px)' }}>
              Puppy Schedule.<br />
              <span className="text-brand-primary">Weeks 8 to 16.</span>
            </h1>
            <p className="text-lg font-light text-white/65 leading-relaxed max-w-xl mb-8">
              The first 16 weeks are your puppy&apos;s critical socialization window — the
              one period when their brain is wired to learn that the world is safe. The
              week-by-week table on this page covers sleep, feeding, vaccinations,
              and structured socialization. Grounded in AVSAB and current behavioral science.
              No email signup required.
            </p>
            <ul className="text-sm text-white/70 space-y-2 mb-10 max-w-md">
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Week-by-week schedule on this page (sleep, feeding, training, vaccination windows)</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Print from your browser — no PDF email</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Grounded in current behavioural science. No fluff, no upsells.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>No email course until a real email service exists</span></li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="bg-white rounded-xl p-7 shadow-card-hover">
              <div className="mb-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Read it now</div>
                <div className="font-display font-bold text-brand-dark text-xl leading-tight">
                  The week-by-week schedule is below
                </div>
              </div>
              <a
                href="#puppy-week-schedule"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-brand-primary text-brand-white text-sm font-bold rounded no-underline hover:bg-brand-primary-light"
              >
                Jump to the schedule
              </a>
              <p className="text-2xs text-brand-text-light mt-4 leading-relaxed">
                No email gate. See our <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEK-BY-WEEK PREVIEW — on-page, no email gate */}
      <section id="puppy-week-schedule" className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">What&apos;s in the schedule</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Week 8 → Week 16
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            Focus and milestones for each week. Print this page from your browser if you want it
            on the fridge. There is no separate PDF email.
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
      <section className="bg-brand-primary-pale border-y border-brand-border px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto text-center">
          <p className="text-base text-brand-text-mid leading-relaxed mb-7 max-w-xl mx-auto">
            Optional. We&apos;ll use this address for occasional notes. No schedule email, PDF, or course.
          </p>
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
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">Related supplies</h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>

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
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop related supplies
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+supplies?s=puppy-schedule"
              amazonLabel="Shop on Amazon"
            />
          </div>
        </div>
      </section>
    </>
  )
}
