import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'American Heartworm Society: Current Canine Heartworm Guidelines (2018 revision)', url: 'https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines', publisher: 'American Heartworm Society' },
  { label: 'CAPC: Companion Animal Parasite Council — Heartworm Recommendations', url: 'https://capcvet.org/guidelines/heartworm/', publisher: 'CAPC' },
  { label: 'AVMA: Heartworm Disease in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/heartworm-disease', publisher: 'AVMA' },
  { label: 'FDA CVM: Heartworm Prevention Products — Approved Drugs for Dogs', url: 'https://www.fda.gov/animal-veterinary/product-safety-information/heartworm-disease', publisher: 'FDA CVM' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Heartworm Prevention for Dogs — Monthly Preventives | Dog.com', description: 'Heartworm disease is preventable and expensive to treat. Monthly preventives, annual testing, and what to do if your dog tests positive.', path: '/health/heartworm-prevention', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Heartworm Prevention for Dogs', description: 'Monthly preventives, annual testing, and treatment for heartworm disease.', url: 'https://dog.com/health/heartworm-prevention', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Heartworm Prevention for Dogs',
  description: 'Monthly preventives and annual testing for heartworm disease.',
  url: 'https://dog.com/health/heartworm-prevention',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
})
const FAQS = [
  { question: 'Do dogs really need heartworm prevention year-round?', answer: 'Yes. Heartworm disease is present in all 50 US states, and mosquitoes can be active even in colder months in heated indoor environments. Year-round prevention is both simpler and safer than seasonal dosing — and because monthly preventives work retroactively (clearing larvae acquired in the previous month), gaps in dosing are exactly when infections establish. All dogs in the continental US should be on year-round prevention.' },
  { question: 'What happens if I miss a dose of heartworm prevention?', answer: 'Monthly preventives eliminate larvae the dog was exposed to in the previous month — missing a month creates a gap during which larvae can mature. If it has been more than 2 months since the last dose, a dog should not simply restart preventive without a negative heartworm test: starting preventive in an infected dog without treatment can cause a life-threatening reaction. Call your veterinarian for guidance on testing and restarting.' },
  { question: 'Why does my dog need an annual heartworm test if already on prevention?', answer: 'Two reasons, per the American Heartworm Society guidance this page summarizes: no preventive is 100% effective, and early detection of a breakthrough infection matters; and if a dose was missed or vomited unnoticed, the annual antigen test catches any resulting infection. The test is a simple blood test — results in about 10 minutes in-clinic.' },
  { question: 'How much does heartworm treatment cost compared to prevention?', answer: 'Prevention is a monthly chew costing roughly $8–15/month. Treatment of established disease uses melarsomine (an arsenic-based compound), costs $1,000–2,000+ in total with monitoring, and requires 4–6 months of strict exercise restriction so dying worms do not lodge in the lungs. Melarsomine is also intermittently in shortage. The economics and the medicine point the same direction: prevent.' },
  { question: 'Is heartworm medication safe for collies and other herding breeds?', answer: 'At standard preventive doses, yes. Some herding breeds (Collies, Shelties, Australian Shepherds, Border Collies) carry the MDR1/ABCB1 mutation that makes them sensitive to ivermectin at high doses — but standard heartworm-preventive doses are far below the toxic threshold, and milbemycin-based products (Interceptor) are also safe. If you have concerns about your dog\'s breed or MDR1 status, discuss product choice with your veterinarian.' },
]

const combinedSchemaAll = combineSchemas(schema, medicalSchema, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function HeartwormPreventionPage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      siteId="dog-com"
      contentType="health"
      hero={{ title: 'Heartworm Prevention for Dogs', subtitle: 'Heartworm disease is preventable with a monthly chew that costs $8–15/month. Treatment when disease is established costs $1,000–2,000 and requires months of strict rest. Prevention is not optional.', category: 'Preventive Care', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '7 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Heartworm Prevention', href: '/health/heartworm-prevention' }]}
      relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Vaccinations', href: '/health/dog-vaccinations', category: 'Dog Health' }, { title: 'Best Heartworm Prevention', href: '/reviews/best-heartworm-prevention', category: 'Related' }, { title: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention', category: 'Related' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' }, { label: 'Dog Vaccination Guide', href: '/health/dog-vaccinations' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
        <RelatedLinks title="Plan for the Cost" links={[{ label: 'Compare Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="health-heartworm" />
      </>}
    >
      <div className="carloOS-article">
        <h2>What Heartworm Disease Is</h2>
        <p>Dirofilaria immitis — heartworms — are parasitic worms that live in the heart, lungs, and associated blood vessels of dogs. Transmitted by mosquitoes. A single infected mosquito bite can transmit larvae; larvae mature into worms over 6 months; adult worms live for 5–7 years and can reach 12 inches in length. Untreated heavy infections cause heart failure, lung disease, and death.</p>
        <p>Heartworm disease is present in all 50 US states and is endemic in warm, humid regions (Southeast, Gulf Coast, Mississippi River Valley, Atlantic Coast). All dogs in the continental US should be on year-round prevention — mosquitoes can be present even in colder months in heated indoor environments, and climate patterns make year-round prevention simpler and safer than seasonal.</p>

        <h2>Prevention — Monthly Preventives</h2>
        <p>Monthly heartworm preventives work by eliminating any larvae the dog was exposed to in the previous month before they can mature. They do not prevent infection in real-time — they clear it monthly. This is why monthly dosing is essential: missing a month creates a gap during which larvae can mature.</p>
        <ul>
          <li><strong>Heartgard Plus (ivermectin + pyrantel):</strong> A commonly used standalone heartworm preventive. Also covers roundworms and hookworms. Monthly beef-flavored chew.</li>
          <li><strong>Interceptor Plus (milbemycin + praziquantel):</strong> Heartworm plus roundworm, hookworm, whipworm, and tapeworm coverage. Good for dogs with GI parasite exposure.</li>
          <li><strong>Simparica Trio (sarolaner + moxidectin + pyrantel):</strong> Heartworm + flea + tick + roundworm + hookworm in one monthly chew. The most complete single-product preventive available. Appropriate if you also need flea/tick prevention — see our flea/tick guide.</li>
          <li><strong>ProHeart 6 / ProHeart 12:</strong> Injectable heartworm prevention given by a veterinarian — 6-month or 12-month formulation. No monthly compliance required. Excellent option for dogs whose owners forget monthly dosing.</li>
        </ul>
        <p><strong>Note on collies and MDR1-positive dogs:</strong> Some herding breeds (Collies, Shelties, Australian Shepherds, Border Collies) carry the MDR1/ABCB1 genetic mutation that makes them sensitive to certain drugs including ivermectin at high doses. Standard heartworm preventive doses of ivermectin are safe in MDR1-positive dogs — the dose is far below the toxic threshold. Milbemycin-based products (Interceptor) are also safe. Discuss with your vet if you have concerns.</p>

        <h2>Annual Testing</h2>
        <p>Annual heartworm testing is recommended even in dogs on prevention — for two reasons: (1) no preventive is 100% effective, and early detection of a breakthrough infection is important; (2) if a dose was missed or vomited, testing detects any resulting infection.</p>
        <p>The heartworm antigen test is a blood test performed in-clinic (results in 10 minutes) or sent to a laboratory. It detects adult female worms. A dog cannot begin a new heartworm preventive if it has been more than 2 months since the last dose without a negative heartworm test — starting preventive in an infected dog without treatment can cause a life-threatening reaction.</p>

        <h2>Treatment If Positive</h2>
        <p>Heartworm treatment (melarsomine — an arsenic-based compound) kills adult worms. The protocol requires strict exercise restriction for 4–6 months — the dying worms must be broken down and absorbed without the increased blood flow from exercise causing them to lodge in the lungs. Treatment is $500–1,500 for the medication; total treatment costs with monitoring reach $1,000–2,000+. Severe infections may require additional hospitalization. Immiticide is in intermittent shortage — availability varies. Prevention is the correct approach.</p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
    </>
  )
}
