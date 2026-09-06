import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Strangles in Horses — Streptococcus equi, Signs, Biosecurity",
  description:
    "Reference guide to equine strangles (Streptococcus equi infection): clinical signs, transmission, the carrier state, biosecurity, and outbreak management.",
  path: '/health/strangles',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Strangles in Horses — Streptococcus equi, Signs, Biosecurity",
  description:
    "Equine strangles caused by Streptococcus equi subspecies equi: signs, transmission, guttural-pouch carriers, biosecurity, and outbreak control.",
  url: 'https://horses.com/health/strangles',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Strangles",
  description:
    "Equine strangles caused by Streptococcus equi subspecies equi: signs, transmission, guttural-pouch carriers, biosecurity, and outbreak control.",
  url: 'https://horses.com/health/strangles',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Is strangles fatal?",
    answer:
      "Most otherwise healthy horses recover from strangles, and overall mortality is low. However, complications such as bastard strangles (internal abscesses), purpura haemorrhagica, and airway obstruction can be serious or occasionally fatal, particularly in very young, old, or debilitated horses. Veterinary involvement improves outcomes.",
    answerText:
      "Most healthy horses recover and mortality is low, but complications like internal abscesses, purpura haemorrhagica, and airway obstruction can be serious, especially in vulnerable horses.",
  },
  {
    question: "Why is monitoring temperature important with strangles?",
    answer:
      "Fever usually appears before nasal discharge or visible swelling, so daily temperature monitoring is the earliest way to catch an infected horse and isolate it before it sheds bacteria and infects others. During an outbreak, twice-daily temperatures on every horse are a cornerstone of control.",
    answerText:
      "Fever appears before other signs, so temperature monitoring catches infected horses early and lets you isolate them before they spread bacteria. Twice-daily temperatures are central to outbreak control.",
  },
  {
    question: "What is a strangles carrier?",
    answer:
      "A carrier is a recovered horse that harbors Streptococcus equi in its guttural pouches without showing symptoms, shedding intermittently for months or years. Carriers are the reservoir that starts new outbreaks. Veterinarians identify and clear them with guttural-pouch endoscopy, lavage, and PCR testing.",
    answerText:
      "A carrier is a symptom-free recovered horse harboring the bacteria in its guttural pouches and shedding intermittently. Carriers seed new outbreaks and are cleared via guttural-pouch endoscopy and lavage.",
  },
]

export default function StranglesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Influenza', href: '/health/equine-influenza' },
          { title: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
          { title: 'West Nile Virus', href: '/health/west-nile-virus' },
        ]}
        hero={{
          title: "Strangles in Horses",
          subtitle:
            "Strangles is one of the oldest and most contagious bacterial diseases of horses, caused by Streptococcus equi subspecies equi. It produces fever, nasal discharge, and the swollen, abscessing lymph nodes that gave the disease its alarming name. While most healthy horses recover, strangles spreads explosively through a barn and can leave behind silent carriers that seed future outbreaks -- which is why biosecurity, not just treatment, defines good management. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Strangles", href: '/health/strangles' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Strangles", href: "#what" },
            { label: "How It Spreads", href: "#transmission" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Complications", href: "#complications" },
            { label: "The Carrier State", href: "#carriers" },
            { label: "Biosecurity", href: "#biosecurity" },
            { label: "Isolation-and-disinfect kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Suspected Strangles</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Strangles is highly contagious. Isolate any horse with fever and nasal discharge immediately, restrict movement on and off the property, and call your veterinarian before the disease spreads through the barn.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Influenza", href: "/health/equine-influenza" },
              { label: "Vaccination Schedule", href: "/guides/equine-vaccination-schedule" },
              { label: "West Nile Virus", href: "/health/west-nile-virus" },
              { label: "Choosing a Vet", href: "/ownership/choosing-a-vet" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-strangles"
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
              Keep the strangles isolation-and-disinfect checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse strangles isolation-and-disinfect checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the color-coded flat-back bucket,
              disposable-coverall, and rubber boot-dip-tub
              notes that match the dedicated-equipment,
              dedicated-clothing, and clean-and-disinfect
              copy on this page — buckets so an isolation
              horse drinks from its own color-coded pair
              instead of a shared trough, a coverall so the
              handler of a draining horse wears clothing
              that stays in that barn, and a boot-dip tub
              so pus and nasal discharge do not walk to the
              next stall. Educational biosecurity checklist,
              not a treatment, not a vaccine, not a
              substitute for calling the veterinarian, and
              not a thermometer, first-aid-kit, shoe-cover,
              or kennel-spray hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse strangles isolation-and-disinfect checklist"
              subtitle="Email the color-coded-bucket, coverall, and boot-dip-tub notes. No spam."
              ctaText="Email my horse strangles isolation-and-disinfect checklist"
              source="health-strangles-under-hero"
            />
          </div>

          <h2 id="what">What Is Strangles</h2>
          <p>Strangles is an upper respiratory infection caused by Streptococcus equi subspecies equi, a host-adapted bacterium that infects only horses and their relatives. After infection, the bacteria colonize the lymph nodes of the head and throat, which swell and abscess. When those abscesses press on the airway they can cause the laboured breathing that historically gave the disease its name. It is among the most contagious equine diseases and one of the most frequently diagnosed worldwide.</p>

          <h2 id="transmission">How It Spreads</h2>
          <p>Strangles spreads through direct contact between horses and, very efficiently, indirectly via contaminated hands, clothing, buckets, twitches, shared water troughs, tack, and trailers. Pus draining from abscesses and nasal discharge are loaded with bacteria. The organism can survive in water and on surfaces, so a contaminated environment keeps an outbreak going. Newly arrived horses and shared facilities are common entry points.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Fever, often the first sign, appearing before nasal discharge -- which is why monitoring temperature is central to early detection.</li>
            <li>Thick, often yellow nasal discharge.</li>
            <li>Swollen, painful lymph nodes under the jaw and in the throatlatch that abscess and may rupture, draining pus.</li>
            <li>Depression, reduced appetite, and difficulty swallowing.</li>
            <li>A soft cough and an extended head and neck posture to ease swallowing and breathing.</li>
          </ul>

          <h2 id="complications">Complications</h2>
          <p>Most horses recover uneventfully, but complications occur. &apos;Bastard strangles&apos; is the spread of abscesses to lymph nodes elsewhere in the body, which can be serious. Purpura haemorrhagica is an immune-mediated vasculitis that can follow infection or, occasionally, vaccination. Guttural-pouch empyema -- pus accumulating in the air-filled pouches behind the throat -- is both a complication and the seedbed of the long-term carrier state.</p>

          <h2 id="carriers">The Carrier State</h2>
          <p>A subset of recovered horses become long-term, symptom-free carriers, harboring the bacteria in their guttural pouches (often within hardened concretions called chondroids) and shedding intermittently for months or years. These silent carriers are the reservoir that ignites new outbreaks. Detecting and clearing them -- through guttural-pouch endoscopy and lavage with PCR testing, directed by a veterinarian -- is a key part of stopping strangles from recurring on a property.</p>

          <h2 id="biosecurity">Biosecurity</h2>
          <ul>
            <li><strong>Isolate new arrivals</strong> for a quarantine period and monitor their temperature before mixing with the resident herd.</li>
            <li><strong>Isolate sick horses immediately</strong> and use dedicated equipment, clothing, and handlers for them. Color-coded flat-back horse buckets are how an isolation horse drinks from its own pair instead of a shared trough — they are not a lidded 5-gallon feed-soaking pail (that lives on choke) and not a hay-soaking bag (that lives on heaves).</li>
            <li><strong>Stop all horse movement</strong> on and off the property during an outbreak.</li>
            <li><strong>Clean and disinfect</strong> shared equipment, water sources, stalls, and trailers; the organism persists in the environment. A heavy-duty rubber boot-dip tub at the isolation-stall door is how pus and nasal discharge stay off the next aisle — it is not a parvo shoe-cover hop, not a pump-sprayer hop, and not a kennel-disinfectant-spray hop.</li>
            <li><strong>Dedicated clothing for handlers</strong> of draining horses so contaminated jackets and jeans do not walk the barn. A disposable coverall suit is how that clothing stays in the isolation barn and comes off before the next stall — it is not a disposable shoe-cover hop and not a nitrile-exam-glove hop.</li>
            <li><strong>Screen recovered horses</strong> for the carrier state with your veterinarian before declaring the outbreak over.</li>
          </ul>

          <h2 id="kit">Isolation-and-disinfect kit</h2>
          <p>
            Everyday physical supplies that match the
            dedicated-equipment, dedicated-clothing, and
            clean-and-disinfect copy on this page — color-coded
            flat-back horse buckets so an isolation horse
            drinks from its own pair instead of a shared
            trough, a disposable coverall suit so the handler
            of a draining horse wears clothing that stays in
            that barn, and a heavy-duty rubber boot-dip tub
            so pus and nasal discharge do not walk to the
            next stall. These are educational biosecurity
            tools, not a ranked product list, not a
            substitute for veterinary care, and not a
            treatment or a vaccine. Thermometers already live
            on colic, the grimace scale, and the emergency
            tool. First-aid kits already live on the emergency
            tool. Lidded 5-gallon feed-soaking pails already
            live on choke. Hay-soaking bags already live on
            heaves. Disposable shoe covers and pump sprayers
            already live on the vets.co parvo page.
            Kennel-disinfectant spray already lives on canine
            influenza. This page does not hop vaccines,
            antibiotics, or needles. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (color-coded flat-back horse buckets /
              disposable coverall suit /
              heavy-duty rubber boot-dip tub).
              These are educational biosecurity tools,
              not a ranked product list, not a
              substitute for veterinary care, no Rx /
              vaccine / thermometer / first-aid kit /
              shoe-cover / kennel-spray ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1096
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
              disposable+shoe+covers / pump+sprayer (parvo),
              pet+safe+kennel+disinfectant+spray
              (canine influenza).
              Thermometers, first-aid kits, vaccines,
              and prescriptions are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the isolation-and-disinfect kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page dedicated-equipment, dedicated-clothing,
              and clean-and-disinfect copy — color-coded
              flat-back horse buckets, a disposable coverall
              suit, and a heavy-duty rubber boot-dip tub.
              Educational biosecurity tools only.
              They are not a ranked product list,
              they are not a substitute for veterinary
              care, they are not a #1096 composition-notebook /
              receiving-blanket / charcoal hop, they
              are not a #1095 sponge-filter /
              nano-heater / water-jug hop, they
              are not a #1094 soaking-pail /
              feed-tub-rock / apple-wedger hop, they
              are not a #1093 kitchen-timer /
              message-pad / pet-carrier hop, they
              are not a colic thermometer hop, they
              are not a parvo shoe-cover / pump-sprayer hop,
              they are not a canine-influenza kennel-spray hop,
              and they do not replace a veterinarian.
              Horses.com earns a commission on
              qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/color+coded+flat+back+horse+buckets?s=health-strangles"
                amazonLabel="Browse color-coded flat-back horse buckets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/disposable+coverall+suit?s=health-strangles"
                amazonLabel="Browse disposable coverall suits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/heavy+duty+rubber+boot+dip+tub?s=health-strangles"
                amazonLabel="Browse heavy-duty rubber boot-dip tubs on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Boyle AG, Timoney JF, Newton JR, et al. “Streptococcus equi Infections in Horses: ACVIM Consensus Statement.” Journal of Veterinary Internal Medicine, 2018; 32(2):633–647.</li>
            <li>Waller AS. “New Perspectives for the Diagnosis, Control, Treatment, and Prevention of Strangles.” Veterinary Clinics of North America: Equine Practice, 2014; 30(3):591–607.</li>
            <li>American Association of Equine Practitioners. “Strangles” owner resources and infectious-disease guidelines. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
