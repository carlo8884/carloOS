# Launch-day runbook — Ferret.com

One site, about 15 minutes at the keyboard. This file does not change env, DNS, or domains. Dog.com and Fish.com stay unset. Use this file only if Ferret.com is the first public site. The Vercel project is `ferret-com`, not `ferrets-com`.

Checked 2026-10-09 with `GET /v6/domains/ferret.com/config` for project `ferret-com`. Docs: [Set up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain) and [Working with DNS](https://vercel.com/docs/domains/working-with-dns). ALIAS is the apex hostname map. A CNAME is not valid at the apex. Rank 1 is what that config returns first. Rank 2 (`76.76.21.21` and `cname.vercel-dns.com`) is the older docs example. Use rank 2 only if the project domain card shows it instead of rank 1.

## Project

| | |
|---|---|
| Vercel project | `ferret-com` |
| Team | `team_R4jRKf08nw1F1ktvhgqjmvcL` |
| Preview (stays noindex) | `https://ferret-com.vercel.app` |
| Already on the project | `ferret.com` and `www.ferret.com`, verified, redirect unset, plus the preview hostname |
| Nameservers (leave them) | `ns41.worldnic.com`, `ns42.worldnic.com` (Network Solutions) |

Do not move the zone to `ns1.vercel-dns.com`.

## DNS at Network Solutions

The public apex A is `168.75.167.165`. `www` is a CNAME to `www.tabcom.com.edgekey.net`. Delete that apex A and that www CNAME before saving the rows below. TTL `60` if the form asks.

Apex: enter the two A records. If the type menu has ALIAS or ANAME, enter the ALIAS row instead of the two A rows. Do not enter both.

| Host | Type | Value |
|---|---|---|
| `@` | A | `216.150.1.1` |
| `@` | A | `216.150.16.1` |
| `@` | ALIAS (only instead of the A rows) | `2ed390f9c78d0cfe.vercel-dns-016.com` |

| Host | Type | Value |
|---|---|---|
| `www` | CNAME | `2ed390f9c78d0cfe.vercel-dns-016.com` |

Network Solutions may label `@` as blank or as `ferret.com`. Drop the trailing dot if the form adds one.

## Order

1. Vercel → project `ferret-com` → Settings → Domains. `ferret.com` and `www.ferret.com` are already there. Add a row only if it is missing. Set `www.ferret.com` to redirect to `ferret.com` with status 308.
2. At Network Solutions, publish the records above. Leave the nameservers.
3. Wait until the domain card says the certificate is valid. That is usually a few minutes after Vercel sees the records.
4. On this project only, set Production `SITE_INDEXABLE` to `ferret.com`. Do not set `true`. Leave the variable unset on `dog-com`, `carlo-os-fish-com`, `horses-com`, and `carlo-os-vets-co`.
5. Redeploy the current production deployment so the flag is in the build.
6. Google Search Console: add a Domain property for `ferret.com`. Google shows a TXT record. Add that TXT on `@` at Network Solutions, then click Verify. Submit `https://ferret.com/sitemap.xml`. Do not invent the TXT value.

## Smoke

Run these after step 5. `curl -sI` for status and `X-Robots-Tag`. `curl -s` for the HTML robots meta.

| URL | Status | Robots |
|---|---|---|
| `https://ferret.com/` | 200 | `index, follow`. No `X-Robots-Tag`. |
| `https://www.ferret.com/` | 308 to `https://ferret.com/` | No robots meta on the redirect. |
| `https://ferret.com/robots.txt` | 200 | Allows `/`. Contains `Sitemap: https://ferret.com/sitemap.xml`. |
| `https://ferret.com/sitemap.xml` | 200 | Locs use `https://ferret.com`. |
| `https://ferret.com/about` | 200 | `index, follow`. |
| `https://ferret.com/disclosure` | 200 | `index, follow`. |
| `https://ferret.com/legal/privacy-policy` | 200 | `index, follow`. |
| `https://ferret.com/search` | 200 | `noindex, nofollow`. |
| `https://ferret.com/not-a-real-page` | 404 | `noindex, follow`. |
| `https://ferret.com/api/analytics` | 200 | Body `{"ok":false}`. `robots.txt` disallows `/api/`. |

`https://ferret-com.vercel.app/` stays 200 with `X-Robots-Tag: noindex, nofollow`.

## Rollback

1. Delete `SITE_INDEXABLE` on `ferret-com` and redeploy. `https://ferret.com/robots.txt` returns `Disallow: /`, and pages send `X-Robots-Tag: noindex, nofollow`.
2. Remove `ferret.com` and `www.ferret.com` from the project. The preview hostname stays.

To show the previous host again, put A `168.75.167.165` back on the apex and the CNAME `www.tabcom.com.edgekey.net` back on `www` after the domain is removed. This repo does not do that.
