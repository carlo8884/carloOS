import type { Metadata } from 'next'
import { StockImage,
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks, CrossPortfolioCard,
  FAQAccordion,
  SchemaScript,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleByline,
  DropCap,
  CalloutBox,
  AffiliateDisclosure,
  ArticleSourcesList,
} from '@carloOS/ui'

const SOURCES = [
  { label: "Haplochromine Cichlids of Lake Malawi — Seriously Fish", url: "https://www.seriouslyfish.com/taxonomy/cichlidae/", publisher: "Seriously Fish" },
  { label: "Lake Malawi Cichlids — FishBase taxonomy", url: "https://www.fishbase.se/identification/SpeciesList.php?family=Cichlidae", publisher: "FishBase" },
  { label: "Konings, A. Malawi Cichlids in Their Natural Habitat, 5th ed. Cichlid Press, 2016.", publisher: "Cichlid Press" },
  { label: "Stauffer, J.R. Jr. et al. The Cichlids of the Lake Malawi National Park. Smithsonian Institution Press, 1997.", publisher: "Smithsonian Institution Press" },
]

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'African Cichlid Care Guide — Malawi, Tanganyika, Victoria | Fish.com',
  description:
    'Rift-lake cichlids from Lakes Malawi, Tanganyika, Victoria. Hard alkaline water, large tanks, mbuna vs peacocks vs haps, aggression management, starter species.',
  path: '/species/african-cichlid',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'African Cichlid Care Guide',
  description:
    'Lake Malawi, Tanganyika, and Victoria rift-lake cichlids — hard alkaline water requirements, aggression management, and starter species.',
  url: 'https://fish.com/species/african-cichlid',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is the minimum tank size for African cichlids?',
    answer:
      'For Lake Malawi mbuna, 55 gallons is the practical minimum — a 4-foot tank with a footprint that allows multiple territories. Peacocks and haplochromines (haps) need 75 gallons minimum because of their larger adult size and open-water swimming behavior. Lake Tanganyika cichlids vary by species: shell-dwelling Neolamprologus multifasciatus can live in a 20-gallon-long, while Tropheus moorii need 75+ gallons and large groups. Smaller is consistently more aggressive — cichlid aggression is one of the few aquarium problems that gets worse, not better, in tight quarters.',
    answerText:
      '55 gallons minimum for Malawi mbuna, 75+ for peacocks and haps. Tanganyika species vary from 20-gallon shell dwellers to 75-gallon Tropheus. Smaller tanks increase aggression.',
  },
  {
    question: 'Why do African cichlids need hard alkaline water?',
    answer:
      'The African rift lakes (Malawi, Tanganyika, Victoria) are endorheic — they have no outflow to the sea, so dissolved minerals accumulate over geological timescales. The result is some of the hardest, most alkaline fresh water on Earth: pH 7.8–9.0+, GH 10–20+, KH 10–18+ for Malawi; even more extreme for Tanganyika. African cichlid biology is evolutionarily tuned to those conditions. In soft or acidic water (most US tap water without modification) African cichlids are dull, stressed, prone to bacterial bloat, and short-lived.',
    answerText:
      'Rift lakes are endorheic and have accumulated minerals over millions of years. African cichlids evolved for hard alkaline water; soft water causes stress, bloat, and short lifespans.',
  },
  {
    question: 'Can I mix African cichlids with other community fish?',
    answer:
      'Mostly no. African cichlids are aggressive toward smaller fish and the water chemistry they require is the opposite of what soft-water community fish (tetras, rasboras, discus, cardinals) tolerate. The few common exceptions: synodontis catfish (especially Synodontis multipunctatus and S. petricola, which evolved with Malawi/Tanganyika cichlids), large peaceful plecos (bristlenose, common pleco), and certain hard-water rainbowfish. Plan for a species-only or carefully-curated rift-lake community, not a mixed community.',
    answerText:
      'Generally no. Different water chemistry from soft-water fish and aggression to smaller species. Synodontis catfish and large plecos are the main exceptions.',
  },
  {
    question: 'What is Malawi bloat and how do I prevent it?',
    answer:
      'Malawi bloat is a fatal metabolic-bacterial condition in mbuna caused by feeding inappropriately high-protein animal foods to predominantly herbivorous fish. Symptoms: distended belly, hiding, refusal to eat, stringy white feces, and rapid decline. Mbuna evolved grazing aufwuchs (algae and biofilm) from rocks; their digestive tract handles vegetable matter, not red meat or krill-heavy pellets. Prevent by feeding mbuna a spirulina or vegetable-based cichlid pellet as the staple — never beef heart, never bloodworms as a regular food, never high-protein "cichlid sticks" designed for carnivorous New World cichlids.',
    answerText:
      'Fatal condition from feeding high-protein foods to herbivorous mbuna. Distended belly, white stringy feces, refusal to eat. Prevent by feeding spirulina/vegetable-based cichlid pellets only.',
  },
  {
    question: 'Are African cichlids beginner fish?',
    answer:
      'No — they sit in the intermediate category. The water-chemistry requirement (hard, alkaline) means most US tap water needs at least crushed coral in the filter or buffered substrate; the aggression requires species selection, tank-size planning, and dense rockwork; and the diet requires matching food to species (herbivore mbuna vs carnivore peacocks/haps). All of that is learnable in a first or second tank, but it is more demanding than a community tank with platies and corydoras.',
    answerText:
      'No, intermediate. Water chemistry, aggression management, and species-specific diet all require more planning than a basic community tank.',
  },
  {
    question: 'Which African cichlid is the best starter species?',
    answer:
      'For Lake Malawi mbuna: Labidochromis caeruleus (Yellow Lab) is the textbook starter — relatively peaceful by mbuna standards, bright yellow, widely available, and forgiving. For Lake Malawi peacocks: Aulonocara stuartgranti morphs are stunning and less aggressive than mbuna. For Lake Tanganyika: the shell-dwelling Neolamprologus multifasciatus ("multies") are tiny, fascinating, breed readily, and can live in a 20-gallon-long — possibly the best small-tank African cichlid choice in the hobby.',
    answerText:
      'Yellow Lab (Labidochromis caeruleus) for Malawi mbuna; Aulonocara stuartgranti peacocks for less aggression; Neolamprologus multifasciatus shell-dwellers for small tanks.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function AfricanCichlidPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: 'African Cichlid Care Guide',
          subtitle:
            'African rift-lake cichlids — the Mbuna, Peacocks, and Haplochromines of Lake Malawi, the Tropheus and shell-dwellers of Lake Tanganyika, and the Haplochromis complex of Lake Victoria — represent some of the most colorful freshwater fish in the world and some of the most behaviorally complex. They need hard alkaline water, large tanks, dense rockwork, and species-matched diet. None of that is beginner difficulty; all of it is doable in a first serious tank.',
          category: 'Species Guide — Intermediate',
          authorName: 'Fish.com Editorial',
          publishedAt: 'May 2025',
          readTime: '14 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Species', href: '/species' },
          { name: 'African Cichlid', href: '/species/african-cichlid' },
        ]}
        relatedLinks={[{ title: 'Species Hub', href: '/species', category: 'Species' }, { title: 'Discus', href: '/species/discus', category: 'Species Guide' }, { title: 'Oscar', href: '/species/oscar', category: 'Species Guide' }, { title: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide', category: 'Tank Setup' }]}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Reference
              </div>
              {[
                ['Groups', 'Mbuna · Peacocks · Haps · Tanganyikan'],
                ['Origin', 'Lakes Malawi, Tanganyika, Victoria'],
                ['Adult size', '3–12 in by species'],
                ['Temperature', '76–82°F'],
                ['pH', '7.8–9.0 (alkaline)'],
                ['GH / KH', '10–25 dGH / 10–18 dKH'],
                ['Min tank', '55 gal mbuna · 75 gal haps/peacock'],
                ['Diet', 'Match to species — mbuna vegetable'],
                ['Lifespan', '8–10 years'],
                ['Compatibility', 'Species-only or curated rift'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0"
                >
                  <span className="text-brand-text-light">{k}</span>
                  <span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
                </div>
              ))}
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Lake Comparison
              </div>
              {[
                ['Lake Malawi', 'pH 7.8–8.5 · Most popular · Mbuna + haps + peacocks'],
                ['Lake Tanganyika', 'pH 8.5–9.5 · Older lake · Shell dwellers, Tropheus'],
                ['Lake Victoria', 'pH 7.5–8.5 · Many wild populations endangered'],
              ].map(([lake, params]) => (
                <div key={lake} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-xs font-bold text-brand-dark">{lake}</div>
                  <div className="text-2xs text-brand-text-light">{params}</div>
                </div>
              ))}
            </div>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Oscar Fish', href: '/species/oscar' },
                { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
                { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' },
                { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' },
                { label: 'Find an Aquarium Vet (WAVMA)', href: 'https://vets.co/find-a-vet/aquarium' },
              ]}
            />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="fish-com"
              title="The Weekly Tank"
              subtitle="Species spotlights every Thursday."
              source="species-african-cichlid"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Fish.com Editorial"
            publishedAt="2025-05-01T00:00:00Z"
            updatedAt="2026-05-28T00:00:00Z"
            reviewedBy="Editorial team"
          />
        <StockImage manifestKey="fish-com:species-african-cichlid" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="An African cichlid in a home aquarium." priority />

          <CalloutBox variant="note" title="TL;DR">
            African rift-lake cichlids from Lakes Malawi, Tanganyika, and
            Victoria need hard, alkaline water (pH 7.8–9.0, high GH/KH),
            dense rockwork to break sightlines and create territories,
            and a tank large enough to dilute aggression (55+ gallons for
            mbuna, 75+ for peacocks and haps). Mbuna are vegetable
            specialists; feeding them high-protein food causes fatal
            Malawi bloat. Species-only or carefully curated rift-lake
            communities only — they are not compatible with soft-water
            community fish.
          </CalloutBox>

          <h2>The Rift Lakes — Why African Cichlids Are Different</h2>
          <DropCap>
            The African Great Lakes are some of the oldest, deepest, and
            most ecologically distinctive freshwater bodies on Earth.
            Lake Tanganyika is roughly 9–12 million years old; Lake
            Malawi about 1–2 million; Lake Victoria a much younger
            400,000 years (Konings, 2007). All three are endorheic
            (no outflow to the sea) and accumulate dissolved minerals
            over geological time, producing water that is hard,
            alkaline, and mineral-rich to a degree that has no parallel
            in most North American or European freshwater. Within those
            stable conditions, cichlids underwent one of the best-known
            adaptive radiations in vertebrate evolution — peer-reviewed
            phylogenetic work (Salzburger, 2018; Genner et al., 2007)
            describes Lake Malawi alone as containing somewhere between
            700 and 1,000 cichlid species, the great majority endemic.
          </DropCap>
          <p>
            For the aquarium hobby, that radiation means an
            extraordinary range of color, size, and behavioral
            specialization within a single chemistry regime. It also
            means that successful African cichlid keeping requires
            matching the water to the lake of origin — not approximating
            with neutral community-tank water.
          </p>

          <h2>Water Chemistry — Hard and Alkaline</h2>
          <p>
            Target parameters by lake (FishBase species accounts and
            Konings 2007):
          </p>
          <ul>
            <li>
              <strong>Lake Malawi:</strong> pH 7.8–8.5, GH 10–20 dGH,
              KH 10–18 dKH, temperature 76–82°F.
            </li>
            <li>
              <strong>Lake Tanganyika:</strong> pH 8.5–9.5, GH 12–25
              dGH, KH 16–25 dKH, temperature 76–82°F.
            </li>
            <li>
              <strong>Lake Victoria:</strong> pH 7.5–8.5, GH 8–20 dGH,
              KH 6–18 dKH, temperature 76–82°F.
            </li>
          </ul>
          <p>
            If your tap water reads under pH 7.5 or GH under 10,
            chemistry has to be modified. Practical options:
          </p>
          <ul>
            <li>
              <strong>Crushed coral / aragonite in the filter:</strong>
              Dissolves slowly, gradually raises KH and pH over weeks.
              Cheap and stable.
            </li>
            <li>
              <strong>African-cichlid-specific substrate:</strong>
              CaribSea Eco-Complete African Cichlid substrate, Seachem
              Cichlid Stones, or aragonite sand. Releases calcium
              carbonate continuously.
            </li>
            <li>
              <strong>Commercial buffer salts:</strong> Seachem Malawi/
              Victoria Buffer, Tanganyika Buffer. Dose to hit target;
              gives precise control but requires regular testing.
            </li>
          </ul>
          <p>
            Stable parameters matter more than hitting exact targets.
            Rapid swings in pH or hardness during water changes are more
            damaging than a slightly off but consistent baseline.
          </p>

          <h2>Lake Malawi Species Groups</h2>
          <p>
            Lake Malawi is the most popular source for African cichlids
            in the trade. The lake's cichlids fall into three loose
            functional groups:
          </p>
          <p>
            <strong>Mbuna ("rock fish"):</strong> Vivid, aggressive,
            relatively small (3–6 inches), rock-dwelling, primarily
            herbivorous fish that scrape aufwuchs (algae and biofilm)
            from rocks. Most common genera: Pseudotropheus,
            Melanochromis, Labidochromis (the Yellow Lab,
            L. caeruleus, is the textbook starter), Cynotilapia,
            Iodotropheus. Mbuna require rock-filled tanks and benefit
            from heavy stocking (12+ fish in a 55-gallon) to diffuse
            male aggression. The dominant male in an understocked tank
            focuses aggression on one or two subordinates, which are
            harassed to death; in a heavily stocked tank with many
            targets, aggression spreads thin.
          </p>
          <p>
            <strong>Aulonocara (Peacocks):</strong> Open-water,
            sand-foraging, sexually dichromatic cichlids — males develop
            extraordinarily intense blue, red, orange, or yellow
            coloration; females are drab silvery-grey. Less aggressive
            than mbuna and the standard recommendation for an "all-male
            peacock tank" — a curated group of males of different
            species and color forms, with no females, that displays
            constantly without breeding aggression. 75+ gallons minimum
            for an all-male peacock tank.
          </p>
          <p>
            <strong>Haplochromines ("Haps"):</strong> Larger (6–12
            inches), open-water predators. Sciaenochromis fryeri
            ("electric blue ahli"), Copadichromis borleyi, and various
            Nimbochromis species are popular. Less aggressive per
            individual than mbuna but the larger adult size requires
            75–125+ gallon tanks for groups.
          </p>

          <h2>Lake Tanganyika — Older Lake, Different Behavior</h2>
          <p>
            Tanganyikan cichlids show even more behavioral specialization
            than Malawi species, reflecting the lake's far greater age.
            Key groups:
          </p>
          <ul>
            <li>
              <strong>Shell-dwellers (Lamprologini):</strong>
              Neolamprologus multifasciatus, N. brevis, N. ocellatus —
              tiny (1–2 inch) cichlids that live in vacated Neothauma
              snail shells, defend territories around them, and breed
              prolifically. The only African cichlids that thrive in
              small (20-gallon-long) tanks.
            </li>
            <li>
              <strong>Tropheus:</strong> Schooling herbivorous cichlids
              from rocky shorelines. Require 75+ gallons, groups of 12+
              to spread aggression, and strict vegetable diet. Bloat is
              a chronic risk.
            </li>
            <li>
              <strong>Cyprichromis:</strong> Open-water schoolers,
              relatively peaceful, beautiful in shoals. Good
              "centerpiece" Tanganyikan group.
            </li>
            <li>
              <strong>Julidochromis and Neolamprologus pulcher
              ("daffodil cichlids"):</strong> Pair-bonding, rock-loving
              species that show cooperative breeding behavior in
              groups.
            </li>
          </ul>

          <h2>Lake Victoria — Conservation Note</h2>
          <p>
            Lake Victoria's cichlid fauna was one of the most spectacular
            adaptive radiations on Earth — and one of the great
            ecological tragedies of the 20th century. The introduction
            of Nile perch (Lates niloticus) in the 1950s and 60s, plus
            eutrophication and habitat loss, drove an estimated
            200–300 endemic cichlid species to extinction or
            near-extinction (Witte et al., 1992). The Lake Victoria
            cichlids in the trade today are largely captive-bred
            descendants of fish collected before the collapse. Where
            captive-bred Victoria cichlids are available, keeping them
            responsibly contributes to ex-situ conservation of species
            that may no longer be recoverable in the wild.
          </p>

          <h2>Aggression Management — The Counterintuitive Rules</h2>
          <p>
            Several pieces of African cichlid husbandry are
            counterintuitive to keepers coming from community tanks:
          </p>
          <ul>
            <li>
              <strong>Overstock mbuna tanks, not understock.</strong>
              A 55-gallon mbuna tank with 20–25 fish is calmer than
              the same tank with 10. Aggression diffuses across many
              targets rather than focusing on one or two.
            </li>
            <li>
              <strong>Dense rockwork, not open space.</strong> The
              correct mbuna tank is 60–70% rocks with caves, crevices,
              and visual breaks from floor to near the surface. Open
              tanks with a few decorations are aggression hot zones.
            </li>
            <li>
              <strong>Avoid mixing male peacocks of similar color and
              shape with each other.</strong> Different color forms,
              fine; similar species (two blue peacocks), male
              competition will lead to harassment.
            </li>
            <li>
              <strong>Add fish in groups, not one at a time.</strong>
              Single additions to an established mbuna tank are usually
              killed. Adding 6+ new fish at once or rearranging rockwork
              before adding spreads territorial reset across the group.
            </li>
          </ul>

          <h2>Feeding — Match the Species</h2>
          <p>
            African cichlid diet is critical and species-dependent. The
            single most common fatal husbandry mistake is feeding
            high-protein carnivore food to herbivorous mbuna or
            Tropheus, causing Malawi bloat — a fatal metabolic-bacterial
            condition with no reliable cure once advanced.
          </p>
          <ul>
            <li>
              <strong>Mbuna and Tropheus (herbivores):</strong>
              Spirulina or vegetable-based cichlid pellet as the staple.
              Northfin Cichlid Veggie Formula, New Life Spectrum
              AlgaeMax, Dainichi Veggie Deluxe. No bloodworms as a
              staple. No beef heart. Ever.
            </li>
            <li>
              <strong>Peacocks and Haps (carnivores):</strong> Mid-
              to high-protein cichlid pellet (Hikari Cichlid Excel,
              New Life Spectrum Cichlid Formula) plus frozen mysis,
              krill, and brine shrimp two or three times per week.
            </li>
            <li>
              <strong>Tanganyikan shell-dwellers:</strong> Small-grade
              high-protein cichlid pellets, baby brine shrimp, and
              cyclops.
            </li>
          </ul>

          <h2>Compatibility — Species-Only or Curated Rift</h2>
          <p>
            African cichlids generally cannot be mixed with the
            soft-water community fish that dominate most aquarium
            stocking. Plan a species-only or curated rift-lake setup.
          </p>
          <p>
            <strong>Safe tank mates (all rift-lake setups):</strong>
            Synodontis multipunctatus (Tanganyikan cuckoo catfish),
            Synodontis petricola, Synodontis lucipinnis, large
            bristlenose plecos, common plecos. Some rainbowfish
            (Melanotaenia species) tolerate the chemistry well enough
            to coexist with peaceful peacocks.
          </p>
          <p>
            <strong>Avoid:</strong> tetras, rasboras, discus, cardinals,
            angelfish, gouramis (mostly soft-water), bettas, all
            shrimp, most snails (Malawi tank pH is hard on snails),
            kuhli loaches, corydoras, and any soft-water community
            species.
          </p>

          <h2>Common Health Issues</h2>
          <ul>
            <li>
              <strong>Malawi bloat:</strong> Distended belly, white
              stringy feces, refusal to eat. Caused by inappropriate
              high-protein diet in herbivorous mbuna or Tropheus.
              Often fatal once visible. Prevent with strict vegetable
              diet.
            </li>
            <li>
              <strong>Ich (Ichthyophthirius multifiliis):</strong>
              Standard heat treatment plus commercial ich treatment.
              African cichlids tolerate full-strength treatment well.
            </li>
            <li>
              <strong>Hole in the head (Hexamita / Spironucleus):</strong>
              Pitting and lesions on the head and lateral line. Treat
              with metronidazole and improve water quality.
            </li>
            <li>
              <strong>Aggression injuries:</strong> Torn fins, missing
              scales, eye damage from territorial fights. Restructure
              rockwork, rehome bully fish, increase stocking density
              to dilute focus.
            </li>
            <li>
              <strong>Mycobacteriosis ("fish TB"):</strong> Slow
              wasting, color loss, spinal curvature in chronic cases.
              No reliable cure. Quarantine new fish and humanely
              euthanize obviously affected animals.
            </li>
          </ul>
          <p>
            For persistent or unexplained losses — particularly
            suspected bloat or mycobacterial infection — work with an
            ornamental-fish vet via the{' '}
            <a href="https://vets.co/find-a-vet/aquarium">
              Vets.co aquarium vet finder
            </a>{' '}
            (WAVMA referral directory). Metronidazole and similar
            treatments benefit from professional dosing guidance.
          </p>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({
              question: f.question,
              answer: f.answer,
              answerText: f.answerText,
            }))}
            includeSchema={false}
            allowMultiple
          />

          <h2>Sources</h2>
          <ul>
            <li>
              FishBase species accounts: Labidochromis caeruleus,
              Aulonocara stuartgranti, Sciaenochromis fryeri,
              Neolamprologus multifasciatus, Tropheus moorii. Froese,
              R. and D. Pauly. Editors.
            </li>
            <li>
              Konings, A. (2007). Malawi Cichlids in Their Natural
              Habitat (4th edition). Cichlid Press. Reference standard
              for in-situ Malawi cichlid behavior and ecology.
            </li>
            <li>
              Salzburger, W. (2018). Understanding explosive
              diversification through cichlid fish genomics. Nature
              Reviews Genetics 19: 705–717. Peer-reviewed phylogenetic
              review of African cichlid adaptive radiations.
            </li>
            <li>
              Genner, M. J. et al. (2007). Age of cichlids: new dates
              for ancient lake fish radiations. Molecular Biology and
              Evolution 24(5): 1269–1282.
            </li>
            <li>
              Witte, F. et al. (1992). The destruction of an endemic
              species flock: quantitative data on the decline of the
              haplochromine cichlids of Lake Victoria. Environmental
              Biology of Fishes 34: 1–28.
            </li>
            <li>
              IUCN Red List assessments for Lake Victoria cichlid
              species (many listed Critically Endangered or Extinct
              in the wild).
            </li>
            <li>
              World Aquatic Veterinary Medical Association (WAVMA)
              practice referral directory.
            </li>
          </ul>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>African Cichlid — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for african cichlid care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/african%20cichlid%20tank%20setup?s=species-african-cichlid" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop African Cichlid Setup on Amazon →</a>
            <a href="/go/chewy-brand/african%20cichlid%20tank%20setup?s=species-african-cichlid" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
