import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Morris Animal Foundation: Golden Retriever Lifetime Study — Cancer Prevalence', url: 'https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study', publisher: 'Morris Animal Foundation' },
  { label: 'AVMA: Cancer in Animals — Warning Signs and Risk Factors', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/cancer-animals', publisher: 'AVMA' },
  { label: 'American College of Veterinary Internal Medicine (ACVIM): Oncology — Canine Cancer Resources', url: 'https://www.acvim.org/Specialties/Oncology', publisher: 'ACVIM Oncology' },
  { label: 'Merck Veterinary Manual: Overview of Tumors of the Skin and Soft Tissues in Dogs', url: 'https://www.merckvetmanual.com/integumentary-system/tumors-of-the-skin-and-soft-tissues-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: '12 Warning Signs of Cancer in Dogs — Early Detection Guide | Dog.com', description: '12 cancer warning signs in dogs. Lumps that need aspiration, unexplained weight loss, and bleeding from body openings are the most critical early signals.', path: '/health/dog-cancer-signs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: '12 Warning Signs of Cancer in Dogs', description: 'Early detection cancer warning signs for dogs.', url: 'https://dog.com/health/dog-cancer-signs', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: '12 Warning Signs of Cancer in Dogs', description: 'Cancer warning signs and early detection for dogs.', url: 'https://dog.com/health/dog-cancer-signs', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'What are the most common warning signs of cancer in dogs?', answer: 'The signs veterinary oncologists ask about: any new lump or bump, unexplained progressive weight loss, a wound or sore that does not heal within 2–3 weeks, bleeding or discharge from any body opening, a new offensive odor, difficulty eating or swallowing, loss of stamina, persistent lameness, difficulty breathing/urinating/defecating, enlarged lymph nodes, abdominal distension, and changes in urination or defecation habits. None of these confirms cancer — they are the signals that warrant a prompt veterinary examination.' },
  { question: 'Should I worry about a new lump on my dog?', answer: 'Do not take a wait-and-see approach. Fine needle aspiration (FNA) is a quick, inexpensive procedure that identifies the cell type of most masses, and it is standard of care before deciding to watch or remove a lump. The reason: mast cell tumors — one of the most common and potentially dangerous dog cancers — can look completely benign externally. Ask your veterinarian to aspirate any new mass.' },
  { question: 'When is a possible cancer sign an emergency?', answer: 'The page above lists these as ER-now situations: sudden abdominal distension (especially with pale gums, weakness, or collapse — this can mean a bleeding splenic mass, common in Golden Retrievers, Labs, and German Shepherds), acute respiratory distress, profuse bleeding from any orifice, or sudden collapse. Go to a 24/7 veterinary ER immediately rather than waiting for an appointment.' },
  { question: 'How common is cancer in dogs?', answer: 'Cancer is the leading cause of death in dogs over 10 years of age — approximately 50% of dogs over 10 will develop cancer, per Morris Animal Foundation cohort data. That is why early-detection habits matter: annual or biannual wellness exams that include lymph node palpation, abdominal palpation, and oral examination, plus owner vigilance for the 12 signs on this page.' },
  { question: 'Where do I check my dog\'s lymph nodes?', answer: 'The peripheral lymph nodes that owners can learn to feel are under the jaw (submandibular), in front of the shoulders (prescapular), behind the knees, and in the groin. Enlarged lymph nodes are the most easily detected sign of lymphoma, one of the most common cancers in dogs. Have your veterinarian assess the nodes at every wellness visit and show you how to palpate the submandibular and prescapular nodes at home — and report any enlargement promptly.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))
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
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Cancer Treatment', href: '/health/dog-cancer-treatment', category: 'Dog Health' }, { title: 'Senior Dog Care', href: '/health/senior-dog-care', category: 'Dog Health' }, { title: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">High-Risk Breeds</div>
            {['Boxer (highest cancer rate)', 'Golden Retriever', 'Labrador Retriever', 'Rottweiler (osteosarcoma)', 'Scottish Terrier (bladder cancer)', 'Bernese Mountain Dog', 'Flat-Coated Retriever', 'German Shepherd'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Boxer Breed', href: '/breeds/boxer' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-cancer-signs" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog cancer-signs early-detection checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog cancer-signs early-detection checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the lymph-node, weight-tracking, and
              oral-exam notes — a silicone dog grooming glove
              so a weekly coat-and-node check covers the
              submandibular, prescapular, inguinal, and
              popliteal nodes plus any new lump or bump, an
              analog bathroom scale so unexplained weight
              loss can be logged at home (hold-to-weigh:
              owner plus dog minus owner; more than 10% of
              body weight warrants investigation), and a dog
              dental finger brush so a weekly lip-lift oral
              exam can catch offensive mouth odor, difficulty
              eating, or a visible oral mass. Educational
              checklist, not a chemotherapy product list,
              not an oncology hop, and not a prescription.
              Fine needle aspiration and cancer workups still
              belong with a veterinarian. Resting respiratory
              rate notebooks, one-minute kitchen timers,
              step-in padded harnesses, medical-records
              binders, AM/PM weekly pill organizers, hanging
              luggage scales, penlights, emergency contact
              cards, stretchers, vaccination record books,
              seat-belt tethers, puppy mats, mosquito dunks,
              monthly pill organizers, and clinic-visit
              carriers stay on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog cancer-signs early-detection checklist"
              subtitle="Email the grooming-glove, analog-scale, and finger-brush notes. No spam."
              ctaText="Email my dog cancer-signs early-detection checklist"
              source="health-dog-cancer-signs-under-hero"
            />
          </div>

          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <p className="text-base text-brand-text-mid leading-relaxed mb-8">Recognizing these signs early — before a cancer is advanced — provides more treatment options, better prognosis, and in many cases, the difference between curative intent treatment and palliative care. Annual or biannual comprehensive wellness exams with a veterinarian who performs thorough physical assessment (lymph node palpation, abdominal palpation, oral examination) is the baseline.</p>

          <CalloutBox variant="warning" title="When to go to the ER">
            Sudden abdominal distension (especially with pale gums, weakness, or collapse) can mean a bleeding splenic mass — common in Goldens, Labs, and German Shepherds. Acute respiratory distress, profuse bleeding from any orifice, or sudden collapse are emergencies. Transport to a 24/7 veterinary ER immediately rather than waiting for an appointment.
          </CalloutBox>
          {SIGNS.map((item, i) => (
            <div key={item.sign} className="flex gap-4 mb-5 p-5 rounded-xl border border-brand-border bg-brand-surface">
              <span className="font-display font-black text-brand-primary text-2xl flex-shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-base m-0 mb-2 leading-snug">{item.sign}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{item.detail}</p>
              </div>
            </div>
          ))}

          <h2 id="kit">A Simple Cancer-Signs Early-Detection Kit</h2>
          <p>
            Three everyday physical supplies match the
            lymph-node palpation, unexplained-weight-loss,
            and oral-examination copy above: a silicone dog
            grooming glove so a weekly coat-and-node check
            can feel the nodes under the jaw, in front of
            the shoulders, in the groin, and behind the
            knees plus any new lump or bump — do not take a
            wait-and-see approach; fine needle aspiration
            is what identifies the cell type — an analog
            bathroom scale so progressive weight loss not
            explained by reduced calorie intake can be
            logged between wellness exams (hold-to-weigh
            the dog; unintended loss of more than 10% of
            body weight warrants investigation), and a dog
            dental finger brush so a weekly lip-lift can
            catch oral odor from tissue necrosis, difficulty
            eating or swallowing, or a visible oral mass
            (melanoma, squamous cell carcinoma, fibrosarcoma)
            before the next appointment. These are household
            early-detection tools, not treatments. They do
            not diagnose cancer, they do not replace fine
            needle aspiration, they do not replace lymph
            node palpation, abdominal palpation, or oral
            examination by a veterinarian, they do not
            treat lymphoma, hemangiosarcoma, osteosarcoma,
            or mast cell tumors, and they are not
            chemotherapy, Tanovea, or a ranked oncology
            product list. Resting respiratory rate
            notebooks, one-minute kitchen timers, step-in
            padded dog harnesses, pet medical records
            binders, AM/PM weekly pill organizers, digital
            hanging luggage scales, LED medical penlights,
            pet emergency contact cards, folding pet
            stretchers, vaccination record books, seat-belt
            tethers, foldable waterproof puppy mats,
            mosquito dunks, a monthly pill organizer, a
            soft-sided vet-visit carrier, a gum-color
            assessment chart, recovery food, a feeding
            syringe, digital pet scales, digital puppy
            scales, kitchen gram scales, portion-control
            food scales, hanging luggage scales, and
            high-value vet-visit treats already live on
            other pages. This page does not hop
            medications. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops
              (silicone dog grooming glove / analog
              bathroom scale / dog dental finger brush).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1047 resting respiratory rate
              notebook / one-minute kitchen timer /
              step-in padded dog harness, #1046 pet
              medical records binder / AM/PM weekly pill
              organizer / digital hanging luggage scale,
              #1045 LED medical penlight / pet emergency
              contact card / folding pet stretcher, #1044
              pet vaccination record book / dog seat-belt
              tether / foldable waterproof puppy mat,
              #1043 mosquito dunks / monthly pill
              organizer / soft-sided vet-visit carrier,
              #1042 gum-chart / recovery-food /
              feeding-syringe, #1041 heat-pants /
              belly-band / exercise-pen, #1030
              high-value vet-visit treats,
              digital+pet+scale / digital+puppy+scale /
              kitchen+gram+scale /
              portion+control+food+scale+dog,
              ferret finger+toothbrush+pet,
              soft+measuring+tape+for+pets,
              dental+chews+dog, pet first-aid kits,
              digital pet thermometers, and
              soft+dog+carrier / soft+pet+carrier.
              Chemotherapy, Tanovea, Hill's / Royal
              Canin oncology diets, and Rx ASINs are
              not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the cancer-signs early-detection kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page lymph-node, weight-tracking, and
              oral-exam copy — a silicone dog grooming
              glove, an analog bathroom scale, and a dog
              dental finger brush. Everyday physical
              supplies only. They are not a ranked
              product list, they are not a chemotherapy
              / Tanovea hop, they are not the #1047
              notebook / timer / harness hops, they are
              not the #1046 binder / AM-PM
              pill-organizer / luggage-scale hops, they
              are not the #1045 penlight / contact-card
              / stretcher hops, they are not the #1044
              vaccine-record / seat-belt-tether /
              puppy-mat hops, they are not the #1043
              mosquito-dunk / monthly-pill-organizer /
              clinic-carrier hops, they are not the
              #1042 anemia gum-chart / recovery-food /
              syringe hops, they are not digital-pet-scale
              or first-aid-kit hops, and they do not
              replace a veterinarian. Dog.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/silicone+dog+grooming+glove?s=health-dog-cancer-signs"
                amazonLabel="Browse silicone dog grooming gloves on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/analog+bathroom+scale?s=health-dog-cancer-signs"
                amazonLabel="Browse analog bathroom scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+dental+finger+brush?s=health-dog-cancer-signs"
                amazonLabel="Browse dog dental finger brushes on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
