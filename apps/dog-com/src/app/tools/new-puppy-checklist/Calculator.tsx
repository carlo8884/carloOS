'use client'

/**
 * New Puppy / New Dog Essentials Checklist Builder
 *   -- /tools/new-puppy-checklist
 *
 * "What do I need for a new puppy?" — a guided essentials checklist. The owner
 * picks life stage and adult size; the tool returns a complete, prioritised
 * supplies list, each item with why it matters and links to the relevant
 * Dog.com review or sizing tool. Orchestration of existing reviews + tools, not
 * a single-value calculator. Buying advice is framed as guidance, not a mandate.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'

type Stage = 'puppy' | 'adult'
type Size = 'small' | 'medium' | 'large'

interface ItemLink {
  href: string
  label: string
}
interface Item {
  name: string
  detail: string
  links: ItemLink[]
  essential: boolean
}

function foodReview(stage: Stage, size: Size): ItemLink {
  if (stage === 'puppy') return { href: '/reviews/best-dog-food-for-puppies', label: 'Best puppy foods' }
  if (size === 'large') return { href: '/reviews/best-large-breed-dog-food', label: 'Best large-breed foods' }
  if (size === 'small') return { href: '/reviews/best-dog-food-small-breed', label: 'Best small-breed foods' }
  return { href: '/reviews/best-dry-dog-food', label: 'Best dry dog foods' }
}

function buildList(stage: Stage, size: Size): Item[] {
  const puppy = stage === 'puppy'
  const items: Item[] = [
    {
      name: 'Complete food for the right life stage',
      detail: puppy
        ? 'A complete-and-balanced puppy food fuels growth — large-breed puppies specifically need a large-breed puppy formula with controlled calcium to protect developing joints.'
        : 'A complete-and-balanced adult maintenance food sized to your dog. Use the calorie calculator to set the daily amount and avoid the most common health problem — overfeeding.',
      links: [foodReview(stage, size), { href: '/tools/dog-calorie-calculator', label: 'Calorie calculator' }],
      essential: true,
    },
    {
      name: 'Food & water bowls',
      detail:
        'Stainless steel or ceramic are easy to clean and do not harbour bacteria like scratched plastic. A slow-feeder bowl helps fast eaters and deep-chested breeds at risk of bloat.',
      links: [{ href: '/reviews/best-slow-feeder-bowls', label: 'Best slow-feeder bowls' }],
      essential: true,
    },
    {
      name: 'Crate — sized to the adult dog',
      detail: puppy
        ? 'Buy the adult-size crate now and use a divider so the puppy has just enough room to stand, turn, and lie down — too much space slows house-training.'
        : 'A crate gives a dog a den and a safe space, and is invaluable for travel and recovery. Size it so the dog can stand, turn, and lie flat.',
      links: [
        { href: '/reviews/best-dog-crates', label: 'Best dog crates' },
        { href: '/tools/dog-crate-size-calculator', label: 'Crate size calculator' },
      ],
      essential: true,
    },
    {
      name: 'Bed',
      detail:
        size === 'large'
          ? 'A supportive orthopaedic bed matters most for large and giant breeds, who are prone to joint issues later in life.'
          : 'A washable bed of the right size gives your dog a spot of their own and keeps them off the cold floor.',
      links: [{ href: '/reviews/best-dog-beds', label: 'Best dog beds' }],
      essential: true,
    },
    {
      name: 'Collar, leash, harness & ID tag',
      detail:
        'A flat collar with an ID tag (legally required in many areas), a well-fitted harness for walks to protect the neck, and a standard 4–6 ft leash. A front-clip harness helps with pulling.',
      links: [{ href: '/reviews/best-dog-harnesses', label: 'Best dog harnesses' }],
      essential: true,
    },
    {
      name: 'Chews & enrichment toys',
      detail:
        'Appropriate chews protect your furniture, satisfy a strong natural drive, and support dental health; rotate a few durable toys to keep them interesting.',
      links: [{ href: '/reviews/best-dental-chews', label: 'Best dental chews' }],
      essential: false,
    },
    {
      name: 'Grooming basics',
      detail:
        'A brush suited to the coat, dog nail clippers (or a grinder), and a gentle dog shampoo. Starting handling and nail trims early makes lifelong grooming far easier.',
      links: [],
      essential: false,
    },
    {
      name: 'Parasite prevention',
      detail:
        'Flea-and-tick and heartworm prevention should start early and continue year-round in most regions. Your veterinarian chooses the right products and dose for your dog.',
      links: [
        { href: '/reviews/best-flea-tick-prevention', label: 'Best flea & tick prevention' },
        { href: '/reviews/best-heartworm-prevention', label: 'Best heartworm prevention' },
      ],
      essential: true,
    },
    {
      name: 'First-aid kit',
      detail:
        'A small canine first-aid kit and the number of your nearest emergency vet save precious time. Know the signs that mean "go now".',
      links: [{ href: '/guides/dog-first-aid-kit', label: 'Dog first-aid kit guide' }],
      essential: false,
    },
    {
      name: 'First vet visit + consider insurance',
      detail: puppy
        ? 'Book a first wellness exam to start the vaccination and deworming schedule and confirm microchip details. Enrolling pet insurance while a puppy is young and healthy locks in cover before any condition becomes pre-existing and excluded.'
        : 'Book a wellness exam to establish a baseline and confirm the microchip and vaccination status. If you want insurance, enrolling sooner avoids more pre-existing exclusions later.',
      links: [{ href: '/reviews/best-pet-insurance', label: 'Compare pet insurance' }],
      essential: true,
    },
  ]

  if (puppy) {
    items.splice(6, 0, {
      name: 'House-training supplies',
      detail:
        'Poop bags, an enzymatic cleaner (ordinary cleaners leave scent markers that invite repeat accidents), and puppy pads if you are using them. Consistency and an enzymatic cleaner do most of the work.',
      links: [{ href: '/training/house-training', label: 'House-training guide' }],
      essential: true,
    })
    items.push({
      name: 'Training & socialisation plan',
      detail:
        'The window for socialisation is short and matters more than any product. Plan positive exposures and early training; the puppy-weight predictor helps you plan for the adult size you are raising.',
      links: [
        { href: '/training', label: 'Training guides' },
        { href: '/tools/puppy-weight-predictor', label: 'Puppy weight predictor' },
      ],
      essential: true,
    })
  }

  return items
}

const SIZE_LABEL: Record<Size, string> = { small: 'small breed', medium: 'medium breed', large: 'large / giant breed' }

export default function NewPuppyChecklist() {
  const [stage, setStage] = useState<Stage>('puppy')
  const [size, setSize] = useState<Size>('medium')

  const list = useMemo(() => buildList(stage, size), [stage, size])

  const Toggle = ({ value, current, onClick, children }: { value: string; current: string; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className={[
        'px-4 py-2 rounded-lg border text-sm font-semibold transition-colors',
        value === current ? 'border-brand-primary bg-brand-primary text-white' : 'border-brand-border bg-brand-white text-brand-text-dark hover:border-brand-primary',
      ].join(' ')}
    >
      {children}
    </button>
  )

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-5">
        <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">Life stage</span>
        <div className="flex flex-wrap gap-2">
          <Toggle value="puppy" current={stage} onClick={() => setStage('puppy')}>New puppy</Toggle>
          <Toggle value="adult" current={stage} onClick={() => setStage('adult')}>Adult dog</Toggle>
        </div>
      </div>
      <div className="mb-6">
        <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">Adult size</span>
        <div className="flex flex-wrap gap-2">
          <Toggle value="small" current={size} onClick={() => setSize('small')}>Small</Toggle>
          <Toggle value="medium" current={size} onClick={() => setSize('medium')}>Medium</Toggle>
          <Toggle value="large" current={size} onClick={() => setSize('large')}>Large / giant</Toggle>
        </div>
      </div>

      <div className="rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
          Your {stage === 'puppy' ? 'new-puppy' : 'new-dog'} checklist
        </h3>
        <p className="text-2xs text-brand-text-light mb-4">
          For a {SIZE_LABEL[size]} {stage === 'puppy' ? 'puppy' : 'dog'}. Guidance, not a mandate — adjust to your dog and budget.
        </p>
        <ul className="space-y-4">
          {list.map((item) => (
            <li key={item.name} className="border-b border-brand-border pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-brand-dark text-sm">{item.name}</span>
                {item.essential && (
                  <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Essential</span>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{item.detail}</p>
              {item.links.length > 0 && (
                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
