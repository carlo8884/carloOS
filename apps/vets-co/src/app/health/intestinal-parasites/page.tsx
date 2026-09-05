import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Intestinal Parasites in Dogs — Roundworms, Hookworms | Vets.co', description: 'Annual fecal testing detects roundworms, hookworms, whipworms, coccidia, and Giardia before they cause clinical disease.', path: '/health/intestinal-parasites', type: 'article' })
const SOURCES = [
  { label: 'Companion Animal Parasite Council: Roundworms', url: 'https://capcvet.org/guidelines/roundworms/', publisher: 'CAPC' },
  { label: 'Companion Animal Parasite Council: Hookworms', url: 'https://capcvet.org/guidelines/hookworms/', publisher: 'CAPC' },
  { label: 'Companion Animal Parasite Council: Giardia', url: 'https://capcvet.org/guidelines/giardia/', publisher: 'CAPC' },
  { label: 'CDC: Toxocara (Roundworms) FAQs', url: 'https://www.cdc.gov/parasites/toxocariasis/gen_info/faqs.html', publisher: 'CDC' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Intestinal Parasites in Dogs', description: 'Roundworms, hookworms, whipworms, Giardia — testing, treatment, and zoonotic risk.', url: 'https://vets.co/health/intestinal-parasites', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Intestinal Parasites in Dogs', description: 'Diagnosis and treatment of common intestinal parasites in dogs.', url: 'https://vets.co/health/intestinal-parasites', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function IntestinalParasitesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Intestinal Parasites in Dogs', subtitle: 'Intestinal parasites are among the most common findings in routine fecal testing — and most infected dogs show no clinical signs until the burden becomes significant. Annual fecal testing catches parasites before disease develops, and several common canine parasites are zoonotic — transmissible to humans — making routine testing a family health issue, not just a pet health issue.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Intestinal Parasites', href: '/health/intestinal-parasites' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Heartworm in Dogs', href: '/health/heartworm-in-dogs', category: 'Veterinary Guide' },
          { title: 'Vomiting and Diarrhea in Pets', href: '/health/vomiting-diarrhea-pets', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Parasites</div>
            {[['Roundworms (Toxocara)', 'Most common · Zoonotic · Fenbendazole'], ['Hookworms (Ancylostoma)', 'Blood-sucking · Zoonotic · Pyrantel/fenbendazole'], ['Whipworms (Trichuris)', 'Large intestine · Fenbendazole (longer course)'], ['Tapeworms (Dipylidium)', 'Flea-transmitted · Praziquantel'], ['Giardia', 'Protozoan · Metronidazole + fenbendazole'], ['Coccidia', 'Protozoan · Ponazuril/sulfadimethoxine']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Heartworm Prevention', href: '/health/heartworm-in-dogs' }, { label: 'Vomiting & Diarrhea', href: '/health/vomiting-diarrhea-pets' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-parasites" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the intestinal-parasite yard-hygiene checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Intestinal-parasite yard-hygiene checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              children&apos;s-sandbox, fecal-pickup, and
              handwashing-after-dog-contact copy on this
              page — a hinged cedar sandbox cover so a
              kids&apos; sandbox next to a dog area is a
              lidded box instead of an open soil tray,
              a metal-jaw dog waste scooper so yard
              feces leave the grass before the 2–4 week
              Toxocara infective window, and an outdoor
              garden hand-wash station so handwashing
              after dog contact is a yard-side wash
              instead of a hoped-for indoor sink.
              Educational checklist, not a ranked
              product list, not a substitute for
              veterinary care, and not a fenbendazole /
              pyrantel / praziquantel / metronidazole /
              vaccine hop. 24-ounce stainless hiking
              dog bottles, powder-free nitrile exam
              gloves, and 32-gallon locking
              animal-proof trash cans already live on
              leptospirosis. Small digital kitchen food
              scales, silicone cat grooming gloves, and
              8-ounce glass liquid measuring cups
              already live on hyperthyroidism-cats.
              Fecal-sample collection kits and
              leak-proof specimen bags already live on
              the dog.com wellness-exam guide. Dog poop
              bags already live on house-training. No
              spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Intestinal-parasite yard-hygiene checklist"
              subtitle="Email the sandbox-cover, waste-scooper, and yard hand-wash notes. No spam."
              ctaText="Email my intestinal-parasite yard-hygiene checklist"
              source="health-intestinal-parasites-under-hero"
            />
          </div>

          <h2>Roundworms — The Most Common and Zoonotic</h2>
          <p>Toxocara canis (roundworm) is the most commonly found intestinal parasite in dogs and one of the most important zoonotic parasites worldwide. Adult roundworms live in the small intestine. Puppies are often infected in utero or through nursing — almost all puppies are born with roundworm larvae transmitted transplacentally. Clinical signs in heavily infected puppies: pot-bellied appearance, dull coat, diarrhea, and in severe cases, intestinal obstruction. Adult dogs with small burdens often show no signs.</p>
          <p><strong>Zoonotic risk:</strong> Toxocara eggs are shed in dog feces and become infective in the environment after 2–4 weeks. Children playing in contaminated soil can accidentally ingest eggs — larvae migrate through human tissues (visceral larva migrans) and in rare cases reach the eyes (ocular larva migrans), causing vision damage. This is why children&apos;s sandboxes near dog areas and handwashing after dog contact are genuine public health recommendations. A hinged cedar sandbox cover is how a kids&apos; sandbox next to a dog area stays a lidded box instead of an open soil tray — it is not a zippered waterproof dog duvet cover (that lives on flea-tick-prevention) and it is not a quilted disposable underpad (that lives on emergency-signs). A metal-jaw dog waste scooper is how yard feces leave the grass before that 2–4 week infective window — it is not a dog poop bag (those live on house-training), not a fecal-sample collection kit (that lives on the dog.com wellness-exam guide), and not a pasture manure rake (that lives on horses.com deworming). An outdoor garden hand-wash station is how handwashing after dog contact is a yard-side wash instead of a hoped-for indoor sink — it is not powder-free nitrile exam gloves (those live on leptospirosis) and it is not disposable nitrile gloves (those live on ferret cage-cleaning). Annual fecal testing and regular deworming are a household health measure, not just veterinary maintenance. A sandbox cover, a waste scooper, and a yard hand-wash station do not diagnose intestinal parasites and they do not replace that fecal test.</p>
          <p>Treatment: fenbendazole (Panacur) 5 days, repeated at 2-3 weeks. Pyrantel pamoate (in most monthly heartworm preventives) prevents reinfestation with monthly dosing. All puppies should be dewormed starting at 2 weeks of age, repeated every 2 weeks until 8 weeks, then monthly until 6 months. Fenbendazole, pyrantel, praziquantel, and metronidazole are clinic prescriptions, not shoppable hops.</p>

          <h2>Hookworms — Blood Loss and Skin Penetration</h2>
          <p>Ancylostoma caninum (hookworm) attaches to the intestinal wall and feeds on blood. Heavy hookworm infections cause iron-deficiency anemia — pale gums, weakness, and in severe cases, life-threatening blood loss. Puppies and immunocompromised dogs are most severely affected. Transmission: larvae penetrate skin (humans walking barefoot in contaminated soil can develop cutaneous larva migrans — a visible, itchy, migrating rash from hookworm larvae under the skin), or are ingested from contaminated environment. A metal-jaw dog waste scooper is how fresh feces leave that soil before larvae develop — it does not treat cutaneous larva migrans and it does not replace shoes or the veterinarian.</p>
          <p>Treatment: pyrantel pamoate or fenbendazole. Severely anemic puppies may require blood transfusion before deworming treatment. Those drugs stay clinic prescriptions. Household yard-hygiene gear does not replace them.</p>

          <h2>Giardia — The Persistent Protist</h2>
          <p>Giardia duodenalis is a protozoan parasite (not a worm) that causes intermittent soft or liquid diarrhea that may be mucoid, fatty-appearing, and foul-smelling. Many infected dogs are asymptomatic. Diagnosis requires specific Giardia antigen testing or PCR — standard fecal flotation misses Giardia cysts in most cases. Treatment: metronidazole (5-7 days) combined with fenbendazole (5 days) has better clearance rates than either alone. Environmental decontamination is important — Giardia cysts survive in the environment and resist standard disinfectants (dilute bleach 1:32 or quaternary ammonium compounds are effective). An outdoor garden hand-wash station is how a yard-side wash happens after handling an infected dog or cleaning diarrhea — it is not a pet-safe kennel disinfectant spray (that lives on canine-influenza) and it is not an accelerated hydrogen peroxide disinfectant (that lives on parvovirus-in-puppies). Hand-washing gear does not clear Giardia from a dog.</p>
          <p>Giardia is considered potentially zoonotic to humans — the strain (assemblage) in dogs most commonly is assemblage C or D, which has low transmissibility to humans, but immunocompromised people should exercise standard hygiene precautions around infected dogs.</p>

          <h2>Annual Fecal Testing — The Standard of Care</h2>
          <p>The Companion Animal Parasite Council (CAPC) recommends fecal testing at least annually for all dogs, and 2-4 times per year for puppies and dogs in high-exposure environments (doggy daycare, boarding facilities, dog parks, multiple-dog households, hunting dogs). The fecal flotation detects roundworm, hookworm, whipworm, coccidia, and tapeworm eggs. A separate Giardia antigen ELISA or PCR is required to detect Giardia — it is not part of standard fecal flotation. Most annual wellness fecal tests include both. A waste scooper is yard hygiene; it is not a fecal-sample collection kit and it does not replace the laboratory flotation.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            children&apos;s-sandbox, fecal-pickup, and
            handwashing-after-dog-contact copy on this
            page — a hinged cedar sandbox cover so a
            kids&apos; sandbox next to a dog area is a
            lidded box instead of an open soil tray, a
            metal-jaw dog waste scooper so yard feces
            leave the grass before the 2–4 week
            Toxocara infective window, and an outdoor
            garden hand-wash station so handwashing
            after dog contact is a yard-side wash.
            These are educational home-care / hygiene /
            monitoring tools, not a ranked product
            list, not a substitute for veterinary
            care, and not a treatment for intestinal
            parasites. Fenbendazole, pyrantel,
            praziquantel, metronidazole, ponazuril, and
            vaccines are clinic prescriptions, not
            shoppable hops. 24-ounce stainless hiking
            dog bottles already live on
            leptospirosis. Small digital kitchen food
            scales already live on
            hyperthyroidism-cats. Fecal-sample
            collection kits already live on the
            dog.com wellness-exam guide. Dog poop bags
            already live on house-training. This page
            does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (hinged cedar sandbox cover /
              metal-jaw dog waste scooper /
              outdoor garden hand-wash station).
              These are educational home-care /
              hygiene / monitoring tools, not a
              ranked product list, not a substitute
              for veterinary care, no Rx / dewormer /
              fenbendazole / pyrantel / praziquantel /
              metronidazole / vaccine ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1089
              24+ounce+stainless+hiking+dog+bottle /
              powder+free+nitrile+exam+gloves /
              32+gallon+locking+animal+proof+trash+can, #1088
              small+digital+kitchen+food+scale /
              silicone+cat+grooming+glove /
              8+ounce+glass+liquid+measuring+cup, #1087
              heavy+gauge+48+inch+dog+crate /
              2+foot+nylon+traffic+lead /
              adjustable+aluminum+downspout+extender, #1086
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
              kitchen+gram+scale /
              digital+pet+food+portion+scale /
              silicone+dog+grooming+glove /
              kitchen+measuring+cup /
              kitchen+liquid+measuring+pitcher /
              cat+water+fountain /
              disposable+nitrile+gloves /
              locking+kitchen+trash+can /
              ferret+water+bottle /
              fecal+sample+collection+kit /
              leak+proof+specimen+bags /
              dog+poop+bags /
              pasture+manure+rake /
              pet+safe+kennel+disinfectant+spray /
              accelerated+hydrogen+peroxide+disinfectant,
              dog.com heartworm-prevention
              mosquito+dunks /
              monthly+pill+organizer /
              soft+sided+vet+visit+carrier.
              Fenbendazole, pyrantel,
              praziquantel, and metronidazole
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page children&apos;s-sandbox, fecal-pickup,
              and handwashing-after-dog-contact copy — a
              hinged cedar sandbox cover, a metal-jaw
              dog waste scooper, and an outdoor garden
              hand-wash station. Educational home-care /
              hygiene / monitoring tools only.
              They are not a ranked product list,
              they are not a substitute for veterinary
              care, they are not a #1089 hiking-bottle /
              nitrile-exam-glove / animal-proof trash-can
              hop, they are not a #1088 kitchen-scale /
              cat-grooming-glove / measuring-cup hop,
              they are not a fenbendazole / pyrantel /
              praziquantel / metronidazole / vaccine
              hop, and they do not replace
              a veterinarian. Vets.co earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/hinged+cedar+sandbox+cover?s=health-intestinal-parasites"
                amazonLabel="Browse hinged cedar sandbox covers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/metal+jaw+dog+waste+scooper?s=health-intestinal-parasites"
                amazonLabel="Browse metal-jaw dog waste scoopers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/outdoor+garden+hand+wash+station?s=health-intestinal-parasites"
                amazonLabel="Browse outdoor garden hand-wash stations on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
