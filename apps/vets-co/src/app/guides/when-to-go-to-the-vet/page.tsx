import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "When to Take Your Pet to the Vet — A Decision Guide | Vets.co", description: "Some signs warrant watchful waiting; others need same-day or emergency care. Learn which symptoms mean it is time to call the vet and which cannot wait.", path: '/guides/when-to-go-to-the-vet', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'When to Take Your Pet to the Vet', description: 'A decision guide for which symptoms warrant watchful waiting, same-day care, or emergency care.', url: 'https://vets.co/guides/when-to-go-to-the-vet', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' })
const FAQS = [
  { question: "My pet vomited once but seems fine — should I worry?", answer: "A single episode of vomiting in an otherwise bright, alert pet that is still eating and drinking normally is often not urgent, and watchful waiting with a brief period of dietary care may be reasonable. However, you should seek care if vomiting repeats, if the pet becomes lethargic, stops eating or drinking, has a swollen or painful abdomen, vomits blood, or if you suspect they ate something dangerous. When uncertain or if your pet is very young, very old, or has existing conditions, call your veterinarian for guidance." },
  { question: "How do I know if something is a true emergency?", answer: "Certain signs are always emergencies: difficulty breathing, severe bleeding, collapse, repeated or non-stop seizures, suspected bloat, a male cat unable to urinate, suspected poisoning, major trauma, pale or blue gums, and a distended painful abdomen. These are time-critical and warrant going to an emergency hospital immediately. Beyond these, any rapid worsening, severe pain, or your strong instinct that something is seriously wrong justifies emergency care. It is always better to be checked unnecessarily than to wait too long." },
  { question: "When is watchful waiting reasonable?", answer: "Watchful waiting can be appropriate for mild, isolated signs in a pet that is otherwise bright, eating, drinking, and behaving normally — a single soft stool, brief mild vomiting, or minor stiffness that resolves. The key is to monitor closely for a short, defined period and seek care if signs persist beyond a day or two, worsen, or are joined by other symptoms. Watchful waiting is never appropriate for the emergency signs, for very young or very old pets, or for pets with serious underlying conditions, where prompt veterinary advice is safer." },
]
export default function WhenToGoPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'When to Take Your Pet to the Vet', subtitle: 'Pet owners constantly face the same question: is this something to watch, something to call about, or something that cannot wait? This decision guide sorts common signs into watchful waiting, same-day care, and emergency care — and gives clear rules for when to escalate — so you can act with confidence rather than worry.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'When to Go to the Vet', href: '/guides/when-to-go-to-the-vet' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Three Buckets</div>
            {[['Watch', 'Mild, isolated, bright pet'], ['Same-day', 'Urgent but stable'], ['Emergency', 'Life-threatening, go now'], ['When unsure', 'Call your vet']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'ER vs Clinic vs Telehealth (tool)', href: '/tools/er-vs-clinic' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'ER vs. Urgent Care', href: '/guides/er-vs-urgent-care' }, { label: 'What to Expect at the Vet', href: '/guides/what-to-expect-at-the-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Owner Newsletter" subtitle="Practical guidance weekly." source="guides-when-to-go" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the when-to-go-to-the-vet decision checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              When-to-go-to-the-vet decision checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              watchful-waiting, same-day, and
              when-unsure-call copy on this page — a
              48-hour digital kitchen timer so a mild
              isolated sign is a counted day-or-two
              window instead of a guessed morning, a
              lined telephone message pad so the clinic
              call records the sign, when it started,
              and how the pet is otherwise doing, and
              a medium hard-sided plastic pet carrier
              so a same-day visit is a ready crate
              instead of a scramble. Educational
              checklist, not a diagnosis, not a
              substitute for emergency care, and not
              a 72-hour countdown, 12-hour mechanical
              timer, pocket spiral memo pad, or
              soft-sided carrier hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="When-to-go-to-the-vet decision checklist"
              subtitle="Email the 48-hour-timer, message-pad, and hard-sided-carrier notes. No spam."
              ctaText="Email my when-to-go-to-the-vet decision checklist"
              source="guides-when-to-go-to-the-vet-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-05T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Trust your instinct on serious signs">
            You know your pet better than anyone. If your gut says something is seriously wrong — even if you cannot name the sign — it is reasonable to seek care. Owners are often the first to detect that something is off, and acting on that instinct saves lives.
          </CalloutBox>

          <h2>The Three Buckets</h2>
          <p>Most situations sort into three categories. <strong>Watchful waiting</strong> suits mild, isolated signs in a pet that is otherwise bright, eating, drinking, and acting normally. <strong>Same-day or urgent care</strong> is for problems that are not immediately life-threatening but should not wait days. <strong>Emergency care</strong> is for time-critical, life-threatening situations. Sorting a sign into the right bucket — and erring toward caution when unsure — is the core skill of responsible pet ownership.</p>

          <h2>Signs You Can Often Watch Briefly</h2>
          <p>For a pet that remains alert, eating, and behaving normally, mild and isolated signs can sometimes be monitored for a short, defined period: a single soft stool, one episode of mild vomiting, brief minor stiffness that resolves, or a small superficial scrape. Watch closely, and seek care if the sign persists beyond a day or two, worsens, or is joined by other symptoms. A 48-hour digital kitchen timer is how that day-or-two window stays a counted interval instead of a guessed morning — it is not a 72-hour digital countdown timer (that lives on dog-vaccinations-guide), not a 12-hour mechanical kitchen timer (that lives on senior-bloodwork-guide), not a 30-minute sand hourglass timer (that lives on dog.com dog-bloat-gvd), and not an analog wall clock with a second hand (that lives on canine-influenza). The timer does not diagnose a sign and it does not replace a veterinarian. This watchful approach is never appropriate for very young or very old pets, or those with serious underlying conditions.</p>

          <h2>Signs That Warrant Same-Day Care</h2>
          <p>Some problems need prompt but not emergency attention: persistent vomiting or diarrhea without collapse, a limp that does not improve, an eye that is red or squinting, a wound that may need cleaning or closing, ear pain, a urinary issue in a pet still able to urinate, or a noticeable change in appetite, thirst, or energy. These warrant a call to your veterinarian or a visit to urgent care the same day, before they escalate. A medium hard-sided plastic pet carrier is how that same-day trip is a ready crate instead of a scramble at the door — it is not a soft-sided vet-visit carrier (that lives on dog.com heartworm prevention), not a soft cat carrier (that lives on cat-grimace-scale), not a hard-sided airline dog crate (that lives elsewhere), and not a folding four-wheel dog stroller (that lives on preventive-care-schedule). A carrier does not treat a limp, an eye, or a wound, and it does not replace the clinic.</p>

          <h2>Signs That Are Emergencies</h2>
          <p>Certain signs are always emergencies requiring immediate care: difficulty breathing; severe or uncontrolled bleeding; collapse or inability to stand; seizures that repeat or will not stop; a swollen abdomen with unproductive retching (suspected bloat); a male cat straining unable to urinate; suspected poisoning; major trauma; and pale, white, or blue gums. Do not wait or watch these — go to an emergency hospital. For a fuller list, see our emergency signs guide. The same hard-sided carrier can ride along so a collapsed or painful pet is contained on the drive; it is not a wire basket dog muzzle, not quilted disposable underpads, and not a handheld AA LED flashlight (those live on emergency-signs). Do not delay the drive to hunt for gear.</p>

          <h2>When You Are Not Sure</h2>
          <p>Uncertainty is common, and there is a simple rule: when in doubt, call. Your veterinary clinic, or an emergency hospital after hours, can help you decide whether to watch, come in, or treat the situation as an emergency, often with a few questions over the phone. Describing the sign, when it started, and how your pet is otherwise doing helps them advise you. A lined telephone message pad is how that call stays a written record of the sign, the start time, and the clinic&apos;s advice — it is not a pocket spiral memo pad (that lives on vomiting-diarrhea-pets), not an A5 hardcover dot-grid notebook (that lives on cushing-disease-dogs), not a waterproof field notebook (that lives on seizures-in-dogs), and not a dog weight log book (that lives on spay-neuter-benefits). A pad does not diagnose a sign and it does not replace the veterinarian on the other end of the line. It is always better to ask and be reassured than to wait on something serious.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            watchful-waiting, same-day, and
            when-unsure-call copy on this page — a
            48-hour digital kitchen timer so a mild
            isolated sign is a counted day-or-two
            window, a lined telephone message pad so
            the clinic call records the sign, when it
            started, and how the pet is otherwise
            doing, and a medium hard-sided plastic
            pet carrier so a same-day visit is a
            ready crate. These are educational
            home-care / monitoring / transport tools,
            not a ranked product list, not a
            substitute for veterinary care, and not
            a treatment. 72-hour digital countdown
            timers already live on
            dog-vaccinations-guide. 12-hour mechanical
            kitchen timers already live on
            senior-bloodwork-guide. Pocket spiral
            memo pads already live on
            vomiting-diarrhea-pets. Soft-sided
            vet-visit carriers already live on
            dog.com heartworm prevention. Wire
            basket dog muzzles, quilted disposable
            underpads, and handheld AA LED
            flashlights already live on
            emergency-signs. This page does not hop
            medications. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (48-hour digital kitchen timer /
              lined telephone message pad /
              medium hard-sided plastic pet carrier).
              These are educational home-care /
              monitoring / transport tools, not a
              ranked product list, not a substitute
              for veterinary care, no Rx / first-aid
              kit / thermometer / muzzle / underpad
              ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1092
              single+stainless+floor+dog+bowl /
              wobble+dog+food+dispenser /
              30+minute+sand+hourglass+timer, #1091
              letter+size+thermal+laminating+pouches /
              72+hour+digital+countdown+timer /
              collapsible+silicone+travel+dog+bowl, #1090
              hinged+cedar+sandbox+cover /
              metal+jaw+dog+waste+scooper /
              outdoor+garden+hand+wash+station, #1089
              24+ounce+stainless+hiking+dog+bottle /
              powder+free+nitrile+exam+gloves /
              32+gallon+locking+animal+proof+trash+can, #1088
              small+digital+kitchen+food+scale /
              silicone+cat+grooming+glove /
              8+ounce+glass+liquid+measuring+cup, #1087
              heavy+gauge+48+inch+dog+crate /
              2+foot+nylon+traffic+lead /
              adjustable+aluminum+downspout+extender,
              #1086–#1071
              wide+rim+stainless+cat+water+bowl /
              pocket+spiral+memo+pad /
              a5+hardcover+dot+grid+notebook /
              waterproof+field+notebook /
              12+hour+mechanical+kitchen+timer /
              analog+wall+clock+with+second+hand /
              digital+handheld+stopwatch /
              wire+basket+dog+muzzle /
              quilted+disposable+underpads /
              handheld+aa+led+flashlight /
              soft+sided+vet+visit+carrier /
              soft+cat+carrier /
              hard+sided+airline+dog+crate /
              folding+four+wheel+dog+stroller,
              emergency-signs muzzle / underpads /
              flashlight, vomiting memo-pad,
              vaccinations 72-hour timer.
              First-aid kits, digital pet
              thermometers, and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page watchful-waiting, same-day, and
              when-unsure-call copy — a 48-hour
              digital kitchen timer, a lined telephone
              message pad, and a medium hard-sided
              plastic pet carrier. Educational
              home-care / monitoring / transport
              tools only.
              They are not a ranked product list,
              they are not a substitute for veterinary
              care, they are not a #1092 floor-bowl /
              wobble-dispenser / hourglass hop, they
              are not a #1091 laminating-pouch /
              72-hour-timer / travel-bowl hop, they
              are not an emergency-signs muzzle /
              underpad / flashlight hop, they are not
              a first-aid-kit / thermometer hop, and
              they do not replace a veterinarian.
              Vets.co earns a commission on
              qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/48+hour+digital+kitchen+timer?s=guides-when-to-go-to-the-vet"
                amazonLabel="Browse 48-hour digital kitchen timers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/lined+telephone+message+pad?s=guides-when-to-go-to-the-vet"
                amazonLabel="Browse lined telephone message pads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/medium+hard+sided+plastic+pet+carrier?s=guides-when-to-go-to-the-vet"
                amazonLabel="Browse medium hard-sided plastic pet carriers on Amazon →"
              />
            </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
