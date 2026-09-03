'use client'

/**
 * New Puppy Checklist -- /tools/new-puppy-checklist
 *
 * Client checklist builder. The owner picks expected adult size, age at
 * pickup, indoor/outdoor, crate-training status, and budget tier. The tool
 * returns a checkable first-week list grouped into stages (before pickup,
 * first 48 hours, first month, vet and paperwork), with Amazon search hops
 * on every gear item.
 *
 * Husbandry / shopping guidance only -- not a veterinary plan. Vaccine,
 * parasite-prevention, and spay/neuter timing defer to the veterinarian.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { AffiliateDisclosure, ShopCtas } from '@carloOS/ui'

type Size = 'small' | 'medium' | 'large' | 'giant'
type PickupAge = '8-weeks' | '10-12-weeks' | '4-6-months' | 'already-home'
type Setting = 'indoor' | 'outdoor' | 'both'
type CrateTrained = 'not-yet' | 'yes'
type Budget = 'essentials' | 'standard' | 'full-kit'
type StageId = 'before-pickup' | 'first-48' | 'first-month' | 'vet-paperwork'

const SHOP_SOURCE = 'tools-new-puppy-checklist'

const STAGES: { id: StageId; label: string; blurb: string }[] = [
  { id: 'before-pickup', label: 'Before pickup', blurb: 'Have these in the house before the puppy arrives.' },
  { id: 'first-48', label: 'First 48 hours', blurb: 'The settling-in kit — sleep, cleanup, and something safe to chew.' },
  { id: 'first-month', label: 'First month', blurb: 'Training, grooming, and enrichment once the first week is under control.' },
  { id: 'vet-paperwork', label: 'Vet and paperwork', blurb: 'The first clinic visit, ID, and optional insurance — not a shopping list.' },
]

const SIZE_LABEL: Record<Size, string> = {
  small: 'small (up to ~25 lb adult)',
  medium: 'medium (~25–50 lb adult)',
  large: 'large (~50–90 lb adult)',
  giant: 'giant (over ~90 lb adult)',
}

interface ItemLink {
  href: string
  label: string
}

interface Item {
  id: string
  name: string
  detail: string
  stage: StageId
  essential: boolean
  gear: boolean
  shopHref?: string
  shopLabel?: string
  links: ItemLink[]
}

function amazonHop(query: string): string {
  return `/go/amazon-brand/${query}?s=${SHOP_SOURCE}`
}

function foodHop(size: Size): { href: string; label: string } {
  if (size === 'large' || size === 'giant') {
    return {
      href: amazonHop('royal+canin+large+breed+puppy'),
      label: 'Browse large-breed puppy food on Amazon →',
    }
  }
  if (size === 'small') {
    return {
      href: amazonHop('small+breed+puppy+food'),
      label: 'Browse small-breed puppy food on Amazon →',
    }
  }
  return {
    href: amazonHop('puppy+food'),
    label: 'Browse puppy food on Amazon →',
  }
}

function crateNote(size: Size, crateTrained: CrateTrained): string {
  const divider =
    crateTrained === 'not-yet'
      ? 'Buy the adult-size crate now and use a divider so the puppy has just enough room to stand, turn, and lie down — too much space slows house-training.'
      : 'Keep an adult-size crate as a den and for travel even if crate training is already underway. Size it so the dog can stand, turn, and lie flat.'
  if (size === 'giant') return `${divider} Giant breeds usually need a 48-inch crate.`
  if (size === 'large') return `${divider} Large breeds usually need a 42-inch crate.`
  if (size === 'small') return `${divider} Small breeds usually fit a 24-inch crate.`
  return `${divider} Medium breeds usually fit a 30- or 36-inch crate.`
}

function buildList(
  size: Size,
  pickupAge: PickupAge,
  setting: Setting,
  crateTrained: CrateTrained,
  budget: Budget,
): Item[] {
  const young = pickupAge === '8-weeks' || pickupAge === '10-12-weeks'
  const indoor = setting === 'indoor' || setting === 'both'
  const outdoor = setting === 'outdoor' || setting === 'both'
  const food = foodHop(size)
  const items: Item[] = [
    {
      id: 'crate',
      name: 'Adult-size crate with a divider',
      detail: crateNote(size, crateTrained),
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: amazonHop('wire+dog+crate+with+divider+panel'),
      shopLabel: 'Browse crates on Amazon →',
      links: [
        { href: '/reviews/best-dog-crates', label: 'Best dog crates' },
        { href: '/tools/dog-crate-size-calculator', label: 'Crate size calculator' },
      ],
    },
    {
      id: 'food',
      name: size === 'large' || size === 'giant' ? 'Large-breed puppy food' : 'Complete puppy food',
      detail:
        size === 'large' || size === 'giant'
          ? 'A complete-and-balanced large-breed puppy formula with controlled calcium protects developing joints. Keep the same food the breeder or shelter used for the first week, then transition slowly.'
          : 'A complete-and-balanced puppy food fuels growth. Keep the same food the breeder or shelter used for the first week, then transition slowly if you switch.',
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: food.href,
      shopLabel: food.label,
      links: [
        { href: '/reviews/best-dog-food-for-puppies', label: 'Best puppy foods' },
        { href: '/tools/dog-calorie-calculator', label: 'Calorie calculator' },
      ],
    },
    {
      id: 'bowls',
      name: 'Food and water bowls',
      detail:
        'Stainless steel or ceramic are easy to clean and do not harbour bacteria the way scratched plastic can. A slow-feeder bowl helps fast eaters; deep-chested large and giant breeds are the ones most often flagged for bloat risk.',
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: amazonHop('northmate+green+interactive+feeder'),
      shopLabel: 'Browse slow-feeder bowls on Amazon →',
      links: [{ href: '/reviews/best-slow-feeder-bowls', label: 'Best slow-feeder bowls' }],
    },
    {
      id: 'collar-id',
      name: 'Flat collar with an ID tag',
      detail:
        'A flat buckle collar plus an ID tag (name and phone) is the day-one identity kit. Many areas require a tag; the collar is for ID, not for walking a pulling puppy.',
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: amazonHop('dog+id+tag+collar'),
      shopLabel: 'Browse dog ID tags and collars on Amazon →',
      links: [{ href: '/tools/harness-collar-size', label: 'Harness & collar size' }],
    },
    {
      id: 'harness-leash',
      name: 'Harness and 4–6 ft leash',
      detail:
        'A well-fitted harness protects the neck on walks. Pair it with a standard 4–6 ft leash — skip retractables for a new puppy. Size the harness to the adult dog and use the adjusters as they grow.',
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: amazonHop('julius+k9+idc+powerharness'),
      shopLabel: 'Browse harnesses on Amazon →',
      links: [
        { href: '/reviews/best-dog-harnesses', label: 'Best dog harnesses' },
        { href: '/tools/harness-collar-size', label: 'Harness & collar size' },
      ],
    },
    {
      id: 'bed',
      name: size === 'large' || size === 'giant' ? 'Supportive / orthopaedic bed' : 'Washable dog bed',
      detail:
        size === 'large' || size === 'giant'
          ? 'A supportive orthopaedic bed matters most for large and giant breeds, who are prone to joint issues later. Buy washable covers — the first months are messy.'
          : 'A washable bed of the right size gives the puppy a spot of their own and keeps them off a cold floor.',
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: amazonHop(size === 'large' || size === 'giant' ? 'orthopedic+dog+bed' : 'washable+dog+bed'),
      shopLabel:
        size === 'large' || size === 'giant'
          ? 'Browse orthopaedic dog beds on Amazon →'
          : 'Browse washable dog beds on Amazon →',
      links: [{ href: '/reviews/best-dog-beds', label: 'Best dog beds' }],
    },
    {
      id: 'cleaner-bags',
      name: 'Enzymatic cleaner and poop bags',
      detail:
        'Ordinary cleaners leave scent markers that invite repeat accidents. An enzymatic cleaner plus a roll of poop bags is the house-training pair to have on day one.',
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: amazonHop('enzymatic+pet+stain+odor+cleaner'),
      shopLabel: 'Browse enzymatic pet cleaners on Amazon →',
      links: [{ href: '/training/house-training', label: 'House-training guide' }],
    },
    {
      id: 'poop-bags',
      name: 'Poop bags',
      detail: 'Keep a roll by the door and one on the leash. Walks start the first day home.',
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: amazonHop('dog+poop+bags'),
      shopLabel: 'Browse dog poop bags on Amazon →',
      links: [],
    },
  ]

  if (indoor) {
    items.push({
      id: 'playpen',
      name: 'Puppy playpen or exercise pen',
      detail:
        'A pen gives a contained indoor zone for the first weeks so the puppy is not loose in the whole house. Useful even if you also have a crate.',
      stage: 'before-pickup',
      essential: budget !== 'essentials',
      gear: true,
      shopHref: amazonHop('puppy+playpen'),
      shopLabel: 'Browse puppy playpens on Amazon →',
      links: [],
    })
    items.push({
      id: 'gates',
      name: 'Indoor gates',
      detail:
        'Extra-tall pressure-mounted or hardware-mounted gates keep a curious puppy out of stairs, kitchens, and rooms you have not puppy-proofed yet.',
      stage: 'before-pickup',
      essential: false,
      gear: true,
      shopHref: amazonHop('extra+tall+baby+gate+dog'),
      shopLabel: 'Browse indoor dog gates on Amazon →',
      links: [],
    })
  }

  if (outdoor) {
    items.push({
      id: 'outdoor-water',
      name: 'Outdoor water station',
      detail:
        'A heavy outdoor bowl (or a second bowl by the door) keeps water available in the yard. Tip and refill daily; algae grows fast in warm weather. Secure fencing is the containment plan — a tie-out is not a substitute.',
      stage: 'before-pickup',
      essential: true,
      gear: true,
      shopHref: amazonHop('outdoor+dog+water+bowl'),
      shopLabel: 'Browse outdoor dog water bowls on Amazon →',
      links: [],
    })
    items.push({
      id: 'shade',
      name: 'Yard shade or shelter',
      detail:
        'Puppies overheat quickly. A shaded spot or a simple shelter is husbandry, not optional décor, if the puppy will spend time outdoors.',
      stage: 'before-pickup',
      essential: setting === 'outdoor',
      gear: true,
      shopHref: amazonHop('dog+shade+canopy+outdoor'),
      shopLabel: 'Browse outdoor dog shade on Amazon →',
      links: [],
    })
  }

  items.push(
    {
      id: 'teething',
      name: young ? 'Teething toys and a stuffable Kong' : 'Chews and a stuffable Kong',
      detail: young
        ? 'Eight- to twelve-week-old puppies explore with their mouths. A stuffable toy and a couple of puppy-rated teething toys protect furniture and give you something legal to offer instead of hands.'
        : 'Appropriate chews satisfy a strong natural drive and protect furniture. Rotate a few durable toys so they stay interesting.',
      stage: 'first-48',
      essential: true,
      gear: true,
      shopHref: amazonHop(young ? 'puppy+teething+toys' : 'kong+classic+dog+toy+stuffable'),
      shopLabel: young
        ? 'Browse puppy teething toys on Amazon →'
        : 'Browse Kong / stuffable toys on Amazon →',
      links: [{ href: '/reviews/best-dental-chews', label: 'Best dental chews' }],
    },
    {
      id: 'first-aid',
      name: 'Canine first-aid kit',
      detail:
        'A small pet first-aid kit and the number of the nearest emergency clinic save time. Know the signs that mean go now — this list is not a triage tool.',
      stage: 'first-48',
      essential: budget === 'full-kit',
      gear: true,
      shopHref: amazonHop('pet+first+aid+kit'),
      shopLabel: 'Browse pet first-aid kits on Amazon →',
      links: [
        { href: '/guides/dog-first-aid-kit', label: 'Dog first-aid kit guide' },
        { href: '/tools/is-this-a-dog-emergency', label: 'Is this a dog emergency?' },
      ],
    },
  )

  if (young && indoor) {
    items.push({
      id: 'pads',
      name: 'Puppy training pads',
      detail:
        'Pads are optional. Use them only if you have a plan (apartment, high-rise, or a designated indoor spot). Consistency plus an enzymatic cleaner still does most of the house-training work.',
      stage: 'first-48',
      essential: false,
      gear: true,
      shopHref: amazonHop('puppy+training+pads'),
      shopLabel: 'Browse puppy training pads on Amazon →',
      links: [{ href: '/training/house-training', label: 'House-training guide' }],
    })
  }

  items.push(
    {
      id: 'treats',
      name: 'Tiny training treats',
      detail:
        'Pea-sized, soft treats make marker training possible from day one. Count treats toward the daily calorie total — the calorie calculator helps you avoid overfeeding.',
      stage: 'first-month',
      essential: true,
      gear: true,
      shopHref: amazonHop('puppy+training+treats'),
      shopLabel: 'Browse puppy training treats on Amazon →',
      links: [
        { href: '/training', label: 'Training guides' },
        { href: '/tools/dog-calorie-calculator', label: 'Calorie calculator' },
      ],
    },
    {
      id: 'grooming',
      name: 'Brush, nail clippers, and puppy shampoo',
      detail:
        'A coat-appropriate brush, dog nail clippers (or a grinder), and a gentle puppy shampoo. Starting handling and nail trims early makes lifelong grooming far easier.',
      stage: 'first-month',
      essential: budget !== 'essentials',
      gear: true,
      shopHref: amazonHop('puppy+shampoo+nail+clippers+slicker+brush'),
      shopLabel: 'Browse puppy grooming basics on Amazon →',
      links: [],
    },
    {
      id: 'leash-spare',
      name: 'Everyday leash (if you only bought one)',
      detail:
        'A second 4–6 ft leash lives by the door so walks still happen when the first one is wet or lost. Skip retractables for a new puppy.',
      stage: 'first-month',
      essential: false,
      gear: true,
      shopHref: amazonHop('dog+leash'),
      shopLabel: 'Browse dog leashes on Amazon →',
      links: [{ href: '/training/loose-leash-walking', label: 'Loose-leash walking' }],
    },
    {
      id: 'vet-visit',
      name: pickupAge === 'already-home' ? 'Wellness exam on file' : 'Book the first vet visit before pickup',
      detail: young
        ? 'Book a first wellness exam to start the vaccination and deworming schedule and confirm microchip details. Enrolling pet insurance while a puppy is young and healthy locks in cover before any condition becomes pre-existing and excluded.'
        : 'Book a wellness exam to establish a baseline and confirm microchip and vaccination status. If you want insurance, enrolling sooner avoids more pre-existing exclusions later.',
      stage: 'vet-paperwork',
      essential: true,
      gear: false,
      links: [{ href: 'https://vets.co/reviews/best-pet-insurance', label: 'Compare pet insurance' }],
    },
    {
      id: 'carrier',
      name: 'Soft-sided carrier for clinic trips',
      detail:
        'A carrier (or a secured crate) is how a small or medium puppy gets to the clinic safely. Large and giant puppies usually ride harnessed in the car — still practice short, calm rides before the first appointment.',
      stage: 'vet-paperwork',
      essential: size === 'small' || size === 'medium',
      gear: true,
      shopHref: amazonHop('soft+sided+pet+carrier'),
      shopLabel: 'Browse pet carriers on Amazon →',
      links: [],
    },
    {
      id: 'prevention',
      name: 'Parasite prevention — veterinarian-chosen',
      detail:
        'Flea-and-tick and heartworm prevention should start early and continue year-round in most regions. The veterinarian chooses the product and dose. This tool does not recommend a brand or a dose.',
      stage: 'vet-paperwork',
      essential: true,
      gear: false,
      links: [
        { href: '/reviews/best-flea-tick-prevention', label: 'Best flea & tick prevention' },
        { href: '/reviews/best-heartworm-prevention', label: 'Best heartworm prevention' },
      ],
    },
    {
      id: 'insurance',
      name: 'Decide on pet insurance while the puppy is healthy',
      detail:
        'Insurance is optional. If you want it, enroll while the puppy is young and healthy — once a condition appears it becomes pre-existing and is excluded. Compare policies; do not treat a quote on this page as coverage.',
      stage: 'vet-paperwork',
      essential: false,
      gear: false,
      links: [{ href: 'https://vets.co/reviews/best-pet-insurance', label: 'Compare pet insurance' }],
    },
    {
      id: 'socialisation',
      name: 'Socialisation and house-training plan',
      detail:
        'The socialisation window is short and matters more than any product. Plan positive exposures and early training; the puppy-weight predictor and first-year budget planner help you plan for the adult dog you are raising.',
      stage: 'first-month',
      essential: true,
      gear: false,
      links: [
        { href: '/training', label: 'Training guides' },
        { href: '/training/puppy-schedule', label: 'Puppy schedule' },
        { href: '/tools/puppy-weight-predictor', label: 'Puppy weight predictor' },
        { href: '/tools/puppy-first-year-budget', label: 'First-year budget' },
      ],
    },
  )

  if (budget === 'essentials') return items.filter((item) => item.essential)
  return items
}

function resultShop(
  size: Size,
  crateTrained: CrateTrained,
  setting: Setting,
): { heading: string; blurb: string; href: string; label: string } {
  if (crateTrained === 'not-yet') {
    return {
      heading: 'Start with an adult-size crate and a divider',
      blurb:
        'The crate is the one item that is cheaper to buy once, sized to the adult dog. A wire crate with a divider is the same hop used on the crate-size calculator. This list is shopping guidance, not a training prescription — pair it with the crate-size calculator before you order.',
      href: amazonHop('wire+dog+crate+with+divider+panel'),
      label: 'Browse crates on Amazon →',
    }
  }
  if (setting === 'outdoor') {
    return {
      heading: 'Set the outdoor water station before day one',
      blurb:
        'An outdoor puppy still needs fresh water in the yard and a shaded spot. A heavy outdoor bowl is the starting husbandry item; secure fencing is the containment plan. This tool does not recommend a kennel brand or a tie-out.',
      href: amazonHop('outdoor+dog+water+bowl'),
      label: 'Browse outdoor dog water bowls on Amazon →',
    }
  }
  if (size === 'large' || size === 'giant') {
    return {
      heading: 'Buy large-breed puppy food before pickup',
      blurb:
        'Large and giant puppies do better on a large-breed puppy formula with controlled calcium. Keep the breeder or shelter food for the first days, then transition slowly. Ask your veterinarian which formula fits this dog — this tool does not rank brands.',
      href: amazonHop('royal+canin+large+breed+puppy'),
      label: 'Browse large-breed puppy food on Amazon →',
    }
  }
  return {
    heading: 'Fit a harness before the first walk',
    blurb:
      'A flat collar is for the ID tag; a well-fitted harness is for walks. Size it with the harness calculator and use the same Julius-K9 search already used on the harness tool. This list is not a training plan.',
    href: amazonHop('julius+k9+idc+powerharness'),
    label: 'Browse harnesses on Amazon →',
  }
}

const Toggle = ({
  value,
  current,
  onClick,
  children,
}: {
  value: string
  current: string
  onClick: () => void
  children: React.ReactNode
}) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      'px-4 py-2 rounded-lg border text-sm font-semibold transition-colors',
      value === current
        ? 'border-brand-primary bg-brand-primary text-white'
        : 'border-brand-border bg-brand-white text-brand-text-dark hover:border-brand-primary',
    ].join(' ')}
  >
    {children}
  </button>
)

export default function NewPuppyChecklist() {
  const [size, setSize] = useState<Size>('medium')
  const [pickupAge, setPickupAge] = useState<PickupAge>('8-weeks')
  const [setting, setSetting] = useState<Setting>('indoor')
  const [crateTrained, setCrateTrained] = useState<CrateTrained>('not-yet')
  const [budget, setBudget] = useState<Budget>('standard')
  const [done, setDone] = useState<Set<string>>(new Set())

  const list = useMemo(
    () => buildList(size, pickupAge, setting, crateTrained, budget),
    [size, pickupAge, setting, crateTrained, budget],
  )
  const shop = resultShop(size, crateTrained, setting)
  const doneCount = list.filter((item) => done.has(item.id)).length

  function toggleDone(id: string) {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-5">
        <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">
          Expected adult size
        </span>
        <div className="flex flex-wrap gap-2">
          <Toggle value="small" current={size} onClick={() => setSize('small')}>Small</Toggle>
          <Toggle value="medium" current={size} onClick={() => setSize('medium')}>Medium</Toggle>
          <Toggle value="large" current={size} onClick={() => setSize('large')}>Large</Toggle>
          <Toggle value="giant" current={size} onClick={() => setSize('giant')}>Giant</Toggle>
        </div>
      </div>

      <div className="mb-5">
        <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">
          Age at pickup
        </span>
        <div className="flex flex-wrap gap-2">
          <Toggle value="8-weeks" current={pickupAge} onClick={() => setPickupAge('8-weeks')}>~8 weeks</Toggle>
          <Toggle value="10-12-weeks" current={pickupAge} onClick={() => setPickupAge('10-12-weeks')}>10–12 weeks</Toggle>
          <Toggle value="4-6-months" current={pickupAge} onClick={() => setPickupAge('4-6-months')}>4–6 months</Toggle>
          <Toggle value="already-home" current={pickupAge} onClick={() => setPickupAge('already-home')}>Already home</Toggle>
        </div>
      </div>

      <div className="mb-5">
        <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">
          Where the puppy will live
        </span>
        <div className="flex flex-wrap gap-2">
          <Toggle value="indoor" current={setting} onClick={() => setSetting('indoor')}>Mostly indoor</Toggle>
          <Toggle value="outdoor" current={setting} onClick={() => setSetting('outdoor')}>Mostly outdoor</Toggle>
          <Toggle value="both" current={setting} onClick={() => setSetting('both')}>Indoor + yard</Toggle>
        </div>
      </div>

      <div className="mb-5">
        <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">
          Crate-trained already?
        </span>
        <div className="flex flex-wrap gap-2">
          <Toggle value="not-yet" current={crateTrained} onClick={() => setCrateTrained('not-yet')}>Not yet</Toggle>
          <Toggle value="yes" current={crateTrained} onClick={() => setCrateTrained('yes')}>Yes</Toggle>
        </div>
      </div>

      <div className="mb-6">
        <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">
          Budget tier
        </span>
        <div className="flex flex-wrap gap-2">
          <Toggle value="essentials" current={budget} onClick={() => setBudget('essentials')}>Essentials only</Toggle>
          <Toggle value="standard" current={budget} onClick={() => setBudget('standard')}>Standard kit</Toggle>
          <Toggle value="full-kit" current={budget} onClick={() => setBudget('full-kit')}>Full kit</Toggle>
        </div>
      </div>

      <div className="rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
          Your new-puppy checklist
        </h3>
        <p className="text-2xs text-brand-text-light mb-4">
          For a {SIZE_LABEL[size]} puppy. {doneCount} of {list.length} checked. Guidance, not a
          mandate — adjust to your dog, city, and budget.
        </p>

        {STAGES.map((stage) => {
          const rows = list.filter((item) => item.stage === stage.id)
          if (rows.length === 0) return null
          return (
            <div key={stage.id} className="mb-6 last:mb-0">
              <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">{stage.label}</p>
              <p className="mt-0.5 mb-3 text-xs text-brand-text-light">{stage.blurb}</p>
              <ul className="space-y-4">
                {rows.map((item) => {
                  const checked = done.has(item.id)
                  return (
                    <li key={item.id} className="border-b border-brand-border pb-4 last:border-0 last:pb-0">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDone(item.id)}
                          className="mt-1 h-4 w-4 shrink-0 accent-[var(--brand-primary,#1e90ff)]"
                        />
                        <span className="min-w-0">
                          <span className="flex items-center gap-2 flex-wrap">
                            <span
                              className={[
                                'font-semibold text-sm',
                                checked ? 'text-brand-text-light line-through' : 'text-brand-dark',
                              ].join(' ')}
                            >
                              {item.name}
                            </span>
                            {item.essential && (
                              <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                                Essential
                              </span>
                            )}
                          </span>
                          <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{item.detail}</p>
                        </span>
                      </label>
                      {item.links.length > 0 && (
                        <div className="mt-1.5 ml-7 flex flex-wrap gap-x-4 gap-y-1">
                          {item.links.map((l) => (
                            <Link
                              key={l.href}
                              href={l.href}
                              className="text-xs font-semibold text-brand-primary underline-offset-2 hover:underline no-underline"
                            >
                              {l.label} →
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.gear && item.shopHref && item.shopLabel ? (
                        <div className="mt-2 ml-7">
                          <ShopCtas amazonHref={item.shopHref} amazonLabel={item.shopLabel} />
                        </div>
                      ) : null}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="mt-6 rounded-lg border border-brand-border bg-brand-white p-5">
        <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
          Next step
        </p>
        <p className="font-display text-base font-semibold leading-snug text-brand-text-dark">
          {shop.heading}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{shop.blurb}</p>
        <AffiliateDisclosure variant="inline" siteId="dog-com" className="my-3" />
        <ShopCtas amazonHref={shop.href} amazonLabel={shop.label} />
      </div>

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        Shopping guidance, not a veterinary plan. Vaccine timing, parasite prevention, and spay or
        neuter timing are decisions for your veterinarian. Amazon links are category searches — not
        a ranked product list and not invented inventory. Empty Chewy buttons stay hidden.
      </p>
    </div>
  )
}
