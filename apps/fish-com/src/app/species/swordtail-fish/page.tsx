import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  FAQAccordion,
  SchemaScript,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Swordtail Fish Care — Livebearer Biology, Sex ID | Fish.com',
  description:
    'Swordtails (Xiphophorus hellerii) are hard-water livebearers with documented sex change. Gender ID, community compatibility, breeding control, and color morphs.',
  path: '/species/swordtail-fish',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Swordtail Fish Care Guide',
  description:
    'Livebearer biology, gender identification, community compatibility, breeding control, and color morphs for Xiphophorus hellerii.',
  url: 'https://fish.com/species/swordtail-fish',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'How do I tell male and female swordtails apart?',
    answer:
      'Adults are easy: males have a gonopodium (a modified, rod-like anal fin) and the elongated lower caudal lobe called the sword; females have a fan-shaped anal fin and no sword. Juveniles under about an inch are difficult to sex reliably — the gonopodium has not yet differentiated. Wait until the fish is closer to 1.5–2 inches before committing to a sex.',
    answerText:
      'Adult males have a gonopodium (rod-like anal fin) and the elongated sword; females have a fan anal fin and no sword. Juveniles under an inch cannot be reliably sexed.',
  },
  {
    question: 'Can two male swordtails live together?',
    answer:
      'Not reliably. Unlike platies and guppies, male swordtails are intensely territorial toward one another, and the dominant male will chase and harass the subordinate persistently. In a heavily planted 55-gallon-plus tank with broken sightlines you may get away with it, but the default recommendation is one male per tank.',
    answerText:
      'Not reliably. Male swordtails are intensely territorial and the dominant male will chase the subordinate persistently. Default is one male per tank.',
  },
  {
    question: 'How fast do swordtails breed?',
    answer:
      'Very fast. A female stores sperm and produces a brood of 20–80 live fry approximately every 4–6 weeks. In a community tank with cover, a single male/female pair can saturate a 30-gallon tank within a year if fry survive. Population control is the keeper’s job, not the fish’s.',
    answerText:
      'A female produces 20-80 live fry every 4-6 weeks and stores sperm. A single pair can saturate a 30-gallon tank within a year if fry survive.',
  },
  {
    question: 'Do swordtails really change sex?',
    answer:
      'Sex change in Xiphophorus is documented in the ichthyology literature — late-maturing females have been observed developing male-typical traits in some populations, and the genus is a long-running model for studies of sex determination. It is uncommon in home aquaria but not mythical. The reverse (functional males becoming females) is not reliably documented.',
    answerText:
      'Sex change in Xiphophorus is documented in ichthyology literature — late-maturing females have been observed developing male traits. Uncommon in home aquaria but real.',
  },
  {
    question: 'What water do swordtails need?',
    answer:
      'Hard, slightly alkaline water. Target GH 10–25 dGH, KH 6–18 dKH, pH 7.2–8.4, temperature 70–78°F. They do badly in the soft, acidic water that suits tetras and discus. Most municipal hard-water supplies in the US Southwest and Midwest are already in range without remineralization.',
    answerText:
      'Hard, slightly alkaline water. GH 10-25, KH 6-18, pH 7.2-8.4, temperature 70-78F. They do badly in soft acidic water.',
  },
  {
    question: 'Will swordtails eat their own fry?',
    answer:
      'Yes. Like nearly all livebearers, swordtails are opportunistic and will consume fry they can catch. In a planted tank with dense floating cover (water sprite, frogbit, hornwort) a fraction of each brood survives unassisted; in a bare tank almost none do. That natural predation is the practical breeding control most keepers rely on.',
    answerText:
      'Yes. Swordtails eat fry they can catch. Dense floating plants allow some to survive; bare tanks see almost none.',
  },
  {
    question: 'Which color morphs are easiest to keep?',
    answer:
      'Standard red, red wag, and tuxedo strains are the most genetically robust because they have been line-bred for fewer generations of extreme finnage. Hi-fin and extreme lyretail varieties are more delicate, often have impaired swimming, and the lyretail-finned males have reduced breeding success because the gonopodium itself is modified.',
    answerText:
      'Red, red wag, and tuxedo are most robust. Hi-fin and lyretail varieties are more delicate and lyretail males breed poorly.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function SwordtailPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: 'Swordtail Fish Care Guide',
          subtitle:
            'Xiphophorus hellerii — named for the elongated lower caudal lobe that forms the male’s "sword." Hard-water livebearers from Mexico and Central America, intensely studied as a model for sex determination, and one of the easiest aquarium species to breed accidentally to the point of overpopulation.',
          category: 'Species Guide',
          authorName: 'Fish.com Editorial',
          authorAvatar: '🐠',
          publishedAt: 'May 2025',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Species', href: '/species' },
          { name: 'Swordtail', href: '/species/swordtail-fish' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Stats
              </div>
              {[
                ['Scientific name', 'Xiphophorus hellerii'],
                ['Adult size', '4–5 in. (males with sword)'],
                ['Temperature', '70–78°F'],
                ['pH', '7.2–8.4 — hard alkaline'],
                ['GH / KH', '10–25 / 6–18 dGH/dKH'],
                ['Diet', 'Omnivore — flake + greens'],
                ['Min tank', '30 gal for a trio'],
                ['Breeding', 'Livebearer — every 4–6 weeks'],
                ['Lifespan', '3–5 years'],
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
              title="Related Species"
              links={[
                { label: 'Platy Fish', href: '/species/platy-fish' },
                { label: 'Guppy Care', href: '/species/guppy' },
                { label: 'Molly Fish', href: '/species/molly-fish' },
                { label: 'Water Chemistry', href: '/setup/water-chemistry-guide' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="fish-com"
              title="The Weekly Tank"
              subtitle="Species spotlights every Thursday."
              source="species-swordtail"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2>The Fish in One Paragraph</h2>
          <p>
            Swordtails are hard-water livebearers from the Atlantic slope of Mexico, Belize, Guatemala,
            and Honduras. Adults reach 4–5 inches (males appear longer because of the sword
            extension; females are usually deeper-bodied). They are peaceful by community-fish
            standards, prolific by any standard, and genuinely interesting biologically — the
            genus Xiphophorus is one of the most-studied vertebrate models for sex determination
            and pigment-pattern genetics, and Xiphophorus hellerii in particular sits at the
            center of decades of work on the sex-determining region and on the maelanoma
            susceptibility of certain hybrid crosses.
          </p>

          <h2>Livebearer Biology — What Sets Them Apart</h2>
          <p>
            Swordtails are viviparous: fertilization is internal, embryos develop inside the
            female, and live fry are released fully formed. The female has a sperm-storage organ
            and can produce successive broods from a single mating for several months. That has
            three practical consequences for the keeper:
          </p>
          <ul>
            <li>
              A "female" you bought from the shop may produce fry weeks after isolation because
              she was inseminated before purchase. Do not interpret a pregnancy as proof that
              the male you currently have is the father.
            </li>
            <li>
              Brood size scales with female age and size — a first brood from a young female may
              be 10–20 fry; an adult female in good condition routinely drops 40–80, and broods of
              over 100 are reported.
            </li>
            <li>
              Successive broods come roughly every 4–6 weeks at standard tropical temperatures.
              Population control is the keeper’s job and starts before purchase, not after.
            </li>
          </ul>
          <p>
            Xiphophorus is genuinely unusual in another respect: cases of late-life
            masculinization in females are reported in the ichthyology literature, where a
            mature female develops male-typical traits — gonopodium-like anal fin morphology
            and, in some cases, sword growth. The phenomenon is uncommon in home aquaria and is
            not reversible. It is a real biological observation, not a folk myth, but it should
            not be planned around: assume the sex you observe at maturity is the sex you have.
          </p>

          <h2>Sex Identification — The Field Guide</h2>
          <p>
            <strong>Adults (1.5 inches and up).</strong> Look at the anal fin. Males have a
            gonopodium: the anal fin is rolled into a narrow, rod-like, forward-pointing
            structure used for internal fertilization. Females have a fan-shaped, triangular anal
            fin. The sword on adult males is unmistakable when present, but the gonopodium
            differentiates earlier and more reliably than the sword.
          </p>
          <p>
            <strong>Juveniles (under 1 inch).</strong> Sex is unreliable. The gonopodium has not
            differentiated and the body shape has not diverged. Pet-store "assorted juvenile"
            tubs frequently mis-sort; expect to recheck at maturity.
          </p>
          <p>
            <strong>Gravid spot.</strong> Mature females develop a dark patch on the lower
            abdomen just forward of the anal fin. It darkens through the pregnancy and is most
            visible 24–72 hours before parturition. The gravid spot is not by itself diagnostic
            of sex — pregnant females have it; non-pregnant females may not.
          </p>

          <h2>Community Compatibility</h2>
          <p>
            Swordtails are peaceful toward other species under normal conditions and are a
            common pick for community tanks with hard, slightly alkaline water. The two
            qualifications worth knowing:
          </p>
          <ul>
            <li>
              <strong>Mild fin-nipping toward slow tankmates.</strong> Active swordtails will
              occasionally pick at long-finned, slow-moving fish (most often male bettas,
              halfmoon-finned guppy males, and full-grown veiltail angelfish). It is not the
              relentless harassment a serpae tetra delivers, but it is enough to keep
              long-finned showpieces out of a swordtail community.
            </li>
            <li>
              <strong>Male-on-male aggression within the species.</strong> Two males in a
              30-gallon tank will fight persistently; three or more males with broken sightlines
              in a 55+ gallon spread aggression around enough that no single fish bears the
              full burden. The single-male trio with two or more females is the standard stable
              configuration.
            </li>
          </ul>
          <p>
            Good tankmates: platies (compatible water chemistry, similar size, similar
            temperament), corydoras (peaceful bottom-dwellers in the same hardness range),
            rainbowfish (active, similarly bold), cherry barbs, peaceful rasboras in larger
            tanks. Bad tankmates: tiger barbs (will harass the swords), Endler-strain guppy males
            (the swordtails will pick at the fins), discus or cardinal tetras (incompatible
            water chemistry — discus want soft acidic; swordtails want hard alkaline).
          </p>

          <h2>Water and Tank Setup</h2>
          <p>
            Target hard, alkaline water: GH 10–25 dGH, KH 6–18 dKH, pH 7.2–8.4, temperature
            70–78°F. Most US municipal water in the Southwest, Midwest, and Texas Hill Country
            falls into that range without intervention. In soft-water regions, remineralize RO
            water with a livebearer-targeted salt blend (Seachem Equilibrium plus a KH source
            such as Seachem Alkaline Buffer) or add aragonite sand or crushed coral to the filter.
          </p>
          <p>
            Tank size: 30 US gallons is the working minimum for a trio (one male, two females).
            Larger groups need more horizontal swimming length than depth — 48-inch tanks
            (40-gallon breeder, 55-gallon) suit them better than 30-inch cubes. Plant heavily on
            the sides and back, leave the middle open for swimming, and float water sprite,
            frogbit, or hornwort across the top to give fry a survival corridor.
          </p>
          <p>
            Diet: omnivore. A quality flake or pellet (Omega One Veggie Flakes, Hikari Tropical
            Micro Pellets) as the staple, supplemented two to three times a week with frozen
            bloodworms or daphnia and a vegetable component (blanched zucchini, spirulina wafer).
            Swordtails take more plant matter in the diet than other livebearers and benefit from
            an algae-friendly tank or supplemental greens.
          </p>

          <h2>Breeding Control — Three Workable Strategies</h2>
          <p>
            Swordtails breed fast enough that "what to do about the fry" should be a planning
            question before purchase, not a panic question six months in. The three approaches
            that actually work:
          </p>
          <ol>
            <li>
              <strong>Single-sex tank.</strong> Buy only females (or only males, accepting the
              one-per-tank constraint). The shop-stored-sperm caveat applies: a "female-only"
              group from a community shop tank may still produce a brood or two from sperm stored
              before purchase. After 3–4 months without males, that supply is exhausted.
            </li>
            <li>
              <strong>Predator dithers as fry control.</strong> A tank with adult angelfish,
              larger gouramis, or a small group of leopard danios will eat most fry as they are
              born. A handful survive in heavily planted tanks; the rest become live food for the
              other residents. This is the lowest-effort population control for an established
              community.
            </li>
            <li>
              <strong>Active fry separation.</strong> Move visibly gravid females to a breeding
              box or breeder net before parturition, release the female back into the main tank
              after the brood is dropped, and grow the fry out for sale or trade. This is the
              high-effort path; it is also how local fish stores get stock.
            </li>
          </ol>
          <p>
            What does not work: relying on the fish to "self-regulate." They do not. Without
            predation or removal, a single trio fills a 30-gallon tank within a year, ammonia
            climbs, growth stunts, and a population crash follows. Plan the outflow before you
            buy the inflow.
          </p>

          <h2>Common Color Morphs</h2>
          <ul>
            <li>
              <strong>Red swordtail.</strong> Solid vivid red body with the classic sword. The
              baseline aquarium morph and the most robust.
            </li>
            <li>
              <strong>Red wag swordtail.</strong> Red body with black fins. "Wag" describes the
              contrast pattern; the strain is hardy and widely available.
            </li>
            <li>
              <strong>Pineapple (Berlin) swordtail.</strong> Yellow-orange body with dark-edged
              scales producing a pineapple pattern. Slightly more delicate than the red wag.
            </li>
            <li>
              <strong>Tuxedo swordtail.</strong> Contrasting dark and light pattern, usually red
              over black. Stable strain, well-suited to community display.
            </li>
            <li>
              <strong>Lyretail swordtail.</strong> Both upper and lower caudal lobes elongated
              symmetrically. Visually striking but lyretail males have a modified gonopodium
              that reduces breeding success — useful if you are trying to suppress reproduction.
            </li>
            <li>
              <strong>Koi (Kohaku) swordtail.</strong> Red, white, and sometimes black blocks of
              color, mimicking koi patterning. A newer line; quality is uneven and the strongest
              specimens come from dedicated livebearer breeders rather than chain pet stores.
            </li>
            <li>
              <strong>Hi-fin swordtail.</strong> Greatly extended dorsal fin. Dramatic, but the
              tall dorsal is more easily damaged and the fish needs broken-up flow to avoid
              fin-rip on intakes.
            </li>
          </ul>

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
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Swordtail Fish — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for swordtail fish care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/swordtail%20fish%20tank%20setup?s=species-swordtail-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Swordtail Fish Setup on Amazon →</a>
            <a href="/go/chewy-brand/swordtail%20fish%20tank%20setup?s=species-swordtail-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}
