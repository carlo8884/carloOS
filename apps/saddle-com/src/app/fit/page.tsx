import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, Breadcrumb, StockImage } from '@carloOS/ui'
import { SchemaScript } from '@carloOS/ui'
import { DISCIPLINE_FITS } from '@/data/fit-by-discipline'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Fit by Discipline — 6 Discipline Guides | Saddle.com',
  description:
    'Discipline-specific saddle fit reference — dressage, hunter/jumper, eventing, western, endurance, close-contact. Fit checkpoints, problems, brands.',
  path: '/fit',
})

const ENGLISH = DISCIPLINE_FITS.filter((d) => d.group === 'English')
const WESTERN = DISCIPLINE_FITS.filter((d) => d.group === 'Western')

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Saddle Fit by Discipline',
  numberOfItems: DISCIPLINE_FITS.length,
  itemListElement: DISCIPLINE_FITS.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${d.disciplineName} Saddle Fit`,
    url: `https://saddle.com/fit/${d.slug}`,
  })),
}

const fitSchema = itemListSchema

export default function FitHubPage() {
  return (
    <>
      <SchemaScript schema={fitSchema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
            Saddle Fit Reference
          </span>
          <h1
            className="font-display font-black text-white tracking-tighter mb-3"
            style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}
          >
            Saddle Fit by Discipline — 6 Guides
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            Dressage, hunter/jumper, eventing, western, endurance, close-contact — the fit fundamentals are shared but
            the discipline changes which checkpoints matter most. Each guide covers the key fit points, common fit
            problems, when to refit, and the brand shortlist that established fitters reach for. Sourced from the
            Society of Master Saddlers (UK), Master Saddlers Association (US), and the USEF Rule Book.
          </p>
        </div>
      </div>

      <Breadcrumb
        siteId="saddle-com"
        items={[{ name: 'Home', href: '/' }, { name: 'Saddle Fit' }]}
      />

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="saddle-com:hub-fit" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <div className="bg-brand-primary-pale border border-brand-border rounded-xl p-5 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Free Lead Magnet
          </div>
          <div className="font-display font-bold text-brand-dark text-lg mb-2">
            Get the free 12-Point Saddle Fit Checklist
          </div>
          <p className="text-sm text-brand-text-mid mb-3 max-w-2xl">
            A printable 12-point checklist for try-on appointments and routine fit checks — covers wither clearance,
            panel contact, gullet clearance, balance, and the rider-side checks. Sourced from cited references; not a
            substitute for a qualified fitter.
          </p>
          <Link
            href="/saddle-fit-checklist"
            className="inline-block bg-brand-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:bg-brand-primary-dark transition-colors"
          >
            Get the free checklist →
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">English Disciplines</h2>
          <p className="text-sm text-brand-text-mid mb-5 max-w-2xl">
            English saddle disciplines share a flap-and-panel construction but differ markedly in seat depth, flap
            angle, and where in the saddle the rider needs to sit. Pick the discipline closest to what you ride.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ENGLISH.map((d) => (
              <Link
                key={d.slug}
                href={`/fit/${d.slug}`}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                  English · Saddle Fit Reference
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-1.5">
                  {d.disciplineName} Saddle Fit
                </div>
                <div className="text-xs text-brand-text-light mb-2">{d.tagline}</div>
                <div className="text-2xs text-brand-text-light">
                  <strong>Saddle type:</strong> {d.saddleType.split('—')[0].trim()}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">Western Disciplines</h2>
          <p className="text-sm text-brand-text-mid mb-5 max-w-2xl">
            Western saddle fit centers on a rigid tree — bar angle, gullet width, and bar length must suit the horse
            because the tree itself cannot be re-flocked.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {WESTERN.map((d) => (
              <Link
                key={d.slug}
                href={`/fit/${d.slug}`}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                  Western · Saddle Fit Reference
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-1.5">
                  {d.disciplineName} Saddle Fit
                </div>
                <div className="text-xs text-brand-text-light mb-2">{d.tagline}</div>
                <div className="text-2xs text-brand-text-light">
                  <strong>Saddle type:</strong> {d.saddleType.split('—')[0].trim()}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">Related References</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: 'All Saddle Brands',
                href: '/brands',
                desc: '10-brand reference — Stübben, Pessoa, Bates, Wintec, County, Custom, Antares, Billy Cook, Circle Y, Reinsman.',
              },
              {
                title: 'Best English Saddles',
                href: '/reviews/best-english-saddles',
                desc: 'English saddle reviews by discipline and budget.',
              },
              {
                title: 'Best Western Saddles',
                href: '/reviews/best-western-saddles',
                desc: 'Western saddle reviews — trail, ranch, reining, roping.',
              },
              {
                title: 'General Saddle Fit Guide',
                href: '/guides/saddle-fit-guide',
                desc: 'The cross-discipline 4-point check — wither, panel, gullet, balance.',
              },
              {
                title: 'Used Saddle Buying Guide',
                href: '/guides/used-saddle-buying-guide',
                desc: 'Pre-purchase inspection checklist for used saddles.',
              },
              {
                title: 'Seat Size Guide',
                href: '/guides/seat-size-guide',
                desc: 'Rider-side saddle sizing — seat size, twist, and flap length.',
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors"
              >
                <div className="font-display font-bold text-brand-dark text-sm mb-1">{l.title}</div>
                <div className="text-xs text-brand-text-light">{l.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture
          variant="section"
          siteId="saddle-com"
          title="Free Saddle Buyer's Guide"
          subtitle="Brand-by-brand reviews and saddle-fit reference every other week."
          source="fit-hub"
          ctaText="Get Free Guide"
          perks={['📋 Brand fit profiles', '💰 Used market pricing', '🐎 Discipline-specific fit notes']}
        />
      </div>
    </>
  )
}
