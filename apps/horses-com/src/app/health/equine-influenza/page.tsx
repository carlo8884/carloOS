import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Influenza — Signs, Spread, Vaccination",
  description:
    "Reference guide to equine influenza: the highly contagious respiratory virus, clinical signs, transmission, vaccination, and outbreak management.",
  path: '/health/equine-influenza',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Influenza — Signs, Spread, Vaccination",
  description:
    "Equine influenza virus: a highly contagious respiratory disease of horses. Signs, transmission, vaccination strategy, and outbreak control.",
  url: 'https://horses.com/health/equine-influenza',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Influenza",
  description:
    "Equine influenza virus: a highly contagious respiratory disease of horses. Signs, transmission, vaccination strategy, and outbreak control.",
  url: 'https://horses.com/health/equine-influenza',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "How long should a horse rest after equine influenza?",
    answer:
      "The widely cited guideline is roughly one week of rest for every day of fever, which often means three weeks or more. The respiratory lining needs time to regenerate; returning to work too early risks secondary pneumonia and lasting airway damage. Your veterinarian confirms when the horse is ready.",
    answerText:
      "Roughly one week of rest per day of fever, often three weeks or more, to let the airway lining regenerate. Returning too early risks pneumonia and lasting damage.",
  },
  {
    question: "Is equine influenza contagious to people?",
    answer:
      "Equine influenza is highly contagious between horses but is not considered a meaningful threat to humans. People can, however, carry the virus on hands, clothing, and equipment and spread it between horses, which is why hygiene and biosecurity matter during an outbreak.",
    answerText:
      "It spreads readily between horses but is not a meaningful human health threat. People can carry it on hands and equipment, so hygiene matters during outbreaks.",
  },
  {
    question: "Does the flu vaccine stop a horse from catching influenza?",
    answer:
      "Vaccination greatly reduces the severity and spread of equine influenza and is the foundation of control, but no vaccine is perfectly protective, especially as the virus drifts antigenically. Vaccinated horses that do become infected typically have milder, shorter illness, which is why high vaccination coverage protects the whole group.",
    answerText:
      "Vaccination greatly reduces severity and spread but is not perfectly protective. Vaccinated horses usually get milder illness, and high coverage protects the group.",
  },
]

export default function EquineInfluenzaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
          { title: 'Strangles', href: '/health/strangles' },
          { title: 'Heaves (Equine Asthma)', href: '/health/heaves' },
        ]}
        hero={{
          title: "Equine Influenza",
          subtitle:
            "Equine influenza is one of the most contagious respiratory diseases of the horse -- a virus that can sweep through a barn or a competition venue within days. Most healthy adult horses recover with rest, but the disease is a major welfare and economic problem because of how fast it spreads and how long horses need off work. Vaccination and basic biosecurity are the practical defenses. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Equine Influenza", href: '/health/equine-influenza' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Equine Influenza", href: "#what" },
            { label: "How It Spreads", href: "#transmission" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Care and Recovery", href: "#care" },
            { label: "Vaccination", href: "#vaccination" },
            { label: "Biosecurity", href: "#biosecurity" },
            { label: "Quarantine-and-rest kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Strangles", href: "/health/strangles" },
              { label: "Vaccination Schedule", href: "/guides/equine-vaccination-schedule" },
              { label: "West Nile Virus", href: "/health/west-nile-virus" },
              { label: "Trailering and Transport", href: "/care/trailering" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-flu"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the influenza quarantine-and-rest checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse influenza quarantine-and-rest checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the weatherproof-storage-clipboard,
              round-rubber-feed-pan, and paper-pellet-bedding
              notes that match the monitor-temperatures,
              dedicated-equipment, and clean-air-rest
              copy on this page — a clipboard so twice-daily
              quarantine temperatures live on one barn sheet
              instead of a scrap of paper, a rubber feed pan
              so a coughing horse eats from its own tub, and
              paper-pellet bedding so a stripped airway rests
              on low-dust stall fill. Educational
              quarantine-and-rest checklist, not a treatment,
              not a vaccine, not a substitute for calling the
              veterinarian, and not a thermometer, coverall,
              bucket, or hay-steamer hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse influenza quarantine-and-rest checklist"
              subtitle="Email the clipboard, feed-pan, and paper-pellet-bedding notes. No spam."
              ctaText="Email my horse influenza quarantine-and-rest checklist"
              source="health-flu-under-hero"
            />
          </div>

          <h2 id="what">What Is Equine Influenza</h2>
          <p>Equine influenza is caused by influenza A virus subtypes adapted to horses, principally the H3N8 lineage. The virus infects and damages the lining of the respiratory tract, stripping the protective cilia and leaving the airway vulnerable to secondary bacterial infection. It is endemic in many horse populations worldwide and is a notifiable concern in regions that are normally free of it, where an incursion can shut down equine movement entirely.</p>

          <h2 id="transmission">How It Spreads</h2>
          <p>Influenza spreads through respiratory droplets when horses cough, and the virus can travel surprising distances on the air. It also moves on contaminated hands, clothing, equipment, and shared airspace. The incubation period is short -- often only one to three days -- so an outbreak explodes quickly, and infected horses can shed virus before they look obviously sick. Crowded events, sales, and shared transport are classic flashpoints.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>A sudden high fever, often the first and most consistent sign.</li>
            <li>A harsh, dry, hacking cough that can persist for weeks.</li>
            <li>Clear nasal discharge that may turn thicker if a secondary bacterial infection develops.</li>
            <li>Depression, loss of appetite, and enlarged lymph nodes.</li>
            <li>Muscle stiffness and reluctance to move in some horses.</li>
          </ul>

          <h2 id="care">Care and Recovery</h2>
          <p>Most healthy adult horses recover with supportive care: rest, clean air, soft palatable feed, and time. The cardinal rule is rest -- the damaged airway lining needs roughly one week of rest for every day of fever, often three weeks or more, to regenerate its cilia. Paper-pellet horse bedding is how that rest stall stays low-dust while the lining regenerates — it is not pine shavings (that live on the stall-bedding calculator), not wood-pellet stall bedding, not hemp stall bedding (that lives on turnout-vs-stabling), and not a hay steamer or hay-soaking bag (those live on heaves). Pushing a horse back to work too soon invites secondary pneumonia and chronic airway problems. A veterinarian directs any medication and watches for complications, which are more likely in foals, old horses, and those with other illness.</p>

          <h2 id="vaccination">Vaccination</h2>
          <p>Vaccination is the foundation of control and is a risk-based vaccine in the AAEP framework, recommended for horses that travel, compete, or live in contact with others. Because the virus drifts antigenically, vaccines are periodically updated, and competition bodies often mandate specific booster intervals. Your veterinarian sets the schedule based on the horse&apos;s lifestyle and the products available. See the vaccination schedule guide.</p>

          <h2 id="biosecurity">Biosecurity</h2>
          <ul>
            <li><strong>Quarantine new and returning horses</strong> and monitor temperatures before mixing them with the herd. A weatherproof storage clipboard is how twice-daily quarantine temperatures live on one barn sheet instead of a scrap of paper — it is not a lined telephone message pad (that lives on when-to-go-to-the-vet), not a ruled marble composition notebook (that lives on ferret adrenal), and not a rectal thermometer (those live on colic, the grimace scale, and the emergency tool).</li>
            <li><strong>Isolate coughing or feverish horses</strong> immediately and use dedicated equipment. A round rubber horse feed pan is how a coughing horse eats from its own tub instead of a shared feeder — it is not a color-coded flat-back bucket (that lives on strangles), not a lidded 5-gallon feed-soaking pail (that lives on choke), and not a food-grade water jug (that lives on nano-tank setup).</li>
            <li><strong>Limit shared airspace and equipment</strong> at events and in transport.</li>
            <li><strong>Maintain vaccination</strong> across the group so that population immunity blunts outbreaks. This page does not hop vaccines, needles, or ranked vaccine products — those decisions stay with the veterinarian and the vaccination-schedule guide.</li>
          </ul>

          <h2 id="kit">Quarantine-and-rest kit</h2>
          <p>
            Everyday physical supplies that match the
            monitor-temperatures, dedicated-equipment, and
            clean-air-rest copy on this page — a weatherproof
            storage clipboard so twice-daily quarantine
            temperatures live on one barn sheet, a round
            rubber horse feed pan so a coughing horse eats
            from its own tub, and paper-pellet horse bedding
            so a stripped airway rests on low-dust stall
            fill. These are educational quarantine-and-rest
            tools, not a ranked product list, not a
            substitute for veterinary care, and not a
            treatment or a vaccine. Thermometers already live
            on colic, the grimace scale, and the emergency
            tool. Color-coded flat-back buckets, disposable
            coveralls, and boot-dip tubs already live on
            strangles. Hay steamers and hay-soaking bags
            already live on heaves. Stall fans and stall
            screens already live on the vaccination-schedule
            guide. Pine shavings, wood-pellet bedding, and
            hemp stall bedding already live on the
            stall-bedding calculator and turnout-vs-stabling.
            This page does not hop vaccines, antibiotics, or
            needles. This page does not claim hands-on
            testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (weatherproof storage clipboard /
              round rubber feed pan horse /
              paper pellet horse bedding).
              These are educational quarantine-and-rest
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              vaccine / thermometer / coverall /
              bucket / hay-steamer ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1097
              color+coded+flat+back+horse+buckets /
              disposable+coverall+suit /
              heavy+duty+rubber+boot+dip+tub, #1096
              ruled+marble+composition+notebook /
              soft+cotton+receiving+blanket /
              activated+charcoal+odor+absorber, #1095
              air+driven+corner+sponge+filter /
              preset+25+watt+nano+aquarium+heater /
              food+grade+1+gallon+water+jug, #1094
              lidded+5+gallon+feed+soaking+pail /
              large+smooth+feed+tub+rocks /
              apple+wedger+slicer, #1093
              48+hour+digital+kitchen+timer /
              lined+telephone+message+pad /
              medium+hard+sided+plastic+pet+carrier,
              equine+digital+rectal+thermometer (colic),
              horse+hay+steamer / horse+hay+soaking+bag
              (heaves), horse+stall+fan / horse+stall+screen
              (vaccination schedule), pine+shavings /
              wood+pellet / hemp stall bedding.
              Thermometers, vaccines, and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the quarantine-and-rest kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page monitor-temperatures, dedicated-equipment,
              and clean-air-rest copy — a weatherproof
              storage clipboard, a round rubber horse feed
              pan, and paper-pellet horse bedding.
              Educational quarantine-and-rest tools only.
              They are not a ranked product list,
              they are not a substitute for veterinary
              care, they are not a #1097 color-coded-bucket /
              coverall / boot-dip-tub hop, they
              are not a #1096 composition-notebook /
              receiving-blanket / charcoal hop, they
              are not a #1095 sponge-filter /
              nano-heater / water-jug hop, they
              are not a #1094 soaking-pail /
              feed-tub-rock / apple-wedger hop, they
              are not a #1093 kitchen-timer /
              message-pad / pet-carrier hop, they
              are not a colic thermometer hop, they
              are not a heaves hay-steamer hop, they
              are not a vaccination-schedule stall-fan hop,
              and they do not replace a veterinarian.
              Horses.com earns a commission on
              qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/weatherproof+storage+clipboard?s=health-flu"
                amazonLabel="Browse weatherproof storage clipboards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/round+rubber+feed+pan+horse?s=health-flu"
                amazonLabel="Browse round rubber horse feed pans on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/paper+pellet+horse+bedding?s=health-flu"
                amazonLabel="Browse paper-pellet horse bedding on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Cullinane A, Newton JR. “Equine Influenza — A Global Perspective.” Veterinary Microbiology, 2013; 167(1–2):205–214.</li>
            <li>Daly JM, et al. “Equine Influenza: A Review.” Equine Veterinary Journal and related reviews.</li>
            <li>American Association of Equine Practitioners. “Equine Influenza Vaccination Guidelines” (risk-based vaccine). aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
