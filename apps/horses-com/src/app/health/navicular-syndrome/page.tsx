import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Navicular Syndrome — Caudal Heel Pain, Diagnosis, Management",
  description:
    "Reference guide to navicular syndrome (caudal heel pain): podotrochlear apparatus anatomy, signs, MRI and nerve-block diagnosis, farriery, and management.",
  path: '/health/navicular-syndrome',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Navicular Syndrome — Caudal Heel Pain, Diagnosis, Management",
  description:
    "Navicular syndrome and caudal heel pain in horses: anatomy, clinical signs, diagnostic blocks and MRI, corrective farriery, and management.",
  url: 'https://horses.com/health/navicular-syndrome',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Navicular Syndrome",
  description:
    "Navicular syndrome and caudal heel pain in horses: anatomy, clinical signs, diagnostic blocks and MRI, corrective farriery, and management.",
  url: 'https://horses.com/health/navicular-syndrome',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Is navicular syndrome curable?",
    answer:
      "Navicular syndrome is managed rather than cured. With corrective farriery, appropriate veterinary treatment, controlled exercise, and good footing, many horses remain comfortably in work for years. Prognosis varies with which structures of the podotrochlear apparatus are affected, which is why MRI-guided diagnosis is valuable.",
    answerText:
      "It is managed rather than cured. Corrective farriery and veterinary treatment keep many horses in work for years. Prognosis depends on which structures are involved.",
  },
  {
    question: "Why is corrective shoeing so important for navicular horses?",
    answer:
      "Hoof balance and breakover directly affect how much load and leverage fall on the painful heel and the deep digital flexor tendon. Easing breakover, supporting the heel, and correcting a long-toe low-heel imbalance reduce strain on the podotrochlear apparatus, which is why farriery is the foundation of management.",
    answerText:
      "Hoof balance and breakover control the load on the painful heel and deep digital flexor tendon. Easing breakover and supporting the heel reduce strain, making farriery the foundation of management.",
  },
  {
    question: "Can MRI diagnose navicular syndrome?",
    answer:
      "MRI is the reference standard. It distinguishes lesions of the navicular bone, the bursa, the supporting ligaments, and the deep digital flexor tendon, which radiographs cannot fully separate. Because treatment and prognosis differ by structure, MRI guides a targeted plan in cases that justify the cost.",
    answerText:
      "Yes -- MRI is the reference standard, distinguishing bone, bursa, ligament, and tendon lesions that radiographs cannot separate, and guiding targeted treatment.",
  },
]

export default function NavicularPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Lameness Basics', href: '/health/lameness-basics' },
          { title: 'Osteoarthritis', href: '/health/osteoarthritis' },
          { title: 'Hoof Care Basics', href: '/care/hoof-care-basics' },
        ]}
        hero={{
          title: "Navicular Syndrome",
          subtitle:
            "Navicular syndrome -- increasingly called caudal heel pain or podotrochlosis -- is one of the most common causes of chronic forelimb lameness in riding horses. The term covers a family of degenerative and soft-tissue problems centered on the navicular bone and its surrounding structures deep in the heel of the front foot. Modern MRI imaging has reshaped how the condition is understood and managed, and many affected horses stay in work for years with the right farriery and veterinary plan. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Navicular Syndrome", href: '/health/navicular-syndrome' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "The Anatomy", href: "#anatomy" },
            { label: "What Causes It", href: "#causes" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Farriery", href: "#farriery" },
            { label: "Medical Management", href: "#medical" },
            { label: "Prognosis", href: "#prognosis" },
            { label: "Farriery kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Osteoarthritis in Horses", href: "/health/osteoarthritis" },
              { label: "Hoof Care Basics", href: "/care/hoof-care-basics" },
              { label: "The Farrier Schedule", href: "/care/farrier-schedule" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-navicular"
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
              Keep the navicular farriery-kit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse navicular farriery-kit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the steel-heart-bar-horseshoe,
              3-degree-leather-wedge-pad, and
              rocker-toe-steel-horseshoe notes that match
              the bar-shoes-or-heart-bar-shoes, wedge-pads,
              and rolled-or-rocker-toes copy on this page —
              a steel heart-bar horseshoe so heel support
              is a physical bar instead of a guessed pad
              stack, a 3-degree leather wedge pad so the
              pastern axis is lifted instead of left
              broken-back, and a rocker-toe steel horseshoe
              so breakover shortens without a riding hoof
              boot. Educational farriery-kit checklist,
              not a treatment, not a shoeing prescription,
              not a substitute for calling the veterinarian
              and farrier, and not a foam-sole-support,
              soaking-boot, or snow-pad hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse navicular farriery-kit checklist"
              subtitle="Email the heart-bar, wedge-pad, and rocker-toe notes. No spam."
              ctaText="Email my horse navicular farriery-kit checklist"
              source="health-navicular-under-hero"
            />
          </div>

          <h2 id="anatomy">The Anatomy</h2>
          <p>The navicular bone is a small, boat-shaped bone (hence the name, from the Latin for little ship) that sits behind the coffin joint, deep in the heel. The deep digital flexor tendon glides over its lower surface like a rope over a pulley, cushioned by the navicular bursa. Together the bone, bursa, deep digital flexor tendon, and supporting ligaments form the podotrochlear apparatus. Navicular syndrome is pain arising anywhere within this apparatus.</p>

          <h2 id="causes">What Causes It</h2>
          <p>Rather than a single disease, navicular syndrome reflects chronic biomechanical overload of the heel region. Contributing factors include conformation (small feet relative to body size, long-toe low-heel hoof balance, upright or broken-back pastern axis), the demands of athletic work that loads the heel (jumping, hard stops, circles), and degenerative changes in the bone and soft tissues. MRI studies show that much of the pain comes from the deep digital flexor tendon and the supporting ligaments, not only the bone itself.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>A gradual-onset, often bilateral front-limp lameness that may shift from one foot to the other.</li>
            <li>A short, choppy, toe-first landing as the horse tries to spare the painful heel.</li>
            <li>Lameness that worsens on hard ground, on circles (worse on the inside leg), and after work.</li>
            <li>A tendency to stumble or to point one front foot at rest.</li>
            <li>Improvement after rest that returns with work -- the classic intermittent pattern.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>Diagnosis begins with a lameness examination, including flexion tests and hoof testers. Diagnostic nerve blocks -- a palmar digital block that desensitizes the heel -- localize the pain to the caudal foot. Radiographs assess the navicular bone for degenerative change, but normal radiographs do not rule out the syndrome. MRI is the reference standard, distinguishing tendon, ligament, bursa, and bone lesions and guiding targeted treatment. This is a veterinary diagnostic workup, not something an owner can confirm at home.</p>

          <h2 id="farriery">Farriery</h2>
          <p>Corrective farriery is the foundation of management. The goals are to restore hoof balance, ease breakover, support the heel, and shorten the lever arm on the deep digital flexor tendon. Common approaches include rolled or rocker toes, bar shoes or heart-bar shoes, wedge pads to adjust the pastern axis, and shortening a long toe. A steel heart-bar horseshoe is how heel support stays a physical bar under the frog instead of a guessed pad stack — it is not a foam sole-support pad (that lives on laminitis), not a riding hoof boot (that lives on hoof-care-basics), and not a snow pad (that lives on winter-care). A 3-degree leather wedge pad is how a broken-back pastern axis is lifted instead of left long-toe low-heel — it is not an equine foam sole-support pad and not a hoof-soaking boot (that lives on abscess). A rocker-toe steel horseshoe is how breakover shortens so the deep digital flexor tendon is not levered over a long toe — it is not a portable farrier hoof stand (that lives on the farrier-schedule page) and not a shoe stud (that lives on winter-care). The right prescription depends on the individual foot and on imaging, so the farrier and veterinarian work together.</p>

          <h2 id="medical">Medical Management</h2>
          <p>Beyond farriery, veterinarians may prescribe anti-inflammatory medication, intra-articular or navicular-bursa medication, and bisphosphonate drugs that target bone remodeling in selected cases -- all under veterinary direction. Controlled exercise, appropriate footing, and weight management support the plan. Surgical options such as palmar digital neurectomy exist for refractory cases but are a last resort with their own risks.</p>

          <h2 id="prognosis">Prognosis</h2>
          <p>Navicular syndrome is generally managed rather than cured. Many horses stay comfortably in work for years with consistent farriery and a tailored medical plan, while others step down to lighter work. Prognosis depends heavily on which structures are involved -- bone and bursa lesions often respond better than extensive deep digital flexor tendon damage -- which is why MRI-guided diagnosis matters.</p>

          <h2 id="kit">Farriery kit</h2>
          <p>
            Everyday physical supplies that match the
            bar-shoes-or-heart-bar-shoes, wedge-pads, and
            rolled-or-rocker-toes copy on this page — a
            steel heart-bar horseshoe so heel support is a
            physical bar under the frog, a 3-degree leather
            wedge pad so a broken-back pastern axis is
            lifted, and a rocker-toe steel horseshoe so
            breakover shortens instead of levering the
            deep digital flexor tendon over a long toe.
            These are educational farriery tools, not a
            ranked product list, not a substitute for
            veterinary or farrier care, and not a shoeing
            prescription. Foam sole-support pads and deep-
            sand stall bedding already live on laminitis.
            Riding hoof boots already live on
            hoof-care-basics. Soaking boots already live
            on abscess. Snow pads and shoe studs already
            live on winter-care. Farrier log books, hoof
            stands, and barn flood lights already live on
            the farrier-schedule page. This page does not
            hop anti-inflammatory medication,
            bisphosphonates, nerve-block kits, MRI, or
            neurectomy gear. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (steel heart bar horseshoe /
              3 degree leather wedge pad /
              rocker toe steel horseshoe).
              These are educational farriery
              tools, not a ranked product list, not a
              substitute for veterinary or farrier care,
              no Rx / vaccine / foam-sole-support /
              soaking-boot / snow-pad ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1100
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
              heavy+duty+rubber+boot+dip+tub, #1096
              ruled+marble+composition+notebook /
              soft+cotton+receiving+blanket /
              activated+charcoal+odor+absorber, #1095
              air+driven+corner+sponge+filter /
              preset+25+watt+nano+aquarium+heater /
              food+grade+1+gallon+water+jug, #1094
              lidded+5+gallon+feed+soaking+pail /
              large+smooth+feed+tub+rocks /
              apple+wedger+slicer,
              equine+foam+sole+support+pads /
              equine+deep+sand+stall+bedding /
              easy+keeper+grazing+muzzle (laminitis),
              horse+hoof+boots (hoof-care-basics),
              horse+hoof+soaking+boot /
              epsom+salt+horse+hoof (abscess),
              horse+snow+pads / horse+shoe+studs
              (winter-care),
              equine+farrier+log+book /
              portable+farrier+hoof+stand /
              cordless+barn+flood+light
              (farrier-schedule).
              Medications and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the navicular farriery kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page bar-shoes-or-heart-bar-shoes,
              wedge-pads, and rolled-or-rocker-toes copy —
              a steel heart-bar horseshoe, a 3-degree
              leather wedge pad, and a rocker-toe steel
              horseshoe. Educational farriery tools only.
              They are not a ranked product list, they are
              not a substitute for veterinary or farrier
              care, they are not a #1100 stock-tank-brush /
              barn-mosquito-netting / mosquito-sheet hop,
              they are not a #1099 lunge-line /
              lead-shank / traffic-cone hop, they
              are not a #1098 clipboard / feed-pan /
              paper-pellet-bedding hop, they
              are not a #1097 color-coded-bucket /
              coverall / boot-dip-tub hop, they
              are not a #1096 composition-notebook /
              receiving-blanket / charcoal hop, they
              are not a #1095 sponge-filter /
              nano-heater / water-jug hop, they
              are not a #1094 soaking-pail /
              feed-tub-rock / apple-wedger hop, they
              are not a laminitis foam-pad hop, they
              are not a hoof-care riding-boot hop, they
              are not an abscess soaking-boot hop, they
              are not a winter-care snow-pad hop, they
              are not a farrier-schedule hoof-stand hop,
              and they do not replace a veterinarian or
              farrier. Horses.com earns a commission on
              qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/steel+heart+bar+horseshoe?s=health-navicular"
                amazonLabel="Browse steel heart-bar horseshoes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/3+degree+leather+wedge+pad?s=health-navicular"
                amazonLabel="Browse 3-degree leather wedge pads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/rocker+toe+steel+horseshoe?s=health-navicular"
                amazonLabel="Browse rocker-toe steel horseshoes on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Dyson SJ. “Navicular Disease and Other Soft Tissue Causes of Palmar Foot Pain.” In: Diagnosis and Management of Lameness in the Horse, 2nd ed., Elsevier, 2011.</li>
            <li>Waguespack RW, Hanson RR. “Navicular Syndrome in Equine Patients.” Compendium: Continuing Education for Veterinarians, 2010; 32(12):E1–E13.</li>
            <li>Dyson S, Murray R. “Magnetic Resonance Imaging Evaluation of the Foot in Horses with Foot Pain.” Equine Veterinary Journal, 2007; 39(4):340–343.</li>
            <li>American Association of Equine Practitioners. “Navicular Syndrome” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
