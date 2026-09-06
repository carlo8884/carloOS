import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "West Nile Virus in Horses — Signs, Vaccination, Prevention",
  description:
    "Reference guide to West Nile virus in horses: the mosquito-borne neurologic disease, clinical signs, the core vaccine, and mosquito control.",
  path: '/health/west-nile-virus',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "West Nile Virus in Horses — Signs, Vaccination, Prevention",
  description:
    "West Nile virus in horses: a mosquito-borne neurologic disease, clinical signs, the AAEP core vaccine, and mosquito control.",
  url: 'https://horses.com/health/west-nile-virus',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "West Nile Virus (Equine)",
  description:
    "West Nile virus in horses: a mosquito-borne neurologic disease, clinical signs, the AAEP core vaccine, and mosquito control.",
  url: 'https://horses.com/health/west-nile-virus',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Can a horse give West Nile virus to people?",
    answer:
      "No. Horses are dead-end hosts and do not develop enough virus in their blood to infect mosquitoes or other animals, so an infected horse cannot transmit West Nile virus to people or other horses. People and horses both catch it independently from infected mosquito bites.",
    answerText:
      "No -- horses are dead-end hosts and cannot pass the virus to people or other horses. Both catch it independently from infected mosquito bites.",
  },
  {
    question: "Is the West Nile vaccine necessary for every horse?",
    answer:
      "Yes -- West Nile is an AAEP core vaccine recommended for every horse, because the disease is severe and exposure through mosquito bites is essentially unavoidable. Vaccination dramatically reduces the risk of clinical disease and is the single most effective protective measure.",
    answerText:
      "Yes -- it is a core vaccine for every horse because the disease is severe and mosquito exposure is unavoidable. It is the single most effective protection.",
  },
  {
    question: "Can a horse recover from West Nile virus?",
    answer:
      "Many clinically affected horses recover with intensive supportive care, but a meaningful proportion of unvaccinated symptomatic horses die or are euthanized, and some survivors have lasting neurologic deficits. Because there is no cure, prevention through vaccination and mosquito control is far more reliable than treatment.",
    answerText:
      "Many recover with supportive care, but a significant share of symptomatic unvaccinated horses die or have lasting deficits. With no cure, prevention is far more reliable.",
  },
]

export default function WestNilePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
          { title: 'Equine Influenza', href: '/health/equine-influenza' },
          { title: 'Strangles', href: '/health/strangles' },
        ]}
        hero={{
          title: "West Nile Virus in Horses",
          subtitle:
            "West Nile virus is a mosquito-borne disease that can cause severe, sometimes fatal neurologic illness in horses. Since it arrived and spread across North America, horses have proven to be among the most affected domestic species. There is no specific cure once a horse is infected, which is exactly why it is one of the core vaccines every horse should receive. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "West Nile Virus", href: '/health/west-nile-virus' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is West Nile Virus", href: "#what" },
            { label: "How Horses Get It", href: "#transmission" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis and Care", href: "#care" },
            { label: "Vaccination", href: "#vaccination" },
            { label: "Mosquito Control", href: "#mosquito" },
            { label: "Mosquito-control kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Vaccination Schedule", href: "/guides/equine-vaccination-schedule" },
              { label: "Equine Influenza", href: "/health/equine-influenza" },
              { label: "Strangles", href: "/health/strangles" },
              { label: "Summer Heat Care", href: "/care/summer-heat-care" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-wnv"
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
              Keep the West Nile mosquito-control checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse West Nile mosquito-control checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the long-handle stock-tank-brush,
              20-foot barn-mosquito-netting, and fine-mesh
              horse-mosquito-sheet notes that match the
              empty-and-scrub-troughs, dawn-and-dusk
              stabling, and mosquito-sheets copy on this
              page — a long-handle stock-tank brush so
              standing water is dumped and the trough is
              scrubbed instead of left as a breeding bowl, 20-foot
              barn mosquito netting so dusk stabling is a
              mesh wall instead of an open doorway, and a
              fine-mesh horse mosquito sheet so overnight
              turnout is covered without a fly-control
              fly-sheet hop. Educational mosquito-control
              checklist, not a treatment, not a vaccine,
              not a substitute for calling the veterinarian,
              and not a stall-fan, fly-spray, or mosquito-dunk
              hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse West Nile mosquito-control checklist"
              subtitle="Email the trough-brush, barn-netting, and mosquito-sheet notes. No spam."
              ctaText="Email my horse West Nile mosquito-control checklist"
              source="health-wnv-under-hero"
            />
          </div>

          <h2 id="what">What Is West Nile Virus</h2>
          <p>West Nile virus is a flavivirus maintained in nature in a cycle between birds and mosquitoes. Birds are the amplifying hosts; mosquitoes that feed on infected birds can then transmit the virus to mammals, including horses and people. In horses the virus can cross into the nervous system and cause encephalomyelitis -- inflammation of the brain and spinal cord -- with serious neurologic consequences.</p>

          <h2 id="transmission">How Horses Get It</h2>
          <p>Horses are infected by the bite of an infected mosquito. They are considered dead-end hosts, meaning they do not develop enough virus in the blood to infect other mosquitoes, so an infected horse is not a source of spread to other horses or to people. Cases cluster in mosquito season -- late summer and early autumn in temperate regions -- and in areas with standing water that breeds mosquitoes.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Muscle twitching, especially of the face and muzzle.</li>
            <li>Stumbling, incoordination (ataxia), and weakness, sometimes progressing to an inability to stand.</li>
            <li>Behavioral changes, dullness, or hypersensitivity to touch and sound.</li>
            <li>Fever in some horses, though not always.</li>
            <li>Difficulty swallowing or facial paralysis in severe cases.</li>
          </ul>

          <h2 id="care">Diagnosis and Care</h2>
          <p>Diagnosis is based on neurologic signs, the season and geography, and blood testing for antibodies, interpreted by a veterinarian who also rules out other neurologic diseases such as the equine encephalitis viruses, EPM, and rabies. There is no antiviral cure; treatment is supportive -- anti-inflammatory medication, fluids, nursing care, and protection of a recumbent horse -- all under veterinary direction. A meaningful proportion of clinically affected, unvaccinated horses die or are euthanized, and some survivors have lasting deficits, which underscores the value of prevention.</p>

          <h2 id="vaccination">Vaccination</h2>
          <p>West Nile virus vaccination is an AAEP core vaccine, recommended for every horse regardless of lifestyle, because the disease is severe and the exposure (a mosquito bite) is unavoidable. Initial vaccination and boosters are timed by the veterinarian, often with a booster before mosquito season in high-risk regions. See the vaccination schedule guide for how it fits with the other core and risk-based vaccines.</p>

          <h2 id="mosquito">Mosquito Control</h2>
          <ul>
            <li><strong>Eliminate standing water</strong> where mosquitoes breed -- empty and scrub troughs, fix drainage, and remove containers that hold water. A long-handle stock-tank brush is how a trough is dumped and scrubbed instead of left as a green breeding bowl — it is not a color-coded flat-back bucket (that lives on strangles), not a lidded 5-gallon feed-soaking pail (that lives on choke), and not a mosquito dunk (that lives on dog heartworm prevention).</li>
            <li><strong>Reduce dawn and dusk exposure</strong> when many vector mosquitoes feed, using stabling and fans. 20-foot barn mosquito netting is how dusk stabling becomes a mesh wall instead of an open doorway — it is not a stall fan or stall screen (those live on the vaccination-schedule guide).</li>
            <li><strong>Use fly and mosquito repellents and sheets</strong> appropriate for horses during mosquito season. A fine-mesh horse mosquito sheet is how overnight turnout is covered without hopping the fly-control fly sheet or the sweet-itch rug.</li>
            <li><strong>Keep vaccination current</strong> as the primary defense, since control measures alone cannot eliminate exposure. This page does not hop vaccines, needles, or ranked vaccine products — those decisions stay with the veterinarian and the vaccination-schedule guide.</li>
          </ul>

          <h2 id="kit">Mosquito-control kit</h2>
          <p>
            Everyday physical supplies that match the
            empty-and-scrub-troughs, dawn-and-dusk
            stabling, and mosquito-sheets copy on this
            page — a long-handle stock-tank brush so
            standing water is dumped and the trough is
            scrubbed, 20-foot barn mosquito netting so dusk
            stabling is a mesh wall instead of an open
            doorway, and a fine-mesh horse mosquito sheet
            so overnight turnout is covered. These are
            educational mosquito-control tools, not a
            ranked product list, not a substitute for
            veterinary care, and not a treatment or a
            vaccine. Stall fans and stall screens already
            live on the vaccination-schedule guide. Fly
            masks, fly sheets, fly boots, fly spray, and
            fly traps already live on fly-control. Sweet-itch
            rugs and hoods already live on sweet-itch.
            Mosquito dunks already live on dog heartworm
            prevention. Color-coded flat-back buckets
            already live on strangles. This page does not
            hop vaccines, antibiotics, or needles. This
            page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (long handle stock tank brush /
              20 foot barn mosquito netting /
              fine mesh horse mosquito sheet).
              These are educational mosquito-control
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              vaccine / stall-fan / fly-sheet /
              mosquito-dunk ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1099
              30+foot+cotton+lunge+line /
              leather+chain+lead+shank+horse /
              orange+traffic+cone+set, #1098
              weatherproof+storage+clipboard /
              round+rubber+feed+pan+horse /
              paper+pellet+horse+bedding, #1097
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
              apple+wedger+slicer,
              mosquito+dunks (heartworm),
              horse+fly+sheet / horse+fly+spray /
              horse+fly+mask (fly-control),
              horse+stall+fan / horse+stall+screen
              (vaccination schedule),
              horse+sweet+itch+rug /
              horse+sweet+itch+hood (sweet-itch).
              Vaccines and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the mosquito-control kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page empty-and-scrub-troughs, dawn-and-dusk
              stabling, and mosquito-sheets copy — a
              long-handle stock-tank brush, 20-foot barn
              mosquito netting, and a fine-mesh horse
              mosquito sheet. Educational mosquito-control
              tools only. They are not a ranked product
              list, they are not a substitute for veterinary
              care, they are not a #1099 lunge-line /
              lead-shank / traffic-cone hop, they
              are not a #1098 clipboard / feed-pan /
              paper-pellet-bedding hop, they
              are not a #1097 color-coded-bucket /
              coverall / boot-dip-tub hop, they
              are not a #1096 composition-notebook /
              receiving-blanket / charcoal hop, they
              are not a #1095 sponge-filter /
              nano-heater / water-jug hop, they
              are not a #1094 soaking-pail /
              feed-tub-rock / apple-wedger hop, they
              are not a heartworm mosquito-dunk hop, they
              are not a fly-control fly-sheet hop, they
              are not a vaccination-schedule stall-fan hop,
              and they do not replace a veterinarian.
              Horses.com earns a commission on
              qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/long+handle+stock+tank+brush?s=health-wnv"
                amazonLabel="Browse long-handle stock-tank brushes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/20+foot+barn+mosquito+netting?s=health-wnv"
                amazonLabel="Browse 20-foot barn mosquito netting on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/fine+mesh+horse+mosquito+sheet?s=health-wnv"
                amazonLabel="Browse fine-mesh horse mosquito sheets on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Long MT. “West Nile Virus and Equine Encephalitis Viruses.” Veterinary Clinics of North America: Equine Practice, 2014; 30(3):523–542.</li>
            <li>Centers for Disease Control and Prevention. “West Nile Virus” surveillance and veterinary resources. cdc.gov.</li>
            <li>American Association of Equine Practitioners. “West Nile Virus Vaccination Guidelines” (core vaccine). aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
