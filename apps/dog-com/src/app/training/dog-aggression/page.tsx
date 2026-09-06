import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  CrossPortfolioCard,
  ArticleByline,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Aggression — Types, Causes | Dog.com',
  description:
    'Dog aggression types: fear-based, resource guarding, redirected, pain-related, and inter-dog. Warning signals, what never to do.',
  path: '/training/dog-aggression',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Aggression',
  description: 'Types, causes, warning signals, and professional intervention for dog aggression.',
  url: 'https://dog.com/training/dog-aggression',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

export default function DogAggressionPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{
        title: 'Dog Aggression',
        subtitle:
          'Aggression is the most misunderstood behavioral problem in dogs — and the most dangerous to address incorrectly. Dominance-based "corrections" and punishment consistently make aggression worse. Understanding the type of aggression and its function determines the correct approach.',
        category: 'Dog Training',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐕',
        publishedAt: 'May 2025',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Training', href: '/training' },
        { name: 'Dog Aggression', href: '/training/dog-aggression' },
      ]}
      relatedLinks={[
        { title: 'Dog Training Hub', href: '/training', category: 'Hub' },
        { title: 'Dog Anxiety (Health)', href: '/health/dog-anxiety', category: 'Dog Health' },
        { title: 'Resource Guarding', href: '/training/resource-guarding', category: 'Training' },
        { title: 'Leash Reactivity', href: '/training/leash-reactivity', category: 'Training' },
        { title: 'Trainer Credentials', href: '/training/trainer-credentials', category: 'Training' },
      ]}
      schema={schema}
      sidebar={
        <>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">
              Never Do This
            </div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {[
                'Alpha roll or physical domination',
                'Punish a growl (removes warning)',
                'Stare down an aggressive dog',
                '"Flood" the dog with the trigger',
                'Scruff shaking or hitting',
                'Choke chains or prong collars for aggression',
              ].map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-brand-danger font-bold">✗</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Resource Guarding', href: '/training/resource-guarding' },
              { label: 'Leash Reactivity', href: '/training/leash-reactivity' },
              { label: 'Trainer Credentials', href: '/training/trainer-credentials' },
            ]}
          />
          <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="dog-com"
            title="Free Training Tips"
            subtitle="Science-based guidance weekly."
            source="training-aggression"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Dog.com Editorial"
          publishedAt="2025-05-01T00:00:00Z"
          updatedAt="2026-09-06T00:00:00Z"
          reviewedBy="Editorial team"
        />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog-aggression warning-signal checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog-aggression warning-signal checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the dog-aggression warning-signal sequence checklist, type-and-function question card,
            and never-alpha-roll watch log that match the warning-signals, types-of-aggression, dominance-theory,
            and professional-help copy on this page — a laminated dog aggression warning-signal sequence
            checklist so growling-is-communication / punishing-a-growl-compresses-this-sequence /
            dogs-that-bite-without-warning stay visible before anyone punishes a growl or stares a dog down
            (not a laminated dog resource-guarding trade-game checklist, not a laminated dog off-leash
            recall-proofing checklist, not a laminated horse snaffle-vs-curb bit checklist), a dog
            aggression type-and-function question card so fear-based-aggression-is-the-most-common /
            redirected-aggression / rule-out-pain-first-in-any-new-onset-aggression stay posted (not a
            dog food-bowl safety question card, not a dog 20-to-30-foot long-line question card, not a
            horse bit width-and-wrinkle fit question card), and a dog aggression never-alpha-roll watch
            log notebook so dominance-theory-has-been-thoroughly-refuted / alpha-rolls /
            physical-corrections-consistently-make-aggression-more-dangerous stay written down (not a dog
            resource-guarding never-punish-growl watch log, not a dog recall-cue never-punish watch log,
            not a horse bit hand-severity watch log). Educational training tools only, not a ranked
            product list, not a clinic listing, and not a substitute for a CAAB or DACVB. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog-aggression warning-signal checklist"
            subtitle="Email the warning-signal checklist, type-and-function card, and never-alpha-roll log. No spam."
            ctaText="Email my dog-aggression warning-signal checklist"
            source="training-dog-aggression-under-hero"
          />
        </div>

        <h2>The Aggression Sequence — Warning Signals</h2>
        <p>
          Aggression in dogs follows a predictable sequence of escalating warnings. Dogs that bite
          without warning have almost always had their earlier warning signals ignored, suppressed by
          punishment, or missed. The full sequence, from subtle to severe: stiffening, direct stare,
          stillness, lip curl/snarl, growl, snap (air snap), single bite with release, bite with
          hold/shake. Removing earlier signals — particularly by punishing growling — compresses this
          sequence and creates dogs that bite without warning. Growling is communication. It should be
          respected, not punished.
        </p>
        <p>
          A laminated dog aggression warning-signal sequence checklist is how
          growling-is-communication, punishing-a-growl-compresses-this-sequence, and
          dogs-that-bite-without-warning stay visible before anyone punishes a growl or stares a dog
          down — it is not a laminated dog resource-guarding trade-game checklist (that lives on
          resource-guarding), not a laminated dog off-leash recall-proofing checklist (that lives on
          off-leash-training), and not a laminated horse snaffle-vs-curb bit checklist (that lives on
          bits-guide). This page does not hop laminated+dog+resource+guarding+trade+game+checklist,
          laminated+dog+off+leash+recall+proofing+checklist, or puppy+training+treats searches already
          pinned on other training pages.
        </p>

        <h2>Types of Aggression</h2>
        <p>
          <strong>Fear-based aggression</strong> is the most common. The dog bites because it cannot
          escape something it finds threatening. The trigger may be obvious (strangers, children, other
          dogs) or subtle (specific physical contexts, certain movements). Fear-based dogs show fear
          signals before or during aggressive displays — tucked tail, ears back, avoidance attempts
          before aggression. Treatment: behavior modification to change the emotional response to
          triggers, anxiety management including medication when appropriate.
        </p>
        <p>
          <strong>Resource guarding aggression</strong> is normal canine behavior that becomes
          dangerous in the household context. Food, toys, resting spots, and people can all be guarded.
          See our resource guarding guide for the trade game protocol. Key point: punishment makes
          resource guarding worse — it removes warning signals without addressing the underlying
          emotional trigger.
        </p>
        <p>
          <strong>Redirected aggression</strong> occurs when a dog cannot reach its actual target
          (another dog on the other side of a fence, a squirrel) and bites the nearest available
          target — often the owner. Not intentional. Extremely common in leash-reactive dogs.
          Prevention: avoid placing the dog in situations where it becomes highly aroused and cannot
          reach the trigger.
        </p>
        <p>
          <strong>Pain-related aggression</strong> — any dog in pain may bite when touched, moved, or
          handled in a way that causes pain. A dog that suddenly bites during petting, especially in a
          specific location, should have a veterinary examination before behavioral work. Rule out
          pain first in any new-onset aggression, particularly in adult or senior dogs.
        </p>
        <p>
          <strong>Inter-dog aggression</strong> — dogs that are fine with humans but aggressive to
          other dogs. May be selective (dog-sex specific, unfamiliar dogs only, same-household dogs) or
          generalized. History, context, and the specific presentation determine intervention.
        </p>
        <p>
          A dog aggression type-and-function question card is how
          fear-based-aggression-is-the-most-common, redirected-aggression, and
          rule-out-pain-first-in-any-new-onset-aggression stay posted — it is not a dog food-bowl
          safety question card (that lives on resource-guarding), not a dog 20-to-30-foot long-line
          question card (that lives on off-leash-training), and not a horse bit width-and-wrinkle fit
          question card (that lives on bits-guide). This page does not hop shock collars, prong
          collars, or invented ASINs.
        </p>

        <h2>What Dominance Theory Gets Wrong</h2>
        <p>
          The dominance theory of dog behavior — the idea that dogs are constantly trying to dominate
          humans and must be &quot;put in their place&quot; — has been thoroughly refuted by
          contemporary behavioral science. Dogs are not wolves. The original wolf pack research on
          which dominance theory was based has been retracted by its own author. Dogs that show
          aggressive behavior are motivated by fear, anxiety, pain, resource guarding, or conflict —
          not by a desire for status. Management approaches based on dominance (alpha rolls,
          &quot;winning&quot; confrontations, physical corrections) cause significant harm: they
          increase anxiety, suppress warning signals, damage the human-dog relationship, and
          consistently make aggression more dangerous.
        </p>
        <p>
          A dog aggression never-alpha-roll watch log notebook is how
          dominance-theory-has-been-thoroughly-refuted, alpha-rolls, and
          physical-corrections-consistently-make-aggression-more-dangerous stay written down — it is
          not a dog resource-guarding never-punish-growl watch log notebook (that lives on
          resource-guarding), not a dog recall-cue never-punish watch log notebook (that lives on
          off-leash-training), and not a horse bit hand-severity watch log notebook (that lives on
          bits-guide).
        </p>

        <h2>When Professional Help Is Required</h2>
        <p>
          Any aggression that has resulted in a bite with contact, any aggression toward children,
          aggression involving multiple contexts, or aggression that has escalated despite management
          attempts requires a board-certified veterinary behaviorist (DACVB) or certified applied
          animal behaviorist (CAAB). These are not situations for generic dog trainers or online
          advice. A veterinary behaviorist can also prescribe medication when appropriate —
          behavioral modification combined with appropriate pharmacological intervention is
          significantly more effective for many aggression presentations than behavior modification
          alone.
        </p>

        <AffiliateDisclosure variant="inline" siteId="dog-com" />

        {/* Shop leftover kit — unused vs #1151
            laminated+dog+resource+guarding+trade+game+checklist /
            dog+food+bowl+safety+question+card /
            dog+resource+guarding+never+punish+growl+watch+log+notebook, #1150
            laminated+dog+off+leash+recall+proofing+checklist /
            dog+20+to+30+foot+long+line+question+card /
            dog+recall+cue+never+punish+watch+log+notebook, #1149
            laminated+horse+snaffle+vs+curb+bit+checklist /
            horse+bit+width+and+wrinkle+fit+question+card /
            horse+bit+hand+severity+watch+log+notebook,
            basic-commands puppy+training+treats / dog+training+clicker / dog+long+line+leash. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop the dog-aggression leftover kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the on-page warning-signals, types-of-aggression,
            dominance-theory, and professional-help copy — a laminated dog aggression warning-signal
            sequence checklist, a dog aggression type-and-function question card, and a dog
            aggression never-alpha-roll watch log notebook. Educational training searches only. They
            are not a ranked product list, they are not a clinic listing, they are not a #1151
            laminated resource-guarding trade-game / food-bowl safety / never-punish-growl hop, they
            are not a #1150 laminated off-leash recall-proofing / 20-to-30-foot long-line / recall-cue
            never-punish hop, they are not a #1149 laminated snaffle-vs-curb / width-and-wrinkle /
            hand-severity hop, they are not a basic-commands puppy-treats / clicker / long-line hop,
            and they do not replace a CAAB or DACVB. Dog.com earns a commission on qualifying
            purchases at no extra cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+aggression+warning+signal+sequence+checklist?s=training-dog-aggression"
              amazonLabel="Browse laminated dog aggression warning-signal sequence checklists on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+aggression+type+and+function+question+card?s=training-dog-aggression"
              amazonLabel="Browse dog aggression type-and-function question cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+aggression+never+alpha+roll+watch+log+notebook?s=training-dog-aggression"
              amazonLabel="Browse dog aggression never-alpha-roll watch log notebooks on Amazon →"
            />
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
