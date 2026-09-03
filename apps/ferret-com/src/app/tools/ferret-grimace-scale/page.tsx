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
import FerretGrimaceScale from './Calculator'

const URL = 'https://ferret.com/tools/ferret-grimace-scale'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Grimace Scale — Is My Ferret in Pain? | Ferret.com',
  description:
    'Score five ferret facial signs — ears, eyes, nose, cheeks, whiskers — on this owner Ferret Grimace checklist. Planning reference, not a diagnosis.',
  path: '/tools/ferret-grimace-scale',
})

const FAQS = [
  {
    question: 'What is a ferret grimace scale?',
    answer:
      'A grimace scale is a way to look at the face for pain. The published clinical instrument is the Ferret Grimace Scale (Reijgwart et al., PLoS ONE, 2017), which identified five facial action units scored from 0 to 2: orbital tightening, nose bulging, cheek bulging, ear changes, and whisker retraction. This Ferret.com page is the ferret twin of the dog, cat, and horse owner-education pattern, with mustelid-specific descriptors drawn from that paper. Orbital tightening was the most reliable unit in the original study; whisker retraction was weaker. It is a planning and observation reference — not a licensed clinical instrument and not a diagnosis.',
    answerText:
      'An owner pain-face checklist: five facial signs scored 0–2 (ears, eyes, nose, cheeks, whiskers). Twin of the dog/cat/horse grimace pattern, adapted from the published Ferret Grimace Scale. Planning reference, not a diagnosis or licensed clinical instrument.',
  },
  {
    question: 'What grimace score means my ferret is in pain?',
    answer:
      'On this planning checklist, a total around 4 out of 10 or higher means more facial pain-face features are present — contact an exotic-mammal veterinarian and, if the onset is sudden or the ferret looks distressed, use the ferret emergency triage tool rather than waiting. Below that, pain is less likely on facial signs alone but not ruled out. Unlike a trained-observer clinical score, this page does not claim a validated owner analgesia cut-off. The number is a conversation aid, not a diagnosis.',
    answerText:
      'About 4/10 or higher on this planning checklist means more facial pain signs — call an exotic-mammal vet; use emergency triage if sudden or severe. Not a validated owner analgesia cut-off. Not a diagnosis.',
  },
  {
    question: 'Can a low score mean my ferret is definitely not in pain?',
    answer:
      'No. A low facial-pain score is reassuring but not conclusive. Ferrets hide discomfort, and some pain — early gastrointestinal blockage, insulinoma, dental disease, or slow chronic arthritis — may not show clearly in the face. If your ferret is hunched, grinding its teeth, off food, straining, collapsing, or simply seems off, talk to an exotic-mammal veterinarian regardless of the grimace total.',
    answerText:
      'No. A low score does not rule pain out. Ferrets mask discomfort; some pain is not facial. Trust other changes and call an exotic-mammal vet if the ferret seems off.',
  },
  {
    question: 'What should I do if I think my ferret is in pain?',
    answer:
      'Contact an exotic-mammal veterinarian and describe what you see — the facial signs plus appetite, stool, posture, teeth-grinding, and breathing. Do not give leftover prescriptions or human painkillers: ibuprofen and acetaminophen are toxic to ferrets, and leftover prescriptions can be the wrong drug or the wrong amount. This page never recommends a dose or a named pain medicine. If the ferret may be an emergency (collapse, trouble breathing, a hard belly, inability to urinate, trauma), skip the comfort kit and use the ferret emergency triage tool.',
    answerText:
      'Call an exotic-mammal veterinarian. Never give leftover prescriptions or human painkillers — this page never recommends a dose or a named drug. High-pain or sudden signs: use ferret emergency triage, do not shop first.',
  },
  {
    question: 'When is a ferret grimace / pain-face checklist most useful?',
    answer:
      'It is most useful as a calm, unprovoked look at rest — after you notice a change, after a known bump, or when you are deciding whether a senior’s “slowing down” looks like a pain face. Handling, play, a dead-sleep wake, heat, and eating change the face. It is one input alongside behavior and your own knowledge of this ferret, not a standalone diagnosis and not an emergency-triage substitute.',
    answerText:
      'Most useful on a calm, unprovoked ferret at rest. Handling, play, and eating change the face. One input, not a diagnosis or emergency-triage substitute.',
  },
  {
    question: 'Is the ferret grimace scale a diagnosis or an emergency-triage tool?',
    answer:
      'No. It is a planning and observation reference only. It does not diagnose a condition, decide whether you need the ER, or replace an exotic-mammal veterinarian. A high score is a reason to call your vet; a low score does not rule pain out. For a stable, non-emergency question, start with telehealth. For sudden collapse, trouble breathing, a hard belly, inability to urinate, or trauma, use the ferret emergency triage tool and go to ferret-capable emergency care — do not start with a shopping list.',
    answerText:
      'No. Planning / observation reference only — not a diagnosis or ER substitute. High or sudden signs: emergency triage, not shop-first. Stable questions: telehealth.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Ferret.com', url: 'https://ferret.com/' },
    { name: 'Tools', url: 'https://ferret.com/tools' },
    { name: 'Ferret Grimace Scale', url: URL },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferret Grimace Scale Pain-Face Checklist',
  description:
    'Free guided owner self-assessment adapted from published Ferret Grimace Scale features, with five owner-facing facial action units (ear position, orbital tightening, nose bulging, cheek bulging, whisker retraction). Planning / observation reference — not a diagnosis.',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Scores five ferret facial action units (0–2 each) — ears, eyes, nose, cheeks, whiskers',
    'Estimated grimace total out of 10 as a planning heuristic',
    'Calibrated interpretation: minimal signs, some signs, or signs consistent with pain',
    'High-pain outcomes push ferret emergency triage, not a shopping list',
    'Safety guidance: never give leftover prescriptions or human painkillers; never recommend a dose or a named drug',
    'Shoppable observation / comfort kit via Amazon category searches (ferret first-aid kit, digital pet thermometer, vet wrap / cohesive bandage, low-setting pet heating pad, ferret electrolytes / recovery food)',
  ],
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to use the ferret grimace / pain-face checklist at home',
  description:
    'Score five facial action units on a calm, unprovoked ferret to estimate whether the face shows pain-face features. A planning reference, not a diagnosis.',
  url: URL,
  steps: [
    {
      name: 'Observe calmly',
      text: 'Watch your ferret when it is resting and unprovoked — not while being handled, playing, eating, or just waking from a dead sleep, which changes the face. Compare to this ferret’s usual expression.',
    },
    {
      name: 'Score ear position',
      text: 'Usual relaxed or alert set scores 0; slightly flatter or pulling back scores 1; flattened against the head and tight at the base scores 2.',
    },
    {
      name: 'Score eye opening',
      text: 'Eyes fully open and soft score 0; partially closed or tense score 1; squinted or tightly closed score 2. Orbital tightening was the most reliable unit in the published Ferret Grimace Scale.',
    },
    {
      name: 'Score nose, cheeks, and whiskers',
      text: 'Rate nose bulging, cheek bulging, and whisker retraction each from 0 (usual/relaxed) to 2 (obviously bulbous / drawn / retracted).',
    },
    {
      name: 'Total and act',
      text: 'Add the five scores (0–10). A higher total is a reason to contact an exotic-mammal veterinarian. If the onset is sudden or the ferret looks distressed, use the ferret emergency triage tool — do not shop a comfort kit first. Never give leftover prescriptions or human painkillers.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function FerretGrimaceScalePage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(110, 80, 50, 0.5) 0%, transparent 60%)' }}
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
            Ferret Grimace Scale
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Is your ferret in pain? Ferrets hide it — but the face leaks it.
            Score five facial signs (ears, eyes, nose, cheeks, whiskers) on
            this owner Ferret Grimace checklist. A planning / observation
            reference, not a diagnosis.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Ferret.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Ferret Grimace Scale</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the pain-check chart
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret pain-check checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the five-sign Ferret Grimace checklist (ears, eyes, nose,
            cheeks, whiskers) and the observation recap so you can re-score
            later without re-reading the descriptors. Planning / observation
            reference only — not a diagnosis or emergency-triage substitute.
            No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret pain-check checklist"
            subtitle="Email the five-sign ferret pain-face checklist and observation recap. No spam."
            ctaText="Email my ferret pain-check checklist"
            source="tools-ferret-grimace-scale-under-hero"
          />
        </div>
      </section>

      {/* Calculator */}
      <section id="assessor" className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-brand-text-mid">
            Ferrets evolved to conceal pain, which is why owners so often miss
            it until a problem is advanced. Their faces, however, change in
            measurable ways when they hurt. Score the five facial action units
            below on a calm, unprovoked ferret and the tool totals them on a
            0–10 planning scale. This is a planning / observation reference,
            not a diagnosis or an emergency-triage substitute. For life-stage
            context, use the{' '}
            <Link href="/tools/ferret-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              ferret age calculator
            </Link>
            . For weight, the{' '}
            <Link href="/tools/ferret-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              ferret body condition score
            </Link>{' '}
            is a wellness reference, not a diagnosis. For a ferret sign-list
            urgency read (go now / same-day / monitor), use{' '}
            <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              Is this a ferret emergency?
            </Link>
            . The prose guide behind hidden discomfort is{' '}
            <Link href="/health/signs-of-pain" className="text-brand-primary underline-offset-2 hover:underline">
              signs of pain in ferrets
            </Link>
            .
          </p>
          <FerretGrimaceScale />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (observation / comfort kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis.
          High-pain outcomes should already have pushed ER triage above. */}
      <section id="ferret-grimace-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a pain-watch observation kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are comfort and observation items
              for a ferret pain-watch — a ferret first-aid kit, a digital pet
              thermometer, vet wrap / cohesive bandage, a low-setting pet
              heating pad, and ferret electrolytes / OTC recovery food. They
              are not a ranked product list, not invented inventory, not Rx
              pain medicine, and they do not diagnose pain or replace emergency
              triage. Ferrets overheat easily: a heating pad, if used at all,
              must be low-setting, never unattended, and always paired with a
              cool escape path. If the face looks like high pain, skip this
              kit and use{' '}
              <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">
                Is this a ferret emergency?
              </Link>
              . For a stable, non-emergency question, start at telehealth.
              Ferret.com earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+first+aid+kit?s=tools-ferret-grimace-scale"
                amazonLabel="Browse ferret first-aid kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+thermometer?s=tools-ferret-grimace-scale"
                amazonLabel="Browse digital pet thermometers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/vet+wrap+cohesive+bandage?s=tools-ferret-grimace-scale"
                amazonLabel="Browse vet wrap / cohesive bandages on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+heating+pad+low?s=tools-ferret-grimace-scale"
                amazonLabel="Browse low-setting pet heating pads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+electrolytes+recovery+food?s=tools-ferret-grimace-scale"
                amazonLabel="Browse ferret electrolytes / recovery foods on Amazon →"
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
              Unexpected pain workups and exotic-vet emergency visits are one
              of the cost drivers pet insurance is built for. Comparing
              published coverage while a ferret is young and healthy matters
              because pre-existing conditions are excluded. This is an
              educational comparison link, not a ranking of carriers. For a
              stable, non-emergency question about comfort or behavior, talk
              to a licensed vet on a screen rather than waiting for a gap to
              become an ER visit.
            </p>
            <AffiliateDisclosure variant="inline" siteId="ferret-com" className="mb-3 text-2xs" />
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
            How the ferret grimace / pain-face checklist works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This checklist scores five facial action units: ear position
            (flattening), orbital tightening (how squinted the eyes are),
            nose bulging, cheek bulging, and whisker retraction. Each is
            scored 0 (absent), 1 (moderate or uncertain), or 2 (obvious),
            for a total between 0 and 10. The structure is the ferret twin
            of the{' '}
            <Link href="https://dog.com/tools/dog-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              dog grimace scale
            </Link>
            , the{' '}
            <Link href="https://vets.co/tools/cat-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              cat grimace scale
            </Link>
            , and the{' '}
            <Link href="https://horses.com/tools/horse-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              horse grimace scale
            </Link>
            . The descriptors are mustelid-specific and drawn from published
            ferret pain-face features — the Ferret Grimace Scale (Reijgwart
            et al., 2017) — not a claim that an owner checklist has the same
            measurement properties as a trained-observer score. That study
            found orbital tightening the most reliable unit and whisker
            retraction weaker; this page keeps all five identified units so
            the 0–10 planning bands stay comparable to the other twins.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            It works best on a ferret that is resting rather than being
            handled, playing, eating, or just waking from a dead sleep,
            because stress, heat, and chewing change the face. Pair the
            score with the{' '}
            <Link href="/tools/ferret-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              ferret age calculator
            </Link>
            , the{' '}
            <Link href="/tools/ferret-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              body condition score
            </Link>
            , and the{' '}
            <Link href="/tools/cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cost calculator
            </Link>
            . For the behavioral write-up, see{' '}
            <Link href="/health/signs-of-pain" className="text-brand-primary underline-offset-2 hover:underline">
              signs of pain in ferrets
            </Link>
            . For a stable, non-emergency question, start at{' '}
            <Link href="https://vets.co/telehealth" className="text-brand-primary underline-offset-2 hover:underline">
              telehealth
            </Link>
            . If a sign is in front of you right now, the{' '}
            <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              ferret emergency sign-list
            </Link>{' '}
            is a conservative urgency read — not a diagnosis.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            What a high score means
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A higher total on this planning checklist is a reason to call an
            exotic-mammal veterinarian — not a wait-and-see, and never a
            leftover prescription or a human painkiller. Common
            over-the-counter drugs, including{' '}
            <strong>ibuprofen</strong> and <strong>acetaminophen</strong>,
            are toxic to ferrets. This page never recommends a dose or a
            named pain medicine. Ferret pain relief must be prescribed by a
            veterinarian. If the face looks like high pain and the onset is
            sudden, skip the observation kit and use{' '}
            <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              Is this a ferret emergency?
            </Link>
            .
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A low score is reassuring but not a clearance: because ferrets
            mask pain, and some pain is not facial, trust changes in
            appetite, stool, posture, teeth-grinding, and rest too. This
            page is a planning / observation reference, not a diagnosis or
            an emergency-triage substitute.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Sources
          </h2>
          <ul className="mb-8 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-text-mid">
            <li>
              Reijgwart ML, Schoemaker NJ, Pascuzzo R, Leach MC, Stodel M,
              de Nies L, et al. “The composition and initial evaluation of a
              grimace scale in ferrets after surgical implantation of a
              telemetry probe.” <em>PLoS ONE</em>, 2017;12(11):e0187986.
              Five facial action units scored 0–2; orbital tightening was
              the most reliable. This owner page adapts those descriptors
              into a five-unit 0–10 planning checklist.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits,
              and Rodents: Clinical Medicine and Surgery</em>. Ferret
              analgesia, pain recognition, and clinical examination chapters.
            </li>
            <li>
              American Veterinary Medical Association and Association of
              Exotic Mammal Veterinarians — recognizing pain in companion
              and exotic mammals; never give leftover prescriptions or
              human painkillers without an exotic-mammal veterinarian.
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
              { label: 'Is This a Ferret Emergency?', href: '/tools/is-this-a-ferret-emergency', note: 'Conservative sign-list urgency read — use this first when pain looks sudden' },
              { label: 'Signs of Pain in Ferrets', href: '/health/signs-of-pain', note: 'The prose guide behind hidden discomfort' },
              { label: 'Ferret Body Condition Score', href: '/tools/ferret-body-condition-score', note: '1–9 planning score from rib feel, waist, and belly' },
              { label: 'Ferret Age Calculator', href: '/tools/ferret-age-calculator', note: 'Human-year estimate and kit / young adult / mature / senior label' },
              { label: 'Find an Exotic Vet', href: '/find-an-exotic-vet', note: 'Line up ferret-capable care before a crisis' },
              { label: 'Ferret Cost Calculator', href: '/tools/cost-calculator', note: 'Monthly and first-year keeping cost' },
              { label: 'Aging Ferret Care', href: '/health/aging-ferret-care', note: 'Senior monitoring from around 4–5+' },
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

      <CrossPortfolioCard currentSite="ferret-com" contentType="tool" variant="footer" />
    </>
  )
}
