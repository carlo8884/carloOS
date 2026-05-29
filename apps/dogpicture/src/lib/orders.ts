/**
 * Helpers for the `portrait_orders` Supabase table.
 *
 * In dev (when SUPABASE_SERVICE_ROLE_KEY is missing) all reads/writes go
 * to an in-memory Map so the full checkout → webhook → order page flow
 * works without a database. The data evaporates on server restart.
 */

import { createServiceClient } from '@carloOS/db'
import type { ProductType } from '@/data/products'

export type OrderStatus =
  | 'pending'
  | 'paid'
  | 'fulfilled'
  | 'shipped'
  | 'delivered'
  | 'refunded'
  | 'failed'

export interface PortraitOrder {
  id: string
  stripe_session_id: string
  customer_email: string
  product_type: ProductType
  generation_id: string
  status: OrderStatus
  printify_order_id: string | null
  total_cents: number
  image_url: string | null
  pet_name: string | null
  created_at: string
}

// ─── In-memory fallback ──────────────────────────────────────────────────
// Declared on globalThis so HMR doesn't wipe it during dev.

const globalAny = globalThis as unknown as {
  __dogpictureOrders?: Map<string, PortraitOrder>
  __dogpictureGenerations?: Map<string, GenerationRow>
}
const memOrders: Map<string, PortraitOrder> =
  globalAny.__dogpictureOrders ?? (globalAny.__dogpictureOrders = new Map())

export interface GenerationRow {
  id: string
  pet_name: string
  style_id: string
  source_photo_url: string | null
  generated_url: string
  prompt: string
  model: string
  created_at: string
}
const memGenerations: Map<string, GenerationRow> =
  globalAny.__dogpictureGenerations ?? (globalAny.__dogpictureGenerations = new Map())

function hasSupabase(): boolean {
  return !!(process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.NEXT_PUBLIC_SUPABASE_URL)
}

/**
 * Get a Supabase service-role client typed loosely enough to access the
 * `portrait_generations` / `portrait_orders` tables. The shared `Database`
 * type in `@carloOS/db` will gain these tables once we regenerate types
 * from the migration in `supabase/`; until then we widen to `any` here.
 */
function svc(): any {
  return createServiceClient() as any
}

// ─── Generations ─────────────────────────────────────────────────────────

export async function saveGeneration(row: Omit<GenerationRow, 'created_at'>): Promise<GenerationRow> {
  const full: GenerationRow = { ...row, created_at: new Date().toISOString() }

  if (hasSupabase()) {
    try {
      await svc().from('portrait_generations').insert(full)
    } catch (err) {
      console.error('[orders] saveGeneration supabase failed, falling back to memory', err)
    }
  }
  memGenerations.set(full.id, full)
  return full
}

export async function getGeneration(id: string): Promise<GenerationRow | null> {
  if (hasSupabase()) {
    try {
      const { data } = await svc()
        .from('portrait_generations')
        .select('*')
        .eq('id', id)
        .single()
      if (data) return data as GenerationRow
    } catch (err) {
      console.error('[orders] getGeneration supabase failed', err)
    }
  }
  return memGenerations.get(id) ?? null
}

// ─── Orders ──────────────────────────────────────────────────────────────

export async function saveOrder(row: Omit<PortraitOrder, 'created_at'>): Promise<PortraitOrder> {
  const full: PortraitOrder = { ...row, created_at: new Date().toISOString() }
  if (hasSupabase()) {
    try {
      await svc().from('portrait_orders').upsert(full, { onConflict: 'stripe_session_id' })
    } catch (err) {
      console.error('[orders] saveOrder supabase failed, falling back to memory', err)
    }
  }
  memOrders.set(full.stripe_session_id, full)
  return full
}

export async function getOrderBySession(sessionId: string): Promise<PortraitOrder | null> {
  if (hasSupabase()) {
    try {
      const { data } = await svc()
        .from('portrait_orders')
        .select('*')
        .eq('stripe_session_id', sessionId)
        .single()
      if (data) return data as PortraitOrder
    } catch (err) {
      console.error('[orders] getOrderBySession supabase failed', err)
    }
  }
  return memOrders.get(sessionId) ?? null
}

export async function updateOrderStatus(
  sessionId: string,
  patch: Partial<Pick<PortraitOrder, 'status' | 'printify_order_id'>>,
): Promise<void> {
  const existing = memOrders.get(sessionId)
  if (existing) memOrders.set(sessionId, { ...existing, ...patch })

  if (hasSupabase()) {
    try {
      await svc().from('portrait_orders').update(patch).eq('stripe_session_id', sessionId)
    } catch (err) {
      console.error('[orders] updateOrderStatus supabase failed', err)
    }
  }
}
