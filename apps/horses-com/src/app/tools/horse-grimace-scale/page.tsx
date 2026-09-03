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
import HorseGrimaceScale from './Calculator'

const URL = 'https://horses.com/tools/horse-grimace-scale'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Grimace Scale — Is My Horse in Pain? | Horses.com',
  description:
    'Score five horse facial signs — ears, eyes, brow, chewing muscles, nostrils — on this owner Equine Grimace checklist. Planning reference, not a diagnosis.',
  path: '/tools/horse-grimace-scale',
})

const FAQS = [
  {
    question: 'What is a horse grimace scale?',
    answer:
      'A grimace scale is a way to look at the face for pain. The published clinical instrument is the Horse Grimace Scale (Dalla Costa et al., PLOS ONE, 2014), which scores six facial action units from 0 to 2, alongside the equine pain face described by Gleerup et al. (2015). This Horses.com page is the horse twin of the dog and cat owner-education pattern: ear position, orbital tightening, tension above the eye, chewing muscles / mouth / chin, and strained nostrils, with horse-specific descriptors. Chewing-muscle strain and the strained mouth / pronounced chin are grouped as one owner observation so the 0–10 planning bands stay comparable. It is a planning and observation reference — not a licensed clinical instrument and not a diagnosis.',
    answerText:
      'An owner pain-face checklist: five facial signs scored 0–2 (ears, eyes, brow, chewing muscles / mouth, nostrils). Twin of the dog/cat grimace pattern, adapted from the published Horse Grimace Scale. Planning reference, not a diagnosis or licensed clinical instrument.',
  },
  {
    question: 'What grimace score means my horse is in pain?',
    answer:
      'On this planning checklist, a total around 4 out of 10 or higher means more facial pain-face features are present — contact your equine veterinarian and, if the onset is sudden or the horse looks distressed, use the horse emergency triage tool rather than waiting. Below that, pain is less likely on facial signs alone but not ruled out. Unlike the published Horse Grimace Scale used by trained observers, this page does not claim a validated owner analgesia cut-off. The number is a conversation aid, not a diagnosis.',
    answerText:
      'About 4/10 or higher on this planning checklist means more facial pain signs — call an equine vet; use emergency triage if sudden or severe. Not a validated owner analgesia cut-off. Not a diagnosis.',
  },
  {
    question: 'Can a low score mean my horse is definitely not in pain?',
    answer:
      'No. A low facial-pain score is reassuring but not conclusive. Horses can mask discomfort, and some pain — early colic, a hoof abscess, or slow chronic arthritis — may not show clearly in the face. If your horse is off feed, looking at the flank, standing camped out, short-strided, or simply seems off, talk to your equine veterinarian regardless of the grimace total.',
    answerText:
      'No. A low score does not rule pain out. Horses mask discomfort; some pain is not facial. Trust other changes and call an equine vet if the horse seems off.',
  },
  {
    question: 'What should I do if I think my horse is in pain?',
    answer:
      'Contact your equine veterinarian and describe what you see — the facial signs plus appetite, manure, stance, digital pulse, and breathing. Do not give leftover prescriptions or human painkillers: dosing and specific drugs are a veterinarian’s decision, not this page’s. This page never recommends a dose or a named pain medicine. If the horse may be an emergency (rolling, choke, non-weight-bearing lameness, founder, down and cannot rise), skip the comfort kit and use the horse emergency triage tool.',
    answerText:
      'Call your equine veterinarian. Never give leftover prescriptions or human painkillers — this page never recommends a dose or a named drug. High-pain or sudden signs: use horse emergency triage, do not shop first.',
  },
  {
    question: 'When is a horse grimace / pain-face checklist most useful?',
    answer:
      'It is most useful as a calm, unprovoked look at rest — after you notice a change, after a known bump, or when you are deciding whether a senior’s “slowing down” looks like a pain face. Handling, excitement, work, heat, and eating change the face. It is one input alongside behavior and your own knowledge of this horse, not a standalone diagnosis and not an emergency-triage substitute.',
    answerText:
      'Most useful on a calm, unprovoked horse at rest. Handling, work, and eating change the face. One input, not a diagnosis or emergency-triage substitute.',
  },
  {
    question: 'Is the horse grimace scale a diagnosis or an emergency-triage tool?',
    answer:
      'No. It is a planning and observation reference only. It does not diagnose a condition, decide whether you need the ER, or replace an equine veterinarian. A high score is a reason to call your vet; a low score does not rule pain out. For a stable, non-emergency question, start with telehealth. For sudden rolling, choke, non-weight-bearing lameness, founder, or a horse that cannot rise, use the horse emergency triage tool and call your equine veterinarian — do not start with a shopping list.',
    answerText:
      'No. Planning / observation reference only — not a diagnosis or ER substitute. High or sudden signs: emergency triage, not shop-first. Stable questions: telehealth.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Horses.com', url: 'https://horses.com/' },
    { name: 'Tools', url: 'https://horses.com/tools' },
    { name: 'Horse Grimace Scale', url: URL },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Grimace Scale Pain-Face Checklist',
  description:
    'Free guided owner self-assessment adapted from published Horse Grimace Scale and equine pain-face features, with five owner-facing facial action units (ear position, orbital tightening, tension above the eye, chewing muscles / mouth / chin, strained nostrils). Planning / observation reference — not a diagnosis.',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Scores five horse facial action units (0–2 each) — ears, eyes, brow, chewing muscles / mouth, nostrils',
    'Estimated grimace total out of 10 as a planning heuristic',
    'Calibrated interpretation: minimal signs, some signs, or signs consistent with pain',
    'High-pain outcomes push horse emergency triage, not a shopping list',
    'Safety guidance: never give leftover prescriptions or human painkillers; never recommend a dose or a named drug',
    'Shoppable observation / comfort kit via Amazon category searches (equine first-aid kit, poultice, ice boot / cold therapy wrap, digital veterinary thermometer, vet wrap / cohesive bandage, horse electrolytes)',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to use the horse grimace / pain-face checklist at home',
  description:
    'Score five facial action units on a calm, unprovoked horse to estimate whether the face shows pain-face features. A planning reference, not a diagnosis.',
  url: URL,
  steps: [
    {
      name: 'Observe calmly',
      text: 'Watch your horse when it is resting and unprovoked — not while being handled, working, or eating, which changes the face. Compare to this horse’s usual expression.',
    },
    {
      name: 'Score ear position',
      text: 'Usual relaxed or curious set scores 0; slightly stiffer or rotating back scores 1; stiffly backwards and tight at the base scores 2.',
    },
    {
      name: 'Score eye opening',
      text: 'Eyes fully open and soft score 0; partially closed or tense score 1; squinted or tightly closed score 2.',
    },
    {
      name: 'Score brow, chewing muscles / mouth, and nostrils',
      text: 'Rate tension above the eye, chewing-muscle / mouth / chin strain, and nostril / profile each from 0 (relaxed/usual) to 2 (creased/strained/square).',
    },
    {
      name: 'Total and act',
      text: 'Add the five scores (0–10). A higher total is a reason to contact an equine veterinarian. If the onset is sudden or the horse looks distressed, use the horse emergency triage tool — do not shop a comfort kit first. Never give leftover prescriptions or human painkillers.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function HorseGrimaceScalePage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(60, 100, 70, 0.5) 0%, transparent 60%)' }}
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
            Horse Grimace Scale
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Is your horse in pain? Horses hide it — but the face leaks it. Score
            five facial signs (ears, eyes, brow, chewing muscles / mouth,
            nostrils) on this owner Equine Grimace checklist. A planning /
            observation reference, not a diagnosis.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Horses.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Horse Grimace Scale</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the pain-check chart
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse pain-check checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the five-sign Equine Grimace checklist (ears, eyes, brow,
            chewing muscles / mouth, nostrils) and the observation recap so you
            can re-score later without re-reading the descriptors. Planning /
            observation reference only — not a diagnosis or emergency-triage
            substitute. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse pain-check checklist"
            subtitle="Email the five-sign horse pain-face checklist and observation recap. No spam."
            ctaText="Email my horse pain-check checklist"
            source="tools-horse-grimace-scale-under-hero"
          />
        </div>
      </section>

      {/* Calculator */}
      <section id="assessor" className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-brand-text-mid">
            Horses evolved to conceal pain, which is why owners so often miss it
            until a problem is advanced. Their faces, however, change in
            measurable ways when they hurt. Score the five facial action units
            below on a calm, unprovoked horse and the tool totals them on a 0–10
            planning scale. This is a planning / observation reference, not a
            diagnosis or an emergency-triage substitute. For life-stage
            context, use the{' '}
            <Link href="/tools/horse-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              horse age calculator
            </Link>
            . For weight, the{' '}
            <Link href="/tools/body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              Henneke body condition score
            </Link>{' '}
            is a wellness reference, not a diagnosis. For an equine sign-list
            urgency read (go now / same-day / monitor), use{' '}
            <Link href="/tools/is-this-a-horse-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              Is this a horse emergency?
            </Link>
            . Pair a tape weight with the{' '}
            <Link href="/tools/horse-weight-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              horse weight calculator
            </Link>
            .
          </p>
          <HorseGrimaceScale />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (observation / comfort kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis.
          High-pain outcomes should already have pushed ER triage above. */}
      <section id="horse-grimace-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a pain-watch observation kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are comfort and observation items
              for an equine pain-watch — an equine first-aid kit, a poultice,
              an ice boot / cold therapy wrap, a digital veterinary
              thermometer, vet wrap / cohesive bandage, and horse electrolytes.
              They are not a ranked product list, not invented inventory, not
              Rx pain medicine, and they do not diagnose pain or replace
              emergency triage. If the face looks like high pain, skip this kit
              and use{' '}
              <Link href="/tools/is-this-a-horse-emergency" className="text-brand-primary underline-offset-2 hover:underline">
                Is this a horse emergency?
              </Link>
              . For a stable, non-emergency question, start at telehealth.
              Horses.com earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+first+aid+kit?s=tools-horse-grimace-scale"
                amazonLabel="Browse equine first-aid kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/poultice?s=tools-horse-grimace-scale"
                amazonLabel="Browse poultices on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ice+boot+cold+therapy+wrap?s=tools-horse-grimace-scale"
                amazonLabel="Browse ice boots / cold therapy wraps on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+veterinary+thermometer?s=tools-horse-grimace-scale"
                amazonLabel="Browse digital veterinary thermometers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/vet+wrap+cohesive+bandage?s=tools-horse-grimace-scale"
                amazonLabel="Browse vet wrap / cohesive bandages on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+electrolytes?s=tools-horse-grimace-scale"
                amazonLabel="Browse horse electrolytes on Amazon →"
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
              Unexpected pain workups and emergency vet calls are one of the
              cost drivers equine insurance is built for. Comparing published
              coverage while a horse is young and healthy matters because
              pre-existing conditions are excluded. This is an educational
              comparison link, not a ranking of carriers. For a stable,
              non-emergency question about comfort or behavior, talk to a
              licensed vet on a screen rather than waiting for a gap to become
              an ER haul.
            </p>
            <AffiliateDisclosure variant="inline" siteId="horses-com" className="mb-3 text-2xs" />
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
            How the horse grimace / pain-face checklist works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This checklist scores five facial action units: ear position
            (stiffly backwards), orbital tightening (how squinted the eyes
            are), tension above the eye, chewing muscles / mouth / chin, and
            strained nostrils with a flattened profile. Each is scored 0
            (absent), 1 (moderate or uncertain), or 2 (obvious), for a total
            between 0 and 10. The structure is the horse twin of the{' '}
            <Link href="https://dog.com/tools/dog-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              dog grimace scale
            </Link>{' '}
            and the{' '}
            <Link href="https://vets.co/tools/cat-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              cat grimace scale
            </Link>
            . The descriptors are horse-specific and drawn from published
            equine pain-face features — the Horse Grimace Scale (Dalla Costa
            et al., 2014) and the equine pain face (Gleerup et al., 2015) —
            not a claim that an owner checklist has the same validated
            analgesia cut-off as the clinical HGS. The published HGS scores
            six units; this page groups chewing-muscle strain with the
            strained mouth / pronounced chin so the 0–10 planning bands stay
            comparable to the dog and cat twins.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            It works best on a horse that is resting rather than being handled,
            working, or eating, because stress, heat, and chewing change the
            face. Pair the score with the{' '}
            <Link href="/tools/horse-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              horse age calculator
            </Link>
            , the{' '}
            <Link href="/tools/body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              body condition score
            </Link>
            , the{' '}
            <Link href="/tools/horse-weight-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              weight calculator
            </Link>
            , and the{' '}
            <Link href="/tools/horse-cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cost calculator
            </Link>
            . Breeders projecting a foal&apos;s arrival can use the{' '}
            <Link href="/tools/horse-gestation-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              gestation calculator
            </Link>
            . For what to pack before you need it, see the{' '}
            <Link href="/ownership/first-aid-kit" className="text-brand-primary underline-offset-2 hover:underline">
              equine first-aid kit guide
            </Link>
            . For a stable, non-emergency question, start at{' '}
            <Link href="https://vets.co/telehealth" className="text-brand-primary underline-offset-2 hover:underline">
              telehealth
            </Link>
            . If a sign is in front of you right now, the{' '}
            <Link href="/tools/is-this-a-horse-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              horse emergency sign-list
            </Link>{' '}
            is a conservative urgency read — not a diagnosis.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            What a high score means
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A higher total on this planning checklist is a reason to call your
            equine veterinarian — not a wait-and-see, and never a leftover
            prescription or a human painkiller. This page never recommends a
            dose or a named pain medicine. Equine pain relief must be
            prescribed by a veterinarian. If the face looks like high pain and
            the onset is sudden, skip the observation kit and use{' '}
            <Link href="/tools/is-this-a-horse-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              Is this a horse emergency?
            </Link>
            .
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A low score is reassuring but not a clearance: because horses mask
            pain, and some pain is not facial, trust changes in appetite,
            manure, stance, and rest too. This page is a planning /
            observation reference, not a diagnosis or an emergency-triage
            substitute.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Sources
          </h2>
          <ul className="mb-8 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-text-mid">
            <li>
              Dalla Costa E, et al. “Development of the Horse Grimace Scale
              (HGS) as a tool to assess pain in horses undergoing routine
              castration.” <em>PLOS ONE</em>, 2014. Six facial action units
              scored 0–2; this owner page adapts those descriptors into a
              five-unit 0–10 planning checklist.
            </li>
            <li>
              Gleerup KB, Forkman B, Lindegaard C, Andersen PH. An equine pain
              face. <em>Veterinary Anaesthesia and Analgesia</em>, 2015.
              Low/asymmetric ears, angled eye with tension above the orbit,
              strained nostrils, and muzzle / chin tension inform the
              owner-facing language.
            </li>
            <li>
              American Association of Equine Practitioners — recognizing pain
              in horses; never give leftover prescriptions or human painkillers
              without an equine veterinarian.
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
              { label: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency', note: 'Conservative sign-list urgency read — use this first when pain looks sudden' },
              { label: 'Body Condition Score', href: '/tools/body-condition-score', note: 'Henneke 1–9 condition score' },
              { label: 'Horse Age Calculator', href: '/tools/horse-age-calculator', note: 'Human-year estimate and foal / young / adult / senior label' },
              { label: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', note: 'Girth × length weight-tape estimate' },
              { label: 'Horse Cost Calculator', href: '/tools/horse-cost-calculator', note: 'Monthly and annual keeping cost' },
              { label: 'Horse Gestation Calculator', href: '/tools/horse-gestation-calculator', note: 'Foaling date from breeding date' },
              { label: 'Equine First-Aid Kit', href: '/ownership/first-aid-kit', note: 'What to pack before you need it' },
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

      <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="footer" />
    </>
  )
}
