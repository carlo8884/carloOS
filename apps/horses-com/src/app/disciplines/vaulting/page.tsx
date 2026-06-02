import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equestrian Vaulting — Gymnastics on Horseback",
  description:
    "Reference overview of equestrian vaulting: gymnastic and dance moves on a cantering horse, the lunger and vaulting horse, compulsories, freestyle, and safety.",
  path: '/disciplines/vaulting',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equestrian Vaulting — Gymnastics on Horseback",
  description:
    "Reference overview of equestrian vaulting: gymnastic and dance moves on a cantering horse, the lunger and vaulting horse, compulsories, freestyle, and safety.",
  url: 'https://horses.com/disciplines/vaulting',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is equestrian vaulting?",
    answer:
      "Equestrian vaulting is the performance of gymnastic and dance-like movements on a cantering horse that circles on a lunge line controlled by a lunger. The vaulter performs mounts, balances, kneeling and standing positions, and dismounts in time with the horse, individually, in pairs, or in teams. It blends athleticism, artistry, and a calm partnership with the horse.",
    answerText:
      "Gymnastic and dance movements on a cantering horse circling on a lunge line, performed solo, in pairs, or in teams. It blends athleticism, artistry, and partnership with the horse.",
  },
  {
    question: "What kind of horse is used for vaulting?",
    answer:
      "The vaulting horse must be calm, sound, strong-backed, and unflappable, with a smooth, rhythmic, balanced canter, since it carries vaulters and tolerates movement on its back. Larger, steady horses with comfortable gaits are favored, and the horse's temperament and training are paramount -- the horse is even scored as part of the performance.",
    answerText:
      "A calm, sound, strong-backed, unflappable horse with a smooth, rhythmic canter. Larger steady horses are favored, and the horse's temperament and training are paramount.",
  },
  {
    question: "Is vaulting safe for children?",
    answer:
      "Vaulting is generally a safe and accessible introduction to horse sport. It is taught on a stationary barrel and a quiet horse at the walk before the canter, with skilled coaching, soft footing, and spotting, and the controlled lunge circle and steady trained horse reduce risk. It builds balance, confidence, and feel without children needing to control the horse directly.",
    answerText:
      "Yes, generally -- it is taught progressively on a barrel and quiet horse with coaching, soft footing, and spotting. The controlled circle and steady horse make it an accessible, confidence-building start.",
  },
]

export default function VaultingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        hero={{
          title: "Equestrian Vaulting",
          subtitle:
            "Vaulting is often described as gymnastics and dance on horseback -- vaulters perform athletic and artistic movements on a cantering horse that circles on a lunge line, individually, in pairs, or as a team. It is a recognized FEI discipline, a superb foundation for balance and confidence (especially for children), and one of the most visually striking of all horse sports. This overview describes how vaulting is competed and is not a training manual.",
          category: "Discipline Guide",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Disciplines", href: "/disciplines" },
          { name: "Vaulting", href: '/disciplines/vaulting' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Vaulting Is", href: "#what" },
            { label: "The Lunger and the Horse", href: "#horse" },
            { label: "Compulsories and Freestyle", href: "#tests" },
            { label: "Individual, Pairs, and Team", href: "#categories" },
            { label: "Safety and Starting Out", href: "#safety" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Dressage", href: "/disciplines/dressage" },
              { label: "Reading Body Language", href: "/ownership/reading-body-language" },
              { label: "Lunge and groundwork (Dressage)", href: "/disciplines/dressage" },
              { label: "Helmet Guide", href: "/tack/helmet-guide" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="discipline-vaulting"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Vaulting Is</h2>
          <p>Equestrian vaulting is the performance of gymnastic and balletic movements on the back of a moving horse. The horse canters in a circle controlled by a lunger on a lunge line, wearing a surcingle with handles and a thick back pad (the vaulting roller and pad) rather than a saddle, and the vaulter performs mounts, balances, kneeling and standing positions, swings, and dismounts in time with the horse&apos;s rhythm. It blends athleticism, artistry, and a calm partnership with the horse.</p>

          <h2 id="horse">The Lunger and the Horse</h2>
          <p>Central to vaulting is the lunger, who controls the horse on the lunge line throughout, maintaining a steady, even canter on a consistent circle so the vaulter has a reliable platform -- the lunger&apos;s skill is as important as the vaulter&apos;s. The vaulting horse must be calm, sound, strong-backed, and unflappable, with a smooth, rhythmic, balanced canter, since it carries the vaulters and tolerates movement on its back. Larger, steady horses with comfortable gaits are favored, and the horse&apos;s temperament and training are paramount.</p>

          <h2 id="tests">Compulsories and Freestyle</h2>
          <p>Competitive vaulting includes compulsory exercises -- a set sequence of required moves (such as the basic seat, flag, mill, scissors, stand, and flank) performed to demonstrate technique and control -- and freestyle, a choreographed routine set to music in which vaulters showcase creative, athletic, and artistic movements. Judging considers the vaulter&apos;s technique, form, difficulty, and artistry, and crucially the quality and steadiness of the horse, which is scored as part of the performance.</p>

          <h2 id="categories">Individual, Pairs, and Team</h2>
          <p>Vaulting is performed individually, in pairs (pas-de-deux), and in teams, with team vaulting -- multiple vaulters performing together and building balances and lifts on the cantering horse -- being especially spectacular and a hallmark of the sport. Categories accommodate different ages and levels, and vaulting is popular as a youth sport because it develops balance, core strength, confidence, and a feel for the horse without the rider needing to control the horse directly.</p>

          <h2 id="safety">Safety and Starting Out</h2>
          <p>Vaulting is generally introduced on a barrel (a stationary practice apparatus) and on a quiet horse at the walk before progressing to the canter, with skilled coaching, soft footing, and careful spotting. Although it looks daring, the structured progression, the controlled lunge circle, and the emphasis on a steady, trained horse make it a safe and accessible way into horse sport for many children and adults. Clubs affiliated with national federations and the FEI run the sport; a local vaulting club is the place to start.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>FEI. Vaulting discipline rules. inside.fei.org.</li>
            <li>American Vaulting Association (AVA). Rules and resources. americanvaulting.org.</li>
            <li>National vaulting federation resources, current editions.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
