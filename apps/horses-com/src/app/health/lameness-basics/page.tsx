import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
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
  modifiedAt: '2026-06-01T00:00:00Z',
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
          <h2 id="what">What Lameness Is</h2>
          <p>Lameness is any deviation from a horse&apos;s normal gait, almost always caused by pain somewhere in the limb, foot, back, or pelvis, though occasionally by a mechanical restriction such as a scarred-down joint. By far the most common source is the foot -- the old farrier adage that lameness is in the foot until proven otherwise holds up statistically. Lameness can be sudden and severe (an abscess, a fracture) or slow and subtle (arthritis, navicular syndrome).</p>

          <h2 id="spotting">Spotting Lameness</h2>
          <p>A horse is usually trotted in a straight line on firm, level ground and watched from the front, behind, and the side. For a front-limb lameness, the horse raises its head as the painful leg lands and drops the head as the sound leg lands -- the classic &apos;head bob&apos; (down on sound). Hind-limb lameness is read from the pelvis: the hip on the painful side rises higher (the &apos;hip hike&apos;). Lungeing on a circle and flexion tests exaggerate subtle lameness, and watching on hard versus soft ground gives further clues.</p>

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
          <p>A veterinary lameness examination follows a logical sequence: history and visual exam, palpation, hoof testers, watching the horse move in hand and on the lunge, flexion tests, and then -- to pinpoint the source -- diagnostic nerve and joint blocks that temporarily numb specific regions. Once localized, imaging (radiography, ultrasound, and where needed MRI or CT) reveals the structural problem. This systematic approach is why an accurate diagnosis usually needs a veterinarian rather than guesswork.</p>

          <h2 id="when">When to Call the Vet</h2>
          <ul>
            <li>Sudden, severe (grade 4-5) lameness or non-weight-bearing on a limb -- treat as urgent; rule out fracture.</li>
            <li>Obvious swelling, heat, or a wound over a joint or tendon.</li>
            <li>Lameness with fever or signs of systemic illness.</li>
            <li>Any lameness that does not resolve within a day or two of rest.</li>
            <li>Recurrent or progressive lameness, which points to a problem that needs diagnosis rather than time.</li>
          </ul>

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
