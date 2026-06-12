import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Stomatitis and Oral Disease", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Bacterial Diseases of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/bacterial-diseases-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Jacobson E.R. — Infectious Diseases and Pathology of Reptiles: Color Atlas and Text, 2nd ed.", publisher: "CRC Press / Taylor & Francis", url: "https://www.taylorfrancis.com/books/mono/10.1201/9781315119632/infectious-diseases-pathology-reptiles-elliott-jacobson" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Stomatitis in Reptiles (Mouth Rot) — Signs, Causes | Lizard.com', description: 'Stomatitis (mouth rot) is a bacterial infection of the oral cavity in reptiles. Yellow-white exudate in the mouth, swollen gums, and difficulty eating.', path: '/health/stomatitis', type: 'article' })
const schema = combineSchemas(buildArticleSchema({ siteId: 'lizard-com', title: 'Stomatitis in Reptiles (Mouth Rot)', description: 'Signs, causes, and treatment of infectious stomatitis (mouth rot) in reptiles.', url: 'https://lizard.com/health/stomatitis', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
}), buildMedicalWebPageSchema({ name: 'Stomatitis in Reptiles (Mouth Rot)', description: 'Signs, causes, and treatment of infectious stomatitis (mouth rot) in reptiles.', url: 'https://lizard.com/health/stomatitis', authorName: 'Lizard.com Editorial', lastReviewed: '2025-05-01', medicalAudience: 'Caregiver' }))
export default function StomatitisPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Stomatitis in Reptiles (Mouth Rot)', subtitle: 'Infectious stomatitis — commonly called mouth rot — is a bacterial infection of the oral cavity that affects all reptile species. It ranges from mild (superficial gum inflammation) to severe (deep tissue infection with bone involvement). Early treatment is critical — advanced cases can become systemic and fatal.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health' }, { name: 'Stomatitis', href: '/health/stomatitis' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
        { title: 'Respiratory Infection', href: '/health/respiratory-infection', category: 'Health' },
        { title: 'Abscesses in Reptiles', href: '/health/abscess-treatment', category: 'Health' },
        { title: 'Temperature Guide', href: '/setup/temperature-guide', category: 'Setup' },
        { title: 'Dehydration in Reptiles', href: '/health/dehydration-reptiles', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Signs</div>
          {['Yellow-white discharge in mouth', 'Swollen, reddened gum tissue', 'Loose or missing teeth', 'Difficulty eating or refusing food', 'Bubbles from mouth during breathing', 'Excessive saliva', 'Open-mouth gaping'].map(s => (
            <div key={s} style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px', color: 'rgba(238,240,228,0.6)' }}>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'Respiratory Infection', href: '/health/respiratory-infection' }, { label: 'Egg Binding', href: '/health/egg-binding' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-stomatitis" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>What Causes Mouth Rot</h2>
        <p>Stomatitis is an opportunistic infection — the bacteria responsible (Pseudomonas, Aeromonas, Klebsiella, and others, often as mixed infections) are normal environmental inhabitants that cause disease when the reptile's immune system is compromised or when the oral mucosa is damaged. Predisposing factors: stress (chronic suboptimal husbandry — incorrect temperatures, humidity, or lighting), physical injury to the mouth (cage biting, rough feeding, prey-item strikes in snakes), nutritional deficiency (particularly vitamin C deficiency in some species), and systemic illness that depresses immune function.</p>
        <p>In snakes: cage biting (striking at glass repeatedly — often from stress or incorrect temperatures) causes small mouth injuries that become infected. In lizards: incorrect temperatures prevent normal immune function and allow oral bacteria to proliferate. In tortoises: respiratory infections may spread to involve the oral cavity.</p>

        <h2>Stages and Severity</h2>
        <p><strong>Early/mild:</strong> Slight reddening of the gum tissue, maybe small amounts of mucus or slight swelling. The animal is eating normally. Easy to miss — requires looking in the mouth. Early stomatitis treated promptly resolves well with appropriate antibiotics.</p>
        <p><strong>Moderate:</strong> Yellow-white, caseous (cheese-like) exudate in the oral cavity, swollen and inflamed gums, some tooth loosening, reluctance to eat. The exudate is not pus in the traditional sense — it is necrotic tissue and bacterial material that has a characteristic cottage-cheese appearance. Requires veterinary treatment.</p>
        <p><strong>Severe/advanced:</strong> Deep tissue involvement, bone infection (osteomyelitis) of the jaw, teeth falling out, systemic signs (lethargy, anorexia), septicemia (bacteria entering the bloodstream from the oral infection). At this stage, treatment is aggressive, prolonged, and may not be successful if bone is involved. Surgery to remove necrotic bone may be required.</p>

        <h2>Treatment</h2>
        <p>Veterinary evaluation and treatment is required for stomatitis beyond the mildest early stage. A reptile veterinarian will: culture the exudate to identify the causative bacteria and antibiotic sensitivity, debride (physically remove) the caseous material from the oral cavity (this is important — the antibiotic cannot penetrate the necrotic exudate, so it must be removed), administer systemic antibiotics (injectable is more reliable than oral for moderate to severe cases), and address the underlying husbandry issues.</p>
        <p>Common antibiotics: enrofloxacin (Baytril), trimethoprim-sulfamethoxazole, and amikacin — choice guided by culture and sensitivity results when available. Topical treatment (chlorhexidine oral rinses, dilute Betadine applied with a cotton swab to the oral mucosa) supplements systemic treatment. Pain management is appropriate for moderate to severe cases.</p>

        <h2>Husbandry Correction — Preventing Recurrence</h2>
        <p>Treating stomatitis without correcting the underlying husbandry deficits that caused it results in recurrence. After treatment: verify temperatures with an infrared thermometer (not just an ambient air thermometer), review humidity and lighting, ensure appropriate hide availability to reduce stress, review diet and supplementation, and eliminate any situations causing oral injury (cage-biting: reduce stress, provide enrichment, consider whether the enclosure needs modification).</p>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
