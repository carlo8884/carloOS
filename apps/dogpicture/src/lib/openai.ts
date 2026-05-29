/**
 * OpenAI image generation helper.
 *
 * Two modes:
 *   1. Mock (default in dev) — returns a deterministic placehold.co URL keyed
 *      to the style id. Never makes a network call. Lets the entire pipeline
 *      (upload → generate → preview → checkout) run end-to-end with no keys.
 *   2. Live — set `DOGPICTURE_LIVE_MODE=true` and OPENAI_API_KEY. Tries
 *      `gpt-image-1` first, falls back to `dall-e-3` on the documented 404.
 *
 * The fetch call is hand-rolled rather than pulling in the `openai` SDK to
 * keep the dependency surface tiny. Both endpoints accept the same payload
 * shape and return a `data[0].url` (DALL·E) or `data[0].b64_json` (gpt-image-1).
 */

import { getStyle } from '@/data/styles'

const OPENAI_ENDPOINT = 'https://api.openai.com/v1/images/generations'
const LIVE = process.env.DOGPICTURE_LIVE_MODE === 'true' && !!process.env.OPENAI_API_KEY

export interface GenerateOptions {
  styleId: string
  petName: string
  petDescription?: string
}

export interface GenerateResult {
  url: string
  prompt: string
  model: 'gpt-image-1' | 'dall-e-3' | 'mock'
}

export async function generatePortrait(opts: GenerateOptions): Promise<GenerateResult> {
  const style = getStyle(opts.styleId)
  if (!style) throw new Error(`Unknown style: ${opts.styleId}`)

  const petLabel = opts.petDescription
    ? `${opts.petName} (${opts.petDescription})`
    : opts.petName
  const prompt = style.prompt.replace(/\{pet\}/g, petLabel)

  // ── MOCK MODE ─────────────────────────────────────────────────────────
  // Deterministic placeholder so previews render and DB rows land. The hash
  // of the prompt makes each style get a different colored card.
  if (!LIVE) {
    const hash = hashString(prompt)
    const hue = hash % 360
    const url = `https://placehold.co/1024x1024/${hslToHex(hue, 70, 80)}/${hslToHex(hue, 80, 25)}?text=${encodeURIComponent(`${style.name}\n${opts.petName}`)}`
    return { url, prompt, model: 'mock' }
  }

  // ── LIVE MODE — try gpt-image-1 first ────────────────────────────────
  try {
    const res = await callOpenAI('gpt-image-1', prompt)
    return { url: res, prompt, model: 'gpt-image-1' }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    // Documented fallback: gpt-image-1 returns 404 on accounts without access.
    if (!/404|model_not_found|not\s*found/i.test(msg)) {
      throw err
    }
  }

  // ── LIVE MODE fallback to dall-e-3 ────────────────────────────────────
  const url = await callOpenAI('dall-e-3', prompt)
  return { url, prompt, model: 'dall-e-3' }
}

async function callOpenAI(model: 'gpt-image-1' | 'dall-e-3', prompt: string): Promise<string> {
  const res = await fetch(OPENAI_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      prompt,
      n: 1,
      size: '1024x1024',
      // dall-e-3 supports `quality: 'hd'`; gpt-image-1 supports `quality: 'high'`.
      // OpenAI ignores unknown fields rather than erroring, so we send both.
      quality: model === 'dall-e-3' ? 'hd' : 'high',
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`OpenAI ${model} ${res.status}: ${body.slice(0, 200)}`)
  }

  const json = (await res.json()) as {
    data: Array<{ url?: string; b64_json?: string }>
  }
  const item = json.data?.[0]
  if (!item) throw new Error(`OpenAI ${model}: empty data array`)
  if (item.url) return item.url
  if (item.b64_json) return `data:image/png;base64,${item.b64_json}`
  throw new Error(`OpenAI ${model}: response missing url and b64_json`)
}

// ── Tiny utilities (no extra deps) ───────────────────────────────────────

function hashString(s: string): number {
  let h = 5381
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i)
  return Math.abs(h)
}

function hslToHex(h: number, s: number, l: number): string {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))
    return Math.round(255 * c).toString(16).padStart(2, '0')
  }
  return `${f(0)}${f(8)}${f(4)}`
}
