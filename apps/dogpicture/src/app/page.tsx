/**
 * DogPicture.com Homepage
 *
 * Conversion-first single page:
 *   1. Hero with the headline + primary CTA
 *   2. Style preset gallery (12 thumbnails)
 *   3. How it works (3 steps)
 *   4. Trust signals + review snippets
 *   5. Pricing strip
 *   6. Footer email capture
 */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'
import { STYLE_PRESETS } from '@/data/styles'
import { PRODUCT_LIST, formatPrice } from '@/data/products'
import { REVIEW_SNIPPETS, AGGREGATE_RATING } from '@/data/reviews'
import { FooterEmailFallback } from '@/components/FooterEmailFallback'

export const metadata: Metadata = buildMetadata({
  siteId: 'dogpicture',
  title: 'DogPicture.com — AI Dog Portraits, From $9',
  description:
    'Turn your dog into a masterpiece. AI portraits in 60 seconds, starting at $9. Download instantly or order a canvas, mug, T-shirt, or blanket — shipped worldwide.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 20% 20%, rgba(249,115,22,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 60%, rgba(251,146,60,0.14) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-container mx-auto px-container-sm sm:px-10 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-brand-primary-pale text-brand-primary-dark text-xs font-bold uppercase tracking-eyebrow mb-6">
              ✨ AI-powered keepsakes
            </span>
            <h1 className="font-display font-black text-brand-text-dark leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6">
              Turn your dog into a{' '}
              <span className="text-brand-primary italic">masterpiece</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-text-mid leading-relaxed mb-8 max-w-xl">
              AI portraits in 60 seconds, starting at <strong>$9</strong>. Download
              instantly, or order a canvas, mug, T-shirt, or framed print — printed and shipped
              worldwide.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/create"
                className="inline-flex items-center bg-brand-primary text-white font-bold text-base px-7 py-4 rounded-pill no-underline hover:bg-brand-primary-light transition-colors shadow-card"
              >
                Create your portrait →
              </Link>
              <Link
                href="#styles"
                className="inline-flex items-center bg-brand-white text-brand-text-dark font-bold text-base px-6 py-4 rounded-pill no-underline border border-brand-border hover:border-brand-primary transition-colors"
              >
                See 12 art styles
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-text-mid">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true">⭐⭐⭐⭐⭐</span>
                <strong>{AGGREGATE_RATING.stars}</strong> from{' '}
                {AGGREGATE_RATING.count.toLocaleString()}+ happy owners
              </span>
              <span className="flex items-center gap-1.5">🔒 Stripe secure checkout</span>
              <span className="flex items-center gap-1.5">🚚 Ships worldwide</span>
            </div>
          </div>

          {/* Sample stack */}
          <div className="relative h-[440px] sm:h-[520px] hidden lg:block">
            <SampleStack />
          </div>
        </div>
      </section>

      {/* ── STYLE GALLERY ───────────────────────────────────────── */}
      <section id="styles" className="bg-brand-white py-section">
        <div className="max-w-container mx-auto px-container-sm sm:px-10">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-eyebrow text-brand-primary font-bold mb-3">
              12 styles · pick one or three
            </div>
            <h2 className="font-display font-black text-brand-text-dark text-3xl sm:text-4xl tracking-tight mb-3">
              Find the style that fits your dog
            </h2>
            <p className="text-base text-brand-text-mid max-w-2xl mx-auto">
              From Renaissance oil paintings to cyberpunk neon — every style is hand-tuned to keep
              your dog recognizable. Bundle up to three styles in one order.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {STYLE_PRESETS.map((s) => (
              <Link
                key={s.id}
                href={`/create?style=${s.id}`}
                className="group rounded-xl overflow-hidden bg-brand-surface border border-brand-border no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={s.sample}
                    alt={`${s.name} style sample`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="font-display font-bold text-base text-brand-text-dark mb-1">
                    {s.name}
                  </div>
                  <div className="text-xs text-brand-text-light">{s.tagline}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/create"
              className="inline-flex items-center bg-brand-primary text-white font-bold text-base px-7 py-3.5 rounded-pill no-underline hover:bg-brand-primary-light transition-colors"
            >
              Start your portrait →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-section bg-brand-surface">
        <div className="max-w-container mx-auto px-container-sm sm:px-10">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-eyebrow text-brand-primary font-bold mb-3">
              How it works
            </div>
            <h2 className="font-display font-black text-brand-text-dark text-3xl sm:text-4xl tracking-tight">
              60 seconds from photo to keepsake
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Upload a photo',
                desc: 'A clear photo of your dog — phone snapshot is fine. We support JPG, PNG, and HEIC.',
                icon: '📸',
              },
              {
                step: 2,
                title: 'Pick a style',
                desc: 'Choose one to three of our 12 art styles. We render in seconds, no waiting.',
                icon: '🎨',
              },
              {
                step: 3,
                title: 'Download or order prints',
                desc: 'Get the digital file for $9, or upgrade to a canvas, mug, blanket, or framed print.',
                icon: '✨',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-brand-white rounded-xl p-8 border border-brand-border"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {s.icon}
                </div>
                <div className="text-xs uppercase tracking-eyebrow text-brand-primary font-bold mb-2">
                  Step {s.step}
                </div>
                <h3 className="font-display font-bold text-xl text-brand-text-dark mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-text-mid leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section className="py-section bg-brand-white">
        <div className="max-w-container mx-auto px-container-sm sm:px-10">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-eyebrow text-brand-primary font-bold mb-3">
              Pricing
            </div>
            <h2 className="font-display font-black text-brand-text-dark text-3xl sm:text-4xl tracking-tight mb-3">
              From $9. No subscriptions, ever.
            </h2>
            <p className="text-base text-brand-text-mid max-w-xl mx-auto">
              Pay once, own it forever. Digital files are emailed instantly; physical orders ship in 3–7 business days.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
            {PRODUCT_LIST.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-brand-border bg-brand-surface p-4 text-center"
              >
                <div className="font-display font-bold text-2xl text-brand-text-dark">
                  {formatPrice(p.priceCents)}
                </div>
                <div className="text-xs text-brand-text-mid mt-1">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / REVIEWS ──────────────────────────────────────── */}
      <section className="py-section bg-brand-surface">
        <div className="max-w-container mx-auto px-container-sm sm:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 text-2xl mb-2" aria-hidden="true">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="font-display font-black text-3xl text-brand-text-dark">
              {AGGREGATE_RATING.stars} / 5
            </div>
            <div className="text-sm text-brand-text-mid mt-1">
              From {AGGREGATE_RATING.count.toLocaleString()}+ portraits delivered
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEW_SNIPPETS.map((r, i) => (
              <blockquote
                key={i}
                className="bg-brand-white rounded-xl p-6 border border-brand-border"
              >
                <div className="text-brand-primary text-lg mb-3" aria-label={`${r.rating} stars`}>
                  {'★'.repeat(r.rating)}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed italic">
                  &ldquo;{r.text}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-brand-text-light max-w-xl mx-auto">
            Review snippets shown above are aggregate marketing summaries — we do not attribute them
            to specific individuals. See our <Link href="/legal/refund-policy" className="text-brand-primary underline">refund policy</Link> for full terms.
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-section bg-brand-dark text-white">
        <div className="max-w-content mx-auto px-container-sm sm:px-10 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Ready to give your dog the portrait they deserve?
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-lg mx-auto">
            One photo. One minute. A keepsake you&apos;ll print, ship, gift, and hang.
          </p>
          <Link
            href="/create"
            className="inline-flex items-center bg-brand-primary text-white font-bold text-base px-8 py-4 rounded-pill no-underline hover:bg-brand-primary-light transition-colors shadow-card"
          >
            Create your portrait — from $9 →
          </Link>

          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="font-display font-bold text-xl mb-2 text-white">
              Free weekly dog portrait inspiration
            </h3>
            <p className="text-sm text-white/55 mb-6">
              Style ideas, new presets, and seasonal collections — once a week, no spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dogpicture"
              source="dogpicture:weekly"
              placeholder="your@email.com"
              ctaText="Subscribe"
            />
            {/* When EmailCapture is gated off (NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED != true)
                we render a static visual placeholder so the section still
                anchors the footer. The real form lives in <EmailCapture> above. */}
            {process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED !== 'true' && (
              <FooterEmailFallback />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

// ── Sample stack: three angled cards in the hero ─────────────────────────

function SampleStack() {
  const samples = [STYLE_PRESETS[0], STYLE_PRESETS[2], STYLE_PRESETS[7]]
  return (
    <div className="relative w-full h-full">
      {samples.map((s, i) => {
        const transform =
          i === 0
            ? 'rotate(-6deg) translate(-12%, 6%)'
            : i === 1
              ? 'rotate(3deg) translate(8%, -4%)'
              : 'rotate(-2deg) translate(0, 14%)'
        return (
          <div
            key={s.id}
            className="absolute inset-0 m-auto w-[68%] aspect-[3/4] rounded-2xl overflow-hidden shadow-card-hover bg-brand-white border border-brand-border"
            style={{ transform, zIndex: i + 1 }}
          >
            <Image
              src={s.sample}
              alt={`${s.name} sample`}
              fill
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-pill bg-brand-white/95 text-brand-text-dark text-xs font-bold backdrop-blur">
              {s.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}
