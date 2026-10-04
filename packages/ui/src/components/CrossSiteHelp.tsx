'use client'

import { CROSS_SITE_HELP_EVENT, crossSiteHelpParams, type CrossSiteHelpTopic } from '../lib/cross-site-help'
import { trackEvent } from '../lib/track-event'

/**
 * One absolute cross-site help link. Click fires cross_site_help when gtag
 * is present and still navigates when it is not.
 */
export function CrossSiteHelp({
  href,
  label,
  fromSite,
  toSite,
  topic,
  children,
}: {
  href: string
  label: string
  fromSite: string
  toSite: string
  topic: CrossSiteHelpTopic
  children: string
}) {
  return (
    <p className="not-prose my-6 text-sm leading-relaxed text-brand-text-mid">
      {children}{' '}
      <a
        href={href}
        data-cross-site-help={topic}
        className="font-semibold text-brand-primary underline underline-offset-2"
        onClick={() =>
          trackEvent(
            CROSS_SITE_HELP_EVENT,
            crossSiteHelpParams({ fromSite, toSite, topic, destination: href }),
          )
        }
      >
        {label}
      </a>
    </p>
  )
}
