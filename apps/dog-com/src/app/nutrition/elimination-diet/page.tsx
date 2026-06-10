import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Food Allergy Elimination Diet Protocol for Dogs | Dog.com', description: 'How to run a proper 8-12 week food allergy elimination diet in dogs. Novel protein selection, what to avoid, how to confirm food allergy.', path: '/nutrition/elimination-diet', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Food Allergy Elimination Diet Protocol for Dogs', description: '8-12 week food allergy elimination trial — how to do it correctly.', url: 'https://dog.com/nutrition/elimination-diet', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Run a Dog Food Allergy Elimination Diet', description: 'Step-by-step protocol for a diagnostic food elimination trial in dogs.', url: 'https://dog.com/nutrition/elimination-diet', totalTime: 'P12W', steps: [
  { name: 'Choose the right diet', text: 'Select a prescription hydrolyzed protein diet (Royal Canin HP, Hill\'s z/d, Purina HA) or a veterinary novel protein diet. The protein must be one the dog has never eaten. Document every protein the dog has consumed in their lifetime.' },
  { name: 'Eliminate all other food sources', text: 'The trial diet must be the ONLY food. No treats, no chews, no flavored medications, no table scraps. One accidental exposure restarts the 8-week clock. Use plain pieces of the trial food as treats.' },
  { name: 'Run the trial for 8-12 weeks', text: 'Most dogs with food allergy show improvement within 8 weeks; some require the full 12. Document itching scores, ear infection frequency, and GI symptoms weekly throughout the trial.' },
  { name: 'Perform the food challenge', text: 'If symptoms resolve on the elimination diet, reintroduce the original food for 2 weeks. If symptoms return within 2 weeks, food allergy is confirmed. If symptoms do not return, food allergy is unlikely.' },
  { name: 'Identify specific allergens (optional)', text: 'If food allergy is confirmed, reintroduce individual ingredients one at a time (2 weeks each) to identify specific triggers. This allows selection of a long-term commercial diet avoiding those ingredients.' },
]})
const combined = combineSchemas(schema, howTo)
const FAQS = [
  { question: 'Can I use a limited ingredient diet from the pet store for the elimination trial?', answer: 'No — over-the-counter limited ingredient diets have documented cross-contamination with common proteins due to shared manufacturing equipment. A 2017 study found that 8 of 12 OTC "limited ingredient" diets contained protein sources not listed on the label. The only reliable elimination trial diets are prescription hydrolyzed formulas or carefully sourced novel protein diets from manufacturers with dedicated production lines.' },
  { question: 'My dog improved on the elimination diet. Does that mean food allergy?', answer: 'Possibly — but not definitively without a food challenge. Improvement on any diet change could reflect other variables. The food challenge (reintroducing the original food and observing for symptom return within 2 weeks) is what confirms food allergy. Without the challenge, you have supportive evidence but not confirmation.' },
  { question: 'What is a novel protein?', answer: 'A protein the dog has never been exposed to — kangaroo, venison, rabbit, duck, alligator, bison, or other exotic proteins not in the dog\'s previous diet. The most commonly used proteins (beef, chicken, lamb) are the most common allergens precisely because of frequent exposure. If your dog has eaten chicken-based food for years, chicken is the most likely allergen, and kangaroo would be an appropriate novel protein.' },
]
export default function EliminationDietPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Food Allergy Elimination Diet Protocol', subtitle: 'Diagnosing food allergy in dogs requires an 8–12 week strict dietary elimination trial followed by a confirmatory food challenge. There are no shortcuts. Blood tests for food allergy are not validated. This is the only reliable protocol.', category: 'Dog Nutrition', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Elimination Diet', href: '/nutrition/elimination-diet' }]}
        relatedLinks={[{ title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Hub' }, { title: 'Prescription Diets', href: '/nutrition/prescription-diets', category: 'Nutrition' }, { title: 'WSAVA Guidelines', href: '/nutrition/wsava-explained', category: 'Nutrition' }, { title: 'Safe Human Foods', href: '/nutrition/safe-human-foods', category: 'Nutrition' }, { title: 'Dog Allergies', href: '/health/dog-allergies', category: 'Dog Health' }, { title: 'Dog Skin Allergies', href: '/health/dog-skin-allergies', category: 'Dog Health' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Choosing the Diet', href: '#diet-choice' }, { label: 'What to Eliminate', href: '#eliminate' }, { label: 'Duration', href: '#duration' }, { label: 'Food Challenge', href: '#challenge' }, { label: 'FAQ', href: '#faq' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Allergies Guide', href: '/health/dog-allergies' }, { label: 'Prescription Diets', href: '/nutrition/prescription-diets' }, { label: 'WSAVA Guidelines', href: '/nutrition/wsava-explained' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="nutrition-elimination" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
          <h2 id="diet-choice">Choosing the Right Elimination Diet</h2>
          <p>Two options are appropriate for a diagnostic elimination trial:</p>
          <p><strong>Option 1 — Prescription hydrolyzed protein diet:</strong> Proteins broken into fragments too small to trigger an immune response. Royal Canin HP, Hill's z/d, Purina HA. These are the most reliable option because even dogs that are broadly sensitized to multiple proteins can tolerate hydrolyzed diets. Requires veterinary prescription.</p>
          <p><strong>Option 2 — Novel protein diet:</strong> A single protein the dog has provably never eaten. The protein must be truly novel — not just a less-common protein, but one absent from the dog's entire dietary history. Kangaroo, crocodile, rabbit, venison, and bison are common novel proteins if the dog has never eaten them. The source must be a manufacturer with dedicated production lines (no shared equipment with common proteins). Prescription novel protein diets (Royal Canin Select Protein) are more reliable than OTC novel protein foods.</p>
          <p>Over-the-counter "limited ingredient" diets are <em>not appropriate</em> for diagnostic trials — cross-contamination in manufacturing renders them unreliable for this purpose.</p>

          <h2 id="eliminate">Absolute Elimination — What This Means in Practice</h2>
          <p>The trial diet must be the only food consumed. This is harder than it sounds:</p>
          <ul>
            <li><strong>No treats</strong> — use small pieces of the trial food as rewards</li>
            <li><strong>No flavored medications</strong> — ask your vet about unflavored alternatives (plain pills, unflavored compounded medications)</li>
            <li><strong>No table scraps</strong> — brief exposures can restart the clock</li>
            <li><strong>No rawhide, bully sticks, or dental chews</strong> — these are food</li>
            <li><strong>No flavored heartworm or flea prevention</strong> — switch to unflavored topical or injectable options during the trial</li>
            <li><strong>Children and all family members must understand the protocol</strong> — one person feeding scraps invalidates weeks of work</li>
          </ul>

          <h2 id="duration">Duration — Why 8-12 Weeks</h2>
          <p>The skin takes time to clear even after the offending antigen is removed. IgE-mediated hypersensitivity reactions in the skin persist after antigen removal — the inflammatory cascade has been triggered and takes weeks to fully resolve. Most dogs show meaningful improvement by 6 weeks; some require the full 12 weeks to reach their baseline. Calling the trial negative at 4 weeks is a common error — an insufficient trial duration is a major reason food allergy is missed.</p>

          <h2 id="challenge">The Food Challenge — Why It's Required</h2>
          <p>Improvement on the elimination diet alone could have multiple explanations: the original diet had a digestibility problem, the dog's environment changed, or the dog's seasonal allergies naturally improved. The only way to confirm food allergy is the provocation (food challenge): reintroduce the original diet for up to 2 weeks after symptoms have resolved. If symptoms return within 2 weeks, food allergy is confirmed — the clinical response to the challenge is the diagnostic confirmation.</p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
