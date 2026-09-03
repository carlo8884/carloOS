import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  ArticleSourcesList,
  CrossPortfolioCard,
  EmailCapture,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import ToxicityMeter from './ToxicityMeter'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Chocolate Toxicity Calculator — Theobromine Meter | Dog.com',
  description:
    'Estimate your dog\'s theobromine exposure from chocolate by type, amount, and body weight. Educational tool — call your vet or poison control right now.',
  path: '/tools/dog-chocolate-toxicity-calculator',
})

const SOURCES = [
  { label: 'Merck Veterinary Manual: Chocolate Toxicosis in Animals', url: 'https://www.merckvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals', publisher: 'Merck Vet Manual' },
  { label: 'VCA Animal Hospitals: Chocolate Poisoning in Dogs', url: 'https://vcahospitals.com/know-your-pet/chocolate-poisoning-in-dogs', publisher: 'VCA' },
  { label: 'ASPCA Animal Poison Control Center: People Foods to Avoid Feeding Your Pets', url: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets', publisher: 'ASPCA' },
  { label: 'Pet Poison Helpline: Chocolate Toxicity in Dogs', url: 'https://www.petpoisonhelpline.com/poison/chocolate/', publisher: 'Pet Poison Helpline' },
]

const FAQS = [
  {
    question: 'How much chocolate is toxic to dogs?',
    answer:
      'There is no truly safe amount, but veterinary references describe dose bands based on theobromine — the stimulant in cocoa that dogs metabolise slowly. Signs are commonly reported starting around 20 mg of theobromine per kilogram of body weight; cardiac signs become possible around 40–60 mg/kg; and severe signs including seizures are described above roughly 60 mg/kg. Because theobromine concentration differs enormously by chocolate type, a small amount of baking chocolate or cocoa powder can be far more dangerous than a much larger amount of milk chocolate. The honest answer is that any ingestion warrants a call to your veterinarian or a poison-control hotline, who can weigh the exact product, amount, and your dog against these thresholds.',
    answerText:
      'No amount is truly safe. Theobromine signs are commonly reported from ~20 mg/kg; cardiac signs ~40–60 mg/kg; severe signs/seizures above ~60 mg/kg. Dark, baking chocolate, and cocoa powder are far more concentrated than milk chocolate. Call your vet or poison control for any ingestion.',
  },
  {
    question: 'My dog ate chocolate but seems fine — should I still call?',
    answer:
      'Yes. Call your veterinarian or a poison-control hotline right now, even if your dog looks normal. Signs of chocolate toxicosis can take 6 to 12 hours to appear, and for many toxins treatment is most effective before symptoms start. A normal-looking dog is not a reason to wait. This tool can help you give the vet a useful exposure estimate, but it does not replace that call and it never tells you to wait and see.',
    answerText:
      'Yes — call right now even if your dog looks normal. Signs can take 6–12 hours to appear and treatment is often most effective before symptoms start. Never wait and see.',
  },
  {
    question: 'Which chocolate is most dangerous for dogs?',
    answer:
      'Danger tracks theobromine concentration. Dry cocoa powder is the most concentrated common form, followed by unsweetened baking chocolate, then dark and semisweet chocolate, then milk chocolate. White chocolate contains almost no theobromine, but its fat and sugar can still cause vomiting, diarrhoea, or pancreatitis, so it is not harmless. This is why type matters as much as amount: a square of baking chocolate can deliver more theobromine than several milk-chocolate bars.',
    answerText:
      'By theobromine concentration: cocoa powder > baking chocolate > dark/semisweet > milk chocolate. White chocolate has negligible theobromine but its fat/sugar can still cause GI upset or pancreatitis.',
  },
  {
    question: 'How is the theobromine dose calculated?',
    answer:
      'The estimate multiplies the amount eaten by the average theobromine concentration for that chocolate type (in milligrams per ounce, from published veterinary toxicology references), then divides by the dog\'s body weight in kilograms to give a dose in milligrams per kilogram. That mg/kg figure is what veterinary references use to describe risk. The calculation uses average concentrations — real products vary by cocoa percentage and recipe, and caffeine in chocolate adds to the toxic load — so the result is an estimate to share with a professional, not a diagnosis.',
    answerText:
      'Dose (mg/kg) = amount eaten × average theobromine per ounce for that type ÷ body weight in kg. It uses average concentrations and excludes caffeine, so it is an estimate to give your vet, not a diagnosis.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Chocolate Toxicity Calculator', url: 'https://dog.com/tools/dog-chocolate-toxicity-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Chocolate Toxicity Calculator',
  description:
    'Free educational tool that estimates a dog\'s theobromine exposure from chocolate by type, amount, and body weight, mapped to standard veterinary-toxicology dose bands. Not a diagnosis — call your vet or poison control.',
  url: 'https://dog.com/tools/dog-chocolate-toxicity-calculator',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Dog Chocolate Toxicity Calculator — Theobromine Exposure Estimator',
  description:
    'An educational estimator of canine theobromine exposure from chocolate, mapped to standard veterinary-toxicology dose bands. Not a diagnosis; directs owners to call a veterinarian or poison-control hotline immediately.',
  url: 'https://dog.com/tools/dog-chocolate-toxicity-calculator',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-06-11',
  medicalAudience: 'Caregiver',
})

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Chocolate Toxicity Calculator — Theobromine Meter',
  description:
    'How to estimate a dog\'s theobromine exposure from chocolate, with a theobromine-by-type reference table and standard veterinary dose bands.',
  url: 'https://dog.com/tools/dog-chocolate-toxicity-calculator',
  imageUrl: 'https://dog.com/og/tools.png',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-09-03',

  citation: SOURCES,
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate theobromine exposure from chocolate ingestion',
  description: 'Calculate an approximate theobromine dose in mg/kg from chocolate type, amount eaten, and dog body weight to share with a veterinarian or poison control.',
  url: 'https://dog.com/tools/dog-chocolate-toxicity-calculator',
  steps: [
    {
      name: 'Call your veterinarian or poison control first',
      text: 'Before using the calculator, call your veterinarian or ASPCA Animal Poison Control (888-426-4435). Do not wait for symptoms — treatment is most effective before signs appear.',
    },
    {
      name: 'Select the chocolate type',
      text: 'Choose the type of chocolate your dog ate: white, milk, semisweet/dark chips, dark, unsweetened baking chocolate, or dry cocoa powder. Type matters because theobromine concentration varies from ~0.25 mg/oz (white) to ~737 mg/oz (dry cocoa powder).',
    },
    {
      name: 'Enter the amount eaten and your dog\'s weight',
      text: 'Enter the approximate amount of chocolate ingested (in ounces or grams) and your dog\'s body weight. The calculator multiplies amount × average theobromine per ounce, then divides by body weight in kg to give a dose in mg/kg.',
    },
    {
      name: 'Share the mg/kg estimate with your vet or poison control',
      text: 'Read the mg/kg estimate and the dose-band it falls into (no concern / mild signs possible / cardiac signs possible / severe signs possible), and relay this number to the professional you called in step 1.',
    },
  ],
})

// Exactly ONE BreadcrumbList across the page.
const schema = combineSchemas(breadcrumbSchema, appSchema, medicalSchema, articleSchema, howToSchema)

const ASPCA = '888-426-4435'
const PPH = '855-764-7661'

export default function DogChocolateToxicityCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-10 sm:py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(200, 74, 42, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Emergency Reference Tool
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
          >
            Dog Chocolate Toxicity Calculator
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl">
            My dog ate chocolate — how much is dangerous? Estimate the theobromine exposure by chocolate
            type, amount, and your dog&apos;s weight so you can give your vet useful numbers. This is an
            educational estimate, not a diagnosis, and it never tells you to wait and see.
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
        <span className="text-brand-text-mid font-medium">Chocolate Toxicity</span>
      </nav>

      {/* PERSISTENT TOP CALL-NOW BANNER — above everything, on page load */}
      <section className="px-container-sm sm:px-container pt-section">
        <div className="max-w-5xl">
          <div
            role="alert"
            className="rounded-xl p-5 sm:p-6"
            style={{ background: 'rgba(200,74,42,0.07)', border: '2px solid rgba(200,74,42,0.45)' }}
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2" style={{ color: '#C84A2A' }}>
              If your dog ate chocolate, call now
            </div>
            <p className="text-sm sm:text-base text-brand-dark leading-relaxed m-0">
              <strong>Call your veterinarian or the ASPCA Animal Poison Control Center ({ASPCA}) or the
              Pet Poison Helpline ({PPH}) right now.</strong> This estimate is educational and does not
              replace professional advice. Do not wait for symptoms — for many toxins, treatment works
              best before signs appear.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/tools/is-this-a-dog-emergency"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Is this a dog emergency? →
              </Link>
              <Link
                href="/find-a-vet"
                className="inline-flex items-center border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Find an emergency vet →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Chocolate-safety checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the chocolate-safety checklist — poison-control numbers, what to tell the
            vet, and a shoppable safety kit (first-aid, emergency kit, crate for quiet rest).
            Nothing on the list treats chocolate poisoning. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Chocolate-safety checklist"
            subtitle="Email the chocolate-safety checklist — poison-control numbers, what to tell the vet, and the safety kit. No spam."
            ctaText="Email my chocolate-safety checklist"
            source="tools-chocolate-toxicity-under-hero"
          />
        </div>
      </section>

      {/* GEO: extractable answer + theobromine table, ABOVE the tool */}
      <section className="px-container-sm sm:px-container pt-section">
        <div className="max-w-3xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5 sm:p-6 mb-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              The short answer
            </div>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              Chocolate is toxic to dogs because of <span className="font-semibold text-brand-dark">theobromine</span>,
              a stimulant dogs clear slowly. Veterinary references describe risk by dose in milligrams of
              theobromine per kilogram of body weight:
            </p>
            <ul className="list-disc pl-5 text-base text-brand-text-mid leading-relaxed mb-3 grid gap-1">
              <li><span className="font-semibold text-brand-dark">~20 mg/kg</span> — GI signs (vomiting, diarrhoea) commonly reported</li>
              <li><span className="font-semibold text-brand-dark">~40–60 mg/kg</span> — cardiac signs become possible</li>
              <li><span className="font-semibold text-brand-dark">over ~60 mg/kg</span> — severe signs including tremors and seizures described</li>
            </ul>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              <span className="font-semibold text-brand-dark">Worked example.</span> A 10 lb (4.5 kg) dog
              that eats 1 oz of unsweetened baking chocolate (~390 mg theobromine/oz) takes in about{' '}
              <span className="font-semibold text-brand-dark">86 mg/kg</span> — a severe-range exposure.
              The same dog eating 1 oz of milk chocolate (~58 mg/oz) takes in about 13 mg/kg. Type
              matters as much as amount.
            </p>
            <p className="text-sm text-brand-text-light leading-relaxed m-0">
              These are general veterinary-toxicology ranges, not a safe limit and not a diagnosis. For any
              ingestion, call your vet or a poison-control line.
            </p>
          </div>

          {/* Theobromine-by-type reference table — citation magnet */}
          <h2 className="mb-3 font-display text-xl font-semibold text-brand-text-dark">
            Theobromine content by chocolate type
          </h2>
          <div className="overflow-x-auto rounded-lg border border-brand-border">
            <table className="w-full text-sm border-collapse bg-brand-white">
              <thead>
                <tr className="bg-brand-surface text-left">
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Chocolate type</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Theobromine (mg/oz)</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Theobromine (mg/g)</th>
                </tr>
              </thead>
              <tbody className="text-brand-text-mid">
                {[
                  ['White chocolate', '~0.25', '~0.01'],
                  ['Milk chocolate', '~58', '~2.0'],
                  ['Semisweet / dark chips', '~150', '~5.3'],
                  ['Dark chocolate (high cocoa)', '~228', '~8.0'],
                  ['Unsweetened baking chocolate', '~390', '~13.8'],
                  ['Dry cocoa powder', '~737', '~26.0'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-brand-border last:border-0">
                    <td className="p-3 font-medium text-brand-dark">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-2xs text-brand-text-light">
            Approximate average concentrations from published veterinary toxicology references (Merck Vet
            Manual, VCA, ASPCA APCC). Real products vary by cocoa percentage; caffeine adds to the toxic load.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="px-container-sm sm:px-container py-section">
        <div className="max-w-4xl">
          <ToxicityMeter />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (safety kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          These hops do not treat or reverse chocolate poisoning. */}
      <section id="chocolate-safety-kit" className="px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a chocolate-safety kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              After you have called your veterinarian or a poison-control hotline, these
              Amazon category searches are cabinet and car items — a pet first-aid kit, a
              pet emergency kit, a crate for quiet rest, and (vet-directed only) activated
              charcoal or 3% hydrogen peroxide. They are not a ranked product list, not
              invented inventory, and they do not treat or reverse chocolate poisoning.
              Give charcoal or peroxide only if a veterinarian or poison-control specialist
              tells you to. Dog.com earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/activated+charcoal+pet?s=tools-chocolate-toxicity"
                amazonLabel="Browse activated charcoal for pets on Amazon (vet-directed) →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/hydrogen+peroxide+3+percent+first+aid?s=tools-chocolate-toxicity"
                amazonLabel="Browse 3% hydrogen peroxide first aid on Amazon (vet-directed) →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+first+aid+kit+dog?s=tools-chocolate-toxicity"
                amazonLabel="Browse pet first-aid kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+emergency+kit+dog+toxin?s=tools-chocolate-toxicity"
                amazonLabel="Browse pet emergency / toxin kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+crate+for+recovery?s=tools-chocolate-toxicity"
                amazonLabel="Browse recovery crates on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology + FAQ + sources */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            How this estimate works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The meter multiplies the amount eaten by the average theobromine concentration for the
            selected chocolate type, then divides by your dog&apos;s body weight in kilograms to give a
            dose in milligrams per kilogram. That mg/kg figure is mapped to the standard veterinary
            dose bands above. It is built only to help you hand a vet or poison-control line a useful
            number — it uses average concentrations, ignores the additional caffeine load, and cannot
            account for your individual dog, so it is an estimate and not a diagnosis. It will never tell
            you to wait and see.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            If your dog ate something else, or is showing any worrying signs, use the{' '}
            <Link href="/tools/is-this-a-dog-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              is this a dog emergency triage tool
            </Link>{' '}
            and read the{' '}
            <Link href="/health/dog-symptoms-guide" className="text-brand-primary underline-offset-2 hover:underline">
              dog symptoms you should never ignore
            </Link>{' '}
            guide. For the broader list of foods that are dangerous to dogs, see the{' '}
            <Link href="/nutrition/toxic-foods" className="text-brand-primary underline-offset-2 hover:underline">
              toxic foods guide
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-8">
            <ArticleSourcesList sources={SOURCES} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Is This a Dog Emergency?', href: '/tools/is-this-a-dog-emergency', note: 'Conservative symptom triage' },
              { label: 'Dog Symptoms You Should Never Ignore', href: '/health/dog-symptoms-guide', note: 'When to seek care urgently' },
              { label: 'Toxic Foods for Dogs', href: '/nutrition/toxic-foods', note: 'The full dangerous-foods list' },
              { label: 'Find an Emergency Vet', href: '/find-a-vet', note: 'Locate 24/7 care near you' },
              { label: 'Dog Vomiting Guide', href: '/health/dog-vomiting', note: 'When vomiting needs a vet' },
              { label: 'Dog Health Hub', href: '/health', note: 'All conditions and symptoms A–Z' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
              >
                <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                <div className="text-xs text-brand-text-light">{item.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calm secondary resource — placed well below the poison-control banner */}
      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}
