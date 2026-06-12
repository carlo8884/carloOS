import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  RelatedLinks, CrossPortfolioCard,
  TableOfContents,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Microchipping Explained — How It Works & Registration | Dog.com',
  description:
    'How dog microchips work, what they cost, why registration matters more than the implant, ISO standards, and how microchips differ from GPS trackers.',
  path: '/guides/dog-microchipping',
  category: 'Dog Health Guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Microchipping Explained — How It Works, Cost, and Registration',
  description:
    'Owner reference on canine microchips: the implant procedure, ISO standards, the critical role of registration, and how chips compare to GPS trackers.',
  url: 'https://dog.com/guides/dog-microchipping',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})
const med = buildMedicalWebPageSchema({
  name: 'Dog Microchipping Explained',
  description:
    'How microchips work in dogs, the implant procedure, registration, and limitations.',
  url: 'https://dog.com/guides/dog-microchipping',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-06-11',
})

const FAQS = [
  {
    question: 'Does a microchip track my dog with GPS?',
    answer:
      'No. A microchip is a passive RFID transponder with no battery and no GPS. It does nothing until a scanner is held within a few inches of it, at which point it transmits a unique identification number. It cannot show your dog\'s location, send alerts, or be tracked on a phone. If you want real-time location tracking, you need a separate GPS collar device. A microchip is a permanent ID that works when a found dog is scanned at a shelter or veterinary clinic — the two technologies solve different problems and many owners use both.',
  },
  {
    question: 'How much does it cost to microchip a dog?',
    answer:
      'The implant itself is inexpensive — commonly around $25 to $60 when done at a veterinary clinic, and often less or free at shelter and community microchip clinics. Many dogs adopted from shelters or rescues are already microchipped, with the cost included in the adoption fee. The chip itself involves no ongoing fee. Some registry databases charge a one-time or annual fee to maintain or update your contact details, though several major registries allow free basic registration and updates.',
  },
  {
    question: 'Is microchipping painful for my dog?',
    answer:
      'The implant is a quick injection placed under the loose skin between the shoulder blades using a needle slightly larger than a typical vaccine needle. Most dogs react like they would to any injection — a brief pinch. It does not require anesthesia and is often done at a routine appointment, though it is frequently performed during a spay or neuter while the dog is already under anesthesia. Serious complications are rare.',
  },
  {
    question: 'My dog is already chipped — is there anything I still need to do?',
    answer:
      'Yes, and this is the step most owners miss: the microchip is only useful if it is registered to your current contact information. A chip implanted years ago, or registered by a previous owner or a shelter, may carry outdated or missing details. Find your chip number (on the implant paperwork, or have any vet or shelter scan the dog), identify which registry holds it, create or claim the record, and confirm your phone number and address are current. Re-check whenever you move or change your number.',
  },
  {
    question: 'Will the microchip move around in my dog\'s body?',
    answer:
      'Microchips are designed to stay put, and most do — a special coating encourages tissue to anchor the chip in place between the shoulder blades. Occasionally a chip migrates a short distance (for example, down toward a shoulder or leg). This is why shelters and clinics scan the whole body in a thorough pattern, not just the standard implant site. Migration does not harm the dog and does not stop the chip working; it just means the scanner has to find it.',
  },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS }))

export default function DogMicrochippingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        hero={{
          title: 'Dog Microchipping Explained — How It Works and Why Registration Is Everything',
          subtitle:
            'A microchip is the most reliable permanent identification a dog can carry — but only if it is registered and kept current. This guide explains what the chip actually is, how the implant and scanning work, the ISO standards behind it, the registration step most owners overlook, and how a microchip differs from a GPS tracker.',
          category: 'Dog Health Guide',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Dog Microchipping', href: '/guides/dog-microchipping' },
        ]}
        relatedLinks={[{ title: 'Dog Guides Hub', href: '/guides', category: 'Hub' }, { title: 'Best Dog GPS Trackers', href: '/reviews/best-dog-gps-tracker', category: 'Reviews' }, { title: 'Spay/Neuter Timing', href: '/guides/dog-spay-neuter-timing', category: 'Guides' }, { title: 'Dog Wellness Exam', href: '/guides/dog-wellness-exam', category: 'Guides' }]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What a Microchip Is', href: '#what' },
                { label: 'How the Implant Works', href: '#implant' },
                { label: 'Standards & Scanners', href: '#standards' },
                { label: 'Registration — The Critical Step', href: '#registration' },
                { label: 'Microchip vs GPS Tracker', href: '#vs-gps' },
                { label: 'Effectiveness & Evidence', href: '#evidence' },
                { label: 'Safety & Limitations', href: '#safety' },
                { label: 'Owner Checklist', href: '#checklist' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Best Dog GPS Trackers', href: '/reviews/best-dog-gps-tracker' },
                { label: 'Spay/Neuter Timing', href: '/guides/dog-spay-neuter-timing' },
                { label: 'Dog Wellness Exam', href: '/guides/dog-wellness-exam' },
                { label: 'Dog Vaccinations', href: '/health/dog-vaccinations' },
              ]}
            />
            <CrossPortfolioCard currentSite="dog-com" contentType="guide" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Care Tips"
              subtitle="Evidence-based guidance every week."
              source="guide-microchip"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Dog.com Editorial"
            publishedAt="2026-06-11T00:00:00Z"
            updatedAt="2026-06-11T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <CalloutBox variant="evidence" title="TL;DR — What you need to know">
            <p>
              <strong>A microchip is a permanent ID, not a tracker.</strong> It is a passive RFID transponder the size of a grain of rice, implanted under the skin between the shoulder blades. When a shelter or vet scans a found dog, the chip transmits a unique number.
            </p>
            <p>
              <strong>The chip is useless without registration.</strong> The number must be linked to your current phone and address in a registry. A correctly registered chip dramatically improves the odds of a lost dog being reunited with its owner.
            </p>
          </CalloutBox>

          <h2 id="what">What a Microchip Actually Is</h2>
          <DropCap>
            A pet microchip is a small passive radio-frequency identification (RFID) transponder, roughly the size of a grain of rice, sealed in biocompatible glass. &ldquo;Passive&rdquo; is the key word: it has no battery and no internal power source. It sits inert under the skin and does nothing at all until a compatible scanner is held close to it. The scanner emits a low-power radio signal that energizes the chip just long enough for it to transmit back a single piece of information — a unique identification number. That number is not your name, address, or your dog&rsquo;s medical history; it is a key that points to a record in a registry database.
          </DropCap>
          <p>
            This design is why a microchip lasts the dog&rsquo;s entire life with no maintenance, no charging, and no replacement. It is also why it cannot do the things people sometimes expect of it: it cannot report a location, cannot send a notification, and cannot be &ldquo;pinged&rdquo; from a distance. Its single job is to provide tamper-proof, permanent identification that survives a lost collar and tag.
          </p>

          <h2 id="implant">How the Implant Works</h2>
          <p>
            The chip is implanted by injection. A veterinarian or trained technician loads the chip into a sterile applicator with a needle slightly larger than a standard vaccine needle, lifts the loose skin between the shoulder blades, and injects the chip into the subcutaneous tissue. The whole process takes seconds, requires no anesthesia, and is comparable to a routine vaccination from the dog&rsquo;s perspective.
          </p>
          <p>
            Many dogs are microchipped during a spay or neuter procedure, since they are already under anesthesia — a convenient pairing discussed in our <a href="/guides/dog-spay-neuter-timing" className="text-brand-primary hover:underline">spay/neuter timing guide</a>. It can equally be done at a wellness visit. After implantation, the chip is verified with a scanner to confirm it reads correctly, and the implant paperwork records the chip number.
          </p>

          <h2 id="standards">Standards and Scanner Compatibility</h2>
          <p>
            Most modern pet microchips follow the international ISO 11784/11785 standard, which defines a 15-digit code and the 134.2 kHz radio frequency used to read it. ISO-standard chips are designed to be read by universal scanners worldwide, which matters if a dog is found in a different region or country.
          </p>
          <p>
            Historically, some chips in the United States used non-ISO frequencies (such as 125 kHz and 128 kHz), which created compatibility gaps where a scanner could miss a chip it was not built to read. The widespread adoption of <strong>universal (forward- and backward-reading) scanners</strong> in shelters and clinics has largely closed that gap, so most found dogs are now scanned successfully regardless of chip type. When choosing where to chip a dog, an ISO-standard chip is the most broadly compatible option.
          </p>

          <CalloutBox variant="info" title="Why scanning technique matters">
            <p>
              Shelters and veterinary clinics are trained to scan in a thorough, overlapping pattern across the whole body — not just the shoulder-blade implant site — because chips can occasionally migrate and because a single quick pass can miss a chip. A correctly registered chip only helps if the finder scans, so the prevalence of universal scanners and good scanning protocol is as important as the chip itself.
            </p>
          </CalloutBox>

          <h2 id="registration">Registration — The Step That Actually Reunites Dogs</h2>
          <p>
            This is the most important and most neglected part of microchipping. <strong>The implant does almost nothing on its own.</strong> The chip number must be registered in a database and linked to your current contact information. When a found dog is scanned, the staff look up the number, contact the registry, and reach the owner. If the number is unregistered, registered to a previous owner, or tied to a disconnected phone number, the scan reveals a number that leads nowhere.
          </p>
          <p>Concrete registration steps:</p>
          <ul>
            <li><strong>Find the chip number</strong> — on your implant paperwork, or have any vet or shelter scan the dog.</li>
            <li><strong>Identify the registry</strong> — the chip manufacturer or brand usually maps to a registry. The AAHA Universal Pet Microchip Lookup tool can tell you which registry a number belongs to.</li>
            <li><strong>Create or claim the record</strong> — register the chip in your own name with a current phone number and address. If a shelter or breeder registered it, transfer it to you.</li>
            <li><strong>Add a backup contact</strong> — a second person who can be reached if you cannot.</li>
            <li><strong>Update on every move</strong> — re-confirm your details whenever you change phone number or address. An out-of-date registry is the single most common reason a chipped dog is not reunited.</li>
          </ul>

          <CalloutBox variant="warning" title="A chip you never registered is doing nothing">
            <p>
              Surveys of shelters consistently find that a meaningful share of chipped stray dogs cannot be reunited because the registry information is missing or out of date. The lesson is blunt: implanting the chip is the easy 10%; keeping the registration current is the 90% that actually brings a lost dog home. Check your registration today if you are not certain it is current.
            </p>
          </CalloutBox>

          <h2 id="vs-gps">Microchip vs GPS Tracker — Different Tools</h2>
          <p>
            Microchips and GPS trackers are frequently confused, but they solve different problems and the best practice for many owners is to use both.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-border text-left">
                  <th className="py-2 pr-4 font-bold text-brand-dark"></th>
                  <th className="py-2 pr-4 font-bold text-brand-dark">Microchip</th>
                  <th className="py-2 font-bold text-brand-dark">GPS collar tracker</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-medium">Power</td>
                  <td className="py-2 pr-4">Passive, no battery, lifelong</td>
                  <td className="py-2">Battery, needs recharging</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-medium">Shows location?</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Yes, in real time</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-medium">Can be removed?</td>
                  <td className="py-2 pr-4">No — implanted permanently</td>
                  <td className="py-2">Yes — attached to collar</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="py-2 pr-4 font-medium">Ongoing cost</td>
                  <td className="py-2 pr-4">None (registry fees optional)</td>
                  <td className="py-2">Device + usually a subscription</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Best for</td>
                  <td className="py-2 pr-4">Permanent proof of ownership</td>
                  <td className="py-2">Finding a dog that wanders now</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            A GPS collar tells you where a dog is <em>right now</em> but stops working if the collar comes off or the battery dies. A microchip can never be lost or removed and proves ownership, but it requires the dog to be found and scanned. For owners who want both, our <a href="/reviews/best-dog-gps-tracker" className="text-brand-primary hover:underline">GPS tracker comparison</a> covers the collar side.
          </p>

          <h2 id="evidence">Does Microchipping Actually Work?</h2>
          <p>
            The evidence base for microchips comes largely from a widely cited study of return-to-owner rates at US animal shelters (Lord et al., <em>JAVMA</em> 2009), which found that microchipped stray dogs were returned to their owners at a substantially higher rate than the general stray-dog population. Critically, the same body of research highlighted that reunification failures were strongly associated with incorrect or unregistered chip information — reinforcing that registration, not the implant alone, drives the benefit. The AVMA and AAHA both recommend permanent identification and maintain that microchips, paired with current registration and a visible collar tag, give a lost dog the best chance of getting home.
          </p>

          <h2 id="safety">Safety and Limitations</h2>
          <p>
            Adverse reactions to microchips are rare. Large adverse-event monitoring programs (including data compiled by the British Small Animal Veterinary Association) have recorded very low rates of complications relative to the number of chips implanted, with the most common being minor — chip migration or transient swelling at the implant site. Serious reactions are uncommon. As with any injection, mild local soreness can occur.
          </p>
          <p>
            The main limitations are not safety issues but practical ones: a chip provides no location, only works when a found dog is scanned, and is worthless if the registry record is wrong. None of these are reasons not to chip — they are reasons to pair the chip with current registration and a collar tag, and optionally a GPS device.
          </p>

          <h2 id="checklist">Owner Checklist</h2>
          <ul>
            <li>Confirm whether your dog is already chipped (vet or shelter can scan).</li>
            <li>Locate the chip number and identify its registry.</li>
            <li>Register or transfer the record into your own name with a current phone and address.</li>
            <li>Add a backup contact to the record.</li>
            <li>Keep a visible collar ID tag as well — it is the fastest route to reunion when a neighbor finds the dog.</li>
            <li>Re-verify registration after every move or phone-number change.</li>
            <li>Consider a GPS collar if your dog is a wanderer or you live near roads or open land.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <ArticleSourcesList
            title="References"
            sources={[
              { label: 'Microchipping of Animals FAQ', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/microchipping-animals-faq', publisher: 'AVMA' },
              { label: 'Lord LK et al. — Characterization of animals with microchips entering animal shelters (JAVMA 235:160–167, 2009)', url: 'https://avmajournals.avma.org/view/journals/javma/235/2/javma.235.2.160.xml', publisher: 'JAVMA' },
              { label: 'Universal Pet Microchip Lookup Tool', url: 'https://www.petmicrochiplookup.org/', publisher: 'AAHA' },
              { label: 'Identification of Dogs — Microchips and Collars', url: 'https://www.merckvetmanual.com/dog-owners', publisher: 'Merck Veterinary Manual' },
            ]}
          />
        </div>
      </ArticleLayout>
    </>
  )
}
