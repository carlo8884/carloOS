import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks, CrossPortfolioCard,
  FAQAccordion,
  SchemaScript,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  ArticleByline,
  DropCap,
  CalloutBox,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Cardinal Tetra Care Guide — Blackwater, Wild vs Farmed | Fish.com',
  description:
    'Cardinal tetras need soft, warm, acidic blackwater and schools of 10+. Wild-caught vs tank-bred, compatibility, blackwater biotope, and Pleistophora prevention.',
  path: '/species/cardinal-tetra',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Cardinal Tetra Care Guide',
  description:
    'Paracheirodon axelrodi blackwater care, wild-caught vs tank-bred sourcing, schooling, soft-water chemistry, and community compatibility.',
  url: 'https://fish.com/species/cardinal-tetra',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Species', url: 'https://fish.com/species' },
    { name: 'Cardinal Tetra', url: 'https://fish.com/species/cardinal-tetra' },
  ],
})

const FAQS = [
  {
    question: 'Cardinal tetra vs neon tetra — which should I buy?',
    answer:
      'If your tap water is soft and slightly acidic (GH under 8, pH 6.0–7.0), cardinals are the visual upgrade — the red runs the full length of the body and the school is more intense. If your tap is hard or alkaline, neons (Paracheirodon innesi) adapt better and live longer. Cardinals also tend to be wild-caught from the Rio Negro and Orinoco, while neons are predominantly farm-raised in Southeast Asia — sourcing and disease pressure differ accordingly.',
    answerText:
      'Cardinals if your water is soft and acidic; neons if your water is hard or alkaline. Cardinals are often wild-caught, neons are farm-raised.',
  },
  {
    question: 'What is the minimum school size?',
    answer:
      'Ten is the welfare minimum. Below that, individuals become skittish, hide constantly, and rarely display their full color. A school of 15–20 in a 20-gallon-long or larger planted tank is the working sweet spot for both fish welfare and visual impact. FishBase records natural shoaling behavior in groups of several hundred — captive groups will never approach that, but more is genuinely better.',
    answerText:
      'Minimum 10. A school of 15-20 in a 20-gallon-long or larger planted tank is the practical sweet spot.',
  },
  {
    question: 'Are wild-caught cardinals worth the higher price?',
    answer:
      'Wild-caught cardinals from sustainable Project Piaba fisheries in the Rio Negro are arguably the more ethical choice and frequently more vibrant than farm stock — but they require strict quarantine (4 weeks minimum) and very soft, acidic water from day one. Tank-bred cardinals are slightly more tolerant of harder water and carry a lower wild-parasite load. For first-time cardinal keepers, tank-bred is usually the better starting point.',
    answerText:
      'Wild-caught from Project Piaba can be more vibrant but need strict quarantine and soft acidic water. Tank-bred is the safer first choice.',
  },
  {
    question: 'Can cardinals live with discus?',
    answer:
      'Yes — cardinals are the classic discus dither fish. They share the same warm (82°F+), soft, acidic blackwater requirements and are too fast to be eaten by adult discus. The combination is one of the most established South American biotope pairings in the hobby.',
    answerText:
      'Yes. Cardinals share discus water parameters and are too fast to be eaten. Classic South American biotope pairing.',
  },
  {
    question: 'Why are my cardinals losing color at night?',
    answer:
      'Normal. Like many tetras, cardinals dim their iridescent stripe at lights-out — the structural-color reflectors in the iridophore cells relax in darkness. Color returns within an hour of the lights coming on. Persistent daytime dullness, on the other hand, indicates stress, wrong water chemistry, or early disease.',
    answerText:
      'Normal night-time dimming of structural iridescence. Persistent daytime dullness indicates stress or disease.',
  },
  {
    question: 'Do cardinals get neon tetra disease too?',
    answer:
      'Yes. Cardinals are susceptible to Pleistophora hyphessobryconis, the microsporidian parasite that causes neon tetra disease, though the literature suggests they may be somewhat less susceptible than neons. Symptoms and management are identical: white lesions, loss of color, no cure — affected fish must be removed and humanely euthanized to prevent spore release. Quarantine every new fish for four weeks before adding to an established school.',
    answerText:
      'Yes. Cardinals are susceptible to Pleistophora hyphessobryconis. No cure. Quarantine new fish four weeks.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

export default function CardinalTetraPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: 'Cardinal Tetra Care Guide',
          subtitle:
            'Paracheirodon axelrodi — the full-body red-and-blue cardinal tetra is widely considered the most visually striking schooling fish in the freshwater hobby. Unlike its smaller cousin the neon tetra, the cardinal carries red coloration the entire length of the body. It demands softer, warmer, more acidic water than the neon — and rewards correct conditions with a school display nothing else at its size matches.',
          category: 'Species Guide — Intermediate',
          authorName: 'Fish.com Editorial',
          authorAvatar: '🐟',
          publishedAt: 'May 2025',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Species', href: '/species' },
          { name: 'Cardinal Tetra', href: '/species/cardinal-tetra' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Reference
              </div>
              {[
                ['Scientific name', 'Paracheirodon axelrodi'],
                ['Origin', 'Rio Negro, Orinoco (S. America)'],
                ['Adult size', '2 in / 5 cm'],
                ['Temperature', '75–82°F'],
                ['pH', '5.0–7.0 (soft acidic)'],
                ['GH', '1–8 dGH'],
                ['Min tank', '20 gal long for a school of 10+'],
                ['Diet', 'Micro-carnivore / omnivore'],
                ['Lifespan', '4–6 years'],
                ['Compatibility', 'Peaceful community'],
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
                Cardinal vs Neon
              </div>
              {[
                ['Red stripe', 'Full body (cardinal) vs half (neon)'],
                ['Adult size', '2 in vs 1.25 in'],
                ['Water', 'Softer/warmer (cardinal)'],
                ['Hardiness', 'Neon hardier for beginners'],
                ['Sourcing', 'Often wild vs always farmed'],
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
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Neon Tetra Care', href: '/species/neon-tetra' },
                { label: 'Discus Care', href: '/species/discus' },
                { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' },
                { label: 'Find an Aquarium Vet (WAVMA)', href: 'https://vets.co/find-a-vet/aquarium' },
              ]}
            />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="fish-com"
              title="The Weekly Tank"
              subtitle="Species spotlights every Thursday."
              source="species-cardinal-tetra"
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

          <CalloutBox variant="note" title="TL;DR">
            Cardinal tetras (Paracheirodon axelrodi) are blackwater micro-carnivores from
            the Rio Negro and Orinoco basins. They need soft, warm, acidic water
            (75–82°F, pH 5.0–7.0, GH 1–8) and schools of at least ten fish in a
            heavily planted tank. Wild-caught stock from Project Piaba is often more
            vivid than farm-bred stock but requires strict four-week quarantine.
            Peaceful with other small soft-water community fish; classic discus
            tank-mate.
          </CalloutBox>

          <h2>Why Cardinals Reward Effort</h2>
          <DropCap>
            Paracheirodon axelrodi was first formally described by Schultz in 1956
            and remains one of the defining ornamental fishes of the South American
            blackwater hobby. FishBase records the species across the Negro and
            Orinoco basins in Brazil, Colombia, and Venezuela, where it shoals in
            slow, tea-stained water above leaf litter and submerged wood. The
            full-length neon-blue lateral stripe and the full-body red belly are
            structural-pigment color expressions tuned for visibility in dim,
            tannin-amber light — the same conditions that make blackwater
            biotope aquaria so visually distinctive.
          </DropCap>
          <p>
            Cardinals can be kept in plain, neutral community water and will
            survive, but the species' color and lifespan track water chemistry
            closely. In hard alkaline tap water (pH 8.0+, GH 15+) cardinals are
            pale, skittish, and disease-prone, with reported lifespans of one to
            two years. In soft acidic blackwater conditions, the same fish color
            up fully, school tightly, and reach four to six years.
          </p>

          <h2>Wild-Caught vs Tank-Bred — A Real Distinction</h2>
          <p>
            Unlike the neon tetra, which is now almost entirely farm-raised in
            Southeast Asia, a meaningful fraction of cardinals in the trade are
            still wild-caught from the middle Rio Negro. The Project Piaba
            sustainable fishery — documented in peer-reviewed conservation
            literature (Chao et al., 2001) — supports thousands of riverine
            households in Brazil and provides one of the few economic incentives
            to preserve standing flooded forest rather than convert it to cattle
            pasture. The slogan "buy a fish, save a tree" originated with that
            project.
          </p>
          <p>
            Wild-caught cardinals arrive lean, often more vivid than farm stock,
            and adapted to extremely soft, acidic blackwater. They also arrive
            with whatever parasite load they accumulated in the wild and during
            transport. A strict four-week quarantine in a separate cycled tank,
            with the option to treat for camallanus nematodes and microsporidian
            parasites if symptoms appear, is non-optional. Tank-bred cardinals
            from Eastern European, Czech, or Florida breeders are somewhat more
            forgiving of slightly harder water and carry lower wild-parasite
            burdens — the better choice for a first-time cardinal keeper.
          </p>

          <h2>Water Chemistry — The Non-Negotiable Part</h2>
          <p>
            Cardinals come from blackwater systems where the water is little
            more than tannin-stained rain. FishBase records native pH as low as
            4.5 in some Rio Negro tributaries. Aquarium targets are gentler but
            still firmly in soft-acidic territory:
          </p>
          <ul>
            <li>
              <strong>Temperature:</strong> 75–82°F. The species range
              overlaps discus, which is why the two are classic biotope mates.
            </li>
            <li>
              <strong>pH:</strong> 5.0–7.0. The lower half of that range produces
              the most intense color. Stable pH matters more than hitting a
              precise number.
            </li>
            <li>
              <strong>GH:</strong> 1–8 dGH. KH should be low (under 4 dKH) to
              allow pH to drift downward naturally with tannins.
            </li>
            <li>
              <strong>Ammonia / nitrite:</strong> 0 ppm. Nitrate under 20 ppm.
            </li>
          </ul>
          <p>
            If your tap water reads GH 12+ and pH 8, RO/DI water remineralized
            with a low-mineral salt (Salty Shrimp GH+, Seachem Equilibrium at
            half-dose) is the simplest path. Indian almond leaves (Terminalia
            catappa), oak leaves, alder cones, and aquarium driftwood release
            humic and tannic acids that mildly lower pH, color the water amber,
            and have documented antifungal properties in ornamental fish
            husbandry literature.
          </p>

          <CalloutBox variant="tip" title="The blackwater biotope shortcut">
            Two Indian almond leaves per 10 gallons, replaced monthly as they
            decompose, plus a piece of seasoned driftwood, produce the
            amber-stained water cardinals evolved for — without any chemical
            buffering. Pair with a dark substrate and floating plants
            (Amazon frogbit, salvinia, dwarf water lettuce) for the most
            intense color expression.
          </CalloutBox>

          <h2>School Size — Ten Minimum</h2>
          <p>
            Cardinals are obligate schoolers. In groups under eight they are
            skittish, hide constantly, and rarely display their full color. Ten
            is the welfare minimum; fifteen to twenty in a 20-gallon-long or
            larger planted tank is the practical sweet spot for both fish
            welfare and visual impact. School cohesion — the tightness of
            coordinated movement that gives the school its visual signature
            — increases meaningfully with group size up to roughly 30 fish.
          </p>

          <h2>Diet — Small, Soft, Frequent</h2>
          <p>
            FishBase classifies cardinals as micro-carnivores feeding on small
            invertebrates, insect larvae, and zooplankton in the wild. In the
            aquarium they accept fine-grade tropical flake, crushed micro
            pellets, and frozen foods (cyclops, daphnia, baby brine shrimp,
            small bloodworm pieces) eagerly. A varied rotation between two or
            three quality staples plus frozen feedings two to three times per
            week produces the best color. Avoid generic flake heavy in wheat
            flour and grain binders — cardinals are too small to process bulky
            carbohydrates well.
          </p>

          <h2>Compatibility — Peaceful Community</h2>
          <p>
            Cardinals are textbook peaceful community fish. They are
            comfortable with other small, slow-to-moderate, soft-water species
            and are too fast to be bothered by most peaceful larger fish.
          </p>
          <p>
            <strong>Excellent tank mates:</strong> discus (classic), German
            blue rams, Apistogramma dwarf cichlids, corydoras catfish
            (especially C. sterbai for the warmer temperature overlap), Amano
            and cherry shrimp (adult shrimp; juvenile shrimp may be eaten),
            otocinclus, hatchetfish, pencilfish, other small tetras (ember,
            green neon, rummynose).
          </p>
          <p>
            <strong>Avoid:</strong> any fish large enough to swallow a
            two-inch tetra (angelfish are borderline — adult angels will eat
            small cardinals), aggressive cichlids, fin nippers (tiger barbs,
            serpae tetras), and hard-water community fish that do not share
            cardinals' soft-water requirement (mollies, platies, African
            cichlids).
          </p>

          <h2>Common Health Issues</h2>
          <ul>
            <li>
              <strong>Neon tetra disease (Pleistophora hyphessobryconis):</strong>
              Microsporidian parasite. White lesions, loss of iridescence, no
              cure. Remove and humanely euthanize affected fish (clove oil
              overdose) to prevent spore release. Quarantine is the only real
              defense.
            </li>
            <li>
              <strong>Columnaris (Flavobacterium columnare):</strong> Stress-
              and warm-water-driven bacterial infection. White cottony patches,
              often around the mouth. Treat with kanamycin or an appropriate
              antibiotic and address the underlying stressor (overstocking,
              poor water, wrong chemistry).
            </li>
            <li>
              <strong>Ich (Ichthyophthirius multifiliis):</strong> White
              salt-grain spots. Treat with elevated temperature (86°F if
              tankmates tolerate) plus a copper-free ich treatment dosed
              carefully — scaleless and small tetra species are sensitive.
            </li>
            <li>
              <strong>Camallanus nematodes:</strong> Red worms protruding from
              the vent, especially in wild-caught fish. Treat with levamisole
              or fenbendazole; consult an aquarium-experienced vet for dosing.
            </li>
          </ul>

          <p>
            For complicated cases — persistent unexplained losses, suspected
            internal infection, or any time you are dosing medication outside
            standard hobby practice — work with a vet who handles ornamental
            fish. The World Aquatic Veterinary Medical Association (WAVMA)
            maintains a referral directory; you can also use the{' '}
            <a href="https://vets.co/find-a-vet/aquarium">
              Vets.co aquarium vet finder
            </a>
            .
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
              FishBase species account: Paracheirodon axelrodi (Schultz, 1956).
              Froese, R. and D. Pauly. Editors. World Wide Web electronic
              publication.
            </li>
            <li>
              Chao, N. L. et al. (2001). Conservation and Management of
              Ornamental Fish Resources of the Rio Negro Basin, Amazonia,
              Brazil — Project Piaba. Editora da Universidade do Amazonas.
            </li>
            <li>
              IUCN Red List: Paracheirodon axelrodi assessment — Least
              Concern, population trend unknown.
            </li>
            <li>
              Lom, J. and Dyková, I. (2006). Microsporidian xenomas in fish
              seen in wider perspective. Folia Parasitologica.
            </li>
            <li>
              World Aquatic Veterinary Medical Association (WAVMA) practice
              referral directory.
            </li>
          </ul>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Cardinal Tetra — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for cardinal tetra care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/cardinal%20tetra%20tank%20setup?s=species-cardinal-tetra" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Cardinal Tetra Setup on Amazon →</a>
            <a href="/go/chewy-brand/cardinal%20tetra%20tank%20setup?s=species-cardinal-tetra" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}
