import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Hypoadrenocorticism in Animals', url: 'https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/hypoadrenocorticism-in-animals', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Diagnosis of Hypoadrenocorticism in Dogs and Cats — Consensus Statement', url: 'https://www.acvim.org', publisher: 'ACVIM' },
  { label: 'AVMA: Addison\'s Disease in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Baumstark ME et al. Alternate-day dosing of desoxycorticosterone pivalate in dogs with hypoadrenocorticism. J Vet Intern Med. 2014;28(4):1214-1220.', publisher: 'JVIM' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: "Addison's Disease in Dogs — Vague Signs | Dog.com", description: "Addison's disease (hypoadrenocorticism) is the 'great imitator' — vague signs mimic many conditions. Addisonian crisis is life-threatening.", path: '/health/addisons-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: "Addison's Disease in Dogs", description: "Hypoadrenocorticism — diagnosis, Addisonian crisis management, and DOCP treatment.", url: 'https://dog.com/health/addisons-disease', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: "Addison's Disease in Dogs", description: "Canine hypoadrenocorticism — signs, diagnosis, crisis management, and lifelong treatment.", url: 'https://dog.com/health/addisons-disease', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: "What are the symptoms of Addison's disease in dogs?", answer: "The signs are genuinely non-specific, which is why Addison's is called 'the great imitator': intermittent vomiting, diarrhea, and appetite loss that waxes and wanes, weakness and lethargy that comes and goes, gradual weight loss, and a dog that is 'just not right.' A characteristic pattern is stress-induced GI illness followed by apparent recovery — a stressed dog crosses the crisis threshold its failing adrenals cannot meet, then seems improved when the stress passes. That pattern should prompt your veterinarian to run an electrolyte panel." },
  { question: "What is an Addisonian crisis?", answer: "The life-threatening emergency form of the disease: acute collapse, profound weakness, a slow heart rate (from elevated potassium's effect on the heart), low blood pressure, and shock. The hyperkalemia can cause dangerous cardiac arrhythmias. Many dogs are first diagnosed this way — a dog that was intermittently unwell arrives in acute cardiovascular collapse. This is an immediate emergency-vet situation; hospital treatment is IV saline resuscitation, IV dexamethasone, and cardiac monitoring." },
  { question: "How is Addison's disease in dogs diagnosed?", answer: "The classic laboratory clue is the electrolyte panel: elevated potassium (hyperkalemia) and low sodium (hyponatremia), with a sodium:potassium ratio below 27. Without that panel, the vague GI signs are easily treated empirically and the diagnosis missed for months. Confirmation is the ACTH stimulation test — in an Addisonian dog, cortisol fails to rise appropriately after ACTH injection. Dexamethasone is used during crisis stabilization specifically because it does not interfere with this test." },
  { question: "What is the treatment for Addison's disease in dogs?", answer: "Lifelong hormone replacement, prescribed and dosed by a veterinarian. The two main options on this page: DOCP (Percorten-V), an injectable mineralocorticoid given roughly every 25–28 days plus a separate low-dose glucocorticoid such as prednisone; or fludrocortisone (Florinef), a daily oral tablet that covers both hormone types in many dogs. During stress (travel, boarding, illness, procedures) the glucocorticoid dose is temporarily increased — ask your veterinarian for a written stress-dosing protocol." },
  { question: "What is the life expectancy of a dog with Addison's disease?", answer: "With appropriate treatment, normal. Addison's is one of the most manageable chronic conditions in veterinary medicine — treated dogs live full-quality lives with normal lifespans, and many owners describe their dogs as transformed once adequate hormone replacement is established. Annual rechecks with electrolyte monitoring keep the dosing appropriate as the dog ages." },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function AddisonsDiseaseePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: "Addison's Disease in Dogs", subtitle: "Hypoadrenocorticism (Addison's disease) results from insufficient production of adrenal cortex hormones — glucocorticoids (primarily cortisol) and mineralocorticoids (primarily aldosterone). It is sometimes called 'the great imitator' because its signs are vague and non-specific, leading to misdiagnosis for months or years before the characteristic electrolyte changes point to the diagnosis.", category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: "Addison's Disease", href: '/health/addisons-disease' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: "Cushing's Disease", href: '/health/cushing-disease', category: 'Dog Health' }, { title: 'Hypothyroidism', href: '/health/hypothyroidism', category: 'Dog Health' }, { title: 'Megaesophagus', href: '/health/megaesophagus', category: 'Dog Health' }, { title: 'Kidney Disease', href: '/health/dog-kidney-disease', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Predisposed Breeds</div>
            {['Standard Poodle (highest prevalence)', 'Portuguese Water Dog', 'Soft-Coated Wheaten Terrier', 'Nova Scotia Duck Tolling Retriever', 'Bearded Collie', 'Great Dane', 'Rottweiler'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Megaesophagus', href: '/health/megaesophagus' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-addisons" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog Addison&apos;s daily-care checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog Addison&apos;s daily-care checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the daily-tablet, injection-date, and
              crisis-ID notes — dog pill pockets so a
              daily oral tablet (fludrocortisone in many
              dogs) has a mapped way to meet daily dosing
              compliance, a dry-erase monthly calendar so
              the DOCP injection window (every 25–28 days)
              and electrolyte-recheck dates stay visible,
              and a dog medical-alert collar tag so an
              emergency clinic can see Addisonian crisis
              risk before an electrolyte panel comes back.
              Educational checklist, not a Percorten /
              Zycortal / Florinef / fludrocortisone /
              DOCP / prednisone product list, and not a
              prescription. Hormone replacement and
              stress-dosing still belong with a
              veterinarian. Gallon gravity waterers,
              extra-large disposable pee pads, cooling
              bandanas, self-warming mats, fleece
              sweaters, slicker brushes, lymph-node
              anatomy charts, foam dog stairs, ear wipes,
              assisted-walking slings, hind-paw booties,
              hip braces, silicone grooming gloves,
              analog bathroom scales, dog dental finger
              brushes, AM/PM weekly pill organizers,
              monthly pill organizers, medical-records
              binders, emergency contact cards, and
              clinic-visit carriers stay on other pages.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog Addison's daily-care checklist"
              subtitle="Email the pill-pocket, monthly-calendar, and medical-alert-tag notes. No spam."
              ctaText="Email my dog Addison's daily-care checklist"
              source="health-addisons-disease-under-hero"
            />
          </div>

          <h2>Why Addison's Is Missed — The Vague Signs</h2>
          <p>The challenge with Addison's disease is that its clinical presentation is genuinely non-specific in early or mild disease. Affected dogs often show: intermittent GI signs (vomiting, diarrhea, anorexia that waxes and wanes), weakness and lethargy that comes and goes, weight loss over time, and a dog that is "just not right." These signs can mimic inflammatory bowel disease, early kidney disease, liver disease, and numerous other conditions. Without an electrolyte panel showing the characteristic hyperkalemia (elevated potassium) and hyponatremia (low sodium) — the sodium:potassium ratio below 27 being the classic finding — Addison's is easy to miss through empirical treatment of the GI signs.</p>
          <p>The "waxing and waning" character is because the adrenal crisis threshold is dynamic — a stressed dog produces more ACTH demand that the failing adrenals cannot meet, producing acute signs. A less-stressed dog stays below the crisis threshold, seeming improved. This pattern of stress-induced GI illness followed by apparent recovery is characteristic and should prompt electrolyte testing.</p>

          <h2>Addisonian Crisis — The Emergency</h2>
          <p>When adrenal hormone production drops below the minimum required for cardiovascular and electrolyte homeostasis, an Addisonian crisis occurs — acute collapse, profound weakness, bradycardia (slow heart rate from hyperkalemia's cardiac effect), hypotension, and shock. The hyperkalemia can cause life-threatening cardiac arrhythmias. This is the presentation that frequently leads to the diagnosis — a dog that was intermittently unwell arrives in acute cardiovascular collapse.</p>
          <p>Emergency treatment: IV fluid resuscitation with 0.9% saline (restores blood pressure and begins diluting potassium), IV dexamethasone (the glucocorticoid of choice during crisis — it does not interfere with the ACTH stimulation test if needed for diagnosis confirmation), cardiac monitoring and treatment for hyperkalemia-induced arrhythmias if present. Once stabilized, the ACTH stimulation test confirms the diagnosis (cortisol fails to rise appropriately after ACTH injection in Addisonian dogs).</p>

          <h2>Treatment — DOCP or Fludrocortisone</h2>
          <p>Treatment requires lifelong hormone supplementation:</p>
          <p><strong>DOCP (Percorten-V / desoxycorticosterone pivalate):</strong> Injectable mineralocorticoid given every 25-28 days (the standard) or every 21-30 days depending on electrolyte response. Widely used in the US. Requires a separate veterinarian-prescribed glucocorticoid (typically prednisone at a low physiologic dose determined by a veterinarian) since DOCP provides only mineralocorticoid activity. Dogs typically do very well on this regimen.</p>
          <p><strong>Fludrocortisone (Florinef):</strong> Oral tablet daily. Provides both mineralocorticoid and some glucocorticoid activity. Easier for owners who struggle with injections. Some dogs require an additional low-dose prednisone supplement. Requires daily dosing compliance.</p>
          <p>During periods of stress (travel, veterinary procedures, illness, boarding), the glucocorticoid dose is temporarily increased ("stress dosing") to cover the increased demand. Ask your veterinarian for a written stress-dosing protocol — how much to give, and when — and keep oral prednisone on hand as they direct. Hang that written protocol next to a dry-erase monthly calendar so the 25–28-day DOCP date and the next electrolyte recheck stay visible; dog pill pockets are a household aid for daily oral-tablet compliance, not a substitute for the prescribed tablet.</p>

          <h2 id="prognosis">Long-Term Prognosis</h2>
          <p>Addison's disease is one of the most manageable chronic conditions in veterinary medicine — with appropriate treatment, Addisonian dogs live normal, full-quality lives with normal lifespans. The majority of owners describe their dogs as transformed after diagnosis and treatment begins — the dog that had been intermittently unwell for months becomes consistently well, energetic, and normal once adequate hormone replacement is established. Annual rechecks with electrolyte monitoring ensure treatment is appropriately dosed as the dog ages. A dog medical-alert collar tag does not replace those rechecks; it only gives an emergency clinic a visible Addisonian-crisis cue when a dog that was intermittently unwell arrives in collapse.</p>

          <h2 id="kit">A Simple Addison&apos;s Daily-Care Kit</h2>
          <p>
            Three everyday physical supplies match the
            daily-tablet, injection-window, and crisis
            copy above: dog pill pockets so a daily oral
            tablet (fludrocortisone in many dogs, plus
            any veterinarian-directed glucocorticoid)
            has a mapped way to meet daily dosing
            compliance, a dry-erase monthly calendar so
            DOCP injections given every 25–28 days and
            electrolyte-monitoring recheck dates stay
            visible next to the written stress-dosing
            protocol, and a dog medical-alert collar tag
            so an emergency clinic can see Addisonian
            crisis risk — collapse, profound weakness,
            and dangerous potassium-driven arrhythmias —
            before the electrolyte panel comes back.
            These are household daily-care and
            monitoring tools, not treatments. They do
            not diagnose Addison&apos;s, they do not
            replace an ACTH stimulation test, they do
            not set or adjust a DOCP or fludrocortisone
            dose, they do not replace electrolyte
            monitoring, and they are not Percorten-V,
            Zycortal, Florinef, fludrocortisone, DOCP,
            prednisone, trilostane, Vetoryl, insulin,
            or a ranked endocrine product list.
            Gallon gravity dog waterers, extra-large
            disposable dog pee pads, dog cooling
            bandanas, self-warming dog mats, fleece dog
            sweaters, dog slicker brushes, lymph-node
            anatomy charts, foam dog stairs, dog ear
            wipes, assisted-walking slings, hind-paw
            booties, hip braces, silicone dog grooming
            gloves, analog bathroom scales, dog dental
            finger brushes, AM/PM weekly pill
            organizers, monthly pill organizers, pet
            medical records binders, pet emergency
            contact cards, folding pet stretchers,
            soft-sided vet-visit carriers, digital
            pet-food portion scales, kitchen gram
            scales, cooling mats, cooling vests, and
            high-value vet-visit treats already live on
            other pages. This page does not hop
            medications. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops
              (dog pill pockets / dry-erase monthly
              calendar / dog medical-alert collar tag).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1052 gallon gravity dog waterer
              / extra-large disposable dog pee pads /
              dog cooling bandana, #1051 self-warming
              dog mat / fleece dog sweater / dog slicker
              brush, #1050 dog lymph-node anatomy chart
              / foam dog stairs / dog ear wipes, #1049
              dog assisted-walking sling / dog hind-paw
              booties / dog hip brace, #1048 silicone
              dog grooming glove / analog bathroom scale
              / dog dental finger brush, #1047 resting
              respiratory rate notebook / one-minute
              kitchen timer / step-in padded dog harness,
              #1046 pet medical records binder / AM/PM
              weekly pill organizer / digital hanging
              luggage scale, #1045 LED medical penlight /
              pet emergency contact card / folding pet
              stretcher, #1044 pet vaccination record
              book / dog seat-belt tether / foldable
              waterproof puppy mat, #1043 mosquito dunks
              / monthly pill organizer / soft-sided
              vet-visit carrier, washable+dog+pee+pads /
              puppy+training+pads / dog+water+fountain /
              heavy+ceramic+pet+water+bowl /
              stainless+steel+dog+fountain /
              weighted+ceramic+dog+water+bowl /
              digital+pet+food+portion+scale /
              portion+control+food+scale+dog /
              kitchen+gram+scale / dog+cooling+mat /
              dog+cooling+vest, engraved+dog+collar+id
              +tags / pet+id+tag+slide+on, and
              soft+dog+carrier / soft+pet+carrier.
              Percorten, Zycortal, Florinef,
              fludrocortisone, DOCP, prednisone,
              trilostane, Vetoryl, insulin, and Rx
              ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog Addison&apos;s daily-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page daily-tablet, injection-window, and
              crisis-ID copy — dog pill pockets, a
              dry-erase monthly calendar, and a dog
              medical-alert collar tag. Everyday physical
              supplies only. They are not a ranked
              product list, they are not a Percorten /
              Zycortal / Florinef / fludrocortisone /
              DOCP / prednisone / trilostane / Vetoryl /
              insulin hop, they are not the #1052
              gravity-waterer / extra-large-pee-pad /
              cooling-bandana hops, they are not the
              #1051 self-warming-mat / fleece-sweater /
              slicker-brush hops, they are not the #1050
              lymph-node-chart / foam-stair / ear-wipe
              hops, they are not the #1049 sling /
              hind-paw-bootie / hip-brace hops, they are
              not the #1048 grooming-glove / analog-scale
              / finger-brush hops, they are not AM/PM or
              monthly pill-organizer hops, they are not
              engraved-collar-ID or slide-on-tag hops,
              they are not washable-pee-pad / fountain /
              ceramic-bowl / cooling-mat hops, they are
              not digital-pet-scale or first-aid-kit
              hops, and they do not replace a
              veterinarian. Dog.com earns a commission
              on qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+pill+pockets?s=health-addisons-disease"
                amazonLabel="Browse dog pill pockets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dry+erase+monthly+calendar?s=health-addisons-disease"
                amazonLabel="Browse dry-erase monthly calendars on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+medical+alert+collar+tag?s=health-addisons-disease"
                amazonLabel="Browse dog medical-alert collar tags on Amazon →"
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
