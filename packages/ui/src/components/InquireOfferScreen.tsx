import { StockImage } from './StockImage'
import { InquireForm } from './InquireForm'
import type { SiteId } from '../config/sites'

export function InquireOfferScreen({
  siteId,
  siteName,
  heroKey,
}: {
  siteId: SiteId
  siteName: string
  heroKey: string
}) {
  return (
    <section className="relative min-h-[calc(100vh-68px)] flex items-center justify-center px-4 py-10">
      <div className="absolute inset-0 overflow-hidden [&>figure]:absolute [&>figure]:inset-0 [&>figure]:m-0 [&>figure]:h-full [&>figure]:w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
        <StockImage manifestKey={heroKey} alt="" aspect="16:9" variant="inline" priority subtleCredit />
      </div>
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-md rounded-lg p-6 sm:p-8 shadow-2xl" style={{ background: '#4a90c8' }}>
        <p className="text-white/90 text-xs tracking-wide uppercase text-center mb-1">{siteName}</p>
        <h1 className="text-white text-center font-display font-bold italic text-3xl mb-5">
          Make an offer
        </h1>
        <InquireForm siteName={siteName} />
      </div>
      <span className="hidden">{siteId}</span>
    </section>
  )
}
