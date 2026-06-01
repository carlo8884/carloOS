import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  ReviewCard,
  ScoreMethodology,
  AffiliateDisclosure,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Bathing & Grooming — Why Less Is More, Ear and Nail Care | Ferret.com',
  description:
    "Why over-bathing makes ferrets smell worse, not better. Bathing frequency (every 2-3 months max), shampoo choice, ear cleaning, nail trimming, dental routines, and seasonal coat changes.",
  path: '/care/bathing-and-grooming',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Bathing and Grooming',
  description:
    'Practical guide to ferret grooming: why frequent bathing is counterproductive, appropriate shampoo and frequency, ear and nail care, dental routine, and seasonal coat changes.',
  url: 'https://ferret.com/care/bathing-and-grooming',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Care', url: 'https://ferret.com/care/bathing-and-grooming' },
    { name: 'Bathing and Grooming', url: 'https://ferret.com/care/bathing-and-grooming' },
  ],
})

const FAQS = [
  {
    question: 'How often should I bathe my ferret?',
    answer:
      "At most every 2-3 months, and many ferrets do better with even less frequent bathing. The musky ferret smell comes from sebaceous glands in the skin, not from surface dirt. Bathing strips skin oils; the body responds by overproducing them, which makes the ferret smell more strongly within 1-2 days of a bath, not less. The single most common mistake new ferret owners make is bathing weekly to manage smell and creating the exact problem they are trying to solve.",
  },
  {
    question: 'What shampoo should I use?',
    answer:
      "A ferret-specific shampoo or a mild kitten shampoo with no added fragrance, tea tree oil, or insecticides. Human shampoo (including baby shampoo) is too alkaline for ferret skin pH. Dish soap, dog shampoo, and any flea-shampoo product with pyrethrins are inappropriate. The American Ferret Association and exotic-pet references list ferret-formulated shampoos (Marshall, 8-in-1, Critter Care) and unscented kitten shampoos as the appropriate options.",
  },
  {
    question: 'How do I clean ferret ears?',
    answer:
      "Use a vet-recommended pet ear cleaner (epi-otic or similar) and a cotton ball or soft gauze — never a cotton swab pushed into the canal. Every 2-4 weeks for most ferrets; some ferrets need more frequent cleaning, some less. The reddish-brown wax is normal in ferrets. Sudden change in wax volume, color (pale yellow, green), or odor warrants a vet visit — ear mites, bacterial infection, and yeast overgrowth all occur in ferrets.",
  },
  {
    question: 'How often do ferret nails need trimming?',
    answer:
      "Every 2-3 weeks for most ferrets. Ferret nails are non-retractable and grow continuously. Untrimmed nails snag on fabric and carpet (a common cause of injury), grow into footpads in extreme cases, and make the ferret reluctant to walk on smooth floors. The two-person method — one person holds the ferret on its back with a smear of meat-based recovery diet on its belly to distract it, the other clips — works for most ferrets after a few sessions.",
  },
  {
    question: 'Do ferret teeth need brushing?',
    answer:
      "Yes, ideally. Periodontal disease is one of the most common chronic conditions in adult ferrets and a major source of pain and weight loss in seniors. A pet-toothpaste-on-finger or a soft small toothbrush every 1-2 days produces measurably better dental outcomes over a ferret's lifetime than no dental care at all. Annual dental scaling under anesthesia by an exotic-pet vet is the gold standard once tartar accumulates. See our dental disease page for the full protocol.",
  },
  {
    question: 'My ferret is shedding heavily — is that normal?',
    answer:
      "Twice a year — spring and fall — ferrets undergo seasonal coat changes (the molt). Heavy shedding for 2-4 weeks is normal. Bilateral symmetrical hair loss, especially over the rump, tail, or shoulders, that does not regrow is NOT a normal coat change and warrants a vet visit — adrenal disease is the most common cause of non-seasonal alopecia in adult ferrets.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function FerretBathingGroomingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Bathing and Grooming',
          subtitle:
            'The defining feature of ferret grooming is that less is more. The musky smell new owners are trying to bathe away is produced by skin glands that respond to bathing by overproducing — the more you bathe, the worse it gets. The right routine is small, infrequent, and consistent: occasional bath, regular ear and nail care, daily teeth, and recognition of when the coat is signaling a medical problem.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'May 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care/bathing-and-grooming' },
          { name: 'Bathing and Grooming', href: '/care/bathing-and-grooming' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Where the Smell Comes From', href: '#smell' },
                { label: 'Bathing Frequency', href: '#frequency' },
                { label: 'How to Bathe Safely', href: '#how' },
                { label: 'Shampoo Choice', href: '#shampoo' },
                { label: 'Ear Cleaning', href: '#ears' },
                { label: 'Nail Trimming', href: '#nails' },
                { label: 'Dental Routine', href: '#dental' },
                { label: 'Seasonal Coat Changes', href: '#coat' },
                { label: 'Grooming Kit Picks', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Dental Disease', href: '/health/dental-disease' },
                { label: 'Adrenal Disease', href: '/health/adrenal-disease' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Practical ferret husbandry, monthly."
              source="care-bathing-grooming"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-29"
            updatedAt="2026-05-29"
            reviewedBy="Editorial team"
          />

          <DropCap>
            Most ferret grooming mistakes are corrections in the wrong
            direction — bathing more often to manage a smell that gets
            worse with more bathing, trimming more aggressively because
            nails were caught too long, scrubbing ears because the brown
            wax looks dirty. The actual answer in each case is to do less,
            do it more carefully, and learn what each tissue is supposed
            to look like at baseline.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Ferrets need bathing at most every 2-3 months — frequent
            bathing makes them smell worse, not better. Use a
            ferret-specific or unscented kitten shampoo. Clean ears every
            2-4 weeks with vet-approved ear cleaner; never push cotton
            swabs into the canal. Trim nails every 2-3 weeks. Brush
            teeth daily or every other day. Twice-a-year seasonal coat
            changes are normal; bilateral hair loss that does not regrow
            is not — see an exotic-pet vet to rule out adrenal disease.
          </p>

          <h2 id="smell">Where the Smell Comes From</h2>
          <p>
            Two structures produce the characteristic ferret odor:
          </p>
          <ul>
            <li>
              <strong>Sebaceous skin glands.</strong> Distributed across
              the coat, producing the oils that give ferret fur its
              musky scent and water-repellent quality. This is the
              primary source of "ferret smell" in pet ferrets.
            </li>
            <li>
              <strong>Anal scent glands.</strong> Discrete structures on
              either side of the anus. Produce the strong, sharp smell
              released when a ferret is frightened or excited. In US pet
              ferrets these are almost always surgically removed
              ("descented") at very young age by the commercial breeder,
              which is why most US ferrets are noticeably less stinky
              than working European polecats.
            </li>
          </ul>
          <p>
            Bathing washes off the sebaceous oils. The skin responds by
            stepping up production — and the new oil is "fresh", which
            in practice means the ferret smells stronger 12-48 hours
            after a bath than it did before. The American Ferret
            Association and standard exotic-pet care references
            consistently make this point: the smell is mostly chemistry,
            not dirt, and the chemistry responds counter-productively to
            washing.
          </p>

          <CalloutBox variant="evidence" title="Why the bath-more-smell-more loop is real">
            <p>
              Sebaceous gland output is regulated to maintain a steady
              skin lipid layer. Stripping that layer through repeated
              washing triggers a compensatory increase in production —
              the same mechanism documented in over-washed human and dog
              skin. New ferret owners who bathe weekly to manage smell
              are inadvertently training the gland system to produce more
              oil. The intervention is counter-productive on its own
              terms.
            </p>
          </CalloutBox>

          <h2 id="frequency">Bathing Frequency</h2>
          <p>
            Realistic frequencies:
          </p>
          <ul>
            <li>
              <strong>Healthy adult ferret:</strong> every 2-3 months
              maximum. Many ferrets are happiest with one to two baths
              per year.
            </li>
            <li>
              <strong>Senior ferret:</strong> typically less, not more —
              older ferrets have drier skin and tolerate baths poorly.
            </li>
            <li>
              <strong>Ferret with skin disease:</strong> per the
              exotic-pet vet&apos;s direction. Medicated baths for
              specific conditions (mange, certain fungal infections)
              follow a prescription pattern.
            </li>
            <li>
              <strong>Ferret that got into something dangerous</strong>
              (motor oil, household chemicals, sticky substances): bathe
              immediately as part of the decontamination, then revert to
              normal frequency.
            </li>
          </ul>
          <p>
            What helps with smell more than bathing: weekly bedding wash
            (sleep sacks, hammocks, blankets), weekly cage clean with a
            ferret-safe cleaner, daily litter pan spot-clean, well-
            ventilated room, and consistent diet (kibble changes can
            alter coat smell). The smell load in a ferret household is
            mostly from accumulated oils in bedding, not from the
            ferret itself.
          </p>

          <h2 id="how">How to Bathe Safely</h2>
          <ol>
            <li>
              <strong>Use lukewarm water</strong> — neither hot nor cold.
              Ferret skin is sensitive and the comfortable temperature
              window is narrow.
            </li>
            <li>
              <strong>Provide an escape route in the basin.</strong> A
              sink or shallow basin with a small ramp or floating raft
              (a piece of cardboard, a small towel) so the ferret can
              choose to be partly in and partly out of the water.
              Forcing a ferret to be fully submerged produces panic
              behavior and damages bath tolerance for next time.
            </li>
            <li>
              <strong>Wet the coat thoroughly.</strong> A removable
              showerhead at low pressure or a cup gently poured over the
              body. Avoid spraying directly into the face.
            </li>
            <li>
              <strong>Apply a small amount of shampoo</strong> diluted in
              your hand first. Massage gently into the coat. Avoid the
              eyes, the ears, and the genital area.
            </li>
            <li>
              <strong>Rinse completely.</strong> Residual shampoo is the
              most common cause of post-bath itching and skin
              irritation. Rinse for longer than feels necessary, then
              rinse again.
            </li>
            <li>
              <strong>Wrap in a warm towel.</strong> Ferrets lose body
              heat quickly when wet. Two towels — one to absorb the bulk
              of the water, one as a wrap for the warm-up period.
            </li>
            <li>
              <strong>Offer a high-value treat</strong> after the bath.
              Builds positive association for next time.
            </li>
          </ol>

          <CalloutBox variant="tip" title="Bath day works better with a partner">
            <p>
              Ferrets are wriggly, slippery when wet, and capable of
              escaping a single-person bath setup with surprising speed.
              Two-person bathing — one to hold and reassure, one to wash
              and rinse — is faster, less stressful for the ferret, and
              produces a cleaner result. Many keepers also keep a small
              "dunk and rinse" rotation so the ferret experiences each
              step quickly rather than spending extended time standing
              wet.
            </p>
          </CalloutBox>

          <h2 id="shampoo">Shampoo Choice</h2>
          <p>
            Appropriate options:
          </p>
          <ul>
            <li>
              <strong>Ferret-formulated shampoos.</strong> Marshall, 8-in-1,
              Critter Care, and similar products are pH-balanced for
              ferret skin and contain no harmful additives. The
              first-line default.
            </li>
            <li>
              <strong>Mild unscented kitten shampoo.</strong> Acceptable
              alternative. Avoid scented variants.
            </li>
          </ul>
          <p>
            Inappropriate options:
          </p>
          <ul>
            <li>Human shampoo of any kind, including baby shampoo (wrong pH).</li>
            <li>Dog shampoo (wrong pH and may contain ingredients toxic to ferrets).</li>
            <li>Dish soap and household soaps (highly stripping).</li>
            <li>Flea shampoo containing pyrethrins or permethrins — these are highly toxic to ferrets and should never be applied. Flea control in ferrets is a separate vet conversation using ferret-appropriate products.</li>
            <li>Tea tree oil shampoo — tea tree oil is toxic to ferrets.</li>
          </ul>

          <h2 id="ears">Ear Cleaning</h2>
          <p>
            Ferret ear wax is normally reddish-brown and may be
            present in moderate quantity. Cleaning every 2-4 weeks
            prevents accumulation that can predispose to infection.
          </p>
          <ol>
            <li>
              <strong>Use a vet-recommended pet ear cleaner</strong>
              (epi-otic or similar). Do not use human ear products,
              alcohol, or hydrogen peroxide.
            </li>
            <li>
              <strong>Apply a few drops</strong> to a cotton ball or
              soft gauze pad — do not pour cleaner directly into the
              ear canal.
            </li>
            <li>
              <strong>Gently wipe the visible ear flap and the entrance
              to the canal.</strong> Never push a cotton swab into the
              canal itself; the swab compacts wax against the eardrum
              and can cause perforation.
            </li>
            <li>
              <strong>Inspect.</strong> Normal: reddish-brown wax,
              uniform appearance, no odor. Abnormal: dark coffee-ground
              debris (ear mite suspicion), green/yellow pus-like
              discharge (bacterial), severe head-shaking or scratching,
              or strong off-odor — all warrant a vet visit.
            </li>
          </ol>
          <p>
            Ear mites (<em>Otodectes cynotis</em>) are common in
            ferrets, particularly in multi-pet households. Treatment is
            straightforward (ivermectin or selamectin, vet-prescribed)
            but requires confirmation and dosing by a vet — do not use
            over-the-counter dog or cat mite products on ferrets.
          </p>

          <h2 id="nails">Nail Trimming</h2>
          <p>
            Ferret nails are non-retractable, grow continuously, and
            need trimming every 2-3 weeks. The two-person belly-treat
            method works well:
          </p>
          <ol>
            <li>
              <strong>One person holds the ferret on its back</strong>,
              cradled like a baby, with a tablespoon of meat-based
              recovery diet (Carnivore Care, Bob Church recipe, or even
              a smear of nutritional supplement paste) on the ferret&apos;s
              belly. The ferret will lick the food and largely ignore
              what is happening to its feet.
            </li>
            <li>
              <strong>The second person clips one nail at a time</strong>
              with small pet nail clippers. Take only the clear hooked
              tip; the pink "quick" containing blood vessels is visible
              through the translucent nail. Avoid the quick.
            </li>
            <li>
              <strong>Keep styptic powder (Kwik Stop) on hand</strong>
              in case a nail bleeds. A small amount applied to the
              bleeding end stops bleeding within seconds.
            </li>
            <li>
              <strong>Reward at the end.</strong> Treat or play session
              to maintain bath-and-clip tolerance over time.
            </li>
          </ol>

          <h2 id="dental">Dental Routine</h2>
          <p>
            Dental disease is one of the most common and most under-
            treated chronic conditions in adult ferrets. The
            single highest-leverage intervention is brushing — every
            day or every other day, with a small pet toothbrush or a
            finger brush and a pet-formulated toothpaste (poultry-
            flavored varieties are well-tolerated). The full dental
            protocol, including annual cleaning under anesthesia by an
            exotic-pet vet, is covered in our{' '}
            <a href="/health/dental-disease">dental disease page</a>.
          </p>
          <p>
            Brushing alone does not prevent all dental disease — diet,
            genetics, and individual variation all matter — but it
            slows tartar accumulation, reduces gingival inflammation,
            and meaningfully extends the interval between professional
            cleanings. Starting young, before there is significant
            tartar, makes the routine much easier to maintain.
          </p>

          <h2 id="coat">Seasonal Coat Changes</h2>
          <p>
            Ferrets undergo two seasonal coat changes per year:
          </p>
          <ul>
            <li>
              <strong>Spring molt</strong> (approximately March-May):
              loss of the dense winter undercoat, transition to a
              shorter, lighter summer coat. Heavy shedding for 2-4
              weeks; some color change is normal (winter coat is often
              paler than summer coat).
            </li>
            <li>
              <strong>Fall molt</strong> (approximately September-November):
              loss of summer coat, growth of denser winter undercoat.
              Similar 2-4 week shedding window.
            </li>
          </ul>
          <p>
            What is normal: diffuse shedding across the body, intact
            but thinner coat, regrowth within weeks. What is not normal:
          </p>
          <ul>
            <li>Bilateral symmetric hair loss, especially over the rump, tail base, or shoulders.</li>
            <li>Hair loss that does not regrow.</li>
            <li>Thin or absent fur on the tail (rat-tail appearance).</li>
            <li>Vulvar swelling in spayed jills.</li>
          </ul>
          <p>
            These patterns are characteristic of adrenal disease, the
            second-most-common chronic disease in middle-aged and senior
            ferrets. See our{' '}
            <a href="/health/adrenal-disease">adrenal disease page</a>{' '}
            for the full clinical picture. The single most important
            grooming-related observation an owner can make is the
            distinction between a normal seasonal molt and abnormal
            alopecia — the former is cosmetic, the latter is a marker of
            a treatable systemic disease.
          </p>

          <CalloutBox variant="warning" title="When to see an exotic-pet vet">
            <p>
              Any of the following warrant a vet visit: bilateral or
              symmetric hair loss that does not regrow, chronic ear
              scratching or head shaking, change in ear discharge
              quantity or color, persistent itching after bathing,
              foul body odor that did not improve with normal bathing
              frequency, or any localized non-healing skin lesion.
              These are all signs that the grooming question has become
              a medical question.
            </p>
          </CalloutBox>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">Grooming Kit Picks</h2>
          <p>
            A minimal kit that covers occasional bathing, monthly ear cleaning, and every-2–3-week nail trims. This is a documented-spec comparison drawing on widely-stocked products in US pet retail and the shampoo and ear-product categories referenced in standard exotic-pet practice; the page does not claim hands-on testing. Avoid any shampoo containing tea tree oil — it is toxic to ferrets.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="marshall-ferret-shampoo"
            badge="Shampoo Default"
            badgeEmoji="🧴"
            name="Marshall Ferret Shampoo (Original / Fragrance-Free)"
            subtitle="Ferret-specific pH-balanced shampoo, no tea tree"
            score={8.5}
            winner
            description={
              <p>Marshall's standard ferret shampoo line — pH-balanced for ferret skin and free of the tea tree oil that the company sometimes includes in other variants. Pick the original or fragrance-free SKUs and avoid any version with tea tree on the ingredient list. The first-line shampoo across exotic-pet ferret practice and a sensible default for the every-2–3-month bathing schedule.</p>
            }
            specs={[
              { label: 'pH', value: 'Ferret-appropriate', highlight: 'good' },
              { label: 'Tea tree oil', value: 'None (in this SKU)', highlight: 'good' },
              { label: 'Fragrance', value: 'None or mild' },
              { label: 'Distribution', value: 'National chain pet retail' },
            ]}
            pros={['Ferret-specific formulation', 'pH-balanced', 'Original / fragrance-free SKUs available', 'Widely stocked']}
            cons={['Marshall also sells tea-tree variants — read the label every time', 'Bottle is small for the price']}
            price="$8–14"
            ctaText="Find Marshall ferret shampoo"
            ctaHref="/go/marshall/ferret-shampoo-original?s=care-bathing-and-grooming"
            ctaAffiliateProgram="marshall"
            ctaAffiliateProduct="ferret-shampoo-original"
          />
          <ReviewCard
            id="pet-ear-cleaner"
            badge="Ear Care"
            badgeEmoji="👂"
            name="Vet-Approved Pet Ear Cleaner (Epi-Otic style)"
            subtitle="Gentle pet ear cleaner used in exotic-pet practice"
            score={8.4}
            description={
              <p>A standard veterinary ear cleaner is the right tool for routine ferret ear cleaning every 2–4 weeks. Apply to a cotton ball or gauze pad — never directly into the canal — and wipe the visible ear flap and canal entrance. Do not use human ear products, alcohol, or hydrogen peroxide. If you see dark coffee-ground debris (possible ear mites) or coloured discharge, stop and book an exotic-pet vet visit before continuing home cleaning.</p>
            }
            specs={[
              { label: 'Compatibility', value: 'Pet-safe, exotic-pet practice standard', highlight: 'good' },
              { label: 'Application', value: 'Cotton ball / gauze (NOT in-canal swab)' },
              { label: 'Frequency', value: 'Every 2–4 weeks' },
            ]}
            pros={['Used in exotic-pet practice for ferret ear cleaning', 'Gentle on ferret canal', 'Available without prescription on most pet retailers']}
            cons={['Not a treatment for ear mites or infection — those need a vet', 'Bottle is small relative to long-term use']}
            price="$10–20"
            ctaText="Find pet ear cleaner"
            ctaHref="/go/chewy-brand/epi-otic+pet+ear+cleaner?s=care-bathing-and-grooming"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="epi-otic+pet+ear+cleaner"
          />
          <ReviewCard
            id="pet-nail-kit"
            badge="Nail Care"
            badgeEmoji="✂️"
            name="Small-Pet Nail Clippers + Styptic Powder"
            subtitle="Small clippers sized for ferret nails plus styptic for accidents"
            score={8.0}
            description={
              <p>Ferret nails are non-retractable and grow continuously — every 2–3 weeks is the standard trim cadence. Use small pet nail clippers (not human clippers; the geometry is wrong). Keep styptic powder (Kwik Stop or equivalent) on hand for the occasional quick — apply a small amount to the bleeding end and bleeding stops within seconds. The belly-treat two-person method described in the nail-trim section above keeps the ferret cooperative.</p>
            }
            specs={[
              { label: 'Clipper size', value: 'Small-pet (not human)' },
              { label: 'Styptic included or compatible', value: 'Yes' },
              { label: 'Frequency', value: 'Every 2–3 weeks' },
            ]}
            pros={['Right tool geometry for ferret nails', 'Quick-styptic stops accidents in seconds', 'One-time purchase, lasts years']}
            cons={['Cheap clippers go dull quickly — buy reasonable mid-tier', 'First few trims with a new ferret are stressful regardless of tool']}
            price="$10–18"
            ctaText="Find small-pet nail clippers"
            ctaHref="/go/chewy-brand/small+pet+nail+clipper+styptic+powder?s=care-bathing-and-grooming"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="small+pet+nail+clipper+styptic+powder"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits,
              and Rodents: Clinical Medicine and Surgery.</em> 4th ed.
              Saunders/Elsevier. Integumentary, dental, and grooming
              chapters describe ferret skin physiology and normal
              variation.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em> — ferret husbandry and dermatology issues.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing care
              guidance on bathing, smell management, and seasonal coat
              changes.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) —
              continuing-education resources on ferret husbandry and
              dermatologic disease.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — clinical
              articles on ferret dermatology and ear disease.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general husbandry guidance. Skin disease,
            chronic ear problems, and abnormal alopecia are clinical
            conditions and should be evaluated by an exotic-pet vet
            rather than managed with home grooming alone.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
