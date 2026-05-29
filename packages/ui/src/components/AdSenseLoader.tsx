/**
 * AdSenseLoader — Google AdSense auto-ads script.
 *
 * Place once near the root of <body> (e.g. in layout.tsx). Reads the
 * AdSense client ID from NEXT_PUBLIC_ADSENSE_CLIENT and no-ops if absent.
 */

import Script from 'next/script'

interface AdSenseLoaderProps {
  /** ca-pub-XXXXXXXXXXXXXXXX from your AdSense dashboard. */
  clientId?: string
}

export function AdSenseLoader({ clientId }: AdSenseLoaderProps) {
  const id = clientId ?? process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  if (!id) return null

  return (
    <Script
      id="adsense-loader"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`}
      crossOrigin="anonymous"
    />
  )
}
