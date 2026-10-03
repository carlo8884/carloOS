/**
 * GA4 loader for the five earning sites.
 *
 * The library at googletagmanager.com/gtag/js?id=G-… is the measurement
 * script Lighthouse labels "Google Tag Manager". It is not a GTM- container.
 * ShopCtas and other callers use window.gtag for affiliate_click, so the
 * page keeps a tiny queue stub in the initial HTML. The ~178kb library
 * itself waits until after hydration (next/script afterInteractive) so it
 * does not compete with first paint. Hits use sendBeacon so a click that
 * navigates to /go still leaves the browser.
 */
import Script from 'next/script'

const PLACEHOLDER_ID = 'G-XXXXXXXXXX'

export function ga4Bootstrap(measurementId: string, customMap: boolean): string {
  const id = JSON.stringify(measurementId)
  const config = customMap
    ? `gtag('config',${id},{transport_type:'beacon',custom_map:{dimension1:'content_type',dimension2:'site_section',dimension3:'site_name'}});`
    : `gtag('config',${id},{transport_type:'beacon'});`
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${config}`
}

export function Ga4Loader({
  measurementId,
  customMap = false,
}: {
  measurementId: string | undefined
  customMap?: boolean
}) {
  const id = measurementId?.trim()
  if (!id || id === PLACEHOLDER_ID) return null
  return (
    <>
      <Script
        id="ga4"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: ga4Bootstrap(id, customMap) }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`}
        strategy="afterInteractive"
      />
    </>
  )
}
