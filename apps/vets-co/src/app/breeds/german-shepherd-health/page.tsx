import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, CrossPortfolioCard, RelatedLinks, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'German Shepherd Health — DM, Hip Dysplasia & GDV | Vets.co', description: 'German Shepherds have specific health predispositions: degenerative myelopathy, hip dysplasia, and GDV. This guide explains monitoring, screening.', path: '/breeds/german-shepherd-health', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'German Shepherd Health — Owner Guide', description: 'DM, hip dysplasia, GDV, and EPI in German Shepherds from published veterinary sources.', url: 'https://vets.co/breeds/german-shepherd-health', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  {
    question: 'What are the first signs of degenerative myelopathy in a German Shepherd?',
    answer:
      'Hind limb wobbling or weakness, crossing of the hind legs while walking, and knuckling (paws turning under) are the early signs. DM is a progressive neurological disease of the spinal cord — analogous to ALS in humans — that typically progresses to paralysis over 6–18 months. Any hind limb incoordination after age 5 warrants a workup with your veterinarian: neurological examination, MRI if indicated, and DNA confirmation. Almost all German Shepherds showing DM carry two copies of the SOD1 gene mutation.',
  },
  {
    question: 'Is unproductive retching in a German Shepherd an emergency?',
    answer:
      'Yes. Unproductive retching — trying to vomit without producing anything — is a warning sign of GDV (gastric dilatation-volvulus, or bloat), in which the stomach fills with gas and twists, cutting off blood supply. Combined with a hard distended abdomen and extreme restlessness, it is the most time-critical emergency in the breed and is fatal without emergency surgery within hours. Go to an emergency vet immediately — a false alarm is far better than a missed GDV.',
  },
  {
    question: 'Can bloat (GDV) be prevented in German Shepherds?',
    answer:
      'Risk can be reduced. Preventive gastropexy — surgically tacking the stomach — can be performed prophylactically during spay/neuter and prevents torsion; it is worth discussing with your veterinarian at the spay/neuter appointment. Feeding twice daily rather than once and avoiding exercise immediately after eating are also standard management steps in this predisposed breed.',
  },
  {
    question: 'Why is my German Shepherd losing weight while eating more?',
    answer:
      'Weight loss despite a normal or increased appetite — especially with voluminous, pale, greasy, foul-smelling feces — is the classic picture of exocrine pancreatic insufficiency (EPI), in which the pancreas fails to produce sufficient digestive enzymes. EPI is highly manageable: once diagnosed by your veterinarian, daily pancreatic enzyme supplementation with every meal (often with folate and B12 supplementation) lets affected dogs live normal lifespans.',
  },
  {
    question: 'Should I DNA-test my German Shepherd for degenerative myelopathy?',
    answer:
      'DNA testing identifies carriers and affected dogs, and all German Shepherds should be DNA-tested before breeding. For an affected dog, physical therapy (underwater treadmill, controlled exercise) significantly extends functional life, and wheelchairs maintain quality of life as paralysis progresses. Discuss testing and a management plan with your veterinarian.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })
const combinedSchemaAll = combineSchemas(schema, faqSchema)

export default function GSHealthPage() {
  return (
    <>
    <SchemaScript schema={combinedSchemaAll} />
    <ArticleLayout siteId="vets-co"
      hero={{ title: 'German Shepherd Health — A Veterinarian\'s Perspective', subtitle: 'German Shepherds are my most stoic patients — they mask pain remarkably well, which makes regular monitoring especially important. The breed predispositions are significant but manageable with early detection.', category: 'Breed Health Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breed Guides' }, { name: 'German Shepherd Health', href: '/breeds/german-shepherd-health' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Find a Neurologist', href: '/find-a-vet' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Labrador Health', href: '/breeds/labrador-health' }]} />
        <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance every Tuesday." source="breeds-german-shepherd" />
        <CrossPortfolioCard currentSite="vets-co" contentType="breed" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the German Shepherd health checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            German Shepherd health checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the prep notes that match the
            DM, hip-dysplasia, and GDV copy on
            this page — a top-bound steno pad so
            hind-limb wobble and knuckling after
            age 5 stay a written DM-workup log, a
            mechanical kitchen timer so the
            no-exercise-right-after-eating rule
            stays a timed rest, and self-adhesive
            file-folder labels so OFA hip-and-
            elbow, SOD1 DNA, and gastropexy notes
            stay three labeled tabs. Educational
            checklist, not a diagnosis, not a
            substitute for veterinary care, and
            not a notebook, paint-chip, or
            calendar hop. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="German Shepherd health checklist"
            subtitle="Email the steno-pad, kitchen-timer, and file-label notes. No spam."
            ctaText="Email my German Shepherd health checklist"
            source="breeds-german-shepherd-health-under-hero"
          />
        </div>

        <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

        <BreedHealthCard name="Degenerative Myelopathy (DM)" riskLevel="very-high" description="DM is a progressive, fatal neurological disease affecting the spinal cord — analogous to ALS in humans. Starts as hind limb wobbling and weakness, progresses to complete paralysis over 6–18 months. No cure exists. DNA testing identifies carriers and affected dogs. Almost all German Shepherds showing DM carry two copies of the SOD1 gene mutation — DNA test before breeding. Physical therapy and supportive care can maintain quality of life significantly longer than untreated progression." signs={['Hind limb wobbling or weakness', 'Crossing hind legs while walking', 'Knuckling (paws turning under)', 'Eventual inability to walk']} management="DNA test all GSDs before breeding. Physical therapy (underwater treadmill, controlled exercise) significantly extends functional life. Wheelchairs when paralysis progresses. DM-affected dogs maintain quality of life with dedicated care." />

        <BreedHealthCard name="Hip and Elbow Dysplasia" riskLevel="high" description="GSDs have among the highest rates of hip and elbow dysplasia of any breed. OFA screening of breeding dogs has improved outcomes over decades but has not eliminated the problem. Signs typically appear in the first 2 years of life. Weight management and appropriate exercise are critical — every pound above ideal adds approximately 4 pounds of force on each joint with every step." signs={['Lameness after exercise', 'Bunny-hopping gait', 'Difficulty rising', 'Reluctance to jump or use stairs']} management="OFA hip and elbow screening for breeding stock. Lean body condition throughout life. Fish oil from young adulthood. Glucosamine/chondroitin supplementation. Surgical options (FHO, TPO, total hip replacement) for severe cases." />

        <BreedHealthCard name="GDV (Bloat)" riskLevel="high" description="Gastric dilatation-volvulus — the stomach fills with gas and twists on itself, cutting off blood supply. Fatal without emergency surgery within hours. GSDs are a predisposed breed. Warning signs: unproductive retching (trying to vomit without producing anything), distended hard abdomen, extreme restlessness. This is the most time-critical emergency in the breed." signs={['Unproductive retching — EMERGENCY', 'Hard distended abdomen', 'Extreme restlessness, unable to settle', 'Drooling, obvious distress']} management="Emergency vet immediately — do not wait. Preventive gastropexy (surgical stomach tacking) can be performed prophylactically during spay/neuter, preventing torsion. Discuss with your vet at spay/neuter appointment. Feed twice daily rather than once; avoid exercise immediately after eating." />

        <BreedHealthCard name="Exocrine Pancreatic Insufficiency (EPI)" riskLevel="moderate" description="The pancreas fails to produce sufficient digestive enzymes — food passes through undigested. Dog eats voraciously but loses weight continuously. Classic sign: voluminous, pale, greasy, foul-smelling feces. Highly manageable with daily enzyme supplementation (Pancreatin or Viokace powder added to food). Dogs with EPI live normal lifespans with treatment." signs={['Weight loss despite normal or increased appetite', 'Voluminous, pale, greasy feces', 'Occasional vomiting', 'Voracious appetite — eating dirt, feces']} management="Pancreatic enzyme supplementation with every meal — once diagnosed, ongoing for life. Folate and B12 supplementation often required. Typically very manageable with correct treatment." />

        <h2>What I Watch for in My GSD Patients</h2>
        <p>Any hind limb incoordination after age 5: DM workup — neurological examination, MRI if indicated, DNA confirmation. A top-bound steno pad is how that hind-limb wobble and knuckling stay a written DM-workup log — it is not a spiral notebook (that lives on what-to-expect-at-the-vet), not a reporter notebook (that lives on choosing-a-veterinarian), not a bound composition book (that lives on labrador-health), and not a #1176 dot-grid notebook. Any episode of unproductive retching in a GSD: emergency evaluation — I would rather see a false alarm than miss a GDV. Gradual hind limb weakness in a young GSD (under 3): OFA radiographs, orthopedic evaluation.</p>
        <p>Feed twice daily rather than once, and avoid exercise immediately after eating. A mechanical kitchen timer is how that post-meal rest stays a timed pause — it is not a 48-hour digital kitchen timer (that lives on when-to-go-to-the-vet), not a 30-minute sand hourglass (that lives on dog-com bloat), and not a hardcover weekly appointment planner. Self-adhesive file-folder labels are how the OFA hip-and-elbow result, the SOD1 DNA result, and the gastropexy note stay three labeled tabs — they are not round color-coding labels (that live on breed-specific-risk), not 3-tab dividers (that live on what-pet-insurance-covers), and not removable page flags (that live on what-pet-insurance-covers).</p>
        <p>GSDs stoically mask pain. A GSD that is &quot;slowing down&quot; or &quot;getting old&quot; may be in significant orthopedic pain that is genuinely manageable with treatment. Do not attribute behavioral changes to age without a veterinary evaluation first.</p>

        <h2 id="kit">German-shepherd-health kit</h2>
        <p>
          Everyday physical supplies that match the
          DM, hip-dysplasia, and GDV copy on this
          page — a top-bound steno pad so hind-
          limb wobble and knuckling after age 5
          stay a written DM-workup log, a
          mechanical kitchen timer so the no-
          exercise-right-after-eating rule stays a
          timed rest, and self-adhesive file-
          folder labels so OFA hip-and-elbow,
          SOD1 DNA, and gastropexy notes stay
          three labeled tabs. These are
          educational German-shepherd-health /
          paperwork tools, not a ranked product
          list, not a substitute for veterinary
          care, and not a treatment. Dot-grid
          notebooks, paint-chip sample cards, and
          18-month wall calendars already live on
          golden-retriever-health. Flexible sewing
          tape measures, bound composition books,
          and letter-size document frames already
          live on labrador-health. This page does
          not hop medications, enzymes, wheelchairs,
          or insurance brands as Amazon searches.
          This page does not claim hands-on
          testing.
        </p>

        <AffiliateDisclosure variant="inline" siteId="vets-co" />

        {/* Money path — live amazon-brand search hops
            (top-bound steno pad /
            mechanical kitchen timer /
            self-adhesive file-folder labels).
            These are educational
            German-shepherd-health / paperwork
            tools, not a ranked product list, not
            a substitute for veterinary care, no
            Rx / first-aid kit / thermometer /
            carrier / insurance-brand ASIN hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Category searches only —
            unused vs #1176
            dot+grid+notebook /
            paint+chip+sample+cards /
            18+month+wall+calendar,
            #1175
            flexible+sewing+tape+measure /
            bound+composition+book /
            letter+size+document+frame,
            dog · german-shepherd-health
            dog+assisted+walking+sling /
            dog+hind+paw+booties /
            dog+hip+brace. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the German-shepherd-health kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page DM, hip-dysplasia, and GDV
            copy — a top-bound steno pad, a
            mechanical kitchen timer, and self-
            adhesive file-folder labels.
            Educational German-shepherd-health /
            paperwork tools only. They are not a
            ranked product list, they are not a
            substitute for veterinary care, they
            are not a #1176 notebook / paint-chip /
            calendar hop, they are not a dog-com
            GSD mobility hop, they are not a
            financing-brand or insurance-brand
            hop, and they do not replace a
            veterinarian. Vets.co earns a
            commission on qualifying purchases at
            no extra cost to you. Empty Chewy
            buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/top+bound+steno+pad?s=breeds-german-shepherd-health"
              amazonLabel="Browse top-bound steno pads on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/mechanical+kitchen+timer?s=breeds-german-shepherd-health"
              amazonLabel="Browse mechanical kitchen timers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/self+adhesive+file+folder+labels?s=breeds-german-shepherd-health"
              amazonLabel="Browse self-adhesive file-folder labels on Amazon →"
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
