/**
 * SkimlinksLoader — universal auto-monetization for outbound links.
 *
 * Drops the Skimlinks <script> tag once per page. Skimlinks then
 * automatically converts any outbound product link to a 2,500+
 * merchant affiliate link, paying ~75% of the commission to us.
 *
 * Highest-ROI 15-minute primitive in the portfolio. Catches the long
 * tail of merchants we haven't manually integrated.
 *
 * Sign up at: https://skimlinks.com
 * Set NEXT_PUBLIC_SKIMLINKS_PUBLISHER_ID once approved.
 *
 * Built per Architect Directive 1 / S5.
 */

import Script from 'next/script'

export function SkimlinksLoader() {
  const publisherId = process.env.NEXT_PUBLIC_SKIMLINKS_PUBLISHER_ID

  if (!publisherId) {
    // Not yet wired — render nothing in production rather than break.
    if (process.env.NODE_ENV !== 'production') {
      console.info(
        '[SkimlinksLoader] NEXT_PUBLIC_SKIMLINKS_PUBLISHER_ID not set. ' +
          'Sign up at skimlinks.com and add the publisher ID to enable ' +
          'site-wide auto-monetization.',
      )
    }
    return null
  }

  return (
    <Script
      src={`https://s.skimresources.com/js/${publisherId}.skimlinks.js`}
      strategy="afterInteractive"
      data-skimlinks-tracking-id={publisherId}
    />
  )
}
