# Launch-day runbook

Read-only snapshot of the five earning Vercel projects on 2026-10-06. This runbook does not change domains, env vars, or DNS. Carlo sets the records and `SITE_INDEXABLE` to one apex on launch day. `true` does not index every host.

| Field | Score |
|---|---|
| SEO Impact | Apex canonicals, crawlable robots, and sitemap submission are the indexing step that makes the existing pages eligible. |
| GEO Impact | The same sitemap and apex hosts are what answer engines fetch once DNS points here. |
| Monetization Impact | `/go` stays a 302 to the partner. No new retailer or tag. |
| Build Effort | S. One doc, one smoke script. No page rewrites. |
| Priority Level | P0. Do this the day DNS flips, not before. |

## What is already true

Canonical, Open Graph, and sitemap URLs are the apex (`https://dog.com`, `https://fish.com`, `https://horses.com`, `https://vets.co`, `https://ferret.com`). `robots.ts` serves a crawlable file with `Sitemap: {apex}/sitemap.xml` only when `SITE_INDEXABLE` names that apex and the host is not a preview. `SITE_INDEXABLE=true` does not open every host. `*.vercel.app` stays `Disallow: /` and `X-Robots-Tag: noindex` even after the flag is on. The 404 document is `noindex` with an apex canonical.

Do not set `SITE_INDEXABLE` in the repo. Do not set it on Vercel until the apex answers from that project.

## Project domains (unchanged)

Team `team_R4jRKf08nw1F1ktvhgqjmvcL`. Listed from the Vercel project domain API. Nothing here was added or edited.

| Site | Project | Domains on the project now | Nameservers now |
|---|---|---|---|
| dog.com | `dog-com` | `dog-com-three.vercel.app` only. Apex is not attached. | Not on the team domain list. Public A is `86.105.245.69` (not Vercel). |
| fish.com | `carlo-os-fish-com` | `carlo-os-fish-com.vercel.app` only. Apex is not attached. | Not on the team domain list. |
| horses.com | `horses-com` | `horses-com.vercel.app` only. Apex is not attached. | Not on the team domain list. |
| vets.co | `carlo-os-vets-co` | `vets.co` and `www.vets.co` (verified, redirect unset) plus `carlo-os-vets-co.vercel.app` | `ns1.eftydns.com`, `ns2.eftydns.com`. `configVerifiedAt` is empty, so routing is not confirmed. Public A for `vets.co` and `www.vets.co` is `86.105.245.69`. |
| ferret.com | `ferret-com` | `ferret.com` and `www.ferret.com` (verified, redirect unset) plus `ferret-com.vercel.app` | `ns41.worldnic.com`, `ns42.worldnic.com`. `configVerifiedAt` is empty. Public A is `168.75.167.165`. |

Keep those nameservers. Domains are external (Network Solutions / Worldnic / Efty). Do not move the zone to Vercel nameservers.

## DNS records to set

Vets.co, Horses.com, and Ferret.com use the records in `docs/launch-runbook-vets.md`, `docs/launch-runbook-horses.md`, and `docs/launch-runbook-ferret.md`. Those values are the rank-1 pair from each domain’s Vercel config on 2026-10-09 (two apex A records, or one apex ALIAS, plus the www CNAME). The older docs example, a single A of `76.76.21.21` and `cname.vercel-dns.com`, is rank 2 on that config. Use rank 2 only when the project domain card shows it instead of rank 1.

Dog.com and Fish.com are not in the first launch. When one of those projects gets a domain, copy that domain’s rank-1 records from its Vercel domain card. Do not reuse another site’s CNAME target.

`dog.com`, `fish.com`, and `horses.com` are not on their projects yet. Add the apex and `www` to the project named above, then set that site's records at the registrar. `vets.co` and `ferret.com` are already attached and verified; set their records at the registrar that still holds the zone. Leave `www` redirect unset until the apex returns this site, then set `www` to redirect to the apex in that project so the canonical host is the only host. This repo does not make that change.

## Per site, the day DNS answers

The first public launch is one of vets.co, horses.com, or ferret.com. Leave Dog.com and Fish.com unset. One site at a time.

1. Confirm the apex A and www CNAME above are published at the registrar and the apex opens the project named in the table.
2. On that Vercel project only, set `SITE_INDEXABLE` to that apex (`vets.co`, `horses.com`, or `ferret.com`) and redeploy. Do not set `true`. Leave it unset on every other project and on every `*.vercel.app` host. Preview hosts stay noindex either way. Dog.com and Fish.com stay noindex when the value names a different apex.
3. Submit `{apex}/sitemap.xml` in Google Search Console and Bing Webmaster Tools for that property.
4. Verify with the apex, which expects a crawlable robots.txt:

```bash
pnpm launch:smoke dog-com --host https://dog.com
pnpm launch:smoke fish-com --host https://fish.com
pnpm launch:smoke horses-com --host https://horses.com
pnpm launch:smoke vets-co --host https://vets.co
pnpm launch:smoke ferret-com --host https://ferret.com
```

`npm run launch:smoke -- <site> --host <apex>` is the same script. The repo package manager stays npm.

## Before DNS

The script defaults to the project’s `*.vercel.app` host and expected-noindex mode. That mode still requires HTTP 200 on `/` and the five money pages, an apex canonical, `sitemap.xml` 200, a 404 that carries noindex, and one `/go` hop that returns 302 to a partner. It expects `robots.txt` to disallow `/`.

```bash
pnpm launch:smoke dog-com
pnpm launch:smoke fish-com
pnpm launch:smoke horses-com
pnpm launch:smoke vets-co
pnpm launch:smoke ferret-com
```

`--expect-noindex` forces that mode on any host. `--indexable` forces the crawlable-robots check.

## What the smoke script checks

Money pages are the five paths in `scripts/ci/lighthouse-budgets-lib.mjs` for that site.

- `/` and those five paths return 200.
- Each of those documents has `<link rel="canonical">` on the apex.
- Indexable mode: `robots.txt` allows crawl and lists `{apex}/sitemap.xml`. Expected-noindex mode: `robots.txt` disallows `/`.
- `/sitemap.xml` returns 200 and is a urlset or sitemap index.
- A missing path returns 404 and the document carries noindex (`X-Robots-Tag` or a robots meta).
- At least one `/go/...` href on those pages returns 302 to a host that is not this site.
