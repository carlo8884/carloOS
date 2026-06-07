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
  ArticleSourcesList,
} from '@carloOS/ui'

const SOURCES = [
  { label: "Poecilia sphenops — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/poecilia-sphenops/", publisher: "Seriously Fish" },
  { label: "Poecilia sphenops — FishBase species record", url: "https://www.fishbase.se/summary/Poecilia-sphenops.html", publisher: "FishBase" },
  { label: "Rosen, D.E. & Bailey, R.M. The Poeciliid Fishes (Cyprinodontiformes), Their Structure, Zoogeography, and Systematics. Bulletin of the AMNH, 1963.", publisher: "American Museum of Natural History" },
  { label: "Turner, C.L. The Trophotaeniae of the Goodeidae. Journal of Morphology, 1937.", publisher: "Journal of Morphology" },
]

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Molly Fish Care Guide — Brackish Tolerance, Varieties | Fish.com',
  description:
    'Mollies are livebearers with genuine salt tolerance. Sailfin, black, dalmatian, lyretail varieties; breeding management; community compatibility; care basics.',
  path: '/species/molly-fish',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Molly Fish Care Guide',
  description:
    'Poecilia sphenops and P. velifera mollies — salt tolerance, livebearer breeding management, varieties, and community compatibility.',
  url: 'https://fish.com/species/molly-fish',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Species', url: 'https://fish.com/species' },
    { name: 'Molly Fish', url: 'https://fish.com/species/molly-fish' },
  ],
})

const FAQS = [
  {
    question: 'Do mollies actually need salt?',
    answer:
      'No — mollies do not require salt to survive. The myth of "mollies must have salt" overstates a real biological fact. Many wild Poecilia populations live in brackish estuaries and coastal lagoons, so the species tolerates salinity better than most freshwater fish. A small amount of aquarium salt (about 1 tbsp per 5 gallons, roughly specific gravity 1.002) can reduce osmotic stress and suppress some pathogens. Healthy mollies in well-maintained freshwater tanks do fine without salt — but a mixed community with shrimp, scaleless fish, or live plants is the only reason not to add it.',
    answerText:
      'No, mollies survive in pure freshwater. They tolerate light brackish (1 tbsp per 5 gal). Salt is optional unless shrimp, scaleless fish, or sensitive plants are present.',
  },
  {
    question: 'How do I stop my mollies from breeding constantly?',
    answer:
      'Keep a single-sex group. All-male groups display every bit as well as mixed groups and never produce fry. All-female groups will still produce fry from stored sperm for several batches after separation but eventually stop. If you already have a mixed group and accept some breeding, a heavily planted tank with floating plants creates enough fry predation by adults that population growth is naturally limited.',
    answerText:
      'Keep single-sex groups. All-male groups display well and never produce fry. Heavy planting limits fry survival in mixed groups.',
  },
  {
    question: 'Sailfin vs short-fin molly — what is the difference?',
    answer:
      'The common short-fin molly (Poecilia sphenops) tops out around 3 inches with a normal-sized dorsal fin. The sailfin molly (P. latipinna in the southeastern US, P. velifera in Mexico/Yucatán) reaches 4–6 inches and develops a dramatic extended dorsal fin in adult males that they raise like a sail during courtship and territorial display. Sailfins need more swimming room (30+ gallons for a group) and slightly warmer water than short-fins. The display behavior is one of the most striking in any common aquarium fish.',
    answerText:
      'Short-fins reach 3 in with a normal dorsal. Sailfins (P. latipinna, P. velifera) reach 4-6 in and grow a sail-like dorsal fin. Sailfins need 30+ gallon tanks.',
  },
  {
    question: 'Why are my mollies "shimmying" in place?',
    answer:
      'Shimmying — rocking or swimming in place without moving forward — is the classic molly distress signal. It indicates wrong water chemistry (too soft or too acidic), low temperature (below 72°F), poor water quality (ammonia or nitrate elevated), or sometimes a swim-bladder issue. First response: check temperature, test ammonia/nitrite/nitrate, verify pH and hardness are at the alkaline/hard end of the comfort range (pH 7.5+, GH 12+). Adding a small amount of aquarium salt often resolves shimmying within 24–48 hours once the underlying chemistry is corrected.',
    answerText:
      'Shimmying signals wrong chemistry, cold water, or poor quality. Check temperature, ammonia/nitrate, and pH/GH. Salt often helps once chemistry is corrected.',
  },
  {
    question: 'Will mollies eat my plants?',
    answer:
      'Mollies are omnivores with a heavy algae-grazing component to their natural diet, so they will graze hair algae, biofilm, and softer plants. Most stem plants and softer-leaved species (cabomba, hygrophila, water sprite) can be nibbled if other vegetable matter is not available. Hardy broad-leaved plants (Anubias, Java fern, Bucephalandra) and tougher stem plants (Vallisneria, Sagittaria) are typically left alone. Supplement diet with blanched zucchini, spinach, or veggie wafers a couple of times a week to reduce plant grazing.',
    answerText:
      'Yes, they graze algae and softer plants. Anubias, Java fern, and Vallisneria are typically safe. Feed vegetable matter regularly to reduce grazing pressure.',
  },
  {
    question: 'Can mollies live with bettas?',
    answer:
      'Generally no. Mollies prefer hard, alkaline water (pH 7.5+, GH 15+) while bettas prefer soft, slightly acidic water (pH 6.5–7.5, GH 4–8). Mollies are also fast, often boisterous community fish that can stress a betta and may nip at flowing fins. The water chemistry mismatch alone is enough to make this combination a poor choice even before behavior is considered.',
    answerText:
      'No. Water chemistry conflicts (mollies need hard alkaline, bettas need soft) and mollies may nip betta fins.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

export default function MollyPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: 'Molly Fish Care Guide',
          subtitle:
            'Poecilia sphenops, P. latipinna, and P. velifera — mollies are livebearing fish from coastal and brackish waters of the Americas. They tolerate salt better than almost any common aquarium fish, come in dozens of color varieties including the dramatic sailfin form, and breed enthusiastically enough that population control is the central management challenge.',
          category: 'Species Guide — Beginner/Intermediate',
          authorName: 'Fish.com Editorial',
          publishedAt: 'May 2025',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Species', href: '/species' },
          { name: 'Molly Fish', href: '/species/molly-fish' },
        ]}
        relatedLinks={[{ title: 'Species Hub', href: '/species', category: 'Species' }, { title: 'Guppy', href: '/species/guppy', category: 'Species Guide' }, { title: 'Platy Fish', href: '/species/platy-fish', category: 'Species Guide' }, { title: 'Swordtail Fish', href: '/species/swordtail-fish', category: 'Species Guide' }]}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Reference
              </div>
              {[
                ['Scientific name', 'Poecilia sphenops (and rel.)'],
                ['Origin', 'C. & S. America coastal/brackish'],
                ['Max size', '3 in (short-fin) / 6 in (sailfin)'],
                ['Temperature', '72–82°F'],
                ['pH', '7.5–8.5 (hard alkaline)'],
                ['GH', '15–30 dGH'],
                ['Min tank', '20 gal short-fin / 30 gal sailfin'],
                ['Diet', 'Omnivore — graze algae heavily'],
                ['Lifespan', '3–5 years'],
                ['Compatibility', 'Peaceful — minor fin-nip risk'],
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
                Common Varieties
              </div>
              {[
                ['Black molly', 'Solid jet black — most popular'],
                ['Sailfin', 'Extended dorsal — needs 30+ gal'],
                ['Dalmatian', 'White with black spots'],
                ['Lyretail', 'Extended tail filaments'],
                ['Balloon', 'Compressed body — controversial'],
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
                { label: 'Platy Fish Care', href: '/species/platy-fish' },
                { label: 'Guppy Care', href: '/species/guppy' },
                { label: 'Swordtail Care', href: '/species/swordtail-fish' },
                { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
                { label: 'Find an Aquarium Vet (WAVMA)', href: 'https://vets.co/find-a-vet/aquarium' },
              ]}
            />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="fish-com"
              title="The Weekly Tank"
              subtitle="Species spotlights every Thursday."
              source="species-molly"
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
            Mollies (Poecilia sphenops, P. latipinna, P. velifera) are
            livebearing fish from the Americas that tolerate hard, alkaline
            water and a wide salinity range from pure fresh to brackish. They
            come in dozens of color and finnage varieties; the sailfin form
            is the most visually dramatic. Breeding management — not
            husbandry — is the main challenge: a mixed-sex group will
            produce a new batch of fry every 4–6 weeks. Generally peaceful
            community fish, but they can nip slow-finned tankmates.
          </CalloutBox>

          <h2>The Salt-Tolerance Story — What's True, What's Myth</h2>
          <DropCap>
            Mollies occupy a wider salinity range in the wild than almost any
            other commonly kept ornamental fish. FishBase records Poecilia
            sphenops, P. latipinna, and P. velifera populations across
            freshwater streams, brackish estuaries, and lagoons of the Gulf
            of Mexico, the Caribbean, and Central America. Some populations
            of P. latipinna (the sailfin molly of the southeastern US) have
            even been documented in fully marine conditions. That ecological
            breadth is real, and it has produced the persistent aquarium
            saying that "mollies need salt."
          </DropCap>
          <p>
            The honest version: mollies do not need salt to survive, but
            they handle it better than most freshwater fish and a small
            amount can be beneficial. Adding aquarium salt (sodium chloride,
            not marine salt mix) at roughly 1 tablespoon per 5 gallons —
            specific gravity around 1.002 — reduces osmotic stress, mildly
            suppresses some freshwater pathogens (ich and velvet are less
            persistent in lightly brackish water), and supports gill and
            mucus function. Mollies in pure, well-maintained freshwater do
            fine; mollies in lightly brackish water often show measurably
            better disease resistance and color.
          </p>
          <p>
            The tradeoff: that salt level is harmful to most aquarium
            shrimp, sensitive plants, and scaleless fish (loaches, some
            catfish). A molly-only or livebearer-community tank can run
            lightly brackish; a mixed planted community generally cannot.
            Match the chemistry to the tankmates, not the other way around.
          </p>

          <h2>Varieties — Dozens of Color and Finnage Forms</h2>
          <p>
            More than a century of selective breeding has produced an
            extraordinary range of molly varieties. The most common in the
            North American trade:
          </p>
          <ul>
            <li>
              <strong>Black molly:</strong> Solid jet-black pigment from
              elevated melanin expression. One of the most striking
              solid-color freshwater fish, particularly against pale
              substrate or green plants.
            </li>
            <li>
              <strong>Sailfin molly (P. latipinna, P. velifera):</strong>
              Males develop a dramatic extended dorsal fin that they raise
              during courtship and male-male display. The behavior alone is
              worth a 30-gallon tank — sailfins are among the most
              behaviorally engaging livebearers in the hobby.
            </li>
            <li>
              <strong>Dalmatian molly:</strong> White body with random black
              spots. Stable across the variety; popular in planted setups
              for the contrast against green.
            </li>
            <li>
              <strong>Lyretail molly:</strong> Tail fin extends into filaments
              forming a lyre shape. Available in multiple base colors. The
              extensions are vulnerable to fin nipping — choose tankmates
              accordingly.
            </li>
            <li>
              <strong>Balloon molly:</strong> Selectively shortened body
              line producing a compressed, rounded silhouette. The shape
              causes spinal compression issues in many specimens and is
              ethically controversial — many experienced keepers and welfare
              advocates avoid the variety.
            </li>
          </ul>

          <CalloutBox variant="info" title="Why varieties share care">
            All molly varieties share identical care requirements regardless
            of color, fin form, or body shape. Choose the variety on
            appearance and ethical preference, then provide the same hard
            alkaline (or lightly brackish) water all mollies need.
          </CalloutBox>

          <h2>Water Chemistry — Hard and Alkaline</h2>
          <p>
            Mollies are one of the few common aquarium fish that genuinely
            prefer hard, alkaline water. FishBase lists target ranges that
            line up neatly with mineral-rich US municipal tap water in much
            of the country:
          </p>
          <ul>
            <li><strong>Temperature:</strong> 72–82°F. 76–80°F is ideal.</li>
            <li><strong>pH:</strong> 7.5–8.5. Stable matters more than precise.</li>
            <li><strong>GH:</strong> 15–30 dGH. Higher is better than lower.</li>
            <li><strong>KH:</strong> 10–25 dKH. High KH prevents pH crashes.</li>
            <li><strong>Salt (optional):</strong> 1 tbsp/5 gal — specific gravity ~1.002.</li>
            <li><strong>Ammonia/nitrite:</strong> 0 ppm. Nitrate under 20 ppm.</li>
          </ul>
          <p>
            If your tap is naturally soft, add crushed coral or aragonite
            sand to the filter — it dissolves gradually and buffers KH and
            pH upward over weeks.
          </p>

          <h2>Breeding — A Livebearer Reality</h2>
          <p>
            Mollies are ovoviviparous livebearers: females retain fertilized
            eggs internally and give birth to free-swimming fry, typically
            every 4–6 weeks. A single adult female can produce 20–100 fry
            per brood depending on size and variety. Females also store
            sperm and continue producing batches for several cycles after
            separation from males.
          </p>
          <p>
            Population control options, ranked by effectiveness:
          </p>
          <ol>
            <li>
              <strong>Single-sex groups.</strong> All-male groups display
              full color and the same behavior as mixed groups, with no
              fry. All-female groups go fry-free after several stored-sperm
              cycles.
            </li>
            <li>
              <strong>Predation in a community tank.</strong> A heavily
              planted tank with floating cover lets some fry survive while
              adults eat most — produces a slowly growing population
              rather than an exponential one.
            </li>
            <li>
              <strong>Breeding boxes / separate fry tank.</strong> For
              maximum survival, isolate gravid females in a breeding net
              until birth, then raise fry on crushed flake and finely
              ground pellet in a separate small tank.
            </li>
          </ol>

          <h2>Diet — Omnivores That Lean Vegetable</h2>
          <p>
            FishBase classifies mollies as omnivores with a heavy
            algae-grazing component. In the wild they scrape biofilm and
            algae from rocks and plants as the staple, supplemented with
            small invertebrates. In the aquarium they accept high-quality
            tropical flake, micro-pellets, and frozen foods readily — but
            they need vegetable supplementation to thrive long-term.
          </p>
          <p>
            A working feeding schedule: small staple meal twice daily,
            blanched zucchini or spinach two or three times per week, frozen
            bloodworms or brine shrimp once or twice per week. Veggie
            wafers and spirulina-based flakes (Omega One Veggie Rounds, New
            Life Spectrum AlgaeMax) substitute for fresh greens if those
            are inconvenient. Inadequate vegetable matter shows up as
            heavier plant grazing pressure and duller color.
          </p>

          <h2>Compatibility — Peaceful, With Caveats</h2>
          <p>
            Mollies are nominally peaceful community fish and pair well
            with most other hard-water community species. Two caveats:
            adult sailfin males can be boisterous with each other (provide
            enough space and visual breaks for 3+ males), and mollies are
            inclined to nip at slow-moving long-finned tankmates,
            particularly bettas and guppy males.
          </p>
          <p>
            <strong>Excellent tank mates:</strong> platies, swordtails,
            guppies (females and short-finned males), Endler's livebearers,
            zebra danios, larger tetras (von Rio, lemon, glowlight),
            corydoras catfish (if no salt), bristlenose plecos, mystery
            snails (if no salt).
          </p>
          <p>
            <strong>Avoid:</strong> bettas (water chemistry mismatch and
            fin nipping risk), discus and rams (opposite water
            requirements), shrimp in salted tanks, slow long-finned guppy
            males, and aggressive species.
          </p>

          <h2>Common Health Issues</h2>
          <ul>
            <li>
              <strong>Shimmying (molly disease):</strong> Rocking in place
              with no forward movement. Indicates wrong chemistry, cold
              water, or poor quality. Check temperature, test water, raise
              pH and hardness, consider light salt.
            </li>
            <li>
              <strong>Ich (Ichthyophthirius multifiliis):</strong> White
              salt-grain spots. Mollies handle full ich treatment well
              (elevated temperature 86°F plus commercial treatment); light
              salt is itself partially suppressive.
            </li>
            <li>
              <strong>Columnaris:</strong> White cottony patches around
              mouth and gills. Bacterial; treat with kanamycin or
              appropriate antibiotic and address underlying stressor.
            </li>
            <li>
              <strong>Livebearer disease / Mycobacteriosis:</strong> Slow
              wasting, hollow belly, spinal curvature in some cases.
              Common in inbred livebearer lines from large-scale farms.
              No reliable cure — humane euthanasia of obviously sick
              fish, sourcing from quality breeders for replacements.
            </li>
            <li>
              <strong>Fin rot:</strong> Ragged, eroding fins. Bacterial;
              improve water quality and treat with appropriate
              antibiotic. Lyretail and sailfin mollies are
              disproportionately affected because the extended fins
              accumulate more damage.
            </li>
          </ul>
          <p>
            For persistent or unexplained losses — particularly suspected
            mycobacterial infection — consult a vet who handles
            ornamental fish via the{' '}
            <a href="https://vets.co/find-a-vet/aquarium">
              Vets.co aquarium vet finder
            </a>{' '}
            or the WAVMA practice referral directory.
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
              FishBase species accounts: Poecilia sphenops (Valenciennes, 1846),
              Poecilia latipinna (Lesueur, 1821), Poecilia velifera
              (Regan, 1914). Froese, R. and D. Pauly. Editors.
            </li>
            <li>
              Trexler, J. C. and Travis, J. (1990). Phenotypic plasticity in
              the sailfin molly, Poecilia latipinna. Evolution 44(1): 143–156.
            </li>
            <li>
              IUCN Red List assessments for Poecilia sphenops, P. latipinna,
              and P. velifera.
            </li>
            <li>
              World Aquatic Veterinary Medical Association (WAVMA) practice
              referral directory.
            </li>
          </ul>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Molly Fish — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for molly fish care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/molly%20fish%20tank%20setup?s=species-molly-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Molly Fish Setup on Amazon →</a>
            <a href="/go/chewy-brand/molly%20fish%20tank%20setup?s=species-molly-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
