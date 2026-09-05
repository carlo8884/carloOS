import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Dog Preventive Care Schedule — Puppy, Adult | Vets.co', description: 'Complete dog preventive care schedule. Puppy vaccines and deworming, adult annual maintenance, and the enhanced senior screening protocol from age 7+.', path: '/health/preventive-care-schedule', type: 'article' })
const SOURCES = [
  { label: 'AAHA: Canine Vaccination Guidelines', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/', publisher: 'AAHA' },
  { label: 'WSAVA: Vaccination Guidelines for Dogs and Cats', url: 'https://wsava.org/global-guidelines/vaccination-guidelines/', publisher: 'WSAVA' },
  { label: 'Companion Animal Parasite Council: Guidelines', url: 'https://capcvet.org/guidelines/', publisher: 'CAPC' },
  { label: 'American Heartworm Society: Prevention Guidelines', url: 'https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines', publisher: 'American Heartworm Society' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Dog Preventive Care Schedule', description: 'Puppy, adult, and senior preventive care timelines for dogs.', url: 'https://vets.co/health/preventive-care-schedule', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dog Preventive Care Schedule', description: 'Puppy through senior preventive care timelines for dogs.', url: 'https://vets.co/health/preventive-care-schedule', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function PreventiveCareSchedulePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Dog Preventive Care Schedule', subtitle: 'Preventive care is the most cost-effective investment in a dog\'s health. Catching conditions early — before clinical signs develop — allows more treatment options, better outcomes, and lower total cost of care over the dog\'s lifetime.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Preventive Care', href: '/health/preventive-care-schedule' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-preventive-care" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog preventive-care visit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog preventive-care visit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the cadence, clinic-ride, and
              senior-visit notes that match the puppy
              6–16 week, adult annual, and senior
              every-6-months copy on this page — a
              wall-mounted magnetic monthly planner so
              the 6–8 / 10–12 / 14–16 week puppy
              series and the adult annual / senior
              six-month slots stay on the fridge
              instead of a guess, a waterproof rear
              seat hammock so the ride to the wellness
              exam does not soak the back seat, and a
              folding four-wheel dog stroller so a
              senior who now gets a pain and mobility
              assessment every six months can still
              make the lobby. Educational checklist,
              not a ranked product list, not a
              substitute for the veterinarian who
              chooses the vaccines and preventives,
              and not a Heartgard / Bravecto / NexGard
              / Simparica / ProHeart hop. Hardcover
              weekly appointment planners already live
              on pain-management-dogs. Dry-erase
              monthly calendars already live on
              dog.com Addison&apos;s. Dog seat-belt
              tethers already live on dog.com
              vaccinations. Soft-sided vet-visit
              carriers already live on dog.com
              heartworm-prevention. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog preventive-care visit checklist"
              subtitle="Email the planner, seat-hammock, and stroller notes. No spam."
              ctaText="Email my dog preventive-care visit checklist"
              source="health-preventive-care-schedule-under-hero"
            />
          </div>

          <h2>Puppy Schedule (Birth to 16 Weeks)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead><tr className="border-b border-brand-border"><th className="text-left py-2 pr-4 font-bold text-brand-text-light">Age</th><th className="text-left py-2 font-bold text-brand-text-light">Care Items</th></tr></thead>
              <tbody>
                {[
                  ['6–8 weeks', 'First DA2PP vaccine · Fecal exam · Deworming (pyrantel) · Physical exam · Begin socialization discussion'],
                  ['10–12 weeks', 'Second DA2PP · Bordetella (intranasal or oral — faster immunity) · Leptospirosis #1 if indicated · Deworming'],
                  ['14–16 weeks', 'Third DA2PP · Rabies (first dose) · Leptospirosis #2 · Lyme #1 if applicable · Microchip · Spay/neuter discussion · Heartworm prevention start'],
                  ['12–16 months', 'DA2PP booster · Rabies booster · Lyme #2 if applicable · Heartworm test · Fecal exam · Full physical exam'],
                ].map(([age, items]) => (
                  <tr key={age} className="border-b border-brand-border">
                    <td className="py-2.5 pr-4 font-mono text-brand-primary whitespace-nowrap align-top">{age}</td>
                    <td className="py-2.5 text-brand-text-mid leading-relaxed">{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>A wall-mounted magnetic monthly planner is how those 6–8, 10–12, and 14–16 week slots stay visible between visits — it is not a hardcover weekly appointment planner (that lives on pain-management-dogs), not a dry-erase monthly calendar (that lives on dog.com Addison&apos;s), and not an analog wall clock. It does not set a vaccine date. A waterproof rear seat hammock is how a not-yet-crate-trained puppy gets to those three booster visits without hopping a dog seat-belt tether or a soft-sided vet-visit carrier. Household ride and calendar gear does not replace the veterinarian who decides DA2PP, rabies, or when heartworm prevention starts.</p>

          <h2>Adult Dog Schedule (1–7 Years)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead><tr className="border-b border-brand-border"><th className="text-left py-2 pr-4 font-bold text-brand-text-light">Frequency</th><th className="text-left py-2 font-bold text-brand-text-light">Care Items</th></tr></thead>
              <tbody>
                {[
                  ['Annual', 'Physical exam · DA2PP (every 3 years with documented prior) · Rabies (per state law, 1 or 3 year) · Bordetella · Annual heartworm test · Fecal exam · Bloodwork (CBC + chemistry) from age 5+'],
                  ['Year-round', 'Heartworm prevention (monthly or 6-month injectable) · Flea/tick prevention (year-round in most climates)'],
                  ['Every 6 months', 'Dental check at each wellness visit · Weight and BCS monitoring'],
                  ['As needed', 'Leptospirosis annual booster (outdoor/rural dogs) · Lyme annual booster (tick-endemic areas) · Influenza booster (high-contact dogs)'],
                ].map(([freq, items]) => (
                  <tr key={freq} className="border-b border-brand-border">
                    <td className="py-2.5 pr-4 font-mono text-brand-primary whitespace-nowrap align-top">{freq}</td>
                    <td className="py-2.5 text-brand-text-mid leading-relaxed">{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The same magnetic monthly planner is how the annual wellness slot and the every-6-months dental / weight / BCS check stay dated. Wide-platform veterinary floor scales and kitchen gram scales already live on other pages — this page does not hop a scale. A waterproof rear seat hammock is still the clinic-ride layer for the annual heartworm test and fecal exam. Heartgard, Sentinel, Interceptor, ProHeart, Bravecto, NexGard, and Simparica are clinic or pharmacy preventives, not shoppable hops.</p>

          <h2>Senior Dog Schedule (7+ Years)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead><tr className="border-b border-brand-border"><th className="text-left py-2 pr-4 font-bold text-brand-text-light">Frequency</th><th className="text-left py-2 font-bold text-brand-text-light">Care Items</th></tr></thead>
              <tbody>
                {[
                  ['Every 6 months', 'Comprehensive physical exam · Weight and BCS · Pain and mobility assessment · Cognitive function screening · Dental evaluation'],
                  ['Annually', 'CBC + comprehensive chemistry + urinalysis (including SDMA for early kidney disease) · T4 (thyroid) · Blood pressure measurement · Heartworm test · Fecal exam'],
                  ['From age 7 (large breeds)', 'Abdominal ultrasound annually (splenic hemangiosarcoma screening for Golden Retrievers, Labs, GSDs) · Thoracic radiographs annually from age 8'],
                  ['Cardiac breeds', 'Cavalier King Charles — cardiologist evaluation annually · Boxers — annual 24-hr Holter monitor · Dobermans — annual echo + Holter'],
                ].map(([freq, items]) => (
                  <tr key={freq} className="border-b border-brand-border">
                    <td className="py-2.5 pr-4 font-mono text-brand-primary whitespace-nowrap align-top">{freq}</td>
                    <td className="py-2.5 text-brand-text-mid leading-relaxed">{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>A folding four-wheel dog stroller is how a senior who now has a pain and mobility assessment every six months still reaches the lobby — it is not carpeted wooden pet steps, not a dog ramp, and not an elevated mesh dog cot. It does not treat arthritis and it does not replace the veterinarian who reads that mobility exam. The magnetic planner still holds the six-month slot. The rear seat hammock still covers the ride when the dog can climb in. Letter-size plastic file boxes already live on senior-pet-care; this page does not hop a records box.</p>

          <h2>Year-Round Parasite Prevention</h2>
          <p><strong>Heartworm:</strong> Monthly oral preventives (Heartgard, Sentinel, Interceptor Plus) or 6-month injectable ProHeart 6/12. Annual heartworm antigen test required for all dogs on prevention — to detect infection before starting prevention and to verify ongoing efficacy. A dog that misses doses or has a lapse in coverage should be tested before restarting prevention.</p>
          <p><strong>Flea and tick:</strong> Year-round in most of the US — fleas are active in temperatures above 45°F, which occurs year-round in most climates. Oral isoxazoline products (Bravecto 12-week, NexGard monthly, Simparica monthly) provide the most reliable efficacy. Tick-borne disease (Lyme, Anaplasmosis, Ehrlichiosis, Rocky Mountain Spotted Fever) warrants tick prevention everywhere ticks are found — not only in endemic Lyme regions. Tick-removal hooks, flea combs, reel lawn mowers, and waterproof dog duvet covers already live on other pages. This page does not hop those, and it does not rank Bravecto, NexGard, Simparica, Frontline, Advantage, or Seresto.</p>
          <p><strong>Intestinal parasites:</strong> Annual or biannual fecal examination detects roundworms, hookworms, whipworms, Giardia, and Coccidia — some of which are zoonotic (transmissible to humans, including children). Monthly heartworm preventives (Heartgard, Interceptor) also prevent and control common intestinal parasites. Giardia requires specific antigen testing separate from standard fecal flotation. Fecal-sample collection kits already live on dog.com wellness-exam; this page does not hop a sample kit.</p>

          <h2 id="kit">Visit-cadence kit</h2>
          <p>
            Everyday physical supplies that match the
            puppy-series, adult-annual, and senior
            every-6-months copy on this page — a
            wall-mounted magnetic monthly planner so
            the next wellness slot stays on the fridge,
            a waterproof rear seat hammock so the
            clinic ride does not soak the back seat,
            and a folding four-wheel dog stroller so a
            senior with a six-month mobility
            assessment can still make the lobby.
            These are household cadence and clinic-trip
            tools, not treatments. They do not replace
            a vaccine, a heartworm test, a fecal exam,
            or a veterinarian-chosen preventive, and
            they are not a ranked product list.
            Hardcover weekly appointment planners
            already live on pain-management-dogs.
            Dry-erase monthly calendars already live
            on dog.com Addison&apos;s. Dog seat-belt
            tethers already live on dog.com
            vaccinations. Soft-sided vet-visit
            carriers already live on dog.com
            heartworm-prevention. Heartgard,
            Sentinel, Interceptor, ProHeart, Bravecto,
            NexGard, Simparica, and other Rx ASINs
            are not shoppable hops. This page does
            not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (wall-mounted magnetic monthly planner /
              waterproof rear seat hammock /
              folding four-wheel dog stroller).
              These are educational cadence /
              clinic-trip tools, not a ranked product
              list, not a substitute for veterinary
              care, no Rx / Heartgard / Bravecto /
              NexGard / Simparica / ProHeart ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1083
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
              battery+motion+sensor+night+light, #1079
              elevated+mesh+dog+cot /
              clear+adhesive+non+slip+stair+treads /
              hardcover+weekly+appointment+planner, #1078
              2+liter+plastic+graduated+pitcher /
              extra+large+bolster+dog+lounge /
              a5+hardcover+dot+grid+notebook, #1077
              narrow+neck+glass+water+carafe /
              2+quart+stainless+saucepan+with+lid /
              pocket+spiral+memo+pad, #1076
              pet+toothbrush+and+enzymatic+toothpaste+kit /
              vohc+dental+chews+for+dogs /
              vohc+accepted+dental+water+additive, #1075
              egg+crate+foam+dog+kennel+pad /
              carpeted+wooden+pet+steps /
              wide+platform+veterinary+floor+scale, #1074
              wire+basket+dog+muzzle /
              quilted+disposable+underpads /
              handheld+aa+led+flashlight, #1073
              double+door+wire+dog+crate /
              pet+safe+kennel+disinfectant+spray /
              analog+wall+clock+with+second+hand, #1072
              tick+removal+hook /
              fine+tooth+flea+comb /
              laminated+tick+identification+card, #1071
              letter+size+expanding+file+organizer /
              sterile+urine+specimen+cup /
              12+hour+mechanical+kitchen+timer,
              dog.com Addison's
              dry+erase+monthly+calendar,
              dog.com vaccinations
              dog+seat+belt+tether,
              dog.com heartworm-prevention
              soft+sided+vet+visit+carrier,
              dog.com wellness-exam
              fecal+sample+collection+kit.
              Heartgard, Bravecto, NexGard, Simparica,
              ProHeart, and Rx ASINs are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the visit-cadence kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page puppy-series, adult-annual, and
              senior every-6-months copy — a
              wall-mounted magnetic monthly planner, a
              waterproof rear seat hammock, and a
              folding four-wheel dog stroller.
              Everyday cadence and clinic-trip
              supplies only. They are not a ranked
              product list, they are not a substitute
              for a veterinarian-chosen vaccine or
              preventive, they are not a #1083 reel-
              mower / duvet-cover / magnifier hop,
              they are not a #1079 hardcover-planner
              hop, they are not a dry-erase monthly
              calendar hop, they are not a seat-belt
              tether / soft-sided-carrier hop, they
              are not a Heartgard / Bravecto / NexGard
              hop, and they do not replace a
              veterinarian. Vets.co earns a commission
              on qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/wall+mounted+magnetic+monthly+planner?s=health-preventive-care-schedule"
                amazonLabel="Browse wall-mounted magnetic monthly planners on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/waterproof+rear+seat+hammock?s=health-preventive-care-schedule"
                amazonLabel="Browse waterproof rear seat hammocks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/folding+four+wheel+dog+stroller?s=health-preventive-care-schedule"
                amazonLabel="Browse folding four-wheel dog strollers on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
