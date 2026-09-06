import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, CrossPortfolioCard, RelatedLinks, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'French Bulldog Health — BOAS, IVDD & Skin Conditions | Vets.co', description: 'French Bulldogs have the highest veterinary costs of any dog breed. This guide explains BOAS surgery, IVDD risk, skin fold management.', path: '/breeds/french-bulldog-health', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'French Bulldog Health — Owner Guide', description: 'BOAS, IVDD, skin conditions, and heat risk in French Bulldogs from published veterinary sources.', url: 'https://vets.co/breeds/french-bulldog-health', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const medicalSchema = buildMedicalWebPageSchema({
  name: 'French Bulldog Health',
  description: 'BOAS, IVDD, and heat stroke risk in French Bulldogs.',
  url: 'https://vets.co/breeds/french-bulldog-health',
  authorName: 'Vets.co Editorial',
  lastReviewed: '2026-06-11',
})

const FAQS = [
  {
    question: 'Why does my French Bulldog snore and breathe so loudly?',
    answer:
      'Noisy breathing at rest and snoring are core signs of BOAS — brachycephalic obstructive airway syndrome, the anatomical consequence of breeding for extreme flat-faced features. Stenotic nares, an elongated soft palate, a hypoplastic trachea, and everted laryngeal saccules collectively obstruct airflow, and most French Bulldogs have some degree of BOAS. Many live in a state of chronic respiratory compromise that owners normalize because it has always been present. A BOAS grading assessment by a specialist is worth discussing with your veterinarian.',
  },
  {
    question: 'Does my French Bulldog need BOAS surgery?',
    answer:
      'That depends on the BOAS grade (0–III), assigned by a specialist assessment. For Grade II–III dogs, surgical correction — nostril widening, soft palate shortening, saccule removal — is strongly worth considering, and surgery before age 2 produces the best outcomes because the tissues have undergone less secondary remodeling. Weight management is also critical, since every pound of extra weight makes breathing harder. Discuss a grading assessment with your veterinarian or a soft tissue surgery specialist.',
  },
  {
    question: 'What temperature is too hot for a French Bulldog?',
    answer:
      'French Bulldogs cannot thermoregulate effectively because BOAS impairs panting, the primary canine cooling mechanism — heat stroke can occur at ambient temperatures where other breeds are comfortable. Limit outdoor time in temperatures above 70°F, particularly if humid; walk in early morning or after sunset in summer; and never leave a Frenchie in a car, even briefly. If heat stroke is suspected, wet the dog with cool (not cold) water, use a fan, and get to an emergency vet immediately.',
  },
  {
    question: 'What are the signs of IVDD in a French Bulldog?',
    answer:
      'Sudden pain (crying out, hunched posture, reluctance to move), weakness or a wobbly gait in the hindlimbs, dragging rear legs, and loss of bladder or bowel control — the last of these is an emergency. Surgical decompression within 24 hours of onset gives the best neurological recovery prognosis, so a Frenchie that loses hind limb function needs an emergency vet immediately, not a wait-and-see approach.',
  },
  {
    question: 'When should I get pet insurance for a French Bulldog?',
    answer:
      'Before any symptoms develop, before the first veterinary visit. Several insurers have breed exclusions for BOAS-related conditions if the dog is enrolled after symptoms appear, and BOAS surgery ($2,500–5,000) and IVDD decompression ($5,000–10,000) are common outcomes in this breed within the first 5 years — not rare worst-case scenarios.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })
const combinedSchemaAll = combineSchemas(schema, medicalSchema, faqSchema)

export default function VetsFrenchBulldogHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      siteId="vets-co"
      contentType="breed"
      hero={{ title: 'French Bulldog Health — A Veterinarian\'s Perspective', subtitle: 'French Bulldogs have the highest per-dog veterinary costs of any breed. The conditions are largely predictable, many are manageable, and some are preventable with early intervention. Here\'s what every Frenchie owner needs to know.', category: 'Breed Health Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '10 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breed Guides' }, { name: 'French Bulldog Health', href: '/breeds/french-bulldog-health' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Find a Specialist', href: '/find-a-vet' }, { label: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
        <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance every Tuesday." source="breeds-french-bulldog" />
        <CrossPortfolioCard currentSite="vets-co" contentType="breed" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the French Bulldog health checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            French Bulldog health checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the prep notes that match the
            BOAS, IVDD, and heat-risk copy on this
            page — four-tab dividers so BOAS
            grades 0–III stay four labeled stacks,
            an analog outdoor thermometer so the
            70°F outdoor limit stays a written
            cutoff, and a weekly checklist notepad
            so fold-cleaning two-to-three times a
            week stays a dated list. Educational
            checklist, not a diagnosis, not a
            substitute for veterinary care, and
            not a steno-pad, kitchen-timer, or
            file-label hop. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="French Bulldog health checklist"
            subtitle="Email the divider, thermometer, and checklist-notepad notes. No spam."
            ctaText="Email my French Bulldog health checklist"
            source="breeds-french-bulldog-health-under-hero"
          />
        </div>

        <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

        <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.18)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>Insurance Note</div>
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>French Bulldogs are the most expensive breed to insure — and the one that most needs it. Several insurers have breed exclusions for BOAS-related conditions if enrolled after symptoms appear. Enroll before any symptoms develop, before the first veterinary visit. Do not delay.</p>
        </div>

        <BreedHealthCard name="BOAS — Brachycephalic Obstructive Airway Syndrome" riskLevel="very-high" description="BOAS is not a disease — it is the anatomical consequence of breeding for extreme flat-faced features. Stenotic nares (narrow nostrils), elongated soft palate, hypoplastic trachea, and everted laryngeal saccules collectively obstruct airflow. Most French Bulldogs have some degree of BOAS. Many are living in a state of chronic respiratory compromise that owners normalize because it has always been present." signs={['Noisy breathing at rest', 'Snoring', 'Exercise intolerance — tires quickly, heavy breathing after minimal exertion', 'Blue-tinged gums during exertion (emergency)', 'Retching, gagging, vomiting regurgitated food']} management="BOAS grading assessment (BOAS grade 0–III) by a specialist. Grade II–III: strongly consider surgical correction (nostril widening, soft palate shortening, saccule removal). Surgery before 2 years produces the best outcomes. Weight management is also critical — every pound of extra weight makes breathing harder. Never allow a French Bulldog to exercise in heat." guideHref="/find-a-vet" guideLabel="Find a soft tissue surgery specialist →" />

        <BreedHealthCard name="IVDD — Intervertebral Disc Disease" riskLevel="high" description="Chondrodystrophic breeds (including French Bulldogs) have abnormally formed spinal discs that degenerate early and are prone to herniation. IVDD causes sudden, severe spinal cord compression. Severity ranges from pain to paralysis. Emergency surgical decompression within 24 hours of onset gives the best neurological recovery prognosis." signs={['Sudden pain — crying out, hunched posture, reluctance to move', 'Weakness or wobbly gait in hindlimbs', 'Dragging rear legs', 'Loss of bladder or bowel control — emergency']} management="Avoid high-impact activities (jumping off furniture, stairs) particularly in young dogs. Ramps for furniture access. Surgical decompression within 24 hours of onset for best outcomes — this is a same-day emergency. If your Frenchie loses hind limb function: emergency vet immediately." />

        <BreedHealthCard name="Skin Fold Dermatitis" riskLevel="high" description="Skin folds — facial, tail, vulvar, nasal — trap moisture, debris, and bacteria, producing chronic skin infections. These are manageable but require regular maintenance or they become painful and seriously infected." signs={['Redness, odor, or discharge within skin folds', 'Rubbing at face', 'Tail area redness', 'Yeast or bacterial smell from folds']} management="Clean skin folds 2–3 times weekly with gentle wipes (unscented, antifungal). Dry thoroughly — moisture drives infection. Chronic severe fold dermatitis may require surgical fold removal. Check folds at every veterinary visit." />

        <BreedHealthCard name="Heat Stroke" riskLevel="very-high" description="French Bulldogs cannot thermoregulate effectively. BOAS restricts airflow — panting (the primary canine cooling mechanism) is impaired in proportion to the severity of airway compromise. Heat stroke can occur at ambient temperatures where other breeds are comfortable. This is a genuine life-threatening emergency." signs={['Excessive panting or labored breathing', 'Drooling, bright red gums', 'Glassy eyes, disorientation', 'Collapse (late sign — critical emergency)']} management="Never leave in a car, even briefly. Limit outdoor time in temperatures above 70°F, particularly if humid. Walk in early morning or after sunset in summer. If heat stroke suspected: wet dog with cool (not cold) water, fan, get to emergency vet immediately. Do not wait." />

        <h2>The Surgical Decision — My Honest Advice</h2>
        <DropCap>Most French Bulldog owners are advised to at minimum have their dog BOAS-graded by a soft tissue surgeon. Many dogs with Grade II–III BOAS are significantly more comfortable and have longer, healthier lives after surgical correction. Too many owners believe the noisy breathing is &quot;just how Frenchies are&quot; — it is, but it doesn&apos;t mean it can&apos;t be improved.</DropCap>

        <CalloutBox variant="evidence" title="Operate before age 2 when possible">
          Surgical correction of stenotic nares, elongated soft palate, and everted saccules produces the best outcomes when performed before age 2 — the soft palate and surrounding tissues have undergone less secondary remodeling. If your Frenchie is still young and is BOAS Grade II–III, the assessment is worth scheduling sooner rather than later.
        </CalloutBox>
        <p>Surgical correction before 2 years produces the best outcomes because the soft palate and other tissues haven&apos;t undergone as much secondary remodeling. Four-tab dividers are how those BOAS grades 0–III stay four labeled stacks after the specialist assessment — they are not 3-tab dividers (that live on what-pet-insurance-covers), not removable page flags (that live on what-pet-insurance-covers), and not self-adhesive file-folder labels (that live on german-shepherd-health). If your Frenchie is still young: get the assessment now.</p>
        <p>Limit outdoor time in temperatures above 70°F, particularly if humid, and walk in early morning or after sunset in summer. An analog outdoor thermometer is how that 70°F outdoor limit stays a written cutoff — it is not a mechanical kitchen timer (that lives on german-shepherd-health), not a 48-hour digital kitchen timer (that lives on when-to-go-to-the-vet), and not a dog-com cooling-mat or cooling-vest hop. Clean skin folds 2–3 times weekly and dry thoroughly. A weekly checklist notepad is how that fold-cleaning cadence stays a dated list — it is not a hardcover weekly appointment planner, not a monthly desk pad calendar (that lives on when-to-enroll), and not an 18-month wall calendar (that lives on golden-retriever-health).</p>

        <h2>Insurance — Non-Negotiable for This Breed</h2>
        <p>BOAS surgery: $2,500–5,000. IVDD decompression: $5,000–10,000. These are not rare worst-case scenarios — they are common outcomes in this breed within the first 5 years. Insurance with no breed exclusions for brachycephalic conditions (Trupanion, Healthy Paws) and enrollment before symptoms appear is the difference between being able to treat these conditions and facing impossible decisions. See the <a href="/reviews/best-pet-insurance">full insurance comparison →</a></p>

        <h2 id="kit">French-bulldog-health kit</h2>
        <p>
          Everyday physical supplies that match the
          BOAS, IVDD, and heat-risk copy on this
          page — four-tab dividers so BOAS grades
          0–III stay four labeled stacks, an analog
          outdoor thermometer so the 70°F outdoor
          limit stays a written cutoff, and a
          weekly checklist notepad so fold-cleaning
          two-to-three times a week stays a dated
          list. These are educational
          French-bulldog-health / paperwork tools,
          not a ranked product list, not a
          substitute for veterinary care, and not
          a treatment. Top-bound steno pads,
          mechanical kitchen timers, and
          self-adhesive file-folder labels already
          live on german-shepherd-health. Dot-grid
          notebooks, paint-chip sample cards, and
          18-month wall calendars already live on
          golden-retriever-health. This page does
          not hop cooling mats, cooling vests,
          medications, or insurance brands as
          Amazon searches. This page does not
          claim hands-on testing.
        </p>

        <AffiliateDisclosure variant="inline" siteId="vets-co" />

        {/* Money path — live amazon-brand search hops
            (four-tab dividers /
            analog outdoor thermometer /
            weekly checklist notepad).
            These are educational
            French-bulldog-health / paperwork
            tools, not a ranked product list, not
            a substitute for veterinary care, no
            Rx / first-aid kit / thermometer /
            carrier / insurance-brand ASIN hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Category searches only —
            unused vs #1177
            top+bound+steno+pad /
            mechanical+kitchen+timer /
            self+adhesive+file+folder+labels,
            #1176
            dot+grid+notebook /
            paint+chip+sample+cards /
            18+month+wall+calendar,
            dog · french-bulldog-health
            dog+cooling+mat /
            dog+cooling+vest. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the French-bulldog-health kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page BOAS, IVDD, and heat-risk copy
            — four-tab dividers, an analog outdoor
            thermometer, and a weekly checklist
            notepad. Educational
            French-bulldog-health / paperwork
            tools only. They are not a ranked
            product list, they are not a
            substitute for veterinary care, they
            are not a #1177 steno-pad / kitchen-
            timer / file-label hop, they are not a
            dog-com Frenchie cooling hop, they are
            not a financing-brand or insurance-
            brand hop, and they do not replace a
            veterinarian. Vets.co earns a
            commission on qualifying purchases at
            no extra cost to you. Empty Chewy
            buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/four+tab+dividers?s=breeds-french-bulldog-health"
              amazonLabel="Browse four-tab dividers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/analog+outdoor+thermometer?s=breeds-french-bulldog-health"
              amazonLabel="Browse analog outdoor thermometers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/weekly+checklist+notepad?s=breeds-french-bulldog-health"
              amazonLabel="Browse weekly checklist notepads on Amazon →"
            />
          </div>
        </div>

        <h2>FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          allowMultiple
        />
      </div>
    </ArticleLayout>
    </>
  )
}
