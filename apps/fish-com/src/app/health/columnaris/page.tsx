import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Columnaris Disease (Flavobacterium columnare) — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/columnaris-disease-in-fish", publisher: "Merck Vet Manual" },
  { label: "Sheppard, B.J., Phillips, B.A. and Lapatra, S.E. Columnaris Disease — UF/IFAS Extension FA-31.", url: "https://edis.ifas.ufl.edu/publication/FA031", publisher: "UF/IFAS Extension" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Use of Chemicals in Aquaculture in the United States — UF/IFAS Extension FA-54.", url: "https://edis.ifas.ufl.edu/publication/FA054", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Columnaris in Fish — Saddle Patch, Mouth Rot | Fish.com', description: 'Columnaris (Flavobacterium columnare) causes cotton-like patches, saddle patches, and mouth rot in freshwater fish. Often mistaken for fungus', path: '/health/columnaris', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Columnaris in Fish', description: 'Signs, misdiagnosis risks, and antibiotic treatment for Flavobacterium columnare (columnaris) in aquarium fish.', url: 'https://fish.com/health/columnaris', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function ColumnarisguidePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Columnaris in Fish', subtitle: 'Flavobacterium columnare infection — commonly called columnaris, cotton mouth disease, saddleback disease, or mouth rot — is one of the most common bacterial diseases in freshwater fish. It is frequently misidentified as fungal infection because of its white, fluffy appearance. This misidentification leads to incorrect treatment and fish death.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Columnaris', href: '/health/columnaris' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Bacterial Infections", href: "/health/bacterial-infections", category: "Fish Health" }, { title: "Fin Rot", href: "/health/fin-rot", category: "Fish Health" }, { title: "Fish Disease Guide", href: "/health/fish-disease-guide", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Critical Distinction</div>
          <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-2">Columnaris LOOKS like fungus but is bacterial. Antifungal treatments (Pimafix, API Fungus Cure) do NOT work on columnaris. Antibiotics are required.</p>
          <div className="text-xs font-bold text-brand-dark">Treat with: Kanaplex or Furan-2</div>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Fin Rot', href: '/health/fin-rot' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-columnaris" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Signs and Appearance</h2>
        <p>Columnaris produces distinctive but frequently misidentified lesions. The bacterial colonies grow in a characteristic "stacking" pattern that appears cottony or fuzzy — easily confused with Saprolegnia (true fungal infection). Key distinguishing features: columnaris lesions typically appear gray-white to yellowish, while Saprolegnia fungus is pure white and fluffy. Columnaris often appears on the dorsal surface and at the edges of fins (Saprolegnia more commonly starts at injuries). Columnaris progresses much faster than fungal infections — a fish with mild columnaris can deteriorate to severe disease within 24–48 hours at warm temperatures.</p>
        <p>The four characteristic presentations:</p>
        <ul>
          <li><strong>Saddleback pattern:</strong> A gray-white lesion across the dorsal surface behind the dorsal fin, often with a pale or discolored band — this is classic columnaris and highly distinctive.</li>
          <li><strong>Mouth rot (mouth fungus):</strong> White, fuzzy growth around the lips and mouth. Rapidly progressive — can cause complete destruction of lip and mouth tissue within days.</li>
          <li><strong>Gill disease:</strong> Columnaris infecting the gills causes labored breathing, fish hanging at the surface, reduced oxygen uptake. Often no external signs — suspected when fish gasps despite adequate dissolved oxygen.</li>
          <li><strong>Body lesions:</strong> Open sores or pale patches on the body, often originating at a wound or injury site.</li>
        </ul>

        <h2>Why the Fungus Misidentification Matters</h2>
        <p>Pimafix, API Fungus Cure, and other antifungal treatments commonly used for white fuzzy growths on fish have no effect on Flavobacterium columnare — it is a bacterium, not a fungus. Treatment with antifungals while columnaris progresses costs critical time. Columnaris at warm temperatures (above 75°F) can kill fish within 48–72 hours — every day of incorrect treatment reduces survival chances significantly. If a fish shows white fuzzy growth that is progressing quickly and is not responding to antifungal treatment, treat for columnaris immediately.</p>

        <h2>Treatment Protocol</h2>
        <p><strong>First line — Seachem KanaPlex (kanamycin):</strong> Effective against columnaris. Used as a bath treatment in the tank and ideally also in food (mix with food and Seachem Focus to improve palatability and absorption). Dose per label instructions. Remove activated carbon from filter before treatment. Kanamycin is a broad-spectrum antibiotic with good safety for biological filtration compared to some other antibiotics.</p>
        <p><strong>API Furan-2 (nitrofurazone + furazolidone):</strong> Effective for surface columnaris lesions. Can be combined with KanaPlex for severe cases. Furan compounds are hard on biological filtration — be prepared for ammonia spikes during treatment in established tanks. Best used in hospital tanks.</p>
        <p><strong>Salt:</strong> Aquarium salt at 1–3 teaspoons per gallon creates an osmotic environment that reduces the bacterial load on body surfaces and reduces stress while antibiotic treatment takes effect. Not a cure alone but a useful supportive measure.</p>
        <p><strong>Temperature management:</strong> Columnaris is significantly more virulent at warm temperatures. If the infection is not severe and the species tolerates it, reducing temperature to 72°F or lower slows bacterial progression and gives antibiotics time to work.</p>

        <h2>Water Quality and Prevention</h2>
        <p>Columnaris, like most bacterial fish diseases, opportunistically infects fish that are stressed or immunocompromised. The most common predisposing factor: elevated nitrate, ammonia, or nitrite. Overcrowding, rough handling (net injuries), shipping stress, and oxygen-poor water all increase vulnerability. Prevention: pristine water quality, avoid overcrowding, acclimate fish carefully to minimize handling stress, and quarantine new fish before adding to established tanks.</p>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
