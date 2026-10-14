import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, FAQAccordion, CalloutBox, ArticleLayout, CrossPortfolioCard, RelatedLinks, ShopCtas, LastUpdated } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Intestinal Parasites in Dogs — Roundworms, Hookworms | Vets.co', description: 'Regular fecal testing detects roundworms, hookworms, whipworms, coccidia, and Giardia before they cause clinical disease.', path: '/health/intestinal-parasites', type: 'article' })
const SOURCES = [
  { label: 'Companion Animal Parasite Council: Ascarid (roundworm) guidelines', url: 'https://capcvet.org/guidelines/ascarid/', publisher: 'CAPC' },
  { label: 'Companion Animal Parasite Council: Hookworms', url: 'https://capcvet.org/guidelines/hookworms/', publisher: 'CAPC' },
  { label: 'Companion Animal Parasite Council: Giardia', url: 'https://capcvet.org/guidelines/giardia/', publisher: 'CAPC' },
  { label: 'CDC: About Toxocariasis', url: 'https://www.cdc.gov/toxocariasis/about/index.html', publisher: 'CDC' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Intestinal Parasites in Dogs', description: 'Roundworms, hookworms, whipworms, Giardia — testing, treatment, and zoonotic risk.', url: 'https://vets.co/health/intestinal-parasites', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-13T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Intestinal Parasites in Dogs', description: 'Diagnosis and treatment of common intestinal parasites in dogs.', url: 'https://vets.co/health/intestinal-parasites', authorName: 'Vets.co Editorial', lastReviewed: '2026-10-13' })
const combined = combineSchemas(schema, med)
const FAQS = [
  {
    "question": "How often should my dog have a fecal test?",
    "answer": "CAPC recommends testing for intestinal parasites at least four times in the first year of life and at least two times per year in adult dogs, depending on health and lifestyle."
  },
  {
    "question": "When should puppies be dewormed?",
    "answer": "CAPC advises deworming puppies starting at 2 weeks of age and repeating every 2 weeks until regular broad-spectrum parasite control begins. Nursing mothers should be treated at the same time as their litters."
  },
  {
    "question": "Can I catch worms from my dog?",
    "answer": "Some can spread to people. CAPC says Toxocara roundworm infection is most common in children who swallow eggs from contaminated soil, and animal hookworms are the most common cause of cutaneous larva migrans, itchy winding skin lesions. Prompt removal of feces and keeping dogs on parasite control reduce the risk."
  },
  {
    "question": "What are the signs of Giardia in dogs?",
    "answer": "Per CAPC, most Giardia infections cause no signs. When signs occur they include diarrhea that may be sudden, intermittent, or chronic, sometimes with gas, vomiting, or mucus in the stool, and in severe cases lethargy, poor appetite, and weight loss. CAPC recommends bathing the dog on the last day of treatment and removing feces daily."
  }
]
export default function IntestinalParasitesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Intestinal Parasites in Dogs', subtitle: 'Intestinal parasites are among the most common findings in routine fecal testing — and most infected dogs show no clinical signs until the burden becomes significant. Routine fecal testing catches parasites before disease develops, and several common canine parasites are zoonotic — transmissible to humans — making routine testing a family health issue, not just a pet health issue.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Intestinal Parasites', href: '/health/intestinal-parasites' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Heartworm in Dogs', href: '/health/heartworm-in-dogs', category: 'Veterinary Guide' },
          { title: 'Vomiting and Diarrhea in Pets', href: '/health/vomiting-diarrhea-pets', category: 'Veterinary Guide' },
          { title: 'How to Give Your Pet a Pill', href: '/guides/how-to-give-your-pet-a-pill' },
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
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Heartworm Prevention', href: '/health/heartworm-in-dogs' }, { label: 'Vomiting & Diarrhea', href: '/health/vomiting-diarrhea-pets' }, { label: 'How to Give Your Pet a Pill', href: '/guides/how-to-give-your-pet-a-pill' }]} />

                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <LastUpdated date="2026-10-13" />

          <CalloutBox variant="info" title="Short answer">
            <p>Many dogs with intestinal parasites show no signs, so testing matters. The Companion Animal Parasite Council (CAPC) recommends fecal testing at least four times in a puppy's first year and at least twice a year in adults, deworming puppies from 2 weeks of age every 2 weeks, and year-round broad-spectrum parasite control for adult dogs. Pick up feces promptly: roundworms and hookworms can infect people, especially children. Source: <a href="https://capcvet.org/guidelines/ascarid/">Companion Animal Parasite Council</a>.</p>
          </CalloutBox>

          <h2>Roundworms — The Most Common and Zoonotic</h2>
          <p>Toxocara canis (roundworm) is the most commonly found intestinal parasite in dogs and one of the most important zoonotic parasites worldwide. Adult roundworms live in the small intestine. Puppies are often infected in utero or through nursing — CAPC advises vets to assume essentially every pup is likely to harbor developing roundworms. Clinical signs in heavily infected puppies: pot-bellied appearance, dull coat, diarrhea, and in severe cases, intestinal obstruction. Adult dogs with small burdens often show no signs.</p>
          <p><strong>Zoonotic risk:</strong> Toxocara eggs are shed in dog feces and usually need 2 to 4 weeks in the environment to become infective, then can stay infective for years (CAPC). Children playing in contaminated soil can accidentally ingest eggs — larvae migrate through human tissues (visceral larva migrans) and in rare cases reach the eyes (ocular larva migrans), causing vision damage. This is why children&apos;s sandboxes near dog areas and handwashing after dog contact are genuine public health recommendations. A hinged cedar sandbox cover is how a kids&apos; sandbox next to a dog area stays a lidded box instead of an open soil tray — it is not a zippered waterproof dog duvet cover and it is not a quilted disposable underpad. A metal-jaw dog waste scooper is how yard feces leave the grass before that 2–4 week infective window — it is not a dog poop bag, not a fecal-sample collection kit, and not a pasture manure rake. An outdoor garden hand-wash station is how handwashing after dog contact is a yard-side wash instead of a hoped-for indoor sink — it is not powder-free nitrile exam gloves and it is not disposable nitrile gloves. Routine fecal testing and regular deworming are a household health measure, not just veterinary maintenance. A sandbox cover, a waste scooper, and a yard hand-wash station do not diagnose intestinal parasites and they do not replace that fecal test.</p>
          <p>Treatment: your vet chooses the dewormer and schedule. CAPC advises deworming puppies from 2 weeks of age, repeating every 2 weeks until regular broad-spectrum parasite control begins, and year-round broad-spectrum control for adult dogs. Fenbendazole, pyrantel, praziquantel, and metronidazole are clinic prescriptions, not product links.</p>

          <h2>Hookworms — Blood Loss and Skin Penetration</h2>
          <p>Ancylostoma caninum (hookworm) attaches to the intestinal wall and feeds on blood. Heavy hookworm infections cause iron-deficiency anemia — pale gums, weakness, and in severe cases, life-threatening blood loss. Puppies and immunocompromised dogs are most severely affected. Transmission: larvae penetrate skin (humans walking barefoot in contaminated soil can develop cutaneous larva migrans — a visible, itchy, migrating rash from hookworm larvae under the skin), or are ingested from contaminated environment. A metal-jaw dog waste scooper is how fresh feces leave that soil before larvae develop — it does not treat cutaneous larva migrans and it does not replace shoes or the veterinarian.</p>
          <p>Treatment: pyrantel pamoate or fenbendazole. Severely anemic puppies may require blood transfusion before deworming treatment. Those drugs stay clinic prescriptions. Household yard-hygiene gear does not replace them.</p>

          <h2>Giardia — The Persistent Protist</h2>
          <p>Giardia duodenalis is a protozoan parasite (not a worm) that causes intermittent soft or liquid diarrhea that may be mucoid, fatty-appearing, and foul-smelling. Many infected dogs are asymptomatic. For dogs with diarrhea, CAPC recommends combining a direct smear, fecal flotation with centrifugation and a sensitive Giardia ELISA or PCR, sometimes repeated over several days. Cysts are infective as soon as they are passed. If medication is needed, CAPC lists metronidazole (most commonly used, usually 5–8 days) and fenbendazole (3–5 days); your vet chooses. Ask your vet how to clean the yard and bedding. An outdoor garden hand-wash station is how a yard-side wash happens after handling an infected dog or cleaning diarrhea — it is not a pet-safe kennel disinfectant spray and it is not an accelerated hydrogen peroxide disinfectant. Hand-washing gear does not clear Giardia from a dog.</p>
          <p>Giardia is considered potentially zoonotic to humans — the strain (assemblage) in dogs most commonly is assemblage C or D, which has low transmissibility to humans, but immunocompromised people should exercise standard hygiene precautions around infected dogs.</p>

          <h2>Routine Fecal Testing — The Standard of Care</h2>
          <p>The <a href="https://capcvet.org/guidelines/ascarid/">Companion Animal Parasite Council (CAPC)</a> recommends testing for intestinal parasites at least four times in a puppy&apos;s first year and at least two times per year in adult dogs, depending on health and lifestyle. The fecal flotation detects roundworm, hookworm, whipworm, coccidia, and tapeworm eggs. For Giardia in dogs with diarrhea, CAPC recommends adding a Giardia ELISA or PCR to the flotation. Many wellness fecal panels include both. A waste scooper is yard hygiene; it is not a fecal-sample collection kit and it does not replace the laboratory flotation.</p>

          <h2 id="kit">Supplies named on this page</h2>
          <p>
            Keep these on hand: a hinged cedar sandbox cover so a kids&apos; sandbox next to a dog area is a lidded box instead of an open soil tray, a metal-jaw dog waste scooper so yard feces leave the grass before the 2–4 week Toxocara infective window, and an outdoor garden hand-wash station so handwashing after dog contact is a yard-side wash. These are educational home-care / hygiene / monitoring tools, not a ranked product list, not a substitute for veterinary care, and not a treatment for intestinal parasites. Fenbendazole, pyrantel, praziquantel, metronidazole, ponazuril, and vaccines are clinic prescriptions, not product links. </p>

          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/hinged+cedar+sandbox+cover?s=health-intestinal-parasites", "/go/amazon-brand/metal+jaw+dog+waste+scooper?s=health-intestinal-parasites", "/go/amazon-brand/outdoor+garden+hand+wash+station?s=health-intestinal-parasites"]} />

          {/* Shop note — live amazon-brand search buttons
              (hinged cedar sandbox cover /
              metal-jaw dog waste scooper /
              outdoor garden hand-wash station).
              These are educational home-care /
              hygiene / monitoring tools, not a
              ranked product list, not a substitute
              for veterinary care, no Rx / dewormer /
              fenbendazole / pyrantel / praziquantel /
              metronidazole / vaccine product page buttons.
              ShopCtas hides empty Chewy; never href="#"
              or an empty link. Amazon searches only —
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
              are not shoppable buttons. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
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
          <h2 id="faq">Frequently asked questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />


          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
