import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Boots and Leg Wraps — Types, Purpose, and Pitfalls",
  description:
    "Reference guide to horse boots and leg wraps: brushing and tendon boots, bell boots, polo wraps and stable bandages, what they do, and the risks of wrapping wrong.",
  path: '/tack/boots-and-wraps',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Boots and Leg Wraps — Types, Purpose, and Pitfalls",
  description:
    "Reference guide to horse boots and leg wraps: brushing and tendon boots, bell boots, polo wraps and stable bandages, what they do, and the risks of wrapping wrong.",
  url: 'https://horses.com/tack/boots-and-wraps',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
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
