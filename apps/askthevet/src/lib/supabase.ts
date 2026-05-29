/**
 * Server-only Supabase client for AskTheVet.
 * Used by the triage API route to persist queries and by /result/[id] to read them.
 *
 * If the SUPABASE_SERVICE_ROLE_KEY env var is missing (e.g. local dev without
 * Supabase wired up), this exports `null` and the API route falls back to an
 * in-memory store so the app still works end-to-end without a DB.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabaseAdmin: SupabaseClient | null =
  url && serviceKey
    ? createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null

// ── In-memory fallback for local dev ────────────────────────────────────
// Keyed by triage id. Lives for the lifetime of the Node process.

interface StoredTriage {
  id: string
  question: string
  species: string
  age: number | null
  breed: string | null
  response_json: unknown
  monetization_route: string
  created_at: string
}

const memStore = new Map<string, StoredTriage>()

export async function saveTriageQuery(row: Omit<StoredTriage, 'created_at'>): Promise<void> {
  const fullRow: StoredTriage = { ...row, created_at: new Date().toISOString() }
  memStore.set(row.id, fullRow)

  if (!supabaseAdmin) return
  try {
    await supabaseAdmin.from('triage_queries').insert({
      id: row.id,
      question: row.question,
      species: row.species,
      age: row.age,
      breed: row.breed,
      response_json: row.response_json,
      monetization_route: row.monetization_route,
    })
  } catch (err) {
    // Persistence is best-effort — the result page still renders from memStore.
    console.warn('[askthevet] supabase insert failed:', err)
  }
}

export async function getTriageQuery(id: string): Promise<StoredTriage | null> {
  const mem = memStore.get(id)
  if (mem) return mem

  if (!supabaseAdmin) return null
  const { data, error } = await supabaseAdmin
    .from('triage_queries')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) return null
  return data as StoredTriage
}
