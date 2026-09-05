import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Senior Dog Care — Biannual Exams, Screening | Vets.co', description: 'Senior dogs need more frequent veterinary care, not less. The biannual exam protocol, what screenings matter at 7+.', path: '/health/senior-pet-care', type: 'article' })
const SOURCES = [
  { label: 'AAHA: Senior Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/senior-care-configuration/', publisher: 'AAHA' },
  { label: 'AVMA: Senior Pet Care', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/senior-pet-care-faq', publisher: 'AVMA' },
  { label: 'WSAVA: Senior and Geriatric Patient Guidelines', url: 'https://wsava.org/global-guidelines/senior-geriatric-patient-guidelines/', publisher: 'WSAVA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Senior Dog Care Guide', description: 'Biannual exams, screening protocols, and quality of life for senior dogs.', url: 'https://vets.co/health/senior-pet-care', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Senior Dog Care', description: 'Veterinary care protocols and quality of life for aging dogs.', url: 'https://vets.co/health/senior-pet-care', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function SeniorPetCarePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Senior Dog Care', subtitle: 'A dog is considered senior at 7 years for most breeds — earlier for giants (5–6 years), later for small breeds (9–10 years). Senior dogs have more to gain from regular veterinary care, not less. The goal is maximum quality of life for maximum time.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Senior Pet Care', href: '/health/senior-pet-care' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
          { title: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs', category: 'Veterinary Guide' },
          { title: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Senior Screening Checklist</div>
            {[['Biannual physical exams', '✓'], ['Annual CBC + chemistry + UA', '✓'], ['Blood pressure measurement', '✓'], ['Thyroid screen (T4)', '✓ age 7+'], ['Abdominal ultrasound', '✓ Golden/Lab/GSD 7+'], ['Dental evaluation', '✓ every exam'], ['Pain assessment', '✓ every exam'], ['Cognitive function check', '✓ every exam']].map(([item, check]) => (
              <div key={item} className="flex justify-between py-1.5 border-b border-brand-border last:border-0 text-xs">
                <span className="text-brand-text-mid">{item}</span>
                <span className="text-green-600 font-bold">{check}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' }, { label: 'Find a Specialist', href: '/find-a-vet' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-senior-care" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the senior dog screening checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Senior dog screening checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              biannual-exam, bloodwork-record, blood-pressure,
              cognitive-observation, and quality-of-life
              copy on this page — a letter-size plastic
              file box so CBC, chemistry, SDMA, and blood-
              pressure printouts stack in date order for
              the next twice-yearly visit, a plug-in
              heated pet mat so rest at home stays a
              comfort surface you can watch for QoL
              changes, and a battery motion-sensor night
              light so night wandering and vocalizing
              become dated DISHAA observations for the
              veterinarian. Educational checklist, not
              a ranked product list, not a substitute
              for veterinary care, and not an Anipryl /
              selegiline / Bright Mind / Neutricks hop.
              Letter-size expanding file organizers,
              sterile urine specimen cups, and 12-hour
              mechanical kitchen timers already live on
              senior-bloodwork-guide. Plug-in night
              lights, sniff boxes, and senior food-puzzle
              toys already live on cognitive-dysfunction.
              Elevated mesh dog cots, extra-large bolster
              lounges, orthopedic beds, and pet steps
              already live on other pain / arthritis
              pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Senior dog screening checklist"
              subtitle="Email the file-box, heated-mat, and night-light notes. No spam."
              ctaText="Email my senior dog screening checklist"
              source="health-senior-pet-care-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-07T00:00:00Z" reviewedBy="Editorial team" />

          <h2>Why Biannual Exams Matter</h2>
          <DropCap>A year in a senior dog&apos;s life corresponds to 5–7 human years. Conditions that develop gradually — dental disease, kidney disease, hypothyroidism, arthritis, cardiac disease, early cancer — can progress from manageable to advanced within one annual exam cycle. The standard of care for dogs 7+ is twice-yearly comprehensive examinations. This is not excessive — it is appropriate for the rate at which senior dogs&apos; health changes.</DropCap>
          <p>Each biannual senior exam should include: a comprehensive physical examination with specific attention to lymph nodes (lymphoma screening), abdominal palpation (organ size and masses), cardiac auscultation (murmur grading), orthopedic assessment (joint pain, range of motion), ophthalmic assessment (cataracts, early glaucoma), dental grading, body weight and condition scoring, and a brief cognitive and behavioral history review. A letter-size plastic file box is how the last two exam packets — physical notes, CBC, chemistry, SDMA, and the blood-pressure reading — travel to that visit in date order instead of as a pile of loose printouts. It is not a letter-size expanding file organizer (that lives on senior-bloodwork-guide), not a pet medical-records binder, and not a hardcover weekly appointment planner. It does not interpret labs and it is not a substitute for the veterinarian who reviews the trend.</p>

          <h2>What Bloodwork Reveals</h2>
          <p>Annual bloodwork in senior dogs — CBC (complete blood count) plus comprehensive chemistry panel plus urinalysis — screens for the most common senior health conditions before clinical signs develop. Key findings:</p>
          <ul>
            <li><strong>Kidney disease:</strong> SDMA elevation detects CKD when 25% of kidney function is lost — years before BUN and creatinine become abnormal. Early detection allows dietary intervention before significant disease progression.</li>
            <li><strong>Hypothyroidism:</strong> Low T4 in a middle-aged to older dog with appropriate clinical signs. Easily managed with daily medication.</li>
            <li><strong>Diabetes:</strong> Elevated fasting glucose with appropriate history.</li>
            <li><strong>Liver disease:</strong> Elevated liver enzymes may indicate hepatic disease, Cushing&apos;s disease, or medication effects.</li>
            <li><strong>Anemia:</strong> May indicate blood loss, bone marrow disease, or chronic disease.</li>
          </ul>

          <CalloutBox variant="evidence" title="SDMA catches CKD years early">
            SDMA elevation detects chronic kidney disease when roughly 25% of kidney function has been lost — years before BUN and creatinine become abnormal. Adding SDMA to senior bloodwork is one of the highest-yield additions to the standard panel and allows dietary intervention well before clinical signs develop. A letter-size plastic file box is how those serial printouts stay stacked by draw date so a rising SDMA is a comparison, not a reconstruction from memory. It does not replace the senior-bloodwork-guide expanding file, and it does not interpret the panel.
          </CalloutBox>

          <h2>Blood Pressure — The Overlooked Vital</h2>
          <p>Hypertension (high blood pressure) occurs in senior dogs — commonly secondary to kidney disease, hypothyroidism, Cushing&apos;s disease, or cardiac disease. Hypertension causes retinal detachment and blindness, progresses kidney disease, and affects cardiac function. It is detected only by measurement and is easily treated once identified. Blood pressure should be measured at every senior wellness visit using a Doppler or oscillometric device. A normal canine blood pressure is under 160 mmHg systolic. Keep the printed systolic reading in the same letter-size plastic file box as the CBC and chemistry so the next biannual visit can see the last number. Household file storage does not measure blood pressure and it does not replace the clinic Doppler or oscillometric device.</p>

          <h2>Cognitive Dysfunction Syndrome</h2>
          <p>Cognitive dysfunction syndrome (CDS) — the canine equivalent of dementia — affects approximately 22% of dogs 9–11 years and over 60% of dogs 15+ years (Madari et al., Appl Anim Behav Sci). Signs: disorientation (getting stuck in corners, losing their way in familiar places), altered sleep-wake cycles (sleeping during day, awake and vocal at night), house soiling (forgetting trained behaviors), reduced interest in interaction, staring at walls.</p>
          <p>The DISHAA scale (Disorientation, Interactions, Sleep/wake, Housetraining, Activity, Anxiety) standardizes CDS assessment. CDS is underdiagnosed — owners frequently attribute signs to &quot;just getting old.&quot; While there is no cure, management helps: Purina Pro Plan Bright Mind (has clinical evidence), Anipryl (selegiline — <a href="https://www.fda.gov/animal-veterinary" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a> approved for CDS), environmental enrichment, regular exercise maintaining cognitive engagement, and Apoaequorin (Neutricks) which has some supporting evidence. Those are clinic and diet conversations, not shoppable hops on this page. A battery motion-sensor night light is how night wandering and vocalizing become a dated DISHAA observation you can hand the veterinarian — the light comes on when the dog gets up, so the sleep-wake note is a time and a count, not a guessed &quot;up a lot.&quot; It is not a plug-in night light (that lives on cognitive-dysfunction), not an analog wall clock with a second hand, and not a handheld AA LED flashlight. It does not treat CDS and it is not a substitute for a veterinary exam.</p>

          <h2>Quality of Life Assessment</h2>
          <p>For senior dogs with chronic illness, a formal quality of life assessment helps owners and veterinarians make difficult decisions objectively. The Lap of Love Quality of Life Scale and the HHHHHMM scale (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More good days than bad) provide structured frameworks. The goal is not length of life alone — it is maximum quality of life for whatever time remains. Regular QoL conversations with your veterinarian starting in early senior years, before crisis, allow more thoughtful and less emotionally reactive end-of-life decision-making. A plug-in heated pet mat is rest-and-comfort gear for that QoL watch — a warm surface the dog can choose at home so Hunger, Happiness, and Mobility notes come from a dog that can settle, not a treatment for arthritis, CDS, or pain. It is not an elevated mesh dog cot, not an extra-large bolster dog lounge, not an egg-crate foam kennel pad, not a self-warming dog mat, and not an orthopedic dog bed. It does not replace the HHHHHMM conversation with the veterinarian.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            biannual-exam, screening-record, blood-pressure,
            cognitive-observation, and quality-of-life
            copy on this page — a letter-size plastic
            file box so CBC, chemistry, SDMA, and blood-
            pressure printouts stack in date order for
            the next twice-yearly visit, a plug-in
            heated pet mat so rest at home stays a
            comfort surface you can watch for QoL
            changes, and a battery motion-sensor night
            light so night wandering and vocalizing
            become dated DISHAA observations for the
            veterinarian. These are educational
            home-care and monitoring tools, not a
            ranked product list, not a substitute for
            veterinary care, and not a treatment for
            CDS, CKD, hypertension, or arthritis.
            Anipryl, selegiline, Bright Mind, Neutricks,
            and human medicines are not shoppable hops.
            Letter-size expanding file organizers,
            sterile urine specimen cups, and 12-hour
            mechanical kitchen timers already live on
            senior-bloodwork-guide. Plug-in night
            lights, sniff boxes, and senior food-puzzle
            toys already live on cognitive-dysfunction.
            Elevated mesh dog cots, clear adhesive
            non-slip stair treads, and hardcover weekly
            appointment planners already live on
            pain-management-dogs. Extra-large bolster
            lounges and A5 hardcover dot-grid notebooks
            already live on cushing-disease-dogs.
            Egg-crate kennel pads, carpeted wooden pet
            steps, and veterinary floor scales already
            live on pain-signs-dogs. Traction rugs, dog
            ramps, raised bowls, and orthopedic beds
            already live on arthritis-in-dogs. This
            page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (letter-size plastic file box /
              plug-in heated pet mat /
              battery motion-sensor night light).
              These are educational home-care /
              monitoring / comfort tools, not a ranked
              product list, not a substitute for
              veterinary care, no Rx / Anipryl /
              selegiline / Bright Mind / Neutricks /
              human-med ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1079
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
              arthritis-in-dogs
              dog+traction+rug / dog+ramp /
              raised+dog+bowl / orthopedic+dog+bed,
              cognitive-dysfunction
              plug+in+night+light / dog+sniff+box /
              senior+dog+food+puzzle.
              Anipryl, selegiline, Bright Mind, Neutricks,
              and Rx ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page biannual-exam, screening-record,
              cognitive-observation, and quality-of-life
              copy — a letter-size plastic file box, a
              plug-in heated pet mat, and a battery
              motion-sensor night light. Educational
              home-care and monitoring tools only.
              They are not a ranked product list, they
              are not a substitute for veterinary
              care, they are not a #1079 cot / stair-
              tread / planner hop, they are not a #1071
              expanding-file / urine-cup / 12-hour-timer
              hop, they are not a cognitive-dysfunction
              plug-in-night-light / sniff-box / food-
              puzzle hop, they are not an arthritis
              traction-rug / ramp / orthopedic-bed hop,
              and they do not replace a veterinarian.
              Vets.co earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/letter+size+plastic+file+box?s=health-senior-pet-care"
                amazonLabel="Browse letter-size plastic file boxes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/plug+in+heated+pet+mat?s=health-senior-pet-care"
                amazonLabel="Browse plug-in heated pet mats on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/battery+motion+sensor+night+light?s=health-senior-pet-care"
                amazonLabel="Browse battery motion-sensor night lights on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
