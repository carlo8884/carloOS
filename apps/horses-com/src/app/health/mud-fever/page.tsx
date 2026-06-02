import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Mud Fever in Horses — Pastern Dermatitis, Causes, Treatment",
  description:
    "Reference guide to equine mud fever (pastern dermatitis, scratches): the wet-weather skin condition of the lower legs, causes, treatment, and prevention.",
  path: '/health/mud-fever',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Mud Fever in Horses — Pastern Dermatitis, Causes, Treatment",
  description:
    "Equine mud fever (pastern dermatitis, scratches, greasy heel): causes, signs, treatment, and prevention of lower-limb skin disease.",
  url: 'https://horses.com/health/mud-fever',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Mud Fever (Pastern Dermatitis)",
  description:
    "Equine mud fever (pastern dermatitis, scratches, greasy heel): causes, signs, treatment, and prevention of lower-limb skin disease.",
  url: 'https://horses.com/health/mud-fever',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: "Should I wash mud off my horse's legs every day?",
    answer:
      "Constant washing keeps the skin wet and softened, which can actually promote mud fever. In wet weather it is usually better to let mud dry and then brush it off, or to wash only when necessary and dry the legs thoroughly afterward. Keeping the legs genuinely dry matters more than keeping them spotless.",
    answerText:
      "Not necessarily -- constant washing keeps skin wet and can promote mud fever. Let mud dry and brush it off, or wash only when needed and dry thoroughly. Dry legs matter more than clean ones.",
  },
  {
    question: "Why are white legs more prone to mud fever?",
    answer:
      "Non-pigmented (white) skin is more susceptible to sun-related photosensitivity reactions and tends to be more reactive, making white-legged horses notably more prone to mud fever than those with dark-skinned legs. These horses warrant extra vigilance in wet weather.",
    answerText:
      "Non-pigmented white skin is more reactive and prone to photosensitivity, making white legs more susceptible than dark-skinned legs.",
  },
  {
    question: "When should I call the vet about mud fever?",
    answer:
      "Call a veterinarian if the leg becomes hot, swollen, and painful (possible cellulitis), if the horse is lame, if the lesions are widespread or weeping heavily, or if the condition will not resolve with clean, dry conditions and basic topical care. Those cases may need systemic treatment.",
    answerText:
      "Call a vet if the leg is hot, swollen, and painful, if the horse is lame, if lesions are widespread, or if it will not resolve with basic care -- those may need systemic treatment.",
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function MudFeverPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Mud Fever in Horses",
          subtitle:
            "Mud fever -- known variously as pastern dermatitis, scratches, greasy heel, or cracked heels -- is an inflammatory skin condition of the lower legs that flares in wet, muddy conditions. It is not a single disease but a syndrome with several possible causes, united by a breakdown of the skin barrier on the back of the pastern and heel. Most cases respond to clean, dry conditions and good leg hygiene, but stubborn or severe cases need veterinary input. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Mud Fever", href: '/health/mud-fever' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Mud Fever", href: "#what" },
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
              { label: "Rain Rot", href: "/health/rain-rot" },
              { label: "Winter Care", href: "/care/winter-care" },
              { label: "Grooming the Horse", href: "/care/grooming" },
              { label: "Pasture Management", href: "/care/pasture-management" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-mud-fever"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is Mud Fever</h2>
          <p>Mud fever is dermatitis -- skin inflammation -- on the back of the pastern and the heel, and sometimes higher up the leg. When the skin is repeatedly wetted, it softens and its protective barrier breaks down, allowing organisms (often the same Dermatophilus congolensis behind rain rot, plus other bacteria and sometimes mites or fungal involvement) to colonize and inflame it. The result is scabbing, crusting, and soreness in the lower limb.</p>

          <h2 id="causes">Causes</h2>
          <p>Persistent wet, muddy conditions are the classic trigger, which is why the condition spikes in autumn, winter, and spring. White-skinned, non-pigmented legs are more prone, as are heavily feathered breeds where the long hair traps moisture. Contributing factors include abrasive sand or mud, chronic standing in wet ground, photosensitivity on white legs, mites in feathered horses, and underlying conditions that impair skin or immune health.</p>

          <h2 id="signs">Recognizing It</h2>
          <ul>
            <li>Crusty scabs and matted hair on the back of the pastern and heel.</li>
            <li>Reddened, sore, sometimes weeping skin under the scabs.</li>
            <li>Swelling of the lower leg in more severe cases (cellulitis can develop).</li>
            <li>Cracking of the skin in the heel folds.</li>
            <li>Tenderness, and occasionally lameness if the leg becomes swollen and infected.</li>
          </ul>

          <h2 id="treatment">Treatment</h2>
          <p>Get the leg clean and dry, which usually means moving the horse off wet, muddy ground. Gently clip the hair around the lesions if needed, clean with an appropriate antimicrobial wash, soften and remove scabs gently, then dry thoroughly. Topical barrier and antimicrobial creams are applied as directed. A swollen, hot, painful leg, spreading infection, or a case that will not resolve needs a veterinarian, who may prescribe systemic treatment. Do not pick scabs roughly, which damages skin and worsens the problem.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Provide dry standing.</strong> Rotate muddy paddocks, use hardstanding or gravel around gates and water, and give horses a dry place to stand.</li>
            <li><strong>Keep legs dry.</strong> Avoid washing legs constantly in winter; if you must wash off mud, dry thoroughly afterward.</li>
            <li><strong>Manage feathers</strong> in heavily feathered breeds, keeping them clean and dry and watching for mites.</li>
            <li><strong>Check legs daily</strong> in wet weather so early lesions are caught and treated before they spread.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Scott DW, Miller WH. Equine Dermatology, 2nd ed., Elsevier, 2011.</li>
            <li>Yu AA. “Equine Pastern Dermatitis.” Veterinary Clinics of North America: Equine Practice, 2013; 29(3):577–588.</li>
            <li>American Association of Equine Practitioners. “Scratches / Pastern Dermatitis” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
