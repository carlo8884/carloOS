import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Feline Lower Urinary Tract Disease (FLUTD) — Signs | Vets.co", description: "FLUTD causes straining, frequent urination, and blood in cat urine. A blocked male cat is an emergency. Learn the signs, causes, and management.", path: '/health/feline-lower-urinary-tract-disease', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Feline Lower Urinary Tract Disease', url: 'https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/feline-lower-urinary-tract-disease', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Feline Lower Urinary Tract Disease', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/feline-lower-urinary-tract-disease', publisher: 'AVMA' },
  { label: 'AAFP: Feline Lower Urinary Tract Disease Guidelines', url: 'https://catvets.com/guidelines/practice-guidelines/feline-lower-urinary-tract-disease/', publisher: 'American Association of Feline Practitioners' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Feline Lower Urinary Tract Disease (FLUTD)', description: 'Signs, causes, and management of feline lower urinary tract disease.', url: 'https://vets.co/health/feline-lower-urinary-tract-disease', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Feline Lower Urinary Tract Disease', description: 'Recognition, causes, and management of FLUTD in cats.', url: 'https://vets.co/health/feline-lower-urinary-tract-disease', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Why is a blocked male cat an emergency?", answer: "A male cat that cannot urinate has a urethral obstruction — a life-threatening emergency. The blockage prevents the body from eliminating waste and potassium, causing the bladder to overfill and toxins and potassium to build up in the blood, which can stop the heart within 24 to 48 hours. A cat straining in the litter box and producing nothing, crying in pain, vomiting, or becoming lethargic needs emergency veterinary care immediately. Female cats block far less often due to their wider urethra, but any cat unable to urinate is an emergency." },
  { question: "What is feline idiopathic cystitis?", answer: "Feline idiopathic cystitis (FIC) is the most common cause of FLUTD signs, especially in younger cats, and means painful bladder inflammation with no identifiable infection or stones. It is strongly linked to stress, and flare-ups often follow changes in the household, conflict with other cats, or disruptions to routine. Management centers on reducing stress, increasing water intake, environmental enrichment, and sometimes diet changes, rather than antibiotics, since true bladder infections are actually uncommon in young cats." },
  { question: "How can I reduce my cat's risk of urinary problems?", answer: "Increasing water intake is the most powerful tool — feeding wet food, adding water fountains, and providing multiple clean water sources dilutes the urine and reduces crystal and stone formation. Equally important is reducing stress through a stable routine, plenty of clean litter boxes (a common guideline is one per cat plus one extra), vertical space, play, and minimizing conflict in multi-cat homes. Maintaining a healthy weight and feeding an appropriate diet recommended by your veterinarian also lowers risk." },
]
export default function FLUTDPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Feline Lower Urinary Tract Disease (FLUTD)', subtitle: 'FLUTD is an umbrella term for several conditions that cause cats to strain, urinate frequently, and pass bloody urine. Most cases are uncomfortable but not immediately dangerous — with one critical exception: a male cat that cannot urinate is a life-threatening emergency requiring care within hours.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'FLUTD', href: '/health/feline-lower-urinary-tract-disease' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Urinary Tract Infection', href: '/health/urinary-tract-infection', category: 'Veterinary Guide' },
          { title: 'Kidney Disease in Cats', href: '/health/kidney-disease-cats', category: 'Veterinary Guide' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs to Watch</div>
            {[['Straining', 'In and out of the box'], ['Frequent attempts', 'Small amounts each time'], ['Blood in urine', 'Pink-tinged'], ['Going outside box', 'Sudden inappropriate urination']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Urinary Tract Infection', href: '/health/urinary-tract-infection' }, { label: 'Kidney Disease in Cats', href: '/health/kidney-disease-cats' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-flutd" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="A cat that cannot urinate is an emergency">
            If your cat — especially a male cat — is straining in the litter box and producing little or no urine, crying, vomiting, or hiding and lethargic, treat it as an emergency and seek veterinary care right away. A complete urethral obstruction can be fatal within a day. Do not wait until morning.
          </CalloutBox>

          <h2>What FLUTD Means</h2>
          <p>Feline lower urinary tract disease is not a single diagnosis but a group of conditions affecting the bladder and urethra that produce similar signs: difficulty and pain urinating, frequent small urinations, blood in the urine, and urinating outside the litter box. Causes include idiopathic cystitis (painful inflammation with no clear cause), bladder stones, crystals, urethral plugs, infection, anatomical problems, and rarely tumors. The signs overlap so closely that testing is needed to identify the underlying cause.</p>

          <h2>Recognizing the Signs</h2>
          <p>Affected cats make frequent trips to the litter box, strain or squat for prolonged periods, and produce only small amounts of urine, sometimes tinged pink with blood. Many begin urinating in unusual places — sinks, bathtubs, or the floor — because they associate the box with pain. Cats may cry out, over-groom the genital area, or seem irritable. These signs always warrant a veterinary visit, both because the cat is in pain and because they can signal a developing obstruction.</p>

          <h2>The Critical Distinction: Obstruction</h2>
          <p>The most important question is whether the cat can still pass urine. A cat that strains but produces nothing may have a urethral obstruction — most common in males because of their narrow urethra. A blocked cat cannot eliminate waste and potassium, the bladder overfills, and within a day or two the buildup can cause vomiting, collapse, and cardiac arrest. This is a true emergency requiring immediate decompression and hospitalization. Owners of male cats should treat unproductive straining as an emergency until proven otherwise.</p>

          <h2>Diagnosis</h2>
          <p>Veterinarians evaluate FLUTD with a physical exam (including feeling the bladder for size and firmness), urinalysis to look for blood, crystals, and signs of infection, and often imaging — radiographs or ultrasound — to detect stones. Bloodwork assesses kidney function and, in blocked cats, dangerous potassium and waste elevations. Identifying the specific cause guides treatment, since a cat with stones, an infection, or stress-driven idiopathic cystitis needs very different management.</p>

          <h2>Treatment and Management</h2>
          <p>Treatment depends on the cause. Obstructed cats need emergency relief of the blockage, intravenous fluids, and hospitalization. Stones may require dissolution diets or surgical removal. Idiopathic cystitis — the most common form in young cats — is managed by reducing stress, increasing water intake, environmental enrichment, pain control, and sometimes diet, since antibiotics are unhelpful when no infection is present. Any prescribed medications and their dosing are determined by your veterinarian.</p>

          <h2>Prevention and Long-Term Care</h2>
          <p>Because FLUTD tends to recur, prevention is central. The pillars are water intake (wet food, fountains, multiple water stations), litter box hygiene and adequate numbers of boxes, stress reduction, weight control, and an appropriate diet. Many cats do well long-term once their environment and hydration are optimized, with veterinary rechecks to catch recurrences early.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
