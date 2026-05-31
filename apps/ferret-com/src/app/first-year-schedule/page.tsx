import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, FAQAccordion } from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Free Ferret First-Year Schedule — Week-by-Week | Ferret.com',
  description:
    'A 52-week first-year care schedule for new ferret owners: vaccines, neuter timing, dental onset, diet milestones. Free printable plus 8-email course.',
  path: '/first-year-schedule',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Free Ferret First-Year Schedule — Week-by-Week',
  description:
    'A 52-week structured calendar covering vaccinations, neuter/spay decisions, dental care, diet, and the foundation for the insulinoma and adrenal monitoring years.',
  url: 'https://ferret.com/first-year-schedule',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'What exactly do I get when I sign up?',
    answer:
      'A printable 52-week schedule covering vaccinations, vet visits, neuter timing, dental routine onset, nail trimming, diet transitions, and the run-up to the insulinoma watch window. Plus an 8-email course delivered over ~90 days, one email per topic.',
  },
  {
    question: 'When is the right age to neuter or spay a ferret?',
    answer:
      'Most ferrets sold through US pet stores are pre-altered before sale (usually at 5–6 weeks). If you have an intact ferret from a private breeder, the timing is more nuanced: jills left intact through a heat cycle without breeding are at risk of fatal aplastic anemia from sustained estrogen exposure, so altering or hormonal management is essential. Recent exotic-pet literature has also raised questions about whether pre-pubertal neuter contributes to the high adrenal disease incidence in US ferrets. Discuss timing with an exotic-pet vet.',
  },
  {
    question: 'Do indoor ferrets really need a rabies vaccine?',
    answer:
      'In most US jurisdictions, yes — and not primarily because of disease risk inside the home. Rabies vaccination is the legal floor for managing any bite incident: an unvaccinated ferret that bites a person can face mandatory euthanasia or extended quarantine under public-health law, regardless of actual exposure risk. The USDA-licensed rabies vaccine for ferrets is a single dose at 12+ weeks, then annually. Confirm with your exotic-pet vet and local rules.',
  },
  {
    question: 'Why is dental disease so common in ferrets?',
    answer:
      'Ferrets accumulate plaque rapidly on kibble diets, and clinically meaningful tartar and gingivitis are often visible by age 2–3 — much earlier than in dogs or cats. The Journal of Exotic Pet Medicine and Quesenberry & Carpenter both flag periodontal disease as one of the most under-treated conditions in pet ferrets. Daily brushing with a small soft brush and an enzymatic pet toothpaste (never human toothpaste — xylitol/fluoride risk), plus annual dental check, is the standard prevention pattern.',
  },
  {
    question: 'How often should I trim my ferret\'s nails?',
    answer:
      'Every 2–3 weeks for most ferrets. Nails grow fast and do not wear down indoors. Overgrown nails snag in fabric (a torn-nail injury risk) and change gait. The standard technique is "belly-up with a dab of salmon oil" — the ferret licks the oil while you clip. Stop at the pink quick.',
  },
  {
    question: 'When should I start watching for insulinoma symptoms?',
    answer:
      'The clinical onset window begins around age 3 and peaks between ages 4 and 7 (Quesenberry & Carpenter; Veterinary Clinics of North America: Exotic Animal Practice). The first year is when you build the diet, weight, and exotic-pet-vet relationships that let you catch it early. Later symptoms: hindlimb weakness, mouth-pawing (nausea), staring spells, increased sleep. Do not test blood glucose at home — that is a vet decision. See our insulinoma page for clinical detail.',
  },
  {
    question: 'I missed the first few weeks — is this still useful?',
    answer:
      'Yes. The structural pieces — finding an exotic-pet vet, the vaccine calendar, dental onset, insulinoma awareness — apply whether your ferret is 8 weeks or 8 months. Skip ahead in the printable to your current week, and start the email course from email 00 regardless.',
  },
  {
    question: 'How often will you email me?',
    answer:
      'Eight emails over ~90 days during the course, then weekly at most thereafter (often less). One-click unsubscribe in every email. We do not sell or rent your address.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const howToSchema = buildHowToSchema({
  name: 'Use the Ferret First-Year Schedule',
  description:
    'Step-by-step approach to the 52-week first-year ferret care schedule, from first vet visit through the long-term health monitoring foundation.',
  url: 'https://ferret.com/first-year-schedule',
  totalTime: 'P365D',
  steps: [
    {
      name: 'Q1 — Acclimation and Vaccine Series (Weeks 1-13)',
      text: 'Settle the kit into a ferret-proofed home, schedule the first exotic-pet vet visit, complete the canine distemper vaccine series, and establish litter and feeding routines.',
    },
    {
      name: 'Q2 — Neuter Decision and Foundation Habits (Weeks 14-26)',
      text: 'Confirm alter status, transition diet if needed, optional harness training, and daily handling habits that make dental care and nail trims possible later.',
    },
    {
      name: 'Q3 — Dental Onset, Nail Routine, Boosters (Weeks 27-39)',
      text: 'Daily dental brushing routine before tartar accumulates, 2-3 week nail-trim cadence, and second-year vaccine boosters per AFA / AEMV guidance.',
    },
    {
      name: 'Q4 — Annual Vet Check and Year-Two Planning (Weeks 40-52)',
      text: 'First true annual check-up, weight trend review, reading on insulinoma and adrenal disease, and year-two enrichment planning.',
    },
  ],
})

const allSchemas = combineSchemas(articleSchema, faqSchema, howToSchema)

const QUARTERS = [
  {
    label: 'Q1',
    weeks: 'Weeks 1–13',
    title: 'Acclimation and Vaccine Series',
    bullets: [
      'Ferret-proof — gap-block any opening over 1 inch; remove rubber/foam items (the #1 ferret surgery cause)',
      'First exotic-pet vet visit — meet-and-greet ideal before vaccinations',
      'Canine distemper series — boosters at 6–8, 10–12, and 14–16 weeks (AFA / AEMV)',
      'Rabies vaccine — single dose at 12+ weeks, USDA-licensed product',
      'Litter training and feeding routine established',
      'Sleep observation — kits sleep 18–20 hours per day',
    ],
  },
  {
    label: 'Q2',
    weeks: 'Weeks 14–26',
    title: 'Neuter Decision and Foundation Habits',
    bullets: [
      'Confirm alter status — most US pet-store ferrets are pre-altered; intact ferrets need a vet conversation',
      'Diet transition if needed — animal-first, low-carb kibble or vet-supervised whole-prey',
      'Harness training (optional) — short, indoor first, then quiet outdoor sessions',
      'Daily handling — paws, mouth, ears, belly — foundation for dental and nail care',
      'Body condition score recorded at each weigh-in',
    ],
  },
  {
    label: 'Q3',
    weeks: 'Weeks 27–39',
    title: 'Dental Routine, Nail Cadence, Boosters',
    bullets: [
      'Daily or every-other-day tooth brushing with enzymatic pet toothpaste (never human toothpaste)',
      'Nail trim every 2–3 weeks — "salmon oil on belly" technique',
      'Annual booster of canine distemper and rabies per vet recommendation',
      'Cage and enrichment audit — rotate toys, refresh bedding, check for chew damage',
      'Continued weight monitoring — body condition score',
    ],
  },
  {
    label: 'Q4',
    weeks: 'Weeks 40–52',
    title: 'Annual Vet Check and Year-Two Planning',
    bullets: [
      'First true annual exotic-pet vet check — bloodwork baseline recommended by some vets',
      'Dental status review and scaling if indicated',
      'Read on insulinoma and adrenal disease — watch window opens around age 3',
      'Enrichment rotation plan for year two',
      'Pet insurance review — exotic policies are limited; enroll before any condition develops',
    ],
  },
]

export default function FerretFirstYearSchedulePage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      {/* HERO with above-the-fold capture */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Free Download · New Ferret Owners</span>
            </div>
            <h1 className="font-display font-black text-white tracking-tighter leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 66px)' }}>
              Free Ferret First-Year Schedule.<br />
              <span className="text-brand-primary">From kit to confident owner.</span>
            </h1>
            <p className="text-lg font-light text-white/65 leading-relaxed max-w-xl mb-8">
              Ferrets are unusual pets — they need vaccines, dental care, an exotic-pet vet, and
              lifelong monitoring most pet owners do not expect. This 52-week schedule plus an
              8-email course builds the foundation for the next 5–8 years of their life.
            </p>
            <ul className="text-sm text-white/70 space-y-2 mb-10 max-w-md">
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Printable 52-week schedule (vaccines, dental, neuter, diet, vet visits)</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>8 emails over ~90 days — one per major first-year topic</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Grounded in exotic-pet veterinary references (AEMV, AFA, Quesenberry &amp; Carpenter)</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Free. One-click unsubscribe in every email.</span></li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="bg-white rounded-xl p-7 shadow-card-hover">
              <div className="mb-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Step 1 of 1</div>
                <div className="font-display font-bold text-brand-dark text-xl leading-tight">
                  Get the first-year schedule + 8-email course
                </div>
              </div>
              <EmailCapture
                variant="inline"
                siteId="ferret-com"
                title=""
                ctaText="Send me the schedule →"
                placeholder="your@email.com"
                source="first-year-schedule"
              />
              <p className="text-2xs text-brand-text-light mt-4 leading-relaxed">
                We&apos;ll email the schedule immediately and start the email course shortly after.
                See our <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUARTERLY PREVIEW */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">What&apos;s in the schedule</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            52 weeks, broken into four quarters
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            Below is the focus for each quarter. The printable version (sent by email) breaks each
            quarter into weekly checklists, with vaccination timing, body-condition reminders, and
            dental and nail-trim cadence in one column.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {QUARTERS.map((q) => (
              <div key={q.label} className="bg-white border border-brand-border rounded-lg p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display font-black text-brand-primary text-3xl">{q.label}</span>
                  <span className="text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">{q.weeks}</span>
                </div>
                <h3 className="font-display font-bold text-brand-dark text-lg mb-4 leading-tight">{q.title}</h3>
                <ul className="space-y-2">
                  {q.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-brand-text-mid leading-relaxed flex items-start gap-2">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-xs text-brand-text-light mt-5">
            Vaccination dates above are typical AFA / AEMV reference points; your exotic-pet vet
            sets the actual schedule. Vaccine reaction rates are higher in ferrets than in cats or
            dogs (Greenacre 2003, <em>JAAHA</em>) — most exotic vets pre-medicate and observe
            in-clinic for 20–30 minutes after vaccination.
          </p>
        </div>
      </section>

      {/* WHY A SCHEDULE */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Why a first-year schedule</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-5">
            The first year sets the foundation for the next several
          </h2>
          <div className="prose max-w-3xl text-brand-text-mid leading-relaxed space-y-4">
            <p>
              Domestic ferrets live an average of 5–8 years (Quesenberry &amp; Carpenter,{' '}
              <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em>). The first
              year is the shortest stretch in their lives — but it is when dental routine, diet
              pattern, exotic-pet-vet relationship, and weight baseline get established. Each
              becomes critical when insulinoma, adrenal disease, or dental disease begin to
              surface in years 3–7.
            </p>
            <p>
              A ferret whose owner brushes their teeth daily from kithood arrives at year three
              with manageable dental status. A ferret whose owner did not arrives with periodontal
              disease that needs anesthesia to address — and ferret anesthesia is higher-risk than
              canine or feline. The leverage of the first-year habits is high because the
              consequences of skipping them compound slowly and silently.
            </p>
            <p>
              The other reason: ferrets need an exotic-pet vet, not a general small-animal vet.
              Most general-practice clinics see very few ferrets and are not well-positioned to
              recognize early adrenal or insulinoma signs. The Association of Exotic Mammal
              Veterinarians (AEMV) maintains a directory.
            </p>
          </div>
        </div>
      </section>

      {/* SECOND CAPTURE */}
      <section className="bg-brand-primary-pale border-y border-brand-border px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Get the printable schedule + the email course
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-7 max-w-xl mx-auto">
            One signup. Schedule in your inbox immediately. Eight emails over roughly 90 days,
            then weekly at most. Unsubscribe any time.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title=""
              ctaText="Send me the schedule →"
              source="first-year-schedule"
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
            Questions new ferret owners ask
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-12 pt-8 border-t border-brand-border text-sm text-brand-text-mid">
            <p className="mb-2">More ferret reference:</p>
            <ul className="space-y-1.5">
              <li><Link href="/care/diet-basics" className="text-brand-primary hover:underline">Ferret Diet Basics — obligate-carnivore feeding</Link></li>
              <li><Link href="/health/insulinoma" className="text-brand-primary hover:underline">Insulinoma in Ferrets — the long-term watch condition</Link></li>
              <li><Link href="/care/cage-setup" className="text-brand-primary hover:underline">Ferret Cage Setup — multi-level housing and ferret-proofing</Link></li>
            </ul>
            <p className="mt-8 text-xs text-brand-text-light leading-relaxed">
              Sources: Quesenberry KE and Carpenter JW (eds.),{' '}
              <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em>, Saunders;{' '}
              <em>Journal of Exotic Pet Medicine</em>; <em>Veterinary Clinics of North America:
              Exotic Animal Practice</em>; American Ferret Association (AFA); Association of
              Exotic Mammal Veterinarians (AEMV); Greenacre CB (2003), <em>JAAHA</em>; Mehler
              and Bennett (2001), <em>JAAHA</em>. This page is general reference, not
              individualized veterinary advice — work with an exotic-pet vet for clinical
              decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
