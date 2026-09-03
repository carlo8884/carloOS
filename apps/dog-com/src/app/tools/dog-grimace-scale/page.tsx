import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  AffiliateDisclosure,
  CrossPortfolioCard,
  ShopCtas,
} from '@carloOS/ui'
import DogGrimaceScale from './Calculator'

const URL = 'https://dog.com/tools/dog-grimace-scale'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Grimace Scale — Is My Dog in Pain? | Dog.com',
  description:
    'Score five dog facial signs — ears, eyes, muzzle, brow, head — on this owner pain-face checklist. Planning reference, not a diagnosis.',
  path: '/tools/dog-grimace-scale',
})

const FAQS = [
  {
    question: 'What is a dog grimace scale?',
    answer:
      'A grimace scale is a way to look at the face for pain. The well-validated clinical instrument is the Feline Grimace Scale (Evangelista et al., Scientific Reports, 2019), which scores five facial action units from 0 to 2. This Dog.com page is the dog twin of that owner-education pattern: ear position, orbital tightening, muzzle/lip tension, tension above the eye (brow), and head position, with dog-specific descriptors drawn from published canine “pain face” features and Glasgow CMPS-SF facial language (Reid et al.). It is a planning and observation reference for owners — not a licensed clinical instrument and not a diagnosis.',
    answerText:
      'An owner pain-face checklist: five facial signs scored 0–2 (ears, eyes, muzzle, brow, head). Twin of the cat grimace pattern. Planning reference, not a diagnosis or licensed clinical instrument.',
  },
  {
    question: 'What grimace score means my dog is in pain?',
    answer:
      'On this planning checklist, a total around 4 out of 10 or higher means more facial pain-face features are present — contact your veterinarian and, if the onset is sudden or the dog looks distressed, use the dog emergency triage tool rather than waiting. Below that, pain is less likely on facial signs alone but not ruled out. Unlike the Feline Grimace Scale, this page does not claim a validated canine analgesia cut-off. The number is a conversation aid, not a diagnosis.',
    answerText:
      'About 4/10 or higher on this planning checklist means more facial pain signs — call a vet; use emergency triage if sudden or severe. Not a validated canine analgesia cut-off. Not a diagnosis.',
  },
  {
    question: 'Can a low score mean my dog is definitely not in pain?',
    answer:
      'No. A low facial-pain score is reassuring but not conclusive. Dogs can mask discomfort, and some pain — dental, abdominal, or slow chronic arthritis — may not show clearly in the face. If your dog is limping, panting at rest, hiding, eating less, or simply seems off, talk to your veterinarian regardless of the grimace total.',
    answerText:
      'No. A low score does not rule pain out. Dogs mask discomfort; some pain is not facial. Trust other changes and call a vet if the dog seems off.',
  },
  {
    question: 'What should I do if I think my dog is in pain?',
    answer:
      'Contact your veterinarian and describe what you see — the facial signs plus appetite, mobility, panting, and restlessness. Do not give human or leftover painkillers: ibuprofen, acetaminophen, and naproxen are toxic to dogs, and leftover prescriptions can be the wrong drug or the wrong amount. This page never recommends a dose or a named pain medicine. Pain control for dogs must be prescribed by a veterinarian. If the dog may be an emergency (collapse, trouble breathing, a hard bloated belly, trauma), skip the comfort kit and use the dog emergency triage tool.',
    answerText:
      'Call your veterinarian. Never give human painkillers or leftover prescriptions — this page never recommends a dose or a named drug. High-pain or sudden signs: use dog emergency triage, do not shop first.',
  },
  {
    question: 'When is a dog grimace / pain-face checklist most useful?',
    answer:
      'It is most useful as a calm, unprovoked look at rest — after you notice a change, after a known bump, or when you are deciding whether a senior’s “slowing down” looks like a pain face. Handling, excitement, and fear change the face. It is one input alongside behavior and your own knowledge of this dog, not a standalone diagnosis and not an emergency-triage substitute.',
    answerText:
      'Most useful on a calm, unprovoked dog at rest. Handling and fear change the face. One input, not a diagnosis or emergency-triage substitute.',
  },
  {
    question: 'Is the dog grimace scale a diagnosis or an emergency-triage tool?',
    answer:
      'No. It is a planning and observation reference only. It does not diagnose a condition, decide whether you need the ER, or replace a veterinarian. A high score is a reason to call your vet; a low score does not rule pain out. For a stable, non-emergency question, start with telehealth. For sudden collapse, trouble breathing, a hard bloated belly, or trauma, use the dog emergency triage tool and go to an emergency hospital — do not start with a shopping list.',
    answerText:
      'No. Planning / observation reference only — not a diagnosis or ER substitute. High or sudden signs: emergency triage, not shop-first. Stable questions: telehealth.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Grimace Scale', url: URL },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dog Grimace Scale Pain-Face Checklist',
  description:
    'Free guided owner self-assessment adapted from the five facial-action-unit cat grimace pattern, with dog-specific descriptors (ear position, orbital tightening, muzzle/lip tension, brow, head position). Planning / observation reference — not a diagnosis.',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Scores five dog facial action units (0–2 each) — ears, eyes, muzzle, brow, head',
    'Estimated grimace total out of 10 as a planning heuristic',
    'Calibrated interpretation: minimal signs, some signs, or signs consistent with pain',
    'High-pain outcomes push dog emergency triage, not a shopping list',
    'Safety guidance: never give human painkillers; never recommend a dose or a named drug',
    'Shoppable observation / comfort kit via Amazon category searches (dog first-aid kit, soft recovery cone, orthopedic dog bed, dog ice pack wrap, calming dog chews)',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to use the dog grimace / pain-face checklist at home',
  description:
    'Score five facial action units on a calm, unprovoked dog to estimate whether the face shows pain-face features. A planning reference, not a diagnosis.',
  url: URL,
  steps: [
    {
      name: 'Observe calmly',
      text: 'Watch your dog when it is resting and unprovoked — not while being handled, which changes the face. Compare to this dog’s usual expression, especially if the ears are floppy, cropped, or prick.',
    },
    {
      name: 'Score ear position',
      text: 'Usual relaxed set scores 0; slightly pulled back or low scores 1; flattened, pinned, or rotated tightly back scores 2.',
    },
    {
      name: 'Score eye opening',
      text: 'Eyes fully open and soft score 0; partially closed or tense score 1; squinted or tightly closed score 2.',
    },
    {
      name: 'Score muzzle, brow, and head',
      text: 'Rate muzzle/lip tension, brow furrow, and head height each from 0 (relaxed/usual) to 2 (taut/furrowed/tucked).',
    },
    {
      name: 'Total and act',
      text: 'Add the five scores (0–10). A higher total is a reason to contact a veterinarian. If the onset is sudden or the dog looks distressed, use the dog emergency triage tool — do not shop a comfort kit first. Never give human painkillers.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function DogGrimaceScalePage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(30, 80, 160, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Calculators &amp; Tools
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Dog Grimace Scale
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Is your dog in pain? Dogs hide it — but the face leaks it. Score five
            facial signs (ears, eyes, muzzle, brow, head) on this owner
            pain-face checklist. A planning / observation reference, not a
            diagnosis.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Dog Grimace Scale</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the pain-check chart
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog pain-check checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the five-sign pain-face checklist (ears, eyes, muzzle, brow,
            head) and the observation recap so you can re-score later without
            re-reading the descriptors. Planning / observation reference only
            — not a diagnosis or emergency-triage substitute. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog pain-check checklist"
            subtitle="Email the five-sign dog pain-face checklist and observation recap. No spam."
            ctaText="Email my dog pain-check checklist"
            source="tools-dog-grimace-scale-under-hero"
          />
        </div>
      </section>

      {/* Calculator */}
      <section id="assessor" className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-brand-text-mid">
            Dogs evolved to conceal pain, which is why owners so often miss it
            until a problem is advanced. Their faces, however, change in
            measurable ways when they hurt. Score the five facial action units
            below on a calm, unprovoked dog and the tool totals them on a 0–10
            planning scale. This is a planning / observation reference, not a
            diagnosis or an emergency-triage substitute. For life-stage
            context, use the{' '}
            <Link href="/tools/dog-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              dog age calculator
            </Link>
            . For weight, the{' '}
            <Link href="/tools/dog-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              dog body condition score
            </Link>{' '}
            is a wellness reference, not a diagnosis. For a canine sign-list
            urgency read (go now / same-day / monitor), use{' '}
            <Link href="/tools/is-this-a-dog-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              Is this a dog emergency?
            </Link>
            . If the sign is chocolate, use the{' '}
            <Link href="/tools/dog-chocolate-toxicity-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              chocolate-toxicity calculator
            </Link>
            .
          </p>
          <DogGrimaceScale />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (observation / comfort kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis.
          High-pain outcomes should already have pushed ER triage above. */}
      <section id="dog-grimace-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a pain-watch observation kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are comfort and observation items
              for a canine pain-watch — a dog first-aid kit, a soft recovery
              cone, an orthopedic dog bed, a dog ice pack wrap, and calming
              dog chews (OTC comfort only). They are not a ranked product
              list, not invented inventory, not Rx pain medicine, and they do
              not diagnose pain or replace emergency triage. If the face looks
              like high pain, skip this kit and use{' '}
              <Link href="/tools/is-this-a-dog-emergency" className="text-brand-primary underline-offset-2 hover:underline">
                Is this a dog emergency?
              </Link>
              . For a stable, non-emergency question, start at telehealth.
              Dog.com earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+first+aid+kit?s=tools-dog-grimace-scale"
                amazonLabel="Browse dog first-aid kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/soft+recovery+cone+dog?s=tools-dog-grimace-scale"
                amazonLabel="Browse soft recovery cones on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/orthopedic+dog+bed?s=tools-dog-grimace-scale"
                amazonLabel="Browse orthopedic dog beds on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+ice+pack+wrap?s=tools-dog-grimace-scale"
                amazonLabel="Browse dog ice pack wraps on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/calming+dog+chews?s=tools-dog-grimace-scale"
                amazonLabel="Browse calming dog chews on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planning ahead — insurance (educational) + non-ER telehealth. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Planning ahead
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Unexpected pain workups and ER visits are one of the cost
              drivers pet insurance is built for. Comparing published coverage
              while a dog is young and healthy matters because pre-existing
              conditions are excluded. This is an educational comparison
              link, not a ranking of carriers. For a stable, non-emergency
              question about comfort or behavior, talk to a licensed vet on a
              screen rather than waiting for a gap to become an ER visit.
            </p>
            <AffiliateDisclosure variant="inline" siteId="dog-com" className="mb-3 text-2xs" />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="https://vets.co/reviews/best-pet-insurance"
                className="inline-block bg-brand-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-dark/90"
              >
                Compare pet insurance →
              </Link>
              <Link
                href="https://vets.co/telehealth"
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Talk to a vet (telehealth) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            How the dog grimace / pain-face checklist works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This checklist scores five facial action units: ear position,
            orbital tightening (how squinted the eyes are), muzzle and lip
            tension, tension above the eye (the brow furrow dogs show more
            clearly than cats), and head position. Each is scored 0 (absent),
            1 (moderate or uncertain), or 2 (obvious), for a total between 0
            and 10. The structure is the dog twin of the{' '}
            <Link href="https://vets.co/tools/cat-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              cat grimace scale
            </Link>{' '}
            on Vets.co. The descriptors are dog-specific and drawn from
            published canine pain-face features — including facial-expression
            language used in the Glasgow Composite Measure Pain Scale
            short form (Reid et al.) — not a claim that a canine grimace
            scale has the same validated analgesia cut-off as the Feline
            Grimace Scale (Evangelista et al., 2019).
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            It works best on a dog that is resting rather than being handled,
            because stress, excitement, and restraint change the face. Breed
            ear set and face shape change the baseline: compare this dog to
            itself, not to a stock photo. Pair the score with the{' '}
            <Link href="/tools/dog-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              dog age calculator
            </Link>
            , the{' '}
            <Link href="/tools/dog-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              body condition score
            </Link>
            , the{' '}
            <Link href="/tools/dog-calorie-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              calorie calculator
            </Link>
            , and the{' '}
            <Link href="/tools/dog-exercise-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              exercise calculator
            </Link>
            . For what to pack before you need it, see the{' '}
            <Link href="/guides/dog-first-aid-kit" className="text-brand-primary underline-offset-2 hover:underline">
              dog first-aid kit guide
            </Link>
            . For a stable, non-emergency question, start at{' '}
            <Link href="https://vets.co/telehealth" className="text-brand-primary underline-offset-2 hover:underline">
              telehealth
            </Link>
            . If a sign is in front of you right now, the{' '}
            <Link href="/tools/is-this-a-dog-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              dog emergency sign-list
            </Link>{' '}
            is a conservative urgency read — not a diagnosis.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            What a high score means
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A higher total on this planning checklist is a reason to call your
            veterinarian — not a wait-and-see, and never a human painkiller.
            Common over-the-counter drugs, including{' '}
            <strong>ibuprofen</strong>, <strong>acetaminophen</strong>, and{' '}
            <strong>naproxen</strong>, are toxic to dogs. This page never
            recommends a dose or a named pain medicine. Canine pain relief
            must be prescribed by a veterinarian. If the face looks like high
            pain and the onset is sudden, skip the observation kit and use{' '}
            <Link href="/tools/is-this-a-dog-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              Is this a dog emergency?
            </Link>
            .
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A low score is reassuring but not a clearance: because dogs mask
            pain, and some pain is not facial, trust changes in appetite,
            mobility, panting, and rest too. This page is a planning /
            observation reference, not a diagnosis or an emergency-triage
            substitute.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Sources
          </h2>
          <ul className="mb-8 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-text-mid">
            <li>
              Evangelista MC, et al. “Facial expressions of pain in cats: the
              development and validation of a Feline Grimace Scale.”{' '}
              <em>Scientific Reports</em>, 2019. The cat twin on Vets.co adapts
              this validated five-action-unit instrument; the dog page copies
              the owner-education pattern with canine descriptors.
            </li>
            <li>
              Reid J, Nolan AM, Hughes JML, et al. Development of the
              short-form Glasgow Composite Measure Pain Scale (CMPS-SF) and
              derivation of an analgesic intervention score. Facial-expression
              items inform the dog-specific ear, eye, and muzzle language.
            </li>
            <li>
              American Veterinary Medical Association — coverage of recognizing
              pain in companion animals; never give human NSAIDs to dogs
              without a veterinarian.
            </li>
          </ul>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Is This a Dog Emergency?', href: '/tools/is-this-a-dog-emergency', note: 'Conservative sign-list urgency read — use this first when pain looks sudden' },
              { label: 'Dog Body Condition Score', href: '/tools/dog-body-condition-score', note: '1–9 wellness reference from rib feel, waist, and tuck' },
              { label: 'Dog Age Calculator', href: '/tools/dog-age-calculator', note: 'Human-year estimate and life-stage label' },
              { label: 'Dog Chocolate Toxicity Calculator', href: '/tools/dog-chocolate-toxicity-calculator', note: 'Theobromine dose bands — call poison control' },
              { label: 'Dog Calorie Calculator', href: '/tools/dog-calorie-calculator', note: 'Daily kcal estimate by life stage' },
              { label: 'Dog Exercise Calculator', href: '/tools/dog-exercise-calculator', note: 'Daily activity target by energy and life stage' },
              { label: 'Dog First-Aid Kit Guide', href: '/guides/dog-first-aid-kit', note: 'What to pack before you need it' },
              { label: 'Talk to a vet (telehealth)', href: 'https://vets.co/telehealth', note: 'Stable, non-emergency questions' },
            ].map((item) => (
              item.href.startsWith('http') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                  <div className="text-xs text-brand-text-light">{item.note}</div>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                  <div className="text-xs text-brand-text-light">{item.note}</div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}
