import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Parasites — Mites, Pinworms & Coccidia | Lizard.com', description: 'Reptile parasites: mites (external), pinworms and coccidia (internal). Identification, treatment, and why quarantine prevents introduction.', path: '/health/parasites', type: 'article' })
const schema = combineSchemas(buildArticleSchema({ siteId: 'lizard-com', title: 'Reptile Parasites', description: 'Mites, pinworms, and coccidia — identification and treatment for reptiles.', url: 'https://lizard.com/health/parasites', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' }), buildMedicalWebPageSchema({ name: 'Reptile Parasites', description: 'Mites, pinworms, and coccidia — identification and treatment for reptiles.', url: 'https://lizard.com/health/parasites', authorName: 'Lizard.com Editorial', lastReviewed: '2025-05-01', medicalAudience: 'Caregiver' }))
export default function ParasitesPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Reptile Parasites — Mites, Pinworms & Coccidia', subtitle: 'Parasites are common in wild-caught reptiles and in animals kept in suboptimal conditions. Most are treatable with appropriate medication, but treatment requires a veterinarian — do not attempt to deworm or treat parasites without professional guidance.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health/sick-reptile-signs' }, { name: 'Parasites', href: '/health/parasites' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Prevention</div>
          <p style={{ fontSize: '13px', color: 'rgba(238,240,228,0.6)', margin: 0, lineHeight: 1.65 }}>Quarantine all new reptiles 30–60 days. Fecal exam before introducing to established collection. Buy captive-bred over wild-caught when possible.</p>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides and health info." source="health-parasites" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>External Parasites — Mites</h2>
        <p>Snake mites (Ophionyssus natricis) are the most common external parasite in captive reptiles. Tiny (pin-head size), fast-moving dots — typically black or red. They live on the reptile and in the enclosure, feeding on blood. Heavy infestations cause anemia, stress, and provide pathways for bacterial infection through the skin.</p>
        <p><strong>Signs:</strong> Reptile soaking constantly (trying to drown mites), unusual restlessness, visible tiny moving dots around the eyes, between scales, and in water bowls. Run a white paper towel along the reptile's body — mites will appear as tiny specks on the towel.</p>
        <p><strong>Treatment:</strong> The reptile and the entire enclosure must be treated simultaneously. The enclosure: empty completely, discard all substrate, soak all non-porous decor in dilute bleach, clean all surfaces. The reptile: Provent-a-Mite (permethrin spray for the enclosure, not the animal), or veterinary treatment with ivermectin topical or injectable. Beware — ivermectin is toxic to some species including tortoises and some lizards. Use only under veterinary guidance. Treatment must be repeated at 10–14 day intervals to catch hatching eggs.</p>

        <h2>Internal Parasites — Pinworms</h2>
        <p>Pinworms (Oxyuridae) are almost universal in wild-caught reptiles and common in captive ones. In low numbers they are commensal — not causing disease. In heavy infestations they cause weight loss, soft feces, and lethargy. Diagnosed by fecal examination under microscope. Treated with fenbendazole (Panacur) — dose and frequency varies by species and parasite load. Bearded dragons from reputable breeders are often pinworm-free; wild-caught or rescue animals almost always carry them.</p>

        <h2>Coccidia (Eimeria, Isospora)</h2>
        <p>Coccidian protozoa are common in reptiles, particularly bearded dragons. In healthy, well-maintained reptiles, low-level infection causes no disease. Under stress — temperature extremes, immune compromise, or high environmental contamination — coccidia proliferate and cause severe disease: bloody or watery diarrhea, lethargy, weight loss, and death if untreated.</p>
        <p><strong>Diagnosis:</strong> Fecal flotation or direct smear. <strong>Treatment:</strong> Ponazuril (Marquis paste) or Sulfadimethoxine — veterinary prescription required. Clean and disinfect the enclosure thoroughly during treatment — coccidia oocysts survive in the environment and cause reinfection without environmental decontamination.</p>

        <h2>Cryptosporidiosis — The Incurable One</h2>
        <p>Cryptosporidium varanii (formerly C. saurophilum) is a protozoal parasite that causes chronic, progressive weight loss in lizards despite normal or increased appetite — the hallmark presentation. It is incurable. Diagnosis requires PCR testing or biopsy. Affected animals should be isolated permanently — crypto spreads via fecal-oral route and can contaminate an entire collection. Humane euthanasia is appropriate when quality of life declines significantly.</p>

        <h2>Quarantine — The Only Prevention</h2>
        <p>All new reptiles quarantine 30–60 days minimum in a separate room from established animals. During quarantine: collect 3 fecal samples over 2 weeks and submit for parasitology. Treat identified parasites before introduction. This is not optional — introducing a parasitic animal to a clean collection is a serious welfare issue for all animals involved.</p>
      </div>
    </ArticleLayout>
  )
}
