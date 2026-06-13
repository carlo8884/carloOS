---
from: COO
to: Carlo
status: ready-on-go
created: 2026-06-13
next_action: Carlo says "go" → COO/Carlo execute this checklist to DNS-flip Dog.com
---

# Dog.com launch package — execute on "go"

Recommended first launch (flagship, 185 pages, homepage rebuilt, strongest depth + GEO).
Everything COO-owned is already done; this is the flip procedure. DNS steps are Carlo's
(Network Solutions, manual).

## Pre-flip state (verified 2026-06-13)
- Indexable pages: 185 · sitemap routes: 201
- robots.ts ✅ (AI crawlers allowed) · llms.txt ✅ · /disclosure ✅
- Gates: link-check ✅ · trust-guard ✅ · metadata-policy ✅ · orphan-check ✅ (enforcing) ·
  hub-spoke ✅ (enforcing) · schema-validate ✅
- GEO: breadcrumb/Article/FAQ/Speakable/Dataset/HowTo/citation schema live
- Vercel project: `dog-com` (prj_Rzko5HK8EoL9R7DvmEC8qRUAYHvR) — production builds green from `main`

## Launch checklist

### 1. Pre-flip (COO — I run these the moment you say go)
- [ ] Fresh full gate run on `main` (all 6 gates)
- [ ] Regenerate dog-com sitemap + confirm canonical host is `https://dog.com` (not the vercel.app alias)
- [ ] Confirm `metadataBase` / site URL for dog-com resolves to `https://dog.com`
- [ ] Spot-check 5 high-value pages render schema in SSR HTML

### 2. Vercel domain attach (Carlo, ~2 min in Vercel dashboard)
- [ ] Vercel → `dog-com` project → Settings → Domains → Add `dog.com` and `www.dog.com`
- [ ] Vercel will show the required DNS records (apex `A` record + `www` `CNAME`, or the
      Vercel-nameserver option) — copy them

### 3. DNS at Network Solutions (Carlo, manual — propagation 5 min–48 hr)
- [ ] Add the apex `A` record Vercel specifies (currently `76.76.21.21`) for `dog.com`
- [ ] Add the `www` `CNAME` → `cname.vercel-dns.com` (or whatever Vercel shows)
- [ ] (If using Vercel nameservers instead: point NS records at Vercel's — simpler, but moves
      DNS control to Vercel)
- [ ] Back in Vercel, click **Refresh/Verify** until both show "Valid Configuration"

### 4. Switch-on data + integrations (Carlo, free, ~2 min)
- [ ] **Un-pause Supabase `carloos-main`** (1 click) so affiliate click-analytics log from day one
      (redirects work regardless, but you want the data flowing at launch)
- [ ] Confirm `AFF_AMAZON_TAG` / `AFF_AMAZON_BRAND_TAG` (+ Skimlinks publisher ID) are set in the
      dog-com Vercel env so commissions attribute

### 5. Post-flip verification (COO + Carlo)
- [ ] `https://dog.com` serves the rebuilt homepage over HTTPS (Vercel auto-provisions the cert)
- [ ] `https://dog.com/robots.txt`, `/sitemap.xml`, `/llms.txt` resolve correctly
- [ ] Spot-check a `/go/...` affiliate link redirects to the merchant
- [ ] (When GA4 is in scope — deferred per §8a — add the property; not required to launch)

## Not required to launch (don't block on these)
- GA4 (deferred §8a) · Mailchimp/email activation · Visual photography (improves polish but the
  site is structurally launch-quality) · monetizing the ~30 remaining high-intent pages

## Cost note
Nothing here requires spending. DNS is included with the domain; Vercel hosting + cert are
already provisioned; Supabase un-pause is free. The only future spend decisions (your call) are
Supabase Pro (only if you want zero-pause analytics) and ad/email tooling later.
