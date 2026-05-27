import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: '12 Warning Signs of Cancer in Dogs — Early Detection Guide | Dog.com', description: '12 cancer warning signs in dogs. Lumps that need aspiration, unexplained weight loss, and bleeding from body openings are the most critical early signals. research-based.', path: '/health/dog-cancer-signs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: '12 Warning Signs of Cancer in Dogs', description: 'Early detection cancer warning signs for dogs.', url: 'https://dog.com/health/dog-cancer-signs', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: '12 Warning Signs of Cancer in Dogs', description: 'Cancer warning signs and early detection for dogs.', url: 'https://dog.com/health/dog-cancer-signs', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
const SIGNS = [
  { sign: 'Any new lump or bump — aspirate immediately', detail: 'Do not take a wait-and-see approach with new masses. Fine needle aspiration (FNA) is a quick, inexpensive procedure that identifies the cell type of most masses. Mast cell tumors — one of the most common and potentially dangerous dog cancers — can look benign externally. FNA before deciding to watch or remove is standard of care.' },
  { sign: 'Unexplained weight loss', detail: 'Progressive weight loss not explained by reduced calorie intake is a systemic warning sign. Cancer cells consume energy; paraneoplastic syndromes can alter metabolism. Unintended weight loss of more than 10% of body weight warrants investigation.' },
  { sign: 'Wound or sore that does not heal', detail: 'Non-healing sores, particularly on the lip, gum, or paw, may represent squamous cell carcinoma or other malignancy. Any wound that fails to progress toward healing within 2–3 weeks requires biopsy.' },
  { sign: 'Bleeding or discharge from any body opening', detail: 'Bleeding from the nose (epistaxis), vagina, anus, or unusual oral discharge can signal nasal tumors, vaginal masses, rectal polyps/tumors, or oral cancer. Single episodes can be minor — recurring or significant episodes warrant prompt evaluation.' },
  { sign: 'Offensive odor from mouth, ears, or any body part', detail: 'Oral tumors cause a distinctive, severe odor from tissue necrosis. Ear canal tumors produce abnormal discharge. Any new or worsening odor from a location that was previously normal warrants examination.' },
  { sign: 'Difficulty eating, swallowing, or chewing', detail: 'Oral tumors — melanoma, squamous cell carcinoma, fibrosarcoma — are among the most common canine cancers and are frequently detected when they cause difficulty eating or visible masses in the mouth. Oral examination at every veterinary visit is important.' },
  { sign: 'Reluctance to exercise or loss of stamina', detail: 'Subtle decline in energy and exercise tolerance can precede visible disease. Splenic hemangiosarcoma — a rapidly fatal cancer common in Golden Retrievers, Labrador Retrievers, and German Shepherds — may cause only vague lethargy before sudden internal hemorrhage.' },
  { sign: 'Persistent lameness or stiffness', detail: 'Osteosarcoma (bone cancer) is the most common primary bone tumor in large and giant breeds — Rottweilers, Great Danes, Irish Wolfhounds, Greyhounds, Labrador Retrievers. It typically presents as progressive, unrelenting lameness in one limb that does not respond to standard anti-inflammatory therapy. Any large breed dog with persistent single-limb lameness unresponsive to treatment requires radiographs to evaluate for bone tumor.' },
  { sign: 'Difficulty breathing, urinating, or defecating', detail: 'Progressive difficulty with normal functions suggests mass effect — a growing tumor interfering with normal anatomy. Respiratory difficulty from thoracic masses, straining to urinate from prostatic or bladder tumors, and straining to defecate from rectal or perianal masses all require investigation.' },
  { sign: 'Enlarged lymph nodes', detail: 'Lymphoma is one of the most common cancers in dogs. The most easily detected sign: enlarged peripheral lymph nodes (under the jaw, in front of the shoulders, behind the knees, in the groin). Lymph nodes should be assessed by your veterinarian at every wellness visit — owners can learn to palpate the submandibular and prescapular nodes at home.' },
  { sign: 'Abdominal distension', detail: 'Bloating of the abdomen can indicate splenic enlargement from hemangiosarcoma, hepatic masses, or ascites (fluid accumulation from various cancers). Rapid or progressive distension — especially in predisposed breeds — warrants emergency evaluation.' },
  { sign: 'Changes in urination or defecation habits', detail: 'Increased frequency, blood in urine, straining to urinate, or ribbon-like stool can indicate transitional cell carcinoma (bladder cancer — particularly in Scottish Terriers, Shetland Sheepdogs, Beagles, and West Highland White Terriers) or colorectal tumors.' },
]
export default function DogCancerSignsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: '12 Warning Signs of Cancer in Dogs', subtitle: 'Cancer is the leading cause of death in dogs over 10 years — approximately 50% of dogs over 10 will develop cancer (Morris Animal Foundation, Golden Retriever Lifetime Study cohort data). Early detection significantly changes outcomes. These 12 warning signs are what veterinary oncologists ask about and owners should watch for.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Cancer Signs', href: '/health/dog-cancer-signs' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">High-Risk Breeds</div>
            {['Boxer (highest cancer rate)', 'Golden Retriever', 'Labrador Retriever', 'Rottweiler (osteosarcoma)', 'Scottish Terrier (bladder cancer)', 'Bernese Mountain Dog', 'Flat-Coated Retriever', 'German Shepherd'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Boxer Breed', href: '/breeds/boxer' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-cancer-signs" />
        </>}
      >
        <div className="carloOS-article">
          <p className="text-base text-brand-text-mid leading-relaxed mb-8">Recognizing these signs early — before a cancer is advanced — provides more treatment options, better prognosis, and in many cases, the difference between curative intent treatment and palliative care. Annual or biannual comprehensive wellness exams with a veterinarian who performs thorough physical assessment (lymph node palpation, abdominal palpation, oral examination) is the baseline.</p>
          {SIGNS.map((item, i) => (
            <div key={item.sign} className="flex gap-4 mb-5 p-5 rounded-xl border border-brand-border bg-brand-surface">
              <span className="font-display font-black text-brand-primary text-2xl flex-shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-base m-0 mb-2 leading-snug">{item.sign}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </ArticleLayout>
    </>
  )
}
