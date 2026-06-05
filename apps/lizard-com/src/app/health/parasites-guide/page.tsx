import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Parasitology", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Internal Parasites of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/internal-parasites-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Jacobson E.R. — Infectious Diseases and Pathology of Reptiles: Color Atlas and Text, 2nd ed.", publisher: "CRC Press / Taylor & Francis", url: "https://www.taylorfrancis.com/books/mono/10.1201/9781315119632/infectious-diseases-pathology-reptiles-elliott-jacobson" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Parasites — Mites, Pinworms, Crypto | Lizard.com', description: 'External parasites (mites) and internal parasites (pinworms, coccidia, Cryptosporidium) in reptiles. Fecal testing, treatment.', path: '/health/parasites-guide', type: 'article' })
const schema = combineSchemas(buildArticleSchema({ siteId: 'lizard-com', title: 'Reptile Parasites Guide', description: 'External mites, internal pinworms, coccidia, and Cryptosporidium in reptiles — diagnosis and treatment.', url: 'https://lizard.com/health/parasites-guide', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' }), buildMedicalWebPageSchema({ name: 'Reptile Parasites Guide', description: 'External mites, internal pinworms, coccidia, and Cryptosporidium in reptiles — diagnosis and treatment.', url: 'https://lizard.com/health/parasites-guide', authorName: 'Lizard.com Editorial', lastReviewed: '2025-05-01', medicalAudience: 'Caregiver' }))

export default function ParasiteGuidePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Reptile Parasites', subtitle: 'Parasites are ubiquitous in reptiles — wild-caught animals in particular carry parasite burdens as a normal feature of their biology. The question is not whether parasites are present but whether they are causing harm. Fecal testing of all new reptiles and annual fecal tests for established animals is the standard of care.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health/sick-reptile-signs' }, { name: 'Parasites', href: '/health/parasites-guide' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Parasites (overview)', href: '/health/parasites', category: 'Health' },
        { title: 'Snake Mite Eradication', href: '/health/snake-mite-eradication', category: 'Health' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
        { title: 'Salmonella Prevention', href: '/health/salmonella-prevention', category: 'Health' },
        { title: 'Reptile Buying Checklist', href: '/species/reptile-buying-checklist', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Parasite Overview</div>
          {[['Mites (Ophionyssus)', 'External · Visible · Treat immediately'], ['Pinworms (Oxyurids)', 'Internal · Common · Usually benign'], ['Coccidia', 'Internal · Watery stool · Treat if symptomatic'], ['Flagellates', 'Internal · Liquid stool · Metronidazole'], ['Cryptosporidium', 'Internal · Incurable · Quarantine essential'], ['Roundworms', 'Internal · Fenbendazole · Common in WC fish']].map(([p, d]) => (
            <div key={p} style={{ padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ color: 'var(--brand-white)', fontWeight: 600, fontSize: '11px' }}>{p}</div>
              <div style={{ color: 'rgba(238,240,228,0.45)', fontSize: '11px' }}>{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'Respiratory Infection', href: '/health/respiratory-infection' }, { label: 'Ball Python Care', href: '/species/ball-python' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-parasites" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <h2>External Parasites — Mites</h2>
        <p>Ophionyssus natricis (snake mite) is the most common external reptile parasite in captivity. Despite the name, it affects all reptile species, not only snakes. Mites are tiny (0.5–1mm), dark-colored, and found: in the folds of skin (around the eyes, ear openings, ventral scales), in the water dish (mites drown there — finding black specks in the water dish is a classic sign), and occasionally visible moving on the enclosure glass or the handler's skin. Heavy infestations cause: visible irritation (constant soaking, rubbing), scale damage at mite feeding sites, anemia from blood loss, and secondary skin infections.</p>
        <p><strong>Treatment:</strong> Requires treating both the reptile and the entire enclosure simultaneously — mites in the enclosure will reinfest a treated animal. Reptile: Frontline spray (fipronil) at 1 spray per 30 cm of snake, applied to a cloth and wiped over the reptile (not sprayed directly — eyes and face excluded). Nix cream rinse (permethrin) diluted 1:5 in water as an alternative. Enclosure: complete discard of all substrate, cleaning with diluted bleach (1:32), treat all crevices, seal or discard any porous materials that cannot be fully decontaminated. Repeat treatment of the reptile at 7-10 days to catch mites that were in the egg stage during first treatment. Quarantine new animals before introducing to established reptiles — mites transfer readily.</p>

        <h2>Pinworms (Oxyurid Nematodes)</h2>
        <p>Oxyurid pinworms are the most common internal parasite found in herbivorous and omnivorous reptiles (particularly bearded dragons, tortoises, and iguanas). They are host-specific — reptile pinworms cannot infect humans. Low to moderate pinworm burdens in otherwise healthy, well-managed reptiles are often considered clinically insignificant and are not always treated. Heavy burdens may cause: weight loss despite adequate food, abnormal feces (loose or containing mucus), and bloating. Detected on fecal float examination by a veterinarian. Treatment when indicated: fenbendazole (Panacur) orally. Reinfection from the enclosure is common — substrate replacement during treatment reduces reinfection.</p>

        <h2>Coccidia</h2>
        <p>Coccidia (Isospora, Eimeria, and others) are intracellular protozoan parasites common in reptiles. Asymptomatic in many healthy animals — immune-competent reptiles in good husbandry conditions may carry low coccidia burdens without clinical effects. Clinical disease (coccidiosis) occurs when husbandry is suboptimal (incorrect temperatures, overcrowding, stress, other illness), producing: watery or mucoid diarrhea, weight loss, lethargy, and in severe cases, bloody feces. Diagnosed on fecal wet prep or float. Treatment: ponazuril (Marquis) or sulfadimethoxine in reptile-appropriate doses. Address husbandry issues simultaneously — treating coccidia without correcting stressors produces rapid reinfection.</p>

        <h2>Cryptosporidium — The Incurable One</h2>
        <p>Cryptosporidium is a protozoal parasite with no effective curative treatment in reptiles. In snakes (particularly ball pythons and kingsnakes), Cryptosporidium serpentis causes regurgitation syndrome — the snake regurgitates meals regularly, loses weight progressively, and develops a characteristic mid-body swelling from chronic gastric mucosa hypertrophy. Despite maintaining appetite and attempting to feed, the animal cannot process food. The condition is progressive and ultimately fatal.</p>
        <p>Cryptosporidium varanii (formerly C. saurophilum) affects lizards — causing diarrhea, weight loss, and debilitation in leopard geckos, bearded dragons, and others. No effective treatment exists for either form. Management: supportive care (heat, hydration, smaller frequent meals, assisted feeding in some cases) can extend quality life for months in some individuals. Strict isolation is essential — Cryptosporidium oocysts survive in the environment for months and are highly resistant to standard disinfectants. Bleach (at 6% concentration, 30-minute contact time) is the most effective disinfectant; quaternary ammonium compounds are ineffective.</p>
        <p>Diagnosis: PCR testing of feces (most sensitive and specific), acid-fast staining of fecal smears, or endoscopic biopsy showing characteristic gastric mucosal changes. Any reptile with chronic regurgitation should be tested for Cryptosporidium before introducing to other reptiles. There is no treatment that eliminates the parasite — euthanasia is often the most humane choice for severely affected animals, particularly when other reptiles in the collection are at risk.</p>

        <h2>Annual Fecal Testing — Why It Matters</h2>
        <p>Annual fecal examination (float + direct wet prep) by a reptile veterinarian identifies subclinical parasite burdens before they cause clinical disease, catches Cryptosporidium and other serious parasites early, provides a baseline for comparison if the animal becomes ill, and is required for imported reptiles in many jurisdictions. New animals should be fecal tested before or immediately after acquisition. Wild-caught animals in particular should be tested and dewormed as part of acclimation. Captive-bred animals from reputable breeders have lower parasite burdens but are not guaranteed parasite-free.</p>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
