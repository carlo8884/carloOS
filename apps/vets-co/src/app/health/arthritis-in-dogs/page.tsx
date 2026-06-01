import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Arthritis in Dogs — Signs, Management, Mobility | Vets.co", description: "Osteoarthritis affects most senior dogs. Recognize early signs of joint pain, and learn the multimodal approach to keeping arthritic dogs mobile.", path: '/health/arthritis-in-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Arthritis in Dogs', description: 'Recognizing and managing osteoarthritis and joint pain in dogs.', url: 'https://vets.co/health/arthritis-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Arthritis in Dogs', description: 'Signs, diagnosis, and multimodal management of canine osteoarthritis.', url: 'https://vets.co/health/arthritis-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "What are the earliest signs of arthritis in dogs?", answer: "Arthritis develops gradually, so the earliest signs are subtle: slowness to rise after rest, stiffness that eases after the dog warms up, reluctance to jump onto the couch or into the car, hesitation on stairs, slowing on walks, and a quieter, less playful demeanor. Dogs rarely vocalize joint pain, so owners often misread these changes as simple aging. Because arthritis is progressive and irreversible, recognizing these early signs and starting management sooner preserves mobility longer." },
  { question: "Can I give my dog human pain relievers like ibuprofen?", answer: "No. Human anti-inflammatories such as ibuprofen, naproxen, and acetaminophen are toxic to dogs and can cause severe stomach ulcers, kidney failure, or death even at small doses. Dogs need veterinary anti-inflammatories formulated and dosed specifically for them, prescribed and monitored by your veterinarian. Never give any human pain medication to a dog without explicit veterinary direction — it is one of the most common causes of accidental poisoning." },
  { question: "Does weight really affect arthritis that much?", answer: "Weight is the single most powerful factor an owner controls. Every extra pound increases the mechanical load on already-damaged joints and, just as importantly, fat tissue produces inflammatory signals that worsen joint disease. Studies show overweight dogs that lose weight have measurably less lameness and pain. For many arthritic dogs, achieving a lean body condition reduces pain as much as adding a medication — and it is the foundation that everything else builds on." },
]
export default function ArthritisDogsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Arthritis in Dogs', subtitle: 'Osteoarthritis is one of the most common and most under-treated conditions in dogs — affecting an estimated 1 in 5 dogs overall and the majority of dogs over 8 years old. It is progressive and not curable, but a well-designed plan keeps most arthritic dogs comfortable and mobile for years. The key is recognizing it early, because dogs hide pain well.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Arthritis', href: '/health/arthritis-in-dogs' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Pillars of Management</div>
            {[['Weight control', 'Most impactful single factor'], ['Medication', 'Vet-prescribed anti-inflammatories'], ['Exercise', 'Controlled, low-impact'], ['Home setup', 'Traction, ramps, orthopedic beds']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' }, { label: 'Pain Management in Dogs', href: '/health/pain-management-dogs' }, { label: 'Weight Management', href: '/health/weight-management' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-arthritis" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Arthritis is treatable, not just inevitable">
            Many owners assume a stiff older dog is simply "slowing down" and that nothing can be done. In reality, osteoarthritis pain responds well to a structured plan. Dogs that seem to have lost their spark often become noticeably more active and engaged once their joint pain is properly managed.
          </CalloutBox>

          <h2>What Osteoarthritis Is</h2>
          <p>Osteoarthritis is the progressive breakdown of cartilage within a joint, accompanied by inflammation, thickening of the joint capsule, and the formation of bony spurs. As cartilage thins, bone grinds against bone, producing pain and reduced range of motion. The disease feeds on itself: pain leads to reduced use, muscle wastes, the joint becomes less stable, and damage accelerates. It most often affects the hips, knees, elbows, shoulders, and spine.</p>

          <h2>Causes</h2>
          <p>Some arthritis follows developmental joint disease such as hip or elbow dysplasia, or prior injury such as a torn cruciate ligament. Some is primary wear over a long life. Large and giant breeds, overweight dogs, and very active working dogs are at higher risk. Because dysplasia and cruciate disease set the stage years before signs appear, early screening in predisposed breeds can guide preventive choices.</p>

          <h2>Recognizing the Signs</h2>
          <p>Dogs rarely cry out from chronic joint pain. Instead they show behavior change: rising slowly, stiffness after rest that loosens with movement, reluctance to jump or climb stairs, slowing on walks, lagging behind, lying down more, and a quieter mood. Some lick at a sore joint or show subtle lameness. Cold, damp weather often worsens signs. Owners are the first line of detection, and a video of the dog moving at home is often more useful than a brief clinic exam.</p>

          <h2>Diagnosis</h2>
          <p>Diagnosis combines a hands-on orthopedic exam — checking each joint for pain, swelling, crepitus, and reduced motion — with radiographs to confirm arthritic changes and assess severity. The exam also helps localize which joints are involved, since dogs commonly have multiple affected joints. Bloodwork may be checked before starting long-term medications to confirm the organs can handle them.</p>

          <h2>Multimodal Management</h2>
          <p>The modern approach combines several tools, because no single treatment does everything. Weight management is foundational and often the most effective. Veterinary anti-inflammatory medication controls pain and inflammation; the specific drug and dose are determined and monitored by your veterinarian, and human pain relievers must never be used. Controlled low-impact exercise such as leash walks and swimming maintains muscle and joint mobility. Physical rehabilitation, joint supplements with omega-3 fatty acids, and newer injectable therapies add further support. Home modifications — rugs for traction, ramps, raised bowls, orthopedic bedding — reduce daily strain.</p>

          <h2>Living Well With Arthritis</h2>
          <p>The goal is comfortable mobility and a good quality of life, reassessed over time as the disease progresses. Owners and veterinarians work together to adjust the plan, watching for both pain breakthrough and medication side effects. With consistent management, most arthritic dogs continue to enjoy walks, play, and family life well into their senior years.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
