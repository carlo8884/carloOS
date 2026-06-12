import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Cloacal Disease and Prolapse", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Cloacal Diseases of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/cloacal-diseases-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Journal of Herpetological Medicine and Surgery — Prolapse case literature", publisher: "ARAV / Allen Press", url: "https://meridian.allenpress.com/jhms" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Cloacal Prolapse in Reptiles — Emergency Care | Lizard.com", description: "Cloacal and organ prolapse in reptiles is a true emergency. Causes, why you must keep the tissue moist, what not to do, and immediate vet steps.", path: "/health/prolapse-first-aid", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Cloacal Prolapse in Reptiles", description: "Causes, emergency first aid, and veterinary treatment of cloacal and organ prolapse in reptiles.", url: "https://lizard.com/health/prolapse-first-aid", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})

export default function HealthProlapseFirstAidPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Cloacal Prolapse in Reptiles", subtitle: "A prolapse is the protrusion of internal tissue, the cloaca, intestine, oviduct, or hemipenis, through the vent. It is a true veterinary emergency: exposed tissue dries, swells, and dies quickly. Recognizing a prolapse, keeping the tissue moist and protected, and getting to a reptile vet immediately are the difference between a recoverable animal and a fatal outcome.", category: "Health — Emergency", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Cloacal Prolapse", href: "/health/prolapse-first-aid" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Egg Binding', href: '/health/egg-binding', category: 'Health' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
        { title: 'Dehydration in Reptiles', href: '/health/dehydration-reptiles', category: 'Health' },
        { title: 'Constipation & Impaction', href: '/health/constipation-impaction', category: 'Health' },
        { title: 'Thermal Burns', href: '/health/thermal-burns', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"At a Glance"}</div>
          {[["Urgency", "Emergency — same day"], ["What it is", "Tissue protruding from vent"], ["Common types", "Cloaca, gut, oviduct, hemipenis"], ["First aid", "Keep tissue moist + clean"], ["Do NOT", "Force it back or let it dry"], ["Outcome", "Good if treated fast"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Egg Binding (Dystocia)", href: "/health/egg-binding" }, { label: "Sick Reptile Signs", href: "/health/sick-reptile-signs" }, { label: "Constipation & Impaction", href: "/health/constipation-impaction" }, { label: "Hypocalcemia", href: "/health/hypocalcemia" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-prolapse-first-aid"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"A prolapse occurs when internal tissue is pushed out through the cloaca (the common vent through which reptiles pass waste, eggs, and reproductive structures). Depending on the underlying cause, the protruding tissue may be cloacal lining, a section of intestine, the oviduct, or, in males, a hemipenis. Whatever the tissue, the principle is the same: it is not meant to be outside the body, and once exposed it rapidly dries, swells, becomes contaminated, and loses blood supply. Untreated, the tissue dies and the animal can become septic. This is one of the few reptile problems that genuinely cannot wait."}</p>
          <h2>{"Recognizing a Prolapse"}</h2>
          <ul>
            <li>{"A mass of pink, red, or darker tissue protruding from the vent"}</li>
            <li>{"In males, a prolapsed hemipenis appears as a single tube-like structure to one side of the vent; this is sometimes less immediately dangerous but still needs prompt veterinary attention"}</li>
            <li>{"Straining, lethargy, and reduced appetite often accompany the prolapse"}</li>
            <li>{"Darkening, drying, or grit-covered tissue indicates the tissue is being damaged and the situation is worsening"}</li>
          </ul>
          <h2>{"Common Causes"}</h2>
          <p>{"A prolapse is a symptom, not a diagnosis; the underlying cause must be found and corrected."}</p>
          <ul>
            <li>{"Excessive straining from constipation or impaction"}</li>
            <li>{"Egg binding (dystocia) or difficult egg/birth passage"}</li>
            <li>{"Hypocalcemia and metabolic bone disease, which weaken the muscles that hold tissue in place"}</li>
            <li>{"Internal parasites or gastrointestinal infection causing straining"}</li>
            <li>{"Dehydration, foreign-body ingestion, masses, or tumors"}</li>
            <li>{"In males, hemipenal prolapse from breeding activity or infection"}</li>
          </ul>
          <h2>{"Emergency First Aid Before the Vet"}</h2>
          <ol>
            <li>{"Keep the exposed tissue moist and clean at all times; gently rinse off substrate with clean lukewarm water or sterile saline and keep it covered with a moist, clean cloth or paper towel"}</li>
            <li>{"Move the animal to a clean, soft, slightly damp environment (paper towel substrate) to prevent further contamination and drying"}</li>
            <li>{"Some veterinarians advise applying plain granulated sugar to a swollen prolapse to draw out edema and reduce swelling on the way to the clinic, but do this only on veterinary advice"}</li>
            <li>{"Contact a reptile-experienced veterinarian immediately and transport the animal the same day"}</li>
          </ol>

          <h2>{"Veterinary Treatment"}</h2>
          <p>{"A reptile veterinarian assesses whether the prolapsed tissue is still viable, cleans and reduces it, may place a retaining suture, and treats the root cause, which may involve correcting hydration and calcium status, managing egg binding, deworming, or surgery for masses or non-viable tissue. Supportive care for pain and infection is given as the clinician judges appropriate. Because medication choices and doses depend entirely on the species, weight, and cause, those decisions belong to the treating exotics veterinarian."}</p>
          <h2>{"Prevention"}</h2>
          <ul>
            <li>{"Maintain correct calcium and D3 status and UVB to prevent the muscle weakness that predisposes to prolapse"}</li>
            <li>{"Prevent constipation and impaction with appropriate substrate, prey size, hydration, and correct temperatures"}</li>
            <li>{"Provide proper nesting conditions for gravid females to reduce dystocia risk"}</li>
            <li>{"Keep up routine parasite screening, especially for wild-caught animals"}</li>
            <li>{"Address straining, abnormal stool, or appetite changes early, before they progress to a prolapse"}</li>
          </ul>
          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
