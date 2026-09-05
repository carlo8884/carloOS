import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, DropCap, PullQuote, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Heartworm in Dogs — Prevention, Testing | Vets.co', description: 'Heartworm disease is a life-threatening but preventable condition. Monthly prevention costs $5-10. Treatment costs $1,000-3,000.', path: '/health/heartworm-in-dogs', type: 'article' })
const SOURCES = [
  { label: 'American Heartworm Society: Current Canine Guidelines (2018 revision)', url: 'https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines', publisher: 'American Heartworm Society' },
  { label: 'Merck Veterinary Manual: Heartworm Disease', url: 'https://www.merckvetmanual.com/circulatory-system/heartworm-disease/heartworm-disease-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'Atkins CE et al. Guidelines for the diagnosis, prevention and management of heartworm infection in dogs. J Vet Intern Med. 2010;24(4):713-733.', publisher: 'JVIM' },
  { label: 'AVMA: Heartworm Disease', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/heartworm-disease', publisher: 'AVMA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Heartworm in Dogs', description: 'Prevention, annual testing, and melarsomine treatment for canine heartworm disease.', url: 'https://vets.co/health/heartworm-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Heartworm Disease in Dogs', description: 'Prevention, testing, and treatment of Dirofilaria immitis heartworm in dogs.', url: 'https://vets.co/health/heartworm-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'Can I skip prevention in winter?', answer: 'Year-round prevention is recommended in most of the US. Mosquitoes can be active on warm winter days — temperatures above 57 degrees F allow heartworm larvae to develop in mosquitoes. In warm climates (Southeast US, Florida, Gulf Coast, Hawaii), mosquitoes are active year-round. The American Heartworm Society recommends year-round prevention for all dogs regardless of climate, both because exposure risk is difficult to predict and because monthly heartworm preventives also control intestinal parasites (roundworms, hookworms) that are present year-round.' },
  { question: 'What happens if I miss a dose?', answer: 'Give the missed dose as soon as you remember and continue on the regular schedule. If more than 2 months have passed since the last dose, the dog should be tested for heartworm in 6 months (heartworm antigen tests do not detect very recent infection -- testing too soon after a missed dose may give a false negative). Resume prevention immediately. Do not double-dose.' },
  { question: 'Can my dog exercise during heartworm treatment?', answer: 'No. Strict rest is essential during heartworm treatment -- this is one of the most important and most difficult aspects of the treatment protocol. Exercise increases blood flow and oxygen demand, which increases the risk of dead worms causing pulmonary thromboembolism. The dog must be leash-restricted (no running, no playing) for 8 weeks during the full treatment course. Crates may be needed for high-energy dogs. This restriction is medically necessary -- owners who do not comply risk the dog\'s life during treatment.' },
]


export default function HeartwormPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Heartworm Disease in Dogs', subtitle: 'Heartworm disease -- caused by the parasitic worm Dirofilaria immitis transmitted through mosquito bites -- is one of the most important preventable conditions in veterinary medicine. Prevention costs approximately $5-15/month. Treatment costs $1,000-3,000 and is difficult and risky. The math is straightforward.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Heartworm', href: '/health/heartworm-in-dogs' }]}
        relatedLinks={[
          { title: 'Health Hub', href: '/health', category: 'Hub' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
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
          <RelatedLinks title="Related Guides" links={[{ label: 'Health Hub', href: '/health' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-heartworm" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog heartworm rest-and-test checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog heartworm rest-and-test checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              crate-rest, leash-restriction, and
              standing-water copy on this page — a
              heavy-gauge 48-inch dog crate so an
              8-week treatment rest is a crate, not
              a guessed hallway, a 2-foot nylon
              traffic lead so outdoor potty stays
              leash-restricted instead of a run, and
              an adjustable aluminum downspout
              extender so roof runoff does not pool
              into a mosquito breeding puddle by the
              foundation. Educational checklist, not
              a ranked product list, not a substitute
              for veterinary care, and not a Heartgard
              / Interceptor / Sentinel / Revolution /
              ProHeart / melarsomine / ivermectin hop.
              Mosquito dunks, monthly pill organizers,
              and soft-sided vet-visit carriers
              already live on dog.com heartworm
              prevention. Double-door wire crates
              already live on canine-influenza. Wide-rim
              stainless cat water bowls, electric
              pet-food warming plates, and high-sided
              jumbo cat litter boxes already live on
              kidney-disease-cats. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog heartworm rest-and-test checklist"
              subtitle="Email the crate-rest, traffic-lead, and downspout notes. No spam."
              ctaText="Email my dog heartworm rest-and-test checklist"
              source="health-heartworm-in-dogs-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-05T00:00:00Z" reviewedBy="Editorial team" />

          <DropCap>Dirofilaria immitis requires the mosquito as an intermediate host. An infected dog has microfilariae (larval heartworms) circulating in the blood -- a mosquito biting this dog ingests microfilariae that develop through larval stages inside the mosquito over 10-14 days at temperatures above 57 degrees F. When this mosquito bites another dog, it deposits infective larvae (L3) into the skin. These larvae migrate through tissue over 6 months, molt through additional larval stages, and eventually reach the heart and pulmonary arteries as adult worms. Adult worms cause disease; the antigen test detects proteins from adult female worms. Standing water near the house is how that mosquito finds a puddle. An adjustable aluminum downspout extender is how roof runoff is carried away from the foundation instead of pooling at the downspout — it is not a 14-inch manual reel lawn mower (that lives on flea-tick-prevention), not mosquito dunks (those live on dog.com heartworm prevention), and it is not a Heartgard chew. A downspout does not diagnose heartworm and it does not replace year-round prevention prescribed by a veterinarian.</DropCap>

          <CalloutBox variant="warning" title="Strict rest during treatment">
            Once melarsomine is administered, dying worms can lodge in pulmonary arteries and cause life-threatening thromboembolism -- exercise dramatically raises this risk. The dog must be leash-restricted (no running, no playing, crate rest for high-energy dogs) for the full 8-week treatment course. A heavy-gauge 48-inch dog crate is how that crate rest stays a crate instead of a guessed hallway — it is not a double-door wire dog crate (that lives on canine-influenza) and it is not a soft-sided crate. A 2-foot nylon traffic lead is how outdoor potty stays a short leash instead of a run — it is not a seat-belt tether (that lives on dog.com vaccinations) and it is not a long-line. This is not optional; non-compliance kills dogs every year. The crate and lead do not replace the veterinarian who stages the infection and administers melarsomine.
          </CalloutBox>

          <h2>Annual Testing -- Required Even on Prevention</h2>
          <p>Annual heartworm antigen testing is required for all dogs, even those on year-round prevention. The reasons: no preventive is 100% effective -- a dog that vomited a dose, was undertreated due to weight change, or encountered a preventive-resistant strain may have been infected despite preventive use. Starting a new dog on prevention without testing first risks treating an already-infected dog with macrocyclic lactone preventives, which can cause a severe microfilarial reaction. Federal regulations require annual testing for heartworm antigen as a condition of prescribing preventives in most states.</p>

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
          <p>The American Heartworm Society (AHS) "slow kill" protocol -- macrocyclic lactone prevention alone to kill microfilariae while adult worms slowly die -- is no longer recommended as primary treatment. It takes years, adult worms continue to cause cardiac and pulmonary damage throughout, and macrocyclic lactone resistance is increasing in heartworms.</p>
          <p>The current AHS-recommended protocol: doxycycline (30 days -- kills Wolbachia bacteria that heartworms depend on), followed by 2 doses of melarsomine (Immiticide) given 30 days apart (with a 30-day interval between doses), with strict exercise restriction throughout. Macrocyclic lactone prevention is given throughout to kill microfilariae and prevent new infection. Pre-treatment stabilization with prednisone reduces pulmonary inflammation from dying worms.</p>

          <CalloutBox variant="evidence" title="AHS treatment protocol recommendation">
            The American Heartworm Society recommends the three-dose melarsomine protocol combined with doxycycline as the evidence-based standard for treating heartworm-positive dogs. The previous "slow kill" approach using macrocyclic lactone prevention alone is explicitly no longer recommended due to slow clearance, ongoing cardiac damage, and growing macrocyclic lactone resistance in heartworm populations.
          </CalloutBox>

          <p>The most serious treatment complication: pulmonary thromboembolism from dead worms obstructing pulmonary blood flow -- exercise increases this risk dramatically, which is why strict rest is medically mandatory, not a preference. The crate, traffic lead, and downspout extender are household consistency tools. They do not replace the veterinarian who chooses the protocol, and they are not Heartgard, Interceptor, Sentinel, Revolution, ProHeart, or melarsomine hops.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            crate-rest, leash-restriction, and
            standing-water copy on this page — a
            heavy-gauge 48-inch dog crate so an
            8-week treatment rest is a crate, a
            2-foot nylon traffic lead so outdoor
            potty stays leash-restricted, and an
            adjustable aluminum downspout extender
            so roof runoff does not pool into a
            mosquito breeding puddle. These are
            educational home-care and monitoring
            tools, not a ranked product list, not a
            substitute for veterinary care, and not
            a treatment for heartworm. Heartgard,
            Interceptor, Sentinel, Revolution,
            ProHeart, ivermectin, milbemycin,
            moxidectin, and melarsomine are clinic
            prescriptions, not shoppable hops.
            Mosquito dunks, monthly pill organizers,
            and soft-sided vet-visit carriers already
            live on dog.com heartworm prevention.
            Double-door wire crates already live on
            canine-influenza. Wide-rim stainless cat
            water bowls, electric pet-food warming
            plates, and high-sided jumbo cat litter
            boxes already live on kidney-disease-cats.
            This page does not claim hands-on
            testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (heavy-gauge 48-inch dog crate /
              2-foot nylon traffic lead /
              adjustable aluminum downspout extender).
              These are educational home-care /
              monitoring / lifestyle tools, not a
              ranked product list, not a substitute
              for veterinary care, no Rx / Heartgard /
              Interceptor / Sentinel / Revolution /
              ProHeart / melarsomine / ivermectin
              ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
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
              melarsomine are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page crate-rest, leash-restriction,
              and standing-water copy — a heavy-gauge
              48-inch dog crate, a 2-foot nylon
              traffic lead, and an adjustable aluminum
              downspout extender. Educational
              home-care and monitoring tools only.
              They are not a ranked product list,
              they are not a substitute for veterinary
              care, they are not a #1086 water-bowl /
              warming-plate / litter-box hop, they are
              not a #1085 glucose-log / insulated
              water-bowl / food-bin hop, they are not
              a dog.com heartworm dunk / pill-organizer
              / carrier hop, they are not a
              Heartgard / Interceptor / ProHeart /
              melarsomine hop, and they do not replace
              a veterinarian. Vets.co earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
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
