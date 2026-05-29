/**
 * POST /api/generate
 *
 * Accepts: multipart form with
 *   - photo  (File, optional in mock mode)
 *   - petName  (string)
 *   - styles  (comma-separated style ids)
 *
 * Returns: { id, previews: [{ styleId, url }] }
 *
 * Behavior:
 *   1. Uploads photo to Supabase Storage (if available, else best-effort skip).
 *   2. For each style, calls OpenAI gpt-image-1 (with dall-e-3 fallback) via
 *      `generatePortrait`. In mock mode this returns a deterministic
 *      placeholder so the rest of the pipeline still runs without keys.
 *   3. Persists a `portrait_generations` row per result.
 *   4. Returns a single bundle id — the first generation id of the batch —
 *      that /preview/[id] uses to load every variant for that batch.
 */

import { NextResponse } from 'next/server'
import { createServiceClient } from '@carloOS/db'
import { generatePortrait } from '@/lib/openai'
import { saveGeneration } from '@/lib/orders'

export const runtime = 'nodejs'
export const maxDuration = 60

function makeId(): string {
  return `pg_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`
}

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const petName = (form.get('petName') as string | null)?.trim() ?? ''
    const styles = (form.get('styles') as string | null)?.split(',').filter(Boolean) ?? []
    const photo = form.get('photo') as File | null

    if (!petName) return NextResponse.json({ error: 'petName is required' }, { status: 400 })
    if (styles.length === 0) return NextResponse.json({ error: 'At least one style required' }, { status: 400 })
    if (styles.length > 3) return NextResponse.json({ error: 'Maximum three styles per request' }, { status: 400 })

    // ── Photo upload (best-effort) ─────────────────────────────────────
    let sourcePhotoUrl: string | null = null
    if (photo && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const sb = createServiceClient()
        const bucket = process.env.SUPABASE_STORAGE_BUCKET ?? 'dogpicture'
        const key = `uploads/${makeId()}-${photo.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
        const buf = Buffer.from(await photo.arrayBuffer())
        const { error: upErr } = await sb.storage.from(bucket).upload(key, buf, {
          contentType: photo.type,
          upsert: false,
        })
        if (!upErr) {
          const { data: pub } = sb.storage.from(bucket).getPublicUrl(key)
          sourcePhotoUrl = pub.publicUrl
        } else {
          console.error('[generate] upload failed', upErr.message)
        }
      } catch (err) {
        console.error('[generate] storage error', err)
      }
    }

    // ── Generate per style ─────────────────────────────────────────────
    const batchId = makeId()
    const previews: Array<{ styleId: string; url: string; generationId: string }> = []

    for (const styleId of styles) {
      const result = await generatePortrait({ styleId, petName })
      const id = previews.length === 0 ? batchId : makeId()
      await saveGeneration({
        id,
        pet_name: petName,
        style_id: styleId,
        source_photo_url: sourcePhotoUrl,
        generated_url: result.url,
        prompt: result.prompt,
        model: result.model,
      })
      previews.push({ styleId, url: result.url, generationId: id })
    }

    return NextResponse.json({ id: batchId, previews })
  } catch (err) {
    console.error('[generate] error', err)
    const msg = err instanceof Error ? err.message : 'Internal error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
