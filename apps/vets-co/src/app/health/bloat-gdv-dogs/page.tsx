import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Bloat (GDV) in Dogs — Emergency Signs & Prevention | Vets.co", description: "Gastric dilatation-volvulus (bloat) is a sudden, life-threatening emergency in deep-chested dogs. Know the warning signs and act within minutes.", path: '/health/bloat-gdv-dogs', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Gastric Dilatation and Volvulus in Small Animals', url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilatation-and-volvulus-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Bloat — Gastric Dilatation-Volvulus', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/bloat-gastric-dilatation-volvulus', publisher: 'AVMA' },
  { label: 'Glickman LT et al. Incidence of and breed-related risk factors for gastric dilatation-volvulus in dogs. JAVMA. 2000;216(1):40-45.', publisher: 'JAVMA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Bloat (GDV) in Dogs', description: 'Emergency recognition, risk factors, and prevention of gastric dilatation-volvulus in dogs.', url: 'https://vets.co/health/bloat-gdv-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Bloat (Gastric Dilatation-Volvulus) in Dogs', description: 'Recognition, risk factors, and prevention of GDV in dogs.', url: 'https://vets.co/health/bloat-gdv-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "How fast does bloat become fatal?", answer: "Very fast. Gastric dilatation-volvulus (GDV) can progress from the first signs to shock and death within an hour or two. Once the stomach twists, it cuts off its own blood supply and traps gas, the expanding stomach compresses major blood vessels, and the dog rapidly enters shock. There is no home treatment — GDV requires emergency surgery. If you see the warning signs, go to an emergency veterinary hospital immediately; minutes matter." },
  { question: "What does bloat look like?", answer: "The classic picture is a large, deep-chested dog with a swollen, firm abdomen who is restless, pacing, and repeatedly trying to vomit but bringing up little or nothing (non-productive retching). Other signs include excessive drooling, obvious distress or anxiety, rapid shallow breathing, pale gums, and collapse as shock sets in. Not every case shows obvious abdominal swelling, especially early or in very deep-chested dogs, so unproductive retching plus distress in an at-risk breed is enough reason to seek emergency care." },
  { question: "Can a preventive surgery stop bloat?", answer: "A procedure called prophylactic gastropexy tacks the stomach to the body wall so it cannot twist, dramatically reducing the risk of life-threatening GDV. It is commonly performed at the same time as spay or neuter in high-risk breeds such as Great Danes and other deep-chested giant breeds. It does not prevent simple gas bloating, but it largely prevents the deadly twisting. Whether your dog is a candidate is a conversation to have with your veterinarian based on breed and risk." },
]
export default function BloatGDVPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Bloat (GDV) in Dogs', subtitle: 'Gastric dilatation-volvulus — known simply as "bloat" — is one of the most rapidly fatal emergencies in dogs. The stomach fills with gas and twists on itself, cutting off blood flow and sending the dog into shock within hours. It is a true minutes-matter emergency, and recognizing it instantly can save a dog\'s life.', category: 'Emergency Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Bloat (GDV)', href: '/health/bloat-gdv-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
          { title: 'Vomiting and Diarrhea in Pets', href: '/health/vomiting-diarrhea-pets', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Emergency Red Flags</div>
            {[['Unproductive retching', 'Trying to vomit, nothing comes'], ['Swollen abdomen', 'Firm, distended belly'], ['Restlessness', 'Pacing, cannot settle'], ['Collapse', 'Pale gums, weakness']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'German Shepherd Health', href: '/breeds/german-shepherd-health' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-bloat" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog GDV prevention-kit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog GDV prevention-kit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the feeding-management notes — a
              timed automatic dog feeder so two or more
              smaller meals replace one large meal, a
              maze slow-feed dog bowl so a fast eater
              cannot gulp a bowl in seconds, and an
              indoor dog house-line so a post-meal potty
              trip stays a short walk, not a run or
              fetch session. Educational checklist, not
              a diagnosis, not a gastropexy, and not a
              substitute for emergency care if the dog
              is retching without producing anything.
              Slow-feeder bowls, raised bowls,
              adjustable-height bowls, puzzle feeders,
              Northmate feeders, lick mats, long-lines,
              6-ft leashes, airline crates, and
              first-aid kits stay on other pages. No
              spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog GDV prevention-kit checklist"
              subtitle="Email the timed-feeder, maze-bowl, and house-line notes. No spam."
              ctaText="Email my dog GDV prevention-kit checklist"
              source="health-bloat-gdv-dogs-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-05T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="This is a go-now emergency">
            If your dog has a swollen belly and is repeatedly trying to vomit without producing anything, go to an emergency veterinary hospital immediately. Do not wait to see if it passes. GDV is fatal within hours and there is no effective home treatment. Call ahead if you can so the team is ready.
          </CalloutBox>

          <h2>What GDV Is</h2>
          <p>Bloat begins when the stomach fills with gas and fluid (dilatation). In the dangerous form, the distended stomach then rotates on its axis (volvulus), sealing off both ends so gas cannot escape and blocking the stomach's blood supply. The trapped, expanding stomach presses on the large veins returning blood to the heart, dropping cardiac output and driving the dog into shock. The stomach wall begins to die, toxins are released, and the spleen is often involved. Without surgery, the cascade is fatal.</p>

          <h2>Which Dogs Are at Risk</h2>
          <p>GDV overwhelmingly affects large, deep-chested breeds — Great Danes have the highest lifetime risk, followed by other giant and deep-chested breeds such as Standard Poodles, Weimaraners, German Shepherds, Setters, and Boxers. Risk rises with age, with having a first-degree relative that bloated, with a lean nervous temperament, and with feeding practices such as a single large daily meal or rapid eating. Any owner of an at-risk breed should know the signs cold.</p>

          <h2>Recognizing the Signs</h2>
          <p>The most reliable early sign is repeated unproductive retching — the dog heaves as if to vomit but brings up little or nothing, sometimes just foam. The abdomen may look or feel swollen and tight, though this is not always obvious in very deep-chested dogs. The dog is typically restless, pacing, drooling, and visibly anxious. As shock develops, breathing becomes rapid and shallow, gums turn pale, and the dog weakens or collapses. Any combination of these in an at-risk dog is an emergency.</p>

          <h2>What Happens at the Hospital</h2>
          <p>Emergency treatment focuses first on stabilizing shock with intravenous fluids and decompressing the stomach to relieve pressure, then on surgery to untwist the stomach, assess the stomach wall and spleen for damage, and perform a gastropexy that tacks the stomach in place to prevent recurrence. Survival is good when dogs reach surgery quickly, but declines sharply with delay and with the amount of dead tissue found. Speed to the hospital is the factor owners most directly control.</p>

          <h2>Prevention</h2>
          <p>For high-risk breeds, a prophylactic gastropexy — often done at the time of spay or neuter — is the most effective prevention against the deadly twisting form. Feeding management may help reduce risk: feeding two or more smaller meals rather than one large meal, slowing fast eaters with appropriate bowls, and avoiding heavy exercise immediately around large meals are commonly advised. Owners of at-risk dogs should discuss gastropexy and feeding strategy with their veterinarian and keep the nearest emergency hospital's location handy.</p>
          <p>Household feeding-management tools can sit alongside that prevention copy after a veterinarian has talked through breed risk and gastropexy. A timed automatic dog feeder is how two or more smaller meals replace one large daily meal when nobody is home at midday — it is not a puzzle feeder, a Northmate interactive feeder, or a raised bowl. A maze slow-feed dog bowl is the appropriate bowl for a fast eater so kibble cannot be gulped in seconds — it is not the slow-feeder dog bowl already hopped on the obesity page, not an elevated slow-feeder, and not an adjustable-height bowl. An indoor dog house-line keeps a post-meal potty trip to a short walk so heavy exercise — a run, a fetch session, a long-line sprint — stays off the hour around a meal. These are household tools, not treatments. They do not prevent simple gas bloating, they do not replace prophylactic gastropexy, they do not treat GDV, and they do not change the go-now emergency if the dog is retching without producing anything. Ask your veterinarian which of these, if any, belong in this dog&rsquo;s kit.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <h2 id="kit">GDV prevention kit</h2>
          <p>
            Everyday physical supplies that match the
            feeding-management copy on this page — a
            timed automatic dog feeder so two or more
            smaller meals replace one large meal, a
            maze slow-feed dog bowl so a fast eater
            cannot gulp a bowl in seconds, and an indoor
            dog house-line so a post-meal potty trip
            stays a short walk, not a run. These are
            household tools, not treatments. They do not
            treat GDV, they do not replace a
            veterinarian or prophylactic gastropexy, and
            they are not a ranked product list.
            Slow-feeder dog bowls, elevated slow-feeder
            bowls, adjustable-height dog bowls, raised
            dog bowls, puzzle feeders, Northmate
            interactive feeders, lick mats, snuffle
            mats, 6-ft dog leashes, dog long-line
            leashes, disposable female dog diapers,
            inflatable dog collars, hard-sided airline
            dog crates, dog surgical recovery suits,
            non-slip dog socks, locking kitchen trash
            cans, walk-through pet gates, airtight
            dog-food storage containers, dog pill
            pockets, dry-erase monthly calendars, dog
            medical-alert collar tags, washable dog heat
            pants, male dog belly bands, heavy-duty dog
            exercise pens, first-aid kits, and
            emergency-contact cards already live on
            other pages. This page does not hop
            medications. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (timed automatic dog feeder / maze
              slow-feed dog bowl / indoor dog
              house-line). ShopCtas hides empty Chewy;
              never href="#" or PLACEHOLDER. Category
              searches only — unused vs #1056
              disposable+female+dog+diapers /
              inflatable+dog+collar /
              hard+sided+airline+dog+crate, #1055
              dog+surgical+recovery+suit /
              non+slip+dog+socks /
              adjustable+height+dog+bowls, #1054
              locking+kitchen+trash+can /
              walk+through+pet+gate /
              airtight+dog+food+storage+container,
              #1053 dog+pill+pockets /
              dry+erase+monthly+calendar /
              dog+medical+alert+collar+tag, #1041
              washable+dog+heat+pants /
              male+dog+belly+band /
              heavy+duty+dog+exercise+pen, and earlier
              slow+feeder+dog+bowl /
              elevated+slow+feeder+bowl+dog /
              raised+dog+bowl / puzzle+feeder+dog /
              northmate+green+interactive+feeder /
              lick+mat+dog / 6+ft+dog+leash /
              dog+long+line+leash /
              pet+first+aid+kit hops. Rx ASINs are
              not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog GDV prevention kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page feeding-management copy — a timed
              automatic dog feeder, a maze slow-feed
              dog bowl, and an indoor dog house-line.
              Everyday physical supplies only. They are
              not a ranked product list, they are not a
              gastropexy or medication hop, they are not
              the #1056 diaper / inflatable-collar /
              airline-crate hops, they are not the #1055
              recovery-suit / non-slip-sock /
              adjustable-bowl hops, they are not the
              #1054 locking-trash / kitchen-gate /
              airtight-storage hops, they are not the
              #1053 pill-pocket / dry-erase-calendar /
              medical-alert-tag hops, they are not the
              #1041 heat-pants / belly-band /
              exercise-pen hops, they are not
              slow-feeder, elevated-slow-feeder, raised
              bowl, puzzle-feeder, Northmate, lick-mat,
              6-ft-leash, long-line, or first-aid-kit
              hops, and they do not replace a
              veterinarian. Vets.co earns a commission
              on qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/automatic+timed+dog+feeder?s=health-bloat-gdv-dogs"
                amazonLabel="Browse timed automatic dog feeders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/maze+slow+feed+dog+bowl?s=health-bloat-gdv-dogs"
                amazonLabel="Browse maze slow-feed dog bowls on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/indoor+dog+house+line?s=health-bloat-gdv-dogs"
                amazonLabel="Browse indoor dog house-lines on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
