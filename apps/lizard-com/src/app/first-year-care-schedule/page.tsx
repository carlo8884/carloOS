import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, FAQAccordion } from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildHowToSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Free Reptile First-Year Care Schedule | Lizard.com',
  description:
    '52-week first-year care schedule for new reptile keepers — UVB replacement, calcium dosing, vet cadence, maintenance. Free download + 8-email course.',
  path: '/first-year-care-schedule',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'lizard-com',
  title: 'Free Reptile First-Year Care Schedule — Week-by-week',
  description:
    'Species-agnostic 52-week schedule for first-time reptile keepers. UVB replacement, calcium dosing, vet cadence, brumation prep, equipment maintenance. Free download plus an 8-week email course.',
  url: 'https://lizard.com/first-year-care-schedule',
  imageUrl: '',
  authorName: 'Lizard.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'What exactly do I get when I sign up?',
    answer:
      'A printable 52-week schedule (acclimation, feeding by life stage, UVB replacement intervals, supplementation cadence, vet checkpoints, equipment maintenance), plus an 8-email course over ~90 days. Species-agnostic, with callouts for leopard gecko, bearded dragon, ball python, crested gecko, and corn snake.',
  },
  {
    question: 'How often do I actually need to replace a UVB bulb?',
    answer:
      'Depends on the bulb technology, not on whether it still emits visible light. Published Solarmeter 6.5 UV-index measurements show T5 HO linear bulbs typically retain useful UVB output for ~12 months; T8 linear bulbs ~6–9 months; compact fluorescent (CFL) coil bulbs ~6 months. Mercury-vapor bulbs are usually 12 months. A "still glowing" bulb can be emitting near-zero UVB.',
  },
  {
    question: 'How often should I dust feeders with calcium?',
    answer:
      'A rough starting point used in the schedule (cf. Mader, Reptile Medicine and Surgery, 3rd ed., nutrition chapter): juvenile insectivores get calcium (no D3) every feeding, with calcium + D3 2–3× per week if UVB is marginal. Adults get calcium 2–3× per week and D3 once weekly if UVB is adequate. Herbivores get calcium on greens 2–3× per week. Species, life stage, and UVB output all shift the answer.',
  },
  {
    question: 'What counts as an "annual vet visit" if most vets don\'t see reptiles?',
    answer:
      'A reptile-experienced exotic-animal vet, ideally ARAV-affiliated (Association of Reptile and Amphibian Veterinarians). The ARAV directory at arav.org lists members by region. A general-practice vet who occasionally sees reptiles is not the same standard of care — for an animal whose first-year mortality is largely husbandry-driven, the difference matters.',
  },
  {
    question: 'Do desert species need a different schedule than tropical species?',
    answer:
      'The scaffolding is the same: acclimation, feeding cadence, UVB replacement, vet checkpoints, equipment maintenance. The values differ. Desert species (leopard gecko, bearded dragon, uromastyx) need lower humidity, higher basking temperatures, and strict D3/calcium discipline. Tropical species (crested gecko, ball python, day gecko) need higher humidity and tighter hydration monitoring.',
  },
  {
    question: 'My species brumates. How do I plan for that in year one?',
    answer:
      'For temperate species (corn snake, Russian tortoise, hognose), brumation is normal — but a first-year animal is usually not brumated unless it is well-grown, healthy-weight, and parasite-free. The schedule\'s Q4 includes a brumation-prep checkpoint with the vet. Tropical species (ball python, leopard gecko, crested gecko) do not brumate but may show seasonal appetite reductions.',
  },
  {
    question: 'Is this just one PDF, or is there more?',
    answer:
      'One printable 52-week schedule plus eight emails over ~90 days covering UVB physics, supplementation, temperature monitoring, finding a reptile-experienced vet, humidity, and gutloading feeders. Each email cites published sources — Mader, ARAV, Journal of Herpetological Medicine and Surgery, and Solarmeter UVI data.',
  },
  {
    question: 'How often will you email me after the course?',
    answer:
      'Lizard.com is in maintenance status — at most a handful of updates per year after the 8-email course finishes, often fewer. One-click unsubscribe in every email. We do not sell or rent your address.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

const howToSchema = buildHowToSchema({
  name: 'Reptile First-Year Care Schedule',
  description:
    'A 52-week schedule for first-time reptile keepers covering acclimation, feeding, UVB replacement, supplementation, temperature monitoring, vet cadence, and equipment maintenance.',
  url: 'https://lizard.com/first-year-care-schedule',
  totalTime: 'P365D',
  steps: [
    {
      name: 'Quarter 1 (weeks 1–13) — Acclimation and husbandry baseline',
      text: 'Limit handling, observe daily, log temperatures and humidity at the same time each day, establish feeding schedule appropriate for life stage and species, and verify UVB output if a meter is available. Acclimation stress drives most first-month problems.',
      url: 'https://lizard.com/first-year-care-schedule#q1',
    },
    {
      name: 'Quarter 2 (weeks 14–26) — Full feeding routine, growth tracking, first vet visit',
      text: 'Move to a steady feeding cadence by species and life stage. Weigh weekly and record growth. Schedule a wellness exam with an ARAV-affiliated exotic vet, including a fecal float for parasites.',
      url: 'https://lizard.com/first-year-care-schedule#q2',
    },
    {
      name: 'Quarter 3 (weeks 27–39) — UVB six-month check, seasonal adjustments, supplement rotation',
      text: 'Replace or re-measure CFL and T8 UVB bulbs at the 6-month mark. Adjust photoperiod for the season if your room is on natural light. Rotate calcium and calcium + D3 supplements per the schedule\'s species-specific table.',
      url: 'https://lizard.com/first-year-care-schedule#q3',
    },
    {
      name: 'Quarter 4 (weeks 40–52) — Annual vet check, equipment maintenance, year-two planning',
      text: 'Schedule annual wellness exam with ARAV-affiliated vet. Inspect and replace thermostat sensors, deep-clean the enclosure, replace T5 HO UVB bulbs on schedule, and assess brumation readiness for temperate species.',
      url: 'https://lizard.com/first-year-care-schedule#q4',
    },
  ],
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://lizard.com/' },
    { name: 'First-Year Care Schedule', url: 'https://lizard.com/first-year-care-schedule' },
  ],
})

const allSchemas = combineSchemas(articleSchema, faqSchema, howToSchema, breadcrumbSchema)

const QUARTERS = [
  {
    id: 'q1',
    label: 'Quarter 1',
    weeks: 'Weeks 1–13',
    focus: 'Acclimation, observation, husbandry baseline',
    items: [
      'Limit handling. New-animal stress drives most first-month illness.',
      'Daily temperature + humidity log at the same time each day.',
      'Feeding cadence appropriate for life stage and species.',
      'Photograph the animal weekly; check for shed quality and weight changes.',
      'Verify UVB output with a Solarmeter 6.5 if one is available; otherwise record install date.',
    ],
  },
  {
    id: 'q2',
    label: 'Quarter 2',
    weeks: 'Weeks 14–26',
    focus: 'Full feeding routine, growth tracking, first vet visit',
    items: [
      'Steady feeding cadence by species and life stage (juvenile vs sub-adult diets differ).',
      'Weekly weight check; growth curve in a notebook or spreadsheet.',
      'First wellness exam with an ARAV-affiliated exotic vet, including fecal float.',
      'Supplement rotation: calcium no-D3 vs calcium with D3 per species table.',
      'Confirm thermostat is holding gradient; spot-check with infrared thermometer at floor level.',
    ],
  },
  {
    id: 'q3',
    label: 'Quarter 3',
    weeks: 'Weeks 27–39',
    focus: 'UVB six-month check, seasonal adjustment, supplement rotation',
    items: [
      'Replace CFL coil bulbs at 6 months (Solarmeter-measured median useful life).',
      'Replace T8 linear bulbs at 6–9 months; replace mercury-vapor by manufacturer interval.',
      'Photoperiod adjustment for the season (12 h summer → 10 h winter for many species).',
      'Husbandry review: substrate refresh, decor sanitization, cool-side hide check.',
      'Begin tracking food refusal patterns for temperate-species brumation candidates.',
    ],
  },
  {
    id: 'q4',
    label: 'Quarter 4',
    weeks: 'Weeks 40–52',
    focus: 'Annual vet check, equipment maintenance, year-two planning',
    items: [
      'Annual wellness exam with ARAV-affiliated vet; bloodwork if indicated.',
      'Replace T5 HO UVB bulbs at the 12-month mark.',
      'Deep clean the enclosure; inspect and replace thermostat probes if worn.',
      'Brumation-readiness assessment with the vet for temperate species in year one.',
      'Year-two plan: enclosure upgrade if outgrown, breeding planning (if applicable), travel/sitter plan.',
    ],
  },
]

const SPECIES_CALLOUTS = [
  {
    species: 'Leopard gecko',
    note: 'Insectivore, low UVB requirement (Ferguson Zone 1–2) but UVB still improves outcomes. Calcium-with-D3 only if UVB is absent or low. Watch for impaction on loose substrate. No brumation in year one.',
  },
  {
    species: 'Bearded dragon',
    note: 'Omnivore, high UVB requirement (Ferguson Zone 3–4). T5 HO 10.0 or 12.0 bulb at ~12 inches over basking site. Juvenile diet is insect-heavy (~70%); adult diet shifts to greens-heavy. Aggressive calcium discipline first year.',
  },
  {
    species: 'Ball python',
    note: 'Tropical constrictor, no UVB requirement under most husbandry protocols (though emerging evidence supports low-level UVB). Ambient 78–80°F with 88–92°F basking. Humidity 50–60%, raise to 70% during shed. Notorious for stress-induced food refusal.',
  },
  {
    species: 'Crested gecko',
    note: 'Arboreal, room-temperature species (72–78°F). Powdered fruit-and-insect commercial diet (Repashy, Pangea) plus occasional insects. UVB low requirement; humidity 60–80%. Drop-tail is permanent — handle minimally.',
  },
  {
    species: 'Corn snake',
    note: 'Temperate colubrid; brumation candidate in year two if well-grown. No UVB requirement under most protocols. Ambient 75–80°F, basking 85°F. Rodent prey sized to no larger than the widest part of the snake.',
  },
]

export default function FirstYearCareSchedulePage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      {/* HERO with above-the-fold capture */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Free Download · New Reptile Keepers
              </span>
            </div>
            <h1
              className="font-display font-black text-white tracking-tighter leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 66px)' }}
            >
              Free Reptile First-Year Care Schedule.<br />
              <span className="text-brand-primary">Week-by-week for your first reptile.</span>
            </h1>
            <p className="text-lg font-light text-white/65 leading-relaxed max-w-xl mb-8">
              Most first-year reptile mortality is preventable. Inconsistent UVB replacement,
              undiscovered calcium deficits, and temperature drift account for most of it. The
              schedule eliminates the guesswork — one printable page, 52 weeks, every checkpoint
              dated.
            </p>
            <ul className="text-sm text-white/70 space-y-2 mb-10 max-w-md">
              <li className="flex items-start gap-3">
                <span className="text-brand-primary">✓</span>
                <span>One-page printable 52-week schedule (UVB, feeding, supplementation, vet, maintenance)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary">✓</span>
                <span>Species-agnostic with callouts for leopard gecko, bearded dragon, ball python, crested gecko, corn snake</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary">✓</span>
                <span>8 emails over ~90 days — UVB physics, calcium, temperatures, vet, humidity, feeders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary">✓</span>
                <span>Sources: Mader’s Reptile Medicine and Surgery, ARAV, Solarmeter published UVI data</span>
              </li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="bg-white rounded-xl p-7 shadow-card-hover">
              <div className="mb-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  Step 1 of 1
                </div>
                <div className="font-display font-bold text-brand-dark text-xl leading-tight">
                  Get the first-year schedule + 8-email course
                </div>
              </div>
              <EmailCapture
                variant="inline"
                siteId="lizard-com"
                title=""
                ctaText="Send me the schedule →"
                placeholder="your@email.com"
                source="first-year-care-schedule"
              />
              <p className="text-2xs text-brand-text-light mt-4 leading-relaxed">
                We&apos;ll email the schedule immediately and start the 8-email course on day 3. See
                our{' '}
                <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY A SCHEDULE */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Why a schedule matters
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-5">
            First-year failures are not random.
          </h2>
          <div className="max-w-3xl text-base text-brand-text-mid leading-relaxed space-y-4">
            <p>
              Reptile husbandry literature is consistent: most first-year illness traces to a small
              set of failures — inconsistent UVB replacement, missed calcium dosing, gradual
              temperature drift, undiagnosed parasite burdens (cf. Mader,{' '}
              <em>Reptile Medicine and Surgery</em>, 3rd ed.; case-series in the{' '}
              <em>Journal of Herpetological Medicine and Surgery</em>).
            </p>
            <p>
              All four are scheduleable. A bulb does not need a meter to know it is due — the
              manufacturer&apos;s output curve and Solarmeter&apos;s published measurements already
              tell you. Calcium dosing fits a recurring weekly grid. Temperature drift is invisible
              day-to-day but obvious on a 30-day log. The schedule converts four
              invisible-until-disaster items into a visible weekly checkbox.
            </p>
          </div>
        </div>
      </section>

      {/* QUARTER-BY-QUARTER PREVIEW */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              What&apos;s in the schedule
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            52 weeks, four quarters, one printable page
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            Below is the focus and key items for each quarter. The printable version (sent by
            email) adds species-specific dosing tables, a UVB replacement calendar by bulb type,
            and the temperature/humidity log template.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {QUARTERS.map((q) => (
              <div
                key={q.id}
                id={q.id}
                className="bg-white border border-brand-border rounded-lg p-6"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {q.label} · {q.weeks}
                </div>
                <h3 className="font-display font-bold text-brand-dark text-xl tracking-tight mb-4 leading-snug">
                  {q.focus}
                </h3>
                <ul className="text-sm text-brand-text-mid space-y-2 leading-relaxed">
                  {q.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-brand-primary mt-1">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-xs text-brand-text-light mt-6">
            UVB replacement intervals reflect Solarmeter&apos;s published UV-index measurements
            across major bulb lines. Vet cadence reflects ARAV (Association of Reptile and
            Amphibian Veterinarians) published guidance on annual wellness exams.
          </p>
        </div>
      </section>

      {/* SPECIES CALLOUTS */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Common starter species
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            How the schedule adjusts for each species
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            The schedule scaffolding is the same for every reptile. The dosing tables and
            environmental targets differ. The printable version contains the species-specific
            tables; these short summaries show the shape of those adjustments.
          </p>

          <div className="bg-brand-surface border border-brand-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-primary-pale">
                <tr>
                  <th className="text-left p-4 font-display font-bold text-brand-dark w-48">
                    Species
                  </th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">
                    First-year adjustment
                  </th>
                </tr>
              </thead>
              <tbody>
                {SPECIES_CALLOUTS.map((s) => (
                  <tr key={s.species} className="border-t border-brand-border">
                    <td className="p-4 text-brand-dark font-semibold align-top">{s.species}</td>
                    <td className="p-4 text-brand-text-mid leading-relaxed">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-brand-text-light mt-5">
            Species references draw on the husbandry chapters in Mader,{' '}
            <em>Reptile Medicine and Surgery</em>, 3rd ed., and on Ferguson Zone classification
            (Ferguson et al., 2010).
          </p>
        </div>
      </section>

      {/* SECOND CAPTURE */}
      <section className="bg-brand-primary-pale border-y border-brand-border px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Get the printable schedule + the 8-email course
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-7 max-w-xl mx-auto">
            One signup. Schedule in your inbox immediately. Eight emails over roughly 90 days, then
            occasional updates only. Unsubscribe any time.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              variant="inline"
              siteId="lizard-com"
              title=""
              ctaText="Send me the schedule →"
              source="first-year-care-schedule-midpage"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              FAQ
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-8">
            How this works
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-12 pt-8 border-t border-brand-border text-sm text-brand-text-mid">
            <p className="mb-2">More first-year reference on Lizard.com:</p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/setup/uvb-lighting-guide" className="text-brand-primary hover:underline">
                  UVB lighting guide — Ferguson Zones, bulb selection, distance
                </Link>
              </li>
              <li>
                <Link href="/setup/temperature-guide" className="text-brand-primary hover:underline">
                  Temperature guide — gradients, basking, thermostats
                </Link>
              </li>
              <li>
                <Link href="/setup/humidity-guide" className="text-brand-primary hover:underline">
                  Humidity guide — species ranges and measurement
                </Link>
              </li>
              <li>
                <Link href="/health/metabolic-bone-disease" className="text-brand-primary hover:underline">
                  Metabolic bone disease — the failure the schedule is designed to prevent
                </Link>
              </li>
              <li>
                <Link href="/health/hypocalcemia" className="text-brand-primary hover:underline">
                  Hypocalcemia — acute calcium-deficiency emergencies
                </Link>
              </li>
              <li>
                <Link href="/reviews/best-uvb-bulbs" className="text-brand-primary hover:underline">
                  UVB bulb reference — by species and enclosure size
                </Link>
              </li>
              <li>
                <Link href="/reviews/best-thermometers-hygrometers" className="text-brand-primary hover:underline">
                  Thermometer and hygrometer reference
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
