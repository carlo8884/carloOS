/**
 * SkimlinksLoader — drop-in script tag for the Skimlinks affiliate network.
 *
 * Skimlinks rewrites in-content outbound links into tracked affiliate links
 * for ~24,000 merchants automatically. We add it as a sitewide footer script
 * so every page benefits without per-page wiring.
 *
 * NEXT_PUBLIC_SKIMLINKS_ID must be set; otherwise renders nothing
 * (so dev/preview environments stay clean).
 */

import Script from 'next/script'

interface SkimlinksLoaderProps {
  /** Publisher ID from Skimlinks dashboard, e.g. "1234567X1234567". */
  publisherId?: string
}

export function SkimlinksLoader({ publisherId }: SkimlinksLoaderProps) {
  const id = publisherId ?? process.env.NEXT_PUBLIC_SKIMLINKS_ID
  if (!id) return null

  return (
    <Script
      id="skimlinks-loader"
      strategy="afterInteractive"
      src={`https://s.skimresources.com/js/${id}.skimlinks.js`}
    />
  )
}
