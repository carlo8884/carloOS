import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
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
  modifiedAt: '2026-06-01T00:00:00Z',
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
          <p>The cornerstone of treatment is getting the horse dry and removing the scabs gently, since the organism needs moisture and the scabs harbor it. Bathe with an appropriate antimicrobial shampoo as directed, lather and let it sit, then gently lift the loosened scabs (which can be uncomfortable, so be patient and kind). Keep the horse out of the rain and dry until healed. Widespread, severe, or non-resolving cases, or any horse that seems systemically unwell, should be seen by a veterinarian, who may prescribe additional treatment.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Provide shelter</strong> so horses can get out of prolonged rain.</li>
            <li><strong>Keep the coat clean and dry</strong> -- groom regularly, dry sweaty horses, and avoid leaving a wet horse blanketed.</li>
            <li><strong>Do not share grooming tools, tack, or blankets</strong> between affected and unaffected horses.</li>
            <li><strong>Manage insects</strong> that break the skin barrier and spread the organism.</li>
          </ul>

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
