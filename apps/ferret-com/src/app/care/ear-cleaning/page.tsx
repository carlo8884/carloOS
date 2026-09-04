import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CrossPortfolioCard,
  ArticleSourcesList,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Ear Cleaning — Technique, Frequency & Ear Mites | Ferret.com',
  description:
    'How to clean a ferret’s ears safely: normal reddish-brown wax versus a problem, gentle technique, and telling ear mites from buildup.',
  path: '/care/ear-cleaning',
  type: 'article',
})

const SOURCES = [
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — ear anatomy, ear mites, and dermatology chapters",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — ear-cleaning and grooming owner-education materials",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
  {
    label: "Merck Veterinary Manual — Otodectes cynotis (ear mites) in ferrets and small mammals",
    url: "https://www.merckvetmanual.com",
    publisher: "Merck/MSD",
  },
]
const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Ear Cleaning',
  description:
    'Safe ferret ear-cleaning technique, normal versus abnormal wax, what not to use, and distinguishing ear mites from routine buildup.',
  url: 'https://ferret.com/care/ear-cleaning',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-04T00:00:00Z',

  citation: SOURCES,
})

const FAQS = [
  {
    question: 'Why is my ferret’s ear wax brown?',
    answer:
      'Because that is normal. Ferrets are naturally waxy-eared, and healthy ferret ear wax is typically reddish-brown to dark-brown in an amount that surprises owners used to dogs or cats. Brownish wax by itself is not a sign of disease. The warning signs are wax accompanied by a foul odor, a coffee-ground or crumbly black texture, redness or swelling, scabbing, or persistent head-shaking and scratching — those point to infection or ear mites and call for a veterinarian, not just a cleaning.',
  },
  {
    question: 'How often should I clean my ferret’s ears?',
    answer:
      'Roughly every two to four weeks, adjusted to the individual — some ferrets are waxier than others. Many keepers fold ear cleaning into the same session as a nail trim. Over-cleaning is its own mistake: scrubbing too often or too aggressively irritates the canal and can strip the protective wax entirely, so more frequent is not better.',
  },
  {
    question: 'What can I use to clean ferret ears?',
    answer:
      'A veterinary ear-cleaning solution formulated for ferrets or for cats and dogs — gentle and pH-appropriate for the canal — plus cotton balls or pads. Never use hydrogen peroxide, rubbing alcohol, or plain water in the ear, and never push a cotton swab into the ear canal: it packs wax deeper and risks damaging the eardrum. Swabs are for the visible outer ear only.',
  },
  {
    question: 'How do I know if my ferret has ear mites?',
    answer:
      'The tell is texture and behavior. Mite debris tends to be dark, dry, and crumbly — often described as resembling coffee grounds — and comes with intense itching, head-shaking, and scratching, sometimes scabbing around the ears. Ordinary wax is smoother, uniformly reddish-brown, and not accompanied by frantic itchiness. Ear mites are a parasitic infestation requiring veterinary diagnosis and prescribed treatment; cleaning alone cannot resolve them, so leave the regimen to a veterinarian — ideally an exotics-capable clinic identified in advance.',
  },
  {
    question: 'Can I use a cotton swab in my ferret’s ear?',
    answer:
      'Only on the visible outer folds of the ear, never down the canal. The safe routine: a few drops of ear solution (or a moistened cotton ball), a gentle massage at the base of the ear to loosen wax, then wipe what surfaces with a cotton ball — letting the ferret shake its head to bring more debris up where you can reach it. Clean only what you can see.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, faqSchema)


export default function EarCleaningPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ear Cleaning',
          subtitle:
            'Ferrets produce a lot of ear wax — normally a reddish-brown color that alarms first-time owners but is completely typical. Knowing what is normal, how to clean gently, and how to spot the difference between routine wax and ear mites keeps a minor grooming task from becoming a missed medical problem.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Ear Cleaning', href: '/care/ear-cleaning' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Normal Ferret Ear Wax', href: '#normal' },
                { label: 'How Often to Clean', href: '#frequency' },
                { label: 'What to Use', href: '#supplies' },
                { label: 'Step by Step', href: '#steps' },
                { label: 'What Never to Do', href: '#never' },
                { label: 'Ear Mites vs. Wax', href: '#mites' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Bathing & Grooming', href: '/care/bathing-and-grooming' },
                { label: 'Nail Trimming', href: '/care/nail-trimming' },
                { label: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-ear-cleaning"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Ear Mites', href: '/health/ear-mites' },
          { title: 'Bathing & Grooming', href: '/care/bathing-and-grooming' },
          { title: 'Annual Checkup Guide', href: '/health/annual-checkup-guide' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-04"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ear-grooming checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret ear-grooming supplies checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the grooming-day order — a veterinary ear-cleaning
              solution formulated for ferrets or for cats and dogs, cotton
              pads or balls for wiping the visible ear, and a meat- or
              fat-based lickable treat for distraction — so you are not
              hunting supplies mid-clean. Educational checklist, not a
              diagnosis. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret ear-grooming supplies checklist"
              subtitle="Email the vet ear cleaner, cotton pads, and distraction-treat order. No spam."
              ctaText="Email my ferret ear-grooming checklist"
              source="care-ear-cleaning-under-hero"
            />
          </div>

          <h2 id="normal">What Normal Ferret Ear Wax Looks Like</h2>
          <p>
            Ferrets are naturally waxy-eared animals. Healthy ferret ear wax is typically a <strong>reddish-brown to dark-brown color</strong>, and the amount can look surprising to someone used to dogs or cats. By itself, brownish wax is normal and not a sign of disease. The job of routine ear cleaning is simply to manage that normal buildup so it does not accumulate, not to chase an imaginary problem.
          </p>
          <p>
            What is <em>not</em> normal is wax that is accompanied by other signs: a strong or foul odor, a coffee-ground or crumbly black texture, redness or swelling of the ear canal, scabbing, or a ferret that is shaking its head and scratching at its ears persistently. Those point to an infection or to ear mites rather than ordinary wax, and they call for a veterinarian, not just a cleaning.
          </p>

          <h2 id="frequency">How Often to Clean</h2>
          <p>
            Aim to clean the ears roughly every two to four weeks, adjusting to the individual ferret — some are waxier than others. Many keepers fold ear cleaning into the same grooming session as a nail trim, so it becomes a predictable routine rather than a separate chore. Over-cleaning is its own mistake: scrubbing the ears too often or too aggressively irritates the canal and can strip the protective wax entirely, so more frequent is not better.
          </p>
          <p>
            This pairs naturally with the rest of the grooming routine. Our <a href="/care/bathing-and-grooming">bathing and grooming</a> guide covers why bathing should be infrequent, and our <a href="/care/nail-trimming">nail trimming</a> guide covers the other regular task; ears, nails, and the occasional bath together make up the whole grooming picture.
          </p>

          <h2 id="supplies">What to Use</h2>
          <ul>
            <li><strong>A veterinary ear-cleaning solution formulated for ferrets or for cats and dogs.</strong> These are gentle and pH-appropriate for the ear canal. This is the correct cleaner.</li>
            <li><strong>Cotton balls or cotton pads,</strong> and cotton swabs used only on the visible outer ear, never down the canal.</li>
            <li><strong>A favorite distraction treat</strong> to keep the ferret occupied, the same belly-treat trick that makes nail trimming easy. Keep treats meat- or fat-based and small rather than sugary, for the dietary reasons in our <a href="/care/diet-basics">diet basics</a> guide.</li>
          </ul>
          <p>
            This page describes supplies editorially and does not recommend a specific product to purchase.
          </p>

          {/* Money path — live amazon-brand search hops (ear-grooming supplies).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — educational gear, not medications, not a ranked list.
              No prescription mite treatments, no hydrogen peroxide, no alcohol. */}
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop ear-grooming supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page supplies
              copy — a veterinary ear-cleaning solution formulated for
              ferrets or for cats and dogs, cotton pads or balls for
              wiping the visible ear, and a ferret-safe lickable meat
              paste for the same distraction trick used on the{' '}
              <Link
                href="/care/nail-trimming"
                className="text-brand-primary no-underline hover:underline"
              >
                nail-trimming
              </Link>
              {' '}guide. Same lickable-treat hop used there; the cleaner
              matches the vet-recommended pet ear cleaner described on{' '}
              <Link
                href="/care/bathing-and-grooming"
                className="text-brand-primary no-underline hover:underline"
              >
                bathing and grooming
              </Link>
              . They are not a ranked product list, they are not
              medications or mite treatments, and they do not diagnose or
              replace an exotic-pet veterinarian. Hydrogen peroxide and
              rubbing alcohol stay off this list on purpose. Ferret.com
              earns a commission on qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+ear+cleaner?s=care-ear-cleaning"
                amazonLabel="Browse pet ear cleaners on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/cotton+pads?s=care-ear-cleaning"
                amazonLabel="Browse cotton pads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+lickable+treat+paste?s=care-ear-cleaning"
                amazonLabel="Browse ferret lickable treat paste on Amazon →"
              />
            </div>
            <p className="text-2xs text-brand-text-light mt-3">
              See also:{' '}
              <Link href="/care/nail-trimming" className="text-brand-primary hover:underline">
                Nail Trimming
              </Link>
              {' · '}
              <Link href="/care/bathing-and-grooming" className="text-brand-primary hover:underline">
                Bathing &amp; Grooming
              </Link>
              {' · '}
              <Link href="/health/ear-mites" className="text-brand-primary hover:underline">
                Ear Mites
              </Link>
            </p>
          </div>

          <h2 id="steps">Step by Step</h2>
          <ul>
            <li><strong>1. Settle the ferret.</strong> Scruff it gently or distract it with a lickable treat so it holds still.</li>
            <li><strong>2. Apply the cleaner.</strong> Put a few drops of the ear solution into the ear, or moisten a cotton ball with it — follow the product's directions. Never use undiluted alcohol, peroxide, or water.</li>
            <li><strong>3. Massage the base of the ear</strong> gently for a few seconds to loosen the wax.</li>
            <li><strong>4. Wipe away what surfaces.</strong> Use a cotton ball or pad to wipe the loosened wax from the visible part of the ear. Let the ferret shake its head — that brings more debris up where you can wipe it.</li>
            <li><strong>5. Clean only what you can see.</strong> Use a cotton swab on the outer folds of the ear if needed, but do not insert anything into the ear canal.</li>
            <li><strong>6. Praise and release.</strong> Keep it brief and positive.</li>
          </ul>

          <h2 id="never">What Never to Do</h2>
          <ul>
            <li><strong>Never push a cotton swab into the ear canal.</strong> It packs wax deeper and risks damaging the eardrum. Swabs are for the visible outer ear only.</li>
            <li><strong>Do not use hydrogen peroxide, rubbing alcohol, or plain water</strong> in the ear. They irritate the canal; use a proper ear-cleaning solution.</li>
            <li><strong>Do not clean obsessively.</strong> Over-cleaning irritates the canal and can make wax production worse.</li>
            <li><strong>Do not ignore the warning signs.</strong> Foul odor, dark crumbly debris, redness, swelling, head-shaking, or persistent scratching are medical signs, not cleaning problems.</li>
          </ul>

          <h2 id="mites">Ear Mites Versus Ordinary Wax</h2>
          <p>
            Ear mites are common in ferrets and easy to confuse with heavy wax at a glance. The tell is the texture and the behavior: mite debris tends to be <strong>dark, dry, and crumbly — often described as resembling coffee grounds or black specks</strong> — and it comes with intense itching, head-shaking, and scratching, sometimes scabbing around the ears. Ordinary wax is smoother, more uniformly reddish-brown, and is not accompanied by that frantic itchiness.
          </p>
          <p>
            The important point is that ear mites are a parasitic infestation, not a hygiene failure, and they require a veterinary diagnosis and a prescribed treatment to clear. You cannot resolve mites with cleaning alone, and over-the-counter approaches are unreliable. If a ferret's ears look like coffee grounds or it is scratching and shaking its head persistently, that is a vet visit. This is exactly the kind of problem where having an exotics-capable clinic already identified — as our <a href="/health/vet-visit-prep">vet visit prep</a> guide recommends — saves time. Because mite treatment involves prescription medication and dosing, leave that decision and the regimen to the veterinarian rather than attempting it at home.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
