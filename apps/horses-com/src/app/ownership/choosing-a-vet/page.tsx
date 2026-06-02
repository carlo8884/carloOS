import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Choosing an Equine Vet — Finding and Working With Your Veterinarian",
  description:
    "Reference guide to choosing an equine veterinarian: why the relationship matters, what to look for, emergency cover, building the relationship, and the VCPR.",
  path: '/ownership/choosing-a-vet',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Choosing an Equine Vet — Finding and Working With Your Veterinarian",
  description:
    "Reference guide to choosing an equine veterinarian: why the relationship matters, what to look for, emergency cover, building the relationship, and the VCPR.",
  url: 'https://horses.com/ownership/choosing-a-vet',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Why should I choose a vet before an emergency happens?",
    answer:
      "Because emergencies do not wait, and the worst time to search for a veterinarian is during a colic at midnight. A vet who already knows your horse and its history makes faster, better decisions in a crisis, and many treatments and prescriptions require an established relationship. Registering and using a vet for routine care means help is ready when you need it.",
    answerText:
      "Because emergencies don't wait, and a vet who already knows your horse decides faster in a crisis. Many treatments also need an established relationship, so register and use one before you need it.",
  },
  {
    question: "What should I look for in an equine vet?",
    answer:
      "Look for genuine equine experience and qualifications (not only small-animal practice), a location and coverage area close enough to attend promptly, a good reputation among local horse owners and your barn, access to diagnostics and clear referral arrangements, and a communication style you trust and can talk to honestly. Reliable emergency cover is especially important.",
    answerText:
      "Equine experience and qualifications, a location close enough to attend promptly, a good local reputation, access to diagnostics and referral, clear communication, and reliable emergency cover.",
  },
  {
    question: "What is a vet-client-patient relationship?",
    answer:
      "The vet-client-patient relationship (VCPR) means a veterinarian has examined and become familiar with your horse and can therefore make informed decisions and legally prescribe medication for it. Many treatments and prescriptions require an established VCPR, which is why registering with a vet and using them for routine care matters before any emergency arises.",
    answerText:
      "It means a vet has examined and knows your horse and can make informed decisions and legally prescribe for it. Many treatments require it, so establish it through routine care before emergencies.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function ChoosingVetPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Choosing an Equine Vet",
          subtitle:
            "Your veterinarian is the single most important professional relationship in horse ownership -- the partner you rely on for routine care and the person you call at two in the morning when something is badly wrong. Choosing the right equine vet, and building a genuine working relationship before an emergency, is among the most consequential decisions a new owner makes. This guide covers what to look for and how to work well together. This is reference material to inform the choice.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Choosing a Vet", href: '/ownership/choosing-a-vet' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why the Relationship Matters", href: "#why" },
            { label: "What to Look For", href: "#look" },
            { label: "Emergency Cover", href: "#emergency" },
            { label: "The Vet-Client-Patient Relationship", href: "#vcpr" },
            { label: "Building the Relationship", href: "#building" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "First-Aid Kit", href: "/ownership/first-aid-kit" },
              { label: "The Pre-Purchase Exam", href: "/ownership/pre-purchase-exam" },
              { label: "Vaccination Schedule", href: "/guides/equine-vaccination-schedule" },
              { label: "Equine Colic", href: "/health/colic" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-vet"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="why">Why the Relationship Matters</h2>
          <p>An equine veterinarian does far more than treat illness: they guide vaccination and parasite control, perform dental and routine care, conduct pre-purchase exams, advise on nutrition and management, and are the first call in any emergency. A vet who knows your horse and its history makes faster, better decisions in a crisis. Because emergencies do not wait, the relationship must be established before you need it -- the worst time to be searching for a vet is during a colic at midnight.</p>

          <h2 id="look">What to Look For</h2>
          <ul>
            <li><strong>Equine focus and qualifications</strong> -- a vet experienced with horses (an equine or large-animal practice), not only small animals.</li>
            <li><strong>Location and coverage area</strong> -- close enough to attend promptly, especially for emergencies.</li>
            <li><strong>Reputation</strong> among local horse owners, trainers, and your boarding facility.</li>
            <li><strong>Facilities and referral</strong> -- access to diagnostics, and clear arrangements for referring surgical or specialist cases.</li>
            <li><strong>Communication style</strong> that suits you -- a vet who explains clearly and whom you trust and can talk to honestly.</li>
          </ul>

          <h2 id="emergency">Emergency Cover</h2>
          <p>Confirm how emergencies are handled before you commit, because this is when a vet matters most. Ask whether the practice provides 24-hour emergency cover, who answers after hours, the typical response time to your location, and what referral options exist for cases needing hospital care or surgery. A practice with reliable, prompt emergency cover and a clear referral pathway to a surgical hospital is invaluable, and worth prioritizing in the choice.</p>

          <h2 id="vcpr">The Vet-Client-Patient Relationship</h2>
          <p>A formal concept underpins veterinary care: the vet-client-patient relationship, or VCPR. It means a veterinarian has examined and become familiar with your horse and can therefore make informed decisions and legally prescribe medication for it. Many treatments and prescriptions require an established VCPR, which is one more reason to register with a vet and have them see your horse for routine care -- so that when something goes wrong, they already know the patient and can act.</p>

          <h2 id="building">Building the Relationship</h2>
          <p>Once you have chosen a vet, invest in the relationship through routine care -- vaccinations, dental checks, and wellness visits -- rather than only calling in crises. Keep good records, follow advice, ask questions, settle accounts promptly, and be a considerate client (a calm, prepared owner with the horse caught and the history ready makes the vet&apos;s job easier). A strong, trusting, two-way relationship pays off enormously when a real emergency comes, because the vet knows you and your horse and you trust their judgment.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Choosing and Working With Your Veterinarian” owner resources. aaep.org.</li>
            <li>American Veterinary Medical Association. Guidance on the veterinarian-client-patient relationship. avma.org.</li>
            <li>British Equine Veterinary Association (BEVA). Finding an equine vet. beva.org.uk.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
