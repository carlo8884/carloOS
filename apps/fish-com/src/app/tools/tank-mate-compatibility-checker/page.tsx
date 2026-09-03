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
  ArticleSourcesList,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import Checker from './Checker'

const URL = 'https://fish.com/tools/tank-mate-compatibility-checker'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Tank Mate Compatibility Checker | Fish.com',
  description:
    'Pick two or more freshwater fish and get a Compatible / Caution / Not-recommended verdict per pair, with the reason: temperament, temperature, fin-nipping.',
  path: '/tools/tank-mate-compatibility-checker',
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aquarium Tank Mate Compatibility Checker',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'AquariumCompatibilityChecker',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive freshwater aquarium tank mate compatibility checker. Select two or more common species and get a Compatible, Caution, or Not-recommended verdict for every pairing, with a short reason based on temperament, temperature range, fin-nipping risk, adult size, and water hardness.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Per-pair Compatible / Caution / Not-recommended verdicts',
    'Short plain-English reason for each verdict',
    'Covers 20 common freshwater species the site profiles',
    'Flags coldwater/tropical clashes, fin-nipping, predation, and aggression',
    'Links to full species care profiles and the stocking calculator',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fish.com Editorial',
    url: 'https://fish.com',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aquarium Tank Mate Compatibility Checker',
  description:
    'How aquarium tank mate compatibility is judged — temperament, temperature overlap, fin-nipping, adult size and predation, and water hardness — plus an interactive checker for common freshwater species.',
  url: URL,
  datePublished: '2026-06-11T00:00:00Z',
  dateModified: '2026-09-03T00:00:00Z',
  author: { '@type': 'Organization', name: 'Fish.com Editorial' },
  publisher: { '@type': 'Organization', name: 'Fish.com', url: 'https://fish.com' },
  mainEntityOfPage: URL,
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fish.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://fish.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Tank Mate Compatibility Checker', item: URL },
  ],
}

const howToSchema = buildHowToSchema({
  name: 'How to check freshwater fish tank mate compatibility',
  description: 'Use the compatibility checker to get a Compatible, Caution, or Not-recommended verdict for each species pairing based on temperament, temperature, fin-nipping, size, and water hardness.',
  url: URL,
  steps: [
    {
      name: 'Select two or more fish species',
      text: 'Choose the freshwater fish you are considering for your aquarium from the species list. The checker covers 20 common species.',
    },
    {
      name: 'Review the per-pair verdict',
      text: 'For every pairing you selected, the checker returns Compatible, Caution, or Not-recommended, with a short plain-English reason based on temperament, temperature range overlap, fin-nipping risk, adult size and predation, and water hardness.',
    },
    {
      name: 'Treat Caution pairings as tank-size dependent',
      text: 'A Caution verdict means the pairing can work under the right conditions — typically a larger, well-planted tank that gives fish space to establish territories or escape harassment. Follow the species profile links for the specific care context.',
    },
    {
      name: 'Plan your stocking numbers',
      text: 'After checking compatibility, use the Stocking Calculator to verify the total bioload for your tank size, and confirm school sizes for schooling species.',
    },
  ],
})

const FAQS = [
  {
    question: 'What fish can live with bettas?',
    answer:
      'Peaceful, short-finned, non-nipping fish that share the betta’s warm tropical range (76–82°F) are the safest tank mates: corydoras, kuhli loaches, ember and neon tetras, harlequin rasboras, and otocinclus, plus snails and (with adult shrimp) cherry shrimp. Avoid fin-nippers like tiger barbs and zebra danios, and never keep two male bettas together. Success still depends on the betta’s individual temperament and a tank of at least 10 gallons.',
  },
  {
    question: 'Can goldfish live with tropical fish?',
    answer:
      'Generally no. Goldfish are coldwater fish that do best around 60–74°F, while most tropical community fish need 76–80°F. Keeping them together forces one species to live outside its comfortable range year-round, which stresses the fish and shortens their lives. Goldfish also grow large and will eat fish small enough to fit in their mouths. Keep goldfish in a dedicated coldwater setup.',
  },
  {
    question: 'Are tiger barbs aggressive?',
    answer:
      'Tiger barbs are not predators, but they are notorious fin-nippers, especially in small groups. They will harass slow, long-finned fish like bettas, angelfish, and fancy guppies. Keeping them in a larger group of 8 or more spreads the nipping behavior within their own school and reduces — but does not eliminate — the risk to long-finned tank mates.',
  },
  {
    question: 'Why are African cichlids hard to find tank mates for?',
    answer:
      'African cichlids are aggressive, territorial, and prefer hard, alkaline water — a combination that conflicts with most soft-water community fish. They are typically kept in species-specific or all-cichlid setups built around their aggression and water chemistry rather than mixed into a peaceful community tank.',
  },
  {
    question: 'Does tank size change whether two fish are compatible?',
    answer:
      'Often, yes. Many “Caution” pairings come down to space. A larger, well-decorated tank lets fish establish separate territories, lets fin-nippers spread their behavior within a bigger school, and gives a harassed fish room to escape. This tool gives conservative general guidance; a borderline pairing that fails in a 10-gallon tank may work in a heavily planted 55-gallon.',
  },
]

export default function TankMateCompatibilityPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Tank Mate Compatibility Checker',
        subtitle:
          'Pick two or more freshwater fish and get a clear verdict for every pairing — Compatible, Caution, or Not recommended — with the reason behind it.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Tank Mate Compatibility Checker' },
      ]}
      schema={breadcrumbSchema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Tools' },
        { title: 'Stocking Calculator', href: '/tools/stocking-calculator', category: 'Tools' },
        { title: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates', category: 'Species' },
        { title: 'Species Hub', href: '/species', category: 'Species' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The checker', href: '#checker' },
              { label: 'Shop a pairing kit', href: '#shop' },
              { label: 'Quick answer', href: '#answer' },
              { label: 'Common pairings', href: '#pairings' },
              { label: 'How compatibility is judged', href: '#methodology' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Plan the community"
            links={[
              { label: 'Stocking Calculator', href: '/tools/stocking-calculator' },
              { label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' },
              { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' },
              { label: 'All Species Profiles', href: '/species' },
              { label: 'Aquarium Setup Guide', href: '/setup' },
              { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
            ]}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <ArticleByline
          siteName="Fish.com Editorial"
          publishedAt="2026-06-11T00:00:00Z"
          updatedAt="2026-09-03T00:00:00Z"
          reviewedBy="Editorial team"
        />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Tank-mate pairing checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the tank-mate checklist — temperament, temperature overlap, fin-nipping,
            and when to use a divider or quarantine tank — so you can plan a mix without
            re-running the checker. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Tank-mate pairing checklist"
            subtitle="Email the tank-mate checklist — pairing tips, divider vs quarantine, and what to test before adding mates. No spam."
            ctaText="Email my tank-mate checklist"
            source="tools-tank-mate-compatibility-under-hero"
          />
        </div>

        <h2 id="answer">The Quick Answer</h2>
        <p>
          Two freshwater fish are usually compatible when they share a temperature range, have similar temperament, and
          neither is big enough to eat the other or prone to nipping the other&apos;s fins. The most common
          deal-breakers are: a <strong>coldwater fish (goldfish) mixed with tropical fish</strong>, an{' '}
          <strong>aggressive species (oscar, African cichlid) with peaceful community fish</strong>, a{' '}
          <strong>fin-nipper (tiger barb, zebra danio) with long-finned fish (betta, angelfish, fancy guppy)</strong>,
          and a <strong>large predator with bite-sized tank mates</strong>. Use the checker below for a specific
          pairing, and treat &quot;Caution&quot; as &quot;depends on tank size and individual temperament.&quot;
        </p>

        <h2 id="checker">The Checker</h2>
        <Checker />

        {/* Money path — live amazon-brand search hops (divider / quarantine / caves / food / test kit / net).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div id="shop" className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop a pairing kit
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            Test the water before you add a new fish. If a pairing lands on Caution or Not
            recommended, a tank divider or a small quarantine tank lets you separate fish
            without tearing the display down; caves and hiding spots cut aggression in a
            mix that can work. Same Amazon hops used with the{' '}
            <Link
              href="/setup/quarantine-tank-guide"
              className="text-brand-primary no-underline hover:underline"
            >
              quarantine tank guide
            </Link>
            , the{' '}
            <Link
              href="/species/betta-fish-tank-mates"
              className="text-brand-primary no-underline hover:underline"
            >
              betta tank-mates guide
            </Link>
            , and the{' '}
            <Link
              href="/reviews/best-water-test-kits"
              className="text-brand-primary no-underline hover:underline"
            >
              water-test kit review
            </Link>
            . Fish.com earns a commission on qualifying purchases at no extra cost to you.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+tank+divider?s=tools-tank-mate-compatibility"
              amazonLabel="Shop aquarium tank dividers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank?s=tools-tank-mate-compatibility"
              amazonLabel="Shop quarantine / hospital tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+decorations+caves+hiding+spots?s=tools-tank-mate-compatibility"
              amazonLabel="Shop caves and hiding spots on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/tropical+community+fish+food?s=tools-tank-mate-compatibility"
              amazonLabel="Shop species-appropriate fish food on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=tools-tank-mate-compatibility"
              amazonLabel="Shop aquarium test kits on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+fish+net+acclimation+kit?s=tools-tank-mate-compatibility"
              amazonLabel="Shop nets and acclimation kits on Amazon →"
            />
          </div>
        </div>

        <h2 id="pairings">Common Tank Mate Pairings at a Glance</h2>
        <p>
          A quick reference for the questions aquarists ask most. These are conservative general verdicts; a larger,
          well-planted tank can soften many &quot;Caution&quot; pairings.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Pairing</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-dark">Verdict</th>
                <th className="text-left py-2 font-semibold text-brand-dark">Why</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Betta + Neon Tetra</td>
                <td className="py-2 pr-4">Compatible</td>
                <td className="py-2">Peaceful, share warm range; keep tetras in a school of 6+.</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Betta + Corydoras</td>
                <td className="py-2 pr-4">Compatible</td>
                <td className="py-2">Peaceful bottom-dwellers stay out of the betta&apos;s way.</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Betta + Tiger Barb</td>
                <td className="py-2 pr-4">Caution</td>
                <td className="py-2">Tiger barbs nip the betta&apos;s long fins; depends on tank size.</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Goldfish + any tropical fish</td>
                <td className="py-2 pr-4">Not recommended</td>
                <td className="py-2">Coldwater vs tropical temperature clash.</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Angelfish + Neon Tetra</td>
                <td className="py-2 pr-4">Caution</td>
                <td className="py-2">Adult angelfish may eat small neons; fine while both are small.</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">African Cichlid + community fish</td>
                <td className="py-2 pr-4">Not recommended</td>
                <td className="py-2">Aggressive, territorial, and wants hard alkaline water.</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Guppy + Platy</td>
                <td className="py-2 pr-4">Compatible</td>
                <td className="py-2">Peaceful livebearers with matching water preferences.</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Cherry Shrimp + Angelfish</td>
                <td className="py-2 pr-4">Caution</td>
                <td className="py-2">Adults may survive; shrimplets get eaten, so the colony struggles.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For a full breakdown of one of the most-searched cases, see our dedicated{' '}
          <Link href="/species/betta-fish-tank-mates">betta fish tank mates</Link> guide, or jump to any species
          profile: <Link href="/species/neon-tetra">neon tetra</Link>,{' '}
          <Link href="/species/angelfish">angelfish</Link>, <Link href="/species/guppy">guppy</Link>,{' '}
          <Link href="/species/corydoras">corydoras</Link>, and <Link href="/species/goldfish">goldfish</Link>.
        </p>

        <h2 id="methodology">How Compatibility Is Judged</h2>
        <p>
          The checker applies five well-established aquarium-keeping factors to each pair and reports the most serious
          concern it finds. It is intentionally conservative — it would rather flag a borderline pairing than imply a
          false guarantee.
        </p>
        <ul>
          <li>
            <strong>Temperature range.</strong> Each species has a comfortable range. A coldwater fish (goldfish) paired
            with tropical fish is a hard incompatibility; a narrow overlap raises a caution.
          </li>
          <li>
            <strong>Temperament &amp; territory.</strong> Aggressive species (oscar, African cichlid) typically harass
            or kill peaceful community fish, and two aggressive species need a large tank to coexist.
          </li>
          <li>
            <strong>Fin-nipping.</strong> Known nippers (tiger barb, zebra danio) damage long, flowing fins on bettas,
            angelfish, and fancy guppies. Larger schools reduce but don&apos;t remove the risk.
          </li>
          <li>
            <strong>Adult size &amp; predation.</strong> Fish stock as juveniles but grow. A predator-mouthed fish much
            larger than its tank mate will eventually eat it.
          </li>
          <li>
            <strong>Water hardness.</strong> Hard-water specialists (African cichlids) and soft-water fish (cardinal and
            neon tetras) can&apos;t both be kept at their ideal parameters, so one is chronically stressed.
          </li>
        </ul>
        <p>
          Where the answer genuinely depends on conditions, the tool says so rather than asserting a false absolute.
          Tank size, group sizes, decor, and an individual fish&apos;s personality all influence the real-world outcome.
          Treat every verdict as general guidance for planning, then watch your own fish.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <ArticleSourcesList
          title="Sources"
          sources={[
            {
              label: 'Aquarium fish compatibility and community tank stocking',
              publisher: 'The Spruce Pets',
              url: 'https://www.thesprucepets.com/freshwater-aquarium-fish-4162163',
            },
            {
              label: 'Betta fish care and tank mates',
              publisher: 'The Spruce Pets',
              url: 'https://www.thesprucepets.com/betta-fish-4162276',
            },
            {
              label: 'Goldfish are coldwater fish: temperature requirements',
              publisher: 'Seriously Fish',
              url: 'https://www.seriouslyfish.com/',
            },
            {
              label: 'African cichlid water parameters and aggression',
              publisher: 'Seriously Fish',
              url: 'https://www.seriouslyfish.com/',
            },
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
