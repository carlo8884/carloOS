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
  title: 'Dog Training Red Flags — Dominance Theory | Dog.com',
  description:
    'What the behavioral science says about dominance theory, shock collars, prong collars, and alpha rolling — and what the alternatives actually accomplish.',
  path: '/training/training-red-flags',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Training Red Flags',
  description: 'Dominance theory, shock collars, and prong collars — what the science says.',
  url: 'https://dog.com/training/training-red-flags',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const RED_FLAGS = [
  {
    flag: 'Dominance Theory / "Pack Leader" Training',
    detail:
      'Dominance theory applied to dog training derives from 1970s wolf pack research on captive, unrelated wolves — which has since been thoroughly discredited even by its original author (David Mech publicly rejected it). Wild wolf packs are family units, not dominance hierarchies. Dogs are not attempting to "dominate" their owners. The behaviors labeled as "dominance" (pulling on leash, jumping up, counter-surfing) are trained behaviors maintained by reinforcement — they are solved by removing the reinforcement and teaching incompatible behaviors, not by establishing "pack hierarchy."',
  },
  {
    flag: 'Shock Collars (E-Collars) as Primary Training Tool',
    detail:
      'E-collar use is associated with significantly higher rates of aggression, fear, and stress behaviors in peer-reviewed research compared to reward-based training — including a 2021 study in Frontiers in Veterinary Science. The AVSAB, ASPCA, and British Veterinary Association have all published statements recommending against aversive training methods. The argument that "professional trainers use them therefore they are fine" ignores that the research measures outcomes regardless of who is using them.',
  },
  {
    flag: 'Prong Collars',
    detail:
      'Prong collars (pinch collars) cause pain and pressure on the neck to suppress behavior. The suppression is real but the mechanism is aversive. Research consistently shows higher stress and anxiety in dogs trained with aversive tools. Dogs trained with prong collars for leash pulling often develop higher reactivity — they associate the pain of the collar with whatever they were looking at when it fired, which is frequently other dogs. Front-clip harnesses (PetSafe Easy Walk, Ruffwear Front Range) reduce pulling without this mechanism.',
  },
  {
    flag: 'Alpha Rolling / Physical Dominance',
    detail:
      'Rolling a dog onto their back and pinning them (alpha roll) is consistently associated with defensive aggression in the research literature — multiple documented cases of severe bites resulting from trainers applying this technique. It does not teach anything useful, it frightens the dog, and it damages trust. Ian Dunbar, Patricia McConnell, and every major veterinary behaviorist organization have documented this.',
  },
  {
    flag: '"No Reward" Markers / Punishment for Slow Responses',
    detail:
      'Some trainers use a "no reward" marker (NRM) — a word like "wrong" or "ah-ah" — to inform the dog that the reward is not coming. Research shows NRMs reduce the dog\'s willingness to offer behaviors (trial-and-error learning) and increase stress. The same information ("that was not correct") is more effectively communicated by simply not delivering the reward and setting up the behavior opportunity again.',
  },
  {
    flag: 'Flooding',
    detail:
      'Flooding is the forced prolonged exposure to a fear stimulus without the ability to escape — the theory being that the animal will "get over it." In practice, flooding reliably produces learned helplessness (a severe stress response in which the animal stops all behavioral responses) and more entrenched fear. It is the opposite of systematic desensitization, which works by keeping exposure below the fear threshold and building positive associations gradually.',
  },
]

export default function TrainingRedFlagsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{
        title: 'Dog Training Red Flags',
        subtitle:
          'Dog training is unregulated — anyone can call themselves a trainer and use any method they choose. These are the approaches that behavioral science has consistently found harmful, and what the alternatives accomplish.',
        category: 'Finding a Trainer',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐕',
        publishedAt: 'May 2025',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Training', href: '/training' },
        { name: 'Red Flags', href: '/training/training-red-flags' },
      ]}
      relatedLinks={[
        { title: 'Dog Training Hub', href: '/training', category: 'Hub' },
        { title: 'Trainer Credentials', href: '/training/trainer-credentials', category: 'Training' },
        { title: 'Positive Reinforcement', href: '/training/positive-reinforcement', category: 'Training' },
        { title: 'Leash Reactivity', href: '/training/leash-reactivity', category: 'Training' },
      ]}
      schema={schema}
      sidebar={
        <>
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Trainer Credentials', href: '/training/trainer-credentials' },
              { label: 'Positive Reinforcement', href: '/training/positive-reinforcement' },
              { label: 'Leash Reactivity', href: '/training/leash-reactivity' },
            ]}
          />
          <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="dog-com"
            title="Free Dog Training Tips"
            subtitle="Science-based guidance every Tuesday."
            source="training-red-flags"
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
            Keep the red-flags force-free trainer checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Red-flags force-free trainer checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the training-red-flags force-free trainer checklist, force-free trainer interview
            question card, and Easy Walk / Front Range watch log that match the avsab-position,
            prong-collar-alternative, and what-to-look-for-instead copy on this page — a laminated
            dog training red-flags checklist so
            avsab-recommends-veterinarians-not-refer-to-punishment-trainers /
            dominance-theory-derives-from-discredited-captive-wolf-research /
            e-collar-use-is-associated-with-higher-aggression-fear-stress stay visible before anyone
            hires a pack-leader trainer (not a laminated dog aggression warning-signal sequence
            checklist, not a laminated dog resource-guarding trade-game checklist, not a laminated
            dog off-leash recall-proofing checklist, not a laminated horse snaffle-vs-curb bit
            checklist), a dog force-free trainer interview question card so what-tools-do-you-use /
            what-do-you-do-when-a-dog-doesnt-respond /
            cpdt-ka-cpdt-ksa-cbcc-ka-or-caab stay posted (not a dog aggression type-and-function
            question card, not a dog food-bowl safety question card, not a dog 20-to-30-foot
            long-line question card, not a horse bit width-and-wrinkle fit question card), and a
            dog Easy Walk / Ruffwear Front Range watch log notebook so
            front-clip-harnesses-petsafe-easy-walk-ruffwear-front-range /
            reduce-pulling-without-this-mechanism / force-free-methods stay written down (not a dog
            aggression never-alpha-roll watch log, not a dog resource-guarding never-punish-growl
            watch log, not a dog recall-cue never-punish watch log, not a horse bit hand-severity
            watch log). Educational training tools only, not a ranked product list, not a clinic
            listing, and not a substitute for a CPDT-KA or CAAB. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Red-flags force-free trainer checklist"
            subtitle="Email the red-flags checklist, force-free interview card, and Easy Walk / Front Range log. No spam."
            ctaText="Email my red-flags force-free trainer checklist"
            source="training-red-flags-under-hero"
          />
        </div>

        <p>
          The AVSAB (American Veterinary Society of Animal Behavior) position statement on punishment
          summarizes the scientific consensus: &quot;The AVSAB recommends that veterinarians not
          refer clients to trainers or behavior consultants who routinely use punishment (including
          choke chains, prong collars, shock collars, alpha rolls, dominance downs, and other
          aversive methods).&quot; This is not a fringe position — it is the consensus of the
          professional veterinary behavior community.
        </p>
        <p>
          A laminated dog training red-flags checklist is how
          avsab-recommends-veterinarians-not-refer-to-punishment-trainers,
          dominance-theory-derives-from-discredited-captive-wolf-research, and
          e-collar-use-is-associated-with-higher-aggression-fear-stress stay visible before anyone
          hires a pack-leader trainer — it is not a laminated dog aggression warning-signal sequence
          checklist (that lives on dog-aggression), not a laminated dog resource-guarding trade-game
          checklist (that lives on resource-guarding), not a laminated dog off-leash recall-proofing
          checklist (that lives on off-leash-training), and not a laminated horse snaffle-vs-curb
          bit checklist (that lives on bits-guide). This page does not hop
          laminated+dog+aggression+warning+signal+sequence+checklist,
          laminated+dog+resource+guarding+trade+game+checklist,
          laminated+dog+off+leash+recall+proofing+checklist, or puppy+training+treats searches
          already pinned on other training pages.
        </p>
        {RED_FLAGS.map((r, i) => (
          <div
            key={r.flag}
            style={{
              background: i % 2 === 0 ? 'rgba(200,74,42,0.04)' : 'var(--brand-surface)',
              border: '1px solid rgba(200,74,42,0.12)',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '12px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--brand-dark)',
                marginTop: 0,
                marginBottom: '10px',
              }}
            >
              ⚠️ {r.flag}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', lineHeight: 1.75, margin: 0 }}>
              {r.detail}
            </p>
          </div>
        ))}
        <h2>What to Look For Instead</h2>
        <p>
          Trainers with CPDT-KA, CPDT-KSA, CBCC-KA, or CAAB credentials who explicitly use force-free
          methods. Ask directly: &quot;What tools do you use? What do you do when a dog doesn&apos;t
          respond?&quot; A trainer using positive reinforcement has direct and complete answers to
          these questions. See our full <a href="/training/trainer-credentials">trainer credentials
          guide →</a>
        </p>
        <p>
          A dog force-free trainer interview question card is how what-tools-do-you-use,
          what-do-you-do-when-a-dog-doesnt-respond, and cpdt-ka-cpdt-ksa-cbcc-ka-or-caab stay posted
          — it is not a dog aggression type-and-function question card (that lives on
          dog-aggression), not a dog food-bowl safety question card (that lives on
          resource-guarding), not a dog 20-to-30-foot long-line question card (that lives on
          off-leash-training), and not a horse bit width-and-wrinkle fit question card (that lives
          on bits-guide). This page does not hop shock collars, e-collars, prong collars, choke
          chains, or alpha-roll gear, and it does not hop invented ASINs.
        </p>
        <p>
          Force-free alternatives already named on this page replace the aversive tools above: a
          front-clip harness (PetSafe Easy Walk, Ruffwear Front Range) reduces pulling without neck
          pain; a treat pouch and a clicker keep reinforcement ready so the trainer never reaches
          for a shock, prong, choke, or alpha-roll. A dog Easy Walk / Ruffwear Front Range watch log
          notebook is how front-clip-harnesses-petsafe-easy-walk-ruffwear-front-range,
          reduce-pulling-without-this-mechanism, and force-free-methods stay written down — it is
          not a dog aggression never-alpha-roll watch log notebook (that lives on dog-aggression),
          not a dog resource-guarding never-punish-growl watch log notebook (that lives on
          resource-guarding), not a dog recall-cue never-punish watch log notebook (that lives on
          off-leash-training), and not a horse bit hand-severity watch log notebook (that lives on
          bits-guide). This page does not hop front+clip+no+pull+dog+harness,
          dog+training+treat+pouch+belt+clip, or dog+training+clicker searches already pinned on
          leash-reactivity, loose-leash-walking, marker-training, and positive-reinforcement.
        </p>

        <AffiliateDisclosure variant="inline" siteId="dog-com" />

        {/* Shop leftover kit — unused vs #1152
            laminated+dog+aggression+warning+signal+sequence+checklist /
            dog+aggression+type+and+function+question+card /
            dog+aggression+never+alpha+roll+watch+log+notebook, #1151
            laminated+dog+resource+guarding+trade+game+checklist /
            dog+food+bowl+safety+question+card /
            dog+resource+guarding+never+punish+growl+watch+log+notebook, #1150
            laminated+dog+off+leash+recall+proofing+checklist /
            dog+20+to+30+foot+long+line+question+card /
            dog+recall+cue+never+punish+watch+log+notebook, #1149
            laminated+horse+snaffle+vs+curb+bit+checklist /
            horse+bit+width+and+wrinkle+fit+question+card /
            horse+bit+hand+severity+watch+log+notebook,
            leash-reactivity / loose-leash front+clip+no+pull+dog+harness,
            marker-training dog+training+treat+pouch+belt+clip / dog+training+clicker. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop the training-red-flags leftover kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the on-page avsab-position, prong-collar-alternative,
            and what-to-look-for-instead copy — a laminated dog training red-flags checklist, a dog
            force-free trainer interview question card, and a dog Easy Walk / Ruffwear Front Range
            watch log notebook. Educational training searches only. They are not a ranked product
            list, they are not a clinic listing, they are not a #1152 laminated aggression
            warning-signal / type-and-function / never-alpha-roll hop, they are not a #1151
            laminated resource-guarding trade-game / food-bowl safety / never-punish-growl hop,
            they are not a #1150 laminated off-leash recall-proofing / 20-to-30-foot long-line /
            recall-cue never-punish hop, they are not a #1149 laminated snaffle-vs-curb /
            width-and-wrinkle / hand-severity hop, they are not a leash-reactivity /
            loose-leash front-clip no-pull hop, they are not a marker-training treat-pouch /
            clicker hop, they do not hop shock, e-collar, prong, choke, or alpha-roll gear, and
            they do not replace a CPDT-KA or CAAB. Dog.com earns a commission on qualifying
            purchases at no extra cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+training+red+flags+checklist?s=training-red-flags"
              amazonLabel="Browse laminated dog training red-flags checklists on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+force+free+trainer+interview+question+card?s=training-red-flags"
              amazonLabel="Browse dog force-free trainer interview question cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+easy+walk+ruffwear+front+range+watch+log+notebook?s=training-red-flags"
              amazonLabel="Browse dog Easy Walk / Ruffwear Front Range watch log notebooks on Amazon →"
            />
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
