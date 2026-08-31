import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

const HERO_FILL =
  '[&_figure]:!my-0 [&_figure]:!h-full [&_figure]:!w-full [&_figure>div]:!absolute [&_figure>div]:!inset-0 [&_figure>div]:!rounded-none'

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function HomeHero() {
  return (
    <section className="relative bg-brand-dark min-h-[62vh] sm:min-h-[70vh] lg:min-h-[78vh]">
      <div className={`absolute inset-0 ${HERO_FILL}`}>
        <StockImage
          manifestKey="dog-com:hero"
          alt="A happy, healthy dog"
          aspect="16:9"
          variant="inline"
          priority
          subtleCredit
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-brand-dark/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 25% 75%, rgba(232,98,42,0.35) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col justify-end min-h-[62vh] sm:min-h-[70vh] lg:min-h-[78vh] px-container-sm sm:px-container pt-16 pb-8 sm:pb-12">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Dog.com &mdash; Owner&apos;s reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-[1.03] mb-4 max-w-3xl"
          style={{
            fontSize: 'clamp(34px, 6vw, 68px)',
            textShadow: '0 2px 18px rgba(0,0,0,0.45)',
          }}
        >
          Everything your dog needs you to know.
        </h1>
        <p
          className="text-base sm:text-lg font-light text-white/85 leading-relaxed max-w-xl mb-6"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
        >
          Decisions, not definitions. Symptoms, breed risks, a new puppy, a
          senior dog, or a product call &mdash; we route you to sourced guidance.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/symptoms"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3.5 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200 shadow-[0_6px_24px_rgba(232,98,42,0.4)]"
          >
            Start with symptoms
            <IconArrowRight />
          </Link>
          <Link
            href="/breeds"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-bold text-sm px-6 py-3.5 rounded-lg no-underline hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
          >
            Find your breed
            <IconArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
