/**
 * CarloOS Supabase Client
 * Typed client factory for server components, server actions, and browser.
 *
 * Usage:
 *   import { createServerClient, createBrowserClient } from '@carloOS/db'
 */

import { createServerClient as _createServerClient, createBrowserClient as _createBrowserClient } from '@supabase/ssr'
import type { Database } from './types'

// ─────────────────────────────────────────────
// BROWSER CLIENT (client components)
// ─────────────────────────────────────────────

export function createBrowserClient() {
  return _createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// ─────────────────────────────────────────────
// SERVER CLIENT (server components, server actions, API routes)
// Handles cookie management for SSR auth.
// ─────────────────────────────────────────────

import { cookies } from 'next/headers'

export function createServerClient() {
  const cookieStore = cookies()

  return _createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}

// ─────────────────────────────────────────────
// SERVICE ROLE CLIENT (server only — full access, no RLS)
// Used for: webhook handlers, admin operations, Stripe callbacks
// NEVER expose to client.
// ─────────────────────────────────────────────

export function createServiceClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')
  }

  return _createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      cookies: { get: () => undefined },
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}

// ─────────────────────────────────────────────
// CONVENIENCE QUERIES
// ─────────────────────────────────────────────

import type { SiteId } from '@carloOS/config'

/** Fetch a published post by site + slug */
export async function getPost(siteId: SiteId, slug: string) {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('site_id', siteId)
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) return null
  return data
}

/** Fetch posts by site and content type */
export async function getPosts(
  siteId: SiteId,
  contentType?: string,
  limit = 10,
  offset = 0,
  options?: {
    tags?: string[]
    search?: string
    dvmReviewed?: boolean
  }
) {
  const supabase = createServerClient()
  let query = supabase
    .from('posts')
    .select('id, slug, path, title, subtitle, excerpt, og_image, author_name, published_at, tags, content_type, dvm_reviewed')
    .eq('site_id', siteId)
    .eq('published', true)
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (contentType) {
    query = query.eq('content_type', contentType as never)
  }

  if (options?.tags?.length) {
    // Filter posts that contain ALL of the specified tags
    query = query.contains('tags', options.tags)
  }

  if (options?.dvmReviewed) {
    query = query.eq('dvm_reviewed', true)
  }

  if (options?.search) {
    query = query.textSearch('title', options.search, { type: 'websearch' })
  }

  const { data } = await query
  return data ?? []
}

/** Fetch species profile */
export async function getSpecies(siteId: SiteId, slug: string) {
  const supabase = createServerClient()
  const { data } = await supabase
    .from('species')
    .select('*')
    .eq('site_id', siteId)
    .eq('slug', slug)
    .eq('active', true)
    .single()
  return data
}

/** Full-text search across posts */
export async function searchPosts(siteId: SiteId, query: string, limit = 8) {
  const supabase = createServerClient()
  const { data } = await supabase
    .from('posts')
    .select('id, slug, path, title, excerpt, content_type')
    .eq('site_id', siteId)
    .eq('published', true)
    .textSearch('title', query, { type: 'websearch' })
    .limit(limit)
  return data ?? []
}

/** Get user membership for a site */
export async function getMembership(userId: string, siteId: SiteId) {
  const supabase = createServerClient()
  const { data } = await supabase
    .from('memberships')
    .select('*')
    .eq('user_id', userId)
    .eq('site_id', siteId)
    .single()
  return data
}

/** Log an analytics event (fire and forget) */
export async function logEvent(
  siteId: SiteId,
  eventType: string,
  eventData: Record<string, unknown> = {},
  options: { postId?: string; productId?: string; userId?: string } = {}
) {
  // Use browser client for client-side events, server for server-side
  try {
    const supabase = createBrowserClient()
    await supabase.from('events').insert({
      site_id: siteId,
      event_type: eventType,
      event_data: eventData,
      post_id: options.postId ?? null,
      product_id: options.productId ?? null,
      user_id: options.userId ?? null,
    })
  } catch {
    // Analytics failures are silent
  }
}
