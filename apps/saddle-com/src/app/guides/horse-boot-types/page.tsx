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
  title: 'Horse Boot Types — Brushing, Tendon, Bell, Polo | Saddle.com',
  description:
    'Horse boot types — brushing, tendon, open-front, bell, polo wraps. Materials, when to use, when NOT to, and the peer-reviewed heat retention concerns.',
  path: '/guides/horse-boot-types',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Horse Boot Types 2026',
  description:
    'Brushing, tendon, open-front, bell boots, and polo wraps explained. Materials, use cases, when not to use boots, and the peer-reviewed heat-retention concerns.',
  url: 'https://saddle.com/guides/horse-boot-types',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const FAQ_ITEMS = [
  {
    question: 'Do horses actually need boots for normal work?',
    answer:
      'For most ridden work on prepared footing, sound horses do not need protective boots. The cases where boots are genuinely useful are: horses that interfere (one leg striking the other), jumping (open-front boots as an "advanced warning system" so the horse feels the pole on a rub), cross-country (eventing boots for cuts on natural obstacles), turnout in muddy fields (bell boots to keep shoes on), and rehab after a soft-tissue injury (controlled support, by vet recommendation). Outside those cases, boots add weight, retain heat, and can introduce skin problems from rubbing or moisture trapped against the leg.',
    answerText:
      'For most ridden work on prepared footing, sound horses do not need boots. Boots are genuinely useful for interfering horses, jumping (open-front), cross-country, mud turnout, and vet-prescribed rehab.',
  },
  {
    question: 'Why are polo wraps controversial?',
    answer:
      'Polo wraps are popular because they look traditional and are cheap, but peer-reviewed work on heat retention under leg coverings &mdash; Hood et al. (1999) and Westermann et al. (2014) being the most-cited &mdash; documents that polo wraps and similarly thick coverings significantly raise leg surface and subsurface temperatures during exercise. The concern is that the heat may affect the superficial digital flexor tendon, which has a small margin between normal working temperature and the temperature at which collagen damage begins. Polo wraps also have to be applied with even tension or they can create localized pressure on the tendons, with reported tendon injuries linked to incorrect application. Most upper-level eventers and showjumpers have moved to lightweight ventilated boots specifically to manage the heat issue.',
    answerText:
      'Peer-reviewed research (Hood 1999, Westermann 2014) shows polo wraps significantly raise leg temperature during exercise, with concerns for tendon heat damage. Improper tension is also linked to tendon injury.',
  },
  {
    question: 'When should I NOT use boots?',
    answer:
      'Three situations: (1) Dressage tests &mdash; FEI and USEF dressage rules disallow boots in the test arena (only allowed in warm-up). The horse is judged on naked legs, and putting boots on for a dressage test is a rule violation. (2) Some hunter classes &mdash; hunters are traditionally shown on naked legs, with the judge evaluating turnout including the leg appearance. (3) Long turnout in hot or wet weather &mdash; the heat-retention and moisture-trapping concerns multiply with hours, not minutes, and prolonged use can cause skin infection (mud fever, scratches). Boots are working gear, not all-day wear.',
    answerText:
      'NOT for: dressage tests (rule prohibition), hunter classes (judged on naked legs), or prolonged turnout in hot/wet weather (skin infection risk).',
  },
  {
    question: 'What is the difference between a tendon boot and an open-front boot?',
    answer:
      'A tendon boot has a closed back and an open front and is designed to protect the back of the leg (where the deep digital flexor tendon runs) from being struck by the hoof of the trailing leg while jumping. An open-front boot is essentially the same shape but specifically used in show jumping with the deliberate idea of leaving the front of the cannon bone exposed &mdash; so the horse feels any pole he rubs and learns to pick the leg up higher. They are functionally similar; the use case differs. Brushing boots, by contrast, are full-wrap (front and back) and primarily for horses that strike the inside of one leg with the other during flat work.',
    answerText:
      'Tendon boot: closed back, open front, protects flexor tendon from trailing hoof strike in jumping. Open-front boot: same shape, used in show jumping so the horse feels rub on a pole.',
  },
  {
    question: 'What materials are best for horse boots?',
    answer:
      'Three common material categories: neoprene (cheap, durable, the highest heat retention), leather (traditional, breathes better than neoprene, more maintenance, more expensive), and breathable mesh / perforated synthetics (the newest category, designed to address the heat-retention concerns by allowing airflow). Top FEI brands &mdash; Veredus, Equilibrium, Eskadron &mdash; offer ventilated and perforated designs specifically to manage heat. Fleece-lined boots (turnout brushing) add cushioning but compound the heat issue and should be reserved for cold-weather or low-exertion turnout. Choose by exertion level: shortest, hottest work gets the most-ventilated boot.',
    answerText:
      'Neoprene: cheap, durable, most heat retention. Leather: breathes better, traditional. Ventilated mesh/perforated synthetics: newest category, addresses heat concerns. Match the material to exertion level.',
  },
  {
    question: 'How tight should boots be applied?',
    answer:
      'Tight enough that the boot does not slip down the leg during work, loose enough that you can slide one finger flat between the boot and the leg at the top and bottom edges. Boots applied too tight cause pressure on the underlying tendons and can produce more harm than they prevent. Boots applied too loose slide down the leg and can cause the horse to step on or trip over them. Always apply from front (knee) to back (fetlock), velcro strapping toward the rear so it does not catch the opposite leg. After a ride, look for cool, dry skin under the boot with no rub marks &mdash; warm, sweaty skin with rub marks is a sign of fit or material problems.',
    answerText:
      'One finger flat at top and bottom edges. Too tight: pressure on tendons. Too loose: slips. Apply front-to-back, velcro toward rear. Check skin after for warmth, rub marks, sweat.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answerText || (typeof f.answer === 'string' ? f.answer : '') })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function HorseBootTypesPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout
      siteId="saddle-com"
      hero={{
        title: 'Horse Boot Types — Brushing, Tendon, Bell, Open-Front, Polo Wraps',
        subtitle:
          'A reference guide to the leg protection categories &mdash; what each boot is for, the material trade-offs, when not to use boots at all, and the peer-reviewed heat-retention concerns that have driven the FEI shift to ventilated designs.',
        category: 'Equipment Guide',
        authorName: 'Saddle.com Editorial',
        authorAvatar: '🐴',
        publishedAt: 'May 2026',
        readTime: '14 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Horse Boot Types', href: '/guides/horse-boot-types' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR &mdash; The Six Categories', href: '#tldr' },
              { label: 'Brushing Boots', href: '#brushing' },
              { label: 'Tendon &amp; Open-Front Boots', href: '#tendon' },
              { label: 'Bell Boots', href: '#bell' },
              { label: 'Polo Wraps &mdash; The Heat Issue', href: '#polo' },
              { label: 'Materials &amp; Construction', href: '#materials' },
              { label: 'When NOT to Use Boots', href: '#avoid' },
              { label: 'Top Brands', href: '#brands' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
              { label: 'Lunging Basics', href: '/guides/lunging-basics' },
              { label: 'Bridle Fit Guide', href: '/guides/bridle-fit-guide' },
              { label: 'Best Saddle Pads', href: '/reviews/best-saddle-pads' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="saddle-com"
            title="Free Equipment Guides"
            subtitle="Boots, wraps, and protective gear references."
            source="guide-horse-boots"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>
          Horse boots fall into six functional categories &mdash; brushing, tendon, open-front jumper, bell, polo wraps, and turnout. Each protects against a specific risk: interfering, jumping strike, hoof-on-coronet contact, mud and shoe loss, or general scrapes in pasture. The shared cost across all boot types is heat retention. Peer-reviewed work (Hood 1999, Westermann 2014, and follow-up studies) has measured significant temperature increases in the digital flexor tendons under leg coverings during exercise &mdash; the modern FEI-brand shift to ventilated and perforated designs is a direct response. Boots are working gear, not all-day wear, and dressage and most hunter classes prohibit them in the show ring.
        </DropCap>

        <CalloutBox variant="warning" title="The heat-retention issue is real">
          Hood et al. (1999) and Westermann et al. (2014) both measured significant increases in tendon temperature under leg coverings during exercise. The superficial digital flexor tendon has a narrow margin between normal working temperature and the temperature at which collagen damage begins. The practical implications: choose ventilated materials for hard work, remove boots immediately after the ride, and never leave wraps or boots on for hours after exercise.
        </CalloutBox>

        <h2 id="tldr">TL;DR &mdash; The Six Categories</h2>
        <ul>
          <li><strong>Brushing boots:</strong> full wrap, front and back, for horses that strike one leg with the other.</li>
          <li><strong>Tendon boots:</strong> closed back, open front, for jumping &mdash; protects flexor tendon from trailing hoof strike.</li>
          <li><strong>Open-front jumper boots:</strong> deliberately exposed front, used in show jumping as a "warning system" on rubs.</li>
          <li><strong>Bell boots:</strong> wrap around the coronet, prevent overreach and lost shoes.</li>
          <li><strong>Polo wraps:</strong> traditional, cheap, controversial &mdash; heat retention and application-tension issues.</li>
          <li><strong>Turnout / brushing boots:</strong> heavier fleece or neoprene for paddock or muddy turnout.</li>
        </ul>

        <h2 id="brushing">Brushing Boots &mdash; Training and Turnout</h2>
        <p>A brushing boot is a full-wrap leg protection that covers the cannon bone front to back, fastening with velcro straps on the outside. The purpose: protect a horse that "brushes" or strikes the inside of one leg with the hoof of the other during work. Horses with conformation that puts the legs close together (especially the hind legs) are most at risk; horses that move with a wide track usually do not need them.</p>
        <p>Brushing boots are the most common training-level boot category. Materials run from cheap neoprene (Roma, Cashel) at the low end to perforated EVA and breathable mesh (Veredus, Eskadron) at the FEI level. Fleece-lined turnout brushing boots add cushioning for paddock use; they are inappropriate for ridden work because the fleece compounds heat retention.</p>
        <p><strong>Top brands for brushing boots:</strong> Veredus (Italy, FEI ventilated designs), Eskadron (Germany, full range), Roma (entry to mid-price), Cashel (US-made, good value), Professional&apos;s Choice (well-known SMB &mdash; sports medicine boot &mdash; line, also see below).</p>

        <h2 id="tendon">Tendon Boots and Open-Front Jumper Boots</h2>
        <p>A tendon boot has a hard outer shell on the back of the leg (protecting the deep digital flexor tendon) and is left open in the front. The use case is jumping: when the horse takes off, the trailing hoof can clip the back of the foreleg, and the tendon boot absorbs that strike. The open front is functional in show jumping &mdash; it means the horse feels any pole he rubs as a direct hit on the cannon, which (the training theory holds) teaches him to pick the leg up higher next time. This is the "advanced warning system" concept; whether it actually trains carefulness is contested, but the design is the standard at FEI show jumping level.</p>
        <p>Some closed-front tendon boots exist for cross-country or eventing where the protection priority is greater than the training feedback &mdash; but open front is the show-jumping convention. Top brands: <strong>Veredus</strong> (Olympic FEI use), <strong>Equilibrium</strong>, <strong>Eskadron</strong>, <strong>EquiFit</strong>, <strong>Professional&apos;s Choice</strong>.</p>

        <h2 id="bell">Bell Boots &mdash; Overreach Protection</h2>
        <p>Bell boots wrap around the pastern just above the coronet (the band of soft tissue at the top of the hoof). They are bell-shaped because they have to flare over the heel of the hoof while staying snug at the pastern. Their job is to absorb overreach &mdash; the moment a hind hoof strikes the heel or coronet of a front foot &mdash; which is the leading cause of pulled shoes and a common cause of heel injury.</p>
        <p>Bell boots come in three categories: <strong>turnout</strong> (open velcro closure, easier to put on, also easier to lose), <strong>pull-on</strong> (rubber, no closure, more secure but harder to fit), and <strong>no-turn</strong> (with a fitted nub that sits behind the pastern to prevent rotation). For a shoe-puller in turnout, no-turn pull-on bell boots are the most reliable.</p>

        <h2 id="polo">Polo Wraps &mdash; The Heat Issue</h2>
        <p>Polo wraps are long fleece bandages applied in a spiral wrap around the leg, anchored at the top with velcro. They look traditional, are inexpensive, and have been in use for generations. They are also the most controversial leg covering in modern equestrian sport.</p>
        <p>Two issues. First, heat. Peer-reviewed work &mdash; Hood et al. (1999) was the foundational study, with follow-up by Westermann et al. (2014) and others &mdash; documented significant temperature elevation under leg wraps during exercise. The superficial digital flexor tendon, which runs down the back of the cannon, has a narrow margin between normal working temperature and the temperature at which collagen damage begins. Wraps that retain heat may push the tendon toward that threshold during sustained work.</p>
        <p>Second, application tension. Polo wraps applied unevenly can create localized pressure on the tendon, and case reports in the veterinary literature have linked improperly applied wraps to tendon injury. The wrap must be applied with even tension, with the velcro anchored away from the tendon, and with no twists or wrinkles. Most riders are not expert wrappers, which is part of why FEI-level competition has shifted toward ventilated synthetic boots that fit consistently.</p>
        <CalloutBox variant="evidence" title="The peer-reviewed evidence on heat">
          Hood DM et al. (1999) measured leg-surface and subsurface temperatures during exercise with and without polo wraps and similar coverings. Westermann F et al. (2014) extended this work with additional materials and exercise protocols. The combined finding: leg coverings raise local temperatures meaningfully during exercise, with the largest increases on the thickest and least ventilated materials. The FEI brand shift toward ventilated and perforated boots is a direct response to this body of work.
        </CalloutBox>

        <h2 id="materials">Materials and Construction</h2>
        <ul>
          <li><strong>Neoprene.</strong> Cheap, durable, holds shape well, the highest heat retention of common materials. Acceptable for short sessions and turnout; less appropriate for sustained jumping or cross-country work.</li>
          <li><strong>Leather.</strong> Traditional appearance, breathes better than neoprene, requires conditioning and more careful storage. The Veredus and Equipe top-tier leather boots are the show-jumping standard at FEI level.</li>
          <li><strong>Breathable mesh / perforated synthetics.</strong> The newest category, specifically engineered to reduce heat retention through ventilation. Veredus Carbon Gel, Equilibrium Tri-Zone, and Eskadron Air-Tex represent this category.</li>
          <li><strong>Fleece-lined.</strong> Adds cushioning, compounds heat issues. Acceptable for cold-weather turnout brushing; inappropriate for hot-weather ridden work.</li>
          <li><strong>Memory foam / EVA inserts.</strong> Many modern protective boots use a structured shock-absorbing insert (Professional&apos;s Choice SMB, EquiFit T-Foam) inside a perforated shell. Combines impact protection with ventilation.</li>
        </ul>

        <h2 id="avoid">When NOT to Use Boots</h2>
        <p>Three categories where boots should be off:</p>
        <ul>
          <li><strong>Dressage tests.</strong> FEI and USEF dressage rules prohibit boots in the test arena (warm-up is fine). The horse is judged on naked legs, and entering the ring booted is a disqualifying rule violation.</li>
          <li><strong>Hunter classes.</strong> Hunters are traditionally shown on naked legs &mdash; the judge evaluates turnout including the appearance of the leg. Check the specific class rules, but assume no boots unless explicitly allowed.</li>
          <li><strong>Prolonged turnout in hot or wet weather.</strong> The heat-retention and moisture-trapping concerns multiply over hours. Bell boots in muddy turnout are common and acceptable; full leg wraps for hours of pasture turnout are not. Mud fever and scratches (pastern dermatitis) are recognized consequences of leg coverings worn too long.</li>
        </ul>
        <p>A working principle: <strong>boots are working gear, not all-day wear</strong>. Put them on before work, take them off immediately after, check the skin for warmth and sweat, and let the leg breathe.</p>

        <h2 id="brands">Top Brands by Category</h2>
        <ul>
          <li><strong>FEI / Olympic show jumping:</strong> Veredus, Equipe, Equilibrium.</li>
          <li><strong>Eventing / cross-country:</strong> Eskadron, Veredus Carbon, EquiFit.</li>
          <li><strong>Dressage warm-up:</strong> Equine Comfort Products, Eskadron.</li>
          <li><strong>Everyday schooling:</strong> Roma, Cashel, Professional&apos;s Choice.</li>
          <li><strong>Turnout / brushing:</strong> Cashel, Roma, Tough-1.</li>
          <li><strong>Bell boots (everyday):</strong> Professional&apos;s Choice, Roma, Davis no-turn.</li>
        </ul>
        <p>The pattern across categories is consistent: the FEI brands are charging a premium for engineering that addresses heat retention and fit precision, while the mid-tier brands offer acceptable function at half the cost for everyday schooling. There is no need to pay FEI prices for a horse that schools at a low level on prepared footing.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQ_ITEMS} includeSchema={false} allowMultiple />

        <CalloutBox variant="note" title="Sources">
          Hood DM et al., 1999 &mdash; foundational peer-reviewed study on leg temperature under wraps during exercise. Westermann F et al., 2014 &mdash; extended pressure and temperature measurements across boot materials. United States Equestrian Federation (USEF) dressage and hunter rulebooks &mdash; show-ring boot prohibitions, <a href="https://www.usef.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">usef.org</a>. F&eacute;d&eacute;ration Equestre Internationale (FEI) dressage regulations &mdash; permitted equipment in test arena. Brand specifications drawn from manufacturer technical sheets (Veredus, Equilibrium, Eskadron, EquiFit, Professional&apos;s Choice, Cashel, Roma).
        </CalloutBox>
      </div>
    </ArticleLayout>
    </>
  )
}
