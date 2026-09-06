import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, CrossPortfolioCard, EmailCapture, FAQAccordion, ShopCtas } from '@carloOS/ui'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Health — Colic, Laminitis & Ulcers Reference | Horses.com',
  description:
    'Equine health references on colic, laminitis, gastric ulcers, lameness, endocrine, respiratory, and skin disease — grounded in AAEP and peer-reviewed medicine.',
  path: '/health',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Health', url: 'https://horses.com/health' },
  ],
})

const HEALTH_ENTRIES = [
  {
    slug: 'colic',
    eyebrow: 'Emergencies',
    title: 'Equine Colic',
    description:
      'Spasmodic, impaction, gas, displacement, strangulation, and sand colic. Clinical signs, when to call the vet, diagnostics, medical and surgical treatment, and prevention.',
  },
  {
    slug: 'laminitis',
    eyebrow: 'Emergencies',
    title: 'Equine Laminitis',
    description:
      'Endocrinopathic, sepsis-associated, and supporting-limb laminitis. Signs, Obel grading, diagnosis, acute treatment, and prevention.',
  },
  {
    slug: 'abscess',
    eyebrow: 'Emergencies',
    title: 'Hoof Abscess',
    description:
      'The most common cause of sudden severe lameness. How abscesses form, signs, drainage and soaking, and prevention.',
  },
  {
    slug: 'choke',
    eyebrow: 'Emergencies',
    title: 'Choke',
    description:
      'Esophageal (not airway) obstruction. Causes, signs, why it is an emergency, treatment, and feeding-management prevention.',
  },
  {
    slug: 'tying-up',
    eyebrow: 'Emergencies',
    title: 'Tying-Up',
    description:
      'Exertional rhabdomyolysis. Sporadic versus chronic forms (PSSM, RER), signs, why it is urgent, and dietary management.',
  },
  {
    slug: 'equine-ulcers',
    eyebrow: 'Gastroenterology',
    title: 'Equine Gastric Ulcers',
    description:
      'EGUS — squamous (ESGD) vs glandular (EGGD) disease, risk factors in performance horses, gastroscopy, omeprazole, and forage-first management.',
  },
  {
    slug: 'equine-metabolic-syndrome',
    eyebrow: 'Endocrine',
    title: 'Equine Metabolic Syndrome',
    description:
      'Insulin dysregulation, regional adiposity, and laminitis risk. Diagnosis, dietary management, and exercise.',
  },
  {
    slug: 'cushings-ppid',
    eyebrow: 'Endocrine',
    title: "Cushing's Disease (PPID)",
    description:
      'Pituitary pars intermedia dysfunction in older horses. Mechanism, signs, ACTH testing, pergolide, and laminitis risk.',
  },
  {
    slug: 'navicular-syndrome',
    eyebrow: 'Lameness',
    title: 'Navicular Syndrome',
    description:
      'Caudal heel pain. Anatomy of the podotrochlear apparatus, signs, nerve-block and MRI diagnosis, farriery, and management.',
  },
  {
    slug: 'osteoarthritis',
    eyebrow: 'Lameness',
    title: 'Osteoarthritis',
    description:
      'Degenerative joint disease. How cartilage breaks down, commonly affected joints, diagnosis, joint medication, and management.',
  },
  {
    slug: 'ringbone',
    eyebrow: 'Lameness',
    title: 'Ringbone',
    description:
      'Arthritis of the pastern (high) and coffin (low) joints, articular versus periarticular forms, signs, and management.',
  },
  {
    slug: 'lameness-basics',
    eyebrow: 'Lameness',
    title: 'Lameness Basics',
    description:
      'Spotting lameness, the AAEP 0-5 grading scale, common causes by location, the diagnostic workup, and when to call the vet.',
  },
  {
    slug: 'strangles',
    eyebrow: 'Infectious disease',
    title: 'Strangles',
    description:
      'Streptococcus equi infection. Signs, transmission, the guttural-pouch carrier state, biosecurity, and outbreak management.',
  },
  {
    slug: 'equine-influenza',
    eyebrow: 'Infectious disease',
    title: 'Equine Influenza',
    description:
      'A highly contagious respiratory virus. Signs, spread, the rest rule, vaccination, and biosecurity.',
  },
  {
    slug: 'west-nile-virus',
    eyebrow: 'Infectious disease',
    title: 'West Nile Virus',
    description:
      'A mosquito-borne neurologic disease. Signs, why horses are dead-end hosts, the core vaccine, and mosquito control.',
  },
  {
    slug: 'heaves',
    eyebrow: 'Respiratory',
    title: 'Heaves (Equine Asthma)',
    description:
      'Chronic allergic airway disease. Dust and mold triggers, signs, diagnosis, and environmental management.',
  },
  {
    slug: 'thrush',
    eyebrow: 'Skin & hoof',
    title: 'Thrush',
    description:
      'Bacterial degeneration of the frog. Causes, the telltale black discharge and odor, treatment, and hoof hygiene.',
  },
  {
    slug: 'rain-rot',
    eyebrow: 'Skin & hoof',
    title: 'Rain Rot',
    description:
      'Dermatophilosis. The bacterial skin infection behind crusty scabs, causes, treatment, and prevention.',
  },
  {
    slug: 'mud-fever',
    eyebrow: 'Skin & hoof',
    title: 'Mud Fever',
    description:
      'Pastern dermatitis (scratches). The wet-weather skin condition of the lower legs, causes, treatment, and prevention.',
  },
  {
    slug: 'sweet-itch',
    eyebrow: 'Skin & hoof',
    title: 'Sweet Itch',
    description:
      'Culicoides midge hypersensitivity. The cause of intense seasonal itching and a midge-control management plan.',
  },
]

// Emergency-triage reference. Grounded entirely in the linked spoke pages:
// colic (HR thresholds, withhold feed), laminitis (hours-to-days window),
// choke, tying-up, and abscess emergency framing.
const TRIAGE_ROWS = [
  {
    sign: 'Colic — abdominal pain (pawing, flank-watching, rolling, repeated lying down)',
    tier: 'Emergency',
    why: 'Early signs of mild and catastrophic colic look identical in the first hour; strangulating lesions have a narrow surgical window.',
    href: '/health/colic',
    condition: 'Colic',
  },
  {
    sign: 'Laminitis — reluctance to move, rocked-back stance, heat in the hooves, strong digital pulse',
    tier: 'Emergency',
    why: 'The window before irreversible laminar failure can be hours to days; outcome depends on rapid stabilization and removing the trigger.',
    href: '/health/laminitis',
    condition: 'Laminitis',
  },
  {
    sign: 'Choke — coughing, retching, feed and saliva at the nostrils, distress after eating',
    tier: 'Emergency',
    why: 'Esophageal (not airway) obstruction; risks aspiration pneumonia and esophageal damage the longer it persists.',
    href: '/health/choke',
    condition: 'Choke',
  },
  {
    sign: 'Tying-up — sudden stiffness, reluctance to move, firm painful hindquarters during or after work',
    tier: 'Urgent',
    why: 'Exertional rhabdomyolysis; continued work worsens muscle damage and can threaten the kidneys. Stop work and call the vet.',
    href: '/health/tying-up',
    condition: 'Tying-Up',
  },
  {
    sign: 'Sudden severe lameness, often non-weight-bearing, with no obvious wound',
    tier: 'Urgent',
    why: 'Hoof abscess is the most common cause; it mimics a fracture but is treatable with drainage. A vet or farrier should confirm.',
    href: '/health/abscess',
    condition: 'Hoof Abscess',
  },
  {
    sign: 'Persistent low-grade lameness, stiffness, or a shortened stride over days to weeks',
    tier: 'Schedule a vet visit',
    why: 'Chronic lameness (navicular, arthritis, ringbone) needs a structured workup, not watch-and-wait, to localize and grade.',
    href: '/health/lameness-basics',
    condition: 'Lameness',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Equine Health Reference Guides',
  numberOfItems: HEALTH_ENTRIES.length,
  itemListElement: HEALTH_ENTRIES.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.title,
    url: `https://horses.com/health/${e.slug}`,
  })),
}

const FAQS = [
  {
    question: 'What are the most common equine emergencies?',
    answer:
      'Colic (abdominal pain) is the single most common emergency presentation in equine practice and a leading cause of death in adult horses. Acute laminitis, choke (esophageal obstruction), and tying-up (exertional rhabdomyolysis) are the other conditions that most often require same-day veterinary attention. A sudden, severe, non-weight-bearing lameness is most commonly a hoof abscess but should be confirmed by a vet or farrier because it can mimic a fracture.',
    answerText:
      'Colic is the most common equine emergency and a leading cause of death in adult horses. Acute laminitis, choke, and tying-up are the other conditions that most often need same-day veterinary care. Sudden severe lameness is most often a hoof abscess but should be confirmed.',
  },
  {
    question: 'What heart rate is concerning in a horse?',
    answer:
      'A horse’s normal resting heart rate is roughly 28–44 beats per minute. During a colic episode, a sustained rate above 60 bpm is concerning and a rate above 80 bpm correlates with increased odds of surgical disease and lower survival. Knowing your own horse’s baseline resting heart rate makes it far easier to recognize when something is wrong. See the colic reference for how vital signs guide triage.',
    answerText:
      'A horse’s normal resting heart rate is about 28–44 bpm. During colic, a sustained rate above 60 bpm is concerning and above 80 bpm correlates with surgical disease and lower survival.',
  },
  {
    question: 'How common are gastric ulcers in horses?',
    answer:
      'Equine gastric ulcer syndrome (EGUS) is strongly tied to work intensity, restricted forage, and travel stress. Prevalence in actively training Thoroughbred racehorses approaches 80–90 percent, sport horses range from roughly 17–58 percent, and pastured horses on free-choice hay sit near 10 percent or lower. The pattern is consistent across studies: the harder the work and the more restricted the forage, the higher the risk. See the gastric ulcers reference for prevalence by discipline.',
    answerText:
      'Gastric ulcer prevalence approaches 80–90 percent in actively training Thoroughbred racehorses, 17–58 percent in sport horses, and around 10 percent or lower in pastured horses on free-choice forage. Work intensity and restricted forage are the strongest drivers.',
  },
  {
    question: 'What is the most reliable early-warning sign of a health problem?',
    answer:
      'Tracking body weight and body condition across the year is one of the most reliable early-warning signals for colic risk, ulcers, and metabolic conditions, because gradual changes are easy to miss day to day. Combine that with a documented baseline for resting heart rate, normal gut sounds, and typical manure output. Owners who can describe a horse’s baseline accurately give the veterinarian a substantial diagnostic advantage in any acute presentation.',
    answerText:
      'Tracking body weight and condition across the year is one of the most reliable early-warning signals for colic, ulcers, and metabolic disease. Pair it with a documented baseline for resting heart rate, gut sounds, and manure output.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })) })

const schema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

export default function HealthHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero — image-first masthead (photo behind the title band) */}
      <PremiumMasthead
        manifestKey="horses-com:category-health"
        eyebrow="Health Reference"
        title="Equine Health"
        subtitle="Evidence-based references on the equine health conditions owners and managers encounter most often, citing AAEP guidelines, peer-reviewed equine medicine, and veterinary clinical data."
      />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Health</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horse health-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse health-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-barn-emergency-triage-chart,
            stall-door-vital-signs-card, and
            equine-health-reference-handbook notes that
            match the when-to-call-the-vet,
            baseline-vital-signs, and AAEP-grounded copy
            on this hub — a laminated horse barn
            emergency-triage chart so the go-now /
            same-day / schedule table is posted at the
            barn (not a forage-first chart, not a
            treat-safety chart), a horse stall-door
            vital-signs card so each horse&apos;s resting
            heart rate, gut sounds, and manure baseline
            is labeled on the door (not a ration card,
            not a flu clipboard, not a farrier log), and
            an equine health reference handbook so the
            AAEP / peer-reviewed grounding is a physical
            barn book (not a nutrition handbook, not a
            toxic-plant field guide). Educational barn
            checklist, not a treatment, not a ranked
            product list, and not a substitute for a
            veterinarian. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse health-hub checklist"
            subtitle="Email the emergency-triage-chart, stall-door vital-signs-card, and health-handbook notes. No spam."
            ctaText="Email my horse health-hub checklist"
            source="health-hub-under-hero"
          />
        </div>
      </section>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          These pages are reference material — a supplement to, not a substitute for, qualified
          equine veterinary care. Contact your veterinarian immediately if your horse shows acute
          colic signs or rapid clinical deterioration.
          A laminated horse barn emergency-triage chart is how the when-to-call-the-vet table stays posted at the barn — it is not a laminated forage-first chart (that lives on the nutrition hub) and not a laminated treat-safety chart (that lives on the can-horses-eat hub).
          A horse stall-door vital-signs card is how each horse&apos;s baseline resting heart rate (normally about 28–44 bpm), gut sounds, and manure output is labeled on the door — it is not a stall-door ration card (that lives on the nutrition hub), not a weatherproof storage clipboard (that lives on equine influenza), and not an equine farrier log book (that lives on the farrier schedule).
          An equine health reference handbook is how the AAEP / peer-reviewed equine-medicine grounding sits in the barn — it is not an equine nutrition reference handbook or a toxic-plant identification field guide (those live on the nutrition hub and toxic-plants).
        </p>

        {/* Direct-answer / TL;DR block — extractable summary for search + AI surfaces */}
        <div className="max-w-3xl mb-12 rounded-xl border border-brand-border bg-brand-surface p-6 sm:p-8">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            The Short Version
          </div>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            Most equine deaths from disease are preventable or time-sensitive, which makes fast
            recognition the single most valuable skill an owner can build.{' '}
            <Link href="/health/colic" className="text-brand-primary no-underline hover:underline">Colic</Link>{' '}
            is the most common emergency presentation in equine practice and a leading cause of
            death in adult horses;{' '}
            <Link href="/health/laminitis" className="text-brand-primary no-underline hover:underline">acute laminitis</Link>,{' '}
            <Link href="/health/choke" className="text-brand-primary no-underline hover:underline">choke</Link>, and{' '}
            <Link href="/health/tying-up" className="text-brand-primary no-underline hover:underline">tying-up</Link>{' '}
            are the other conditions that most often demand same-day care. For each, the same rule
            applies: call the veterinarian at the first sign rather than waiting to see whether it
            resolves. Knowing a horse’s baseline — resting heart rate (normally about 28–44 bpm),
            normal gut sounds, and typical manure output — turns a panicked phone call into a useful
            triage conversation. The references below cover the conditions owners and managers meet
            most often, from emergencies to chronic lameness, endocrine, respiratory, and skin disease.
            For a conservative go-now / same-day / monitor read from the signs in front of you, use the{' '}
            <Link href="/tools/is-this-a-horse-emergency" className="text-brand-primary no-underline hover:underline">
              horse emergency sign-list
            </Link>
            {' '}— a triage aid, not a diagnosis.
          </p>
        </div>

        {/* Emergency-triage reference table */}
        <div className="max-w-4xl mb-14">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">
            When to Call the Vet — Triage Reference
          </h2>
          <p className="text-sm text-brand-text-light mb-5 max-w-2xl">
            A starting point for prioritizing, not a diagnosis. When in doubt, call — the cost of an
            unnecessary call is far lower than the cost of a missed emergency.
          </p>
          <div className="overflow-x-auto rounded-lg border border-brand-border">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-brand-surface">
                  <th className="py-3 px-4 font-bold text-brand-dark border-b border-brand-border">Sign you are seeing</th>
                  <th className="py-3 px-4 font-bold text-brand-dark border-b border-brand-border whitespace-nowrap">Urgency</th>
                  <th className="py-3 px-4 font-bold text-brand-dark border-b border-brand-border">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {TRIAGE_ROWS.map((row) => (
                  <tr key={row.href} className="align-top">
                    <td className="py-3 px-4 border-b border-brand-border text-brand-text-mid">
                      <Link href={row.href} className="text-brand-primary no-underline hover:underline font-medium">
                        {row.condition}
                      </Link>
                      <span className="block text-brand-text-mid mt-1">{row.sign}</span>
                    </td>
                    <td className="py-3 px-4 border-b border-brand-border whitespace-nowrap font-semibold text-brand-dark">
                      {row.tier}
                    </td>
                    <td className="py-3 px-4 border-b border-brand-border text-brand-text-mid leading-relaxed">
                      {row.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="font-display font-bold text-brand-dark text-2xl mb-6 max-w-4xl">
          All Health References
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0">
          {HEALTH_ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/health/${entry.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {entry.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {entry.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {entry.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm text-brand-text-light mt-8 max-w-2xl">
          Tracking weight changes across the year is the most reliable early-warning signal for
          colic risk, ulcers, and metabolic conditions. Score your horse with the{' '}
          <Link href="/tools/body-condition-score" className="text-brand-primary no-underline hover:underline">
            equine body-condition score tool
          </Link>{' '}
          (Henneke 1–9 scale, photo-anchored), check urgent signs on the{' '}
          <Link href="/tools/is-this-a-horse-emergency" className="text-brand-primary no-underline hover:underline">
            horse emergency sign-list
          </Link>
          , and review the{' '}
          <Link href="/nutrition/forage-basics" className="text-brand-primary no-underline hover:underline">
            forage-first feeding basics
          </Link>{' '}
          that underpin gut and metabolic health.
        </p>

        {/* FAQ — grounded entirely in linked spoke-page facts */}
        <div className="max-w-3xl mt-16">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} includeSchema={false} />
        </div>

        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mt-12 mb-4 max-w-content-wide">
          Health-hub barn kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          when-to-call-the-vet, baseline-vital-signs, and
          AAEP-grounded copy on this hub — a laminated
          horse barn emergency-triage chart so the
          go-now / same-day / schedule table is posted
          at the barn, a horse stall-door vital-signs
          card so each horse&apos;s resting heart rate,
          gut sounds, and manure baseline is labeled on
          the door, and an equine health reference
          handbook so the AAEP / peer-reviewed grounding
          is a physical barn book. These are educational
          barn searches, not a ranked product list, not
          a substitute for veterinary care, not a
          forage-first-chart / stall-door-ration-card /
          nutrition-handbook hop (those live on the
          nutrition hub), not a treat-safety-chart hop,
          and not a first-aid-kit / thermometer /
          stethoscope / weight-tape / BCS-chart hop
          (those live on the emergency tool, colic, and
          body-condition-score pages). This page does
          not hop medications or vaccines. This page
          does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn emergency-triage chart /
            horse stall-door vital-signs card /
            equine health reference handbook).
            Educational barn searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs #1124
            laminated+horse+barn+forage+first+chart /
            horse+stall+door+ration+card /
            equine+nutrition+reference+handbook, #1123
            laminated+horse+barn+treat+safety+chart /
            lidded+horse+barn+treat+tote /
            horse+barn+treat+prep+shears, #1109 EGUS
            email-only (no hops), emergency
            equine+first+aid+kit /
            digital+veterinary+thermometer, colic
            equine+digital+rectal+thermometer /
            large+animal+stethoscope, flu
            weatherproof+storage+clipboard, farrier
            equine+farrier+log+book, BCS
            horse+weight+tape /
            horse+body+condition+score+chart. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the health-hub barn kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page when-to-call-the-vet,
            baseline-vital-signs, and AAEP-grounded
            copy — a laminated horse barn
            emergency-triage chart, a horse stall-door
            vital-signs card, and an equine health
            reference handbook. Educational barn
            searches only. They are not a ranked
            product list, they are not a forage-first
            chart / ration-card / nutrition-handbook
            hop, they are not a first-aid-kit /
            thermometer / stethoscope hop, and they do
            not replace a veterinarian. Horses.com
            earns a commission on qualifying purchases
            at no extra cost to you. Empty Chewy
            buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+emergency+triage+chart?s=health-hub"
              amazonLabel="Browse laminated horse barn emergency-triage charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+vital+signs+card?s=health-hub"
              amazonLabel="Browse horse stall-door vital-signs cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+health+reference+handbook?s=health-hub"
              amazonLabel="Browse equine health reference handbooks on Amazon →"
            />
          </div>
        </div>
      </div>

      <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="footer" />
    </>
  )
}
