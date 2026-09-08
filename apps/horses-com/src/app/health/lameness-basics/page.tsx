import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Lameness Basics — Spotting It, Grading, When to Call the Vet",
  description:
    "Reference guide to equine lameness: how to recognize it, the AAEP 0-5 grading scale, common causes by location, the workup, and when to call the vet.",
  path: '/health/lameness-basics',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Lameness Basics — Spotting It, Grading, When to Call the Vet",
  description:
    "Equine lameness basics: recognition, the AAEP 0-5 grading scale, common causes, the diagnostic workup, and when to involve a veterinarian.",
  url: 'https://horses.com/health/lameness-basics',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Lameness",
  description:
    "Equine lameness basics: recognition, the AAEP 0-5 grading scale, common causes, the diagnostic workup, and when to involve a veterinarian.",
  url: 'https://horses.com/health/lameness-basics',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "How can I tell which leg my horse is lame on?",
    answer:
      "For front-limb lameness, watch the head at the trot: the horse raises its head when the painful leg lands and lowers it when the sound leg lands -- remember 'down on sound.' For hind-limb lameness, watch the pelvis: the hip on the painful side rises higher (the hip hike). Trotting on firm, level ground makes this easiest to see.",
    answerText:
      "For front lameness, the head goes up when the sore leg lands ('down on sound'). For hind lameness, the hip on the sore side rises higher. Trot on firm level ground to see it.",
  },
  {
    question: "What does the AAEP lameness grade mean?",
    answer:
      "The AAEP grades lameness 0 to 5: 0 is sound, 1 is barely detectable, 2 shows only under certain conditions, 3 is consistent at a trot, 4 is obvious with marked head nod or hip hike, and 5 is minimal weight-bearing or inability to move. It gives owners and vets a shared scale to describe severity.",
    answerText:
      "It is a 0-to-5 scale: 0 sound, 1 barely detectable, 2 shows under certain conditions, 3 consistent at trot, 4 obvious, 5 barely weight-bearing. It standardizes how severity is described.",
  },
  {
    question: "Is sudden severe lameness always serious?",
    answer:
      "Sudden severe lameness is most often a hoof abscess, which resolves quickly once drained, but it can also signal a fracture or other emergency that an owner cannot rule out. Because the stakes are high, sudden non-weight-bearing lameness should always prompt a call to the veterinarian.",
    answerText:
      "Often it is a hoof abscess, which resolves fast once drained, but it can also be a fracture you cannot rule out at home. Sudden non-weight-bearing lameness always warrants a vet call.",
  },
]

export default function LamenessBasicsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Navicular Syndrome', href: '/health/navicular-syndrome' },
          { title: 'Osteoarthritis', href: '/health/osteoarthritis' },
          { title: 'Laminitis', href: '/health/laminitis' },
        ]}
        hero={{
          title: "Equine Lameness Basics",
          subtitle:
            "Lameness -- an abnormality of gait caused by pain or mechanical restriction -- is the most common reason horses need veterinary attention. Most owners will face it, and being able to recognize lameness, describe it accurately, and know when it is urgent is one of the most valuable skills in horsemanship. This guide explains how lameness is spotted, graded, and worked up. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Lameness Basics", href: '/health/lameness-basics' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Lameness Is", href: "#what" },
            { label: "Spotting Lameness", href: "#spotting" },
            { label: "The AAEP Grading Scale", href: "#grading" },
            { label: "Common Causes", href: "#causes" },
            { label: "The Veterinary Workup", href: "#workup" },
            { label: "When to Call the Vet", href: "#when" },
            { label: "Spot-and-describe kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hoof Abscess", href: "/health/abscess" },
              { label: "Osteoarthritis in Horses", href: "/health/osteoarthritis" },
              { label: "Navicular Syndrome", href: "/health/navicular-syndrome" },
              { label: "The Farrier Schedule", href: "/care/farrier-schedule" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-lameness"
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
              Owner notes
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">Owner notes</h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">Leave an email if you want occasional owner notes from this page. We send them to the inbox you enter. There is no downloadable kit, PDF, or course.</p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Owner notes"
              subtitle="We'll use this address for occasional notes from this page. No downloadable kit, PDF, or course."
              ctaText="Send the notes"
              source="health-lameness-under-hero"
            />
          </div>

          <h2 id="what">What Lameness Is</h2>
          <p>Lameness is any deviation from a horse&apos;s normal gait, almost always caused by pain somewhere in the limb, foot, back, or pelvis, though occasionally by a mechanical restriction such as a scarred-down joint. By far the most common source is the foot -- the old farrier adage that lameness is in the foot until proven otherwise holds up statistically. Lameness can be sudden and severe (an abscess, a fracture) or slow and subtle (arthritis, navicular syndrome).</p>

          <h2 id="spotting">Spotting Lameness</h2>
          <p>A horse is usually trotted in a straight line on firm, level ground and watched from the front, behind, and the side. Orange traffic cones are how that straight line is marked on firm ground instead of guessed across a yard — they are not ice grit (that lives on winter-care) and not a measuring stick. For a front-limb lameness, the horse raises its head as the painful leg lands and drops the head as the sound leg lands -- the classic &apos;head bob&apos; (down on sound). Hind-limb lameness is read from the pelvis: the hip on the painful side rises higher (the &apos;hip hike&apos;). Lungeing on a circle and flexion tests exaggerate subtle lameness. Watching on hard versus soft ground gives further clues.</p>

          <h2 id="grading">The AAEP Grading Scale</h2>
          <p>The American Association of Equine Practitioners grades lameness on a 0-to-5 scale, which gives veterinarians and owners a shared language:</p>
          <ul>
            <li><strong>Grade 0</strong> -- no perceptible lameness under any circumstances.</li>
            <li><strong>Grade 1</strong> -- difficult to observe and not consistently apparent.</li>
            <li><strong>Grade 2</strong> -- difficult to observe at a walk or straight line but consistent under certain circumstances (circling, hard ground, after flexion).</li>
            <li><strong>Grade 3</strong> -- consistently observable at a trot under all circumstances.</li>
            <li><strong>Grade 4</strong> -- obvious lameness with marked head nodding, hip hike, or shortened stride.</li>
            <li><strong>Grade 5</strong> -- minimal weight-bearing in motion or at rest, or an inability to move.</li>
          </ul>

          <h2 id="causes">Common Causes</h2>
          <ul>
            <li><strong>Foot</strong> -- abscesses, bruising, thrush, laminitis, navicular syndrome; the most common region overall.</li>
            <li><strong>Joints</strong> -- osteoarthritis, ringbone, bone spavin in the hock.</li>
            <li><strong>Soft tissue</strong> -- tendon and ligament injuries (superficial and deep digital flexor tendons, suspensory ligament).</li>
            <li><strong>Bone</strong> -- fractures, splints, bucked shins.</li>
            <li><strong>Upper limb, back, and pelvis</strong> -- less common but important in hard-to-localize cases.</li>
          </ul>

          <h2 id="workup">The Veterinary Workup</h2>
          <p>A veterinary lameness examination follows a logical sequence: history and visual exam, palpation, hoof testers, watching the horse move in hand and on the lunge, flexion tests, and then -- to pinpoint the source -- diagnostic nerve and joint blocks that temporarily numb specific regions. Once localized, imaging (radiography, ultrasound, and where needed MRI or CT) reveals the structural problem. This systematic approach is why an accurate diagnosis usually needs a veterinarian rather than guesswork.

          <h2 id="when">When to Call the Vet</h2>
          <ul>
            <li>Sudden, severe (grade 4-5) lameness or non-weight-bearing on a limb -- treat as urgent; rule out fracture.</li>
            <li>Obvious swelling, heat, or a wound over a joint or tendon.</li>
            <li>Lameness with fever or signs of systemic illness.</li>
            <li>Any lameness that does not resolve within a day or two of rest.</li>
            <li>Recurrent or progressive lameness, which points to a problem that needs diagnosis rather than time.</li>
          </ul>

          <h2 id="kit">Spot-and-describe kit</h2>
          <p>
            Everyday physical supplies that match the
            lunge-on-a-circle, trot-in-hand, and
            firm-level-straight-line copy on this page — a
            30-foot cotton lunge line so subtle lameness
            shows on a consistent circle, a leather chain
            lead shank so the in-hand trot-up stays on one
            steady line, and an orange traffic-cone set so
            that line is marked on firm ground instead of
            guessed across a yard. These are educational
            spot-and-describe tools, not a ranked product
            list, not a substitute for veterinary care, and
            not a diagnosis or a treatment. Hoof testers,
            nerve blocks, and imaging stay with the
            veterinarian. This page does
            not claim hands-on testing. </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (30 foot cotton lunge line /
              leather chain lead shank horse /
              orange traffic cone set).
              These are educational spot-and-describe
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              vaccine / hoof-tester / soaking-boot /
              ice-boot ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1098
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
              apple+wedger+slicer, #1093
              48+hour+digital+kitchen+timer /
              lined+telephone+message+pad /
              medium+hard+sided+plastic+pet+carrier,
              horse+halter+lead+rope (cost calculator),
              horse+trailer+ties (trailering),
              nylon+equine+stall+guard
              (turnout-vs-stabling),
              horse+hoof+soaking+boot / epsom+salt
              (abscess), ice+boot+cold+therapy+wrap
              (grimace scale), horse+hoof+boots
              (hoof-care-basics).
              Hoof testers, vaccines, and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/30+foot+cotton+lunge+line?s=health-lameness"
                amazonLabel="Browse 30-foot cotton lunge lines on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/leather+chain+lead+shank+horse?s=health-lameness"
                amazonLabel="Browse leather chain lead shanks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/orange+traffic+cone+set?s=health-lameness"
                amazonLabel="Browse orange traffic-cone sets on Amazon →"
              />
          </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Lameness Examination and Grading Scale” resources. aaep.org.</li>
            <li>Ross MW, Dyson SJ (eds). Diagnosis and Management of Lameness in the Horse, 2nd ed., Elsevier, 2011.</li>
            <li>Baxter GM (ed). Adams and Stashak&apos;s Lameness in Horses, 7th ed., Wiley-Blackwell, 2020.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
