import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Flea & Tick Prevention for Pets — A Complete Guide | Vets.co", description: "Fleas and ticks cause more than itching — they spread serious disease. Learn how prevention works, why year-round control matters, and how to choose products.", path: '/health/flea-tick-prevention', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Flea and Tick Prevention for Pets', description: 'How flea and tick prevention works and why year-round control matters.', url: 'https://vets.co/health/flea-tick-prevention', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Flea and Tick Prevention for Pets', description: 'How parasite prevention works and the diseases it prevents.', url: 'https://vets.co/health/flea-tick-prevention', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Why do vets recommend year-round prevention?", answer: "Fleas and ticks are active in more conditions and seasons than many owners expect, and a single warm spell can sustain them; fleas can also survive indoors year-round. Year-round prevention avoids gaps that allow infestations to establish or disease to be transmitted, and it is far easier than treating an established flea infestation, which involves the home environment as well as the pet. Many products also cover other parasites. The American Heartworm Society and veterinary guidance generally favor consistent, year-round protection over seasonal use." },
  { question: "Are over-the-counter products as good as prescription ones?", answer: "Effectiveness and safety vary widely, and the right product depends on your pet's species, weight, health, and risk. Some over-the-counter products are effective and others are not, and importantly, some products safe for dogs are highly toxic to cats. Because of these differences — and because dosing must match the individual pet — it is best to choose a flea and tick product on your veterinarian's recommendation rather than by guesswork. Never use a dog product on a cat without veterinary direction." },
  { question: "What diseases do fleas and ticks spread?", answer: "Beyond itching and allergic skin disease, fleas can transmit tapeworms and, in some regions, bacterial infections, and heavy infestations can cause dangerous anemia in small or young pets. Ticks transmit a range of serious illnesses including Lyme disease, anaplasmosis, ehrlichiosis, and others depending on region and tick species, some of which also affect people. Preventing these parasites therefore protects against far more than discomfort — it is genuine protection against potentially serious, sometimes zoonotic, disease." },
]
export default function FleaTickPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Flea and Tick Prevention', subtitle: 'Fleas and ticks are more than a nuisance — they transmit tapeworms, cause allergic skin disease and anemia, and spread serious tick-borne illnesses, some of which affect people too. Consistent, year-round prevention is one of the highest-value, lowest-effort things you can do for your pet\'s health. Here is how it works and how to choose the right approach.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Flea & Tick Prevention', href: '/health/flea-tick-prevention' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Why It Matters</div>
            {[['Disease', 'Lyme, tapeworm, more'], ['Allergy', 'Flea allergy dermatitis'], ['Anemia', 'Heavy infestations'], ['Year-round', 'Avoids protection gaps']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' }, { label: 'Intestinal Parasites', href: '/health/intestinal-parasites' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-flea-tick" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Never use dog products on cats">
            Some flea and tick products that are safe for dogs are highly toxic to cats and can cause severe, life-threatening reactions. Always use species-appropriate products and follow your veterinarian's guidance. If you have both species, keep their products clearly separated.
          </CalloutBox>

          <h2>Why Prevention Matters</h2>
          <p>Fleas and ticks cause far more than itching. Fleas trigger flea allergy dermatitis — one of the most common skin conditions in pets — transmit tapeworms, and in heavy infestations can cause dangerous anemia, especially in small or young animals. Ticks transmit serious infections such as Lyme disease, anaplasmosis, and ehrlichiosis, several of which can also affect people. Preventing these parasites protects your pet from disease and discomfort and reduces zoonotic risk to your household.</p>

          <h2>How Prevention Works</h2>
          <p>Modern preventives work by killing or repelling parasites before they can establish or transmit disease, delivered as topical spot-ons, oral chews, or collars depending on the product. Many products protect against fleas and ticks together, and some also cover other parasites such as mites or intestinal worms. The right choice depends on your pet's species, weight, health status, lifestyle, and regional parasite risks, which is why a veterinarian's recommendation matters more than a label claim.</p>

          <h2>Why Year-Round, Consistent Use</h2>
          <p>Gaps in prevention are where problems start. Fleas can survive indoors and remain active in mild conditions, and ticks are active across more of the year than many owners assume. A single lapse can allow an infestation to take hold — and once fleas establish in a home, eliminating them requires treating the environment as well as the pet, a far bigger task than prevention. Year-round, consistent use closes these gaps and is the approach veterinary guidance generally favors.</p>

          <h2>Choosing the Right Product</h2>
          <p>Effectiveness and safety vary considerably among products, and crucially, some products safe for dogs are toxic to cats. Because dosing must match the individual animal and the best choice depends on regional risks and your pet's health, select a product on your veterinarian's recommendation rather than by guesswork. Use products exactly as directed, and never apply a dog product to a cat. If you are unsure whether a product is working or appropriate, ask your veterinary team.</p>

          <h2>Environmental and Lifestyle Measures</h2>
          <p>Prevention products are most effective alongside good habits. Check your pet for ticks after walks in grassy or wooded areas and remove any promptly and correctly. Keep grass trimmed and reduce wildlife access to your yard where feasible. Wash pet bedding regularly. For multi-pet homes, treat all pets, since untreated animals can sustain an infestation. Combining consistent preventives with these measures gives the most reliable protection against fleas, ticks, and the diseases they carry.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
