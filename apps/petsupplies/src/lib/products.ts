/**
 * PetSupplies.com — product data accessor.
 *
 * Reads from Supabase products_v2 when env vars are configured; falls back to
 * the bundled JSON seed otherwise. This is intentional: it lets the site
 * render before the seed script has been applied to a live database.
 */

import { createClient } from '@supabase/supabase-js'
import productsJson from '../data/products.json'

export interface Product {
  id?: string
  category: string
  subcategory?: string | null
  name: string
  brand?: string | null
  vendor: string
  vendor_sku?: string | null
  price_cents?: number | null
  price_range?: string | null
  expert_score: number
  pros: string[]
  cons: string[]
  specs: Record<string, unknown>
  best_for?: string[]
  badge?: string
  /** Slugified product identifier — derived from name when product has no DB id. */
  slug: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function fromRaw(raw: Record<string, unknown> & { name: string; specs?: Record<string, unknown> }): Product {
  const specs = (raw.specs ?? {}) as Record<string, unknown>
  // The seed JSON puts badge/best_for at the top level; the DB schema uses
  // best_for column + specs jsonb. Normalize both shapes into Product.
  const badge =
    (raw['badge'] as string | undefined) ??
    (specs['_badge'] as string | undefined) ??
    undefined
  const bestFor =
    (raw['best_for'] as string[] | undefined) ??
    (specs['_best_for'] as string[] | undefined) ??
    []
  const id = (raw['id'] as string | undefined) ?? undefined
  return {
    id,
    category: raw['category'] as string,
    subcategory: (raw['subcategory'] as string | null) ?? null,
    name: raw.name,
    brand: (raw['brand'] as string | null) ?? null,
    vendor: (raw['vendor'] as string) ?? 'amazon',
    vendor_sku: (raw['vendor_sku'] as string | null) ?? null,
    price_cents: (raw['price_cents'] as number | null) ?? null,
    price_range: (raw['price_range'] as string | null) ?? null,
    expert_score: Number(raw['expert_score'] ?? 0),
    pros: (raw['pros'] as string[] | undefined) ?? [],
    cons: (raw['cons'] as string[] | undefined) ?? [],
    specs,
    best_for: bestFor,
    badge,
    slug: id ?? slugify(raw.name),
  }
}

/** All bundled-seed products, normalized to the Product shape. */
const SEED_PRODUCTS: Product[] = (productsJson as Array<Record<string, unknown> & { name: string }>).map(fromRaw)

function supabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

/** Fetch all active products for a given category, ordered by score desc. */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const client = supabase()
  if (client) {
    const { data, error } = await client
      .from('products_v2')
      .select('*')
      .eq('category', category)
      .eq('active', true)
      .order('expert_score', { ascending: false })
    if (!error && data && data.length > 0) {
      return (data as Array<Record<string, unknown> & { name: string }>).map(fromRaw)
    }
  }
  return SEED_PRODUCTS.filter((p) => p.category === category).sort(
    (a, b) => b.expert_score - a.expert_score,
  )
}

/** Fetch a single product by its slug. Slug fallback uses slugify(name). */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const client = supabase()
  if (client) {
    const { data } = await client
      .from('products_v2')
      .select('*')
      .eq('id', slug)
      .maybeSingle()
    if (data) return fromRaw(data as Record<string, unknown> & { name: string })
  }
  return SEED_PRODUCTS.find((p) => p.slug === slug) ?? null
}

/** Fetch multiple products by slugs — used by /compare. */
export async function getProductsBySlugs(slugs: string[]): Promise<Product[]> {
  const results: Product[] = []
  for (const slug of slugs) {
    const p = await getProductBySlug(slug)
    if (p) results.push(p)
  }
  return results
}

/** All products — used by the sitemap. */
export function getAllSeededProducts(): Product[] {
  return SEED_PRODUCTS
}
