import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Ear Cleaning — Technique, Frequency & Ear Mites | Ferret.com',
  description:
    'How to clean a ferret’s ears safely: normal reddish-brown wax versus a problem, gentle technique, and telling ear mites from buildup.',
  path: '/care/ear-cleaning',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Ear Cleaning',
  description:
    'Safe ferret ear-cleaning technique, normal versus abnormal wax, what not to use, and distinguishing ear mites from routine buildup.',
  url: 'https://ferret.com/care/ear-cleaning',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})
const combined = combineSchemas(schema)

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
          authorAvatar: '🦦',
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
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-ear-cleaning"
            />
          </>
        }
      >
        <div className="carloOS-article">
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

          <h2 id="sources">Sources</h2>
          <p>
            Normal ear-wax description, cleaning technique, and ear-mite identification draw on Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and American Ferret Association (AFA) owner-education materials. This page is general grooming guidance and does not provide medication dosing or recommend specific products; ear mites and ear infections require veterinary diagnosis and treatment. Pair this with our <a href="/care/bathing-and-grooming">bathing and grooming</a> guide or return to the <a href="/care">Ferret Care hub</a>.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
