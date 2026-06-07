import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  CalloutBox,
  DropCap,
  ArticleByline,
  FAQAccordion,
  ReviewCard,
  ScoreMethodology,
  AffiliateDisclosure,
} from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Bridle Fit Guide — Crown, Browband, Noseband, Bit | Saddle.com',
  description:
    'How a bridle should fit: throatlatch 4-finger, noseband 2-finger, bit in the diastema. Snaffle vs curb mechanism. SMS and AAEP-aligned.',
  path: '/guides/bridle-fit-guide',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Bridle Fit Guide 2026',
  description:
    'Anatomy of a correctly fitted bridle — crownpiece, browband, throatlatch, cheekpiece, noseband, and bit. Snaffle vs curb mechanism, and how to read fit-related head-tossing or tongue-lolling. Aligned with SMS guidance and AAEP head/poll discomfort literature.',
  url: 'https://saddle.com/guides/bridle-fit-guide',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const FAQ_ITEMS = [
  {
    question: 'How many fingers should fit under the throatlatch?',
    answer:
      'Four fingers, vertically — that is the standard SMS-aligned check. The throatlatch is a safety strap, not a closure: its job is to prevent the bridle from being pulled forward over the horse&apos;s ears if the horse rubs against something. Too tight (one or two fingers) restricts breathing and flexion at the poll. Too loose (palm-width) lets the bridle slip if the horse rubs. Stand the horse with the head in a working frame, slide four fingers between the throatlatch and the jaw, and adjust until that gap is the snug fit.',
    answerText:
      'Four fingers vertically between the throatlatch and the jaw with the horse in a working frame. Tighter than that restricts breathing and flexion at the poll.',
  },
  {
    question: 'How tight should a noseband be?',
    answer:
      'Two fingers flat between the noseband and the nasal bone. The International Society for Equitation Science (ISES) and FEI guidelines both reference a two-finger (≈1.5–2 cm) minimum, and at the time of writing FEI dressage stewards use the ISES taper gauge to enforce this at competition. A noseband tight enough to prevent chewing or jaw movement is associated with elevated stress markers (heart rate variability, eye temperature) in published equine welfare studies. The crank-style noseband is the worst offender — its mechanical advantage allows over-tightening that ordinary leather buckles cannot reach.',
    answerText:
      'Two fingers flat between noseband and nasal bone (ISES taper gauge standard, FEI-enforced). Tighter is associated with elevated stress markers in welfare studies.',
  },
  {
    question: 'Where in the mouth should the bit sit?',
    answer:
      'In the diastema — the bar of gum between the incisors at the front and the molars at the back of the lower jaw. This is the only place in the horse&apos;s mouth where a bit can sit without contacting teeth. The bit should rest there with light contact, creating one to two small wrinkles at the corner of the lips for a snaffle and zero to one wrinkles for a curb or bridoon. Bits that hang lower bang against the canines and incisors; bits that ride higher pull at the corner of the lips. Mouth pain from incorrect bit height is one of the most common causes of head-tossing under saddle.',
    answerText:
      'In the diastema (the bar of gum between incisors and molars). One to two wrinkles at the lip corner for a snaffle; zero to one for a curb. Wrong height causes head-tossing.',
  },
  {
    question: 'What is the difference between a snaffle and a curb mechanism?',
    answer:
      'A snaffle works by direct pressure: rein contact pulls the bit straight back into the corner of the mouth, the tongue, and the bars. There is no mechanical advantage — one ounce of rein pressure is one ounce of bit pressure. A curb works by leverage: the cheek-piece attaches above the bit (the purchase) and the rein attaches below (the shank), creating a lever. A 1:1 curb (short shank) doubles rein force at the mouth; longer shanks multiply it further, and the curb chain transfers additional pressure to the chin groove. Curbs are not "stronger" snaffles — they speak a different language and require a horse trained to neck rein and respond to leverage, plus an educated hand that understands the multiplied force.',
    answerText:
      'Snaffle = direct pressure (1:1, no leverage). Curb = leverage (purchase above bit, shank below, multiplies rein force; chain adds chin-groove pressure). Different mechanisms, different uses.',
  },
  {
    question: 'My horse tosses his head when ridden — is it the bridle?',
    answer:
      'Rule out three causes in order: dental, bridle/bit, then training. AAEP guidance is that any horse showing head-tossing, tongue-lolling, gaping mouth, or rein evasion should first have an oral exam (sharp molar points, wolf teeth, or retained caps cause acute bit pain). If teeth check out, evaluate bit fit (height in mouth, width — should extend 5 mm beyond the lip corner on each side, mouthpiece thickness appropriate for the horse&apos;s tongue room), bridle fit (browband length, noseband tightness, poll pressure), and saddle fit. Only after physical causes are ruled out is it appropriate to address the issue as training.',
    answerText:
      'AAEP guidance: check dental first (sharp points, wolf teeth, retained caps), then bit fit (height, width, mouthpiece thickness), then bridle and saddle fit. Address training only after physical causes are ruled out.',
  },
  {
    question: 'Do I need a flash, drop, or figure-eight noseband?',
    answer:
      'A plain cavesson is sufficient for most horses and is the only noseband permitted at FEI dressage levels above small-tour. Flash, drop, and figure-eight nosebands are aids designed to keep a young or strong horse from crossing the jaw or opening the mouth excessively under contact — they are appropriate for specific training stages and disciplines (e.g. show jumping commonly uses figure-eight) but should be sized to maintain the two-finger gap at the nose and never used to silence a mouth that is opening because the bit hurts. Removing a tight noseband and the bit-fit problems it is masking is the correct first response to "the horse opens its mouth".',
    answerText:
      'A plain cavesson is enough for most horses and is required at upper-level FEI dressage. Flash/drop/figure-eight are training aids, not muzzles — never use them to silence a mouth that is opening because the bit hurts.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answerText || (typeof f.answer === 'string' ? f.answer : '') })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function BridleFitGuidePage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{
        title: 'Bridle Fit Guide — Crown, Browband, Noseband, Bit',
        subtitle:
          'The anatomy of a correctly fitted bridle, the snaffle-versus-curb mechanism explained, and how to read fit-related head-tossing or rein evasion. SMS and AAEP-aligned.',
        category: 'Fitting Guide',
        authorName: 'Saddle.com Editorial',
        authorAvatar: '🐴',
        publishedAt: 'May 2026',
        readTime: '14 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Bridle Fit Guide', href: '/guides/bridle-fit-guide' },
      ]}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides', category: 'Hub' },
        { title: 'Horse Bridle Guide', href: '/guides/horse-bridle-guide', category: 'Equipment' },
        { title: 'Bit Selection Guide', href: '/guides/bit-selection-guide', category: 'Equipment' },
        { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
        { title: 'Best Riding Helmets', href: '/reviews/best-riding-helmets', category: 'Reviews' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR — The 5 Fit Checks', href: '#tldr' },
              { label: 'Crownpiece &amp; Poll', href: '#crown' },
              { label: 'Browband', href: '#browband' },
              { label: 'Throatlatch (4-finger)', href: '#throatlatch' },
              { label: 'Cheekpieces &amp; Bit Height', href: '#cheekpieces' },
              { label: 'Noseband (2-finger)', href: '#noseband' },
              { label: 'Bit Fit Basics', href: '#bit' },
              { label: 'Snaffle vs Curb', href: '#snaffle-curb' },
              { label: 'Fit Problems &amp; Fixes', href: '#problems' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Horse Bridle Guide', href: '/guides/horse-bridle-guide' },
              { label: 'Bit Selection Guide', href: '/guides/bit-selection-guide' },
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
              { label: 'Best Riding Helmets', href: '/reviews/best-riding-helmets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="saddle-com"
            title="Free Fitting Guides"
            subtitle="Bridle, bit, and saddle fit references."
            source="guide-bridle-fit"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>
          A correctly fitted bridle distributes contact across the poll, nasal bone, and the diastema (the gum bar where the bit sits) without compressing any of them. The five fit checks are: crownpiece sitting flat behind the ears with no pinch, browband long enough to clear the ears, throatlatch with a four-finger vertical gap, cheekpieces adjusted to place the bit in the diastema with one or two lip-corner wrinkles, and noseband with a two-finger gap at the nose. Society of Master Saddlers (SMS) and AAEP head/poll discomfort literature both anchor these checks. Get any one of them wrong and you create the head-tossing, tongue-lolling, or rein evasion that gets misdiagnosed as a training problem.
        </DropCap>

        <CalloutBox variant="tip" title="Fit before training">
          Every behavior under saddle that involves the head, mouth, or rein contact &mdash; head-tossing, gaping mouth, tongue lolling, leaning on the bit, going behind the vertical, hollowing the back &mdash; should be checked against bridle and bit fit before being treated as a training problem. AAEP guidance is to rule out physical causes (teeth first, then bit/bridle, then saddle) before adjusting training.
        </CalloutBox>

        <h2 id="tldr">TL;DR &mdash; The Five Fit Checks</h2>
        <ol>
          <li><strong>Crownpiece:</strong> flat behind the ears, no pinching, even pressure across the poll.</li>
          <li><strong>Browband:</strong> long enough to clear the ears without pulling the crownpiece forward.</li>
          <li><strong>Throatlatch:</strong> four-finger vertical gap with the head in a working frame.</li>
          <li><strong>Cheekpiece / bit height:</strong> one to two wrinkles at the corner of the mouth (snaffle); bit sitting in the diastema.</li>
          <li><strong>Noseband:</strong> two-finger gap between the noseband and the nasal bone (ISES taper-gauge standard).</li>
        </ol>

        <h2 id="crown">Crownpiece and Poll Pressure</h2>
        <p>The crownpiece sits behind the ears across the poll &mdash; one of the most pressure-sensitive areas of the horse&apos;s skull. The atlanto-occipital joint, the cranial nerves, and the nuchal ligament all converge here, and poll discomfort is documented in AAEP literature as a cause of resistance, head-tossing, and refusal to flex at the poll. A correctly fitted crownpiece should lie flat with even pressure across its full width, with no thin spots, twisted leather, or buckle hardware pressing directly on the poll.</p>
        <ul>
          <li><strong>Correct:</strong> Soft, padded leather flat behind the ears with no twist. Pressure spread across the full width of the crownpiece.</li>
          <li><strong>Too narrow:</strong> A thin crownpiece concentrates pressure on a small area &mdash; common with cheap bridles and a known cause of poll soreness.</li>
          <li><strong>Too tight forward:</strong> If the browband pulls the crownpiece forward against the base of the ears, the horse will toss his head and rub.</li>
        </ul>
        <p>Anatomically shaped or "comfort" crownpieces (e.g. the Micklem, Schockem&ouml;hle, PS of Sweden anatomical bridles) cut a relief notch behind the ears and broaden the crownpiece to distribute pressure. The peer-reviewed evidence on whether they measurably reduce poll pressure is mixed and brand-dependent &mdash; the broad agreement is that any anatomical relief is preferable to a narrow flat strap concentrating force on a small area.</p>

        <h2 id="browband">Browband</h2>
        <p>The browband crosses the forehead just below the ears and holds the crownpiece in position. Too short, it pulls the crownpiece forward and pinches the ears; too long, it slides down the forehead and the crownpiece falls back. The single fit test is straightforward: with the bridle on, you should be able to slide a finger flat between the browband and the forehead, and the crownpiece should sit a thumb&apos;s width behind the base of the ears.</p>
        <ul>
          <li><strong>Correct:</strong> Browband lies flat across the forehead. Ears free and upright. Crownpiece sits comfortably behind the ears.</li>
          <li><strong>Too short:</strong> Browband pulls the crownpiece forward against the ear bases. Horse rubs, tosses, or flips ears. Replace with a longer browband &mdash; do not stretch the existing one.</li>
          <li><strong>Too long:</strong> Browband drops down the forehead and may swing during work. Crownpiece may slide rearward. Replace with a shorter browband.</li>
        </ul>
        <p>Browbands are sold separately in most bridle systems, which makes resizing simple and inexpensive. Warmbloods and Thoroughbreds with long heads typically need an oversize (cob+/full+) browband; ponies and Arabians often need pony or cob size.</p>

        <h2 id="throatlatch">Throatlatch &mdash; The Four-Finger Check</h2>
        <p>The throatlatch passes under the jowl and buckles on the near side. Its job is safety: it prevents the bridle from being pulled forward over the ears if the horse rubs or catches the bridle on something. It is <em>not</em> a closure strap and should never be used to keep the bridle "tight" on the head.</p>
        <p>The standard check: with the horse&apos;s head in a working frame (not stretched down, not flexed back), slide four fingers vertically between the throatlatch and the jaw. That is the snug-fit limit. Tighter than that &mdash; especially three fingers or fewer &mdash; restricts the horse&apos;s breathing as the head comes onto the vertical (the throatlatch is forced into the jugular groove and the trachea) and limits poll flexion.</p>
        <CalloutBox variant="warning" title="Tight throatlatches cause real harm">
          A throatlatch tight enough to restrict trachea expansion during work can produce respiratory noise mistaken for upper airway disease, post-work fatigue from inadequate oxygen exchange, and resistance to coming onto the bit. Four fingers is the safety baseline; some FEI-level dressage riders use a full hand of clearance for upper-level flexion work.
        </CalloutBox>

        <h2 id="cheekpieces">Cheekpieces and Bit Height</h2>
        <p>The cheekpieces are the two leather straps that connect the crownpiece to the bit. They control the height of the bit in the mouth. Adjust them so the bit sits in the diastema with one or two small wrinkles at the corner of the horse&apos;s lips (snaffle), or zero to one wrinkle (curb or bridoon of a double bridle).</p>
        <ul>
          <li><strong>Too high (3+ wrinkles):</strong> Bit pulls into the corners of the lips, creating pressure sores. Common with horses that have been "fitted up" by inexperienced owners.</li>
          <li><strong>Too low (no wrinkles, bit hangs):</strong> Bit bangs against the canine teeth (in males) or the molars when the horse mouths it. Major cause of head-tossing.</li>
          <li><strong>Asymmetric:</strong> If one cheekpiece is on a tighter hole than the other, the bit sits crooked in the mouth and contact will be uneven. Check both sides at every bridling.</li>
        </ul>
        <p>Most bridles have buckle hole spacing of about 2 cm &mdash; one hole&apos;s adjustment is the difference between a snug snaffle fit and a too-low one. Cheekpiece holes wear and the leather stretches over time, so re-check height seasonally and after the bridle has been re-conditioned.</p>

        <h2 id="noseband">Noseband &mdash; The Two-Finger Check</h2>
        <p>The cavesson noseband should sit two finger-widths below the protruding cheekbone (the facial crest), comfortably encircling the nasal bone <strong>above</strong> the soft cartilage of the nostrils. A noseband sitting too low &mdash; on the nostril cartilage rather than the nasal bone &mdash; restricts breathing under work and is a documented welfare concern.</p>
        <p>The tightness check is a two-finger gap, measured flat (not rolled into a tube) between the noseband and the nasal bone. The International Society for Equitation Science (ISES) publishes a standardized taper gauge that codifies this, and FEI dressage stewards have used the gauge at competitions since 2020 to detect over-tight nosebands. Welfare research (Doherty et al., PLoS One 2017; McGreevy et al., various) has consistently associated tighter-than-two-fingers nosebands with elevated stress markers including heart rate variability changes and elevated eye temperature.</p>
        <CalloutBox variant="evidence" title="Why two fingers is the rule">
          ISES and FEI converged on the two-finger (≈ 1.5&ndash;2 cm) standard because of accumulated peer-reviewed evidence that tighter nosebands prevent normal jaw motion and chewing, are associated with elevated physiological stress markers, and are linked to lesions at the noseband contact line. The "crank" noseband &mdash; mechanically advantaged so it can be tightened far past what an ordinary buckle reaches &mdash; is the worst offender; many top fitters refuse to install them.
        </CalloutBox>
        <p>Flash, drop, and figure-eight nosebands are accessory aids that pass under or around the bit to discourage jaw-crossing and excessive mouth-opening. They are appropriate aids for specific training contexts (figure-eight in show jumping, flash on a strong horse mid-training) but the two-finger rule applies to the cavesson portion, and accessory straps should never be tightened to silence a mouth that is opening because the bit hurts.</p>

        <h2 id="bit">Bit Fit Basics</h2>
        <p>Three measurements decide whether a bit fits: <strong>width</strong>, <strong>mouthpiece thickness</strong>, and <strong>height in the mouth</strong>.</p>
        <ul>
          <li><strong>Width.</strong> A correctly sized bit extends approximately 5 mm (¼ inch) beyond the corner of the lips on each side. Too narrow pinches the corners; too wide allows the bit to slide side-to-side and creates uneven contact. Measure the mouth with a calibrated bit-sizing wand (vet or fitter has these) or by drawing a string through the mouth and measuring lip-corner to lip-corner.</li>
          <li><strong>Mouthpiece thickness.</strong> The horse&apos;s tongue room (mostly determined by the depth of the lower jaw and the height of the palate) sets the maximum mouthpiece diameter. Many modern horses have less tongue room than the 16&ndash;18 mm "standard" snaffle and are more comfortable in a 14 mm or thinner mouthpiece. A horse that opens its mouth or sticks the tongue out under contact is often telling you the mouthpiece is too thick.</li>
          <li><strong>Height in the mouth.</strong> Already covered above &mdash; one to two wrinkles for a snaffle, the bit sitting in the diastema.</li>
        </ul>
        <p>Bit material matters less than fit. Stainless steel, sweet iron, copper, and synthetic mouthpieces all have their advocates, but no material compensates for a bit that is the wrong width or thickness for the horse&apos;s mouth.</p>

        <h2 id="snaffle-curb">Snaffle vs Curb &mdash; The Mechanism Difference</h2>
        <p>A snaffle and a curb are not graduated versions of the same tool &mdash; they work on fundamentally different mechanical principles.</p>
        <p><strong>The snaffle</strong> applies <em>direct pressure</em>. The reins attach to the same ring as the cheekpieces, so rein contact pulls the bit straight back into the corner of the mouth, the tongue, and the bars of the gum. There is no mechanical advantage: one pound of rein pressure produces one pound of bit pressure. The snaffle communicates by softness of contact, lateral flexion (one rein at a time can ask the horse to bend), and consistent pressure on the bars. It is the appropriate training bit for young horses, the universal choice in eventing dressage phases through Intermediate, and the bit required in show jumping for most national-level classes.</p>
        <p><strong>The curb</strong> works by <em>leverage</em>. The cheekpiece attaches above the bit (the "purchase" arm) and the rein attaches below (the "shank" arm), and the curb chain wraps under the chin groove. When the rider pulls the rein, the shank rotates back, the purchase rotates forward, and the curb chain tightens. The mechanical advantage is the ratio of shank to purchase &mdash; commonly 2:1 or 3:1, meaning one pound of rein pressure produces two to three pounds of force at the mouth, <em>plus</em> additional pressure on the chin groove from the chain and on the poll from the cheekpiece. The curb is a sophisticated communication tool for a horse trained to neck-rein and to respond to leverage; it requires an educated hand that understands the multiplied force. It is the bit of choice in western reining and roping, and the lower bit of an English double bridle (curb + bridoon snaffle, used at upper levels of dressage).</p>
        <p>The mistake to avoid is treating a curb as a "stronger snaffle" for a horse that is leaning on the bit. A horse leaning on a snaffle is usually leaning because of pain, training gaps, or fit problems &mdash; putting that horse into a curb multiplies the pain and the resistance, not the obedience.</p>

        <h2 id="problems">Common Fit Problems and Their Fixes</h2>
        <ul>
          <li><strong>Head tossing.</strong> Rule out dental causes first (sharp molar points, wolf teeth, retained caps). If teeth are clear: check bit height (the most common cause of fit-related head tossing), then bit width and mouthpiece thickness, then noseband tightness, then poll pressure from the crownpiece.</li>
          <li><strong>Tongue lolling / tongue out.</strong> Usually a bit thickness problem (too thick for the tongue room) or a noseband tight enough to prevent normal swallowing. Remove the flash, loosen the cavesson to two fingers, and try a thinner mouthpiece before treating as a training issue.</li>
          <li><strong>Rein evasion / going behind the vertical.</strong> Often a poll or curb-chain pressure problem. Check the crownpiece for narrow pressure concentration, check that the curb chain is two fingers loose when the bit is at rest, and check that the bit is in the diastema.</li>
          <li><strong>Gaping mouth.</strong> Almost always either bit pain (height, thickness, or sharp dental edge) or noseband suppression that the horse is fighting. Loosen the noseband to standard two-finger fit first to expose what the mouth is actually doing &mdash; if the mouth still gapes, address the bit.</li>
          <li><strong>One-sided contact / leaning on one rein.</strong> Check the cheekpieces for asymmetry (one tighter than the other), check the bridle is not twisted, and have a dental check &mdash; a sharp point on one side of the mouth produces consistently one-sided rein contact.</li>
        </ul>

        <AffiliateDisclosure variant="inline" siteId="saddle-com" />

        <h2 id="picks">Bridle-Fit Picks</h2>
        <p>
          Two picks tied directly to the article above — a noseband taper gauge (the ISES-standard tool the article references for the two-finger / 1.5–2 cm noseband check), and an anatomic-crownpiece bridle (the &quot;crownpiece and poll pressure&quot; section makes the case for these over flat-strap traditional crownpieces). This is a documented-spec comparison drawing on widely-stocked products in US equestrian retail; this page does not claim hands-on testing.
        </p>
        <ScoreMethodology />
        <ReviewCard
          id="noseband-taper-gauge"
          badge="ISES Standard"
          badgeEmoji="📐"
          name="Calibrated Noseband Taper Gauge (ISES Standard)"
          subtitle="The measurement tool behind the article&apos;s two-finger noseband rule"
          score={8.7}
          winner
          description={
            <p>The International Society for Equitation Science (ISES) taper-gauge standard is the most-cited measurement tool for cavesson noseband fit. Slides between the noseband and the nasal bone at the standard reference point on the front of the nose; calibrated markings show whether the noseband is at the safe 1.5–2 cm (two-finger) setting or tighter. Useful before any show where a steward may check noseband fit (FEI Veterinary Regulations require the same standard) and useful as the household check after any bridle adjustment.</p>
          }
          specs={[
            { label: 'Standard', value: 'ISES / FEI 1.5–2 cm reference', highlight: 'good' },
            { label: 'Use case', value: 'Noseband-fit check after any adjustment' },
            { label: 'Application', value: 'Front of nasal bone, standard reference point' },
            { label: 'Replacement cadence', value: 'Lifetime' },
          ]}
          pros={['Objective measurement replaces guesswork', 'Same standard FEI stewards use', 'One-time purchase']}
          cons={['Some horses object to the gauge — same handling skill as bridling', 'Plastic versions flex over years — buy steel or stiff-plastic if doing many checks per week']}
          price="$15–35"
          ctaText="Find noseband taper gauges"
          ctaHref="/go/smartpak/noseband-taper-gauge?s=guides-bridle-fit-guide"
          ctaAffiliateProgram="smartpak"
          ctaAffiliateProduct="noseband-taper-gauge"
        />
        <ReviewCard
          id="anatomic-bridle"
          badge="Anatomic Crownpiece"
          badgeEmoji="🐴"
          name="Anatomic-Crownpiece English Snaffle Bridle"
          subtitle="Contoured crownpiece that relieves the ear-base and poll pressure points"
          score={8.5}
          description={
            <p>The article&apos;s &quot;Crownpiece and Poll Pressure&quot; section makes the case for contoured anatomic crownpieces over flat-strap traditional models. Anatomic crownpieces (PS of Sweden, Schockemöhle, Stübben Freedom, Bobby&apos;s, others) cut back behind the ears and reshape the central pressure band to distribute load more evenly. Particularly worth the upgrade for horses showing head-tossing or rein evasion that turns out to be poll pressure rather than bit issues. Many ship with a padded noseband and reins that also follow anatomic principles.</p>
          }
          specs={[
            { label: 'Crownpiece', value: 'Anatomic / contoured', highlight: 'good' },
            { label: 'Behind-ear cutaway', value: 'Yes', highlight: 'good' },
            { label: 'Discipline', value: 'Dressage, jumping, all-purpose' },
            { label: 'Material', value: 'Quality bridle leather' },
          ]}
          pros={['Distributes poll pressure more evenly', 'Often resolves head-tossing the bit is unfairly blamed for', 'Long product life with normal leather care']}
          cons={['Premium price relative to flat-strap bridles', 'Will not fix a true bit-fit or saddle-fit problem — diagnose those first']}
          price="$200–550"
          ctaText="Find anatomic-crownpiece bridles"
          ctaHref="/go/smartpak/anatomic-snaffle-bridle?s=guides-bridle-fit-guide"
          ctaAffiliateProgram="smartpak"
          ctaAffiliateProduct="anatomic-snaffle-bridle"
        />

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQ_ITEMS} includeSchema={false} allowMultiple />

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) &mdash; bridle and saddle fitter training materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. American Association of Equine Practitioners (AAEP) &mdash; oral and dental examination guidelines, head/poll discomfort literature, <a href="https://aaep.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">aaep.org</a>. International Society for Equitation Science (ISES) &mdash; taper-gauge standard for noseband tightness. Doherty O et al., <em>PLoS One</em> 2017 &mdash; physiological response to noseband tightness. McGreevy P et al., various peer-reviewed work on noseband fit. FEI Veterinary Regulations &mdash; competition stewarding of noseband and bit fit.
        </CalloutBox>
      </div>
    </ArticleLayout>
    </>
  )
}
