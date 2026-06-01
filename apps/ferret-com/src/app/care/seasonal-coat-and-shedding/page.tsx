import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Seasonal Coat & Shedding — Spring and Fall Molts | Ferret.com',
  description:
    'Ferrets molt twice a year as daylight changes. What normal spring and fall coat changes look like, how to manage the shed, and abnormal hair loss.',
  path: '/care/seasonal-coat-and-shedding',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Seasonal Coat and Shedding',
  description:
    'How photoperiod drives the spring and fall ferret molt, what a normal coat change looks like, grooming through a heavy shed, and the hair-loss patterns that warrant a vet.',
  url: 'https://ferret.com/care/seasonal-coat-and-shedding',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})
const combined = combineSchemas(schema)

export default function FerretSeasonalCoatPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Seasonal Coat & Shedding',
          subtitle:
            'A ferret is a photoperiod animal. Twice a year, as the length of the day swings, the coat changes wholesale — a heavier winter coat grown in fall, a sleeker summer coat grown in spring. Knowing what a normal molt looks like is the only way to recognize the hair loss that is not normal.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Seasonal Coat & Shedding', href: '/care/seasonal-coat-and-shedding' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Photoperiod Drives the Coat', href: '#photoperiod' },
                { label: 'The Spring Molt', href: '#spring' },
                { label: 'The Fall Molt', href: '#fall' },
                { label: 'Color & Pattern Shifts', href: '#color' },
                { label: 'Grooming Through a Shed', href: '#grooming' },
                { label: 'Hairballs & Ingestion Risk', href: '#hairballs' },
                { label: 'When Hair Loss Is Not a Molt', href: '#abnormal' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Bathing & Grooming', href: '/care/bathing-and-grooming' },
                { label: 'Adrenal Disease', href: '/health/adrenal-disease' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-seasonal-coat"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="photoperiod">Photoperiod Drives the Coat</h2>
          <p>
            The single most important fact about ferret coats is that they are governed by the photoperiod — the number of daylight hours the animal experiences — far more than by ambient temperature. The pineal gland reads day length and translates it into the hormonal signals that drive the molt cycle, the same axis that governs breeding seasonality in intact ferrets. This is why a ferret kept under artificial light on a long, consistent schedule can molt on an unexpected calendar, and why two ferrets in the same household but different rooms can shed slightly out of sync.
          </p>
          <p>
            In a ferret living with normal exposure to the changing seasons, the coat turns over twice a year: a shed in spring as days lengthen, and a shed in fall as days shorten. Each molt is a near-total replacement of the coat, not the slow continuous shed familiar from dogs. Over two to six weeks, the old coat releases and a new one grows in, and during the peak of that window a ferret can leave a startling amount of fur on every fleece surface in the house.
          </p>

          <h2 id="spring">The Spring Molt</h2>
          <p>
            As daylight lengthens through late winter and into spring, the dense winter coat is shed and replaced with a lighter, shorter summer coat. The spring shed is usually the more dramatic of the two because there is simply more coat to lose — the thick undercoat grown for winter comes out in quantity. A ferret mid-molt in April can look patchy and uneven, with the new coat coming in unevenly across the body. This is normal and resolves as the new coat fills in.
          </p>
          <p>
            Spring is also when intact ferrets enter their breeding season, and the coat change overlaps with the hormonal surge that makes spaying and neutering relevant. For altered ferrets — the vast majority of pets in the United States — the spring molt is purely a coat event, but the timing is a useful annual reminder to check body condition coming out of winter.
          </p>

          <h2 id="fall">The Fall Molt</h2>
          <p>
            As days shorten in fall, the summer coat is shed and a denser, often slightly longer winter coat grows in. Many ferrets visibly thicken through the fall, and it is common for owners to notice a richer, fuller coat by early winter. The fall shed tends to be tidier than the spring shed, though individual animals vary widely. Some ferrets barely seem to molt at all; others coat the house twice a year on schedule.
          </p>

          <h2 id="color">Color and Pattern Shifts</h2>
          <p>
            Coat color is not fixed in ferrets, and a seasonal molt can bring a genuinely different-looking animal. A sable ferret may darken in winter and lighten in summer; guard-hair and undercoat ratios shift; mask and saddle markings can intensify or fade. Over a ferret&apos;s life the coat also tends to lighten with age, so the summer coat of an older ferret is often paler than its kit coat. None of this gradual, symmetrical, seasonally-timed color change is a medical concern. It is part of being a photoperiod animal.
          </p>

          <h2 id="grooming">Grooming Through a Shed</h2>
          <p>
            The right approach to a heavy molt is mechanical removal of loose fur, not bathing. Bathing actually works against you during a molt: it strips coat oils and triggers the sebaceous glands to overcompensate, and it does little to remove the loose undercoat. See <a href="/care/bathing-and-grooming">Bathing Frequency</a> for why over-bathing backfires.
          </p>
          <ul>
            <li><strong>A soft slicker brush or a rubber grooming mitt</strong> pulls loose fur efficiently. A few minutes during peak shed, paired with a treat, keeps most ferrets cooperative.</li>
            <li><strong>Brush in the direction of the coat,</strong> gently. Ferret skin is thin; aggressive brushing is uncomfortable and unnecessary.</li>
            <li><strong>Wash bedding more often during a molt.</strong> Fleece sleep sacks and hammocks collect shed fur, which the ferret then re-ingests while burrowing.</li>
          </ul>
          <p>
            For the full routine grooming picture — ears, nails, and the seasonal once-over — see <a href="/care/bathing-and-grooming">Bathing & Grooming</a>.
          </p>

          <h2 id="hairballs">Hairballs and Ingestion Risk</h2>
          <p>
            Ferrets groom themselves and each other, and during a heavy molt they swallow fur. Unlike cats, ferrets do not readily vomit up hairballs, so ingested fur can accumulate in the stomach. In a narrow ferret gut this is a genuine, if uncommon, obstruction risk — and the molt seasons are exactly when it rises. The practical defenses are removing loose fur by brushing before the ferret can ingest it, and keeping bedding clean. For a fuller treatment of prevention and the warning signs of a developing obstruction, see <a href="/health/gastrointestinal-blockage">Hairball Prevention</a>.
          </p>

          <h2 id="abnormal">When Hair Loss Is Not a Molt</h2>
          <p>
            The most important reason to know what a normal molt looks like is so you can recognize hair loss that is not seasonal. The classic red flag is <strong>bilaterally symmetric hair loss</strong> — thinning that starts at the tail and rump and progresses forward, evenly on both sides — especially when it appears outside the spring and fall windows or fails to regrow. This pattern is the hallmark of <a href="/health/adrenal-disease">adrenal disease</a>, the second most common condition of middle-aged ferrets, and it is a reason to schedule an exotic-mammal vet visit rather than wait for the next molt.
          </p>
          <p>
            Other non-molt hair loss to take seriously: a &quot;rat tail&quot; (hair loss confined to the tail) that does not resolve, patchy loss with broken skin or scabs (think parasites or skin infection), and any hair loss accompanied by itching, weight loss, or a swollen vulva in a spayed female. A seasonal molt is symmetric in the sense of being whole-body and self-limiting; it does not leave bare skin behind. When in doubt, the difference between a molt and a medical problem is best settled by a vet, not by waiting.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Photoperiod control of the ferret coat and breeding cycle, and the distinction between seasonal molt and pathological alopecia, draw on Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and clinical discussion in the <em>Veterinary Clinics of North America: Exotic Animal Practice</em>. Owner-facing grooming guidance reflects American Ferret Association (AFA) materials.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
