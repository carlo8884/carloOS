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
  title: 'Platy Fish Care Guide — Color Varieties, Sex ID | Fish.com',
  description:
    'Platies (Xiphophorus maculatus) are the most beginner-friendly livebearer. Color morphs, sex identification, breeding control, and community compatibility.',
  path: '/species/platy-fish',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Platy Fish Care Guide',
  description:
    'Xiphophorus maculatus — color morphs, livebearer sex identification, breeding control, and community compatibility for beginners.',
  url: 'https://fish.com/species/platy-fish',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Species', url: 'https://fish.com/species' },
    { name: 'Platy Fish', url: 'https://fish.com/species/platy-fish' },
  ],
})

const FAQS = [
  {
    question: 'Are platies really the easiest livebearer to keep?',
    answer:
      'For most beginners, yes. Platies (Xiphophorus maculatus) tolerate a wider range of water chemistry than guppies, swordtails, or mollies; they accept harder, more alkaline tap water that matches many US municipal supplies without modification; and they breed less aggressively than guppies. Mature platies are robust enough that beginner mistakes (a slightly under-cycled tank, irregular water changes, forgotten heater) rarely kill them outright. Guppies are smaller and more colorful but more disease-prone; mollies need more water volume and prefer brackish; swordtails grow larger and males can be territorial.',
    answerText:
      'For most beginners yes. Platies tolerate hard alkaline tap water and breed less aggressively than guppies. Guppies are more disease-prone, mollies need more water and salt, swordtails grow larger.',
  },
  {
    question: 'How do I tell male from female platies?',
    answer:
      'Look at the anal fin. In males, the anal fin is modified into a tube-like reproductive organ called a gonopodium — narrow, pointed, and held close to the body. In females, the anal fin is a normal triangular fan shape. Males also tend to be slightly smaller and more brightly colored; females are larger and have a rounder belly that becomes obvious when gravid. Sex is identifiable from about 8–10 weeks of age.',
    answerText:
      'Males have a tube-shaped gonopodium for an anal fin; females have a normal fan-shaped anal fin. Males are smaller and brighter; females larger with rounder bellies.',
  },
  {
    question: 'How fast do platies breed?',
    answer:
      'Very fast. A healthy mature female gives birth roughly every 28 days to a batch of 20–80 fry, depending on size and age. Females store sperm and can produce several broods after a single mating. Without active management — single-sex group, predation in a community tank, or rehoming — a starter tank with two males and three females can produce 100+ fish in three months.',
    answerText:
      'A mature female produces 20-80 fry every 28 days and stores sperm for multiple broods from one mating. Active management is required.',
  },
  {
    question: 'What is the difference between a platy and a swordtail?',
    answer:
      'Platies (Xiphophorus maculatus and X. variatus) and swordtails (Xiphophorus helleri) are closely related members of the same genus, native to Mexico and Central America (Kallman & Kazianis, 2006). Platies stay small (about 2.5 inches) with a normal tail. Swordtail males develop the species\' signature elongated lower tail-fin extension up to 2 inches long. Care is essentially identical except swordtails need 20+ gallons and grow to 4–5 inches. Platies and swordtails hybridize readily in the aquarium — keep them separately if you want pure offspring.',
    answerText:
      'Platies stay ~2.5 in with a normal tail. Swordtails grow to 4-5 in, males develop a tail-fin sword. Same genus, hybridize readily. Care is essentially identical.',
  },
  {
    question: 'My platy is hiding and clamping its fins — what is wrong?',
    answer:
      'Clamped fins and hiding are the broad-spectrum platy distress signal. Most common causes, in order of frequency: poor water quality (test ammonia, nitrite, nitrate), wrong temperature (verify heater is working), stress from new tankmates or transport, ich or other parasitic disease (look for white spots, scraping behavior, rapid gill movement). Run a full water test before assuming illness — most platy problems are water-quality problems first.',
    answerText:
      'Most likely water quality issue. Test ammonia/nitrite/nitrate first, verify temperature, then check for ich or other disease.',
  },
  {
    question: 'Can platies live in an unheated tank?',
    answer:
      'Platies tolerate a wider temperature range than most tropical fish — FishBase lists 65–80°F — so a room that stays consistently above 68°F may not strictly require a heater. But "tolerate" is not "thrive": below 72°F, platies eat less, color fades, and the immune system slows. A small adjustable heater holding 74–78°F is inexpensive insurance and recommended for any platy tank.',
    answerText:
      'They tolerate 65-80°F but thrive at 74-78°F. A heater is recommended even though they can survive briefly without one.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

export default function PlatyPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: 'Platy Fish Care Guide',
          subtitle:
            'Xiphophorus maculatus — platies are among the most forgiving and broadly recommended fish in the freshwater hobby. They tolerate a wide range of water conditions, eat almost anything, coexist peacefully with virtually all community fish, and come in dozens of color and finnage varieties. The one consistent management challenge: they breed every four weeks and a starter tank turns into a population without intervention.',
          category: 'Species Guide — Beginner',
          authorName: 'Fish.com Editorial',
          authorAvatar: '🐟',
          publishedAt: 'May 2025',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Species', href: '/species' },
          { name: 'Platy Fish', href: '/species/platy-fish' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Reference
              </div>
              {[
                ['Scientific name', 'Xiphophorus maculatus'],
                ['Origin', 'Mexico, Belize, Guatemala'],
                ['Adult size', '2.5 in (females larger)'],
                ['Temperature', '65–80°F (74–78°F ideal)'],
                ['pH', '7.0–8.2 (hard alkaline)'],
                ['GH', '10–25 dGH'],
                ['Min tank', '10 gal — 20 gal for a group'],
                ['Diet', 'Omnivore — flake/pellet/frozen'],
                ['Lifespan', '3–5 years'],
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
                Popular Color Morphs
              </div>
              {[
                ['Red wag', 'Red body, black tail and fins'],
                ['Sunset', 'Yellow head fading to red tail'],
                ['Blue mirror', 'Metallic blue body'],
                ['Pineapple', 'Yellow-orange with red tail edge'],
                ['Mickey Mouse', 'Three black spots at tail base'],
                ['Tuxedo', 'Two-tone with dark lower half'],
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
                { label: 'Guppy Care', href: '/species/guppy' },
                { label: 'Molly Fish Care', href: '/species/molly-fish' },
                { label: 'Swordtail Care', href: '/species/swordtail-fish' },
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
              source="species-platy"
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
            Platies (Xiphophorus maculatus) are the textbook beginner
            livebearer: hardy, adaptable to hard alkaline tap water,
            peaceful in community tanks, and available in dozens of color
            morphs. They reach about 2.5 inches and live 3–5 years.
            Females breed every four weeks and store sperm — so the
            single planning decision before purchase is whether you want
            a single-sex group (no fry) or a breeding population (active
            management required).
          </CalloutBox>

          <h2>Why Platies Are the Default Beginner Recommendation</h2>
          <DropCap>
            Xiphophorus maculatus was first described by Günther in 1866
            from specimens collected in southern Mexico, and the species
            has been in the aquarium trade since the early twentieth
            century. FishBase records the native range as Atlantic-slope
            streams and lagoons from Veracruz, Mexico through Belize and
            northern Guatemala — slow-moving, hard, mineral-rich water
            that lines up neatly with the alkaline tap water of most US
            cities. That ecological match is the single biggest reason
            platies tolerate beginner mistakes: their preferred conditions
            are what comes out of the faucet in most of the country, so
            keepers do not have to remineralize, acidify, or otherwise
            manipulate chemistry to keep them alive.
          </DropCap>
          <p>
            Beyond chemistry, platies are forgiving in temperature
            (functional from 65°F to 80°F), accept any standard tropical
            food (flake, micro pellet, frozen, freeze-dried), coexist
            peacefully with virtually all non-aggressive community fish,
            and reach sexual maturity reliably enough that captive
            breeding is essentially automatic. The same conditions kill
            discus or cardinal tetras in days; a platy will eat through
            them and ask for breakfast.
          </p>

          <h2>Color Morphs — A Century of Selective Breeding</h2>
          <p>
            Over a century of aquarium breeding has produced dozens of
            named platy color and finnage varieties. The basic care is
            identical across all of them; choose on appearance. Popular
            named morphs:
          </p>
          <ul>
            <li>
              <strong>Red wag platy:</strong> Solid red body with jet-black
              tail and fins. One of the most striking color contrasts in
              any common freshwater fish.
            </li>
            <li>
              <strong>Sunset platy:</strong> Gradient from yellow at the
              head through orange to red at the tail. Stable across the
              variety.
            </li>
            <li>
              <strong>Blue mirror / blue platy:</strong> Metallic blue
              body produced by structural iridescence. The blue intensity
              varies with lighting angle and tank background.
            </li>
            <li>
              <strong>Pineapple platy:</strong> Yellow-orange body with red
              edges on the tail fin.
            </li>
            <li>
              <strong>Mickey Mouse platy:</strong> Pale body with three
              black spots at the tail base in an arrangement that
              resembles the Disney character — hence the name. One of the
              most consistently popular novelty morphs.
            </li>
            <li>
              <strong>Tuxedo platy:</strong> Two-tone body with the bottom
              half dark and the top half a contrasting color.
            </li>
            <li>
              <strong>Hi-fin platy:</strong> Extended dorsal fin morph
              available in most color combinations. The dorsal fin is more
              vulnerable to nipping and rot than the standard form.
            </li>
          </ul>

          <h2>Sex Identification and Breeding Control</h2>
          <p>
            Sex identification is straightforward in platies. Males have a
            modified anal fin called a gonopodium — a narrow, elongated,
            tube-shaped reproductive organ held close to the body and used
            to deliver sperm to females. Females have a normal triangular
            fan-shaped anal fin. Males also tend to be slightly smaller
            and more intensely colored; females are larger with rounder
            bellies that become visibly squared off when gravid. Sex is
            reliably distinguishable from roughly 8–10 weeks of age.
          </p>
          <p>
            Females are ovoviviparous livebearers — fertilized eggs
            develop internally and emerge as free-swimming fry every
            28 days. Brood size ranges 20–80 fry depending on female age
            and size. Females also store sperm and can produce several
            broods from a single mating, so separating a pregnant female
            does not stop reproduction immediately.
          </p>

          <CalloutBox variant="tip" title="Breeding management at a glance">
            <strong>No fry desired:</strong> all-male group of 4–6.
            Displays full color, never reproduces.<br />
            <strong>Some fry desired:</strong> mixed group in a heavily
            planted community tank — predation by adults limits
            population growth.<br />
            <strong>Maximum fry:</strong> separate gravid females to a
            breeding box or fry tank a few days before parturition.
          </CalloutBox>

          <h2>Tank Setup and Care</h2>
          <p>
            Ten gallons is the practical minimum for a small group;
            twenty gallons supports a healthy mixed-age population without
            stocking pressure. A standard sponge filter or hang-on-back
            handles the bioload easily. Substrate is unimportant for
            platies themselves — they are mid-to-upper water column fish
            — but matters for plants and any bottom-dwelling tankmates.
            Lighting is also flexible; live plants benefit, but platies
            do not specifically require dim or bright conditions.
          </p>
          <p>
            Water care is the standard tropical freshwater routine: weekly
            25% water change, ammonia and nitrite at 0 ppm, nitrate under
            20 ppm. Platies handle missed water changes better than most
            tropical fish but accumulating nitrate still shortens
            lifespan.
          </p>

          <h2>Diet</h2>
          <p>
            Platies are omnivores that lean toward vegetable matter in
            the wild. A quality tropical staple flake or micro-pellet
            (Hikari, Omega One, New Life Spectrum) supplied twice daily
            in small portions is the foundation. Supplement two or three
            times per week with frozen daphnia, brine shrimp, or
            bloodworms, and weekly with blanched zucchini, spinach, or a
            veggie wafer. Overfeeding is the most common care mistake —
            uneaten food drives ammonia spikes and platy obesity
            (visibly swollen belly without gravid pregnancy) is a real
            problem in casually fed tanks.
          </p>

          <h2>Compatibility — Peaceful Community Fish</h2>
          <p>
            Platies are textbook peaceful community fish that get along
            with virtually any non-aggressive species sharing their
            hard-water preference.
          </p>
          <p>
            <strong>Excellent tank mates:</strong> guppies, mollies,
            swordtails, Endler's livebearers, zebra and giant danios,
            larger tetras (von Rio, lemon, black skirt), corydoras
            catfish, bristlenose plecos, dwarf gouramis (peaceful
            individuals), cherry barbs, mystery snails, nerite snails.
          </p>
          <p>
            <strong>Avoid:</strong> aggressive cichlids (oscar, jack
            dempsey, Mbuna), large predators that will eat 2-inch fish,
            and species requiring opposite water conditions
            (discus, cardinal tetras, German blue rams — all soft
            acidic).
          </p>

          <h2>Common Health Issues</h2>
          <ul>
            <li>
              <strong>Ich (Ichthyophthirius multifiliis):</strong>
              Classic white salt-grain spots. Treat with elevated
              temperature (86°F) plus a commercial ich treatment.
              Platies tolerate the full treatment protocol.
            </li>
            <li>
              <strong>Fin rot:</strong> Ragged, eroding fin edges.
              Bacterial; address poor water quality and treat with an
              appropriate antibiotic.
            </li>
            <li>
              <strong>Mycobacteriosis ("livebearer disease"):</strong>
              Slow wasting, hollow belly, spinal curvature, especially
              in inbred farm-raised stock. No reliable cure — humane
              euthanasia of obviously sick fish and sourcing from
              quality breeders is the realistic response.
            </li>
            <li>
              <strong>Constipation / swim bladder issues:</strong>
              Overfed platies float at the surface or hang at unusual
              angles. Fast for 2–3 days then offer daphnia (mildly
              laxative); reduce regular feeding portions.
            </li>
            <li>
              <strong>Gravid stress:</strong> Females stressed by
              chasing males during late pregnancy can deliver early or
              abort the brood. Heavily plant the tank or temporarily
              isolate gravid females.
            </li>
          </ul>
          <p>
            For complicated or persistent issues, use the{' '}
            <a href="https://vets.co/find-a-vet/aquarium">
              Vets.co aquarium vet finder
            </a>{' '}
            to locate an ornamental-fish-experienced vet through the
            WAVMA referral directory.
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
              FishBase species account: Xiphophorus maculatus
              (Günther, 1866). Froese, R. and D. Pauly. Editors.
            </li>
            <li>
              Kallman, K. D. and Kazianis, S. (2006). The genus
              Xiphophorus in Mexico and Central America. Zebrafish
              3(3): 271–285. Peer-reviewed Xiphophorus taxonomic
              review.
            </li>
            <li>
              IUCN Red List: Xiphophorus maculatus assessment.
            </li>
            <li>
              World Aquatic Veterinary Medical Association (WAVMA)
              practice referral directory.
            </li>
          </ul>
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Platy Fish — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for platy fish care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/platy%20fish%20tank%20setup?s=species-platy-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Platy Fish Setup on Amazon →</a>
            <a href="/go/chewy-brand/platy%20fish%20tank%20setup?s=species-platy-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}
