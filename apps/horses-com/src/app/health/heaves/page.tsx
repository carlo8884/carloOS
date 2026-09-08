import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Heaves (Equine Asthma) — Signs, Triggers, Management",
  description:
    "Reference guide to equine asthma / heaves (severe equine asthma, RAO): the chronic allergic airway disease, signs, dust triggers, and environmental management.",
  path: '/health/heaves',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Heaves (Equine Asthma) — Signs, Triggers, Management",
  description:
    "Equine asthma / heaves (recurrent airway obstruction): chronic allergic airway disease, signs, environmental triggers, and management.",
  url: 'https://horses.com/health/heaves',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Heaves (Equine Asthma)",
  description:
    "Equine asthma / heaves (recurrent airway obstruction): chronic allergic airway disease, signs, environmental triggers, and management.",
  url: 'https://horses.com/health/heaves',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Is heaves the same as asthma?",
    answer:
      "Effectively yes. Heaves is the classic severe form of what is now called equine asthma -- a chronic, allergy-driven airway inflammation very similar to human asthma. The modern term equine asthma covers a spectrum from mild inflammatory airway disease to severe heaves.",
    answerText:
      "Effectively yes -- heaves is the severe form of equine asthma, a chronic allergy-driven airway inflammation similar to human asthma.",
  },
  {
    question: "Can heaves be cured?",
    answer:
      "Heaves cannot be cured, but it can be controlled so well that many horses are essentially symptom-free. The cornerstone is removing the airborne dust and mold that trigger it -- through turnout, soaked or steamed hay, and low-dust bedding -- layered with veterinary-prescribed medication when needed.",
    answerText:
      "It cannot be cured but can be controlled, often to near symptom-free, mainly by removing airborne dust and mold and adding veterinary medication when needed.",
  },
  {
    question: "Should a horse with heaves be turned out or stabled?",
    answer:
      "For most heaves horses, turnout in fresh air is far better than stabling, because the molds and dust in hay and bedding inside a barn are the usual triggers. The exception is the less common summer pasture-associated form, where the horse does better stabled in a dust-controlled environment during pollen and mold season.",
    answerText:
      "Usually turnout is far better, since barn dust and hay mold are the typical triggers. The exception is summer pasture-associated asthma, where stabling away from pollen helps.",
  },
]

export default function HeavesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Influenza', href: '/health/equine-influenza' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
          { title: 'Hay Types', href: '/nutrition/hay-types' },
        ]}
        hero={{
          title: "Heaves (Equine Asthma)",
          subtitle:
            "Heaves -- now grouped under the term equine asthma, and historically called recurrent airway obstruction (RAO) -- is a chronic, allergy-driven inflammatory disease of the lower airways. It is essentially asthma in the horse: exposure to airborne dust, mold, and allergens triggers airway inflammation and constriction, leaving the horse coughing and struggling to breathe out. The single most powerful treatment is not a drug but a change in environment. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Heaves", href: '/health/heaves' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Equine Asthma", href: "#what" },
            { label: "Triggers", href: "#triggers" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Environmental Management", href: "#environment" },
            { label: "Medical Treatment", href: "#medical" },
            { label: "Heaves Kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hay Types Compared", href: "/nutrition/hay-types" },
              { label: "Turnout vs Stabling", href: "/care/turnout-vs-stabling" },
              { label: "Equine Influenza", href: "/health/equine-influenza" },
              { label: "Senior Horse Care", href: "/ownership/senior-horse-care" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />

        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-05"
            reviewedBy="Editorial team"
          />

          <h2 id="what">What Is Equine Asthma</h2>
          <p>Equine asthma is a spectrum of chronic, non-infectious airway inflammation. Mild to moderate equine asthma (formerly inflammatory airway disease) causes poor performance and intermittent cough in younger horses, while severe equine asthma -- the classic &apos;heaves&apos; -- causes overt difficulty breathing in older horses. In susceptible horses, inhaled allergens provoke airway inflammation, excess mucus, and bronchoconstriction, narrowing the airways and making it hard to push air out.</p>

          <h2 id="triggers">Triggers</h2>
          <p>The dominant triggers are the molds, dust, and endotoxin found in hay and bedding, which is why heaves classically flares in stabled horses on dry hay through the winter. A related &apos;summer pasture-associated&apos; form flares outdoors in response to pasture molds and pollens in some climates. Poorly ventilated barns, dusty arenas, and round bales concentrate the offending particles. Identifying which environment provokes a given horse is the key to managing it.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>A chronic cough, often worse at the start of exercise or while eating hay.</li>
            <li>Increased respiratory effort, especially a pronounced two-phase push to breathe out.</li>
            <li>A heave line -- a visible ridge of overdeveloped abdominal muscle along the flank from chronic forced breathing.</li>
            <li>Nasal discharge and flared nostrils.</li>
            <li>Exercise intolerance and poor performance.</li>
            <li>Weight loss in advanced, poorly controlled cases.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>A veterinarian diagnoses equine asthma from the history (a chronic, recurring, environment-linked cough without fever), clinical examination including listening to the lungs, and tests such as a rebreathing examination, airway sampling (bronchoalveolar lavage or tracheal wash) to confirm the type of inflammation, and sometimes endoscopy. Ruling out infectious causes is part of the workup, since the treatment is entirely different.</p>

          <h2 id="environment">Environmental Management</h2>
          <ul>
            <li><strong>Maximize turnout</strong> and fresh air -- for most heaves horses, living out is the single biggest improvement.</li>
            <li><strong>Soak or steam hay, or feed alternative forage</strong> such as haylage or a low-dust complete feed, to slash inhaled mold and dust. A hay steamer treats a flake or net in steam so mold and dust drop before the horse eats; a hay soaking bag lets a flake sit in water, then drain, so the same dusty winter hay is wet rather than airborne. Low-dust bedding and rubber stall mats already live on the stall-bedding calculator and stay off this kit.</li>
            <li><strong>Use low-dust bedding</strong> such as dust-extracted shavings, cardboard, or rubber mats instead of straw.</li>
            <li><strong>Improve barn ventilation</strong> and avoid keeping the horse stabled while bedding is shaken out or hay is moved nearby. Stall fans already live on other horses.com pages and stay off this kit.</li>
            <li><strong>Feed at ground level</strong> rather than from a raised net, to help airway drainage. Slow-feeder hay nets stay on the feed calculator and forage pages.</li>
          </ul>

          <h2 id="medical">Medical Treatment</h2>

          <h2 id="kit">Heaves Kit</h2>
          <p>Everyday physical supplies that match the soak-or-steam hay copy above — a horse hay steamer so a flake can be steamed before feeding, plus a hay soaking bag so dusty winter hay can sit in water and drain. These are not treatments for equine asthma, heaves flares, or infectious cough; a horse that is struggling to breathe, has a fever, or is not improving after the dusty-hay trigger is removed needs a veterinarian. Low-dust bedding, rubber stall mats, slow-feeder hay nets, stall fans, inhaler spacers, corticosteroids, and bronchodilators stay off this kit — those already ship on other pages or are prescription-only. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (heaves kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page soak-or-steam hay copy, not bedding, fans, hay nets,
              inhalers, steroids, or medication hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the heaves kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hay+steamer?s=health-heaves"
                amazonLabel="Browse horse hay steamers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hay+soaking+bag?s=health-heaves"
                amazonLabel="Browse horse hay soaking bags on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Couetil LL, Cardwell JM, Gerber V, et al. “Inflammatory Airway Disease of Horses — Revised Consensus Statement.” Journal of Veterinary Internal Medicine, 2016; 30(2):503–515.</li>
            <li>Pirie RS. “Recurrent Airway Obstruction: A Review.” Equine Veterinary Journal, 2014; 46(3):276–288.</li>
            <li>American Association of Equine Practitioners. “Equine Asthma / Heaves” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
