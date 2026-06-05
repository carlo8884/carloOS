# Product rich-snippet schema — drop-in spec for Glen

> Goal: get **review stars + price + availability** showing in Google results, and make product pages eligible for **AI Overviews / Perplexity / ChatGPT** citation. This is a pure-additive, low-offense quick win (backlog C4 / task #10): no redesign, no data migration — just structured data in the page `<head>`.
>
> **Trust guardrail (non-negotiable):** only emit `AggregateRating` if the product has **real** reviews. Never hard-code star counts or invent ratings — fake review schema is a Google manual-action risk and a trust violation. If a product has no reviews, omit the `aggregateRating` block entirely.

---

## 1. What this earns
- **Google:** star ratings, price, in-stock badge in the organic result → higher CTR.
- **AI surfaces:** clean `Product`/`Offer` data is exactly what Overviews, Perplexity, and ChatGPT extract when citing "best X" / "where to buy X."
- **Effort:** one Liquid snippet in the product template. Minutes, reversible.

## 2. Shopify Liquid snippet (paste into `product.liquid` / product section)
Drop this in the product template. It reads live Shopify product data — no hard-coded values.

```liquid
{%- comment -%} Product JSON-LD — rich snippets + AI citation. Reviews only if real. {%- endcomment -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "image": [{{ product.featured_image | image_url: width: 1200 | prepend: "https:" | json }}],
  "description": {{ product.description | strip_html | truncate: 320 | json }},
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "brand": { "@type": "Brand", "name": {{ product.vendor | json }} },
  "offers": {
    "@type": "Offer",
    "url": {{ shop.url | append: product.url | json }},
    "priceCurrency": {{ shop.currency | json }},
    "price": {{ product.selected_or_first_available_variant.price | money_without_currency | strip | json }},
    "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}",
    "itemCondition": "https://schema.org/NewCondition"
  }
  {%- if product.metafields.reviews.rating_count and product.metafields.reviews.rating_count > 0 -%}
  ,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": {{ product.metafields.reviews.rating.value | json }},
    "reviewCount": {{ product.metafields.reviews.rating_count | json }}
  }
  {%- endif -%}
}
</script>
```

Notes:
- The `reviews.*` metafields are the **Shopify Product Reviews / Judge.me / Okendo** convention. Adjust the namespace to whatever review app the store uses; if none, the `aggregateRating` block simply never renders (correct behavior).
- `money_without_currency` keeps `price` numeric (schema requires a plain number, no `$`).

## 3. BreadcrumbList (helps Google show the category path + aids internal-link signals)
Add on collection/product pages:

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": {{ shop.url | json }} },
    {%- if product.collections.first -%}
    { "@type": "ListItem", "position": 2, "name": {{ product.collections.first.title | json }}, "item": {{ shop.url | append: product.collections.first.url | json }} },
    {%- endif -%}
    { "@type": "ListItem", "position": 3, "name": {{ product.title | json }} }
  ]
}
</script>
```

## 4. Validate before/after (no guesswork)
1. Paste snippet → save theme.
2. Test a live product URL in **Google Rich Results Test** (search.google.com/test/rich-results) — confirm "Product snippets" detected, 0 errors.
3. Spot-check that a no-review product renders **without** `aggregateRating`.
4. Re-submit the product sitemap in Search Console; stars typically appear within a crawl cycle.

## 5. Why it's a safe gift to Glen
- Additive only — nothing removed, nothing restructured.
- Uses the store's own live data — no claims, no fabrication.
- Frames as "more clicks from the same rankings" + "shows up in AI answers" — upside, not criticism.

---
_Last updated: 2026-06-05 · backlog C4 / task #10. Pairs with the deals-page FAQ schema and the calculator's HowTo schema for full structured-data coverage._
