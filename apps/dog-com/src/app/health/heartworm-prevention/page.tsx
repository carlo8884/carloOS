import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Heartworm Prevention for Dogs — Monthly Preventives | Dog.com', description: 'Heartworm disease is preventable and expensive to treat. Monthly preventives, annual testing, and what to do if your dog tests positive.', path: '/health/heartworm-prevention', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Heartworm Prevention for Dogs', description: 'Monthly preventives, annual testing, and treatment for heartworm disease.', url: 'https://dog.com/health/heartworm-prevention', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Heartworm Prevention for Dogs',
  description: 'Monthly preventives and annual testing for heartworm disease.',
  url: 'https://dog.com/health/heartworm-prevention',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
})
const combinedSchemaAll = combineSchemas(schema, medicalSchema)

export default function HeartwormPreventionPage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      siteId="dog-com"
      hero={{ title: 'Heartworm Prevention for Dogs', subtitle: 'Heartworm disease is preventable with a monthly chew that costs $8–15/month. Treatment when disease is established costs $1,000–2,000 and requires months of strict rest. Prevention is not optional.', category: 'Preventive Care', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '7 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Heartworm Prevention', href: '/health/heartworm-prevention' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' }, { label: 'Dog Vaccination Guide', href: '/health/dog-vaccinations' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
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
          <li><strong>Heartgard Plus (ivermectin + pyrantel):</strong> The most commonly prescribed standalone heartworm preventive. Also covers roundworms and hookworms. Monthly beef-flavored chew.</li>
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
      </div>
    </ArticleLayout>
    </>
  )
}
