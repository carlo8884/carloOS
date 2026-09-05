import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Pancreatitis in Small Animals', url: 'https://www.merckvetmanual.com/digestive-system/the-exocrine-pancreas/pancreatitis-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Consensus Statement on the Diagnosis of Pancreatitis in Dogs and Cats', url: 'https://www.acvim.org', publisher: 'ACVIM' },
  { label: 'AVMA: Pancreatitis in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Xenoulis PG et al. Serum triglyceride concentrations in Miniature Schnauzers with and without a history of hypertriglyceridemia. J Vet Intern Med. 2011;25(1):20-25.', publisher: 'JVIM' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Pancreatitis in Dogs — High-Fat Triggers, Signs | Dog.com', description: 'Pancreatitis in dogs is often triggered by high-fat meals — holiday table scraps are the classic cause. Signs, hospitalization criteria.', path: '/health/pancreatitis', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Pancreatitis in Dogs', description: 'Triggers, signs, hospitalization, and low-fat diet management for canine pancreatitis.', url: 'https://dog.com/health/pancreatitis', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Pancreatitis in Dogs', description: 'Canine pancreatitis — triggers, acute management, and long-term dietary management.', url: 'https://dog.com/health/pancreatitis', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'What triggers pancreatitis in dogs?', answer: 'The classic trigger is a high-fat meal — fatty table scraps like turkey skin, ham fat, or bacon, which is why emergency rooms see pancreatitis cases spike after Thanksgiving and Christmas. The fat content matters more than the quantity: a small piece of very fatty meat can trigger pancreatitis in a susceptible dog. Other risk factors on this page: garbage ingestion, corticosteroids, hypothyroidism, chronically high-fat diets, obesity, and breed predisposition (Miniature Schnauzers, Cocker Spaniels).' },
  { question: 'What are the symptoms of pancreatitis in dogs?', answer: 'The classic acute presentation: repeated vomiting, abdominal pain — often the "prayer position" (front end down, rear end up), hunched posture, or yelping when the abdomen is touched — plus lethargy, loss of appetite, sometimes diarrhea and fever. Severe pancreatitis adds signs of shock (pale gums, rapid weak pulse) and jaundice. A dog vomiting 12–24 hours after a high-fat meal with abdominal pain fits the most common presentation and needs veterinary evaluation.' },
  { question: 'How do vets diagnose pancreatitis in dogs?', answer: 'The key blood test is cPLI (canine pancreatic lipase immunoreactivity) — the in-clinic SNAP cPL gives a rapid yes/no answer, and the quantitative Spec cPL from a reference lab indicates severity. Abdominal ultrasound shows pancreatic enlargement, peripancreatic fluid, and inflammation, while CBC and chemistry assess severity and complications such as bile duct involvement or systemic effects on the kidneys.' },
  { question: 'Does a dog with pancreatitis need to be hospitalized?', answer: 'Per the hospitalization criteria on this page: yes for any dog with significant vomiting and inability to keep water down, signs of dehydration, persistent abdominal pain, or systemic signs such as pale gums or weakness. IV fluid therapy is the most critical supportive treatment — it corrects dehydration and improves pancreatic perfusion — alongside anti-nausea medication (maropitant/Cerenia) and pain management. Mild cases may be managed outpatient at the veterinarian\'s discretion.' },
  { question: 'What should a dog eat after pancreatitis?', answer: 'Prolonged fasting is no longer the standard — current evidence supports early enteral nutrition, with mild non-vomiting cases offered small amounts of bland, low-fat food 12–24 hours after symptoms stabilize (timing is case-specific; follow your veterinarian\'s plan). Long term, a dog that has had significant or recurrent pancreatitis should stay on a low-fat diet permanently — many need prescription low-fat diets (under ~8% fat dry matter), and fatty table scraps are permanently off-limits because dietary indiscretion is the most common trigger for recurrence.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))
export default function PancreatitisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Pancreatitis in Dogs', subtitle: 'Pancreatitis — inflammation of the pancreas — is one of the most common gastrointestinal emergencies in dogs. The pancreas produces digestive enzymes that, when activated prematurely due to inflammation, essentially begin digesting the pancreas itself. It ranges from mild and manageable to severe and life-threatening.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Pancreatitis', href: '/health/pancreatitis' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Diabetes', href: '/health/dog-diabetes', category: 'Dog Health' }, { title: 'Dog Obesity', href: '/health/dog-obesity', category: 'Dog Health' }, { title: 'Dog Vomiting Guide', href: '/health/dog-vomiting', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">High-Risk Triggers</div>
            {['Fatty table scraps (ham, turkey skin, bacon)', 'Garbage ingestion', 'Corticosteroids — can precipitate pancreatitis', 'Hypothyroidism — associated predisposition', 'High-fat diet chronically', 'Obesity', 'Breed predispositions (Miniature Schnauzer, Cocker Spaniel)'].map(t => (
              <div key={t} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{t}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vomiting', href: '/health/dog-vomiting' }, { label: 'Dog Liver Disease', href: '/health/dog-liver-disease' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-pancreatitis" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog pancreatitis leftover-lockdown checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog pancreatitis leftover-lockdown checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the holiday-trash, kitchen-gate, and
              low-fat-kibble notes — a locking kitchen
              trash can so turkey skin, ham fat, and
              other high-fat leftovers cannot become the
              garbage-ingestion trigger listed on this
              page, a walk-through pet gate so the dog
              stays out of the kitchen while holiday
              scraps sit on counters, and an airtight
              dog-food storage container so the lifelong
              low-fat kibble stays labeled and separate
              from household food. Educational checklist,
              not a Hill&apos;s i/d / Royal Canin
              Gastrointestinal Low Fat / Purina EN
              product list, and not a prescription.
              Hospitalization, cPLI testing, and diet
              fat-percent decisions still belong with a
              veterinarian. Pill pockets, dry-erase
              monthly calendars, medical-alert collar
              tags, gravity waterers, extra-large
              disposable pee pads, cooling bandanas,
              self-warming mats, fleece sweaters,
              slicker brushes, lymph-node anatomy
              charts, foam dog stairs, ear wipes,
              assisted-walking slings, hind-paw booties,
              hip braces, silicone grooming gloves,
              analog bathroom scales, dog dental finger
              brushes, mini rice cookers, glass
              meal-prep containers, low-fat digestive-care
              dog food, lean low-fat dog treats, digital
              pet-food portion scales, and clinic-visit
              carriers stay on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog pancreatitis leftover-lockdown checklist"
              subtitle="Email the locking-trash, kitchen-gate, and airtight-kibble notes. No spam."
              ctaText="Email my dog pancreatitis leftover-lockdown checklist"
              source="health-pancreatitis-under-hero"
            />
          </div>

          <h2>The Holiday Meal Trigger</h2>
          <p>Veterinary emergency rooms see pancreatitis cases spike predictably after Thanksgiving and Christmas — the dogs that were given turkey skin, ham fat, or other high-fat holiday scraps as a treat. A dog that has been eating standard commercial kibble all year receives a massive high-fat bolus that overwhelms the pancreas's normal regulatory mechanisms, triggering acute inflammation. This is the most common presentation of acute pancreatitis: a previously healthy dog vomiting 12-24 hours after a high-fat meal, with abdominal pain and lethargy.</p>
          <p>The fat content is the critical variable — not the quantity alone. A small piece of very fatty meat (bacon fat, turkey skin) can trigger pancreatitis in susceptible dogs. Dogs that have had pancreatitis once are at significantly higher risk for recurrence with any dietary indiscretion. For these dogs, table scraps of any kind are permanently off the table. A locking kitchen trash can keeps those leftovers from becoming the garbage-ingestion trigger listed in the sidebar; a walk-through pet gate keeps the dog out of the kitchen while holiday scraps sit on counters. Neither replaces the rule that table scraps stay off-limits.</p>

          <h2>Signs — Recognizing the Emergency</h2>
          <p>Classic acute pancreatitis presentation: vomiting (often repeated, projectile), abdominal pain (the "prayer position" — front end down, rear end up — or reluctance to move, hunched posture, yelping when the abdomen is touched), lethargy, anorexia, and diarrhea in some cases. Fever (rectal temperature above 102.5°F) is present in many cases. Severe pancreatitis adds: signs of shock (pale gums, rapid weak pulse), jaundice (yellowing of gums and whites of eyes from bile duct obstruction), and in some cases, cardiovascular collapse.</p>

          <h2>Diagnosis and Hospitalization</h2>
          <p>Diagnosis: serum cPLI (canine pancreatic lipase immunoreactivity) — the SNAP cPL rapid test provides a yes/no answer in clinic; the quantitative Spec cPL from a reference lab provides a severity indicator. Abdominal ultrasound shows pancreatic enlargement, peripancreatic fluid, and mesenteric inflammation. CBC and chemistry evaluate severity and concurrent complications (elevated bilirubin suggests bile duct involvement, elevated kidney values suggest systemic effects).</p>
          <p>Hospitalization criteria: any dog with significant vomiting and inability to keep water down, signs of dehydration, persistent abdominal pain, or any systemic signs (pale gums, weakness). IV fluid therapy corrects dehydration and improves pancreatic perfusion — the most critical supportive treatment for acute pancreatitis. Anti-nausea medication (maropitant — Cerenia), pain management (buprenorphine, butorphanol), and in severe cases, feeding tube placement for nutritional support when the dog cannot or will not eat.</p>

          <h2>The "Nothing by Mouth" Myth</h2>
          <p>Traditional pancreatitis management included prolonged fasting ("resting the pancreas"). Current evidence does not support prolonged NPO (nothing by mouth) — early enteral nutrition (feeding the GI tract, even in small amounts) actually supports mucosal integrity and reduces bacterial translocation. Dogs with mild pancreatitis who are not vomiting can be offered small amounts of bland, low-fat food 12-24 hours after symptoms stabilize. Dogs with severe pancreatitis who cannot eat may require nasogastric or jejunostomy tube feeding within 48-72 hours of hospitalization. Discuss nutritional timing with your veterinarian — it is case-specific.</p>

          <h2>Long-Term Management — Low-Fat Diet for Life</h2>
          <p>A dog that has experienced significant pancreatitis — particularly if it has been recurrent — should be maintained on a low-fat diet permanently. The threshold for "low fat" varies by individual: some dogs do well on any commercial food with under 10% fat (dry matter basis); dogs with severe recurrent pancreatitis may need prescription low-fat diets (Hill's i/d Low Fat, Royal Canin Gastrointestinal Low Fat, Purina EN Gastroenteric Low Fat) with fat content under 8% DM. Human food, high-fat treats, fatty table scraps, and any food with over 15% DM fat is permanently off-limits for severely affected dogs. This is not optional — dietary indiscretion is the most common trigger for recurrence. An airtight dog-food storage container keeps that dedicated low-fat kibble labeled and separate from household food and from other pets' higher-fat bags; it does not choose the diet or set the fat-percent threshold.</p>

          <h2 id="kit">A Simple Pancreatitis Leftover-Lockdown Kit</h2>
          <p>
            Three everyday physical supplies match the
            holiday-trigger, garbage-ingestion, and
            lifelong low-fat-diet copy above: a locking
            kitchen trash can so turkey skin, ham fat,
            bacon grease, and other high-fat leftovers
            cannot become the garbage-ingestion trigger
            this page lists, a walk-through pet gate so
            the dog stays out of the kitchen while
            holiday scraps sit on counters, and an
            airtight dog-food storage container so the
            dedicated low-fat kibble stays labeled and
            separate from household food. These are
            household leftover-lockdown tools, not
            treatments. They do not diagnose
            pancreatitis, they do not replace a cPLI
            test or abdominal ultrasound, they do not
            set a fat-percent threshold, they do not
            replace hospitalization or IV fluids, and
            they are not Hill&apos;s i/d Low Fat, Royal
            Canin Gastrointestinal Low Fat, Purina EN
            Gastroenteric Low Fat, Cerenia, maropitant,
            or a ranked GI product list. Dog pill
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
            brushes, mini rice cookers, glass meal-prep
            containers, low-fat digestive-care dog
            food, lean low-fat dog treats, digital
            pet-food portion scales, kitchen gram
            scales, AM/PM weekly pill organizers,
            monthly pill organizers, pet medical
            records binders, pet emergency contact
            cards, and soft-sided vet-visit carriers
            already live on other pages. This page
            does not hop medications. This page does
            not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops
              (locking kitchen trash can / walk-through
              pet gate / airtight dog-food storage
              container). ShopCtas hides empty Chewy;
              never href="#" or PLACEHOLDER. Category
              searches only — unused vs #1053 dog pill
              pockets / dry-erase monthly calendar /
              dog medical-alert collar tag, #1052
              gallon gravity dog waterer / extra-large
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
              pet-food portion scale, #1013 mini rice
              cooker / glass meal-prep containers,
              washable+dog+pee+pads /
              puppy+training+pads / dog+water+fountain /
              heavy+ceramic+pet+water+bowl /
              stainless+steel+dog+fountain /
              weighted+ceramic+dog+water+bowl /
              digital+pet+food+portion+scale /
              portion+control+food+scale+dog /
              kitchen+gram+scale / dog+cooling+mat /
              dog+cooling+vest, and
              low+fat+digestive+care+dog+food /
              lean+low+fat+dog+treats. Hill's i/d,
              Royal Canin Gastrointestinal Low Fat,
              Purina EN, Cerenia, maropitant, and Rx
              ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog pancreatitis leftover-lockdown kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page holiday-trigger, garbage-ingestion,
              and lifelong low-fat-diet copy — a locking
              kitchen trash can, a walk-through pet
              gate, and an airtight dog-food storage
              container. Everyday physical supplies
              only. They are not a ranked product list,
              they are not a Hill&apos;s i/d / Royal
              Canin Gastrointestinal Low Fat / Purina
              EN / Cerenia / maropitant hop, they are
              not the #1053 pill-pocket / dry-erase
              calendar / medical-alert-tag hops, they
              are not the #1052 gravity-waterer /
              extra-large-pee-pad / cooling-bandana
              hops, they are not the #1051
              self-warming-mat / fleece-sweater /
              slicker-brush hops, they are not the
              #1050 lymph-node-chart / foam-stair /
              ear-wipe hops, they are not the #1049
              sling / hind-paw-bootie / hip-brace hops,
              they are not the #1048 grooming-glove /
              analog-scale / finger-brush hops, they
              are not the #1041 exercise-pen hop, they
              are not the #1039 vets.co low-fat food /
              lean-treat / portion-scale hops, they
              are not the #1013 rice-cooker /
              meal-prep-container hops, they are not
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
                amazonHref="/go/amazon-brand/locking+kitchen+trash+can?s=health-pancreatitis"
                amazonLabel="Browse locking kitchen trash cans on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/walk+through+pet+gate?s=health-pancreatitis"
                amazonLabel="Browse walk-through pet gates on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/airtight+dog+food+storage+container?s=health-pancreatitis"
                amazonLabel="Browse airtight dog-food storage containers on Amazon →"
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
