# Launch-day runbook — Vets.co

One site, about 15 minutes at the keyboard. This file does not change env, DNS, or domains. Dog.com and Fish.com stay unset.

Checked 2026-10-09 with `GET /v6/domains/vets.co/config` for project `carlo-os-vets-co`. Docs: [Set up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain) and [Working with DNS](https://vercel.com/docs/domains/working-with-dns). ALIAS is the apex hostname map. A CNAME is not valid at the apex. Rank 1 is what that config returns first. Rank 2 (`76.76.21.21` and `cname.vercel-dns.com`) is the older docs example. Use rank 2 only if the project domain card shows it instead of rank 1.

## Project

| | |
|---|---|
| Vercel project | `carlo-os-vets-co` |
| Team | `team_R4jRKf08nw1F1ktvhgqjmvcL` |
| Preview (stays noindex) | `https://carlo-os-vets-co.vercel.app` |
| Already on the project | `vets.co` and `www.vets.co`, verified, redirect unset, plus the preview hostname |
| Nameservers (leave them) | `ns1.eftydns.com`, `ns2.eftydns.com` (Network Solutions) |

Do not move the zone to `ns1.vercel-dns.com`.

## DNS at Network Solutions

The public apex A is `86.105.245.69`. Delete that A on `@` and on `www` before saving the rows below. TTL `60` if the form asks.

Apex: enter the two A records. If the type menu has ALIAS or ANAME, enter the ALIAS row instead of the two A rows. Do not enter both.

| Host | Type | Value |
|---|---|---|
| `@` | A | `216.150.1.1` |
| `@` | A | `216.150.16.1` |
| `@` | ALIAS (only instead of the A rows) | `26f69e3cd0268cf3.vercel-dns-017.com` |

| Host | Type | Value |
|---|---|---|
| `www` | CNAME | `26f69e3cd0268cf3.vercel-dns-017.com` |

Network Solutions may label `@` as blank or as `vets.co`. Drop the trailing dot if the form adds one.

## Order

1. Vercel → project `carlo-os-vets-co` → Settings → Domains. `vets.co` and `www.vets.co` are already there. Add a row only if it is missing. Set `www.vets.co` to redirect to `vets.co` with status 308.
2. At Network Solutions, publish the records above. Leave the nameservers.
3. Wait until the domain card says the certificate is valid. That is usually a few minutes after Vercel sees the records.
4. On this project only, set Production `SITE_INDEXABLE` to `vets.co`. Do not set `true`. Leave the variable unset on `dog-com`, `carlo-os-fish-com`, `horses-com`, and `ferret-com`.
5. Redeploy the current production deployment so the flag is in the build.
6. Google Search Console: add a Domain property for `vets.co`. Google shows a TXT record. Add that TXT on `@` at Network Solutions, then click Verify. Submit `https://vets.co/sitemap.xml`. Do not invent the TXT value.

## Smoke

Run these after step 5. `curl -sI` for status and `X-Robots-Tag`. `curl -s` for the HTML robots meta.

| URL | Status | Robots |
|---|---|---|
| `https://vets.co/` | 200 | `index, follow`. No `X-Robots-Tag`. |
| `https://www.vets.co/` | 308 to `https://vets.co/` | No robots meta on the redirect. |
| `https://vets.co/robots.txt` | 200 | Allows `/`. Contains `Sitemap: https://vets.co/sitemap.xml`. |
| `https://vets.co/sitemap.xml` | 200 | Locs use `https://vets.co`. |
| `https://vets.co/about` | 200 | `index, follow`. |
| `https://vets.co/disclosure` | 200 | `index, follow`. |
| `https://vets.co/legal/privacy-policy` | 200 | `index, follow`. |
| `https://vets.co/search` | 200 | `noindex, nofollow`. |
| `https://vets.co/not-a-real-page` | 404 | `noindex, follow`. |
| `https://vets.co/api/analytics` | 200 | Body `{"ok":false}`. `robots.txt` disallows `/api/`. |

`https://carlo-os-vets-co.vercel.app/` stays 200 with `X-Robots-Tag: noindex, nofollow`.

## Rollback

1. Delete `SITE_INDEXABLE` on `carlo-os-vets-co` and redeploy. `https://vets.co/robots.txt` returns `Disallow: /`, and pages send `X-Robots-Tag: noindex, nofollow`.
2. Remove `vets.co` and `www.vets.co` from the project. The preview hostname stays.

To show the previous host again, put A `86.105.245.69` back after the domain is removed. This repo does not do that.
