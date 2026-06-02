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
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Corydoras Catfish Care Guide — Sand, School, Species | Fish.com',
  description:
    'Corydoras catfish need sand substrate, schools of 6+ same species, and clean water. Bronze, Pepper, Panda, Sterbai, Albino — peaceful community bottom-dwellers.',
  path: '/species/corydoras',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Corydoras Catfish Care Guide',
  description:
    'Bottom-dwelling South American catfish — sand substrate requirement, schooling needs, species variety, and community compatibility.',
  url: 'https://fish.com/species/corydoras',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Species', url: 'https://fish.com/species' },
    { name: 'Corydoras', url: 'https://fish.com/species/corydoras' },
  ],
})

const FAQS = [
  {
    question: 'Do corydoras really need a school of six?',
    answer:
      'Yes — and ideally of the same species. Corydoras are obligate shoalers; in groups of one or two they hide constantly, eat poorly, and rarely show natural behavior. The minimum is six of the same species; ten to twelve is meaningfully better for visible activity and social interaction. A "mixed cory community" of two each of three species is not equivalent — cories school primarily with conspecifics, not generally with other Corydoras.',
    answerText:
      'Yes, six minimum of the same species. Cories shoal with conspecifics, so two each of three species does not work the same way.',
  },
  {
    question: 'Can I keep corydoras on gravel?',
    answer:
      'Strongly recommended against. Corydoras forage by pushing sensitive barbels (the whisker-like sensory organs around the mouth) through the substrate. Sharp or coarse gravel abrades and erodes the barbels over time, causing infection and eventually loss. Cories with shortened or missing barbels were almost certainly kept on inappropriate substrate. Fine sand — pool filter sand is the most economical option — is the correct choice. Smooth, very fine gravel (sub-2mm) is a distant second option; standard aquarium gravel is wrong.',
    answerText:
      'No — sharp gravel damages barbels. Use fine sand (pool filter sand is ideal). Smooth sub-2mm gravel is a distant second option.',
  },
  {
    question: 'Which corydoras species is best for a warm-water tank?',
    answer:
      'Corydoras sterbai. Most corydoras prefer cooler tropical water (72–78°F) — too cool for discus, German blue rams, and most warm-water community species. C. sterbai is the well-documented exception, comfortable up to 82–84°F, making it the only corydoras commonly recommended for discus and warm-water Amazonian biotopes. Sterbai is distinctly spotted; do not confuse it with the visually similar but warm-intolerant C. haraldschultzi.',
    answerText:
      'C. sterbai handles 82-84°F comfortably and is the standard corydoras for discus and warm-water tanks. Do not confuse with C. haraldschultzi.',
  },
  {
    question: 'Do corydoras eat algae?',
    answer:
      'No — this is a common misconception. Corydoras are omnivorous scavengers that eat what falls to the substrate (small invertebrates, sinking pellets, leftover flake) — they do not graze algae the way plecos or otocinclus do. If you bought corydoras for algae control, you need a different fish. Feed them actively with sinking wafers and frozen foods; do not rely on "leftovers" — that strategy results in slow, hidden malnutrition.',
    answerText:
      'No, corydoras are scavengers not algae-eaters. They need active feeding with sinking wafers and frozen foods. For algae, choose otocinclus or bristlenose pleco.',
  },
  {
    question: 'Are corydoras safe with shrimp?',
    answer:
      'Yes — corydoras are among the safest tankmates for adult dwarf shrimp (cherry, Amano, neocaridina). Their small, soft mouths cannot eat adult shrimp, and they are too peaceful to harass them. Newly hatched shrimplets the first few days after birth may be eaten opportunistically, so a shrimp-breeding setup benefits from heavy moss cover for fry refuge. Outside that brief window, shrimp and corydoras coexist excellently.',
    answerText:
      'Yes, corydoras cannot eat adult shrimp and do not harass them. Newly hatched shrimplets may be eaten without heavy moss cover for refuge.',
  },
  {
    question: 'Why are my corydoras dashing to the surface and back?',
    answer:
      'Likely normal. Corydoras are facultative air-breathers — they have a modified intestine that lets them swallow atmospheric air at the surface and absorb oxygen through the gut. The dash-to-surface-and-back is the gulp behavior. Occasional gulps are normal; constant, frantic, repeated surface gulping indicates the dissolved oxygen in the tank is too low (rising temperature, inadequate aeration, ammonia damaging gills). Test water and check filtration if the behavior becomes frequent.',
    answerText:
      'Normal air-gulping via modified gut. Frequent frantic gulping indicates low dissolved oxygen — test water and check filtration.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

export default function CorydorasPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: 'Corydoras Catfish Care Guide',
          subtitle:
            'Corydoras spp. — corydoras are the most widely kept bottom-dwelling fish in the freshwater hobby. Peaceful, active, fascinating to watch, and available across more than 170 described species ranging from the pygmy cory at 1 inch to the emerald catfish at 3.5 inches. One rule applies to all of them: groups of six or more of the same species, on smooth sand, in a peaceful community.',
          category: 'Species Guide',
          authorName: 'Fish.com Editorial',
          authorAvatar: '🐟',
          publishedAt: 'May 2025',
          readTime: '13 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Species', href: '/species' },
          { name: 'Corydoras', href: '/species/corydoras' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Reference
              </div>
              {[
                ['Genus', 'Corydoras (170+ species)'],
                ['Origin', 'South America (Amazon, Orinoco)'],
                ['Adult size', '1–3.5 in by species'],
                ['Temperature', '72–78°F (sterbai to 84°F)'],
                ['pH', '6.5–7.5 (most species)'],
                ['GH', '2–15 dGH'],
                ['Substrate', 'Smooth sand — non-negotiable'],
                ['Min school', '6 of same species'],
                ['Diet', 'Omnivore scavenger'],
                ['Lifespan', '5–8 years'],
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
                Popular Species
              </div>
              {[
                ['Bronze (C. aeneus)', '3 in · Hardy · Most common'],
                ['Albino (C. aeneus)', '3 in · Color morph of bronze'],
                ['Pepper (C. paleatus)', '2.5 in · Cooler tolerant'],
                ['Panda (C. panda)', '2 in · Black/white pattern'],
                ['Sterbai (C. sterbai)', '2.7 in · Warm tolerant 84°F'],
                ['Pygmy (C. pygmaeus)', '1 in · Mid-water swimmer'],
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
                { label: 'Kuhli Loach', href: '/species/kuhli-loach' },
                { label: 'Otocinclus Care', href: '/species/otocinclus' },
                { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' },
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
              source="species-corydoras"
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
            Corydoras catfish are peaceful South American bottom-dwellers
            that require three things to thrive: smooth sand substrate
            (sharp gravel damages their sensory barbels), a school of at
            least six of the same species (not mixed), and clean
            well-oxygenated water. Bronze (C. aeneus), Pepper
            (C. paleatus), Panda (C. panda), Sterbai (C. sterbai), and
            Albino (C. aeneus color morph) are the most accessible
            species. Excellent community fish; safe with adult shrimp.
          </CalloutBox>

          <h2>The Group Rule — Six Minimum, Same Species</h2>
          <DropCap>
            Corydoras are social catfish that shoal by species. A group of
            six mixed species — two panda cories, two sterbai, two
            paleatus — does not function as a cohesive social unit the way
            six panda cories do. Each species shoals primarily with
            conspecifics. The taxonomic literature on Corydoras (Reis,
            2003; Britto, 2003) treats the genus as a complex of more
            than 170 described species and likely many more undescribed
            forms — and field observations confirm that species mix only
            occasionally in the wild. In the aquarium, mixed-species
            groups produce less confident, less active fish that hide
            more and shoal less.
          </DropCap>
          <p>
            Six of the same species is the welfare minimum. Ten to twelve
            is meaningfully better — the group dynamics shift from
            "occasionally interacting individuals" to coordinated foraging
            and spawning behavior. The one common exception: the dwarf
            corydoras complex (C. pygmaeus, C. habrosus, C. hastatus)
            interact across their three miniature species and can be
            mixed effectively. These also swim in the middle of the water
            column rather than the bottom, unlike most other corydoras.
          </p>

          <h2>Sand Substrate — Non-Negotiable</h2>
          <p>
            Corydoras forage by pushing their sensitive barbels — the
            whisker-like sensory organs around the mouth — through the
            substrate to find food. Coarse gravel and sharp substrates
            abrade these barbels over time, causing erosion, opportunistic
            bacterial infection, and eventual loss. A corydoras with
            missing or shortened barbels has been kept on inappropriate
            substrate; the damage is partially reversible if the substrate
            is corrected early, but advanced barbel loss is permanent.
          </p>
          <p>
            Fine sand (pool filter sand, CaribSea Super Naturals, or play
            sand rinsed thoroughly) is the right choice. Pool filter sand
            is the most economical option, widely available at hardware
            stores, and works excellently. Sand depth of two inches or
            more supports the species that occasionally burrow. Corydoras
            also swallow sand during foraging and expel it through their
            gills — this is normal behavior, not disease, and fine sand
            is small enough to pass through safely.
          </p>

          <CalloutBox variant="warning" title="Check barbels at every water change">
            Full-length, intact barbels indicate correct substrate and
            good water quality. Shortened, eroded, or absent barbels
            indicate a substrate problem (switch to fine sand immediately)
            or chronically poor water quality (elevated ammonia or
            nitrate). Barbel erosion in progress may partially recover on
            correct substrate if the underlying cause is addressed before
            complete loss.
          </CalloutBox>

          <h2>Species — Picking the Right Corydoras</h2>
          <p>
            The taxonomic genus Corydoras contains over 170 described
            species, with regular new descriptions still appearing in the
            peer-reviewed literature (Reis, 2003 onward). For the typical
            home aquarium, a handful of species dominate the trade:
          </p>
          <ul>
            <li>
              <strong>Bronze corydoras (C. aeneus):</strong> The most
              widely kept species. Hardy, adaptable, available in standard
              (olive-bronze), albino, and "black" line-bred variants.
              Reaches three inches. The best first-corydoras species.
            </li>
            <li>
              <strong>Pepper corydoras (C. paleatus):</strong> Mottled
              grey-and-black pattern. Tolerates cooler water than most
              corydoras (down to 68°F) — useful for goldfish-adjacent
              setups and unheated rooms in temperate climates.
            </li>
            <li>
              <strong>Panda corydoras (C. panda):</strong> Distinctive
              white body with black eye-mask and tail patches. Smaller
              (two inches) and somewhat more delicate than bronze or
              pepper; benefits from a well-established tank.
            </li>
            <li>
              <strong>Sterbai corydoras (C. sterbai):</strong> Heavily
              spotted, with red-orange pectoral fin spines. The standard
              corydoras for warm-water tanks (handles 82–84°F) — the
              only common cory commonly recommended for discus tanks.
            </li>
            <li>
              <strong>Albino corydoras:</strong> Albino color morph of
              C. aeneus (and occasionally C. paleatus, marketed simply as
              "albino"). Identical care to the wild-type form. Slightly
              more sensitive to bright lighting because of the lack of
              pigment.
            </li>
            <li>
              <strong>Pygmy corydoras (C. pygmaeus):</strong> True
              dwarf species, about one inch adult size. Swims in the
              mid-water column rather than the bottom. Excellent for
              planted nano tanks with shrimp.
            </li>
          </ul>

          <h2>Tank Setup</h2>
          <p>
            A 20-gallon-long tank is the practical minimum for a group of
            six standard corydoras (C. aeneus, C. paleatus, C. sterbai).
            The long footprint matters more than the volume — corydoras
            use horizontal floor space far more than height. Pygmy
            corydoras can be kept in a 10-gallon planted tank in
            appropriate groups.
          </p>
          <ul>
            <li>
              <strong>Filtration:</strong> Standard tropical filtration
              (sponge filter, hang-on-back, or canister). Corydoras
              appreciate moderate water flow with calm zones.
            </li>
            <li>
              <strong>Plants and decor:</strong> Broad-leaved plants
              (Anubias, Java fern, Amazon sword) for cover, some
              driftwood, and a few caves or terra cotta hides. Avoid
              sharp-edged decor.
            </li>
            <li>
              <strong>Lighting:</strong> Moderate. Corydoras are
              comfortable under planted-tank lighting; very bright
              high-output lighting can stress them unless plenty of
              shaded cover is provided.
            </li>
            <li>
              <strong>Water care:</strong> Weekly 25–30% water changes,
              ammonia and nitrite at 0 ppm, nitrate under 20 ppm.
              Corydoras are unusually sensitive to nitrate accumulation
              and tank-water aging.
            </li>
          </ul>

          <h2>Diet — Active Feeding Required</h2>
          <p>
            Corydoras are omnivorous scavengers — they eat what falls to
            the substrate — but they are not "cleanup crew" and do not
            survive on leftovers. Active feeding is required. Standard
            menu: sinking wafers or pellets (Hikari Sinking Wafers,
            Omega One Veggie Rounds, Bug Bites Pleco Formula) as the
            staple, plus frozen bloodworms, brine shrimp, and daphnia
            two or three times per week. Feed shortly after lights-out,
            placing food near the corydoras' usual foraging area so
            faster mid-water feeders don't take it all.
          </p>

          <h2>Spawning — A Sign of Good Care</h2>
          <p>
            Corydoras spawning is one of the most reliable indicators of
            good husbandry: the fish only breed when temperature, water
            quality, and group dynamics are right. They spawn in
            response to water temperature drops that mimic the rainy
            season in their native South American range. A partial water
            change with water 5–10°F cooler than the tank often
            triggers spawning behavior within hours. The classic
            "T-position" (male perpendicular to female with eggs being
            fertilized between her pelvic fins) is one of the most
            recognizable courtship behaviors in any aquarium fish.
          </p>
          <p>
            Eggs are deposited on glass, plants, and decor. Parents do
            not guard them and adults will eat eggs and fry. For
            survival, remove eggs to a separate small container with
            gentle aeration and a drop of methylene blue to prevent
            fungus. Fry hatch in 3–5 days and accept micro worms or
            baby brine shrimp after the yolk sac is absorbed.
          </p>

          <h2>Compatibility — The Ideal Community Fish</h2>
          <p>
            Corydoras are textbook peaceful community fish — they
            tolerate almost any non-aggressive tankmate and are too
            small and too low in the water column to bother other fish.
          </p>
          <p>
            <strong>Excellent tank mates:</strong> tetras (neon,
            cardinal, ember, rummynose, black skirt), small barbs
            (cherry, rosy), rasboras (harlequin, chili), gouramis
            (peaceful species), discus and rams (C. sterbai only —
            warm-water match), livebearers (platies, mollies in
            unsalted tanks, guppies), bettas in larger tanks, dwarf
            cichlids (Apistogramma, Bolivian rams), Amano and
            neocaridina shrimp (adults safe).
          </p>
          <p>
            <strong>Avoid:</strong> aggressive cichlids (oscars, jack
            dempseys, mbuna), large fin-nippers, fish large enough to
            eat a 2-3 inch catfish, and any species that requires
            salted water (corydoras do not tolerate aquarium salt
            well).
          </p>

          <h2>Common Health Issues</h2>
          <ul>
            <li>
              <strong>Barbel erosion:</strong> Discussed above —
              substrate or water-quality problem. Switch to sand and
              correct water quality.
            </li>
            <li>
              <strong>Ich (Ichthyophthirius multifiliis):</strong>
              Corydoras are scaleless and sensitive to copper-based
              and full-strength ich medications. Use heat treatment
              (86°F if tankmates tolerate) plus a half-dose
              ich-X-style formulation, dosed carefully.
            </li>
            <li>
              <strong>Red blotch disease:</strong> Bacterial; red,
              ulcerated patches on the body. Improve water quality and
              treat with appropriate antibiotic. Often associated with
              prolonged poor conditions.
            </li>
            <li>
              <strong>Bloat:</strong> Distended belly from
              constipation or internal infection. Fast for 2–3 days
              and offer daphnia (mildly laxative). Persistent or
              progressive bloat indicates internal disease.
            </li>
            <li>
              <strong>Stress from poor cycling:</strong> Corydoras are
              unusually sensitive to ammonia and nitrite in
              under-cycled tanks. Never add corydoras to a tank under
              four weeks old.
            </li>
          </ul>
          <p>
            For complicated cases, consult an ornamental-fish vet via
            the{' '}
            <a href="https://vets.co/find-a-vet/aquarium">
              Vets.co aquarium vet finder
            </a>{' '}
            (WAVMA referral directory). Corydoras' medication
            sensitivity makes professional dosing guidance
            particularly valuable.
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
              FishBase genus account: Corydoras Lacépède, 1803.
              Froese, R. and D. Pauly. Editors.
            </li>
            <li>
              Reis, R. E. (2003). Family Callichthyidae (Armored
              catfishes). In: Check List of the Freshwater Fishes of
              South and Central America. EDIPUCRS, Porto Alegre.
              Peer-reviewed taxonomic catalog.
            </li>
            <li>
              Britto, M. R. (2003). Phylogeny of the subfamily
              Corydoradinae Hoedeman, 1952 (Siluriformes:
              Callichthyidae), with a definition of its genera.
              Proceedings of the Academy of Natural Sciences of
              Philadelphia 153: 119–154.
            </li>
            <li>
              IUCN Red List assessments for individual Corydoras
              species.
            </li>
            <li>
              World Aquatic Veterinary Medical Association (WAVMA)
              practice referral directory.
            </li>
          </ul>
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Corydoras — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for corydoras care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/corydoras%20tank%20setup?s=species-corydoras" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Corydoras Setup on Amazon →</a>
            <a href="/go/chewy-brand/corydoras%20tank%20setup?s=species-corydoras" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}
