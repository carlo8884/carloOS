# Launch-day runbook — Horses.com

One site, about 15 minutes at the keyboard. This file does not change env, DNS, or domains. Dog.com and Fish.com stay unset. Use this file only if Horses.com is the first public site.

Checked 2026-10-09 with `GET /v6/domains/horses.com/config` for project `horses-com`. Docs: [Set up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain) and [Working with DNS](https://vercel.com/docs/domains/working-with-dns). ALIAS is the apex hostname map. A CNAME is not valid at the apex. Rank 1 is what that config returns first. Rank 2 (`76.76.21.21` and `cname.vercel-dns.com`) is the older docs example. Use rank 2 only if the project domain card shows it instead of rank 1.

## Project

| | |
|---|---|
| Vercel project | `horses-com` |
| Team | `team_R4jRKf08nw1F1ktvhgqjmvcL` |
| Preview (stays noindex) | `https://horses-com.vercel.app` |
| On the project now | `horses-com.vercel.app` only. The apex is not attached. |
| Nameservers (leave them) | `ns1.eftydns.com`, `ns2.eftydns.com` (Network Solutions) |

Do not move the zone to `ns1.vercel-dns.com`.

## DNS at Network Solutions

The public apex A is `86.105.245.69`. Delete that A on `@` and on `www` before saving the rows below. TTL `60` if the form asks.

Apex: enter the two A records. If the type menu has ALIAS or ANAME, enter the ALIAS row instead of the two A rows. Do not enter both.

| Host | Type | Value |
|---|---|---|
| `@` | A | `216.150.1.1` |
| `@` | A | `216.150.16.1` |
| `@` | ALIAS (only instead of the A rows) | `4bfca9d596abba3d.vercel-dns-016.com` |

| Host | Type | Value |
|---|---|---|
| `www` | CNAME | `4bfca9d596abba3d.vercel-dns-016.com` |

Network Solutions may label `@` as blank or as `horses.com`. Drop the trailing dot if the form adds one.

## Order

1. Vercel → project `horses-com` → Settings → Domains. Add `horses.com`, then add `www.horses.com`. Set `www.horses.com` to redirect to `horses.com` with status 308. App middleware already returns that 308 when the domain redirect is still unset. Previews stay noindex.
2. At Network Solutions, publish the records above. Leave the nameservers.
3. Wait until the domain card says the certificate is valid. That is usually a few minutes after Vercel sees the records.
4. On this project only, set Production `SITE_INDEXABLE` to `horses.com`. Do not set `true`. Leave the variable unset on `dog-com`, `carlo-os-fish-com`, `carlo-os-vets-co`, and `ferret-com`.
5. Redeploy the current production deployment so the flag is in the build.
6. Google Search Console: add a Domain property for `horses.com`. Google shows a TXT record. Add that TXT on `@` at Network Solutions, then click Verify. Submit `https://horses.com/sitemap.xml`. Do not invent the TXT value.

## Smoke

Run these after step 5. `curl -sI` for status and `X-Robots-Tag`. `curl -s` for the HTML robots meta.

| URL | Status | Robots |
|---|---|---|
| `https://horses.com/` | 200 | `index, follow`. No `X-Robots-Tag`. |
| `https://www.horses.com/` | 308 to `https://horses.com/` | No robots meta on the redirect. |
| `https://horses.com/robots.txt` | 200 | Allows `/`. Contains `Sitemap: https://horses.com/sitemap.xml`. |
| `https://horses.com/sitemap.xml` | 200 | Locs use `https://horses.com`. |
| `https://horses.com/about` | 200 | `index, follow`. |
| `https://horses.com/disclosure` | 200 | `index, follow`. |
| `https://horses.com/legal/privacy-policy` | 200 | `index, follow`. |
| `https://horses.com/search` | 200 | `noindex, nofollow`. |
| `https://horses.com/not-a-real-page` | 404 | `noindex, follow`. |
| `https://horses.com/api/analytics` | 200 | Body `{"ok":false}`. `robots.txt` disallows `/api/`. |

`https://horses-com.vercel.app/` stays 200 with `X-Robots-Tag: noindex, nofollow`.

## Rollback

1. Delete `SITE_INDEXABLE` on `horses-com` and redeploy. `https://horses.com/robots.txt` returns `Disallow: /`, and pages send `X-Robots-Tag: noindex, nofollow`.
2. Remove `horses.com` and `www.horses.com` from the project. The preview hostname stays.

To show the previous host again, put A `86.105.245.69` back after the domain is removed. This repo does not do that.
