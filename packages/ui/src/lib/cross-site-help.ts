/**
 * GA4 payload for one relevant cross-site help link.
 * The destination is always an absolute URL from crossSiteHref.
 */
export const CROSS_SITE_HELP_EVENT = 'cross_site_help'

export type CrossSiteHelpTopic = 'insurance' | 'telehealth' | 'vet-costs' | 'species-care'

export function crossSiteHelpParams(input: {
  fromSite: string
  toSite: string
  topic: CrossSiteHelpTopic
  destination: string
}): Record<string, string> {
  return {
    from_site: input.fromSite,
    to_site: input.toSite,
    topic: input.topic,
    destination: input.destination,
  }
}
