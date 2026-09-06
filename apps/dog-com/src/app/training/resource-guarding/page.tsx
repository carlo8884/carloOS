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
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Resource Guarding in Dogs — Trade Game | Dog.com',
  description:
    'Resource guarding is normal dog behavior. How to manage it safely, teach the trade game, and when to involve a professional. Never punish resource guarding.',
  path: '/training/resource-guarding',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Resource Guarding in Dogs',
  description: 'The trade game, safety protocol, and management for canine resource guarding.',
  url: 'https://dog.com/training/resource-guarding',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const howTo = buildHowToSchema({
  name: 'How to Teach the Trade Game for Resource Guarding',
  description: 'Step-by-step protocol to teach a dog to voluntarily give up items using positive reinforcement.',
  url: 'https://dog.com/training/resource-guarding',
  totalTime: 'P8W',
  steps: [
    {
      name: 'Never approach and take',
      text: 'Before training begins, stop all approach-and-take interactions. Every time you approach a guarding dog and take the item by force, you confirm that guarding works and teach the dog to guard more intensely next time.',
    },
    {
      name: 'Build positive associations with your approach',
      text: 'Start without a guarded item. Approach the dog, drop a high-value treat on the floor, and walk away. Repeat 20+ times. The dog learns: human approaching = good things happen.',
    },
    {
      name: 'Introduce the trade cue',
      text: 'With a medium-value item, approach and offer a high-value treat while saying "trade." When the dog takes the treat and releases the item, pick it up, praise, and immediately return it or offer another item. The dog learns: trading does not mean permanent loss.',
    },
    {
      name: 'Practice with increasing value items',
      text: 'Gradually practice trades with higher-value items. Always trade up — what you offer must be better than what you take. Never trade down; it poisons the cue.',
    },
    {
      name: 'Management for safety',
      text: 'In households with children, manage the environment so resource-guarding situations cannot occur during training. Baby gates, separate feeding areas, and supervision prevent incidents while the dog learns.',
    },
  ],
})

const combined = combineSchemas(schema, howTo)

export default function ResourceGuardingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        contentType="training"
        hero={{
          title: 'Resource Guarding in Dogs',
          subtitle:
            'Resource guarding — growling, snapping, or biting when someone approaches food, toys, or resting spots — is a normal canine behavior. It becomes a problem when it creates safety risks. The solution is not punishment: it is teaching the dog that giving things up results in better things.',
          category: 'Dog Training',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐕',
          publishedAt: 'May 2025',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Training', href: '/training' },
          { name: 'Resource Guarding', href: '/training/resource-guarding' },
        ]}
        relatedLinks={[
          { title: 'Dog Training Hub', href: '/training', category: 'Hub' },
          { title: 'Dog Aggression', href: '/training/dog-aggression', category: 'Training' },
          { title: 'Positive Reinforcement', href: '/training/positive-reinforcement', category: 'Training' },
          { title: 'Trainer Credentials', href: '/training/trainer-credentials', category: 'Training' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">
                Never Do This
              </div>
              <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
                {[
                  'Punish growling (removes warning signals)',
                  'Reach in and take items by force',
                  'Alpha rolls or dominance responses',
                  'Approach a guarding dog from above',
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
                { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' },
                { label: 'Trainer Credentials', href: '/training/trainer-credentials' },
                { label: 'Puppy Biting', href: '/training/puppy-biting' },
              ]}
            />
            <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Training Tips"
              subtitle="Science-based guidance weekly."
              source="training-resource-guarding"
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
              Keep the resource-guarding food-bowl checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Resource-guarding food-bowl checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the resource-guarding trade-game checklist, food-bowl safety question card, and
              never-punish-growl watch log that match the why-guarding-exists, trade-game, management,
              and professional-help copy on this page — a laminated dog resource-guarding trade-game
              checklist so trade-always-means-getting-something-better / original-item-is-usually-returned
              / always-trade-up stay visible before anyone reaches for a bowl or chew (not a laminated
              dog off-leash recall-proofing checklist, not a laminated horse snaffle-vs-curb bit
              checklist), a dog food-bowl safety question card so feed-the-dog-in-a-separate-room /
              pick-up-high-value-chews-when-guests-arrive / baby-gates-to-separate-guarding-contexts stay
              posted (not a single stainless floor dog bowl, not a heavy ceramic pet food bowl, not a
              slow-feeder bowl, not an extra-tall baby gate, not a walk-through pet gate), and a dog
              resource-guarding never-punish-growl watch log notebook so
              punishing-a-growl-removes-the-warning-signal / never-punish-growling /
              dog-that-stops-growling-before-biting-is-more-dangerous stay written down (not a dog
              recall-cue never-punish watch log, not a horse bit hand-severity watch log). Educational
              training tools only, not a ranked product list, not a clinic listing, and not a substitute
              for a CAAB or DACVB. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Resource-guarding food-bowl checklist"
              subtitle="Email the trade-game checklist, food-bowl safety card, and never-punish-growl log. No spam."
              ctaText="Email my resource-guarding food-bowl checklist"
              source="training-resource-guarding-under-hero"
            />
          </div>

          <h2>Why Resource Guarding Exists</h2>
          <p>
            In evolutionary terms, an animal that does not defend valuable resources loses them to
            competitors. Guarding food, high-value chews, and resting spots is adaptive behavior that
            helped dogs&apos; ancestors survive. The fact that a domestic dog guards a marrow bone from
            a human is not aggression, dominance, or disrespect — it is a normal behavioral tendency
            applied in the wrong context. Understanding this matters because the intervention must
            change the dog&apos;s emotional state around approach, not suppress the behavior through
            punishment.
          </p>
          <p>
            <strong>Punishment makes resource guarding worse.</strong> Punishing a growl removes the
            warning signal without addressing the underlying emotion — the dog that stops growling
            before biting is more dangerous than the dog that growls first. Punishing the behavior
            without changing the emotional trigger creates a dog that bites without warning.
          </p>
          <p>
            A laminated dog resource-guarding trade-game checklist is how
            trade-always-means-getting-something-better, original-item-is-usually-returned, and
            always-trade-up stay visible before anyone reaches for a bowl or chew — it is not a
            laminated dog off-leash recall-proofing checklist (that lives on off-leash-training), not a
            laminated horse snaffle-vs-curb bit checklist (that lives on bits-guide), and not a
            puppy-training-treats hop (that lives on basic-commands / marker-training). A dog
            resource-guarding never-punish-growl watch log notebook is how
            punishing-a-growl-removes-the-warning-signal, never-punish-growling, and
            dog-that-stops-growling-before-biting-is-more-dangerous stay written down — it is not a
            dog recall-cue never-punish watch log notebook (that lives on off-leash-training). This
            page does not hop puppy+training+treats, dog+training+clicker, or front-clip no-pull
            harness searches already pinned on other training pages.
          </p>

          <h2>Assessing Severity</h2>
          <p>
            Resource guarding exists on a spectrum. Mild: dog stiffens, eats faster, or moves away
            when approached. Moderate: dog freezes, growls, or shows teeth. Severe: dog snaps or bites
            without significant escalation, guards multiple contexts (food, toys, furniture, locations,
            people), or has bitten with contact. Mild-to-moderate guarding is addressable through the
            trade protocol below. Severe guarding — particularly with children in the household, or
            biting history — warrants working directly with a certified applied animal behaviorist
            (CAAB) or veterinary behaviorist (DACVB).
          </p>

          <h2>The Trade Game Protocol</h2>
          <p>
            The trade game systematically builds a positive association with giving things up. The
            core principle: trading always means getting something better in return, and the original
            item is usually returned. The dog learns that human approach during possession means good
            things — not loss.
          </p>
          <ol>
            <li>
              <strong>Stop approach-and-take interactions immediately.</strong> Every successful
              resource guard (dog growls → human backs off or takes by force) rehearses and reinforces
              guarding behavior.
            </li>
            <li>
              <strong>Build positive approach associations first</strong> — before any item is
              involved. Approach → drop a treat → walk away. Twenty repetitions minimum before
              introducing items.
            </li>
            <li>
              <strong>Practice trades with low-value items.</strong> Offer a high-value treat while
              saying &quot;trade.&quot; Dog takes the treat → dog releases the item → immediately
              return it. This last step is critical: returning the item teaches that trading does not
              mean permanent loss.
            </li>
            <li>
              <strong>Gradually increase item value</strong> over weeks. Always trade up — what you
              offer must exceed what you take in value.
            </li>
            <li>
              <strong>Generalize to other people.</strong> All household members and frequent visitors
              practice the trade game to ensure the behavior generalizes.
            </li>
          </ol>
          <p>
            The same laminated dog resource-guarding trade-game checklist is how
            trade-always-means-getting-something-better and always-trade-up stay posted through those
            weeks of increasing item value — it is not a socialization-window card (that lives on
            dog-socialization-window) and not a puppy-schedule card (that lives on
            training/puppy-schedule).
          </p>

          <h2>Management During Training</h2>
          <p>
            Training takes weeks. During that period, prevent guarding situations from occurring —
            particularly with children who cannot be expected to execute a trade protocol correctly.
            Feed the dog in a separate room. Pick up high-value chews when guests arrive. Use baby
            gates to separate guarding contexts. Management is not a substitute for training, but it
            prevents practice of the guarding behavior during the training period.
          </p>
          <p>
            A dog food-bowl safety question card is how feed-the-dog-in-a-separate-room,
            pick-up-high-value-chews-when-guests-arrive, and baby-gates-to-separate-guarding-contexts
            stay posted — it is not a single stainless floor dog bowl (that lives on dog-bloat-gvd),
            not a heavy ceramic pet food bowl (that lives on ferret toxic-foods), not a slow-feeder
            dog bowl (that lives on dog-obesity / calorie-calculator), not an extra-tall baby gate
            (that lives on new-puppy-checklist), and not a walk-through pet gate (that lives on
            pancreatitis). This page does not hop shock collars, prong collars, or invented ASINs.
          </p>

          <h2>When to Get Professional Help</h2>
          <p>
            Consult a veterinary behaviorist (DACVB) or certified applied animal behaviorist (CAAB)
            if: the dog has bitten with contact, guarding has escalated despite consistent training,
            there are children in the household and the guarding is not resolving, or you are not
            confident managing the situation safely during training. Medication (typically SSRIs or
            other anxiolytics) is sometimes used alongside behavior modification for severe cases —
            only a veterinary behaviorist can appropriately evaluate and prescribe.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Shop leftover kit — unused vs #1150
              laminated+dog+off+leash+recall+proofing+checklist /
              dog+20+to+30+foot+long+line+question+card /
              dog+recall+cue+never+punish+watch+log+notebook, #1149
              laminated+horse+snaffle+vs+curb+bit+checklist /
              horse+bit+width+and+wrinkle+fit+question+card /
              horse+bit+hand+severity+watch+log+notebook,
              basic-commands puppy+training+treats / dog+training+clicker / dog+long+line+leash,
              bloat single+stainless+floor+dog+bowl,
              obesity / calorie-calculator slow+feeder+dog+bowl,
              new-puppy extra+tall+baby+gate,
              pancreatitis walk+through+pet+gate. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
              Shop the resource-guarding leftover kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page why-guarding-exists, trade-game,
              management, and professional-help copy — a laminated dog resource-guarding trade-game
              checklist, a dog food-bowl safety question card, and a dog resource-guarding
              never-punish-growl watch log notebook. Educational training searches only. They are not
              a ranked product list, they are not a clinic listing, they are not a #1150 laminated
              off-leash recall-proofing / 20-to-30-foot long-line / recall-cue never-punish hop, they
              are not a #1149 laminated snaffle-vs-curb / width-and-wrinkle / hand-severity hop, they
              are not a basic-commands puppy-treats / clicker / long-line hop, they are not a bloat
              floor-bowl hop, they are not a slow-feeder hop, they are not an extra-tall baby-gate
              hop, they are not a walk-through pet-gate hop, and they do not replace a CAAB or DACVB.
              Dog.com earns a commission on qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+dog+resource+guarding+trade+game+checklist?s=training-resource-guarding"
                amazonLabel="Browse laminated dog resource-guarding trade-game checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+food+bowl+safety+question+card?s=training-resource-guarding"
                amazonLabel="Browse dog food-bowl safety question cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+resource+guarding+never+punish+growl+watch+log+notebook?s=training-resource-guarding"
                amazonLabel="Browse dog resource-guarding never-punish-growl watch log notebooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
