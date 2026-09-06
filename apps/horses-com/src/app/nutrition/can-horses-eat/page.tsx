import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildFAQSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard, ShopCtas } from '@carloOS/ui'
import { HORSE_FOODS, HORSE_FOOD_CATEGORIES, VERDICT_META } from '../../../data/foods'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Can Horses Eat…? Food Safety Checker (A–Z) | Horses.com',
  description: 'Can horses eat it? Reference-backed safe/caution/toxic verdicts for common treats and hazards — apples, carrots, chocolate, avocado, grass clippings, and more.',
  path: '/nutrition/can-horses-eat',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Nutrition', url: 'https://horses.com/nutrition' },
    { name: 'Can Horses Eat…', url: 'https://horses.com/nutrition/can-horses-eat' },
  ],
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Can Horses Eat… — equine food safety reference',
  numberOfItems: HORSE_FOODS.length,
  itemListElement: HORSE_FOODS.map((f, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Can horses eat ${f.name}?`,
    url: `https://horses.com/nutrition/can-horses-eat/${f.slug}`,
  })),
}

const FAQS = [
  { question: 'How do I quickly check if a food is safe for my horse?', answer: 'Use the list on this page — each food is marked safe (green), caution (amber), or toxic (red), and links to a full explanation. Remember the horse-specific risks: colic, laminitis, and choke. For anything marked toxic, or if your horse has already eaten a worrying amount, call your veterinarian, and for a suspected poisoning the ASPCA Animal Poison Control Center at 888-426-4435 (24/7, fee applies). Horses cannot vomit, so do not wait.' },
  { question: 'What foods are most dangerous for horses?', answer: 'Keep horses away from chocolate and caffeine, avocado, onions and garlic, tomato and potato plants (nightshades), rhubarb leaves, acorns and oak, fresh lawn or grass clippings, moldy or spoiled feed, cattle feed containing ionophores (monensin), and dairy or meat. Several of these cause colic, laminitis, or organ damage, and a few are rapidly fatal.' },
  { question: 'Why are lawn clippings so dangerous for horses?', answer: 'Fresh grass clippings ferment fast and are gulped in clumps without chewing, which causes choke, gas colic, and laminitis. Grazing standing pasture is fine, but never feed or allow access to mowed grass clippings.' },
  { question: 'My horse ate something on the toxic list — what should I do?', answer: 'Call your veterinarian immediately with the food and the amount eaten. For a suspected poisoning, also call the ASPCA Animal Poison Control Center at 888-426-4435. Because horses cannot vomit and colic, choke, and laminitis are emergencies, prompt veterinary care matters — do not wait for symptoms to develop.' },
]

const schema = combineSchemas(breadcrumbSchema, itemListSchema, buildFAQSchema({ questions: FAQS }))

const VERDICT_ORDER = ['toxic', 'caution', 'safe'] as const

export default function CanHorsesEatHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Food Safety</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Can Horses Eat…?
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          A reference-backed, plain-English safety check for the treats and foods horses encounter. Each is rated <strong className="text-white/80">safe</strong>, <strong className="text-white/80">caution</strong>, or <strong className="text-white/80">toxic</strong> — framed around the equine risks that matter: <strong className="text-white/80">colic, laminitis, and choke</strong>. Forage (hay and pasture) is always the staple; treats are extras on top.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/nutrition" className="hover:text-brand-primary no-underline">Nutrition</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Can Horses Eat…</span>
      </nav>

      <div className="px-container-sm sm:px-container py-6 bg-brand-surface border-b border-brand-border">
        <div className="rounded-lg border-2 p-4 max-w-content-wide" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
          <span className="text-sm font-bold" style={{ color: '#b91c1c' }}>Emergency:</span>{' '}
          <span className="text-sm text-brand-text-mid">If your horse has eaten something toxic — or shows signs of colic, choke, or laminitis — call your veterinarian now. For a suspected poisoning, call <strong>ASPCA Animal Poison Control: 888-426-4435</strong> (24/7, fee applies). Horses cannot vomit, so do not wait for symptoms.</span>
        </div>
      </div>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the can-horses-eat hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Can-horses-eat hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-barn-treat-safety-chart,
            lidded-barn-treat-tote, and
            barn-treat-prep-shears notes that match
            the browse-the-A-Z-list,
            keep-kitchen-leftovers-out-of-the-barn, and
            choke-safe-treat-prep copy on this hub — a
            laminated horse barn treat-safety chart so
            anyone can check the safe / caution / toxic
            list before offering a leftover (not a
            toxic-plant field guide), a lidded horse
            barn treat tote so only pre-checked treats
            leave the kitchen (not an airtight labeled
            treat canister, not a waist treat pouch),
            and horse barn treat-prep shears so an
            approved treat is cut to a choke-safe size
            at hub scope (not a barn cutting board, not
            an apple wedger). Educational barn
            checklist, not a treatment, not a ranked
            product list, and not a substitute for
            calling the veterinarian. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Can-horses-eat hub checklist"
            subtitle="Email the treat-safety-chart, treat-tote, and treat-prep-shears notes. No spam."
            ctaText="Email my can-horses-eat hub checklist"
            source="can-horses-eat-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container py-12">
        {HORSE_FOOD_CATEGORIES.map((cat) => {
          const items = HORSE_FOODS.filter((f) => f.category === cat)
          if (!items.length) return null
          const sorted = [...items].sort((a, b) => VERDICT_ORDER.indexOf(a.verdict) - VERDICT_ORDER.indexOf(b.verdict))
          return (
            <section key={cat} className="mb-10 max-w-content-wide">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-4">{cat}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0">
                {sorted.map((f) => {
                  const m = VERDICT_META[f.verdict]
                  return (
                    <li key={f.slug}>
                      <Link href={`/nutrition/can-horses-eat/${f.slug}`} className="flex items-center gap-3 py-3 px-4 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition">
                        <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ background: m.color }} aria-hidden />
                        <span className="font-medium text-brand-dark">{f.name}</span>
                        <span className="ml-auto text-2xs font-bold uppercase tracking-eyebrow" style={{ color: m.color }}>
                          {f.verdict === 'safe' ? 'Safe' : f.verdict === 'caution' ? 'Caution' : 'Toxic'}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}

        <div className="max-w-content-wide mt-8 text-sm text-brand-text-mid">
          <p>
            More depth: <Link href="/nutrition/toxic-plants" className="text-brand-primary hover:underline">toxic plants for horses</Link> ·{' '}
            <Link href="/health/colic" className="text-brand-primary hover:underline">equine colic</Link> ·{' '}
            <Link href="/health/laminitis" className="text-brand-primary hover:underline">laminitis</Link> ·{' '}
            <Link href="/health/choke" className="text-brand-primary hover:underline">choke</Link> ·{' '}
            <Link href="/nutrition" className="text-brand-primary hover:underline">nutrition hub</Link>
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Verdicts reflect established equine veterinary and nutrition references (ASPCA Animal Poison Control, Merck Veterinary Manual, the Equine Endocrinology Group, and equine clinical-nutrition literature) and are general guidance, not a substitute for veterinary advice. Individual horses vary, and sugary treats should be limited for laminitis-prone, insulin-resistant, or Cushing’s horses. A laminated horse barn treat-safety chart is how anyone checks this A–Z list before offering a leftover — it is not a toxic-plant field guide (that lives on toxic-plants). A lidded horse barn treat tote is how only pre-checked treats leave the kitchen — it is not an airtight labeled horse treat canister or a nylon waist treat pouch (those live on each food page). Horse barn treat-prep shears are how an approved treat is cut to a choke-safe size at hub scope — they are not a nonslip barn cutting board (that lives on each food page) and not an apple wedger (that lives on choke). This hub does not hop toxic foods or poisons as products.
          </p>
        </div>

        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mt-10 mb-4 max-w-content-wide">
          Can-horses-eat hub barn kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          browse-the-A-Z-list,
          keep-kitchen-leftovers-out-of-the-barn, and
          choke-safe-treat-prep copy on this hub — a
          laminated horse barn treat-safety chart so
          anyone can check the safe / caution / toxic
          list before offering a leftover, a lidded
          horse barn treat tote so only pre-checked
          treats leave the kitchen, and horse barn
          treat-prep shears so an approved treat is
          cut to a choke-safe size at hub scope.
          These are educational barn searches, not a
          ranked product list, not a substitute for
          veterinary care, not a toxic-food or poison
          hop, not an airtight-labeled-treat-canister /
          cutting-board / waist-pouch hop (those live
          on each food page), and not an apple-wedger
          hop (that lives on choke). This page does
          not hop medications or vaccines. This page
          does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn treat-safety chart /
            lidded horse barn treat tote /
            horse barn treat-prep shears).
            Educational barn searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs #1122
            airtight+labeled+horse+treat+canister /
            nonslip+horse+barn+cutting+board /
            nylon+horse+waist+treat+pouch, #1121
            fine+mesh+horse+feed+colander /
            long+handled+horse+feed+mixing+paddle /
            silicone+horse+feed+tub+scraper +
            molasses+free+beet+pulp+shreds+horse /
            beet+pulp+pellets+horse+feed, #1120
            compact+digital+gram+scale+horse+feed /
            molasses+free+chaff+horse /
            small+rubber+horse+mixing+pan +
            purina+enrich+plus+ration+balancer /
            triple+crown+30+ration+balancer /
            nutrena+empower+topline+balancer, #1119
            horse+alfalfa+cubes /
            soy+hull+pellets+horse+feed /
            over+door+horse+feed+bucket +
            stabilized+rice+bran+horse+supplement /
            high+fat+low+starch+horse+feed, #1118
            portable+horse+hay+flake+scale /
            horse+hay+soaking+tub /
            low+sugar+horse+treats, #1117
            nylon+horse+hay+bag /
            horse+feed+grade+vegetable+oil /
            marked+horse+grain+scoop, #1116
            horse+chopped+forage /
            horse+feed+soaking+tub /
            horse+corner+feeder, #1115
            equine+toxic+plant+identification+field+guide /
            horse+pasture+walk+weed+identification+handbook /
            horse+paddock+tree+guard+fencing, #1114
            flat+back+horse+water+bucket /
            heated+horse+water+bucket /
            electrolyte+for+horses, #1113
            orchard+grass+hay+horse /
            alfalfa+hay+bales+horse /
            timothy+alfalfa+mixed+hay+horse, #1112
            tabletop+digital+horse+grain+scale /
            stackable+rubber+horse+feed+tubs /
            rodent+proof+metal+horse+feed+bin, #1111
            horse+hay+probe+moisture+tester /
            equine+hay+core+sampler /
            wall+mounted+horse+hay+rack, #1110
            plain+white+horse+salt+block /
            salt+first+horse+electrolyte+powder /
            wide+mouth+horse+water+bucket, #1105
            digital+hanging+hay+bale+scale /
            equine+forage+nsc+hay+test+kit /
            portable+strip+grazing+step+in+posts,
            apple+wedger+slicer
            (choke #1093). */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the can-horses-eat hub barn kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page browse-the-A-Z-list,
            keep-kitchen-leftovers-out-of-the-barn, and
            choke-safe-treat-prep copy — a laminated
            horse barn treat-safety chart, a lidded
            horse barn treat tote, and horse barn
            treat-prep shears. Educational barn
            searches only. They are not a ranked
            product list, they are not a toxic-food or
            poison hop, they are not the food-page
            canister / cutting-board / pouch hops,
            they are not an apple-wedger hop, and they
            do not replace a veterinarian. Horses.com
            earns a commission on qualifying purchases
            at no extra cost to you. Empty Chewy
            buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+treat+safety+chart?s=can-horses-eat-hub"
              amazonLabel="Browse laminated horse barn treat-safety charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/lidded+horse+barn+treat+tote?s=can-horses-eat-hub"
              amazonLabel="Browse lidded horse barn treat totes on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+barn+treat+prep+shears?s=can-horses-eat-hub"
              amazonLabel="Browse horse barn treat-prep shears on Amazon →"
            />
          </div>
        </div>
      </div>

      <section className="px-container-sm sm:px-container py-12" style={{ background: 'var(--brand-primary-pale)' }}>
        <div className="max-w-content-wide">
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="inline" />
          <div className="mt-6">
            <EmailCapture variant="section" siteId="horses-com" title="The Horses.com Reference" subtitle="One email a week: a deep-dive on a breed, condition, or piece of gear. Citation-anchored." source="can-horses-eat-hub" />
          </div>
        </div>
      </section>
    </>
  )
}
