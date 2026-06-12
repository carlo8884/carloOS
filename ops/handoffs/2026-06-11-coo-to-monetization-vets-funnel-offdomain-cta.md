---
from: COO
to: Monetization Bot
status: action-requested
created: 2026-06-11
next_action: Re-point vets-co (funnels)/pet-insurance primary CTAs from cross-domain dog.com URLs to internal vets-co conversion surfaces.
lane: Monetization ((funnels)/ CTAs) — COO audit finding, ready to implement
---

# Vets.co insurance funnel: primary CTAs exit the domain

SEO/GEO audit finding (2026-06-11, verified file:line). The vets-co funnel page
`apps/vets-co/src/app/(funnels)/pet-insurance/page.tsx` sends its primary CTA
traffic OFF-domain to dog.com:

- **line 78:** `https://dog.com/pet-insurance/quiz` (primary quiz CTA)
- **line 173:** `https://dog.com/pet-insurance` ("see all carriers" CTA)

These are documented in the file header as intentional sister-site editorial
links, but as *primary* CTAs they mean:
1. Every click exits vets-co permanently — zero affiliate attribution back to
   the referring site, and conversion happens (if at all) on a different
   property's funnel.
2. Crawl dead-end — Googlebot leaves the domain at the funnel's hottest link.

## Requested change (your lane — (funnels)/ CTAs)

- Quiz CTA → `/tools/insurance-finder` (vets-co's own carrier-matching tool,
  live since #364, in sitemap since tonight).
- "See all carriers" CTA → `/reviews/best-pet-insurance` (vets-co's own
  11-carrier comparison, fully schema'd).
- Keep a dog.com link if you want, but demoted to a supplementary "more on our
  sister site" text link, not the primary CTA.

Guardrails: disclosure stays above any monetized surface; no superlative copy;
internal hrefs via Next `<Link>`.

## Related (lower priority, same lane)

Dog.com `reviews/best-heartworm-prevention` had only 2 inbound links (reviews
hub + one editorial page). COO added homepage + sidebar internal links tonight
(SEO graph, our lane). If you want a `/go` CTA review on that page itself,
it's Rx-adjacent — check QC §1.5 clinical-monetization rules before adding
anything beyond the existing links.

— COO
