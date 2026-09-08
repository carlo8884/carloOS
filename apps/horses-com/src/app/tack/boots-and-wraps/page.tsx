import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Boots and Leg Wraps — Types, Purpose, and Pitfalls",
  description:
    "Reference guide to horse boots and leg wraps: brushing and tendon boots, bell boots, polo wraps and stable bandages, and the risks of wrapping wrong.",
  path: '/tack/boots-and-wraps',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Boots and Leg Wraps — Types, Purpose, and Pitfalls",
  description:
    "Reference guide to horse boots and leg wraps: brushing and tendon boots, bell boots, polo wraps and stable bandages, and the risks of wrapping wrong.",
  url: 'https://horses.com/tack/boots-and-wraps',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "Do horse boots support the tendons?",
    answer:
      "Not meaningfully. The forces on a galloping or landing horse's tendons are enormous, and boots provide impact protection against knocks and brushing rather than genuine structural support against those loads. Their real value is preventing cuts and strikes, so they should be chosen for protection and fitted snugly but not tightly.",
    answerText:
      "Not really -- the loads on tendons are enormous, and boots protect against impacts and brushing rather than supporting tendons. Choose them for protection and fit snugly, not tight.",
  },
  {
    question: "Can leg bandages hurt a horse?",
    answer:
      "Yes. A bandage applied too tightly, unevenly, or without enough padding can cut off circulation and press on the tendons, in the worst case causing a bandage bow and lasting tendon damage. Bandages need even padding, consistent moderate tension, and correct application, which is why the skill is best learned hands-on from a knowledgeable horseperson or vet.",
    answerText:
      "Yes -- a too-tight or uneven bandage can cut off circulation and damage tendons (a bandage bow). They need even padding and moderate tension, best learned hands-on.",
  },
  {
    question: "What are bell boots for?",
    answer:
      "Bell boots are rubber bells that fit over the hoof and heel to protect against overreaching -- when a hind foot strikes the back of a front hoof or heel -- and to help prevent the horse pulling off a front shoe. They are commonly used in work, turnout, and for horses prone to overreaching or losing shoes.",
    answerText:
      "Bell boots fit over the hoof and heel to protect against overreaching strikes from the hind feet and to help prevent the horse pulling off front shoes.",
  },
]

export default function BootsWrapsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Equine Lameness Basics', href: '/health/lameness-basics' },
          { title: 'Saddle Pads and Numnahs', href: '/tack/saddle-pads' },
          { title: 'Girths and Cinches', href: '/tack/girths-and-cinches' },
        ]}
        hero={{
          title: "Horse Boots and Leg Wraps",
          subtitle:
            "Leg protection -- boots and bandages -- guards the horse's lower legs from knocks during work, supports recovery in some situations, and is one of the more misunderstood areas of horse care. Used correctly, boots prevent injury; applied wrongly, a too-tight bandage can do serious tendon damage. This guide covers the main types, what they are for, and the pitfalls to avoid. This is reference material to inform use alongside hands-on instruction.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Boots and Wraps", href: '/tack/boots-and-wraps' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Use Leg Protection", href: "#why" },
            { label: "Boots", href: "#boots" },
            { label: "Wraps and Bandages", href: "#wraps" },
            { label: "The Dangers of Wrapping Wrong", href: "#dangers" },
            { label: "Do Boots Support Tendons?", href: "#support" },
            { label: "Boot and Wrap Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Show Jumping", href: "/disciplines/show-jumping" },
              { label: "Trailering and Transport", href: "/care/trailering" },
              { label: "First-Aid Kit", href: "/ownership/first-aid-kit" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-boots"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Owner notes
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">Owner notes</h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">Leave an email if you want occasional owner notes from this page. We send them to the inbox you enter. There is no downloadable kit, PDF, or course.</p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Owner notes"
              subtitle="We'll use this address for occasional notes from this page. No downloadable kit, PDF, or course."
              ctaText="Send the notes"
              source="tack-boots-and-wraps-under-hero"
            />
          </div>

          <h2 id="why">Why Use Leg Protection</h2>
          <p>Horses can strike one leg with another (brushing or interfering), overreach with a hind foot onto a front heel, or knock a leg on a fence or jump. Boots and wraps protect against these impacts and abrasions during work, travel, and turnout. Some are also used in veterinary care to hold dressings or provide support during recovery. The key is to use the right protection for the purpose and to fit it correctly.</p>

          <h2 id="boots">Boots</h2>
          <ul>
            <li><strong>Brushing (splint) boots</strong> -- protect the inside of the lower leg from strikes by the opposite hoof during work.</li>
            <li><strong>Tendon and fetlock boots</strong> -- protect the back of the front legs (tendon area) and the fetlocks, common in jumping.</li>
            <li><strong>Open-front boots</strong> -- jumping boots that protect the tendons while leaving the front open so the horse feels a rail.</li>
            <li><strong>Bell (overreach) boots</strong> -- rubber bells over the hoof and heel that protect against overreaching strikes and lost shoes.</li>
            <li><strong>Travel boots</strong> -- padded boots protecting the legs from knocks during transport.</li>
          </ul>

          <h2 id="wraps">Wraps and Bandages</h2>
          <ul>
            <li><strong>Polo wraps</strong> -- fleece bandages applied over the lower leg for light protection and warmth in schooling; not waterproof and not for turnout.</li>
            <li><strong>Exercise bandages</strong> -- applied over padding for protection and a degree of support during work, requiring skilled application.</li>
            <li><strong>Stable bandages</strong> -- thick padded bandages for the stable, used for warmth, to reduce filling (stocking up), or over a dressing.</li>
            <li><strong>Veterinary support and dressing bandages</strong> applied to hold dressings and support an injury, ideally taught and supervised by a veterinarian.</li>
          </ul>

          <h2 id="dangers">The Dangers of Wrapping Wrong</h2>
          <p>A leg bandage applied too tightly, unevenly, or without adequate padding can cut off circulation and create pressure on the tendons -- in the worst case causing a bandage bow, lasting tendon damage. Bandages must be applied over sufficient even padding, with consistent, moderate tension, in the correct direction, and never left on too long or allowed to slip. Because of these risks, bandaging is a skill best learned hands-on from a knowledgeable horseperson or veterinarian rather than from a diagram alone.</p>
          

          <h2 id="support">Do Boots Support Tendons?</h2>
          <p>Owners often assume boots meaningfully support the tendons and ligaments. In reality, the forces on a galloping or landing horse&apos;s tendons are enormous, and boots provide impact protection rather than genuine structural support against those loads. Their real value is preventing the cuts, knocks, and brushing injuries that come from strikes and interference. Choosing boots for protection, fitting them snugly but not tightly, and keeping them clean and dry inside (grit under a boot causes rubs) matters more than chasing support claims.</p>
          <p>
            A horse-boot impact-not-tendon-support question card is how &quot;boots protect against knocks and brushing, they do not structurally support tendons&quot; stays posted — it is not a saddle-pad sweat-pattern dry-spot question card (that lives on saddle-pads), not a riding helmet certification-label question card (that lives on helmet-guide), not a horse buyer vet-briefing question card (that lives on pre-purchase-exam), and not a horse handler kick-zone safety question card (that lives on reading-body-language). This page does not invent clinic listings. </p>
          <p>
            A horse-boot grit-rub clean-dry log notebook is how grit-under-a-boot-causes-rubs and clean-dry-inside stay written down — it is not a saddle-pad clean-dry rotation log notebook (that lives on saddle-pads), not a riding helmet impact-retirement log notebook (that lives on helmet-guide), not a horse pain-demeanor change-log notebook (that lives on reading-body-language), and not a senior horse weight-and-joint watch notebook (that lives on senior-horse-care). </p>

          <h2 id="picks">Boot and Wrap Picks</h2>
          <p>A few widely-stocked leg-protection options across the common needs. As the section above explains, boots provide impact protection, not structural tendon support; choose for protection and fit, keep them clean and dry inside, and learn to wrap correctly before relying on standing wraps. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="brushing-boots"
            badge="Everyday Protection"
            name="Synthetic Brushing / Splint Boots"
            subtitle="Impact and interference protection for schooling"
            score={8.5}
            winner
            description={<>
              <p>Synthetic brushing (splint) boots are the everyday workhorse for protecting the lower leg from interference strikes during schooling and turnout. Modern neoprene-lined or perforated designs are washable and dry quickly, which matters because grit trapped under a boot causes rubs.</p>
              <p>Reasonable choice for: flatwork, lunging, and general schooling where brushing or interference is a concern. Fit snugly but not tightly, and clean after each use.</p>
            </>}
            specs={[
              { label: 'Protection', value: 'Impact / interference', highlight: 'good' },
              { label: 'Care', value: 'Washable, quick-dry liners' },
              { label: 'Best use case', value: 'Schooling, lunging, turnout' },
            ]}
            pros={['Reliable interference protection', 'Washable and quick-drying', 'Widely available in all sizes']}
            cons={['No genuine tendon support (none provides it)', 'Trapped grit can cause rubs', 'Must be fitted correctly']}
            price="$25–70 per pair"
            ctaText="Compare at Riding Warehouse →"
            ctaHref="/go/ridingwarehouse/synthetic-brushing-boots?s=tack-boots-and-wraps"
            ctaAffiliateProgram="ridingwarehouse"
            ctaAffiliateProduct="synthetic-brushing-boots"
          />

          <ReviewCard
            id="bell-boots"
            badge="Overreach Protection"
            name="Pull-On Bell Boots"
            subtitle="Protects the heel bulbs and shoes from overreaching"
            score={8.4}
            description={<>
              <p>Bell boots protect the heel bulbs and coronet from overreach injuries — when a hind foot strikes the back of a front foot — and help prevent a horse from pulling a front shoe. Pull-on styles stay secure; hook-and-loop styles are easier to fit but can come loose in deep footing.</p>
              <p>Most relevant for horses that overreach, forge, or repeatedly pull front shoes, and for jumping and fast work where overreach risk is higher.</p>
            </>}
            specs={[
              { label: 'Protection', value: 'Heel bulbs, coronet, front shoes' },
              { label: 'Closure', value: 'Pull-on or hook-and-loop' },
              { label: 'Best use case', value: 'Overreaching / shoe-pulling horses' },
            ]}
            pros={['Prevents overreach and shoe-pulling injuries', 'Inexpensive insurance against lost shoes', 'Pull-on styles stay secure']}
            cons={['Pull-on styles are harder to put on', 'Can rub if oversized', 'Need cleaning after muddy work']}
            price="$12–35 per pair"
            ctaText="Compare at SmartPak →"
            ctaHref="/go/smartpak/pull-on-bell-boots?s=tack-boots-and-wraps"
            ctaAffiliateProgram="smartpak"
            ctaAffiliateProduct="pull-on-bell-boots"
          />

          <ReviewCard
            id="standing-wraps"
            badge="Stable Wraps"
            name="Standing Wraps with Quilted Liners"
            subtitle="Stable bandaging — only with correct technique"
            score={8.0}
            description={<>
              <p>Standing wraps over quilted liners (no-bow style) are used for stable support, mild swelling management, and protecting the lower leg in the stall or trailer. The critical caveat from the section above applies: incorrect wrapping can cause real tendon damage, so technique matters more than the product. Even tension, correct direction, and appropriate padding are non-negotiable.</p>
              <p>Most relevant for owners who have been taught correct wrapping technique. If you are not confident wrapping, learn hands-on from a professional before relying on standing wraps.</p>
            </>}
            specs={[
              { label: 'Use', value: 'Stable / trailer support' },
              { label: 'Requirement', value: 'Correct wrapping technique', highlight: 'warn' },
              { label: 'Best use case', value: 'Stall rest, travel, mild swelling' },
            ]}
            pros={['Versatile stable and travel protection', 'Quilted liner distributes pressure', 'Reusable and washable']}
            cons={['Wrapped wrong, can cause tendon damage', 'Requires learned technique', 'Time-consuming to apply correctly']}
            price="$15–40 per set"
            ctaText="Compare at Dover Saddlery →"
            ctaHref="/go/dover/standing-wraps-and-quilts?s=tack-boots-and-wraps"
            ctaAffiliateProgram="dover"
            ctaAffiliateProduct="standing-wraps-and-quilts"
          />

          {/* Shop leftover kit — unused vs #1141
              laminated+saddle+pad+cannot+fix+fit+checklist /
              saddle+pad+sweat+pattern+dry+spot+question+card /
              saddle+pad+clean+dry+rotation+log+notebook, #1140
              laminated+riding+helmet+fit+and+replace+checklist /
              riding+helmet+certification+label+question+card /
              riding+helmet+impact+retirement+log+notebook, #1139
              laminated+first+horse+90+day+week+by+week+checklist /
              first+horse+ground+manners+cue+card /
              first+horse+tack+room+emergency+plan+card, #1138
              laminated+senior+horse+age+related+change+checklist /
              senior+horse+weight+and+joint+watch+notebook /
              senior+horse+quality+of+life+score+card, #1137
              laminated+horse+ear+eye+tail+signal+checklist /
              horse+handler+kick+zone+safety+question+card /
              horse+pain+demeanor+change+log+notebook, #1136
              laminated+pre+purchase+exam+stage+walkthrough+checklist /
              horse+pre+purchase+exam+findings+decision+worksheet /
              horse+buyer+vet+briefing+question+card, #1135
              horse+lease+agreement+document+binder /
              laminated+horse+lease+walkthrough+checklist /
              horse+full+vs+partial+lease+cost+share+worksheet, #1134
              horse+insurance+policy+document+binder /
              laminated+horse+insurance+claims+checklist /
              horse+mortality+vs+major+medical+decision+worksheet, #1133
              horse+ownership+monthly+budget+worksheet /
              equine+emergency+fund+expense+tracker+notebook /
              horse+keep+feed+farrier+cost+log+binder, #1132
              laminated+equine+vet+interview+checklist /
              horse+after+hours+emergency+cover+question+card /
              horse+veterinary+history+vcpr+records+folder, #1131
              first+horse+buyer+visit+field+notebook /
              laminated+first+horse+tryout+walkthrough+checklist /
              horse+pre+purchase+exam+records+binder, #1130
              laminated+horse+boarding+facility+walkthrough+checklist /
              horse+boarding+contract+document+binder /
              waterproof+horse+hay+bale+storage+tarp, #1129
              sterile+saline+wound+flush+horse /
              nonstick+wound+dressing+pads+horse /
              equine+bandage+scissors,
              saddle-fit-basics
              horse+saddle+pad /
              horse+sheepskin+half+pad /
              horse+saddle+shims /
              horse+girth+cinch,
              horse-size-for-rider
              ASTM+SEI+horse+riding+helmet,
              trailering
              horse+shipping+boots /
              horse+shipping+wraps,
              grimace / first-aid
              ice+boot+cold+therapy+wrap /
              vet+wrap /
              equine+first+aid+kit,
              #1128
              laminated+horse+barn+calculator+tools+chart /
              horse+stall+door+measurement+card /
              equine+calculator+reference+handbook, #1127
              laminated+horse+barn+owner+guides+chart /
              horse+stall+door+owner+guides+card /
              equine+owner+guides+reference+handbook, #1126
              laminated+horse+barn+daily+care+chart /
              horse+stall+door+care+card /
              equine+husbandry+reference+handbook, #1125
              laminated+horse+barn+emergency+triage+chart /
              horse+stall+door+vital+signs+card /
              equine+health+reference+handbook. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+supplies?s=boots-and-wraps"
                amazonLabel="Shop on Amazon"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+boot+impact+not+tendon+support+question+card?s=boots-and-wraps"
                amazonLabel="Browse horse-boot impact-not-tendon-support question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+boot+grit+rub+clean+dry+log+notebook?s=boots-and-wraps"
                amazonLabel="Browse horse-boot grit-rub clean-dry log notebooks on Amazon →"
              />
          </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (bandaging and boots).</li>
            <li>Research on tendon loading and the protective versus supportive role of boots, various.</li>
            <li>American Association of Equine Practitioners. “Leg Care and Bandaging” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
