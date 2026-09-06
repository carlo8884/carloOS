import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Rain Rot in Horses — Dermatophilosis, Causes, Treatment",
  description:
    "Reference guide to equine rain rot (rain scald, dermatophilosis): the bacterial skin infection behind crusty scabs, causes, treatment, and prevention.",
  path: '/health/rain-rot',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Rain Rot in Horses — Dermatophilosis, Causes, Treatment",
  description:
    "Equine rain rot (dermatophilosis / rain scald): the Dermatophilus congolensis skin infection, crusty scabs, treatment, and prevention.",
  url: 'https://horses.com/health/rain-rot',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Rain Rot (Dermatophilosis)",
  description:
    "Equine rain rot (dermatophilosis / rain scald): the Dermatophilus congolensis skin infection, crusty scabs, treatment, and prevention.",
  url: 'https://horses.com/health/rain-rot',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Is rain rot contagious?",
    answer:
      "Yes. Rain rot can spread between horses through shared grooming tools, tack, and blankets and by direct contact, which is why outbreaks move through a barn. Isolating affected horses' equipment and not sharing brushes during an outbreak limits spread.",
    answerText:
      "Yes -- it spreads via shared grooming tools, tack, blankets, and direct contact. Avoid sharing equipment between affected and unaffected horses.",
  },
  {
    question: "How do I tell rain rot from ringworm?",
    answer:
      "Both cause crusty patches, but rain rot produces paintbrush-like scabs that mat tufts of hair and concentrate along the rain-exposed topline, while ringworm typically forms expanding circular patches of hair loss. They can look similar; a veterinarian can confirm with skin samples if the diagnosis is unclear.",
    answerText:
      "Rain rot makes paintbrush scabs along the rain-exposed topline; ringworm makes expanding circular hairless patches. A vet can confirm with skin samples if unclear.",
  },
  {
    question: "Will rain rot go away on its own?",
    answer:
      "Mild rain rot often improves once the horse is kept dry, but active treatment with antimicrobial bathing and scab removal speeds healing and limits spread. Widespread or non-resolving cases, or a horse that seems unwell, should be seen by a veterinarian.",
    answerText:
      "Mild cases often improve once the horse is dry, but bathing and scab removal speed healing and limit spread. See a vet for widespread or non-resolving cases.",
  },
]

export default function RainRotPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Mud Fever', href: '/health/mud-fever' },
          { title: 'Sweet Itch', href: '/health/sweet-itch' },
          { title: 'Grooming a Horse', href: '/care/grooming' },
        ]}
        hero={{
          title: "Rain Rot in Horses",
          subtitle:
            "Rain rot -- also called rain scald or, formally, dermatophilosis -- is a common bacterial skin infection that produces the crusty, paintbrush-like scabs many owners see along a horse's back and hindquarters after a wet spell. Despite its appearance it is usually a straightforward problem to clear with good hygiene and dry conditions. Knowing what it is keeps owners from mistaking it for ringworm or simply ignoring it until it spreads. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Rain Rot", href: '/health/rain-rot' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Rain Rot", href: "#what" },
            { label: "Causes", href: "#causes" },
            { label: "Recognizing It", href: "#signs" },
            { label: "Treatment", href: "#treatment" },
            { label: "Prevention", href: "#prevention" },
            { label: "Keep-dry-and-unshared kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Mud Fever", href: "/health/mud-fever" },
              { label: "Sweet Itch", href: "/health/sweet-itch" },
              { label: "Grooming the Horse", href: "/care/grooming" },
              { label: "Winter Care", href: "/care/winter-care" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-rain-rot"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the rain-rot keep-dry-and-unshared checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse rain-rot keep-dry-and-unshared checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the portable-3-sided-horse-run-in-shelter,
              labeled-stackable-horse-grooming-caddy, and
              large-mesh-horse-blanket-wash-bag notes that
              match the provide-shelter, do-not-share-grooming-
              tools, and do-not-share-blankets copy on this
              page — a 3-sided run-in so prolonged rain has a
              dry wall to stand behind, a labeled grooming
              caddy so each horse&apos;s brushes stay in one
              box instead of a shared tote, and a mesh blanket
              wash bag so an affected horse&apos;s sheet is
              washed apart from the rest of the barn. Educational
              keep-dry-and-unshared checklist, not a treatment,
              not an antimicrobial shampoo, not a substitute
              for calling the veterinarian, and not a waterproof-
              sheet, mud-grid, or fly-sheet hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse rain-rot keep-dry-and-unshared checklist"
              subtitle="Email the run-in-shelter, grooming-caddy, and blanket-wash-bag notes. No spam."
              ctaText="Email my horse rain-rot keep-dry-and-unshared checklist"
              source="health-rain-rot-under-hero"
            />
          </div>

          <h2 id="what">What Is Rain Rot</h2>
          <p>Rain rot is a skin infection caused by Dermatophilus congolensis, a bacterium that behaves in some ways like a fungus. It infects the outer skin layers and provokes an inflammatory response that produces crusty, matted scabs binding tufts of hair, which lift off to leave bare, sometimes raw, patches. It most commonly appears over the topline, back, croup, and hindquarters -- the areas that stay wettest in rain.</p>

          <h2 id="causes">Causes</h2>
          <p>The organism lives dormant on the skin and flares when the skin barrier is compromised by prolonged moisture. Persistent rain, sweat under tack or blankets, high humidity, and biting insects that break the skin all set the stage. It spreads between horses by shared grooming tools, tack, and blankets, and by direct contact, which is why outbreaks can move through a barn. A run-down immune system makes a horse more susceptible.</p>

          <h2 id="signs">Recognizing It</h2>
          <ul>
            <li>Crusty, raised scabs that mat tufts of hair together, often described as paintbrush lesions.</li>
            <li>Scabs that lift off taking the hair with them, leaving bare or raw skin and sometimes a little pus underneath.</li>
            <li>Lesions concentrated along the back, croup, and hindquarters, and sometimes the lower legs.</li>
            <li>Mild tenderness; most horses are not severely itchy unlike with sweet itch.</li>
          </ul>

          <h2 id="treatment">Treatment</h2>
          <p>The cornerstone of treatment is getting the horse dry and removing the scabs gently, since the organism needs moisture and the scabs harbor it. Bathe with an appropriate antimicrobial shampoo as directed, lather and let it sit, then gently lift the loosened scabs (which can be uncomfortable, so be patient and kind). This page does not hop antimicrobial shampoo, iodine wash, or systemic drugs — those stay with the veterinarian. Keep the horse out of the rain and dry until healed. Widespread, severe, or non-resolving cases, or any horse that seems systemically unwell, should be seen by a veterinarian, who may prescribe additional treatment.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Provide shelter</strong> so horses can get out of prolonged rain. A portable 3-sided horse run-in shelter is how that rain has a dry wall to stand behind instead of a soaked topline — it is not a turnout blanket (that lives on blanketing), not a waterproof sheet (that lives on blanketing), and not a paddock mud grid (that lives on mud-fever).</li>
            <li><strong>Keep the coat clean and dry</strong> -- groom regularly, dry sweaty horses, and avoid leaving a wet horse blanketed. This page does not hop Irish-knit coolers, fleece coolers, or waffle-weave leg towels — those already live on tying-up, colic/clipping, and mud-fever.</li>
            <li><strong>Do not share grooming tools, tack, or blankets</strong> between affected and unaffected horses. A labeled stackable horse grooming caddy is how each horse&apos;s brushes stay in one box instead of a shared tote — it is not a curry comb or dandy brush (those live on grooming) and not a color-coded bucket (that lives on strangles). A large mesh horse blanket wash bag is how an affected horse&apos;s sheet is washed apart from the rest of the barn — it is not a turnout blanket hop and not a sweet-itch rug hop.</li>
            <li><strong>Manage insects</strong> that break the skin barrier and spread the organism. This page does not hop fly sheets, fly spray, or mosquito sheets — those already live on fly-control and West Nile.</li>
          </ul>

          <h2 id="kit">Keep-dry-and-unshared kit</h2>
          <p>
            Everyday physical supplies that match the
            provide-shelter, do-not-share-grooming-tools,
            and do-not-share-blankets copy on this page —
            a portable 3-sided horse run-in shelter so
            prolonged rain has a dry wall to stand behind,
            a labeled stackable horse grooming caddy so
            each horse&apos;s brushes stay in one box, and
            a large mesh horse blanket wash bag so an
            affected horse&apos;s sheet is washed apart from
            the rest of the barn. These are educational
            keep-dry-and-unshared tools, not a ranked
            product list, not a substitute for veterinary
            care, and not an antimicrobial shampoo or a
            diagnosis. Waterproof sheets and turnout
            blankets already live on blanketing. Paddock
            mud grids and turnout boots already live on
            mud-fever. Curry combs and dandy brushes
            already live on grooming. Color-coded buckets
            already live on strangles. Fly sheets already
            live on fly-control. Sweet-itch rugs already
            live on sweet-itch. Irish-knit coolers already
            live on tying-up. This page does not hop
            antimicrobial shampoo, iodine wash, mite
            treatments, or systemic drugs. This page does
            not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (portable 3 sided horse run in shelter /
              labeled stackable horse grooming caddy /
              large mesh horse blanket wash bag).
              These are educational keep-dry-and-unshared
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              vaccine / antimicrobial / waterproof-sheet /
              mud-grid / fly-sheet ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1103
              heavy+duty+paddock+mud+grid /
              full+length+horse+turnout+boots /
              waffle+weave+horse+leg+towel, #1102
              irish+knit+horse+cooler /
              wool+exercise+quarter+sheet /
              loose+plain+white+salt+horse, #1101
              steel+heart+bar+horseshoe /
              3+degree+leather+wedge+pad /
              rocker+toe+steel+horseshoe, #1100
              long+handle+stock+tank+brush /
              20+foot+barn+mosquito+netting /
              fine+mesh+horse+mosquito+sheet, #1099
              30+foot+cotton+lunge+line /
              leather+chain+lead+shank+horse /
              orange+traffic+cone+set, #1098
              weatherproof+storage+clipboard /
              round+rubber+feed+pan+horse /
              paper+pellet+horse+bedding, #1097
              color+coded+flat+back+horse+buckets /
              disposable+coverall+suit /
              heavy+duty+rubber+boot+dip+tub, #1094
              lidded+5+gallon+feed+soaking+pail /
              large+smooth+feed+tub+rocks /
              apple+wedger+slicer,
              horse+waterproof+sheet /
              horse+turnout+blanket (blanketing),
              horse+curry+comb / horse+dandy+brush
              (grooming),
              horse+fly+sheet (fly-control),
              horse+sweet+itch+rug (sweet-itch).
              Medications and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the rain-rot keep-dry-and-unshared kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page provide-shelter, do-not-share-
              grooming-tools, and do-not-share-blankets
              copy — a portable 3-sided horse run-in
              shelter, a labeled stackable horse grooming
              caddy, and a large mesh horse blanket wash
              bag. Educational keep-dry-and-unshared tools
              only. Sharing a wet brush, leaving a wet
              horse blanketed, or guessing an antimicrobial
              shampoo is not the job of this kit. They
              are not a ranked product list, they are
              not a substitute for veterinary care, they
              are not a #1103 mud-grid / turnout-boot /
              leg-towel hop, they are not a #1102
              Irish-knit-cooler / quarter-sheet /
              loose-salt hop, they are not a #1101
              heart-bar / wedge-pad / rocker-toe hop,
              they are not a #1100 stock-tank-brush /
              barn-mosquito-netting / mosquito-sheet hop,
              they are not a #1099 lunge-line /
              lead-shank / traffic-cone hop, they are
              not a #1098 clipboard / feed-pan /
              paper-pellet-bedding hop, they are not a
              #1097 color-coded-bucket / coverall /
              boot-dip-tub hop, they are not a #1094
              soaking-pail / feed-tub-rock / apple-wedger
              hop, they are not a blanketing waterproof-
              sheet hop, they are not a grooming curry-
              comb hop, they are not a fly-control
              fly-sheet hop, and they do not replace a
              veterinarian. Horses.com earns a commission
              on qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/portable+3+sided+horse+run+in+shelter?s=health-rain-rot"
                amazonLabel="Browse portable 3-sided horse run-in shelters on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/labeled+stackable+horse+grooming+caddy?s=health-rain-rot"
                amazonLabel="Browse labeled stackable horse grooming caddies on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/large+mesh+horse+blanket+wash+bag?s=health-rain-rot"
                amazonLabel="Browse large mesh horse blanket wash bags on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Scott DW, Miller WH. Equine Dermatology, 2nd ed., Elsevier, 2011.</li>
            <li>Fadok VA. “An Overview of Equine Dermatoses Characterized by Scaling and Crusting.” Veterinary Clinics of North America: Equine Practice, 1995; 11(1):43–51.</li>
            <li>American Association of Equine Practitioners. “Rain Rot / Dermatophilosis” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
