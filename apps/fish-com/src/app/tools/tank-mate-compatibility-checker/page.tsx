import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  TableOfContents,
  RelatedLinks,
  ArticleByline,
  ArticleSourcesList,

  ShopCtas,
  JourneyNext,
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
      'FishBase lists Betta splendens as tropical, 24–30°C (about 75–86°F). Seriously Fish lists 22–30°C (72–86°F) and describes the species as not a community fish. This page does not publish a safest-mate roster or a 10-gallon minimum. Fin-nipping species and a second male betta are poor company; watch the individual fish.',
  },
  {
    question: 'Can goldfish live with tropical fish?',
    answer:
      'FishBase lists Carassius auratus as subtropical, with a recorded range of 0–41°C, and Betta splendens as tropical at 24–30°C. Those ranges do not overlap comfortably, so goldfish and tropical community fish are a poor mix. Goldfish also grow large enough to eat fish that fit in their mouths. Keep goldfish in their own setup. A preferred 60–74°F band is not what FishBase records.',
  },
  {
    question: 'Are tiger barbs aggressive?',
    answer:
      'Tiger barbs are widely kept as fin-nippers around long-finned fish such as bettas, angelfish, and fancy guppies. A school size of eight is not backed by a primary source on this page. Treat group size as husbandry judgment: a larger school may spread nipping inside the group, and it does not make long-finned tank mates safe.',
  },
  {
    question: 'Why are African cichlids hard to find tank mates for?',
    answer:
      'African cichlids are aggressive, territorial fish and a poor mix with peaceful community species. A hard, alkaline water requirement is not cited from a species page on this tool, so do not treat water chemistry as settled here. Check the species profile before you mix them.',
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
        <JourneyNext
          siteId="fish-com"
          nextHref="/setup/quarantine-tank-guide"
          nextLabel="Quarantine a new fish before it joins the display"
          nextBlurb="A Compatible verdict is temperament, not a green light to drop livestock in today. Run new fish in a bare-bottom quarantine tank for 4–6 weeks. The hop below is the same quarantine/hospital search already in the shop list."
          resourceHref="/go/amazon-brand/aquarium+quarantine+hospital+tank?s=tools-tank-mate-compatibility"
          resourceLabel="Browse hospital and quarantine tanks on Amazon →"
        />

        {/* Money path — live amazon-brand search hops (divider / quarantine / caves / food / test kit / net).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
        <HopDisclosure siteId="fish-com" href={["/go/amazon-brand/aquarium+quarantine+hospital+tank?s=tools-tank-mate-compatibility", "/go/amazon-brand/aquarium+tank+divider?s=tools-tank-mate-compatibility", "/go/amazon-brand/aquarium+decorations+caves+hiding+spots?s=tools-tank-mate-compatibility", "/go/amazon-brand/tropical+community+fish+food?s=tools-tank-mate-compatibility", "/go/amazon-brand/api+freshwater+master+test+kit?s=tools-tank-mate-compatibility", "/go/amazon-brand/aquarium+fish+net+acclimation+kit?s=tools-tank-mate-compatibility"]} />
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
            .
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+tank+divider?s=tools-tank-mate-compatibility"
              amazonLabel="Browse tank dividers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank?s=tools-tank-mate-compatibility"
              amazonLabel="Browse hospital and quarantine tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+decorations+caves+hiding+spots?s=tools-tank-mate-compatibility"
              amazonLabel="Browse aquarium decorations, caves, and hiding spots on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/tropical+community+fish+food?s=tools-tank-mate-compatibility"
              amazonLabel="Browse tropical community fish food on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=tools-tank-mate-compatibility"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+fish+net+acclimation+kit?s=tools-tank-mate-compatibility"
              amazonLabel="Browse fish nets and acclimation kits on Amazon →"
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
                <td className="py-2">Checker verdict only: can work if the tetras stay schooled and the betta is not aggressive. Not a published safest-mate rule.</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Betta + Corydoras</td>
                <td className="py-2 pr-4">Compatible</td>
                <td className="py-2">Checker verdict only: bottom-dwellers often stay out of the way. Watch the individual betta.</td>
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
                <td className="py-2">Aggressive and territorial; a poor mix with peaceful community fish.</td>
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
            <strong>Temperature range.</strong> Where a species has a FishBase environment line, the checker uses that
            °C band, widened to whole °F so the band is not tighter than the page. Bristlenose uses the Seriously Fish
            21–26°C line (stated there as 70–79°F) because FishBase&apos;s Ancistrus cirrhosus page has no temperature.
            Betta splendens is FishBase 24–30°C. Goldfish stays on the coldwater flag; the FishBase 0–41°C record is not
            used as a preferred band. Mystery snails, cherry shrimp, and the generic African-cichlid row have no single
            species temperature page, so those verdicts do not print a degree range.
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
            <strong>Water hardness.</strong> This checker can flag a hardness mismatch. That flag is planning guidance.
            A hard, alkaline number for African cichlids is not cited from a species page here.
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
              label: 'FishBase — Betta splendens: tropical, 24–30°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Betta-splendens.html',
            },
            {
              label: 'FishBase — Carassius auratus: subtropical, 0–41°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Carassius-auratus.html',
            },
            {
              label: 'Seriously Fish — Betta splendens: 22–30°C, not a community fish',
              publisher: 'Seriously Fish',
              url: 'https://www.seriouslyfish.com/species/betta-splendens/',
            },
            {
              label: 'FishBase — Paracheirodon innesi (neon tetra): tropical, 20–26°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Paracheirodon-innesi.html',
            },
            {
              label: 'FishBase — Paracheirodon axelrodi (cardinal tetra): tropical, 23–27°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Paracheirodon-axelrodi.html',
            },
            {
              label: 'FishBase — Poecilia reticulata (guppy): tropical, 18–28°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Poecilia-reticulata.html',
            },
            {
              label: 'FishBase — Poecilia sphenops (molly): tropical, 18–28°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Poecilia-sphenops.html',
            },
            {
              label: 'FishBase — Xiphophorus maculatus (platy): tropical, 18–25°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Xiphophorus-maculatus.html',
            },
            {
              label: 'FishBase — Xiphophorus hellerii (swordtail): tropical, 22–28°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Xiphophorus-hellerii.html',
            },
            {
              label: 'FishBase — Pterophyllum scalare (angelfish): tropical, 24–30°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Pterophyllum-scalare.html',
            },
            {
              label: 'FishBase — Corydoras aeneus (bronze corydoras): subtropical, 25–28°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Corydoras-aeneus.html',
            },
            {
              label: 'Seriously Fish — Ancistrus cf. cirrhosus (common bristlenose): 21–26°C, 70–79°F',
              publisher: 'Seriously Fish',
              url: 'https://www.seriouslyfish.com/species/ancistrus-cf-cirrhosus/',
            },
            {
              label: 'FishBase — Trigonostigma heteromorpha (harlequin rasbora): tropical, 22–25°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Trigonostigma-heteromorpha.html',
            },
            {
              label: 'FishBase — Danio rerio (zebra danio): tropical, 18–24°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Danio-rerio.html',
            },
            {
              label: 'FishBase — Trichogaster lalius (dwarf gourami): tropical, 25–28°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Trichogaster-lalius.html',
            },
            {
              label: 'FishBase — Pangio kuhlii (kuhli loach): tropical, 24–30°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Pangio-kuhlii.html',
            },
            {
              label: 'FishBase — Puntigrus tetrazona (tiger barb): tropical, 20–26°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Puntigrus-tetrazona.html',
            },
            {
              label: 'FishBase — Astronotus ocellatus (oscar): tropical, 22–25°C',
              publisher: 'FishBase',
              url: 'https://www.fishbase.se/summary/Astronotus-ocellatus.html',
            },
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
