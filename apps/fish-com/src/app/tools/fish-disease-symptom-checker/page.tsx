import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  ArticleByline,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://fish.com/tools/fish-disease-symptom-checker'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Fish Disease Symptom Checker — Why Is My Fish Sick? | Fish.com',
  description:
    'Why is your fish sick? Tick the signs you see to find the diseases that match — ich, velvet, fin rot, dropsy and more — each linked to a treatment guide.',
  path: '/tools/fish-disease-symptom-checker',
})

const howToSchema = buildHowToSchema({
  name: 'How to work out what is wrong with your fish',
  description:
    'Use observable signs to narrow down likely aquarium fish diseases, after ruling out water quality.',
  url: URL,
  steps: [
    { name: 'Test the water first', text: 'Check ammonia, nitrite, nitrate, and pH — poor water quality causes or mimics most fish illness and must be ruled out before treating for disease.' },
    { name: 'Tick the signs you see', text: 'Select the visible signs — spots, fin damage, gasping, buoyancy problems, growths, and behaviour changes.' },
    { name: 'Review the matching conditions', text: 'The tool ranks conditions by how many of your signs match and links to a full guide for each.' },
    { name: 'Confirm, quarantine, then treat', text: 'Read the linked guide to confirm, isolate affected fish where possible, and follow the medicating guide before dosing any treatment.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fish Disease Symptom Checker',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free aquarium fish disease symptom checker. Select the signs you observe and the tool ranks likely conditions (ich, velvet, fin rot, columnaris, dropsy, pop-eye, swim bladder, flukes, parasites, bacterial infection) by symptom match, each linked to a treatment guide. Leads with water-quality testing.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  featureList: [
    'Tick observable signs; conditions ranked by how many match',
    'Covers 10 common freshwater fish diseases',
    'Links each result to a full Fish.com treatment guide',
    'Leads with water-quality testing — the cause of most fish illness',
  ],
  publisher: { '@type': 'Organization', name: 'Fish.com Editorial', url: 'https://fish.com' },
}

const FAQS = [
  {
    question: 'Why is my fish sick or acting strangely?',
    answer:
      'In a home aquarium the most common cause by far is water quality, not infection. Ammonia and nitrite (invisible, and high in new or overstocked tanks) and nitrate build-up stress fish and produce many of the same signs as disease — gasping, clamped fins, lethargy, and sudden deaths. Always test the water first; if the parameters are off, fixing them is the treatment. If the water is good, the symptom checker helps narrow down a disease.',
  },
  {
    question: 'What are the most common aquarium fish diseases?',
    answer:
      'Ich (white spot) is the most common, followed by velvet, fin rot, and columnaris. Dropsy and pop-eye are signs of deeper internal or bacterial problems rather than single diseases, swim bladder disorder affects buoyancy (often in fancy goldfish and bettas), and external parasites like gill flukes, fish lice, and anchor worm are also frequent. Each has its own guide on Fish.com.',
  },
  {
    question: 'My fish is gasping at the surface — what does it mean?',
    answer:
      'Gasping usually points to low dissolved oxygen or high ammonia (both water-quality issues) before it points to disease, so test the water and add surface agitation immediately. If the water is clean, gill parasites such as flukes or velvet are the next most likely causes, since they damage the gills. Persistent gasping in a fish is urgent.',
  },
  {
    question: 'How do I treat a sick fish?',
    answer:
      'Identify the problem as precisely as you can, isolate affected fish in a quarantine tank where possible, correct any water-quality issue with a water change, and only then use a targeted treatment — using the wrong medication wastes time and stresses fish further. Follow the dosing and water-change instructions in the medicating guide, and never mix medications without checking compatibility.',
  },
  {
    question: 'Is this checker a diagnosis?',
    answer:
      'No. It is an educational aid that narrows the possibilities from the signs you tick — many fish diseases share symptoms, so it cannot confirm a diagnosis. Use it as a starting point, read the linked guide, rule out water quality, and when in doubt seek advice from an aquatic vet or an experienced fishkeeping community.',
  },
]

export default function FishDiseaseSymptomCheckerPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Fish Disease Symptom Checker',
        subtitle:
          'Why is your fish sick? Tick the signs you can see and the checker ranks the conditions that fit — ich, velvet, fin rot, dropsy and more — each linked to a treatment guide. It starts where most fish problems really start: your water.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Fish Disease Symptom Checker' },
      ]}
      schema={howToSchema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Tools' },
        { title: 'Disease Reference Library', href: '/health', category: 'Health' },
        { title: 'Fish Disease Guide', href: '/health/fish-disease-guide', category: 'Health' },
        { title: 'Medicating Aquarium Fish', href: '/health/medicating-aquarium-fish', category: 'Health' },
        { title: 'New Tank Syndrome', href: '/health/new-tank-syndrome', category: 'Health' },
        { title: 'Best Water Test Kits', href: '/reviews/best-water-test-kits', category: 'Reviews' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The checker', href: '#checker' },
              { label: 'Shop an illness kit', href: '#shop' },
              { label: 'Water quality comes first', href: '#water' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Disease & treatment"
            links={[
              { label: 'Disease Reference Library', href: '/health' },
              { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' },
              { label: 'Medicating Aquarium Fish', href: '/health/medicating-aquarium-fish' },
              { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' },
              { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' },
              { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
            ]}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-14T00:00:00Z" updatedAt="2026-09-03T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Fish illness checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the fish illness checklist — water-test first, quarantine steps, and what to
            gather before you medicate — so you can work the signs without re-running the
            checker. Educational triage, not a diagnosis. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Fish illness checklist"
            subtitle="Email the fish illness checklist — water-test first, quarantine, and what to gather before you medicate. No spam."
            ctaText="Email my fish illness checklist"
            source="tools-fish-disease-symptom-under-hero"
          />
        </div>

        <h2 id="checker">The checker</h2>
        <p>
          Tick the signs you can see on your fish. The tool ranks the conditions that fit and links each to a full
          guide. It is an educational aid that narrows the possibilities — not a diagnosis — because many fish
          diseases share the same outward signs. To browse every condition directly, see the full{' '}
          <a href="/health">aquarium disease reference library</a>.
        </p>
        <Calculator />

        {/* Money path — live amazon-brand search hops (test kit / ich / salt / conditioner / quarantine).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div id="shop" className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop an illness kit
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            A liquid multi-test kit rules out ammonia, nitrite, and nitrate before you treat; then
            isolate if you can and use a targeted product from the linked guide. Same Amazon hops
            used on the{' '}
            <Link
              href="/reviews/best-water-test-kits"
              className="text-brand-primary no-underline hover:underline"
            >
              water-test kit review
            </Link>
            , the{' '}
            <Link
              href="/health/ich-treatment"
              className="text-brand-primary no-underline hover:underline"
            >
              ich treatment guide
            </Link>
            , and the{' '}
            <Link
              href="/setup/quarantine-tank-guide"
              className="text-brand-primary no-underline hover:underline"
            >
              quarantine tank guide
            </Link>
            . Fish.com earns a commission on qualifying purchases at no extra cost to you. This is
            educational triage, not a diagnosis.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=tools-fish-disease-symptom"
              amazonLabel="Shop aquarium multi-test kits on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/ich+white+spot+treatment+aquarium?s=tools-fish-disease-symptom"
              amazonLabel="Shop ich / white-spot treatment on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+salt+disease+treatment?s=tools-fish-disease-symptom"
              amazonLabel="Shop aquarium salt / disease treatment on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/seachem+prime+water+conditioner?s=tools-fish-disease-symptom"
              amazonLabel="Shop water conditioner / dechlorinator on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=tools-fish-disease-symptom"
              amazonLabel="Shop quarantine hospital tanks and nets on Amazon →"
            />
          </div>
        </div>

        <h2 id="water">Water quality comes first</h2>
        <p>
          The most important habit in fishkeeping is to suspect the water before the fish. Invisible ammonia and
          nitrite in a new, overstocked, or under-filtered tank stress fish and produce gasping, clamped fins,
          lethargy, and unexplained deaths that look exactly like disease. Test ammonia, nitrite, nitrate, and pH with
          a <a href="/reviews/best-water-test-kits">liquid kit</a> first; if the numbers are off, a water change and
          fixing the cause is the treatment. Only once the water is clean does reaching for medication make sense — and
          the <a href="/health/medicating-aquarium-fish">medicating guide</a> covers how to do that safely.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />
      </div>
    </ArticleLayout>
  )
}
