import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

const FILL_IMAGE =
  '[&_figure]:!my-0 [&_figure]:!h-full [&_figure]:!w-full [&_figure>div]:!absolute [&_figure>div]:!inset-0 [&_figure>div]:!rounded-none'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark min-h-[62vh] sm:min-h-[70vh] lg:min-h-[78vh]">
      <div className={`absolute inset-0 z-0 ${FILL_IMAGE}`}>
        <StockImage
          manifestKey="horses-com:hero"
          alt="A horse and rider at the start of the day"
          aspect="16:9"
          variant="inline"
          priority
          subtleCredit
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 top-1/3 pointer-events-none z-[1] bg-gradient-to-t from-brand-dark/85 via-brand-dark/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 55% at 22% 88%, rgba(182,136,48,0.30) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col justify-end min-h-[62vh] sm:min-h-[70vh] lg:min-h-[78vh] mx-auto max-w-container-wide w-full px-container-sm sm:px-container pt-20 pb-10 lg:pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span
              aria-hidden="true"
              className="h-px w-8"
              style={{ background: 'var(--brand-accent)' }}
            />
            <span
              className="text-2xs font-bold uppercase tracking-eyebrow"
              style={{ color: 'var(--brand-accent-light)' }}
            >
              Horses.com
            </span>
          </div>

          <h1
            className="font-display font-bold text-white tracking-tight leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(36px, 5.4vw, 72px)', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            The horse owner reference
          </h1>

          <p
            className="font-display italic mb-6"
            style={{
              color: 'var(--brand-accent-light)',
              fontSize: 'clamp(22px, 2.4vw, 30px)',
              lineHeight: 1.25,
              maxWidth: '46rem',
              textShadow: '0 1px 12px rgba(0,0,0,0.55)',
            }}
          >
            Across English, Western, trail, racing, eventing, and driving.
          </p>

          <p
            className="text-base lg:text-lg text-white/85 leading-relaxed max-w-2xl mb-9"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.55)' }}
          >
            Breed, health, tack, and supplement references written for the
            decision you make at 7am before the farrier arrives. Not a marketplace.
            Not a certification board.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/health"
              className="inline-flex items-center font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200"
              style={{
                background: 'var(--brand-accent)',
                color: 'var(--brand-dark)',
              }}
            >
              Browse equine health
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
            <Link
              href="/first-horse-roadmap"
              className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
            >
              Get the 90-day first-horse roadmap
              <span
                aria-hidden="true"
                className="ml-1.5 transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
