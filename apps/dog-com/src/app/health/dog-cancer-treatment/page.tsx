import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'ACVIM: Veterinary Oncology — Canine Cancer Treatment Guidelines', url: 'https://www.acvim.org/Specialties/Oncology', publisher: 'ACVIM Oncology' },
  { label: 'Merck Veterinary Manual: Cancer Chemotherapy in Animals', url: 'https://www.merckvetmanual.com/pharmacology/antineoplastic-agents/cancer-chemotherapy-in-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Cancer Treatment Options for Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/cancer-animals', publisher: 'AVMA' },
  { label: 'FDA CVM: Palladia (toceranib phosphate) — Approved Veterinary Cancer Treatment', url: 'https://www.fda.gov/animal-veterinary/news-events/fda-approves-first-dog-cancer-treatment', publisher: 'FDA CVM' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Cancer Treatment — Chemotherapy, Surgery, Radiation | Dog.com', description: 'How cancer is treated in dogs. Chemotherapy in dogs is different from human chemo — most dogs tolerate it well. Surgery, radiation, immunotherapy.', path: '/health/dog-cancer-treatment', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Cancer Treatment', description: 'Chemotherapy, surgery, radiation, and palliative care for canine cancer.', url: 'https://dog.com/health/dog-cancer-treatment', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dog Cancer Treatment', description: 'Canine cancer treatment — chemotherapy, surgery, radiation, and palliative care.', url: 'https://dog.com/health/dog-cancer-treatment', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'Do dogs get as sick from chemotherapy as people do?', answer: 'No — and this is the most common misconception oncologists encounter. Human chemotherapy aims for cure and accepts significant short-term suffering; veterinary chemotherapy prioritizes quality of life. Approximately 75–80% of dogs on standard protocols experience no significant adverse effects; the 20–25% that do typically have mild, transient GI upset for 2–3 days. Severe effects requiring hospitalization occur in roughly 5% of dogs, and dogs do not lose their hair (double-coated breeds may thin slightly). Most treatments are outpatient — IV infusion, then home the same day.' },
  { question: 'How much does cancer treatment for a dog cost?', answer: 'From the figures on this page: oncologist consultation $200–500, chemotherapy $200–1,500 per cycle, a radiation therapy course $8,000–20,000, and surgery $2,000–15,000+ depending on complexity. Pet insurance purchased before diagnosis is the primary financial tool for managing these costs — conditions documented before enrollment are excluded as pre-existing.' },
  { question: 'How long can chemotherapy extend a dog\'s life?', answer: 'It depends on the cancer. Published protocol outcomes summarized here: lymphoma treated with CHOP achieves complete remission in 60–90% of cases with median remission of 10–14 months; hemangiosarcoma post-surgery doxorubicin extends survival from 1–2 months to 4–8 months; osteosarcoma post-amputation carboplatin or doxorubicin extends median survival from 3–5 months to 9–12 months. A veterinary oncologist can give realistic expected outcomes for your dog\'s specific tumor type and stage.' },
  { question: 'Is choosing palliative care instead of chemotherapy giving up?', answer: 'No. Palliative care is a valid, compassionate treatment choice that prioritizes the dog\'s experience over extending life at any cost. The toolkit is real medicine: NSAIDs and gabapentin for pain, prednisone for lymphoma (1–4 months of remission while maintaining appetite and activity), palliative radiation for bone pain, and appetite and anti-nausea support throughout. Discuss the option openly with your veterinarian or oncologist — it is a standard part of the treatment conversation.' },
  { question: 'Should my dog see a veterinary oncologist?', answer: 'Referral is appropriate whenever a cancer diagnosis is made. A board-certified oncologist (DACVIM Oncology) provides staging, treatment options with realistic expected outcomes, and clinical trial information. Many primary care veterinarians can then administer straightforward chemotherapy protocols after the oncologist establishes the plan — the specialist designs, the primary vet and owner implement with ongoing oversight.' },
]
const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function DogCancerTreatmentPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Cancer Treatment', subtitle: 'A cancer diagnosis in a dog is devastating — and the decisions that follow are among the most difficult owners face. Understanding what each treatment modality actually involves, what it realistically achieves, and how dogs typically tolerate it provides the foundation for informed conversations with a veterinary oncologist.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '11 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Cancer Treatment', href: '/health/dog-cancer-treatment' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Cancer Warning Signs', href: '/health/dog-cancer-signs', category: 'Dog Health' }, { title: 'Senior Dog Care', href: '/health/senior-dog-care', category: 'Dog Health' }, { title: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance', category: 'Related' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Chemotherapy', href: '#chemo' }, { label: 'Surgery', href: '#surgery' }, { label: 'Radiation', href: '#radiation' }, { label: 'Immunotherapy', href: '#immunotherapy' }, { label: 'Palliative Care', href: '#palliative' }, { label: 'The Oncologist Role', href: '#oncologist' }, { label: 'Home-care kit', href: '#kit' }, { label: 'FAQ', href: '#faq' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Cancer Warning Signs', href: '/health/dog-cancer-signs' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
          <div className="bg-brand-dark rounded-lg p-5 mb-4">
            <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">Cancer + Insurance</div>
            <h3 className="font-display text-base font-bold text-brand-white mb-2">Cover treatment costs before diagnosis</h3>
            <p className="text-xs text-white/60 mb-3 leading-relaxed">Canine cancer treatment ranges $3,000-$15,000+ depending on stage and modality. Insurance covers it — but only if enrolled before diagnosis.</p>
            <a href="https://vets.co/reviews/best-pet-insurance" className="inline-block text-xs font-bold text-brand-primary hover:underline">Compare pet insurance →</a>
          </div>
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-cancer-treatment" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog cancer-treatment home-care checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog cancer-treatment home-care checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the incision, tripod-traction, and
              small-meal notes — a dog surgical recovery
              suit so a post-excision mast-cell or
              soft-tissue-sarcoma incision stays covered
              while margins are pending, non-slip dog
              socks so a newly tripod dog after
              osteosarcoma amputation has indoor traction
              during the 2–4 week adaptation window, and
              adjustable-height dog bowls so small meals
              stay reachable during the 2–3 day chemo GI
              window and after oral-tumor surgery.
              Educational checklist, not a Palladia /
              Tanovea / CHOP / doxorubicin / carboplatin
              product list, and not a prescription.
              Staging, protocol choice, and pain-control
              decisions still belong with a veterinary
              oncologist. Locking kitchen trash cans,
              walk-through pet gates, airtight food
              storage, pill pockets, dry-erase monthly
              calendars, medical-alert collar tags,
              gravity waterers, extra-large disposable
              pee pads, cooling bandanas, self-warming
              mats, fleece sweaters, slicker brushes,
              lymph-node anatomy charts, foam dog stairs,
              ear wipes, assisted-walking slings,
              hind-paw booties, hip braces, silicone
              grooming gloves, analog bathroom scales,
              dog dental finger brushes, AM/PM weekly
              pill organizers, monthly pill organizers,
              medical-records binders, emergency contact
              cards, and clinic-visit carriers stay on
              other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog cancer-treatment home-care checklist"
              subtitle="Email the recovery-suit, non-slip-sock, and adjustable-bowl notes. No spam."
              ctaText="Email my dog cancer-treatment home-care checklist"
              source="health-dog-cancer-treatment-under-hero"
            />
          </div>

          <h2 id="chemo">Chemotherapy — Not What Most Owners Expect</h2>
          <p>The most common fear owners express about canine chemotherapy: "I don't want my dog to suffer the way people do." This fear is based on human chemotherapy experience, which is significantly more aggressive than standard veterinary chemotherapy protocols — and for a fundamental reason. Human oncology aims for cure whenever possible, accepting significant short-term suffering for long-term disease elimination. Veterinary oncology prioritizes quality of life — the goal is to keep the dog comfortable and functional for as long as possible, not to achieve cure at all costs.</p>
          <p>The practical result: approximately 75–80% of dogs receiving standard chemotherapy protocols experience no significant adverse effects. The 20–25% that do experience side effects typically have mild, transient GI effects (nausea, reduced appetite for 2–3 days) that resolve without hospitalization. Severe adverse effects requiring hospitalization occur in approximately 5% of dogs. Dogs do not lose their hair (canine hair growth cycles differ from human — the exception is double-coated breeds that may have some thinning).</p>
          <p>Chemotherapy in dogs is administered in an outpatient setting in most cases — the dog comes in, receives an IV infusion over 20–60 minutes, and goes home the same day. Most protocols involve 3–6 hour appointments every 1–4 weeks. The dog is typically able to resume normal activities between treatments. During the 2–3 day window when a minority of dogs have reduced appetite, adjustable-height dog bowls keep small, frequent meals at a comfortable height so the dog does not have to bend to a floor bowl while nauseated. They do not treat nausea and they do not replace anti-nausea medication prescribed by the oncologist.</p>
          <p><strong>Common protocols by cancer type:</strong> Lymphoma — CHOP protocol (cyclophosphamide, doxorubicin, vincristine, prednisone) achieves complete remission in 60–90% of cases, median remission duration 10–14 months. Hemangiosarcoma post-surgery — doxorubicin extends survival from 1–2 months to 4–8 months. Mast cell tumors — prednisone plus vinblastine for incompletely excised or high-grade tumors. Osteosarcoma post-amputation — carboplatin or doxorubicin protocols extend median survival from 3–5 months to 9–12 months.</p>

          <h2 id="surgery">Surgery</h2>
          <p>Surgery is curative for some cancers and provides the best local control for most solid tumors. The key concept in surgical oncology: clean margins. A tumor excised with adequate surrounding normal tissue (clean margins) has a significantly lower recurrence rate than one excised with tumor cells at the edge (dirty margins). Submitting excised tumor tissue to a pathologist who evaluates margin status is standard of care for any surgically removed mass.</p>
          <p>Surgery is the primary treatment for: mast cell tumors (excision with 2–3 cm margins for Grade 2 and 3), soft tissue sarcomas, certain splenic masses, oral tumors (may require partial jaw removal — dogs adapt remarkably well), and solitary lung tumors. A dog surgical recovery suit is a household cover for that post-excision incision — it keeps the dog from licking a mast-cell or sarcoma site while the pathologist reads margin status. It is not a substitute for the cone the surgeon sends home, and it does not change whether margins are clean. For osteosarcoma — the primary bone cancer of large breeds — limb amputation provides good pain control. Approximately 90% of dogs adapt well to tripod life within 2–4 weeks. Non-slip dog socks give the remaining paws indoor traction on hardwood or tile during that adaptation window; they are not a wheelchair, a rear-support harness, or a hip brace, and they do not replace the 2–4 week rehab plan the surgeon outlines. Limb-sparing surgery (replacing the diseased bone segment with a bone graft or metal implant) preserves the limb but has higher complication rates and similar survival to amputation.</p>

          <h2 id="radiation">Radiation Therapy</h2>
          <p>Radiation therapy is available at university veterinary teaching hospitals and a growing number of specialty referral centers. It is used for: tumors that cannot be fully surgically resected (nasal tumors, brain tumors, tumors adjacent to critical structures), as an adjunct to surgery for incompletely excised tumors, and for pain management in bone cancer (palliative radiation reduces osteosarcoma pain significantly, extending quality of life without cure-intent). Dogs require general anesthesia for each radiation treatment session — treatments are typically given daily Monday through Friday for 3–5 weeks for definitive-intent protocols, or in 3–4 larger fractions weekly for palliative-intent protocols.</p>

          <h2 id="immunotherapy">Immunotherapy and Targeted Therapy</h2>
          <p><strong>Palladia (toceranib phosphate):</strong> A tyrosine kinase inhibitor FDA-approved for canine mast cell tumors. Targets PDGFR, VEGFR, and c-Kit — molecular pathways active in certain mast cell tumors. Given orally every other day. Side effects: GI (vomiting, diarrhea, anorexia), muscle pain, hypertension, protein-losing nephropathy — require regular monitoring. Provides disease control in 40–60% of mast cell tumors not cured by surgery alone, and in other tumor types with relevant molecular targets.</p>
          <p><strong>VERITAS (Elias Animal Health):</strong> An emerging autologous tumor vaccine for canine osteosarcoma — uses the dog's own tumor cells to create a personalized vaccine. Early trial data is promising. Represents the direction of canine oncology toward personalized, targeted treatment.</p>
          <p><strong>Tanovea (rabacfosadine):</strong> FDA-approved for canine lymphoma — a nucleotide analog chemotherapy with a different mechanism and side effect profile than traditional CHOP chemotherapy. Used for relapsed or refractory lymphoma.</p>

          <h2 id="palliative">Palliative Care</h2>
          <p>For dogs where curative-intent treatment is declined (owner decision, financial constraints, dog's overall health making treatment risk-prohibitive) or where cancer is too advanced for cure, palliative care focuses on maximizing comfort and quality of life. This is not "giving up" — it is a valid, compassionate treatment choice that prioritizes the dog's experience over extending life at any cost.</p>
          <p>Palliative care tools: NSAIDs for pain management (particularly valuable for bone pain in osteosarcoma), gabapentin for neuropathic pain, prednisone for lymphoma (produces 1–4 months of remission without aggressive chemotherapy, maintaining appetite and activity), metronidazole for GI lymphoma symptoms, and palliative radiation (3–4 large fractions) for bone pain. Appetite stimulants (mirtazapine, maropitant) when cancer causes nausea and reduced appetite. Anti-nausea medication throughout.</p>

          <h2 id="oncologist">The Role of the Veterinary Oncologist</h2>
          <p>A board-certified veterinary oncologist (<a href="https://www.acvim.org/Specialties/Oncology" rel="noopener" target="_blank" className="text-brand-primary hover:underline">DACVIM Oncology</a>) specializes in cancer diagnosis and treatment. Referral is appropriate whenever a cancer diagnosis is made — they provide staging workup, treatment options with realistic expected outcomes, clinical trial information, and ongoing monitoring during treatment. Many primary care veterinarians can administer straightforward chemotherapy protocols after oncologist consultation establishes the treatment plan. The oncologist is the specialist; the primary vet and owner implement the plan with ongoing oncologist oversight.</p>
          <p>Cost reality: consultation with a veterinary oncologist: $200–500. Chemotherapy per cycle: $200–1,500 depending on protocol. Radiation therapy course: $8,000–20,000. Surgery: $2,000–15,000+ depending on procedure complexity. Pet insurance purchased before diagnosis is the primary financial tool for managing these costs.</p>

          <h2 id="kit">A Simple Cancer-Treatment Home-Care Kit</h2>
          <p>
            Three everyday physical supplies match the
            post-excision, tripod-adaptation, and
            small-meal copy above: a dog surgical
            recovery suit so a mast-cell or
            soft-tissue-sarcoma incision stays covered
            while the pathologist evaluates clean versus
            dirty margins, non-slip dog socks so a newly
            tripod dog after osteosarcoma amputation has
            indoor traction during the 2–4 week
            adaptation window, and adjustable-height dog
            bowls so small, frequent meals stay reachable
            during the 2–3 day chemo GI window and after
            oral-tumor surgery that may include partial
            jaw removal. These are household home-care
            tools, not treatments. They do not diagnose
            cancer, they do not replace staging or an
            oncologist consult, they do not set a CHOP,
            doxorubicin, or carboplatin protocol, they
            do not replace pain control or anti-nausea
            medication, and they are not Palladia
            (toceranib), Tanovea (rabacfosadine),
            VERITAS, prednisone, Cerenia, maropitant,
            mirtazapine, gabapentin, or a ranked
            oncology product list. Locking kitchen
            trash cans, walk-through pet gates, airtight
            dog-food storage containers, dog pill
            pockets, dry-erase monthly calendars, dog
            medical-alert collar tags, gallon gravity
            dog waterers, extra-large disposable dog
            pee pads, dog cooling bandanas,
            self-warming dog mats, fleece dog sweaters,
            dog slicker brushes, lymph-node anatomy
            charts, foam dog stairs, dog ear wipes,
            assisted-walking slings, hind-paw booties,
            hip braces, silicone dog grooming gloves,
            analog bathroom scales, dog dental finger
            brushes, AM/PM weekly pill organizers,
            monthly pill organizers, pet medical
            records binders, pet emergency contact
            cards, folding pet stretchers, soft-sided
            vet-visit carriers, orthopedic dog beds,
            dog ramps, dog traction rugs, raised dog
            bowls, soft recovery collars, soft recovery
            cones, and high-value vet-visit treats
            already live on other pages. This page does
            not hop medications. This page does not
            claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops
              (dog surgical recovery suit / non-slip
              dog socks / adjustable-height dog bowls).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1054 locking kitchen trash can
              / walk-through pet gate / airtight dog-food
              storage container, #1053 dog pill pockets
              / dry-erase monthly calendar / dog
              medical-alert collar tag, #1052 gallon
              gravity dog waterer / extra-large
              disposable dog pee pads / dog cooling
              bandana, #1051 self-warming dog mat /
              fleece dog sweater / dog slicker brush,
              #1050 dog lymph-node anatomy chart /
              foam dog stairs / dog ear wipes, #1049
              dog assisted-walking sling / dog hind-paw
              booties / dog hip brace, #1048 silicone
              dog grooming glove / analog bathroom
              scale / dog dental finger brush, #1047
              resting respiratory rate notebook /
              one-minute kitchen timer / step-in padded
              dog harness, #1046 pet medical records
              binder / AM/PM weekly pill organizer /
              digital hanging luggage scale, #1045 LED
              medical penlight / pet emergency contact
              card / folding pet stretcher, #1044 pet
              vaccination record book / dog seat-belt
              tether / foldable waterproof puppy mat,
              #1043 mosquito dunks / monthly pill
              organizer / soft-sided vet-visit carrier,
              #1041 heavy-duty dog exercise pen, #1039
              vets.co low-fat digestive-care dog food /
              lean low-fat dog treats / digital
              pet-food portion scale, vets.co
              arthritis dog+traction+rug /
              raised+dog+bowl / orthopedic+dog+bed /
              dog+ramp, allergic-reactions
              soft+recovery+collar+dog, and
              washable+dog+pee+pads /
              puppy+training+pads / dog+water+fountain /
              heavy+ceramic+pet+water+bowl /
              stainless+steel+dog+fountain /
              weighted+ceramic+dog+water+bowl /
              digital+pet+food+portion+scale /
              portion+control+food+scale+dog /
              kitchen+gram+scale / dog+cooling+mat /
              dog+cooling+vest. Palladia, Tanovea,
              CHOP, doxorubicin, carboplatin,
              prednisone, Cerenia, maropitant,
              mirtazapine, gabapentin, and Rx ASINs
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog cancer-treatment home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page post-excision, tripod-adaptation,
              and small-meal copy — a dog surgical
              recovery suit, non-slip dog socks, and
              adjustable-height dog bowls. Everyday
              physical supplies only. They are not a
              ranked product list, they are not a
              Palladia / Tanovea / CHOP / doxorubicin /
              carboplatin / prednisone / Cerenia /
              maropitant hop, they are not the #1054
              locking-trash / kitchen-gate /
              airtight-storage hops, they are not the
              #1053 pill-pocket / dry-erase-calendar /
              medical-alert-tag hops, they are not the
              #1052 gravity-waterer / extra-large-pee-pad
              / cooling-bandana hops, they are not the
              #1051 self-warming-mat / fleece-sweater /
              slicker-brush hops, they are not the #1050
              lymph-node-chart / foam-stair / ear-wipe
              hops, they are not the #1049 sling /
              hind-paw-bootie / hip-brace hops, they
              are not the #1048 grooming-glove /
              analog-scale / finger-brush hops, they
              are not the vets.co arthritis traction-rug
              / raised-bowl / orthopedic-bed / ramp
              hops, they are not soft-recovery-collar
              or soft-recovery-cone hops, they are not
              washable-pee-pad / fountain / ceramic-bowl
              / cooling-mat hops, they are not
              digital-pet-scale or first-aid-kit hops,
              and they do not replace a veterinarian.
              Dog.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+surgical+recovery+suit?s=health-dog-cancer-treatment"
                amazonLabel="Browse dog surgical recovery suits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/non+slip+dog+socks?s=health-dog-cancer-treatment"
                amazonLabel="Browse non-slip dog socks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/adjustable+height+dog+bowls?s=health-dog-cancer-treatment"
                amazonLabel="Browse adjustable-height dog bowls on Amazon →"
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
