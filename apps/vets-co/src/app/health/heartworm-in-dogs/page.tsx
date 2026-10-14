import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, RelatedLinks, ShopCtas, LastUpdated } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, DropCap, PullQuote, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Heartworm in Dogs — Prevention, Testing | Vets.co', description: 'Heartworm disease is preventable. Prevention averages about $183 a year; treatment averages $1,457. Typical US range, checked October 2026. dated 2026-10-07.', path: '/health/heartworm-in-dogs', type: 'article' })
const SOURCES = [
  { label: 'American Heartworm Society: Heartworm Basics (testing, prevention, treatment)', url: 'https://www.heartwormsociety.org/pet-owner-resources/heartworm-basics', publisher: 'American Heartworm Society' },
  { label: 'FDA: The Facts about Heartworm Disease', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/keep-worms-out-your-pets-heart-facts-about-heartworm-disease', publisher: 'U.S. Food and Drug Administration' },
  { label: 'American Heartworm Society: Current Canine Guidelines (general reference; not checked against this page)', url: 'https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines', publisher: 'American Heartworm Society' },
  { label: 'Merck Veterinary Manual: Heartworm Disease', url: 'https://www.merckvetmanual.com/dog-owners/heart-and-blood-vessel-disorders-of-dogs/heartworm-disease-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Heartworm Disease', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/heartworm-disease', publisher: 'AVMA' },
  { label: 'Parasites & Vectors (2026): US clinic-transaction cost of canine heartworm treatment and prevention', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13491753/', publisher: 'Parasites & Vectors' },
  { label: 'ASPCA Pro: Emancipet high-volume heartworm treatment costs', url: 'https://www.aspcapro.org/resource/improving-access-heartworm-treatment', publisher: 'ASPCA Pro' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Heartworm in Dogs', description: 'Prevention, annual testing, and melarsomine treatment for canine heartworm disease.', url: 'https://vets.co/health/heartworm-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-13T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Heartworm Disease in Dogs', description: 'Prevention, testing, and treatment of Dirofilaria immitis heartworm in dogs.', url: 'https://vets.co/health/heartworm-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-10-13' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'Can I skip prevention in winter?', answer: 'Year-round prevention is recommended in most of the US. Mosquito seasons vary and some mosquitoes overwinter indoors, and heartworm has been diagnosed in all 50 states. The American Heartworm Society recommends year-round prevention for all dogs regardless of climate, both because exposure risk is difficult to predict and because monthly heartworm preventives also control intestinal parasites (roundworms, hookworms) that are present year-round.' },
  { question: 'What happens if I miss a dose?', answer: 'Call your veterinarian. For a missed dose, the American Heartworm Society says to restart monthly prevention immediately and retest your dog 6 months later, because heartworms must be about 7 months old before a test can detect them. Do not double-dose unless your vet tells you to.' },
  { question: 'Can my dog exercise during heartworm treatment?', answer: 'No. Strict rest is essential during heartworm treatment -- this is one of the most important and most difficult aspects of the treatment protocol. Exercise increases blood flow and oxygen demand, which increases the risk of dead worms causing pulmonary thromboembolism. Your vet will set how long the restriction lasts; the American Heartworm Society says exercise during treatment is the leading cause of complications. Crates may be needed for high-energy dogs. This restriction is medically necessary -- owners who do not comply risk the dog\'s life during treatment.' },
]


export default function HeartwormPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        priceAsOf="2026-10-07"
        hero={{ title: 'Heartworm Disease in Dogs', subtitle: 'Heartworm disease -- caused by the parasitic worm Dirofilaria immitis transmitted through mosquito bites -- is one of the most important preventable conditions in veterinary medicine. A 2026 US clinic-transaction study in Parasites & Vectors put year-round prevention at about $183 and average melarsomine treatment at $1,457, with $1,124 of that tied directly to treatment. A high-volume outpatient clinic reported $225–$614 per dog (ASPCA Pro, on the Emancipet protocol). Typical US range, checked October 2026; varies by clinic and region. dated 2026-10-07. Treatment is difficult and risky. The math is straightforward.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Heartworm', href: '/health/heartworm-in-dogs' }]}
        relatedLinks={[
          { title: 'Health Hub', href: '/health', category: 'Hub' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
          { title: 'How to Give Your Pet a Pill', href: '/guides/how-to-give-your-pet-a-pill' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Prevention Options</div>
            {[['Heartgard Plus', 'Monthly chew -- Ivermectin + pyrantel'], ['Interceptor Plus', 'Monthly chew -- Milbemycin + praziquantel'], ['Sentinel Spectrum', 'Monthly -- Adds flea birth control'], ['Revolution Plus', 'Monthly topical -- Selamectin'], ['ProHeart 12', 'Annual injection -- Moxidectin']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Health Hub', href: '/health' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Find a Vet', href: '/find-a-vet' }, { label: 'How to Give Your Pet a Pill', href: '/guides/how-to-give-your-pet-a-pill' }]} />

                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-10-07T00:00:00Z" reviewedBy="Editorial team" />
          <LastUpdated date="2026-10-13" />
          <div className="rounded-lg border-l-4 border-brand-primary bg-brand-surface p-5 my-6" data-testid="short-answer">
            <h2 className="font-display text-lg font-bold mb-2">The short answer</h2>
            <p className="text-base leading-relaxed text-brand-text-mid m-0">
              Heartworm is spread by mosquitoes and has been found in all 50 states. The American Heartworm Society says to &quot;think 12&quot;: test your dog every 12 months and give a vet-prescribed preventive 12 months a year, starting puppies by 8 weeks of age. Missed doses mean restarting prevention right away and retesting 6 months later (<a href="https://www.heartwormsociety.org/pet-owner-resources/heartworm-basics" className="text-brand-primary hover:underline">AHS</a>). Melarsomine is the only FDA-approved drug that kills adult heartworms in dogs. Treatment is costly and risky, so prevention is the best treatment (<a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/keep-worms-out-your-pets-heart-facts-about-heartworm-disease" className="text-brand-primary hover:underline">FDA</a>).
            </p>
          </div>

          <DropCap>Dirofilaria immitis requires the mosquito as an intermediate host. An infected dog has microfilariae (larval heartworms) circulating in the blood -- a mosquito biting this dog ingests microfilariae that develop through larval stages inside the mosquito over 10 to 14 days (FDA). When this mosquito bites another dog, it deposits infective larvae (L3) into the skin. These larvae mature over about 6 to 7 months (FDA), molt through additional larval stages, and eventually reach the heart and pulmonary arteries as adult worms. Adult worms cause disease; the antigen test detects proteins from adult female worms. Standing water near the house is how that mosquito finds a puddle. An adjustable aluminum downspout extender is how roof runoff is carried away from the foundation instead of pooling at the downspout — it is not a 14-inch manual reel lawn mower, not mosquito dunks, and it is not a Heartgard chew. A downspout does not diagnose heartworm and it does not replace year-round prevention prescribed by a veterinarian.</DropCap>

          <CalloutBox variant="warning" title="Strict rest during treatment">
            Once melarsomine is administered, dying worms can lodge in pulmonary arteries and cause life-threatening thromboembolism -- exercise dramatically raises this risk. The dog must be leash-restricted (no running, no playing, crate rest for high-energy dogs) for the whole treatment period your vet sets (AHS). A heavy-gauge 48-inch dog crate is how that crate rest stays a crate instead of a guessed hallway — it is not a double-door wire dog crate and it is not a soft-sided crate. A 2-foot nylon traffic lead is how outdoor potty stays a short leash instead of a run — it is not a seat-belt tether and it is not a long-line. This is not optional; non-compliance kills dogs every year. The crate and lead do not replace the veterinarian who stages the infection and administers melarsomine.
          </CalloutBox>

          <h2>Annual Testing -- Required Even on Prevention</h2>
          <p>A 2026 US clinic-transaction study in Parasites & Vectors put year-round prevention at about $183 and average melarsomine treatment at $1,457, with $1,124 of that tied directly to treatment. A high-volume outpatient clinic reported $225–$614 per dog (ASPCA Pro, on the Emancipet protocol). Typical US range, checked October 2026; varies by clinic and region. dated 2026-10-07. How that prevention-versus-treatment gap sits with the rest of a year of bills is in the <a href="/guides/cost-of-veterinary-care">cost of veterinary care</a> guide. The <a href="/tools/pet-insurance-worth-it-calculator">worth-it calculator</a> turns a premium into the eligible-cost level where a policy pays for itself. It does not use these clinic figures as a quote.</p>
          <p>Annual heartworm antigen testing is required for all dogs, even those on year-round prevention. The reasons: no preventive is 100% effective -- a dog that vomited a dose, was undertreated due to weight change, or encountered a preventive-resistant strain may have been infected despite preventive use. Starting a new dog on prevention without testing first risks treating an already-infected dog with macrocyclic lactone preventives, which can cause a severe microfilarial reaction. FDA labeling makes heartworm preventives prescription-only, and vets typically test before prescribing (AHS); the FDA and AHS both recommend testing every 12 months.</p>

          <PullQuote
            variant="inline"
            quote="No preventive is 100% effective -- a dog that vomited a dose, was undertreated due to weight change, or encountered a preventive-resistant strain may have been infected despite preventive use."
            attribution="Vets.co Editorial"
          />

          <h2>Clinical Signs by Stage</h2>
          <p><strong>Class 1 (mild):</strong> No clinical signs or mild occasional cough. Adult worms present in pulmonary arteries. Often detected on annual testing before the owner notices any signs.</p>
          <p><strong>Class 2 (moderate):</strong> Mild to moderate cough, exercise intolerance. Radiographic changes in the lungs and pulmonary arteries visible on chest X-ray. Heartworm caval syndrome risk increases.</p>
          <p><strong>Class 3 (severe):</strong> Severe disease -- significant cough, exercise intolerance, right-sided heart failure, hemoptysis (coughing blood). Radiographic changes severe. Pre-treatment stabilization required before melarsomine can be administered.</p>
          <p><strong>Class 4 -- Caval syndrome:</strong> Massive worm burden physically obstructing the right heart and vena cava. Surgical extraction of worms is required before medical treatment -- these dogs are in cardiovascular collapse.</p>

          <h2>Treatment Protocol</h2>
          <p>The American Heartworm Society (AHS) "slow kill" protocol -- macrocyclic lactone prevention alone to kill microfilariae while adult worms slowly die -- is no longer recommended as primary treatment. The AHS says long-term preventive alone is not recommended as an alternative to melarsomine because heart and lung damage continues the longer adult worms are present.</p>
          <p>The AHS protocol gives a heartworm preventive for 2 months before melarsomine, then three separate melarsomine injections, alongside other medications such as doxycycline and with strict exercise restriction throughout. Melarsomine (Immiticide, Diroban) is the only FDA-approved drug to kill adult heartworms in dogs (FDA). A heartworm test about 9 months after treatment confirms the worms are gone (AHS). Pre-treatment stabilization with prednisone reduces pulmonary inflammation from dying worms.</p>

          <CalloutBox variant="evidence" title="AHS treatment protocol recommendation">
            The American Heartworm Society recommends the three-dose melarsomine protocol combined with doxycycline as the evidence-based standard for treating heartworm-positive dogs. The previous "slow kill" approach using macrocyclic lactone prevention alone is not recommended as an alternative because heart and lung damage continues while adult worms survive.
          </CalloutBox>

          <p>The most serious treatment complication: pulmonary thromboembolism from dead worms obstructing pulmonary blood flow -- exercise increases this risk dramatically, which is why strict rest is medically mandatory, not a preference. The crate, traffic lead, and downspout extender are household consistency tools. They do not replace the veterinarian who chooses the protocol, and they are not Heartgard, Interceptor, Sentinel, Revolution, ProHeart, or melarsomine buttons.</p>

          <h2 id="kit">Supplies named on this page</h2>
          <p>
            Keep these on hand: a heavy-gauge 48-inch dog crate so an 8-week treatment rest is a crate, a 2-foot nylon traffic lead so outdoor potty stays leash-restricted, and an adjustable aluminum downspout extender so roof runoff does not pool into a mosquito breeding puddle. These are educational home-care and monitoring tools, not a ranked product list, not a substitute for veterinary care, and not a treatment for heartworm. Heartgard, Interceptor, Sentinel, Revolution, ProHeart, ivermectin, milbemycin, moxidectin, and melarsomine are clinic prescriptions, not product links. </p>

          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/heavy+gauge+48+inch+dog+crate?s=health-heartworm-in-dogs", "/go/amazon-brand/2+foot+nylon+traffic+lead?s=health-heartworm-in-dogs", "/go/amazon-brand/adjustable+aluminum+downspout+extender?s=health-heartworm-in-dogs"]} />

          {/* Shop note — live amazon-brand search buttons
              (heavy-gauge 48-inch dog crate /
              2-foot nylon traffic lead /
              adjustable aluminum downspout extender).
              These are educational home-care /
              monitoring / lifestyle tools, not a
              ranked product list, not a substitute
              for veterinary care, no Rx / Heartgard /
              Interceptor / Sentinel / Revolution /
              ProHeart / melarsomine / ivermectin
              product page buttons.
              ShopCtas hides empty Chewy; never href="#"
              or an empty link. Amazon searches only —
              unused vs #1086
              wide+rim+stainless+cat+water+bowl /
              electric+pet+food+warming+plate /
              high+sided+jumbo+cat+litter+box, #1085
              digital+pet+glucose+log+notebook /
              insulated+pet+water+bowl /
              airtight+locking+pet+food+bin, #1084
              wall+mounted+magnetic+monthly+planner /
              waterproof+rear+seat+hammock /
              folding+four+wheel+dog+stroller, #1083
              14+inch+manual+reel+lawn+mower /
              zippered+waterproof+dog+duvet+cover /
              handheld+led+magnifying+glass, #1082
              large+platform+digital+bathroom+scale /
              quilted+dog+winter+coat /
              weekly+pill+organizer+with+alarms, #1081
              sterile+saline+eye+wash /
              padded+elizabethan+collar+dog /
              dog+blind+halo+harness, #1080
              letter+size+plastic+file+box /
              plug+in+heated+pet+mat /
              battery+motion+sensor+night+light,
              #1079
              elevated+mesh+dog+cot /
              clear+adhesive+non+slip+stair+treads /
              hardcover+weekly+appointment+planner,
              #1078–#1071
              pitcher / lounge / notebook /
              carafe / saucepan / memo-pad /
              toothbrush-kit / VOHC-chews /
              water-additive / egg-crate-pad /
              pet-steps / floor-scale / muzzle /
              underpads / flashlight / crate /
              kennel-spray / second-hand-clock /
              tick-hook / flea-comb / ID-card /
              expanding-file / urine-cup /
              12-hour-timer,
              dog.com heartworm-prevention
              mosquito+dunks /
              monthly+pill+organizer /
              soft+sided+vet+visit+carrier.
              Heartgard, Interceptor, Sentinel,
              Revolution, ProHeart, ivermectin,
              milbemycin, moxidectin, and
              melarsomine are not shoppable buttons. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/heavy+gauge+48+inch+dog+crate?s=health-heartworm-in-dogs"
                amazonLabel="Browse heavy-gauge 48-inch dog crates on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/2+foot+nylon+traffic+lead?s=health-heartworm-in-dogs"
                amazonLabel="Browse 2-foot nylon traffic leads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/adjustable+aluminum+downspout+extender?s=health-heartworm-in-dogs"
                amazonLabel="Browse adjustable aluminum downspout extenders on Amazon →"
              />
          </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
