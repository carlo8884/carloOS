import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleSourcesList, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Integumentary Disease and Ecdysis", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Skin Diseases of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/skin-diseases-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Dysecdysis in Reptiles — Retained Shed, Causes | Lizard.com', description: 'Dysecdysis (retained shed) is almost always caused by low humidity or dehydration. Safe soaking protocol, how to remove stuck shed from toes and eyes.', path: '/health/dysecdysis', type: 'article' })
const schema = combineSchemas(buildArticleSchema({ siteId: 'lizard-com', title: 'Dysecdysis in Reptiles (Retained Shed)', description: 'Causes, safe removal, and prevention of retained shed (dysecdysis) in reptiles.', url: 'https://lizard.com/health/dysecdysis', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' }), buildMedicalWebPageSchema({ name: 'Dysecdysis in Reptiles (Retained Shed)', description: 'Causes, safe removal, and prevention of retained shed (dysecdysis) in reptiles.', url: 'https://lizard.com/health/dysecdysis', authorName: 'Lizard.com Editorial', lastReviewed: '2025-05-01', medicalAudience: 'Caregiver' }))
export default function DysecdysisPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Dysecdysis (Retained Shed)', subtitle: 'Dysecdysis is the failure to shed skin completely in a single, clean shed. Retained shed — old skin that did not release — is one of the most common health issues in captive reptiles. It is almost entirely preventable and almost entirely caused by inadequate humidity or dehydration during the pre-shed period.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health' }, { name: 'Dysecdysis', href: '/health/dysecdysis' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Shedding Guide', href: '/husbandry/shedding-guide', category: 'Husbandry' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Retained Eye Caps', href: '/health/retained-eye-caps', category: 'Health' },
        { title: 'Dehydration in Reptiles', href: '/health/dehydration-reptiles', category: 'Health' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '8px' }}>High-Risk Areas</div>
          {['Toes/digits — constriction causes necrosis', 'Eye caps (spectacles) — snakes especially', 'Tail tip — constriction and loss', 'Around heat pits — facial dysecdysis'].map(s => (
            <div key={s} style={{ padding: '5px 0', borderBottom: '1px solid rgba(220,38,38,0.15)', fontSize: '12px', color: 'rgba(238,240,228,0.7)' }}>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Humidity Guide', href: '/setup/humidity-guide' }, { label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'Ball Python Care', href: '/species/ball-python' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-dysecdysis" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Why It Happens</h2>
        <p>Healthy shedding requires: adequate hydration (the reptile must be well-hydrated throughout its body for the old skin to separate cleanly from the new), adequate environmental humidity during the active shed period, and appropriate substrate that allows the reptile to find edges to anchor and pull against during shedding. Disruption of any of these produces incomplete sheds in varying degrees of severity.</p>
        <p><strong>Low humidity:</strong> The most common cause. The fluid layer between old skin and new skin dries before the shed can complete — the old skin becomes desiccated and adheres to the new skin rather than releasing. Species-specific humidity requirements must be maintained consistently, not just increased when the shed is already in progress. Humidity management is proactive (always maintained) rather than reactive (increased only when the problem is occurring).</p>
        <p><strong>Dehydration:</strong> A dehydrated reptile does not have adequate fluid reserves to produce the separation layer during shedding. Chronic dehydration produces chronic partial sheds. Ensure fresh water is always available and species appropriate hydration methods are in place (soaking for desert species, misting and drip for tropical species).</p>
        <p><strong>Ectoparasites (mites):</strong> A heavy mite infestation can interfere with shedding by physically disrupting the skin separation process. If dysecdysis accompanies tiny moving dots (mites) visible in the water dish or on the reptile, treat mites first — the dysecdysis will resolve once the parasites are eliminated.</p>
        <p><strong>Nutritional deficiency:</strong> Vitamin A deficiency specifically affects skin and epithelial tissue quality — reptiles with insufficient vitamin A may have abnormal shedding in addition to other signs of deficiency. Less common than husbandry-related causes but worth considering in persistent cases.</p>

        <h2>The Soaking Protocol — Safe Retained Shed Removal</h2>
        <p>For mild retained shed that has not yet constricted any body parts: warm water soaking loosens the old skin and allows gentle removal.</p>
        <ol>
          <li>Prepare a container with warm water (85–90°F — comfortably warm, not hot) deep enough to submerge the body but allowing the head out of water if the reptile needs to breathe from above water (all lizards and snakes should be able to breathe easily)</li>
          <li>Soak for 15–20 minutes — most retained shed softens significantly within this time</li>
          <li>After soaking, wrap the reptile in a warm damp towel for 5–10 minutes — the combination of humidity and gentle pressure from the towel helps release the old skin</li>
          <li>Gently rub the retained shed in the direction of natural skin movement — from head to tail. Do not pull forcefully against the direction of scales. Old shed that is ready to release will come away easily; if it is resisting, soak again rather than forcing</li>
          <li>Never use tweezers, sharp instruments, or significant force to remove retained shed</li>
        </ol>

        <h2>Stuck Eye Caps — Snake Spectacles</h2>
        <p>Snakes have a fused transparent scale (spectacle or brille) over each eye rather than movable eyelids. These shed along with the rest of the skin. Retained spectacles appear as an opaque or bluish covering over the eye that was not shed. Do not attempt to remove retained spectacles with tweezers — the spectacle is directly over the corneal surface, and any pressure risks permanently damaging the eye.</p>
        <p>Safe approach for retained spectacles: soak the snake and then gently rub with a damp cloth in the area around the eye — sometimes the spectacle releases with gentle rubbing after adequate soaking. If the spectacle does not release after 2–3 soaking sessions: veterinary evaluation. An experienced reptile veterinarian can safely remove retained spectacles using appropriate technique and instruments. Multiple retained spectacles can layer over each other — do not assume the shed was incomplete; count spectacles on both eyes after each shed.</p>

        <h2>Toe Constriction — The Emergency</h2>
        <p>Retained shed on digits is the most clinically urgent manifestation of dysecdysis. Old shed wraps around the base of toes and creates a constricting band — like a rubber band around a finger — that progressively reduces blood flow. Left untreated, the toe tip becomes necrotic and falls off (or must be amputated). This process can occur within days of a retained shed on a toe.</p>
        <p>Check every toe carefully after each shed. Retained shed on toes feels like a slight ridge at the base of the toe and may be barely visible on the surface. Soak as above and very gently roll the constricting ring off the toe. If the toe appears discolored (pale, dark, or clearly necrotic), veterinary evaluation immediately — the window for saving the toe may be short.</p>

        <h2>Prevention</h2>
        <p>Maintain species-appropriate humidity consistently — not only when in shed. Provide a moist hide (a container lined with dampened sphagnum moss) in the enclosure year-round for species that benefit from it (most snakes, many geckos). Ensure the reptile is adequately hydrated — fresh water always available, soaking opportunities for species that need them. Provide rough surfaces (cork bark, rocks with texture) that the reptile can use to anchor and rub during shedding. Check for mites if dysecdysis occurs repeatedly in a well-maintained setup.</p>
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <p style={{ fontSize: '13px', color: '#8a96ad', fontStyle: 'italic', margin: '0 0 8px', lineHeight: 1.55 }}>These products support husbandry correction and do not treat disease. Work with a reptile veterinarian for diagnosis and treatment.</p>
        <div style={{ background: '#1a1f2b', border: '1px solid #2d3548', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#8a96ad', marginBottom: '8px' }}>Shed-Support Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: '#8a96ad', lineHeight: 1.55 }}>Husbandry equipment that helps with shedding: humid hides, sphagnum moss, ultrasonic humidifiers. This is husbandry equipment, not a substitute for veterinary care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/reptile%20humid%20hide%20moss%20sphagnum?s=health-dysecdysis" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/reptile%20humid%20hide%20moss%20sphagnum?s=health-dysecdysis" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#7bc25c', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
