import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Senior Horse Care — Keeping the Older Horse Thriving",
  description:
    "Reference guide to caring for senior horses: when a horse is old, common age-related conditions, dental and feeding changes, comfort, and quality of life.",
  path: '/ownership/senior-horse-care',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Senior Horse Care — Keeping the Older Horse Thriving",
  description:
    "Reference guide to caring for senior horses: when a horse is old, common age-related conditions, dental and feeding changes, comfort, and quality of life.",
  url: 'https://horses.com/ownership/senior-horse-care',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "At what age is a horse a senior?",
    answer:
      "There is no fixed age -- many horses are considered geriatric from the late teens into the twenties, but a well-kept horse may work soundly at twenty-five while another ages at fifteen. The real cue to shift into senior care is the appearance of age-related changes such as dental wear, stiffness, or weight change, which is why regular monitoring matters more than counting years.",
    answerText:
      "No fixed age -- often the late teens into the twenties, but it varies widely. The cue is the appearance of age-related changes like dental wear or stiffness, not a birthday.",
  },
  {
    question: "What are the most common health problems in older horses?",
    answer:
      "The most common are PPID (Cushing's disease), which causes a long coat, muscle loss, and laminitis risk and is treatable with pergolide; osteoarthritis causing stiffness and lameness; dental disease from worn or missing teeth; weight change in either direction; and reduced immunity with slower healing. Regular veterinary monitoring catches these early.",
    answerText:
      "PPID (Cushing's), osteoarthritis, dental disease, weight change, and reduced immunity are the most common. Regular monitoring catches them early, and several, like PPID, are treatable.",
  },
  {
    question: "How do I know when it's time to let an old horse go?",
    answer:
      "The decision rests on honest assessment of quality of life. When pain, disease, or decline can no longer be managed well despite good care, the kindest choice is to let the horse go before it suffers. Discussing quality of life openly with a trusted veterinarian, and putting the horse's comfort ahead of reluctance to say goodbye, guides this final responsibility of ownership.",
    answerText:
      "When pain or decline can no longer be well managed despite good care, letting the horse go before it suffers is kindest. Discuss quality of life honestly with your vet and prioritize the horse's comfort.",
  },
]

export default function SeniorHorseCarePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Feeding Senior Horses', href: '/nutrition/feeding-senior-horses' },
          { title: "Equine Cushing's (PPID)", href: '/health/cushings-ppid' },
          { title: 'Equine Dental Care', href: '/guides/equine-dental-care' },
        ]}
        hero={{
          title: "Senior Horse Care",
          subtitle:
            "Thanks to better nutrition and veterinary care, horses now routinely live into their late twenties and thirties, and many stay active well into old age. Caring for a senior horse is about adapting to gradual changes -- in teeth, weight, joints, and health -- before they become crises, and about honest attention to comfort and quality of life. This guide covers the essentials of keeping an older horse thriving. This is reference material to inform care alongside your veterinarian.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Senior Horse Care", href: '/ownership/senior-horse-care' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "When Is a Horse Old", href: "#when" },
            { label: "Common Age-Related Conditions", href: "#conditions" },
            { label: "Teeth and Feeding", href: "#feeding" },
            { label: "Comfort and Exercise", href: "#comfort" },
            { label: "Veterinary Monitoring", href: "#monitoring" },
            { label: "Quality of Life", href: "#qol" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Cushing's / PPID", href: "/health/cushings-ppid" },
              { label: "Feeding Senior Horses", href: "/nutrition/feeding-senior-horses" },
              { label: "Best Equine Supplements", href: "/reviews/best-equine-supplements" },
              { label: "Osteoarthritis in Horses", href: "/health/osteoarthritis" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-senior"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="when">When Is a Horse Old</h2>
          <p>There is no single age at which a horse becomes a senior -- much depends on the individual, the breed, and a lifetime of management. Many horses are considered geriatric somewhere from the late teens into the twenties, but a well-kept horse may be working soundly at twenty-five while another shows its age at fifteen. Rather than a birthday, the cue to shift into senior care is the appearance of age-related changes, which is why regular monitoring matters more than counting years.</p>

          <h2 id="conditions">Common Age-Related Conditions</h2>
          <ul>
            <li><strong>PPID (Cushing’s disease)</strong> -- very common in older horses; causes a long coat, muscle loss, and laminitis risk, and is treatable with veterinarian-prescribed pergolide.</li>
            <li><strong>Osteoarthritis</strong> -- accumulated joint wear causing stiffness and lameness, managed with movement, weight control, and veterinary treatment.</li>
            <li><strong>Dental disease</strong> -- worn, loose, or missing teeth impairing chewing.</li>
            <li><strong>Weight change</strong> in either direction -- some seniors become hard keepers, others stay overweight, especially with PPID.</li>
            <li><strong>Reduced immunity</strong> and slower healing, raising infection and parasite vulnerability.</li>
          </ul>

          <h2 id="feeding">Teeth and Feeding</h2>
          <p>Dental wear is the defining change of old age and drives much of senior feeding. As teeth wear out, a horse struggles to chew long-stem hay, leading to quidding, weight loss, and choke risk, and eventually needing forage in a chewable form -- soaked hay cubes, chopped forage, soaked beet pulp, and complete senior feeds. Feeding must be tailored to the individual, fed up for a thin senior or carefully restricted for an overweight or PPID horse. See the feeding senior horses guide for detail.</p>

          <h2 id="comfort">Comfort and Exercise</h2>
          <p>Gentle, consistent exercise keeps an older horse&apos;s joints mobile, muscles toned, and mind engaged; the arthritic senior generally does better with movement and turnout than with confinement. Adapt the work to the horse -- lighter, with thorough warm-ups -- and provide comfort: shelter, soft footing, protection from bullying by younger herdmates, body clipping for PPID horses that fail to shed, and attentive blanketing for those that struggle to keep warm. Small accommodations make a large difference to an old horse&apos;s comfort.</p>

          <h2 id="monitoring">Veterinary Monitoring</h2>
          <p>Senior horses benefit from more frequent veterinary attention: regular dental exams, testing for PPID when signs appear, more careful parasite control given reduced immunity, attention to vaccination, and prompt investigation of weight loss or other changes. Because age-related conditions develop gradually and a thick or PPID coat hides weight change, regular hands-on checks and body condition scoring catch problems early, when they are most manageable.</p>

          <h2 id="qol">Quality of Life</h2>
          <p>The hardest and most important part of senior care is honest assessment of quality of life. An old horse can be kept comfortable and happy for many years with good management, but there comes a point in some lives when pain, disease, or decline can no longer be managed well, and the kindest decision is to let the horse go before it suffers. Discussing quality of life openly with a trusted veterinarian, and prioritizing the horse&apos;s comfort over the owner&apos;s reluctance to say goodbye, is the final responsibility of good ownership.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine Endocrinology Group. PPID recommendations, current edition. sites.tufts.edu/equineendogroup.</li>
            <li>Ireland JL, et al. Research on geriatric horse health and management, various.</li>
            <li>American Association of Equine Practitioners. “Senior Horse Care” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
