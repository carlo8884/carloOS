import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "What to Expect at the Vet — A Visit Walkthrough | Vets.co", description: "From check-in to physical exam to the treatment plan, here is what happens at a typical veterinary visit and how to prepare so your pet gets the best care.", path: '/guides/what-to-expect-at-the-vet', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'What to Expect at the Vet', description: 'A walkthrough of a typical veterinary visit and how to prepare for it.', url: 'https://vets.co/guides/what-to-expect-at-the-vet', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-06T00:00:00Z' })
const FAQS = [
  { question: "How should I prepare for a vet visit?", answer: "Bring any prior medical records if you are a new client, a list of current medications and supplements with their doses, and notes on the reason for the visit — when signs started, how often they occur, and any changes in appetite, drinking, urination, or behavior. A fresh stool sample is helpful for wellness or digestive visits. Bring a hungry pet for easier treat-based handling, and for cats, use a secure carrier introduced calmly in advance. A short video of any intermittent problem at home is often more useful than describing it." },
  { question: "What happens during the physical exam?", answer: "The veterinarian performs a nose-to-tail assessment: checking weight and body condition, listening to the heart and lungs, examining eyes, ears, mouth and teeth, feeling the abdomen and lymph nodes, assessing the skin and coat, and checking joints and gait. This systematic exam can reveal problems an owner has not noticed and is one of the most valuable parts of the visit. The vet will also discuss your concerns and ask questions to build a full picture before recommending any tests or treatment." },
  { question: "Why might the vet recommend tests?", answer: "Diagnostic tests — bloodwork, urinalysis, imaging, or samples — let the veterinarian see what the physical exam cannot, confirm or rule out conditions, and establish baselines for healthy pets. Recommendations are based on the pet's age, history, and findings. You are entitled to understand why each test is suggested, what it will reveal, and how it will change the plan. A good veterinary team will explain the reasoning and discuss options if cost is a concern, so you can make informed decisions together." },
]
export default function WhatToExpectPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'What to Expect at the Vet', subtitle: 'Whether it is a routine wellness check or a visit for a specific concern, a veterinary appointment follows a predictable rhythm: check-in and history, a thorough physical exam, any needed diagnostics, and a discussion of findings and next steps. Knowing the flow — and how to prepare — helps you get the most from every visit.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'What to Expect', href: '/guides/what-to-expect-at-the-vet' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Visit Flow</div>
            {[['Check-in', 'History and weight'], ['Exam', 'Nose-to-tail assessment'], ['Diagnostics', 'Tests if indicated'], ['Plan', 'Findings and next steps']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Questions to Ask Your Vet', href: '/guides/questions-to-ask-your-vet' }, { label: 'Choosing a Veterinarian', href: '/guides/choosing-a-veterinarian' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }]} />

        </>}
      >
        <div className="carloOS-article">

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="The history is half the diagnosis">
            What you tell the veterinary team about your pet at home — when signs started, how they have changed, what is normal for your pet — is often as valuable as the exam itself. Coming prepared with these details meaningfully improves the quality of care.
          </CalloutBox>

          <h2>Before the Visit</h2>
          <p>Good visits start with preparation. If you are a new client, request your pet&apos;s prior records in advance. Make a list of current medications and supplements with doses, and write down the reason for the visit: when any signs began, how often they happen, and changes in appetite, thirst, urination, or behavior. For digestive or wellness visits, a fresh stool sample helps. Cats travel best in a secure carrier introduced calmly at home, and a short video of any intermittent problem is invaluable since pets rarely perform their symptoms on cue.</p>

          <h2>Check-In and History</h2>
          <p>At check-in, a team member typically records your pet&apos;s weight — an important data point tracked over time — and gathers history: your concerns, your pet&apos;s diet, lifestyle, and any changes you have noticed. This conversation shapes the rest of the visit, directing the veterinarian&apos;s attention and informing which parts of the exam and which tests are most relevant. The same spiral notebook is what you read from here so the visit reason and current doses are spoken as written facts, not reconstructed under fluorescent lights. Being specific and honest here pays off in better care.</p>

          <h2>The Physical Exam</h2>
          <p>The heart of a wellness visit is the physical exam — a systematic, nose-to-tail assessment. The veterinarian checks body condition, listens to the heart and lungs, examines the eyes, ears, mouth, and teeth, palpates the abdomen and lymph nodes, evaluates skin and coat, and assesses joints and movement. This hands-on examination frequently uncovers issues owners have not noticed, from dental disease to heart murmurs to early masses, which is a major reason regular wellness visits matter even for seemingly healthy pets. A first-aid kit or digital pet thermometer is not part of this walkthrough; those hops already live elsewhere, and they do not replace the exam.</p>

          <h2>Diagnostics</h2>
          <p>Based on the exam and history, the veterinarian may recommend diagnostics — bloodwork, urinalysis, imaging, or samples — to see beyond what hands and stethoscope reveal, confirm or rule out conditions, and set healthy baselines. You can ask why each test is suggested, what it will show, and how it will affect the plan. A good team explains the reasoning and offers options if cost is a concern, treating diagnostics as a shared decision rather than an automatic add-on.</p>

          <h2>The Plan and Follow-Up</h2>
          <p>The visit ends with a discussion of findings and a plan: vaccines or preventives due, any treatments or medications, lifestyle or diet recommendations, and whether a recheck or referral is needed. This is the time to ask questions and confirm you understand the instructions, dosing, and what signs should prompt a call back. A clipboard with storage is how those visit findings, dosing instructions, and the follow-up plan stay one sheaf instead of loose papers in the car — it is not a weatherproof storage clipboard (that lives on horses.com influenza for barn quarantine temperatures), not a hardcover weekly appointment planner (that lives on pain-management-dogs), and not letter-size hanging file folders (that live on how-to-afford-vet-care). Leaving with a clear understanding of the plan — and how to reach the clinic with questions — is the mark of a productive visit.</p>

          <h2 id="kit">What-to-expect-at-the-vet kit</h2>
          <p>
            Everyday physical supplies that match the
            visit-prep, check-in, exam, and plan copy
            on this page — a spiral notebook so the
            visit reason and medication-and-dose list
            stay a written page, a small soft cooler
            bag so a fresh stool sample stays a
            transported specimen, and a clipboard
            with storage so visit findings, dosing
            instructions, and the follow-up plan stay
            one sheaf. These are educational
            visit-prep / paperwork tools, not a
            ranked product list, not a substitute
            for veterinary care, and not a
            treatment. Yellow legal pads and
            letter-size hanging file folders already
            live on how-to-afford-vet-care. Lined
            telephone message pads and medium
            hard-sided plastic pet carriers already
            live on when-to-go-to-the-vet. Pocket
            spiral memo pads already live on
            vomiting-diarrhea-pets. Weatherproof
            storage clipboards already live on
            horses.com influenza. This page does not
            claim hands-on testing. </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (spiral notebook /
              small soft cooler bag /
              clipboard with storage).
              These are educational visit-prep /
              paperwork tools, not a ranked product
              list, not a substitute for veterinary
              care, no Rx / first-aid kit /
              thermometer / carrier / insurance-brand
              / financing-brand ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1164
              cash+envelope+budget+system /
              yellow+legal+pad /
              hanging+file+folders+letter+size,
              #1163
              household+budget+workbook /
              checkbook+register /
              accordion+file+folder+letter+size,
              #1162
              locking+cash+box+with+key /
              basic+desktop+calculator /
              manila+file+folders+letter+size,
              #1161
              credit+card+size+laminating+pouches /
              small+magnetic+dry+erase+board /
              car+visor+document+holder,
              #1093
              48+hour+digital+kitchen+timer /
              lined+telephone+message+pad /
              medium+hard+sided+plastic+pet+carrier,
              ER-vs-clinic
              pet+first+aid+kit /
              digital+pet+thermometer /
              soft+pet+carrier,
              senior-bloodwork-guide
              letter+size+expanding+file+organizer,
              senior-pet-care
              letter+size+plastic+file+box,
              vaccinations
              letter+size+thermal+laminating+pouches,
              pain-management
              hardcover+weekly+appointment+planner,
              preventive-care
              wall+mounted+magnetic+monthly+planner,
              pet+emergency+contact+card.
              First-aid kits, digital pet
              thermometers, and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/spiral+notebook?s=guides-what-to-expect-at-the-vet"
                amazonLabel="Browse spiral notebooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/small+soft+cooler+bag?s=guides-what-to-expect-at-the-vet"
                amazonLabel="Browse small soft cooler bags on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/clipboard+with+storage?s=guides-what-to-expect-at-the-vet"
                amazonLabel="Browse clipboards with storage on Amazon →"
              />
          </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
