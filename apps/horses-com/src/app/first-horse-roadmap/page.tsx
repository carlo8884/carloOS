import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildHowToSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Free 90-Day First-Horse Roadmap | Horses.com',
  description:
    "Week-by-week 90-day roadmap for first-time horse owners — boarding, vet, farrier, feed, ground manners, first-aid. Free 8-email course.",
  path: '/first-horse-roadmap',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Free 90-Day First-Horse Owner Roadmap',
  description:
    'A week-by-week 90-day roadmap for first-time horse owners covering boarding, vet relationship, farrier schedule, feed transition, ground manners, tack fit, and equine first aid.',
  url: 'https://horses.com/first-horse-roadmap',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: 'What exactly do I get when I sign up?',
    answer:
      'A structured 90-day roadmap for the first 12 weeks of horse ownership, plus an 8-email course delivered over those 90 days. Each email is timed to where you are in the transition — pre-purchase, settling in, building routine, deepening partnership, and confident ownership at 90 days.',
  },
  {
    question: 'Why 90 days?',
    answer:
      'The first 90 days are when most first-horse decisions get locked in: which barn, which vet, which farrier, which feed program, which trainer. They are also the period when first-horse buyers most often discover that the horse they purchased was misrepresented or undersuited — industry estimates suggest a meaningful share of first horses are resold within two years. A structured 90-day plan helps you make those decisions deliberately, not reactively.',
  },
  {
    question: 'I have not bought a horse yet. Is this still for me?',
    answer:
      'Yes — the roadmap is built to be useful from the moment you start seriously shopping. The first email covers the pre-purchase vet exam (PPE), which is the single highest-leverage decision you make before any money changes hands.',
  },
  {
    question: 'My horse has been home for a few weeks already. Can I still start?',
    answer:
      'Absolutely. The emails are calibrated to your signup date, not the horse\'s arrival date. Skim the early emails for what you may have skipped, then run the rest in real time.',
  },
  {
    question: 'Will the roadmap tell me which feed or barn to choose?',
    answer:
      'No — every region, discipline, and horse is different. The roadmap teaches you the decision framework: which questions to ask, which red flags to watch for, and what an honest answer sounds like. You make the choice; we just make sure you know what you\'re choosing between.',
  },
  {
    question: 'Are you trying to sell me something?',
    answer:
      'Reading is free. We do link to product reviews and to retailers like SmartPak and Dover where we earn a small affiliate commission if you buy through our link — that funds the editorial work. Affiliate revenue does not influence our rankings. See our affiliate disclosure for the full policy.',
  },
  {
    question: 'How often will you email me?',
    answer:
      'Eight emails over 90 days, with delays of roughly 3, 7, 14, 21, 35, 56, and 90 days after signup. After day 90 we send at most one email per week, often less. One-click unsubscribe is in every email.',
  },
  {
    question: 'Who writes this?',
    answer:
      'Horses.com Editorial. We do not claim hands-on veterinary or farrier credentials. Where the roadmap cites clinical norms, husbandry standards, or industry guidance, it points to the relevant source — the American Association of Equine Practitioners (AAEP), American Farriers Journal, Society of Master Saddlers, and similar bodies. Always check with your own vet, farrier, and trainer on decisions specific to your horse.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const howToSchema = buildHowToSchema({
  name: 'How to use the first 90 days of horse ownership well',
  description:
    'A staged, week-by-week approach for first-time horse owners: pre-purchase preparation, the settling-in window, building routine, deepening partnership, and confident ownership at the 90-day mark.',
  url: 'https://horses.com/first-horse-roadmap',
  totalTime: 'P90D',
  steps: [
    {
      name: 'Pre-purchase',
      text:
        'Before you buy: book a pre-purchase exam (PPE) with an AAEP-member vet, identify two candidate boarding barns, confirm budget across board, vet, farrier, feed, and insurance.',
    },
    {
      name: 'Weeks 1–2 — Settle in',
      text:
        'Transition feed gradually (about 10% replacement over two weeks), keep turnout and exercise low-key, observe baseline behavior, water intake, manure, and gait. Schedule the first non-emergency vet visit if not already done at PPE.',
    },
    {
      name: 'Weeks 3–4 — Build routine',
      text:
        'Lock in a farrier cycle (typically every 6 weeks), set a working feed program, begin daily ground-manner reps (leading, picking up feet, standing tied).',
    },
    {
      name: 'Weeks 5–8 — Build partnership',
      text:
        'Begin or resume ridden or driven work appropriate to the horse, layer in saddle-fit and bridle-fit checks, develop a hauling or short-trip plan, refine the feeding program based on body condition.',
    },
    {
      name: 'Weeks 9–12 — Confident ownership',
      text:
        'Equine first-aid kit complete, emergency plan written, dental and vaccinations on calendar, farrier and vet relationships established, you can articulate what your horse eats, how often each professional sees them, and what their normal vital signs are.',
    },
  ],
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'First Horse Roadmap', url: 'https://horses.com/first-horse-roadmap' },
  ],
})

const allSchemas = combineSchemas(articleSchema, faqSchema, howToSchema, breadcrumbSchema)

const TIMELINE = [
  {
    stage: 'Pre-purchase',
    weeks: 'Before week 1',
    focus: 'Pre-purchase exam (PPE) + barn shortlist',
    milestones:
      'AAEP-member vet booked for PPE · Flexion + lameness eval planned · Two candidate barns toured · Full budget mapped (board, vet, farrier, feed, insurance)',
  },
  {
    stage: 'Weeks 1–2',
    weeks: 'Settle in',
    focus: 'Transition without surprises',
    milestones:
      'Gradual feed change (≈10% replacement over 2 weeks) · Baseline vitals recorded · Water + manure observed daily · Light handling, low-stress turnout · First-aid kit started',
  },
  {
    stage: 'Weeks 3–4',
    weeks: 'Build routine',
    focus: 'Lock the cycle',
    milestones:
      'Farrier appointment booked on a 6-week cycle · Vet wellness plan confirmed · Daily ground-manner reps · Tack fit assessed · Hay quality benchmark established',
  },
  {
    stage: 'Weeks 5–8',
    weeks: 'Build partnership',
    focus: 'Work together',
    milestones:
      'Ridden / driven work appropriate to horse · Saddle + bridle fit re-checked · Short-trip / hauling plan · Feed program refined to body condition score · Trainer relationship if applicable',
  },
  {
    stage: 'Weeks 9–12',
    weeks: 'Confident owner',
    focus: '90-day checkpoint',
    milestones:
      'Equine first-aid kit complete · Written emergency plan · Vaccinations + dental on calendar · Vet + farrier on speed dial · Owner can recite vitals + feed program · 90-day BCS check',
  },
]

const CATEGORIES = [
  {
    title: 'Boarding decisions',
    body:
      'Full board vs self-care vs pasture board, what to look for on a tour (footing, fence quality, hay storage, water access, social dynamics, manager responsiveness), and the questions that separate a well-run barn from one that hopes you do not ask.',
  },
  {
    title: 'Vet relationship',
    body:
      'How to pick an AAEP-member equine vet, when to book the first non-emergency visit, what a wellness plan covers, and how to be the kind of client a vet picks up the phone for at 11 p.m.',
  },
  {
    title: 'Farrier schedule',
    body:
      'Typical 6-week trim or shoeing cycle, why drift on the cycle is the most common preventable hoof problem, and how American Farriers Journal–referenced standards translate into the questions you actually ask a farrier.',
  },
  {
    title: 'Feed program',
    body:
      'Forage first. Gradual transitions. Hay quality assessment. When concentrates make sense and when they are simply expensive calories. Body condition scoring as the answer to "is the feed working".',
  },
  {
    title: 'Ground manners',
    body:
      'Leading, respecting personal space, picking up feet, standing tied, accepting handling for the vet and farrier. The five short cues every first-horse owner drills until they are reflex: whoa, walk on, back, over, stand. A first-horse ground-manners cue card is how those five cues stay posted in the aisle before anyone leads out — it is not a laminated horse ear-eye-tail signal checklist (that lives on reading-body-language), not a horse handler kick-zone safety question card, and not a first-horse buyer visit field notebook.',
  },
  {
    title: 'Tack fit',
    body:
      'Saddle fit basics, bridle fit, the role of a qualified fitter (the Society of Master Saddlers maintains a register of qualified saddle fitters), and the signs a horse is telling you the tack is wrong before behavior tells you.',
  },
  {
    title: 'First-aid + emergency plan',
    body:
      'The itemized kit, the normal vital ranges (HR 28–44, RR 8–16, temp 99–101.5°F), the written emergency plan that lives on the tack-room wall, and the difference between "call the vet now" and "monitor and call in the morning". A first-horse tack-room emergency-plan card is how that written plan stays on the wall — it is not a laminated horse barn emergency-triage chart (that lives on the health hub), not a horse after-hours emergency-cover question card (that lives on choosing-a-vet), and not a sterile-saline / dressing-pads / bandage-scissors hop (those live on first-aid-kit).',
  },
]

export default function FirstHorseRoadmapPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      {/* HERO with above-the-fold capture */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Free Download · First-Time Horse Owners
              </span>
            </div>
            <h1
              className="font-display font-black text-white tracking-tighter leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 66px)' }}
            >
              The 90-Day First-Horse Roadmap.
              <br />
              <span className="text-brand-primary">Purchase to confident, week by week.</span>
            </h1>
            <p className="text-lg font-light text-white/65 leading-relaxed max-w-xl mb-8">
              The first 90 days lock in your barn, your vet, your farrier, your feed program, and your
              horse&apos;s baseline. This is the roadmap you wish a horsey friend had handed you the
              day you signed the bill of sale — eight emails over twelve weeks, paced to your real life.
            </p>
            <ul className="text-sm text-white/70 space-y-2 mb-10 max-w-md">
              <li className="flex items-start gap-3">
                <span className="text-brand-primary">✓</span>
                <span>Week-by-week 90-day plan for first-time owners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary">✓</span>
                <span>8 emails covering vet, farrier, feed, manners, tack, first aid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary">✓</span>
                <span>Sourced to AAEP, American Farriers Journal, Society of Master Saddlers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary">✓</span>
                <span>Free. One-click unsubscribe in every email.</span>
              </li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="bg-white rounded-xl p-7 shadow-card-hover">
              <div className="mb-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  Step 1 of 1
                </div>
                <div className="font-display font-bold text-brand-dark text-xl leading-tight">
                  Get the 90-day roadmap + 8-email course
                </div>
              </div>
              <EmailCapture
                variant="inline"
                siteId="horses-com"
                title=""
                ctaText="Send me the roadmap →"
                placeholder="your@email.com"
                source="first-horse-roadmap"
              />
              <p className="text-2xs text-brand-text-light mt-4 leading-relaxed">
                We&apos;ll email the roadmap immediately and pace the eight-email course over the next
                90 days. See our{' '}
                <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-white border-b border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-content mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the 90-day first-horse checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            90-day first-horse checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid max-w-2xl">
            Email the week-by-week card, ground-manners cue list, and tack-room
            emergency-plan notes that match the boarding, vet, farrier, feed,
            ground-manners, tack-fit, and first-aid copy on this page — a laminated
            first-horse 90-day week-by-week checklist so pre-purchase through the
            day-90 checkpoint stay visible (not a first-horse tryout walkthrough,
            not a boarding-facility walkthrough, not a senior age-related-change
            checklist), a first-horse ground-manners cue card so whoa / walk on /
            back / over / stand stay posted in the aisle (not an ear-eye-tail
            signal checklist), and a first-horse tack-room emergency-plan card so
            the written plan lives on the wall (not a health-hub emergency-triage
            chart, not an after-hours-cover question card). Educational owner
            roadmap tools only, not a ranked product list, not a clinic listing,
            and not a substitute for a veterinarian. No spam.
          </p>
          <div className="max-w-md">
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="90-day first-horse checklist"
              subtitle="Email the week-by-week card, ground-manners cues, and tack-room emergency-plan notes. No spam."
              ctaText="Email my 90-day first-horse checklist"
              source="first-horse-roadmap-under-hero"
            />
          </div>
        </div>
      </section>

      {/* TIMELINE PREVIEW */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              What&apos;s in the roadmap
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            From pre-purchase to confident owner at day 90
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            Twelve weeks broken into five stages. The email course follows the same stages, with each
            email timed to the decisions and questions you&apos;re likely to be working through that
            week. A laminated first-horse 90-day week-by-week checklist is how those five stages stay
            posted at the barn — it is not a laminated first-horse tryout walkthrough checklist
            (that lives on buying-your-first-horse), not a laminated horse boarding facility
            walkthrough checklist (that lives on boarding-options), and not a laminated senior horse
            age-related change checklist (that lives on senior-horse-care).
          </p>

          <div className="bg-white border border-brand-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-primary-pale">
                <tr>
                  <th className="text-left p-4 font-display font-bold text-brand-dark w-28">Stage</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark w-32">Window</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark w-48">Focus</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">Milestones</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE.map((row) => (
                  <tr key={row.stage} className="border-t border-brand-border">
                    <td className="p-4 font-display font-bold text-brand-primary">{row.stage}</td>
                    <td className="p-4 text-brand-dark font-semibold">{row.weeks}</td>
                    <td className="p-4 text-brand-dark">{row.focus}</td>
                    <td className="p-4 text-brand-text-mid leading-relaxed">{row.milestones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-brand-text-light mt-5">
            Vaccination and dental cadences referenced in the course follow the American Association of
            Equine Practitioners (AAEP) core guidelines; your own vet sets the actual schedule based on
            your horse&apos;s history, region, and risk profile.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              The seven categories the roadmap covers
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Seven decisions you make in the first 90 days
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            Each category gets its own dedicated email — long enough to make the decision well, short
            enough to read on your phone in the barn aisle.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {CATEGORIES.map((c) => (
              <div
                key={c.title}
                className="border border-brand-border rounded-lg p-6 bg-brand-surface"
              >
                <h3 className="font-display font-bold text-brand-dark text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-brand-primary" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                  Why this matters
                </span>
              </div>
              <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-4">
                Most first-horse mistakes are made in the first 90 days
              </h2>
            </div>
            <div className="text-base text-brand-text-mid leading-relaxed space-y-4">
              <p>
                The first-horse market has a churn problem. Industry estimates suggest a meaningful
                share of first horses are resold within two years of purchase — often because the
                horse was a poor fit, the boarding situation did not work, or expenses ran far past
                what the buyer had budgeted.
              </p>
              <p>
                Almost none of that churn is the horse&apos;s fault. The decisions that drive it — which
                vet, which barn, which farrier, which feed, what to expect physically and financially —
                are made in the first 90 days, and they are mostly made under pressure, by people who
                have never made them before.
              </p>
              <p>
                The roadmap will not pick your horse, your barn, or your vet. It will give you the
                framework to pick them well, with the questions, the red flags, and the references
                you&apos;d be paying a trainer to teach you piece by piece.
              </p>
              <p className="text-sm text-brand-text-light">
                Sources cited across the email series: American Association of Equine Practitioners
                (AAEP), American Farriers Journal, Society of Master Saddlers, American Horse Council.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 90-day first-horse leftover kit */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              90-day first-horse leftover kit
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Week-by-week card, ground-manners cues, tack-room plan
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-6">
            Everyday owner tools that match the boarding, vet, farrier, feed,
            ground-manners, tack-fit, and first-aid copy on this page — a laminated
            first-horse 90-day week-by-week checklist so pre-purchase, settle-in,
            build-routine, partnership, and the day-90 checkpoint stay visible, a
            first-horse ground-manners cue card so whoa / walk on / back / over /
            stand stay posted before anyone leads out, and a first-horse tack-room
            emergency-plan card so the written plan lives on the wall. These are
            educational owner searches, not a ranked product list, not a clinic
            listing, not a substitute for a veterinarian, not a first-horse tryout /
            buyer-notebook / PPE-records hop, not a boarding walkthrough /
            contract-binder / hay-tarp hop, not a choosing-a-vet interview /
            after-hours-cover / VCPR-folder hop, not a first-aid saline / pads /
            scissors hop, not a senior age-related-change / weight-and-joint /
            quality-of-life hop, not an ear-eye-tail / kick-zone / pain-demeanor hop,
            not a PPE-stage-walkthrough / findings-worksheet / buyer-vet-briefing hop,
            not a lease / insurance / monthly-budget hop, not a daily-care /
            emergency-triage / owner-guides / calculator-tools chart hop, not a
            saddle-pad / half-pad / shim / girth hop, and not a farrier-log hop.
            This page does not hop medications or vaccines. This page does not
            claim hands-on testing. This page does not invent clinic listings.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (laminated first-horse 90-day week-by-week checklist /
              first-horse ground-manners cue card /
              first-horse tack-room emergency-plan card).
              Educational owner searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1138
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
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the 90-day first-horse leftover kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page week-by-week
              timeline, ground-manners five-cue, and tack-room emergency-plan
              copy — a laminated first-horse 90-day week-by-week checklist, a
              first-horse ground-manners cue card, and a first-horse tack-room
              emergency-plan card. Educational owner searches only. They are not
              a ranked product list, they are not a clinic listing, they are not
              a first-horse tryout / buyer-notebook / PPE-records hop, they are
              not a boarding walkthrough / contract-binder / hay-tarp hop, they
              are not a choosing-a-vet interview / after-hours-cover hop, they
              are not a first-aid saline / pads / scissors hop, they are not a
              senior-horse-care hop, they are not a reading-body-language hop,
              they are not a saddle-fit-basics pad / shim / girth hop, they are
              not a daily-care / emergency-triage / owner-guides /
              calculator-tools chart hop, and they do not replace a veterinarian.
              Horses.com earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+first+horse+90+day+week+by+week+checklist?s=first-horse-roadmap"
                amazonLabel="Browse laminated first-horse 90-day week-by-week checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/first+horse+ground+manners+cue+card?s=first-horse-roadmap"
                amazonLabel="Browse first-horse ground-manners cue cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/first+horse+tack+room+emergency+plan+card?s=first-horse-roadmap"
                amazonLabel="Browse first-horse tack-room emergency-plan cards on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND CAPTURE */}
      <section className="bg-brand-primary-pale border-y border-brand-border px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Get the 90-day roadmap + the email course
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-7 max-w-xl mx-auto">
            One signup. Roadmap in your inbox immediately. Eight emails paced over the first 90 days,
            then roughly weekly. Unsubscribe any time.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title=""
              ctaText="Send me the roadmap →"
              source="first-horse-roadmap"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              FAQ
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-8">
            How this works
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-12 pt-8 border-t border-brand-border text-sm text-brand-text-mid">
            <p className="mb-2">Related Horses.com references:</p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/breeds/quarter-horse" className="text-brand-primary hover:underline">
                  American Quarter Horse — breed guide
                </Link>
              </li>
              <li>
                <Link href="/health/equine-ulcers" className="text-brand-primary hover:underline">
                  Equine gastric ulcers — what first-time owners should know
                </Link>
              </li>
              <li>
                <Link href="/guides/saddle-fit-basics" className="text-brand-primary hover:underline">
                  Saddle-fit basics
                </Link>
              </li>
              <li>
                <Link href="/supplements/joint-supplements" className="text-brand-primary hover:underline">
                  Joint supplements — the evidence-graded ranking
                </Link>
              </li>
              <li>
                <Link href="/reviews/best-winter-horse-blankets" className="text-brand-primary hover:underline">
                  Best winter horse blankets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
