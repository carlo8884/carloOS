import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Overview of Diarrhea in Small Animals', url: 'https://www.merckvetmanual.com/digestive-system/diarrhea-in-small-animals/overview-of-diarrhea-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'WSAVA: Nutritional Support of Dogs With GI Disease — Bland Diet and Probiotic Guidance', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/', publisher: 'WSAVA' },
  { label: 'AVMA: Diarrhea in Dogs — When to Call the Vet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Kelley RL et al. Randomized controlled trial on the effect of a synbiotic on fecal quality in healthy dogs. BMC Vet Res. 2009;5:31.', publisher: 'BMC Vet Research' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Diarrhea — When to Treat at Home vs See a Vet | Dog.com', description: 'Dog diarrhea: what it looks like, common causes, when home treatment is appropriate, and the specific signs that require immediate veterinary care.', path: '/health/dog-diarrhea', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Diarrhea', description: 'Home treatment vs vet care for dog diarrhea — causes and warning signs.', url: 'https://dog.com/health/dog-diarrhea', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Diarrhea', description: 'Causes, home care, and when to see a vet for dog diarrhea.', url: 'https://dog.com/health/dog-diarrhea', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogDiarrheaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Diarrhea', subtitle: 'Diarrhea is one of the most common reasons dogs visit the vet — and also one of the most common conditions that resolves on its own. Knowing the difference between "wait and monitor" and "go to the vet now" saves unnecessary vet visits and prevents delayed care when urgency matters.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Diarrhea', href: '/health/dog-diarrhea' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Vomiting Guide', href: '/health/dog-vomiting', category: 'Dog Health' }, { title: 'Pancreatitis in Dogs', href: '/health/pancreatitis', category: 'Dog Health' }, { title: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">See Vet Now — These Signs</div>
            <ul className="text-xs text-brand-text-mid space-y-1 m-0 p-0 list-none">
              {['Blood in stool (red or black/tarry)', 'Lethargy + diarrhea', 'Vomiting + diarrhea together', 'Puppy or senior dog', 'Diarrhea >48 hours', 'Known toxin or foreign body', 'Pale or white gums'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger">→</span>{s}</li>)}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vomiting', href: '/health/dog-vomiting' }, { label: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide' }, { label: 'Find Emergency Vet', href: '/find-a-vet' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-diarrhea" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Acute vs Chronic Diarrhea</h2>
          <p><strong>Acute diarrhea</strong> — sudden onset, less than 2 weeks — is most commonly dietary indiscretion (ate something they shouldn't), mild viral or bacterial enteritis, or stress-induced colitis. Most cases in otherwise healthy adult dogs resolve within 2–5 days with supportive care.</p>
          <p><strong>Chronic diarrhea</strong> — lasting more than 2–3 weeks, or recurring frequently — requires veterinary investigation. Causes include inflammatory bowel disease (IBD), food allergy, parasites, bacterial overgrowth, exocrine pancreatic insufficiency (EPI), and less commonly, neoplasia. Chronic diarrhea should not be repeatedly treated symptomatically without diagnostic workup.</p>

          <h2>Small Intestinal vs Large Intestinal</h2>
          <p>The character of the diarrhea helps localize where the problem is. <strong>Small intestinal diarrhea:</strong> large volume, watery, may be projectile, may contain digested blood (appears dark brown-black or "tarry" — called melena), usually without significant straining, often with weight loss. <strong>Large intestinal (colitis) diarrhea:</strong> frequent small amounts, often with mucus or fresh blood (bright red — hematochezia), significant urgency and straining, often without weight loss. Differentiation guides workup and treatment direction.</p>

          <h2>When Home Treatment Is Appropriate</h2>
          <p>An otherwise healthy adult dog with mild acute diarrhea (no blood, eating, alert, normal energy, no concurrent vomiting, no known foreign body or toxin ingestion) can be managed at home for 24–48 hours:</p>
          <ul>
            <li><strong>Bland diet:</strong> Boiled white chicken breast (no seasoning) + plain white rice, 50/50 by volume. Small portions every 4–6 hours. This provides easily digestible protein and carbohydrate that rests the GI tract.</li>
            <li><strong>Probiotics:</strong> FortiFlora (Purina) is the most evidence-supported veterinary probiotic — sachets mixed into food. Helps restore healthy gut flora.</li>
            <li><strong>Ensure hydration:</strong> Diarrhea causes fluid loss. Make fresh water constantly available. If the dog is not drinking, offer low-sodium chicken broth.</li>
            <li><strong>No human anti-diarrheal medications without vet guidance:</strong> Pepto-Bismol contains salicylate (aspirin-related) and should not be given without veterinary direction. Imodium (loperamide) is contraindicated in MDR1-positive herding breeds and should only be used under veterinary direction.</li>
          </ul>

          <h2>When to Go to the Vet</h2>
          <p>Do not wait with: blood in stool (especially black/tarry melena — indicates upper GI bleeding), concurrent lethargy or vomiting, puppies or senior dogs (less physiological reserve), known or suspected ingestion of a foreign object or toxin, diarrhea that has not improved after 48 hours of home care, or pale/white gums (signs of significant blood loss or shock). These presentations require examination, diagnostics, and likely IV fluids rather than home monitoring.</p>

          <h2>Diagnostic Workup for Chronic Diarrhea</h2>
          <p>For recurring or chronic diarrhea: fecal examination (parasites — Giardia is commonly missed with standard flotation, requires specific antigen testing), fecal culture, serum TLI (trypsin-like immunoreactivity — screens for EPI), cobalamin and folate (malabsorption markers), and dietary elimination trial (rules out food-responsive diarrhea, which is common and frequently the diagnosis). Endoscopy and intestinal biopsy are reserved for cases where less invasive workup is inconclusive.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
