import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Exophthalmia (Pop-Eye) in Fish — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/exophthalmia-in-fish", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Aeromonas Infections in Fish — UF/IFAS Extension FA-TP-174.", url: "https://edis.ifas.ufl.edu/publication/FA174", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Pop-Eye in Fish — Exophthalmia Causes | Fish.com', description: 'Pop-eye (exophthalmia) is fluid accumulation behind the eye causing it to bulge outward. Bacterial infection treated with Kanaplex.', path: '/health/pop-eye', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Pop-Eye in Fish (Exophthalmia)', description: 'Causes, unilateral vs bilateral presentation, and Kanaplex treatment for pop-eye in fish.', url: 'https://fish.com/health/pop-eye', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function PopEyePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Pop-Eye in Fish', subtitle: 'Pop-eye (exophthalmia) is exactly what it sounds like — one or both eyes bulging outward from the normal position. The bulging is caused by fluid accumulation in the tissue behind the eye. Most cases are bacterial and treatable; some are signs of systemic disease with a more guarded prognosis.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Pop-Eye', href: '/health/pop-eye' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Bacterial Infections", href: "/health/bacterial-infections", category: "Fish Health" }, { title: "Dropsy Treatment", href: "/health/dropsy-treatment", category: "Fish Health" }, { title: "Medicating Aquarium Fish", href: "/health/medicating-aquarium-fish", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Unilateral vs Bilateral</div>
          <div className="py-2 border-b border-brand-border">
            <div className="text-xs font-bold text-brand-dark">One eye (unilateral)</div>
            <div className="text-2xs text-brand-text-light">Usually localized — injury or infection. Better prognosis.</div>
          </div>
          <div className="py-2">
            <div className="text-xs font-bold text-brand-dark">Both eyes (bilateral)</div>
            <div className="text-2xs text-brand-text-light">Often systemic infection or organ failure. More guarded.</div>
          </div>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dropsy Treatment', href: '/health/dropsy-treatment' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Betta Fish Care', href: '/species/betta-fish' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-pop-eye" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Causes and the Unilateral vs Bilateral Distinction</h2>
        <p><strong>Unilateral pop-eye (one eye):</strong> Most commonly caused by a localized bacterial infection or physical injury — the fish bumped into something, was nipped by a tankmate, or got a minor scratch that became infected. Bacteria infect the tissue behind the eye, causing localized inflammation and fluid accumulation. Prognosis for unilateral pop-eye caught and treated early is generally good. The eye may not fully return to normal position even after successful treatment — some minor protrusion often remains.</p>
        <p><strong>Bilateral pop-eye (both eyes):</strong> Both eyes involved simultaneously suggests a systemic problem — bacteria throughout the bloodstream, organ failure (often kidney-related), or the same systemic fluid accumulation that causes dropsy. Bilateral pop-eye combined with abdominal distension (a fish that has both pop-eye and a bloated belly) is a sign of systemic organ failure with a poor prognosis, even with aggressive treatment. Treat immediately and aggressively, but prepare for the possibility that the fish will not recover.</p>

        <h2>Treatment Protocol</h2>
        <p><strong>Isolation:</strong> Move the affected fish to a hospital tank. Reduces stress (no competition for food or territory), concentrates medication, and prevents any potential spread to other fish.</p>
        <p><strong>Pristine water quality:</strong> Test immediately. Pop-eye almost always occurs in fish stressed by poor water quality — elevated nitrate, ammonia, or nitrite. A 25-50% water change in the display tank while setting up the hospital tank. Maintain hospital tank with frequent small water changes throughout treatment.</p>
        <p><strong>Kanamycin (Seachem KanaPlex):</strong> The first-line antibiotic for pop-eye. KanaPlex has good tissue penetration for orbital infections. Dose per label instructions — add to water and mix into food using Seachem Focus for better internal delivery. Continue for the full recommended course (typically 3 rounds of treatment at 48-hour intervals, then continue for 2 weeks total).</p>
        <p><strong>Epsom salt:</strong> 1 teaspoon per 5 gallons helps draw fluid from the swollen orbital tissue through osmosis — provides symptomatic relief during treatment. Use magnesium sulfate, not table salt.</p>

        <h2>Recovery Expectations</h2>
        <p>Pop-eye responds slowly to treatment — do not expect immediate visible improvement. The eye may take 1–4 weeks to begin receding toward normal. The fish should show improvement in behavior and appetite before the eye appearance improves. A fish that is eating and active is a fish that is responding to treatment. A fish that is not eating despite treatment for 5+ days has a more guarded prognosis.</p>
        <p>Even with successful treatment, the eye may not fully return to its pre-pop-eye position — some cases leave the fish with a slightly enlarged or asymmetric eye permanently, especially if the condition was advanced at the time of treatment. This is a cosmetic issue, not a welfare concern, as long as the fish regains normal behavior and feeding.</p>

        <h2>Prevention</h2>
        <p>Pop-eye prevention is water quality management. The vast majority of pop-eye cases occur in tanks with elevated nitrate, inadequate filtration, or irregular maintenance. Weekly water changes of 25-30%, filter maintenance, and not overstocking are the primary preventive measures. Quarantine new fish before adding to established tanks — new fish stressed from shipping are more susceptible to bacterial infection including orbital infection.</p>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
