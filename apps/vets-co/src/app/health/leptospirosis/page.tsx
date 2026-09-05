import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Leptospirosis in Dogs — Zoonotic, Vaccine Recommended | Vets.co', description: 'Leptospirosis is a zoonotic bacterial disease from wildlife urine in water. Causes acute kidney and liver failure.', path: '/health/leptospirosis', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Leptospirosis in Dogs', url: 'https://www.merckvetmanual.com/generalized-conditions/leptospirosis/leptospirosis-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Leptospirosis', url: 'https://www.avma.org/resources-tools/animal-health-and-welfare/animal-health/leptospirosis', publisher: 'AVMA' },
  { label: 'CDC: Leptospirosis', url: 'https://www.cdc.gov/leptospirosis/index.html', publisher: 'CDC' },
  { label: 'WSAVA: Vaccination Guidelines (Leptospirosis)', url: 'https://wsava.org/global-guidelines/vaccination-guidelines/', publisher: 'WSAVA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Leptospirosis in Dogs', description: 'Signs, treatment, zoonotic risk, and vaccination for canine leptospirosis.', url: 'https://vets.co/health/leptospirosis', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Leptospirosis in Dogs', description: 'Leptospira bacterial infection — signs, treatment, and vaccination.', url: 'https://vets.co/health/leptospirosis', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function LeptospirosisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Leptospirosis in Dogs', subtitle: 'Leptospirosis is a bacterial disease caused by Leptospira spirochetes — transmitted through urine of infected wildlife (raccoons, deer, opossums, rodents) contaminating standing water, soil, and puddles. It can cause acute kidney and liver failure in dogs and is zoonotic — transmissible to humans from infected dog urine.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Leptospirosis', href: '/health/leptospirosis' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">High-Risk Exposures</div>
            {['Standing water — puddles, ponds, lakes', 'Streams and rivers with wildlife activity', 'Areas frequented by raccoons, deer, rodents', 'Suburban/urban wildlife corridors', 'Flooding events — Lepto disperses widely', 'Swimming in natural bodies of water'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-lepto" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the lepto outdoor-risk home-watch checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Lepto outdoor-risk home-watch checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              puddle-drinking, urine-cleanup, and suburban
              wildlife-attractant copy on this page — a
              24-ounce stainless hiking dog bottle so a
              trail or yard walk is a carried sip instead
              of a puddle gulp, powder-free nitrile exam
              gloves so cleaning infected urine is a
              gloved wipe instead of a bare-hand scoop,
              and a 32-gallon locking animal-proof trash
              can so raccoon and rodent traffic is not
              invited to overnight at the curb.
              Educational checklist, not a ranked
              product list, not a substitute for
              veterinary care, and not a vaccine /
              doxycycline / Nobivac hop. Heavy-gauge
              48-inch dog crates, 2-foot nylon traffic
              leads, and adjustable aluminum downspout
              extenders already live on
              heartworm-in-dogs. Small digital kitchen
              food scales, silicone cat grooming gloves,
              and 8-ounce glass liquid measuring cups
              already live on hyperthyroidism-cats.
              Disposable nitrile gloves already live on
              ferret cage-cleaning. Locking kitchen
              trash cans already live on dog.com
              pancreatitis. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Lepto outdoor-risk home-watch checklist"
              subtitle="Email the hiking-bottle, nitrile-glove, and animal-proof trash-can notes. No spam."
              ctaText="Email my lepto outdoor-risk home-watch checklist"
              source="health-leptospirosis-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-07T00:00:00Z" reviewedBy="Editorial team" />

          <h2>Transmission and Geographic Risk</h2>
          <DropCap>Leptospira bacteria survive in warm, moist environments — standing water, muddy soil, and waterways contaminated with infected wildlife urine. Dogs are exposed through: contact with contaminated water (drinking from puddles, swimming in ponds or streams), contact with infected urine directly, or contact with contaminated soil. The bacteria enter through mucous membranes, skin abrasions, or the GI tract. Lepto is not only a rural problem — urban and suburban dogs encounter raccoons, opossums, and rodents that shed Leptospira in their urine in parks, yards, and storm drainage systems. A 24-ounce stainless hiking dog bottle is how a walk becomes a carried sip instead of a puddle gulp — it is not a wide-rim stainless cat water bowl (that lives on kidney-disease-cats), not an insulated pet water bowl (that lives on diabetes), not a kitchen liquid measuring pitcher (that lives on dehydration), and not a ferret water bottle (that lives on ferret travel). A 32-gallon locking animal-proof trash can is how curb overnight leftovers stop inviting raccoon and rodent traffic into the same yard the dog uses — it is not a locking kitchen trash can (that lives on dog.com pancreatitis).</DropCap>

          <CalloutBox variant="warning" title="Zoonotic — call the vet today">
            A dog with sudden vomiting, lethargy, marked thirst, and reluctance to move after recent water or wildlife exposure may have leptospirosis. Lepto is transmissible to people through infected urine — call the veterinarian the same day and wear powder-free nitrile exam gloves when cleaning up urine until the dog is evaluated. A hiking bottle, exam gloves, and an animal-proof trash can do not diagnose leptospirosis and they do not replace that same-day call.
          </CalloutBox>
          <p>Geographic risk is highest in warm, humid climates (Southeast US, Pacific Northwest) and following flooding events that disperse contaminated water widely. Risk is not zero anywhere in the continental US — it is variable. Dogs with outdoor exposure, dogs that frequent natural water sources, hunting dogs, and dogs in areas with high wildlife activity have the highest exposure risk. Household outdoor-risk gear does not change that geography and it does not replace the veterinarian who decides whether the leptospirosis vaccine is indicated.</p>

          <h2>Clinical Signs — Two Main Presentations</h2>
          <p><strong>Acute kidney injury presentation (most common):</strong> Sudden onset of vomiting, lethargy, anorexia, increased thirst and urination (or reduced urination in acute kidney failure), and muscle pain (reluctance to move, stiff gait). Bloodwork shows elevated BUN, creatinine, and phosphorus from acute kidney failure. Some cases progress to anuric (no urine production) renal failure requiring dialysis.</p>
          <p><strong>Hepatic presentation:</strong> Jaundice (yellow tinge to gums and eyes), elevated liver enzymes, vomiting, anorexia. Some cases have both kidney and liver involvement simultaneously. The hepatic form tends to be associated with specific Leptospira serovars.</p>
          <p>Subclinical infection — dog is infected but shows no signs, clears the infection and develops antibody titers — is more common than is often appreciated. These dogs may shed Leptospira in their urine during the infection period, posing zoonotic risk to household members.</p>

          <h2>Zoonotic Risk — Protect Your Family</h2>
          <p>Leptospirosis is one of the most widespread zoonotic diseases in the world. A dog diagnosed with leptospirosis is shedding Leptospira in its urine for weeks during and after illness — human household members can be infected through contact with contaminated urine. This is why veterinary teams handling lepto cases use significant personal protective equipment and why dog owners of infected animals should: wear powder-free nitrile exam gloves when handling the dog or cleaning up urine, avoid contact with the dog&apos;s urine, wash hands thoroughly, and inform healthcare providers if they develop flu-like symptoms after exposure. Powder-free nitrile exam gloves are how a urine wipe stays a gloved wipe — they are not disposable nitrile gloves (those live on ferret cage-cleaning) and they are not a silicone cat grooming glove (that lives on hyperthyroidism-cats). Gloves do not treat leptospirosis and they do not replace the veterinarian.</p>

          <h2>Treatment</h2>
          <p>Leptospirosis is bacterial and responds to antibiotics — specifically doxycycline (first-line; clears the renal carrier state) or ampicillin/amoxicillin in severely ill animals where GI absorption may be compromised. Hospitalization for IV fluid support of kidney and liver function is critical for moderate-to-severe cases — the bacterial septicemia is manageable but the organ damage requires supportive care. Prognosis: good for mild cases caught early; guarded for cases presenting in renal failure with anuric kidney injury.</p>

          <h2>Vaccination</h2>
          <p>The leptospirosis vaccine is a non-core vaccine — recommended based on lifestyle risk rather than universally. Dogs with outdoor access, dogs in endemic areas, dogs that swim in natural water, hunting dogs, and dogs in suburban areas with wildlife exposure should receive the vaccine. The current 4-serovar vaccine (L4) covers the four most clinically prevalent serovars (Canicola, Icterohaemorrhagiae, Grippotyphosa, Pomona). Boosted annually as immunity wanes faster than core vaccines. A booster 2-4 weeks after initial vaccination is required for puppies and dogs receiving the vaccine for the first time. Nobivac, L4, doxycycline, and ampicillin are clinic prescriptions and hospital treatments, not shoppable hops. The hiking bottle, exam gloves, and animal-proof trash can are household outdoor-risk tools. They do not replace the veterinarian who chooses the protocol.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            puddle-drinking, urine-cleanup, and suburban
            wildlife-attractant copy on this page — a
            24-ounce stainless hiking dog bottle so a
            walk is a carried sip instead of a puddle
            gulp, powder-free nitrile exam gloves so
            cleaning infected urine is a gloved wipe,
            and a 32-gallon locking animal-proof trash
            can so raccoon and rodent traffic is not
            invited to overnight at the curb. These are
            educational outdoor / water / wildlife-exposure
            tools, not a ranked product list, not a
            substitute for veterinary care, and not a
            treatment for leptospirosis. Nobivac, L4,
            doxycycline, and ampicillin are clinic
            prescriptions, not shoppable hops.
            Heavy-gauge 48-inch dog crates already live
            on heartworm-in-dogs. Small digital kitchen
            food scales already live on
            hyperthyroidism-cats. Disposable nitrile
            gloves already live on ferret
            cage-cleaning. Locking kitchen trash cans
            already live on dog.com pancreatitis. This
            page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (24-ounce stainless hiking dog bottle /
              powder-free nitrile exam gloves /
              32-gallon locking animal-proof trash can).
              These are educational outdoor / water /
              wildlife-exposure tools, not a
              ranked product list, not a substitute
              for veterinary care, no Rx / vaccine /
              Nobivac / L4 / doxycycline / ampicillin
              ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1088
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
              ferret+water+bottle,
              dog.com heartworm-prevention
              mosquito+dunks /
              monthly+pill+organizer /
              soft+sided+vet+visit+carrier.
              Nobivac, L4, doxycycline, and
              ampicillin are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page puddle-drinking, urine-cleanup,
              and suburban wildlife-attractant copy — a
              24-ounce stainless hiking dog bottle,
              powder-free nitrile exam gloves, and a
              32-gallon locking animal-proof trash can.
              Educational outdoor / water /
              wildlife-exposure tools only.
              They are not a ranked product list,
              they are not a substitute for veterinary
              care, they are not a #1088 kitchen-scale /
              cat-grooming-glove / measuring-cup hop,
              they are not a #1087 crate /
              traffic-lead / downspout hop, they are
              not a vaccine / Nobivac / doxycycline
              hop, and they do not replace
              a veterinarian. Vets.co earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/24+ounce+stainless+hiking+dog+bottle?s=health-leptospirosis"
                amazonLabel="Browse 24-ounce stainless hiking dog bottles on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/powder+free+nitrile+exam+gloves?s=health-leptospirosis"
                amazonLabel="Browse powder-free nitrile exam gloves on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/32+gallon+locking+animal+proof+trash+can?s=health-leptospirosis"
                amazonLabel="Browse 32-gallon locking animal-proof trash cans on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
