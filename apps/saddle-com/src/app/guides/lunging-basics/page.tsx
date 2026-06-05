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
} from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Lunging Basics — Equipment, Why, Common Mistakes | Saddle.com',
  description:
    'How to lunge: equipment, why lunge, the common mistakes that injure joints, side-rein cautions, and AAEP-aligned safety guidance for young horses.',
  path: '/guides/lunging-basics',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Lunging Basics 2026',
  description:
    'Equipment, purpose, common mistakes, and joint-stress concerns for lunging horses. Aligned with AAEP lunging safety guidance and Equine Veterinary Education research on lunging-related lameness.',
  url: 'https://saddle.com/guides/lunging-basics',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const FAQ_ITEMS = [
  {
    question: 'How long should a lunging session be?',
    answer:
      'For a fit, mature horse: 15-20 minutes total, split roughly evenly between the two directions, with the trot work segments kept short (3-5 minutes each direction). For a young or unfit horse: 10 minutes total, mostly walk with brief trot. The two reasons for the short duration are joint stress (the circular work loads the inside legs differently from the outside) and motivation/freshness (a tired or sour horse on the lunge develops habits you do not want). Lunging is a supplement to ridden work, not a substitute for it.',
    answerText:
      'Fit mature horse: 15-20 minutes total. Young or unfit horse: 10 minutes. Trot segments kept short to limit joint stress; the lunge is a supplement, not a substitute for ridden work.',
  },
  {
    question: 'How big should the circle be?',
    answer:
      'For trot and canter work, aim for a 15-20 m circle minimum (a 20 m circle is the standard dressage school figure). Smaller circles concentrate force on the inside legs and are associated in Equine Veterinary Education and other peer-reviewed literature with elevated lameness risk, particularly for young horses whose growth plates are still closing. Walk on a smaller circle is acceptable; trot and canter on a smaller circle is a known injury risk. If your only available space is a 10 m round pen, keep the work to walk only.',
    answerText:
      'Minimum 15-20 m circle for trot and canter. Smaller circles concentrate force on the inside legs and are linked to lameness in peer-reviewed literature, especially in young horses with open growth plates.',
  },
  {
    question: 'Are side reins safe to use?',
    answer:
      'Side reins are controversial. Used correctly on a mature, schooled horse to encourage steady contact and a working frame, they are an established training tool used at the FEI level. Used on a green horse, used too tight, or used to force a head position, they cause physical damage and mental resistance. AAEP and equine welfare research are clear: side reins are not appropriate for young horses, untrained horses, or horses with neck or back problems. If you are not sure whether your horse is ready for them, the answer is no.',
    answerText:
      'Side reins are appropriate for mature schooled horses to encourage steady contact. They are NOT appropriate for young or untrained horses and should never be used to force head position.',
  },
  {
    question: 'What equipment do I need to lunge?',
    answer:
      'Minimum: a lunge cavesson or bridle, a lunge line (25-30 ft of cotton or webbing with a swivel snap), a lunge whip (long enough to reach the horse from the center of the circle), gloves (the line will burn ungloved hands if the horse spooks), and an enclosed area at least 20 m diameter. Optional: a surcingle (allows side reins or sliding side reins to be attached at saddle height without using a saddle), polo wraps or sport boots (debated &mdash; see the heat-retention discussion in the boot guide), and a properly fitted bridle if you are lunging in a bit. Avoid using a regular halter or any line attached to the bit itself &mdash; both create pressure problems.',
    answerText:
      'Lunge cavesson or bridle, 25-30 ft lunge line with swivel snap, lunge whip, gloves, 20 m+ enclosed area. Optional: surcingle, boots. Avoid plain halter or attaching the line to the bit directly.',
  },
  {
    question: 'My horse is sound under saddle but lame on the lunge — why?',
    answer:
      'Circular work amplifies subtle lameness because it loads the inside and outside legs asymmetrically. Lameness that does not show on straight lines often shows on a circle, particularly when the lame leg is the inside leg. This is why veterinarians routinely include lunging both directions on hard and soft surfaces in standard lameness exams &mdash; it is one of the most sensitive screening tests available. A horse that goes consistently lame on a small circle but sound on a large circle or straight line probably has a low-grade lameness that warrants veterinary investigation rather than continued work.',
    answerText:
      'Circular work loads legs asymmetrically and amplifies subtle lameness. A horse sound on straight lines but lame on the lunge probably has low-grade lameness; investigate with a vet.',
  },
  {
    question: 'Can I lunge a young horse?',
    answer:
      'Two-year-olds: walking on the line for short sessions to teach manners and respect for the handler, no trot or canter work, no side reins. Three-year-olds: light lunging at walk and brief trot, very short sessions, very large circles (20 m+), no side reins. Four-year-olds and up: standard lunging program is appropriate. The concern with young horses is that the growth plates of the long bones are still open through the third and fourth years, and circular work loads the joints unevenly in ways that can affect long-term soundness. AAEP guidance is to defer intensive ridden and lunging work until the skeleton is mature.',
    answerText:
      '2yo: walk only, manners work. 3yo: light walk/trot, very large circles, no side reins. 4yo+: standard program. Open growth plates make young horses vulnerable to circular-work injury.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answerText || (typeof f.answer === 'string' ? f.answer : '') })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function LungingBasicsPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{
        title: 'Lunging Basics — Equipment, Why, and the Mistakes That Hurt Horses',
        subtitle:
          'A reference guide to lunging done correctly: the equipment, the legitimate purposes, the most common mistakes, and the joint-stress concerns the AAEP and peer-reviewed literature flag.',
        category: 'Training Guide',
        authorName: 'Saddle.com Editorial',
        authorAvatar: '🐴',
        publishedAt: 'May 2026',
        readTime: '15 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Lunging Basics', href: '/guides/lunging-basics' },
      ]}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides', category: 'Hub' },
        { title: 'English Riding Guide', href: '/guides/english-riding-guide', category: 'Disciplines' },
        { title: 'Dressage Basics Guide', href: '/guides/dressage-basics-guide', category: 'Disciplines' },
        { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'Why Lunge', href: '#why' },
              { label: 'Equipment', href: '#equipment' },
              { label: 'Side Reins &mdash; The Controversy', href: '#side-reins' },
              { label: 'Session Structure', href: '#structure' },
              { label: 'Joint Stress &amp; Young Horses', href: '#joints' },
              { label: 'Common Mistakes', href: '#mistakes' },
              { label: 'Lunging for Soundness Eval', href: '#soundness' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Dressage Basics Guide', href: '/guides/dressage-basics-guide' },
              { label: 'Horse Body Condition Scoring', href: '/guides/horse-body-condition-scoring' },
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="saddle-com"
            title="Free Training Guides"
            subtitle="Lunging, ridden work, and conditioning references."
            source="guide-lunging-basics"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>
          Lunging is a useful supplement to ridden work &mdash; warm-up, conditioning, behavior work, and the most sensitive informal soundness screening available. Done badly, it is one of the most common avoidable causes of soft-tissue and joint injury in performance horses. The mistakes are predictable: sessions that are too long, circles that are too small, side reins on horses that should not have them, and lunging young horses whose growth plates are still open. AAEP guidance, Equine Veterinary Education research on circular-work lameness, and decades of FEI-level training practice all point in the same direction &mdash; short sessions, large circles, conservative use of training aids, and never as a substitute for ridden work.
        </DropCap>

        <CalloutBox variant="warning" title="Lunging done badly hurts horses">
          The four most common lunging mistakes &mdash; sessions over 30 minutes, circles under 15 m for trot/canter, side reins on green horses, and intensive lunging of horses under four years &mdash; are all documented in equine veterinary literature as contributors to lameness and joint disease. The list of mistakes below is not theoretical; it&apos;s the list of injuries vets see in clinic.
        </CalloutBox>

        <h2 id="tldr">TL;DR</h2>
        <ul>
          <li><strong>Sessions:</strong> 15&ndash;20 minutes for a fit adult horse, 10 minutes for a young or unfit horse.</li>
          <li><strong>Circle size:</strong> 15&ndash;20 m minimum for trot/canter. Walk on smaller circles is acceptable.</li>
          <li><strong>Equipment:</strong> lunge cavesson or bridle, 25&ndash;30 ft line, whip, gloves, enclosed 20 m area.</li>
          <li><strong>Side reins:</strong> controversial; appropriate only on mature schooled horses, never on greens.</li>
          <li><strong>Young horses:</strong> walk only at 2yo, very light at 3yo, standard program from 4yo+.</li>
          <li><strong>Soundness:</strong> circular work amplifies subtle lameness &mdash; a vet&apos;s screening test, not a "work through it" call.</li>
        </ul>

        <h2 id="why">Why Lunge &mdash; The Four Legitimate Purposes</h2>
        <p>Lunging earns its place when it serves one of four purposes:</p>
        <ol>
          <li><strong>Warm-up.</strong> Five to ten minutes on the lunge before mounting allows the horse to stretch the back, loosen the shoulders, and let the rider see how the horse is moving today before adding rider weight. Common practice at FEI dressage barns and competition warm-up rings.</li>
          <li><strong>Conditioning.</strong> For horses returning from layup, foals being legged up before backing, or older horses being kept in light work. Short, controlled sessions on a large circle build wind and topline without the risk of ridden work on an unfit body.</li>
          <li><strong>Behavior / freshness.</strong> A horse that has been stalled for days or is bottled up before a competition can use a lunge session to release energy in a controlled environment. Better than that energy coming out under saddle.</li>
          <li><strong>Soundness evaluation.</strong> Routinely included in veterinary lameness exams precisely because circular work amplifies subtle lameness. Lunging both directions on hard and soft surfaces is one of the most sensitive informal screening tests available.</li>
        </ol>
        <p>Lunging is <em>not</em> a substitute for ridden work, not a punishment, and not a way to "tire the horse out" before a lesson. A horse lunged hard before being ridden is a tired horse being ridden tired &mdash; you get bad work and accumulated fatigue, not progress.</p>

        <h2 id="equipment">Equipment</h2>
        <p>The minimum kit:</p>
        <ul>
          <li><strong>Lunge cavesson or bridle.</strong> A purpose-built lunge cavesson distributes pressure across the nasal bone and has rings at the front of the noseband for attaching the line &mdash; the safest setup for green horses. A bridle with the line clipped to the bit creates pressure on the corner of the mouth and is acceptable for mature schooled horses but not for green ones.</li>
          <li><strong>Lunge line.</strong> 25&ndash;30 feet of cotton webbing or flat nylon, with a swivel snap. Avoid round rope &mdash; it burns ungloved hands and runs less smoothly.</li>
          <li><strong>Lunge whip.</strong> Long enough to reach the horse from the center of the circle (typically 6&ndash;7 ft handle with a 6&ndash;7 ft lash). The whip is a signal tool, not a punishment.</li>
          <li><strong>Gloves.</strong> Non-negotiable. A horse that spooks pulls the line through ungloved hands fast enough to cause serious friction burns.</li>
          <li><strong>Enclosed area.</strong> A 20 m diameter round pen or a fenced section of an arena. Lunging in an open paddock is an injury waiting to happen.</li>
        </ul>
        <p><strong>Optional:</strong> A surcingle (a girth-only frame with rings at saddle height for attaching side reins or sliding side reins, without the rider weight of a saddle) is the standard equipment for any lunging that involves side reins. Polo wraps or sport boots are commonly used; see the <a href="/guides/horse-boot-types">boot types guide</a> for the heat-retention concerns associated with prolonged use.</p>

        <h2 id="side-reins">Side Reins &mdash; The Controversy</h2>
        <p>Side reins attach from the bit (or cavesson) back to the girth or surcingle, creating a fixed contact that asks the horse to seek the bit and develop a working frame. Used correctly on a mature, schooled horse, they are an established FEI-level training tool. Used incorrectly, they cause physical damage and mental resistance.</p>
        <ul>
          <li><strong>NOT appropriate for green horses.</strong> A horse that has not learned to accept consistent contact under saddle will react to fixed contact on the lunge by bracing, by going behind the vertical, or by panicking. None of these outcomes is what you want imprinted.</li>
          <li><strong>NOT appropriate for young horses</strong> whose necks and backs are still developing.</li>
          <li><strong>NOT appropriate as a tool to force a head position.</strong> The horse should reach for the contact, not be cranked into it.</li>
          <li><strong>Always adjusted longer than they will eventually be set</strong> &mdash; start with the side reins loose, walk the horse for a few minutes to let him find the contact, then shorten one hole at a time.</li>
          <li><strong>Removed for warm-up walking and cool-down walking.</strong> The horse should walk on a long, free line before and after work, not on shortened side reins.</li>
        </ul>
        <CalloutBox variant="warning" title="If in doubt, do without">
          AAEP and equine welfare guidance is clear: side reins on a green or young horse cause harm. If you are not sure whether your horse is ready for them, the answer is no. Plenty of FEI-level lunging is done with no side reins at all &mdash; the contact comes from the trainer&apos;s line and voice, not from a fixed mechanical aid.
        </CalloutBox>

        <h2 id="structure">Session Structure for a Fit Adult Horse</h2>
        <p>A representative 20-minute schooling lunge session:</p>
        <ol>
          <li><strong>3&ndash;5 min walk both directions</strong> on a long line, no side reins, allowing the horse to stretch and warm up.</li>
          <li><strong>If using side reins: attach loose</strong> and walk one direction with side reins on, then shorten one hole and walk the other direction.</li>
          <li><strong>3&ndash;4 min trot each direction</strong> with regular transitions to walk, on a 15&ndash;20 m circle.</li>
          <li><strong>2&ndash;3 min canter each direction</strong> if appropriate to the horse&apos;s fitness, with prompt transitions back to trot. Canter on the lunge is more strenuous than canter under saddle because the circle is consistent and the horse cannot use straight-line breaks.</li>
          <li><strong>3&ndash;5 min walk cool-down</strong> on a long line, side reins removed.</li>
        </ol>
        <p>Total trot/canter work: 10&ndash;14 minutes split across both directions. That is more than enough for a fit adult horse and more than appropriate for an unfit one.</p>

        <h2 id="joints">Joint Stress and Young Horses</h2>
        <p>Circular work loads the inside legs differently from the outside legs &mdash; the inside leg works harder to bend through the curve, and the outside leg covers more distance. The result is asymmetric loading on every joint, particularly the hocks and stifles. <em>Equine Veterinary Education</em> and clinical lameness literature have documented this for decades: lunging-related lameness is a recognized presentation, and small-circle work is repeatedly flagged as a contributor.</p>
        <p>The problem is acute in young horses. The growth plates of the long bones close at predictable ages &mdash; the cannon bone plates close around 2 years, the radius around 3.5, the humerus around 3.5, the femur around 3, the tibia around 3.5, and the cervical vertebrae continue to close into the sixth year. Closing growth plates are vulnerable to repetitive concussive stress, and asymmetric loading on a small circle is exactly the kind of stress that matters. Most equine veterinarians and respected trainers consider intensive lunging of horses under four years old a recognized injury risk.</p>
        <CalloutBox variant="evidence" title="What the literature says">
          Peer-reviewed work on lunging-related lameness &mdash; published across <em>Equine Veterinary Journal</em> and <em>Equine Veterinary Education</em> in multiple papers over the past two decades &mdash; consistently identifies small-circle work (under 15 m), prolonged duration, hard footing, and immaturity (under four years) as the principal risk factors. The cumulative recommendation is large circles, short sessions, soft footing, and conservative use in young horses.
        </CalloutBox>

        <h2 id="mistakes">The Common Mistakes</h2>
        <ul>
          <li><strong>Too long.</strong> A 45-minute lunge session is a lot of asymmetric circular work and an enormous amount of joint loading. Stay under 25 minutes total for a normal session.</li>
          <li><strong>Too small a circle.</strong> A 10 m circle at trot or canter loads the inside legs at angles that cause measurable lameness. Use 15&ndash;20 m as the floor for trot/canter; walk smaller is acceptable.</li>
          <li><strong>Side reins too tight, or used on a green horse.</strong> Both produce the same outcome: mental resistance, physical damage, and a horse that learns to brace.</li>
          <li><strong>Lunging on hard footing.</strong> Concussive load on the joints is multiplied by hard ground. Use prepared arena footing or grass; avoid concrete, hard-packed dirt, and frozen ground.</li>
          <li><strong>Lunging young horses too much, too soon.</strong> Open growth plates do not forgive heavy circular work. Walk-only sessions through age 2, light through age 3.</li>
          <li><strong>Using the lunge as punishment.</strong> A horse run to exhaustion on the lunge to "settle him down" is a horse being injured, not trained. If the horse needs to release energy, do it in turnout or in a controlled gallop, not in a 15 m circle.</li>
          <li><strong>Attaching the lunge line directly to a single side of the bit.</strong> Creates one-sided pressure on the corner of the mouth, pulls the bit through the mouth on the off side, and can damage the lips. Use a cavesson or run the line through the inside ring and over the poll to the off-side ring (the "bridle bit" method).</li>
        </ul>

        <h2 id="soundness">Lunging for Soundness Evaluation</h2>
        <p>Lunging both directions on hard and soft surfaces is a routine part of a standard equine lameness examination because circular work amplifies subtle lameness that does not appear on a straight line. Veterinarians use the following observations:</p>
        <ul>
          <li><strong>Inside fore lameness:</strong> often easier to see on a circle going with that leg on the inside (the inside fore takes more load through the curve).</li>
          <li><strong>Inside hind lameness:</strong> often easier to see on a circle going with that hind on the inside.</li>
          <li><strong>Stifle / hock issues:</strong> circular work loads the hocks asymmetrically and is one of the most sensitive screening tests for low-grade hock lameness.</li>
          <li><strong>Bilateral lameness:</strong> can be masked by symmetric movement on a straight line; the circle exposes the asymmetry.</li>
        </ul>
        <p>A horse that is sound under saddle but lame on the lunge has a low-grade lameness that warrants veterinary investigation. The right response is not to keep lunging; it is to call the vet.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQ_ITEMS} includeSchema={false} allowMultiple />

        <CalloutBox variant="note" title="Sources">
          American Association of Equine Practitioners (AAEP) &mdash; lameness exam protocols and lunging safety guidance, <a href="https://aaep.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">aaep.org</a>. <em>Equine Veterinary Education</em> and <em>Equine Veterinary Journal</em> &mdash; multi-year peer-reviewed literature on lunging-related lameness, small-circle joint loading, and the role of immaturity in injury risk. United States Pony Clubs (USPC) and British Horse Society lunging and side-rein training standards. Long-form lunging discussions from FEI-level trainers (Reiner Klimke, Anky van Grunsven) on circle size, side-rein use, and session length.
        </CalloutBox>
      </div>
    </ArticleLayout>
    </>
  )
}
